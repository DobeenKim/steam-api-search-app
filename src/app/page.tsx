import Image from "next/image";
import styles from "./page.module.css";
import TopGames from "../../components/TopGames"
import SearchBar from "../../components/SearchBar"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // Box를 임포트하세요

export default function Home() {
  return (
    <Box  sx={{
      with:"100%"
    }}>
      <Box sx={{
        maxWidth: { 
          xs: '350px',             
          sm: '700px',              
          lg: '1500px'             
        },
        pb:'30px',
        margin: "0 auto"
      }}>
        <Box sx={{
          borderBottom: '1px solid var(--border-color2)',
          pt:'50px',
          pb:'40px'
        }}>
          <Typography sx={{
            color:'var(--text-bright)',
            fontSize:'36px'
          }}>Steam discovery
          </Typography>
          <Typography sx={{
            fontSize:'15px',
            color:'var(--text-dark)'
          }}>Search the Steam catalog and browse trending titles from SteamSpy rich details from the SteamStore API - rich details
          <Box 
            component="br" 
            sx={{ display: { xs: 'none', sm: 'block' } }} 
          />
          from the Steam API
          </Typography>
        </Box>
        <SearchBar />
        <TopGames />
      </Box>
    </Box>
  );
}
