
# Package 1

## Structure

`Package1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the package |
| `dataLimitInBytes` | `number \| undefined` | Optional | Size of the package in Bytes |
| `destination` | `string \| undefined` | Optional | ISO representation of the package's destination |
| `destinationName` | `string \| undefined` | Optional | Name of the package's destination |
| `priceInCents` | `number \| undefined` | Optional | Price of the package in cents |

## Example (as JSON)

```json
{
  "id": "4973fa15-6979-4daa-9cf3-672620df819c",
  "dataLimitInBytes": 1073741824.0,
  "destination": "FRA",
  "destinationName": "France",
  "priceInCents": 10000.0
}
```

