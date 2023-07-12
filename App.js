import React, { useEffect, useState} for 'react';
import axios from 'axios';
const API_BASE_URL='http://20.244.56.144/train/register';
const TrainSchudle=()=>{
  const[train,setTrains]=useState([]);
  useEffect(()=>{
    const fetchTrains=async()=>{
     try{
      const response=await axios.get('${API_BASE_URL}/trains');
      setTrains(response.data);
     }catch(error){
      console.error('Error fetching train:',error);
     }
    };
    fetchTrains();
  },[]);
  return(
    <div>
      <h1>All trains</h1>
      {train.map((train)=> (
        <div key={train.id}>
          <h3>{train.name}</h3>
            <p>Price:{train.price}</p>
            <p>Seat Availabilty:{train,seatAvability}</p>
    </div>
      ))}
      <div>
  );
};




