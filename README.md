# Rapid JavaScript Object Deep Clone

## Note

Only data extracted through `JSON.stringify()` is duplicated.

## Usage

```javascript
const { cloneObjectDeep, cloneArrayDeep } = require('rapid-clone');

const obj1 = {
    color: 'Yellow',
    age: 30,
    nothing: null,
    currentDate: new Date(),
    low: {
        middle: {},
        someList: [
            1,
            2,
            3,
            {
                name: 'Kim',
                health: 30,
            },
        ],
    },
};

const obj2 = cloneObjectDeep(obj1);

const arr1 = [1, 2, 3, 'yellow', true];
const arr2 = cloneArrayDeep(arr1);
```
