'use client'
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton , Badge} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { selectCartItemCount } from '@/Redux/slices/cartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';

const Navbar: React.FC = () => {
  const cartItemCount = useSelector ((state: RootState) => selectCartItemCount(state));
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Food Ordering App
        </Typography>
        <IconButton color="inherit" component={Link} href="/">
          <AddHomeIcon/>
        </IconButton>
        <IconButton color="inherit" component={Link} href="/cart">
        <Badge badgeContent={cartItemCount} color="secondary">
        <AddShoppingCartIcon/>
        </Badge>
        </IconButton>
        <IconButton color="inherit" component={Link} href="/checkout">
          <PaymentIcon/>
        </IconButton>
        
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
