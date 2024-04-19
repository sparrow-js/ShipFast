
interface props {
    data: any,
}

const Features = ({ data }: props) => {

    return (
        <section id="secondary-features" aria-label="Features for building a portfolio" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">{data.title}</h2>
            <p className="mt-2 text-lg text-gray-600">{data.description}</p>
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
                {
                    data.list.map((feature: any) => {
                        return (
                        <li key={feature.title} className="rounded-2xl border border-gray-200 p-8">
                            <span className={`${feature.icon} text-lg text-slate-500`}></span>
                            <h3 className="mt-6 font-semibold text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-gray-700">{feature.description}</p>
                        </li>
                        );
                    })
                }
            </ul>
        </div>
        </section>
    )
}

export default Features;