import React, { Fragment, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Tabs,
  Tab,
  Hidden,
  IconButton,
  SwipeableDrawer,
  List,
  Typography,
  withStyles,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import Logo from "../../assets/logos/logo.png";

// ---------------- Rutas definidas ----------------

/*
    Aqui se guardan las rutas destinadas a ser usadas en la pagina
    si deseas modificarlas para conectarla a un servicio como
    webApi o WebServices solo añade un metodo de clase o funcion 
    para volver dinamicas las funciones.
*/

let pagesRoutes = [
  {
    pathname: "/",
    label: "Inicio",
  },
  {
    pathname: "/servicios",
    label: "Servicios",
  },
  {
    pathname: "/about",
    label: "Acerca de",
  },
];

/*
    Personalizo la forma de el original componente tab
    para poder cumplir con los requisitos de diseño
    si quieres modificarlos hazlo en la constante "StyledTabs"
*/

const StyledTabs = withStyles({
  indicator: {
    height: "5px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 70,
      width: "100%",
      background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

// ----------------- Main Seccion -----------------------

const useStyleSideBar = makeStyles((theme) => ({
  appbar: {
    background: "#FFF",
    boxShadow:"none",
    borderBottom: "1px solid #EDEDED"
  },
  tabs: {
    color: "#686868",
  },
  buttonContact: {
    color: "#FFF",
    background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
    boxShadow:"none",
    borderRadius:"40px"
  },
}));

export default function Main(props) {
  const classes = useStyleSideBar();
  const history = useHistory();
  const location = useLocation();
  //Defino estados del menu mobile
  const [isOpen, setOpen] = useState(false);
  const [whereIam, setWhereIam] = useState(location.pathname);

  useEffect(() => setWhereIam(location.pathname), [location]);

  return (
    <Fragment>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <img src={Logo} alt="equinergia logo" height="60px" />
          <Hidden mdDown>
            <StyledTabs indicatorColor="primary" value={whereIam}>
              {pagesRoutes.map((item) => (
                <Tab
                  onClick={() => history.push(item.pathname)}
                  className={classes.tabs}
                  value={item.pathname}
                  label={item.label}
                />
              ))}
            </StyledTabs>
          </Hidden>
          <div
            style={{
              flexGrow: 1,
            }}
          />
          <Hidden smDown>
            <Button variant="contained" className={classes.buttonContact} onClick={() => window.scrollTo(0,10000)}>
              Contactar
            </Button>
          </Hidden>
          <MobileButtonMenu setOpen={(status) => setOpen(status)} />
        </Toolbar>
      </AppBar>
      <div style={{ height: "60px" }} />
      {/*Menu movile visible en responsive*/}
      <MobileMenu isOpen={isOpen} setOpen={(status) => setOpen(status)} />
    </Fragment>
  );
}

// ------------------ Menu Mobile seccion ----------------------

function MobileButtonMenu(props) {
  const { setOpen } = props;

  return (
    <Fragment>
      <Hidden lgUp>
        <IconButton onClick={() => setOpen(true)}>
          <MenuRounded />
        </IconButton>
      </Hidden>
    </Fragment>
  );
}

const useStyleDrawer = makeStyles((theme) => ({
  squemaMenu: {
    background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
    color: "#FFFFFF",
    width: "90%",
    marginTop: "15px",
    borderBottomRightRadius: "30px",
    borderTopRightRadius: "30px",
  },
  marginTypography: {
    margin: "20px",
  },
}));
/* Esta es la funcion de menu desplazable de
la version movil de la pagina la cual esta encomendada a los estilos fijados
en @useStyleDrawer */
function MobileMenu(props) {
  const { isOpen, setOpen } = props;
  const classes = useStyleDrawer();
  const history = useHistory();
  //Control de ancho de menu
  const widthMenu = 250;

  return (
    <Fragment>
      <SwipeableDrawer
        onOpen={() => setOpen(true)}
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <div className={classes.squemaMenu}>
          <Typography className={classes.marginTypography}>Menu</Typography>
        </div>
        <List style={{ width: widthMenu }}>
          {pagesRoutes.map((item) => (
            <ListItem
              button
              onClick={() => {
                history.push(item.pathname);
                setOpen(false);
              }}
            >
              <ListItemText secondary={item.label} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
}
