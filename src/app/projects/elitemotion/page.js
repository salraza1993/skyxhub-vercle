import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

function ProjectDetails() {
  const bannerTitle = 'Elite Motion Car Rental – Luxury Car Rental Platform'
  const projectInfo = [
    {key: 'Client', value: 'Elite Motion Car Rental'},
    {key: 'Service', value: 'Full-Stack Web Development, Luxury Car Rental Platform, Advanced Search & Filtering, Real-Time Booking System, Payment Gateway Integration, Customer Dashboard, Admin Fleet Management, 24/7 Booking Support, Responsive Design, Performance Optimization'},
    {key: 'Industry', value: 'Luxury Car Rental & Travel'},
    {key: 'Stack', value: 'React, Node.js, MongoDB, Cloud Infrastructure'},
  ];
  const keyPoints = [
    "Advanced car search with filtering by brand, category, price range, and vehicle features.",
    "Real-time availability management for luxury, sports, exotic, SUV, and economy vehicles.",
    "Seamless booking system with instant confirmation and automated notifications.",
    "Secure payment gateway integration for hassle-free transactions.",
    "Customer dashboard for tracking bookings, managing reservations, and profile management.",
    "Comprehensive admin panel for fleet management, pricing control, and booking oversight.",
    "24/7 support integration with WhatsApp, call, and email contact options.",
    "Mobile-optimized responsive design for seamless experience across all devices.",
    "Premium vehicle catalog showcasing luxury brands: Ferrari, Lamborghini, McLaren, Porsche, Bentley, Mercedes, and more."
  ];
  return (
    <Layouts>
      <PageBanner
        pageName={"elitemotion"}
        pageTitle={bannerTitle}
        bannerPath={"/img/photo/hero-banner-team.jpg"}
      />
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div className="mil-project-info mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Project Info</h5>
                {
                  projectInfo.map((list, index) => {
                    return <div key={index}>
                      <p className="mil-mb-10">{list.key}</p>
                      <h6 className="mil-mb-15">{list.value}</h6>
                      { index < projectInfo.length - 1 && (
                        <div className="mil-divider mil-divider-left mil-mb-30" />
                      )}
                    </div>
                  })
                }
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-dark-soft mil-mb-30">Overviews</span>
              <h3 className="mil-mb-30">Our Solution</h3>
              <p className="mil-mb-20 mil-dark-soft">
                We had the privilege of partnering with <strong>Elite Motion Car Rental</strong> to develop a sophisticated, fully responsive luxury car rental platform for the Dubai market. The platform showcases a premium collection of luxury, sports, exotic, and SUV vehicles from top-tier brands including Ferrari, Lamborghini, McLaren, Porsche, Bentley, and Mercedes. Our solution features an intuitive booking engine with real-time availability management, enabling customers to search, filter, and reserve vehicles instantly. The platform includes a comprehensive admin dashboard for fleet management, pricing optimization, and booking oversight, while providing 24/7 customer support through WhatsApp, email, and phone integration.
              </p>
              <p className="mil-mb-20 mil-dark-soft">Our development approach focused on:</p>
              <div className="row mil-mb-30">
                <div className="col-xl-12">
                  <ul className="mil-list mil-list-pills mil-light-soft flex-column">
                    {
                      keyPoints.map((point, index) => (
                        <li key={index} className="mil-list-item max-width--content">
                          <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                          <span className="text">{point}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <p className="mil-mb-20 mil-dark-soft">
                The platform integrates secure payment processing, customer authentication, and automated booking confirmations. We implemented a zero-deposit booking model with free delivery service options, competitive pricing guarantee, and premium quality fleet management. Our team optimized for performance, SEO, and security to ensure fast load times and data protection. The result is a scalable, enterprise-grade platform that has positioned <strong>Elite Motion Car Rental</strong> as a leading luxury car rental service in Dubai, handling complex fleet operations with ease and delivering an exceptional customer experience.
              </p>
              <div className="project-image mil-mb-20 mil-bordered">
                <img src="/img/partners/elitemotion-bg.jpg" alt="NDC-X Project" />
              </div>
              <a href="https://elitemotionco.com/" target="_blank" className="mil-button mil-border mil-mb-30"><span>Visit Website</span></a>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default ProjectDetails;
