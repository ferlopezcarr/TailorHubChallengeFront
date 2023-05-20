import { GpsFixed } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Location } from "../../models";

interface Props {
  latlng: Location;
}

export default function CoordinatesListItemComponent({ latlng }: Props) {
  const location = !!latlng ? Object.values(latlng)?.join(", ") : null;
  return (
    <>
      {!!location && (
        <ListItemButton>
          <ListItemIcon>
            <GpsFixed />
          </ListItemIcon>
          <ListItemText primary={location} />
        </ListItemButton>
      )}
    </>
  );
}
