!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-native-web-player"]=t(require("react")):e["react-native-web-player"]=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,p,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),f=n(c),y={title:"text",transpilerTitle:"text",code:"text",entry:"text",initialTab:"text",platform:"text",fullscreen:"text",width:"text",scale:"text",assetRoot:"text",files:"json",vendorComponents:"json",panes:"json",styles:"json"},d=function(e){return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")},b=function(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return"undefined"==typeof n?t:(t[r]="json"===y[r]?JSON.stringify(n):n,t)},{})},h="1.8.1",m="//cdn.rawgit.com/dabbott/react-native-web-player/gh-v"+h+"/index.html",v={iframe:{width:"100%",height:"100%"}},P=(p=i=function(e){function t(e){o(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=l({},e);delete n.style,delete n.baseURL;var a=b(n),i="#"+d(a);return r.hash=i,r}return a(t,e),u(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.style!==e.style||this.props.baseURL!==e.baseURL}},{key:"render",value:function(){var e=this.hash,t=this.props,r=t.style,n=t.baseURL;return f.default.createElement("div",{style:r},f.default.createElement("iframe",{style:v.iframe,frameBorder:0,allowFullScreen:!0,src:""+n+e}))}}]),t}(c.Component),i.propTypes={style:c.PropTypes.any,baseURL:c.PropTypes.string,title:c.PropTypes.string,transpilerTitle:c.PropTypes.string,code:c.PropTypes.string,entry:c.PropTypes.string,initialTab:c.PropTypes.string,platform:c.PropTypes.string,fullscreen:c.PropTypes.bool,width:c.PropTypes.number,scale:c.PropTypes.number,assetRoot:c.PropTypes.string,files:c.PropTypes.array,vendorComponents:c.PropTypes.array,panes:c.PropTypes.array,styles:c.PropTypes.object},i.defaultProps={baseURL:m},p);t.default=P},function(t,r){t.exports=e}])});