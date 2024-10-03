import { generationList, typesList, sortList } from "@/utils/optionList";
import { useSearchForm } from "@/component/SearchForm";

const SearchForm = () => {
  const {fieldKeyword,fieldGeneration,fieldType,fieldSort} = useSearchForm()
  return (
    <form className="grid grid-cols-4 gap-x-[20px]">
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-mb font-medium text-white"
        >
          Generation
        </label>
        <select
          {...fieldGeneration}
          id="generation"
          className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {generationList.map((item, index) => {
            return (
              <option className="capitalize" key={`genaration-key-${index}`} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label
          htmlFor="type"
          className="block mb-2 text-mb font-medium text-white"
        >
          Type
        </label>
        <select
          {...fieldType}
          id="type"
          className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {typesList.map((item, index) => {
            return (
              <option className="capitalize" key={`type-key-${index}`} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label
          htmlFor="sort"
          className="block mb-2 text-mb font-medium text-white"
        >
          Sort By
        </label>
        <select
          {...fieldSort}
          id="sort"
          className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {sortList.map((item, index) => {
            return (
              <option className="capitalize" key={`sort-key-${index}`} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label
          htmlFor="search"
          className="block mb-2 text-mb font-medium text-white"
        >
          Search
        </label>
        <input
          {...fieldKeyword}
          id="sort"
          className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
        </input>
      </div> 
    </form>
  )
}

export default SearchForm;
