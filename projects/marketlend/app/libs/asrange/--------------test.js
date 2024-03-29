/**
 * Created by Буська on 21.03.2017.
 */
/**
 * asRange v0.3.3
 * https://github.com/amazingSurge/jquery-asRange
 *
 * Copyright (c) amazingSurge
 * Released under the LGPL-3.0 license
 */
!function (t, e) {
    if ("function" == typeof define && define.amd)define(["jquery"], e); else if ("undefined" != typeof exports)e(require("jquery")); else {
        var i = {exports: {}};
        e(t.jQuery), t.jqueryAsRangeEs = i.exports
    }
}(this, function (t) {
    "use strict";
    function e(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function s(t) {
        var e = t.originalEvent;
        return e.touches && e.touches.length && e.touches[0] && (e = e.touches[0]), e
    }

    var n = e(t), a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }, o = function () {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
        }

        return function (e, i, s) {
            return i && t(e.prototype, i), s && t(e, s), e
        }
    }(), r = {
        namespace: "asRange",
        skin: null,
        max: 100,
        min: 0,
        value: null,
        step: 10,
        limit: !0,
        range: !1,
        direction: "h",
        keyboard: !0,
        replaceFirst: !1,
        tip: !0,
        scale: !0,
        format: function (t) {
            return t
        }
    }, u = function () {
        function t(e, s, a) {
            i(this, t), this.$element = e, this.uid = s, this.parent = a, this.options = n.default.extend(!0, {}, this.parent.options), this.direction = this.options.direction, this.value = null, this.classes = {active: this.parent.namespace + "-pointer_active"}
        }

        return o(t, [{
            key: "mousedown", value: function (t) {
                var e = this.parent.direction.axis, i = this.parent.direction.position, a = this.parent.$wrap.offset();
                this.$element.trigger(this.parent.namespace + "::moveStart", this), this.data = {}, this.data.start = t[e], this.data.position = t[e] - a[i];
                var o = this.parent.getValueFromPosition(this.data.position);
                return this.set(o), n.default.each(this.parent.pointer, function (t, e) {
                    e.deactive()
                }), this.active(), this.mousemove = function (t) {
                    var i = s(t), n = this.parent.getValueFromPosition(this.data.position + (i[e] || this.data.start) - this.data.start);
                    return this.set(n), t.preventDefault(), !1
                }, this.mouseup = function () {
                    return (0, n.default)(document).off(".asRange mousemove.asRange touchend.asRange mouseup.asRange touchcancel.asRange"), this.$element.trigger(this.parent.namespace + "::moveEnd", this), !1
                }, (0, n.default)(document).on("touchmove.asRange mousemove.asRange", n.default.proxy(this.mousemove, this)).on("touchend.asRange mouseup.asRange", n.default.proxy(this.mouseup, this)), !1
            }
        }, {
            key: "active", value: function () {
                this.$element.addClass(this.classes.active)
            }
        }, {
            key: "deactive", value: function () {
                this.$element.removeClass(this.classes.active)
            }
        }, {
            key: "set", value: function (t) {
                this.value !== t && (this.parent.step && (t = this.matchStep(t)), this.options.limit === !0 ? t = this.matchLimit(t) : (t <= this.parent.min && (t = this.parent.min), t >= this.parent.max && (t = this.parent.max)), this.value = t, this.updatePosition(), this.$element.focus(), this.$element.trigger(this.parent.namespace + "::move", this))
            }
        }, {
            key: "updatePosition", value: function () {
                var t = {};
                t[this.parent.direction.position] = this.getPercent() + "%", this.$element.css(t)
            }
        }, {
            key: "getPercent", value: function () {
                return (this.value - this.parent.min) / this.parent.interval * 100
            }
        }, {
            key: "get", value: function () {
                return this.value
            }
        }, {
            key: "matchStep", value: function (t) {
                var e = this.parent.step, i = e.toString().split(".")[1];
                return t = Math.round(t / e) * e, i && (t = t.toFixed(i.length)), parseFloat(t)
            }
        }, {
            key: "matchLimit", value: function (t) {
                var e = void 0, i = void 0, s = this.parent.pointer;
                return e = 1 === this.uid ? this.parent.min : s[this.uid - 2].value, i = s[this.uid] && null !== s[this.uid].value ? s[this.uid].value : this.parent.max, t <= e && (t = e), t >= i && (t = i), t
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".asRange"), this.$element.remove()
            }
        }]), t
    }(), l = {
        defaults: {scale: {valuesNumber: 3, gap: 1, grid: 5}}, init: function (t) {
            var e = n.default.extend({}, this.defaults, t.options.scale), i = e.scale;
            i.values = [], i.values.push(t.min);
            for (var s = (t.max - t.min) / (i.valuesNumber - 1), a = 1; a <= i.valuesNumber - 2; a++)i.values.push(s * a);
            i.values.push(t.max);
            var o = {
                scale: t.namespace + "-scale",
                lines: t.namespace + "-scale-lines",
                grid: t.namespace + "-scale-grid",
                inlineGrid: t.namespace + "-scale-inlineGrid",
                values: t.namespace + "-scale-values"
            }, r = i.values.length, u = ((i.grid - 1) * (i.gap + 1) + i.gap) * (r - 1) + r, l = 100 / (u - 1), h = 100 / (r - 1);
            this.$scale = (0, n.default)("<div></div>").addClass(o.scale), this.$lines = (0, n.default)("<ul></ul>").addClass(o.lines), this.$values = (0, n.default)("<ul></ul>").addClass(o.values);
            for (var p = 0; p < u; p++) {
                var c = void 0;
                c = 0 === p || p === u || p % ((u - 1) / (r - 1)) === 0 ? (0, n.default)('<li class="' + o.grid + '"></li>') : p % i.grid === 0 ? (0, n.default)('<li class="' + o.inlineGrid + '"></li>') : (0, n.default)("<li></li>"), c.css({left: l * p + "%"}).appendTo(this.$lines)
            }
            for (var d = 0; d < r; d++)(0, n.default)("<li><span>" + i.values[d] + "</span></li>").css({left: h * d + "%"}).appendTo(this.$values);
            this.$lines.add(this.$values).appendTo(this.$scale), this.$scale.appendTo(t.$wrap)
        }, update: function (t) {
            this.$scale.remove(), this.init(t)
        }
    }, h = {
        defaults: {}, init: function (t) {
            var e = this;
            if (this.$arrow = (0, n.default)("<span></span>").appendTo(t.$wrap), this.$arrow.addClass(t.namespace + "-selected"), t.options.range === !1 && t.p1.$element.on(t.namespace + "::move", function (t, i) {
                    e.$arrow.css({left: 0, width: i.getPercent() + "%"})
                }), t.options.range === !0) {
                var i = function () {
                    var i = t.p2.getPercent() - t.p1.getPercent(), s = void 0;
                    i >= 0 ? s = t.p1.getPercent() : (i = -i, s = t.p2.getPercent()), e.$arrow.css({
                        left: s + "%",
                        width: i + "%"
                    })
                };
                t.p1.$element.on(t.namespace + "::move", i), t.p2.$element.on(t.namespace + "::move", i)
            }
        }
    }, p = {
        defaults: {active: "always"}, init: function (t) {
            var e = this, i = n.default.extend({}, this.defaults, t.options.tip);
            this.opts = i, this.classes = {
                tip: t.namespace + "-tip",
                show: t.namespace + "-tip-show"
            }, n.default.each(t.pointer, function (i, s) {
                var o = (0, n.default)("<span></span>").appendTo(t.pointer[i].$element);
                o.addClass(e.classes.tip), "onMove" === e.opts.active && (o.css({display: "none"}), s.$element.on(t.namespace + "::moveEnd", function () {
                    return e.hide(o), !1
                }).on(t.namespace + "::moveStart", function () {
                    return e.show(o), !1
                })), s.$element.on(t.namespace + "::move", function () {
                    var e = void 0;
                    if (e = t.options.range ? t.get()[i] : t.get(), "function" == typeof t.options.format)if (t.options.replaceFirst && "number" != typeof e) {
                        if ("string" == typeof t.options.replaceFirst && (e = t.options.replaceFirst), "object" === a(t.options.replaceFirst))for (var s in t.options.replaceFirst)Object.hasOwnProperty(t.options.replaceFirst, s) && (e = t.options.replaceFirst[s])
                    } else e = t.options.format(e);
                    return o.text(e), !1
                })
            })
        }, show: function (t) {
            t.addClass(this.classes.show), t.css({display: "block"})
        }, hide: function (t) {
            t.removeClass(this.classes.show), t.css({display: "none"})
        }
    }, c = function () {
        var t = (0, n.default)(document);
        t.on("asRange::ready", function (e, i) {
            var s = void 0, a = {
                keys: {
                    UP: 38,
                    DOWN: 40,
                    LEFT: 37,
                    RIGHT: 39,
                    RETURN: 13,
                    ESCAPE: 27,
                    BACKSPACE: 8,
                    SPACE: 32
                }, map: {}, bound: !1, press: function (t) {
                    var e = t.keyCode || t.which;
                    if (e in a.map && "function" == typeof a.map[e])return a.map[e](t), !1
                }, attach: function (e) {
                    var i = void 0, s = void 0;
                    for (i in e)e.hasOwnProperty(i) && (s = i.toUpperCase(), s in a.keys ? a.map[a.keys[s]] = e[i] : a.map[s] = e[i]);
                    a.bound || (a.bound = !0, t.bind("keydown", a.press))
                }, detach: function () {
                    a.bound = !1, a.map = {}, t.unbind("keydown", a.press)
                }
            };
            i.options.keyboard === !0 && n.default.each(i.pointer, function (t, e) {
                s = i.options.step ? i.options.step : 1;
                var n = function () {
                    var t = e.value;
                    e.set(t - s)
                }, o = function () {
                    var t = e.value;
                    e.set(t + s)
                };
                e.$element.attr("tabindex", "0").on("focus", function () {
                    return a.attach({left: n, right: o}), !1
                }).on("blur", function () {
                    return a.detach(), !1
                })
            })
        })
    }, d = {}, f = function () {
        function t(e, s) {
            var a = this;
            i(this, t);
            var o = {};
            if (this.element = e, this.$element = (0, n.default)(e), this.$element.is("input")) {
                var u = this.$element.val();
                "string" == typeof u && (o.value = u.split(",")), n.default.each(["min", "max", "step"], function (t, e) {
                    var i = parseFloat(a.$element.attr(e));
                    isNaN(i) || (o[e] = i)
                }), this.$element.css({display: "none"}), this.$wrap = (0, n.default)("<div></div>"), this.$element.after(this.$wrap)
            } else this.$wrap = this.$element;
            if (this.options = n.default.extend({}, r, s, this.$element.data(), o), this.namespace = this.options.namespace, this.components = n.default.extend(!0, {}, d), this.options.range && (this.options.replaceFirst = !1), this.value = this.options.value, null === this.value && (this.value = this.options.min), this.options.range ? n.default.isArray(this.value) ? 1 === this.value.length && (this.value[1] = this.value[0]) : this.value = [this.value, this.value] : n.default.isArray(this.value) && (this.value = this.value[0]), this.min = this.options.min, this.max = this.options.max, this.step = this.options.step, this.interval = this.max - this.min, this.initialized = !1, this.updating = !1, this.disabled = !1, "v" === this.options.direction ? this.direction = {
                    axis: "pageY",
                    position: "top"
                } : this.direction = {
                    axis: "pageX",
                    position: "left"
                }, this.$wrap.addClass(this.namespace), this.options.skin && this.$wrap.addClass(this.namespace + "_" + this.options.skin), this.max < this.min || this.step >= this.interval)throw new Error("error options about max min step");
            this.init()
        }

        return o(t, [{
            key: "init", value: function () {
                this.$wrap.append('<div class="' + this.namespace + '-bar" />'), this.buildPointers(), this.components.selected.init(this), this.options.tip !== !1 && this.components.tip.init(this), this.options.scale !== !1 && this.components.scale.init(this), this.set(this.value), this.bindEvents(), this._trigger("ready"), this.initialized = !0
            }
        }, {
            key: "_trigger", value: function (t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)i[s - 1] = arguments[s];
                var n = [this].concat(i);
                this.$element.trigger(this.namespace + ("::" + t), n), t = t.replace(/\b\w+\b/g, function (t) {
                    return t.substring(0, 1).toUpperCase() + t.substring(1)
                });
                var a = "on" + t;
                "function" == typeof this.options[a] && this.options[a].apply(this, i)
            }
        }, {
            key: "buildPointers", value: function () {
                this.pointer = [];
                var t = 1;
                this.options.range && (t = 2);
                for (var e = 1; e <= t; e++) {
                    var i = (0, n.default)('<div class="' + this.namespace + "-pointer " + this.namespace + "-pointer-" + e + '"></div>').appendTo(this.$wrap), s = new u(i, e, this);
                    this.pointer.push(s)
                }
                this.p1 = this.pointer[0], this.options.range && (this.p2 = this.pointer[1])
            }
        }, {
            key: "bindEvents", value: function () {
                var t = this, e = this;
                this.$wrap.on("touchstart.asRange mousedown.asRange", function (t) {
                    if (e.disabled !== !0) {
                        t = s(t);
                        var i = t.which ? 3 === t.which : 2 === t.button;
                        if (i)return !1;
                        var n = e.$wrap.offset(), a = t[e.direction.axis] - n[e.direction.position], o = e.getAdjacentPointer(a);
                        return o.mousedown(t), !1
                    }
                }), this.$element.is("input") && this.$element.on(this.namespace + "::change", function () {
                    var e = t.get();
                    t.$element.val(e)
                }), n.default.each(this.pointer, function (i, s) {
                    s.$element.on(t.namespace + "::move", function () {
                        return e.value = e.get(), !(!e.initialized || e.updating) && (e._trigger("change", e.value), !1)
                    })
                })
            }
        }, {
            key: "getValueFromPosition", value: function (t) {
                return t > 0 ? this.min + t / this.getLength() * this.interval : 0
            }
        }, {
            key: "getAdjacentPointer", value: function (t) {
                var e = this.getValueFromPosition(t);
                if (this.options.range) {
                    var i = this.p1.value, s = this.p2.value, n = Math.abs(i - s);
                    return i <= s ? e > i + n / 2 ? this.p2 : this.p1 : e > s + n / 2 ? this.p1 : this.p2
                }
                return this.p1
            }
        }, {
            key: "getLength", value: function () {
                return "v" === this.options.direction ? this.$wrap.height() : this.$wrap.width()
            }
        }, {
            key: "update", value: function (t) {
                var e = this;
                this.updating = !0, n.default.each(["max", "min", "step", "limit", "value"], function (i, s) {
                    t[s] && (e[s] = t[s])
                }), (t.max || t.min) && this.setInterval(t.min, t.max), t.value || (this.value = t.min), n.default.each(this.components, function (t, i) {
                    "function" == typeof i.update && i.update(e)
                }), this.set(this.value), this._trigger("update"), this.updating = !1
            }
        }, {
            key: "get", value: function () {
                var t = [];
                if (n.default.each(this.pointer, function (e, i) {
                        t[e] = i.get()
                    }), this.options.range)return t;
                if (t[0] === this.options.min && ("string" == typeof this.options.replaceFirst && (t[0] = this.options.replaceFirst), "object" === a(this.options.replaceFirst)))for (var e in this.options.replaceFirst)Object.hasOwnProperty(this.options.replaceFirst, e) && (t[0] = e);
                return t[0]
            }
        }, {
            key: "set", value: function (t) {
                if (this.options.range) {
                    if ("number" == typeof t && (t = [t]), !n.default.isArray(t))return;
                    n.default.each(this.pointer, function (e, i) {
                        i.set(t[e])
                    })
                } else this.p1.set(t);
                this.value = t
            }
        }, {
            key: "val", value: function (t) {
                return t ? (this.set(t), this) : this.get()
            }
        }, {
            key: "setInterval", value: function (t, e) {
                this.min = t, this.max = e, this.interval = e - t
            }
        }, {
            key: "enable", value: function () {
                return this.disabled = !1, this.$wrap.removeClass(this.namespace + "_disabled"), this._trigger("enable"), this
            }
        }, {
            key: "disable", value: function () {
                return this.disabled = !0, this.$wrap.addClass(this.namespace + "_disabled"), this._trigger("disable"), this
            }
        }, {
            key: "destroy", value: function () {
                n.default.each(this.pointer, function (t, e) {
                    e.destroy()
                }), this.$wrap.destroy(), this._trigger("destroy")
            }
        }], [{
            key: "registerComponent", value: function (t, e) {
                d[t] = e
            }
        }, {
            key: "setDefaults", value: function (t) {
                n.default.extend(r, n.default.isPlainObject(t) && t)
            }
        }]), t
    }();
    f.registerComponent("scale", l), f.registerComponent("selected", h), f.registerComponent("tip", p), c();
    var v = {version: "0.3.3"}, m = "asRange", g = n.default.fn.asRange, y = function (t) {
        for (var e = this, i = arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)s[o - 1] = arguments[o];
        if ("string" == typeof t) {
            var r = function () {
                var i = t;
                if (/^_/.test(i))return {v: !1};
                if (!(/^(get)$/.test(i) || "val" === i && 0 === s.length))return {
                    v: e.each(function () {
                        var t = n.default.data(this, m);
                        t && "function" == typeof t[i] && t[i].apply(t, s)
                    })
                };
                var a = e.first().data(m);
                return a && "function" == typeof a[i] ? {v: a[i].apply(a, s)} : void 0
            }();
            if ("object" === ("undefined" == typeof r ? "undefined" : a(r)))return r.v
        }
        return this.each(function () {
            (0, n.default)(this).data(m) || (0, n.default)(this).data(m, new f(this, t))
        })
    };
    n.default.fn.asRange = y, n.default.asRange = n.default.extend({
        setDefaults: f.setDefaults,
        noConflict: function () {
            return n.default.fn.asRange = g, y
        }
    }, v)
});