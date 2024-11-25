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

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isUserRegistered = async (username) => {
    const q = query(collection(db, "signup"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is already registered
    const userExists = await isUserRegistered(username);
    if (userExists) {
      alert("The details are already registered.");
      return;
    }

    // If user does not exist, add to the database
    const user = { firstName, lastName, username, password };
    await addDoc(collection(db, "signup"), user);

    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
  }

  return (
    <div className="login-container">
      <h1 className="login-header">Sign Up</h1>
      <form className="login-form" onSubmit={onSubmit}>
      <label className="login-label">First Name :</label>
              <input
                type="text"
                id="firstName"
                className="login-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              /><br></br>
              <label className="login-label">Last Name :</label>
              <input
                type="text"
                id="lastName"
                className="login-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              /><br></br>
              <label className="login-label">Username :</label>
              <input
                type="text"
                id="username"
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              /><br></br>
              <label className="login-label">Password :</label>
              <input
                type="text"
                id="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /><br></br>
        <button type="submit" className="login-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
