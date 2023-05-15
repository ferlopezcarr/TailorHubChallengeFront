"use client";

import ProfileButton from '@app/user/components/profile-button';
import { Restaurant } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="Application icon"
						sx={{ mr: 2 }}
					>
						<Restaurant />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						TailorHub Challenge Restaurant App
					</Typography>
					<ProfileButton />
				</Toolbar>
			</AppBar>
		</Box>
	)
}