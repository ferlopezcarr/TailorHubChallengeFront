import { DayOfWeek } from './day-of-week';

export type OperationHoursMap = {
  [dayOfWeek in DayOfWeek]: string;
};