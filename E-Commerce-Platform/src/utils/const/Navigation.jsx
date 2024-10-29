import {
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineFolderAdd,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },

  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },

  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },

  {
    key: "customer",
    label: "Customer",
    path: "/customer",
    icon: <HiUser />,
  },

  {
    key: "transaction",
    label: "Transaction",
    path: "/transaction",
    icon: <HiOutlineFolderAdd />,
  },

  {
    key: "message",
    label: "Message",
    path: "/message",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "setting",
    label: "Setting",
    path: "/setting",
    icon: <HiOutlineCog />,
  },

  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
