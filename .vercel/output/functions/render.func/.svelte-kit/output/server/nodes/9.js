import * as server from '../entries/pages/waitinglist/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/waitinglist/_slug_/_page.svelte.js'))
		.default);
export { server };
export const server_id = 'src/routes/waitinglist/[slug]/+page.server.js';
export const imports = [
	'_app/immutable/nodes/9.5f42ea29.js',
	'_app/immutable/chunks/index.113bb01f.js',
	'_app/immutable/chunks/helpers.2db47068.js',
	'_app/immutable/chunks/singletons.12c81194.js',
	'_app/immutable/chunks/index.05912bbf.js',
	'_app/immutable/chunks/Toaster.4da7d0b5.js',
	'_app/immutable/chunks/stores.ba0f0bd2.js'
];
export const stylesheets = [
	'_app/immutable/assets/9.34c3d5e8.css',
	'_app/immutable/assets/Toaster.3a6d0da3.css'
];
export const fonts = [];
