// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
      <header className="w-full text-center py-8">
        <h1 className="text-6xl font-bold mb-4">Welcome to LifeSource Manager</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Empowering communities to transform waste into resources and promote sustainable urban development.
          Join us in achieving <span className="font-semibold">UN SDG 11</span> — Sustainable Cities and Communities.
        </p>
      </header>
      <section className="flex flex-col items-center space-y-8">
        <div className="max-w-4xl text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-600">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            LifeSource Manager is committed to fostering sustainable practices by encouraging proper waste
            management and incentivizing recycling through innovative technology and community-driven efforts.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/add-points"
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-green-100 transition"
          >
            Add Points
          </Link>
          <Link
            to="/redeem"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition"
          >
            Redeem Points
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

// AddPoints.jsx
import React, { useState } from 'react';

const AddPoints = ({ onAddPoints }) => {
  const [weight, setWeight] = useState('');

  const handleAddPoints = () => {
    if (!weight || isNaN(weight) || weight <= 0) {
      alert('Please enter a valid weight.');
      return;
    }
    onAddPoints(weight);
    setWeight('');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-6">Add Points</h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in grams"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
        />
        <button
          onClick={handleAddPoints}
          className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPoints;

// RedeemPoints.jsx
import React, { useState } from 'react';

const RedeemPoints = ({ onRedeem }) => {
  const [points, setPoints] = useState('');

  const handleRedeem = () => {
    if (!points || isNaN(points) || points <= 0) {
      alert('Please enter a valid point amount.');
      return;
    }
    onRedeem(points);
    setPoints('');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-6">Redeem Points</h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          placeholder="Enter points to redeem"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
        />
        <button
          onClick={handleRedeem}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Redeem
        </button>
      </div>
    </div>
  );
};

export default RedeemPoints;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddPoints from './AddPoints';
import RedeemPoints from './RedeemPoints';

const App = () => {
  const handleAddPoints = (weight) => {
    console.log(`Adding points for weight: ${weight}`);
    // Add blockchain interaction logic here
  };

  const handleRedeem = (points) => {
    console.log(`Redeeming points: ${points}`);
    // Add blockchain interaction logic here
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-points" element={<AddPoints onAddPoints={handleAddPoints} />} />
        <Route path="/redeem" element={<RedeemPoints onRedeem={handleRedeem} />} />
      </Routes>
    </Router>
  );
};

export default App;
