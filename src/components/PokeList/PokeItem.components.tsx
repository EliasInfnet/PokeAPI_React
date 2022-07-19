import { Card, CardContent, CardMedia, CircularProgress, Grid, LinearProgress, Typography } from "@mui/material";
import { Pokemon } from "../../models/pokemon.models";
import pokemonTypesColors, { pokemonColors } from "../../theme/pokemonType";

function PokeItem(pokemon: Pokemon) {

  const weightLog = Math.log10(Number(pokemon.weight)) * 25
  const experienceLog = Number(pokemon.experience) / 3.95
  const heightLog = Math.log10(Number(pokemon.height)) * 43.4
  const barStyle = { height: '17px', borderRadius: '10px', marginTop: '8px' }
  const pokemonColor = pokemonTypesColors[pokemon.type as keyof typeof pokemonTypesColors]

  return (
    <Grid item xs={6} lg={4} xl={3} >
      <Card elevation={4} sx={{ backgroundColor: pokemonColor || 'blue', borderRadius: '10px' }}>
        <img style={{ width: '40px', position: 'relative', margin:'22px 250px 0 0'  }} src={require('../../assets/pokemonTypeIcons/' + pokemon.type + '.png')} alt='' />

        <Typography variant="h4" sx={{ textAlign: 'center', margin:'-42px 0 0 0', textOverflow: "ellipsis" }} color={'white'} mt={2.5} component="div">
          {pokemon.name}
        </Typography>
        <CardMedia
          component="img"
          height='150'
          image={pokemon.image}
          sx={{ maxWidth: '60%', margin: '10px auto 0 auto' }}
          alt="green iguana"
        />
        <CardContent sx={{ justifyContent: 'space-around' }}>
          <Card elevation={4} sx={{ width: '85%', margin: '0 auto' }}>
            <CardContent>
              <Grid container justifyContent={'center'}>
                <Grid item xs={3.5}>
                  <Typography gutterBottom variant="h6" sx={{ textAlign: 'left' }} component="div">
                    HGT:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress sx={barStyle} variant="determinate" color="info" value={heightLog} />
                </Grid>
              </Grid>
              <br />
              <Grid container justifyContent={'center'}>
                <Grid item xs={3.5}>
                  <Typography gutterBottom variant="h6" sx={{ textAlign: 'left' }} component="div">
                    EXP:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress sx={barStyle} variant="determinate" color="success" value={experienceLog} />
                </Grid>
              </Grid>
              <br />
              <Grid container justifyContent={'center'}>
                <Grid item xs={3.5}>
                  <Typography gutterBottom variant="h6" sx={{ textAlign: 'left' }} component="div">
                    WGT:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress sx={barStyle} variant="determinate" color="error" value={weightLog} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PokeItem;