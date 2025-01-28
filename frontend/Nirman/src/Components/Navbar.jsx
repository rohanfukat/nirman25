import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const Navbar = () => {
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
      padding: '0 1rem',
    },
    logo: {
      color: '#4ade80', // Emerald-400
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    link: {
      color: '#bbf7d0', // Emerald-200
      textDecoration: 'none',
      fontSize: '1rem',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      transition: 'background-color 0.3s, color 0.3s ease',
      cursor: 'pointer',
      backgroundColor: hoveredLink === 'home' ? '#4ade80' : 'transparent',
      color: hoveredLink === 'home' ? '#1e293b' : '#bbf7d0',
    },
    signOut: {
      backgroundColor: '#4ade80', // Emerald-400
      color: '#1e293b', // Slate-800
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.3s, transform 0.2s ease',
    },
    signOutHover: {
      backgroundColor: '#38b2ac', // Emerald-500
      transform: 'scale(1.05)', // Slight scale up on hover
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          Urban Farming
        </div>

        <div style={styles.links}>
          <Link
            to="/"
            style={styles.link}
            onMouseEnter={() => setHoveredLink('home')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
          <Link
            to="/create-organic-fertilizers"
            style={styles.link}
            onMouseEnter={() => setHoveredLink('create')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Create Organic Fertilizers
          </Link>
          <Link
            to="/plan-a-farm-visit"
            style={styles.link}
            onMouseEnter={() => setHoveredLink('plan')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Plan a Farm Visit
          </Link>
          <Link
            to="/access-your-land"
            style={styles.link}
            onMouseEnter={() => setHoveredLink('access')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Assess Your Land
          </Link>
          <button
            style={styles.signOut}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.signOutHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.signOut.backgroundColor}
          >
          <Link
            to="/signup"
            style={styles.link}
            onMouseEnter={() => setHoveredLink('plan')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Sign Up
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
