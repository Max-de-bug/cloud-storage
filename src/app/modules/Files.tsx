import { useState } from "react";
import { FileAction } from "../components/FileAction";
import { FileList, FileSelectType } from "../components/FileList";
import { Empty } from "antd";
import { FileItem } from "../api/dto/files.dto";
import styles from "../styles/Dashboard.module.scss";
import * as Api from "../api";

interface FileProps {
  items: FileItem[];
  withActions?: boolean;
}

export const Files: React.FC<FileProps> = ({ items, withActions }) => {
  const [files, setFiles] = useState(items || []);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.files.remove(selectedIds);
  };

  const onClickShare = () => {
    alert("share");
  };
  return (
    <div>
      {files.length ? (
        <>
          {withActions && (
            <FileAction
              onClickRemove={onClickRemove}
              onClickShare={onClickShare}
              isActive={selectedIds.length > 0}
            />
          )}
          <FileList items={files} onFileSelect={onFileSelect} />
        </>
      ) : (
        <div className={styles.empty}>
          <Empty
            className="empty-block"
            description="The list of files is empty"
          />
        </div>
      )}
    </div>
  );
};
