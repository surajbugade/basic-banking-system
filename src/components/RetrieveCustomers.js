import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { app, database } from '../firebaseConfig';

const RetrieveCustomers = () => {

    const data = collection(database, 'customers');

    const [done, setDone] = useState([])
  
    useEffect(() => {
      const getCustomers = async () => {
        try {
          const res = await getDocs(data);
          const done = res.docs.map((item) => {
            return { ...item.data() };
          });
          setDone(done);
        } catch (err) {
          console.log(err);
        }
      };
  
      // getCustomers();
    }, []);

}

export default RetrieveCustomers