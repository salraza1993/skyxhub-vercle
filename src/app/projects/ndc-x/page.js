import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

function ProjectDetails() {
  const bannerTitle = 'NDC-X - B2B2B Portal'
  const projectInfo = [
    {key: 'Client', value: 'NSAS Tourism'},
    {key: 'Service', value: 'Website development and B2B2B platform'},
    {key: 'Industry', value: 'Travel Industry'},
    {key: 'Stack', value: 'Front-end, Back-end, Database, Infrastructure'},
  ];
  const keyPoints = [
    "Multi IATA, Multi GDS.",
    "Direct and Indirect NDC content of airlines.",
    "Direct Airlines' XML/JSON content.",
    "Real-time airline ticketing and inventory management.",
    "Multi-channel content access for sub-agents.",
    "Comprehensive reporting and sales optimization tools.",
    "Automation"
  ];
  return (
    <Layouts>
      <PageBanner
        pageName={"ndc-x"}
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
              <p className="mil-mb-30 mil-dark-soft">
                Our proprietary <strong>NDC-X</strong>  platform is a robust B2B2B booking and distribution system that provides:
              </p>
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
                This technology empowers our partners with efficient distribution and enhanced sales capabilities withn global expansion over 40,000 registered users under one of our most succssful product NDC-X. Experience the future of travel booking with NDC-X, our flagship B2B2B platform.Built exclusively for travel agents worldwide, NDC-X is an intuitive, all-in-one online solution that streamlines andoptimizes every aspect of the booking process. Whether you're managing flights, hotels, or group bookings, NDC-Xsimplifies your workflow, saving you time and maximizing efficiency.
              </p>
              <div className="project-image mil-mb-20 mil-bordered">
                <img src="/img/photo/partners.png" alt="NDC-X Project" />
              </div>
              <p className="mil-mb-20 mil-dark-soft">
                OFFERING 24/7 Operational Excellence, Multilingual Live Chat Support, Dedicated Group Booking Support, Experienced Sales Team, Specialized Customer Service, Efficient Refund, Reissue & Void Processing, Account & Bank Transfer Support, Technology & Commercial Advantage, High-Speed, Reliable System, Competitive Profit Margins, Marketing Support, Incentives & Giveaways.
              </p>
              <p className="mil-mb-20 mil-dark-soft">
                STORY Over the past two years, NDC-X has demonstrated exceptional growth and adoption, with significant increases in user engagement, transactions processed, and client satisfaction. This remarkable growth trajectory is a direct result of our unwavering commitment to innovation, customer-centric solutions, and strategic partnerships. As we continue to innovate and grow, our strategic focus is on, enhancing user experiences, and setting new standards in travel technology. 
              </p>
              <p className="mil-mb-20 mil-dark-soft">
                <strong>40,000+ Registered Users:</strong> Asignificant increase in globaladoption, solidifying NDC-X'sposition as a leading traveltechnology platform.
              </p>
            </div>
          </div>
          <br />
          <a href="https://ndc-x.com/" target="_blank" className="mil-button mil-border mil-mb-30"><span>Visit Website</span></a>
        </div>
      </section>
    </Layouts>
  );
}

export default ProjectDetails;
