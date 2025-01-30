import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PCropForm = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temp: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [errors, setErrors] = useState({}); // Track validation errors
  const [loading, setLoading] = useState(false); // Track loading state
  const [success, setSuccess] = useState(null); // Success message
  const navigate = useNavigate(); // Hook for navigating programmatically

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      } else if (isNaN(formData[key])) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } must be a number`;
      } else {
        switch (key) {
          case "humidity":
            if (formData[key] < 0 || formData[key] > 100) {
              newErrors[key] = "Humidity must be between 0 and 100";
            }
            break;
          case "temp":
            if (formData[key] < -50 || formData[key] > 60) {
              newErrors[key] = "Temperature must be between -50°C and 60°C";
            }
            break;
          case "rainfall":
            if (formData[key] < 0) {
              newErrors[key] = "Rainfall must be a positive number";
            }
            break;
          default:
            break;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setSuccess(null);

      try {
        // Send form data to backend using fetch
        const response = await fetch("http://127.0.0.1:8000/model-prediction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form data");
        }

        const data = await response.json();
        setSuccess("Form submitted successfully!");
       
        // Redirect and pass form data to the next page
        navigate("/crop-ans-premium", {
          state: {
            formData: data,
            message: "Form submitted successfully!", // Optional message or other data
          },
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setSuccess("Failed to submit form. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1e293b",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      gap:"10px",
      paddingTop:"40px",
      backgroundImage: "url('/bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    label: {
      display: "block",
      color: "#bbf7d0",
      marginBottom: "0.5rem",
      textAlign: "left",
    },
    input: {
      width: "50vw",
      maxWidth: "400px",
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid #4ade80",
      marginBottom: "1rem",
      backgroundColor: "#2c3e50",
      color: "#bbf7d0",
      outline: "none",
    },
    inputError: {
      width: "50vw",
      maxWidth: "400px",
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid red", // Red border for error
      marginBottom: "1rem",
      backgroundColor: "#2c3e50",
      color: "#bbf7d0",
      outline: "none",
    },
    errorMessage: {
      color: "red",
      fontSize: "0.875rem",
      marginTop: "0.25rem",
      textAlign: "left",
    },
    button: {
      backgroundColor: "#4ade80",
      color: "#fff",
      padding: "0.75rem 1.5rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#3da769",
    },
    loadingMessage: {
      color: "#fff",
      marginTop: "1rem",
    },
    successMessage: {
      color: "green",
      marginTop: "1rem",
    },
    h2:{
      paddingTop: "5px",
      
    }
  };

  return (
    <div style={styles.container}>
      <h2
        style={{
          color: "#4ade80",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
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
          style={errors.nitrogen ? styles.inputError : styles.input}
        />
        {errors.nitrogen && (
          <div style={styles.errorMessage}>{errors.nitrogen}</div>
        )}

        <label htmlFor="phosphorus" style={styles.label}>
          Phosphorus (mg/kg)
        </label>
        <input
          type="number"
          id="phosphorus"
          name="phosphorus"
          value={formData.phosphorus}
          onChange={handleInputChange}
          style={errors.phosphorus ? styles.inputError : styles.input}
        />
        {errors.phosphorus && (
          <div style={styles.errorMessage}>{errors.phosphorus}</div>
        )}

        <label htmlFor="potassium" style={styles.label}>
          Potassium (mg/kg)
        </label>
        <input
          type="number"
          id="potassium"
          name="potassium"
          value={formData.potassium}
          onChange={handleInputChange}
          style={errors.potassium ? styles.inputError : styles.input}
        />
        {errors.potassium && (
          <div style={styles.errorMessage}>{errors.potassium}</div>
        )}

        <label htmlFor="temp" style={styles.label}>
          Temperature (°C)
        </label>
        <input
          type="number"
          id="temp"
          name="temp"
          value={formData.temp}
          onChange={handleInputChange}
          style={errors.temp ? styles.inputError : styles.input}
        />
        {errors.temp && <div style={styles.errorMessage}>{errors.temp}</div>}

        <label htmlFor="humidity" style={styles.label}>
          Humidity (%)
        </label>
        <input
          type="number"
          id="humidity"
          name="humidity"
          value={formData.humidity}
          onChange={handleInputChange}
          style={errors.humidity ? styles.inputError : styles.input}
        />
        {errors.humidity && (
          <div style={styles.errorMessage}>{errors.humidity}</div>
        )}

        <label htmlFor="ph" style={styles.label}>
          pH Level
        </label>
        <input
          type="number"
          id="ph"
          name="ph"
          value={formData.ph}
          onChange={handleInputChange}
          style={errors.ph ? styles.inputError : styles.input}
        />
        {errors.ph && <div style={styles.errorMessage}>{errors.ph}</div>}

        <label htmlFor="rainfall" style={styles.label}>
          Rainfall (mm)
        </label>
        <input
          type="number"
          id="rainfall"
          name="rainfall"
          value={formData.rainfall}
          onChange={handleInputChange}
          style={errors.rainfall ? styles.inputError : styles.input}
        />
        {errors.rainfall && (
          <div style={styles.errorMessage}>{errors.rainfall}</div>
        )}

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#3da769")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4ade80")
            }
            disabled={loading} // Disable the button while loading
          >
            Submit
          </button>
          {loading && <div style={styles.loadingMessage}>Submitting...</div>}
          {success && <div style={styles.successMessage}>{success}</div>}
        </div>
      </form>
    </div>
  );
};

export default PCropForm;
