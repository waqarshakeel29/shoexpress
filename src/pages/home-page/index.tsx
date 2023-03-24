import { Grid } from "@mui/material";
import { ArticleMiniDetail } from "../../components/article-mini-detail";
import { Footer } from "../../components/Footer";
import { HeadingSection } from "./heading-section";
import { PopularArticlesSection } from "./popular-articles-section";
import { PromotionSection } from "./promotion-section";

export const HomePage = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <HeadingSection />
        </Grid>
        <Grid item xs={12}>
          <PopularArticlesSection />
        </Grid>
        <Grid item xs={12}>
          <ArticleMiniDetail />
        </Grid>
        <Grid item xs={12}>
          <PromotionSection />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};
