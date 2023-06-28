import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Hotels</h2>
      {/* Отображение списка отелей */}
      {hotelList.map((hotel) => (
        <div key={hotel.id}>
          <h3>{hotel.label}</h3>
          {/* Остальная информация о каждом отеле */}
        </div>
      ))}
    </div>
  );
}
