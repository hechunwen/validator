/*! Nice Validator 0.1.0
 * (c) 2012-2013 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e,t){"use strict";function i(s,a){var l,o,u=this;return!u instanceof i?new i(s,a):(q(a)&&(a={success:a}),a=a||{},o=H(s,"data-"+h+"-option"),o=o&&"{"===o.charAt(0)?Function("return "+o)():{},l=P[a.theme||o.theme||L.theme],u.options=e.extend({},L,l,o,a),u.$el=e(s),u.rules=new r(u.options.rules,!0),u.messages=new n(u.options.messages,!0),u.fields={},u.elements={},u.isValid=!0,u._init(),t)}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(S(e))for(var n in e)i[n]=s(e[n])}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(S(e))for(var r in e){if(!e[r])return;i[r]=e[r]}}function s(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){if(t&&t.tagName){var i=t;switch(t.tagName.toUpperCase()){case"INPUT":case"SELECT":case"TEXTAREA":i=t.form||e(t).closest(".n-"+h)}return e(i).data(h)||e(i)[h]().data(h)}}function o(i,r){var n=e.trim(H(i,x+"-"+r));if(n)return n=Function("return "+n)(),n?s(n):t}function u(e,t,i){var r=t.msg;return S(r)&&i&&(r=r[i]),j(r)||(r=H(e,"data-msg-"+i)||H(e,"data-msg")||""),r}function d(e){if(!e)return"";var t=T.exec(e);return t?t[1]:""}function c(e){return(e||L.msgTemplate).replace("{#msg}",'<span class="msg-wrap"></span>')}function f(t,i,r){var n,s,a,l,o=e(t);if(o.is(":input")?(l=i.target||H(t,"data-target"),l&&(l=e(l,r),l.length&&(n=l)),s=t.name||"#"+t.id,n=n||e("."+w+'[data-for="'+s+'"]',r)):n=o,!n.length)if(o=e(l||t,r),a=c(i.tpl),n=e(a).addClass(w).attr({tabindex:-1,role:"alert",style:i.style||"","data-for":s}),i.cls&&n.addClass(i.cls),o.is(":checkbox,:radio")){var u=o.parent();n.appendTo(u.is("label")?u.parent():u)}else n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](o);return n}function g(t,i,r){var n,s,a,l,o=i.effect;n={error:v,ok:m,tip:y,loading:b}[i.type||(i.type="error")],a=f(t,i,r),l=a.find("span.msg-wrap"),l.length||(l=e('<span class="msg-wrap"></span>').appendTo(a)),D&&-1!==a[0].className.indexOf("bottom")&&(a[0].style.marginTop=e(t).outerHeight()+"px"),l[0].innerHTML=(i.arrow||"")+(i.icon||"")+'<span class="n-msg">'+i.msg+"</span>",l[0].className="msg-wrap "+n,a[0].style.display="",o&&(q(o)?s=o:N(o)&&q(o[0])&&(s=o[0]),s&&s(l,i.type))}function p(e,t,i){t=t||{};var r,n=f(e,t,i),s=t.effect;n.length&&(N(s)&&q(s[1])?(r=n.find("span.msg-wrap"),n[0].style.display="",s[1](r,t.type)):n[0].style.display="none")}var h="validator",m="n-ok",v="n-error",y="n-tip",b="n-loading",k="n-invalid",w="msg-box",_="aria-invalid",x="data-rule",M="data-inputstatus",O=":input:not(:button,:submit,:reset,:disabled)",$=/(\w+)(?:[\[\(]([^\]\)]*)[\]\)])?/,A=/(?:([^:\[]*):)?\s*(.*)/,F=/[^\x00-\xff]/g,T=/^.*(top|right|bottom|left).*$/,C=/(?:(post|get):)?(.+)/i,R=/<|>|&lt;|&gt;/g,V=e.noop,E=e.proxy,q=e.isFunction,N=e.isArray,j=function(e){return"string"==typeof e},S=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},D=!window.XMLHttpRequest,H=function(e,i,r){return r===t?e.getAttribute(i):(null===r?e.removeAttribute(i):e.setAttribute(i,""+r),t)},I=window.console||{log:V,info:V,warn:V},L={debug:0,theme:"default",timely:2,stopOnError:0,showError:1,showOk:1,defaultMsg:"{0} is not valid.",loadingMsg:"Validating...",msgTemplate:"<span>{#msg}</span>",msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",formClass:"n-default",ignore:"",valid:V,invalid:V},P={"default":{msgClass:"n-right",showOk:""}};e.fn[h]=function(t){var r=this,n=arguments;return r.is(":input")?r:(!r.is("form")&&(r=this.find("form")),!r.length&&(r=this),r.each(function(){if(j(t)){if("_"===t.charAt(0))return;var r=e(this).data(h);r&&r[t].apply(r,Array.prototype.slice.call(n,1))}else new i(this,t)}),this)},e.fn.isValid=function(){var e=this[0],t=l(e);return t?t._checkField(e):!0},i.prototype={_init:function(){var i=this,r=i.options,n=i.fields;N(r.groups)&&e.map(r.groups,function(t){if(!j(t.fields)||!q(t.callback))return null;var r=e(a(t.fields),i.$el),s=function(){return t.callback.call(i,r)};e.extend(s,t),e.map(t.fields.split(" "),function(e){n[e]=n[e]||{},n[e].group=s})}),S(r.fields)&&e.each(r.fields,function(e,t){t&&(n[e]=j(t)?{rule:t}:t)}),e(O,i.$el).each(function(){var e,s=this,a=s.id;return a&&"#"+a in n||(a=s.name),a?(e=n[a]||{},e.rule||(e.rule=H(s,x)||""),e.rules=[],H(s,x,null),e.rule&&(e.name=e.name||s.name,e.key=a,e.required=-1!==e.rule.indexOf("required"),e.must=-1!==e.rule.indexOf("match")||-1!==e.rule.indexOf("checked"),e.required&&H(s,"aria-required",!0),("timely"in e&&!e.timely||!r.timely)&&H(s,"notimely",!0),j(e.target)&&H(s,"data-target",e.target),j(e.tip)&&H(s,"data-tip",e.tip),n[a]=i._parseField(e)),t):H(s,x,null)}),i.msgOpt={type:"error",tpl:c(r.msgTemplate),pos:d(r.msgClass),cls:r.msgClass,icon:r.msgIcon,arrow:r.msgArrow,style:r.msgStyle,effect:r.effect},i.$el.data(h)||(i.$el.on("submit",E(i,"_submit")).on("reset",E(i,"_reset")).on("validated.field",O,E(i,"_validatedField")).on("validated.rule",O,E(i,"_validatedRule")).on("focusin",O,E(i,"_focus")).on("focusout validate",O,E(i,"_blur")).on("click",":radio,:checkbox",E(i,"_click")),2===r.timely&&i.$el.on("keyup",O,E(i,"_blur")),i.$el.data(h,i).addClass("n-"+h+" "+r.formClass),H(i.$el[0],"novalidate","true"))},_submit:function(i){var r,n=this,s=n.options,a=i.target,l="focus.field",o=e(O,n.$el);n._reset(),n.submiting=!0,s.ignore&&(o=o.not(s.ignore)),o.each(function(i,r){if(!e(r).is("[novalidate]")){var a=n.getField(this);if(a)return n._validate(this,a),!n.isValid&&s.stopOnError?(e(this).trigger(l).trigger(l),!1):t}}),n.isValid||s.stopOnError||e(":input."+k+":first",n.$el).trigger(l).trigger(l),(!n.isValid||!H(a,"action")&&i)&&i.preventDefault(),r=n.isValid||2===s.debug?"valid":"invalid",s[r].call(n,a),n.$el.trigger(r+".form",[a]),n.submiting=!1},_reset:function(){var t=this,i=t.options.showError;j(i)?e(i).html(""):(e("[data-for]."+w,t.$el).map(function(){this.style.display="none"}),e(O,t.$el).map(function(){H(this,M,null),H(this,_,null),e(this).removeClass(k)})),t.isValid=!0},_focus:function(e){var t=e.target;this.submiting||""!==t.value&&("false"===H(t,_)||"tip"===H(t,M))||this.showMsg(t,{msg:H(t,"data-tip"),type:"tip"})},_blur:function(t,i){var r,n,s=this,a=s.options,l=t.target,o=100;if(!i){if("validate"===t.type)n=!0;else{if(e(l).is("[notimely]"))return;if(2===a.timely&&"keyup"!==t.type)return}if(a.ignore&&e(l).is(a.ignore))return;if("keyup"===t.type){var u=t.keyCode,d={8:1,9:1,16:1,32:1,46:1};if(48>u&&!d[u])return;o=500}}r=s.getField(l),r&&(r.timeout&&clearTimeout(r.timeout),r.timeout=setTimeout(function(){s._validate(l,r,n)},o))},_click:function(e){this._blur(e,!0)},_parseField:function(i){var r,n=A.exec(i.rule);if(n)return i.display=n[1],r=(n[2]||"").split(";"),e.map(r,function(r){var n=$.exec(r);return n?(i.rules.push({method:n[1],params:n[2]?e.trim(n[2]).split(", "):t}),t):null}),i.vid=0,i.rid=i.rules[0].method,i},_validatedField:function(t,i,r){var n=this,s=n.options,a=s.showError,l=t.target,o=i.isValid=!!r.valid;o&&(r.type="ok"),e(l)[o?"removeClass":"addClass"](k).trigger((o?"valid":"invalid")+".field",[i,r]).attr(_,!o),i.old.ret=r,n.elements[i.key]=l,a&&(j(a)?e(a).html(r.msg||""):r.msg||r.showOk?n.showMsg(l,r):n.hideMsg(l,r))},_validatedRule:function(i,r,n,s){n=n||a.getField(o);var a=this,l=a.options,o=i.target,d="",c=n.rid,f=!1,g=!1;if(s=s||{},n.old=n.old||{},r!==!0?(d=u(o,n,c),d||(j(r)?(d=r,r={error:d}):S(r)&&(r.error?d=r.error:(f=!0,r.ok&&j(r.ok)&&(g=!0),d=r.ok))),s.msg=(f?d:d||a.messages[c]||L.defaultMsg).replace("{0}",n.display||"")):f=!0,f){if(s.valid=!0,!g){var p=n.ok||H(o,"data-ok");p?(g=!0,s.msg=p):j(l.showOk)&&(g=!0,s.msg=l.showOk)}s.showOk=g,e(o).trigger("valid.rule",[c])}else a.isValid=!1,e(o).trigger("invalid.rule",[c]);l.debug&&I[f?"info":"warn"](n.vid+": "+c+" -> "+(s.msg||!0)),f&&n.old.value!==t&&n.old.value!==o.value?(n.vid=0,a._checkRule(o,n)):f&&n.vid<n.rules.length-1?(n.vid++,a._checkRule(o,n)):(n.vid=0,e(o).trigger("validated.field",[n,s]))},_checkRule:function(i,r){var n,s=this,a=r.rules[r.vid],l=a.method,u=a.params;r.rid=l,r.old.value=i.value,n=(o(i,l)||s.rules[l]||function(){return!0}).call(s,i,u,r),n!==t?e(i).trigger("validated.rule",[n,r]):s.isValid=!1},_checkField:function(e,t){return(t=t||this.getField(e))?(this._validate(e,t,!0),t.isValid):!0},_validate:function(i,r,n){var s,a,l=this,o=l.options,u=e(i),d={},c=r.group,f=H(i,M),g=r.isValid=!0;if(r&&r.rules&&!i.disabled&&!u.is("[novalidate]")){if(s=r.old=r.old||{},n=n||r.must,r.required||""!==i.value||c)if(!n&&s&&s.ret!==t&&s.value===i.value){if(s.ret.valid||(g=l.isValid=!1),"tip"===f)return;if(""!==i.value)return d=s.ret,u.trigger("validated.field",[r,d]),t}else c&&(e.extend(d,c),a=c.call(l),a===!0?(a=t,l.hideMsg(i,d)):(j(a)&&(a={error:a}),l.hideMsg(i),r.vid=0,r.rid="group",g=!1));else{if("tip"===f)return;if(l._focus({target:i}),s.value="",!u.is(":checkbox,:radio"))return u.trigger("validated.field",[r,{valid:!0}]),t}o.debug&&I.log(i),a!==t?u.trigger("validated.rule",[a,r,d]):r.rule&&l._checkRule(i,r)}},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,i.fields[t]},test:function(i,r){var n,s,a,l=$.exec(r);return l?(s=l[1],a=l[2]?e.trim(l[2]).split(", "):t,s in this.rules&&(n=this.rules[s].call(this,i,a)),n===!0||n===t||n):!0},getRangeMsg:function(e,t,i,r){if(t){var n=this,s=n.messages[i]||"",a=t[0].split("~"),l=a[0],o=a[1],u="rg",d=[""],c=+e===+e;if(2===a.length){if(l&&o){if(c&&e>=+l&&+o>=e)return!0;d=d.concat(a)}else if(l&&!o){if(c&&e>=+l)return!0;d.push(l),u="gt"}else if(!l&&o){if(c&&+o>=e)return!0;d.push(o),u="lt"}}else{if(e===+l)return!0;d.push(l),u="eq"}return s&&(r&&r+u in s&&(u=r+u),d[0]=s[u]),n.renderMsg.apply(null,d)}},_getMsgOpt:function(t){return e.extend({},this.msgOpt,j(t)?{msg:t}:t)},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},showMsg:function(t,i){i=this._getMsgOpt(i),(i.msg||i.showOk)&&(t=e(t).get(0),H(t,M,i.type),g(t,i,this.$el))},hideMsg:function(t,i){i=this._getMsgOpt(i),p(e(t).get(0),i,this.$el)},mapMsg:function(t){var i=this;e.each(t,function(t,r){var n=i.elements[t]||e(':input[name="'+t+'"]',i.$el)[0];i.showMsg(n,r)})},setMsg:function(e){new n(e,this.messages)},setRule:function(e){new r(e,this.rules)},setField:function(i,r){var n=this,s={};if(j(i)){if(null===r)return e.map(i.split(" "),function(e){e&&n.fields[e]&&(n.fields[e]=null)}),t;r&&(s[i]=r)}else S(i)&&(s=i);e.extend(!0,n.options.fields,s),n._init()},destroy:function(){this.$el.off().removeData(h)}},e(function(){e("body").on("focusin",":input["+x+"]",function(){l(this)?e(this).trigger("focusin"):e(this).removeAttr(x)}).on("click submit","form:not([novalidate])",function(t){var i,r=e(this);r.data(h)||(i=r[h]().data(h),e.isEmptyObject(i.fields)?r.attr("novalidate",!0).removeData(h):"submit"===t.type&&i._submit(t))})}),new r({required:function(t){return!!e.trim(t.value)},integer:function(e,t){var i,r="0|",n="[1-9]\\d*",s=t?t[0]:"*";switch(s){case"+":i=n;break;case"-":i="-"+n;break;case"+0":i=r+n;break;case"-0":i=r+"-"+n;break;default:i=r+"-?"+n}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[s]},match:function(t,i,r){var n,s,a,l,o,u=t.value,d="eq";if(i&&(1===i.length?s=i[0]:(d=i[0],s=i[1]),l=e("#"===s.charAt(0)?s:':input[name="'+s+'"]',this.$el)[0]))switch(r.init_match||(this.$el.on("valid.field",'[name="'+s+'"]',function(){t.value&&e(t).trigger("validate")}),r.init_match=!0),o=this.getField(l),a=this.messages.match[d].replace("{1}",o.display||s),n=l.value,d){case"lt":return+n>+u||a;case"lte":return+n>=+u||a;case"gte":return+u>=+n||a;case"gt":return+u>+n||a;default:return u===n||a}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i){if(!e(t).is(":radio,:checkbox"))return!0;var r=e('input[name="'+t.name+'"]',this.$el).filter(function(){return!this.disabled&&this.checked&&e(this).is(":visible")}).length;return i?this.getRangeMsg(r,i,"checked"):!!r||this.messages.required},length:function(e,t){var i=e.value,r=(t[1]?i.replace(F,"xx"):i).length;return t&&"~"===t[0].charAt(0)&&(t[0]="0"+t[0]),this.getRangeMsg(r,t,"length",t[1]?"2_":"")},remote:function(i,r,n){var s,a=this,l={},o=function(e){return j(e)||S(e)&&("error"in e||"ok"in e)?e:t};return r?(s=C.exec(r[0]),l[i.name]=i.value,r[1]&&e.map(r.slice(1),function(t){l[t]=e(':input[name="'+t+'"]',this.$el).val()}),a.showMsg(i,{type:"loading",msg:a.options.loadingMsg}),e.ajax({url:s[2],type:s[1]||"POST",data:l,cache:!1,complete:function(r,s){var a,l=r.responseText;""===l?l=!0:l||"error"!==s?"{"===l.charAt(0)&&(l=e.parseJSON(l)||{},a=o(l),a===t&&(a=o(l.data)),l=a||"success"===s):l="Net error",e(i).trigger("validated.rule",[l,n])}}),t):!0},filter:function(e,t){var i=t?RegExp("["+t[0]+"]","g"):R;return e.value=e.value.replace(i,""),!0}}),i.defaults=L,i.setTheme=function(t,i){S(t)?e.each(t,function(e,t){P[e]=t}):j(t)&&S(i)&&(P[t]=i)},i.config=function(t){e.each(t,function(e,t){"rules"===e?new r(t):"messages"===e?new n(t):L[e]=t})},e[h]=i}(jQuery);
