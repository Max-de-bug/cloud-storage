import { CloudOutlined } from "@ant-design/icons";
import styles from "../../styles/Home.module.scss";
import { Button, Upload, UploadFile, notification } from "antd";
import { useState } from "react";
import * as Api from "../../api";

export const UploadButton: React.FC = () => {
  const [fileList, setFilelist] = useState<UploadFile[]>();

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options);
      setFilelist([]);
      window.location.reload();
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to download a file",
        duration: 2,
      });
    }
  };

  return (
    <Upload
      className={styles.upload}
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFilelist(fileList)}
    >
      <Button type="primary" icon={<CloudOutlined />} size="large">
        Download file
      </Button>
    </Upload>
  );
};
