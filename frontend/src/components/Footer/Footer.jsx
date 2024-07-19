import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ri';


const socialLinks = [
  {
    path: "https://www.youtube.com/c/CodingWithMuhib",
    icon: <AiFillYoutube className="group-hover: text-white w-4 h-5"/>
  },
  {
    path: "https://github.com/codingwithmuhib",
    icon: <AiFillGithub className="group-hover: text-white w-4 h-5"/>
  },
  {
    path: "https://www.instagram.com/muhiib168.official/",
    icon: <AiOutlineInstagram className="group-hover: text-white w-4 h-5"/>
  }
]


const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
