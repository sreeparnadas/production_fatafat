!function(){function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[945],{9945:function(n,i,r){"use strict";r.r(i),r.d(i,{TerminalModule:function(){return ut}});var a=r(61116),c=r(33464),s=r(64762),g=r(529),u=r(22501),l=r.n(u),d=r(35366),p=function(t){return t.INNER="inner",t.OUTER="outer",t.CENTER="center",t}({}),b=function(t){return t.HORIZONTAL="horizontal",t.VERTICAL="vertical",t.CURVED="curved",t}({}),m=function(){var t=function(){function t(){e(this,t),this.onSpinStart=new d.vpe,this.onSpinComplete=new d.vpe,this.completedSpin=!1,this.isSpinning=!1}return o(t,[{key:"reset",value:function(){this.wheel.stopAnimation(!1),this.wheel.rotationAngle=0,this.wheel.ctx.clearRect(0,0,this.wheel.ctx.canvas.width,this.wheel.ctx.canvas.height),this.isSpinning=!1,this.completedSpin=!1,this.ngAfterViewInit()}},{key:"ngOnInit",value:function(){}},{key:"spin",value:function(){var t=this;if(!this.completedSpin&&!this.isSpinning){this.isSpinning=!0,this.onSpinStart.emit(null);var n=this.wheel.segments.filter(function(t){return!!t}).find(function(n){var e=n.id;return t.idToLandOn===e});this.wheel.animation.stopAngle=n.endAngle-(n.endAngle-n.startAngle)/4,this.wheel.startAnimation(),setTimeout(function(){t.completedSpin=!0,t.onSpinComplete.emit(null)},1e3*this.spinDuration)}}},{key:"ngAfterViewInit",value:function(){var t=this.items;this.wheel=new Winwheel({numSegments:t.length,segments:t,innerRadius:this.innerRadius||0,outerRadius:this.height/2-20,centerY:this.height/2+20,textOrientation:this.textOrientation,textAligment:this.textAlignment,animation:{type:"spinToStop",duration:this.spinDuration,spins:this.spinAmount}}),TweenMax.ticker.addEventListener("tick",this.drawPointer.bind(this))}},{key:"ngOnDestroy",value:function(){TweenMax.ticker.removeEventListener("tick")}},{key:"drawPointer",value:function(){var t=this.wheel.ctx;t&&(t.save(),t.lineWidth=2,t.strokeStyle=this.pointerStrokeColor,t.fillStyle=this.pointerFillColor,t.beginPath(),t.moveTo(this.width/2-20,2),t.lineTo(this.width/2+20,2),t.lineTo(this.width/2,42),t.lineTo(this.width/2-20,2),t.stroke(),t.fill(),t.restore())}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["ngx-wheel"]],inputs:{height:"height",idToLandOn:"idToLandOn",width:"width",items:"items",spinDuration:"spinDuration",spinAmount:"spinAmount",innerRadius:"innerRadius",pointerStrokeColor:"pointerStrokeColor",pointerFillColor:"pointerFillColor",disableSpinOnClick:"disableSpinOnClick",textOrientation:"textOrientation",textAlignment:"textAlignment"},outputs:{onSpinStart:"onSpinStart",onSpinComplete:"onSpinComplete"},decls:2,vars:2,consts:[["id","canvas",3,"width","height","click"]],template:function(t,n){1&t&&(d.TgZ(0,"canvas",0),d.NdJ("click",function(){return!n.disableSpinOnClick&&n.spin()}),d._uU(1," \xa0\xa0\xa0\xa0Canvas not supported, use another browser. "),d.qZA()),2&t&&d.Q6J("width",n.width)("height",n.height)},encapsulation:2}),t}(),h=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[]]}),t}(),f=r(74975),C=r(67354),O=r(4612),_=r(53267),P=r(4507),x=r(41293),v=r(35965),M=r(84369),k=r(47217),T=r(79572),Z=r(64510);function w(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"th",44),d.TgZ(1,"button",45),d.NdJ("click",function(){var t=d.CHM(e).index;return d.oxw().setActiveTripleContainerValue(t)}),d.TgZ(2,"span"),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&t){var i=n.$implicit,o=n.index,r=d.oxw();d.xp6(1),d.Gre("triple-selection-button-",o," tripple-selection-button"),d.Q6J("matBadgeHidden",r.activeTripleContainerValue!=o),d.xp6(2),d.Oqu(i.singleNumber)}}function y(t,n){if(1&t&&(d.TgZ(0,"tr"),d.TgZ(1,"th",46),d.TgZ(2,"button",47),d.TgZ(3,"span"),d._uU(4),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t){var e=d.oxw();d.xp6(4),d.Oqu(e.singleNumbers[e.activeTripleContainerValue].singleNumber)}}function A(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"td",51),d.TgZ(1,"button",52),d.NdJ("click",function(){var t=d.CHM(e).$implicit,n=d.oxw(3).index;return d.oxw().setGameInputSet(t,n,2)}),d._uU(2),d.qZA(),d.qZA()}if(2&t){var i=n.$implicit;d.xp6(1),d.s9C("matBadge",i.quantity),d.Q6J("matBadgeHidden",!1),d.xp6(1),d.hij(" ",i.visibleTripleNumber," ")}}function S(t,n){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,A,3,3,"td",50),d.qZA()),2&t){var e=n.index,i=d.oxw(2).$implicit,o=d.oxw();d.xp6(1),d.Q6J("ngForOf",i.numberCombinations.slice(e*o.columnNumber,e*o.columnNumber+o.columnNumber))}}function q(t,n){if(1&t&&(d.ynx(0),d.YNc(1,S,2,1,"tr",49),d.BQk()),2&t){var e=d.oxw().$implicit,i=d.oxw();d.xp6(1),d.Q6J("ngForOf",e.numberCombinations.slice(0,e.numberCombinations.length%i.columnNumber==0?e.numberCombinations.length/i.columnNumber:e.numberCombinations.length/i.columnNumber+1))}}function N(t,n){if(1&t&&(d.TgZ(0,"tbody",48),d.YNc(1,q,2,1,"ng-container",9),d.qZA()),2&t){var e=n.index,i=d.oxw();d.Gre("table-div-",e,""),d.MGl("id","triple-body-",e,""),d.xp6(1),d.Q6J("ngIf",i.isActiveTripleContainter(e))}}function I(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"button",53),d.NdJ("click",function(){var t=d.CHM(e).$implicit;return d.oxw().setGameInputSet(t,1,1)}),d._uU(1),d.qZA()}if(2&t){var i=n.$implicit;d.Gre("single-number-button-",n.index,""),d.s9C("matBadge",i.quantity),d.xp6(1),d.Oqu(i.singleNumber)}}function D(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"input",54),d.NdJ("click",function(){var t=d.CHM(e).$implicit;return d.oxw().changeChip(t)}),d.qZA()}if(2&t){var i=n.$implicit,o=n.index,r=d.oxw();d.Gre("chips-button-",o,""),d.Q6J("ngClass",r.selectedChip==i?"selectedChipStyle":"")}}function F(t,n){if(1&t&&(d.TgZ(0,"td",56),d.TgZ(1,"div",57),d._uU(2),d.qZA(),d.TgZ(3,"div",58),d._uU(4),d.qZA(),d.TgZ(5,"div",58),d._uU(6),d.qZA(),d.qZA()),2&t){var e=n.$implicit;d.xp6(2),d.Oqu(e.end_time.slice(0,5)),d.xp6(2),d.Oqu(e.visible_triple_number||"***"),d.xp6(2),d.Oqu(null!=e.single_number&&e.single_number>=0?e.single_number:"*")}}function z(t,n){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,F,7,3,"td",55),d.qZA()),2&t){var e=n.index,i=d.oxw(2);d.xp6(1),d.Q6J("ngForOf",i.currentDateResult.result.slice(e*i.columnNumber2,e*i.columnNumber2+i.columnNumber2))}}function J(t,n){if(1&t&&(d.ynx(0),d.YNc(1,z,2,1,"tr",49),d.BQk()),2&t){var e=d.oxw();d.xp6(1),d.Q6J("ngForOf",e.currentDateResult.result.slice(0,e.currentDateResult.result.length%e.columnNumber2==0?e.currentDateResult.result.length/e.columnNumber2:e.currentDateResult.result.length/e.columnNumber2+1))}}function U(t,n){1&t&&(d.TgZ(0,"div",61),d._uU(1,"Single"),d.qZA())}function B(t,n){if(1&t&&(d.TgZ(0,"td",63),d._uU(1),d.qZA()),2&t){var e=n.$implicit;d.xp6(1),d.AsE(" ",e.singleNumber,"-",e.quantity,", ")}}function j(t,n){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,B,2,2,"td",62),d.qZA()),2&t){var e=n.index,i=d.oxw(2);d.xp6(1),d.Q6J("ngForOf",i.lastPurchasedTicketSingle.slice(5*e,5*e+5))}}function Q(t,n){1&t&&(d.TgZ(0,"div",61),d._uU(1,"Triple"),d.qZA())}function R(t,n){if(1&t&&(d.TgZ(0,"td",63),d._uU(1),d.qZA()),2&t){var e=n.$implicit;d.xp6(1),d.AsE(" ",e.visibleTripleNumber," - ",e.quantity,", ")}}function G(t,n){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,R,2,2,"td",62),d.qZA()),2&t){var e=n.index,i=d.oxw(2);d.xp6(1),d.Q6J("ngForOf",i.lastPurchasedTicketTriple.slice(5*e,5*e+5))}}function Y(t,n){if(1&t&&(d.TgZ(0,"div",59),d._uU(1," Kfatafat "),d.TgZ(2,"div"),d.TgZ(3,"div"),d._uU(4),d.qZA(),d.TgZ(5,"div"),d._uU(6),d.qZA(),d.TgZ(7,"div"),d._uU(8),d.qZA(),d.TgZ(9,"div"),d._uU(10),d.qZA(),d.TgZ(11,"div"),d._uU(12),d.qZA(),d.qZA(),d.TgZ(13,"div"),d.YNc(14,U,2,0,"div",60),d.TgZ(15,"table"),d.TgZ(16,"tbody"),d.YNc(17,j,2,1,"tr",49),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"div"),d.YNc(19,Q,2,0,"div",60),d.TgZ(20,"table"),d.TgZ(21,"tbody"),d.YNc(22,G,2,1,"tr",49),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t){var e=d.oxw();d.xp6(4),d.hij("Terminal: ",e.lastPurchasedTicketDetails.data.play_master.terminal.terminalId,""),d.xp6(2),d.hij("Ticket ID: ",e.lastPurchasedTicketDetails.data.play_master.barcodeNumber,""),d.xp6(2),d.hij("Draw time: ",e.lastPurchasedTicketDetails.data.play_master.drawTime.visibleTime,""),d.xp6(2),d.hij("Ticket time: ",e.lastPurchasedTicketDetails.data.play_master.ticketTakenTime,""),d.xp6(2),d.hij("Total point: ",e.lastPurchasedTicketDetails.data.amount,""),d.xp6(2),d.Q6J("ngIf",e.lastPurchasedTicketSingle.length),d.xp6(3),d.Q6J("ngForOf",e.lastPurchasedTicketSingle.slice(0,e.lastPurchasedTicketSingle.length%5==0?e.lastPurchasedTicketSingle.length/5:e.lastPurchasedTicketSingle.length/5+1)),d.xp6(2),d.Q6J("ngIf",e.lastPurchasedTicketTriple.length),d.xp6(3),d.Q6J("ngForOf",e.lastPurchasedTicketTriple.slice(0,e.lastPurchasedTicketTriple.length%5==0?e.lastPurchasedTicketTriple.length/5:e.lastPurchasedTicketTriple.length/5+1))}}function L(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"div",40),d.TgZ(1,"div",64),d.TgZ(2,"mat-slide-toggle",65),d.NdJ("change",function(){d.CHM(e);var t=d.oxw();return t.showDevArea=!t.showDevArea}),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&t){var i=d.oxw();d.xp6(3),d.Oqu(i.showDevArea?"Hide Developer Area":"Show Developer Area")}}var E=function(){return{color:"red"}},V=function(){return{border:"solid 3px"}},H=function(t,n){return{h1:t,h2:n}};function $(t,n){if(1&t&&(d.TgZ(0,"div",40),d.TgZ(1,"div",66),d.TgZ(2,"button",67),d._uU(3,"print"),d.qZA(),d.TgZ(4,"pre"),d._uU(5),d.ALo(6,"json"),d.qZA(),d.qZA(),d.TgZ(7,"div",64),d.TgZ(8,"pre"),d._uU(9),d.ALo(10,"json"),d.qZA(),d.qZA(),d.TgZ(11,"div",64),d.TgZ(12,"pre"),d._uU(13),d.ALo(14,"json"),d.qZA(),d.qZA(),d.qZA()),2&t){var e=d.oxw();d.xp6(2),d.Q6J("printStyle",d.WLB(12,H,d.DdM(10,E),d.DdM(11,V))),d.xp6(3),d.hij("        singleNumbers = ",d.lcZ(6,4,e.singleNumbers),"\n      "),d.xp6(4),d.hij("        activeDrawTime = ",d.lcZ(10,6,e.activeDrawTime),"\n      "),d.xp6(4),d.hij("userGameInput = ",d.lcZ(14,8,e.userGameInput),"")}}var X,W=function(){var n=function(){function n(i,o,r,a,c,s){e(this,n),this.playGameService=i,this.commonService=o,this.authService=r,this.ngxPrinterService=a,this.renderer=c,this.watchDrawService=s,this.seed=t(Array(12).keys()),this.textOrientation=b.HORIZONTAL,this.textAlignment=p.OUTER,this.showDeveloperDiv=!0,this.singleNumbers=[],this.numberCombinationMatrix=[],this.chips=[],this.userGameInput=[],this.columnNumber=5,this.columnNumber2=8,this.columnNumber3=1,this.activeTripleContainerValue=0,this.selectedChip=2,this.isProduction=g.N.production,this.showDevArea=!1;var u=document.querySelector(".layer");this.renderer.setStyle(u,"background-color"," rgba(78, 180, 248, 0.1)"),this.currentDate=this.commonService.getCurrentDate(),this.deviceXs=this.commonService.deviceXs}return o(n,[{key:"ngOnInit",value:function(){var t=this;this.idToLandOn=this.seed[Math.floor(Math.random()*this.seed.length)];var n=["#FF0000","#000000"];this.items=this.seed.map(function(t){return{fillStyle:n[t%2],text:"Prize ".concat(t),id:t,textFillStyle:"white",textFontSize:"16"}}),this.renderer.setStyle(document.body,"background-image",' url("assets/images/background1.jpg")'),this.user=this.authService.userBehaviorSubject.value,this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(function(n){t.numberCombinationMatrix=n,t.copyNumberMatrix=JSON.parse(JSON.stringify(t.numberCombinationMatrix))}),this.singleNumbers=this.playGameService.getSingleNumbers(),this.playGameService.getSingleNumberListener().subscribe(function(n){t.singleNumbers=n,t.copySingleNumber=JSON.parse(JSON.stringify(t.singleNumbers))}),this.commonService.currentTimeBehaviorSubject.asObservable().subscribe(function(n){t.alwaysTime=n}),this.projectData=this.commonService.getProjectData(),this.chips=this.projectData.chips,this.commonService.getVariableSettingsListener().subscribe(function(n){t.projectData=n,t.chips=t.projectData.chips}),this.activeDrawTime=this.commonService.getActiveDrawTime(),this.commonService.getActiveDrawTimeListener().subscribe(function(n){t.activeDrawTime=n}),this.currentDateResult=this.playGameService.getCurrentDateResult(),this.playGameService.getCurrentDateResultListener().subscribe(function(n){t.currentDateResult=n})}},{key:"reset",value:function(){this.wheel.reset()}},{key:"before",value:function(){console.log("Your wheel is about to spin")}},{key:"spin",value:function(t){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.idToLandOn=t,n.next=3,new Promise(function(t){return setTimeout(t,0)});case 3:this.wheel.spin();case 4:case"end":return n.stop()}},n,this)}))}},{key:"after",value:function(){console.log("You have been bamboozled")}},{key:"isActiveTripleContainter",value:function(t){return this.activeTripleContainerValue==t}},{key:"setActiveTripleContainerValue",value:function(t){this.activeTripleContainerValue=t}},{key:"setGameInputSet",value:function(t,n,e){var i=-1;1==e?i=this.userGameInput.findIndex(function(n){return n.singleNumberId===t.singleNumberId}):2==e&&(i=this.userGameInput.findIndex(function(n){return n.numberCombinationId===t.numberCombinationId})),i>-1?(this.userGameInput[i].quantity+=this.selectedChip,t.quantity=this.userGameInput[i].quantity):(this.userGameInput.push({gameTypeId:e,numberCombinationId:t.numberCombinationId,singleNumberId:t.singleNumberId,quantity:this.selectedChip,mrp:1}),t.quantity=this.selectedChip),this.totalTicketPurchased=this.userGameInput.map(function(t){return t.quantity}).reduce(function(t,n){return t+n})}},{key:"changeChip",value:function(t){this.selectedChip=t}},{key:"resetMatrixValue",value:function(){this.userGameInput=[],this.numberCombinationMatrix=JSON.parse(JSON.stringify(this.copyNumberMatrix)),this.singleNumbers=JSON.parse(JSON.stringify(this.copySingleNumber)),this.totalTicketPurchased=0}},{key:"printDiv",value:function(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.printDiv("print-section"),this.ngxPrinterService.printOpenWindow=!1}},{key:"saveUserPlayInputDetails",value:function(){var t=this;l().fire({title:"Confirmation",text:"Do you sure to buy ticket?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(function(n){n.isConfirmed&&t.playGameService.saveUserPlayInputDetails({playMaster:{drawMasterId:t.activeDrawTime.drawId,terminalId:t.user.userId},playDetails:t.userGameInput}).subscribe(function(n){if(1===n.success){t.lastPurchasedTicketDetails=n,t.lastPurchasedTicketSingle=t.lastPurchasedTicketDetails.data.game_input.single_game_data,t.lastPurchasedTicketTriple=t.lastPurchasedTicketDetails.data.game_input.triple_game_data;var e=n.data;l().fire({position:"top-end",icon:"success",title:"Ticket purchased",showConfirmButton:!1,timer:1e3}),t.authService.setUserBalanceBy(e.play_master.terminal.balance),t.resetMatrixValue(),setTimeout((function(){document.getElementById("print-button").click()}).bind(t),3e3)}else l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(d.Y36(f.M),d.Y36(C.v),d.Y36(O.e),d.Y36(_.Al),d.Y36(d.Qsj),d.Y36(P.n))},n.\u0275cmp=d.Xpm({type:n,selectors:[["app-terminal"]],viewQuery:function(t,n){var e;(1&t&&d.Gf(m,5),2&t)&&(d.iGM(e=d.CRH())&&(n.wheel=e.first))},decls:61,vars:18,consts:[["id","outer-div",2,"height","480px",3,"ngClass"],["id","bg",1,"d-flex","flex-row","bd-highlight","mb-3"],["id","background",1,"p-2","background","body","bd-highlight"],["fxLayout","row","fxLayoutAlign",""],["id","table-1","fxFlex","35",1,"ml-2","mt-2"],["id","triple-table",1,"table",2,"border","5px solid lightgoldenrodyellow"],[1,"mt-5","triple-table-thead"],["class","pink",4,"ngFor","ngForOf"],[2,"background-image","url('/assets/images/btn-1.png')"],[4,"ngIf"],[3,"id","class",4,"ngFor","ngForOf"],[1,"col-4",2,"padding-top","3px"],[1,"left-div",2,"padding-top","15px"],[1,"d-flex",2,"padding-left","25px"],["src","assets/images/play.png","height","70px","alt",""],[2,"font-weight","bolder","font-size","large","padding-top","15px","padding-left","20px"],["fxFlex","30"],[2,"padding-top","23px","text-align","center","background-image","url('/assets/images/spinner.png')","background-repeat","no-repeat","min-height","100px"],["width","200","height","200","spinDuration","8","pointerStrokeColor","black","pointerFillColor","gold",2,"padding-left","40px","padding-top","10px",3,"items","innerRadius","spinAmount","textOrientation","textAlignment","idToLandOn","onSpinStart","onSpinComplete"],["wheel",""],[2,"padding-top","125px","padding-right","15px"],[1,"text-white","text-center"],[1,"d-flex","justify-content-between",2,"background-color","rgb(255, 230, 0)","height","50px","border","5px solid rgb(247, 38, 84)","border-style","double","width","105%"],[3,"matBadge","class","click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between",2,"background-image","url('assets/images/TripleFun/CancelBet.png')","background-repeat","no-repeat","background-size","cover","padding-bottom","20px","width","435px","margin-left","-38px"],[1,"chips-outer-div",2,"padding-top","8%","padding-left","15%"],["mat-fab","","value","bold","type","button","value","",3,"class","ngClass","click",4,"ngFor","ngForOf"],["fxFlex","35",1,"ml-2","mt-2",2,"color","white","font-weight","bold"],[1,"container","right-container"],[1,""],["colspan","4"],["colspan","4",2,"padding-left","100px"],[2,"text-align","end","color","white"],["id","result-table",1,"table",2,"margin-bottom","48px"],[1,"d-flex",2,"height","40px","border-radius","10px"],[1,"btn","btn-lg","btn-responsive","btn-primary",2,"font-size","95%","width","20%"],[1,"btn","btn-success","ml-1","btn-responsive",2,"font-size","95%",3,"click"],[1,"btn","btn-danger","ml-1","btn-responsive",2,"font-size","95%"],[1,"btn","btn-info","ml-1","btn-responsive",2,"font-size","95%"],[1,"btn","btn-warning","ml-1","btn-responsive",2,"font-size","95%","width","20%",3,"click"],[1,"d-flex"],[1,"col-4"],["id","print-section","directPrint","true","style","border: 2px solid black; margin-left: 0; display: none",4,"ngIf"],["class","d-flex",4,"ngIf"],[1,"pink"],["mat-fab","","matBadge","*",2,"border-radius","2px !important",3,"matBadgeHidden","click"],["colspan","10",1,"text-center"],["mat-fab","",1,"tripple-selection-button","coder-fab"],[3,"id"],[4,"ngFor","ngForOf"],["colspan","2","class","text-center align-middle",4,"ngFor","ngForOf"],["colspan","2",1,"text-center","align-middle"],["mat-raised-button","","value","bold","name","fontStyle","aria-label","Font Style",1,"triple-number-button",2,"font-size","larger","min-width","40px !important","padding","0px !important","min-height","40px",3,"matBadge","matBadgeHidden","click"],[3,"matBadge","click"],["mat-fab","","value","bold","type","button","value","",3,"ngClass","click"],["scope","row","class","current-result","colspan","2","class","text-center align-middle",4,"ngFor","ngForOf"],["scope","row","colspan","2",1,"text-center","align-middle"],[1,"result-heading","current-result"],[1,"bd-highlight","current-result"],["id","print-section","directPrint","true",2,"border","2px solid black","margin-left","0","display","none"],["style","font-weight: bold;",4,"ngIf"],[2,"font-weight","bold"],["style","white-space: nowrap",4,"ngFor","ngForOf"],[2,"white-space","nowrap"],[1,"col-3"],[3,"change"],[1,"col-6"],["id","print-button","printSectionId","print-section","ngxPrint","",3,"printStyle"]],template:function(t,n){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"table",5),d.TgZ(6,"thead",6),d.TgZ(7,"tr"),d.YNc(8,w,4,5,"th",7),d.qZA(),d._UZ(9,"div",8),d.YNc(10,y,5,1,"tr",9),d.qZA(),d.YNc(11,N,2,5,"tbody",10),d.qZA(),d.TgZ(12,"div",11),d.TgZ(13,"div",12),d.TgZ(14,"span",13),d._UZ(15,"img",14),d.TgZ(16,"h4",15),d._uU(17),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"div",16),d.TgZ(19,"div"),d.TgZ(20,"div",17),d.TgZ(21,"ngx-wheel",18,19),d.NdJ("onSpinStart",function(){return n.before()})("onSpinComplete",function(){return n.after()}),d.qZA(),d.TgZ(23,"div",20),d.TgZ(24,"span",21),d._uU(25,"SINGLES "),d.qZA(),d.TgZ(26,"div",22),d.YNc(27,I,2,5,"button",23),d.qZA(),d.TgZ(28,"div",24),d.TgZ(29,"div",25),d.YNc(30,D,1,4,"input",26),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(31,"div",27),d.TgZ(32,"div",28),d.TgZ(33,"table",29),d.TgZ(34,"thead"),d.TgZ(35,"tr"),d.TgZ(36,"th",30),d.TgZ(37,"div"),d._uU(38),d.qZA(),d.qZA(),d.TgZ(39,"th",31),d.TgZ(40,"div",32),d._uU(41,"RESULT SHEET"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(42,"table",33),d.TgZ(43,"tbody"),d.YNc(44,J,2,1,"ng-container",9),d.qZA(),d.qZA(),d.TgZ(45,"div",34),d.TgZ(46,"button",35),d._uU(47,"INFO"),d.qZA(),d.TgZ(48,"button",36),d.NdJ("click",function(){return n.resetMatrixValue()}),d._uU(49,"CLEAR"),d.qZA(),d.TgZ(50,"button",37),d._uU(51,"REPEAT"),d.qZA(),d.TgZ(52,"button",38),d._uU(53,"DOUBLE"),d.qZA(),d.TgZ(54,"button",39),d.NdJ("click",function(){return n.saveUserPlayInputDetails()}),d._uU(55,"BUY"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(56,"div",40),d._UZ(57,"div",41),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.YNc(58,Y,23,9,"div",42),d.YNc(59,L,4,1,"div",43),d.YNc(60,$,15,15,"div",43)),2&t&&(d.Q6J("ngClass",n.projectData.colorScheme),d.xp6(8),d.Q6J("ngForOf",n.singleNumbers),d.xp6(2),d.Q6J("ngIf",n.singleNumbers.length&&n.activeTripleContainerValue>-1),d.xp6(1),d.Q6J("ngForOf",n.numberCombinationMatrix),d.xp6(6),d.Oqu(n.totalTicketPurchased),d.xp6(4),d.Q6J("items",n.items)("innerRadius",20)("spinAmount",10)("textOrientation",n.textOrientation)("textAlignment",n.textAlignment)("idToLandOn",n.idToLandOn),d.xp6(6),d.Q6J("ngForOf",n.singleNumbers),d.xp6(3),d.Q6J("ngForOf",n.chips),d.xp6(8),d.hij("",n.currentDate,"\xa0 "),d.xp6(6),d.Q6J("ngIf",n.currentDateResult),d.xp6(14),d.Q6J("ngIf",n.lastPurchasedTicketDetails),d.xp6(1),d.Q6J("ngIf",!n.isProduction),d.xp6(1),d.Q6J("ngIf",!n.isProduction&&n.showDevArea))},directives:[a.mk,x.oO,v.xw,v.Wh,v.yH,a.sg,a.O5,m,M.lW,k.k,T.Rr,Z.I],pipes:[a.Ts],styles:['.coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.dark-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;width:100%}.dark-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid pink;height:0}.dark-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#bbbebb;border-radius:5px}.dark-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#7a7276;border-radius:5px}.dark-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{border:2px solid #ff69b4;border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.dark-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#cdb2dc}.dark-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.dark-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.dark-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.dark-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.dark-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.dark-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.green-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-color:#86a85f;background-repeat:no-repeat;background-size:cover;width:100%}.green-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:500px}.green-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid #c6f3af;height:0}.green-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#44fa3d;border-radius:5px}.green-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#ff69b400;border-radius:5px}.green-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#d5e8ac,#568725);border:2px solid #7fce87;border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.green-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#074503}.green-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.green-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.green-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.green-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.green-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.green-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.color-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-color:#ec6dc2;background-repeat:no-repeat;background-size:cover;width:100%}.color-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:500px}.color-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid pink;height:0}.color-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#44fa3d;border-radius:5px}.color-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:rgba(255,105,180,0);border-radius:5px}.color-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#fabfe6,#fc08bf);border:2px solid rgba(255,105,180,0);border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.color-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#a504fc}.color-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.color-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.color-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.color-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.color-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.color-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before, .mat-icon-button[_ngcontent-%COMP%]{border-radius:50%}.mat-icon-button[_ngcontent-%COMP%]{padding:0!important;min-width:0;width:20px;height:20px;flex-shrink:0;line-height:40px}span[_ngcontent-%COMP%]   .mat-fab[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%]{display:block;line-height:24px}#triple-body-0[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-1.png)!important;background-size:cover}#triple-body-1[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-2.png)!important;background-size:cover}#triple-body-2[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-3.png)!important;background-size:cover}#triple-body-3[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-4.png)!important;background-size:cover}#triple-body-4[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-5.png)!important;background-size:cover}#triple-body-5[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-6.png)!important;background-size:cover}#triple-body-6[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-7.png)!important;background-size:cover}#triple-body-7[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-8.png)!important;background-size:cover}#triple-body-8[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-9.png)!important;background-size:cover}#triple-body-9[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-10png.png)!important;background-size:cover}.chips-button-0[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-2.png)}.chips-button-0[_ngcontent-%COMP%], .chips-button-1[_ngcontent-%COMP%]{background-size:cover;width:50px;height:47px;background-color:#ffffff00;border:none}.chips-button-1[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-5.png)}.chips-button-2[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-10.png)}.chips-button-2[_ngcontent-%COMP%], .chips-button-3[_ngcontent-%COMP%]{background-size:cover;width:50px;height:47px;background-color:#ffffff00;border:none}.chips-button-3[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-20.png)}.chips-button-4[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-50.png)}.chips-button-4[_ngcontent-%COMP%], .chips-button-5[_ngcontent-%COMP%]{background-size:cover;width:50px;height:47px;background-color:#ffffff00;border:none}.chips-button-5[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-100.png)}#triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1px!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-0[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-1.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-1[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-2.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-2[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-3.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-3[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-4.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-4[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-5.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-5[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-6.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-6[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-7.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-7[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-8.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-8[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-9.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-9[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-10png.png)!important;background-size:cover}.triple-table-thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child{line-height:76px}.tripple-selection-button[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.tripple-selection-button[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.tripple-selection-button[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.right-td[_ngcontent-%COMP%]{font-size:small}.right-td[_ngcontent-%COMP%], .right-td1[_ngcontent-%COMP%]{width:95px;text-align:center;color:#fff}.right-td1[_ngcontent-%COMP%]{font-weight:700}.layer[_ngcontent-%COMP%]{background-color:hsla(0,30%,96%,.1);position:absolute;top:0;left:0;width:100%;min-height:100%}.left-div[_ngcontent-%COMP%]{width:300px;background-image:url(/assets/images/TripleFun/CancelBet.png);background-repeat:no-repeat;background-size:cover;margin-left:-19px;height:80px}#result-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-0[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-1[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-2[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-3[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-4[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-5[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-6[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-7[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-8[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-9[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:0}.current-result[_ngcontent-%COMP%]{color:#fff}.result-heading[_ngcontent-%COMP%]{background-color:rgba(255,166,0,.49)}.single-number-button-0[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-1.png)!important}.single-number-button-1[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-2.png)!important}.single-number-button-2[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-3.png)!important}.single-number-button-3[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-4.png)!important}.single-number-button-4[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-5.png)!important}.single-number-button-5[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-6.png)!important}.single-number-button-6[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-7.png)!important}.single-number-button-7[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-8.png)!important}.single-number-button-8[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-9.png)!important}.single-number-button-9[_ngcontent-%COMP%]{border-radius:5;background-color:url(/assets/images/btn-10png.png)!important}.selectedChipStyle[_ngcontent-%COMP%]{background-color:#ff009d;border:double;border-radius:5px}']}),n}(),K=[{path:"",canActivate:[(X=function(){function t(n){e(this,t),this.authService=n}return o(t,[{key:"canActivate",value:function(t,n){return this.authService.isTerminal()}}]),t}(),X.\u0275fac=function(t){return new(t||X)(d.LFG(O.e))},X.\u0275prov=d.Yz7({token:X,factory:X.\u0275fac,providedIn:"root"}),X)],component:W}],tt=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[c.Bz.forChild(K)],c.Bz]}),t}(),nt=r(13070),et=r(31041),it=r(9550),ot=r(69024),rt=r(13841),at=(r(19861),r(58378),r(87064));r(97388);var ct,st=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[at.BQ,at.si],at.BQ]}),t}(),gt=r(77154),ut=((ct=function t(){e(this,t)}).\u0275fac=function(t){return new(t||ct)},ct.\u0275mod=d.oAB({type:ct}),ct.\u0275inj=d.cJS({imports:[[a.ez,tt,k.g,nt.lN,et.UX,it.c,ot.FA,rt.LD,T.rP,k.g,M.ot,st,gt.o9,Z.K,h]]}),ct)}}])}();