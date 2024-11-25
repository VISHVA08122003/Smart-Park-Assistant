import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import './Payment.css';
// This value is from the props in the UI
const style = {"layout":"vertical"};

function createOrder() {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
            cart: [
                {
                    sku: "1blwyeo8",
                    quantity: 2,
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((order) => {
            // Your code here after create the order
            return order.id;
        });
}

function onApprove(data) {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderID: data.orderID,
        }),
    })
        .then((response) => response.json())
        .then((orderData) => {
            // Your code here after capture the order
        });
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <div>
        <div>
        <h1>Refund Page</h1>
      <form>
        <label>
          Vehicle Number:
          <input
            type="text"
            //value={vehicleNumber}
           // onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Refund Reason:
          <input
            type="text"
           // value={refundReason}
           // onChange={(e) => setRefundReason(e.target.value)}
          />
        </label>
        </form>
        <br />
        </div>
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource={undefined}
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </>
        </div>
    );
    }

export default function Payment() {
    return (
        <div style={{ maxWidth: '750px', minHeight: '200px', padding: '20px', backgroundColor: '#f2f2f2', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <PayPalScriptProvider options={{ clientId: 'test', components: 'buttons', currency: 'USD' }}>
                <ButtonWrapper showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    );
}
