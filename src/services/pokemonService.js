const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonList = async (limit) => {
  try {
    const response = await fetch(BASE_URL + `?limit=${limit}`);

    if (!response.ok) {
      throw new Error("failed to fetch pokemon list");
    }

    const data = await response.json();
    return data.results.map((item) => item.url);
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemonDetails = async (urls) => {
  try {
    const requests = urls.map((url) => fetch(url).then((res) => res.json()));

    return Promise.all(requests);
  } catch (error) {
    console.error("failed to fetch pokemon details");
  }
};
