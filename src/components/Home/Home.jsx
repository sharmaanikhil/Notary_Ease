import React from 'react'

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">NotaryEase</h1>

      {/* Space for AI Affidavit Generator Image */}
      <div className="mt-8 text-center">
        {/* Replace 'placeholder.png' with actual image path */}
        <img src="/path/to/ai_affidavit_generator.png" alt="AI Affidavit Generator" className="w-full max-w-lg mx-auto" />
      </div>

      {/* Example Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Example Affidavits</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Replace 'placeholder_1.png' and 'placeholder_2.png' with actual images */}
          <img src="/path/to/placeholder_1.png" alt="Example Affidavit 1" className="w-full" />
          <img src="/path/to/placeholder_2.png" alt="Example Affidavit 2" className="w-full" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home
