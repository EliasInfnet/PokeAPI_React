import { Card, CardContent, CardMedia, CircularProgress, Grid, LinearProgress, Typography } from "@mui/material";
import { useState } from "react";
import { Pokemon } from "../../models/pokemon.models";
import theme from "../../theme/theme";


function PokeItem(pokemon: Pokemon) {

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
          <LinearProgress variant="determinate" color="info" value={Number(pokemon.height)} />
          <br />
          <Typography gutterBottom variant="subtitle2" sx={{ textAlign: 'left' }} component="div">
            Experiência
          </Typography>
          <LinearProgress variant="determinate" color="error" value={Number(pokemon.experience) / 20} />
          <br />
          <Typography gutterBottom variant="subtitle2" sx={{ textAlign: 'left' }} component="div">
            Peso
          </Typography>
          <LinearProgress variant="determinate" color="success" value={Number(pokemon.weight) / 10} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PokeItem;