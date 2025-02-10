// app/MpesaPaymentForm.js
"use client";
import { useState } from "react";

export default function MpesaPaymentForm({ user }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const fixedAmount = 1; // Fixed amount for activation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing payment...");

    // Validate phone number
    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
      return setMessage("Please enter a valid phone number.");
    }

    try {
      const response = await fetch("/api/processPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber,
          amount: fixedAmount,
          userId: user.id, // Pass the user ID from props
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Payment initiated successfully. Checkout Request ID: ${data.CheckoutRequestID}`);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-gray-700 mb-2 mt-2">
          This payment of 1 KES is for account activation, which helps us ensure you are serious about making money doing online work. We are excited to be part of your success journey!
        </h1>
      </div>
      <div className="min-h-screen flex mt-10 justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">M-Pesa Payment</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number:
              </label>
              <input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number (e.g., 254712345678)"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount:</label>
              <p className="mt-1 text-sm text-gray-600">{fixedAmount} KES</p>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Pay
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}