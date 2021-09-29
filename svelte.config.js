/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			optimizeDeps: {
				exclude: ['@urql/svelte'],
			}
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
