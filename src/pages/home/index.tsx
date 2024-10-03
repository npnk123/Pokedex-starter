import SearchForm from "@/component/SearchForm";
import { usePokemonListStore } from "@/store/pokemonList";
import PokemonCard from "@/component/PokemonCard";
import ReactLoading from "react-loading";


const Homepage = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore();
  console.log(pokemon);

  return (
    <div className="w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/image/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt="Pokemon_Logo"
        />
      </div>
      <SearchForm />
      {fetchPokemon.loading && (
        <div className="h-[600px] flex justify-center items-center">
          <ReactLoading type="spin" color="#fff" />
        </div>
      )}
      {!fetchPokemon.loading && (
        <div className="grid grid-cols-4 gap-[20px] mt-[40px] justify-center">
          {pokemon.data?.map((item) => {
            return (
              <PokemonCard
                image={item.image || " "}  
                name={item.name}  
                id={item.id}  
                types={item.types}  
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Homepage;
