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
      { title: "Blogs", path: "admin/blogs" },
      { title: "Add Blog", path: "admin/add-blog" },
      { title: "Categories", path: "admin/blog-categories" },
      { title: "Add Category", path: "admin/add-blog-category" },
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

export const dashTableData = {
  head: [
    { id: 1, title: "Product Name" },
    { id: 2, title: "Color" },
    { id: 3, title: "Category" },
    { id: 4, title: "Price" },
  ],
  body: [
    {
      id: 1,
      name: "Dell XPS 15",
      color: "Black",
      product: "Laptop",
      price: 1899,
    },
    {
      id: 2,
      name: "HP Spectre x360",
      color: "Poseidon Blue",
      product: "Laptop",
      price: 1599,
    },
    {
      id: 3,
      name: "Lenovo ThinkPad X1 Carbon",
      color: "Iron Gray",
      product: "Laptop",
      price: 2199,
    },
    {
      id: 4,
      name: "ASUS ROG Zephyrus G14",
      color: "Moonlight White",
      product: "Laptop",
      price: 1799,
    },
    {
      id: 5,
      name: "Microsoft Surface Book 3",
      color: "Platinum",
      product: "Laptop",
      price: 2499,
    },
    {
      id: 6,
      name: "Acer Predator Helios 300",
      color: "Abyssal Black",
      product: "Laptop",
      price: 1299,
    },
    {
      id: 7,
      name: "Apple iMac 27",
      color: "Space Gray",
      product: "Desktop",
      price: 2299,
    },
    {
      id: 8,
      name: "Dell Alienware Aurora R10",
      color: "Lunar Light",
      product: "Desktop",
      price: 2499,
    },
    {
      id: 9,
      name: "HP ENVY 32 All-in-One",
      color: "Nightfall Black",
      product: "Desktop",
      price: 1999,
    },
    {
      id: 10,
      name: "Lenovo Legion Tower 5i",
      color: "Phantom Black",
      product: "Desktop",
      price: 1799,
    },
    {
      id: 11,
      name: "ASUS ROG Strix G15",
      color: "Original Black",
      product: "Gaming Laptop",
      price: 1699,
    },
    {
      id: 12,
      name: "Razer Blade 15",
      color: "Mercury White",
      product: "Gaming Laptop",
      price: 2199,
    },
  ],
};
