
# Purchase

## Structure

`Purchase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the purchase |
| `packageId` | `string \| undefined` | Optional | ID of the package |
| `startDate` | `string \| undefined` | Optional | Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `endDate` | `string \| undefined` | Optional | End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `createdDate` | `string \| undefined` | Optional | Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `startTime` | `number \| undefined` | Optional | Epoch value representing the start time of the package's validity |
| `endTime` | `number \| undefined` | Optional | Epoch value representing the end time of the package's validity |

## Example (as JSON)

```json
{
  "id": "1b97b67a-f4ea-45ff-bbc1-8f424b1418c4",
  "packageId": "6cf19d46-b545-4029-a46b-cdeba22b6957",
  "startDate": "10/31/2023 22:00:00",
  "endDate": "11/20/2023 21:59:59",
  "createdDate": "10/20/2023 00:00:00",
  "startTime": 1672051891,
  "endTime": 1672396681
}
```

