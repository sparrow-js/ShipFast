
export default {
    snippets: [
        {
          title: '头像',
          screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/avatar-1.jpg',
          schema: {
            componentName: 'MarketBanner',
            props: {
              src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            },
          },
        },
    ],
    componentName: 'MarketBanner',
    title: 'MarketBanner',
    category: 'maker',
    npm: {
      destructuring: true,
      exportName: "MarketBanner",
      main : "",
      package: "tw-elements-react",
      subName: "",
      version: "1.0.0-alpha2"
    },
    props: [
      {
        name: 'data',
        title: { label: '数据', tip: '数据' },
        propType: 'object',
        setter: 'JsonSetter',
        defaultValue:  {
          "slogan": "Your feet's best friend",
          "description": "Welcome to Sock Central, where we offer a wide variety of socks for every occasion. From casual to formal, our socks are designed to provide comfort and style. Step into our store and find the perfect pair for you.",
          "image": "https://placehold.co/500x500?text=Sock+Central"
        }
      },
    ],
    datas: [
      {
        name: 'slogan',
        title: { label: 'slogan', tip: 'slogan' },
        propType: 'string',
      },
      {
        name: 'description',
        title: { label: 'description', tip: 'description' },
        propType: 'string',
      },
      {
        name: 'image',
        title: { label: 'image', tip: 'image' },
        propType: 'string',
      }
    ],
    configure: {
      supports: {
        style: false,
        condition: false,
        loop: false,
        events: [],
      },
    },
}