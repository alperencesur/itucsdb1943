(function(){var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:aa(a)};for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var p=this||self;function q(a,b){a=a.split(".");var c=p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}var ca=/^[\w+/_-]+[=]{0,2}$/,r=null;function da(){}function ea(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var fa="closure_uid_"+(1E9*Math.random()>>>0),ha=0,ia=Date.now||function(){return+new Date};var ja=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},ka=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function la(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function u(a,b){this.b=a===ma&&b||"";this.a=na}var na={},ma={};var w;a:{var oa=p.navigator;if(oa){var pa=oa.userAgent;if(pa){w=pa;break a}}w=""};function x(a){x[" "](a);return a}x[" "]=da;var y=document,A=window;function B(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function C(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)};function D(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{x(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function qa(a,b){if(!ra()){var c=Math.random();if(c<b)return c=sa(),a[Math.floor(c*a.length)]}return null}function sa(){if(!p.crypto)return Math.random();try{var a=new Uint32Array(1);p.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function ta(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var ra=la(function(){return ka(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],ua)||1E-4>Math.random()});function ua(a){return-1!=w.indexOf(a)}function va(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0<=b?(c=a[b],Array.prototype.splice.call(a,b,1),c):null};function E(a,b){p.google_image_requests||(p.google_image_requests=[]);var c=p.document.createElement("img");if(b){var d=function(e){b&&b(e);C(c,"load",d);C(c,"error",d)};B(c,"load",d);B(c,"error",d)}c.src=a;p.google_image_requests.push(c)};var wa=/^true$/.test("false"),xa=/^true$/.test("true")||!wa;function ya(){var a=F();"google_onload_fired"in a||(a.google_onload_fired=!1,B(a,"load",function(){a.google_onload_fired=!0}))}var za=!!window.google_async_iframe_id,G=za&&window.parent||window;function F(){if(za&&!D(G)){var a="."+y.domain;try{for(;2<a.split(".").length&&!D(G);)y.domain=a=a.substr(a.indexOf(".")+1),G=window.parent}catch(b){}D(G)||(G=window)}return G};var Aa=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Ba(a,b){this.a=a;this.b=b}function Ca(a,b){this.url=a;this.i=!!b;this.depth=null};function I(){this.c="&";this.f=!1;this.b={};this.g=0;this.a=[]}function Da(a,b){var c={};c[a]=b;return[c]}function Ea(a,b,c,d,e){var g=[];ta(a,function(f,h){(f=Fa(f,b,c,d,e))&&g.push(h+"="+f)});return g.join(b)}function Fa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var g=[],f=0;f<a.length;f++)g.push(Fa(a[f],b,c,d+1,e));return g.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ea(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function J(a,b,c,d){a.a.push(b);a.b[b]=Da(c,d)}function Ga(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Ha(a)-c.length;if(0>d)return"";a.a.sort(function(n,t){return n-t});c=null;for(var e="",g=0;g<a.a.length;g++)for(var f=a.a[g],h=a.b[f],l=0;l<h.length;l++){if(!d){c=null==c?f:c;break}var m=Ea(h[l],a.c,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.c;break}a.f&&(e=d,m[e-1]==a.c&&--e,b+=m.substr(0,e),e=a.c,d=0);c=null==c?f:c}}a="";null!=c&&(a=e+"trn="+c);return b+a}function Ha(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1};function Ia(){var a=Ja,b=Ka;if(!(window&&Math.random&&navigator))return-1;if(window.__google_ad_urls){var c=window.__google_ad_urls;try{if(c&&c.getOseId())return c.getOseId()}catch(e){}}if(!window.__google_ad_urls_id){c=window.google_enable_ose;if(!0===c)var d=2;else!1!==c&&(d=qa([0],a),null==d&&((d=qa([2],b))||(d=3)));if(!d)return 0;window.__google_ad_urls_id=d}return window.__google_ad_urls_id};function La(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var K=null;function L(){var a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ia()}function Ma(){var a=void 0===a?p:a;return(a=a.performance)&&a.now?a.now():null};function Na(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var M=p.performance,Oa=!!(M&&M.mark&&M.measure&&M.clearMarks),N=la(function(){var a;if(a=Oa){var b;if(null===K){K="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(K=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=K;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function O(a){this.b=[];this.c=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.b=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.a=N()||(null!=b?b:1>Math.random())}function P(a){a.a=!1;a.b!=a.c.google_js_reporting_queue&&(N()&&ja(a.b,Pa),a.b.length=0)}function Pa(a){a&&M&&N()&&(M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}O.prototype.start=function(a,b){if(!this.a)return null;var c=Ma()||L();a=new Na(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";M&&N()&&M.mark(b);return a};function Qa(){var a=void 0===a?A:a;this.b="http:"===a.location.protocol?"http:":"https:";this.a=Math.random()}function Ra(){var a=Q,b=R.google_srt;0<=b&&1>=b&&(a.a=b)}function S(a,b,c,d,e,g){if((d?a.a:Math.random())<(e||.01))try{if(c instanceof I)var f=c;else f=new I,ta(c,function(l,m){var n=f,t=n.g++;l=Da(m,l);n.a.push(t);n.b[t]=l});var h=Ga(f,a.b,"/pagead/gen_204?id="+b+"&");h&&("undefined"===typeof g?E(h,null):E(h,void 0===g?null:g))}catch(l){}};function Sa(){var a=T;this.g=Q;this.b=null;this.h=this.f;this.a=void 0===a?null:a;this.c=!1}Sa.prototype.f=function(a,b,c,d,e){e=e||"jserror";try{var g=new I;g.f=!0;J(g,1,"context",a);b.error&&b.meta&&b.id||(b=new La(b,{message:U(b)}));b.msg&&J(g,2,"msg",b.msg.substring(0,512));var f=b.meta||{};if(this.b)try{this.b(f)}catch(H){}if(d)try{d(f)}catch(H){}b=[f];g.a.push(3);g.b[3]=b;d=p;b=[];f=null;do{var h=d;if(D(h)){var l=h.location.href;f=h.document&&h.document.referrer||null}else l=f,f=null;b.push(new Ca(l||""));try{d=h.parent}catch(H){d=null}}while(d&&h!=d);l=0;for(var m=b.length-1;l<=m;++l)b[l].depth=m-l;h=p;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var n=b[m];n.url||(n.url=h.location.ancestorOrigins[m-1]||"",n.i=!0)}var t=new Ca(p.location.href,!1);h=null;var Y=b.length-1;for(n=Y;0<=n;--n){var v=b[n];!h&&Aa.test(v.url)&&(h=v);if(v.url&&!v.i){t=v;break}}v=null;var Ya=b.length&&b[Y].url;0!=t.depth&&Ya&&(v=b[Y]);var z=new Ba(t,v);z.b&&J(g,4,"top",z.b.url||"");J(g,5,"url",z.a.url||"");S(this.g,e,g,this.c,c)}catch(H){try{S(this.g,e,{context:"ecmserr",rctx:a,msg:U(H),url:z&&z.a.url},this.c,c)}catch(cb){}}return!0};function U(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var Ta=new O(F());function Ua(){var a=F();a&&"undefined"!=typeof a.google_measure_js_timing&&(a.google_measure_js_timing||P(Ta))}(function(){var a=F();a&&a.document&&("complete"==a.document.readyState?Ua():Ta.a&&B(a,"load",function(){Ua()}))})();ia();function Va(a,b,c){a&&(c?B(a,"load",b):C(a,"load",b))}function Wa(){var a=(F()||p).google_osd_amcb;return"function"==ea(a)?a:null}function Xa(a){return((void 0===a?0:a)?"http:":"https:")+"//www.googletagservices.com/activeview/js/current/osd.js?cb="+encodeURIComponent("/r20110914")};function V(a,b){this.b=b&&b.b?b.b:0;this.c=b?b.c:"";this.a=b&&b.a?b.a:[];this.f=!0;if(b)for(a=0;a<this.a.length;++a)this.a[a].f=!0}function Za(a){a=a.f?F():p;var b=W;a=a||p;if(a.google_osd_loaded)a=!1;else{var c=a.document,d=c.createElement("script");b=new u(ma,b);d.src=b instanceof u&&b.constructor===u&&b.a===na?b.b:"type_error:TrustedResourceUrl";if(null===r)b:{b=p.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ca.test(b)){r=b;break b}r=""}(b=r)&&d.setAttribute("nonce",b);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c);a=a.google_osd_loaded=!0}a&&ya()}k=V.prototype;k.getNewBlocks=function(a,b){for(var c=this.a.length,d=0;d<c;d++){var e=this.a[d];!e.c&&e.a&&(e.c=!0,a(e.a,e.h,e.o,e.b,void 0,e.f,e.j,e.m,e.l))}b&&((F()||p).google_osd_amcb=a)};k.setupOse=function(a){if(this.getOseId())return this.getOseId();var b=Ia();if(!b)return 0;this.b=b;this.c=String(a||0);return this.getOseId()};k.getOseId=function(){return window&&Math.random&&navigator?this.b:-1};k.getCorrelator=function(){return this.c};k.numBlocks=function(){return this.a.length};k.registerAdBlock=function(a,b,c,d,e,g,f){f=void 0===f?function(){return null}:f;c=Wa();e=L()||-1;g=p.pageYOffset;0<=g||(g=-1);c&&d?c(d,a,b,!1,void 0,!1,f,e,g):(f=new $a(a,b,d,f,e,g),this.a.push(f),Va(d,f.g,!0),W||(E("//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs="+b+("&req="+a),null),W=Xa(!xa)),Za(this))};k.unloadAdBlock=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;var d=this.f?F():window;void 0!==d.Goog_Osd_UnloadAdBlock&&d.Goog_Osd_UnloadAdBlock(a,b);c&&(b=va(this.a,function(e){return e.a==a}))&&Va(a,b.g,!1)};k.setLoadOsdJsOnPubWindow=function(a){this.f=a};function ab(){var a=F(),b=a.__google_ad_urls;if(!b)return a.__google_ad_urls=new V(a);try{if(0<=b.getOseId())return b}catch(c){}try{return a.__google_ad_urls=new V(a,b)}catch(c){return a.__google_ad_urls=new V(a)}}var W="",Ka=0,Ja=0;function $a(a,b,c,d,e,g){var f=this;d=void 0===d?da:d;this.h=a;this.o=b;this.a=c;this.f=this.c=this.b=!1;this.j=d;this.m=void 0===e?-1:e;this.l=void 0===g?-1:g;this.g=function(){return f.b=!0}}q("Goog_AdSense_getAdAdapterInstance",ab);q("Goog_AdSense_OsdAdapter",V);var Q,X,Z,R=F(),T=new O(R);(function(){Q=new Qa;"number"!==typeof R.google_srt&&(R.google_srt=Math.random());Ra();X=new Sa;X.b=function(b){var c=A.jerExpIds;if("array"==ea(c)&&0!==c.length){var d=b.eid;if(d){c=ba(d.split(",")).concat(ba(c));d={};for(var e=0,g=0;g<c.length;){var f=c[g++];var h=f;var l=typeof h;h="object"==l&&null!=h||"function"==l?"o"+(h[fa]||(h[fa]=++ha)):(typeof h).charAt(0)+h;Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,c[e++]=f)}c.length=e;b.eid=c.join(",")}else b.eid=c.join(",")}Z&&(b.jc=Z);(c=A.jerUserAgent)&&(b.useragent=c)};X.c=!0;"complete"==R.document.readyState?R.google_measure_js_timing||P(T):T.a&&B(R,"load",function(){R.google_measure_js_timing||P(T)});var a=y.currentScript;Z=a?a.dataset.jc:""})();function bb(a){var b=X;try{if(b.a&&b.a.a){var c=b.a.start((464).toString(),3);a();var d=b.a;a=c;if(d.a&&"number"===typeof a.value){var e=Ma()||L();a.duration=e-a.value;var g="goog_"+a.label+"_"+a.uniqueId+"_end";M&&N()&&M.mark(g);!d.a||2048<d.b.length||d.b.push(a)}}else a()}catch(f){d=!0;try{Pa(c),d=b.h(464,new La(f,{message:U(f)}),void 0,void 0)}catch(h){b.f(217,h)}if(!d)throw f;}};q("r3px",function(a,b){bb(function(){var c=document.getElementById("google_decrypt_frame_"+a);if(c){window.google_enable_ose=!0;W=Xa(!1);Ja=Ka=0;var d=ab();d.setupOse(+new Date);d.getOseId()&&d.registerAdBlock(b||c.src,9,"",c)}else S(Q,"3px",{"no-frame":"1"},!0,void 0,void 0)})});}).call(this);
