(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[67],{1887:function(t,e,i){"use strict";i.d(e,{q:function(){return o}});var r=i(84369),a=i(9550),n=i(35366);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ot,a.c]}),t})()},87067:function(t,e,i){"use strict";i.r(e),i.d(e,{MasterTerminalModule:function(){return V}});var r=i(61116),a=i(33464),n=i(58423),o=i(529),s=i(31041),l=i(22501),m=i.n(l),c=i(35366),u=i(67011),d=i(82859),g=i(4612),f=i(57173),h=i(22797),Z=i(35965),T=i(13070),p=i(9550),x=i(13841),A=i(84369),q=i(59241),v=i(87064),b=i(41293),I=i(77307),w=i(79572);function k(t,e){1&t&&(c.TgZ(0,"mat-error"),c._uU(1,"This field is Required"),c.qZA())}function N(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c._uU(1),c.qZA()),2&t){const t=c.oxw(2);c.xp6(1),c.hij("Minimum length of name is ",t.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function U(t,e){if(1&t&&(c.TgZ(0,"div",31),c.YNc(1,k,2,0,"mat-error",32),c.YNc(2,N,2,1,"mat-error",32),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.required),c.xp6(1),c.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.minlength)}}function L(t,e){if(1&t&&(c.TgZ(0,"mat-option",33),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.userId),c.xp6(1),c.hij(" ",t.userName," ")}}function _(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr",34),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c.TgZ(12,"i",35),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().editTerminal(e)}),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit,i=e.index,r=c.oxw();c.Q6J("ngStyle",r.getBackgroundColor(i)),c.xp6(2),c.Oqu(i+1),c.xp6(2),c.Oqu(t.terminalName),c.xp6(2),c.Oqu(t.pin),c.xp6(2),c.Oqu(t.balance),c.xp6(2),c.Oqu(t.stockist.userName)}}function y(t,e){if(1&t&&(c.TgZ(0,"mat-option",33),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.terminalId),c.xp6(1),c.hij(" ",t.pin," ")}}function F(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",36),c.TgZ(1,"mat-label"),c._uU(2,"Name"),c.qZA(),c._UZ(3,"input",37),c.TgZ(4,"mat-icon",38),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.terminalName)}}function J(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",36),c.TgZ(1,"mat-label"),c._uU(2,"Current balance"),c.qZA(),c._UZ(3,"input",39),c.TgZ(4,"mat-icon",38),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.balance)}}function C(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",36),c.TgZ(1,"mat-label"),c._uU(2,"Stockist owner"),c.qZA(),c._UZ(3,"input",37),c.TgZ(4,"mat-icon",38),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.userName)}}function S(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",36),c.TgZ(1,"mat-label"),c._uU(2,"Stockist balance"),c.qZA(),c._UZ(3,"input",39),c.TgZ(4,"mat-icon",38),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.balance)}}function Q(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,C,6,1,"mat-form-field",27),c.YNc(2,S,6,1,"mat-form-field",27),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal),c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function B(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c._uU(1),c.qZA()),2&t){const t=c.oxw(3);c.xp6(1),c.hij(" Amount should not exceed ",t.terminalLimitForm.controls.amount.errors.max.max," ")}}function M(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",41),c.TgZ(1,"mat-label"),c._uU(2,"Recharge amount"),c.qZA(),c._UZ(3,"input",42),c.TgZ(4,"mat-icon",38),c._uU(5," money"),c.qZA(),c.YNc(6,B,2,1,"mat-error",32),c.qZA()),2&t){const t=c.oxw(2);c.xp6(6),c.Q6J("ngIf",t.terminalLimitForm.get("amount").hasError("max"))}}function Y(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,M,7,1,"mat-form-field",40),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function D(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",43),c.TgZ(1,"div",44),c.TgZ(2,"mat-slide-toggle",45),c.NdJ("change",function(){c.CHM(t);const e=c.oxw();return e.showDevArea=!e.showDevArea}),c._uU(3),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=c.oxw();c.xp6(3),c.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function R(t,e){if(1&t&&(c.TgZ(0,"div",43),c.TgZ(1,"div",46),c.TgZ(2,"pre"),c._uU(3),c._uU(4),c.ALo(5,"json"),c._uU(6,"\n      "),c.qZA(),c.qZA(),c._UZ(7,"div",44),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.hij("        ",t.terminalLimitForm.valid,"\n        "),c.xp6(1),c.hij("\n        terminalForm = ",c.lcZ(5,2,t.terminalMasterForm.value),"\n")}}function O(t,e,i){return(t<e?-1:1)*(i?1:-1)}const j=[{path:"",canActivate:[n.m],component:(()=>{class t{constructor(t,e,i){this.masterTerminalService=t,this.masterStockistService=e,this.authService=i,this.isProduction=o.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new s.cw({id:new s.NI(null),terminalName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),stockistId:new s.NI(null,[s.kI.required])}),this.terminalLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.max(0)])})}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(t=>{this.terminals=t,this.sortedTerminalList=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t,console.log(this.stockists,"from terminal")})}onTerminalSelect(t){this.selectedTerminal=this.terminals.find(e=>e.terminalId===t.value),this.terminalLimitForm.controls.amount.setValidators([s.kI.max(this.selectedTerminal.stockist.balance)])}editTerminal(t){const e=this.terminals.findIndex(e=>e.terminalId===t.terminalId);this.highLightedRowIndex=e,this.terminalMasterForm.patchValue({id:t.terminalId,terminalName:t.terminalName,stockistId:t.stockist.userId}),this.isTerminalUpdatAble=!0}updateTerminal(){m().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.updateTerminal({terminalId:this.terminalMasterForm.value.id,terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId}).subscribe(t=>{1===t.success?(this.sortedTerminalList[this.highLightedRowIndex]=t.data,this.terminalMasterForm.reset(),this.isTerminalUpdatAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}createNewTerminal(){m().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveNewTerminal({terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId}).subscribe(t=>{1===t.success?(this.sortedTerminalList.unshift(t.data),this.highLightedRowIndex=0,this.terminalMasterForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterTerminalForm(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}sortData(t){const e=this.terminals.slice();this.sortedTerminalList=t.active&&""!==t.direction?e.sort((e,i)=>{const r="asc"===t.direction;switch(t.active){case"terminalName":return O(e.terminalName,i.terminalName,r);case"stockistName":return O(e.stockist.userName,i.stockist.userName,r);case"balance":return O(e.balance,i.balance,r);default:return 0}}):e}rechargeToTerminal(){m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveTerminalBalance({beneficiaryUid:this.terminalLimitForm.value.beneficiaryUid,stockistId:this.selectedTerminal.stockist.userId,amount:this.terminalLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.terminals.findIndex(t=>t.terminalId===e.terminalId);this.terminals[i].balance=e.balance,this.terminals[i].stockist.balance=e.stockist.balance,this.sortedTerminalList[i].balance=e.balance,this.sortedTerminalList[i].stockist.balance=e.stockist.balance,this.highLightedRowIndex=i,this.terminalLimitForm.controls.amount.setValidators([s.kI.max(e.stockist.balance)]),this.terminalLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.S),c.Y36(d.E),c.Y36(g.e))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-master-terminal"]],decls:82,vars:15,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["formControlName","stockistId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(c.TgZ(0,"mat-tab-group"),c.TgZ(1,"mat-tab",0),c.TgZ(2,"div",1),c.TgZ(3,"div",2),c.TgZ(4,"mat-card"),c.TgZ(5,"mat-card-header"),c._UZ(6,"div",3),c.TgZ(7,"mat-card-title"),c._uU(8,"New Terminal Form"),c.qZA(),c.qZA(),c.TgZ(9,"mat-card-content"),c.TgZ(10,"div",4),c.TgZ(11,"div",5),c.TgZ(12,"form",6),c.TgZ(13,"div",4),c.TgZ(14,"mat-form-field",5),c.TgZ(15,"mat-label"),c._uU(16,"Terminal Name"),c.qZA(),c._UZ(17,"input",7),c.YNc(18,U,3,2,"div",8),c.qZA(),c.qZA(),c.TgZ(19,"div",4),c.TgZ(20,"mat-form-field",5),c.TgZ(21,"mat-label"),c._uU(22,"Stockist"),c.qZA(),c.TgZ(23,"mat-select",9),c.YNc(24,L,2,2,"mat-option",10),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"div",4),c.TgZ(26,"button",11),c.NdJ("click",function(){return e.createNewTerminal()}),c._uU(27,"Create"),c.qZA(),c.TgZ(28,"button",11),c.NdJ("click",function(){return e.updateTerminal()}),c._uU(29,"Update"),c.qZA(),c.TgZ(30,"button",12),c.NdJ("click",function(){return e.clearMasterTerminalForm()}),c._uU(31,"clear"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(32,"div",13),c.TgZ(33,"table",14),c.NdJ("matSortChange",function(t){return e.sortData(t)}),c.TgZ(34,"thead"),c.TgZ(35,"tr"),c.TgZ(36,"th",15),c._uU(37,"Terminal List"),c.qZA(),c.qZA(),c.TgZ(38,"tr"),c.TgZ(39,"th"),c._uU(40,"Id"),c.qZA(),c.TgZ(41,"th",16),c._uU(42,"Terminal name"),c.qZA(),c.TgZ(43,"th",17),c._uU(44,"Pin"),c.qZA(),c.TgZ(45,"th",18),c._uU(46,"Balance"),c.qZA(),c.TgZ(47,"th",19),c._uU(48,"Stockist"),c.qZA(),c.TgZ(49,"th",20),c._uU(50,"Edit"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(51,"tbody"),c.YNc(52,_,13,6,"tr",21),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(53,"mat-tab",22),c.TgZ(54,"div",1),c._UZ(55,"div",23),c.TgZ(56,"div",24),c.TgZ(57,"mat-card"),c.TgZ(58,"mat-card-header"),c._UZ(59,"div",3),c.TgZ(60,"mat-card-title"),c._uU(61,"Recharge Terminal"),c.qZA(),c.qZA(),c.TgZ(62,"mat-card-content"),c.TgZ(63,"div",4),c.TgZ(64,"div",5),c.TgZ(65,"form",6),c.TgZ(66,"div",4),c.TgZ(67,"mat-form-field",25),c.TgZ(68,"mat-label"),c._uU(69,"Terminal"),c.qZA(),c.TgZ(70,"mat-select",26),c.NdJ("selectionChange",function(t){return e.onTerminalSelect(t)}),c.YNc(71,y,2,2,"mat-option",10),c.qZA(),c.qZA(),c.YNc(72,F,6,1,"mat-form-field",27),c.YNc(73,J,6,1,"mat-form-field",27),c.qZA(),c.YNc(74,Q,3,2,"div",28),c.YNc(75,Y,2,1,"div",28),c.TgZ(76,"div",4),c.TgZ(77,"button",29),c.NdJ("click",function(){return e.rechargeToTerminal()}),c._uU(78,"Save"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(79,"div",23),c.qZA(),c.qZA(),c.qZA(),c.YNc(80,D,4,1,"div",30),c.YNc(81,R,8,4,"div",30)),2&t&&(c.xp6(12),c.Q6J("formGroup",e.terminalMasterForm),c.xp6(6),c.Q6J("ngIf",!e.terminalMasterForm.get("terminalName").valid&&e.terminalMasterForm.get("terminalName").touched),c.xp6(6),c.Q6J("ngForOf",e.stockists),c.xp6(2),c.Q6J("disabled",!e.terminalMasterForm.valid||e.isTerminalUpdatAble),c.xp6(2),c.Q6J("disabled",!e.isTerminalUpdatAble),c.xp6(24),c.Q6J("ngForOf",e.sortedTerminalList),c.xp6(13),c.Q6J("formGroup",e.terminalLimitForm),c.xp6(6),c.Q6J("ngForOf",e.sortedTerminalList),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(2),c.Q6J("disabled",!e.terminalLimitForm.valid),c.xp6(3),c.Q6J("ngIf",!e.isProduction),c.xp6(1),c.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[f.SP,f.uX,h.a8,h.dk,h.kc,h.n5,h.dn,Z.xw,Z.Wh,Z.SQ,Z.yH,s._Y,s.JL,s.sg,T.KE,T.hX,p.Nt,s.Fj,s.JJ,s.u,r.O5,x.gD,r.sg,A.lW,q.YE,q.nU,T.TO,v.ey,r.PC,b.Zl,I.Hw,T.R9,w.Rr],pipes:[r.Ts],styles:[""]}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(j)],a.Bz]}),t})();var E=i(1887),P=i(77154);let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.ez,G,f.Nh,E.q,P.o9,h.QW,s.u5,s.UX,w.rP,q.JX,x.LD,I.Ps]]}),t})()},58423:function(t,e,i){"use strict";i.d(e,{m:function(){return n}});var r=i(35366),a=i(4612);let n=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(a.e))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);