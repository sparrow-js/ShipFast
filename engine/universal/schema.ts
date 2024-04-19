export default {
  "version": "1.0.0",
  "componentsMap": [
    {
      "package": "@alifd/pro-layout",
      "version": "^0.1.0",
      "exportName": "Col",
      "main": "lib/index.js",
      "destructuring": true,
      "subName": "",
      "componentName": "NextCol"
    },
    {
      "devMode": "lowCode",
      "componentName": "Page"
    }
  ],
  "componentsTree": [
    {
      "componentName": "Page",
      "id": "node_dockcviv8fo1",
      "docId": "doclsmy88o4",
      "props": {
        "ref": "outerView",
        "style": {
          "height": "100%"
        }
      },
      "fileName": "/",
      "dataSource": {
        "list": []
      },
      "state": {
        "text": {
          "type": "JSExpression",
          "value": "\"outer\""
        },
        "isShowDialog": {
          "type": "JSExpression",
          "value": "false"
        }
      },
      "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
      "lifeCycles": {
        "componentDidMount": {
          "type": "JSFunction",
          "value": "function componentDidMount() {\n  console.log('did mount');\n}"
        },
        "componentWillUnmount": {
          "type": "JSFunction",
          "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}"
        }
      },
      "methods": {
        "testFunc": {
          "type": "JSFunction",
          "value": "function testFunc() {\n  console.log('test func');\n}"
        },
        "onClick": {
          "type": "JSFunction",
          "value": "function onClick() {\n  this.setState({\n    isShowDialog: true\n  });\n}"
        },
        "closeDialog": {
          "type": "JSFunction",
          "value": "function closeDialog() {\n  this.setState({\n    isShowDialog: false\n  });\n}"
        }
      },
      "originCode": "class LowcodeComponent extends Component {\n  state = {\n    \"text\": \"outer\",\n    \"isShowDialog\": false\n  }\n  componentDidMount() {\n    console.log('did mount');\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n  testFunc() {\n    console.log('test func');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    })\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    })\n  }\n}",
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "NextPage",
          "id": "node_ockzs2vw431",
          "docId": "doclsmy88o4",
          "props": {
            "headerDivider": true,
            "minHeight": "100vh",
            "presetNav": true,
            "presetAside": true,
            "footer": false,
            "nav": false,
            "aside": false,
            "placeholderStyle": {
              "gridRowEnd": "span 1",
              "gridColumnEnd": "span 12"
            },
            "headerProps": {
              "background": "surface"
            },
            "isTab": false,
            "contentAlignCenter": false,
            "contentProps": {
              "style": {
                "background": "rgba(255,255,255,0)"
              }
            }
          },
          "title": "页面",
          "hidden": false,
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "HeaderLogin",
              "id": "node_ockzs2vw437190",
              "docId": "doclsmy88o4",
              "props": {
                "data": {
                  "title": "Sock Central"
                }
              },
              "title": "HeaderLogin",
              "hidden": false,
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": []
            },
            {
              "componentName": "Features",
              "id": "node_ockzs2vw4371901",
              "docId": "doclsmy88o4",
              "props": {
                "data": {
                  "title": "Sock Central"
                }
              },
              "title": "Features",
              "hidden": false,
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": []
            },
            {
              "componentName": "PricingCard",
              "id": "node_ockzs2vw4371902",
              "docId": "doclsmy88o4",
              "props": {
                "data": {
                  "title": "Sock Central"
                }
              },
              "title": "PricingCard",
              "hidden": false,
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": []
            },
            {
              "componentName": "Faqs",
              "id": "node_ockzs2vw4371903",
              "docId": "doclsmy88o4",
              "props": {
                "data": {
                  "title": "Sock Central"
                }
              },
              "title": "Faqs",
              "hidden": false,
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": []
            },
            {
              "componentName": "Footer",
              "id": "node_ockzs2vw4371904",
              "docId": "doclsmy88o4",
              "props": {
                "data": {
                  "title": "Sock Central"
                }
              },
              "title": "Footer",
              "hidden": false,
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": []
            },
          ]
        }
      ],
      "style": {
        "mode": "light",
        "theme": "rose"
      },
      datas: [
        {
          componentName: 'MarketHeader',
          nodeId: 'node_ockzs2vw4373',
          "name": "Sock Central"
        },
        {
          componentName: 'MarketBanner',
          nodeId: 'node_ockzs2vw4371',
          "slogan": "Your feet's best friend test",
          "description": "Welcome to Sock Central, where we offer a wide variety of socks for every occasion. From casual to formal, our socks are designed to provide comfort and style. Step into our store and find the perfect pair for you.",
          "image": "https://placehold.co/500x500?text=Sock+Central"
        },
        {
          componentName: 'MarketAdvantage',
          nodeId: 'node_ockzs2vw43712',
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
          ]
        },
        {
          componentName: 'MarketProducts',
          nodeId: 'node_ockzs2vw4375',
          list: [
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
      ]
    }
  ],

  "i18n": {}
}