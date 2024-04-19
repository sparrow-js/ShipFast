interface props {
    data: any
}

export default function MarketHeader({data}: props) {
    return (
        <nav className="flex justify-between items-center pb-6 px-6">
            <div className="text-lg">
                {data.name}
            </div>
            <div className="flex items-center">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Home</button>
                <div className="relative inline-block text-left dropdown ml-2">
                    <span className="rounded-md shadow-sm">
                        <a className="" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                        Know us better <i className="fas fa-chevron-down ml-2"></i>
                        </a>
                    </span>
                </div>
                <button className="ml-8">
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </div>
        </nav>
    )
}