import { isFormEvent, compatibleLegaoSchema, getNodeSchemaById } from '@/engine/utils';
import { isNodeSchema } from '@/engine/types';
import { getConvertedExtraKey, getOriginalExtraKey } from '@/engine/designer';

const utils = {
  isNodeSchema,
  isFormEvent,
  compatibleLegaoSchema,
  getNodeSchemaById,
  getConvertedExtraKey,
  getOriginalExtraKey,
};

export default utils;