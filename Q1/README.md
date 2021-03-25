# Q1: Story

A small restaurant wants to have an app to print a payment receipt, the resto has a dot matrix printer. While you developing the app to print that receipt, you have to make sure every input and output working as expected when printing the receipt by following the required parameters of dot matrix printer.

## Given

- Max width of one line is 30 characters.

## Known/Constraints

- When text is more than 30 characters, the rest must be over to the new line
- Output at the section of price list must be connected with dot character (...) between the item name until the item price
- Item name always aligned to left, Item price always aligned to right with Rp as prefix

## Expected Input

- Input resto name
- Input date of print
- Input cashier name
- Input item and price, for this can be multiple times input until the user said exit

### Test App

```bash
node index.js
```
