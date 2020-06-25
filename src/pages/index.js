import React, { Fragment, useEffect } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardContent,
  Hidden,
  CardMedia,
} from "@material-ui/core";
import CustomFooter from "../components/footer/index";
import Contact from "../components/contacts/index";
import Wallpaper_index from "../assets/images/wallpaper_index.jpg";
import Wallpaper_secondary from "../assets/images/wallpaper2.jpg";
import Wallpaper_slogan from "../assets/images/wallpaper_slogan.png";
import ContainerImagen from "../assets/images/container.png";
import SevicesImagen from "../assets/images/services.jpg";
import Fade from "react-reveal/Fade";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "calc(100%)",
  },
  margin: {
    margin: theme.spacing(1),
  },
  box: {
    display: "inline-block",
  },
  slogan: {
    position: "absolute",
  },
  container_contacts: {
    margin: theme.spacing(4),
  },
}));
export default function Main(props) {
  const classes = useStyle();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className={classes.root}>
      <TemplatePrincipal />
      <div className={classes.margin}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                color: "#6B6B6B",
                width: "100%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Typography
                style={{ width: "100%", textAlign: "center" }}
                variant="h5"
              >
                Nuevos
              </Typography>
              <div style={{ flexGrow: 1 }} />
              <Typography
                style={{ width: "100%", textAlign: "center" }}
                variant="h5"
              >
                Contenedores
              </Typography>
              <div style={{ flexGrow: 1 }} />
              <Typography
                style={{ width: "100%", textAlign: "center" }}
                variant="h5"
              >
                Usados
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <WhoWereSection />
      {/* Card seccion */}
      <div
        style={{
          position: "relative",
        }}
      >
        <Hidden smDown>
          <img
            style={{
              position: "absolute",
            }}
            src={ContainerImagen}
            width="50%"
          />
        </Hidden>
        <CardSeccion />
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <Fade right>
          <div
            style={{
              width: "50%",
            }}
          >
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${SevicesImagen})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                color: "#FFFFFF",
                height: "170px",
                width: "100%",
                marginTop: "15px",
                borderTopRightRadius: "100px",
                borderBottomRightRadius: "100px",
              }}
            >
              <div style={{ position: "absolute", top: "40%", left: "20%" }}>
                <Typography variant="h4">Servicios</Typography>
              </div>
            </div>
          </div>
        </Fade>
        <div
          style={{
            flexGrow: 1,
          }}
        />
        <div style={{width:"50%"}}>
          <Fade left>
            <br/>
            <br/>
            <br/>
            <CardContent style={{textAlign:"start"}}>
              <Typography color="primary" variant="h5">
                Refrigerados
              </Typography>
              <br />
              <Typography variant="h5">Maritimos</Typography>
              <br />
              <Typography color="primary" variant="h5">
                Dedicados
              </Typography>
              <br />
              <Typography variant="h5">Domesticos</Typography>
            </CardContent>
          </Fade>
        </div>
        
        <Hidden smDown>
        <div
          style={{
            flexGrow: 1,
          }}
        />
        <div style={{
          position:"relative"
        }}>
          <div style={{
            background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
            color: "#FFFFFF",
            height: "270px",
            width: "270px",
            margin: "15px",
            borderRadius: "300px",
          }}>
          </div>
          <div style={{
            position:"absolute",
          background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
          color: "#FFFFFF",
          height: "170px",
          width: "170px",
          margin: "15px",
          borderRadius: "300px",
        }}>
        </div>
        </div>
        </Hidden>
      </div>

      <div className={classes.container_contacts}>
        <Contact />
      </div>

      <CustomFooter />
    </div>
  );
}

// ------------------------ Conetent oage -----------------

//Estilos de primera seccion
const useStyleTemplatePrincipal = makeStyles((theme) => ({
  wallpaper: {
    width: "100%",
    borderBottomRightRadius: "calc(40%)",
  },
  wallpaperContainer: {
    textAlign: "center",
    position: "relative",
  },
  wallpaperContent: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate( -50% , -50%)",
  },
}));

//Animaciones de la primera seccion

const styleSheetRadius = document.styleSheets[0];

let animationNameRadius = "animationRadius";
const effect = `@-webkit-keyframes ${animationNameRadius}{ 
    from{
        border-bottom-right-radius:0%
    }
    to{
        border-bottom-right-radius:40%
    }
}`;

styleSheetRadius.insertRule(effect, styleSheetRadius.cssRules.length);
const cssRadius = {
  animation: `${animationNameRadius} 2s`,
};

