import Link from "next/link";
import PageBanner from "../../components/PageBanner";
import Layouts from "../../layouts/Layouts";
import ContactForm from "@/src/components/sections/contact-page/ContactForm";

export const metadata = {
  title: 'Contact Us - SKYXHUB',
  description: 'Get in touch with SKYXHUB for your technology solution needs. Contact our expert team today.',
};

const Contact = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={"Let’s discuss your opportunity"}
      />
      {/* contact */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <ContactForm />
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                <p className="mil-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <Link href="mailto:info@skyxhub.com" className="mil-link mil-link-sm">
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="/img/icons/md/8.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="/img/icons/md/9.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
      {/* map */}
      <div>
        <div className="mil-map-frame">
          {/* <iframe
            src="https://www.google.com/maps?q=25.26861245,55.33627561&z=17&output=embed"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.0609371472339!2d55.331462369604154!3d25.262384611449953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdcbfde0157%3A0x2062f2465e20d98f!2sCity%20Pharmacy%20Building%20-%2022A%20St%20-%20Al%20Khabaisi%20-%20Dubai!5e0!3m2!1sen!2sae!4v1753449677504!5m2!1sen!2sae"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container" />
      </div>
    </Layouts>
  );
};

export default Contact;
