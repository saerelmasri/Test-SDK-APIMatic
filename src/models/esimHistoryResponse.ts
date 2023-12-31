/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Esim2, esim2Schema } from './esim2';

export interface EsimHistoryResponse {
  esim?: Esim2;
}

export const esimHistoryResponseSchema: Schema<EsimHistoryResponse> = object({
  esim: ['esim', optional(lazy(() => esim2Schema))],
});
