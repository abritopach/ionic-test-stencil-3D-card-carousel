/*! Built with http://stenciljs.com */

App.loadStyles("ion-chip_wp","ion-chip{display:inline-flex;align-self:center;font-weight:400;vertical-align:middle;box-sizing:border-box}ion-chip ion-icon{text-align:center;border-radius:50%;width:32px;height:32px;font-size:18px;line-height:36px}ion-chip ion-avatar{border-radius:50%;width:32px;min-width:32px;height:32px;min-height:32px}ion-chip ion-avatar img{border-radius:50%;display:block;width:100%;max-width:100%;height:100%;max-height:100%}.chip-wp{border-radius:16px;height:32px;font-size:13px;line-height:32px;color:rgba(0,0,0,.87);background:rgba(0,0,0,.12);margin:2px 0}.chip-wp>ion-label{margin:0 10px}.chip-wp>ion-icon{fill:#fff;background-color:#488aff}.chip-wp-primary{color:#fff;background-color:#488aff}.chip-wp .icon-wp-primary{fill:#fff;background-color:#488aff}.chip-wp-secondary{color:#fff;background-color:#32db64}.chip-wp .icon-wp-secondary{fill:#fff;background-color:#32db64}.chip-wp-danger{color:#fff;background-color:#f53d3d}.chip-wp .icon-wp-danger{fill:#fff;background-color:#f53d3d}.chip-wp-light{color:#000;background-color:#f4f4f4}.chip-wp .icon-wp-light{fill:#000;background-color:#f4f4f4}.chip-wp-dark{color:#fff;background-color:#222}.chip-wp .icon-wp-dark{fill:#fff;background-color:#222}\nion-chip.hydrated{visibility:inherit}","ion-chip-button_wp",".chip-button{border-radius:50%;margin:0;width:32px;height:32px}.chip-button-wp{background-color:#488aff}.chip-button-wp .icon{fill:#fff}.chip-button-clear-wp{background-color:transparent;color:#488aff}.chip-button-clear-wp .icon{fill:#488aff}.chip-button-wp-primary{color:#fff;background-color:#488aff}.chip-button-wp-primary .icon{fill:#fff}.chip-button-clear-wp-primary{color:#488aff}.chip-button-clear-wp-primary .icon{fill:#488aff}.chip-button-wp-secondary{color:#fff;background-color:#32db64}.chip-button-wp-secondary .icon{fill:#fff}.chip-button-clear-wp-secondary{color:#32db64}.chip-button-clear-wp-secondary .icon{fill:#32db64}.chip-button-wp-danger{color:#fff;background-color:#f53d3d}.chip-button-wp-danger .icon{fill:#fff}.chip-button-clear-wp-danger{color:#f53d3d}.chip-button-clear-wp-danger .icon{fill:#f53d3d}.chip-button-wp-light{color:#000;background-color:#f4f4f4}.chip-button-wp-light .icon{fill:#000}.chip-button-clear-wp-light{color:#f4f4f4}.chip-button-clear-wp-light .icon{fill:#f4f4f4}.chip-button-wp-dark{color:#fff;background-color:#222}.chip-button-wp-dark .icon{fill:#fff}.chip-button-clear-wp-dark{color:#222}.chip-button-clear-wp-dark .icon{fill:#222}\nion-chip-button.hydrated{visibility:inherit}");
App.loadComponents("ifoidrft",function(t,n,e,o){"use strict";function s(t){for(var n={},e=0;e<t.length;e++)n[t.item(e)]=!0;return n}var i=function(){function t(){}return t.prototype.render=function(){return n("slot",null)},t}(),r=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++){n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},l=function(){function t(){this.clear=!1,this.disabled=!1}return t.prototype.getButtonClassList=function(t,n){return t?[t,t+"-"+n]:[]},t.prototype.getColorClassList=function(t,n,e,o){var s="default"===e?""+n:n+"-"+e;return[s+"-"+o].concat("default"!==e?""+s:[],t?s+"-"+o+"-"+t:[])},t.prototype.getStyleClassList=function(t){var n=[].concat(this.clear?this.getColorClassList(this.color,t,"clear",this.mode):[]);return 0===n.length&&(n=this.getColorClassList(this.color,t,"default",this.mode)),n},t.prototype.render=function(){var t=s(this.el.classList),e=[].concat(this.getButtonClassList("chip-button",this.mode),this.getStyleClassList("chip-button")).reduce(function(t,n){return t[n]=!0,t},{}),o=this.href?"a":"button",i=r({},t,e);return n(o,{class:i,disabled:this.disabled},n("span",{class:{"button-inner":!0}},n("slot",null)),n("div",{class:{"button-effect":!0}}))},t}();t["ion-chip"]=i,t["ion-chip-button"]=l},["ion-chip",0,{theme:"chip"}],["ion-chip-button",[["clear",1,1,3],["disabled",1,1,3],["el",7,0,1],["href",1,1,1]]]);;