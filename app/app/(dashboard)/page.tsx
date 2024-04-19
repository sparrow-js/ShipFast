
import { Suspense } from "react";
import PlaceholderCard from "@/components/placeholder-card";
import {getUserPageList} from '@/service/page';
import Link from 'next/link';
import {Button}  from "@/components/ui/button";
import Sites from "@/components/sites";
import CreateSite from '@/components/create-site';

export default async function AllSites({ params }: { params: { id: string } }) {

  return (
    <div className="flex flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between">
          <div className="flex items-center justify-between">
            <h1 className="font-cal text-3xl font-bold dark:text-white">
              Sites
            </h1>
          </div>
          <CreateSite />
        </div>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <PlaceholderCard key={i} />
              ))}
            </div>
          }
        >
          <Sites limit={10} />
        </Suspense>
      </div>
    </div>
  );
}


