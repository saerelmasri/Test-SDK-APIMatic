
# Esim 2

## Structure

`Esim2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string \| undefined` | Optional | ID of the eSIM<br>**Constraints**: *Minimum Length*: `18`, *Maximum Length*: `22` |
| `history` | [`History[] \| undefined`](../../doc/models/history.md) | Optional | - |

## Example (as JSON)

```json
{
  "iccid": "1111222233334444555",
  "history": [
    {
      "status": "status4",
      "statusDate": "2016-03-13T12:52:32.123Z",
      "date": 50.5
    }
  ]
}
```

