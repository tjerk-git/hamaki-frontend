function k() {}
function lt(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function Q(t) {
	return t();
}
function F() {
	return Object.create(null);
}
function $(t) {
	t.forEach(Q);
}
function U(t) {
	return typeof t == 'function';
}
function At(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function ot(t) {
	return Object.keys(t).length === 0;
}
function V(t, ...e) {
	if (t == null) return k;
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function kt(t) {
	let e;
	return V(t, (n) => (e = n))(), e;
}
function Mt(t, e, n) {
	t.$$.on_destroy.push(V(e, n));
}
function St(t, e, n, i) {
	if (t) {
		const s = X(t, e, n, i);
		return t[0](s);
	}
}
function X(t, e, n, i) {
	return t[1] && i ? lt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function jt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const l = [],
				r = Math.max(e.dirty.length, s.length);
			for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o];
			return l;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function Lt(t, e, n, i, s, l) {
	if (s) {
		const r = X(e, n, i, l);
		t.p(r, s);
	}
}
function Ht(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
let S = !1;
function ut() {
	S = !0;
}
function ft() {
	S = !1;
}
function at(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function _t(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let u = 0; u < e.length; u++) {
			const a = e[u];
			a.claim_order !== void 0 && c.push(a);
		}
		e = c;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let c = 0; c < e.length; c++) {
		const u = e[c].claim_order,
			a = (s > 0 && e[n[s]].claim_order <= u ? s + 1 : at(1, s, (_) => e[n[_]].claim_order, u)) - 1;
		i[c] = n[a] + 1;
		const d = a + 1;
		(n[d] = c), (s = Math.max(d, s));
	}
	const l = [],
		r = [];
	let o = e.length - 1;
	for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
		for (l.push(e[c - 1]); o >= c; o--) r.push(e[o]);
		o--;
	}
	for (; o >= 0; o--) r.push(e[o]);
	l.reverse(), r.sort((c, u) => c.claim_order - u.claim_order);
	for (let c = 0, u = 0; c < r.length; c++) {
		for (; u < l.length && r[c].claim_order >= l[u].claim_order; ) u++;
		const a = u < l.length ? l[u] : null;
		t.insertBefore(r[c], a);
	}
}
function dt(t, e) {
	if (S) {
		for (
			_t(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function ht(t, e, n) {
	t.insertBefore(e, n || null);
}
function mt(t, e, n) {
	S && !n ? dt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function M(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function Ct(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function Y(t) {
	return document.createElement(t);
}
function Z(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function G(t) {
	return document.createTextNode(t);
}
function Dt() {
	return G(' ');
}
function Ot() {
	return G('');
}
function Pt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function pt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const yt = ['width', 'height'];
function Bt(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
			? (t.style.cssText = e[i])
			: i === '__value'
			? (t.value = t[i] = e[i])
			: n[i] && n[i].set && yt.indexOf(i) === -1
			? (t[i] = e[i])
			: pt(t, i, e[i]);
}
function gt(t) {
	return Array.from(t.childNodes);
}
function tt(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function et(t, e, n, i, s = !1) {
	tt(t);
	const l = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const o = t[r];
			if (e(o)) {
				const c = n(o);
				return c === void 0 ? t.splice(r, 1) : (t[r] = c), s || (t.claim_info.last_index = r), o;
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const o = t[r];
			if (e(o)) {
				const c = n(o);
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					s ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					o
				);
			}
		}
		return i();
	})();
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l;
}
function nt(t, e, n, i) {
	return et(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const l = [];
			for (let r = 0; r < s.attributes.length; r++) {
				const o = s.attributes[r];
				n[o.name] || l.push(o.name);
			}
			l.forEach((r) => s.removeAttribute(r));
		},
		() => i(e)
	);
}
function Gt(t, e, n) {
	return nt(t, e, n, Y);
}
function Rt(t, e, n) {
	return nt(t, e, n, Z);
}
function xt(t, e) {
	return et(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => G(e),
		!0
	);
}
function qt(t) {
	return xt(t, ' ');
}
function W(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i];
		if (s.nodeType === 8 && s.textContent.trim() === e) return i;
	}
	return t.length;
}
function zt(t, e) {
	const n = W(t, 'HTML_TAG_START', 0),
		i = W(t, 'HTML_TAG_END', n);
	if (n === i) return new I(void 0, e);
	tt(t);
	const s = t.splice(n, i - n + 1);
	M(s[0]), M(s[s.length - 1]);
	const l = s.slice(1, s.length - 1);
	for (const r of l)
		(r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new I(l, e);
}
function Ft(t, e) {
	(e = '' + e), t.data !== e && (t.data = e);
}
function Wt(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function It(t, e, n) {
	t.classList[n ? 'add' : 'remove'](e);
}
function Jt(t, e) {
	const n = [];
	let i = 0;
	for (const s of e.childNodes)
		if (s.nodeType === 8) {
			const l = s.textContent.trim();
			l === `HEAD_${t}_END`
				? ((i -= 1), n.push(s))
				: l === `HEAD_${t}_START` && ((i += 1), n.push(s));
		} else i > 0 && n.push(s);
	return n;
}
class wt {
	constructor(e = !1) {
		(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
	}
	c(e) {
		this.h(e);
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = Z(n.nodeName))
				: (this.e = Y(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i);
	}
	h(e) {
		(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) ht(this.t, this.n[n], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(M);
	}
}
class I extends wt {
	constructor(e, n = !1) {
		super(n), (this.e = this.n = null), (this.l = e);
	}
	c(e) {
		this.l ? (this.n = this.l) : super.c(e);
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) mt(this.t, this.n[n], e);
	}
}
function Kt(t, e) {
	return new t(e);
}
let T;
function E(t) {
	T = t;
}
function j() {
	if (!T) throw new Error('Function called outside component initialization');
	return T;
}
function Qt(t) {
	j().$$.on_mount.push(t);
}
function Ut(t) {
	j().$$.after_update.push(t);
}
function Vt(t) {
	j().$$.on_destroy.push(t);
}
function Xt(t, e) {
	return j().$$.context.set(t, e), e;
}
const w = [],
	J = [];
let b = [];
const K = [],
	it = Promise.resolve();
let P = !1;
function st() {
	P || ((P = !0), it.then(rt));
}
function Yt() {
	return st(), it;
}
function B(t) {
	b.push(t);
}
const O = new Set();
let x = 0;
function rt() {
	if (x !== 0) return;
	const t = T;
	do {
		try {
			for (; x < w.length; ) {
				const e = w[x];
				x++, E(e), bt(e.$$);
			}
		} catch (e) {
			throw ((w.length = 0), (x = 0), e);
		}
		for (E(null), w.length = 0, x = 0; J.length; ) J.pop()();
		for (let e = 0; e < b.length; e += 1) {
			const n = b[e];
			O.has(n) || (O.add(n), n());
		}
		b.length = 0;
	} while (w.length);
	for (; K.length; ) K.pop()();
	(P = !1), O.clear(), E(t);
}
function bt(t) {
	if (t.fragment !== null) {
		t.update(), $(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(B);
	}
}
function $t(t) {
	const e = [],
		n = [];
	b.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (b = e);
}
const A = new Set();
let g;
function Zt() {
	g = { r: 0, c: [], p: g };
}
function te() {
	g.r || $(g.c), (g = g.p);
}
function ct(t, e) {
	t && t.i && (A.delete(t), t.i(e));
}
function Et(t, e, n, i) {
	if (t && t.o) {
		if (A.has(t)) return;
		A.add(t),
			g.c.push(() => {
				A.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
function ee(t, e) {
	Et(t, 1, 1, () => {
		e.delete(t.key);
	});
}
function ne(t, e, n, i, s, l, r, o, c, u, a, d) {
	let _ = t.length,
		m = l.length,
		h = _;
	const L = {};
	for (; h--; ) L[t[h].key] = h;
	const v = [],
		H = new Map(),
		C = new Map(),
		R = [];
	for (h = m; h--; ) {
		const f = d(s, l, h),
			p = n(f);
		let y = r.get(p);
		y ? i && R.push(() => y.p(f, e)) : ((y = u(p, f)), y.c()),
			H.set(p, (v[h] = y)),
			p in L && C.set(p, Math.abs(h - L[p]));
	}
	const q = new Set(),
		z = new Set();
	function D(f) {
		ct(f, 1), f.m(o, a), r.set(f.key, f), (a = f.first), m--;
	}
	for (; _ && m; ) {
		const f = v[m - 1],
			p = t[_ - 1],
			y = f.key,
			N = p.key;
		f === p
			? ((a = f.first), _--, m--)
			: H.has(N)
			? !r.has(y) || q.has(y)
				? D(f)
				: z.has(N)
				? _--
				: C.get(y) > C.get(N)
				? (z.add(y), D(f))
				: (q.add(N), _--)
			: (c(p, r), _--);
	}
	for (; _--; ) {
		const f = t[_];
		H.has(f.key) || c(f, r);
	}
	for (; m; ) D(v[m - 1]);
	return $(R), v;
}
function ie(t, e) {
	const n = {},
		i = {},
		s = { $$scope: 1 };
	let l = t.length;
	for (; l--; ) {
		const r = t[l],
			o = e[l];
		if (o) {
			for (const c in r) c in o || (i[c] = 1);
			for (const c in o) s[c] || ((n[c] = o[c]), (s[c] = 1));
			t[l] = o;
		} else for (const c in r) s[c] = 1;
	}
	for (const r in i) r in n || (n[r] = void 0);
	return n;
}
function se(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function re(t) {
	t && t.c();
}
function ce(t, e) {
	t && t.l(e);
}
function Tt(t, e, n, i) {
	const { fragment: s, after_update: l } = t.$$;
	s && s.m(e, n),
		i ||
			B(() => {
				const r = t.$$.on_mount.map(Q).filter(U);
				t.$$.on_destroy ? t.$$.on_destroy.push(...r) : $(r), (t.$$.on_mount = []);
			}),
		l.forEach(B);
}
function vt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		($t(n.after_update),
		$(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Nt(t, e) {
	t.$$.dirty[0] === -1 && (w.push(t), st(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function le(t, e, n, i, s, l, r, o = [-1]) {
	const c = T;
	E(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: [],
		props: l,
		update: k,
		not_equal: s,
		bound: F(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (c ? c.$$.context : [])),
		callbacks: F(),
		dirty: o,
		skip_bound: !1,
		root: e.target || c.$$.root
	});
	r && r(u.root);
	let a = !1;
	if (
		((u.ctx = n
			? n(t, e.props || {}, (d, _, ...m) => {
					const h = m.length ? m[0] : _;
					return (
						u.ctx &&
							s(u.ctx[d], (u.ctx[d] = h)) &&
							(!u.skip_bound && u.bound[d] && u.bound[d](h), a && Nt(t, d)),
						_
					);
			  })
			: []),
		u.update(),
		(a = !0),
		$(u.before_update),
		(u.fragment = i ? i(u.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			ut();
			const d = gt(e.target);
			u.fragment && u.fragment.l(d), d.forEach(M);
		} else u.fragment && u.fragment.c();
		e.intro && ct(t.$$.fragment), Tt(t, e.target, e.anchor, e.customElement), ft(), rt();
	}
	E(c);
}
class oe {
	$destroy() {
		vt(this, 1), (this.$destroy = k);
	}
	$on(e, n) {
		if (!U(n)) return k;
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const s = i.indexOf(n);
				s !== -1 && i.splice(s, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !ot(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	ne as $,
	Tt as A,
	vt as B,
	St as C,
	Lt as D,
	Ht as E,
	jt as F,
	Xt as G,
	It as H,
	dt as I,
	Pt as J,
	k as K,
	$ as L,
	Ct as M,
	Jt as N,
	I as O,
	zt as P,
	Mt as Q,
	Z as R,
	oe as S,
	Rt as T,
	U,
	kt as V,
	Vt as W,
	lt as X,
	ie as Y,
	se as Z,
	Bt as _,
	Dt as a,
	ee as a0,
	V as a1,
	mt as b,
	qt as c,
	Et as d,
	Ot as e,
	te as f,
	ct as g,
	M as h,
	le as i,
	Ut as j,
	Y as k,
	Gt as l,
	gt as m,
	pt as n,
	Qt as o,
	Wt as p,
	G as q,
	xt as r,
	At as s,
	Yt as t,
	Ft as u,
	Zt as v,
	J as w,
	Kt as x,
	re as y,
	ce as z
};
