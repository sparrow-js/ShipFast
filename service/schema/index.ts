import StoreSchema from './store-schema';
import LandingpageSchema from './landingpage-schema';

const componentToDataMap = {
    MarketHeader: 'header',
    MarketBanner: 'banner',
    MarketAdvantage: 'advantages',
    MarketProducts: 'products'
} as any;
const componentToDataLandingpageMap = {
    HeaderLogin: 'headerLogin',
    Hero: 'hero',
    Features: 'features',
    PricingCard: 'pricing',
    Faqs: 'faqs',
    Footer: 'footer',
} as any;

export function initStoreSchema() {
    // const page = StoreSchema.componentsTree[0];
    // const pageChildren = page.children[0].children;
    // const datas = pageChildren.reduce((prev: any, component: any) => {
    //     const {id, componentName} = component;
    //     const dataName = componentToDataMap[componentName];
    //     const componentData = data[dataName];
    //     if (componentData) {
    //         if (['header', 'banner'].includes(dataName)) {
    //             prev.push({
    //                 ...componentData,
    //                 componentName,
    //                 nodeId: id,
    //             })
    //         } else {
    //             prev.push({
    //                 componentName,
    //                 nodeId: id,
    //                 list: componentData
    //             })
    //         }
    //     }
    //     return prev;
    // }, []);
    // page.datas = datas;
    // if (data.style) {
    //     page.style = data.style;
    // }
    return StoreSchema;
}

export function initLandingpageSchema() {
    // data['footer'] =  {
    //     logo: data['headerLogin']['logo'] || '/icon.png',
    //     name:  data['headerLogin']['name'] || '',
    //     description: data['hero']['announcement'] || '',
    //     copyright: 'Copyright © 2024 - All rights reserved',
    //     links: [
    //         {
    //             title: 'LINKS',
    //             list: [
    //                 {
    //                     title: 'Blog',
    //                     link: '/blog'
    //                 }
    //             ]
    //         },
    //         {
    //             title: 'LEGAL',
    //             list: [
    //                 {
    //                     title: 'Terms of services',
    //                     link: '/tos'
    //                 },
    //                 {
    //                     title: 'Privacy policy',
    //                     link: '/privacy-policy'
    //                 }
    //             ]
    //         }
    //     ]
    // };
    // const page = LandingpageSchema.componentsTree[0];
    // const pageChildren = page.children;
    // const datas = pageChildren.reduce((prev: any, component: any) => {
    //     const {id, componentName} = component;
    //     const dataName = componentToDataLandingpageMap[componentName];
    //     const componentData = data[dataName];
    //     if (componentData) {
    //         prev.push({
    //             ...componentData,
    //             componentName,
    //             nodeId: id,
    //         });
    //     }
    //     return prev;
    // }, []);
    // page.datas = datas;
    // if (data.style) {
    //     page.style = data.style;
    // }
    // return LandingpageSchema;
    return LandingpageSchema;
}