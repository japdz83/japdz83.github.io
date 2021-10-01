import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import imgFooter from "../img/logo-footer.png";
import HeartIcon from "./icons/HeartIcon";


const Hero = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <footer className="parallax-section" id="parallax2">
      <div className={classes.section}>
        <Container>
          <div className={classes.footerTitle}>
            <img src={imgFooter} alt="LogoFooter" />
          </div>
          <Typography>
            <p className={classes.textFooter}>Diseñado y Desarrollado con <HeartIcon className={classes.footerIcon} /> por Johan Prado. Copyright © 2021. All Rights Reserved.</p>
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "20vh",
    padding: "30px 0px",
    textAlign: "center",
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  footerTitle: {
    color: "#fff",
    "& img": {
      width: "5%",
      [theme.breakpoints.down("sm", "md")]: {
        width: "20%",
      },
    },

  },
  textFooter: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    padding: "10px",
    marginTop: "10px",
  },
  footerIcon: {
    width: "22px",
    height: "22px",
    paddingTop: "5px",
  }
}));

export default Hero;
