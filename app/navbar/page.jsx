"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";

const navBar = () => {
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton></IconButton>
            <Typography>Menu</Typography>
            <Button color="inherit" edge="last">
              Profile
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default navBar;
