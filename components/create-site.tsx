"use client";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiMagicLamp } from "react-icons/gi";
import { Textarea } from "@/components/ui/textarea"
import {Label} from '@/components/ui/label';
import {Button}  from "@/components/ui/button";
import { toast } from "sonner";

import { useState, useEffect } from "react";
import Spinnerball from "@/components/spinners/Spinnerball";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {realistic} from '@/lib/Confetti'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import Spinner from "@/components/Spinner";

export default function CreateSite() {
    const [showLoading, setLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [createData, setCreateData] = useState<{
      prompt: string;
      name: string;
      subdomain: string;
    }>({
      prompt: '',
      name: '',
      subdomain: '',
    })
    const router = useRouter()


    const generatorStorehandler = (generateId: string) => {
        if (!createData.prompt) {
            toast('enter content');
            return;
        };
        setIsOpen(false);
        setLoading(true);
        fetchEditSchema(generateId);
    }

    const fetchEditSchema = async function (generateId:string) {
        try {
          const uri = "/api/gen-site-page";
          const params = {
            data: createData,
            generateId
          };
    
    
          setLoading(true);
          const resp = await fetch(uri, {
            method: "POST",
            body: JSON.stringify(params),
          });
          setLoading(false);
    
          if (resp.ok) {
            const res = await resp.json();
            console.log("get page result: ", res);
            if (res.data) {
              Promise.all([
                realistic(),
                realistic()
              ]).then(() => {
                router.refresh();
                window.open(`/preview/${res.data.page.slug}`, '_blank');
              })
              return;
            } else {
              toast.error(res.message);
            }
    
          }
    
        } catch (e) {
          console.log("get wallpapers failed: ", e);
        }
      };

    return (
        <>
        {showLoading && (
            <div className="fixed left-1/2 top-1/2 w-10	h-10">
              <Spinner />
            </div>
        )}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Create new Site</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create new Site</DialogTitle>
              {/* <DialogDescription>
                Create new Site                
              </DialogDescription> */}
            </DialogHeader>
            <div className="relative flex flex-col space-y-4 p-5 md:p-10">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">
                Site Name
              </Label>
              <Input
                id="name"
                value={createData.name}
                onChange={(e) => {
                  setCreateData((s) => ({
                    ...s,
                    name: e.target.value
                  }))                  
                }}
                className="col-span-3"
              />
            </div>

            {/* <div className="flex flex-col space-y-2">
              <Label htmlFor="name">
                Subdomain
              </Label>
              <div className="flex w-full max-w-md">
                <Input
                  id="subdomain"
                  value={createData.subdomain}
                  onChange={(e) => {
                    setCreateData((s) => ({
                      ...s,
                      subdomain: e.target.value
                    }))                  
                  }}
                  maxLength={32}
                  className="col-span-3 w-full"
                />
                <div className="flex items-center rounded-r-lg border border-l-0 border-stone-200 bg-stone-100 px-3 text-sm dark:border-stone-600 dark:bg-stone-800 dark:text-stone-400">
                  .{process.env.NEXT_PUBLIC_ROOT_DOMAIN}
                </div>
              </div>
            </div> */}

            <div className="">
                <Label htmlFor="name" className="text-right">
                  Type Of Site
                </Label>
                <Textarea
                  className="resize-none mt-2"
                  placeholder="ex.: sell course, Illustrated landing page"
                  value={createData.prompt}
                  onChange={(e) => {
                    setCreateData((s) => ({
                      ...s,
                      prompt: e.target.value
                    }))
                  }}
                />
            </div>
            </div>
            <DialogFooter>
            <div className="mt-2 flex">
                <Button
                    className="w-full bg-indigo-800 hover:bg-indigo-900"
                    onClick={() => {
                    generatorStorehandler('store')
                    }}
                >
                    <FaWandMagicSparkles className="mr-2"/>
                    <span>store</span>
                </Button>

                <Button
                    onClick={() => {
                    generatorStorehandler('landingPage')
                    }}
                    className="w-full ml-2 bg-pink-800 hover:bg-pink-900"
                >
                    <GiMagicLamp className="mr-2"/>
                    <span>landing</span>
                </Button>
                </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </>
       
    )
}