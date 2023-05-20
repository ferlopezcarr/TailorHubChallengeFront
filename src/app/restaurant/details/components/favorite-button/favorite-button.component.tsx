import { Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function FavoriteButtonComponent() {
  const favouriteButton = {
    alignSelf: "flex-end",
    color: "#ff5d5d",
  } as const;

  return (
    <>
      <IconButton
        sx={favouriteButton}
        aria-label="Mark as favorite button"
        size="large"
      >
        <Favorite />
      </IconButton>
    </>
  );
}
