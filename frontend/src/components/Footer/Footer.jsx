import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-1.png";
import logotext from "../../assets/images/medikare.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://youtu.be/ZQdQIIF1DOY?si=nOdp14P-S1J2GDTq",
    icon: <AiFillYoutube className="group-hover: text-black w-4 h-5" />,
  },
  {
    path: "https://github.com/codingwithmuhib",
    icon: <AiFillGithub className="group-hover: text-black w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/muhib160.official/",
    icon: <AiOutlineInstagram className="group-hover: text-black w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/codingwithmuhib/",
    icon: <RiLinkedinFill className="group-hover: text-black w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/doctors",
    display: "Request an Appointment",
  },
  {
    path: "/contact",
    display: "Reach Out To Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer pb-16 pt-10">
      <div className="container">
        <div className="flex justify-evenly items-center text-center flex-col md:flex-row md:text-left flex-wrap gap-[30px]">
          <div>
            <div className="flex flex-col items-center md:block">
              <img src={logo} alt="" width="100px" />
              <img src={logotext} alt="" width="100px" />
            </div>

            {/* <div className="flex justify-center items-center gap-3 mt-4 md:justify-normal">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9  rounded-full flex items-center justify-center group hover:bg-iconColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div> */}
            <p className="text-[14px] leading-5 font-[400] text-black mt-4">
              Copyright © {year} <br></br>developed by 3Bloke Technologies all
              rights reserved
            </p>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-whiteColor hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Want to:
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-whiteColor hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
