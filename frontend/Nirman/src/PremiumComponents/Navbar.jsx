import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PNavbar = ({ accountName = "User", onNavigate = () => {} }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove auth token
    navigate('/signin'); // Redirect to sign in page
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
      border: 'none',
      background: 'none',
    },
    linkHover: {
      backgroundColor: '#4ade80',
      color: '#1e293b',
    },
    accountName: {
      backgroundColor: '#1e293b',
      color: '#fbbf24',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: '2px solid #fbbf24',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    accountNameHover: {
      backgroundColor: '#fbbf24',
      color: '#1e293b',
      transform: 'scale(1.05)',
    },
    logoutDropdown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      marginTop: '0.5rem',
      backgroundColor: '#1e293b',
      border: '1px solid #4ade80',
      borderRadius: '0.5rem',
      padding: '0.5rem',
      zIndex: 50,
    },
    logoutButton: {
      color: '#bbf7d0',
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      width: '100%',
      textAlign: 'center',
      borderRadius: '0.25rem',
      transition: 'all 0.3s ease',
    },
    logoutButtonHover: {
      backgroundColor: '#4ade80',
      color: '#1e293b',
    },
  };

  const NavLink = ({ href, children }) => (
    <button
      onClick={() => onNavigate(href)}
      style={{
        ...styles.link,
        ...(hoveredLink === href ? styles.linkHover : {}),
      }}
      onMouseEnter={() => setHoveredLink(href)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      {children}
    </button>
  );

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img
            src="logo.png"
            style={styles.logoImage}
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>

        <div style={styles.links}>
          <Link to="/homepage-premium" style={{ textDecoration: 'none', color: '#bbf7d0' }}>
            Home
          </Link>
          <Link to="/create-organic-fertilizers-premium" style={{ textDecoration: 'none', color: '#bbf7d0' }}>
            Create Organic Fertilizers
          </Link>
          <Link to="/plan-a-farm-visit-premium" style={{ textDecoration: 'none', color: '#bbf7d0' }}>
            Plan a Farm Visit
          </Link>
          <Link to="/access-your-land-premium" style={{ textDecoration: 'none', color: '#bbf7d0' }}>
            Assess Your Land
          </Link>
          <Link to="/insurance-terms-premium" style={{ textDecoration: 'none', color: '#bbf7d0' }}>
            Insurance T&C
          </Link>

          <div
            style={{
              ...styles.accountName,
              ...(hoveredLink === 'AccountName' ? styles.accountNameHover : {}),
            }}
            onClick={() => setShowLogout(!showLogout)}
            onMouseEnter={() => setHoveredLink('AccountName')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {accountName}
            {showLogout && (
              <div style={styles.logoutDropdown}>
                <button
                  onClick={handleLogout}
                  style={{
                    ...styles.logoutButton,
                    ...(hoveredLink === 'Logout' ? styles.logoutButtonHover : {}),
                  }}
                  onMouseEnter={() => setHoveredLink('Logout')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PNavbar;