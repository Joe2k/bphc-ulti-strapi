"use strict";(self.webpackChunkbphc_ulti_strapi=self.webpackChunkbphc_ulti_strapi||[]).push([[5199],{67875:(D,n,e)=>{e.d(n,{Z:()=>a});const a=()=>null},94699:(D,n,e)=>{e.d(n,{Z:()=>m});var t=e(67294),a=e(45697),s=e.n(a),o=e(86896),E=e(41580),i=e(29728),d=e(89597),l=e(81849);const r=({displayedFilters:p})=>{const[A,C]=(0,t.useState)(!1),{formatMessage:U}=(0,o.Z)(),h=(0,t.useRef)(),y=()=>{C(L=>!L)};return t.createElement(t.Fragment,null,t.createElement(E.x,{paddingTop:1,paddingBottom:1},t.createElement(i.z,{variant:"tertiary",ref:h,startIcon:t.createElement(d.Z,null),onClick:y,size:"S"},U({id:"app.utils.filters",defaultMessage:"Filters"})),A&&t.createElement(l.J5,{displayedFilters:p,isVisible:A,onToggle:y,source:h})),t.createElement(l.W$,{filtersSchema:p}))};r.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const m=r},4214:(D,n,e)=>{e.d(n,{Z:()=>l});var t=e(67294),a=e(86896),s=e(45697),o=e.n(s),E=e(29728),i=e(23293);const d=({onClick:r})=>{const{formatMessage:m}=(0,a.Z)();return t.createElement(E.z,{onClick:r,startIcon:t.createElement(i.Z,null),size:"S"},m({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};d.propTypes={onClick:o().func.isRequired};const l=d},57338:(D,n,e)=>{e.d(n,{Z:()=>a});const a={firstname:"",lastname:"",email:"",roles:[]}},55867:(D,n,e)=>{e.d(n,{Z:()=>a});const a=[]},37735:(D,n,e)=>{e.r(n),e.d(n,{default:()=>tt});var t=e(67294),a=e(81849),s=e(87751),o=e(15861),E=e(4942),i=e(70885),d=e(64687),l=e.n(d),r=e(14087),m=e(185),p=e(53979),A=e(36989),C=e(49066),U=e(16550),h=e(86896),y=e(88767),L=e(45697),g=e.n(L),se=e(15234),J=e(79031),ne=e(37909),pe=e(41451),I=e(75515),H=e(11047),de=e(12028),$=e(41580),fe=e(4585),Me=e(20022),W=e(19631);const ve=({canDelete:c,headers:f,entriesToDelete:M,onClickDelete:v,onSelectRow:b,withMainAction:Y,withBulkActions:j,rows:oe})=>{const{push:N,location:{pathname:Q}}=(0,U.k6)(),{formatMessage:S}=(0,h.Z)();return t.createElement(se.p,null,oe.map(u=>{const V=M.findIndex(K=>K===u.id)!==-1;return t.createElement(J.Tr,{key:u.id,...(0,a.X7)({fn:()=>N(`${Q}/${u.id}`),condition:j})},Y&&t.createElement(ne.Td,{...a.UW},t.createElement(pe.C,{"aria-label":S({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,W.Pp)(u.firstname,u.lastname)}),checked:V,onChange:()=>{b({name:u.id,value:!V})}})),f.map(({key:K,cellFormatter:w,name:Z,...k})=>t.createElement(ne.Td,{key:K},typeof w=="function"?w(u,{key:K,name:Z,formatMessage:S,...k}):t.createElement(I.Z,{textColor:"neutral800"},u[Z]||"-"))),j&&t.createElement(ne.Td,null,t.createElement(H.k,{justifyContent:"end"},t.createElement(de.h,{onClick:()=>N(`${Q}/${u.id}`),label:S({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,W.Pp)(u.firstname,u.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)}),c&&t.createElement($.x,{paddingLeft:1,...a.UW},t.createElement(de.h,{onClick:()=>v(u.id),label:S({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,W.Pp)(u.firstname,u.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)})))))}))};ve.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},ve.propTypes={canDelete:g().bool,entriesToDelete:g().array,headers:g().array.isRequired,onClickDelete:g().func,onSelectRow:g().func,rows:g().array,withBulkActions:g().bool,withMainAction:g().bool};const Ue=ve;var Ie=e(94699),ce=e(87462),Pe=e(29728),Se=e(42866),We=e(24969),Ae=e(2407),Ke=e(59946),Ce=e(11276),_e=e(74571),Ze=e(36856),xe=e(41054),Fe=e(81288);const $e=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var re=e(87561);const be=re.Ry().shape({firstname:re.Z_().trim().required(a.I0.required),lastname:re.Z_(),email:re.Z_().email(a.I0.email).required(a.I0.required),roles:re.IX().min(1,a.I0.required).required(a.I0.required)}),je={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var Ne=function(){return window&&window.strapi&&window.strapi.isEE?e(97083).Z:e(57338).Z}(),ze=function(){return window&&window.strapi&&window.strapi.isEE?e(810).Z:e(55867).Z}(),Xe=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),Le=function(f){var M=f.queryName,v=f.onToggle,b=(0,t.useState)("create"),Y=(0,i.Z)(b,2),j=Y[0],oe=Y[1],N=(0,t.useState)(!1),Q=(0,i.Z)(N,2),S=Q[0],u=Q[1],V=(0,t.useState)(null),K=(0,i.Z)(V,2),w=K[0],Z=K[1],k=(0,y.useQueryClient)(),ue=(0,h.Z)(),z=ue.formatMessage,Oe=(0,a.lm)(),q=(0,a.o1)(),Ee=q.lockApp,ee=q.unlockApp,he=(0,a.kY)(),le=he.post,te=(0,y.useMutation)(function(_){return le("/admin/users",_)},{onSuccess:function(x){return(0,o.Z)(l().mark(function X(){var F;return l().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return F=x.data,Z(F.data.registrationToken),P.next=4,k.refetchQueries(M);case 4:return P.next=6,k.refetchQueries(["ee","license-limit-info"]);case 6:ge(),u(!1);case 8:case"end":return P.stop()}},X)}))()},onError:function(x){throw u(!1),Oe({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),x},onSettled:function(){ee()}}),R=z({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ye=function(){var _=(0,o.Z)(l().mark(function x(X,F){var G,P,Te;return l().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return G=F.setErrors,Ee(),u(!0),T.prev=3,T.next=6,te.mutateAsync(X);case 6:T.next=12;break;case 8:T.prev=8,T.t0=T.catch(3),ee(),(T.t0===null||T.t0===void 0||(P=T.t0.response)===null||P===void 0||(Te=P.data)===null||Te===void 0?void 0:Te.error.message)==="Email already taken"&&G({email:T.t0.response.data.error.message});case 12:case"end":return T.stop()}},x,null,[[3,8]])}));return function(X,F){return _.apply(this,arguments)}}(),ge=function(){B?oe(B):v()},ae=je[j],ie=ae.buttonSubmitLabel,O=ae.isDisabled,B=ae.next,Be=j==="create"?t.createElement(Pe.z,{type:"submit",loading:S},z(ie)):t.createElement(Pe.z,{type:"button",loading:S,onClick:v},z(ie));return t.createElement(Se.P,{onClose:v,labelledBy:"title"},t.createElement(We.x,null,t.createElement(Ae.O,{label:R},t.createElement(Ae.$,null,R))),t.createElement(xe.J9,{initialValues:Ne,onSubmit:ye,validationSchema:be,validateOnChange:!1},function(_){var x=_.errors,X=_.handleChange,F=_.values;return t.createElement(a.l0,null,t.createElement(Ke.f,null,t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:6},j!=="create"&&t.createElement(Xe,{registrationToken:w}),t.createElement($.x,null,t.createElement(I.Z,{variant:"beta",as:"h2"},z({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement($.x,{paddingTop:4},t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Ce.r,{gap:5},$e.map(function(G){return G.map(function(P){return t.createElement(_e.P,(0,ce.Z)({key:P.name},P.size),t.createElement(a.jm,(0,ce.Z)({},P,{disabled:O,error:x[P.name],onChange:X,value:F[P.name]})))})}))))),t.createElement($.x,null,t.createElement(I.Z,{variant:"beta",as:"h2"},z({id:"global.roles",defaultMessage:"User's role"})),t.createElement($.x,{paddingTop:4},t.createElement(Ce.r,{gap:5},t.createElement(_e.P,{col:6,xs:12},t.createElement(Fe.Z,{disabled:O,error:x.roles,onChange:X,value:F.roles})),ze.map(function(G){return G.map(function(P){return t.createElement(_e.P,(0,ce.Z)({key:P.name},P.size),t.createElement(a.jm,(0,ce.Z)({},P,{disabled:O,onChange:X,value:F[P.name]})))})})))))),t.createElement(Ze.m,{startActions:t.createElement(Pe.z,{variant:"tertiary",onClick:v,type:"button"},z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Be}))}))};Le.propTypes={onToggle:g().func.isRequired,queryName:g().array.isRequired};const He=Le,De=({pagination:c})=>t.createElement($.x,{paddingTop:4},t.createElement(H.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:c})));De.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},De.propTypes={pagination:g().shape({page:g().number,pageCount:g().number,pageSize:g().number,total:g().number})};const Qe=De,Ve=async(c,f)=>{const{get:M}=(0,a.tg)(),{data:{data:v}}=await M(`/admin/users${c}`);return f(),v},Ge=async c=>{const{post:f}=(0,a.tg)();await f("/admin/users/batch-delete",{ids:c})},Je=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Ye=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:c},{formatMessage:f}){return t.createElement(I.Z,{textColor:"neutral800"},c.map(M=>f({id:`Settings.permissions.users.${M.code}`,defaultMessage:M.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:c},{formatMessage:f}){return t.createElement(H.k,null,t.createElement(a.qb,{isActive:c,variant:c?"success":"danger"}),t.createElement(I.Z,{textColor:"neutral800"},f({id:c?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:c?"Active":"Inactive"})))}}];function Re(c,f){var M=Object.keys(c);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(c);f&&(v=v.filter(function(b){return Object.getOwnPropertyDescriptor(c,b).enumerable})),M.push.apply(M,v)}return M}function me(c){for(var f=1;f<arguments.length;f++){var M=arguments[f]!=null?arguments[f]:{};f%2?Re(Object(M),!0).forEach(function(v){(0,E.Z)(c,v,M[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(M)):Re(Object(M)).forEach(function(v){Object.defineProperty(c,v,Object.getOwnPropertyDescriptor(M,v))})}return c}var we=function(){return window&&window.strapi&&window.strapi.isEE?e(49823).Z:e(4214).Z}(),ke=function(){return window&&window.strapi&&window.strapi.isEE?e(94018).Z:e(67875).Z}(),qe=function(){var f=(0,a.So)(),M=f.formatAPIError,v=(0,t.useState)(!1),b=(0,i.Z)(v,2),Y=b[0],j=b[1],oe=(0,a.ss)(s.Z.settings.users),N=oe.allowedActions,Q=N.canCreate,S=N.canDelete,u=N.canRead,V=(0,y.useQueryClient)(),K=(0,a.lm)(),w=(0,h.Z)(),Z=w.formatMessage,k=(0,U.TH)(),ue=k.search;(0,a.go)(),ke();var z=(0,r.G)(),Oe=z.notifyStatus,q=["users",ue],Ee=Ye.map(function(O){return me(me({},O),{},{metadatas:me(me({},O.metadatas),{},{label:Z(O.metadatas.label)})})}),ee=Z({id:"global.users",defaultMessage:"Users"}),he=function(){Oe(Z({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:ee}))},le=(0,y.useQuery)(q,function(){return Ve(ue,he)},{enabled:u,retry:!1,onError:function(B){K({type:"warning",message:{id:"notification.error",message:M(B),defaultMessage:"An error occured"}})}}),te=le.status,R=le.data,ye=le.isFetching,ge=function(){j(function(B){return!B})},ae=(0,y.useMutation)(function(O){return Ge(O)},{onSuccess:function(){return(0,o.Z)(l().mark(function B(){return l().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,V.refetchQueries(q);case 2:return _.next=4,V.refetchQueries(["ee","license-limit-info"]);case 4:case"end":return _.stop()}},B)}))()},onError:function(B){K({type:"warning",message:{id:"notification.error",message:M(B),defaultMessage:"An error occured"}})}}),ie=te!=="success"&&te!=="error"||te==="success"&&ye;return t.createElement(m.o,{"aria-busy":ie},t.createElement(a.SL,{name:"Users"}),t.createElement(p.T,{primaryAction:Q&&t.createElement(we,{onClick:ge}),title:ee,subtitle:Z({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),u&&t.createElement(A.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:Z({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ee})}),t.createElement(Ie.Z,{displayedFilters:Je}))}),t.createElement(C.D,{canRead:u},!u&&t.createElement(a.ZF,null),te==="error"&&t.createElement("div",null,"TODO: An error occurred"),u&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:ie,onConfirmDeleteAll:ae.mutateAsync,onConfirmDelete:function(B){return ae.mutateAsync([B])},headers:Ee,rows:R?.results,withBulkActions:!0,withMainAction:S},t.createElement(Ue,{canDelete:S,headers:Ee,rows:R?.results||[],withBulkActions:!0,withMainAction:S})),t.createElement(Qe,{pagination:R?.pagination}))),Y&&t.createElement(He,{onToggle:ge,queryName:q}))};const et=qe,tt=()=>t.createElement(a.O4,{permissions:s.Z.settings.users.main},t.createElement(et,null))},82464:(D,n,e)=>{e.d(n,{Z:()=>p});var t=e(67294),a=e(45697),s=e.n(a),o=e(12028),E=e(81849),i=e(65186),d=e(74855),l=e.n(d),r=e(86896);const m=({children:A,target:C})=>{const U=(0,E.lm)(),{formatMessage:h}=(0,r.Z)(),y=()=>{U({type:"info",message:{id:"notification.link-copied"}})},L=h({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(E.Y_,{endAction:t.createElement(d.CopyToClipboard,{onCopy:y,text:C},t.createElement(o.h,{label:L,noBorder:!0,icon:t.createElement(i.Z,null)})),title:C,titleEllipsis:!0,subtitle:A,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};m.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const p=m},31605:(D,n,e)=>{e.d(n,{Z:()=>l});var t=e(67294),a=e(86896),s=e(45697),o=e.n(s),E=e(63871),i=e(82464);const d=({registrationToken:r})=>{const{formatMessage:m}=(0,a.Z)(),p=`${window.location.origin}${E.Z}auth/register?registrationToken=${r}`;return t.createElement(i.Z,{target:p},m({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};d.defaultProps={registrationToken:""},d.propTypes={registrationToken:o().string};const l=d},81288:(D,n,e)=>{e.d(n,{Z:()=>y});var t=e(67294),a=e(45697),s=e.n(a),o=e(86896),E=e(48302),i=e(82562),d=e(88767),l=e(71997),r=e(86647),m=e(81849);const p=l.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,A=l.ZP.div`
  animation: ${p} 2s infinite linear;
`,C=()=>t.createElement(A,null,t.createElement(r.Z,null)),U=async()=>{const{get:L}=(0,m.tg)(),{data:g}=await L("/admin/roles");return g.data},h=({disabled:L,error:g,onChange:se,value:J})=>{const{status:ne,data:pe}=(0,d.useQuery)(["roles"],U,{staleTime:5e4}),{formatMessage:I}=(0,o.Z)(),H=g?I({id:g,defaultMessage:g}):"",de=I({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),$=I({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),fe=I({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Me=ne==="loading"?t.createElement(C,null):void 0;return t.createElement(E.P,{id:"roles",disabled:L,error:H,hint:$,label:de,name:"roles",onChange:W=>{se({target:{name:"roles",value:W}})},placeholder:fe,multi:!0,startIcon:Me,value:J,withTags:!0,required:!0},(pe||[]).map(W=>t.createElement(i.W,{key:W.id,value:W.id},I({id:`global.${W.code}`,defaultMessage:W.name}))))};h.defaultProps={disabled:!1,error:void 0},h.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const y=h},49823:(D,n,e)=>{e.d(n,{Z:()=>h});var t=e(67294),a=e(86896),s=e(45697),o=e.n(s),E=e(11047),i=e(84495),d=e(52624),l=e(29728),r=e(51277),m=e(23293),p=e(14293),A=e.n(p),C=e(69483);const U=({onClick:y})=>{const{formatMessage:L}=(0,a.Z)(),{license:g}=(0,C.q5)(),{permittedSeats:se,shouldStopCreate:J}=g?.data??{};return t.createElement(E.k,{gap:2},!A()(se)&&J&&t.createElement(i.u,{description:L({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(d.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:r.Z})),t.createElement(l.z,{"data-testid":"create-user-button",onClick:y,startIcon:t.createElement(m.Z,null),size:"S",disabled:J},L({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};U.propTypes={onClick:o().func.isRequired};const h=U},97083:(D,n,e)=>{e.d(n,{Z:()=>o});var t=e(57338);const a=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},o={...t.Z,...a}},810:(D,n,e)=>{e.d(n,{Z:()=>a});const a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(D,n,e)=>{e.d(n,{Z:()=>l});var t=e(67294),a=e(86896),s=e(45697),o=e.n(s),E=e(63871),i=e(82464);const d=({registrationToken:r})=>{const{formatMessage:m}=(0,a.Z)();return r?t.createElement(i.Z,{target:`${window.location.origin}${E.Z}auth/register?registrationToken=${r}`},m({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(i.Z,{target:`${window.location.origin}${E.Z}auth/login`},m({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};d.defaultProps={registrationToken:""},d.propTypes={registrationToken:o().string};const l=d},2407:(D,n,e)=>{e.d(n,{$:()=>r,O:()=>m});var t=e(85893),a=e(16405),s=e(71997),o=e(41580),E=e(11047),i=e(75515),d=e(63237);const l=(0,s.ZP)(E.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:p})=>p.colors.neutral500};
    }
  }
  :last-of-type ${o.x} {
    display: none;
  }
  :last-of-type ${i.Z} {
    color: ${({theme:p})=>p.colors.neutral800};
    font-weight: ${({theme:p})=>p.fontWeights.bold};
  }
`,r=({children:p})=>(0,t.jsxs)(l,{inline:!0,as:"li",children:[(0,t.jsx)(i.Z,{variant:"pi",textColor:"neutral600",children:p}),(0,t.jsx)(o.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(a.Z,{})})]});r.displayName="Crumb";const m=({children:p,label:A,...C})=>(0,t.jsxs)(E.k,{...C,children:[(0,t.jsx)(d.T,{children:A}),(0,t.jsx)("ol",{"aria-hidden":!0,children:p})]});m.displayName="Breadcrumbs"},36989:(D,n,e)=>{e.d(n,{Z:()=>l});var t=e(67294),a=e(45697),s=e(71997),o=e(41580),E=e(11047);const i=(0,s.ZP)(E.k)`
  & > * + * {
    margin-left: ${({theme:r})=>r.spaces[2]};
  }

  margin-left: ${({pullRight:r})=>r?"auto":void 0};
`,d=(0,s.ZP)(i)`
  flex-shrink: 0;
`,l=({startActions:r,endActions:m})=>r||m?t.createElement(o.x,{paddingLeft:10,paddingRight:10},t.createElement(o.x,{paddingBottom:4},t.createElement(E.k,{justifyContent:"space-between",alignItems:"flex-start"},r&&t.createElement(i,{wrap:"wrap"},r),m&&t.createElement(d,{pullRight:!0},m)))):null;l.defaultProps={endActions:void 0,startActions:void 0},l.propTypes={endActions:a.node,startActions:a.node}},23293:(D,n,e)=>{e.d(n,{Z:()=>s});var t=e(85893);const a=o=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:[(0,t.jsx)("path",{d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z",fill:"#32324D"}),(0,t.jsx)("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z",fill:"#32324D"}),(0,t.jsx)("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z",fill:"#32324D"})]}),s=a}}]);
