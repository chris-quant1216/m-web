(this["webpackJsonpthumbshot-fe"]=this["webpackJsonpthumbshot-fe"]||[]).push([[9],{1047:function(e,s,t){"use strict";t.r(s);var i=t(0),a=t(51),n=t.n(a),c=t(49),l=t(165),o=t(27),m=t.n(o),r=t(846),d=t.p+"static/media/rune.43b8a200.png",b=t.p+"static/media/bnb-logo.e7c25af3.webp",j=t(835),u=t.p+"static/media/wallet.94a9e8f6.webp",v=t(913),g=t.n(v),_=t(153),h=t(390),p=t(2),x=n.a.bind(g.a);s.default=function(){var e=Object(c.c)().account,s=Object(l.a)(),t=s.assets,a=s.runeList,n=s.userInfo,o=Object(i.useMemo)((function(){return e?"".concat(e.substring(0,6),"...").concat(e.substring(e.length-6)):null}),[e]),v=Object(i.useMemo)((function(){return new m.a(t.mobiNum).isLessThan(_.a.pow(6))?new m.a(t.mobiNum).toFormat(2)+" Mobi":Object(_.e)(t.mobiNum).toFormat(2)+"M Mobi"}),[t]);return Object(p.jsxs)("div",{className:x("assets-container"),children:[Object(p.jsx)("img",{className:x("wallet-img"),src:u,alt:"wallet-icon"}),Object(p.jsxs)("div",{className:x("wallet-address"),children:["Wallet Address\uff1a",o]}),Object(p.jsxs)("div",{className:x("panels"),children:[Object(p.jsxs)("div",{className:x("panel"),children:[Object(p.jsx)(r.a,{imgSrc:j.a,className:x("img"),imgStyle:{maxWidth:"80%",maxHeight:"80%"}}),Object(p.jsx)("div",{className:x("name"),children:v})]}),Object(p.jsxs)("div",{className:x("panel"),children:[Object(p.jsx)(r.a,{imgSrc:b,className:x("img"),imgStyle:{maxWidth:"50%"}}),Object(p.jsxs)("div",{className:x("name"),children:[new m.a(t.BNBNum).toFormat(2)," BNB"]})]}),Object(p.jsxs)("div",{className:x("panel"),children:[Object(p.jsx)(r.a,{className:x("img"),imgSrc:d,imgStyle:{maxWidth:"60%"}}),Object(p.jsxs)("div",{className:x("name"),children:[a.length," Rune"]})]})]}),!!(null===n||void 0===n?void 0:n.invite_code)&&Object(p.jsxs)("div",{className:x("invitation-link-container"),children:["My invitation link\uff1a",Object(p.jsx)(h.a,{toCopy:"http://www.moebius.mobi/start?inviteCode=".concat(null===n||void 0===n?void 0:n.invite_code),children:Object(p.jsx)("div",{style:{color:"#fff"},children:"Copy Link Address"})})]})]})}},835:function(e,s,t){"use strict";s.a=t.p+"static/media/mobi.e074bf3f.png"},846:function(e,s,t){"use strict";t(0);var i=t(51),a=t.n(i),n=t(847),c=t.n(n),l=t(2),o=a.a.bind(c.a);s.a=function(e){var s=e.imgSrc,t=e.imgAlt,i=e.containerStyle,a=void 0===i?{}:i,n=e.imgStyle,c=void 0===n?{}:n,m=e.className;return Object(l.jsx)("div",{className:o("img-container",m),style:a,children:Object(l.jsx)("img",{src:s,alt:t||"",style:c})})}},847:function(e,s,t){e.exports={"img-container":"ImgContainer_img-container__5q1aH"}},913:function(e,s,t){e.exports={"assets-container":"Assets_assets-container__3HSLj","wallet-img":"Assets_wallet-img__3vbij","wallet-address":"Assets_wallet-address__2ajGZ",panels:"Assets_panels__1pDXj",panel:"Assets_panel__3vvBa",name:"Assets_name__3zilX",img:"Assets_img__2Y4Ko","invitation-link-container":"Assets_invitation-link-container__247VE"}}}]);