
# Purchase 1

## Structure

`Purchase1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the purchase |
| `startDate` | `string \| undefined` | Optional | Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `endDate` | `string \| undefined` | Optional | End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `createdDate` | `string \| undefined` | Optional | Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `startTime` | `number \| undefined` | Optional | Epoch value representing the start time of the package's validity |
| `endTime` | `number \| undefined` | Optional | Epoch value representing the end time of the package's validity |
| `createdAt` | `number \| undefined` | Optional | Epoch value representing the date of creation of the purchase |
| `mPackage` | [`Package1 \| undefined`](../../doc/models/package-1.md) | Optional | - |
| `esim` | [`Esim \| undefined`](../../doc/models/esim.md) | Optional | - |
| `source` | `string \| undefined` | Optional | The source indicates where the eSIM was purchased, which can be from the API, dashboard, or landing-page. For purchases made before September 8, 2023, the value will be displayed as 'Not available'. |

## Example (as JSON)

```json
{
  "id": "4973fa15-6979-4daa-9cf3-672620df819c",
  "startDate": "10/31/2023 22:00:00",
  "endDate": "11/20/2023 21:59:59",
  "createdDate": "10/20/2023 00:00:00",
  "startTime": 1073741824.0,
  "endTime": 1073841824,
  "createdAt": 1073841824,
  "source": "API"
}
```

