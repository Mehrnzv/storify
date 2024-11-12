import dashboard from '../public/icons/dashboard.svg'
import documents from '../public/icons/documents.svg'
import images from '../public/icons/images.svg'
import video from '../public/icons/video.svg'
import others from '../public/icons/others.svg'

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

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";