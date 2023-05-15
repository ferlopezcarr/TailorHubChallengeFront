"use client";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Restaurant } from "../../models";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantDetailsComponent({ restaurant }: Props) {
  return (
    <>
      <Card className="restaurant-card">
        <CardHeader title={restaurant.name} />
        <CardMedia
          className="card-media"
          component="img"
          height="550"
          image={restaurant.image}
          alt="Restaurant image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {restaurant.cuisine_type}
            {restaurant.photograph}
            {restaurant.neighborhood}
            {restaurant.address}
            {JSON.stringify(restaurant.latlng)}
            {JSON.stringify(restaurant.operating_hours)}
            {JSON.stringify(restaurant.reviews)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button startIcon={<FavoriteIcon />}>Mark as favourite</Button>
        </CardActions>
      </Card>
    </>
  );
}
