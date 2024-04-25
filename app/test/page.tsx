"use client";

import { Button } from '@/components/ui/button'
const textDecoder = new TextDecoder('utf-8');
export default function Page({
  params: { domain },
}: {
  params: { domain: string }
}) {

    const handlerTest = async () => {
      fetch("/api/chat-with-tools", {
        method: "POST",
      })
      // Retrieve its body as ReadableStream
      .then((response: any) => {
        const reader = response.body.getReader();
        return new ReadableStream({
          start(controller) {
            return pump();
            function pump(): any {
              return reader.read().then(({ done, value }: { done: boolean; value: Uint8Array }) => {
                // When no more data needs to be consumed, close the stream
                if (done) {
                  controller.close();
                  return;
                }
                // Enqueue the next data chunk into our target stream
                controller.enqueue(value);
                return pump();
              });
            }
          },
        });
      });
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
  