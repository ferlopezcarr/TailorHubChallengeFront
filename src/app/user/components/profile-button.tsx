import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";

export default function ProfileButton() {
    return (
        <Link href="/profile">
            <IconButton
                size="large"
                aria-label="Account of current user"
                color="inherit"
            >

                <AccountCircle />

            </IconButton>
        </Link>
    )
}