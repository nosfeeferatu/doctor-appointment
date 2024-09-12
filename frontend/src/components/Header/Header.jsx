import { useRef, useContext } from "react";
import logo from "../../assets/images/logo-1.png";
import mobileLogo from "../../assets/images/mobile-logo.png";
import logoText from "../../assets/images/medikare.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center sticky__header" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/home">
            <div className="flex items-center">
              <img src={logo} alt="" className="w-[90px] hidden sm:block" />
              <img
                src={logoText}
                alt=""
                className="w-[100px] hidden sm:block"
              />
              <img
                src={mobileLogo}
                alt=""
                className="w-[90px] block sm:hidden"
              />
            </div>
          </NavLink>

          {/* MENU */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2rem] bg-gradient-to-t from-[#609BF3] from-50% to-[#B7D4FF] md:bg-none">
              {/* LOGO */}
              <NavLink to="/home">
                <div className="flex items-center">
                  <img src={logo} alt="" className="w-[100px] md:hidden" />
                  <img src={logoText} alt="" className="w-[100px] md:hidden" />
                </div>
              </NavLink>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[18px] leading-7 font-[600]"
                        : "text-whiteColor text-[18px] leading-7 hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* NAV RIGHT */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={user?.photo}
                      className="w-full rounded-full"
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white text-[16px] font-[500] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
