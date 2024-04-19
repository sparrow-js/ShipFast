"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User } from "@/types/user";

interface Props {
  user: User;
}

export default function UserInfo ({ user }: Props) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user.avatar_url} alt={user.nickname} />
          <AvatarFallback>{user.nickname}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-4">
        <DropdownMenuLabel className="text-center truncate">
          {user.nickname ? user.nickname : user.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator className="md:hidden" />

        <DropdownMenuCheckboxItem className="md:hidden">
          <a href="/pricing">价格</a>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator className="md:hidden" />

        <DropdownMenuCheckboxItem>
        
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
