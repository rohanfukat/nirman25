import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PCropForm = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    temperature: '',
    humidity: '',
    ph: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add functionality to process the data
  };

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1e293b',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    label: {
      display: 'block',
      color: '#bbf7d0',
      marginBottom: '0.5rem',
      textAlign: 'left',
    },
    input: {
      width: '50vw',
      maxWidth: '400px',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #4ade80',
      marginBottom: '1rem',
      backgroundColor: '#2c3e50',
      color: '#bbf7d0',
      outline: 'none',
    },
    button: {
      backgroundColor: '#4ade80',
      color: '#fff',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#3da769',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#4ade80', textAlign: 'center', marginBottom: '1.5rem' }}>
        Field Data Input
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nitrogen" style={styles.label}>
          Nitrogen (mg/kg)
        </label>
        <input
          type="number"
          id="nitrogen"
          name="nitrogen"
          value={formData.nitrogen}
          onChange={handleInputChange}
          style={styles.input}
        />

        <label htmlFor="phosphorus" style={styles.label}>
          Phosphorus (mg/kg)
        </label>
        <input
          type="number"
          id="phosphorus"
          name="phosphorus"
          value={formData.phosphorus}
          onChange={handleInputChange}
          style={styles.input}
        />

        <label htmlFor="temperature" style={styles.label}>
          Temperature (°C)
        </label>
        <input
          type="number"
          id="temperature"
          name="temperature"
          value={formData.temperature}
          onChange={handleInputChange}
          style={styles.input}
        />

        <label htmlFor="humidity" style={styles.label}>
          Humidity (%)
        </label>
        <input
          type="number"
          id="humidity"
          name="humidity"
          value={formData.humidity}
          onChange={handleInputChange}
          style={styles.input}
        />

        <label htmlFor="ph" style={styles.label}>
          pH Level
        </label>
        <input
          type="number"
          id="ph"
          name="ph"
          value={formData.ph}
          onChange={handleInputChange}
          style={styles.input}
        />
    <div alignItems='centre'>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3da769')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4ade80')}
        ><Link to='/crop-ans-premium'>
          Submit
          </Link>
        </button>
        </div>
      </form>
    </div>
  );
};

export default PCropForm;
