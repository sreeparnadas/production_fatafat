(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[956],{64956:function(t,e,i){"use strict";i.r(e),i.d(e,{ManualResultModule:function(){return D}});var n=i(61116),r=i(33464),o=i(58423),a=i(31041),s=i(99713),l=i(22501),u=i.n(l),c=i(529),d=i(43835),m=i(79996),g=i(73982),p=i(35366),h=i(42693),b=i(55959),f=i(47727),v=i(44019),Z=i(78035);let A=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.drawTimes=[],this.drawTimeSubject=new b.xQ,this.BASE_API_URL=c.N.BASE_API_URL,this.http.get(this.BASE_API_URL+"/drawTimes").subscribe(t=>{this.drawTimes=t.data,this.drawTimeSubject.next([...this.drawTimes])})}getAllDrawTimes(){return[...this.drawTimes]}getAllDrawTimesListener(){return this.drawTimeSubject.asObservable()}saveManualResult(t){return this.http.post(this.BASE_API_URL+"/manualResult",t).pipe((0,f.K)(this.errorService.serverError),(0,v.b)(t=>{console.log(t)}))}}return t.\u0275fac=function(e){return new(e||t)(p.LFG(h.eN),p.LFG(Z.T))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=i(74975),x=i(67354),T=i(13070),C=i(13841),M=i(84369),S=i(87064),_=i(47217),q=i(79572);function I(t,e){if(1&t&&(p.TgZ(0,"mat-option",17),p._uU(1),p.qZA()),2&t){const t=e.$implicit;p.Q6J("value",t.drawId),p.xp6(1),p.hij(" ",t.endTime," ")}}const y=function(t){return{"background-color":t}};function N(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"div",19),p.TgZ(1,"button",22),p.NdJ("click",function(){const e=p.CHM(t).$implicit,i=p.oxw().$implicit,n=p.oxw(),r=p.MAs(5);return n.setManualResultInForm(i.singleNumber,e),n.scroll(r)}),p._uU(2),p.qZA(),p.qZA()}if(2&t){const t=e.$implicit,i=p.oxw().$implicit,n=p.oxw();p.xp6(1),p.s9C("matBadge",i.singleNumber),p.Q6J("matBadgeHidden",n.currentCombinationMatrixSelectedId!=t.numberCombinationId)("ngStyle",p.VKq(4,y,n.currentCombinationMatrixSelectedId===t.numberCombinationId?"rgb(30,64,30)":"#858b8b")),p.xp6(1),p.hij(" ",t.visibleTripleNumber," ")}}function R(t,e){if(1&t&&(p.TgZ(0,"div",18),p.TgZ(1,"div",19),p.TgZ(2,"button",20),p._uU(3),p.qZA(),p.qZA(),p.YNc(4,N,3,6,"div",21),p.qZA()),2&t){const t=e.$implicit;p.MGl("id","triple-flex-column-",e.index,""),p.xp6(3),p.hij(" ",t.singleNumber," "),p.xp6(1),p.Q6J("ngForOf",t.numberCombinations)}}function B(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"div",23),p.TgZ(1,"div",24),p.TgZ(2,"mat-slide-toggle",25),p.NdJ("change",function(){p.CHM(t);const e=p.oxw();return e.showDevArea=!e.showDevArea}),p._uU(3),p.qZA(),p.qZA(),p.qZA()}if(2&t){const t=p.oxw();p.xp6(3),p.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function F(t,e){if(1&t&&(p.TgZ(0,"div",23),p.TgZ(1,"div",24),p.TgZ(2,"pre"),p._uU(3),p.ALo(4,"json"),p.qZA(),p.qZA(),p.TgZ(5,"div",26),p.TgZ(6,"pre"),p._uU(7),p.ALo(8,"json"),p.qZA(),p.qZA(),p.TgZ(9,"div",24),p._UZ(10,"pre"),p.qZA(),p.qZA()),2&t){const t=p.oxw();p.xp6(3),p.hij("        numberCombinationMatrix = ",p.lcZ(4,2,t.numberCombinationMatrix),"\n      "),p.xp6(4),p.hij("       manualResultForm = ",p.lcZ(8,4,t.manualResultForm.value),"\n      ")}}const U=[{path:"",canActivate:[o.m],component:(()=>{class t{constructor(t,e,i,r,o,s){this.http=t,this.manualResultService=e,this.playGameService=i,this.route=r,this.router=o,this.commonService=s,this.BASE_API_URL=c.N.BASE_API_URL,this.drawTimes=[],this.numberCombinationMatrix=[],this.currentState="initial",this.isProduction=c.N.production,this.showDevArea=!1,this.deviceXs=this.commonService.deviceXs;const l=new Date,u=(0,n.p6)(l,"yyyy-MM-dd","en");this.manualResultForm=new a.cw({id:new a.NI(null),drawMasterId:new a.NI(null,[a.kI.required]),numberCombinationId:new a.NI(null,[a.kI.required]),single:new a.NI(null),triple:new a.NI(null),transaction_date:new a.NI(u)})}ngOnInit(){this.router.events.pipe((0,d.h)(t=>t instanceof r.m2),(0,m.U)(()=>this.route),(0,m.U)(t=>{for(;t.firstChild;)t=t.firstChild;return t}),(0,d.h)(t=>"primary"===t.outlet),(0,g.zg)(t=>t.data)).subscribe(t=>console.log("data",t));const t=new Date,e=(0,n.p6)(t,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data}),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(t=>{this.numberCombinationMatrix=t,this.copyNumberMatrix=JSON.parse(JSON.stringify(this.numberCombinationMatrix))})}iscurrentCombinationMatrixSelected(t){return t===this.currentCombinationMatrixSelectedId}setManualResultInForm(t,e){this.manualResultForm.patchValue({numberCombinationId:e.numberCombinationId,single:t,triple:e.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=e.numberCombinationId}getTrippleButtonStyle(){return{"background-color":"red !important"}}gotoTop(){window.scroll({top:0,left:0,behavior:"smooth"})}scroll(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}changeState(){this.currentState="initial"===this.currentState?"final":"initial"}saveManualResult(){this.validatorError=null,u().fire({title:"Confirmation",text:"Do you sure to save this result?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(t=>{t.isConfirmed&&this.manualResultService.saveManualResult(this.manualResultForm.value).subscribe(t=>{1===t.success?u().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}):(this.validatorError=t.error,u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3}))},t=>{console.log("data saving error",t)})})}gameDatepickerChange(t){const e=(0,n.p6)(this.manualResultForm.value.transaction_date,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data})}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(h.eN),p.Y36(A),p.Y36(w.M),p.Y36(r.gz),p.Y36(r.F0),p.Y36(x.v))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-manual-result"]],decls:28,vars:8,consts:[[3,"ngClass"],[3,"formGroup"],[1,"d-flex","flex-column","bd-highlight"],[1,"p-2","bd-highlight"],["targetDiv",""],["formControlName","drawMasterId","placeholder","Category"],[3,"value",4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],[1,"card-header"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["type","button",1,"btn","btn-primary","mt-2",3,"click"],[1,"d-flex","flex-row","bd-highlight"],["class","d-flex flex-column",3,"id",4,"ngFor","ngForOf"],["mat-fab","",1,"coder-fab",3,"click"],[1,"bi","bi-arrow-up-circle"],["class","d-flex",4,"ngIf"],[3,"value"],[1,"d-flex","flex-column",3,"id"],[1,"p-1"],["mat-fab","",1,"single-number-button","coder-fab"],["class","p-1",4,"ngFor","ngForOf"],["mat-fab","","aria-label","",1,"coder-fab",3,"matBadge","matBadgeHidden","ngStyle","click"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"div",0),p.TgZ(1,"form",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",null,4),p.TgZ(6,"mat-form-field"),p.TgZ(7,"mat-label"),p._uU(8,"Draw time"),p.qZA(),p.TgZ(9,"mat-select",5),p.YNc(10,I,2,2,"mat-option",6),p.qZA(),p.qZA(),p.qZA(),p.TgZ(11,"div"),p.TgZ(12,"div",7),p.TgZ(13,"div",8),p._uU(14," Upcoming result "),p.qZA(),p.TgZ(15,"ul",9),p.TgZ(16,"li",10),p._uU(17),p.qZA(),p.TgZ(18,"li",10),p._uU(19),p.qZA(),p.qZA(),p.qZA(),p.TgZ(20,"button",11),p.NdJ("click",function(){return e.saveManualResult()}),p._uU(21,"Save"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(22,"div",12),p.YNc(23,R,5,3,"div",13),p.qZA(),p.qZA(),p.qZA(),p.TgZ(24,"button",14),p.NdJ("click",function(){p.CHM(t);const i=p.MAs(5);return e.scroll(i)}),p._UZ(25,"i",15),p.qZA(),p.qZA(),p.YNc(26,B,4,1,"div",16),p.YNc(27,F,11,6,"div",16)}2&t&&(p.Q6J("ngClass",e.deviceXs?"mobile":"desktop"),p.xp6(1),p.Q6J("formGroup",e.manualResultForm),p.xp6(9),p.Q6J("ngForOf",e.drawTimes),p.xp6(7),p.Oqu(e.manualResultForm.value.triple),p.xp6(2),p.Oqu(e.manualResultForm.value.single),p.xp6(4),p.Q6J("ngForOf",e.numberCombinationMatrix),p.xp6(3),p.Q6J("ngIf",!e.isProduction),p.xp6(1),p.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[n.mk,a._Y,a.JL,a.sg,T.KE,T.hX,C.gD,a.JJ,a.u,n.sg,M.lW,n.O5,S.ey,_.k,n.PC,q.Rr],pipes:[n.Ts],styles:[".triple-number-button[_ngcontent-%COMP%]:hover{background-color:#676c67!important}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.scroll-arrow[_ngcontent-%COMP%]{border-radius:50%}"],data:{animation:[(0,s.X$)("changeDivSize",[(0,s.SB)("initial",(0,s.oB)({backgroundColor:"green",width:"100px",height:"100px"})),(0,s.SB)("final",(0,s.oB)({backgroundColor:"red",width:"200px",height:"200px"})),(0,s.eR)("initial=>final",(0,s.jt)("1500ms")),(0,s.eR)("final=>initial",(0,s.jt)("1000ms"))])]}}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[r.Bz.forChild(U)],r.Bz]}),t})();var O=i(22797),P=i(9550),J=i(69024);let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[n.ez,k,q.rP,O.QW,a.u5,T.lN,a.UX,P.c,J.FA,C.LD,_.g,M.ot,q.rP]]}),t})()}}]);