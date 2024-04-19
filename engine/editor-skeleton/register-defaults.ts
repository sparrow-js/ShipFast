import { registerMetadataTransducer } from '@/engine/designer';
import parseJSFunc from './transducers/parse-func';
import parseProps from './transducers/parse-props';
import addonCombine from './transducers/addon-combine';
import parseDatas from './transducers/parse-datas';

export const registerDefaults = () => {
  // parseFunc
  registerMetadataTransducer(parseJSFunc, 1, 'parse-func');

  registerMetadataTransducer(parseDatas, 3, 'parse-datas');

  // parseProps
  registerMetadataTransducer(parseProps, 5, 'parse-props');

  // addon/platform custom
  registerMetadataTransducer(addonCombine, 10, 'combine-props');
};
