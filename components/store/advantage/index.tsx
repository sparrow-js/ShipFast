import classNames from "classnames";
interface props {
  data: any
}

export default function MarketAdvantage({data}: props) {
    return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data && data.list.map((advantage: any) => {
          return (
            <div key={advantage.title} className="flex flex-col items-center text-center">
              <i className={classNames(`${advantage.icon} text-4xl mb-4`)}></i>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          );
        })}
      </div>
    </div>
    )
}