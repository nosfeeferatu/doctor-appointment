import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import About from "../components/About/About";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero_section pt-[50px] md:pt-[80px] xl:pt-[10px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Healthcare, Streamlined for you
                </h1>

                <p className="text_para pt-5">
                  MediKare allows you to book appointments in real time in just
                  a few taps, whether it is scheduling routine check-ups or
                  seeking specialist care.
                  <br />
                  Medikare is the smarter, faster way to manage your health, all
                  in one place
                </p>

                <Link to="/doctors">
                  <button className="btn">Request an Appointment</button>
                </Link>

                {/* Hero Counter */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      10+
                    </h2>
                    <span className="w-[100px] h-2 bg-lighterColor rounded-full block mt-[-8px]"></span>
                    <p className="text__para mt-[8px]">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-lighterColor rounded-full block mt-[-8px]"></span>
                    <p className="text__para mt-[8px]">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-lighterColor rounded-full block mt-[-8px]"></span>
                    <p className="text__para mt-[8px]">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Content 2 */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section end */}
      <section>
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center text-[50px]">
            Providing the best medical services
          </h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] text-center">
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon2} className="xl:px-20" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[7]">
                Get Best Treatments
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 ">
                Medikare has just the best doctors for any treatments you need.
                Patients leave healthy with the care from our experts ranging
                from dermatology to surgery
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon1} className="xl:px-20" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[7]">
                Find your Doctor
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 ">
                World-class care for everyone. Our health system offers
                unmatched, expert health care. From the lab to the clinic
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon3} className="xl:px-20" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[7]">
                Book Appointment
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 ">
                Booking appointments with Medikare is just a few taps, find the
                best doctor for you with our system, it will never be easier
                than this.
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
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
            <h2 className="heading text-center text-[50px]">
              Our medical services
            </h2>
            <p className="text__para text-center">
              World Class care for all, these are the services we provide
              especially
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* Services End */}

      {/* Features Start */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading text-[50px]">
                Get virtual treatment <br /> anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an apponintment time.
                </li>
              </ul>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" className="w-3/4" />
            </div>
          </div>
        </div>
      </section>
      {/* Features End */}

      {/* Doctors Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-[50px]">
              Our Great Doctors
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health systems offers
              unmatched, expert health care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* Doctors End -- Apple found hehe */}

      {/* Faq Section Start*/}
      <section>
        <div className="container mt-5">
          <div className="flex justify-between gap-[50px] xl:gap-8">
            <div className="w-1/2 hidden relative mx-auto md:block">
              <img src={faqImg} alt="" className="sticky top-28" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading text-[50px]">
                Frequently asked questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* Faq Section End */}
      {/* Testimonials */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-[50px]">
              What our patients say
            </h2>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* Testimonials end */}
    </>
  );
};

export default Home;
