import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import hotelImage from './images.jpg';

export default function Hotels() {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3000/hotels');
        const { data } = response;
        setHotelList(data);
      } catch (error) {
        console.error('Error loading hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div style={{ marginBottom: '100px' }}>
      <h2>Hotels</h2>
      {/* Отображение списка отелей */}
      <Grid container spacing={2} justifyContent="center" sx={{ rowGap: '50px', columnGap: '50px' }}>
        {hotelList.map((hotel) => (
          <Grid item key={hotel.id} xs={3} sx={{ display: 'flex', justifyContent: 'center', borderRadius: '15px' }}>
            <Card
              sx={{
                width: '100%',
                border: '1px solid black',
                padding: 0,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={hotelImage}
                alt="Hotel"
              />
              <CardContent>
                <h3>{hotel.label}</h3>
                <p>Score: {hotel.value}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
