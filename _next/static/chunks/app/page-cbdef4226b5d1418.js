(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6322:(t,e,n)=>{Promise.resolve().then(n.bind(n,4867))},4867:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>t0});var o=n(7437),a=n(6151),i=n(6244),c=n(9778),l=n(6302),s=n(529),r=n(920);class h{addButton(){this.isPossibleToAddButton&&this.buttons.push(new x)}constructor(){this.id=(0,r.Z)(),this.buttons=new s.A([new x]),this.isPossibleToAddButton=new l.M.Computed(()=>this.buttons.length<5)}}var d=new WeakMap;class u{addRow(){this.buttons.length>=10||this.buttons.push(new h)}deleteSelectedButton(){let[t,e]=(0,a._)(this,d).get();if(1===this.buttons[t].buttons.length){this.buttons.splice(t,1),console.log("deleted row",t),this.selectedButton.set(this.buttons[Math.max(0,t-1)].buttons[0]),console.log(Math.max(0,t-1)),console.log(this.buttons[Math.max(0,t-1)].buttons[0]);return}this.buttons[t].buttons.splice(e,1),this.selectedButton.set(this.buttons[t].buttons[Math.max(0,e-1)])}changeSelectedButtonType(t){let e={text:x,open_link:f,location:y,vkpay:w,open_app:C,callback:Z}[t],[n,o]=(0,a._)(this,d).get(),i=new e;this.buttons[n].buttons[o]=i,this.selectedButton.set(i)}constructor(){(0,i._)(this,d,{writable:!0,value:void 0}),this.oneTime=new l.M.State(!1),this.inline=new l.M.State(!1),this.buttons=new s.A([new h]),this.selectedButton=new l.M.State(this.buttons[0].buttons[0]),(0,c._)(this,d,new l.M.Computed(()=>{let t=this.selectedButton.get();for(let e=0;e<this.buttons.length;e++){let n=this.buttons[e];for(let o=0;o<n.buttons.length;o++)if(n.buttons[o]===t)return[e,o]}throw Error("selectedButton not found")}))}}function p(t){let e=[];return void 0===t?e.push("label is required"):(t.length<1&&e.push("label should be at least 1 letters length"),t.length>40&&e.push("label should be not more than 40 letters length")),e}class g{constructor(){this.payload=new l.M.State(void 0),this.validatePayload=new l.M.Computed(()=>(function(t){let e=[];if(void 0===t||""===t)return e;t.length>255&&e.push("payload should be not more than 255 letters length");try{JSON.parse(t)}catch(t){e.push("payload contains incorrect JSON")}return e})(this.payload.get()))}}class b{constructor(){this.color=new l.M.State("primary")}}class x extends b{constructor(...t){super(...t),this.id=(0,r.Z)(),this.action=new v}}class v extends g{constructor(...t){super(...t),this.type="text",this.label=new l.M.State("Label"),this.validateLabel=new l.M.Computed(()=>p(this.label.get()))}}class f{constructor(){this.id=(0,r.Z)(),this.action=new m}}class m extends g{constructor(...t){super(...t),this.type="open_link",this.label=new l.M.State("Label"),this.validateLabel=new l.M.Computed(()=>p(this.label.get())),this.link=new l.M.State("https://vk.com"),this.validateLink=new l.M.Computed(()=>{let t=this.payload.get(),e=[];if(void 0===t||""===t)return e;t.length>255&&e.push("payload should be not more than 255 letters length");try{JSON.parse(t)}catch(t){e.push("payload contains incorrect JSON")}return e})}}class y{constructor(){this.id=(0,r.Z)(),this.action=new j}}class j extends g{constructor(...t){super(...t),this.type="location"}}class w{constructor(){this.id=(0,r.Z)(),this.action=new k}}class k extends g{constructor(...t){super(...t),this.type="vkpay",this.hash=new l.M.State(""),this.validateHash=new l.M.Computed(()=>{let t=this.hash.get(),e=[];return 0==t.length&&e.push("hash should be at least 1 letters length"),t.length>500&&e.push("hash should be not more than 500 letters length"),e})}}class C{constructor(){this.id=(0,r.Z)(),this.action=new _}}class _ extends g{constructor(...t){super(...t),this.type="open_app",this.label=new l.M.State("Label"),this.appId=new l.M.State(0),this.ownerId=new l.M.State(0),this.hash=new l.M.State(""),this.validateLabel=new l.M.Computed(()=>p(this.label.get()))}}class Z extends b{constructor(...t){super(...t),this.id=(0,r.Z)(),this.action=new M}}class M extends g{constructor(...t){super(...t),this.type="callback",this.label=new l.M.State("Label"),this.validateLabel=new l.M.Computed(()=>p(this.label.get()))}}var B=new WeakMap;class S{get(t){return(0,a._)(this,B).get(t)||0}add(t){let e=(0,a._)(this,B).get(t)||0;(0,a._)(this,B).set(t,e+1)}constructor(){(0,i._)(this,B,{writable:!0,value:void 0}),(0,c._)(this,B,new Map)}}var I=new WeakMap;class E{constructor(t){(0,i._)(this,I,{writable:!0,value:void 0}),this.code=new l.M.Computed(()=>{let t=[];(0,a._)(this,I).oneTime.get()&&(0,a._)(this,I).inline.get()&&t.push("one_time field is not available for inline keyboard\n");let e=0;return(0,a._)(this,I).buttons.forEach((n,o)=>{n.buttons.length<1&&t.push("the row ".concat(o," empty\n"));let i=new S;n.buttons.forEach((n,a)=>{e++,i.add(n.action.type);let c=e=>{t.push("button [".concat(o,"][").concat(a,"]: ").concat(e,"\n"))};n instanceof x?(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c)):n instanceof f?(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c),n.action.validateLink.get().forEach(c)):n instanceof y?n.action.validatePayload.get().forEach(c):n instanceof w?(n.action.validateHash.get().forEach(c),n.action.validatePayload.get().forEach(c)):n instanceof C?(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c)):n instanceof Z&&(n.action.validateLabel.get().forEach(c),n.action.validatePayload.get().forEach(c))}),i.get("vkpay")&&n.buttons.length>1&&t.push("the row ".concat(o," with button of type vkpay can contain only 1 button(s)\n")),i.get("location")&&n.buttons.length>2&&t.push("the row ".concat(o," with button of type location can contain only 2 button(s)\n")),i.get("open_app")&&n.buttons.length>2&&t.push("the row ".concat(o," with button of type open_app can contain only 2 button(s)\n")),i.get("open_link")&&n.buttons.length>2&&t.push("the row ".concat(o," with button of type open_link can contain only 2 button(s)\n")),(0,a._)(this,I).inline.get(),n.buttons.length>5&&t.push("the row ".concat(o," contains too much columns (max 5)\n"))}),(0,a._)(this,I).inline.get()?((0,a._)(this,I).buttons.length>6&&t.push("buttons contain too much rows (max 6)\n"),e>10&&t.push("keyboard contains too much buttons (max 10)\n")):((0,a._)(this,I).buttons.length>10&&t.push("buttons contain too much rows (max 10)\n"),e>40&&t.push("keyboard contains too much buttons (max 40)\n")),t.join("\n")}),(0,c._)(this,I,t)}}function L(t){return void 0===t?"``":(t.replace("`","\\`"),"`".concat(t,"`"))}var T=new WeakMap;class q{constructor(t){(0,i._)(this,T,{writable:!0,value:void 0}),this.code=new l.M.Computed(()=>{let t="";return(t+='import "github.com/SevereCloud/vksdk/object"\n\nk := object.',(0,a._)(this,T).inline.get())?t+="NewMessagesKeyboardInline()\n":t+="NewMessagesKeyboard(".concat((0,a._)(this,T).oneTime.get()?"true":"false",")\n"),(0,a._)(this,T).buttons.forEach(e=>{t+="\nk.AddRow()\n",e.buttons.forEach(e=>{e instanceof x?(t+="k.AddTextButton(",t+="".concat(L(e.action.label.get()),", "),t+="".concat(L(e.action.payload.get()),", "),t+="".concat(L(e.color.get())),t+=")\n"):e instanceof f?(t+="k.AddOpenLinkButton(",t+="".concat(L(e.action.link.get()),", "),t+="".concat(L(e.action.label.get()),", "),t+="".concat(L(e.action.payload.get())),t+=")\n"):e instanceof y?(t+="k.AddLocationButton(",t+="".concat(L(e.action.payload.get())),t+=")\n"):e instanceof w?(t+="k.AddVKPayButton(",t+="".concat(L(e.action.payload.get()),", "),t+="".concat(L(e.action.hash.get())),t+=")\n"):e instanceof C?(t+="k.AddVKAppsButton(",t+="".concat(e.action.appId.get(),", "),t+="".concat(e.action.ownerId.get(),", "),t+="".concat(L(e.action.payload.get()),", "),t+="".concat(L(e.action.label.get()),", "),t+="".concat(L(e.action.hash.get())),t+=")\n"):e instanceof Z&&(t+="k.AddCallbackButton(",t+="".concat(L(e.action.label.get()),", "),t+="".concat(L(e.action.payload.get()),", "),t+="".concat(L(e.color.get())),t+=")\n")})}),t}),(0,c._)(this,T,t)}}var A=new WeakMap;class O{constructor(t){(0,i._)(this,A,{writable:!0,value:void 0}),this.minify=new l.M.State(!1),this.code=new l.M.Computed(()=>{let t={},e=(0,a._)(this,A).inline.get();return(0,a._)(this,A).oneTime.get()&&!e&&(t.one_time=!0),e&&(t.inline=!0),t.buttons=[],(0,a._)(this,A).buttons.forEach((e,n)=>{t.buttons.push([]),e.buttons.forEach(e=>{e instanceof x?t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),payload:e.action.payload.get()},color:e.color.get()}):e instanceof f?t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),link:e.action.link.get(),payload:e.action.payload.get()}}):e instanceof y?t.buttons[n].push({action:{type:e.action.type,payload:e.action.payload.get()}}):e instanceof w?t.buttons[n].push({action:{type:e.action.type,hash:e.action.hash.get(),payload:e.action.payload.get()}}):e instanceof C?t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),app_id:e.action.appId.get(),owner_id:e.action.ownerId.get(),hash:e.action.hash.get(),payload:e.action.payload.get()}}):e instanceof Z&&t.buttons[n].push({action:{type:e.action.type,label:e.action.label.get(),payload:e.action.payload.get()},color:e.color.get()})})}),JSON.stringify(t,null,this.minify.get()?0:2)}),(0,c._)(this,A,t)}}function J(t){return void 0===t?"``":(t=t.replace("`","\\`"),"`".concat(t,"`"))}let F={secondary:"Keyboard.SECONDARY_COLOR",primary:"Keyboard.PRIMARY_COLOR",negative:"Keyboard.NEGATIVE_COLOR",positive:"Keyboard.POSITIVE_COLOR"};var N=new WeakMap;class K{constructor(t){(0,i._)(this,N,{writable:!0,value:void 0}),this.code=new l.M.Computed(()=>{let t="";return t+="import { Keyboard } from 'vk-io';\n\nconst builder = Keyboard.builder();\n\nbuilder\n"+((0,a._)(this,N).inline.get()?"	.inline()\n":"")+((0,a._)(this,N).oneTime.get()?"	.oneTime()\n":""),(0,a._)(this,N).buttons.forEach((e,n)=>{n>0&&(t+="	.row()\n"),e.buttons.forEach(e=>{e instanceof x?(t+="	.textButton({\n",t+="		label: ".concat(J(e.action.label.get()),"\n"),t+="		payload: ".concat(J(e.action.payload.get()),"\n"),t+="		color: ".concat(F[e.color.get()],"\n"),t+="	})\n"):e instanceof f?(t+="	.urlButton({\n",t+="		label: ".concat(J(e.action.label.get()),"\n"),t+="		link: ".concat(J(e.action.link.get()),"\n"),t+="	})\n"):e instanceof y?(t+="	.locationRequestButton({\n",t+="		payload: ".concat(J(e.action.payload.get()),"\n"),t+="	})\n"):e instanceof w?(t+="	.payButton({\n",t+="		hash: ".concat(J(e.action.hash.get()),"\n"),t+="	})\n"):e instanceof C?(t+="	.applicationButton({\n",t+="		label: ".concat(J(e.action.label.get()),"\n"),t+="		appId: ".concat(e.action.appId.get(),"\n"),t+="		ownerId: ".concat(e.action.ownerId.get(),"\n"),t+="		hash: ".concat(J(e.action.hash.get()),"\n"),t+="	})\n"):e instanceof Z&&(t+="	.callbackButton({\n",t+="		label: ".concat(J(e.action.label.get()),"\n"),t+="		payload: ".concat(J(e.action.payload.get()),"\n"),t+="		color: ".concat(F[e.color.get()],"\n"),t+="	})\n")})}),t}),(0,c._)(this,N,t)}}let P=new u,W=new O(P),z=new q(P),R=new K(P),V=new E(P);var $=n(8461),H=n(617),Y=n(4904),X=n(2265);function U(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=X.useMemo(()=>new l.M.Computed(t),e);return(0,H.q)(n)}var G=n(1196),D=n(4698);function Q(t){let{children:e}=t,n=(0,H.q)(e.validatePayload);return(0,G.tZ)($.xJW,{top:"Полезная нагрузка",htmlFor:"label",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,G.tZ)($.IIB,{id:"label",type:"text",placeholder:"{...}",value:(0,D.$)(e.payload),onChange:t=>{e.payload.set(t.currentTarget.value)}})})}var tt=n(7283);let te={primary:"var(--vkui--color_background_accent_themed)",secondary:"var(--vkui--color_background_secondary_alpha)",positive:"var(--vkui--color_background_positive)",negative:"var(--vkui--color_background_negative)"};function tn(t){let{children:e}=t;return(0,G.tZ)($.xJW,{top:"Цвет",htmlFor:"color",children:(0,G.tZ)($.sY7,{id:"color",name:"color",value:(0,D.$)(e.color),onChange:t=>{e.color.set(t)},options:["primary","secondary","positive","negative"].map(t=>({label:(0,G.tZ)(tt.U,{fill:te[t],"aria-hidden":!1,"aria-label":t}),value:t}))})})}function to(t){let{children:e}=t,n=(0,H.q)(e.action.validateLabel);return(0,G.tZ)($.xJW,{top:"Текст кнопки",htmlFor:"label",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,G.tZ)($.IIB,{id:"label",type:"text",placeholder:"Label",value:(0,D.$)(e.action.label),onChange:t=>{e.action.label.set(t.currentTarget.value)}})})}function ta(t){let{children:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(to,{children:e}),(0,o.jsx)(Q,{children:e.action}),(0,o.jsx)(tn,{children:e})]})}function ti(t){let{children:e}=t,n=(0,H.q)(e.action.validateLink);return(0,G.tZ)($.xJW,{top:"Ссылка",htmlFor:"link",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,G.tZ)($.IIB,{id:"link",type:"text",placeholder:"https://vk.com",value:(0,D.$)(e.action.link),onChange:t=>{e.action.link.set(t.currentTarget.value)}})})}function tc(t){let{children:e}=t;return(0,G.BX)(X.Fragment,{children:[(0,G.tZ)(to,{children:e}),(0,G.tZ)(ti,{children:e}),(0,G.tZ)(Q,{children:e.action})]})}function tl(t){let{children:e}=t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(Q,{children:e.action})})}function ts(t){let{children:e}=t,n=(0,H.q)(e.action.validateHash);return(0,G.tZ)($.xJW,{top:"Параметры платежа VK Pay",htmlFor:"hash",status:n.length?"error":void 0,bottom:n.join(", "),children:(0,G.tZ)($.IIB,{id:"hash",type:"text",placeholder:"action=transfer-to-group&group_id=1&aid=10",value:(0,D.$)(e.action.hash),onChange:t=>{e.action.hash.set(t.currentTarget.value)}})})}function tr(t){let{children:e}=t;return(0,G.BX)(X.Fragment,{children:[(0,G.tZ)(ts,{children:e}),(0,G.tZ)(Q,{children:e.action})]})}function th(t){let{children:e}=t;return(0,G.tZ)($.xJW,{top:"Приложение",htmlFor:"appId",children:(0,G.tZ)($.IIB,{id:"appId",type:"number",value:(0,D.$)(e.action.appId),onChange:t=>{e.action.appId.set(t.currentTarget.valueAsNumber)}})})}function td(t){let{children:e}=t;return(0,G.tZ)($.xJW,{top:"Идентификатор сообщества",htmlFor:"ownerId",children:(0,G.tZ)($.IIB,{id:"ownerId",type:"number",value:(0,D.$)(e.action.ownerId),onChange:t=>{e.action.ownerId.set(t.currentTarget.valueAsNumber)}})})}function tu(t){let{children:e}=t;return(0,G.tZ)($.xJW,{top:"Хэш",htmlFor:"hash",children:(0,G.tZ)($.IIB,{id:"hash",type:"text",value:(0,D.$)(e.action.hash),onChange:t=>{e.action.hash.set(t.currentTarget.value)}})})}function tp(t){let{children:e}=t;return(0,G.BX)(X.Fragment,{children:[(0,G.tZ)(to,{children:e}),(0,G.tZ)(th,{children:e}),(0,G.tZ)(td,{children:e}),(0,G.tZ)(tu,{children:e}),(0,G.tZ)(Q,{children:e.action})]})}function tg(t){let{children:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(to,{children:e}),(0,o.jsx)(Q,{children:e.action}),(0,o.jsx)(tn,{children:e})]})}function tb(t){let{children:e}=t;return(0,o.jsx)($.xJW,{top:"Тип кнопки",htmlFor:"type",children:(0,o.jsx)($.APM,{id:"type",name:"type",value:e.action.type,onChange:t=>{P.changeSelectedButtonType(t.currentTarget.value)},options:["text","open_link","location","vkpay","open_app","callback"].map(t=>({label:t,value:t}))})})}function tx(t){let{children:e}=t,n=null;return e instanceof x?n=(0,o.jsx)(ta,{children:e}):e instanceof f?n=(0,o.jsx)(tc,{children:e}):e instanceof y?n=(0,o.jsx)(tl,{children:e}):e instanceof w?n=(0,o.jsx)(tr,{children:e}):e instanceof C?n=(0,o.jsx)(tp,{children:e}):e instanceof Z&&(n=(0,o.jsx)(tg,{children:e})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(tb,{children:e}),n,(0,o.jsx)($.SxI,{centered:!0,onClick:()=>P.deleteSelectedButton(),appearance:"negative",children:"Удалить кнопку"})]})}var tv=n(7812);function tf(t){let{children:e,...n}=t;return(0,G.tZ)($.zxk,{before:(0,G.tZ)(tv.J,{}),mode:"secondary",...n,children:(0,D.$)(e.action.label)})}var tm=n(2306),ty=n.n(tm),tj=n(108);function tw(t){let{...e}=t;return(0,o.jsx)($.zxk,{before:(0,o.jsx)(tj.l,{}),...e,children:"Отправить своё местоположение"})}function tk(t){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 72 24",width:72,height:24,id:"vk_pay_logo_72","aria-hidden":!0,...t,children:(0,o.jsxs)("g",{fill:"currentColor",children:[(0,o.jsx)("path",{d:"M34.1 22.367V6.723h1.829l.488 1.822a5.23 5.23 0 0 1 4.146-2.01c3.11 0 5.306 2.45 5.306 5.842 0 3.393-2.196 5.843-5.306 5.843a5.13 5.13 0 0 1-4.024-1.948v6.157h-2.44zm9.208-10.053c0-2.136-1.403-3.58-3.415-3.58s-3.415 1.507-3.415 3.58c0 2.136 1.402 3.581 3.415 3.581 2.073.063 3.415-1.445 3.415-3.58M56.723 11.624v6.282h-1.769l-.487-1.759c-.55.942-1.708 2.01-3.476 2.01-2.196 0-3.781-1.507-3.781-3.58s1.585-3.519 4.817-3.519h2.379c-.122-1.445-.854-2.45-2.196-2.45-1.097 0-1.83.628-2.195 1.32L47.82 9.55c.549-1.947 2.439-3.078 4.512-3.078 2.683.062 4.39 1.884 4.39 5.151m-2.44 1.382h-2.256c-1.83 0-2.439.628-2.439 1.445 0 .942.732 1.57 1.951 1.57 1.647.063 2.745-1.193 2.745-3.015M66.358 6.723h2.44L64.345 19.35c-.732 2.073-1.83 3.016-3.842 3.016h-1.646l-.183-2.262h2.012c.793 0 1.159-.314 1.464-1.194l.121-.314-4.817-11.812h2.561l3.232 8.105h.305z"}),(0,o.jsx)("path",{"fill-rule":"evenodd",d:"M15.135 0C20.379 0 23 0 24.648 1.696c1.646 1.634 1.646 4.398 1.646 9.801v1.006c0 5.403 0 8.104-1.646 9.8C23.062 24 20.379 24 15.135 24h-.976c-5.244 0-7.866 0-9.513-1.696C3 20.67 3 17.906 3 12.503v-1.006c0-5.403 0-8.104 1.646-9.8C6.232 0 8.915 0 14.16 0zm5.061 17.026h1.708c.487 0 .731-.251.487-.754-.182-.502-.731-1.256-1.463-2.073-.214-.295-.512-.589-.76-.833-.174-.172-.323-.32-.399-.424-.244-.314-.183-.44 0-.754 0 0 2.074-3.015 2.318-4.02.122-.377 0-.629-.488-.629H19.89c-.427 0-.61.252-.731.503 0 0-.854 2.199-2.074 3.581-.427.44-.549.565-.792.565-.061 0-.244-.125-.244-.502V8.23c0-.44-.122-.628-.488-.628h-2.683c-.244 0-.427.189-.427.377 0 .17.09.283.205.427.183.23.428.536.466 1.27v2.575c0 .566-.061.691-.305.691-.55 0-1.952-2.136-2.805-4.649-.122-.502-.305-.69-.732-.69H7.574c-.488 0-.61.25-.61.502 0 .44.549 2.764 2.683 5.78 1.402 2.073 3.354 3.204 5.183 3.204 1.098 0 1.22-.251 1.22-.691v-1.57c0-.503.06-.629.426-.629.244 0 .671.126 1.708 1.13.325.336.574.617.777.847.523.59.753.85 1.235.85","clip-rule":"evenodd"})]})})}function tC(t){let{...e}=t;return(0,o.jsx)($.zxk,{after:(0,o.jsx)(tk,{width:55,height:16}),style:{lineHeight:0},...e,children:"Оплатить через"})}var t_=n(7739);function tZ(t){let{children:e,...n}=t;return(0,G.tZ)($.zxk,{before:(0,G.tZ)(t_.P,{}),mode:"secondary",...n,children:(0,D.$)(e.action.label)})}let tM={primary:{mode:"primary"},secondary:{mode:"secondary"},positive:{appearance:"positive"},negative:{appearance:"negative"}};function tB(t){let{children:e,...n}=t,o=(0,H.q)(e.color);return(0,G.tZ)($.zxk,{...tM[o],...n,children:(0,D.$)(e.action.label)})}function tS(t){let{children:e,...n}=t,o=(0,H.q)(e.color);return(0,G.tZ)($.zxk,{...tM[o],...n,children:(0,D.$)(e.action.label)})}function tI(t){let{children:e}=t,[n,a]=function(t){let e=(0,H.q)(P.selectedButton),n=X.useCallback(()=>{P.selectedButton.set(t)},[t]);return[e===t,n]}(e),i={className:n?ty().selected:void 0,stretched:!0,size:n?"s":"m",onClick:()=>a()};return e instanceof x?(0,o.jsx)(tB,{...i,children:e}):e instanceof f?(0,o.jsx)(tf,{...i,children:e}):e instanceof y?(0,o.jsx)(tw,{...i}):e instanceof w?(0,o.jsx)(tC,{...i}):e instanceof C?(0,o.jsx)(tZ,{...i,children:e}):e instanceof Z?(0,o.jsx)(tS,{...i,children:e}):null}var tE=n(3117),tL=n(223),tT=n(6950),tq=n(8536),tA=n(4413);function tO(t){let{style:e,...n}=t;return(0,o.jsx)($.ZCY,{children:(0,o.jsx)(tE.Z,{style:{...tA.Z,...e},customStyle:{borderRadius:8,padding:16,margin:0},...n})})}function tJ(){let t=(0,H.q)(W.code);return(0,G.tZ)(tO,{language:"json",children:t})}function tF(){return(0,G.tZ)($.XZJ,{checked:(0,D.$)(W.minify),onChange:t=>W.minify.set(t.target.checked),children:"Минифицировать"})}function tN(){let t=(0,H.q)(z.code);return(0,o.jsx)(tO,{language:"go",children:t})}function tK(){return(0,o.jsx)($.ZCY,{children:(0,o.jsxs)($.xvT,{children:["Для модуля"," ",(0,o.jsx)($.rUS,{href:"https://github.com/SevereCloud/vksdk",target:"_blank",children:"github.com/SevereCloud/vksdk"})]})})}function tP(){let t=(0,H.q)(V.code);return(0,o.jsx)(tO,{children:t})}function tW(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(tP,{})})}function tz(){let t=(0,H.q)(R.code);return(0,o.jsx)(tO,{language:"javascript",children:t})}function tR(){return(0,o.jsx)($.ZCY,{children:(0,o.jsxs)($.xvT,{children:["Для модуля"," ",(0,o.jsx)($.rUS,{href:"https://negezor.github.io/vk-io/ru/guide/keyboard.html",target:"_blank",children:"vk-io"})]})})}tE.Z.registerLanguage("javascript",tL.Z),tE.Z.registerLanguage("go",tT.Z),tE.Z.registerLanguage("json",tq.Z);let tV=["JSON","VK SDK (Golang)","VK-IO (Node.js)"],t$={JSON:function(){return(0,G.BX)(X.Fragment,{children:[(0,G.tZ)(tF,{}),(0,G.tZ)(tJ,{})]})},"VK SDK (Golang)":function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(tK,{}),(0,o.jsx)(tN,{})]})},"VK-IO (Node.js)":function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(tR,{}),(0,o.jsx)(tz,{})]})}};function tH(){let[t,e]=X.useState(tV[0]),n=t$[t];return(0,o.jsxs)($.ZAu,{header:(0,o.jsx)($.h4i,{children:"Код"}),children:[(0,o.jsx)($.mQc,{children:tV.map(n=>(0,o.jsx)($.LM1,{selected:t===n,onClick:()=>e(n),children:n},n))}),(0,o.jsx)($.Kig,{}),(0,o.jsx)(n,{})]})}function tY(){return(0,H.q)(V.code)?(0,o.jsx)($.ZAu,{header:(0,o.jsx)($.h4i,{children:"Ошибки"}),children:(0,o.jsx)(tW,{})}):(0,o.jsx)(tH,{})}function tX(t){return(0,o.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,...t,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0043 1.80469C5.39236 1.80469 1.66406 5.56047 1.66406 10.2069C1.66406 13.921 4.05291 17.0649 7.36688 18.1777C7.78121 18.2613 7.93298 17.9969 7.93298 17.7744C7.93298 17.5797 7.91932 16.912 7.91932 16.2163C5.59927 16.7172 5.11614 15.2147 5.11614 15.2147C4.74329 14.2409 4.19085 13.9907 4.19085 13.9907C3.4315 13.476 4.24616 13.476 4.24616 13.476C5.08848 13.5316 5.53047 14.3384 5.53047 14.3384C6.27599 15.6181 7.47733 15.2565 7.96063 15.0339C8.0296 14.4914 8.25068 14.1158 8.48542 13.9072C6.63501 13.7124 4.68815 12.9891 4.68815 9.76166C4.68815 8.84354 5.01934 8.09238 5.54413 7.50819C5.46133 7.29957 5.17128 6.43693 5.6271 5.28237C5.6271 5.28237 6.33131 5.05976 7.91915 6.14484C8.59896 5.96092 9.30004 5.86735 10.0043 5.86657C10.7085 5.86657 11.4264 5.96405 12.0893 6.14484C13.6773 5.05976 14.3815 5.28237 14.3815 5.28237C14.8373 6.43693 14.5471 7.29957 14.4643 7.50819C15.0029 8.09238 15.3204 8.84354 15.3204 9.76166C15.3204 12.9891 13.3736 13.6984 11.5093 13.9072C11.8132 14.1715 12.0754 14.6722 12.0754 15.4652C12.0754 16.5919 12.0618 17.4962 12.0618 17.7743C12.0618 17.9969 12.2137 18.2613 12.6279 18.1779C15.9418 17.0648 18.3307 13.921 18.3307 10.2069C18.3443 5.56047 14.6024 1.80469 10.0043 1.80469Z",fill:"currentColor"})})}function tU(t){let{children:e}=t,n=(0,H.q)(e.inline);return(0,o.jsx)($.xJW,{top:"Вид клавиатуры",htmlFor:"inline",children:(0,o.jsx)($.sY7,{id:"inline",name:"inline",value:n?"true":"false",onChange:t=>{e.inline.set("true"===t)},options:[{value:"false",label:"Клавиатура"},{value:"true",label:"Инлайн клавиатура"}]})})}function tG(t){let{children:e}=t,n=(0,H.q)(e.oneTime);return(0,H.q)(e.inline)?null:(0,o.jsx)($.xJW,{children:(0,o.jsx)($.XZJ,{checked:n,onChange:t=>e.oneTime.set(t.target.checked),children:"Скрывать клавиатуру сразу"})})}function tD(){let t=U(()=>[...P.buttons]);return console.log("buttons render"),(0,o.jsx)($.Zbd,{children:(0,o.jsx)($.ZCY,{children:(0,o.jsxs)($.hE2,{mode:"vertical",stretched:!0,children:[t.map(t=>(0,o.jsx)(tQ,{children:t},t.id)),(0,o.jsx)($.zxk,{size:"m",onClick:()=>P.addRow(),appearance:"accent-invariable",mode:"tertiary",stretched:!0,children:"Добавить строку"})]})})})}function tQ(t){let{children:e}=t,n=U(()=>[...e.buttons]),a=(0,H.q)(e.isPossibleToAddButton);return(0,o.jsxs)($.hE2,{mode:"horizontal",stretched:!0,children:[n.map(t=>(0,o.jsx)(tI,{children:t},t.id)),(0,o.jsx)($.zxk,{size:"m",onClick:()=>e.addButton(),disabled:!a,appearance:"accent-invariable",mode:"tertiary",before:(0,o.jsx)(Y.n,{}),"aria-label":"Добавить кнопку",title:"Добавить кнопку"})]})}function t0(){let t=(0,H.q)(P.selectedButton);return(0,o.jsx)("main",{children:(0,o.jsx)($.KH4,{header:(0,o.jsx)($.V9q,{fixed:!1,delimiter:"none"}),center:!0,children:(0,o.jsxs)($.qZh,{autoSpaced:!0,maxWidth:784,children:[(0,o.jsx)($.V9q,{fixed:!1,delimiter:"spacing",after:(0,o.jsx)($.CUs,{href:"https://github.com/SevereCloud/vk-keyboard",target:"_blank","aria-label":"GitHub",title:"GitHub",children:(0,o.jsx)(tX,{width:28,height:28,style:{lineHeight:0},className:"vkuiIcon--28"})}),children:"Генератор клавиатуры"}),(0,o.jsxs)($.ZAu,{header:(0,o.jsx)($.h4i,{multiline:!0,children:"Клавиатура"}),children:[(0,o.jsx)($.ZCY,{children:(0,o.jsxs)($.xvT,{children:["Генерирует"," ",(0,o.jsx)($.rUS,{href:"https://vk.com/dev/bots_docs_3",target:"_blank",children:"клавиатуру"})," ","для ботов. Проверить клавиатуру можно отправив JSON"," ",(0,o.jsx)($.rUS,{href:"https://vk.com/write-174472256",target:"_blank",children:"боту"})]})}),(0,o.jsx)($.Kig,{size:16}),(0,o.jsx)(tD,{}),(0,o.jsx)(tx,{children:t})]}),(0,o.jsxs)($.ZAu,{children:[(0,o.jsx)(tU,{children:P}),(0,o.jsx)(tG,{children:P})]}),(0,o.jsx)(tY,{})]})})})}},2306:t=>{t.exports={selected:"ButtonItem_selected__XRv9C"}}},t=>{var e=e=>t(t.s=e);t.O(0,[471,721,554,246,130,215,744],()=>e(6322)),_N_E=t.O()}]);