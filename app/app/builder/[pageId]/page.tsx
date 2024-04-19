"use client"

import dynamic from "next/dynamic";
import { AssetLoader } from '@/engine/utils';
import { useEffect } from "react";
import { useDebounceFn } from 'ahooks';


const Edit = dynamic(
  async () => (await import("@/components/edit/index")),
  {
    ssr: false,
  },
)

let first = true;
export default function Home() {

  const loaderScript = () => {
    if (first === false) return;
    if (first) {
      first = false;
    }
    const assetLoader =  new AssetLoader();
    assetLoader.load([
      'https://g.alicdn.com/code/lib/react/16.13.1/umd/react.production.min.js',
      'https://g.alicdn.com/code/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
      'https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js',
      'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
      'https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'
    ])
  }

  const initFn = useDebounceFn(() => {
    loaderScript();
  }, {
    wait: 300
  });

  useEffect(() => {
    initFn.run();
  }, [])

  return (
    <main className="min-h-screen h-full">
      <Edit />
    </main>
  );
}
