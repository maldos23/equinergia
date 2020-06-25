import React, { Fragment } from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  ListItemAvatar,
  Avatar,
  CardContent,
} from "@material-ui/core";
import { MailRounded, PhoneRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  card: {
    color: "#FFF",
    position: "relative",
    background: "#8D8D8D",
    width: "100%",
    height: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  links: {
    color: "#FFF",
    textDecoration: "none",
  },
}));
export default function Main(props) {
  const classes = useStyle();
  return (
    <Fragment>
      <footer>
        <div className={classes.card}>
          <div className={classes.margin}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <List>
                  <ListItem>
                    <Link className={classes.links} to="/">
                      Inicio
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link className={classes.links} to="/servicios">
                      Servicios
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link className={classes.links} to="/about">
                      Acerca de
                    </Link>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={4}>
                <CardContent>
                  <Typography variant="h6">©Equinergia logistica</Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>Contacto</Typography>
                <div>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneRounded />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Telefono" secondary="5543171730" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <MailRounded />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Correo"
                        secondary="ventas@equinergia.com"
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
