interface props {}

export default function MarketCategorys({}: props) {
    return (
    <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="group relative">
            <img src="https://mars-images.imgix.net/1703622975022.1703622973515-08013448811600294jpg.png?auto=compress&w=1200&fit=max&w=700" alt="Ground Coffee in a jar with a spoon" className="rounded-lg absolute top-0 left-0 w-full h-full object-cover z-0" />
            <div className="relative inset-0 bg-black bg-opacity-25 flex justify-center items-center rounded-lg group-hover:bg-opacity-50 transition duration-300 ease-in-out h-[240px]">
              <div>
                <h2 className="text-white text-3xl font-semibold mb-4">Ground Coffee</h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="group relative">
            <img src="https://mars-images.imgix.net/1703623007281.1703623005398-06373108449230831jpg.png?auto=compress&w=1200&fit=max&w=700" alt="Roasted Coffee Beans close-up" className="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
            <div className="relative inset-0 bg-black bg-opacity-25 flex justify-center items-center rounded-lg group-hover:bg-opacity-50 transition duration-300 ease-in-out h-[240px]">
              <div>
                <h2 className="text-white text-3xl font-semibold mb-4">Roasted Coffee Beans</h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Shop Now</button>
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src="https://mars-images.imgix.net/1703623040868.1703623039205-06336562906721581jpg.png?auto=compress&w=1200&fit=max&w=700" alt="Whole Coffee Beans in a transparent jar" className="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
            <div className="relative inset-0 bg-black bg-opacity-25 flex justify-center items-center rounded-lg group-hover:bg-opacity-50 transition duration-300 ease-in-out h-[240px]">
              <div>
                <h2 className="text-white text-3xl font-semibold mb-4">Whole Coffee Beans</h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}