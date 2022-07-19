import { blue, red, orange, brown, grey, purple, green, yellow } from '@mui/material/colors'

export type pokemonColors = {
  ['water']: string,
  ['fire']: string,
  ['grass']: string,
  ['ground']: string,
  ['rock']: string,
  ['steel']: string,
  ['ice']: string,
  ['electric']: string,
  ['dragon']: string,
  ['ghost']: string,
  ['psychic']: string,
  ['normal']: string,
  ['fighting']: string,
  ['poison']: string,
  ['bug']: string,
  ['flying']: string,
  ['dark']: string,
  ['fairy']: string
}

const pokemonTypesColors: pokemonColors = {
  'water': blue["500"],
  'fire': orange["500"],
  'grass': green["500"],
  'ground': brown["500"],
  'rock': grey["800"],
  'steel': brown["800"],
  'ice': blue["400"],
  'electric': yellow["800"],
  'dragon': green["500"],
  'ghost': brown["700"],
  'psychic': purple["400"],
  'normal': yellow["600"],
  'fighting': red["400"],
  'poison': red["400"],
  'bug': green["400"],
  'flying': blue["400"],
  'dark': purple["500"],
  'fairy': yellow["600"]
}

export default pokemonTypesColors;