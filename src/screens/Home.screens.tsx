import { useEffect, useState } from 'react';
import PokeList from '../components/PokeList/PokeList.component';
import { Button, Grid } from '@mui/material';
import { getPokemonResponse, getPokemons, Pokemon } from '../models/pokemon.models';
import Header from '../components/Header/Header.components';

function Home() {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([])
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')

  const handleNextPage = async () => {
    if (nextPage !== null && nextPage !== '') {
      const newPokemons = await getPokemons(nextPage)
      const { next, previous } = await getPokemonResponse(nextPage)

      setPokemons(() => newPokemons)
      setNextPage(() => next)
      setPrevPage(() => previous)
    }
  }

  const handlePreviousPage = async () => {
    if (prevPage !== null && prevPage !== '') {
      const newPokemons = await getPokemons(prevPage)
      const { next, previous } = await getPokemonResponse(prevPage)

      setPokemons(() => newPokemons)
      setNextPage(() => next)
      setPrevPage(() => previous)
    }
  }

  useEffect(() => {
    const urlAPI = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=16'
    getPokemons(urlAPI).then(res => setPokemons(() => [...res]))
    getPokemonResponse(urlAPI).then(res => {
      setNextPage(() => res.next)
      setPrevPage(() => res.previous)
    })
  }, [])

  return (
    <div className="Home">
      {/* <Header/> */}
      <Grid container sx={{ margin: '20px 0px' }} spacing={2}>
        <Grid item><Button onClick={handlePreviousPage} variant='contained' color='error'>Previous</Button></Grid>
        <Grid item><Button onClick={handleNextPage} variant='contained' color='success'>Next</Button></Grid>
      </Grid>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default Home;