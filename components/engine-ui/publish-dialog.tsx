import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from '@/components/ui/button';
import page from '@/engine/universal/page';
import { useState } from "react";
import { material, project } from '@/engine/engine';
import {toast} from 'sonner';
import LoadingDots from "@/components/icons/loading-dots";


export default function PublishDialog({pageId}: {pageId: string}) {
    const [submain, setSubmain] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);
    const fetchEditSchema = async function (schema: any) {
        try {
          setPending(true);
          const uri = "/api/publish-page";
          const params = {
            data: {
              id: page.getData().slug,
              schema_data: schema,
            }
          };
    
          const resp = await fetch(uri, {
            method: "POST",
            body: JSON.stringify(params),
          });
    
          setPending(false);
          if (resp.ok) {
            const res = await resp.json();
            console.log("get page result: ", res);
            if (res.data) {
              setIsOpen(false);
              toast.success('saved!')
              return;
            } else {
            }
    
          }
    
        } catch (e) {
          console.log("failed: ", e);
        }
      };

    const handlerPublish = () => {
        const schema = project.exportSchema();
        fetchEditSchema(schema)
        // const res = await publishPage({
        //     id: page.getData().id,
        //     schema,
        // })
    }
    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open);
            const {site} = page.getData();
            if (site && submain === '') {
                setSubmain(site.subdomain);
            }
        }}>
          <DialogTrigger asChild>
            <Button
              disabled={pageId === 'tryout' ? true : false} 
              className="h-[28px] rounded-[3px]" variant={'outline'} size={'sm'}>publish</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Publish</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="flex w-full max-w-md">
                    <input
                        disabled
                        className="p-2 z-10 flex-1 rounded-l-md border border-stone-300 text-sm text-stone-900 placeholder-stone-300 focus:border-stone-500 focus:outline-none focus:ring-stone-500 dark:border-stone-600 dark:bg-black dark:text-white dark:placeholder-stone-700"
                        value={submain}
                        onChange={(e) => {
                            setSubmain(e.target.value);
                        }}
                    />
                    <div className="flex items-center rounded-r-md border border-l-0 border-stone-300 bg-stone-100 px-3 text-sm dark:border-stone-600 dark:bg-stone-800 dark:text-stone-400">
                        {process.env.NEXT_PUBLIC_ROOT_DOMAIN}
                    </div>
                </div>
            </div>
            <DialogFooter>
                {
                    pending ? (
                        <Button>
                            <LoadingDots color="#808080"/>
                        </Button>
                        
                    ) : (
                        <Button
                            onClick={handlerPublish}
                        >Publish</Button>
                    )
                }
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
}