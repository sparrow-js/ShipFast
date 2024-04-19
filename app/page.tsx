"use client"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Header from "@/components/header";
import { toast } from "sonner";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Footer from '@/components/footer';
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";



export default function Home() {
  const [promptValue, setPromptValue] = useState<string>('');
  const router = useRouter()


  const generatorStorehandler = (generateId: string) => {
    if (!promptValue) {
      toast('enter content');
      return;
    };

    router.push(`http://app.localhost:3000/builder/tryout?data=${JSON.stringify({
      prompt: promptValue,
      generateId
    })}`);

    // http://app.localhost:3000/builder/tryout
    // setLoading(true);
    // fetchEditSchema(promptValue, generateId);
  }

  return (
      <main className="bg-yellow-500">

        <div className="mx-auto px-8">
          <Header />
          <Hero />
          <div className="flex flex-col justify-center items-center mt-28 p-12">
          <h2 className="max-w-[90%] text-center font-bold text-3xl">Try Out</h2>
          <h1 className="max-w-[90%] mb-6">
            <span className="text-xl font-bold">Your Creativity Instantly ⚡, make the first pot of gold.💰</span>
          </h1>
          <div className="max-w-[90%] sm:max-w-lg px-10 py-6 bg-yellow-800 rounded-xl w-full">
            <Textarea
              className="resize-none"
              placeholder="ex.: sell course, Illustrated landing page"
              value={promptValue}
              onChange={(e) => {
                setPromptValue(e.target.value);
              }}
            />
            <div className="mt-2 flex">
              <Button
                className="w-full bg-indigo-800 hover:bg-indigo-900"
                onClick={() => {
                  generatorStorehandler('store')
                }}
              >
                <FaWandMagicSparkles className="mr-2"/>
                <span>store</span>
              </Button>

              <Button
                onClick={() => {
                  generatorStorehandler('landingPage')
                }}
                className="w-full ml-2 bg-pink-800 hover:bg-pink-900"
              >
                <FaWandMagicSparkles className="mr-2"/>
                <span>landing</span>
              </Button>
            </div>
          </div>
        </div>
        </div>
        <Pricing />
        <Footer />
      </main>
  );
}
