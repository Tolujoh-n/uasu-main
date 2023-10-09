/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
;(window.Modernizr = (function (a, b, c) {
  function C(a) {
    j.cssText = a;
  }
  function D(a, b) {
    return C(n.join(a + ";") + (b || ""));
  }
  function E(a, b) {
    return typeof a === b;
  }
  function F(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function G(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function H(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function I(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + p.join(d + " ") + d).split(" ");
    return E(b, "string") || E(b, "undefined")
      ? G(e, b)
      : ((e = (a + " " + q.join(d + " ") + d).split(" ")), H(e, b, c));
  }
  function J() {
    (e.input = (function (c) {
      for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
      return (
        u.list &&
          (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
        u
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (e.inputtypes = (function (a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++)
          k.setAttribute("type", (f = a[d])),
            (e = k.type !== "text"),
            e &&
              ((k.value = l),
              (k.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(f) && k.style.WebkitAppearance !== c
                ? (g.appendChild(k),
                  (h = b.defaultView),
                  (e =
                    h.getComputedStyle &&
                    h.getComputedStyle(k, null).WebkitAppearance !==
                      "textfield" &&
                    k.offsetHeight !== 0),
                  g.removeChild(k))
                : /^(search|tel)$/.test(f) ||
                  (/^(url|email)$/.test(f)
                    ? (e = k.checkValidity && k.checkValidity() === !1)
                    : (e = k.value != l))),
            (t[a[d]] = !!e);
        return t;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k = b.createElement("input"),
    l = ":)",
    m = {}.toString,
    n = " -webkit- -moz- -o- -ms- ".split(" "),
    o = "Webkit Moz O ms",
    p = o.split(" "),
    q = o.toLowerCase().split(" "),
    r = { svg: "http://www.w3.org/2000/svg" },
    s = {},
    t = {},
    u = {},
    v = [],
    w = v.slice,
    x,
    y = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m || ((n.style.background = ""), g.appendChild(n)),
        (i = c(l, a)),
        m ? l.parentNode.removeChild(l) : n.parentNode.removeChild(n),
        !!i
      );
    },
    z = (function () {
      function d(d, e) {
        (e = e || b.createElement(a[d])),
          (e.innerHTML = "<" + d + "></" + d + ">"),
          (f = e.childNodes.length === 1);
      }
      var a = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return d;
    })(),
    A = {}.hasOwnProperty;
  (x =
    E(A, "undefined") || E(A.call, "undefined")
      ? function (a, b) {
          return b in a && E(a.constructor.prototype[b], "undefined");
        }
      : function (a, b) {
          return A.call(a, b);
        }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = w.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(w.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(w.call(arguments)));
          };
        return e;
      });
  var K = {
    elem: n("modernizr"),
    props: {},
    css: {},
    domPrefixes: q,
    tests: {},
    doNotUsePrefixes: ["hidden", "visibility", "opacity", "userSelect"],
  };
  !("onblur" in k) &&
    !("addEventListener" in k) &&
    (Modernizr = "undefined");
  Modernizr._q.push(function () {
    delete K.addTest;
    delete K.addAsyncTest;
    for (var a in K)
      x(K, a) &&
        (x(e, a) ? ((Modernizr[a] = K[a]), delete K[a]) : (Modernizr[a] = K[a]));
  }),
    J(),
    delete K.addTest,
    delete K.addAsyncTest;
  for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
  a.Modernizr = Modernizr;
})(window, document));
