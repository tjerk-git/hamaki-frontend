import {
	V as U,
	W as $e,
	S as j,
	i as A,
	s as B,
	k as S,
	l as N,
	m as P,
	h,
	n as T,
	p,
	b,
	K as V,
	e as C,
	v as H,
	d as g,
	f as M,
	g as d,
	X as F,
	y,
	a as le,
	z as D,
	c as ae,
	A as k,
	I as ce,
	Y as J,
	Z as X,
	B as w,
	x as Q,
	q as fe,
	r as ue,
	u as _e,
	_ as G,
	H as W,
	C as de,
	D as me,
	E as ge,
	F as he,
	o as Te,
	w as De,
	J as x,
	$ as Ie,
	L as Ee,
	Q as Ve,
	a0 as Ce
} from './index.113bb01f.js';
import { d as Se, w as pe } from './index.05912bbf.js';
function Ne(s, e, t, n) {
	var o,
		r,
		i = !1,
		c = t.length >= 2,
		l = (_, $) => {
			if (((o = $), c && (r = _), !i)) {
				let E = e(_, $);
				if (e.length < 2) $(E);
				else return E;
			}
			i = !1;
		},
		f = Se(s, l, n),
		a = !Array.isArray(s);
	function u(_) {
		var $ = t(_, r);
		a
			? ((i = !0), s.set($))
			: $.forEach((E, R) => {
					(i = !0), s[R].set(E);
			  }),
			(i = !1);
	}
	var m = !1;
	function v(_) {
		var $, E, R, O;
		if (m) {
			(O = _(U(f))), o(O);
			return;
		}
		var ke = f.subscribe((we) => {
			m ? ($ ? (E = !0) : ($ = !0)) : (R = we);
		});
		(O = _(R)), (m = !0), o(O), ke(), (m = !1), E && (O = U(f)), $ && u(O);
	}
	return {
		subscribe: f.subscribe,
		set(_) {
			v(() => _);
		},
		update: v
	};
}
const Pe = 20,
	L = pe([]),
	Y = pe(null),
	z = new Map(),
	ee = (s) => {
		if (z.has(s)) return;
		const e = setTimeout(() => {
			z.delete(s), be(s);
		}, 1e3);
		z.set(s, e);
	},
	He = (s) => {
		const e = z.get(s);
		e && clearTimeout(e);
	};
function ve(s) {
	s.id && He(s.id), L.update((e) => e.map((t) => (t.id === s.id ? { ...t, ...s } : t)));
}
function Me(s) {
	L.update((e) => [s, ...e].slice(0, Pe));
}
function je(s) {
	U(L).find((e) => e.id === s.id) ? ve(s) : Me(s);
}
function Ae(s) {
	L.update(
		(e) => (
			s
				? ee(s)
				: e.forEach((t) => {
						ee(t.id);
				  }),
			e.map((t) => (t.id === s || s === void 0 ? { ...t, visible: !1 } : t))
		)
	);
}
function be(s) {
	L.update((e) => (s === void 0 ? [] : e.filter((t) => t.id !== s)));
}
function Be(s) {
	Y.set(s);
}
function Re(s) {
	let e;
	Y.update((t) => ((e = s - (t || 0)), null)),
		L.update((t) => t.map((n) => ({ ...n, pauseDuration: n.pauseDuration + e })));
}
const Le = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 };
function Oe(s = {}) {
	return {
		toasts: Ne(
			L,
			(t) =>
				t.map((n) => {
					var o, r;
					return {
						...s,
						...s[n.type],
						...n,
						duration:
							n.duration ||
							((o = s[n.type]) == null ? void 0 : o.duration) ||
							(s == null ? void 0 : s.duration) ||
							Le[n.type],
						style: [s.style, (r = s[n.type]) == null ? void 0 : r.style, n.style].join(';')
					};
				}),
			(t) => t
		),
		pausedAt: Y
	};
}
const Qe = (s) => typeof s == 'function',
	te = (s, e) => (Qe(s) ? s(e) : s),
	We = (() => {
		let s = 0;
		return () => ((s += 1), s.toString());
	})(),
	ye = (() => {
		let s;
		return () => {
			if (s === void 0 && typeof window < 'u') {
				const e = matchMedia('(prefers-reduced-motion: reduce)');
				s = !e || e.matches;
			}
			return s;
		};
	})(),
	qe = (s, e = 'blank', t) => ({
		createdAt: Date.now(),
		visible: !0,
		type: e,
		ariaProps: { role: 'status', 'aria-live': 'polite' },
		message: s,
		pauseDuration: 0,
		...t,
		id: (t == null ? void 0 : t.id) || We()
	}),
	q = (s) => (e, t) => {
		const n = qe(e, s, t);
		return je(n), n.id;
	},
	I = (s, e) => q('blank')(s, e);
