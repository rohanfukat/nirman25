import React from 'react';

const PlanAFarmVisit = () => {
  return (
    <>
      <style>
        {`
          body {
            margin: 0; 
            padding: 0; 
            font-family: Arial, sans-serif;
            background-color: #0f172a; /* Dark Slate background */
            color: #cbd5e1; /* Slate-300 text color */
            display: flex;
            justify-content: center; /* Horizontally center */
            align-items: flex-start; /* Align to the top of the screen */
            min-height: 100vh; /* Full height of the viewport */
            flex-direction: column; /* Allow vertical stacking of content */
            width: 100%; /* Ensure body takes full width */
          }

          .container {
            background-color: #0f172a;
            padding: 0; /* Remove padding */
            width: 100vw;
            display: flex;
            justify-content: center; /* Horizontally center */
            align-items: center; /* Vertically center */
            min-height: calc(100vh - 60px); /* Account for navbar height */
            flex: 1; /* Ensure the container takes available space */
          }

          .card {
            background-color: #1e293b; /* Slate-800 card background */
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
            max-width: 600px; /* Max width */
            width: 100%; /* Allow full width inside the container */
            margin: 0 auto; /* Center horizontally */
          }

          .card:hover {
            box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.2); /* Subtle hover effect */
          }

          .content {
            display: flex;
            width: 100%;
            justify-content: center; /* Ensure content is centered */
          }

          .image-container {
            width: 30%;
          }

          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.5rem; /* Rounded corners for the image */
          }

          .info-container {
            flex: 1;
            padding: 1.5rem;
          }

          .label {
            color: #4ade80; /* Emerald-400 label color */
            font-weight: 600;
          }

          .value {
            color: #cbd5e1; /* Slate-300 value text color */
          }

          .button {
            background-color: #16a34a; /* Green-600 background */
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .button:hover {
            background-color: #15803d; /* Darker Green on hover */
          }

          .space-y-4 > * + * {
            margin-top: 1rem; /* Spacing between elements */
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 0.75rem; /* Matches Tailwind's "gap-3" */
          }

          .flex {
            display: flex;
          }

          .justify-center {
            justify-content: center;
          }

          .mb-6 {
            margin-bottom: 1.5rem; /* Matches Tailwind's "mb-6" */
          }
        `}
      </style>

      <div className="container">
        <div className="card">
          <div className="content">
            {/* Left side - Image */}
            <div className="image-container">
              <img
                src="/api/placeholder/200/300"
                alt="Farmer profile"
                className="image"
              />
            </div>

            {/* Right side - Information */}
            <div className="info-container">
              <div className="space-y-4 mb-6">
                <div className="grid">
                  <span className="label">Name:</span>
                  <span className="value">John Doe</span>

                  <span className="label">Village:</span>
                  <span className="value">Ratnagiri</span>

                  <span className="label">Location of farm:</span>
                  <span className="value">-</span>

                  <span className="label">Size of farm:</span>
                  <span className="value">-</span>

                  <span className="label">Crop Type:</span>
                  <span className="value">-</span>

                  <span className="label">Time Slot:</span>
                  <span className="value">-</span>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <button className="button">Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanAFarmVisit;
