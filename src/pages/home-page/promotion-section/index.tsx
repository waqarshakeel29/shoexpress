import { Button, Grid, styled, Typography } from "@mui/material";

const FooterSectionHeading = styled(Typography)(() => ({
  fontFamily: "Stardos Stencil",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "48px",
  textAlign: "center",
  color: "white",
  paddingBottom: 30
}));


export const PromotionSection = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        minHeight: "70vh",
        backgroundColor: "#007D8B",
      }}
    >
      <FooterSectionHeading>
        BECOME A MEMBER AND GET 20% OFF
      </FooterSectionHeading>
      <Button
        variant="contained"
        color="secondary"
        sx={{ borderRadius: 20, backgroundColor: "white", color: "#007D8B" }}
      >
        SIGN UP FOR FREE NOW
      </Button>
    </Grid>
  );
};
