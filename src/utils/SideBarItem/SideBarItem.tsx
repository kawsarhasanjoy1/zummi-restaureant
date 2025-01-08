import { USER_ROLE } from "@/constance/constance";
import { TItem, UserRole } from "@/type/global";
import { FaBlogger } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import {
  MdLibraryAdd,
  MdOutlineDashboard,
  MdOutlineShoppingCart,
  MdReviews,
} from "react-icons/md";
import { PiChefHatDuotone } from "react-icons/pi";

const SideBarItem = (role: UserRole) => {
  const roleMenu: TItem[] = [];
  switch (role) {
    case USER_ROLE.superAdmin:
      roleMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: MdOutlineDashboard,
        },
        {
          title: "Add-product",
          path: `/${role}/add-product`,
          icon: MdLibraryAdd,
        },
        {
          title: "Products",
          path: `/${role}/products`,
          icon: MdOutlineShoppingCart,
        },
        {
          title: "Orders",
          path: `/${role}/orders`,
          icon: MdOutlineShoppingCart,
        },
        {
          title: "users",
          path: `/${role}/users`,
          icon: FaUsersGear,
        },
        {
          title: "Create chef",
          path: `/${role}/create-chef`,
          icon: MdLibraryAdd,
        },
        {
          title: "chefs",
          path: `/${role}/chefs`,
          icon: PiChefHatDuotone,
        },
        {
          title: "Create blog",
          path: `/${role}/create-blogs`,
          icon: MdLibraryAdd,
        },
        {
          title: "blogs",
          path: `/${role}/blogs`,
          icon: FaBlogger,
        },
        {
          title: "reviews",
          path: `/${role}/reviews`,
          icon: MdReviews,
        }
      );
      break;
    case USER_ROLE.admin:
      roleMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: MdOutlineDashboard,
        },
        {
          title: "Add-product",
          path: `/${role}/add-product`,
          icon: MdLibraryAdd,
        },
        {
          title: "Products",
          path: `/${role}/products`,
          icon: MdOutlineShoppingCart,
        },
        {
          title: "Orders",
          path: `/${role}/orders`,
          icon: MdOutlineShoppingCart,
        },
        {
          title: "users",
          path: `/${role}/users`,
          icon: FaUsersGear,
        },
        {
          title: "chefs",
          path: `/${role}/chefs`,
          icon: PiChefHatDuotone,
        },
        {
          title: "blogs",
          path: `/${role}/blogs`,
          icon: FaBlogger,
        },
        {
          title: "reviews",
          path: `/${role}/reviews`,
          icon: MdReviews,
        }
      );
      break;
    case USER_ROLE.chef:
      roleMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: MdOutlineDashboard,
        },
        {
          title: "Add-product",
          path: `/${role}/add-product`,
          icon: MdLibraryAdd,
        },
        {
          title: "Products",
          path: `/${role}/products`,
          icon: MdOutlineShoppingCart,
        },
        {
          title: "Orders",
          path: `/${role}/orders`,
          icon: MdOutlineShoppingCart,
        },

        {
          title: "chefs",
          path: `/${role}/chefs`,
          icon: PiChefHatDuotone,
        },

        {
          title: "reviews",
          path: `/${role}/reviews`,
          icon: MdReviews,
        }
      );
      break;
    case USER_ROLE.chef:
      roleMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: MdOutlineDashboard,
        },

        {
          title: "Orders",
          path: `/${role}/orders`,
          icon: MdOutlineShoppingCart,
        },
        {
          title: "reviews",
          path: `/${role}/reviews`,
          icon: MdReviews,
        },
        {
          title: "Payment-history",
          path: `/${role}/history`,
          icon: MdReviews,
        }
      );
      break;
  }
  return [...roleMenu];
};

export default SideBarItem;
