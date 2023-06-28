import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import TextField from './TextField';
import Select from './Select';
import Button from './Button';
import { hotelsAsyncActions } from '../../engine/core/hotels/saga/asyncActions';

export default function DestinationForm() {
  const destinationsItems = useSelector((state) => state.destinations.items);
  const destinationsLoading = useSelector((state) => state.destinations.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/destinations');
        const destinations = response.data;
        dispatch({ type: 'SET_DESTINATIONS', payload: destinations });
      } catch (error) {
        console.error('Error loading destinations:', error);
      }
    };

    fetchDestinations();
  }, [dispatch]);

  const onSubmit = (values) => {
    dispatch(hotelsAsyncActions.getHotelsAsync(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            background: '#fff',
            margin: '30px 0',
          }}
        >
          <Grid container>
            <Grid item xs={3}>
              <Field
                name="destination"
                label="Destination"
                component={Select}
                disabled={destinationsLoading}
                options={destinationsItems}
              />
            </Grid>
            <Grid item xs={1}>
              <Field name="adults" label="Adults" component={TextField} />
            </Grid>
            <Grid item xs={1}>
              <Button type="submit">SEND</Button>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
}
