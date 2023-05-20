import { Star } from "@mui/icons-material";
import { isNaturalNumber } from "../../../../../core/services/validators";

interface Props {
  rating: number;
}

export default function RatingStarsComponent({ rating }: Props) {
  const stars = [];

  isNaturalNumber(rating);
  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} sx={{ color: "#fbbc04" }} />);
  }

  return (
    <div className="rating-stars">
      {stars}
    </div>
  );
}
