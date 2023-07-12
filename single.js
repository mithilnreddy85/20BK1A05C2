import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'https://api.johndoerailways.com'; // Replace with the actual API base URL

const SingleTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/trains/${trainId}`);
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching train:', error);
      }
    };

    fetchTrain();
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Train Details</h1>
      <h3>{train.name}</h3>
      <p>Price: {train.price}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      {/* Add more train details as needed */}
    </div>
  );
};

export default SingleTrain;