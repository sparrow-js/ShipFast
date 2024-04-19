"use client";

import { Button } from '@/components/ui/button'


export default function Page({
  params: { domain },
}: {
  params: { domain: string }
}) {

    const handlerTest = async () => {
        try {
            const uri = "/api/get-component-data";
            const params = {
              prompt: 'sell cup',
              data: {
                schema: 'FeatureSchema'
              }
            };
      
            const resp = await fetch(uri, {
              method: "POST",
              body: JSON.stringify(params),
            });
      
            if (resp.ok) {
              const res = await resp.json();
              if (res.data) {
                return;
              }
            }
      
          } catch (e) {
      
            console.log("get user info failed: ", e);
          }
    }

    return (
        <main className={`min-h-screen h-full`}>
          <div>
            <Button onClick={handlerTest}>
                Test
            </Button>
          </div>
        </main>
    );
    
}
  