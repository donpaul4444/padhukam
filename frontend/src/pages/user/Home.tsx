import banner from "../../assets/images/pexels-photo-298863.webp";
import leftarrow from "../../assets/images/left arrow.png";
import rightarrow from "../../assets/images/right arrow.png";
import bestSeller from "../../temp";
import Newsletter from "../../components/Newsletter";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <div className="  flex flex-col items-center justify-center">
      <img src={banner} alt="" className=" w-full h-[700px] object-cover" />
      <div className=" w-full flex flex-col items-center justify-center gap-5 mt-5">
        <div className="text-4xl font-bold ">Hot Sellers</div>
        <div className="border-b-2 border-black w-[80%] "></div>
        <div className="flex  w-full justify-center items-center gap-2">
          <div className="flex w-[80%] mt-5 justify-between items-center">
            <img src={leftarrow} alt="" className="w-20 h-20" />
            {bestSeller.slice(0,4).map((val) => (
              <div>
                <ProductCard
                  image={val.image}
                  name={val.name}
                  subhead={val.subhead}
                  rating={val.rating}
                  price={val.price}
                />
              </div>
            ))}
            <img src={rightarrow} alt="" className="w-20 h-20" />
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center gap-5 mt-5">
        <div className="text-4xl font-bold mt-3">New Arrivals</div>
        <div className="border-b-2 border-black w-[80%] "></div>
        <div className="flex  w-full justify-center items-center gap-2">
          <div className="flex flex-wrap w-[80%] border mt-5 gap-5 items-center">
            <img src={leftarrow} alt="" className="w-20 h-20" />
            {bestSeller.slice(0,4).map((val) => (
              <div>
                <ProductCard
                  image={val.image}
                  name={val.name}
                  subhead={val.subhead}
                  rating={val.rating}
                  price={val.price}
                />
              </div>
            ))}
            <img src={rightarrow} alt="" className="w-20 h-20" />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
