import HomeSite from '@/components/home-site';
import {getWebsiteDashboard} from '@/lib/fetchers/page.fetchers'; 

export default async function Home({ params }: { params: { id: string } }) {
    const dashboard = await getWebsiteDashboard(params.id);
    return (
        <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
            {dashboard.home && (
            <HomeSite
                slug={dashboard.home.slug} 
                subdomain={dashboard.home.site?.subdomain}
                page={dashboard.home}
            />
            )}
        </div>
    )
}