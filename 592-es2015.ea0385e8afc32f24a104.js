(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[592],{64510:function(t,e,n){"use strict";n.d(e,{I:function(){return r},K:function(){return s}});var i=n(35366);let r=(()=>{class t{constructor(){this._printStyle=[],this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(t){for(let e in t)t.hasOwnProperty(e)&&this._printStyle.push((e+JSON.stringify(t[e])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(t){let e=function(t){return`<link rel="stylesheet" type="text/css" href="${t}">`};if(-1!==t.indexOf(",")){const n=t.split(",");for(let t of n)this._styleSheetFile=this._styleSheetFile+e(t)}else this._styleSheetFile=e(t)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(t){const e=[],n=document.getElementsByTagName(t);for(let i=0;i<n.length;i++)e.push(n[i].outerHTML);return e.join("\r\n")}getFormData(t){for(var e=0;e<t.length;e++)t[e].defaultValue=t[e].value,t[e].checked&&(t[e].defaultChecked=!0)}getHtmlContents(){let t=document.getElementById(this.printSectionId),e=t.getElementsByTagName("input");this.getFormData(e);let n=t.getElementsByTagName("textarea");return this.getFormData(n),t.innerHTML}print(){let t,e,n="",i="";const r=this.getElementTag("base");this.useExistingCss&&(n=this.getElementTag("style"),i=this.getElementTag("link")),t=this.getHtmlContents(),e=window.open("","_blank","top=0,left=0,height=auto,width=auto"),e.document.open(),e.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${r}\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${n}\n          ${i}\n        </head>\n        <body>\n          ${t}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                closeWindow(window.print());\n              }, ${this.printDelay});\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),e.document.close()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.lG2({type:t,selectors:[["button","ngxPrint",""]],hostBindings:function(t,e){1&t&&i.NdJ("click",function(){return e.print()})},inputs:{useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile",printSectionId:"printSectionId",printTitle:"printTitle"}}),t})(),s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[]]}),t})()},46635:function(t,e,n){"use strict";n.d(e,{G7:function(){return o},sg:function(){return l},H:function(){return r},xr:function(){return s}});var i=n(35366),r=function(t){return t.INNER="inner",t.OUTER="outer",t.CENTER="center",t}({}),s=function(t){return t.HORIZONTAL="horizontal",t.VERTICAL="vertical",t.CURVED="curved",t}({});let o=(()=>{let t=class{constructor(){this.onSpinStart=new i.vpe,this.onSpinComplete=new i.vpe,this.completedSpin=!1,this.isSpinning=!1}reset(){this.wheel.stopAnimation(!1),this.wheel.rotationAngle=0,this.wheel.ctx.clearRect(0,0,this.wheel.ctx.canvas.width,this.wheel.ctx.canvas.height),this.isSpinning=!1,this.completedSpin=!1,this.ngAfterViewInit()}ngOnInit(){}spin(){if(this.completedSpin||this.isSpinning)return;this.isSpinning=!0,this.onSpinStart.emit(null);const t=this.wheel.segments.filter(t=>!!t).find(({id:t})=>this.idToLandOn===t);this.wheel.animation.stopAngle=t.endAngle-(t.endAngle-t.startAngle)/4,this.wheel.startAnimation(),setTimeout(()=>{this.completedSpin=!0,this.onSpinComplete.emit(null)},1e3*this.spinDuration)}ngAfterViewInit(){const t=this.items;this.wheel=new Winwheel({numSegments:t.length,segments:t,innerRadius:this.innerRadius||0,outerRadius:this.height/2-20,centerY:this.height/2+20,textOrientation:this.textOrientation,textAligment:this.textAlignment,animation:{type:"spinToStop",duration:this.spinDuration,spins:this.spinAmount}}),TweenMax.ticker.addEventListener("tick",this.drawPointer.bind(this))}ngOnDestroy(){TweenMax.ticker.removeEventListener("tick")}drawPointer(){let t=this.wheel.ctx;t&&(t.save(),t.lineWidth=2,t.strokeStyle=this.pointerStrokeColor,t.fillStyle=this.pointerFillColor,t.beginPath(),t.moveTo(this.width/2-20,2),t.lineTo(this.width/2+20,2),t.lineTo(this.width/2,42),t.lineTo(this.width/2-20,2),t.stroke(),t.fill(),t.restore())}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["ngx-wheel"]],inputs:{height:"height",idToLandOn:"idToLandOn",width:"width",items:"items",spinDuration:"spinDuration",spinAmount:"spinAmount",innerRadius:"innerRadius",pointerStrokeColor:"pointerStrokeColor",pointerFillColor:"pointerFillColor",disableSpinOnClick:"disableSpinOnClick",textOrientation:"textOrientation",textAlignment:"textAlignment"},outputs:{onSpinStart:"onSpinStart",onSpinComplete:"onSpinComplete"},decls:2,vars:2,consts:[["id","canvas",3,"width","height","click"]],template:function(t,e){1&t&&(i.TgZ(0,"canvas",0),i.NdJ("click",function(){return!e.disableSpinOnClick&&e.spin()}),i._uU(1," \xa0\xa0\xa0\xa0Canvas not supported, use another browser. "),i.qZA()),2&t&&i.Q6J("width",e.width)("height",e.height)},encapsulation:2}),t})(),l=(()=>{let t=class{};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[]]}),t})()},21915:function(t,e,n){"use strict";n.d(e,{$:function(){return r}});var i=n(35366);let r=(()=>{class t{constructor(){this.helloText=""}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-receipt"]],inputs:{helloText:"helloText"},decls:4,vars:1,template:function(t,e){1&t&&(i.TgZ(0,"h1"),i._uU(1),i.TgZ(2,"p"),i._uU(3,"receipt works!"),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Oqu(e.helloText))},styles:["[_nghost-%COMP%]{margin-left:10px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:red}"]}),t})()},66882:function(t,e,n){"use strict";n.r(e),n.d(e,{ReceiptModule:function(){return a}});var i=n(61116),r=n(33464),s=n(21915),o=n(35366);const l=[{path:"",component:s.$}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez,u]]}),t})()},65724:function(t,e,n){"use strict";n.d(e,{v:function(){return s}});var i=n(35366),r=n(4612);let s=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isTerminal()}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(r.e))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},93372:function(t,e,n){"use strict";n.d(e,{h:function(){return u}});var i=n(529),r=n(55959),s=n(35366),o=n(42693),l=n(78035);let u=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=i.N.BASE_API_URL,this.gameTypes=[],this.games=[],this.gameTypeSubject=new r.xQ,this.gameSubject=new r.xQ,this.http.get(this.BASE_API_URL+"/dev/getGame").subscribe(t=>{this.games=t.data,console.log("games: ",this.games),this.gameSubject.next([...this.games])})}getGameType(){return[...this.gameTypes]}getGameTypeListener(){return this.gameTypeSubject.asObservable()}getGame(){return[...this.games]}getGameListener(){return this.gameSubject.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(o.eN),s.LFG(l.T))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},82859:function(t,e,n){"use strict";n.d(e,{E:function(){return h}});var i=n(31041),r=n(47727),s=n(44019),o=n(529),l=n(55959),u=n(35366),a=n(42693),c=n(78035);let h=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=o.N.BASE_API_URL,this.stockists=[],this.stockistSubject=new l.xQ,this.masterStockistForm=new i.cw({id:new i.NI(null),stockistName:new i.NI(null,[i.kI.required]),loginId:new i.NI(null)});const n=JSON.parse(localStorage.getItem("user"));this.http.get(this.BASE_API_URL+"/stockists/"+n.userId).subscribe(t=>{this.stockists=t.data,this.stockistSubject.next([...this.stockists])})}getStockists(){return[...this.stockists]}getStockistListener(){return this.stockistSubject.asObservable()}updateStockiist(t){return this.http.put(this.BASE_API_URL+"/stockists",t).pipe((0,r.K)(this.errorService.serverError),(0,s.b)(t=>{}))}saveNewStockist(t){return this.http.post(this.BASE_API_URL+"/stockists",t).pipe((0,r.K)(this.errorService.serverError),(0,s.b)(t=>{}))}saveStockistBalance(t){return this.http.put(this.BASE_API_URL+"/stockists/balance",t).pipe((0,r.K)(this.errorService.serverError),(0,s.b)(t=>{}))}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(a.eN),u.LFG(c.T))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},67011:function(t,e,n){"use strict";n.d(e,{S:function(){return c}});var i=n(529),r=n(55959),s=n(47727),o=n(44019),l=n(35366),u=n(42693),a=n(78035);let c=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=i.N.BASE_API_URL,this.terminals=[],this.terminalSubject=new r.xQ,this.http.get(this.BASE_API_URL+"/terminals").subscribe(t=>{this.terminals=t.data,this.terminalSubject.next([...this.terminals])})}getTerminals(){return[...this.terminals]}getTerminalListener(){return this.terminalSubject.asObservable()}saveNewTerminal(t){return this.http.post(this.BASE_API_URL+"/terminals",t).pipe((0,s.K)(this.errorService.serverError),(0,o.b)(t=>{}))}updateTerminal(t){return this.http.put(this.BASE_API_URL+"/terminals",t).pipe((0,s.K)(this.errorService.serverError),(0,o.b)(t=>{}))}saveTerminalBalance(t){return this.http.put(this.BASE_API_URL+"/terminals/balance",t).pipe((0,s.K)(this.errorService.serverError),(0,o.b)(t=>{}))}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(u.eN),l.LFG(a.T))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},62303:function(t,e,n){"use strict";n.d(e,{I:function(){return p}});var i=n(529),r=n(55959),s=n(31225),o=n(47727),l=n(44019),u=n(35366),a=n(42693),c=n(78035),h=n(4612);let p=(()=>{class t{constructor(t,e,n){this.http=t,this.errorService=e,this.authService=n,this.BASE_API_URL=i.N.BASE_API_URL,this.resultByDateSubject=new r.xQ,this.currentDateResultSubject=new r.xQ,this.resultSubject=new r.xQ,this.http.get(this.BASE_API_URL+"/dev/results/currentDate").subscribe(t=>{this.currentDateResult=t.data,this.currentDateResultSubject.next(Object.assign({},this.currentDateResult))})}getResultByDate(t){return this.http.post(this.BASE_API_URL+"/dev/getResultByDate",{date:t}).pipe((0,o.K)(this.handleError),(0,l.b)(t=>{this.result=t.data,this.resultSubject.next([...this.result])}))}getCurrentDateResult(){return Object.assign({},this.currentDateResult)}getCurrentDateResultListener(){return this.currentDateResultSubject.asObservable()}getResultListener(){return this.resultByDateSubject.asObservable()}getResultByDateListener(){return this.resultByDateSubject.asObservable()}handleError(t){return t.error.message.includes("1062")?(0,s._)("Record already exists"):(0,s._)(t.error.message)}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(a.eN),u.LFG(c.T),u.LFG(h.e))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);