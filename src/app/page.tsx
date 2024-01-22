"use client";
import { Main } from "./components/Main";
import Image from "next/image";
import RootLayout from "./layout";

import { Inter } from "next/font/google";
import { AuthPage } from "./dashboard/auth/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <AuthPage />;
}
// Home.getLayout = (page: React.ReactNode) => {
//   return <RootLayout title="Dasboard / Main">{page}</RootLayout>;
// };
