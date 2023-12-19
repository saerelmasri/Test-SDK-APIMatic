
# Purchases Topup Request

## Structure

`PurchasesTopupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string` | Required | ID of the eSIM<br>**Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `dataLimitInGB` | `number` | Required | Size of the package in GB. The available options are 1, 2, 3, 5, 8, 20GB |
| `startDate` | `string` | Required | Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months. |
| `endDate` | `string` | Required | End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date. |
| `email` | `string \| undefined` | Optional | Email address where the purchase confirmation email will be sent (excluding QR Code & activation steps) |
| `startTime` | `number \| undefined` | Optional | Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months. |
| `endTime` | `number \| undefined` | Optional | Epoch value representing the end time of the package's validity. End time can be maximum 60 days after Start time. |

## Example (as JSON)

```json
{
  "iccid": "1111222233334444555",
  "dataLimitInGB": 1.0,
  "startDate": "2023-11-01",
  "endDate": "2023-11-20",
  "email": "example@domain.com",
  "startTime": 1672051891.0,
  "endTime": 1672396681.0
}
```

