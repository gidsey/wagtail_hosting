(()=>{"use strict";var e,t={9893:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var r=n(o(5311));window.createDocumentChooser=function(e){var t=(0,r.default)("#"+e+"-chooser"),o=t.find(".title"),n=(0,r.default)("#"+e),a=t.find(".edit-link"),l=t.data("chooserUrl"),i=null;n.val()&&(i={id:n.val(),edit_link:a.attr("href"),title:o.text()});var u={getState:function(){return i},getValue:function(){return i&&i.id},setState:function(e){e?(n.val(e.id),o.text(e.title),t.removeClass("blank"),a.attr("href",e.edit_link)):(n.val(""),t.addClass("blank")),i=e},getTextLabel:function(e){if(!i)return null;var t=i.title;return e&&e.maxLength&&t.length>e.maxLength?t.substring(0,e.maxLength-1)+"…":t},focus:function(){(0,r.default)(".action-choose",t).focus()},openChooserModal:function(){ModalWorkflow({url:l,onload:DOCUMENT_CHOOSER_MODAL_ONLOAD_HANDLERS,responses:{documentChosen:function(e){u.setState(e)}}})},clear:function(){u.setState(null)}};return(0,r.default)(".action-choose",t).on("click",(function(){u.openChooserModal()})),(0,r.default)(".action-clear",t).on("click",(function(){u.clear()})),u}},5311:e=>{e.exports=jQuery}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,o,r,a)=>{if(!o){var l=1/0;for(f=0;f<e.length;f++){for(var[o,r,a]=e[f],i=!0,u=0;u<o.length;u++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](o[u])))?o.splice(u--,1):(i=!1,a<l&&(l=a));if(i){e.splice(f--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=3588,(()=>{var e={3588:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[l,i,u]=o,c=0;if(l.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var f=u(n)}for(t&&t(o);c<l.length;c++)a=l[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},o=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[2751],(()=>n(9893)));r=n.O(r)})();