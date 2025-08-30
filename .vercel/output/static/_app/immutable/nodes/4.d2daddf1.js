import {
	S as re,
	i as ne,
	s as oe,
	k as S,
	a as B,
	q as E,
	l as $,
	m as w,
	c as M,
	r as N,
	h as m,
	n as h,
	H as j,
	b,
	I as v,
	J as fe,
	U as ce,
	u as U,
	K as C,
	R as z,
	T as I,
	d as T,
	f as L,
	g as P,
	o as de,
	v as O,
	y as ue,
	z as he,
	A as _e,
	B as pe,
	e as F,
	M as me
} from '../chunks/index.113bb01f.js';
import { g as W } from '../chunks/helpers.2db47068.js';
import { s as ve, c as ge, a as we } from '../chunks/stores.ba0f0bd2.js';
import { E as ke } from '../chunks/ErrorMessage.b214b022.js';
function be(a) {
	let e, l;
	return {
		c() {
			(e = z('svg')), (l = z('path')), this.h();
		},
		l(t) {
			e = I(t, 'svg', { xmlns: !0, width: !0, height: !0, viewBox: !0, class: !0 });
			var n = w(e);
			(l = I(n, 'path', { d: !0 })), w(l).forEach(m), n.forEach(m), this.h();
		},
		h() {
			h(
				l,
				'd',
				'M12 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v3h2v-3c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-4v14h18v-14h-12zm10 12h-14v-10h14v10z'
			),
				h(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				h(e, 'width', '24'),
				h(e, 'height', '24'),
				h(e, 'viewBox', '0 0 24 24'),
				h(e, 'class', 'svelte-19cmyqy');
		},
		m(t, n) {
			b(t, e, n), v(e, l);
		},
		p: C,
		d(t) {
			t && m(e);
		}
	};
}
function ye(a) {
	let e,
		l,
		t,
		n,
		s = a[0].visitorEmail && G(a),
		i = a[0].visitorName && Q(a);
	return {
		c() {
			s && s.c(), (e = B()), i && i.c(), (l = B()), (t = z('svg')), (n = z('path')), this.h();
		},
		l(f) {
			s && s.l(f),
				(e = M(f)),
				i && i.l(f),
				(l = M(f)),
				(t = I(f, 'svg', { xmlns: !0, width: !0, height: !0, viewBox: !0, class: !0 }));
			var o = w(t);
			(n = I(o, 'path', { d: !0 })), w(n).forEach(m), o.forEach(m), this.h();
		},
		h() {
			h(
				n,
				'd',
				'M14 9v2h-4v-2c0-1.104.897-2 2-2s2 .896 2 2zm10 3c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-8-1h-1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h-1v6h8v-6z'
			),
				h(t, 'xmlns', 'http://www.w3.org/2000/svg'),
				h(t, 'width', '24'),
				h(t, 'height', '24'),
				h(t, 'viewBox', '0 0 24 24'),
				h(t, 'class', 'svelte-19cmyqy');
		},
		m(f, o) {
			s && s.m(f, o), b(f, e, o), i && i.m(f, o), b(f, l, o), b(f, t, o), v(t, n);
		},
		p(f, o) {
			f[0].visitorEmail
				? s
					? s.p(f, o)
					: ((s = G(f)), s.c(), s.m(e.parentNode, e))
				: s && (s.d(1), (s = null)),
				f[0].visitorName
					? i
						? i.p(f, o)
						: ((i = Q(f)), i.c(), i.m(l.parentNode, l))
					: i && (i.d(1), (i = null));
		},
		d(f) {
			s && s.d(f), f && m(e), i && i.d(f), f && m(l), f && m(t);
		}
	};
}
function G(a) {
	let e,
		l,
		t = a[0].visitorEmail + '',
		n;
	return {
		c() {
			(e = S('span')), (l = E('Email: ')), (n = E(t)), this.h();
		},
		l(s) {
			e = $(s, 'SPAN', { class: !0 });
			var i = w(e);
			(l = N(i, 'Email: ')), (n = N(i, t)), i.forEach(m), this.h();
		},
		h() {
			h(e, 'class', 'visitor svelte-19cmyqy');
		},
		m(s, i) {
			b(s, e, i), v(e, l), v(e, n);
		},
		p(s, i) {
			i & 1 && t !== (t = s[0].visitorEmail + '') && U(n, t);
		},
		d(s) {
			s && m(e);
		}
	};
}
function Q(a) {
	let e,
		l,
		t = a[0].visitorName + '',
		n;
	return {
		c() {
			(e = S('span')), (l = E('Name: ')), (n = E(t)), this.h();
		},
		l(s) {
			e = $(s, 'SPAN', { class: !0 });
			var i = w(e);
			(l = N(i, 'Name: ')), (n = N(i, t)), i.forEach(m), this.h();
		},
		h() {
			h(e, 'class', 'visitor svelte-19cmyqy');
		},
		m(s, i) {
			b(s, e, i), v(e, l), v(e, n);
		},
		p(s, i) {
			i & 1 && t !== (t = s[0].visitorName + '') && U(n, t);
		},
		d(s) {
			s && m(e);
		}
	};
}
function X(a) {
	let e,
		l = a[0].location + '',
		t;
	return {
		c() {
			(e = S('span')), (t = E(l)), this.h();
		},
		l(n) {
			e = $(n, 'SPAN', { class: !0 });
			var s = w(e);
			(t = N(s, l)), s.forEach(m), this.h();
		},
		h() {
			h(e, 'class', 'location svelte-19cmyqy');
		},
		m(n, s) {
			b(n, e, s), v(e, t);
		},
		p(n, s) {
			s & 1 && l !== (l = n[0].location + '') && U(t, l);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Y(a) {
	let e, l, t, n, s, i, f;
	return {
		c() {
			(e = S('span')),
				(l = z('svg')),
				(t = z('title')),
				(n = E('assets/icons/arrow')),
				(s = z('g')),
				(i = z('g')),
				(f = z('polygon')),
				this.h();
		},
		l(o) {
			e = $(o, 'SPAN', { class: !0 });
			var _ = w(e);
			l = I(_, 'svg', {
				width: !0,
				height: !0,
				viewBox: !0,
				version: !0,
				xmlns: !0,
				'xmlns:xlink': !0,
				class: !0
			});
			var r = w(l);
			t = I(r, 'title', {});
			var d = w(t);
			(n = N(d, 'assets/icons/arrow')),
				d.forEach(m),
				(s = I(r, 'g', { id: !0, stroke: !0, 'stroke-width': !0, fill: !0, 'fill-rule': !0 }));
			var u = w(s);
			i = I(u, 'g', { id: !0, fill: !0 });
			var c = w(i);
			(f = I(c, 'polygon', { transform: !0, points: !0 })),
				w(f).forEach(m),
				c.forEach(m),
				u.forEach(m),
				r.forEach(m),
				_.forEach(m),
				this.h();
		},
		h() {
			h(
				f,
				'transform',
				'translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) '
			),
				h(
					f,
					'points',
					'8.00278293 3.55271368e-15 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 3.55271368e-15'
				),
				h(i, 'id', 'assets/icons/arrow'),
				h(i, 'fill', 'grey'),
				h(s, 'id', 'Symbols'),
				h(s, 'stroke', 'none'),
				h(s, 'stroke-width', '1'),
				h(s, 'fill', 'none'),
				h(s, 'fill-rule', 'evenodd'),
				h(l, 'width', '24px'),
				h(l, 'height', '16px'),
				h(l, 'viewBox', '0 0 24 16'),
				h(l, 'version', '1.1'),
				h(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				h(l, 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
				h(l, 'class', 'svelte-19cmyqy'),
				h(e, 'class', 'take-spot svelte-19cmyqy');
		},
		m(o, _) {
			b(o, e, _), v(e, l), v(l, t), v(t, n), v(l, s), v(s, i), v(i, f);
		},
		d(o) {
			o && m(e);
		}
	};
}
function Ee(a) {
	let e,
		l,
		t,
		n,
		s = W(a[0].startDate, a[1]) + '',
		i,
		f,
		o,
		_ = W(a[0].endDate, a[1]) + '',
		r,
		d,
		u,
		c = !a[4](a[0]),
		p,
		g,
		R;
	function J(A, k) {
		return k & 1 && (l = null), l == null && (l = !!A[4](A[0])), l ? ye : be;
	}
	let H = J(a, -1),
		D = H(a),
		y = a[0].location && X(a),
		q = c && Y();
	return {
		c() {
			(e = S('a')),
				D.c(),
				(t = B()),
				(n = S('time')),
				(i = E(s)),
				(f = E(`
	-
	`)),
				(o = S('time')),
				(r = E(_)),
				(d = B()),
				y && y.c(),
				(u = B()),
				q && q.c(),
				this.h();
		},
		l(A) {
			e = $(A, 'A', { href: !0, class: !0 });
			var k = w(e);
			D.l(k), (t = M(k)), (n = $(k, 'TIME', { class: !0 }));
			var K = w(n);
			(i = N(K, s)),
				K.forEach(m),
				(f = N(
					k,
					`
	-
	`
				)),
				(o = $(k, 'TIME', { class: !0 }));
			var V = w(o);
			(r = N(V, _)),
				V.forEach(m),
				(d = M(k)),
				y && y.l(k),
				(u = M(k)),
				q && q.l(k),
				k.forEach(m),
				this.h();
		},
		h() {
			h(n, 'class', 'svelte-19cmyqy'),
				h(o, 'class', 'svelte-19cmyqy'),
				h(e, 'href', (p = a[2](a[0]))),
				h(e, 'class', 'svelte-19cmyqy'),
				j(e, 'reserved', a[4](a[0]));
		},
		m(A, k) {
			b(A, e, k),
				D.m(e, null),
				v(e, t),
				v(e, n),
				v(n, i),
				v(e, f),
				v(e, o),
				v(o, r),
				v(e, d),
				y && y.m(e, null),
				v(e, u),
				q && q.m(e, null),
				g ||
					((R = fe(e, 'click', function () {
						ce(a[3](a[0])) && a[3](a[0]).apply(this, arguments);
					})),
					(g = !0));
		},
		p(A, [k]) {
			(a = A),
				H === (H = J(a, k)) && D ? D.p(a, k) : (D.d(1), (D = H(a)), D && (D.c(), D.m(e, t))),
				k & 1 && s !== (s = W(a[0].startDate, a[1]) + '') && U(i, s),
				k & 1 && _ !== (_ = W(a[0].endDate, a[1]) + '') && U(r, _),
				a[0].location
					? y
						? y.p(a, k)
						: ((y = X(a)), y.c(), y.m(e, u))
					: y && (y.d(1), (y = null)),
				k & 1 && (c = !a[4](a[0])),
				c ? q || ((q = Y()), q.c(), q.m(e, null)) : q && (q.d(1), (q = null)),
				k & 1 && p !== (p = a[2](a[0])) && h(e, 'href', p),
				k & 17 && j(e, 'reserved', a[4](a[0]));
		},
		i: C,
		o: C,
		d(A) {
			A && m(e), D.d(), y && y.d(), q && q.d(), (g = !1), R();
		}
	};
}
function Ne(a, e, l) {
	const t = { hour: 'numeric', minute: 'numeric', hour12: !1 };
	let { spot: n } = e,
		{ calendar: s } = e;
	const i = (_) => (o(_) ? '' : `/reserve/${_.spotId}`),
		f = (_) => {
			ve.set(_);
		},
		o = (_) => {
			if (_.isReserved) return !0;
			const u = (new Date(_.startDate) - new Date()) / 6e4,
				c = Math.round(u);
			let p = 0;
			return (
				s.allowReservationUpUntilMinutesBefore > 0 && (p = s.allowReservationUpUntilMinutesBefore),
				c <= p
			);
		};
	return (
		(a.$$set = (_) => {
			'spot' in _ && l(0, (n = _.spot)), 'calendar' in _ && l(5, (s = _.calendar));
		}),
		[n, t, i, f, o, s]
	);
}
class qe extends re {
	constructor(e) {
		super(), ne(this, e, Ne, Ee, oe, { spot: 0, calendar: 5 });
	}
}
function Z(a, e, l) {
	const t = a.slice();
	return (t[3] = e[l]), t;
}
function x(a, e, l) {
	const t = a.slice();
	return (t[6] = e[l]), t;
}
function Se(a) {
	let e, l;
	return (
		(e = new ke({ props: { message: 'No calendar can be found...' } })),
		{
			c() {
				ue(e.$$.fragment);
			},
			l(t) {
				he(e.$$.fragment, t);
			},
			m(t, n) {
				_e(e, t, n), (l = !0);
			},
			p: C,
			i(t) {
				l || (P(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				T(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				pe(e, t);
			}
		}
	);
}
function $e(a) {
	let e,
		l,
		t,
		n,
		s = a[0].calendar.description && ee(a),
		i = a[0].groupedSpots.length === 0 && te(),
		f = a[0].groupedSpots,
		o = [];
	for (let r = 0; r < f.length; r += 1) o[r] = ie(Z(a, f, r));
	const _ = (r) =>
		T(o[r], 1, 1, () => {
			o[r] = null;
		});
	return {
		c() {
			s && s.c(), (e = B()), i && i.c(), (l = B());
			for (let r = 0; r < o.length; r += 1) o[r].c();
			t = F();
		},
		l(r) {
			s && s.l(r), (e = M(r)), i && i.l(r), (l = M(r));
			for (let d = 0; d < o.length; d += 1) o[d].l(r);
			t = F();
		},
		m(r, d) {
			s && s.m(r, d), b(r, e, d), i && i.m(r, d), b(r, l, d);
			for (let u = 0; u < o.length; u += 1) o[u] && o[u].m(r, d);
			b(r, t, d), (n = !0);
		},
		p(r, d) {
			if (
				(r[0].calendar.description
					? s
						? s.p(r, d)
						: ((s = ee(r)), s.c(), s.m(e.parentNode, e))
					: s && (s.d(1), (s = null)),
				r[0].groupedSpots.length === 0
					? i || ((i = te()), i.c(), i.m(l.parentNode, l))
					: i && (i.d(1), (i = null)),
				d & 7)
			) {
				f = r[0].groupedSpots;
				let u;
				for (u = 0; u < f.length; u += 1) {
					const c = Z(r, f, u);
					o[u]
						? (o[u].p(c, d), P(o[u], 1))
						: ((o[u] = ie(c)), o[u].c(), P(o[u], 1), o[u].m(t.parentNode, t));
				}
				for (O(), u = f.length; u < o.length; u += 1) _(u);
				L();
			}
		},
		i(r) {
			if (!n) {
				for (let d = 0; d < f.length; d += 1) P(o[d]);
				n = !0;
			}
		},
		o(r) {
			o = o.filter(Boolean);
			for (let d = 0; d < o.length; d += 1) T(o[d]);
			n = !1;
		},
		d(r) {
			s && s.d(r), r && m(e), i && i.d(r), r && m(l), me(o, r), r && m(t);
		}
	};
}
function ee(a) {
	let e,
		l,
		t = a[0].calendar.name + '',
		n,
		s,
		i,
		f = a[0].calendar.description + '',
		o,
		_,
		r,
		d,
		u;
	return {
		c() {
			(e = S('p')),
				(l = E('This is the calendar for: ')),
				(n = E(t)),
				(s = B()),
				(i = S('span')),
				(o = E(f)),
				(_ = B()),
				(r = S('a')),
				(d = E('😅 Forgot my appointment')),
				this.h();
		},
		l(c) {
			e = $(c, 'P', { id: !0, class: !0 });
			var p = w(e);
			(l = N(p, 'This is the calendar for: ')),
				(n = N(p, t)),
				(s = M(p)),
				(i = $(p, 'SPAN', { class: !0 }));
			var g = w(i);
			(o = N(g, f)), g.forEach(m), (_ = M(p)), (r = $(p, 'A', { id: !0, href: !0, class: !0 }));
			var R = w(r);
			(d = N(R, '😅 Forgot my appointment')), R.forEach(m), p.forEach(m), this.h();
		},
		h() {
			h(i, 'class', 'callout svelte-16uh2pq'),
				h(r, 'id', 'forgot'),
				h(r, 'href', (u = '/forgot/' + a[0].calendar.url)),
				h(r, 'class', 'svelte-16uh2pq'),
				h(e, 'id', 'description'),
				h(e, 'class', 'svelte-16uh2pq');
		},
		m(c, p) {
			b(c, e, p), v(e, l), v(e, n), v(e, s), v(e, i), v(i, o), v(e, _), v(e, r), v(r, d);
		},
		p(c, p) {
			p & 1 && t !== (t = c[0].calendar.name + '') && U(n, t),
				p & 1 && f !== (f = c[0].calendar.description + '') && U(o, f),
				p & 1 && u !== (u = '/forgot/' + c[0].calendar.url) && h(r, 'href', u);
		},
		d(c) {
			c && m(e);
		}
	};
}
function te(a) {
	let e, l;
	return {
		c() {
			(e = S('h1')), (l = E('Whoa there, no spots available'));
		},
		l(t) {
			e = $(t, 'H1', {});
			var n = w(e);
			(l = N(n, 'Whoa there, no spots available')), n.forEach(m);
		},
		m(t, n) {
			b(t, e, n), v(e, l);
		},
		d(t) {
			t && m(e);
		}
	};
}
function le(a) {
	let e, l, t;
	return (
		(l = new qe({ props: { spot: a[6], calendar: a[0].calendar } })),
		{
			c() {
				(e = S('div')), ue(l.$$.fragment), this.h();
			},
			l(n) {
				e = $(n, 'DIV', { class: !0 });
				var s = w(e);
				he(l.$$.fragment, s), s.forEach(m), this.h();
			},
			h() {
				h(e, 'class', 'groupedSpots svelte-16uh2pq');
			},
			m(n, s) {
				b(n, e, s), _e(l, e, null), (t = !0);
			},
			p(n, s) {
				const i = {};
				s & 1 && (i.spot = n[6]), s & 1 && (i.calendar = n[0].calendar), l.$set(i);
			},
			i(n) {
				t || (P(l.$$.fragment, n), (t = !0));
			},
			o(n) {
				T(l.$$.fragment, n), (t = !1);
			},
			d(n) {
				n && m(e), pe(l);
			}
		}
	);
}
function se(a) {
	let e, l, t, n, s;
	return {
		c() {
			(e = S('a')), (l = E('Put me on the waitinglist 📋')), this.h();
		},
		l(i) {
			e = $(i, 'A', { href: !0, id: !0, class: !0 });
			var f = w(e);
			(l = N(f, 'Put me on the waitinglist 📋')), f.forEach(m), this.h();
		},
		h() {
			h(e, 'href', (t = '/waitinglist/' + a[0].calendar.url)),
				h(e, 'id', 'waitinglist'),
				h(e, 'class', 'svelte-16uh2pq');
		},
		m(i, f) {
			b(i, e, f),
				v(e, l),
				n ||
					((s = fe(e, 'click', function () {
						ce(a[2](a[3].day)) && a[2](a[3].day).apply(this, arguments);
					})),
					(n = !0));
		},
		p(i, f) {
			(a = i), f & 1 && t !== (t = '/waitinglist/' + a[0].calendar.url) && h(e, 'href', t);
		},
		d(i) {
			i && m(e), (n = !1), s();
		}
	};
}
function ie(a) {
	let e,
		l = W(a[3].day, a[1]) + '',
		t,
		n,
		s,
		i = a[3].spots.every(ae),
		f,
		o,
		_ = a[3].spots,
		r = [];
	for (let c = 0; c < _.length; c += 1) r[c] = le(x(a, _, c));
	const d = (c) =>
		T(r[c], 1, 1, () => {
			r[c] = null;
		});
	let u = i && se(a);
	return {
		c() {
			(e = S('h2')), (t = E(l)), (n = B());
			for (let c = 0; c < r.length; c += 1) r[c].c();
			(s = B()), u && u.c(), (f = F()), this.h();
		},
		l(c) {
			e = $(c, 'H2', { class: !0 });
			var p = w(e);
			(t = N(p, l)), p.forEach(m), (n = M(c));
			for (let g = 0; g < r.length; g += 1) r[g].l(c);
			(s = M(c)), u && u.l(c), (f = F()), this.h();
		},
		h() {
			h(e, 'class', 'svelte-16uh2pq');
		},
		m(c, p) {
			b(c, e, p), v(e, t), b(c, n, p);
			for (let g = 0; g < r.length; g += 1) r[g] && r[g].m(c, p);
			b(c, s, p), u && u.m(c, p), b(c, f, p), (o = !0);
		},
		p(c, p) {
			if (((!o || p & 1) && l !== (l = W(c[3].day, c[1]) + '') && U(t, l), p & 1)) {
				_ = c[3].spots;
				let g;
				for (g = 0; g < _.length; g += 1) {
					const R = x(c, _, g);
					r[g]
						? (r[g].p(R, p), P(r[g], 1))
						: ((r[g] = le(R)), r[g].c(), P(r[g], 1), r[g].m(s.parentNode, s));
				}
				for (O(), g = _.length; g < r.length; g += 1) d(g);
				L();
			}
			p & 1 && (i = c[3].spots.every(ae)),
				i
					? u
						? u.p(c, p)
						: ((u = se(c)), u.c(), u.m(f.parentNode, f))
					: u && (u.d(1), (u = null));
		},
		i(c) {
			if (!o) {
				for (let p = 0; p < _.length; p += 1) P(r[p]);
				o = !0;
			}
		},
		o(c) {
			r = r.filter(Boolean);
			for (let p = 0; p < r.length; p += 1) T(r[p]);
			o = !1;
		},
		d(c) {
			c && m(e), c && m(n), me(r, c), c && m(s), u && u.d(c), c && m(f);
		}
	};
}
function De(a) {
	let e, l, t, n;
	const s = [$e, Se],
		i = [];
	function f(o, _) {
		return o[0].calendar ? 0 : 1;
	}
	return (
		(l = f(a)),
		(t = i[l] = s[l](a)),
		{
			c() {
				(e = S('main')), t.c();
			},
			l(o) {
				e = $(o, 'MAIN', {});
				var _ = w(e);
				t.l(_), _.forEach(m);
			},
			m(o, _) {
				b(o, e, _), i[l].m(e, null), (n = !0);
			},
			p(o, [_]) {
				let r = l;
				(l = f(o)),
					l === r
						? i[l].p(o, _)
						: (O(),
						  T(i[r], 1, 1, () => {
								i[r] = null;
						  }),
						  L(),
						  (t = i[l]),
						  t ? t.p(o, _) : ((t = i[l] = s[l](o)), t.c()),
						  P(t, 1),
						  t.m(e, null));
			},
			i(o) {
				n || (P(t), (n = !0));
			},
			o(o) {
				T(t), (n = !1);
			},
			d(o) {
				o && m(e), i[l].d();
			}
		}
	);
}
const ae = (a) => a.isReserved;
function Be(a, e, l) {
	let { data: t } = e;
	const n = { weekday: 'long', month: 'long', day: 'numeric' };
	de(() => {
		t.calendar && t.calendar.name && ge.set(t.calendar.name);
	});
	function s(i) {
		we.set(i);
	}
	return (
		(a.$$set = (i) => {
			'data' in i && l(0, (t = i.data));
		}),
		[t, n, s]
	);
}
class Ie extends re {
	constructor(e) {
		super(), ne(this, e, Be, De, oe, { data: 0 });
	}
}
export { Ie as component };
