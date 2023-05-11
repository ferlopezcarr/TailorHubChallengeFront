import { OperationHoursMap } from './operation-hours-map';
import { Review } from './review';

export interface Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  location: Location;
  image: string;
  cuisine_type: string;
  operating_hours: OperationHoursMap
  reviews: Review[];
}
