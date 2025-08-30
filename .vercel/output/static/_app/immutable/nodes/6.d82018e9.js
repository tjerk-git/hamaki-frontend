import {
	S as fe,
	i as me,
	s as pe,
	y as de,
	a as y,
	k as d,
	R as W,
	q as P,
	z as he,
	c as b,
	l as h,
	m as f,
	T as q,
	h as n,
	r as I,
	n as t,
	A as _e,
	b as O,
	I as s,
	J as ge,
	g as ve,
	d as we,
	B as ye,
	Q as be
} from '../chunks/index.113bb01f.js';
import { T as Ee, t as ie } from '../chunks/Toaster.4da7d0b5.js';
import { a as ke, p as xe } from '../chunks/helpers.2db47068.js';
function ce(_) {
	let a, o, e;
	return {
		c() {
			(a = d('div')),
				(o = d('p')),
				(e = P('🐌 We send an e-mail, if your e-mail is real (probably is, but still).')),
				this.h();
		},
		l(r) {
			a = h(r, 'DIV', { class: !0 });
			var u = f(a);
			o = h(u, 'P', {});
			var i = f(o);
			(e = I(i, '🐌 We send an e-mail, if your e-mail is real (probably is, but still).')),
				i.forEach(n),
				u.forEach(n),
				this.h();
		},
		h() {
			t(a, 'class', 'notifications svelte-rlgyzw');
		},
		m(r, u) {
			O(r, a, u), s(a, o), s(o, e);
		},
		d(r) {
			r && n(a);
		}
	};
}
function ue(_) {
	let a, o, e;
	return {
		c() {
			(a = d('div')), (o = d('p')), (e = P('🚨 Whoops, something went wrong there..')), this.h();
		},
		l(r) {
			a = h(r, 'DIV', { class: !0 });
			var u = f(a);
			o = h(u, 'P', {});
			var i = f(o);
			(e = I(i, '🚨 Whoops, something went wrong there..')), i.forEach(n), u.forEach(n), this.h();
		},
		h() {
			t(a, 'class', 'notifications svelte-rlgyzw');
		},
		m(r, u) {
			O(r, a, u), s(a, o), s(o, e);
		},
		d(r) {
			r && n(a);
		}
	};
}
function Be(_) {
	var Z, ee;
	let a,
		o,
		e,
		r,
		u,
		i,
		g,
		w,
		E,
		x,
		z,
		U,
		N,
		j,
		D,
		S,
		L,
		M,
		V,
		C,
		H,
		v,
		B,
		J,
		Q,
		k,
		G,
		T,
		K,
		F,
		X,
		Y;
	a = new Ee({});
	let m = ((Z = _[0]) == null ? void 0 : Z.success) && ce(),
		p = ((ee = _[0]) == null ? void 0 : ee.success) === !1 && ue();
	return {
		c() {
			de(a.$$.fragment),
				(o = y()),
				(e = d('main')),
				m && m.c(),
				(r = y()),
				p && p.c(),
				(u = y()),
				(i = d('a')),
				(g = W('svg')),
				(w = W('g')),
				(E = W('g')),
				(x = W('g')),
				(z = W('polygon')),
				(U = y()),
				(N = d('h2')),
				(j = P('Forgot my appointment')),
				(D = y()),
				(S = d('p')),
				(L = P(
					'No worries, that can happen just enter your e-mail and we will send your appointments'
				)),
				(M = y()),
				(V = d('br')),
				(C = d('br')),
				(H = y()),
				(v = d('form')),
				(B = d('label')),
				(J = P('Email:')),
				(Q = y()),
				(k = d('input')),
				(G = y()),
				(T = d('button')),
				(K = P('Send me an email!')),
				this.h();
		},
		l(c) {
			he(a.$$.fragment, c), (o = b(c)), (e = h(c, 'MAIN', {}));
			var l = f(e);
			m && m.l(l), (r = b(l)), p && p.l(l), (u = b(l)), (i = h(l, 'A', { class: !0, href: !0 }));
			var $ = f(i);
			g = q($, 'svg', {
				width: !0,
				height: !0,
				viewBox: !0,
				version: !0,
				xmlns: !0,
				'xmlns:xlink': !0
			});
			var R = f(g);
			w = q(R, 'g', { id: !0, stroke: !0, 'stroke-width': !0, fill: !0, 'fill-rule': !0 });
			var te = f(w);
			E = q(te, 'g', { id: !0, transform: !0, fill: !0 });
			var se = f(E);
			x = q(se, 'g', { id: !0, transform: !0 });
			var ae = f(x);
			(z = q(ae, 'polygon', { transform: !0, points: !0 })),
				f(z).forEach(n),
				ae.forEach(n),
				se.forEach(n),
				te.forEach(n),
				R.forEach(n),
				$.forEach(n),
				(U = b(l)),
				(N = h(l, 'H2', {}));
			var re = f(N);
			(j = I(re, 'Forgot my appointment')), re.forEach(n), (D = b(l)), (S = h(l, 'P', {}));
			var le = f(S);
			(L = I(
				le,
				'No worries, that can happen just enter your e-mail and we will send your appointments'
			)),
				le.forEach(n),
				(M = b(l)),
				(V = h(l, 'BR', {})),
				(C = h(l, 'BR', {})),
				(H = b(l)),
				(v = h(l, 'FORM', { method: !0, action: !0 }));
			var A = f(v);
			B = h(A, 'LABEL', { for: !0, class: !0 });
			var ne = f(B);
			(J = I(ne, 'Email:')),
				ne.forEach(n),
				(Q = b(A)),
				(k = h(A, 'INPUT', { type: !0, name: !0, id: !0, class: !0 })),
				(G = b(A)),
				(T = h(A, 'BUTTON', { type: !0, class: !0 }));
			var oe = f(T);
			(K = I(oe, 'Send me an email!')), oe.forEach(n), A.forEach(n), l.forEach(n), this.h();
		},
		h() {
			t(
				z,
				'transform',
				'translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) '
			),
				t(
					z,
					'points',
					'8.00278293 0 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 0'
				),
				t(x, 'id', 'assets/icons/arrow'),
				t(
					x,
					'transform',
					'translate(46.600922, 135.000000) scale(-1, 1) translate(-46.600922, -135.000000) translate(35.000000, 127.000000)'
				),
				t(E, 'id', 'Afspraak'),
				t(E, 'transform', 'translate(-35.000000, -127.000000)'),
				t(E, 'fill', '#E7E4EE'),
				t(w, 'id', 'App'),
				t(w, 'stroke', 'none'),
				t(w, 'stroke-width', '1'),
				t(w, 'fill', 'none'),
				t(w, 'fill-rule', 'evenodd'),
				t(g, 'width', '24px'),
				t(g, 'height', '16px'),
				t(g, 'viewBox', '0 0 24 16'),
				t(g, 'version', '1.1'),
				t(g, 'xmlns', 'http://www.w3.org/2000/svg'),
				t(g, 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
				t(i, 'class', 'link'),
				t(i, 'href', '#'),
				t(B, 'for', 'email'),
				t(B, 'class', 'svelte-rlgyzw'),
				t(k, 'type', 'email'),
				t(k, 'name', 'email'),
				t(k, 'id', 'email'),
				(k.required = !0),
				t(k, 'class', 'svelte-rlgyzw'),
				t(T, 'type', 'submit'),
				t(T, 'class', 'svelte-rlgyzw'),
				t(v, 'method', 'POST'),
				t(v, 'action', '/forgot/' + _[1]);
		},
		m(c, l) {
			_e(a, c, l),
				O(c, o, l),
				O(c, e, l),
				m && m.m(e, null),
				s(e, r),
				p && p.m(e, null),
				s(e, u),
				s(e, i),
				s(i, g),
				s(g, w),
				s(w, E),
				s(E, x),
				s(x, z),
				s(e, U),
				s(e, N),
				s(N, j),
				s(e, D),
				s(e, S),
				s(S, L),
				s(e, M),
				s(e, V),
				s(e, C),
				s(e, H),
				s(e, v),
				s(v, B),
				s(B, J),
				s(v, Q),
				s(v, k),
				s(v, G),
				s(v, T),
				s(T, K),
				(F = !0),
				X || ((Y = ge(i, 'click', ke)), (X = !0));
		},
		p(c, [l]) {
			var $, R;
			($ = c[0]) != null && $.success
				? m || ((m = ce()), m.c(), m.m(e, r))
				: m && (m.d(1), (m = null)),
				((R = c[0]) == null ? void 0 : R.success) === !1
					? p || ((p = ue()), p.c(), p.m(e, u))
					: p && (p.d(1), (p = null));
		},
		i(c) {
			F || (ve(a.$$.fragment, c), (F = !0));
		},
		o(c) {
			we(a.$$.fragment, c), (F = !1);
		},
		d(c) {
			ye(a, c), c && n(o), c && n(e), m && m.d(), p && p.d(), (X = !1), Y();
		}
	};
}
function Te(_, a, o) {
	let e;
	be(_, xe, (i) => o(2, (e = i)));
	let { form: r } = a;
	const { slug: u } = e.params;
	return (
		(_.$$set = (i) => {
			'form' in i && o(0, (r = i.form));
		}),
		(_.$$.update = () => {
			_.$$.dirty & 1 &&
				(r != null && r.success && ie.success('Email sent!'),
				(r == null ? void 0 : r.success) === !1 && ie.error('Uuuuuuh...'));
		}),
		[r, u]
	);
}
class Ie extends fe {
	constructor(a) {
		super(), me(this, a, Te, Be, pe, { form: 0 });
	}
}
export { Ie as component };
