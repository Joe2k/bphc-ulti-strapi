"use strict";(self.webpackChunkbphc_ulti_strapi=self.webpackChunkbphc_ulti_strapi||[]).push([[5516],{82679:(Y,I,n)=>{n.r(I),n.d(I,{MarketPlacePage:()=>ve,default:()=>kt});var e=n(67294),f=n(86896),N=n(64593),y=n(90233),d=n(81849),O=n(14087),k=n(17034),R=n(185),h=n(11047),p=n(41580),b=n(75515),q=n(49066),Ce=n(49123),Te=n(82777),A=n(60633),L=n(42761),X=n(45697),a=n.n(X),x=n(52624),Ze=n(82791),B=n(71997);const _=B.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:t})=>t.spaces[4]};
`;_.propTypes={children:X.node.isRequired};const Ie=(0,B.ZP)(p.x)`
  background: ${({theme:t})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${t.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Ne=()=>e.createElement(_,null,Array(12).fill(null).map((t,s)=>e.createElement(Ie,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),ee=({content:t})=>e.createElement(p.x,{position:"relative"},e.createElement(Ne,null),e.createElement(p.x,{position:"absolute",top:11,width:"100%"},e.createElement(h.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(x.J,{as:Ze.EmptyStateDocument,color:"",width:"160px",height:"88px"}),e.createElement(p.x,{paddingTop:6},e.createElement(b.Z,{variant:"delta",as:"p",textColor:"neutral600"},t)))));ee.propTypes={content:a().string.isRequired};const te=ee;var Be=n(53979),ae=n(80994),C=n(85893);const we=t=>(0,C.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,C.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",fill:"#212134"})}),De=we,j=({isOnline:t,npmPackageType:s})=>{const{formatMessage:r}=(0,f.Z)(),{trackUsage:i}=(0,d.rS)(),o=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(Be.T,{title:r({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:r({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:t&&e.createElement(ae.Q,{startIcon:e.createElement(De,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>i(o),isExternal:!0},r({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},ne=j;j.defaultProps={npmPackageType:"plugin"},j.propTypes={isOnline:a().bool.isRequired,npmPackageType:a().string};var se=n(88767),re=n(52861);const Oe="https://market-api.strapi.io",Ae=async(t={})=>{const{data:s}=await re.Z.get(`${Oe}/providers`,{params:t});return s},Le=(t,s)=>{const r=(0,d.lm)();return(0,se.useQuery)(["list-marketplace-providers",s],()=>Ae(s),{onSuccess(){t&&t()},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},je="https://market-api.strapi.io",$e=async(t={})=>{const{data:s}=await re.Z.get(`${je}/plugins`,{params:t});return{...s,data:s.data.filter(i=>i.attributes.strapiCompatibility==="v4")}},Fe=(t,s)=>{const r=(0,d.lm)();return(0,se.useQuery)(["list-marketplace-plugins",s],()=>$e(s),{onSuccess(){t&&t()},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};var Ve=n(87751);const Qe=n.p+"9d5d788027e86620c234.svg",ze=()=>{const t=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,r]=(0,e.useState)(t),i=()=>r(!0),o=()=>r(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",i),window.addEventListener("offline",o),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",o)}),[]),s},He=t=>(0,C.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,C.jsx)("path",{d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z",fill:"#AC73E6"}),(0,C.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",fill:"#fff"})]}),Ue=He;var ie=n(17772);const Ge=()=>{const{formatMessage:t}=(0,f.Z)(),{trackUsage:s}=(0,d.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(d.Y_,{title:t({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:t({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Ue,null),iconBackground:"alternative100",endAction:e.createElement(x.J,{as:ie.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var We=n(11276),Je=n(74571),Ke=n(23450),Ye=n.n(Ke),$=n(84495),qe=n(86783),Xe=n(61473),_e=n(85018),et=n(81249),le=n.n(et),F=n(29728),oe=n(65186);const D=({description:t,installMessage:s,disabled:r,handleCopy:i,pluginName:o})=>e.createElement($.u,{"data-testid":`tooltip-${o}`,description:t},e.createElement(p.x,null,e.createElement(F.z,{size:"S",startIcon:e.createElement(oe.Z,null),variant:"secondary",disabled:r,onClick:i},s))),V=({strapiPeerDepVersion:t,strapiAppVersion:s,handleCopy:r,pluginName:i})=>{const{formatMessage:o}=(0,f.Z)(),g=le().validRange(t),c=le().satisfies(s,g),l=o({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!g)return e.createElement(D,{installMessage:l,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:r});if(!c)return e.createElement(D,{installMessage:l,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:g}),disabled:!0})}return e.createElement(F.z,{size:"S",startIcon:e.createElement(oe.Z,null),variant:"secondary",onClick:r},l)};D.defaultProps={disabled:!1,handleCopy:null},D.propTypes={description:a().string.isRequired,installMessage:a().string.isRequired,disabled:a().bool,handleCopy:a().func,pluginName:a().string.isRequired},V.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},V.propTypes={strapiAppVersion:a().string,strapiPeerDepVersion:a().string,handleCopy:a().func.isRequired,pluginName:a().string.isRequired};const tt=V,Q=({isInstalled:t,isInDevelopmentMode:s,commandToCopy:r,strapiAppVersion:i,strapiPeerDepVersion:o,pluginName:g})=>{const c=(0,d.lm)(),{formatMessage:l}=(0,f.Z)(),{trackUsage:u}=(0,d.rS)(),m=()=>{navigator.clipboard.writeText(r),u("willInstallPlugin"),c({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}})};return t?e.createElement(p.x,{paddingLeft:4},e.createElement(x.J,{as:_e.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(b.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},l({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(tt,{strapiAppVersion:i,strapiPeerDepVersion:o,handleCopy:m,pluginName:g}):null};Q.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},Q.propTypes={isInstalled:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,commandToCopy:a().string.isRequired,strapiAppVersion:a().string,strapiPeerDepVersion:a().string,pluginName:a().string.isRequired};const at=Q;var nt=n(70004),st=n(57750);const rt=t=>(0,C.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,C.jsx)("path",{d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z",fill:"#212134"})}),it=rt;var lt=n(7217);const ot=(0,B.ZP)(nt.i)`
  width: ${(0,d.Q1)(12)};
  transform: rotate(90deg);
`,z=({githubStars:t,npmDownloads:s,npmPackageType:r})=>{const{formatMessage:i}=(0,f.Z)();return e.createElement(h.k,{gap:1},!!t&&e.createElement(e.Fragment,null,e.createElement(x.J,{as:st.Z,height:(0,d.Q1)(12),width:(0,d.Q1)(12),"aria-hidden":!0}),e.createElement(x.J,{as:it,height:(0,d.Q1)(12),width:(0,d.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${r}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:t,package:r})},e.createElement(b.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},t)),e.createElement(ot,{unsetMargin:!1,background:"neutral200"})),e.createElement(x.J,{as:lt.Z,height:(0,d.Q1)(12),width:(0,d.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${r}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:r})},e.createElement(b.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},s)))};z.defaultProps={githubStars:0,npmDownloads:0},z.propTypes={githubStars:a().number,npmDownloads:a().number,npmPackageType:a().string.isRequired};const ct=z,dt=(0,B.ZP)(b.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,H=({npmPackage:t,isInstalled:s,useYarn:r,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:g})=>{const{attributes:c}=t,{formatMessage:l}=(0,f.Z)(),{trackUsage:u}=(0,d.rS)(),m=r?`yarn add ${c.npmPackageName}`:`npm install ${c.npmPackageName}`,M=l({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),T=`https://market.strapi.io/${Ye().plural(o)}/${c.slug}`;return e.createElement(h.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(p.x,null,e.createElement(h.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(p.x,{as:"img",src:c.logo.url,alt:`${c.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(ct,{githubStars:c.githubStars,npmDownloads:c.npmDownloads,npmPackageType:o})),e.createElement(p.x,{paddingTop:4},e.createElement(b.Z,{as:"h3",variant:"delta"},e.createElement(h.k,{alignItems:"center"},c.name,c.validated&&!c.madeByStrapi&&e.createElement($.u,{description:l({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(h.k,null,e.createElement(x.J,{as:qe.Z,marginLeft:2,color:"success600"}))),c.madeByStrapi&&e.createElement($.u,{description:M},e.createElement(h.k,null,e.createElement(p.x,{as:"img",src:Xe,alt:M,marginLeft:1,width:6,height:"auto"})))))),e.createElement(p.x,{paddingTop:2},e.createElement(dt,{as:"p",variant:"omega",textColor:"neutral600"},c.description))),e.createElement(h.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(ae.Q,{size:"S",href:T,isExternal:!0,endIcon:e.createElement(ie.Z,null),"aria-label":l({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:c.name}),variant:"tertiary",onClick:()=>u("didPluginLearnMore")},l({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(at,{isInstalled:s,isInDevelopmentMode:i,commandToCopy:m,strapiAppVersion:g,strapiPeerDepVersion:c.strapiVersion,pluginName:c.name})))};H.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},H.propTypes={npmPackage:a().shape({id:a().string.isRequired,attributes:a().shape({name:a().string.isRequired,description:a().string.isRequired,slug:a().string.isRequired,npmPackageName:a().string.isRequired,npmPackageUrl:a().string.isRequired,repositoryUrl:a().string.isRequired,logo:a().object.isRequired,developerName:a().string.isRequired,validated:a().bool.isRequired,madeByStrapi:a().bool.isRequired,strapiCompatibility:a().oneOf(["v3","v4"]),strapiVersion:a().string,githubStars:a().number,npmDownloads:a().number}).isRequired}).isRequired,isInstalled:a().bool.isRequired,useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool,npmPackageType:a().string.isRequired,strapiAppVersion:a().string};const gt=H,U=({npmPackages:t,installedPackageNames:s,useYarn:r,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:g})=>{const c=(0,e.useCallback)(l=>s.includes(l),[s]);return e.createElement(We.r,{gap:4},t.map(l=>e.createElement(Je.P,{col:4,s:6,xs:12,style:{height:"100%"},key:l.id},e.createElement(gt,{npmPackage:l,isInstalled:c(l.attributes.npmPackageName),useYarn:r,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:g}))))};U.defaultProps={installedPackageNames:[],strapiAppVersion:null},U.propTypes={npmPackages:a().array.isRequired,installedPackageNames:a().arrayOf(a().string),useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,npmPackageType:a().string.isRequired,strapiAppVersion:a().string};const ce=U;var de=n(48302),ge=n(82562);const pt=(0,B.ZP)(p.x)`
  font-weight: ${({theme:t})=>t.fontWeights.semiBold};

  span {
    font-size: ${({theme:t})=>t.fontSizes[1]};
  }
`,pe=({sortQuery:t,handleSelectChange:s})=>{const{formatMessage:r}=(0,f.Z)(),i={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(pt,null,e.createElement(de.P,{size:"S",id:"sort-by-select",value:t,customizeContent:()=>r(i[t].selected),onChange:o=>{s({sort:o})}},Object.entries(i).map(([o,g])=>e.createElement(ge.W,{key:o,value:o},r(g.option)))))};pe.propTypes={sortQuery:a().string.isRequired,handleSelectChange:a().func.isRequired};const ut=pe;var mt=n(72775),ft=n(70968),ht=n(89597),Pt=n(26048),vt=n(25896);const ue=({message:t,value:s,onChange:r,possibleFilters:i,onClear:o,customizeContent:g})=>{const c=(l,u)=>`${l} (${u})`;return e.createElement(de.P,{"data-testid":`${t}-button`,"aria-label":t,placeholder:t,size:"M",onChange:r,onClear:o,value:s,customizeContent:g,multi:!0},Object.entries(i).map(([l,u])=>e.createElement(ge.W,{"data-testid":`${l}-${u}`,key:l,value:l},c(l,u))))};ue.propTypes={message:a().string.isRequired,value:a().array.isRequired,onChange:a().func.isRequired,possibleFilters:a().object.isRequired,onClear:a().func.isRequired,customizeContent:a().func.isRequired};const me=ue,fe=({source:t,onToggle:s,query:r,npmPackageType:i,possibleCategories:o,possibleCollections:g,handleSelectChange:c,handleSelectClear:l})=>{const{formatMessage:u}=(0,f.Z)();return e.createElement(Pt.J2,{source:t,padding:3,spacing:4,onBlur:()=>{}},e.createElement(vt.i,{onEscape:s},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(p.x,null,e.createElement(me,{message:u({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:r?.collections||[],onChange:m=>{c({collections:m})},onClear:()=>l("collections"),possibleFilters:g,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:m.length})})),i==="plugin"&&e.createElement(p.x,null,e.createElement(me,{message:u({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:r?.categories||[],onChange:m=>{c({categories:m})},onClear:()=>l("categories"),possibleFilters:o,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:m.length}),name:"categories"})))))};fe.propTypes={onToggle:a().func.isRequired,source:a().shape({current:a().instanceOf(Element)}).isRequired,query:a().object.isRequired,npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const Et=fe,G=({name:t,handleRemove:s})=>e.createElement(p.x,{padding:1},e.createElement(mt.V,{icon:e.createElement(ft.Z,null),onClick:s},t)),Mt=(0,B.ZP)(F.z)`
  height: ${({theme:t})=>t.sizes.input.S};
`,he=({possibleCollections:t,possibleCategories:s,npmPackageType:r,query:i,handleSelectClear:o,handleSelectChange:g})=>{const[c,l]=(0,e.useState)(!1),u=(0,e.useRef)(),{formatMessage:m}=(0,f.Z)(),M=()=>l(P=>!P),T=(P,w)=>{const v={[w]:i[w].filter(Z=>Z!==P)};g(v)};return e.createElement(e.Fragment,null,e.createElement(p.x,{paddingTop:1,paddingBottom:1},e.createElement(Mt,{variant:"tertiary",ref:u,"data-testid":"filters-button",startIcon:e.createElement(ht.Z,null),onClick:M,size:"S"},m({id:"app.utils.filters",defaultMessage:"Filters"})),c&&e.createElement(Et,{onToggle:M,source:u,query:i,handleSelectClear:o,handleSelectChange:g,possibleCollections:t,possibleCategories:s,npmPackageType:r})),i.collections?.map(P=>e.createElement(G,{name:P,key:P,handleRemove:()=>T(P,"collections")})),r==="plugin"&&i.categories?.map(P=>e.createElement(G,{name:P,key:P,handleRemove:()=>T(P,"categories")})))};G.propTypes={name:a().string.isRequired,handleRemove:a().func.isRequired},he.propTypes={npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,query:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const yt=he,Pe=(t,s)=>(0,y.Z)(t,s,{keys:[{threshold:y.Z.rankings.WORD_STARTS_WITH,key:"attributes.name"},{threshold:y.Z.rankings.WORD_STARTS_WITH,key:"attributes.description"}],baseSort:(r,i)=>r.index<i.index?-1:1}),ve=()=>{const{formatMessage:t}=(0,f.Z)(),{trackUsage:s}=(0,d.rS)(),{notifyStatus:r}=(0,O.G)(),i=(0,e.useRef)(s),o=(0,d.lm)(),[g,c]=(0,e.useState)(""),[{query:l},u]=(0,d.Kx)(),{autoReload:m,dependencies:M,useYarn:T,strapiVersion:P}=(0,d.QI)(),w=ze(),v=l?.npmPackageType||"plugin",[Z,Ee]=(0,e.useState)({plugin:v==="plugin"?{...l}:{},provider:v==="provider"?{...l}:{}});(0,d.go)();const Rt=t({id:"global.marketplace",defaultMessage:"Marketplace"}),Me=()=>{r(t({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:Rt}))},{status:ye,data:ke}=Le(Me,Z.provider),{status:Re,data:W}=Fe(Me,Z.plugin),bt=[Re,ye].includes("loading"),St=[Re,ye].includes("error");if((0,e.useEffect)(()=>{i.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{m||o({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[o,m]),!w)return e.createElement(k.A,null,e.createElement(R.o,null,e.createElement(ne,{isOnline:w}),e.createElement(h.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",style:{paddingTop:"120px"}},e.createElement(p.x,{paddingBottom:2},e.createElement(b.Z,{textColor:"neutral700",variant:"alpha"},t({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(p.x,{paddingBottom:6},e.createElement(b.Z,{textColor:"neutral700",variant:"epsilon"},t({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:Qe,alt:"offline",style:{width:"88px",height:"88px"}}))));if(St)return e.createElement(k.A,null,e.createElement(q.D,null,e.createElement(p.x,{paddingTop:8},e.createElement(d.Hn,null))));if(bt)return e.createElement(k.A,null,e.createElement(R.o,{"aria-busy":!0},e.createElement(d.dO,null)));const J=Pe(W.data,g),K=Pe(ke.data,g),be=t({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:g}),xt=S=>{const E=S===0?"plugin":"provider",It=Z[E]&&Object.keys(Z[E]).length;u(It?{...Z[E],npmPackageType:E}:{npmPackageType:E,collections:[],categories:[],sort:"name:asc"})},Se=S=>{u(S),Ee(E=>({...E,[v]:{...E[v],...S}}))},Ct=S=>{u({[S]:[]},"remove"),Ee(E=>({...E,[v]:{}}))},xe=Object.keys(M),Tt=v==="plugin"?W.meta.collections:ke.meta.collections,Zt=W.meta.categories;return e.createElement(k.A,null,e.createElement(R.o,null,e.createElement(N.q,{title:t({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ne,{isOnline:w,npmPackageType:v}),e.createElement(q.D,null,e.createElement(p.x,{width:"25%",paddingBottom:4},e.createElement(Ce.w,{name:"searchbar",onClear:()=>c(""),value:g,onChange:S=>c(S.target.value),clearLabel:t({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:t({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},t({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"}))),e.createElement(Te.v,{label:t({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(v),onTabChange:xt},e.createElement(p.x,{paddingBottom:4},e.createElement(A.m,null,e.createElement(A.O,null,t({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ","(",J.length,")"),e.createElement(A.O,null,t({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ","(",K.length,")"))),e.createElement(h.k,{paddingBottom:4,gap:2},e.createElement(ut,{sortQuery:l?.sort||"name:asc",handleSelectChange:Se}),e.createElement(yt,{npmPackageType:v,possibleCollections:Tt,possibleCategories:Zt,query:l||{},handleSelectChange:Se,handleSelectClear:Ct})),e.createElement(L.n,null,e.createElement(L.x,null,g.length>0&&!J.length?e.createElement(te,{content:be}):e.createElement(ce,{npmPackages:J,installedPackageNames:xe,useYarn:T,isInDevelopmentMode:m,npmPackageType:"plugin",strapiAppVersion:P})),e.createElement(L.x,null,g.length>0&&!K.length?e.createElement(te,{content:be}):e.createElement(ce,{npmPackages:K,installedPackageNames:xe,useYarn:T,isInDevelopmentMode:m,npmPackageType:"provider"})))),e.createElement(p.x,{paddingTop:7},e.createElement(Ge,null)))))},kt=()=>e.createElement(d.O4,{permissions:Ve.Z.marketplace.main},e.createElement(ve,null))},17034:(Y,I,n)=>{n.d(I,{A:()=>k});var e=n(67294),f=n(45697),N=n(71997),y=n(41580);const d=(0,N.ZP)(y.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:R})=>R?"auto 1fr":"1fr"};
`,O=(0,N.ZP)(y.x)`
  overflow-x: hidden;
`,k=({sideNav:R,children:h})=>e.createElement(d,{hasSideNav:Boolean(R)},R,e.createElement(O,{paddingBottom:10},h));k.defaultProps={sideNav:void 0},k.propTypes={children:f.node.isRequired,sideNav:f.node}},57750:(Y,I,n)=>{n.d(I,{Z:()=>N});var e=n(85893);const f=y=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...y,children:(0,e.jsx)("path",{d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z",fill:"#161614"})}),N=f}}]);
