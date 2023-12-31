/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Purchases400Error } from '../errors/purchases400Error';
import { Purchases401Error } from '../errors/purchases401Error';
import {
  PurchasesConsumption400Error,
} from '../errors/purchasesConsumption400Error';
import {
  PurchasesConsumption401Error,
} from '../errors/purchasesConsumption401Error';
import { PurchasesEdit400Error } from '../errors/purchasesEdit400Error';
import { PurchasesEdit401Error } from '../errors/purchasesEdit401Error';
import { PurchasesTopup400Error } from '../errors/purchasesTopup400Error';
import { PurchasesTopup401Error } from '../errors/purchasesTopup401Error';
import {
  PurchasesConsumptionResponse,
  purchasesConsumptionResponseSchema,
} from '../models/purchasesConsumptionResponse';
import {
  PurchasesEditRequest,
  purchasesEditRequestSchema,
} from '../models/purchasesEditRequest';
import {
  PurchasesEditResponse,
  purchasesEditResponseSchema,
} from '../models/purchasesEditResponse';
import {
  PurchasesRequest,
  purchasesRequestSchema,
} from '../models/purchasesRequest';
import {
  PurchasesResponse,
  purchasesResponseSchema,
} from '../models/purchasesResponse';
import {
  PurchasesResponse1,
  purchasesResponse1Schema,
} from '../models/purchasesResponse1';
import {
  PurchasesTopupRequest,
  purchasesTopupRequestSchema,
} from '../models/purchasesTopupRequest';
import {
  PurchasesTopupResponse,
  purchasesTopupResponseSchema,
} from '../models/purchasesTopupResponse';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class PurchasesController extends BaseController {
  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   *
   * @param body
   * @return Response from the API call
   */
  async createPurchase(
    body?: PurchasesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PurchasesResponse>> {
    const req = this.createRequest('POST', '/purchases');
    const mapped = req.prepareArgs({
      body: [body, optional(purchasesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, Purchases400Error, 'Bad Request');
    req.throwOn(401, Purchases401Error, 'Unauthorized');
    return req.callAsJson(purchasesResponseSchema, requestOptions);
  }

  /**
   * This endpoint can be used to list all the successful purchases made between a given interval.
   *
   * @param iccid
   * @param afterDate   Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param beforeDate  End date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param afterCursor
   * @param limit
   * @param after
   * @param before
   * @return Response from the API call
   */
  async listPurchases(
    iccid?: string,
    afterDate?: string,
    beforeDate?: string,
    afterCursor?: string,
    limit?: number,
    after?: number,
    before?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PurchasesResponse1>> {
    const req = this.createRequest('GET', '/purchases');
    const mapped = req.prepareArgs({
      iccid: [iccid, optional(string())],
      afterDate: [afterDate, optional(string())],
      beforeDate: [beforeDate, optional(string())],
      afterCursor: [afterCursor, optional(string())],
      limit: [limit, optional(number())],
      after: [after, optional(number())],
      before: [before, optional(number())],
    });
    req.query('iccid', mapped.iccid);
    req.query('afterDate', mapped.afterDate);
    req.query('beforeDate', mapped.beforeDate);
    req.query('afterCursor', mapped.afterCursor);
    req.query('limit', mapped.limit);
    req.query('after', mapped.after);
    req.query('before', mapped.before);
    req.throwOn(400, Purchases400Error, 'Bad Request');
    req.throwOn(401, Purchases401Error, 'Unauthorized');
    return req.callAsJson(purchasesResponse1Schema, requestOptions);
  }

  /**
   * This endpoint is used to top-up an eSIM with the previously associated destination by providing an
   * existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR"
   * state.
   *
   * @param body
   * @return Response from the API call
   */
  async topUpESIM(
    body?: PurchasesTopupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PurchasesTopupResponse>> {
    const req = this.createRequest('POST', '/purchases/topup');
    const mapped = req.prepareArgs({
      body: [body, optional(purchasesTopupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, PurchasesTopup400Error, 'Bad Request');
    req.throwOn(401, PurchasesTopup401Error, 'Unauthorized');
    return req.callAsJson(purchasesTopupResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to modify the dates of an existing package with a future activation start
   * time. Editing can only be performed for packages that have not been activated, and it cannot change
   * the package size. The modification must not change the package duration category to ensure pricing
   * consistency.
   *
   * @param body
   * @return Response from the API call
   */
  async editPurchase(
    body?: PurchasesEditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PurchasesEditResponse>> {
    const req = this.createRequest('POST', '/purchases/edit');
    const mapped = req.prepareArgs({
      body: [body, optional(purchasesEditRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, PurchasesEdit400Error, 'Bad Request');
    req.throwOn(401, PurchasesEdit401Error, 'Unauthorized');
    return req.callAsJson(purchasesEditResponseSchema, requestOptions);
  }

  /**
   * This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks
   * a button). It returns the data balance (consumption) of purchased packages.
   *
   * @param purchaseId
   * @return Response from the API call
   */
  async getPurchaseConsumption(
    purchaseId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PurchasesConsumptionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ purchaseId: [purchaseId, string()] });
    req.appendTemplatePath`/purchases/${mapped.purchaseId}/consumption`;
    req.throwOn(400, PurchasesConsumption400Error, 'Bad Request');
    req.throwOn(401, PurchasesConsumption401Error, 'Unauthorized');
    return req.callAsJson(purchasesConsumptionResponseSchema, requestOptions);
  }
}
