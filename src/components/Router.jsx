import { Routes, Route, useNavigate } from "react-router-dom";
import {
  AddBlog,
  AddBrand,
  AddCategory,
  AddColor,
  AddCoupons,
  AddProduct,
  Blogs,
  Brands,
  Categories,
  Colors,
  Coupons,
  Dashboard,
  Enquires,
  ForgetPass,
  Login,
  Orders,
  ProductCategories,
  Products,
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
        {/* Marketing  */}
        <Route path="coupons" element={<Coupons />} />
        <Route path="add-coupon" element={<AddCoupons />} />
        {/* Marketing  */}
        {/* Catelog  */}
        <Route path="products" element={<Products />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="brands" element={<Brands />} />
        <Route path="add-brand" element={<AddBrand />} />
        <Route path="product-categories" element={<ProductCategories />} />
        <Route path="colors" element={<Colors />} />
        <Route path="add-color" element={<AddColor />} />
        {/* Catelog  */}
      </Route>
    </Routes>
  );
};

export default Router;
