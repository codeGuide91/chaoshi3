(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"15c7":function(e,t,r){"use strict";r.r(t);var o=r("62ee"),a=r("f0f7");for(var s in a)"default"!==s&&function(e){r.d(t,e,(function(){return a[e]}))}(s);r("52c4");var n,i=r("f0c5"),d=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],n);t["default"]=d.exports},2998:function(e,t,r){"use strict";(function(e){r("8515"),r("921b");o(r("66fd"));var t=o(r("15c7"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"41b1":function(e,t,r){},"52c4":function(e,t,r){"use strict";var o=r("41b1"),a=r.n(o);a.a},"62ee":function(e,t,r){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},s=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return o}))},c13e:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,o,a,s,n){try{var i=e[s](n),d=i.value}catch(u){return void r(u)}i.done?t(d):Promise.resolve(d).then(o,a)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var n=e.apply(t,r);function i(e){s(n,o,a,i,d,"next",e)}function d(e){s(n,o,a,i,d,"throw",e)}i(void 0)}))}}var i={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(){var t=n(o.default.mark((function t(r){var a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.type=r.type,this.seat=r.seat,this.orderGoods=e.getStorageSync("orderGoods"),1!=this.seat)for(a=0;a<this.orderGoods.length;a++)0==this.total?this.total=parseFloat(this.orderGoods[a].price)*this.orderGoods[a].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[a].price)*this.orderGoods[a].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 5:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),onShow:function(){var t=n(o.default.mark((function t(){var r,a,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,1==this.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||this.user.id!=s.userid){t.next=11;break}this.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,this.$api.defaultAddress(this.user.id);case 13:a=t.sent,this.address=a.data;case 15:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),methods:{onSubmitTap:function(){var t=n(o.default.mark((function t(){var r,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=this,1==r.seat||r.address){t.next=4;break}return r.$utils.msg("请选择地址"),t.abrupt("return");case 4:a=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var t=n(o.default.mark((function t(s){var n,i,d,u,c,l,f;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!s.confirm){t.next=58;break}if(n=r.type,i=!0,d="已支付",1!=n){t.next=8;break}r.user.money-r.total<0&&(r.$utils.msg("余额不足，请先充值"),i=!1,d="未支付"),t.next=13;break;case 8:if(2!=n){t.next=13;break}if(!(r.user.jifen-r.total<0)){t.next=13;break}return r.$utils.msg("积分不足，兑换商品失败"),i=!1,t.abrupt("return");case 13:u=0;case 14:if(!(u<r.orderGoods.length)){t.next=44;break}if("shangpinxinxi"!=r.orderGoods[u].tablename){t.next=33;break}return t.next=18,r.$api.info("shangpinxinxi",r.orderGoods[u].goodid);case 18:if(c=t.sent,!(c.data.onelimittimes>0)){t.next=24;break}if(!(r.orderGoods[u].buynumber>c.data.onelimittimes)){t.next=24;break}return r.$utils.msg("".concat(r.orderGoods[u].goodname,"超过可购买数量")),i=!1,t.abrupt("break",44);case 24:if(!(c.data.alllimittimes<r.orderGoods[u].buynumber)){t.next=30;break}return r.$utils.msg("".concat(r.orderGoods[u].goodname,"已售罄")),i=!1,t.abrupt("break",44);case 30:return 1!=r.seat?c.data.alllimittimes=c.data.alllimittimes-r.orderGoods[u].buynumber:c.data.selected=c.data.selected+","+r.orderGoods[u].activeSeat,t.next=33,r.$api.update("shangpinxinxi",c.data);case 33:return l={orderid:r.$utils.genTradeNo(),tablename:r.orderGoods[u].tablename,userid:r.user.id,goodid:r.orderGoods[u].goodid,goodname:r.orderGoods[u].goodname,picture:r.orderGoods[u].picture,buynumber:r.orderGoods[u].buynumber,discountprice:r.orderGoods[u].price,price:r.orderGoods[u].price,total:r.orderGoods[u].price*r.orderGoods[u].buynumber,discounttotal:r.orderGoods[u].price*r.orderGoods[u].buynumber,type:n,address:r.address.address,tel:r.address.phone,consignee:r.address.name,status:d},1==r.seat&&(l["address"]=r.address,f=r.address.split(",").length,l["buynumber"]=f,l["total"]=r.orderGoods[u].price*f,l["discounttotal"]=r.orderGoods[u].price*f),t.next=37,r.$api.add("orders",l);case 37:if(!r.orderGoods[u].id){t.next=41;break}return t.next=40,r.$api.del("cart",JSON.stringify([r.orderGoods[u].id]));case 40:e.removeStorageSync("cart".concat(r.orderGoods[u].goodid).concat(r.user.id));case 41:u++,t.next=14;break;case 44:if(!i){t.next=58;break}if(1!=n){t.next=53;break}return r.$utils.msgBack("支付成功"),r.user.money=r.user.money-r.total,(r.user.jifen||0==r.user.jifen)&&(r.user.jifen=parseFloat(r.user.jifen)+parseFloat(r.total)),t.next=51,r.$api.update(a,r.user);case 51:t.next=58;break;case 53:if(2!=n){t.next=58;break}return r.$utils.msgBack("兑换成功"),r.user.jifen=r.user.jifen-r.total,t.next=58,r.$api.update(a,r.user);case 58:case"end":return t.stop()}}),t)})));function s(e){return t.apply(this,arguments)}return s}()});case 6:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=i}).call(this,r("543d")["default"])},f0f7:function(e,t,r){"use strict";r.r(t);var o=r("c13e"),a=r.n(o);for(var s in o)"default"!==s&&function(e){r.d(t,e,(function(){return o[e]}))}(s);t["default"]=a.a}},[["2998","common/runtime","common/vendor"]]]);