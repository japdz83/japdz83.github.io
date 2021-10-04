import React, { useState } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  List,
  IconButton,
  Drawer,
  ListItem,
  Divider,
} from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../img/Logo-type-min.png";
import { InfoTwoTone } from "@material-ui/icons/InfoTwoTone";
import { EmojiObjectsTwoToneIcon } from "@material-ui/icons/EmojiObjectsTwoTone";
import { BuildTwoToneIcon } from "@material-ui/icons/BuildTwoTone";
import { ContactPhoneTwoToneIcon } from "@material-ui/icons/ContactPhoneTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

const Navbar = () => {
  const links = [
    {
      id: "inicio",
      text: "Inicio",
      icon: <InfoTwoTone />,
    },
    {
      id: "about",
      text: "Sobre Mi",
      icon: <InfoTwoTone />,
    },
    {
      id: "skill",
      text: "Skill",
      icon: <EmojiObjectsTwoToneIcon />,
    },
    {
      id: "services",
      text: "Servicios",
      icon: <EmojiObjectsTwoToneIcon />,
    },
    {
      id: "work",
      text: "Portafolio",
      icon: <BuildTwoToneIcon />,
    },
    {
      id: "contact",
      text: "Contácto",
      icon: <ContactPhoneTwoToneIcon />,
    },
  ];

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar className={classes.root} position="sticky">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.typography}>
            <Link
              to={links.id}
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70}
              className={classes.link}
            >
              <img src={logo} alt="LOGO" className={classes.logo} />
            </Link>
          </Typography>
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                scroll={scroll}
                to={id}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-70}
                className={classes.link}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            className={classes.menubutton}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton
          className={classes.cancelboton}
          onClick={() => setOpen(false)}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link
            className={classes.sidebar}
            key={index}
            to={id}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <ListItem component="h5">{text}</ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#009fe3",
    color: "#fff",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  typography: {
    flexGrow: 1,
  },
  logo: {
    width: "120px",
    display: "flex",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      fontSize: "16px",
      fontWeight: "500",
      marginLeft: theme.spacing(3),
      transition: "3.s ease all",
    },
    "& a:hover": {
      cursor: "pointer",
      borderBottom: "3px solid #fff",
    },
  },
  menubutton: {
    color: "#fff",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  cancelboton: {
    color: "tomato",
    position: "relative",
    top: 0,
    right: -150,
  },
  sidebar: {
    padding: "10px 10px",
    width: "30vw",
    color: "#009fe3",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
    },
    "& h5": {
      fontSize: "18px",
      fontWeight: "bold",
    },
    "& h5:hover": {
      cursor: "pointer",
      color: "#000d20",
    },
  },
}));

export default Navbar;
