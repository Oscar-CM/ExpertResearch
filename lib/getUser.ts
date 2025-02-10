// lib/getUser.ts
import { currentUser } from "@clerk/nextjs/server";

export const getUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("No user found");
    }

    // Serialize the user object into a plain JavaScript object
    return {
      id: user.id,
      firstName: user.firstName,
      emailAddresses: user.emailAddresses?.map((email) => ({
        emailAddress: email.emailAddress,
        id: email.id,
      })),
      // Add other fields as needed
    };
  } catch (error) {
    console.error("Error fetching user:");
    return null;
  }
};