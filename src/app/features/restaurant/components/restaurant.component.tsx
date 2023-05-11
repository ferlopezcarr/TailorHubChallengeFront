import React from 'react';
import { Restaurant } from '../models/restaurant';

interface Props {
  restaurant: Restaurant;
}

export const RestaurantComponent = ({ restaurant }: Props) => {
  const cardInformation: Card = { name: restaurant.name, imageUrl: restaurant.photograph };
  return (
    <div><CardComponent card="cardInformation"></CardComponent>{restaurant.name}</div>
  );
};