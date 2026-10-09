
import { NextResponse } from 'next/server';

async function verifyTurnstileToken(token) {
  if (!token) {
    return { success: false, error: 'Captcha token is missing' };
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    return { success: false, error: 'Captcha secret key is missing' };
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: 'Captcha verification failed' };
  }
}

export async function POST(request) {
  try {
    const { formData, token, formType } = await request.json();

    // Verify Turnstile captcha
    const captchaResult = await verifyTurnstileToken(token);
    if (!captchaResult.success) {
      console.error('Turnstile verification failed', {
        error: captchaResult.error,
        errorCodes: captchaResult['error-codes'],
      });

      return NextResponse.json({ 
        success: false, 
        error: 'Captcha verification failed', 
      }, { status: 400 });
    }

    let formId = '';
    if(formType === 'home-page-form') formId = 682;
    else if(formType === 'newsletter') formId = 683;
    else { formId = 679; }
    const wpUrl = `https://admin.nsas-tourism.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
    const requestData = new FormData();
    Object.keys(formData).forEach(key => {
      requestData.append(key, formData[key]);
    });

    requestData.append("_wpcf7_unit_tag", "wpcf7-f679-p2-o1");
    
    try {
      const response = await fetch(wpUrl, { method: 'POST', body: requestData });
      const data = await response.json();
      
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted to WordPress', 
      });
    } catch (fetchError) {
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to submit to WordPress', 
      }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message, innerError: err }, { status: 500 });
  }
}
