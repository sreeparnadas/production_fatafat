(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[211],{45480:function(e,t,o){"use strict";o.d(t,{q:function(){return r}});var n=o(51095),a=o(49983),i=o(37716);let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[n.ot,a.c]}),e})()},2211:function(e,t,o){"use strict";o.r(t),o.d(t,{PayoutSettingModule:function(){return F}});var n=o(38583),a=o(63423),i=o(51068),r=o(92340),c=o(32789),s=o(88259),u=o.n(s),m=o(37716),l=o(79765),p=o(91841),f=o(84889);let d=(()=>{class e{constructor(e,t){this.http=e,this.errorService=t,this.BASE_API_URL=r.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new l.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(e=>{this.gameTypes=e.data,this.gameTypeSubject.next([...this.gameTypes])})}getGameType(){return[...this.gameTypes]}getGameTypeListener(){return this.gameTypeSubject.asObservable()}}return e.\u0275fac=function(t){return new(t||e)(m.LFG(p.eN),m.LFG(f.T))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=o(5304),h=o(68307);let y=(()=>{class e{constructor(e,t){this.http=e,this.errorService=t,this.BASE_API_URL=r.N.BASE_API_URL,this.gameTypes=[],this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(e=>{this.gameTypes=e.data})}updatePayout(e){return this.http.put(this.BASE_API_URL+"/cPanel/game/payout",e).pipe((0,g.K)(this.errorService.serverError),(0,h.b)(e=>{}))}}return e.\u0275fac=function(t){return new(t||e)(m.LFG(p.eN),m.LFG(f.T))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=o(73535),Z=o(3679),A=o(51095),v=o(98295),x=o(49983),w=o(45396);function S(e,t){1&e&&(m.TgZ(0,"mat-header-cell"),m._uU(1," No. "),m.qZA())}function q(e,t){if(1&e&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.gameTypeId," ")}}function _(e,t){1&e&&(m.TgZ(0,"mat-header-cell"),m._uU(1," Game "),m.qZA())}function N(e,t){if(1&e&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.gameTypeName," ")}}function L(e,t){1&e&&(m.TgZ(0,"mat-header-cell"),m._uU(1," mrp "),m.qZA())}function b(e,t){if(1&e&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.mrp," ")}}function C(e,t){1&e&&(m.TgZ(0,"mat-header-cell"),m._uU(1," winningPrice "),m.qZA())}function U(e,t){if(1&e&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.winningPrice," ")}}function B(e,t){1&e&&(m.TgZ(0,"mat-header-cell"),m._uU(1," commission "),m.qZA())}function Y(e,t){if(1&e&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.commission," ")}}function D(e,t){1&e&&(m.TgZ(0,"mat-header-cell"),m._uU(1," payout "),m.qZA())}function P(e,t){if(1&e&&(m.TgZ(0,"mat-cell"),m.TgZ(1,"mat-form-field",20),m.TgZ(2,"input",21),m.NdJ("ngModelChange",function(e){return t.$implicit.payout=e}),m.qZA(),m.qZA(),m.qZA()),2&e){const e=t.$implicit;m.xp6(2),m.Q6J("value",e.payout)("ngModel",e.payout)}}function I(e,t){1&e&&m._UZ(0,"mat-header-row")}function k(e,t){1&e&&m._UZ(0,"mat-row")}function J(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"div",22),m.TgZ(1,"div",23),m.TgZ(2,"mat-slide-toggle",24),m.NdJ("change",function(){m.CHM(e);const t=m.oxw();return t.showDevArea=!t.showDevArea}),m._uU(3),m.qZA(),m.qZA(),m.qZA()}if(2&e){const e=m.oxw();m.xp6(3),m.Oqu(e.showDevArea?"Hide Developer Area":"Show Developer Area")}}function Q(e,t){if(1&e&&(m.TgZ(0,"div",22),m.TgZ(1,"div",25),m.TgZ(2,"pre"),m._uU(3),m.ALo(4,"json"),m.qZA(),m.qZA(),m._UZ(5,"div",23),m.qZA()),2&e){const e=m.oxw();m.xp6(3),m.hij("\n        gameTypes = ",m.lcZ(4,1,e.gameTypes),"\n      ")}}const j=[{path:"",canActivate:[i.m],component:(()=>{class e{constructor(e,t,o){this.gameTypeService=e,this.payoutSettingService=t,this.authService=o,this.isProduction=r.N.production,this.showDevArea=!1,this.gameTypes=[],this.displayedColumns=["position","gameTypeName","mrp","winningPrice","commission","payout"],this.gameTypes=this.gameTypeService.getGameType(),this.gameTypeService.getGameTypeListener().subscribe(e=>{this.gameTypes=e,this.dataSource=new c.by(this.gameTypes)})}ngOnInit(){}updateTerminal(){u().fire({title:"Confirmation",text:"Do you sure to update payout?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(e=>{if(e.isConfirmed){const e=[];for(const t of this.gameTypes)e.push({gameTypeId:t.gameTypeId,newPayout:t.payout});this.payoutSettingService.updatePayout(e).subscribe(e=>{1===e.success?u().fire({position:"top-end",icon:"success",title:"Payout updated",showConfirmButton:!1,timer:1e3}):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},e=>{console.log("data saving error",e)})}})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(d),m.Y36(y),m.Y36(T.e))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-payout-setting"]],decls:35,vars:6,consts:[[1,"container","pt-5"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container","mb-3"],[1,"offset-5"],["novalidate",""],["payoutSetForm","ngForm"],[3,"dataSource"],["table",""],["matColumnDef","position"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","gameTypeName"],["matColumnDef","mrp"],["matColumnDef","winningPrice"],["matColumnDef","commission"],["matColumnDef","payout"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container","mt-3"],["mat-raised-button","","color","primary","mat-stroked-button","",3,"disabled","click"],["class","d-flex",4,"ngIf"],["floatLabel","never"],["type","number","name","payout","matInput","","placeholder","payout","required","",3,"value","ngModel","ngModelChange"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){if(1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"mark"),m._uU(4,"Set Payout"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(5,"form",3,4),m.TgZ(7,"mat-table",5,6),m.ynx(9,7),m.YNc(10,S,2,0,"mat-header-cell",8),m.YNc(11,q,2,1,"mat-cell",9),m.BQk(),m.ynx(12,10),m.YNc(13,_,2,0,"mat-header-cell",8),m.YNc(14,N,2,1,"mat-cell",9),m.BQk(),m.ynx(15,11),m.YNc(16,L,2,0,"mat-header-cell",8),m.YNc(17,b,2,1,"mat-cell",9),m.BQk(),m.ynx(18,12),m.YNc(19,C,2,0,"mat-header-cell",8),m.YNc(20,U,2,1,"mat-cell",9),m.BQk(),m.ynx(21,13),m.YNc(22,B,2,0,"mat-header-cell",8),m.YNc(23,Y,2,1,"mat-cell",9),m.BQk(),m.ynx(24,14),m.YNc(25,D,2,0,"mat-header-cell",8),m.YNc(26,P,3,2,"mat-cell",9),m.BQk(),m.YNc(27,I,1,0,"mat-header-row",15),m.YNc(28,k,1,0,"mat-row",16),m.qZA(),m.qZA(),m.TgZ(29,"div",17),m.TgZ(30,"div",2),m.TgZ(31,"button",18),m.NdJ("click",function(){return t.updateTerminal()}),m._uU(32,"Save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.YNc(33,J,4,1,"div",19),m.YNc(34,Q,6,3,"div",19)),2&e){const e=m.MAs(6);m.xp6(7),m.Q6J("dataSource",t.dataSource),m.xp6(20),m.Q6J("matHeaderRowDef",t.displayedColumns),m.xp6(1),m.Q6J("matRowDefColumns",t.displayedColumns),m.xp6(3),m.Q6J("disabled",!e.form.valid),m.xp6(2),m.Q6J("ngIf",!t.isProduction),m.xp6(1),m.Q6J("ngIf",!t.isProduction&&t.showDevArea)}},directives:[Z._Y,Z.JL,Z.F,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,A.lW,n.O5,c.ge,c.ev,v.KE,Z.wV,x.Nt,Z.Fj,Z.Q7,Z.JJ,Z.On,c.XQ,c.Gk,w.Rr],pipes:[n.Ts],styles:[""]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[a.Bz.forChild(j)],a.Bz]}),e})();var R=o(67441),E=o(45480);let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[n.ez,G,c.p0,w.rP,R.LD,Z.u5,Z.UX,x.c,E.q]]}),e})()},51068:function(e,t,o){"use strict";o.d(t,{m:function(){return i}});var n=o(37716),a=o(73535);let i=(()=>{class e{constructor(e){this.authService=e}canActivate(e,t){return this.authService.isAdmin()}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(a.e))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);