import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function ProfileButtonComponent() {
/*   const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */

  return (
    <>
      <IconButton
        size="large"
        aria-label="Account of current user"
/*         onClick={handleOpen} */
      >
        <AccountCircle />
      </IconButton>
{/*       <LoginDialogComponent open={open} onClose={handleClose} /> */}
    </>
  );
}
