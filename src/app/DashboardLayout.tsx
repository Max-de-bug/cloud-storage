import React from "react";
import styles from "./styles/Home.module.scss";
import { useRouter } from "next/navigation";
import { UploadButton } from "./components/UploadButton";
import { Menu } from "antd";
import { FileOutlined } from "@ant-design/icons";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const selectedmenu = router.pathname;
  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <UploadButton />
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[selectedmenu]}
          items={[
            {
              key: "/dashboard/main",
              icon: <FileOutlined />,
              label: "Files",
              onClick: () => router.push("/dashboard"),
            },
            {
              key: "/dashboard/photos",
              icon: <FileOutlined />,
              label: "Photo",
              onClick: () => router.push("/dashboard/photos"),
            },
            {
              key: "/dashboard/trash",
              icon: <FileOutlined />,
              label: "Basket",
              onClick: () => router.push("/dashboard/trash"),
            },
          ]}
        />
      </div>
      <div className={styles.container}>{children}</div>
    </main>
  );
};
