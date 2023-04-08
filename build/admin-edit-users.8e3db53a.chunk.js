"use strict";(self.webpackChunkbphc_ulti_strapi=self.webpackChunkbphc_ulti_strapi||[]).push([[4263],{22282:(Z,o,e)=>{e.r(o),e.d(o,{default:()=>Ee});var t=e(67294),a=e(81849),s=e(16550),i=e(87751),l=e(87462),f=e(15861),n=e(64687),v=e.n(n),u=e(86896),r=e(45697),g=e.n(r),D=e(78718),T=e.n(D),K=e(27361),L=e.n(K),S=e(57557),I=e.n(S),U=e(88767),Q=e(41054),$=e(185),F=e(53979),N=e(29728),O=e(49066),_=e(41580),z=e(11047),j=e(75515),H=e(11276),X=e(74571),P=e(85018),k=e(67109),G=e(19631);const ie=async C=>{const{get:B}=(0,a.tg)(),{data:M}=await B(`/admin/users/${C}`);return M.data},de=async(C,B)=>{const{put:M}=(0,a.tg)(),{data:R}=await M(`/admin/users/${C}`,B);return R.data},ce=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var me=e(17405),ue=e(81288),ge=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),q=["email","firstname","lastname","username","isActive","roles"],ee=function(B){var M=B.canUpdate,R=(0,u.Z)(),d=R.formatMessage,V=(0,s.$B)("/settings/users/:id"),W=V.params.id,fe=(0,s.k6)(),ve=fe.push,Me=(0,a.QI)(),he=Me.setUserDisplayName,w=(0,a.lm)(),te=(0,a.o1)(),Pe=te.lockApp,De=te.unlockApp;(0,a.go)();var ae=(0,U.useQuery)(["user",W],function(){return ie(W)},{retry:!1,onError:function(c){var m=c.response.status;m===403&&(w({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),ve("/")),console.log(c.response.status)}}),Le=ae.status,h=ae.data,Oe=function(){var p=(0,f.Z)(v().mark(function c(m,y){var x,b,A,J,re;return v().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return Pe(),E.prev=1,E.next=4,de(W,I()(m,"confirmPassword"));case 4:x=E.sent,w({type:"success",message:d({id:"notification.success.saved",defaultMessage:"Saved"})}),b=a.I8.getUserInfo(),W.toString()===b.id.toString()&&(a.I8.setUserInfo(x),A=L()(m,"username")||(0,G.Pp)(m.firstname,m.lastname),he(A)),y.setValues(T()(m,q)),E.next=17;break;case 11:E.prev=11,E.t0=E.catch(1),J=(0,G.Iz)(E.t0.response.data),re=Object.keys(J).reduce(function(oe,le){return oe[le]=J[le].id,oe},{}),y.setErrors(re),w({type:"warning",message:L()(E.t0,"response.data.error.message","notification.error")});case 17:De();case 18:case"end":return E.stop()}},c,null,[[1,11]])}));return function(m,y){return p.apply(this,arguments)}}(),se=Le!=="success",ye=se?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},Y=Object.keys(T()(h,q)).reduce(function(p,c){return c==="roles"?(p[c]=(h?.roles||[]).map(function(m){var y=m.id;return y}),p):(p[c]=h?.[c],p)},{}),Ae=Y.username||(0,G.Pp)(Y.firstname,Y.lastname),ne=d(ye,{name:Ae});return se?t.createElement($.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"Users"}),t.createElement(F.T,{primaryAction:t.createElement(N.z,{disabled:!0,startIcon:t.createElement(P.Z,null),type:"button",size:"L"},d({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(k.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},d({id:"global.back",defaultMessage:"Back"}))}),t.createElement(O.D,null,t.createElement(a.dO,null))):t.createElement($.o,null,t.createElement(a.SL,{name:"Users"}),t.createElement(Q.J9,{onSubmit:Oe,initialValues:Y,validateOnChange:!1,validationSchema:me.YM},function(p){var c=p.errors,m=p.values,y=p.handleChange,x=p.isSubmitting;return t.createElement(a.l0,null,t.createElement(F.T,{primaryAction:t.createElement(N.z,{disabled:x||!M,startIcon:t.createElement(P.Z,null),loading:x,type:"submit",size:"L"},d({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(k.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},d({id:"global.back",defaultMessage:"Back"}))}),t.createElement(O.D,null,h?.registrationToken&&t.createElement(_.x,{paddingBottom:6},t.createElement(ge,{registrationToken:h.registrationToken})),t.createElement(z.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(_.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(z.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(j.Z,{variant:"delta",as:"h2"},d({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(H.r,{gap:5},ce.map(function(b){return b.map(function(A){return t.createElement(X.P,(0,l.Z)({key:A.name},A.size),t.createElement(a.jm,(0,l.Z)({},A,{disabled:!M,error:c[A.name],onChange:y,value:m[A.name]||""})))})})))),t.createElement(_.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(z.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(j.Z,{variant:"delta",as:"h2"},d({id:"global.roles",defaultMessage:"User's role"})),t.createElement(H.r,{gap:5},t.createElement(X.P,{col:6,xs:12},t.createElement(ue.Z,{disabled:!M,error:c.roles,onChange:y,value:m.roles}))))))))}))};ee.propTypes={canUpdate:g().bool.isRequired};const pe=ee,Ee=()=>{const C=(0,a.lm)(),B=(0,t.useMemo)(()=>({read:i.Z.settings.users.read,update:i.Z.settings.users.update}),[]),{isLoading:M,allowedActions:{canRead:R,canUpdate:d}}=(0,a.ss)(B),{state:V}=(0,s.TH)(),W=V?.from??"/";return(0,t.useEffect)(()=>{M||!R&&!d&&C({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[M,R,d,C]),M?t.createElement(a.dO,null):!R&&!d?t.createElement(s.l_,{to:W}):t.createElement(pe,{canUpdate:d})}},82464:(Z,o,e)=>{e.d(o,{Z:()=>g});var t=e(67294),a=e(45697),s=e.n(a),i=e(12028),l=e(81849),f=e(65186),n=e(74855),v=e.n(n),u=e(86896);const r=({children:D,target:T})=>{const K=(0,l.lm)(),{formatMessage:L}=(0,u.Z)(),S=()=>{K({type:"info",message:{id:"notification.link-copied"}})},I=L({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(l.Y_,{endAction:t.createElement(n.CopyToClipboard,{onCopy:S,text:T},t.createElement(i.h,{label:I,noBorder:!0,icon:t.createElement(f.Z,null)})),title:T,titleEllipsis:!0,subtitle:D,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};r.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const g=r},31605:(Z,o,e)=>{e.d(o,{Z:()=>v});var t=e(67294),a=e(86896),s=e(45697),i=e.n(s),l=e(63871),f=e(82464);const n=({registrationToken:u})=>{const{formatMessage:r}=(0,a.Z)(),g=`${window.location.origin}${l.Z}auth/register?registrationToken=${u}`;return t.createElement(f.Z,{target:g},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:i().string};const v=n},81288:(Z,o,e)=>{e.d(o,{Z:()=>S});var t=e(67294),a=e(45697),s=e.n(a),i=e(86896),l=e(48302),f=e(82562),n=e(88767),v=e(71997),u=e(86647),r=e(81849);const g=v.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,D=v.ZP.div`
  animation: ${g} 2s infinite linear;
`,T=()=>t.createElement(D,null,t.createElement(u.Z,null)),K=async()=>{const{get:I}=(0,r.tg)(),{data:U}=await I("/admin/roles");return U.data},L=({disabled:I,error:U,onChange:Q,value:$})=>{const{status:F,data:N}=(0,n.useQuery)(["roles"],K,{staleTime:5e4}),{formatMessage:O}=(0,i.Z)(),_=U?O({id:U,defaultMessage:U}):"",z=O({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),j=O({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),H=O({id:"app.components.Select.placeholder",defaultMessage:"Select"}),X=F==="loading"?t.createElement(T,null):void 0;return t.createElement(l.P,{id:"roles",disabled:I,error:_,hint:j,label:z,name:"roles",onChange:P=>{Q({target:{name:"roles",value:P}})},placeholder:H,multi:!0,startIcon:X,value:$,withTags:!0,required:!0},(N||[]).map(P=>t.createElement(f.W,{key:P.id,value:P.id},O({id:`global.${P.code}`,defaultMessage:P.name}))))};L.defaultProps={disabled:!1,error:void 0},L.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const S=L},17405:(Z,o,e)=>{e.d(o,{YM:()=>u,Rw:()=>l});var t=e(87561),a=e(81849);const s={firstname:t.Z_().trim().required(a.I0.required),lastname:t.Z_(),email:t.Z_().email(a.I0.email).lowercase().required(a.I0.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.I0.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(r,g)=>r?g.required(a.I0.required):g)},l={...s,currentPassword:t.Z_().when(["password","confirmPassword"],(r,g,D)=>r||g?D.required(a.I0.required):D),preferedLanguage:t.Z_().nullable()},n={roles:t.IX().min(1,a.I0.required).required(a.I0.required)},u=t.Ry().shape({...s,isActive:t.Xg(),...n})},12201:(Z,o,e)=>{e.d(o,{Z:()=>v});var t=e(67294),a=e(86896),s=e(45697),i=e.n(s),l=e(63871),f=e(82464);const n=({registrationToken:u})=>{const{formatMessage:r}=(0,a.Z)();return u?t.createElement(f.Z,{target:`${window.location.origin}${l.Z}auth/register?registrationToken=${u}`},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(f.Z,{target:`${window.location.origin}${l.Z}auth/login`},r({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:i().string};const v=n},67109:(Z,o,e)=>{e.d(o,{Z:()=>s});var t=e(85893);const a=i=>(0,t.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:(0,t.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),s=a}}]);
