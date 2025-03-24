
import StarRating from './StarRating';
interface CartItems
{
  image?:string;
  name?:string;
  rating?:number;
  category?:string;
  brand?:string;
  size?:number;
  price?:number;
}
const CartItem = ({image,name,rating,category,brand,size,price}:CartItems) => {
  return (
    <div className='flex gap-10 items-center'>
      <img src={image} alt="" className='w-[140px] h-[130px] border p-1 shadow-lg object-contain'/>
      <div className='flex flex-col '>
        <div className='text-xl text-blue-500 font-semibold'>{name}</div>


      {rating !== undefined &&  <StarRating rating={rating}/>}

        <div>Category : {category}</div>
        <div>Brand : {brand}</div>
        <div>Size : {size}</div>
        <div>Price : ₹{price}</div>
      </div>
    </div>
  )
}

export default CartItem
