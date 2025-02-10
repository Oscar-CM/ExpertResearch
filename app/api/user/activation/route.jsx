// app/api/user/activation/route.js
import { db } from '../../../../configs/index';
import { payments } from '../../../../configs/schema';


import { eq, desc } from "drizzle-orm"; // Import desc here

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return new Response(
      JSON.stringify({ message: "User ID is required" }),
      { status: 400 }
    );
  }

  try {
    // Fetch the latest payment record for the user
    const payment = await db
      .select({ paid: payments.paid })
      .from(payments)
      .where(eq(payments.userId, userId))
      .orderBy(desc(payments.createdAt)) // Use desc for descending order
      .limit(1);

    if (payment.length === 0) {
      return new Response(
        JSON.stringify({ activated: false }),
        { status: 200 }
      );
    }

    return new Response(
      JSON.stringify({ activated: payment[0].paid }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking activation status:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to check activation status", error: error.message }),
      { status: 500 }
    );
  }
}