import React from 'react';
import { Users, Heart, TreePine, Target, MessageCircle, Sprout, Share2, BookOpen } from 'lucide-react';

const CommunityPage = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "#f0fdf4",
      width: "100vw"
    },
    hero: {
      backgroundColor: "#052e16",
      padding: "4rem 2rem",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    heroSubtitle: {
      fontSize: "1.25rem",
      color: "#bbf7d0",
      maxWidth: "800px",
      margin: "0 auto",
    },
    section: {
      padding: "4rem 2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    sectionTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "2rem",
      color: "#4ade80",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      marginBottom: "3rem",
    },
    card: {
      backgroundColor: "#1e293b",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    cardIcon: {
      color: "#4ade80",
      marginBottom: "1rem",
      width: "2.5rem",
      height: "2.5rem",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#f0fdf4",
    },
    cardText: {
      color: "#cbd5e1",
      lineHeight: "1.6",
    },
    ctaSection: {
      textAlign: "center",
      padding: "4rem 2rem",
      backgroundColor: "#052e16",
    },
    ctaButton: {
      backgroundColor: "#16a34a",
      color: "white",
      padding: "1rem 2rem",
      borderRadius: "0.5rem",
      fontSize: "1.125rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    testimonial: {
      fontStyle: "italic",
      fontSize: "1.125rem",
      color: "#cbd5e1",
      marginBottom: "2rem",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Green Haven</h1>
        <p style={styles.heroSubtitle}>
          Empowering urban dwellers to transform their spaces into thriving green sanctuaries, 
          one plant at a time. Join our community of urban farmers and be part of the sustainable future.
        </p>
      </div>

      {/* Mission Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.testimonial}>
          "At Green Haven, we believe that every windowsill, balcony, and rooftop holds the potential 
          to become a productive green space. We're here to help you unlock that potential."
        </p>
        <div style={styles.grid}>
          <div style={styles.card}>
            <Target style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Our Vision</h3>
            <p style={styles.cardText}>
              To create a network of urban farms that contribute to food security, 
              environmental sustainability, and community wellness in cities worldwide.
            </p>
          </div>
          <div style={styles.card}>
            <Heart style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Our Values</h3>
            <p style={styles.cardText}>
              Sustainability, community empowerment, knowledge sharing, and making urban 
              farming accessible to everyone regardless of their space constraints.
            </p>
          </div>
          <div style={styles.card}>
            <TreePine style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Our Impact</h3>
            <p style={styles.cardText}>
              Over 1,000 urban gardens established, 5,000+ community members, and counting. 
              Every small space counts towards a greener future.
            </p>
          </div>
        </div>
      </section>

      {/* Community Benefits Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Community Benefits</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <MessageCircle style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Expert Guidance</h3>
            <p style={styles.cardText}>
              Access to experienced urban farmers, gardening experts, and a supportive 
              community ready to help you succeed in your farming journey.
            </p>
          </div>
          <div style={styles.card}>
            <BookOpen style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Resources & Workshops</h3>
            <p style={styles.cardText}>
              Regular workshops, detailed guides, and hands-on training sessions to help 
              you master urban farming techniques and sustainable practices.
            </p>
          </div>
          <div style={styles.card}>
            <Share2 style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Network & Share</h3>
            <p style={styles.cardText}>
              Connect with fellow urban farmers, share experiences, trade produce, and 
              build lasting relationships within your local community.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Programs</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <Sprout style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Starter Kits</h3>
            <p style={styles.cardText}>
              Get everything you need to start your urban farm, including seeds, soil, 
              containers, and basic tools, along with step-by-step guidance.
            </p>
          </div>
          <div style={styles.card}>
            <Users style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Mentorship Program</h3>
            <p style={styles.cardText}>
              Get paired with an experienced urban farmer who will guide you through your 
              first growing season and help you overcome challenges.
            </p>
          </div>
          <div style={styles.card}>
            <TreePine style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Community Projects</h3>
            <p style={styles.cardText}>
              Participate in community garden initiatives, local food programs, and 
              collaborative projects that benefit your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.sectionTitle}>Ready to Start Your Urban Farming Journey?</h2>
        <p style={styles.heroSubtitle}>
          Join our community today and take the first step towards creating your own urban oasis.
        </p>
        {/* <button style={styles.ctaButton}>
          Become a Member
        </button> */}
      </div>
    </div>
  );
};

export default CommunityPage;