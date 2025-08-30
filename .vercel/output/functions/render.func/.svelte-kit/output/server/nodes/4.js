import * as server from '../entries/pages/_url_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_url_/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/[url]/+page.server.js';
export const imports = [
	'_app/immutable/nodes/4.d2daddf1.js',
	'_app/immutable/chunks/index.113bb01f.js',
	'_app/immutable/chunks/helpers.2db47068.js',
	'_app/immutable/chunks/singletons.12c81194.js',
	'_app/immutable/chunks/index.05912bbf.js',
	'_app/immutable/chunks/stores.ba0f0bd2.js',
	'_app/immutable/chunks/ErrorMessage.b214b022.js',
	'_app/immutable/chunks/HamakiLogo.be7e3119.js'
];
export const stylesheets = [
	'_app/immutable/assets/4.1119cfcc.css',
	'_app/immutable/assets/ErrorMessage.d219e5ab.css'
];
export const fonts = [];
