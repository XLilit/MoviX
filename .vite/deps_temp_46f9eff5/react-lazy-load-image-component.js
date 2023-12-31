import {
  require_react_dom
} from "./chunk-PRK46SJB.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __commonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-lazy-load-image-component/build/index.js
var require_build = __commonJS({
  "node_modules/react-lazy-load-image-component/build/index.js"(exports, module) {
    (() => {
      var e = { 296: (e2, t2, r2) => {
        var o2 = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt, u = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, l = "object" == typeof self && self && self.Object === Object && self, a = u || l || Function("return this")(), f = Object.prototype.toString, p = Math.max, y = Math.min, d = function() {
          return a.Date.now();
        };
        function b(e3) {
          var t3 = typeof e3;
          return !!e3 && ("object" == t3 || "function" == t3);
        }
        function h(e3) {
          if ("number" == typeof e3)
            return e3;
          if (function(e4) {
            return "symbol" == typeof e4 || function(e5) {
              return !!e5 && "object" == typeof e5;
            }(e4) && "[object Symbol]" == f.call(e4);
          }(e3))
            return NaN;
          if (b(e3)) {
            var t3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = b(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e3)
            return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(o2, "");
          var r3 = i.test(e3);
          return r3 || c.test(e3) ? s(e3.slice(2), r3 ? 2 : 8) : n.test(e3) ? NaN : +e3;
        }
        e2.exports = function(e3, t3, r3) {
          var o3, n2, i2, c2, s2, u2, l2 = 0, a2 = false, f2 = false, v = true;
          if ("function" != typeof e3)
            throw new TypeError("Expected a function");
          function m(t4) {
            var r4 = o3, i3 = n2;
            return o3 = n2 = void 0, l2 = t4, c2 = e3.apply(i3, r4);
          }
          function O(e4) {
            return l2 = e4, s2 = setTimeout(g, t3), a2 ? m(e4) : c2;
          }
          function w(e4) {
            var r4 = e4 - u2;
            return void 0 === u2 || r4 >= t3 || r4 < 0 || f2 && e4 - l2 >= i2;
          }
          function g() {
            var e4 = d();
            if (w(e4))
              return P(e4);
            s2 = setTimeout(g, function(e5) {
              var r4 = t3 - (e5 - u2);
              return f2 ? y(r4, i2 - (e5 - l2)) : r4;
            }(e4));
          }
          function P(e4) {
            return s2 = void 0, v && o3 ? m(e4) : (o3 = n2 = void 0, c2);
          }
          function j() {
            var e4 = d(), r4 = w(e4);
            if (o3 = arguments, n2 = this, u2 = e4, r4) {
              if (void 0 === s2)
                return O(u2);
              if (f2)
                return s2 = setTimeout(g, t3), m(u2);
            }
            return void 0 === s2 && (s2 = setTimeout(g, t3)), c2;
          }
          return t3 = h(t3) || 0, b(r3) && (a2 = !!r3.leading, i2 = (f2 = "maxWait" in r3) ? p(h(r3.maxWait) || 0, t3) : i2, v = "trailing" in r3 ? !!r3.trailing : v), j.cancel = function() {
            void 0 !== s2 && clearTimeout(s2), l2 = 0, o3 = u2 = n2 = s2 = void 0;
          }, j.flush = function() {
            return void 0 === s2 ? c2 : P(d());
          }, j;
        };
      }, 96: (e2, t2, r2) => {
        var o2 = "Expected a function", n = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, s = /^0o[0-7]+$/i, u = parseInt, l = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, a = "object" == typeof self && self && self.Object === Object && self, f = l || a || Function("return this")(), p = Object.prototype.toString, y = Math.max, d = Math.min, b = function() {
          return f.Date.now();
        };
        function h(e3) {
          var t3 = typeof e3;
          return !!e3 && ("object" == t3 || "function" == t3);
        }
        function v(e3) {
          if ("number" == typeof e3)
            return e3;
          if (function(e4) {
            return "symbol" == typeof e4 || function(e5) {
              return !!e5 && "object" == typeof e5;
            }(e4) && "[object Symbol]" == p.call(e4);
          }(e3))
            return NaN;
          if (h(e3)) {
            var t3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = h(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e3)
            return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(n, "");
          var r3 = c.test(e3);
          return r3 || s.test(e3) ? u(e3.slice(2), r3 ? 2 : 8) : i.test(e3) ? NaN : +e3;
        }
        e2.exports = function(e3, t3, r3) {
          var n2 = true, i2 = true;
          if ("function" != typeof e3)
            throw new TypeError(o2);
          return h(r3) && (n2 = "leading" in r3 ? !!r3.leading : n2, i2 = "trailing" in r3 ? !!r3.trailing : i2), function(e4, t4, r4) {
            var n3, i3, c2, s2, u2, l2, a2 = 0, f2 = false, p2 = false, m = true;
            if ("function" != typeof e4)
              throw new TypeError(o2);
            function O(t5) {
              var r5 = n3, o3 = i3;
              return n3 = i3 = void 0, a2 = t5, s2 = e4.apply(o3, r5);
            }
            function w(e5) {
              return a2 = e5, u2 = setTimeout(P, t4), f2 ? O(e5) : s2;
            }
            function g(e5) {
              var r5 = e5 - l2;
              return void 0 === l2 || r5 >= t4 || r5 < 0 || p2 && e5 - a2 >= c2;
            }
            function P() {
              var e5 = b();
              if (g(e5))
                return j(e5);
              u2 = setTimeout(P, function(e6) {
                var r5 = t4 - (e6 - l2);
                return p2 ? d(r5, c2 - (e6 - a2)) : r5;
              }(e5));
            }
            function j(e5) {
              return u2 = void 0, m && n3 ? O(e5) : (n3 = i3 = void 0, s2);
            }
            function T() {
              var e5 = b(), r5 = g(e5);
              if (n3 = arguments, i3 = this, l2 = e5, r5) {
                if (void 0 === u2)
                  return w(l2);
                if (p2)
                  return u2 = setTimeout(P, t4), O(l2);
              }
              return void 0 === u2 && (u2 = setTimeout(P, t4)), s2;
            }
            return t4 = v(t4) || 0, h(r4) && (f2 = !!r4.leading, c2 = (p2 = "maxWait" in r4) ? y(v(r4.maxWait) || 0, t4) : c2, m = "trailing" in r4 ? !!r4.trailing : m), T.cancel = function() {
              void 0 !== u2 && clearTimeout(u2), a2 = 0, n3 = l2 = i3 = u2 = void 0;
            }, T.flush = function() {
              return void 0 === u2 ? s2 : j(b());
            }, T;
          }(e3, t3, { leading: n2, maxWait: t3, trailing: i2 });
        };
      }, 703: (e2, t2, r2) => {
        "use strict";
        var o2 = r2(414);
        function n() {
        }
        function i() {
        }
        i.resetWarningCache = n, e2.exports = function() {
          function e3(e4, t4, r4, n2, i2, c) {
            if (c !== o2) {
              var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw s.name = "Invariant Violation", s;
            }
          }
          function t3() {
            return e3;
          }
          e3.isRequired = e3;
          var r3 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: i, resetWarningCache: n };
          return r3.PropTypes = r3, r3;
        };
      }, 697: (e2, t2, r2) => {
        e2.exports = r2(703)();
      }, 414: (e2) => {
        "use strict";
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      } }, t = {};
      function r(o2) {
        var n = t[o2];
        if (void 0 !== n)
          return n.exports;
        var i = t[o2] = { exports: {} };
        return e[o2](i, i.exports, r), i.exports;
      }
      r.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return r.d(t2, { a: t2 }), t2;
      }, r.d = (e2, t2) => {
        for (var o2 in t2)
          r.o(t2, o2) && !r.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
      }, r.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window)
            return window;
        }
      }(), r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var o = {};
      (() => {
        "use strict";
        r.r(o), r.d(o, { LazyLoadComponent: () => J, LazyLoadImage: () => ue, trackWindowScroll: () => C });
        const e2 = require_react();
        var t2 = r.n(e2), n = r(697);
        const i = require_react_dom();
        var c = r.n(i);
        function s() {
          return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
        }
        function u(e3) {
          return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function l(e3, t3) {
          var r2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            t3 && (o2 = o2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r2.push.apply(r2, o2);
          }
          return r2;
        }
        function a(e3, t3, r2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: r2, enumerable: true, configurable: true, writable: true }) : e3[t3] = r2, e3;
        }
        function f(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        function p(e3, t3) {
          return (p = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function y(e3, t3) {
          if (t3 && ("object" === u(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(e4) {
            if (void 0 === e4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e4;
          }(e3);
        }
        function d(e3) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        var b = function(e3) {
          e3.forEach(function(e4) {
            e4.isIntersecting && e4.target.onVisible();
          });
        }, h = {}, v = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && p(e4, t3);
          }(v2, e3);
          var r2, o2, n2, i2, u2 = (n2 = v2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = d(n2);
            if (i2) {
              var r3 = d(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return y(this, e4);
          });
          function v2(e4) {
            var t3;
            if (function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, v2), (t3 = u2.call(this, e4)).supportsObserver = !e4.scrollPosition && e4.useIntersectionObserver && s(), t3.supportsObserver) {
              var r3 = e4.threshold;
              t3.observer = function(e5) {
                return h[e5] = h[e5] || new IntersectionObserver(b, { rootMargin: e5 + "px" }), h[e5];
              }(r3);
            }
            return t3;
          }
          return r2 = v2, (o2 = [{ key: "componentDidMount", value: function() {
            this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
          } }, { key: "componentWillUnmount", value: function() {
            this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
          } }, { key: "componentDidUpdate", value: function() {
            this.supportsObserver || this.updateVisibility();
          } }, { key: "getPlaceholderBoundingBox", value: function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, t3 = this.placeholder.getBoundingClientRect(), r3 = c().findDOMNode(this.placeholder).style, o3 = { left: parseInt(r3.getPropertyValue("margin-left"), 10) || 0, top: parseInt(r3.getPropertyValue("margin-top"), 10) || 0 };
            return { bottom: e4.y + t3.bottom + o3.top, left: e4.x + t3.left + o3.left, right: e4.x + t3.right + o3.left, top: e4.y + t3.top + o3.top };
          } }, { key: "isPlaceholderInViewport", value: function() {
            if ("undefined" == typeof window || !this.placeholder)
              return false;
            var e4 = this.props, t3 = e4.scrollPosition, r3 = e4.threshold, o3 = this.getPlaceholderBoundingBox(t3), n3 = t3.y + window.innerHeight, i3 = t3.x, c2 = t3.x + window.innerWidth, s2 = t3.y;
            return Boolean(s2 - r3 <= o3.bottom && n3 + r3 >= o3.top && i3 - r3 <= o3.right && c2 + r3 >= o3.left);
          } }, { key: "updateVisibility", value: function() {
            this.isPlaceholderInViewport() && this.props.onVisible();
          } }, { key: "render", value: function() {
            var e4 = this, r3 = this.props, o3 = r3.className, n3 = r3.height, i3 = r3.placeholder, c2 = r3.style, s2 = r3.width;
            if (i3 && "function" != typeof i3.type)
              return t2().cloneElement(i3, { ref: function(t3) {
                return e4.placeholder = t3;
              } });
            var u3 = function(e5) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var r4 = null != arguments[t3] ? arguments[t3] : {};
                t3 % 2 ? l(Object(r4), true).forEach(function(t4) {
                  a(e5, t4, r4[t4]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(r4)) : l(Object(r4)).forEach(function(t4) {
                  Object.defineProperty(e5, t4, Object.getOwnPropertyDescriptor(r4, t4));
                });
              }
              return e5;
            }({ display: "inline-block" }, c2);
            return void 0 !== s2 && (u3.width = s2), void 0 !== n3 && (u3.height = n3), t2().createElement("span", { className: o3, ref: function(t3) {
              return e4.placeholder = t3;
            }, style: u3 }, i3);
          } }]) && f(r2.prototype, o2), v2;
        }(t2().Component);
        v.propTypes = { onVisible: n.PropTypes.func.isRequired, className: n.PropTypes.string, height: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]), placeholder: n.PropTypes.element, threshold: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool, scrollPosition: n.PropTypes.shape({ x: n.PropTypes.number.isRequired, y: n.PropTypes.number.isRequired }), width: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]) }, v.defaultProps = { className: "", placeholder: null, threshold: 100, useIntersectionObserver: true };
        const m = v;
        var O = r(296), w = r.n(O), g = r(96), P = r.n(g), j = function(e3) {
          var t3 = getComputedStyle(e3, null);
          return t3.getPropertyValue("overflow") + t3.getPropertyValue("overflow-y") + t3.getPropertyValue("overflow-x");
        };
        const T = function(e3) {
          if (!(e3 instanceof HTMLElement))
            return window;
          for (var t3 = e3; t3 && t3 instanceof HTMLElement; ) {
            if (/(scroll|auto)/.test(j(t3)))
              return t3;
            t3 = t3.parentNode;
          }
          return window;
        };
        function S(e3) {
          return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        var E = ["delayMethod", "delayTime"];
        function _() {
          return (_ = Object.assign || function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var r2 = arguments[t3];
              for (var o2 in r2)
                Object.prototype.hasOwnProperty.call(r2, o2) && (e3[o2] = r2[o2]);
            }
            return e3;
          }).apply(this, arguments);
        }
        function I(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        function L(e3, t3) {
          return (L = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function x(e3, t3) {
          if (t3 && ("object" === S(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return R(e3);
        }
        function R(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function k(e3) {
          return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        var D = function() {
          return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
        }, N = function() {
          return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
        };
        const C = function(e3) {
          var r2 = function(r3) {
            !function(e4, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function");
              e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && L(e4, t3);
            }(a2, r3);
            var o2, n2, i2, u2, l2 = (i2 = a2, u2 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e4) {
                return false;
              }
            }(), function() {
              var e4, t3 = k(i2);
              if (u2) {
                var r4 = k(this).constructor;
                e4 = Reflect.construct(t3, arguments, r4);
              } else
                e4 = t3.apply(this, arguments);
              return x(this, e4);
            });
            function a2(e4) {
              var r4;
              if (function(e5, t3) {
                if (!(e5 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, a2), (r4 = l2.call(this, e4)).useIntersectionObserver = e4.useIntersectionObserver && s(), r4.useIntersectionObserver)
                return x(r4);
              var o3 = r4.onChangeScroll.bind(R(r4));
              return "debounce" === e4.delayMethod ? r4.delayedScroll = w()(o3, e4.delayTime) : "throttle" === e4.delayMethod && (r4.delayedScroll = P()(o3, e4.delayTime)), r4.state = { scrollPosition: { x: D(), y: N() } }, r4.baseComponentRef = t2().createRef(), r4;
            }
            return o2 = a2, (n2 = [{ key: "componentDidMount", value: function() {
              this.addListeners();
            } }, { key: "componentWillUnmount", value: function() {
              this.removeListeners();
            } }, { key: "componentDidUpdate", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || T(c().findDOMNode(this.baseComponentRef.current)) !== this.scrollElement && (this.removeListeners(), this.addListeners());
            } }, { key: "addListeners", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = T(c().findDOMNode(this.baseComponentRef.current)), this.scrollElement.addEventListener("scroll", this.delayedScroll, { passive: true }), window.addEventListener("resize", this.delayedScroll, { passive: true }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, { passive: true }));
            } }, { key: "removeListeners", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
            } }, { key: "onChangeScroll", value: function() {
              this.useIntersectionObserver || this.setState({ scrollPosition: { x: D(), y: N() } });
            } }, { key: "render", value: function() {
              var r4 = this.props, o3 = (r4.delayMethod, r4.delayTime, function(e4, t3) {
                if (null == e4)
                  return {};
                var r5, o4, n4 = function(e5, t4) {
                  if (null == e5)
                    return {};
                  var r6, o5, n5 = {}, i4 = Object.keys(e5);
                  for (o5 = 0; o5 < i4.length; o5++)
                    r6 = i4[o5], t4.indexOf(r6) >= 0 || (n5[r6] = e5[r6]);
                  return n5;
                }(e4, t3);
                if (Object.getOwnPropertySymbols) {
                  var i3 = Object.getOwnPropertySymbols(e4);
                  for (o4 = 0; o4 < i3.length; o4++)
                    r5 = i3[o4], t3.indexOf(r5) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, r5) && (n4[r5] = e4[r5]);
                }
                return n4;
              }(r4, E)), n3 = this.useIntersectionObserver ? null : this.state.scrollPosition;
              return t2().createElement(e3, _({ forwardRef: this.baseComponentRef, scrollPosition: n3 }, o3));
            } }]) && I(o2.prototype, n2), a2;
          }(t2().Component);
          return r2.propTypes = { delayMethod: n.PropTypes.oneOf(["debounce", "throttle"]), delayTime: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool }, r2.defaultProps = { delayMethod: "throttle", delayTime: 300, useIntersectionObserver: true }, r2;
        };
        function M(e3) {
          return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function B(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        function V(e3, t3) {
          return (V = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function W(e3, t3) {
          if (t3 && ("object" === M(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(e4) {
            if (void 0 === e4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e4;
          }(e3);
        }
        function z(e3) {
          return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        var $ = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && V(e4, t3);
          }(s2, e3);
          var r2, o2, n2, i2, c2 = (n2 = s2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = z(n2);
            if (i2) {
              var r3 = z(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return W(this, e4);
          });
          function s2(e4) {
            return function(e5, t3) {
              if (!(e5 instanceof t3))
                throw new TypeError("Cannot call a class as a function");
            }(this, s2), c2.call(this, e4);
          }
          return r2 = s2, (o2 = [{ key: "render", value: function() {
            return t2().createElement(m, this.props);
          } }]) && B(r2.prototype, o2), s2;
        }(t2().Component);
        const U = C($);
        function q(e3) {
          return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function F(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        function H(e3, t3) {
          return (H = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function Y(e3, t3) {
          if (t3 && ("object" === q(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return X(e3);
        }
        function X(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function A(e3) {
          return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        var G = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && H(e4, t3);
          }(u2, e3);
          var r2, o2, n2, i2, c2 = (n2 = u2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = A(n2);
            if (i2) {
              var r3 = A(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return Y(this, e4);
          });
          function u2(e4) {
            var t3;
            !function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, u2), t3 = c2.call(this, e4);
            var r3 = e4.afterLoad, o3 = e4.beforeLoad, n3 = e4.scrollPosition, i3 = e4.visibleByDefault;
            return t3.state = { visible: i3 }, i3 && (o3(), r3()), t3.onVisible = t3.onVisible.bind(X(t3)), t3.isScrollTracked = Boolean(n3 && Number.isFinite(n3.x) && n3.x >= 0 && Number.isFinite(n3.y) && n3.y >= 0), t3;
          }
          return r2 = u2, (o2 = [{ key: "componentDidUpdate", value: function(e4, t3) {
            t3.visible !== this.state.visible && this.props.afterLoad();
          } }, { key: "onVisible", value: function() {
            this.props.beforeLoad(), this.setState({ visible: true });
          } }, { key: "render", value: function() {
            if (this.state.visible)
              return this.props.children;
            var e4 = this.props, r3 = e4.className, o3 = e4.delayMethod, n3 = e4.delayTime, i3 = e4.height, c3 = e4.placeholder, u3 = e4.scrollPosition, l2 = e4.style, a2 = e4.threshold, f2 = e4.useIntersectionObserver, p2 = e4.width;
            return this.isScrollTracked || f2 && s() ? t2().createElement(m, { className: r3, height: i3, onVisible: this.onVisible, placeholder: c3, scrollPosition: u3, style: l2, threshold: a2, useIntersectionObserver: f2, width: p2 }) : t2().createElement(U, { className: r3, delayMethod: o3, delayTime: n3, height: i3, onVisible: this.onVisible, placeholder: c3, style: l2, threshold: a2, width: p2 });
          } }]) && F(r2.prototype, o2), u2;
        }(t2().Component);
        G.propTypes = { afterLoad: n.PropTypes.func, beforeLoad: n.PropTypes.func, useIntersectionObserver: n.PropTypes.bool, visibleByDefault: n.PropTypes.bool }, G.defaultProps = { afterLoad: function() {
          return {};
        }, beforeLoad: function() {
          return {};
        }, useIntersectionObserver: true, visibleByDefault: false };
        const J = G;
        function K(e3) {
          return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        var Q = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
        function Z(e3, t3) {
          var r2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            t3 && (o2 = o2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r2.push.apply(r2, o2);
          }
          return r2;
        }
        function ee(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var r2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? Z(Object(r2), true).forEach(function(t4) {
              te(e3, t4, r2[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r2)) : Z(Object(r2)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r2, t4));
            });
          }
          return e3;
        }
        function te(e3, t3, r2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: r2, enumerable: true, configurable: true, writable: true }) : e3[t3] = r2, e3;
        }
        function re() {
          return (re = Object.assign || function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var r2 = arguments[t3];
              for (var o2 in r2)
                Object.prototype.hasOwnProperty.call(r2, o2) && (e3[o2] = r2[o2]);
            }
            return e3;
          }).apply(this, arguments);
        }
        function oe(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        function ne(e3, t3) {
          return (ne = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function ie(e3, t3) {
          if (t3 && ("object" === K(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(e4) {
            if (void 0 === e4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e4;
          }(e3);
        }
        function ce(e3) {
          return (ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        var se = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && ne(e4, t3);
          }(s2, e3);
          var r2, o2, n2, i2, c2 = (n2 = s2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = ce(n2);
            if (i2) {
              var r3 = ce(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return ie(this, e4);
          });
          function s2(e4) {
            var t3;
            return function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, s2), (t3 = c2.call(this, e4)).state = { loaded: false }, t3;
          }
          return r2 = s2, (o2 = [{ key: "onImageLoad", value: function() {
            var e4 = this;
            return this.state.loaded ? null : function() {
              e4.props.afterLoad(), e4.setState({ loaded: true });
            };
          } }, { key: "getImg", value: function() {
            var e4 = this.props, r3 = (e4.afterLoad, e4.beforeLoad, e4.delayMethod, e4.delayTime, e4.effect, e4.placeholder, e4.placeholderSrc, e4.scrollPosition, e4.threshold, e4.useIntersectionObserver, e4.visibleByDefault, e4.wrapperClassName, e4.wrapperProps, function(e5, t3) {
              if (null == e5)
                return {};
              var r4, o3, n3 = function(e6, t4) {
                if (null == e6)
                  return {};
                var r5, o4, n4 = {}, i4 = Object.keys(e6);
                for (o4 = 0; o4 < i4.length; o4++)
                  r5 = i4[o4], t4.indexOf(r5) >= 0 || (n4[r5] = e6[r5]);
                return n4;
              }(e5, t3);
              if (Object.getOwnPropertySymbols) {
                var i3 = Object.getOwnPropertySymbols(e5);
                for (o3 = 0; o3 < i3.length; o3++)
                  r4 = i3[o3], t3.indexOf(r4) >= 0 || Object.prototype.propertyIsEnumerable.call(e5, r4) && (n3[r4] = e5[r4]);
              }
              return n3;
            }(e4, Q));
            return t2().createElement("img", re({ onLoad: this.onImageLoad() }, r3));
          } }, { key: "getLazyLoadImage", value: function() {
            var e4 = this.props, r3 = e4.beforeLoad, o3 = e4.className, n3 = e4.delayMethod, i3 = e4.delayTime, c3 = e4.height, s3 = e4.placeholder, u2 = e4.scrollPosition, l2 = e4.style, a2 = e4.threshold, f2 = e4.useIntersectionObserver, p2 = e4.visibleByDefault, y2 = e4.width;
            return t2().createElement(J, { beforeLoad: r3, className: o3, delayMethod: n3, delayTime: i3, height: c3, placeholder: s3, scrollPosition: u2, style: l2, threshold: a2, useIntersectionObserver: f2, visibleByDefault: p2, width: y2 }, this.getImg());
          } }, { key: "getWrappedLazyLoadImage", value: function(e4) {
            var r3 = this.props, o3 = r3.effect, n3 = r3.height, i3 = r3.placeholderSrc, c3 = r3.width, s3 = r3.wrapperClassName, u2 = r3.wrapperProps, l2 = this.state.loaded, a2 = l2 ? " lazy-load-image-loaded" : "", f2 = l2 || !i3 ? {} : { backgroundImage: "url(".concat(i3, ")"), backgroundSize: "100% 100%" };
            return t2().createElement("span", re({ className: s3 + " lazy-load-image-background " + o3 + a2, style: ee(ee({}, f2), {}, { color: "transparent", display: "inline-block", height: n3, width: c3 }) }, u2), e4);
          } }, { key: "render", value: function() {
            var e4 = this.props, t3 = e4.effect, r3 = e4.placeholderSrc, o3 = e4.visibleByDefault, n3 = e4.wrapperClassName, i3 = e4.wrapperProps, c3 = this.getLazyLoadImage();
            return (t3 || r3) && !o3 || n3 || i3 ? this.getWrappedLazyLoadImage(c3) : c3;
          } }]) && oe(r2.prototype, o2), s2;
        }(t2().Component);
        se.propTypes = { afterLoad: n.PropTypes.func, beforeLoad: n.PropTypes.func, delayMethod: n.PropTypes.string, delayTime: n.PropTypes.number, effect: n.PropTypes.string, placeholderSrc: n.PropTypes.string, threshold: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool, visibleByDefault: n.PropTypes.bool, wrapperClassName: n.PropTypes.string, wrapperProps: n.PropTypes.object }, se.defaultProps = { afterLoad: function() {
          return {};
        }, beforeLoad: function() {
          return {};
        }, delayMethod: "throttle", delayTime: 300, effect: "", placeholderSrc: null, threshold: 100, useIntersectionObserver: true, visibleByDefault: false, wrapperClassName: "" };
        const ue = se;
      })(), module.exports = o;
    })();
  }
});
export default require_build();
//# sourceMappingURL=react-lazy-load-image-component.js.map
