"use client";
import { GetServerSidePropsContext, NextPage } from "next";
import * as Api from "../../api";
import { checkAuth } from "@/app/utils/checkAuth";
import { FileItem } from "@/app/api/dto/files.dto";
import { DashboardLayout } from "@/app/DashboardLayout";
import { Files } from "@/app/modules/Files";

interface Props {
  items: FileItem[];
}

const DashboardPage: NextPage<Props> = ({ items }) => {
  return (
    <DashboardLayout>
      <Files items={items} />
    </DashboardLayout>
  );
};

// DashboardTrash.getLayout = (page: React.ReactNode) => {
//   return <RootLayout title="Dasboard / Trash">{page}</RootLayout>;
// };

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = Api.files.getAll("trash");
  } catch (error) {}
  return {
    props: {
      items: [],
    },
  };
};

export default DashboardPage;
