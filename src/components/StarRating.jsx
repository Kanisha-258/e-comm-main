import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<MdOutlineStarPurple500 key={i} size={20} color="gold" />);
    } else if (rating > i && rating < i + 1) {
      stars.push(<MdOutlineStarHalf key={i} size={20} color="gold" />);
    } else {
      stars.push(<MdOutlineStarOutline key={i} size={20} color="gold" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
