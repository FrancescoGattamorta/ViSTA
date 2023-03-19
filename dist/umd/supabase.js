!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.supabase=e():t.supabase=e()}(self,(()=>{return t={98:function(t,e){var r="undefined"!=typeof self?self:this,o=function(){function t(){this.fetch=!1,this.DOMException=r.DOMException}return t.prototype=r,new t}();!function(t){!function(e){var r="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function d(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&n&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r,o=f(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,r=p(e=new FileReader),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=c(t),e=d(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=d(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),h(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),h(t)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var r,o,n=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(o=(r=e.method||this.method||"GET").toUpperCase(),g.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function _(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},b.call(m.prototype),b.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];_.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function O(t,r){return new Promise((function(o,i){var s=new m(t,r);if(s.signal&&s.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;o(new _(n,r))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&n&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",u)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}O.polyfill=!0,t.fetch||(t.fetch=O,t.Headers=l,t.Request=m,t.Response=_),e.Headers=l,e.Request=m,e.Response=_,e.fetch=O,Object.defineProperty(e,"__esModule",{value:!0})}({})}(o),o.fetch.ponyfill=!0,delete o.fetch.polyfill;var n=o;(e=n.fetch).default=n.fetch,e.fetch=n.fetch,e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response,t.exports=e},274:function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.StorageClient=void 0;const n=o(r(981)),i=o(r(436));class s extends i.default{constructor(t,e={},r){super(t,e,r)}from(t){return new n.default(this.url,this.headers,t,this.fetch)}}e.StorageClient=s},341:function(t,e,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(e,r);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,o,n)}:function(t,e,r,o){void 0===o&&(o=r),t[o]=e[r]}),n=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||o(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),e.StorageClient=void 0;var i=r(274);Object.defineProperty(e,"StorageClient",{enumerable:!0,get:function(){return i.StorageClient}}),n(r(717),e),n(r(752),e)},678:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_HEADERS=void 0;const o=r(506);e.DEFAULT_HEADERS={"X-Client-Info":`storage-js/${o.version}`}},752:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StorageUnknownError=e.StorageApiError=e.isStorageError=e.StorageError=void 0;class r extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}e.StorageError=r,e.isStorageError=function(t){return"object"==typeof t&&null!==t&&"__isStorageError"in t},e.StorageApiError=class extends r{constructor(t,e){super(t),this.name="StorageApiError",this.status=e}toJSON(){return{name:this.name,message:this.message,status:this.status}}},e.StorageUnknownError=class extends r{constructor(t,e){super(t),this.name="StorageUnknownError",this.originalError=e}}},716:function(t,e,r){"use strict";var o=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))((function(n,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.remove=e.put=e.post=e.get=void 0;const n=r(752),i=r(610),s=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t);function a(t,e,r,a,u,c){return o(this,void 0,void 0,(function*(){return new Promise(((d,h)=>{t(r,((t,e,r,o)=>{const n={method:t,headers:(null==e?void 0:e.headers)||{}};return"GET"===t?n:(n.headers=Object.assign({"Content-Type":"application/json"},null==e?void 0:e.headers),n.body=JSON.stringify(o),Object.assign(Object.assign({},n),r))})(e,a,u,c)).then((t=>{if(!t.ok)throw t;return(null==a?void 0:a.noResolveJson)?t:t.json()})).then((t=>d(t))).catch((t=>((t,e)=>o(void 0,void 0,void 0,(function*(){const r=yield(0,i.resolveResponse)();t instanceof r?t.json().then((r=>{e(new n.StorageApiError(s(r),t.status||500))})).catch((t=>{e(new n.StorageUnknownError(s(t),t))})):e(new n.StorageUnknownError(s(t),t))})))(t,h)))}))}))}e.get=function(t,e,r,n){return o(this,void 0,void 0,(function*(){return a(t,"GET",e,r,n)}))},e.post=function(t,e,r,n,i){return o(this,void 0,void 0,(function*(){return a(t,"POST",e,n,i,r)}))},e.put=function(t,e,r,n,i){return o(this,void 0,void 0,(function*(){return a(t,"PUT",e,n,i,r)}))},e.remove=function(t,e,r,n,i){return o(this,void 0,void 0,(function*(){return a(t,"DELETE",e,n,i,r)}))}},610:function(t,e,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(e,r);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,o,n)}:function(t,e,r,o){void 0===o&&(o=r),t[o]=e[r]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&o(e,t,r);return n(e,t),e},s=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))((function(n,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.resolveResponse=e.resolveFetch=void 0,e.resolveFetch=t=>{let e;return e=t||("undefined"==typeof fetch?(...t)=>s(void 0,void 0,void 0,(function*(){return yield(yield Promise.resolve().then((()=>i(r(98))))).fetch(...t)})):fetch),(...t)=>e(...t)},e.resolveResponse=()=>s(void 0,void 0,void 0,(function*(){return"undefined"==typeof Response?(yield Promise.resolve().then((()=>i(r(98))))).Response:Response}))},717:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},506:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.version=void 0,e.version="0.0.0"},436:function(t,e,r){"use strict";var o=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))((function(n,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const n=r(678),i=r(752),s=r(716),a=r(610);e.default=class{constructor(t,e={},r){this.url=t,this.headers=Object.assign(Object.assign({},n.DEFAULT_HEADERS),e),this.fetch=(0,a.resolveFetch)(r)}listBuckets(){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,s.get)(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if((0,i.isStorageError)(t))return{data:null,error:t};throw t}}))}getBucket(t){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,s.get)(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(t){if((0,i.isStorageError)(t))return{data:null,error:t};throw t}}))}createBucket(t,e={public:!1}){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,s.post)(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:e.public},{headers:this.headers}),error:null}}catch(t){if((0,i.isStorageError)(t))return{data:null,error:t};throw t}}))}updateBucket(t,e){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,s.put)(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:e.public},{headers:this.headers}),error:null}}catch(t){if((0,i.isStorageError)(t))return{data:null,error:t};throw t}}))}emptyBucket(t){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,s.post)(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(t){if((0,i.isStorageError)(t))return{data:null,error:t};throw t}}))}deleteBucket(t){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,s.remove)(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(t){if((0,i.isStorageError)(t))return{data:null,error:t};throw t}}))}}},981:function(t,e,r){"use strict";var o=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))((function(n,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const n=r(752),i=r(716),s=r(610),a={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},u={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};e.default=class{constructor(t,e={},r,o){this.url=t,this.headers=e,this.bucketId=r,this.fetch=(0,s.resolveFetch)(o)}uploadOrUpdate(t,e,r,i){return o(this,void 0,void 0,(function*(){try{let o;const n=Object.assign(Object.assign({},u),i),s=Object.assign(Object.assign({},this.headers),"POST"===t&&{"x-upsert":String(n.upsert)});"undefined"!=typeof Blob&&r instanceof Blob?(o=new FormData,o.append("cacheControl",n.cacheControl),o.append("",r)):"undefined"!=typeof FormData&&r instanceof FormData?(o=r,o.append("cacheControl",n.cacheControl)):(o=r,s["cache-control"]=`max-age=${n.cacheControl}`,s["content-type"]=n.contentType);const a=this._removeEmptyFolders(e),c=this._getFinalPath(a),d=yield this.fetch(`${this.url}/object/${c}`,{method:t,body:o,headers:s});return d.ok?{data:{path:a},error:null}:{data:null,error:yield d.json()}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}upload(t,e,r){return o(this,void 0,void 0,(function*(){return this.uploadOrUpdate("POST",t,e,r)}))}update(t,e,r){return o(this,void 0,void 0,(function*(){return this.uploadOrUpdate("PUT",t,e,r)}))}move(t,e){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,i.post)(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:e},{headers:this.headers}),error:null}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}copy(t,e){return o(this,void 0,void 0,(function*(){try{return{data:{path:(yield(0,i.post)(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:e},{headers:this.headers})).Key},error:null}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}createSignedUrl(t,e,r){return o(this,void 0,void 0,(function*(){try{let o=this._getFinalPath(t),n=yield(0,i.post)(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:e},(null==r?void 0:r.transform)?{transform:r.transform}:{}),{headers:this.headers});const s=(null==r?void 0:r.download)?`&download=${!0===r.download?"":r.download}`:"";return n={signedUrl:encodeURI(`${this.url}${n.signedURL}${s}`)},{data:n,error:null}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}createSignedUrls(t,e,r){return o(this,void 0,void 0,(function*(){try{const o=yield(0,i.post)(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:e,paths:t},{headers:this.headers}),n=(null==r?void 0:r.download)?`&download=${!0===r.download?"":r.download}`:"";return{data:o.map((t=>Object.assign(Object.assign({},t),{signedUrl:t.signedURL?encodeURI(`${this.url}${t.signedURL}${n}`):null}))),error:null}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}download(t,e){return o(this,void 0,void 0,(function*(){const r=void 0!==(null==e?void 0:e.transform)?"render/image/authenticated":"object",o=this.transformOptsToQueryString((null==e?void 0:e.transform)||{}),s=o?`?${o}`:"";try{const e=this._getFinalPath(t),o=yield(0,i.get)(this.fetch,`${this.url}/${r}/${e}${s}`,{headers:this.headers,noResolveJson:!0});return{data:yield o.blob(),error:null}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}getPublicUrl(t,e){const r=this._getFinalPath(t),o=[],n=(null==e?void 0:e.download)?`download=${!0===e.download?"":e.download}`:"";""!==n&&o.push(n);const i=void 0!==(null==e?void 0:e.transform)?"render/image":"object",s=this.transformOptsToQueryString((null==e?void 0:e.transform)||{});""!==s&&o.push(s);let a=o.join("&");return""!==a&&(a=`?${a}`),{data:{publicUrl:encodeURI(`${this.url}/${i}/public/${r}${a}`)}}}remove(t){return o(this,void 0,void 0,(function*(){try{return{data:yield(0,i.remove)(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}list(t,e,r){return o(this,void 0,void 0,(function*(){try{const o=Object.assign(Object.assign(Object.assign({},a),e),{prefix:t||""});return{data:yield(0,i.post)(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},r),error:null}}catch(t){if((0,n.isStorageError)(t))return{data:null,error:t};throw t}}))}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const e=[];return t.width&&e.push(`width=${t.width}`),t.height&&e.push(`height=${t.height}`),t.resize&&e.push(`resize=${t.resize}`),t.format&&e.push(`format=${t.format}`),t.quality&&e.push(`quality=${t.quality}`),e.join("&")}}}},e={},function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,r),i.exports}(341);var t,e}));