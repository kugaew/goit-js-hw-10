!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(y(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=y(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var a=u.test(n);return a||f.test(n)?c(n.slice(2),a?2:8):i.test(n)?NaN:+n}n=function(t,n,e){var o,r,i,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=o,i=r;return o=r=void 0,a=n,u=t.apply(i,e)}function g(t){return a=t,f=setTimeout(w,n),l?h(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-a>=i}function w(){var t=b();if(j(t))return O(t);f=setTimeout(w,function(t){var e=n-(t-c);return s?p(e,i-(t-a)):e}(t))}function O(t){return f=void 0,d&&o?h(t):(o=r=void 0,u)}function T(){var t=b(),e=j(t);if(o=arguments,r=this,c=t,e){if(void 0===f)return g(c);if(s)return f=setTimeout(w,n),h(c)}return void 0===f&&(f=setTimeout(w,n)),u}return n=m(n)||0,y(e)&&(l=!!e.leading,i=(s="maxWait"in e)?v(m(e.maxWait)||0,n):i,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},T.flush=function(){return void 0===f?u:O(b())},T};var h=["name","capital","population","flags","languages"];({inputEl:document.querySelector("#search-box")}).inputEl.addEventListener("input",t(n)((function(t){if(!t.target.value.trim())return;(n=t.target.value.trim(),fetch("".concat("https://restcountries.com/v2/").concat("name","/").concat(n,"/?fields=").concat(h.join(","))).then((function(t){if(!t.ok)throw new Error("Oops, there is no country with that name");return t.json()})).catch((function(t){return console.log(t)}))).then((function(t){return console.log(t.length)}));var n}),300))}();
//# sourceMappingURL=index.c731a242.js.map
