
# Purchases Edit Request

## Structure

`PurchasesEditRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `purchaseId` | `string` | Required | ID of the purchase |
| `startDate` | `string` | Required | Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months. |
| `endDate` | `string` | Required | End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date. |
| `startTime` | `number \| undefined` | Optional | Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months. |
| `endTime` | `number \| undefined` | Optional | Epoch value representing the end time of the package's validity. End time can be maximum 60 days after Start time. |

## Example (as JSON)

```json
{
  "purchaseId": "ae471106-c8b4-42cf-b83a-b061291f2922",
  "startDate": "2023-11-01",
  "endDate": "2023-11-20",
  "startTime": 1672051891.0,
  "endTime": 1672396681.0
}
```

