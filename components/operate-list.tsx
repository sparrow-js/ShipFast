"use client";

import ScrollContainer from 'react-indiana-drag-scroll'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function OperateList({page, siteId}: {page: any; siteId: string}) {

    return (
<ScrollContainer className="scroll-container flex gap-5  no-scrollbar overflow-x-auto">
  <div>
    <div className="w-73.5 mb-6">
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full flex flex-row justify-center items-center min-h-32">
          <span >
            <Image width={400} height={400} className='max-h-[100px]' alt="Setup Card" title="Domain" src={"http://localhost:3000/cards/card-domain.svg"} decoding="async" data-nimg="intrinsic" /></span>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-900 font-semibold mb-1">Domain</p>
          <p className="text-gray-500 text-sm mb-3">Enhances credibility and brand identity</p>
          <Link href={`/${siteId}/website/domains`}>
            <Button variant="outline">Link Domain</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="w-73.5 mb-6">
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full flex flex-row justify-center items-center min-h-32">
          <span >
            <Image width={400} height={400}  className='max-h-[100px]' alt="Setup Card" title="Publish" src="http://localhost:3000/cards/card-publish.svg" decoding="async" data-nimg="intrinsic" /></span>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-900 font-semibold mb-1">Publish</p>
          <p className="text-gray-500 text-sm mb-3">Make your site accessible to everyone</p>
          <Button variant="outline">Publish website</Button></div>
      </div>
    </div>
  </div>
  <div>
    <div className="w-73.5 mb-6">
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full flex flex-row justify-center items-center min-h-32">
          <span>
              <Image width={400} height={400}  className="max-h-[100px]" alt="Setup Card" title="Generate" src="http://localhost:3000/cards/card-generate.svg" decoding="async" data-nimg="intrinsic" />
          </span>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-900 font-semibold mb-1">Generate</p>
          <p className="text-gray-500 text-sm mb-3">Create a website in 30 seconds</p>
          <div className="flex items-center gap-2 min-h-[38px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="24" height="24" className="icon w-5 h-5 bg-green-500 text-white rounded-full p-1" aria-hidden="true">
              <path fillRule="evenodd" d="M16.7071 5.29289c.3905.39053.3905 1.02369 0 1.41422L8.70711 14.7071c-.39053.3905-1.02369.3905-1.41422 0l-4-4c-.39052-.3905-.39052-1.02368 0-1.41421.39053-.39052 1.02369-.39052 1.41422 0L8 12.5858l7.2929-7.29291c.3905-.39052 1.0237-.39052 1.4142 0Z" clipRule="evenodd"></path>
            </svg>
            <span className="text-green-500 text-xs font-medium">Generated</span></div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="w-73.5 mb-6">
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full flex flex-row justify-center items-center min-h-32">
          <span >
            <Image width={400} height={400}  className='max-h-[100px]' alt="Setup Card" title="Social Media" src="http://localhost:3000/cards/card-social-media.svg" decoding="async" data-nimg="intrinsic" /></span>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-900 font-semibold mb-1">Social Media</p>
          <p className="text-gray-500 text-sm mb-3">Expand reach and boost engagement</p>
          <Button variant="outline">Developing Add social channels</Button></div>
      </div>
    </div>
  </div>
  <div>
    <div className="w-73.5 mb-6">
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full flex flex-row justify-center items-center min-h-32">
          <span >
            <Image width={400} height={400} className='max-h-[100px]' alt="Setup Card" title="Blog" src="http://localhost:3000/cards/card-blog.svg" decoding="async" data-nimg="intrinsic" /></span>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-900 font-semibold mb-1">Blog</p>
          <p className="text-gray-500 text-sm mb-3">Attract and engage your visitors</p>
          <Button variant="outline">Developing Blog</Button>
          {/* <div className="flex items-center gap-2 min-h-[38px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="24" height="24" className="icon w-5 h-5 bg-green-500 text-white rounded-full p-1" aria-hidden="true">
              <path fillRule="evenodd" d="M16.7071 5.29289c.3905.39053.3905 1.02369 0 1.41422L8.70711 14.7071c-.39053.3905-1.02369.3905-1.41422 0l-4-4c-.39052-.3905-.39052-1.02368 0-1.41421.39053-.39052 1.02369-.39052 1.41422 0L8 12.5858l7.2929-7.29291c.3905-.39052 1.0237-.39052 1.4142 0Z" clipRule="evenodd"></path>
            </svg>
            <span className="text-green-500 text-xs font-medium">Added</span>
          </div> */}
          </div>
      </div>
    </div>
  </div>
</ScrollContainer>
    );
}