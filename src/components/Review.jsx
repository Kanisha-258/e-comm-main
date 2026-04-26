import Heading from "./Heading";
import { reviewData } from "../data/reviewData";
import ReviewCard from "./ReviewCard";
export default function Review() {
  return (
    <div>
      <Heading text={"Customer Review"} className={`py-8`} />
      <div className="grid md:grid-cols-3 p-4 md:p-8">
        {reviewData.map((review) => (
          <ReviewCard {...review} />
        ))}
      </div>
    </div>
  )
}

