(this["webpackJsonpsocket-io-client"]=this["webpackJsonpsocket-io-client"]||[]).push([[0],{126:function(e,t){},137:function(e,t,a){},138:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=a(13),i=a(59),s=a.n(i),m=a(61),u=a(45),f=a(10);function E(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],o=a[1];return r.a.createElement(m.a,null,r.a.createElement(u.a,{as:"textarea","aria-label":"send",style:{resize:"none"},value:l,onChange:function(e){o(e.target.value)}}),r.a.createElement(m.a.Append,null,r.a.createElement(f.a,{variant:"info",style:{width:"100px"},onClick:function(){e.send(l),o("")}},e.btnText)))}var h=a(63),p=a(6);function d(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(h.a,{onClose:function(){return e.setShow(!1)},show:e.show,delay:3e3,autohide:!0},r.a.createElement(h.a.Body,null,"New Connection!"))))}var g=a(16),y=a(22),v=a(30),w=a(85),b=a(86),j=a(92),x=a(91),O=a(87),C=function(e){Object(j.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={copied:!1},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.CopyToClipboard,{text:this.props.text,onCopy:function(){return e.setState({copied:!0})}},r.a.createElement("button",null,"Copy")),this.state.copied?r.a.createElement("span",{style:{color:"red"}},"Copied."):null)}}]),a}(r.a.Component);function k(e){var t=[];return e.children.split("\n").forEach((function(e){t.push(r.a.createElement("pre",{style:{marginBottom:"0px"}},e+"\n"))})),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(v.a,{style:{marginBottom:"10px"}},r.a.createElement(v.a.Body,null,t,r.a.createElement(C,{text:t[0].props.children}))))}var R=a(88),N=a(89);a(137);function S(e){return r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(v.a,{style:{marginBottom:"10px"}},r.a.createElement(v.a.Img,{variant:"top",src:e.img})))}var M=a(21);a(138);function A(){var e=window.location.pathname;e.startsWith("/room/")&&(e=e.slice(6));var t=Object(n.useState)(s()("localhost:4001")),a=Object(c.a)(t,2),l=a[0],o=(a[1],Object(n.useState)(e)),i=Object(c.a)(o,2),m=i[0],u=(i[1],Object(n.useState)([])),f=Object(c.a)(u,2),h=f[0],v=f[1],w=Object(n.useState)(!1),b=Object(c.a)(w,2),j=b[0],x=b[1],O=Object(n.useRef)(null);function C(e){v(h.concat(r.a.createElement(k,null,e)))}function A(e){v(h.concat(r.a.createElement(S,{img:e})))}function B(){x(!0),console.log("show alert")}return Object(n.useEffect)((function(){return l.emit("join room",m),setTimeout((function(){l.emit("send join alert",m)}),500),function(){return l.disconnect()}}),[]),Object(n.useEffect)((function(){return l.on("textMessage",C),function(){return l.removeListener("textMessage",C)}}),[h]),Object(n.useEffect)((function(){return l.on("imgMessage",A),function(){return l.removeListener("imgMessage",A)}})),Object(n.useEffect)((function(){return l.on("newConnection",B),function(){return l.removeListener("newConnection",B)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("hr",{style:{opacity:"0"}}),r.a.createElement(d,{show:j,setShow:x}),h,r.a.createElement("hr",{style:{opacity:"0",marginTop:"78px"}}),r.a.createElement(y.a,{bg:"light",expand:"lg",fixed:"bottom"},r.a.createElement(g.a,null,r.a.createElement(p.a,{className:"justify-content-center",style:{width:"100%"}},r.a.createElement(M.a,{sm:3}),r.a.createElement(M.a,{sm:5,xs:10},r.a.createElement(E,{btnText:"Send",send:function(e){C(e),l.emit("textMessage",{text:e,room:m})}})),r.a.createElement(M.a,{sm:4,xs:2,className:"img-upload-icon",style:{marginTop:"8px",marginLeft:"-25px"}},r.a.createElement("h1",null,r.a.createElement("a",{href:"#",style:{color:"#148496",marginLeft:"15px"},onClick:function(){O.current.click()}},r.a.createElement(R.a,{icon:N.a})))))))),r.a.createElement("input",{hidden:!0,ref:O,id:"image-file",type:"file",accept:"image/*",onChange:function(e){if(e.target.value){var t=new FormData,a=O.current.files[0];t.append("file",a);try{fetch("localhost:4001/uploads",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){A(e.data),l.emit("imgMessage",{img:e.data,room:m})})).catch((function(e){return console.log(e),e}))}catch(e){console.log("Error in image upload...:",e)}}}}))}function B(){return r.a.createElement(g.a,{style:{"font-family":"Oswald"}},r.a.createElement(p.a,{className:"justify-content-center",style:{"text-transform":"uppercase"}},r.a.createElement("h1",null,"Welcome to QRty")),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement("p",null,"Easily share content between multiple devices")),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(f.a,{onClick:function(){window.location="/room/"+function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*n));return t}(6)},variant:"primary",size:"lg",style:{"margin-top":"20px","text-transform":"uppercase"}},"Create a Room")," "),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(f.a,{onClick:function(){window.location="joinroom"},variant:"primary",size:"lg",style:{"margin-top":"40px","text-transform":"uppercase"}},"Join a Room")," "),r.a.createElement(p.a,{className:"justify-content-center",style:{"margin-top":"40px"}},r.a.createElement("a",{href:"/infopage"},"About QRty")))}var L=a(32),T=a(33),J=a(31),Q=a(90),z=a.n(Q);var F=function(e){return r.a.createElement("div",{className:"QRCode"},r.a.createElement(z.a,{value:e.text,fgColor:"black",includeMargin:!0,renderAs:"svg",level:"H",size:150,bgColor:"white"}))};function W(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1],i=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{bg:"light",collapseOnSelect:!0,expand:"sm"},r.a.createElement(y.a.Brand,{href:"/"},r.a.createElement("img",{src:"/QRtyLogo.png",height:"40",className:"d-inline-block align-top",alt:"QRty logo"})),r.a.createElement(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement(T.a.Link,{href:"/infopage"},"About"),r.a.createElement(T.a.Link,{href:"/room/"+D(6)},"Create a Room"),r.a.createElement(T.a.Link,{href:"/joinroom"},"Join a Room")),e.room?r.a.createElement(T.a,null,r.a.createElement(f.a,{variant:"outline-secondary",onClick:function(){return o(!0)}},"Add Device")):null)),r.a.createElement(J.a,{show:l,onHide:i},r.a.createElement(J.a.Header,{closeButton:!0},r.a.createElement(J.a.Title,null,"Add Device")),r.a.createElement(J.a.Body,null,r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(F,{text:""+window.location})),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement("h2",null,e.room.slice(0).split("").join(" ")))),r.a.createElement(J.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:i},"Close"))))}function D(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*n));return t}function H(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null),l=Object(n.useRef)(null),o=Object(n.useRef)(null),c=Object(n.useRef)(null),i=[e,t,a,l,o,c];Object(n.useEffect)((function(){e.current.focus()}),[]);for(var s=[],m=function(e){s.push(r.a.createElement(L.a.Group,{as:M.a,controlId:"roomID-"+e},r.a.createElement(L.a.Control,{ref:i[e],style:{height:"150px",fontSize:"60px",textAlign:"center"},onChange:function(t){""!=t.target.value?(t.target.value.length>1&&(t.target.value=t.target.value[t.target.value.length-1]),e<5&&i[e+1].current.focus()):e>0&&i[e-1].current.focus()},onKeyDown:function(t){8==t.keyCode&&e>0&&(t.target.value="",i[e-1].current.focus())}})))},u=0;u<6;u++)m(u);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{fontFamily:"Oswald"}},r.a.createElement(p.a,{className:"justify-content-center",style:{"text-transform":"uppercase"}},r.a.createElement("h1",null,"Join a Room")),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement("p",null,"Enter the 6-character room code below:")),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(L.a,null,r.a.createElement(L.a.Row,null,s),r.a.createElement(L.a.Row,{className:"justify-content-center"},r.a.createElement(f.a,{size:"lg",style:{height:"50px"},block:!0,onClick:function(){for(var e="room/",t=0;t<6;t++)e+=i[t].current.value;11==e.length&&(window.location="/"+e)}},"Join"))))))}function I(){return r.a.createElement(g.a,{style:{"font-family":"Oswald"}},r.a.createElement(p.a,{className:"justify-content-center",style:{"text-transform":"uppercase"}},r.a.createElement("h1",null,"Welcome to QRty!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement("h4",null,"How to Create a Room:")),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement("ul",null,r.a.createElement("li",null,"When you click the Create a Room button you will have created a private room to store your text and images."),r.a.createElement("li",null,"You can invite friends to your room with the 6 digits at the end of the URL"),r.a.createElement("li",null,"If you click the Add Device button in the upper right hand corner, you will see a QR code and your room code "),r.a.createElement("li",null,"You can scan this QR code on mobile devices and then view your text and images across platforms"),r.a.createElement("li",null,"You can also upload images or text from that new device and it will appear on other devices in the same room"))),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(f.a,{onClick:function(){window.location="/room/"+function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*n));return t}(6)},variant:"primary",size:"lg",style:{"margin-top":"20px","text-transform":"uppercase"}},"Create a Room")," "),r.a.createElement(p.a,null,r.a.createElement("p",null,"   ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement("h4",null,"How to Join a Room:")),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement("ul",null,r.a.createElement("li",null,"To join a room you will need either the 6-digit code or the QR code"),r.a.createElement("li",null,"After clicking the Join a Room button, simply enter the code and you will see live updates across platforms"))),r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(f.a,{onClick:function(){window.location="joinroom"},variant:"primary",size:"lg",style:{"margin-top":"40px","text-transform":"uppercase"}},"Join a Room")," "))}var Y=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=(t[0],t[1],r.a.createElement(A,null)),l="";switch(window.location.pathname){case"/":a=r.a.createElement(B,null);break;case"/joinroom":a=r.a.createElement(H,null);break;case"/infopage":a=r.a.createElement(I,null);break;default:l=window.location.pathname.startsWith("/room/")?window.location.pathname.slice(6):window.location.pathname}return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{room:l}),a,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oswald",rel:"stylesheet"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(144);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(145)}},[[93,1,2]]]);
//# sourceMappingURL=main.857007ef.chunk.js.map