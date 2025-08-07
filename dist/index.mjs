import ae from "react";
import $ from "prop-types";
function Sr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ye = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Ar() {
  if (Ge) return ne;
  Ge = 1;
  var r = ae, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(w, g, m) {
    var _, k = {}, M = null, Y = null;
    m !== void 0 && (M = "" + m), g.key !== void 0 && (M = "" + g.key), g.ref !== void 0 && (Y = g.ref);
    for (_ in g) l.call(g, _) && !i.hasOwnProperty(_) && (k[_] = g[_]);
    if (w && w.defaultProps) for (_ in g = w.defaultProps, g) k[_] === void 0 && (k[_] = g[_]);
    return { $$typeof: t, type: w, key: M, ref: Y, props: k, _owner: f.current };
  }
  return ne.Fragment = o, ne.jsx = x, ne.jsxs = x, ne;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Cr() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ae, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), w = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), G = Symbol.iterator, q = "@@iterator";
    function d(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = G && e[G] || e[q];
      return typeof n == "function" ? n : null;
    }
    var s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          a[u - 1] = arguments[u];
        y("error", e, a);
      }
    }
    function y(e, n, a) {
      {
        var u = s.ReactDebugCurrentFrame, v = u.getStackAddendum();
        v !== "" && (n += "%s", a = a.concat([v]));
        var b = a.map(function(p) {
          return String(p);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var j = !1, be = !1, ge = !1, oe = !1, V = !1, Z;
    Z = Symbol.for("react.module.reference");
    function se(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === i || V || e === f || e === m || e === _ || oe || e === Y || j || be || ge || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === k || e.$$typeof === x || e.$$typeof === w || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function le(e, n, a) {
      var u = e.displayName;
      if (u)
        return u;
      var v = n.displayName || n.name || "";
      return v !== "" ? a + "(" + v + ")" : a;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function B(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case o:
          return "Portal";
        case i:
          return "Profiler";
        case f:
          return "StrictMode";
        case m:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var n = e;
            return Q(n) + ".Consumer";
          case x:
            var a = e;
            return Q(a._context) + ".Provider";
          case g:
            return le(e, e.render, "ForwardRef");
          case k:
            var u = e.displayName || null;
            return u !== null ? u : B(e.type) || "Memo";
          case M: {
            var v = e, b = v._payload, p = v._init;
            try {
              return B(p(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, A = 0, N, ee, ue, C, I, re, z;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function me() {
      {
        if (A === 0) {
          N = console.log, ee = console.info, ue = console.warn, C = console.error, I = console.group, re = console.groupCollapsed, z = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function ir() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: N
            }),
            info: F({}, e, {
              value: ee
            }),
            warn: F({}, e, {
              value: ue
            }),
            error: F({}, e, {
              value: C
            }),
            group: F({}, e, {
              value: I
            }),
            groupCollapsed: F({}, e, {
              value: re
            }),
            groupEnd: F({}, e, {
              value: z
            })
          });
        }
        A < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = s.ReactCurrentDispatcher, we;
    function fe(e, n, a) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (v) {
            var u = v.stack.trim().match(/\n( *(at )?)/);
            we = u && u[1] || "";
          }
        return `
` + we + e;
      }
    }
    var Ee = !1, ce;
    {
      var ar = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new ar();
    }
    function De(e, n) {
      if (!e || Ee)
        return "";
      {
        var a = ce.get(e);
        if (a !== void 0)
          return a;
      }
      var u;
      Ee = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = _e.current, _e.current = null, me();
      try {
        if (n) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (L) {
              u = L;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (L) {
              u = L;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            u = L;
          }
          e();
        }
      } catch (L) {
        if (L && u && typeof L.stack == "string") {
          for (var c = L.stack.split(`
`), P = u.stack.split(`
`), E = c.length - 1, R = P.length - 1; E >= 1 && R >= 0 && c[E] !== P[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (c[E] !== P[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || c[E] !== P[R]) {
                    var D = `
` + c[E].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, D), D;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, _e.current = b, ir(), Error.prepareStackTrace = v;
      }
      var X = e ? e.displayName || e.name : "", Ye = X ? fe(X) : "";
      return typeof e == "function" && ce.set(e, Ye), Ye;
    }
    function or(e, n, a) {
      return De(e, !1);
    }
    function sr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function de(e, n, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return De(e, sr(e));
      if (typeof e == "string")
        return fe(e);
      switch (e) {
        case m:
          return fe("Suspense");
        case _:
          return fe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return or(e.render);
          case k:
            return de(e.type, n, a);
          case M: {
            var u = e, v = u._payload, b = u._init;
            try {
              return de(b(v), n, a);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, ke = {}, Be = s.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var n = e._owner, a = de(e.type, e._source, n ? n.type : null);
        Be.setExtraStackFrame(a);
      } else
        Be.setExtraStackFrame(null);
    }
    function lr(e, n, a, u, v) {
      {
        var b = Function.call.bind(he);
        for (var p in e)
          if (b(e, p)) {
            var c = void 0;
            try {
              if (typeof e[p] != "function") {
                var P = Error((u || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              c = e[p](n, p, u, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              c = E;
            }
            c && !(c instanceof Error) && (pe(v), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", a, p, typeof c), pe(null)), c instanceof Error && !(c.message in ke) && (ke[c.message] = !0, pe(v), h("Failed %s type: %s", a, c.message), pe(null));
          }
      }
    }
    var ur = Array.isArray;
    function Re(e) {
      return ur(e);
    }
    function fr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, a = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function cr(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Ie(e) {
      if (cr(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fr(e)), Fe(e);
    }
    var Ue = s.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, Le;
    function hr(e) {
      if (he.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function pr(e) {
      if (he.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yr(e, n) {
      typeof e.ref == "string" && Ue.current;
    }
    function vr(e, n) {
      {
        var a = function() {
          Me || (Me = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function br(e, n) {
      {
        var a = function() {
          Le || (Le = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var gr = function(e, n, a, u, v, b, p) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: a,
        props: p,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function mr(e, n, a, u, v) {
      {
        var b, p = {}, c = null, P = null;
        a !== void 0 && (Ie(a), c = "" + a), pr(n) && (Ie(n.key), c = "" + n.key), hr(n) && (P = n.ref, yr(n, v));
        for (b in n)
          he.call(n, b) && !dr.hasOwnProperty(b) && (p[b] = n[b]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (b in E)
            p[b] === void 0 && (p[b] = E[b]);
        }
        if (c || P) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && vr(p, R), P && br(p, R);
        }
        return gr(e, c, P, v, u, Ue.current, p);
      }
    }
    var Te = s.ReactCurrentOwner, $e = s.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var n = e._owner, a = de(e.type, e._source, n ? n.type : null);
        $e.setExtraStackFrame(a);
      } else
        $e.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ne() {
      {
        if (Te.current) {
          var e = B(Te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _r(e) {
      return "";
    }
    var qe = {};
    function wr(e) {
      {
        var n = Ne();
        if (!n) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (n = `

Check the top-level render call using <` + a + ">.");
        }
        return n;
      }
    }
    function Ve(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = wr(n);
        if (qe[a])
          return;
        qe[a] = !0;
        var u = "";
        e && e._owner && e._owner !== Te.current && (u = " It was passed a child from " + B(e._owner.type) + "."), J(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, u), J(null);
      }
    }
    function We(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var a = 0; a < e.length; a++) {
            var u = e[a];
            Oe(u) && Ve(u, n);
          }
        else if (Oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = d(e);
          if (typeof v == "function" && v !== e.entries)
            for (var b = v.call(e), p; !(p = b.next()).done; )
              Oe(p.value) && Ve(p.value, n);
        }
      }
    }
    function Er(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var a;
        if (typeof n == "function")
          a = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === k))
          a = n.propTypes;
        else
          return;
        if (a) {
          var u = B(n);
          lr(a, e.props, "prop", u, e);
        } else if (n.PropTypes !== void 0 && !xe) {
          xe = !0;
          var v = B(n);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(e) {
      {
        for (var n = Object.keys(e.props), a = 0; a < n.length; a++) {
          var u = n[a];
          if (u !== "children" && u !== "key") {
            J(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function He(e, n, a, u, v, b) {
      {
        var p = se(e);
        if (!p) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = _r();
          P ? c += P : c += Ne();
          var E;
          e === null ? E = "null" : Re(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (B(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, c);
        }
        var R = mr(e, n, a, v, b);
        if (R == null)
          return R;
        if (p) {
          var D = n.children;
          if (D !== void 0)
            if (u)
              if (Re(D)) {
                for (var X = 0; X < D.length; X++)
                  We(D[X], e);
                Object.freeze && Object.freeze(D);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(D, e);
        }
        return e === l ? Rr(R) : Er(R), R;
      }
    }
    function Tr(e, n, a) {
      return He(e, n, a, !0);
    }
    function xr(e, n, a) {
      return He(e, n, a, !1);
    }
    var Or = xr, Pr = Tr;
    ie.Fragment = l, ie.jsx = Or, ie.jsxs = Pr;
  }()), ie;
}
var Je;
function jr() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? ye.exports = Ar() : ye.exports = Cr()), ye.exports;
}
var Ae = jr(), ve = {}, Pe = { exports: {} };
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
var Xe;
function Dr() {
  return Xe || (Xe = 1, function(r) {
    (function() {
      var t = {}.hasOwnProperty;
      function o() {
        for (var l = [], f = 0; f < arguments.length; f++) {
          var i = arguments[f];
          if (i) {
            var x = typeof i;
            if (x === "string" || x === "number")
              l.push(i);
            else if (Array.isArray(i) && i.length) {
              var w = o.apply(null, i);
              w && l.push(w);
            } else if (x === "object")
              for (var g in i)
                t.call(i, g) && i[g] && l.push(g);
          }
        }
        return l.join(" ");
      }
      r.exports ? (o.default = o, r.exports = o) : window.classNames = o;
    })();
  }(Pe)), Pe.exports;
}
var Ke;
function kr() {
  if (Ke) return ve;
  Ke = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(d) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var y in h)
        Object.prototype.hasOwnProperty.call(h, y) && (d[y] = h[y]);
    }
    return d;
  }, t = /* @__PURE__ */ function() {
    function d(s, h) {
      for (var y = 0; y < h.length; y++) {
        var j = h[y];
        j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(s, j.key, j);
      }
    }
    return function(s, h, y) {
      return h && d(s.prototype, h), y && d(s, y), s;
    };
  }(), o = ae, l = g(o), f = $, i = g(f), x = Dr(), w = g(x);
  function g(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function m(d, s, h) {
    return s in d ? Object.defineProperty(d, s, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : d[s] = h, d;
  }
  function _(d, s) {
    var h = {};
    for (var y in d)
      s.indexOf(y) >= 0 || Object.prototype.hasOwnProperty.call(d, y) && (h[y] = d[y]);
    return h;
  }
  function k(d, s) {
    if (!(d instanceof s))
      throw new TypeError("Cannot call a class as a function");
  }
  function M(d, s) {
    if (!d)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s && (typeof s == "object" || typeof s == "function") ? s : d;
  }
  function Y(d, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof s);
    d.prototype = Object.create(s && s.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(d, s) : d.__proto__ = s);
  }
  var G = {
    // some useless stuff for us
    // that svgo doesn't remove
    title: /<title>.*<\/title>/gi,
    desc: /<desc>.*<\/desc>/gi,
    comment: /<!--.*-->/gi,
    defs: /<defs>.*<\/defs>/gi,
    // remove hardcoded dimensions
    width: / +width="\d+(\.\d+)?(px)?"/gi,
    height: / +height="\d+(\.\d+)?(px)?"/gi,
    // remove fill
    fill: / +fill="(none|#[0-9a-f]+)"/gi,
    // Sketch.app shit
    sketchMSShapeGroup: / +sketch:type="MSShapeGroup"/gi,
    sketchMSPage: / +sketch:type="MSPage"/gi,
    sketchMSLayerGroup: / +sketch:type="MSLayerGroup"/gi
  }, q = function(d) {
    Y(s, d);
    function s() {
      return k(this, s), M(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }
    return t(s, [{
      key: "render",
      value: function() {
        var y = this.props, j = y.className, be = y.component, ge = y.svg, oe = y.fill, V = y.width, Z = y.accessibilityLabel, se = y.accessibilityDesc, le = y.classSuffix, Q = y.cleanupExceptions, B = _(y, ["className", "component", "svg", "fill", "width", "accessibilityLabel", "accessibilityDesc", "classSuffix", "cleanupExceptions"]), F = this.props, A = F.cleanup, N = F.height;
        // simple way to enable entire cleanup
        (A === !0 || // passing cleanupExceptions enable cleanup as well
        A.length === 0 && Q.length > 0) && (A = Object.keys(G)), A = A.filter(function(me) {
          return !(Q.indexOf(me) > -1);
        }), V && N === void 0 && (N = V), delete B.cleanup, delete B.height;
        var ee = (0, w.default)(m({
          SVGInline: !0,
          "SVGInline--cleaned": A.length
        }, j, j)), ue = ee.split(" ").join(le + " ") + le, C = s.cleanupSvg(ge, A).replace(/<svg/, '<svg class="' + ue + '"' + (oe ? ' fill="' + oe + '"' : "") + (V || N ? ' style="' + (V ? "width: " + V + ";" : "") + (N ? "height: " + N + ";" : "") + '"' : "")), I = void 0;
        if (se) {
          I = /<svg(.|\n|\r\n)*?>/.exec(C);
          var re = I.index + I[0].length;
          C = C.substr(0, re) + ("<desc>" + se + "</desc>") + C.substr(re);
        }
        if (Z) {
          I = I || /<svg(.|\n|\r\n)*?>/.exec(C);
          var z = I.index + I[0].length - 1, te = "SVGInline-" + s.idCount++ + "-title";
          C = C.substr(0, z) + (' role="img" aria-labelledby="' + te + '"') + C.substr(z, 1) + ('<title id="' + te + '">' + Z + "</title>") + C.substr(z + 1);
        }
        return l.default.createElement(be, r({}, B, {
          // take most props
          className: ee,
          dangerouslySetInnerHTML: {
            __html: C
          }
        }));
      }
    }]), s;
  }(o.Component);
  return q.propTypes = {
    className: i.default.string,
    classSuffix: i.default.string,
    component: i.default.oneOfType([i.default.string, i.default.func]),
    svg: i.default.string.isRequired,
    fill: i.default.string,
    cleanup: i.default.oneOfType([i.default.bool, i.default.array]),
    cleanupExceptions: i.default.array,
    width: i.default.string,
    height: i.default.string,
    accessibilityLabel: i.default.string,
    accessibilityDesc: i.default.string
  }, q.defaultProps = {
    component: "span",
    classSuffix: "-svg",
    cleanup: [],
    cleanupExceptions: []
  }, q.idCount = 0, q.cleanupSvg = function(d) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return Object.keys(G).filter(function(h) {
      return s.indexOf(h) > -1;
    }).reduce(function(h, y) {
      return h.replace(G[y], "");
    }, d).trim();
  }, ve.default = q, ve;
}
var Br = kr();
const Fr = /* @__PURE__ */ Sr(Br);
var O = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, S = {
  searchParams: "URLSearchParams" in O,
  iterable: "Symbol" in O && "iterator" in Symbol,
  blob: "FileReader" in O && "Blob" in O && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in O,
  arrayBuffer: "ArrayBuffer" in O
};
function Ir(r) {
  return r && DataView.prototype.isPrototypeOf(r);
}
if (S.arrayBuffer)
  var Ur = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Mr = ArrayBuffer.isView || function(r) {
    return r && Ur.indexOf(Object.prototype.toString.call(r)) > -1;
  };
function K(r) {
  if (typeof r != "string" && (r = String(r)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(r) || r === "")
    throw new TypeError('Invalid character in header field name: "' + r + '"');
  return r.toLowerCase();
}
function Ce(r) {
  return typeof r != "string" && (r = String(r)), r;
}
function je(r) {
  var t = {
    next: function() {
      var o = r.shift();
      return { done: o === void 0, value: o };
    }
  };
  return S.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function T(r) {
  this.map = {}, r instanceof T ? r.forEach(function(t, o) {
    this.append(o, t);
  }, this) : Array.isArray(r) ? r.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : r && Object.getOwnPropertyNames(r).forEach(function(t) {
    this.append(t, r[t]);
  }, this);
}
T.prototype.append = function(r, t) {
  r = K(r), t = Ce(t);
  var o = this.map[r];
  this.map[r] = o ? o + ", " + t : t;
};
T.prototype.delete = function(r) {
  delete this.map[K(r)];
};
T.prototype.get = function(r) {
  return r = K(r), this.has(r) ? this.map[r] : null;
};
T.prototype.has = function(r) {
  return this.map.hasOwnProperty(K(r));
};
T.prototype.set = function(r, t) {
  this.map[K(r)] = Ce(t);
};
T.prototype.forEach = function(r, t) {
  for (var o in this.map)
    this.map.hasOwnProperty(o) && r.call(t, this.map[o], o, this);
};
T.prototype.keys = function() {
  var r = [];
  return this.forEach(function(t, o) {
    r.push(o);
  }), je(r);
};
T.prototype.values = function() {
  var r = [];
  return this.forEach(function(t) {
    r.push(t);
  }), je(r);
};
T.prototype.entries = function() {
  var r = [];
  return this.forEach(function(t, o) {
    r.push([o, t]);
  }), je(r);
};
S.iterable && (T.prototype[Symbol.iterator] = T.prototype.entries);
function Se(r) {
  if (!r._noBody) {
    if (r.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    r.bodyUsed = !0;
  }
}
function rr(r) {
  return new Promise(function(t, o) {
    r.onload = function() {
      t(r.result);
    }, r.onerror = function() {
      o(r.error);
    };
  });
}
function Lr(r) {
  var t = new FileReader(), o = rr(t);
  return t.readAsArrayBuffer(r), o;
}
function $r(r) {
  var t = new FileReader(), o = rr(t), l = /charset=([A-Za-z0-9_-]+)/.exec(r.type), f = l ? l[1] : "utf-8";
  return t.readAsText(r, f), o;
}
function Nr(r) {
  for (var t = new Uint8Array(r), o = new Array(t.length), l = 0; l < t.length; l++)
    o[l] = String.fromCharCode(t[l]);
  return o.join("");
}
function Ze(r) {
  if (r.slice)
    return r.slice(0);
  var t = new Uint8Array(r.byteLength);
  return t.set(new Uint8Array(r)), t.buffer;
}
function tr() {
  return this.bodyUsed = !1, this._initBody = function(r) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = r, r ? typeof r == "string" ? this._bodyText = r : S.blob && Blob.prototype.isPrototypeOf(r) ? this._bodyBlob = r : S.formData && FormData.prototype.isPrototypeOf(r) ? this._bodyFormData = r : S.searchParams && URLSearchParams.prototype.isPrototypeOf(r) ? this._bodyText = r.toString() : S.arrayBuffer && S.blob && Ir(r) ? (this._bodyArrayBuffer = Ze(r.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : S.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(r) || Mr(r)) ? this._bodyArrayBuffer = Ze(r) : this._bodyText = r = Object.prototype.toString.call(r) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof r == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : S.searchParams && URLSearchParams.prototype.isPrototypeOf(r) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, S.blob && (this.blob = function() {
    var r = Se(this);
    if (r)
      return r;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var r = Se(this);
      return r || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (S.blob)
        return this.blob().then(Lr);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var r = Se(this);
    if (r)
      return r;
    if (this._bodyBlob)
      return $r(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Nr(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, S.formData && (this.formData = function() {
    return this.text().then(Wr);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var qr = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Vr(r) {
  var t = r.toUpperCase();
  return qr.indexOf(t) > -1 ? t : r;
}
function H(r, t) {
  if (!(this instanceof H))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var o = t.body;
  if (r instanceof H) {
    if (r.bodyUsed)
      throw new TypeError("Already read");
    this.url = r.url, this.credentials = r.credentials, t.headers || (this.headers = new T(r.headers)), this.method = r.method, this.mode = r.mode, this.signal = r.signal, !o && r._bodyInit != null && (o = r._bodyInit, r.bodyUsed = !0);
  } else
    this.url = String(r);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new T(t.headers)), this.method = Vr(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in O) {
      var i = new AbortController();
      return i.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && o)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(o), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var l = /([?&])_=[^&]*/;
    if (l.test(this.url))
      this.url = this.url.replace(l, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var f = /\?/;
      this.url += (f.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
H.prototype.clone = function() {
  return new H(this, { body: this._bodyInit });
};
function Wr(r) {
  var t = new FormData();
  return r.trim().split("&").forEach(function(o) {
    if (o) {
      var l = o.split("="), f = l.shift().replace(/\+/g, " "), i = l.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(f), decodeURIComponent(i));
    }
  }), t;
}
function Hr(r) {
  var t = new T(), o = r.replace(/\r?\n[\t ]+/g, " ");
  return o.split("\r").map(function(l) {
    return l.indexOf(`
`) === 0 ? l.substr(1, l.length) : l;
  }).forEach(function(l) {
    var f = l.split(":"), i = f.shift().trim();
    if (i) {
      var x = f.join(":").trim();
      try {
        t.append(i, x);
      } catch (w) {
        console.warn("Response " + w.message);
      }
    }
  }), t;
}
tr.call(H.prototype);
function U(r, t) {
  if (!(this instanceof U))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new T(t.headers), this.url = t.url || "", this._initBody(r);
}
tr.call(U.prototype);
U.prototype.clone = function() {
  return new U(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new T(this.headers),
    url: this.url
  });
};
U.error = function() {
  var r = new U(null, { status: 200, statusText: "" });
  return r.ok = !1, r.status = 0, r.type = "error", r;
};
var Yr = [301, 302, 303, 307, 308];
U.redirect = function(r, t) {
  if (Yr.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new U(null, { status: t, headers: { location: r } });
};
var W = O.DOMException;
try {
  new W();
} catch {
  W = function(t, o) {
    this.message = t, this.name = o;
    var l = Error(t);
    this.stack = l.stack;
  }, W.prototype = Object.create(Error.prototype), W.prototype.constructor = W;
}
function nr(r, t) {
  return new Promise(function(o, l) {
    var f = new H(r, t);
    if (f.signal && f.signal.aborted)
      return l(new W("Aborted", "AbortError"));
    var i = new XMLHttpRequest();
    function x() {
      i.abort();
    }
    i.onload = function() {
      var m = {
        statusText: i.statusText,
        headers: Hr(i.getAllResponseHeaders() || "")
      };
      f.url.indexOf("file://") === 0 && (i.status < 200 || i.status > 599) ? m.status = 200 : m.status = i.status, m.url = "responseURL" in i ? i.responseURL : m.headers.get("X-Request-URL");
      var _ = "response" in i ? i.response : i.responseText;
      setTimeout(function() {
        o(new U(_, m));
      }, 0);
    }, i.onerror = function() {
      setTimeout(function() {
        l(new TypeError("Network request failed"));
      }, 0);
    }, i.ontimeout = function() {
      setTimeout(function() {
        l(new TypeError("Network request timed out"));
      }, 0);
    }, i.onabort = function() {
      setTimeout(function() {
        l(new W("Aborted", "AbortError"));
      }, 0);
    };
    function w(m) {
      try {
        return m === "" && O.location.href ? O.location.href : m;
      } catch {
        return m;
      }
    }
    if (i.open(f.method, w(f.url), !0), f.credentials === "include" ? i.withCredentials = !0 : f.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (S.blob ? i.responseType = "blob" : S.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof T || O.Headers && t.headers instanceof O.Headers)) {
      var g = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(m) {
        g.push(K(m)), i.setRequestHeader(m, Ce(t.headers[m]));
      }), f.headers.forEach(function(m, _) {
        g.indexOf(_) === -1 && i.setRequestHeader(_, m);
      });
    } else
      f.headers.forEach(function(m, _) {
        i.setRequestHeader(_, m);
      });
    f.signal && (f.signal.addEventListener("abort", x), i.onreadystatechange = function() {
      i.readyState === 4 && f.signal.removeEventListener("abort", x);
    }), i.send(typeof f._bodyInit > "u" ? null : f._bodyInit);
  });
}
nr.polyfill = !0;
O.fetch || (O.fetch = nr, O.Headers = T, O.Request = H, O.Response = U);
const Gr = [
  "marketing"
];
class Xr extends ae.Component {
  static displayName = "MalibuSprites";
  static propTypes = {
    handleUpdate: $.func,
    version: $.string.isRequired,
    set: $.oneOf(Gr)
  };
  static defaultProps = {
    handleUpdate: () => {
    },
    version: "latest"
  };
  _isMounted = !1;
  fetchTries = 0;
  state = {
    sprites: ""
  };
  componentDidMount() {
    this._isMounted = !0, this.fetchSprites();
  }
  componentWillUnmount() {
    this._isMounted = !1;
  }
  componentDidUpdate() {
    this.props.handleUpdate();
  }
  fetchSprites = () => {
    const { version: t, set: o } = this.props, l = o ? `${o}/sprite.svg` : "sprite.svg";
    fetch(`https://www.herokucdn.com/malibu/${t}/${l}`).then((f) => f.text()).then((f) => {
      this._isMounted && (this.fetchTries = 0, this.setState({
        sprites: f
      }));
    }).catch((f) => {
      if (!this._isMounted) return;
      if (this.fetchTries >= 5) {
        console.warn("Malibu sprites could not be fetched within 5 tries", f);
        return;
      }
      this.fetchTries += 1;
      const i = 2 ** this.fetchTries;
      console.warn(`Error when fetching Malibu sprites, retrying in ${i}s`, f), setTimeout(this.fetchSprites, i * 1e3);
    });
  };
  render() {
    const { sprites: t } = this.state;
    return /* @__PURE__ */ Ae.jsx(Fr, { svg: t });
  }
}
const Qe = [
  "fill-black",
  "fill-near-black",
  "fill-dark-gray",
  "fill-mid-gray",
  "fill-gray",
  "fill-silver ",
  "fill-light-silver",
  "fill-lightest-silver",
  "fill-moon-gray",
  "fill-light-gray",
  "fill-near-white",
  "fill-white",
  "fill-transparent",
  "fill-dark-red",
  "fill-red",
  "fill-light-red",
  "fill-orange",
  "fill-gold",
  "fill-yellow",
  "fill-light-yellow",
  "fill-purple",
  "fill-light-purple",
  "fill-dark-pink",
  "fill-hot-pink",
  "fill-pink",
  "fill-light-pink",
  "fill-dark-green",
  "fill-green",
  "fill-light-green",
  "fill-navy",
  "fill-dark-blue",
  "fill-blue",
  "fill-light-blue",
  "fill-lightest-blue",
  "fill-washed-blue",
  "fill-washed-green",
  "fill-washed-yellow",
  "fill-washed-red"
], er = [
  "purple",
  "dark-gray",
  "red",
  "orange",
  "green",
  "blue"
];
class Kr extends ae.Component {
  static displayName = "MalibuIcon";
  static propTypes = {
    extraClasses: $.string,
    fillClass: $.oneOf(er.concat(Qe)),
    name: $.string.isRequired,
    size: $.number,
    style: $.object
  };
  static defaultProps = {
    fillClass: "purple",
    style: {}
  };
  render() {
    const { extraClasses: t, fillClass: o, name: l, size: f, style: i } = this.props, x = f ? { width: `${f}px`, height: `${f}px` } : {};
    let w;
    return er.includes(o) && (w = `malibu-fill-gradient-${o}`), Qe.includes(o) && (w = o), t && (w += ` ${t}`), /* @__PURE__ */ Ae.jsx(
      "svg",
      {
        style: { ...x, ...i },
        className: w,
        children: /* @__PURE__ */ Ae.jsx("use", { xlinkHref: `#${l}`, "data-testid": `test-xlinkHref-name-${l}` })
      }
    );
  }
}
export {
  Kr as MalibuIcon,
  Xr as MalibuSprites
};
