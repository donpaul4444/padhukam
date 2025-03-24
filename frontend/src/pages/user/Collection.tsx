/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from "antd";
import ProductCard from "../../components/ProductCard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/adminService";
import searchicon from "../../assets/images/search.png";
const Collection = () => {
  const formatter = (value?: number) => `₹${value}`;

  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [tempPriceRange, setTempPriceRange] = useState<[number, number]>([
    0, 10000,
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [filters, setFilters] = useState({
    category: new Set<string>(),
    type: new Set<string>(),
    brand: new Set<string>(),
  });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setFilteredProducts(data);
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const newFilteredProducts = allProducts.filter((product: any) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });
  
    // Extract updated filters from `newFilteredProducts`
    const updatedCategories = new Set(newFilteredProducts.map((item: any) => item.category));
    const updatedTypes = new Set(newFilteredProducts.map((item: any) => item.type));
    const updatedBrands = new Set(newFilteredProducts.map((item: any) => item.brand));
  
    // ✅ Update `filters` only if there's a change
    setFilters((prevFilters) => {
      if (
        prevFilters.category.size !== updatedCategories.size ||
        prevFilters.type.size !== updatedTypes.size ||
        prevFilters.brand.size !== updatedBrands.size
      ) {
        return {
          category: updatedCategories,
          type: updatedTypes,
          brand: updatedBrands,
        };
      }
      return prevFilters;
    });

    setSelectedCategories((prev) => {
      const updatedSelection = prev.filter((category) => updatedCategories.has(category));
      return updatedSelection.length !== prev.length ? updatedSelection : prev;
    });
  
    setSelectedTypes((prev) => {
      const updatedSelection = prev.filter((type) => updatedTypes.has(type));
      return updatedSelection.length !== prev.length ? updatedSelection : prev;
    });
  
    setSelectedBrands((prev) => {
      const updatedSelection = prev.filter((brand) => updatedBrands.has(brand));
      return updatedSelection.length !== prev.length ? updatedSelection : prev;
    });
  
    // ✅ Update filtered products only if needed
    setFilteredProducts((prev) => (JSON.stringify(prev) !== JSON.stringify(newFilteredProducts) ? newFilteredProducts : prev));
  
  }, [searchTerm, selectedCategories, selectedTypes, selectedBrands, priceRange, allProducts]);
  

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="flex flex-col items-center">
      <div className="my-5 ml-52 flex items-center w-[900px] h-[50px] bg-white border-2 border-gray-300 rounded-full shadow-md px-4 focus-within:border-gray-500 transition-all duration-200">
        <input
          type="text"
          placeholder="Search for Products, Brands, and More..."
          className="w-full text-gray-700 placeholder-gray-400 outline-none bg-transparent px-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-2">
          <img
            src={searchicon}
            alt="Search"
            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-200"
          />
        </button>
      </div>

      <div className="w-full flex pl-48  min-h-[1700px] gap-5">
        <div className="w-[300px] h-full pl-6 flex flex-col gap-2">
          <div className="text-[30px] font-semibold mb-2">FILTERS</div>
          <div className=" mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
            <div className="text-[20px] font-semibold">CATEGORIES</div>
            {[...filters.category].map((category) => (
              <label key={category} className="flex  gap-2 font-semibold">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={selectedCategories.includes(category)}
                  onChange={() =>
                    setSelectedCategories((prev) =>
                      prev.includes(category)
                        ? prev.filter((c) => c !== category)
                        : [...prev, category]
                    )
                  }
                />
                {category}
              </label>
            ))}
          </div>
          <div className=" mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
            <div className="text-[20px] font-semibold">TYPE</div>
            {[...filters.type].map((type) => (
              <label key={type} className="flex  gap-2 font-semibold">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={selectedTypes.includes(type)}
                  onChange={() =>
                    setSelectedTypes((prev) =>
                      prev.includes(type)
                        ? prev.filter((t) => t !== type)
                        : [...prev, type]
                    )
                  }
                />
                {type}
              </label>
            ))}
          </div>
          <div className=" mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
            <div className="text-[20px] font-semibold">BRANDS</div>
            {[...filters.brand].map((brand) => (
              <label key={brand} className="flex  gap-2 font-semibold">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={selectedBrands.includes(brand)}
                  onChange={() =>
                    setSelectedBrands((prev) =>
                      prev.includes(brand)
                        ? prev.filter((b) => b !== brand)
                        : [...prev, brand]
                    )
                  }
                />
                {brand}
              </label>
            ))}
          </div>

          <div className="mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
            <div className="text-[20px] font-semibold">PRICE</div>

            {/* Temporary state to hold price changes before applying */}
            <Slider
              range
              min={0}
              max={10000}
              tooltip={{ formatter }}
              value={tempPriceRange}
              onChange={(value) => setTempPriceRange(value as [number, number])}
            />

            {/* Display selected price range */}
            <div className="flex justify-between text-sm font-medium text-gray-700 mt-2">
              <span>₹{tempPriceRange[0]}</span>
              <span>₹{tempPriceRange[1]}</span>
            </div>

            {/* Apply button */}
            <div className="flex justify-end">
              <button
                className="mt-2 w-[50px] bg-black text-white text-sm font-semibold py-1 rounded "
                onClick={() => setPriceRange(tempPriceRange)} //
              >
                Apply
              </button>
            </div>
          </div>

          <button
            className="w-[100px] rounded-lg py-1 text-white text-xl"
            style={{ backgroundColor: "#000" }}
            onClick={() => {
              setFilteredProducts(allProducts);
              setSelectedCategories([]);
              setSelectedTypes([]);
              setSelectedBrands([]);
              setPriceRange([0, 10000]);
              setSearchTerm("");
            }}
          >
            Reset
          </button>
        </div>

        <div className="flex flex-wrap gap-10">
          {currentProducts.length > 0 ? (
            currentProducts.map((val: any) => (
              <div key={val.id}>
                <NavLink to={`/product/${val._id}`}>
                  <ProductCard
                    image={val.image[0]}
                    name={val.name}
                    brand={val.brand}
                    rating={val.rating}
                    price={val.price}
                  />
                </NavLink>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              No products found.
            </p>
          )}
        </div>
      </div>
      {/* Pagination - Always at the Bottom */}
      <div className="h-14 flex justify-center mt-auto gap-2 pl-[400px]">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 border rounded ${
              currentPage === index + 1 ? "bg-gray-200 font-bold" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Collection;
