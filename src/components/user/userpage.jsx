import React, { useState, useEffect } from 'react';

const UserPage = ({ lawyers, sendAffidavit }) => {
  const [selectedLawyers, setSelectedLawyers] = useState([]);

  const handleSelectLawyer = (lawyer) => {
    if (selectedLawyers.length < 5) {
      setSelectedLawyers([...selectedLawyers, lawyer]);
    } else {
      alert('You can select up to 5 lawyers.');
    }
  };

  const handleSendAffidavit = () => {
    sendAffidavit(selectedLawyers);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Select Lawyers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{lawyer.name}</h3>
            <p>Region: {lawyer.region}</p>
            <p>Age: {lawyer.age}</p>
            <button
              onClick={() => handleSelectLawyer(lawyer)}
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md"
            >
              Select
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleSendAffidavit}
        className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md"
      >
        Send Affidavit
      </button>
    </div>
  );
};

export default UserPage;