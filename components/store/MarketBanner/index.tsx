interface props {
  data: any,
}

const MarketBanner = ({ 
  data, 
  ...props
}: props) => {
    return (
      <div 
        className="flex flex-col items-center justify-center h-[350px] bg-cover bg-center mb-6 text-white" style={{ backgroundImage: `url('${data.image}')` }}
        {...props}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">{data.slogan}</h1>
          <p className="mb-6 text-lg">
            {
              data.description
            }
          </p>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Shop Now <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    )
}
export default MarketBanner;