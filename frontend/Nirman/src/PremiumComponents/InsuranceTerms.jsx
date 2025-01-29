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
      // Create FormData object for file upload
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("description", formData.description);
      if (formData.proofImage) {
        submitData.append("file", formData.proofImage);
      }

      // Replace with your actual API endpoint
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
    <div className="flex justify-center items-center bg-slate-800 min-h-screen p-6 w-full">
      <div className="bg-slate-900 rounded-xl p-6 max-w-2xl w-full shadow-lg">
        <h1 className="text-2xl text-green-400 mb-4 text-center">
          Insurance Terms & Conditions
        </h1>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Welcome to the Premium Insurance service. Below are the Terms and
          Conditions:
        </p>
        <ul className="mb-4 pl-5 text-slate-300 space-y-2">
          <li>
            This insurance covers losses caused by inaccurate crop
            recommendations.
          </li>
          <li>Claims must be submitted within 15 days of the incident.</li>
          <li>
            Proof of loss, such as photographs, is required for claim approval.
          </li>
          <li>
            The maximum payout is limited to 70% of the total verified loss.
          </li>
          <li>Claims are processed within 30 days after verification.</li>
          <li>Fraudulent claims will lead to permanent account suspension.</li>
        </ul>
        <p className="text-slate-400 italic mb-6">
          Please ensure all details and proofs are accurate to avoid rejection.
        </p>

        {message && (
          <div
            className={`p-4 mb-4 rounded ${
              message.includes("successfully")
                ? "bg-green-900 text-green-200"
                : "bg-red-900 text-red-200"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-green-400 mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="p-3 rounded-lg border border-slate-600 bg-slate-800 text-slate-100 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-green-400 mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="p-3 rounded-lg border border-slate-600 bg-slate-800 text-slate-100 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-green-400 mb-2 font-semibold">
              Claim Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the issue in detail"
              className="p-3 rounded-lg border border-slate-600 bg-slate-800 text-slate-100 outline-none min-h-24"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-green-400 mb-2 font-semibold">
              Upload Proof of Loss
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="p-3 rounded-lg border border-slate-600 bg-slate-800 text-slate-100 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-400 text-white p-3 rounded-lg font-semibold 
                     hover:bg-green-500 transition-colors disabled:bg-green-800 
                     disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Claim"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PInsuranceTerms;
