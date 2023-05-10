import { defer } from "rxjs";

// create async observable that emits data 
export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}