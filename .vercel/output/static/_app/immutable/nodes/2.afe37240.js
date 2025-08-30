import {
	S as A,
	i as I,
	s as M,
	k as b,
	q as x,
	a as z,
	l as k,
	m as v,
	r as B,
	h as g,
	c as C,
	b as H,
	I as $,
	u as K,
	d as _,
	f as N,
	g as p,
	Q,
	v as j,
	y as w,
	z as y,
	A as E,
	K as D,
	B as S
} from '../chunks/index.113bb01f.js';
import { p as F } from '../chunks/helpers.2db47068.js';
import { E as q } from '../chunks/ErrorMessage.b214b022.js';
function G(c) {
	let t, r;
	return (
		(t = new q({ props: { message: 'Somewthing went wrong' } })),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, a) {
				E(t, e, a), (r = !0);
			},
			p: D,
			i(e) {
				r || (p(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				_(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function J(c) {
	let t, r;
	return (
		(t = new q({ props: { message: c[0].error.message } })),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, a) {
				E(t, e, a), (r = !0);
			},
			p(e, a) {
				const m = {};
				a & 1 && (m.message = e[0].error.message), t.$set(m);
			},
			i(e) {
				r || (p(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				_(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function L(c) {
	let t,
		r,
		e = c[0].status + '',
		a,
		m,
		n,
		o,
		f;
	const d = [J, G],
		i = [];
	function h(s, l) {
		return s[0].error.message ? 0 : 1;
	}
	return (
		(n = h(c)),
		(o = i[n] = d[n](c)),
		{
			c() {
				(t = b('main')), (r = b('h1')), (a = x(e)), (m = z()), o.c();
			},
			l(s) {
				t = k(s, 'MAIN', {});
				var l = v(t);
				r = k(l, 'H1', {});
				var u = v(r);
				(a = B(u, e)), u.forEach(g), (m = C(l)), o.l(l), l.forEach(g);
			},
			m(s, l) {
				H(s, t, l), $(t, r), $(r, a), $(t, m), i[n].m(t, null), (f = !0);
			},
			p(s, [l]) {
				(!f || l & 1) && e !== (e = s[0].status + '') && K(a, e);
				let u = n;
				(n = h(s)),
					n === u
						? i[n].p(s, l)
						: (j(),
						  _(i[u], 1, 1, () => {
								i[u] = null;
						  }),
						  N(),
						  (o = i[n]),
						  o ? o.p(s, l) : ((o = i[n] = d[n](s)), o.c()),
						  p(o, 1),
						  o.m(t, null));
			},
			i(s) {
				f || (p(o), (f = !0));
			},
			o(s) {
				_(o), (f = !1);
			},
			d(s) {
				s && g(t), i[n].d();
			}
		}
	);
}
function O(c, t, r) {
	let e;
	return Q(c, F, (a) => r(0, (e = a))), [e];
}
class U extends A {
	constructor(t) {
		super(), I(this, t, O, L, M, {});
	}
}
export { U as component };
