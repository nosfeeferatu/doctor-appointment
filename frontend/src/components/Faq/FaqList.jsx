// import React from 'react'
import Loader from "../../components/Loader/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Error from "../Error/Error";
import FaqItem from "./FaqItem";

const FaqList = () => {
  const { data: faqs, loading, error } = useFetchData(`${BASE_URL}/faq`);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <ul className="mt-[30px]">
          {faqs.map((item, index) => (
            <FaqItem item={item} key={index} />
          ))}
        </ul>
      )}
    </>
  );
};

export default FaqList;
