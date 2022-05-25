/**
 * @ignore
 * Type to indicate the constructor of a specified class
 */
export declare type Newable<T = any> = {
  new (...args: any[]): T;
};
