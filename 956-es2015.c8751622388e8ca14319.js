(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[956],{64956:function(t,e,i){"use strict";i.r(e),i.d(e,{ManualResultModule:function(){return Y}});var n=i(61116),r=i(33464),o=i(58423),a=i(31041),s=i(99713),l=i(22501),u=i.n(l),c=i(529),d=i(43835),m=i(79996),g=i(73982),h=i(35366),p=i(42693),b=i(55959),f=i(47727),v=i(44019),x=i(78035);let Z=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.drawTimes=[],this.drawTimeSubject=new b.xQ,this.BASE_API_URL=c.N.BASE_API_URL,this.http.get(this.BASE_API_URL+"/drawTimes").subscribe(t=>{this.drawTimes=t.data,this.drawTimeSubject.next([...this.drawTimes])})}getAllDrawTimes(){return[...this.drawTimes]}getAllDrawTimesListener(){return this.drawTimeSubject.asObservable()}saveManualResult(t){return this.http.post(this.BASE_API_URL+"/manualResult",t).pipe((0,f.K)(this.errorService.serverError),(0,v.b)(t=>{console.log(t)}))}}return t.\u0275fac=function(e){return new(e||t)(h.LFG(p.eN),h.LFG(x.T))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var A=i(93372),w=i(74975),T=i(67354),C=i(13070),S=i(13841),M=i(84369),I=i(87064),q=i(47217),_=i(79572);function N(t,e){if(1&t&&(h.TgZ(0,"option",20),h._uU(1),h.qZA()),2&t){const t=e.$implicit;h.xp6(1),h.Oqu(t.game_name)}}function y(t,e){if(1&t&&(h.TgZ(0,"mat-option",21),h._uU(1),h.qZA()),2&t){const t=e.$implicit;h.Q6J("value",t.drawId),h.xp6(1),h.hij(" ",t.endTime," ")}}const F=function(t){return{"background-color":t}};function R(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"div",23),h.TgZ(1,"button",26),h.NdJ("click",function(){const e=h.CHM(t).$implicit,i=h.oxw().$implicit,n=h.oxw(),r=h.MAs(8);return n.setManualResultInForm(i.singleNumber,e),n.scroll(r)}),h._uU(2),h.qZA(),h.qZA()}if(2&t){const t=e.$implicit,i=h.oxw().$implicit,n=h.oxw();h.xp6(1),h.s9C("matBadge",i.singleNumber),h.Q6J("matBadgeHidden",n.currentCombinationMatrixSelectedId!=t.numberCombinationId)("ngStyle",h.VKq(4,F,n.currentCombinationMatrixSelectedId===t.numberCombinationId?"rgb(30,64,30)":"#858b8b")),h.xp6(1),h.hij(" ",t.visibleTripleNumber," ")}}function B(t,e){if(1&t&&(h.TgZ(0,"div",22),h.TgZ(1,"div",23),h.TgZ(2,"button",24),h._uU(3),h.qZA(),h.qZA(),h.YNc(4,R,3,6,"div",25),h.qZA()),2&t){const t=e.$implicit,i=e.index,n=h.oxw();h.MGl("id","triple-flex-column-",i,""),h.xp6(2),h.ekj("green",n.isDisabledSingleHeaderButton),h.Q6J("disabled",n.isDisabledSingleHeaderButton),h.xp6(1),h.hij(" ",t.singleNumber," "),h.xp6(1),h.Q6J("ngForOf",t.numberCombinations)}}function k(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"div",27),h.TgZ(1,"div",28),h.TgZ(2,"mat-slide-toggle",29),h.NdJ("change",function(){h.CHM(t);const e=h.oxw();return e.showDevArea=!e.showDevArea}),h._uU(3),h.qZA(),h.qZA(),h.qZA()}if(2&t){const t=h.oxw();h.xp6(3),h.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function U(t,e){if(1&t&&(h.TgZ(0,"div",27),h.TgZ(1,"div",28),h.TgZ(2,"pre"),h._uU(3),h.ALo(4,"json"),h.qZA(),h.qZA(),h.TgZ(5,"div",30),h.TgZ(6,"pre"),h._uU(7),h.ALo(8,"json"),h.qZA(),h.qZA(),h.TgZ(9,"div",28),h._UZ(10,"pre"),h.qZA(),h.qZA()),2&t){const t=h.oxw();h.xp6(3),h.hij("        numberCombinationMatrix = ",h.lcZ(4,2,t.numberCombinationMatrix),"\n      "),h.xp6(4),h.hij("       manualResultForm = ",h.lcZ(8,4,t.manualResultForm.value),"\n      ")}}const O=[{path:"",canActivate:[o.m],component:(()=>{class t{constructor(t,e,i,r,o,s,l){this.http=t,this.manualResultService=e,this.gameService=i,this.playGameService=r,this.route=o,this.router=s,this.commonService=l,this.BASE_API_URL=c.N.BASE_API_URL,this.drawTimes=[],this.numberCombinationMatrix=[],this.currentState="initial",this.isProduction=c.N.production,this.showDevArea=!1,this.isDisabledSingleHeaderButton=!0,this.deviceXs=this.commonService.deviceXs;const u=new Date,d=(0,n.p6)(u,"yyyy-MM-dd","en");this.manualResultForm=new a.cw({id:new a.NI(null),drawMasterId:new a.NI(null,[a.kI.required]),numberCombinationId:new a.NI(null,[a.kI.required]),gameId:new a.NI(null,[a.kI.required]),single:new a.NI(null),triple:new a.NI(null),transaction_date:new a.NI(d)})}ngOnInit(){this.router.events.pipe((0,d.h)(t=>t instanceof r.m2),(0,m.U)(()=>this.route),(0,m.U)(t=>{for(;t.firstChild;)t=t.firstChild;return t}),(0,d.h)(t=>"primary"===t.outlet),(0,g.zg)(t=>t.data)).subscribe(t=>console.log("data",t));const t=new Date,e=(0,n.p6)(t,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data}),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(t=>{this.numberCombinationMatrix=t,this.copyNumberMatrix=JSON.parse(JSON.stringify(this.numberCombinationMatrix))}),this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(t=>{this.games=t,console.log("ts",this.games)}),console.log(this.games)}iscurrentCombinationMatrixSelected(t){return t===this.currentCombinationMatrixSelectedId}setManualResultInForm(t,e){this.manualResultForm.patchValue({numberCombinationId:e.numberCombinationId,single:t,triple:e.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=e.numberCombinationId}getTrippleButtonStyle(){return{"background-color":"red !important"}}gotoTop(){window.scroll({top:0,left:0,behavior:"smooth"})}scroll(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}changeState(){this.currentState="initial"===this.currentState?"final":"initial"}saveManualResult(){this.manualResultForm.value.gameId=1,this.validatorError=null,u().fire({title:"Confirmation",text:"Do you sure to save this result?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(t=>{t.isConfirmed&&this.manualResultService.saveManualResult(this.manualResultForm.value).subscribe(t=>{1===t.success?(u().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}),this.manualResultForm.reset(),this.currentCombinationMatrixSelectedId=-1):(this.validatorError=t.error,u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3}))},t=>{console.log("data saving error",t)})})}gameDatepickerChange(t){const e=(0,n.p6)(this.manualResultForm.value.transaction_date,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data})}}return t.\u0275fac=function(e){return new(e||t)(h.Y36(p.eN),h.Y36(Z),h.Y36(A.h),h.Y36(w.M),h.Y36(r.gz),h.Y36(r.F0),h.Y36(T.v))},t.\u0275cmp=h.Xpm({type:t,selectors:[["app-manual-result"]],decls:31,vars:9,consts:[[3,"ngClass"],[1,"d-flex",2,"height","50px","border-radius","10px","padding-top","20px","padding-left","50px"],["id","1","name","1",1,"btn","btn-warning"],["value","volvo",4,"ngFor","ngForOf"],[3,"formGroup"],[1,"d-flex","flex-column","bd-highlight"],[1,"p-2","bd-highlight"],["targetDiv",""],["formControlName","drawMasterId","placeholder","Category"],[3,"value",4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],[1,"card-header"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["type","button",1,"btn","btn-primary","mt-2",3,"click"],[1,"d-flex","flex-row","bd-highlight"],["class","d-flex flex-column",3,"id",4,"ngFor","ngForOf"],["mat-fab","",1,"coder-fab",3,"click"],[1,"bi","bi-arrow-up-circle"],["class","d-flex",4,"ngIf"],["value","volvo"],[3,"value"],[1,"d-flex","flex-column",3,"id"],[1,"p-1"],[1,"single-number-button","coder-fab",3,"disabled"],["class","p-1",4,"ngFor","ngForOf"],["mat-fab","","aria-label","",1,"coder-fab",3,"matBadge","matBadgeHidden","ngStyle","click"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.TgZ(2,"select",2),h.YNc(3,N,2,1,"option",3),h.qZA(),h.qZA(),h.TgZ(4,"form",4),h.TgZ(5,"div",5),h.TgZ(6,"div",6),h.TgZ(7,"div",null,7),h.TgZ(9,"mat-form-field"),h.TgZ(10,"mat-label"),h._uU(11,"Draw time"),h.qZA(),h.TgZ(12,"mat-select",8),h.YNc(13,y,2,2,"mat-option",9),h.qZA(),h.qZA(),h.qZA(),h.TgZ(14,"div"),h.TgZ(15,"div",10),h.TgZ(16,"div",11),h._uU(17," Upcoming result "),h.qZA(),h.TgZ(18,"ul",12),h.TgZ(19,"li",13),h._uU(20),h.qZA(),h.TgZ(21,"li",13),h._uU(22),h.qZA(),h.qZA(),h.qZA(),h.TgZ(23,"button",14),h.NdJ("click",function(){return e.saveManualResult()}),h._uU(24,"Save"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(25,"div",15),h.YNc(26,B,5,6,"div",16),h.qZA(),h.qZA(),h.qZA(),h.TgZ(27,"button",17),h.NdJ("click",function(){h.CHM(t);const i=h.MAs(8);return e.scroll(i)}),h._UZ(28,"i",18),h.qZA(),h.qZA(),h.YNc(29,k,4,1,"div",19),h.YNc(30,U,11,6,"div",19)}2&t&&(h.Q6J("ngClass",e.deviceXs?"mobile":"desktop"),h.xp6(3),h.Q6J("ngForOf",e.games),h.xp6(1),h.Q6J("formGroup",e.manualResultForm),h.xp6(9),h.Q6J("ngForOf",e.drawTimes),h.xp6(7),h.Oqu(e.manualResultForm.value.triple),h.xp6(2),h.Oqu(e.manualResultForm.value.single),h.xp6(4),h.Q6J("ngForOf",e.numberCombinationMatrix),h.xp6(3),h.Q6J("ngIf",!e.isProduction),h.xp6(1),h.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[n.mk,n.sg,a._Y,a.JL,a.sg,C.KE,C.hX,S.gD,a.JJ,a.u,M.lW,n.O5,a.YN,a.Kr,I.ey,q.k,n.PC,_.Rr],pipes:[n.Ts],styles:[".triple-number-button[_ngcontent-%COMP%]:hover{background-color:#676c67!important}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.scroll-arrow[_ngcontent-%COMP%]{border-radius:50%}.green[_ngcontent-%COMP%]{background-color:#f766cb;height:55px;width:55px;border-radius:30px;color:#fff}"],data:{animation:[(0,s.X$)("changeDivSize",[(0,s.SB)("initial",(0,s.oB)({backgroundColor:"green",width:"100px",height:"100px"})),(0,s.SB)("final",(0,s.oB)({backgroundColor:"red",width:"200px",height:"200px"})),(0,s.eR)("initial=>final",(0,s.jt)("1500ms")),(0,s.eR)("final=>initial",(0,s.jt)("1000ms"))])]}}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[r.Bz.forChild(O)],r.Bz]}),t})();var D=i(22797),J=i(9550),L=i(69024);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[n.ez,P,_.rP,D.QW,a.u5,C.lN,a.UX,J.c,L.FA,S.LD,q.g,M.ot,_.rP]]}),t})()},58423:function(t,e,i){"use strict";i.d(e,{m:function(){return o}});var n=i(35366),r=i(4612);let o=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(r.e))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);