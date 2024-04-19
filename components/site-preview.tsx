import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function SitePreview(
    { 
        slug, 
        subdomain, 
        page 
    }: { 
        slug: string, 
        subdomain: string | null | undefined, 
        page: any 
    }) {
    return (
        <div className="rounded-lg bg-white shadow-md">
        <div className="p-6">
            <Link target="_blank" href={`//${subdomain}.localhost:3000`} className="font-bold">{`${subdomain}.localhost:3000`} </Link></div>
        <div className="relative z-5 w-full h-90 bg-gray-200 block">
            <div className="absolute inset-0 opacity-0 z-20"></div>
            <div className="overflow-hidden w-full h-90 relative z-10">
            <span className="absolute z-10 bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-teal-100"></span>
            <iframe src={`/preview/${slug}`} frameBorder="0" className="h-96" style={
                {
                    "width": "calc(100% + 16px)"
                }
            }></iframe>
            </div>
        </div>
        <div className="flex flex-row flex-nowrap justify-between items-center w-full p-6">
            <div className="flex gap-2 items-center text-sm">
            {
                page.published ? (
                    <>
                    <span className="w-4 h-4 rounded-full bg-green-400"></span>
                    <span>Website is published</span>
                    </>
                ) : (
                    <>
                        <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                        <span>Website is
                            <a className="text-blue-600" href="/website/settings">unpublished</a>
                        </span>
                    </>

                )
            }
            </div>
            <div>
                <Link target="_blank"  href={`/preview/${slug}`}>
                    <Button>Preview</Button>
                </Link>
                <Link target="_blank"  href={`/builder/${slug}`}>
                    <Button className="ml-2">Edit</Button>
                </Link>
            </div>
        </div>
        </div>
    )
}