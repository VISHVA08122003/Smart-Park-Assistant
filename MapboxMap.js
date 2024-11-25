// MapboxMap.js
import './MapboxMap.css';
import { parkingLocations } from './ParkingData';
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
// ... (previous code)
import 'mapbox-gl/dist/mapbox-gl.css';
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%', // Adjust the width as needed
  height: '600px', // Adjust the height as needed
  margin: '20px auto',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #6e8efb, #a777e3)' // Example gradient background
};

const Mapbox = () => {
    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: 37.7749, // Default to San Francisco's latitude
      longitude: -122.4194, // Default to San Francisco's longitude
      zoom: 12,
    });
  
    const [userLocation, setUserLocation] = useState(null);
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting user location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }, []); // Run once on component mount

const findNearestParkingLocation = () => {
  if (!userLocation) return null;

  let nearestLocation = null;
  let minDistance = Number.MAX_VALUE;

  parkingLocations.forEach((location) => {
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      location.latitude,
      location.longitude
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearestLocation = location;
    }
  });

  return nearestLocation;
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // Haversine formula for calculating distances on Earth
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const toRadians = (degree) => {
  return (degree * Math.PI) / 180;
};



  const nearestParkingLocation = findNearestParkingLocation();

  return (
    <div style={containerStyle}>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1Ijoibml0aXNoa3VtYXIyMDAzIiwiYSI6ImNqMWh2am8zODAwcHEyd29hOWY5cnptcncifQ.cWtIQbvusFVG51JIniU8rw "
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      {userLocation && (
        <Marker
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}
          offsetTop={-20}
          offsetLeft={-10}
        >
          <div>Your Location</div>
        </Marker>
      )}

      {nearestParkingLocation && (
        <Marker
          latitude={nearestParkingLocation.latitude}
          longitude={nearestParkingLocation.longitude}
          offsetTop={-20}
          offsetLeft={-10}
        >
          <div>Nearest Parking</div>
        </Marker>
      )}
    </ReactMapGL>
    </div>
  );
};

export default Mapbox;