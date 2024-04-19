export default {
    snippets: [
        {
          title: '头像',
          screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/avatar-1.jpg',
          schema: {
            componentName: 'HeaderLogin',
            props: {
              src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            },
          },
        },
    ],
    componentName: 'Features',
    title: 'Features',
    category: 'maker',
    npm: {
      destructuring: true,
      exportName: "Features",
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
          "title": "Your feet's best friend",
        }
      },
    ],
    datas: [
      {
        name: 'title',
        title: { label: 'title', tip: 'title' },
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