import StarRating from "./StarRating";
interface Product {
  image: string;
  name: string;
  brand: string;
  rating: number;
  price: number;
}

const ProductCard = ({ image, name, brand, price, rating }: Product) => {
  return (
    <div className="w-[300px] h-[500px] border-2 flex flex-col items-center gap-2 shadow-lg">
      <div className="w-[280px] h-[270px] flex items-center justify-center  mt-3">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-contain" />
        ) : (
          <span className="text-gray-500">No Image Available</span>
        )}
      </div>
      <div className="font-semibold text-lg truncate max-w-[250px]">{name}</div>
      <div className="text-lg">{brand}</div>
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
