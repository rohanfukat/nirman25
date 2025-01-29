import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const styles = {
    container: {
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      width: '100vw',
    },
    formContainer: {
      backgroundColor: '#1e293b',
      padding: '2rem',
      borderRadius: '0.5rem',
      width: '100%',
      maxWidth: '28rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    title: {
      color: '#f0fdf4',
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      color: '#4ade80',
      marginBottom: '0.5rem',
      fontSize: '1rem',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '0.375rem',
      color: '#f0fdf4',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.2s ease',
    },
    error: {
      color: '#ef4444',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
    },
    button: {
      width: '100%',
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      marginBottom: '1rem',
    },
    signInLink: {
      color: '#4ade80',
      textAlign: 'center',
      display: 'block',
      textDecoration: 'none',
      fontSize: '0.875rem',
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data)
      if (response.ok) {
        alert(JSON.stringify(data));
        navigate("/signin")
      } else {
        alert("Error: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error:", error);
    }


    // Handle successful form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username:</label>
            <input
              type="text"
              name="username"
              style={styles.input}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span style={styles.error}>{errors.username}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Mail:</label>
            <input
              type="email"
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone:</label>
            <input
              type="tel"
              name="phone"
              style={styles.input}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span style={styles.error}>{errors.phone}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              name="password"
              style={styles.input}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span style={styles.error}>{errors.password}</span>}
          </div>

          <button type="submit" style={styles.button}>
            Create an Account
          </button>

          <a href="#" style={styles.signInLink}>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              Already signed up? Sign in here
            </Link>
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;