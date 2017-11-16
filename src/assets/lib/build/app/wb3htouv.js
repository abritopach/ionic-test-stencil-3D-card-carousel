/*! Built with http://stenciljs.com */

App.loadStyles("ion-alert_md","ion-alert{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1000;display:flex;align-items:center;justify-content:center;contain:strict}ion-alert.alert-top{padding-top:50px;align-items:flex-start}ion-alert input{width:100%}.alert-wrapper{z-index:10;display:flex;flex-direction:column;min-width:250px;max-height:90%;opacity:0;contain:content}.alert-title{margin:0;padding:0}.alert-sub-title{margin:5px 0 0;padding:0;font-weight:400}.alert-message{overflow-y:scroll;-webkit-overflow-scrolling:touch}.alert-input{padding:10px 0;border:0;background:inherit}.alert-input::-moz-placeholder{color:#999}.alert-input:-ms-input-placeholder{color:#999}.alert-input::-webkit-input-placeholder{text-indent:0;color:#999}.alert-button-group{display:flex;flex-direction:row;width:100%}.alert-button-group-vertical{flex-direction:column;flex-wrap:nowrap}.alert-button{margin:0;z-index:0;display:block;font-size:14px;line-height:20px}.alert-tappable{text-align:left;text-align:start;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;margin:0;padding:0;width:100%;font-size:inherit;line-height:initial;background:0 0}.alert-md .alert-wrapper{border-radius:2px;max-width:280px;background-color:#fafafa;box-shadow:0 16px 20px rgba(0,0,0,.4)}.alert-md .alert-head{text-align:left;text-align:start;padding:24px 24px 20px}.alert-md .alert-title{font-size:22px}.alert-md .alert-sub-title{font-size:16px}.alert-md .alert-input-group,.alert-md .alert-message{color:rgba(0,0,0,.5);padding:0 24px 24px}.alert-md .alert-message{max-height:240px;font-size:15px}.alert-md .alert-message:empty{padding:0}.alert-md .alert-input{margin:5px 0;border-bottom:1px solid #dedede;color:#000}.alert-md .alert-input:focus{margin-bottom:4px;border-bottom:2px solid #488aff}.alert-md .alert-checkbox-group,.alert-md .alert-radio-group{position:relative;overflow:auto;max-height:240px;border-top:1px solid #dedede;border-bottom:1px solid #dedede}.alert-md .alert-tappable{position:relative;display:flex;overflow:hidden;min-height:4.4rem}.alert-md .alert-radio-label{overflow:hidden;flex:1;text-overflow:ellipsis;white-space:nowrap;color:initial;padding:13px 26px}.alert-md .alert-radio-icon{left:13px;top:0;border-radius:50%;position:relative;display:block;width:16px;height:16px;border-width:2px;border-style:solid;border-color:#787878}.alert-md .alert-radio-inner{left:2px;top:2px;border-radius:50%;position:absolute;width:8px;height:8px;background-color:#488aff;transform:scale3d(0,0,0);transition:transform 280ms cubic-bezier(.4,0,.2,1)}.alert-md [aria-checked=true] .alert-radio-label{color:#488aff}.alert-md [aria-checked=true] .alert-radio-icon{border-color:#488aff}.alert-md [aria-checked=true] .alert-radio-inner{transform:scale3d(1,1,1)}.alert-md .alert-checkbox-label{overflow:hidden;flex:1;text-overflow:ellipsis;white-space:nowrap;color:initial;padding:13px 26px}.alert-md [aria-checked=true] .alert-checkbox-label{color:initial}.alert-md .alert-checkbox-icon{left:13px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:#787878}.alert-md [aria-checked=true] .alert-checkbox-icon{border-color:#488aff;background-color:#488aff}.alert-md [aria-checked=true] .alert-checkbox-inner{left:3px;top:0;position:absolute;width:6px;height:10px;border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:#fff;transform:rotate(45deg)}.alert-md .alert-button-group{flex-wrap:wrap-reverse;justify-content:flex-end;padding:8px 8px 8px 24px}.alert-md .alert-button{text-align:right;text-align:end;border-radius:2px;position:relative;overflow:hidden;font-weight:500;text-transform:uppercase;color:#488aff;background-color:transparent;margin:0 8px 0 0;padding:10px}.alert-md .alert-button.activated{background-color:rgba(158,158,158,.2)}.alert-md .alert-button .button-inner{justify-content:flex-end}\nion-alert.hydrated{visibility:inherit}","ion-alert-controller_md","\nion-alert-controller.hydrated{visibility:inherit}");
App.loadComponents("wb3htouv",function(t,e,n,i){"use strict";var r=function(t,e){var n=new t,i=new t;i.addElement(e.querySelector(".alert-backdrop"));var r=new t;return r.addElement(e.querySelector(".alert-wrapper")),i.fromTo("opacity",.01,.3),r.fromTo("opacity",.01,1).fromTo("scale",1.1,1),n.addElement(e).easing("ease-in-out").duration(200).add(i).add(r)},o=function(t,e){var n=new t,i=new t;i.addElement(e.querySelector(".alert-backdrop"));var r=new t;return r.addElement(e.querySelector(".alert-wrapper")),i.fromTo("opacity",.3,0),r.fromTo("opacity",.99,0).fromTo("scale",1,.9),n.addElement(e).easing("ease-in-out").duration(200).add(i).add(r)},a=function(){function t(){this.buttons=[],this.inputs=[],this.enableBackdropDismiss=!0}return t.prototype.present=function(){var t=this;return new Promise(function(e){t._present(e)})},t.prototype._present=function(t){var e=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionAlertWillPresent.emit({alert:this});var n=this.enterAnimation;n||(n=r),this.animationCtrl.create(n,this.el).then(function(n){e.animation=n,n.onFinish(function(n){n.destroy(),e.ionViewDidEnter(),t()}).play()})},t.prototype.dismiss=function(){var t=this;return this.animation&&(this.animation.destroy(),this.animation=null),new Promise(function(e){t.ionAlertWillDismiss.emit({alert:t});var i=t.exitAnimation;i||(i=o),t.animationCtrl.create(i,t.el).then(function(i){t.animation=i,i.onFinish(function(i){i.destroy(),t.ionAlertDidDismiss.emit({alert:t}),n.dom.write(function(){t.el.parentNode.removeChild(t.el)}),e()}).play()})})},t.prototype.componentDidunload=function(){this.ionAlertDidUnload.emit({alert:this})},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.componentDidLoad=function(){this.ionAlertDidLoad.emit({alert:this})},t.prototype.ionViewDidEnter=function(){this.ionAlertDidPresent.emit({loading:this})},t.prototype.backdropClick=function(){this.enableBackdropDismiss&&this.dismiss()},t.prototype.rbClick=function(t){this.inputs.forEach(function(e){return e.checked=t===e,e}),this.activeId=t.id,t.handler&&t.handler(t)},t.prototype.cbClick=function(t){t.checked=!t.checked,t.handler&&t.handler(t)},t.prototype.btnClick=function(t){console.log("btnClick",t);var e=!0;t.handler&&!1===t.handler(this.getValues())&&(e=!1),e&&this.dismiss()},t.prototype.getValues=function(){if("radio"===this.inputType){var t=this.inputs.find(function(t){return t.checked});return console.debug("returning",t?t.value:void 0),t?t.value:void 0}if("checkbox"===this.inputType)return console.debug("returning",this.inputs.filter(function(t){return t.checked}).map(function(t){return t.value})),this.inputs.filter(function(t){return t.checked}).map(function(t){return t.value});if(0!==this.inputs.length){var e={};return this.inputs.forEach(function(t){e[t.name]=t.value}),console.debug("returning",e),e}console.debug("returning","undefined")},t.prototype.buttonClass=function(t){return(t.cssClass?["alert-button",""+t.cssClass]:["alert-button"]).reduce(function(t,e){return t[e]=!0,t},{})},t.prototype.renderCheckbox=function(t){var n=this;return 0===t.length?null:e("div",{class:{"alert-checkbox-group":!0}},t.map(function(t){return e("button",{class:{"alert-tappable":!0,"alert-checkbox":!0,"alert-checkbox-button":!0},onclick:function(){return n.cbClick(t)},"aria-checked":t.checked,disabled:t.disabled,role:"checkbox",id:t.id},e("div",{class:{"button-inner":!0}},e("div",{class:{"alert-checkbox-icon":!0}},e("div",{class:{"alert-checkbox-inner":!0}})),e("div",{class:{"alert-checkbox-label":!0}},t.label)))}))},t.prototype.renderRadio=function(t){var n=this;return 0===t.length?null:e("div",{class:{"alert-radio-group":!0},role:"radiogroup","aria-labelledby":"TODO","aria-activedescendant":this.activeId},t.map(function(t){return e("button",{class:{"alert-radio-button":!0,"alert-tappable":!0,"alert-radio":!0},onclick:function(){return n.rbClick(t)},"aria-checked":t.checked,disabled:t.disabled,role:"radio",id:t.id},e("div",{class:{"button-inner":!0}},e("div",{class:{"alert-radio-icon":!0}},e("div",{class:{"alert-radio-inner":!0}})),e("div",{class:{"alert-radio-label":!0}},t.label)))}))},t.prototype.renderInput=function(t){return 0===t.length?null:e("div",{class:{"alert-input-group":!0}},t.map(function(t){return e("div",{class:{"alert-input-wrapper":!0}},e("input",{class:{"alert-input":!0},placeholder:t.placeholder,value:t.value,type:t.type,min:t.min,max:t.max,id:t.id}))}))},t.prototype.render=function(){var t=this,n={"alert-button-group":!0,"alert-button-group-vertical":this.buttons.length>2},i=this.buttons.map(function(t){return"string"==typeof t&&(t={text:t}),t}).filter(function(t){return null!==t}),r=[];return this.inputs=this.inputs.map(function(e,n){return{type:e.type||"text",name:e.name?e.name:n+"",placeholder:e.placeholder?e.placeholder:"",value:e.value?e.value:"",label:e.label,checked:!!e.checked,disabled:!!e.disabled,id:e.id?e.id:"alert-input-"+t.id+"-"+n,handler:e.handler?e.handler:null,min:e.min?e.min:null,max:e.max?e.max:null}}).filter(function(t){return null!==t}),this.inputs.forEach(function(t){r.indexOf(t.type)<0&&r.push(t.type)}),r.length>1&&(r.indexOf("checkbox")>-1||r.indexOf("radio")>-1)&&console.warn("Alert cannot mix input types: "+r.join("/")+". Please see alert docs for more info."),this.inputType=r.length?r[0]:null,[e("ion-backdrop",{class:{"alert-backdrop":!0},onclick:this.backdropClick.bind(this)}),e("div",{class:{"alert-wrapper":!0}},e("div",{class:{"alert-head":!0}},this.title?e("h2",{class:{"alert-title":!0},id:"TODO"},this.title):null,this.subTitle?e("h2",{class:{"alert-sub-title":!0},id:"TODO"},this.subTitle):null),e("div",{class:{"alert-message":!0},id:"TODO",innerHTML:this.message}),function(){switch(t.inputType){case"checkbox":return t.renderCheckbox(t.inputs);case"radio":return t.renderRadio(t.inputs);default:return t.renderInput(t.inputs)}}(),e("div",{class:n},i.map(function(n){return e("button",{class:t.buttonClass(n),onclick:function(){return t.btnClick(n)}},e("span",{class:{"button-inner":!0}},n.text))})))]},t}(),l=function(){function t(){this.ids=0,this.alertResolves={},this.alerts=[]}return t.prototype.create=function(t){var e=this,n=document.createElement("ion-alert"),i=this.ids++;return n.id="alert-"+i,n.style.zIndex=(2e4+i).toString(),Object.assign(n,t),(document.querySelector("ion-app")||document.body).appendChild(n),new Promise(function(t){e.alertResolves[n.id]=t})},t.prototype.viewDidLoad=function(t){var e=t.detail.alert,n=this.alertResolves[e.id];n&&(n(e),delete this.alertResolves[e.id])},t.prototype.willPresent=function(t){this.alerts.push(t.detail.alert)},t.prototype.willDismiss=function(t){var e=this.alerts.indexOf(t.detail.alert);e>-1&&this.alerts.splice(e,1)},t.prototype.escapeKeyUp=function(){var t=this.alerts[this.alerts.length-1];t&&t.dismiss()},t}();t["ion-alert"]=a,t["ion-alert-controller"]=l},["ion-alert",[["animationCtrl",4,0,1,"ion-animation-controller"],["buttons",1,1,1],["config",3,0,1,"config"],["cssClass",1,1,1],["el",7,0,1],["enableBackdropDismiss",1,1,3],["enterAnimation",1,1,1],["exitAnimation",1,1,1],["id",1,1,1],["inputs",1,1,1],["message",1,1,1],["subTitle",1,1,1],["title",1,1,1]],{theme:"alert"},[["ionAlertDidDismiss"],["ionAlertDidLoad"],["ionAlertDidPresent"],["ionAlertDidUnload"],["ionAlertWillDismiss"],["ionAlertWillPresent"]]],["ion-alert-controller",[["create",6,0,1]]]);;