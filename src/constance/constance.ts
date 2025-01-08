import { TBlog } from "@/type/blog";
import { TChef } from "@/type/chef";
import { TLoginUser, TUser } from "@/type/global";

export const USER_ROLE = {
  user: "user",
  admin: "admin",
  superAdmin: "superAdmin",
  chef: "chef",
} as const;

export const defaultUser: TUser = {
  name: "",
  email: "",
  password: "",
  image: "",
};

export const defaultAddProduct = {
  name: "",
  title: "",
  price: 0,
  description: "",
  stock: 0,
  category: "",
  ingredients: [{ name: "", quantity: "" }],
  image: "",
  additionalInfo: {
    calories: 0,
    protein: "",
    totalFat: "",
    size: "",
  },
};

export const defaultLoginUser: TLoginUser = {
  email: "",
  password: "",
};


export const defaultChefValues: Partial<TChef> = {
  name: '',
  email: '',
  title: '',
  experience: 0,
  contactNumber: '',
  description: '',
  image: '',
  password: '',
};

export const defaultBlogValues: TBlog = {
  name: "",
  title: "",
  description: "",
  image: "",
};
