'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { Button, Typography } from '@mui/material';
import Navbar from '../../components/Navbar';

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const foodItems = useSelector((state: RootState) => state.food.items);

  const itemsInCart = cartItems.map(cartItem => {
    const foodItem = foodItems.find(item => item.id === cartItem.id);

    if(!foodItem) return null;
    return { ...foodItem, quantity: cartItem.quantity };
  }).filter(item => item !== null) as (typeof foodItems[0] & {quantity: number})[];

  const totalAmount = itemsInCart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    alert(`Checkout complete. Total amount: $${totalAmount.toFixed(2)}`);

    // dispatch(clearCart());
  };

  return (
    <div>
      <Navbar />
      <Typography variant="h4" component="h1" sx={{ padding: 2 }}>
        Checkout
      </Typography>
      <div style={{ padding: 2 }}>
        {itemsInCart.map((item) => (
          <Typography key={item.id} variant="body1" sx={{ marginBottom: 2 }}>
            {item.name} x {item.quantity}: ${(item.price * item.quantity).toFixed(2)}
          </Typography>
        ))}
        <Typography variant="h6" component="h2" sx={{ marginTop: 2 }}>
          Total: ${totalAmount.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleCheckout} sx={{ marginTop: 2 }}>
          Complete Checkout
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
