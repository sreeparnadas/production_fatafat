(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[623],{45480:function(t,e,i){"use strict";i.d(e,{q:function(){return o}});var r=i(51095),a=i(49983),n=i(37716);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ot,a.c]}),t})()},78623:function(t,e,i){"use strict";i.r(e),i.d(e,{MasterTerminalModule:function(){return P}});var r=i(38583),a=i(63423),n=i(92340),o=i(3679),s=i(88259),l=i.n(s),m=i(37716),c=i(12088),u=i(12173),d=i(73535),f=i(65939),g=i(93738),Z=i(35618),h=i(98295),T=i(49983),p=i(67441),x=i(51095),A=i(11494),q=i(72458),b=i(88030),v=i(76627),I=i(45396);function w(t,e){1&t&&(m.TgZ(0,"mat-error"),m._uU(1,"This field is Required"),m.qZA())}function k(t,e){if(1&t&&(m.TgZ(0,"mat-error"),m._uU(1),m.qZA()),2&t){const t=m.oxw(2);m.xp6(1),m.hij("Minimum length of name is ",t.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function N(t,e){if(1&t&&(m.TgZ(0,"div",31),m.YNc(1,w,2,0,"mat-error",32),m.YNc(2,k,2,1,"mat-error",32),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.required),m.xp6(1),m.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.minlength)}}function U(t,e){if(1&t&&(m.TgZ(0,"mat-option",33),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.userId),m.xp6(1),m.hij(" ",t.userName," ")}}function L(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"tr",34),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m.TgZ(12,"i",35),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().editTerminal(e)}),m.qZA(),m.qZA(),m.qZA()}if(2&t){const t=e.$implicit,i=e.index,r=m.oxw();m.Q6J("ngStyle",r.getBackgroundColor(i)),m.xp6(2),m.Oqu(i+1),m.xp6(2),m.Oqu(t.terminalName),m.xp6(2),m.Oqu(t.pin),m.xp6(2),m.Oqu(t.balance),m.xp6(2),m.Oqu(t.stockist.userName)}}function _(t,e){if(1&t&&(m.TgZ(0,"mat-option",33),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.terminalId),m.xp6(1),m.hij(" ",t.pin," ")}}function y(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",36),m.TgZ(1,"mat-label"),m._uU(2,"Name"),m.qZA(),m._UZ(3,"input",37),m.TgZ(4,"mat-icon",38),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.Q6J("value",t.selectedTerminal.terminalName)}}function F(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",36),m.TgZ(1,"mat-label"),m._uU(2,"Current balance"),m.qZA(),m._UZ(3,"input",39),m.TgZ(4,"mat-icon",38),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.Q6J("value",t.selectedTerminal.balance)}}function J(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",36),m.TgZ(1,"mat-label"),m._uU(2,"Stockist owner"),m.qZA(),m._UZ(3,"input",37),m.TgZ(4,"mat-icon",38),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){const t=m.oxw(2);m.xp6(3),m.Q6J("value",t.selectedTerminal.stockist.userName)}}function C(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",36),m.TgZ(1,"mat-label"),m._uU(2,"Stockist balance"),m.qZA(),m._UZ(3,"input",39),m.TgZ(4,"mat-icon",38),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){const t=m.oxw(2);m.xp6(3),m.Q6J("value",t.selectedTerminal.stockist.balance)}}function S(t,e){if(1&t&&(m.TgZ(0,"div",4),m.YNc(1,J,6,1,"mat-form-field",27),m.YNc(2,C,6,1,"mat-form-field",27),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.selectedTerminal),m.xp6(1),m.Q6J("ngIf",t.selectedTerminal)}}function Q(t,e){if(1&t&&(m.TgZ(0,"mat-error"),m._uU(1),m.qZA()),2&t){const t=m.oxw(3);m.xp6(1),m.hij(" Amount should not exceed ",t.terminalLimitForm.controls.amount.errors.max.max," ")}}function B(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",41),m.TgZ(1,"mat-label"),m._uU(2,"Recharge amount"),m.qZA(),m._UZ(3,"input",42),m.TgZ(4,"mat-icon",38),m._uU(5," money"),m.qZA(),m.YNc(6,Q,2,1,"mat-error",32),m.qZA()),2&t){const t=m.oxw(2);m.xp6(6),m.Q6J("ngIf",t.terminalLimitForm.get("amount").hasError("max"))}}function M(t,e){if(1&t&&(m.TgZ(0,"div",4),m.YNc(1,B,7,1,"mat-form-field",40),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.selectedTerminal)}}function Y(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"div",43),m.TgZ(1,"div",44),m.TgZ(2,"mat-slide-toggle",45),m.NdJ("change",function(){m.CHM(t);const e=m.oxw();return e.showDevArea=!e.showDevArea}),m._uU(3),m.qZA(),m.qZA(),m.qZA()}if(2&t){const t=m.oxw();m.xp6(3),m.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function R(t,e){if(1&t&&(m.TgZ(0,"div",43),m.TgZ(1,"div",46),m.TgZ(2,"pre"),m._uU(3),m._uU(4),m._uU(5,"\n      "),m.qZA(),m.qZA(),m._UZ(6,"div",44),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.hij("        ",t.terminalLimitForm.valid,"\n      "),m.xp6(1),m.hij("\n        terminalForm = ",t.terminalMasterForm.value,"\n      ")}}function D(t,e,i){return(t<e?-1:1)*(i?1:-1)}const O=[{path:"",component:(()=>{class t{constructor(t,e,i){this.masterTerminalService=t,this.masterStockistService=e,this.authService=i,this.isProduction=n.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new o.cw({id:new o.NI(null),terminalName:new o.NI(null,[o.kI.required,o.kI.minLength(2)]),stockistId:new o.NI(null,[o.kI.required])}),this.terminalLimitForm=new o.cw({beneficiaryUid:new o.NI(null,[o.kI.required]),amount:new o.NI(null,[o.kI.required,o.kI.max(0)])})}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(t=>{this.terminals=t,this.sortedTerminalList=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t})}onTerminalSelect(t){this.selectedTerminal=this.terminals.find(e=>e.terminalId===t.value),this.terminalLimitForm.controls.amount.setValidators([o.kI.max(this.selectedTerminal.stockist.balance)])}editTerminal(t){const e=this.terminals.findIndex(e=>e.terminalId===t.terminalId);this.highLightedRowIndex=e,this.terminalMasterForm.patchValue({id:t.terminalId,terminalName:t.terminalName,stockistId:t.stockist.userId}),this.isTerminalUpdatAble=!0}updateTerminal(){l().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.updateTerminal({terminalId:this.terminalMasterForm.value.id,terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId}).subscribe(t=>{1===t.success?(this.sortedTerminalList[this.highLightedRowIndex]=t.data,this.terminalMasterForm.reset(),this.isTerminalUpdatAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),l().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{})})}createNewTerminal(){l().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveNewTerminal({terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId}).subscribe(t=>{1===t.success?(this.sortedTerminalList.unshift(t.data),this.highLightedRowIndex=0,this.terminalMasterForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},5e3),l().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterTerminalForm(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}sortData(t){const e=this.terminals.slice();this.sortedTerminalList=t.active&&""!==t.direction?e.sort((e,i)=>{const r="asc"===t.direction;switch(t.active){case"terminalName":return D(e.terminalName,i.terminalName,r);case"stockistName":return D(e.stockist.userName,i.stockist.userName,r);case"balance":return D(e.balance,i.balance,r);default:return 0}}):e}rechargeToTerminal(){l().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveTerminalBalance({beneficiaryUid:this.terminalLimitForm.value.beneficiaryUid,stockistId:this.selectedTerminal.stockist.userId,amount:this.terminalLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.terminals.findIndex(t=>t.terminalId===e.terminalId);this.terminals[i].balance=e.balance,this.terminals[i].stockist.balance=e.stockist.balance,this.sortedTerminalList[i].balance=e.balance,this.sortedTerminalList[i].stockist.balance=e.stockist.balance,this.highLightedRowIndex=i,this.terminalLimitForm.controls.amount.setValidators([o.kI.max(e.stockist.balance)]),this.terminalLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),l().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{})})}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(c.S),m.Y36(u.E),m.Y36(d.e))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-master-terminal"]],decls:82,vars:15,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["formControlName","stockistId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(m.TgZ(0,"mat-tab-group"),m.TgZ(1,"mat-tab",0),m.TgZ(2,"div",1),m.TgZ(3,"div",2),m.TgZ(4,"mat-card"),m.TgZ(5,"mat-card-header"),m._UZ(6,"div",3),m.TgZ(7,"mat-card-title"),m._uU(8,"New Terminal Form"),m.qZA(),m.qZA(),m.TgZ(9,"mat-card-content"),m.TgZ(10,"div",4),m.TgZ(11,"div",5),m.TgZ(12,"form",6),m.TgZ(13,"div",4),m.TgZ(14,"mat-form-field",5),m.TgZ(15,"mat-label"),m._uU(16,"Terminal Name"),m.qZA(),m._UZ(17,"input",7),m.YNc(18,N,3,2,"div",8),m.qZA(),m.qZA(),m.TgZ(19,"div",4),m.TgZ(20,"mat-form-field",5),m.TgZ(21,"mat-label"),m._uU(22,"Stockist"),m.qZA(),m.TgZ(23,"mat-select",9),m.YNc(24,U,2,2,"mat-option",10),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(25,"div",4),m.TgZ(26,"button",11),m.NdJ("click",function(){return e.createNewTerminal()}),m._uU(27,"Create"),m.qZA(),m.TgZ(28,"button",11),m.NdJ("click",function(){return e.updateTerminal()}),m._uU(29,"Update"),m.qZA(),m.TgZ(30,"button",12),m.NdJ("click",function(){return e.clearMasterTerminalForm()}),m._uU(31,"clear"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(32,"div",13),m.TgZ(33,"table",14),m.NdJ("matSortChange",function(t){return e.sortData(t)}),m.TgZ(34,"thead"),m.TgZ(35,"tr"),m.TgZ(36,"th",15),m._uU(37,"Terminal List"),m.qZA(),m.qZA(),m.TgZ(38,"tr"),m.TgZ(39,"th"),m._uU(40,"Id"),m.qZA(),m.TgZ(41,"th",16),m._uU(42,"Terminal name"),m.qZA(),m.TgZ(43,"th",17),m._uU(44,"Pin"),m.qZA(),m.TgZ(45,"th",18),m._uU(46,"Balance"),m.qZA(),m.TgZ(47,"th",19),m._uU(48,"Stockist"),m.qZA(),m.TgZ(49,"th",20),m._uU(50,"Edit"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(51,"tbody"),m.YNc(52,L,13,6,"tr",21),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(53,"mat-tab",22),m.TgZ(54,"div",1),m._UZ(55,"div",23),m.TgZ(56,"div",24),m.TgZ(57,"mat-card"),m.TgZ(58,"mat-card-header"),m._UZ(59,"div",3),m.TgZ(60,"mat-card-title"),m._uU(61,"Recharge Terminal"),m.qZA(),m.qZA(),m.TgZ(62,"mat-card-content"),m.TgZ(63,"div",4),m.TgZ(64,"div",5),m.TgZ(65,"form",6),m.TgZ(66,"div",4),m.TgZ(67,"mat-form-field",25),m.TgZ(68,"mat-label"),m._uU(69,"Terminal"),m.qZA(),m.TgZ(70,"mat-select",26),m.NdJ("selectionChange",function(t){return e.onTerminalSelect(t)}),m.YNc(71,_,2,2,"mat-option",10),m.qZA(),m.qZA(),m.YNc(72,y,6,1,"mat-form-field",27),m.YNc(73,F,6,1,"mat-form-field",27),m.qZA(),m.YNc(74,S,3,2,"div",28),m.YNc(75,M,2,1,"div",28),m.TgZ(76,"div",4),m.TgZ(77,"button",29),m.NdJ("click",function(){return e.rechargeToTerminal()}),m._uU(78,"Save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(79,"div",23),m.qZA(),m.qZA(),m.qZA(),m.YNc(80,Y,4,1,"div",30),m.YNc(81,R,7,2,"div",30)),2&t&&(m.xp6(12),m.Q6J("formGroup",e.terminalMasterForm),m.xp6(6),m.Q6J("ngIf",!e.terminalMasterForm.get("terminalName").valid&&e.terminalMasterForm.get("terminalName").touched),m.xp6(6),m.Q6J("ngForOf",e.stockists),m.xp6(2),m.Q6J("disabled",!e.terminalMasterForm.valid||e.isTerminalUpdatAble),m.xp6(2),m.Q6J("disabled",!e.isTerminalUpdatAble),m.xp6(24),m.Q6J("ngForOf",e.sortedTerminalList),m.xp6(13),m.Q6J("formGroup",e.terminalLimitForm),m.xp6(6),m.Q6J("ngForOf",e.sortedTerminalList),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(2),m.Q6J("disabled",!e.terminalLimitForm.valid),m.xp6(3),m.Q6J("ngIf",!e.isProduction),m.xp6(1),m.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[f.SP,f.uX,g.a8,g.dk,g.kc,g.n5,g.dn,Z.xw,Z.Wh,Z.SQ,Z.yH,o._Y,o.JL,o.sg,h.KE,h.hX,T.Nt,o.Fj,o.JJ,o.u,r.O5,p.gD,r.sg,x.lW,A.YE,A.nU,h.TO,q.ey,r.PC,b.Zl,v.Hw,h.R9,I.Rr],styles:[""]}),t})()}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),t})();var G=i(45480),E=i(15566);let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[r.ez,j,f.Nh,G.q,E.o9,g.QW,o.u5,o.UX,I.rP,A.JX,p.LD,v.Ps]]}),t})()}}]);