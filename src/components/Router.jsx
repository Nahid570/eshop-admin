import { Routes, Route, useNavigate } from "react-router-dom";
import {
  AddBlog,
  AddCategory,
  Blogs,
  Categories,
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
        {/* Blogs  */}
        <Route path="blogs" element={<Blogs />} />
        <Route path="add-blog" element={<AddBlog />} />
        <Route path="blog-categories" element={<Categories />} />
        <Route path="add-blog-category" element={<AddCategory />} />
        {/* Blogs  */}
      </Route>
    </Routes>
  );
};

export default Router;
