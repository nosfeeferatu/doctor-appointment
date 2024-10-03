import { useState } from "react";
import { toast } from "react-toastify";
import SyncLoader from "react-spinners/SyncLoader";
import { BASE_URL } from "../../../config";

// eslint-disable-next-line react/prop-types
const AddFAQ = ({ setAddForm }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
    content: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/faq/add`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      setAddForm(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            required
          />
        </div>

        <div className="mb-5">
          <textarea
            placeholder="Content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            maxLength={150}
            className="resize-none w-full pr-4 py-3 border-b border-solid border-[#0066ff61 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
          ></textarea>
        </div>

        <div className="mt-7">
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
          >
            {loading ? <SyncLoader size={10} color="#ffffff" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFAQ;
