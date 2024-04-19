import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import LoadingDots from "@/components/icons/loading-dots";

const iconList = [
  {
    label: 'Icons',
    value: 'icon'
  }
]

const imageList = [
  {
    label: 'Unsplash',
    value: 'unsplash'
  },
  {
    label: 'Shutterstock',
    value: 'shutterstock'
  }
]

export default function ImageSelector(
  { 
    type,
    prompt = '',
    onSelect
  }: {
    type?: string; 
    prompt?: string;
    onSelect: (image: string) => void
  }) {
    const [list, setList] = useState<any[]>([]);
    const [curPrompt, setCurPrompt] = useState<string>(prompt);
    const [searchPending, setSearchPending] = useState<boolean>(false)
    
    const [data, setData] = useState<{
      page: number;
      per_page: number;
      total_count: number;
      from: number;
      to: number;
      id: string;
      image: string;
      type?: string;
    }>({
      page: 1,
      per_page: 10,
      total_count: 0,
      from: 1,
      to: 10,
      id: '',
      image: '',
      type: type || 'unsplash'
    });

    const fetchImageInfo = async function (prompt: string) {
      try {
        const uri = "/api/get-image-info";
        const params = {
          type: data.type,
          prompt: prompt
        };
        setSearchPending(true);
        const resp = await fetch(uri, {
          method: "POST",
          body: JSON.stringify(params),
        });
        
  
        setSearchPending(false);
    
        if (resp.ok) {
          const res = await resp.json();
          if (res.data) {
            setList(res.data.images);
            setData((prev) => {
              const cur = {...prev};
              cur.total_count = res.data.total_count;
              cur.from = (data.page - 1) * data.per_page + 1;
              cur.to = data.page * data.per_page;
              return cur;
            })
          }
        }
    
      } catch (e) {
        setSearchPending(false);
        console.log("get images failed: ", e);
      }
    };

    useEffect(() => {
      fetchImageInfo(curPrompt);
    }, [
      data.page,
      data.type
    ]);

    const handlerSelect = (item:any) => {
      let id = '';
      let image = '';
      if (data.id !== item.id) {
        id = item.id;
        image = item.url;
      }
      setData((prev) => {
        const cur = {...prev};
        cur.id = id;
        cur.image = image;
        return cur;
      });

      onSelect(image)
    }

    const searchImage = () => {
      fetchImageInfo(curPrompt);
    }

    return (
        <>
            <nav className="flex items-center mt-2 md:mt-4 xs:space-x-0 sm:space-x-4 flex-wrap" aria-label="Tabs">
              {
                type === 'icon' ? (
                  <>
                  {
                    iconList.map((item) => {
                      return (
                        <button 
                          key={item.value}
                          className={cn(
                            "px-3 py-2 font-medium text-sm rounded-md m-0",
                            {
                              "bg-indigo-100 text-indigo-700": data.type === item.value,
                              "text-gray-500 hover:text-gray-700": data.type !== item.value,
                            }
                          )}
                        >{item.label}</button>
                      )
                    })
                  }
                  </>
                ) : (
                  <>
                  {
                    imageList.map((item) => {
                      return (
                        <button
                          key={item.value}
                          className={cn(
                            "px-3 py-2 font-medium text-sm rounded-md m-0",
                            {
                              "bg-indigo-100 text-indigo-700": data.type === item.value,
                              "text-gray-500 hover:text-gray-700": data.type !== item.value,
                            }
                          )}
                          onClick={() => {
                            setData((prev) => {
                              const cur = {...prev};
                              cur.type = item.value;
                              return cur;
                            });
                          }}
                        >{item.label}</button>
                      )
                    })
                  }
                  </>
                )
              }

            </nav>
            <hr className="mt-1 md:mt-3"></hr>
            <div className="w-full flex space-x-3 items-center mb-5">
            <div className="relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" className="icon h-5 w-5 text-gray-400" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21-6-6m2-5c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7Z"></path>
                </svg>
                </div>
                <Input
                  className='pl-8'
                  value={curPrompt}    
                  onChange={(e) => {
                    setCurPrompt(e.target.value)                  
                }}/>
            </div>
            <div className="hidden sm:block ">
                <Button 
                  className="relative"
                  onClick={searchImage}
                >
                  {
                    searchPending ? (<LoadingDots color="#808080"/>) : (<span>
                      Search
                    </span>)
                  }
                </Button>
            </div>
            </div>

            <div className="overflow-y-auto px-2 py-2 flex-auto">
              <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 relative">
                {
                  list.map((item) => {
                    return (
                      <li key={item.id} className="relative">
                        <div className={cn(
                          "group block w-full aspect-[10/7] rounded-lg bg-gray-100 overflow-hidden shadow-sm flex justify-center", 
                          {
                            "ring-2 ring-offset-2 ring-indigo-500": data.id === item.id
                          }
                          )}>
                          <img src={item.url} alt={item.description} className="h-full" />
                          <button
                            onClick={() => {
                              handlerSelect(item)
                            }}
                            type="button" 
                            className="absolute inset-0 focus:outline-none"
                          ></button>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
              {/* <nav className="mt-5 bg-white py-3 flex items-center justify-between border-t border-gray-200" aria-label="Pagination">
                <div className="hidden sm:block">
                  <div className="text-sm text-gray-700">Showing
                    <span className="font-medium">{data.from}</span>to
                    <span className="font-medium">{data.to}</span>of
                    <span className="font-medium">{data.total_count}</span>results</div>
                  </div>
                  <div className="flex-1 flex justify-between sm:justify-end space-x-2">
                    <Button variant="outline" className="relative light sm">Next</Button>
                  </div>
              </nav> */}
            </div>
        </>
    )
}