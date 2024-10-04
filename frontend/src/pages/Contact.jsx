import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL, token } from "../config";
import { toast } from "react-toastify";
import SyncLoader from "react-spinners/SyncLoader";

const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/message`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);
      navigate(0);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="px-4 sm:px-20 lg:px-4 lg:w-[1024px] mx-auto max-w-wscreen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form action="#" className="space-y-8" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="form__label">
              Your Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              required
              className="form__input mt01"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject*
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={contact.subject}
              onChange={handleInputChange}
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message*
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              name="message"
              required
              value={contact.message}
              onChange={handleInputChange}
              placeholder="Leave a comment..."
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            {loading ? <SyncLoader size={10} color="#ffffff" /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
