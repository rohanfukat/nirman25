import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = ({setToken}) => {
  const [formData, setFormData] = useState({
    email: "", // for account name/email
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};


    // Validate all fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    // If there are errors, show them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Hello")
        alert("Login Successfull");
        const token = data.access_token
        if( data.premium == "yes"){
          navigate("/homepage-premium");
        }
        else{
          //naviage to premium route
          navigate("/access-your-land")
        }
        
        localStorage.setItem("token", token);
        setToken(token)
        // alert(JSON.stringify(data));
      } else {
        alert(JSON.stringify(data.detail));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
              background-color: #1e293b;
              margin: 0;
              padding: 0;
            }

            .page-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              width:100vw;
              padding: 24px;
              background-color: #1e293b;
              background-image: url('/bg.jpg');
              background-size: cover;
              background-position: center;
            }

            .form-container {
              width: 100vh;
              padding: 24px;
              background-color: #0f172a;
              border-radius: 12px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            }

            .form-title {
              text-align: center;
              font-size: 2rem;
              font-weight: bold;
              color: #4ade80;
              margin-bottom: 24px;
            }

            .form-group {
              margin-bottom: 16px;
            }

            label {
              display: block;
              font-weight: 600;
              color: #94a3b8;
              margin-bottom: 8px;
            }

            input {
              width: 100%;
              padding: 12px;
              border: 1px solid #334155;
              border-radius: 8px;
              background-color: #1e293b;
              color: #f8fafc;
              font-size: 1rem;
              outline: none;
              transition: border-color 0.3s ease;
            }

            input:focus {
              border-color: #4ade80;
            }

            .error-message {
              margin-top: 4px;
              font-size: 0.875rem;
              color: #ef4444;
            }

            .button-container {
              text-align: center;
              margin-top: 16px;
            }

            .form-button {
              width: 100%;
              padding: 12px;
              font-size: 1rem;
              font-weight: 600;
              color: white;
              background-color: #4ade80;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              transition: background-color 0.3s ease, transform 0.2s ease-in-out;
            }

            .form-button:hover {
              background-color: #38b2ac;
              transform: scale(1.05);
            }

            .form-button:focus {
              outline: none;
              box-shadow: 0 0 0 4px rgba(72, 219, 141, 0.6);
            }

            .sign-up-link {
              display: block;
              text-align: center;
              margin-top: 16px;
              font-size: 0.875rem;
              color: #4ade80;
              text-decoration: none;
              transition: color 0.3s ease;
            }

            .sign-up-link:hover {
              color: #38b2ac;
            }
        `}
      </style>
      <div className="page-container">
        <div className="form-container">
          <h1 className="form-title">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Account Name :</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your account name or email"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            <div className="button-container">
              <button type="submit" className="form-button">
                Login
              </button>
            </div>
            <Link to="/signup" className="sign-up-link">
              Don't have an account? Sign up
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
