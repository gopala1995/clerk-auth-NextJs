"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import React from "react";

const NavBar = () => {
  const { isLoaded, user } = useUser();
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Dashboard
              </Button>
              <Button
                href="/create-organization"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Create Profile
              </Button>
              <Button
                href="/organization-profile"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Organization-Profile
              </Button>
            </Box>
            <Tooltip title="">
              <IconButton sx={{ px: 4 }}>
                {user ? (
                  <>
                    <UserButton className="px-4" />
                    <Button
                      href="/profile"
                      sx={{ mx: 2, color: "white", display: "block" }}
                    >
                      Profile
                    </Button>
                  </>
                ) : (
                  <>
                    <Avatar alt="Remy Sharp" src="" />

                    <Button
                      href="/sign-in"
                      sx={{ mx: 2, color: "white", display: "block" }}
                    >
                      Login
                    </Button>
                    <Button
                      href="/sign-up"
                      sx={{ mx: 2, color: "white", display: "block" }}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
