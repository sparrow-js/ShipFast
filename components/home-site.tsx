"use client"
import { useParams, useSearchParams } from 'next/navigation';

export default function HomeSite(   { 
    slug, 
    subdomain, 
    page 
}: { 
    slug: string, 
    subdomain: string | null | undefined, 
    page: any 
}) {
    const params = useParams<{ id: string;}>();

    return (
<div className="w-full gap-6 px-8 py-8 grid grid-cols-2 max-[400px]:grid-cols-1">
  <a  href={`/${params.id}/website`}>
    <div>
      <div className="flex flex-col bg-white p-4 rounded-2xl group relative before:absolute before:inset-[-1px] before:pointer-events-none before:border before:rounded-2xl before:border-black_e hover:shadow-view-card transition ease-in-out duration-300">
        <div className="w-auto aspect-[5/3] overflow-hidden rounded-lg border bg-slate-300 relative px-4 pt-4" >
          <div className="h-full relative overflow-hidden rounded-t-[6px] bg-white transition ease-in-out duration-300  hover:scale-[1.12] hover:translate-y-[-6px]" >
            <div className="h-full">
            <iframe src={`/preview/${slug}`} frameBorder="0" className="w-full h-full object-cover object-top"></iframe>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full top-0 h-full"></div>
          </div>
        </div>
        <div className="mt-4 flex flex-row">
          <div className="flex flex-1 flex-col mr-2 overflow-hidden">
            <p className="text-xs text-black_3 font-semibold truncate mb-1">home</p>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>
    );
}