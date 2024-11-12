"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/icons/logo-brand.svg";
import { navItems } from "@/constants/index";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import file from '../public/images/files-2.png'

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="hidden h-auto lg:block"
        />
        <p className="text-lg text-brand-100 hidden lg:block">Storify</p>
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="lg:hidden h-auto"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src={file}
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
