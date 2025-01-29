import React, { useEffect, useState } from "react";

const PPlanAFarmVisit = () => {
  const [farmers, setFarmers] = useState([]); // Initial state is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/all-farm-visit"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        
        // Check if data is an array before updating the state
        if (Array.isArray(data)) {
          setFarmers(data);
        } else {
          throw new Error("Data is not an array");
        }

        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message); // Set error message if there was an error
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #0f172a;
            color: #cbd5e1;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            flex-direction: column;
          }

          .container {
            background-color: #0f172a;
            padding: 24px;
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr; /* Single column layout */
            gap: 16px;
            justify-content: center;
            align-items: center;
          }

          .card {
            background-color: #1e293b;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            width:90vw
          }

          .card:hover {
            box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.2);
          }

          .content {
            display: flex;
            justify-content: center;
          }

          .image-container {
            width: 30%;
          }

          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.5rem;
          }

          .info-container {
            flex: 1;
            padding: 1.5rem;
          }

          .label {
            color: #4ade80;
            font-weight: 600;
          }

          .value {
            color: #cbd5e1;
          }

          .button {
            background-color: #16a34a;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .button:hover {
            background-color: #15803d;
          }

          .space-y-4 > * + * {
            margin-top: 1rem;
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 0.75rem;
          }

          .flex {
            display: flex;
          }

          .justify-center {
            justify-content: center;
          }

          .mb-6 {
            margin-bottom: 1.5rem;
          }
        `}
      </style>

      <div className="container">
        {farmers.map((farmer) => (
          <div key={farmer._id} className="card">
            <div className="content">
              {/* Left side - Image */}
              <div className="image-container">
                <img
                  src={farmer.url}
                  alt="Farmer profile"
                  className="image"
                  style={{ width: "400px", height: "400px" }}

                />
              </div>

              {/* Right side - Information */}
              <div className="info-container">
                <div className="space-y-4 mb-6">
                  <div className="grid">
                    <span className="label">Name:</span>
                    <span className="value">{farmer.name}</span>

                    <span className="label">Village:</span>
                    <span className="value">{farmer.village}</span>

                    <span className="label">Location of farm:</span>
                    <span className="value">{farmer.location}</span>

                    <span className="label">Size of farm:</span>
                    <span className="value">{farmer.acres}</span>

                    <span className="label">Crop Type:</span>
                    <span className="value">{farmer.crop}</span>

                    <span className="label">Time Slot:</span>
                    <span className="value">{farmer.time_slot}</span>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-start">
                  <button className="button">Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PPlanAFarmVisit;
