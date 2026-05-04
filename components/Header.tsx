'use client'

import Image from 'next/image'
import logo from "../public/logo_steam.svg"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{backgroundColor:"#171a21", p:2}} >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center'
            }}
          >
            <Box
              component="img" 
              src={logo.src}
              alt="logo"
              sx={{
                width: { xs: '120px', sm: '160px' },
                height: 'auto', 
                cursor: 'pointer',
                py: 1 
              }}
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}