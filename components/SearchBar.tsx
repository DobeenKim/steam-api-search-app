'use client'

import {useState, useEffect} from "react"
import {steamType} from "../utils/type"
import Link from 'next/link';
import { TextField, Box, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const SearchBar = () => {
    const [value, setValue] = useState<string>('');
    const [results, setResults] =useState<steamType | null>(null);
    const handleChange = (e:any) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if(value === ""){
            setResults(null)
            return
        }

        const fetchGame = async() => {
            try {
                const response:Response = await fetch(`/steam-search/storesearch/?term=${encodeURIComponent(value)}&cc=us`);
                const data:any = await response.json()
                
                if(data && data.items && data.items.length > 0) {
                    setResults(data.items[0])
                } else {
                    setResults(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchGame()
    },[value])

    return (
        <>
        <Typography sx={{
            fontSize:"11px",
            color:'var(--point-color)',
            pt:'33px',
            pb:'19px',
            }}>STORE SEARCH
        </Typography>
        <Typography sx={{
            fontSize:'20px',
            color:'var(--text-bright)',
            pb:'19px'
            }}>Find a game
        </Typography>
        <Box sx={{
            display:'flex', 
            flexDirection:'column', 
            pb:'28px',
            }}>
            <TextField 
                label="Search" 
                variant="outlined" 
                fullWidth
                value={value} 
                onChange={handleChange} 
                autoFocus 
                sx={{ 
                    maxwidth:'460px',
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "var(--border-color)",
                    },
                    "&:hover fieldset": {
                        borderColor: "var(--point-color)", 
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "var(--border-color)",
                    },
                    },
                    "& .MuiInputLabel-root": {
                    color: "var(--border-color)",
                    },
                    "&:hover .MuiInputLabel-root": {
                    color: "var(--point-color)",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: "var(--border-color)",
                    }
                }}
            />
                {results && typeof results === 'object' && (
                    <Card sx={{
                        height:'100%',
                        display:'flex',
                        flexDirection:'column', 
                        maxWidth: 390, 
                        backgroundColor: 'var(--bg-deeper-navy)',
                        color:'var(--text-bright)'  ,
                        mt:'8px',
                        position: 'relative',
                        }}
                    >
                        <CardActionArea 
                            LinkComponent={Link}
                            href={`https://store.steampowered.com/app/${results.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CardMedia 
                                component="img"
                                height="160"
                                image={results.tiny_image}
                                alt={results.name}
                                sx={{ objectFit:'contain'}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {results.name}
                                </Typography>
                                <Typography variant="body2" 
                                    sx={{
                                        color:'var(--text-dark)' 
                                    }}>
                                    {results.id}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
        </Box>
        <Typography 
            sx={{color:'var(--text-dark)'  ,}}>
            Click a card for store details
        </Typography>
        </>
    )
}
export default SearchBar