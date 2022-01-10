/** 객체 깊은 복사 */
export function cloneObjectDeep<T>(obj: T): T {
    const clone: any = {};
    if (typeof obj !== 'object') return clone;
    for (const key in obj) {
        const value = obj[key];
        if (Array.isArray(value)) {
            clone[key] = cloneArrayDeep(value);
        } else if (value instanceof Date) {
            clone[key] = value;
        } else if (typeof value === 'object' && value != null) {
            clone[key] = cloneObjectDeep(value);
        } else {
            clone[key] = value;
        }
    }
    return clone;
}

/** 배열 깊은 복사 */
export function cloneArrayDeep<T>(arr: T[]): T[] {
    const clone: any[] = [];
    if (Array.isArray(arr) === false) return clone;
    for (const item of arr) {
        if (Array.isArray(item)) {
            clone.push(cloneArrayDeep(item));
        } else if (item instanceof Date) {
            clone.push(item);
        } else if (typeof item === 'object' && item != null) {
            clone.push(cloneObjectDeep(item));
        } else {
            clone.push(item);
        }
    }
    return clone;
}
