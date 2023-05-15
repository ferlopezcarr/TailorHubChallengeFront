import { InvalidFieldException } from "../exceptions";
import { notUndefinedOrNull } from "./validators";

export const getNumberFromQueryRoute = (field: string) => {
    notUndefinedOrNull(field);
    if (field.length === 0) {
        throw new InvalidFieldException()
    }
    try {
        return Number.parseInt(field);
    } catch (error) {
        throw new InvalidFieldException()
    }
}