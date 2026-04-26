import rectangle7 from "../assets/Rectangle7.png"
import StarRating from "./StarRating"

export default function ReviewCard({ img, name, rating, review }) {
  return (
    <div
    className="p-12"
      style={{
        backgroundImage: `url(${rectangle7})`,
        // backgroundSize: 'cover',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top'
      }}>
      <div className="flex">
        <img src={img} alt="profile picture of customer" className="w-14 h-14 rounded-full object-cover" />
        <div className="px-6">
          <h2 className="md:text-2xl">{name}</h2>
          <StarRating rating={rating}/>
        </div>
      </div>
        <p className="font-thin py-6 md:text-base text-sm">{review}</p>
    </div>
  )
}
