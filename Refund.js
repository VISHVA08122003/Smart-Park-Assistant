// RefundPage.js
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const RefundPage = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [refundReason, setRefundReason] = useState('');

  const handlePaymentComplete = (details, data) => {
    // Handle successful payment (update database, send confirmation, etc.)
    console.log('Payment completed:', details, data);
  };

  return (
    <div>
      <h1>Refund Page</h1>
      <form>
        <label>
          Vehicle Number:
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Refund Reason:
          <input
            type="text"
            value={refundReason}
            onChange={(e) => setRefundReason(e.target.value)}
          />
        </label>
        <br />

        {/* PayPal Buttons */}
        <PayPalScriptProvider options={{ 'client-id': 'YOUR_PAYPAL_CLIENT_ID' }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              // Implement server-side logic to create order and pass order ID
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: 10.0, // Replace with the refund amount
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => actions.order.capture().then((details) => handlePaymentComplete(details, data))}
          />
        </PayPalScriptProvider>
      </form>
    </div>
  );
};

export default RefundPage;