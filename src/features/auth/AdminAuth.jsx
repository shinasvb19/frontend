import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentAdmin } from "../admin/adminMainSlice";

const AdminAuth = () => {
  const token = useSelector(selectCurrentAdmin);
  // console.log("this form auth", token);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/signin" state={{ from: location }} replace />
  );
};
export default AdminAuth;
