(this["webpackJsonpthumbshot-fe"]=this["webpackJsonpthumbshot-fe"]||[]).push([[6],{1041:function(e,t,a){"use strict";a.r(t);var n,s=a(76),r=a(0),c=a.n(r),i=a(51),o=a.n(i),l=a(190),u=a(49),d=a(912),m=a.n(d),b=a(2),p=o.a.bind(m.a),j=function(e){var t=e.children,a=e.current,n=e.style,s=e.className;return Object(b.jsxs)("div",{className:p(m.a.wrapper,s),style:n,children:[Object(b.jsx)("div",{className:m.a.steps,children:c.a.Children.map(t,(function(e,t){return c.a.isValidElement(e)?c.a.cloneElement(e,{current:a,index:t}):e}))}),Object(b.jsx)("div",{className:m.a.divider})]})};!function(e){e.PAST="PAST",e.CURRENT="CURRENT",e.FUTURE="FUTURE"}(n||(n={}));var f=a(913),_=a.n(f),h=o.a.bind(_.a),x=function(e){var t=e.title,a=e.current,s=void 0===a?0:a,r=e.index,c=void 0===r?0:r,i=e.numberOfSteps,o=void 0===i?0:i,l=function(e,t){return e===t?n.CURRENT:e>t?n.PAST:e<t?n.FUTURE:void 0}(s,c);return Object(b.jsxs)("div",{className:h("step-container"),children:[Object(b.jsx)("div",{className:h("img-container",o-1===c?"no-divider":""),children:Object(b.jsx)("div",{className:h("img","".concat(l.toLowerCase(),"-img"))})}),Object(b.jsx)("div",{className:h("title"),children:t})]})},g=a(867),O=a(163),v=a(386),w=a(10),N=a.n(w),S=a(19),y=a(1038),E=a(420),k=a(821),B=a(1039),P=a(390),A=a.p+"static/media/play.3ec3864f.webp",C=a(914),F=a.n(C),T=o.a.bind(F.a),R=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,U=function(e){var t=e.updateStatus,a=y.a.useForm(),n=Object(s.a)(a,1)[0],c=Object(u.c)().account,i=Object(r.useState)(!1),o=Object(s.a)(i,2),l=o[0],d=o[1],m=Object(r.useState)(!0),p=Object(s.a)(m,2),j=p[0],f=p[1],_=Object(r.useState)(!1),h=Object(s.a)(_,2),x=(h[0],h[1]),g=function(){var e=Object(S.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.getFieldError("email").length&&t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,d(!0),e.next=7,Object(P.c)(t);case 7:E.a.success({message:"Send Code Success",className:"notification-success"});case 8:return e.prev=8,d(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[3,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),O=Object(r.useCallback)(Object(S.a)(N.a.mark((function e(){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(P.a)(c);case 4:if(!(a=e.sent).isRegister){e.next=8;break}return window.location.href="https://game.moebius.mobi/",e.abrupt("return");case 8:t&&t(a.isRegister);case 9:case"end":return e.stop()}}),e)}))),[c]),v=function(){var e=Object(S.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,n.validateFields();case 4:return t=e.sent,e.next=7,Object(P.b)({openid:c,userName:t.email,passwd:t.password,captcha:t.code});case 7:return e.next=9,O();case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,11,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f(!0),O().finally((function(){f(!1)}))}),[O]),j?Object(b.jsx)(k.a,{style:{marginTop:"80px"}}):Object(b.jsxs)("div",{className:T("account-form"),children:[Object(b.jsx)("div",{className:T("title"),children:"Account setting"}),Object(b.jsxs)(y.a,{className:T("form"),form:n,autoComplete:"new-password",validateTrigger:["onChange","onBlur"],children:[Object(b.jsx)(y.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(b.jsx)(B.a.Search,{ref:function(e){null===e||void 0===e||e.focus()},placeholder:"Username/Email",onSearch:g,disabled:!c,loading:l,enterButton:"Send Code"})}),Object(b.jsx)(y.a.Item,{name:"password",rules:[{required:!0,message:"Please confirm your password!"},function(){return{validator:function(e,t){return R.test(t)?Promise.resolve():Promise.reject("The password must contain 6 to 16 letters and numbers")}}}],children:Object(b.jsx)(B.a.Password,{className:T("password-input"),placeholder:"Password",disabled:!c})}),Object(b.jsx)(y.a.Item,{name:"confirm",dependencies:["password"],rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(b.jsx)(B.a.Password,{className:T("password-input"),autoComplete:"new-password",disabled:!c,placeholder:"Confirm Password"})}),Object(b.jsx)(y.a.Item,{name:"code",rules:[{required:!0,message:"Please input your code!"}],children:Object(b.jsx)(B.a,{className:T("code-input"),disabled:!c,placeholder:"Code"})})]}),Object(b.jsx)("div",{className:T("submit-btn"),onClick:v,children:Object(b.jsx)("img",{src:A,alt:"play-icon"})})]})},G=a(915),J=a.n(G),q=o.a.bind(J.a),I=function(){return Object(b.jsxs)("div",{className:q("play"),children:[Object(b.jsx)("div",{className:q("info"),children:" Log in the game with your account and password"}),Object(b.jsx)("a",{className:q("btn"),target:"_blank",href:"https://game.moebius.mobi/",rel:"noreferrer",children:"play now"})]})},L=a(916),M=a.n(L),Z=o.a.bind(M.a);t.default=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(l.a)(),i=c.login,o=c.logout,d=Object(u.c)().account,m=Object(r.useState)(!1),p=Object(s.a)(m,2),f=p[0],_=p[1],h=[{title:"Link Wallet",content:Object(b.jsx)(v.a,{style:{marginTop:"177px"},login:i,logout:o,account:d,onDismiss:function(e){_(!!e)},connectName:"Add: "})},{title:"Set account",content:Object(b.jsx)(U,{updateStatus:function(e){_(e)}})},{title:"Play",content:Object(b.jsx)(I,{})}];return Object(r.useEffect)((function(){n(0)}),[d]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{}),Object(b.jsxs)("div",{className:Z("start-container"),children:[Object(b.jsx)(j,{current:a,className:"start-step",children:h.map((function(e,t){return Object(b.jsx)(x,{title:e.title,numberOfSteps:h.length},e.title)}))}),Object(b.jsx)("div",{className:Z("steps-content"),children:h[a].content}),Object(b.jsx)("div",{className:Z("steps-action"),children:a<h.length-1&&f&&Object(b.jsxs)("div",{className:Z("next-btn"),onClick:function(){n(a+1),_(!1)},children:["Next ",Object(b.jsx)(O.a,{className:Z("icon")})]})})]})]})}},844:function(e,t,a){e.exports={container:"BasicBg_container__zBOIm","logo-container":"BasicBg_logo-container__1qyFo",links:"BasicBg_links__2EiNB",telegram:"BasicBg_telegram__2flaS",discord:"BasicBg_discord__3Ja5o",medium:"BasicBg_medium__aA9-g",twitter:"BasicBg_twitter__3SBIw"}},867:function(e,t,a){"use strict";a(0);var n=a(51),s=a.n(n),r=a.p+"static/media/home-logo.c0162dbc.webp",c=a(844),i=a.n(c),o=a(2),l=s.a.bind(i.a);t.a=function(){return Object(o.jsxs)("div",{className:l("container"),children:[Object(o.jsx)("div",{className:l("logo-container"),children:Object(o.jsx)("img",{src:r,alt:"logo"})}),Object(o.jsxs)("div",{className:i.a.links,children:[Object(o.jsx)("a",{className:l("telegram"),href:" https://t.me/MoebiusOfficial",target:"_blank",rel:"noreferrer"}),Object(o.jsx)("a",{className:l("discord"),href:"https://discord.gg/2sJVGDGtsq",target:"_blank",rel:"noreferrer"}),Object(o.jsx)("a",{className:l("medium"),href:"https://medium.com/@MoebiusGame",target:"_blank",rel:"noreferrer"}),Object(o.jsx)("a",{className:l("twitter"),href:"https://twitter.com/MoebiusGame",target:"_blank",rel:"noreferrer"})]})]})}},912:function(e,t,a){e.exports={wrapper:"Steps_wrapper__2F1r-",steps:"Steps_steps__3a-Nc"}},913:function(e,t,a){e.exports={"step-container":"Step_step-container__2sosG","img-container":"Step_img-container__QESKL","current-img":"Step_current-img__2cE-3","past-img":"Step_past-img__2EFGE","future-img":"Step_future-img__2BKss","no-divider":"Step_no-divider__aAXRo",title:"Step_title__2vEJm"}},914:function(e,t,a){e.exports={"account-form":"AccountForm_account-form__3-jei",title:"AccountForm_title__3hMEJ",form:"AccountForm_form__UgewZ","submit-btn":"AccountForm_submit-btn__2YogH"}},915:function(e,t,a){e.exports={play:"Play_play__1g-H5",img:"Play_img__2EGRx",info:"Play_info__2ellr",btn:"Play_btn__3AA0d"}},916:function(e,t,a){e.exports={"start-container":"Start_start-container__1-jyf","steps-content":"Start_steps-content__XBZUa","steps-action":"Start_steps-action__2Ewnh","next-btn":"Start_next-btn__1g21x",icon:"Start_icon__1Ju1i"}}}]);