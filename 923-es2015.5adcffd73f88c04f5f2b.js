(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[923],{8923:function(t,i,n){"use strict";n.r(i),n.d(i,{CpanelModule:function(){return v}});var e=n(61116),r=n(33464),Z=n(35366),u=n(21915),o=n(53267),d=n(64510);const c=["PrintTemplate"];function p(t,i){1&t&&(Z.TgZ(0,"span"),Z._uU(1,"Little dummy Template"),Z.qZA(),Z.TgZ(2,"h1"),Z._uU(3," Test template to print Sukanta "),Z.qZA(),Z.TgZ(4,"span"),Z._uU(5,"Some text"),Z.qZA())}function g(t,i){1&t&&(Z.TgZ(0,"div",16),Z._uU(1," Div to print "),Z.TgZ(2,"h1"),Z._uU(3," Test div to print "),Z.qZA(),Z.TgZ(4,"span"),Z._uU(5,"Vfl Bochum 1848"),Z.qZA(),Z._UZ(6,"br"),Z.TgZ(7,"span",17),Z._uU(8,"FC Schalke 05 - this should NOT print"),Z.qZA(),Z._UZ(9,"br"),Z._UZ(10,"app-receipt",18),Z._UZ(11,"img",19),Z.qZA()),2&t&&(Z.xp6(10),Z.Q6J("helloText","Hello!"))}const s=function(){return{color:"red"}},T=function(){return{border:"solid 1px"}},l=function(t,i){return{h1:t,h2:i}};function a(t,i){if(1&t){const t=Z.EpF();Z.TgZ(0,"div"),Z.YNc(1,p,6,0,"ng-template",9,10,Z.W1O),Z.YNc(3,g,12,1,"div",11),Z.TgZ(4,"button",12),Z.NdJ("click",function(){return Z.CHM(t),Z.oxw().printDiv()}),Z._uU(5,"Print div"),Z.qZA(),Z.TgZ(6,"button",12),Z.NdJ("click",function(){return Z.CHM(t),Z.oxw().printTemplate()}),Z._uU(7,"Print Template"),Z.qZA(),Z.TgZ(8,"button",12),Z.NdJ("click",function(){return Z.CHM(t),Z.oxw().printHTMLElementToCurrentWithCustomCSS()}),Z._uU(9,"Print Template"),Z.qZA(),Z.TgZ(10,"div",13),Z._uU(11," print this "),Z.qZA(),Z.TgZ(12,"button",14),Z._uU(13,"print"),Z.qZA(),Z.TgZ(14,"div",15),Z._uU(15," sdfs sdf"),Z.qZA(),Z.qZA()}2&t&&(Z.xp6(3),Z.Q6J("ngIf",!1),Z.xp6(9),Z.Q6J("printStyle",Z.WLB(4,l,Z.DdM(2,s),Z.DdM(3,T))))}let A=(()=>{class t{constructor(t){this.ngxPrinterService=t,this.printWindowSubscription=this.ngxPrinterService.$printWindowOpen.subscribe(t=>{console.log("Print window is open:",t)}),this.$printItems=this.ngxPrinterService.$printItems}ngOnInit(){}printDiv(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.printDiv("printDiv"),this.ngxPrinterService.printOpenWindow=!1}printTemplate(){this.ngxPrinterService.printAngular(this.PrintTemplateTpl)}printHTMLElementToCurrentWithCustomCSS(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.renderClass="current-window",this.ngxPrinterService.printHTMLElement(this.PrintComponent.nativeElement),this.ngxPrinterService.printOpenWindow=!0,this.ngxPrinterService.renderClass="default"}printerMarkerClicked(){alert("Print marker clicked")}}return t.\u0275fac=function(i){return new(i||t)(Z.Y36(o.Al))},t.\u0275cmp=Z.Xpm({type:t,selectors:[["app-cpanel"]],viewQuery:function(t,i){if(1&t&&(Z.Gf(c,5),Z.Gf(u.$,5,Z.SBq)),2&t){let t;Z.iGM(t=Z.CRH())&&(i.PrintTemplateTpl=t.first),Z.iGM(t=Z.CRH())&&(i.PrintComponent=t.first)}},decls:94,vars:1,consts:[[1,"d-flex"],[1,"col-2"],[1,"col-6"],[1,"container"],[1,"table","table-striped"],[2,"background-color","black","color","white"],["scope","col"],["scope","row"],[4,"ngIf"],["id","test"],["PrintTemplate",""],["id","printDiv","directPrint","true","style","border: 1px solid black;",4,"ngIf"],[3,"click"],["id","print-section"],["printSectionId","print-section","ngxPrint","",3,"printStyle"],["ngxPrintItemMarker","","directPrint","true"],["id","printDiv","directPrint","true",2,"border","1px solid black"],["ngxNoPrint",""],[1,"dummy-bg",3,"helloText"],["id","imId2","src","assets/images/developer.jpg",2,"width","50px","height","50px","margin","5px"]],template:function(t,i){1&t&&(Z.TgZ(0,"div"),Z.TgZ(1,"div",0),Z._UZ(2,"div",1),Z._UZ(3,"div",2),Z._UZ(4,"div",1),Z.qZA(),Z.TgZ(5,"div",3),Z.TgZ(6,"table",4),Z.TgZ(7,"thead",5),Z.TgZ(8,"tr"),Z.TgZ(9,"th",6),Z._uU(10,"0"),Z.qZA(),Z.TgZ(11,"th",6),Z._uU(12,"1"),Z.qZA(),Z.TgZ(13,"th",6),Z._uU(14,"2"),Z.qZA(),Z.TgZ(15,"th",6),Z._uU(16,"3"),Z.qZA(),Z.TgZ(17,"th",6),Z._uU(18,"4"),Z.qZA(),Z.TgZ(19,"th",6),Z._uU(20,"5"),Z.qZA(),Z.TgZ(21,"th",6),Z._uU(22,"6"),Z.qZA(),Z.TgZ(23,"th",6),Z._uU(24,"7"),Z.qZA(),Z.TgZ(25,"th",6),Z._uU(26,"8"),Z.qZA(),Z.TgZ(27,"th",6),Z._uU(28,"9"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(29,"tbody"),Z.TgZ(30,"tr"),Z.TgZ(31,"th",7),Z._uU(32,"1"),Z.qZA(),Z.TgZ(33,"td"),Z._uU(34,"Mark"),Z.qZA(),Z.TgZ(35,"td"),Z._uU(36,"Otto"),Z.qZA(),Z.TgZ(37,"td"),Z._uU(38,"@mdo"),Z.qZA(),Z.TgZ(39,"td"),Z._uU(40,"@mdo"),Z.qZA(),Z.TgZ(41,"td"),Z._uU(42,"@mdo"),Z.qZA(),Z.TgZ(43,"td"),Z._uU(44,"@mdo"),Z.qZA(),Z.TgZ(45,"td"),Z._uU(46,"@mdo"),Z.qZA(),Z.TgZ(47,"td"),Z._uU(48,"@mdo"),Z.qZA(),Z.TgZ(49,"td"),Z._uU(50,"@mdo"),Z.qZA(),Z.qZA(),Z.TgZ(51,"tr"),Z.TgZ(52,"th",7),Z._uU(53,"2"),Z.qZA(),Z.TgZ(54,"td"),Z._uU(55,"Jacob"),Z.qZA(),Z.TgZ(56,"td"),Z._uU(57,"Thornton"),Z.qZA(),Z.TgZ(58,"td"),Z._uU(59,"@fat"),Z.qZA(),Z.TgZ(60,"td"),Z._uU(61,"@fat"),Z.qZA(),Z.TgZ(62,"td"),Z._uU(63,"@fat"),Z.qZA(),Z.TgZ(64,"td"),Z._uU(65,"@fat"),Z.qZA(),Z.TgZ(66,"td"),Z._uU(67,"@fat"),Z.qZA(),Z.TgZ(68,"td"),Z._uU(69,"@fat"),Z.qZA(),Z.TgZ(70,"td"),Z._uU(71,"@fat"),Z.qZA(),Z.qZA(),Z.TgZ(72,"tr"),Z.TgZ(73,"th",7),Z._uU(74,"3"),Z.qZA(),Z.TgZ(75,"td"),Z._uU(76,"Larry"),Z.qZA(),Z.TgZ(77,"td"),Z._uU(78,"the Bird"),Z.qZA(),Z.TgZ(79,"td"),Z._uU(80,"@twitter"),Z.qZA(),Z.TgZ(81,"td"),Z._uU(82,"@twitter"),Z.qZA(),Z.TgZ(83,"td"),Z._uU(84,"@twitter"),Z.qZA(),Z.TgZ(85,"td"),Z._uU(86,"@twitter"),Z.qZA(),Z.TgZ(87,"td"),Z._uU(88,"@twitter"),Z.qZA(),Z.TgZ(89,"td"),Z._uU(90,"@twitter"),Z.qZA(),Z.TgZ(91,"td"),Z._uU(92,"@twitter"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(93,a,16,7,"div",8),Z.qZA()),2&t&&(Z.xp6(93),Z.Q6J("ngIf",!1))},directives:[e.O5,d.I,u.$],styles:[""]}),t})();const q=[{path:"",canActivate:[n(58423).m],component:A}];let U=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[r.Bz.forChild(q)],r.Bz]}),t})();var _=n(22797),h=n(31041),m=n(13070),f=n(66882);let v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[e.ez,U,_.QW,h.u5,m.lN,d.K,f.ReceiptModule]]}),t})()}}]);