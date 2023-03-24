import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import article1 from "../../icons/article1.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";

export const ArticleMiniDetail = () => {
  const imageVariants = {
    offscreen: {
      rotate: -40,
    },
    onscreen: {
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    offscreen: {
      rotate: -40,
    },
    onscreen: {
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const imageList = [
    {
      label: "article1",
      image: article1,
    },
    {
      label: "article2",
      image: article1,
    },
    {
      label: "article3",
      image: article1,
    },
    {
      label: "article1",
      image: article1,
    },
    {
      label: "article2",
      image: article1,
    },
    {
      label: "article3",
      image: article1,
    },
  ];
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", px: 5 }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Stardos Stencil",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "48px",
              py: 5,
            }}
          >
            OUR WEEKLY PICK
          </Typography>
          <Box>
            <Grid container spacing={1} textAlign="left">
              <Grid item xs={12} sm={4}>
                <motion.div
                  variants={imageVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <Box component="img" src={article1} alt="alt" height="50vh" />
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <motion.div
                  variants={textVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <Grid container spacing={2} sx={{ px: 2 }}>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          fontFamily: "Didact Gothic",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "36px",
                          color: "#121212",
                        }}
                      >
                        Nike- The Joyride
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          fontFamily: "Didact Gothic",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "36px",
                          lineHeight: "58px",
                          color: "#007D8B",
                        }}
                      >
                        300$
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontFamily: "Didact Gothic",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "28px",
                              lineHeight: "45px",
                              color: "#121212",
                            }}
                          >
                            Color
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Box
                            sx={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                              backgroundColor: "black",
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Box
                            sx={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                              backgroundColor: "#F6835F",
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontFamily: "Didact Gothic",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "28px",
                              lineHeight: "45px",
                              color: "#121212",
                            }}
                          >
                            Size
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Chip label={41} size="small" color="primary" />
                        </Grid>
                        <Grid item>
                          <Chip
                            label={42}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontFamily: "Didact Gothic",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "28px",
                              lineHeight: "45px",
                              color: "#121212",
                            }}
                          >
                            Reviews
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>
                            <FavoriteIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          overflowX: "scroll",
                          flexWrap: "nowrap",
                        }}
                      >
                        {imageList.map((article) => (
                          <Grid
                            item
                            xs="auto"
                            component="img"
                            src={article.image}
                            alt="imgage"
                            maxHeight="20vh"
                          />
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
