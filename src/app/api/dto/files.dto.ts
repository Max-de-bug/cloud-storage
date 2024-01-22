import { User } from "./auth.dto";

export interface FileItem {
  filename: string;
  originalName: string;
  size: number;
  filetype: string;
  user: User;
  deletedAt: string | null;
  id: number;
}
