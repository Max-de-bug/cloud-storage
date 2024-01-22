"use server";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

import axios from "axios";
import * as Api from "../api";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  console.log(ctx);
  const { _token } = nookies.get(ctx);
  console.log(_token);
  axios.defaults.headers.common.Authorization = `Bearer ${_token}`;
  try {
    await Api.auth.getMe();
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/dashboard/auth",
        permanent: false,
      },
    };
  }
};
