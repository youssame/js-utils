export function $1(selector: string): Element | null {
    return document.querySelector(selector);
}
export function $n(selector: string): NodeListOf<Element> {
    return document.querySelectorAll(selector);
}