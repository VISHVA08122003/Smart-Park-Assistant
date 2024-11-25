import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { db } from '../config/firebase';
import { collection, addDoc } from "firebase/firestore";
import FirebaseDD from './FirebaseDD';
import './B.css';
import { useNavigate } from 'react-router-dom';
const parkingLocations = [
  { id: 1, name: 'Parking 1', lat: 10.938330, lng: 76.854582, slots: 6 },
  { id: 2, name: 'Parking 2', lat: 10.938219, lng: 76.953659, slots: 7 },
  { id: 3, name: 'Parking 3', lat: 10.937381, lng: 76.955095, slots: 10 },
  { id: 4, name: 'Parking 4', lat: 10.958731, lng: 76.951359, slots: 8 },
  { id: 5, name: 'Parking 5', lat: 10.960222, lng: 76.972106, slots: 9 },
  { id: 6, name: 'Parking 6', lat: 11.087963, lng: 77.121773, slots: 12 },
  { id: 7, name: 'Parking 7', lat: 11.007802, lng: 77.053801, slots: 15 },
  { id: 8, name: 'Parking 8', lat: 11.039860, lng: 77.032246, slots: 17 },
  { id: 9, name: 'Parking 9', lat: 11.022909, lng: 76.969877, slots: 11 },
  { id: 10, name: 'Parking 10', lat: 11.014777, lng: 76.966422, slots: 11 },
  { id: 11, name: 'Parking 11', lat: 11.015782, lng: 76.967366, slots: 11 },
  { id: 12, name: 'Parking 12', lat: 11.008537, lng: 76.959545, slots: 11 },
  { id: 13, name: 'Parking 13', lat: 11.081595, lng: 77.134492, slots: 11 },
  { id: 14, name: 'Parking 14', lat: 11.082166, lng: 77.122646, slots: 11 },
  { id: 15, name: 'Parking 15', lat: 11.079369, lng: 77.116966, slots: 11 },
  { id: 16, name: 'Parking 16', lat: 11.096911, lng: 77.149968, slots: 11 },
  { id: 17, name: 'Parking 17', lat: 11.094754, lng: 77.151211, slots: 11 },
  { id: 18, name: 'Parking 18', lat: 11.095768, lng: 77.150066, slots: 11 },
  { id: 19, name: 'Parking 19', lat: 11.015782, lng: 76.967366, slots: 11 },
  { id: 20, name: 'Parking 20', lat: 11.015782, lng: 76.967366, slots: 11 },

  // Add more parking locations as needed
];

const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png";

const B = () => {
  const navigate=useNavigate("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [data, setData] = useState();
  const ParkingRef = collection(db, "points");
  function handleFaf(){
    navigate('/Payment');
  }
  const handleClick = async () => {
    const newPointDocRef = await addDoc(ParkingRef, data);
    console.log("Document written with ID: ", newPointDocRef.id);
  }

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getCurrentPosition();
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      } catch (error) {
        console.error('Error getting user location:', error.message);
      }
    };

    fetchLocation();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const mapStyles = {
    height: '750px',
    width: '100%',
  };

  const defaultCenter = { lat: 11.016010, lng: 76.970310 };

  const handleMarkerDragEnd = (event) => {
    setCurrentLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleMarkerClick = (location) => () => {
    setSelectedMarker(location);
    setData(location);
    if (data) {
      handleClick();
    }
  };

  const closeInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyA81Wf8qsUo15askpJx57SaKU1KWKjlp7o">
        {window.google ? (
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={currentLocation || defaultCenter}
          >
            {currentLocation && (
              <Marker
                position={currentLocation}
                draggable={true}
                onDragEnd={handleMarkerDragEnd}
                onClick={handleMarkerClick(currentLocation)}
              />
            )}
            {parkingLocations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                icon={iconBase}
                options={{ title: location.name }}
                onClick={handleMarkerClick(location)}
              />
            ))}
            {selectedMarker && (
              <InfoWindow
                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                onCloseClick={closeInfoWindow}
              >
                <div>
                  {/* Display any additional information related to the clicked marker here */}
                  <p>Name: {selectedMarker.name}</p>
                  <p>Latitude: {selectedMarker.lat}</p>
                  <p>Longitude: {selectedMarker.lng}</p>
                  <p>Available slots:{selectedMarker.slots}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : null}
      </LoadScript>

      <FirebaseDD />

      {data ? (
        <div style={{
          backgroundColor: 'hsl(211, 17%, 79%)', // White background
          color: '#333333', // Dark text for readability
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
          textAlign: 'left', // Align text to the left
          maxWidth: '400px', // Maximum width
          margin: '20px auto', // Center the div
          fontFamily: '"Arial", sans-serif', // Font family
          lineHeight: '1.6' // Line spacing
      }}>
          <h1 style={{ marginBottom: '10px' }}>Marked Place</h1>
          <h2 style={{ fontSize: '18px', margin: '10px 0' }}>Name: {data.name}</h2>
          <h2 style={{ fontSize: '18px', margin: '10px 0' }}>Latitude: {data.lat}</h2>
          <h2 style={{ fontSize: '18px', margin: '10px 0' }}>Longitude: {data.lng}</h2>
          <h2 style={{ fontSize: '18px', margin: '10px 0' }}>Available slots: {data.slots}</h2>
          <button onClick={handleFaf}>Payment</button>
      </div>
      
      ) : null}
    </div>
  );
};

export default B;