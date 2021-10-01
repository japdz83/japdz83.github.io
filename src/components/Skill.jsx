import React from "react";
import { makeStyles, Typography, Container } from "@material-ui/core";
import Carousel from "react-elastic-carousel";

import Photoshop from "../img/habilidades/Photoshop.png";
import Illustrator from "../img/habilidades/Illustrator.png";
import Figma from "../img/habilidades/Figma.png";
import Html from "../img/habilidades/HTML.png";
import Css from "../img/habilidades/CSS.png";
import Sass from "../img/habilidades/sass.png";
import BootsTrap from "../img/habilidades/bootstrap.png";
import Javascript from "../img/habilidades/JavaScript.png";
import Jquery from "../img/habilidades/JQuery.png";
import ReactJs from "../img/habilidades/ReactJs.png";
import VueJs from "../img/habilidades/VueJs.png";
import MaterialUi from "../img/habilidades/Material-UI.png";
import NodeJs from "../img/habilidades/NodeJs.png";
import Php from "../img/habilidades/PHP.png";
import Python from "../img/habilidades/Python.png";
import GitHub from "../img/habilidades/GitHub.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Skill = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Container>
          <Typography variant="h3" className={classes.skillTitle}>
            {title}
          </Typography>
          <Carousel breakPoints={breakPoints} className={classes.carusel}>
            <img
              className={classes.habilidades}
              src={Photoshop}
              alt="Photoshop"
            />
            <img
              className={classes.habilidades}
              src={Illustrator}
              alt="Illustrator"
            />
            <img className={classes.habilidades} src={Figma} alt="Figma" />
            <img className={classes.habilidades} src={Html} alt="Html" />
            <img className={classes.habilidades} src={Css} alt="Css" />
            <img
              className={classes.habilidades}
              src={BootsTrap}
              alt="Bootstrap"
            />
            <img
              className={classes.habilidades}
              src={Javascript}
              alt="Javascript"
            />
            <img className={classes.habilidades} src={Jquery} alt="Jquery" />
          </Carousel>
          <Carousel breakPoints={breakPoints} className={classes.carusel}>
            <img className={classes.habilidades} src={ReactJs} alt="ReactJs" />
            <img className={classes.habilidades} src={VueJs} alt="VueJS" />
            <img className={classes.habilidades} src={Sass} alt="Sass" />
            <img
              className={classes.habilidades}
              src={MaterialUi}
              alt="MaterialUi"
            />
            <img className={classes.habilidades} src={GitHub} alt="GitHub" />
            <img className={classes.habilidades} src={NodeJs} alt="NodeJs" />
            <img className={classes.habilidades} src={Php} alt="PHP" />
            <img className={classes.habilidades} src={Python} alt="Python" />
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    padding: "50px 0px"
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  sectioncontent: {
    padding: "50px 0px",
  },
  skillTitle: {
    margin: "10px auto",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  carusel: {
    marginTop: "50px",
  },
  habilidades: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "50%",
    margin: "15px",
    fontSize: "4em",
  },
}));

export default Skill;
