// app/api/callback/route.js
import { db } from "../../../configs/index";
import { payments } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import axios from "axios";

import cors from "nextjs-cors";

export async function POST(req) {
  // Apply CORS middleware
  await cors(req, {
    methods: ["POST"],
    origin: "*", // Allow all origins (use specific origins in production)
  });

  try {
    const body = await req.text();
    console.log("Raw Callback Body:", body);

    const result = JSON.parse(body);
    console.log("Parsed Callback Data:", result);

    // Extract relevant data from the callback
    const { CheckoutRequestID, ResultCode, ResultDesc, MerchantRequestID, TransactionDate, Amount, MpesaReceiptNumber } =
      result.Body.stkCallback;

    if (ResultCode !== 0) {
      console.error("Payment failed:", ResultDesc);
      return new Response(JSON.stringify({ message: "Payment failed" }), { status: 200 });
    }

    // Update the payments record in the database
    await db.update(payments)
      .set({
        paid: true, // Mark the payment as successful
        mpesaTransactionId: MpesaReceiptNumber, // Store the M-Pesa transaction ID
        updatedAt: new Date(),
      })
      .where(eq(payments.checkoutRequestId, CheckoutRequestID));

    console.log("Payment successful. Payment record updated.");

    return new Response(JSON.stringify({ message: "Callback received successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error processing callback:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to process callback", error: error.message }),
      { status: 500 }
    );
  }
}