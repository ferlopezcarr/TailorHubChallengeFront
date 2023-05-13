import React from 'react';
import { Restaurant } from '../models/restaurant';
import { RestaurantCard } from '../models/restaurant-card';
import CardComponent from '@shared/components/card/card.component';

interface Props {
  restaurant: Restaurant;
}

export const RestaurantComponent = ({ restaurant }: Props) => {
  const card = new RestaurantCard(restaurant.name, restaurant.image);
  return (
    <div><CardComponent card={card}></CardComponent>{restaurant.name}</div>
  );
};