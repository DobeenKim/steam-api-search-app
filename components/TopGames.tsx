'use client'

import {useState, useEffect} from "react"
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const TopGames = () => {
    const [getGame, setGetGame] =useState<any[]>([])

    const getGames = async() => {
        try {
            const response = await fetch('/api/steam')
            const data = await response.json()

            const gameArray = Object.values(data)
            setGetGame(gameArray)
            } catch(error) {
                console.log(error)
        }
    }

    useEffect(() => {
        getGames()
    },[])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <>
            <Typography sx={{
                py:'28px'
            }}>
                <Typography sx={{
                    fontSize:'24px',
                    color:'var(--text-bright)',
                }}>Top owners - last 2weeks
                </Typography>
                <Typography sx={{
                    fontSize:'14px',
                    color:'var(--text-dark)',
                }}>Data via SteamSpy
                </Typography>
            </Typography>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={{ xs: 2, md: 3}} 
                    sx={{display:"flex", justifyContent:"center"}}
                >
                    { getGame && getGame.slice(0,50).map((item, index) => (
                        <Grid size={{xs:12, sm:4, md:3, lg:3}}  key={index}>
                            <Card sx={{
                                height:'100%',
                                display:'flex',
                                flexDirection:'column', 
                                maxWidth: 390, 
                                backgroundColor: 'var(--bg-deeper-navy)',
                                color:'var(--text-bright)'
                                }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image ={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${item.appid}/header.jpg`}
                                        alt={item.name}
                                        sx={{ objectFit:'cover'}}
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2"
                                            sx={{
                                                color:'var(--text-dark)',
                                                }}>
                                            {item.developer}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default TopGames

