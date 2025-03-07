import Image from "next/image"
import Link from "next/link"
import Routes from "../../routes/routes"

const SearchForm = ({ CloseSearch, filteredProduct, setQuery, query }) => {
 

  
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white flex md:px-16 py-4 md:py-8 gap-4 md:text-xl justify-between items-center px-4 border-b">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 md:size-8 mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 md:text-2xl rounded-md focus:outline-none"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={CloseSearch} className="ml-4 text-gray-600">
          ✖
        </button>
      </div>

      {/* Hasil Pencarian */}
      <div className={`bg-white grid md:grid-cols-2 grid-cols-1 gap-4 md:p-8 p-4 mx-2  md:m-4 rounded-[6px] md:max-w-7xl ${filteredProduct.length === 0 ? "opacity-0" : "opacity-100"} transition-opacity ease-in-out duration-300`}>
        {filteredProduct.map((product, index) => (
          index < 4?
          <Link href={Routes.Marketplace + `/${product.id}`} key={index}  className="col-span-1 flex gap-4 hover:bg-gray-100 p-1 rounded-[6px]" onClick={CloseSearch}>
            <Image src={product.image} alt={product.name} height={100} width={100} className="w-20 h-20 md:w-24 md:h-24 object-cover object-top rounded-[8px]" />
            <div>
              <h3 className="md:text-lg font-medium">{product.name}</h3>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm text-gray-600">Price: {product.price}</p>
            </div>
          </Link>
          : null
        ))}
        {
          filteredProduct.length > 4?
          <div className="md:col-span-2 col-span-1 border-t-2 pt-4">
            <Link href={Routes.Marketplace + `?query=${query}`} key="more-results" className="flex justify-center gap-4 hover:bg-gray-100 rounded-[6px] cursor-pointer">
              <p>See More Results</p>
            </Link>
          </div>
          :null
        }
      </div>
    </div>
  )
}

export default SearchForm
