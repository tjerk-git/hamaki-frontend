import { _ as m } from '../chunks/preload-helper.a4192956.js';
import {
	S,
	i as j,
	s as z,
	a as B,
	e as d,
	c as C,
	b,
	d as h,
	f as D,
	g,
	h as w,
	j as M,
	o as U,
	k as F,
	l as G,
	m as H,
	n as R,
	p,
	q as J,
	r as K,
	u as Q,
	v as P,
	t as W,
	w as V,
	x as v,
	y as k,
	z as L,
	A as I,
	B as A
} from '../chunks/index.113bb01f.js';
const it = {};
function X(o) {
	let t, i, n;
	var r = o[1][0];
	function c(e) {
		return { props: { data: e[3], form: e[2] } };
	}
	return (
		r && ((t = v(r, c(o))), o[12](t)),
		{
			c() {
				t && k(t.$$.fragment), (i = d());
			},
			l(e) {
				t && L(t.$$.fragment, e), (i = d());
			},
			m(e, s) {
				t && I(t, e, s), b(e, i, s), (n = !0);
			},
			p(e, s) {
				const l = {};
				if ((s & 8 && (l.data = e[3]), s & 4 && (l.form = e[2]), s & 2 && r !== (r = e[1][0]))) {
					if (t) {
						P();
						const _ = t;
						h(_.$$.fragment, 1, 0, () => {
							A(_, 1);
						}),
							D();
					}
					r
						? ((t = v(r, c(e))),
						  e[12](t),
						  k(t.$$.fragment),
						  g(t.$$.fragment, 1),
						  I(t, i.parentNode, i))
						: (t = null);
				} else r && t.$set(l);
			},
			i(e) {
				n || (t && g(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				t && h(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				o[12](null), e && w(i), t && A(t, e);
			}
		}
	);
}
function Y(o) {
	let t, i, n;
	var r = o[1][0];
	function c(e) {
		return { props: { data: e[3], $$slots: { default: [Z] }, $$scope: { ctx: e } } };
	}
	return (
		r && ((t = v(r, c(o))), o[11](t)),
		{
			c() {
				t && k(t.$$.fragment), (i = d());
			},
			l(e) {
				t && L(t.$$.fragment, e), (i = d());
			},
			m(e, s) {
				t && I(t, e, s), b(e, i, s), (n = !0);
			},
			p(e, s) {
				const l = {};
				if (
					(s & 8 && (l.data = e[3]),
					s & 8215 && (l.$$scope = { dirty: s, ctx: e }),
					s & 2 && r !== (r = e[1][0]))
				) {
					if (t) {
						P();
						const _ = t;
						h(_.$$.fragment, 1, 0, () => {
							A(_, 1);
						}),
							D();
					}
					r
						? ((t = v(r, c(e))),
						  e[11](t),
						  k(t.$$.fragment),
						  g(t.$$.fragment, 1),
						  I(t, i.parentNode, i))
						: (t = null);
				} else r && t.$set(l);
			},
			i(e) {
				n || (t && g(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				t && h(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				o[11](null), e && w(i), t && A(t, e);
			}
		}
	);
}
function Z(o) {
	let t, i, n;
	var r = o[1][1];
	function c(e) {
		return { props: { data: e[4], form: e[2] } };
	}
	return (
		r && ((t = v(r, c(o))), o[10](t)),
		{
			c() {
				t && k(t.$$.fragment), (i = d());
			},
			l(e) {
				t && L(t.$$.fragment, e), (i = d());
			},
			m(e, s) {
				t && I(t, e, s), b(e, i, s), (n = !0);
			},
			p(e, s) {
				const l = {};
				if ((s & 16 && (l.data = e[4]), s & 4 && (l.form = e[2]), s & 2 && r !== (r = e[1][1]))) {
					if (t) {
						P();
						const _ = t;
						h(_.$$.fragment, 1, 0, () => {
							A(_, 1);
						}),
							D();
					}
					r
						? ((t = v(r, c(e))),
						  e[10](t),
						  k(t.$$.fragment),
						  g(t.$$.fragment, 1),
						  I(t, i.parentNode, i))
						: (t = null);
				} else r && t.$set(l);
			},
			i(e) {
				n || (t && g(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				t && h(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				o[10](null), e && w(i), t && A(t, e);
			}
		}
	);
}
function O(o) {
	let t,
		i = o[6] && T(o);
	return {
		c() {
			(t = F('div')), i && i.c(), this.h();
		},
		l(n) {
			t = G(n, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = H(t);
			i && i.l(r), r.forEach(w), this.h();
		},
		h() {
			R(t, 'id', 'svelte-announcer'),
				R(t, 'aria-live', 'assertive'),
				R(t, 'aria-atomic', 'true'),
				p(t, 'position', 'absolute'),
				p(t, 'left', '0'),
				p(t, 'top', '0'),
				p(t, 'clip', 'rect(0 0 0 0)'),
				p(t, 'clip-path', 'inset(50%)'),
				p(t, 'overflow', 'hidden'),
				p(t, 'white-space', 'nowrap'),
				p(t, 'width', '1px'),
				p(t, 'height', '1px');
		},
		m(n, r) {
			b(n, t, r), i && i.m(t, null);
		},
		p(n, r) {
			n[6] ? (i ? i.p(n, r) : ((i = T(n)), i.c(), i.m(t, null))) : i && (i.d(1), (i = null));
		},
		d(n) {
			n && w(t), i && i.d();
		}
	};
}
function T(o) {
	let t;
	return {
		c() {
			t = J(o[7]);
		},
		l(i) {
			t = K(i, o[7]);
		},
		m(i, n) {
			b(i, t, n);
		},
		p(i, n) {
			n & 128 && Q(t, i[7]);
		},
		d(i) {
			i && w(t);
		}
	};
}
function $(o) {
	let t, i, n, r, c;
	const e = [Y, X],
		s = [];
	function l(a, u) {
		return a[1][1] ? 0 : 1;
	}
	(t = l(o)), (i = s[t] = e[t](o));
	let _ = o[5] && O(o);
	return {
		c() {
			i.c(), (n = B()), _ && _.c(), (r = d());
		},
		l(a) {
			i.l(a), (n = C(a)), _ && _.l(a), (r = d());
		},
		m(a, u) {
			s[t].m(a, u), b(a, n, u), _ && _.m(a, u), b(a, r, u), (c = !0);
		},
		p(a, [u]) {
			let E = t;
			(t = l(a)),
				t === E
					? s[t].p(a, u)
					: (P(),
					  h(s[E], 1, 1, () => {
							s[E] = null;
					  }),
					  D(),
					  (i = s[t]),
					  i ? i.p(a, u) : ((i = s[t] = e[t](a)), i.c()),
					  g(i, 1),
					  i.m(n.parentNode, n)),
				a[5]
					? _
						? _.p(a, u)
						: ((_ = O(a)), _.c(), _.m(r.parentNode, r))
					: _ && (_.d(1), (_ = null));
		},
		i(a) {
			c || (g(i), (c = !0));
		},
		o(a) {
			h(i), (c = !1);
		},
		d(a) {
			s[t].d(a), a && w(n), _ && _.d(a), a && w(r);
		}
	};
}
function x(o, t, i) {
	let { stores: n } = t,
		{ page: r } = t,
		{ constructors: c } = t,
		{ components: e = [] } = t,
		{ form: s } = t,
		{ data_0: l = null } = t,
		{ data_1: _ = null } = t;
	M(n.page.notify);
	let a = !1,
		u = !1,
		E = null;
	U(() => {
		const f = n.page.subscribe(() => {
			a &&
				(i(6, (u = !0)),
				W().then(() => {
					i(7, (E = document.title || 'untitled page'));
				}));
		});
		return i(5, (a = !0)), f;
	});
	function N(f) {
		V[f ? 'unshift' : 'push'](() => {
			(e[1] = f), i(0, e);
		});
	}
	function y(f) {
		V[f ? 'unshift' : 'push'](() => {
			(e[0] = f), i(0, e);
		});
	}
	function q(f) {
		V[f ? 'unshift' : 'push'](() => {
			(e[0] = f), i(0, e);
		});
	}
	return (
		(o.$$set = (f) => {
			'stores' in f && i(8, (n = f.stores)),
				'page' in f && i(9, (r = f.page)),
				'constructors' in f && i(1, (c = f.constructors)),
				'components' in f && i(0, (e = f.components)),
				'form' in f && i(2, (s = f.form)),
				'data_0' in f && i(3, (l = f.data_0)),
				'data_1' in f && i(4, (_ = f.data_1));
		}),
		(o.$$.update = () => {
			o.$$.dirty & 768 && n.page.set(r);
		}),
		[e, c, s, l, _, a, u, E, n, r, N, y, q]
	);
}
class nt extends S {
	constructor(t) {
		super(),
			j(this, t, x, $, z, {
				stores: 8,
				page: 9,
				constructors: 1,
				components: 0,
				form: 2,
				data_0: 3,
				data_1: 4
			});
	}
}
const rt = [
		() =>
			m(
				() => import('../nodes/0.dd91e5f0.js'),
				[
					'../nodes/0.dd91e5f0.js',
					'../chunks/index.113bb01f.js',
					'../chunks/index.05912bbf.js',
					'../chunks/HamakiLogo.be7e3119.js',
					'../assets/0.26555c82.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/1.e0d5cb68.js'),
				[
					'../nodes/1.e0d5cb68.js',
					'../chunks/index.113bb01f.js',
					'../chunks/helpers.2db47068.js',
					'../chunks/singletons.12c81194.js',
					'../chunks/index.05912bbf.js',
					'../chunks/ErrorMessage.b214b022.js',
					'../chunks/HamakiLogo.be7e3119.js',
					'../assets/ErrorMessage.d219e5ab.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/2.afe37240.js'),
				[
					'../nodes/2.afe37240.js',
					'../chunks/index.113bb01f.js',
					'../chunks/helpers.2db47068.js',
					'../chunks/singletons.12c81194.js',
					'../chunks/index.05912bbf.js',
					'../chunks/ErrorMessage.b214b022.js',
					'../chunks/HamakiLogo.be7e3119.js',
					'../assets/ErrorMessage.d219e5ab.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/3.d26e20fe.js'),
				['../nodes/3.d26e20fe.js', '../chunks/index.113bb01f.js', '../assets/3.cd19377e.css'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/4.d2daddf1.js'),
				[
					'../nodes/4.d2daddf1.js',
					'../chunks/index.113bb01f.js',
					'../chunks/helpers.2db47068.js',
					'../chunks/singletons.12c81194.js',
					'../chunks/index.05912bbf.js',
					'../chunks/stores.ba0f0bd2.js',
					'../chunks/ErrorMessage.b214b022.js',
					'../chunks/HamakiLogo.be7e3119.js',
					'../assets/ErrorMessage.d219e5ab.css',
					'../assets/4.1119cfcc.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/5.b694adb7.js'),
				['../nodes/5.b694adb7.js', '../chunks/index.113bb01f.js', '../assets/5.4dd36d7f.css'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/6.d82018e9.js'),
				[
					'../nodes/6.d82018e9.js',
					'../chunks/index.113bb01f.js',
					'../chunks/Toaster.4da7d0b5.js',
					'../chunks/index.05912bbf.js',
					'../assets/Toaster.3a6d0da3.css',
					'../chunks/helpers.2db47068.js',
					'../chunks/singletons.12c81194.js',
					'../assets/6.f71cb95d.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/7.40ef17c2.js'),
				[
					'../nodes/7.40ef17c2.js',
					'../chunks/index.113bb01f.js',
					'../chunks/Toaster.4da7d0b5.js',
					'../chunks/index.05912bbf.js',
					'../assets/Toaster.3a6d0da3.css',
					'../chunks/public.6c4c2e8d.js',
					'../assets/7.0628cb47.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/8.63656c15.js'),
				[
					'../nodes/8.63656c15.js',
					'../chunks/preload-helper.a4192956.js',
					'../chunks/index.113bb01f.js',
					'../chunks/helpers.2db47068.js',
					'../chunks/singletons.12c81194.js',
					'../chunks/index.05912bbf.js',
					'../chunks/public.6c4c2e8d.js',
					'../chunks/Toaster.4da7d0b5.js',
					'../assets/Toaster.3a6d0da3.css',
					'../chunks/stores.ba0f0bd2.js',
					'../assets/8.5734686c.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/9.5f42ea29.js'),
				[
					'../nodes/9.5f42ea29.js',
					'../chunks/index.113bb01f.js',
					'../chunks/helpers.2db47068.js',
					'../chunks/singletons.12c81194.js',
					'../chunks/index.05912bbf.js',
					'../chunks/Toaster.4da7d0b5.js',
					'../assets/Toaster.3a6d0da3.css',
					'../chunks/stores.ba0f0bd2.js',
					'../assets/9.34c3d5e8.css'
				],
				import.meta.url
			)
	],
	st = [],
	ot = {
		'/': [3],
		'/about': [5],
		'/forgot/[slug]': [6],
		'/reservation/[reservationId]': [-8],
		'/reserve/[spotId]': [8],
		'/waitinglist/[slug]': [9],
		'/[url]': [-5, [], [2]]
	},
	at = {
		handleError: ({ error: o }) => {
			console.error(o);
		}
	};
export {
	ot as dictionary,
	at as hooks,
	it as matchers,
	rt as nodes,
	nt as root,
	st as server_loads
};
