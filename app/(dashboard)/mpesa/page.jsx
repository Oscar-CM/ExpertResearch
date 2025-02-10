// app/page.js
import { getUser } from "../../../lib/getUser";
import MpesaPaymentForm from "../components/MpesaPaymentForm"; // Import the client component

const Page = async () => {
  const user = await getUser(); // Fetch user data on the server side
  console.log('user id is',{user})

  if (!user) {
    return <div>Please log in to activate your account.</div>;
  }

  return <MpesaPaymentForm user={user} />;
};

export default Page;