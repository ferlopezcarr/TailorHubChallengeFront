import { Chip } from "@mui/material";

interface Props {
  neighborhood: string;
}

export default function LocationBadgeComponent({ neighborhood }: Props) {
  const restaurantNeighborhood = neighborhood;
  return (
    <Chip
      label={restaurantNeighborhood}
      variant="outlined"
      color="secondary"
    />
  );
}
