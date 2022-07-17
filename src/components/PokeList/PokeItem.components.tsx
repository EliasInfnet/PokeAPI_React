import { Card, CardContent, CardMedia, CircularProgress, Grid, LinearProgress, Typography } from "@mui/material";
import { useState } from "react";
import { Pokemon } from "../../models/pokemon.models";
import theme from "../../theme/theme";


function PokeItem(pokemon: Pokemon) {

  const weightLog = Math.log10(Number(pokemon.weight)) * 25
  const experienceLog = Number(pokemon.experience) / 3.95
  const heightLog = Math.log10(Number(pokemon.height)) * 43.4

  const barStyle = { height: '10px', borderRadius: '10px' }

  return (
    <Grid item xs={6} lg={4} xl={3}>
      <Card elevation={4}>
        <CardMedia
          component="img"
          height='150'
          image={pokemon.image}
          sx={{ maxWidth: '60%', margin: '20px auto 0 auto' }}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" sx={{ textAlign: 'left' }} component="div">
            Altura
          </Typography>
          <LinearProgress sx={barStyle} variant="determinate" color="info" value={heightLog} />
          <br />
          <Typography gutterBottom variant="subtitle2" sx={{ textAlign: 'left' }} component="div">
            Experiência
          </Typography>
          <LinearProgress sx={barStyle} variant="determinate" color="error" value={experienceLog} />
          <br />
          <Typography gutterBottom variant="subtitle2" sx={{ textAlign: 'left' }} component="div">
            Peso
          </Typography>
          <LinearProgress sx={barStyle} variant="determinate" color="success" value={weightLog} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PokeItem;