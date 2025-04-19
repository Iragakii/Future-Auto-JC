import{r as e,j as a,L as o,a as t,u as r,A as i,y as s}from"./index-B6QbhPiA.js";import{J as m}from"./La-QMBq5Ii5.js";import{a as l,P as h,E as n,b as _,u as c,C as x}from"./Pagefour-DwCyO0_m.js";import{l as d,F as g,f as j}from"./index-CAYUQvNV.js";import{u as M}from"./useAnimations-CdAIq4hR.js";const b=()=>{e.useRef();const o=[0,0,0];return l((({clock:e,camera:a})=>{const t=e.getElapsedTime();a.position.x=9*Math.sin(.5*t),a.position.z=9*Math.cos(.5*t),a.position.y=2,a.lookAt(o[0],o[0],o[0])})),/* @__PURE__ */a.jsxs(a.Fragment,{children:[
/* @__PURE__ */a.jsx("ambientLight",{intensity:.5}),
/* @__PURE__ */a.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,"shadow-mapSize":2048,castShadow:!0}),
/* @__PURE__ */a.jsx(h,{global:!0,config:{mass:2,tension:500},snap:{mass:4,tension:1500},rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:/* @__PURE__ */a.jsx(m,{position:[0,-.3,0],scale:[.6,.6,.6]})}),
/* @__PURE__ */a.jsx(n,{preset:"city"})]})};function y({filters:r}){const[i,s]=e.useState([]),[m,l]=e.useState([]),[h,n]=e.useState(""),[c,x]=e.useState(!1),d="https://future-auto-jc.onrender.com",g=localStorage.getItem("token");return e.useEffect((()=>{g?(async()=>{x(!0);try{const e=await t.get(`${d}/api/admin/logos`,{headers:{Authorization:`Bearer ${g}`}});if(console.log("Logos API response:",e.data),!e.data.success||!Array.isArray(e.data.logos))throw new Error("Invalid response format from server");{const a=e.data.logos.map((e=>({...e,logoImage:e.logoImage.startsWith("http")?e.logoImage:`${d}${e.logoImage.startsWith("/")?"":"/"}${e.logoImage}`})));s(a),l(a),n("")}}catch(e){console.error("Error fetching logos:",e),n("Failed to load logos. Please check your connection and permissions."),s([]),l([])}finally{x(!1)}})():n("Authentication token not found. Please log in again.")}),[g,d]),e.useEffect((()=>{if(!i.length||!r)return;console.log("Applying filters:",r);const e=i.filter((e=>{const a=!r.brand||e.brand&&e.brand.toLowerCase()===r.brand.toLowerCase(),o=!r.km||e.km&&e.km.replace(" KM","")===r.km,t=!r.location||e.location&&e.location.toLowerCase()===r.location.toLowerCase();return o&&a&&t}));console.log("Filtered logos:",e),console.log("Applying filters:",r),l(e)}),[r,i]),/* @__PURE__ */a.jsxs("div",{children:[
/* @__PURE__ */a.jsxs("div",{className:"data-container",children:[h&&/* @__PURE__ */a.jsx("div",{className:"error-message",children:h}),c?/* @__PURE__ */a.jsx("div",{className:"loading",children:"Loading logos..."}):/* @__PURE__ */a.jsxs(o,{to:"/slide",className:"slide-link",children:[" ",
/* @__PURE__ */a.jsx("div",{className:"cards",children:m.length>0?m.map((e=>/* @__PURE__ */a.jsxs("div",{className:"card",children:[
/* @__PURE__ */a.jsx("div",{className:"logo",children:/* @__PURE__ */a.jsx("img",{src:e.logoImage,alt:e.title,onError:a=>{console.error(`Image failed to load: ${e.logoImage}`),a.target.onerror=null,a.target.src="https://via.placeholder.com/150?text=Logo+Not+Found"}})}),
/* @__PURE__ */a.jsxs("div",{className:"contents",children:[
/* @__PURE__ */a.jsx("span",{className:"name",children:e.title}),
/* @__PURE__ */a.jsx("span",{className:"content",children:e.content}),
/* @__PURE__ */a.jsxs("div",{className:"car-details",children:[
/* @__PURE__ */a.jsxs("span",{className:"detail-item",children:["KM: ",e.km]}),
/* @__PURE__ */a.jsxs("span",{className:"detail-item",children:["Brand: ",e.brand]}),
/* @__PURE__ */a.jsxs("span",{className:"detail-item",children:["Location: ",e.location]})]})]})]},e._id))):/* @__PURE__ */a.jsx("div",{className:"no-logos",children:"No cars found matching your option. Please try different select."})})]})]}),
/* @__PURE__ */a.jsx(_,{})]})}const p=()=>{var m;const l=r(),{userData:h,backendUrl:n,setUserData:_,setIsLoggedin:c}=e.useContext(i);/* @__PURE__ */
return a.jsx(a.Fragment,{children:/* @__PURE__ */a.jsx("div",{className:"up",children:/* @__PURE__ */a.jsxs("div",{className:"header-2",children:[
/* @__PURE__ */a.jsx(o,{to:"/",children:/* @__PURE__ */a.jsx("img",{src:d,className:"logo-ma"})}),
/* @__PURE__ */a.jsxs("div",{className:"up-left-2",children:[
/* @__PURE__ */a.jsx(o,{className:"up-home",to:"/oldcar",children:/* @__PURE__ */a.jsx("span",{children:"OLD CAR"})}),
/* @__PURE__ */a.jsx(o,{className:"up-home",to:"/best",children:/* @__PURE__ */a.jsx("span",{children:"SUPER"})}),
/* @__PURE__ */a.jsx(o,{className:"up-home",to:"/race",children:/* @__PURE__ */a.jsx("span",{children:"RACE"})}),
/* @__PURE__ */a.jsx(o,{className:"up-home",to:"/about",children:/* @__PURE__ */a.jsx("span",{children:"ABOUT US"})})]}),
/* @__PURE__ */a.jsxs("div",{className:"up-right",children:[
/* @__PURE__ */a.jsx(o,{to:"/",children:/* @__PURE__ */a.jsx(g,{className:"cart",icon:j})}),h?/* @__PURE__ */a.jsx("div",{className:"user-menu",children:/* @__PURE__ */a.jsxs("div",{className:"user-initial",children:[null==(m=h.name)?void 0:m.charAt().toUpperCase(),
/* @__PURE__ */a.jsx("div",{className:"dropdown",children:/* @__PURE__ */a.jsxs("ul",{children:[!(null==h?void 0:h.isAccountVerified)&&/* @__PURE__ */a.jsx("li",{onClick:async()=>{try{const e=localStorage.getItem("token"),{data:a}=await t.post(n+"/api/auth/send-verify-otp",{},{headers:{Authorization:`Bearer ${e}`}});a.success?(l("/email-verify"),s.success(a.message)):s.error(a.message)}catch(e){s.error(e.message)}},children:"Verify Email"}),
/* @__PURE__ */a.jsx("li",{onClick:async()=>{try{const e=localStorage.getItem("token"),{data:a}=await t.post(n+"/api/auth/logout",{},{headers:{Authorization:`Bearer ${e}`}});a.success&&(localStorage.removeItem("token"),c(!1),_(!1),l("/"))}catch(e){localStorage.removeItem("token"),c(!1),_(!1),l("/"),s.error(e.message)}},children:"Log out"})]})})]})}):/* @__PURE__ */a.jsx(o,{to:"/sign-up",children:/* @__PURE__ */a.jsx("button",{className:"btn-sell",children:"Sign Up"})})]})]})})})};function w({onFilterChange:o}){const[t,r]=e.useState({km:"",brand:"",location:""}),i=e=>{const{name:a,value:i}=e.target,s={...t,[a]:i};r(s),o&&o(s),console.log("Updated filters:",{...t,[a]:i})};/* @__PURE__ */
return a.jsx(a.Fragment,{children:/* @__PURE__ */a.jsxs("div",{className:"tit-nav",children:[
/* @__PURE__ */a.jsx("span",{className:"sp-au",children:"Options"}),
/* @__PURE__ */a.jsxs("div",{className:"form-s",children:[
/* @__PURE__ */a.jsxs("select",{className:"form-select-1",id:"year",name:"km",value:t.km,onChange:i,children:[
/* @__PURE__ */a.jsx("option",{value:"",children:"All KM"}),
/* @__PURE__ */a.jsx("option",{value:"20000",children:"20000"}),
/* @__PURE__ */a.jsx("option",{value:"19000",children:"19000"}),
/* @__PURE__ */a.jsx("option",{value:"18000",children:"18000"}),
/* @__PURE__ */a.jsx("option",{value:"17000",children:"17000"}),
/* @__PURE__ */a.jsx("option",{value:"15000",children:"15000"}),
/* @__PURE__ */a.jsx("option",{value:"14000",children:"14000"}),
/* @__PURE__ */a.jsx("option",{value:"13000",children:"13000"}),
/* @__PURE__ */a.jsx("option",{value:"8000",children:"8000"}),
/* @__PURE__ */a.jsx("option",{value:"10000",children:"10000"}),
/* @__PURE__ */a.jsx("option",{value:"2000",children:"2000"}),
/* @__PURE__ */a.jsx("option",{value:"9000",children:"9000"})]}),
/* @__PURE__ */a.jsxs("select",{className:"form-select-2",id:"trans",name:"brand",value:t.brand,onChange:i,children:[
/* @__PURE__ */a.jsx("option",{value:"",children:"All Brand"}),
/* @__PURE__ */a.jsx("option",{value:"Mersedes-Benz",children:"Mersedes-Benz"}),
/* @__PURE__ */a.jsx("option",{value:"Mazda",children:"Mazda"}),
/* @__PURE__ */a.jsx("option",{value:"Porches",children:"Porches"}),
/* @__PURE__ */a.jsx("option",{value:"Toyota",children:"Toyota"}),
/* @__PURE__ */a.jsx("option",{value:"Roll Royce",children:"Roll Royce"}),
/* @__PURE__ */a.jsx("option",{value:"BMW",children:"BMW"}),
/* @__PURE__ */a.jsx("option",{value:"Aston Martin",children:"Aston Martin"}),
/* @__PURE__ */a.jsx("option",{value:"Maserati",children:"Maserati"}),
/* @__PURE__ */a.jsx("option",{value:"Nissan",children:"Nissan"})]}),
/* @__PURE__ */a.jsxs("select",{className:"form-select-3",id:"body-style",name:"location",value:t.location,onChange:i,children:[
/* @__PURE__ */a.jsx("option",{value:"",children:"All Locations"}),
/* @__PURE__ */a.jsx("option",{value:"New York",children:"New York"}),
/* @__PURE__ */a.jsx("option",{value:"Tokyo",children:"Tokyo"}),
/* @__PURE__ */a.jsx("option",{value:"Osaka",children:"Osaka"}),
/* @__PURE__ */a.jsx("option",{value:"Ho chi Minh",children:"Ho chi Minh"}),
/* @__PURE__ */a.jsx("option",{value:"Moskow",children:"Moskow"}),
/* @__PURE__ */a.jsx("option",{value:"London",children:"London"}),
/* @__PURE__ */a.jsx("option",{value:"Beijing",children:"Beijing"}),
/* @__PURE__ */a.jsx("option",{value:"Findland",children:"Findland"}),
/* @__PURE__ */a.jsx("option",{value:"Ha Noi",children:"Ha Noi"})]})]})]})})}function S(e){const{nodes:o,materials:t}=c("/ford_mustang_1965.glb");/* @__PURE__ */
return a.jsxs("group",{...e,dispose:null,children:[
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_8.geometry,material:t.Color_04}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_9.geometry,material:t["Color_04.001"]})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_11.geometry,material:t.Miror}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_12.geometry,material:t.Black})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_20.geometry,material:t.Color_04}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_21.geometry,material:t["Color_04.001"]})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_33.geometry,material:t.tail_lig}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_34.geometry,material:t.Back_main_Light})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_36.geometry,material:t.tail_lig}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_37.geometry,material:t.Back_main_Light})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_39.geometry,material:t.tail_lig}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_40.geometry,material:t.Back_main_Light})]}),
/* @__PURE__ */a.jsxs("group",{position:[0,-.003,0],rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_48.geometry,material:t.Metal_Part}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_49.geometry,material:t.Miror})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_55.geometry,material:t.Color_04}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_56.geometry,material:t["Color_04.001"]})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_66.geometry,material:t.textured}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_67.geometry,material:t.Front_light})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_101.geometry,material:t.Black}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_102.geometry,material:t.interior_brown}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_103.geometry,material:t.Metal_Part}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_104.geometry,material:t["Material.004"]})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_106.geometry,material:t.textur01}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_107.geometry,material:t["Material.005"]})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_111.geometry,material:t.Color_04}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_112.geometry,material:t["Color_04.001"]})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_122.geometry,material:t.Color_04}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_123.geometry,material:t["Color_04.001"]})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_139.geometry,material:t.Metal_Part}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_140.geometry,material:t.textur01})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_148.geometry,material:t.head_lig}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_149.geometry,material:t.Metal_back}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_150.geometry,material:t.Head_Light})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_166.geometry,material:t.Black}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_167.geometry,material:t["Material.009"]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_168.geometry,material:t.logo_farmoon})]}),
/* @__PURE__ */a.jsxs("group",{rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_172.geometry,material:t.Color_00}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_173.geometry,material:t.Metal_Part})]}),
/* @__PURE__ */a.jsxs("group",{position:[.16,.087,-.025],rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_211.geometry,material:t.Metal_Part}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_212.geometry,material:t.Glass}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_213.geometry,material:t["1_analog"]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_214.geometry,material:t["2_analog"]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_215.geometry,material:t["3_analog"]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_216.geometry,material:t["4_analog"]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_217.geometry,material:t["5_analog"]})]}),
/* @__PURE__ */a.jsxs("group",{position:[0,.013,0],rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_223.geometry,material:t["Material.018"]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_224.geometry,material:t["Material.008"]})]}),
/* @__PURE__ */a.jsxs("group",{position:[0,.013,0],rotation:[-Math.PI/2,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_226.geometry,material:t["2011_06"]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_227.geometry,material:t.bfgoodri})]}),
/* @__PURE__ */a.jsxs("group",{position:[.106,.153,.278],rotation:[-1.03,0,0],scale:[.012,.029,.026],children:[
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_241.geometry,material:t.Black}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_242.geometry,material:t.Metal_Part})]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_4.geometry,material:t.Material,position:[0,0,-.023],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_6.geometry,material:t.Color_02,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_14.geometry,material:t.interior,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_16.geometry,material:t.Glass,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_18.geometry,material:t.black1,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_23.geometry,material:t.Black,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_25.geometry,material:t.Color_04,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_27.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_29.geometry,material:t.Color_02,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_31.geometry,material:t["Material.012"],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_42.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_44.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_46.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_51.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_53.geometry,material:t.Color_04,position:[0,.001,0],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_58.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_60.geometry,material:t.grille1,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_62.geometry,material:t.Color_02,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_64.geometry,material:t.Color_03,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_69.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_71.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_73.geometry,material:t.material_0,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_75.geometry,material:t.Metal_back,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_77.geometry,material:t.Glass,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_79.geometry,material:t.Color_04,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_81.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_83.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_85.geometry,material:t.FrontCol,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_87.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_89.geometry,material:t["Material.010"],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_91.geometry,material:t.detail01,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_93.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_95.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_97.geometry,material:t.FrontCol,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_99.geometry,material:t["Material.023"],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_109.geometry,material:t.material_0,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_114.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_116.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_118.geometry,material:t.Color_04,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_120.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_125.geometry,material:t.bbea21f7,rotation:[-Math.PI/2,0,0],scale:.998}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_127.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_129.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_131.geometry,material:t.Color_04,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_133.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_135.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_137.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_142.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_144.geometry,material:t.Color_04,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_146.geometry,material:t.detail02,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_152.geometry,material:t.Glass,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_154.geometry,material:t.Color_00,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_156.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_158.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_160.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_162.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_164.geometry,material:t.detail01,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_170.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_175.geometry,material:t.Black,position:[0,0,-.001],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_177.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_179.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_181.geometry,material:t.Metal_back,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_183.geometry,material:t.Metal_Part,position:[0,-.001,0],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_185.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_187.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_189.geometry,material:t.Color_02,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_191.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_193.geometry,material:t.Color_04,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_195.geometry,material:t.Foregrou,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_197.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_199.geometry,material:t.Color_00,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_201.geometry,material:t.Color_02,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_203.geometry,material:t.Color_04,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_205.geometry,material:t.Black,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_207.geometry,material:t.Black,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_209.geometry,material:t.Metal_Part,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_219.geometry,material:t.Carpet,rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_221.geometry,material:t.material,position:[0,.013,0],rotation:[-Math.PI/2,0,0]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_229.geometry,material:t.Carpet,position:[.161,.111,.079],rotation:[.002,0,0],scale:[.089,.089,.161]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_231.geometry,material:t.Carpet,position:[-.158,.111,.079],rotation:[.002,0,0],scale:[.089,.089,.161]}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_233.geometry,material:t.Logo_Ford,position:[0,-.001,0],rotation:[Math.PI/2,0,0],scale:.114}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_235.geometry,material:t.Black}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_236.geometry,material:t.Glass}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_237.geometry,material:t.Metal_Part}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_239.geometry,material:t.Metal_Part,position:[0,.211,.162],scale:.003}),
/* @__PURE__ */a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_244.geometry,material:t["Material.002"],position:[.467,0,.004],rotation:[0,0,1.605],scale:.134})]})}c.preload("/ford_mustang_1965.glb");const u=()=>{e.useRef();const o=[0,0,0];return l((({clock:e,camera:a})=>{const t=e.getElapsedTime();a.position.x=9*Math.sin(.5*t),a.position.z=9*Math.cos(.5*t),a.position.y=2,a.lookAt(o[0],o[0],o[0])})),/* @__PURE__ */a.jsxs(a.Fragment,{children:[
/* @__PURE__ */a.jsx("ambientLight",{intensity:.5}),
/* @__PURE__ */a.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,"shadow-mapSize":2048,castShadow:!0}),
/* @__PURE__ */a.jsx(h,{global:!0,config:{mass:2,tension:500},snap:{mass:4,tension:1500},rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:/* @__PURE__ */a.jsx(S,{position:[0,-.3,0],scale:[2,2,2]})}),
/* @__PURE__ */a.jsx(n,{preset:"city"})]})};function v(o){const t=e.useRef(),{nodes:r,materials:i,animations:s}=c("/airtsel_valor_proiettile.glb"),{actions:m,names:l}=M(s,t),[h,n]=e.useState(!1);return e.useEffect((()=>{m&&l.length>0&&!h&&(m[l[0]].play(),n(!0))}),[m,l,h]),/* @__PURE__ */a.jsx("group",{ref:t,...o,dispose:null,children:/* @__PURE__ */a.jsx("group",{name:"Sketchfab_Scene",children:/* @__PURE__ */a.jsx("group",{name:"Sketchfab_model",rotation:[-Math.PI/2,0,0],children:/* @__PURE__ */a.jsx("group",{name:"06b727c821684df5bd0843b770bad954fbx",rotation:[Math.PI/2,0,0],scale:.025,children:/* @__PURE__ */a.jsx("group",{name:"Object_2",children:/* @__PURE__ */a.jsx("group",{name:"RootNode",children:/* @__PURE__ */a.jsxs("group",{name:"box00",position:[-.812,17.457,0],rotation:[-Math.PI/2,0,Math.PI],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_5",position:[-64.237,0,-17.457],children:/* @__PURE__ */a.jsx("mesh",{name:"box00_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box00_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box01",position:[-64.237,0,-17.457],children:/* @__PURE__ */a.jsx("mesh",{name:"box01_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box01_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box02",position:[-5.105,26.426,2.839],rotation:[-1.484,0,-Math.PI],scale:.011,children:/* @__PURE__ */a.jsx("mesh",{name:"box02_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box02_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box03",position:[-5.105,-26.426,2.839],rotation:[1.484,0,0],scale:.011,children:/* @__PURE__ */a.jsx("mesh",{name:"box03_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box03_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box04",position:[-64.237,0,-17.457],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box04_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box04_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box05",position:[61.589,-25.68,11.913],rotation:[Math.PI,0,-Math.PI],scale:[-.392,-.392,-.338],children:/* @__PURE__ */a.jsx("mesh",{name:"box05_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box05_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box06",position:[61.486,25.68,16.253],rotation:[Math.PI,0,-Math.PI],scale:[-.392,-.392,-.338],children:/* @__PURE__ */a.jsx("group",{name:"Object_18",position:[.262,131.146,-12.83],children:/* @__PURE__ */a.jsx("mesh",{name:"box06_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box06_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box07",position:[90.856,-23.272,20.536],scale:[.401,.401,.247],children:/* @__PURE__ */a.jsx("mesh",{name:"box07_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box07_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box08",position:[65.875,0,5.529],rotation:[0,1.222,-Math.PI/2],scale:.017,children:/* @__PURE__ */a.jsx("mesh",{name:"box08_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box08_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box09",position:[-53.671,12.669,1.958],rotation:[Math.PI/2,0,-Math.PI/2],scale:.824,children:/* @__PURE__ */a.jsx("mesh",{name:"box09_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box09_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box10",position:[45.602,10.566,9.82],rotation:[Math.PI/2,0,-Math.PI/2],scale:.824,children:/* @__PURE__ */a.jsx("mesh",{name:"box10_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box10_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box11",position:[-64.237,0,-17.457],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box11_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box11_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box12",position:[47.961,-31.869,19.722],rotation:[Math.PI/2,0,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box12_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box12_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box13",children:/* @__PURE__ */a.jsx("mesh",{name:"box13_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box13_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box14",position:[19.571,-31.869,2.266],rotation:[Math.PI/2,0,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box14_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box14_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box15",position:[-.554,-26.253,9.193],rotation:[-.035,0,-1.58],scale:30.551,children:/* @__PURE__ */a.jsx("group",{name:"Object_37",position:[-.115,.331,.057],children:/* @__PURE__ */a.jsx("mesh",{name:"box15_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box15_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsxs("group",{name:"box16",position:[-64.237,0,-17.457],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box16_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box16_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsxs("group",{name:"box17",position:[11.732,0,20.836],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_42",position:[-11.732,0,-20.836],children:/* @__PURE__ */a.jsx("mesh",{name:"box17_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box17_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box18",position:[44.387,-12.164,6.129],rotation:[-.013,1.113,-Math.PI/2],scale:26.011,children:/* @__PURE__ */a.jsx("mesh",{name:"box18_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box18_Material_#1313_0"].geometry,material:i.Material_1313})})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box19",position:[45.602,10.566,9.82],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_47",position:[-109.838,-10.566,-27.277],children:/* @__PURE__ */a.jsx("mesh",{name:"box19_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box19_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box20",position:[-109.838,-10.566,-27.277],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box20_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box20_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box21",position:[130.683,11.111,25.683],rotation:[-Math.PI,.862,-Math.PI/2],scale:.011,children:/* @__PURE__ */a.jsx("mesh",{name:"box21_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box21_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box22",position:[-18.969,-15.348,46.236],rotation:[-.001,-.554,-1.573],scale:30.551,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box22_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box22_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box23",position:[.002,.244,-2.05],children:/* @__PURE__ */a.jsx("group",{name:"Object_56",position:[-.002,-.244,2.05],children:/* @__PURE__ */a.jsx("mesh",{name:"box23_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box23_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box24",position:[-18.969,-5.428,46.236],rotation:[-.001,-.554,-1.573],scale:30.551,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box24_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box24_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box25",position:[.002,.244,-2.05],children:/* @__PURE__ */a.jsx("group",{name:"Object_61",position:[-.002,-.244,2.05],children:/* @__PURE__ */a.jsx("mesh",{name:"box25_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box25_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsx("group",{name:"box26",position:[0,-2.51,0],rotation:[Math.PI/2,0,-2.269],scale:.824,children:/* @__PURE__ */a.jsx("group",{name:"Object_64",position:[-3.931,.688,-.259],children:/* @__PURE__ */a.jsx("mesh",{name:"box26_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box26_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box27",children:/* @__PURE__ */a.jsx("group",{name:"Object_67",position:[-109.838,-10.566,-27.277],children:/* @__PURE__ */a.jsx("mesh",{name:"box27_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box27_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box28",position:[-53.671,10.159,1.958],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_70",position:[-10.565,-10.159,-19.415],children:/* @__PURE__ */a.jsx("mesh",{name:"box28_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box28_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box29",position:[1.167,-10.159,1.421],children:/* @__PURE__ */a.jsx("group",{name:"Object_73",position:[-11.732,0,-20.836],children:/* @__PURE__ */a.jsx("mesh",{name:"box29_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box29_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsxs("group",{name:"box30",position:[1.167,-10.159,1.299],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_76",position:[-11.732,0,-20.836],children:/* @__PURE__ */a.jsx("mesh",{name:"box30_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box30_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box31",position:[-1.167,10.159,-1.299],rotation:[Math.PI/2,0,-2.007],scale:.824,children:/* @__PURE__ */a.jsx("group",{name:"Object_79",position:[-3.931,.688,-.259],children:/* @__PURE__ */a.jsx("mesh",{name:"box31_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box31_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box32",position:[32.172,-12.17,4.127],rotation:[-Math.PI/2,0,0],scale:.207,children:/* @__PURE__ */a.jsx("group",{name:"Object_82",position:[0,0,-3.034],children:/* @__PURE__ */a.jsx("mesh",{name:"box32_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box32_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsx("group",{name:"box34",position:[41.643,-26.922,7.884],rotation:[0,0,-Math.PI/2],scale:30.551,children:/* @__PURE__ */a.jsx("group",{name:"Object_85",position:[-.549,.576,-.036],children:/* @__PURE__ */a.jsx("mesh",{name:"box34_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box34_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsx("group",{name:"box35",position:[-.535,26.408,9.193],rotation:[3.106,0,1.58],scale:-30.551,children:/* @__PURE__ */a.jsx("group",{name:"Object_88",position:[-.115,.331,.057],children:/* @__PURE__ */a.jsx("mesh",{name:"box35_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box35_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box36",position:[-61.928,0,-.199],rotation:[0,-.399,Math.PI/2],scale:.023,children:/* @__PURE__ */a.jsx("mesh",{name:"box36_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box36_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box37",position:[-64.716,0,-17.457],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box37_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box37_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box38",position:[13.964,22.559,20.096],rotation:[0,0,Math.PI/2],scale:37.284,children:/* @__PURE__ */a.jsxs("group",{name:"Object_95",position:[-.52,-1.954,-.358],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box38_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box38_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("mesh",{name:"box38_Material_#1350_0",castShadow:!0,receiveShadow:!0,geometry:r["box38_Material_#1350_0"].geometry,material:i.Material_1350})]})}),
/* @__PURE__ */a.jsx("group",{name:"box39",position:[86.824,3.19,6.74],rotation:[0,0,Math.PI/2],scale:37.284,children:/* @__PURE__ */a.jsx("mesh",{name:"box39_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box39_Material_#1315_0"].geometry,material:i.Material_1315})}),
/* @__PURE__ */a.jsx("group",{name:"box40",position:[.205,0,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box40_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box40_Material_#1315_0"].geometry,material:i.Material_1315})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box41",position:[-56.88,-19.219,-5.266],rotation:[0,-1.571,0],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box41_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box41_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box42",position:[0,19.219,.979],rotation:[Math.PI/2,Math.PI/2,0],scale:37.284,children:/* @__PURE__ */a.jsxs("group",{name:"Object_105",position:[.006,-2.29,-.358],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box42_Material_#1350_0",castShadow:!0,receiveShadow:!0,geometry:r["box42_Material_#1350_0"].geometry,material:i.Material_1350}),
/* @__PURE__ */a.jsx("mesh",{name:"box42_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box42_Material_#1313_0"].geometry,material:i.Material_1313})]})}),
/* @__PURE__ */a.jsx("group",{name:"box43",position:[-11.633,22.061,-50.141],rotation:[Math.PI/2,Math.PI/2,0],scale:30.551,children:/* @__PURE__ */a.jsx("mesh",{name:"box43_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box43_Material_#1315_0"].geometry,material:i.Material_1315})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box44",position:[4.432,0,-14.89],rotation:[0,0,Math.PI/2],scale:30.551,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box44_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box44_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box45",children:/* @__PURE__ */a.jsx("mesh",{name:"box45_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box45_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box46",position:[.455,2.212,.292],children:[
/* @__PURE__ */a.jsxs("group",{name:"Object_115",position:[-.362,-1.954,-.358],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box46_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box46_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("mesh",{name:"box46_Material_#1350_0",castShadow:!0,receiveShadow:!0,geometry:r["box46_Material_#1350_0"].geometry,material:i.Material_1350})]}),
/* @__PURE__ */a.jsx("group",{name:"box47",position:[-.362,-1.954,-.358],children:/* @__PURE__ */a.jsx("mesh",{name:"box47_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box47_Material_#1315_0"].geometry,material:i.Material_1315})})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box48",position:[66.925,0,-3.516],rotation:[0,0,Math.PI/2],scale:31.733,children:[
/* @__PURE__ */a.jsx("group",{name:"Object_121",position:[0,2.177,-.305],children:/* @__PURE__ */a.jsx("mesh",{name:"box48_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box48_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box49",position:[0,2.177,-.305],children:/* @__PURE__ */a.jsx("mesh",{name:"box49_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box49_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box50",position:[0,2.177,-.305],children:/* @__PURE__ */a.jsx("mesh",{name:"box50_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box50_Material_#1315_0"].geometry,material:i.Material_1315})})]}),
/* @__PURE__ */a.jsx("group",{name:"box51",position:[66.601,-17.238,4.595],rotation:[0,Math.PI/2,0],scale:[1.077,1.077,.751],children:/* @__PURE__ */a.jsx("mesh",{name:"box51_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box51_Material_#1315_0"].geometry,material:i.Material_1315})}),
/* @__PURE__ */a.jsx("group",{name:"box52",position:[66.571,0,-.065],rotation:[0,0,-Math.PI/2],scale:26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_130",position:[0,-2.851,.189],children:/* @__PURE__ */a.jsx("mesh",{name:"box52_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box52_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box53",position:[26.633,-4.782,56.055],rotation:[-.001,-.554,-1.573],scale:30.551,children:/* @__PURE__ */a.jsx("mesh",{name:"box53_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box53_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box54",position:[12.59,0,-.498],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_135",position:[-76.826,0,-16.959],children:/* @__PURE__ */a.jsx("mesh",{name:"box54_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box54_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box55",position:[40.136,-20.524,16.696],rotation:[-Math.PI/2,Math.PI/2,0],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box55_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box55_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box56",position:[-31.104,-22.639,-10.352],rotation:[Math.PI/2,1.571,0],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box56_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box56_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsxs("group",{name:"box57",position:[11.262,.845,87.191],rotation:[-Math.PI,Math.PI/2,0],scale:-.41,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box57_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box57_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box58",position:[79.65,1.249,-.157],rotation:[-3.054,0,-Math.PI/2],scale:-1.049,children:/* @__PURE__ */a.jsx("mesh",{name:"box58_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box58_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box59",position:[73.503,-.45,14.645],rotation:[1.484,0,-Math.PI/2],scale:-1.049,children:/* @__PURE__ */a.jsx("mesh",{name:"box59_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box59_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box60",position:[72.672,.711,14.54],rotation:[1.484,0,-Math.PI/2],scale:-1.049,children:[
/* @__PURE__ */a.jsx("group",{name:"Object_148",rotation:[0,.087,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box60_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box60_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box61",position:[3.073,1.37,8.349],rotation:[Math.PI,1.484,-Math.PI],children:/* @__PURE__ */a.jsx("group",{name:"Object_151",position:[0,7.744,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box61_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box61_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box62",position:[5.309,0,8.154],rotation:[-3.142,1.484,-.436],scale:[.906,.906,1.587],children:/* @__PURE__ */a.jsx("mesh",{name:"box62_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box62_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box71",position:[73.503,18.478,13.117],rotation:[1.484,0,-Math.PI/2],scale:-1.049,children:/* @__PURE__ */a.jsx("mesh",{name:"box71_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box71_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box72",position:[79.65,20.36,-3.891],rotation:[-3.054,0,-Math.PI/2],scale:-1.049,children:/* @__PURE__ */a.jsx("mesh",{name:"box72_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box72_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box73",position:[78.18,15.777,-2.662],rotation:[-2.269,0,-Math.PI/2],scale:-1.049,children:/* @__PURE__ */a.jsx("mesh",{name:"box73_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box73_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box74",position:[80.039,3.983,7.234],rotation:[.873,0,-Math.PI/2],scale:-1.049,children:/* @__PURE__ */a.jsx("mesh",{name:"box74_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box74_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box75",position:[78.18,2.534,8.45],rotation:[.873,0,-Math.PI/2],scale:-1.049,children:/* @__PURE__ */a.jsx("mesh",{name:"box75_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box75_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box76",position:[66.717,2.718,-27.778],rotation:[Math.PI/2,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box76_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box76_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box77",position:[238.373,-8.37,-27.68],rotation:[Math.PI,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box77_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box77_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box78",position:[79.215,2.808,-27.68],rotation:[Math.PI/2,1.571,0],scale:[-2.725,-2.725,-3.056],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box78_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box78_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box79",position:[-1.398,-2.246,2.141],rotation:[Math.PI/2,0,0],scale:[.721,.643,.721],children:/* @__PURE__ */a.jsx("mesh",{name:"box79_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box79_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box80",position:[149.225,-4.529,-27.68],rotation:[Math.PI/2,1.571,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box80_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box80_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box81",position:[22.177,7.031,-27.778],rotation:[Math.PI,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box81_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box81_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box82",position:[16.668,4.297,-8.696],rotation:[Math.PI/2,1.222,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box82_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box82_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box83",position:[217.487,3.377,-27.68],rotation:[Math.PI/2,1.571,0],scale:-2.631,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box83_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box83_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box84",position:[-.515,0,22.569],rotation:[0,0,Math.PI/2],scale:.479,children:/* @__PURE__ */a.jsx("mesh",{name:"box84_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box84_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box85",position:[264.403,-.132,1.79],rotation:[-3.054,0,-Math.PI/2],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box85_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box85_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box86",position:[258.542,16.297,14.448],rotation:[1.484,0,-Math.PI/2],scale:-1,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box86_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box86_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsxs("group",{name:"box87",position:[-.125,.793,-16.994],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_188",rotation:[0,.087,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box87_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box87_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box88",position:[3.073,1.37,8.349],rotation:[Math.PI,1.484,-Math.PI],children:/* @__PURE__ */a.jsx("group",{name:"Object_191",position:[0,7.744,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box88_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box88_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box89",position:[5.45,0,8.141],rotation:[-3.142,1.484,-.436],scale:[.906,.906,1.592],children:/* @__PURE__ */a.jsx("mesh",{name:"box89_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box89_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box98",position:[-86.947,.793,-9.398],rotation:[0,.175,0],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_196",position:[86.821,0,7.596],rotation:[0,-.087,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box98_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box98_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box99",position:[90.774,0,16.56],rotation:[0,1.484,2.705],scale:[.906,.906,1.592],children:/* @__PURE__ */a.jsx("mesh",{name:"box99_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box99_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box108",position:[88.398,1.369,16.352],rotation:[0,1.484,0],children:/* @__PURE__ */a.jsx("group",{name:"Object_201",position:[0,7.744,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box108_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box108_Material_#1313_0"].geometry,material:i.Material_1313})})})]})]}),
/* @__PURE__ */a.jsx("group",{name:"box109",position:[264.403,18.091,-1.77],rotation:[-3.054,0,-Math.PI/2],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box109_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box109_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box110",position:[256.781,1.093,9.998],rotation:[.873,0,-Math.PI/2],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box110_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box110_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box111",position:[258.554,2.476,8.838],rotation:[.873,0,-Math.PI/2],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box111_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box111_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box112",position:[256.781,13.721,-.598],rotation:[-2.269,0,-Math.PI/2],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box112_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box112_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box113",position:[282.677,19.28,-24.144],rotation:[Math.PI/2,0,0],scale:[-1.919,-1.919,-3.074],children:/* @__PURE__ */a.jsx("mesh",{name:"box113_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box113_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box114",position:[305.496,15.078,-27.778],rotation:[0,0,-.875],scale:[-1.324,-.432,-1.08],children:/* @__PURE__ */a.jsx("mesh",{name:"box114_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box114_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box115",position:[246.342,37.789,-27.778],rotation:[Math.PI,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box115_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box115_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box116",position:[232.095,30.095,-23.521],rotation:[Math.PI/2,0,0],scale:-.977,children:/* @__PURE__ */a.jsx("mesh",{name:"box116_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box116_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box117",position:[283.092,9.958,-27.697],rotation:[3.142,0,0],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box117_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box117_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box118",position:[283.092,10.987,-27.697],rotation:[-3.054,0,0],scale:-1,children:/* @__PURE__ */a.jsx("mesh",{name:"box118_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box118_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box119",position:[238.291,37.177,-27.778],rotation:[Math.PI,0,0],scale:-2.442,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box119_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box119_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box120",position:[-3.732,-3.269,5.965],rotation:[-Math.PI/4,0,0],scale:.178,children:/* @__PURE__ */a.jsx("group",{name:"Object_226",position:[0,-2.093,-2],children:/* @__PURE__ */a.jsx("mesh",{name:"box120_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box120_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box121",position:[-3.732,-3.269,-5.918],rotation:[-2.356,0,-Math.PI],scale:.178,children:/* @__PURE__ */a.jsx("group",{name:"Object_229",position:[0,-2.093,-2],children:/* @__PURE__ */a.jsx("mesh",{name:"box121_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box121_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box122",position:[-3.732,-5.76,8.456],rotation:[-Math.PI/4,0,0],scale:.178,children:/* @__PURE__ */a.jsx("group",{name:"Object_232",position:[0,-2.093,-2],children:/* @__PURE__ */a.jsx("mesh",{name:"box122_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box122_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box123",position:[-3.732,-5.776,-8.425],rotation:[-2.356,0,Math.PI],scale:.178,children:/* @__PURE__ */a.jsx("group",{name:"Object_235",position:[0,-2.093,-2],children:/* @__PURE__ */a.jsx("mesh",{name:"box123_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box123_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsx("group",{name:"box124",position:[246.279,29.3,-27.778],rotation:[Math.PI/2,-Math.PI/2,0],scale:-2.772,children:/* @__PURE__ */a.jsx("group",{name:"Object_238",position:[0,-4.959,-8.694],children:/* @__PURE__ */a.jsx("mesh",{name:"box124_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box124_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box125",position:[300.415,11.371,-27.778],rotation:[-Math.PI,0,.698],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box125_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box125_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box126",position:[300.943,12.458,3.08],rotation:[Math.PI/2,0,0],scale:-1.526,children:/* @__PURE__ */a.jsx("mesh",{name:"box126_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box126_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box127",position:[304.757,14.303,-41.734],rotation:[Math.PI/2,-.087,-.436],scale:[-.991,-.991,-2.442],children:/* @__PURE__ */a.jsx("group",{name:"Object_245",position:[-3.994,1.933,20.479],children:/* @__PURE__ */a.jsx("mesh",{name:"box127_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box127_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box128",position:[305.88,15.625,-41.734],rotation:[Math.PI/2,-.087,-.436],scale:[-.991,-.991,-2.442],children:/* @__PURE__ */a.jsx("group",{name:"Object_248",position:[-3.994,1.933,20.479],children:/* @__PURE__ */a.jsx("mesh",{name:"box128_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box128_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box129",position:[299.591,16.352,-14.905],rotation:[Math.PI/2,.873,.96],scale:-2.89,children:/* @__PURE__ */a.jsx("mesh",{name:"box129_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box129_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box130",position:[243.149,11.695,-27.778],rotation:[-Math.PI,0,0],scale:-2.961,children:/* @__PURE__ */a.jsx("mesh",{name:"box130_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box130_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box131",position:[217.562,30.445,-8.693],rotation:[-Math.PI/2,0,Math.PI/2],scale:63.507,children:/* @__PURE__ */a.jsx("group",{name:"Object_255",position:[.27,1.292,.059],children:/* @__PURE__ */a.jsx("mesh",{name:"box131_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box131_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box132",position:[205.507,22.714,-27.68],rotation:[Math.PI/2,0,0],scale:[-2.543,-2.543,-2.068],children:/* @__PURE__ */a.jsx("mesh",{name:"box132_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box132_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box133",position:[205.507,25.926,-27.68],rotation:[Math.PI/2,0,Math.PI/6],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box133_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box133_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box134",position:[213.028,19.28,-24.144],rotation:[Math.PI/2,0,0],scale:[-1.919,-1.919,-3.074],children:/* @__PURE__ */a.jsx("mesh",{name:"box134_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box134_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box135",position:[252.589,31.171,-18.716],rotation:[-Math.PI,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box135_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box135_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box136",position:[192.309,9.487,-27.68],rotation:[-Math.PI,1.571,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box136_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box136_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box137",position:[203.189,18.546,1.135],rotation:[Math.PI/2,0,Math.PI/2],scale:-1.187,children:/* @__PURE__ */a.jsx("mesh",{name:"box137_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box137_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box138",position:[236.656,24.512,-61.946],rotation:[Math.PI,0,-Math.PI],scale:2.442,children:/* @__PURE__ */a.jsx("group",{name:"Object_270",position:[-6.526,2.728,13.12],children:/* @__PURE__ */a.jsx("mesh",{name:"box138_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box138_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box139",position:[230.079,24.512,-63.876],rotation:[Math.PI,0,-Math.PI],scale:2.442,children:/* @__PURE__ */a.jsx("group",{name:"Object_273",position:[-6.526,2.728,13.12],children:/* @__PURE__ */a.jsx("mesh",{name:"box139_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box139_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box140",position:[199.967,27.257,-56.374],rotation:[-Math.PI,1.571,0],scale:-2.442,children:/* @__PURE__ */a.jsx("group",{name:"Object_276",position:[-6.526,2.728,13.12],children:/* @__PURE__ */a.jsx("mesh",{name:"box140_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box140_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box141",position:[205.682,33.286,-2.269],rotation:[Math.PI/2,0,-Math.PI/2],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box141_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box141_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box142",position:[249.776,31.171,-6.294],rotation:[-Math.PI,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box142_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box142_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box143",position:[237.332,24.512,8.388],rotation:[-Math.PI,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("group",{name:"Object_283",position:[-6.526,2.728,13.12],children:/* @__PURE__ */a.jsx("mesh",{name:"box143_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box143_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box144",position:[206.18,33.286,12.884],rotation:[Math.PI/2,0,Math.PI],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box144_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box144_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box145",position:[260.405,30.912,2.241],scale:-.729,children:/* @__PURE__ */a.jsx("group",{name:"Object_288",position:[0,0,-2.59],children:/* @__PURE__ */a.jsx("mesh",{name:"box145_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box145_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box147",position:[258.343,7.972,38.887],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box147_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box147_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box148",position:[324.519,-18.195,-27.778],rotation:[Math.PI/2,0,0],scale:-2.442,children:/* @__PURE__ */a.jsx("mesh",{name:"box148_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box148_Material_#1313_0"].geometry,material:i.Material_1313})})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box149",position:[4.78,-11.4,-.197],rotation:[0,0,-Math.PI/2],scale:26.011,children:[
/* @__PURE__ */a.jsx("group",{name:"Object_295",position:[-.412,-.286,.518],children:/* @__PURE__ */a.jsx("mesh",{name:"box149_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box149_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box150",position:[.191,.012,-.347],rotation:[0,0,Math.PI/2],scale:.038,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box150_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box150_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box151",children:/* @__PURE__ */a.jsx("mesh",{name:"box151_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box151_Material_#1313_0"].geometry,material:i.Material_1313})})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box152",position:[-76.826,0,-16.959],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box152_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box152_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsxs("group",{name:"box153",position:[67.819,-13.712,22.118],rotation:[0,.087,-Math.PI/2],scale:26.011,children:[
/* @__PURE__ */a.jsx("group",{name:"Object_304",position:[-.516,.42,-.06],children:/* @__PURE__ */a.jsx("mesh",{name:"box153_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box153_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box154",position:[-.096,.233,.071],rotation:[.306,0,0],scale:.824,children:/* @__PURE__ */a.jsx("mesh",{name:"box154_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box154_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box155",position:[66.061,-11.233,23.645],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box155_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box155_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsxs("group",{name:"box156",position:[3.089,1.789,2.19],rotation:[0,1.493,-Math.PI/2],scale:.644,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box156_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box156_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("mesh",{name:"box156_Material_#1350_0",castShadow:!0,receiveShadow:!0,geometry:r["box156_Material_#1350_0"].geometry,material:i.Material_1350}),
/* @__PURE__ */a.jsx("group",{name:"box157",position:[.001,-.001,-.201],rotation:[.004,-.047,1.222],scale:[1.093,1.079,.942],children:/* @__PURE__ */a.jsx("mesh",{name:"box157_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box157_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box158",rotation:[.01,0,0],scale:[1.132,1.132,1],children:/* @__PURE__ */a.jsx("mesh",{name:"box158_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box158_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box159",position:[5.739,0,0],rotation:[.01,-.002,.175],scale:[1.134,1.132,.998],children:/* @__PURE__ */a.jsx("mesh",{name:"box159_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box159_Material_#1313_0"].geometry,material:i.Material_1313})})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box160",position:[68.708,-.045,25.032],rotation:[-Math.PI/2,Math.PI/2,0],scale:[.728,.728,.644],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box160_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box160_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsxs("group",{name:"box161",position:[-3.624,.04,.495],rotation:[0,.001,Math.PI/2],scale:[.96,.96,1.086],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box161_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box161_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box162",position:[0,-3.776,.578],rotation:[-Math.PI/2,0,-Math.PI/2],scale:1.861,children:/* @__PURE__ */a.jsx("mesh",{name:"box162_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box162_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box163",position:[0,0,-.366],scale:1.271,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box163_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box163_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box164",position:[0,0,.665],scale:1.281,children:/* @__PURE__ */a.jsx("mesh",{name:"box164_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box164_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box165",position:[0,-7.549,-.366],scale:1.271,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box165_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box165_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box166",position:[0,0,.665],scale:1.281,children:/* @__PURE__ */a.jsx("mesh",{name:"box166_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box166_Material_#1313_0"].geometry,material:i.Material_1313})})]})]})]}),
/* @__PURE__ */a.jsx("group",{name:"box167",position:[73.113,0,22.309],rotation:[0,0,-Math.PI/2],scale:26.011,children:/* @__PURE__ */a.jsx("mesh",{name:"box167_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box167_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box168",position:[68.41,0,21.791],rotation:[0,0,-Math.PI/2],scale:26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_336",position:[0,.604,.092],children:/* @__PURE__ */a.jsx("mesh",{name:"box168_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box168_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box169",position:[.264,-.152,-10.755],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box169_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box169_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box170",position:[-3.518,.378,10.081],rotation:[0,0,-Math.PI/2],scale:26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_341",position:[-.001,.206,.101],children:/* @__PURE__ */a.jsx("mesh",{name:"box170_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box170_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box171",position:[-8.138,-1.618,7.272],rotation:[Math.PI/2,0,2.618],scale:-.536,children:/* @__PURE__ */a.jsx("mesh",{name:"box171_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box171_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box172",position:[-9.833,-13.784,9.274],rotation:[0,0,-Math.PI/2],scale:30.551,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box172_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box172_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box173",children:/* @__PURE__ */a.jsx("mesh",{name:"box173_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box173_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box174",position:[-22.174,-16.713,-5.945],rotation:[0,0,-Math.PI/2],scale:26.011,children:[
/* @__PURE__ */a.jsx("group",{name:"Object_350",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box174_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box174_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box175",children:[
/* @__PURE__ */a.jsx("group",{name:"Object_353",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box175_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box175_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box176",position:[0,-.006,0],children:/* @__PURE__ */a.jsx("group",{name:"Object_356",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box176_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box176_Material_#1313_0"].geometry,material:i.Material_1313})})})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box177",position:[-22.174,-12.799,-5.945],rotation:[0,0,-Math.PI/2],scale:26.011,children:[
/* @__PURE__ */a.jsx("group",{name:"Object_359",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box177_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box177_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box178",children:[
/* @__PURE__ */a.jsx("group",{name:"Object_362",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box178_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box178_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box179",position:[0,-.006,0],children:/* @__PURE__ */a.jsx("group",{name:"Object_365",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box179_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box179_Material_#1313_0"].geometry,material:i.Material_1313})})})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box180",position:[-22.174,-8.716,-5.945],rotation:[0,0,-Math.PI/2],scale:26.011,children:[
/* @__PURE__ */a.jsx("group",{name:"Object_368",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box180_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box180_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box181",children:[
/* @__PURE__ */a.jsx("group",{name:"Object_371",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box181_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box181_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box182",position:[0,-.006,0],children:/* @__PURE__ */a.jsx("group",{name:"Object_374",position:[-.501,.75,.365],children:/* @__PURE__ */a.jsx("mesh",{name:"box182_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box182_Material_#1313_0"].geometry,material:i.Material_1313})})})]})]})]}),
/* @__PURE__ */a.jsxs("group",{name:"box183",position:[-64.243,0,-17.457],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box183_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box183_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsxs("group",{name:"box184",position:[.006,0,0],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box184_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box184_Material_#1315_0"].geometry,material:i.Material_1315}),
/* @__PURE__ */a.jsx("group",{name:"box185",position:[65.559,0,30.92],children:/* @__PURE__ */a.jsx("group",{name:"Object_381",position:[-65.559,0,-30.92],children:/* @__PURE__ */a.jsx("mesh",{name:"box185_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box185_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsx("group",{name:"box186",position:[77.205,0,34.421],rotation:[0,0,-Math.PI/2],scale:26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_384",position:[0,-.07,-.54],children:/* @__PURE__ */a.jsx("mesh",{name:"box186_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box186_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box187",position:[77.205,0,33.745],rotation:[0,0,-Math.PI/2],scale:26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_387",position:[0,-.07,-.54],children:/* @__PURE__ */a.jsx("mesh",{name:"box187_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box187_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box188",position:[105.971,13.636,30.469],rotation:[0,1.396,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box188_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box188_Material_#1315_0"].geometry,material:i.Material_1315})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box189",position:[63.478,-15.219,6.734],rotation:[-Math.PI/2,0,0],scale:.589,children:[
/* @__PURE__ */a.jsx("mesh",{name:"box189_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box189_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box190",position:[0,0,1.895],rotation:[1.571,-1.396,1.571],children:/* @__PURE__ */a.jsx("mesh",{name:"box190_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box190_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box191",position:[67.005,0,2.234],children:/* @__PURE__ */a.jsx("mesh",{name:"box191_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box191_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box192",position:[-2.75,25.68,-1.204],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_398",position:[-61.486,-25.68,-16.253],children:/* @__PURE__ */a.jsx("mesh",{name:"box192_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box192_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box193",position:[-61.493,-25.68,-16.253],children:/* @__PURE__ */a.jsx("mesh",{name:"box193_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box193_Material_#1315_0"].geometry,material:i.Material_1315})}),
/* @__PURE__ */a.jsx("group",{name:"box194",position:[26.986,-51.919,6.937],rotation:[Math.PI,0,-Math.PI/2],scale:-26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_403",position:[.057,-1.185,-.247],children:/* @__PURE__ */a.jsx("mesh",{name:"box194_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box194_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box195",position:[-61.493,-25.68,-16.253],children:/* @__PURE__ */a.jsx("mesh",{name:"box195_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box195_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box196",position:[-13.526,-57.549,3.469],rotation:[Math.PI/2,0,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box196_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box196_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box197",position:[-61.486,-25.68,-16.253],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box197_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box197_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box198",position:[90.856,-23.272,20.414],rotation:[.007,1.569,-.008],children:/* @__PURE__ */a.jsx("mesh",{name:"box198_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box198_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box199",position:[-61.486,-25.68,-16.253],children:/* @__PURE__ */a.jsx("mesh",{name:"box199_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box199_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box200",position:[26.986,-51.919,6.937],rotation:[Math.PI,0,-Math.PI/2],scale:-26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_416",position:[.057,-1.185,-.247],children:/* @__PURE__ */a.jsx("mesh",{name:"box200_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box200_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box201",position:[24.868,-47.229,7.765],rotation:[-Math.PI/2,0,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box201_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box201_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box202",position:[17.491,-47.229,5.784],rotation:[-Math.PI/2,0,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box202_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box202_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box203",position:[.103,0,-3.309],rotation:[-.001,-.001,-2.007],scale:[.392,.392,.338],children:/* @__PURE__ */a.jsx("group",{name:"Object_423",position:[-3.931,.688,-.259],children:/* @__PURE__ */a.jsx("mesh",{name:"box203_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box203_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box204",position:[-2.647,-25.68,-5.544],rotation:[0,0,.008],children:[
/* @__PURE__ */a.jsx("group",{name:"Object_426",position:[-61.396,26.151,-11.884],rotation:[0,0,-.008],children:/* @__PURE__ */a.jsx("mesh",{name:"box204_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box204_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box205",position:[-61.402,26.151,-11.884],rotation:[0,0,-.008],children:/* @__PURE__ */a.jsx("mesh",{name:"box205_Material_#1315_0",castShadow:!0,receiveShadow:!0,geometry:r["box205_Material_#1315_0"].geometry,material:i.Material_1315})}),
/* @__PURE__ */a.jsx("group",{name:"box206",position:[26.883,-.767,11.268],rotation:[-3.141,0,-1.563],scale:-26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_431",position:[.057,-1.185,-.247],children:/* @__PURE__ */a.jsx("mesh",{name:"box206_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box206_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box207",position:[-61.402,26.151,-11.884],rotation:[0,0,-.008],children:/* @__PURE__ */a.jsx("mesh",{name:"box207_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box207_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box208",position:[-13.673,-6.088,7.812],rotation:[1.57,-.008,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box208_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box208_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsxs("group",{name:"box209",position:[-61.396,26.151,-11.884],rotation:[0,0,-.008],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box209_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box209_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("group",{name:"box210",position:[90.87,-23.283,20.338],rotation:[-.019,1.57,.019],children:/* @__PURE__ */a.jsx("mesh",{name:"box210_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box210_Material_#1313_0"].geometry,material:i.Material_1313})})]}),
/* @__PURE__ */a.jsx("group",{name:"box211",position:[-61.396,26.151,-11.884],rotation:[0,0,-.008],children:/* @__PURE__ */a.jsx("mesh",{name:"box211_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box211_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box212",position:[26.883,-.767,11.268],rotation:[-3.141,0,-1.563],scale:-26.011,children:/* @__PURE__ */a.jsx("group",{name:"Object_444",position:[.057,-1.185,-.247],children:/* @__PURE__ */a.jsx("mesh",{name:"box212_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box212_Material_#1313_0"].geometry,material:i.Material_1313})})}),
/* @__PURE__ */a.jsx("group",{name:"box213",position:[24.8,3.938,12.099],rotation:[-1.571,.008,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box213_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box213_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box214",position:[17.423,3.995,10.12],rotation:[-1.571,.008,0],children:/* @__PURE__ */a.jsx("mesh",{name:"box214_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box214_Material_#1313_0"].geometry,material:i.Material_1313})}),
/* @__PURE__ */a.jsx("group",{name:"box215",position:[0,0,1.031],rotation:[-3.141,0,1.142],scale:[-.392,-.392,-.338],children:/* @__PURE__ */a.jsx("group",{name:"Object_451",position:[-3.931,.688,-.259],children:/* @__PURE__ */a.jsx("mesh",{name:"box215_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box215_Material_#1313_0"].geometry,material:i.Material_1313})})})]}),
/* @__PURE__ */a.jsxs("group",{name:"box216",position:[66.601,-17.238,4.595],rotation:[0,Math.PI/2,0],scale:[1.077,1.077,.751],children:[
/* @__PURE__ */a.jsx("mesh",{name:"box216_Material_#1313_0",castShadow:!0,receiveShadow:!0,geometry:r["box216_Material_#1313_0"].geometry,material:i.Material_1313}),
/* @__PURE__ */a.jsx("mesh",{name:"box216_Material_#1350_0",castShadow:!0,receiveShadow:!0,geometry:r["box216_Material_#1350_0"].geometry,material:i.Material_1350})]})]})})})})})})})}c.preload("/airtsel_valor_proiettile.glb");const P=()=>{e.useRef();const o=[0,0,0];return l((({clock:e,camera:a})=>{const t=e.getElapsedTime();a.position.x=9*Math.sin(.5*t),a.position.z=9*Math.cos(.5*t),a.position.y=2,a.lookAt(o[0],o[0],o[0])})),/* @__PURE__ */a.jsxs(a.Fragment,{children:[
/* @__PURE__ */a.jsx("ambientLight",{intensity:.5}),
/* @__PURE__ */a.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,"shadow-mapSize":2048,castShadow:!0}),
/* @__PURE__ */a.jsx(h,{global:!0,config:{mass:2,tension:500},snap:{mass:4,tension:1500},rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:/* @__PURE__ */a.jsx(v,{position:[0,-.3,0],scale:[1.3,1.3,1.3]})}),
/* @__PURE__ */a.jsx(n,{preset:"city"})]})},I=()=>{const[o,t]=e.useState(0),[r,i]=e.useState({km:"",brand:"",location:""}),s=[/* @__PURE__ */a.jsx(P,{}),/* @__PURE__ */a.jsx(b,{}),/* @__PURE__ */a.jsx(u,{})];/* @__PURE__ */
return a.jsxs(a.Fragment,{children:[
/* @__PURE__ */a.jsx(p,{}),
/* @__PURE__ */a.jsxs("div",{className:"slider-container",style:O,children:[
/* @__PURE__ */a.jsx(x,{shadows:!0,camera:{position:[0,0,0],fov:20},style:f,children:s[o]}),
/* @__PURE__ */a.jsx("button",{onClick:()=>{t((e=>(e-1+s.length)%s.length))},style:k,className:"prev-button",children:"❮"}),
/* @__PURE__ */a.jsx("button",{onClick:()=>{t((e=>(e+1)%s.length))},style:k,className:"next-button",children:"❯"}),
/* @__PURE__ */a.jsx("div",{style:C,children:s.map(((e,r)=>/* @__PURE__ */a.jsx("span",{style:{...N,backgroundColor:o===r?"#333":"#ccc"},onClick:()=>t(r)},r)))})]}),
/* @__PURE__ */a.jsx(w,{onFilterChange:e=>{console.log("Filters updated:",e),i(e)}}),
/* @__PURE__ */a.jsx(y,{filters:r})]})},O={position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",overflow:"hidden"},f={width:"100%",height:"900px"},k={position:"absolute",top:"50%",transform:"translateY(-50%)",background:"rgba(0, 0, 0, 0.5)",color:"white",border:"none",padding:"10px",cursor:"pointer",fontSize:"24px",zIndex:10},C={position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"10px"},N={width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"#ccc",cursor:"pointer",transition:"background-color 0.3s"};export{I as default};
