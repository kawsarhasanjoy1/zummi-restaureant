import { z } from "zod";

// Define the Zod schema for TUser
const userSchema = z.object({
  name: z.string().min(1, "Name is required"), // Must be a non-empty string
  email: z.string().email("Invalid email address"), // Must be a valid email
  password: z.string().min(6, "Password must be at least 6 characters long"), // Password length validation
  role: z.enum(["user", "admin", "superAdmin", "chef"]).optional(), // Must be one of the specified roles
  image: z.string().optional(), // Optional valid URL for image
});

export default userSchema;