function TemplatePrincipal(props) {
  const classes = useStyleTemplatePrincipal();

  return (
    <Fragment>
      <div className={classes.wallpaperContainer}>
        <img
          style={cssRadius}
          className={`${classes.wallpaper}`}
          src={Wallpaper_index}
        />
        <div className={classes.wallpaperContent}>
          <div className="animate__animated  animate__fadeInDown">
            <img width="70%" src={Wallpaper_slogan} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// ------------------ Cards Seccions -------------------

const useStyleCardSeccion = makeStyles((theme) => ({
  container: {
    padding: "30px",
  },
  cards: {
    width: "calc(100% )",
    color: "#707070",
    textAlign: "center",
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
}));

function CardSeccion(props) {
  const classes = useStyleCardSeccion();
  return (
    <div className={classes.container}>
      <Grid container spacing={2} justify="flex-end">
        <Grid item xs={12} md={3} sm={6}>
          <Fade bottom>
            <Card className={classes.cards}>
              <CardContent>
                <Typography variant="h4">
                  <b>Calidad</b>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body1">
                  Verificamos que cada parte sepa anticipadamente lo que se
                  espera de ella respondiendo a las siguientes preguntas:
                  <br />
                  ¿Qué?
                  <br />
                  ¿Cómo?
                  <br />
                  ¿Cuándo?
                  <br />
                  ¿Dónde?
                  <br />
                  ¿A qué hora?
                  <br />
                  ¿Existe algún requerimiento especial?
                </Typography>
              </CardContent>
              <div
                style={{
                  position: "relative",
                  height: "250px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50% , -50%)",
                    background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
                    color: "#FFFFFF",
                    height: "170px",
                    width: "170px",
                    marginBottom: "15px",
                    borderRadius: "100px",
                  }}
                ></div>
              </div>
            </Card>
          </Fade>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Fade bottom>
            <Card className={classes.cards}>
              <CardContent>
                <Typography variant="h4">
                  <b>Compromiso</b>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body1">
                  Cotejamos cada etapa del proceso de prestación de servicio a
                  fin de que se desarrolle con normalidad. En caso de no ser
                  así, se realizan los avisos correspondientes a fin de no
                  generar desfases de ningún tipo
                </Typography>
              </CardContent>
              <div
                style={{
                  position: "relative",
                  height: "250px",
                  width: "100%",
                }}
              >
                <Fade right>
                  <div
                    style={{
                      position: "absolute",
                      left: "30%",
                      background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
                      color: "#FFFFFF",
                      height: "170px",
                      width: "100%",
                      marginTop: "15px",
                      marginBottom: "15px",
                      borderTopLeftRadius: "100px",
                      borderBottomLeftRadius: "100px",
                    }}
                  ></div>
                </Fade>
              </div>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyleWhoWereSection = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  marginCard: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(40),
    marginRight: theme.spacing(40),
  },
}));

function WhoWereSection() {
  const classes = useStyleWhoWereSection();

  let contentComponent = {
    title: "¿Quienes Somos?",
    text:
      "La compañía fue creada en el año 2018 con la intención de proveer servicios de integración de transporte en distintas modalidades; con un servicio diferenciado que proporcione cumplimiento, transparencia, información anticipada, certidumbre y relaciones de largo plazo. Equinergia es el acrónimo de las palabras equipo y energía y resume en sí misma el espíritu que perseguimos: alinear a los distintos actores de la cadena de suministro como son Clientes, Proveedores, Transportes, Prestadores de Servicios, Agencias Aduanales, entre otros para asegurar un suministro ágil, seguro y eficaz",
    img: Wallpaper_secondary,
  };

  return (
    <div>
      <Hidden mdDown>
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <img src={contentComponent.img} width="100%" />
          <div
            style={{
              textAlign: "center",
              width: "100%",
              left: "50%",
              top: "50%",
              transform: "translate( -50% , -30%)",
              position: "absolute",
            }}
          >
            <Card
              style={{
                boxShadow: "none",
                borderRadius: 0,
                width: "calc( 100% )",
              }}
            >
              <CardContent>
                <Typography
                  style={{
                    color: "#9B9B9B",
                    textAlign: "center",
                    fontFamily: "montserrat",
                  }}
                  variant="h4"
                >
                  {contentComponent.title}
                </Typography>
              </CardContent>
            </Card>
            <Fade bottom>
              <Card
                style={{
                  boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
                }}
                className={classes.marginCard}
              >
                <CardContent>
                  <Typography
                    style={{
                      color: "#9B9B9B",
                      fontFamily: "montserrat",
                      textAlign: "justify",
                    }}
                    variant="body1"
                  >
                    {contentComponent.text}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </div>
        </div>
      </Hidden>
      <Hidden lgUp>
        <Fade bottom>
          <Card
            style={{
              boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
              borderRadius: 0,
              textAlign: "center",
            }}
          >
            <CardMedia style={{ height: 140 }} image={contentComponent.img} />
            <br />
            <Typography
              variant="h3"
              style={{ color: "#9B9B9B", fontFamily: "montserrat" }}
            >
              {contentComponent.title}
            </Typography>
            <CardContent
              style={{
                color: "#9B9B9B",
                fontFamily: "montserrat",
                textAlign: "justify",
              }}
            >
              {contentComponent.text}
            </CardContent>
          </Card>
        </Fade>
      </Hidden>
      <br />
      <br />
    </div>
  );
}
