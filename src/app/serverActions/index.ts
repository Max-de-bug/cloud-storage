import { useRouter } from "next/navigation";
import { checkAuth } from "../utils/checkAuth";
import * as Api from "../api";
import { User } from "../api/dto/auth.dto";
import { GetServerSidePropsContext } from "next";

enum Filetype {
  Photos = "photos",
  Trash = "trash",
  // Add other file types as needed
}

const handleAuthRedirect = (authProps: any) => {
  if ("redirect" in authProps) {
    const router = useRouter();
    router.push("/");
    return authProps;
  }
  return null;
};

const getAllFilesByType = async (
  ctx: GetServerSidePropsContext,
  fileType: Filetype | undefined
) => {
  const authProps = await checkAuth(ctx);
  if (handleAuthRedirect(authProps)) {
    return authProps;
  }

  try {
    const items = Api.files.getAll(fileType);
    return { props: { items } };
  } catch (error) {
    console.error(`Error fetching ${fileType} data:`, error);
    return { props: { items: [] } };
  }
};

export const getAllFiles = async (ctx: GetServerSidePropsContext) => {
  return getAllFilesByType(ctx, undefined);
};

export const getAllPhotos = async (ctx: GetServerSidePropsContext) => {
  return getAllFilesByType(ctx, Filetype.Photos);
};

export const getAllGarbage = async (ctx: GetServerSidePropsContext) => {
  return getAllFilesByType(ctx, Filetype.Trash);
};
