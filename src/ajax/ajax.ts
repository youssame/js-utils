export type fetchInit = {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
    mode: "cors" | "no-cors" | "same-origin"
    cache: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached"
    credentials: "include" | "same-origin" | "omit"
    headers: { [key: string]: string }
    redirect: "manual" | "follow" | "error"
    referrerPolicy: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin"
    | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"
    body?: string
};
export const defaultFetchInit: fetchInit = {
    method: "GET",
    mode: "cors",
    cache: "default",
    credentials: "include",
    headers: {
        "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer"
};
export async function $ajax<T>(url: string, fetchInit: fetchInit = defaultFetchInit): Promise<T> {
    const response = await fetch(url, fetchInit);
    return response.json() as T;
}