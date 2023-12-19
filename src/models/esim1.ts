/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Esim1 {
  /** ID of the eSIM */
  iccid?: string;
  /** SM-DP+ Address */
  smdpAddress?: string;
  /** The manual activation code */
  manualActivationCode?: string;
  /** Status of the eSIM, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR' */
  status?: string;
}

export const esim1Schema: Schema<Esim1> = object({
  iccid: ['iccid', optional(string())],
  smdpAddress: ['smdpAddress', optional(string())],
  manualActivationCode: ['manualActivationCode', optional(string())],
  status: ['status', optional(string())],
});