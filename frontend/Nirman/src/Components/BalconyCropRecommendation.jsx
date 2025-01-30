import React, { useState } from 'react';

const BalconyCropRecommender = () => {
  const [weather, setWeather] = useState('');
  const [purpose, setPurpose] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const styles = {
    container: {
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      width: '100vw',
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
    },
    loading: {
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#1e40af',
      borderRadius: '0.5rem',
      color: '#f0fdf4',
      fontSize: '1rem',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    dots: {
      display: 'inline-block',
      animation: 'ellipsis 1.5s infinite',
    }
  };

  const getCropRecommendation = () => {
    if (!weather || !purpose) return null;

    if (purpose === 'Selling in the market') {
      switch (weather) {
        case 'Sunny':
          return 'The crops best for this would be: Cherry Tomatoes and Chilly Peppers';
        case 'Humid':
          return 'The crops best for this would be: Turmeric and Ginger';
        case 'Rainy':
          return 'The crops best for this would be: Mushrooms and Leafy Greens';
        case 'Cool':
          return 'The crops best for this would be: Broccoli and Cauliflower';
        default:
          return null;
      }
    } else if (purpose === 'Consuming yourself') {
      switch (weather) {
        case 'Sunny':
          return 'The crops best for this would be: Spinach, lettuce, and herbs';
        case 'Humid':
          return 'The crops best for this would be: Radishes, cucumbers';
        case 'Rainy':
          return 'The crops best for this would be: Bush beans, coriander';
        case 'Cool':
          return 'The crops best for this would be: Carrots, garlic';
        default:
          return null;
      }
    }
    return null;
  };

  const handleSelectionChange = (type, value) => {
    if (type === 'weather') {
      setWeather(value);
    } else {
      setPurpose(value);
    }

    setRecommendation(null); // Reset recommendation when selection changes
    
    if (type === 'weather' && purpose || type === 'purpose' && weather) {
      setLoading(true);
      setTimeout(() => {
        const newRecommendation = getCropRecommendation();
        setRecommendation(newRecommendation);
        setLoading(false);
      }, 5000); // 5 second delay
    }
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
            onChange={(e) => handleSelectionChange('weather', e.target.value)}
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
            onChange={(e) => handleSelectionChange('purpose', e.target.value)}
          >
            <option value="">Select purpose</option>
            <option value="Selling in the market">Selling in the market</option>
            <option value="Consuming yourself">Consuming yourself</option>
          </select>
        </div>
        
        {loading ? (
          <div style={styles.loading}>
            Analyzing best crops for your conditions
            <span style={styles.dots}>...</span>
          </div>
        ) : recommendation && (
          <div style={styles.recommendation}>
            {recommendation}
          </div>
        )}
      </div>
    </div>
  );
};

export default BalconyCropRecommender;