!function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[373],{45480:function(t,e,i){"use strict";i.d(e,{q:function(){return u}});var o=i(51095),n=i(49983),a=i(37716),u=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[o.ot,n.c]}),t}()},81373:function(t,i,o){"use strict";o.r(i),o.d(i,{MasterSuperStockistModule:function(){return Q}});var n=o(38583),a=o(63423),u=o(3679),s=o(88259),c=o.n(s),l=o(37716),m=o(44501),p=o(73535),d=o(65939),f=o(93738),Z=o(35618),g=o(98295),S=o(49983),h=o(51095),k=o(11494),v=o(67441),A=o(76627),q=o(88030),x=o(72458);function b(t,e){1&t&&(l.TgZ(0,"mat-error"),l._uU(1,"This field is Required"),l.qZA())}function T(t,e){if(1&t&&(l.TgZ(0,"mat-error"),l._uU(1),l.qZA()),2&t){var r=l.oxw(2);l.xp6(1),l.hij("Minimum length of name is ",r.superStockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function y(t,e){if(1&t&&(l.TgZ(0,"div",35),l.YNc(1,b,2,0,"mat-error",36),l.YNc(2,T,2,1,"mat-error",36),l.qZA()),2&t){var r=l.oxw();l.xp6(1),l.Q6J("ngIf",r.superStockistMasterForm.get("userName").errors.required),l.xp6(1),l.Q6J("ngIf",r.superStockistMasterForm.get("userName").errors.minlength)}}function U(t,e){if(1&t){var r=l.EpF();l.TgZ(0,"tr",37),l.TgZ(1,"td"),l._uU(2),l.qZA(),l.TgZ(3,"td"),l._uU(4),l.qZA(),l.TgZ(5,"td"),l._uU(6),l.qZA(),l.TgZ(7,"td"),l._uU(8),l.qZA(),l.TgZ(9,"td"),l.TgZ(10,"i",38),l.NdJ("click",function(){var t=l.CHM(r).$implicit;return l.oxw().editStockist(t)}),l.qZA(),l.qZA(),l.qZA()}if(2&t){var i=e.$implicit,o=e.index,n=l.oxw();l.Q6J("ngStyle",n.getBackgroundColor(o)),l.xp6(2),l.Oqu(o+1),l.xp6(2),l.Oqu(i.userName),l.xp6(2),l.Oqu(i.pin),l.xp6(2),l.Oqu(i.balance)}}function N(t,e){if(1&t&&(l.TgZ(0,"mat-option",39),l._uU(1),l.qZA()),2&t){var r=e.$implicit;l.Q6J("value",r.userId),l.xp6(1),l.hij(" ",r.pin," ")}}function w(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",40),l.TgZ(1,"mat-label"),l._uU(2,"Name"),l.qZA(),l._UZ(3,"input",41),l.TgZ(4,"mat-icon",33),l._uU(5,"person_pin"),l.qZA(),l.qZA()),2&t){var r=l.oxw();l.xp6(3),l.Q6J("value",r.selectedSuperStockist.userName)}}function I(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",40),l.TgZ(1,"mat-label"),l._uU(2,"Current balance"),l.qZA(),l._UZ(3,"input",42),l.TgZ(4,"mat-icon",33),l._uU(5,"account_balance_wallet"),l.qZA(),l.qZA()),2&t){var r=l.oxw();l.xp6(3),l.Q6J("value",r.selectedSuperStockist.balance)}}var _,F=function(){var t=function(){function t(e,i){r(this,t),this.masterSuperStockistService=e,this.authService=i,this.isSuperStockistUpdateAble=!1,this.isPinAvailable=!1,this.superStockist=[],this.selectedSuperStockist=null,this.highLightedRowIndex=-1,this.user=this.authService.userBehaviorSubject.value}return e(t,[{key:"ngOnInit",value:function(){var t=this;this.superStockistMasterForm=new u.cw({id:new u.NI(null),userName:new u.NI(null,[u.kI.required,u.kI.minLength(2)]),pin:new u.NI(null),commission:new u.NI(null,[u.kI.required,u.kI.max(100)])}),this.superStockistLimitForm=new u.cw({beneficiaryUid:new u.NI(null,[u.kI.required]),amount:new u.NI(null,[u.kI.required,u.kI.minLength(2)])}),this.superStockist=this.masterSuperStockistService.getSuperStockist(),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(e){t.superStockist=e})}},{key:"getBackgroundColor",value:function(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"onSuperStockistSelect",value:function(t){this.selectedSuperStockist=this.superStockist.find(function(e){return e.userId===t.value})}},{key:"clearMasterSuperStockistForm",value:function(){this.superStockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isSuperStockistUpdateAble=!1}},{key:"updateSuperStockist",value:function(){var t=this;this.masterSuperStockistService.updateSuperStockist({id:this.superStockistMasterForm.value.id,userName:this.superStockistMasterForm.value.userName,pin:this.superStockistMasterForm.value.pin}).subscribe(function(e){1===e.success&&(c().fire({position:"top-end",icon:"success",title:"Super Stockist Updated",showConfirmButton:!1,timer:1e3}),t.superStockistMasterForm.reset())})}},{key:"rechargeToSuperStockist",value:function(){var t=this;c().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(e){e.isConfirmed&&t.masterSuperStockistService.saveSuperStockistBalance({beneficiaryUid:t.superStockistLimitForm.value.beneficiaryUid,amount:t.superStockistLimitForm.value.amount,rechargeDoneByUid:t.user.userId}).subscribe(function(e){if(1===e.success){var r=e.data,i=t.superStockist.findIndex(function(t){return t.userId===r.userId});t.superStockist[i].balance=r.balance,setTimeout(function(){t.highLightedRowIndex=-1},1e4),c().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}},{key:"editStockist",value:function(t){var e=this.superStockist.findIndex(function(e){return e.userId===t.userId});this.highLightedRowIndex=e,this.superStockistMasterForm.patchValue({id:t.userId,userName:t.userName,pin:t.pin}),this.isSuperStockistUpdateAble=!0}},{key:"pinCheck",value:function(){var t=this;this.masterSuperStockistService.checkPinAvailability(this.superStockistMasterForm.value.pin).subscribe(function(e){0===e.success&&(c().fire({position:"top-end",icon:"error",title:"Pin Not Available",showConfirmButton:!1,timer:1e3}),t.isPinAvailable=!0)})}},{key:"createNewSuperStockist",value:function(){var t=this;c().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(e){e.isConfirmed&&t.masterSuperStockistService.saveNewSuperStockist({userName:t.superStockistMasterForm.value.userName,pin:t.superStockistMasterForm.value.pin,commission:t.superStockistMasterForm.value.commission}).subscribe(function(e){1===e.success?(t.superStockistMasterForm.reset(),c().fire({position:"top-end",icon:"success",title:"Super Stockist created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Y36(m.Z),l.Y36(p.e))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-master-super-stockist"]],decls:89,vars:10,consts:[["label","Create super stockist"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","userName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name",3,"blur"],[1,"col-10","m-0","p-0"],["fxFlex","col 100"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Super Stockist limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","legacy",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],[3,"value"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"]],template:function(t,e){1&t&&(l.TgZ(0,"mat-tab-group"),l.TgZ(1,"mat-tab",0),l.TgZ(2,"div",1),l.TgZ(3,"div",2),l.TgZ(4,"mat-card"),l.TgZ(5,"mat-card-header"),l._UZ(6,"div",3),l.TgZ(7,"mat-card-title"),l._uU(8,"New Super Stockist Form"),l.qZA(),l.qZA(),l.TgZ(9,"mat-card-content"),l.TgZ(10,"div",4),l.TgZ(11,"div",5),l.TgZ(12,"form",6),l.TgZ(13,"div",4),l.TgZ(14,"mat-form-field",5),l.TgZ(15,"mat-label"),l._uU(16,"Super Stockist Name"),l.qZA(),l._UZ(17,"input",7),l.YNc(18,y,3,2,"div",8),l.qZA(),l.TgZ(19,"mat-form-field",5),l.TgZ(20,"mat-label"),l._uU(21,"PIN"),l.qZA(),l.TgZ(22,"input",9),l.NdJ("blur",function(){return e.pinCheck()}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(23,"div",4),l.TgZ(24,"div",10),l.TgZ(25,"mat-form-field",11),l.TgZ(26,"mat-label"),l._uU(27,"Commission"),l.qZA(),l._UZ(28,"input",12),l.qZA(),l.qZA(),l.TgZ(29,"label",13),l._uU(30,"(Max: 100)"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(31,"div",4),l.TgZ(32,"button",14),l.NdJ("click",function(){return e.createNewSuperStockist()}),l._uU(33,"Create"),l.qZA(),l.TgZ(34,"button",14),l.NdJ("click",function(){return e.updateSuperStockist()}),l._uU(35,"Update"),l.qZA(),l.TgZ(36,"button",15),l.NdJ("click",function(){return e.clearMasterSuperStockistForm()}),l._uU(37,"clear"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(38,"div",16),l.TgZ(39,"table",17),l.TgZ(40,"thead"),l.TgZ(41,"tr"),l.TgZ(42,"th",18),l._uU(43,"Stockist List"),l.qZA(),l.qZA(),l.TgZ(44,"tr"),l.TgZ(45,"th"),l._uU(46,"Id"),l.qZA(),l.TgZ(47,"th",19),l._uU(48,"Stockist name"),l.qZA(),l.TgZ(49,"th",20),l._uU(50,"Pin"),l.qZA(),l.TgZ(51,"th",21),l._uU(52,"Balance"),l.qZA(),l.TgZ(53,"th",22),l._uU(54,"Edit"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(55,"tbody"),l.YNc(56,U,11,5,"tr",23),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(57,"mat-tab",24),l.TgZ(58,"div",1),l._UZ(59,"div",25),l.TgZ(60,"div",26),l.TgZ(61,"mat-card"),l.TgZ(62,"mat-card-header"),l._UZ(63,"div",3),l.TgZ(64,"mat-card-title"),l._uU(65,"Recharge Super Stockist"),l.qZA(),l.qZA(),l.TgZ(66,"mat-card-content"),l.TgZ(67,"div",4),l.TgZ(68,"div",27),l.TgZ(69,"form",6),l.TgZ(70,"div",4),l.TgZ(71,"mat-form-field",5),l.TgZ(72,"mat-label"),l._uU(73,"Super Stockist"),l.qZA(),l.TgZ(74,"mat-select",28),l.NdJ("selectionChange",function(t){return e.onSuperStockistSelect(t)}),l.YNc(75,N,2,2,"mat-option",29),l.qZA(),l.qZA(),l.YNc(76,w,6,1,"mat-form-field",30),l.YNc(77,I,6,1,"mat-form-field",30),l.qZA(),l.TgZ(78,"div",4),l.TgZ(79,"mat-form-field",31),l.TgZ(80,"mat-label"),l._uU(81,"Recharge amount"),l.qZA(),l._UZ(82,"input",32),l.TgZ(83,"mat-icon",33),l._uU(84," money"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(85,"div",4),l.TgZ(86,"button",34),l.NdJ("click",function(){return e.rechargeToSuperStockist()}),l._uU(87,"Save"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(88,"div",25),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(12),l.Q6J("formGroup",e.superStockistMasterForm),l.xp6(6),l.Q6J("ngIf",!e.superStockistMasterForm.get("userName").valid&&e.superStockistMasterForm.get("userName").touched),l.xp6(14),l.Q6J("disabled",!e.superStockistMasterForm.valid||e.isSuperStockistUpdateAble||e.isPinAvailable),l.xp6(2),l.Q6J("disabled",!e.isSuperStockistUpdateAble),l.xp6(22),l.Q6J("ngForOf",e.superStockist),l.xp6(13),l.Q6J("formGroup",e.superStockistLimitForm),l.xp6(6),l.Q6J("ngForOf",e.superStockist),l.xp6(1),l.Q6J("ngIf",e.selectedSuperStockist),l.xp6(1),l.Q6J("ngIf",e.selectedSuperStockist),l.xp6(9),l.Q6J("disabled",!e.superStockistLimitForm.valid))},directives:[d.SP,d.uX,f.a8,f.dk,f.kc,f.n5,f.dn,Z.xw,Z.Wh,Z.SQ,Z.yH,u._Y,u.JL,u.sg,g.KE,g.hX,S.Nt,u.Fj,u.JJ,u.u,n.O5,h.lW,k.YE,k.nU,n.sg,v.gD,A.Hw,g.R9,g.TO,n.PC,q.Zl,x.ey],styles:[""]}),t}(),C=[{path:"",canActivate:[o(51068).m],component:F}],L=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.Bz.forChild(C)],a.Bz]}),t}(),J=o(45480),M=o(15566),B=o(45396),Q=((_=function t(){r(this,t)}).\u0275fac=function(t){return new(t||_)},_.\u0275mod=l.oAB({type:_}),_.\u0275inj=l.cJS({imports:[[n.ez,L,d.Nh,J.q,M.o9,f.QW,u.u5,u.UX,B.rP,k.JX,v.LD,A.Ps]]}),_)},51068:function(t,i,o){"use strict";o.d(i,{m:function(){return u}});var n=o(37716),a=o(73535),u=function(){var t=function(){function t(e){r(this,t),this.authService=e}return e(t,[{key:"canActivate",value:function(t,e){return this.authService.isAdmin()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.LFG(a.e))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();