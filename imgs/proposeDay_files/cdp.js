"use strict";
window.alreadyListedWidgetInEvent = [];
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === o && e.constructor && (o = e.constructor.name),
      "Map" === o || "Set" === o
        ? Array.from(e)
        : "Arguments" === o ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function getToUrlBannerClick(e){
  var isAnchor = e.querySelector('a');
  return isAnchor ? isAnchor.getAttribute('href') : "";
}
function _iterableToArray(e) {
  if (
    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
  return r;
}
function ownKeys(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      o.push.apply(o, r);
  }
  return o;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(o), !0).forEach(function (t) {
          _defineProperty(e, t, o[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
      : ownKeys(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
  }
  return e;
}
function _defineProperty(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
function getCookie(e) {
  for (
    var t = e + "=",
      o = decodeURIComponent(document.cookie),
      r = o.split(";"),
      n = 0;
    n < r.length;
    n++
  ) {
    for (var i = r[n]; " " == i.charAt(0); ) i = i.substring(1);
    if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
  }
  return "";
}
function loadjsfile(e, t) {
  if ("js" === t) {
    var o = document.createElement("script");
    o.setAttribute("type", "text/javascript"), o.setAttribute("src", e);
  }
  "undefined" != typeof o &&
    document.getElementsByTagName("head")[0].appendChild(o);
}
function browserFingerprint() {
  var e,
    t = "";
  return "function" == typeof fingerprint
    ? ((t = new fingerprint()),
      new Promise(function (o, r) {
        t.get(function (r) {
          (e = t.x64hash128(
            r
              .map(function (e) {
                return e.value;
              })
              .join(),
            31
          )),
            cdp.setCookie("cdp-fngId", e, 4e5),
            o(e);
        });
      }))
    : new Promise(function (e, t) {
        t("fingerprintId not found");
      });
}
function cdp_cdp() {
  this.deviceId,
    this.deviceType,
    this.eventTime,
    this.dName,
    (this.sdkVersion = "1.0"),
    (this.screenAlias = screen),
    (this.documentAlias = document),
    (this.navigatorAlias = navigator),
    (this.windowAlias = window),
    this.fingerprint,
    this.productCount,
    (this.addOnArr = []),
    (this.CONSTANT = {
      PAGELOAD: "pageload",
      CLICK: "click",
      SCROLL: "productscroll",
      PRODUCTLIST: "productlist",
      WIDGET: "widgetdisplay",
      MENU: "menuclick",
      SORT: "sort",
      GIFTFIND: "giftfind",
      LOCATION: "location",
      SEARCH: "search",
      PRODUCTDETAIL: "productdetail",
      ADDON: "addon",
      ADDONADD: "addonadd",
      SLIDEADDON: "slideaddon",
      PAYMENTOPT: "paymentoptions",
      PAYNOW: "paynow",
      PAYMENTSTATUS: "paymentstatus",
      ADDRESSVALUES: "addressform",
      FULLADDRESS: "fulladdress",
      CARDMESSAGE: "cardmessage",
      PROMOCODE: "promocode",
      DEVICEID: "cdp-Device-Id",
      DELIVERYDATE: "deliverydate",
      DESCRIREAD: "productdescription",
      REMOVECART: "removefromcart",
      ADDCARTBUY: "addtocart",
      TRACKINGAPI: "apitracker",
      LOGIN: "login",
      IMAGEHOVER: "imagehover",
      IMAGECLICK: "imageclick",
      IMAGESLIDE: "imageslide",
      SEARCHLIST: "searchlist",
      PLPBANNERS: "plpbanners",
      CARTVALUE: "cartvalue",
      CHECKOUT: "checkout",
      CART: "cart",
      ADDONINTERACTION: "addoninteraction",
      NOTIFICATION: "notification",
      BOTPATTERN:
        "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)",
      FINGERPRINTURL: "https://cdpjs.fnp.com/cdp_js/cdp-fingerprint.js",
      WISHLIST: "wishlist",
      WISHBUTTON: "wishbutton",
    }),
    (this.baseUrl = "https://cdp-events.fnp.com/"),
    window.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = Array.prototype.forEach),
    Element.prototype.closest ||
      (Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      (Element.prototype.closest = function (e) {
        var t = this,
          o = this;
        if (!document.documentElement.contains(t)) return null;
        do {
          if (o.matches(e)) return o;
          o = o.parentElement;
        } while (null !== o);
        return null;
      })),
    Object.assign ||
      Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          if (void 0 === e || null === e)
            throw new TypeError("Cannot convert first argument to object");
          for (var t = Object(e), o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            if (void 0 !== r && null !== r) {
              r = Object(r);
              for (
                var n = Object.keys(Object(r)), i = 0, a = n.length;
                i < a;
                i++
              ) {
                var c = n[i],
                  d = Object.getOwnPropertyDescriptor(r, c);
                void 0 !== d && d.enumerable && (t[c] = r[c]);
              }
            }
          }
          return t;
        },
      });
  var e = this;
  document.addEventListener("readystatechange", function (e) {
    if ("complete" === e.target.readyState) {
      "undefined" != typeof webengage &&
        webengage.onReady(function () {
          if (!cdp.getCookie("cdp-webengage")) {
            var e = webengage.user.getAnonymousId();
            cdp.setCookie("cdp-webengage", e, 4e5);
          }
          webengage.webpush.isSubscribed() === !0
            ? cdp.setCookie("cdp-webpush", !0, 4e5)
            : webengage.webpush.isSubscribed() === !1
            ? cdp.setCookie("cdp-webpush", !1, 4e5)
            : webengage.webpush.onSubscribe(function () {
                cdp.setCookie("cdp-webpush", !0, 4e5);
              });
        }),
        cdp.deleteCookie("cdp-deviceId");
      var t = cdp.getCookie("cdp-fngId");
      if (t) cdp.commonAttr();
      else {
        var o = browserFingerprint();
        o.then(function (e) {
          cdp.setCookie("cdp-fngId", e, 4e5), cdp.commonAttr();
        });
      }
      cdp.initializeServiceWorker(), cdp.initializeDB();
    }
  }),
    (this.cdp = {
      commonAttr: function () {
        var t = cdp.getCookie(e.CONSTANT.DEVICEID);
        cdp.getCookie("cdp-mapperId")
          ? "0" === cdp.getCookie("cdp-mapperId")
            ? cdp.setDeviceId(function () {})
            : t
            ? (cdp.methodSets(), cdp.setClickId("true"))
            : cdp.setDeviceId(function () {})
          : (cdp.getCookie("cdp-mapperId") ||
              cdp.setCookie("cdp-mapperId", 0, 4e5),
            "0" === cdp.getCookie("cdp-mapperId") &&
              cdp.setDeviceId(function () {}));
      },
      methodSets: function () {
        cdp.widget(),
          cdp.click(),
          cdp.variantChange(),
          cdp.getImagehover(),
          cdp.getPlpBanner();
        var e = cdp.getDeviceType();
        if (e === "Mobile" || e === "Tablet") {
          cdp.load(),
            "function" == typeof cdpMenuClick && cdpMenuClick(),
            cdp.sortByClick();
        } else
          "function" == typeof menuDesktop && menuDesktop(),
            cdp.sortByChange(),
            cdp.sortByClick(),
            cdp.load();
      },
      setDeviceId: function (t) {
        var o = cdp.userJsonConstruct("registration"),
          r = o.common,
          n = cdp.dataPostRequest(e.baseUrl + "id", JSON.stringify(r));
        n.then(
          function (o) {
            cdp.setCookie("cdp-mapperId", 1, 4e5), cdp.methodSets();
            var r = JSON.parse(localStorage.getItem("loading-data"));
            if (r) {
              (r.common.dev.dId = cdp.getCookie(e.CONSTANT.DEVICEID)),
                (r.common.fngId = cdp.getCookie("cdp-fngId"));
              var n = cdp.dataPostRequest(
                e.baseUrl + "event",
                JSON.stringify(r)
              );
              n.then(function (e) {
                localStorage.removeItem("loading-data");
              });
            }
            t();
          },
          function (e) {}
        );
      },
      getDeviceType: function () {
        var e = navigator.userAgent || navigator.vendor;
        return (e.match(/iPhone/i) || e.match(/Android/i)) && screen.width < 768
          ? "Mobile"
          : e.match(/ipad/i) && screen.width >= 768 && screen.width <= 1024
          ? "Tablet"
          : "Desktop";
      },
      getDomain: function () {
        for (
          var e = 0,
            t = document.domain,
            o = t.split("."),
            r = "_gd" + new Date().getTime();
          e < o.length - 1 && document.cookie.indexOf(r + "=" + r) == -1;

        )
          document.cookie = r + "=" + r + ";domain=" + t + ";";
        return (
          (document.cookie =
            r + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + t + ";"),
          t
        );
      },
      getCookie: function (e) {
        for (
          var t = e + "=",
            o = decodeURIComponent(document.cookie),
            r = o.split(";"),
            n = 0;
          n < r.length;
          n++
        ) {
          for (var i = r[n]; " " == i.charAt(0); ) i = i.substring(1);
          if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
        }
        return "";
      },
      setCookie: function (e, t, o) {
        var r = new Date();
        r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
        var n = "expires=" + r.toUTCString();
        document.cookie = e + "=" + t + ";" + n + ";path=/";
      },
      deleteCookie: function (e) {
        document.cookie =
          e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      },
      getDecodedCookie: function (e) {
        for (
          var t = e + "=", o = document.cookie.split(";"), r = 0;
          r < o.length;
          r++
        ) {
          for (var n = o[r]; " " == n.charAt(0); ) n = n.substring(1);
          if (0 == n.indexOf(t))
            return decodeURIComponent(n.substring(t.length, n.length));
        }
        return "";
      },
      setEncodedCookie: function (e, t, o) {
        var r = new Date();
        r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
        var n = "expires=" + r.toUTCString();
        document.cookie = e + "=" + encodeURIComponent(t) + ";" + n + ";path=/";
      },
      userJsonConstruct: function (t) {
        var o = {
          common: {
            ename: t,
            dname: cdp.getDomain(),
            dev: {
              dId: cdp.getCookie(e.CONSTANT.DEVICEID),
              ua: e.navigatorAlias.userAgent,
              blang: navigator.language || navigator.userLanguage,
              ver: e.sdkVersion,
              dtype: cdp.getDeviceType(),
              appos: cdp.getDeviceOs(),
              pfspec: "web",
            },
            user: {
              id: cdp.getCookie("faul"),
              cur: cdp.getCookie("localCurrency"),
            },
            fngId: cdp.getCookie("cdp-fngId"),
            pgloc: {
              from: e.documentAlias.referrer,
              to: e.windowAlias.location.href,
              clikd: cdp.getCookie("widget"),
            },
            NvId: cdp.getCookie("nv_push_subscribe"),
            NVUID: cdp.getCookie("_nv_uid"),
            wegId: cdp.getCookie("cdp-webengage"),
            webPush: "true" === cdp.getCookie("cdp-webpush"),
          },
        };
        return o;
      },
      pageLaunchJson: function () {
        var e = {
          item: {},
          menu: {},
          findGift: {},
          search: {},
          productDetail: {},
        };
        return e;
      },
      getDeviceOs: function () {
        var e = window.navigator.userAgent,
          t = window.navigator.platform,
          o = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
          r = ["Win32", "Win64", "Windows", "WinCE"],
          n = ["iPhone", "iPad", "iPod"],
          i = null;
        return (
          o.indexOf(t) !== -1
            ? (i = "Mac OS")
            : n.indexOf(t) !== -1
            ? (i = "iOS")
            : r.indexOf(t) !== -1
            ? (i = "Windows")
            : /Android/.test(e)
            ? (i = "Android")
            : !i && /Linux/.test(t) && (i = "Linux"),
          i
        );
      },
      initializeDB: function () {
        var e = window.indexedDB.open("apiJsonStore");
        e.onupgradeneeded = function (e) {
          var t = e.target.result;
          t.createObjectStore("apiJsonObjStore", { autoIncrement: !0 });
        };
      },
      initializeServiceWorker: function (e) {
        void 0 != e &&
          (navigator.serviceWorker
            ? navigator.serviceWorker
                .register("/assets/js/serviceWorker-cdp.js")
                .then(function () {
                  return navigator.serviceWorker.ready;
                })
                .then(function (t) {
                  cdp.saveData(e).then(function () {
                    t.sync
                      ? t.sync
                          .register("failedAPI-sync")
                          ["catch"](function (e) {
                            return console.warn("error", e), e;
                          })
                      : cdp.checkInternet();
                  });
                })
            : cdp.saveData(e).then(function () {
                cdp.checkInternet();
              }));
      },
      saveData: function (e) {
        if (void 0 != e)
          return new Promise(function (t, o) {
            var r = e,
              n = window.indexedDB.open("apiJsonStore");
            (n.onsuccess = function (e) {
              var o = this.result
                .transaction("apiJsonObjStore", "readwrite")
                .objectStore("apiJsonObjStore");
              o.add(r), t();
            }),
              (n.onerror = function (e) {
                console.warn("error", e), o(e);
              });
          });
      },
      fetchData: function () {
        return new Promise(function (e, t) {
          var o = window.indexedDB.open("apiJsonStore");
          (o.onsuccess = function (t) {
            this.result
              .transaction("apiJsonObjStore")
              .objectStore("apiJsonObjStore")
              .getAll().onsuccess = function (t) {
              e(t.target.result);
            };
          }),
            (o.onerror = function (e) {
              console.warn("error", e), t(e);
            });
        });
      },
      sendData: function () {
        cdp
          .fetchData()
          .then(function (e) {
            var t = {
              method: "POST",
              body: e,
              headers: { "Content-Type": "application/json" },
            };
            return window.fetch(this.baseUrl + "event", t);
          })
          ["catch"](function (e) {
            console.warn("error", e);
          });
      },
      checkInternet: function () {
        event.preventDefault(), navigator.onLine && cdp.sendData();
      },
      dataPostRequest: function (t, o) {
        var r = document.getElementsByTagName("BODY")[0];
        if ((r = r.getAttribute("cookiesApp"))) {
          (r = JSON.parse(r)), (o = JSON.parse(o));
          var n = o.common.ename;
          (o.common = r), (o.common.ename = n), (o = JSON.stringify(o));
        }
        var i = o,
          a = e.CONSTANT.BOTPATTERN,
          c = new RegExp(a, "i"),
          d = JSON.parse(i);
        if (d.common) {
          var s = d.common.dev.ua;
          if (c.test(s)) return !1;
        }
        return new Promise(function (r, n) {
          try {
            var i = new XMLHttpRequest();
            i.onreadystatechange = function () {
              if (4 == i.readyState && 200 == i.status) {
                var t = i.responseText,
                  a = cdp.getCookie(e.CONSTANT.DEVICEID);
                return (
                  !a &&
                    t &&
                    (cdp.setCookie(e.CONSTANT.DEVICEID, t, 4e5),
                    (e.deviceId = t)),
                  r(t)
                );
              }
              if (4 == i.readyState && 200 !== i.status) {
                var t = i.responseText;
                return cdp.errorLogPost(o, i.status, i.responseText), n(t);
              }
            };
            var a = o;
            (a = JSON.parse(a)),
              i.open("POST", t, !0),
              i.setRequestHeader("Content-type", "application/json"),
              i.setRequestHeader("Cache-Control", "no-store"),
              a &&
                a.common &&
                "widgetdisplay" === a.common.ename &&
                i.setRequestHeader("Content-Encoding", "gzip"),
              i.send(o);
          } catch (c) {
            return (
              cdp.errorLogPost(o, i.err.err),
              n("error while processing your request")
            );
          }
        });
      },
      errorLogPost: function (e, t, o) {
        cdp.initializeServiceWorker(e);
      },
      widget: function () {
        // in plp of home page widgetPLP method will be called
        if (window.fnpPageType === "category" || window.fnpPageType === "home")
          return;
        var t = [],
          o = { eventList: {} },
          r = document.querySelectorAll("[data-wdgtinfo]"),
          n = document.querySelectorAll("[data-wdgt]");
        n = Array.prototype.slice.call(n);
        var i = Array.prototype.slice.call(r);
        if (i.length && n.length) {
          i.forEach(function (e, o) {
            var r = { widg: {} },
              n = [];
            if (e.dataset.wdgtinfo) {
              var i = e.dataset.wdgtinfo.split("~");
              if ("occasion" !== i[1].toLowerCase()) {
                (r.widg.tyCat = i[0] || ""),
                  (r.widg.tyNam = i[1] || ""),
                  (r.widg.wdpos = i[2] || "");
                var a = e.querySelectorAll("[data-wdgt]");
                a.length &&
                  (a.forEach(function (e, t) {
                    var o = {},
                      r = e.dataset.wdgt.split("~");
                    (o.id = r[0] || ""),
                      (o.pri = r[1] || ""),
                      (o.pos = r[2] || ""),
                      (o.label = r[3] || ""),
                      (o.freeflow = r[4] || ""),
                      n.push(o);
                  }),
                  (r.widg.attr = n),
                  t.push(r));
              }
            }
          });
          var a = cdp.userJsonConstruct();
          (a.common.ename = e.CONSTANT.WIDGET),
            (a.common.pgloc.clikd = cdp.getCookie("widget")),
            (o.eventList = t),
            Object.assign(a, o);
          var c = a;
          cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(c));
        }
      },
      // this widgetPLP method will be trigger from plp and home page
      widgetPLP: function () {
        var t = [],
          o = { eventList: {} },
          r = document.querySelectorAll("[data-wdgtinfo]"),
          n = document.querySelectorAll("[data-wdgt]");
        n = Array.prototype.slice.call(n);
        var i = Array.prototype.slice.call(r);
        if (i.length && n.length) {
          i.forEach(function (e, o) {
            var r = { widg: {} },
              n = [];
            if (e.dataset.wdgtinfo) {
              var i = e.dataset.wdgtinfo.split("~");
              if (
                i[1] !== "plp" &&
                !window.alreadyListedWidgetInEvent.includes(i[1])
              ) {
                if ("occasion" !== i[1].toLowerCase()) {
                  (r.widg.tyCat = i[0] || ""),
                    (r.widg.tyNam = i[1] || ""),
                    (r.widg.wdpos = i[2] || "");
                  var a = e.querySelectorAll("[data-wdgt]");
                  a.length &&
                    (a.forEach(function (e, t) {
                      var o = {},
                        r = e.dataset.wdgt.split("~");
                      (o.id = r[0] || ""),
                        (o.pri = r[1] || ""),
                        (o.pos = r[2] || ""),
                        (o.label = r[3] || ""),
                        (o.freeflow = r[4] || ""),
                        n.push(o);
                    }),
                    (r.widg.attr = n),
                    t.push(r),
                    window.alreadyListedWidgetInEvent.push(r.widg.tyNam));
                }
              }
            }
          });
          var a = cdp.userJsonConstruct();
          (a.common.ename = e.CONSTANT.WIDGET),
            (a.common.pgloc.clikd = cdp.getCookie("widget")),
            (o.eventList = t),
            Object.assign(a, o);
          if (t.length) {
            var c = a;
            cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(c));
          }
        }
      },
      getPlpProduct: function () {
        var t = document.getElementsByClassName("cdp");
        t = Array.prototype.slice.call(t);
        var o = { widget: {} };
        return (
          t.length &&
            t.forEach(function (t) {
              if (t.dataset.wdgtinfo) {
                var r = [],
                  n = t.dataset.wdgtinfo.split("~");
                (o.widget.tyCat = n[0] || ""),
                  (o.widget.tyNam = n[1] || ""),
                  (o.widget.wdpos = n[2] || "");
                var i = t.querySelectorAll("[data-plp]");
                i.forEach(function (t, o) {
                  var n = {};
                  if (void 0 == e.productCount || null == e.productCount) {
                    i.length - 1 === o && (e.productCount = o);
                    var a = t.dataset.plp.split("~");
                    (n.id = a[0] || ""),
                      (n.pri = a[1] || ""),
                      (n.pos = a[2] || ""),
                      (n.label = a[3] || ""),
                      (n.grid = a[4] || ""),
                      (n.freeflow = a[5] || ""),
                      r.push(n);
                  } else if (e.productCount && o > e.productCount) {
                    i.length - 1 === o && (e.productCount = o);
                    var c = t.dataset.plp.split("~");
                    (n.id = c[0] || ""),
                      (n.pri = c[1] || ""),
                      (n.pos = c[2] || ""),
                      (n.label = c[3] || ""),
                      (n.grid = c[4] || ""),
                      (n.freeflow = c[5] || ""),
                      r.push(n);
                  }
                }),
                  (o.widget.productList = r);
              }
            }),
          o.widget.productList
        );
      },
      load: function () {
        var t = cdp.userJsonConstruct();
        t.common.ename = e.CONSTANT.PAGELOAD;
        var o = (cdp.getCookie(e.CONSTANT.DEVICEID), cdp.getCookie("pageload"));
        if (o)
          try {
            o = JSON.parse(o);
          } catch (r) {
            o = {};
          }
        var n = cdp.getCookie("widget"),
          i = cdp.pageLaunchJson(),
          a = cdp.getproduct();
        a && (i.productDetail = a),
          o &&
            (n.toLowerCase() === e.CONSTANT.MENU
              ? (i.menu = o)
              : n.toLowerCase() === e.CONSTANT.SEARCH
              ? (i.search = o)
              : n.toLowerCase() === e.CONSTANT.GIFTFIND
              ? (i.findGift = o)
              : (i.item = o)),
          Object.assign(t, i);
        var c = t;
        cdp.deleteCookie("pageload"), cdp.deleteCookie("widget");
        var d = cdp.getDecodedCookie("addonfox");
        if (d)
          try {
            d = JSON.parse(d);
          } catch (s) {
            d = {};
          }
        var p = cdp.getDecodedCookie("payfox");
        if (p)
          try {
            try {
              p = JSON.parse(p);
            } catch (l) {
              p = {};
            }
          } catch (u) {
            p = {};
          }
        d && (cdp.deleteCookie("addonfox"), cdp.setCommonData(d)),
          p && (cdp.deleteCookie("payfox"), cdp.setCommonData(p));
        var g = document.getElementsByTagName("BODY")[0];
        (g = g.getAttribute("cookiesApp")),
          g && cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(c)),
          g || cdp.setCommonData(c);
      },
      setCommonData: function (t) {
        var o = cdp.getCookie(e.CONSTANT.DEVICEID),
          r = cdp.getCookie("cdp-fngId");
        if (o)
          if (r) cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(t));
          else {
            var n = browserFingerprint();
            n.then(function (o) {
              (t.common.fngId = cdp.getCookie("cdp-fngId")),
                cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(t));
            });
          }
        else
          cdp.setDeviceId(function () {
            (t.common.dev.dId = cdp.getCookie(e.CONSTANT.DEVICEID)),
              (t.common.fngId = cdp.getCookie("cdp-fngId")),
              cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(t));
          });
      },
      getPlpBanner: function () {
        var t = document.querySelector(".top_banners");
        if (t) {
          var o = { banner: {} };
          t.addEventListener("click", function (t) {
            var r = t.target.closest("li"),
              n = Array.from(r.closest("ul").children);
            n = n.indexOf(r);
            var i = t.target.alt,
              a = t.target.src;
            (o.banner.position = n), (o.banner.src = a), (o.banner.alt = i);
            var c = JSON.stringify(o.banner);
            cdp.setCookie("widget", e.CONSTANT.PLPBANNERS),
              cdp.setCookie("pageload", c, 0.00138889);
          });
        }
      },
      click: function () {
        var e = document.querySelectorAll("[data-wdgt]");
        e = Array.prototype.slice.call(e);
        var t = document.querySelectorAll("[data-plp]");
        (t = Array.prototype.slice.call(t)),
          t.length &&
            t.forEach(function (e) {
              e.addEventListener("click", cdp.productPage, !0);
            }),
          e.length &&
            e.forEach(function (e, t) {
              e.addEventListener("click", cdp.homePageWidget, !0);
            });
      },
      productPage: function (e) {
        var t = { item: {} },
          o = e.currentTarget.closest(".cdp");
        if (o && o.dataset && o.dataset.wdgtinfo) {
          var r = o.dataset.wdgtinfo.split("~");
          (t.item.tyCat = r[0] || ""),
            (t.item.tyNam = r[1] || ""),
            (t.item.wdpos = r[2] || "");
          var n = e.currentTarget.dataset.plp.split("~");
          (t.item.Id = n[0]),
            (t.item.pri = n[1]),
            (t.item.pos = n[2]),
            (t.item.label = n[3]),
            (t.item.grid = n[4]),
            (t.item.freeflow = n[5]),
            cdp.setCookie("widget", r[1], 694444e-9);
          var i = JSON.stringify(t.item);
          cdp.setCookie("pageload", i, 0.00138889);
        }
      },
      homePageWidget: function (e) {
        var t = { item: {} },
          o = { occasion: {} },
          r = e.currentTarget.closest(".cdp");
        if (r && r.dataset && r.dataset.wdgtinfo) {
          var n = r.dataset.wdgtinfo.split("~");
          if ("menu" === n[0].toLowerCase()) {
            (o.tyCat = n[0] || ""),
              (o.tyNam = n[1] || ""),
              (o.wdpos = n[2] || "");
            var i = e.currentTarget.dataset.wdgt.split("~");
            (o.occasion.from = i[0] || ""),
              (o.occasion.name = i[1] || ""),
              (o.occasion.position = i[2] || "");
          } else {
            (t.item.tyCat = n[0] || ""),
              (t.item.tyNam = n[1] || ""),
              (t.item.wdpos = n[2] || "");
            var a = e.currentTarget.dataset.wdgt.split("~");
            (t.item.Id = a[0]),
              (t.item.pri = a[1]),
              (t.item.pos = a[2]),
              "banners" === n[0]
                ? e.target && e.target.src && (t.item.label = e.target.src)
                : (t.item.label = a[3]),
              (t.item.freeflow = a[4]);
          }
          if (
            (cdp.setCookie("widget", n[1], 694444e-9),
            "menu" === n[0].toLowerCase())
          ) {
            var c = JSON.stringify(o.occasion);
            cdp.setCookie("pageload", c, 0.00138889);
          } else {
            var d = JSON.stringify(t.item);
            cdp.setCookie("pageload", d, 0.00138889);
            var s = document.getElementsByTagName("BODY")[0];
            (s = s.getAttribute("cookiesApp")), s && cdp.load();
          }
        }
      },
      getImagehover: function () {
        var e = document.getElementsByClassName("cdp");
        e = Array.prototype.slice.call(e);
        var t = cdp.getDeviceType();
        if (e.length) {
          var o = document.querySelectorAll("[data-index-cdp]");
          o.length &&
            o.forEach(function (e) {
              t === "Mobile" || t === "Tablet"
                ? ("thumnailSliderImage" === e.className &&
                    e.addEventListener("click", cdp.getImageDetail, !0),
                  e.parentElement.className.indexOf("slide") !== -1 &&
                    e.addEventListener("touchstart", cdp.getImageDetail, !0))
                : (e.addEventListener("click", cdp.getImageDetail, !0),
                  e.addEventListener("mouseover", cdp.getImageDetail, !0));
            });
        }
      },
      getClickDetail: function (t, o) {
        var r = { imageDetail: { index: t, imageUrl: o } };
        cdp.setCookie("widget", "image"),
          cdp.callToApi(r, e.CONSTANT.IMAGECLICK);
      },
      getSlideDetail: function (t, o) {
        var r = { imageDetail: { index: t, imageUrl: o } };
        cdp.callToApi(r, e.CONSTANT.IMAGESLIDE);
      },
      getImageDetail: function (t) {
        var o = { imageDetail: {} },
          r = t.currentTarget.dataset.indexCdp,
          n = t.currentTarget.dataset.image;
        (o.imageDetail.index = r),
          (o.imageDetail.imageUrl = n),
          "click" === t.type
            ? (cdp.setCookie("widget", "image"),
              cdp.callToApi(o, e.CONSTANT.IMAGECLICK))
            : "mouseover" === t.type
            ? cdp.callToApi(o, e.CONSTANT.IMAGEHOVER)
            : "touchstart" === t.type &&
              cdp.callToApi(o, e.CONSTANT.IMAGESLIDE);
      },
      sortByChange: function () {
        var e = document.querySelectorAll("[data-sortsel]");
        e.forEach(function (e, t) {
          if (0 === t) {
            var o = e.closest("select");
            o && o.addEventListener("change", cdp.changeSelect, !0);
          }
        });
      },
      changeSelect: function (t) {
        var o = { sortby: {} },
          r = t.srcElement.options[t.target.selectedIndex].dataset.sortsel;
        (o.sortby = r),
          cdp.setCookie("widget", "sort"),
          cdp.callToApi(o, e.CONSTANT.SORT);
      },
      addonslide: function () {
        var t = { slide: Boolean };
        (t.slide = !0), cdp.callToApi(t, e.CONSTANT.SLIDEADDON);
      },
      payList: function (t) {
        var o = { payOption: {} };
        (o.payOption = t), cdp.callToApi(o, e.CONSTANT.PAYMENTOPT);
      },
      payment: function (t) {
        var o = { paynow: {} };
        (o.paynow = t), cdp.callToApi(o, e.CONSTANT.PAYNOW);
      },
      paystatus: function (t) {
        var o = { status: Boolean };
        (o.status = t), cdp.callToApi(o, e.CONSTANT.PAYMENTSTATUS);
      },
      focusOut: function (t) {
        if (t.target.value.length) {
          var o = { inputval: "" };
          (o.inputval = t.target.value),
            cdp.callToApi(o, e.CONSTANT.ADDRESSVALUES);
        }
      },
      addAdddress: function (t) {
        var o = { address: {} };
        (o.address = t),
          cdp.setCookie("widget", "save address"),
          cdp.callToApi(o, e.CONSTANT.FULLADDRESS);
      },
      cardMess: function (t, o, r, n, i) {
        var a = {
            card: {
              occat: t || "",
              temsg: o || "",
              dear: r || "",
              custmsg: n || "",
              from: i || "",
            },
          },
          c = { card: {} };
        (c.card = a),
          cdp.setCookie("widget", "card message"),
          cdp.callToApi(c, e.CONSTANT.CARDMESSAGE);
      },
      promoCode: function (t) {
        var o = { code: "" };
        (o.code = t),
          cdp.setCookie("widget", "promocode"),
          cdp.callToApi(o, e.CONSTANT.PROMOCODE);
      },
      sortByClick: function () {
        var e = document.querySelectorAll("[data-sortsel]");
        e.forEach(function (e, t) {
          e.addEventListener("click", cdp.changeClick, !0);
        });
      },
      changeClick: function (t) {
        var o = { sortby: {} },
          r = t.currentTarget.dataset.sortsel;
        (o.sortby = r),
          cdp.setCookie("widget", "sort"),
          cdp.callToApi(o, e.CONSTANT.SORT);
      },
      findGift: function (t, o, r, n) {
        var i = {
          fdgift: {
            occtype: t || "",
            gftype: o || "",
            date: r || "",
            city: n || "",
          },
        };
        cdp.setCookie("widget", e.CONSTANT.GIFTFIND);
        var a = JSON.stringify(i.fdgift);
        cdp.setCookie("pageload", a, 0.00138889);
      },
      getLocation: function (t, o, r, a) {
        var n = { location: { pin: t, avail: o, pid: r, area: a} };
        cdp.setCookie("widget", "pincode"),
          cdp.callToApi(n, e.CONSTANT.LOCATION);
      },
      bannerClick: function(d, p, b){
        var fromUrl = d.hasAttribute('href') ? d.getAttribute('href'): getToUrlBannerClick(d);
        var a = cdp.userJsonConstruct();    
        a.common.ename = "bannerClick";
        a.common.pgloc.clikd = "bannerClick";
        a.common.pgloc.from = window.location.href;
        a.common.pgloc.to = window.location.origin + fromUrl;
        a.clickData = {};
        a.clickData.pageName = p;
        a.clickData.propertyName = "";
        a.clickData.type = "banner";
        a.clickData.bannerId = b;
        cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(a));
      },
      apiTracker: function (t, o, r, n, i) {
        var a = {
          apiTracker: {
            rescode: t,
            resmsg: o,
            reqjson: r,
            resjson: n,
            reqname: i,
          },
        };
        cdp.callToApi(a, e.CONSTANT.TRACKINGAPI);
      },
      pagination: function t(o, r) {
        var t = { product: { totProduct: o, shown: r } },
          n = cdp.getPlpProduct();
        (t.productList = n),
          cdp.click(),
          cdp.callToApi(t, e.CONSTANT.PRODUCTLIST);
      },
      search: function o(t, r, n, i) {
        var o = { search: { from: t, value: r, pos: n, inputvalue: i } };
        cdp.setCookie("widget", e.CONSTANT.SEARCH);
        var a = JSON.stringify(o.search);
        cdp.setCookie("pageload", a, 0.00138889);
      },
      addonload: function (t, o, r) {
        var n = { addOn: { from: t, productFor: o, product: {} } };
        if (void 0 != r) {
          var i = [];
          r.forEach(function (e) {
            e.configItemIndex++;
            var t = e.configItemIndex / 2,
              o =
                t.toFixed() + "*" + cdp.getgrid(t.toFixed(), e.configItemIndex),
              r = {};
            (r.id = e.productId),
              (r.price = e.price),
              (r.pos = e.configItemIndex),
              (r.label = e.productName),
              (r.grid = o),
              (r.freeflow = ""),
              i.push(r);
          }),
            (n.addOn.product = i),
            cdp.setCookie("widget", t),
            cdp.callToApi(n, e.CONSTANT.ADDON);
        } else {
          var a = document.querySelectorAll("[data-addon]");
          a = Array.prototype.slice.call(a);
          var i = [];
          a.forEach(function (e) {
            var t = {},
              o = e.dataset.addon.split("~");
            (t.id = o[0]),
              (t.price = o[1]),
              (t.pos = o[2]),
              (t.label = o[3]),
              (t.grid = o[4]),
              (t.freeflow = o[5]),
              i.push(t);
          }),
            (n.addOn.product = i),
            cdp.setCookie("widget", t),
            cdp.callToApi(n, e.CONSTANT.ADDON);
        }
      },
      getgrid: function (e, t) {
        var o = 2 * e - t;
        return 1 == o ? o : 0 == o ? 2 : void 0;
      },
      addon: function (t) {
        cdp.callToApi(t, e.CONSTANT.ADDONADD);
      },
      digital_product: function (e, t, o, r, n) {
        var i = {
          digital: {
            images: e || "",
            noi: t || "",
            msg: o || "",
            model: r || "",
            type: n || "",
          },
        };
        cdp.variantChange({}, i);
      },
      variantChange: function (t, o, en, ppn, pn) {
        var r = {
            productDetail: { Id: "", price: "", currency: "", freeflow: "", pageName: window.fnpPageType === "product" && "PDP", propertyname:"" },
          },
          n = document.getElementsByClassName("cdp"),
          s = document.getElementById("prodSwitchContainer"),
          v = document.getElementById("pdpVariants")?.children;
        if (((n = Array.prototype.slice.call(n)), n.length)) {
          var i = document.querySelectorAll("[data-pdp]");
          (i = Array.prototype.slice.call(i)),
            i.length &&
              i.forEach(function (n) {
                var i = n.dataset.pdp.split("~");
                (r.productDetail.Id = i[0]),
                  (r.productDetail.price = i[1]),
                  (r.productDetail.currency = cdp.getCookie("localCurrency")),
                  (r.productDetail.freeflow = i[3] || ""),
                  (r.productDetail.pageName = window.fnpPageType === "product" && "PDP"),
                  (r.productDetail.propertyname = ppn || (s ? "VariantHandCour" : v?.length > 0 ? "Variantbox" : "")),
                  t &&
                    (en
                      ? cdp.setCookie("widget", "delivery option")
                      : cdp.setCookie("widget", "varient change")),
                  o
                    ? (Object.assign(r, o),
                      cdp.callToApi(r, e.CONSTANT.PRODUCTDETAIL))
                    : cdp.callToApi(r, e.CONSTANT.PRODUCTDETAIL);
              });
        }
        cdp.getImagehover();
      },
      delivery: function (t, o, r, n, i) {
        var a = {
          delDate: {
            date: t || "",
            days: o || "",
            shiptype: r || "",
            shippri: n || "",
            time: i || "",
          },
        };
        cdp.setCookie("widget", "delivery date"),
          cdp.callToApi(a, e.CONSTANT.DELIVERYDATE);
      },
      description: function () {
        var t = { description: !0 };
        cdp.setCookie("widget", "description"),
          cdp.callToApi(t, e.CONSTANT.DESCRIREAD);
      },
      removePro: function (t, o) {
        var r = { cartid: t || "", proids: o || Array };
        cdp.setCookie("widget", "remove from cart"),
          cdp.callToApi(r, e.CONSTANT.REMOVECART);
      },
      addCart: function r(t, o, n, i) {
        var r = {
            productDetail: {
              product: {},
              shipDetails: {
                message: t || "",
                date: o || "",
                shipping: n || "",
                time: i || "",
              },
            },
          },
          a = cdp.getproduct();
        (r.productDetail.product = a),
          cdp.setCookie("widget", "addtocart"),
          cdp.callToApi(r, e.CONSTANT.ADDCARTBUY);
      },
      getproduct: function () {
        var e = { Id: "", price: "", currency: "", freeflow: "", pageName: window.fnpPageType === "product" && "PDP", propertyname:"" },
          t = document.getElementsByClassName("cdp"),
          s = document.getElementById("prodSwitchContainer"),
          v = document.getElementById("pdpVariants")?.children;
        if (((t = Array.prototype.slice.call(t)), t.length)) {
          var o = document.querySelectorAll("[data-pdp]");
          if (((o = Array.prototype.slice.call(o)), o.length))
            return (
              o.forEach(function (t) {
                var o = t.dataset.pdp.split("~");
                (e.Id = o[0]),
                  (e.price = o[1]),
                  (e.currency = cdp.getCookie("localCurrency")),
                  (e.freeflow = o[3] || ""),
                  (e.pageName = window.fnpPageType === "product" && "PDP"),
                  (e.propertyname = s ? "VariantHandCour" : v?.length > 0 ? "Variantbox" : "");
              }),
              e
            );
        }
      },
      login: function n(t, o, r) {
        var n = { login: { from: t || "", id: o || "", resjson: {} } };
        (n.resjson = r), cdp.callToApi(n, e.CONSTANT.LOGIN);
      },
      searchList: function (t, o) {
        var r = { searchList: { searchValue: t || "", searchjson: o || "" } };
        cdp.callToApi(r, e.CONSTANT.SEARCHLIST);
      },
      cartDetail: function (t) {
        var o = { cartValue: t || "" };
        cdp.setCookie("widget", "cart detail"),
          cdp.callToApi(o, e.CONSTANT.CARTVALUE);
      },
      setClickId: function (t) {
        "true" !== t && cdp.setCookie("widget", e.CONSTANT.CHECKOUT);
        var o = cdp.getAddonInteraction();
        o &&
          (cdp.deleteCookie("addon"),
          cdp.callToApi(o, e.CONSTANT.ADDONINTERACTION));
      },
      cartClickId: function () {
        cdp.setCookie("widget", e.CONSTANT.CART);
      },
      getAddonInteraction: function (t, o, r) {
        var n = !0,
          i = { proId: String, addOnId: String, added: 0, removed: 0 };
        if (t && o)
          if (e.addOnArr.length) {
            if (
              (e.addOnArr.forEach(function (i) {
                if (i.proId == t && i.addOnId == o)
                  if (((n = !1), 0 === r)) {
                    i.removed = i.removed + 1;
                    var a = JSON.stringify(e.addOnArr);
                    cdp.setCookie("addon", a);
                  } else {
                    i.added = i.added + 1;
                    var c = JSON.stringify(e.addOnArr);
                    cdp.setCookie("addon", c);
                  }
              }),
              n)
            ) {
              (i.proId = t),
                (i.addOnId = o),
                1 === r ? (i.added = r) : (i.removed = r),
                e.addOnArr.push(i);
              var a = JSON.stringify(e.addOnArr);
              cdp.setCookie("addon", a);
            }
          } else {
            (i.proId = t),
              (i.addOnId = o),
              1 === r ? (i.added = r) : (i.removed = r),
              e.addOnArr.push(i);
            var c = JSON.stringify(e.addOnArr);
            cdp.setCookie("addon", c);
          }
        else {
          var d = {},
            s = cdp.getCookie("addon");
          if (s) return (s = JSON.parse(s)), (d.addOnInteraction = s), d;
        }
      },
      lightboxzoom: function (t) {
        var o = t.split("_")[1].split(".")[0],
          r = { imageDetail: { url: t, index: o } };
        cdp.callToApi(r, e.CONSTANT.IMAGESLIDE);
      },
      wishlistbutton: function (t, o) {
        t.add = o;
        var r = { wish: _objectSpread({}, t) };
        cdp.callToApi(r, e.CONSTANT.WISHBUTTON);
      },
      wishlistpage: function (t) {
        var o = { wishlist: _toConsumableArray(t) };
        cdp.callToApi(o, e.CONSTANT.WISHLIST);
      },
      callToApi: function (t, o) {
        var r = cdp.userJsonConstruct();
        o && (r.common.ename = o), Object.assign(r, t);
        var n = r,
          i = !document.getElementById("__next");
        if ("addonadd" === o && i)
          cdp.setEncodedCookie("addonfox", JSON.stringify(n));
        else if ("paynow" === o) {
          if ("Desktop" === n.common.dev.dtype) {
            var a = {
              optlist: n.paynow.optlist,
              selected: {
                from: n.paynow.selected.form,
                name: n.paynow.selected.name,
                pos: n.paynow.selected.pos,
              },
            };
            n.paynow = a;
          }
          cdp.setEncodedCookie("payfox", JSON.stringify(n));
        } else {
          var c = cdp.getCookie(e.CONSTANT.DEVICEID),
            d = cdp.getCookie("cdp-fngId");
          if (c)
            if (d) cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(n));
            else {
              var s = browserFingerprint();
              s.then(function (t) {
                (n.common.fngId = cdp.getCookie("cdp-fngId")),
                  cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(n));
              });
            }
          else {
            if ("productlist" === o || "productdetail" === o)
              return (
                localStorage.setItem("loading-data", JSON.stringify(n)), !1
              );
            var p = browserFingerprint();
            p.then(function (t) {
              (n.common.dev.dId = cdp.getCookie(e.CONSTANT.DEVICEID)),
                (n.common.fngId = cdp.getCookie("cdp-fngId")),
                cdp.dataPostRequest(e.baseUrl + "event", JSON.stringify(n));
            });
          }
        }
      },
    });
}
window.addEventListener("online", function () {
  navigator.serviceWorker ||
    window.SyncManager ||
    cdp.fetchData().then(function (e) {
      if (e.length > 0) return cdp.sendData();
    });
});

getCookie("cdp-fngId") ||
  loadjsfile("https://cdpjs.fnp.com/cdp_js/cdp-fingerprint.js", "js");

var device = navigator.userAgent || navigator.vendor;
var deviceType =
  (device.match(/iPhone/i) || device.match(/Android/i)) && screen.width < 768
    ? "Mobile"
    : device.match(/ipad/i) && screen.width >= 768 && screen.width <= 1024
    ? "Tablet"
    : "Desktop";

deviceType === "Desktop"
  ? loadjsfile("https://cdpjs.fnp.com/cdp_js/cdp-menu-desktop.js", "js")
  : loadjsfile("https://cdpjs.fnp.com/cdp_js/cdp-menu-mobile.js", "js");

window.cdp = new cdp_cdp().cdp;