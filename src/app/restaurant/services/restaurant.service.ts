import restaurantData from "../../../../data/restaurants.json";
import { NotFoundException } from "../../../core/exceptions/domain/not-found.exception";
import { Restaurant } from "../models/restaurant";

const restaurants = restaurantData as Restaurant[];

export const getRestaurants = (): Promise<Restaurant[]> => {
  return Promise.resolve(restaurants);
};

export const findRestaurantById = (
  id: number,
): Promise<Restaurant | undefined> => {
  const restaurant = restaurants.find(
    (restaurantTemp) => restaurantTemp.id === id,
  );
  return Promise.resolve(restaurant);
};

export const markRestaurantAsFavourite = (id: number): Promise<Restaurant> => {
  const restaurant = restaurants.find(
    (restaurantTemp) => restaurantTemp.id === id,
  );
  if (!restaurant) {
    throw new NotFoundException();
  }
  return Promise.resolve(restaurant);
};
