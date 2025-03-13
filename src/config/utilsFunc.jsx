import { Star, StarHalf, StarOff } from "lucide-react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} fill="currentColor" stroke="none" size={20} />
      ))}
      {halfStar && <StarHalf fill="currentColor" stroke="none" size={20} />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={i} stroke="currentColor" size={20} />
      ))}
    </div>
  );
};

export default StarRating