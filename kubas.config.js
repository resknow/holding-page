module.exports = {
	outputDir: `./css`,
	tokens: {
		color: {
			brand: `#5085b7`,

			'gray-90': `#373946`,
			'gray-70': `#565869`,
			'gray-50': `#77798a`,
			'gray-30': `#b3b4bd`,
			'gray-10': `#eeeef0`,

			'neutral-90': `#002c59`,
			'neutral-50': `#0779e4`,
			'neutral-10': `#e1eefa`,

			'negative-90': `#750001`,
			'negative-50': `#dd3345`,
			'negative-10': `#f6dbdd`,

			'positive-90': `#005929`,
			'positive-50': `#21bf73`,
			'positive-10': `#dbf2e7`,

			'warning-90': `#523d00`,
			'warning-50': `#f5af4b`,
			'warning-10': `#faebd5`,

			primary: `#191a22`,
			secondary: `var(--color-gray-70)`,

			link: `var(--color-neutral-50)`
		},
		font: {
			base: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
                'Segoe UI Symbol'`
		},
		leading: {
			tight: 1.1,
			base: 1.5
		},
		size: {
			xs: `0.75rem`,
			sm: `0.875rem`,
			base: `1.125rem`,
			lg: `1.5rem`,
			xl: `2rem`,
			'2xl': `2.5rem`,
			'3xl': `3rem`
		},
		space: {
			1: `0.25rem`,
			2: `0.5rem`,
			3: `0.75rem`,
			4: `1rem`,
			6: `1.5rem`,
			8: `2rem`,
			10: `2.5rem`,
			12: `3rem`,
			16: `4rem`,
			20: `5rem`,
			px: `1px`
		},
		weight: {
			normal: 400,
			bold: 700
		}
	},
	utilities: {
		space: {
			ml: `margin-left`
		}
	}
};
