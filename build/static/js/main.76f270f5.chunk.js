(this["webpackJsonpzones-layout"]=this["webpackJsonpzones-layout"]||[]).push([[0],{40:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var n=i(10),a=i.n(n),o=i(35),s=i.n(o),l=(i(40),i(25)),c=i(19),r=i(12),u=a.a.createContext({fullMapRef:{current:null},fullMapXPosition:0,fullMapYPosition:0,setFullMapXPosition:function(){},setFullMapYPosition:function(){},miniMapRef:{current:null},miniMapXPosition:0,miniMapYPosition:0,setMiniMapXPosition:function(){},setMiniMapYPosition:function(){},scale:1,setScale:function(){},scaleDelta:0,setScaleDelta:function(){}}),f=function(e){var t=e.children,i=Object(n.useRef)(null),o=Object(n.useRef)(null),s=a.a.useState(0),l=Object(c.a)(s,2),f=l[0],d=l[1],h=a.a.useState(0),j=Object(c.a)(h,2),p=j[0],b=j[1],M=a.a.useState(0),g=Object(c.a)(M,2),v=g[0],P=g[1],O=a.a.useState(0),x=Object(c.a)(O,2),m=x[0],w=x[1],S=a.a.useState(1),Y=Object(c.a)(S,2),X=Y[0],F=Y[1],R=a.a.useState(0),y=Object(c.a)(R,2),C=y[0],D=y[1];return Object(r.jsx)(u.Provider,{value:{fullMapRef:i,fullMapXPosition:f,fullMapYPosition:p,setFullMapXPosition:d,setFullMapYPosition:b,miniMapRef:o,miniMapXPosition:v,miniMapYPosition:m,setMiniMapXPosition:P,setMiniMapYPosition:w,scale:X,setScale:F,scaleDelta:C,setScaleDelta:D},children:t})};var d=i.p+"static/media/zones-plan.fbffd0f7.jpeg",h=i(36),j=function(){var e=a.a.useRef(null),t=a.a.useContext(u),i=t.miniMapRef,n=t.setMiniMapXPosition,o=t.setMiniMapYPosition,s=t.fullMapXPosition,c=t.fullMapYPosition,f=t.scale,d={width:window.innerWidth/f,height:window.innerHeight/f};return Object(r.jsx)(h.Stage,{width:271,height:271,ref:i,scaleX:.1355,scaleY:.1355,children:Object(r.jsx)(l.b,{id:"viewbox",children:Object(r.jsx)(l.c,{x:s,y:c,onDragMove:function(){if(null!==e.current){var t=e.current.getPosition(),i=t.x,a=t.y;n(-1*i),o(-1*a)}},draggable:!0,width:d.width,height:d.height,fill:"rgba(86, 204, 242, 0.1)",stroke:"#2d9cdb",strokeWidth:2,ref:e})})})},p=function(){var e=function(e,t){var i=a.a.useState({image:void 0,status:"loading"}),n=Object(c.a)(i,2),o=n[0],s=n[1];return a.a.useEffect((function(){if(e){var i=document.createElement("img");return i.addEventListener("load",n),i.addEventListener("error",a),t&&(i.crossOrigin=t),i.src=e,function(){i.removeEventListener("load",n),i.removeEventListener("error",a),s({image:void 0,status:"loading"})}}function n(){s({image:i,status:"loaded"})}function a(){s({image:void 0,status:"failed"})}}),[e]),o}(d).image,t=a.a.useContext(u),i=t.fullMapRef,n=t.setFullMapXPosition,o=t.setFullMapYPosition,s=t.scale,f=t.setScale;return Object(r.jsx)("div",{children:Object(r.jsx)(l.d,{width:2e3,height:2e3,scaleX:s,scaleY:s,onDragMove:function(){if(null!==i.current){var e=i.current.getPosition(),t=e.x,a=e.y;n(-t),o(-a)}},draggable:!0,onWheel:function(e){if(null!==i.current){var t=e.evt.deltaY>0?1.03*s:s/1.03;f(t)}},ref:i,children:Object(r.jsx)(l.b,{id:"stuffToShow",children:Object(r.jsx)(l.a,{image:e})})})})};var b=function(){return Object(r.jsx)(f,{children:Object(r.jsxs)("div",{style:{height:"100vh",width:"100vw",overflow:"hidden"},children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{style:{position:"absolute",top:10,left:10,backgroundColor:"#c1c1c1"},children:Object(r.jsx)(j,{})})]})})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,47)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),M()}},[[46,1,2]]]);
//# sourceMappingURL=main.76f270f5.chunk.js.map