import React from 'react';
import theaterImage from '../img/theater1.jpg'; // Import the background image
// 
const PricingPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MovieWise Pricing</title>
        <style>
          {`
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background-image: url(${theaterImage});
                background-size: cover;
                background-position: center;
            }
            .pricing-container {
                display: flex;
                justify-content: space-around;
                max-width: 1000px;
                width: 100%;
            }
            .pricing-plan {
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                padding: 20px;
                text-align: center;
                width: 30%;
            }
            .plan-name {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .plan-price {
                font-size: 36px;
                font-weight: bold;
                margin: 20px 0;
            }
            .plan-details {
                margin-bottom: 20px;
            }
            .contact-button {
                background-color: #850611;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
            .most-popular {
                background-color: #ff7f50;
                color: white;
                padding: 5px 0;
                position: relative;
                top: -20px;
                margin-bottom: -10px;
            }
          `}
        </style>
      </head>
      <body>
        <div className="pricing-container">
          <div className="pricing-plan">
            <div className="plan-name">Free</div>
            <div className="plan-price">₹0<span style={{ fontSize: '16px' }}>/month</span></div>
            <div className="plan-details">
              <p>5 recommendations per day</p>
              <p>Basic features</p>
            </div>
            <button className="contact-button">GET STARTED</button>
          </div>
          <div className="pricing-plan">
            <div className="plan-name">Monthly</div>
            <div className="plan-price">₹100<span style={{ fontSize: '16px' }}>/month</span></div>
            <div className="plan-details">
              <p>10 recommendations per day</p>
              <p>Advanced features</p>
            </div>
            <button className="contact-button">SUBSCRIBE</button>
          </div>
          <div className="pricing-plan">
            <div className="plan-name">Yearly</div>
            <div className="plan-price">₹1,100<span style={{ fontSize: '16px' }}>/year</span></div>
            <div className="plan-details">
              <p>12 recommendations per day</p>
              <p>Premium features</p>
            </div>
            <button className="contact-button">SUBSCRIBE</button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default PricingPage;
