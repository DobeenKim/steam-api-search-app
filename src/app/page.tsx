import Image from "next/image";
import styles from "./page.module.css";
import TopGames from "../../components/TopGames"
import SearchBar from "../../components/SearchBar"
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Typography sx={{
      with:"100%"
    }}>
      <Typography sx={{
        maxWidth: { 
          xs: '300px',             
          sm: '700px',              
          lg: '1500px'             
        },
        margin: "0 auto"
      }}>
        <Typography sx={{
          borderBottom: '1px solid var(--border-color2)',
          pt:'50px',
          pb:'40px'
        }}>
          <Typography sx={{
            color:'var(--text-bright)',
            fontSize:'2.5rem'
          }}>Steam discovery
          </Typography>
          <Typography sx={{
            fontSize:'0.875rem',
            color:'var(--text-dark)'
          }}>Search the Steam catalog and browse trending titles from SteamSpy rich details <br />from the SteamStore API.
          </Typography>
        </Typography>
        <SearchBar />
        <TopGames />
      </Typography>
    </Typography>
  );
}
