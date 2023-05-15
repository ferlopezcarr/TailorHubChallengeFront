import { NotIntegerNumberException, NotNaturalNumberException } from "../../exceptions";

export const isIntegerNumber = (field: number): number => {
  if (!Number.isSafeInteger(field)) {
    throw new NotIntegerNumberException();
  }
  return field;
};

export const isNaturalNumber = (field: number): number => {
  if (field <= 0) {
    throw new NotNaturalNumberException();
  }
  return field;
};