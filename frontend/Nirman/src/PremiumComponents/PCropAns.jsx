import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PCropAns = () => {
  // Access the state passed from the previous page using useLocation
  const location = useLocation();
  const { formData } = location.state || {}; // Retrieve the state (formData) passed

  const [tableData, setTableData] = useState(
    Array(5).fill({ crop: "", probability: "" })
  );

  // You can update the table based on the passed formData
  useEffect(() => {
    if (formData) {
      var probability_data = formData;

      var result = [];

      for (var i in probability_data) {
        result.push({ crop: i, probability: probability_data[i] });
      }

     

      setTableData(result);
    }
  }, [formData]);

  return (
    <div
      style={{
        width: "90vw",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#1e293b",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        color: "#bbf7d0",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#4ade80",
        }}
      >
        Crop Probability Table
      </h2>


      <table
        style={{
          width: "50vw",
          borderCollapse: "collapse",
          margin: "0 auto", // Centers the table within the container
          textAlign: "center", // Center aligns the text in the table cells
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "0.75rem",
                border: "1px solid #4ade80",
                backgroundColor: "#2c3e50",
              }}
            >
              Crop
            </th>
            <th
              style={{
                padding: "0.75rem",
                border: "1px solid #4ade80",
                backgroundColor: "#2c3e50",
              }}
            >
              Probability
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #4ade80",
                }}
              >
                {row.crop || "—"}
              </td>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #4ade80",
                }}
              >
                {row.probability || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PCropAns;
