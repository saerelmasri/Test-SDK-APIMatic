/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface PurchasesEditRequest {
  /** ID of the purchase */
  purchaseId: string;
  /** Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months. */
  startDate: string;
  /** End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date. */
  endDate: string;
  /** Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months. */
  startTime?: number;
  /** Epoch value representing the end time of the package's validity. End time can be maximum 60 days after Start time. */
  endTime?: number;
}

export const purchasesEditRequestSchema: Schema<PurchasesEditRequest> = object({
  purchaseId: ['purchaseId', string()],
  startDate: ['startDate', string()],
  endDate: ['endDate', string()],
  startTime: ['startTime', optional(number())],
  endTime: ['endTime', optional(number())],
});
