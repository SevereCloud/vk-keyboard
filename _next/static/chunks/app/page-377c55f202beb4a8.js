(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2988:(t,e,n)=>{Promise.resolve().then(n.bind(n,3790))},3790:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>t0});var o=n(5155),a=n(2115),i=n(4335),c=n(4971),l=n(5920),s=n(6266),r=n(6723),h=n(2345),u=n(1368);class d{addButton(){this.isPossibleToAddButton&&this.buttons.push(new x)}constructor(){this.id=(0,u.A)(),this.buttons=new h.W([new x]),this.isPossibleToAddButton=new r.H.Computed(()=>this.buttons.length<5)}}var p=new WeakMap;class g{addRow(){this.buttons.length>=10||this.buttons.push(new d)}deleteSelectedButton(){let[t,e]=(0,c._)(this,p).get();if(1===this.buttons[t].buttons.length){this.buttons.splice(t,1),console.log("deleted row",t),this.selectedButton.set(this.buttons[Math.max(0,t-1)].buttons[0]),console.log(Math.max(0,t-1)),console.log(this.buttons[Math.max(0,t-1)].buttons[0]);return}this.buttons[t].buttons.splice(e,1),this.selectedButton.set(this.buttons[t].buttons[Math.max(0,e-1)])}changeSelectedButtonType(t){let e={text:x,open_link:y,location:w,vkpay:_,open_app:Y,callback:S}[t],[n,o]=(0,c._)(this,p).get(),a=new e;this.buttons[n].buttons[o]=a,this.selectedButton.set(a)}constructor(){(0,l._)(this,p,{writable:!0,value:void 0}),this.oneTime=new r.H.State(!1),this.inline=new r.H.State(!1),this.buttons=new h.W([new d]),this.selectedButton=new r.H.State(this.buttons[0].buttons[0]),(0,s._)(this,p,new r.H.Computed(()=>{let t=this.selectedButton.get();for(let e=0;e<this.buttons.length;e++){let n=this.buttons[e];for(let o=0;o<n.buttons.length;o++)if(n.buttons[o]===t)return[e,o]}throw Error("selectedButton not found")}))}}function b(t){let e=[];return void 0===t?e.push("label is required"):(t.length<1&&e.push("label should be at least 1 letters length"),t.length>40&&e.push("label should be not more than 40 letters length")),e}class v{constructor(){this.payload=new r.H.State(void 0),this.validatePayload=new r.H.Computed(()=>(function(t){let e=[];if(void 0===t||""===t)return e;t.length>255&&e.push("payload should be not more than 255 letters length");try{JSON.parse(t)}catch(t){e.push("payload contains incorrect JSON: ".concat(t))}return e})(this.payload.get()))}}class f{constructor(){this.color=new r.H.State("primary")}}class x extends f{constructor(...t){super(...t),this.id=(0,u.A)(),this.action=new m}}class m extends v{constructor(...t){super(...t),this.type="text",this.label=new r.H.State("Label"),this.validateLabel=new r.H.Computed(()=>b(this.label.get()))}}class y{constructor(){this.id=(0,u.A)(),this.action=new j}}class j extends v{constructor(...t){super(...t),this.type="open_link",this.label=new r.H.State("Label"),this.validateLabel=new r.H.Computed(()=>b(this.label.get())),this.link=new r.H.State("https://vk.com"),this.validateLink=new r.H.Computed(()=>{let t=this.payload.get(),e=[];if(void 0===t||""===t)return e;t.length>255&&e.push("payload should be not more than 255 letters length");try{JSON.parse(t)}catch(t){e.push("payload contains incorrect JSON ".concat(t))}return e})}}class w{constructor(){this.id=(0,u.A)(),this.action=new k}}class k extends v{constructor(...t){super(...t),this.type="location"}}class _{constructor(){this.id=(0,u.A)(),this.action=new C}}class C extends v{constructor(...t){super(...t),this.type="vkpay",this.hash=new r.H.State(""),this.validateHash=new r.H.Computed(()=>{let t=this.hash.get(),e=[];return 0==t.length&&e.push("hash should be at least 1 letters length"),t.length>500&&e.push("hash should be not more than 500 letters length"),e})}}class Y{constructor(){this.id=(0,u.A)(),this.action=new I}}class I extends v{constructor(...t){super(...t),this.type="open_app",this.label=new r.H.State("Label"),this.appId=new r.H.State(0),this.ownerId=new r.H.State(0),this.hash=new r.H.State(""),this.validateLabel=new r.H.Computed(()=>b(this.label.get()))}}class S extends f{constructor(...t){super(...t),this.id=(0,u.A)(),this.action=new H}}class H extends v{constructor(...t){super(...t),this.type="callback",this.label=new r.H.State("Label"),this.validateLabel=new r.H.Computed(()=>b(this.label.get()))}}var E=n(5050),A=n(5788),B=n(5879);function L(t){let{action:e}=t,n=(0,A.U)(e.validatePayload);return(0,E.Y)(i.eIh,{top:"Полезная нагрузка",htmlFor:"label",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,E.Y)(i.pde,{id:"label",type:"text",placeholder:"{...}",value:(0,B.$)(e.payload),onChange:t=>{e.payload.set(t.currentTarget.value)}})})}var F=n(9550);let N={primary:"var(--vkui--color_background_accent_themed)",secondary:"var(--vkui--color_background_secondary_alpha)",positive:"var(--vkui--color_background_positive)",negative:"var(--vkui--color_background_negative)"};function O(t){let{button:e}=t;return(0,E.Y)(i.eIh,{top:"Цвет",htmlFor:"color",children:(0,E.Y)(i.IzF,{id:"color",name:"color",value:(0,B.$)(e.color),onChange:t=>{e.color.set(t)},options:["primary","secondary","positive","negative"].map(t=>({label:(0,E.Y)(F.n,{fill:N[t],"aria-hidden":!1,"aria-label":t}),value:t}))})})}function T(t){let{button:e}=t,n=(0,A.U)(e.action.validateLabel);return(0,E.Y)(i.eIh,{top:"Текст кнопки",htmlFor:"label",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,E.Y)(i.pde,{id:"label",type:"text",placeholder:"Label",value:(0,B.$)(e.action.label),onChange:t=>{e.action.label.set(t.currentTarget.value)}})})}function M(t){let{button:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(T,{button:e}),(0,o.jsx)(L,{action:e.action}),(0,o.jsx)(O,{button:e})]})}var $=new WeakMap;class K{get(t){return(0,c._)(this,$).get(t)||0}add(t){let e=(0,c._)(this,$).get(t)||0;(0,c._)(this,$).set(t,e+1)}constructor(){(0,l._)(this,$,{writable:!0,value:void 0}),(0,s._)(this,$,new Map)}}var U=new WeakMap;class P{constructor(t){(0,l._)(this,U,{writable:!0,value:void 0}),this.code=new r.H.Computed(()=>{let t=[];(0,c._)(this,U).oneTime.get()&&(0,c._)(this,U).inline.get()&&t.push("one_time field is not available for inline keyboard\n");let e=0;return(0,c._)(this,U).buttons.forEach((n,o)=>{n.buttons.length<1&&t.push("the row ".concat(o," empty\n"));let a=new K;n.buttons.forEach((n,i)=>{e++,a.add(n.action.type);let c=e=>{t.push("button [".concat(o,"][").concat(i,"]: ").concat(e,"\n"))};n instanceof x?(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c)):n instanceof y?(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c),n.action.validateLink.get().forEach(c)):n instanceof w?n.action.validatePayload.get().forEach(c):n instanceof _?(n.action.validateHash.get().forEach(c),n.action.validatePayload.get().forEach(c)):n instanceof Y?(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c)):n instanceof S&&(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c))}),a.get("vkpay")&&n.buttons.length>1&&t.push("the row ".concat(o," with button of type vkpay can contain only 1 button(s)\n")),a.get("location")&&n.buttons.length>2&&t.push("the row ".concat(o," with button of type location can contain only 2 button(s)\n")),a.get("open_app")&&n.buttons.length>2&&t.push("the row ".concat(o," with button of type open_app can contain only 2 button(s)\n")),a.get("open_link")&&n.buttons.length>2&&t.push("the row ".concat(o," with button of type open_link can contain only 2 button(s)\n")),(0,c._)(this,U).inline.get(),n.buttons.length>5&&t.push("the row ".concat(o," contains too much columns (max 5)\n"))}),(0,c._)(this,U).inline.get()?((0,c._)(this,U).buttons.length>6&&t.push("buttons contain too much rows (max 6)\n"),e>10&&t.push("keyboard contains too much buttons (max 10)\n")):((0,c._)(this,U).buttons.length>10&&t.push("buttons contain too much rows (max 10)\n"),e>40&&t.push("keyboard contains too much buttons (max 40)\n")),t.join("\n")}),(0,s._)(this,U,t)}}function R(t){return void 0===t?"``":(t.replace("`","\\`"),"`".concat(t,"`"))}var z=new WeakMap;class J{constructor(t){(0,l._)(this,z,{writable:!0,value:void 0}),this.code=new r.H.Computed(()=>{let t="";return(t+='import "github.com/SevereCloud/vksdk/object"\n',t+="\n",t+="k := object.",(0,c._)(this,z).inline.get())?t+="NewMessagesKeyboardInline()\n":t+="NewMessagesKeyboard(".concat((0,c._)(this,z).oneTime.get()?"true":"false",")\n"),(0,c._)(this,z).buttons.forEach(e=>{t+="\n",t+="k.AddRow()\n",e.buttons.forEach(e=>{e instanceof x?(t+="k.AddTextButton(",t+="".concat(R(e.action.label.get()),", "),t+="".concat(R(e.action.payload.get()),", "),t+="".concat(R(e.color.get())),t+=")\n"):e instanceof y?(t+="k.AddOpenLinkButton(",t+="".concat(R(e.action.link.get()),", "),t+="".concat(R(e.action.label.get()),", "),t+="".concat(R(e.action.payload.get())),t+=")\n"):e instanceof w?(t+="k.AddLocationButton(",t+="".concat(R(e.action.payload.get())),t+=")\n"):e instanceof _?(t+="k.AddVKPayButton(",t+="".concat(R(e.action.payload.get()),", "),t+="".concat(R(e.action.hash.get())),t+=")\n"):e instanceof Y?(t+="k.AddVKAppsButton(",t+="".concat(e.action.appId.get(),", "),t+="".concat(e.action.ownerId.get(),", "),t+="".concat(R(e.action.payload.get()),", "),t+="".concat(R(e.action.label.get()),", "),t+="".concat(R(e.action.hash.get())),t+=")\n"):e instanceof S&&(t+="k.AddCallbackButton(",t+="".concat(R(e.action.label.get()),", "),t+="".concat(R(e.action.payload.get()),", "),t+="".concat(R(e.color.get())),t+=")\n")})}),t}),(0,s._)(this,z,t)}}var V=new WeakMap;class W{constructor(t){(0,l._)(this,V,{writable:!0,value:void 0}),this.minify=new r.H.State(!1),this.code=new r.H.Computed(()=>{let t={},e=(0,c._)(this,V).inline.get();return(0,c._)(this,V).oneTime.get()&&!e&&(t.one_time=!0),e&&(t.inline=!0),t.buttons=[],(0,c._)(this,V).buttons.forEach((e,n)=>{t.buttons.push([]),e.buttons.forEach(e=>{e instanceof x?t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),payload:e.action.payload.get()},color:e.color.get()}):e instanceof y?t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),link:e.action.link.get(),payload:e.action.payload.get()}}):e instanceof w?t.buttons[n].push({action:{type:e.action.type,payload:e.action.payload.get()}}):e instanceof _?t.buttons[n].push({action:{type:e.action.type,hash:e.action.hash.get(),payload:e.action.payload.get()}}):e instanceof Y?t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),app_id:e.action.appId.get(),owner_id:e.action.ownerId.get(),hash:e.action.hash.get(),payload:e.action.payload.get()}}):e instanceof S&&t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),payload:e.action.payload.get()},color:e.color.get()})})}),JSON.stringify(t,null,2*!this.minify.get())}),(0,s._)(this,V,t)}}function D(t){return void 0===t?"``":(t=t.replace("`","\\`"),"`".concat(t,"`"))}let G={secondary:"Keyboard.SECONDARY_COLOR",primary:"Keyboard.PRIMARY_COLOR",negative:"Keyboard.NEGATIVE_COLOR",positive:"Keyboard.POSITIVE_COLOR"};var q=new WeakMap;class X{constructor(t){(0,l._)(this,q,{writable:!0,value:void 0}),this.code=new r.H.Computed(()=>{let t="";return t+="import { Keyboard } from 'vk-io';\n",t+="\n",t+="const builder = Keyboard.builder();\n",t+="\n",t+="builder\n",t+=(0,c._)(this,q).inline.get()?"	.inline()\n":"",t+=(0,c._)(this,q).oneTime.get()?"	.oneTime()\n":"",(0,c._)(this,q).buttons.forEach((e,n)=>{n>0&&(t+="	.row()\n"),e.buttons.forEach(e=>{e instanceof x?(t+="	.textButton({\n",t+="		label: ".concat(D(e.action.label.get()),"\n"),t+="		payload: ".concat(D(e.action.payload.get()),"\n"),t+="		color: ".concat(G[e.color.get()],"\n"),t+="	})\n"):e instanceof y?(t+="	.urlButton({\n",t+="		label: ".concat(D(e.action.label.get()),"\n"),t+="		link: ".concat(D(e.action.link.get()),"\n"),t+="	})\n"):e instanceof w?(t+="	.locationRequestButton({\n",t+="		payload: ".concat(D(e.action.payload.get()),"\n"),t+="	})\n"):e instanceof _?(t+="	.payButton({\n",t+="		hash: ".concat(D(e.action.hash.get()),"\n"),t+="	})\n"):e instanceof Y?(t+="	.applicationButton({\n",t+="		label: ".concat(D(e.action.label.get()),"\n"),t+="		appId: ".concat(e.action.appId.get(),"\n"),t+="		ownerId: ".concat(e.action.ownerId.get(),"\n"),t+="		hash: ".concat(D(e.action.hash.get()),"\n"),t+="	})\n"):e instanceof S&&(t+="	.callbackButton({\n",t+="		label: ".concat(D(e.action.label.get()),"\n"),t+="		payload: ".concat(D(e.action.payload.get()),"\n"),t+="		color: ".concat(G[e.color.get()],"\n"),t+="	})\n")})}),t}),(0,s._)(this,q,t)}}let Z=new g,Q=new W(Z),tt=new J(Z),te=new X(Z),tn=new P(Z);function to(t){let{button:e}=t,n=(0,A.U)(e.action.validateLink);return(0,E.Y)(i.eIh,{top:"Ссылка",htmlFor:"link",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,E.Y)(i.pde,{id:"link",type:"text",placeholder:"https://vk.com",value:(0,B.$)(e.action.link),onChange:t=>{e.action.link.set(t.currentTarget.value)}})})}function ta(t){let{button:e}=t;return(0,E.FD)(a.Fragment,{children:[(0,E.Y)(T,{button:e}),(0,E.Y)(to,{button:e}),(0,E.Y)(L,{action:e.action})]})}function ti(t){let{button:e}=t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(L,{action:e.action})})}function tc(t){let{button:e}=t,n=(0,A.U)(e.action.validateHash);return(0,E.Y)(i.eIh,{top:"Параметры платежа VK Pay",htmlFor:"hash",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,E.Y)(i.pde,{id:"hash",type:"text",placeholder:"action=transfer-to-group&group_id=1&aid=10",value:(0,B.$)(e.action.hash),onChange:t=>{e.action.hash.set(t.currentTarget.value)}})})}function tl(t){let{button:e}=t;return(0,E.FD)(a.Fragment,{children:[(0,E.Y)(tc,{button:e}),(0,E.Y)(L,{action:e.action})]})}function ts(t){let{button:e}=t;return(0,E.Y)(i.eIh,{top:"Приложение",htmlFor:"appId",children:(0,E.Y)(i.pde,{id:"appId",type:"number",value:(0,B.$)(e.action.appId),onChange:t=>{e.action.appId.set(t.currentTarget.valueAsNumber)}})})}function tr(t){let{button:e}=t;return(0,E.Y)(i.eIh,{top:"Идентификатор сообщества",htmlFor:"ownerId",children:(0,E.Y)(i.pde,{id:"ownerId",type:"number",value:(0,B.$)(e.action.ownerId),onChange:t=>{e.action.ownerId.set(t.currentTarget.valueAsNumber)}})})}function th(t){let{button:e}=t;return(0,E.Y)(i.eIh,{top:"Хэш",htmlFor:"hash",children:(0,E.Y)(i.pde,{id:"hash",type:"text",value:(0,B.$)(e.action.hash),onChange:t=>{e.action.hash.set(t.currentTarget.value)}})})}function tu(t){let{button:e}=t;return(0,E.FD)(a.Fragment,{children:[(0,E.Y)(T,{button:e}),(0,E.Y)(ts,{button:e}),(0,E.Y)(tr,{button:e}),(0,E.Y)(th,{button:e}),(0,E.Y)(L,{action:e.action})]})}function td(t){let{button:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(T,{button:e}),(0,o.jsx)(L,{action:e.action}),(0,o.jsx)(O,{button:e})]})}function tp(t){let{button:e}=t;return(0,o.jsx)(i.eIh,{top:"Тип кнопки",htmlFor:"type",children:(0,o.jsx)(i.AeY,{id:"type",name:"type",value:e.action.type,onChange:t=>{Z.changeSelectedButtonType(t.currentTarget.value)},options:["text","open_link","location","vkpay","open_app","callback"].map(t=>({label:t,value:t}))})})}function tg(){let t=(0,A.U)(Z.selectedButton),e=null;return t instanceof x?e=(0,o.jsx)(M,{button:t}):t instanceof y?e=(0,o.jsx)(ta,{button:t}):t instanceof w?e=(0,o.jsx)(ti,{button:t}):t instanceof _?e=(0,o.jsx)(tl,{button:t}):t instanceof Y?e=(0,o.jsx)(tu,{button:t}):t instanceof S&&(e=(0,o.jsx)(td,{button:t})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(tp,{button:t}),e,(0,o.jsx)(i.DzN,{centered:!0,onClick:()=>Z.deleteSelectedButton(),appearance:"negative",children:"Удалить кнопку"})]})}var tb=n(726),tv=n(2921),tf=n(520),tx=n(4084),tm=n(2280);function ty(t){let{style:e,children:n="",...a}=t;return(0,o.jsx)(i.iau,{children:(0,o.jsx)(tb.A,{style:{...tm.A,...e},customStyle:{borderRadius:8,padding:16,margin:0},...a,children:n})})}function tj(){let t=(0,A.U)(Q.code);return(0,E.Y)(ty,{language:"json",children:t})}function tw(){return(0,E.Y)(i.Sc0,{checked:(0,B.$)(Q.minify),onChange:t=>Q.minify.set(t.target.checked),children:"Минифицировать"})}function tk(){let t=(0,A.U)(tt.code);return(0,o.jsx)(ty,{language:"go",children:t})}function t_(){return(0,o.jsx)(i.iau,{children:(0,o.jsxs)(i.EYj,{children:["Для модуля"," ",(0,o.jsx)(i.N_E,{href:"https://github.com/SevereCloud/vksdk",target:"_blank",children:"github.com/SevereCloud/vksdk"})]})})}function tC(){let t=(0,A.U)(tn.code);return(0,o.jsx)(ty,{children:t})}function tY(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(tC,{})})}function tI(){let t=(0,A.U)(te.code);return(0,o.jsx)(ty,{language:"javascript",children:t})}function tS(){return(0,o.jsx)(i.iau,{children:(0,o.jsxs)(i.EYj,{children:["Для модуля"," ",(0,o.jsx)(i.N_E,{href:"https://negezor.github.io/vk-io/ru/guide/keyboard.html",target:"_blank",children:"vk-io"})]})})}tb.A.registerLanguage("javascript",tv.A),tb.A.registerLanguage("go",tf.A),tb.A.registerLanguage("json",tx.A);let tH=["JSON","VK SDK (Golang)","VK-IO (Node.js)"],tE={JSON:function(){return(0,E.FD)(a.Fragment,{children:[(0,E.Y)(tw,{}),(0,E.Y)(tj,{})]})},"VK SDK (Golang)":function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t_,{}),(0,o.jsx)(tk,{})]})},"VK-IO (Node.js)":function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(tS,{}),(0,o.jsx)(tI,{})]})}};function tA(){let[t,e]=a.useState(tH[0]),n=tE[t];return(0,o.jsxs)(i.YJl,{header:(0,o.jsx)(i.Y9Y,{children:"Код"}),children:[(0,o.jsx)(i.tUM,{children:tH.map(n=>(0,o.jsx)(i.ORv,{selected:t===n,onClick:()=>e(n),children:n},n))}),(0,o.jsx)(i.KzX,{}),(0,o.jsx)(n,{})]})}function tB(){return(0,A.U)(tn.code)?(0,o.jsx)(i.YJl,{header:(0,o.jsx)(i.Y9Y,{children:"Ошибки"}),children:(0,o.jsx)(tY,{})}):(0,o.jsx)(tA,{})}function tL(t){return(0,o.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,...t,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0043 1.80469C5.39236 1.80469 1.66406 5.56047 1.66406 10.2069C1.66406 13.921 4.05291 17.0649 7.36688 18.1777C7.78121 18.2613 7.93298 17.9969 7.93298 17.7744C7.93298 17.5797 7.91932 16.912 7.91932 16.2163C5.59927 16.7172 5.11614 15.2147 5.11614 15.2147C4.74329 14.2409 4.19085 13.9907 4.19085 13.9907C3.4315 13.476 4.24616 13.476 4.24616 13.476C5.08848 13.5316 5.53047 14.3384 5.53047 14.3384C6.27599 15.6181 7.47733 15.2565 7.96063 15.0339C8.0296 14.4914 8.25068 14.1158 8.48542 13.9072C6.63501 13.7124 4.68815 12.9891 4.68815 9.76166C4.68815 8.84354 5.01934 8.09238 5.54413 7.50819C5.46133 7.29957 5.17128 6.43693 5.6271 5.28237C5.6271 5.28237 6.33131 5.05976 7.91915 6.14484C8.59896 5.96092 9.30004 5.86735 10.0043 5.86657C10.7085 5.86657 11.4264 5.96405 12.0893 6.14484C13.6773 5.05976 14.3815 5.28237 14.3815 5.28237C14.8373 6.43693 14.5471 7.29957 14.4643 7.50819C15.0029 8.09238 15.3204 8.84354 15.3204 9.76166C15.3204 12.9891 13.3736 13.6984 11.5093 13.9072C11.8132 14.1715 12.0754 14.6722 12.0754 15.4652C12.0754 16.5919 12.0618 17.4962 12.0618 17.7743C12.0618 17.9969 12.2137 18.2613 12.6279 18.1779C15.9418 17.0648 18.3307 13.921 18.3307 10.2069C18.3443 5.56047 14.6024 1.80469 10.0043 1.80469Z",fill:"currentColor"})})}var tF=n(6879);function tN(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=a.useMemo(()=>new r.H.Computed(t),e);return(0,A.U)(n)}var tO=n(7610);function tT(t){let{children:e,...n}=t;return(0,E.Y)(i.$nd,{before:(0,E.Y)(tO.L,{}),mode:"secondary",...n,children:(0,B.$)(e.action.label)})}var tM=n(5341),t$=n.n(tM),tK=n(4121);function tU(t){let{...e}=t;return(0,o.jsx)(i.$nd,{before:(0,o.jsx)(tK.k,{}),...e,children:"Отправить своё местоположение"})}function tP(t){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 72 24",width:72,height:24,id:"vk_pay_logo_72","aria-hidden":!0,...t,children:(0,o.jsxs)("g",{fill:"currentColor",children:[(0,o.jsx)("path",{d:"M34.1 22.367V6.723h1.829l.488 1.822a5.23 5.23 0 0 1 4.146-2.01c3.11 0 5.306 2.45 5.306 5.842 0 3.393-2.196 5.843-5.306 5.843a5.13 5.13 0 0 1-4.024-1.948v6.157h-2.44zm9.208-10.053c0-2.136-1.403-3.58-3.415-3.58s-3.415 1.507-3.415 3.58c0 2.136 1.402 3.581 3.415 3.581 2.073.063 3.415-1.445 3.415-3.58M56.723 11.624v6.282h-1.769l-.487-1.759c-.55.942-1.708 2.01-3.476 2.01-2.196 0-3.781-1.507-3.781-3.58s1.585-3.519 4.817-3.519h2.379c-.122-1.445-.854-2.45-2.196-2.45-1.097 0-1.83.628-2.195 1.32L47.82 9.55c.549-1.947 2.439-3.078 4.512-3.078 2.683.062 4.39 1.884 4.39 5.151m-2.44 1.382h-2.256c-1.83 0-2.439.628-2.439 1.445 0 .942.732 1.57 1.951 1.57 1.647.063 2.745-1.193 2.745-3.015M66.358 6.723h2.44L64.345 19.35c-.732 2.073-1.83 3.016-3.842 3.016h-1.646l-.183-2.262h2.012c.793 0 1.159-.314 1.464-1.194l.121-.314-4.817-11.812h2.561l3.232 8.105h.305z"}),(0,o.jsx)("path",{"fill-rule":"evenodd",d:"M15.135 0C20.379 0 23 0 24.648 1.696c1.646 1.634 1.646 4.398 1.646 9.801v1.006c0 5.403 0 8.104-1.646 9.8C23.062 24 20.379 24 15.135 24h-.976c-5.244 0-7.866 0-9.513-1.696C3 20.67 3 17.906 3 12.503v-1.006c0-5.403 0-8.104 1.646-9.8C6.232 0 8.915 0 14.16 0zm5.061 17.026h1.708c.487 0 .731-.251.487-.754-.182-.502-.731-1.256-1.463-2.073-.214-.295-.512-.589-.76-.833-.174-.172-.323-.32-.399-.424-.244-.314-.183-.44 0-.754 0 0 2.074-3.015 2.318-4.02.122-.377 0-.629-.488-.629H19.89c-.427 0-.61.252-.731.503 0 0-.854 2.199-2.074 3.581-.427.44-.549.565-.792.565-.061 0-.244-.125-.244-.502V8.23c0-.44-.122-.628-.488-.628h-2.683c-.244 0-.427.189-.427.377 0 .17.09.283.205.427.183.23.428.536.466 1.27v2.575c0 .566-.061.691-.305.691-.55 0-1.952-2.136-2.805-4.649-.122-.502-.305-.69-.732-.69H7.574c-.488 0-.61.25-.61.502 0 .44.549 2.764 2.683 5.78 1.402 2.073 3.354 3.204 5.183 3.204 1.098 0 1.22-.251 1.22-.691v-1.57c0-.503.06-.629.426-.629.244 0 .671.126 1.708 1.13.325.336.574.617.777.847.523.59.753.85 1.235.85","clip-rule":"evenodd"})]})})}function tR(t){let{...e}=t;return(0,o.jsx)(i.$nd,{after:(0,o.jsx)(tP,{width:55,height:16}),style:{lineHeight:0},...e,children:"Оплатить через"})}var tz=n(568);function tJ(t){let{children:e,...n}=t;return(0,E.Y)(i.$nd,{before:(0,E.Y)(tz.t,{}),mode:"secondary",...n,children:(0,B.$)(e.action.label)})}let tV={primary:{mode:"primary"},secondary:{mode:"secondary"},positive:{appearance:"positive"},negative:{appearance:"negative"}};function tW(t){let{children:e,...n}=t,o=(0,A.U)(e.color);return(0,E.Y)(i.$nd,{...tV[o],...n,children:(0,B.$)(e.action.label)})}function tD(t){let{children:e,...n}=t,o=(0,A.U)(e.color);return(0,E.Y)(i.$nd,{...tV[o],...n,children:(0,B.$)(e.action.label)})}function tG(t){let{children:e}=t,[n,i]=function(t){let e=(0,A.U)(Z.selectedButton),n=a.useCallback(()=>{Z.selectedButton.set(t)},[t]);return[e===t,n]}(e),c={className:n?t$().selected:void 0,stretched:!0,size:n?"s":"m",onClick:()=>i()};return e instanceof x?(0,o.jsx)(tW,{...c,children:e}):e instanceof y?(0,o.jsx)(tT,{...c,children:e}):e instanceof w?(0,o.jsx)(tU,{...c}):e instanceof _?(0,o.jsx)(tR,{...c}):e instanceof Y?(0,o.jsx)(tJ,{...c,children:e}):e instanceof S?(0,o.jsx)(tD,{...c,children:e}):null}function tq(){let t=(0,A.U)(Z.inline);return(0,o.jsx)(i.IzF,{id:"inline",name:"inline",value:t?"true":"false",onChange:t=>{Z.inline.set("true"===t)},options:[{value:"false",label:"Клавиатура"},{value:"true",label:"Инлайн клавиатура"}]})}function tX(){let t=(0,A.U)(Z.oneTime);return(0,A.U)(Z.inline)?null:(0,o.jsx)(i.Sc0,{checked:t,onChange:t=>Z.oneTime.set(t.target.checked),children:"Скрывать клавиатуру сразу"})}function tZ(){let t=tN(()=>[...Z.buttons]);return(0,o.jsxs)(o.Fragment,{children:[t.map(t=>(0,o.jsx)(tQ,{children:t},t.id)),(0,o.jsx)(i.$nd,{size:"m",onClick:()=>Z.addRow(),appearance:"accent-invariable",mode:"tertiary",stretched:!0,children:"Добавить строку"})]})}function tQ(t){let{children:e}=t,n=tN(()=>[...e.buttons]),a=(0,A.U)(e.isPossibleToAddButton);return(0,o.jsxs)(i.e2v,{mode:"horizontal",stretched:!0,children:[n.map(t=>(0,o.jsx)(tG,{children:t},t.id)),(0,o.jsx)(i.$nd,{size:"m",onClick:()=>e.addButton(),disabled:!a,appearance:"accent-invariable",mode:"tertiary",before:(0,o.jsx)(tF.p,{}),"aria-label":"Добавить кнопку",title:"Добавить кнопку"})]})}function t0(){return(0,o.jsx)("main",{children:(0,o.jsx)(i.n1F,{header:(0,o.jsx)(i.aOn,{fixed:!1,delimiter:"none"}),center:!0,children:(0,o.jsxs)(i.L2f,{autoSpaced:!0,maxWidth:784,children:[(0,o.jsx)(i.aOn,{fixed:!1,delimiter:"spacing",after:(0,o.jsx)(i.qAe,{href:"https://github.com/SevereCloud/vk-keyboard",target:"_blank","aria-label":"GitHub",title:"GitHub",children:(0,o.jsx)(tL,{width:28,height:28,style:{lineHeight:0},className:"vkuiIcon--28"})}),children:"Генератор клавиатуры"}),(0,o.jsxs)(i.YJl,{header:(0,o.jsx)(i.Y9Y,{multiline:!0,children:"Клавиатура"}),children:[(0,o.jsx)(i.iau,{children:(0,o.jsxs)(i.EYj,{children:["Генерирует"," ",(0,o.jsx)(i.N_E,{href:"https://vk.com/dev/bots_docs_3",target:"_blank",children:"клавиатуру"})," ","для ботов. Проверить клавиатуру можно отправив JSON"," ",(0,o.jsx)(i.N_E,{href:"https://vk.com/write-174472256",target:"_blank",children:"боту"})]})}),(0,o.jsx)(i.KzX,{size:16}),(0,o.jsx)(i.ZpM,{children:(0,o.jsx)(i.iau,{children:(0,o.jsx)(i.e2v,{mode:"vertical",stretched:!0,children:(0,o.jsx)(tZ,{})})})}),(0,o.jsx)(tg,{})]}),(0,o.jsxs)(i.YJl,{children:[(0,o.jsx)(i.eIh,{top:"Вид клавиатуры",htmlFor:"inline",children:(0,o.jsx)(tq,{})}),(0,o.jsx)(i.eIh,{children:(0,o.jsx)(tX,{})})]}),(0,o.jsx)(tB,{})]})})})}},5341:t=>{t.exports={selected:"ButtonItem_selected__XRv9C"}}},t=>{var e=e=>t(t.s=e);t.O(0,[571,954,394,17,441,684,358],()=>e(2988)),_N_E=t.O()}]);