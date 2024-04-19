interface props {
    data: any,
}

const Faqs = ({ data }: props) => {
    return (
    <section id="faqs" aria-labelledby="faqs-title" className="border-t border-gray-200 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="faqs-title" className="text-3xl font-medium tracking-tight text-gray-900">{data.title}</h2>
            <p className="mt-2 text-lg text-gray-600">{data.description}
            {
                data.link && (<a href={data.link} className="text-gray-900 underline">reach out to us</a>)
            }.
            </p>
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                {
                    data.list.map((faq: any) => {
                        return (
                            <li key={faq.title}>
                                <h3 className="text-lg font-semibold leading-6 text-gray-900">{faq.title}</h3>
                                <p className="mt-4 text-sm text-gray-700">{faq.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
    )
}

export default Faqs;