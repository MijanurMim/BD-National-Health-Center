import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = ({ data }) => {
  const { serviceId } = useParams();
  console.log(data);

  return (
    <div>
      <h1> Service Details : {serviceId}</h1>
    </div>
  );
};

export default ServiceDetails;
