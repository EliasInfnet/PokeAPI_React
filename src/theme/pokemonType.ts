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
  'rock': grey["500"],
  'steel': brown["700"],
  'ice': blue["300"],
  'electric': yellow["500"],
  'dragon': green["600"],
  'ghost': brown["200"],
  'psychic': purple["500"],
  'normal': yellow["600"],
  'fighting': red["500"],
  'poison': red["700"],
  'bug': green["400"],
  'flying': blue["300"],
  'dark': purple["700"],
  'fairy': yellow["100"]
}

export default pokemonTypesColors;