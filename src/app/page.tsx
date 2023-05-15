"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import RestaurantListComponent from "./restaurant/components/restaurant-list/restaurant-list.component";
import { Restaurant } from "./restaurant/models";
import { getRestaurants } from "./restaurant/services/restaurant.service";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  let [restaurantList, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    getRestaurants().then((restaurants) => {
      if (!restaurants) {
        return;
      }
      setRestaurants(restaurants);
    });
  }, []);   

  return (
    <main className={`${inter.className}`}>
      {
        <RestaurantListComponent
          restaurants={restaurantList}
        ></RestaurantListComponent>
      }
    </main>
  );
}