I.error = q('error');
I.success = q('success');
I.loading = q('loading');
I.custom = q('custom');
I.dismiss = (s) => {
	Ae(s);
};
I.remove = (s) => be(s);
I.promise = (s, e, t) => {
	const n = I.loading(e.loading, { ...t, ...(t == null ? void 0 : t.loading) });
	return (
		s
			.then(
				(o) => (
					I.success(te(e.success, o), { id: n, ...t, ...(t == null ? void 0 : t.success) }), o
				)
			)
			.catch((o) => {
				I.error(te(e.error, o), { id: n, ...t, ...(t == null ? void 0 : t.error) });
			}),
		s
	);
};
function ze(s, e, t) {
	const { reverseOrder: n, gutter: o = 8, defaultPosition: r } = t || {},
		i = e.filter((a) => (a.position || r) === (s.position || r) && a.height),
		c = i.findIndex((a) => a.id === s.id),
		l = i.filter((a, u) => u < c && a.visible).length;
	return i
		.filter((a) => a.visible)
		.slice(...(n ? [l + 1] : [0, l]))
		.reduce((a, u) => a + (u.height || 0) + o, 0);
}
const Fe = {
	startPause() {
		Be(Date.now());
	},
	endPause() {
		Re(Date.now());
	},
	updateHeight: (s, e) => {
		ve({ id: s, height: e });
	},
	calculateOffset: ze
};
function Je(s) {
	const { toasts: e, pausedAt: t } = Oe(s),
		n = new Map();
	let o;
	const r = [
		t.subscribe((i) => {
			if (i) {
				for (const [, c] of n) clearTimeout(c);
				n.clear();
			}
			o = i;
		}),
		e.subscribe((i) => {
			if (o) return;
			const c = Date.now();
			for (const l of i) {
				if (n.has(l.id) || l.duration === 1 / 0) continue;
				const f = (l.duration || 0) + l.pauseDuration - (c - l.createdAt);
				if (f < 0) return l.visible && I.dismiss(l.id), null;
				n.set(
					l.id,
					setTimeout(() => I.dismiss(l.id), f)
				);
			}
		})
	];
	return (
		$e(() => {
			for (const i of r) i();
		}),
		{ toasts: e, handlers: Fe }
	);
}
function Ke(s) {
	let e;
	return {
		c() {
			(e = S('div')), this.h();
		},
		l(t) {
			(e = N(t, 'DIV', { class: !0 })), P(e).forEach(h), this.h();
		},
		h() {
			T(e, 'class', 'svelte-11kvm4p'), p(e, '--primary', s[0]), p(e, '--secondary', s[1]);
		},
		m(t, n) {
			b(t, e, n);
		},
		p(t, [n]) {
			n & 1 && p(e, '--primary', t[0]), n & 2 && p(e, '--secondary', t[1]);
		},
		i: V,
		o: V,
		d(t) {
			t && h(e);
		}
	};
}
function Ue(s, e, t) {
	let { primary: n = '#61d345' } = e,
		{ secondary: o = '#fff' } = e;
	return (
		(s.$$set = (r) => {
			'primary' in r && t(0, (n = r.primary)), 'secondary' in r && t(1, (o = r.secondary));
		}),
		[n, o]
	);
}
class Xe extends j {
	constructor(e) {
		super(), A(this, e, Ue, Ke, B, { primary: 0, secondary: 1 });
	}
}
function Ye(s) {
	let e;
	return {
		c() {
			(e = S('div')), this.h();
		},
		l(t) {
			(e = N(t, 'DIV', { class: !0 })), P(e).forEach(h), this.h();
		},
		h() {
			T(e, 'class', 'svelte-1ee93ns'), p(e, '--primary', s[0]), p(e, '--secondary', s[1]);
		},
		m(t, n) {
			b(t, e, n);
		},
		p(t, [n]) {
			n & 1 && p(e, '--primary', t[0]), n & 2 && p(e, '--secondary', t[1]);
		},
		i: V,
		o: V,
		d(t) {
			t && h(e);
		}
	};
}
function Ze(s, e, t) {
	let { primary: n = '#ff4b4b' } = e,
		{ secondary: o = '#fff' } = e;
	return (
		(s.$$set = (r) => {
			'primary' in r && t(0, (n = r.primary)), 'secondary' in r && t(1, (o = r.secondary));
		}),
		[n, o]
	);
}
class Ge extends j {
	constructor(e) {
		super(), A(this, e, Ze, Ye, B, { primary: 0, secondary: 1 });
	}
}
function xe(s) {
	let e;
	return {
		c() {
			(e = S('div')), this.h();
		},
		l(t) {
			(e = N(t, 'DIV', { class: !0 })), P(e).forEach(h), this.h();
		},
		h() {
			T(e, 'class', 'svelte-1j7dflg'), p(e, '--primary', s[0]), p(e, '--secondary', s[1]);
		},
		m(t, n) {
			b(t, e, n);
		},
		p(t, [n]) {
			n & 1 && p(e, '--primary', t[0]), n & 2 && p(e, '--secondary', t[1]);
		},
		i: V,
		o: V,
		d(t) {
			t && h(e);
		}
	};
}
function et(s, e, t) {
	let { primary: n = '#616161' } = e,
		{ secondary: o = '#e0e0e0' } = e;
	return (
		(s.$$set = (r) => {
			'primary' in r && t(0, (n = r.primary)), 'secondary' in r && t(1, (o = r.secondary));
		}),
		[n, o]
	);
}
class tt extends j {
	constructor(e) {
		super(), A(this, e, et, xe, B, { primary: 0, secondary: 1 });
	}
}
function nt(s) {
	let e, t, n, o;
	const r = [s[0]];
	let i = {};
	for (let l = 0; l < r.length; l += 1) i = F(i, r[l]);
	t = new tt({ props: i });
	let c = s[2] !== 'loading' && ne(s);
	return {
		c() {
			(e = S('div')), y(t.$$.fragment), (n = le()), c && c.c(), this.h();
		},
		l(l) {
			e = N(l, 'DIV', { class: !0 });
			var f = P(e);
			D(t.$$.fragment, f), (n = ae(f)), c && c.l(f), f.forEach(h), this.h();
		},
		h() {
			T(e, 'class', 'indicator svelte-1kgeier');
		},
		m(l, f) {
			b(l, e, f), k(t, e, null), ce(e, n), c && c.m(e, null), (o = !0);
		},
		p(l, f) {
			const a = f & 1 ? J(r, [X(l[0])]) : {};
			t.$set(a),
				l[2] !== 'loading'
					? c
						? (c.p(l, f), f & 4 && d(c, 1))
						: ((c = ne(l)), c.c(), d(c, 1), c.m(e, null))
					: c &&
					  (H(),
					  g(c, 1, 1, () => {
							c = null;
					  }),
					  M());
		},
		i(l) {
			o || (d(t.$$.fragment, l), d(c), (o = !0));
		},
		o(l) {
			g(t.$$.fragment, l), g(c), (o = !1);
		},
		d(l) {
			l && h(e), w(t), c && c.d();
		}
	};
}
function st(s) {
	let e, t, n;
	var o = s[1];
	function r(i) {
		return {};
	}
	return (
		o && (e = Q(o, r())),
		{
			c() {
				e && y(e.$$.fragment), (t = C());
			},
			l(i) {
				e && D(e.$$.fragment, i), (t = C());
			},
			m(i, c) {
				e && k(e, i, c), b(i, t, c), (n = !0);
			},
			p(i, c) {
				if (c & 2 && o !== (o = i[1])) {
					if (e) {
						H();
						const l = e;
						g(l.$$.fragment, 1, 0, () => {
							w(l, 1);
						}),
							M();
					}
					o
						? ((e = Q(o, r())), y(e.$$.fragment), d(e.$$.fragment, 1), k(e, t.parentNode, t))
						: (e = null);
				}
			},
			i(i) {
				n || (e && d(e.$$.fragment, i), (n = !0));
			},
			o(i) {
				e && g(e.$$.fragment, i), (n = !1);
			},
			d(i) {
				i && h(t), e && w(e, i);
			}
		}
	);
}
function rt(s) {
	let e, t;
	return {
		c() {
			(e = S('div')), (t = fe(s[1])), this.h();
		},
		l(n) {
			e = N(n, 'DIV', { class: !0 });
			var o = P(e);
			(t = ue(o, s[1])), o.forEach(h), this.h();
		},
		h() {
			T(e, 'class', 'animated svelte-1kgeier');
		},
		m(n, o) {
			b(n, e, o), ce(e, t);
		},
		p(n, o) {
			o & 2 && _e(t, n[1]);
		},
		i: V,
		o: V,
		d(n) {
			n && h(e);
		}
	};
}
function ne(s) {
	let e, t, n, o;
	const r = [ot, it],
		i = [];
	function c(l, f) {
		return l[2] === 'error' ? 0 : 1;
	}
	return (
		(t = c(s)),
		(n = i[t] = r[t](s)),
		{
			c() {
				(e = S('div')), n.c(), this.h();
			},
			l(l) {
				e = N(l, 'DIV', { class: !0 });
				var f = P(e);
				n.l(f), f.forEach(h), this.h();
			},
			h() {
				T(e, 'class', 'status svelte-1kgeier');
			},
			m(l, f) {
				b(l, e, f), i[t].m(e, null), (o = !0);
			},
			p(l, f) {
				let a = t;
				(t = c(l)),
					t === a
						? i[t].p(l, f)
						: (H(),
						  g(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  M(),
						  (n = i[t]),
						  n ? n.p(l, f) : ((n = i[t] = r[t](l)), n.c()),
						  d(n, 1),
						  n.m(e, null));
			},
			i(l) {
				o || (d(n), (o = !0));
			},
			o(l) {
				g(n), (o = !1);
			},
			d(l) {
				l && h(e), i[t].d();
			}
		}
	);
}
function it(s) {
	let e, t;
	const n = [s[0]];
	let o = {};
	for (let r = 0; r < n.length; r += 1) o = F(o, n[r]);
	return (
		(e = new Xe({ props: o })),
		{
			c() {
				y(e.$$.fragment);
			},
			l(r) {
				D(e.$$.fragment, r);
			},
			m(r, i) {
				k(e, r, i), (t = !0);
			},
			p(r, i) {
				const c = i & 1 ? J(n, [X(r[0])]) : {};
				e.$set(c);
			},
			i(r) {
				t || (d(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				w(e, r);
			}
		}
	);
}
function ot(s) {
	let e, t;
	const n = [s[0]];
	let o = {};
	for (let r = 0; r < n.length; r += 1) o = F(o, n[r]);
	return (
		(e = new Ge({ props: o })),
		{
			c() {
				y(e.$$.fragment);
			},
			l(r) {
				D(e.$$.fragment, r);
			},
			m(r, i) {
				k(e, r, i), (t = !0);
			},
			p(r, i) {
				const c = i & 1 ? J(n, [X(r[0])]) : {};
				e.$set(c);
			},
			i(r) {
				t || (d(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				w(e, r);
			}
		}
	);
}
function lt(s) {
	let e, t, n, o;
	const r = [rt, st, nt],
		i = [];
	function c(l, f) {
		return typeof l[1] == 'string' ? 0 : typeof l[1] < 'u' ? 1 : l[2] !== 'blank' ? 2 : -1;
	}
	return (
		~(e = c(s)) && (t = i[e] = r[e](s)),
		{
			c() {
				t && t.c(), (n = C());
			},
			l(l) {
				t && t.l(l), (n = C());
			},
			m(l, f) {
				~e && i[e].m(l, f), b(l, n, f), (o = !0);
			},
			p(l, [f]) {
				let a = e;
				(e = c(l)),
					e === a
						? ~e && i[e].p(l, f)
						: (t &&
								(H(),
								g(i[a], 1, 1, () => {
									i[a] = null;
								}),
								M()),
						  ~e
								? ((t = i[e]),
								  t ? t.p(l, f) : ((t = i[e] = r[e](l)), t.c()),
								  d(t, 1),
								  t.m(n.parentNode, n))
								: (t = null));
			},
			i(l) {
				o || (d(t), (o = !0));
			},
			o(l) {
				g(t), (o = !1);
			},
			d(l) {
				~e && i[e].d(l), l && h(n);
			}
		}
	);
}
function at(s, e, t) {
	let n,
		o,
		r,
		{ toast: i } = e;
	return (
		(s.$$set = (c) => {
			'toast' in c && t(3, (i = c.toast));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 8 &&
				t(2, ({ type: n, icon: o, iconTheme: r } = i), n, (t(1, o), t(3, i)), (t(0, r), t(3, i)));
		}),
		[r, o, n, i]
	);
}
class Z extends j {
	constructor(e) {
		super(), A(this, e, at, lt, B, { toast: 3 });
	}
}
function ct(s) {
	let e, t, n;
	var o = s[0].message;
	function r(i) {
		return { props: { toast: i[0] } };
	}
	return (
		o && (e = Q(o, r(s))),
		{
			c() {
				e && y(e.$$.fragment), (t = C());
			},
			l(i) {
				e && D(e.$$.fragment, i), (t = C());
			},
			m(i, c) {
				e && k(e, i, c), b(i, t, c), (n = !0);
			},
			p(i, c) {
				const l = {};
				if ((c & 1 && (l.toast = i[0]), c & 1 && o !== (o = i[0].message))) {
					if (e) {
						H();
						const f = e;
						g(f.$$.fragment, 1, 0, () => {
							w(f, 1);
						}),
							M();
					}
					o
						? ((e = Q(o, r(i))), y(e.$$.fragment), d(e.$$.fragment, 1), k(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(l);
			},
			i(i) {
				n || (e && d(e.$$.fragment, i), (n = !0));
			},
			o(i) {
				e && g(e.$$.fragment, i), (n = !1);
			},
			d(i) {
				i && h(t), e && w(e, i);
			}
		}
	);
}
function ft(s) {
	let e = s[0].message + '',
		t;
	return {
		c() {
			t = fe(e);
		},
		l(n) {
			t = ue(n, e);
		},
		m(n, o) {
			b(n, t, o);
		},
		p(n, o) {
			o & 1 && e !== (e = n[0].message + '') && _e(t, e);
		},
		i: V,
		o: V,
		d(n) {
			n && h(t);
		}
	};
}
function ut(s) {
	let e, t, n, o;
	const r = [ft, ct],
		i = [];
	function c(a, u) {
		return typeof a[0].message == 'string' ? 0 : 1;
	}
	(t = c(s)), (n = i[t] = r[t](s));
	let l = [{ class: 'message' }, s[0].ariaProps],
		f = {};
	for (let a = 0; a < l.length; a += 1) f = F(f, l[a]);
	return {
		c() {
			(e = S('div')), n.c(), this.h();
		},
		l(a) {
			e = N(a, 'DIV', { class: !0 });
			var u = P(e);
			n.l(u), u.forEach(h), this.h();
		},
		h() {
			G(e, f), W(e, 'svelte-1nauejd', !0);
		},
		m(a, u) {
			b(a, e, u), i[t].m(e, null), (o = !0);
		},
		p(a, [u]) {
			let m = t;
			(t = c(a)),
				t === m
					? i[t].p(a, u)
					: (H(),
					  g(i[m], 1, 1, () => {
							i[m] = null;
					  }),
					  M(),
					  (n = i[t]),
					  n ? n.p(a, u) : ((n = i[t] = r[t](a)), n.c()),
					  d(n, 1),
					  n.m(e, null)),
				G(e, (f = J(l, [{ class: 'message' }, u & 1 && a[0].ariaProps]))),
				W(e, 'svelte-1nauejd', !0);
		},
		i(a) {
			o || (d(n), (o = !0));
		},
		o(a) {
			g(n), (o = !1);
		},
		d(a) {
			a && h(e), i[t].d();
		}
	};
}
function _t(s, e, t) {
	let { toast: n } = e;
	return (
		(s.$$set = (o) => {
			'toast' in o && t(0, (n = o.toast));
		}),
		[n]
	);
}
class K extends j {
	constructor(e) {
		super(), A(this, e, _t, ut, B, { toast: 0 });
	}
}
const dt = (s) => ({ toast: s & 1 }),
	se = (s) => ({ ToastIcon: Z, ToastMessage: K, toast: s[0] });
function mt(s) {
	let e;
	const t = s[6].default,
		n = de(t, s, s[7], se),
		o = n || ht(s);
	return {
		c() {
			o && o.c();
		},
		l(r) {
			o && o.l(r);
		},
		m(r, i) {
			o && o.m(r, i), (e = !0);
		},
		p(r, i) {
			n
				? n.p && (!e || i & 129) && me(n, t, r, r[7], e ? he(t, r[7], i, dt) : ge(r[7]), se)
				: o && o.p && (!e || i & 1) && o.p(r, e ? i : -1);
		},
		i(r) {
			e || (d(o, r), (e = !0));
		},
		o(r) {
			g(o, r), (e = !1);
		},
		d(r) {
			o && o.d(r);
		}
	};
}
function gt(s) {
	let e, t, n;
	var o = s[2];
	function r(i) {
		return { props: { $$slots: { message: [vt], icon: [pt] }, $$scope: { ctx: i } } };
	}
	return (
		o && (e = Q(o, r(s))),
		{
			c() {
				e && y(e.$$.fragment), (t = C());
			},
			l(i) {
				e && D(e.$$.fragment, i), (t = C());
			},
			m(i, c) {
				e && k(e, i, c), b(i, t, c), (n = !0);
			},
			p(i, c) {
				const l = {};
				if ((c & 129 && (l.$$scope = { dirty: c, ctx: i }), c & 4 && o !== (o = i[2]))) {
					if (e) {
						H();
						const f = e;
						g(f.$$.fragment, 1, 0, () => {
							w(f, 1);
						}),
							M();
					}
					o
						? ((e = Q(o, r(i))), y(e.$$.fragment), d(e.$$.fragment, 1), k(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(l);
			},
			i(i) {
				n || (e && d(e.$$.fragment, i), (n = !0));
			},
			o(i) {
				e && g(e.$$.fragment, i), (n = !1);
			},
			d(i) {
				i && h(t), e && w(e, i);
			}
		}
	);
}
function ht(s) {
	let e, t, n, o;
	return (
		(e = new Z({ props: { toast: s[0] } })),
		(n = new K({ props: { toast: s[0] } })),
		{
			c() {
				y(e.$$.fragment), (t = le()), y(n.$$.fragment);
			},
			l(r) {
				D(e.$$.fragment, r), (t = ae(r)), D(n.$$.fragment, r);
			},
			m(r, i) {
				k(e, r, i), b(r, t, i), k(n, r, i), (o = !0);
			},
			p(r, i) {
				const c = {};
				i & 1 && (c.toast = r[0]), e.$set(c);
				const l = {};
				i & 1 && (l.toast = r[0]), n.$set(l);
			},
			i(r) {
				o || (d(e.$$.fragment, r), d(n.$$.fragment, r), (o = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(n.$$.fragment, r), (o = !1);
			},
			d(r) {
				w(e, r), r && h(t), w(n, r);
			}
		}
	);
}
function pt(s) {
	let e, t;
	return (
		(e = new Z({ props: { toast: s[0], slot: 'icon' } })),
		{
			c() {
				y(e.$$.fragment);
			},
			l(n) {
				D(e.$$.fragment, n);
			},
			m(n, o) {
				k(e, n, o), (t = !0);
			},
			p(n, o) {
				const r = {};
				o & 1 && (r.toast = n[0]), e.$set(r);
			},
			i(n) {
				t || (d(e.$$.fragment, n), (t = !0));
			},
			o(n) {
				g(e.$$.fragment, n), (t = !1);
			},
			d(n) {
				w(e, n);
			}
		}
	);
}
function vt(s) {
	let e, t;
	return (
		(e = new K({ props: { toast: s[0], slot: 'message' } })),
		{
			c() {
				y(e.$$.fragment);
			},
			l(n) {
				D(e.$$.fragment, n);
			},
			m(n, o) {
				k(e, n, o), (t = !0);
			},
			p(n, o) {
				const r = {};
				o & 1 && (r.toast = n[0]), e.$set(r);
			},
			i(n) {
				t || (d(e.$$.fragment, n), (t = !0));
			},
			o(n) {
				g(e.$$.fragment, n), (t = !1);
			},
			d(n) {
				w(e, n);
			}
		}
	);
}
function bt(s) {
	let e, t, n, o, r, i;
	const c = [gt, mt],
		l = [];
	function f(a, u) {
		return a[2] ? 0 : 1;
	}
	return (
		(t = f(s)),
		(n = l[t] = c[t](s)),
		{
			c() {
				(e = S('div')), n.c(), this.h();
			},
			l(a) {
				e = N(a, 'DIV', { class: !0, style: !0 });
				var u = P(e);
				n.l(u), u.forEach(h), this.h();
			},
			h() {
				T(
					e,
					'class',
					(o =
						'base ' +
						(s[0].height ? s[4] : 'transparent') +
						' ' +
						(s[0].className || '') +
						' svelte-ug60r4')
				),
					T(e, 'style', (r = s[1] + '; ' + s[0].style)),
					p(e, '--factor', s[3]);
			},
			m(a, u) {
				b(a, e, u), l[t].m(e, null), (i = !0);
			},
			p(a, [u]) {
				let m = t;
				(t = f(a)),
					t === m
						? l[t].p(a, u)
						: (H(),
						  g(l[m], 1, 1, () => {
								l[m] = null;
						  }),
						  M(),
						  (n = l[t]),
						  n ? n.p(a, u) : ((n = l[t] = c[t](a)), n.c()),
						  d(n, 1),
						  n.m(e, null)),
					(!i ||
						(u & 17 &&
							o !==
								(o =
									'base ' +
									(a[0].height ? a[4] : 'transparent') +
									' ' +
									(a[0].className || '') +
									' svelte-ug60r4'))) &&
						T(e, 'class', o),
					(!i || (u & 3 && r !== (r = a[1] + '; ' + a[0].style))) && T(e, 'style', r),
					(u & 3 || u & 11) && p(e, '--factor', a[3]);
			},
			i(a) {
				i || (d(n), (i = !0));
			},
			o(a) {
				g(n), (i = !1);
			},
			d(a) {
				a && h(e), l[t].d();
			}
		}
	);
}
function yt(s, e, t) {
	let { $$slots: n = {}, $$scope: o } = e,
		{ toast: r } = e,
		{ position: i = void 0 } = e,
		{ style: c = '' } = e,
		{ Component: l = void 0 } = e,
		f,
		a;
	return (
		(s.$$set = (u) => {
			'toast' in u && t(0, (r = u.toast)),
				'position' in u && t(5, (i = u.position)),
				'style' in u && t(1, (c = u.style)),
				'Component' in u && t(2, (l = u.Component)),
				'$$scope' in u && t(7, (o = u.$$scope));
		}),
		(s.$$.update = () => {
			if (s.$$.dirty & 33) {
				const u = (r.position || i || 'top-center').includes('top');
				t(3, (f = u ? 1 : -1));
				const [m, v] = ye() ? ['fadeIn', 'fadeOut'] : ['enter', 'exit'];
				t(4, (a = r.visible ? m : v));
			}
		}),
		[r, c, l, f, a, i, n, o]
	);
}
class kt extends j {
	constructor(e) {
		super(), A(this, e, yt, bt, B, { toast: 0, position: 5, style: 1, Component: 2 });
	}
}
const wt = (s) => ({ toast: s & 1 }),
	re = (s) => ({ toast: s[0] });
function $t(s) {
	let e;
	const t = s[8].default,
		n = de(t, s, s[7], re),
		o = n || Dt(s);
	return {
		c() {
			o && o.c();
		},
		l(r) {
			o && o.l(r);
		},
		m(r, i) {
			o && o.m(r, i), (e = !0);
		},
		p(r, i) {
			n
				? n.p && (!e || i & 129) && me(n, t, r, r[7], e ? he(t, r[7], i, wt) : ge(r[7]), re)
				: o && o.p && (!e || i & 1) && o.p(r, e ? i : -1);
		},
		i(r) {
			e || (d(o, r), (e = !0));
		},
		o(r) {
			g(o, r), (e = !1);
		},
		d(r) {
			o && o.d(r);
		}
	};
}
function Tt(s) {
	let e, t;
	return (
		(e = new K({ props: { toast: s[0] } })),
		{
			c() {
				y(e.$$.fragment);
			},
			l(n) {
				D(e.$$.fragment, n);
			},
			m(n, o) {
				k(e, n, o), (t = !0);
			},
			p(n, o) {
				const r = {};
				o & 1 && (r.toast = n[0]), e.$set(r);
			},
			i(n) {
				t || (d(e.$$.fragment, n), (t = !0));
			},
			o(n) {
				g(e.$$.fragment, n), (t = !1);
			},
			d(n) {
				w(e, n);
			}
		}
	);
}
function Dt(s) {
	let e, t;
	return (
		(e = new kt({ props: { toast: s[0], position: s[0].position } })),
		{
			c() {
				y(e.$$.fragment);
			},
			l(n) {
				D(e.$$.fragment, n);
			},
			m(n, o) {
				k(e, n, o), (t = !0);
			},
			p(n, o) {
				const r = {};
				o & 1 && (r.toast = n[0]), o & 1 && (r.position = n[0].position), e.$set(r);
			},
			i(n) {
				t || (d(e.$$.fragment, n), (t = !0));
			},
			o(n) {
				g(e.$$.fragment, n), (t = !1);
			},
			d(n) {
				w(e, n);
			}
		}
	);
}
function It(s) {
	let e, t, n, o;
	const r = [Tt, $t],
		i = [];
	function c(l, f) {
		return l[0].type === 'custom' ? 0 : 1;
	}
	return (
		(t = c(s)),
		(n = i[t] = r[t](s)),
		{
			c() {
				(e = S('div')), n.c(), this.h();
			},
			l(l) {
				e = N(l, 'DIV', { class: !0 });
				var f = P(e);
				n.l(f), f.forEach(h), this.h();
			},
			h() {
				T(e, 'class', 'wrapper svelte-v01oml'),
					W(e, 'active', s[0].visible),
					W(e, 'transition', !ye()),
					p(e, '--factor', s[3]),
					p(e, '--offset', s[0].offset),
					p(e, 'top', s[5]),
					p(e, 'bottom', s[4]),
					p(e, 'justify-content', s[2]);
			},
			m(l, f) {
				b(l, e, f), i[t].m(e, null), s[9](e), (o = !0);
			},
			p(l, [f]) {
				let a = t;
				(t = c(l)),
					t === a
						? i[t].p(l, f)
						: (H(),
						  g(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  M(),
						  (n = i[t]),
						  n ? n.p(l, f) : ((n = i[t] = r[t](l)), n.c()),
						  d(n, 1),
						  n.m(e, null)),
					(!o || f & 1) && W(e, 'active', l[0].visible),
					f & 8 && p(e, '--factor', l[3]),
					f & 1 && p(e, '--offset', l[0].offset),
					f & 32 && p(e, 'top', l[5]),
					f & 16 && p(e, 'bottom', l[4]),
					f & 4 && p(e, 'justify-content', l[2]);
			},
			i(l) {
				o || (d(n), (o = !0));
			},
			o(l) {
				g(n), (o = !1);
			},
			d(l) {
				l && h(e), i[t].d(), s[9](null);
			}
		}
	);
}
function Et(s, e, t) {
	let n,
		o,
		r,
		i,
		{ $$slots: c = {}, $$scope: l } = e,
		{ toast: f } = e,
		{ setHeight: a } = e,
		u;
	Te(() => {
		a(u.getBoundingClientRect().height);
	});
	function m(v) {
		De[v ? 'unshift' : 'push'](() => {
			(u = v), t(1, u);
		});
	}
	return (
		(s.$$set = (v) => {
			'toast' in v && t(0, (f = v.toast)),
				'setHeight' in v && t(6, (a = v.setHeight)),
				'$$scope' in v && t(7, (l = v.$$scope));
		}),
		(s.$$.update = () => {
			var v, _, $, E, R;
			s.$$.dirty & 1 && t(5, (n = (v = f.position) != null && v.includes('top') ? 0 : null)),
				s.$$.dirty & 1 && t(4, (o = (_ = f.position) != null && _.includes('bottom') ? 0 : null)),
				s.$$.dirty & 1 && t(3, (r = ($ = f.position) != null && $.includes('top') ? 1 : -1)),
				s.$$.dirty & 1 &&
					t(
						2,
						(i =
							(((E = f.position) == null ? void 0 : E.includes('center')) && 'center') ||
							(((R = f.position) == null ? void 0 : R.includes('right')) && 'flex-end') ||
							null)
					);
		}),
		[f, u, i, r, o, n, a, l, c, m]
	);
}
class Vt extends j {
	constructor(e) {
		super(), A(this, e, Et, It, B, { toast: 0, setHeight: 6 });
	}
}
function ie(s, e, t) {
	const n = s.slice();
	return (n[11] = e[t]), n;
}
function oe(s, e) {
	let t, n, o;
	function r(...i) {
		return e[10](e[11], ...i);
	}
	return (
		(n = new Vt({ props: { toast: e[11], setHeight: r } })),
		{
			key: s,
			first: null,
			c() {
				(t = C()), y(n.$$.fragment), this.h();
			},
			l(i) {
				(t = C()), D(n.$$.fragment, i), this.h();
			},
			h() {
				this.first = t;
			},
			m(i, c) {
				b(i, t, c), k(n, i, c), (o = !0);
			},
			p(i, c) {
				e = i;
				const l = {};
				c & 4 && (l.toast = e[11]), c & 4 && (l.setHeight = r), n.$set(l);
			},
			i(i) {
				o || (d(n.$$.fragment, i), (o = !0));
			},
			o(i) {
				g(n.$$.fragment, i), (o = !1);
			},
			d(i) {
				i && h(t), w(n, i);
			}
		}
	);
}
function Ct(s) {
	let e,
		t = [],
		n = new Map(),
		o,
		r,
		i,
		c,
		l = s[2];
	const f = (a) => a[11].id;
	for (let a = 0; a < l.length; a += 1) {
		let u = ie(s, l, a),
			m = f(u);
		n.set(m, (t[a] = oe(m, u)));
	}
	return {
		c() {
			e = S('div');
			for (let a = 0; a < t.length; a += 1) t[a].c();
			this.h();
		},
		l(a) {
			e = N(a, 'DIV', { class: !0, style: !0 });
			var u = P(e);
			for (let m = 0; m < t.length; m += 1) t[m].l(u);
			u.forEach(h), this.h();
		},
		h() {
			T(e, 'class', (o = 'toaster ' + (s[1] || '') + ' svelte-1phplh9')), T(e, 'style', s[0]);
		},
		m(a, u) {
			b(a, e, u);
			for (let m = 0; m < t.length; m += 1) t[m] && t[m].m(e, null);
			(r = !0),
				i ||
					((c = [x(e, 'mouseenter', s[4].startPause), x(e, 'mouseleave', s[4].endPause)]),
					(i = !0));
		},
		p(a, [u]) {
			u & 20 && ((l = a[2]), H(), (t = Ie(t, u, f, 1, a, l, n, e, Ce, oe, null, ie)), M()),
				(!r || (u & 2 && o !== (o = 'toaster ' + (a[1] || '') + ' svelte-1phplh9'))) &&
					T(e, 'class', o),
				(!r || u & 1) && T(e, 'style', a[0]);
		},
		i(a) {
			if (!r) {
				for (let u = 0; u < l.length; u += 1) d(t[u]);
				r = !0;
			}
		},
		o(a) {
			for (let u = 0; u < t.length; u += 1) g(t[u]);
			r = !1;
		},
		d(a) {
			a && h(e);
			for (let u = 0; u < t.length; u += 1) t[u].d();
			(i = !1), Ee(c);
		}
	};
}
function St(s, e, t) {
	let n,
		{ reverseOrder: o = !1 } = e,
		{ position: r = 'top-center' } = e,
		{ toastOptions: i = void 0 } = e,
		{ gutter: c = 8 } = e,
		{ containerStyle: l = void 0 } = e,
		{ containerClassName: f = void 0 } = e;
	const { toasts: a, handlers: u } = Je(i);
	Ve(s, a, (_) => t(9, (n = _)));
	let m;
	const v = (_, $) => u.updateHeight(_.id, $);
	return (
		(s.$$set = (_) => {
			'reverseOrder' in _ && t(5, (o = _.reverseOrder)),
				'position' in _ && t(6, (r = _.position)),
				'toastOptions' in _ && t(7, (i = _.toastOptions)),
				'gutter' in _ && t(8, (c = _.gutter)),
				'containerStyle' in _ && t(0, (l = _.containerStyle)),
				'containerClassName' in _ && t(1, (f = _.containerClassName));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 864 &&
				t(
					2,
					(m = n.map((_) => ({
						..._,
						position: _.position || r,
						offset: u.calculateOffset(_, n, { reverseOrder: o, gutter: c, defaultPosition: r })
					})))
				);
		}),
		[l, f, m, a, u, o, r, i, c, n, v]
	);
}
class Ht extends j {
	constructor(e) {
		super(),
			A(this, e, St, Ct, B, {
				reverseOrder: 5,
				position: 6,
				toastOptions: 7,
				gutter: 8,
				containerStyle: 0,
				containerClassName: 1
			});
	}
}
export { Ht as T, I as t };
