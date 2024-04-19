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

import Medialector from '@/components/engine-ui/media-selector';
import { useState } from 'react';

export default function ImageIconSelector(
    {
        imageUrl = '',
        onChange,
        prompt,
        type,
        children
    }: {
        imageUrl?: string;
        onChange: (val: string) => void;
        prompt?: string;
        type?: string;
        children?: React.ReactNode
    }) {
    const [curImage, setCurImage] = useState<string>(imageUrl);
    return (
           
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] h-[90%] text-center flex flex-col">
                <DialogHeader>
                    <DialogTitle>Edit Image</DialogTitle>
                </DialogHeader>
                <Medialector prompt={prompt} type={type} onSelect={(image) => {
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
    );
}