/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Esim400Error } from '../errors/esim400Error';
import { Esim401Error } from '../errors/esim401Error';
import { EsimDevice400Error } from '../errors/esimDevice400Error';
import { EsimDevice401Error } from '../errors/esimDevice401Error';
import { EsimHistory400Error } from '../errors/esimHistory400Error';
import { EsimHistory401Error } from '../errors/esimHistory401Error';
import { EsimMac400Error } from '../errors/esimMac400Error';
import { EsimMac401Error } from '../errors/esimMac401Error';
import {
  EsimDeviceResponse,
  esimDeviceResponseSchema,
} from '../models/esimDeviceResponse';
import {
  EsimHistoryResponse,
  esimHistoryResponseSchema,
} from '../models/esimHistoryResponse';
import {
  EsimMacResponse,
  esimMacResponseSchema,
} from '../models/esimMacResponse';
import { EsimResponse, esimResponseSchema } from '../models/esimResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class ESIMController extends BaseController {
  /**
   * Get status from eSIM
   *
   * @param iccid
   * @return Response from the API call
   */
  async getESIM(
    iccid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EsimResponse>> {
    const req = this.createRequest('GET', '/esim');
    const mapped = req.prepareArgs({ iccid: [iccid, string()] });
    req.query('iccid', mapped.iccid);
    req.throwOn(400, Esim400Error, 'Bad Request');
    req.throwOn(401, Esim401Error, 'Unauthorized');
    return req.callAsJson(esimResponseSchema, requestOptions);
  }

  /**
   * Get device info from an installed eSIM
   *
   * @param iccid
   * @return Response from the API call
   */
  async getESIMDevice(
    iccid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EsimDeviceResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ iccid: [iccid, string()] });
    req.appendTemplatePath`/esim/${mapped.iccid}/device`;
    req.throwOn(400, EsimDevice400Error, 'Bad Request');
    req.throwOn(401, EsimDevice401Error, 'Unauthorized');
    return req.callAsJson(esimDeviceResponseSchema, requestOptions);
  }

  /**
   * Get history from an eSIM
   *
   * @param iccid
   * @return Response from the API call
   */
  async getESIMHistory(
    iccid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EsimHistoryResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ iccid: [iccid, string()] });
    req.appendTemplatePath`/esim/${mapped.iccid}/history`;
    req.throwOn(400, EsimHistory400Error, 'Bad Request');
    req.throwOn(401, EsimHistory401Error, 'Unauthorized');
    return req.callAsJson(esimHistoryResponseSchema, requestOptions);
  }

  /**
   * Get MAC from eSIM
   *
   * @param iccid
   * @return Response from the API call
   */
  async getESIMMac(
    iccid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EsimMacResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ iccid: [iccid, string()] });
    req.appendTemplatePath`/esim/${mapped.iccid}/mac`;
    req.throwOn(400, EsimMac400Error, 'Bad Request');
    req.throwOn(401, EsimMac401Error, 'Unauthorized');
    return req.callAsJson(esimMacResponseSchema, requestOptions);
  }
}
