(function() {
    var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
      , ba = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
      , ca = ba(this)
      , g = function(a, b) {
        if (b)
            a: {
                var c = ca;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && aa(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
      , h = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    g("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = h(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
                if (d[--c] != b[--e])
                    return !1;
            return 0 >= e
        }
    });
    g("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    g("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    g("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== h(this, b, "includes").indexOf(b, c || 0)
        }
    });
    window.gapi = window.gapi || {};
    window.gapi.A = (new Date).getTime();
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var m = this || self
      , n = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , da = 0
      , r = function(a) {
        return a
    };
    var y = function(a) {
        if (x !== x)
            throw Error("SafeUrl is not meant to be built directly");
        this.v = a
    };
    y.prototype.toString = function() {
        return this.v.toString()
    }
    ;
    var x = {};
    new y("about:invalid#zClosurez");
    new y("about:blank");
    var A = {}
      , B = function() {
        if (A !== A)
            throw Error("SafeStyle is not meant to be built directly");
        this.s = ""
    };
    B.prototype.toString = function() {
        return this.s.toString()
    }
    ;
    new B;
    var C = {}
      , ea = function() {
        if (C !== C)
            throw Error("SafeStyleSheet is not meant to be built directly");
        this.o = ""
    };
    ea.prototype.toString = function() {
        return this.o.toString()
    }
    ;
    new ea;
    var fa = {}
      , ha = function() {
        var a = m.trustedTypes && m.trustedTypes.emptyHTML || "";
        if (fa !== fa)
            throw Error("SafeHtml is not meant to be built directly");
        this.l = a
    };
    ha.prototype.toString = function() {
        return this.l.toString()
    }
    ;
    new ha;
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    new y("about:blank");
    new y("about:invalid#zClosurez");
    var ia = []
      , ja = function(a) {
        console.warn("A URL with content '" + a + "' was sanitized away.")
    };
    -1 === ia.indexOf(ja) && ia.push(ja);
    /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var F = window
      , G = document
      , ka = F.location
      , la = function() {}
      , ma = /\[native code\]/
      , H = function(a, b, c) {
        return a[b] = a[b] || c
    }
      , na = function(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    }
      , I = function() {
        var a;
        if ((a = Object.create) && ma.test(a))
            a = a(null);
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
      , J = H(F, "gapi", {});
    var K = {};
    K = H(F, "___jsl", I());
    H(K, "I", 0);
    H(K, "hel", 10);
    var oa = function() {
        var a = ka.href;
        if (K.dpo)
            var b = K.h;
        else {
            b = K.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g")
              , d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a)))
                try {
                    b = decodeURIComponent(a[2])
                } catch (e) {}
        }
        return b
    }
      , pa = function(a) {
        var b = H(K, "PQ", []);
        K.PQ = [];
        var c = b.length;
        if (0 === c)
            a();
        else
            for (var d = 0, e = function() {
                ++d === c && a()
            }, f = 0; f < c; f++)
                b[f](e)
    }
      , N = function(a) {
        return H(H(K, "H", I()), a, I())
    };
    var O = H(K, "perf", I())
      , qa = H(O, "g", I())
      , ra = H(O, "i", I());
    H(O, "r", []);
    I();
    I();
    var P = function(a, b, c) {
        var d = O.r;
        "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    }
      , Q = function(a, b, c) {
        b && 0 < b.length && (b = ta(b),
        c && 0 < c.length && (b += "___" + ta(c)),
        28 < b.length && (b = b.substr(0, 28) + (b.length - 28)),
        c = b,
        b = H(ra, "_p", I()),
        H(b, c, I())[a] = (new Date).getTime(),
        P(a, "_p", c))
    }
      , ta = function(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
    };
    var ua = I()
      , U = []
      , V = function(a) {
        throw Error("Bad hint: " + a);
    };
    U.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? K[b] = H(K, b, []).concat(c) : H(K, b, c)
            }
        if (b = a.u)
            a = H(K, "us", []),
            a.push(b),
            (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }
    ]);
    var va = /^(\/[a-zA-Z0-9_\-]+)+$/
      , wa = [/\/amp\//, /\/amp$/, /^\/amp$/]
      , xa = /^[a-zA-Z0-9\-_\.,!]+$/
      , ya = /^gapi\.loaded_[0-9]+$/
      , za = /^[a-zA-Z0-9,._-]+$/
      , Da = function(a, b, c, d, e) {
        var f = a.split(";")
          , k = f.shift()
          , t = ua[k]
          , l = null;
        t ? l = t(f, b, c, d) : V("no hint processor for: " + k);
        l || V("failed to generate load url");
        b = l;
        c = b.match(Aa);
        (d = b.match(Ba)) && 1 === d.length && Ca.test(b) && c && 1 === c.length || V("failed sanity: " + a);
        try {
            a = "?";
            if (e && 0 < e.length) {
                c = b = 0;
                for (d = {}; c < e.length; ) {
                    var p = e[c++];
                    f = void 0;
                    k = typeof p;
                    f = "object" == k && null != p || "function" == k ? "o" + (Object.prototype.hasOwnProperty.call(p, n) && p[n] || (p[n] = ++da)) : (typeof p).charAt(0) + p;
                    Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
                    e[b++] = p)
                }
                e.length = b;
                l = l + "?le=" + e.join(",");
                a = "&"
            }
            if (K.rol) {
                var z = K.ol;
                z && z.length && (l = "" + l + a + "ol=" + z.length)
            }
        } catch (R) {}
        return l
    }
      , Ga = function(a, b, c, d) {
        a = Ea(a);
        ya.test(c) || V("invalid_callback");
        b = Fa(b);
        d = d && d.length ? Fa(d) : null;
        var e = function(f) {
            return encodeURIComponent(f).replace(/%2C/g, ",")
        };
        return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.g ? "/am=" + e(a.g) : "", a.i ? "/rs=" + e(a.i) : "", a.j ? "/t=" + e(a.j) : "", "/cb=", e(c)].join("")
    }
      , Ea = function(a) {
        "/" !== a.charAt(0) && V("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length; ) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf("."))
                V("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d].split("=")
              , k = decodeURIComponent(f[0])
              , t = decodeURIComponent(f[1]);
            2 == f.length && k && t && (a[k] = a[k] || t)
        }
        b = "/" + c.join("/");
        va.test(b) || V("invalid_prefix");
        c = 0;
        for (d = wa.length; c < d; ++c)
            wa[c].test(b) && V("invalid_prefix");
        c = W(a, "k", !0);
        d = W(a, "am");
        e = W(a, "rs");
        a = W(a, "t");
        return {
            pathPrefix: b,
            version: c,
            g: d,
            i: e,
            j: a
        }
    }
      , Fa = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            za.test(e) && b.push(e)
        }
        return b.join(",")
    }
      , W = function(a, b, c) {
        a = a[b];
        !a && c && V("missing: " + b);
        if (a) {
            if (xa.test(a))
                return a;
            V("invalid: " + b)
        }
        return null
    }
      , Ca = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/
      , Ba = /\/cb=/g
      , Aa = /\/\//g;
    ua.m = function(a, b, c, d) {
        (a = a[0]) || V("missing_hint");
        return "https://apis.google.com" + Ga(a, b, c, d)
    }
    ;
    var X = decodeURI("%73cript"), Ha = /^[-+_0-9\/A-Za-z]+={0,2}$/, Ia = function(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d], f;
            if (f = e) {
                a: {
                    for (f = 0; f < b.length; f++)
                        if (b[f] === e)
                            break a;
                    f = -1
                }
                f = 0 > f
            }
            f && c.push(e)
        }
        return c
    }, Ja = function() {
        var a = K.nonce;
        return void 0 !== a ? a && a === String(a) && a.match(Ha) ? a : K.nonce = null : G.querySelector ? (a = G.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "",
        a && a === String(a) && a.match(Ha) ? K.nonce = a : K.nonce = null) : null : null
    }, La = function(a) {
        if ("loading" != G.readyState)
            Ka(a);
        else {
            var b = Ja()
              , c = "";
            null !== b && (c = ' nonce="' + b + '"');
            a = "<" + X + ' src="' + encodeURI(a) + '"' + c + "></" + X + ">";
            G.write(Y ? Y.createHTML(a) : a)
        }
    }, Ka = function(a) {
        var b = G.createElement(X);
        b.setAttribute("src", Y ? Y.createScriptURL(a) : a);
        a = Ja();
        null !== a && b.setAttribute("nonce", a);
        b.async = "true";
        (a = G.getElementsByTagName(X)[0]) ? a.parentNode.insertBefore(b, a) : (G.head || G.body || G.documentElement).appendChild(b)
    }, Na = function(a, b, c) {
        Ma(function() {
            var d = b === oa() ? H(J, "_", I()) : I();
            d = H(N(b), "_", d);
            a(d)
        }, c)
    }, Pa = function(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {},
        c.callback = b);
        var d = (b = c) && b._c;
        if (d)
            for (var e = 0; e < U.length; e++) {
                var f = U[e][0]
                  , k = U[e][1];
                k && Object.prototype.hasOwnProperty.call(d, f) && k(d[f], a, b)
            }
        b = [];
        a ? b = a.split(":") : c.features && (b = c.features);
        if (!(a = c.h) && (a = oa(),
        !a))
            throw Error("Bad hint: !hint");
        Oa(b || [], c, a)
    }, Oa = function(a, b, c) {
        var d = !!K.glrp;
        a = na(a) || [];
        var e = b.callback
          , f = b.config
          , k = b.timeout
          , t = b.ontimeout
          , l = b.onerror
          , p = void 0;
        "function" == typeof l && (p = l);
        var z = null
          , R = !1;
        if (k && !t || !k && t)
            throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        l = H(N(c), "r", []).sort();
        var S = H(N(c), "L", []).sort()
          , Ta = K.le || []
          , L = [].concat(l)
          , sa = function(w, D) {
            if (R)
                return 0;
            F.clearTimeout(z);
            S.push.apply(S, q);
            var E = ((J || {}).config || {}).update;
            E ? E(f) : f && H(K, "cu", []).push(f);
            if (D) {
                Q("me0", w, L);
                try {
                    Na(D, c, p)
                } finally {
                    Q("me1", w, L)
                }
            }
            return 1
        };
        0 < k && (z = F.setTimeout(function() {
            R = !0;
            t()
        }, k));
        var q = Ia(a, S);
        if (q.length) {
            q = Ia(a, l);
            var u = H(K, "CP", [])
              , v = u.length;
            u[v] = function(w) {
                if (!w)
                    return 0;
                Q("ml1", q, L);
                var D = function(M) {
                    d || (u[v] = null);
                    sa(q, w) && (d && (u[v] = null),
                    pa(function() {
                        e && e();
                        M()
                    }))
                }
                  , E = function() {
                    var M = u[v + 1];
                    M && M()
                };
                0 < v && u[v - 1] ? u[v] = function() {
                    D(E)
                }
                : D(E)
            }
            ;
            if (q.length) {
                var T = "loaded_" + K.I++;
                J[T] = function(w) {
                  try {
                    u[v](w);
                  }catch (e) {
                    u[v] = function(w) {
                        if (!w)
                            return 0;
                        Q("ml1", q, L);
                        var D = function(M) {
                            d || (u[v] = null);
                            sa(q, w) && (d && (u[v] = null),
                            pa(function() {
                                e && e();
                                M()
                            }))
                        }
                          , E = function() {
                            var M = u[v + 1];
                            M && M()
                        };
                        0 < v && u[v - 1] ? u[v] = function() {
                            D(E)
                        }
                        : D(E)
                    }
                    u[v](w);
                  }
                    J[T] = null
                }
                ;
                a = Da(c, q, "gapi." + T, l, Ta);
                l.push.apply(l, q);
                Q("ml0", q, L);
                b.sync || F.___gapisync ? La(a) : Ka(a)
            } else
                u[v](la)
        } else
            sa(q) && e && e()
    }, Qa;
    var Ra = null
      , Z = m.trustedTypes;
    if (Z && Z.createPolicy)
        try {
            Ra = Z.createPolicy("gapi#gapi", {
                createHTML: r,
                createScript: r,
                createScriptURL: r
            })
        } catch (a) {
            m.console && m.console.error(a.message)
        }
    Qa = Ra;
    var Y = Qa;
    var Ma = function(a, b) {
        if (K.hee && 0 < K.hel)
            try {
                return a()
            } catch (c) {
                b && b(c),
                K.hel--,
                Pa("debug_error", function() {
                    try {
                        window.___jsl.hefn(c)
                    } catch (d) {
                        throw c;
                    }
                })
            }
        else
            try {
                return a()
            } catch (c) {
                throw b && b(c),
                c;
            }
    };
    var Sa = J.load;
    Sa && H(K, "ol", []).push(Sa);
    J.load = function(a, b) {
        return Ma(function() {
            return Pa(a, b)
        })
    }
    ;
    U.unshift(["url", function(a, b, c) {
        !a || b && "" !== b || !a.endsWith(".js") || (a = a.substring(0, a.length - 3),
        b = a.lastIndexOf("/") + 1,
        b >= a.length || (a = a.substr(b).split(":").filter(function(d) {
            return !["api", "platform"].includes(d)
        }),
        c.features = a))
    }
    ]);
    qa.bs0 = window.gapi._bs || (new Date).getTime();
    P("bs0");
    qa.bs1 = (new Date).getTime();
    P("bs1");
    delete window.gapi._bs;
    window.gapi.load("", {
        callback: window["__iframefcb875610"],
        _c: {
            url: "https://apis.google.com/js/api.js",
            jsl: {
                ci: {
                    "oauth-flow": {
                        authUrl: "https://accounts.google.com/o/oauth2/auth",
                        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                        disableOpt: !0,
                        idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe",
                        usegapi: !1
                    },
                    debug: {
                        reportExceptionRate: 1,
                        forceIm: !1,
                        rethrowException: !0,
                        host: "https://apis.google.com"
                    },
                    enableMultilogin: !0,
                    "googleapis.config": {
                        auth: {
                            useFirstPartyAuthV2: !0
                        },
                        root: "https://content.googleapis.com",
                        "root-1p": "https://clients6.google.com"
                    },
                    inline: {
                        css: 1
                    },
                    disableRealtimeCallback: !1,
                    drive_share: {
                        skipInitCommand: !0
                    },
                    csi: {
                        rate: .01
                    },
                    client: {
                        cors: !1
                    },
                    signInDeprecation: {
                        rate: 0
                    },
                    include_granted_scopes: !0,
                    llang: "ja",
                    iframes: {
                        youtube: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ytsubscribe: {
                            url: "https://www.youtube.com/subscribe_embed?usegapi=1"
                        },
                        plus_circle: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
                        },
                        plus_share: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
                        },
                        rbr_s: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                        },
                        ":source:": "3p",
                        playemm: {
                            url: "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
                        },
                        savetoandroidpay: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        blogger: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        evwidget: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
                        },
                        partnersbadge: {
                            url: "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
                        },
                        dataconnector: {
                            url: "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
                        },
                        surveyoptin: {
                            url: "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
                        },
                        ":socialhost:": "https://apis.google.com",
                        shortlists: {
                            url: ""
                        },
                        hangout: {
                            url: "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                        },
                        plus_followers: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
                        },
                        post: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
                        },
                        signin: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
                            methods: ["onauth"]
                        },
                        rbr_i: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                        },
                        share: {
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
                        },
                        plusone: {
                            params: {
                                count: "",
                                size: "",
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
                        },
                        comments: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ":im_socialhost:": "https://plus.googleapis.com",
                        backdrop: {
                            url: "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
                        },
                        visibility: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
                        },
                        autocomplete: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                        },
                        ":signuphost:": "https://plus.google.com",
                        ratingbadge: {
                            url: "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
                        },
                        appcirclepicker: {
                            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                        },
                        follow: {
                            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
                        },
                        community: {
                            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
                        },
                        sharetoclassroom: {
                            url: "https://classroom.google.com/sharewidget?usegapi=1"
                        },
                        ytshare: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
                        },
                        plus: {
                            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
                        },
                        family_creation: {
                            params: {
                                url: ""
                            },
                            url: "https://families.google.com/webcreation?usegapi=1&usegapi=1"
                        },
                        commentcount: {
                            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
                        },
                        configurator: {
                            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
                        },
                        zoomableimage: {
                            url: "https://ssl.gstatic.com/microscope/embed/"
                        },
                        appfinder: {
                            url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
                        },
                        savetowallet: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        person: {
                            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
                        },
                        savetodrive: {
                            url: "https://drive.google.com/savetodrivebutton?usegapi=1",
                            methods: ["save"]
                        },
                        page: {
                            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
                        },
                        card: {
                            url: ":socialhost:/:session_prefix:_/hovercard/card"
                        }
                    }
                },
                h: "m;/_/scs/abc-static/_/js/k=gapi.lb.ja.wtkx4bNGRd4.O/am=AAAC/d=1/rs=AHpOoo9RfDX-8fNH2eBcbb4lHtbnABgT8g/m=__features__",
                u: "https://apis.google.com/js/api.js",
                hee: !0,
                dpo: !1,
                le: ["scs"],
                glrp: false
            },
            platform: "backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
            annotation: ["interactivepost", "recobar", "signin2", "autocomplete"]
        }
    });
}
).call(this);
