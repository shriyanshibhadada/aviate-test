import Header from "./components/Header";
import { Container, Grid } from "@mui/material";
import Application from "./components/Application";
import Jobs from "./components/Jobs";
import "./App.css";
import { useRef } from "react";
function App() {
  const applicationRef = useRef();
  const jobRef = useRef();
  return (
    <div>
      <Header applicationRef={applicationRef} jobRef={jobRef} />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item>
            <Application applicationRef={applicationRef} />
          </Grid>
          <Grid item>
            <Jobs jobRef={jobRef} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
