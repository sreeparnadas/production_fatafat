!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[925],{70925:function(e,a,n){"use strict";n.r(a),n.d(a,{StockistReportModule:function(){return W}});var i=n(38583),s=n(63423),c=n(88259),u=n.n(c),d=n(92340),l=n(29925),p=n(37716),h=n(79765),g=n(40205),m=n(5304),Z=n(68307),f=n(91841),b=n(84889),A=function(){var e=function(){function e(t,a){r(this,e),this.http=t,this.errorService=a,this.BASE_API_URL=d.N.BASE_API_URL,this.barcodeReportRecords=[],this.barcodeReportSubject=new h.xQ,this.barcodeDetailsSubject=new h.xQ,this.customerSaleReportRecords=[],this.customerSaleReportSubject=new h.xQ,this.cardCustomerSaleReportRecords=[],this.cardCustomerSaleReportSubject=new h.xQ}return o(e,[{key:"getBarcodeReportRecords",value:function(){return t(this.barcodeReportRecords)}},{key:"getBarcodeReportListener",value:function(){return this.barcodeReportSubject.asObservable()}},{key:"getCustomerSaleReportRecords",value:function(){return t(this.customerSaleReportRecords)}},{key:"getCustomerSaleReportListener",value:function(){return this.customerSaleReportSubject.asObservable()}},{key:"getCardCustomerSaleReportListener",value:function(){return this.cardCustomerSaleReportSubject.asObservable()}},{key:"getBarcodeDetails",value:function(t){var e=this;return this.http.get(this.BASE_API_URL+"/cPanel/barcodeReport/particulars/"+t).pipe((0,m.K)(this.handleError),(0,Z.b)(function(t){e.barcodeDetails=t.data,e.barcodeDetailsSubject.next(Object.assign({},e.barcodeDetails))}))}},{key:"getBarcodeDetailsListener",value:function(){return this.barcodeDetailsSubject.asObservable()}},{key:"customerSaleReportByDate",value:function(e,r,a){var o=this;return this.http.post(this.BASE_API_URL+"/stockist/customerSaleReports",{startDate:e,endDate:r,userID:a}).pipe((0,m.K)(this.handleError),(0,Z.b)(function(e){e.data&&(o.customerSaleReportRecords=e.data,o.customerSaleReportSubject.next(t(o.customerSaleReportRecords)))}))}},{key:"cardCustomerSaleReportByDate",value:function(e,r,a){var o=this;return this.http.post(this.BASE_API_URL+"/stockist/cardCustomerSaleReports",{startDate:e,endDate:r,userID:a}).pipe((0,m.K)(this.handleError),(0,Z.b)(function(e){e.data&&(o.cardCustomerSaleReportRecords=e.data,o.cardCustomerSaleReportSubject.next(t(o.cardCustomerSaleReportRecords)))}))}},{key:"barcodeReportByDate",value:function(e,r,a){var o=this;return this.http.post(this.BASE_API_URL+"/stockist/barcodeReportByDate",{startDate:e,endDate:r,userID:a}).pipe((0,m.K)(this.handleError),(0,Z.b)(function(e){e.data&&(o.barcodeReportRecords=e.data,o.barcodeReportSubject.next(t(o.barcodeReportRecords)))}))}},{key:"serverError",value:function(t){return t instanceof Response?(0,g._)("backend server error"):(0,g._)(0===t.status?{status:t.status,message:"Backend Server is not Working",statusText:t.statusText}:401===t.status?{status:t.status,message:"Your are not authorised",statusText:t.statusText}:t)}},{key:"handleError",value:function(t){return t.error.message.includes("1062")?(0,g._)("Record already exists"):(0,g._)(t.error.message)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.LFG(f.eN),p.LFG(b.T))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),R=n(65939),_=n(98295),q=n(49983),T=n(43220),S=n(3679),v=n(51095),y=n(11494);function D(t,e){if(1&t&&(p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td"),p._uU(4),p.qZA(),p.TgZ(5,"td"),p._uU(6),p.qZA(),p.TgZ(7,"td"),p._uU(8),p.qZA(),p.TgZ(9,"td"),p._uU(10),p.qZA(),p.TgZ(11,"td"),p._uU(12),p.qZA(),p.qZA()),2&t){var r=e.$implicit;p.xp6(2),p.Oqu(r.terminal_pin),p.xp6(2),p.Oqu(r.stokiest_name),p.xp6(2),p.Oqu(r.total),p.xp6(2),p.Oqu(r.commission),p.xp6(2),p.Oqu(r.prize_value),p.xp6(2),p.Oqu(r.total-r.commission-r.prize_value)}}function k(t,e){1&t&&(p.TgZ(0,"div",29),p.TgZ(1,"h1"),p._uU(2,"No Data"),p.qZA(),p.qZA())}function U(t,e){if(1&t){var r=p.EpF();p.TgZ(0,"div"),p.TgZ(1,"table",25),p.NdJ("matSortChange",function(t){return p.CHM(r),p.oxw().sortData(t)}),p.TgZ(2,"thead"),p.TgZ(3,"tr"),p.TgZ(4,"th",17),p._uU(5,"Terminal Id"),p.qZA(),p.TgZ(6,"th",17),p._uU(7,"Stokiest Name"),p.qZA(),p.TgZ(8,"th",26),p._uU(9,"Total"),p.qZA(),p.TgZ(10,"th",27),p._uU(11,"Commission"),p.qZA(),p.TgZ(12,"th",21),p._uU(13,"Prize"),p.qZA(),p.TgZ(14,"th",28),p._uU(15,"NTP"),p.qZA(),p._UZ(16,"th"),p.qZA(),p.qZA(),p.TgZ(17,"tbody"),p.YNc(18,D,13,6,"tr",22),p.TgZ(19,"tr"),p._UZ(20,"td"),p.TgZ(21,"td"),p._uU(22,"Grand Total"),p.qZA(),p.TgZ(23,"td"),p._uU(24),p.qZA(),p._UZ(25,"td"),p._UZ(26,"td"),p._UZ(27,"td"),p.qZA(),p.qZA(),p.qZA(),p.YNc(28,k,3,0,"div",23),p.qZA()}if(2&t){var a=p.oxw();p.xp6(18),p.Q6J("ngForOf",a.customerSaleReportRecords),p.xp6(6),p.Oqu(a.totalAmount),p.xp6(4),p.Q6J("ngIf",0==a.customerSaleReportRecords.length)}}function x(t,e){if(1&t&&(p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td"),p._uU(4),p.qZA(),p.TgZ(5,"td"),p._uU(6),p.qZA(),p.TgZ(7,"td"),p._uU(8),p.qZA(),p.TgZ(9,"td"),p._uU(10),p.qZA(),p.TgZ(11,"td"),p._uU(12),p.qZA(),p.TgZ(13,"td"),p._uU(14),p.qZA(),p.TgZ(15,"td"),p.TgZ(16,"a",30),p._UZ(17,"i",31),p.qZA(),p.qZA(),p.qZA()),2&t){var r=e.$implicit;p.xp6(2),p.Oqu(r.barcode_number),p.xp6(2),p.Oqu(r.draw_time),p.xp6(2),p.Oqu(r.terminal_pin),p.xp6(2),p.Oqu(r.ticket_taken_time),p.xp6(2),p.Oqu(r.total_quantity),p.xp6(2),p.Oqu(r.amount),p.xp6(2),p.Oqu(r.prize_value)}}function w(t,e){1&t&&(p.TgZ(0,"div",29),p.TgZ(1,"h1"),p._uU(2,"No Data"),p.qZA(),p.qZA())}function C(t,e,r){return(t<e?-1:1)*(r?1:-1)}var M,J,B=[{path:"",component:(M=function(){function t(e){r(this,t),this.stockistReportService=e,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.isProduction=d.N.production,this.showDevArea=!1,this.barcodeReportRecords=[],this.customerSaleReportRecords=[],this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new i.uU("en-US"),this.totalAmount=0,this.columnNumber=4,this.selectedReport="0",this.userData=JSON.parse(localStorage.getItem("user"))}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.barcodeReportRecords=this.stockistReportService.getBarcodeReportRecords(),this.stockistReportService.getBarcodeReportListener().subscribe(function(e){t.barcodeReportRecords=e}),this.customerSaleReportRecords=this.stockistReportService.getCustomerSaleReportRecords(),this.stockistReportService.getCustomerSaleReportListener().subscribe(function(e){t.customerSaleReportRecords=e;var r=0;t.customerSaleReportRecords.forEach(function(t){r+=Number(t.total)}),t.totalAmount=r}),this.searchByDateTab1(),this.searchByDateTab2()}},{key:"searchByDateTab1",value:function(){u().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}});var t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.stockistReportService.customerSaleReportByDate(t,e,this.userData.userId).subscribe(function(t){t.data&&u().close()})}},{key:"searchByDateTab2",value:function(){u().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}});var t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.stockistReportService.barcodeReportByDate(t,e,this.userData.userId).subscribe(function(t){t.data&&u().close()})}},{key:"sortData",value:function(t){var e=this.barcodeReportRecords.slice();this.barcodeReportRecords=t.active&&""!==t.direction?e.sort(function(e,r){var a="asc"===t.direction;switch(t.active){case"barcode_number":return C(e.barcode_number,r.barcode_number,a);case"draw_time":return C(e.draw_time,r.draw_time,a);case"terminal_pin":return C(e.terminal_pin,r.terminal_pin,a);case"ticket_taken_time":return C(e.ticket_taken_time,r.ticket_taken_time,a);case"total_quantity":return C(e.total_quantity,r.total_quantity,a);case"amount":return C(e.amount,r.amount,a);default:return 0}}):e}},{key:"openPopup",value:function(t,e){var r=this;this.stockistReportService.getBarcodeDetails(t).subscribe(function(t){r.barcodeDetails=t.data})}}]),t}(),M.\u0275fac=function(t){return new(t||M)(p.Y36(A))},M.\u0275cmp=p.Xpm({type:M,selectors:[["app-stockiest-report"]],viewQuery:function(t,e){var r;1&t&&p.Gf(l.oB,5),2&t&&p.iGM(r=p.CRH())&&(e.modal=r.first)},decls:65,vars:19,consts:[[1,"mt-2","mr-3","ml-3"],["label","Customer sales report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],[4,"ngIf"],["label","Barcode report"],[1,"text-center",2,"align-content","center","align-items","center","text-align","center"],["matSort","",1,"ml-4","col-11","table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","barcode_number"],["mat-sort-header","draw_time"],["mat-sort-header","terminal_pin"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["mat-sort-header","prize_value"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Draw wise report"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","ntp"],[1,"text-center"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4"],[1,"bi","bi-info-square-fill"]],template:function(t,e){if(1&t&&(p.TgZ(0,"mat-tab-group",0),p.TgZ(1,"mat-tab",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"mat-form-field",4),p.TgZ(5,"mat-label"),p._uU(6,"Start date"),p.qZA(),p.TgZ(7,"input",5),p.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),p.qZA(),p._UZ(8,"mat-datepicker-toggle",6),p.TgZ(9,"mat-datepicker",7,8),p.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(11,"div",3),p.TgZ(12,"mat-form-field",4),p.TgZ(13,"mat-label"),p._uU(14,"End date"),p.qZA(),p.TgZ(15,"input",5),p.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),p.qZA(),p._UZ(16,"mat-datepicker-toggle",6),p.TgZ(17,"mat-datepicker",7,9),p.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(19,"button",10),p.NdJ("click",function(){return e.searchByDateTab1()}),p._uU(20,"Search"),p.qZA(),p.qZA(),p.YNc(21,U,29,3,"div",11),p.qZA(),p.TgZ(22,"mat-tab",12),p.TgZ(23,"div",2),p.TgZ(24,"div",3),p.TgZ(25,"mat-form-field",4),p.TgZ(26,"mat-label"),p._uU(27,"Start date"),p.qZA(),p.TgZ(28,"input",5),p.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),p.qZA(),p._UZ(29,"mat-datepicker-toggle",6),p.TgZ(30,"mat-datepicker",7,8),p.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(32,"div",3),p.TgZ(33,"mat-form-field",4),p.TgZ(34,"mat-label"),p._uU(35,"End date"),p.qZA(),p.TgZ(36,"input",5),p.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),p.qZA(),p._UZ(37,"mat-datepicker-toggle",6),p.TgZ(38,"mat-datepicker",7,9),p.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(40,"button",10),p.NdJ("click",function(){return e.searchByDateTab2()}),p._uU(41,"Search"),p.qZA(),p.qZA(),p.TgZ(42,"div",13),p.TgZ(43,"table",14),p.NdJ("matSortChange",function(t){return e.sortData(t)}),p.TgZ(44,"thead"),p.TgZ(45,"tr"),p.TgZ(46,"th",15),p._uU(47,"Barcode"),p.qZA(),p.TgZ(48,"th",16),p._uU(49,"Draw time"),p.qZA(),p.TgZ(50,"th",17),p._uU(51,"Terminal"),p.qZA(),p.TgZ(52,"th",18),p._uU(53,"Ticket take time"),p.qZA(),p.TgZ(54,"th",19),p._uU(55,"Quantity"),p.qZA(),p.TgZ(56,"th",20),p._uU(57,"Amount"),p.qZA(),p.TgZ(58,"th",21),p._uU(59,"Prize"),p.qZA(),p._UZ(60,"th"),p.qZA(),p.qZA(),p.TgZ(61,"tbody"),p.YNc(62,x,18,7,"tr",22),p.qZA(),p.qZA(),p.YNc(63,w,3,0,"div",23),p.qZA(),p.qZA(),p._UZ(64,"mat-tab",24),p.qZA()),2&t){var r=p.MAs(10),a=p.MAs(18);p.xp6(7),p.Q6J("matDatepicker",r)("ngModel",e.StartDateFilter),p.xp6(1),p.Q6J("for",r),p.xp6(1),p.Q6J("ngModel",e.StartDateFilter),p.xp6(6),p.Q6J("matDatepicker",a)("ngModel",e.EndDateFilter),p.xp6(1),p.Q6J("for",a),p.xp6(1),p.Q6J("ngModel",e.EndDateFilter),p.xp6(4),p.Q6J("ngIf","0"==e.selectedReport),p.xp6(7),p.Q6J("matDatepicker",r)("ngModel",e.StartDateFilter),p.xp6(1),p.Q6J("for",r),p.xp6(1),p.Q6J("ngModel",e.StartDateFilter),p.xp6(6),p.Q6J("matDatepicker",a)("ngModel",e.EndDateFilter),p.xp6(1),p.Q6J("for",a),p.xp6(1),p.Q6J("ngModel",e.EndDateFilter),p.xp6(24),p.Q6J("ngForOf",e.barcodeReportRecords),p.xp6(1),p.Q6J("ngIf",0==e.barcodeReportRecords.length)}},directives:[R.SP,R.uX,_.KE,_.hX,q.Nt,T.hl,S.Fj,S.JJ,S.On,T.nW,_.R9,T.Mq,v.lW,i.O5,y.YE,y.nU,i.sg,l.b6],styles:[""]}),M)}],E=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[s.Bz.forChild(B)],s.Bz]}),t}(),F=n(15566),O=n(45480),N=n(67441),I=n(93738),Q=n(45396),j=n(49870),L=n(54820),P=n(72458),z=n(42542),Y=n(70346),W=((J=function t(){r(this,t)}).\u0275fac=function(t){return new(t||J)},J.\u0275mod=p.oAB({type:J}),J.\u0275inj=p.cJS({imports:[[i.ez,E,R.Nh,O.q,F.o9,N.LD,I.QW,S.u5,S.UX,Q.rP,y.JX,j.aE,j.bz,l.At,L.UU,Y.g,T.FA,q.c,S.u5,P.XK,P.si,S.u5,v.ot,z.vV,T.FA,q.c,_.lN]]}),J)}}])}();