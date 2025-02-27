/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from "antd";
import ProductCard from "../../components/ProductCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });

    // Extract updated filters from `newFilteredProducts`
    const updatedCategories = new Set(
      newFilteredProducts.map((item: any) => item.category)
    );
    const updatedTypes = new Set(
      newFilteredProducts.map((item: any) => item.type)
    );
    const updatedBrands = new Set(
      newFilteredProducts.map((item: any) => item.brand)
    );

    // ✅ Preserve previously selected filters if they still exist
    setFilters({
      category: updatedCategories,
      type: updatedTypes,
      brand: updatedBrands,
    });

    // ✅ Only reset selections if they are completely removed
    setSelectedCategories(
      (prev) =>
        prev.filter((category) => updatedCategories.has(category)) || prev
    );
    setSelectedTypes(
      (prev) => prev.filter((type) => updatedTypes.has(type)) || prev
    );
    setSelectedBrands(
      (prev) => prev.filter((brand) => updatedBrands.has(brand)) || prev
    );

    setFilteredProducts(newFilteredProducts);
  }, [
    searchTerm,
    selectedCategories,
    selectedTypes,
    selectedBrands,
    priceRange,
    allProducts,
  ]);

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

      <div className="w-full flex pl-48">
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
              onClick={() => setPriceRange(tempPriceRange)} // ✅ Only updates `priceRange` when clicked
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
        <div className="flex flex-col  w-[1400px] h-full">
          <div className="flex-1 flex flex-wrap  gap-10  ">
            {filteredProducts.map((val: any) => (
              <div>
                <NavLink to="/product">
                  <ProductCard
                    image={val.image[0]}
                    name={val.name}
                    brand={val.brand}
                    rating={val.rating}
                    price={val.price}
                  />
                </NavLink>
              </div>
            ))}
          </div>
          <div className="h-14 flex justify-center mt-10">
            <button style={{ backgroundColor: "#A56826" }} className="w-14">
              <LeftOutlined style={{ color: "white" }} />
            </button>
            <button className=" w-14 border  bg-gray-200">1</button>
            <button className=" w-14 border">2</button>
            <button className=" w-14 border">3</button>
            <button className=" w-14 border">4</button>
            <button className=" w-14 border">5</button>
            <button style={{ backgroundColor: "#A56826" }} className="w-14">
              <RightOutlined style={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
