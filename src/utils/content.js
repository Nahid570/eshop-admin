import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import { BiAlarm } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";
import { BsQuestionOctagonFill } from "react-icons/bs";

export const sidebarMenus = [
  { title: "Dashboard", path: "/admin", src: MdOutlineDashboardCustomize },
  {
    title: "Catalog",
    src: IoIosOptions,
    isSubmenu: true,
    subMenus: [
      { title: "Products" },
      { title: "Add Product" },
      { title: "Brands" },
      { title: "Add Brand" },
      { title: "Categories" },
      { title: "Colors" },
      { title: "Add Color" },
    ],
  },
  { title: "Orders", path: "orders", src: BiAlarm },
  {
    title: "Marketing",
    src: FaChartLine,
    isSubmenu: true,
    subMenus: [{ title: "Coupons" }, { title: "Add Coupon" }],
  },
  {
    title: "Blog",
    src: TbArticle,
    isSubmenu: true,
    subMenus: [
      { title: "Blogs" },
      { title: "Add Blog" },
      { title: "Categories" },
      { title: "Add Category" },
    ],
  },
  { title: "Enquiries", path: "/admin/enquiries", src: BsQuestionOctagonFill },
];
