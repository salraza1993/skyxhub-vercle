import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

function ProjectDetails() {
  const bannerTitle = 'Nebu Jets – Private Aviation Platform'
  const projectInfo = [
    {key: 'Client', value: 'Nebu Jets'},
    {key: 'Service', value: 'Private Jet Charter Platform, Luxury Travel Solutions, Booking Engine, Fleet Management, Payment Integration, Multi-Currency Support, Responsive Design, Global Operations'},
    {key: 'Industry', value: 'Private Aviation & Luxury Travel'},
    {key: 'Stack', value: 'React, Node.js, MongoDB, Cloud Infrastructure'},
  ];
  const keyPoints = [
    "Intuitive private jet charter booking system with flexible search and filtering options.",
    "Real-time availability management for private jets, business jets, and helicopter charters.",
    "Support for global travel to over 20,000 destinations across the globe.",
    "Multi-location operations management (Dubai, Abu Dhabi, Cairo, Riyadh).",
    "Comprehensive admin panel for fleet management, pricing, and booking administration.",
    "Advanced request quotation system with detailed passenger and flight information.",
    "Secure payment gateway integration with multi-currency support.",
    "Mobile-optimized responsive design for seamless booking on any device.",
    "Empty legs program management and promotional offers display."
  ];
  return (
    <Layouts>
      <PageBanner
        pageName={"nsas-tourism"}
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
                We had the privilege of partnering with <strong>Nebu Jets</strong> to develop a premium, fully responsive private aviation platform that redefines luxury travel booking. The platform enables seamless charter bookings for private jets, business jets, and helicopter services across over 20,000 global destinations. Operating from strategic locations in Dubai, Abu Dhabi, Cairo, and Riyadh, <strong>Nebu Jets</strong> needed a sophisticated booking engine that could handle complex operations while maintaining an exceptional user experience. Our solution features advanced search and filtering, real-time availability management, and a comprehensive admin dashboard for fleet and pricing optimization.
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
                The platform integrates secure payment processing with multi-currency support, flexible scheduling options, and personalized service management. We implemented advanced features including empty legs program management, quote request systems, and mobile-optimized responsive design for booking on-the-go. The result is a scalable, enterprise-grade luxury travel platform that has positioned <strong>Nebu Jets</strong> as a leading private aviation service provider, offering unmatched flexibility, privacy, and luxury to corporate and leisure travelers worldwide.
              </p>
              <div className="project-image mil-mb-20 mil-bordered">
                <img src="/img/partners/nebujets-bg.jpg" alt="Nebujets Project" />
              </div>
              <br />
              <a href="https://nebujets.com/" target="_blank" className="mil-button mil-border mil-mb-30"><span>Visit Website</span></a>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default ProjectDetails;
