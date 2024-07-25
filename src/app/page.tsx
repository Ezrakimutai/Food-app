'use client'
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '@/Redux/store';
import { setFoodItems, selectFoodItem, clearSelectedItem } from '@/Redux/slices/foodSlice';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Navbar from '../components/Navbar';
import p1 from '@/assets/images/p1.png';
import p9 from '@/assets/images/p9.png';
import { addItemToCart } from '@/Redux/slices/cartSlice';



const Home: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const foodItems = useSelector((state: RootState) => state.food.items);
  const selectedItem = useSelector((state: RootState) => state.food.selectedItem);
  const [openDialog, setOpenDialog] = React.useState(false);

  useEffect(() => {
    dispatch(setFoodItems([
      { 
        id: 1, 
        name: 'Pizza', 
        image: p1.src, 
        description: 'Delicious cheese pizza', 
        price: 10 
      },
      { 
        id: 2, 
        name: 'Burger', 
        image: p9.src, 
        description: 'Juicy beef burger', 
        price: 8 
      },

    ]));
  }, [dispatch]);

  const handleClickItem = (item: any) => {
    dispatch(selectFoodItem(item));
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    dispatch(clearSelectedItem());
    setOpenDialog(false);
  };
  const reduxItems = useSelector((state: RootState) => state.cart.items);

  const addToCart = (item: any) => {
    dispatch(addItemToCart(item))
    console.log(reduxItems);
  }

  return (
    <div>
      <Navbar />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {foodItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="50"
                width="50"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleClickItem(item)}>
                  View Details
                </Button>
                <Button variant="contained" color="primary" onClick = { () => addToCart(item)}>
                Add item cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedItem && (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedItem.name}</DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              height="140"
              image={selectedItem.image}
              alt={selectedItem.name}
            />
            <Typography variant="body1" color="text.primary" sx={{ marginTop: 2 }}>
              {selectedItem.description}
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ marginTop: 2 }}>
              ${selectedItem.price}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Home;
