/**
 * PokemonPage
 *
 * Page-level component in Atomic Design.
 * Acts as a container responsible for:
 * - Data fetching and state management
 * - Passing data down to organism components
 *
 * @returns {JSX.Element}
 */

import { useState, useEffect } from "react";
import {
  fetchPokemonDetails,
  fetchPokemonList,
} from "../services/pokemonService";
import Table from "../components/organisms/Table/Table";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const urls = await fetchPokemonList(10);
        const pokemons = await fetchPokemonDetails(urls);
        console.log(pokemons);
        setPokemons(
          pokemons.map((pokemon) => ({
            cells: [pokemon.name, pokemon.height, pokemon.weight],
          }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>loading...</p>;

  return <Table headers={["Name", "Height", "Weight"]} items={pokemons} />;
};

export default PokemonPage;
