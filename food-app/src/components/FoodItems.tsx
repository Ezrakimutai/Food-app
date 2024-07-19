// components/FoodItems.tsx
import React from 'react';
import Image from 'next/image';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import P1IMG from "@/assets/images/p1.png";
import P9IMG from "@/assets/images/p9.png";


const foodItems = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Delicious cheese Pizza',
    image: P1IMG,
    price: 9.99,
  },
  {
    id: 2,
    name: 'Burger',
    description: 'Juicy beef burger with fresh lettuce and tomato.',
    image: P9IMG,
    price: 7.99,
  },
  // Add more food items here
];

const FoodItems = () => {
  return (
    <Grid container spacing={3} className="p-4">
      {foodItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card className="shadow-lg">
            <CardMedia>
              <Image src={item.image} alt={item.name} width={300} height={200} className="object-cover" />
            </CardMedia>
            <CardContent>
              <Typography variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body1" component="div" className="mt-2">
                ${item.price.toFixed(2)}
              </Typography>
              <Button variant="contained" color="primary" className="mt-2">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FoodItems;
