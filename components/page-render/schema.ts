export default {
    "code": 0,
    "message": "ok",
    "data": {
        "id": 8,
        "schema_data": {
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
                            "docId": "docls4ossiz",
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
                                            "slogan": "Your feet's best friend",
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
                                            "list": []
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
                                            "list": []
                                        }
                                    },
                                    "title": "MarketProducts",
                                    "hidden": false,
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": []
                                }
                            ]
                        }
                    ],
                    "style": {
                        "mode": "light",
                        "theme": "green"
                    },
                    "datas": [
                        {
                            "name": "Crispy Apple Delights",
                            "componentName": "MarketHeader",
                            "nodeId": "node_ockzs2vw4373"
                        },
                        {
                            "slogan": "Sweet, Crispy, Bright Apples",
                            "description": "Welcome to Crispy Apple Delights, where we offer sweet, crispy, bright-colored apples at an affordable price. Our apples are handpicked to ensure the highest quality for our customers.",
                            "image": "https://placehold.co/500x500?text=Apples",
                            "componentName": "MarketBanner",
                            "nodeId": "node_ockzs2vw4371"
                        },
                        {
                            "componentName": "MarketAdvantage",
                            "nodeId": "node_ockzs2vw43712",
                            "list": [
                                {
                                    "icon": "fa fa-apple-alt",
                                    "title": "Wide Selection",
                                    "description": "We offer a wide selection of apple varieties, each with its unique taste and texture. From the classic Red Delicious to the tangy Granny Smith, we have an apple for every taste."
                                },
                                {
                                    "icon": "fa fa-dollar-sign",
                                    "title": "Competitive Prices",
                                    "description": "We believe that everyone should have access to healthy, delicious apples. That's why we offer our apples at competitive prices, making them affordable for all."
                                },
                                {
                                    "icon": "fa fa-seedling",
                                    "title": "Quality Assurance",
                                    "description": "Our apples are grown in nutrient-rich soil and are free from harmful pesticides. We ensure that our apples are of the highest quality, providing you with the best taste and nutrition."
                                },
                                {
                                    "icon": "fa fa-star",
                                    "title": "Characteristic Advantage",
                                    "description": "Our apples are not just sweet and crispy, but also bright in color, making them a delightful addition to any fruit basket or dessert."
                                }
                            ]
                        },
                        {
                            "componentName": "MarketProducts",
                            "nodeId": "node_ockzs2vw4375",
                            "list": [
                                {
                                    "category": {
                                        "name": "quality"
                                    },
                                    "name": "Red Delicious Apple",
                                    "price": "$10.00",
                                    "image": "https://placehold.co/500x500?text=Red+Delicious+Apple",
                                    "url": "https://www.ancodeai.com/"
                                },
                                {
                                    "category": {
                                        "name": "cost-effectiveness"
                                    },
                                    "name": "Granny Smith Apple",
                                    "price": "$12.00",
                                    "image": "https://placehold.co/500x500?text=Granny+Smith+Apple",
                                    "url": "https://www.ancodeai.com/"
                                },
                                {
                                    "category": {
                                        "name": "surprise"
                                    },
                                    "name": "Golden Delicious Apple",
                                    "price": "$15.00",
                                    "image": "https://placehold.co/500x500?text=Golden+Delicious+Apple",
                                    "url": "https://www.ancodeai.com/"
                                },
                                {
                                    "category": {
                                        "name": "quality"
                                    },
                                    "name": "Fuji Apple",
                                    "price": "$14.00",
                                    "image": "https://placehold.co/500x500?text=Fuji+Apple",
                                    "url": "https://www.ancodeai.com/"
                                },
                                {
                                    "category": {
                                        "name": "cost-effectiveness"
                                    },
                                    "name": "Gala Apple",
                                    "price": "$13.00",
                                    "image": "https://placehold.co/500x500?text=Gala+Apple",
                                    "url": "https://www.ancodeai.com/"
                                },
                                {
                                    "category": {
                                        "name": "surprise"
                                    },
                                    "name": "Honeycrisp Apple",
                                    "price": "$16.00",
                                    "image": "https://placehold.co/500x500?text=Honeycrisp+Apple",
                                    "url": "https://www.ancodeai.com/"
                                }
                            ]
                        }
                    ]
                }
            ],
            "i18n": {}
        }
    }
}