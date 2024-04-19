import {serial} from '@/lib/serial';
import { globalContext} from '@/engine/editor-core';
import { Designer } from '@/engine/designer';

function updateSectionData(nodeId: string, data: any) {
    const editor = globalContext.get('editor');
    const designer = editor.get('designer') as Designer;
    const node = designer.currentDocument?.getNode(nodeId);
    if (node) {
        // designer.project.simulator?.scrollToNode(node)
        node.props.setPropValue('data', data);
    }
}

function scrollToNode (nodeId: string) {
    const editor = globalContext.get('editor');
    const designer = editor.get('designer') as Designer;
    const node = designer.currentDocument?.getNode(nodeId);
    if (node) {
        designer.project.simulator?.scrollToNode(node)
    }
}

function getTask (data: any, prompt: string, isTest: boolean = false) {
    return async function (prevData: any[]) {
        try {
            const uri = isTest ? '/api/get-try-component-data' : "/api/get-component-data"
            const params = {
                prompt,
                data
            };
            setTimeout(() => {
                scrollToNode(data.nodeId);
            }, 500);
      
            const resp = await fetch(uri, {
              method: "POST",
              body: JSON.stringify(params),
            });
      
            if (resp.ok) {
              const res = await resp.json();
              if (res.data) {
                return {
                    data: res.data,
                    params
                };
              }
            }
      
          } catch (e) {
            console.log("get failed: ", e);
            return e;
          } 
    }
}

export default async function createSerialPage(sectionList: any[], prompt: string) {
    const taskList = sectionList.reduce((prev, cur) => {
        prev.push(getTask(cur, prompt));
        return prev;
    }, [])
    return serial(taskList, (res) => {
        const {data, params} = res;
        if (data) {
            updateSectionData(params.data.nodeId, data);
        }
    })
}

export  async function createTrySerialPage(sectionList: any[], prompt: string) {
    const taskList = sectionList.reduce((prev, cur) => {
        prev.push(getTask(cur, prompt, true));
        return prev;
    }, [])
    return serial(taskList, (res) => {
        const {data, params} = res;
        if (data) {
            updateSectionData(params.data.nodeId, data);
        }
    })
}