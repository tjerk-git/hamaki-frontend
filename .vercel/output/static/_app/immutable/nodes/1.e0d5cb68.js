import {
	S as k,
	i as h,
	s as w,
	k as y,
	l as v,
	m as E,
	h as p,
	b as S,
	d as i,
	f as A,
	g as m,
	Q as M,
	v as q,
	y as _,
	z as g,
	A as $,
	K as x,
	B as d
} from '../chunks/index.113bb01f.js';
import { p as z } from '../chunks/helpers.2db47068.js';
import { E as b } from '../chunks/ErrorMessage.b214b022.js';
function B(o) {
	let r, t;
	return (
		(r = new b({ props: { message: 'Somewthing went wrong' } })),
		{
			c() {
				_(r.$$.fragment);
			},
			l(e) {
				g(r.$$.fragment, e);
			},
			m(e, s) {
				$(r, e, s), (t = !0);
			},
			p: x,
			i(e) {
				t || (m(r.$$.fragment, e), (t = !0));
			},
			o(e) {
				i(r.$$.fragment, e), (t = !1);
			},
			d(e) {
				d(r, e);
			}
		}
	);
}
function C(o) {
	let r, t;
	return (
		(r = new b({ props: { message: o[0].error.message } })),
		{
			c() {
				_(r.$$.fragment);
			},
			l(e) {
				g(r.$$.fragment, e);
			},
			m(e, s) {
				$(r, e, s), (t = !0);
			},
			p(e, s) {
				const l = {};
				s & 1 && (l.message = e[0].error.message), r.$set(l);
			},
			i(e) {
				t || (m(r.$$.fragment, e), (t = !0));
			},
			o(e) {
				i(r.$$.fragment, e), (t = !1);
			},
			d(e) {
				d(r, e);
			}
		}
	);
}
function I(o) {
	let r, t, e, s;
	const l = [C, B],
		a = [];
	function f(n, c) {
		return n[0].error.message ? 0 : 1;
	}
	return (
		(t = f(o)),
		(e = a[t] = l[t](o)),
		{
			c() {
				(r = y('main')), e.c();
			},
			l(n) {
				r = v(n, 'MAIN', {});
				var c = E(r);
				e.l(c), c.forEach(p);
			},
			m(n, c) {
				S(n, r, c), a[t].m(r, null), (s = !0);
			},
			p(n, [c]) {
				let u = t;
				(t = f(n)),
					t === u
						? a[t].p(n, c)
						: (q(),
						  i(a[u], 1, 1, () => {
								a[u] = null;
						  }),
						  A(),
						  (e = a[t]),
						  e ? e.p(n, c) : ((e = a[t] = l[t](n)), e.c()),
						  m(e, 1),
						  e.m(r, null));
			},
			i(n) {
				s || (m(e), (s = !0));
			},
			o(n) {
				i(e), (s = !1);
			},
			d(n) {
				n && p(r), a[t].d();
			}
		}
	);
}
function K(o, r, t) {
	let e;
	return M(o, z, (s) => t(0, (e = s))), [e];
}
class D extends k {
	constructor(r) {
		super(), h(this, r, K, I, w, {});
	}
}
export { D as component };
