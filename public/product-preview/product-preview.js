var Wm = { exports: {} }, Jp = {}, Gm = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qR;
function ek() {
  if (qR) return Et;
  qR = 1;
  var B = Symbol.for("react.element"), I = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), $e = Symbol.for("react.provider"), S = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), Y = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), J = Symbol.iterator;
  function ye(_) {
    return _ === null || typeof _ != "object" ? null : (_ = J && _[J] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Fe = Object.assign, ht = {};
  function yt(_, P, Pe) {
    this.props = _, this.context = P, this.refs = ht, this.updater = Pe || oe;
  }
  yt.prototype.isReactComponent = {}, yt.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, yt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = yt.prototype;
  function mt(_, P, Pe) {
    this.props = _, this.context = P, this.refs = ht, this.updater = Pe || oe;
  }
  var Ke = mt.prototype = new fn();
  Ke.constructor = mt, Fe(Ke, yt.prototype), Ke.isPureReactComponent = !0;
  var gt = Array.isArray, _e = Object.prototype.hasOwnProperty, dt = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(_, P, Pe) {
    var Ae, ut = {}, rt = null, tt = null;
    if (P != null) for (Ae in P.ref !== void 0 && (tt = P.ref), P.key !== void 0 && (rt = "" + P.key), P) _e.call(P, Ae) && !He.hasOwnProperty(Ae) && (ut[Ae] = P[Ae]);
    var at = arguments.length - 2;
    if (at === 1) ut.children = Pe;
    else if (1 < at) {
      for (var ot = Array(at), Bt = 0; Bt < at; Bt++) ot[Bt] = arguments[Bt + 2];
      ut.children = ot;
    }
    if (_ && _.defaultProps) for (Ae in at = _.defaultProps, at) ut[Ae] === void 0 && (ut[Ae] = at[Ae]);
    return { $$typeof: B, type: _, key: rt, ref: tt, props: ut, _owner: dt.current };
  }
  function Ht(_, P) {
    return { $$typeof: B, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Jt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === B;
  }
  function ln(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Pe) {
      return P[Pe];
    });
  }
  var _t = /\/+/g;
  function Oe(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? ln("" + _.key) : P.toString(36);
  }
  function jt(_, P, Pe, Ae, ut) {
    var rt = typeof _;
    (rt === "undefined" || rt === "boolean") && (_ = null);
    var tt = !1;
    if (_ === null) tt = !0;
    else switch (rt) {
      case "string":
      case "number":
        tt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case B:
          case I:
            tt = !0;
        }
    }
    if (tt) return tt = _, ut = ut(tt), _ = Ae === "" ? "." + Oe(tt, 0) : Ae, gt(ut) ? (Pe = "", _ != null && (Pe = _.replace(_t, "$&/") + "/"), jt(ut, P, Pe, "", function(Bt) {
      return Bt;
    })) : ut != null && (Jt(ut) && (ut = Ht(ut, Pe + (!ut.key || tt && tt.key === ut.key ? "" : ("" + ut.key).replace(_t, "$&/") + "/") + _)), P.push(ut)), 1;
    if (tt = 0, Ae = Ae === "" ? "." : Ae + ":", gt(_)) for (var at = 0; at < _.length; at++) {
      rt = _[at];
      var ot = Ae + Oe(rt, at);
      tt += jt(rt, P, Pe, ot, ut);
    }
    else if (ot = ye(_), typeof ot == "function") for (_ = ot.call(_), at = 0; !(rt = _.next()).done; ) rt = rt.value, ot = Ae + Oe(rt, at++), tt += jt(rt, P, Pe, ot, ut);
    else if (rt === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return tt;
  }
  function kt(_, P, Pe) {
    if (_ == null) return _;
    var Ae = [], ut = 0;
    return jt(_, Ae, "", "", function(rt) {
      return P.call(Pe, rt, ut++);
    }), Ae;
  }
  function Ot(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(Pe) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Pe);
      }, function(Pe) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Pe);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Re = { current: null }, ee = { transition: null }, Te = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: ee, ReactCurrentOwner: dt };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: kt, forEach: function(_, P, Pe) {
    kt(_, function() {
      P.apply(this, arguments);
    }, Pe);
  }, count: function(_) {
    var P = 0;
    return kt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return kt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Jt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Et.Component = yt, Et.Fragment = D, Et.Profiler = We, Et.PureComponent = mt, Et.StrictMode = Ye, Et.Suspense = ae, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, Et.act = ie, Et.cloneElement = function(_, P, Pe) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ae = Fe({}, _.props), ut = _.key, rt = _.ref, tt = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (rt = P.ref, tt = dt.current), P.key !== void 0 && (ut = "" + P.key), _.type && _.type.defaultProps) var at = _.type.defaultProps;
      for (ot in P) _e.call(P, ot) && !He.hasOwnProperty(ot) && (Ae[ot] = P[ot] === void 0 && at !== void 0 ? at[ot] : P[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1) Ae.children = Pe;
    else if (1 < ot) {
      at = Array(ot);
      for (var Bt = 0; Bt < ot; Bt++) at[Bt] = arguments[Bt + 2];
      Ae.children = at;
    }
    return { $$typeof: B, type: _.type, key: ut, ref: rt, props: Ae, _owner: tt };
  }, Et.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: $e, _context: _ }, _.Consumer = _;
  }, Et.createElement = an, Et.createFactory = function(_) {
    var P = an.bind(null, _);
    return P.type = _, P;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: ft, render: _ };
  }, Et.isValidElement = Jt, Et.lazy = function(_) {
    return { $$typeof: Be, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, Et.memo = function(_, P) {
    return { $$typeof: Y, type: _, compare: P === void 0 ? null : P };
  }, Et.startTransition = function(_) {
    var P = ee.transition;
    ee.transition = {};
    try {
      _();
    } finally {
      ee.transition = P;
    }
  }, Et.unstable_act = ie, Et.useCallback = function(_, P) {
    return Re.current.useCallback(_, P);
  }, Et.useContext = function(_) {
    return Re.current.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_) {
    return Re.current.useDeferredValue(_);
  }, Et.useEffect = function(_, P) {
    return Re.current.useEffect(_, P);
  }, Et.useId = function() {
    return Re.current.useId();
  }, Et.useImperativeHandle = function(_, P, Pe) {
    return Re.current.useImperativeHandle(_, P, Pe);
  }, Et.useInsertionEffect = function(_, P) {
    return Re.current.useInsertionEffect(_, P);
  }, Et.useLayoutEffect = function(_, P) {
    return Re.current.useLayoutEffect(_, P);
  }, Et.useMemo = function(_, P) {
    return Re.current.useMemo(_, P);
  }, Et.useReducer = function(_, P, Pe) {
    return Re.current.useReducer(_, P, Pe);
  }, Et.useRef = function(_) {
    return Re.current.useRef(_);
  }, Et.useState = function(_) {
    return Re.current.useState(_);
  }, Et.useSyncExternalStore = function(_, P, Pe) {
    return Re.current.useSyncExternalStore(_, P, Pe);
  }, Et.useTransition = function() {
    return Re.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var ev = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ev.exports;
var KR;
function tk() {
  return KR || (KR = 1, (function(B, I) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var D = "18.3.1", Ye = Symbol.for("react.element"), We = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ft = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), Y = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), ht = Symbol.for("react.offscreen"), yt = Symbol.iterator, fn = "@@iterator";
      function mt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = yt && h[yt] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var Ke = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, gt = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, dt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, an = null;
      function Ht(h) {
        an = h;
      }
      He.setExtraStackFrame = function(h) {
        an = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Jt = !1, ln = !1, _t = !1, Oe = !1, jt = !1, kt = {
        ReactCurrentDispatcher: Ke,
        ReactCurrentBatchConfig: gt,
        ReactCurrentOwner: dt
      };
      kt.ReactDebugCurrentFrame = He, kt.ReactCurrentActQueue = _e;
      function Ot(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          ee("warn", h, z);
        }
      }
      function Re(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          ee("error", h, z);
        }
      }
      function ee(h, C, z) {
        {
          var j = kt.ReactDebugCurrentFrame, Z = j.getStackAddendum();
          Z !== "" && (C += "%s", z = z.concat([Z]));
          var Le = z.map(function(le) {
            return String(le);
          });
          Le.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Le);
        }
      }
      var Te = {};
      function ie(h, C) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", Z = j + "." + C;
          if (Te[Z])
            return;
          Re("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Te[Z] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          ie(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, j) {
          ie(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, j) {
          ie(h, "setState");
        }
      }, P = Object.assign, Pe = {};
      Object.freeze(Pe);
      function Ae(h, C, z) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = z || _;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ae.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, rt = function(h, C) {
          Object.defineProperty(Ae.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var tt in ut)
          ut.hasOwnProperty(tt) && rt(tt, ut[tt]);
      }
      function at() {
      }
      at.prototype = Ae.prototype;
      function ot(h, C, z) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = z || _;
      }
      var Bt = ot.prototype = new at();
      Bt.constructor = ot, P(Bt, Ae.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var wr = Array.isArray;
      function Cn(h) {
        return wr(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Vn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Vn(h))
          return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function ci(h, C, z) {
        var j = h.displayName;
        if (j)
          return j;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? z + "(" + Z + ")" : z;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case $e:
            return "Fragment";
          case We:
            return "Portal";
          case ft:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case ye:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Y:
              var C = h;
              return oa(C) + ".Consumer";
            case ae:
              var z = h;
              return oa(z._context) + ".Provider";
            case Be:
              return ci(h, h.render, "ForwardRef");
            case oe:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case Fe: {
              var Z = h, Le = Z._payload, le = Z._init;
              try {
                return qn(le(Le));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ya, Ln;
      Ln = {};
      function Sr(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function $a(h, C) {
        var z = function() {
          gr || (gr = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, C) {
        var z = function() {
          Ya || (Ya = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function te(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var C = qn(dt.current.type);
          Ln[C] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var xe = function(h, C, z, j, Z, Le, le) {
        var ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ye,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: le,
          // Record the component responsible for creating this element.
          _owner: Le
        };
        return ze._store = {}, Object.defineProperty(ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
      };
      function it(h, C, z) {
        var j, Z = {}, Le = null, le = null, ze = null, vt = null;
        if (C != null) {
          Sr(C) && (le = C.ref, te(C)), sa(C) && (Yr(C.key), Le = "" + C.key), ze = C.__self === void 0 ? null : C.__self, vt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !In.hasOwnProperty(j) && (Z[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          Z.children = z;
        else if (bt > 1) {
          for (var nn = Array(bt), Qt = 0; Qt < bt; Qt++)
            nn[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(nn), Z.children = nn;
        }
        if (h && h.defaultProps) {
          var lt = h.defaultProps;
          for (j in lt)
            Z[j] === void 0 && (Z[j] = lt[j]);
        }
        if (Le || le) {
          var Wt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Le && $a(Z, Wt), le && fi(Z, Wt);
        }
        return xe(h, Le, le, ze, vt, dt.current, Z);
      }
      function Ft(h, C) {
        var z = xe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function Zt(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, Z = P({}, h.props), Le = h.key, le = h.ref, ze = h._self, vt = h._source, bt = h._owner;
        if (C != null) {
          Sr(C) && (le = C.ref, bt = dt.current), sa(C) && (Yr(C.key), Le = "" + C.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !In.hasOwnProperty(j) && (C[j] === void 0 && nn !== void 0 ? Z[j] = nn[j] : Z[j] = C[j]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          Z.children = z;
        else if (Qt > 1) {
          for (var lt = Array(Qt), Wt = 0; Wt < Qt; Wt++)
            lt[Wt] = arguments[Wt + 2];
          Z.children = lt;
        }
        return xe(h.type, Le, le, ze, vt, bt, Z);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ye;
      }
      var un = ".", Kn = ":";
      function en(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(Z) {
          return z[Z];
        });
        return "$" + j;
      }
      var It = !1, Yt = /\/+/g;
      function ca(h) {
        return h.replace(Yt, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), en("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, z, j, Z) {
        var Le = typeof h;
        (Le === "undefined" || Le === "boolean") && (h = null);
        var le = !1;
        if (h === null)
          le = !0;
        else
          switch (Le) {
            case "string":
            case "number":
              le = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ye:
                case We:
                  le = !0;
              }
          }
        if (le) {
          var ze = h, vt = Z(ze), bt = j === "" ? un + Er(ze, 0) : j;
          if (Cn(vt)) {
            var nn = "";
            bt != null && (nn = ca(bt) + "/"), Ta(vt, C, nn, "", function(Kf) {
              return Kf;
            });
          } else vt != null && (vn(vt) && (vt.key && (!ze || ze.key !== vt.key) && Yr(vt.key), vt = Ft(
            vt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (vt.key && (!ze || ze.key !== vt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + vt.key) + "/"
            ) : "") + bt
          )), C.push(vt));
          return 1;
        }
        var Qt, lt, Wt = 0, hn = j === "" ? un : j + Kn;
        if (Cn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Qt = h[Rl], lt = hn + Er(Qt, Rl), Wt += Ta(Qt, C, z, lt, Z);
        else {
          var qo = mt(h);
          if (typeof qo == "function") {
            var Bi = h;
            qo === Bi.entries && (It || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Ko = qo.call(Bi), ou, qf = 0; !(ou = Ko.next()).done; )
              Qt = ou.value, lt = hn + Er(Qt, qf++), Wt += Ta(Qt, C, z, lt, Z);
          } else if (Le === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Wt;
      }
      function Hi(h, C, z) {
        if (h == null)
          return h;
        var j = [], Z = 0;
        return Ta(h, j, "", "", function(Le) {
          return C.call(z, Le, Z++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, z) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: Y,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ae,
          _context: C
        };
        var z = !1, j = !1, Z = !1;
        {
          var Le = {
            $$typeof: Y,
            _context: C
          };
          Object.defineProperties(Le, {
            Provider: {
              get: function() {
                return j || (j = !0, Re("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(le) {
                C.Provider = le;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(le) {
                C._currentValue = le;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(le) {
                C._currentValue2 = le;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(le) {
                C._threadCount = le;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Re("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(le) {
                Z || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", le), Z = !0);
              }
            }
          }), C.Consumer = Le;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var br = -1, _r = 0, rr = 1, di = 2;
      function Qa(h) {
        if (h._status === br) {
          var C = h._result, z = C();
          if (z.then(function(Le) {
            if (h._status === _r || h._status === br) {
              var le = h;
              le._status = rr, le._result = Le;
            }
          }, function(Le) {
            if (h._status === _r || h._status === br) {
              var le = h;
              le._status = di, le._result = Le;
            }
          }), h._status === br) {
            var j = h;
            j._status = _r, j._result = z;
          }
        }
        if (h._status === rr) {
          var Z = h._result;
          return Z === void 0 && Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: br,
          _result: h
        }, z = {
          $$typeof: Fe,
          _payload: C,
          _init: Qa
        };
        {
          var j, Z;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Le) {
                Re("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Le, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(Le) {
                Re("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Le, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function vi(h) {
        h != null && h.$$typeof === oe ? Re("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Re("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Re("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Re("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Be,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function $(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === $e || h === ft || jt || h === S || h === J || h === ye || Oe || h === ht || Jt || ln || _t || typeof h == "object" && h !== null && (h.$$typeof === Fe || h.$$typeof === oe || h.$$typeof === ae || h.$$typeof === Y || h.$$typeof === Be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ue(h, C) {
        $(h) || Re("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: oe,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(Z) {
              j = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return z;
      }
      function me() {
        var h = Ke.current;
        return h === null && Re(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Je(h) {
        var C = me();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Re("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Re("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ge(h) {
        var C = me();
        return C.useState(h);
      }
      function pt(h, C, z) {
        var j = me();
        return j.useReducer(h, C, z);
      }
      function st(h) {
        var C = me();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var z = me();
        return z.useEffect(h, C);
      }
      function tn(h, C) {
        var z = me();
        return z.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var z = me();
        return z.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var z = me();
        return z.useCallback(h, C);
      }
      function Wa(h, C) {
        var z = me();
        return z.useMemo(h, C);
      }
      function Ga(h, C, z) {
        var j = me();
        return j.useImperativeHandle(h, C, z);
      }
      function Ze(h, C) {
        {
          var z = me();
          return z.useDebugValue(h, C);
        }
      }
      function nt() {
        var h = me();
        return h.useTransition();
      }
      function qa(h) {
        var C = me();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = me();
        return h.useId();
      }
      function ru(h, C, z) {
        var j = me();
        return j.useSyncExternalStore(h, C, z);
      }
      var hl = 0, Wu, ml, $r, $o, kr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Wu = console.log, ml = console.info, $r = console.warn, $o = console.error, kr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function fa() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Wu
              }),
              info: P({}, h, {
                value: ml
              }),
              warn: P({}, h, {
                value: $r
              }),
              error: P({}, h, {
                value: $o
              }),
              group: P({}, h, {
                value: kr
              }),
              groupCollapsed: P({}, h, {
                value: lc
              }),
              groupEnd: P({}, h, {
                value: uc
              })
            });
          }
          hl < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ka = kt.ReactCurrentDispatcher, Xa;
      function qu(h, C, z) {
        {
          if (Xa === void 0)
            try {
              throw Error();
            } catch (Z) {
              var j = Z.stack.trim().match(/\n( *(at )?)/);
              Xa = j && j[1] || "";
            }
          return `
` + Xa + h;
        }
      }
      var au = !1, gl;
      {
        var Ku = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Ku();
      }
      function Xu(h, C) {
        if (!h || au)
          return "";
        {
          var z = gl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        au = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Le;
        Le = Ka.current, Ka.current = null, yl();
        try {
          if (C) {
            var le = function() {
              throw Error();
            };
            if (Object.defineProperty(le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(le, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], le);
            } else {
              try {
                le.call();
              } catch (hn) {
                j = hn;
              }
              h.call(le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var ze = hn.stack.split(`
`), vt = j.stack.split(`
`), bt = ze.length - 1, nn = vt.length - 1; bt >= 1 && nn >= 0 && ze[bt] !== vt[nn]; )
              nn--;
            for (; bt >= 1 && nn >= 0; bt--, nn--)
              if (ze[bt] !== vt[nn]) {
                if (bt !== 1 || nn !== 1)
                  do
                    if (bt--, nn--, nn < 0 || ze[bt] !== vt[nn]) {
                      var Qt = `
` + ze[bt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Qt), Qt;
                    }
                  while (bt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Ka.current = Le, fa(), Error.prepareStackTrace = Z;
        }
        var lt = h ? h.displayName || h.name : "", Wt = lt ? qu(lt) : "";
        return typeof h == "function" && gl.set(h, Wt), Wt;
      }
      function Pi(h, C, z) {
        return Xu(h, !1);
      }
      function Wf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Wf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case J:
            return qu("Suspense");
          case ye:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Be:
              return Pi(h.render);
            case oe:
              return Vi(h.type, C, z);
            case Fe: {
              var j = h, Z = j._payload, Le = j._init;
              try {
                return Vi(Le(Z), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Ju = kt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(z);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Qo(h, C, z, j, Z) {
        {
          var Le = Function.call.bind(Rn);
          for (var le in h)
            if (Le(h, le)) {
              var ze = void 0;
              try {
                if (typeof h[le] != "function") {
                  var vt = Error((j || "React class") + ": " + z + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw vt.name = "Invariant Violation", vt;
                }
                ze = h[le](C, le, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                ze = bt;
              }
              ze && !(ze instanceof Error) && (wt(Z), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, le, typeof ze), wt(null)), ze instanceof Error && !(ze.message in Lt) && (Lt[ze.message] = !0, wt(Z), Re("Failed %s type: %s", z, ze.message), wt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ht(z);
        } else
          Ht(null);
      }
      var Qe;
      Qe = !1;
      function Zu() {
        if (dt.current) {
          var h = qn(dt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function yi(h) {
        var C = Zu();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function sn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = yi(C);
          if (!Dr[z]) {
            Dr[z] = !0;
            var j = "";
            h && h._owner && h._owner !== dt.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), hi(h), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), hi(null);
          }
        }
      }
      function $t(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              vn(j) && sn(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = mt(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var Le = Z.call(h), le; !(le = Le.next()).done; )
                vn(le.value) && sn(le.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === oe))
            z = C.propTypes;
          else
            return;
          if (z) {
            var j = qn(C);
            Qo(z, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Qe) {
            Qe = !0;
            var Z = qn(C);
            Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var j = C[z];
            if (j !== "children" && j !== "key") {
              hi(h), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Re("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Or(h, C, z) {
        var j = $(h);
        if (!j) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = mi(C);
          Le ? Z += Le : Z += Zu();
          var le;
          h === null ? le = "null" : Cn(h) ? le = "array" : h !== void 0 && h.$$typeof === Ye ? (le = "<" + (qn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, Re("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, Z);
        }
        var ze = it.apply(this, arguments);
        if (ze == null)
          return ze;
        if (j)
          for (var vt = 2; vt < arguments.length; vt++)
            $t(arguments[vt], h);
        return h === $e ? Yn(ze) : Sl(ze), ze;
      }
      var xa = !1;
      function iu(h) {
        var C = Or.bind(null, h);
        return C.type = h, xa || (xa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Wo(h, C, z) {
        for (var j = Zt.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          $t(arguments[Z], j.type);
        return Sl(j), j;
      }
      function Go(h, C) {
        var z = gt.transition;
        gt.transition = {};
        var j = gt.transition;
        gt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (gt.transition = z, z === null && j._updatedFibers) {
            var Z = j._updatedFibers.size;
            Z > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Gf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = B && B[C];
            lu = z.call(B, "timers").setImmediate;
          } catch {
            lu = function(Z) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Re("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Le = new MessageChannel();
              Le.port1.onmessage = Z, Le.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var wa = 0, Ja = !1;
      function gi(h) {
        {
          var C = wa;
          wa++, _e.current === null && (_e.current = []);
          var z = _e.isBatchingLegacy, j;
          try {
            if (_e.isBatchingLegacy = !0, j = h(), !z && _e.didScheduleLegacyUpdate) {
              var Z = _e.current;
              Z !== null && (_e.didScheduleLegacyUpdate = !1, Cl(Z));
            }
          } catch (lt) {
            throw ba(C), lt;
          } finally {
            _e.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Le = j, le = !1, ze = {
              then: function(lt, Wt) {
                le = !0, Le.then(function(hn) {
                  ba(C), wa === 0 ? eo(hn, lt, Wt) : lt(hn);
                }, function(hn) {
                  ba(C), Wt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              le || (Ja = !0, Re("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ze;
          } else {
            var vt = j;
            if (ba(C), wa === 0) {
              var bt = _e.current;
              bt !== null && (Cl(bt), _e.current = null);
              var nn = {
                then: function(lt, Wt) {
                  _e.current === null ? (_e.current = [], eo(vt, lt, Wt)) : lt(vt);
                }
              };
              return nn;
            } else {
              var Qt = {
                then: function(lt, Wt) {
                  lt(vt);
                }
              };
              return Qt;
            }
          }
        }
      }
      function ba(h) {
        h !== wa - 1 && Re("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), wa = h;
      }
      function eo(h, C, z) {
        {
          var j = _e.current;
          if (j !== null)
            try {
              Cl(j), Gf(function() {
                j.length === 0 ? (_e.current = null, C(h)) : eo(h, C, z);
              });
            } catch (Z) {
              z(Z);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Or, no = Wo, ro = iu, Za = {
        map: Hi,
        forEach: eu,
        count: Zl,
        toArray: pl,
        only: vl
      };
      I.Children = Za, I.Component = Ae, I.Fragment = $e, I.Profiler = ft, I.PureComponent = ot, I.StrictMode = S, I.Suspense = J, I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, I.act = gi, I.cloneElement = no, I.createContext = tu, I.createElement = uu, I.createFactory = ro, I.createRef = On, I.forwardRef = vi, I.isValidElement = vn, I.lazy = pi, I.memo = ue, I.startTransition = Go, I.unstable_act = gi, I.useCallback = ar, I.useContext = Je, I.useDebugValue = Ze, I.useDeferredValue = qa, I.useEffect = Tn, I.useId = nu, I.useImperativeHandle = Ga, I.useInsertionEffect = tn, I.useLayoutEffect = on, I.useMemo = Wa, I.useReducer = pt, I.useRef = st, I.useState = Ge, I.useSyncExternalStore = ru, I.useTransition = nt, I.version = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(ev, ev.exports)), ev.exports;
}
var XR;
function tv() {
  return XR || (XR = 1, process.env.NODE_ENV === "production" ? Gm.exports = ek() : Gm.exports = tk()), Gm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function nk() {
  if (JR) return Jp;
  JR = 1;
  var B = tv(), I = Symbol.for("react.element"), D = Symbol.for("react.fragment"), Ye = Object.prototype.hasOwnProperty, We = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(ft, ae, Y) {
    var Be, J = {}, ye = null, oe = null;
    Y !== void 0 && (ye = "" + Y), ae.key !== void 0 && (ye = "" + ae.key), ae.ref !== void 0 && (oe = ae.ref);
    for (Be in ae) Ye.call(ae, Be) && !$e.hasOwnProperty(Be) && (J[Be] = ae[Be]);
    if (ft && ft.defaultProps) for (Be in ae = ft.defaultProps, ae) J[Be] === void 0 && (J[Be] = ae[Be]);
    return { $$typeof: I, type: ft, key: ye, ref: oe, props: J, _owner: We.current };
  }
  return Jp.Fragment = D, Jp.jsx = S, Jp.jsxs = S, Jp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function rk() {
  return ZR || (ZR = 1, process.env.NODE_ENV !== "production" && (function() {
    var B = tv(), I = Symbol.for("react.element"), D = Symbol.for("react.portal"), Ye = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), ft = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), Fe = Symbol.iterator, ht = "@@iterator";
    function yt(R) {
      if (R === null || typeof R != "object")
        return null;
      var $ = Fe && R[Fe] || R[ht];
      return typeof $ == "function" ? $ : null;
    }
    var fn = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function mt(R) {
      {
        for (var $ = arguments.length, ue = new Array($ > 1 ? $ - 1 : 0), me = 1; me < $; me++)
          ue[me - 1] = arguments[me];
        Ke("error", R, ue);
      }
    }
    function Ke(R, $, ue) {
      {
        var me = fn.ReactDebugCurrentFrame, Je = me.getStackAddendum();
        Je !== "" && ($ += "%s", ue = ue.concat([Je]));
        var Ge = ue.map(function(pt) {
          return String(pt);
        });
        Ge.unshift("Warning: " + $), Function.prototype.apply.call(console[R], console, Ge);
      }
    }
    var gt = !1, _e = !1, dt = !1, He = !1, an = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ye || R === $e || an || R === We || R === Y || R === Be || He || R === oe || gt || _e || dt || typeof R == "object" && R !== null && (R.$$typeof === ye || R.$$typeof === J || R.$$typeof === S || R.$$typeof === ft || R.$$typeof === ae || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function ln(R, $, ue) {
      var me = R.displayName;
      if (me)
        return me;
      var Je = $.displayName || $.name || "";
      return Je !== "" ? ue + "(" + Je + ")" : ue;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function Oe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && mt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ye:
          return "Fragment";
        case D:
          return "Portal";
        case $e:
          return "Profiler";
        case We:
          return "StrictMode";
        case Y:
          return "Suspense";
        case Be:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ft:
            var $ = R;
            return _t($) + ".Consumer";
          case S:
            var ue = R;
            return _t(ue._context) + ".Provider";
          case ae:
            return ln(R, R.render, "ForwardRef");
          case J:
            var me = R.displayName || null;
            return me !== null ? me : Oe(R.type) || "Memo";
          case ye: {
            var Je = R, Ge = Je._payload, pt = Je._init;
            try {
              return Oe(pt(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, kt = 0, Ot, Re, ee, Te, ie, _, P;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Ae() {
      {
        if (kt === 0) {
          Ot = console.log, Re = console.info, ee = console.warn, Te = console.error, ie = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        kt++;
      }
    }
    function ut() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: Ot
            }),
            info: jt({}, R, {
              value: Re
            }),
            warn: jt({}, R, {
              value: ee
            }),
            error: jt({}, R, {
              value: Te
            }),
            group: jt({}, R, {
              value: ie
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        kt < 0 && mt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var rt = fn.ReactCurrentDispatcher, tt;
    function at(R, $, ue) {
      {
        if (tt === void 0)
          try {
            throw Error();
          } catch (Je) {
            var me = Je.stack.trim().match(/\n( *(at )?)/);
            tt = me && me[1] || "";
          }
        return `
` + tt + R;
      }
    }
    var ot = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function wr(R, $) {
      if (!R || ot)
        return "";
      {
        var ue = Bt.get(R);
        if (ue !== void 0)
          return ue;
      }
      var me;
      ot = !0;
      var Je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = rt.current, rt.current = null, Ae();
      try {
        if ($) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (Ze) {
              me = Ze;
            }
            Reflect.construct(R, [], pt);
          } else {
            try {
              pt.call();
            } catch (Ze) {
              me = Ze;
            }
            R.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            me = Ze;
          }
          R();
        }
      } catch (Ze) {
        if (Ze && me && typeof Ze.stack == "string") {
          for (var st = Ze.stack.split(`
`), Tn = me.stack.split(`
`), tn = st.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && st[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (st[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || st[tn] !== Tn[on]) {
                    var ar = `
` + st[tn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        ot = !1, rt.current = Ge, ut(), Error.prepareStackTrace = Je;
      }
      var Wa = R ? R.displayName || R.name : "", Ga = Wa ? at(Wa) : "";
      return typeof R == "function" && Bt.set(R, Ga), Ga;
    }
    function Cn(R, $, ue) {
      return wr(R, !1);
    }
    function nr(R) {
      var $ = R.prototype;
      return !!($ && $.isReactComponent);
    }
    function Vn(R, $, ue) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return wr(R, nr(R));
      if (typeof R == "string")
        return at(R);
      switch (R) {
        case Y:
          return at("Suspense");
        case Be:
          return at("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ae:
            return Cn(R.render);
          case J:
            return Vn(R.type, $, ue);
          case ye: {
            var me = R, Je = me._payload, Ge = me._init;
            try {
              return Vn(Ge(Je), $, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Yr = {}, ci = fn.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var $ = R._owner, ue = Vn(R.type, R._source, $ ? $.type : null);
        ci.setExtraStackFrame(ue);
      } else
        ci.setExtraStackFrame(null);
    }
    function qn(R, $, ue, me, Je) {
      {
        var Ge = Function.call.bind(Bn);
        for (var pt in R)
          if (Ge(R, pt)) {
            var st = void 0;
            try {
              if (typeof R[pt] != "function") {
                var Tn = Error((me || "React class") + ": " + ue + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              st = R[pt]($, pt, me, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              st = tn;
            }
            st && !(st instanceof Error) && (oa(Je), mt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ue, pt, typeof st), oa(null)), st instanceof Error && !(st.message in Yr) && (Yr[st.message] = !0, oa(Je), mt("Failed %s type: %s", ue, st.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function In(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, ue = $ && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ue;
      }
    }
    function Ya(R) {
      try {
        return Ln(R), !1;
      } catch {
        return !0;
      }
    }
    function Ln(R) {
      return "" + R;
    }
    function Sr(R) {
      if (Ya(R))
        return mt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var sa = fn.ReactCurrentOwner, $a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, te;
    function xe(R) {
      if (Bn.call(R, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(R, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function it(R) {
      if (Bn.call(R, "key")) {
        var $ = Object.getOwnPropertyDescriptor(R, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, $) {
      typeof R.ref == "string" && sa.current;
    }
    function Zt(R, $) {
      {
        var ue = function() {
          fi || (fi = !0, mt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function vn(R, $) {
      {
        var ue = function() {
          te || (te = !0, mt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var un = function(R, $, ue, me, Je, Ge, pt) {
      var st = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: R,
        key: $,
        ref: ue,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: Ge
      };
      return st._store = {}, Object.defineProperty(st._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(st, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function Kn(R, $, ue, me, Je) {
      {
        var Ge, pt = {}, st = null, Tn = null;
        ue !== void 0 && (Sr(ue), st = "" + ue), it($) && (Sr($.key), st = "" + $.key), xe($) && (Tn = $.ref, Ft($, Je));
        for (Ge in $)
          Bn.call($, Ge) && !$a.hasOwnProperty(Ge) && (pt[Ge] = $[Ge]);
        if (R && R.defaultProps) {
          var tn = R.defaultProps;
          for (Ge in tn)
            pt[Ge] === void 0 && (pt[Ge] = tn[Ge]);
        }
        if (st || Tn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && Zt(pt, on), Tn && vn(pt, on);
        }
        return un(R, st, Tn, Je, me, sa.current, pt);
      }
    }
    var en = fn.ReactCurrentOwner, It = fn.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var $ = R._owner, ue = Vn(R.type, R._source, $ ? $.type : null);
        It.setExtraStackFrame(ue);
      } else
        It.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === I;
    }
    function Ta() {
      {
        if (en.current) {
          var R = Oe(en.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var Zl = {};
    function eu(R) {
      {
        var $ = Ta();
        if (!$) {
          var ue = typeof R == "string" ? R : R.displayName || R.name;
          ue && ($ = `

Check the top-level render call using <` + ue + ">.");
        }
        return $;
      }
    }
    function pl(R, $) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ue = eu($);
        if (Zl[ue])
          return;
        Zl[ue] = !0;
        var me = "";
        R && R._owner && R._owner !== en.current && (me = " It was passed a child from " + Oe(R._owner.type) + "."), Yt(R), mt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, me), Yt(null);
      }
    }
    function vl(R, $) {
      {
        if (typeof R != "object")
          return;
        if (In(R))
          for (var ue = 0; ue < R.length; ue++) {
            var me = R[ue];
            Er(me) && pl(me, $);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Je = yt(R);
          if (typeof Je == "function" && Je !== R.entries)
            for (var Ge = Je.call(R), pt; !(pt = Ge.next()).done; )
              Er(pt.value) && pl(pt.value, $);
        }
      }
    }
    function tu(R) {
      {
        var $ = R.type;
        if ($ == null || typeof $ == "string")
          return;
        var ue;
        if (typeof $ == "function")
          ue = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === ae || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === J))
          ue = $.propTypes;
        else
          return;
        if (ue) {
          var me = Oe($);
          qn(ue, R.props, "prop", me, R);
        } else if ($.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Je = Oe($);
          mt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Je || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && mt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(R) {
      {
        for (var $ = Object.keys(R.props), ue = 0; ue < $.length; ue++) {
          var me = $[ue];
          if (me !== "children" && me !== "key") {
            Yt(R), mt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), mt("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var _r = {};
    function rr(R, $, ue, me, Je, Ge) {
      {
        var pt = Jt(R);
        if (!pt) {
          var st = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Hi();
          Tn ? st += Tn : st += Ta();
          var tn;
          R === null ? tn = "null" : In(R) ? tn = "array" : R !== void 0 && R.$$typeof === I ? (tn = "<" + (Oe(R.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof R, mt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, st);
        }
        var on = Kn(R, $, ue, Je, Ge);
        if (on == null)
          return on;
        if (pt) {
          var ar = $.children;
          if (ar !== void 0)
            if (me)
              if (In(ar)) {
                for (var Wa = 0; Wa < ar.length; Wa++)
                  vl(ar[Wa], R);
                Object.freeze && Object.freeze(ar);
              } else
                mt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, R);
        }
        if (Bn.call($, "key")) {
          var Ga = Oe(R), Ze = Object.keys($).filter(function(nu) {
            return nu !== "key";
          }), nt = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + nt]) {
            var qa = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            mt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, Ga, qa, Ga), _r[Ga + nt] = !0;
          }
        }
        return R === Ye ? br(on) : tu(on), on;
      }
    }
    function di(R, $, ue) {
      return rr(R, $, ue, !0);
    }
    function Qa(R, $, ue) {
      return rr(R, $, ue, !1);
    }
    var pi = Qa, vi = di;
    Zp.Fragment = Ye, Zp.jsx = pi, Zp.jsxs = vi;
  })()), Zp;
}
var eT;
function ak() {
  return eT || (eT = 1, process.env.NODE_ENV === "production" ? Wm.exports = nk() : Wm.exports = rk()), Wm.exports;
}
var re = ak(), Qf = {}, qm = { exports: {} }, Ba = {}, Km = { exports: {} }, pE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function ik() {
  return tT || (tT = 1, (function(B) {
    function I(ee, Te) {
      var ie = ee.length;
      ee.push(Te);
      e: for (; 0 < ie; ) {
        var _ = ie - 1 >>> 1, P = ee[_];
        if (0 < We(P, Te)) ee[_] = Te, ee[ie] = P, ie = _;
        else break e;
      }
    }
    function D(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function Ye(ee) {
      if (ee.length === 0) return null;
      var Te = ee[0], ie = ee.pop();
      if (ie !== Te) {
        ee[0] = ie;
        e: for (var _ = 0, P = ee.length, Pe = P >>> 1; _ < Pe; ) {
          var Ae = 2 * (_ + 1) - 1, ut = ee[Ae], rt = Ae + 1, tt = ee[rt];
          if (0 > We(ut, ie)) rt < P && 0 > We(tt, ut) ? (ee[_] = tt, ee[rt] = ie, _ = rt) : (ee[_] = ut, ee[Ae] = ie, _ = Ae);
          else if (rt < P && 0 > We(tt, ie)) ee[_] = tt, ee[rt] = ie, _ = rt;
          else break e;
        }
      }
      return Te;
    }
    function We(ee, Te) {
      var ie = ee.sortIndex - Te.sortIndex;
      return ie !== 0 ? ie : ee.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var $e = performance;
      B.unstable_now = function() {
        return $e.now();
      };
    } else {
      var S = Date, ft = S.now();
      B.unstable_now = function() {
        return S.now() - ft;
      };
    }
    var ae = [], Y = [], Be = 1, J = null, ye = 3, oe = !1, Fe = !1, ht = !1, yt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, mt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ke(ee) {
      for (var Te = D(Y); Te !== null; ) {
        if (Te.callback === null) Ye(Y);
        else if (Te.startTime <= ee) Ye(Y), Te.sortIndex = Te.expirationTime, I(ae, Te);
        else break;
        Te = D(Y);
      }
    }
    function gt(ee) {
      if (ht = !1, Ke(ee), !Fe) if (D(ae) !== null) Fe = !0, Ot(_e);
      else {
        var Te = D(Y);
        Te !== null && Re(gt, Te.startTime - ee);
      }
    }
    function _e(ee, Te) {
      Fe = !1, ht && (ht = !1, fn(an), an = -1), oe = !0;
      var ie = ye;
      try {
        for (Ke(Te), J = D(ae); J !== null && (!(J.expirationTime > Te) || ee && !ln()); ) {
          var _ = J.callback;
          if (typeof _ == "function") {
            J.callback = null, ye = J.priorityLevel;
            var P = _(J.expirationTime <= Te);
            Te = B.unstable_now(), typeof P == "function" ? J.callback = P : J === D(ae) && Ye(ae), Ke(Te);
          } else Ye(ae);
          J = D(ae);
        }
        if (J !== null) var Pe = !0;
        else {
          var Ae = D(Y);
          Ae !== null && Re(gt, Ae.startTime - Te), Pe = !1;
        }
        return Pe;
      } finally {
        J = null, ye = ie, oe = !1;
      }
    }
    var dt = !1, He = null, an = -1, Ht = 5, Jt = -1;
    function ln() {
      return !(B.unstable_now() - Jt < Ht);
    }
    function _t() {
      if (He !== null) {
        var ee = B.unstable_now();
        Jt = ee;
        var Te = !0;
        try {
          Te = He(!0, ee);
        } finally {
          Te ? Oe() : (dt = !1, He = null);
        }
      } else dt = !1;
    }
    var Oe;
    if (typeof mt == "function") Oe = function() {
      mt(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), kt = jt.port2;
      jt.port1.onmessage = _t, Oe = function() {
        kt.postMessage(null);
      };
    } else Oe = function() {
      yt(_t, 0);
    };
    function Ot(ee) {
      He = ee, dt || (dt = !0, Oe());
    }
    function Re(ee, Te) {
      an = yt(function() {
        ee(B.unstable_now());
      }, Te);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, B.unstable_continueExecution = function() {
      Fe || oe || (Fe = !0, Ot(_e));
    }, B.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return ye;
    }, B.unstable_getFirstCallbackNode = function() {
      return D(ae);
    }, B.unstable_next = function(ee) {
      switch (ye) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = ye;
      }
      var ie = ye;
      ye = Te;
      try {
        return ee();
      } finally {
        ye = ie;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(ee, Te) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var ie = ye;
      ye = ee;
      try {
        return Te();
      } finally {
        ye = ie;
      }
    }, B.unstable_scheduleCallback = function(ee, Te, ie) {
      var _ = B.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? _ + ie : _) : ie = _, ee) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ie + P, ee = { id: Be++, callback: Te, priorityLevel: ee, startTime: ie, expirationTime: P, sortIndex: -1 }, ie > _ ? (ee.sortIndex = ie, I(Y, ee), D(ae) === null && ee === D(Y) && (ht ? (fn(an), an = -1) : ht = !0, Re(gt, ie - _))) : (ee.sortIndex = P, I(ae, ee), Fe || oe || (Fe = !0, Ot(_e))), ee;
    }, B.unstable_shouldYield = ln, B.unstable_wrapCallback = function(ee) {
      var Te = ye;
      return function() {
        var ie = ye;
        ye = Te;
        try {
          return ee.apply(this, arguments);
        } finally {
          ye = ie;
        }
      };
    };
  })(pE)), pE;
}
var vE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function lk() {
  return nT || (nT = 1, (function(B) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var I = !1, D = 5;
      function Ye(te, xe) {
        var it = te.length;
        te.push(xe), S(te, xe, it);
      }
      function We(te) {
        return te.length === 0 ? null : te[0];
      }
      function $e(te) {
        if (te.length === 0)
          return null;
        var xe = te[0], it = te.pop();
        return it !== xe && (te[0] = it, ft(te, it, 0)), xe;
      }
      function S(te, xe, it) {
        for (var Ft = it; Ft > 0; ) {
          var Zt = Ft - 1 >>> 1, vn = te[Zt];
          if (ae(vn, xe) > 0)
            te[Zt] = xe, te[Ft] = vn, Ft = Zt;
          else
            return;
        }
      }
      function ft(te, xe, it) {
        for (var Ft = it, Zt = te.length, vn = Zt >>> 1; Ft < vn; ) {
          var un = (Ft + 1) * 2 - 1, Kn = te[un], en = un + 1, It = te[en];
          if (ae(Kn, xe) < 0)
            en < Zt && ae(It, Kn) < 0 ? (te[Ft] = It, te[en] = xe, Ft = en) : (te[Ft] = Kn, te[un] = xe, Ft = un);
          else if (en < Zt && ae(It, xe) < 0)
            te[Ft] = It, te[en] = xe, Ft = en;
          else
            return;
        }
      }
      function ae(te, xe) {
        var it = te.sortIndex - xe.sortIndex;
        return it !== 0 ? it : te.id - xe.id;
      }
      var Y = 1, Be = 2, J = 3, ye = 4, oe = 5;
      function Fe(te, xe) {
      }
      var ht = typeof performance == "object" && typeof performance.now == "function";
      if (ht) {
        var yt = performance;
        B.unstable_now = function() {
          return yt.now();
        };
      } else {
        var fn = Date, mt = fn.now();
        B.unstable_now = function() {
          return fn.now() - mt;
        };
      }
      var Ke = 1073741823, gt = -1, _e = 250, dt = 5e3, He = 1e4, an = Ke, Ht = [], Jt = [], ln = 1, _t = null, Oe = J, jt = !1, kt = !1, Ot = !1, Re = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ie(te) {
        for (var xe = We(Jt); xe !== null; ) {
          if (xe.callback === null)
            $e(Jt);
          else if (xe.startTime <= te)
            $e(Jt), xe.sortIndex = xe.expirationTime, Ye(Ht, xe);
          else
            return;
          xe = We(Jt);
        }
      }
      function _(te) {
        if (Ot = !1, ie(te), !kt)
          if (We(Ht) !== null)
            kt = !0, Ln(P);
          else {
            var xe = We(Jt);
            xe !== null && Sr(_, xe.startTime - te);
          }
      }
      function P(te, xe) {
        kt = !1, Ot && (Ot = !1, sa()), jt = !0;
        var it = Oe;
        try {
          var Ft;
          if (!I) return Pe(te, xe);
        } finally {
          _t = null, Oe = it, jt = !1;
        }
      }
      function Pe(te, xe) {
        var it = xe;
        for (ie(it), _t = We(Ht); _t !== null && !(_t.expirationTime > it && (!te || ci())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, Oe = _t.priorityLevel;
            var Zt = _t.expirationTime <= it, vn = Ft(Zt);
            it = B.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === We(Ht) && $e(Ht), ie(it);
          } else
            $e(Ht);
          _t = We(Ht);
        }
        if (_t !== null)
          return !0;
        var un = We(Jt);
        return un !== null && Sr(_, un.startTime - it), !1;
      }
      function Ae(te, xe) {
        switch (te) {
          case Y:
          case Be:
          case J:
          case ye:
          case oe:
            break;
          default:
            te = J;
        }
        var it = Oe;
        Oe = te;
        try {
          return xe();
        } finally {
          Oe = it;
        }
      }
      function ut(te) {
        var xe;
        switch (Oe) {
          case Y:
          case Be:
          case J:
            xe = J;
            break;
          default:
            xe = Oe;
            break;
        }
        var it = Oe;
        Oe = xe;
        try {
          return te();
        } finally {
          Oe = it;
        }
      }
      function rt(te) {
        var xe = Oe;
        return function() {
          var it = Oe;
          Oe = xe;
          try {
            return te.apply(this, arguments);
          } finally {
            Oe = it;
          }
        };
      }
      function tt(te, xe, it) {
        var Ft = B.unstable_now(), Zt;
        if (typeof it == "object" && it !== null) {
          var vn = it.delay;
          typeof vn == "number" && vn > 0 ? Zt = Ft + vn : Zt = Ft;
        } else
          Zt = Ft;
        var un;
        switch (te) {
          case Y:
            un = gt;
            break;
          case Be:
            un = _e;
            break;
          case oe:
            un = an;
            break;
          case ye:
            un = He;
            break;
          case J:
          default:
            un = dt;
            break;
        }
        var Kn = Zt + un, en = {
          id: ln++,
          callback: xe,
          priorityLevel: te,
          startTime: Zt,
          expirationTime: Kn,
          sortIndex: -1
        };
        return Zt > Ft ? (en.sortIndex = Zt, Ye(Jt, en), We(Ht) === null && en === We(Jt) && (Ot ? sa() : Ot = !0, Sr(_, Zt - Ft))) : (en.sortIndex = Kn, Ye(Ht, en), !kt && !jt && (kt = !0, Ln(P))), en;
      }
      function at() {
      }
      function ot() {
        !kt && !jt && (kt = !0, Ln(P));
      }
      function Bt() {
        return We(Ht);
      }
      function On(te) {
        te.callback = null;
      }
      function wr() {
        return Oe;
      }
      var Cn = !1, nr = null, Vn = -1, Bn = D, Yr = -1;
      function ci() {
        var te = B.unstable_now() - Yr;
        return !(te < Bn);
      }
      function oa() {
      }
      function qn(te) {
        if (te < 0 || te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        te > 0 ? Bn = Math.floor(1e3 / te) : Bn = D;
      }
      var Rn = function() {
        if (nr !== null) {
          var te = B.unstable_now();
          Yr = te;
          var xe = !0, it = !0;
          try {
            it = nr(xe, te);
          } finally {
            it ? In() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, In;
      if (typeof Te == "function")
        In = function() {
          Te(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ya = gr.port2;
        gr.port1.onmessage = Rn, In = function() {
          Ya.postMessage(null);
        };
      } else
        In = function() {
          Re(Rn, 0);
        };
      function Ln(te) {
        nr = te, Cn || (Cn = !0, In());
      }
      function Sr(te, xe) {
        Vn = Re(function() {
          te(B.unstable_now());
        }, xe);
      }
      function sa() {
        ee(Vn), Vn = -1;
      }
      var $a = oa, fi = null;
      B.unstable_IdlePriority = oe, B.unstable_ImmediatePriority = Y, B.unstable_LowPriority = ye, B.unstable_NormalPriority = J, B.unstable_Profiling = fi, B.unstable_UserBlockingPriority = Be, B.unstable_cancelCallback = On, B.unstable_continueExecution = ot, B.unstable_forceFrameRate = qn, B.unstable_getCurrentPriorityLevel = wr, B.unstable_getFirstCallbackNode = Bt, B.unstable_next = ut, B.unstable_pauseExecution = at, B.unstable_requestPaint = $a, B.unstable_runWithPriority = Ae, B.unstable_scheduleCallback = tt, B.unstable_shouldYield = ci, B.unstable_wrapCallback = rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(vE)), vE;
}
var rT;
function cT() {
  return rT || (rT = 1, process.env.NODE_ENV === "production" ? Km.exports = ik() : Km.exports = lk()), Km.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function uk() {
  if (aT) return Ba;
  aT = 1;
  var B = tv(), I = cT();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ye = /* @__PURE__ */ new Set(), We = {};
  function $e(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (We[n] = r, n = 0; n < r.length; n++) Ye.add(r[n]);
  }
  var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ae = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Be = {}, J = {};
  function ye(n) {
    return ae.call(J, n) ? !0 : ae.call(Be, n) ? !1 : Y.test(n) ? J[n] = !0 : (Be[n] = !0, !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Fe(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ht(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var yt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    yt[n] = new ht(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    yt[r] = new ht(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    yt[n] = new ht(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    yt[n] = new ht(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    yt[n] = new ht(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    yt[n] = new ht(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    yt[n] = new ht(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    yt[n] = new ht(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    yt[n] = new ht(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function mt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      mt
    );
    yt[r] = new ht(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, mt);
    yt[r] = new ht(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, mt);
    yt[r] = new ht(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    yt[n] = new ht(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), yt.xlinkHref = new ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    yt[n] = new ht(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ke(n, r, l, o) {
    var c = yt.hasOwnProperty(r) ? yt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Fe(r, l, c, o) && (l = null), o || c === null ? ye(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var gt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = Symbol.for("react.element"), dt = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Jt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Pe = !1;
  function Ae(n, r) {
    if (!n || Pe) return "";
    Pe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function ut(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ae(n.type, !1), n;
      case 11:
        return n = Ae(n.type.render, !1), n;
      case 1:
        return n = Ae(n.type, !0), n;
      default:
        return "";
    }
  }
  function rt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case dt:
        return "Portal";
      case Ht:
        return "Profiler";
      case an:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Jt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : rt(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return rt(n(r));
        } catch {
        }
    }
    return null;
  }
  function tt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return rt(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function at(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ot(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = ot(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ot(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = at(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Ke(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Bn(n, r);
    var l = at(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, at(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + at(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(D(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(D(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(D(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: at(l) };
  }
  function Ya(n, r) {
    var l = at(r.value), o = at(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $a, fi = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($a = $a || document.createElement("div"), $a.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $a.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function te(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, it = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    it.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function Zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(D(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(D(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(D(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(D(62));
    }
  }
  function Kn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var en = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, ca = null, Er = null;
  function Ta(n) {
    if (n = ke(n)) {
      if (typeof Yt != "function") throw Error(D(280));
      var r = n.stateNode;
      r && (r = mn(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    ca ? Er ? Er.push(n) : Er = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Er;
      if (Er = ca = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (ca !== null || Er !== null) && (pl(), Zl());
    }
  }
  function br(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(D(231, r, typeof l));
    return l;
  }
  var _r = !1;
  if (ft) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      _r = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    _r = !1;
  }
  function di(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (G) {
      this.onError(G);
    }
  }
  var Qa = !1, pi = null, vi = !1, R = null, $ = { onError: function(n) {
    Qa = !0, pi = n;
  } };
  function ue(n, r, l, o, c, d, m, E, T) {
    Qa = !1, pi = null, di.apply($, arguments);
  }
  function me(n, r, l, o, c, d, m, E, T) {
    if (ue.apply(this, arguments), Qa) {
      if (Qa) {
        var U = pi;
        Qa = !1, pi = null;
      } else throw Error(D(198));
      vi || (vi = !0, R = U);
    }
  }
  function Je(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ge(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function pt(n) {
    if (Je(n) !== n) throw Error(D(188));
  }
  function st(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Je(n), r === null) throw Error(D(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return pt(c), n;
          if (d === o) return pt(c), r;
          d = d.sibling;
        }
        throw Error(D(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(D(189));
        }
      }
      if (l.alternate !== o) throw Error(D(190));
    }
    if (l.tag !== 3) throw Error(D(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = st(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = I.unstable_scheduleCallback, ar = I.unstable_cancelCallback, Wa = I.unstable_shouldYield, Ga = I.unstable_requestPaint, Ze = I.unstable_now, nt = I.unstable_getCurrentPriorityLevel, qa = I.unstable_ImmediatePriority, nu = I.unstable_UserBlockingPriority, ru = I.unstable_NormalPriority, hl = I.unstable_LowPriority, Wu = I.unstable_IdlePriority, ml = null, $r = null;
  function $o(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function") try {
      $r.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, fa = 4194304;
  function Ka(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Xa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ka(E) : (d &= m, d !== 0 && (o = Ka(d)));
    } else m = l & ~c, m !== 0 ? o = Ka(m) : d !== 0 && (o = Ka(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function qu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? ((E & l) === 0 || (E & o) !== 0) && (c[m] = qu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ku() {
    var n = yl;
    return yl <<= 1, (yl & 4194240) === 0 && (yl = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Qo, hi, Qe, Zu, ir = !1, mi = [], Dr = null, yi = null, sn = null, $t = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        $t.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ke(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = iu(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = iu(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return $t.set(d, iu($t.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = Je(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ge(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = ke(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Gf() {
    ir = !1, Dr !== null && El(Dr) && (Dr = null), yi !== null && El(yi) && (yi = null), sn !== null && El(sn) && (sn = null), $t.forEach(lu), Sl.forEach(lu);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, Gf)));
  }
  function Ja(n) {
    function r(c) {
      return wa(c, n);
    }
    if (0 < mi.length) {
      wa(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && wa(Dr, n), yi !== null && wa(yi, n), sn !== null && wa(sn, n), $t.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var gi = gt.ReactCurrentBatchConfig, ba = !0;
  function eo(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 1, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 4, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (ba) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), xa(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = ke(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = It(o), n = vu(n), n !== null) if (r = Je(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ge(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (nt()) {
          case qa:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Z() {
    return !0;
  }
  function Le() {
    return !1;
  }
  function le(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Z : Le, this.isPropagationStopped = Le, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Z);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Z);
    }, persist: function() {
    }, isPersistent: Z }), r;
  }
  var ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, vt = le(ze), bt = ie({}, ze, { view: 0, detail: 0 }), nn = le(bt), Qt, lt, Wt, hn = ie({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Qt = n.screenX - Wt.screenX, lt = n.screenY - Wt.screenY) : lt = Qt = 0, Wt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : lt;
  } }), Rl = le(hn), qo = ie({}, hn, { dataTransfer: 0 }), Bi = le(qo), Ko = ie({}, bt, { relatedTarget: 0 }), ou = le(Ko), qf = ie({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = le(qf), Kf = ie({}, ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), nv = le(Kf), Xf = ie({}, ze, { data: 0 }), Jf = le(Xf), rv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Xm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ii(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Xm[n]) ? !!r[n] : !1;
  }
  function Zf() {
    return Ii;
  }
  var ed = ie({}, bt, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), td = le(ed), nd = ie({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), iv = le(nd), sc = ie({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), lv = le(sc), Qr = ie({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = le(Qr), Nn = ie({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $i = le(Nn), rd = [9, 13, 27, 32], ao = ft && "CompositionEvent" in window, Xo = null;
  ft && "documentMode" in document && (Xo = document.documentMode);
  var Jo = ft && "TextEvent" in window && !Xo, uv = ft && (!ao || Xo && 8 < Xo && 11 >= Xo), ov = " ", cc = !1;
  function sv(n, r) {
    switch (n) {
      case "keyup":
        return rd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function fv(n, r) {
    switch (n) {
      case "compositionend":
        return cv(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, ov);
      case "textInput":
        return n = r.data, n === ov && cc ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (io) return n === "compositionend" || !ao && sv(n, r) ? (n = z(), C = h = Za = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return uv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function dv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zm[n.type] : r === "textarea";
  }
  function ad(n, r, l, o) {
    Hi(o), r = as(r, "onChange"), 0 < r.length && (l = new vt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function pv(n) {
    du(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function ey(n, r) {
    if (n === "change") return r;
  }
  var vv = !1;
  if (ft) {
    var id;
    if (ft) {
      var ld = "oninput" in document;
      if (!ld) {
        var hv = document.createElement("div");
        hv.setAttribute("oninput", "return;"), ld = typeof hv.oninput == "function";
      }
      id = ld;
    } else id = !1;
    vv = id && (!document.documentMode || 9 < document.documentMode);
  }
  function mv() {
    Si && (Si.detachEvent("onpropertychange", yv), su = Si = null);
  }
  function yv(n) {
    if (n.propertyName === "value" && Zo(su)) {
      var r = [];
      ad(r, su, n, It(n)), tu(pv, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (mv(), Si = r, su = l, Si.attachEvent("onpropertychange", yv)) : n === "focusout" && mv();
  }
  function gv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(su);
  }
  function ny(n, r) {
    if (n === "click") return Zo(r);
  }
  function Sv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ry;
  function es(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ae.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Ev(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = Ev(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ev(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ay = ft && "documentMode" in document && 11 >= document.documentMode, uo = null, ud = null, ns = null, od = !1;
  function sd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    od || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ud, "onSelect"), 0 < o.length && (r = new vt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, cd = {};
  ft && (cd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in cd) return lr[n] = r[l];
    return n;
  }
  var Cv = vc("animationend"), Rv = vc("animationiteration"), Tv = vc("animationstart"), xv = vc("transitionend"), fd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    fd.set(n, r), $e(r, [n]);
  }
  for (var dd = 0; dd < hc.length; dd++) {
    var fu = hc[dd], iy = fu.toLowerCase(), ly = fu[0].toUpperCase() + fu.slice(1);
    _a(iy, "on" + ly);
  }
  _a(Cv, "onAnimationEnd"), _a(Rv, "onAnimationIteration"), _a(Tv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(xv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), $e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), $e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), $e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), $e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), $e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Pt(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, Ye.forEach(function(l) {
        l !== "selectionchange" && (pd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !_r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var U = d, G = It(l), K = [];
      e: {
        var W = fd.get(n);
        if (W !== void 0) {
          var de = vt, ge = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              de = td;
              break;
            case "focusin":
              ge = "focus", de = ou;
              break;
            case "focusout":
              ge = "blur", de = ou;
              break;
            case "beforeblur":
            case "afterblur":
              de = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              de = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = lv;
              break;
            case Cv:
            case Rv:
            case Tv:
              de = oc;
              break;
            case xv:
              de = Yi;
              break;
            case "scroll":
              de = nn;
              break;
            case "wheel":
              de = $i;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = iv;
          }
          var Ce = (r & 4) !== 0, kn = !Ce && n === "scroll", k = Ce ? W !== null ? W + "Capture" : null : W;
          Ce = [];
          for (var w = U, N; w !== null; ) {
            N = w;
            var q = N.stateNode;
            if (N.tag === 5 && q !== null && (N = q, k !== null && (q = br(w, k), q != null && Ce.push(so(w, q, N)))), kn) break;
            w = w.return;
          }
          0 < Ce.length && (W = new de(W, ge, null, l, G), K.push({ event: W, listeners: Ce }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", de = n === "mouseout" || n === "pointerout", W && l !== en && (ge = l.relatedTarget || l.fromElement) && (vu(ge) || ge[Qi])) break e;
          if ((de || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, de ? (ge = l.relatedTarget || l.toElement, de = U, ge = ge ? vu(ge) : null, ge !== null && (kn = Je(ge), ge !== kn || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (de = null, ge = U), de !== ge)) {
            if (Ce = Rl, q = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = iv, q = "onPointerLeave", k = "onPointerEnter", w = "pointer"), kn = de == null ? W : ti(de), N = ge == null ? W : ti(ge), W = new Ce(q, w + "leave", de, l, G), W.target = kn, W.relatedTarget = N, q = null, vu(G) === U && (Ce = new Ce(k, w + "enter", ge, l, G), Ce.target = N, Ce.relatedTarget = kn, q = Ce), kn = q, de && ge) t: {
              for (Ce = de, k = ge, w = 0, N = Ce; N; N = xl(N)) w++;
              for (N = 0, q = k; q; q = xl(q)) N++;
              for (; 0 < w - N; ) Ce = xl(Ce), w--;
              for (; 0 < N - w; ) k = xl(k), N--;
              for (; w--; ) {
                if (Ce === k || k !== null && Ce === k.alternate) break t;
                Ce = xl(Ce), k = xl(k);
              }
              Ce = null;
            }
            else Ce = null;
            de !== null && bv(K, W, de, Ce, !1), ge !== null && kn !== null && bv(K, kn, ge, Ce, !0);
          }
        }
        e: {
          if (W = U ? ti(U) : window, de = W.nodeName && W.nodeName.toLowerCase(), de === "select" || de === "input" && W.type === "file") var Se = ey;
          else if (dv(W)) if (vv) Se = Sv;
          else {
            Se = gv;
            var Me = ty;
          }
          else (de = W.nodeName) && de.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (Se = ny);
          if (Se && (Se = Se(n, U))) {
            ad(K, Se, l, G);
            break e;
          }
          Me && Me(n, W, U), n === "focusout" && (Me = W._wrapperState) && Me.controlled && W.type === "number" && oa(W, "number", W.value);
        }
        switch (Me = U ? ti(U) : window, n) {
          case "focusin":
            (dv(Me) || Me.contentEditable === "true") && (uo = Me, ud = U, ns = null);
            break;
          case "focusout":
            ns = ud = uo = null;
            break;
          case "mousedown":
            od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            od = !1, sd(K, l, G);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            sd(K, l, G);
        }
        var Ue;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Ie = "onCompositionStart";
              break e;
            case "compositionend":
              Ie = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ie = "onCompositionUpdate";
              break e;
          }
          Ie = void 0;
        }
        else io ? sv(n, l) && (Ie = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ie = "onCompositionStart");
        Ie && (uv && l.locale !== "ko" && (io || Ie !== "onCompositionStart" ? Ie === "onCompositionEnd" && io && (Ue = z()) : (Za = G, h = "value" in Za ? Za.value : Za.textContent, io = !0)), Me = as(U, Ie), 0 < Me.length && (Ie = new Jf(Ie, n, null, l, G), K.push({ event: Ie, listeners: Me }), Ue ? Ie.data = Ue : (Ue = cv(l), Ue !== null && (Ie.data = Ue)))), (Ue = Jo ? fv(n, l) : Jm(n, l)) && (U = as(U, "onBeforeInput"), 0 < U.length && (G = new Jf("onBeforeInput", "beforeinput", null, l, G), K.push({ event: G, listeners: U }), G.data = Ue));
      }
      du(K, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = br(n, l), d != null && o.unshift(so(n, d, c)), d = br(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = br(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = br(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var _v = /\r\n?/g, uy = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(_v, `
`).replace(uy, "");
  }
  function Ec(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(D(425));
  }
  function wl() {
  }
  var is = null, pu = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, vd = typeof clearTimeout == "function" ? clearTimeout : void 0, Dv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dv < "u" ? function(n) {
    return Dv.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ov(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var bl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + bl, ls = "__reactProps$" + bl, Qi = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, oy = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ov(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Ov(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ke(n) {
    return n = n[Ci] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(D(33));
  }
  function mn(n) {
    return n[ls] || null;
  }
  var Ct = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function rn(n) {
    0 > ka || (n.current = Ct[ka], Ct[ka] = null, ka--);
  }
  function be(n, r) {
    ka++, Ct[ka] = n.current, n.current = r;
  }
  var Cr = {}, En = Da(Cr), $n = Da(!1), Wr = Cr;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    rn($n), rn(En);
  }
  function Lv(n, r, l) {
    if (En.current !== Cr) throw Error(D(168));
    be(En, r), be($n, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(D(108, tt(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function Xn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Wr = En.current, be(En, n), be($n, $n.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(D(169));
    l ? (n = os(n, r, Wr), o.__reactInternalMemoizedMergedChildContext = n, rn($n), rn(En), be(En, n)) : rn($n), be($n, l);
  }
  var Ri = null, ho = !1, Wi = !1;
  function wc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    ho = !0, wc(n);
  }
  function Ti() {
    if (!Wi && Ri !== null) {
      Wi = !0;
      var n = 0, r = Lt;
      try {
        var l = Ri;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, ho = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), on(qa, Ti), c;
      } finally {
        Lt = r, Wi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, zn = [], Oa = 0, da = null, xi = 1, wi = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Nv(n, r, l) {
    zn[Oa++] = xi, zn[Oa++] = wi, zn[Oa++] = da, da = n;
    var o = xi;
    n = wi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, xi = 1 << 32 - kr(r) + c | l << c | o, wi = d + n;
    } else xi = 1 << d | l << c | o, wi = n;
  }
  function bc(n) {
    n.return !== null && (hu(n, 1), Nv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, wi = zn[--Oa], zn[Oa] = null, xi = zn[--Oa], zn[Oa] = null;
  }
  var qr = null, Kr = null, dn = !1, La = null;
  function hd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Kr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: xi, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yd(n) {
    if (dn) {
      var r = Kr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (md(n)) throw Error(D(418));
          r = Ei(l.nextSibling);
          var o = qr;
          r && Mv(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (md(n)) throw Error(D(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function kc(n) {
    if (n !== qr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (md(n)) throw ss(), Error(D(418));
      for (; r; ) hd(n, r), r = Ei(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(D(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = qr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Kr; n; ) n = Ei(n.nextSibling);
  }
  function Ll() {
    Kr = qr = null, dn = !1;
  }
  function qi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var sy = gt.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(D(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(D(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(D(284));
      if (!l._owner) throw Error(D(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(D(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(k, w) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [w], k.flags |= 16) : N.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Hl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < w ? (k.flags |= 2, w) : N) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, N, q) {
      return w === null || w.tag !== 6 ? (w = Gd(N, k.mode, q), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function T(k, w, N, q) {
      var Se = N.type;
      return Se === He ? G(k, w, N.props.children, q, N.key) : w !== null && (w.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ot && zv(Se) === w.type) ? (q = c(w, N.props), q.ref = mu(k, w, N), q.return = k, q) : (q = Hs(N.type, N.key, N.props, null, k.mode, q), q.ref = mu(k, w, N), q.return = k, q);
    }
    function U(k, w, N, q) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = sf(N, k.mode, q), w.return = k, w) : (w = c(w, N.children || []), w.return = k, w);
    }
    function G(k, w, N, q, Se) {
      return w === null || w.tag !== 7 ? (w = tl(N, k.mode, q, Se), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function K(k, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Gd("" + w, k.mode, N), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _e:
            return N = Hs(w.type, w.key, w.props, null, k.mode, N), N.ref = mu(k, null, w), N.return = k, N;
          case dt:
            return w = sf(w, k.mode, N), w.return = k, w;
          case Ot:
            var q = w._init;
            return K(k, q(w._payload), N);
        }
        if (qn(w) || Te(w)) return w = tl(w, k.mode, N, null), w.return = k, w;
        Dc(k, w);
      }
      return null;
    }
    function W(k, w, N, q) {
      var Se = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return Se !== null ? null : E(k, w, "" + N, q);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case _e:
            return N.key === Se ? T(k, w, N, q) : null;
          case dt:
            return N.key === Se ? U(k, w, N, q) : null;
          case Ot:
            return Se = N._init, W(
              k,
              w,
              Se(N._payload),
              q
            );
        }
        if (qn(N) || Te(N)) return Se !== null ? null : G(k, w, N, q, null);
        Dc(k, N);
      }
      return null;
    }
    function de(k, w, N, q, Se) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return k = k.get(N) || null, E(w, k, "" + q, Se);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case _e:
            return k = k.get(q.key === null ? N : q.key) || null, T(w, k, q, Se);
          case dt:
            return k = k.get(q.key === null ? N : q.key) || null, U(w, k, q, Se);
          case Ot:
            var Me = q._init;
            return de(k, w, N, Me(q._payload), Se);
        }
        if (qn(q) || Te(q)) return k = k.get(N) || null, G(w, k, q, Se, null);
        Dc(w, q);
      }
      return null;
    }
    function ge(k, w, N, q) {
      for (var Se = null, Me = null, Ue = w, Ie = w = 0, er = null; Ue !== null && Ie < N.length; Ie++) {
        Ue.index > Ie ? (er = Ue, Ue = null) : er = Ue.sibling;
        var zt = W(k, Ue, N[Ie], q);
        if (zt === null) {
          Ue === null && (Ue = er);
          break;
        }
        n && Ue && zt.alternate === null && r(k, Ue), w = d(zt, w, Ie), Me === null ? Se = zt : Me.sibling = zt, Me = zt, Ue = er;
      }
      if (Ie === N.length) return l(k, Ue), dn && hu(k, Ie), Se;
      if (Ue === null) {
        for (; Ie < N.length; Ie++) Ue = K(k, N[Ie], q), Ue !== null && (w = d(Ue, w, Ie), Me === null ? Se = Ue : Me.sibling = Ue, Me = Ue);
        return dn && hu(k, Ie), Se;
      }
      for (Ue = o(k, Ue); Ie < N.length; Ie++) er = de(Ue, k, Ie, N[Ie], q), er !== null && (n && er.alternate !== null && Ue.delete(er.key === null ? Ie : er.key), w = d(er, w, Ie), Me === null ? Se = er : Me.sibling = er, Me = er);
      return n && Ue.forEach(function(Bl) {
        return r(k, Bl);
      }), dn && hu(k, Ie), Se;
    }
    function Ce(k, w, N, q) {
      var Se = Te(N);
      if (typeof Se != "function") throw Error(D(150));
      if (N = Se.call(N), N == null) throw Error(D(151));
      for (var Me = Se = null, Ue = w, Ie = w = 0, er = null, zt = N.next(); Ue !== null && !zt.done; Ie++, zt = N.next()) {
        Ue.index > Ie ? (er = Ue, Ue = null) : er = Ue.sibling;
        var Bl = W(k, Ue, zt.value, q);
        if (Bl === null) {
          Ue === null && (Ue = er);
          break;
        }
        n && Ue && Bl.alternate === null && r(k, Ue), w = d(Bl, w, Ie), Me === null ? Se = Bl : Me.sibling = Bl, Me = Bl, Ue = er;
      }
      if (zt.done) return l(
        k,
        Ue
      ), dn && hu(k, Ie), Se;
      if (Ue === null) {
        for (; !zt.done; Ie++, zt = N.next()) zt = K(k, zt.value, q), zt !== null && (w = d(zt, w, Ie), Me === null ? Se = zt : Me.sibling = zt, Me = zt);
        return dn && hu(k, Ie), Se;
      }
      for (Ue = o(k, Ue); !zt.done; Ie++, zt = N.next()) zt = de(Ue, k, Ie, zt.value, q), zt !== null && (n && zt.alternate !== null && Ue.delete(zt.key === null ? Ie : zt.key), w = d(zt, w, Ie), Me === null ? Se = zt : Me.sibling = zt, Me = zt);
      return n && Ue.forEach(function(mh) {
        return r(k, mh);
      }), dn && hu(k, Ie), Se;
    }
    function kn(k, w, N, q) {
      if (typeof N == "object" && N !== null && N.type === He && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case _e:
            e: {
              for (var Se = N.key, Me = w; Me !== null; ) {
                if (Me.key === Se) {
                  if (Se = N.type, Se === He) {
                    if (Me.tag === 7) {
                      l(k, Me.sibling), w = c(Me, N.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (Me.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ot && zv(Se) === Me.type) {
                    l(k, Me.sibling), w = c(Me, N.props), w.ref = mu(k, Me, N), w.return = k, k = w;
                    break e;
                  }
                  l(k, Me);
                  break;
                } else r(k, Me);
                Me = Me.sibling;
              }
              N.type === He ? (w = tl(N.props.children, k.mode, q, N.key), w.return = k, k = w) : (q = Hs(N.type, N.key, N.props, null, k.mode, q), q.ref = mu(k, w, N), q.return = k, k = q);
            }
            return m(k);
          case dt:
            e: {
              for (Me = N.key; w !== null; ) {
                if (w.key === Me) if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                  l(k, w.sibling), w = c(w, N.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = sf(N, k.mode, q), w.return = k, k = w;
            }
            return m(k);
          case Ot:
            return Me = N._init, kn(k, w, Me(N._payload), q);
        }
        if (qn(N)) return ge(k, w, N, q);
        if (Te(N)) return Ce(k, w, N, q);
        Dc(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, N), w.return = k, k = w) : (l(k, w), w = Gd(N, k.mode, q), w.return = k, k = w), m(k)) : l(k, w);
    }
    return kn;
  }
  var xn = yu(!0), se = yu(!1), pa = Da(null), Xr = null, mo = null, gd = null;
  function Sd() {
    gd = mo = Xr = null;
  }
  function Ed(n) {
    var r = pa.current;
    rn(pa), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Xr = n, gd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (An = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (gd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Xr === null) throw Error(D(308));
      mo = n, Xr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Rd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Td(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Rd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function xd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Nl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Rt & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Rd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Av(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = U : E.next = U, G.lastBaseUpdate = T));
    }
    if (d !== null) {
      var K = c.baseState;
      m = 0, G = U = T = null, E = d;
      do {
        var W = E.lane, de = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: de,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch (W = r, de = l, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  K = ge.call(de, K, W);
                  break e;
                }
                K = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, W = typeof ge == "function" ? ge.call(de, K, W) : ge, W == null) break e;
                K = ie({}, K, W);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else de = { eventTime: de, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (U = G = de, T = K) : G = G.next = de, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (T = K), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = K;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(D(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, bi = Da(fs), ds = Da(fs), ps = Da(fs);
  function Su(n) {
    if (n === fs) throw Error(D(174));
    return n;
  }
  function bd(n, r) {
    switch (be(ps, r), be(ds, n), be(bi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(bi), be(bi, r);
  }
  function Eu() {
    rn(bi), rn(ds), rn(ps);
  }
  function jv(n) {
    Su(ps.current);
    var r = Su(bi.current), l = sa(r, n.type);
    r !== l && (be(ds, n), be(bi, l));
  }
  function Lc(n) {
    ds.current === n && (rn(bi), rn(ds));
  }
  var gn = Da(0);
  function Nc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var vs = [];
  function De() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var ct = gt.ReactCurrentDispatcher, Nt = gt.ReactCurrentBatchConfig, Gt = 0, Mt = null, Un = null, Jn = null, Mc = !1, hs = !1, Cu = 0, Q = 0;
  function Dt() {
    throw Error(D(321));
  }
  function je(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Gt = d, Mt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ct.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(D(301));
        d += 1, Jn = Un = null, r.updateQueue = null, ct.current = qc, n = l(o, c);
      } while (hs);
    }
    if (ct.current = bu, r = Un !== null && Un.next !== null, Gt = 0, Jn = Un = Mt = null, Mc = !1, r) throw Error(D(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function wn() {
    if (Un === null) {
      var n = Mt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Jn === null ? Mt.memoizedState : Jn.next;
    if (r !== null) Jn = r, Un = n;
    else {
      if (n === null) throw Error(D(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(D(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var G = U.lane;
        if ((Gt & G) === G) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var K = {
            lane: G,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = K, m = o) : T = T.next = K, Mt.lanes |= G, Oi |= G;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Mt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(D(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = Mt, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, jc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(D(349));
      (Gt & 30) !== 0 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = wu.bind(null, Mt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return wn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Rr();
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && je(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Ic(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Yc(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function xu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function $c(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, xu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function _d(n, r, l) {
    return (Gt & 21) === 0 ? (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l) : (ei(l, r) || (l = Ku(), Mt.lanes |= l, Oi |= l, n.baseState = !0), r);
  }
  function Ss(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Nt.transition;
    Nt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Nt.transition = o;
    }
  }
  function kd() {
    return wn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) Fv(r, l);
    else if (l = Td(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), Xt(l, r, o);
    }
  }
  function wu(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) Fv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Rd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Td(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Xt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Mt || r !== null && r === Mt;
  }
  function Fv(n, r) {
    hs = Mc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Xt(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var bu = { readContext: Na, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Gc = { readContext: Na, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: Ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      xu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Mt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Mt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(D(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(D(349));
      (Gt & 30) !== 0 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = wi, o = xi;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Q++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Na,
    useCallback: Qc,
    useContext: Na,
    useEffect: ms,
    useImperativeHandle: $c,
    useInsertionEffect: Yc,
    useLayoutEffect: ys,
    useMemo: Wc,
    useReducer: zl,
    useRef: Bc,
    useState: function() {
      return zl(Xi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = wn();
      return _d(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Xi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: kd,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Na, useCallback: Qc, useContext: Na, useEffect: ms, useImperativeHandle: $c, useInsertionEffect: Yc, useLayoutEffect: ys, useMemo: Wc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(Xi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : _d(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Xi)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: kd, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Kc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Je(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Ki(o, c);
    d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Li(n), c = Ki(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Nl(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function Hv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = Mn(r) ? Wr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Kc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Pv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Kc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, xd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = Mn(r) ? Wr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Kc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += ut(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Od(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jc = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, Ou = o), Ld(n, r);
    }, l;
  }
  function Nd(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Md(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = my.bind(null, n, r, l), r.then(n, n));
  }
  function Bv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Nl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Ts = gt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? se(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Zr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && bc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, et(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function et(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Iv(n, r, l, o, c);
  }
  function xs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, be(Co, ma), ma |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, be(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, be(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, be(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function zd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Iv(n, r, l, o, c) {
    var d = Mn(l) ? Wr : En.current;
    return d = Gr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && bc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Yv(n, r, l, o, c) {
    if (Mn(l)) {
      var d = !0;
      Xn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Ma(n, r), Xc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Na(U) : (U = Mn(l) ? Wr : En.current, U = Gr(r, U));
      var G = l.getDerivedStateFromProps, K = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Pv(r, m, o, U), ha = !1;
      var W = r.memoizedState;
      m.state = W, cs(r, o, m, c), T = r.memoizedState, E !== o || W !== T || $n.current || ha ? (typeof G == "function" && (Dd(r, l, G, o), T = r.memoizedState), (E = ha || Hv(r, l, E, o, W, T, U)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Uv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ri(r.type, E), m.props = U, K = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Na(T) : (T = Mn(l) ? Wr : En.current, T = Gr(r, T));
      var de = l.getDerivedStateFromProps;
      (G = typeof de == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== K || W !== T) && Pv(r, m, o, T), ha = !1, W = r.memoizedState, m.state = W, cs(r, o, m, c);
      var ge = r.memoizedState;
      E !== K || W !== ge || $n.current || ha ? (typeof de == "function" && (Dd(r, l, de, o), ge = r.memoizedState), (U = ha || Hv(r, l, U, o, W, ge, T) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ws(n, r, l, o, d, c);
  }
  function ws(n, r, l, o, c, d) {
    zd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xc(r, l, !1), za(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && xc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Lv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Lv(n, r.context, !1), bd(n, r.containerInfo);
  }
  function $v(n, r, l, o, c) {
    return Ll(), qi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ud(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), be(gn, c & 1), n === null)
      return yd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ud(l), r.memoizedState = Zc, n) : Ad(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ud(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ad(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && qi(o), xn(r, n.child, null, l), n = Ad(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Od(Error(D(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && xn(r, n.child, null, m), r.child.memoizedState = Ud(m), r.memoizedState = Zc, d);
    if ((r.mode & 1) === 0) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(D(419)), o = Od(d, o, void 0), bs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, An || E) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return Qd(), o = Od(Error(D(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Ei(c.nextSibling), qr = r, dn = !0, La = null, n !== null && (zn[Oa++] = xi, zn[Oa++] = wi, zn[Oa++] = da, xi = n.id, wi = n.overflow, da = r), r = Ad(r, o.children), r.flags |= 4096, r);
  }
  function jd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, (o & 2) !== 0) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && jd(n, l, r);
        else if (n.tag === 19) jd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (be(gn, o), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Nc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Nc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ma(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(D(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ll();
        break;
      case 5:
        jv(r);
        break;
      case 1:
        Mn(r.type) && Xn(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        be(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (be(gn, gn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? ef(n, r, l) : (be(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        be(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), be(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xs(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, jn, Wv, Gv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, Wv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      un(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (We.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (We.hasOwnProperty(U) ? (T != null && U === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Gv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Zn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function qv(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Zn(r), null;
      case 1:
        return Mn(r.type) && vo(), Zn(r), null;
      case 3:
        return o = r.stateNode, Eu(), rn($n), rn(En), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, La !== null && (Lu(La), La = null))), jn(n, r), Zn(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Wv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(D(166));
            return Zn(r), null;
          }
          if (n = Su(bi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Pt(rs[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Vn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Pt("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : We.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), ci(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[ls] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Kn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Vn(n, o), c = nr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = In(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Zt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && te(n, T) : typeof T == "number" && te(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (We.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && Ke(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), ci(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + at(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) Gv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(D(166));
          if (l = Su(ps.current), Su(bi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return Zn(r), null;
      case 13:
        if (rn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Kr !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(D(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(D(317));
              d[Ci] = r;
            } else Ll(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else La !== null && (Lu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (gn.current & 1) !== 0 ? _n === 0 && (_n = 3) : Qd())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Eu(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return Ed(r.type._context), Zn(r), null;
      case 17:
        return Mn(r.type) && vo(), Zn(r), null;
      case 19:
        if (rn(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (_n !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (m = Nc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return be(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ze() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Nc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Zn(r), null;
          } else 2 * Ze() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ze(), r.sibling = null, l = gn.current, be(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return $d(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (ma & 1073741824) !== 0 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(D(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Mn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), rn($n), rn(En), De(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (rn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(D(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(gn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Ed(r.type._context), null;
      case 22:
      case 23:
        return $d(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, Tr = !1, cy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Kv = !1;
  function Xv(n, r) {
    if (is = ba, n = ts(), dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, G = 0, K = n, W = null;
          t: for (; ; ) {
            for (var de; K !== l || c !== 0 && K.nodeType !== 3 || (E = m + c), K !== d || o !== 0 && K.nodeType !== 3 || (T = m + o), K.nodeType === 3 && (m += K.nodeValue.length), (de = K.firstChild) !== null; )
              W = K, K = de;
            for (; ; ) {
              if (K === n) break t;
              if (W === l && ++U === c && (E = m), W === d && ++G === o && (T = m), (de = K.nextSibling) !== null) break;
              K = W, W = K.parentNode;
            }
            K = de;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, ba = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ge = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ge !== null) {
              var Ce = ge.memoizedProps, kn = ge.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ri(r.type, Ce), kn);
              k.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(D(163));
        }
      } catch (q) {
        pn(r, r.return, q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ge = Kv, Kv = !1, ge;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Fd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ls], delete r[us], delete r[po], delete r[oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ns(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ns(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var bn = null, Nr = !1;
  function Mr(n, r, l) {
    for (l = l.child; l !== null; ) Jv(n, r, l), l = l.sibling;
  }
  function Jv(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function") try {
      $r.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || Eo(l, r);
      case 6:
        var o = bn, c = Nr;
        bn = null, Mr(n, r, l), bn = o, Nr = c, bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Nr, bn = l.stateNode.containerInfo, Nr = !0, Mr(n, r, l), bn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Mr(n, r, l);
        break;
      case 1:
        if (!Tr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        Mr(n, r, l);
        break;
      case 21:
        Mr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Mr(n, r, l), Tr = o) : Mr(n, r, l);
        break;
      default:
        Mr(n, r, l);
    }
  }
  function Zv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new cy()), r.forEach(function(o) {
        var c = oh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              bn = E.stateNode, Nr = !1;
              break e;
            case 3:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (bn === null) throw Error(D(160));
        Jv(d, m, c), bn = null, Nr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        pn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Hd(r, n), r = r.sibling;
  }
  function Hd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            Os(3, n, n.return), Ls(3, n);
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
          try {
            Os(5, n, n.return);
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            te(c, "");
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Kn(E, m);
            var U = Kn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var G = T[m], K = T[m + 1];
              G === "style" ? Zt(c, K) : G === "dangerouslySetInnerHTML" ? fi(c, K) : G === "children" ? te(c, K) : Ke(c, G, K, U);
            }
            switch (E) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var de = d.value;
                de != null ? Rn(c, !!d.multiple, de, !1) : W !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(D(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (Ce) {
          pn(n, n.return, Ce);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bd = Ze())), o & 4 && Zv(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (U = Tr) || G, ai(r, n), Tr = U) : ai(r, n), ea(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !G && (n.mode & 1) !== 0) for (he = n, G = n.child; G !== null; ) {
            for (K = he = G; he !== null; ) {
              switch (W = he, de = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, W, W.return);
                  break;
                case 1:
                  Eo(W, W.return);
                  var ge = W.stateNode;
                  if (typeof ge.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                    } catch (Ce) {
                      pn(o, l, Ce);
                    }
                  }
                  break;
                case 5:
                  Eo(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Ms(K);
                    continue;
                  }
              }
              de !== null ? (de.return = W, he = de) : Ms(K);
            }
            G = G.sibling;
          }
          e: for (G = null, K = n; ; ) {
            if (K.tag === 5) {
              if (G === null) {
                G = K;
                try {
                  c = K.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = K.stateNode, T = K.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Ce) {
                  pn(n, n.return, Ce);
                }
              }
            } else if (K.tag === 6) {
              if (G === null) try {
                K.stateNode.nodeValue = U ? "" : K.memoizedProps;
              } catch (Ce) {
                pn(n, n.return, Ce);
              }
            } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === n) && K.child !== null) {
              K.child.return = K, K = K.child;
              continue;
            }
            if (K === n) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === n) break e;
              G === K && (G = null), K = K.return;
            }
            G === K && (G = null), K.sibling.return = K.return, K = K.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && Zv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ns(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(D(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (te(c, ""), o.flags &= -33);
            var d = Ji(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ji(n);
            ki(n, E, m);
            break;
          default:
            throw Error(D(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fy(n, r, l) {
    he = n, Pd(n);
  }
  function Pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = Ds;
          var U = Tr;
          if (Ds = m, (Tr = T) && !U) for (he = c; he !== null; ) m = he, T = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : T !== null ? (T.return = m, he = T) : Vd(c);
          for (; d !== null; ) he = d, Pd(d), d = d.sibling;
          he = c, Ds = E, Tr = U;
        }
        eh(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, he = d) : eh(n);
    }
  }
  function eh(n) {
    for (; he !== null; ) {
      var r = he;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                wd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var G = U.memoizedState;
                  if (G !== null) {
                    var K = G.dehydrated;
                    K !== null && Ja(K);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
          Tr || r.flags & 512 && Fd(r);
        } catch (W) {
          pn(r, r.return, W);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Ms(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Vd(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Fd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Fd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        he = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, he = E;
        break;
      }
      he = r.return;
    }
  }
  var dy = Math.ceil, Al = gt.ReactCurrentDispatcher, Du = gt.ReactCurrentOwner, or = gt.ReactCurrentBatchConfig, Rt = 0, Wn = null, Fn = null, sr = 0, ma = 0, Co = Da(0), _n = 0, zs = null, Oi = 0, Ro = 0, af = 0, Us = null, ta = null, Bd = 0, To = 1 / 0, ya = null, xo = !1, Ou = null, jl = null, lf = !1, Zi = null, As = 0, Fl = 0, wo = null, js = -1, xr = 0;
  function Hn() {
    return (Rt & 6) !== 0 ? Ze() : js !== -1 ? js : js = Ze();
  }
  function Li(n) {
    return (n.mode & 1) === 0 ? 1 : (Rt & 2) !== 0 && sr !== 0 ? sr & -sr : sy.transition !== null ? (xr === 0 && (xr = Ku()), xr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n);
  }
  function zr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, wo = null, Error(D(185));
    Pi(n, l, o), ((Rt & 2) === 0 || n !== Wn) && (n === Wn && ((Rt & 2) === 0 && (Ro |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && Rt === 0 && (r.mode & 1) === 0 && (To = Ze() + 500, ho && Ti()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Xa(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l(Id.bind(null, n)) : wc(Id.bind(null, n)), co(function() {
        (Rt & 6) === 0 && Ti();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
            break;
          default:
            l = ru;
        }
        l = ch(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, xr = 0, (Rt & 6) !== 0) throw Error(D(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Xa(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r) r = of(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = nh();
      (Wn !== n || sr !== r) && (ya = null, To = Ze() + 500, el(n, r));
      do
        try {
          rh();
          break;
        } catch (E) {
          th(n, E);
        }
      while (!0);
      Sd(), Al.current = d, Rt = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, el(n, 0), ii(n, o), na(n, Ze()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !py(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, el(n, 0), ii(n, o), na(n, Ze()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            Mu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Bd + 500 - Ze(), 10 < r)) {
              if (Xa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Mu.bind(null, n, ta, ya), r);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ze() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * dy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Mu.bind(null, n, ta, ya), o);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 5:
            Mu(n, ta, ya);
            break;
          default:
            throw Error(D(329));
        }
      }
    }
    return na(n, Ze()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function py(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Id(n) {
    if ((Rt & 6) !== 0) throw Error(D(327));
    bo();
    var r = Xa(n, 0);
    if ((r & 1) === 0) return na(n, Ze()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, el(n, 0), ii(n, r), na(n, Ze()), l;
    if (l === 6) throw Error(D(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, ta, ya), na(n, Ze()), null;
  }
  function Yd(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (To = Ze() + 500, ho && Ti());
    }
  }
  function Nu(n) {
    Zi !== null && Zi.tag === 0 && (Rt & 6) === 0 && bo();
    var r = Rt;
    Rt |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, Rt = r, (Rt & 6) === 0 && Ti();
    }
  }
  function $d() {
    ma = Co.current, rn(Co);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, vd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), rn($n), rn(En), De();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          rn(gn);
          break;
        case 19:
          rn(gn);
          break;
        case 10:
          Ed(o.type._context);
          break;
        case 22:
        case 23:
          $d();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Hl(n.current, null), sr = ma = r, _n = 0, zs = null, af = Ro = Oi = 0, ta = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function th(n, r) {
    do {
      var l = Fn;
      try {
        if (Sd(), ct.current = bu, Mc) {
          for (var o = Mt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Mc = !1;
        }
        if (Gt = 0, Jn = Un = Mt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, G = E, K = G.tag;
            if ((G.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var de = Bv(m);
            if (de !== null) {
              de.flags &= -257, Ul(de, m, E, d, r), de.mode & 1 && Md(d, U, r), r = de, T = U;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(T), r.updateQueue = Ce;
              } else ge.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                Md(d, U, r), Qd();
                break e;
              }
              T = Error(D(426));
            }
          } else if (dn && E.mode & 1) {
            var kn = Bv(m);
            if (kn !== null) {
              (kn.flags & 65536) === 0 && (kn.flags |= 256), Ul(kn, m, E, d, r), qi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), _n !== 4 && (_n = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Vv(d, T, r);
                Av(d, k);
                break e;
              case 1:
                E = T;
                var w = d.type, N = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (jl === null || !jl.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = Nd(d, E, r);
                  Av(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (Se) {
        r = Se, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function Qd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || (Oi & 268435455) === 0 && (Ro & 268435455) === 0 || ii(Wn, sr);
  }
  function of(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = nh();
    (Wn !== n || sr !== r) && (ya = null, el(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        th(n, c);
      }
    while (!0);
    if (Sd(), Rt = l, Al.current = o, Fn !== null) throw Error(D(261));
    return Wn = null, sr = 0, _n;
  }
  function vy() {
    for (; Fn !== null; ) ah(Fn);
  }
  function rh() {
    for (; Fn !== null && !Wa(); ) ah(Fn);
  }
  function ah(n) {
    var r = sh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : Fn = r, Du.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = qv(l, r, ma), l !== null) {
          Fn = l;
          return;
        }
      } else {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function Mu(n, r, l) {
    var o = Lt, c = or.transition;
    try {
      or.transition = null, Lt = 1, hy(n, r, l, o);
    } finally {
      or.transition = c, Lt = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      bo();
    while (Zi !== null);
    if ((Rt & 6) !== 0) throw Error(D(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(D(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === Wn && (Fn = Wn = null, sr = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || lf || (lf = !0, ch(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var E = Rt;
      Rt |= 4, Du.current = null, Xv(n, l), Hd(l, n), lo(pu), ba = !!is, pu = is = null, n.current = l, fy(l), Ga(), Rt = E, Lt = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Zi = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), $o(l.stateNode), na(n, Ze()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Ou, Ou = null, n;
    return (As & 1) !== 0 && n.tag !== 0 && bo(), d = n.pendingLanes, (d & 1) !== 0 ? n === wo ? Fl++ : (Fl = 0, wo = n) : Fl = 0, Ti(), null;
  }
  function bo() {
    if (Zi !== null) {
      var n = Ju(As), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, As = 0, (Rt & 6) !== 0) throw Error(D(331));
          var c = Rt;
          for (Rt |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if ((he.flags & 16) !== 0) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (he = U; he !== null; ) {
                    var G = he;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, G, d);
                    }
                    var K = G.child;
                    if (K !== null) K.return = G, he = K;
                    else for (; he !== null; ) {
                      G = he;
                      var W = G.sibling, de = G.return;
                      if (rf(G), G === U) {
                        he = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = de, he = W;
                        break;
                      }
                      he = de;
                    }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var kn = Ce.sibling;
                      Ce.sibling = null, Ce = kn;
                    } while (Ce !== null);
                  }
                }
                he = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, he = k;
                break e;
              }
              he = d.return;
            }
          }
          var w = n.current;
          for (he = w; he !== null; ) {
            m = he;
            var N = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && N !== null) N.return = m, he = N;
            else e: for (m = w; he !== null; ) {
              if (E = he, (E.flags & 2048) !== 0) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (Se) {
                pn(E, E.return, Se);
              }
              if (E === m) {
                he = null;
                break e;
              }
              var q = E.sibling;
              if (q !== null) {
                q.return = E.return, he = q;
                break e;
              }
              he = E.return;
            }
          }
          if (Rt = c, Ti(), $r && typeof $r.onPostCommitFiberRoot == "function") try {
            $r.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, or.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = _u(l, r), r = Vv(n, r, 1), n = Nl(n, r, 1), r = Hn(), n !== null && (Pi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = _u(l, n), n = Nd(r, n, 1), r = Nl(r, n, 1), n = Hn(), r !== null && (Pi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function my(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > Ze() - Bd ? el(n, 0) : af |= l), na(n, r);
  }
  function uh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = fa, fa <<= 1, (fa & 130023424) === 0 && (fa = 4194304)));
    var l = Hn();
    n = va(n, r), n !== null && (Pi(n, r, l), na(n, l));
  }
  function yy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), uh(n, l);
  }
  function oh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(D(314));
    }
    o !== null && o.delete(r), uh(n, l);
  }
  var sh;
  sh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || $n.current) An = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return An = !1, _s(n, r, l);
      An = (n.flags & 131072) !== 0;
    }
    else An = !1, dn && (r.flags & 1048576) !== 0 && Nv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ma(n, r), n = r.pendingProps;
        var c = Gr(r, En.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mn(o) ? (d = !0, Xn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, xd(r), c.updater = Kc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && bc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ma(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = ri(o, n), c) {
            case 0:
              r = Iv(null, r, o, n, l);
              break e;
            case 1:
              r = Yv(null, r, o, n, l);
              break e;
            case 11:
              r = Zr(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(D(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Iv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Yv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(D(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Uv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(D(423)), r), r = $v(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(D(424)), r), r = $v(n, r, o, l, c);
            break e;
          } else for (Kr = Ei(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, La = null, l = se(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return jv(r), n === null && yd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), zd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && yd(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Zr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, be(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !$n.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Ki(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var G = U.pending;
                      G === null ? T.next = T : (T.next = G.next, G.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Cd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(D(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Cd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Na(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), ku(n, r, o, c, l);
      case 15:
        return et(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Ma(n, r), r.tag = 1, Mn(o) ? (n = !0, Xn(r)) : n = !1, yn(r, l), Xc(r, o, c), Rs(r, o, c, l), ws(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return xs(n, r, l);
    }
    throw Error(D(156, r.tag));
  };
  function ch(n, r) {
    return on(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return tl(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = Aa(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case Oe:
        return n = Aa(13, l, r, c), n.elementType = Oe, n.lanes = d, n;
      case jt:
        return n = Aa(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Re:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Jt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(D(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Re, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Gd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function fh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new fh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xd(d), n;
  }
  function Ey(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: dt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Je(n) !== n || n.tag !== 1) throw Error(D(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(D(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mn(l)) return os(n, l, r);
    }
    return r;
  }
  function dh(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = qd(null), l = n.current, o = Hn(), c = Li(l), d = Ki(o, c), d.callback = r ?? null, Nl(l, d, c), n.current.lanes = c, Pi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Li(c);
    return l = qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Nl(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function ph() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(D(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Nu(function() {
        ff(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Qe();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Jd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vh() {
  }
  function Cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = df(m);
          d.call(U);
        };
      }
      var m = dh(r, o, n, 0, null, !1, !1, "", vh);
      return n._reactRootContainer = m, n[Qi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Nu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = df(T);
        E.call(U);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", vh);
    return n._reactRootContainer = T, n[Qi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Nu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = Cy(l, r, n, c, o);
    return df(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ka(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), na(r, Ze()), (Rt & 6) === 0 && (To = Ze() + 500, Ti()));
        }
        break;
      case 13:
        Nu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      pf(n, r);
    }
  }, Qe = function() {
    return Lt;
  }, Zu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(D(90));
              wr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, eu = Yd, pl = Nu;
  var Ry = { usingClientEntryPoint: !1, Events: [ke, ti, mn, Hi, Zl, Yd] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(hh), $r = Vl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(r)) throw Error(D(200));
    return Ey(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Jd(n)) throw Error(D(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(D(188)) : (n = Object.keys(n).join(","), Error(D(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Nu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(D(200));
    return Ps(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Jd(n)) throw Error(D(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = dh(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(D(200));
    return Ps(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(D(40));
    return n._reactRootContainer ? (Nu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Yd, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(D(200));
    if (n == null || n._reactInternals === void 0) throw Error(D(38));
    return Ps(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function ok() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = tv(), I = cT(), D = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = !1;
    function We(e) {
      Ye = e;
    }
    function $e(e) {
      if (!Ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ft("warn", e, a);
      }
    }
    function S(e) {
      if (!Ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ft("error", e, a);
      }
    }
    function ft(e, t, a) {
      {
        var i = D.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ae = 0, Y = 1, Be = 2, J = 3, ye = 4, oe = 5, Fe = 6, ht = 7, yt = 8, fn = 9, mt = 10, Ke = 11, gt = 12, _e = 13, dt = 14, He = 15, an = 16, Ht = 17, Jt = 18, ln = 19, _t = 21, Oe = 22, jt = 23, kt = 24, Ot = 25, Re = !0, ee = !1, Te = !1, ie = !1, _ = !1, P = !0, Pe = !0, Ae = !0, ut = !0, rt = /* @__PURE__ */ new Set(), tt = {}, at = {};
    function ot(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      tt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), tt[e] = t;
      {
        var a = e.toLowerCase();
        at[a] = e, e === "onDoubleClick" && (at.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        rt.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wr = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function Yr(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function ci(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    var In = 0, gr = 1, Ya = 2, Ln = 3, Sr = 4, sa = 5, $a = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", te = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xe = new RegExp("^[" + fi + "][" + te + "]*$"), it = {}, Ft = {};
    function Zt(e) {
      return wr.call(Ft, e) ? !0 : wr.call(it, e) ? !1 : xe.test(e) ? (Ft[e] = !0, !0) : (it[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === In)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case $a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function It(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      Yt[e] = new It(
        e,
        In,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        $a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new It(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Er = /[\-\:]([a-z])/g, Ta = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new It(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    Yt[Hi] = new It(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new It(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Zl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!Zt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function br(e, t, a, i) {
      var u = en(t);
      if (!vn(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (Zt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, x;
          b === Ln || b === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), st = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Wa = Symbol.iterator, Ga = "@@iterator";
    function Ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wa && e[Wa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, qa = 0, nu, ru, hl, Wu, ml, $r, $o;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function lc() {
      {
        if (qa === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Wu = console.error, ml = console.group, $r = console.groupCollapsed, $o = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
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
        qa++;
      }
    }
    function uc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, e, {
              value: nu
            }),
            info: nt({}, e, {
              value: ru
            }),
            warn: nt({}, e, {
              value: hl
            }),
            error: nt({}, e, {
              value: Wu
            }),
            group: nt({}, e, {
              value: ml
            }),
            groupCollapsed: nt({}, e, {
              value: $r
            }),
            groupEnd: nt({}, e, {
              value: $o
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = D.ReactCurrentDispatcher, yl;
    function fa(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Ka = !1, Xa;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Xa = new qu();
    }
    function au(e, t) {
      if (!e || Ka)
        return "";
      {
        var a = Xa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ka = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Xa.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ka = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? fa(x) : "";
      return typeof e == "function" && Xa.set(e, M), M;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Ku(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ue:
          return fa("Suspense");
        case me:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return Ku(e.render);
          case Je:
            return Pi(e.type, t, a);
          case Ge: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case _e:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case ae:
        case Be:
        case He:
          return Ku(e.type);
        case Ke:
          return Ku(e.type.render);
        case Y:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Wf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Lt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case rr:
          return "Portal";
        case pi:
          return "Profiler";
        case Qa:
          return "StrictMode";
        case ue:
          return "Suspense";
        case me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ju(t) + ".Consumer";
          case vi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case $:
            return Lt(e, e.render, "ForwardRef");
          case Je:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Ge: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function Qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case fn:
          var i = a;
          return hi(i) + ".Consumer";
        case mt:
          var u = a;
          return hi(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Ke:
          return Qo(a, a.render, "ForwardRef");
        case ht:
          return "Fragment";
        case oe:
          return a;
        case ye:
          return "Portal";
        case J:
          return "Root";
        case Fe:
          return "Text";
        case an:
          return wt(a);
        case yt:
          return a === Qa ? "StrictMode" : "Mode";
        case Oe:
          return "Offscreen";
        case gt:
          return "Profiler";
        case _t:
          return "Scope";
        case _e:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case Y:
        case ae:
        case Ht:
        case Be:
        case dt:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = D.ReactDebugCurrentFrame, ir = null, mi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Qe(e);
      }
      return null;
    }
    function yi() {
      return ir === null ? "" : Vi(ir);
    }
    function sn() {
      Zu.getCurrentStack = null, ir = null, mi = !1;
    }
    function $t(e) {
      Zu.getCurrentStack = e === null ? null : yi, ir = e, mi = !1;
    }
    function Sl() {
      return ir;
    }
    function Yn(e) {
      mi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function xa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Gf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wa(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      El(e) || (e._valueTracker = wa(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Gf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ba(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Za(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && br(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, u) : t.hasOwnProperty("defaultValue") && Le(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), Z(a, t);
    }
    function Z(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ba(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var le = !1, ze = !1, vt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ze || (ze = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vt || (vt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !le && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), le = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Or(xa(t.value)));
    }
    var Qt = Array.isArray;
    function lt(e) {
      return Qt(e);
    }
    var Wt;
    Wt = !1;
    function hn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function qo(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = lt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(xa(a)), b = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          b === null && !u[x].disabled && (b = u[x]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Ko(e, t) {
      return nt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wt = !0);
    }
    function qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var nv = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !nv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), nv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (lt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: xa(i)
      };
    }
    function rv(e, t) {
      var a = e, i = xa(t.value), u = xa(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Xm(e, t) {
      rv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/1998/Math/MathML", ed = "http://www.w3.org/2000/svg";
    function td(e) {
      switch (e) {
        case "svg":
          return ed;
        case "math":
          return Zf;
        default:
          return Ii;
      }
    }
    function nd(e, t) {
      return e == null || e === Ii ? td(t) : e === ed && t === "foreignObject" ? Ii : e;
    }
    var iv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, lv = iv(function(e, t) {
      if (e.namespaceURI === ed && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Yi = 3, Nn = 8, $i = 9, rd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Jo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jo).forEach(function(e) {
      ov.forEach(function(t) {
        Jo[uv(t, e)] = Jo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var sv = /([A-Z])/g, cv = /^ms-/;
    function io(e) {
      return e.replace(sv, "-$1").toLowerCase().replace(cv, "-ms-");
    }
    var fv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, Zm = /^-ms-/, dv = /-(.)/g, ad = /;\s*$/, Si = {}, su = {}, pv = !1, Zo = !1, ey = function(e) {
        return e.replace(dv, function(t, a) {
          return a.toUpperCase();
        });
      }, vv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ey(e.replace(Zm, "ms-"))
        ));
      }, id = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ld = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ad, "")));
      }, hv = function(e, t) {
        pv || (pv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fv = function(e, t) {
        e.indexOf("-") > -1 ? vv(e) : Jm.test(e) ? id(e) : ad.test(t) && ld(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mv(e, t));
      };
    }
    var yv = fv;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function gv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || yv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ry(e, t) {
      {
        if (!t)
          return;
        var a = Sv(e), i = Sv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, es = nt({
      menuitem: !0
    }, ei), Ev = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ts = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, ay = new RegExp("^(aria)-[" + te + "]*$"), uo = new RegExp("^(aria)[A-Z][" + te + "]*$");
    function ud(e, t) {
      {
        if (wr.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ay.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ud(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function od(e, t) {
      Tl(e, t) || ns(e, t);
    }
    var sd = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !sd && (sd = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var lr = {}, cd = /^on./, vc = /^on[^A-Z]/, Cv = new RegExp("^(aria)-[" + te + "]*$"), Rv = new RegExp("^(aria)[A-Z][" + te + "]*$");
      cu = function(e, t, a, i) {
        if (wr.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (cd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (cd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Cv.test(t) || Rv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = en(t), y = v !== null && v.type === In;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Tv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function xv(e, t, a) {
      Tl(e, t) || Tv(e, t, a);
    }
    var fd = 1, hc = 2, _a = 4, dd = fd | hc | _a, fu = null;
    function iy(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ly() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function pd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var mc = null, du = null, Pt = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function wv() {
      return du !== null || Pt !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, xl = !1;
    function bv() {
      var e = wv();
      e && (as(), Sc());
    }
    function _v(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return so(e, t, a);
      } finally {
        xl = !1, bv();
      }
    }
    function uy(e, t, a) {
      so = e, as = a;
    }
    function kv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && kv(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (On)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var vd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, x = !0, M = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          vd.removeEventListener(H, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ce = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          b = !0, F(), a.apply(i, ce), x = !1;
        }
        var we, xt = !1, St = !1;
        function O(L) {
          if (we = L.error, xt = !0, we === null && L.colno === 0 && L.lineno === 0 && (St = !0), L.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), vd.addEventListener(H, Ne, !1), g.initEvent(H, !1, !1), vd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && x && (xt ? St && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", O), !b)
          return F(), Cc.apply(this, arguments);
      };
    }
    var Dv = Rc, co = !1, Tc = null, fo = !1, Ei = null, Ov = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, Dv.apply(Ov, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Ei = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Ei;
        throw fo = !1, Ei = null, e;
      }
    }
    function Qi() {
      return co;
    }
    function us() {
      if (co) {
        var e = Tc;
        return co = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function oy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), be = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), $n = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Mn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Lv = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Xn = (
      /*                */
      65536
    ), xc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), wc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | $n | 0
    ), Dl = mn | Ct | ka | Da | En | Gr | Mn, Ol = Ct | rn | En | Mn, Gi = Wr | ka, zn = Wi | wc | ho, Oa = D.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Gr)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function xi(e) {
      if (e.tag === _e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return da(e) === e;
    }
    function Nv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === Y) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? da(u) === u : !1;
    }
    function bc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return bc(s), e;
            if (v === u)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = _c(e);
      return t !== null ? Kr(t) : null;
    }
    function Kr(e) {
      if (e.tag === oe || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Kr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = _c(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === oe || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ye) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = I.unstable_scheduleCallback, Mv = I.unstable_cancelCallback, md = I.unstable_shouldYield, yd = I.unstable_requestPaint, Qn = I.unstable_now, kc = I.unstable_getCurrentPriorityLevel, ss = I.unstable_ImmediatePriority, Ll = I.unstable_UserBlockingPriority, qi = I.unstable_NormalPriority, sy = I.unstable_LowPriority, mu = I.unstable_IdlePriority, Dc = I.unstable_yieldValue, zv = I.unstable_setDisableYieldValue, yu = null, xn = null, se = null, pa = !1, Xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Pe && (e = nt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Na
        })), yu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & be) === be;
          if (Ae) {
            var i;
            switch (t) {
              case Lr:
                i = ss;
                break;
              case _i:
                i = Ll;
                break;
              case Ma:
                i = qi;
                break;
              case za:
                i = mu;
                break;
              default:
                i = qi;
                break;
            }
            xn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Cd(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Dc == "function" && (zv(e), We(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      se = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Fv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Rd(e) {
      se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(e);
    }
    function Td() {
      se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
    }
    function va(e) {
      se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
    }
    function ha() {
      se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
    }
    function xd(e) {
      se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(e);
    }
    function Uv() {
      se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped();
    }
    function Ki(e) {
      se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nl() {
      se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(e);
    }
    function Av() {
      se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(e);
    }
    function ps() {
      se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
    }
    function Su(e) {
      se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(e);
    }
    function bd() {
      se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped();
    }
    function Eu(e) {
      se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
    }
    function jv() {
      se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded();
    }
    function Lc() {
      se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
    }
    function gn(e) {
      se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(e);
    }
    function Nc(e, t) {
      se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Nt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Mt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : hs, Jn = Math.log, Mc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Mc | 0) | 0;
    }
    var Cu = 31, Q = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), je = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), jc = (
      /*                        */
      1024
    ), Fc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), Ic = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), xu = (
      /*                             */
      4194304
    ), $c = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
      /*                             */
      67108864
    ), _d = xu, Ss = (
      /*          */
      134217728
    ), kd = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), wu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function Fv(e) {
      {
        if (e & je)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & wu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Xt = -1, bu = Ru, Gc = xu;
    function Cs(e) {
      switch (Ul(e)) {
        case je:
          return je;
        case Ml:
          return Ml;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Xi:
          return Xi;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return e & zl;
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case wu:
          return wu;
        case Jr:
          return Jr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function qc(e, t) {
      var a = e.pendingLanes;
      if (a === Q)
        return Q;
      var i = Q, u = e.suspendedLanes, s = e.pingedLanes, f = a & kd;
      if (f !== Q) {
        var p = f & ~u;
        if (p !== Q)
          i = Cs(p);
        else {
          var v = f & s;
          v !== Q && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== Q ? i = Cs(y) : s !== Q && (i = Cs(s));
      }
      if (i === Q)
        return Q;
      if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Q) {
        var g = Ul(i), b = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (b & zl) !== Q
        )
          return t;
      }
      (i & ni) !== Q && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== Q)
        for (var M = e.entanglements, A = i & x; A > 0; ) {
          var F = An(A), ce = 1 << F;
          i |= M[F], A &= ~ce;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Dd(e, t) {
      switch (e) {
        case je:
        case Ml:
        case ni:
          return t + 250;
        case Rr:
        case wn:
        case Xi:
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return t + 5e3;
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          return Xt;
        case Ss:
        case Es:
        case wu:
        case Jr:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Kc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === Q || (v & u) !== Q) && (s[p] = Dd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Hv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== Q ? t : t & Jr ? Jr : Q;
    }
    function Pv(e) {
      return (e & je) !== Q;
    }
    function Rs(e) {
      return (e & kd) !== Q;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Od(e) {
      var t = je | ni | wn;
      return (e & t) === Q;
    }
    function Ld(e) {
      return (e & zl) === e;
    }
    function Jc(e, t) {
      var a = Ml | ni | Rr | wn;
      return (t & a) !== Q;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== Q;
    }
    function Nd(e) {
      return (e & zl) !== Q;
    }
    function Md() {
      var e = bu;
      return bu <<= 1, (bu & zl) === Q && (bu = Ru), e;
    }
    function Bv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === Q && (Gc = xu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ts(e) {
      return Ul(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function Zr(e, t) {
      return (e & t) !== Q;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function zd(e, t) {
      return e & t;
    }
    function Iv(e) {
      return e;
    }
    function Yv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== wu && (e.suspendedLanes = Q, e.pingedLanes = Q);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function $v(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ud(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Q, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ad(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ni:
          i = Ml;
          break;
        case wn:
          i = Rr;
          break;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          i = Xi;
          break;
        case wu:
          i = Es;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function bs(e, t, a) {
      if (Xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Qv(e, t) {
      if (Xr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function jd(e, t) {
      return null;
    }
    var Lr = je, _i = ni, Ma = wn, za = wu, _s = Dt;
    function Ua() {
      return _s;
    }
    function jn(e) {
      _s = e;
    }
    function Wv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Gv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function qv(e) {
      var t = Ul(e);
      return Zn(Lr, t) ? Zn(_i, t) ? Rs(t) ? Ma : za : _i : Lr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function Tr(e) {
      Ds = e;
    }
    function cy(e) {
      Ds(e);
    }
    var he;
    function Eo(e) {
      he = e;
    }
    var nf;
    function Kv(e) {
      nf = e;
    }
    var Xv;
    function Os(e) {
      Xv = e;
    }
    var Ls;
    function Fd(e) {
      Ls = e;
    }
    var rf = !1, Ns = [], Ji = null, ki = null, Di = null, bn = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Mr = [], Jv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Zv(e) {
      return Jv.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && he(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function fy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = ea(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = ea(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ea(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ea(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Nr.set(b, ea(Nr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Pd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var u = xi(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function eh(e) {
      for (var t = Xv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mr.length && Zn(t, Mr[i].priority); i++)
        ;
      Mr.splice(i, 0, a), i === 0 && Pd(a);
    }
    function Ms(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), ly();
        } else {
          var f = Do(i);
          return f !== null && he(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ms(e) && a.delete(t);
    }
    function dy() {
      rf = !1, Ji !== null && Ms(Ji) && (Ji = null), ki !== null && Ms(ki) && (ki = null), Di !== null && Ms(Di) && (Di = null), bn.forEach(Vd), Nr.forEach(Vd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, dy)));
    }
    function Du(e) {
      if (Ns.length > 0) {
        Al(Ns[0], e);
        for (var t = 1; t < Ns.length; t++) {
          var a = Ns[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && Al(Ji, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      bn.forEach(i), Nr.forEach(i);
      for (var u = 0; u < Mr.length; u++) {
        var s = Mr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Mr.length > 0; ) {
        var f = Mr[0];
        if (f.blockedOn !== null)
          break;
        Pd(f), f.blockedOn === null && Mr.shift();
      }
    }
    var or = D.ReactCurrentBatchConfig, Rt = !0;
    function Wn(e) {
      Rt = !!e;
    }
    function Fn() {
      return Rt;
    }
    function sr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Lr:
          u = ma;
          break;
        case _i:
          u = Co;
          break;
        case Ma:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(Lr), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(_i), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      Rt && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, Oi, a), Hd(e, i);
        return;
      }
      if (fy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Hd(e, i), t & _a && Zv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && cy(s);
          var f = Ro(e, t, a, i);
          if (f === null && Dy(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var Oi = null;
    function Ro(e, t, a, i) {
      Oi = null;
      var u = pd(i), s = Ys(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === _e) {
            var v = xi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (tf(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function af(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Lr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _i;
        case "message": {
          var t = kc();
          switch (t) {
            case ss:
              return Lr;
            case Ll:
              return _i;
            case qi:
            case sy:
              return Ma;
            case mu:
              return za;
            default:
              return Ma;
          }
        }
        default:
          return Ma;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Bd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, xo = null, Ou = null;
    function jl(e) {
      return ya = e, xo = As(), !0;
    }
    function lf() {
      ya = null, xo = null, Ou = null;
    }
    function Zi() {
      if (Ou)
        return Ou;
      var e, t = xo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function js() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = wo : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: wo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = xr(Hn), zr = nt({}, Hn, {
      view: 0,
      detail: 0
    }), na = xr(zr), uf, Fs, Lu;
    function py(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var ii = nt({}, zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (py(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Id = xr(ii), Yd = nt({}, ii, {
      dataTransfer: 0
    }), Nu = xr(Yd), $d = nt({}, zr, {
      relatedTarget: 0
    }), el = xr($d), th = nt({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nh = xr(th), Qd = nt({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = xr(Qd), vy = nt({}, Hn, {
      data: 0
    }), rh = xr(vy), ah = rh, ih = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Mu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function hy(e) {
      if (e.key) {
        var t = ih[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var bo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function lh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return lh;
    }
    var my = nt({}, zr, {
      key: hy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), uh = xr(my), yy = nt({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), oh = xr(yy), sh = nt({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), ch = xr(sh), gy = nt({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = xr(gy), Wd = nt({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Sy = xr(Wd), Hl = [9, 13, 27, 32], Hs = 229, tl = On && "CompositionEvent" in window, Pl = null;
    On && "documentMode" in document && (Pl = document.documentMode);
    var Gd = On && "TextEvent" in window && !Pl, sf = On && (!tl || Pl && Pl > 8 && Pl <= 11), fh = 32, cf = String.fromCharCode(fh);
    function Ey() {
      ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ot("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ot("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ot("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qd = !1;
    function dh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function Kd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ph(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = ff(t) : zu ? Kd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !ph(i) && (!zu && s === "onCompositionStart" ? zu = jl(u) : s === "onCompositionEnd" && zu && (f = Zi()));
      var p = Eh(a, s);
      if (p.length > 0) {
        var v = new rh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== fh ? null : (qd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && qd ? null : i;
        default:
          return null;
      }
    }
    function Jd(e, t) {
      if (zu) {
        if (e === "compositionend" || !tl && Kd(e, t)) {
          var a = Zi();
          return lf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!dh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !ph(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Gd ? s = vf(t, i) : s = Jd(t, i), !s)
        return null;
      var f = Eh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ah("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function vh(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var Cy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Cy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ry(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      ot("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function hh(e, t, a, i) {
      oo(i);
      var u = Eh(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      hh(t, n, e, pd(e)), _v(o, t);
    }
    function o(e) {
      bE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Ry("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", U);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", U), Vl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function K(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function de(e, t) {
      if (e === "click")
        return c(t);
    }
    function ge(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ce(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = ge : (v = K, y = G) : W(p) && (v = de), v) {
        var g = v(t, a);
        if (g) {
          hh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ce(p);
    }
    function k() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || dp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (x = a, M = A ? Ys(A) : null, M !== null) {
            var F = da(M);
            (M !== F || M.tag !== oe && M.tag !== Fe) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var ce = Id, Ne = "onMouseLeave", we = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ce = oh, Ne = "onPointerLeave", we = "onPointerEnter", xt = "pointer");
          var St = x == null ? g : Cf(x), O = M == null ? g : Cf(M), H = new ce(Ne, xt + "leave", x, i, u);
          H.target = St, H.relatedTarget = O;
          var L = null, X = Ys(u);
          if (X === a) {
            var ve = new ce(we, xt + "enter", M, i, u);
            ve.target = O, ve.relatedTarget = St, L = ve;
          }
          NT(e, H, L, x, M);
        }
      }
    }
    function N(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var q = typeof Object.is == "function" ? Object.is : N;
    function Se(e, t) {
      if (q(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!wr.call(t, s) || !q(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ue(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ie(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(Ue(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          b = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ie(e, f), g = Ie(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function mh(e) {
      return e && e.nodeType === Yi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : mh(e) ? !1 : mh(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function hT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (hT(t))
          e = t.contentWindow;
        else
          return t;
        t = ba(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? gT(e) : null
      };
    }
    function yT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && vT(a)) {
        i !== null && Ty(a) && ST(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function gT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function ST(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var ET = On && "documentMode" in document && document.documentMode <= 11;
    function CT() {
      ot("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, xy = null, Zd = null, wy = !1;
    function RT(e) {
      if ("selectionStart" in e && Ty(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function TT(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = TT(a);
      if (!(wy || mf == null || mf !== ba(i))) {
        var u = RT(mf);
        if (!Zd || !Se(Zd, u)) {
          Zd = u;
          var s = Eh(xy, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function xT(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, xy = a, Zd = null);
          break;
        case "focusout":
          mf = null, xy = null, Zd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          wy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wy = !1, yE(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (ET)
            break;
        // falls through
        case "keydown":
        case "keyup":
          yE(e, i, u);
      }
    }
    function yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: yh("Animation", "AnimationEnd"),
      animationiteration: yh("Animation", "AnimationIteration"),
      animationstart: yh("Animation", "AnimationStart"),
      transitionend: yh("Transition", "TransitionEnd")
    }, by = {}, gE = {};
    On && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function gh(e) {
      if (by[e])
        return by[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return by[e] = t[a];
      return e;
    }
    var SE = gh("animationend"), EE = gh("animationiteration"), CE = gh("animationstart"), RE = gh("transitionend"), TE = /* @__PURE__ */ new Map(), xE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      TE.set(e, t), ot(t, [e]);
    }
    function wT() {
      for (var e = 0; e < xE.length; e++) {
        var t = xE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(SE, "onAnimationEnd"), _o(EE, "onAnimationIteration"), _o(CE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(RE, "onTransitionEnd");
    }
    function bT(e, t, a, i, u, s, f) {
      var p = TE.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = uh;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Id;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Nu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ch;
            break;
          case SE:
          case EE:
          case CE:
            v = nh;
            break;
          case RE:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = Sy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = oh;
            break;
        }
        var g = (s & _a) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = OT(a, p, i.type, g, b);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    wT(), k(), Vs(), CT(), Ey();
    function _T(e, t, a, i, u, s, f) {
      bT(e, t, a, i, u, s);
      var p = (s & dd) === 0;
      p && (w(e, t, a, i, u), kn(e, t, a, i, u), xT(e, t, a, i, u), vh(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function wE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function kT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          wE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          wE(e, M, x), i = b;
        }
    }
    function bE(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        kT(s, f, a);
      }
      ls();
    }
    function DT(e, t, a, i, u) {
      var s = pd(a), f = [];
      _T(f, e, i, a, s, t), bE(f, t);
    }
    function Sn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = iw(t), u = MT(e);
      i.has(u) || (_E(t, e, hc, a), i.add(u));
    }
    function ky(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), _E(a, e, i, t);
    }
    var Sh = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[Sh]) {
        e[Sh] = !0, rt.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[Sh] || (t[Sh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function _E(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Bd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function kE(e, t) {
      return e === t || e.nodeType === Nn && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if ((t & fd) === 0 && (t & hc) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === ye) {
              var y = p.stateNode.containerInfo;
              if (kE(y, f))
                break;
              if (v === ye)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === J || b === ye) {
                    var x = g.stateNode.containerInfo;
                    if (kE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Ys(y);
                if (M === null)
                  return;
                var A = M.tag;
                if (A === oe || A === Fe) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      _v(function() {
        return DT(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function OT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, M = b.tag;
        if (M === oe && x !== null && (g = x, p !== null)) {
          var A = wl(y, p);
          A != null && v.push(np(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Eh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = wl(u, t);
          g != null && i.push(np(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function LT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function DE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === oe && g !== null) {
          var x = g;
          if (u) {
            var M = wl(p, s);
            M != null && f.unshift(np(p, M, x));
          } else if (!u) {
            var A = wl(p, s);
            A != null && f.push(np(p, A, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function NT(e, t, a, i, u) {
      var s = i && u ? LT(i, u) : null;
      i !== null && DE(e, t, i, s, !1), u !== null && a !== null && DE(e, a, u, s, !0);
    }
    function MT(e, t) {
      return e + "__bubble";
    }
    var ja = !1, rp = "dangerouslySetInnerHTML", Ch = "suppressContentEditableWarning", ko = "suppressHydrationWarning", OE = "autoFocus", Bs = "children", Is = "style", Rh = "__html", Oy, Th, ap, LE, xh, NE, ME;
    Oy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Th = function(e, t) {
      od(e, t), pc(e, t), xv(e, t, {
        registrationNameDependencies: tt,
        possibleRegistrationNames: at
      });
    }, NE = On && !document.documentMode, ap = function(e, t, a) {
      if (!ja) {
        var i = wh(a), u = wh(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LE = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, xh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, ME = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var zT = /\r\n?/g, UT = /\u0000|\uFFFD/g;
    function wh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(zT, `
`).replace(UT, "");
    }
    function bh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Re))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function AT() {
    }
    function _h(e) {
      e.onclick = AT;
    }
    function jT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), gv(t, f);
          else if (s === rp) {
            var p = f ? f[Rh] : void 0;
            p != null && lv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Ch || s === ko || s === OE || (tt.hasOwnProperty(s) ? f != null && (typeof f != "function" && xh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function FT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Is ? gv(e, f) : s === rp ? lv(e, f) : s === Bs ? ao(e, f) : br(e, s, f, i);
      }
    }
    function HT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
      if (p === Ii && (p = td(e)), p === Ii) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(Oy, e) && (Oy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function PT(e, t) {
      return zE(t).createTextNode(e);
    }
    function VT(e, t, a, i) {
      var u = Tl(t, a);
      Th(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ep.length; f++)
            Sn(ep[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Za(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Jf(e, a), s = Xf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), jT(t, e, i, s, u), t) {
        case "input":
          Ja(e), z(e, a, !1);
          break;
        case "textarea":
          Ja(e), av(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && _h(e);
          break;
      }
    }
    function BT(e, t, a, i, u) {
      Th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && _h(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === Bs || v === Ch || v === ko || v === OE || (tt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Is)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === rp) {
            var A = x ? x[Rh] : void 0, F = M ? M[Rh] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Ch || v === ko || (tt.hasOwnProperty(v) ? (x != null && (typeof x != "function" && xh(v, x), v === "onScroll" && Sn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ry(g, p[Is]), (s = s || []).push(Is, g)), s;
    }
    function IT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (FT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function YT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function $T(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Th(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ep.length; y++)
            Sn(ep[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Za(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Jf(e, a), Sn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var x = g[b].name.toLowerCase();
          switch (x) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Bs)
            typeof F == "string" ? e.textContent !== F && (a[ko] !== !0 && bh(e.textContent, F, s, f), M = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[ko] !== !0 && bh(e.textContent, F, s, f), M = [Bs, "" + F]);
          else if (tt.hasOwnProperty(A))
            F != null && (typeof F != "function" && xh(A, F), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ce = void 0, Ne = en(A);
            if (a[ko] !== !0) {
              if (!(A === Ch || A === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var we = e.innerHTML, xt = F ? F[Rh] : void 0;
                  if (xt != null) {
                    var St = ME(e, xt);
                    St !== we && ap(A, we, St);
                  }
                } else if (A === Is) {
                  if (v.delete(A), NE) {
                    var O = ty(F);
                    ce = e.getAttribute("style"), O !== ce && ap(A, ce, O);
                  }
                } else if (p && !_)
                  v.delete(A.toLowerCase()), ce = tu(e, A, F), F !== ce && ap(A, ce, F);
                else if (!vn(A, Ne, p) && !Kn(A, F, Ne, p)) {
                  var H = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), ce = vl(e, A, F, Ne);
                  else {
                    var L = i;
                    if (L === Ii && (L = td(t)), L === Ii)
                      v.delete(A.toLowerCase());
                    else {
                      var X = YT(A);
                      X !== null && X !== A && (H = !0, v.delete(X)), v.delete(A);
                    }
                    ce = tu(e, A, F);
                  }
                  var ve = _;
                  !ve && F !== ce && !H && ap(A, ce, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && LE(v), t) {
        case "input":
          Ja(e), z(e, a, !0);
          break;
        case "textarea":
          Ja(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _h(e);
          break;
      }
      return M;
    }
    function QT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (ja)
          return;
        ja = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function WT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Xm(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var ip = function() {
    }, lp = function() {
    };
    {
      var GT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], qT = UE.concat(["button"]), KT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = nt({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), qT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), GT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var XT = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return KT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, JT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, jE = {};
      ip = function(e, t, a) {
        a = a || AE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = XT(e, u) ? null : i, f = s ? null : JT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!jE[y]) {
            jE[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var kh = "suppressHydrationWarning", Dh = "$", Oh = "/$", up = "$?", op = "$!", ZT = "style", Uy = null, Ay = null;
    function ex(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case rd: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : nd(null, "");
          break;
        }
        default: {
          var s = i === Nn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = nd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function tx(e, t, a) {
      {
        var i = e, u = nd(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function wk(e) {
      return e;
    }
    function nx(e) {
      Uy = Fn(), Ay = mT();
      var t = null;
      return Wn(!1), t;
    }
    function rx(e) {
      yT(Ay), Wn(Uy), Uy = null, Ay = null;
    }
    function ax(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = HT(e, t, a, s);
      return fp(u, y), Yy(y, t), y;
    }
    function ix(e, t) {
      e.appendChild(t);
    }
    function lx(e, t, a, i, u) {
      switch (VT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function ux(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return BT(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ox(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = PT(e, t);
      return fp(i, s), s;
    }
    function sx() {
      var e = window.event;
      return e === void 0 ? Ma : af(e.type);
    }
    var Fy = typeof setTimeout == "function" ? setTimeout : void 0, cx = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, FE = typeof Promise == "function" ? Promise : void 0, fx = typeof queueMicrotask == "function" ? queueMicrotask : typeof FE < "u" ? function(e) {
      return FE.resolve(null).then(e).catch(dx);
    } : Fy;
    function dx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function px(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vx(e, t, a, i, u, s) {
      IT(e, t, a, i, u), Yy(e, u);
    }
    function HE(e) {
      ao(e, "");
    }
    function hx(e, t, a) {
      e.nodeValue = a;
    }
    function mx(e, t) {
      e.appendChild(t);
    }
    function yx(e, t) {
      var a;
      e.nodeType === Nn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _h(a);
    }
    function gx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Sx(e, t, a) {
      e.nodeType === Nn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Ex(e, t) {
      e.removeChild(t);
    }
    function Cx(e, t) {
      e.nodeType === Nn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Py(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Nn) {
          var s = u.data;
          if (s === Oh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === Dh || s === up || s === op) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function Rx(e, t) {
      e.nodeType === Nn ? Py(e.parentNode, t) : e.nodeType === Qr && Py(e, t), Du(e);
    }
    function Tx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function xx(e) {
      e.nodeValue = "";
    }
    function wx(e, t) {
      e = e;
      var a = t[ZT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function bx(e, t) {
      e.nodeValue = t;
    }
    function _x(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function kx(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Dx(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function Ox(e) {
      return e.nodeType !== Nn ? null : e;
    }
    function PE(e) {
      return e.data === up;
    }
    function Vy(e) {
      return e.data === op;
    }
    function Lx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Nx(e, t) {
      e._reactRetry = t;
    }
    function Lh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Yi)
          break;
        if (t === Nn) {
          var a = e.data;
          if (a === Dh || a === op || a === up)
            break;
          if (a === Oh)
            return null;
        }
      }
      return e;
    }
    function sp(e) {
      return Lh(e.nextSibling);
    }
    function Mx(e) {
      return Lh(e.firstChild);
    }
    function zx(e) {
      return Lh(e.firstChild);
    }
    function Ux(e) {
      return Lh(e.nextSibling);
    }
    function Ax(e, t, a, i, u, s, f) {
      fp(s, e), Yy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ct) !== De;
      return $T(e, t, a, p, i, y, f);
    }
    function jx(e, t, a, i) {
      return fp(a, e), a.mode & ct, QT(e, t);
    }
    function Fx(e, t) {
      fp(t, e);
    }
    function Hx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Oh) {
            if (a === 0)
              return sp(t);
            a--;
          } else (i === Dh || i === op || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function VE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Dh || i === op || i === up) {
            if (a === 0)
              return t;
            a--;
          } else i === Oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Px(e) {
      Du(e);
    }
    function Vx(e) {
      Du(e);
    }
    function Bx(e) {
      return e !== "head" && e !== "body";
    }
    function Ix(e, t, a, i) {
      var u = !0;
      bh(t.nodeValue, a, i, u);
    }
    function Yx(e, t, a, i, u, s) {
      if (t[kh] !== !0) {
        var f = !0;
        bh(i.nodeValue, u, s, f);
      }
    }
    function $x(e, t) {
      t.nodeType === Qr ? Ly(e, t) : t.nodeType === Nn || Ny(e, t);
    }
    function Qx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Ly(a, t) : t.nodeType === Nn || Ny(a, t));
      }
    }
    function Wx(e, t, a, i, u) {
      (u || t[kh] !== !0) && (i.nodeType === Qr ? Ly(a, i) : i.nodeType === Nn || Ny(a, i));
    }
    function Gx(e, t, a) {
      My(e, t);
    }
    function qx(e, t) {
      zy(e, t);
    }
    function Kx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function Xx(e, t) {
      {
        var a = e.parentNode;
        a !== null && zy(a, t);
      }
    }
    function Jx(e, t, a, i, u, s) {
      (s || t[kh] !== !0) && My(a, i);
    }
    function Zx(e, t, a, i, u) {
      (u || t[kh] !== !0) && zy(a, i);
    }
    function ew(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tw(e) {
      tp(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, By = "__reactProps$" + Sf, cp = "__reactContainer$" + Sf, Iy = "__reactEvents$" + Sf, nw = "__reactListeners$" + Sf, rw = "__reactHandles$" + Sf;
    function aw(e) {
      delete e[Ef], delete e[By], delete e[Iy], delete e[nw], delete e[rw];
    }
    function fp(e, t) {
      t[Ef] = e;
    }
    function Nh(e, t) {
      t[cp] = e;
    }
    function BE(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function Ys(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = VE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = VE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[cp];
      return t && (t.tag === oe || t.tag === Fe || t.tag === _e || t.tag === J) ? t : null;
    }
    function Cf(e) {
      if (e.tag === oe || e.tag === Fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[By] || null;
    }
    function Yy(e, t) {
      e[By] = t;
    }
    function iw(e) {
      var t = e[Iy];
      return t === void 0 && (t = e[Iy] = /* @__PURE__ */ new Set()), t;
    }
    var IE = {}, YE = D.ReactDebugCurrentFrame;
    function zh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        YE.setExtraStackFrame(a);
      } else
        YE.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(wr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (zh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), zh(null)), p instanceof Error && !(p.message in IE) && (IE[p.message] = !0, zh(u), S("Failed %s type: %s", a, p.message), zh(null));
          }
      }
    }
    var $y = [], Uh;
    Uh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Uh[Uu] && S("Unexpected Fiber popped."), e.current = $y[Uu], $y[Uu] = null, Uh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, $y[Uu] = e.current, Uh[Uu] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var li = {};
    Object.freeze(li);
    var Au = Oo(li), Il = Oo(!1), Wy = li;
    function Rf(e, t, a) {
      return a && Yl(t) ? Wy : Au.current;
    }
    function $E(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Qe(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && $E(e, t, s), s;
      }
    }
    function Ah() {
      return Il.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function jh(e) {
      ra(Il, e), ra(Au, e);
    }
    function Gy(e) {
      ra(Il, e), ra(Au, e);
    }
    function QE(e, t, a) {
      {
        if (Au.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Au, t, e), aa(Il, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Qe(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Qe(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return nt({}, a, f);
      }
    }
    function Fh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Wy = Au.current, aa(Au, a, e), aa(Il, Il.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Il, e), ra(Au, e), aa(Au, u, e), aa(Il, a, e);
        } else
          ra(Il, e), aa(Il, a, e);
      }
    }
    function lw(e) {
      {
        if (!hu(e) || e.tag !== Y)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case Y: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Hh = 1, ju = null, qy = !1, Ky = !1;
    function qE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function uw(e) {
      qy = !0, qE(e);
    }
    function KE() {
      qy && No();
    }
    function No() {
      if (!Ky && ju !== null) {
        Ky = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = ju;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, qy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), hd(ss, No), s;
        } finally {
          jn(t), Ky = !1;
        }
      }
      return null;
    }
    var xf = [], wf = 0, Ph = null, Vh = 0, Ni = [], Mi = 0, $s = null, Fu = 1, Hu = "";
    function ow(e) {
      return Ws(), (e.flags & Ri) !== ke;
    }
    function sw(e) {
      return Ws(), Vh;
    }
    function cw() {
      var e = Hu, t = Fu, a = t & ~fw(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), xf[wf++] = Vh, xf[wf++] = Ph, Ph = e, Vh = t;
    }
    function XE(e, t, a) {
      Ws(), Ni[Mi++] = Fu, Ni[Mi++] = Hu, Ni[Mi++] = $s, $s = e;
      var i = Fu, u = Hu, s = Bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, M = s - y, A = Bh(t) + M, F = p << M, ce = F | x, Ne = b + u;
        Fu = 1 << A | ce, Hu = Ne;
      } else {
        var we = p << s, xt = we | f, St = u;
        Fu = 1 << v | xt, Hu = St;
      }
    }
    function Xy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), XE(e, a, i);
      }
    }
    function Bh(e) {
      return 32 - Un(e);
    }
    function fw(e) {
      return 1 << Bh(e) - 1;
    }
    function Jy(e) {
      for (; e === Ph; )
        Ph = xf[--wf], xf[wf] = null, Vh = xf[--wf], xf[wf] = null;
      for (; e === $s; )
        $s = Ni[--Mi], Ni[Mi] = null, Hu = Ni[--Mi], Ni[Mi] = null, Fu = Ni[--Mi], Ni[Mi] = null;
    }
    function dw() {
      return Ws(), $s !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function pw(e, t) {
      Ws(), Ni[Mi++] = Fu, Ni[Mi++] = Hu, Ni[Mi++] = $s, Fu = t.id, Hu = t.overflow, $s = e;
    }
    function Ws() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, zi = null, rl = !1, Gs = !1, Mo = null;
    function vw() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Gs = !0;
    }
    function hw() {
      return Gs;
    }
    function mw(e) {
      var t = e.stateNode.containerInfo;
      return zi = zx(t), Ur = e, rl = !0, Mo = null, Gs = !1, !0;
    }
    function yw(e, t, a) {
      return zi = Ux(t), Ur = e, rl = !0, Mo = null, Gs = !1, a !== null && pw(e, a), !0;
    }
    function ZE(e, t) {
      switch (e.tag) {
        case J: {
          $x(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & ct) !== De;
          Wx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && Qx(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      ZE(e, t);
      var a = C_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, Gx(a, i);
                break;
              case Fe:
                var u = t.pendingProps;
                qx(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ct) !== De;
                Jx(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Fe: {
                var b = t.pendingProps, x = (e.mode & ct) !== De;
                Zx(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var M = e.memoizedState, A = M.dehydrated;
            if (A !== null) switch (t.tag) {
              case oe:
                var F = t.type;
                t.pendingProps, Kx(A, F);
                break;
              case Fe:
                var ce = t.pendingProps;
                Xx(A, ce);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function tC(e, t) {
      t.flags = t.flags & ~Gr | mn, Zy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = kx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, zi = Mx(i), !0) : !1;
        }
        case Fe: {
          var u = e.pendingProps, s = Dx(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, zi = null, !0) : !1;
        }
        case _e: {
          var f = Ox(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: dw(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = R_(f);
            return v.return = e, e.child = v, Ur = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & ct) !== De && (e.flags & be) === ke;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          eg(e) && (Zy(Ur, e), tg()), tC(Ur, e), rl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          eg(e) && (Zy(Ur, e), tg()), t = sp(a);
          var i = Ur;
          if (!t || !nC(e, t)) {
            tC(Ur, e), rl = !1, Ur = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function gw(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Ax(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Sw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jx(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== De;
              Ix(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ct) !== De;
              Yx(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Ew(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Fx(a, e);
    }
    function Cw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Hx(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== J && t.tag !== _e; )
        t = t.return;
      Ur = t;
    }
    function Ih(e) {
      if (e !== Ur)
        return !1;
      if (!rl)
        return rC(e), rl = !0, !1;
      if (e.tag !== J && (e.tag !== oe || Bx(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (eg(e))
            aC(e), tg();
          else
            for (; t; )
              eC(e, t), t = sp(t);
      }
      return rC(e), e.tag === _e ? zi = Cw(e) : zi = Ur ? sp(e.stateNode) : null, !0;
    }
    function Rw() {
      return rl && zi !== null;
    }
    function aC(e) {
      for (var t = zi; t; )
        ZE(e, t), t = sp(t);
    }
    function bf() {
      Ur = null, zi = null, rl = !1, Gs = !1;
    }
    function iC() {
      Mo !== null && (J0(Mo), Mo = null);
    }
    function Ar() {
      return rl;
    }
    function rg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var Tw = D.ReactCurrentBatchConfig, xw = null;
    function ww() {
      return Tw.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var bw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Ks = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          e.add(Qe(x) || "Component"), Ks.add(x.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          t.add(Qe(x) || "Component"), Ks.add(x.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          a.add(Qe(x) || "Component"), Ks.add(x.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          i.add(Qe(x) || "Component"), Ks.add(x.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(x) {
          u.add(Qe(x) || "Component"), Ks.add(x.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(x) {
          s.add(Qe(x) || "Component"), Ks.add(x.type);
        }), gp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          $e(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          $e(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = qs(u);
          $e(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = bw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Qe(s) || "Component"), lC.add(s.type);
            });
            var u = qs(i);
            try {
              $t(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              sn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Yh = /* @__PURE__ */ new Map();
      };
    }
    var ag, ig, lg, ug, og, uC = function(e, t) {
    };
    ag = !1, ig = !1, lg = {}, ug = {}, og = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Qe(t) || "Component";
        ug[a] || (ug[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _w(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Y) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_w(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Qe(e) || "Component";
          lg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Y)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var x = v.refs;
            b === null ? delete x[y] : x[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function $h(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qh(e) {
      {
        var t = Qe(e) || "Component";
        if (og[t])
          return;
        og[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function oC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function sC(e) {
      function t(O, H) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [H], O.flags |= ka) : L.push(H);
        }
      }
      function a(O, H) {
        if (!e)
          return null;
        for (var L = H; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, H) {
        for (var L = /* @__PURE__ */ new Map(), X = H; X !== null; )
          X.key !== null ? L.set(X.key, X) : L.set(X.index, X), X = X.sibling;
        return L;
      }
      function u(O, H) {
        var L = ic(O, H);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, H, L) {
        if (O.index = L, !e)
          return O.flags |= Ri, H;
        var X = O.alternate;
        if (X !== null) {
          var ve = X.index;
          return ve < H ? (O.flags |= mn, H) : ve;
        } else
          return O.flags |= mn, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= mn), O;
      }
      function p(O, H, L, X) {
        if (H === null || H.tag !== Fe) {
          var ve = rE(L, O.mode, X);
          return ve.return = O, ve;
        } else {
          var fe = u(H, L);
          return fe.return = O, fe;
        }
      }
      function v(O, H, L, X) {
        var ve = L.type;
        if (ve === di)
          return g(O, H, L.props.children, X, L.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        vR(H, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ge && oC(ve) === H.type)) {
          var fe = u(H, L.props);
          return fe.ref = Sp(O, H, L), fe.return = O, fe._debugSource = L._source, fe._debugOwner = L._owner, fe;
        }
        var Ve = nE(L, O.mode, X);
        return Ve.ref = Sp(O, H, L), Ve.return = O, Ve;
      }
      function y(O, H, L, X) {
        if (H === null || H.tag !== ye || H.stateNode.containerInfo !== L.containerInfo || H.stateNode.implementation !== L.implementation) {
          var ve = aE(L, O.mode, X);
          return ve.return = O, ve;
        } else {
          var fe = u(H, L.children || []);
          return fe.return = O, fe;
        }
      }
      function g(O, H, L, X, ve) {
        if (H === null || H.tag !== ht) {
          var fe = Yo(L, O.mode, X, ve);
          return fe.return = O, fe;
        } else {
          var Ve = u(H, L);
          return Ve.return = O, Ve;
        }
      }
      function b(O, H, L) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var X = rE("" + H, O.mode, L);
          return X.return = O, X;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case _r: {
              var ve = nE(H, O.mode, L);
              return ve.ref = Sp(O, null, H), ve.return = O, ve;
            }
            case rr: {
              var fe = aE(H, O.mode, L);
              return fe.return = O, fe;
            }
            case Ge: {
              var Ve = H._payload, Xe = H._init;
              return b(O, Xe(Ve), L);
            }
          }
          if (lt(H) || Ze(H)) {
            var Kt = Yo(H, O.mode, L, null);
            return Kt.return = O, Kt;
          }
          $h(O, H);
        }
        return typeof H == "function" && Qh(O), null;
      }
      function x(O, H, L, X) {
        var ve = H !== null ? H.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return ve !== null ? null : p(O, H, "" + L, X);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case _r:
              return L.key === ve ? v(O, H, L, X) : null;
            case rr:
              return L.key === ve ? y(O, H, L, X) : null;
            case Ge: {
              var fe = L._payload, Ve = L._init;
              return x(O, H, Ve(fe), X);
            }
          }
          if (lt(L) || Ze(L))
            return ve !== null ? null : g(O, H, L, X, null);
          $h(O, L);
        }
        return typeof L == "function" && Qh(O), null;
      }
      function M(O, H, L, X, ve) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var fe = O.get(L) || null;
          return p(H, fe, "" + X, ve);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case _r: {
              var Ve = O.get(X.key === null ? L : X.key) || null;
              return v(H, Ve, X, ve);
            }
            case rr: {
              var Xe = O.get(X.key === null ? L : X.key) || null;
              return y(H, Xe, X, ve);
            }
            case Ge:
              var Kt = X._payload, Ut = X._init;
              return M(O, H, L, Ut(Kt), ve);
          }
          if (lt(X) || Ze(X)) {
            var Gn = O.get(L) || null;
            return g(H, Gn, X, ve, null);
          }
          $h(H, X);
        }
        return typeof X == "function" && Qh(H), null;
      }
      function A(O, H, L) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case _r:
            case rr:
              uC(O, L);
              var X = O.key;
              if (typeof X != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(X);
                break;
              }
              if (!H.has(X)) {
                H.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case Ge:
              var ve = O._payload, fe = O._init;
              A(fe(ve), H, L);
              break;
          }
        }
        return H;
      }
      function F(O, H, L, X) {
        for (var ve = null, fe = 0; fe < L.length; fe++) {
          var Ve = L[fe];
          ve = A(Ve, ve, O);
        }
        for (var Xe = null, Kt = null, Ut = H, Gn = 0, At = 0, Pn = null; Ut !== null && At < L.length; At++) {
          Ut.index > At ? (Pn = Ut, Ut = null) : Pn = Ut.sibling;
          var la = x(O, Ut, L[At], X);
          if (la === null) {
            Ut === null && (Ut = Pn);
            break;
          }
          e && Ut && la.alternate === null && t(O, Ut), Gn = s(la, Gn, At), Kt === null ? Xe = la : Kt.sibling = la, Kt = la, Ut = Pn;
        }
        if (At === L.length) {
          if (a(O, Ut), Ar()) {
            var Ir = At;
            Qs(O, Ir);
          }
          return Xe;
        }
        if (Ut === null) {
          for (; At < L.length; At++) {
            var oi = b(O, L[At], X);
            oi !== null && (Gn = s(oi, Gn, At), Kt === null ? Xe = oi : Kt.sibling = oi, Kt = oi);
          }
          if (Ar()) {
            var Ca = At;
            Qs(O, Ca);
          }
          return Xe;
        }
        for (var Ra = i(O, Ut); At < L.length; At++) {
          var ua = M(Ra, O, At, L[At], X);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? At : ua.key), Gn = s(ua, Gn, At), Kt === null ? Xe = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && Ra.forEach(function($f) {
          return t(O, $f);
        }), Ar()) {
          var Qu = At;
          Qs(O, Qu);
        }
        return Xe;
      }
      function ce(O, H, L, X) {
        var ve = Ze(L);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (ig || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), L.entries === ve && (ag || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var fe = ve.call(L);
          if (fe)
            for (var Ve = null, Xe = fe.next(); !Xe.done; Xe = fe.next()) {
              var Kt = Xe.value;
              Ve = A(Kt, Ve, O);
            }
        }
        var Ut = ve.call(L);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Pn = H, la = 0, Ir = 0, oi = null, Ca = Ut.next(); Pn !== null && !Ca.done; Ir++, Ca = Ut.next()) {
          Pn.index > Ir ? (oi = Pn, Pn = null) : oi = Pn.sibling;
          var Ra = x(O, Pn, Ca.value, X);
          if (Ra === null) {
            Pn === null && (Pn = oi);
            break;
          }
          e && Pn && Ra.alternate === null && t(O, Pn), la = s(Ra, la, Ir), At === null ? Gn = Ra : At.sibling = Ra, At = Ra, Pn = oi;
        }
        if (Ca.done) {
          if (a(O, Pn), Ar()) {
            var ua = Ir;
            Qs(O, ua);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ca.done; Ir++, Ca = Ut.next()) {
            var Qu = b(O, Ca.value, X);
            Qu !== null && (la = s(Qu, la, Ir), At === null ? Gn = Qu : At.sibling = Qu, At = Qu);
          }
          if (Ar()) {
            var $f = Ir;
            Qs(O, $f);
          }
          return Gn;
        }
        for (var Xp = i(O, Pn); !Ca.done; Ir++, Ca = Ut.next()) {
          var Jl = M(Xp, O, Ir, Ca.value, X);
          Jl !== null && (e && Jl.alternate !== null && Xp.delete(Jl.key === null ? Ir : Jl.key), la = s(Jl, la, Ir), At === null ? Gn = Jl : At.sibling = Jl, At = Jl);
        }
        if (e && Xp.forEach(function(Z_) {
          return t(O, Z_);
        }), Ar()) {
          var J_ = Ir;
          Qs(O, J_);
        }
        return Gn;
      }
      function Ne(O, H, L, X) {
        if (H !== null && H.tag === Fe) {
          a(O, H.sibling);
          var ve = u(H, L);
          return ve.return = O, ve;
        }
        a(O, H);
        var fe = rE(L, O.mode, X);
        return fe.return = O, fe;
      }
      function we(O, H, L, X) {
        for (var ve = L.key, fe = H; fe !== null; ) {
          if (fe.key === ve) {
            var Ve = L.type;
            if (Ve === di) {
              if (fe.tag === ht) {
                a(O, fe.sibling);
                var Xe = u(fe, L.props.children);
                return Xe.return = O, Xe._debugSource = L._source, Xe._debugOwner = L._owner, Xe;
              }
            } else if (fe.elementType === Ve || // Keep this check inline so it only runs on the false path:
            vR(fe, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === Ge && oC(Ve) === fe.type) {
              a(O, fe.sibling);
              var Kt = u(fe, L.props);
              return Kt.ref = Sp(O, fe, L), Kt.return = O, Kt._debugSource = L._source, Kt._debugOwner = L._owner, Kt;
            }
            a(O, fe);
            break;
          } else
            t(O, fe);
          fe = fe.sibling;
        }
        if (L.type === di) {
          var Ut = Yo(L.props.children, O.mode, X, L.key);
          return Ut.return = O, Ut;
        } else {
          var Gn = nE(L, O.mode, X);
          return Gn.ref = Sp(O, H, L), Gn.return = O, Gn;
        }
      }
      function xt(O, H, L, X) {
        for (var ve = L.key, fe = H; fe !== null; ) {
          if (fe.key === ve)
            if (fe.tag === ye && fe.stateNode.containerInfo === L.containerInfo && fe.stateNode.implementation === L.implementation) {
              a(O, fe.sibling);
              var Ve = u(fe, L.children || []);
              return Ve.return = O, Ve;
            } else {
              a(O, fe);
              break;
            }
          else
            t(O, fe);
          fe = fe.sibling;
        }
        var Xe = aE(L, O.mode, X);
        return Xe.return = O, Xe;
      }
      function St(O, H, L, X) {
        var ve = typeof L == "object" && L !== null && L.type === di && L.key === null;
        if (ve && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case _r:
              return f(we(O, H, L, X));
            case rr:
              return f(xt(O, H, L, X));
            case Ge:
              var fe = L._payload, Ve = L._init;
              return St(O, H, Ve(fe), X);
          }
          if (lt(L))
            return F(O, H, L, X);
          if (Ze(L))
            return ce(O, H, L, X);
          $h(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Ne(O, H, "" + L, X)) : (typeof L == "function" && Qh(O), a(O, H));
      }
      return St;
    }
    var _f = sC(!0), cC = sC(!1);
    function kw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Dw(e, t) {
      for (var a = e.child; a !== null; )
        m_(a, t), a = a.sibling;
    }
    var sg = Oo(null), cg;
    cg = {};
    var Wh = null, kf = null, fg = null, Gh = !1;
    function qh() {
      Wh = null, kf = null, fg = null, Gh = !1;
    }
    function fC() {
      Gh = !0;
    }
    function dC() {
      Gh = !1;
    }
    function pC(e, t, a) {
      aa(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      ra(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ow(e, t, a) {
      Lw(e, t, a);
    }
    function Lw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Y) {
                var p = Ts(a), v = Pu(Xt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = et(x.lanes, a)), pg(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === mt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = et(M.lanes, a);
          var A = M.alternate;
          A !== null && (A.lanes = et(A.lanes, a)), pg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Wh = e, kf = null, fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function tr(e) {
      Gh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Wh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Wh.dependencies = {
            lanes: Q,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function vg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function Nw() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function vC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function zw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Fa(e, t) {
      return Kh(e, t);
    }
    var Uw = Kh;
    function Kh(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== ke && cR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (mn | Gr)) !== ke && cR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hC = 0, mC = 1, Xh = 2, hg = 3, Jh = !1, mg, Zh;
    mg = !1, Zh = null;
    function yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function yC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: hC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !mg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mg = !0), Mb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Uw(e, a);
      } else
        return zw(e, u, t, a);
    }
    function em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = zd(s, e.pendingLanes);
          var f = et(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function gg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Aw(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~Xn | be;
        // Intentional fallthrough
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : nt({}, i, y);
        }
        case Xh:
          return Jh = !0, i;
      }
      return i;
    }
    function tm(e, t, a, i) {
      var u = e.updateQueue;
      Jh = !1, Zh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, x = b.lastBaseUpdate;
          x !== f && (x === null ? b.firstBaseUpdate = y : x.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, A = Q, F = null, ce = null, Ne = null, we = s;
        do {
          var xt = we.lane, St = we.eventTime;
          if (ku(i, xt)) {
            if (Ne !== null) {
              var H = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Ne = Ne.next = H;
            }
            M = Aw(e, u, we, M, t, a);
            var L = we.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== Dt) {
              e.flags |= rn;
              var X = u.effects;
              X === null ? u.effects = [we] : X.push(we);
            }
          } else {
            var O = {
              eventTime: St,
              lane: xt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Ne === null ? (ce = Ne = O, F = M) : Ne = Ne.next = O, A = et(A, xt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, fe = ve.next;
            ve.next = null, we = fe, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (F = M), u.baseState = F, u.firstBaseUpdate = ce, u.lastBaseUpdate = Ne;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var Xe = Ve;
          do
            A = et(A, Xe.lane), Xe = Xe.next;
          while (Xe !== Ve);
        } else s === null && (u.shared.lanes = Q);
        Qp(A), e.lanes = A, e.memoizedState = M;
      }
      Zh = null;
    }
    function jw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gC() {
      Jh = !1;
    }
    function nm() {
      return Jh;
    }
    function SC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, jw(f, a));
        }
    }
    var Ep = {}, Uo = Oo(Ep), Cp = Oo(Ep), rm = Oo(Ep);
    function am(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = am(rm.current);
      return e;
    }
    function Sg(e, t) {
      aa(rm, t, e), aa(Cp, e, e), aa(Uo, Ep, e);
      var a = ex(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Of(e) {
      ra(Uo, e), ra(Cp, e), ra(rm, e);
    }
    function Eg() {
      var e = am(Uo.current);
      return e;
    }
    function CC(e) {
      am(rm.current);
      var t = am(Uo.current), a = tx(t, e.type);
      t !== a && (aa(Cp, e, e), aa(Uo, a, e));
    }
    function Cg(e) {
      Cp.current === e && (ra(Uo, e), ra(Cp, e));
    }
    var Fw = 0, RC = 1, TC = 1, Rp = 2, il = Oo(Fw);
    function Rg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & RC;
    }
    function Tg(e, t) {
      return e & RC | t;
    }
    function Hw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      aa(il, t, e);
    }
    function Nf(e) {
      ra(il, e);
    }
    function Pw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Vy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & be) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), $l = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), xg = [];
    function wg() {
      for (var e = 0; e < xg.length; e++) {
        var t = xg[e];
        t._workInProgressVersionPrimary = null;
      }
      xg.length = 0;
    }
    function Vw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var pe = D.ReactCurrentDispatcher, Tp = D.ReactCurrentBatchConfig, bg, Mf;
    bg = /* @__PURE__ */ new Set();
    var Js = Q, qt = null, dr = null, pr = null, lm = !1, xp = !1, wp = 0, Bw = 0, Iw = 25, V = null, Ui = null, jo = -1, _g = !1;
    function Vt() {
      {
        var e = V;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ne() {
      {
        var e = V;
        Ui !== null && (jo++, Ui[jo] !== e && Yw(e));
      }
    }
    function zf(e) {
      e != null && !lt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Yw(e) {
      {
        var t = Qe(qt);
        if (!bg.has(t) && (bg.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = Ui[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!q(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Js = s, qt = t, Ui = e !== null ? e._debugHookTypes : null, jo = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? pe.current = $C : Ui !== null ? pe.current = YC : pe.current = IC;
      var f = a(i, u);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, wp = 0, p >= Iw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, pe.current = QC, f = a(i, u);
        } while (xp);
      }
      pe.current = Sm, t._debugHookTypes = Ui;
      var v = dr !== null && dr.next !== null;
      if (Js = Q, qt = null, dr = null, pr = null, V = null, Ui = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), lm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function xC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Mt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function wC() {
      if (pe.current = Sm, lm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lm = !1;
      }
      Js = Q, qt = null, dr = null, pr = null, Ui = null, jo = -1, V = null, FC = !1, xp = !1, wp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ai() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function bC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Og(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Gw.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, x = null, M = null, A = null, F = g;
        do {
          var ce = F.lane;
          if (ku(Js, ce)) {
            if (A !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = we;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var xt = F.action;
              b = e(b, xt);
            }
          } else {
            var Ne = {
              lane: ce,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (M = A = Ne, x = b) : A = A.next = Ne, qt.lanes = et(qt.lanes, ce), Qp(ce);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? x = b : A.next = M, q(b, i.memoizedState) || zp(), i.memoizedState = b, i.baseState = x, i.baseQueue = A, u.lastRenderedState = b;
      }
      var St = u.interleaved;
      if (St !== null) {
        var O = St;
        do {
          var H = O.lane;
          qt.lanes = et(qt.lanes, H), Qp(H), O = O.next;
        } while (O !== St);
      } else f === null && (u.lanes = Q);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Ng(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        q(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function bk(e, t, a) {
    }
    function _k(e, t, a) {
    }
    function Mg(e, t, a) {
      var i = qt, u = Ql(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Mf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (s = t(), !Mf) {
          var p = t();
          q(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var v = Fm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Js) || _C(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, fm(DC.bind(null, i, y, e), [e]), i.flags |= Wr, bp(cr | jr, kC.bind(null, i, y, s, t), void 0, null), s;
    }
    function um(e, t, a) {
      var i = qt, u = Ai(), s = t();
      if (!Mf) {
        var f = t();
        q(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var p = u.memoizedState, v = !q(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (kp(DC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Wr, bp(cr | jr, kC.bind(null, i, y, s, t), void 0, null);
        var g = Fm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || _C(i, t, s);
      }
      return s;
    }
    function _C(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = bC(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OC(t) && LC(e);
    }
    function DC(e, t, a) {
      var i = function() {
        OC(t) && LC(e);
      };
      return a(i);
    }
    function OC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !q(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Fa(e, je);
      t !== null && yr(t, e, je, Xt);
    }
    function om(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = qw.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Lg(Dg);
    }
    function Ug(e) {
      return Ng(Dg);
    }
    function bp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = bC(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ag(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function sm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = bp(cr | t, a, void 0, s);
    }
    function cm(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = bp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = bp(cr | t, a, f, s);
    }
    function fm(e, t) {
      return (qt.mode & Mt) !== De ? _p(Ti | Wr | wc, jr, e, t) : _p(Wr | wc, jr, e, t);
    }
    function kp(e, t) {
      return cm(Wr, jr, e, t);
    }
    function jg(e, t) {
      return _p(Ct, $l, e, t);
    }
    function dm(e, t) {
      return cm(Ct, $l, e, t);
    }
    function Fg(e, t) {
      var a = Ct;
      return a |= Wi, (qt.mode & Mt) !== De && (a |= _l), _p(a, fr, e, t);
    }
    function pm(e, t) {
      return cm(Ct, fr, e, t);
    }
    function NC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Hg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= Wi, (qt.mode & Mt) !== De && (u |= _l), _p(u, fr, NC.bind(null, t, e), i);
    }
    function vm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return cm(Ct, fr, NC.bind(null, t, e), i);
    }
    function $w(e, t) {
    }
    var hm = $w;
    function Pg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function mm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Vg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function ym(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Bg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function MC(e) {
      var t = Ai(), a = dr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = Ai();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !Od(Js);
      if (i) {
        if (!q(a, t)) {
          var u = Md();
          qt.lanes = et(qt.lanes, u), Qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function Qw(e, t, a) {
      var i = Ua();
      jn(Gv(i, _i)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && $e("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Ig() {
      var e = om(!1), t = e[0], a = e[1], i = Qw.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = zg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function jC() {
      var e = Ug(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var FC = !1;
    function Ww() {
      return FC;
    }
    function Yg() {
      var e = Ql(), t = Fm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = cw();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Bw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function gm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function Gw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = vC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Q && (s === null || s.lanes === Q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = pe.current, pe.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, q(y, v)) {
                Mw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              pe.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var b = Ea();
          yr(g, e, i, b), VC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function PC(e, t) {
      xp = lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = zd(i, e.pendingLanes);
        var u = et(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function BC(e, t, a) {
      vs(e, t);
    }
    var Sm = {
      readContext: tr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: ee
    }, IC = null, YC = null, $C = null, QC = null, Wl = null, ll = null, Em = null;
    {
      var $g = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), zf(t), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), zf(t), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), zf(a), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), zf(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), zf(t), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), zf(t);
          var a = pe.current;
          pe.current = Wl;
          try {
            return Vg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), Ag(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return om(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Mg(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), Yg();
        },
        unstable_isNewReconciler: ee
      }, YC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Vg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), Ag(e);
        },
        useState: function(e) {
          V = "useState", ne();
          var t = pe.current;
          pe.current = Wl;
          try {
            return om(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Mg(e, t, a);
        },
        useId: function() {
          return V = "useId", ne(), Yg();
        },
        unstable_isNewReconciler: ee
      }, $C = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), mm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), pm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = pe.current;
          pe.current = ll;
          try {
            return ym(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = pe.current;
          pe.current = ll;
          try {
            return Lg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), sm();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = pe.current;
          pe.current = ll;
          try {
            return zg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), hm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), MC(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), AC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), um(e, t);
        },
        useId: function() {
          return V = "useId", ne(), gm();
        },
        unstable_isNewReconciler: ee
      }, QC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), mm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), pm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = pe.current;
          pe.current = Em;
          try {
            return ym(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = pe.current;
          pe.current = Em;
          try {
            return Ng(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), sm();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = pe.current;
          pe.current = Em;
          try {
            return Ug(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), hm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), um(e, t);
        },
        useId: function() {
          return V = "useId", ne(), gm();
        },
        unstable_isNewReconciler: ee
      }, Wl = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), Vt(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), Vt(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), Vt(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), Vt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), Vt(), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), Vt();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Vg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), Vt(), Ag(e);
        },
        useState: function(e) {
          V = "useState", qe(), Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return om(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), Vt(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), Vt(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), Vt(), Mg(e, t, a);
        },
        useId: function() {
          return V = "useId", qe(), Vt(), Yg();
        },
        unstable_isNewReconciler: ee
      }, ll = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), ne(), mm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), ne(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), ne(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), ne(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), ne(), pm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), ne();
          var a = pe.current;
          pe.current = ll;
          try {
            return ym(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), ne();
          var i = pe.current;
          pe.current = ll;
          try {
            return Lg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), ne(), sm();
        },
        useState: function(e) {
          V = "useState", qe(), ne();
          var t = pe.current;
          pe.current = ll;
          try {
            return zg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), ne(), hm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), ne(), MC(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), ne(), AC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), ne(), um(e, t);
        },
        useId: function() {
          return V = "useId", qe(), ne(), gm();
        },
        unstable_isNewReconciler: ee
      }, Em = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), ne(), mm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), ne(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), ne(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), ne(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), ne(), pm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), ne();
          var a = pe.current;
          pe.current = ll;
          try {
            return ym(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), ne();
          var i = pe.current;
          pe.current = ll;
          try {
            return Ng(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), ne(), sm();
        },
        useState: function(e) {
          V = "useState", qe(), ne();
          var t = pe.current;
          pe.current = ll;
          try {
            return Ug(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), ne(), hm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), ne(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), ne(), um(e, t);
        },
        useId: function() {
          return V = "useId", qe(), ne(), gm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var Fo = I.unstable_now, WC = 0, Cm = -1, Dp = -1, Rm = -1, Qg = !1, Tm = !1;
    function GC() {
      return Qg;
    }
    function Kw() {
      Tm = !0;
    }
    function Xw() {
      Qg = !1, Tm = !1;
    }
    function Jw() {
      Qg = Tm, Tm = !1;
    }
    function qC() {
      return WC;
    }
    function KC() {
      WC = Fo();
    }
    function Wg(e) {
      Dp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function XC(e) {
      Dp = -1;
    }
    function xm(e, t) {
      if (Dp >= 0) {
        var a = Fo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Gl(e) {
      if (Cm >= 0) {
        var t = Fo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case gt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gg(e) {
      if (Rm >= 0) {
        var t = Fo() - Rm;
        Rm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case gt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      Cm = Fo();
    }
    function qg() {
      Rm = Fo();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = nt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Xg = {}, Jg, Zg, eS, tS, nS, JC, wm, rS, aS, iS, Op;
    {
      Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var ZC = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          ZC.has(a) || (ZC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JC = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          nS.has(a) || (nS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Xg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Xg);
    }
    function lS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : nt({}, u, s);
      if (e.memoizedState = f, e.lanes === Q) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: Nv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), em(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.tag = mC, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), em(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Bo(a), s = Pu(i, u);
        s.tag = Xh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), em(f, a, u)), Nc(a, u);
      }
    };
    function e0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Se(a, i) || !Se(u, s) : !0;
    }
    function Zw(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || lt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function t0(e, t) {
      t.updater = uS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Xg;
    }
    function n0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !iS.has(t)) {
          iS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      t0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          Zg.has(x) || (Zg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || A !== null || F !== null) {
            var ce = wt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(ce) || (tS.add(ce), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ce, Ne, M !== null ? `
  ` + M : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && $E(e, u, s), g;
    }
    function e1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Qe(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function r0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Qe(e) || "Component";
          Jg.has(s) || (Jg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        uS.enqueueReplaceState(t, t.state, null);
      }
    }
    function oS(e, t, a, i) {
      Zw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, yg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          rS.has(p) || (rS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (e1(e, u), tm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= Wi, (e.mode & Mt) !== De && (y |= _l), e.flags |= y;
      }
    }
    function t1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && r0(e, u, a, v), gC();
      var x = e.memoizedState, M = u.state = x;
      if (tm(e, a, u, i), M = e.memoizedState, s === a && x === M && !Ah() && !nm()) {
        if (typeof u.componentDidMount == "function") {
          var A = Ct;
          A |= Wi, (e.mode & Mt) !== De && (A |= _l), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (lS(e, t, g, a), M = e.memoizedState);
      var F = nm() || e0(e, t, s, a, x, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ce = Ct;
          ce |= Wi, (e.mode & Mt) !== De && (ce |= _l), e.flags |= ce;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = Ct;
          Ne |= Wi, (e.mode & Mt) !== De && (Ne |= _l), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function n1(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = li;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var x = Rf(t, a, !0);
        b = Tf(t, x);
      }
      var M = a.getDerivedStateFromProps, A = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && r0(t, s, i, b), gC();
      var F = t.memoizedState, ce = s.state = F;
      if (tm(t, i, s, u), ce = t.memoizedState, f === v && F === ce && !Ah() && !nm() && !Te)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), !1;
      typeof M == "function" && (lS(t, a, M, i), ce = t.memoizedState);
      var Ne = nm() || e0(t, a, p, i, F, ce, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Te;
      return Ne ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ce, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ce, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= $n)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), t.memoizedProps = i, t.memoizedState = ce), s.props = i, s.state = ce, s.context = b, Ne;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function sS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function r1(e, t) {
      return !0;
    }
    function cS(e, t) {
      try {
        var a = r1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Y)
            return;
          console.error(i);
        }
        var p = u ? Qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var a1 = typeof WeakMap == "function" ? WeakMap : Map;
    function a0(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Kb(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = hg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          hR(e), cS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        hR(e), cS(e, t), typeof u != "function" && Gb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, je) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Qe(e) || "Unknown"));
      }), i;
    }
    function i0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new a1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Xb.bind(null, e, t, a);
        Xr && Wp(e, a), t.then(s, s);
      }
    }
    function i1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function l1(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === De && (a === ae || a === Ke || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function l0(e) {
      var t = e;
      do {
        if (t.tag === _e && Pw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function u0(e, t, a, i, u) {
      if ((e.mode & ct) === De) {
        if (e === t)
          e.flags |= Xn;
        else {
          if (e.flags |= be, a.flags |= xc, a.flags &= -52805, a.tag === Y) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Xt, je);
              f.tag = Xh, zo(a, f, je);
            }
          }
          a.lanes = et(a.lanes, je);
        }
        return e;
      }
      return e.flags |= Xn, e.lanes = u, e;
    }
    function u1(e, t, a, i, u) {
      if (a.flags |= os, Xr && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        l1(a), Ar() && a.mode & ct && JE();
        var f = l0(t);
        if (f !== null) {
          f.flags &= ~Cr, u0(f, t, a, e, u), f.mode & ct && i0(e, s, u), i1(f, e, s);
          return;
        } else {
          if (!Pv(u)) {
            i0(e, s, u), YS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & ct) {
        JE();
        var v = l0(t);
        if (v !== null) {
          (v.flags & Xn) === ke && (v.flags |= Cr), u0(v, t, a, e, u), rg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Pb(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Xn;
            var b = Ts(u);
            y.lanes = et(y.lanes, b);
            var x = a0(y, g, b);
            gg(y, x);
            return;
          }
          case Y:
            var M = i, A = y.type, F = y.stateNode;
            if ((y.flags & be) === ke && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !lR(F))) {
              y.flags |= Xn;
              var ce = Ts(u);
              y.lanes = et(y.lanes, ce);
              var Ne = fS(y, M, ce);
              gg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function o1() {
      return null;
    }
    var Lp = D.ReactCurrentOwner, ol = !1, dS, Np, pS, vS, hS, ec, mS, bm, Mp;
    dS = {}, Np = {}, pS = {}, vS = {}, hS = {}, ec = !1, mS = {}, bm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function s1(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function o0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), va(t);
      {
        if (Lp.current = t, Yn(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ol ? (xC(e, t, u), Vu(e, t, u)) : (Ar() && y && Xy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function s0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (v_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = He, t.type = f, SS(t, s), c0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = tE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && nl(
          b,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var x = e.child, M = wS(e, u);
      if (!M) {
        var A = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Se, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var ce = ic(x, i);
      return ce.ref = t.ref, ce.return = t, t.child = ce, ce;
    }
    function c0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ge) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Se(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, wS(e, u))
            (e.flags & xc) !== ke && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function f0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ie)
        if ((t.mode & ct) === De) {
          var f = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Hm(t, a);
        } else if (Zr(a, Jr)) {
          var b = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var x = s !== null ? s.baseLanes : a;
          Hm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = et(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Hm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = et(s.baseLanes, a), t.memoizedState = null) : M = a, Hm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function c1(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function f1(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function d1(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function d0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function yS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), va(t);
      {
        if (Lp.current = t, Yn(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ol ? (xC(e, t, u), Vu(e, t, u)) : (Ar() && y && Xy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      {
        switch (D_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= be, t.flags |= Xn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = et(t.lanes, g);
            var b = fS(t, Zs(y, t), g);
            gg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      Yl(a) ? (M = !0, Fh(t)) : M = !1, Df(t, u);
      var A = t.stateNode, F;
      A === null ? (km(e, t), n0(t, a, i), oS(t, a, i, u), F = !0) : e === null ? F = t1(t, a, i, u) : F = n1(e, t, a, i, u);
      var ce = gS(e, t, a, F, M, u);
      {
        var Ne = t.stateNode;
        F && Ne.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Qe(t) || "a component"), ec = !0);
      }
      return ce;
    }
    function gS(e, t, a, i, u, s) {
      d0(e, t);
      var f = (t.flags & be) !== ke;
      if (!i && !f)
        return u && GE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XC();
      else {
        va(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? s1(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function v0(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function p1(e, t, a) {
      if (v0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yC(e, t), tm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return h0(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return h0(e, t, p, a, b);
        } else {
          mw(t);
          var x = cC(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~mn | Gr, M = M.sibling;
        }
      } else {
        if (bf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function h0(e, t, a, i, u) {
      return bf(), rg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function v1(e, t, a) {
      CC(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= Da), d0(e, t), ga(e, t, f, a), t.child;
    }
    function h1(e, t) {
      return e === null && ng(t), null;
    }
    function m1(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = h_(v), g = ul(v, u), b;
      switch (y) {
        case ae:
          return SS(t, v), t.type = v = Yf(v), b = yS(null, t, v, g, i), b;
        case Y:
          return t.type = v = qS(v), b = p0(null, t, v, g, i), b;
        case Ke:
          return t.type = v = KS(v), b = o0(null, t, v, g, i), b;
        case dt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = s0(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ge && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function y1(e, t, a, i, u) {
      km(e, t), t.tag = Y;
      var s;
      return Yl(a) ? (s = !0, Fh(t)) : s = !1, Df(t, u), n0(t, a, i), oS(t, a, i, u), gS(null, t, a, !0, s, u);
    }
    function g1(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          dS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), dS[y] = !0);
        }
        t.mode & Gt && al.recordLegacyContextWarning(t, null), Yn(!0), Lp.current = t, p = Uf(null, t, a, u, s, i), v = Af(), Yn(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Np[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Np[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          Np[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Np[b] = !0);
        }
        t.tag = Y, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Yl(a) ? (x = !0, Fh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), t0(t, p), oS(t, a, u, i), gS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ae, t.mode & Gt) {
          yn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            yn(!1);
          }
        }
        return Ar() && v && Xy(t), ga(null, t, p, i), SS(t, a), t.child;
      }
    }
    function SS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          vS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          pS[v] || (S("%s: Function components do not support contextType.", v), pS[v] = !0);
        }
      }
    }
    var ES = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: o1(),
        transitions: null
      };
    }
    function S1(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function E1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Rg(e, Rp);
    }
    function C1(e, t) {
      return xs(e.childLanes, t);
    }
    function m0(e, t, a) {
      var i = t.pendingProps;
      O_(t) && (t.flags |= be);
      var u = il.current, s = !1, f = (t.flags & be) !== ke;
      if (f || E1(u, e) ? (s = !0, t.flags &= ~be) : (e === null || e.memoizedState !== null) && (u = Hw(u, TC)), u = Lf(u), Ao(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return b1(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = R1(t, y, g, a), x = t.child;
          return x.memoizedState = CS(a), t.memoizedState = ES, b;
        } else
          return RS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var A = M.dehydrated;
          if (A !== null)
            return _1(e, t, f, i, A, M, a);
        }
        if (s) {
          var F = i.fallback, ce = i.children, Ne = x1(e, t, ce, F, a), we = t.child, xt = e.child.memoizedState;
          return we.memoizedState = xt === null ? CS(a) : S1(xt, a), we.childLanes = C1(e, a), t.memoizedState = ES, Ne;
        } else {
          var St = i.children, O = T1(e, t, St, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function R1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ct) === De && s !== null ? (p = s, p.childLanes = Q, p.pendingProps = f, e.mode & Nt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = TS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return yR(e, t, Q, null);
    }
    function y0(e, t) {
      return ic(e, t);
    }
    function T1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = y0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function x1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ct) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Q, y.pendingProps = v, t.mode & Nt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = y0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ic(p, i) : (b = Yo(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function _m(e, t, a, i) {
      i !== null && rg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = RS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function w1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ct) !== De && _f(t, e.child, null, u), v;
    }
    function b1(e, t, a) {
      return (e.mode & ct) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Vy(t) ? e.lanes = Rr : e.lanes = Jr, null;
    }
    function _1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var O = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _m(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= be, null;
          var H = i.children, L = i.fallback, X = w1(e, t, H, L, f), ve = t.child;
          return ve.memoizedState = CS(f), t.memoizedState = ES, X;
        }
      else {
        if (vw(), (t.mode & ct) === De)
          return _m(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = Lx(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = sS(b, p, y);
          return _m(e, t, f, x);
        }
        var M = Zr(f, e.childLanes);
        if (ol || M) {
          var A = Fm();
          if (A !== null) {
            var F = Ad(A, f);
            if (F !== Dt && F !== s.retryLane) {
              s.retryLane = F;
              var ce = Xt;
              Fa(e, F), yr(A, e, F, ce);
            }
          }
          YS();
          var Ne = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _m(e, t, f, Ne);
        } else if (PE(u)) {
          t.flags |= be, t.child = e.child;
          var we = Jb.bind(null, e);
          return Nx(u, we), null;
        } else {
          yw(t, u, s.treeContext);
          var xt = i.children, St = RS(t, xt);
          return St.flags |= Gr, St;
        }
      }
    }
    function g0(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), pg(e.return, t, a);
    }
    function k1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var u = i.memoizedState;
          u !== null && g0(i, a, e);
        } else if (i.tag === ln)
          g0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function D1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && im(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function O1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !mS[e])
        if (mS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function L1(e, t) {
      e !== void 0 && !bm[e] && (e !== "collapsed" && e !== "hidden" ? (bm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (bm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function S0(e, t) {
      {
        var a = lt(e), i = !a && typeof Ze(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function N1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!S0(e[a], a))
              return;
        } else {
          var i = Ze(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!S0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function xS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function E0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      O1(u), L1(s, u), N1(f, u), ga(e, t, f, a);
      var p = il.current, v = Rg(p, Rp);
      if (v)
        p = Tg(p, Rp), t.flags |= be;
      else {
        var y = e !== null && (e.flags & be) !== ke;
        y && k1(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & ct) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = D1(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), xS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var A = M.alternate;
              if (A !== null && im(A) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = x, x = M, M = F;
            }
            xS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            xS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function M1(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var C0 = !1;
    function z1(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || C0 || (C0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (q(y, p)) {
          if (f.children === s.children && !Ah())
            return Vu(e, t, a);
        } else
          Ow(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var R0 = !1;
    function U1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (R0 || (R0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Lp.current = t, Yn(!0), p = s(f), Yn(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function zp() {
      ol = !0;
    }
    function km(e, t) {
      (t.mode & ct) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), Qp(t.lanes), Zr(a, t.childLanes) ? (kw(e, t), t.child) : null;
    }
    function A1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= mn, a;
      }
    }
    function wS(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function j1(e, t, a) {
      switch (t.tag) {
        case J:
          v0(t), t.stateNode, bf();
          break;
        case oe:
          CC(t);
          break;
        case Y: {
          var i = t.type;
          Yl(i) && Fh(t);
          break;
        }
        case ye:
          Sg(t, t.stateNode.containerInfo);
          break;
        case mt: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case gt:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(il.current)), t.flags |= be, null;
            var y = t.child, g = y.childLanes;
            if (Zr(a, g))
              return m0(e, t, a);
            Ao(t, Lf(il.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Lf(il.current));
          break;
        }
        case ln: {
          var x = (e.flags & be) !== ke, M = Zr(a, t.childLanes);
          if (x) {
            if (M)
              return E0(e, t, a);
            t.flags |= be;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, il.current), M)
            break;
          return null;
        }
        case Oe:
        case jt:
          return t.lanes = Q, f0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function T0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return A1(e, t, tE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ah() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = wS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & be) === ke)
            return ol = !1, j1(e, t, a);
          (e.flags & xc) !== ke ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Ar() && ow(t)) {
        var f = t.index, p = sw();
        XE(t, p, f);
      }
      switch (t.lanes = Q, t.tag) {
        case Be:
          return g1(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return m1(e, t, v, a);
        }
        case ae: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ul(y, g);
          return yS(e, t, y, b, a);
        }
        case Y: {
          var x = t.type, M = t.pendingProps, A = t.elementType === x ? M : ul(x, M);
          return p0(e, t, x, A, a);
        }
        case J:
          return p1(e, t, a);
        case oe:
          return v1(e, t, a);
        case Fe:
          return h1(e, t);
        case _e:
          return m0(e, t, a);
        case ye:
          return M1(e, t, a);
        case Ke: {
          var F = t.type, ce = t.pendingProps, Ne = t.elementType === F ? ce : ul(F, ce);
          return o0(e, t, F, Ne, a);
        }
        case ht:
          return c1(e, t, a);
        case yt:
          return f1(e, t, a);
        case gt:
          return d1(e, t, a);
        case mt:
          return z1(e, t, a);
        case fn:
          return U1(e, t, a);
        case dt: {
          var we = t.type, xt = t.pendingProps, St = ul(we, xt);
          if (t.type !== t.elementType) {
            var O = we.propTypes;
            O && nl(
              O,
              St,
              // Resolved for outer only
              "prop",
              wt(we)
            );
          }
          return St = ul(we.type, St), s0(e, t, we, St, a);
        }
        case He:
          return c0(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var H = t.type, L = t.pendingProps, X = t.elementType === H ? L : ul(H, L);
          return y1(e, t, H, X, a);
        }
        case ln:
          return E0(e, t, a);
        case _t:
          break;
        case Oe:
          return f0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Ct;
    }
    function x0(e) {
      e.flags |= En, e.flags |= ho;
    }
    var w0, bS, b0, _0;
    w0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === Fe)
          ix(e, u.stateNode);
        else if (u.tag !== ye) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, bS = function(e, t) {
    }, b0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Eg(), v = ux(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, _0 = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function Up(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = ke;
      if (t) {
        if ((e.mode & Nt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Nt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function F1(e, t, a) {
      if (Rw() && (t.mode & ct) !== De && (t.flags & be) === ke)
        return aC(t), bf(), t.flags |= Cr | os | Xn, !1;
      var i = Ih(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ew(t), Fr(t), (t.mode & Nt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & be) === ke && (t.memoizedState = null), t.flags |= Ct, Fr(t), (t.mode & Nt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iC(), !0;
    }
    function k0(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case Be:
        case an:
        case He:
        case ae:
        case Ke:
        case ht:
        case yt:
        case gt:
        case fn:
        case dt:
          return Fr(t), null;
        case Y: {
          var u = t.type;
          return Yl(u) && jh(t), Fr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Of(t), Gy(t), wg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ih(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== ke) && (t.flags |= $n, iC());
            }
          }
          return bS(e, t), Fr(t), null;
        }
        case oe: {
          Cg(t);
          var v = EC(), y = t.type;
          if (e !== null && t.stateNode != null)
            b0(e, t, y, i, v), e.ref !== t.ref && x0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = Eg(), b = Ih(t);
            if (b)
              gw(t, v, g) && jf(t);
            else {
              var x = ax(y, i, v, g, t);
              w0(x, t, !1, !1), t.stateNode = x, lx(x, y, i, v) && jf(t);
            }
            t.ref !== null && x0(t);
          }
          return Fr(t), null;
        }
        case Fe: {
          var M = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            _0(e, t, A, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = EC(), ce = Eg(), Ne = Ih(t);
            Ne ? Sw(t) && jf(t) : t.stateNode = ox(M, F, ce, t);
          }
          return Fr(t), null;
        }
        case _e: {
          Nf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = F1(e, t, we);
            if (!xt)
              return t.flags & Xn ? t : null;
          }
          if ((t.flags & be) !== ke)
            return t.lanes = a, (t.mode & Nt) !== De && Kg(t), t;
          var St = we !== null, O = e !== null && e.memoizedState !== null;
          if (St !== O && St) {
            var H = t.child;
            if (H.flags |= Mn, (t.mode & ct) !== De) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              L || Rg(il.current, TC) ? Hb() : YS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= Ct), Fr(t), (t.mode & Nt) !== De && St) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case ye:
          return Of(t), bS(e, t), e === null && tw(t.stateNode.containerInfo), Fr(t), null;
        case mt:
          var fe = t.type._context;
          return dg(fe, t), Fr(t), null;
        case Ht: {
          var Ve = t.type;
          return Yl(Ve) && jh(t), Fr(t), null;
        }
        case ln: {
          Nf(t);
          var Xe = t.memoizedState;
          if (Xe === null)
            return Fr(t), null;
          var Kt = (t.flags & be) !== ke, Ut = Xe.rendering;
          if (Ut === null)
            if (Kt)
              Up(Xe, !1);
            else {
              var Gn = Vb() && (e === null || (e.flags & be) === ke);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Pn = im(At);
                  if (Pn !== null) {
                    Kt = !0, t.flags |= be, Up(Xe, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Ct), t.subtreeFlags = ke, Dw(t, a), Ao(t, Tg(il.current, Rp)), t.child;
                  }
                  At = At.sibling;
                }
              Xe.tail !== null && Qn() > q0() && (t.flags |= be, Kt = !0, Up(Xe, !1), t.lanes = _d);
            }
          else {
            if (!Kt) {
              var Ir = im(Ut);
              if (Ir !== null) {
                t.flags |= be, Kt = !0;
                var oi = Ir.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Ct), Up(Xe, !0), Xe.tail === null && Xe.tailMode === "hidden" && !Ut.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Xe.renderingStartTime > q0() && a !== Jr && (t.flags |= be, Kt = !0, Up(Xe, !1), t.lanes = _d);
            }
            if (Xe.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ca = Xe.last;
              Ca !== null ? Ca.sibling = Ut : t.child = Ut, Xe.last = Ut;
            }
          }
          if (Xe.tail !== null) {
            var Ra = Xe.tail;
            Xe.rendering = Ra, Xe.tail = Ra.sibling, Xe.renderingStartTime = Qn(), Ra.sibling = null;
            var ua = il.current;
            return Kt ? ua = Tg(ua, Rp) : ua = Lf(ua), Ao(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case _t:
          break;
        case Oe:
        case jt: {
          IS(t);
          var Qu = t.memoizedState, $f = Qu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Jl = Xp !== null;
            Jl !== $f && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ie && (t.flags |= Mn);
          }
          return !$f || (t.mode & ct) === De ? Fr(t) : Zr(Xl, Jr) && (Fr(t), t.subtreeFlags & (mn | Ct) && (t.flags |= Mn)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function H1(e, t, a) {
      switch (Jy(t), t.tag) {
        case Y: {
          var i = t.type;
          Yl(i) && jh(t);
          var u = t.flags;
          return u & Xn ? (t.flags = u & ~Xn | be, (t.mode & Nt) !== De && Kg(t), t) : null;
        }
        case J: {
          t.stateNode, Of(t), Gy(t), wg();
          var s = t.flags;
          return (s & Xn) !== ke && (s & be) === ke ? (t.flags = s & ~Xn | be, t) : null;
        }
        case oe:
          return Cg(t), null;
        case _e: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Xn ? (t.flags = p & ~Xn | be, (t.mode & Nt) !== De && Kg(t), t) : null;
        }
        case ln:
          return Nf(t), null;
        case ye:
          return Of(t), null;
        case mt:
          var v = t.type._context;
          return dg(v, t), null;
        case Oe:
        case jt:
          return IS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function D0(e, t, a) {
      switch (Jy(t), t.tag) {
        case Y: {
          var i = t.type.childContextTypes;
          i != null && jh(t);
          break;
        }
        case J: {
          t.stateNode, Of(t), Gy(t), wg();
          break;
        }
        case oe: {
          Cg(t);
          break;
        }
        case ye:
          Of(t);
          break;
        case _e:
          Nf(t);
          break;
        case ln:
          Nf(t);
          break;
        case mt:
          var u = t.type._context;
          dg(u, t);
          break;
        case Oe:
        case jt:
          IS(t);
          break;
      }
    }
    var O0 = null;
    O0 = /* @__PURE__ */ new Set();
    var Dm = !1, Hr = !1, P1 = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Ff = null, Hf = null;
    function V1(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var B1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Nt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function L0(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        B1(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function I1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function N0(e, t) {
      try {
        z0(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ae && ut && e.mode & Nt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          a.current = null;
    }
    function Om(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var M0 = !1;
    function Y1(e, t) {
      nx(e.containerInfo), Ee = t, $1();
      var a = M0;
      return M0 = !1, a;
    }
    function $1() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & kl) !== ke && t !== null ? (t.return = e, Ee = t) : Q1();
      }
    }
    function Q1() {
      for (; Ee !== null; ) {
        var e = Ee;
        $t(e);
        try {
          W1(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function W1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & $n) !== ke) {
        switch ($t(e), e.tag) {
          case ae:
          case Ke:
          case He:
            break;
          case Y: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = O0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              _x(v.containerInfo);
            }
            break;
          }
          case oe:
          case Fe:
          case ye:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? Ki(t) : (e & fr) !== Ha && cs(t), (e & $l) !== Ha && Gp(!0), Om(t, a, p), (e & $l) !== Ha && Gp(!1), (e & jr) !== Ha ? Nl() : (e & fr) !== Ha && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ha ? xd(t) : (e & fr) !== Ha && Oc(t);
            var f = s.create;
            (e & $l) !== Ha && Gp(!0), s.destroy = f(), (e & $l) !== Ha && Gp(!1), (e & jr) !== Ha ? Uv() : (e & fr) !== Ha && Av();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== ke ? v = "useLayoutEffect" : (s.tag & $l) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function G1(e, t) {
      if ((t.flags & Ct) !== ke)
        switch (t.tag) {
          case gt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case gt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function q1(e, t, a, i) {
      if ((a.flags & Ol) !== ke)
        switch (a.tag) {
          case ae:
          case Ke:
          case He: {
            if (!Hr)
              if (a.mode & Nt)
                try {
                  ql(), Ho(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case Y: {
            var u = a.stateNode;
            if (a.flags & Ct && !Hr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Nt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Nt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), SC(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    y = a.child.stateNode;
                    break;
                  case Y:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case oe: {
            var g = a.stateNode;
            if (t === null && a.flags & Ct) {
              var b = a.type, x = a.memoizedProps;
              px(g, b, x);
            }
            break;
          }
          case Fe:
            break;
          case ye:
            break;
          case gt: {
            {
              var M = a.memoizedProps, A = M.onCommit, F = M.onRender, ce = a.stateNode.effectDuration, Ne = qC(), we = t === null ? "mount" : "update";
              GC() && (we = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof A == "function" && A(a.memoizedProps.id, we, ce, Ne), Qb(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case J:
                      var St = xt.stateNode;
                      St.effectDuration += ce;
                      break e;
                    case gt:
                      var O = xt.stateNode;
                      O.effectDuration += ce;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case _e: {
            rb(e, a);
            break;
          }
          case ln:
          case Ht:
          case _t:
          case Oe:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && z0(a);
    }
    function K1(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case He: {
          if (e.mode & Nt)
            try {
              ql(), L0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            L0(e, e.return);
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && I1(e, e.return, t), N0(e, e.return);
          break;
        }
        case oe: {
          N0(e, e.return);
          break;
        }
      }
    }
    function X1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Tx(u) : wx(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === Fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? xx(s) : bx(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Oe || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function z0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Nt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Qe(e)), t.current = i;
      }
    }
    function J1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function U0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, U0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && aw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Z1(e) {
      for (var t = e.return; t !== null; ) {
        if (A0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function A0(e) {
      return e.tag === oe || e.tag === J || e.tag === ye;
    }
    function j0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || A0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== Fe && t.tag !== Jt; ) {
          if (t.flags & mn || t.child === null || t.tag === ye)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function eb(e) {
      var t = Z1(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & Da && (HE(a), t.flags &= ~Da);
          var i = j0(e);
          DS(e, i, a);
          break;
        }
        case J:
        case ye: {
          var u = t.stateNode.containerInfo, s = j0(e);
          kS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === oe || i === Fe;
      if (u) {
        var s = e.stateNode;
        t ? Sx(a, s, t) : yx(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === oe || i === Fe;
      if (u) {
        var s = e.stateNode;
        t ? gx(a, s, t) : mx(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, cl = !1;
    function tb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              Pr = i.stateNode, cl = !1;
              break e;
            }
            case J: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case ye: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        F0(e, t, a), Pr = null, cl = !1;
      }
      J1(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        F0(e, t, i), i = i.sibling;
    }
    function F0(e, t, a) {
      switch (Cd(a), a.tag) {
        case oe:
          Hr || Pf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Fe: {
          {
            var i = Pr, u = cl;
            Pr = null, Po(e, t, a), Pr = i, cl = u, Pr !== null && (cl ? Cx(Pr, a.stateNode) : Ex(Pr, a.stateNode));
          }
          return;
        }
        case Jt: {
          Pr !== null && (cl ? Rx(Pr, a.stateNode) : Py(Pr, a.stateNode));
          return;
        }
        case ye: {
          {
            var s = Pr, f = cl;
            Pr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Pr = s, cl = f;
          }
          return;
        }
        case ae:
        case Ke:
        case dt:
        case He: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, M = b.tag;
                  x !== void 0 && ((M & $l) !== Ha ? Om(a, t, x) : (M & fr) !== Ha && (cs(a), a.mode & Nt ? (ql(), Om(a, t, x), Gl(a)) : Om(a, t, x), wd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case Y: {
          if (!Hr) {
            Pf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && _S(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case Oe: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var F = Hr;
            Hr = F || a.memoizedState !== null, Po(e, t, a), Hr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function nb(e) {
      e.memoizedState;
    }
    function rb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Vx(s);
          }
        }
      }
    }
    function H0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new P1()), t.forEach(function(i) {
          var u = Zb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Xr)
              if (Ff !== null && Hf !== null)
                Wp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ab(e, t, a) {
      Ff = a, Hf = e, $t(t), P0(t, e), $t(t), Ff = null, Hf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            tb(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          $t(p), P0(p, e), p = p.sibling;
      $t(f);
    }
    function P0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ae:
        case Ke:
        case dt:
        case He: {
          if (fl(t, e), Kl(e), u & Ct) {
            try {
              sl($l | cr, e, e.return), Ho($l | cr, e);
            } catch (Ve) {
              cn(e, e.return, Ve);
            }
            if (e.mode & Nt) {
              try {
                ql(), sl(fr | cr, e, e.return);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
              Gl(e);
            } else
              try {
                sl(fr | cr, e, e.return);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
          }
          return;
        }
        case Y: {
          fl(t, e), Kl(e), u & En && i !== null && Pf(i, i.return);
          return;
        }
        case oe: {
          fl(t, e), Kl(e), u & En && i !== null && Pf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    vx(f, g, y, v, p, e);
                  } catch (Ve) {
                    cn(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case Fe: {
          if (fl(t, e), Kl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              hx(b, M, x);
            } catch (Ve) {
              cn(e, e.return, Ve);
            }
          }
          return;
        }
        case J: {
          if (fl(t, e), Kl(e), u & Ct && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Px(t.containerInfo);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
          }
          return;
        }
        case ye: {
          fl(t, e), Kl(e);
          return;
        }
        case _e: {
          fl(t, e), Kl(e);
          var F = e.child;
          if (F.flags & Mn) {
            var ce = F.stateNode, Ne = F.memoizedState, we = Ne !== null;
            if (ce.isHidden = we, we) {
              var xt = F.alternate !== null && F.alternate.memoizedState !== null;
              xt || Fb();
            }
          }
          if (u & Ct) {
            try {
              nb(e);
            } catch (Ve) {
              cn(e, e.return, Ve);
            }
            H0(e);
          }
          return;
        }
        case Oe: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var O = Hr;
            Hr = O || St, fl(t, e), Hr = O;
          } else
            fl(t, e);
          if (Kl(e), u & Mn) {
            var H = e.stateNode, L = e.memoizedState, X = L !== null, ve = e;
            if (H.isHidden = X, X && !St && (ve.mode & ct) !== De) {
              Ee = ve;
              for (var fe = ve.child; fe !== null; )
                Ee = fe, lb(fe), fe = fe.sibling;
            }
            X1(ve, X);
          }
          return;
        }
        case ln: {
          fl(t, e), Kl(e), u & Ct && H0(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          eb(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function ib(e, t, a) {
      Ff = a, Hf = t, Ee = e, V0(e, t, a), Ff = null, Hf = null;
    }
    function V0(e, t, a) {
      for (var i = (e.mode & ct) !== De; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Oe && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, b = Dm, x = Hr;
            Dm = p, Hr = g, Hr && !x && (Ee = u, ub(u));
            for (var M = s; M !== null; )
              Ee = M, V0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Ee = u, Dm = b, Hr = x, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== ke && s !== null ? (s.return = u, Ee = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & Ol) !== ke) {
          var u = i.alternate;
          $t(i);
          try {
            q1(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function lb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case ae:
          case Ke:
          case dt:
          case He: {
            if (t.mode & Nt)
              try {
                ql(), sl(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(fr, t, t.return);
            break;
          }
          case Y: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case oe: {
            Pf(t, t.return);
            break;
          }
          case Oe: {
            var u = t.memoizedState !== null;
            if (u) {
              B0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : B0(e);
      }
    }
    function B0(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function ub(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Oe) {
          var i = t.memoizedState !== null;
          if (i) {
            I0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : I0(e);
      }
    }
    function I0(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        $t(t);
        try {
          K1(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function ob(e, t, a, i) {
      Ee = t, sb(t, e, a, i);
    }
    function sb(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Gi) !== ke && s !== null ? (s.return = u, Ee = s) : cb(e, t, a, i);
      }
    }
    function cb(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & Wr) !== ke) {
          $t(u);
          try {
            fb(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function fb(e, t, a, i) {
      switch (t.tag) {
        case ae:
        case Ke:
        case He: {
          if (t.mode & Nt) {
            qg();
            try {
              Ho(jr | cr, t);
            } finally {
              Gg(t);
            }
          } else
            Ho(jr | cr, t);
          break;
        }
      }
    }
    function db(e) {
      Ee = e, pb();
    }
    function pb() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & ka) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, mb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & Gi) !== ke && t !== null ? (t.return = e, Ee = t) : vb();
      }
    }
    function vb() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & Wr) !== ke && ($t(e), hb(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function hb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case He: {
          e.mode & Nt ? (qg(), sl(jr | cr, e, e.return), Gg(e)) : sl(jr | cr, e, e.return);
          break;
        }
      }
    }
    function mb(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        $t(a), gb(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : yb(e);
      }
    }
    function yb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (U0(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function gb(e, t) {
      switch (e.tag) {
        case ae:
        case Ke:
        case He: {
          e.mode & Nt ? (qg(), sl(jr, e, t), Gg(e)) : sl(jr, e, t);
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case He: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case Y: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Eb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case He: {
          try {
            Ho(jr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Cb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case He: {
          try {
            sl(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case He:
          try {
            sl(jr | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var Tb = [];
    function xb() {
      Tb.forEach(function(e) {
        return e();
      });
    }
    var wb = D.ReactCurrentActQueue;
    function bb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Y0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && wb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _b = Math.ceil, LS = D.ReactCurrentDispatcher, NS = D.ReactCurrentOwner, Vr = D.ReactCurrentBatchConfig, dl = D.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), $0 = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Bu = 0, jp = 1, tc = 2, Lm = 3, Fp = 4, Q0 = 5, MS = 6, Tt = vr, Sa = null, Dn = null, hr = Q, Xl = Q, zS = Oo(Q), mr = Bu, Hp = null, Nm = Q, Pp = Q, Mm = Q, Vp = null, Pa = null, US = 0, W0 = 500, G0 = 1 / 0, kb = 500, Iu = null;
    function Bp() {
      G0 = Qn() + kb;
    }
    function q0() {
      return G0;
    }
    var zm = !1, AS = null, Vf = null, nc = !1, Vo = null, Ip = Q, jS = [], FS = null, Db = 50, Yp = 0, HS = null, PS = !1, Um = !1, Ob = 50, Bf = 0, Am = null, $p = Xt, jm = Q, K0 = !1;
    function Fm() {
      return Sa;
    }
    function Ea() {
      return (Tt & (Br | ji)) !== vr ? Qn() : ($p !== Xt || ($p = Qn()), $p);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ct) === De)
        return je;
      if ((Tt & Br) !== vr && hr !== Q)
        return Ts(hr);
      var a = ww() !== xw;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return jm === Dt && (jm = Md()), jm;
      }
      var u = Ua();
      if (u !== Dt)
        return u;
      var s = sx();
      return s;
    }
    function Lb(e) {
      var t = e.mode;
      return (t & ct) === De ? je : Bv();
    }
    function yr(e, t, a, i) {
      t_(), K0 && S("useInsertionEffect must not schedule updates."), PS && (Um = !0), So(e, a, i), (Tt & Br) !== Q && e === Sa ? a_(t) : (Xr && bs(e, t, a), i_(t), e === Sa && ((Tt & Br) === vr && (Pp = et(Pp, a)), mr === Fp && Io(e, hr)), Va(e, i), a === je && Tt === vr && (t.mode & ct) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Bp(), KE()));
    }
    function Nb(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Va(e, a);
    }
    function Mb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Br) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      Kc(e, t);
      var i = qc(e, e === Sa ? hr : Q);
      if (i === Q) {
        a !== null && dR(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== WS)) {
        a == null && s !== je && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dR(a);
      var f;
      if (u === je)
        e.tag === Lo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), uw(Z0.bind(null, e))) : qE(Z0.bind(null, e)), dl.current !== null ? dl.current.push(No) : fx(function() {
          (Tt & (Br | ji)) === vr && No();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
          case Lr:
            p = ss;
            break;
          case _i:
            p = Ll;
            break;
          case Ma:
            p = qi;
            break;
          case za:
            p = mu;
            break;
          default:
            p = qi;
            break;
        }
        f = GS(p, X0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function X0(e, t) {
      if (Xw(), $p = Xt, jm = Q, (Tt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $u();
      if (i && e.callbackNode !== a)
        return null;
      var u = qc(e, e === Sa ? hr : Q);
      if (u === Q)
        return null;
      var s = !Jc(e, u) && !Vv(e, u) && !t, f = s ? Ib(e, u) : Pm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Xc(e);
          p !== Q && (u = p, f = VS(e, p));
        }
        if (f === jp) {
          var v = Hp;
          throw rc(e, Q), Io(e, u), Va(e, Qn()), v;
        }
        if (f === MS)
          Io(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Ub(g)) {
            if (f = Pm(e, u), f === tc) {
              var b = Xc(e);
              b !== Q && (u = b, f = VS(e, b));
            }
            if (f === jp) {
              var x = Hp;
              throw rc(e, Q), Io(e, u), Va(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, zb(e, f, u);
        }
      }
      return Va(e, Qn()), e.callbackNode === a ? X0.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Vp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Cr, ew(e.containerInfo);
      }
      var u = Pm(e, t);
      if (u !== tc) {
        var s = Pa;
        Pa = a, s !== null && J0(s);
      }
      return u;
    }
    function J0(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function zb(e, t, a) {
      switch (t) {
        case Bu:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case tc: {
          ac(e, Pa, Iu);
          break;
        }
        case Lm: {
          if (Io(e, a), _u(a) && // do not delay if we're inside an act() scope
          !pR()) {
            var i = US + W0 - Qn();
            if (i > 10) {
              var u = qc(e, Q);
              if (u !== Q)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ea(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Fy(ac.bind(null, e, Pa, Iu), i);
              break;
            }
          }
          ac(e, Pa, Iu);
          break;
        }
        case Fp: {
          if (Io(e, a), Ld(a))
            break;
          if (!pR()) {
            var f = ri(e, a), p = f, v = Qn() - p, y = e_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Fy(ac.bind(null, e, Pa, Iu), y);
              break;
            }
          }
          ac(e, Pa, Iu);
          break;
        }
        case Q0: {
          ac(e, Pa, Iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ub(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!q(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Io(e, t) {
      t = xs(t, Mm), t = xs(t, Pp), $v(e, t);
    }
    function Z0(e) {
      if (Jw(), (Tt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      $u();
      var t = qc(e, Q);
      if (!Zr(t, je))
        return Va(e, Qn()), null;
      var a = Pm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Xc(e);
        i !== Q && (t = i, a = VS(e, i));
      }
      if (a === jp) {
        var u = Hp;
        throw rc(e, Q), Io(e, t), Va(e, Qn()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Pa, Iu), Va(e, Qn()), null;
    }
    function Ab(e, t) {
      t !== Q && (ef(e, et(t, je)), Va(e, Qn()), (Tt & (Br | ji)) === vr && (Bp(), No()));
    }
    function BS(e, t) {
      var a = Tt;
      Tt |= $0;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Bp(), KE());
      }
    }
    function jb(e, t, a, i, u) {
      var s = Ua(), f = Vr.transition;
      try {
        return Vr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Vr.transition = f, Tt === vr && Bp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Lo && (Tt & (Br | ji)) === vr && $u();
      var t = Tt;
      Tt |= $0;
      var a = Vr.transition, i = Ua();
      try {
        return Vr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Vr.transition = a, Tt = t, (Tt & (Br | ji)) === vr && No();
      }
    }
    function eR() {
      return (Tt & (Br | ji)) !== vr;
    }
    function Hm(e, t) {
      aa(zS, Xl, e), Xl = et(Xl, t);
    }
    function IS(e) {
      Xl = zS.current, ra(zS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, cx(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          D0(u, i), i = i.return;
        }
      Sa = e;
      var s = ic(e.current, null);
      return Dn = s, hr = Xl = t, mr = Bu, Hp = null, Nm = Q, Pp = Q, Mm = Q, Vp = null, Pa = null, Nw(), al.discardPendingWarnings(), s;
    }
    function tR(e, t) {
      do {
        var a = Dn;
        try {
          if (qh(), wC(), sn(), NS.current = null, a === null || a.return === null) {
            mr = jp, Hp = t, Dn = null;
            return;
          }
          if (Ae && a.mode & Nt && xm(a, !0), Pe)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, hr);
            } else
              fs(a, t, hr);
          u1(e, a.return, a, t, hr), iR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function nR() {
      var e = LS.current;
      return LS.current = Sm, e === null ? Sm : e;
    }
    function rR(e) {
      LS.current = e;
    }
    function Fb() {
      US = Qn();
    }
    function Qp(e) {
      Nm = et(e, Nm);
    }
    function Hb() {
      mr === Bu && (mr = Lm);
    }
    function YS() {
      (mr === Bu || mr === Lm || mr === tc) && (mr = Fp), Sa !== null && (Rs(Nm) || Rs(Pp)) && Io(Sa, hr);
    }
    function Pb(e) {
      mr !== Fp && (mr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Vb() {
      return mr === Bu;
    }
    function Pm(e, t) {
      var a = Tt;
      Tt |= Br;
      var i = nR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), Qv(e, t);
        }
        Iu = jd(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Bb();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      if (qh(), Tt = a, rR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Sa = null, hr = Q, mr;
    }
    function Bb() {
      for (; Dn !== null; )
        aR(Dn);
    }
    function Ib(e, t) {
      var a = Tt;
      Tt |= Br;
      var i = nR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), Qv(e, t);
        }
        Iu = jd(), Bp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Yb();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      return qh(), rR(i), Tt = a, Dn !== null ? (jv(), Bu) : (Lc(), Sa = null, hr = Q, mr);
    }
    function Yb() {
      for (; Dn !== null && !md(); )
        aR(Dn);
    }
    function aR(e) {
      var t = e.alternate;
      $t(e);
      var a;
      (e.mode & Nt) !== De ? (Wg(e), a = $S(t, e, Xl), xm(e, !0)) : a = $S(t, e, Xl), sn(), e.memoizedProps = e.pendingProps, a === null ? iR(e) : Dn = a, NS.current = null;
    }
    function iR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === ke) {
          $t(t);
          var u = void 0;
          if ((t.mode & Nt) === De ? u = k0(a, t, Xl) : (Wg(t), u = k0(a, t, Xl), xm(t, !1)), sn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = H1(a, t);
          if (s !== null) {
            s.flags &= Lv, Dn = s;
            return;
          }
          if ((t.mode & Nt) !== De) {
            xm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = ke, i.deletions = null;
          else {
            mr = MS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Bu && (mr = Q0);
    }
    function ac(e, t, a) {
      var i = Ua(), u = Vr.transition;
      try {
        Vr.transition = null, jn(Lr), $b(e, t, a, i);
      } finally {
        Vr.transition = u, jn(i);
      }
      return null;
    }
    function $b(e, t, a, i) {
      do
        $u();
      while (Vo !== null);
      if (n_(), (Tt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Rd(s), u === null)
        return Td(), null;
      if (s === Q && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = et(u.lanes, u.childLanes);
      Ud(e, f), e === Sa && (Sa = null, Dn = null, hr = Q), ((u.subtreeFlags & Gi) !== ke || (u.flags & Gi) !== ke) && (nc || (nc = !0, FS = a, GS(qi, function() {
        return $u(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== ke, v = (u.flags & (kl | Dl | Ol | Gi)) !== ke;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = Ua();
        jn(Lr);
        var b = Tt;
        Tt |= ji, NS.current = null, Y1(e, u), KC(), ab(e, u, s), rx(e.containerInfo), e.current = u, ds(s), ib(u, e, s), ps(), yd(), Tt = b, jn(g), Vr.transition = y;
      } else
        e.current = u, KC();
      var x = nc;
      if (nc ? (nc = !1, Vo = e, Ip = s) : (Bf = 0, Am = null), f = e.pendingLanes, f === Q && (Vf = null), x || sR(e.current, !1), Sd(u.stateNode, i), Xr && e.memoizedUpdaters.clear(), xb(), Va(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], ce = F.stack, Ne = F.digest;
          M(F.value, {
            componentStack: ce,
            digest: Ne
          });
        }
      if (zm) {
        zm = !1;
        var we = AS;
        throw AS = null, we;
      }
      return Zr(Ip, je) && e.tag !== Lo && $u(), f = e.pendingLanes, Zr(f, je) ? (Kw(), e === HS ? Yp++ : (Yp = 0, HS = e)) : Yp = 0, No(), Td(), null;
    }
    function $u() {
      if (Vo !== null) {
        var e = qv(Ip), t = ks(Ma, e), a = Vr.transition, i = Ua();
        try {
          return Vr.transition = null, jn(t), Wb();
        } finally {
          jn(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Qb(e) {
      jS.push(e), nc || (nc = !0, GS(qi, function() {
        return $u(), null;
      }));
    }
    function Wb() {
      if (Vo === null)
        return !1;
      var e = FS;
      FS = null;
      var t = Vo, a = Ip;
      if (Vo = null, Ip = Q, (Tt & (Br | ji)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      PS = !0, Um = !1, Su(a);
      var i = Tt;
      Tt |= ji, db(t.current), ob(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          G1(t, f);
        }
      }
      bd(), sR(t.current, !0), Tt = i, No(), Um ? t === Am ? Bf++ : (Bf = 0, Am = t) : Bf = 0, PS = !1, Um = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Gb(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function qb(e) {
      zm || (zm = !0, AS = e);
    }
    var Kb = qb;
    function uR(e, t, a) {
      var i = Zs(a, t), u = a0(e, i, je), s = zo(e, u, je), f = Ea();
      s !== null && (So(s, je, f), Va(s, f));
    }
    function cn(e, t, a) {
      if (V1(a), Gp(!1), e.tag === J) {
        uR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          uR(i, e, a);
          return;
        } else if (i.tag === Y) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !lR(s)) {
            var f = Zs(a, e), p = fS(i, f, je), v = zo(i, p, je), y = Ea();
            v !== null && (So(v, je, y), Va(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Xb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      Zc(e, a), l_(e), Sa === e && ku(hr, a) && (mr === Fp || mr === Lm && _u(hr) && Qn() - US < W0 ? rc(e, Q) : Mm = et(Mm, a)), Va(e, u);
    }
    function oR(e, t) {
      t === Dt && (t = Lb(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (So(i, t, a), Va(i, a));
    }
    function Jb(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), oR(e, a);
    }
    function Zb(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ln:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oR(e, a);
    }
    function e_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _b(e / 1960) * 1960;
    }
    function t_() {
      if (Yp > Db)
        throw Yp = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > Ob && (Bf = 0, Am = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function n_() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function sR(e, t) {
      $t(e), Vm(e, _l, Cb), t && Vm(e, Ti, Rb), Vm(e, _l, Sb), t && Vm(e, Ti, Eb), sn();
    }
    function Vm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Bm = null;
    function cR(e) {
      {
        if ((Tt & Br) !== vr || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== Be && t !== J && t !== Y && t !== ae && t !== Ke && t !== dt && t !== He)
          return;
        var a = Qe(e) || "ReactComponent";
        if (Bm !== null) {
          if (Bm.has(a))
            return;
          Bm.add(a);
        } else
          Bm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          $t(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? $t(e) : sn();
        }
      }
    }
    var $S;
    {
      var r_ = null;
      $S = function(e, t, a) {
        var i = gR(r_, t);
        try {
          return T0(e, t, a);
        } catch (s) {
          if (hw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (qh(), wC(), D0(e, t), gR(t, i), t.mode & Nt && Wg(t), bl(null, T0, null, e, t, a), Qi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var fR = !1, QS;
    QS = /* @__PURE__ */ new Set();
    function a_(e) {
      if (mi && !Ww())
        switch (e.tag) {
          case ae:
          case Ke:
          case He: {
            var t = Dn && Qe(Dn) || "Unknown", a = t;
            if (!QS.has(a)) {
              QS.add(a);
              var i = Qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Y: {
            fR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), fR = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (Xr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var WS = {};
    function GS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), WS) : hd(e, t);
      }
    }
    function dR(e) {
      if (e !== WS)
        return Mv(e);
    }
    function pR() {
      return dl.current !== null;
    }
    function i_(e) {
      {
        if (e.mode & ct) {
          if (!Y0())
            return;
        } else if (!bb() || Tt !== vr || e.tag !== ae && e.tag !== Ke && e.tag !== He)
          return;
        if (dl.current === null) {
          var t = ir;
          try {
            $t(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Qe(e));
          } finally {
            t ? $t(e) : sn();
          }
        }
      }
    }
    function l_(e) {
      e.tag !== Lo && Y0() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gp(e) {
      K0 = e;
    }
    var Fi = null, If = null, u_ = function(e) {
      Fi = e;
    };
    function Yf(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function qS(e) {
      return Yf(e);
    }
    function KS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function vR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Y: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ae: {
            (typeof i == "function" || s === Ge) && (u = !0);
            break;
          }
          case Ke: {
            (s === $ || s === Ge) && (u = !0);
            break;
          }
          case dt:
          case He: {
            (s === Je || s === Ge) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function hR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var o_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $u(), Yu(function() {
          XS(e.current, i, a);
        });
      }
    }, s_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        $u(), Yu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function XS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ae:
          case He:
          case Y:
            v = p;
            break;
          case Ke:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Fi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === Y ? g = !0 : y = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Fa(e, je);
          x !== null && yr(x, e, je, Xt);
        }
        u !== null && !g && XS(u, t, a), s !== null && XS(s, t, a);
      }
    }
    var c_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ae:
          case He:
          case Y:
            p = f;
            break;
          case Ke:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? f_(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function f_(e, t) {
      {
        var a = d_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case ye:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function d_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ZS;
    {
      ZS = !1;
      try {
        var mR = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function p_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new p_(e, t, a, i);
    };
    function eE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function v_(e) {
      return typeof e == "function" && !eE(e) && e.defaultProps === void 0;
    }
    function h_(e) {
      if (typeof e == "function")
        return eE(e) ? Y : ae;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $)
          return Ke;
        if (t === Je)
          return dt;
      }
      return Be;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Be:
        case ae:
        case He:
          a.type = Yf(e.type);
          break;
        case Y:
          a.type = qS(e.type);
          break;
        case Ke:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function m_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function y_(e, t, a) {
      var i;
      return e === Hh ? (i = ct, t === !0 && (i |= Gt, i |= Mt)) : i = De, Xr && (i |= Nt), ui(J, null, null, i);
    }
    function tE(e, t, a, i, u, s) {
      var f = Be, p = e;
      if (typeof e == "function")
        eE(e) ? (f = Y, p = qS(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case di:
            return Yo(a.children, u, s, t);
          case Qa:
            f = yt, u |= Gt, (u & ct) !== De && (u |= Mt);
            break;
          case pi:
            return g_(a, u, s, t);
          case ue:
            return S_(a, u, s, t);
          case me:
            return E_(a, u, s, t);
          case Tn:
            return yR(a, u, s, t);
          case tn:
          // eslint-disable-next-line no-fallthrough
          case pt:
          // eslint-disable-next-line no-fallthrough
          case on:
          // eslint-disable-next-line no-fallthrough
          case ar:
          // eslint-disable-next-line no-fallthrough
          case st:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = mt;
                  break e;
                case R:
                  f = fn;
                  break e;
                case $:
                  f = Ke, p = KS(p);
                  break e;
                case Je:
                  f = dt;
                  break e;
                case Ge:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Qe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function nE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = tE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ui(ht, e, i, t);
      return u.lanes = a, u;
    }
    function g_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(gt, e, i, t | Nt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function S_(e, t, a, i) {
      var u = ui(_e, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function E_(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function yR(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function rE(e, t, a) {
      var i = ui(Fe, e, null, t);
      return i.lanes = a, i;
    }
    function C_() {
      var e = ui(oe, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function R_(e) {
      var t = ui(Jt, null, null, De);
      return t.stateNode = e, t;
    }
    function aE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(ye, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function gR(e, t) {
      return e === null && (e = ui(Be, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function T_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = ws(Q), this.expirationTimes = ws(Xt), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = ws(Q), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function SR(e, t, a, i, u, s, f, p, v, y) {
      var g = new T_(e, t, a, p, v), b = y_(t, s);
      g.current = b, b.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = x;
      }
      return yg(b), g;
    }
    var iE = "18.3.1";
    function x_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var lE, uE;
    lE = !1, uE = {};
    function ER(e) {
      if (!e)
        return li;
      var t = po(e), a = lw(t);
      if (t.tag === Y) {
        var i = t.type;
        if (Yl(i))
          return WE(t, i, a);
      }
      return a;
    }
    function w_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = Qe(a) || "Component";
          if (!uE[s]) {
            uE[s] = !0;
            var f = ir;
            try {
              $t(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? $t(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function CR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return SR(e, t, v, y, a, i, u, s, f);
    }
    function RR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = SR(a, i, g, e, u, s, f, p, v);
      b.context = ER(null);
      var x = b.current, M = Ea(), A = Bo(x), F = Pu(M, A);
      return F.callback = t ?? null, zo(x, F, A), Nb(b, A, M), b;
    }
    function qp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = Ea(), f = Bo(u);
      gn(f);
      var p = ER(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && ir !== null && !lE && (lE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Qe(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), em(y, u, f)), f;
    }
    function Im(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function b_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Hv(t);
            Ab(t, a);
          }
          break;
        }
        case _e: {
          Yu(function() {
            var u = Fa(e, je);
            if (u !== null) {
              var s = Ea();
              yr(u, e, je, s);
            }
          });
          var i = je;
          oE(e, i);
          break;
        }
      }
    }
    function TR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function oE(e, t) {
      TR(e, t);
      var a = e.alternate;
      a && TR(a, t);
    }
    function __(e) {
      if (e.tag === _e) {
        var t = Ss, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function k_(e) {
      if (e.tag === _e) {
        var t = Bo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function xR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var wR = function(e) {
      return null;
    };
    function D_(e) {
      return wR(e);
    }
    var bR = function(e) {
      return !1;
    };
    function O_(e) {
      return bR(e);
    }
    var _R = null, kR = null, DR = null, OR = null, LR = null, NR = null, MR = null, zR = null, UR = null;
    {
      var AR = function(e, t, a) {
        var i = t[a], u = lt(e) ? e.slice() : nt({}, e);
        return a + 1 === t.length ? (lt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AR(e[i], t, a + 1), u);
      }, jR = function(e, t) {
        return AR(e, t, 0);
      }, FR = function(e, t, a, i) {
        var u = t[i], s = lt(e) ? e.slice() : nt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], lt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = FR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, HR = function(e, t, a) {
        if (t.length !== a.length) {
          $e("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              $e("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return FR(e, t, a, 0);
      }, PR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = lt(e) ? e.slice() : nt({}, e);
        return s[u] = PR(e[u], t, a + 1, i), s;
      }, VR = function(e, t, a) {
        return PR(e, t, 0, a);
      }, sE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _R = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, Xt);
        }
      }, kR = function(e, t, a) {
        var i = sE(e, t);
        if (i !== null) {
          var u = jR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = nt({}, e.memoizedProps);
          var s = Fa(e, je);
          s !== null && yr(s, e, je, Xt);
        }
      }, DR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = HR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, Xt);
        }
      }, OR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, Xt);
      }, LR = function(e, t) {
        e.pendingProps = jR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, je);
        a !== null && yr(a, e, je, Xt);
      }, NR = function(e, t, a) {
        e.pendingProps = HR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, Xt);
      }, MR = function(e) {
        var t = Fa(e, je);
        t !== null && yr(t, e, je, Xt);
      }, zR = function(e) {
        wR = e;
      }, UR = function(e) {
        bR = e;
      };
    }
    function L_(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function N_(e) {
      return null;
    }
    function M_() {
      return ir;
    }
    function z_(e) {
      var t = e.findFiberByHostInstance, a = D.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _R,
        overrideHookStateDeletePath: kR,
        overrideHookStateRenamePath: DR,
        overrideProps: OR,
        overridePropsDeletePath: LR,
        overridePropsRenamePath: NR,
        setErrorHandler: zR,
        setSuspenseHandler: UR,
        scheduleUpdate: MR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: L_,
        findFiberByHostInstance: t || N_,
        // React Refresh
        findHostInstancesForRefresh: c_,
        scheduleRefresh: o_,
        scheduleRoot: s_,
        setRefreshHandler: u_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: M_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iE
      });
    }
    var BR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cE(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = cE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : $m(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Nn) {
          var i = xR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Ym.prototype.unmount = cE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          qp(null, e, null, null);
        }), BE(t);
      }
    };
    function U_(e, t) {
      if (!$m(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IR(e);
      var a = !1, i = !1, u = "", s = BR;
      t != null && (t.hydrate ? $e("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = CR(e, Hh, null, a, i, u, s);
      Nh(f.current, e);
      var p = e.nodeType === Nn ? e.parentNode : e;
      return tp(p), new cE(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function A_(e) {
      e && eh(e);
    }
    Ym.prototype.unstable_scheduleHydration = A_;
    function j_(e, t, a) {
      if (!$m(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = BR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = RR(t, null, e, Hh, i, s, f, p, v);
      if (Nh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Vw(y, b);
        }
      return new Ym(y);
    }
    function $m(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === $i || e.nodeType === rd));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === $i || e.nodeType === rd || e.nodeType === Nn && e.nodeValue === " react-mount-point-unstable "));
    }
    function IR(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var F_ = D.ReactCurrentOwner, YR;
    YR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Nn) {
        var t = xR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = fE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function $R() {
    }
    function H_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Im(f);
            s.call(x);
          };
        }
        var f = RR(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $R
        );
        e._reactRootContainer = f, Nh(f.current, e);
        var p = e.nodeType === Nn ? e.parentNode : e;
        return tp(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Im(g);
            y.call(x);
          };
        }
        var g = CR(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $R
        );
        e._reactRootContainer = g, Nh(g.current, e);
        var b = e.nodeType === Nn ? e.parentNode : e;
        return tp(b), Yu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function P_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Qm(e, t, a, i, u) {
      YR(a), P_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = H_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Im(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return Im(f);
    }
    var QR = !1;
    function V_(e) {
      {
        QR || (QR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = F_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : w_(e, "findDOMNode");
    }
    function B_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Qm(null, e, t, !0, a);
    }
    function I_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Qm(null, e, t, !1, a);
    }
    function Y_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !oy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Qm(e, t, a, !1, i);
    }
    var WR = !1;
    function $_(e) {
      if (WR || (WR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = fE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Qm(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = fE(e), s = !!(u && Do(u)), f = e.nodeType === Qr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(b_), Eo(__), Kv(k_), Os(Ua), Fd(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(WT), uy(BS, jb, Yu);
    function Q_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$m(t))
        throw new Error("Target container is not a DOM element.");
      return x_(e, t, null, a);
    }
    function W_(e, t, a, i) {
      return Y_(e, t, a, i);
    }
    var dE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Mh, oo, Sc, BS]
    };
    function G_(e, t) {
      return dE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), U_(e, t);
    }
    function q_(e, t, a) {
      return dE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), j_(e, t, a);
    }
    function K_(e) {
      return eR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var X_ = z_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: iE,
      rendererPackageName: "react-dom"
    });
    if (!X_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var GR = window.location.protocol;
      /^(https?|file):$/.test(GR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (GR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE, Ia.createPortal = Q_, Ia.createRoot = G_, Ia.findDOMNode = V_, Ia.flushSync = K_, Ia.hydrate = B_, Ia.hydrateRoot = q_, Ia.render = I_, Ia.unmountComponentAtNode = $_, Ia.unstable_batchedUpdates = BS, Ia.unstable_renderSubtreeIntoContainer = W_, Ia.version = iE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ia;
}
var lT;
function sk() {
  if (lT) return qm.exports;
  lT = 1;
  function B() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B);
      } catch (I) {
        console.error(I);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (B(), qm.exports = uk()) : qm.exports = ok(), qm.exports;
}
var uT;
function ck() {
  if (uT) return Qf;
  uT = 1;
  var B = sk();
  if (process.env.NODE_ENV === "production")
    Qf.createRoot = B.createRoot, Qf.hydrateRoot = B.hydrateRoot;
  else {
    var I = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Qf.createRoot = function(D, Ye) {
      I.usingClientEntryPoint = !0;
      try {
        return B.createRoot(D, Ye);
      } finally {
        I.usingClientEntryPoint = !1;
      }
    }, Qf.hydrateRoot = function(D, Ye, We) {
      I.usingClientEntryPoint = !0;
      try {
        return B.hydrateRoot(D, Ye, We);
      } finally {
        I.usingClientEntryPoint = !1;
      }
    };
  }
  return Qf;
}
var fk = ck(), si = tv();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = (B) => B.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fT = (...B) => B.filter((I, D, Ye) => !!I && I.trim() !== "" && Ye.indexOf(I) === D).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vk = si.forwardRef(
  ({
    color: B = "currentColor",
    size: I = 24,
    strokeWidth: D = 2,
    absoluteStrokeWidth: Ye,
    className: We = "",
    children: $e,
    iconNode: S,
    ...ft
  }, ae) => si.createElement(
    "svg",
    {
      ref: ae,
      ...pk,
      width: I,
      height: I,
      stroke: B,
      strokeWidth: Ye ? Number(D) * 24 / Number(I) : D,
      className: fT("lucide", We),
      ...ft
    },
    [
      ...S.map(([Y, Be]) => si.createElement(Y, Be)),
      ...Array.isArray($e) ? $e : [$e]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dT = (B, I) => {
  const D = si.forwardRef(
    ({ className: Ye, ...We }, $e) => si.createElement(vk, {
      ref: $e,
      iconNode: I,
      className: fT(`lucide-${dk(B)}`, Ye),
      ...We
    })
  );
  return D.displayName = `${B}`, D;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = dT("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mk = dT("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), yk = ["chats", "projects", "agents"], gk = ["usage", "spending", "billing"];
function Sk({
  copy: B,
  activeTab: I,
  onTabChange: D,
  settingsOpen: Ye,
  onSettingsToggle: We,
  theme: $e,
  onThemeChange: S,
  locale: ft,
  onLocaleChange: ae
}) {
  return /* @__PURE__ */ re.jsxs("div", { className: "lpv-chrome-bar", children: [
    /* @__PURE__ */ re.jsxs("div", { className: "lpv-brand", children: [
      /* @__PURE__ */ re.jsx("div", { className: "lpv-logo-mark", children: /* @__PURE__ */ re.jsx("span", {}) }),
      /* @__PURE__ */ re.jsxs("div", { children: [
        /* @__PURE__ */ re.jsx("strong", { children: B.brand.name }),
        /* @__PURE__ */ re.jsx("small", { children: B.brand.tagline })
      ] })
    ] }),
    /* @__PURE__ */ re.jsx("nav", { className: "lpv-top-nav", children: /* @__PURE__ */ re.jsxs("div", { className: "lpv-top-nav-group", children: [
      /* @__PURE__ */ re.jsx("div", { className: "lpv-top-nav-segmented", children: yk.map((Y) => /* @__PURE__ */ re.jsx(
        "button",
        {
          "data-active": I === Y ? "true" : "false",
          onClick: () => D(Y),
          children: B.nav[Y]
        },
        Y
      )) }),
      /* @__PURE__ */ re.jsx("div", { className: "lpv-top-nav-segmented", children: gk.map((Y) => /* @__PURE__ */ re.jsx(
        "button",
        {
          "data-active": I === Y ? "true" : "false",
          onClick: () => D(Y),
          children: B.nav[Y]
        },
        Y
      )) })
    ] }) }),
    /* @__PURE__ */ re.jsx("div", { className: "lpv-chrome-actions", children: /* @__PURE__ */ re.jsx("button", { className: "lpv-settings-trigger", onClick: We, "aria-label": "Settings", children: /* @__PURE__ */ re.jsx(hk, { size: 16 }) }) }),
    /* @__PURE__ */ re.jsx(
      "div",
      {
        className: "lpv-settings-backdrop",
        "data-open": Ye ? "true" : "false",
        onClick: We
      }
    ),
    Ye && /* @__PURE__ */ re.jsx("div", { className: "lpv-settings-overlay", children: /* @__PURE__ */ re.jsxs("div", { className: "lpv-settings-card", children: [
      /* @__PURE__ */ re.jsxs("div", { className: "lpv-settings-head", children: [
        /* @__PURE__ */ re.jsx("span", { children: B.settings.title }),
        /* @__PURE__ */ re.jsx("button", { onClick: We, "aria-label": "Close", children: /* @__PURE__ */ re.jsx(mk, { size: 14 }) })
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: "lpv-settings-row", children: [
        /* @__PURE__ */ re.jsx("span", { children: B.settings.theme }),
        /* @__PURE__ */ re.jsxs("label", { className: "lpv-switch", children: [
          /* @__PURE__ */ re.jsx(
            "input",
            {
              type: "checkbox",
              checked: $e === "dark",
              onChange: (Y) => S(Y.target.checked ? "dark" : "light")
            }
          ),
          /* @__PURE__ */ re.jsx("span", {})
        ] })
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: "lpv-settings-row", children: [
        /* @__PURE__ */ re.jsx("span", { children: B.settings.language }),
        /* @__PURE__ */ re.jsxs("div", { className: "lpv-lang-toggle", children: [
          /* @__PURE__ */ re.jsx(
            "button",
            {
              "data-active": ft === "en" ? "true" : "false",
              onClick: () => ae("en"),
              children: "EN"
            }
          ),
          /* @__PURE__ */ re.jsx(
            "button",
            {
              "data-active": ft === "ko" ? "true" : "false",
              onClick: () => ae("ko"),
              children: "KO"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
const oT = [
  {
    id: "arch",
    title: "Backend Architecture",
    preview: "Which architecture fits best for real-time chat with 10k users?",
    runPlan: ["GPT-4o", "Claude Sonnet", "Synthesis"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: "Which backend architecture fits best for a real-time chat app with 10,000 concurrent users?"
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "GPT-4o",
            provider: "OpenAI",
            cost: "$0.003",
            body: "For 10k concurrent users, use WebSockets with horizontal scaling and a pub/sub broker (Redis or Kafka) to fan messages across nodes. Each server holds open connections; the broker handles cross-node delivery."
          },
          {
            name: "Claude Sonnet",
            provider: "Anthropic",
            cost: "$0.004",
            body: "At 10k concurrent, the key constraint is connection state. A managed WebSocket layer keeps your API nodes stateless. Stateless nodes scale linearly — add capacity without re-balancing sessions."
          }
        ],
        synthesis: "Both models agree: WebSocket + pub/sub is the right foundation. GPT-4o focuses on infrastructure topology; Claude emphasizes managed connection abstraction for stateless scaling. Recommendation: managed WebSocket layer + Redis pub/sub + stateless API nodes."
      }
    ]
  },
  {
    id: "code",
    title: "Code Review",
    preview: "Review this Python paginate() function for edge cases",
    runPlan: ["Claude Opus", "Review"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: `Review this Python function for edge cases:

def paginate(items, page, size=20):
    return items[page * size : (page + 1) * size]`
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "Claude Opus",
            provider: "Anthropic",
            cost: "$0.015",
            body: "Three edge cases: (1) negative page or size — add input guards. (2) page beyond bounds — silently returns empty list; consider raising IndexError or returning None explicitly. (3) size=0 causes a zero-length slice, which is harmless but probably unintended. Recommend validating inputs and documenting the empty-list behavior."
          }
        ]
      }
    ]
  },
  {
    id: "privacy",
    title: "Privacy Gateway",
    preview: "Process HR document with PII masking before routing",
    runPlan: ["Privacy Gate", "GPT-4o", "Verifier"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: "Summarize the performance review for John Smith (employee ID 10482, SSN ending 4821) focusing on leadership."
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "GPT-4o",
            provider: "OpenAI",
            cost: "$0.002",
            body: "[EMPLOYEE_NAME] (ID [EMP_ID], SSN [REDACTED]) shows strong cross-functional leadership. Highlights: led 3 product launches, mentored 5 junior engineers, drove a 22% improvement in team velocity over Q3.",
            privacyNote: "PII masked before routing · SSN redacted · Name anonymized"
          }
        ]
      }
    ]
  },
  {
    id: "research",
    title: "Research Synthesis",
    preview: "Compare LoRA, QLoRA, and full fine-tuning for production",
    runPlan: ["GPT-4o", "Gemini Pro", "Claude Sonnet", "Synthesis"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: "Compare LoRA, QLoRA, and full fine-tuning for a production customer-support LLM. Consider cost, quality, and iteration speed."
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "GPT-4o",
            provider: "OpenAI",
            cost: "$0.005",
            body: "LoRA offers the best cost/quality tradeoff for most teams. Full fine-tuning is 10–40× more expensive and rarely justifies the gap unless you need extreme domain specificity."
          },
          {
            name: "Gemini Pro",
            provider: "Google",
            cost: "$0.002",
            body: "QLoRA extends LoRA with 4-bit quantization, cutting VRAM by ~60% with minimal quality loss. Ideal when GPU budget is constrained."
          },
          {
            name: "Claude Sonnet",
            provider: "Anthropic",
            cost: "$0.004",
            body: "For iteration speed, LoRA wins — typical runs finish in 2–6 hours on a single A100. QLoRA enables consumer GPUs but adds quantization complexity."
          }
        ],
        synthesis: "Consensus: LoRA for most teams (best balance of cost, quality, and speed). QLoRA when GPU budget is tight. Full fine-tuning only for extreme specialization needs."
      }
    ]
  }
];
function Ek({ copy: B, productUrl: I }) {
  const [D, Ye] = si.useState(oT[0]), [We, $e] = si.useState(""), [S, ft] = si.useState(""), ae = D.turns.flatMap((Y) => Y.models ?? []).reduce((Y, Be) => Y + parseFloat(Be.cost.replace("$", "")), 0).toFixed(3);
  return /* @__PURE__ */ re.jsxs("div", { className: "lpv-feature-page lpv-console-page lpv-chats-page", children: [
    /* @__PURE__ */ re.jsxs("div", { className: "lpv-primary-sidebar", children: [
      /* @__PURE__ */ re.jsx("div", { className: "lpv-primary-sidebar-head", children: /* @__PURE__ */ re.jsx("strong", { children: B.sidebar.title }) }),
      /* @__PURE__ */ re.jsx("div", { className: "lpv-primary-sidebar-list", children: oT.map((Y) => /* @__PURE__ */ re.jsxs(
        "button",
        {
          "data-active": D.id === Y.id ? "true" : "false",
          onClick: () => {
            Ye(Y), $e(""), ft("");
          },
          children: [
            /* @__PURE__ */ re.jsx("span", { children: Y.title }),
            /* @__PURE__ */ re.jsx("small", { children: Y.preview })
          ]
        },
        Y.id
      )) })
    ] }),
    /* @__PURE__ */ re.jsxs("div", { className: "lpv-chat-console", children: [
      /* @__PURE__ */ re.jsxs("div", { className: "lpv-workspace-thread", children: [
        /* @__PURE__ */ re.jsxs("div", { className: "lpv-thread-sticky", children: [
          /* @__PURE__ */ re.jsx("span", { children: B.thread.label }),
          /* @__PURE__ */ re.jsx("p", { children: D.title })
        ] }),
        /* @__PURE__ */ re.jsx("div", { className: "lpv-thread-scroll", children: D.turns.map((Y) => {
          var Be;
          return /* @__PURE__ */ re.jsxs("div", { className: "lpv-turn", children: [
            Y.role === "user" && /* @__PURE__ */ re.jsx("div", { className: "lpv-turn-question", children: /* @__PURE__ */ re.jsx("p", { children: Y.text }) }),
            Y.role === "model-answers" && /* @__PURE__ */ re.jsxs("div", { className: "lpv-turn-answers", children: [
              (Be = Y.models) == null ? void 0 : Be.map((J) => /* @__PURE__ */ re.jsxs("div", { className: "lpv-answer-doc", children: [
                /* @__PURE__ */ re.jsxs("header", { children: [
                  /* @__PURE__ */ re.jsx("strong", { children: J.name }),
                  /* @__PURE__ */ re.jsxs("small", { children: [
                    J.provider,
                    " · ",
                    J.cost
                  ] })
                ] }),
                /* @__PURE__ */ re.jsx("p", { children: J.body }),
                J.privacyNote && /* @__PURE__ */ re.jsx("span", { className: "lpv-privacy-note", children: J.privacyNote })
              ] }, J.name)),
              Y.synthesis && /* @__PURE__ */ re.jsxs("div", { className: "lpv-synthesis-doc", children: [
                /* @__PURE__ */ re.jsx("strong", { children: "Synthesis" }),
                /* @__PURE__ */ re.jsx("p", { children: Y.synthesis })
              ] })
            ] })
          ] }, Y.id);
        }) })
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: "lpv-composer lpv-composer-dock", children: [
        /* @__PURE__ */ re.jsx("div", { className: "lpv-role-strip", children: D.runPlan.map((Y) => /* @__PURE__ */ re.jsx("span", { children: /* @__PURE__ */ re.jsx("em", { children: Y }) }, Y)) }),
        /* @__PURE__ */ re.jsxs("div", { className: "lpv-prompt-split", children: [
          /* @__PURE__ */ re.jsx(
            "textarea",
            {
              className: "lpv-prompt",
              value: We,
              onChange: (Y) => $e(Y.target.value),
              placeholder: B.composer.placeholder
            }
          ),
          /* @__PURE__ */ re.jsx(
            "textarea",
            {
              className: "lpv-prompt-context",
              value: S,
              onChange: (Y) => ft(Y.target.value),
              placeholder: B.composer.context
            }
          )
        ] }),
        /* @__PURE__ */ re.jsxs("div", { className: "lpv-composer-footer", children: [
          /* @__PURE__ */ re.jsxs("small", { className: "lpv-faint", style: { color: "var(--lpv-faint)", fontSize: "11px" }, children: [
            "~$",
            ae,
            " estimated"
          ] }),
          /* @__PURE__ */ re.jsx(
            "button",
            {
              className: "lpv-run-button",
              onClick: () => window.location.assign(I),
              children: B.composer.execute
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Ck({ tab: B, copy: I }) {
  const D = I.placeholder[B];
  return D ? /* @__PURE__ */ re.jsx("div", { className: "lpv-other-page", children: /* @__PURE__ */ re.jsxs("div", { className: "lpv-other-page-inner", children: [
    /* @__PURE__ */ re.jsx("h2", { children: D.title }),
    /* @__PURE__ */ re.jsx("p", { children: D.body })
  ] }) }) : null;
}
const Rk = {
  en: {
    brand: { name: "LogK", tagline: "AI Delegation Layer" },
    nav: {
      chats: "Chats",
      projects: "Projects",
      agents: "Agents",
      usage: "Usage",
      spending: "Spending",
      billing: "Billing"
    },
    settings: { title: "Settings", theme: "Dark mode", language: "Language" },
    composer: {
      placeholder: "Ask anything across all your models…",
      context: "Add constraints, privacy rules, or routing context…",
      execute: "Run"
    },
    sidebar: { title: "Conversations" },
    thread: { label: "active chat" },
    placeholder: {
      projects: { title: "Projects", body: "Group chats, agents, and saved run plans by project." },
      agents: { title: "Agents", body: "Visual agent orchestration — model nodes, tools, privacy gates, and verification steps." },
      usage: { title: "Usage", body: "Request counts, tokens used, and provider distribution over time." },
      spending: { title: "Spending", body: "Credit balance, spend trend, and cost breakdown by model." },
      billing: { title: "Billing", body: "Current plan, credit purchases, and invoice history." }
    }
  },
  ko: {
    brand: { name: "LogK", tagline: "AI 위임 레이어" },
    nav: {
      chats: "채팅",
      projects: "프로젝트",
      agents: "에이전트",
      usage: "사용량",
      spending: "지출",
      billing: "청구"
    },
    settings: { title: "설정", theme: "다크 모드", language: "언어" },
    composer: {
      placeholder: "모든 모델에 자유롭게 질문하세요…",
      context: "제약 조건, 개인정보 규칙 또는 라우팅 컨텍스트를 추가하세요…",
      execute: "실행"
    },
    sidebar: { title: "대화" },
    thread: { label: "현재 채팅" },
    placeholder: {
      projects: { title: "프로젝트", body: "채팅, 에이전트, 저장된 실행 계획을 프로젝트로 그룹화합니다." },
      agents: { title: "에이전트", body: "시각적 에이전트 오케스트레이션 — 모델 노드, 도구, 개인정보 게이트, 검증 단계." },
      usage: { title: "사용량", body: "요청 횟수, 사용 토큰, 시간별 제공자 분포." },
      spending: { title: "지출", body: "크레딧 잔액, 지출 추이, 모델별 비용 내역." },
      billing: { title: "청구", body: "현재 플랜, 크레딧 구매, 청구서 내역." }
    }
  }
}, Tk = ["chats", "projects", "agents", "usage", "spending", "billing"], sT = {
  "model-router": "chats",
  "cost-planner": "spending",
  "privacy-gateway": "chats",
  "answer-synthesis": "chats",
  "audit-trace": "chats",
  projects: "projects",
  agents: "agents",
  chats: "chats",
  usage: "usage",
  spending: "spending",
  billing: "billing"
};
function xk({ locale: B, feature: I, productUrl: D }) {
  const [Ye, We] = si.useState(B), [$e, S] = si.useState(sT[I] ?? "chats"), [ft, ae] = si.useState("dark"), [Y, Be] = si.useState(!1);
  si.useEffect(() => {
    const ye = (oe) => {
      const Fe = oe.detail, ht = sT[Fe == null ? void 0 : Fe.feature];
      ht && S(ht);
    };
    return window.addEventListener("logk-preview:set-feature", ye), () => window.removeEventListener("logk-preview:set-feature", ye);
  }, []);
  const J = Rk[Ye];
  return /* @__PURE__ */ re.jsxs("div", { className: "lpv-shell", "data-preview-theme": ft, children: [
    /* @__PURE__ */ re.jsx(
      Sk,
      {
        copy: J,
        tabs: Tk,
        activeTab: $e,
        onTabChange: S,
        settingsOpen: Y,
        onSettingsToggle: () => Be((ye) => !ye),
        theme: ft,
        onThemeChange: ae,
        locale: Ye,
        onLocaleChange: We
      }
    ),
    /* @__PURE__ */ re.jsx("div", { className: "lpv-app-frame", children: $e === "chats" ? /* @__PURE__ */ re.jsx(Ek, { copy: J, productUrl: D }) : /* @__PURE__ */ re.jsx(Ck, { tab: $e, copy: J }) })
  ] });
}
function pT() {
  document.querySelectorAll("[data-product-preview]").forEach((B) => {
    if (B.dataset.mounted === "true") return;
    B.dataset.mounted = "true";
    const I = B.dataset.locale ?? "en", D = B.dataset.feature ?? "chats", Ye = B.dataset.productUrl ?? `/${I}/product/`;
    fk.createRoot(B).render(
      /* @__PURE__ */ re.jsx(xk, { locale: I, feature: D, productUrl: Ye })
    );
  });
}
pT();
document.addEventListener("astro:page-load", pT);
