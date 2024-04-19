
export default {
    snippets: [],
    componentName: 'MarketProducts',
    title: 'MarketProducts',
    category: 'maker',
    npm: {
      destructuring: true,
      exportName: "MarketProducts",
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
            list:  [
                {
                  "category": {
                    "name": "quality"
                  },
                  "name": "Premium Cotton Socks",
                  "price": "$15.99",
                  "image": "https://placehold.co/500x500?text=Premium+Cotton+Socks",
                  "url": "https://www.ancodeai.com/"
                },
                {
                  "category": {
                    "name": "cost-effectiveness"
                  },
                  "name": "Value Pack Athletic Socks",
                  "price": "$20.99",
                  "image": "https://placehold.co/500x500?text=Value+Pack+Athletic+Socks",
                  "url": "https://www.ancodeai.com/"
                },
                {
                  "category": {
                    "name": "surprise"
                  },
                  "name": "Novelty Holiday Socks",
                  "price": "$12.99",
                  "image": "https://placehold.co/500x500?text=Novelty+Holiday+Socks",
                  "url": "https://www.ancodeai.com/"
                },
                {
                  "category": {
                    "name": "quality"
                  },
                  "name": "Luxury Silk Socks",
                  "price": "$30.99",
                  "image": "https://placehold.co/500x500?text=Luxury+Silk+Socks",
                  "url": "https://www.ancodeai.com/"
                },
                {
                  "category": {
                    "name": "cost-effectiveness"
                  },
                  "name": "Everyday Crew Socks",
                  "price": "$10.99",
                  "image": "https://placehold.co/500x500?text=Everyday+Crew+Socks",
                  "url": "https://www.ancodeai.com/"
                },
                {
                  "category": {
                    "name": "surprise"
                  },
                  "name": "Funky Patterned Socks",
                  "price": "$14.99",
                  "image": "https://placehold.co/500x500?text=Funky+Patterned+Socks",
                  "url": "https://www.ancodeai.com/"
                }
            ]
        }
      },
    ],
    datas: [
      {
        name: 'list',
        title: { label: 'product', tip: 'product' },
        propType: {
          type: 'arrayOf',
          value: {
            type: 'shape',
            value: [
              {
                name: 'name',
                description: 'name',
                propType: 'string',
                defaultValue: '',
              },
              {
                name: 'price',
                description: 'price',
                propType: 'string',
                defaultValue: '',
              },
              {
                name: 'image',
                description: 'image',
                propType: 'string',
                defaultValue: '',
              },
              {
                name: 'url',
                description: 'url',
                propType: 'string',
                defaultValue: '',
              },
              {
                name: 'category',
                description: 'category',
                propType: 'object',
                setter: 'JsonSetter',
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
                      name: 'name',
                      title: '选项名',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'price',
                      title: '选项值',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'image',
                      title: 'description',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                        name: 'url',
                        title: 'description',
                        setter: 'StringSetter',
                        isRequired: true
                    },
                    {
                        name: 'category',
                        title: 'description',
                        setter: 'JsonSetter',
                        isRequired: true
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                    "category": {
                        "name": ""
                    },
                    "name": "",
                    "price": "",
                    "image": "",
                    "url": ""
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