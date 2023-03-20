import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app, database } from "../firebaseConfig";
import "../styles/allcustomers.css";

const Transactions = () => {
  const data = collection(database, "transactions");

  const [done, setDone] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const res = await getDocs(data);
        const done = res.docs.map((item) => {
          return { ...item.data() };
        });
        setDone(done);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    getCustomers();
  }, []);

  return (
    <>
      <div></div>

      <table className="customers_table">
        <tr className="headings">
          <th>Serial number</th>
          <th>From</th>
          <th>To</th>
          <th>Amount transfered</th>
          <th>Status</th>
        </tr>
        {done.map((item, i) => {
          return (
            <tr key={i} className="values">
              <td>{i + 1}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.Amount_transfered}</td>
              <td>{item.Status ? "true" : "false"}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Transactions;
