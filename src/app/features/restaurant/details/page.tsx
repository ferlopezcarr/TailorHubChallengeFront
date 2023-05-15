"use client";

import { useEffect, useState } from "react";
import { Restaurant } from "../models";
import { findRestaurantById } from "../services/restaurant.service";
import RestaurantDetailsComponent from "./components/restaurant-details.component";

export default function Page() {
  let id = 1;
  let [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    if (!id) {
      return;
    }

    findRestaurantById(id).then((restaurantFound) => {
      if (!restaurantFound) {
        return;
      }
      setRestaurant(restaurantFound);
    });
  }, [id]);

  return (
    <>
      {!!restaurant && (
        <RestaurantDetailsComponent
          restaurant={restaurant}
        ></RestaurantDetailsComponent>
      )}
    </>
  );
}
