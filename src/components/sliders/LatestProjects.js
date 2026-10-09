"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../common/sliderProps";

import SectionData from "../../data/sliders/latest-projects.json";
import { useState } from "react";

const LatestProjects = ({ projects }) => {
  const [projectsCard, setProjectsCard] = useState([
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
  ]);
  return (
    <section className="mil-works mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "40%" }} />
      <div className="container">
        <div className="row align-items-center mil-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <h2 className="mil-mb-30">{SectionData.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-slider-btn-prev mil-works-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-works-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          {...sliderProps.latestProjectSlider}
          className="swiper-container mil-works-slider mil-mb-90"
        >
          {projectsCard.map((item, key) => (
            <SwiperSlide className="swiper-slide" key={key}>
              <Link href={item.path} className="mil-card">
                <div className="mil-cover-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">{item.title}</h4>
                    {item.author && (
                      <h6>
                        by: <span className="mil-accent-2">{item.author}</span>
                      </h6>
                    )}
                  </div>
                  <div className="mil-card-text">
                    <p>{item.short}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <Link
              href={SectionData.button1.link}
              className="mil-link mil-mb-30"
            >
              <span>{SectionData.button1.label}</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <Link
                href={SectionData.button2.link}
                className="mil-button mil-border mil-mb-30"
              >
                <span>{SectionData.button2.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestProjects;
