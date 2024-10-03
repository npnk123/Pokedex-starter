import { pokemonDetailServices } from "@/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

const DetailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };

  useEffect(() => {
    if (name) callData(name);
    console.log(name);
  }, [name]);

  return (
    <div className="w-[90%] m-[auto] max-w-[500px]">
      <div className="flex justify-center">
        <img
          src="/image/logo.webp"
          className="max-h-[80px] m-[20px] mt-[20px]"
          alt="Pokedex_Logo"
        />
      </div>
      <div className="w-[90%] max-w-[600px]">
        {pokemon.data && (
          // <div className="rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 mb-5 p-[50px]">
          <div className="">
            {/* <div className="bg-center aspect-square w-full bg-cover rounded-[20px]"> */}
            <div className="">
              <img
                className="animate-tada rounded-t-lg h-[350px] p-[0px] w-full"
                src={pokemon.data.image}
                alt=""
              />
            </div>
            <div className="p-10">
            <div className="text-2xl text-center">
              {pokemon.data.types.map((item) => {
                return (
                  <span
                    className={`badge-type-${item.type.name} px-[14px] capitalize py-1 ml-5 rounded-[16px]`}
                  >
                    {" "}
                    {item.type.name}{" "}
                  </span>
                );
              })}
            </div>
            <div className="pt-5">
              <div className="text-center">
                <h5 className="mb-2 text-5xl font-bold tracking-tight text-white dark:text-white">
                  #{pokemon.data.id}
                </h5>
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
                  {pokemon.data.name}
                </h5>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailPage;
