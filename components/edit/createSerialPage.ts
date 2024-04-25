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
const textDecoder = new TextDecoder('utf-8');

function getStreamTask (data: any, prompt: string, isTest: boolean = false) {
    return function (prevData: any[]) {
        let lastRes: any = null;
        return new Promise((resolve) => {
            const params = {
                prompt,
                data
            };
            fetch("/api/chat-with-tools", {
                method: "POST",
                body: JSON.stringify(params),
              })
              // Retrieve its body as ReadableStream
              .then((response: any) => {
                const reader = response.body.getReader();
                return new ReadableStream({
                  start(controller) {
                    // resolve(1);
                     const pump = () => {
                      return reader.read().then(({ done, value }: { done: boolean; value: Uint8Array }) => {
                        const decodeValue = textDecoder.decode(value);
                        if (decodeValue){
                            lastRes = JSON.parse(decodeValue);
                        }
                        // When no more data needs to be consumed, close the stream
                        if (done) {
     
                          resolve({
                            data: lastRes,
                            params
                          })
                          controller.close();
                          return;
                        }
                        // Enqueue the next data chunk into our target stream
                        controller.enqueue(value);
                        return pump();
                      });
                    }
                    return pump();

                  },
                });
              });
        })
       
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

export async function createTrySerialPage(sectionList: any[], prompt: string) {
    const taskList = sectionList.reduce((prev, cur) => {
        prev.push(getStreamTask(cur, prompt, true));
        return prev;
    }, [])
    return serial(taskList, (res) => {
        const {data, params} = res;
        if (data) {
            updateSectionData(params.data.nodeId, data);
        }
    })
}