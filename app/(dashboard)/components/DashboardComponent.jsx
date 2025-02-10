// app/dashboard/DashboardComponent.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const DashboardComponent = ({ user }) => {
  const [isActive, setIsActive] = useState(false); // State to track account activation status
  const [loading, setLoading] = useState(true); // State to handle loading

  // Function to fetch the activation status from the server
  const fetchActivationStatus = async () => {
    try {
      const response = await fetch(`/api/user/activation?userId=${user.id}`);
      const data = await response.json();

      if (response.ok) {
        setIsActive(data.activated);
      } else {
        console.error("Failed to fetch activation status:", data.message);
      }
    } catch (error) {
      console.error("Error fetching activation status:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch activation status on component mount
  useEffect(() => {
    if (user && user.id) {
      fetchActivationStatus();
    }
  }, [user, fetchActivationStatus]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              {loading
                ? "Loading Activation Status..."
                : isActive
                ? "ACCOUNT IS ACTIVE"
                : "ACTIVATE YOUR ACCOUNT"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">NAME</label>
                <p className="mt-1 text-lg font-bold">{user?.firstName || "Guest"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">EMAIL</label>
                <p className="mt-1 text-lg font-bold">
                  {user?.emailAddresses?.[0]?.emailAddress || "No email provided"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">TOTAL MONEY IN</label>
                <p className="mt-1 text-lg font-bold">KES 0.00</p>
              </div>
              {isActive ? (
                <button
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                  disabled
                >
                  ACCOUNT ACTIVATED
                </button>
              ) : (
                <Link href={"/mpesa"}>
                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    ACTIVATE NOW
                  </button>
                </Link>
              )}
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                ENROLL FOR TRAINING.
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">ACCOUNT DETAILS</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">TOTAL CASH OUT</label>
                <p className="mt-1 text-lg font-bold">KES 0.00</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ACCOUNT BALANCE</label>
                <p className="mt-1 text-lg font-bold">KES 0.00</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SAMPLES TASK(S)</label>
                <p className="mt-1 text-lg font-bold">KES 0.00</p>
              </div>
              <button
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                disabled={!isActive} // Disable button if account is not active
              >
                CLICK TO ACCESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;