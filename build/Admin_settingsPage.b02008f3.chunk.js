(self.webpackChunkbphc_ulti_strapi=self.webpackChunkbphc_ulti_strapi||[]).push([[5895],{62053:(T,v,t)=>{"use strict";t.r(v),t.d(v,{SettingsPage:()=>At,default:()=>Ke});var e=t(67294),l=t(81849),r=t(16550),h=t(17034),d=t(86896),S=t(64593),C=t(48474),p=t(19631),P=t(15861),D=t(64687),B=t.n(D),I=t(88767),R=t(185),O=t(53979),M=t(29728),A=t(49066),f=t(11047),E=t(75515),U=t(11276),Z=t(74571),$=t(23620),N=t(85018),V=t(17772),X=t(87751),_=t(45697),o=t.n(_),z=t(41580);const G=750,J=100,Y=["image/jpeg","image/png","image/svg+xml"];var tt=t(73987),ot=t(17973),nt=t(12028),st=t(59689),lt=t(96315),b=t(30815),Zt=t(42866),zt=t(24969),it=t(18172);const Lt={localImage:void 0},Ft=(a=Lt,n)=>(0,it.ZP)(a,s=>{switch(n.type){case"SET_LOCAL_IMAGE":{s.localImage=n.value;break}default:return s}}),rt=({onChangeLogo:a,customLogo:n,goTo:s,Component:i,modalTitle:c,next:y,prev:u,currentStep:L})=>{const[{localImage:g},m]=(0,e.useReducer)(Ft,Lt),{formatMessage:F}=(0,d.Z)(),x=K=>{m({type:"SET_LOCAL_IMAGE",value:K})},W=()=>{s(null)};return L?e.createElement(Zt.P,{labelledBy:"modal",onClose:W},e.createElement(zt.x,null,e.createElement(E.Z,{fontWeight:"bold",as:"h2",id:"modal"},F(c))),e.createElement(i,{setLocalImage:x,goTo:s,next:y,prev:u,onClose:W,asset:g||n,onChangeLogo:a})):null};rt.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},rt.propTypes={Component:o().elementType,currentStep:o().string,customLogo:o().shape({name:o().string,url:o().string,width:o().number,height:o().number,ext:o().string}),goTo:o().func.isRequired,modalTitle:o().shape({id:o().string,defaultMessage:o().string}),next:o().string,onChangeLogo:o().func.isRequired,prev:o().string};const Wt=rt,yt={currentStep:void 0},Kt=(a=yt,n)=>(0,it.ZP)(a,s=>{switch(n.type){case"GO_TO":{s.currentStep=n.to;break}default:return s}});var $t=t(82777),dt=t(60633),jt=t(70004),ct=t(42761),Nt=t(71997),Gt=t(45377),bt=t(54574),Ht=t(52624),Qt=t(96404),mt=t(36856),Vt=t(35957);const Xt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},St={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},Jt=a=>new Promise(n=>{const s=new FileReader;s.onload=()=>{const i=new Image;i.onload=function(){n({width:i.width,height:i.height})},i.src=s.result},s.readAsDataURL(a)}),Yt=(a,n)=>({ext:a.name.split(".").pop(),size:a.size/1e3,name:a.name,url:URL.createObjectURL(a),rawFile:a,width:n.width,height:n.height}),Rt=async a=>{let n;if(!Y.includes(a.type))throw n=new Error("File format"),n.displayMessage=Xt,n;const i=await Jt(a);if(!(i.width<=G&&i.height<=G))throw n=new Error("File sizing"),n.displayMessage=St,n;const y=Yt(a,i);if(!(y.size<=J))throw n=new Error("File sizing"),n.displayMessage=St,n;return y},wt=(0,Nt.ZP)(Gt._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,ut=({setLocalImage:a,goTo:n,next:s,onClose:i})=>{const{formatMessage:c}=(0,d.Z)(),[y,u]=(0,e.useState)(!1),[L,g]=(0,e.useState)(void 0),m=(0,e.useRef)(null),F=()=>u(!0),x=()=>u(!1),W=H=>{H.preventDefault(),m.current.click()},K=async()=>{x();const H=m.current.files[0];if(H)try{const Q=await Rt(H);a(Q),n(s)}catch(Q){if(Q.displayMessage)g(c(Q.displayMessage,{size:J,dimension:G})),m.current.focus();else throw Q}},j=()=>y?"primary500":L?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement(z.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(bt.g,{name:"logo-upload",error:L},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(f.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:y?"primary100":"neutral100",borderColor:j(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:F,onDragLeave:x},e.createElement(Ht.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:Vt.Z,"aria-hidden":!0}),e.createElement(z.x,{paddingTop:3,paddingBottom:5},e.createElement(E.Z,{variant:"delta",as:"span"},c({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(wt,{accept:Y,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:K,ref:m,id:"logo-upload"}),e.createElement(M.z,{type:"button",onClick:W},c({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement(z.x,{paddingTop:6},e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},c({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:J,dimension:G})))),e.createElement(Qt.c,null)))))),e.createElement(mt.m,{startActions:e.createElement(M.z,{onClick:i,variant:"tertiary"},c({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};ut.defaultProps={next:null},ut.propTypes={goTo:o().func.isRequired,next:o().string,onClose:o().func.isRequired,setLocalImage:o().func.isRequired};const kt=ut;var qt=t(16364),_t=t(52861);const te=async a=>{try{const n=await _t.Z.get(a,{responseType:"blob",timeout:8e3});return new File([n.data],n.config.url,{type:n.headers["content-type"]})}catch(n){throw n.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},n}},gt=({goTo:a,next:n,onClose:s,setLocalImage:i})=>{const{formatMessage:c}=(0,d.Z)(),[y,u]=(0,e.useState)(""),[L,g]=(0,e.useState)(null),m=x=>{u(x.target.value)},F=async()=>{try{const x=await te(y),W=await Rt(x);i(W),a(n)}catch(x){if(x.displayMessage)g(c(x.displayMessage,{size:J,dimension:G}));else throw x}};return e.createElement("form",{onSubmit:x=>{x.preventDefault(),F()}},e.createElement(z.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(qt.o,{label:c({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:L,onChange:m,value:y,name:"logo-url"})),e.createElement(mt.m,{startActions:e.createElement(M.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(M.z,{type:"submit"},c({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};gt.defaultProps={next:null},gt.propTypes={goTo:o().func.isRequired,next:o().string,onClose:o().func.isRequired,setLocalImage:o().func.isRequired};const ee=gt,pt=({setLocalImage:a,goTo:n,next:s,onClose:i})=>{const{formatMessage:c}=(0,d.Z)();return e.createElement($t.v,{label:c({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement(z.x,{paddingLeft:8,paddingRight:8},e.createElement(dt.m,null,e.createElement(dt.O,null,c({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(dt.O,null,c({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement(jt.i,null)),e.createElement(ct.n,null,e.createElement(ct.x,null,e.createElement(kt,{onClose:i,setLocalImage:a,goTo:n,next:s})),e.createElement(ct.x,null,e.createElement(ee,{onClose:i,setLocalImage:a,goTo:n,next:s}))))};pt.defaultProps={next:null},pt.propTypes={goTo:o().func.isRequired,next:o().string,onClose:o().func.isRequired,setLocalImage:o().func.isRequired};const ne=pt;var ae=t(99220),oe=t(19093),se=t(87535),le=t(25001),ie=t(75517),xt=t(20799),re=t(41384);const Tt=({asset:a})=>{const{formatMessage:n}=(0,d.Z)();return e.createElement(ae.Z,null,e.createElement(oe.O,null,e.createElement(se.H,{size:"S",src:a.url})),e.createElement(le.e,null,e.createElement(ie.a,null,e.createElement(xt.l,null,a.name),e.createElement(xt._,null,`${a.ext.toUpperCase()} - ${a.width}\u2715${a.height}`)),e.createElement(re.E,null,n({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};Tt.propTypes={asset:o().shape({name:o().string,url:o().string,width:o().number,height:o().number,ext:o().string}).isRequired};const de=Tt,Et=({onClose:a,asset:n,prev:s,next:i,goTo:c,setLocalImage:y,onChangeLogo:u})=>{const{formatMessage:L}=(0,d.Z)(),g=()=>{y(void 0),c(s)},m=()=>{u(n),c(i)};return e.createElement(e.Fragment,null,e.createElement(z.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(f.k,{justifyContent:"space-between",paddingBottom:6},e.createElement(f.k,{direction:"column",alignItems:"flex-start"},e.createElement(E.Z,{variant:"pi",fontWeight:"bold"},L({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(E.Z,{variant:"pi",textColor:"neutral500"},L({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(M.z,{onClick:g,variant:"secondary"},L({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement(z.x,{maxWidth:(0,l.Q1)(180)},e.createElement(de,{asset:n}))),e.createElement(mt.m,{startActions:e.createElement(M.z,{onClick:a,variant:"tertiary"},L({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(M.z,{onClick:m},L({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};Et.defaultProps={next:null,prev:null},Et.propTypes={goTo:o().func.isRequired,asset:o().shape({name:o().string,url:o().string,width:o().number,height:o().number,ext:o().string}).isRequired,next:o().string,onClose:o().func.isRequired,onChangeLogo:o().func.isRequired,prev:o().string,setLocalImage:o().func.isRequired};const ce={upload:{Component:ne,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:Et,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},ht=({canUpdate:a,customLogo:n,defaultLogo:s,hint:i,label:c,onChangeLogo:y,onResetLogo:u})=>{const[{currentStep:L},g]=(0,e.useReducer)(Kt,yt),{Component:m,next:F,prev:x,modalTitle:W}=ce[L]||{},{formatMessage:K}=(0,d.Z)(),j=H=>{g({type:"GO_TO",to:H})};return e.createElement(e.Fragment,null,e.createElement(tt.F,{label:c,selectedSlide:0,hint:i,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:n?.name||"logo.png",actions:e.createElement(ot.b,null,e.createElement(nt.h,{disabled:!a,onClick:()=>j(n?"pending":"upload"),label:K({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(lt.Z,null)}),n&&e.createElement(nt.h,{disabled:!a,onClick:u,label:K({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(b.Z,null)}))},e.createElement(st.q,{label:K({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement(z.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:n?.url||s,alt:K({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement(Wt,{Component:m,currentStep:L,onChangeLogo:y,customLogo:n,goTo:j,next:F,prev:x,modalTitle:W}))};ht.defaultProps={canUpdate:!1,customLogo:null,hint:null},ht.propTypes={canUpdate:o().bool,customLogo:o().shape({url:o().string,name:o().string}),label:o().string.isRequired,hint:o().string,defaultLogo:o().string.isRequired,onChangeLogo:o().func.isRequired,onResetLogo:o().func.isRequired};const Pt=ht,ft={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},me=(a=ft,n)=>(0,it.ZP)(a,s=>{switch(n.type){case"SET_CUSTOM_MENU_LOGO":{s.menuLogo.display=n.value,s.menuLogo.submit.rawFile=n.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{s.authLogo.display=n.value,s.authLogo.submit.rawFile=n.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{s.menuLogo.display=null,s.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{s.authLogo.display=null,s.authLogo.submit={rawFile:null,isReset:!0};break}default:return s}});var ue=t(82492),ge=t.n(ue);const pe=(a,n)=>ge()(a,{menuLogo:{display:n.menuLogo},authLogo:{display:n.authLogo}}),vt=(0,e.forwardRef)(({canUpdate:a,projectSettingsStored:n},s)=>{const{formatMessage:i}=(0,d.Z)(),{trackUsage:c}=(0,l.rS)(),{logos:{menu:y,auth:u}}=(0,C.um)(),[{menuLogo:L,authLogo:g},m]=(0,e.useReducer)(me,ft,()=>pe(ft,n)),F=j=>{m({type:"SET_CUSTOM_MENU_LOGO",value:j})},x=()=>{c("didClickResetLogo",{logo:"menu"}),m({type:"RESET_CUSTOM_MENU_LOGO"})},W=j=>{m({type:"SET_CUSTOM_AUTH_LOGO",value:j})},K=()=>{c("didClickResetLogo",{logo:"auth"}),m({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(s,()=>({getValues:()=>({menuLogo:L.submit,authLogo:g.submit})})),e.createElement(z.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(E.Z,{variant:"delta",as:"h3"},i({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},i({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:G,size:J})),e.createElement(U.r,{paddingTop:4,gap:4},e.createElement(Z.P,{col:6,s:12},e.createElement(Pt,{canUpdate:a,customLogo:L.display,defaultLogo:y.default,hint:i({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:i({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:F,onResetLogo:x})),e.createElement(Z.P,{col:6,s:12},e.createElement(Pt,{canUpdate:a,customLogo:g.display,defaultLogo:u.default,hint:i({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:i({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:W,onResetLogo:K}))))});vt.defaultProps={canUpdate:!1,projectSettingsStored:null},vt.propTypes={canUpdate:o().bool,projectSettingsStored:o().shape({menuLogo:o().shape({url:o().string,name:o().string})})};const Ee=vt;var he=t(68718),fe=t.n(he);const Ot=a=>fe()(a,(n,s,i)=>{s&&s.url?n[i]={...s,url:(0,l.CR)(s.url)}:n[i]=s},{}),ve=async()=>{const{get:a}=(0,l.tg)(),{data:n}=await a("/admin/project-settings");return Ot(n)},Ce=async a=>{const{post:n}=(0,l.tg)(),{data:s}=await n("/admin/project-settings",a,{headers:{"Content-Type":"multipart/form-data"}});return Ot(s)},Me=a=>{const n=new FormData;return Object.entries(a).forEach(([s,i])=>{i&&i.rawFile instanceof File&&n.append(s,i.rawFile),i&&i.isReset&&n.append(s,null)}),n};var Le=function(){return window&&window.strapi&&window.strapi.isEE?t(78413).Z:t(69767).Z}(),ye=function(){var n=(0,e.useRef)(),s=(0,l.lm)(),i=(0,l.rS)(),c=i.trackUsage,y=(0,d.Z)(),u=y.formatMessage,L=(0,I.useQueryClient)();(0,l.go)();var g=(0,l.QI)(),m=g.latestStrapiReleaseTag,F=g.shouldUpdateStrapi,x=g.strapiVersion,W=(0,C.um)(),K=W.updateProjectSettings,j=(0,l.ss)(X.Z.settings["project-settings"]),H=j.allowedActions,Q=H.canRead,Ct=H.canUpdate,$e=Q&&Ct,je=(0,I.useQuery)("project-settings",ve,{enabled:Q}),Bt=je.data,Ne=(0,I.useMutation)(function(Mt){return Ce(Mt)},{onSuccess:function(at){return(0,P.Z)(B().mark(function et(){var w,k;return B().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return w=at.menuLogo,k=at.authLogo,q.next=3,L.invalidateQueries("project-settings",{refetchActive:!0});case 3:K({menuLogo:w?.url,authLogo:k?.url});case 4:case"end":return q.stop()}},et)}))()}}),Ge=function(at){if(at.preventDefault(),!!Ct){var et=n.current.getValues(),w=Me(et);Ne.mutate(w,{onSuccess:function(){var Ut=et.menuLogo,q=et.authLogo;Ut.rawFile&&c("didChangeLogo",{logo:"menu"}),q.rawFile&&c("didChangeLogo",{logo:"auth"}),s({type:"success",message:u({id:"app",defaultMessage:"Saved"})})},onError:function(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}})}};return e.createElement(h.A,null,e.createElement(l.SL,{name:"Application"}),e.createElement(R.o,null,e.createElement("form",{onSubmit:Ge},e.createElement(O.T,{title:u({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:u({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:$e&&e.createElement(M.z,{type:"submit",startIcon:e.createElement(N.Z,null)},u({id:"global.save",defaultMessage:"Save"}))}),e.createElement(A.D,null,e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(E.Z,{variant:"delta",as:"h3"},u({id:"global.details",defaultMessage:"Details"})),e.createElement(U.r,{gap:5,as:"dl"},e.createElement(Z.P,{col:6,s:12},e.createElement(E.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},u({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(f.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(E.Z,null,"v",x),F&&e.createElement($.r,{href:"https://github.com/strapi/strapi/releases/tag/".concat(m),isExternal:!0,endIcon:e.createElement(V.Z,null)},u({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(Z.P,{col:6,s:12},e.createElement(E.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},u({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(f.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(E.Z,null,u({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:g.communityEdition})),e.createElement($.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement(V.Z,null)},u({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(Z.P,{col:6,s:12},e.createElement(E.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},u({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(E.Z,{as:"dd"},g.nodeVersion)),e.createElement(Le,null))),Q&&Bt&&e.createElement(Ee,{canUpdate:Ct,ref:n,projectSettingsStored:Bt}))))))};const Se=ye;var Re=t(94654),xe=t.n(Re);const Te=a=>xe()(a,s=>s.links).map(s=>(0,p.ot)(s.Component,s.to,s.exact||!1)),Pe=a=>a.filter(n=>!n.links.every(s=>s.isDisplayed===!1));var Dt=t(42982);const Oe=[{async Component(){return await Promise.all([t.e(233),t.e(3455)]).then(t.bind(t,98906))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(5125),t.e(2544)]).then(t.bind(t,23341))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(5125),t.e(2544)]).then(t.bind(t,23341))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(5125),t.e(2544)]).then(t.bind(t,92100))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,37735))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,22282))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,3672))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,42122))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,11199))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,87427))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(5125),t.e(9381),t.e(7692),t.e(4299)]).then(t.bind(t,9683))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(5125),t.e(9381),t.e(7692),t.e(92)]).then(t.bind(t,28465))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(5125),t.e(9381),t.e(3219),t.e(4816)]).then(t.bind(t,39987))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,70798))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(5125),t.e(9381),t.e(3219),t.e(2492)]).then(t.bind(t,9452))},to:"/settings/transfer-tokens/:id",exact:!0}];var De=function(){return window&&window.strapi&&window.strapi.isEE?t(5420).Z:t(35301).Z}();const Ie=[].concat((0,Dt.Z)(De),(0,Dt.Z)(Oe));var Ae=t(73727),Be=t(53192),Ue=t(60984),Ze=t(34446),ze=t(29489),Fe=t(52305);const It=({menu:a})=>{const{formatMessage:n}=(0,d.Z)(),{trackUsage:s}=(0,l.rS)(),{pathname:i}=(0,r.TH)(),y=Pe(a).map(g=>({...g,title:g.intlLabel,links:g.links.map(m=>({...m,title:m.intlLabel,name:m.id}))})),u=n({id:"global.settings",defaultMessage:"Settings"}),L=(g=null)=>{s("willNavigate",{from:i,to:g})};return e.createElement(Be.m,{ariaLabel:u},e.createElement(Ue.p,{label:u}),e.createElement(Ze.Z,null,y.map(g=>e.createElement(ze.D,{key:g.id,label:n(g.intlLabel)},g.links.map(m=>e.createElement(Fe.E,{as:Ae.OL,withBullet:m.hasNotification,to:m.to,onClick:()=>L(m.to),key:m.id},n(m.intlLabel)))))))};It.propTypes={menu:o().array.isRequired};const We=It;function At(){const{settingId:a}=(0,r.UO)(),{settings:n}=(0,l.j1)(),{formatMessage:s}=(0,d.Z)(),{isLoading:i,menu:c}=(0,C.Te)(),y=(0,e.useMemo)(()=>(0,p.WW)(Ie.map(({to:g,Component:m,exact:F})=>(0,p.ot)(m,g,F))),[]),u=Te(n);if(i)return e.createElement(l.dO,null);if(!a)return e.createElement(r.l_,{to:"/settings/application-infos"});const L=s({id:"global.settings",defaultMessage:"Settings"});return e.createElement(h.A,{sideNav:e.createElement(We,{menu:c})},e.createElement(S.q,{title:L}),e.createElement(r.rs,null,e.createElement(r.AW,{path:"/settings/application-infos",component:Se,exact:!0}),y,u))}const Ke=(0,e.memo)(At)},69767:(T,v,t)=>{"use strict";t.d(v,{Z:()=>l});const l=()=>null},35301:(T,v,t)=>{"use strict";t.d(v,{Z:()=>l});const l=[]},78413:(T,v,t)=>{"use strict";t.d(v,{Z:()=>A});var e=t(67294),l=t(86896),r=t(74571),h=t(75515),d=t(11047),S=t(84495),C=t(52624),p=t(36182),P=t(51277),D=t(17772),B=t(81849),I=t(69483);const R="https://cloud.strapi.io/profile/billing",O="https://strapi.io/billing/request-seats",A=()=>{const{formatMessage:f}=(0,l.Z)(),{license:E}=(0,I.q5)(),{licenseLimitStatus:U,enforcementUserCount:Z,permittedSeats:$,isHostedOnStrapiCloud:N}=E?.data??{};return $?e.createElement(r.P,{col:6,s:12},e.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},f({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(d.k,{gap:2},e.createElement(d.k,null,e.createElement(h.Z,{as:"p"},f({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:$,enforcementUserCount:Z,text:V=>e.createElement(h.Z,{fontWeight:"semiBold",textColor:Z>$?"danger500":null},V)}))),U==="OVER_LIMIT"&&e.createElement(S.u,{description:f({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(C.J,{width:`${(0,B.Q1)(14)}rem`,height:`${(0,B.Q1)(14)}rem`,color:"danger500",as:P.Z}))),e.createElement(p.r,{href:N?R:O,isExternal:!0,endIcon:e.createElement(D.Z,null)},f({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:N}))):null}},5420:(T,v,t)=>{"use strict";t.d(v,{Z:()=>l});const e=[];strapi.features.isEnabled(strapi.features.SSO)&&e.push({async Component(){return await t.e(302).then(t.bind(t,40316))},to:"/settings/single-sign-on",exact:!0}),strapi.features.isEnabled(strapi.features.AUDIT_LOGS)&&e.push({async Component(){return await t.e(2812).then(t.bind(t,35915))},to:"/settings/audit-logs",exact:!0});const l=e},94654:(T,v,t)=>{var e=t(21078),l=t(35161);function r(h,d){return e(l(h,d),1)}T.exports=r},35161:(T,v,t)=>{var e=t(29932),l=t(67206),r=t(69199),h=t(1469);function d(S,C){var p=h(S)?e:r;return p(S,l(C,3))}T.exports=d},17034:(T,v,t)=>{"use strict";t.d(v,{A:()=>C});var e=t(67294),l=t(45697),r=t(71997),h=t(41580);const d=(0,r.ZP)(h.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:p})=>p?"auto 1fr":"1fr"};
`,S=(0,r.ZP)(h.x)`
  overflow-x: hidden;
`,C=({sideNav:p,children:P})=>e.createElement(d,{hasSideNav:Boolean(p)},p,e.createElement(S,{paddingBottom:10},P));C.defaultProps={sideNav:void 0},C.propTypes={children:l.node.isRequired,sideNav:l.node}},53192:(T,v,t)=>{"use strict";t.d(v,{m:()=>C});var e=t(67294),l=t(45697),r=t(71997),h=t(11276);const d=`${232/16}rem`,S=(0,r.ZP)(h.r)`
  width: ${d};
  background: ${({theme:p})=>p.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:p})=>p.colors.neutral200};
  z-index: 1;
`,C=({ariaLabel:p,...P})=>e.createElement(S,{"aria-label":p,as:"nav",...P});C.propTypes={ariaLabel:l.string.isRequired}},60984:(T,v,t)=>{"use strict";t.d(v,{p:()=>A});var e=t(67294),l=t(97184),r=t(45697),h=t(71997),d=t(41580),S=t(70004),C=t(11047),p=t(7801),P=t(2504);const D=f=>{const E=(0,e.useRef)();return(0,e.useEffect)(()=>{E.current=f}),E.current};var B=t(12028),I=t(49123),R=t(8509),O=t(75515);const M=(0,h.ZP)(S.i)`
  width: ${24/16}rem;
  background-color: ${({theme:f})=>f.colors.neutral200};
`,A=({as:f,label:E,searchLabel:U,searchable:Z,onChange:$,value:N,onClear:V,onSubmit:X,id:_})=>{const[o,z]=(0,e.useState)(!1),G=D(o),J=(0,P.M)(_),Y=(0,e.useRef)(),tt=(0,e.useRef)();(0,e.useEffect)(()=>{o&&Y.current&&Y.current.focus(),G&&!o&&tt.current&&tt.current.focus()},[o,G]);const ot=()=>{z(b=>!b)},nt=b=>{V(b),Y.current.focus()},st=b=>{b.relatedTarget?.id!==J&&z(!1)},lt=b=>{b.key===p.y.ESCAPE&&z(!1)};return o?e.createElement(d.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},e.createElement(R.U,null,e.createElement(I.w,{name:"searchbar",value:N,onChange:$,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:lt,ref:Y,onBlur:st,onClear:nt,onSubmit:X,clearLabel:"Clear",size:"S"},U)),e.createElement(d.x,{paddingLeft:2,paddingTop:4},e.createElement(M,null))):e.createElement(d.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},e.createElement(C.k,{justifyContent:"space-between",alignItems:"flex-start"},e.createElement(O.Z,{variant:"beta",as:f},E),Z&&e.createElement(B.h,{ref:tt,onClick:ot,label:U,icon:e.createElement(l.Z,null)})),e.createElement(d.x,{paddingTop:4},e.createElement(M,null)))};A.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},A.propTypes={as:r.string,id:r.string,label:r.string.isRequired,onChange:r.func,onClear:r.func,onSubmit:r.func,searchLabel:r.string,searchable:r.bool,value:r.string}},52305:(T,v,t)=>{"use strict";t.d(v,{E:()=>I});var e=t(67294),l=t(71818),r=t(45697),h=t(71997),d=t(63507),S=t(41580),C=t(11047),p=t(75515);const P=(0,h.ZP)(S.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:R})=>R.colors.neutral800};
  svg > * {
    fill: ${({theme:R})=>R.colors.neutral600};
  }

  &.active {
    ${({theme:R})=>`
      background-color: ${R.colors.primary100};
      border-right: 2px solid ${R.colors.primary600};
      svg > * {
        fill: ${R.colors.primary700};
      }
      ${p.Z} {
        color: ${R.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,D=(0,h.ZP)(l.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:R,$active:O})=>O?R.colors.primary600:R.colors.neutral600};
  }
`,B=h.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,I=e.forwardRef(({children:R,icon:O,withBullet:M,as:A,isSubSectionChild:f,...E},U)=>e.createElement(P,{as:A,icon:O,background:"neutral100",paddingLeft:f?9:7,paddingBottom:2,paddingTop:2,ref:U,...E},e.createElement(C.k,null,O?e.createElement(B,null,O):e.createElement(D,null),e.createElement(S.x,{paddingLeft:2},e.createElement(p.Z,{as:"span"},R))),M&&e.createElement(S.x,{as:C.k,paddingRight:4},e.createElement(D,{$active:!0}))));I.displayName="SubNavLink",I.defaultProps={as:d.f,icon:null,isSubSectionChild:!1,withBullet:!1},I.propTypes={as:r.elementType,children:r.node.isRequired,icon:r.element,isSubSectionChild:r.bool,withBullet:r.bool}},29489:(T,v,t)=>{"use strict";t.d(v,{D:()=>O});var e=t(67294),l=t(45697),r=t(71997),h=t(12645),d=t(41580),S=t(11047),C=t(75515);const p=(0,r.ZP)(S.k)`
  border: none;
  padding: 0;
  background: transparent;
`,P=r.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:M})=>M?"0deg":"180deg"});
`,D=({collapsable:M,label:A,onClick:f,ariaExpanded:E,ariaControls:U})=>M?e.createElement(p,{as:"button",onClick:f,"aria-expanded":E,"aria-controls":U,textAlign:"left"},e.createElement(d.x,{paddingRight:1},e.createElement(C.Z,{variant:"sigma",textColor:"neutral600"},A)),M&&e.createElement(P,{rotated:E},e.createElement(h.Z,{"aria-hidden":!0}))):e.createElement(p,null,e.createElement(d.x,{paddingRight:1},e.createElement(C.Z,{variant:"sigma",textColor:"neutral600"},A)));D.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},D.propTypes={ariaControls:l.string,ariaExpanded:l.bool,collapsable:l.bool,label:l.string.isRequired,onClick:l.func};var B=t(30190),I=t(2504);const R=(0,r.ZP)(d.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:M})=>M.colors.neutral500};
    }
  }
`,O=({collapsable:M,label:A,badgeLabel:f,children:E,id:U})=>{const[Z,$]=(0,e.useState)(!0),N=(0,I.M)(U),V=()=>{$(X=>!X)};return e.createElement(S.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(R,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},e.createElement(d.x,{position:"relative",paddingRight:f?6:0},e.createElement(D,{onClick:V,ariaExpanded:Z,ariaControls:N,collapsable:M,label:A}),f&&e.createElement(B.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},f))),(!M||Z)&&e.createElement("ol",{id:N},e.Children.map(E,(X,_)=>e.createElement("li",{key:_},X))))};O.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},O.propTypes={badgeLabel:l.string,children:l.node.isRequired,collapsable:l.bool,id:l.string,label:l.string.isRequired}},34446:(T,v,t)=>{"use strict";t.d(v,{Z:()=>d});var e=t(67294),l=t(45697),r=t(41580),h=t(11047);const d=({children:S,spacing:C=2,horizontal:p=!1,...P})=>e.createElement(r.x,{paddingTop:2,paddingBottom:4},e.createElement(h.k,{as:"ol",gap:C,direction:p?"row":"column",alignItems:p?"center":"stretch",...P},e.Children.map(S,(D,B)=>e.createElement("li",{key:B},D))));d.propTypes={children:l.node.isRequired}},71818:(T,v,t)=>{"use strict";t.d(v,{Z:()=>r});var e=t(85893);const l=h=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",...h,children:(0,e.jsx)("rect",{width:4,height:4,rx:2,fill:"#A5A5BA"})}),r=l}}]);
