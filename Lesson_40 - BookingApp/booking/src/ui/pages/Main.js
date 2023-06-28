// Core
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DestinationForm from '../components/DestinationForm';
import { destinationsAsyncActions } from '../../engine/core/destinations/saga/asyncActions';

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsAsyncActions.getDestinationsAsync());
  }, []);
  return (
    <Box>
      <DestinationForm />
    </Box>
  );
}
