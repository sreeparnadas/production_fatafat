!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[995],{5995:function(n,i,r){"use strict";r.r(i),r.d(i,{CpanelModule:function(){return C}});var u=r(38583),c=r(63423),o=r(37716),p=r(81449),s=r(80291),a=r(73535),l=r(95913),d=["PrintTemplate"];function f(t,n){1&t&&(o.TgZ(0,"span"),o._uU(1,"Little dummy Template"),o.qZA(),o.TgZ(2,"h1"),o._uU(3," Test template to print Sukanta "),o.qZA(),o.TgZ(4,"span"),o._uU(5,"Some text"),o.qZA())}function v(t,n){1&t&&(o.TgZ(0,"div",11),o._uU(1," Div to print "),o.TgZ(2,"h1"),o._uU(3," Test div to print "),o.qZA(),o.TgZ(4,"span"),o._uU(5,"Vfl Bochum 1848"),o.qZA(),o._UZ(6,"br"),o.TgZ(7,"span",12),o._uU(8,"FC Schalke 05 - this should NOT print"),o.qZA(),o._UZ(9,"br"),o._UZ(10,"app-receipt",13),o._UZ(11,"img",14),o.qZA()),2&t&&(o.xp6(10),o.Q6J("helloText","Hello!"))}var h=function(){return{color:"red"}},g=function(){return{border:"solid 1px"}},m=function(t,n){return{h1:t,h2:n}};function Z(t,n){if(1&t){var e=o.EpF();o.TgZ(0,"div"),o.YNc(1,f,6,0,"ng-template",4,5,o.W1O),o.YNc(3,v,12,1,"div",6),o.TgZ(4,"button",7),o.NdJ("click",function(){return o.CHM(e),o.oxw().printDiv()}),o._uU(5,"Print div"),o.qZA(),o.TgZ(6,"button",7),o.NdJ("click",function(){return o.CHM(e),o.oxw().printTemplate()}),o._uU(7,"Print Template"),o.qZA(),o.TgZ(8,"button",7),o.NdJ("click",function(){return o.CHM(e),o.oxw().printHTMLElementToCurrentWithCustomCSS()}),o._uU(9,"Print Template"),o.qZA(),o.TgZ(10,"div",8),o._uU(11," print this "),o.qZA(),o.TgZ(12,"button",9),o._uU(13,"print"),o.qZA(),o.TgZ(14,"div",10),o._uU(15," sdfs sdf"),o.qZA(),o.qZA()}2&t&&(o.xp6(3),o.Q6J("ngIf",!1),o.xp6(9),o.Q6J("printStyle",o.WLB(4,m,o.DdM(2,h),o.DdM(3,g))))}var T,x=function(){var n=function(){function n(e,i){t(this,n),this.ngxPrinterService=e,this.authService=i,this.printWindowSubscription=this.ngxPrinterService.$printWindowOpen.subscribe(function(t){console.log("Print window is open:",t)}),this.$printItems=this.ngxPrinterService.$printItems}return e(n,[{key:"ngOnInit",value:function(){this.user=this.authService.userBehaviorSubject.value}},{key:"printDiv",value:function(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.printDiv("printDiv"),this.ngxPrinterService.printOpenWindow=!1}},{key:"printTemplate",value:function(){this.ngxPrinterService.printAngular(this.PrintTemplateTpl)}},{key:"printHTMLElementToCurrentWithCustomCSS",value:function(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.renderClass="current-window",this.ngxPrinterService.printHTMLElement(this.PrintComponent.nativeElement),this.ngxPrinterService.printOpenWindow=!0,this.ngxPrinterService.renderClass="default"}},{key:"printerMarkerClicked",value:function(){alert("Print marker clicked")}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Y36(s.Al),o.Y36(a.e))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-cpanel"]],viewQuery:function(t,n){var e;(1&t&&(o.Gf(d,5),o.Gf(p.$,5,o.SBq)),2&t)&&(o.iGM(e=o.CRH())&&(n.PrintTemplateTpl=e.first),o.iGM(e=o.CRH())&&(n.PrintComponent=e.first))},decls:8,vars:2,consts:[[1,"d-flex","mt-5"],[1,"col-3"],[1,"col-6"],[4,"ngIf"],["id","test"],["PrintTemplate",""],["id","printDiv","directPrint","true","style","border: 1px solid black;",4,"ngIf"],[3,"click"],["id","print-section"],["printSectionId","print-section","ngxPrint","",3,"printStyle"],["ngxPrintItemMarker","","directPrint","true"],["id","printDiv","directPrint","true",2,"border","1px solid black"],["ngxNoPrint",""],[1,"dummy-bg",3,"helloText"],["id","imId2","src","assets/images/developer.jpg",2,"width","50px","height","50px","margin","5px"]],template:function(t,n){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"div",0),o._UZ(2,"div",1),o.TgZ(3,"div",2),o.TgZ(4,"h1"),o._uU(5),o.qZA(),o.qZA(),o._UZ(6,"div",1),o.qZA(),o.YNc(7,Z,16,7,"div",3),o.qZA()),2&t&&(o.xp6(5),o.hij("Welcome ",n.user.userName,""),o.xp6(2),o.Q6J("ngIf",!1))},directives:[u.O5,l.I,p.$],styles:[""]}),n}(),S=[{path:"",canActivate:[r(51068).m],component:x}],P=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.Bz.forChild(S)],c.Bz]}),n}(),k=r(93738),A=r(3679),w=r(98295),b=r(2700),C=((T=function n(){t(this,n)}).\u0275fac=function(t){return new(t||T)},T.\u0275mod=o.oAB({type:T}),T.\u0275inj=o.cJS({imports:[[u.ez,P,k.QW,A.u5,w.lN,l.K,b.ReceiptModule]]}),T)},51068:function(n,i,r){"use strict";r.d(i,{m:function(){return o}});var u=r(37716),c=r(73535),o=function(){var n=function(){function n(e){t(this,n),this.authService=e}return e(n,[{key:"canActivate",value:function(t,n){return this.authService.isAdmin()}}]),n}();return n.\u0275fac=function(t){return new(t||n)(u.LFG(c.e))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}])}();