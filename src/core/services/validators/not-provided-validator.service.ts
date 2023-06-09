import { FieldNotProvidedException } from "../../exceptions";

export const notUndefinedOrNull = <T>(field: T | undefined | null): T => {
  if (field === undefined || field === null) {
    throw new FieldNotProvidedException();
  }
  return field;
};
