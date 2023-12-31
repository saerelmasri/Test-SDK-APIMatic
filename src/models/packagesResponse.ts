/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Package, packageSchema } from './package';

export interface PackagesResponse {
  packages?: Package[];
  /** The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination */
  afterCursor?: string | null;
}

export const packagesResponseSchema: Schema<PackagesResponse> = object({
  packages: ['packages', optional(array(lazy(() => packageSchema)))],
  afterCursor: ['afterCursor', optional(nullable(string()))],
});
