
# Purchases Response

## Structure

`PurchasesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `purchase` | [`Purchase \| undefined`](../../doc/models/purchase.md) | Optional | - |
| `profile` | [`Profile \| undefined`](../../doc/models/profile.md) | Optional | - |

## Example (as JSON)

```json
{
  "purchase": {
    "id": "id8",
    "packageId": "packageId6",
    "startDate": "2016-03-13T12:52:32.123Z",
    "endDate": "2016-03-13T12:52:32.123Z",
    "createdDate": "2016-03-13T12:52:32.123Z"
  },
  "profile": {
    "iccid": "iccid6",
    "activationCode": "activationCode8"
  }
}
```

