import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import About from "../components/About/About";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServiceList from "../components/Services/ServiceList";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* Hero Content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life
                  </h1>

                  <p className="text_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates libero sapiente repellendus ut, aliquam expedita
                    magni laboriosam praesentium quas est non similique, nulla
                    eveniet excepturi? Voluptatibus numquam et veritatis est.
                  </p>

                  <button className="btn">Request an Appointment</button>

                  {/* Hero Counter */}
                  <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                    <div>
                      <h2 className="text-[36px] leading-[506px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                        30+
                      </h2>
                      <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Years of Experience</p>
                    </div>
                    <div>
                      <h2 className="text-[36px] leading-[506px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                        15+
                      </h2>
                      <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Clinic Location</p>
                    </div>
                    <div>
                      <h2 className="text-[36px] leading-[506px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                        100%
                      </h2>
                      <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Patient Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero Content 2 */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} className="w-full mb-[30px]" />
                  <img src={heroImg03} className="w-full " />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section end */}
        <section>
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[7]">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group_hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[7]">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for every one. Our health system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group_hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[7]">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group_hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />
        {/* About Section End */}

        {/* Services Section */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our medical services</h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health systems offers
                unmatched, expert health care
              </p>
            </div>

            <ServiceList />
          </div>
        </section>
        {/* Services End */}
      </>
    </>
  );
};

export default Home;
