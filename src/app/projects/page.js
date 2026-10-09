import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

function page() {
  const projectsCard = [
    {
      title: 'NDC-X',
      path: 'projects/ndc-x',
      image: 'img/projects/1.jpg',
      short: 'A powerful B2B portal designed for streamlined and efficient flight booking, offering reliability and advanced solutions for businesses.'
    },
    {
      title: 'NSAS Tourism',
      path: 'projects/nsas-tourism',
      image: 'img/projects/2.jpg',
      short: 'A comprehensive tourism website offering tailored travel solutions, inspiring destinations, and seamless booking experiences for all your adventures.'
    },
    {
      title: 'Aero Star Aviation',
      path: 'projects/aero-star-aviation',
      image: 'img/projects/3.jpg',
      short: 'A trusted platform delivering top-notch aviation services, tailored solutions, and seamless experiences for all your aviation needs.'
    },
    {
      title: 'NebuJets',
      path: 'projects/nebujets',
      image: 'img/projects/4.jpg',
      short: 'NEBU Jets redefines luxury and corporate private jet travel, delivering exceptional service and unmatched professionalism.'
    },
    {
      title: 'Elite Motion Car Rental',
      path: 'projects/elitemotion',
      image: 'img/projects/5.jpg',
      short: 'Explore a premium collection of luxury cars, thoughtfully curated by category to match your personality, lifestyle, and the kind of driving experience you’ve always imagined.'
    },
  ];
  return (
    <Layouts>
      <PageBanner pageName={"Works"} pageTitle={"Case Studies: Projects"} />
      {/* portfolio */}
      <section className="mil-p-120-120">
        <div className="container">
          {
            projectsCard.map((card, key) => {
              const isEven = (key + 1) % 2 === 0;
              const rowClass = isEven ? 'flex-sm-row-reverse' : '';
              return <div className={"row justify-content-between align-items-center " + rowClass} key={key}>
                <div className="col-xl-6 mil-mb-60">
                  <div className="mil-project-cover">
                    <img src={`/${card.image}`} alt="Project" />
                  </div>
                </div>
                <div className="col-xl-5 mil-mb-60">
                  <h3 className="mil-mb-30">{ card.title }</h3>
                  <p className="mil-mb-30 mil-dark-soft">{ card.short}</p>
                  <Link href={card.path} className="mil-button-with-label">
                    <div className="mil-button mil-border mil-icon-button">
                      <span>
                        <i className="fas fa-plus" />
                      </span>
                    </div>
                    <span className="mil-dark-soft">See More</span>
                  </Link>
                </div>
              </div>;
            })
          }
        </div>
      </section>
    </Layouts>
  );
}

export default page;
