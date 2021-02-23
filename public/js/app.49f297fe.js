(function(t){function e(e){for(var o,s,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e970ae70"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}n[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"2d1e":function(t,e,r){"use strict";r("bcbb")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),r("router-link",{attrs:{to:"/products"}},[t._v("All Products")]),t._v(" | "),t.isLoggedIn()?t._e():r("router-link",{attrs:{to:"/signup"}},[t._v("Signup")]),t._v(" | "),t.isLoggedIn()?t._e():r("router-link",{attrs:{to:"/login"}},[t._v("Login")]),t._v(" | "),t.isLoggedIn()?r("router-link",{attrs:{to:"/logout"}},[t._v("Logout")]):t._e(),t._v(" | "),r("router-link",{attrs:{to:"/product/new"}},[t._v("Create a Product")])],1),t.flashMessage?r("div",{staticClass:"alert alert-success",on:{click:function(e){t.flashMessage=""}}},[t._v(t._s(t.flashMessage))]):t._e(),r("router-view")],1)},a=[],s={data:function(){return{flashMessage:""}},methods:{isLoggedIn:function(){return!!localStorage.getItem("jwt")}}},i=s,u=(r("034f"),r("2877")),c=Object(u["a"])(i,n,a,!1,null,null,null),l=c.exports,d=(r("d3b7"),r("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v(t._s(t.message))]),r("h2",[t._v("Now accepting Dogecoin")]),r("img",{attrs:{src:"https://static.independent.co.uk/2021/02/04/14/what%20is%20dogecoin.jpg?width=982&height=726&auto=webp&quality=75",alt:""}})])},m=[],v={data:function(){return{message:"Hot or Not Plant store!"}},created:function(){},methods:{}},f=v,g=(r("cccb"),Object(u["a"])(f,p,m,!1,null,null,null)),h=g.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"prodcut-index"},[r("h1",[t._v("All Products")]),t._v(" Search by name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nameFilter,expression:"nameFilter"}],attrs:{type:"text",list:"product-names"},domProps:{value:t.nameFilter},on:{input:function(e){e.target.composing||(t.nameFilter=e.target.value)}}}),r("datalist",{attrs:{id:"product-names"}},t._l(t.products,(function(e){return r("option",{key:e.id},[t._v(t._s(e.name))])})),0),r("div",{staticClass:"row row-cols-1 row-cols-md-3"},t._l(t.filterBy(t.products,t.nameFilter,"name"),(function(e){return r("div",{key:e.id,staticClass:"col mb-4"},[r("div",{staticClass:"card"},[r("img",{staticClass:"card-img-top",attrs:{src:e.primary_image_url,alt:e.name}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),r("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),r("router-link",{attrs:{to:"/products/"+e.id}},[t._v("More details")])],1)])])})),0)])},w=[],b=r("bc3a"),P=r.n(b),y=r("a7c6"),x=r.n(y),C={mixins:[x.a.mixin],data:function(){return{products:[],nameFilter:""}},created:function(){var t=this;P.a.get("/api/products").then((function(e){console.log("products index",e),t.products=e.data}))},methods:{}},j=C,k=(r("2d1e"),Object(u["a"])(j,_,w,!1,null,"52edf429",null)),N=k.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"signup"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[r("h1",[t._v("Signup")]),r("ul",t._l(t.errors,(function(e){return r("li",{key:e,staticClass:"text-danger"},[t._v(" "+t._s(e)+" ")])})),0),r("div",{staticClass:"form-group"},[r("label",[t._v("Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),r("small",[t._v(t._s(20-t.name.length)+" characters remaining")])]),r("div",{staticClass:"form-group"},[r("label",[t._v("Email:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Password:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.password.length>0&&t.password.length<6?r("small",{staticClass:"text-danger"},[t._v(" Must be at least 6 characters ")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",[t._v("Password confirmation:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.passwordConfirmation},on:{input:function(e){e.target.composing||(t.passwordConfirmation=e.target.value)}}}),t.passwordConfirmation!==t.password?r("small",{staticClass:"text-danger"},[t._v("Passwords must match!")]):t._e()]),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},$=[],O=(r("b0c0"),{data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var t=this,e={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};P.a.post("/api/users",e).then((function(e){console.log(e.data),t.$router.push("/login")})).catch((function(e){t.errors=e.response.data.errors}))}}}),E=O,D=Object(u["a"])(E,S,$,!1,null,null,null),L=D.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[r("h1",[t._v("Login")]),r("ul",t._l(t.errors,(function(e){return r("li",{key:e,staticClass:"text-danger"},[t._v(" "+t._s(e)+" ")])})),0),r("div",{staticClass:"form-group"},[r("label",[t._v("Email:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Password:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},I=[],A={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var t=this,e={email:this.email,password:this.password};P.a.post("/api/sessions",e).then((function(e){P.a.defaults.headers.common["Authorization"]="Bearer "+e.data.jwt,localStorage.setItem("jwt",e.data.jwt),t.$parent.flashMessage="Logged in succesfully!",t.$router.push("/")})).catch((function(e){console.log(e.response),t.errors=["Invalid email or password."],t.email="",t.password=""}))}}},F=A,T=Object(u["a"])(F,M,I,!1,null,null,null),q=T.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logout"})},H=[],z={created:function(){delete P.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/")}},R=z,J=Object(u["a"])(R,B,H,!1,null,null,null),X=J.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-new"},[r("h1",[t._v("New Product")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.createProduct()}}},[r("ul",[t._l(t.errors,(function(e){return r("li",{key:e},[t._v(t._s(e))])})),t.status?r("img",{attrs:{src:"https://http.cat/"+t.status,alt:""},on:{click:function(e){t.status=""}}}):t._e()],2),t._v(" Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProductName,expression:"newProductName"}],attrs:{type:"text"},domProps:{value:t.newProductName},on:{input:function(e){e.target.composing||(t.newProductName=e.target.value)}}}),t._v(" Price: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProductPrice,expression:"newProductPrice"}],attrs:{type:"text"},domProps:{value:t.newProductPrice},on:{input:function(e){e.target.composing||(t.newProductPrice=e.target.value)}}}),t._v(" Description: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProductDescription,expression:"newProductDescription"}],attrs:{type:"text"},domProps:{value:t.newProductDescription},on:{input:function(e){e.target.composing||(t.newProductDescription=e.target.value)}}}),t._v(" Supplier_id: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProductSupplier_id,expression:"newProductSupplier_id"}],attrs:{type:"text"},domProps:{value:t.newProductSupplier_id},on:{input:function(e){e.target.composing||(t.newProductSupplier_id=e.target.value)}}}),r("input",{attrs:{type:"submit",value:"Create"}})])])},W=[],G={data:function(){return{newProductName:"",newProductPrice:"",newProductDescription:"",newProductSupplier_id:"",status:"",errors:[]}},created:function(){},methods:{createProduct:function(){var t=this,e={name:this.newProductName,Price:this.newProductPrice,Description:this.newProductDescription,Supplier_id:this.newProductSupplier_id};P.a.post("/api/products",e).then((function(e){console.log("products create",e),t.$router.push("/products")})).catch((function(e){console.log("products create error",e.response),t.errors=e.response.data.errors,t.status=e.response.status}))}}},K=G,Q=Object(u["a"])(K,U,W,!1,null,null,null),V=Q.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-show"},[r("h2",[t._v(t._s(t.product.name))]),r("img",{attrs:{src:t.product.id,alt:t.product.name}}),r("p",[t._v("name: "+t._s(t.product.name))]),r("p",[t._v("description: "+t._s(t.product.description))]),t.product.is_admin?r("router-link",{attrs:{to:"/products/"+t.product.id+"/edit"}},[t._v("Edit product")]):t._e(),t.product.is_admin?r("button",{on:{click:function(e){return t.destroyProduct(t.product)}}},[t._v("Destroy product")]):t._e(),r("router-link",{attrs:{to:"/products"}},[t._v("Back to all products")])],1)},Z=[],tt={data:function(){return{product:{}}},created:function(){var t=this;P.a.get("/api/products/"+this.$route.params.id).then((function(e){console.log("products show",e),t.product=e.data}))},methods:{destroyProduct:function(t){var e=this;P.a.delete("/api/products/"+t.id).then((function(t){console.log("products destroy",t),e.$router.push("/products")}))}}},et=tt,rt=Object(u["a"])(et,Y,Z,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-edit"},[r("h1",[t._v("Edit Product")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.updateProduct(t.product)}}},[r("ul",t._l(t.errors,(function(e){return r("li",{key:e},[t._v(t._s(e))])})),0),t._v(" Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],attrs:{type:"text"},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" price: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],attrs:{type:"text"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}}),t._v(" description: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],attrs:{type:"text"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})])])},at=[],st=(r("a4d3"),r("e01a"),{data:function(){return{product:{},errors:[]}},created:function(){var t=this;P.a.get("/api/products/"+this.$route.params.id).then((function(e){console.log("products show",e),t.product=e.data}))},methods:{updateProduct:function(t){var e=this,r={name:t.name,price:t.price,description:t.description};P.a.patch("/api/products/"+t.id,r).then((function(t){console.log("products update",t),e.$router.push("/products")})).catch((function(t){console.log("products update error",t.response),e.errors=t.response.data.errors}))}}}),it=st,ut=Object(u["a"])(it,nt,at,!1,null,null,null),ct=ut.exports;o["a"].use(d["a"]);var lt=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/products",name:"products-index",component:N},{path:"/signup",name:"signup",component:L},{path:"/login",name:"login",component:q},{path:"/logout",name:"logout",component:X},{path:"/product/new",name:"product-new",component:V},{path:"/products/:id",name:"products-show",component:ot},{path:"/products/:id/edit",name:"products-edit",component:ct}],dt=new d["a"]({mode:"history",base:"/",routes:lt}),pt=dt;r("4989"),r("ab8b");P.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",P.a.defaults.baseURL="https://calm-anchorage-36005.herokuapp.com/";var mt=localStorage.getItem("jwt");mt&&(P.a.defaults.headers.common["Authorization"]="Bearer "+mt),o["a"].config.productionTip=!1,new o["a"]({router:pt,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,r){},"85ec":function(t,e,r){},bcbb:function(t,e,r){},cccb:function(t,e,r){"use strict";r("5ced")}});
//# sourceMappingURL=app.49f297fe.js.map