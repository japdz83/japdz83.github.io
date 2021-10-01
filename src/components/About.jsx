import React from "react";
import { Button, Card, makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";

import aboutImg from "../img/Japdz_doble-exposure.jpg";
import pdf from "../img/CV-JohanPrado.pdf";
import DownloadOutline from "./icons/DownloadOutline";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Card className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <AccountCircleTwoToneIcon className={classes.iconColor} />
              <Typography variant="h3" className={classes.aboutTitle}>
                {title}
              </Typography>
              <div className={classes.aboutText}>
                Hola gusto en saludarte, soy diseñador gráfico con más de 9 años
                de experiencia, dedicado al diseño personalizado, pero mi gusto
                y pasión por la tecnología me llevo al Desarrollo Web con más de
                4 años de experiencia con dominio en las tecnologías: Html 5,
                Css 3, Javascript, desarrollo web responsivo, entre otros, toda
                mi vida ligado al mundo del arte y la tecnología. Actualmente
                colaboro con Startups y Agencias a los que ofrezco un servicio
                de calidad en el diseño y desarrollo de páginas web.
              </div>
              <Button
                variant="contained"
                size="large"
                className={classes.descargarcv}
                startIcon={<DownloadOutline className={classes.iconDownload} />}
              >

                <a href={pdf} download>
                  Descargar CV
                </a>
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img
                className={classes.imgAbout}
                src={aboutImg}
                alt="About IMG"
              />
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    paddingTop: "50px",
    padding: "50px 20px",
    [theme.breakpoints.down("sm", "md")]: {
      padding: "50px 0px",
    },
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "70vw",
    margin: "0 auto",
    [theme.breakpoints.down("sm", "md")]: {
      maxWidth: "90vw",
    },
  },
  paper: {
    padding: "50px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#fff",
  },
  imgAbout: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: "0px",
    },
    margin: "0 auto",
    padding: "0px 30px",
    borderRadius: "5px",
    maxWidth: "100%",
    // width: "100%",
    height: "auto",
  },
  iconColor: {
    color: "#009fe3",
    fontSize: "100px",
    marginTop: "20px",
    marginBottom: "30px",
  },
  aboutTitle: {
    color: "#000d20",
    margin: "15px auto",
    fontWeight: "bold",
  },
  aboutText: {
    [theme.breakpoints.down("sm", "md")]: {
      padding: "15px 0px",
      textAlign: "center",
      margin: "0px auto",
    },
    margin: "20px auto",
    maxWidth: "80%",
    textAlign: "justify",
    padding: "15px 0px",
    fontSize: "16px",
    fontWeight: "500",
  },
  descargarcv: {
    position: "relative",
    backgroundColor: "#009fe3",
    padding: "10px 20px",
    cursor: "pointer",
    left: "0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0070a0 ",
      color: "#fff ",
    },
    "& a": {
      color: "#fff ",
      textDecoration: "none",
    },
  },
  iconDownload: {
    color: "#fff",
    border: "#fff",
    width: "25px",
    height: "25px",

  },
}));

export default About;
