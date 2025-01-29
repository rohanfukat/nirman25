import React, { useState } from "react";

const PInsuranceTerms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const styles = {
    body: {
      margin: "0",
      padding: "0",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0f172a", // slate-900
      overflowX: "hidden",
    },
    container: {
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#0f172a", // slate-900
      display: "flex",
      flexDirection: "column",
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
      padding: "2rem 1rem",
    },
    formContainer: {
      backgroundColor: "#1e293b", // slate-800
      borderRadius: "0.5rem",
      padding: "2rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "800px",
      margin: "2rem auto",
    },
    title: {
      fontSize: "1.5rem",
      color: "#4ade80", // green-400
      marginBottom: "1.5rem",
      textAlign: "center",
      fontWeight: "bold",
    },
    text: {
      color: "#cbd5e1", // slate-300
      marginBottom: "1.5rem",
      lineHeight: "1.6",
    },
    list: {
      color: "#cbd5e1", // slate-300
      marginBottom: "1.5rem",
      paddingLeft: "1.5rem",
    },
    listItem: {
      marginBottom: "0.75rem",
    },
    italicText: {
      color: "#94a3b8", // slate-400
      fontStyle: "italic",
      marginBottom: "2rem",
    },
    formGroup: {
      marginBottom: "1.5rem",
    },
    label: {
      display: "block",
      color: "#4ade80", // green-400
      marginBottom: "0.5rem",
      fontWeight: "600",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#0f172a", // slate-900
      border: "1px solid #334155", // slate-700
      borderRadius: "0.375rem",
      color: "#f8fafc", // slate-50
      marginBottom: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#0f172a", // slate-900
      border: "1px solid #334155", // slate-700
      borderRadius: "0.375rem",
      color: "#f8fafc", // slate-50
      marginBottom: "1rem",
      minHeight: "120px",
      resize: "vertical",
    },
    fileInput: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#0f172a", // slate-900
      border: "1px solid #334155", // slate-700
      borderRadius: "0.375rem",
      color: "#f8fafc", // slate-50
      marginBottom: "1rem",
    },
    submitButton: {
      width: "100%",
      backgroundColor: "#16a34a", // green-600
      color: "white",
      padding: "0.75rem",
      borderRadius: "0.375rem",
      border: "none",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    submitButtonHover: {
      backgroundColor: "#15803d", // green-700
    },
    submitButtonDisabled: {
      backgroundColor: "#064e3b", // green-900
      cursor: "not-allowed",
    },
    message: {
      padding: "1rem",
      borderRadius: "0.375rem",
      marginBottom: "1rem",
      textAlign: "center",
    },
    successMessage: {
      backgroundColor: "#065f46", // green-800
      color: "#a7f3d0", // green-200
    },
    errorMessage: {
      backgroundColor: "#991b1b", // red-800
      color: "#fecaca", // red-200
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      proofImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("description", formData.description);
      if (formData.proofImage) {
        submitData.append("file", formData.proofImage);
      }

      const response = await fetch("http://localhost:8000/insurance-details", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit claim");
      }

      const result = await response.json();
      setMessage("Claim submitted successfully!");
      setFormData({
        name: "",
        email: "",
        description: "",
        proofImage: null,
      });
    } catch (error) {
      setMessage("Error submitting claim. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Insurance Terms & Conditions</h1>
        <p style={styles.headerSubtitle}>
          Protect your farming investment with our comprehensive coverage
        </p>
      </header>

      <main style={styles.main}>
        <div style={styles.formContainer}>
          <p style={styles.text}>
            Welcome to the Premium Insurance service. Below are the Terms and
            Conditions:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              This insurance covers losses caused by inaccurate crop
              recommendations.
            </li>
            <li style={styles.listItem}>
              Claims must be submitted within 15 days of the incident.
            </li>
            <li style={styles.listItem}>
              Proof of loss, such as photographs, is required for claim approval.
            </li>
            <li style={styles.listItem}>
              The maximum payout is limited to 70% of the total verified loss.
            </li>
            <li style={styles.listItem}>
              Claims are processed within 30 days after verification.
            </li>
            <li style={styles.listItem}>
              Fraudulent claims will lead to permanent account suspension.
            </li>
          </ul>
          <p style={styles.italicText}>
            Please ensure all details and proofs are accurate to avoid rejection.
          </p>

          {message && (
            <div
              style={{
                ...styles.message,
                ...(message.includes("successfully")
                  ? styles.successMessage
                  : styles.errorMessage),
              }}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Claim Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the issue in detail"
                style={styles.textarea}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Upload Proof of Loss</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={styles.fileInput}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.submitButton,
                ...(loading ? styles.submitButtonDisabled : {}),
              }}
            >
              {loading ? "Submitting..." : "Submit Claim"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PInsuranceTerms;