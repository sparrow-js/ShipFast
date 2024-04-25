import {generateStream} from '@/service/generate/stream';
// import {generateStream} from '@/service/stream';

export async function POST(req: Request) {
  // const { messages } = await req.json();
  const stream = new ReadableStream({
      start(controller) {
          // 初始化时可以进行的操作，例如设置计数器
          generateStream('cup shop', controller, {
            id: 'AdvantagesStore',
            schema: 'AdvantagesStoreSchema',
            type: 'schema',
            nodeId: "node_ockzs2vw43712",
            operate: 'fetchIcon'
        }).finally(() => {
            controller.close();
        });
      },
  });

  return new Response(stream);
}
