!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[307],{4307:function(t,i,o){"use strict";o.r(i),o.d(i,{ManualResultModule:function(){return Q}});var a=o(38583),u=o(63423),l=o(51068),c=o(3679),s=o(17238),d=(o(88259),o(92340)),m=o(45435),g=o(88002),f=o(19773),p=o(37716),h=o(91841),b=o(79765),v=o(5304),A=o(68307),Z=o(84889),x=function(){var t=function(){function t(i,r){var o=this;n(this,t),this.http=i,this.errorService=r,this.drawTimes=[],this.drawTimeSubject=new b.xQ,this.BASE_API_URL=d.N.BASE_API_URL,this.http.get(this.BASE_API_URL+"/drawTimes").subscribe(function(t){o.drawTimes=t.data,o.drawTimeSubject.next(e(o.drawTimes))})}return r(t,[{key:"getAllDrawTimes",value:function(){return e(this.drawTimes)}},{key:"getAllDrawTimesListener",value:function(){return this.drawTimeSubject.asObservable()}},{key:"saveManualResult",value:function(e){return this.http.post(this.BASE_API_URL+"/manualResult",e).pipe((0,v.K)(this.errorService.serverError),(0,A.b)(function(e){console.log(e)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(p.LFG(h.eN),p.LFG(Z.T))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),w=o(81397),y=o(13865),T=o(5620),S=o(98295),C=o(67441),M=o(51095),I=o(72458),q=o(70346),_=o(45396);function k(e,t){if(1&e&&(p.TgZ(0,"mat-option",21),p._uU(1),p.qZA()),2&e){var n=t.$implicit;p.Q6J("value",n.drawId),p.xp6(1),p.hij(" ",n.endTime," ")}}function N(e,t){if(1&e&&(p.TgZ(0,"mat-option",21),p._uU(1),p.qZA()),2&e){var n=t.$implicit;p.Q6J("value",n.id),p.xp6(1),p.hij(" ",n.game_name," ")}}var F=function(e){return{"background-color":e}};function R(e,t){if(1&e){var n=p.EpF();p.TgZ(0,"div",23),p.TgZ(1,"button",26),p.NdJ("click",function(){var e=p.CHM(n).$implicit,t=p.oxw().$implicit,i=p.oxw(),r=p.MAs(5);return i.setManualResultInForm(t.singleNumber,e),i.scroll(r)}),p._uU(2),p.qZA(),p.qZA()}if(2&e){var i=t.$implicit,r=p.oxw().$implicit,o=p.oxw();p.xp6(1),p.s9C("matBadge",r.singleNumber),p.Q6J("matBadgeHidden",o.currentCombinationMatrixSelectedId!=i.numberCombinationId)("ngStyle",p.VKq(4,F,o.currentCombinationMatrixSelectedId===i.numberCombinationId?"rgb(30,64,30)":"#858b8b")),p.xp6(1),p.hij(" ",i.visibleTripleNumber," ")}}function U(e,t){if(1&e&&(p.TgZ(0,"div",22),p.TgZ(1,"div",23),p.TgZ(2,"button",24),p._uU(3),p.qZA(),p.qZA(),p.YNc(4,R,3,6,"div",25),p.qZA()),2&e){var n=t.$implicit,i=t.index,r=p.oxw();p.MGl("id","triple-flex-column-",i,""),p.xp6(2),p.ekj("green",r.isDisabledSingleHeaderButton),p.Q6J("disabled",r.isDisabledSingleHeaderButton),p.xp6(1),p.hij(" ",n.singleNumber," "),p.xp6(1),p.Q6J("ngForOf",n.numberCombinations)}}function O(e,t){if(1&e){var n=p.EpF();p.TgZ(0,"div",27),p.TgZ(1,"div",28),p.TgZ(2,"mat-slide-toggle",29),p.NdJ("change",function(){p.CHM(n);var e=p.oxw();return e.showDevArea=!e.showDevArea}),p._uU(3),p.qZA(),p.qZA(),p.qZA()}if(2&e){var i=p.oxw();p.xp6(3),p.Oqu(i.showDevArea?"Hide Developer Area":"Show Developer Area")}}function B(e,t){if(1&e&&(p.TgZ(0,"div",27),p.TgZ(1,"div",28),p.TgZ(2,"pre"),p._uU(3),p.ALo(4,"json"),p.qZA(),p.qZA(),p.TgZ(5,"div",30),p.TgZ(6,"pre"),p._uU(7),p.ALo(8,"json"),p.qZA(),p.qZA(),p.TgZ(9,"div",28),p._UZ(10,"pre"),p.qZA(),p.qZA()),2&e){var n=p.oxw();p.xp6(3),p.hij("        numberCombinationMatrix = ",p.lcZ(4,2,n.numberCombinationMatrix),"\n      "),p.xp6(4),p.hij("       manualResultForm = ",p.lcZ(8,4,n.manualResultForm.value),"\n      ")}}var P,J,D=[{path:"",canActivate:[l.m],component:(P=function(){function e(t,i,r,o,u,l,s){n(this,e),this.http=t,this.manualResultService=i,this.gameService=r,this.playGameService=o,this.route=u,this.router=l,this.commonService=s,this.BASE_API_URL=d.N.BASE_API_URL,this.drawTimes=[],this.numberCombinationMatrix=[],this.currentState="initial",this.isProduction=d.N.production,this.showDevArea=!1,this.isDisabledSingleHeaderButton=!0,this.deviceXs=this.commonService.deviceXs;var m=new Date,g=(0,a.p6)(m,"yyyy-MM-dd","en");this.manualResultForm=new c.cw({id:new c.NI(null),drawMasterId:new c.NI(null,[c.kI.required]),numberCombinationId:new c.NI(null,[c.kI.required]),gameId:new c.NI(null,[c.kI.required]),single:new c.NI(null),triple:new c.NI(null),transaction_date:new c.NI(g)})}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.manualResultForm.patchValue({gameId:1}),this.router.events.pipe((0,m.h)(function(e){return e instanceof u.m2}),(0,g.U)(function(){return e.route}),(0,g.U)(function(e){for(;e.firstChild;)e=e.firstChild;return e}),(0,m.h)(function(e){return"primary"===e.outlet}),(0,f.zg)(function(e){return e.data})).subscribe(function(e){return console.log("data",e)}),this.selectedGame=1;var t=new Date,n=(0,a.p6)(t,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+n).subscribe(function(t){e.drawTimes=t.data}),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(function(t){e.numberCombinationMatrix=t,e.copyNumberMatrix=JSON.parse(JSON.stringify(e.numberCombinationMatrix))}),this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(function(t){e.games=t,console.log("ts",e.games)}),console.log(this.games)}},{key:"iscurrentCombinationMatrixSelected",value:function(e){return e===this.currentCombinationMatrixSelectedId}},{key:"setManualResultInForm",value:function(e,t){this.manualResultForm.patchValue({numberCombinationId:t.numberCombinationId,single:e,triple:t.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=t.numberCombinationId}},{key:"getTrippleButtonStyle",value:function(){return{"background-color":"red !important"}}},{key:"gotoTop",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"scroll",value:function(e){e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}},{key:"changeState",value:function(){this.currentState="initial"===this.currentState?"final":"initial"}},{key:"saveManualResult",value:function(){console.log(this.manualResultForm.value.gameId)}},{key:"gameDatepickerChange",value:function(e){var t=this,n=(0,a.p6)(this.manualResultForm.value.transaction_date,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+n).subscribe(function(e){t.drawTimes=e.data})}}]),e}(),P.\u0275fac=function(e){return new(e||P)(p.Y36(h.eN),p.Y36(x),p.Y36(w.h),p.Y36(y.M),p.Y36(u.gz),p.Y36(u.F0),p.Y36(T.v))},P.\u0275cmp=p.Xpm({type:P,selectors:[["app-manual-result"]],decls:34,vars:9,consts:[[3,"ngClass"],[1,"mt-5",3,"formGroup"],[1,"d-flex","flex-column","bd-highlight"],[1,"p-2","bd-highlight"],[1,"row"],["targetDiv",""],[1,"col-2"],["formControlName","drawMasterId","placeholder","Category"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","col-2",2,"height","0px","border-radius","10px","padding-top","0px","padding-left","10px"],["formControlName","gameId","placeholder","Category"],[1,"card",2,"width","18rem"],[1,"card-header"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["type","button",1,"btn","btn-primary","mt-2",3,"click"],[1,"d-flex","flex-row","bd-highlight"],["class","d-flex flex-column",3,"id",4,"ngFor","ngForOf"],["mat-fab","",1,"coder-fab",3,"click"],[1,"bi","bi-arrow-up-circle"],["class","d-flex",4,"ngIf"],[3,"value"],[1,"d-flex","flex-column",3,"id"],[1,"p-1"],[1,"single-number-button","coder-fab",3,"disabled"],["class","p-1",4,"ngFor","ngForOf"],["mat-fab","","aria-label","",1,"coder-fab",3,"matBadge","matBadgeHidden","ngStyle","click"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){if(1&e){var n=p.EpF();p.TgZ(0,"div",0),p.TgZ(1,"form",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4,5),p.TgZ(6,"mat-form-field",6),p.TgZ(7,"mat-label"),p._uU(8,"Draw time"),p.qZA(),p.TgZ(9,"mat-select",7),p.YNc(10,k,2,2,"mat-option",8),p.qZA(),p.qZA(),p.TgZ(11,"div",9),p.TgZ(12,"mat-form-field"),p.TgZ(13,"mat-label"),p._uU(14,"Game"),p.qZA(),p.TgZ(15,"mat-select",10),p.YNc(16,N,2,2,"mat-option",8),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(17,"div"),p.TgZ(18,"div",11),p.TgZ(19,"div",12),p._uU(20," Upcoming result "),p.qZA(),p.TgZ(21,"ul",13),p.TgZ(22,"li",14),p._uU(23),p.qZA(),p.TgZ(24,"li",14),p._uU(25),p.qZA(),p.qZA(),p.qZA(),p.TgZ(26,"button",15),p.NdJ("click",function(){return t.saveManualResult()}),p._uU(27,"Save"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(28,"div",16),p.YNc(29,U,5,6,"div",17),p.qZA(),p.qZA(),p.qZA(),p.TgZ(30,"button",18),p.NdJ("click",function(){p.CHM(n);var e=p.MAs(5);return t.scroll(e)}),p._UZ(31,"i",19),p.qZA(),p.qZA(),p.YNc(32,O,4,1,"div",20),p.YNc(33,B,11,6,"div",20)}2&e&&(p.Q6J("ngClass",t.deviceXs?"mobile":"desktop"),p.xp6(1),p.Q6J("formGroup",t.manualResultForm),p.xp6(9),p.Q6J("ngForOf",t.drawTimes),p.xp6(6),p.Q6J("ngForOf",t.games),p.xp6(7),p.Oqu(t.manualResultForm.value.triple),p.xp6(2),p.Oqu(t.manualResultForm.value.single),p.xp6(4),p.Q6J("ngForOf",t.numberCombinationMatrix),p.xp6(3),p.Q6J("ngIf",!t.isProduction),p.xp6(1),p.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[a.mk,c._Y,c.JL,c.sg,S.KE,S.hX,C.gD,c.JJ,c.u,a.sg,M.lW,a.O5,I.ey,q.k,a.PC,_.Rr],pipes:[a.Ts],styles:[".triple-number-button[_ngcontent-%COMP%]:hover{background-color:#676c67!important}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.scroll-arrow[_ngcontent-%COMP%]{border-radius:50%}.green[_ngcontent-%COMP%]{background-color:#f766cb;height:55px;width:55px;border-radius:30px;color:#fff}"],data:{animation:[(0,s.X$)("changeDivSize",[(0,s.SB)("initial",(0,s.oB)({backgroundColor:"green",width:"100px",height:"100px"})),(0,s.SB)("final",(0,s.oB)({backgroundColor:"red",width:"200px",height:"200px"})),(0,s.eR)("initial=>final",(0,s.jt)("1500ms")),(0,s.eR)("final=>initial",(0,s.jt)("1000ms"))])]}}),P),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],j=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[u.Bz.forChild(D)],u.Bz]}),e}(),L=o(93738),Y=o(49983),E=o(43220),Q=((J=function e(){n(this,e)}).\u0275fac=function(e){return new(e||J)},J.\u0275mod=p.oAB({type:J}),J.\u0275inj=p.cJS({imports:[[a.ez,j,_.rP,L.QW,c.u5,S.lN,c.UX,Y.c,E.FA,C.LD,q.g,M.ot,_.rP]]}),J)},51068:function(e,t,i){"use strict";i.d(t,{m:function(){return u}});var o=i(37716),a=i(73535),u=function(){var e=function(){function e(t){n(this,e),this.authService=t}return r(e,[{key:"canActivate",value:function(e,t){return this.authService.isAdmin()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.LFG(a.e))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();