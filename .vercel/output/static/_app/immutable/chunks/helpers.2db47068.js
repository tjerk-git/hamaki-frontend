import { d as D } from './singletons.12c81194.js';
const T = () => {
		const t = D;
		return {
			page: { subscribe: t.page.subscribe },
			navigating: { subscribe: t.navigating.subscribe },
			updated: t.updated
		};
	},
	wt = {
		subscribe(t) {
			return T().page.subscribe(t);
		}
	};
var f =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {};
function x(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var E = 'Expected a function',
	b = '__lodash_hash_undefined__',
	F = '[object Function]',
	I = '[object GeneratorFunction]',
	U = /[\\^$.*+?()[\]{}|]/g,
	$ = /^\[object .+?Constructor\]$/,
	H = typeof f == 'object' && f && f.Object === Object && f,
	P = typeof self == 'object' && self && self.Object === Object && self,
	m = H || P || Function('return this')();
function N(t, e) {
	return t == null ? void 0 : t[e];
}
function z(t) {
	var e = !1;
	if (t != null && typeof t.toString != 'function')
		try {
			e = !!(t + '');
		} catch {}
	return e;
}
var G = Array.prototype,
	M = Function.prototype,
	y = Object.prototype,
	d = m['__core-js_shared__'],
	v = (function () {
		var t = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || '');
		return t ? 'Symbol(src)_1.' + t : '';
	})(),
	C = M.toString,
	_ = y.hasOwnProperty,
	R = y.toString,
	Z = RegExp(
		'^' +
			C.call(_)
				.replace(U, '\\$&')
				.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
			'$'
	),
	A = G.splice,
	q = O(m, 'Map'),
	l = O(Object, 'create');
function s(t) {
	var e = -1,
		n = t ? t.length : 0;
	for (this.clear(); ++e < n; ) {
		var a = t[e];
		this.set(a[0], a[1]);
	}
}
function J() {
	this.__data__ = l ? l(null) : {};
}
function K(t) {
	return this.has(t) && delete this.__data__[t];
}
function k(t) {
	var e = this.__data__;
	if (l) {
		var n = e[t];
		return n === b ? void 0 : n;
	}
	return _.call(e, t) ? e[t] : void 0;
}
function B(t) {
	var e = this.__data__;
	return l ? e[t] !== void 0 : _.call(e, t);
}
function V(t, e) {
	var n = this.__data__;
	return (n[t] = l && e === void 0 ? b : e), this;
}
s.prototype.clear = J;
s.prototype.delete = K;
s.prototype.get = k;
s.prototype.has = B;
s.prototype.set = V;
function u(t) {
	var e = -1,
		n = t ? t.length : 0;
	for (this.clear(); ++e < n; ) {
		var a = t[e];
		this.set(a[0], a[1]);
	}
}
function X() {
	this.__data__ = [];
}
function Q(t) {
	var e = this.__data__,
		n = p(e, t);
	if (n < 0) return !1;
	var a = e.length - 1;
	return n == a ? e.pop() : A.call(e, n, 1), !0;
}
function W(t) {
	var e = this.__data__,
		n = p(e, t);
	return n < 0 ? void 0 : e[n][1];
}
function Y(t) {
	return p(this.__data__, t) > -1;
}
function tt(t, e) {
	var n = this.__data__,
		a = p(n, t);
	return a < 0 ? n.push([t, e]) : (n[a][1] = e), this;
}
u.prototype.clear = X;
u.prototype.delete = Q;
u.prototype.get = W;
u.prototype.has = Y;
u.prototype.set = tt;
function c(t) {
	var e = -1,
		n = t ? t.length : 0;
	for (this.clear(); ++e < n; ) {
		var a = t[e];
		this.set(a[0], a[1]);
	}
}
function et() {
	this.__data__ = { hash: new s(), map: new (q || u)(), string: new s() };
}
function nt(t) {
	return h(this, t).delete(t);
}
function at(t) {
	return h(this, t).get(t);
}
function rt(t) {
	return h(this, t).has(t);
}
function ot(t, e) {
	return h(this, t).set(t, e), this;
}
c.prototype.clear = et;
c.prototype.delete = nt;
c.prototype.get = at;
c.prototype.has = rt;
c.prototype.set = ot;
function p(t, e) {
	for (var n = t.length; n--; ) if (lt(t[n][0], e)) return n;
	return -1;
}
function it(t) {
	if (!w(t) || ct(t)) return !1;
	var e = ft(t) || z(t) ? Z : $;
	return e.test(ut(t));
}
function h(t, e) {
	var n = t.__data__;
	return st(e) ? n[typeof e == 'string' ? 'string' : 'hash'] : n.map;
}
function O(t, e) {
	var n = N(t, e);
	return it(n) ? n : void 0;
}
function st(t) {
	var e = typeof t;
	return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean'
		? t !== '__proto__'
		: t === null;
}
function ct(t) {
	return !!v && v in t;
}
function ut(t) {
	if (t != null) {
		try {
			return C.call(t);
		} catch {}
		try {
			return t + '';
		} catch {}
	}
	return '';
}
function g(t, e) {
	if (typeof t != 'function' || (e && typeof e != 'function')) throw new TypeError(E);
	var n = function () {
		var a = arguments,
			r = e ? e.apply(this, a) : a[0],
			o = n.cache;
		if (o.has(r)) return o.get(r);
		var i = t.apply(this, a);
		return (n.cache = o.set(r, i)), i;
	};
	return (n.cache = new (g.Cache || c)()), n;
}
g.Cache = c;
function lt(t, e) {
	return t === e || (t !== t && e !== e);
}
function ft(t) {
	var e = w(t) ? R.call(t) : '';
	return e == F || e == I;
}
function w(t) {
	var e = typeof t;
	return !!t && (e == 'object' || e == 'function');
}
var pt = g;
const j = x(pt);
function S(t) {
	return JSON.stringify(t);
}
function ht(t) {
	return t.filter(function (e, n) {
		return e && t.indexOf(e) === n;
	});
}
function dt(t) {
	return t.toLowerCase() === t;
}
function _t(t) {
	if (!t || t.indexOf('-') === -1 || !dt(t)) return t;
	var e = t.split('-'),
		n = e[0],
		a = n === void 0 ? '' : n,
		r = e[1],
		o = r === void 0 ? '' : r;
	return ''.concat(a, '-').concat(o.toUpperCase());
}
function gt(t) {
	var e = t === void 0 ? {} : t,
		n = e.useFallbackLocale,
		a = n === void 0 ? !0 : n,
		r = e.fallbackLocale,
		o = r === void 0 ? 'en-US' : r,
		i = [];
	return (
		typeof navigator < 'u' && (i = i.concat(navigator.languages, navigator.language)),
		a && i.push(o),
		ht(i).map(_t)
	);
}
var vt = j(gt, S);
function bt(t) {
	return vt(t)[0] || null;
}
var mt = j(bt, S);
const yt = mt,
	jt = (t, e) => {
		const n = t,
			a = new Date(n),
			r = Intl.DateTimeFormat().resolvedOptions().timeZone,
			o = yt(),
			L = { ...e, ...{ timeZone: r } };
		return a.toLocaleString(o, L);
	},
	St = () => Intl.DateTimeFormat().resolvedOptions().timeZone,
	Lt = () => {
		history.back();
	};
export { Lt as a, St as b, jt as g, wt as p };
