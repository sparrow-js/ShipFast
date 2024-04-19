import WebsiteNav from './nav';
import { ReactNode, Suspense } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
  
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <WebsiteNav />
      <div className="flex flex-col space-y-6">{children}</div>
    </div>
  );
}
