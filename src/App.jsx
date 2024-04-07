import './App.css'
import React, { useState, useEffect } from 'react';
import LawyerPage from './components/lawyer/lawyerpage';
import UserPage from './components/user/userpage';
import axios from 'axios';

function App() {
  // State to determine if the user is a lawyer or not
  const [isLawyer, setIsLawyer] = useState(false);
  // State to store the list of lawyers fetched from the database
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    // Simulating axios request to fetch data from database
    axios.get('your-api-endpoint')
      .then(response => {
        const data = response.data;
        setLawyers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Simulating check with database if the user is a lawyer
    // In this example, we're assuming the user is not a lawyer
    setIsLawyer(false);
  }, []);

  // Function to simulate sending affidavit to selected lawyers
  const sendAffidavit = (selectedLawyers) => {
    // Code to generate PDF affidavit and send it to selected lawyers
    // You can implement this functionality using a third-party library or API
    // For example: using pdf-lib for generating PDFs
    // For simplicity, this function just logs the selected lawyers to console
    console.log('Selected lawyers:', selectedLawyers);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Conditionally rendering LawyerPage or UserPage based on isLawyer state */}
      {isLawyer ? <LawyerPage /> : <UserPage lawyers={lawyers} sendAffidavit={sendAffidavit} />}
    </div>
  );
}

export default App;

