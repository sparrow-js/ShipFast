import PageRender from '@/components/page-render';
import {getPageData} from '@/lib/fetchers/page.fetchers';

let styledata: any = {
  mode: 'dark',
  theme: 'blue',
};

export default async function Page({
  params,
}: {
  params: { domain: string; pageId: string };
}) {

    const data = await getPageData(params.domain, params.pageId);

    // const schemaData = await fetchGetPageSchema(pageId);
    if (data && data.schema_data) {
      const schemaData = data.schema_data as any;

      const page = schemaData.componentsTree[0];
      styledata.mode = page.style.mode;
      styledata.theme = page.style.theme;
      return (
        <main className={`min-h-screen h-full ${styledata.mode}`}>
          <div className={`theme-${styledata.theme}`}>
            <PageRender page={page}/>
          </div>
        </main>
      );
    } else {
      return (
        <main className="min-h-screen h-full">
          <div>page error</div>
        </main>
      );
    }
    
}
  