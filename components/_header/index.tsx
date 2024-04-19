import { AppContext } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import UserInfo from "@/components/user";
import { useContext } from "react";
import Image from 'next/image';
import Link from "next/link";
interface props {
    data: any,
}

export default function Header ({ data }: props) {
  const { user } = useContext(AppContext);

  return (
 <header className="sticky top-0 bg-base-100/80 backdrop-blur shadow z-40">
    <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-3">
      <a className="flex items-center gap-2 shrink-0 " title="WhatLetter hompage" href="/">
          <Image width={30} height={30} src={data.logo} alt="WhatLetter logo" />
          <span className="font-extrabold text-1xl">{data.name}</span>
      </a>
      <div className="flex-1 hidden md:flex items-center justify-start gap-4 lg:gap-12 text-sm">
        {data.links.map((link: any) => {
          return (
            <a key={link.title} className="link link-hover text-base-content-secondary font-medium" href={link.link}>{link.title}</a>
          )
        })}
      </div>
      <div className="space-x-4 hidden md:block">
        <div className="flex justify-center items-center">
          {user === undefined ? (
            <>loading...</>
          ) : (
            <>
              {user ? (
                <>
                  {user.credits && (
                    <a
                      href="/pricing"
                      className="hidden md:block mr-8 font-normal text-gray-800 cursor-pointer"
                    >
                      额度:{" "}
                      <span className="text-primary">
                        {user.credits.left_credits}
                      </span>
                    </a>
                  )}

                  <UserInfo user={user} />
                </>
              ) : (
                <a className="cursor-pointer" href="/sign-in">
                  <Button>登录</Button>
                </a>
              )}
            </>
          )}
          <button className="btn btn-primary bg-teal-400 border-none hover:bg-teal-600 font-bold text-gray-800 tracking-wide lg:text-base hover:text-white h-9 rounded-md px-3 ml-4">
            <Link href="/platform">Get started</Link>
          </button>
        </div>
             
      </div>
    </div>
  </header>   
  );
}
