import restaurantData from '../../../../../data/restaurants.json';
import { Restaurant } from '../models/restaurant';

export const getRestaurants = (): Promise<Restaurant[]> => {
  console.log(restaurantData);
  return Promise.resolve(restaurantData);
};
