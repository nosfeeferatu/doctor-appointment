import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] flex-col-reverse lg:flex-row">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              pariatur atque, corporis, doloremque, dolore consequatur doloribus
              voluptatibus quas expedita neque vero magnam! Omnis consequuntur
              iste numquam quo cupiditate sunt saepe eos impedit quos? Labore,
              recusandae nobis! Neque repellendus nemo, itaque molestias soluta
              omnis repudiandae culpa, sequi sed dolorem ad nostrum.
            </p>

            <p className="text__para mt-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              reprehenderit dolorem dolore magnam ratione voluptatum!
            </p>

            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
