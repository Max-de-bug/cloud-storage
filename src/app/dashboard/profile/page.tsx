import { GetServerSidePropsContext, NextPage } from "next";
import { User } from "../../api/dto/auth.dto";
import styles from "../../styles/Profile.module.scss";
import { Button } from "antd";
import { checkAuth } from "@/app/utils/checkAuth";
import * as Api from "../../api";
import { getMeInfo } from "@/app/serverActions";
interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = async (
  ctx: GetServerSidePropsContext
) => {
  const userData = await getMeInfo(ctx);
  return (
    <main>
      <div className={styles.root}>
        <h1>My profile</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Fullname: <b>{userData.username}</b>
        </p>
        <p>
          Email: <b>{userData.email}</b>
        </p>
        <br />
        <Button type="primary" danger>
          Exit
        </Button>
      </div>
    </main>
  );
};

// export async function getServerSideProps(
//   ctx: GetServerSidePropsContext
// ): Promise<{ props: Props }> {
//   const userData = await getMe(ctx);
//   return { props: { userData } };
// }

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   const authProps = await checkAuth(ctx);

//   if ("redirect" in authProps) {
//     return authProps;
//   }
//   const userData = await Api.auth.getMe();
//   console.log(userData);
//   return {
//     props: {
//       userData,
//     },
//   };
// };

export default DashboardProfilePage;
