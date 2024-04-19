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

import { useEffect, useState } from 'react';
import { computed, engineConfig, globalContext } from '@/engine/editor-core';


export default function MaterialPanel({open, setOpen}: {open:  boolean, setOpen: (open: boolean) => void}) {

    const [snippets, setSnippets] = useState<any[]>([]);

    useEffect(() => {
        if (open) {
            const { material, common, project, event } = window.AliLowCodeEngine || {};

            const {components} = material.getAssets() || {};
            const snippets = components.reduce((list: any, component: any) => {
                if (component.category === 'maker') {
                    const {snippets} = component;
                    list = list.concat(snippets);
                }
                return list;
            }, []);
            setSnippets(snippets);
        }
    }, [open]);

    const insertSection = (snippet: any) => {
        const editor = globalContext.get('editor');
        const designer = editor.get('designer');
        const nodes =  designer.project.currentDocument.selection.getNodes();
        if (!nodes || !nodes.length) return;
    
        const node = nodes[0];
        const { document: doc, parent, index } = node;
        if (parent) {
          const skeleton = editor.get('skeleton');
          skeleton.setVisibleMaterial(true);
         
          const newNode = doc.insertNode(parent, snippet.schema, index + 1, true);
          newNode.select();
          const { isRGL, rglNode } = node.getRGL();
          if (isRGL) {
            // 复制layout信息
            let layout = rglNode.getPropValue('layout') || [];
            let curLayout = layout.filter((item: any) => item.i === node.getPropValue('fieldId'));
            if (curLayout && curLayout[0]) {
              layout.push({
                ...curLayout[0],
                i: newNode.getPropValue('fieldId'),
              });
              rglNode.setPropValue('layout', layout);
              // 如果是磁贴块复制，则需要滚动到影响位置
              setTimeout(() => newNode.document.simulator?.scrollToNode(newNode), 10);
            }
          }
        }
        setOpen(false);
    }
    
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[800px] h-[90%] text-center flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                    </DialogHeader>
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 max-h-120 md:max-h-90 lg:max-h-90 xl:max-h-120 pt-0.5 pb-6 px-4 md:px-6 lg:pr-3 overflow-y-scroll text-left">
                            {
                                snippets.map((snippet) => {
                                    return (
                                        <div 
                                            key={snippet.schema.componentName}
                                            className="group relative flex items-center h-32 gap-4 border border-gray-300 p-4 rounded-md ring-0 ring-indigo-700 cursor-pointer transition-all hover:ring-1 hover:border-indigo-700 hover:shadow-md"
                                            onClick={() => {
                                                insertSection(snippet);
                                            }}
                                        >
                                            <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <p className="text-sm font-semibold group-hover:text-indigo-700">{snippet.title}</p></div>
                                            <p className="text-sm mb-2 text-gray-500">{snippet.description}</p>
                                            <p className="text-xs font-medium text-gray-800 capitalize">By pagemaker</p></div>
                                            <div className="flex-shrink-0 self-center relative w-20 h-20">
                                            <span>
                                                <img alt="Text" src={snippet.screenshot} decoding="async" data-nimg="intrinsic" className="rounded" /></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>                  
            </Dialog>
        </div>
    );
}