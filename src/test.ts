/// <reference path="../typings/mocha/mocha.d.ts" />

import { createExpect } from './index';
import * as expect from 'expect';
import createSpy = expect.createSpy;

describe('test infrastructure', function() {
    describe('createExpect', function() {

        it('should call createExpect', () => {
            let _expect = createExpect(() => { });
        });

        it('should make some assertions', () => {
            let spy: expect.Spy;
            let m: string;

            function reject(ex: any) {
                if (ex) {
                    m = ex.message
                }
                spy();
            }
            let _expect = createExpect(reject);

            let s = () => createSpy();
                
            //should pass
            spy = s();
            _expect('foo').toBe('foo');
            expect(spy).toNotHaveBeenCalled();
            
            //should fail
            try {
                spy = s().andCall(() => { });
                _expect('foo').toBe('bar', 'message');
            } catch (ex) { }
            expect(spy).toHaveBeenCalled();
            expect(m).toBe('message');
            
            //should pass
            spy = s();
            _expect([0, 1, 2, 4]).toContain(2);
            expect(spy).toNotHaveBeenCalled();
                
            //should fail
            try {
                spy = s().andCall(() => { });
                _expect([0, 1, 2, 4]).toContain(3);
            } catch (ex) { }
            expect(spy).toHaveBeenCalled();
        });

        it('should chain assertions', () => {
            let m: string;
            let spy: expect.Spy;
            function reject(ex: any) {
                if (ex) { m = ex.message }
                else { m = undefined; }
                spy();
            }
            let _expect = createExpect(reject);

            let s = () => createSpy();
            //should pass
            spy = s();
            _expect(4).toBeGreaterThan(3).toBeLessThan(5);
            expect(spy).toNotHaveBeenCalled();
            
            //should fail the first time
            try {
                spy = s();
                _expect(2).toBeGreaterThan(3, 'A').toBeLessThan(5, 'B');
            } catch (ex) { }
            expect(spy).toHaveBeenCalled();
            expect(m).toBe('A');

            //should fail the second time
            try {
                spy = s();
                _expect(6).toBeGreaterThan(3, 'A').toBeLessThan(5, 'B');
            } catch (ex) { }
            expect(spy).toHaveBeenCalled();
            expect(m).toBe('B');
        });
    });
});
