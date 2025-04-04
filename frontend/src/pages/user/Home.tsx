/* eslint-disable @typescript-eslint/no-explicit-any */
import banner from "../../assets/images/pexels-photo-298863.webp";
// import leftarrow from "../../assets/images/left arrow.png";
// import rightarrow from "../../assets/images/right arrow.png";
import Newsletter from "../../components/Newsletter";
// import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/adminService";
import ProductCarousel from "../../components/ProductCarousel";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts =async()=>{
      try {
        const data= await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts()
  },[])
  return (
    <div className="  flex flex-col items-center justify-center">
      <img src={banner} alt="" className=" w-full h-[700px] object-cover" />
      <ProductCarousel title="Hot Sellers" products={products}/>
<ProductCarousel title="New Arrivals" products={products}/>
      <Newsletter />
    </div>
  );
};

export default Home;
