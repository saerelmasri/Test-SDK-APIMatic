
# Esim 3

## Structure

`Esim3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string \| undefined` | Optional | ID of the eSIM<br>**Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `smdpAddress` | `string \| undefined` | Optional | SM-DP+ Address |
| `manualActivationCode` | `string \| undefined` | Optional | The manual activation code |

## Example (as JSON)

```json
{
  "iccid": "1111222233334444555",
  "smdpAddress": "celitech.idemia.io",
  "manualActivationCode": "LPA:1$CELITECH.IDEMIA.IO$AAAAA-BBBBB-CCCCC-DDDDD"
}
```

