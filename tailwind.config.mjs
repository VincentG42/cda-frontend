import colors from 'tailwindcss/colors'; // Import default colors

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#176A2B', // Set default primary color
					50: colors.green[50],
					100: colors.green[100],
					200: colors.green[200],
					300: colors.green[300],
					400: colors.green[400],
					500: colors.green[500],
					600: colors.green[600],
					700: '#176A2B', // User's primary color
					800: colors.green[800],
					900: colors.green[900],
					950: colors.green[950],
				},
				secondary: {
					DEFAULT: '#FF7F11', // Set default secondary color
					50: colors.orange[50],
					100: colors.orange[100],
					200: colors.orange[200],
					300: colors.orange[300],
					400: colors.orange[400],
					500: '#FF7F11', // User's secondary color
					600: colors.orange[600],
					700: colors.orange[700],
					800: colors.orange[800],
					900: colors.orange[900],
					950: colors.orange[950],
				},
				'neutral-primary': '#374151',
				'neutral-accent': '#F9FAFB',
			},
		},
	},
	plugins: [],
}
