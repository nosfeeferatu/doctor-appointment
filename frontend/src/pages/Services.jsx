import ServiceList from "../components/Services/ServiceList";

const Services = () => {
  return (
    <section>
      <div className="container text-center">
        <h2 className="heading">Our Medical Services</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          World-class care for everyone. Our health systems offers unmatched,
          expert health care.
        </p>
        <ServiceList />
      </div>
    </section>
  );
};

export default Services;
