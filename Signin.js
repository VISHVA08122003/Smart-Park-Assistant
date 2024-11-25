// import { addDoc, collection } from 'firebase/firestore';
// import React, { useState } from 'react'
// import { db } from '../config/firebase';
// import './Login.css';
// function Login() {
//     const[username,setUsername]=useState('');
//     const[password,setPassword]=useState('');
//     const onSubmit =async (e) =>{
//         e.preventDefault();
//         const user = {username,password}
//         await addDoc(collection(db,"users"),user);
//         setUsername('');
//         setPassword('');
//     }
//   return (
//     <div className="login-container">
//   <h1 className="login-header">Login</h1>
//   <form className="login-form" onSubmit={onSubmit}>
//     <label className="login-label">Username :</label>
//     <input
//       type="text"
//       id="username"
//       className="login-input"
//       value={username}
//       onChange={(e) => setUsername(e.target.value)}
//       required
//     /><br></br>
//     <label className="login-label">Password :</label>
//     <input
//       type="text"
//       id="password"
//       className="login-input"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       required
//     /><br></br>
//     <button type="submit" className="login-button">Click</button>
//   </form>
// </div>
//   )
// }
// export default Login;
import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkUser = async () => {
    const q = query(collection(db, "users"), where("username", "==", username), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const userExists = await checkUser();

    if (userExists) {
      // Navigate to Home Page
      navigate('/');
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form className="login-form" onSubmit={onSubmit}>
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
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
