(this["webpackJsonpface-detector"]=this["webpackJsonpface-detector"]||[]).push([[0],{111:function(t,e,n){},347:function(t,e,n){},386:function(t,e,n){},387:function(t,e,n){},388:function(t,e,n){},392:function(t,e,n){"use strict";n.r(e);var c=n(9),i=n.n(c),a=n(52),s=n.n(a),o=(n(111),n(98)),r=n(99),l=n(106),u=n(105),j=n(100),b=n.n(j),d=(n(347),n(53)),h=n.n(d),m=n(3),p=function(){return Object(m.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsx)("p",{className:"f4 link dim black underline pa3 pointer",children:"Sign Out"})})},x=n(101),f=n.n(x),g=(n(386),n.p+"static/media/AI.96a40194.png"),O=function(){return Object(m.jsx)("div",{className:"ma4 mt0",children:Object(m.jsx)(f.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(m.jsx)("div",{className:"Tilt-inner pa3",children:Object(m.jsx)("img",{alt:"logo",src:g})})})})},v=(n(387),function(t){var e=t.onInputChange,n=t.onButtonSubmit;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Give it a try!"}),Object(m.jsx)("div",{className:"center",children:Object(m.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(m.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:e}),Object(m.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),w=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"white f3",children:"Name, your current rank is ..."}),Object(m.jsx)("div",{className:"white f2",children:"#5"})]})},N=(n(388),function(t){var e=t.imageUrl,n=t.box;return Object(m.jsx)("div",{className:"center ma",children:Object(m.jsxs)("div",{className:"absolute mt2",children:[Object(m.jsx)("img",{id:"inputimage",alt:"",src:e,width:"500px",heigh:"auto"}),Object(m.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),y=n(102),C=new h.a.App({apiKey:"12c2ace8037f45df80c199ee9829a326"}),B={particles:{number:{value:30,density:{enable:!0,value_area:800}}}},S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).calculateFaceLocation=function(t){var e=t.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),c=Number(n.width),i=Number(n.height);return{leftCol:e.left_col*c,topRow:e.top_row*i,rightCol:c-e.right_col*c,bottomRow:i-e.bottom_row*i}},t.displayBox=function(e){t.setState({box:e})},t.onInputChange=function(e){t.setState({input:e.target.value})},t.onButtonSubmit=function(){t.setState({imageUrl:t.state.input}),C.models.predict(h.a.FACE_DETECT_MODEL,t.state.input).then((function(e){return t.displayBox(t.calculateFaceLocation(e))})).catch((function(t){return console.log(t)}))},t.state={input:"",imageUrl:"",box:{}},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(y.a,{children:Object(m.jsx)("title",{children:"AI Face Detector"})}),Object(m.jsx)(b.a,{className:"particles",params:B}),Object(m.jsx)(p,{}),Object(m.jsx)(O,{}),Object(m.jsx)(w,{}),Object(m.jsx)(v,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(m.jsx)(N,{box:this.state.box,imageUrl:this.state.imageUrl})]})}}]),n}(c.Component);n(391);s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[392,1,2]]]);
//# sourceMappingURL=main.bac78e76.chunk.js.map