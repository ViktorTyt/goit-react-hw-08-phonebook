"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[230],{5230:function(n,e,r){r.r(e),r.d(e,{default:function(){return on}});var t,o,i,a,s,c,l,d,u,p,h,x,f,m,g,b,w,Z,j,v=r(5861),y=r(8152),k=r(7757),z=r.n(k),C=r(168),L=r(6088),S=r(1439),_=L.Z.div(t||(t=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  justify-content: space-around;\n  box-shadow: ",";\n  margin-top: 72px;\n  margin-bottom: 24px;\n  border-radius: 4px;\n"])),S.r.shadows.regular),N=L.Z.form(o||(o=(0,C.Z)(["\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 16px 0;\n  background-color: ",";\n  border-radius: 4px;\n\n  box-shadow: ",";\n"])),S.r.colors.lightblue,S.r.shadows.large),A=L.Z.label(i||(i=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  margin-bottom: 12px;\n"]))),B=L.Z.span(a||(a=(0,C.Z)(["\n  font-size: ",";\n  font-weight: 500;\n  color: ",";\n  margin-bottom: 8px;\n"])),S.r.fontSizes.large,S.r.colors.white),V=L.Z.input(s||(s=(0,C.Z)(["\n  width: 240px;\n  height: 24px;\n  border-radius: 4px;\n  border: 2px solid ",";\n  transition: border-color ",";\n\n  :focus {\n    border: 2px solid ",";\n    outline: none;\n  }\n"])),S.r.colors.dark,S.r.animation.cubicBezierV1,S.r.colors.accent),Y=L.Z.button(c||(c=(0,C.Z)(["\n  width: 136px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  color: ",";\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 4px;\n  border: 2px solid ",";\n  transition: background-color ",";\n\n  :hover {\n    background-color: ",";\n  }\n  :active {\n    border: none;\n  }\n"])),S.r.colors.accent,S.r.colors.white,S.r.colors.dark,S.r.animation.cubicBezierV2,S.r.colors.darkOpange),F=r(2791),q=r(4772),D=r(1657),O=r(184),P=function(){var n=(0,F.useState)(""),e=(0,y.Z)(n,2),r=e[0],t=e[1],o=(0,F.useState)(""),i=(0,y.Z)(o,2),a=i[0],s=i[1],c=(0,D.wY)().data,l=(0,D.Tn)(),d=(0,y.Z)(l,2),u=d[0],p=d[1].isLoading,h=function(){var n=(0,v.Z)(z().mark((function n(e){var t;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t=r.trim().toLowerCase(),!c.find((function(n){return n.name.toLowerCase()===t}))){n.next=6;break}alert("".concat(r," is already in contacts")),n.next=8;break;case 6:return n.next=8,u({name:r.trim(),number:a});case 8:x();case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){t(""),s("")};return(0,O.jsx)(_,{children:(0,O.jsxs)(N,{action:"",autocomplete:"off",onSubmit:h,children:[(0,O.jsxs)(A,{children:[(0,O.jsx)(B,{children:"Name"}),(0,O.jsx)(V,{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){var e=n.target.value;return t(e)}})]}),(0,O.jsxs)(A,{children:[(0,O.jsx)(B,{children:"Number"}),(0,O.jsx)(V,{type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){var e=n.target.value;return s(e)}})]}),(0,O.jsx)(Y,{type:"submit",children:p?(0,O.jsx)(q.g4,{height:"56",width:"56",radius:"9",color:"white",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):"Add contact"})]})})},I=(L.Z.h2(l||(l=(0,C.Z)(["\n  font-size: 48px;\n  color: ",";\n"])),S.r.colors.dark),L.Z.p(d||(d=(0,C.Z)(["\n  font-size: ",";\n  font-weight: 500;\n  margin-bottom: 12px;\n"])),S.r.fontSizes.medium)),J=L.Z.ul(u||(u=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 12px;\n"]))),M=L.Z.li(p||(p=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 100%;\n  font-size: ",";\n  font-weight: 500;\n  color: ",";\n  background-color: ",";\n  border-radius: 4px;\n  box-shadow: ",";\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),S.r.fontSizes.medium,S.r.colors.white,S.r.colors.lightblue,S.r.shadows.regular),T=L.Z.div(h||(h=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n"]))),$=L.Z.span(x||(x=(0,C.Z)([""]))),E=L.Z.span(f||(f=(0,C.Z)([""]))),G=L.Z.button(m||(m=(0,C.Z)(["\n  width: 40px;\n  height: 24px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  // background-color: ",";\n  transition: background-color ",";\n\n  :hover {\n    background-color: ",";\n  }\n"])),S.r.colors.gray,S.r.animation.cubicBezierV2,S.r.colors.darkOpange),H=function(n){var e=n.id,r=n.name,t=n.number,o=(0,D.Nt)(),i=(0,y.Z)(o,2),a=i[0],s=i[1].isLoading,c=function(){var n=(0,v.Z)(z().mark((function n(e){return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(e);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,O.jsxs)(M,{children:[(0,O.jsxs)(T,{children:[(0,O.jsx)($,{children:r}),(0,O.jsxs)(E,{children:["tel: ",t]})]}),(0,O.jsx)(G,{type:"button",disabled:s,onClick:function(){return c(e)},children:s?(0,O.jsx)(q.g4,{height:"22",width:"22",radius:"9",color:"black",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):"Delete"})]})},K=L.Z.div(g||(g=(0,C.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),Q=function(){return(0,O.jsx)(K,{children:(0,O.jsx)(q.g4,{color:"#ff7700"})})},R=r(5048),U=function(){var n=(0,R.v9)((function(n){return n.users})).token;console.log(n);var e=(0,D.wY)(null,{skip:!n}),r=e.data,t=e.isLoading,o=(0,R.v9)((function(n){return n.filter.filter})),i=function(n,e){if(e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}return n}(r,o);return t?(0,O.jsx)(Q,{}):i.length>0?(0,O.jsx)(J,{children:i.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,O.jsx)(H,{id:e,name:r,number:t},e)}))}):""!==o&&0===i.length?(0,O.jsxs)(I,{children:[" ","No contact found"]}):(0,O.jsx)(I,{children:"Your Phonebook is empty"})},W=L.Z.div(b||(b=(0,C.Z)(["\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n  padding: 16px 0;\n  background-color: ",";\n  border-radius: 8px;\n  box-shadow: ",";\n"])),S.r.colors.lightblue,S.r.shadows.regular),X=L.Z.label(w||(w=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),nn=L.Z.span(Z||(Z=(0,C.Z)(["\n  font-size: ",";\n  font-weight: 500;\n  color: ",";\n  margin-bottom: 12px;\n"])),S.r.fontSizes.medium,S.r.colors.white),en=L.Z.input(j||(j=(0,C.Z)(["\n  width: 240px;\n  height: 24px;\n  margin-bottom: 16px;\n  border-radius: 4px;\n  border: 2px solid ",";\n  transition: border-color ",";\n\n  :focus {\n    border: 2px solid ",";\n    outline: none;\n  }\n"])),S.r.colors.dark,S.r.animation.cubicBezierV1,S.r.colors.accent),rn=r(6895),tn=function(){var n=(0,R.I0)(),e=(0,R.v9)((function(n){return n.filter.filter})),r=(0,D.wY)(),t=r.data,o=r.isLoading;return(!o&&t.length>1||e)&&(0,O.jsx)(W,{children:(0,O.jsxs)(X,{children:[(0,O.jsx)(nn,{children:"Find contacts by name :"}),(0,O.jsx)(en,{type:"text",name:"filter",value:e,onChange:function(e){return function(e){n((0,rn.h)(e))}(e.target.value)}})]})})},on=function(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(P,{}),(0,O.jsx)(tn,{}),(0,O.jsx)(U,{})]})}}}]);
//# sourceMappingURL=230.e30d9f69.chunk.js.map