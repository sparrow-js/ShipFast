// The following is a schema definition for sell shop app.

export interface ShopDataResponse {
    style: Style;
    header: {
        name: Name;
    };
    banner: {
        // Add a slogan to the app. Required
        slogan: string;
        // Add a description to the app.The number of words is between 25 and 40. Required
        description: string;
        image: '/banner.jpg';
    };
    // Generate four advantages, the first must be WideAdvantage
    advantages: Advantages[];
    // Generate 6 products
    products: Product[];
}

/*
Give it a name app. Required
E.g.

text: sell coffee.
Majestic Coffee Beans Co.

text: cookies
Sweet Delice
*/
export type Name = string;

export interface Style {
    // Choose the mode that suits your app
    mode: 'dark' | 'light',
    // Choose a theme color that suits your app
    theme:  'zinc' | 'stone' | 'gray' | 'neutral' | 'red' | 'rose' | 'orange' | 'green' | 'blue' | 'yellow' | 'violet'
}


export type Advantages = WideAdvantage | PricesAdvantage | QualityAdvantage | CharacteristicAdvantage;

export interface WideAdvantage {
    // Font Awesome for icons. E.g. "fa fa-birthday-cake"
    icon: string,
    title: 'Wide Selection' | 'Wide Range of Options' | 'Wide variety of options' | 'Wide Variety of Designs' | 'Wide variety of choices' | Wide,
    // Generate Advantage description. The number of words is between 25 and 40. Required
    description: string
}

export interface QualityAdvantage {
    // Font Awesome for icons. E.g. "fa fa-birthday-cake"
    icon: string,
    title: 'Superior Quality' | 'Quality ingredients' | 'Quality Assurance',
    // Generate Advantage description. The number of words is between 25 and 40. Required
    description: string
}

export interface PricesAdvantage {
    icon: 'fa fa-dollar-sign',
    title: 'Competitive Prices',
    // Generate Advantage description. The number of words is between 25 and 40. Required
    description: string
}

// Generate advantages based on product characteristics
export interface CharacteristicAdvantage {
    // Font Awesome for icons. E.g. "fa fa-birthday-cake"
    icon: string,
    title: string,
    // Generate Advantage description. The number of words is between 25 and 40. Required
    description: string
}



/*
Generate multiple choice titles for products
E.g.

text: sell cookies.
Wide variety of choices
*/
export type Wide = string;

export type Product = {
    category: Category;
    // Generate product name, The number of words is between 5 and 15. Required
    name: string;
    // E.g. $16.23, Prices range from 10.00 to 500.00, Required
    price: string;
    image: Image;

    url: 'https://www.ancodeai.com/';
}

export interface Category {
    name: 'quality' | 'cost-effectiveness' | 'surprise'
}

// For images, use placeholder images from https://placehold.co and include a detailed description of the image in the alt text so that an image generation AI can generate the image later.
export type Image = string;