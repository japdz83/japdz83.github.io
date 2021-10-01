import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";

import Services from "./components/Services";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Hero id="inicio" dark={true} />
      <About title="Sobre Mi" id="about" dark={false} />
      <Skill title="Mis habilidades" id="skill" dark={true} />
      <Services title="Servicios" id="services" dark={false} />
      <MyWork title="Algunos de mis trabajos" id="work" dark={true} />
      <Contact
        title="Contacto"
        id="contact"
        dark={false}
      />
      <Footer dark={true} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
