import * as server from '../entries/pages/reservation/_reservationId_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import('../entries/pages/reservation/_reservationId_/_page.svelte.js')
	).default);
export { server };
export const server_id = 'src/routes/reservation/[reservationId]/+page.server.js';
export const imports = [
	'_app/immutable/nodes/7.40ef17c2.js',
	'_app/immutable/chunks/index.113bb01f.js',
	'_app/immutable/chunks/Toaster.4da7d0b5.js',
	'_app/immutable/chunks/index.05912bbf.js',
	'_app/immutable/chunks/public.6c4c2e8d.js'
];
export const stylesheets = [
	'_app/immutable/assets/7.0628cb47.css',
	'_app/immutable/assets/Toaster.3a6d0da3.css'
];
export const fonts = [];
