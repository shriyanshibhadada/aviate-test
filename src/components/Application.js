import React from "react";
import { Grid } from "@mui/material";
import Company from "./Company";
import data from "./data";
const Application = ({ applicationRef }) => {
  return (
    <Grid container ref={applicationRef}>
      <Grid item xs={12}>
        <h1>Your Applcations</h1>
      </Grid>
      <Grid item container spacing={2}>
        {data.map((data) => (
          <Grid key={data.id} item md={6} xs={12}>
            <Company data={data} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Application;
