# Packages

The Packages endpoint focuses on the data packages offered by CELITECH.

```ts

```

## Class Name

`PackagesController`


# List Packages

List of available packages

```ts
async listPackages(
  destination?: string,
  startDate?: string,
  endDate?: string,
  afterCursor?: string,
  limit?: number,
  startTime?: number,
  endTime?: number,
  duration?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PackagesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `destination` | `string \| undefined` | Query, Optional | - |
| `startDate` | `string \| undefined` | Query, Optional | Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months. |
| `endDate` | `string \| undefined` | Query, Optional | End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date. |
| `afterCursor` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `startTime` | `number \| undefined` | Query, Optional | - |
| `endTime` | `number \| undefined` | Query, Optional | - |
| `duration` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PackagesResponse`](../../doc/models/packages-response.md)

## Example Usage

```ts
const destination = 'FRA';

const startDate = '2023-11-01';

const endDate = '2023-11-20';

const afterCursor = 'Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA';

const limit = 20;

const startTime = 1672052449;

const endTime = 1672396681;

const duration = 344232;

try {
  const newClient = await authorize();
  const packagesController = new PackagesController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await packagesController.listPackages(
  destination,
  startDate,
  endDate,
  afterCursor,
  limit,
  startTime,
  endTime,
  duration
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
| 400 | Bad Request | [`Packages400Error`](../../doc/models/packages-400-error.md) |
| 401 | Unauthorized | [`Packages401Error`](../../doc/models/packages-401-error.md) |

