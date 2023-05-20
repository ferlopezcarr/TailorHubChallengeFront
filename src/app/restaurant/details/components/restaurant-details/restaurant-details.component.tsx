import { LocationOn } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { Restaurant } from "../../../models";
import CoordinatesListItemComponent from "../coordinates-list-item.component";
import CuisineTypeComponent from "../cuisine-type-badge.component";
import FavoriteButtonComponent from "../favorite-button/favorite-button.component";
import LocationBadgeComponent from "../location-badge.component";
import OperatingHoursListItemComponent from "../operating-hours-list-item.component";
import ReviewListItemComponent from "../review-list-item/review-list-item.component";
import "./restaurant-details.component.css";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantDetailsComponent({ restaurant }: Props) {
  const cardSubHeader = {
    alignItems: "center",
  } as const;

  return (
    <>
      <Card className="restaurant-card">
        <CardHeader
          title={restaurant.name}
          action={<FavoriteButtonComponent />}
        />
        <CardMedia
          className="card-media"
          component="img"
          height="550"
          image={restaurant.image}
          alt={restaurant.photograph}
        />
        <CardContent>
          <Stack direction="row" sx={cardSubHeader} spacing={1}>
            <CuisineTypeComponent cuisine_type={restaurant.cuisine_type} />
            <LocationBadgeComponent neighborhood={restaurant.neighborhood} />
          </Stack>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOn />
              </ListItemIcon>
              <ListItemText primary={restaurant.address} />
            </ListItem>
            <CoordinatesListItemComponent latlng={restaurant.latlng} />
            <OperatingHoursListItemComponent
              operating_hours={restaurant.operating_hours}
            />
          </List>
          <ReviewListItemComponent reviews={restaurant.reviews} />
        </CardContent>
      </Card>
    </>
  );
}
