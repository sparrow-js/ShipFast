import { createLanguageModel, createJsonTranslator, processRequests } from "../../typechat";
import { createTypeScriptJsonValidator } from "../../typechat/ts";
import { LandingpageDataResponse } from "./schema";

const model = createLanguageModel({
    OPENAI_MODEL: 'gpt-4',
    OPENAI_API_KEY: process.env['OPENAI_KEY'],
    OPENAI_ENDPOINT: process.env['OPENAI_BASE_URL']
});
const validator = createTypeScriptJsonValidator<LandingpageDataResponse>(`
// The following is a schema definition for landing page app.

export interface LandingpageDataResponse {
    style: Style;
    headerLogin: HeaderLogin;
    hero: Hero;
    features: {
        title: string;
        description: string;
        // Generate 5 list Feature
        list: Feature[]
    };
    pricing: Pricing;
    faqs: Faqs;
}

export interface Style {
    mode: 'light',
    // Choose a theme color that suits your app
    theme:  'zinc' | 'stone' | 'gray' | 'neutral' | 'red' | 'rose' | 'orange' | 'green' | 'blue' | 'yellow' | 'violet'
}
export type Logo = '/icon.png';

export type Name = string; // 1 word. Required

export interface HeaderLogin{
    logo: Logo;
    name: Name;
    links: [
        {
            title: 'Features',
            link: '/#features'
        },
        {
            title: 'Pricing',
            link: '/#pricing'
        },
        {
            title: 'Faqs',
            link: '/#faqs'
            
        }
        
    ];
    operates: Operate[];
}

export type Operate = {
    text: 'Get Started',
    link: string,
};

export interface Hero {
    announcement: string; // The number of words is between 3 and 5. Required
    title: string;
    description: string; // Generate Advantage description. The number of words is between 25 and 40. Required
    image: '/Comment-review.png' | '/up.png' | '/CV.png' | '/Like.png'; // Randomly use an option.

    action: {
        title: 'Sign up';
        link: '/sing-up';
    }
};

export type Feature = {
    // Font Awesome for icons. like "fa fa-robot", "fa fa-birthday-cake"
    icon: string,
    title: string;
    // Generate Feature description. The number of words is between 15 and 25. Required
    description: string;
};


export interface Pricing {
    title: string;
    description: string;
    cards: [
        {
            type: 'order';
            price: '$7';
            description: string;
            buttonText: 'Buy';
            priority: false;
            // Generate 4 feature
            features: ProductFeature []
        }, 
        {
            type: 'Subscribe';
            price: '$99';
            description: string;
            buttonText: 'Subscribe';
            priority: true;
            // Generate 7 feature
            features: ProductFeature []
        }
    ]
}

export type ProductFeature = string;

export interface Faqs {
    title: 'Frequently asked questions';
    description: 'If you have anything else you want to ask,';
    link: 'mailto:info@example.com';
    // Generate 4 Faq
    list: Faq[]
}

export interface Faq {
    // Generate faq title.
    title: string;
    // Generate Feature description. The number of words is between 15 and 25. Required
    description: string
}
`, "LandingpageDataResponse");


const translator = createJsonTranslator(model, validator);

function processOrder(cart: LandingpageDataResponse) {
    // Process the items in the cart
    void cart;
}

export default async function requestLandingpageJson(request: string) {
    
    const response = await translator.translate(request);

    if (!response.success) {
        console.log(response.message);
        return;
    }
    const cart = response.data;
    processOrder(cart);
    console.log("Success!");
    return cart;
}
