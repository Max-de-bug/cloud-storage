"use server";
import { checkAuth } from "../utils/checkAuth";
import * as Api from "../api";
import { User } from "../api/dto/auth.dto";
import { GetServerSidePropsContext } from "next";

export const getMeInfo = async (
  ctx: GetServerSidePropsContext
): Promise<User> => {
  const authProps = await checkAuth(ctx);
  if ("redirect" in authProps) {
    throw new Error("Authentication failed");
  }
  const userData = await Api.auth.getMe();
  console.log(userData);

  return userData;
};
