# rapid-clone
 JavaScript Object Rapid Deep Clone

# 특이사항
JSON.stringify()를 통해 추출되는 데이터만 복제합니다.

# 사용법
```javascript
const { cloneObjectDeep, cloneArrayDeep } = require('rapid-clone');

const obj1 = {
    a: 'gshong',
    b: 30,
    c: null,
    d: new Date(),
    e: {
        f: {},
        g: [
            1,
            2,
            3,
            {
                gg: 'akim',
                hf: 30,
            },
        ],
    },
};

const obj2 = cloneObjectDeep(obj1);

const arr1 = [1, 2, 3, 'yellow', true];
const arr2 = cloneArrayDeep(arr1);
```
