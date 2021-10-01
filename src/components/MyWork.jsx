import { Container, Grid } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.section.sectioncontent} id={id}>
        <Container>
          <Typography className={classes.titleWork} variant="h3">{title}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work">
                <div className="content">
                  <h2 className="title">Mountain View</h2>
                  <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work">
                <div className="content">
                  <h2 className="title">To The Beach</h2>
                  <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work">
                <div className="content">
                  <h2 className="title">Desert Destinations</h2>
                  <p className="copy">It's the desert you've always dreamed of</p>
                  <button className="btn">Book Now</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work">
                <div className="content">
                  <h2 className="title">Explore The Galaxy</h2>
                  <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                  <button className="btn">Book Now</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    padding: "50px 10px"
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  titleWork: {
    marginBottom: "30px",
    fontWeight: "bold",

  },
  iconGithub: {
    color: "#fff !important",
    fontSize: "30px",
  }
}));

export default MyWork;
