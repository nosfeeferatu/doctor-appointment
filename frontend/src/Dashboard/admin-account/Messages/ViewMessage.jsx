import Loader from "../../../components/Loader/Loading";
import Error from "../../../components/Error/Error";
import { BASE_URL, token } from "../../../config";
import useFetchData from "../../../hooks/useFetchData";

// eslint-disable-next-line react/prop-types
const ViewMessage = ({ messageID }) => {
  console.log(messageID);
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/message/${messageID}`
  );

  return (
    <div className="py-5 mx-auto">
      {loading && !error && <Loader />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-[20px] leading-9 font-bold text-headingColor mt-3">
                Subject: {data.subject}
              </h3>
              <a
                href={`mailto:${data.email}`}
                target="_blank"
                className="text-[16px] text-textColor inline-block"
              >
                From: {data.email}
              </a>
              <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                {data?.message}
              </p>
            </div>

            <div className="mt-5">
              <a
                href={`mailto:${data.email}?subject=RE:${data.subject}`}
                target="_blank"
                className="btn bg-primaryColor text-white leading-9 rounded-lg"
              >
                Reply
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMessage;
