'use client'
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Food Ordering App
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/cart">
          Cart
        </Button>
        <Button color="inherit" component={Link} href="/checkout">
          Checkout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
