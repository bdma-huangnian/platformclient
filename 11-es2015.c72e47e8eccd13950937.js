(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Hhcf:function(n,l,t){"use strict";t.r(l);var e=t("LY6o");class u{}var i=t("pMnS"),o=t("MKJQ"),a=t("ysn3"),r=t("2jpv"),c=t("pwXF"),b=t("0bhh"),s=t("vcNA"),p=t("b16g"),d=t("l0Bj"),g=t("/WN3"),h=t("3JjO"),m=t("PmuI"),f=t("WceA"),x=t("sq4S"),C=t("CX4n"),v=t("DCY/"),M=t("YXrE"),k=t("LoWC"),_=t("kGhL"),q=t("KAEX");class B{constructor(n,l,t,e,u,i,o,a,r){this.alertController=n,this.request=l,this.authentication=t,this.loadingController=e,this.menuController=u,this.formatDate=i,this.topComponent=o,this.accessControl=a,this.active=r,this.hideHeader=!1,this.today=this.formatDate.formatDate(new Date,"YYYY-MM-DD hh-mm"),this.disabled=!1,this.staticField={name:null,phone:null,area:null},this.field=[],this.currentUpload={index:null,type:null}}ngOnInit(){}ionViewDidEnter(){return g.__awaiter(this,void 0,void 0,(function*(){this.active.data.pipe(Object(k.a)(1)).subscribe(n=>{if(this.hideHeader=n.hideHeader,this.hideHeader){const n=this.accessControl.canLoad.pipe(Object(_.a)(n=>n.component===B)).subscribe(({canLoad:l})=>{console.log(l),l?(this.init(),n.unsubscribe()):console.log("\u62d2\u7edd\u52a0\u8f7d")})}else this.init()})}))}init(){return g.__awaiter(this,void 0,void 0,(function*(){this.authentication.getToken.pipe(Object(k.a)(1)).subscribe(n=>g.__awaiter(this,void 0,void 0,(function*(){if(!n)return void this.loginAction();const l=yield this.loadingController.create();l.present(),this.request.get(v.b.getReportField).pipe(Object(_.a)(n=>(l.dismiss(),1!==n.status&&this.alert(n.info),1===n.status)),Object(q.a)(n=>n.data),Object(k.a)(1)).subscribe(n=>{this.id=n.id,this.field=n.field||[]})})))}))}uploadFileClick(n,l){this.input.nativeElement.click(),this.currentUpload={index:n,type:l}}dateOnChange(n,l,t){let e;"YYYY-MM-DD HH:mm"===t?e="YYYY-MM-DD hh-mm":"HH:mm"===t?e="hh:mm":"YYYY-MM-DD"===t&&(e="YYYY-MM-DD"),this.field[n].content=this.formatDate.formatDate(l.detail.value,e)}save(){return g.__awaiter(this,void 0,void 0,(function*(){if(!this.staticField.name)return void this.alert("\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d");if(!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.staticField.phone))return void this.alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801");if(!this.staticField.area)return void this.alert("\u8bf7\u9009\u62e9\u60a8\u7684\u6240\u5728\u5730\u533a");const n={};for(const l of this.field){const t="1"===l.required;if(t&&"checkbox"===l.type&&(!l.content||0===l.content.length))return void this.alert(l.title+"\u81f3\u5c11\u9009\u62e9\u4e00\u9879");if(t&&"radio"===l.type&&!l.content)return void this.alert("\u8bf7\u9009\u62e9"+l.title);if(t&&["text","textarea"].includes(l.type)&&!l.content)return void this.alert("\u8bf7\u8f93\u5165"+l.title);if(t&&"single_picture"===l.type&&!l.content)return void this.alert("\u8bf7\u4e0a\u4f20"+l.title);if(t&&"multiple_picture"===l.type&&(!l.content||0===l.content.length))return void this.alert("\u8bf7\u4e0a\u4f20"+l.title);if(["date","time","datetime"].includes(l.type)&&!l.content&&(l.content=this.today),n[l.title]=l.content||"",["single_picture","multiple_picture"].includes(l.type)&&l.content){const t=Array.isArray(l.content)?l.content:[l.content];n[l.title]=t.map(n=>n.id).join(",")}}this.request.post(v.b.saveReportField,{id:this.id,data:JSON.stringify(n),name:this.staticField.name,phone:this.staticField.phone,area:this.staticField.area}).subscribe(n=>{this.alert(n.info),this.disabled=1===n.status})}))}areaChange(n){this.staticField.area=n.join(""),this.menuController.close("area")}loginAction(){this.topComponent.load(M.a).then(n=>{n.present()})}uploadFile(n){return g.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"\u4e0a\u4f20\u4e2d..."});l.present();const t=new FileReader;t.readAsDataURL(n.target.files[0]);const e=this.field[this.currentUpload.index];t.onload=t=>{const u={url:t.target.result,progress:"0%"};"single"===this.currentUpload.type?e.content=u:"multiple"===this.currentUpload.type&&(e.content=Array.isArray(e.content)?e.content:[],e.content[e.content.length]=u),this.request.post(v.b.uploadFile,{file:n.target.files[0]},{reportProgress:!0,observe:"events"}).subscribe(n=>{if(n instanceof h.h){l.present();const t=1===n.body.status?{id:n.body.id,url:n.body.url,progress:"100%"}:null;if(1!==n.body.status&&this.alert(n.body.info),"single"===this.currentUpload.type)e.content=t;else if("multiple"===this.currentUpload.type){if(!t)return void e.content.splice(e.content.length-1,1);e.content[e.content.length-1].id=t&&t.id,e.content[e.content.length-1].url=t&&t.url,e.content[e.content.length-1].progress="100%"}this.input.nativeElement.value=""}else 1===n.type&&("single"===this.currentUpload.type?e.content.progress=n.loaded/n.total+"%":"multiple"===this.currentUpload.type&&(e.content[e.content.length-1].progress=n.loaded/n.total+"%"))})}}))}alert(n){return new Promise(l=>{this.alertController.create({header:n,buttons:[{text:"\u786e\u8ba4",role:"cancel"}]}).then(n=>{n.present(),n.onWillDismiss().then(()=>{l()})})})}}var O=e.ob({encapsulation:0,styles:[['ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--detail-icon-font-size:0;--min-height:55px;--padding-start:12px;--padding-end:10px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.label[_ngcontent-%COMP%]{width:100px;padding-left:12px;margin:10px 8px 10px 0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:not(.label){flex:1;width:unset;max-width:unset;margin:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.required[_ngcontent-%COMP%]   ion-label.label[_ngcontent-%COMP%]::before{content:"* ";color:var(--ion-color-danger);position:absolute;left:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-end:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{--padding-top:12px;--padding-bottom:12px;--min-height:30px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:13px;margin:0;padding-left:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:16px;color:#333;display:block;padding-bottom:3px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#333;font-size:14px;line-height:22px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{max-width:unset;width:100%}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{--padding-top:0;--padding-start:12px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .files_item[_ngcontent-%COMP%]   div.files[_ngcontent-%COMP%]{margin-top:15px;position:relative;white-space:normal;font-size:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .files_item[_ngcontent-%COMP%]   div.files[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;display:inline-block;width:calc(50% - 10px);height:25vw;overflow:hidden;margin-bottom:10px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .files_item[_ngcontent-%COMP%]   div.files[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(odd){margin-right:10px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .files_item[_ngcontent-%COMP%]   div.files[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .files_item[_ngcontent-%COMP%]   div.files[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div.mask[_ngcontent-%COMP%]{position:absolute;right:0;top:0;bottom:0;background:rgba(255,255,255,.5);transition:left .3s}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .files_item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:15px;height:30px;display:block;width:25%;max-width:200px;margin-top:15px}ion-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:#fff}ion-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0 5px}input[type=file][_ngcontent-%COMP%]{position:fixed;opacity:0;visibility:hidden;z-index:-1}']],data:{}});function P(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,4,"ion-buttons",[["slot","start"]],null,null,null,o.cb,o.f)),e.pb(1,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.qb(2,0,null,0,2,"ion-back-button",[["defaultHref","/home/index"],["text","\u8fd4\u56de"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Bb(n,4).onClick(t)&&u),u}),o.Z,o.c)),e.pb(3,49152,null,0,a.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.pb(4,16384,null,0,a.h,[[2,a.fb],a.Fb,a.d],{defaultHref:[0,"defaultHref"]},null)],(function(n,l){n(l,3,0,"/home/index","\u8fd4\u56de"),n(l,4,0,"/home/index")}),null)}function y(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,o.Pb,o.S)),e.pb(1,49152,null,0,a.ub,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Jb(-1,0,["\u8bf7\u9009\u62e9\u5730\u533a"]))],(function(n,l){n(l,1,0,"medium")}),null)}function w(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-text",[["color","dark"]],null,null,null,o.Pb,o.S)),e.pb(1,49152,null,0,a.ub,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Jb(2,0,["",""]))],(function(n,l){n(l,1,0,"dark")}),(function(n,l){n(l,2,0,l.component.staticField.area)}))}function I(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,8,"ion-item",[["class","description"],["lines","full"]],null,null,null,o.vb,o.w)),e.pb(1,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.qb(2,0,null,0,6,"ion-label",[["color","medium"]],null,null,null,o.wb,o.z)),e.pb(3,49152,null,0,a.N,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(4,0,null,0,2,"ion-text",[],null,null,null,o.Pb,o.S)),e.pb(5,49152,null,0,a.ub,[e.h,e.k,e.x],null,null),(n()(),e.Jb(6,0,["",""])),(n()(),e.qb(7,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Jb(8,null,["",""]))],(function(n,l){n(l,1,0,"full"),n(l,3,0,"medium")}),(function(n,l){n(l,6,0,l.parent.context.$implicit.title),n(l,8,0,l.parent.context.$implicit.value)}))}function $(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,18,"ion-item",[["button",""]],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{ngClass:[0,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"]},null),(n()(),e.qb(5,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(7,0,["",""])),(n()(),e.qb(8,0,null,0,10,"ion-label",[],null,null,null,o.wb,o.z)),e.pb(9,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.qb(10,0,null,0,8,"ion-input",[["align","right"],["maxlength","18"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Bb(n,13)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,13)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(n.parent.context.$implicit.content=t)&&u),u}),o.sb,o.v)),e.pb(11,540672,null,0,c.c,[],{maxlength:[0,"maxlength"]},null),e.Gb(1024,null,c.d,(function(n){return[n]}),[c.c]),e.pb(13,4341760,null,0,a.Mb,[e.p,e.k],null,null),e.Gb(1024,null,c.e,(function(n){return[n]}),[a.Mb]),e.pb(15,671744,null,0,c.j,[[8,null],[6,c.d],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.j]),e.pb(17,16384,null,0,c.g,[[4,c.f]],null,null),e.pb(18,49152,null,0,a.G,[e.h,e.k,e.x],{maxlength:[0,"maxlength"],placeholder:[1,"placeholder"]},null)],(function(n,l){var t=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,t),n(l,4,0,""),n(l,11,0,"18"),n(l,15,0,l.parent.context.$implicit.content),n(l,18,0,"18","\u8bf7\u8f93\u5165"+l.parent.context.$implicit.title)}),(function(n,l){n(l,7,0,l.parent.context.$implicit.title),n(l,10,0,e.Bb(l,11).maxlength?e.Bb(l,11).maxlength:null,e.Bb(l,17).ngClassUntouched,e.Bb(l,17).ngClassTouched,e.Bb(l,17).ngClassPristine,e.Bb(l,17).ngClassDirty,e.Bb(l,17).ngClassValid,e.Bb(l,17).ngClassInvalid,e.Bb(l,17).ngClassPending)}))}function J(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,15,"ion-item",[["button",""],["class","textarea"]],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"]},null),(n()(),e.qb(5,0,null,0,10,"div",[],null,null,null,null,null)),(n()(),e.qb(6,0,null,null,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(7,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(8,0,[" "," "])),(n()(),e.qb(9,0,null,null,6,"ion-textarea",[["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Bb(n,10)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,10)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(n.parent.context.$implicit.content=t)&&u),u}),o.Qb,o.T)),e.pb(10,4341760,null,0,a.Mb,[e.p,e.k],null,null),e.Gb(1024,null,c.e,(function(n){return[n]}),[a.Mb]),e.pb(12,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.j]),e.pb(14,16384,null,0,c.g,[[4,c.f]],null,null),e.pb(15,49152,null,0,a.vb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null)],(function(n,l){var t=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,"textarea",t),n(l,4,0,""),n(l,12,0,l.parent.context.$implicit.content),n(l,15,0,"\u8bf7\u8f93\u5165"+l.parent.context.$implicit.title,"3")}),(function(n,l){n(l,8,0,l.parent.context.$implicit.title),n(l,9,0,e.Bb(l,14).ngClassUntouched,e.Bb(l,14).ngClassTouched,e.Bb(l,14).ngClassPristine,e.Bb(l,14).ngClassDirty,e.Bb(l,14).ngClassValid,e.Bb(l,14).ngClassInvalid,e.Bb(l,14).ngClassPending)}))}function j(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.Ib,o.M)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.Jb(2,0,[" "," "]))],(function(n,l){n(l,1,0,l.context.$implicit)}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function Y(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,16,"ion-item",[["button",""]],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{ngClass:[0,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"]},null),(n()(),e.qb(5,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(7,0,["",""])),(n()(),e.qb(8,0,null,0,8,"ion-select",[["cancelText","\u53d6\u6d88"],["interface","popover"],["okText","\u786e\u8ba4"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Bb(n,9)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,9)._handleChangeEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(n.parent.context.$implicit.content=t)&&u),u}),o.Jb,o.L)),e.pb(9,4341760,null,0,a.Lb,[e.p,e.k],null,null),e.Gb(1024,null,c.e,(function(n){return[n]}),[a.Lb]),e.pb(11,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.j]),e.pb(13,16384,null,0,c.g,[[4,c.f]],null,null),e.pb(14,49152,null,0,a.kb,[e.h,e.k,e.x],{cancelText:[0,"cancelText"],interface:[1,"interface"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),e.fb(16777216,null,0,1,null,j)),e.pb(16,278528,null,0,r.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,t),n(l,4,0,""),n(l,11,0,l.parent.context.$implicit.content),n(l,14,0,"\u53d6\u6d88","popover","\u786e\u8ba4","\u8bf7\u9009\u62e9"+l.parent.context.$implicit.title),n(l,16,0,l.parent.context.$implicit.option)}),(function(n,l){n(l,7,0,l.parent.context.$implicit.title),n(l,8,0,e.Bb(l,13).ngClassUntouched,e.Bb(l,13).ngClassTouched,e.Bb(l,13).ngClassPristine,e.Bb(l,13).ngClassDirty,e.Bb(l,13).ngClassValid,e.Bb(l,13).ngClassInvalid,e.Bb(l,13).ngClassPending)}))}function F(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.Ib,o.M)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.Jb(2,0,[" "," "]))],(function(n,l){n(l,1,0,l.context.$implicit)}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function z(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,16,"ion-item",[["button",""],["class","checkbox"]],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"]},null),(n()(),e.qb(5,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(7,0,["",""])),(n()(),e.qb(8,0,null,0,8,"ion-select",[["cancelText","\u53d6\u6d88"],["multiple",""],["okText","\u786e\u8ba4"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Bb(n,9)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,9)._handleChangeEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(n.parent.context.$implicit.content=t)&&u),u}),o.Jb,o.L)),e.pb(9,4341760,null,0,a.Lb,[e.p,e.k],null,null),e.Gb(1024,null,c.e,(function(n){return[n]}),[a.Lb]),e.pb(11,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.j]),e.pb(13,16384,null,0,c.g,[[4,c.f]],null,null),e.pb(14,49152,null,0,a.kb,[e.h,e.k,e.x],{cancelText:[0,"cancelText"],multiple:[1,"multiple"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),e.fb(16777216,null,0,1,null,F)),e.pb(16,278528,null,0,r.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,"checkbox",t),n(l,4,0,""),n(l,11,0,l.parent.context.$implicit.content),n(l,14,0,"\u53d6\u6d88","","\u786e\u8ba4","\u8bf7\u9009\u62e9"+l.parent.context.$implicit.title),n(l,16,0,l.parent.context.$implicit.option)}),(function(n,l){n(l,7,0,l.parent.context.$implicit.title),n(l,8,0,e.Bb(l,13).ngClassUntouched,e.Bb(l,13).ngClassTouched,e.Bb(l,13).ngClassPristine,e.Bb(l,13).ngClassDirty,e.Bb(l,13).ngClassValid,e.Bb(l,13).ngClassInvalid,e.Bb(l,13).ngClassPending)}))}function H(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,11,"ion-item",[],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{ngClass:[0,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(5,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u65e5\u671f"])),(n()(),e.qb(8,0,null,0,3,"ion-datetime",[["cancelText","\u53d6\u6d88"],["displayFormat","YYYY-MM-DD"],["doneText","\u786e\u8ba4"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==e.Bb(n,11)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,11)._handleChangeEvent(t.target)&&u),"ionChange"===l&&(u=!1!==i.dateOnChange(n.parent.context.index,t,"YYYY-MM-DD")&&u),u}),o.jb,o.m)),e.Gb(5120,null,c.e,(function(n){return[n]}),[a.Lb]),e.pb(10,49152,null,0,a.v,[e.h,e.k,e.x],{cancelText:[0,"cancelText"],displayFormat:[1,"displayFormat"],doneText:[2,"doneText"],value:[3,"value"]},null),e.pb(11,4341760,null,0,a.Lb,[e.p,e.k],null,null)],(function(n,l){var t=l.component,e=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,e),n(l,10,0,"\u53d6\u6d88","YYYY-MM-DD","\u786e\u8ba4",t.today)}),null)}function L(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,11,"ion-item",[],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{ngClass:[0,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(5,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u65f6\u95f4"])),(n()(),e.qb(8,0,null,0,3,"ion-datetime",[["cancelText","\u53d6\u6d88"],["displayFormat","HH:mm"],["doneText","\u786e\u8ba4"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==e.Bb(n,11)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,11)._handleChangeEvent(t.target)&&u),"ionChange"===l&&(u=!1!==i.dateOnChange(n.parent.context.index,t,"HH:mm")&&u),u}),o.jb,o.m)),e.Gb(5120,null,c.e,(function(n){return[n]}),[a.Lb]),e.pb(10,49152,null,0,a.v,[e.h,e.k,e.x],{cancelText:[0,"cancelText"],displayFormat:[1,"displayFormat"],doneText:[2,"doneText"],value:[3,"value"]},null),e.pb(11,4341760,null,0,a.Lb,[e.p,e.k],null,null)],(function(n,l){var t=l.component,e=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,e),n(l,10,0,"\u53d6\u6d88","HH:mm","\u786e\u8ba4",t.today)}),null)}function D(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,11,"ion-item",[],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{ngClass:[0,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(5,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u65e5\u671f\u65f6\u95f4"])),(n()(),e.qb(8,0,null,0,3,"ion-datetime",[["cancelText","\u53d6\u6d88"],["displayFormat","YYYY-MM-DD HH:mm"],["doneText","\u786e\u8ba4"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==e.Bb(n,11)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,11)._handleChangeEvent(t.target)&&u),"ionChange"===l&&(u=!1!==i.dateOnChange(n.parent.context.index,t,"YYYY-MM-DD HH:mm")&&u),u}),o.jb,o.m)),e.Gb(5120,null,c.e,(function(n){return[n]}),[a.Lb]),e.pb(10,49152,null,0,a.v,[e.h,e.k,e.x],{cancelText:[0,"cancelText"],displayFormat:[1,"displayFormat"],doneText:[2,"doneText"],value:[3,"value"]},null),e.pb(11,4341760,null,0,a.Lb,[e.p,e.k],null,null)],(function(n,l){var t=l.component,e=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,e),n(l,10,0,"\u53d6\u6d88","YYYY-MM-DD HH:mm","\u786e\u8ba4",t.today)}),null)}function T(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,6,"div",[["class","files"]],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.qb(2,0,null,null,0,"img",[["height","85"]],[[8,"src",4]],null,null,null,null)),(n()(),e.qb(3,0,null,null,3,"div",[["class","mask"]],null,null,null,null,null)),e.Gb(512,null,r.t,r.u,[e.k,e.r,e.B]),e.pb(5,278528,null,0,r.m,[r.t],{ngStyle:[0,"ngStyle"]},null),e.Eb(6,{left:0})],(function(n,l){var t=n(l,6,0,l.parent.parent.context.$implicit.content.progress);n(l,5,0,t)}),(function(n,l){n(l,2,0,l.parent.parent.context.$implicit.content.url)}))}function E(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-text",[],null,null,null,o.Pb,o.S)),e.pb(1,49152,null,0,a.ub,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u4e0a\u4f20"]))],null,null)}function G(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-text",[],null,null,null,o.Pb,o.S)),e.pb(1,49152,null,0,a.ub,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u91cd\u4f20"]))],null,null)}function N(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,15,"ion-item",[["class","files_item"],["lines","none"]],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.qb(5,0,null,0,10,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(7,0,[""," "])),(n()(),e.fb(16777216,null,0,1,null,T)),e.pb(9,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(10,0,null,0,5,"ion-button",[["class","ion-no-margin"],["color","primary"],["fill","outline"],["mode","ios"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.uploadFileClick(n.parent.context.index,"single")&&e),e}),o.bb,o.e)),e.pb(11,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"]},null),(n()(),e.fb(16777216,null,0,1,null,E)),e.pb(13,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,0,1,null,G)),e.pb(15,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,"files_item",t),n(l,4,0,"none"),n(l,9,0,l.parent.context.$implicit.content),n(l,11,0,"primary","outline","ios"),n(l,13,0,!l.parent.context.$implicit.content),n(l,15,0,l.parent.context.$implicit.content)}),(function(n,l){n(l,7,0,l.parent.context.$implicit.title)}))}function U(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,0,"img",[["height","85"]],[[8,"src",4]],null,null,null,null)),(n()(),e.qb(2,0,null,null,3,"div",[["class","mask"]],null,null,null,null,null)),e.Gb(512,null,r.t,r.u,[e.k,e.r,e.B]),e.pb(4,278528,null,0,r.m,[r.t],{ngStyle:[0,"ngStyle"]},null),e.Eb(5,{left:0})],(function(n,l){var t=n(l,5,0,l.context.$implicit.progress);n(l,4,0,t)}),(function(n,l){n(l,1,0,l.context.$implicit.url)}))}function S(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"div",[["class","files"]],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,U)),e.pb(2,278528,null,0,r.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.parent.parent.context.$implicit.content)}),null)}function A(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,14,"ion-item",[["class","files_item"],["lines","none"]],null,null,null,o.vb,o.w)),e.Gb(512,null,r.r,r.s,[e.q,e.r,e.k,e.B]),e.pb(2,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(3,{required:0}),e.pb(4,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.qb(5,0,null,0,9,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(6,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(7,0,[""," "])),(n()(),e.fb(16777216,null,0,1,null,S)),e.pb(9,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(10,0,null,0,4,"ion-button",[["class","ion-no-margin"],["color","primary"],["fill","outline"],["mode","ios"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.uploadFileClick(n.parent.context.index,"multiple")&&e),e}),o.bb,o.e)),e.pb(11,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"]},null),(n()(),e.qb(12,0,null,0,2,"ion-text",[],null,null,null,o.Pb,o.S)),e.pb(13,49152,null,0,a.ub,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u4e0a\u4f20"]))],(function(n,l){var t=n(l,3,0,"1"===l.parent.context.$implicit.required);n(l,2,0,"files_item",t),n(l,4,0,"none"),n(l,9,0,l.parent.context.$implicit.content),n(l,11,0,"primary","outline","ios")}),(function(n,l){n(l,7,0,l.parent.context.$implicit.title)}))}function V(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,20,"div",[],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,I)),e.pb(2,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,$)),e.pb(4,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,J)),e.pb(6,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,Y)),e.pb(8,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,z)),e.pb(10,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,H)),e.pb(12,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,L)),e.pb(14,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,D)),e.pb(16,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,N)),e.pb(18,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,A)),e.pb(20,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,"description"===l.context.$implicit.type),n(l,4,0,"text"===l.context.$implicit.type),n(l,6,0,"textarea"===l.context.$implicit.type),n(l,8,0,"radio"===l.context.$implicit.type),n(l,10,0,"checkbox"===l.context.$implicit.type),n(l,12,0,"date"===l.context.$implicit.type),n(l,14,0,"time"===l.context.$implicit.type),n(l,16,0,"datetime"===l.context.$implicit.type),n(l,18,0,"single_picture"===l.context.$implicit.type),n(l,20,0,"multiple_picture"===l.context.$implicit.type)}),null)}function R(n){return e.Lb(0,[e.Hb(402653184,1,{input:0}),(n()(),e.qb(1,0,null,null,8,"ion-header",[["mode","ios"]],null,null,null,o.nb,o.q)),e.pb(2,49152,null,0,a.B,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.qb(3,0,null,0,6,"ion-toolbar",[["mode","ios"]],null,null,null,o.Tb,o.W)),e.pb(4,49152,null,0,a.zb,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.fb(16777216,null,0,1,null,P)),e.pb(6,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(7,0,null,0,2,"ion-title",[],null,null,null,o.Sb,o.V)),e.pb(8,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u62a5\u5907\u8868\u5355"])),(n()(),e.qb(10,0,null,null,47,"ion-content",[],null,null,null,o.ib,o.l)),e.pb(11,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.qb(12,0,null,0,45,"ion-list",[["class","ion-no-padding"]],null,null,null,o.yb,o.A)),e.pb(13,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(n()(),e.qb(14,0,null,0,15,"ion-item",[["button",""],["class","required"]],null,null,null,o.vb,o.w)),e.pb(15,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"]},null),(n()(),e.qb(16,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(17,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u59d3\u540d"])),(n()(),e.qb(19,0,null,0,10,"ion-label",[],null,null,null,o.wb,o.z)),e.pb(20,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.qb(21,0,null,0,8,"ion-input",[["align","right"],["maxlength","6"],["placeholder","\u8bf7\u8f93\u5165\u59d3\u540d"],["type","text"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==e.Bb(n,24)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,24)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(i.staticField.name=t)&&u),u}),o.sb,o.v)),e.pb(22,540672,null,0,c.c,[],{maxlength:[0,"maxlength"]},null),e.Gb(1024,null,c.d,(function(n){return[n]}),[c.c]),e.pb(24,4341760,null,0,a.Mb,[e.p,e.k],null,null),e.Gb(1024,null,c.e,(function(n){return[n]}),[a.Mb]),e.pb(26,671744,null,0,c.j,[[8,null],[6,c.d],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.j]),e.pb(28,16384,null,0,c.g,[[4,c.f]],null,null),e.pb(29,49152,null,0,a.G,[e.h,e.k,e.x],{maxlength:[0,"maxlength"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),e.qb(30,0,null,0,16,"ion-item",[["button",""],["class","required"]],null,null,null,o.vb,o.w)),e.pb(31,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"]},null),(n()(),e.qb(32,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(33,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u624b\u673a\u53f7"])),(n()(),e.qb(35,0,null,0,11,"ion-label",[],null,null,null,o.wb,o.z)),e.pb(36,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.qb(37,0,null,0,9,"ion-input",[["align","right"],["maxlength","11"],["pattern","[0-9]"],["placeholder","\u8bf7\u8f93\u5165\u624b\u673a\u53f7"],["type","tel"]],[[1,"maxlength",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==e.Bb(n,41)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Bb(n,41)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(i.staticField.phone=t)&&u),u}),o.sb,o.v)),e.pb(38,540672,null,0,c.c,[],{maxlength:[0,"maxlength"]},null),e.pb(39,540672,null,0,c.k,[],{pattern:[0,"pattern"]},null),e.Gb(1024,null,c.d,(function(n,l){return[n,l]}),[c.c,c.k]),e.pb(41,4341760,null,0,a.Mb,[e.p,e.k],null,null),e.Gb(1024,null,c.e,(function(n){return[n]}),[a.Mb]),e.pb(43,671744,null,0,c.j,[[8,null],[6,c.d],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.j]),e.pb(45,16384,null,0,c.g,[[4,c.f]],null,null),e.pb(46,49152,null,0,a.G,[e.h,e.k,e.x],{maxlength:[0,"maxlength"],pattern:[1,"pattern"],placeholder:[2,"placeholder"],type:[3,"type"]},null),(n()(),e.qb(47,0,null,0,8,"ion-item",[["button",""],["class","required"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.menuController.open("area")&&e),e}),o.vb,o.w)),e.pb(48,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"]},null),(n()(),e.qb(49,0,null,0,2,"ion-label",[["class","label"]],null,null,null,o.wb,o.z)),e.pb(50,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["\u5730\u533a"])),(n()(),e.fb(16777216,null,0,1,null,y)),e.pb(53,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,0,1,null,w)),e.pb(55,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,0,1,null,V)),e.pb(57,278528,null,0,r.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(58,0,null,null,5,"ion-footer",[],null,null,null,o.mb,o.p)),e.pb(59,49152,null,0,a.z,[e.h,e.k,e.x],null,null),(n()(),e.qb(60,0,null,0,3,"div",[],null,null,null,null,null)),(n()(),e.qb(61,0,null,null,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.save()&&e),e}),o.bb,o.e)),e.pb(62,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),e.Jb(63,0,[" "," "])),(n()(),e.qb(64,0,null,null,3,"ion-menu",[["contentId","area"],["menuId","area"],["side","end"]],null,null,null,o.zb,o.C)),e.pb(65,49152,null,0,a.Q,[e.h,e.k,e.x],{contentId:[0,"contentId"],menuId:[1,"menuId"],side:[2,"side"]},null),(n()(),e.qb(66,0,null,0,1,"app-area-tree",[],null,[[null,"outer"]],(function(n,l,t){var e=!0;return"outer"===l&&(e=!1!==n.component.areaChange(t)&&e),e}),b.b,b.a)),e.pb(67,114688,null,0,s.a,[p.a,a.a],null,{outer:"outer"}),(n()(),e.qb(68,16777216,null,null,1,"ion-router-outlet",[["id","area"]],null,null,null,null,null)),e.pb(69,212992,null,0,a.fb,[d.b,e.M,e.j,[8,null],[8,null],a.d,a.Fb,r.f,e.k,d.n,e.x,d.a,[3,a.fb]],null,null),(n()(),e.qb(70,0,[[1,0],["input",1]],null,0,"input",[["accept","image/*"],["name","input"],["type","file"]],null,[[null,"change"]],(function(n,l,t){var e=!0;return"change"===l&&(e=!1!==n.component.uploadFile(t)&&e),e}),null,null))],(function(n,l){var t=l.component;n(l,2,0,"ios"),n(l,4,0,"ios"),n(l,6,0,!t.hideHeader),n(l,15,0,""),n(l,22,0,"6"),n(l,26,0,t.staticField.name),n(l,29,0,"6","\u8bf7\u8f93\u5165\u59d3\u540d","text"),n(l,31,0,""),n(l,38,0,"11"),n(l,39,0,"[0-9]"),n(l,43,0,t.staticField.phone),n(l,46,0,"11","[0-9]","\u8bf7\u8f93\u5165\u624b\u673a\u53f7","tel"),n(l,48,0,""),n(l,53,0,!t.staticField.area),n(l,55,0,t.staticField.area),n(l,57,0,t.field),n(l,62,0,"primary",t.disabled,"block"),n(l,65,0,"area","area","end"),n(l,67,0),n(l,69,0)}),(function(n,l){var t=l.component;n(l,21,0,e.Bb(l,22).maxlength?e.Bb(l,22).maxlength:null,e.Bb(l,28).ngClassUntouched,e.Bb(l,28).ngClassTouched,e.Bb(l,28).ngClassPristine,e.Bb(l,28).ngClassDirty,e.Bb(l,28).ngClassValid,e.Bb(l,28).ngClassInvalid,e.Bb(l,28).ngClassPending),n(l,37,0,e.Bb(l,38).maxlength?e.Bb(l,38).maxlength:null,e.Bb(l,39).pattern?e.Bb(l,39).pattern:null,e.Bb(l,45).ngClassUntouched,e.Bb(l,45).ngClassTouched,e.Bb(l,45).ngClassPristine,e.Bb(l,45).ngClassDirty,e.Bb(l,45).ngClassValid,e.Bb(l,45).ngClassInvalid,e.Bb(l,45).ngClassPending),n(l,63,0,t.disabled?"\u5df2\u63d0\u4ea4":"\u4fdd\u5b58")}))}function W(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,1,"app-report-field",[],null,null,null,R,O)),e.pb(1,114688,null,0,B,[a.a,p.a,C.a,a.Cb,a.Db,m.a,f.a,x.a,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var X=e.mb("app-report-field",B,W,{},{},[]),Q=t("oxV5"),K=t("ADsi"),Z=t("iTUp"),nn=t("+6pz");t.d(l,"ReportFieldModuleNgFactory",(function(){return ln}));var ln=e.nb(u,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,X]],[3,e.j],e.v]),e.zb(4608,r.l,r.k,[e.s,[2,r.w]]),e.zb(4608,c.m,c.m,[]),e.zb(4608,a.b,a.b,[e.x,e.g]),e.zb(4608,a.Eb,a.Eb,[a.b,e.j,e.p]),e.zb(4608,a.Ib,a.Ib,[a.b,e.j,e.p]),e.zb(4608,Q.a,Q.a,[]),e.zb(1073742336,r.b,r.b,[]),e.zb(1073742336,c.l,c.l,[]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,a.Bb,a.Bb,[]),e.zb(1073742336,d.r,d.r,[[2,d.w],[2,d.n]]),e.zb(1073742336,K.a,K.a,[]),e.zb(1073742336,Z.a,Z.a,[]),e.zb(1073742336,nn.a,nn.a,[]),e.zb(1073742336,u,u,[]),e.zb(1024,d.l,(function(){return[[{path:"",component:B}]]}),[])])}))}}]);