import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Restaurant } from "../../models";
import "./restaurant.component.css";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantComponent({ restaurant }: Props) {
  return (
    <>
      <Card className="restaurant-card">
        <CardMedia
          className="card-media"
          component="img"
          height="350"
          image={restaurant.image}
          alt="Restaurant image"
        />
        <CardHeader title={restaurant.name} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {restaurant.cuisine_type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button startIcon={<VisibilityIcon />}>View details</Button>
        </CardActions>
      </Card>
    </>
  );
}
