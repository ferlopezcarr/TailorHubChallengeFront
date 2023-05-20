
import ProfileButtonComponent from "@app/user/components/profile-button/profile-button.component";
import AppIconComponent from "@components/app-icon/app-icon.component";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function HeaderComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppIconComponent aria-label="Application icon" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Spoon
          </Typography>
          <ProfileButtonComponent />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
