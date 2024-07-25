'use client'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/Redux/store';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Navbar from '../../components/Navbar';
import { useAppDispatch } from '@/Redux/store';
import { removeItemFromCart } from '@/Redux/slices/cartSlice';


const Cart: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const foodItems = useSelector((state: RootState) => state.food.items);

//Handling the items is possibly undefined error
 const itemsInCart = cartItems.map((cartItem)=> {
const foodItem = foodItems.find(item => item.id === cartItem.id);
 
    if(!foodItem) return null; //Returns null if Food item is not found
   return { ...foodItem, quantity: cartItem.quantity };
 }).filter(item => item !== null) as (typeof foodItems[0] & {quantity: number}) []; 
//filters out Null and asserts type.
// Extracting ids from cartItems into an array
// const cartItemIds = cartItems.map(item => item.id);

// Filtering foodItems based on whether their id exists in cartItemIds
// const itemsInCart = foodItems.filter(item => cartItemIds.includes(item.id));
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItemFromCart(id));
  };
console.log(itemsInCart);
  return (
    <div>
      <Navbar />
      {/* <Typography variant="h4" component="h1" sx={{ padding: 2 }}>
        Cart
      </Typography> */}
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {itemsInCart.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove from Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;
