/// <reference path="../typings/es6-promise/es6-promise" />
/// <reference path="./expect" />

import * as expect from 'expect';
import createSpy = expect.createSpy;
import { Promise } from 'es6-promise';

export type ExpectObject = typeof expect;

let expectMethods = [
    'toBe',
    'toBeA',
    'toBeA',
    'toBeAn',
    'toBeAn',
    'toBeGreaterThan',
    'toBeLessThan',
    'toContain',
    'toEqual',
    'toExist',
    'toHaveBeenCalled',
    'toHaveBeenCalledWith',
    'toInclude',
    'toMatch',
    'toNotBe',
    'toNotBeA',
    'toNotBeA',
    'toNotBeAn',
    'toNotBeAn',
    'toNotContain',
    'toNotEqual',
    'toNotExist',
    'toNotHaveBeenCalled',
    'toNotInclude',
    'toNotMatch',
    'toNotThrow',
    'toThrow',
    'toThrow',
    'toThrow',
    'withArgs',
    'withContext'
]

function wrapExpectation(src: any, reject: Function): {} {
    let wrapper: { [index: string]: Function } = {};
    for (let method of expectMethods) {
        ((method: string) => {
            wrapper[method] = (...args: any[]) => {
                let returnValue: any;
                try {
                    returnValue = src[method].apply(src, args);
                } catch (ex) {
                    reject(ex);
                    throw ex;
                }
                return wrapExpectation(returnValue, reject);

            }
        })(method);
    }
    return wrapper;
}

/**
 * Creates an Expect object.
 * @param reject The function to be called if the assertion fails.
 */
export function createExpect(reject: Function): ExpectObject {
    function _expect(value: any) {
        return wrapExpectation(expect.apply(this, arguments), reject);
    }
    
    // Export all the properties of expect.
    for (let key in expect) {
        ((key: string) => {
            Object.defineProperty(
                _expect,
                key,
                { get: () => (expect as any)[key] });
        })(key);
    }
    
    return _expect as any as ExpectObject;
}
