// import React, { useEffect, useState } from 'react';
// import { db } from '../config/firebase';
// import { Marker, InfoWindow } from '@react-google-maps/api';
// import { collection, addDoc, getDocs } from 'firebase/firestore';

// const MapBox = () => {
//   const [location, setLocation] = useState({
//     lat: 11.38,
//     lng: 10.37
//   });
//   const [center, setCenter] = useState({
//     lat: 11.38949,
//     lng: 10.37628
//   });
//   const [data, setData] = useState({
//     lat: null,
//     lng: null,
//     Tslots: null,
//     Aslots: null,
//     Type: null,
//   });

//   const [selectedMarker, setSelectedMarker] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, 'ParkingSlots'), {
//         latitude: data.lat,
//         longitude: data.lng,
//         Tslots: data.Tslots,
//         Aslots: data.Aslots,
//         type: data.Type
//       });
//       console.log("Success");
//     } catch (err) {
//       alert(err);
//     }
//   };

// //   const handleClick = (event) => {
// //     setCenter({
// //       lat: event.latLng.lat(),
// //       lng: event.latLng.lng(),
// //     });
// //   };
// const handleClick = (event) => {
//     const clickedLocation = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setCenter(clickedLocation);
//     setData(clickedLocation);
//   };

//   const handleMarkerClick = (markerData) => {
//     setSelectedMarker(markerData);
//     setData(markerData);
//   };

//   useEffect(() => {
//     const loadGoogleMaps = async () => {
//       if (!window.google) {
//         const script = document.createElement('script');
//         script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA81Wf8qsUo15askpJx57SaKU1KWKjlp7o&v=weekly"; // Replace with your API key
//         script.async = true;
//         script.onload = () => {
//           initMap();
//         };
//         document.head.appendChild(script);
//       } else {
//         initMap();
//       }
//     };

//     loadGoogleMaps();
//   }, [center]);

//   const initMap = async () => {
//     const google = window.google;
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: center,
//       zoom: 14,
//       mapId: "4504f8b37365c3d0",
//     });

//     const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
//     const marker = new google.maps.Marker({
//       position: center,
//       map: map,
//       draggable: true,
//       icon: iconBase + 'parking_lot_maps.png'
//     });

//     google.maps.event.addListener(marker, 'dragend', handleClick);
//     google.maps.event.addListener(map, 'click', handleClick);

//     // Example parking locations
//     const parkingLocations = [
//       { id: 1, name: 'Parking 1', lat: 11.380, lng: 10.370, Tslots: 6, Aslots: 4, Type: 'Public' },
//       // Add more parking locations as needed
//     ];

//     parkingLocations.forEach((location) => {
//       const marker = new google.maps.Marker({
//         position: { lat: location.lat, lng: location.lng },
//         map: map,
//         icon: iconBase + 'parking_lot_maps.png',
//       });

//       marker.addListener('click', () => {
//         handleMarkerClick(location);
//       });
//     });
//   };

//   return (
//     <div>
//       <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <input name='lat' value={data.lat || ''} onChange={handleChange} placeholder='Latitude' required></input>
//         <input name='lng' value={data.lng || ''} onChange={handleChange} placeholder='Longitude' required></input>
//         <input name='Tslots' value={data.Tslots || ''} onChange={handleChange} placeholder='Total Slots' required></input>
//         <input name='Aslots' value={data.Aslots || ''} onChange={handleChange} placeholder='Available Slots' required></input>
//         <select name='Type' value={data.Type || ''} onChange={handleChange} required>
//           <option value="Public">Public</option>
//           <option value="Private">Private</option>
//         </select>
//         <button type="submit">Click</button>
//       </form>
//       <button onClick={() => setData(null)}>Get</button>

