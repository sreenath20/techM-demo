// to create async error emits error if we subscribe

import { defer } from "rxjs";

export function asyncError<T>(errorObj: any) {
    return defer(() => Promise.reject(errorObj));
}