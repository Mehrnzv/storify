import dashboard from "../public/icons/dashboard.svg";
import documents from "../public/icons/documents.svg";
import images from "../public/icons/images.svg";
import video from "../public/icons/video.svg";
import others from "../public/icons/others.svg";
import edit from "../public/icons/edit.svg";
import info from "../public/icons/info.svg";
import share from "../public/icons/share.svg";
import download from "../public/icons/download.svg";
import deletes from "../public/icons/delete.svg";

export const navItems = [
  {
    name: "Dashboard",
    icon: dashboard,
    url: "/",
  },
  {
    name: "Documents",
    icon: documents,
    url: "/documents",
  },
  {
    name: "Images",
    icon: images,
    url: "/images",
  },
  {
    name: "Media",
    icon: video,
    url: "/media",
  },
  {
    name: "Others",
    icon: others,
    url: "/others",
  },
];

export const actionsDropdownItems = [
  {
    label: "Rename",
    icon: edit,
    value: "rename",
  },
  {
    label: "Details",
    icon: info,
    value: "details",
  },
  {
    label: "Share",
    icon: share,
    value: "share",
  },
  {
    label: "Download",
    icon: download,
    value: "download",
  },
  {
    label: "Delete",
    icon: deletes,
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
