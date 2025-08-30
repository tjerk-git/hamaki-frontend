import {
	S as V,
	i as z,
	s as A,
	k as g,
	y as C,
	a as H,
	q as b,
	l as h,
	m as p,
	z as J,
	h as _,
	c as I,
	r as E,
	n as d,
	b as L,
	I as n,
	A as N,
	J as O,
	u as T,
	g as P,
	d as Q,
	B as U,
	Q as j
} from './index.113bb01f.js';
import { H as F } from './HamakiLogo.be7e3119.js';
import { a as K, p as R } from './helpers.2db47068.js';
function W(l) {
	let e,
		r,
		o,
		i,
		a,
		k,
		f = l[1].status + '',
		v,
		x,
		m,
		y,
		w,
		c,
		$,
		u,
		S,
		q;
	return (
		(o = new F({})),
		{
			c() {
				(e = g('div')),
					(r = g('div')),
					C(o.$$.fragment),
					(i = H()),
					(a = g('h2')),
					(k = b('Something went wrong | ')),
					(v = b(f)),
					(x = H()),
					(m = g('p')),
					(y = b(l[0])),
					(w = H()),
					(c = g('button')),
					($ = b('Go back')),
					this.h();
			},
			l(s) {
				e = h(s, 'DIV', { class: !0 });
				var t = p(e);
				r = h(t, 'DIV', { class: !0 });
				var D = p(r);
				J(o.$$.fragment, D), D.forEach(_), (i = I(t)), (a = h(t, 'H2', { class: !0 }));
				var B = p(a);
				(k = E(B, 'Something went wrong | ')),
					(v = E(B, f)),
					B.forEach(_),
					(x = I(t)),
					(m = h(t, 'P', { class: !0 }));
				var G = p(m);
				(y = E(G, l[0])), G.forEach(_), (w = I(t)), (c = h(t, 'BUTTON', { class: !0 }));
				var M = p(c);
				($ = E(M, 'Go back')), M.forEach(_), t.forEach(_), this.h();
			},
			h() {
				d(r, 'class', 'logo svelte-1axyeca'),
					d(a, 'class', 'svelte-1axyeca'),
					d(m, 'class', 'svelte-1axyeca'),
					d(c, 'class', 'svelte-1axyeca'),
					d(e, 'class', 'error-container svelte-1axyeca');
			},
			m(s, t) {
				L(s, e, t),
					n(e, r),
					N(o, r, null),
					n(e, i),
					n(e, a),
					n(a, k),
					n(a, v),
					n(e, x),
					n(e, m),
					n(m, y),
					n(e, w),
					n(e, c),
					n(c, $),
					(u = !0),
					S || ((q = O(c, 'click', K)), (S = !0));
			},
			p(s, [t]) {
				(!u || t & 2) && f !== (f = s[1].status + '') && T(v, f), (!u || t & 1) && T(y, s[0]);
			},
			i(s) {
				u || (P(o.$$.fragment, s), (u = !0));
			},
			o(s) {
				Q(o.$$.fragment, s), (u = !1);
			},
			d(s) {
				s && _(e), U(o), (S = !1), q();
			}
		}
	);
}
function X(l, e, r) {
	let o;
	j(l, R, (a) => r(1, (o = a)));
	let { message: i } = e;
	return (
		(l.$$set = (a) => {
			'message' in a && r(0, (i = a.message));
		}),
		[i, o]
	);
}
class te extends V {
	constructor(e) {
		super(), z(this, e, X, W, A, { message: 0 });
	}
}
export { te as E };
