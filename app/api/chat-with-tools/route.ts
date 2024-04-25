import {generateStream} from '@/service/generate/stream';
// import {generateStream} from '@/service/stream';

export const runtime = 'edge';
export async function POST(req: Request) {
  const {prompt, data} = await req.json();

  const stream = new ReadableStream({
      start(controller) {
          // 初始化时可以进行的操作，例如设置计数器
          generateStream(prompt, controller, data).finally(() => {
            controller.close();
        });
      },
  });

  return new Response(stream);
}
