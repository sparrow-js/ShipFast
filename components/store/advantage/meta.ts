
export default {
    snippets: [],
    componentName: 'MarketAdvantage',
    title: 'MarketAdvantage',
    category: 'maker',
    npm: {
      destructuring: true,
      exportName: "MarketAdvantage",
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
            list: [
            {
              "icon": "fa fa-socks",
              "title": "Wide Selection",
              "description": "We offer a wide selection of socks in various styles, colors, and materials. Whether you're looking for athletic socks, dress socks, or novelty socks, we've got you covered."
            },
            {
              "icon": "fa fa-dollar-sign",
              "title": "Competitive Prices",
              "description": "At Sock Central, we believe in providing quality products at affordable prices. We offer competitive pricing on all our products, ensuring you get the best value for your money."
            },
            {
              "icon": "fa fa-star",
              "title": "Superior Quality",
              "description": "Our socks are made from high-quality materials, ensuring they are durable, comfortable, and long-lasting. We believe in quality over quantity, and our products reflect that."
            },
            {
              "icon": "fa fa-thumbs-up",
              "title": "Unique Designs",
              "description": "We pride ourselves on our unique and creative sock designs. From fun patterns to classic styles, we have something for everyone."
            }
        ]}
      },
    ],
    datas: [
      {
        name: 'list',
        title: { label: 'data', tip: 'data d' },
        propType: {
          type: 'arrayOf',
          value: {
            type: 'shape',
            value: [
              {
                name: 'icon',
                description: '选项名',
                propType: 'string',
                defaultValue: '',
              },
              {
                name: 'title',
                description: '选项值',
                propType: 'string',
                defaultValue: '',
              },
              {
                name: 'description',
                description: '是否禁用',
                propType: 'string',
                defaultValue: '',
              },
            ],
          },
        },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'icon',
                      title: '选项名',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'title',
                      title: '选项值',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'description',
                      title: 'description',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  icon: '选项名',
                  title: '',
                  description: '',
                };
              },
            },
          },
        },
        supportVariable: true
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