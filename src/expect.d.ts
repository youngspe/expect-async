declare module 'expect' {
    module expect {
        export interface Expectation<T> {
            /**
             * Asserts the given object is truthy.
             */
            toExist(message?: string): Expectation<T>;
        
            /**
             * Asserts the given object is falsy.
             */
            toNotExist(message?: string): Expectation<T>;
        
            /**
             * Asserts that object is strictly equal to value using ===.
             */
            toBe(value: T, message?: string): Expectation<T>;
        
            /**
             * Asserts that object is not strictly equal to value using ===.
             */
            toNotBe(value: T, message?: string): Expectation<T>;
        
            /**
             * Asserts that the given object equals value using deep-equal.
             */
            toEqual(value: T, message?: string): Expectation<T>;
        
            /**
             * Asserts that the given object is not equal to value using deep-equal.
             */
            toNotEqual(value: T, message?: string): Expectation<T>;
        
            /**
             * Asserts the given object is an instanceof constructor.
             */
            toBeA(string: string, message?: string): Expectation<T>;
        
            /**
             * Asserts the given object is an instanceof constructor.
             */
            toBeAn(string: string, message?: string): Expectation<T>;
        
            /**
             * Asserts the typeof the given object is string.
             */
            toBeA(constructor: Function, message?: string): Expectation<T>;
        
            /**
             * Asserts the typeof the given object is string.
             */
            toBeAn(constructor: Function, message?: string): Expectation<T>;
        
            /**
             * Asserts the given object is not an instanceof constructor.
             */
            toNotBeA(string: string, message?: string): Expectation<T>;
        
            /**
             * Asserts the given object is not an instanceof constructor.
             */
            toNotBeAn(string: string, message?: string): Expectation<T>;
        
            /**
             * Asserts the typeof the given object is not string.
             */
            toNotBeA(constructor: Function, message?: string): Expectation<T>;
        
            /**
             * Asserts the typeof the given object is not string.
             */
            toNotBeAn(constructor: Function, message?: string): Expectation<T>;
        }

        export interface FunctionExpectation extends Expectation<Function> {
            /**
             * Asserts that the given block throws an error.
             */
            toThrow(): FunctionExpectation;
        
            /**
             * Asserts that the given block throws an error that matches the given string or RegExp.
             */
            toThrow(error: string | RegExp): FunctionExpectation;
        
            /**
             * Asserts that the given block throws an error that is an instanceof constructor.
             */
            toThrow(constructor: Function, message?: string): FunctionExpectation;
        
            /**
             * Asserts that the given block does not throw.
             */
            toNotThrow(message?: string): FunctionExpectation;
        
            /**
             * Calls the given block with args.
             */
            withArgs(...args: any[]): FunctionExpectation;
        
            /**
             * Calls the given block in the given context.
             */
            withContext(context: {}): FunctionExpectation;
        }

        export interface StringExpectation extends Expectation<string> {
            /**
             * Asserts the given string matches pattern, which must be a RegExp.
             */
            toMatch(pattern: RegExp, message?: string): StringExpectation;
        
            /**
             * Asserts the given string does not match pattern, which must be a RegExp.
             */
            toNotMatch(pattern: RegExp, message?: string): StringExpectation;
        
            /**
             * Asserts the given string contains value.
             */
            toInclude(value: string, message?: string): StringExpectation;
        
            /**
             * Asserts the given string contains value.
             */
            toContain(value: string, message?: string): StringExpectation;
        
            /**
             * Asserts the given string does not contain value.
             */
            toNotInclude(value: string, message?: string): StringExpectation;
        
            /**
             * Asserts the given string does not contain value.
             */
            toNotContain(value: string, message?: string): StringExpectation;
        }

        export interface NumberExpectation extends Expectation<number> {
            /**
             * Asserts the given number is less than value.
             */
            toBeLessThan(value: number, message?: string): NumberExpectation;
        
            /**
             * Asserts the given number is greater than value.
             */
            toBeGreaterThan(value: number, message?: string): NumberExpectation;
        }

        export interface ArrayExpectation<T> extends Expectation<T[]> {
            /**
             * Asserts the given array contains value.
             * @param value
             * @param comparator
             * Function to compare two objects and either return false or throw if they are not equal.
             */
            toInclude<T>(value: T, comparator?: (item1: T, item2: T) => boolean, message?: string): ArrayExpectation<T>;
        
            /**
             * Asserts the given array contains value.
             * @param value
             * @param comparator
             * Function to compare two objects and either return false or throw if they are not equal.
             */
            toContain<T>(value: T, comparator?: (item1: T, item2: T) => boolean, message?: string): ArrayExpectation<T>;
        
            /**
             * Asserts the given array does not contain value.
             * @param value
             * @param comparator
             * Function to compare two objects and either return false or throw if they are not equal.
             */
            toExclude<T>(value: T, comparator?: (item1: T, item2: T) => boolean, message?: string): ArrayExpectation<T>;
        
            /**
             * Asserts the given array does not contain value.
             * @param value
             * @param comparator
             * Function to compare two objects and either return false or throw if they are not equal.
             */
            toNotContain<T>(value: T, comparator?: (item1: T, item2: T) => boolean, message?: string): ArrayExpectation<T>;
        }

        export interface SpyExpectation extends Expectation<Spy> {
            /**
             * Asserts the given spy has been called.
             */
            toHaveBeenCalled(message?: string): SpyExpectation;
        
            /**
             * Asserts the given spy has not been called.
             */
            toNotHaveBeenCalled(message?: string): SpyExpectation;
        
            /**
             * Asserts the given spy has been called with the given arguments.
             */
            toHaveBeenCalledWith(...args: any[]): SpyExpectation;
        }

        export interface Call {
            /**
             * The this value where the call was made.
             */
            context: {},
        
            /**
             * The arguments passed to the function.
             */
            arguments: any[]
        }

        export interface Spy extends Function {
            /**
             * Makes the spy invoke a function fn when called.
             */
            andCall(fn: Function): Spy;
        
            /**
             * Makes the spy call the original function it's spying on.
             */
            andCallThrough(): Spy;
        
            /**
             * Makes the spy return a value.
             */
            andReturn(value: any): Spy;
        
            /**
             * Makes the spy throw an error when called.
             */
            andThrow(error: any): Spy;
        
            /**
             * Restores a spy originally created with expect.spyOn().
             */
            restore(): void;
        
            /**
             * Restores a spy originally created with expect.spyOn().
             */
            destroy(): void;
        
            /**
             * Gets information about the last time the spy was called.
             */
            getLastCall(): Call;
        
            /**
             * A history of calls made to the spy.
             */
            calls: Call[];
        }

        /**
         * Creates a spy function.
         * @param fn The function to spy on.
         * @param restore The function to be called when the spy is restored.
         */
        export function createSpy(fn?: Function, restore?: Function): expect.Spy;
    
        /**
         * Replaces the method in target with a spy.
         */
        export function spyOn(target: {}, method: string): expect.Spy;
    
        /**
         * Returns true if object is a spy.
         */
        export function isSpy(object: any): boolean;
    
        /**
         * Restores all spies created with expect.spyOn().
         * This is the same as calling spy.restore() on all spies created.
         */
        export function restoreSpies(): void;

        export function extend(object: {}): void;
        export function assert(): void;
    }


    /**
     * Performs assertions on the given block.
     */
    function expect(block: () => void): expect.FunctionExpectation;

    /**
     * Performs assertions on the given string.
     */
    function expect(actual: string): expect.StringExpectation;

    /**
     * Performs assertions on the given number.
     */
    function expect(actual: number): expect.NumberExpectation;

    /**
     * Performs assertions on the given array.
     */
    function expect<T>(actual: T[]): expect.ArrayExpectation<T>;

    /**
     * Performs assertions on the given Spy.
     */
    function expect(spy: expect.Spy): expect.SpyExpectation;

    /**
     * Performs assertions on the given value.
     */
    function expect<T>(actual: T): expect.Expectation<T>;

    /*
    export import createSpy = expect.createSpy;
    export import spyOn = expect.spyOn;
    export import isSpy = expect.isSpy;
    export import restoreSpies = expect.restoreSpies;
    export import extend = expect.extend;
    export import assert = expect.assert;
    */
    export = expect;
}
