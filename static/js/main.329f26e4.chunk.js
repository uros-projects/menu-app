(this["webpackJsonpmenu-app"]=this["webpackJsonpmenu-app"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var c=i(0),a=i(1),r=i.n(a),n=i(6),s=i.n(n),o=i(5),l=i(7),d=function(e){var t=e.items;return Object(c.jsx)("div",{className:"section-center",children:t.map((function(e){var t=e.id,i=e.title,a=e.price,r=e.img,n=e.desc;return Object(c.jsxs)("article",{className:"menu-item",children:[Object(c.jsx)("img",{src:"".concat("/menu-app","/images/").concat(r),alt:i,className:"photo"}),Object(c.jsxs)("div",{className:"item-info",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{children:i}),Object(c.jsxs)("h4",{className:"price",children:["$",a]})]}),Object(c.jsx)("p",{className:"item-text",children:n})]})]},t)}))})},m=function(e){var t=e.categories,i=e.filterItems;return Object(c.jsx)("div",{className:"btn-container",children:t.map((function(e,t){return Object(c.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return i(e)},children:e},t)}))})},u=[{id:1,title:"buttermilk pancakes",category:"breakfast",price:15.99,img:"item-1.jpeg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"diner double",category:"lunch",price:13.99,img:"item-2.jpeg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"godzilla milkshake",category:"shakes",price:6.99,img:"item-3.jpeg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"country delight",category:"breakfast",price:20.99,img:"item-4.jpeg",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"egg attack",category:"lunch",price:22.99,img:"item-5.jpeg",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"oreo dream",category:"shakes",price:18.99,img:"item-6.jpeg",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"bacon overflow",category:"breakfast",price:8.99,img:"item-7.jpeg",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"american classic",category:"lunch",price:12.99,img:"item-8.jpeg",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"quarantine buddy",category:"shakes",price:16.99,img:"item-9.jpeg",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}],b=["all"].concat(Object(l.a)(new Set(u.map((function(e){return e.category})))));var g=function(){var e=Object(a.useState)(u),t=Object(o.a)(e,2),i=t[0],r=t[1],n=Object(a.useState)(b),s=Object(o.a)(n,2),l=s[0];return s[1],Object(c.jsx)("main",{children:Object(c.jsxs)("section",{className:"menu section",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"our menu"}),Object(c.jsx)("div",{className:"underline"})]}),Object(c.jsx)(m,{categories:l,filterItems:function(e){if("all"!==e){var t=u.filter((function(t){return t.category===e}));r(t)}else r(u)}}),Object(c.jsx)(d,{items:i})]})})};i(13);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.329f26e4.chunk.js.map