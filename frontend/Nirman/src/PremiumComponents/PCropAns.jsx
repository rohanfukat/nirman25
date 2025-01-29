import React, { useState } from 'react';

const PCropAns = () => {
  // Create 20 empty rows initially
  const [tableData, setTableData] = useState(
    Array(20).fill({ crop: '', probability: '' })
  );

  return (
    <div
      style={{
        width: '90vw',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#1e293b',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: '#bbf7d0',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#4ade80' }}>
        Crop Probability Table
      </h2>
      <table
        style={{
          width: '50vw',
          borderCollapse: 'collapse',
          margin: '0 auto', // Centers the table within the container
          textAlign: 'center', // Center aligns the text in the table cells
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '0.75rem',
                border: '1px solid #4ade80',
                backgroundColor: '#2c3e50',
              }}
            >
              Crop
            </th>
            <th
              style={{
                padding: '0.75rem',
                border: '1px solid #4ade80',
                backgroundColor: '#2c3e50',
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
                  padding: '0.75rem',
                  border: '1px solid #4ade80',
                }}
              >
                {row.crop || '—'}
              </td>
              <td
                style={{
                  padding: '0.75rem',
                  border: '1px solid #4ade80',
                }}
              >
                {row.probability || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PCropAns;
