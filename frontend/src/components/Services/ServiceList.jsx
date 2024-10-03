import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../Error/Error";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const {
    data: services,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/services`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default ServiceList;
