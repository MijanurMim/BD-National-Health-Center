import React from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>This is Service Details : {serviceId}</h1>
      <h4>{serviceId.name}</h4>
    </div>
  );
};

export default ServiceDetails;
