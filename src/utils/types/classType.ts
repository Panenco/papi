/**
 * Type to indicate the constructor of a specified class
 */
export declare type ClassType<T> = {
  new (...args: any[]): T;
};
