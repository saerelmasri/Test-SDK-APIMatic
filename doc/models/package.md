
# Package

## Structure

`Package`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the package |
| `destination` | `string \| undefined` | Optional | ISO representation of the package's destination |
| `dataLimitInBytes` | `number \| undefined` | Optional | Size of the package in Bytes |
| `minDays` | `number \| undefined` | Optional | Min number of days for the package |
| `maxDays` | `number \| undefined` | Optional | Max number of days for the package |
| `priceInCents` | `number \| undefined` | Optional | Price of the package in cents |

## Example (as JSON)

```json
{
  "id": "4973fa15-6979-4daa-9cf3-672620df819c",
  "destination": "FRA",
  "dataLimitInBytes": 1073741824.0,
  "minDays": 0.0,
  "maxDays": 30.0,
  "priceInCents": 10000
}
```

