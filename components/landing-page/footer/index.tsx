import Image from "next/image";
interface props {
    data: any,
}
const Footer = ({ data }: props) => {
    return (
        <footer className="bg-base-200 border-t">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a aria-current="page" className="flex gap-2 justify-center md:justify-start items-center" href="/#">
                <Image alt="" src={data.logo} width={30} height={30} />
                <strong className="font-semibold tracking-tight text-base md:text-lg">{data.name}</strong></a>
              <p className="mt-3 text-sm text-base-content-secondary">{data.description}</p>
              <p className="mt-3 text-sm text-base-content-secondary/80">{data.copyright}</p></div>
            <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center">
              {
                data.links.map((item: any) => {
                  return (
                    <div key={item.title} className="lg:w-1/3 md:w-1/2 w-full px-4">
                      <div className="footer-title font-medium text-base-content tracking-widest text-sm md:text-left mb-3">{item.title}</div>
                      <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                        {
                          item.list.map((link: any) => {
                            return (
                              <a key={link.title} href={link.link} className="link link-hover">{link.title}</a>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;