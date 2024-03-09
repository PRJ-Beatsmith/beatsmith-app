import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import BeatSmithLogo from "assets/img/logo/Logo.png";

import CarouselImage1 from "assets/img/carousel/AuthCarousel/producer.jpg";
import CarouselImage2 from "assets/img/carousel/AuthCarousel/ghostwriter.jpg";
import CarouselImage3 from "assets/img/carousel/AuthCarousel/rapper.jpg";
import CarouselImage4 from "assets/img/carousel/AuthCarousel/beats.jpg";
import CarouselImage5 from "assets/img/carousel/AuthCarousel/samples.jpg";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "12px 0px 0px 12px",
  },
  carouselItem: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "opacity 1s ease-in-out",
    top: 0,
    left: 0,
  },
  carouselItemHidden: {
    opacity: 0,
  },
  carouselItemVisible: {
    opacity: 1,
    zIndex: 1,
  },
  controls: {
    position: "absolute",
    bottom: theme.spacing(4),
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
  logo: {
    position: "absolute",
    top: theme.spacing(4),
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
  title: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    flexShrink: 0,
    color: "#F6F6F6",
    fontFamily: "Noto Sans",
    fontSize: "42px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    width: "345px",
    paddingLeft: "60px",
    textAlign: "left",
    zIndex: 2,
  },
  controlleBar: {
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(234deg, rgba(139, 36, 134, 0.50) -12.8%, rgba(174, 47, 117, 0.50) 27.91%, rgba(216, 59, 96, 0.50) 65.83%, rgba(237, 87, 63, 0.50) 94.27%)",
    zIndex: 1,
  },
}));

export const AuthCarousel = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const carouselItems = [
    {
      name: "Producer",
      image: CarouselImage1,
      title: t("Layout.Auth.CarouselText1"),
    },
    {
      name: "Ghostwriter",
      image: CarouselImage2,
      title: t("Layout.Auth.CarouselText2"),
    },
    {
      name: "Rapper",
      image: CarouselImage3,
      title: t("Layout.Auth.CarouselText3"),
    },
    {
      name: "Beats",
      image: CarouselImage4,
      title: t("Layout.Auth.CarouselText4"),
    },
    {
      name: "Samples",
      image: CarouselImage5,
      title: t("Layout.Auth.CarouselText5"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(
        (prevActiveStep) => (prevActiveStep + 1) % carouselItems.length,
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselItems.length]);

  return (
    <Box className={classes.carouselContainer}>
      {carouselItems.map((item, index) => (
        <Box
          key={item.name}
          className={`${classes.carouselItem} ${index === activeStep ? classes.carouselItemVisible : classes.carouselItemHidden}`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            borderRadius: "12px 0px 0px 12px",
          }}
        />
      ))}

      <Box className={classes.overlay} />

      <img src={BeatSmithLogo} alt="BeatSmith Logo" className={classes.logo} />

      <Typography variant="body2" className={classes.title}>
        {carouselItems[activeStep].title}
      </Typography>

      <Box className={classes.controls}>
        {carouselItems.map((item, index) => (
          <Typography
            key={item.name}
            variant="contained"
            onClick={() => setActiveStep(index)}
            style={{ margin: "0 8px", opacity: activeStep === index ? 1 : 0.5 }}
            className={classes.controlleBar}
          >
            {item.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
