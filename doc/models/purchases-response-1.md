
# Purchases Response 1

## Structure

`PurchasesResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `purchases` | [`Purchase1[] \| undefined`](../../doc/models/purchase-1.md) | Optional | - |
| `afterCursor` | `string \| null \| undefined` | Optional | The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination. |

## Example (as JSON)

```json
{
  "afterCursor": "Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA",
  "purchases": [
    {
      "id": "id8",
      "startDate": "2016-03-13T12:52:32.123Z",
      "endDate": "2016-03-13T12:52:32.123Z",
      "createdDate": "2016-03-13T12:52:32.123Z",
      "startTime": 155.94
    },
    {
      "id": "id8",
      "startDate": "2016-03-13T12:52:32.123Z",
      "endDate": "2016-03-13T12:52:32.123Z",
      "createdDate": "2016-03-13T12:52:32.123Z",
      "startTime": 155.94
    }
  ]
}
```

