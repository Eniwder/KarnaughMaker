(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],f=0,h=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"14eb":function(t,e,n){"use strict";n("a847")},"199c":function(t,e,n){"use strict";(function(t){var a=n("3835"),r=n("1da1"),o=n("2909"),i=(n("96cf"),n("d3b7"),n("ddb0"),n("99af"),n("d81d"),n("fb6a"),n("4de4"),n("159b"),n("1276"),n("ac1f"),n("843c"),n("4d90"),n("25f0"),n("13d5"),n("c740"),n("a434"),n("6f45")),s=n("a61d"),c=n("3073"),u=n("21a6"),l=function(t){return Object(o["a"])(Array(t).keys())};Array.prototype.zip=function(){for(var t=this,e=[],n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];for(var i=function(n){e.push([t[n]].concat(Object(o["a"])(a.map((function(t){return t[n]})))))},s=0;s<this.length;s++)i(s);return e},e["a"]={name:"App",components:{MySheets:i["a"],CloseButton:c["a"],KarnaughCtrl:s["a"]},data:function(){return{projectName:"Project1",tab:0,tabs:[],optMenu:[{title:"ファイルへ保存",icon:"mdi-download",handlar:this.export}]}},computed:{activeTab:function(){return this.tabs[this.tab]},karnaughTable:function(){var t=this;return this.activeTab?l(this.activeTab.sheets.meta.outputNum).map((function(e){var n={},a=t.activeTab;return n.inputNum=a.sheets.meta.inputNum,n.headers=a.sheets.body[0].slice(0,n.inputNum),n.outName=a.sheets.body[0][n.inputNum+e],n.body=a.sheets.body.filter((function(t,e){return 0!==e})),n.key=n.outName+e,n.grp=a.sheets.grp[e],n.outIdx=e,n})):{}}},methods:{export:function(){var t={};this.tabs.forEach((function(t){t.modified=!1})),t.tabs=this.tabs,t.config={projectName:this.projectName};var e=new Blob([JSON.stringify(t)],{type:"application/json"});Object(u["saveAs"])(e,"".concat(this.projectName,".json"))},loadFile:function(e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,i,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var a=new FileReader;a.readAsText(e),a.onload=function(){return t(a.result)},a.onerror=function(t){return n(t)}})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=(e.target.files||e.dataTransfer.files)[0],a.prev=2,a.next=5,o(i);case 5:s=a.sent,c=JSON.parse(s),n.projectName=c.config.projectName,n.tabs=[],t.nextTick((function(){n.tabs=JSON.parse(JSON.stringify(c.tabs)),n.tabs.forEach((function(e,n){e.show=!1,t.nextTick((function(){return e.show=!0}))}))})),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](2),alert("ファイルを読み込めませんでした"),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[2,12]])})))()},grouped:function(t){this.activeTab.sheets.grp[t[0]]=t[1]},createTruthTable:function(t,e){var n={headers:[],body:[],grp:[],meta:{inputNum:t,outputNum:e}};return n.headers=[].concat(Object(o["a"])(l(t).map((function(t){return"入力".concat(t+1)}))),Object(o["a"])(l(e).map((function(t){return"出力".concat(t+1)})))),n.body=[[].concat(Object(o["a"])(l(t).map((function(t){return String.fromCharCode(65+t)}))),Object(o["a"])(l(e).map((function(t){return String.fromCharCode(88+t)}))))].concat(Object(o["a"])(l(Math.pow(2,t)).map((function(n){return n.toString(2).padStart(t,0).padEnd(t+e,1).split("")})))),n},addTab:function(){var e=this,n=this.tabs.reduce((function(t,e){return t>e?t:e.id}),-1)+1,a=this.tabs.length;this.tabs.push({id:n,show:!0,name:"work".concat(n+1),sheetHeight:"500px",sheets:this.createTruthTable(4,1),modified:!0}),t.nextTick((function(){e.tab=a}))},tabDelete:function(t){var e=this.tabs.findIndex((function(e){return e.id===t}));this.tabs.splice(e,1)},loadTable:function(e,n){var a=this,r=this.tabs.findIndex((function(t){return t.id===e}));this.tabs[r].sheets=n,this.tabs[r].show=!1,t.nextTick((function(){return a.tabs[r].show=!0})),this.$refs.karnaughTable[0].reset()},changeInOut:function(e,n,a){var r=this,o=this.tabs.findIndex((function(t){return t.id===e})),i=this.tabs[o].sheets.body.length,s=this.tabs[o].sheets.body[0].length,c=this.tabs[o].sheets.body.slice(),u=(this.tabs[o].sheets.meta.inputNum,this.tabs[o].sheets.meta.outputNum);"input"===n?this.tabs[o].sheets.meta.inputNum=a:this.tabs[o].sheets.meta.outputNum=a,this.tabs[o].sheets=this.createTruthTable(this.tabs[o].sheets.meta.inputNum,this.tabs[o].sheets.meta.outputNum);for(var f=0;f<this.tabs[o].sheets.meta.inputNum;f++)this.tabs[o].sheets.body[0][f]=c[0][f];if(u!==this.tabs[o].sheets.meta.outputNum)for(var h=this.tabs[o].sheets.meta.inputNum,d=function(t){l(i).forEach((function(e){r.tabs[o].sheets.body[e][t]=c[e][t]}))},b=h;b<s;b++)d(b);var p=["0px","0px","180px","280px","500px"];this.tabs[o].sheetHeight=p[this.tabs[o].sheets.meta.inputNum],this.tabs[o].show=!1,t.nextTick((function(){return r.tabs[o].show=!0})),u===this.tabs[o].sheets.meta.outputNum&&this.$refs.karnaughTable[this.tab].reset()},changeCell:function(t,e){if(e){var n=this.tabs.findIndex((function(e){return e.id===t})),r=Object(a["a"])(e,4),i=r[0],s=r[1],c=r[2],u=r[3],l=Object(o["a"])(this.tabs[n].sheets.body[i]);0===i&&s>=this.tabs[n].sheets.meta.inputNum?l[s]=u||c:l[s]=u&&u[0]||c,this.tabs[n].sheets.body.splice(i,1,l),this.tabs[n].modified=!0,this.$refs.karnaughTable[0].changeCell(e[1]-this.tabs[n].sheets.meta.inputNum)}},confirmSave:function(t){if(this.tabs.some((function(t){return t.modified})))return t.returnValue="編集を保存せずにページを離れようとしています。このまま移動しますか？","編集を保存せずにページを離れようとしています。このまま移動しますか？"}},watch:{},mounted:function(){this.addTab(),this.tabs.forEach((function(t){return t.modified=!1})),window.addEventListener("beforeunload",this.confirmSave)}}}).call(this,n("4362"))},3073:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),a),[n("div",{on:{click:function(e){return t.customOn(e)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-close")])],1)])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(" タブを消しても大丈夫ですか？ ")]),n("v-card-text",[t._v("編集したデータは失われます。")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 消さない ")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.$emit("confirmDelete")}}},[t._v(" 消す ")])],1)],1)],1)],1)},r=[],o={props:{tab:Object},data:function(){return{dialog:!1}},methods:{customOn:function(t){this.tab.modified||(this.$emit("confirmDelete"),t.stopPropagation())}}},i=o,s=n("2877"),c=n("6544"),u=n.n(c),l=n("8336"),f=n("b0af"),h=n("99d9"),d=n("169a"),b=n("132d"),p=n("0fd9"),m=n("2fa4"),v=Object(s["a"])(i,a,r,!1,null,null,null);e["a"]=v.exports;u()(v,{VBtn:l["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:d["a"],VIcon:b["a"],VRow:p["a"],VSpacer:m["a"]})},"3fae":function(t,e,n){"use strict";(function(t){var a=n("53ca"),r=n("2909"),o=(n("d3b7"),n("ddb0"),n("a9e3"),n("159b"),n("99af"),n("d81d"),n("3c78")),i=function(t){return Object(r["a"])(Array(t).keys())};e["a"]={props:{tableData:{meta:{inputNum:Number,outputNum:Number},headers:[],body:[]}},computed:{},data:function(){var t=this.tableData.meta.inputNum+this.tableData.meta.outputNum,e=this;return{hotSettings:{data:Object,colHeaders:Array,afterChange:function(t){t&&"object"===Object(a["a"])(t)&&t.forEach((function(t){e.$emit("changeCell",t)}))},height:"100%",rowHeights:24,cell:[].concat(Object(r["a"])(i(t).map((function(t){return{row:0,col:t,readOnly:!1,className:"htCenter"}}))),Object(r["a"])(i(Math.pow(2,this.tableData.meta.inputNum)*t).map((function(e){return{row:parseInt(e/t)+1,col:e%t,className:"htCenter"}})))),customBorders:[{range:{from:{row:0,col:0},to:{row:0,col:t}},bottom:{width:3,color:"lightgray"}},{range:{from:{row:0,col:this.tableData.meta.inputNum-1},to:{row:Math.pow(2,this.tableData.meta.inputNum),col:this.tableData.meta.inputNum-1}},right:{width:3,color:"lightgray"}},{row:0,col:this.tableData.meta.inputNum,left:{width:3,color:"lightgray"}}]}}},components:{HotTable:o["b"],HotColumn:o["a"]},methods:{changeCell:function(t){console.log(t)}},mounted:function(){var e=this,n=this.$refs.hotTable.$el.querySelectorAll("th");t.nextTick((function(){n[2*e.tableData.meta.inputNum+e.tableData.meta.outputNum]&&(n[2*e.tableData.meta.inputNum+e.tableData.meta.outputNum].style.borderLeft="2px solid lightgray")}))},watch:{}}}).call(this,n("4362"))},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[[n("v-card",{staticClass:"grey lighten-5",attrs:{flat:""}},[n("v-toolbar",{attrs:{color:"indigo",dark:"",flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":"","center-active":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"yellow"}}),t._l(t.tabs,(function(e){return n("v-tab",{key:e.id,attrs:{"data-id":e.id}},[t._v(" "+t._s(e.name)+" "),n("close-button",{attrs:{tab:e},on:{confirmDelete:function(n){return t.tabDelete(e.id)}}})],1)})),n("v-btn",{attrs:{icon:""},on:{click:t.addTab}},[n("v-icon",[t._v("mdi-plus")])],1)],2)]},proxy:!0}])},[n("v-menu",{staticClass:"optMenu",attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",dark:""}},"v-btn",r,!1),a),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",[t._l(t.optMenu,(function(e,a){return n("v-list-item",{key:a},[n("v-icon",[t._v(t._s(e.icon))]),n("v-list-item-title",{on:{click:e.handlar}},[t._v(t._s(e.title)+" ")])],1)})),n("v-list-item",[n("label",{staticClass:"import"},[n("v-list-item-title",[n("v-icon",[t._v("mdi-upload")]),n("input",{attrs:{type:"file",accept:"application/json"},on:{change:function(e){return t.loadFile(e)}}}),t._v("ファイルを読み込み ")],1)],1)])],2)],1),n("v-toolbar-title",[n("v-text-field",{model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1),n("v-spacer"),n("a",{staticStyle:{color:"transparent"},attrs:{href:"https://github.com/Eniwder/KarnaughMaker",target:"_blank"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-github")])],1)],1)],1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e){return n("v-tab-item",{key:e.id},[n("v-container",{staticClass:"grey lighten-5 margin-initial"},[n("v-row",[n("v-col",{staticClass:"d-flex",attrs:{cols:"2"}},[n("v-text-field",{staticClass:"shrink",model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"tab.name"}})],1),n("v-col",{staticClass:"d-flex inout",attrs:{cols:"2"}},[n("v-select",{attrs:{items:[2,3,4],value:e.sheets.meta.inputNum,label:"Inputs",outlined:""},on:{change:function(n){return t.changeInOut(e.id,"input",n)}}})],1),n("v-col",{staticClass:"d-flex inout",attrs:{cols:"2"}},[n("v-select",{attrs:{items:[1,2,3],value:e.sheets.meta.outputNum,label:"Outputs",outlined:""},on:{change:function(n){return t.changeInOut(e.id,"output",n)}}})],1)],1),n("v-row",[n("v-col",{staticClass:"sheets",style:{height:e.sheetHeight},attrs:{cols:"12",sm:"6"}},[n("transition",{attrs:{name:"toggle-fade"}},[e.show?n("MySheets",{attrs:{tableData:e.sheets},on:{changeCell:function(n){return t.changeCell(e.id,n)}}}):t._e()],1)],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("KarnaughCtrl",{ref:"karnaughTable",refInFor:!0,attrs:{tables:t.karnaughTable},on:{grouped:function(e){return t.grouped(e)}}})],1)],1)],1)],1)})),1)],1)]],2)},o=[],i=n("199c"),s=i["a"],c=(n("034f"),n("2877")),u=n("6544"),l=n.n(u),f=n("7496"),h=n("8336"),d=n("b0af"),b=n("62ad"),p=n("a523"),m=n("132d"),v=n("8860"),g=n("da13"),y=n("5d23"),j=n("e449"),w=n("0fd9"),k=n("b974"),x=n("2fa4"),_=n("71a3"),I=n("c671"),N=n("fe57"),T=n("aac8"),O=n("9a96"),S=n("8654"),z=n("71d9"),H=n("2a7f"),C=Object(c["a"])(s,r,o,!1,null,null,null),D=C.exports;l()(C,{VApp:f["a"],VBtn:h["a"],VCard:d["a"],VCol:b["a"],VContainer:p["a"],VIcon:m["a"],VList:v["a"],VListItem:g["a"],VListItemTitle:y["b"],VMenu:j["a"],VRow:w["a"],VSelect:k["a"],VSpacer:x["a"],VTab:_["a"],VTabItem:I["a"],VTabs:N["a"],VTabsItems:T["a"],VTabsSlider:O["a"],VTextField:S["a"],VToolbar:z["a"],VToolbarTitle:H["a"]});var V=n("f309");a["a"].use(V["a"]);var $=new V["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:$,render:function(t){return t(D)}}).$mount("#app")},"6f45":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hot-table",{ref:"hotTable",attrs:{settings:t.hotSettings,licenseKey:"non-commercial-and-evaluation",data:t.tableData.body}},t._l(t.tableData.headers,(function(e,a){return n("hot-column",{key:e,attrs:{title:e,"read-only":a<t.tableData.meta.inputNum}})})),1)},r=[],o=n("3fae"),i=o["a"],s=(n("14eb"),n("969f"),n("2877")),c=Object(s["a"])(i,a,r,!1,null,null,null);e["a"]=c.exports},"85ec":function(t,e,n){},"90d5":function(t,e,n){"use strict";n("ed35")},9566:function(t,e,n){"use strict";n("ceb1")},a61d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{tabindex:"0"},on:{keydown:function(e){return t.keydown(e)}}},[n("v-card",{staticClass:"karnaughCtrl"},[n("v-tabs",{attrs:{"background-color":"indigo lighten-3",color:"white"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[n("v-tabs-slider",{attrs:{color:"indigo lighten-1"}}),t._l(t.tabItems,(function(e){return n("v-tab",{key:e.key},[t._v(t._s(e.name))])})),t._l(t.tables,(function(e){return n("v-tab-item",{key:e.key,ref:"tabItem",refInFor:!0,attrs:{eager:""}},[n("Karnaugh",{attrs:{tableData:e},on:{msg:function(e){return t.updateMsg(e)},grouped:function(e){return t.grouped(e)}}})],1)}))],2),n("v-row",{staticClass:"msg",attrs:{align:"center"}},[n("v-text-field",{attrs:{placeholder:t.msg,filled:"",disabled:""}})],1),n("v-row",{staticClass:"controlButton",attrs:{align:"center"}},[n("v-btn",{attrs:{elevation:"2",color:"indigo lighten-4"},on:{click:t.grouping}},[t._v("囲む/解除[E]")]),n("v-btn",{attrs:{elevation:"2",color:"indigo lighten-4"},on:{click:t.deselection}},[t._v("選択解除[D]")]),n("v-btn",{attrs:{elevation:"2",color:"indigo lighten-4"},on:{click:function(e){return t.reset(null)}}},[t._v("リセット[R]")])],1),n("v-row",{staticClass:"controlButton",attrs:{align:"center"}},[n("v-btn",{attrs:{elevation:"2",color:"indigo lighten-4"},on:{click:t.autoGrouping}},[t._v("自動で囲む")]),n("v-btn",{attrs:{elevation:"2",color:"indigo lighten-4"},on:{click:t.save}},[t._v("図を保存")])],1)],1)],1)},r=[],o=(n("d81d"),n("b0c0"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"karnaugh"},[n("svg",{ref:"svgRoot",attrs:{viewbox:"0 0 300 300",width:t.width+2*t.offset,height:t.height+2*t.offset},on:{click:function(e){return t.select(e)}}},[n("line",{attrs:{x1:t.left,y1:t.top,x2:t.right,y2:t.top,stroke:"black","stroke-width":"2"}}),n("line",{attrs:{x1:t.left,y1:t.top,x2:t.left,y2:t.bottom,stroke:"black","stroke-width":"2"}}),n("line",{attrs:{x1:t.left,y1:t.bottom,x2:t.right,y2:t.bottom,stroke:"black","stroke-width":"2"}}),n("line",{attrs:{x1:t.right,y1:t.top,x2:t.right,y2:t.bottom,stroke:"black","stroke-width":"2"}}),t._l(2*t.colIn,(function(e){return n("line",{key:"col"+e,attrs:{x1:e*t.colW+t.left,y1:t.top,x2:e*t.colW+t.left,y2:t.bottom,stroke:"black"}})})),t._l(2*t.rowIn,(function(e){return n("line",{key:"row"+e,attrs:{x1:t.left,y1:e*t.rowH+t.top,x2:t.right,y2:e*t.rowH+t.top,stroke:"black"}})})),n("line",{attrs:{x1:t.left,y1:t.top,x2:t.left+t.colW,y2:t.top+t.rowH,stroke:"black"}}),t._l(t.colHeaderLabel,(function(e){return n("text",{key:e.key,attrs:{x:e.x,y:e.y,"font-size":t.fontLabelSize,"font-family":t.fontInFam,"text-anchor":"middle","dominant-baseline":"central"}},[t._v(" "+t._s(e.v)+" ")])})),t._l(t.colHeader,(function(e){return n("text",{key:e.key,attrs:{x:e.x,y:e.y,"font-size":t.fontInSize,"font-family":t.fontInFam,"text-anchor":"middle","dominant-baseline":"central"}},[t._v(" "+t._s(e.v)+" ")])})),t._l(t.rowHeaderLabel,(function(e){return n("text",{key:e.key,attrs:{x:e.x,y:e.y,"font-size":t.fontLabelSize,"font-family":t.fontInFam,"text-anchor":"middle","dominant-baseline":"central"}},[t._v(" "+t._s(e.v)+" ")])})),t._l(t.rowHeader,(function(e){return n("text",{key:e.key,attrs:{x:e.x,y:e.y,"font-size":t.fontInSize,"font-family":t.fontInFam,"text-anchor":"middle","dominant-baseline":"central"}},[t._v(" "+t._s(e.v)+" ")])})),t._l(t.tableBody,(function(e){return n("text",{key:e.key,attrs:{x:e.x,y:e.y,"font-size":t.fontBodySize,"font-family":t.fontBodyFam,"text-anchor":"middle","dominant-baseline":"central",fill:t.colors[parseInt(e.x/t.colW)-1][parseInt(e.y/t.rowH)-1]}},[t._v(" "+t._s(e.v)+" ")])})),t._l(t.arcs,(function(e){return n("path",{key:e.key,attrs:{d:t._f("svgArc")(e),fill:"none",stroke:"black"}})})),t._l(t.bezs,(function(e){return n("path",{key:e.key,attrs:{d:t._f("svgBez")(e),fill:"none",stroke:"black"}})})),t._l(t.ellipses,(function(e){return n("ellipse",t._b({key:e.key,attrs:{fill:"none",stroke:"black"}},"ellipse",e,!1))})),t._l(t.rects,(function(e){return n("rect",t._b({key:e.key,attrs:{fill:"none",stroke:"black"}},"rect",e,!1))}))],2),n("v-row",{staticClass:"fomulas",attrs:{align:"center"}},[n("div",{attrs:{id:"fomula"},domProps:{innerHTML:t._s(t.mathjax)}}),n("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:""},on:{click:t.copy4word}},[n("v-icon",[t._v("mdi-file-word-outline")])],1)],1)],1)}),i=[],s=n("b85c"),c=n("3835"),u=n("2909"),l=(n("d3b7"),n("ddb0"),n("a9e3"),n("4d90"),n("25f0"),n("0481"),n("13d5"),n("fb6a"),n("a15b"),n("1276"),n("ac1f"),n("cb29"),n("159b"),n("4de4"),n("6062"),n("3ca3"),n("a434"),n("caad"),n("2532"),n("a630"),function(t){return Object(u["a"])(Array(t).keys())}),f={props:{tableData:{inputNum:Number,headers:[],outName:String,outIdx:Number,grp:[],body:[]}},data:function(){return{offset:8,fontInFam:"Meiryo",fontLabelSize:16,fontInSize:24,fontBodyFam:"Arial",fontBodySize:24,selects_:[],group_:[]}},filters:{svgArc:function(t){return t?"M".concat(t.x1," ").concat(t.y1," A").concat(t.rx," ").concat(t.ry," ").concat(t.katamuki," ").concat(t.f1," ").concat(t.f2," ").concat(t.x2," ").concat(t.y2):""},svgBez:function(t){return t?"M".concat(t.x1," ").concat(t.y1," Q").concat(t.cx," ").concat(t.cy," ").concat(t.x2," ").concat(t.y2):""}},computed:{width:function(){return 180*this.colIn},height:function(){return 180*this.rowIn},colHeaderLabel:function(){var t=this;return l(this.colIn).map((function(e){return{v:t.tableData.headers[e],key:"chl".concat(e),x:t.left+t.colW/4*e+t.colW/1.8+t.colW/6*(t.colIn%2),y:t.top+t.rowH/4}}))},colHeader:function(){var t=this;return l(2*this.colIn).map((function(e){return{v:(e^e>>1).toString(2).padStart(t.colIn,"0"),key:"ch".concat(e),x:t.left+t.colW*e+t.colW+t.colW/2,y:t.top+t.rowH/2}}))},rowHeaderLabel:function(){var t=this;return l(this.rowIn).map((function(e){return{v:t.tableData.headers[e+t.colIn],key:"rhl".concat(e),x:t.left+t.colW/4*e+t.colW/4-parseInt(t.rowIn/2)*t.colW/16,y:t.top+t.rowH-t.rowH/4}}))},rowHeader:function(){var t=this;return l(2*this.rowIn).map((function(e){return{v:(e^e>>1).toString(2).padStart(t.rowIn,"0"),key:"rh".concat(e),x:t.left+t.colW/2,y:t.top+t.rowH*e+t.rowH+t.rowH/2}}))},tableBody:function(){var t=this;this.colHeader.map((function(t){return t.v})),this.rowHeader.map((function(t){return t.v}));return this.colHeader.map((function(e){return t.rowHeader.map((function(n){return{key:"tb".concat(e.v).concat(n.v),v:t.tableMap[e.v+n.v],x:e.x,y:n.y}}))})).flat()},tableMap:function(){var t=this;return this.tableData.body.reduce((function(e,n){var a=[n.slice(0,t.tableData.inputNum),n[t.tableData.inputNum+t.tableData.outIdx]],r=a[0],o=a[1];return e[r.join("")]=o,e}),{})},colW:function(){return this.width/(1+2*this.colIn)},rowH:function(){return this.height/(1+2*this.rowIn)},colIn:function(){return parseInt(this.tableData.inputNum/2)},rowIn:function(){return this.tableData.inputNum-parseInt(this.tableData.inputNum/2)},left:function(){return this.offset},top:function(){return this.offset},right:function(){return this.offset+this.width},bottom:function(){return this.offset+this.height},selects:function(){return this.selects_.map((function(t){return t.split(",").map((function(t){return parseInt(t)-1}))}))},group:function(){return this.group_.map((function(t){return t.split("@").sort().map((function(t){return t.split(",").map((function(t){return parseInt(t)-1}))}))}))},groupStr:function(){var t=[this.colHeader,this.rowHeader],e=t[0],n=t[1];return this.group.map((function(t){return t.map((function(t){var a=Object(c["a"])(t,2),r=a[0],o=a[1],i=e[r].v+n[o].v;return i}))}))},colors:function(){var t=this,e=l(2*(this.tableData.inputNum-parseInt(this.tableData.inputNum/2))).map((function(e){return l(2*parseInt(t.tableData.inputNum/2)).fill("black")}));return this.selects.forEach((function(t){var n=Object(c["a"])(t,2),a=n[0],r=n[1];a>=0&&r>=0&&(e[a][r]="crimson")})),e},arcs:function(){return this.circles.filter((function(t){return"arc"===t.type}))},ellipses:function(){return this.circles.filter((function(t){return"ellipse"===t.type}))},rects:function(){return this.circles.filter((function(t){return"rect"===t.type}))},bezs:function(){return this.circles.filter((function(t){return"bez"===t.type}))},circles:function(){var t=this,e=[],n=function(n,a,r,o,i,s,u){var l=n===r?[t.colW/2.4,0]:[-4,2],f=Object(c["a"])(l,2),h=f[0],d=f[1],b=a==o?[t.rowH/2.4,0]:[-4,2],p=Object(c["a"])(b,2),m=p[0],v=p[1];e.push({type:"arc",x1:t.left+(n+1)*t.colW+d,y1:t.top+(a+1)*t.rowH+v,rx:i/2*t.colW+h,ry:s/2*t.rowH+m,katamuki:0,f1:1,f2:"r"===u?1:0,x2:t.left+(r+1)*t.colW-d,y2:t.top+(o+1)*t.rowH-v,key:"arc"+n+a+r+o})},a=function(n,a,r,o,i,s,c,u,l,f){e.push({type:"bez",x1:t.left+(n+1)*t.colW+c,y1:t.top+(a+1)*t.rowH+l,cx:t.left+(r+1)*t.colW,cy:t.top+(o+1)*t.rowH,x2:t.left+(i+1)*t.colW+u,y2:t.top+(s+1)*t.rowH+f,key:"arc2"+n+a+i+s})},r=function(n,a,r,o){e.push({type:"ellipse",cx:t.left+(n+1)*t.colW+r/2*t.colW,cy:t.top+(a+1)*t.rowH+o/2*t.rowH,rx:r*t.colW/2-2,ry:o*t.rowH/2-2,key:"ellipse"+n+a+r+o})},o=function(n,a,r,o){e.push({type:"rect",x:t.left+(n+1)*t.colW+8,y:t.top+(a+1)*t.rowH+8,width:r*t.colW-16,height:o*t.rowH-16,rx:16,ry:16,key:"rect"+n+a+r+o})};return Set.prototype.min=function(){return Math.min.apply(Math,Object(u["a"])(this.values()))},Set.prototype.max=function(){return Math.max.apply(Math,Object(u["a"])(this.values()))},this.group.forEach((function(e){var i=new Set(e.map((function(t){return t[0]}))),s=new Set(e.map((function(t){return t[1]}))),c=[i.max(),i.min(),s.max(),s.min()],u=c[0],l=c[1],f=c[2],h=c[3];2===i.size&&u-l>1&&2===s.size&&f-h>1?(a(l+1,h,l+1,h+1,l,h+1,-4,0,0,-4),a(u,h,u,h+1,u+1,h+1,4,0,0,-4),a(l,f,l+1,f,l+1,f+1,0,-4,4,0),a(u+1,f,u,f,u,f+1,0,4,4,0)):2==i.size&&u-l>1?(n(l,h,l,f+1,1,f-h+1,"r"),n(u+1,h,u+1,f+1,1,f-h+1,"l")):2==s.size&&f-h>1?(n(l,h,u+1,h,u-l+1,1,"l"),n(l,f+1,u+1,f+1,u-l+1,1,"r")):i.size==2*t.colIn&&s.size==2*t.rowIn?o(l,h,u-l+1,f-h+1):r(l,h,u-l+1,f-h+1)})),e},terms:function(){var t=this,e=this.group.map((function(e){return e.map((function(e){var n=Object(c["a"])(e,2),a=n[0],r=n[1],o=t.colHeader[a].v+t.rowHeader[r].v;return o}))}));return e.map((function(t){return t.reduce((function(e,n){return e|parseInt(t[0],2)^parseInt(n,2)}),0)})).map((function(e){return e.toString(2).padStart(t.colIn+t.rowIn,"0")})).map((function(n,a){return n.split("").map((function(n,r){return"0"===n?{input:t.tableData.headers[r],sign:e[a][0][r]}:null})).filter((function(t){return t}))}))},mathjax:function(){this.$nextTick((function(){MathJax&&MathJax.Hub&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,"editor-output"])}));var t=0===this.terms.length?"0":1===this.terms.length&&0===this.terms[0].length?"1":this.terms.map((function(t){return 0===t.length?"1":t.map((function(t){return"1"===t.sign?t.input:"\\overline{".concat(t.input,"}")})).join(" \\cdot ")})).join("+");return"$$".concat(this.tableData.outName," = ").concat(t,"$$")},wordStr:function(){return this.tableData.outName+" = "+(0===this.terms.length?"0":1===this.terms.length&&0===this.terms[0].length?"1":this.terms.map((function(t){var e="";0===t.length&&(e="1");for(var n=0;n<t.length;n++){var a=0===n?"":" \\cdot ",r="1"===t[n].sign?"":"\\bar ";t[n].sign,e+=a+r+t[n].input}return e})).join(" + "))}},components:{},methods:{import:function(t){},export:function(){return{grp:this.group_}},copy4word:function(){navigator.clipboard.writeText(this.wordStr),this.$emit("msg","Word用に数式をLaTeXでコピーしました。")},select:function(t){var e=this,n=function(t,n){return[parseInt(t/e.colW),parseInt(n/e.rowH)]},a=this.$refs.svgRoot.getBoundingClientRect(),r=[a.x,a.y].map((function(t){return parseInt(t)})),o=Object(c["a"])(r,2),i=o[0],s=o[1],u=n(t.clientX-i-this.left,t.clientY-s-this.top);if(!(u[0]<1||2*this.colIn<u[0]||u[1]<1||2*this.rowIn<u[1])){var l=u.join(","),f=this.selects_.indexOf(l);f>=0?this.selects_.splice(f,1):this.selects_.push(l)}},isNeighbor:function(t,e){for(var n="x"===e?0:1,a=2*("x"===e?this.colIn:this.rowIn)-1,r=t.map((function(t){return t[n]})).sort((function(t,e){return t-e})),o=!0,i=0;i<r.length-1;i++){var s=r[i+1]-r[i],c=r[i]-r[i+1]%a;o=o&&(1===s||0===c)}return o},isAllNeighbor:function(t){var e=this,n=function(t){return function(e,n){return e[n[t]]=e[n[t]]||[],e[n[t]].push(n),e}},a=function(e){return function(n){return n.map((function(n){return n.map((function(n){return t.filter((function(t){return t[e]===n[e]})).length})).reduce((function(t,e){return t+parseInt(e)}),0)}))}},r=[t.reduce(n(0),[])].flat(),o=[t.reduce(n(1),[])].flat(),i=a(1)(r).flat(),s=a(0)(o).flat(),c=!0;return c=r.reduce((function(t,n){return t&&e.isNeighbor(n,"y")}),c),c=o.reduce((function(t,n){return t&&e.isNeighbor(n,"x")}),c),c=c&&i.every((function(e){return t.length===e})),c=c&&s.every((function(e){return t.length===e})),c},grouping:function(){var t=this,e=this.selects.map((function(e){var n=Object(c["a"])(e,2),a=n[0],r=n[1],o=t.colHeader[a].v+t.rowHeader[r].v;return o})),n=e.map((function(e){return t.tableMap[e]}));if(n.includes("0"))this.$emit("msg","0を含んで囲むことはできません。");else{var a=n.length;if(0!==a)if(0===(a&a-1))if(this.isAllNeighbor(this.selects)){var r=this.selects_.sort().join("@"),o=this.group_.indexOf(r);o>=0?(this.group_.splice(o,1),this.$emit("msg","囲みを解除しました。")):(this.group_.push(r),this.$emit("msg","囲みました。")),this.deselection()}else this.$emit("msg","隣接したセルを選びましょう。");else this.$emit("msg","囲む数は2のべき乗にしましょう。");else this.$emit("msg","1つ以上選択してから囲みましょう。")}},deselection:function(){this.selects_=[]},combination:function(t,e){var n=[];if(t.length<e)return[];if(1===e)for(var a=0;a<t.length;a++)n[a]=[t[a]];else for(var r=0;r<t.length-e+1;r++)for(var o=this.combination(t.slice(r+1),e-1),i=0;i<o.length;i++)n.push([t[r]].concat(o[i]));return n},autoGrouping:function(){var t=this,e=l(2*this.colIn).map((function(e){return l(2*t.rowIn).map((function(t){return[e,t]}))})).flat(),n=function(e){return t.colHeader[e[0]].v+t.rowHeader[e[1]].v},a=e.map((function(t){return n(t)})),r=2*this.colIn*this.rowIn*2,o=function e(n){return 1===n?t.combination(a,n):t.combination(a,n).concat(e(n/2))},i=o(r),c=i.filter((function(e){return!e.some((function(e){return t.tableMap[e].includes("0")}))&&e.some((function(e){return t.tableMap[e].includes("1")}))})),u=function(t,e,n){return t[e.v]=n,t},f=this.colHeader.reduce(u,{}),h=this.rowHeader.reduce(u,{}),d=c.map((function(e){return e.map((function(e){var n=[e.slice(0,t.colIn),e.slice(t.colIn)],a=n[0],r=n[1];return[f[a],h[r]]}))}));console.log(f,h);var b=d.filter((function(e){return t.isAllNeighbor(e)})),p=function(t,e){var n,a=Object(s["a"])(e);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(!t.has(r))return!1}}catch(o){a.e(o)}finally{a.f()}return t.size!==e.size};function m(t,e){var n,a=new Set(t),r=Object(s["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;a.add(o)}}catch(i){r.e(i)}finally{r.f()}return a}function v(t,e){if(t.size!==e.size)return!1;var n,a=Object(s["a"])(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(!e.has(r))return!1}}catch(o){a.e(o)}finally{a.f()}return!0}var g=function(e){return Array.from(e).filter((function(e){return"1"===t.tableMap[n(e.split(","))]}))},y=b.map((function(t){return new Set(t.map((function(t){return t.join(",")})))})).filter((function(t,e,n){return!n.some((function(e){return p(e,t)}))})).filter((function(t,e,n){return!n.some((function(e){return e.size>=t.size&&p(new Set(g(e)),new Set(g(t)))}))})),j=a.filter((function(e){return t.tableMap[e].includes("1")})).map((function(e){var n=[e.slice(0,t.colIn),e.slice(t.colIn)],a=n[0],r=n[1];return[f[a],h[r]].join(",")})),w=new Set(j),k=function(e){var n=function(t){return t.filter((function(t){var e=t.reduce((function(t,e){return m(t,e)}));return v(e,w)||p(e,w)}))},a=function a(r){if(r>=e.length)return n(t.combination(e,r));var o=n(t.combination(e,r));return o.length>0?o:a(r+1)};return a(1)},x=k(y);x.sort((function(t,e){var n=t.length-e.length,a=t.reduce((function(t,e){return t+e.size}),0)-e.reduce((function(t,e){return t+e.size}),0);return 0!==n?n:a})),x[0]?this.group_=x[0].map((function(t){return Array.from(t).map((function(t){return t.split(",").map((function(t){return parseInt(t)+1})).join(",")})).sort().join("@")})):this.group_=[]},reset:function(){this.deselection(),this.group_=[]},save:function(){var t=this,e=this.$refs.svgRoot,n=document.createElement("canvas");n.width=e.width.baseVal.value,n.height=e.height.baseVal.value;var a=n.getContext("2d"),r=new Image;r.onload=function(){a.drawImage(r,0,0,r.width,r.height);var e=document.createElement("a");e.href=n.toDataURL(),e.download="".concat(t.tableData.outName,".png"),e.click()},r.onerror=function(t){console.log(t)};var o=(new XMLSerializer).serializeToString(e);r.src="data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(o)))}},mounted:function(){console.log("mounted"+this.tableData.outName),this.group_=this.tableData.grp||[]},watch:{group_:function(){this.$emit("grouped",[this.tableData.outIdx,this.group_])}}},h=f,d=(n("9566"),n("2877")),b=n("6544"),p=n.n(b),m=n("8336"),v=n("132d"),g=n("0fd9"),y=Object(d["a"])(h,o,i,!1,null,"994b7336",null),j=y.exports;p()(y,{VBtn:m["a"],VIcon:v["a"],VRow:g["a"]});var w={components:{Karnaugh:j},data:function(){return{msg:"まずは真理値表を編集。0,1以外はドントケア扱い。",changed:[],selectedTab:0,mathjax:""}},props:{tables:{}},methods:{import:function(t){},export:function(){return this.tables.modified=!1,this.$refs.tabItem.map((function(t){return t.$children[0].export()}))},keydown:function(t){var e=t.code;"KeyE"===e||"NumpadEnter"===e||"Enter"===e||"Space"===e?this.grouping():"KeyD"===e||"Delete"===e?this.deselection():"KeyR"===e&&this.reset()},grouping:function(){this.activeKarnaugh.grouping(),this.changed[this.selectedTab]=!0},deselection:function(){this.activeKarnaugh.deselection()},autoGrouping:function(){this.reset(),this.activeKarnaugh.autoGrouping(),this.msg="囲みました。自分でも確認してね。"},save:function(){this.activeKarnaugh.save(),this.msg="画像をダウンロードしました。"},reset:function(t){var e;t=null!==(e=t)&&void 0!==e?e:this.selectedTab,this.$refs.tabItem[t]&&this.$refs.tabItem[t].$children[0].reset(),t>=0&&t<this.$refs.tabItem.length&&(this.msg="タブ[".concat(this.tabItems[t].name,"]の内容をリセットしました。"))},updateMsg:function(t){this.msg=t},grouped:function(t){this.$emit("grouped",t)},changeCell:function(t){this.reset(t),this.changed[t]||(this.msg="カルノー図の「1」をクリックして「囲む」を選択。")}},computed:{tabItems:function(){return this.tables.map?this.tables.map((function(t,e){return{name:t.outName,key:"tb".concat(t.outName).concat(e)}})):{}},activeKarnaugh:function(){return this.$refs.tabItem[this.selectedTab].$children[0]}},mounted:function(){this.selectedTab=0}},k=w,x=(n("90d5"),n("b0af")),_=n("71a3"),I=n("c671"),N=n("fe57"),T=n("9a96"),O=n("8654"),S=Object(d["a"])(k,a,r,!1,null,"25f3eb4f",null);e["a"]=S.exports;p()(S,{VBtn:m["a"],VCard:x["a"],VRow:g["a"],VTab:_["a"],VTabItem:I["a"],VTabs:N["a"],VTabsSlider:T["a"],VTextField:O["a"]})},a847:function(t,e,n){},ceb1:function(t,e,n){},ed35:function(t,e,n){}});
//# sourceMappingURL=app.0f64673a.js.map