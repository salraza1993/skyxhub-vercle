import Link from 'next/link'
import React from 'react'

function HomeSpecialSection() {
  return (
    <section className="mil-gradient-bg mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
                Empowering Global Travel Through Digital Innovation
              </span>
              <h2 className="mil-light mil-mb-60">
                Comprehensive <span className="mil-accent">B2B2B Booking</span>{" "} and <span className="mil-accent">Distribution</span> Platform
              </h2>
              <h5 className="mil-light-soft mil-mb-30 mil-font-400">
                Our proprietary &nbsp;
                <span className="mil-uppercase mil-font-500 mil-underline-accent">skyXhub</span>&nbsp;
                platform is a robust B2B2B booking and distribution system that provides.
                <span className="mil-ml-10 mil-accent mil-h6">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </h5>
            </div>
            <div className="col-xl-7 mil-mb-30">
              <ul className="mil-list mil-list-pills mil-mb-30">
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Multi IATA</span>
                </li>
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Multi GDS</span>
                </li>
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Direct and Indirect NDC content of airlines</span>
                </li>
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Automation</span>
                </li>
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Direct Airlines' XML/JSON content</span>
                </li>
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Real-time airline ticketing and inventory management</span>
                </li>
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Multi-channel content access for sub-agents</span>
                </li>
                <li className="mil-list-item">
                  <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                  <span className="text">Comprehensive reporting and sales optimization tools</span>
                </li>
              </ul>
              <h5 className="mil-light-soft mil-mb-30 mil-font-400">
                This technology empowers our partners with efficient distribution and enhanced sales capabilities withn global expansion over 40,000 registered users under one of our most succssful product SKY x hub  
              </h5>
              <Link href={'/contact'} className="mil-button mil-border mil-light">
                <span>Start Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HomeSpecialSection
