"use strict";(self.webpackChunkepns_analytics_dashboard=self.webpackChunkepns_analytics_dashboard||[]).push([[357],{74319:function(e,n,i){i.d(n,{Z:function(){return d}});var t=i(1413),r=i(45987),s=i(62711),a=i(64554),o=i(80184),l=["icon","sx"];var d=function(e){var n=e.icon,i=e.sx,d=(0,r.Z)(e,l);return(0,o.jsx)(a.Z,(0,t.Z)({component:s.JO,icon:n,sx:(0,t.Z)({},i)},d))}},29104:function(e,n,i){i.d(n,{Z:function(){return o}});var t=i(1413),r=i(43504),s=i(64554),a=i(80184);var o=function(e){var n=e.disabledLink,i=void 0!==n&&n,o=e.sx,l=(0,a.jsx)(s.Z,{component:"img",src:"/static/epns.png",sx:(0,t.Z)({width:40,height:40},o)});return i?(0,a.jsx)(a.Fragment,{children:l}):(0,a.jsx)(r.rU,{to:"/",children:l})}},53861:function(e,n,i){i.d(n,{Z:function(){return s}});var t=i(13967),r=i(95193);function s(e,n,i,s){var a=(0,t.Z)(),o=(0,r.Z)(a.breakpoints.up(n)),l=(0,r.Z)(a.breakpoints.down(n)),d=(0,r.Z)(a.breakpoints.between(i,s)),c=(0,r.Z)(a.breakpoints.only(n));return"up"===e?o:"down"===e?l:"between"===e?d:"only"===e?c:null}},62357:function(e,n,i){i.r(n),i.d(n,{default:function(){return U}});var t=i(43504),r=i(64554),s=i(20890),a=i(23060),o=i(26445),l=i(53861),d=i(29104),c=i(53767),u=i(36151),h=i(94721),m=i(74319),p=i(80184);function x(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,p.jsx)(u.Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",children:(0,p.jsx)(m.Z,{icon:"eva:google-fill",color:"#DF3E30",width:22,height:22})}),(0,p.jsx)(u.Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",children:(0,p.jsx)(m.Z,{icon:"eva:facebook-fill",color:"#1877F2",width:22,height:22})}),(0,p.jsx)(u.Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",children:(0,p.jsx)(m.Z,{icon:"eva:twitter-fill",color:"#1C9CEA",width:22,height:22})})]}),(0,p.jsx)(h.Z,{sx:{my:3},children:(0,p.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})})]})}var Z=i(1413),f=i(70885),g=i(62797),j=i(72791),v=i(16871),b=i(92506),w=i(64366),y=i(63466),k=i(13400),C=i(85523),W=i(79174),P=i(59860),E=i(53585),S=function(){var e=(0,v.s0)(),n=(0,j.useState)(!1),i=(0,f.Z)(n,2),r=i[0],s=i[1],o=g.Ry().shape({email:g.Z_().email("Email must be a valid email address").required("Email is required"),password:g.Z_().required("Password is required")}),l=(0,b.TA)({initialValues:{email:"",password:"",remember:!0},validationSchema:o,onSubmit:function(){e(E.Z.HOME,{replace:!0})}}),d=l.errors,u=l.touched,h=l.values,x=l.isSubmitting,S=l.handleSubmit,_=l.getFieldProps;return(0,p.jsx)(b.Hy,{value:l,children:(0,p.jsxs)(b.l0,{autoComplete:"off",noValidate:!0,onSubmit:S,children:[(0,p.jsxs)(c.Z,{spacing:3,children:[(0,p.jsx)(w.Z,(0,Z.Z)((0,Z.Z)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email address"},_("email")),{},{error:Boolean(u.email&&d.email),helperText:u.email&&d.email})),(0,p.jsx)(w.Z,(0,Z.Z)((0,Z.Z)({fullWidth:!0,autoComplete:"current-password",type:r?"text":"password",label:"Password"},_("password")),{},{InputProps:{endAdornment:(0,p.jsx)(y.Z,{position:"end",children:(0,p.jsx)(k.Z,{onClick:function(){s((function(e){return!e}))},edge:"end",children:(0,p.jsx)(m.Z,{icon:r?"eva:eye-fill":"eva:eye-off-fill"})})})},error:Boolean(u.password&&d.password),helperText:u.password&&d.password}))]}),(0,p.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{my:2},children:[(0,p.jsx)(C.Z,{control:(0,p.jsx)(W.Z,(0,Z.Z)((0,Z.Z)({},_("remember")),{},{checked:h.remember})),label:"Remember me"}),(0,p.jsx)(a.Z,{component:t.rU,variant:"subtitle2",to:"#",underline:"hover",children:"Forgot password?"})]}),(0,p.jsx)(P.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:x,children:"Login"})]})})},_=i(4942),F=i(47630),H=i(57621),z=(0,F.ZP)("header")((function(e){var n=e.theme;return(0,_.Z)({top:0,left:0,lineHeight:0,width:"100%",position:"absolute",padding:n.spacing(3,3,0)},n.breakpoints.up("sm"),{padding:n.spacing(5,5,0)})})),D=(0,F.ZP)("div")((function(e){var n=e.theme;return(0,_.Z)({},n.breakpoints.up("md"),{display:"flex"})})),I=(0,F.ZP)("header")((function(e){var n=e.theme;return(0,_.Z)({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:n.spacing(3),justifyContent:"space-between"},n.breakpoints.up("md"),{alignItems:"flex-start",padding:n.spacing(7,5,0,7)})})),q=(0,F.ZP)(H.Z)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),B=(0,F.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",padding:e.theme.spacing(12,0)}})),U=function(){var e=(0,l.Z)("up","sm"),n=(0,l.Z)("up","md");return(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(z,{children:(0,p.jsx)(d.Z,{})}),(0,p.jsxs)(D,{children:[(0,p.jsxs)(I,{children:[(0,p.jsx)(d.Z,{}),e&&(0,p.jsxs)(s.Z,{variant:"body2",sx:{mt:{md:-2}},children:["Don\u2019t have an account? ","",(0,p.jsx)(a.Z,{variant:"subtitle2",component:t.rU,to:"/register",children:"Get started"})]})]}),n&&(0,p.jsxs)(q,{children:[(0,p.jsx)(s.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Hi, Welcome Back"}),(0,p.jsx)("img",{src:"/static/illustrations/illustration_login.png",alt:"login"})]}),(0,p.jsx)(o.Z,{maxWidth:"sm",children:(0,p.jsxs)(B,{children:[(0,p.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:"Sign in to Minimal"}),(0,p.jsx)(s.Z,{sx:{color:"text.secondary",mb:5},children:"Enter your details below."}),(0,p.jsx)(x,{}),(0,p.jsx)(S,{}),!e&&(0,p.jsxs)(s.Z,{variant:"body2",align:"center",sx:{mt:3},children:["Don\u2019t have an account?"," ",(0,p.jsx)(a.Z,{variant:"subtitle2",component:t.rU,to:"/register",children:"Get started"})]})]})})]})]})}}}]);
//# sourceMappingURL=357.3f28a0d5.chunk.js.map