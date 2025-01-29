import React from 'react';
import { Square, Home, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessYourLand = () => {
  const locations = [
    {
      title: "Balcony",
      area: "6 x 4 ft",
      squareFeet: "24 sq ft",
      icon: Square,
      description: "Perfect for container gardens and vertical growing systems",
      route: "balcony-crop-recommendation",
    },
    {
      title: "Rooftop",
      area: "12 x 8 ft",
      squareFeet: "96 sq ft",
      icon: Building,
      description: "Ideal for mixed container gardens and small raised beds",
      route: "rooftop-crop-recommendation",
    },
    {
      title: "Veranda",
      area: "20 x 15 ft",
      squareFeet: "300 sq ft",
      icon: Home,
      description: "Suitable for extensive garden beds and greenhouse setups",
      route: "veranda-crop-recommendation",
    },
  ];

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
            background-color: #1e293b; /* Slate-900 */
            overflow-x: hidden;
          }

          .page-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            background-color: #1e293b; /* Slate-900 */
            padding: 24px;
            box-sizing: border-box;
          }

          .content {
            width: 100%;
            max-width: 1200px;
            padding: 24px;
            background-color: #0f172a; /* Darker contrast */
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .heading {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 24px;
            text-align: center;
            color: #4ade80; /* Emerald-300 */
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          @media (min-width: 768px) {
            .grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .card {
            border-radius: 12px;
            border: 1px solid #334155; /* Slate-700 */
            background-color: #1e293b; /* Slate-800 */
            padding: 24px;
            transition: box-shadow 0.3s;
          }

          .card:hover {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .icon-container {
            display: flex;
            justify-content: center;
            margin-bottom: 16px;
          }

          .icon {
            width: 48px;
            height: 48px;
            color: #4ade80; /* Emerald-400 */
          }

          .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #86efac; /* Emerald-200 */
            margin-bottom: 16px;
            text-align: center;
          }

          .details {
            text-align: center;
          }

          .details-area {
            font-size: 1.125rem;
            font-weight: 600;
            color: #4ade80; /* Emerald-300 */
          }

          .details-square-feet {
            font-size: 0.875rem;
            color: #94a3b8; /* Slate-400 */
          }

          .description {
            margin-top: 16px;
            color: #cbd5e1; /* Slate-300 */
          }

          .card button {
            background-color: #4ade80; /* Emerald-400 */
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s ease-in-out;
            margin-top: 16px;
            width: 100%;
          }

          .card button:hover {
            background-color: #38b2ac; /* Emerald-500 */
            transform: scale(1.05);
          }

          .card button:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(72, 219, 141, 0.6); /* Emerald focus */
          }

          .premium-button-container {
            text-align: center;
            margin-top: 24px;
          }

          .premium-button {
            background-color: #facc15; /* Amber-400 */
            color: black;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s ease-in-out;
          }

          .premium-button:hover {
            background-color: #eab308; /* Amber-500 */
            transform: scale(1.05);
          }
        `}
      </style>
      <div className="page-container">
        <div className="content">
          <h2 className="heading">Choose Your Growing Space</h2>
          <div className="grid">
            {locations.map((location) => {
              const IconComponent = location.icon;
              return (
                <div key={location.title} className="card">
                  <div className="icon-container">
                    <IconComponent className="icon" />
                  </div>
                  <h3 className="card-title">{location.title}</h3>
                  <div className="details">
                    <div className="details-area">{location.area}</div>
                    <div className="details-square-feet">{location.squareFeet}</div>
                    <p className="description">{location.description}</p>
                  </div>
                  <Link to={location.route}>
                  <button>
                    Choose
                  </button>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="premium-button-container">
            <button className="premium-button">
                <Link to="/buy-premium">Need more accurate solutions with returns if failed?</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessYourLand;
