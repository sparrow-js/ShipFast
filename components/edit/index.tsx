"use client"
import { useEffect, useRef, useState } from "react";
import {main} from '@/engine';
import { useParams, useSearchParams } from 'next/navigation';
import { useDebounceFn } from 'ahooks';
import Spinnerball from "@/components/spinners/Spinnerball";

export default function Edit() {
  const lceContainer = useRef<any>(null);
  const params = useParams<{ pageId: string;}>();
  const SearchParams = useSearchParams();

  const [showLoading, setLoading] = useState<boolean>(false);

  const initFn = useDebounceFn(() => {
    const tryoutData = JSON.parse(SearchParams.get('data') || "{}");
    main(params.pageId, {
      setLoading,
      tryoutData
    });
  }, {
    wait: 300
  });
  

  useEffect(() => {
    if (lceContainer.current) {
      initFn.run();
    }
  }, [lceContainer]);


  return (
    <>
      {showLoading && (
          <Spinnerball />
      )}
      <div ref={lceContainer} id="lce-container" className="min-h-screen h-full"></div>
    </>
  );
}
