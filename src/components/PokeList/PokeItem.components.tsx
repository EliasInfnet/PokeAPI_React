import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Pokemon } from "../../models/pokemon.models";
import theme from "../../theme/theme";

type PokeItemProps = {
  pokemon: Pokemon
}

function PokeItem({ pokemon }: PokeItemProps) {
  return (
    <Grid item xs={6} lg={4} xl={3}>
      <Card elevation={4}>
        <CardMedia
          component="img"
          height="150"  
          image={pokemon.image}
          sx={{maxWidth:'60%' , margin:'20px auto 0 auto',borderWidth:'10px', borderColor:theme.palette.primary.main}}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ligula in massa ornare interdum.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PokeItem;