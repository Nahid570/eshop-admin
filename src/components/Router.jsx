import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Dashboard,
  Enquires,
  ForgetPass,
  Login,
  Orders,
  ResetPass,
} from "../pages";
import { Layout } from "../components/index";
import { useEffect } from "react";

const Router = () => {
  const admin = true;
  const navigate = useNavigate();

  useEffect(() => {
    !admin && navigate("/", { replace: true });
  }, [admin, navigate]);
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<ResetPass />} />
      <Route path="/forget-password" element={<ForgetPass />} />
      <Route path="admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="enquiries" element={<Enquires />} />
      </Route>
    </Routes>
  );
};

export default Router;
