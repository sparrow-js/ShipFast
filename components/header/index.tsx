import { Badge } from "@/components/ui/badge"

export default function Header() {
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center py-5">
            <div className="flex w-full lg:w-auto items-center justify-between">
                <a href="/" className="text-lg flex items-center">
                    <img className="w-[32px] mr-2" src="/icon.svg" />
                    <span className="text-slate-800">Ship.Fast</span>
                    <Badge className="ml-2">beta</Badge>
                </a>
                <div className="block lg:hidden">
                <button id="astronav-menu" aria-label="Toggle Menu">
                    <svg fill="currentColor" className="w-4 h-4 text-gray-800" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Toggle Menu</title>
                    <path className="astronav-close-icon astronav-toggle hidden" fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
                    <path className="astronav-open-icon astronav-toggle" fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
                    </svg>
                </button>
                </div>
            </div>
            <nav className="astronav-items astronav-toggle w-full lg:w-auto mt-2 lg:flex lg:mt-0 hidden">
                <ul className="flex flex-col lg:flex-row lg:gap-3">
                <li>
                    <a href="/#pricing" className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900">
                    <span>Pricing</span></a>
                </li>
                {/* <li>
                    <a href="/about" className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900">
                    <span>About</span></a>
                </li>
                <li>
                    <a href="/blog" className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900">
                    <span>Blog</span></a>
                </li> */}
                <li>
                    <a href="mailto:sparrowwht7@gmail.com" className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900">
                    <span>Contact</span></a>
                </li>
                </ul>
                <div className="lg:hidden flex items-center mt-3 gap-4">
                <a href="#" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200   border-2 border-transparent">Log in</a>
                <a href="#" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent">Sign up</a></div>
            </nav>
            <div>
                <div className="hidden lg:flex items-center gap-4">
                <a href="http://app.localhost:3000/sign-in">Sign In</a>
                <a href="http://app.localhost:3000" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent">Build site</a></div>
            </div>
        </header>
    )
}