import {Button} from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import page from '@/engine/universal/page';


import Medialector from '@/components/engine-ui/media-selector';
import { useState } from 'react';

export default function ImageSelector(
    {
        imageUrl = '',
        onChange,
        type,
        children
    }: {
        imageUrl?: string;
        type?: string;
        onChange: (val: string) => void;
        children?: React.ReactNode
    }) {
    const [curImage, setCurImage] = useState<string>(imageUrl);
    return (
        <ul className="flex flex-wrap gap-4 divide-gray-200">
            <li className="flex flex-col w-full h-60 border rounded-md overflow-hidden backdrop-blur-none">
                <div className="relative w-full h-full overflow-hidden">
                <span>
                    <img width={200} height={200} alt="selected picture" src={imageUrl} />
                </span>
                </div>
                <div className="flex justify-between gap-2 p-2 bg-white">
                <Dialog>
                    <DialogTrigger asChild>
                
                        {children}
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] h-[90%] text-center flex flex-col">
                        <DialogHeader>
                            <DialogTitle>Edit Image</DialogTitle>
                        </DialogHeader>
                        <Medialector prompt={page.getData().prompt} type={type} onSelect={(image) => {
                            setCurImage(image);
                        }}/>
                        <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={() => {
                                if (curImage) {
                                    onChange(curImage)
                                }
                            }}>Insert</Button>
                        </DialogClose>
                        
                        </DialogFooter>
                    </DialogContent>                  
                </Dialog>
         
                <Button size='icon' variant="ghost" className="danger">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" className="icon h-4 w-4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 7-.8673 12.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224c-1.04928 0-1.92016-.8109-1.99492-1.8575L5 7m5 4v6m4-6v6m1-10V4c0-.55228-.4477-1-1-1h-4c-.55228 0-1 .44772-1 1v3M4 7h16"></path>
                    </svg>
                </Button>
                </div>
            </li>
        </ul>
    );
}