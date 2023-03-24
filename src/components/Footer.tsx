import { Divider, Grid, styled, Typography } from "@mui/material";



const FooterSectionHeading = styled(Typography)(() => ({
    fontFamily: 'Didact Gothic',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '58px',
    textAlign: 'center',
    color: 'white'
}));

const FooterSectionContent = styled(Typography)(() => ({
    fontFamily: 'Didact Gothic',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '38px',
    textAlign: 'center',
    color: 'white'
}));


export const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      textAlign="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: '#F6835F',
        pt: 10
      }}
    >
      <Grid item xs={11}>
      <Divider sx={{ backgroundColor: 'white', height: '3px'}} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <FooterSectionHeading>Products</FooterSectionHeading>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Shoes</FooterSectionContent>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <FooterSectionHeading>Category</FooterSectionHeading>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Men</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>New In</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Weekly Pick</FooterSectionContent>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <FooterSectionHeading>Company Info</FooterSectionHeading>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>About us</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Contact us</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Payment Options</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Track Order</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Support</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Vouchers</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Size Charts</FooterSectionContent>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <FooterSectionHeading>Follow Us</FooterSectionHeading>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Instagram</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>Facebook</FooterSectionContent>
          </Grid>
          <Grid item xs={12}>
            <FooterSectionContent>YouTube</FooterSectionContent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
