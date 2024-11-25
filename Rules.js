import React from 'react';

function ParkingInfo() {
  const sectionStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
    margin: '10px 0',
  };

  const headerStyle = {
    color: '#333',
    textDecoration: 'underline',
  };

  const listStyle = {
    lineHeight: '1.6',
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Parking Rules</h2>
        <ul style={listStyle}>
          <li>Park only in designated areas.</li>
          <li>Always display your parking ticket.</li>
          <li>Do not block emergency exits.</li>
          <li>Follow the time limits for parking.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>No Parking Fines</h2>
        <ul style={listStyle}>
          <li>Blocking a fire hydrant: $100 fine</li>
          <li>Parking in a no-parking zone: $75 fine</li>
          <li>Exceeding time limits: $50 fine</li>
          <li>Parking without a ticket: $25 fine</li>
        </ul>
      </div>
    </div>
  );
}

export default ParkingInfo;
