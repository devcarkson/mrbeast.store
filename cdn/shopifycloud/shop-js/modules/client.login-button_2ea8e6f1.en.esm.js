import{d as o,T as t,U as n,p as i,q as e,t as s,X as l,x as a,y as r,Y as h,_ as d,Z as c,i as p,c as f,I as u,B as m,$ as g,g as w,a0 as v,a1 as b,a2 as y,a3 as _,a4 as x,a5 as k,O as S,a6 as M,a7 as W,a8 as E,e as C,a9 as z,F as B,G as A,P as F,H as $,v as N,aa as T,ab as U,ac as q,ad as D,ae as I,J as L,af as H,Q as j,j as O,s as P,k as R,l as Y}from"./chunk.common_004d217e.esm.js";class J extends HTMLElement{constructor(){super();const o=document.createElement("template"),n=this.getAttribute("size"),i=this.getAttribute("background-color")||"#FFF";o.innerHTML=function(o=36,n){const[i,e,s]=t(n),l=`rgb(${i}, ${e}, ${s})`,a=1.15,r=o,h=Math.round(r/a);return`\n    <style>\n      .shop-swirl {\n        height: ${r}px;\n        width: ${h}px;\n        vertical-align: middle;\n      }\n    </style>\n    <svg class="shop-swirl" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9.43 0C4.607 0 2.2 1.63.266 2.952L.21 2.99a.476.476 0 0 0-.146.632l1.91 3.291a.486.486 0 0 0 .327.235.5.5 0 0 0 .398-.104l.15-.127c.995-.832 2.586-1.957 6.441-2.25 2.146-.174 4.005.404 5.372 1.666 1.503 1.386 2.4 3.626 2.4 5.991 0 4.348-2.56 7.084-6.68 7.14-3.391-.02-5.67-1.788-5.67-4.404 0-1.399.651-2.306 1.884-3.216a.437.437 0 0 0 .124-.554L4.995 8.03a.493.493 0 0 0-.685-.193C2.386 8.98.03 11.067.155 15.077c.156 5.111 4.403 9.009 9.921 9.168h.63C17.268 24.034 22 19.166 22 12.576 22.01 6.474 17.6 0 9.43 0z" fill="${l}" />\n    </svg>\n  `}(n?Number.parseInt(n,10):void 0,i),this.attachShadow({mode:"open"}).appendChild(o.content.cloneNode(!0))}}function Q(){const o=document.createElement("div"),t=o.attachShadow({mode:"open"});return o.style.setProperty("all","initial"),{withInnerHTML(o){return t.innerHTML=o,this},build(){const i=n();return t.appendChild(i),document.body.appendChild(o),{get sheetModal(){return i},destroy(){o.remove()}}}}}var V,G,K,X,Z,oo,to,no,io,eo,so,lo,ao,ro,ho;class co extends HTMLElement{constructor(){super(),V.add(this),G.set(this,void 0),K.set(this,void 0),X.set(this,void 0),Z.set(this,void 0),oo.set(this,void 0),to.set(this,void 0),no.set(this,void 0),io.set(this,void 0),eo.set(this,void 0),so.set(this,void 0),lo.set(this,{});const o=document.createElement("template");o.innerHTML=`\n    <style>\n      .shop-modal-content {\n        border-bottom: 1px solid #D9D9D9;\n        padding-bottom: 20px;\n        text-align: center;\n        margin: 0 20px;\n      }\n\n      .shop-modal-content--small {\n        padding-bottom: 7px;\n      }\n\n      .shop-modal-content.hide-divider {\n        border-bottom-color: transparent;\n      }\n\n      .shop-modal-content-title {\n        font-size: 20px;\n        font-weight: 600;\n        line-height: 25px;\n        letter-spacing: -0.2px;\n        color: #000000;\n        margin-bottom: 8px;\n      }\n\n      .shop-modal-content-description {\n        font-size: 14px;\n        font-weight: 400;\n        color: #0F1721;\n        letter-spacing: 0px;\n      }\n\n      .shop-modal-content-processing {\n        min-height: 97px;\n        margin: 0 20px;\n      }\n\n      .shop-modal-content-processing-user {\n        padding: 15px 0;\n        min-height: 15px;\n        font-size: 12px;\n        color: #0F1721;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        -webkit-font-smoothing: antialiased;\n        -webkit-text-size-adjust: 100%;\n        font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif !important;\n      }\n\n      .shop-modal-content-disclaimer {\n        font-size: 12px;\n        line-height: 1.4;\n        text-align: center;\n        color: rgb(63, 69, 77);\n        padding: 8px 0 5px;\n        margin: 0 20px;\n      }\n\n      .shop-modal-content-disclaimer a {\n        color: ${s.brand};\n        -webkit-appearance: none;\n        appearance: none;\n        text-decoration: none;\n        cursor: pointer;\n      }\n\n      .shop-modal-content-disclaimer a:hover,\n      .shop-modal-content-disclaimer a:focus,\n      .shop-modal-content-disclaimer a:active {\n        outline: none;\n        color: #7b61f0;\n      }\n\n      @media (forced-colors: active) {\n        .shop-modal-content.hide-divider {\n          border-bottom: none;\n        }\n      }\n\n      .hidden {\n        display: none;\n      }\n    </style>\n    <div class="shop-modal-content hidden">\n      <h2 class="shop-modal-content-title hidden"></h2>\n      <div class="shop-modal-content-description hidden"></div>\n    </div>\n    <div class="shop-modal-content-content hidden">\n      <div class="shop-modal-content-processing hidden">\n        <div class="shop-modal-content-processing-user"></div>\n        <div class="shop-modal-content-processing-status"></div>\n      </div>\n      <div class="shop-modal-content-children hidden">\n        <slot></slot>\n      </div>\n      <div class="shop-modal-content-disclaimer hidden"></div>\n    </div>\n  `,i(this,G,this.attachShadow({mode:"open"}),"f"),e(this,G,"f").appendChild(o.content.cloneNode(!0)),i(this,K,e(this,G,"f").querySelector(".shop-modal-content"),"f"),i(this,X,e(this,G,"f").querySelector(".shop-modal-content-title"),"f"),i(this,Z,e(this,G,"f").querySelector(".shop-modal-content-description"),"f"),i(this,oo,e(this,G,"f").querySelector(".shop-modal-content-content"),"f"),i(this,to,e(this,G,"f").querySelector(".shop-modal-content-processing"),"f"),i(this,no,e(this,G,"f").querySelector(".shop-modal-content-processing-user"),"f"),i(this,eo,e(this,G,"f").querySelector(".shop-modal-content-children"),"f"),i(this,so,e(this,G,"f").querySelector(".shop-modal-content-disclaimer"),"f")}hideDivider(){e(this,K,"f").classList.add("hide-divider")}showDivider(){e(this,K,"f").classList.remove("hide-divider")}update(o){i(this,lo,Object.assign(Object.assign({},e(this,lo,"f")),o),"f"),e(this,V,"m",ao).call(this),e(this,V,"m",ro).call(this),e(this,V,"m",ho).call(this)}}function po(o,t=!1){const n=document.createElement("shop-modal-content");return t&&n.hideDivider(),n.update(o),n}G=new WeakMap,K=new WeakMap,X=new WeakMap,Z=new WeakMap,oo=new WeakMap,to=new WeakMap,no=new WeakMap,io=new WeakMap,eo=new WeakMap,so=new WeakMap,lo=new WeakMap,V=new WeakSet,ao=function(){const{title:o,description:t,authorizeState:n}=e(this,lo,"f"),i=o||t;e(this,K,"f").classList.toggle("hidden",!i),e(this,X,"f").classList.toggle("hidden",!o),e(this,Z,"f").classList.toggle("hidden",!t),e(this,X,"f").textContent=o||"",e(this,Z,"f").textContent=t||"",n&&(e(this,K,"f").classList.toggle("hide-divider",n===l.Start),e(this,K,"f").classList.toggle("shop-modal-content--small",n===l.Start))},ro=function(){var o;const{authorizeState:t,status:n,email:s}=e(this,lo,"f"),h=Boolean(t||n),d=Boolean(n&&s),c=Boolean(h&&!d);if(e(this,oo,"f").classList.toggle("hidden",!h),e(this,to,"f").classList.toggle("hidden",!d),e(this,eo,"f").classList.toggle("hidden",!c),!e(this,io,"f")&&d){const n=t===l.OneClick?a.Branded:a.Regular;i(this,io,r(n),"f"),e(this,to,"f").appendChild(e(this,io,"f")),null===(o=e(this,io,"f"))||void 0===o||o.setStatus({status:"loading",message:""})}e(this,no,"f").textContent=s||""},ho=function(){const{disclaimer:o}=e(this,lo,"f"),t=Boolean(o);e(this,so,"f").classList.toggle("hidden",!t),e(this,so,"f").innerHTML=o||""},customElements.get("shop-modal-content")||customElements.define("shop-modal-content",co);class fo extends HTMLElement{constructor(){super(),this.o=null,this.t=null,this.i=null,this.l=null,this.h=null,this.p=null,this.u=null,this.m=0,this.g=0,customElements.get("shop-logo")||customElements.define("shop-logo",h)}connectedCallback(){return d(this,void 0,void 0,(function*(){yield this.v(),this._()}))}setFollowing({following:o=!0,skipAnimation:t=!1}){var n,i,e,s,l;null===(n=this.t)||void 0===n||n.classList.toggle("button--animating",!t),null===(i=this.t)||void 0===i||i.classList.toggle("button--following",o),null!==this.h&&null!==this.p&&(this.h.ariaHidden=o?"true":"false",this.p.ariaHidden=o?"false":"true"),this.style.setProperty("--button-width",`${o?this.g:this.m}px`),window.matchMedia("(prefers-reduced-motion: reduce)").matches||t?null===(e=this.l)||void 0===e||e.setFilled(o):null===(l=null===(s=this.t)||void 0===s?void 0:s.querySelector(".follow-text"))||void 0===l||l.addEventListener("transitionend",(()=>{var t;null===(t=this.l)||void 0===t||t.setFilled(o)}))}setFocused(){var o;null===(o=this.t)||void 0===o||o.focus()}v(){return d(this,void 0,void 0,(function*(){try{const o="en",t={follow_on_shop:{follow:"Follow on {shop}",following:"Following on {shop}",auth_modal:{title:"Follow on Shop",description:"Stay in the know—never miss a sale, restock, or order update."},following_modal:{title:"Visit {store} on Shop",subtitle:"Everything you need to shop, track, and pay—all in one place.",qr_header:"Scan to visit {store} on the Shop app",qr_alt_text:"Shop app QR code",continue:"Continue"},completed:{title:"You're following {store}",subtitle:"We've sent you an email with a link to download the Shop app."}},login_with_shop:{login:"Continue with {shop}",auth_modal:{login_title:"Sign in with Shop",login_title_with_store:"Sign in to {store} with Shop",login_description:"The easiest and most secure way to sign in to {store}—no password needed.",login_footer:"By continuing, your email address will be shared with {store}.",login_footer_with_name:"By continuing, your name and email address will be shared with {store}.",signup_title:"Create an account",signup_description:"Enter your phone number to create a Shop account.",signup_footer:"We'll send a code to your mobile number to confirm it's you.",login_sms_title:"Confirm it's you",login_sms_description:"Enter the code sent to {phoneNumber}",login_sms_footer:"By continuing, your email address will be shared with {store}.",login_email_title:"Confirm it’s you",login_email_description:"Enter the code sent to your email, {email}",login_email_footer:"By continuing, your email address will be shared with {store}."}},verified_email_auth:{auth_modal:{login_title:"Log in or sign up",signup_title:"Continue with Shop",signup_description:"Create a Shop account to sign in to {clientName}–no passwords needed"}},legal:{terms_of_service:"terms of service",privacy_policy:"privacy policy",terms:"terms",client:"See {clientName}’s {privacyPolicy} and {termsOfService}.",shop:{email:"By continuing, you agree to our {termsOfService} and your email address will be shared with {clientName}."}},customer_accounts:{remember_me:"Save my info securely with Shop to sign in faster everywhere",sign_up_page:{auth_modal:{login_title:"Continue with Shop",login_description:"Use your Shop account to sign in everywhere—no password needed.",login_sms_description:"Use your Shop account to sign in everywhere—no password needed.\r\n\r\nConfirm it's you, enter the code sent to {phoneNumber}",login_email_description:"Use your Shop account to sign in everywhere—no password needed.\r\n\r\nConfirm it's you, enter the code sent to your email, {email}"}}},payment_request:{auth_modal:{login_title:"Check out with Shop Pay",login_description:"The fastest way to check out with your securely saved information.",login_sms_title:"Confirm it's you",login_sms_description:"Enter the code sent to {phoneNumber} to securely use your saved information.",login_email_title:"Confirm it’s you",login_email_description:"Enter the code sent to your email, {email} to securely use your saved information."}}};this.u=new u({[o]:t})}catch(o){o instanceof Error&&m.notify(o)}return null}))}_(){var o,t,n,i;const e=document.createElement("template");if(e.innerHTML=`\n    <style>\n      @keyframes followBackground {\n        0% {\n          width: 100%;\n          height: 100%;\n          transform: scaleY(1);\n        }\n\n        25% {\n          transform: scaleY(1);\n        }\n\n        50% {\n          transform: scaleY(1.2);\n        }\n\n        100% {\n          transform: scaleY(1);\n          width: 37px;\n          height: 37px;\n        }\n      }\n\n      :host {\n        display: inline-block;\n        line-height: normal;\n\n        --following-text-color: #000000;\n        --border-color: #5433EB;\n        --border-hover-color: #7f68e9;\n        --parent-width: var(--reserved-width, 177px);\n\n        /* Reserve width to prevent layout shifts */\n        width: var(--parent-width);\n      }\n\n      .button {\n        border: none;\n        margin: 0;\n        padding: 0;\n        overflow: visible;\n        isolation: isolate;\n\n        background: transparent;\n        color: #ffffff;\n        font: 16px/19px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica;\n\n        line-height: normal;\n\n        -webkit-font-smoothing: inherit;\n        -moz-osx-font-smoothing: inherit;\n\n        -webkit-appearance: none;\n        position: relative;\n        display: inline-block;\n        align-items: center;\n\n        height: 37px;\n        width: var(--button-width, 100%);\n        border-radius: 48px;\n      }\n\n      .button:focus,\n      .button:focus-visible {\n        outline: none;\n      }\n\n      .button--dark {\n        --following-text-color: #ffffff;\n      }\n\n      .button--bordered {\n        --border-color: #EDEDED;\n        --border-hover-color: #EDEDED;\n      }\n\n      .follow-icon-wrapper {\n        display: flex;\n        align-items: center;\n        width: auto;\n        position: relative;\n        z-index: 1;\n        top: 0;\n        left: 0;\n      }\n\n      .follow-icon-wrapper:before {\n        content: '';\n        background: #5433EB;\n        border-radius: 48px;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        z-index: -1;\n        transform-origin: center;\n        box-sizing: border-box;\n        border: 1px solid var(--border-color);\n      }\n\n      .button:not(.button--following):focus-visible .follow-icon-wrapper:before,\n      .button:not(.button--following):hover .follow-icon-wrapper:before {\n        background: #7f68e9;\n        border-color: var(--border-hover-color);\n      }\n\n      .follow-icon-wrapper shop-heart-icon {\n        position: absolute;\n        top: 11px;\n        left: 12px;\n      }\n\n      .follow-text,\n      .following-text {\n        white-space: nowrap;\n        padding: 9px 11px 9px 35px;\n        cursor: pointer;\n      }\n\n      .follow-text shop-logo,\n      .following-text shop-logo {\n        position: relative;\n        top: 3px;\n        padding-left: 1px;\n      }\n\n      .following-text {\n        opacity: 0;\n        pointer-events: none;\n        color: var(--following-text-color);\n        padding: 9px 8px 9px 43px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        box-sizing: border-box;\n        overflow: hidden;\n        max-width: var(--button-width);\n      }\n\n      .following-icon {\n        opacity: 0;\n      }\n\n      .button--following .follow-icon-wrapper:before {\n        position: absolute;\n        width: 37px;\n        height: 37px;\n        padding: 0;\n      }\n\n      .button--following:focus-visible,\n      .button--following:hover {\n        background: rgb(217 217 217 / 0.2);\n      }\n\n      .button--following .follow-text,\n      .button--following .follow-icon {\n        opacity: 0;\n      }\n\n      .button--following .following-text {\n        opacity: 1;\n        width: auto;\n        pointer-events: auto;\n      }\n\n      .button--following .following-icon {\n        opacity: 1;\n      }\n\n      .button--following .follow-icon-wrapper shop-heart-icon {\n        transform: translateX(-1.5px);\n      }\n\n      @media (prefers-reduced-motion: no-preference) {\n        .button--animating {\n          transition: 400ms width cubic-bezier(0.45, 0, 0.15, 1);\n        }\n\n        .button--animating .follow-text {\n          transition: 200ms opacity cubic-bezier(0.45, 0, 1, 1);\n        }\n\n        .button--animating .following-text {\n          transition: 200ms opacity cubic-bezier(0, 0, 0.15, 1);\n          transition-delay: 0.2s;\n        }\n\n        .button--animating.button--following .follow-icon-wrapper:before {\n          animation: followBackground 0.4s cubic-bezier(0.45, 0, 0.15, 1);\n        }\n\n        .button--animating.button--following .follow-icon-wrapper shop-heart-icon {\n          transition: 400ms transform cubic-bezier(0.45, 0, 0.15, 1);\n        }\n      }\n    </style>\n    <button class="button">\n      <span class="follow-icon-wrapper">\n        <span class="follow-text">\n          <slot name="follow-text">\n            Follow on ${uo("white")}\n          </slot>\n        </span>\n      </span>\n\n      <span class="following-text" aria-hidden="true">\n        <slot name="following-text">\n          Following on ${uo("black")}\n        </slot>\n      </span>\n    </button>\n  `,this.o=this.attachShadow({mode:"open"}),this.o.appendChild(e.content.cloneNode(!0)),this.u){const o=this.u.translate("follow_on_shop.follow",{shop:uo("white")}),t=this.u.translate("follow_on_shop.following",{shop:uo("black")});this.o.querySelector('slot[name="follow-text"]').innerHTML=o,this.o.querySelector('slot[name="following-text"]').innerHTML=t}this.t=this.o.querySelector(".button"),this.i=this.t.querySelector(".follow-icon-wrapper"),this.h=null===(o=this.o)||void 0===o?void 0:o.querySelector("span.follow-text"),this.p=null===(t=this.o)||void 0===t?void 0:t.querySelector("span.following-text"),this.l=c(),this.i.prepend(this.l),this.m=(null===(n=this.o.querySelector(".follow-text"))||void 0===n?void 0:n.scrollWidth)||0,this.g=(null===(i=this.o.querySelector(".following-text"))||void 0===i?void 0:i.scrollWidth)||0,this.style.setProperty("--reserved-width",`${Math.max(this.m,this.g)}px`),this.setFollowing({following:this.hasAttribute("following"),skipAnimation:!0}),this.k()}k(){var o,t;const n=p(this),i=f(n,"#ffffff")>f(n,"#000000"),e=f(n,"#5433EB")<=3.06;if(null===(o=this.t)||void 0===o||o.classList.toggle("button--dark",i),null===(t=this.t)||void 0===t||t.classList.toggle("button--bordered",e),i&&this.u){const o=this.u.translate("follow_on_shop.following",{shop:uo("white")});this.o.querySelector('slot[name="following-text"]').innerHTML=o}}}function uo(o){return`<shop-logo role="img" color=${o} size="15" style="display: inline-flex;" aria-label="Shop"></shop-logo>`}var mo,go,wo,vo,bo,yo,_o,xo,ko,So;customElements.get("follow-on-shop-button")||customElements.define("follow-on-shop-button",fo);class Mo extends HTMLElement{constructor(){super(),mo.add(this),go.set(this,void 0),wo.set(this,void 0),vo.set(this,void 0),bo.set(this,void 0),yo.set(this,void 0),_o.set(this,void 0),xo.set(this,""),ko.set(this,"");const o=document.createElement("template");o.innerHTML=`\n    <style>\n      @keyframes heartBeat {\n        0% {\n          transform: scale(1);\n        }\n\n        25% {\n          transform: scale(1.12);\n        }\n\n        50% {\n          transform: scale(0.9);\n        }\n\n        70% {\n          transform: scale(1);\n        }\n      }\n\n      :host {\n        display: flex;\n        justify-content: center;\n        font-family: -apple-system,San Francisco,Roboto,Segoe UI,Helvetica Neue,sans-serif !important;\n      }\n\n      .store-logo {\n        display: inline-block;\n        position: relative;\n      }\n\n      .store-logo-logo-wrapper {\n        width: 58px;\n        height: 58px;\n        border-radius: 100%;\n        background: linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), #FFFFFF;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        overflow: hidden;\n        box-sizing: border-box;\n      }\n\n      .store-logo-logo-wrapper--text {\n        background: ${s.foregroundSecondary};\n      }\n\n      .store-logo-logo-wrapper--text img,\n      .store-logo-logo-wrapper--image span {\n        display: none;\n      }\n\n      .store-logo-logo-wrapper--text span,\n      .store-logo-logo-wrapper--image img {\n        display: block;\n      }\n\n      .store-logo-logo-wrapper img {\n        max-width: 100%;\n        max-height: 100%;\n        object-fit: contain;\n      }\n\n      .store-logo-icon-wrapper {\n        position: absolute;\n        top: -16px;\n        left: 28px;\n        width: 36px;\n        height: 36px;\n        border-radius: 100%;\n        background: rgba(40, 40, 40, 0.3);\n        /* Note: backdrop-filter has minimal browser support */\n        -webkit-backdrop-filter: blur(24px);\n        backdrop-filter: blur(24px);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        box-sizing: border-box;\n      }\n\n      .store-logo-text {\n        font-size: 28px;\n        line-height: 32px;\n        font-weight: 500;\n        color: ${s.white};\n        text-transform: capitalize;\n      }\n\n      .store-logo--favorited .store-logo-icon-wrapper {\n        background: ${s.brand};\n      }\n\n      @media (forced-colors: active) {\n        .store-logo-logo-wrapper--text,\n        .store-logo-icon-wrapper {\n          border: 1px solid;\n        }\n      }\n\n      @media (prefers-reduced-motion: no-preference) {\n        .store-logo-icon-wrapper {\n          transition: background 0.1s 0.75s cubic-bezier(0.45, 0, 0.15, 1);\n        }\n\n        .store-logo--favorited shop-heart-icon {\n          transform-origin: center;\n          animation: 0.4s cubic-bezier(0.45, 0, 0.15, 1) 0.75s heartBeat;\n        }\n      }\n    </style>\n    <div class="store-logo">\n      <div class="store-logo-logo-wrapper">\n        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==" alt="" class="store-logo-image">\n        <span class="store-logo-text"></span>\n      </div>\n      <div class="store-logo-icon-wrapper"></div>\n    </div>\n  `,i(this,go,this.attachShadow({mode:"open"}),"f"),e(this,go,"f").appendChild(o.content.cloneNode(!0)),i(this,wo,e(this,go,"f").querySelector(".store-logo"),"f"),i(this,vo,e(this,go,"f").querySelector(".store-logo-logo-wrapper"),"f"),i(this,bo,e(this,vo,"f").querySelector("img"),"f"),i(this,yo,e(this,vo,"f").querySelector("span"),"f"),i(this,_o,c(),"f"),e(this,go,"f").querySelector(".store-logo-icon-wrapper").append(e(this,_o,"f"))}update({name:o,logoSrc:t}){i(this,xo,o||e(this,xo,"f"),"f"),i(this,ko,t||e(this,ko,"f"),"f"),e(this,mo,"m",So).call(this)}connectedCallback(){e(this,bo,"f").addEventListener("error",(()=>{i(this,ko,"","f"),e(this,mo,"m",So).call(this)}))}setFavorited(){return e(this,wo,"f").classList.add("store-logo--favorited"),window.matchMedia("(prefers-reduced-motion: reduce)").matches?(e(this,_o,"f").setFilled(),Promise.resolve()):new Promise((o=>{e(this,_o,"f").addEventListener("animationstart",(()=>{e(this,_o,"f").setFilled()})),e(this,_o,"f").addEventListener("animationend",(()=>{setTimeout(o,1e3)}))}))}}var Wo,Eo,Co,zo,Bo,Ao,Fo,$o,No,To,Uo,qo,Do,Io,Lo,Ho,jo,Oo,Po,Ro,Yo,Jo,Qo,Vo,Go,Ko,Xo,Zo,ot,tt,nt,it,et,st,lt,at,rt,ht,dt,ct,pt,ft,ut,mt,gt,wt,vt;go=new WeakMap,wo=new WeakMap,vo=new WeakMap,bo=new WeakMap,yo=new WeakMap,_o=new WeakMap,xo=new WeakMap,ko=new WeakMap,mo=new WeakSet,So=function(){const o=e(this,xo,"f"),t=e(this,bo,"f").src;e(this,yo,"f").textContent=o.charAt(0),e(this,yo,"f").ariaLabel=o,e(this,ko,"f")&&e(this,ko,"f")!==t?(e(this,bo,"f").src=e(this,ko,"f"),e(this,bo,"f").alt=o,e(this,vo,"f").classList.remove("store-logo-logo-wrapper--text"),e(this,vo,"f").classList.add("store-logo-logo-wrapper--image")):e(this,ko,"f")||(e(this,vo,"f").classList.remove("store-logo-logo-wrapper--image"),e(this,vo,"f").classList.add("store-logo-logo-wrapper--text"))},customElements.get("store-logo")||customElements.define("store-logo",Mo),function(o){o.Closed="closed",o.Mounting="mounting",o.Open="open"}(vt||(vt={}));class bt extends g{constructor(){super(),Wo.add(this),Eo.set(this,void 0),Co.set(this,w()),zo.set(this,""),Bo.set(this,"2"),Ao.set(this,window.location.origin),Fo.set(this,!1),$o.set(this,new v({elementName:"shop-follow-button",analyticsTraceId:e(this,Co,"f")})),No.set(this,void 0),To.set(this,void 0),Uo.set(this,!1),qo.set(this,null),Do.set(this,void 0),Io.set(this,void 0),Lo.set(this,void 0),Ho.set(this,void 0),jo.set(this,void 0),Oo.set(this,void 0),Po.set(this,void 0),Ro.set(this,void 0),Yo.set(this,vt.Closed),Jo.set(this,void 0),Qo.set(this,void 0),Vo.set(this,void 0),Go.set(this,null),Ko.set(this,(()=>{e(this,Wo,"m",at).call(this,!0)})),i(this,Eo,this.attachShadow({mode:"open"}),"f"),i(this,Uo,"true"===b("shop_followed"),"f")}static get observedAttributes(){return[y,_,x,k]}attributeChangedCallback(o,t,n){switch(o){case _:i(this,Bo,n,"f"),e(this,Wo,"m",at).call(this);break;case y:i(this,zo,n,"f"),e(this,Wo,"m",at).call(this);break;case x:i(this,Ao,n,"f"),S(e(this,Ao,"f"));break;case k:i(this,Fo,"true"===n,"f"),e(this,Wo,"m",at).call(this)}}connectedCallback(){return d(this,void 0,void 0,(function*(){this.subscribeToHub(M.UserStatusIdentity,e(this,Ko,"f")),yield e(this,Wo,"m",Xo).call(this),e(this,Wo,"m",Zo).call(this),e(this,Wo,"m",ot).call(this)}))}disconnectedCallback(){var o,t,n,i;this.unsubscribeAllFromHub(),null===(o=e(this,Io,"f"))||void 0===o||o.destroy(),null===(t=e(this,No,"f"))||void 0===t||t.disconnect(),null===(n=e(this,Ho,"f"))||void 0===n||n.destroy(),null===(i=e(this,jo,"f"))||void 0===i||i.destroy()}}Eo=new WeakMap,Co=new WeakMap,zo=new WeakMap,Bo=new WeakMap,Ao=new WeakMap,Fo=new WeakMap,$o=new WeakMap,No=new WeakMap,To=new WeakMap,Uo=new WeakMap,qo=new WeakMap,Do=new WeakMap,Io=new WeakMap,Lo=new WeakMap,Ho=new WeakMap,jo=new WeakMap,Oo=new WeakMap,Po=new WeakMap,Ro=new WeakMap,Yo=new WeakMap,Jo=new WeakMap,Qo=new WeakMap,Vo=new WeakMap,Go=new WeakMap,Ko=new WeakMap,Wo=new WeakSet,Xo=function(){return d(this,void 0,void 0,(function*(){try{i(this,Go,new u({["en"]:{follow_on_shop:{follow:"Follow on {shop}",following:"Following on {shop}",auth_modal:{title:"Follow on Shop",description:"Stay in the know—never miss a sale, restock, or order update."},following_modal:{title:"Visit {store} on Shop",subtitle:"Everything you need to shop, track, and pay—all in one place.",qr_header:"Scan to visit {store} on the Shop app",qr_alt_text:"Shop app QR code",continue:"Continue"},completed:{title:"You're following {store}",subtitle:"We've sent you an email with a link to download the Shop app."}},login_with_shop:{login:"Continue with {shop}",auth_modal:{login_title:"Sign in with Shop",login_title_with_store:"Sign in to {store} with Shop",login_description:"The easiest and most secure way to sign in to {store}—no password needed.",login_footer:"By continuing, your email address will be shared with {store}.",login_footer_with_name:"By continuing, your name and email address will be shared with {store}.",signup_title:"Create an account",signup_description:"Enter your phone number to create a Shop account.",signup_footer:"We'll send a code to your mobile number to confirm it's you.",login_sms_title:"Confirm it's you",login_sms_description:"Enter the code sent to {phoneNumber}",login_sms_footer:"By continuing, your email address will be shared with {store}.",login_email_title:"Confirm it’s you",login_email_description:"Enter the code sent to your email, {email}",login_email_footer:"By continuing, your email address will be shared with {store}."}},verified_email_auth:{auth_modal:{login_title:"Log in or sign up",signup_title:"Continue with Shop",signup_description:"Create a Shop account to sign in to {clientName}–no passwords needed"}},legal:{terms_of_service:"terms of service",privacy_policy:"privacy policy",terms:"terms",client:"See {clientName}’s {privacyPolicy} and {termsOfService}.",shop:{email:"By continuing, you agree to our {termsOfService} and your email address will be shared with {clientName}."}},customer_accounts:{remember_me:"Save my info securely with Shop to sign in faster everywhere",sign_up_page:{auth_modal:{login_title:"Continue with Shop",login_description:"Use your Shop account to sign in everywhere—no password needed.",login_sms_description:"Use your Shop account to sign in everywhere—no password needed.\r\n\r\nConfirm it's you, enter the code sent to {phoneNumber}",login_email_description:"Use your Shop account to sign in everywhere—no password needed.\r\n\r\nConfirm it's you, enter the code sent to your email, {email}"}}},payment_request:{auth_modal:{login_title:"Check out with Shop Pay",login_description:"The fastest way to check out with your securely saved information.",login_sms_title:"Confirm it's you",login_sms_description:"Enter the code sent to {phoneNumber} to securely use your saved information.",login_email_title:"Confirm it’s you",login_email_description:"Enter the code sent to your email, {email} to securely use your saved information."}}}}),"f")}catch(o){o instanceof Error&&m.notify(o)}return null}))},Zo=function(){i(this,To,function(o){const t=document.createElement("follow-on-shop-button");return o&&t.setAttribute("following",""),t}(e(this,Uo,"f")),"f"),e(this,Eo,"f").innerHTML=W,e(this,Eo,"f").appendChild(e(this,To,"f"))},ot=function(){var o;e(this,Wo,"m",dt).call(this,e(this,Uo,"f")),e(this,Wo,"m",ct).call(this),S(e(this,Ao,"f")),null===(o=e(this,To,"f"))||void 0===o||o.addEventListener("click",(()=>{var o;if(e(this,Fo,"f"))return i(this,Uo,!e(this,Uo,"f"),"f"),void(null===(o=e(this,To,"f"))||void 0===o||o.setFollowing({following:e(this,Uo,"f")}));e(this,Uo,"f")?(e(this,$o,"f").trackFollowingGetAppButtonPageImpression(),E()?e(this,Wo,"m",nt).call(this):e(this,Wo,"m",lt).call(this)):(e(this,$o,"f").trackFollowButtonClicked(),e(this,Wo,"m",tt).call(this))}))},tt=function(){e(this,Oo,"f")?e(this,Oo,"f").open():(i(this,Po,e(this,Wo,"m",it).call(this),"f"),i(this,Ro,po({}),"f"),e(this,Ro,"f").append(e(this,Wo,"m",et).call(this)),i(this,Ho,Q().withInnerHTML(W).build(),"f"),i(this,Oo,e(this,Ho,"f").sheetModal,"f"),e(this,Oo,"f").setAttribute(C,e(this,Co,"f")),e(this,Oo,"f").appendChild(e(this,Po,"f")),e(this,Oo,"f").appendChild(e(this,Ro,"f")),e(this,Oo,"f").addEventListener("modalcloserequest",e(this,Wo,"m",gt).bind(this)),i(this,Yo,vt.Mounting,"f"))},nt=function(){var o,t,n;return d(this,void 0,void 0,(function*(){if(!e(this,Jo,"f")){i(this,jo,Q().withInnerHTML(W).build(),"f"),i(this,Jo,e(this,jo,"f").sheetModal,"f"),e(this,Jo,"f").setAttribute("disable-popup","true");const s=yield e(this,Wo,"m",pt).call(this),l=null!==(o=null==s?void 0:s.name)&&void 0!==o?o:"the store",a=null===(t=e(this,Go,"f"))||void 0===t?void 0:t.translate("follow_on_shop.following_modal.title",{store:l}),r=null===(n=e(this,Go,"f"))||void 0===n?void 0:n.translate("follow_on_shop.following_modal.subtitle");i(this,Qo,po({title:a,description:r},!0),"f"),e(this,Jo,"f").appendChild(e(this,Qo,"f")),e(this,Jo,"f").appendChild(yield e(this,Wo,"m",st).call(this)),e(this,Jo,"f").addEventListener("modalcloserequest",(()=>d(this,void 0,void 0,(function*(){var o;e(this,Jo,"f")&&(yield e(this,Jo,"f").close()),null===(o=e(this,To,"f"))||void 0===o||o.setFocused()})))),a&&e(this,Jo,"f").setAttribute("title",a)}e(this,Jo,"f").open(),e(this,$o,"f").trackFollowingGetAppButtonPageImpression()}))},it=function(){const o=document.createElement("store-logo");return e(this,Wo,"m",pt).call(this).then((t=>{o.update({name:(null==t?void 0:t.name)||"",logoSrc:(null==t?void 0:t.id)?`${z}/shops/${t.id}/logo?width=58`:""})})).catch((()=>{})),o},et=function(){var o;i(this,Do,document.createElement("iframe"),"f"),e(this,Do,"f").tabIndex=0,e(this,Wo,"m",at).call(this);const t=(null===(o=this.ownerDocument)||void 0===o?void 0:o.defaultView)||void 0;return i(this,Io,new B(new A(e(this,Do,"f")),[F,$,e(this,Ao,"f")],e(this,Wo,"m",wt).bind(this),t),"f"),N(e(this,Do,"f"),"allow","publickey-credentials-get *"),e(this,Do,"f")},st=function(){var o,t;return d(this,void 0,void 0,(function*(){const n=document.createElement("div"),i=yield e(this,Wo,"m",pt).call(this),s=null==i?void 0:i.id,l=null!==(t=null===(o=e(this,Go,"f"))||void 0===o?void 0:o.translate("follow_on_shop.following_modal.continue",{defaultValue:"Continue"}))&&void 0!==t?t:"",a=s?`https://shop.app/sid/${s}`:"#";return n.innerHTML=T(a,l),n.addEventListener("click",(()=>d(this,void 0,void 0,(function*(){var o;e(this,$o,"f").trackFollowingGetAppButtonClicked(),null===(o=e(this,Jo,"f"))||void 0===o||o.close()})))),n}))},lt=function(){var o,t,n,s,l,a,r;return d(this,void 0,void 0,(function*(){if(!e(this,Vo,"f")){i(this,Vo,document.createElement("div"),"f"),e(this,Vo,"f").classList.add("fos-tooltip","fos-tooltip-hidden");const h=yield e(this,Wo,"m",pt).call(this),d=null!==(o=null==h?void 0:h.name)&&void 0!==o?o:"the store",c=null!==(n=null===(t=e(this,Go,"f"))||void 0===t?void 0:t.translate("follow_on_shop.following_modal.qr_header",{store:d}))&&void 0!==n?n:"",p=null!==(l=null===(s=e(this,Go,"f"))||void 0===s?void 0:s.translate("follow_on_shop.following_modal.qr_alt_text"))&&void 0!==l?l:"",f=null==h?void 0:h.id,u=f?`${z}/qr/sid/${f}`:"#";e(this,Vo,"f").innerHTML=U(c,u,p),null===(a=e(this,Vo,"f").querySelector(".fos-tooltip-overlay"))||void 0===a||a.addEventListener("click",(()=>{var o;null===(o=e(this,Vo,"f"))||void 0===o||o.classList.toggle("fos-tooltip-hidden",!0)})),null===(r=e(this,Vo,"f"))||void 0===r||r.addEventListener("click",(()=>{var o;null===(o=e(this,Vo,"f"))||void 0===o||o.classList.toggle("fos-tooltip-hidden",!0)})),e(this,Eo,"f").appendChild(e(this,Vo,"f"))}e(this,Vo,"f").classList.toggle("fos-tooltip-hidden",!1)}))},at=function(o){if(e(this,Do,"f")){const t={clientId:e(this,zo,"f")},n=q({version:e(this,Bo,"f"),analyticsTraceId:e(this,Co,"f"),flow:D.Follow,oauthParams:t});e(this,Wo,"m",rt).call(this),N(e(this,Do,"f"),"src",n,o),m.leaveBreadcrumb("Iframe url updated",{authorizeUrl:n},"state")}},rt=function(){e(this,Wo,"m",ht).call(this),i(this,Lo,setTimeout((()=>{const o=H.temporarilyUnavailable;this.dispatchCustomEvent("error",{message:o.message,code:o.code}),e(this,Wo,"m",ht).call(this)}),I),"f")},ht=function(){e(this,Lo,"f")&&(clearTimeout(e(this,Lo,"f")),i(this,Lo,void 0,"f"))},dt=function(o){e(this,$o,"f").trackFollowButtonPageImpression(o)},ct=function(){i(this,No,new IntersectionObserver((o=>{var t;for(const{isIntersecting:n}of o)n&&(null===(t=e(this,No,"f"))||void 0===t||t.disconnect(),e(this,$o,"f").trackFollowButtonInViewport())})),"f"),e(this,No,"f").observe(e(this,To,"f"))},pt=function(){return d(this,void 0,void 0,(function*(){return e(this,qo,"f")||i(this,qo,yield L(e(this,Ao,"f")),"f"),e(this,qo,"f")}))},ft=function({loggedIn:o,shouldFinalizeLogin:t}){var n,s,l,a;return d(this,void 0,void 0,(function*(){const r=new Date;r.setTime(r.getTime()+31536e6),document.cookie=`shop_followed=true;expires=${r.toUTCString()};path=/`,o&&(t&&j(e(this,Ao,"f"),(o=>{m.notify(new Error(o))})),this.publishToHub(M.UserStatusIdentity)),yield null===(n=e(this,Po,"f"))||void 0===n?void 0:n.setFavorited(),yield null===(s=e(this,Oo,"f"))||void 0===s?void 0:s.close(),null===(l=e(this,Io,"f"))||void 0===l||l.destroy(),null===(a=e(this,To,"f"))||void 0===a||a.setFollowing({following:!0}),i(this,Uo,!0,"f"),e(this,Wo,"m",dt).call(this,!0)}))},ut=function(o,t,n){e(this,Wo,"m",ht).call(this),this.dispatchCustomEvent("error",{code:o,message:t,email:n})},mt=function({clientName:o,logoSrc:t}){return d(this,void 0,void 0,(function*(){(o||t)&&e(this,Po,"f").update({name:o,logoSrc:t}),e(this,Yo,"f")===vt.Mounting&&(e(this,Oo,"f").open(),i(this,Yo,vt.Open,"f"),e(this,Wo,"m",ht).call(this))}))},gt=function(){var o;return d(this,void 0,void 0,(function*(){e(this,Oo,"f")&&(yield e(this,Oo,"f").close()),null===(o=e(this,To,"f"))||void 0===o||o.setFocused()}))},wt=function(o){var t,n,i,s;switch(o.type){case"loaded":e(this,Wo,"m",mt).call(this,o);break;case"resize_iframe":e(this,Do,"f").style.height=`${o.height}px`,e(this,Do,"f").style.width=`${o.width}px`;break;case"completed":e(this,Wo,"m",ft).call(this,o);break;case"error":e(this,Wo,"m",ut).call(this,o.code,o.message,o.email);break;case"content":null===(t=e(this,Oo,"f"))||void 0===t||t.setAttribute("title",o.title),null===(n=e(this,Ro,"f"))||void 0===n||n.update(o),null===(i=e(this,Po,"f"))||void 0===i||i.classList.toggle("hidden",o.authorizeState===l.Captcha);break;case"processing_status_updated":null===(s=e(this,Ro,"f"))||void 0===s||s.update(o);break;case"close_requested":e(this,Wo,"m",gt).call(this)}},O()&&(P({bundle:"loginButton",bundleLocale:"en"}),R(),o("shop-follow-button",bt),Y(),o("shop-swirl",J));
//# sourceMappingURL=client.login-button_2ea8e6f1.en.esm.js.map