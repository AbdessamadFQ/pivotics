import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Segmentation from "./pages/Segmentation";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import CreateSegment from "./features/segmentations/ceatesegment/CreateSegment";
import MyAccount from "./features/settings/MyAccount";
import Subscription from "./features/settings/Subscription";
import Integrations from "./features/settings/Integrations";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/segmentation" element={<Segmentation />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route element={<Settings />}>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/integrations" element={<Integrations />} />
          </Route>
          <Route
            path="/segmentation/createSegment"
            element={<CreateSegment />}
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
