import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$images: 'src/lib/images',
			$data: 'src/lib/data',
			$stores: 'src/lib/stores',
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: `@import 'src/routes/styles.scss';`
			},
			sass: {
				prependData: `@import 'src/routes/styles.scss'`
			}
		}),
	],
};

export default config;
