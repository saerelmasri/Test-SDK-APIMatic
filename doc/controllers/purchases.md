# Purchases

The Purchases endpoints offer extensive capabilities for managing eSIM purchases. Partners can utilize these endpoints to acquire new eSIMs, top-up an existing eSIM, list all existing purchases, update the activation period for future purchases, monitor the consumption and status of current purchases, and access other functionalities to support different purchasing workflows and requirements.

```ts

```

## Class Name

`PurchasesController`

## Methods

* [Create Purchase](../../doc/controllers/purchases.md#create-purchase)
* [List Purchases](../../doc/controllers/purchases.md#list-purchases)
* [Top up ESIM](../../doc/controllers/purchases.md#top-up-esim)
* [Edit Purchase](../../doc/controllers/purchases.md#edit-purchase)
* [Get Purchase Consumption](../../doc/controllers/purchases.md#get-purchase-consumption)


# Create Purchase

This endpoint is used to purchase a new eSIM by providing the package details.

```ts
async createPurchase(
  body?: PurchasesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PurchasesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PurchasesRequest \| undefined`](../../doc/models/purchases-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PurchasesResponse`](../../doc/models/purchases-response.md)

## Example Usage

```ts
const body: PurchasesRequest = {
  destination: 'FRA',
  dataLimitInGB: 1,
  startDate: '2023-11-01',
  endDate: '2023-11-20',
  email: 'example@domain.com',
  networkBrand: 'CELITECH',
  startTime: 1672051891,
  endTime: 1672396681,
};

try {
  const newClient = await authorize();
  const purchasesController = new PurchasesController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await purchasesController.createPurchase(body);
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
| 400 | Bad Request | [`Purchases400Error`](../../doc/models/purchases-400-error.md) |
| 401 | Unauthorized | [`Purchases401Error`](../../doc/models/purchases-401-error.md) |


# List Purchases

This endpoint can be used to list all the successful purchases made between a given interval.

```ts
async listPurchases(
  iccid?: string,
  afterDate?: string,
  beforeDate?: string,
  afterCursor?: string,
  limit?: number,
  after?: number,
  before?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PurchasesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string \| undefined` | Query, Optional | **Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `afterDate` | `string \| undefined` | Query, Optional | Start date of the interval for filtering purchases in the format 'yyyy-MM-dd' |
| `beforeDate` | `string \| undefined` | Query, Optional | End date of the interval for filtering purchases in the format 'yyyy-MM-dd' |
| `afterCursor` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `after` | `number \| undefined` | Query, Optional | - |
| `before` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PurchasesResponse1`](../../doc/models/purchases-response-1.md)

## Example Usage

```ts
const iccid = '1111222233334444555';

const afterDate = '2023-11-01';

const beforeDate = '2023-11-20';

const afterCursor = 'Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA';

const limit = 20;

const after = 1672052365;

const before = 1672396681;

try {
  const newClient = await authorize();
  const purchasesController = new PurchasesController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await purchasesController.listPurchases(
  iccid,
  afterDate,
  beforeDate,
  afterCursor,
  limit,
  after,
  before
);
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
| 400 | Bad Request | [`Purchases400Error`](../../doc/models/purchases-400-error.md) |
| 401 | Unauthorized | [`Purchases401Error`](../../doc/models/purchases-401-error.md) |


# Top up ESIM

This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.

```ts
async topUpESIM(
  body?: PurchasesTopupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PurchasesTopupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PurchasesTopupRequest \| undefined`](../../doc/models/purchases-topup-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PurchasesTopupResponse`](../../doc/models/purchases-topup-response.md)

## Example Usage

```ts
const body: PurchasesTopupRequest = {
  iccid: '1111222233334444555',
  dataLimitInGB: 1,
  startDate: '2023-11-01',
  endDate: '2023-11-20',
  email: 'example@domain.com',
  startTime: 1672051891,
  endTime: 1672396681,
};

try {
  const newClient = await authorize();
  const purchasesController = new PurchasesController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await purchasesController.topUpESIM(body);
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
| 400 | Bad Request | [`PurchasesTopup400Error`](../../doc/models/purchases-topup-400-error.md) |
| 401 | Unauthorized | [`PurchasesTopup401Error`](../../doc/models/purchases-topup-401-error.md) |


# Edit Purchase

This endpoint allows you to modify the dates of an existing package with a future activation start time. Editing can only be performed for packages that have not been activated, and it cannot change the package size. The modification must not change the package duration category to ensure pricing consistency.

```ts
async editPurchase(
  body?: PurchasesEditRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PurchasesEditResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PurchasesEditRequest \| undefined`](../../doc/models/purchases-edit-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PurchasesEditResponse`](../../doc/models/purchases-edit-response.md)

## Example Usage

```ts
const body: PurchasesEditRequest = {
  purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
  startDate: '2023-11-01',
  endDate: '2023-11-20',
  startTime: 1672051891,
  endTime: 1672396681,
};

try {
  const newClient = await authorize();
  const purchasesController = new PurchasesController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await purchasesController.editPurchase(body);
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
| 400 | Bad Request | [`PurchasesEdit400Error`](../../doc/models/purchases-edit-400-error.md) |
| 401 | Unauthorized | [`PurchasesEdit401Error`](../../doc/models/purchases-edit-401-error.md) |


# Get Purchase Consumption

This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.

```ts
async getPurchaseConsumption(
  purchaseId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PurchasesConsumptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `purchaseId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PurchasesConsumptionResponse`](../../doc/models/purchases-consumption-response.md)

## Example Usage

```ts
const purchaseId = '4973fa15-6979-4daa-9cf3-672620df819c';

try {
  const newClient = await authorize();
  const purchasesController = new PurchasesController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await purchasesController.getPurchaseConsumption(purchaseId);
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
| 400 | Bad Request | [`PurchasesConsumption400Error`](../../doc/models/purchases-consumption-400-error.md) |
| 401 | Unauthorized | [`PurchasesConsumption401Error`](../../doc/models/purchases-consumption-401-error.md) |

