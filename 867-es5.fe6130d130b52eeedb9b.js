!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function n(e,n,c){return n&&t(e.prototype,n),c&&t(e,c),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[867],{3867:function(t,c,i){i.r(c),i.d(c,{SettingsModule:function(){return v}});var r=i(8583),o=i(3423),a=i(7716),u=i(1397);function s(e,t){if(1&e){var n=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a.TgZ(4,"input",4),a.NdJ("click",function(){var e=a.CHM(n).$implicit;return a.oxw().changeAutoGenerate(e)}),a.qZA(),a.qZA(),a.qZA()}if(2&e){var c=t.$implicit;a.xp6(2),a.Oqu(c.game_name),a.xp6(2),a.Q6J("checked","yes"==c.auto_generate)}}var f,g=((f=function(){function t(n){e(this,t),this.gameService=n,this.selectedGame=null}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(function(t){e.games=t})}},{key:"changeAutoGenerate",value:function(e){console.log(e),this.gameService.updateAutogenertate(e.id)}}]),t}()).\u0275fac=function(e){return new(e||f)(a.Y36(u.h))},f.\u0275cmp=a.Xpm({type:f,selectors:[["app-settings"]],decls:11,vars:1,consts:[[1,"container","pt-5"],[1,"table","col-4","text-center"],["scope","col"],[4,"ngFor","ngForOf"],["type","checkbox","data-toggle","toggle",3,"checked","click"]],template:function(e,t){1&e&&(a.TgZ(0,"div"),a.TgZ(1,"div",0),a.TgZ(2,"table",1),a.TgZ(3,"thead"),a.TgZ(4,"tr"),a.TgZ(5,"th",2),a._uU(6,"Game"),a.qZA(),a.TgZ(7,"th",2),a._uU(8,"Auto Generate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"tbody"),a.YNc(10,s,5,2,"tr",3),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(10),a.Q6J("ngForOf",t.games))},directives:[r.sg],styles:[""]}),f),l=[{path:"",canActivate:[i(1068).m],component:g}],p=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.Bz.forChild(l)],o.Bz]}),t}(),h=i(3679),v=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.ez,p,h.u5]]}),t}()},1068:function(t,c,i){i.d(c,{m:function(){return u}});var r,o=i(7716),a=i(3535),u=((r=function(){function t(n){e(this,t),this.authService=n}return n(t,[{key:"canActivate",value:function(e,t){return this.authService.isAdmin()}}]),t}()).\u0275fac=function(e){return new(e||r)(o.LFG(a.e))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r)}}])}();