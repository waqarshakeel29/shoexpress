import { Box, Grid } from "@mui/material";
import { useState } from "react";

export const ArticleItem = ({
  article,
  image,
  hoveredImage,
}: {
  article: string;
  image: string;
  hoveredImage: string;
}) => {
  let [over, setOver] = useState(false);
  return (
    <>
      <Grid
        item
        xs="auto"
        component="img"
        src={over ? hoveredImage : image}
        alt="imgage"
        maxHeight="50vh"
        // width="auto"
        // paddingRight={4}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      />
    </>
  );
};
