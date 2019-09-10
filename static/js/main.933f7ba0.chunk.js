(window["webpackJsonpreact-pie3d-demo"]=window["webpackJsonpreact-pie3d-demo"]||[]).push([[0],{34:function(e,t,a){e.exports=a(58)},39:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(15),r=a.n(l),c=(a(39),a(11)),i=a(87),s=a(88),m=a(86),u=a(92),p=a(30),h=a(85),b=a(84),g=a(90),E=a(91),d=a(89),S=a(59),w={marginLeft:20,width:"90%"},f=function(e){var t=e.config,a=t.angle,o=t.height,l=t.ir,r=t.moveDistance,c=t.showTooltips,i=t.size,s=t.stroke,m=t.strokeWidth,u=t.tooltipShowName,p=t.tooltipShowPercentage,f=t.tooltipShowValue,v=e.setAngle,j=e.setHeight,O=e.setIr,k=e.setMoveDistance,y=e.setShowTooltips,T=e.setSize,C=e.setStrokeWidth,P=e.setShowTooltipLabel,D=e.setShowTooltipValue,L=e.setShowTooltipPercentage,V=e.setStrokeColor;return n.a.createElement("form",null,n.a.createElement("div",{style:w},n.a.createElement(S.a,{gutterBottom:!0},"Angle:"),n.a.createElement(E.a,{defaultValue:a,onChange:function(e,t){return v(t)},step:1,marks:!0,min:0,max:90,valueLabelDisplay:"auto"})),n.a.createElement("div",{style:w},n.a.createElement(S.a,{gutterBottom:!0},"Hight:"),n.a.createElement(E.a,{defaultValue:o,onChange:function(e,t){return j(t)},step:1,marks:!0,min:0,max:90,valueLabelDisplay:"auto"})),n.a.createElement("div",{style:w},n.a.createElement(S.a,{gutterBottom:!0},"IR:"),n.a.createElement(E.a,{defaultValue:l,onChange:function(e,t){return O(t)},step:.05,marks:!0,min:0,max:1,valueLabelDisplay:"auto"})),n.a.createElement("div",{style:w},n.a.createElement(S.a,{gutterBottom:!0},"Move Distance:"),n.a.createElement(E.a,{defaultValue:r,onChange:function(e,t){return k(t)},step:.05,marks:!0,min:0,max:1,valueLabelDisplay:"auto"})),n.a.createElement("div",{style:w},n.a.createElement(S.a,{gutterBottom:!0},"Size:"),n.a.createElement(E.a,{defaultValue:i,onChange:function(e,t){return T(t)},step:.05,marks:!0,min:0,max:1,valueLabelDisplay:"auto"})),n.a.createElement("div",{style:w},n.a.createElement(S.a,{gutterBottom:!0},"Stroke Size:"),n.a.createElement(E.a,{defaultValue:m,onChange:function(e,t){return C(t)},step:.05,marks:!0,min:0,max:10,valueLabelDisplay:"auto"})),n.a.createElement(b.a,{row:!0},n.a.createElement(h.a,{control:n.a.createElement(d.a,{checked:c,onChange:function(){return y(!c)},color:"primary"}),label:"Show Tooltips:",labelPlacement:"start"}),n.a.createElement(h.a,{control:n.a.createElement(d.a,{checked:u,onChange:function(){return P(!u)},color:"primary"}),label:"Show Tooltip Label:",labelPlacement:"start"})),n.a.createElement(b.a,{row:!0},n.a.createElement(h.a,{control:n.a.createElement(d.a,{checked:f,onChange:function(){return D(!f)},color:"primary"}),label:"Show Tooltip Value:",labelPlacement:"start"}),n.a.createElement(h.a,{control:n.a.createElement(d.a,{checked:p,onChange:function(){return L(!p)},color:"primary"}),label:"Show Tooltip Percentage:",labelPlacement:"start"})),n.a.createElement(b.a,{row:!0},n.a.createElement(h.a,{control:n.a.createElement(g.a,{placeholder:"color",value:s,onChange:function(e){return V(e.target.value)},style:{marginLeft:15}}),label:"Stroke Color:",labelPlacement:"start"})))},v=[{value:5,label:"Apples"},{value:8,label:"Oranges"},{value:3,label:"Bananas"},{value:5,label:"Plums"},{value:2,label:"Pineapples"},{value:3,label:"Lemons"}],j=Object(m.a)((function(e){return Object(u.a)({control:{padding:e.spacing(2)},paper:{height:500,marginTop:50,width:600},root:{flexGrow:1}})})),O=function(){var e=Object(o.useState)(40),t=Object(c.a)(e,2),a=t[0],l=t[1],r=Object(o.useState)(40),m=Object(c.a)(r,2),u=m[0],h=m[1],b=Object(o.useState)(.6),g=Object(c.a)(b,2),E=g[0],d=g[1],S=Object(o.useState)(.2),w=Object(c.a)(S,2),O=w[0],k=w[1],y=Object(o.useState)(!0),T=Object(c.a)(y,2),C=T[0],P=T[1],D=Object(o.useState)(.8),L=Object(c.a)(D,2),V=L[0],x=L[1],B=Object(o.useState)(1),z=Object(c.a)(B,2),W=z[0],N=z[1],A=Object(o.useState)(!0),I=Object(c.a)(A,2),H=I[0],M=I[1],J=Object(o.useState)(!0),G=Object(c.a)(J,2),R=G[0],$=G[1],q=Object(o.useState)(!0),F=Object(c.a)(q,2),K=F[0],Q=F[1],U=Object(o.useState)("#fff"),X=Object(c.a)(U,2),Y=X[0],Z=X[1],_=j(),ee={angle:a,height:u,ir:E,moveDistance:O,showTooltips:C,size:V,stroke:Y,strokeWidth:W,tooltipShowName:H,tooltipShowPercentage:R,tooltipShowValue:K};return n.a.createElement(i.a,{container:!0,className:_.root,spacing:2},n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(i.a,{container:!0,justify:"center",spacing:2},n.a.createElement(i.a,{item:!0},n.a.createElement(s.a,{className:_.paper},n.a.createElement(p.Pie3D,{config:ee,data:v}))),n.a.createElement(i.a,{item:!0},n.a.createElement(s.a,{className:_.paper},n.a.createElement(f,{config:ee,setAngle:l,setHeight:h,setIr:d,setMoveDistance:k,setShowTooltips:P,setSize:x,setStrokeWidth:N,setShowTooltipLabel:M,setShowTooltipValue:Q,setShowTooltipPercentage:$,setStrokeColor:Z}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.933f7ba0.chunk.js.map