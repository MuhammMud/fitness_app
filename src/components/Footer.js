import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/my_logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#DDD5F3">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '61px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" fontFamily={"initial"} color="black">©Copyright MMudassir</Typography>
  </Box>
);

export default Footer;