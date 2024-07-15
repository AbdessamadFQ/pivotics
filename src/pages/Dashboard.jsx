import DashboardLayout from "../features/dashboard/DashboardLayout";
import PageHeader from "../ui/PageHeader";

function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard">
        A snapshot of the last 24 hours of activity
      </PageHeader>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
