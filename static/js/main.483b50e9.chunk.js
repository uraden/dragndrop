(this["webpackJsonpdragndrop-table"]=this["webpackJsonpdragndrop-table"]||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var i,c=n(0),a=n.n(c),r=n(5),s=n.n(r),b=n(2),d=n(7),o=n(10),j=n(4),p=n(9),l=n(3),g=n.n(l),O=n(1),m=[{id:g()(),content:"First task",name:"Sam James",src:"https://i.ibb.co/LpN2Zz1/img1.webp"},{id:g()(),content:"Second task",name:"James Husky",src:"https://i.ibb.co/9Nb4shS/img2.png"},{id:g()(),content:"Third task",name:"Ronland Tiff",src:"https://i.ibb.co/86RgYz1/img3.png"},{id:g()(),content:"Fourth task",name:"Nicole Ann",src:"https://i.ibb.co/yYgsbW1/img4.png"},{id:g()(),content:"Fifth task",name:"Dann Kim",src:"https://i.ibb.co/G5B7XhM/img5.png"},{id:g()(),content:"Sixth task",name:"Vlad Suravov",src:"https://i.ibb.co/DbrtqLv/img6.webp"},{id:g()(),content:"Seventh task",name:"Nick Tito",src:"https://i.ibb.co/cJbqJ1x/img7.webp"}],h=(i={},Object(j.a)(i,g()(),{name:"Requested",items:m}),Object(j.a)(i,g()(),{name:"To do",items:[]}),Object(j.a)(i,g()(),{name:"In Review",items:[]}),Object(j.a)(i,g()(),{name:"Done",items:[]}),i);var u=function(){var e=Object(c.useState)(h),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(O.jsx)("div",{children:Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%"},children:Object(O.jsx)(p.a,{onDragEnd:function(e){return function(e,t,n){if(e.destination){var i=e.source,c=e.destination;if(i.droppableId!==c.droppableId){var a,r=t[i.droppableId],s=t[c.droppableId],p=Object(o.a)(r.items),l=Object(o.a)(s.items),g=p.splice(i.index,1),O=Object(d.a)(g,1)[0];l.splice(c.index,0,O),n(Object(b.a)(Object(b.a)({},t),{},(a={},Object(j.a)(a,i.droppableId,Object(b.a)(Object(b.a)({},r),{},{items:p})),Object(j.a)(a,c.droppableId,Object(b.a)(Object(b.a)({},s),{},{items:l})),a)))}else{var m=t[i.droppableId],h=Object(o.a)(m.items),u=h.splice(i.index,1),x=Object(d.a)(u,1)[0];h.splice(c.index,0,x),n(Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},i.droppableId,Object(b.a)(Object(b.a)({},m),{},{items:h}))))}}}(e,n,i)},children:Object.entries(n).map((function(e,t){var n=Object(d.a)(e,2),i=n[0],c=n[1];return Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsx)("h1",{children:c.name}),Object(O.jsx)("div",{style:{margin:10},children:Object(O.jsx)(p.c,{droppableId:i,children:function(e,t){return Object(O.jsxs)("div",Object(b.a)(Object(b.a)({},e.droppableProps),{},{ref:e.innerRef,style:{background:t.isDraggingOver?"lightgreen":"lightgrey",padding:4,width:250,minHeight:500},children:[c.items.map((function(e,t){return Object(O.jsx)(p.b,{draggableId:e.id,index:t,children:function(t,n){return Object(O.jsxs)("div",Object(b.a)(Object(b.a)(Object(b.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(b.a)(Object(b.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"50px",backgroundColor:n.isDragging?"#99d3f2":"#456C86",color:"white"},t.draggableProps.style),{},{fontSize:"26px"}),children:[e.content,Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("img",{src:e.src,width:"50",height:"50"}),Object(O.jsxs)("div",{style:{color:"#fce89d",paddingTop:"20px",fontSize:"20px",fontWeight:"bold"},children:["name: "," ",e.name]})]}))}},e.id)})),e.placeholder]}))}},i)})]},i)}))})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(u,{})}),document.getElementById("root")),x()}},[[29,1,2]]]);
//# sourceMappingURL=main.483b50e9.chunk.js.map