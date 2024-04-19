interface props {
  data: any,
}

export default function HeaderLogin ({ data }: props) {
  return (
    <header className="sticky top-0 bg-base-100/80 backdrop-blur shadow z-40">
      <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-3">
        <a className="flex items-center gap-2 shrink-0 " title="WhatLetter hompage" href="/">
            <img width={30} height={30} src={data.logo} alt="WhatLetter logo" />
            <span className="font-extrabold text-1xl">{data.name}</span>
        </a>
        <div className="flex-1 hidden md:flex items-center justify-start gap-4 lg:gap-12 text-sm">
          {data.links.map((link: any) => {
            return (
              <a key={link.title} className="link link-hover text-base-content-secondary font-medium" href={link.link}>{link.title}</a>
            )
          })}
        </div>
        <div className="space-x-4 hidden md:block">
          <button className="btn btn-primary bg-teal-400 border-none hover:bg-teal-600 font-bold text-gray-800 tracking-wide lg:text-base hover:text-white h-9 rounded-md px-3">
            <a href="/#cta">Get started</a>
          </button>
        </div>
      </div>
    </header>
  );
}
