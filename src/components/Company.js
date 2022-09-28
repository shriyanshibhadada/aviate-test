import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const Company = ({ data }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
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
              <Grid item container md={9} xs={12} spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h4">{data.name}</Typography>
                  <Typography variant="h6">{data.profile}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <p>{data.description}</p>
                </Grid>
                <Grid item xs>
                  <Grid item xs>
                    <b>Applied on: </b> {data.date}
                  </Grid>
                  <Grid item xs>
                    <b>Number of Applicants: </b> {data.applicants}
                  </Grid>
                  {/* </Grid> */}
                  <Grid item xs>
                    <b>Application status: </b>
                    {data.status}
                  </Grid>
                  <Grid item xs>
                    <b>Upcoming event: </b> {data.upcomingEvent}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="primary" variant="subtitle">
                    Click to know more
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </AccordionSummary>
        <AccordionDetails>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color={data.event > 0 ? "success" : "grey"} />{" "}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Orientation</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color={data.event > 1 ? "success" : "grey"} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Test Round 1</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color={data.event > 2 ? "success" : "grey"} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Test Round 2</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color={data.event > 3 ? "success" : "grey"} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Inteview Round 1</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color={data.event > 4 ? "success" : "grey"} />
              </TimelineSeparator>
              <TimelineContent>Interview Round 2</TimelineContent>
            </TimelineItem>
          </Timeline>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default Company;
