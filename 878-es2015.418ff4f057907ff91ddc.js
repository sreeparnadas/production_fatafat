(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[878],{60878:function(t,e,r){"use strict";r.r(e),r.d(e,{TerminalReportModule:function(){return A}});var s=r(61116),o=r(33464),a=r(65724),n=r(35366),i=r(55959),c=r(31225),u=r(529),d=r(47727),p=r(44019),l=r(42693),m=r(78035);let h=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=u.N.BASE_API_URL,this.barcodeReportRecords=[],this.userData=JSON.parse(localStorage.getItem("user")),this.barcodeReportRecordsSubject=new i.xQ}terminalListListener(){return this.barcodeReportRecordsSubject.asObservable()}getTerminalReport(t){return console.log("terminal_id",t),this.http.post(this.BASE_API_URL+"/terminal/barcodeReport",{terminalId:t}).pipe((0,d.K)(this.handleError),(0,p.b)(t=>{t.data&&(this.barcodeReportRecords=t.data,this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords]))}))}serverError(t){return t instanceof Response?(0,c._)("backend server error"):(0,c._)(0===t.status?{status:t.status,message:"Backend Server is not Working",statusText:t.statusText}:401===t.status?{status:t.status,message:"Your are not authorised",statusText:t.statusText}:t)}handleError(t){return t.error.message.includes("1062")?(0,c._)("Record already exists"):(0,c._)(t.error.message)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(l.eN),n.LFG(m.T))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,e){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.qZA()),2&t){const t=e.$implicit;n.xp6(2),n.Oqu(t.draw_time),n.xp6(2),n.Oqu(t.amount),n.xp6(2),n.Oqu(t.commission),n.xp6(2),n.Oqu(t.prize_value),n.xp6(2),n.Oqu(t.ntp)}}const Z=[{path:"",canActivate:[a.v],component:(()=>{class t{constructor(t,e){this.renderer=t,this.terminalReportService=e,this.renderer.setStyle(document.body,"background-image","none");const r=JSON.parse(localStorage.getItem("user"));this.terminalReportService.getTerminalReport(r.userId).subscribe(),this.terminalReportService.terminalListListener().subscribe(t=>{this.terminalReportData=t})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.Qsj),n.Y36(h))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-terminal-report"]],decls:17,vars:1,consts:[[1,"mt-5"],["matSort","",1,"table","table-bordered","table-sm","m-3",2,"border","none !important","height","50px","overflow","scroll"],["mat-sort-header","terminal_pin"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","prize_value"],["mat-sort-header","ntp"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"table",1),n.TgZ(2,"thead"),n.TgZ(3,"tr"),n.TgZ(4,"th",2),n._uU(5,"Date"),n.qZA(),n.TgZ(6,"th",3),n._uU(7,"Amount"),n.qZA(),n.TgZ(8,"th",4),n._uU(9,"Commission"),n.qZA(),n.TgZ(10,"th",5),n._uU(11,"Prize"),n.qZA(),n.TgZ(12,"th",6),n._uU(13,"NTP"),n.qZA(),n._UZ(14,"th"),n.qZA(),n.qZA(),n.TgZ(15,"tbody"),n.YNc(16,g,11,5,"tr",7),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(16),n.Q6J("ngForOf",e.terminalReportData))},directives:[s.sg],styles:[""]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[o.Bz.forChild(Z)],o.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.ez,b]]}),t})()}}]);