import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import e1 from "../../../icons/e1.png";
import e2 from "../../../icons/e2.png";
import e3 from "../../../icons/e3.png";
import e4 from "../../../icons/e4.png";
// import mainshoes from "../../../icons/mainshoes.png";

export const HeadingSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [e1, e2, e3, e4];

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextImage = prevImage + 1;
        if (nextImage === images.length - 1) {
          clearInterval(intervalId);
        }
        return nextImage;
      });
    }, 500);

    return () => clearInterval(intervalId);
   // eslint-disable-next-line
  }, []);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      textAlign="right"
      sx={{
        minHeight: '90vh'
      }}
    >
      <Grid item xs={12}>
        <div style={{ position: "relative" }}>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Box
              component="img"
              src={images[currentImage]}
              alt="ellipse"
              sx={{
                height: '90vh'
              }}
            />
          </motion.div>
          <div style={{ position: "absolute", top: 200, left: 0 }}>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <Box sx={{ pl: 7, py: 2, textAlign: "left" }}>
                <Typography variant="h4" fontSize={90} fontFamily='Stencil'>SPORTS SHOES</Typography>
                <Typography variant="h6" fontFamily='Yu Gothic'>{"MEN'S COLLECTION"}</Typography>
                <Typography variant="body1" fontFamily='Yu Gothic' sx={{width: '500px'}}>
                  Find your true style with shoexpress and explore the variety
                  of playful, colourful designs!
                </Typography>
              </Box>
            </motion.div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};