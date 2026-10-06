(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 374684, t => {
    "use strict";
    var e = t.i(843476),
        i = t.i(500932),
        r = t.i(838768),
        n = t.i(205108);
    t.s(["Link", 0, function(t) {
        let o, s, l, a, u, c, h = (0, i.c)(15);
        h[0] !== t ? ({
            onClick: l,
            href: s,
            as: o,
            ...a
        } = t, h[0] = t, h[1] = o, h[2] = s, h[3] = l, h[4] = a) : (o = h[1], s = h[2], l = h[3], a = h[4]);
        let {
            setInternal: d
        } = (0, r.useOrigin)();
        h[5] !== o || h[6] !== s || h[7] !== l || h[8] !== d ? (u = t => {
            if (l ? .(t), t.defaultPrevented || !(0, n.isLocalNavigationHref)(s, o)) return;
            let e = o || s;
            ("string" == typeof e ? e : e.toString()).startsWith("/") && d(!0)
        }, h[5] = o, h[6] = s, h[7] = l, h[8] = d, h[9] = u) : u = h[9];
        let f = u;
        return h[10] !== o || h[11] !== f || h[12] !== s || h[13] !== a ? (c = (0, e.jsx)(n.Link, { ...a,
            href: s,
            as: o,
            onClick: f
        }), h[10] = o, h[11] = f, h[12] = s, h[13] = a, h[14] = c) : c = h[14], c
    }])
}, 112726, t => {
    "use strict";
    t.s(["screens", 0, {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem"
    }])
}, 838768, t => {
    "use strict";
    var e = t.i(843476),
        i = t.i(500932),
        r = t.i(271645);
    let n = r.createContext(void 0);
    t.s(["OriginProvider", 0, function(t) {
        let o, s, l = (0, i.c)(5),
            [a, u] = r.useState(!1);
        return l[0] !== a ? (o = {
            internal: a,
            setInternal: u
        }, l[0] = a, l[1] = o) : o = l[1], l[2] !== t.children || l[3] !== o ? (s = (0, e.jsx)(n.Provider, {
            value: o,
            children: t.children
        }), l[2] = t.children, l[3] = o, l[4] = s) : s = l[4], s
    }, "useOrigin", 0, function() {
        let t = r.useContext(n);
        if (!t) throw Error("useOrigin must be used within an OriginProvider");
        return t
    }])
}, 205108, t => {
    "use strict";
    var e = t.i(843476),
        i = t.i(500932),
        r = t.i(255667),
        n = t.i(195057),
        o = t.i(573668),
        s = t.i(522016),
        l = t.i(618566),
        a = t.i(271645);

    function u() {
        return window.location.hash
    }

    function c() {
        return ""
    }

    function h(t) {
        return window.addEventListener("hashchange", t), () => {
            window.removeEventListener("hashchange", t)
        }
    }

    function d(t) {
        return "string" == typeof t ? t : (0, n.formatUrl)(t)
    }

    function f(t, e) {
        return (0, o.isLocalURL)(d(e || t))
    }

    function p(t, e) {
        let i = d(e || t);
        if (i.startsWith("?")) return !0;
        try {
            return new URL(i, window.location.href).searchParams.has("modal")
        } catch {
            return !1
        }
    }
    let m = a.createContext(null);

    function v() {
        let t = (0, l.useRouter)(),
            e = function() {
                let t = a.use(m);
                if (!t) throw Error("useSetFinishViewTransition must be used within a ViewTransitions component");
                return t
            }(),
            i = (0, r.useLenis)(),
            n = a.useRef(i);
        a.useEffect(() => {
            n.current = i
        }, [i]);
        let s = a.useCallback((t, {
                onTransitionReady: i,
                scroll: r
            } = {}) => {
                if (!("startViewTransition" in document)) {
                    let e;
                    !1 !== r && (e = n.current) && "smooth" === e.isScrolling && e.scrollTo(e.scroll, {
                        immediate: !0,
                        force: !0
                    }), a.startTransition(() => {
                        t()
                    });
                    return
                }
                let o = document.startViewTransition(() => new Promise(i => {
                    a.startTransition(() => {
                        t(), e(() => () => {
                            let t;
                            !1 !== r && ((t = n.current) ? t.scrollTo(0, {
                                immediate: !0,
                                force: !0
                            }) : window.scrollTo(0, 0)), i()
                        })
                    })
                }));
                i && o.ready.then(i).catch(() => {})
            }, []),
            u = a.useCallback((e, i) => {
                let {
                    onTransitionReady: r,
                    ...n
                } = i ? ? {};
                (0, o.isLocalURL)(e) ? s(() => {
                    t.push(e, n)
                }, {
                    onTransitionReady: r,
                    scroll: n.scroll
                }): t.push(e, n)
            }, [t, s]),
            c = a.useCallback((e, i) => {
                let {
                    onTransitionReady: r,
                    ...n
                } = i ? ? {};
                (0, o.isLocalURL)(e) ? s(() => {
                    t.replace(e, n)
                }, {
                    onTransitionReady: r,
                    scroll: n.scroll
                }): t.replace(e, n)
            }, [t, s]);
        return a.useMemo(() => ({ ...t,
            push: u,
            replace: c
        }), [t, u, c])
    }

    function g(t) {
        let e, {
            nodeName: i
        } = t.currentTarget;
        return "A" === i.toUpperCase() && (!!(e = t.currentTarget.getAttribute("target")) && "_self" !== e || !!t.metaKey || !!t.ctrlKey || !!t.shiftKey || !!t.altKey || !!t.nativeEvent && 2 === t.nativeEvent.which) || !1
    }
    t.s(["Link", 0, function(t) {
        let i = v(),
            r = (0, l.useRouter)(),
            {
                href: n,
                as: o,
                replace: u,
                scroll: c
            } = t,
            h = a.useCallback(e => {
                if (t.onClick ? .(e), e.defaultPrevented || !f(n, o)) return;
                let s = d(o || n);
                if (p(n, o)) {
                    if (g(e)) return;
                    e.preventDefault(), (u ? r.replace : r.push)(s, {
                        scroll: null == c || c
                    });
                    return
                }
                if ("startViewTransition" in document) {
                    if (g(e)) return;
                    e.preventDefault(), (u ? i.replace : i.push)(s, {
                        scroll: null == c || c
                    })
                }
            }, [t.onClick, n, o, u, c, r, i]);
        return (0, e.jsx)(s.default, { ...t,
            onClick: h
        })
    }, "ViewTransitions", 0, function(t) {
        let r, n, o, s = (0, i.c)(5),
            {
                children: d
            } = t,
            [f, p] = a.useState(null);
        return s[0] !== f ? (r = () => {
            f && (f(), p(null))
        }, n = [f], s[0] = f, s[1] = r, s[2] = n) : (r = s[1], n = s[2]), a.useLayoutEffect(r, n), ! function() {
            let t = (0, l.usePathname)(),
                e = a.useRef(t),
                [i, r] = a.useState(null);
            a.useEffect(() => {
                if (!("startViewTransition" in document)) return () => {};
                let t = () => {
                    let t;
                    if (window.location.pathname === e.current) return;
                    let i = new Promise(e => {
                        t = e
                    });
                    r([new Promise(t => {
                        document.startViewTransition(() => (t(), i))
                    }), t])
                };
                return window.addEventListener("popstate", t), () => {
                    window.removeEventListener("popstate", t)
                }
            }, []), i && e.current !== t && a.use(i[0]);
            let n = a.useRef(i);
            a.useEffect(() => {
                n.current = i
            }, [i]);
            let o = a.useSyncExternalStore(h, u, c);
            a.useEffect(() => {
                e.current = t, n.current && (n.current[1](), n.current = null)
            }, [o, t])
        }(), s[3] !== d ? (o = (0, e.jsx)(m.Provider, {
            value: p,
            children: d
        }), s[3] = d, s[4] = o) : o = s[4], o
    }, "isLocalNavigationHref", 0, f, "shouldPreserveDefault", 0, g, "shouldSkipLinkViewTransition", 0, p, "useTransitionRouter", 0, v])
}, 820783, t => {
    "use strict";
    var e = t.i(271645),
        i = Object.defineProperty,
        r = (t, e) => i(t, "name", {
            value: e,
            configurable: !0
        });

    function n(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
    }

    function o(...t) {
        return e => {
            let i = !1,
                r = t.map(t => {
                    let r = n(t, e);
                    return i || "function" != typeof r || (i = !0), r
                });
            if (i) return () => {
                for (let e = 0; e < r.length; e++) {
                    let i = r[e];
                    "function" == typeof i ? i() : n(t[e], null)
                }
            }
        }
    }

    function s(...t) {
        return e.useCallback(o(...t), t)
    }
    r(n, "setRef"), r(o, "composeRefs"), r(s, "useComposedRefs"), t.s(["composeRefs", 0, o, "useComposedRefs", 0, s])
}, 806928, t => {
    "use strict";
    var e = t.i(936091);

    function i(t, i) {
        return (0, e.createMotionComponent)(t, i)
    }
    let r = i("div"),
        n = i("li"),
        o = i("nav"),
        s = i("span"),
        l = i("ul");
    t.s(["MotionDiv", 0, r, "MotionLi", 0, n, "MotionNav", 0, o, "MotionSpan", 0, s, "MotionUl", 0, l], 806928)
}, 642623, t => {
    "use strict";
    var e = t.i(806928);
    t.s(["div", () => e.MotionDiv])
}, 790815, t => {
    "use strict";
    var e = t.i(806928);
    t.s(["span", () => e.MotionSpan])
}, 255667, t => {
    "use strict";
    var e = "1.3.26";

    function i(t, e, i) {
        return Math.max(t, Math.min(e, i))
    }
    var r = class {
            isRunning = !1;
            value = 0;
            from = 0;
            to = 0;
            currentTime = 0;
            lerp;
            duration;
            easing;
            onUpdate;
            advance(t) {
                if (!this.isRunning) return;
                let e = !1;
                if (this.duration && this.easing) {
                    this.currentTime += t;
                    let r = i(0, this.currentTime / this.duration, 1),
                        n = (e = r >= 1) ? 1 : this.easing(r);
                    this.value = this.from + (this.to - this.from) * n
                } else if (this.lerp) {
                    var r, n, o, s;
                    this.value = (r = this.value, n = this.to, o = 60 * this.lerp, (1 - (s = 1 - Math.exp(-o * t))) * r + s * n), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, e = !0)
                } else this.value = this.to, e = !0;
                e && this.stop(), this.onUpdate ? .(this.value, e)
            }
            stop() {
                this.isRunning = !1
            }
            fromTo(t, e, {
                lerp: i,
                duration: r,
                easing: n,
                onStart: o,
                onUpdate: s
            }) {
                this.from = this.value = t, this.to = e, this.lerp = i, this.duration = r, this.easing = n, this.currentTime = 0, this.isRunning = !0, o ? .(), this.onUpdate = s
            }
        },
        n = class {
            width = 0;
            height = 0;
            scrollHeight = 0;
            scrollWidth = 0;
            debouncedResize;
            wrapperResizeObserver;
            contentResizeObserver;
            constructor(t, e, {
                autoResize: i = !0,
                debounce: r = 250
            } = {}) {
                this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
                    let i;
                    return function(...r) {
                        clearTimeout(i), i = setTimeout(() => {
                            i = void 0, t.apply(this, r)
                        }, e)
                    }
                }(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
            }
            destroy() {
                this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize)
            }
            resize = () => {
                this.onWrapperResize(), this.onContentResize()
            };
            onWrapperResize = () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            };
            onContentResize = () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            };
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        },
        o = class {
            events = {};
            emit(t, ...e) {
                let i = this.events[t] || [];
                for (let t = 0, r = i.length; t < r; t++) i[t] ? .(...e)
            }
            on(t, e) {
                return this.events[t] ? this.events[t].push(e) : this.events[t] = [e], () => {
                    this.events[t] = this.events[t] ? .filter(t => e !== t)
                }
            }
            off(t, e) {
                this.events[t] = this.events[t] ? .filter(t => e !== t)
            }
            destroy() {
                this.events = {}
            }
        };
    let s = 100 / 6,
        l = {
            passive: !1
        };

    function a(t, e) {
        return 1 === t ? s : 2 === t ? e : 1
    }
    var u = class {
        touchStart = {
            x: 0,
            y: 0
        };
        lastDelta = {
            x: 0,
            y: 0
        };
        window = {
            width: 0,
            height: 0
        };
        emitter = new o;
        constructor(t, e = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onTouchMove, l), this.element.addEventListener("touchend", this.onTouchEnd, l)
        }
        on(t, e) {
            return this.emitter.on(t, e)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onTouchMove, l), this.element.removeEventListener("touchend", this.onTouchEnd, l)
        }
        onTouchStart = t => {
            let {
                clientX: e,
                clientY: i
            } = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            })
        };
        onTouchMove = t => {
            let {
                clientX: e,
                clientY: i
            } = t.targetTouches ? t.targetTouches[0] : t, r = -(e - this.touchStart.x) * this.options.touchMultiplier, n = -(i - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                x: r,
                y: n
            }, this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: n,
                event: t
            })
        };
        onTouchEnd = t => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            })
        };
        onWheel = t => {
            let {
                deltaX: e,
                deltaY: i,
                deltaMode: r
            } = t, n = a(r, this.window.width), o = a(r, this.window.height);
            e *= n, i *= o, e *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: i,
                event: t
            })
        };
        onWindowResize = () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    };
    let c = t => Math.min(1, 1.001 - 2 ** (-10 * t));
    var h = class {
            _isScrolling = !1;
            _isStopped = !1;
            _isLocked = !1;
            _preventNextNativeScrollEvent = !1;
            _resetVelocityTimeout = null;
            _rafId = null;
            _isDraggingSelection = !1;
            reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            isTouching;
            isIos;
            time = 0;
            userData = {};
            lastVelocity = 0;
            velocity = 0;
            direction = 0;
            options;
            targetScroll;
            animatedScroll;
            animate = new r;
            emitter = new o;
            dimensions;
            virtualScroll;
            constructor({
                wrapper: t = window,
                content: i = document.documentElement,
                eventsTarget: r = t,
                smoothWheel: o = !0,
                syncTouch: s = !1,
                syncTouchLerp: l = .075,
                touchInertiaExponent: a = 1.7,
                duration: h,
                easing: d,
                lerp: f = .1,
                infinite: p = !1,
                orientation: m = "vertical",
                gestureOrientation: v = "horizontal" === m ? "both" : "vertical",
                touchMultiplier: g = 1,
                wheelMultiplier: y = 1,
                autoResize: w = !0,
                prevent: S,
                virtualScroll: b,
                overscroll: E = !0,
                autoRaf: T = !1,
                anchors: R = !1,
                autoToggle: _ = !1,
                allowNestedScroll: L = !1,
                __experimental__naiveDimensions: P = !1,
                naiveDimensions: O = P,
                stopInertiaOnNavigate: C = !1,
                respectReducedMotion: M = !0
            } = {}) {
                window.lenisVersion = e, window.lenis || (window.lenis = {}), window.lenis.version = e, "horizontal" === m && (window.lenis.horizontal = !0), !0 === s && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), t && t !== document.documentElement || (t = window), "number" == typeof h && "function" != typeof d ? d = c : "function" == typeof d && "number" != typeof h && (h = 1), this.options = {
                    wrapper: t,
                    content: i,
                    eventsTarget: r,
                    smoothWheel: o,
                    syncTouch: s,
                    syncTouchLerp: l,
                    touchInertiaExponent: a,
                    duration: h,
                    easing: d,
                    lerp: f,
                    infinite: p,
                    gestureOrientation: v,
                    orientation: m,
                    touchMultiplier: g,
                    wheelMultiplier: y,
                    autoResize: w,
                    prevent: S,
                    virtualScroll: b,
                    overscroll: E,
                    autoRaf: T,
                    anchors: R,
                    autoToggle: _,
                    allowNestedScroll: L,
                    naiveDimensions: O,
                    stopInertiaOnNavigate: C,
                    respectReducedMotion: M
                }, this.dimensions = new n(t, i, {
                    autoResize: w
                }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new u(r, {
                    touchMultiplier: g,
                    wheelMultiplier: y
                }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            }
            destroy() {
                this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId)
            }
            on(t, e) {
                return this.emitter.on(t, e)
            }
            off(t, e) {
                return this.emitter.off(t, e)
            }
            onScrollEnd = t => {
                t instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || t.stopPropagation()
            };
            dispatchScrollendEvent = () => {
                this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                    bubbles: this.options.wrapper === window,
                    detail: {
                        lenisScrollEnd: !0
                    }
                }))
            };
            get overflow() {
                let t = this.isHorizontal ? "overflow-x" : "overflow-y";
                return getComputedStyle(this.rootElement)[t]
            }
            checkOverflow() {
                ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart()
            }
            onTransitionEnd = t => {
                t.propertyName ? .includes("overflow") && t.target === this.rootElement && this.checkOverflow()
            };
            setScroll(t) {
                this.isHorizontal ? this.options.wrapper.scrollTo({
                    left: t,
                    behavior: "instant"
                }) : this.options.wrapper.scrollTo({
                    top: t,
                    behavior: "instant"
                })
            }
            onClick = t => {
                let e = t.composedPath().filter(t => t instanceof HTMLAnchorElement && t.href).map(t => new URL(t.href)),
                    i = new URL(window.location.href);
                if (this.options.anchors) {
                    let t = e.find(t => i.host === t.host && i.pathname === t.pathname && t.hash);
                    if (t) {
                        let e = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
                            i = decodeURIComponent(t.hash);
                        this.scrollTo(i, e);
                        return
                    }
                }
                if (this.options.stopInertiaOnNavigate && e.some(t => i.host === t.host && i.pathname !== t.pathname)) return void this.reset()
            };
            onPointerDown = t => {
                1 === t.button && this.reset()
            };
            isTouchOnSelectionHandle(t) {
                let e = window.getSelection();
                if (!e || e.isCollapsed || 0 === e.rangeCount) return !1;
                let i = t.targetTouches[0] ? ? t.changedTouches[0];
                if (!i) return !1;
                let r = e.getRangeAt(0).getClientRects();
                if (0 === r.length) return !1;
                let n = r[0],
                    o = r[r.length - 1],
                    s = 40 >= Math.hypot(i.clientX - n.left, i.clientY - n.top),
                    l = 40 >= Math.hypot(i.clientX - o.right, i.clientY - o.bottom);
                return s || l
            }
            onVirtualScroll = t => {
                if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
                let {
                    deltaX: e,
                    deltaY: i,
                    event: r
                } = t;
                if (this.emitter.emit("virtual-scroll", {
                        deltaX: e,
                        deltaY: i,
                        event: r
                    }), r.ctrlKey || r.lenisStopPropagation) return;
                let n = r.type.includes("touch"),
                    o = r.type.includes("wheel");
                if (n && this.isIos && ("touchstart" === r.type && (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)), this._isDraggingSelection)) {
                    "touchend" === r.type && (this._isDraggingSelection = !1);
                    return
                }
                this.isTouching = "touchstart" === r.type || "touchmove" === r.type;
                let s = 0 === e && 0 === i;
                if (this.options.syncTouch && n && "touchstart" === r.type && s && !this.isStopped && !this.isLocked) return void this.reset();
                let l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e;
                if (s || l) return;
                let a = r.composedPath();
                a = a.slice(0, a.indexOf(this.rootElement));
                let u = this.options.prevent,
                    c = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
                if (a.find(t => t instanceof HTMLElement && ("function" == typeof u && u ? .(t) || t.hasAttribute ? .("data-lenis-prevent") || "vertical" === c && t.hasAttribute ? .("data-lenis-prevent-vertical") || "horizontal" === c && t.hasAttribute ? .("data-lenis-prevent-horizontal") || n && t.hasAttribute ? .("data-lenis-prevent-touch") || o && t.hasAttribute ? .("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(t, {
                        deltaX: e,
                        deltaY: i
                    })))) return;
                if (this.isStopped || this.isLocked) {
                    r.cancelable && r.preventDefault();
                    return
                }
                if (!(this.options.syncTouch && n || this.options.smoothWheel && o)) {
                    this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
                    return
                }
                let h = i;
                "both" === this.options.gestureOrientation ? h = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === this.options.gestureOrientation && (h = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
                let d = n && this.options.syncTouch,
                    f = n && "touchend" === r.type;
                f && (h = Math.sign(h) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + h, {
                    programmatic: !1,
                    ...d ? {
                        lerp: f ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                })
            };
            resize() {
                this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
            }
            emit() {
                this.emitter.emit("scroll", this)
            }
            onNativeScroll = () => {
                if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                    this._preventNextNativeScrollEvent = !1;
                    return
                }
                if (!1 === this.isScrolling || "native" === this.isScrolling) {
                    let t = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            };
            reset() {
                this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
            }
            start() {
                if (this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
                    this.internalStart()
                }
            }
            internalStart() {
                this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
            }
            stop() {
                if (!this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
                    this.internalStop()
                }
            }
            internalStop() {
                this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
            }
            raf = t => {
                let e = t - (this.time || t);
                this.time = t, this.animate.advance(.001 * e), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            };
            scrollTo(t, {
                offset: e = 0,
                immediate: r = !1,
                lock: n = !1,
                programmatic: o = !0,
                lerp: s = o ? this.options.lerp : void 0,
                duration: l = o ? this.options.duration : void 0,
                easing: a = o ? this.options.easing : void 0,
                onStart: u,
                onComplete: h,
                force: d = !1,
                userData: f
            } = {}) {
                if (this.prefersReducedMotion && (o ? r = !0 : (s = 1, l = void 0, a = void 0)), (this.isStopped || this.isLocked) && !d) return;
                let p = t,
                    m = e;
                if ("string" == typeof p && ["top", "left", "start", "#"].includes(p)) p = 0;
                else if ("string" == typeof p && ["bottom", "right", "end"].includes(p)) p = this.limit;
                else {
                    let t = null;
                    if ("string" == typeof p ? (t = p.startsWith("#") ? document.getElementById(p.slice(1)) : document.querySelector(p)) || ("#top" === p ? p = 0 : console.warn("Lenis: Target not found", p)) : p instanceof HTMLElement && p ? .nodeType && (t = p), t) {
                        if (this.options.wrapper !== window) {
                            let t = this.rootElement.getBoundingClientRect();
                            m -= this.isHorizontal ? t.left : t.top
                        }
                        let e = t.getBoundingClientRect(),
                            i = getComputedStyle(t),
                            r = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop),
                            n = getComputedStyle(this.rootElement),
                            o = this.isHorizontal ? Number.parseFloat(n.scrollPaddingLeft) : Number.parseFloat(n.scrollPaddingTop);
                        p = (this.isHorizontal ? e.left : e.top) + this.animatedScroll - (Number.isNaN(r) ? 0 : r) - (Number.isNaN(o) ? 0 : o)
                    }
                }
                if ("number" == typeof p) {
                    if (p += m, this.options.infinite) {
                        if (o) {
                            this.targetScroll = this.animatedScroll = this.scroll;
                            let t = p - this.animatedScroll;
                            t > this.limit / 2 ? p -= this.limit : t < -this.limit / 2 && (p += this.limit)
                        }
                    } else p = i(0, p, this.limit);
                    if (p === this.targetScroll) {
                        u ? .(this), h ? .(this);
                        return
                    }
                    if (this.userData = f ? ? {}, r) {
                        this.animatedScroll = this.targetScroll = p, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), h ? .(this), this.userData = {}, requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        });
                        return
                    }
                    o || (this.targetScroll = p), "number" == typeof l && "function" != typeof a ? a = c : "function" == typeof a && "number" != typeof l && (l = 1), this.animate.fromTo(this.animatedScroll, p, {
                        duration: l,
                        easing: a,
                        lerp: s,
                        onStart: () => {
                            n && (this.isLocked = !0), this.isScrolling = "smooth", u ? .(this)
                        },
                        onUpdate: (t, e) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), o && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), h ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                this.dispatchScrollendEvent()
                            }), this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
            preventNextNativeScrollEvent() {
                this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                    this._preventNextNativeScrollEvent = !1
                })
            }
            hasNestedScroll(t, {
                deltaX: e,
                deltaY: i
            }) {
                let r, n, o, s, l, a, u, c, h, d, f, p, m, v, g, y, w = Date.now();
                t._lenis || (t._lenis = {});
                let S = t._lenis;
                if (w - (S.time ? ? 0) > 2e3) {
                    S.time = Date.now();
                    let e = window.getComputedStyle(t);
                    if (S.computedStyle = e, r = ["auto", "overlay", "scroll"].includes(e.overflowX), n = ["auto", "overlay", "scroll"].includes(e.overflowY), l = ["auto"].includes(e.overscrollBehaviorX), a = ["auto"].includes(e.overscrollBehaviorY), S.hasOverflowX = r, S.hasOverflowY = n, !(r || n)) return !1;
                    u = t.scrollWidth, c = t.scrollHeight, h = t.clientWidth, d = t.clientHeight, o = u > h, s = c > d, S.isScrollableX = o, S.isScrollableY = s, S.scrollWidth = u, S.scrollHeight = c, S.clientWidth = h, S.clientHeight = d, S.hasOverscrollBehaviorX = l, S.hasOverscrollBehaviorY = a
                } else o = S.isScrollableX, s = S.isScrollableY, r = S.hasOverflowX, n = S.hasOverflowY, u = S.scrollWidth, c = S.scrollHeight, h = S.clientWidth, d = S.clientHeight, l = S.hasOverscrollBehaviorX, a = S.hasOverscrollBehaviorY;
                if (!(r && o || n && s)) return !1;
                let b = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
                if ("horizontal" === b) f = Math.round(t.scrollLeft), p = u - h, m = e, v = r, g = o, y = l;
                else {
                    if ("vertical" !== b) return !1;
                    f = Math.round(t.scrollTop), p = c - d, m = i, v = n, g = s, y = a
                }
                return !y && (f >= p || f <= 0) || (m > 0 ? f < p : f > 0) && v && g
            }
            get rootElement() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
            get limit() {
                return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
            get isHorizontal() {
                return "horizontal" === this.options.orientation
            }
            get actualScroll() {
                let t = this.options.wrapper;
                return this.isHorizontal ? t.scrollX ? ? t.scrollLeft : t.scrollY ? ? t.scrollTop
            }
            get scroll() {
                var t;
                return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll
            }
            get progress() {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
            get isScrolling() {
                return this._isScrolling
            }
            set isScrolling(t) {
                this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
            }
            get isStopped() {
                return this._isStopped
            }
            set isStopped(t) {
                this._isStopped !== t && (this._isStopped = t, this.updateClassName())
            }
            get isLocked() {
                return this._isLocked
            }
            set isLocked(t) {
                this._isLocked !== t && (this._isLocked = t, this.updateClassName())
            }
            get isSmooth() {
                return "smooth" === this.isScrolling
            }
            get prefersReducedMotion() {
                return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches
            }
            get className() {
                let t = "lenis";
                return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t
            }
            updateClassName() {
                this.cleanUpClassName(), this.className.split(" ").forEach(t => {
                    this.rootElement.classList.add(t)
                })
            }
            cleanUpClassName() {
                for (let t of Array.from(this.rootElement.classList))("lenis" === t || t.startsWith("lenis-")) && this.rootElement.classList.remove(t)
            }
        },
        d = t.i(271645),
        f = t.i(843476);
    let p = (0, d.createContext)(null),
        m = new class {
            listeners = [];
            constructor(t) {
                this.state = t
            }
            set(t) {
                for (let e of (this.state = t, this.listeners)) e(this.state)
            }
            subscribe(t) {
                return this.listeners = [...this.listeners, t], () => {
                    this.listeners = this.listeners.filter(e => e !== t)
                }
            }
            get() {
                return this.state
            }
        }(null),
        v = (0, d.forwardRef)(({
            children: t,
            root: e = !1,
            options: i = {},
            autoRaf: r = !0,
            className: n = "",
            ...o
        }, s) => {
            let l = (0, d.useRef)(null),
                a = (0, d.useRef)(null),
                [u, c] = (0, d.useState)(void 0);
            (0, d.useImperativeHandle)(s, () => ({
                wrapper: l.current,
                content: a.current,
                lenis: u
            }), [u]), (0, d.useEffect)(() => {
                let t = new h({ ...i,
                    ...l.current && a.current && {
                        wrapper: l.current,
                        content: a.current
                    },
                    autoRaf: i ? .autoRaf ? ? r
                });
                return c(t), () => {
                    t.destroy(), c(void 0)
                }
            }, [r, JSON.stringify({ ...i,
                wrapper: null,
                content: null
            })]);
            let v = (0, d.useRef)([]),
                g = (0, d.useCallback)((t, e) => {
                    v.current.push({
                        callback: t,
                        priority: e
                    }), v.current.sort((t, e) => t.priority - e.priority)
                }, []),
                y = (0, d.useCallback)(t => {
                    v.current = v.current.filter(e => e.callback !== t)
                }, []);
            return ((0, d.useEffect)(() => {
                if (e && u) return m.set({
                    lenis: u,
                    addCallback: g,
                    removeCallback: y
                }), () => m.set(null)
            }, [e, u, g, y]), (0, d.useEffect)(() => {
                if (!u) return;
                let t = t => {
                    for (let {
                            callback: e
                        } of v.current) e(t)
                };
                return u.on("scroll", t), () => {
                    u.off("scroll", t)
                }
            }, [u]), t) ? (0, f.jsx)(p.Provider, {
                value: {
                    lenis: u,
                    addCallback: g,
                    removeCallback: y
                },
                children: e && "asChild" !== e ? t : (0, f.jsx)("div", {
                    ref: l,
                    className: `${n} ${u?.className??""}`.trim(),
                    ...o,
                    children: (0, f.jsx)("div", {
                        ref: a,
                        children: t
                    })
                })
            }) : null
        }),
        g = {};
    t.s(["ReactLenis", 0, v, "useLenis", 0, function(t, e = [], i = 0) {
        let r = (0, d.useContext)(p),
            n = function(t) {
                let [e, i] = (0, d.useState)(t.get());
                return (0, d.useEffect)(() => t.subscribe(t => i(t)), [t]), e
            }(m),
            {
                lenis: o,
                addCallback: s,
                removeCallback: l
            } = r ? ? n ? ? g;
        return (0, d.useEffect)(() => {
            if (t && s && l && o) return s(t, i), t(o), () => {
                l(t)
            }
        }, [o, s, l, i, ...e, t]), o
    }], 255667)
}, 870455, t => {
    "use strict";
    var e = t.i(843476),
        i = t.i(770703),
        r = t.i(271645);
    let n = (0, i.default)(() => t.A(774595), {
        ssr: !1
    });
    t.s(["SanityLive", 0, function(t) {
        let [i, o] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            (0, r.startTransition)(() => o(!0))
        }, []), i) ? (0, e.jsx)(n, { ...t
        }) : null
    }])
}, 522016, (t, e, i) => {
    "use strict";
    t.i(247167), Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return g
        },
        useLinkStatus: function() {
            return w
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let o = t.r(190809),
        s = t.r(843476),
        l = o._(t.r(271645)),
        a = t.r(195057),
        u = t.r(8372),
        c = t.r(818581),
        h = t.r(718967),
        d = t.r(405550),
        f = t.r(388540),
        p = t.r(91949),
        m = t.r(573668),
        v = t.r(509396);

    function g(e) {
        var i;
        let r, n, o, [g, w] = (0, l.useOptimistic)(p.IDLE_LINK_STATUS),
            S = (0, l.useRef)(null),
            {
                href: b,
                as: E,
                children: T,
                prefetch: R = null,
                passHref: _,
                replace: L,
                shallow: P,
                scroll: O,
                onClick: C,
                onMouseEnter: M,
                onTouchStart: N,
                legacyBehavior: x = !1,
                onNavigate: j,
                transitionTypes: k,
                ref: z,
                unstable_dynamicOnHover: A,
                ...D
            } = e;
        r = T, x && ("string" == typeof r || "number" == typeof r) && (r = (0, s.jsx)("a", {
            children: r
        }));
        let I = l.default.useContext(u.AppRouterContext),
            U = !1 !== R,
            W = !1 === R ? "none" : !0 === R ? "full" : "auto",
            H = "none" !== W ? "auto" === W ? v.FetchStrategy.PPR : v.FetchStrategy.Full : v.FetchStrategy.PPR,
            F = "string" == typeof(i = E || b) ? i : (0, a.formatUrl)(i);
        if (x) {
            if (r ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            n = l.default.Children.only(r)
        }
        let B = x ? n && "object" == typeof n && n.ref : z,
            V, $ = l.default.useCallback(t => (null !== I && (S.current = (0, p.mountLinkInstance)(t, F, I, H, U, w, V)), () => {
                S.current && ((0, p.unmountLinkForCurrentNavigation)(S.current), S.current = null), (0, p.unmountPrefetchableInstance)(t)
            }), [U, F, I, H, w, V]),
            X = {
                ref: (0, c.useMergedRef)($, B),
                onClick(e) {
                    x || "function" != typeof C || C(e), x && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), !I || e.defaultPrevented || function(e, i, r, n, o, s, a, u = "none") {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: h
                            } = e.currentTarget;
                            if ("A" === h.toUpperCase() && ((c = e.currentTarget.getAttribute("target")) && "_self" !== c || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which) || e.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(i)) {
                                n && (e.preventDefault(), location.replace(i));
                                return
                            }
                            if (e.preventDefault(), s) {
                                let t = !1;
                                if (s({
                                        preventDefault: () => {
                                            t = !0
                                        }
                                    }), t) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = t.r(699781);
                            l.default.startTransition(() => {
                                d(i, n ? "replace" : "push", !1 === o ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default, r.current, a, u)
                            })
                        }
                    }(e, F, S, L, O, j, k, W)
                },
                onMouseEnter(t) {
                    x || "function" != typeof M || M(t), x && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t), I && U && (0, p.onNavigationIntent)(t.currentTarget, !0 === A)
                },
                onTouchStart: function(t) {
                    x || "function" != typeof N || N(t), x && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t), I && U && (0, p.onNavigationIntent)(t.currentTarget, !0 === A)
                }
            };
        return (0, h.isAbsoluteUrl)(F) ? X.href = F : x && !_ && ("a" !== n.type || "href" in n.props) || (X.href = (0, d.addBasePath)(F)), o = x ? l.default.cloneElement(n, X) : (0, s.jsx)("a", { ...D,
            ...X,
            children: r
        }), (0, s.jsx)(y.Provider, {
            value: g,
            children: o
        })
    }
    let y = (0, l.createContext)(p.IDLE_LINK_STATUS),
        w = () => (0, l.useContext)(y);
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), e.exports = i.default)
}, 818581, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let r = t.r(271645);

    function n(t, e) {
        let i = (0, r.useRef)(null),
            n = (0, r.useRef)(null);
        return (0, r.useCallback)(r => {
            if (null === r) {
                let t = i.current;
                t && (i.current = null, t());
                let e = n.current;
                e && (n.current = null, e())
            } else t && (i.current = o(t, r)), e && (n.current = o(e, r))
        }, [t, e])
    }

    function o(t, e) {
        if ("function" != typeof t) return t.current = e, () => {
            t.current = null
        }; {
            let i = t(e);
            return "function" == typeof i ? i : () => t(null)
        }
    }("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), e.exports = i.default)
}, 90317, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        bindSnapshot: function() {
            return u
        },
        createAsyncLocalStorage: function() {
            return a
        },
        createSnapshot: function() {
            return c
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let o = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
    });
    class s {
        disable() {
            throw o
        }
        getStore() {}
        run() {
            throw o
        }
        exit() {
            throw o
        }
        enterWith() {
            throw o
        }
        static bind(t) {
            return t
        }
    }
    let l = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

    function a() {
        return l ? new l : new s
    }

    function u(t) {
        return l ? l.bind(t) : s.bind(t)
    }

    function c() {
        return l ? l.snapshot() : function(t, ...e) {
            return t(...e)
        }
    }
}, 242344, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = (0, t.r(90317).createAsyncLocalStorage)()
}, 563599, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
            return r.workAsyncStorageInstance
        }
    });
    let r = t.r(242344)
}, 309885, (t, e, i) => {
    "use strict";

    function r(t) {
        return t.split("/").map(t => encodeURIComponent(t)).join("/")
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 667585, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let r = t.r(132061);

    function n({
        reason: t,
        children: e
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new r.BailoutToCSRError(t), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return e
    }
}, 869093, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let r = t.r(843476),
        n = t.r(271645),
        o = t.r(667585),
        s = t.r(652157);

    function l(t) {
        return {
            default: t && "default" in t ? t.default : t
        }
    }
    let a = {
            loader: () => Promise.resolve(l(() => null)),
            loading: null,
            ssr: !0
        },
        u = function(t) {
            let e = { ...a,
                    ...t
                },
                i = (0, n.lazy)(() => e.loader().then(l)),
                u = e.loading;

            function c(t) {
                let l = u ? (0, r.jsx)(u, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    a = !e.ssr || !!e.loading,
                    c = a ? n.Suspense : n.Fragment,
                    h = e.ssr ? (0, r.jsxs)(r.Fragment, {
                        children: ["u" < typeof window ? (0, r.jsx)(s.PreloadChunks, {
                            moduleIds: e.modules
                        }) : null, (0, r.jsx)(i, { ...t
                        })]
                    }) : (0, r.jsx)(o.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, r.jsx)(i, { ...t
                        })
                    });
                return (0, r.jsx)(c, { ...a ? {
                        fallback: l
                    } : {},
                    children: h
                })
            }
            return c.displayName = "LoadableComponent", c
        }
}, 770703, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let r = t.r(555682)._(t.r(869093));

    function n(t, e) {
        let i = {};
        "function" == typeof t && (i.loader = t);
        let n = { ...i,
            ...e
        };
        return (0, r.default)({ ...n,
            modules: n.loadableGenerated ? .modules
        })
    }("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), e.exports = i.default)
}, 652157, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let r = t.r(843476),
        n = t.r(174080),
        o = t.r(563599),
        s = t.r(309885),
        l = t.r(543369);

    function a({
        moduleIds: t
    }) {
        if ("u" > typeof window) return null;
        let e = o.workAsyncStorage.getStore();
        if (void 0 === e) return null;
        let i = [];
        if (e.reactLoadableManifest && t) {
            let r = e.reactLoadableManifest;
            for (let e of t) {
                if (!r[e]) continue;
                let t = r[e].files;
                i.push(...t)
            }
        }
        if (0 === i.length) return null;
        let u = (0, l.getAssetTokenQuery)();
        return (0, r.jsx)(r.Fragment, {
            children: i.map(t => {
                let i = `${e.assetPrefix}/_next/${(0,s.encodeURIPath)(t)}${u}`;
                return t.endsWith(".css") ? (0, r.jsx)("link", {
                    precedence: "dynamic",
                    href: i,
                    rel: "stylesheet",
                    as: "style",
                    nonce: e.nonce
                }, t) : ((0, n.preload)(i, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: e.nonce
                }), null)
            })
        })
    }
}, 573668, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let r = t.r(718967),
        n = t.r(652817);

    function o(t) {
        if (!(0, r.isAbsoluteUrl)(t)) return !0;
        try {
            let e = (0, r.getLocationOrigin)(),
                i = new URL(t, e);
            return i.origin === e && (0, n.hasBasePath)(i.pathname)
        } catch (t) {
            return !1
        }
    }
}, 998183, (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        assign: function() {
            return a
        },
        searchParamsToUrlQuery: function() {
            return o
        },
        urlQueryToSearchParams: function() {
            return l
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });

    function o(t) {
        let e = {};
        for (let [i, r] of t.entries()) {
            let t = e[i];
            void 0 === t ? e[i] = r : Array.isArray(t) ? t.push(r) : e[i] = [t, r]
        }
        return e
    }

    function s(t) {
        return "string" == typeof t ? t : ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
    }

    function l(t) {
        let e = new URLSearchParams;
        for (let [i, r] of Object.entries(t))
            if (Array.isArray(r))
                for (let t of r) e.append(i, s(t));
            else e.set(i, s(r));
        return e
    }

    function a(t, ...e) {
        for (let i of e) {
            for (let e of i.keys()) t.delete(e);
            for (let [e, r] of i.entries()) t.append(e, r)
        }
        return t
    }
}, 195057, (t, e, i) => {
    "use strict";
    t.i(247167), Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return a
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let o = t.r(190809)._(t.r(998183)),
        s = /https?|ftp|gopher|file/;

    function l(t) {
        let {
            auth: e,
            hostname: i
        } = t, r = t.protocol || "", n = t.pathname || "", l = t.hash || "", a = t.query || "", u = !1;
        e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? `[${i}]` : i), t.port && (u += ":" + t.port)), a && "object" == typeof a && (a = String(o.urlQueryToSearchParams(a)));
        let c = t.search || a && `?${a}` || "";
        return r && !r.endsWith(":") && (r += ":"), t.slashes || (!r || s.test(r)) && !1 !== u ? (u = "//" + (u || ""), n && "/" !== n[0] && (n = "/" + n)) : u || (u = ""), l && "#" !== l[0] && (l = "#" + l), c && "?" !== c[0] && (c = "?" + c), n = n.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${r}${u}${n}${c}${l}`
    }
    let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function u(t) {
        return l(t)
    }
}, 718967, (t, e, i) => {
    "use strict";
    t.i(247167), Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        DecodeError: function() {
            return g
        },
        MiddlewareNotFoundError: function() {
            return b
        },
        MissingStaticPage: function() {
            return S
        },
        NormalizeError: function() {
            return y
        },
        PageNotFoundError: function() {
            return w
        },
        SP: function() {
            return m
        },
        ST: function() {
            return v
        },
        WEB_VITALS: function() {
            return o
        },
        execOnce: function() {
            return s
        },
        getDisplayName: function() {
            return h
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return a
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return p
        },
        normalizeRepeatedSlashes: function() {
            return f
        },
        stringifyError: function() {
            return E
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function s(t) {
        let e, i = !1;
        return (...r) => (i || (i = !0, e = t(...r)), e)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = t => {
            let e = t.charCodeAt(0);
            return !!(e >= 65 && e <= 90 || e >= 97 && e <= 122) && l.test(t)
        };

    function u() {
        let {
            protocol: t,
            hostname: e,
            port: i
        } = window.location;
        return `${t}//${e}${i?":"+i:""}`
    }

    function c() {
        let {
            href: t
        } = window.location, e = u();
        return t.substring(e.length)
    }

    function h(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
    }

    function d(t) {
        return t.finished || t.headersSent
    }

    function f(t) {
        let e = t.split("?");
        return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? `?${e.slice(1).join("?")}` : "")
    }
    async function p(t, e) {
        let i = e.res || e.ctx && e.ctx.res;
        if (!t.getInitialProps) return e.ctx && e.Component ? {
            pageProps: await p(e.Component, e.ctx)
        } : {};
        let r = await t.getInitialProps(e);
        if (i && d(i)) return r;
        if (!r) throw Object.defineProperty(Error(`"${h(t)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: !1,
            configurable: !0
        });
        return r
    }
    let m = "u" > typeof performance,
        v = m && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
    class g extends Error {}
    class y extends Error {}
    class w extends Error {
        constructor(t) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${t}`
        }
    }
    class S extends Error {
        constructor(t, e) {
            super(), this.message = `Failed to load static file for page: ${t} ${e}`
        }
    }
    class b extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function E(t) {
        return JSON.stringify({
            message: t.message,
            stack: t.stack
        })
    }
}, 618566, (t, e, i) => {
    e.exports = t.r(976562)
}]);