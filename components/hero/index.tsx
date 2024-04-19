export default function Hero() {
    return (
        <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
        <div className="py-6 md:order-1 hidden md:block">
                <img src="https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z2mbqjy.webp" alt="Astronaut in the air" sizes="(max-width: 800px) 100vw, 620px" loading="eager" width="520" height="424" decoding="async" />
        </div>
        <div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">AI that builds a website for you.</h1>
            <p className="text-lg mt-4 text-slate-600 max-w-xl">
            Lets ship your next startup super fast! Quickly validate your ideas and have your own website. No code.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="https://web3templates.com/templates/astroship-starter-website-template-for-astro" target="_blank" rel="noopener" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center">
                Generate website
            </a>
            <a href="https://github.com/surjithctly/astroship" rel="noopener" target="_blank" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black  flex gap-1 items-center justify-center">
                <svg viewBox="0 0 24 24" className="text-black w-4 h-4" astro-icon="bx:bxl-github">
                <path fill="currentColor" fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" clipRule="evenodd"></path>
                </svg>GitHub Repo</a>
            </div>
        </div>
        </main>
    )
}