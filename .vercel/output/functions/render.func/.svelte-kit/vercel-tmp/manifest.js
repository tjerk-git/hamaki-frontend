export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set([
			'favicon.png',
			'favicon@2x.png',
			'fonts/Inter-Medium.ttf',
			'fonts/Thunder-HC.woff2',
			'fonts/Thunder-SemiBoldLC.ttf',
			'hamaki.png'
		]),
		mimeTypes: { '.png': 'image/png', '.ttf': 'font/ttf', '.woff2': 'font/woff2' },
		_: {
			client: {
				start: '_app/immutable/entry/start.f96c89ac.js',
				app: '_app/immutable/entry/app.eb64d08d.js',
				imports: [
					'_app/immutable/entry/start.f96c89ac.js',
					'_app/immutable/chunks/index.113bb01f.js',
					'_app/immutable/chunks/singletons.12c81194.js',
					'_app/immutable/chunks/index.05912bbf.js',
					'_app/immutable/entry/app.eb64d08d.js',
					'_app/immutable/chunks/preload-helper.a4192956.js',
					'_app/immutable/chunks/index.113bb01f.js'
				],
				stylesheets: [],
				fonts: []
			},
			nodes: [
				__memo(() => import('../output/server/nodes/0.js')),
				__memo(() => import('../output/server/nodes/1.js')),
				__memo(() => import('../output/server/nodes/2.js')),
				__memo(() => import('../output/server/nodes/3.js')),
				__memo(() => import('../output/server/nodes/4.js')),
				__memo(() => import('../output/server/nodes/5.js')),
				__memo(() => import('../output/server/nodes/6.js')),
				__memo(() => import('../output/server/nodes/7.js')),
				__memo(() => import('../output/server/nodes/8.js')),
				__memo(() => import('../output/server/nodes/9.js'))
			],
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				},
				{
					id: '/about',
					pattern: /^\/about\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 5 },
					endpoint: null
				},
				{
					id: '/api/cancel/[reservationId]',
					pattern: /^\/api\/cancel\/([^/]+?)\/?$/,
					params: [{ name: 'reservationId', optional: false, rest: false, chained: false }],
					page: null,
					endpoint: __memo(() =>
						import('../output/server/entries/endpoints/api/cancel/_reservationId_/_server.js')
					)
				},
				{
					id: '/forgot/[slug]',
					pattern: /^\/forgot\/([^/]+?)\/?$/,
					params: [{ name: 'slug', optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 6 },
					endpoint: null
				},
				{
					id: '/reservation/[reservationId]',
					pattern: /^\/reservation\/([^/]+?)\/?$/,
					params: [{ name: 'reservationId', optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 7 },
					endpoint: null
				},
				{
					id: '/reserve/[spotId]',
					pattern: /^\/reserve\/([^/]+?)\/?$/,
					params: [{ name: 'spotId', optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 8 },
					endpoint: null
				},
				{
					id: '/waitinglist/[slug]',
					pattern: /^\/waitinglist\/([^/]+?)\/?$/,
					params: [{ name: 'slug', optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 9 },
					endpoint: null
				},
				{
					id: '/[url]',
					pattern: /^\/([^/]+?)\/?$/,
					params: [{ name: 'url', optional: false, rest: false, chained: false }],
					page: { layouts: [0, ,], errors: [1, 2], leaf: 4 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			}
		}
	};
})();
