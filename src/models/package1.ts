/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Package1 {
  /** ID of the package */
  id?: string;
  /** Size of the package in Bytes */
  dataLimitInBytes?: number;
  /** ISO representation of the package's destination */
  destination?: string;
  /** Name of the package's destination */
  destinationName?: string;
  /** Price of the package in cents */
  priceInCents?: number;
}

export const package1Schema: Schema<Package1> = object({
  id: ['id', optional(string())],
  dataLimitInBytes: ['dataLimitInBytes', optional(number())],
  destination: ['destination', optional(string())],
  destinationName: ['destinationName', optional(string())],
  priceInCents: ['priceInCents', optional(number())],
});
