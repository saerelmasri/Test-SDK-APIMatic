
# Packages Response

## Structure

`PackagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `packages` | [`Package[] \| undefined`](../../doc/models/package.md) | Optional | - |
| `afterCursor` | `string \| null \| undefined` | Optional | The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination |

## Example (as JSON)

```json
{
  "afterCursor": "Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA",
  "packages": [
    {
      "id": "id6",
      "destination": "destination8",
      "dataLimitInBytes": 246.28,
      "minDays": 143.92,
      "maxDays": 98.14
    },
    {
      "id": "id6",
      "destination": "destination8",
      "dataLimitInBytes": 246.28,
      "minDays": 143.92,
      "maxDays": 98.14
    },
    {
      "id": "id6",
      "destination": "destination8",
      "dataLimitInBytes": 246.28,
      "minDays": 143.92,
      "maxDays": 98.14
    }
  ]
}
```

