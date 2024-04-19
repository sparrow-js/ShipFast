const StoreSchema = {
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
        "docId": "docls4ossiz",
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
        },
        "css": "",
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
        },
        "originCode": "class LowcodeComponent extends Component {\n  state = {\n    \"text\": \"outer\",\n    \"isShowDialog\": false\n  }\n  componentDidMount() {\n    console.log('did mount');\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n  testFunc() {\n    console.log('test func');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    })\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    })\n  }\n}",
        "hidden": false,
        "title": "",
        "isLocked": false,
        "condition": true,
        "conditionGroup": "",
         "children": [
          {
            "componentName": "MarketHeader",
            "id": "node_ockzs2vw4373",
            "docId": "docls4ossiz",
            "props": {
              "data": {
                "name": "Sock Central"
              }
            },
            "title": "MarketHeader",
            "hidden": false,
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": []
          },
          {
            "componentName": "MarketBanner",
            "id": "node_ockzs2vw4371",
            "docId": "docls4ossiz",
            "props": {
              "data": {
                "slogan": "Your feet's best friend test",
                "description": "Welcome to Sock Central, where we offer a wide variety of socks for every occasion. From casual to formal, our socks are designed to provide comfort and style. Step into our store and find the perfect pair for you.",
                "image": "https://placehold.co/500x500?text=Sock+Central"
              }
            },
            "title": "MarketBanner",
            "hidden": false,
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": []
          },
          {
            "componentName": "MarketAdvantage",
            "id": "node_ockzs2vw43712",
            "docId": "docls4ossiz",
            "props": {
              "data": {
                list: [
                  {
                    "icon": "https://static.thenounproject.com/png/6785279-200.png",
                    "title": "Wide Selection",
                    "description": "We offer a wide selection of socks in various styles, colors, and materials. Whether you're looking for athletic socks, dress socks, or novelty socks, we've got you covered."
                  },
                  {
                    "icon": "https://static.thenounproject.com/png/6785279-200.png",
                    "title": "Competitive Prices",
                    "description": "At Sock Central, we believe in providing quality products at affordable prices. We offer competitive pricing on all our products, ensuring you get the best value for your money."
                  },
                  {
                    "icon": "https://static.thenounproject.com/png/6785279-200.png",
                    "title": "Superior Quality",
                    "description": "Our socks are made from high-quality materials, ensuring they are durable, comfortable, and long-lasting. We believe in quality over quantity, and our products reflect that."
                  },
                  {
                    "icon": "https://static.thenounproject.com/png/6785279-200.png",
                    "title": "Unique Designs",
                    "description": "We pride ourselves on our unique and creative sock designs. From fun patterns to classic styles, we have something for everyone."
                  }
                ]
              }
            },
            "title": "MarketBanner",
            "hidden": false,
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": []
          },
          {
            "componentName": "MarketProducts",
            "id": "node_ockzs2vw4375",
            "docId": "docls4ossiz",
            "props": {
              "data": {
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
            },
            "title": "MarketProducts",
            "hidden": false,
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": []
          },
        ],
        "style": {
          "mode": "light",
          "theme": "rose"
        }
      }
    ],
    "i18n": {}
}

export default StoreSchema;