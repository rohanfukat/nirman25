import React, { useState } from "react";

const PremiumPurchase = () => {
  const [step, setStep] = useState("payment"); // Tracks whether to show payment or confirmation
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment process
    setTimeout(() => {
      alert("Payment successful! Your premium service is activated.");
      setStep("confirmation");
    }, 2000);
  };

  if (step === "confirmation") {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Premium Activated!</h1>
          <p style={styles.description}>
            Thank you for purchasing the Premium Service. You now have access
            to accurate crop recommendations and insurance coverage for your
            gardening journey.
          </p>
          <button
            onClick={() => (window.location.href = "/insurance-terms")}
            style={styles.button}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Complete Your Payment</h1>
        <p style={styles.description}>
          Pay ₹499 for the Premium Service and unlock accurate crop
          recommendations with insurance coverage.
        </p>
        <form onSubmit={handlePayment} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              placeholder="Enter your card number"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              maxLength="5"
              placeholder="MM/YY"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>CVV</label>
            <input
              type="password"
              name="cvv"
              maxLength="3"
              placeholder="Enter CVV"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Pay ₹399
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width:'100vw',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
    minHeight: "100vh",
    padding: "24px",
  },
  card: {
    backgroundColor: "#0f172a",
    borderRadius: "12px",
    padding: "24px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    color: "#4ade80",
    marginBottom: "16px",
  },
  description: {
    color: "#cbd5e1",
    marginBottom: "24px",
    lineHeight: "1.6",
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
  button: {
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

export default PremiumPurchase;
