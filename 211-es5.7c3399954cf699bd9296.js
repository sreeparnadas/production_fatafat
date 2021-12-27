!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[211],{45480:function(e,t,n){"use strict";n.d(t,{q:function(){return u}});var r=n(51095),o=n(49983),a=n(37716),u=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[r.ot,o.c]}),e}()},2211:function(n,r,a){"use strict";a.r(r),a.d(r,{PayoutSettingModule:function(){return X}});var u=a(38583),c=a(63423),f=a(51068),l=a(92340),s=a(32789),m=a(88259),p=a.n(m),d=a(37716),y=a(79765),h=a(91841),g=a(84889),v=function(){var t=function(){function t(n,r){var o=this;i(this,t),this.http=n,this.errorService=r,this.BASE_API_URL=l.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new y.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(function(t){o.gameTypes=t.data,o.gameTypeSubject.next(e(o.gameTypes))})}return o(t,[{key:"getGameType",value:function(){return e(this.gameTypes)}},{key:"getGameTypeListener",value:function(){return this.gameTypeSubject.asObservable()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.LFG(h.eN),d.LFG(g.T))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),A=a(5304),T=a(68307),Z=function(){var e=function(){function e(t,n){var r=this;i(this,e),this.http=t,this.errorService=n,this.BASE_API_URL=l.N.BASE_API_URL,this.gameTypes=[],this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(function(e){r.gameTypes=e.data})}return o(e,[{key:"updatePayout",value:function(e){return this.http.put(this.BASE_API_URL+"/cPanel/game/payout",e).pipe((0,A.K)(this.errorService.serverError),(0,T.b)(function(e){}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(d.LFG(h.eN),d.LFG(g.T))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),w=a(73535),b=a(3679),x=a(51095),S=a(98295),q=a(49983),_=a(45396);function N(e,t){1&e&&(d.TgZ(0,"mat-header-cell"),d._uU(1," No. "),d.qZA())}function C(e,t){if(1&e&&(d.TgZ(0,"mat-cell"),d._uU(1),d.qZA()),2&e){var n=t.$implicit;d.xp6(1),d.hij(" ",n.gameTypeId," ")}}function L(e,t){1&e&&(d.TgZ(0,"mat-header-cell"),d._uU(1," Game "),d.qZA())}function U(e,t){if(1&e&&(d.TgZ(0,"mat-cell"),d._uU(1),d.qZA()),2&e){var n=t.$implicit;d.xp6(1),d.hij(" ",n.gameTypeName," ")}}function k(e,t){1&e&&(d.TgZ(0,"mat-header-cell"),d._uU(1," mrp "),d.qZA())}function B(e,t){if(1&e&&(d.TgZ(0,"mat-cell"),d._uU(1),d.qZA()),2&e){var n=t.$implicit;d.xp6(1),d.hij(" ",n.mrp," ")}}function I(e,t){1&e&&(d.TgZ(0,"mat-header-cell"),d._uU(1," winningPrice "),d.qZA())}function Y(e,t){if(1&e&&(d.TgZ(0,"mat-cell"),d._uU(1),d.qZA()),2&e){var n=t.$implicit;d.xp6(1),d.hij(" ",n.winningPrice," ")}}function D(e,t){1&e&&(d.TgZ(0,"mat-header-cell"),d._uU(1," commission "),d.qZA())}function P(e,t){if(1&e&&(d.TgZ(0,"mat-cell"),d._uU(1),d.qZA()),2&e){var n=t.$implicit;d.xp6(1),d.hij(" ",n.commission," ")}}function j(e,t){1&e&&(d.TgZ(0,"mat-header-cell"),d._uU(1," payout "),d.qZA())}function J(e,t){if(1&e&&(d.TgZ(0,"mat-cell"),d.TgZ(1,"mat-form-field",20),d.TgZ(2,"input",21),d.NdJ("ngModelChange",function(e){return t.$implicit.payout=e}),d.qZA(),d.qZA(),d.qZA()),2&e){var n=t.$implicit;d.xp6(2),d.Q6J("value",n.payout)("ngModel",n.payout)}}function Q(e,t){1&e&&d._UZ(0,"mat-header-row")}function G(e,t){1&e&&d._UZ(0,"mat-row")}function E(e,t){if(1&e){var n=d.EpF();d.TgZ(0,"div",22),d.TgZ(1,"div",23),d.TgZ(2,"mat-slide-toggle",24),d.NdJ("change",function(){d.CHM(n);var e=d.oxw();return e.showDevArea=!e.showDevArea}),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&e){var r=d.oxw();d.xp6(3),d.Oqu(r.showDevArea?"Hide Developer Area":"Show Developer Area")}}function R(e,t){if(1&e&&(d.TgZ(0,"div",22),d.TgZ(1,"div",25),d.TgZ(2,"pre"),d._uU(3),d.ALo(4,"json"),d.qZA(),d.qZA(),d._UZ(5,"div",23),d.qZA()),2&e){var n=d.oxw();d.xp6(3),d.hij("\n        gameTypes = ",d.lcZ(4,1,n.gameTypes),"\n      ")}}var F,O,M=[{path:"",canActivate:[f.m],component:(F=function(){function e(t,n,r){var o=this;i(this,e),this.gameTypeService=t,this.payoutSettingService=n,this.authService=r,this.isProduction=l.N.production,this.showDevArea=!1,this.gameTypes=[],this.displayedColumns=["position","gameTypeName","mrp","winningPrice","commission","payout"],this.gameTypes=this.gameTypeService.getGameType(),this.gameTypeService.getGameTypeListener().subscribe(function(e){o.gameTypes=e,o.dataSource=new s.by(o.gameTypes)})}return o(e,[{key:"ngOnInit",value:function(){}},{key:"updateTerminal",value:function(){var e=this;p().fire({title:"Confirmation",text:"Do you sure to update payout?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(n){if(n.isConfirmed){var r,o=[],i=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}(e.gameTypes);try{for(i.s();!(r=i.n()).done;){var a=r.value;o.push({gameTypeId:a.gameTypeId,newPayout:a.payout})}}catch(u){i.e(u)}finally{i.f()}e.payoutSettingService.updatePayout(o).subscribe(function(e){1===e.success?p().fire({position:"top-end",icon:"success",title:"Payout updated",showConfirmButton:!1,timer:1e3}):p().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})}})}}]),e}(),F.\u0275fac=function(e){return new(e||F)(d.Y36(v),d.Y36(Z),d.Y36(w.e))},F.\u0275cmp=d.Xpm({type:F,selectors:[["app-payout-setting"]],decls:35,vars:6,consts:[[1,"container","pt-5"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container","mb-3"],[1,"offset-5"],["novalidate",""],["payoutSetForm","ngForm"],[3,"dataSource"],["table",""],["matColumnDef","position"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","gameTypeName"],["matColumnDef","mrp"],["matColumnDef","winningPrice"],["matColumnDef","commission"],["matColumnDef","payout"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container","mt-3"],["mat-raised-button","","color","primary","mat-stroked-button","",3,"disabled","click"],["class","d-flex",4,"ngIf"],["floatLabel","never"],["type","number","name","payout","matInput","","placeholder","payout","required","",3,"value","ngModel","ngModelChange"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){if(1&e&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"mark"),d._uU(4,"Set Payout"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(5,"form",3,4),d.TgZ(7,"mat-table",5,6),d.ynx(9,7),d.YNc(10,N,2,0,"mat-header-cell",8),d.YNc(11,C,2,1,"mat-cell",9),d.BQk(),d.ynx(12,10),d.YNc(13,L,2,0,"mat-header-cell",8),d.YNc(14,U,2,1,"mat-cell",9),d.BQk(),d.ynx(15,11),d.YNc(16,k,2,0,"mat-header-cell",8),d.YNc(17,B,2,1,"mat-cell",9),d.BQk(),d.ynx(18,12),d.YNc(19,I,2,0,"mat-header-cell",8),d.YNc(20,Y,2,1,"mat-cell",9),d.BQk(),d.ynx(21,13),d.YNc(22,D,2,0,"mat-header-cell",8),d.YNc(23,P,2,1,"mat-cell",9),d.BQk(),d.ynx(24,14),d.YNc(25,j,2,0,"mat-header-cell",8),d.YNc(26,J,3,2,"mat-cell",9),d.BQk(),d.YNc(27,Q,1,0,"mat-header-row",15),d.YNc(28,G,1,0,"mat-row",16),d.qZA(),d.qZA(),d.TgZ(29,"div",17),d.TgZ(30,"div",2),d.TgZ(31,"button",18),d.NdJ("click",function(){return t.updateTerminal()}),d._uU(32,"Save"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.YNc(33,E,4,1,"div",19),d.YNc(34,R,6,3,"div",19)),2&e){var n=d.MAs(6);d.xp6(7),d.Q6J("dataSource",t.dataSource),d.xp6(20),d.Q6J("matHeaderRowDef",t.displayedColumns),d.xp6(1),d.Q6J("matRowDefColumns",t.displayedColumns),d.xp6(3),d.Q6J("disabled",!n.form.valid),d.xp6(2),d.Q6J("ngIf",!t.isProduction),d.xp6(1),d.Q6J("ngIf",!t.isProduction&&t.showDevArea)}},directives:[b._Y,b.JL,b.F,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,x.lW,u.O5,s.ge,s.ev,S.KE,b.wV,q.Nt,b.Fj,b.Q7,b.JJ,b.On,s.XQ,s.Gk,_.Rr],pipes:[u.Ts],styles:[""]}),F)}],$=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[c.Bz.forChild(M)],c.Bz]}),e}(),z=a(67441),H=a(45480),X=((O=function e(){i(this,e)}).\u0275fac=function(e){return new(e||O)},O.\u0275mod=d.oAB({type:O}),O.\u0275inj=d.cJS({imports:[[u.ez,$,s.p0,_.rP,z.LD,b.u5,b.UX,q.c,H.q]]}),O)},51068:function(e,t,n){"use strict";n.d(t,{m:function(){return u}});var r=n(37716),a=n(73535),u=function(){var e=function(){function e(t){i(this,e),this.authService=t}return o(e,[{key:"canActivate",value:function(e,t){return this.authService.isAdmin()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.LFG(a.e))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();