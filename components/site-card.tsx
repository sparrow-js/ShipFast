"use client"

import BlurImage from "@/components/blur-image";
import { placeholderBlurhash, random } from "@/lib/utils";
import { Site } from "@prisma/client";
import { BarChart, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaImage } from "react-icons/fa";
import ImageIconSelector from '@/components/engine-ui/image-icon-selector'
import {updateSite} from '@/lib/actions/site.actions';
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AiOutlineEllipsis } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdDeleteForever } from "react-icons/md";
import { deleteSite } from '@/lib/actions/site.actions';
import { VscPreview } from "react-icons/vsc";


export default function SiteCard({ data }: { data: Site }) {
  const router = useRouter();

  const url = `${data.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;
  return (
    <div className="relative rounded-lg border border-stone-200 pb-10 shadow-md transition-all hover:shadow-xl dark:border-stone-700 dark:hover:border-white">
      <Link
        href={`/${data.id}/website`}
        className="flex flex-col overflow-hidden rounded-lg"
      >
        <div className="group-hover:opacity-80 relative group">
          <BlurImage
            alt={data.name ?? "Card thumbnail"}
            width={500}
            height={400}
            className="h-44 object-cover"
            src={data.image ?? "/placeholder.png"}
            placeholder="blur"
            blurDataURL={data.imageBlurhash ?? placeholderBlurhash}
          />
          <div className="cursor-pointer absolute bottom-2 left-2" onClick={(e) => {
            e.preventDefault();
          }}>
            <ImageIconSelector
              prompt={data.prompt || ''}
              onChange={(url) => {
                const formData = new FormData();
                formData.append('image', url);
                updateSite(formData, data.id, 'image').then(() => {
                  router.refresh();
                })
              }}
            >
              <div className="relative">
                <div className="z-5 bg-black lg:bg-opacity-50 hover:bg-opacity-70 text-white group-hover:opacity-100 lg:opacity-0 transition-opacity w-9 h-9 rounded-full flex items-center justify-center">
                  <FaImage />
                </div>
              </div>
            </ImageIconSelector>
          
          </div>
        </div>

        <div className="border-t border-stone-200 p-4 dark:border-stone-700">
          <h3 className="my-0 truncate font-cal text-xl font-bold tracking-wide dark:text-white">
            {data.name}
          </h3>
          <p className="mt-2 line-clamp-1 text-sm font-normal leading-snug text-stone-500 dark:text-stone-400">
            {data.description}
          </p>
        </div>
      </Link>
      <div className="absolute bottom-4 flex w-full justify-between space-x-4 px-4">
        <a
          href={
            process.env.NEXT_PUBLIC_VERCEL_ENV
              ? `https://${url}`
              : `http://${data.subdomain}.localhost:3000`
          }
          target="_blank"
          rel="noreferrer"
          className="truncate rounded-md bg-stone-100 px-2 py-1 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
        >
          {url} ↗
        </a>

        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-7" variant='outline' size="icon">
          <AiOutlineEllipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div 
              className="flex justify-center items-center text-red-500 font-bold"
              onClick={() => {
                deleteSite(null, data.id, null).then(() => {
                  router.refresh();
                });
              }}
            >
              <MdDeleteForever className="w-[20px] h-[20px]"/>
              <span className="mr-2">Delete Site</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>


        {/* <Link
          href={`/site/${data.id}/analytics`}
          className="flex items-center rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-600 transition-colors hover:bg-green-200 dark:bg-green-900 dark:bg-opacity-50 dark:text-green-400 dark:hover:bg-green-800 dark:hover:bg-opacity-50"
        >
          <BarChart height={16} />
          <p>{random(10, 40)}%</p>
        </Link> */}
      </div>
    </div>
  );
}
