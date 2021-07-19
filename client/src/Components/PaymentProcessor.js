import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

function paymentProcessor() {
    <html>
        <body>
            <script
                src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"> // Replace YOUR_CLIENT_ID with your sandbox client ID
            </script>

            <div id="paypal-button-container"></div>

            <script>
                paypal.Buttons({
                    createOrder: function(data, actions) {
          return actions.order.create({
                    purchase_units: [{
                    amount: {
                    value: '0.01'
              }
            }]
          });
        },
                onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render('#paypal-button-container'); // Display payment options on your web page
            </script>
        </body>
    </html>


}
export default paymentProcessor;