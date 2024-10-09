// import React from "react";
import aboutImg from "../../assets/images/about.png";
// import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center gap-[50px] lg:gap-[130px] flex-col-reverse lg:flex-row">
          {/* ABOUT IMG */}
          <div className="relative lg:w-1/2 z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
          </div>

          {/* ABOUT CONTENT */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading text-[50px]">
              Proud to be one of the nations best
            </h2>
            <p className="text__para">
              Medikare leads India in the doctor appoinment space, with our
              unmatched database of doctors who are ready to help over 15+
              locations all over our great nation, Medikare has ensured over the
              years that all patients recieve utmost care regardless of the
              ailments.
            </p>

            <p className="text__para mt-[30px]">
              This is the secret to our 100% Customer Satisfaction, with 15+
              locations and 10 years of experience and a bit of creativity, what
              else do we need to the nations best
            </p>
            {/* 
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
