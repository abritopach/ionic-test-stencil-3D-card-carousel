/*! Built with http://stenciljs.com */

App.loadStyles("ion-toggle_ios","ion-toggle{display:inline-block;contain:content}ion-toggle ion-gesture{display:block;width:100%;height:100%;visibility:inherit}.toggle-cover{left:0;position:absolute;top:0;width:100%;height:100%;border:0;outline:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;background:0 0;cursor:pointer}.toggle-ios{position:relative;width:51px;height:32px;box-sizing:content-box;contain:strict}.toggle-ios .toggle-icon{border-radius:16px;position:relative;display:block;width:100%;height:100%;background-color:#e6e6e6;transition:background-color .3s;pointer-events:none}.toggle-ios .toggle-icon::before{left:2px;right:2px;top:2px;bottom:2px;border-radius:16px;position:absolute;background-color:#fff;content:\"\";transform:scale3d(1,1,1);transition:transform .3s}.toggle-ios .toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;background-color:#fff;box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;will-change:transform;contain:strict}.toggle-ios.toggle-checked .toggle-icon{background-color:#488aff}.toggle-ios.toggle-activated .toggle-icon::before,.toggle-ios.toggle-checked .toggle-icon::before{transform:scale3d(0,0,0)}.toggle-ios.toggle-checked .toggle-inner{transform:translate3d(19px,0,0)}.toggle-ios.toggle-activated.toggle-checked .toggle-inner::before{transform:scale3d(0,0,0)}.toggle-ios.toggle-activated .toggle-inner{width:34px}.toggle-ios.toggle-activated.toggle-checked .toggle-inner{left:-4px}.item-ios.item-toggle-disabled ion-label,.toggle-ios.toggle-disabled{opacity:.3;pointer-events:none}.item-ios .toggle-ios[slot]{margin:0;padding:6px 8px 5px 16px}.item-ios .toggle-ios[slot=start]{padding:6px 16px 5px 0}.toggle-ios-primary.toggle-checked .toggle-icon{background-color:#488aff}.toggle-ios-secondary.toggle-checked .toggle-icon{background-color:#32db64}.toggle-ios-danger.toggle-checked .toggle-icon{background-color:#f53d3d}.toggle-ios-light.toggle-checked .toggle-icon{background-color:#f4f4f4}.toggle-ios-dark.toggle-checked .toggle-icon{background-color:#222}\nion-toggle.hydrated{visibility:inherit}");
App.loadComponents("owehkqrs",function(t,e,i,s){"use strict";var o=function(){function t(){this.activated=!1,this.hasFocus=!1,this.checked=!1,this.disabled=!1}return t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t}),this.emitStyle()},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.emitStyle=function(){var t=this;clearTimeout(this.styleTmr),this.styleTmr=setTimeout(function(){t.ionStyle.emit({"toggle-disabled":t.disabled,"toggle-checked":t.checked,"toggle-activated":t.activated,"toggle-focus":t.hasFocus})})},t.prototype.canStart=function(){return!this.disabled},t.prototype.onDragStart=function(t){this.startX=t.startX,this.fireFocus()},t.prototype.onDragMove=function(t){this.checked?t.currentX+15<this.startX&&(this.checked=!1,this.activated=!0,this.startX=t.currentX):t.currentX-15>this.startX&&(this.checked=!0,this.activated=t.currentX<this.startX+5,this.startX=t.currentX)},t.prototype.onDragEnd=function(t){this.checked?t.startX+4>t.currentX&&(this.checked=!1):t.startX-4<t.currentX&&(this.checked=!0),this.activated=!1,this.fireBlur(),this.startX=null},t.prototype.onSpace=function(t){this.toggle(),t.stopPropagation(),t.preventDefault()},t.prototype.toggle=function(){return this.disabled||(this.checked=!this.checked,this.fireFocus()),this.checked},t.prototype.fireFocus=function(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},t.prototype.fireBlur=function(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},t.prototype.hostData=function(){return{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled}}},t.prototype.render=function(){return e("ion-gesture",{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),onPress:this.toggle.bind(this),gestureName:"toggle",gesturePriority:30,type:"pan,press",direction:"x",threshold:20,attachTo:"parent"},e("div",{class:{"toggle-icon":!0}},e("div",{class:{"toggle-inner":!0}})),e("div",{class:{"toggle-cover":!0},"aria-checked":!!this.checked&&"true","aria-disabled":!!this.disabled&&"true","aria-labelledby":this.labelId,role:"checkbox",id:this.id,tabIndex:0}))},t}();t["ion-toggle"]=o},["ion-toggle",[["checked",1,1,3],["disabled",1,1,3],["value",1,1,1]],{theme:"toggle"},[["ionBlur"],["ionChange"],["ionFocus"],["ionStyle"]],0,[["checked","checkedChanged"],["disabled","disabledChanged"]]]);;