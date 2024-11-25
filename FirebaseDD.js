import React from 'react';
import {db} from '../config/firebase';
import {collection, addDoc,} from 'firebase/firestore'

export default function FirebaseDD() {

  const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, 'parking'), {
            name: "parking2",
            location : {
                latitude : 10.938219,
                longitude: 76.953659,
            },
            Tslots : 7,
            Aslots : 0            
          })
        } catch (err) {
          alert(err)
        }
  }
  return (
    <button onClick={handleSubmit}>click</button>
  )
}