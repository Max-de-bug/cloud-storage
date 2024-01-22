import axios from "axios";
import { FileItem } from "../api/dto/files.dto";

type Filetype = "all" | "photos" | "trash";

export const getAll = async (type: Filetype = "all"): Promise<FileItem> => {
  return (await axios.get("/files?type=" + type)).data;
};

export const remove = (ids: number[]): Promise<void> => {
  return axios.delete("/files?type=" + ids);
};

export const uploadFile = async (options: any) => {
  const { onSuccess, onError, file, onProgress } = options;
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: { "Content-type": "multipart/form data" },
    onProgress: (event: ProgressEvent) => {
      onProgress({ percent: event.loaded / event.total });
    },
  };
  try {
    const { data } = await axios.post(
      "http://localhost:7777/files",
      formData,
      config
    );
    onSuccess();
    return data;
  } catch (error) {
    onError({ error });
  }
};
