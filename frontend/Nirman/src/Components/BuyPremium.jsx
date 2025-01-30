import React from "react";
import { Link } from "react-router-dom";

const BuyPremium = () => {
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
            font-family: Arial, sans-serif;
            background-color: #1e293b; /* Slate-900 */
            overflow-x: hidden;
          }

          .page-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            background-color: #0f172a; /* Darker contrast */
            padding: 24px;
            box-sizing: border-box;
            background-image: url('/bg.jpg');
            background-size: cover;
            background-position: center;
          }

          .content {
            text-align: center;
            padding: 24px;
            background-color: #1e293b; /* Slate-800 */
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            width: 100%;
            max-width: 600px;
          }

          .heading {
            font-size: 2rem;
            font-weight: bold;
            color: #facc15; /* Amber-400 */
            margin-bottom: 16px;
          }

          .description {
            font-size: 1rem;
            color: #cbd5e1; /* Slate-300 */
            line-height: 1.5;
            margin-bottom: 24px;
          }

          .benefits-list {
            text-align: left;
            margin-bottom: 24px;
          }

          .benefits-list li {
            font-size: 1rem;
            color: #4ade80; /* Emerald-300 */
            margin-bottom: 8px;
          }

          .price {
            font-size: 1.5rem;
            font-weight: bold;
            color: #facc15; /* Amber-400 */
            margin-bottom: 16px;
          }

          .buy-button {
            background-color: #4ade80; /* Emerald-400 */
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s ease-in-out;
          }

          .buy-button:hover {
            background-color: #38b2ac; /* Emerald-500 */
            transform: scale(1.05);
          }

          .buy-button:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(72, 219, 141, 0.6); /* Emerald focus */
          }
        `}
      </style>
      <div className="page-container">
        <div className="content">
          <h2 className="heading">Unlock Premium Features</h2>
          <p className="description">
            Upgrade to our premium service for advanced crop recommendations,
            tailored to your unique conditions, and get financial assurance with
            our insurance-backed predictions.
          </p>
          <ul className="benefits-list">
            <li>Highly accurate crop predictions based on advanced data models</li>
            <li>Tailored solutions for your specific land area and weather</li>
            <li>Insurance coverage for potential losses</li>
            <li>Priority support for your queries</li>
          </ul>
          <div className="price">Only ₹399/month</div>
          <button className="buy-button"><Link to='/premium-purchase'>Buy Premium</Link></button>
        </div>
      </div>
    </>
  );
};

export default BuyPremium;
