interface props {
    data: any,
}

export default function Hero({ data }: props) {

  return (
    <div id="hero">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="mb-10">
                <div className="inline-block rounded-full py-1.5 px-3 text-sm text-center leading-6 border">{data.announcement}</div></div>
            <h1 className="max-w-2xl mx-auto text-4xl font-bold tracking-tight sm:text-6xl">{data.title}</h1>
            <div className="max-w-3xl mx-auto mt-6 text-lg leading-8">{data.description}</div>
            <div className="mt-10">
                <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <a className="py-2 px-4 rounded-md font-medium bg-teal-600 text-white hover:bg-teal-500" href={data.action.link}>{data.action.title}</a>
                </ul>
            </div>
            </div>
            <div className="mt-16 sm:mt-28 lg:mt-0 lg:flex-shrink-0 lg:flex-grow z-10">
            <div className="absolute pointer-events-none w-[420px] h-[420px] top-1/2 left-1/2 blur-[80px] rounded-[50%] z-10"></div>
                <img width={300} height={300} src={data.image} alt={data.title} />
            </div>
        </div>
    </div>
  ); 
}