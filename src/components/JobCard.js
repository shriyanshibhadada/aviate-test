import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const JobCard = ({ data }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid item container spacing={2}>
          <Grid item md={3} xs={12}>
            <img
              style={{
                width: "100%",
              }}
              alt="logo"
              src={data.img}
            />
          </Grid>
          <Grid item md={9} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h4">{data.name}</Typography>
              <Typography variant="h6">{data.profile}</Typography>
            </Grid>
            <Grid item xs={12}>
              <p>{data.description}</p>
            </Grid>
            <Grid item xs>
              <Button variant="outlined">Apply</Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
