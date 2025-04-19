import{u as s,r as e,A as n,j as a,L as r,a as c,y as t}from"./index-oAyQ1r-q.js";import{l as i,F as h,f as l}from"./index-CnbVrLGL.js";const o=()=>{var o;const m=s(),{userData:d,backendUrl:u,setUserData:g,setIsLoggedin:j}=e.useContext(n);/* @__PURE__ */
return a.jsx(a.Fragment,{children:/* @__PURE__ */a.jsx("div",{className:"up-3",children:/* @__PURE__ */a.jsxs("div",{className:"header-3",children:[
/* @__PURE__ */a.jsx(r,{to:"/",children:/* @__PURE__ */a.jsx("img",{src:i,className:"logo-ma-3"})}),
/* @__PURE__ */a.jsxs("div",{className:"up-right",children:[
/* @__PURE__ */a.jsx(r,{to:"/jcb",children:/* @__PURE__ */a.jsx(h,{className:"cart",icon:l})}),d?/* @__PURE__ */a.jsx("div",{className:"user-menu",children:/* @__PURE__ */a.jsxs("div",{className:"user-initial-3",children:[null==(o=d.name)?void 0:o.charAt().toUpperCase(),
/* @__PURE__ */a.jsx("div",{className:"dropdown",children:/* @__PURE__ */a.jsxs("ul",{children:[!(null==d?void 0:d.isAccountVerified)&&/* @__PURE__ */a.jsx("li",{onClick:async()=>{try{const s=localStorage.getItem("token"),{data:e}=await c.post(u+"/api/auth/send-verify-otp",{},{headers:{Authorization:`Bearer ${s}`}});e.success?(m("/email-verify"),t.success(e.message)):t.error(e.message)}catch(s){t.error(s.message)}},children:"Verify Email"}),
/* @__PURE__ */a.jsx("li",{onClick:async()=>{try{const s=localStorage.getItem("token"),{data:e}=await c.post(u+"/api/auth/logout",{},{headers:{Authorization:`Bearer ${s}`}});e.success&&(localStorage.removeItem("token"),j(!1),g(!1),m("/"))}catch(s){localStorage.removeItem("token"),j(!1),g(!1),m("/"),t.error(s.message)}},children:"Log out"})]})})]})}):/* @__PURE__ */a.jsx(r,{to:"/sign-up",children:/* @__PURE__ */a.jsx("button",{className:"btn-sell",children:"Sign Up"})})]})]})})})},m=()=>/* @__PURE__ */a.jsx(a.Fragment,{children:/* @__PURE__ */a.jsxs("div",{className:"smoke-container",children:[
/* @__PURE__ */a.jsx(o,{}),
/* @__PURE__ */a.jsxs("div",{className:"group",children:[
/* @__PURE__ */a.jsx("img",{src:"/assets/smoke-BY857ywh.gif",alt:"smoke",className:"smoke"}),
/* @__PURE__ */a.jsxs("div",{className:"ty",children:[
/* @__PURE__ */a.jsx("div",{className:"jc",children:"JC GROUP"}),
/* @__PURE__ */a.jsx("hr",{class:"cigarette"})]}),
/* @__PURE__ */a.jsxs("div",{className:"intro",children:[
/* @__PURE__ */a.jsxs("span",{children:[" ","• Tập đoàn JC Group , thành lập năm 2017 tại Hà Nội. ",
/* @__PURE__ */a.jsx("br",{}),"Đầu những năm 2017 tập trung đầu tư vào lĩnh vực IT và bán lẻ , BĐS"," ",
/* @__PURE__ */a.jsx("br",{}),"Cybersecurity , thú cưng với bốn thương hiệu chiến lược ban đầu là"," ",
/* @__PURE__ */a.jsx("br",{}),"DreamyLand , Ashura Cattery và JCyber , JC Group ."," "]}),
/* @__PURE__ */a.jsxs("h3",{className:"h3-1",children:["• DreamyLand ",
/* @__PURE__ */a.jsx("br",{}),"Hoạt động với vai trò cung cấp cho thị trường ngành bán lẻ những sản phẩm Herb ",
/* @__PURE__ */a.jsx("br",{}),"tiêu chuẩn quốc tế . Doanh thu cuối những năm 2018 là 1 tỷ 8 trăm triệu đồng ."]}),
/* @__PURE__ */a.jsxs("h3",{className:"h3-2",children:["• Ashura Cattery ",
/* @__PURE__ */a.jsx("br",{}),"Ashura Cattery là một công ty chuyên về thú cưng . Với tiêu chuẩn quốc tế WCF ",
/* @__PURE__ */a.jsx("br",{})," Sphynx là dòng mèo chủ lực của công ty . Doanh thu vào năm 2022 là 400 triệu ."]}),
/* @__PURE__ */a.jsxs("h3",{className:"h3-3",children:["• JCyber ",
/* @__PURE__ */a.jsx("br",{}),"JCyber cung cấp dịch vụ an ninh mạng cho các doanh nghiệp . Đào tạo và giảng dạy ",
/* @__PURE__ */a.jsx("br",{})," các khóa học về an ninh mạng cho sinh viên với các chứng chỉ như",
/* @__PURE__ */a.jsx("br",{})," CompTIA Security+ , CompTIA A+ , CEH , OSCP . Doanh thu 2022 là 3 tỷ 200 triệu ."]}),
/* @__PURE__ */a.jsxs("h3",{className:"h3-4",children:[" ","• Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế ."]}),
/* @__PURE__ */a.jsxs("h3",{className:"h3-5",children:[" ","• Người thành lập tập đoàn JC Group iragaki , Co-Founder Sơn Hoàng ."]})]})]})]})});export{m as default};
