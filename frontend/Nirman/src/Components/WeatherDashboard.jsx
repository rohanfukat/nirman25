import React, { useState } from 'react';
import { Thermometer, Droplets, Wind, ArrowDown, ArrowUp, Gauge, MapPin } from 'lucide-react';

const WeatherDashboard = () => {
  const [location, setLocation] = useState('');

  // Sample data structure - replace with your actual API data
  const weatherData = {
    temp: 22,
    temp_min: 18,
    temp_max: 25,
    feels_like: 23,
    pressure: 1015,
    humidity: 65,
    wind_speed: 12
  };

  const styles = {
    container: {
      width: '95vw',
      margin: '0 auto',
      padding: '1.5rem',
    },
    inputContainer: {
      marginBottom: '1.5rem',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#1e293b',
      padding: '0.5rem',
      borderRadius: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      border: '1px solid #4ade80',
      backgroundColor: '#1e293b',
      color: '#bbf7d0',
      fontSize: '1rem',
      outline: 'none',
    },
    card: {
      backgroundColor: '#1e293b',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    cardHeader: {
      marginBottom: '1rem',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#4ade80',
    },
    mainTemp: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1.5rem',
      height:'10px'
    },
    tempDisplay: {
      textAlign: 'center',
    },
    currentTemp: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#4ade80',
    },
    feelsLike: {
      color: '#bbf7d0',
      marginTop: '0.5rem',
    },
    verticalLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    weatherCard: {
      backgroundColor: '#2c3e50',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      transition: 'transform 0.2s ease',
      width: '100%',
    },
    weatherCardContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    weatherCardText: {
      flex: 1,
    },
    weatherCardTitle: {
      color: '#bbf7d0',
      fontSize: '0.875rem',
      marginBottom: '0.25rem',
    },
    weatherCardValue: {
      color: '#4ade80',
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    weatherCardUnit: {
      fontSize: '1rem',
      marginLeft: '0.25rem',
    },
  };

  const WeatherCard = ({ icon: Icon, title, value, unit }) => (
    <div 
      style={styles.weatherCard}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={styles.weatherCardContent}>
        <Icon style={{ color: '#4ade80' }} size={32} />
        <div style={styles.weatherCardText}>
          <p style={styles.weatherCardTitle}>{title}</p>
          <p style={styles.weatherCardValue}>
            {value}
            <span style={styles.weatherCardUnit}>{unit}</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <MapPin size={20} style={{ color: '#4ade80' }} />
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>
            Current Weather {location && `- ${location}`}
          </h2>
        </div>

        <div style={styles.mainTemp}>
          <div style={styles.tempDisplay}>
            <p style={styles.currentTemp}>{weatherData.temp}°C</p>
            <p style={styles.feelsLike}>Feels like {weatherData.feels_like}°C</p>
          </div>
        </div>
        
        <div style={styles.verticalLayout}>
          <WeatherCard
            icon={ArrowDown}
            title="Min Temperature"
            value={weatherData.temp_min}
            unit="°C"
          />
          <WeatherCard
            icon={ArrowUp}
            title="Max Temperature"
            value={weatherData.temp_max}
            unit="°C"
          />
          <WeatherCard
            icon={Thermometer}
            title="Feels Like"
            value={weatherData.feels_like}
            unit="°C"
          />
          <WeatherCard
            icon={Gauge}
            title="Pressure"
            value={weatherData.pressure}
            unit="hPa"
          />
          <WeatherCard
            icon={Droplets}
            title="Humidity"
            value={weatherData.humidity}
            unit="%"
          />
          <WeatherCard
            icon={Wind}
            title="Wind Speed"
            value={weatherData.wind_speed}
            unit="m/s"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;