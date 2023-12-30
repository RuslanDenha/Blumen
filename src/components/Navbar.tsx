import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from "next/link";

const navItems = [
  { name: 'User', path: '/' },
  { name: 'Admin', path: '/admin' },
]

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" component="nav">
        <Toolbar className="flex justify-between">
          <Box className="flex">
            <Typography variant="h6" color="inherit" component="div" className="mt-1">
              Blumen
            </Typography>
          </Box>
          <Box>
            {navItems.map(({ name, path }) => (
              <Link
                key={path}
                className="mr-4"
                href={path}
              >
                {name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
