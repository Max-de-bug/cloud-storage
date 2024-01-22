import React from "react";
import styles from "./FileAction.module.scss";
import { Button, Popconfirm } from "antd";

interface FileActionProps {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive: boolean;
}

export const FileAction: React.FC<FileActionProps> = ({
  onClickRemove,
  onClickShare,
  isActive,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Share
      </Button>
      <Popconfirm
        disabled={!isActive}
        title={"Remove file or files"}
        description="All the files will be moved to the trash"
        okText="Yes"
        cancelText="No"
        onConfirm={onClickRemove}
      />
      <Button onClick={onClickRemove} disabled={!isActive}>
        Remove
      </Button>
    </div>
  );
};
