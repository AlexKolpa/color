import { fromHsl } from '../src';

describe('fromHsl', () => {
	it('wraps hsl values properly', () => {
		const color = fromHsl(4, 1, 0.66);
		expect(color.components()).toEqual([4, 1, 0.66, 1]);
	});
	it('converts hsla to hsl properly', () => {
		const color = fromHsl(4, 1, 0.66, 0.5);
		expect(color.components()).toEqual([4, 1, 0.66, 0.5]);
	});
	it('clamps improper hsl values', () => {
		const color = fromHsl(500, 1.2, 0.66);
		expect(color.components()).toEqual([360, 1, 0.66, 1]);
	});
});
