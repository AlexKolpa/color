import { fromHex } from '../src/index.js';

describe('fromHex', () => {
	it('transforms hex colors to hsl properly', () => {
		const color = fromHex('#FCCA48');
		expect(color.components()).toEqual([43, 0.97, 0.64, 1]);
	});
	it('transforms hex colors with alpha to hsl properly', () => {
		const color = fromHex('#FCCA4833');
		expect(color.components()).toEqual([43, 0.97, 0.64, 0.2]);
	});
	it('throws on an incorrectly formatted string', () => {
		expect(() => fromHex('someString')).toThrow();
	});
	it('throws on an incorrectly formatted string', () => {
		expect(() => fromHex('someString')).toThrow();
	});
});
