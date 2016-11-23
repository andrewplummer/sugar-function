// Extended type definitions for Sugar v2.0.4
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

/// <reference path="sugar.d.ts" />

interface Function {
  after(n: number): Function;
  cancel(): Function;
  debounce(ms?: number): Function;
  delay(ms?: number, ...args: any[]): Function;
  every(ms?: number, ...args: any[]): Function;
  lazy(ms?: number, immediate?: boolean, limit?: number): Function;
  lock(n?: number): Function;
  memoize(hashFn?: string|Function, limit?: number): Function;
  once(): Function;
  partial(...args: any[]): Function;
  throttle(ms?: number): Function;
}