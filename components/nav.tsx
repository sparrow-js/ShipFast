"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Edit3,
  Globe,
  Layout,
  LayoutDashboard,
  Megaphone,
  Menu,
  Newspaper,
  Settings,
  FileCode,
  Github,
} from "lucide-react";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
// import { getSiteFromPostId } from "@/lib/actions";
import Image from "next/image";
import { TiArrowBackOutline } from "react-icons/ti";


export default function Nav({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const { id } = useParams() as { id?: string };

  const [siteId, setSiteId] = useState<string | null>();

  // useEffect(() => {
  //   if (segments[0] === "post" && id) {
  //     getSiteFromPostId(id).then((id) => {
  //       setSiteId(id);
  //     });
  //   }
  // }, [segments, id]);

  const tabs = useMemo(() => {
    if (segments[0] === "post" && id) {
      return [
        {
          name: "Back to All Posts",
          href: siteId ? `/site/${siteId}` : "/sites",
          icon: <ArrowLeft width={18} />,
        },
        {
          name: "Editor",
          href: `/post/${id}`,
          isActive: segments.length === 2,
          icon: <Edit3 width={18} />,
        },
        {
          name: "Settings",
          href: `/post/${id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Settings width={18} />,
        },
      ];
    }
    return [
      // {
      //   name: "Back to All website",
      //   href: "/website",
      //   icon: <ArrowLeft width={18} />,
      // },
      {
        name: "Home",
        href: `/${id}/home`,
        isActive: segments.includes("home"),
        icon: <LayoutDashboard width={18} />,
      },
      {
        name: "Website",
        href: `/${id}/website`,
        isActive: segments.includes("website"),
        icon: <Newspaper width={18} />,
      },
      // {
      //   name: "Marketing",
      //   href: `/${id}/marketing`,
      //   isActive: segments.includes("marketing"),
      //   icon: <Newspaper width={18} />,
      // },
      // {
      //   name: "CRM",
      //   href: `/${id}/crm`,
      //   isActive: segments.includes("crm"),
      //   icon: <Newspaper width={18} />,
      // },
      // {
      //   name: "Settings",
      //   href: `/${id}/settings`,
      //   isActive: segments.includes("settings"),
      //   icon: <Settings width={18} />,
      // },
    ];
  }, [segments, id, siteId]);

  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <>
      <button
        className={`fixed z-20 ${
          // left align for Editor, right align for other pages
          segments[0] === "post" && segments.length === 2 && !showSidebar
            ? "left-5 top-5"
            : "right-5 top-7"
        } sm:hidden`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Menu width={20} />
      </button>
      <div
        className={`transform ${
          showSidebar ? "w-full translate-x-0" : "-translate-x-full"
        } fixed z-10 flex h-full flex-col justify-between border-r border-stone-200 bg-stone-100 p-4 transition-all dark:border-stone-700 dark:bg-stone-900 sm:w-60 sm:translate-x-0`}
      >
        <div className="grid gap-2">
          <div className="flex items-center space-x-2 rounded-lg px-2 py-1.5">
            <Link
              href="/sites"
              className="rounded-lg p-2 hover:bg-stone-200 dark:hover:bg-stone-700 flex justify-center items-center"
            >
              <TiArrowBackOutline />
              <span className="ml-2">go sites</span>
            </Link>
          </div>
          <div className="grid gap-1">
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center space-x-3 ${
                  isActive ? "bg-stone-200 text-black dark:bg-stone-700" : ""
                } rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="my-2 border-t border-stone-200 dark:border-stone-700" />
          {children}
        </div>
      </div>
    </>
  );
}
