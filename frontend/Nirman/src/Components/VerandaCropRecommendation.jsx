import React, { useState } from 'react';

const VerandaCropRecommender = () => {
  const [weather, setWeather] = useState('');
  const [purpose, setPurpose] = useState('');

  const styles = {
    container: {
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      width:'100vw',
      backgroundImage: "url('/bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    formContainer: {
      backgroundColor: '#1e293b',
      padding: '2rem',
      borderRadius: '0.5rem',
      width: '100%',
      maxWidth: '32rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    title: {
      color: '#f0fdf4',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '2rem',
    },
    label: {
      display: 'block',
      color: '#4ade80',
      marginBottom: '0.75rem',
      fontSize: '1rem',
      fontWeight: '500',
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '0.375rem',
      color: '#f0fdf4',
      fontSize: '1rem',
      outline: 'none',
      cursor: 'pointer',
    },
    recommendation: {
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#064e3b',
      borderRadius: '0.5rem',
      color: '#f0fdf4',
      fontSize: '1rem',
      lineHeight: '1.5',
    }
  };

  const getCropRecommendation = () => {
    if (!weather || !purpose) return null;

    if (purpose === 'Selling in the market') {
      switch (weather) {
        case 'Sunny':
          return 'The crops best for this would be: Watermelons, corn, and pumpkin';
        case 'Humid':
          return 'The crops best for this would be: Papayas, coconuts and pineapples';
        case 'Rainy':
          return 'The crops best for this would be: Rice';
        case 'Cool':
          return 'The crops best for this would be: Apples and Winter Wheat';
        default:
          return null;
      }
    } else if (purpose === 'Consuming yourself') {
      switch (weather) {
        case 'Sunny':
          return 'The crops best for this would be: Tomatoes, Peppers, and Cucumbers';
        case 'Humid':
          return 'The crops best for this would be: Bananas and Taro';
        case 'Rainy':
          return 'The crops best for this would be: Sweet corn and Mushrooms';
        case 'Cool':
          return 'The crops best for this would be: Carrots, parsnips, and radishes';
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Crop Recommendation System</h1>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            What is the avg weather that you face in your area?
          </label>
          <select
            style={styles.select}
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          >
            <option value="">Select weather</option>
            <option value="Sunny">Sunny</option>
            <option value="Humid">Humid</option>
            <option value="Rainy">Rainy</option>
            <option value="Cool">Cool</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            What is the purpose that the crop should fulfill?
          </label>
          <select
            style={styles.select}
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="">Select purpose</option>
            <option value="Selling in the market">Selling in the market</option>
            <option value="Consuming yourself">Consuming yourself</option>
          </select>
        </div>

        {getCropRecommendation() && (
          <div style={styles.recommendation}>
            {getCropRecommendation()}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerandaCropRecommender;
