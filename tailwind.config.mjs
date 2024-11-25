/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#13151a',
				primary: '#5d95b4',
				secondary: '#11a3f2',
				tertiary: '#2eadf0',
				complement: '#002947',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
