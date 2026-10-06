(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 42062, 343116, e => {
    "use strict";
    var t = e.i(846791),
        i = e.i(260830),
        n = e.i(496173),
        r = e.i(83352),
        s = e.i(414229),
        a = e.i(921012),
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
                onComplete: s,
                element: a,
                ...u
            } = this.options;
            if (!t) return;
            if (void 0 !== e) return void t.set(e);
            let h = new r.JSAnimation({ ...u,
                    autoplay: !1
                }),
                m = Math.max(10, n.time.now() - this.startTime),
                c = (0, o.clamp)(0, 10, m - 10),
                d = h.sample(m).value,
                {
                    name: p
                } = this.options;
            a && p && (0, l.setStyle)(a, p, d), t.setWithVelocity(h.sample(Math.max(0, m - c)).value, d, c), h.stop()
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
    var b = e.i(779294),
        x = e.i(260900),
        M = e.i(962118);
    let S = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        w = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        V = (0, x.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class k extends b.WithPromise {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: i = "keyframes",
            repeat: r = 0,
            repeatDelay: s = 0,
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
                    repeat: r,
                    repeatDelay: s,
                    repeatType: o,
                    name: u,
                    motionValue: h,
                    element: m,
                    ...c
                },
                p = m ? .KeyframeResolver || a.KeyframeResolver;
            this.keyframeResolver = new p(l, (e, t, i) => this.onKeyframesResolved(e, t, d, !i), u, h, m), this.keyframeResolver ? .scheduleResolve()
        }
        onKeyframesResolved(e, a, o, l) {
            let u;
            this.keyframeResolver = void 0;
            let {
                name: h,
                type: m,
                velocity: c,
                delay: d,
                isHandoff: g,
                onUpdate: b
            } = o;
            this.resolvedAt = n.time.now();
            let x = !0;
            ! function(e, t, i, n) {
                let r = e[0];
                if (null === r) return !1;
                if ("display" === t || "visibility" === t) return !0;
                let s = e[e.length - 1],
                    a = v(r, t),
                    o = v(s, t);
                return (0, f.warning)(a === o, `You are trying to animate ${t} from "${r}" to "${s}". "${a?s:r}" is not an animatable value.`, "value-not-animatable"), !!a && !!o && (function(e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t) return !0
                }(e) || ("spring" === i || (0, y.isGenerator)(i)) && n)
            }(e, h, m, c) && (x = !1, (t.MotionGlobalConfig.instantAnimations || !d) && b ? .((0, s.getFinalKeyframe)(e, o, a)), e[0] = e[e.length - 1], T(o), o.repeat = 0);
            let k = {
                    startTime: l ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: a,
                    ...o,
                    keyframes: e
                },
                A = x && !g && function(e) {
                    let {
                        motionValue: t,
                        name: i,
                        repeatDelay: n,
                        repeatType: r,
                        damping: s,
                        type: a,
                        keyframes: o
                    } = e, l = t ? .owner ? .current;
                    if (!(l instanceof HTMLElement) && !(l instanceof SVGElement)) return !1;
                    let {
                        onUpdate: u,
                        transformTemplate: h
                    } = t.owner.getProps();
                    return V() && i && (M.acceleratedValues.has(i) || w.has(i) && function(e) {
                        for (let t = 0; t < e.length; t++)
                            if ("string" == typeof e[t] && S.test(e[t])) return !0;
                        return !1
                    }(o)) && ("transform" !== i || !h) && !u && !n && "mirror" !== r && 0 !== s && "inertia" !== a
                }(k),
                C = k.motionValue ? .owner ? .current;
            if (A) try {
                u = new p({ ...k,
                    element: C
                })
            } catch {
                u = new r.JSAnimation(k)
            } else u = new r.JSAnimation(k);
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
            return this._animation || (this.keyframeResolver ? .resume(), (0, a.flushKeyframeResolvers)()), this._animation
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
    e.s(["AsyncMotionValueAnimation", 0, k], 42062)
}, 83352, 721748, 528409, 893544, 430151, 641980, 878047, 791559, 532943, 44573, e => {
    "use strict";
    var t = e.i(738638),
        i = e.i(476959),
        n = e.i(763074),
        r = e.i(496173),
        s = e.i(203163),
        a = e.i(287022);
    let o = e => {
        let t = ({
            timestamp: t
        }) => e(t);
        return {
            start: (e = !0) => a.frame.update(t, e),
            stop: () => (0, a.cancelFrame)(t),
            now: () => a.frameData.isProcessing ? a.frameData.timestamp : r.time.now()
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
        let r = i({ ...e,
                keyframes: [0, t]
            }),
            s = Math.min(h(r), 2e4);
        return {
            type: "keyframes",
            ease: e => r.next(s * e).value / t,
            duration: (0, n.millisecondsToSeconds)(s)
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

    function b(e = .3, t = .3) {
        let r, s, a, o, m, x, M = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: t
            } : e,
            {
                restSpeed: S,
                restDelta: w
            } = M,
            V = M.keyframes[0],
            k = M.keyframes[M.keyframes.length - 1],
            A = {
                done: !1,
                value: V
            },
            {
                stiffness: C,
                damping: D,
                mass: O,
                duration: P,
                velocity: E,
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
                            r = n * n,
                            s = 2 * (0, i.clamp)(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
                        t = { ...t,
                            mass: 1,
                            stiffness: r,
                            damping: s
                        }
                    } else {
                        let r = function({
                            duration: e = 800,
                            bounce: t = .3,
                            velocity: r = 0,
                            mass: s = 1
                        }) {
                            let a, o;
                            (0, l.warning)(e <= (0, n.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let u = 1 - t;
                            u = (0, i.clamp)(.05, 1, u), e = (0, i.clamp)(.01, 10, (0, n.millisecondsToSeconds)(e)), u < 1 ? (a = t => {
                                let i = t * u,
                                    n = i * e;
                                return .001 - (i - r) / y(t, u) * Math.exp(-n)
                            }, o = t => {
                                let i = t * u * e,
                                    n = Math.pow(u, 2) * Math.pow(t, 2) * e,
                                    s = Math.exp(-i),
                                    o = y(Math.pow(t, 2), u);
                                return (i * r + r - n) * s * (-a(t) + .001 > 0 ? -1 : 1) / o
                            }) : (a = t => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), o = t => e * e * (r - t) * Math.exp(-t * e));
                            let h = function(e, t, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++) n -= e(n) / t(n);
                                return n
                            }(a, o, 5 / e);
                            if (e = (0, n.secondsToMilliseconds)(e), isNaN(h)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            }; {
                                let t = Math.pow(h, 2) * s;
                                return {
                                    stiffness: t,
                                    damping: 2 * u * Math.sqrt(s * t),
                                    duration: e
                                }
                            }
                        }({ ...e,
                            velocity: 0
                        });
                        (t = { ...t,
                            ...r,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    }
                return t
            }({ ...M,
                velocity: -(0, n.millisecondsToSeconds)(M.velocity || 0)
            }),
            I = E || 0,
            F = D / (2 * Math.sqrt(C * O)),
            K = k - V,
            G = (0, n.millisecondsToSeconds)(Math.sqrt(C / O)),
            R = 5 > Math.abs(K);
        if (S || (S = R ? c : d), w || (w = R ? p : f), F < 1) a = y(G, F), o = (I + F * G * K) / a, r = e => k - Math.exp(-F * G * e) * (o * Math.sin(a * e) + K * Math.cos(a * e)), m = F * G * o + K * a, x = F * G * K - o * a, s = e => Math.exp(-F * G * e) * (m * Math.sin(a * e) + x * Math.cos(a * e));
        else if (1 === F) {
            r = e => k - Math.exp(-G * e) * (K + (I + G * K) * e);
            let e = I + G * K;
            s = t => Math.exp(-G * t) * (G * e * t - I)
        } else {
            let e = G * Math.sqrt(F * F - 1);
            r = t => {
                let i = Math.exp(-F * G * t),
                    n = Math.min(e * t, 300);
                return k - i * ((I + F * G * K) * Math.sinh(n) + e * K * Math.cosh(n)) / e
            };
            let t = (I + F * G * K) / e,
                i = F * G * t - K * e,
                n = F * G * K - t * e;
            s = t => {
                let r = Math.exp(-F * G * t),
                    s = Math.min(e * t, 300);
                return r * (i * Math.sinh(s) + n * Math.cosh(s))
            }
        }
        let N = {
            calculatedDuration: B && P || null,
            velocity: e => (0, n.secondsToMilliseconds)(s(e)),
            next: e => {
                if (!B && F < 1) {
                    let t = Math.exp(-F * G * e),
                        i = Math.sin(a * e),
                        r = Math.cos(a * e),
                        s = k - t * (o * i + K * r);
                    return A.done = Math.abs((0, n.secondsToMilliseconds)(t * (m * i + x * r))) <= S && Math.abs(k - s) <= w, A.value = A.done ? k : s, A
                }
                let t = r(e);
                return B ? A.done = e >= P : A.done = Math.abs((0, n.secondsToMilliseconds)(s(e))) <= S && Math.abs(k - t) <= w, A.value = A.done ? k : t, A
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
    b.applyToOptions = e => {
        let t = m(e, 100, b);
        return e.ease = t.ease, e.duration = (0, n.secondsToMilliseconds)(t.duration), e.type = "keyframes", e
    }, e.s(["spring", 0, b], 528409);
    var x = e.i(325791);

    function M(e, t, i) {
        let n = Math.max(t - 5, 0);
        return (0, x.velocityPerSecond)(i - e(n), t - n)
    }

    function S({
        keyframes: e,
        velocity: t = 0,
        power: i = .8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
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
            g = void 0 === a ? y : a(y);
        g !== y && (f = g - d);
        let v = e => -f * Math.exp(-e / n),
            T = e => g + v(e),
            x = e => {
                let t = v(e),
                    i = T(e);
                p.done = Math.abs(t) <= u, p.value = p.done ? g : i
            },
            w = e => {
                let t;
                if (t = p.value, void 0 !== o && t < o || void 0 !== l && t > l) {
                    var i;
                    m = e, c = b({
                        keyframes: [p.value, (i = p.value, void 0 === o ? l : void 0 === l || Math.abs(o - i) < Math.abs(l - i) ? o : l)],
                        velocity: M(T, e, p.value),
                        damping: r,
                        stiffness: s,
                        restDelta: u,
                        restSpeed: h
                    })
                }
            };
        return w(0), {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return (c || void 0 !== m || (t = !0, x(e), w(e)), void 0 !== m && e >= m) ? c.next(e - m) : (t || x(e), p)
            }
        }
    }
    var w = e.i(260830);
    let V = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;

    function k(e, t, i, n) {
        return e === t && i === n ? w.noop : r => 0 === r || 1 === r ? r : V(function(e, t, i, n, r) {
            let s, a, o = 0;
            do(s = V(a = t + (i - t) / 2, n, r) - e) > 0 ? i = a : t = a; while (Math.abs(s) > 1e-7 && ++o < 12) return a
        }(r, 0, 1, e, i), t, n)
    }
    let A = k(.42, 0, 1, 1),
        C = k(0, 0, .58, 1),
        D = k(.42, 0, .58, 1),
        O = e => Array.isArray(e) && "number" != typeof e[0];
    e.s(["isEasingArray", 0, O], 893544);
    let P = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        E = e => t => 1 - e(1 - t);
    e.s(["reverseEasing", 0, E], 430151);
    let B = k(.33, 1.53, .69, .99),
        I = E(B),
        F = P(I);
    e.s(["backIn", 0, I, "backInOut", 0, F, "backOut", 0, B], 641980);
    let K = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * I(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
    e.s(["anticipate", 0, K], 878047);
    let G = e => 1 - Math.sin(Math.acos(e)),
        R = E(G),
        N = P(G);
    e.s(["circIn", 0, G, "circInOut", 0, N, "circOut", 0, R], 791559);
    var j = e.i(960855);
    let z = {
            linear: w.noop,
            easeIn: A,
            easeInOut: D,
            easeOut: C,
            circIn: G,
            circInOut: N,
            circOut: R,
            backIn: I,
            backInOut: F,
            backOut: B,
            anticipate: K
        },
        L = e => {
            if ((0, j.isBezierDefinition)(e)) {
                (0, l.invariant)(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [t, i, n, r] = e;
                return k(t, i, n, r)
            }
            return "string" == typeof e ? ((0, l.invariant)(void 0 !== z[e], `Invalid easing type '${e}'`, "invalid-easing-type"), z[e]) : e
        };
    e.s(["easingDefinitionToFunction", 0, L], 532943);
    var H = e.i(344230),
        W = e.i(515923);

    function q({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: n = "easeInOut"
    }) {
        var r;
        let s = O(n) ? n.map(L) : L(n),
            a = {
                done: !1,
                value: t[0]
            },
            o = (r = i && i.length === t.length ? i : (0, W.defaultOffset)(t), r.map(t => t * e)),
            l = (0, H.interpolate)(o, t, {
                ease: Array.isArray(s) ? s : t.map(() => s || D).splice(0, t.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (a.value = l(t), a.done = t >= e, a)
        }
    }
    var $ = e.i(414229);
    let _ = {
        decay: S,
        inertia: S,
        tween: q,
        keyframes: q,
        spring: b
    };

    function U(e) {
        "string" == typeof e.type && (e.type = _[e.type])
    }
    e.s(["replaceTransitionType", 0, U], 44573);
    var Y = e.i(779294);
    let J = e => e / 100;
    class X extends Y.WithPromise {
        constructor(e) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
                done: !1,
                value: void 0
            }, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== r.time.now() && this.tick(r.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
            }, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            U(e);
            let {
                type: i = q,
                repeat: n = 0,
                repeatDelay: r = 0,
                repeatType: a,
                velocity: o = 0
            } = e, {
                keyframes: l
            } = e, u = i || q;
            u !== q && "number" != typeof l[0] && (this.mixKeyframes = (0, t.pipe)(J, (0, s.mix)(l[0], l[1])), l = [0, 100]);
            let m = u({ ...e,
                keyframes: l
            });
            "mirror" === a && (this.mirroredGenerator = u({ ...e,
                keyframes: [...l].reverse(),
                velocity: -o
            })), null === m.calculatedDuration && (m.calculatedDuration = h(m));
            let {
                calculatedDuration: c
            } = m;
            this.calculatedDuration = c, this.resolvedDuration = c + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = m
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e, t = !1) {
            let n, {
                generator: r,
                totalDuration: s,
                mixKeyframes: a,
                mirroredGenerator: o,
                resolvedDuration: l,
                calculatedDuration: u
            } = this;
            if (null === this.startTime) return r.next(0);
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
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let v = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
                T = this.playbackSpeed >= 0 ? v < 0 : v > s;
            this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = s);
            let b = this.currentTime,
                x = r;
            if (c) {
                let e = Math.min(this.currentTime, s) / l,
                    t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, c + 1)) % 2 && ("reverse" === d ? (n = 1 - n, p && (n -= p / l)) : "mirror" === d && (x = o)), b = (0, i.clamp)(0, 1, n) * l
            }
            T ? (this.delayState.value = m[0], n = this.delayState) : n = x.next(b), a && !T && (n.value = a(n.value));
            let {
                done: M
            } = n;
            T || null === u || (M = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
            let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && M);
            return w && f !== S && (n.value = (0, $.getFinalKeyframe)(m, this.options, g, this.speed)), y && y(n.value), w && this.finish(), n
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
            return M(e => this.generator.next(e).value, e, t)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            let t = this.playbackSpeed !== e;
            t && this.driver && this.updateTime(r.time.now()), this.playbackSpeed = e, t && this.driver && (this.time = (0, n.millisecondsToSeconds)(this.currentTime))
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
            this.state = "paused", this.updateTime(r.time.now()), this.holdTime = this.currentTime
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
    e.s(["animateSingleValue", 0, function(e, r, s) {
        let a = (0, n.isMotionValue)(e) ? e : (0, i.motionValue)(e);
        return a.start((0, t.animateMotionValue)("", a, r, s)), a.animation
    }])
}, 939011, e => {
    "use strict";
    var t = e.i(763074),
        i = e.i(846791),
        n = e.i(42062),
        r = e.i(83352),
        s = e.i(987333),
        a = e.i(343116),
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
        let b = (0, s.getValueTransition)(y, e) || {},
            x = b.delay || y.delay || 0,
            {
                elapsed: M = 0
            } = y;
        M -= (0, t.secondsToMilliseconds)(x);
        let S = {
            keyframes: Array.isArray(f) ? f : [null, f],
            ease: "easeOut",
            velocity: p.getVelocity(),
            ...b,
            delay: -M,
            onUpdate: e => {
                p.set(e), b.onUpdate && b.onUpdate(e)
            },
            onComplete: () => {
                T(), b.onComplete && b.onComplete()
            },
            name: e,
            motionValue: p,
            element: v ? void 0 : g
        };
        ! function(e) {
            for (let t in e)
                if (!c.has(t)) return !0;
            return !1
        }(b) && Object.assign(S, ((e, {
            keyframes: t
        }) => t.length > 2 ? u : o.transformProps.has(e) ? e.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : l : h)(e, S)), S.duration && (S.duration = (0, t.secondsToMilliseconds)(S.duration)), S.repeatDelay && (S.repeatDelay = (0, t.secondsToMilliseconds)(S.repeatDelay)), void 0 !== S.from && (S.keyframes[0] = S.from);
        let w = !1;
        if (!1 !== S.type && (0 !== S.duration || S.repeatDelay) || ((0, a.makeAnimationInstant)(S), 0 === S.delay && (w = !0)), (i.MotionGlobalConfig.instantAnimations || i.MotionGlobalConfig.skipAnimations || g ? .shouldSkipAnimations || b.skipAnimations) && (w = !0, (0, a.makeAnimationInstant)(S), S.delay = 0), S.allowFlatten = !b.type && !b.ease, w && !v && void 0 !== p.get()) {
            let e = (0, m.getFinalKeyframe)(S.keyframes, b);
            if (void 0 !== e) return void d.frame.update(() => {
                S.onUpdate(e), S.onComplete()
            })
        }
        return b.isSync ? new r.JSAnimation(S) : new n.AsyncMotionValueAnimation(S)
    }], 939011)
}, 372323, e => {
    "use strict";
    var t = e.i(987333),
        i = e.i(753034),
        n = e.i(864440),
        r = e.i(347834),
        s = e.i(980538),
        a = e.i(716896),
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
            b = c && e.animationState && e.animationState.getState()[c],
            x = d ? .path;
        for (let i in x && x.animateVisualElement(e, f, d, h, T), f) {
            let r = e.getValue(i, e.latestValues[i] ? ? null),
                u = f[i];
            if (void 0 === u || b && function({
                    protectedKeys: e,
                    needsAnimating: t
                }, i) {
                    let n = e.hasOwnProperty(i) && !0 !== t[i];
                    return t[i] = !1, n
                }(b, i)) continue;
            let m = {
                delay: h,
                ...(0, t.getValueTransition)(d || {}, i)
            };
            v && (m.skipAnimations = !0);
            let c = r.get();
            if (void 0 !== c && !r.isAnimating() && !Array.isArray(u) && u === c && !m.velocity) {
                l.frame.update(() => r.set(u));
                continue
            }
            let p = !1;
            if (window.MotionHandoffAnimation) {
                let t = (0, a.getOptimisedAppearId)(e);
                if (t) {
                    let e = window.MotionHandoffAnimation(t, i, l.frame);
                    null !== e && (m.startTime = e, p = !0)
                }
            }(0, s.addValueToWillChange)(e, i);
            let y = g ? ? e.shouldReduceMotion;
            r.start((0, o.animateMotionValue)(i, r, u, y && n.positionalKeys.has(i) ? {
                type: !1
            } : m, e, p));
            let x = r.animation;
            x && T.push(x)
        }
        if (p) {
            let t = () => l.frame.update(() => {
                p && (0, r.setTarget)(e, p)
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
        bottom: r
    }) {
        return {
            x: {
                min: i,
                max: n
            },
            y: {
                min: e,
                max: r
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

    function r(e) {
        return void 0 === e || 1 === e
    }

    function s({
        scale: e,
        scaleX: t,
        scaleY: i
    }) {
        return !r(e) || !r(t) || !r(i)
    }

    function a(e) {
        return s(e) || o(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function o(e) {
        var t, i;
        return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
    }

    function l(e, t, i) {
        return i + t * (e - i)
    }

    function u(e, t, i, n, r) {
        return void 0 !== r && (e = l(e, r, n)), l(e, i, n) + t
    }

    function h(e, t = 0, i = 1, n, r) {
        e.min = u(e.min, t, i, n, r), e.max = u(e.max, t, i, n, r)
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

    function d(e, t, i, r, s = .5) {
        let a = (0, n.mixNumber)(e.min, e.max, s);
        h(e, t, i, a, r)
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
    e.s(["has2DTranslate", 0, o, "hasScale", 0, s, "hasTransform", 0, a], 177777), e.s(["applyBoxDelta", 0, m, "applyTreeDeltas", 0, function(e, t, i, n = !1) {
        let r, s, o = i.length;
        if (o) {
            t.x = t.y = 1;
            for (let l = 0; l < o; l++) {
                s = (r = i[l]).projectionDelta;
                let {
                    visualElement: o
                } = r.options;
                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && (c(e.x, -r.scroll.offset.x), c(e.y, -r.scroll.offset.y)), s && (t.x *= s.x.scale, t.y *= s.y.scale, m(e, s)), n && a(r.latestValues) && f(e, r.latestValues, r.layout ? .layoutBox))
            }
            t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
        }
    }, "scalePoint", 0, l, "transformBox", 0, f, "translateAxis", 0, c], 135636), e.s(["measurePageBox", 0, function(e, t, i) {
        let n = y(e, i),
            {
                scroll: r
            } = t;
        return r && (c(n.x, r.offset.x), c(n.y, r.offset.y)), n
    }, "measureViewportBox", 0, y], 153689)
}, 386783, e => {
    "use strict";
    var t = e.i(965566),
        i = e.i(19928),
        n = e.i(157788),
        r = e.i(381296),
        s = e.i(153689),
        a = e.i(194978),
        o = e.i(544947),
        l = e.i(449095),
        u = e.i(984049);
    class h extends a.DOMVisualElement {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = l.renderHTML
        }
        mount(e) {
            (0, t.invariant)(!!e.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(e)
        }
        readValueFromInstance(e, t) {
            if (n.transformProps.has(t)) return this.projection ? .isProjecting ? (0, r.defaultTransformValue)(t) : (0, r.readTransformValue)(e, t); {
                let n = window.getComputedStyle(e),
                    r = ((0, i.isCSSVariableName)(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return "string" == typeof r ? r.trim() : r
            }
        }
        measureInstanceViewportBox(e, {
            transformPagePoint: t
        }) {
            return (0, s.measureViewportBox)(e, t)
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
        r = e.i(83411),
        s = e.i(864440),
        a = e.i(277942),
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
        constructor(e, t, i, n, r) {
            super(e, t, i, n, r, !0)
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
                    let r = function e(t, i, n = 1) {
                        (0, o.invariant)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                        let [r, s] = function(e) {
                            let t = h.exec(e);
                            if (!t) return [, ];
                            let [, i, n, r] = t;
                            return [`--${i??n}`, r]
                        }(t);
                        if (!r) return;
                        let a = window.getComputedStyle(i).getPropertyValue(r);
                        if (a) {
                            let e = a.trim();
                            return (0, l.isNumericalString)(e) ? parseFloat(e) : e
                        }
                        return (0, u.isCSSVariableToken)(s) ? e(s, i, n + 1) : s
                    }(n, t.current);
                    void 0 !== r && (e[i] = r), i === e.length - 1 && (this.finalKeyframe = n)
                }
            }
            if (this.resolveNoneKeyframes(), !s.positionalKeys.has(i) || 2 !== e.length) return;
            let [n, r] = e, m = (0, a.findDimensionValueType)(n), c = (0, a.findDimensionValueType)(r);
            if ((0, u.containsCSSVariable)(n) !== (0, u.containsCSSVariable)(r) && y.positionalValues[i]) {
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
                let n, r = 0;
                for (; r < e.length && !n;) {
                    let t = e[r];
                    "string" == typeof t && !f.has(t) && (0, d.analyseComplexValue)(t).values.length && (n = e[r]), r++
                }
                if (n && i)
                    for (let r of t) e[r] = (0, p.getAnimatableNone)(i, n)
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
            let r = i.length - 1,
                s = i[r];
            i[r] = y.positionalValues[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms ? .length && this.removedTransforms.forEach(([t, i]) => {
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
            (0, r.isMotionValue)(e) && (this.childSubscription = e.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }
    e.s(["DOMVisualElement", 0, T], 194978);
    var b = e.i(793787),
        x = e.i(181261);
    let M = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    var S = e.i(399951);

    function w(e, {
        style: t,
        vars: i
    }, n, r) {
        let s, a = e.style;
        for (s in t) a[s] = t[s];
        for (s in r ? .applyProjectionStyles(a, n), i) a.setProperty(s, i[s])
    }
    e.s(["renderHTML", 0, w], 449095);
    var V = e.i(767926);
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
            return n = M.has(n) ? n : (0, b.camelToDash)(n), e.getAttribute(n)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, V.scrapeMotionValuesFromProps)(e, t, i)
        }
        build(e, t, i) {
            (0, x.buildSVGAttrs)(e, t, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(e, t, i, n) {
            for (let i in w(e, t, void 0, n), t.attrs) e.setAttribute(M.has(i) ? i : (0, b.camelToDash)(i), t.attrs[i])
        }
        mount(e) {
            this.isSVGTag = (0, S.isSVGTag)(e.tagName), super.mount(e)
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
        let r = e.getProps();
        return (0, t.resolveVariantFromProps)(r, i, void 0 !== n ? n : r.custom, e)
    }])
}, 347834, 373615, e => {
    "use strict";
    var t = e.i(486427),
        i = e.i(618812);
    let n = e => Array.isArray(e);
    e.s(["isKeyframesTarget", 0, n], 373615), e.s(["setTarget", 0, function(e, r) {
        let {
            transitionEnd: s = {},
            transition: a = {},
            ...o
        } = (0, i.resolveVariant)(e, r) || {};
        for (let i in o = { ...o,
                ...s
            }) {
            var l;
            let r = n(l = o[i]) ? l[l.length - 1] || 0 : l;
            e.hasValue(i) ? e.getValue(i).set(r) : e.addValue(i, (0, t.motionValue)(r))
        }
    }], 347834)
}, 661327, 889026, 749652, e => {
    "use strict";
    let t, i;
    var n = e.i(642824);

    function r(e) {
        return (0, n.isObject)(e) && "ownerSVGElement" in e
    }

    function s(e, t, i) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let n = document;
            t && (n = t.current);
            let r = i ? .[e] ? ? n.querySelectorAll(e);
            return r ? Array.from(r) : []
        }
        return Array.from(e).filter(e => null != e)
    }
    e.s(["isSVGElement", 0, r], 889026), e.s(["resolveElements", 0, s], 749652);
    let a = new WeakMap,
        o = (e, t, i) => (n, s) => s && s[0] ? s[0][e + "Size"] : r(n) && "getBBox" in n ? n.getBBox()[t] : n[i],
        l = o("inline", "width", "offsetWidth"),
        u = o("block", "height", "offsetHeight");

    function h({
        target: e,
        borderBoxSize: t
    }) {
        a.get(e) ? .forEach(i => {
            i(e, {
                get width() {
                    return l(e, t)
                },
                get height() {
                    return u(e, t)
                }
            })
        })
    }

    function m(e) {
        e.forEach(h)
    }
    let c = new Set;
    e.s(["resize", 0, function(e, n) {
        let r;
        return "function" == typeof e ? (c.add(e), i || (i = () => {
            let e = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            c.forEach(t => t(e))
        }, window.addEventListener("resize", i)), () => {
            c.delete(e), c.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0)
        }) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(m)), (r = s(e)).forEach(e => {
            let i = a.get(e);
            i || (i = new Set, a.set(e, i)), i.add(n), t ? .observe(e)
        }), () => {
            r.forEach(e => {
                let i = a.get(e);
                i ? .delete(n), i ? .size || t ? .unobserve(e)
            })
        })
    }], 661327)
}, 344230, 215932, 515923, e => {
    "use strict";
    var t = e.i(965566),
        i = e.i(476959),
        n = e.i(846791),
        r = e.i(260830),
        s = e.i(738638),
        a = e.i(783920),
        o = e.i(203163);
    e.s(["interpolate", 0, function(e, l, {
        clamp: u = !0,
        ease: h,
        mixer: m
    } = {}) {
        let c = e.length;
        if ((0, t.invariant)(c === l.length, "Both input and output ranges must be the same length", "range-length"), 1 === c) return () => l[0];
        if (2 === c && l[0] === l[1]) return () => l[1];
        let d = e[0] === e[1];
        e[0] > e[c - 1] && (e = [...e].reverse(), l = [...l].reverse());
        let p = function(e, t, i) {
                let a = [],
                    l = i || n.MotionGlobalConfig.mix || o.mix,
                    u = e.length - 1;
                for (let i = 0; i < u; i++) {
                    let n = l(e[i], e[i + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[i] || r.noop : t;
                        n = (0, s.pipe)(e, n)
                    }
                    a.push(n)
                }
                return a
            }(l, h, m),
            f = p.length,
            y = t => {
                if (d && t < e[0]) return l[0];
                let i = 0;
                if (f > 1)
                    for (; i < e.length - 2 && !(t < e[i + 1]); i++);
                let n = (0, a.progress)(e[i], e[i + 1], t);
                return p[i](n)
            };
        return u ? t => y((0, i.clamp)(e[0], e[c - 1], t)) : y
    }], 344230);
    var l = e.i(100706);

    function u(e, t) {
        let i = e[e.length - 1];
        for (let n = 1; n <= t; n++) {
            let r = (0, a.progress)(0, t, n);
            e.push((0, l.mixNumber)(i, 1, r))
        }
    }
    e.s(["fillOffset", 0, u], 215932), e.s(["defaultOffset", 0, function(e) {
        let t = [0];
        return u(t, e.length - 1), t
    }], 515923)
}, 772846, 642824, e => {
    "use strict";
    let t = e => "object" == typeof e && null !== e;
    e.s(["isObject", 0, t], 642824), e.s(["isHTMLElement", 0, function(e) {
        return t(e) && "offsetHeight" in e && !("ownerSVGElement" in e)
    }], 772846)
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
        let r = e.getValue("willChange");
        if ((0, i.isMotionValue)(r) && r.add) return r.add(n);
        if (!r && t.MotionGlobalConfig.WillChange) {
            let i = new t.MotionGlobalConfig.WillChange("auto");
            e.addValue("willChange", i), i.add(n)
        }
    }], 980538)
}, 738638, 203163, e => {
    "use strict";
    let t = (...e) => e.reduce((e, t) => i => t(e(i)));
    e.s(["pipe", 0, t], 738638);
    var i = e.i(965566),
        n = e.i(19928),
        r = e.i(279444),
        s = e.i(569577),
        a = e.i(463011),
        o = e.i(22660);

    function l(e, t, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
    }
    var u = e.i(766820);

    function h(e, t) {
        return i => i > 0 ? t : e
    }
    var m = e.i(100706);
    let c = (e, t, i) => {
            let n = e * e,
                r = i * (t * t - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        },
        d = [a.hex, u.rgba, o.hsla];

    function p(e) {
        let t = d.find(t => t.test(e));
        if ((0, i.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let n = t.parse(e);
        return t === o.hsla && (n = function({
            hue: e,
            saturation: t,
            lightness: i,
            alpha: n
        }) {
            e /= 360, i /= 100;
            let r = 0,
                s = 0,
                a = 0;
            if (t /= 100) {
                let n = i < .5 ? i * (1 + t) : i + t - i * t,
                    o = 2 * i - n;
                r = l(o, n, e + 1 / 3), s = l(o, n, e), a = l(o, n, e - 1 / 3)
            } else r = s = a = i;
            return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: n
            }
        }(n)), n
    }
    let f = (e, t) => {
            let i = p(e),
                n = p(t);
            if (!i || !n) return h(e, t);
            let r = { ...i
            };
            return e => (r.red = c(i.red, n.red, e), r.green = c(i.green, n.green, e), r.blue = c(i.blue, n.blue, e), r.alpha = (0, m.mixNumber)(i.alpha, n.alpha, e), u.rgba.transform(r))
        },
        y = new Set(["none", "hidden"]);

    function g(e, t) {
        return i => (0, m.mixNumber)(e, t, i)
    }

    function v(e) {
        return "number" == typeof e ? g : "string" == typeof e ? (0, n.isCSSVariableToken)(e) ? h : r.color.test(e) ? f : x : Array.isArray(e) ? T : "object" == typeof e ? r.color.test(e) ? f : b : h
    }

    function T(e, t) {
        let i = [...e],
            n = i.length,
            r = e.map((e, i) => v(e)(e, t[i]));
        return e => {
            for (let t = 0; t < n; t++) i[t] = r[t](e);
            return i
        }
    }

    function b(e, t) {
        let i = { ...e,
                ...t
            },
            n = {};
        for (let r in i) void 0 !== e[r] && void 0 !== t[r] && (n[r] = v(e[r])(e[r], t[r]));
        return e => {
            for (let t in n) i[t] = n[t](e);
            return i
        }
    }
    let x = (e, n) => {
        let r = s.complex.createTransformer(n),
            a = (0, s.analyseComplexValue)(e),
            o = (0, s.analyseComplexValue)(n);
        if (!(a.indexes.var.length === o.indexes.var.length && a.indexes.color.length === o.indexes.color.length && a.indexes.number.length >= o.indexes.number.length)) return (0, i.warning)(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), h(e, n);
        if (y.has(e) && !o.values.length || y.has(n) && !a.values.length) return y.has(e) ? t => t <= 0 ? e : n : t => t >= 1 ? n : e;
        return t(T(function(e, t) {
            let i = [],
                n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let r = 0; r < t.values.length; r++) {
                let s = t.types[r],
                    a = e.indexes[s][n[s]],
                    o = e.values[a] ? ? 0;
                i[r] = o, n[s]++
            }
            return i
        }(a, o), o.values), r)
    };
    e.s(["mix", 0, function(e, t, i) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof i ? (0, m.mixNumber)(e, t, i) : v(e)(e, t)
    }], 203163)
}, 783920, e => {
    "use strict";
    e.s(["progress", 0, (e, t, i) => {
        let n = t - e;
        return n ? (i - e) / n : 1
    }])
}]);