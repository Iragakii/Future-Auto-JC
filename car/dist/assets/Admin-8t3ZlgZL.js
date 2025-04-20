import{r as e,u as a,j as r,a as t}from"./index-1YW5aoMy.js";/* empty css                  */const l=()=>{const[l,s]=e.useState({km:"",brand:"",location:""}),[n,o]=e.useState([]),[i,d]=e.useState([]),[c,m]=e.useState([]),[u,h]=e.useState([]),[g,p]=e.useState(!0),[j,x]=e.useState(""),[f,v]=e.useState({name:"",email:"",password:""}),[b,y]=e.useState({title:"",year:"",mileage:"",status:"",sold:!1,centerImage:null,leftImage:null}),[N,w]=e.useState({brand:"",km:"",location:"",title:"",content:"",logoImage:null}),[C,A]=e.useState(null),[E,$]=e.useState("user"),I=a(),F=localStorage.getItem("token"),k=async()=>{var e;try{p(!0);const e=await t.get("https://future-auto-jc.onrender.com/api/admin/users",{headers:{Authorization:`Bearer ${F}`}});o(e.data.users),p(!1)}catch(a){x("Failed to fetch users. Please check your admin privileges."),p(!1),console.error("Error fetching users:",a),401===(null==(e=a.response)?void 0:e.status)&&I("/login")}},S=async()=>{console.log("Fetching logos...");try{const e=await t.get("https://future-auto-jc.onrender.com/api/admin/logos",{headers:{Authorization:`Bearer ${F}`}});e.data.success&&Array.isArray(e.data.logos)?(m(e.data.logos),h(e.data.logos)):console.error("Invalid logos response format",e.data)}catch(e){console.error("Error fetching logos:",e)}},D=async()=>{console.log("Fetching cars...");try{const e=await t.get("https://future-auto-jc.onrender.com/api/admin/cars",{headers:{Authorization:`Bearer ${F}`}});d(e.data.cars)}catch(e){console.error("Error fetching cars:",e),x("Failed to fetch cars")}};e.useEffect((()=>{F?(k(),D(),S()):I("/login")}),[F,I]),e.useEffect((()=>{const e=c.filter((e=>!l.brand||e.brand===l.brand));h(e)}),[l,c]);const q=(e,a)=>{y({...b,[a]:e.target.files[0]})};return g?/* @__PURE__ */r.jsx("div",{className:"loading",children:"Loading..."}):j?/* @__PURE__ */r.jsx("div",{className:"error",children:j}):/* @__PURE__ */r.jsxs("div",{className:"admin-container",children:[
/* @__PURE__ */r.jsx("h1",{children:"Admin Dashboard"}),
/* @__PURE__ */r.jsxs("div",{className:"admin-section",children:[
/* @__PURE__ */r.jsx("h2",{children:"Create New Logo"}),
/* @__PURE__ */r.jsxs("form",{onSubmit:async e=>{var a,r;e.preventDefault();try{const e=new FormData;e.append("title",N.title),e.append("content",N.content),e.append("km",N.km),e.append("brand",N.brand),e.append("location",N.location),N.logoImage&&e.append("logoImage",N.logoImage),await t.post("https://future-auto-jc.onrender.com/api/admin/logos",e,{headers:{Authorization:`Bearer ${F}`,"Content-Type":"multipart/form-data"}}),alert("Logo created successfully!"),w({title:"",content:"",logoImage:null,brand:"",km:"",location:""}),S()}catch(l){console.error("Error creating logo:",l),alert(`Error creating logo: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}},className:"admin-form","aria-label":"Create new logo form",children:[
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"logo-brand",children:"Brand:"}),
/* @__PURE__ */r.jsx("input",{id:"logo-brand",type:"text",placeholder:"Enter logo brand",value:N.brand,onChange:e=>w({...N,brand:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"logo-km",children:"KM:"}),
/* @__PURE__ */r.jsx("input",{id:"logo-km",type:"text",placeholder:"Enter logo KM",value:N.km,onChange:e=>w({...N,km:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"logo-location",children:"Location:"}),
/* @__PURE__ */r.jsx("input",{id:"logo-location",type:"text",placeholder:"Enter logo location",value:N.location,onChange:e=>w({...N,location:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"logo-title",children:"Title:"}),
/* @__PURE__ */r.jsx("input",{id:"logo-title",type:"text",placeholder:"Enter logo title",value:N.title,onChange:e=>w({...N,title:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"logo-content",children:"Content:"}),
/* @__PURE__ */r.jsx("input",{id:"logo-content",type:"text",placeholder:"Enter logo content",value:N.content,onChange:e=>w({...N,content:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"logo-image",children:"Logo Image:"}),
/* @__PURE__ */r.jsx("input",{id:"logo-image",type:"file",onChange:e=>w({...N,logoImage:e.target.files[0]}),accept:"image/*",required:!0})]}),
/* @__PURE__ */r.jsx("button",{type:"submit",className:"btn-create",children:"Create Logo"})]})]}),
/* @__PURE__ */r.jsxs("div",{className:"admin-section",children:[
/* @__PURE__ */r.jsx("h2",{children:"Manage Logos"}),
/* @__PURE__ */r.jsx("div",{className:"logos-list",children:0===u.length?/* @__PURE__ */r.jsx("p",{children:"No logos found."}):/* @__PURE__ */r.jsx("div",{className:"cards",children:u.map((e=>/* @__PURE__ */r.jsxs("div",{className:"card",children:[
/* @__PURE__ */r.jsx("div",{className:"logo",children:/* @__PURE__ */r.jsx("img",{src:`https://future-auto-jc.onrender.com${e.logoImage}`,alt:e.title})}),
/* @__PURE__ */r.jsxs("div",{className:"contents",children:[
/* @__PURE__ */r.jsx("span",{className:"name",children:e.title}),
/* @__PURE__ */r.jsx("span",{className:"content",children:e.content}),
/* @__PURE__ */r.jsx("button",{onClick:()=>(async e=>{var a,r;if(window.confirm("Are you sure you want to delete this logo?"))if(F)try{await t.delete(`https://future-auto-jc.onrender.com/api/admin/logos/${e}`,{headers:{Authorization:`Bearer ${F}`}}),alert("Logo deleted successfully!"),S()}catch(l){console.error("Error deleting logo:",l),l.response&&(console.error("Response data:",l.response.data),console.error("Response status:",l.response.status),console.error("Response headers:",l.response.headers)),alert(`Error deleting logo: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}else alert("You must be logged in to delete a logo.")})(e._id),children:"Delete"})]})]},e._id)))})})]}),
/* @__PURE__ */r.jsxs("div",{className:"admin-container",children:[
/* @__PURE__ */r.jsx("h1",{children:"Admin Dashboard"}),
/* @__PURE__ */r.jsxs("div",{className:"admin-section",children:[
/* @__PURE__ */r.jsx("h2",{children:"Create New Admin"}),
/* @__PURE__ */r.jsx("p",{className:"section-description",children:"Use this form to create a new administrator account with full privileges."}),
/* @__PURE__ */r.jsxs("form",{onSubmit:async e=>{var a,r;e.preventDefault();try{await t.post("https://future-auto-jc.onrender.com/api/admin/create-admin",f,{headers:{Authorization:`Bearer ${F}`}}),alert("Admin created successfully!"),v({name:"",email:"",password:""}),k()}catch(l){console.error("Error creating admin:",l),alert(`Error creating admin: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}},className:"admin-form","aria-label":"Create new admin form",children:[
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"admin-name",children:"Name:"}),
/* @__PURE__ */r.jsx("input",{id:"admin-name",type:"text",placeholder:"Enter full name","aria-label":"Admin name",value:f.name,onChange:e=>v({...f,name:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"admin-email",children:"Email:"}),
/* @__PURE__ */r.jsx("input",{id:"admin-email",type:"email",placeholder:"Enter email address","aria-label":"Admin email",value:f.email,onChange:e=>v({...f,email:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"admin-password",children:"Password:"}),
/* @__PURE__ */r.jsx("input",{id:"admin-password",type:"password",placeholder:"Enter password","aria-label":"Admin password",value:f.password,onChange:e=>v({...f,password:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsx("button",{type:"submit",className:"btn-create","aria-label":"Create admin",children:"Create Admin"})]})]}),
/* @__PURE__ */r.jsxs("div",{className:"admin-section",children:[
/* @__PURE__ */r.jsx("h2",{children:"Add New Car"}),
/* @__PURE__ */r.jsx("p",{className:"section-description",children:"Fill out the details below to add a new car to the inventory, including images."}),
/* @__PURE__ */r.jsxs("form",{onSubmit:async e=>{var a,r;e.preventDefault();try{const e=new FormData;e.append("title",b.title),e.append("year",b.year),e.append("mileage",b.mileage),e.append("status",b.status),e.append("sold",b.sold),b.centerImage&&e.append("centerImage",b.centerImage),b.leftImage&&e.append("leftImage",b.leftImage),await t.post("https://future-auto-jc.onrender.com/api/car",e,{headers:{Authorization:`Bearer ${F}`,"Content-Type":"multipart/form-data"}}),alert("Car added successfully!"),y({title:"",year:"",mileage:"",status:"",sold:!1,centerImage:null,leftImage:null}),D()}catch(l){console.error("Error creating car:",l),alert(`Error creating car: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}},className:"admin-form","aria-label":"Add new car form",children:[
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"car-title",children:"Title:"}),
/* @__PURE__ */r.jsx("input",{id:"car-title",type:"text",placeholder:"Enter car title","aria-label":"Car title",value:b.title,onChange:e=>y({...b,title:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"car-year",children:"Year:"}),
/* @__PURE__ */r.jsx("input",{id:"car-year",type:"text",placeholder:"Enter manufacturing year","aria-label":"Car year",value:b.year,onChange:e=>y({...b,year:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"car-mileage",children:"Mileage:"}),
/* @__PURE__ */r.jsx("input",{id:"car-mileage",type:"text",placeholder:"Enter mileage","aria-label":"Car mileage",value:b.mileage,onChange:e=>y({...b,mileage:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"car-status",children:"Status:"}),
/* @__PURE__ */r.jsx("input",{id:"car-status",type:"text",placeholder:"Enter status (e.g., Available, Sold)","aria-label":"Car status",value:b.status,onChange:e=>y({...b,status:e.target.value}),required:!0})]}),
/* @__PURE__ */r.jsxs("div",{className:"checkbox-label",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"car-sold",children:"Sold:"}),
/* @__PURE__ */r.jsx("input",{id:"car-sold",type:"checkbox",checked:b.sold,onChange:e=>y({...b,sold:e.target.checked}),"aria-label":"Car sold status"})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"car-centerImage",children:"Center Image:"}),
/* @__PURE__ */r.jsx("input",{id:"car-centerImage",type:"file",onChange:e=>q(e,"centerImage"),accept:"image/*",required:!0,"aria-label":"Upload center image"})]}),
/* @__PURE__ */r.jsxs("div",{className:"form-group",children:[
/* @__PURE__ */r.jsx("label",{htmlFor:"car-leftImage",children:"Left Image:"}),
/* @__PURE__ */r.jsx("input",{id:"car-leftImage",type:"file",onChange:e=>q(e,"leftImage"),accept:"image/*",required:!0,"aria-label":"Upload left image"})]}),
/* @__PURE__ */r.jsx("button",{type:"submit",className:"btn-create","aria-label":"Add car",children:"Add Car"})]})]}),
/* @__PURE__ */r.jsxs("div",{className:"admin-section",children:[
/* @__PURE__ */r.jsx("h2",{children:"Manage Cars"}),
/* @__PURE__ */r.jsx("p",{className:"section-description",children:"View and manage the list of cars. You can delete cars or their images and content."}),
/* @__PURE__ */r.jsx("div",{className:"users-list",children:0===i.length?/* @__PURE__ */r.jsx("p",{children:"No cars found."}):/* @__PURE__ */r.jsxs("table",{className:"users-table","aria-label":"Manage cars table",children:[
/* @__PURE__ */r.jsx("thead",{children:/* @__PURE__ */r.jsxs("tr",{children:[
/* @__PURE__ */r.jsx("th",{children:"Title"}),
/* @__PURE__ */r.jsx("th",{children:"Year"}),
/* @__PURE__ */r.jsx("th",{children:"Status"}),
/* @__PURE__ */r.jsx("th",{children:"Actions"})]})}),
/* @__PURE__ */r.jsx("tbody",{children:i.map((e=>/* @__PURE__ */r.jsxs("tr",{children:[
/* @__PURE__ */r.jsx("td",{children:e.title}),
/* @__PURE__ */r.jsx("td",{children:e.year}),
/* @__PURE__ */r.jsx("td",{children:e.status}),
/* @__PURE__ */r.jsxs("td",{className:"actions",children:[
/* @__PURE__ */r.jsx("button",{onClick:()=>(async e=>{var a,r;if(window.confirm("Are you sure you want to delete this car?"))try{await t.delete(`https://future-auto-jc.onrender.com/api/car/${e}`,{headers:{Authorization:`Bearer ${F}`}}),alert("Car deleted successfully!"),D()}catch(l){console.error("Error deleting car:",l),alert(`Error deleting car: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}})(e._id),className:"btn-delete","aria-label":`Delete car ${e.title}`,children:"Delete Car"}),
/* @__PURE__ */r.jsx("button",{onClick:()=>(async e=>{var a,r;if(window.confirm("Are you sure you want to delete the center image?"))try{await t.delete(`https://future-auto-jc.onrender.com/api/car/${e}/centerImage`,{headers:{Authorization:`Bearer ${F}`}}),alert("Center image deleted successfully!"),D()}catch(l){console.error("Error deleting center image:",l),alert(`Error deleting center image: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}})(e._id),className:"btn-delete","aria-label":`Delete center image of car ${e.title}`,children:"Delete Center Image"}),
/* @__PURE__ */r.jsx("button",{onClick:()=>(async e=>{var a,r;if(window.confirm("Are you sure you want to delete the left image?"))try{await t.delete(`https://future-auto-jc.onrender.com/api/car/${e}/leftImage`,{headers:{Authorization:`Bearer ${F}`}}),alert("Left image deleted successfully!"),D()}catch(l){console.error("Error deleting left image:",l),alert(`Error deleting left image: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}})(e._id),className:"btn-delete","aria-label":`Delete left image of car ${e.title}`,children:"Delete Left Image"}),
/* @__PURE__ */r.jsx("button",{onClick:()=>(async e=>{var a,r;if(window.confirm("Are you sure you want to delete the content?"))try{await t.delete(`https://future-auto-jc.onrender.com/api/car/${e}/content`,{headers:{Authorization:`Bearer ${F}`}}),alert("Content deleted successfully!"),D()}catch(l){console.error("Error deleting content:",l),alert(`Error deleting content: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}})(e._id),className:"btn-delete","aria-label":`Delete content of car ${e.title}`,children:"Delete Content"})]})]},e._id)))})]})})]}),
/* @__PURE__ */r.jsxs("div",{className:"admin-section",children:[
/* @__PURE__ */r.jsx("h2",{children:"Manage Users"}),
/* @__PURE__ */r.jsx("p",{className:"section-description",children:"View and manage registered users. You can update roles or delete users."}),
/* @__PURE__ */r.jsx("div",{className:"users-list",children:0===n.length?/* @__PURE__ */r.jsx("p",{children:"No users found."}):/* @__PURE__ */r.jsxs("table",{className:"users-table","aria-label":"Manage users table",children:[
/* @__PURE__ */r.jsx("thead",{children:/* @__PURE__ */r.jsxs("tr",{children:[
/* @__PURE__ */r.jsx("th",{children:"Name"}),
/* @__PURE__ */r.jsx("th",{children:"Email"}),
/* @__PURE__ */r.jsx("th",{children:"Role"}),
/* @__PURE__ */r.jsx("th",{children:"Verified"}),
/* @__PURE__ */r.jsx("th",{children:"Actions"})]})}),
/* @__PURE__ */r.jsx("tbody",{children:n.map((e=>/* @__PURE__ */r.jsxs("tr",{children:[
/* @__PURE__ */r.jsx("td",{children:e.name}),
/* @__PURE__ */r.jsx("td",{children:e.email}),
/* @__PURE__ */r.jsx("td",{children:e.role}),
/* @__PURE__ */r.jsx("td",{children:e.isAccountVerified?"Yes":"No"}),
/* @__PURE__ */r.jsxs("td",{className:"actions",children:[
/* @__PURE__ */r.jsxs("select",{value:C===e._id?E:e.role,onChange:a=>{A(e._id),$(a.target.value)},"aria-label":`Select role for user ${e.name}`,children:[
/* @__PURE__ */r.jsx("option",{value:"user",children:"User"}),
/* @__PURE__ */r.jsx("option",{value:"admin",children:"Admin"})]}),
/* @__PURE__ */r.jsx("button",{onClick:()=>handleUpdateRole(e._id),className:"btn-update",disabled:C!==e._id,"aria-label":`Update role for user ${e.name}`,children:"Update"}),
/* @__PURE__ */r.jsx("button",{onClick:()=>(async e=>{var a,r;if(window.confirm("Are you sure you want to delete this user?"))try{await t.delete(`https://future-auto-jc.onrender.com/api/admin/users/${e}`,{headers:{Authorization:`Bearer ${F}`}}),alert("User deleted successfully!"),k()}catch(l){console.error("Error deleting user:",l),alert(`Error deleting user: ${(null==(r=null==(a=l.response)?void 0:a.data)?void 0:r.message)||l.message}`)}})(e._id),className:"btn-delete",disabled:"admin"===e.role,"aria-label":`Delete user ${e.name}`,children:"Delete"})]})]},e._id)))})]})})]})]})]})};export{l as default};
