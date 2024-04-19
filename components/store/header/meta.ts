
export default {
    snippets: [
        {
          title: '头像',
          screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/avatar-1.jpg',
          schema: {
            componentName: 'MarketHeader',
            props: {
              src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            },
          },
        },
    ],
    componentName: 'MarketHeader',
    title: 'MarketHeader',
    category: 'maker',
    npm: {
      destructuring: true,
      exportName: "MarketHeader",
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
            "name": "Sock Central"
        }
      },
    ],
    datas: [
      {
        name: 'name',
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