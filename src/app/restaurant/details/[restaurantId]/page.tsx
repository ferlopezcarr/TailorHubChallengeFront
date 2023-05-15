"use client";

import { useEffect, useState } from "react";
import { getNumberFromQueryRoute } from "../../../../core/services";
import { Restaurant } from "../../models";
import { findRestaurantById } from "../../services/restaurant.service";
import RestaurantDetailsComponent from "../components/restaurant-details.component";

export default function Page({ params }: { params: { restaurantId: string } }) {
  let [restaurant, setRestaurant] = useState<Restaurant>();
  const restaurantId = getNumberFromQueryRoute(params?.restaurantId);

  useEffect(() => {
    if (!restaurantId) {
      return;
    }

    findRestaurantById(restaurantId).then((restaurantFound) => {
      if (!restaurantFound) {
        return;
      }
      setRestaurant(restaurantFound);
    });
  }, [restaurantId]);

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
