import Head from "next/head";
import { Header } from "./components/Header/header";
import styles from "./styles/Home.module.scss";
import { ReactNode } from "react";
interface LayoutProps {
  title: string;
  children: ReactNode;
}

const RootLayout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
      </Head>
      <body className={styles.body}>
        <main>
          <Header />
          <div className={styles.main}>
            <div className={styles.layout}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
