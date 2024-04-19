export default function Footer() {
    return (
    <footer className="bg-base-200">
    <div className="max-w-7xl mx-auto px-4 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a aria-current="page" className="flex gap-2 justify-center md:justify-start items-center" href="/#">
            <img alt="" width="30" height="30"  src="/icon.svg" />
            <strong className="font-semibold tracking-tight text-base md:text-lg">
                Ship·Fast
            </strong>
        </a>
        <p className="mt-3 text-sm text-base-content-secondary">Start your project</p>
        <p className="mt-3 text-sm text-base-content-secondary/80">Copyright &copy; 2024 - All rights reserved</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center">
        {/* <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <div className="footer-title font-medium text-base-content tracking-widest text-sm md:text-left mb-3">
            LINKS
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
            <a href="/blog" className="link link-hover">Blog</a>
        </div>
        </div> */}
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <div className="footer-title font-medium text-base-content tracking-widest text-sm md:text-left mb-3">
            LEGAL
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
            <a href="/tos" className="link link-hover">Terms of services</a>
            <a href="/privacy-policy" className="link link-hover">Privacy policy</a>
        </div>
        </div>
        </div>
        </div>
    </div>
    </footer>
    );
}