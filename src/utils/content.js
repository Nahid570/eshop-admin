import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import { BiAlarm } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";
import { BsQuestionOctagonFill } from "react-icons/bs";

export const sidebarMenus = [
  { title: "Dashboard", path: "/admin", src: MdOutlineDashboardCustomize },
  { title: "Catalog", path: "/admin/catalog", src: IoIosOptions },
  { title: "Orders", path: "/admin/orders", src: BiAlarm },
  { title: "Marketing", path: "/admin/marketing", src: FaChartLine },
  { title: "Blog", path: "/admin/blog", src: TbArticle },
  { title: "Enquiries", path: "/admin/enquiries", src: BsQuestionOctagonFill },
];
