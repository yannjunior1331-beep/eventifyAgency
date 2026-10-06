(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 42062, 343116, e => {
    "use strict";
    var t = e.i(846791),
        i = e.i(260830),
        n = e.i(496173),
        s = e.i(83352),
        a = e.i(414229),
        r = e.i(921012),
        o = e.i(476959),
        l = e.i(794581),
        u = e.i(368e3),
        h = e.i(44573),
        m = e.i(791559),
        c = e.i(641980);
    let d = {
        anticipate: e.i(878047).anticipate,
        backInOut: c.backInOut,
        circInOut: m.circInOut
    };
    class p extends u.NativeAnimation {
        constructor(e) {
            ! function(e) {
                "string" == typeof e.ease && e.ease in d && (e.ease = d[e.ease])
            }(e), (0, h.replaceTransitionType)(e), super(e), void 0 !== e.startTime && !1 !== e.autoplay && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
            let {
                motionValue: t,
                onUpdate: i,
                onComplete: a,
                element: r,
                ...u
            } = this.options;
            if (!t) return;
            if (void 0 !== e) return void t.set(e);
            let h = new s.JSAnimation({ ...u,
                    autoplay: !1
                }),
                m = Math.max(10, n.time.now() - this.startTime),
                c = (0, o.clamp)(0, 10, m - 10),
                d = h.sample(m).value,
                {
                    name: p
                } = this.options;
            r && p && (0, l.setStyle)(r, p, d), t.setWithVelocity(h.sample(Math.max(0, m - c)).value, d, c), h.stop()
        }
    }
    var f = e.i(965566),
        y = e.i(997307),
        g = e.i(569577);
    let v = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (g.complex.test(e) || "0" === e) && !e.startsWith("url("));

    function T(e) {
        e.duration = 0, e.type = "keyframes"
    }
    e.s(["makeAnimationInstant", 0, T], 343116);
    var M = e.i(779294),
        x = e.i(260900),
        S = e.i(962118);
    let b = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        V = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        k = (0, x.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class w extends M.WithPromise {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: i = "keyframes",
            repeat: s = 0,
            repeatDelay: a = 0,
            repeatType: o = "loop",
            keyframes: l,
            name: u,
            motionValue: h,
            element: m,
            ...c
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
            }, this.createdAt = n.time.now();
            const d = {
                    autoplay: e,
                    delay: t,
                    type: i,
                    repeat: s,
                    repeatDelay: a,
                    repeatType: o,
                    name: u,
                    motionValue: h,
                    element: m,
                    ...c
                },
                p = m ? .KeyframeResolver || r.KeyframeResolver;
            this.keyframeResolver = new p(l, (e, t, i) => this.onKeyframesResolved(e, t, d, !i), u, h, m), this.keyframeResolver ? .scheduleResolve()
        }
        onKeyframesResolved(e, r, o, l) {
            let u;
            this.keyframeResolver = void 0;
            let {
                name: h,
                type: m,
                velocity: c,
                delay: d,
                isHandoff: g,
                onUpdate: M
            } = o;
            this.resolvedAt = n.time.now();
            let x = !0;
            ! function(e, t, i, n) {
                let s = e[0];
                if (null === s) return !1;
                if ("display" === t || "visibility" === t) return !0;
                let a = e[e.length - 1],
                    r = v(s, t),
                    o = v(a, t);
                return (0, f.warning)(r === o, `You are trying to animate ${t} from "${s}" to "${a}". "${r?a:s}" is not an animatable value.`, "value-not-animatable"), !!r && !!o && (function(e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t) return !0
                }(e) || ("spring" === i || (0, y.isGenerator)(i)) && n)
            }(e, h, m, c) && (x = !1, (t.MotionGlobalConfig.instantAnimations || !d) && M ? .((0, a.getFinalKeyframe)(e, o, r)), e[0] = e[e.length - 1], T(o), o.repeat = 0);
            let w = {
                    startTime: l ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: r,
                    ...o,
                    keyframes: e
                },
                A = x && !g && function(e) {
                    let {
                        motionValue: t,
                        name: i,
                        repeatDelay: n,
                        repeatType: s,
                        damping: a,
                        type: r,
                        keyframes: o
                    } = e, l = t ? .owner ? .current;
                    if (!(l instanceof HTMLElement) && !(l instanceof SVGElement)) return !1;
                    let {
                        onUpdate: u,
                        transformTemplate: h
                    } = t.owner.getProps();
                    return k() && i && (S.acceleratedValues.has(i) || V.has(i) && function(e) {
                        for (let t = 0; t < e.length; t++)
                            if ("string" == typeof e[t] && b.test(e[t])) return !0;
                        return !1
                    }(o)) && ("transform" !== i || !h) && !u && !n && "mirror" !== s && 0 !== a && "inertia" !== r
                }(w),
                C = w.motionValue ? .owner ? .current;
            if (A) try {
                u = new p({ ...w,
                    element: C
                })
            } catch {
                u = new s.JSAnimation(w)
            } else u = new s.JSAnimation(w);
            u.finished.then(() => {
                this.notifyFinished()
            }).catch(i.noop), this.pendingTimeline && (this.stopTimeline = u.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = u
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver ? .resume(), (0, r.flushKeyframeResolvers)()), this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(e) {
            this.animation.time = e
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(e) {
            this.animation.speed = e
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(e) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
        }
    }
    e.s(["AsyncMotionValueAnimation", 0, w], 42062)
}, 83352, 721748, 528409, 893544, 430151, 641980, 878047, 791559, 532943, 44573, e => {
    "use strict";
    var t = e.i(738638),
        i = e.i(476959),
        n = e.i(763074),
        s = e.i(496173),
        a = e.i(203163),
        r = e.i(287022);
    let o = e => {
        let t = ({
            timestamp: t
        }) => e(t);
        return {
            start: (e = !0) => r.frame.update(t, e),
            stop: () => (0, r.cancelFrame)(t),
            now: () => r.frameData.isProcessing ? r.frameData.timestamp : s.time.now()
        }
    };
    var l = e.i(965566),
        u = e.i(756512);

    function h(e) {
        let t = 0,
            i = e.next(t);
        for (; !i.done && t < 2e4;) t += 50, i = e.next(t);
        return t >= 2e4 ? 1 / 0 : t
    }

    function m(e, t = 100, i) {
        let s = i({ ...e,
                keyframes: [0, t]
            }),
            a = Math.min(h(s), 2e4);
        return {
            type: "keyframes",
            ease: e => s.next(a * e).value / t,
            duration: (0, n.millisecondsToSeconds)(a)
        }
    }
    e.s(["createGeneratorEasing", 0, m], 721748);
    let c = .01,
        d = 2,
        p = .005,
        f = .5;

    function y(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    let g = ["duration", "bounce"],
        v = ["stiffness", "damping", "mass"];

    function T(e, t) {
        return t.some(t => void 0 !== e[t])
    }

    function M(e = .3, t = .3) {
        let s, a, r, o, m, x, S = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: t
            } : e,
            {
                restSpeed: b,
                restDelta: V
            } = S,
            k = S.keyframes[0],
            w = S.keyframes[S.keyframes.length - 1],
            A = {
                done: !1,
                value: k
            },
            {
                stiffness: C,
                damping: D,
                mass: P,
                duration: O,
                velocity: I,
                isResolvedFromDuration: B
            } = function(e) {
                let t = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!T(e, v) && T(e, g))
                    if (t.velocity = 0, e.visualDuration) {
                        let n = 2 * Math.PI / (1.2 * e.visualDuration),
                            s = n * n,
                            a = 2 * (0, i.clamp)(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
                        t = { ...t,
                            mass: 1,
                            stiffness: s,
                            damping: a
                        }
                    } else {
                        let s = function({
                            duration: e = 800,
                            bounce: t = .3,
                            velocity: s = 0,
                            mass: a = 1
                        }) {
                            let r, o;
                            (0, l.warning)(e <= (0, n.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let u = 1 - t;
                            u = (0, i.clamp)(.05, 1, u), e = (0, i.clamp)(.01, 10, (0, n.millisecondsToSeconds)(e)), u < 1 ? (r = t => {
                                let i = t * u,
                                    n = i * e;
                                return .001 - (i - s) / y(t, u) * Math.exp(-n)
                            }, o = t => {
                                let i = t * u * e,
                                    n = Math.pow(u, 2) * Math.pow(t, 2) * e,
                                    a = Math.exp(-i),
                                    o = y(Math.pow(t, 2), u);
                                return (i * s + s - n) * a * (-r(t) + .001 > 0 ? -1 : 1) / o
                            }) : (r = t => -.001 + Math.exp(-t * e) * ((t - s) * e + 1), o = t => e * e * (s - t) * Math.exp(-t * e));
                            let h = function(e, t, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++) n -= e(n) / t(n);
                                return n
                            }(r, o, 5 / e);
                            if (e = (0, n.secondsToMilliseconds)(e), isNaN(h)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            }; {
                                let t = Math.pow(h, 2) * a;
                                return {
                                    stiffness: t,
                                    damping: 2 * u * Math.sqrt(a * t),
                                    duration: e
                                }
                            }
                        }({ ...e,
                            velocity: 0
                        });
                        (t = { ...t,
                            ...s,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    }
                return t
            }({ ...S,
                velocity: -(0, n.millisecondsToSeconds)(S.velocity || 0)
            }),
            F = I || 0,
            K = D / (2 * Math.sqrt(C * P)),
            R = w - k,
            G = (0, n.millisecondsToSeconds)(Math.sqrt(C / P)),
            E = 5 > Math.abs(R);
        if (b || (b = E ? c : d), V || (V = E ? p : f), K < 1) r = y(G, K), o = (F + K * G * R) / r, s = e => w - Math.exp(-K * G * e) * (o * Math.sin(r * e) + R * Math.cos(r * e)), m = K * G * o + R * r, x = K * G * R - o * r, a = e => Math.exp(-K * G * e) * (m * Math.sin(r * e) + x * Math.cos(r * e));
        else if (1 === K) {
            s = e => w - Math.exp(-G * e) * (R + (F + G * R) * e);
            let e = F + G * R;
            a = t => Math.exp(-G * t) * (G * e * t - F)
        } else {
            let e = G * Math.sqrt(K * K - 1);
            s = t => {
                let i = Math.exp(-K * G * t),
                    n = Math.min(e * t, 300);
                return w - i * ((F + K * G * R) * Math.sinh(n) + e * R * Math.cosh(n)) / e
            };
            let t = (F + K * G * R) / e,
                i = K * G * t - R * e,
                n = K * G * R - t * e;
            a = t => {
                let s = Math.exp(-K * G * t),
                    a = Math.min(e * t, 300);
                return s * (i * Math.sinh(a) + n * Math.cosh(a))
            }
        }
        let N = {
            calculatedDuration: B && O || null,
            velocity: e => (0, n.secondsToMilliseconds)(a(e)),
            next: e => {
                if (!B && K < 1) {
                    let t = Math.exp(-K * G * e),
                        i = Math.sin(r * e),
                        s = Math.cos(r * e),
                        a = w - t * (o * i + R * s);
                    return A.done = Math.abs((0, n.secondsToMilliseconds)(t * (m * i + x * s))) <= b && Math.abs(w - a) <= V, A.value = A.done ? w : a, A
                }
                let t = s(e);
                return B ? A.done = e >= O : A.done = Math.abs((0, n.secondsToMilliseconds)(a(e))) <= b && Math.abs(w - t) <= V, A.value = A.done ? w : t, A
            },
            toString: () => {
                let e = Math.min(h(N), 2e4),
                    t = (0, u.generateLinearEasing)(t => N.next(e * t).value, e, 30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return N
    }
    M.applyToOptions = e => {
        let t = m(e, 100, M);
        return e.ease = t.ease, e.duration = (0, n.secondsToMilliseconds)(t.duration), e.type = "keyframes", e
    }, e.s(["spring", 0, M], 528409);
    var x = e.i(325791);

    function S(e, t, i) {
        let n = Math.max(t - 5, 0);
        return (0, x.velocityPerSecond)(i - e(n), t - n)
    }

    function b({
        keyframes: e,
        velocity: t = 0,
        power: i = .8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: a = 500,
        modifyTarget: r,
        min: o,
        max: l,
        restDelta: u = .5,
        restSpeed: h
    }) {
        let m, c, d = e[0],
            p = {
                done: !1,
                value: d
            },
            f = i * t,
            y = d + f,
            g = void 0 === r ? y : r(y);
        g !== y && (f = g - d);
        let v = e => -f * Math.exp(-e / n),
            T = e => g + v(e),
            x = e => {
                let t = v(e),
                    i = T(e);
                p.done = Math.abs(t) <= u, p.value = p.done ? g : i
            },
            V = e => {
                let t;
                if (t = p.value, void 0 !== o && t < o || void 0 !== l && t > l) {
                    var i;
                    m = e, c = M({
                        keyframes: [p.value, (i = p.value, void 0 === o ? l : void 0 === l || Math.abs(o - i) < Math.abs(l - i) ? o : l)],
                        velocity: S(T, e, p.value),
                        damping: s,
                        stiffness: a,
                        restDelta: u,
                        restSpeed: h
                    })
                }
            };
        return V(0), {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return (c || void 0 !== m || (t = !0, x(e), V(e)), void 0 !== m && e >= m) ? c.next(e - m) : (t || x(e), p)
            }
        }
    }
    var V = e.i(260830);
    let k = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;

    function w(e, t, i, n) {
        return e === t && i === n ? V.noop : s => 0 === s || 1 === s ? s : k(function(e, t, i, n, s) {
            let a, r, o = 0;
            do(a = k(r = t + (i - t) / 2, n, s) - e) > 0 ? i = r : t = r; while (Math.abs(a) > 1e-7 && ++o < 12) return r
        }(s, 0, 1, e, i), t, n)
    }
    let A = w(.42, 0, 1, 1),
        C = w(0, 0, .58, 1),
        D = w(.42, 0, .58, 1),
        P = e => Array.isArray(e) && "number" != typeof e[0];
    e.s(["isEasingArray", 0, P], 893544);
    let O = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        I = e => t => 1 - e(1 - t);
    e.s(["reverseEasing", 0, I], 430151);
    let B = w(.33, 1.53, .69, .99),
        F = I(B),
        K = O(F);
    e.s(["backIn", 0, F, "backInOut", 0, K, "backOut", 0, B], 641980);
    let R = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * F(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
    e.s(["anticipate", 0, R], 878047);
    let G = e => 1 - Math.sin(Math.acos(e)),
        E = I(G),
        N = O(G);
    e.s(["circIn", 0, G, "circInOut", 0, N, "circOut", 0, E], 791559);
    var j = e.i(960855);
    let L = {
            linear: V.noop,
            easeIn: A,
            easeInOut: D,
            easeOut: C,
            circIn: G,
            circInOut: N,
            circOut: E,
            backIn: F,
            backInOut: K,
            backOut: B,
            anticipate: R
        },
        W = e => {
            if ((0, j.isBezierDefinition)(e)) {
                (0, l.invariant)(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [t, i, n, s] = e;
                return w(t, i, n, s)
            }
            return "string" == typeof e ? ((0, l.invariant)(void 0 !== L[e], `Invalid easing type '${e}'`, "invalid-easing-type"), L[e]) : e
        };
    e.s(["easingDefinitionToFunction", 0, W], 532943);
    var H = e.i(344230),
        _ = e.i(515923);

    function q({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: n = "easeInOut"
    }) {
        var s;
        let a = P(n) ? n.map(W) : W(n),
            r = {
                done: !1,
                value: t[0]
            },
            o = (s = i && i.length === t.length ? i : (0, _.defaultOffset)(t), s.map(t => t * e)),
            l = (0, H.interpolate)(o, t, {
                ease: Array.isArray(a) ? a : t.map(() => a || D).splice(0, t.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (r.value = l(t), r.done = t >= e, r)
        }
    }
    var Y = e.i(414229);
    let $ = {
        decay: b,
        inertia: b,
        tween: q,
        keyframes: q,
        spring: M
    };

    function z(e) {
        "string" == typeof e.type && (e.type = $[e.type])
    }
    e.s(["replaceTransitionType", 0, z], 44573);
    var U = e.i(779294);
    let J = e => e / 100;
    class X extends U.WithPromise {
        constructor(e) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
                done: !1,
                value: void 0
            }, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== s.time.now() && this.tick(s.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
            }, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            z(e);
            let {
                type: i = q,
                repeat: n = 0,
                repeatDelay: s = 0,
                repeatType: r,
                velocity: o = 0
            } = e, {
                keyframes: l
            } = e, u = i || q;
            u !== q && "number" != typeof l[0] && (this.mixKeyframes = (0, t.pipe)(J, (0, a.mix)(l[0], l[1])), l = [0, 100]);
            let m = u({ ...e,
                keyframes: l
            });
            "mirror" === r && (this.mirroredGenerator = u({ ...e,
                keyframes: [...l].reverse(),
                velocity: -o
            })), null === m.calculatedDuration && (m.calculatedDuration = h(m));
            let {
                calculatedDuration: c
            } = m;
            this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (n + 1) - s, this.generator = m
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e, t = !1) {
            let n, {
                generator: s,
                totalDuration: a,
                mixKeyframes: r,
                mirroredGenerator: o,
                resolvedDuration: l,
                calculatedDuration: u
            } = this;
            if (null === this.startTime) return s.next(0);
            let {
                delay: h = 0,
                keyframes: m,
                repeat: c,
                repeatType: d,
                repeatDelay: p,
                type: f,
                onUpdate: y,
                finalKeyframe: g
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - a / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let v = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
                T = this.playbackSpeed >= 0 ? v < 0 : v > a;
            this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = a);
            let M = this.currentTime,
                x = s;
            if (c) {
                let e = Math.min(this.currentTime, a) / l,
                    t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, c + 1)) % 2 && ("reverse" === d ? (n = 1 - n, p && (n -= p / l)) : "mirror" === d && (x = o)), M = (0, i.clamp)(0, 1, n) * l
            }
            T ? (this.delayState.value = m[0], n = this.delayState) : n = x.next(M), r && !T && (n.value = r(n.value));
            let {
                done: S
            } = n;
            T || null === u || (S = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
            let V = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
            return V && f !== b && (n.value = (0, Y.getFinalKeyframe)(m, this.options, g, this.speed)), y && y(n.value), V && this.finish(), n
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
        get duration() {
            return (0, n.millisecondsToSeconds)(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + (0, n.millisecondsToSeconds)(e)
        }
        get time() {
            return (0, n.millisecondsToSeconds)(this.currentTime)
        }
        set time(e) {
            e = (0, n.secondsToMilliseconds)(e), this.currentTime = e, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e))
        }
        getGeneratorVelocity() {
            let e = this.currentTime;
            if (e <= 0) return this.options.velocity || 0;
            if (this.generator.velocity) return this.generator.velocity(e);
            let t = this.generator.next(e).value;
            return S(e => this.generator.next(e).value, e, t)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            let t = this.playbackSpeed !== e;
            t && this.driver && this.updateTime(s.time.now()), this.playbackSpeed = e, t && this.driver && (this.time = (0, n.millisecondsToSeconds)(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: e = o,
                startTime: t
            } = this.options;
            this.driver || (this.driver = e(e => this.tick(e))), this.options.onPlay ? .();
            let i = this.driver.now();
            "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = t ? ? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(s.time.now()), this.holdTime = this.currentTime
        }
        complete() {
            "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
        }
        cancel() {
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(e) {
            return this.startTime = 0, this.tick(e, !0)
        }
        attachTimeline(e) {
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), e.observe(this)
        }
    }
    e.s(["JSAnimation", 0, X], 83352)
}, 768705, e => {
    "use strict";
    var t = e.i(939011),
        i = e.i(486427),
        n = e.i(83411);
    e.s(["animateSingleValue", 0, function(e, s, a) {
        let r = (0, n.isMotionValue)(e) ? e : (0, i.motionValue)(e);
        return r.start((0, t.animateMotionValue)("", r, s, a)), r.animation
    }])
}, 939011, e => {
    "use strict";
    var t = e.i(763074),
        i = e.i(846791),
        n = e.i(42062),
        s = e.i(83352),
        a = e.i(987333),
        r = e.i(343116),
        o = e.i(157788);
    let l = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        u = {
            type: "keyframes",
            duration: .8
        },
        h = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        };
    var m = e.i(414229);
    let c = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
    var d = e.i(287022);
    e.s(["animateMotionValue", 0, (e, p, f, y = {}, g, v) => T => {
        let M = (0, a.getValueTransition)(y, e) || {},
            x = M.delay || y.delay || 0,
            {
                elapsed: S = 0
            } = y;
        S -= (0, t.secondsToMilliseconds)(x);
        let b = {
            keyframes: Array.isArray(f) ? f : [null, f],
            ease: "easeOut",
            velocity: p.getVelocity(),
            ...M,
            delay: -S,
            onUpdate: e => {
                p.set(e), M.onUpdate && M.onUpdate(e)
            },
            onComplete: () => {
                T(), M.onComplete && M.onComplete()
            },
            name: e,
            motionValue: p,
            element: v ? void 0 : g
        };
        ! function(e) {
            for (let t in e)
                if (!c.has(t)) return !0;
            return !1
        }(M) && Object.assign(b, ((e, {
            keyframes: t
        }) => t.length > 2 ? u : o.transformProps.has(e) ? e.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : l : h)(e, b)), b.duration && (b.duration = (0, t.secondsToMilliseconds)(b.duration)), b.repeatDelay && (b.repeatDelay = (0, t.secondsToMilliseconds)(b.repeatDelay)), void 0 !== b.from && (b.keyframes[0] = b.from);
        let V = !1;
        if (!1 !== b.type && (0 !== b.duration || b.repeatDelay) || ((0, r.makeAnimationInstant)(b), 0 === b.delay && (V = !0)), (i.MotionGlobalConfig.instantAnimations || i.MotionGlobalConfig.skipAnimations || g ? .shouldSkipAnimations || M.skipAnimations) && (V = !0, (0, r.makeAnimationInstant)(b), b.delay = 0), b.allowFlatten = !M.type && !M.ease, V && !v && void 0 !== p.get()) {
            let e = (0, m.getFinalKeyframe)(b.keyframes, M);
            if (void 0 !== e) return void d.frame.update(() => {
                b.onUpdate(e), b.onComplete()
            })
        }
        return M.isSync ? new s.JSAnimation(b) : new n.AsyncMotionValueAnimation(b)
    }], 939011)
}, 372323, e => {
    "use strict";
    var t = e.i(987333),
        i = e.i(753034),
        n = e.i(864440),
        s = e.i(347834),
        a = e.i(980538),
        r = e.i(716896),
        o = e.i(939011),
        l = e.i(287022);
    e.s(["animateTarget", 0, function(e, u, {
        delay: h = 0,
        transitionOverride: m,
        type: c
    } = {}) {
        let {
            transition: d,
            transitionEnd: p,
            ...f
        } = u, y = e.getDefaultTransition();
        d = d ? (0, i.resolveTransition)(d, y) : y;
        let g = d ? .reduceMotion,
            v = d ? .skipAnimations;
        m && (d = m);
        let T = [],
            M = c && e.animationState && e.animationState.getState()[c],
            x = d ? .path;
        for (let i in x && x.animateVisualElement(e, f, d, h, T), f) {
            let s = e.getValue(i, e.latestValues[i] ? ? null),
                u = f[i];
            if (void 0 === u || M && function({
                    protectedKeys: e,
                    needsAnimating: t
                }, i) {
                    let n = e.hasOwnProperty(i) && !0 !== t[i];
                    return t[i] = !1, n
                }(M, i)) continue;
            let m = {
                delay: h,
                ...(0, t.getValueTransition)(d || {}, i)
            };
            v && (m.skipAnimations = !0);
            let c = s.get();
            if (void 0 !== c && !s.isAnimating() && !Array.isArray(u) && u === c && !m.velocity) {
                l.frame.update(() => s.set(u));
                continue
            }
            let p = !1;
            if (window.MotionHandoffAnimation) {
                let t = (0, r.getOptimisedAppearId)(e);
                if (t) {
                    let e = window.MotionHandoffAnimation(t, i, l.frame);
                    null !== e && (m.startTime = e, p = !0)
                }
            }(0, a.addValueToWillChange)(e, i);
            let y = g ? ? e.shouldReduceMotion;
            s.start((0, o.animateMotionValue)(i, s, u, y && n.positionalKeys.has(i) ? {
                type: !1
            } : m, e, p));
            let x = s.animation;
            x && T.push(x)
        }
        if (p) {
            let t = () => l.frame.update(() => {
                p && (0, s.setTarget)(e, p)
            });
            T.length ? Promise.all(T).then(t) : t()
        }
        return T
    }])
}, 716896, e => {
    "use strict";
    var t = e.i(535043);
    e.s(["getOptimisedAppearId", 0, function(e) {
        return e.props[t.optimizedAppearDataAttribute]
    }])
}, 987333, 753034, e => {
    "use strict";

    function t(e, t) {
        if (e ? .inherit && t) {
            let {
                inherit: i,
                ...n
            } = e;
            return { ...t,
                ...n
            }
        }
        return e
    }
    e.s(["resolveTransition", 0, t], 753034), e.s(["getValueTransition", 0, function(e, i) {
        let n = e ? .[i] ? ? e ? .default ? ? e;
        return n !== e ? t(n, e) : n
    }], 987333)
}, 153689, 27677, 177777, 135636, e => {
    "use strict";

    function t({
        top: e,
        left: i,
        right: n,
        bottom: s
    }) {
        return {
            x: {
                min: i,
                max: n
            },
            y: {
                min: e,
                max: s
            }
        }
    }

    function i(e, t) {
        if (!t) return e;
        let i = t({
                x: e.left,
                y: e.top
            }),
            n = t({
                x: e.right,
                y: e.bottom
            });
        return {
            top: i.y,
            left: i.x,
            bottom: n.y,
            right: n.x
        }
    }
    e.s(["convertBoundingBoxToBox", 0, t, "convertBoxToBoundingBox", 0, function({
        x: e,
        y: t
    }) {
        return {
            top: t.min,
            right: e.max,
            bottom: t.max,
            left: e.min
        }
    }, "transformBoxPoints", 0, i], 27677);
    var n = e.i(100706);

    function s(e) {
        return void 0 === e || 1 === e
    }

    function a({
        scale: e,
        scaleX: t,
        scaleY: i
    }) {
        return !s(e) || !s(t) || !s(i)
    }

    function r(e) {
        return a(e) || o(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function o(e) {
        var t, i;
        return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
    }

    function l(e, t, i) {
        return i + t * (e - i)
    }

    function u(e, t, i, n, s) {
        return void 0 !== s && (e = l(e, s, n)), l(e, i, n) + t
    }

    function h(e, t = 0, i = 1, n, s) {
        e.min = u(e.min, t, i, n, s), e.max = u(e.max, t, i, n, s)
    }

    function m(e, {
        x: t,
        y: i
    }) {
        h(e.x, t.translate, t.scale, t.originPoint), h(e.y, i.translate, i.scale, i.originPoint)
    }

    function c(e, t) {
        e.min += t, e.max += t
    }

    function d(e, t, i, s, a = .5) {
        let r = (0, n.mixNumber)(e.min, e.max, a);
        h(e, t, i, r, s)
    }

    function p(e, t) {
        return "string" == typeof e ? parseFloat(e) / 100 * (t.max - t.min) : e
    }

    function f(e, t, i) {
        let n = i ? ? e;
        d(e.x, p(t.x, n.x), t.scaleX, t.scale, t.originX), d(e.y, p(t.y, n.y), t.scaleY, t.scale, t.originY)
    }

    function y(e, n) {
        return t(i(e.getBoundingClientRect(), n))
    }
    e.s(["has2DTranslate", 0, o, "hasScale", 0, a, "hasTransform", 0, r], 177777), e.s(["applyBoxDelta", 0, m, "applyTreeDeltas", 0, function(e, t, i, n = !1) {
        let s, a, o = i.length;
        if (o) {
            t.x = t.y = 1;
            for (let l = 0; l < o; l++) {
                a = (s = i[l]).projectionDelta;
                let {
                    visualElement: o
                } = s.options;
                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && s.options.layoutScroll && s.scroll && s !== s.root && (c(e.x, -s.scroll.offset.x), c(e.y, -s.scroll.offset.y)), a && (t.x *= a.x.scale, t.y *= a.y.scale, m(e, a)), n && r(s.latestValues) && f(e, s.latestValues, s.layout ? .layoutBox))
            }
            t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
        }
    }, "scalePoint", 0, l, "transformBox", 0, f, "translateAxis", 0, c], 135636), e.s(["measurePageBox", 0, function(e, t, i) {
        let n = y(e, i),
            {
                scroll: s
            } = t;
        return s && (c(n.x, s.offset.x), c(n.y, s.offset.y)), n
    }, "measureViewportBox", 0, y], 153689)
}, 386783, e => {
    "use strict";
    var t = e.i(965566),
        i = e.i(19928),
        n = e.i(157788),
        s = e.i(381296),
        a = e.i(153689),
        r = e.i(194978),
        o = e.i(544947),
        l = e.i(449095),
        u = e.i(984049);
    class h extends r.DOMVisualElement {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = l.renderHTML
        }
        mount(e) {
            (0, t.invariant)(!!e.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(e)
        }
        readValueFromInstance(e, t) {
            if (n.transformProps.has(t)) return this.projection ? .isProjecting ? (0, s.defaultTransformValue)(t) : (0, s.readTransformValue)(e, t); {
                let n = window.getComputedStyle(e),
                    s = ((0, i.isCSSVariableName)(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return "string" == typeof s ? s.trim() : s
            }
        }
        measureInstanceViewportBox(e, {
            transformPagePoint: t
        }) {
            return (0, a.measureViewportBox)(e, t)
        }
        build(e, t, i) {
            (0, o.buildHTMLStyles)(e, t, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, u.scrapeMotionValuesFromProps)(e, t, i)
        }
    }
    e.s(["HTMLVisualElement", 0, h])
}, 275737, 194978, 449095, e => {
    "use strict";
    var t = e.i(157788),
        i = e.i(203973),
        n = e.i(130162),
        s = e.i(83411),
        a = e.i(864440),
        r = e.i(277942),
        o = e.i(965566),
        l = e.i(172590),
        u = e.i(19928);
    let h = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    var m = e.i(921012),
        c = e.i(547507),
        d = e.i(569577),
        p = e.i(775554);
    let f = new Set(["auto", "none", "0"]);
    var y = e.i(44493);
    class g extends m.KeyframeResolver {
        constructor(e, t, i, n, s) {
            super(e, t, i, n, s, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                element: t,
                name: i
            } = this;
            if (!t || !t.current) return;
            super.readKeyframes();
            for (let i = 0; i < e.length; i++) {
                let n = e[i];
                if ("string" == typeof n && (n = n.trim(), (0, u.isCSSVariableToken)(n))) {
                    let s = function e(t, i, n = 1) {
                        (0, o.invariant)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                        let [s, a] = function(e) {
                            let t = h.exec(e);
                            if (!t) return [, ];
                            let [, i, n, s] = t;
                            return [`--${i??n}`, s]
                        }(t);
                        if (!s) return;
                        let r = window.getComputedStyle(i).getPropertyValue(s);
                        if (r) {
                            let e = r.trim();
                            return (0, l.isNumericalString)(e) ? parseFloat(e) : e
                        }
                        return (0, u.isCSSVariableToken)(a) ? e(a, i, n + 1) : a
                    }(n, t.current);
                    void 0 !== s && (e[i] = s), i === e.length - 1 && (this.finalKeyframe = n)
                }
            }
            if (this.resolveNoneKeyframes(), !a.positionalKeys.has(i) || 2 !== e.length) return;
            let [n, s] = e, m = (0, r.findDimensionValueType)(n), c = (0, r.findDimensionValueType)(s);
            if ((0, u.containsCSSVariable)(n) !== (0, u.containsCSSVariable)(s) && y.positionalValues[i]) {
                this.needsMeasurement = !0;
                return
            }
            if (m !== c)
                if ((0, y.isNumOrPxType)(m) && (0, y.isNumOrPxType)(c))
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        "string" == typeof i && (e[t] = parseFloat(i))
                    } else y.positionalValues[i] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t
            } = this, i = [];
            for (let t = 0; t < e.length; t++) {
                var n;
                (null === e[t] || ("number" == typeof(n = e[t]) ? 0 === n : null === n || "none" === n || "0" === n || (0, c.isZeroValueString)(n))) && i.push(t)
            }
            i.length && function(e, t, i) {
                let n, s = 0;
                for (; s < e.length && !n;) {
                    let t = e[s];
                    "string" == typeof t && !f.has(t) && (0, d.analyseComplexValue)(t).values.length && (n = e[s]), s++
                }
                if (n && i)
                    for (let s of t) e[s] = (0, p.getAnimatableNone)(i, n)
            }(e, i, t)
        }
        measureInitialState() {
            let {
                element: e,
                unresolvedKeyframes: t,
                name: i
            } = this;
            if (!e || !e.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = y.positionalValues[i](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
            let n = t[t.length - 1];
            void 0 !== n && e.getValue(i, n).jump(n, !1)
        }
        measureEndState() {
            let {
                element: e,
                name: t,
                unresolvedKeyframes: i
            } = this;
            if (!e || !e.current) return;
            let n = e.getValue(t);
            n && n.jump(this.measuredOrigin, !1);
            let s = i.length - 1,
                a = i[s];
            i[s] = y.positionalValues[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), this.removedTransforms ? .length && this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    var v = e.i(617218);
    class T extends v.VisualElement {
        constructor() {
            super(...arguments), this.KeyframeResolver = g
        }
        sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            let i = e.style;
            return i ? i[t] : void 0
        }
        removeValueFromRenderState(e, {
            vars: t,
            style: i
        }) {
            delete t[e], delete i[e]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: e
            } = this.props;
            (0, s.isMotionValue)(e) && (this.childSubscription = e.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }
    e.s(["DOMVisualElement", 0, T], 194978);
    var M = e.i(793787),
        x = e.i(181261);
    let S = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    var b = e.i(399951);

    function V(e, {
        style: t,
        vars: i
    }, n, s) {
        let a, r = e.style;
        for (a in t) r[a] = t[a];
        for (a in s ? .applyProjectionStyles(r, n), i) r.setProperty(a, i[a])
    }
    e.s(["renderHTML", 0, V], 449095);
    var k = e.i(767926);
    e.s(["SVGVisualElement", 0, class extends T {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = n.createBox
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, n) {
            if (t.transformProps.has(n)) {
                let e = (0, i.getDefaultValueType)(n);
                return e && e.default || 0
            }
            return n = S.has(n) ? n : (0, M.camelToDash)(n), e.getAttribute(n)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, k.scrapeMotionValuesFromProps)(e, t, i)
        }
        build(e, t, i) {
            (0, x.buildSVGAttrs)(e, t, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(e, t, i, n) {
            for (let i in V(e, t, void 0, n), t.attrs) e.setAttribute(S.has(i) ? i : (0, M.camelToDash)(i), t.attrs[i])
        }
        mount(e) {
            this.isSVGTag = (0, b.isSVGTag)(e.tagName), super.mount(e)
        }
    }], 275737)
}, 864440, e => {
    "use strict";
    let t = new Set(["width", "height", "top", "left", "right", "bottom", ...e.i(157788).transformPropOrder]);
    e.s(["positionalKeys", 0, t])
}, 618812, e => {
    "use strict";
    var t = e.i(386579);
    e.s(["resolveVariant", 0, function(e, i, n) {
        let s = e.getProps();
        return (0, t.resolveVariantFromProps)(s, i, void 0 !== n ? n : s.custom, e)
    }])
}, 347834, 373615, e => {
    "use strict";
    var t = e.i(486427),
        i = e.i(618812);
    let n = e => Array.isArray(e);
    e.s(["isKeyframesTarget", 0, n], 373615), e.s(["setTarget", 0, function(e, s) {
        let {
            transitionEnd: a = {},
            transition: r = {},
            ...o
        } = (0, i.resolveVariant)(e, s) || {};
        for (let i in o = { ...o,
                ...a
            }) {
            var l;
            let s = n(l = o[i]) ? l[l.length - 1] || 0 : l;
            e.hasValue(i) ? e.getValue(i).set(s) : e.addValue(i, (0, t.motionValue)(s))
        }
    }], 347834)
}, 836331, e => {
    "use strict";
    var t = e.i(889026);
    e.s(["isSVGSVGElement", 0, function(e) {
        return (0, t.isSVGElement)(e) && "svg" === e.tagName
    }])
}, 980538, e => {
    "use strict";
    var t = e.i(846791),
        i = e.i(83411);
    e.s(["addValueToWillChange", 0, function(e, n) {
        let s = e.getValue("willChange");
        if ((0, i.isMotionValue)(s) && s.add) return s.add(n);
        if (!s && t.MotionGlobalConfig.WillChange) {
            let i = new t.MotionGlobalConfig.WillChange("auto");
            e.addValue("willChange", i), i.add(n)
        }
    }], 980538)
}]);