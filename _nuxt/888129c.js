(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{380:function(e,t,r){var content=r(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("b1bed018",content,!0,{sourceMap:!1})},381:function(e,t,r){var n=r(17)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},426:function(e,t,r){"use strict";r(8),r(5),r(7),r(11),r(9),r(12);var n=r(2),o=(r(76),r(380),r(73)),c=r(10);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(1),f=Object(v.h)("v-breadcrumbs__divider","li"),h=r(30);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(c.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(m,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},513:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{items:[{text:"Praktikumstyp",disabled:!1,"exact-active":"active-link",to:"/students/neuerAntrag/praktikumsTyp"},{text:"Ausbildungsstelle",disabled:!1,"exact-active":"active-link",to:"/students/neuerAntrag/unternehmenInfo"},{text:"Betreuende Info",disabled:!0,"exact-active":"active-link",to:"/students/neuerAntrag/betreuendeInfo"},{text:"Praktikum Info",disabled:!0,"exact-active":"active-link",to:"/students/neuerAntrag/praktikumInfo"}]}},computed:{unternehmenName:{get:function(){return this.$store.state.newApplication.unternehmenName},set:function(e){this.$store.commit("newApplication/SET_UNTERNEHMEN_NAME",e)}},unternehmenPostleitzahl:{get:function(){return this.$store.state.newApplication.unternehmenPostleitzahl},set:function(e){this.$store.commit("newApplication/SET_UNTERNEHMEN_POSTLEITZAHL",e)}},unternehmenStrasse:{get:function(){return this.$store.state.newApplication.unternehmenStrasse},set:function(e){this.$store.commit("newApplication/SET_UNTERNEHMEN_STRASSE",e)}},unternehmenHausnummer:{get:function(){return this.$store.state.newApplication.unternehmenHausnummer},set:function(e){this.$store.commit("newApplication/SET_UNTERNEHMEN_HAUSNUMMER",e)}}}},o=r(79),c=r(109),l=r.n(c),d=r(426),m=r(186),v=r(365),f=r(364),h=r(498),_=r(363),y=r(162),x=r(499),O=r(360),w=r(389),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"d-flex justify-center text-h4"},[e._v("\n    Antrag auf Genehmigung der Ausbildungsstelle\n  ")]),e._v(" "),r("v-container",{staticClass:"d-flex justify-center"},[r("v-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])})],1),e._v(" "),r("div",{staticClass:"d-flex justify-center"},[r("v-card",{attrs:{width:"700px"}},[r("v-card-title",{staticClass:"justify-center text-h5",attrs:{"primary-title":""}},[e._v("\n        Information zur Ausbildungsstelle\n      ")]),e._v(" "),r("div",{staticStyle:{"margin-left":"5px","margin-right":"5px"}}),e._v(" "),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Name des Unternehmens","prepend-icon":"mdi-city",filled:""},model:{value:e.unternehmenName,callback:function(t){e.unternehmenName=t},expression:"unternehmenName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Postleitzahl","prepend-icon":"mdi-map-marker-outline",filled:""},model:{value:e.unternehmenPostleitzahl,callback:function(t){e.unternehmenPostleitzahl=t},expression:"unternehmenPostleitzahl"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-text-field",{attrs:{label:"Straße","prepend-icon":"mdi-road","auto-grow":"",filled:""},model:{value:e.unternehmenStrasse,callback:function(t){e.unternehmenStrasse=t},expression:"unternehmenStrasse"}})],1),e._v(" "),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{label:"H. Nr.","prepend-icon":"mdi-pound","auto-grow":"",filled:""},model:{value:e.unternehmenHausnummer,callback:function(t){e.unternehmenHausnummer=t},expression:"unternehmenHausnummer"}})],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"pa-3"},[r("v-row",[r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"info",to:"/students/neuerAntrag/praktikumsTyp"}},[r("v-icon",[e._v("mdi-arrow-left")]),e._v("\n              Zurück\n            ")],1)],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"info",to:"/students/neuerAntrag/betreuendeInfo"}},[e._v("\n              Weiter\n              "),r("v-icon",[e._v("mdi-arrow-right")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBreadcrumbs:d.a,VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardTitle:f.d,VCol:h.a,VContainer:_.a,VIcon:y.a,VRow:x.a,VSpacer:O.a,VTextField:w.a})}}]);