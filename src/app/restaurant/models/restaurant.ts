import { Location } from "./location";
import { OperationHoursMap } from "./operation-hours-map";
import { Review } from "./review";

export interface Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: Location;
  image: string;
  cuisine_type: string;
  operating_hours: OperationHoursMap;
  reviews: Review[];
}
