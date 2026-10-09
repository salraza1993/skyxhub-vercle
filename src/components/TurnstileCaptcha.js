'use client';
import { useEffect, useRef } from 'react';


export function TurnstileCaptcha({ onVerify }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.turnstile || !ref.current) return;

    const widgetId = window.turnstile.render(ref.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      callback: (token) => onVerify(token),
    });

    return () => {
      window.turnstile?.remove(widgetId);
    };
  }, [onVerify]);

  return <div ref={ref} />;
}
