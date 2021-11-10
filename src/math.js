// tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)
export function square(x) {
    return x * x;
}

export function cube(x) {
    return x * x * x;
}