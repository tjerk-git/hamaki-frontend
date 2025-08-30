import * as server from '../entries/pages/forgot/_slug_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/forgot/_slug_/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/forgot/[slug]/+page.server.js';
export const imports = [
	'_app/immutable/nodes/6.d82018e9.js',
	'_app/immutable/chunks/index.113bb01f.js',
	'_app/immutable/chunks/Toaster.4da7d0b5.js',
	'_app/immutable/chunks/index.05912bbf.js',
	'_app/immutable/chunks/helpers.2db47068.js',
	'_app/immutable/chunks/singletons.12c81194.js'
];
export const stylesheets = [
	'_app/immutable/assets/6.f71cb95d.css',
	'_app/immutable/assets/Toaster.3a6d0da3.css'
];
export const fonts = [];
