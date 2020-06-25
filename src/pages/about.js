import React, { Fragment, useEffect } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import CustomFooter from "../components/footer/index";
import MissionSvg from "../assets/svg/mission.svg";
import VisionSvg from "../assets/svg/vision.svg";
import ContainerSvg from "../assets/svg/container.svg";
import Contact from "../components/contacts/index";
import Fade from "react-reveal/Fade";

const useStyle = makeStyles((theme) => ({
  rootMargin: {
    margin: theme.spacing(4),
  },
  customCard: {
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
}));

export default function Main(props) {
  const classes = useStyle();

  const cards = [
    {
      svg:MissionSvg,
      title:"Mision",
      text:`Facilitar las operaciones de nuestros clientes de manera que
      estos dispongan de un servicio impecable con unidades en buen
      estado, personal calificado, seguridad e información oportuna
      proveniente de un Socio Comercial confiable.`
    },
    {
      svg:VisionSvg,
      title:"Visión",
      text:`Ser reconocidos por nuestros Clientes como un aliado
      estratégico y un referente en cuanto a servicio, puntualidad y
      cumplimiento.`
    },
    {
      svg:ContainerSvg,
      title:"Valores",
      text:`Transparencia; Honestidad; Sentido de la urgencia;
      Anticipación; Correcta ejecución; enfoque al Cliente; Atención
      Personalizada.`
    },
  ];

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Fragment>
      <div className={classes.rootMargin}>
        <Grid container alignItems="stretch" spacing={2}>
          {
            cards.map((item) => (<Grid item xs={12} md={4} sm={6}>
              <Fade bottom>
              <Card className={classes.customCard}>
                <CardContent>
                  <img style={{ height: "300px" }} src={item.svg} />
                </CardContent>
                <CardContent>
                  <Fade right>
                  <Typography variant="h5" color="primary">
                    {item.title}
                  </Typography>
                  </Fade>
                  <Fade left>
                  <Typography>
                    {item.text}
                  </Typography>
                  </Fade>
                </CardContent>
              </Card>
              </Fade>   
            </Grid>))
          }
        </Grid>
        <br/>
        <br/>
        <br/>
        <Contact/>
      </div>
      
      <CustomFooter />
    </Fragment>
  );
}
