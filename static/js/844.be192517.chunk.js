"use strict";(self.webpackChunkcompany=self.webpackChunkcompany||[]).push([[844],{3844:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var r=a(4117),s=a(5043);const i={listItem:"UserList_listItem__nZdBc",pagination:"UserList_pagination__gvpnA"},o={item_container_info:"userGalleryItem_item_container_info__VC4kR",user_avatar:"userGalleryItem_user_avatar__jHvjh",item:"userGalleryItem_item__R9Euz",link_text:"userGalleryItem_link_text__-8t5i"};var n=a(4849),l=a(6363),c=a(5475),p=a(4094),d=a(579);const u=e=>{let{user_id:t,user_email:a,user_firstname:s,user_lastname:i,user_avatar:u}=e;const{t:m}=(0,r.Bd)();return(0,d.jsxs)("li",{className:o.item,children:[(0,d.jsxs)(c.N_,{className:o.link_text,to:`${p.i.UserListPage}/${t}`,children:[(0,d.jsx)("img",{className:o.user_avatar,src:u||n,alt:s}),(0,d.jsxs)("div",{className:o.item_container_info,children:[(0,d.jsxs)("p",{className:o.title,children:[m("UserListPage.FirstName"),": ",s]}),(0,d.jsxs)("p",{className:o.title,children:[m("UserListPage.LastName"),": ",i]})]})]}),(0,d.jsx)(l.A,{email:a})]},t)};var m=a(3364),v=a(2524),g=a(857),h=a(8387),x=a(8610),y=a(2532),b=a(552);function f(e){return(0,b.Ay)("MuiPagination",e)}(0,y.A)("MuiPagination",["root","ul","outlined","text"]);var _=a(1052);var $=a(1546),A=a(875);function C(e){return(0,b.Ay)("MuiPaginationItem",e)}const P=(0,y.A)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]);var j=a(3424),N=a(6803),k=a(2445),z=a(9662);const L=(0,z.A)((0,d.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),w=(0,z.A)((0,d.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),M=(0,z.A)((0,d.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),R=(0,z.A)((0,d.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");var S=a(4162),O=a(2108),I=a(6262),B=a(6431);const T=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,N.A)(a.size)}`],"text"===a.variant&&t[`text${(0,N.A)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,N.A)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},F=(0,O.Ay)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:T})((0,I.A)((e=>{let{theme:t}=e;return{...t.typography.body2,borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${P.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:{size:"small"},style:{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)}}]}}))),U=(0,O.Ay)(j.A,{name:"MuiPaginationItem",slot:"Root",overridesResolver:T})((0,I.A)((e=>{let{theme:t}=e;return{...t.typography.body2,borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${P.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${P.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,$.X4)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${P.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,$.X4)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${P.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}},variants:[{props:{size:"small"},style:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)}},{props:{shape:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"outlined"},style:{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${P.selected}`]:{[`&.${P.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}}}},{props:{variant:"text"},style:{[`&.${P.selected}`]:{[`&.${P.disabled}`]:{color:(t.vars||t).palette.action.disabled}}}},...Object.entries(t.palette).filter((0,k.A)(["dark","contrastText"])).map((e=>{let[a]=e;return{props:{variant:"text",color:a},style:{[`&.${P.selected}`]:{color:(t.vars||t).palette[a].contrastText,backgroundColor:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:(t.vars||t).palette[a].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a].main}},[`&.${P.focusVisible}`]:{backgroundColor:(t.vars||t).palette[a].dark},[`&.${P.disabled}`]:{color:(t.vars||t).palette.action.disabled}}}}})),...Object.entries(t.palette).filter((0,k.A)(["light"])).map((e=>{let[a]=e;return{props:{variant:"outlined",color:a},style:{[`&.${P.selected}`]:{color:(t.vars||t).palette[a].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[a].mainChannel} / 0.5)`:(0,$.X4)(t.palette[a].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:(0,$.X4)(t.palette[a].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,$.X4)(t.palette[a].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,$.X4)(t.palette[a].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}}}}}))]}}))),G=(0,O.Ay)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((0,I.A)((e=>{let{theme:t}=e;return{fontSize:t.typography.pxToRem(20),margin:"0 -8px",variants:[{props:{size:"small"},style:{fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:t.typography.pxToRem(22)}}]}}))),W=s.forwardRef((function(e,t){const a=(0,B.b)({props:e,name:"MuiPaginationItem"}),{className:r,color:s="standard",component:i,components:o={},disabled:n=!1,page:l,selected:c=!1,shape:p="circular",size:u="medium",slots:m={},slotProps:v={},type:g="page",variant:y="text",...b}=a,f={...a,color:s,disabled:n,selected:c,shape:p,size:u,type:g,variant:y},_=(0,A.I)(),$=(e=>{const{classes:t,color:a,disabled:r,selected:s,size:i,shape:o,type:n,variant:l}=e,c={root:["root",`size${(0,N.A)(i)}`,l,o,"standard"!==a&&`color${(0,N.A)(a)}`,"standard"!==a&&`${l}${(0,N.A)(a)}`,r&&"disabled",s&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[n]],icon:["icon"]};return(0,x.A)(c,C,t)})(f),P={slots:{previous:m.previous??o.previous,next:m.next??o.next,first:m.first??o.first,last:m.last??o.last},slotProps:v},[j,k]=(0,S.A)("previous",{elementType:M,externalForwardedProps:P,ownerState:f}),[z,O]=(0,S.A)("next",{elementType:R,externalForwardedProps:P,ownerState:f}),[I,T]=(0,S.A)("first",{elementType:L,externalForwardedProps:P,ownerState:f}),[W,E]=(0,S.A)("last",{elementType:w,externalForwardedProps:P,ownerState:f}),V=_?{previous:"next",next:"previous",first:"last",last:"first"}[g]:g,X={previous:j,next:z,first:I,last:W}[V],H={previous:k,next:O,first:T,last:E}[V];return"start-ellipsis"===g||"end-ellipsis"===g?(0,d.jsx)(F,{ref:t,ownerState:f,className:(0,h.A)($.root,r),children:"\u2026"}):(0,d.jsxs)(U,{ref:t,ownerState:f,component:i,disabled:n,className:(0,h.A)($.root,r),...b,children:["page"===g&&l,X?(0,d.jsx)(G,{...H,className:$.icon,as:X}):null]})})),E=(0,O.Ay)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),V=(0,O.Ay)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function X(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}const H=s.forwardRef((function(e,t){const a=(0,B.b)({props:e,name:"MuiPagination"}),{boundaryCount:r=1,className:s,color:i="standard",count:o=1,defaultPage:n=1,disabled:l=!1,getItemAriaLabel:c=X,hideNextButton:p=!1,hidePrevButton:u=!1,onChange:m,page:v,renderItem:g=e=>(0,d.jsx)(W,{...e}),shape:y="circular",showFirstButton:b=!1,showLastButton:$=!1,siblingCount:A=1,size:C="medium",variant:P="text",...j}=a,{items:N}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{boundaryCount:t=1,componentName:a="usePagination",count:r=1,defaultPage:s=1,disabled:i=!1,hideNextButton:o=!1,hidePrevButton:n=!1,onChange:l,page:c,showFirstButton:p=!1,showLastButton:d=!1,siblingCount:u=1,...m}=e,[v,g]=(0,_.A)({controlled:c,default:s,name:a,state:"page"}),h=(e,t)=>{c||g(t),l&&l(e,t)},x=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},y=x(1,Math.min(t,r)),b=x(Math.max(r-t+1,t+1),r),f=Math.max(Math.min(v-u,r-t-2*u-1),t+2),$=Math.min(Math.max(v+u,t+2*u+2),r-t-1),A=[...p?["first"]:[],...n?[]:["previous"],...y,...f>t+2?["start-ellipsis"]:t+1<r-t?[t+1]:[],...x(f,$),...$<r-t-1?["end-ellipsis"]:r-t>t?[r-t]:[],...b,...o?[]:["next"],...d?["last"]:[]],C=e=>{switch(e){case"first":return 1;case"previous":return v-1;case"next":return v+1;case"last":return r;default:return null}};return{items:A.map((e=>"number"===typeof e?{onClick:t=>{h(t,e)},type:"page",page:e,selected:e===v,disabled:i,"aria-current":e===v?"true":void 0}:{onClick:t=>{h(t,C(e))},type:e,page:C(e),selected:!1,disabled:i||!e.includes("ellipsis")&&("next"===e||"last"===e?v>=r:v<=1)})),...m}}({...a,componentName:"Pagination"}),k={...a,boundaryCount:r,color:i,count:o,defaultPage:n,disabled:l,getItemAriaLabel:c,hideNextButton:p,hidePrevButton:u,renderItem:g,shape:y,showFirstButton:b,showLastButton:$,siblingCount:A,size:C,variant:P},z=(e=>{const{classes:t,variant:a}=e,r={root:["root",a],ul:["ul"]};return(0,x.A)(r,f,t)})(k);return(0,d.jsx)(E,{"aria-label":"pagination navigation",className:(0,h.A)(z.root,s),ownerState:k,ref:t,...j,children:(0,d.jsx)(V,{className:z.ul,ownerState:k,children:N.map(((e,t)=>(0,d.jsx)("li",{children:g({...e,color:i,"aria-label":c(e.type,e.page,e.selected),shape:y,size:C,variant:P})},t)))})})}));var Z=a(9250);const q=()=>{const[e,t]=(0,c.ok)(),a=Number(e.get("page"))||1,[r,o]=(0,s.useState)(a),n=(0,v.j)();(0,s.useEffect)((()=>{n((0,g.hU)({page:r,page_size:9}))}),[n,r]);const{users:l,isLoading:p,error:h,total_results:x}=(0,v.G)(m.P),y=Math.ceil(x/9);if(!l)return(0,d.jsx)(Z.A,{});const b=l.map((e=>(0,d.jsx)(u,{user_id:e.user_id,user_email:e.user_email,user_firstname:e.user_firstname,user_lastname:e.user_lastname,user_avatar:e.user_avatar},e.user_id)));return(0,d.jsxs)("div",{children:[p&&(0,d.jsx)("p",{children:"Loading users..."}),h&&(0,d.jsxs)("p",{className:i.error,children:["Error: ",h]}),(0,d.jsx)("ul",{className:i.listItem,children:b}),(0,d.jsx)(H,{className:i.pagination,count:y,page:r,onChange:(e,a)=>{o(a),t({page:a.toString()})},variant:"outlined",color:"primary"})]})},D="userlist_container__51pEg",J=()=>{const{t:e}=(0,r.Bd)();return(0,d.jsxs)("div",{className:D,children:[(0,d.jsx)("h1",{children:e("PageName.UserList")}),(0,d.jsx)(q,{})]})}},3364:(e,t,a)=>{a.d(t,{P:()=>r});const r=e=>e.user},6363:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(4117);const s="renderEmail_link__NM4nO";var i=a(579);const o=e=>{let{email:t}=e;const{t:a}=(0,r.Bd)();return t&&0!==t.length?(0,i.jsx)("a",{href:`mailto:${t}`,className:s,children:t}):(0,i.jsx)("p",{children:a("CompanyPage.noEmail")})}},4849:(e,t,a)=>{e.exports=a.p+"static/media/no_img.7dd25cf047980b6d5843.jpg"}}]);
//# sourceMappingURL=844.be192517.chunk.js.map