import { NextPage, GetServerSideProps } from "next"
import { Grid } from "@nextui-org/react";
import { Layout } from "@/components/layouts";
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Props{
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
    <>
      <Layout title="Listado de Pokémons" >
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map((poke) =>
              <PokemonCard pokemon={ poke } key={ poke.id } />
            )
          }
       </Grid.Container>
      </Layout>
    </>
  )
}

// only execute on the server side 
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=100&offset=0');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
      ...poke,
      id:   i + 1,
      image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1}.svg` 
  }))

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;