import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PCreateOrganicFertilizers = () => {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #1e293b; /* Slate-900 equivalent */
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }

          .page-container {
            display: flex;
            flex-direction: column;
            width: 100vw;
            min-height: 100vh;
            background-color: #1e293b; /* Slate-900 equivalent */
            padding: 24px;
            box-sizing: border-box;
          }

          .header {
            background-color: #052e16; /* Green-950 equivalent */
            padding: 16px;
            border-radius: 12px;
            color: #f0fdf4; /* Green-50 equivalent */
            margin-bottom: 24px;
          }

          .back-button {
            display: flex;
            align-items: center;
            color: #bbf7d0; /* Green-200 equivalent */
            background: none;
            border: none;
            cursor: pointer;
            margin-bottom: 16px;
            transition: color 0.3s ease;
          }

          .back-button:hover {
            color: #86efac; /* Green-300 equivalent */
          }

          .back-icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
          }

          .header-title {
            font-size: 1.875rem;
            font-weight: bold;
            margin-bottom: 8px;
          }

          .header-subtitle {
            color: #bbf7d0; /* Green-200 equivalent */
          }

          .content {
            background-color: #0f172a; /* Darker background for contrast */
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .video-container {
            position: relative;
            width: 100%;
            max-width: 768px;
            aspect-ratio: 16/9;
            margin: 0 auto 24px;
            border-radius: 12px;
            overflow: hidden;
          }

          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .paragraph {
            color: #e2e8f0; /* Slate-200 equivalent */
            font-size: 1.125rem;
            line-height: 1.75;
            margin-bottom: 24px;
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 24px;
          }

          @media (min-width: 768px) {
            .grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .card {
            background-color: #1e293b; /* Slate-800 equivalent */
            padding: 24px;
            border-radius: 12px;
            transition: box-shadow 0.3s;
          }

          .card:hover {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #4ade80; /* Green-400 equivalent */
            margin-bottom: 16px;
          }

          .list {
            color: #e2e8f0; /* Slate-200 equivalent */
          }

          .list-item {
            margin-bottom: 8px;
          }
        `}
      </style>

      <div className="page-container">
        <header className="header">
          <h1 className="header-title">Create Organic Fertilizers</h1>
          <p className="header-subtitle">
            Learn how to make natural fertilizers from household waste
          </p>
        </header>

        <main className="content">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/mDIVpJgjoXQ"
              title="How to Make Organic Fertilizer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="paragraph">
            The easiest and best homemade fertilizer for plants is the one that
            works for your garden and schedule. Tomatoes may benefit from a
            sprinkle of coffee grounds whereas a fussy orchid may require a
            more customized solution. Choose a recipe that is easy for you to
            replicate and use on a regular basis.
          </p>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Getting Started</h3>
              <ul className="list">
                <li className="list-item"> Collect kitchen scraps</li>
                <li className="list-item"> Start a compost bin</li>
                <li className="list-item"> Learn about soil pH</li>
                <li className="list-item"> Understand plant needs</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Common Ingredients</h3>
              <ul className="list">
                <li className="list-item"> Coffee grounds</li>
                <li className="list-item"> Eggshells</li>
                <li className="list-item"> Banana peels</li>
                <li className="list-item"> Green waste</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PCreateOrganicFertilizers;
