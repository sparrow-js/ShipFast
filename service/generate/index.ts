import {HeaderSchema} from './Header';
import { HeroSchema } from './Hero';
import { PricingSchema } from './Pricing'
import { FeatureSchema } from './Feature';
import {FaqsSchema} from './Faqs';

// store
import {HeaderStoreSchema} from './HeaderStore';
import {BannerStoreSchema} from './BannerStore';
import {AdvantagesStoreSchema} from './AdvantagesStore';
import {ProductsStoreSchema} from './ProductsStore';

import {StyleSchema} from './Style'


const Schema = {
    HeaderSchema,
    HeroSchema,
    PricingSchema,
    FeatureSchema,
    FaqsSchema,

    // store
    HeaderStoreSchema,
    BannerStoreSchema,
    AdvantagesStoreSchema,
    ProductsStoreSchema,

    StyleSchema
}


export type schemaType =  'HeaderSchema' | 'HeroSchema' | 'PricingSchema' | 'FeatureSchema' | 'FaqsSchema' | 'StyleSchema'
                        | 'HeaderStoreSchema' | 'BannerStoreSchema' | 'AdvantagesStoreSchema' | 'ProductsStoreSchema';

export default Schema;