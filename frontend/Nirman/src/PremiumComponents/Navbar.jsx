import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PNavbar = ({ accountName = "User", onNavigate = () => {} }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    nav: {
      backgroundColor: '#1e293b', // Slate-800
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
      color: '#4ade80', // Emerald-400
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
      color: '#bbf7d0', // Emerald-200
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
      backgroundColor: '#4ade80', // Emerald-400
      color: '#1e293b', // Slate-800
    },
    accountName: {
      backgroundColor: '#1e293b', // Slate-800
      color: '#fbbf24', // Amber-400 for golden yellow
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: '2px solid #fbbf24',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s ease',
    },
    accountNameHover: {
      backgroundColor: '#fbbf24',
      color: '#1e293b',
      transform: 'scale(1.05)',
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
        {/* Logo */}
        <div style={styles.logo}>
          <img
            src="logo.png"
            style={styles.logoImage}
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>

        {/* Navigation Links */}
        <div style={styles.links}>
          <Link to="/homepage-premium">
            Home
          </Link>
          <Link to="/create-organic-fertilizers-premium" style={{ textDecoration: 'none' }}>
            Create Organic Fertilizers
          </Link>
          <Link to="/plan-a-farm-visit-premium">
            Plan a Farm Visit
          </Link>
          <Link to="/access-your-land-premium">
            Assess Your Land
          </Link>
          <Link to="/insurance-terms-premium">
            Insurance T&C
          </Link>

          {/* Account Name Display */}
          <div
            style={{
              ...styles.accountName,
              ...(hoveredLink === 'AccountName' ? styles.accountNameHover : {}),
            }}
            onMouseEnter={() => setHoveredLink('AccountName')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {accountName}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PNavbar;