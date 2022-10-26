import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";


import { Link, useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

import {keluarDariApplikasi} from "../authentication/firebase"

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async() => {
    // navigate("/login");
    await keluarDariApplikasi()
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
            <Box className={styles.box}>
              <Link to="/" className={styles.navMenu} >All-News</Link>
              <Link to="/science" className={styles.navMenu}>US</Link>
              <Link to="/art" className={styles.navMenu}>Art</Link>
              <Link to="/about" className={styles.navMenu}>About</Link>
              {/* <Link >Search</Link>
              <Link >About</Link> */}
            </Box>
          </Typography>
          <Button sx={{textTransform:'capitalize '}} variant="outlined" color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;