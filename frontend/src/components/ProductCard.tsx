import StarRating from "./StarRating";

interface Product {
  image: string;
  name: string;
  subhead: string;
  rating: number;
  price: number;
}

const ProductCard = ({ image, name, subhead, price, rating }: Product) => {
  return (
    <div className="w-[300px] h-[500px] border-2 flex flex-col items-center gap-2 shadow-lg">
      <img src={image} alt="" className=" w-[90%]" />
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-lg">{subhead}</div>
      <StarRating rating={rating} />
      <div className="font-semibold text-lg">₹{price}</div>
      <button
        className="text-black rounded px-2 py-1 text-lg mt-2"
        style={{ backgroundColor: "#00cbf8" }}
      >
        ADD TO BASKET
      </button>
    </div>
  );
};

export default ProductCard;
