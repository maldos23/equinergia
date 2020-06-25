import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'animate.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import "typeface-montserrat";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "react-app-polyfill/ie9";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F97F2",
      
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [ "Montserrat"].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
