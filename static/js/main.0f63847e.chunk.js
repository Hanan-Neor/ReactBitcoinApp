(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{105:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(46),s=n.n(c),o=(n(105),n(3)),i=n(4),u=n(6),l=n(5),d=n(12),h=n(11),p=n(2),b=n.n(p),j=n(7),m=n(15),f=n(13),v={query:g,get:function(e,t){return g(e).then((function(e){return e.find((function(e){return e._id===t}))}))},post:function(e,t){return t._id=O(),g(e).then((function(n){return n.push(t),x(e,n),t}))},put:function(e,t){return g(e).then((function(n){var a=n.findIndex((function(e){return e._id===t._id}));return n.splice(a,1,t),x(e,n),t}))},remove:function(e,t){return g(e).then((function(n){var a=n.findIndex((function(e){return e._id===t}));n.splice(a,1),x(e,n)}))},postMany:function(e,t){return g(e).then((function(n){return n.push.apply(n,Object(f.a)(t)),x(e,n),n}))},_save:x,_makeId:O};function g(e){var t=JSON.parse(localStorage.getItem(e))||[];return Promise.resolve(t)}function O(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function x(e,t){localStorage.setItem(e,JSON.stringify(t))}var y="loggedinUser",C={login:function(e){return S.apply(this,arguments)},logout:function(){return _.apply(this,arguments)},signup:function(e){return N.apply(this,arguments)},getUsers:function(){return{username:"Avi Berger",coins:100,moves:[]}},getById:function(e){return w.apply(this,arguments)},remove:function(e){return v.remove("user",e)},update:function(e){return k.apply(this,arguments)},getLoggedinUser:M};function w(){return(w=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("user",t);case 2:return n=e.sent,n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.put("user",t);case 2:return M()._id===t._id&&T(t),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.query("user");case 2:if(n=e.sent,a=n.find((function(e){return e.username===t.username}))){e.next=6;break}return e.abrupt("return");case 6:return e.abrupt("return",T(a));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.query("user");case 2:return e.sent,e.next=5,v.post("user",t);case 5:return n=e.sent,e.abrupt("return",T(n));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:sessionStorage.removeItem(y);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return sessionStorage.setItem(y,JSON.stringify(e)),e}function M(){return sessionStorage.getItem(y)||sessionStorage.setItem(y,"null"),JSON.parse(sessionStorage.getItem(y))}function L(){return function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getLoggedinUser();case 2:n=e.sent,t({type:"SET_USER",loggedInUser:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}window.userService=C;var U=n(0),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).logout=Object(j.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C.logout(),t.next=3,e.props.getLoggedinUser();case 3:case"end":return t.stop()}}),t)}))),e.toggleMenu=function(){document.querySelector(".right-side .nav").classList.toggle("menu-open"),document.querySelector(".screen").classList.toggle("menu-open")},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.user;return Object(U.jsxs)("div",{className:"app-header flex align-center space-between",children:[Object(U.jsx)("div",{children:Object(U.jsx)("h1",{children:"Mr.Bitcoin"})}),Object(U.jsx)("div",{className:"right-side flex align-center",children:e?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{children:["Hello ",e.username,"!"]}),Object(U.jsx)("div",{className:"hamburger-button",onClick:this.toggleMenu,children:"\u2263"}),Object(U.jsxs)("nav",{className:"nav flex",children:[Object(U.jsx)(d.c,{onClick:this.toggleMenu,activeClassName:"active-nav",exact:!0,to:"/",children:Object(U.jsx)("div",{children:"Home"})}),Object(U.jsx)(d.c,{onClick:this.toggleMenu,activeClassName:"active-nav",to:"/contact",children:Object(U.jsx)("div",{children:"Contacts"})}),Object(U.jsx)(d.c,{onClick:this.toggleMenu,activeClassName:"active-nav",to:"/stats",children:Object(U.jsx)("div",{children:"Stats"})})]})]}):Object(U.jsx)("div",{children:"Hello User!"})})]})}}]),n}(a.Component),D={getLoggedinUser:L},B=Object(m.b)((function(e){return{user:e.userModule.loggedInUser}}),D)(I);function P(e){var t=e.move,n=e.withContactName;return Object(U.jsxs)("div",{className:"move-preview",children:[n&&Object(U.jsxs)(U.Fragment,{children:["To ",Object(U.jsx)(d.b,{to:"/contact/"+t.toId,children:t.to})," ",Object(U.jsx)("br",{})]}),Object(U.jsxs)("span",{className:"bitcoin",children:["\u20bf ",t.amount]})," |",Object(U.jsxs)("span",{className:"usd",children:[" ",t.usdAmount.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2})]}),Object(U.jsx)("br",{}),Object(U.jsx)("span",{className:"sm-font",children:new Date(t.at).toLocaleString()})]})}function E(e){var t=e.moves,n=e.title,a=e.withContactName,r=e.toggleMovesList,c=e.buttonTitle;return Object(U.jsxs)("div",{className:"move-list",children:[Object(U.jsxs)("div",{className:"flex space-between align-center",children:[Object(U.jsx)("h3",{children:n}),Object(U.jsx)(d.b,{children:Object(U.jsx)("span",{className:"sm-font",onClick:r,children:c})})]}),!t.length&&Object(U.jsx)("div",{className:"no-moves",children:"Nothing to show yet.."}),t.map((function(e,t){return Object(U.jsx)(P,{move:e,withContactName:a},t)}))]})}var F=n(10),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={amount:null},e.onTransferCoins=function(t){var n=t.target;e.props.onTransferCoins(n.value)},e.handleChange=function(t){var n=t.target;e.setState({amount:n.value})},e.handleSubmit=function(t){t.preventDefault(),e.state.amount&&(e.props.onTransferCoins(e.state.amount),e.setState({amount:""}))},e.transferPrecision=function(){return 1e-6},e}return Object(i.a)(n,[{key:"render",value:function(){var e;return Object(U.jsx)("div",{className:"transfer-fund",children:Object(U.jsxs)("form",{className:"transfer-form flex",onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("label",{htmlFor:"amount"}),Object(U.jsx)("input",(e={id:"amount",name:"amount",type:"number",placeholder:"How much?",value:this.state.amount,onChange:this.handleChange},Object(F.a)(e,"name",""),Object(F.a)(e,"min",this.transferPrecision()),Object(F.a)(e,"max",this.props.maxCoins),Object(F.a)(e,"step",this.transferPrecision()),Object(F.a)(e,"autoComplete","off"),e))]}),Object(U.jsx)("div",{children:Object(U.jsx)("button",{className:"nice-button",children:"Transfer"})})]})})}}]),n}(a.Component),R={query:function(e){return J.apply(this,arguments)},save:function(e){return G.apply(this,arguments)},remove:function(e){return v.remove(z,e)},getById:function(e){return W.apply(this,arguments)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},z="contacts",q=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];Y();function J(){return(J=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return n=e.sent,t&&(n=H(t,n)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return e=e.toLocaleLowerCase(),t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}function W(){return(W=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(z,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._id){e.next=5;break}return e.next=3,v.put(z,t);case 3:e.next=7;break;case 5:return e.next=7,v.post(z,t);case 7:return e.abrupt("return");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return X.apply(this,arguments)}function X(){return(X=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.query(z);case 2:return(t=e.sent)&&t.length||(t=q,v.postMany(z,t)),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return function(){var e=Object(j.a)(b.a.mark((function e(t,n){var a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().contactModule,r=a.filterBy,c=a.contacts,e.next=3,R.query(r);case 3:c=e.sent,t({type:"SET_CONTACTS",contacts:c});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function K(e){return function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.remove(e);case 2:n({type:"DELETE_CONTACT",contactId:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var Q=n(48),Z=n.n(Q),$={getRate:function(){return ee.apply(this,arguments)},getMarketPrice:function(){return te.apply(this,arguments)},getConfirmedTransactions:function(){return ne.apply(this,arguments)}};function ee(){return(ee=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("https://blockchain.info/ticker");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function te(){return(te=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ne(){return(ne=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true\n        ");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var ae=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:null,moves:null},e.loadContact=Object(j.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,t.next=3,R.getById(n);case 3:a=t.sent,e.getMovesToContact(),e.setState({contact:a});case 6:case"end":return t.stop()}}),t)}))),e.getMovesToContact=Object(j.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.loggedInUser.moves;case 2:n=t.sent,a=n.filter((function(t){return t.toId===e.state.contact._id})),e.setState({moves:a});case 5:case"end":return t.stop()}}),t)}))),e.goBack=function(){e.props.history.push("/contact/")},e.getBitcoinRate=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.getRate();case 2:return t=e.sent,e.abrupt("return",t.USD.last);case 4:case"end":return e.stop()}}),e)}))),e.onTransferCoins=function(){var t=Object(j.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.contact,t.t0=a._id,t.t1=a.name,t.t2=Date.now(),t.t3=n,t.next=7,e.getBitcoinRate();case 7:t.t4=t.sent,t.t5=n,t.t6=t.t4*t.t5,r={toId:t.t0,to:t.t1,at:t.t2,amount:t.t3,usdAmount:t.t6},e.props.addMove(r),e.loadContact();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadContact()}},{key:"render",value:function(){var e=this.state,t=e.contact,n=e.moves;return t&&n?Object(U.jsxs)("div",{className:"secondary-layout flex column ",children:[Object(U.jsxs)("div",{className:"back-buttons-bar flex space-between",children:[Object(U.jsx)(d.b,{children:Object(U.jsx)("div",{onClick:this.goBack,children:"Back"})}),Object(U.jsx)(d.b,{to:"/contact/edit/"+t._id,children:Object(U.jsx)("div",{children:"Edit"})})]}),Object(U.jsxs)("div",{className:"content-layout contact-details flex column",children:[Object(U.jsx)("img",{className:"avatar",src:"https://robohash.org/"+t._id,alt:"",width:"200",height:"200"}),Object(U.jsxs)("div",{className:"details",children:[Object(U.jsx)("p",{className:"name",children:Object(U.jsx)("h1",{children:t.name})}),Object(U.jsx)("p",{className:"phone",children:Object(U.jsx)("h3",{children:t.phone})}),Object(U.jsx)("p",{className:"email",children:t.email})]}),Object(U.jsx)(A,{className:"contact-details",onTransferCoins:this.onTransferCoins,maxCoins:this.props.loggedInUser.coins})]}),Object(U.jsx)(E,{moves:n,title:"Moves History"})]}):Object(U.jsx)("div",{children:"wow I am loading"})}}]),n}(a.Component),re={deleteContact:K,loadContacts:V,addMove:function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n,a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=a().userModule.loggedInUser).coins<e.amount)){t.next=3;break}return t.abrupt("return",alert("You dont have enough money!"));case 3:return r.coins-=e.amount,r.moves.unshift(e),t.next=7,C.update(r);case 7:n({type:"SET_USER",loggedInUser:r});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},ce=Object(m.b)((function(e){return{loggedInUser:e.userModule.loggedInUser}}),re)(ae),se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var n=t.target;e.props.onChangeFilter(n.value)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(U.jsx)("div",{className:"contact-filter",children:Object(U.jsx)("form",{children:Object(U.jsx)("input",{type:"text",id:"text",onChange:this.handleChange,placeholder:"Search",autoComplete:"off"})})})}}]),n}(a.Component);function oe(e){var t=e.contact;e.selectContact;return Object(U.jsx)(d.b,{to:"/contact/"+t._id,children:Object(U.jsxs)("div",{className:"contact-preview",children:[Object(U.jsx)("img",{className:"avatar",src:"https://robohash.org/"+t._id,alt:"",width:"50",height:"50"}),Object(U.jsx)("div",{className:"flex column",children:t.name})]})})}function ie(e){var t=e.contacts,n=e.selectContact;return Object(U.jsx)("div",{className:"contact-list",children:t.map((function(e){return Object(U.jsx)(oe,{contact:e,selectContact:n},e._id)}))})}var ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filterBy:null},e.onChangeFilter=function(t){e.props.setFilterBy(t),e.props.loadContacts()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.setFilterBy(""),this.props.loadContacts()}},{key:"render",value:function(){var e=this.props.contacts,t=this.props.selectContact;return e?Object(U.jsxs)("div",{className:"secondary-layout",children:[Object(U.jsx)(d.b,{to:"/contact/edit",children:Object(U.jsx)("button",{className:"nice-button",children:"Add Contact"})}),Object(U.jsx)("div",{className:"",children:Object(U.jsx)(se,{onChangeFilter:this.onChangeFilter})}),Object(U.jsx)("div",{className:" contact-page",children:Object(U.jsx)(ie,{contacts:e,selectContact:t})})]}):Object(U.jsx)("div",{children:"Loading Contacts..."})}}]),n}(a.Component),le={loadContacts:V,deleteContact:K,setFilterBy:function(e){return function(t){t({type:"SET_FILTER_BY",filterBy:e})}}},de=Object(m.b)((function(e){return{contacts:e.contactModule.contacts}}),le)(ue),he=n(24),pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showAll:!1,marketPrice:null,bitcoinRate:null},e.loadUser=Object(j.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getLoggedinUser();case 2:e.props.user||e.props.history.push("/signup");case 3:case"end":return t.stop()}}),t)}))),e.loadMarketPrice=Object(j.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.getMarketPrice();case 2:n=t.sent,e.setState({marketPrice:n}),console.log(n);case 5:case"end":return t.stop()}}),t)}))),e.getBitcoinRate=Object(j.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.getRate();case 2:n=t.sent,console.log(n.USD.last),e.setState({bitcoinRate:n.USD.last});case 5:case"end":return t.stop()}}),t)}))),e.logout=Object(j.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C.logout(),t.next=3,e.props.getLoggedinUser();case 3:e.props.history.push("/signup"),console.log(e.props);case 5:case"end":return t.stop()}}),t)}))),e.bitcoinRateToShow=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2})},e.toggleMovesList=function(){var t=!e.state.showAll;e.setState({showAll:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadUser(),this.loadMarketPrice(),this.getBitcoinRate(),console.log(this.props)}},{key:"render",value:function(){var e=this.state.showAll,t=this.state.marketPrice,n=this.state.bitcoinRate,a=this.props.user;return a?Object(U.jsxs)("div",{className:" home-page secondary-layout flex column ",children:[Object(U.jsx)("div",{className:"back-buttons-bar flex",children:Object(U.jsx)(d.b,{onClick:this.logout,children:" Logout"})}),Object(U.jsxs)("div",{className:"content-layout flex column justify-center",children:[Object(U.jsxs)("h1",{children:["Hello ",a.username," !"]}),Object(U.jsxs)("div",{className:"flex space-between bottom-divider",children:[Object(U.jsxs)("div",{className:"left-side",children:[Object(U.jsx)("div",{className:"sm-font",children:"Current Balance"}),Object(U.jsxs)("div",{children:["BIT: ",Object(U.jsxs)("span",{className:"bitcoin md-font",children:["\u20bf ",a.coins]})]}),Object(U.jsxs)("div",{children:["USD: ",Object(U.jsx)("span",{className:"usd",children:this.bitcoinRateToShow(a.coins*n)})]})]}),Object(U.jsxs)("div",{className:"right-side",children:[Object(U.jsx)("div",{className:"sm-font",children:"Current BTC to USD"}),Object(U.jsx)("div",{className:"md-font",children:n?this.bitcoinRateToShow(n):"loading"})]})]}),t&&Object(U.jsxs)("div",{children:[Object(U.jsx)("h5",{className:"text-center",children:"Market Price (last 5 months)"}),Object(U.jsx)(he.Sparklines,{data:t.values.map((function(e){return e.y})),children:Object(U.jsx)(he.SparklinesLine,{color:"orange",style:{strokeWidth:".5",fill:"orange"}})})]})]}),!e&&Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(E,{moves:a.moves.slice(0,5),title:"Last 5 moves",withContactName:!0,toggleMovesList:this.toggleMovesList,buttonTitle:"Show all"})}),e&&Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(E,{moves:a.moves,title:"All moves",withContactName:!0,toggleMovesList:this.toggleMovesList,buttonTitle:"Show less"})})]}):Object(U.jsx)("div",{children:"lodaing"})}}]),n}(a.Component),be={getLoggedinUser:L},je=Object(m.b)((function(e){return{user:e.userModule.loggedInUser}}),be)(pe),me=(n(65),n(68)),fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={marketPrice:null,confirmedTransactions:null,chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)"}]}},e.loadMarketPrice=Object(j.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.getMarketPrice();case 2:n=t.sent,e.setState({marketPrice:n}),console.log(n);case 5:case"end":return t.stop()}}),t)}))),e.loadConfirmTransactions=Object(j.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.getConfirmedTransactions();case 2:n=t.sent,e.setState({confirmTransactions:n});case 4:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadMarketPrice(),this.loadConfirmTransactions()}},{key:"render",value:function(){var e=this.state,t=e.marketPrice,n=e.confirmTransactions;return t&&n?Object(U.jsxs)("div",{className:"flex column",style:{width:"100%"},children:[Object(U.jsx)("h1",{children:"statistics!"}),Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:"Market Price"}),Object(U.jsx)(he.Sparklines,{data:t.values.map((function(e){return e.y})),margin:10,children:Object(U.jsx)(he.SparklinesLine,{color:"blue",style:{strokeWidth:".5",fill:"none"}})})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:"Confirm Transactions"}),Object(U.jsx)(he.Sparklines,{data:n.values.map((function(e){return e.y})),margin:10,children:Object(U.jsx)(he.SparklinesLine,{color:"red",style:{strokeWidth:".5"}})})]}),Object(U.jsx)(me.a,{data:{labels:this.state.marketPrice.values.map((function(e){return new Date(1e3*e.x).toLocaleString()})),datasets:[{radius:2,hoverRadius:3,borderWidth:1,label:"Market Price",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:this.state.marketPrice.values.map((function(e){return e.y}))}]},height:500,width:700}),Object(U.jsx)(me.a,{data:{labels:this.state.confirmTransactions.values.map((function(e){return new Date(1e3*e.x).toLocaleString()})),datasets:[{radius:2,hoverRadius:3,borderWidth:1,label:"Confirm Transactions",backgroundColor:"rgb(140, 102, 20)",borderColor:"#F3931C",fill:!0,data:this.state.confirmTransactions.values.map((function(e){return e.y}))}]}})]}):Object(U.jsx)("div",{children:"loading"})}}]),n}(a.Component),ve=n(8),ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:null},e.onSaveRobot=Object(j.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.contact,t.next=3,R.save(n);case 3:e.props.history.push("/contact/"+n._id);case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState((function(e){return{contact:Object(ve.a)(Object(ve.a)({},e.contact),{},Object(F.a)({},a,r))}}))},e.goBack=function(){var t=e.state.contact;t._id?e.props.history.push("/contact/"+t._id):e.props.history.push("/contact")},e.deleteContact=function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e.state.contact._id){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.props.deleteContact(e.state.contact._id);case 5:e.props.history.push("/contact");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=this.props.match.params.id)){e.next=8;break}return e.next=5,R.getById(t);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=R.getEmptyContact();case 9:n=e.t0,this.setState({contact:n}),e.next=15;break;case 13:e.prev=13,e.t1=e.catch(0);case 15:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.contact)return Object(U.jsx)("div",{children:"Lodaing..."});var e=this.state.contact,t=e.name,n=e.email,a=e.phone;return Object(U.jsxs)("div",{className:"secondary-layout ",children:[Object(U.jsx)("div",{className:"back-buttons-bar flex space-between",children:Object(U.jsx)(d.b,{children:Object(U.jsx)("div",{onClick:this.goBack,children:"Back"})})}),Object(U.jsxs)("form",{className:"content-layout contact-edit",children:[Object(U.jsx)("label",{htmlFor:"name",children:"Name"}),Object(U.jsx)("input",{ref:this.inputRef,value:t,name:"name",type:"text",id:"name",onChange:this.handleChange}),Object(U.jsx)("label",{htmlFor:"email",children:"Email"}),Object(U.jsx)("input",{value:n,name:"email",type:"text",id:"email",onChange:this.handleChange}),Object(U.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(U.jsx)("input",{value:a,name:"phone",type:"text",id:"phone",onChange:this.handleChange}),Object(U.jsxs)("div",{className:"buttons",children:[Object(U.jsx)("button",{className:"nice-button",onClick:this.onSaveRobot,children:"Save"}),this.state.contact._id&&Object(U.jsx)("button",{className:"simple-button",onClick:this.deleteContact,children:"Delete Contact"})]})]})]})}}]),n}(a.Component),Oe={deleteContact:K},xe=Object(m.b)((function(e){return{}}),Oe)(ge),ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={signedUp:{username:null,coins:100,moves:[]},loggedIn:{username:null}},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState((function(e){return{signedUp:Object(ve.a)(Object(ve.a)({},e.signedUp),{},Object(F.a)({},a,r))}}))},e.handleChange2=function(t){var n=t.target,a=n.name,r=n.value;e.setState((function(e){return{loggedIn:Object(ve.a)(Object(ve.a)({},e.loggedIn),{},Object(F.a)({},a,r))}}))},e.handleSubmit=function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,C.signup(e.state.signedUp);case 3:return t.next=5,e.props.getLoggedinUser();case 5:e.props.history.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleLogin=function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,C.login(e.state.loggedIn);case 3:return t.next=5,e.props.getLoggedinUser();case 5:e.props.history.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{children:["signup",Object(U.jsx)("form",{onSubmit:this.handleSubmit,children:Object(U.jsx)("input",{id:"username",name:"username",type:"text",onChange:this.handleChange,autoComplete:"off"})})]}),Object(U.jsxs)("div",{children:["login",Object(U.jsx)("form",{onSubmit:this.handleLogin,children:Object(U.jsx)("input",{id:"username",name:"username",type:"text",onChange:this.handleChange2,autoComplete:"off"})})]})]})}}]),n}(a.Component),Ce={getLoggedinUser:L},we=Object(m.b)((function(e){return{}}),Ce)(ye),ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={robots:null,filterBy:null,selectedContactId:null,page:"home"},e.selectContact=function(t){e.setState({selectedContactId:t})},e.gotoPage=function(t){e.setState({page:t,selectedContactId:null})},e.toggleMenu=function(){document.querySelector(".right-side .nav").classList.toggle("menu-open"),document.querySelector(".screen").classList.toggle("menu-open")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getLoggedinUser()}},{key:"render",value:function(){var e=this.state;e.selectedContactId,e.page;return Object(U.jsxs)(d.a,{children:[Object(U.jsx)("div",{className:"screen",onClick:this.toggleMenu}),Object(U.jsx)(B,{}),Object(U.jsx)("main",{className:"main-layout flex column align-center",children:Object(U.jsxs)(h.c,{children:[Object(U.jsx)(h.a,{path:"/signup",component:we}),Object(U.jsx)(h.a,{path:"/stats",component:fe}),Object(U.jsx)(h.a,{path:"/contact/edit/:id?",component:xe}),Object(U.jsx)(h.a,{path:"/contact/:id",component:ce}),Object(U.jsx)(h.a,{path:"/contact",component:de}),Object(U.jsx)(h.a,{path:"/",component:je})]})})]})}}]),n}(a.Component),Se={getLoggedinUser:L},Ne=Object(m.b)((function(e){return{}}),Se)(ke);function _e(){return Object(U.jsx)("main",{className:"app-container flex column",children:Object(U.jsx)(Ne,{})})}var Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Me=n(36),Le=n(100),Ue={contacts:null,filterBy:null};var Ie={loggedInUser:null};var De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Me.c,Be=Object(Me.b)({contactModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(ve.a)(Object(ve.a)({},e),{},{contacts:t.contacts});case"SET_FILTER_BY":return Object(ve.a)(Object(ve.a)({},e),{},{filterBy:t.filterBy});case"ADD_CONTACT":return Object(ve.a)(Object(ve.a)({},e),{},{contacts:[].concat(Object(f.a)(e.contacts),[t.contact])});case"DELETE_CONTACT":return Object(ve.a)(Object(ve.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contactId}))});case"UPDATE_CONTACT":return Object(ve.a)(Object(ve.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});default:return e}},userModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"UPDATE_USER":return Object(ve.a)(Object(ve.a)({},e),{},{loggedInUser:t.loggedInUser});default:return e}}}),Pe=Object(Me.d)(Be,De(Object(Me.a)(Le.a)));s.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(m.a,{store:Pe,children:Object(U.jsx)(_e,{})})}),document.getElementById("root")),Te()}},[[235,1,2]]]);
//# sourceMappingURL=main.0f63847e.chunk.js.map