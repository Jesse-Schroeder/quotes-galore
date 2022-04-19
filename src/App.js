import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./components/Card";
import logo from './logo.svg';
import './App.css';


const useStyles = makeStyles(() => ({

  root: {
    minHeight: "100vh",
    background: "#f1f1f1",
  },
  heading: {
    fontfamily: "times, Times New Roman, times-roman, georgia, serif",
    fontSize: "25px",
    lineHeight: "40px",
    letterSpacing: "-1px",
    color: "#444",
    fontWeight: "100",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    className={classes.root}
    >
      <h2 className={classes.heading}Random Quote Generator></h2>
  )
  <Grid item md={8} sm={8} xs={10}>
    <Card />
  </Grid>
  </Grid>
  );
}

function App() {
  return (
    <div className="RandomQuoteGenerator">
      <header className="Click-Here-For-Wisdom">
        <img src={logo} className="Quotes-Galore-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Quotes-Galore-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}


