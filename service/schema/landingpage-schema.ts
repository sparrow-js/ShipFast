const LandingpageSchema = {
    "version": "1.0.0",
    "componentsMap": [
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
        "state": {},
        "css": "",
        "lifeCycles": {
          "componentDidMount": {
            "type": "JSFunction",
            "value": "function componentDidMount() {}"
          },
          "componentWillUnmount": {
            "type": "JSFunction",
            "value": "function componentWillUnmount() {}"
          }
        },
        "methods": {},
        "originCode": "class LowcodeComponent extends Component {\n  state = {}\n  componentDidMount() {}\n  componentWillUnmount() {}\n }",
        "hidden": false,
        "title": "",
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
                "logo": "/icon.png",
                "name": "AI Note Taker",
                "links": [
                  {
                    "title": "Features",
                    "link": "/#features"
                  },
                  {
                    "title": "Pricing",
                    "link": "/#pricing"
                  },
                  {
                    "title": "Faqs",
                    "link": "/#faqs"
                  }
                ],
                "operates": [
                  {
                    "text": "Get Started",
                    "link": "/get-started"
                  }
                ]
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
            "componentName": "Hero",
            "id": "node_ockzs2vw43719012",
            "docId": "doclsmy88o4",
            "props": {
              "data": {
                "announcement": "Introducing AI Note Taker",
                "title": "AI Note Taker",
                "description": "AI Note Taker is an advanced tool that uses artificial intelligence to take notes for you. It can understand context, summarize meetings, and even generate action items.",
                "image": "/up.png",
                "action": {
                  "title": "Sign up",
                  "link": "/sing-up"
                }
              }
            },
            "title": "Hero",
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
                title: 'Now is the time to build your portfolio.',
                description: 'With typical market returns, you have to start young to secure your future. With Pocket, it’s never too late to build your nest egg.',
                list: [
                  {
                    "icon": "fa fa-robot",
                    "title": "AI Powered",
                    "description": "Our AI technology understands context and summarizes meetings."
                  },
                  {
                    "icon": "fa fa-microphone",
                    "title": "Voice Recognition",
                    "description": "Transcribe meetings in real-time with high accuracy."
                  },
                  {
                    "icon": "fa fa-check-circle",
                    "title": "Action Items",
                    "description": "Automatically generate action items from your meetings."
                  },
                  {
                    "icon": "fa fa-cloud",
                    "title": "Cloud Storage",
                    "description": "Store your notes securely in the cloud."
                  },
                  {
                    "icon": "fa fa-mobile-alt",
                    "title": "Mobile App",
                    "description": "Access your notes from anywhere with our mobile app."
                  }
                ]
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
                "title": "Affordable Pricing",
                "description": "Choose the plan that suits your needs.",
                "cards": [
                  {
                    "type": "order",
                    "priority": false,  
                    "price": "$6",
                    "description": "One-time purchase for lifetime access.",
                    "buttonText": "Buy",
                    "features": [
                      "AI Powered",
                      "Voice Recognition",
                      "Action Items",
                      "Cloud Storage"
                    ]
                  },
                  {
                    "type": "Subscribe",
                    "price": "$99",
                    "priority": true, 
                    "description": "Monthly subscription for continuous updates and support.",
                    "buttonText": "Subscribe",
                    "features": [
                      "AI Powered",
                      "Voice Recognition",
                      "Action Items",
                      "Cloud Storage",
                      "Mobile App",
                      "Priority Support",
                      "Free Updates"
                    ]
                  }
                ]
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
                "title": "Frequently asked questions",
                "description": "If you have anything else you want to ask,",
                "link": "mailto:info@example.com",
                "list": [
                  {
                    "title": "How does AI Note Taker work?",
                    "description": "AI Note Taker uses advanced AI technology to understand context and summarize meetings."
                  },
                  {
                    "title": "Is my data secure?",
                    "description": "Yes, we take data security very seriously. Your notes are stored securely in the cloud."
                  },
                  {
                    "title": "Can I access my notes from anywhere?",
                    "description": "Yes, with our mobile app, you can access your notes from anywhere."
                  },
                  {
                    "title": "What is the cost of AI Note Taker?",
                    "description": "We offer a one-time purchase for lifetime access at $7 and a monthly subscription at $99."
                  }
                ]
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
                logo: '/icon.png',
                name: 'AI Note Taker',
                // Generate Advantage description. The number of words is between 10 and 15. Required
                description: 'test',
                copyright: 'Copyright © 2024 - All rights reserved',
                links: [
                    {
                        title: 'LINKS',
                        list: [
                            {
                                title: 'Blog',
                                link: '/blog'
                            }
                        ]
                    },
                    {
                        title: 'LEGAL',
                        list: [
                            {
                                title: 'Terms of services',
                                link: '/tos'
                            },
                            {
                                title: 'Privacy policy',
                                link: '/privacy-policy'
                            }
                        ]
                    }
                ]
              }
            },
            "title": "Footer",
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
        },
      }
    ],
  
    "i18n": {}
  }

  export default LandingpageSchema;