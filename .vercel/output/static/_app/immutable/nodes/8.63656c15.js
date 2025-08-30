import { _ as ge } from '../chunks/preload-helper.a4192956.js';
import {
	S as Ne,
	i as Ae,
	s as Se,
	y as Le,
	a as S,
	k as T,
	z as Oe,
	c as L,
	l as w,
	m as y,
	h as o,
	n as f,
	A as Pe,
	b,
	I as _,
	g as Be,
	d as Ce,
	B as Me,
	Q as ue,
	o as ce,
	q as g,
	r as N,
	p as pe,
	J as X,
	u as j,
	R as H,
	T as W,
	L as Ue
} from '../chunks/index.113bb01f.js';
import { b as De, g as R, a as Re, p as qe } from '../chunks/helpers.2db47068.js';
import { P as _e } from '../chunks/public.6c4c2e8d.js';
import { T as Fe, t as de } from '../chunks/Toaster.4da7d0b5.js';
import { s as Je } from '../chunks/stores.ba0f0bd2.js';
function ve(n) {
	let a, s;
	return {
		c() {
			(a = T('h1')), (s = g('Spot has been reserved'));
		},
		l(l) {
			a = w(l, 'H1', {});
			var e = y(a);
			(s = N(e, 'Spot has been reserved')), e.forEach(o);
		},
		m(l, e) {
			b(l, a, e), _(a, s);
		},
		d(l) {
			l && o(a);
		}
	};
}
function he(n) {
	let a,
		s,
		l,
		e,
		u,
		d,
		m,
		h,
		t,
		i,
		k,
		r = n[3].startDate && ke(n),
		c = n[3].location && Ee(n);
	return {
		c() {
			r && r.c(),
				(a = S()),
				c && c.c(),
				(s = S()),
				(l = T('a')),
				(e = T('span')),
				(u = g('Add to your own calendar')),
				(m = S()),
				(h = T('button')),
				(t = g('🎉 CONFETTI!')),
				this.h();
		},
		l(p) {
			r && r.l(p),
				(a = L(p)),
				c && c.l(p),
				(s = L(p)),
				(l = w(p, 'A', { href: !0, target: !0, class: !0 }));
			var v = y(l);
			e = w(v, 'SPAN', { style: !0, class: !0 });
			var I = y(e);
			(u = N(I, 'Add to your own calendar')),
				I.forEach(o),
				v.forEach(o),
				(m = L(p)),
				(h = w(p, 'BUTTON', { class: !0 }));
			var E = y(h);
			(t = N(E, '🎉 CONFETTI!')), E.forEach(o), this.h();
		},
		h() {
			var p, v;
			pe(e, 'vertical-align', 'middle'),
				pe(e, 'margin-left', '4px'),
				f(e, 'class', 'svelte-dmyk2t'),
				f(
					l,
					'href',
					(d =
						'' +
						(_e +
							((v = (p = n[0]) == null ? void 0 : p.data.reservation) == null ? void 0 : v.icsURL)))
				),
				f(l, 'target', '_blank'),
				f(l, 'class', 'outline svelte-dmyk2t'),
				f(h, 'class', 'svelte-dmyk2t');
		},
		m(p, v) {
			r && r.m(p, v),
				b(p, a, v),
				c && c.m(p, v),
				b(p, s, v),
				b(p, l, v),
				_(l, e),
				_(e, u),
				b(p, m, v),
				b(p, h, v),
				_(h, t),
				i || ((k = X(h, 'click', n[5])), (i = !0));
		},
		p(p, v) {
			var I, E;
			p[3].startDate
				? r
					? r.p(p, v)
					: ((r = ke(p)), r.c(), r.m(a.parentNode, a))
				: r && (r.d(1), (r = null)),
				p[3].location
					? c
						? c.p(p, v)
						: ((c = Ee(p)), c.c(), c.m(s.parentNode, s))
					: c && (c.d(1), (c = null)),
				v & 1 &&
					d !==
						(d =
							'' +
							(_e +
								((E = (I = p[0]) == null ? void 0 : I.data.reservation) == null
									? void 0
									: E.icsURL))) &&
					f(l, 'href', d);
		},
		d(p) {
			r && r.d(p),
				p && o(a),
				c && c.d(p),
				p && o(s),
				p && o(l),
				p && o(m),
				p && o(h),
				(i = !1),
				k();
		}
	};
}
function ke(n) {
	let a,
		s,
		l = R(n[3].startDate, n[4]) + '',
		e,
		u,
		d,
		m = R(n[3].endDate, n[4]) + '',
		h;
	return {
		c() {
			(a = g(`claimed a spot for:
				`)),
				(s = T('time')),
				(e = g(l)),
				(u = g(` -
				`)),
				(d = T('time')),
				(h = g(m));
		},
		l(t) {
			(a = N(
				t,
				`claimed a spot for:
				`
			)),
				(s = w(t, 'TIME', {}));
			var i = y(s);
			(e = N(i, l)),
				i.forEach(o),
				(u = N(
					t,
					` -
				`
				)),
				(d = w(t, 'TIME', {}));
			var k = y(d);
			(h = N(k, m)), k.forEach(o);
		},
		m(t, i) {
			b(t, a, i), b(t, s, i), _(s, e), b(t, u, i), b(t, d, i), _(d, h);
		},
		p(t, i) {
			i & 8 && l !== (l = R(t[3].startDate, t[4]) + '') && j(e, l),
				i & 8 && m !== (m = R(t[3].endDate, t[4]) + '') && j(h, m);
		},
		d(t) {
			t && o(a), t && o(s), t && o(u), t && o(d);
		}
	};
}
function Ee(n) {
	let a,
		s = n[3].location + '',
		l;
	return {
		c() {
			(a = g('at location: ')), (l = g(s));
		},
		l(e) {
			(a = N(e, 'at location: ')), (l = N(e, s));
		},
		m(e, u) {
			b(e, a, u), b(e, l, u);
		},
		p(e, u) {
			u & 8 && s !== (s = e[3].location + '') && j(l, s);
		},
		d(e) {
			e && o(a), e && o(l);
		}
	};
}
function be(n) {
	var h;
	let a,
		s,
		l,
		e,
		u,
		d,
		m = ((h = n[0]) == null ? void 0 : h.data.reason) == 'IM Used' && ye();
	return {
		c() {
			(a = T('p')),
				(s = g('Whoops, something went wrong')),
				(l = S()),
				m && m.c(),
				(e = S()),
				(u = T('a')),
				(d = g('Try again')),
				this.h();
		},
		l(t) {
			a = w(t, 'P', {});
			var i = y(a);
			(s = N(i, 'Whoops, something went wrong')),
				i.forEach(o),
				(l = L(t)),
				m && m.l(t),
				(e = L(t)),
				(u = w(t, 'A', { href: !0 }));
			var k = y(u);
			(d = N(k, 'Try again')), k.forEach(o), this.h();
		},
		h() {
			f(u, 'href', '/reserve/' + n[8]);
		},
		m(t, i) {
			b(t, a, i), _(a, s), b(t, l, i), m && m.m(t, i), b(t, e, i), b(t, u, i), _(u, d);
		},
		p(t, i) {
			var k;
			((k = t[0]) == null ? void 0 : k.data.reason) == 'IM Used'
				? m || ((m = ye()), m.c(), m.m(e.parentNode, e))
				: m && (m.d(1), (m = null));
		},
		d(t) {
			t && o(a), t && o(l), m && m.d(t), t && o(e), t && o(u);
		}
	};
}
function ye(n) {
	let a, s;
	return {
		c() {
			(a = T('p')), (s = g('It looks like this spot has been claimed'));
		},
		l(l) {
			a = w(l, 'P', {});
			var e = y(a);
			(s = N(e, 'It looks like this spot has been claimed')), e.forEach(o);
		},
		m(l, e) {
			b(l, a, e), _(a, s);
		},
		d(l) {
			l && o(a);
		}
	};
}
function Ie(n) {
	let a,
		s,
		l,
		e,
		u,
		d,
		m,
		h,
		t,
		i,
		k,
		r,
		c,
		p,
		v,
		I,
		E,
		A,
		C,
		V,
		M,
		Z,
		q,
		G,
		K,
		F,
		Y,
		J,
		$,
		z,
		x,
		ee,
		te,
		O = n[3].startDate && Te(n),
		P = n[3].location && we(n);
	return {
		c() {
			(a = T('div')),
				(s = T('a')),
				(l = H('svg')),
				(e = H('g')),
				(u = H('g')),
				(d = H('g')),
				(m = H('polygon')),
				(h = S()),
				(t = T('h2')),
				O && O.c(),
				(i = S()),
				P && P.c(),
				(k = S()),
				(r = T('form')),
				(c = T('label')),
				(p = g('Email:')),
				(v = S()),
				(I = T('input')),
				(E = S()),
				(A = T('label')),
				(C = g('Name:')),
				(V = S()),
				(M = T('input')),
				(Z = S()),
				(q = T('label')),
				(G = g('Leave a comment (optional)')),
				(K = S()),
				(F = T('textarea')),
				(Y = S()),
				(J = T('input')),
				($ = S()),
				(z = T('button')),
				(x = g('Claim that spot!')),
				this.h();
		},
		l(D) {
			a = w(D, 'DIV', { class: !0 });
			var U = y(a);
			s = w(U, 'A', { class: !0, href: !0 });
			var le = y(s);
			l = W(le, 'svg', {
				width: !0,
				height: !0,
				viewBox: !0,
				version: !0,
				xmlns: !0,
				'xmlns:xlink': !0
			});
			var ae = y(l);
			e = W(ae, 'g', { id: !0, stroke: !0, 'stroke-width': !0, fill: !0, 'fill-rule': !0 });
			var se = y(e);
			u = W(se, 'g', { id: !0, transform: !0, fill: !0 });
			var ie = y(u);
			d = W(ie, 'g', { id: !0, transform: !0 });
			var re = y(d);
			(m = W(re, 'polygon', { transform: !0, points: !0 })),
				y(m).forEach(o),
				re.forEach(o),
				ie.forEach(o),
				se.forEach(o),
				ae.forEach(o),
				le.forEach(o),
				(h = L(U)),
				(t = w(U, 'H2', { class: !0 }));
			var Q = y(t);
			O && O.l(Q),
				(i = L(Q)),
				P && P.l(Q),
				Q.forEach(o),
				U.forEach(o),
				(k = L(D)),
				(r = w(D, 'FORM', { method: !0, action: !0 }));
			var B = y(r);
			c = w(B, 'LABEL', { for: !0, class: !0 });
			var oe = y(c);
			(p = N(oe, 'Email:')),
				oe.forEach(o),
				(v = L(B)),
				(I = w(B, 'INPUT', { type: !0, name: !0, id: !0, class: !0 })),
				(E = L(B)),
				(A = w(B, 'LABEL', { for: !0, class: !0 }));
			var fe = y(A);
			(C = N(fe, 'Name:')),
				fe.forEach(o),
				(V = L(B)),
				(M = w(B, 'INPUT', { type: !0, name: !0, id: !0, class: !0 })),
				(Z = L(B)),
				(q = w(B, 'LABEL', { for: !0, class: !0 }));
			var ne = y(q);
			(G = N(ne, 'Leave a comment (optional)')),
				ne.forEach(o),
				(K = L(B)),
				(F = w(B, 'TEXTAREA', { id: !0, name: !0, class: !0 })),
				y(F).forEach(o),
				(Y = L(B)),
				(J = w(B, 'INPUT', { type: !0, name: !0, id: !0 })),
				($ = L(B)),
				(z = w(B, 'BUTTON', { type: !0, class: !0 }));
			var me = y(z);
			(x = N(me, 'Claim that spot!')), me.forEach(o), B.forEach(o), this.h();
		},
		h() {
			f(
				m,
				'transform',
				'translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) '
			),
				f(
					m,
					'points',
					'8.00278293 0 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 0'
				),
				f(d, 'id', 'assets/icons/arrow'),
				f(
					d,
					'transform',
					'translate(46.600922, 135.000000) scale(-1, 1) translate(-46.600922, -135.000000) translate(35.000000, 127.000000)'
				),
				f(u, 'id', 'Afspraak'),
				f(u, 'transform', 'translate(-35.000000, -127.000000)'),
				f(u, 'fill', '#E7E4EE'),
				f(e, 'id', 'App'),
				f(e, 'stroke', 'none'),
				f(e, 'stroke-width', '1'),
				f(e, 'fill', 'none'),
				f(e, 'fill-rule', 'evenodd'),
				f(l, 'width', '24px'),
				f(l, 'height', '16px'),
				f(l, 'viewBox', '0 0 24 16'),
				f(l, 'version', '1.1'),
				f(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				f(l, 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
				f(s, 'class', 'link svelte-dmyk2t'),
				f(s, 'href', '#'),
				f(t, 'class', 'svelte-dmyk2t'),
				f(a, 'class', 'spot__time svelte-dmyk2t'),
				f(c, 'for', 'email'),
				f(c, 'class', 'svelte-dmyk2t'),
				f(I, 'type', 'email'),
				f(I, 'name', 'email'),
				f(I, 'id', 'email'),
				(I.value = n[1]),
				(I.required = !0),
				f(I, 'class', 'svelte-dmyk2t'),
				f(A, 'for', 'name'),
				f(A, 'class', 'svelte-dmyk2t'),
				f(M, 'type', 'text'),
				f(M, 'name', 'name'),
				f(M, 'id', 'name'),
				(M.value = n[2]),
				(M.required = !0),
				f(M, 'class', 'svelte-dmyk2t'),
				f(q, 'for', 'name'),
				f(q, 'class', 'svelte-dmyk2t'),
				f(F, 'id', 'comment'),
				f(F, 'name', 'comment'),
				f(F, 'class', 'svelte-dmyk2t'),
				f(J, 'type', 'hidden'),
				f(J, 'name', 'timezone'),
				f(J, 'id', 'timezone'),
				(J.value = De()),
				f(z, 'type', 'submit'),
				f(z, 'class', 'svelte-dmyk2t'),
				f(r, 'method', 'POST'),
				f(r, 'action', '/reserve/' + n[8]);
		},
		m(D, U) {
			b(D, a, U),
				_(a, s),
				_(s, l),
				_(l, e),
				_(e, u),
				_(u, d),
				_(d, m),
				_(a, h),
				_(a, t),
				O && O.m(t, null),
				_(t, i),
				P && P.m(t, null),
				b(D, k, U),
				b(D, r, U),
				_(r, c),
				_(c, p),
				_(r, v),
				_(r, I),
				_(r, E),
				_(r, A),
				_(A, C),
				_(r, V),
				_(r, M),
				_(r, Z),
				_(r, q),
				_(q, G),
				_(r, K),
				_(r, F),
				_(r, Y),
				_(r, J),
				_(r, $),
				_(r, z),
				_(z, x),
				ee || ((te = [X(s, 'click', Re), X(I, 'change', n[6]), X(M, 'change', n[7])]), (ee = !0));
		},
		p(D, U) {
			D[3].startDate
				? O
					? O.p(D, U)
					: ((O = Te(D)), O.c(), O.m(t, i))
				: O && (O.d(1), (O = null)),
				D[3].location
					? P
						? P.p(D, U)
						: ((P = we(D)), P.c(), P.m(t, null))
					: P && (P.d(1), (P = null)),
				U & 2 && I.value !== D[1] && (I.value = D[1]),
				U & 4 && M.value !== D[2] && (M.value = D[2]);
		},
		d(D) {
			D && o(a), O && O.d(), P && P.d(), D && o(k), D && o(r), (ee = !1), Ue(te);
		}
	};
}
function Te(n) {
	let a,
		s,
		l = R(n[3].startDate, n[4]) + '',
		e,
		u,
		d,
		m = R(n[3].endDate, n[4]) + '',
		h;
	return {
		c() {
			(a = g(`Claiming a spot for:
						`)),
				(s = T('time')),
				(e = g(l)),
				(u = g(` -
						`)),
				(d = T('time')),
				(h = g(m));
		},
		l(t) {
			(a = N(
				t,
				`Claiming a spot for:
						`
			)),
				(s = w(t, 'TIME', {}));
			var i = y(s);
			(e = N(i, l)),
				i.forEach(o),
				(u = N(
					t,
					` -
						`
				)),
				(d = w(t, 'TIME', {}));
			var k = y(d);
			(h = N(k, m)), k.forEach(o);
		},
		m(t, i) {
			b(t, a, i), b(t, s, i), _(s, e), b(t, u, i), b(t, d, i), _(d, h);
		},
		p(t, i) {
			i & 8 && l !== (l = R(t[3].startDate, t[4]) + '') && j(e, l),
				i & 8 && m !== (m = R(t[3].endDate, t[4]) + '') && j(h, m);
		},
		d(t) {
			t && o(a), t && o(s), t && o(u), t && o(d);
		}
	};
}
function we(n) {
	let a,
		s = n[3].location + '',
		l;
	return {
		c() {
			(a = g('at location: ')), (l = g(s));
		},
		l(e) {
			(a = N(e, 'at location: ')), (l = N(e, s));
		},
		m(e, u) {
			b(e, a, u), b(e, l, u);
		},
		p(e, u) {
			u & 8 && s !== (s = e[3].location + '') && j(l, s);
		},
		d(e) {
			e && o(a), e && o(l);
		}
	};
}
function ze(n) {
	var p, v, I;
	let a,
		s,
		l,
		e,
		u = n[9](n[3]),
		d,
		m,
		h,
		t;
	a = new Fe({});
	let i = u && ve(),
		k = ((p = n[0]) == null ? void 0 : p.success) && he(n),
		r = ((v = n[0]) == null ? void 0 : v.success) === !1 && be(n),
		c = !((I = n[0]) != null && I.success) && n[3].startDate && Ie(n);
	return {
		c() {
			Le(a.$$.fragment),
				(s = S()),
				(l = T('main')),
				(e = T('div')),
				i && i.c(),
				(d = S()),
				k && k.c(),
				(m = S()),
				r && r.c(),
				(h = S()),
				c && c.c(),
				this.h();
		},
		l(E) {
			Oe(a.$$.fragment, E), (s = L(E)), (l = w(E, 'MAIN', {}));
			var A = y(l);
			e = w(A, 'DIV', { class: !0 });
			var C = y(e);
			i && i.l(C),
				(d = L(C)),
				k && k.l(C),
				(m = L(C)),
				r && r.l(C),
				(h = L(C)),
				c && c.l(C),
				C.forEach(o),
				A.forEach(o),
				this.h();
		},
		h() {
			f(e, 'class', 'reserve_container svelte-dmyk2t');
		},
		m(E, A) {
			Pe(a, E, A),
				b(E, s, A),
				b(E, l, A),
				_(l, e),
				i && i.m(e, null),
				_(e, d),
				k && k.m(e, null),
				_(e, m),
				r && r.m(e, null),
				_(e, h),
				c && c.m(e, null),
				(t = !0);
		},
		p(E, [A]) {
			var C, V, M;
			A & 8 && (u = E[9](E[3])),
				u ? i || ((i = ve()), i.c(), i.m(e, d)) : i && (i.d(1), (i = null)),
				(C = E[0]) != null && C.success
					? k
						? k.p(E, A)
						: ((k = he(E)), k.c(), k.m(e, m))
					: k && (k.d(1), (k = null)),
				((V = E[0]) == null ? void 0 : V.success) === !1
					? r
						? r.p(E, A)
						: ((r = be(E)), r.c(), r.m(e, h))
					: r && (r.d(1), (r = null)),
				!((M = E[0]) != null && M.success) && E[3].startDate
					? c
						? c.p(E, A)
						: ((c = Ie(E)), c.c(), c.m(e, null))
					: c && (c.d(1), (c = null));
		},
		i(E) {
			t || (Be(a.$$.fragment, E), (t = !0));
		},
		o(E) {
			Ce(a.$$.fragment, E), (t = !1);
		},
		d(E) {
			Me(a, E), E && o(s), E && o(l), i && i.d(), k && k.d(), r && r.d(), c && c.d();
		}
	};
}
function Ve(n, a, s) {
	let l, e;
	ue(n, qe, (v) => s(11, (l = v))), ue(n, Je, (v) => s(3, (e = v)));
	let u,
		d = '',
		m = '',
		{ form: h } = a;
	ce(async () => {
		u = (await ge(() => import('../chunks/confetti.module.20599fbc.js'), [], import.meta.url))
			.default;
	});
	const t = { hour: 'numeric', minute: 'numeric', hour12: !1 };
	function i() {
		u && u({ particleCount: 100, spread: 70, origin: { x: Math.random(), y: Math.random() } });
	}
	const k = (v) => {
			s(1, (d = v.target.value)),
				localStorage.setItem('formData', JSON.stringify({ email: d, name: m }));
		},
		r = (v) => {
			s(2, (m = v.target.value)),
				localStorage.setItem('formData', JSON.stringify({ email: d, name: m }));
		},
		{ spotId: c } = l.params;
	ce(() => {
		De();
		{
			const v = localStorage.getItem('formData');
			if (v) {
				const I = JSON.parse(v);
				I.email && s(1, (d = I.email)), I.name && s(2, (m = I.name));
			}
		}
	});
	const p = (v) => Object.keys(v).length === 0;
	return (
		(n.$$set = (v) => {
			'form' in v && s(0, (h = v.form));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 1 &&
				(h != null && h.success && (de.success('Spot claimed!'), i()),
				(h == null ? void 0 : h.success) === !1 && de.error('Spot has been claimed!'));
		}),
		[h, d, m, e, t, i, k, r, c, p]
	);
}
class Ge extends Ne {
	constructor(a) {
		super(), Ae(this, a, Ve, ze, Se, { form: 0 });
	}
}
export { Ge as component };
