!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[134],{89134:function(o,i,r){"use strict";r.r(i),r.d(i,{MasterStockistModule:function(){return j}});var n=r(61116),a=r(33464),s=r(58423),c=r(31041),u=r(529),l=r(22501),d=r.n(l),m=r(35366),g=r(82859),f=r(4612),Z=r(57173),k=r(22797),h=r(35965),p=r(13070),v=r(9550),A=r(84369),x=r(59241),q=r(13841),T=r(77307),b=r(41293),S=r(87064),y=r(79572);function w(t,e){1&t&&(m.TgZ(0,"mat-error"),m._uU(1,"This field is Required"),m.qZA())}function L(t,e){if(1&t&&(m.TgZ(0,"mat-error"),m._uU(1),m.qZA()),2&t){var o=m.oxw(2);m.xp6(1),m.hij("Minimum length of name is ",o.stockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function N(t,e){if(1&t&&(m.TgZ(0,"div",31),m.YNc(1,w,2,0,"mat-error",32),m.YNc(2,L,2,1,"mat-error",32),m.qZA()),2&t){var o=m.oxw();m.xp6(1),m.Q6J("ngIf",o.stockistMasterForm.get("userName").errors.required),m.xp6(1),m.Q6J("ngIf",o.stockistMasterForm.get("userName").errors.minlength)}}function U(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"tr",33),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m.TgZ(10,"i",34),m.NdJ("click",function(){var t=m.CHM(o).$implicit;return m.oxw().editStockist(t)}),m.qZA(),m.qZA(),m.qZA()}if(2&t){var i=e.$implicit,r=e.index,n=m.oxw();m.Q6J("ngStyle",n.getBackgroundColor(r)),m.xp6(2),m.Oqu(r+1),m.xp6(2),m.Oqu(i.userName),m.xp6(2),m.Oqu(i.pin),m.xp6(2),m.Oqu(i.balance)}}function _(t,e){if(1&t&&(m.TgZ(0,"mat-option",35),m._uU(1),m.qZA()),2&t){var o=e.$implicit;m.Q6J("value",o.userId),m.xp6(1),m.hij(" ",o.pin," ")}}function I(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",36),m.TgZ(1,"mat-label"),m._uU(2,"Name"),m.qZA(),m._UZ(3,"input",37),m.TgZ(4,"mat-icon",28),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){var o=m.oxw();m.xp6(3),m.Q6J("value",o.selectedStockist.userName)}}function F(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",36),m.TgZ(1,"mat-label"),m._uU(2,"Current balance"),m.qZA(),m._UZ(3,"input",38),m.TgZ(4,"mat-icon",28),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){var o=m.oxw();m.xp6(3),m.Q6J("value",o.selectedStockist.balance)}}function C(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"div",39),m.TgZ(1,"div",40),m.TgZ(2,"mat-slide-toggle",41),m.NdJ("change",function(){m.CHM(o);var t=m.oxw();return t.showDevArea=!t.showDevArea}),m._uU(3),m.qZA(),m.qZA(),m.qZA()}if(2&t){var i=m.oxw();m.xp6(3),m.Oqu(i.showDevArea?"Hide Developer Area":"Show Developer Area")}}function J(t,e){if(1&t&&(m.TgZ(0,"div",39),m.TgZ(1,"div",42),m.TgZ(2,"pre"),m._uU(3),m.ALo(4,"json"),m.ALo(5,"json"),m.qZA(),m.qZA(),m.TgZ(6,"div",40),m.TgZ(7,"pre"),m._uU(8),m.ALo(9,"json"),m.qZA(),m.qZA(),m._UZ(10,"div",40),m.qZA()),2&t){var o=m.oxw();m.xp6(3),m.AsE("        stockistMasterForm = ",m.lcZ(4,3,o.stockistMasterForm.value),"\n        stockists = ",m.lcZ(5,5,o.stockists),"\n      "),m.xp6(5),m.hij("stockistLimitForm = ",m.lcZ(9,7,o.stockistLimitForm.value),"")}}function B(t,e,o){return(t<e?-1:1)*(o?1:-1)}var M,Q,D=[{path:"",canActivate:[s.m],component:(M=function(){function o(e,i){t(this,o),this.masterStockistService=e,this.authService=i,this.isProduction=u.N.production,this.showDevArea=!1,this.isStockistUpdatAble=!1,this.stockists=[],this.sortedStockistList=[],this.selectedStockist=null,this.highLightedRowIndex=-1,this.stockistMasterForm=new c.cw({id:new c.NI(null),userName:new c.NI(null,[c.kI.required,c.kI.minLength(2)]),pin:new c.NI(null)}),this.stockistLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.minLength(2)])})}var i,r,n;return i=o,(r=[{key:"ngOnInit",value:function(){var t=this;this.user=this.authService.userBehaviorSubject.value,this.stockists=this.masterStockistService.getStockists(),this.sortedStockistList=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(e){t.stockists=e,t.sortedStockistList=e})}},{key:"onStockistSelect",value:function(t){this.selectedStockist=this.stockists.find(function(e){return e.userId===t.value})}},{key:"editStockist",value:function(t){this.stockistMasterForm.patchValue(t),this.isStockistUpdatAble=!0}},{key:"createNewStockist",value:function(){var t=this;d().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(e){e.isConfirmed&&t.masterStockistService.saveNewStockist({userName:t.stockistMasterForm.value.userName}).subscribe(function(e){1===e.success?(t.sortedStockistList.unshift(e.data),t.highLightedRowIndex=0,t.stockistLimitForm.reset(),setTimeout(function(){t.highLightedRowIndex=-1},1e4),d().fire({position:"top-end",icon:"success",title:"Balance updated",showConfirmButton:!1,timer:1e3})):d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}},{key:"getBackgroundColor",value:function(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterStockistForm",value:function(){this.stockistMasterForm.reset()}},{key:"sortData",value:function(t){var e=this.stockists.slice();this.sortedStockistList=t.active&&""!==t.direction?e.sort(function(e,o){var i="asc"===t.direction;switch(t.active){case"userName":return B(e.userName,o.userName,i);case"pin":return B(e.pin,o.pin,i);case"balance":return B(e.balance,o.balance,i);default:return 0}}):e}},{key:"rechargeToStockist",value:function(){var t=this;d().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(e){e.isConfirmed&&t.masterStockistService.saveStockistBalance({beneficiaryUid:t.stockistLimitForm.value.beneficiaryUid,amount:t.stockistLimitForm.value.amount,rechargeDoneByUid:t.user.userId}).subscribe(function(e){if(1===e.success){var o=e.data,i=t.stockists.findIndex(function(t){return t.userId===o.userId});t.stockists[i].balance=o.balance,t.sortedStockistList[i].balance=o.balance,t.highLightedRowIndex=i,t.stockistLimitForm.patchValue({amount:""}),setTimeout(function(){t.highLightedRowIndex=-1},1e4),d().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}}])&&e(i.prototype,r),n&&e(i,n),o}(),M.\u0275fac=function(t){return new(t||M)(m.Y36(g.E),m.Y36(f.e))},M.\u0275cmp=m.Xpm({type:M,selectors:[["app-master-stockist"]],decls:77,vars:11,consts:[["label","Create stockist"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","userName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Stockist limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","legacy",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],[3,"value"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(m.TgZ(0,"mat-tab-group"),m.TgZ(1,"mat-tab",0),m.TgZ(2,"div",1),m.TgZ(3,"div",2),m.TgZ(4,"mat-card"),m.TgZ(5,"mat-card-header"),m._UZ(6,"div",3),m.TgZ(7,"mat-card-title"),m._uU(8,"New Stockist Form"),m.qZA(),m.qZA(),m.TgZ(9,"mat-card-content"),m.TgZ(10,"div",4),m.TgZ(11,"div",5),m.TgZ(12,"form",6),m.TgZ(13,"div",4),m.TgZ(14,"mat-form-field",5),m.TgZ(15,"mat-label"),m._uU(16,"Stockist Name"),m.qZA(),m._UZ(17,"input",7),m.YNc(18,N,3,2,"div",8),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(19,"div",4),m.TgZ(20,"button",9),m.NdJ("click",function(){return e.createNewStockist()}),m._uU(21,"Create"),m.qZA(),m.TgZ(22,"button",10),m.NdJ("click",function(){return e.clearMasterStockistForm()}),m._uU(23,"clear"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(24,"div",11),m.TgZ(25,"table",12),m.NdJ("matSortChange",function(t){return e.sortData(t)}),m.TgZ(26,"thead"),m.TgZ(27,"tr"),m.TgZ(28,"th",13),m._uU(29,"Stockist List"),m.qZA(),m.qZA(),m.TgZ(30,"tr"),m.TgZ(31,"th"),m._uU(32,"Id"),m.qZA(),m.TgZ(33,"th",14),m._uU(34,"Stockist name"),m.qZA(),m.TgZ(35,"th",15),m._uU(36,"Pin"),m.qZA(),m.TgZ(37,"th",16),m._uU(38,"Balance"),m.qZA(),m.TgZ(39,"th",17),m._uU(40,"Edit"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(41,"tbody"),m.YNc(42,U,11,5,"tr",18),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(43,"mat-tab",19),m.TgZ(44,"div",1),m._UZ(45,"div",20),m.TgZ(46,"div",21),m.TgZ(47,"mat-card"),m.TgZ(48,"mat-card-header"),m._UZ(49,"div",3),m.TgZ(50,"mat-card-title"),m._uU(51,"Recharge Stockist"),m.qZA(),m.qZA(),m.TgZ(52,"mat-card-content"),m.TgZ(53,"div",4),m.TgZ(54,"div",22),m.TgZ(55,"form",6),m.TgZ(56,"div",4),m.TgZ(57,"mat-form-field",5),m.TgZ(58,"mat-label"),m._uU(59,"Stockist"),m.qZA(),m.TgZ(60,"mat-select",23),m.NdJ("selectionChange",function(t){return e.onStockistSelect(t)}),m.YNc(61,_,2,2,"mat-option",24),m.qZA(),m.qZA(),m.YNc(62,I,6,1,"mat-form-field",25),m.YNc(63,F,6,1,"mat-form-field",25),m.qZA(),m.TgZ(64,"div",4),m.TgZ(65,"mat-form-field",26),m.TgZ(66,"mat-label"),m._uU(67,"Recharge amount"),m.qZA(),m._UZ(68,"input",27),m.TgZ(69,"mat-icon",28),m._uU(70," money"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(71,"div",4),m.TgZ(72,"button",29),m.NdJ("click",function(){return e.rechargeToStockist()}),m._uU(73,"Save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(74,"div",20),m.qZA(),m.qZA(),m.qZA(),m.YNc(75,C,4,1,"div",30),m.YNc(76,J,11,9,"div",30)),2&t&&(m.xp6(12),m.Q6J("formGroup",e.stockistMasterForm),m.xp6(6),m.Q6J("ngIf",!e.stockistMasterForm.get("userName").valid&&e.stockistMasterForm.get("userName").touched),m.xp6(2),m.Q6J("disabled",!e.stockistMasterForm.valid),m.xp6(22),m.Q6J("ngForOf",e.sortedStockistList),m.xp6(13),m.Q6J("formGroup",e.stockistLimitForm),m.xp6(6),m.Q6J("ngForOf",e.sortedStockistList),m.xp6(1),m.Q6J("ngIf",e.selectedStockist),m.xp6(1),m.Q6J("ngIf",e.selectedStockist),m.xp6(9),m.Q6J("disabled",!e.stockistLimitForm.valid),m.xp6(3),m.Q6J("ngIf",!e.isProduction),m.xp6(1),m.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[Z.SP,Z.uX,k.a8,k.dk,k.kc,k.n5,k.dn,h.xw,h.Wh,h.SQ,h.yH,c._Y,c.JL,c.sg,p.KE,p.hX,v.Nt,c.Fj,c.JJ,c.u,n.O5,A.lW,x.YE,x.nU,n.sg,q.gD,T.Hw,p.R9,p.TO,n.PC,b.Zl,S.ey,y.Rr],pipes:[n.Ts],styles:["@-webkit-keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@-webkit-keyframes blinking{0%{background-color:#8be7e4}to{background-color:rgba(3,249,22,.3)}}@keyframes blinking{0%{background-color:#8be7e4}to{background-color:rgba(3,249,22,.3)}}"]}),M),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],Y=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[a.Bz.forChild(D)],a.Bz]}),e}(),O=r(1887),R=r(77154),j=((Q=function e(){t(this,e)}).\u0275fac=function(t){return new(t||Q)},Q.\u0275mod=m.oAB({type:Q}),Q.\u0275inj=m.cJS({imports:[[n.ez,Y,Z.Nh,O.q,R.o9,k.QW,c.u5,c.UX,y.rP,x.JX,q.LD,T.Ps]]}),Q)}}])}();