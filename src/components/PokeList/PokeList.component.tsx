import { Grid } from "@mui/material";
import { Pokemon } from "../../models/pokemon.models";
import PokeItem from "./PokeItem.components";

type PokeListProps = {
  pokemons: Array<Pokemon>
}

function PokeList({ pokemons }: PokeListProps) {
  return (
    <Grid container spacing={2}>
      {pokemons.map((p, index) => {
        return (
          <PokeItem key={index} pokemon={p}/>
        )
      })}
    </Grid>
  );
}

export default PokeList;