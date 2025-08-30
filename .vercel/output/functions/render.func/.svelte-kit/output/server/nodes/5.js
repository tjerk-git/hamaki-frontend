export const index = 5;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/5.b694adb7.js',
	'_app/immutable/chunks/index.113bb01f.js'
];
export const stylesheets = ['_app/immutable/assets/5.4dd36d7f.css'];
export const fonts = [];
