
# Purchases Edit Response

## Structure

`PurchasesEditResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `purchaseId` | `string \| undefined` | Optional | ID of the purchase |
| `newStartDate` | `string \| undefined` | Optional | Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `newEndDate` | `string \| undefined` | Optional | End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `newStartTime` | `number \| undefined` | Optional | Epoch value representing the new start time of the package's validity |
| `newEndTime` | `number \| undefined` | Optional | Epoch value representing the new end time of the package's validity |

## Example (as JSON)

```json
{
  "purchaseId": "ae471106-c8b4-42cf-b83a-b061291f2922",
  "newStartDate": "10/31/2023 22:00:00",
  "newEndDate": "11/20/2023 21:59:59",
  "newStartTime": 1579168309.0,
  "newEndTime": 1579178309.0
}
```

