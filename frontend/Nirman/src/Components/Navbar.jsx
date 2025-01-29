import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ token, setToken }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    // Changed navigation to redirect to sign in page instead of home
    navigate('/signin');
  };

  const styles = {
    nav: {
      backgroundColor: '#1e293b',
      padding: '1rem',
      width: '100%',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      color: '#4ade80',
      fontWeight: 'bold',
      fontSize: '1.75rem',
    },
    logoImage: {
      height: '50px',
      marginRight: '10px',
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    link: {
      color: '#bbf7d0',
      textDecoration: 'none',
      fontSize: '1rem',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      transition: 'background-color 0.3s, color 0.3s ease',
      cursor: 'pointer',
    },
    linkHover: {
      backgroundColor: '#4ade80',
      color: '#1e293b',
    },
    signOut: {
      backgroundColor: '#4ade80',
      color: '#1e293b',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.3s, transform 0.2s ease',
    },
    signOutHover: {
      backgroundColor: '#38b2ac',
      transform: 'scale(1.05)',
    },
    premium: {
      backgroundColor: '#1e293b',
      color: '#fbbf24',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: '2px solid #fbbf24',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    premiumHover: {
      backgroundColor: '#fbbf24',
      color: '#1e293b',
      transform: 'scale(1.05)',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img
            src="/logo.png"
            alt="GreenHaven Logo"
            style={styles.logoImage}
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>

        <div style={styles.links}>
          <Link
            to="/"
            style={{
              ...styles.link,
              ...(hoveredLink === 'Home' ? styles.linkHover : {}),
            }}
            onMouseEnter={() => setHoveredLink('Home')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
          <Link
            to="/create-organic-fertilizers"
            style={{
              ...styles.link,
              ...(hoveredLink === 'Create Organic Fertilizers' ? styles.linkHover : {}),
            }}
            onMouseEnter={() => setHoveredLink('Create Organic Fertilizers')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Create Organic Fertilizers
          </Link>
          <Link
            to="/plan-a-farm-visit"
            style={{
              ...styles.link,
              ...(hoveredLink === 'Plan a Farm Visit' ? styles.linkHover : {}),
            }}
            onMouseEnter={() => setHoveredLink('Plan a Farm Visit')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Plan a Farm Visit
          </Link>
          <Link
            to="/access-your-land"
            style={{
              ...styles.link,
              ...(hoveredLink === 'Assess Your Land' ? styles.linkHover : {}),
            }}
            onMouseEnter={() => setHoveredLink('Assess Your Land')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Assess Your Land
          </Link>

          <Link
            to="/buy-premium"
            style={{
              ...styles.premium,
              ...(hoveredLink === 'Premium' ? styles.premiumHover : {}),
            }}
            onMouseEnter={() => setHoveredLink('Premium')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Premium
          </Link>

          {!token ? (
            <Link
              to="/signup"
              style={{
                ...styles.signOut,
                ...(hoveredLink === 'Sign Up' ? styles.signOutHover : {}),
              }}
              onMouseEnter={() => setHoveredLink('Sign Up')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Sign Up
            </Link>
          ) : (
            // Removed the Link wrapper around the button since we're using programmatic navigation
            <button
              onClick={handleLogout}
              style={{
                ...styles.signOut,
                ...(hoveredLink === 'Logout' ? styles.signOutHover : {}),
              }}
              onMouseEnter={() => setHoveredLink('Logout')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;