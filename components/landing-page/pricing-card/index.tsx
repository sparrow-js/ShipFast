import { toast } from "sonner";

function CyanSelectedIcon () {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-teal-400">
            <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
            <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
        </svg>
    )
}

function WhiteSelectedIcon () {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-white">
            <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
            <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
        </svg>
    )
}

interface props {
    user: any;
    data: any;
}
  

const PricingCard = ({user, data}: props) => {
    const purchase = async () => {
        if (!user || !user.uuid) {
          toast.error("Please login first");
          return;
        }
        try {
            const params = {
                userId: user.userId,
                type: 'single',
              };
    
            const resp = await fetch("/api/payment/subscribe", {
              method: "POST",
              body: JSON.stringify(params),
            });
      
            if (resp.ok) {
              const res = await resp.json();
              window.location.href = res.data.url;
            }
    
    
        } catch (e) {
          console.log(e);
        }
    };

    return (
        <section id="pricing" aria-labelledby="pricing-title" className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 id="pricing-title" className="text-3xl font-medium tracking-tight text-gray-900">{data.title}</h2>
                    <p className="mt-2 text-lg text-gray-600">{data.description}</p>
                </div>
                <div className="relative flex flex-col md:flex-row items-center md:items-stretch gap-8 mx-auto mt-16 sm:mt-20 max-w-3xl">
                    {data.cards.map((card: any)  => {
                        if (!card.priority) {
                            return (
                            <section key={card.description} className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white w-full">
                                <h3 className="flex items-center text-sm font-semibold text-gray-900">
                                <svg viewBox="0 0 40 40" aria-hidden="true" className="h-6 w-6 flex-none fill-gray-500">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
                                </svg>
                                </h3>
                                <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
                                    <span aria-hidden="false" className="transition duration-300">{card.price}</span>
                                </p>
                                <p className="mt-3 text-sm text-gray-700">{card.description}</p>
                                <div className="order-last mt-6">
                                <ul role="list" className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
                                    {
                                        card.features.map((feature: any) => {
                                            return (
                                                <li key={feature} className="flex py-2">
                                                <CyanSelectedIcon />
                                                <span className="ml-4">{feature}</span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                </div>
                                <button 
                                    className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6" 
                                    color="gray" 
                                    aria-label="Get started with the Investor plan for [object Object]"
                                    onClick={purchase}
                                >Subscribe</button>
                            </section>
                            )
                        } else {
                            return (
                            <section key={card.description} className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 order-first bg-gray-900 lg:order-none w-full">
                                <h3 className="flex items-center text-sm font-semibold text-white">
                                    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-6 w-6 flex-none fill-teal-500">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
                                    </svg>
                                </h3>
                                <p className="relative mt-5 flex text-3xl tracking-tight text-white">
                                <span aria-hidden="false" className="transition duration-300">{card.price}</span>
                                </p>
                                <p className="mt-3 text-sm text-gray-300">{data.description}</p>
                                <div className="order-last mt-6">
                                    <ul role="list" className="-my-2 divide-y text-sm divide-gray-800 text-gray-300">
                                        {
                                            card.features.map((feature: any) => {
                                                return (
                                                    <li key={feature} className="flex py-2">
                                                        <WhiteSelectedIcon />
                                                        <span className="ml-4">{feature}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <a className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-teal-400 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-teal-600 active:text-white/80 before:transition-colors mt-6" color="cyan" aria-label="Get started with the VIP plan for [object Object]" href="/register">Subscribe</a>
                            </section>
                            )
                        }
                    })}        
                </div>
            </div>
        </section>
    )
}
export default PricingCard;