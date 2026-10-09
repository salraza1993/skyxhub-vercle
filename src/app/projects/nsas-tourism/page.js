import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

function ProjectDetails() {
  const bannerTitle = 'NSAS Tourism – Website Development Project'
  const projectInfo = [
    {key: 'Client', value: 'NSAS Tourism'},
    {key: 'Service', value: 'Website Development, Tour Packages'},
    {key: 'Industry', value: 'Travel Industry'},
    {key: 'Stack', value: 'Front-end, Back-end, Database, Infrastructure'},
  ];
  const keyPoints = [
    "Modern, user-friendly design to enhance the visitor experience.",
    "Mobile optimization for seamless browsing on any device.",
    "Fast loading speeds and clean navigation to keep users engaged.",
    "Scalable and stable  structure so the website can grow with their business needs.",
    "This project not only strengthened NSAS Tourism’s online presence but also provided them with the flexibility to manage and update their digital content efficiently."
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
                We had the privilege of working with <strong>NSAS Tourism</strong> to design and develop a professional, fully responsive website tailored to their brand and audience. The site was built with a robust back-end CMS content management system for admin and user management enabling the <strong>NSAS</strong> team to easily manage content, update travel packages, post news, and make changes without technical assistance with also including a B2B platform for their travel agency with group booking solutions with creating a dynamic route map for all wizz air flights from the UAE.
              </p>
              <p className="mil-mb-20 mil-dark-soft">Our development process focused on:</p>
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
                
              </p>
              <div className="project-image mil-mb-20 mil-bordered">
                <img src="/img/partners/nsas-tourism-bg.jpg" alt="NSAS Tourism Project" />
              </div>
              <br />
              <a href="https://nsas-tourism.com/" target="_blank" className="mil-button mil-border mil-mb-30"><span>Visit Website</span></a>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default ProjectDetails;
