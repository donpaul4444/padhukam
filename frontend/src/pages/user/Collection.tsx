import { Slider } from "antd";
import ProductCard from "../../components/ProductCard";
import bestSeller from "../../temp";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Collection = () => {
  const formatter = (value?: number) => `₹${value}`;
  return (
    <div className="w-full flex pl-48">
      <div className="w-[300px] h-full pl-6 flex flex-col gap-2">
        <div className="text-[30px] font-semibold mb-2">FILTERS</div>
        <div className=" mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
          <div className="text-[20px] font-semibold">CATEGORIES</div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Men
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Women
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Kids
          </div>
        </div>
        <div className=" mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
          <div className="text-[20px] font-semibold">TYPE</div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Sneakers
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Sports Shoes
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Formal Shoes
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Casual Shoes
          </div>
        </div>
        <div className=" mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
          <div className="text-[20px] font-semibold">BRANDS</div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Adidas
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Bata
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Reebok
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Puma
          </div>
          <div className="flex  gap-2 font-semibold">
            <input type="checkbox" className="w-3" />
            Nike
          </div>
        </div>

        <div className=" mb-2 border-[1px] border-grey w-[250px] p-3 flex flex-col gap-2">
          <div className="text-[20px] font-semibold">PRICE</div>
          <>
            <Slider
              range
              defaultValue={[0, 5000]}
              min={0}
              max={10000}
              tooltip={{ formatter }}
            />
          </>
        </div>
        <button
          className="w-[100px] rounded-lg py-1 text-white text-xl"
          style={{ backgroundColor: "#000" }}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex-1 flex flex-wrap  gap-10 justify-center">
          {bestSeller
            .slice(0, Math.floor(bestSeller.length / 4) * 4)
            .map((val) => (
              <div>
                <NavLink to='/product'>
                <ProductCard
                  image={val.image}
                  name={val.name}
                  subhead={val.subhead}
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
  );
};

export default Collection;
