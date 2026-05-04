'use client'

import {useState, useEffect} from "react"
import {steamType} from "../utils/type"
import { TextField, Box, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const SearchBar = () => {
    const [value, setValue] = useState<string>('');
    const [results, setResults] =useState<steamType | null>(null);
    const handleChange = e => {
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
                    setResults("Not found")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchGame()
    },[value])

    return (
        <>
        <Box sx={{ p: 3, display:'flex', flexDirection:'column', gap:'16px', width:'90%', margin: '0 auto' }}>
            <TextField 
                label="Search" 
                variant="outlined" 
                fullWidth
                value={value} 
                onChange={handleChange} 
                autoFocus 
                sx={{ 
                    width: { xs: '100%', sm: '320px' }, 
                }}
            />
            {results && typeof results === 'object' && (
                <Card sx={{ height:'100%',display:'flex',flexDirection:'column', maxWidth: 320  }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image={results.tiny_image}
                        alt={results.name}
                        sx={{ objectFit:'cover'}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {results.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {results.id}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            )}
        </Box>
        </>
    )
}
export default SearchBar