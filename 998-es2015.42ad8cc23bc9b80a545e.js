(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[998],{57998:function(t,e,n){"use strict";n.r(e),n.d(e,{TerminalModule:function(){return gt}});var i=n(38583),o=n(63423),r=n(64762),c=n(92340),a=n(88259),s=n.n(a),g=n(30135),d=n(37716),l=n(13865),u=n(5620),p=n(73535),b=n(80291),m=n(44502),h=n(81397),x=n(97070),f=n(88030),C=n(35618),_=n(95913),O=n(51095),P=n(70346),M=n(45396);function k(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"th",64),d.TgZ(1,"button",65),d.NdJ("click",function(){const e=d.CHM(t).index;return d.oxw().setActiveTripleContainerValue(e)}),d.TgZ(2,"span"),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&t){const t=e.$implicit,n=e.index,i=d.oxw();d.xp6(1),d.Gre("triple-selection-button-",n," tripple-selection-button"),d.Q6J("matBadgeHidden",i.activeTripleContainerValue!=n),d.xp6(2),d.Oqu(t.singleNumber)}}function v(t,e){if(1&t&&(d.TgZ(0,"tr"),d.TgZ(1,"th",66),d.TgZ(2,"button",67),d.TgZ(3,"span"),d._uU(4),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t){const t=d.oxw();d.xp6(4),d.Oqu(t.singleNumbers[t.activeTripleContainerValue].singleNumber)}}function Z(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"td",71),d.TgZ(1,"button",72),d.NdJ("click",function(){const e=d.CHM(t).$implicit,n=d.oxw(3).index;return d.oxw().setGameInputSet(e,n,2)}),d._uU(2),d.qZA(),d.qZA()}if(2&t){const t=e.$implicit;d.xp6(1),d.s9C("matBadge",t.quantity),d.Q6J("matBadgeHidden",!1),d.xp6(1),d.hij(" ",t.visibleTripleNumber," ")}}function T(t,e){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,Z,3,3,"td",70),d.qZA()),2&t){const t=e.index,n=d.oxw(2).$implicit,i=d.oxw();d.xp6(1),d.Q6J("ngForOf",n.numberCombinations.slice(t*i.columnNumber,t*i.columnNumber+i.columnNumber))}}function w(t,e){if(1&t&&(d.ynx(0),d.YNc(1,T,2,1,"tr",69),d.BQk()),2&t){const t=d.oxw().$implicit,e=d.oxw();d.xp6(1),d.Q6J("ngForOf",t.numberCombinations.slice(0,t.numberCombinations.length%e.columnNumber==0?t.numberCombinations.length/e.columnNumber:t.numberCombinations.length/e.columnNumber+1))}}function y(t,e){if(1&t&&(d.TgZ(0,"tbody",68),d.YNc(1,w,2,1,"ng-container",10),d.qZA()),2&t){const t=e.index,n=d.oxw();d.Gre("table-div-",t,""),d.MGl("id","triple-body-",t,""),d.xp6(1),d.Q6J("ngIf",n.isActiveTripleContainter(t))}}function A(t,e){if(1&t&&(d.TgZ(0,"span"),d.TgZ(1,"h1"),d._uU(2),d.qZA(),d.qZA()),2&t){const t=d.oxw();d.xp6(2),d.Oqu(t.todayLastResult.data.visible_triple_number)}}function q(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"button",73),d.NdJ("click",function(){const e=d.CHM(t).$implicit;return d.oxw().setGameInputSet(e,1,1)}),d._uU(1),d.qZA()}if(2&t){const t=e.$implicit;d.Gre("single-number-button-",e.index,""),d.s9C("matBadge",t.quantity),d.xp6(1),d.Oqu(t.singleNumber)}}function N(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"input",74),d.NdJ("click",function(){const e=d.CHM(t).$implicit;return d.oxw().changeChip(e)}),d.qZA()}if(2&t){const t=e.$implicit,n=e.index,i=d.oxw();d.Gre("chips-button-",n,""),d.Q6J("ngClass",i.selectedChip==t?"selectedChipStyle":"")}}function S(t,e){1&t&&d._UZ(0,"span")}function I(t,e){1&t&&(d.TgZ(0,"span"),d._UZ(1,"img",81),d.qZA())}function z(t,e){if(1&t&&(d.TgZ(0,"div",78),d.TgZ(1,"div",79),d._uU(2),d.qZA(),d.TgZ(3,"div",80),d._uU(4),d.qZA(),d.TgZ(5,"div",80),d.YNc(6,S,1,0,"span",10),d._uU(7),d.YNc(8,I,2,0,"span",10),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.Oqu(t.end_time.slice(0,5)),d.xp6(2),d.Oqu(t.visible_triple_number||"***"),d.xp6(2),d.Q6J("ngIf",null!=t.single_number),d.xp6(1),d.hij("",t.single_number," "),d.xp6(1),d.Q6J("ngIf",null==t.single_number)}}function J(t,e){if(1&t&&(d.TgZ(0,"td",76),d.YNc(1,z,9,5,"div",77),d.qZA()),2&t){const t=e.index,n=d.oxw().$implicit,i=d.oxw(2);d.xp6(1),d.Q6J("ngForOf",n.slice(t*i.columnNumber2,t*i.columnNumber2+i.columnNumber2))}}function D(t,e){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,J,2,1,"td",75),d.qZA()),2&t){const t=e.$implicit,n=d.oxw(2);d.xp6(1),d.Q6J("ngForOf",t.slice(0,t.length%n.columnNumber2==0?t.length/n.columnNumber2:t.length/n.columnNumber2+1))}}function U(t,e){if(1&t&&(d.ynx(0),d.YNc(1,D,2,1,"tr",69),d.BQk()),2&t){const t=d.oxw();d.xp6(1),d.Q6J("ngForOf",t.currentResultList)}}function F(t,e){1&t&&(d.TgZ(0,"div",84),d._uU(1,"Single"),d.qZA())}function B(t,e){if(1&t&&(d.TgZ(0,"td",86),d._uU(1),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.AsE(" ",t.singleNumber,"-",t.quantity,", ")}}function G(t,e){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,B,2,2,"td",85),d.qZA()),2&t){const t=e.index,n=d.oxw(2);d.xp6(1),d.Q6J("ngForOf",n.lastPurchasedTicketSingle.slice(5*t,5*t+5))}}function Q(t,e){1&t&&(d.TgZ(0,"div",84),d._uU(1,"Triple"),d.qZA())}function L(t,e){if(1&t&&(d.TgZ(0,"td",86),d._uU(1),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.AsE(" ",t.visibleTripleNumber," - ",t.quantity,", ")}}function Y(t,e){if(1&t&&(d.TgZ(0,"tr"),d.YNc(1,L,2,2,"td",85),d.qZA()),2&t){const t=e.index,n=d.oxw(2);d.xp6(1),d.Q6J("ngForOf",n.lastPurchasedTicketTriple.slice(5*t,5*t+5))}}function R(t,e){if(1&t&&(d.TgZ(0,"div",82),d._uU(1," Kfatafat "),d.TgZ(2,"div"),d.TgZ(3,"div"),d._uU(4),d.qZA(),d.TgZ(5,"div"),d._uU(6),d.qZA(),d.TgZ(7,"div"),d._uU(8),d.qZA(),d.TgZ(9,"div"),d._uU(10),d.qZA(),d.TgZ(11,"div"),d._uU(12),d.qZA(),d.qZA(),d.TgZ(13,"div"),d.YNc(14,F,2,0,"div",83),d.TgZ(15,"table"),d.TgZ(16,"tbody"),d.YNc(17,G,2,1,"tr",69),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"div"),d.YNc(19,Q,2,0,"div",83),d.TgZ(20,"table"),d.TgZ(21,"tbody"),d.YNc(22,Y,2,1,"tr",69),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t){const t=d.oxw();d.xp6(4),d.hij("Terminal: ",t.lastPurchasedTicketDetails.data.play_master.terminal.terminalId,""),d.xp6(2),d.hij("Ticket ID: ",t.lastPurchasedTicketDetails.data.play_master.barcodeNumber,""),d.xp6(2),d.hij("Draw time: ",t.lastPurchasedTicketDetails.data.play_master.drawTime.visibleTime,""),d.xp6(2),d.hij("Ticket time: ",t.lastPurchasedTicketDetails.data.play_master.ticketTakenTime,""),d.xp6(2),d.hij("Total point: ",t.lastPurchasedTicketDetails.data.amount,""),d.xp6(2),d.Q6J("ngIf",t.lastPurchasedTicketSingle.length),d.xp6(3),d.Q6J("ngForOf",t.lastPurchasedTicketSingle.slice(0,t.lastPurchasedTicketSingle.length%5==0?t.lastPurchasedTicketSingle.length/5:t.lastPurchasedTicketSingle.length/5+1)),d.xp6(2),d.Q6J("ngIf",t.lastPurchasedTicketTriple.length),d.xp6(3),d.Q6J("ngForOf",t.lastPurchasedTicketTriple.slice(0,t.lastPurchasedTicketTriple.length%5==0?t.lastPurchasedTicketTriple.length/5:t.lastPurchasedTicketTriple.length/5+1))}}function j(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"div",87),d.TgZ(1,"div",58),d.TgZ(2,"mat-slide-toggle",88),d.NdJ("change",function(){d.CHM(t);const e=d.oxw();return e.showDevArea=!e.showDevArea}),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&t){const t=d.oxw();d.xp6(3),d.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}const H=function(){return{color:"red"}},E=function(){return{border:"solid 3px"}},V=function(t,e){return{h1:t,h2:e}};function $(t,e){if(1&t&&(d.TgZ(0,"div",24),d.TgZ(1,"div",29),d.TgZ(2,"button",89),d._uU(3,"print"),d.qZA(),d.TgZ(4,"pre"),d._uU(5,"        "),d._uU(6),d.ALo(7,"json"),d.qZA(),d.qZA(),d.TgZ(8,"div",58),d.TgZ(9,"pre"),d._uU(10,"        "),d._uU(11,"\n      "),d.qZA(),d.qZA(),d.qZA()),2&t){const t=d.oxw();d.xp6(2),d.Q6J("printStyle",d.WLB(6,V,d.DdM(4,H),d.DdM(5,E))),d.xp6(4),d.hij("\n        todayLastResult = ",d.lcZ(7,2,t.todayLastResult),"\n      ")}}const W=function(t){return{"background-color":t}},X=function(){return["/terminalReport"]};let K=(()=>{class t{constructor(t,e,n,i,o,r,a,s){this.playGameService=t,this.commonService=e,this.authService=n,this.ngxPrinterService=i,this.renderer=o,this.watchDrawService=r,this.gameService=a,this.gameResultService=s,this.seed=[...Array(10).keys()],this.textOrientation=g.xr.HORIZONTAL,this.textAlignment=g.H.OUTER,this.showDeveloperDiv=!0,this.singleNumbers=[],this.numberCombinationMatrix=[],this.chips=[],this.userGameInput=[],this.columnNumber=5,this.columnNumber2=5,this.columnNumber3=1,this.bgColor="darkblue",this.gameBackgroundColorArr=["#00008B","#133201","#B3032A","#7C05AD"],this.activeTripleContainerValue=0,this.selectedChip=2,this.isProduction=c.N.production,this.showDevArea=!1;const d=document.querySelector(".layer");this.renderer.setStyle(d,"background-color"," rgba(78, 180, 248, 0.1)"),this.currentDate=this.commonService.getCurrentDate(),this.deviceXs=this.commonService.deviceXs,this.playGameService.getTodayLastResultListener().subscribe(t=>{this.todayLastResult=t}),this.watchDrawService.getNextDrawListener().subscribe(t=>{this.nextDrawId=t,setTimeout(()=>{void 0!==this.todayLastResult&&(this.wheel.reset(),this.spin(this.todayLastResult.data.single_number).then(t=>{}))},2e3)}),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.copyNumberMatrix=JSON.parse(JSON.stringify(this.numberCombinationMatrix)),this.singleNumbers=this.playGameService.getSingleNumbers(),this.copySingleNumber=JSON.parse(JSON.stringify(this.singleNumbers))}ngOnInit(){this.idToLandOn=this.seed[Math.floor(Math.random()*this.seed.length)];const t=["#FFA500","#8B008B","#FF1493","#20B2AA","#8B0000","#00FF00","#e0e000","#0000FF","#6A5ACD","#cd5c5c"];this.items=this.seed.map(e=>({fillStyle:t[e%10],text:`${e}`,id:e,textFillStyle:"white",textFontSize:"40"})),this.selectedGame=1,this.gameResultService.getResultByCurrentDate(1),this.gameResultService.getResultByCurrentDateListener().subscribe(t=>{this.currentResultList=t}),this.user=this.authService.userBehaviorSubject.value,this.playGameService.getNumberCombinationMatrixListener().subscribe(t=>{this.numberCombinationMatrix=t,this.copyNumberMatrix=JSON.parse(JSON.stringify(this.numberCombinationMatrix))}),this.playGameService.getSingleNumberListener().subscribe(t=>{this.singleNumbers=t,this.copySingleNumber=JSON.parse(JSON.stringify(this.singleNumbers))}),this.commonService.currentTimeBehaviorSubject.asObservable().subscribe(t=>{this.alwaysTime=t}),this.commonService.remainingTimeBehaviorSubject.asObservable().subscribe(t=>{this.remainingTime=t;const e=String(this.remainingTime).split(":");this.value=parseInt(e[0])}),this.projectData=this.commonService.getProjectData(),this.chips=this.projectData.chips,this.commonService.getVariableSettingsListener().subscribe(t=>{this.projectData=t,this.chips=this.projectData.chips}),this.activeDrawTime=this.commonService.getActiveDrawTime(),this.commonService.getActiveDrawTimeListener().subscribe(t=>{this.activeDrawTime=t}),this.nextDrawId=this.watchDrawService.getNextDraw(),this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(t=>{this.games=t})}resultButton(t){this.gameResultService.getResultByCurrentDate(t)}reset(){this.wheel.reset()}before(){console.log("Your wheel is about to spin")}spin(t){return(0,r.mG)(this,void 0,void 0,function*(){this.idToLandOn=t,yield new Promise(t=>setTimeout(t,0)),this.wheel.spin()})}after(){console.log("You have been bamboozled")}isActiveTripleContainter(t){return this.activeTripleContainerValue==t}setActiveTripleContainerValue(t){this.activeTripleContainerValue=t}setGameInputSet(t,e,n){let i=-1;1==n?i=this.userGameInput.findIndex(e=>e.singleNumberId===t.singleNumberId):2==n&&(i=this.userGameInput.findIndex(e=>e.numberCombinationId===t.numberCombinationId)),i>-1?(this.userGameInput[i].quantity+=this.selectedChip,t.quantity=this.userGameInput[i].quantity):(this.userGameInput.push({gameTypeId:n,numberCombinationId:t.numberCombinationId,singleNumberId:t.singleNumberId,quantity:this.selectedChip,mrp:1}),t.quantity=this.selectedChip),this.totalTicketPurchased=this.userGameInput.map(t=>t.quantity).reduce(function(t,e){return t+e})}changeChip(t){this.selectedChip=t}resetMatrixValue(){this.userGameInput=[],this.numberCombinationMatrix=JSON.parse(JSON.stringify(this.copyNumberMatrix)),this.singleNumbers=JSON.parse(JSON.stringify(this.copySingleNumber)),this.totalTicketPurchased=0}printDiv(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.printDiv("print-section"),this.ngxPrinterService.printOpenWindow=!1}saveUserPlayInputDetails(){s().fire({title:"Confirmation",text:"Do you sure to buy ticket?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(t=>{t.isConfirmed&&this.playGameService.saveUserPlayInputDetails({playMaster:{drawMasterId:this.activeDrawTime.drawId,terminalId:this.user.userId,gameId:this.selectedGame},playDetails:this.userGameInput}).subscribe(t=>{if(1===t.success){this.lastPurchasedTicketDetails=t,this.lastPurchasedTicketSingle=this.lastPurchasedTicketDetails.data.game_input.single_game_data,this.lastPurchasedTicketTriple=this.lastPurchasedTicketDetails.data.game_input.triple_game_data;const e=t.data;s().fire({position:"top-end",icon:"success",title:"Ticket purchased",showConfirmButton:!1,timer:1e3}),this.authService.setUserBalanceBy(e.play_master.terminal.balance),this.resetMatrixValue(),setTimeout((function(){document.getElementById("print-button").click()}).bind(this),3e3)}else s().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}setActiveGame(t){this.selectedGame=t.id,this.commonService.gameDrawTime(this.selectedGame),this.bgColor=this.gameBackgroundColorArr[t.id-1]}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(l.M),d.Y36(u.v),d.Y36(p.e),d.Y36(b.Al),d.Y36(d.Qsj),d.Y36(m.n),d.Y36(h.h),d.Y36(x.W))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-terminal"]],viewQuery:function(t,e){if(1&t&&d.Gf(g.G7,5),2&t){let t;d.iGM(t=d.CRH())&&(e.wheel=t.first)}},decls:88,vars:37,consts:[[2,"height","100vh",3,"ngStyle"],["id","outer-div",1,"scroll",3,"ngClass"],["id","bg",1,"d-flex","flex-row","bd-highlight","mb-3"],["id","background",1,"p-2","background","body","bd-highlight"],["fxLayout","row","fxLayoutAlign",""],["id","table-1","fxFlex","35",1,"mt-2"],["id","triple-table",1,"table",2,"border","5px solid lightgoldenrodyellow"],[1,"mt-5","triple-table-thead"],["class","pink",4,"ngFor","ngForOf"],[2,"background-image","url('/assets/images/btn-1.png')"],[4,"ngIf"],[3,"id","class",4,"ngFor","ngForOf"],[1,"",2,"height","50px","border-radius","10px","padding-top","20px","padding-left","0px"],[1,"d-flex","mt-2",2,"height","40px","border-radius","10px","text-align","center","padding-right","100px"],[1,"btn","btn-lg","btn-responsive","btn-primary",2,"font-size","100%","width","50%","text-align","center","border","8px solid rgb(255, 255, 255)","height","145%","border-style","double",3,"click"],[1,"btn","btn-success","ml-1","btn-responsive",2,"font-size","100%","width","50%","border","8px solid rgb(253, 253, 253)","height","145%","border-style","double",3,"click"],[1,"d-flex",2,"height","60px","border-radius","10px","padding-top","20px","padding-right","100px"],[1,"btn","btn-danger","ml-1","btn-responsive",2,"font-size","100%","width","50%","height","170%","border","8px solid rgb(255, 255, 255)","border-style","double",3,"disabled","click"],["id","print-button",1,"btn","btn-info","ml-1","btn-responsive",2,"font-size","100%","width","50%","height","170%","border","8px solid rgb(255, 255, 255)","border-style","double",3,"disabled","click"],["fxFlex","30"],[1,"text-center"],[2,"padding-top","px","text-align","center","background-repeat","no-repeat","min-height","100px"],["width","250","height","250","spinDuration","8","pointerStrokeColor","black","pointerFillColor","#DC143C",2,"padding-left","40px","padding-top","10px","text-align","center",3,"disableSpinOnClick","items","innerRadius","spinAmount","textOrientation","textAlignment","idToLandOn","onSpinStart","onSpinComplete"],["wheel",""],[1,"d-flex"],[1,"col-5"],[1,"col-2","mt-3",2,"color","white","font-size","larger","height","63px !important","background-size","cover"],[2,"padding-top","10px","padding-right","25px"],[1,"col-2",2,"color","white","font-weight","bold","margin-left","11px"],[1,"col-6"],[2,"padding-left","15px"],[1,"d-flex","justify-content-between",2,"background-color","rgb(255, 230, 0)","height","43px","border","5px solid rgb(247, 38, 84)","border-style","double","width","105%","color","white","margin","10px"],["style","color: rgb(28, 12, 90); font-weight: bold; ","type","button",3,"matBadge","class","click",4,"ngFor","ngForOf"],[1,"d-flex",2,"background-image","url('assets/images/number-background.png')","background-repeat","no-repeat","background-size","cover","padding-bottom","20px","width","435px","margin-left","4px","padding-right","20px"],[1,"chips-outer-div",2,"padding-top","8%","padding-left","15%"],["mat-fab","","value","bold","type","button","value","",3,"class","ngClass","click",4,"ngFor","ngForOf"],[2,"background-image","url('/assets/images/place.png')","background-size","cover","height","90px"],["fxFlex","35",1,"ml-2","mt-2",2,"color","white","font-weight","bold"],[1,"container","right-container"],[1,""],["colspan","4"],["colspan","4",2,"padding-left","100px"],[2,"text-align","end","color","white"],[1,"scroll",2,"max-height","330px !important","overflow","scroll"],["id","result-table",1,"table",2,"margin-bottom","48px","border-radius","10px","background-image","url('/assets/images/resultBackgroung.jpg')","background-size","cover","font-size","20px"],[1,"d-flex","mt-2",2,"height","40px","border-radius","10px","text-align","center","padding-left","100px"],[1,"btn","btn-lg","btn-responsive","btn-primary",2,"font-size","100%","width","50%","text-align","center","border","8px solid rgb(255, 255, 255)","height","145%","border-style","double"],[1,"d-flex",2,"height","60px","border-radius","10px","padding-top","20px","padding-left","97px"],[1,"btn","btn-danger","ml-1","btn-responsive",2,"font-size","100%","width","50%","height","145%","border","8px solid rgb(255, 255, 255)","border-style","double",3,"routerLink"],["id","print-button","printSectionId","print-section","ngxPrint","",1,"btn","btn-info","ml-1","btn-responsive",2,"font-size","100%","width","50%","height","145%","border","8px solid rgb(255, 255, 255)","border-style","double",3,"printStyle"],[1,"d-flex",2,"height","50px","border-radius","10px","padding-top","20px","padding-left","151px"],[1,"d-flex",2,"height","60px","border-radius","10px","padding-top","20px","padding-left","18px"],[1,"col-1"],[1,"col-2",2,"margin-bottom","20px","margin-left","45px"],[1,"left-div",2,"padding-top","15px"],[1,"d-flex",2,"padding-left","px","color","black"],["src","assets/images/play.png","height","70px","alt",""],[2,"font-weight","bolder","font-size","large","padding-top","15px","padding-left","20px"],[1,"col-3"],[1,"btn","btn-warning","ml-4","btn-responsive","col-4",2,"font-size","100%","width","50%","height","145%","border","8px solid rgb(255, 255, 255)","border-style","double",3,"disabled","click"],["behavior","","direction","",2,"color","white","font-size","50px","font-weight","bold"],["id","print-section","directPrint","true","style","border: 2px solid black; margin-left: 0; display: none",4,"ngIf"],["class","d-flex mt-5",4,"ngIf"],["class","d-flex",4,"ngIf"],[1,"pink"],["mat-fab","","matBadge","*",2,"border-radius","2px !important",3,"matBadgeHidden","click"],["colspan","10",1,"text-center"],["mat-fab","",1,"tripple-button","coder-fab"],[3,"id"],[4,"ngFor","ngForOf"],["colspan","2","class","text-center align-middle","style","max-width: 100% !important;",4,"ngFor","ngForOf"],["colspan","2",1,"text-center","align-middle",2,"max-width","100% !important"],["mat-raised-button","","value","bold","name","fontStyle","aria-label","Font Style",1,"triple-number-button",2,"font-size","larger","min-width","97% !important","padding","0px !important","min-height","40px",3,"matBadge","matBadgeHidden","click"],["type","button",2,"color","rgb(28, 12, 90)","font-weight","bold",3,"matBadge","click"],["mat-fab","","value","bold","type","button","value","",3,"ngClass","click"],["class","text-center align-middle",4,"ngFor","ngForOf"],[1,"text-center","align-middle"],["scope","row","class","current-result","colspan","2",4,"ngFor","ngForOf"],["scope","row","colspan","2",1,"current-result"],[1,"result-heading","current-result"],[1,"bd-highlight","current-result"],["src","assets/images/singleStar3.gif","height","20px","alt",""],["id","print-section","directPrint","true",2,"border","2px solid black","margin-left","0","display","none"],["style","font-weight: bold;",4,"ngIf"],[2,"font-weight","bold"],["style","white-space: nowrap",4,"ngFor","ngForOf"],[2,"white-space","nowrap"],[1,"d-flex","mt-5"],[3,"change"],["id","print-button","printSectionId","print-section","ngxPrint","",3,"printStyle"]],template:function(t,e){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d.TgZ(6,"table",6),d.TgZ(7,"thead",7),d.TgZ(8,"tr"),d.YNc(9,k,4,5,"th",8),d.qZA(),d._UZ(10,"div",9),d.YNc(11,v,5,1,"tr",10),d.qZA(),d.YNc(12,y,2,5,"tbody",11),d.qZA(),d.TgZ(13,"div",12),d.TgZ(14,"div",13),d.TgZ(15,"button",14),d.NdJ("click",function(){return e.resultButton(1)})("click",function(){return e.setActiveGame(e.games[0])}),d._uU(16),d.qZA(),d.TgZ(17,"button",15),d.NdJ("click",function(){return e.resultButton(2)})("click",function(){return e.setActiveGame(e.games[1])}),d._uU(18),d.qZA(),d.qZA(),d.TgZ(19,"div",16),d.TgZ(20,"button",17),d.NdJ("click",function(){return e.resultButton(3)})("click",function(){return e.setActiveGame(e.games[2])}),d._uU(21),d.qZA(),d.TgZ(22,"button",18),d.NdJ("click",function(){return e.resultButton(4)})("click",function(){return e.setActiveGame(e.games[3])}),d._uU(23),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(24,"div",19),d.TgZ(25,"div",20),d.TgZ(26,"div",21),d.TgZ(27,"ngx-wheel",22,23),d.NdJ("onSpinStart",function(){return e.before()})("onSpinComplete",function(){return e.after()}),d.qZA(),d.TgZ(29,"div",24),d._UZ(30,"div",25),d.TgZ(31,"div",26),d.YNc(32,A,3,1,"span",10),d.qZA(),d._UZ(33,"div",25),d.qZA(),d.TgZ(34,"div",27),d.TgZ(35,"div",24),d._UZ(36,"div",25),d.TgZ(37,"div",28),d._uU(38,"SINGLES"),d.qZA(),d._UZ(39,"div",29),d.qZA(),d.TgZ(40,"div",30),d.TgZ(41,"div",31),d.YNc(42,q,2,5,"button",32),d.qZA(),d.qZA(),d.TgZ(43,"div",33),d.TgZ(44,"div",34),d.YNc(45,N,1,4,"input",35),d.qZA(),d.qZA(),d.qZA(),d._UZ(46,"div",36),d.qZA(),d.qZA(),d.qZA(),d.TgZ(47,"div",37),d.TgZ(48,"div",38),d.TgZ(49,"table",39),d.TgZ(50,"thead"),d.TgZ(51,"tr"),d._UZ(52,"th",40),d.TgZ(53,"th",41),d.TgZ(54,"div",42),d._uU(55,"RESULT SHEET"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(56,"div",43),d.TgZ(57,"table",44),d.TgZ(58,"tbody"),d.YNc(59,U,2,1,"ng-container",10),d.qZA(),d.qZA(),d.qZA(),d.TgZ(60,"div",45),d.TgZ(61,"button",46),d._uU(62,"INFO"),d.qZA(),d.TgZ(63,"button",15),d.NdJ("click",function(){return e.resetMatrixValue()}),d._uU(64,"CLEAR"),d.qZA(),d.qZA(),d.TgZ(65,"div",47),d.TgZ(66,"button",48),d._uU(67,"REPORT"),d.qZA(),d.TgZ(68,"button",49),d._uU(69,"PRINT"),d.qZA(),d.qZA(),d._UZ(70,"div",50),d.TgZ(71,"div",51),d._UZ(72,"div",52),d.TgZ(73,"div",53),d.TgZ(74,"div",54),d.TgZ(75,"span",55),d._UZ(76,"img",56),d.TgZ(77,"h4",57),d._uU(78),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(79,"div",58),d.TgZ(80,"button",59),d.NdJ("click",function(){return e.saveUserPlayInputDetails()}),d._uU(81,"BUY"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(82,"div"),d.TgZ(83,"marquee",60),d._uU(84,"Welcome"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.YNc(85,R,23,9,"div",61),d.YNc(86,j,4,1,"div",62),d.YNc(87,$,12,9,"div",63)),2&t&&(d.Q6J("ngStyle",d.VKq(29,W,e.bgColor)),d.xp6(1),d.Q6J("ngClass",e.projectData.colorScheme),d.xp6(8),d.Q6J("ngForOf",e.singleNumbers),d.xp6(2),d.Q6J("ngIf",e.singleNumbers.length&&e.activeTripleContainerValue>-1),d.xp6(1),d.Q6J("ngForOf",e.numberCombinationMatrix),d.xp6(4),d.Oqu(e.games[0].game_name),d.xp6(2),d.Oqu(e.games[1].game_name),d.xp6(2),d.Q6J("disabled","no"===e.games[2].active),d.xp6(1),d.Oqu(e.games[2].game_name),d.xp6(1),d.Q6J("disabled","no"===e.games[3].active),d.xp6(1),d.Oqu(e.games[3].game_name),d.xp6(4),d.Q6J("disableSpinOnClick",!0)("items",e.items)("innerRadius",20)("spinAmount",10)("textOrientation",e.textOrientation)("textAlignment",e.textAlignment)("idToLandOn",e.idToLandOn),d.xp6(5),d.Q6J("ngIf",e.todayLastResult&&null!=e.todayLastResult.data),d.xp6(10),d.Q6J("ngForOf",e.singleNumbers),d.xp6(3),d.Q6J("ngForOf",e.chips),d.xp6(14),d.Q6J("ngIf",e.currentResultList),d.xp6(7),d.Q6J("routerLink",d.DdM(31,X)),d.xp6(2),d.Q6J("printStyle",d.WLB(34,V,d.DdM(32,H),d.DdM(33,E))),d.xp6(10),d.Oqu(e.totalTicketPurchased),d.xp6(2),d.Q6J("disabled",e.value<0),d.xp6(5),d.Q6J("ngIf",e.lastPurchasedTicketDetails),d.xp6(1),d.Q6J("ngIf",!e.isProduction),d.xp6(1),d.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[i.PC,f.Zl,i.mk,f.oO,C.xw,C.Wh,C.yH,i.sg,i.O5,g.G7,o.rH,_.I,O.lW,P.k,M.Rr],pipes:[i.Ts],styles:['.coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.dark-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;width:100%;max-height:90px}.dark-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid pink;height:0}.dark-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#bbbebb;border-radius:5px}.dark-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#7a7276;border-radius:5px}.dark-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{border:2px solid hotpink;border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.dark-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#cdb2dc}.dark-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.dark-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.dark-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.dark-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.dark-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.dark-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.green-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-color:#86a85f;background-repeat:no-repeat;background-size:cover;width:100%}.green-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:500px}.green-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid #c6f3af;height:0}.green-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#44fa3d;border-radius:5px}.green-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#ff69b400;border-radius:5px}.green-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#d5e8ac,#568725);border:2px solid #7fce87;border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.green-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#074503}.green-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.green-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.green-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.green-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.green-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.green-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.color-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-color:#ec6dc2;background-repeat:no-repeat;background-size:cover;width:100%}.color-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:500px}.color-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid pink;height:0}.color-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#44fa3d;border-radius:5px}.color-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:rgba(255,105,180,0);border-radius:5px}.color-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#fabfe6,#fc08bf);border:2px solid rgba(255,105,180,0);border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.color-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#a504fc}.color-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.color-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.color-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.color-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.color-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.color-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before, .mat-icon-button[_ngcontent-%COMP%]{border-radius:50%}.mat-icon-button[_ngcontent-%COMP%]{padding:0!important;min-width:0;width:20px;height:20px;flex-shrink:0;line-height:40px}span[_ngcontent-%COMP%]   .mat-fab[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%]{display:block;line-height:24px}#triple-body-0[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#fa874d!important;background-size:cover}#triple-body-1[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#fc58c5!important;background-size:cover}#triple-body-2[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#7eb0fa!important;background-size:cover}#triple-body-3[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#fadb4f!important;background-size:cover}#triple-body-4[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#d5a6fc!important;background-size:cover}#triple-body-5[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#fd9996!important;background-size:cover}#triple-body-6[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#83f19b!important;background-size:cover}#triple-body-7[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#0ff!important;background-size:cover}#triple-body-8[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#fd8499!important;background-size:cover}#triple-body-9[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:#72ca76!important;background-size:cover}.chips-button-0[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-2.png)}.chips-button-0[_ngcontent-%COMP%], .chips-button-1[_ngcontent-%COMP%]{background-size:cover;width:50px;height:47px;background-color:#ffffff00;border:none}.chips-button-1[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-5.png)}.chips-button-2[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-10.png)}.chips-button-2[_ngcontent-%COMP%], .chips-button-3[_ngcontent-%COMP%]{background-size:cover;width:50px;height:47px;background-color:#ffffff00;border:none}.chips-button-3[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-20.png)}.chips-button-4[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-50.png)}.chips-button-4[_ngcontent-%COMP%], .chips-button-5[_ngcontent-%COMP%]{background-size:cover;width:50px;height:47px;background-color:#ffffff00;border:none}.chips-button-5[_ngcontent-%COMP%]{background-image:url(/assets/images/newImg/coin-100.png)}#triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1px!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-0[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-1.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-1[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-2.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-2[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-3.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-3[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-4.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-4[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-5.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-5[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-6.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-6[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-7.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-7[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-8.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-8[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-9.png)!important;background-size:cover}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-9[_ngcontent-%COMP%]{background-image:url(/assets/images/btn-10png.png)!important;background-size:cover}.triple-table-thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child{line-height:76px}.tripple-selection-button[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.tripple-selection-button[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.tripple-selection-button[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.right-td[_ngcontent-%COMP%]{font-size:small}.right-td[_ngcontent-%COMP%], .right-td1[_ngcontent-%COMP%]{width:95px;text-align:center;color:#fff}.right-td1[_ngcontent-%COMP%]{font-weight:700}.layer[_ngcontent-%COMP%]{background-color:hsla(0,30%,96%,.1);position:absolute;top:0;left:0;width:100%;min-height:100%}.left-div[_ngcontent-%COMP%]{width:200px;background-image:url(/assets/images/TripleFun/CancelBet.png);background-repeat:no-repeat;background-size:cover;margin-left:-19px;height:80px}#result-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-0[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-1[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-2[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-3[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-4[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-5[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-6[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-7[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-8[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], #triple-body-9[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:0}.current-result[_ngcontent-%COMP%]{color:#fff}.result-heading[_ngcontent-%COMP%]{background-color:rgba(0,17,255,.486)}.single-number-button-0[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-0.png)!important;background-size:cover;width:36%}.single-number-button-1[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-1.png)!important;background-size:cover;width:36%}.single-number-button-2[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-2.png)!important;background-size:cover;width:36%}.single-number-button-3[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-3.png)!important;background-size:cover;width:36%}.single-number-button-4[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-4.png)!important;background-size:cover;width:36%}.single-number-button-5[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-5.png)!important;background-size:cover;width:36%}.single-number-button-6[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-6.png)!important;background-size:cover;width:36%}.single-number-button-7[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-7.png)!important;background-size:cover;width:36%}.single-number-button-8[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-8.png)!important;background-size:cover;width:36%}.single-number-button-9[_ngcontent-%COMP%]{background-image:url(/assets/images/single/single-9.png)!important;background-size:cover;width:36%}.selectedChipStyle[_ngcontent-%COMP%]{background-color:#ff009d;border:double;border-radius:5px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.scroll[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}']}),t})();const tt=[{path:"",canActivate:[n(1982).v],component:K}];let et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[o.Bz.forChild(tt)],o.Bz]}),t})();var nt=n(98295),it=n(3679),ot=n(49983),rt=n(43220),ct=n(67441),at=n(42542),st=n(15566);let gt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[i.ez,et,P.g,nt.lN,it.UX,ot.c,it.u5,rt.FA,ct.LD,M.rP,P.g,O.ot,at.vV,st.o9,_.K,g.sg]]}),t})()}}]);