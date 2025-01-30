import React from 'react';
import { Sprout, Calendar, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PNavbar from './Navbar';

const PHomePage = () => {
  const styles = {
    body: {
      margin: "0",
      padding: "0",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0f172a", // slate-900
      overflowX: "hidden", // Prevent horizontal scrolling
    },
    container: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#0f172a", // slate-900
      display: "flex",
      flexDirection: "column",
      backgroundImage: "url('/bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    header: {
      backgroundColor: "#052e16", // green-950
      color: "#f0fdf4", // green-50
      padding: "1.5rem 1rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    headerTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    headerSubtitle: {
      color: "#bbf7d0", // green-200
    },
    main: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1rem",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      width: "100%",
      maxWidth: "1200px",
    },
    card: {
      backgroundColor: "#1e293b", // slate-800
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      transition: "box-shadow 0.3s ease",
      height:"220px",
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
    },
    icon: {
      width: "2rem",
      height: "2rem",
      marginRight: "0.75rem",
      color: "#4ade80", // green-400
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#f0fdf4", // green-50
    },
    cardText: {
      color: "#cbd5e1", // slate-300
      marginBottom: "1rem",
    },
    button: {
      display: "flex",
      alignItems: "center",
      color: "#4ade80", // green-400
      cursor: "pointer",
      border: "none",
      background: "none",
      transition: "color 0.3s ease",
    },
    arrowIcon: {
      width: "1rem",
      height: "1rem",
      marginLeft: "0.5rem",
    },
    cta: {
      marginTop: "4rem",
      textAlign: "center",
    },
    ctaTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#f0fdf4", // green-50
      marginBottom: "1rem",
    },
    ctaButton: {
      backgroundColor: "#16a34a", // green-600
      color: "white",
      padding: "0.75rem 2rem",
      borderRadius: "0.5rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <>
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Urban Farming Initiative</h1>
        <p style={styles.headerSubtitle}>
          Transform your urban lifestyle with sustainable farming practices
        </p>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.cardGrid}>
          {/* Organic Fertilizers Card */}
          <Link to="/create-organic-fertilizers-premium" style={{ textDecoration: 'none' }}>
            <div style={styles.card}>
                <div style={styles.cardHeader}>
                <Sprout style={styles.icon} />
                <h2 style={styles.cardTitle}>Create Organic Fertilizers</h2>
                </div>
                <p style={styles.cardText}>
                Learn how to convert your household waste into nutrient-rich fertilizers for your future farm.
                </p>
                <button style={styles.button}>
                Learn more <ArrowRight style={styles.arrowIcon} />
                </button>
            </div>
        </Link>

          {/* Farm Visit Card */}
        <Link to="/plan-a-farm-visit-premium" style={{ textDecoration: 'none' }}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <Calendar style={styles.icon} />
              <h2 style={styles.cardTitle}>Plan a Farm Visit</h2>
            </div>
            <p style={styles.cardText}>
              Schedule a visit to local farms and learn directly from experienced farmers.
            </p>
            <button style={styles.button}>
              Book now <ArrowRight style={styles.arrowIcon} />
            </button>
          </div>
        </Link>

          {/* Land Assessment Card */}
          <Link to="/access-your-land-premium" style={{ textDecoration: 'none' }}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <Map style={styles.icon} />
                <h2 style={styles.cardTitle}>Assess Your Land</h2>
              </div>
              <p style={styles.cardText}>
                Understand your land type and get personalized recommendations for optimal farming.
              </p>
              <button style={styles.button}>
                Start assessment <ArrowRight style={styles.arrowIcon} />
              </button>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div style={styles.cta}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Farming Journey?</h2>
          <button style={styles.ctaButton}>Join Our Community</button>
        </div>
      </main>
    </div>
    </>
  );
};

export default PHomePage;