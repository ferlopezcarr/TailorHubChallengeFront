import { OperationHoursMap } from "@app/restaurant/models";
import { AccessTime, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

interface Props {
  operating_hours: OperationHoursMap;
}

export default function OperatingHoursListItemComponent({
  operating_hours,
}: Props) {
  let [open, setOpen] = useState(false);
  let operatingHours: string[] = [];
  if (!!operating_hours) {
    operatingHours = Object.entries(operating_hours).map(
      ([day, hours]) => `${day}: ${hours}`,
    );
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccessTime />
        </ListItemIcon>
        <ListItemText primary="Schedule" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {operatingHours.map((daySchedule) => (
              <ListItem key="daySchedule" sx={{ pl: 4 }}>
                <ListItemText primary={daySchedule} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      }
    </>
  );
}
