# protocol
### About
This page contains information and data regarding the gats.io protocol
___
### Parsing incomong data
1. Convert buffer to text via `TextDecoder`
2. Split the text on the character `|`
3. Split each of the chunks on the character `,`

The first item in each chunk is the OP code.

### OP Codes
| Code | Description |
| ---  | ---         |
| a | The player has spawned. |
| b | Position, velocity, and angle updates for player. |
| c | Graphical updates for player. See the section for this OP code below for more information. |
| d | Command to load a player. |
| e | Command to unload a player. |
