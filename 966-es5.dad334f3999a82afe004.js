!function(){function t(e,n){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,n)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,r=o(t);if(e){var a=o(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return n(this,i)}}function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[966],{9966:function(n,o,r){"use strict";r.r(o),r.d(o,{TerminalModule:function(){return it}});var a=r(1116),u=r(3464),g=r(529),s=r(2501),d=r.n(s),p=r(5366),b=r(4975),h=r(7354),m=r(4612),f=r(1293),_=r(5965),v=r(4369),C=r(7217),M=r(9861),O=r(8378),k=r(1041),Z=r(7064),x=r(7388),P=["button"],y=["*"],T=new p.OlP("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"),A=new p.OlP("MatButtonToggleGroup"),q={provide:k.JU,useExisting:(0,p.Gpc)(function(){return S}),multi:!0},w=0,U=function t(e,n){l(this,t),this.source=e,this.value=n},S=function(){var t=function(){function t(e,n){l(this,t),this._changeDetector=e,this._vertical=!1,this._multiple=!1,this._disabled=!1,this._controlValueAccessorChangeFn=function(){},this._onTouched=function(){},this._name="mat-button-toggle-group-"+w++,this.valueChange=new p.vpe,this.change=new p.vpe,this.appearance=n&&n.appearance?n.appearance:"standard"}return c(t,[{key:"name",get:function(){return this._name},set:function(t){var e=this;this._name=t,this._buttonToggles&&this._buttonToggles.forEach(function(t){t.name=e._name,t._markForCheck()})}},{key:"vertical",get:function(){return this._vertical},set:function(t){this._vertical=(0,M.Ig)(t)}},{key:"value",get:function(){var t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(function(t){return t.value}):t[0]?t[0].value:void 0},set:function(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}},{key:"selected",get:function(){var t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}},{key:"multiple",get:function(){return this._multiple},set:function(t){this._multiple=(0,M.Ig)(t)}},{key:"disabled",get:function(){return this._disabled},set:function(t){this._disabled=(0,M.Ig)(t),this._buttonToggles&&this._buttonToggles.forEach(function(t){return t._markForCheck()})}},{key:"ngOnInit",value:function(){this._selectionModel=new O.Ov(this.multiple,void 0,!1)}},{key:"ngAfterContentInit",value:function(){var t;(t=this._selectionModel).select.apply(t,i(this._buttonToggles.filter(function(t){return t.checked})))}},{key:"writeValue",value:function(t){this.value=t,this._changeDetector.markForCheck()}},{key:"registerOnChange",value:function(t){this._controlValueAccessorChangeFn=t}},{key:"registerOnTouched",value:function(t){this._onTouched=t}},{key:"setDisabledState",value:function(t){this.disabled=t}},{key:"_emitChangeEvent",value:function(){var t=this.selected,e=Array.isArray(t)?t[t.length-1]:t,n=new U(e,this.value);this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}},{key:"_syncButtonToggle",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.multiple||!this.selected||t.checked||(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):i=!0,i?Promise.resolve().then(function(){return n._updateModelValue(o)}):this._updateModelValue(o)}},{key:"_isSelected",value:function(t){return this._selectionModel&&this._selectionModel.isSelected(t)}},{key:"_isPrechecked",value:function(t){return void 0!==this._rawValue&&(this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(function(e){return null!=t.value&&e===t.value}):t.value===this._rawValue)}},{key:"_setSelectionByValue",value:function(t){var e=this;this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(function(t){return e._selectValue(t)})):(this._clearSelection(),this._selectValue(t)))}},{key:"_clearSelection",value:function(){this._selectionModel.clear(),this._buttonToggles.forEach(function(t){return t.checked=!1})}},{key:"_selectValue",value:function(t){var e=this._buttonToggles.find(function(e){return null!=e.value&&e.value===t});e&&(e.checked=!0,this._selectionModel.select(e))}},{key:"_updateModelValue",value:function(t){t&&this._emitChangeEvent(),this.valueChange.emit(this.value)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(p.Y36(p.sBO),p.Y36(T,8))},t.\u0275dir=p.lG2({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,e,n){var o;(1&t&&p.Suo(n,N,5),2&t)&&(p.iGM(o=p.CRH())&&(e._buttonToggles=o))},hostAttrs:["role","group",1,"mat-button-toggle-group"],hostVars:5,hostBindings:function(t,e){2&t&&(p.uIk("aria-disabled",e.disabled),p.ekj("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard","standard"===e.appearance))},inputs:{appearance:"appearance",name:"name",vertical:"vertical",value:"value",multiple:"multiple",disabled:"disabled"},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[p._Bn([q,{provide:A,useExisting:t}])]}),t}(),I=(0,Z.Kr)(function t(){l(this,t)}),N=function(){var n=function(n){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(i,n);var o=e(i);function i(t,e,n,r,a,c){var u;l(this,i),(u=o.call(this))._changeDetectorRef=e,u._elementRef=n,u._focusMonitor=r,u._isSingleSelector=!1,u._checked=!1,u.ariaLabelledby=null,u._disabled=!1,u.change=new p.vpe;var g=Number(a);return u.tabIndex=g||0===g?g:null,u.buttonToggleGroup=t,u.appearance=c&&c.appearance?c.appearance:"standard",u}return c(i,[{key:"buttonId",get:function(){return"".concat(this.id,"-button")}},{key:"appearance",get:function(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance},set:function(t){this._appearance=t}},{key:"checked",get:function(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked},set:function(t){var e=(0,M.Ig)(t);e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled},set:function(t){this._disabled=(0,M.Ig)(t)}},{key:"ngOnInit",value:function(){var t=this.buttonToggleGroup;this._isSingleSelector=t&&!t.multiple,this.id=this.id||"mat-button-toggle-"+w++,this._isSingleSelector&&(this.name=t.name),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}},{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._elementRef,!0)}},{key:"ngOnDestroy",value:function(){var t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}},{key:"focus",value:function(t){this._buttonElement.nativeElement.focus(t)}},{key:"_onButtonClick",value:function(){var t=!!this._isSingleSelector||!this._checked;t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new U(this,this.value))}},{key:"_markForCheck",value:function(){this._changeDetectorRef.markForCheck()}}]),i}(I);return n.\u0275fac=function(t){return new(t||n)(p.Y36(A,8),p.Y36(p.sBO),p.Y36(p.SBq),p.Y36(x.tE),p.$8M("tabindex"),p.Y36(T,8))},n.\u0275cmp=p.Xpm({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(t,e){var n;(1&t&&p.Gf(P,5),2&t)&&(p.iGM(n=p.CRH())&&(e._buttonElement=n.first))},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(t,e){1&t&&p.NdJ("focus",function(){return e.focus()}),2&t&&(p.uIk("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),p.ekj("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-appearance-standard","standard"===e.appearance))},inputs:{disableRipple:"disableRipple",ariaLabelledby:["aria-labelledby","ariaLabelledby"],tabIndex:"tabIndex",appearance:"appearance",checked:"checked",disabled:"disabled",id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],value:"value"},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[p.qOj],ngContentSelectors:y,decls:6,vars:9,consts:[["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"id","disabled","click"],["button",""],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,e){if(1&t&&(p.F$t(),p.TgZ(0,"button",0,1),p.NdJ("click",function(){return e._onButtonClick()}),p.TgZ(2,"span",2),p.Hsn(3),p.qZA(),p.qZA(),p._UZ(4,"span",3),p._UZ(5,"span",4)),2&t){var n=p.MAs(1);p.Q6J("id",e.buttonId)("disabled",e.disabled||null),p.uIk("tabindex",e.disabled?-1:e.tabIndex)("aria-pressed",e.checked)("name",e.name||null)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),p.xp6(5),p.Q6J("matRippleTrigger",n)("matRippleDisabled",e.disableRipple||e.disabled)}},directives:[Z.wG],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],encapsulation:2,changeDetection:0}),n}(),G=function(){var t=function t(){l(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[Z.BQ,Z.si],Z.BQ]}),t}(),B=r(9572);function F(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"th",34),p.TgZ(1,"button",35),p.NdJ("click",function(){var t=p.CHM(n).index;return p.oxw().setActiveTripleContainerValue(t)}),p.TgZ(2,"span"),p._uU(3),p.qZA(),p.qZA(),p.qZA()}if(2&t){var o=e.$implicit,i=e.index,r=p.oxw();p.xp6(1),p.Gre("triple-selection-button-",i," tripple-selection-button"),p.Q6J("matBadgeHidden",r.activeTripleContainerValue!=i),p.xp6(2),p.Oqu(o.singleNumber)}}function D(t,e){if(1&t&&(p.TgZ(0,"tr"),p.TgZ(1,"th",36),p.TgZ(2,"button",37),p.TgZ(3,"span"),p._uU(4),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t){var n=p.oxw();p.xp6(4),p.Oqu(n.singleNumbers[n.activeTripleContainerValue].singleNumber)}}function V(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",41),p.TgZ(1,"button",42),p.NdJ("click",function(){var t=p.CHM(n).$implicit,e=p.oxw(3).index;return p.oxw().setGameInputSet(t,e,2)}),p._uU(2),p.qZA(),p.qZA()}if(2&t){var o=e.$implicit;p.xp6(1),p.s9C("matBadge",o.quantity),p.Q6J("matBadgeHidden",!1),p.xp6(1),p.hij(" ",o.visibleTripleNumber," ")}}function J(t,e){if(1&t&&(p.TgZ(0,"tr"),p.YNc(1,V,3,3,"td",40),p.qZA()),2&t){var n=e.index,o=p.oxw(2).$implicit,i=p.oxw();p.xp6(1),p.Q6J("ngForOf",o.numberCombinations.slice(n*i.columnNumber,n*i.columnNumber+i.columnNumber))}}function E(t,e){if(1&t&&(p.ynx(0),p.YNc(1,J,2,1,"tr",39),p.BQk()),2&t){var n=p.oxw().$implicit,o=p.oxw();p.xp6(1),p.Q6J("ngForOf",n.numberCombinations.slice(0,n.numberCombinations.length%o.columnNumber==0?n.numberCombinations.length/o.columnNumber:n.numberCombinations.length/o.columnNumber+1))}}function j(t,e){if(1&t&&(p.TgZ(0,"tbody",38),p.YNc(1,E,2,1,"ng-container",8),p.qZA()),2&t){var n=e.index,o=p.oxw();p.Gre("table-div-",n,""),p.MGl("id","triple-body-",n,""),p.xp6(1),p.Q6J("ngIf",o.isActiveTripleContainter(n))}}function R(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"div",43),p.TgZ(1,"mat-button-toggle-group",44),p.TgZ(2,"mat-button-toggle",45),p.NdJ("click",function(){var t=p.CHM(n).$implicit;return p.oxw().setGameInputSet(t,1,1)}),p._uU(3),p.qZA(),p.qZA(),p.qZA()}if(2&t){var o=e.$implicit;p.xp6(3),p.Oqu(o.singleNumber)}}function L(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"div",43),p.TgZ(1,"mat-button-toggle-group",44),p.TgZ(2,"mat-button-toggle",45),p.NdJ("click",function(){var t=p.CHM(n).$implicit;return p.oxw().changeChip(t)}),p._uU(3),p.qZA(),p.qZA(),p.qZA()}if(2&t){var o=e.$implicit;p.xp6(3),p.Oqu(o)}}function Y(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"div",18),p.TgZ(1,"div",46),p.TgZ(2,"mat-slide-toggle",47),p.NdJ("change",function(){p.CHM(n);var t=p.oxw();return t.showDevArea=!t.showDevArea}),p._uU(3),p.qZA(),p.qZA(),p.qZA()}if(2&t){var o=p.oxw();p.xp6(3),p.Oqu(o.showDevArea?"Hide Developer Area":"Show Developer Area")}}function Q(t,e){if(1&t&&(p.TgZ(0,"div",18),p.TgZ(1,"div",48),p.TgZ(2,"pre"),p._uU(3),p.ALo(4,"json"),p.qZA(),p.qZA(),p.TgZ(5,"div",46),p.TgZ(6,"pre"),p._uU(7),p.ALo(8,"json"),p.qZA(),p.qZA(),p.TgZ(9,"div",46),p.TgZ(10,"pre"),p._uU(11),p.ALo(12,"json"),p.qZA(),p.qZA(),p.qZA()),2&t){var n=p.oxw();p.xp6(3),p.hij("        numberCombinationMatrix = ",p.lcZ(4,3,n.numberCombinationMatrix),"\n      "),p.xp6(4),p.hij("        user = ",p.lcZ(8,5,n.user),"\n      "),p.xp6(4),p.hij("userGameInput = ",p.lcZ(12,7,n.userGameInput),"")}}var H,$,z=function(){var t=function(){function t(e,n,o){l(this,t),this.playGameService=e,this.commonService=n,this.authService=o,this.showDeveloperDiv=!0,this.singleNumbers=[],this.numberCombinationMatrix=[],this.chips=[],this.userGameInput=[],this.columnNumber=5,this.activeTripleContainerValue=0,this.selectedChip=2,this.isProduction=g.N.production,this.showDevArea=!1}return c(t,[{key:"ngOnInit",value:function(){var t=this;this.user=this.authService.userBehaviorSubject.value,this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(function(e){t.numberCombinationMatrix=e,t.copyNumberMatrix=JSON.parse(JSON.stringify(t.numberCombinationMatrix))}),this.singleNumbers=this.playGameService.getSingleNumbers(),this.playGameService.getSingleNumberListener().subscribe(function(e){t.singleNumbers=e}),this.projectData=this.commonService.getProjectData(),this.chips=this.projectData.chips,this.commonService.getVariableSettingsListener().subscribe(function(e){t.projectData=e,t.chips=t.projectData.chips})}},{key:"isActiveTripleContainter",value:function(t){return this.activeTripleContainerValue==t}},{key:"setActiveTripleContainerValue",value:function(t){this.activeTripleContainerValue=t}},{key:"setGameInputSet",value:function(t,e,n){var o=-1;1==n?o=this.userGameInput.findIndex(function(e){return e.singleNumberId===t.singleNumberId}):2==n&&(o=this.userGameInput.findIndex(function(e){return e.numberCombinationId===t.numberCombinationId})),o>-1?(this.userGameInput[o].quantity+=this.selectedChip,t.quantity=this.userGameInput[o].quantity):(this.userGameInput.push({gameTypeId:n,numberCombinationId:t.numberCombinationId,singleNumberId:t.singleNumberId,quantity:this.selectedChip,mrp:1}),t.quantity=this.selectedChip)}},{key:"changeChip",value:function(t){this.selectedChip=t}},{key:"resetMatrixValue",value:function(){this.userGameInput=[],this.numberCombinationMatrix=JSON.parse(JSON.stringify(this.copyNumberMatrix))}},{key:"saveUserPlayInputDetails",value:function(){var t=this;d().fire({title:"Confirmation",text:"Do you sure to buy ticket?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(function(e){e.isConfirmed&&t.playGameService.saveUserPlayInputDetails({playMaster:{drawMasterId:1,terminalId:t.user.userId},playDetails:t.userGameInput}).subscribe(function(e){1===e.success?(d().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}),t.authService.deductUserBalanceBy(10),t.resetMatrixValue()):d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(p.Y36(b.M),p.Y36(h.v),p.Y36(m.e))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-terminal"]],decls:139,vars:8,consts:[[3,"ngClass"],["id","bg",1,"d-flex","flex-row","bd-highlight","mb-3"],["id","background",1,"p-2","background","body","bd-highlight"],["fxLayout","row","fxLayoutAlign","space-around center"],["id","table-1","fxFlex","35",1,"ml-2","mt-2",2,"border","2px solid rgb(0, 26, 255)"],["id","triple-table",1,"table","table-responsive"],[1,"mt-5","triple-table-thead"],["class","pink",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"id","class",4,"ngFor","ngForOf"],["fxFlex","30"],[2,"padding-left","50px"],["src","assets/images/wheel.gif","height","200px","alt","",2,"padding-left","20px"],["fxFlex","35",1,"ml-2","mt-2",2,"border","2px solid gold"],[2,"text-align","end","color","white"],[1,"container","right-container"],["colspan","2",1,"right-td"],["colspan","2",1,"right-td1"],[1,"d-flex"],[1,"col-4","ml-2","d-flex",2,"background-color","rgb(221, 213, 176)","height","40px","border-radius","10px","border","3px solid rgb(65, 255, 255)"],[1,"col-1","grad"],[1,"col-1","grad","ml-1"],[1,"col-5"],[1,"col-4"],[1,"text-white","text-center"],[1,"d-flex",2,"background-color","rgb(223, 214, 177)","height","50px","border","3px solid black"],["class","chips-outer-div",4,"ngFor","ngForOf"],[1,"d-flex",2,"background-color","rgb(223, 214, 177)","height","50px","border-radius","10px","border","3px solid rgb(65, 255, 255)"],[1,"col-4","ml-2","d-flex",2,"background-color","rgb(197, 192, 167)","height","40px","border-radius","10px","border","3px solid rgb(65, 255, 255)"],[1,"d-flex","col-6singleNumbers"],[1,"example-button-row"],["type","button",1,"btn","btn-info",3,"click"],["type","button",1,"btn","btn-outline-warning","ml-3",3,"click"],["class","d-flex",4,"ngIf"],[1,"pink"],["mat-fab","","matBadge","*",3,"matBadgeHidden","click"],["colspan","10",1,"text-center"],["mat-fab","",1,"tripple-selection-button"],[3,"id"],[4,"ngFor","ngForOf"],["colspan","2","class","text-center align-middle",4,"ngFor","ngForOf"],["colspan","2",1,"text-center","align-middle"],["mat-raised-button","","value","bold","name","fontStyle","aria-label","Font Style",1,"triple-number-button",3,"matBadge","matBadgeHidden","click"],[1,"chips-outer-div"],["name","fontStyle","aria-label","Font Style"],["value","bold",1,"chips-button",3,"click"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4),p.TgZ(5,"div"),p.TgZ(6,"table",5),p.TgZ(7,"thead",6),p.TgZ(8,"tr"),p.YNc(9,F,4,5,"th",7),p.qZA(),p.YNc(10,D,5,1,"tr",8),p.qZA(),p.YNc(11,j,2,5,"tbody",9),p.qZA(),p.qZA(),p.qZA(),p.TgZ(12,"div",10),p.TgZ(13,"div",11),p._UZ(14,"img",12),p.qZA(),p.qZA(),p.TgZ(15,"div",13),p.TgZ(16,"div"),p._uU(17,"GAME1 RESULT SHEET"),p.qZA(),p.TgZ(18,"div",14),p._uU(19,"RESULT SHEET"),p.qZA(),p._uU(20," // describe the table "),p.TgZ(21,"div",15),p.TgZ(22,"table",5),p.TgZ(23,"tbody"),p.TgZ(24,"tr"),p.TgZ(25,"td",16),p._uU(26," 10:00 AM "),p.qZA(),p.TgZ(27,"td",16),p._uU(28," 10:00 AM "),p.qZA(),p.TgZ(29,"td",16),p._uU(30," 10:00 AM "),p.qZA(),p.TgZ(31,"td",16),p._uU(32," 10:00 AM "),p.qZA(),p.TgZ(33,"td",16),p._uU(34," 10:00 AM "),p.qZA(),p.qZA(),p.TgZ(35,"tr"),p.TgZ(36,"td",17),p._uU(37," 555 "),p._UZ(38,"br"),p._uU(39," 5 "),p.qZA(),p.TgZ(40,"td",17),p._uU(41," 555 "),p._UZ(42,"br"),p._uU(43," 5 "),p.qZA(),p.TgZ(44,"td",17),p._uU(45," 555 "),p._UZ(46,"br"),p._uU(47," 5 "),p.qZA(),p.TgZ(48,"td",17),p._uU(49," 555 "),p._UZ(50,"br"),p._uU(51," 5 "),p.qZA(),p.TgZ(52,"td",17),p._uU(53," 555 "),p._UZ(54,"br"),p._uU(55," 5 "),p.qZA(),p.qZA(),p.TgZ(56,"tr"),p.TgZ(57,"td",16),p._uU(58," 10:00 AM "),p.qZA(),p.TgZ(59,"td",16),p._uU(60," 10:00 AM "),p.qZA(),p.TgZ(61,"td",16),p._uU(62," 10:00 AM "),p.qZA(),p.TgZ(63,"td",16),p._uU(64," 10:00 AM "),p.qZA(),p.TgZ(65,"td",16),p._uU(66," 10:00 AM "),p.qZA(),p.qZA(),p.TgZ(67,"tr"),p.TgZ(68,"td",17),p._uU(69," 555 "),p._UZ(70,"br"),p._uU(71," 5 "),p.qZA(),p.TgZ(72,"td",17),p._uU(73," 555 "),p._UZ(74,"br"),p._uU(75," 5 "),p.qZA(),p.TgZ(76,"td",17),p._uU(77," 555 "),p._UZ(78,"br"),p._uU(79," 5 "),p.qZA(),p.TgZ(80,"td",17),p._uU(81," 555 "),p._UZ(82,"br"),p._uU(83," 5 "),p.qZA(),p.TgZ(84,"td",17),p._uU(85," 555 "),p._UZ(86,"br"),p._uU(87," 5 "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(88,"div",18),p.TgZ(89,"div",19),p.TgZ(90,"div",20),p._uU(91,"hh"),p.qZA(),p.TgZ(92,"div",21),p._uU(93,"hh"),p.qZA(),p.TgZ(94,"div",21),p._uU(95,"hh"),p.qZA(),p.TgZ(96,"div",21),p._uU(97,"hh"),p.qZA(),p.TgZ(98,"div",21),p._uU(99,"hh"),p.qZA(),p.TgZ(100,"div",21),p._uU(101,"hh"),p.qZA(),p.TgZ(102,"div",21),p._uU(103,"hh"),p.qZA(),p.TgZ(104,"div",22),p._uU(105,"RANDOM PICK"),p.qZA(),p.qZA(),p.TgZ(106,"div",23),p.TgZ(107,"span",24),p._uU(108,"SINGLES"),p.qZA(),p.TgZ(109,"div",25),p.YNc(110,R,4,1,"div",26),p.qZA(),p.TgZ(111,"div",27),p.YNc(112,L,4,1,"div",26),p.qZA(),p.qZA(),p.TgZ(113,"div",28),p.TgZ(114,"div",20),p._uU(115,"hh"),p.qZA(),p.TgZ(116,"div",21),p._uU(117,"hh"),p.qZA(),p.TgZ(118,"div",21),p._uU(119,"hh"),p.qZA(),p.TgZ(120,"div",21),p._uU(121,"hh"),p.qZA(),p.TgZ(122,"div",21),p._uU(123,"hh"),p.qZA(),p.TgZ(124,"div",21),p._uU(125,"hh"),p.qZA(),p.TgZ(126,"div",21),p._uU(127,"hh"),p.qZA(),p.TgZ(128,"div",22),p._uU(129,"RANDOM PICK"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(130,"div",29),p.TgZ(131,"section"),p.TgZ(132,"div",30),p.TgZ(133,"button",31),p.NdJ("click",function(){return e.saveUserPlayInputDetails()}),p._uU(134,"Buy"),p.qZA(),p.TgZ(135,"button",32),p.NdJ("click",function(){return e.resetMatrixValue()}),p._uU(136,"Reset"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.YNc(137,Y,4,1,"div",33),p.YNc(138,Q,13,9,"div",33)),2&t&&(p.Q6J("ngClass",e.projectData.colorScheme),p.xp6(9),p.Q6J("ngForOf",e.singleNumbers),p.xp6(1),p.Q6J("ngIf",e.singleNumbers&&e.activeTripleContainerValue>-1),p.xp6(1),p.Q6J("ngForOf",e.numberCombinationMatrix),p.xp6(99),p.Q6J("ngForOf",e.singleNumbers),p.xp6(2),p.Q6J("ngForOf",e.chips),p.xp6(25),p.Q6J("ngIf",!e.isProduction),p.xp6(1),p.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[a.mk,f.oO,_.xw,_.Wh,_.yH,a.sg,a.O5,v.lW,C.k,S,N,B.Rr],pipes:[a.Ts],styles:['.dark-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-color:#6b686a;background-repeat:no-repeat;background-size:cover;width:100%}.dark-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:500px}.dark-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid pink;height:0}.dark-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#bbbebb;border-radius:5px}.dark-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#7a7276;border-radius:5px}.dark-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{border:2px solid #ff69b4;border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.dark-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#cdb2dc}.dark-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.dark-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.dark-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.dark-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.dark-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.dark-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.dark-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.green-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-color:#86a85f;background-repeat:no-repeat;background-size:cover;width:100%}.green-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:500px}.green-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid #c6f3af;height:0}.green-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#44fa3d;border-radius:5px}.green-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#ff69b4;border-radius:5px}.green-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#d5e8ac,#568725);border:2px solid #7fce87;border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.green-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#074503}.green-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.green-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.green-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.green-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.green-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.green-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.green-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.color-mode[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]{background-color:#ec6dc2;background-repeat:no-repeat;background-size:cover;width:100%}.color-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:500px}.color-mode[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid pink;height:0}.color-mode[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:#44fa3d;border-radius:5px}.color-mode[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#ff69b4;border-radius:5px}.color-mode[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#fabfe6,#fc08bf);border:2px solid #ff69b4;border-radius:100px;padding-left:6px!important;width:35px;max-height:90%!important}.color-mode[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{background-color:#a504fc}.color-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.color-mode[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.color-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.color-mode[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}.color-mode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.color-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]{border-radius:34px}.color-mode[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before, .mat-icon-button[_ngcontent-%COMP%]{border-radius:50%}.mat-icon-button[_ngcontent-%COMP%]{padding:0!important;min-width:0;width:20px;height:20px;flex-shrink:0;line-height:40px}span[_ngcontent-%COMP%]   .mat-fab[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%]{display:block;line-height:24px}#triple-body-0[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(203,155,125,.74)!important}#triple-body-1[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(87,103,177,.55)!important}#triple-body-2[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(111,203,107,.8)!important}#triple-body-3[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(85,69,231,.82)!important}#triple-body-4[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(168,100,61,.82)!important}#triple-body-5[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(193,153,130,.82)!important}#triple-body-6[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(14,139,135,.82)!important}#triple-body-7[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(170,49,105,.82)!important}#triple-body-8[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(17,97,139,.82)!important}#triple-body-9[_ngcontent-%COMP%]   .triple-number-button[_ngcontent-%COMP%]{background-color:rgba(58,173,124,.82)!important}#triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1px!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-0[_ngcontent-%COMP%]{background-color:rgba(203,155,125,.74)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-1[_ngcontent-%COMP%]{background-color:rgba(87,103,177,.55)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-2[_ngcontent-%COMP%]{background-color:rgba(111,203,107,.8)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-3[_ngcontent-%COMP%]{background-color:rgba(85,69,231,.82)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-4[_ngcontent-%COMP%]{background-color:rgba(168,100,61,.82)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-5[_ngcontent-%COMP%]{background-color:rgba(193,153,130,.82)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-6[_ngcontent-%COMP%]{background-color:rgba(14,139,135,.82)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-7[_ngcontent-%COMP%]{background-color:rgba(170,49,105,.82)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-8[_ngcontent-%COMP%]{background-color:rgba(17,97,139,.82)!important}#triple-table[_ngcontent-%COMP%]   .triple-selection-button-9[_ngcontent-%COMP%]{background-color:rgba(58,173,124,.82)!important}.chips-button[_ngcontent-%COMP%]{height:35px;width:35px;border-radius:50px}.triple-table-thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child{line-height:76px}.tripple-selection-button[_ngcontent-%COMP%]{height:35px!important;width:35px!important}.right-td[_ngcontent-%COMP%]{font-size:small}.right-td[_ngcontent-%COMP%], .right-td1[_ngcontent-%COMP%]{width:95px;text-align:center;color:#fff}.right-td1[_ngcontent-%COMP%]{font-weight:700}']}),t}(),X=[{path:"",canActivate:[(H=function(){function t(e){l(this,t),this.authService=e}return c(t,[{key:"canActivate",value:function(t,e){return this.authService.isTerminal()}}]),t}(),H.\u0275fac=function(t){return new(t||H)(p.LFG(m.e))},H.\u0275prov=p.Yz7({token:H,factory:H.\u0275fac,providedIn:"root"}),H)],component:z}],K=function(){var t=function t(){l(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[u.Bz.forChild(X)],u.Bz]}),t}(),W=r(3070),tt=r(9550),et=r(9024),nt=r(3841),ot=r(7154),it=(($=function t(){l(this,t)}).\u0275fac=function(t){return new(t||$)},$.\u0275mod=p.oAB({type:$}),$.\u0275inj=p.cJS({imports:[[a.ez,K,C.g,W.lN,k.UX,tt.c,et.FA,nt.LD,B.rP,C.g,v.ot,G,ot.o9]]}),$)}}])}();