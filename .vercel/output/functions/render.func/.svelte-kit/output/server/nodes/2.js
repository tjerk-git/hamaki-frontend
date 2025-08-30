export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_url_/_error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/2.afe37240.js',
	'_app/immutable/chunks/index.113bb01f.js',
	'_app/immutable/chunks/helpers.2db47068.js',
	'_app/immutable/chunks/singletons.12c81194.js',
	'_app/immutable/chunks/index.05912bbf.js',
	'_app/immutable/chunks/ErrorMessage.b214b022.js',
	'_app/immutable/chunks/HamakiLogo.be7e3119.js'
];
export const stylesheets = ['_app/immutable/assets/ErrorMessage.d219e5ab.css'];
export const fonts = [];
