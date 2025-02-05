
import star from "../assets/images/Star.png"
import yellowstar from "../assets/images/yellow star.png"
interface starRatingProps {
    rating:number;
}
const StarRating = ({rating}:starRatingProps) => {
  return (
    <div className='flex '>
{
    Array.from({length:5},(_,index)=>(
        <img src={index<rating?yellowstar:star} alt="" className='w-8 h-8'/>
    ))
}

    </div>
  )
}

export default StarRating
