"use client";

import React from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";

import * as Api from "../../api";

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = usePathname();

  const onClickLogout = () => {
    if (window.confirm("You really want to logout?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <>
      <Layout.Header className={styles.root}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <h2>
              <CloudOutlined />
              Cloud Storage
            </h2>
            <Menu
              className={styles.topMenu}
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedMenu]}
              onSelect={({ key }) => router.push(key)}
              items={[
                { key: "/dashboard/files", label: "Main" },
                { key: "/dashboard/profile", label: "Profile" },
              ]}
            />
          </div>
          <div className={styles.headerRight}>
            <Popover
              trigger="click"
              content={
                <Button type="primary" danger onClick={onClickLogout}>
                  Exit
                </Button>
              }
            >
              <Avatar>A</Avatar>
            </Popover>
          </div>
        </div>
      </Layout.Header>
    </>
  );
};
