import { $n } from './../selections/index';

export const NOT_FOUND_ELEMENT_MESSAGE = "Element not found in the DOM";

export const $when = (
    _event: keyof HTMLMediaElementEventMap,
    _onEl: Element | Element[] | string,
    _do: (e: Event) => void
): void => {
    // Check if the _onEl is an array of elements
    if (Array.isArray(_onEl)) {
        _onEl.forEach(el => {
            if (!el) throw NOT_FOUND_ELEMENT_MESSAGE;
            el.addEventListener(_event, _do);
        });
        return;
    }
    // check if _onEl is an element
    if (typeof _onEl === "object") {
        _onEl.addEventListener(_event, _do);
        return;
    }

    // Check if the _onEl is a selector that returns on or many elements
    const elements = $n(_onEl);
    if (!elements.length) throw NOT_FOUND_ELEMENT_MESSAGE;
    elements.forEach(el => el.addEventListener(_event, _do));
}