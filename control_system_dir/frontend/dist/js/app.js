(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Riddle Tech")])],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},t._l(t.quests,(function(e){return n("v-list-item",{key:e.id,attrs:{link:""},on:{click:function(n){return t.selectQuest(e)}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),n("v-main",{staticClass:"dashboard"},[n("v-container",{attrs:{fluid:""}},[t.quest?n("div",[n("v-progress-linear",{attrs:{color:"success",striped:"",height:"20"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[n("strong",[t._v(t._s(Math.ceil(a))+"%")])]}}],null,!1,3002676263),model:{value:t.gameProgress,callback:function(e){t.gameProgress=e},expression:"gameProgress"}}),n("v-row",[n("v-col",{attrs:{cols:"10"}},[n("v-card",{staticClass:"d-flex justify-space-between align-center mb-4",staticStyle:{height:"44px"}},[n("v-card-title",{staticClass:"py-0"},[t._v(t._s(t.quest.title))]),n("v-card-title",[t.gameStarted?n("countdown",{attrs:{time:t.gameTime,transform:t.transformCountdown},on:{end:t.handleCountdownEnd,progress:t.handleCountdownProgress},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.minutes)+":"+t._s(e.seconds))]}}],null,!1,3510394480)}):t._e()],1)],1),n("v-expansion-panels",{staticClass:"room-set",attrs:{accordion:!0,multiple:!0},model:{value:t.roomSetPanel,callback:function(e){t.roomSetPanel=e},expression:"roomSetPanel"}},t._l(t.quest.roomSet,(function(e){return n("v-expansion-panel",{key:e.id},[n("v-expansion-panel-header",[t._v("Комната: "+t._s(e.title))]),n("v-expansion-panel-content",[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("div",[t._v("Загадки")])]),n("v-col",{attrs:{cols:"2"}},[n("div",[t._v("Пропуски")])]),n("v-col",{attrs:{cols:"2"}},[n("div",[t._v("Музыка")])]),n("v-col",{attrs:{cols:"3"}},[n("div",[t._v("Подсказки")])]),n("v-col",{attrs:{cols:"3"}},[n("div",[t._v("Сигналы")])])],1),t._l(e.riddleSet,(function(e){return n("v-row",{key:e.id},[n("v-col",{attrs:{cols:"2"}},[n("h4",[t._v(t._s(e.title))]),n("h5",[t._v("("+t._s(e.typeId.title)+")")])]),n("v-col",{attrs:{cols:"2"}},t._l(e.bypassSet,(function(e){return n("v-tooltip",{key:e.id,staticClass:"mb-5",class:{"green--text":e.state},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,r=a.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2 mr-2 indigo",class:{success:e.state},attrs:{small:"",dark:""},on:{click:function(n){return t.makeBypass(e)}}},"v-btn",r,!1),s),[n("v-icon",[t._v("mdi-arrow-right-circle-outline")])],1)]}}],null,!0)},[n("span",[t._v(t._s(e.title))])])})),1),n("v-col",{attrs:{cols:"2"}},[n("v-chip",{staticClass:"mr-2 mb-2",attrs:{small:"",color:"default"}},[t._v(" Музыка 1 ")])],1),n("v-col",{attrs:{cols:"3"}},t._l(e.hintSet,(function(e){return n("v-tooltip",{key:e.id,staticClass:"mb-5",class:{"green--text":e.state},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,r=a.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2 mr-2 indigo",class:{success:e.state},attrs:{small:"",outlined:"",dark:""},on:{click:function(n){return t.makeHint(e)}}},"v-btn",r,!1),s),[n("v-icon",[t._v("mdi-play")])],1)]}}],null,!0)},[n("span",[t._v(t._s(e.title))])])})),1),n("v-col",{attrs:{cols:"3"}},t._l(e.signalSet,(function(e){return n("v-chip",{key:e.id,staticClass:"mr-2 mb-2",class:{success:e.state},attrs:{small:"",color:"default"}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)}))],2)],1)})),1)],1),n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"mb-4"},[t.gameStarted?n("v-btn",{attrs:{large:"",block:"",color:"error"},on:{click:function(e){e.stopPropagation(),t.gameStopPopup=!0}}},[t._v(" stop game ")]):n("v-btn",{attrs:{large:"",block:"",color:"success"},on:{click:function(e){e.stopPropagation(),t.gameStartPopup=!0}}},[t._v(" start game ")])],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.gameStartPopup,callback:function(e){t.gameStartPopup=e},expression:"gameStartPopup"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Начать новую игру")]),n("v-card-text",[t._v(" Время игры и состояние датчиков будет сброшено ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(e){t.gameStartPopup=!1}}},[t._v(" Закрыть ")]),n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.startGame()}}},[t._v(" Start ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.gameStopPopup,callback:function(e){t.gameStopPopup=e},expression:"gameStopPopup"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Остановить игру")]),n("v-card-text",[t._v(" Время игры и состояние датчиков будет сброшено ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(e){t.gameStopPopup=!1}}},[t._v(" Закрыть ")]),n("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.stopGame()}}},[t._v(" Stop ")])],1)],1)],1),n("v-card",{staticClass:"mb-4"},[n("v-card-title",[t._v("General hints")]),n("v-card-text",[n("v-btn",{staticClass:"mb-2 justify-start",attrs:{outlined:"",block:"",color:"indigo"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-play")]),t._v(" No force ")],1),n("v-btn",{staticClass:"mb-2 justify-start",attrs:{outlined:"",block:"",color:"indigo"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-play")]),t._v(" Be careful ")],1),n("v-btn",{staticClass:"mb-2 justify-start",attrs:{outlined:"",block:"",color:"indigo"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-play")]),t._v(" No contact ")],1),n("v-btn",{staticClass:"mb-2 justify-start",attrs:{outlined:"",block:"",color:"indigo"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-play")]),t._v(" Stop ")],1),n("v-btn",{staticClass:"mb-2 justify-start",attrs:{outlined:"",block:"",color:"indigo"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-play")]),t._v(" Answer ")],1)],1)],1)],1)],1)],1):n("div",{staticClass:"text-center"},[n("v-alert",{attrs:{type:"warning"}},[t._v(" Выберите квест ")])],1)])],1),n("v-footer",{attrs:{color:"indigo"}},[n("span",{staticClass:"white--text"},[t._v("Kadroom © "+t._s((new Date).getFullYear()))])])],1)},r=[],o=(n("4160"),n("4fad"),n("159b"),n("96cf"),n("1da1")),i=n("3835"),c=n("8785"),l=n("9530"),u=n.n(l),d=n("c1df"),p=n.n(d);function f(){var t=Object(c["a"])(["mutation updateHint($id: String, $state: Boolean) {\n                    updateHint(id: $id, state: $state) {\n                      hint {\n                        id\n                        state\n                        title\n                      }\n                      ok\n                    }\n                  }"]);return f=function(){return t},t}function m(){var t=Object(c["a"])(["mutation updateBypass($id: String, $state: Boolean) {\n                    updateBypass(id: $id, state: $state) {\n                      bypass {\n                        id\n                        state\n                        title\n                      }\n                      ok\n                    }\n                  }"]);return m=function(){return t},t}function v(){var t=Object(c["a"])(["query questQuery($id: Int!) {\n                  quest(id: $id) {\n                    id,\n                    title,\n                    roomSet {\n                      id,\n                      title,\n                      riddleSet {\n                          id,\n                          title,\n                          state,\n                          typeId {\n                              id,\n                              title,\n                          },\n                          signalSet {\n                              id,\n                              title,\n                              state\n                          },\n                          hintSet {\n                              id,\n                              title,\n                              state\n                          },\n                          bypassSet {\n                              id,\n                              title,\n                              state\n                          }\n                      }\n                    }\n                  }\n              }"]);return v=function(){return t},t}function b(){var t=Object(c["a"])(["query {\n                  quests {\n                    id,\n                    title\n                  }\n              }"]);return b=function(){return t},t}var j={name:"App",components:{},data:function(){return{selectedQuestId:null,quests:null,quest:null,drawer:!1,gameStartPopup:!1,gameStopPopup:!1,gameProgress:0,gameStarted:!1,gameTime:6e3,roomSetPanel:[0,1,2,3,4,5]}},apollo:{quests:{query:u()(b())},quest:{query:u()(v()),variables:function(){return{id:this.selectedQuestId}},skip:function(){return!this.selectedQuestId},pollInterval:3e4}},created:function(){},methods:{selectQuest:function(t){this.drawer=!1,this.selectedQuestId=t.id},handleCountdownEnd:function(){this.gameProgress=100,this.gameStarted=!1},handleCountdownProgress:function(t){this.gameProgress=100-100/(this.gameTime/t.totalMilliseconds)},startGame:function(){this.drawer=!1,this.gameStartPopup=!1,this.gameProgress=0,this.gameStarted=!0},stopGame:function(){this.gameStopPopup=!1,this.gameProgress=0,this.gameStarted=!1},transformCountdown:function(t){return Object.entries(t).forEach((function(e){var n=Object(i["a"])(e,2),a=n[0],s=n[1],r=s<10?"0".concat(s):s;t[a]="".concat(r)})),t},makeBypass:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$apollo.mutate({mutation:u()(m()),variables:{id:t.id,state:!0}});case 2:case"end":return n.stop()}}),n)})))()},makeHint:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$apollo.mutate({mutation:u()(f()),variables:{id:t.id,state:!0}});case 2:case"end":return n.stop()}}),n)})))()}},props:{source:String}},g=j,h=(n("5c0b"),n("2877")),k=n("6544"),_=n.n(k),y=n("0798"),w=n("7496"),S=n("40dc"),x=n("5bc1"),P=n("8336"),C=n("b0af"),V=n("99d9"),O=n("cc20"),$=n("62ad"),q=n("a523"),z=n("169a"),T=n("cd55"),I=n("49e2"),D=n("c865"),E=n("0393"),A=n("553a"),R=n("132d"),B=n("8860"),L=n("da13"),M=n("1800"),N=n("5d23"),Q=n("f6c4"),H=n("f774"),G=n("8e36"),F=n("0fd9b"),J=n("2fa4"),U=n("2a7f"),X=n("3a2f"),K=Object(h["a"])(g,s,r,!1,null,null,null),W=K.exports;_()(K,{VAlert:y["a"],VApp:w["a"],VAppBar:S["a"],VAppBarNavIcon:x["a"],VBtn:P["a"],VCard:C["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:V["c"],VChip:O["a"],VCol:$["a"],VContainer:q["a"],VDialog:z["a"],VExpansionPanel:T["a"],VExpansionPanelContent:I["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:E["a"],VFooter:A["a"],VIcon:R["a"],VList:B["a"],VListItem:L["a"],VListItemAction:M["a"],VListItemContent:N["a"],VListItemTitle:N["b"],VMain:Q["a"],VNavigationDrawer:H["a"],VProgressLinear:G["a"],VRow:F["a"],VSpacer:J["a"],VToolbarTitle:U["a"],VTooltip:X["a"]});var Y=n("2f62");a["a"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),tt=(n("d3b7"),n("8c4f")),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),t._l(t.tasks,(function(e){return a("div",{key:e.id},[a("ul",[a("li",[a("input",{attrs:{type:"checkbox"},domProps:{checked:e.isDone},on:{input:function(n){return t.update_task(e)}}}),a("strong",[t._v(t._s(e.id)+"-"+t._s(e.name))]),t._v(":"),a("span",[t._v(t._s(e.description))])])])])})),a("div",[a("span",[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("span",[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),a("button",{on:{click:t.create_task}},[t._v("Add")])])],2)},nt=[];n("a4d3"),n("e01a");function at(){var t=Object(c["a"])(["mutation updateTask($id: String, $IsDone: Boolean) {\n  updateTask(id: $id, IsDone: $IsDone) {\n    task {\n      id\n      isDone\n      name\n      description\n    }\n    ok\n  }\n}"]);return at=function(){return t},t}function st(){var t=Object(c["a"])(["mutation createTask($name:String, $description: String) {\n      createTask(name: $name, description: $description) {\n        task {\n            id\n            isDone\n            name\n            description\n        }\n        ok\n    }\n }"]);return st=function(){return t},t}function rt(){var t=Object(c["a"])(["\n  query {\n    tasks {\n      id\n      isDone\n      name\n      description\n    }\n  }\n"]);return rt=function(){return t},t}var ot=u()(rt()),it=u()(st()),ct=u()(at()),lt={name:"Home",data:function(){return{tasks:"",name:"",description:""}},apollo:{tasks:ot},components:{},methods:{create_task:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.name,a=t.description,e.next=4,t.$apollo.mutate({mutation:it,variables:{name:n,description:a},update:function(t,e){var n=e.data.createTask,a=t.readQuery({query:ot});a.tasks.push(n.task),t.writeQuery({query:ot,data:a})}});case 4:s=e.sent,r=s.data.createTask.task,console.log("Added: ",r),t.name="",t.description="";case 9:case"end":return e.stop()}}),e)})))()},update_task:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$apollo.mutate({mutation:ct,variables:{id:t.id,IsDone:!t.isDone}});case 2:case"end":return n.stop()}}),n)})))()}}},ut=lt,dt=Object(h["a"])(ut,et,nt,!1,null,null,null),pt=dt.exports;a["a"].use(tt["a"]);var ft=[{path:"/",name:"Home",component:pt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],mt=new tt["a"]({mode:"history",routes:ft}),vt=mt,bt=n("74ca"),jt=n("478e"),gt=n("2bf2"),ht=n("522d"),
        kt=new jt["a"](
    {
        uri:"http://127.0.0.1:8000/graphql"
        // uri:"http://192.168.0.184/graphql"
    }), _t=new bt["a"]({link:kt,cache:new gt["a"], connectToDevTools:!0}),yt=new ht["a"]({defaultClient:_t});a["a"].use(ht["a"]); var wt=yt,St=n("f309");a["a"].use(St["a"]); var xt=new St["a"]({icons:{iconfont:"mdi"}}),Pt=n("407d"),Ct=n.n(Pt);window.axios=n("bc3a"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",p.a.locale("ru"),a["a"].prototype.moment=p.a,a["a"].component(Ct.a.name,Ct.a),a["a"].config.productionTip=!1,new a["a"]({store:Z,router:vt,apolloProvider:wt,vuetify:xt,render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("7694"),s=n.n(a);s.a},7694:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.js.map