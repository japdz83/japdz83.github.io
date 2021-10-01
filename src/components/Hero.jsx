import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import TypeWriterEffect from "react-typewriter-effect";
import heroImg from "../img/img-intro-web.png";

const Hero = ({ dark, id }) => {
  const classes = useStyles();
  return (
    <section className="parallax-section" id="parallax">
      <div className={classes.sectioncontent} id={id}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={6}>
              <TypeWriterEffect
                className={classes.tipeWrite}
                textStyle={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  color: "white",
                }}
                startDelay={100}
                cursorColor="#009fe3"
                multiText={[
                  "Bienvenidos",
                  "Soy Johan Prado",
                  "y soy Desarrollador FrontEnd",
                ]}
                multiTextDelay={1000}
                typeSpeed={30}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.wrapperImg}>
                <img className="heroImg" src={heroImg} alt="Hero Img" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    padding: "70px 0px",
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  wrapperImg: {
    padding: "10px",
    marginTop: "30px",
    [theme.breakpoints.down("sm", "md")]: {
      marginTop: "5px",
    },
  },
}));

export default Hero;
