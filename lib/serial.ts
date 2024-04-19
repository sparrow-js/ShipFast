export async function serial(queue: any[], callback: (data: any) => void, fn = (p: any[], v: any) => [...p, v], initValue = []) {
    async function asyncReduce (queue: any[], fn: (p: any[], v: any) => any, initData: any[]) {
        let resData = initData;
        for(let i = 0; i < queue.length; i++) {
            const data = await queue[i](resData).then((d: any) => d, (e: any) => e);
            callback(data);
            resData = fn(resData, data);
        }
        return resData;
    }
    return await asyncReduce(queue, fn, initValue);
}