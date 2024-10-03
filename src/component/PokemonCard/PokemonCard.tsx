import { Type } from "@/interface/pokemonDetail";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  image: string
  name: string
  id: number
  types: Type[]
}
const PokemonCard = ({ image, name, id, types }: PokemonCardProps) => {
  return (
    <div className="rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] bg-white max-w-[275px] m-[auto]">
      <div className="bg-[url('/image/poke-card-bg.png')] bg-center aspect-square w-full bg-cover rounded-[20px]">
        <Link
          to={`/detail/${name}`}
          className="bg-[url('/image/poke-card-bg.png')]"
        >
          <img
            className="rounded-t-lg max-h-[218px] p-[40px] w-full"
            src={image}
            alt=""
          />
        </Link>
      </div>
      <div className="py-5">
        <div className="flex justify-between">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            #{id}
          </h5>
        </div>
        <div className="flex gap-2 justify-end">
          {types.map((item) => {
            return (
              <span
                className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}
              >
                {" "}
                {item.type.name}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
