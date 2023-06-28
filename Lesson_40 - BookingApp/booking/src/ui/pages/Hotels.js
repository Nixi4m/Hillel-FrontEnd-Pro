// Компонент Hotels
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hotels() {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('./db.json');
        const { hotels } = response.data;
        setHotelList(hotels);
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
          <h3>{hotel.name}</h3>
          {/* Остальная информация о каждом отеле */}
        </div>
      ))}
    </div>
  );
}
