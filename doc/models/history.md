
# History

## Structure

`History`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| undefined` | Optional | The status of the eSIM at a given time, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR' |
| `statusDate` | `string \| undefined` | Optional | The date when the eSIM status changed in the format 'yyyy-MM-ddThh:mm:ssZZ' |
| `date` | `number \| undefined` | Optional | Epoch value representing the date when the eSIM status changed |

## Example (as JSON)

```json
{
  "status": "INSTALLED",
  "statusDate": "10/20/2023 00:00:00",
  "date": 1599262839.0
}
```

