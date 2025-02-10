// app/dashboard/page.js
import { getUser } from "../../../lib/getUser";
import DashboardComponent from "../components/DashboardComponent";

const DashboardPage = async () => {
  const user = await getUser(); // Fetch user data on the server side

  if (!user) {
    return <div>No user found. Please log in.</div>;
  }

  return <DashboardComponent user={user} />;
};

export default DashboardPage;