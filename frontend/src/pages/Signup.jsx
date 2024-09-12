import patientSignupImg from "../assets/images/patient-signup.png";
import doctorSignupImg from "../assets/images/doctor-signup.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1024px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
          <Link to="/register/patient">
            {/* IMAGE BOX */}
            <div className="lg:block bg-darkerColor rounded-2xl">
              <h2 className="text-center py-7 text-lighterColor uppercase font-extrabold text-2xl">
                Patient Sign-Up
              </h2>
              <figure className="rounded-b-2xl">
                <img
                  src={patientSignupImg}
                  alt=""
                  className="w-full rounded-b-2xl"
                />
              </figure>
            </div>
          </Link>

          {/* IMAGE BOX */}
          <Link to="/register/doctor">
            <div className="lg:block bg-darkerColor rounded-2xl">
              <h2 className="text-center py-7 text-lighterColor uppercase font-extrabold text-2xl">
                Doctor Sign-Up
              </h2>
              <figure className="rounded-b-2xl">
                <img
                  src={doctorSignupImg}
                  alt=""
                  className="w-full rounded-b-2xl"
                />
              </figure>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
