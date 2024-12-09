export declare function failable<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]>;

export declare function failableSync<R, F extends (...args: any[]) => R>(func: F, ...args: Parameters<F>): [undefined, R] | [Error];
