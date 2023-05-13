import { RestaurantComponent } from './components/restaurant.component';
import { Restaurant } from './models/restaurant';
import { getRestaurants } from './services/restaurant.service';

export default function RestaurantPage() {
  let restaurants: Restaurant[] = [];
  getRestaurants().then((restaurantData) => {
    if (!restaurants) {
      return;
    }
    restaurants = restaurantData;
  });

  return restaurants.map((restaurant) => {
    <div>
      <RestaurantComponent restaurant={restaurant}></RestaurantComponent>
    </div>;
  });
}
