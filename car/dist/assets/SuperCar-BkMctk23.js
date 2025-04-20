import{r as s,j as e,L as o,a,u as t,A as n,y as i}from"./index-1YW5aoMy.js";import{a as l,P as r,E as c,b as d,C as h}from"./Pagefour-5KQCwl9p.js";import{R as m,L as p}from"./La-CiwHdP--.js";import{l as x,F as j,f as u}from"./index-BtH28K0Q.js";/* empty css                  */import{J as g,M as v}from"./Mon-DvOZFvyF.js";function f({onFilterChange:o}){const[a,t]=s.useState({km:"",brand:"",location:""}),n=s=>{const{name:e,value:n}=s.target,i={...a,[e]:n};t(i),o&&o(i),console.log("Updated filters:",{...a,[e]:n})};/* @__PURE__ */
return e.jsx(e.Fragment,{children:/* @__PURE__ */e.jsxs("div",{className:"tit-nav",children:[
/* @__PURE__ */e.jsx("span",{className:"sp-au",children:"Options"}),
/* @__PURE__ */e.jsxs("div",{className:"form-s",children:[
/* @__PURE__ */e.jsxs("select",{className:"form-select-1",id:"year",name:"km",value:a.km,onChange:n,children:[
/* @__PURE__ */e.jsx("option",{value:"",children:"All KM"}),
/* @__PURE__ */e.jsx("option",{value:"20000",children:"20000"}),
/* @__PURE__ */e.jsx("option",{value:"19000",children:"19000"}),
/* @__PURE__ */e.jsx("option",{value:"18000",children:"18000"}),
/* @__PURE__ */e.jsx("option",{value:"17000",children:"17000"}),
/* @__PURE__ */e.jsx("option",{value:"15000",children:"15000"}),
/* @__PURE__ */e.jsx("option",{value:"14000",children:"14000"}),
/* @__PURE__ */e.jsx("option",{value:"13000",children:"13000"}),
/* @__PURE__ */e.jsx("option",{value:"8000",children:"8000"}),
/* @__PURE__ */e.jsx("option",{value:"10000",children:"10000"}),
/* @__PURE__ */e.jsx("option",{value:"2000",children:"2000"}),
/* @__PURE__ */e.jsx("option",{value:"9000",children:"9000"})]}),
/* @__PURE__ */e.jsxs("select",{className:"form-select-2",id:"trans",name:"brand",value:a.brand,onChange:n,children:[
/* @__PURE__ */e.jsx("option",{value:"",children:"All Brand"}),
/* @__PURE__ */e.jsx("option",{value:"Mersedes-Benz",children:"Mersedes-Benz"}),
/* @__PURE__ */e.jsx("option",{value:"Mazda",children:"Mazda"}),
/* @__PURE__ */e.jsx("option",{value:"Porches",children:"Porches"}),
/* @__PURE__ */e.jsx("option",{value:"Toyota",children:"Toyota"}),
/* @__PURE__ */e.jsx("option",{value:"Roll Royce",children:"Roll Royce"}),
/* @__PURE__ */e.jsx("option",{value:"BMW",children:"BMW"}),
/* @__PURE__ */e.jsx("option",{value:"Aston Martin",children:"Aston Martin"}),
/* @__PURE__ */e.jsx("option",{value:"Maserati",children:"Maserati"}),
/* @__PURE__ */e.jsx("option",{value:"Nissan",children:"Nissan"})]}),
/* @__PURE__ */e.jsxs("select",{className:"form-select-3",id:"body-style",name:"location",value:a.location,onChange:n,children:[
/* @__PURE__ */e.jsx("option",{value:"",children:"All Locations"}),
/* @__PURE__ */e.jsx("option",{value:"New York",children:"New York"}),
/* @__PURE__ */e.jsx("option",{value:"Tokyo",children:"Tokyo"}),
/* @__PURE__ */e.jsx("option",{value:"Osaka",children:"Osaka"}),
/* @__PURE__ */e.jsx("option",{value:"Ho chi Minh",children:"Ho chi Minh"}),
/* @__PURE__ */e.jsx("option",{value:"Moskow",children:"Moskow"}),
/* @__PURE__ */e.jsx("option",{value:"London",children:"London"}),
/* @__PURE__ */e.jsx("option",{value:"Beijing",children:"Beijing"}),
/* @__PURE__ */e.jsx("option",{value:"Findland",children:"Findland"}),
/* @__PURE__ */e.jsx("option",{value:"Ha Noi",children:"Ha Noi"})]})]})]})})}const N=()=>{s.useRef();const o=[0,0,0];return l((({clock:s,camera:e})=>{const a=s.getElapsedTime();e.position.x=9*Math.sin(.5*a),e.position.z=9*Math.cos(.5*a),e.position.y=2,e.lookAt(o[0],o[0],o[0])})),/* @__PURE__ */e.jsxs(e.Fragment,{children:[
/* @__PURE__ */e.jsx("ambientLight",{intensity:.5}),
/* @__PURE__ */e.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,"shadow-mapSize":2048,castShadow:!0}),
/* @__PURE__ */e.jsx(r,{global:!0,config:{mass:2,tension:500},snap:{mass:4,tension:1500},rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:/* @__PURE__ */e.jsx(m,{position:[0,-.3,0],scale:[.8,.8,.8]})}),
/* @__PURE__ */e.jsx(c,{preset:"city"})]})},y=()=>{s.useRef();const o=[0,0,0];return l((({clock:s,camera:e})=>{const a=s.getElapsedTime();e.position.x=9*Math.sin(.5*a),e.position.z=9*Math.cos(.5*a),e.position.y=2,e.lookAt(o[0],o[0],o[0])})),/* @__PURE__ */e.jsxs(e.Fragment,{children:[
/* @__PURE__ */e.jsx("ambientLight",{intensity:.5}),
/* @__PURE__ */e.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,"shadow-mapSize":2048,castShadow:!0}),
/* @__PURE__ */e.jsx(r,{global:!0,config:{mass:2,tension:500},snap:{mass:4,tension:1500},rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:/* @__PURE__ */e.jsx(p,{position:[0,-.3,0],scale:[.8,.8,.8]})}),
/* @__PURE__ */e.jsx(c,{preset:"city"})]})};function b({filters:t}){const[n,i]=s.useState([]),[l,r]=s.useState([]),[c,h]=s.useState(""),[m,p]=s.useState(!1),x="https://future-auto-jc.onrender.com",j=localStorage.getItem("token");return s.useEffect((()=>{j?(async()=>{p(!0);try{const s=await a.get(`${x}/api/admin/logos`,{headers:{Authorization:`Bearer ${j}`}});if(console.log("Logos API response:",s.data),!s.data.success||!Array.isArray(s.data.logos))throw new Error("Invalid response format from server");{const e=s.data.logos.map((s=>({...s,logoImage:s.logoImage.startsWith("http")?s.logoImage:`${x}${s.logoImage.startsWith("/")?"":"/"}${s.logoImage}`})));i(e),r(e),h("")}}catch(s){console.error("Error fetching logos:",s),h("Failed to load logos. Please check your connection and permissions."),i([]),r([])}finally{p(!1)}})():h("Authentication token not found. Please log in again.")}),[j,x]),s.useEffect((()=>{if(!n.length||!t)return;console.log("Applying filters:",t);const s=n.filter((s=>{const e=!t.brand||s.brand&&s.brand.toLowerCase()===t.brand.toLowerCase(),o=!t.km||s.km&&s.km.replace(" KM","")===t.km,a=!t.location||s.location&&s.location.toLowerCase()===t.location.toLowerCase();return o&&e&&a}));console.log("Filtered logos:",s),console.log("Applying filters:",t),r(s)}),[t,n]),/* @__PURE__ */e.jsxs("div",{children:[
/* @__PURE__ */e.jsxs("div",{className:"data-container",children:[c&&/* @__PURE__ */e.jsx("div",{className:"error-message",children:c}),m?/* @__PURE__ */e.jsx("div",{className:"loading",children:"Loading logos..."}):/* @__PURE__ */e.jsxs(o,{to:"/slide",className:"slide-link",children:[" ",
/* @__PURE__ */e.jsx("div",{className:"cards",children:l.length>0?l.map((s=>/* @__PURE__ */e.jsxs("div",{className:"card",children:[
/* @__PURE__ */e.jsx("div",{className:"logo",children:/* @__PURE__ */e.jsx("img",{src:s.logoImage,alt:s.title,onError:e=>{console.error(`Image failed to load: ${s.logoImage}`),e.target.onerror=null,e.target.src="https://via.placeholder.com/150?text=Logo+Not+Found"}})}),
/* @__PURE__ */e.jsxs("div",{className:"contents",children:[
/* @__PURE__ */e.jsx("span",{className:"name",children:s.title}),
/* @__PURE__ */e.jsx("span",{className:"content",children:s.content}),
/* @__PURE__ */e.jsxs("div",{className:"car-details",children:[
/* @__PURE__ */e.jsxs("span",{className:"detail-item",children:["KM: ",s.km]}),
/* @__PURE__ */e.jsxs("span",{className:"detail-item",children:["Brand: ",s.brand]}),
/* @__PURE__ */e.jsxs("span",{className:"detail-item",children:["Location: ",s.location]})]})]})]},s._id))):/* @__PURE__ */e.jsx("div",{className:"no-logos",children:"No cars found matching your option. Please try different select."})})]})]}),
/* @__PURE__ */e.jsx(d,{})]})}const k=()=>{var l;const r=t(),{userData:c,backendUrl:d,setUserData:h,setIsLoggedin:m}=s.useContext(n);/* @__PURE__ */
return e.jsx(e.Fragment,{children:/* @__PURE__ */e.jsx("div",{className:"up",children:/* @__PURE__ */e.jsxs("div",{className:"header-2",children:[
/* @__PURE__ */e.jsx(o,{to:"/",children:/* @__PURE__ */e.jsx("img",{src:x,className:"logo-ma"})}),
/* @__PURE__ */e.jsxs("div",{className:"up-left-2",children:[
/* @__PURE__ */e.jsx(o,{className:"up-home",to:"/oldcar",children:/* @__PURE__ */e.jsx("span",{children:"OLD CAR"})}),
/* @__PURE__ */e.jsx(o,{className:"up-home",to:"/best",children:/* @__PURE__ */e.jsx("span",{children:"SUPER"})}),
/* @__PURE__ */e.jsx(o,{className:"up-home",to:"/race",children:/* @__PURE__ */e.jsx("span",{children:"RACE"})}),
/* @__PURE__ */e.jsx(o,{className:"up-home",to:"/about",children:/* @__PURE__ */e.jsx("span",{children:"ABOUT US"})})]}),
/* @__PURE__ */e.jsxs("div",{className:"up-right",children:[
/* @__PURE__ */e.jsx(o,{to:"/jcb",children:/* @__PURE__ */e.jsx(j,{className:"cart",icon:u})}),c?/* @__PURE__ */e.jsx("div",{className:"user-menu",children:/* @__PURE__ */e.jsxs("div",{className:"user-initial",children:[null==(l=c.name)?void 0:l.charAt().toUpperCase(),
/* @__PURE__ */e.jsx("div",{className:"dropdown",children:/* @__PURE__ */e.jsxs("ul",{children:[!(null==c?void 0:c.isAccountVerified)&&/* @__PURE__ */e.jsx("li",{onClick:async()=>{try{const s=localStorage.getItem("token"),{data:e}=await a.post(d+"/api/auth/send-verify-otp",{},{headers:{Authorization:`Bearer ${s}`}});e.success?(r("/email-verify"),i.success(e.message)):i.error(e.message)}catch(s){i.error(s.message)}},children:"Verify Email"}),
/* @__PURE__ */e.jsx("li",{onClick:async()=>{try{const s=localStorage.getItem("token"),{data:e}=await a.post(d+"/api/auth/logout",{},{headers:{Authorization:`Bearer ${s}`}});e.success&&(localStorage.removeItem("token"),m(!1),h(!1),r("/"))}catch(s){localStorage.removeItem("token"),m(!1),h(!1),r("/"),i.error(s.message)}},children:"Log out"})]})})]})}):/* @__PURE__ */e.jsx(o,{to:"/sign-up",children:/* @__PURE__ */e.jsx("button",{className:"btn-sell",children:"Sign Up"})})]})]})})})},M=()=>{s.useRef();const o=[0,0,0];return l((({clock:s,camera:e})=>{const a=s.getElapsedTime();e.position.x=9*Math.sin(.5*a),e.position.z=9*Math.cos(.5*a),e.position.y=2,e.lookAt(o[0],o[0],o[0])})),/* @__PURE__ */e.jsxs(e.Fragment,{children:[
/* @__PURE__ */e.jsx("ambientLight",{intensity:.5}),
/* @__PURE__ */e.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,"shadow-mapSize":2048,castShadow:!0}),
/* @__PURE__ */e.jsx(r,{global:!0,config:{mass:2,tension:500},snap:{mass:4,tension:1500},rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:/* @__PURE__ */e.jsx(g,{position:[0,-.3,0],scale:[.8,.8,.8]})}),
/* @__PURE__ */e.jsx(c,{preset:"city"})]})},I=()=>{s.useRef();const o=[0,0,0];return l((({clock:s,camera:e})=>{const a=s.getElapsedTime();e.position.x=9*Math.sin(.5*a),e.position.z=9*Math.cos(.5*a),e.position.y=2,e.lookAt(o[0],o[0],o[0])})),/* @__PURE__ */e.jsxs(e.Fragment,{children:[
/* @__PURE__ */e.jsx("ambientLight",{intensity:.5}),
/* @__PURE__ */e.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,"shadow-mapSize":2048,castShadow:!0}),
/* @__PURE__ */e.jsx(r,{global:!0,config:{mass:2,tension:500},snap:{mass:4,tension:1500},rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:/* @__PURE__ */e.jsx(v,{position:[0,-.3,0],scale:[80.8,80.8,80.8]})}),
/* @__PURE__ */e.jsx(c,{preset:"city"})]})},w=()=>{const[o,a]=s.useState(0),[t,n]=s.useState({km:"",brand:"",location:""}),i=[/* @__PURE__ */e.jsx(y,{}),/* @__PURE__ */e.jsx(N,{}),/* @__PURE__ */e.jsx(M,{}),/* @__PURE__ */e.jsx(I,{})];/* @__PURE__ */
return e.jsxs(e.Fragment,{children:[
/* @__PURE__ */e.jsx(k,{}),
/* @__PURE__ */e.jsxs("div",{className:"slider-container",style:L,children:[
/* @__PURE__ */e.jsx(h,{shadows:!0,camera:{position:[0,0,0],fov:20},style:P,children:i[o]}),
/* @__PURE__ */e.jsx("button",{onClick:()=>{a((s=>(s-1+i.length)%i.length))},style:S,className:"prev-button",children:"❮"}),
/* @__PURE__ */e.jsx("button",{onClick:()=>{a((s=>(s+1)%i.length))},style:S,className:"next-button",children:"❯"}),
/* @__PURE__ */e.jsx("div",{style:A,children:i.map(((s,t)=>/* @__PURE__ */e.jsx("span",{style:{...C,backgroundColor:o===t?"#333":"#ccc"},onClick:()=>a(t)},t)))})]}),
/* @__PURE__ */e.jsx(f,{onFilterChange:s=>{console.log("Filters updated:",s),n(s)}}),
/* @__PURE__ */e.jsx(b,{filters:t})]})},L={position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",overflow:"hidden"},P={width:"100%",height:"900px"},S={position:"absolute",top:"50%",transform:"translateY(-50%)",background:"rgba(0, 0, 0, 0.5)",color:"white",border:"none",padding:"10px",cursor:"pointer",fontSize:"24px",zIndex:10},A={position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"10px"},C={width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"#ccc",cursor:"pointer",transition:"background-color 0.3s"};export{w as default};
