import { Restaurant } from "../../models";
import RestaurantComponent from "../restaurant/restaurant.component";
import "./restaurant-list.component.css";

interface Props {
  restaurants: Restaurant[];
}

export default function RestaurantListComponent({ restaurants }: Props) {
  const restaurantList = restaurants;
  return (
    <div className="restaurant-list">
      {restaurantList?.map((restaurant) => (
        <div key={restaurant.id}>
          <RestaurantComponent restaurant={restaurant}></RestaurantComponent>
        </div>
      ))}
    </div>
  );
}
