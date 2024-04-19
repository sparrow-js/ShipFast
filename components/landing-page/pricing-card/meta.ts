
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
    componentName: 'PricingCard',
    title: 'PricingCard',
    category: 'maker',
    npm: {
      destructuring: true,
      exportName: "PricingCard",
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
        }
      },
    ],
    datas: [
      {
        name: 'slogan',
        title: { label: 'slogan', tip: 'slogan' },
        propType: 'string',
      },
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