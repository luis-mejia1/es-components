/*! For license information please see bundle.ebf1f2c8.js.LICENSE.txt */
(self.webpackChunkes_components=self.webpackChunkes_components||[]).push([[459],{58875:function(e,r,t){var n;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(n=function(){return o}.call(r,t,r,e))||(e.exports=n)}()},89028:function(e){var r="long",t="short",n="narrow",a="numeric",o="2-digit";e.exports={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:a,day:a,year:o},medium:{month:t,day:a,year:a},long:{month:r,day:a,year:a},full:{month:r,day:a,year:a,weekday:r},default:{month:t,day:a,year:a}},time:{short:{hour:a,minute:a},medium:{hour:a,minute:a,second:a},long:{hour:a,minute:a,second:a,timeZoneName:t},full:{hour:a,minute:a,second:a,timeZoneName:t},default:{hour:a,minute:a,second:a}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(e){if(e){var r={},t=e.match(/\b[A-Z]{3}\b/i),n=e.replace(/[^¤]/g,"").length;if(!n&&t&&(n=1),n?(r.style="currency",r.currencyDisplay=1===n?"symbol":2===n?"code":"name",r.currency=t?t[0].toUpperCase():"USD"):e.indexOf("%")>=0&&(r.style="percent"),!/[@#0]/.test(e))return r.style?r:void 0;if(r.useGrouping=e.indexOf(",")>=0,/E\+?[@#0]+/i.test(e)||e.indexOf("@")>=0){var a=e.replace(/E\+?[@#0]+|[^@#0]/gi,"");r.minimumSignificantDigits=Math.min(Math.max(a.replace(/[^@0]/g,"").length,1),21),r.maximumSignificantDigits=Math.min(Math.max(a.length,1),21)}else{for(var o=e.replace(/[^#0.]/g,"").split("."),i=o[0],c=i.length-1;"0"===i[c];)--c;r.minimumIntegerDigits=Math.min(Math.max(i.length-1-c,1),21);var s=o[1]||"";for(c=0;"0"===s[c];)++c;for(r.minimumFractionDigits=Math.min(Math.max(c,0),20);"#"===s[c];)++c;r.maximumFractionDigits=Math.min(Math.max(c,0),20)}return r}},parseDatePattern:function(e){if(e){for(var i={},c=0;c<e.length;){for(var s=e[c],l=1;e[++c]===s;)++l;switch(s){case"G":i.era=5===l?n:4===l?r:t;break;case"y":case"Y":i.year=2===l?o:a;break;case"M":case"L":l=Math.min(Math.max(l-1,0),4),i.month=[a,o,t,r,n][l];break;case"E":case"e":case"c":i.weekday=5===l?n:4===l?r:t;break;case"d":case"D":i.day=2===l?o:a;break;case"h":case"K":i.hour12=!0,i.hour=2===l?o:a;break;case"H":case"k":i.hour12=!1,i.hour=2===l?o:a;break;case"m":i.minute=2===l?o:a;break;case"s":case"S":i.second=2===l?o:a;break;case"z":case"Z":case"v":case"V":i.timeZoneName=1===l?t:r}}return Object.keys(i).length?i:void 0}}}},27146:function(e,r,t){"use strict";var n=t(89028),a=t(3962),o=t(26567);function interpretAST(e,r,t,n,a){var o=e.map((function(e){return interpretElement(e,r,t,n,a)}));return a?1===o.length?o[0]:function format(e){for(var r="",t=0;t<o.length;++t)r+=o[t](e);return r}:function format(e){return o.reduce((function(r,t){return r.concat(t(e))}),[])}}function interpretElement(e,r,t,n,a){if("string"==typeof e){var o=e;return function format(){return o}}var c,s=e[0],l=e[1];if(r&&"#"===e[0]){s=r[0];var u=r[2],p=(n.number||i.number)([s,"number"],t);return function format(e){return p(getArg(s,e)-u,e)}}"plural"===l||"selectordinal"===l?(c={},Object.keys(e[3]).forEach((function(r){c[r]=interpretAST(e[3][r],e,t,n,a)})),e=[e[0],e[1],e[2],c]):e[2]&&"object"==typeof e[2]&&(c={},Object.keys(e[2]).forEach((function(r){c[r]=interpretAST(e[2][r],e,t,n,a)})),e=[e[0],e[1],c]);var d=l&&(n[l]||i[l]);if(d){var y=d(e,t);return function format(e){return y(getArg(s,e),e)}}return a?function format(e){return String(getArg(s,e))}:function format(e){return getArg(s,e)}}function getArg(e,r){if(r&&e in r)return r[e];for(var t=e.split("."),n=r,a=0,o=t.length;n&&a<o;++a)n=n[t[a]];return n}function interpretNumber(e,r){var t=e[2],a=n.number[t]||n.parseNumberPattern(t)||n.number.default;return new Intl.NumberFormat(r,a).format}function interpretDateTime(e,r){var t=e[1],a=e[2],o=n[t][a]||n.parseDatePattern(a)||n[t].default;return new Intl.DateTimeFormat(r,o).format}function interpretPlural(e,r){var t,n="selectordinal"===e[1]?"ordinal":"cardinal",i=e[2],c=e[3];if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(r).length>0)t=new Intl.PluralRules(r,{type:n});else{var s=a(r,o),l=s&&o[s][n]||returnOther;t={select:l}}return function(e,r){return(c["="+ +e]||c[t.select(e-i)]||c.other)(r)}}function returnOther(){return"other"}(r=e.exports=function interpret(e,r,t){return interpretAST(e,null,r||"en",t||{},!0)}).toParts=function toParts(e,r,t){return interpretAST(e,null,r||"en",t||{},!1)};var i={number:interpretNumber,ordinal:interpretNumber,spellout:interpretNumber,duration:function interpretDuration(e,r){var t=e[2],a=n.duration[t]||n.duration.default,o=new Intl.NumberFormat(r,a.seconds).format,i=new Intl.NumberFormat(r,a.minutes).format,c=new Intl.NumberFormat(r,a.hours).format,s=/^fi$|^fi-|^da/.test(String(r))?".":":";return function(e,r){if(e=+e,!isFinite(e))return o(e);var t=~~(e/60/60),n=~~(e/60%60),a=(t?c(Math.abs(t))+s:"")+i(Math.abs(n))+s+o(Math.abs(e%60));return e<0?c(-1).replace(c(1),a):a}},date:interpretDateTime,time:interpretDateTime,plural:interpretPlural,selectordinal:interpretPlural,select:function interpretSelect(e,r){var t=e[2];return function(e,r){return(t[e]||t.other)(r)}}};r.types=i},26567:function(e){"use strict";var r="zero",t="one",n="two",a="few",o="many",i="other",c=[function(e){return 1===+e?t:i},function(e){var r=+e;return 0<=r&&r<=1?t:i},function(e){return 0===Math.floor(Math.abs(+e))||1===+e?t:i},function(e){var c=+e;return 0===c?r:1===c?t:2===c?n:3<=c%100&&c%100<=10?a:11<=c%100&&c%100<=99?o:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length;return 1===r&&0===n?t:i},function(e){var r=+e;return r%10==1&&r%100!=11?t:2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?a:r%10==0||5<=r%10&&r%10<=9||11<=r%100&&r%100<=14?o:i},function(e){var r=+e;return r%10==1&&r%100!=11&&r%100!=71&&r%100!=91?t:r%10==2&&r%100!=12&&r%100!=72&&r%100!=92?n:(3<=r%10&&r%10<=4||r%10==9)&&(r%100<10||19<r%100)&&(r%100<70||79<r%100)&&(r%100<90||99<r%100)?a:0!==r&&r%1e6==0?o:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length,o=+(e+".").split(".")[1];return 0===n&&r%10==1&&r%100!=11||o%10==1&&o%100!=11?t:0===n&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)||2<=o%10&&o%10<=4&&(o%100<12||14<o%100)?a:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length;return 1===r&&0===n?t:2<=r&&r<=4&&0===n?a:0!==n?o:i},function(e){var c=+e;return 0===c?r:1===c?t:2===c?n:3===c?a:6===c?o:i},function(e){var r=Math.floor(Math.abs(+e)),n=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 1===+e||0!==n&&(0===r||1===r)?t:i},function(e){var r=Math.floor(Math.abs(+e)),o=(e+".").split(".")[1].length,c=+(e+".").split(".")[1];return 0===o&&r%100==1||c%100==1?t:0===o&&r%100==2||c%100==2?n:0===o&&3<=r%100&&r%100<=4||3<=c%100&&c%100<=4?a:i},function(e){var r=Math.floor(Math.abs(+e));return 0===r||1===r?t:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length,a=+(e+".").split(".")[1];return 0===n&&(1===r||2===r||3===r)||0===n&&r%10!=4&&r%10!=6&&r%10!=9||0!==n&&a%10!=4&&a%10!=6&&a%10!=9?t:i},function(e){var r=+e;return 1===r?t:2===r?n:3<=r&&r<=6?a:7<=r&&r<=10?o:i},function(e){var r=+e;return 1===r||11===r?t:2===r||12===r?n:3<=r&&r<=10||13<=r&&r<=19?a:i},function(e){var r=Math.floor(Math.abs(+e)),c=(e+".").split(".")[1].length;return 0===c&&r%10==1?t:0===c&&r%10==2?n:0!==c||r%100!=0&&r%100!=20&&r%100!=40&&r%100!=60&&r%100!=80?0!==c?o:i:a},function(e){var r=Math.floor(Math.abs(+e)),a=(e+".").split(".")[1].length,c=+e;return 1===r&&0===a?t:2===r&&0===a?n:0===a&&(c<0||10<c)&&c%10==0?o:i},function(e){var r=Math.floor(Math.abs(+e)),n=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 0===n&&r%10==1&&r%100!=11||0!==n?t:i},function(e){var r=+e;return 1===r?t:2===r?n:i},function(e){var n=+e;return 0===n?r:1===n?t:i},function(e){var n=Math.floor(Math.abs(+e)),a=+e;return 0===a?r:0!==n&&1!==n||0===a?i:t},function(e){var r=+(e+".").split(".")[1],n=+e;return n%10==1&&(n%100<11||19<n%100)?t:2<=n%10&&n%10<=9&&(n%100<11||19<n%100)?a:0!==r?o:i},function(e){var n=(e+".").split(".")[1].length,a=+(e+".").split(".")[1],o=+e;return o%10==0||11<=o%100&&o%100<=19||2===n&&11<=a%100&&a%100<=19?r:o%10==1&&o%100!=11||2===n&&a%10==1&&a%100!=11||2!==n&&a%10==1?t:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length,a=+(e+".").split(".")[1];return 0===n&&r%10==1&&r%100!=11||a%10==1&&a%100!=11?t:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length,o=+e;return 1===r&&0===n?t:0!==n||0===o||1!==o&&1<=o%100&&o%100<=19?a:i},function(e){var r=+e;return 1===r?t:0===r||2<=r%100&&r%100<=10?a:11<=r%100&&r%100<=19?o:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length;return 1===r&&0===n?t:0===n&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?a:0===n&&1!==r&&0<=r%10&&r%10<=1||0===n&&5<=r%10&&r%10<=9||0===n&&12<=r%100&&r%100<=14?o:i},function(e){var r=Math.floor(Math.abs(+e));return 0<=r&&r<=1?t:i},function(e){var r=Math.floor(Math.abs(+e)),n=(e+".").split(".")[1].length;return 0===n&&r%10==1&&r%100!=11?t:0===n&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?a:0===n&&r%10==0||0===n&&5<=r%10&&r%10<=9||0===n&&11<=r%100&&r%100<=14?o:i},function(e){var r=+e;return 0===Math.floor(Math.abs(+e))||1===r?t:2<=r&&r<=10?a:i},function(e){var r=Math.floor(Math.abs(+e)),n=+(e+".").split(".")[1],a=+e;return 0===a||1===a||0===r&&1===n?t:i},function(e){var r=Math.floor(Math.abs(+e)),o=(e+".").split(".")[1].length;return 0===o&&r%100==1?t:0===o&&r%100==2?n:0===o&&3<=r%100&&r%100<=4||0!==o?a:i},function(e){var r=+e;return 0<=r&&r<=1||11<=r&&r<=99?t:i},function(e){var r=+e;return 1===r||5===r||7===r||8===r||9===r||10===r?t:2===r||3===r?n:4===r?a:6===r?o:i},function(e){var r=Math.floor(Math.abs(+e));return r%10==1||r%10==2||r%10==5||r%10==7||r%10==8||r%100==20||r%100==50||r%100==70||r%100==80?t:r%10==3||r%10==4||r%1e3==100||r%1e3==200||r%1e3==300||r%1e3==400||r%1e3==500||r%1e3==600||r%1e3==700||r%1e3==800||r%1e3==900?a:0===r||r%10==6||r%100==40||r%100==60||r%100==90?o:i},function(e){var r=+e;return r%10!=2&&r%10!=3||r%100==12||r%100==13?i:a},function(e){var r=+e;return 1===r||3===r?t:2===r?n:4===r?a:i},function(e){var c=+e;return 0===c||7===c||8===c||9===c?r:1===c?t:2===c?n:3===c||4===c?a:5===c||6===c?o:i},function(e){var r=+e;return r%10==1&&r%100!=11?t:r%10==2&&r%100!=12?n:r%10==3&&r%100!=13?a:i},function(e){var r=+e;return 1===r||11===r?t:2===r||12===r?n:3===r||13===r?a:i},function(e){var r=+e;return 1===r?t:2===r||3===r?n:4===r?a:6===r?o:i},function(e){var r=+e;return 1===r||5===r?t:i},function(e){var r=+e;return 11===r||8===r||80===r||800===r?o:i},function(e){var r=Math.floor(Math.abs(+e));return 1===r?t:0===r||2<=r%100&&r%100<=20||r%100==40||r%100==60||r%100==80?o:i},function(e){var r=+e;return r%10==6||r%10==9||r%10==0&&0!==r?o:i},function(e){var r=Math.floor(Math.abs(+e));return r%10==1&&r%100!=11?t:r%10==2&&r%100!=12?n:r%10!=7&&r%10!=8||r%100==17||r%100==18?i:o},function(e){var r=+e;return 1===r?t:2===r||3===r?n:4===r?a:i},function(e){var r=+e;return 1<=r&&r<=4?t:i},function(e){var r=+e;return 1===r||5===r||7<=r&&r<=9?t:2===r||3===r?n:4===r?a:6===r?o:i},function(e){var r=+e;return 1===r?t:r%10==4&&r%100!=14?o:i},function(e){var r=+e;return r%10!=1&&r%10!=2||r%100==11||r%100==12?i:t},function(e){var r=+e;return r%10==6||r%10==9||10===r?a:i},function(e){var r=+e;return r%10==3&&r%100!=13?a:i}];e.exports={af:{cardinal:c[0]},ak:{cardinal:c[1]},am:{cardinal:c[2]},ar:{cardinal:c[3]},ars:{cardinal:c[3]},as:{cardinal:c[2],ordinal:c[34]},asa:{cardinal:c[0]},ast:{cardinal:c[4]},az:{cardinal:c[0],ordinal:c[35]},be:{cardinal:c[5],ordinal:c[36]},bem:{cardinal:c[0]},bez:{cardinal:c[0]},bg:{cardinal:c[0]},bh:{cardinal:c[1]},bn:{cardinal:c[2],ordinal:c[34]},br:{cardinal:c[6]},brx:{cardinal:c[0]},bs:{cardinal:c[7]},ca:{cardinal:c[4],ordinal:c[37]},ce:{cardinal:c[0]},cgg:{cardinal:c[0]},chr:{cardinal:c[0]},ckb:{cardinal:c[0]},cs:{cardinal:c[8]},cy:{cardinal:c[9],ordinal:c[38]},da:{cardinal:c[10]},de:{cardinal:c[4]},dsb:{cardinal:c[11]},dv:{cardinal:c[0]},ee:{cardinal:c[0]},el:{cardinal:c[0]},en:{cardinal:c[4],ordinal:c[39]},eo:{cardinal:c[0]},es:{cardinal:c[0]},et:{cardinal:c[4]},eu:{cardinal:c[0]},fa:{cardinal:c[2]},ff:{cardinal:c[12]},fi:{cardinal:c[4]},fil:{cardinal:c[13],ordinal:c[0]},fo:{cardinal:c[0]},fr:{cardinal:c[12],ordinal:c[0]},fur:{cardinal:c[0]},fy:{cardinal:c[4]},ga:{cardinal:c[14],ordinal:c[0]},gd:{cardinal:c[15],ordinal:c[40]},gl:{cardinal:c[4]},gsw:{cardinal:c[0]},gu:{cardinal:c[2],ordinal:c[41]},guw:{cardinal:c[1]},gv:{cardinal:c[16]},ha:{cardinal:c[0]},haw:{cardinal:c[0]},he:{cardinal:c[17]},hi:{cardinal:c[2],ordinal:c[41]},hr:{cardinal:c[7]},hsb:{cardinal:c[11]},hu:{cardinal:c[0],ordinal:c[42]},hy:{cardinal:c[12],ordinal:c[0]},ia:{cardinal:c[4]},io:{cardinal:c[4]},is:{cardinal:c[18]},it:{cardinal:c[4],ordinal:c[43]},iu:{cardinal:c[19]},iw:{cardinal:c[17]},jgo:{cardinal:c[0]},ji:{cardinal:c[4]},jmc:{cardinal:c[0]},ka:{cardinal:c[0],ordinal:c[44]},kab:{cardinal:c[12]},kaj:{cardinal:c[0]},kcg:{cardinal:c[0]},kk:{cardinal:c[0],ordinal:c[45]},kkj:{cardinal:c[0]},kl:{cardinal:c[0]},kn:{cardinal:c[2]},ks:{cardinal:c[0]},ksb:{cardinal:c[0]},ksh:{cardinal:c[20]},ku:{cardinal:c[0]},kw:{cardinal:c[19]},ky:{cardinal:c[0]},lag:{cardinal:c[21]},lb:{cardinal:c[0]},lg:{cardinal:c[0]},ln:{cardinal:c[1]},lt:{cardinal:c[22]},lv:{cardinal:c[23]},mas:{cardinal:c[0]},mg:{cardinal:c[1]},mgo:{cardinal:c[0]},mk:{cardinal:c[24],ordinal:c[46]},ml:{cardinal:c[0]},mn:{cardinal:c[0]},mo:{cardinal:c[25],ordinal:c[0]},mr:{cardinal:c[2],ordinal:c[47]},mt:{cardinal:c[26]},nah:{cardinal:c[0]},naq:{cardinal:c[19]},nb:{cardinal:c[0]},nd:{cardinal:c[0]},ne:{cardinal:c[0],ordinal:c[48]},nl:{cardinal:c[4]},nn:{cardinal:c[0]},nnh:{cardinal:c[0]},no:{cardinal:c[0]},nr:{cardinal:c[0]},nso:{cardinal:c[1]},ny:{cardinal:c[0]},nyn:{cardinal:c[0]},om:{cardinal:c[0]},or:{cardinal:c[0],ordinal:c[49]},os:{cardinal:c[0]},pa:{cardinal:c[1]},pap:{cardinal:c[0]},pl:{cardinal:c[27]},prg:{cardinal:c[23]},ps:{cardinal:c[0]},pt:{cardinal:c[28]},"pt-PT":{cardinal:c[4]},rm:{cardinal:c[0]},ro:{cardinal:c[25],ordinal:c[0]},rof:{cardinal:c[0]},ru:{cardinal:c[29]},rwk:{cardinal:c[0]},saq:{cardinal:c[0]},sc:{cardinal:c[4],ordinal:c[43]},scn:{cardinal:c[4],ordinal:c[43]},sd:{cardinal:c[0]},sdh:{cardinal:c[0]},se:{cardinal:c[19]},seh:{cardinal:c[0]},sh:{cardinal:c[7]},shi:{cardinal:c[30]},si:{cardinal:c[31]},sk:{cardinal:c[8]},sl:{cardinal:c[32]},sma:{cardinal:c[19]},smi:{cardinal:c[19]},smj:{cardinal:c[19]},smn:{cardinal:c[19]},sms:{cardinal:c[19]},sn:{cardinal:c[0]},so:{cardinal:c[0]},sq:{cardinal:c[0],ordinal:c[50]},sr:{cardinal:c[7]},ss:{cardinal:c[0]},ssy:{cardinal:c[0]},st:{cardinal:c[0]},sv:{cardinal:c[4],ordinal:c[51]},sw:{cardinal:c[4]},syr:{cardinal:c[0]},ta:{cardinal:c[0]},te:{cardinal:c[0]},teo:{cardinal:c[0]},ti:{cardinal:c[1]},tig:{cardinal:c[0]},tk:{cardinal:c[0],ordinal:c[52]},tl:{cardinal:c[13],ordinal:c[0]},tn:{cardinal:c[0]},tr:{cardinal:c[0]},ts:{cardinal:c[0]},tzm:{cardinal:c[33]},ug:{cardinal:c[0]},uk:{cardinal:c[29],ordinal:c[53]},ur:{cardinal:c[4]},uz:{cardinal:c[0]},ve:{cardinal:c[0]},vo:{cardinal:c[0]},vun:{cardinal:c[0]},wa:{cardinal:c[1]},wae:{cardinal:c[0]},xh:{cardinal:c[0]},xog:{cardinal:c[0]},yi:{cardinal:c[4]},zu:{cardinal:c[2]},lo:{ordinal:c[0]},ms:{ordinal:c[0]},vi:{ordinal:c[0]}}},62700:function(e,r){"use strict";var t="{",n="}",a=",",o="#",i="<",c=">",s="</",l="/>",u="'",p="offset:",d=["number","date","time","ordinal","duration","spellout"],y=["plural","select","selectordinal"];function parseAST(e,r){var t=e.pattern,a=t.length,o=[],i=e.index,c=parseText(e,r);for(c&&o.push(c),c&&e.tokens&&e.tokens.push(["text",t.slice(i,e.index)]);e.index<a;){if(t[e.index]===n){if(!r)throw expected(e);break}if(r&&e.tagsType&&t.slice(e.index,e.index+s.length)===s)break;o.push(parsePlaceholder(e)),i=e.index,(c=parseText(e,r))&&o.push(c),c&&e.tokens&&e.tokens.push(["text",t.slice(i,e.index)])}return o}function parseText(e,r){for(var a=e.pattern,c=a.length,s="plural"===r||"selectordinal"===r,l=!!e.tagsType,p="{style}"===r,d="";e.index<c;){var y=a[e.index];if(y===t||y===n||s&&y===o||l&&y===i||p&&isWhitespace(y.charCodeAt(0)))break;if(y===u)if((y=a[++e.index])===u)d+=y,++e.index;else if(y===t||y===n||s&&y===o||l&&y===i||p)for(d+=y;++e.index<c;)if((y=a[e.index])===u&&a[e.index+1]===u)d+=u,++e.index;else{if(y===u){++e.index;break}d+=y}else d+=u;else d+=y,++e.index}return d}function isWhitespace(e){return e>=9&&e<=13||32===e||133===e||160===e||6158===e||e>=8192&&e<=8205||8232===e||8233===e||8239===e||8287===e||8288===e||12288===e||65279===e}function skipWhitespace(e){for(var r=e.pattern,t=r.length,n=e.index;e.index<t&&isWhitespace(r.charCodeAt(e.index));)++e.index;n<e.index&&e.tokens&&e.tokens.push(["space",e.pattern.slice(n,e.index)])}function parsePlaceholder(e){var r=e.pattern;if(r[e.index]===o)return e.tokens&&e.tokens.push(["syntax",o]),++e.index,[o];var i=parseTag(e);if(i)return i;if(r[e.index]!==t)throw expected(e,t);e.tokens&&e.tokens.push(["syntax",t]),++e.index,skipWhitespace(e);var c=parseId(e);if(!c)throw expected(e,"placeholder id");e.tokens&&e.tokens.push(["id",c]),skipWhitespace(e);var s=r[e.index];if(s===n)return e.tokens&&e.tokens.push(["syntax",n]),++e.index,[c];if(s!==a)throw expected(e,a+" or "+n);e.tokens&&e.tokens.push(["syntax",a]),++e.index,skipWhitespace(e);var l,u=parseId(e);if(!u)throw expected(e,"placeholder type");if(e.tokens&&e.tokens.push(["type",u]),skipWhitespace(e),(s=r[e.index])===n){if(e.tokens&&e.tokens.push(["syntax",n]),"plural"===u||"selectordinal"===u||"select"===u)throw expected(e,u+" sub-messages");return++e.index,[c,u]}if(s!==a)throw expected(e,a+" or "+n);if(e.tokens&&e.tokens.push(["syntax",a]),++e.index,skipWhitespace(e),"plural"===u||"selectordinal"===u){var p=parsePluralOffset(e);skipWhitespace(e),l=[c,u,p,parseSubMessages(e,u)]}else if("select"===u)l=[c,u,parseSubMessages(e,u)];else if(d.indexOf(u)>=0)l=[c,u,parseSimpleFormat(e)];else{var y=e.index,h=parseSimpleFormat(e);skipWhitespace(e),r[e.index]===t&&(e.index=y,h=parseSubMessages(e,u)),l=[c,u,h]}if(skipWhitespace(e),r[e.index]!==n)throw expected(e,n);return e.tokens&&e.tokens.push(["syntax",n]),++e.index,l}function parseTag(e){var r=e.tagsType;if(r&&e.pattern[e.index]===i){if(e.pattern.slice(e.index,e.index+s.length)===s)throw expected(e,null,"closing tag without matching opening tag");e.tokens&&e.tokens.push(["syntax",i]),++e.index;var t=parseId(e,!0);if(!t)throw expected(e,"placeholder id");if(e.tokens&&e.tokens.push(["id",t]),skipWhitespace(e),e.pattern.slice(e.index,e.index+l.length)===l)return e.tokens&&e.tokens.push(["syntax",l]),e.index+=l.length,[t,r];if(e.pattern[e.index]!==c)throw expected(e,c);e.tokens&&e.tokens.push(["syntax",c]),++e.index;var n=parseAST(e,r),a=e.index;if(e.pattern.slice(e.index,e.index+s.length)!==s)throw expected(e,s+t+c);e.tokens&&e.tokens.push(["syntax",s]),e.index+=s.length;var o=parseId(e,!0);if(o&&e.tokens&&e.tokens.push(["id",o]),t!==o)throw e.index=a,expected(e,s+t+c,s+o+c);if(skipWhitespace(e),e.pattern[e.index]!==c)throw expected(e,c);return e.tokens&&e.tokens.push(["syntax",c]),++e.index,[t,r,{children:n}]}}function parseId(e,r){for(var s=e.pattern,l=s.length,p="";e.index<l;){var d=s[e.index];if(d===t||d===n||d===a||d===o||d===u||isWhitespace(d.charCodeAt(0))||r&&(d===i||d===c||"/"===d))break;p+=d,++e.index}return p}function parseSimpleFormat(e){var r=e.index,t=parseText(e,"{style}");if(!t)throw expected(e,"placeholder style name");return e.tokens&&e.tokens.push(["style",e.pattern.slice(r,e.index)]),t}function parsePluralOffset(e){var r,t=e.pattern,n=t.length,a=0;if(t.slice(e.index,e.index+p.length)===p){e.tokens&&e.tokens.push(["offset","offset"],["syntax",":"]),e.index+=p.length,skipWhitespace(e);for(var o=e.index;e.index<n&&((r=t.charCodeAt(e.index))>=48&&r<=57);)++e.index;if(o===e.index)throw expected(e,"offset number");e.tokens&&e.tokens.push(["number",t.slice(o,e.index)]),a=+t.slice(o,e.index)}return a}function parseSubMessages(e,r){for(var t=e.pattern,a=t.length,o={};e.index<a&&t[e.index]!==n;){var i=parseId(e);if(!i)throw expected(e,"sub-message selector");e.tokens&&e.tokens.push(["selector",i]),skipWhitespace(e),o[i]=parseSubMessage(e,r),skipWhitespace(e)}if(!o.other&&y.indexOf(r)>=0)throw expected(e,null,null,'"other" sub-message must be specified in '+r);return o}function parseSubMessage(e,r){if(e.pattern[e.index]!==t)throw expected(e,t+" to start sub-message");e.tokens&&e.tokens.push(["syntax",t]),++e.index;var a=parseAST(e,r);if(e.pattern[e.index]!==n)throw expected(e,n+" to end sub-message");return e.tokens&&e.tokens.push(["syntax",n]),++e.index,a}function expected(e,r,t,n){var a=e.pattern,o=a.slice(0,e.index).split(/\r?\n/),i=e.index,c=o.length,s=o.slice(-1)[0].length;return t=t||(e.index>=a.length?"end of message pattern":parseId(e)||a[e.index]),n||(n=errorMessage(r,t)),new SyntaxError(n+=" in "+a.replace(/\r?\n/g,"\n"),r,t,i,c,s)}function errorMessage(e,r){return e?"Expected "+e+" but found "+r:"Unexpected "+r+" found"}function SyntaxError(e,r,t,n,a,o){Error.call(this,e),this.name="SyntaxError",this.message=e,this.expected=r,this.found=t,this.offset=n,this.line=a,this.column=o}r=e.exports=function parse(e,r){return parseAST({pattern:String(e),index:0,tagsType:r&&r.tagsType||null,tokens:r&&r.tokens||null},"")},SyntaxError.prototype=Object.create(Error.prototype),r.SyntaxError=SyntaxError},63831:function(e,r,t){"use strict";var n=t(62700),a=t(27146),o=t(26567),i=t(3962),c=t(89028);function assign(e,r){return Object.keys(r).forEach((function(t){e[t]=r[t]})),e}e.exports=function namespace(){var e=assign({},c),r="en",t={},generateId=function(e){return e},s=null,l="warning",u={};function formatMessage(e,t,o){var i="string"==typeof e?e:e.default,c=translate(i,"object"==typeof e&&e.id||generateId(i),o||r);return(c.format||(c.format=a(n(c.message),o||r,u)))(t)}formatMessage.rich=function rich(e,t,o){var i="string"==typeof e?e:e.default,c=translate(i,"object"==typeof e&&e.id||generateId(i),o||r);return(c.toParts||(c.toParts=a.toParts(n(c.message,{tagsType:p}),o||r,u)))(t)};var p="<>";function richType(e,r){var t=e[2];return function(e,r){var n="object"==typeof t?mapObject(t,r):t;return"function"==typeof e?e(n):e}}function mapObject(e,r){return Object.keys(e).reduce((function(t,n){return t[n]=e[n](r),t}),{})}function translate(e,r,n){var a=i(n,t)||"en",o=t[a]||(t[a]={}),c=o[r];if("string"==typeof c&&(c=o[r]={message:c}),!c){var u='Translation for "'+r+'" in "'+a+'" is missing';if("warning"===l)"undefined"!=typeof console&&console.warn(u);else if("ignore"!==l)throw new Error(u);var p="function"==typeof s?s(e,r,a)||e:s||e;c=o[r]={message:p}}return c}function plural(e,t,n,a,c){"object"==typeof n&&"object"!=typeof a&&(c=a,a=n,n=0);var s=i(c||r,o),l=s&&o[s][e]||returnOther;return a["="+ +t]||a[l(t-n)]||a.other}function returnOther(){return"other"}return u[p]=richType,formatMessage.setup=function setup(n){return(n=n||{}).locale&&(r=n.locale),"translations"in n&&(t=n.translations||{}),n.generateId&&(generateId=n.generateId),"missingReplacement"in n&&(s=n.missingReplacement),n.missingTranslation&&(l=n.missingTranslation),n.formats&&(n.formats.number&&assign(e.number,n.formats.number),n.formats.date&&assign(e.date,n.formats.date),n.formats.time&&assign(e.time,n.formats.time)),n.types&&((u=n.types)[p]=richType),{locale:r,translations:t,generateId:generateId,missingReplacement:s,missingTranslation:l,formats:e,types:u}},formatMessage.number=function(t,n,a){var o=n&&e.number[n]||e.parseNumberPattern(n)||e.number.default;return new Intl.NumberFormat(a||r,o).format(t)},formatMessage.date=function(t,n,a){var o=n&&e.date[n]||e.parseDatePattern(n)||e.date.default;return new Intl.DateTimeFormat(a||r,o).format(t)},formatMessage.time=function(t,n,a){var o=n&&e.time[n]||e.parseDatePattern(n)||e.time.default;return new Intl.DateTimeFormat(a||r,o).format(t)},formatMessage.select=function(e,r){return r[e]||r.other},formatMessage.custom=function(e,r,t,n){return e[1]in u?u[e[1]](e,r)(t,n):t},formatMessage.plural=plural.bind(null,"cardinal"),formatMessage.selectordinal=plural.bind(null,"ordinal"),formatMessage.namespace=namespace,formatMessage}()},17648:function(e){"use strict";var r="Function.prototype.bind called on incompatible ",t=Array.prototype.slice,n=Object.prototype.toString,a="[object Function]";e.exports=function bind(e){var o=this;if("function"!=typeof o||n.call(o)!==a)throw new TypeError(r+o);for(var i,c=t.call(arguments,1),s=Math.max(0,o.length-c.length),l=[],u=0;u<s;u++)l.push("$"+u);if(i=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof i){var r=o.apply(this,c.concat(t.call(arguments)));return Object(r)===r?r:this}return o.apply(e,c.concat(t.call(arguments)))})),o.prototype){var p=function Empty(){};p.prototype=o.prototype,i.prototype=new p,p.prototype=null}return i}},58612:function(e,r,t){"use strict";var n=t(17648);e.exports=Function.prototype.bind||n},57625:function(){!function(){var e=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^\(\s\/]*)\s*/;function _name(){var r,t;return this===Function||this===Function.prototype.constructor?t="Function":this!==Function.prototype&&(t=(r=(""+this).match(e))&&r[1]),t||""}var r=!("name"in Function.prototype&&"name"in function x(){}),t="function"==typeof Object.defineProperty&&function(){var e;try{Object.defineProperty(Function.prototype,"_xyz",{get:function(){return"blah"},configurable:!0}),e="blah"===Function.prototype._xyz,delete Function.prototype._xyz}catch(r){e=!1}return e}(),n="function"==typeof Object.prototype.__defineGetter__&&function(){var e;try{Function.prototype.__defineGetter__("_abc",(function(){return"foo"})),e="foo"===Function.prototype._abc,delete Function.prototype._abc}catch(r){e=!1}return e}();Function.prototype._name=_name,r&&(t?Object.defineProperty(Function.prototype,"name",{get:function(){var e=_name.call(this);return this!==Function.prototype&&Object.defineProperty(this,"name",{value:e,configurable:!0}),e},configurable:!0}):n&&Function.prototype.__defineGetter__("name",(function(){var e=_name.call(this);return this!==Function.prototype&&this.__defineGetter__("name",(function(){return e})),e})))}()},25972:function(e){"use strict";var r=function functionsHaveNames(){return"string"==typeof function f(){}.name},t=Object.getOwnPropertyDescriptor;if(t)try{t([],"length")}catch(e){t=null}r.functionsHaveConfigurableNames=function functionsHaveConfigurableNames(){if(!r()||!t)return!1;var e=t((function(){}),"name");return!!e&&!!e.configurable};var n=Function.prototype.bind;r.boundFunctionsHaveNames=function boundFunctionsHaveNames(){return r()&&"function"==typeof n&&""!==function f(){}.bind().name},e.exports=r},40210:function(e,r,t){"use strict";var n,a=SyntaxError,o=Function,i=TypeError,getEvalledConstructor=function(e){try{return o('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(e){c=null}var throwTypeError=function(){throw new i},s=c?function(){try{return throwTypeError}catch(e){try{return c(arguments,"callee").get}catch(e){return throwTypeError}}}():throwTypeError,l=t(41405)(),u=Object.getPrototypeOf||function(e){return e.__proto__},p={},d="undefined"==typeof Uint8Array?n:u(Uint8Array),y={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":l?u([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":p,"%AsyncGenerator%":p,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":p,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?n:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":p,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":l?u(u([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&l?u((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&l?u((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":l?u(""[Symbol.iterator]()):n,"%Symbol%":l?Symbol:n,"%SyntaxError%":a,"%ThrowTypeError%":s,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet};try{null.error}catch(e){var h=u(u(e));y["%Error.prototype%"]=h}var m=function doEval(e){var r;if("%AsyncFunction%"===e)r=getEvalledConstructor("async function () {}");else if("%GeneratorFunction%"===e)r=getEvalledConstructor("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=getEvalledConstructor("async function* () {}");else if("%AsyncGenerator%"===e){var t=doEval("%AsyncGeneratorFunction%");t&&(r=t.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=doEval("%AsyncGenerator%");n&&(r=u(n.prototype))}return y[e]=r,r},g={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=t(58612),b=t(17642),k=v.call(Function.call,Array.prototype.concat),A=v.call(Function.apply,Array.prototype.splice),w=v.call(Function.call,String.prototype.replace),P=v.call(Function.call,String.prototype.slice),M=v.call(Function.call,RegExp.prototype.exec),S=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,F=/\\(\\)?/g,I=function stringToPath(e){var r=P(e,0,1),t=P(e,-1);if("%"===r&&"%"!==t)throw new a("invalid intrinsic syntax, expected closing `%`");if("%"===t&&"%"!==r)throw new a("invalid intrinsic syntax, expected opening `%`");var n=[];return w(e,S,(function(e,r,t,a){n[n.length]=t?w(a,F,"$1"):r||e})),n},E=function getBaseIntrinsic(e,r){var t,n=e;if(b(g,n)&&(n="%"+(t=g[n])[0]+"%"),b(y,n)){var o=y[n];if(o===p&&(o=m(n)),void 0===o&&!r)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:t,name:n,value:o}}throw new a("intrinsic "+e+" does not exist!")};e.exports=function GetIntrinsic(e,r){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof r)throw new i('"allowMissing" argument must be a boolean');if(null===M(/^%?[^%]*%?$/,e))throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var t=I(e),n=t.length>0?t[0]:"",o=E("%"+n+"%",r),s=o.name,l=o.value,u=!1,p=o.alias;p&&(n=p[0],A(t,k([0,1],p)));for(var d=1,h=!0;d<t.length;d+=1){var m=t[d],g=P(m,0,1),v=P(m,-1);if(('"'===g||"'"===g||"`"===g||'"'===v||"'"===v||"`"===v)&&g!==v)throw new a("property names with quotes must have matching quotes");if("constructor"!==m&&h||(u=!0),b(y,s="%"+(n+="."+m)+"%"))l=y[s];else if(null!=l){if(!(m in l)){if(!r)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&d+1>=t.length){var w=c(l,m);l=(h=!!w)&&"get"in w&&!("originalValue"in w.get)?w.get:l[m]}else h=b(l,m),l=l[m];h&&!u&&(y[s]=l)}}return l}},76810:function(e,r,t){t(23814)()||Object.defineProperty(Node.prototype,"getRootNode",{enumerable:!1,configurable:!1,value:t(84826)})},84826:function(e){"use strict";function getShadowIncludingRoot(e){var r=getRoot(e);return isShadowRoot(r)?getShadowIncludingRoot(r.host):r}function getRoot(e){return null!=e.parentNode?getRoot(e.parentNode):e}function isShadowRoot(e){return"#document-fragment"===e.nodeName&&"ShadowRoot"===e.constructor.name}e.exports&&(e.exports=function getRootNode(e){return"object"==typeof e&&Boolean(e.composed)?getShadowIncludingRoot(this):getRoot(this)})},23814:function(e){e.exports=function isImplemented(){return Object.prototype.hasOwnProperty.call(Node.prototype,"getRootNode")}}}]);