import { fromRgb } from '../src';

describe('fromRgb', () => {
	it('converts rgb to hsl properly', () => {
		const color = fromRgb(255, 92, 81);
		expect(color.components()).toEqual([4, 1, 0.66, 1]);
	});
	it('converts rgba to hsl properly', () => {
		const color = fromRgb(255, 92, 81, 51);
		expect(color.components()).toEqual([4, 1, 0.66, 0.2]);
	});
	it('clamps improper rgb values', () => {
		const color = fromRgb(500, 92, 81);
		expect(color.components()).toEqual([4, 1, 0.66, 1]);
	});
});