(function(t){function e(e){for(var s,a,c=e[0],r=e[1],u=e[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,c=1;c<i.length;c++){var r=i[c];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1d38":function(t,e,i){},"1e22":function(t,e,i){},2395:function(t,e,i){},"2dc8":function(t,e,i){"use strict";i("5ccc")},"38c1":function(t,e,i){},"435b":function(t,e,i){},4409:function(t,e,i){"use strict";i("d1fa")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=i("b970");i("e9c4");function o(t,e,i,s){var n=0,o=5;e<0&&(o*=-1);var a=setInterval((function(){n+=o,i[s]=t+n,Math.abs(n)>=Math.abs(e)&&(i[s]=t+e,clearInterval(a))}),2)}function a(t){localStorage.setItem("sppoListStorage",JSON.stringify(t))}function c(){return JSON.parse(localStorage.getItem("sppoListStorage"))||{}}var r={scroll:o,addStorage:a,quireStorage:c},u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:t.animatName}},[i("router-view")],1)],1)},l=[],d=(i("b0c0"),{data:function(){return{animatName:"show"}},watch:{$route:function(t){"Search"===t.name&&(this.animatName="show"),"Categories"===t.name&&(this.animatName="hide")}}}),p=d,h=(i("7c55"),i("2877")),g=Object(h["a"])(p,u,l,!1,null,null,null),m=g.exports,f=i("8c4f"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Home"},[i("router-view"),i("Tabbar")],1)},v=[],L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tabbar-item",{attrs:{icon:"home-o"}},[t._v("首页")]),i("van-tabbar-item",{attrs:{to:{name:"Categories"},icon:"apps-o"}},[t._v("分类")]),i("van-tabbar-item",{attrs:{id:"shopping-cart",to:{name:"Commoditycart"},icon:"shopping-cart-o",badge:t.badge}},[t._v(" 购物车 ")]),i("van-tabbar-item",{attrs:{icon:"contact"}},[t._v("我的")])],1)},y=[],j=i("5530"),S=(i("d3b7"),i("07ac"),i("2f62")),O={data:function(){return{active:1}},computed:Object(j["a"])(Object(j["a"])({},Object(S["d"])(["sppoListStorage"])),{},{badge:function(){var t=Object.values(this.sppoListStorage).reduce((function(t,e){return t+e}),0);return t>99?"99+":t}})},k=O,_=Object(h["a"])(k,L,y,!1,null,null,null),x=_.exports,w={components:{Tabbar:x}},C=w,R=(i("cccb"),Object(h["a"])(C,b,v,!1,null,null,null)),T=R.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Categories"},[i("router-link",{staticClass:"search-btn",attrs:{tag:"div",to:{name:"Search"}}},[i("van-icon",{attrs:{name:"search"}}),i("span",[t._v("iphone13滞销")])],1),i("Onetab"),i("Side"),t.isLoading?[i("van-loading",{attrs:{size:"1.3rem",vertical:""}})]:[i("Productlist")]],2)},G=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"Onetab",staticClass:"Onetab"},t._l(t.list,(function(e,s){return i("div",{key:e.title,staticClass:"item",class:{active:s===t.activeNumber},on:{touchend:function(e){return t.changeTou(e,s)},touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0}}},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.imgURL}})]),i("p",[t._v(t._s(e.title))])])})),0)},U=[],B={data:function(){return{move:!1,activeNumber:0,list:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"},{title:"个人护理",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg"},{title:"美妆护肤",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg"},{title:"家居收纳",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg"},{title:"家用电器",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg"},{title:"3C数码",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg"},{title:"母婴用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg"},{title:"鲜花绿植",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg"},{title:"宠物用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg"},{title:"图书玩具",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg"},{title:"手表配饰",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg"}]}},created:function(){this.getBarList(this.list[this.activeNumber].title),this.getGoodsList()},computed:Object(j["a"])({},Object(S["d"])(["listInfo"])),methods:Object(j["a"])(Object(j["a"])(Object(j["a"])({},Object(S["c"])(["setListItem","setGoodsList","setFinished"])),Object(S["b"])(["getBarList","getGoodsList"])),{},{changeTou:function(t,e){var i=this.$refs.Onetab;if(!this.move){this.activeNumber=e;var s=t.target.getBoundingClientRect().left,n=t.target.offsetWidth,o=this.$refs.Onetab.clientWidth,a=s-o/2+n/2;r.scroll(i.scrollLeft,a,i,"scrollLeft"),this.setListItem({sort:"all"}),this.setGoodsList([]),this.getBarList(this.list[e].title)}}})},P=B,N=(i("ba1e"),Object(h["a"])(P,$,U,!1,null,"2a400c8c",null)),E=N.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"Side",staticClass:"Side"},t._l(t.sideBarList,(function(e,s){return i("div",{key:e,class:{active:s===t.index},on:{touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0},touchend:function(e){return t.changeTou(e,s)}}},[t._v(" "+t._s("number"===typeof e?"全部":e)+" ")])})),0)},M=[],W={computed:Object(j["a"])({},Object(S["d"])(["sideBarList"])),data:function(){return{move:!1,index:0}},watch:{sideBarList:function(){this.index=0}},methods:Object(j["a"])(Object(j["a"])(Object(j["a"])({},Object(S["c"])(["setListItem","setFinished","setGoodsList"])),Object(S["b"])(["getGoodsList"])),{},{changeTou:function(t,e){if(!this.move){if(this.index===e)return;this.index=e;var i=this.$refs.Side,s=i.offsetHeight,n=t.target.offsetTop,o=t.target.offsetHeight;r.scroll(i.scrollTop,n-s/2+o/2,i,"scrollTop"),this.setGoodsList([]),this.setListItem({type:this.sideBarList[this.index]})}}})},J=W,q=(i("b3d2"),Object(h["a"])(J,H,M,!1,null,"54c7af34",null)),F=q.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Productlist van-hairline--top-bottom"},[i("div",{staticClass:"head"},[i("ul",[i("li",{class:{active:"all"===t.type},on:{touchend:function(e){return t.changeType("all")}}},[t._v(" 综合 ")]),i("li",{class:{active:"sale"===t.type},on:{touchend:function(e){return t.changeType("sale")}}},[t._v(" 销量 ")]),i("li",{class:{"price-up":"price-up"===t.type,"price-down":"price-down"===t.type},on:{touchend:function(e){return t.changeType("sort")}}},[t._v(" 价格 ")])])]),i("div",{staticClass:"card"},[i("van-pull-refresh",{attrs:{"head-height":"70","success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!0,offset:"5"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.sppoList,(function(e){return i("Productcard",{key:e.id,attrs:{url:e.images,title:e.title,describe:e.desc,label:e.tags,price:e.price,id:e.id,num:t.sppoListStorage[e.id]},on:{changeNum:t.dleLen}})})),1)],1)],1)])},A=[],D=i("1da1"),V=(i("96cf"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Productcard van-hairline--bottom"},[i("div",{staticClass:"list-image"},[i("img",{ref:"img",attrs:{src:t.url[0]||t.noImage}})]),i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[t._v(t._s(t.title))]),i("p",{staticClass:"describe"},[t._v(t._s(t.describe))]),i("div",{staticClass:"label"},t._l(t.label,(function(e){return i("div",{key:e},[t._v(t._s(e))])})),0),i("div",{staticClass:"sub"},[i("span",{staticClass:"price"},[t._v(t._s(t.price))]),i("div",{staticClass:"operate"},[t.num?i("div",{staticClass:"rec",on:{touchend:function(e){return t.$emit("changeNum",t.id,-1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"}})]):t._e(),t.num?i("div",{staticClass:"num"},[t._v(t._s(t.num))]):t._e(),i("div",{staticClass:"add",on:{touchend:function(e){return t.changeNum(t.id,1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"}})])])])])])}),K=[],Q=i("b3fe"),X=i.n(Q),Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{staticClass:"imgItem",style:{width:t.imgWidth+"px",height:t.imgHeight="px",opacity:t.opacity,transform:"translate("+t.imgLeft+"px, "+t.imgTop+"px)"}},[i("img",{attrs:{src:t.src}})]):t._e()},Z=[],tt={},et=tt,it=(i("5b58"),Object(h["a"])(et,Y,Z,!1,null,"7a6687c9",null)),st=it.exports,nt=s["a"].extend(st),ot=function(t){var e=t.imgTop,i=t.imgLeft,s=t.imgWidth,n=t.imgHeight,o=t.endTop,a=t.endLeft,c=t.src,r=new nt({el:document.createElement("div"),data:function(){return{show:!0,src:c,imgTop:e,imgLeft:i,imgWidth:s,imgHeight:n,endTop:o,endLeft:a,opacity:1}}});document.body.appendChild(r.$el),setTimeout((function(){r.imgLeft=a,r.imgTop=o,r.imgWidth=50,r.imgHeight=50,r.opacity=0}),3),setTimeout((function(){r.show=!1}),1e3)},at={data:function(){return{noImage:X.a}},props:["url","title","describe","label","price","id","num","anim"],methods:Object(j["a"])(Object(j["a"])({},Object(S["c"])(["setSppoListStorage"])),{},{changeNum:function(t,e){if(this.setSppoListStorage({id:t,num:e}),!this.anim){var i=this.$refs.img,s=i.getBoundingClientRect(),n=s.top,o=s.left,a=s.width,c=s.height,r=document.querySelector("#shopping-cart"),u=r.getBoundingClientRect(),l=u.top,d=u.left;ot({imgTop:n,imgLeft:o,imgWidth:a,imgHeight:c,endTop:l,endLeft:d,src:i.src})}}})},ct=at,rt=(i("74ff"),Object(h["a"])(ct,V,K,!1,null,"431c979e",null)),ut=rt.exports,lt={components:{Productcard:ut},computed:Object(j["a"])({},Object(S["d"])(["sppoList","listInfo","sppoListStorage"])),data:function(){return{type:"all",isLoading:!1,loading:!1,finished:!1,page:0}},destroyed:function(){this.setGoodsList([])},watch:{"listInfo.type":function(){this.setGoodsList([]),this.finished=!1,this.page=0,this.onLoad()}},methods:Object(j["a"])(Object(j["a"])(Object(j["a"])({},Object(S["c"])(["setListItem","setGoodsList","setSppoListStorage"])),Object(S["b"])(["getGoodsList"])),{},{onRefresh:function(){this.page=0,this.setGoodsList([]),this.isLoading=!1,this.finished=!1,this.onLoad()},dleLen:function(t,e){this.setSppoListStorage({id:t,num:e})},onLoad:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.finished){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,t.page+=1,e.next=6,t.getGoodsList({page:t.page});case 6:t.loading=!1,t.sppoList.length>=t.listInfo.total&&(t.finished=!0);case 8:case"end":return e.stop()}}),e)})))()},changeType:function(t){this.page=0,this.setGoodsList([]),"sort"===t?"price-up"===this.type?this.type="price-down":this.type="price-up":this.type=t,this.finished=!1,this.setListItem({sort:this.type}),this.onLoad()}})},dt=lt,pt=(i("2dc8"),Object(h["a"])(dt,z,A,!1,null,"6f1da07d",null)),ht=pt.exports,gt={computed:Object(j["a"])({},Object(S["d"])(["isLoading"])),components:{Onetab:E,Side:F,Productlist:ht}},mt=gt,ft=(i("4409"),Object(h["a"])(mt,I,G,!1,null,"aa90b140",null)),bt=ft.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Commoditycart"},[i("div",{staticClass:"header"},[i("van-nav-bar",{attrs:{title:"购物车","right-text":"删除"},on:{"click-right":t.del}})],1),t.list.length?i("div",{staticClass:"card-group"},[i("van-checkbox-group",{ref:"checkboxGroup",staticClass:"card",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"card-box"},[i("van-checkbox",{staticClass:"card-check",attrs:{name:e.id}}),i("Productcard",{key:e.id,attrs:{url:e.images,title:e.title,describe:e.desc,label:e.tags,price:e.price,id:e.id,anim:!0,num:t.sppoListStorage[e.id]},on:{changeNum:t.dleLen}})],1)})),0)],1):i("van-empty",{attrs:{description:"商品为空"}}),i("van-submit-bar",{staticClass:"settlement",attrs:{price:t.getPrice,"button-text":"结算("+t.getTotal+")","tip-icon":"info-o"},on:{submit:t.onSubmit}},[i("van-checkbox",{on:{click:t.onCheck},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)},Lt=[],yt=i("ade3"),jt=(i("4de4"),i("caad"),i("2532"),i("159b"),i("b64b"),i("a15b"),i("2241")),St=i("bc3a"),Ot=i.n(St),kt=Ot.a.create({baseURL:"https://mallapi.duyiedu.com/goods/"});kt.interceptors.request.use((function(t){return Object(j["a"])(Object(j["a"])({},t),{},{params:Object(j["a"])({appkey:"xiaomi_1644998775263"},t.params)})})),kt.interceptors.response.use((function(t){return 200===t.status?t.data:t}));var _t=kt,xt={getSideBar:function(t){return _t.get("/getsidebar",{params:t})},goodsList:function(t){return _t.get("/getGoodsList",{params:t})},likeSearch:function(t){return _t.get("/likeSearch",{params:t})},search:function(t){return _t.get("/search",{params:t})},getGoodsByIds:function(t){return _t.get("/getGoodsByIds",{params:t})}},wt={components:Object(yt["a"])({Productcard:ut},jt["a"].Component.name,jt["a"].Component),data:function(){return{result:[],list:[],checked:!1}},computed:Object(j["a"])(Object(j["a"])({},Object(S["d"])(["sppoListStorage"])),{},{getTotal:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)})),i=e.reduce((function(e,i){return e+(t.sppoListStorage[i.id]||0)}),0);return i},getPrice:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)})),i=e.reduce((function(e,i){var s=t.sppoListStorage[i.id]||0;return Math.round(i.price*s*100)+e}),0);return i}}),watch:{result:function(){this.result.length?this.result.length!==this.list.length?this.checked=!1:this.checked=!0:this.checked=!1}},methods:Object(j["a"])(Object(j["a"])({},Object(S["c"])(["setSppoListStorage"])),{},{onSubmit:function(){},dleLen:function(t,e){var i=this.sppoListStorage[t];1===i&&-1===e&&(this.list=this.list.filter((function(e){return e.id!==t}))),this.setSppoListStorage({id:t,num:e})},onCheck:function(){this.checked?this.$refs.checkboxGroup.toggleAll(!0):this.$refs.checkboxGroup.toggleAll()},del:function(){var t=this;jt["a"].confirm({message:"是否删除已选择的商品"}).then((function(){t.result.forEach((function(e){t.setSppoListStorage({id:e,num:"del"})})),t.list=t.list.filter((function(e){return!t.result.includes(e.id)})),t.result=Object.keys(t.sppoListStorage),t.$refs.checkboxGroup.toggleAll(!1)}))},getByIds:function(){var t=this,e=Object.keys(this.sppoListStorage).join();xt.getGoodsByIds({value:e}).then((function(e){t.list=e.list}))}}),created:function(){this.getByIds()}},Ct=wt,Rt=(i("d5a8"),Object(h["a"])(Ct,vt,Lt,!1,null,"b28a5ee6",null)),Tt=Rt.exports,It=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Search"},[i("div",{staticClass:"search-header"},[i("router-link",{staticClass:"search-left",attrs:{to:{name:"Categories"},tag:"div"}},[i("van-icon",{attrs:{name:"arrow-left"}})],1),i("div",{staticClass:"search-content"},[i("van-search",{attrs:{"show-action":"",placeholder:t.placeSearch},on:{search:function(e){return t.onSearch(t.form.type)},input:t.input,focus:t.onFocus},scopedSlots:t._u([{key:"action",fn:function(){return[t.showText?i("div",{on:{touchend:function(e){return t.onSearch(t.form.type)}}},[t._v("搜索")]):i("div",{attrs:{id:"shopping-cart"}},[i("van-icon",{attrs:{name:"shopping-cart-o",badge:t.badge}})],1)]},proxy:!0}]),model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1)],1),t.show?i("van-list",{staticClass:"search-list"},t._l(t.likeList,(function(e,s){return i("van-cell",{key:s},[[i("div",{domProps:{innerHTML:t._s(t.formatHTML(e))},on:{touchend:function(i){return t.onSearch(e)}}})]],2)})),1):t._e(),t.show||t.shoppList.length||!t.form.type?t._e():i("van-empty",{attrs:{description:"暂无商品"}}),t.shoppList.length||""!==t.form.type?t._e():i("Searchhistory",{attrs:{historyList:t.historyList},on:{toucheItem:t.onSearch}}),t.shoppList.length?i("div",{staticClass:"shoppList"},[i("van-pull-refresh",{attrs:{"success-text":"刷新成功","head-height":"70"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!0},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.shoppList,(function(e){return i("Productcard",{key:e.id,attrs:{url:e.images,title:e.title,describe:e.desc,label:e.tags,price:e.price,id:e.id,num:t.sppoListStorage[e.id]},on:{changeNum:t.dleLen}})})),1)],1)],1):t._e()],1)},Gt=[],$t=i("2909"),Ut=(i("7db0"),i("4e82"),i("ac1f"),i("841c"),i("99af"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("5319"),i("9767"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Searchhistory"},[i("h4",[t._v("历史记录：")]),i("div",{staticClass:"history"},t._l(t.historyList,(function(e,s){return i("div",{key:s,staticClass:"his-item",on:{touchend:function(i){return t.$emit("toucheItem",e.value)}}},[t._v(" "+t._s(e.value)+" ")])})),0)])}),Bt=[],Pt={props:["historyList"]},Nt=Pt,Et=(i("6a6a"),Object(h["a"])(Nt,Ut,Bt,!1,null,"2caf08c4",null)),Ht=Et.exports,Mt={data:function(){return{timer:null,showText:!0,shoppList:[],likeList:[],historyList:[],placeSearch:"苹果",form:{type:"",page:0,size:10},show:!1,isLoading:!1,loading:!1,finished:!1}},components:{Productcard:ut,Searchhistory:Ht},created:function(){this.historyList=JSON.parse(localStorage.getItem("historyList"))||[]},computed:Object(j["a"])(Object(j["a"])({},Object(S["d"])(["sppoListStorage"])),{},{badge:function(){var t=Object.values(this.sppoListStorage).reduce((function(t,e){return t+e}),0);return t>99?"99+":t}}),methods:Object(j["a"])(Object(j["a"])({},Object(S["c"])(["setSppoListStorage"])),{},{onSearch:function(t){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function i(){var s,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t&&(e.form.type=t),e.form.type||(e.form.type=e.placeSearch),e.form.page=1,e.show=!1,e.showText=!1,s=e.historyList.find((function(t){return t.value===e.form.type})),s?(s.time=(new Date).getTime(),e.historyList.sort((function(t,e){return e.time-t.time}))):(e.historyList.unshift({value:e.form.type,time:(new Date).getTime()}),e.historyList.length>=11&&e.historyList.pop()),localStorage.setItem("historyList",JSON.stringify(e.historyList)),e.finished=!1,i.next=11,xt.search(e.form);case 11:n=i.sent,e.shoppList=n.list,e.shoppList.length>=n.total&&(e.loading=!1,e.finished=!0),e.likeList=[];case 15:case"end":return i.stop()}}),i)})))()},onFocus:function(){this.showText=!0,this.show=!0,this.shoppList=[],this.getLikeSearch()},input:function(){if(!this.form.type)return this.show=!1,void(this.likeList=[]);this.show=!0,this.getLikeSearch()},onRefresh:function(){this.form.page=0,this.isLoading=!1,this.finished=!1,this.shoppList=[],this.onLoad()},dleLen:function(t,e){this.setSppoListStorage({id:t,num:e})},onLoad:function(){var t=this;this.finished||(this.loading=!0,this.form.page+=1,xt.search(this.form).then((function(e){t.shoppList=[].concat(Object($t["a"])(t.shoppList),Object($t["a"])(e.list)),t.loading=!1,t.shoppList.length>=e.total&&(t.finished=!0)})))},getLikeSearch:function(){var t=this;if(this.timer||!this.form.type)return clearTimeout(this.timer),void(this.timer=null);this.timer=setTimeout((function(){""!==t.form.type&&(xt.likeSearch({likeValue:t.form.type}).then((function(e){t.likeList=e.result})),t.timer=null)}),300)},formatHTML:function(t){var e=new RegExp(this.form.type,"g");return t.replace(e,this.form.type.fontcolor("red"))}})},Wt=Mt,Jt=(i("c737"),Object(h["a"])(Wt,It,Gt,!1,null,"44f4e48f",null)),qt=Jt.exports;s["a"].use(f["a"]);var Ft=[{path:"/home",name:"Home",component:T,redirect:"Categories",children:[{path:"categories",name:"Categories",component:bt},{path:"commoditycart",name:"Commoditycart",component:Tt}]},{path:"/search",name:"Search",component:qt},{path:"*",redirect:"/home/categories"}],zt=new f["a"]({mode:"hash",base:"",routes:Ft}),At=zt;s["a"].use(S["a"]);var Dt=new S["a"].Store({state:{sideBarList:[],sppoList:[],listInfo:{type:0,size:10,sort:"all"},total:0,isLoading:!1,sppoListStorage:{}},mutations:{setBarList:function(t,e){t.sideBarList=e},setGoodsList:function(t,e){t.sppoList=e},setLoading:function(t,e){t.isLoading=e},setListItem:function(t,e){t.listInfo=Object(j["a"])(Object(j["a"])({},t.listInfo),e)},setSppoListStorage:function(t,e){var i=e.id,n=e.num;t.sppoListStorage[i]?1===t.sppoListStorage[i]&&-1===n||"del"===n?s["a"].delete(t.sppoListStorage,i):s["a"].set(t.sppoListStorage,i,t.sppoListStorage[i]+=n):s["a"].set(t.sppoListStorage,i,n),r.addStorage(t.sppoListStorage)},setListStorage:function(t,e){t.sppoListStorage=e}},actions:{getBarList:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.commit("setLoading",!0),i.next=3,xt.getSideBar({type:e}).then((function(e){t.commit("setListItem",{type:e[0]}),t.commit("setBarList",e)}));case 3:t.commit("setLoading",!1);case 4:case"end":return i.stop()}}),i)})))()},getGoodsList:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,xt.goodsList(Object(j["a"])(Object(j["a"])({},t.state.listInfo),e)).then((function(e){t.commit("setListItem",{total:e.total}),t.commit("setGoodsList",[].concat(Object($t["a"])(t.state.sppoList),Object($t["a"])(e.list)))}));case 2:case"end":return i.stop()}}),i)})))()}},modules:{}});i("499a"),i("157a");s["a"].use(n["a"]),s["a"].config.productionTip=!1,Dt.commit("setListStorage",r.quireStorage()),new s["a"]({router:At,store:Dt,render:function(t){return t(m)}}).$mount("#app")},"5b58":function(t,e,i){"use strict";i("bc54")},"5ccc":function(t,e,i){},"5ced":function(t,e,i){},"6a6a":function(t,e,i){"use strict";i("38c1")},"74ff":function(t,e,i){"use strict";i("435b")},"7c55":function(t,e,i){"use strict";i("2395")},8877:function(t,e,i){},a273:function(t,e,i){},b3d2:function(t,e,i){"use strict";i("1d38")},b3fe:function(t,e,i){t.exports=i.p+"img/noImage.60242684.png"},ba1e:function(t,e,i){"use strict";i("1e22")},bc54:function(t,e,i){},c737:function(t,e,i){"use strict";i("a273")},cccb:function(t,e,i){"use strict";i("5ced")},d1fa:function(t,e,i){},d5a8:function(t,e,i){"use strict";i("8877")}});
//# sourceMappingURL=app.ba6e768c.js.map