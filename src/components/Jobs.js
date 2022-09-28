import React from "react";
import { Grid } from "@mui/material";
import data from "./data";
import JobCard from "./JobCard";

const Jobs = ({ jobRef }) => {
  return (
    <Grid container ref={jobRef}>
      <Grid item xs={12}>
        <h1>Job Recommendations</h1>
      </Grid>
      <Grid item container spacing={2}>
        {data.map((data) => (
          <Grid key={data.id} item md={6} xs={12}>
            <JobCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Jobs;
