import { fromHsl } from '../src';

describe('color functions', () => {
	describe('fade', () => {
		it('should set alpha', () => {
			const color = fromHsl(4, 1, 0.66).fade(0.5);
			expect(color.components()).toEqual([4, 1, 0.66, 0.5]);
		});
		it('should be clamped', () => {
			const color = fromHsl(4, 1, 0.66).fade(-0.5);
			expect(color.components()).toEqual([4, 1, 0.66, 0]);
		});
	});
	describe('lighten', () => {
		it('should adjust lightness', () => {
			const color = fromHsl(4, 1, 0.66).lighten(0.1);
			expect(color.components()).toEqual([4, 1, 0.76, 1]);
		});
		it('should be clamped', () => {
			const color = fromHsl(4, 1, 0.66).lighten(0.5);
			expect(color.components()).toEqual([4, 1, 1, 1]);
		});
	});
	describe('darken', () => {
		it('should adjust lightness', () => {
			const color = fromHsl(4, 1, 0.66).darken(0.1);
			expect(color.components()).toEqual([4, 1, 0.56, 1]);
		});
		it('should be clamped', () => {
			const color = fromHsl(4, 1, 0.66).darken(0.8);
			expect(color.components()).toEqual([4, 1, 0, 1]);
		});
	});
	describe('saturate', () => {
		it('should adjust saturation', () => {
			const color = fromHsl(4, 0.8, 0.66).saturate(0.1);
			expect(color.components()).toEqual([4, 0.9, 0.66, 1]);
		});
		it('should be clamped', () => {
			const color = fromHsl(4, 1, 0.66).saturate(0.1);
			expect(color.components()).toEqual([4, 1, 0.66, 1]);
		});
	});
	describe('desaturate', () => {
		it('should adjust saturation', () => {
			const color = fromHsl(4, 1, 0.66).desaturate(0.1);
			expect(color.components()).toEqual([4, 0.9, 0.66, 1]);
		});
		it('should be clamped', () => {
			const color = fromHsl(4, 0.5, 0.66).desaturate(0.6);
			expect(color.components()).toEqual([4, 0, 0.66, 1]);
		});
	});
	describe('toHslString', () => {
		it('should convert to a proper css string', () => {
			const color = fromHsl(4, 1, 0.66);
			expect(color.toHslString()).toEqual('hsla(4, 100%, 66%, 1)');
		});
	});
});