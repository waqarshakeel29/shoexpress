import { Button, Grid, Typography } from "@mui/material";
import article1 from "../../../icons/article1.png";
import article1Hover from "../../../icons/article1-hover.png";
import { ArticleItem } from "./article-item.tsx";

export const PopularArticlesSection = () => {
  const imageList = [
    {
      label: "article1",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article2",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article3",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article1",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article2",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article3",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article1",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article2",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article3",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article1",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article2",
      image: article1,
      hoveredImage: article1Hover,
    },
    {
      label: "article3",
      image: article1,
      hoveredImage: article1Hover,
    },
  ];

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", pb: 3, px: 5 }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Stardos Stencil",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "48px",
              pt: 10,
            }}
          >
            POPULAR RIGHT NOW
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {["Sneakers", "Sport Shoes", "Oxford", "Sale"].map((article) => (
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => {}}
                  sx={{ borderRadius: "20px" }}
                >
                  {article}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <Typography
            sx={{
              fontFamily: "Didact Gothic",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "36px",
            }}
          >
            New Arrival
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              overflowX: "scroll",
              flexWrap: "nowrap",
            }}
            spacing={3}
          >
            {imageList.map((article) => (
              <ArticleItem
                article={article.label}
                image={article.image}
                hoveredImage={article.hoveredImage}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
