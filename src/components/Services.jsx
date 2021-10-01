import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined';
import BrushOutline from "./icons/BrushOutline";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Container>
          <Typography className={classes.title} variant="h3">{title} </Typography>
          <div className={classes.textIntro}>
            <p>
              Realizo proyectos de múltiples aspectos, te brindo mucho más que una plataforma, trabajo junto a ti, y te doy todos los recursos necesarios para que tu negocio crezca y se desarrolle. Echa un vistazo aquí debajo a los servicios que ofrezco, con los que puedo ayudarte.
            </p>
          </div>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <div className="card-container">
                <div className="card">
                  <div className="card--display"><BrushOutline className={classes.iconService} />
                    <h2>Diseño</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Diseño</h2>
                    <p>La cara de su empresa es su carta más fuerte es por eso que trabajo en la identidad corporativa de su empresa potenciando la marca. Desde la creación de un logotipo acorde a sus necesidades, papeleria básica, banners, flyer, gigantografias, redes sociales, etc.</p>
                  </div>
                  <div className="card--border"></div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="card-container">
                <div className="card">
                  <div className="card--display"><LaptopChromebookOutlinedIcon className={classes.iconService} />
                    <h2>Desarrollo web</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Desarrollo web</h2>
                    <p>Trabajo dedicadamente en el Diseño y Desarrollo páginas web personalizadas con un estilo exclusivo y minimalista. Adaptable a dispositivos móviles, que le da frescura al branding de tu empresa a través de una experiencia que marca la diferencia.</p>
                  </div>
                  <div className="card--border"></div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="card-container">
                <div className="card">
                  <div className="card--display"><SettingsOutlinedIcon className={classes.iconService} />
                    <h2>Progressive web app (PWA)</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Progressive web app (PWA)</h2>
                    <p>Es importante poder dar una solución tecnológica adecuada a sus necesidades, partiendo del conocimiento de su negocio y procesos internos, hasta llegar a la puesta en funcionamiento en un ambiente productivo.</p>
                  </div>
                  <div className="card--border"></div>
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
    padding: "50px 10px",
    [theme.breakpoints.down("sm", "md")]: {
      padding: "50px 0px",
    },
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  title: {
    color: "#000d20",
    margin: "0px auto",
    marginBottom: "50px",
    fontWeight: "bold",
  },
  textIntro: {
    marginBottom: "50px",
    fontSize: "16px",
    color: "#333",
    fontWeight: "500",
  },
  iconService: {
    fontSize: "80px",
    color: "#009fe3",
    width: "50px",
    height: "50px",


  }
}));

export default Contact;
