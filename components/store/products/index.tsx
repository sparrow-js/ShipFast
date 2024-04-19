import { useEffect, useState } from "react"
import classNames from "classnames";

interface props {
  data: any,
}

interface Category {
  label: string;
  value: string;
}

export default function MarketProducts({data}: props) {
    const [categorys, setCategorys] = useState<Category[]>([]);
    const [products, setProducts] = useState<any[]>(data.list);
    const [categoryName, setCategoryName] = useState<string>('all');

    useEffect(() => {
      if (data && data.list) {
        const categoryList = data.list.reduce((prev: Array<Category>, cur: any) => {
          const {category} = cur;
          if (category && category.name) {
            if (!prev.find(item => item.value === category.name)) {
              prev.push({
                label: category.name,
                value: category.name,
              })
            }
          }
          return prev;
        }, []);
        setCategorys(categoryList);
        setProducts(data.list);
      }
    }, [data]);


    const categoryHandler = (categoryName: string) => {
      if (categoryName === 'all') {
        setProducts(data.list);
      } else {
        const list = data.list.filter((item: any) => {
          return item && item.category && item.category.name === categoryName;
        });
        setProducts(list);
      }
      setCategoryName(categoryName)
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold my-8">All products</h1>
                <div className="flex space-x-4 mb-8">
                  <button 
                    key="all" 
                    className={classNames(
                      "rounded-full border border-primary px-4",
                      {
                        "bg-primary text-primary-foreground": categoryName === 'all'
                      }
                    )}                    onClick={() => {
                      categoryHandler('all')
                    }}
                  >
                    ALL
                  </button>
                  {
                    categorys && categorys.map((category: any) => {
                      return (
                        <button 
                          key={category.value} 
                          className={classNames(
                            "rounded-full border border-primary px-4",
                            {
                              "bg-primary text-primary-foreground": categoryName === category.value
                            }
                          )}
                          onClick={() => {
                            categoryHandler(category.value)
                          }}
                        >
                          {category.value}
                        </button>
                      )
                    })
                  }
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {products && products.map((product: any) => (
                    <div key={product.name} className="p-4 border rounded-lg">
                        <img src={product.image} alt={`Packaging of ${product.name}`} className="mb-4" />
                        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                        <p className="text-xl font-bold mb-4">{product.price}</p>
                        <a href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">More info <i className="fas fa-chevron-right"></i></a>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}    