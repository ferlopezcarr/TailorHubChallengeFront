import { Chip } from "@mui/material";

interface Props {
  cuisine_type: string;
}

export default function CuisineTypeComponent({ cuisine_type }: Props) {
  const cuisineType = cuisine_type;
  return <Chip label={cuisineType} color="primary" />;
}
