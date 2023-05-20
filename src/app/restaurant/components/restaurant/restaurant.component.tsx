import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Restaurant } from "../../models";
import "./restaurant.component.css";
import CuisineTypeComponent from "@app/restaurant/details/components/cuisine-type-badge.component";
import LocationBadgeComponent from "@app/restaurant/details/components/location-badge.component";

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
          <Stack direction="row" spacing={1}>
            <CuisineTypeComponent cuisine_type={restaurant.cuisine_type} />
            <LocationBadgeComponent neighborhood={restaurant.neighborhood} />
          </Stack>
        </CardContent>
        <CardActions>
          <Link href={`/restaurant/details/${restaurant.id}`}>
            <Button startIcon={<VisibilityIcon />}>View details</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
