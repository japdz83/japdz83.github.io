import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import imgContact from '../img/Img-Contact.png';
// import DownloadOutline from "./icons/DownloadOutline";
import PhoneIcon from "./icons/PhoneIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import EmailIcon from "./icons/EmailIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";


const Contact = ({ title, dark, id }) => {
  const classes = useStyles();



  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.section.sectioncontent} id={id}>
        <Container>
          <Typography className={classes.titleContact} variant="h3">{title}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Card className={classes.contentCard}>
                <CardContent>
                  <Typography variant="h5" component="h2" className={classes.titleCard}>
                    ¿INTERESADO EN QUE TRABAJEMOS JUNTOS?
                  </Typography>
                  <Typography className={classes.textIntro} >
                    Puede contactarme por alguna de estas vias, haga las preguntas necesarias y coloque un poco de información acerca de su proyecto, por favor, espere que pronto le responderé, muchas gracias.
                  </Typography>
                  <Typography>
                    <Button className={classes.contactItem} variant="outlined" color="primary"
                      startIcon={<EmailIcon color className={classes.contactsIcons} />}>
                      <a target="_blank" rel="noreferrer" href="mailto:japdz83@gmail.com">japdz83@gmail.com</a>
                    </Button>
                  </Typography>
                  <Typography>
                    <Button className={classes.contactItem} variant="outlined" color="primary"
                      startIcon={<PhoneIcon className={classes.contactsIcons} />}>
                      +58 412 9384903
                    </Button>
                  </Typography>
                  <Typography>
                    <Button className={classes.contactItem} variant="outlined" color="primary"
                      startIcon={<WhatsappIcon color className={classes.contactsIcons} />}>
                      <a target="_blank" rel="noreferrer" href="https://wa.me/584129384903?text=Hola%20en%20que%20te%20puedo%20ayudar">WhatsApp</a>
                    </Button>
                  </Typography>
                  <Typography>
                    <Button className={classes.contactItem} variant="outlined" color="primary"
                      startIcon={<LinkedinIcon color className={classes.contactsIcons} />}>
                      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/johan-prado-74631b25/">Linkedin</a>
                    </Button>
                  </Typography>
                  <Typography>
                    <Button className={classes.contactItem} variant="outlined" color="primary"
                      startIcon={<GithubIcon color className={classes.contactsIcons} />}>
                      <a target="_blank" rel="noreferrer" href="https://github.com/japdz83">GitHub</a>
                    </Button>
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className={classes.wrapperImg}>
              </div>
              <img className="imgContact" src={imgContact} alt="Hero Img" />
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
    padding: "50px 20px",
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  titleContact: {
    marginBottom: "20px",
    color: "#000d20",
    fontWeight: "bold",
  },
  contentCard: {
    padding: "30px",
    marginTop: "30px",
  },
  titleCard: {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#000d20",
  },
  textIntro: {
    fontSize: "16px",
    color: "#000",
    lineHeight: "1.5",
    margin: "10px 0px",
  },
  wrapperImg: {
    padding: "10px",
    // marginTop: "30px",
    // marginLeft: "110%",
    width: "100%",
    [theme.breakpoints.down("sm", "md")]: {
      marginTop: "5px",
    },
  },
  contactItem: {
    padding: "10px 20px",
    borderRadius: "35px",
    margin: "7px 0px",
    "& a": {
      textDecoration: "none",
    },
  },
  contactsIcons: {
    color: "#fff",
    border: "#fff",
    width: "25px",
    height: "25px",

  },
}));

export default Contact;
