import { CircularProgress, Grid } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: "flex" }}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Spinner;
