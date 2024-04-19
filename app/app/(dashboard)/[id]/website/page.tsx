import { Suspense } from "react";
import PlaceholderCard from "@/components/placeholder-card";
import {getUserPageList} from '@/service/page';
import Link from 'next/link';
import SitePreview from '@/components/site-preview';
import {getWebsiteDashboard} from '@/lib/fetchers/page.fetchers'; 
import OperateList from '@/components/operate-list';
export default async function Website({ params }: { params: { id: string } }) {
  const dashboard = await getWebsiteDashboard(params.id);
  return (
      <div className="flex flex-col space-y-6">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <PlaceholderCard key={i} />
              ))}
            </div>
          }
        >
          <OperateList 
            page={dashboard.home}
            siteId={params.id}
          />
        </Suspense>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <PlaceholderCard />
            </div>
          }
        >
        {dashboard.home && (
          <div>
            <SitePreview 
              slug={dashboard.home.slug} 
              subdomain={dashboard.home.site?.subdomain}
              page={dashboard.home}
            ></SitePreview>
          </div>
        )}
        </Suspense>
      </div>
  );
}
