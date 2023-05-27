export function $1(selector: string): Element | null {
    return document.querySelector(selector);
}
export function $n(selector: string): Element[] {
    const elements = document.querySelectorAll(selector);
    return Object.values(elements).map(el => el)
}