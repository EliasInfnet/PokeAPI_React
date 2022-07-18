import { pokemonColors } from "../theme/pokemonType"

export type Pokemon = {
  id: Number,
  name: string,
  image: string,
  height: Number,
  experience: Number,
  weight: Number,
  type: String
}

export async function getPokemon(url: string): Promise<Pokemon> {
  const res = await fetch(url)
  const data = await res.json()

  const id = data.id
  const name = data.forms[0].name.charAt(0).toUpperCase() + data.forms[0].name.slice(1).toLowerCase()
  const image = data.sprites["front_default"]
  const { height, base_experience, weight } = data
  const type = data.types[0].type.name

  const pokemon: Pokemon = {
    id,
    name,
    image,
    height,
    experience: base_experience,
    weight,
    type
  }

  return pokemon
}

export async function getPokemonResponse(url: string): Promise<any> {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export async function getPokemons(url: string): Promise<Array<Pokemon>> {
  try {
    const data = await getPokemonResponse(url)
    const pokemonsJSON = data.results

    let pokemons: Array<Pokemon> = await Promise.all(
      pokemonsJSON.map(async (p: any) => {
        const newPokemon = await getPokemon(p.url)
        return newPokemon
      })
    )
    return pokemons

  } catch (err) {
    console.error(err)
    return []
  }
}