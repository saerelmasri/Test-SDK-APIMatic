# E SIM

The eSIM endpoints encompass a wide range of functionalities related to the partner's owned eSIMs. This includes obtaining detailed information about eSIM devices, eSIM history, determining the current eSIM status, retrieving activation codes, and exploring various other attributes and actions associated with eSIM management.

```ts

```

## Class Name

`ESIMController`

## Methods

* [Get ESIM](../../doc/controllers/e-sim.md#get-esim)
* [Get ESIM Device](../../doc/controllers/e-sim.md#get-esim-device)
* [Get ESIM History](../../doc/controllers/e-sim.md#get-esim-history)
* [Get ESIM Mac](../../doc/controllers/e-sim.md#get-esim-mac)


# Get ESIM

Get status from eSIM

```ts
async getESIM(
  iccid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EsimResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string` | Query, Required | **Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EsimResponse`](../../doc/models/esim-response.md)

## Example Usage

```ts
const iccid = '1111222233334444555';

try {
  const newClient = await authorize();
  const eSIMController = new ESIMController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await eSIMController.getESIM(iccid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Esim400Error`](../../doc/models/esim-400-error.md) |
| 401 | Unauthorized | [`Esim401Error`](../../doc/models/esim-401-error.md) |


# Get ESIM Device

Get device info from an installed eSIM

```ts
async getESIMDevice(
  iccid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EsimDeviceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string` | Template, Required | **Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EsimDeviceResponse`](../../doc/models/esim-device-response.md)

## Example Usage

```ts
const iccid = '1111222233334444555';

try {
  const newClient = await authorize();
  const eSIMController = new ESIMController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await eSIMController.getESIMDevice(iccid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`EsimDevice400Error`](../../doc/models/esim-device-400-error.md) |
| 401 | Unauthorized | [`EsimDevice401Error`](../../doc/models/esim-device-401-error.md) |


# Get ESIM History

Get history from an eSIM

```ts
async getESIMHistory(
  iccid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EsimHistoryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string` | Template, Required | **Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EsimHistoryResponse`](../../doc/models/esim-history-response.md)

## Example Usage

```ts
const iccid = '1111222233334444555';

try {
  const newClient = await authorize();
  const eSIMController = new ESIMController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await eSIMController.getESIMHistory(iccid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`EsimHistory400Error`](../../doc/models/esim-history-400-error.md) |
| 401 | Unauthorized | [`EsimHistory401Error`](../../doc/models/esim-history-401-error.md) |


# Get ESIM Mac

Get MAC from eSIM

```ts
async getESIMMac(
  iccid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EsimMacResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string` | Template, Required | **Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EsimMacResponse`](../../doc/models/esim-mac-response.md)

## Example Usage

```ts
const iccid = '1111222233334444555';

try {
  const newClient = await authorize();
  const eSIMController = new ESIMController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await eSIMController.getESIMMac(iccid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`EsimMac400Error`](../../doc/models/esim-mac-400-error.md) |
| 401 | Unauthorized | [`EsimMac401Error`](../../doc/models/esim-mac-401-error.md) |

