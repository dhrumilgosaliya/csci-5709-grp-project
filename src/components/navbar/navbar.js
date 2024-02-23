import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Stack } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Navbar() {
  return (
    // App bar component with static position
    <AppBar position="static">
      {/* Toolbar for holding the content */}
      <Toolbar>
        {/* Stack to arrange elements horizontally with center alignment */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
          {/* IconButton for the logo */}
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <AttachMoneyIcon />
          </IconButton>
          {/* Typography component for the title */}
          <Typography variant="h6" component="div">
            Fintastic
          </Typography>
        </Stack>
        {/* Stack to arrange elements horizontally */}
        <Stack direction="row" spacing={2}>
          {/* Button for features */}
          <Button color="inherit">Features</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
