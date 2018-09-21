function clamp(val) {
	return Math.min(1, Math.max(0, val));
}

function color(h, s, l, a) {
	return {
		lighten(val) {
			return color(h, s, clamp(l + val), a);
		},
		darken(val) {
			return color(h, s, clamp(l - val), a);
		},
		saturate(val) {
			return color(h, clamp(s + val), l, a);
		},
		desaturate(val) {
			return color(h, clamp(s - val), l, a);
		},
		fade(val) {
			return color(h, s, l, clamp(val));
		},
		components() {
			return [h, s, l, a];
		},
		toHslString() {
			return `hsla(${h}, ${s * 100}%, ${l * 100}%, ${a})`;
		}
	};
}

function colorFromRgb(r, g, b, a) {
	let h, s, l;

	r = clamp(r / 255);
	g = clamp(g / 255);
	b = clamp(b / 255);
	a = clamp(a / 255);
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);

	switch (max) {
	case r:
		h = (g - b) / (max - min);
		break;
	case g:
		h = 2 + (b - r) / (max - min);
		break;
	case b:
		h = 4 + (r - g) / (max - min);
		break;
	}

	if (isNaN(h)) {
		h = 0;
	}
	h = h * 60;
	if (h < 0) {
		h = h + 360;
	}
	l = (min + max) / 2;
	if (min === max) {
		s = 0;
	} else {
		if (l < 0.5) {
			s = (max - min) / (max + min);
		} else {
			s = (max - min) / (2 - max - min);
		}
	}

	return color(Math.round(h), Math.round(s * 100) / 100, Math.round(l * 100) / 100, a);
}

const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
export function fromHex(hexString) {
	const result = hexRegex.exec(hexString);
	if (!result) {
		throw new Error(`${hexString} is not a valid hex color`);
	}

	const r = parseInt(result[1], 16);
	const g = parseInt(result[2], 16);
	const b = parseInt(result[3], 16);
	const a = result[4] !== undefined ? parseInt(result[4], 16) : 255;
	return colorFromRgb(r, g, b, a);
}


export function fromRgb(r, g, b, a=255) {
	return colorFromRgb(r, g, b, a);
}

export function fromHsl(h, s, l, a=1) {
	return color(Math.min(Math.max(h, 0), 360), clamp(s), clamp(l), clamp(a));
}
