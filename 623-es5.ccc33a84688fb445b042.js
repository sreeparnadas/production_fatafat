!function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[623],{45480:function(e,i,n){"use strict";n.d(i,{q:function(){return l}});var a=n(51095),r=n(49983),o=n(37716),l=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.ot,r.c]}),e}()},78623:function(i,n,a){"use strict";a.r(n),a.d(n,{MasterTerminalModule:function(){return $}});var r=a(38583),o=a(63423),l=a(92340),m=a(3679),s=a(88259),c=a.n(s),u=a(37716),d=a(12088),f=a(12173),g=a(73535),Z=a(65939),T=a(93738),h=a(35618),p=a(98295),x=a(49983),v=a(67441),A=a(51095),q=a(11494),b=a(72458),k=a(88030),w=a(76627),I=a(45396);function N(e,t){1&e&&(u.TgZ(0,"mat-error"),u._uU(1,"This field is Required"),u.qZA())}function U(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(2);u.xp6(1),u.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function y(e,t){if(1&e&&(u.TgZ(0,"div",31),u.YNc(1,N,2,0,"mat-error",32),u.YNc(2,U,2,1,"mat-error",32),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function L(e,t){if(1&e&&(u.TgZ(0,"mat-option",33),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.userId),u.xp6(1),u.hij(" ",i.userName," ")}}function _(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"tr",34),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u.TgZ(12,"i",35),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().editTerminal(e)}),u.qZA(),u.qZA(),u.qZA()}if(2&e){var n=t.$implicit,a=t.index,r=u.oxw();u.Q6J("ngStyle",r.getBackgroundColor(a)),u.xp6(2),u.Oqu(a+1),u.xp6(2),u.Oqu(n.terminalName),u.xp6(2),u.Oqu(n.pin),u.xp6(2),u.Oqu(n.balance),u.xp6(2),u.Oqu(n.stockist.userName)}}function F(e,t){if(1&e&&(u.TgZ(0,"mat-option",33),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.terminalId),u.xp6(1),u.hij(" ",i.pin," ")}}function J(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",36),u.TgZ(1,"mat-label"),u._uU(2,"Name"),u.qZA(),u._UZ(3,"input",37),u.TgZ(4,"mat-icon",38),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.terminalName)}}function C(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",36),u.TgZ(1,"mat-label"),u._uU(2,"Current balance"),u.qZA(),u._UZ(3,"input",39),u.TgZ(4,"mat-icon",38),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.balance)}}function S(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",36),u.TgZ(1,"mat-label"),u._uU(2,"Stockist owner"),u.qZA(),u._UZ(3,"input",37),u.TgZ(4,"mat-icon",38),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.userName)}}function Q(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",36),u.TgZ(1,"mat-label"),u._uU(2,"Stockist balance"),u.qZA(),u._UZ(3,"input",39),u.TgZ(4,"mat-icon",38),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.balance)}}function B(e,t){if(1&e&&(u.TgZ(0,"div",4),u.YNc(1,S,6,1,"mat-form-field",27),u.YNc(2,Q,6,1,"mat-form-field",27),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal),u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function M(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(3);u.xp6(1),u.hij(" Amount should not exceed ",i.terminalLimitForm.controls.amount.errors.max.max," ")}}function Y(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",41),u.TgZ(1,"mat-label"),u._uU(2,"Recharge amount"),u.qZA(),u._UZ(3,"input",42),u.TgZ(4,"mat-icon",38),u._uU(5," money"),u.qZA(),u.YNc(6,M,2,1,"mat-error",32),u.qZA()),2&e){var i=u.oxw(2);u.xp6(6),u.Q6J("ngIf",i.terminalLimitForm.get("amount").hasError("max"))}}function R(e,t){if(1&e&&(u.TgZ(0,"div",4),u.YNc(1,Y,7,1,"mat-form-field",40),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function D(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"div",43),u.TgZ(1,"div",44),u.TgZ(2,"mat-slide-toggle",45),u.NdJ("change",function(){u.CHM(i);var e=u.oxw();return e.showDevArea=!e.showDevArea}),u._uU(3),u.qZA(),u.qZA(),u.qZA()}if(2&e){var n=u.oxw();u.xp6(3),u.Oqu(n.showDevArea?"Hide Developer Area":"Show Developer Area")}}function O(e,t){if(1&e&&(u.TgZ(0,"div",43),u.TgZ(1,"div",46),u.TgZ(2,"pre"),u._uU(3),u._uU(4),u._uU(5,"\n      "),u.qZA(),u.qZA(),u._UZ(6,"div",44),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.hij("        ",i.terminalLimitForm.valid,"\n      "),u.xp6(1),u.hij("\n        terminalForm = ",i.terminalMasterForm.value,"\n      ")}}function j(e,t,i){return(e<t?-1:1)*(i?1:-1)}var G,E,P=[{path:"",component:(G=function(){function i(e,n,a){t(this,i),this.masterTerminalService=e,this.masterStockistService=n,this.authService=a,this.isProduction=l.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new m.cw({id:new m.NI(null),terminalName:new m.NI(null,[m.kI.required,m.kI.minLength(2)]),stockistId:new m.NI(null,[m.kI.required])}),this.terminalLimitForm=new m.cw({beneficiaryUid:new m.NI(null,[m.kI.required]),amount:new m.NI(null,[m.kI.required,m.kI.max(0)])})}var n,a,r;return n=i,(a=[{key:"ngOnInit",value:function(){var e=this;this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([m.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"editTerminal",value:function(e){var t=this.terminals.findIndex(function(t){return t.terminalId===e.terminalId});this.highLightedRowIndex=t,this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockist.userId}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"createNewTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId}).subscribe(function(t){1===t.success?(e.sortedTerminalList.unshift(t.data),e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var n="asc"===e.direction;switch(e.active){case"terminalName":return j(t.terminalName,i.terminalName,n);case"stockistName":return j(t.stockist.userName,i.stockist.userName,n);case"balance":return j(t.balance,i.balance,n);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,n=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[n].balance=i.balance,e.terminals[n].stockist.balance=i.stockist.balance,e.sortedTerminalList[n].balance=i.balance,e.sortedTerminalList[n].stockist.balance=i.stockist.balance,e.highLightedRowIndex=n,e.terminalLimitForm.controls.amount.setValidators([m.kI.max(i.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),c().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}}])&&e(n.prototype,a),r&&e(n,r),i}(),G.\u0275fac=function(e){return new(e||G)(u.Y36(d.S),u.Y36(f.E),u.Y36(g.e))},G.\u0275cmp=u.Xpm({type:G,selectors:[["app-master-terminal"]],decls:82,vars:15,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["formControlName","stockistId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(u.TgZ(0,"mat-tab-group"),u.TgZ(1,"mat-tab",0),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.TgZ(4,"mat-card"),u.TgZ(5,"mat-card-header"),u._UZ(6,"div",3),u.TgZ(7,"mat-card-title"),u._uU(8,"New Terminal Form"),u.qZA(),u.qZA(),u.TgZ(9,"mat-card-content"),u.TgZ(10,"div",4),u.TgZ(11,"div",5),u.TgZ(12,"form",6),u.TgZ(13,"div",4),u.TgZ(14,"mat-form-field",5),u.TgZ(15,"mat-label"),u._uU(16,"Terminal Name"),u.qZA(),u._UZ(17,"input",7),u.YNc(18,y,3,2,"div",8),u.qZA(),u.qZA(),u.TgZ(19,"div",4),u.TgZ(20,"mat-form-field",5),u.TgZ(21,"mat-label"),u._uU(22,"Stockist"),u.qZA(),u.TgZ(23,"mat-select",9),u.YNc(24,L,2,2,"mat-option",10),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(25,"div",4),u.TgZ(26,"button",11),u.NdJ("click",function(){return t.createNewTerminal()}),u._uU(27,"Create"),u.qZA(),u.TgZ(28,"button",11),u.NdJ("click",function(){return t.updateTerminal()}),u._uU(29,"Update"),u.qZA(),u.TgZ(30,"button",12),u.NdJ("click",function(){return t.clearMasterTerminalForm()}),u._uU(31,"clear"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(32,"div",13),u.TgZ(33,"table",14),u.NdJ("matSortChange",function(e){return t.sortData(e)}),u.TgZ(34,"thead"),u.TgZ(35,"tr"),u.TgZ(36,"th",15),u._uU(37,"Terminal List"),u.qZA(),u.qZA(),u.TgZ(38,"tr"),u.TgZ(39,"th"),u._uU(40,"Id"),u.qZA(),u.TgZ(41,"th",16),u._uU(42,"Terminal name"),u.qZA(),u.TgZ(43,"th",17),u._uU(44,"Pin"),u.qZA(),u.TgZ(45,"th",18),u._uU(46,"Balance"),u.qZA(),u.TgZ(47,"th",19),u._uU(48,"Stockist"),u.qZA(),u.TgZ(49,"th",20),u._uU(50,"Edit"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(51,"tbody"),u.YNc(52,_,13,6,"tr",21),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(53,"mat-tab",22),u.TgZ(54,"div",1),u._UZ(55,"div",23),u.TgZ(56,"div",24),u.TgZ(57,"mat-card"),u.TgZ(58,"mat-card-header"),u._UZ(59,"div",3),u.TgZ(60,"mat-card-title"),u._uU(61,"Recharge Terminal"),u.qZA(),u.qZA(),u.TgZ(62,"mat-card-content"),u.TgZ(63,"div",4),u.TgZ(64,"div",5),u.TgZ(65,"form",6),u.TgZ(66,"div",4),u.TgZ(67,"mat-form-field",25),u.TgZ(68,"mat-label"),u._uU(69,"Terminal"),u.qZA(),u.TgZ(70,"mat-select",26),u.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),u.YNc(71,F,2,2,"mat-option",10),u.qZA(),u.qZA(),u.YNc(72,J,6,1,"mat-form-field",27),u.YNc(73,C,6,1,"mat-form-field",27),u.qZA(),u.YNc(74,B,3,2,"div",28),u.YNc(75,R,2,1,"div",28),u.TgZ(76,"div",4),u.TgZ(77,"button",29),u.NdJ("click",function(){return t.rechargeToTerminal()}),u._uU(78,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(79,"div",23),u.qZA(),u.qZA(),u.qZA(),u.YNc(80,D,4,1,"div",30),u.YNc(81,O,7,2,"div",30)),2&e&&(u.xp6(12),u.Q6J("formGroup",t.terminalMasterForm),u.xp6(6),u.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),u.xp6(6),u.Q6J("ngForOf",t.stockists),u.xp6(2),u.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble),u.xp6(2),u.Q6J("disabled",!t.isTerminalUpdatAble),u.xp6(24),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(13),u.Q6J("formGroup",t.terminalLimitForm),u.xp6(6),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(2),u.Q6J("disabled",!t.terminalLimitForm.valid),u.xp6(3),u.Q6J("ngIf",!t.isProduction),u.xp6(1),u.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[Z.SP,Z.uX,T.a8,T.dk,T.kc,T.n5,T.dn,h.xw,h.Wh,h.SQ,h.yH,m._Y,m.JL,m.sg,p.KE,p.hX,x.Nt,m.Fj,m.JJ,m.u,r.O5,v.gD,r.sg,A.lW,q.YE,q.nU,p.TO,b.ey,r.PC,k.Zl,w.Hw,p.R9,I.Rr],styles:[""]}),G)}],V=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.Bz.forChild(P)],o.Bz]}),e}(),H=a(45480),X=a(15566),$=((E=function e(){t(this,e)}).\u0275fac=function(e){return new(e||E)},E.\u0275mod=u.oAB({type:E}),E.\u0275inj=u.cJS({imports:[[r.ez,V,Z.Nh,H.q,X.o9,T.QW,m.u5,m.UX,I.rP,q.JX,v.LD,w.Ps]]}),E)}}])}();