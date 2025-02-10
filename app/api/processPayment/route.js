// app/api/processPayment/route.js
import { db } from "../../../configs/index";
import { payments } from "../../../configs/schema";
import { eq } from "drizzle-orm"; // Import the eq function
import axios from "axios";
import getAccessToken from "../../utils/mpesa";

export async function POST(req) {
  try {
    // Parse request body
    const { phoneNumber, userId } = await req.json();

    // Input validation
    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
      return new Response(
        JSON.stringify({ message: "Invalid phone number" }),
        { status: 400 }
      );
    }

    if (!userId) {
      return new Response(
        JSON.stringify({ message: "User ID is required" }),
        { status: 400 }
      );
    }

    const fixedAmount = 1; // Fixed amount for activation

    // Step 1: Create a payments record in the database
    let payment;
    try {
      payment = await db.insert(payments).values({
        userId,
        amount: fixedAmount,
        checkoutRequestId: null, // Will be updated later
        paid: false,
      }).returning(); // Ensure the inserted record is returned
    } catch (dbError) {
      console.error("Database insertion failed:", dbError.message);
      return new Response(
        JSON.stringify({ message: "Failed to create payment record", error: dbError.message }),
        { status: 500 }
      );
    }

    if (!payment || payment.length === 0 || !payment[0]?.id) {
      console.error("Database did not return a valid payment record.");
      return new Response(
        JSON.stringify({ message: "Failed to create payment record" }),
        { status: 500 }
      );
    }

    const checkoutRequestId = payment[0].id.toString(); // Use the generated ID as the CheckoutRequestID

    // Log payment initiation details for debugging
    console.log(`Initiating payment for user ${userId} with phone number ${phoneNumber}`);

    // Step 2: Get Access Token
    const accessToken = await getAccessToken();

    // Step 3: Prepare Timestamp
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "").substring(0, 14);

    // Step 4: Generate Password
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString("base64");

    // Step 5: Make STK Push Request
    const stkPushResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: fixedAmount,
        PartyA: phoneNumber,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: "Account Activation",
        TransactionDesc: "Account Activation",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Step 6: Update the payments record with the CheckoutRequestID
    try {
      await db.update(payments)
        .set({
          checkoutRequestId: stkPushResponse.data.CheckoutRequestID,
          updatedAt: new Date(),
        })
        .where(eq(payments.id, checkoutRequestId)); // Use eq() for filtering
    } catch (updateError) {
      console.error("Failed to update payment record:", updateError.message);
      return new Response(
        JSON.stringify({ message: "Failed to update payment record", error: updateError.message }),
        { status: 500 }
      );
    }

    // Log successful payment initiation
    console.log(
      `Payment initiated successfully for user ${userId}. Checkout Request ID: ${stkPushResponse.data.CheckoutRequestID}`
    );

    // Return M-Pesa response to the client
    return new Response(JSON.stringify(stkPushResponse.data), { status: 200 });
    console.log("STK Push Response:", stkPushResponse.data);
  } catch (error) {
    // Handle errors gracefully
    console.error("Error processing payment:", error.response?.data || error.message);

    // Check if the error came from the M-Pesa API
    if (error.response && error.response.data) {
      return new Response(
        JSON.stringify({ message: "M-Pesa API Error", error: error.response.data }),
        { status: 500 }
      );
    }

    // Generic error response
    return new Response(
      JSON.stringify({ message: "Failed to process payment", error: error.message }),
      { status: 500 }
    );
  }
}