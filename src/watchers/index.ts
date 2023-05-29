/**
 * @param fnCondition The function condition to break the waiting
 * @param callback The callback to call after the resolve of the waiting
 * @param maxWaitingTime The max time to wait in ms
 */
export const $waitUntil = (fnCondition: (...args: any[]) => boolean, callback: (...args: any[]) => any, maxWaitingTime: number = 5000) => {
    if (maxWaitingTime <= 0)
        throw 'Waiting timeout';
    if (!fnCondition()) {
        setTimeout(() => {
            $waitUntil(fnCondition, callback, maxWaitingTime - 50);
        }, 50);
    } else {
        callback();
    }
};