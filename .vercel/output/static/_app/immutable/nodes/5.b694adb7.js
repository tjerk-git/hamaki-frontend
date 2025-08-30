import {
	S as q,
	i as C,
	s as N,
	k as u,
	l as _,
	m as h,
	h as c,
	b as I,
	K as E,
	M as Y,
	q as b,
	a as w,
	r as A,
	c as y,
	n as g,
	H as V,
	I as d,
	J as z,
	u as P,
	y as B,
	z as J,
	A as K,
	g as L,
	d as O,
	B as R
} from '../chunks/index.113bb01f.js';
function M(o, a, s) {
	const e = o.slice();
	return (e[3] = a[s]), (e[5] = s), e;
}
function S(o) {
	let a,
		s = o[3].content + '',
		e;
	return {
		c() {
			(a = u('div')), (e = b(s)), this.h();
		},
		l(n) {
			a = _(n, 'DIV', { class: !0 });
			var l = h(a);
			(e = A(l, s)), l.forEach(c), this.h();
		},
		h() {
			g(a, 'class', 'content svelte-1fnucet');
		},
		m(n, l) {
			I(n, a, l), d(a, e);
		},
		p(n, l) {
			l & 1 && s !== (s = n[3].content + '') && P(e, s);
		},
		d(n) {
			n && c(a);
		}
	};
}
function j(o) {
	let a,
		s,
		e = o[3].title + '',
		n,
		l,
		t,
		r,
		v,
		p,
		$,
		D;
	function W() {
		return o[2](o[5]);
	}
	let i = o[3].open && S(o);
	return {
		c() {
			(a = u('div')),
				(s = u('div')),
				(n = b(e)),
				(l = w()),
				(t = u('span')),
				(r = b('▼')),
				(v = w()),
				i && i.c(),
				(p = w()),
				this.h();
		},
		l(m) {
			a = _(m, 'DIV', { class: !0 });
			var f = h(a);
			s = _(f, 'DIV', { class: !0 });
			var k = h(s);
			(n = A(k, e)), (l = y(k)), (t = _(k, 'SPAN', { class: !0 }));
			var H = h(t);
			(r = A(H, '▼')),
				H.forEach(c),
				k.forEach(c),
				(v = y(f)),
				i && i.l(f),
				(p = y(f)),
				f.forEach(c),
				this.h();
		},
		h() {
			g(t, 'class', 'toggle-icon svelte-1fnucet'),
				V(t, 'rotated', o[3].open),
				g(s, 'class', 'item svelte-1fnucet'),
				g(a, 'class', 'accordion');
		},
		m(m, f) {
			I(m, a, f),
				d(a, s),
				d(s, n),
				d(s, l),
				d(s, t),
				d(t, r),
				d(a, v),
				i && i.m(a, null),
				d(a, p),
				$ || ((D = z(s, 'click', W)), ($ = !0));
		},
		p(m, f) {
			(o = m),
				f & 1 && e !== (e = o[3].title + '') && P(n, e),
				f & 1 && V(t, 'rotated', o[3].open),
				o[3].open ? (i ? i.p(o, f) : ((i = S(o)), i.c(), i.m(a, p))) : i && (i.d(1), (i = null));
		},
		d(m) {
			m && c(a), i && i.d(), ($ = !1), D();
		}
	};
}
function T(o) {
	let a,
		s = o[0],
		e = [];
	for (let n = 0; n < s.length; n += 1) e[n] = j(M(o, s, n));
	return {
		c() {
			a = u('div');
			for (let n = 0; n < e.length; n += 1) e[n].c();
		},
		l(n) {
			a = _(n, 'DIV', {});
			var l = h(a);
			for (let t = 0; t < e.length; t += 1) e[t].l(l);
			l.forEach(c);
		},
		m(n, l) {
			I(n, a, l);
			for (let t = 0; t < e.length; t += 1) e[t] && e[t].m(a, null);
		},
		p(n, [l]) {
			if (l & 3) {
				s = n[0];
				let t;
				for (t = 0; t < s.length; t += 1) {
					const r = M(n, s, t);
					e[t] ? e[t].p(r, l) : ((e[t] = j(r)), e[t].c(), e[t].m(a, null));
				}
				for (; t < e.length; t += 1) e[t].d(1);
				e.length = s.length;
			}
		},
		i: E,
		o: E,
		d(n) {
			n && c(a), Y(e, n);
		}
	};
}
function F(o, a, s) {
	let e = [
		{
			title: '🚀 What is Hamaki?',
			content: 'Hamaki is MacOs app for scheduling appointments',
			open: !1
		},
		{
			title: '📅 How do I use it?',
			content: 'You "draw" spots on your calendar and people can sign up for those spots.',
			open: !1
		},
		{
			title: '🖥️ Where do I download Hamaki?',
			content: "Download Hamaki from the Mac App Store - it's available now!",
			open: !1
		},
		{ title: '🦺 Is it safe?', content: "Yes, we don't store your data or your calendar", open: !1 }
	];
	function n(t) {
		s(0, (e[t].open = !e[t].open), e), s(0, e);
	}
	return [e, n, (t) => n(t)];
}
class G extends q {
	constructor(a) {
		super(), C(this, a, F, T, N, {});
	}
}
function Q(o) {
	let a, s, e, n, l;
	return (
		(n = new G({})),
		{
			c() {
				(a = u('main')), (s = u('div')), (e = u('article')), B(n.$$.fragment), this.h();
			},
			l(t) {
				a = _(t, 'MAIN', {});
				var r = h(a);
				s = _(r, 'DIV', { class: !0 });
				var v = h(s);
				e = _(v, 'ARTICLE', { class: !0 });
				var p = h(e);
				J(n.$$.fragment, p), p.forEach(c), v.forEach(c), r.forEach(c), this.h();
			},
			h() {
				g(e, 'class', 'svelte-ltsjwb'), g(s, 'class', 'container svelte-ltsjwb');
			},
			m(t, r) {
				I(t, a, r), d(a, s), d(s, e), K(n, e, null), (l = !0);
			},
			p: E,
			i(t) {
				l || (L(n.$$.fragment, t), (l = !0));
			},
			o(t) {
				O(n.$$.fragment, t), (l = !1);
			},
			d(t) {
				t && c(a), R(n);
			}
		}
	);
}
class X extends q {
	constructor(a) {
		super(), C(this, a, null, Q, N, {});
	}
}
export { X as component };
