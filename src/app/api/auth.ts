import axios from "../core/axios";
import {
  LoginFormDTO,
  LoginResponseDTO,
  RegisterFormDTO,
  RegisterResponseDTO,
  User,
} from "./dto/auth.dto";
import { destroyCookie } from "nookies";

// const BASE_URL = process.env.API_BASE_URL; // Set your API base URL here

// export const login = async (
//   values: LoginFormDTO
// ): Promise<LoginResponseDTO> => {
//   const response = await fetch("http://localhost:7777/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });

//   if (!response.ok) {
//     // Handle error here if needed
//     throw new Error("Login failed");
//   }

//   return response.json();
// };

// export const register = async (
//   values: RegisterFormDTO
// ): Promise<RegisterResponseDTO> => {
//   const response = await fetch(`http://localhost:7777/auth/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });

//   if (!response.ok) {
//     // Handle error here if needed
//     throw new Error("Registration failed");
//   }

//   return response.json();
// };

// export const getMe = async (): Promise<User> => {
//   const response = await fetch(`http://localhost:7777/users/me`);

//   if (!response.ok) {
//     // Handle error here if needed
//     throw new Error("Failed to fetch user data");
//   }

//   const data = await response.json();
//   console.log(data);
//   return data;
// };

export const login = async (
  values: LoginFormDTO
): Promise<LoginResponseDTO> => {
  const { data } = await axios.post("/auth/login", values);
  return data;
};

export const register = async (
  values: RegisterFormDTO
): Promise<RegisterResponseDTO> => {
  const { data } = await axios.post("/auth/register", values);
  return data;
};

export const getMe = async (): Promise<User> => {
  const { data } = await axios.get("/users/me");
  return data;
};

export const logout = () => {
  destroyCookie(null, "_token", { path: "/" });
};
