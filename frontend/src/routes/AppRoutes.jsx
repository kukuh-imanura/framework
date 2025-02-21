import { BrowserRouter, Route, Routes } from "react-router-dom";

// ETC
import ProtectedRoute from "@utils/ProtectedRoute";
import NotFound from "@public/NotFound";
import Unauthorized from "@public/Unauthorized";
import Components from "@comps/Components";

// ROUTES
import PublicLayout from "@temps/PublicLayout";
import PrivateLayout from "@temps/PrivateLayout";

// PUBLIC
import Landing from "@public/Landing";
import Login from "@public/Login";

// PRIVATE
// USER
import DashboardUser from "@user/Dashboard";

// ADMIN
import DashboardAdmin from "@admin/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route element={<ProtectedRoute allowedRoles={["U"]} />}>
            <Route path="/user" element={<DashboardUser />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["A"]} />}>
            <Route path="/admin" element={<DashboardAdmin />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
