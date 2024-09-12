import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="container text-center">
        <h2 className="heading">Our Medical Services</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          World-class care for everyone. Our health systems offers unmatched,
          expert health care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
