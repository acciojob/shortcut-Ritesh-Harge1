# Shortcut Function

## Instructions

Write a function `shortcut` that takes two strings and returns the initial letters of these strings. If either of the input strings is empty, return an empty string.

## Examples

```javascript
shortcut("Amnesty", "International"); // 'AI'
shortcut("Hello", "world"); // 'Hw'
shortcut("", "International"); // ''
shortcut("Amnesty", ""); // ''
```

## Constraints

- The input strings contain only alphabetical characters (A-Z and a-z).
- The length of the input strings is at most 100 characters.

## Acceptance Criteria

- The function should return a string.
- If both input strings have at least one character, the function should return the initial letters of these strings.
- The function should handle upper- and lowercase characters correctly.
