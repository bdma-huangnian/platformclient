(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{PpkS:function(n,l,t){"use strict";t.r(l);var o=t("LY6o");class e{}var u=t("pMnS"),i=t("MKJQ"),c=t("ysn3"),b=t("l0Bj"),a=t("2jpv"),r=t("0z0x"),s=t("wzCt"),g=t("TW7f"),p=t("b16g"),d=t("DCY/"),_=t("kGhL"),x=t("KAEX"),P=t("LoWC");class C{constructor(n){this.request=n}getCouponDetail(n){return new Promise((l,t)=>{this.request.get(d.b.getCouponDetail,{id:n}).pipe(Object(_.a)(n=>(1!==n.status&&t(n.msg),1===n.status)),Object(x.a)(n=>n.data),Object(P.a)(1)).subscribe(n=>{l(n)})})}}var M=t("/WN3"),O=t("oxV5"),m=t("D2kv");class h{constructor(n,l,t,o,e,u){this.app=n,this.countDownService=l,this.discountDetailService=t,this.active=o,this.alertController=e,this.loadingController=u,this.couponDetail={},this.countDown={days:"00",hours:"00",minutes:"00",seconds:"00"},this.goodsList=[]}ionViewDidEnter(){this.active.queryParamMap.subscribe(n=>M.__awaiter(this,void 0,void 0,(function*(){const l=n.get("id");if(!Boolean(l))return void this.ionBackButton.el.click();const t=yield this.loadingController.create();t.present(),this.discountDetailService.getCouponDetail(l).then(n=>{this.couponDetail=n.couponDetail,this.goodsList=n.goodsInfo,this.countDownService.countDown(n.couponDetail.end_time,"DD-hh-mm-ss").subscribe(n=>{this.countDown=n})}).catch(n=>{this.alert(n).then(()=>{this.ionBackButton.el.click()})}).finally(()=>t.dismiss())})))}alert(n){return new Promise(l=>{this.alertController.create({header:n,buttons:[{text:"\u786e\u8ba4",role:"cancel"}]}).then(n=>{n.present(),n.onWillDismiss().then(()=>{l()})})})}}var f=o.ob({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#ededed}ion-content[_ngcontent-%COMP%]   .count_down[_ngcontent-%COMP%]{margin:20px 0}ion-content[_ngcontent-%COMP%]   .count_down[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{display:inline-block;height:30px;line-height:30px;border-radius:5px;font-size:16px;color:#333}ion-content[_ngcontent-%COMP%]   .count_down[_ngcontent-%COMP%]   ion-text.count[_ngcontent-%COMP%]{padding:0 8px;background:#333;color:#fff;margin:0 4px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:15px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:15px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.title[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:2px 8px;background:var(--ion-color-primary);font-size:13px;color:var(--ion-color-light);margin-right:12px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:16px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ._item[_ngcontent-%COMP%]{margin:5px 0 10px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ._item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:13px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ._item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#333;margin:5px 0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #e8e8e8;background:#fff}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{width:105px;height:105px;border-radius:5px;margin:10px 10px 10px 0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{height:105px;white-space:normal}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.title[_ngcontent-%COMP%]{font-size:15px;line-height:22px;height:44px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;box-orient:vertical;margin-bottom:41px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]{font-size:16px;display:block;height:20px;line-height:20px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:18px;line-height:18px;height:18px;vertical-align:bottom}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]   ion-text.unit[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]   ion-text.integral.small[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]   ion-text.integral.small[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{font-size:13px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]   ion-text.integral.strong[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]   ion-text.integral.strong[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{font-size:15px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .product_item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text.price_line[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{font-size:15px;font-weight:700}"]],data:{}});function k(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,24,"div",[["align","center"],["class","count_down"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,2,"ion-text",[["class","txt"]],null,null,null,i.Pb,i.S)),o.pb(2,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["\u8ddd\u7ed3\u675f"])),(n()(),o.qb(4,0,null,null,2,"ion-text",[["class","count"]],null,null,null,i.Pb,i.S)),o.pb(5,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(6,0,["",""])),(n()(),o.qb(7,0,null,null,2,"ion-text",[["class","txt"]],null,null,null,i.Pb,i.S)),o.pb(8,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["\u5929"])),(n()(),o.qb(10,0,null,null,2,"ion-text",[["class","count"]],null,null,null,i.Pb,i.S)),o.pb(11,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(12,0,["",""])),(n()(),o.qb(13,0,null,null,2,"ion-text",[["class","txt"]],null,null,null,i.Pb,i.S)),o.pb(14,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,[":"])),(n()(),o.qb(16,0,null,null,2,"ion-text",[["class","count"]],null,null,null,i.Pb,i.S)),o.pb(17,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(18,0,["",""])),(n()(),o.qb(19,0,null,null,2,"ion-text",[["class","txt"]],null,null,null,i.Pb,i.S)),o.pb(20,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,[":"])),(n()(),o.qb(22,0,null,null,2,"ion-text",[["class","count"]],null,null,null,i.Pb,i.S)),o.pb(23,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(24,0,["",""]))],null,(function(n,l){var t=l.component;n(l,6,0,t.countDown.days),n(l,12,0,t.countDown.hours),n(l,18,0,t.countDown.minutes),n(l,24,0,t.countDown.seconds)}))}function q(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"div",[["align","center"],["class","count_down"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,[" \u4f18\u60e0\u5238\u5df2\u8fc7\u671f "]))],null,null)}function w(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,22,"ion-item",[["class","product_item"],["lines","none"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Bb(n,2).onClick()&&e),"click"===l&&(e=!1!==o.Bb(n,5).onClick(t)&&e),e}),i.vb,i.w)),o.pb(1,49152,null,0,c.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),o.pb(2,16384,null,0,b.o,[b.n,b.a,[8,null],o.B,o.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),o.Eb(3,{id:0}),o.Cb(4,1),o.pb(5,737280,null,0,c.Kb,[a.g,c.Fb,o.k,b.n,[2,b.o]],null,null),(n()(),o.qb(6,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,i.Rb,i.U)),o.pb(7,49152,null,0,c.wb,[o.h,o.k,o.x],null,null),(n()(),o.qb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.qb(9,0,null,0,13,"ion-label",[["class","ion-no-margin"]],null,null,null,i.wb,i.z)),o.pb(10,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(n()(),o.qb(11,0,null,0,2,"ion-text",[["class","title"]],null,null,null,i.Pb,i.S)),o.pb(12,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(13,0,["",""])),(n()(),o.qb(14,0,null,0,8,"ion-text",[["class","price_line"],["color","danger"]],null,null,null,i.Pb,i.S)),o.pb(15,49152,null,0,c.ub,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.qb(16,0,null,0,3,"ion-text",[["class","price"]],[[8,"innerHTML",1]],null,null,i.Pb,i.S)),o.pb(17,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),o.Fb(18,1),o.Fb(19,1),(n()(),o.qb(20,0,null,0,2,"ion-text",[["class","unit"]],null,null,null,i.Pb,i.S)),o.pb(21,49152,null,0,c.ub,[o.h,o.k,o.x],null,null),(n()(),o.Jb(22,0,[" /"," "]))],(function(n,l){n(l,1,0,"none");var t=n(l,3,0,l.context.$implicit.id),o=n(l,4,0,"/indexComponents/goodsDetail");n(l,2,0,t,o),n(l,5,0),n(l,15,0,"danger")}),(function(n,l){n(l,8,0,l.context.$implicit.url),n(l,13,0,l.context.$implicit.title);var t=o.Kb(l,16,0,n(l,19,0,o.Bb(l.parent.parent,0),o.Kb(l,16,0,n(l,18,0,o.Bb(l.parent.parent,1),"\uffe5"+(l.context.$implicit.market_price||"0.00")))));n(l,16,0,t),n(l,22,0,l.context.$implicit.unit||"\u4e2a")}))}function v(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,8,"ion-list",[["class","ion-no-padding"]],null,null,null,i.yb,i.A)),o.pb(1,49152,null,0,c.O,[o.h,o.k,o.x],null,null),(n()(),o.qb(2,0,null,0,4,"ion-list-header",[["mode","md"]],null,null,null,i.xb,i.B)),o.pb(3,49152,null,0,c.P,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.qb(4,0,null,0,2,"ion-label",[],null,null,null,i.wb,i.z)),o.pb(5,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["\u6d3b\u52a8\u5546\u54c1"])),(n()(),o.fb(16777216,null,0,1,null,w)),o.pb(8,278528,null,0,a.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"md"),n(l,8,0,t.goodsList)}),null)}function D(n){return o.Lb(0,[o.Db(0,r.a,[s.b]),o.Db(0,g.a,[]),o.Hb(402653184,1,{ionBackButton:0}),(n()(),o.qb(3,0,null,null,11,"ion-header",[["mode","ios"]],null,null,null,i.nb,i.q)),o.pb(4,49152,null,0,c.B,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.qb(5,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,i.Tb,i.W)),o.pb(6,49152,null,0,c.zb,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.qb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.cb,i.f)),o.pb(8,49152,null,0,c.l,[o.h,o.k,o.x],null,null),(n()(),o.qb(9,0,null,0,2,"ion-back-button",[["defaultHref","/home/index"],["text","\u8fd4\u56de"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Bb(n,11).onClick(t)&&e),e}),i.Z,i.c)),o.pb(10,49152,[[1,4]],0,c.g,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),o.pb(11,16384,null,0,c.h,[[2,c.fb],c.Fb,c.d],{defaultHref:[0,"defaultHref"]},null),(n()(),o.qb(12,0,null,0,2,"ion-title",[],null,null,null,i.Sb,i.V)),o.pb(13,49152,null,0,c.xb,[o.h,o.k,o.x],null,null),(n()(),o.Jb(14,0,["",""])),(n()(),o.qb(15,0,null,null,30,"ion-content",[],null,null,null,i.ib,i.l)),o.pb(16,49152,null,0,c.u,[o.h,o.k,o.x],null,null),(n()(),o.fb(16777216,null,0,1,null,k)),o.pb(18,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.fb(16777216,null,0,1,null,q)),o.pb(20,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(21,0,null,0,22,"ion-card",[["mode","ios"]],null,null,null,i.eb,i.g)),o.pb(22,49152,null,0,c.m,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.qb(23,0,null,0,20,"ion-card-content",[["mode","ios"]],null,null,null,i.db,i.h)),o.pb(24,49152,null,0,c.n,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.qb(25,0,null,0,6,"ion-item",[["class","title ion-no-padding"],["lines","none"]],null,null,null,i.vb,i.w)),o.pb(26,49152,null,0,c.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.qb(27,0,null,0,1,"div",[["class","badge"]],null,null,null,null,null)),(n()(),o.Jb(28,null,["",""])),(n()(),o.qb(29,0,null,0,2,"ion-label",[],null,null,null,i.wb,i.z)),o.pb(30,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(n()(),o.Jb(31,0,["",""])),(n()(),o.qb(32,0,null,0,5,"div",[["class","discount_content _item"]],null,null,null,null,null)),(n()(),o.qb(33,0,null,null,2,"ion-label",[["color","medium"]],null,null,null,i.wb,i.z)),o.pb(34,49152,null,0,c.N,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.Jb(-1,0,["\u6d3b\u52a8\u5185\u5bb9"])),(n()(),o.qb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(37,null,["",""])),(n()(),o.qb(38,0,null,0,5,"div",[["class","discount_time_range _item"]],null,null,null,null,null)),(n()(),o.qb(39,0,null,null,2,"ion-label",[["color","medium"]],null,null,null,i.wb,i.z)),o.pb(40,49152,null,0,c.N,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.Jb(-1,0,["\u6d3b\u52a8\u65f6\u95f4"])),(n()(),o.qb(42,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(43,null,[""," ~ ",""])),(n()(),o.fb(16777216,null,0,1,null,v)),o.pb(45,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,"ios"),n(l,6,0,"ios"),n(l,10,0,"/home/index","\u8fd4\u56de"),n(l,11,0,"/home/index"),n(l,18,0,!!t.countDown),n(l,20,0,!t.countDown),n(l,22,0,"ios"),n(l,24,0,"ios"),n(l,26,0,"none"),n(l,34,0,"medium"),n(l,40,0,"medium"),n(l,45,0,t.goodsList&&t.goodsList.length>0)}),(function(n,l){var t=l.component;n(l,14,0,t.couponDetail.couponTitle||"\u4fc3\u9500"),n(l,28,0,t.couponDetail.coupon_type||"\u6682\u65e0"),n(l,31,0,t.couponDetail.couponTitle||"\u6682\u65e0"),n(l,37,0,t.couponDetail.description||"\u6682\u65e0"),n(l,43,0,t.couponDetail.start_time||"\u5f00\u59cb\u65f6\u95f4",t.couponDetail.end_time||"\u7ed3\u675f\u65f6\u95f4")}))}function z(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,2,"app-discount-detail",[],null,null,null,D,f)),o.Gb(512,null,C,C,[p.a]),o.pb(2,49152,null,0,h,[m.a,O.a,C,b.a,c.a,c.Cb],null,null)],null,null)}var J=o.mb("app-discount-detail",h,z,{},{},[]),S=t("pwXF"),y=t("ADsi"),B=t("iTUp");t.d(l,"DiscountDetailModuleNgFactory",(function(){return L}));var L=o.nb(e,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[u.a,J]],[3,o.j],o.v]),o.zb(4608,a.l,a.k,[o.s,[2,a.w]]),o.zb(4608,S.m,S.m,[]),o.zb(4608,c.b,c.b,[o.x,o.g]),o.zb(4608,c.Eb,c.Eb,[c.b,o.j,o.p]),o.zb(4608,c.Ib,c.Ib,[c.b,o.j,o.p]),o.zb(1073742336,a.b,a.b,[]),o.zb(1073742336,S.l,S.l,[]),o.zb(1073742336,S.b,S.b,[]),o.zb(1073742336,c.Bb,c.Bb,[]),o.zb(1073742336,b.r,b.r,[[2,b.w],[2,b.n]]),o.zb(1073742336,y.a,y.a,[]),o.zb(1073742336,B.a,B.a,[]),o.zb(1073742336,e,e,[]),o.zb(1024,b.l,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);