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

  const validate = (values) => {
    const errors = {};
    if (!values.destination) {
      errors.destination = 'Required';
    }
    if (!values.adults) {
      errors.adults = 'Required';
    } else if (!/^\d+$/.test(values.adults)) {
      errors.adults = 'Must be a number';
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
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
          <Grid container spacing={2} alignItems="top">
            <Grid item xs={3}>
              <Box sx={{ height: 72 }}>
                <Field
                  name="destination"
                  label="Destination"
                  component={Select}
                  disabled={destinationsLoading}
                  options={destinationsItems}
                />
              </Box>
              <Box sx={{ height: 20 }}>
                <Field
                  name="destination"
                  subscription={{ error: true, touched: true }}
                  render={({ meta: { touched, error } }) => (
                    <div>
                      {touched && error && (
                        <span style={{ color: 'red' }}>{error}</span>
                      )}
                    </div>
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={1} sx={{ paddingTop: '15px' }}>
              <Field
                name="adults"
                label="Adults"
                component={TextField}
              />
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
