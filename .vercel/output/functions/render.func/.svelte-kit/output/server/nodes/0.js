export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.dd91e5f0.js',
	'_app/immutable/chunks/index.113bb01f.js',
	'_app/immutable/chunks/index.05912bbf.js',
	'_app/immutable/chunks/HamakiLogo.be7e3119.js'
];
export const stylesheets = ['_app/immutable/assets/0.26555c82.css'];
export const fonts = [];
