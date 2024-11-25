// import { addDoc, collection } from 'firebase/firestore';
// import React, { useState } from 'react'
// import { db } from '../config/firebase';
// import './SignUp.css';

// function SignUp() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const user = { firstName, lastName, username, password };
//     await addDoc(collection(db, "signup"), user);
//     setFirstName('');
//     setLastName('');
//     setUsername('');
//     setPassword('');
//   }
//   return (
//     <div className="login-container">
//       <h1 className="login-header">Login</h1>
//       <form className="login-form" onSubmit={onSubmit}>
//         <label className="login-label">First Name :</label>
//         <input
//           type="text"
//           id="firstName"
//           className="login-input"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         /><br></br>
//         <label className="login-label">Last Name :</label>
//         <input
//           type="text"
//           id="lastName"
//           className="login-input"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         /><br></br>
//         <label className="login-label">Username :</label>
//         <input
//           type="text"
//           id="username"
//           className="login-input"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         /><br></br>
//         <label className="login-label">Password :</label>
//         <input
//           type="text"
//           id="password"
//           className="login-input"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /><br></br>
//         <button type="submit" className="login-button">Click</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../config/firebase';
import './SignUp.css';

function User() {
  const [latitude, setLatitude] = useState('');
  const [longitude , setLongitude ] = useState('');

  const isUserRegistered = async (latitude) => {
    const q = query(collection(db, "customer slot"), where("latitude", "==", latitude));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is already registered
    const userExists = await isUserRegistered(latitude);
    if (userExists) {
      alert("The details are already registered.");
      return;
    }

    // If user does not exist, add to the database
    const user = { latitude, longitude };
    await addDoc(collection(db, "customer slot"),);
    setLatitude('');
    setLongitude ('');
  }

  return (
    <div className="login-container">
      <h1 className="login-header"></h1>
      <form className="login-form" onSubmit={onSubmit}>
              <label className="login-label">Latitude :</label>
              <input
                type="text"
                id="latitude"
                className="login-input"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              /><br></br>
              <label className="login-label">Longitude :</label>
              <input
                type="text"
                id="longitude "
                className="login-input"
                value={longitude}
                onChange={(e) => setLongitude (e.target.value)}
                required
              /><br></br>
        <button type="submit" className="login-button">Enter Value</button>
      </form>
    </div>
  );
}

export default User;
