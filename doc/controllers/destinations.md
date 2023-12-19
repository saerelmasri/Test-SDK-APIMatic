# Destinations

Destinations encapsulate the various countries & regions that CELITECH currently supports.

```ts

```

## Class Name

`DestinationsController`


# List Destinations

Name of the destinations

```ts
async listDestinations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DestinationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DestinationsResponse`](../../doc/models/destinations-response.md)

## Example Usage

```ts
try {
  const newClient = await authorize();
  const destinationsController = new DestinationsController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await destinationsController.listDestinations();
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
| 400 | Bad Request | [`Destinations400Error`](../../doc/models/destinations-400-error.md) |
| 401 | Unauthorized | [`Destinations401Error`](../../doc/models/destinations-401-error.md) |

