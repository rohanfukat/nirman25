import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    identifier: '', // for account name/email
    password: ''
  });

  const [errors, setErrors] = useState({});

  const styles = {
    container: {
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    formContainer: {
      backgroundColor: '#1e293b',
      padding: '2rem',
      borderRadius: '0.5rem',
      width: '100%',
      maxWidth: '24rem',
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
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1rem',
    },
    button: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    signUpLink: {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
   
    // Validate all fields
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });

    // If there are errors, show them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle successful form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Sign In</h1>
       
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Account Name / Mail:</label>
            <input
              type="text"
              name="identifier"
              style={styles.input}
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Enter your account name or email"
            />
            {errors.identifier && <span style={styles.error}>{errors.identifier}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              name="password"
              style={styles.input}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span style={styles.error}>{errors.password}</span>}
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Login
            </button>
          </div>
         
          <a href="#" style={styles.signUpLink}>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            Don't have an account? Sign up
            </Link>
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;