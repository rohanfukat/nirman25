import React from "react";

const PInsuranceTerms = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Insurance Terms & Conditions</h1>
        <p style={styles.description}>
          Welcome to the Premium Insurance service. Below are the Terms and Conditions:
        </p>
        <ul style={styles.list}>
          <li>This insurance covers losses caused by inaccurate crop recommendations.</li>
          <li>Claims must be submitted within 15 days of the incident.</li>
          <li>Proof of loss, such as photographs, is required for claim approval.</li>
          <li>The maximum payout is limited to 70% of the total verified loss.</li>
          <li>Claims are processed within 30 days after verification.</li>
          <li>Fraudulent claims will lead to permanent account suspension.</li>
        </ul>
        <p style={styles.note}>
          Please ensure all details and proofs are accurate to avoid rejection.
        </p>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input type="text" placeholder="Enter your name" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Enter your email" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Claim Description</label>
            <textarea
              placeholder="Describe the issue in detail"
              style={styles.textarea}
              required
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Proof of Loss</label>
            <input
              type="file"
              accept="image/*"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit Claim
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
    minHeight: "100vh",
    padding: "24px",
    width:'100vw'
  },
  card: {
    backgroundColor: "#0f172a",
    borderRadius: "12px",
    padding: "24px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: "1.8rem",
    color: "#4ade80",
    marginBottom: "16px",
    textAlign: "center",
  },
  description: {
    color: "#cbd5e1",
    marginBottom: "16px",
    lineHeight: "1.6",
  },
  list: {
    marginBottom: "16px",
    paddingLeft: "20px",
    color: "#cbd5e1",
  },
  note: {
    color: "#94a3b8",
    fontStyle: "italic",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    color: "#4ade80",
    marginBottom: "8px",
    fontWeight: "600",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#1e293b",
    color: "#f0fdf4",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#1e293b",
    color: "#f0fdf4",
    outline: "none",
    minHeight: "100px",
  },
  submitButton: {
    backgroundColor: "#4ade80",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default PInsuranceTerms;
