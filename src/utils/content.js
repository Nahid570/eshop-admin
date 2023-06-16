import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import { BiAlarm } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";
import { BsQuestionOctagonFill } from "react-icons/bs";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

// Sidebae menu data
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

// Dashboard card content
export const dashCardData = [
  {
    id: 1,
    title: "Total Sells",
    icon: HiOutlineDotsVertical,
    amount: 3799.0,
    sellsIndicator: BiTrendingUp,
    text: 34.7,
    color: "text-green-600",
    predict: "Compared to April 2023",
  },
  {
    id: 2,
    title: "Average order value",
    icon: HiOutlineDotsVertical,
    amount: 272.98,
    sellsIndicator: BiTrendingDown,
    text: 12.0,
    color: "text-red-600",
    predict: "Compared to April 2023",
  },
  {
    id: 3,
    title: "Total Orders",
    icon: HiOutlineDotsVertical,
    amount: 177,
    sellsIndicator: BiTrendingUp,
    text: 27.9,
    color: "text-green-600",
    predict: "Compared to April 2023",
  },
];
