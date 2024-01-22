import { Extension } from "./getColorByExtention";

export const getExtentionFromFile = (filename: string) => {
  return filename.split(".").pop() as Extension;
};
