import React from 'react';
import { Restaurant } from '../models/restaurant';

interface Input {
  restaurant: Restaurant;
}

export const RestaurantComponent = ({ restaurant }: Input) => {
  return (
    <div>{restaurant.name}</div>
  );
};