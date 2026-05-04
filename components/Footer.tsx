import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#171a21', color: 'white', py: 6, mt: 'auto' }}>
      <Container
        maxWidth={false}
        sx={{maxWidth: '1850px !important', 
        width: '100%'}}>
        <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
        <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              STEAM SEARCH
            </Typography>
            <Typography variant="body2" sx={{ color: '#8f98a0' }}>
              Discover your favorite games using the official Steam Store API.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: '#303943' }} />
        <Typography variant="body2" align="center" sx={{ color: '#8f98a0' }}>
          {`© ${new Date().getFullYear()} Dobeen Kim`}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;