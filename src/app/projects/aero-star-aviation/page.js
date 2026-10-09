import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

function ProjectDetails() {
  const bannerTitle = 'Aerostar – Advanced Website Development Project'
  const projectInfo = [
    {key: 'Client', value: 'Aero Star Aviation Services'},
    {key: 'Service', value: 'Website Development'},
    {key: 'Industry', value: 'Airport Aviation'},
    {key: 'Stack', value: 'Headless, CMS, NextJs'},
  ];
  const keyPoints = [
    "Intuitive UX/UI design  to optimize user engagement and navigation flow.",
    "Mobile-first, cross-platform optimization ensuring seamless accessibility across all devices and browsers.",
    "Optimized server-side performance with accelerated load times and minimal latency.",
    "Modular, scalable framework designed for future feature integration and business expansion.",
    "This solution not only reinforced Aerostar’s digital footprint but also delivered a technically agile platform capable of evolving alongside their operational and market demands."
  ];
  return (
    <Layouts>
      <PageBanner
        pageName={"aero-star-aviation"}
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
                        <div className="mil-divider mil-divider-left mil-mb-15" />
                      )}
                    </div>
                  })
                }
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-dark-soft mil-mb-30">Overviews</span>
              <h3 className="mil-mb-30">Our Solution</h3>
              <p className="mil-mb-15 mil-dark-soft">
                We had the opportunity to collaborate with Aerostar on the design and development of a high-performance, fully responsive website engineered to meet modern digital standards. The platform was powered by a robust, scalable back-end CMS architecture, empowering the Aerostar team to autonomously manage dynamic content, update service offerings, publish news, and implement changes in real time without dependency on external support tailored for ground handling aviation services.
              </p>
              <p className="mil-mb-20 mil-dark-soft">
                Our development approach emphasized:
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
              <div className="project-image mil-bordered">
                <img src="/img/partners/aero-star-bg.jpg" alt="NDC-X Project" />
              </div>
              <br />
              <a href="https://aerostar-aviation.com/" target="_blank" className="mil-button mil-border mil-mb-30"><span>Visit Website</span></a>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default ProjectDetails;