//       {selectedMarker && (
//         <div>
//           <h1>Marker Clicked!</h1>
//           <p>Name: {selectedMarker.name}</p>
//           <p>Latitude: {selectedMarker.lat}</p>
//           <p>Longitude: {selectedMarker.lng}</p>
//           <p>Available slots: {selectedMarker.Aslots}</p>
//           <p>Total slots: {selectedMarker.Tslots}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MapBox;
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const MapBox = () => {
    const navigate = useNavigate("");
    function handleKar(){
        navigate('/Payment');
    }
  const [location, setLocation] = useState({
    lat: 11.38,
    lng: 10.37
  });
  const [center, setCenter] = useState({
    lat: 11.38949,
    lng: 10.37628
  });
  const [data, setData] = useState({
    username: null,
    address: null,
    lat: null,
    lng: null,
    Tslots: null,
    Aslots: null,
    Type: null,
    size: null
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'ParkingSlots'), {
        username: data.username,
        address: data.address,
        latitude: data.lat,
        longitude: data.lng,
        Tslots: data.Tslots,
        Aslots: data.Aslots,
        type: data.Type,
        size: data.size
      });
      console.log("Success");
    } catch (err) {
      alert(err);
    }
  };

//   const handleClick = (event) => {
//     setCenter({
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     });
//   };
const handleClick = (event) => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setCenter(clickedLocation);
    setData(clickedLocation);
  };

  const handleMarkerClick = (markerData) => {
    setSelectedMarker(markerData);
    setData(markerData);
  };

  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA81Wf8qsUo15askpJx57SaKU1KWKjlp7o&v=weekly"; // Replace with your API key
        script.async = true;
        script.onload = () => {
          initMap();
        };
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    loadGoogleMaps();
  }, [center]);

  const initMap = async () => {
    const google = window.google;
    const map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 14,
      mapId: "4504f8b37365c3d0",
    });

    const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const marker = new google.maps.Marker({
      position: center,
      map: map,
      draggable: true,
      icon: iconBase + 'parking_lot_maps.png'
    });

    google.maps.event.addListener(marker, 'dragend', handleClick);
    google.maps.event.addListener(map, 'click', handleClick);

    // Example parking locations
    const parkingLocations = [
      { id: 1, name: 'Parking 1', lat: 11.380, lng: 10.370, Tslots: 6, Aslots: 4, Type: 'Public' },
      // Add more parking locations as needed
    ];

    parkingLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        icon: iconBase + 'parking_lot_maps.png',
      });

      marker.addListener('click', () => {
        handleMarkerClick(location);
      });
    });
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
    padding: '20px',
    margin: 0,
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: 'gradientBG 15s ease infinite',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'absolute', // Ensure it covers the entire screen
    top: 0,
    left: 0,
    overflow: 'auto', // Adds scroll to the content if it overflows the viewport
  };
  
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  };
  
  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '200px',
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  };
  
  const detailsStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
  };
  
  return (
    <div style={containerStyle}>
      <h1>Location Details</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
      <input style={inputStyle} name='username' value={data.username || ''} onChange={handleChange} placeholder='Username' required />
      <input style={inputStyle} name='address' value={data.address || ''} onChange={handleChange} placeholder='Address' required />
        <input style={inputStyle} name='lat' value={data.lat || ''} onChange={handleChange} placeholder='Latitude' required />
        <input style={inputStyle} name='lng' value={data.lng || ''} onChange={handleChange} placeholder='Longitude' required />
        <input style={inputStyle} name='Tslots' value={data.Tslots || ''} onChange={handleChange} placeholder='Total Slots' required />
        <input style={inputStyle} name='Aslots' value={data.Aslots || ''} onChange={handleChange} placeholder='Available Slots' required />
        <select style={inputStyle} name='Type' value={data.Type || ''} onChange={handleChange} required>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
        <select style={inputStyle} name='size' value={data.size || ''} onChange={handleChange} placeholder='Car size' required>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
        <button style={buttonStyle} type="submit" onClick={handleKar}>Submit</button>
      </form>
      {selectedMarker && (
        <div style={detailsStyle}>
          <h1>Marker Clicked!</h1>
          <p>Name: {selectedMarker.name}</p>
          <p>Latitude: {selectedMarker.lat}</p>
          <p>Longitude: {selectedMarker.lng}</p>
          <p>Available slots: {selectedMarker.Aslots}</p>
          <p>Total slots: {selectedMarker.Tslots}</p>
        </div>
      )}
    </div>
  );
  
      }
 export default MapBox;