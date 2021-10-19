import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // selecting four Services for home
  const homeServices = services.slice(0, 6);
  return (
    <Box>
      {/* banner area  */}
      <Banner></Banner>

      {/* home service area  */}

      <Grid container justifyContent="center">
        {homeServices.map((course) => (
          <HomeServices key={course.id} course={course}></HomeServices>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
