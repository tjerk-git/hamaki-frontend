export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/3.d26e20fe.js',
	'_app/immutable/chunks/index.113bb01f.js'
];
export const stylesheets = ['_app/immutable/assets/3.cd19377e.css'];
export const fonts = [];
