/*! Built with http://stenciljs.com */

App.loadStyles("ion-toast_md","ion-toast{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;pointer-events:none;contain:strict}.toast-container{display:flex;align-items:center;pointer-events:auto;contain:content}.toast-button{padding:19px 16px 17px;font-size:1.5rem}.toast-message{flex:1}.toast-md .toast-wrapper{left:0;right:0;margin:auto;position:absolute;z-index:10;display:block;width:100%;max-width:700px;background:#333}.toast-md .toast-wrapper.toast-top{transform:translate3d(0,-100%,0);top:0}.toast-md .toast-wrapper.toast-bottom{transform:translate3d(0,100%,0);bottom:0}.toast-md .toast-wrapper.toast-middle{opacity:.01}.toast-md .toast-message{font-size:1.5rem;color:#fff;padding:19px 16px 17px}\nion-toast.hydrated{visibility:inherit}","ion-toast-controller_md","\nion-toast-controller.hydrated{visibility:inherit}");
App.loadComponents("ymjh5yhi",function(t,i,o,n){"use strict";var s=function(t,i,o){var n=new t,s=new t,e=i.querySelector(".toast-wrapper");switch(s.addElement(e),o){case"top":s.fromTo("translateY","-100%","10px");break;case"middle":var a=Math.floor(i.clientHeight/2-e.clientHeight/2);e.style.top=a+"px",s.fromTo("opacity",.01,1);break;default:s.fromTo("translateY","100%","-10px")}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s)},e=function(t,i,o){var n=new t,s=new t,e=i.querySelector(".toast-wrapper");switch(s.addElement(e),o){case"top":s.fromTo("translateY","10px","-100%");break;case"middle":s.fromTo("opacity",.99,0);break;default:s.fromTo("translateY","-10px","100%")}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(s)},a=function(){function t(){}return t.prototype.present=function(){var t=this;return new Promise(function(i){t._present(i)})},t.prototype._present=function(t){var i=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionToastWillPresent.emit({actionSheet:this});var o=this.enterAnimation;o||(o=s),this.animationCtrl.create(o,this.el,this.position).then(function(o){i.animation=o,o.onFinish(function(o){o.destroy(),i.ionViewDidEnter(),t()}).play()})},t.prototype.dismiss=function(){var t=this;return this.animation&&(this.animation.destroy(),this.animation=null),new Promise(function(i){t.ionToastWillDismiss.emit({toast:t});var n=t.exitAnimation;n||(n=e),t.animationCtrl.create(n,t.el,t.position).then(function(n){t.animation=n,n.onFinish(function(n){n.destroy(),t.ionToastDidDismiss.emit({toast:t}),o.dom.write(function(){t.el.parentNode.removeChild(t.el)}),i()}).play()})})},t.prototype.componentDidunload=function(){this.ionToastDidUnload.emit({toast:this})},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit({toast:this})},t.prototype.ionViewDidEnter=function(){var t=this;this.ionToastDidPresent.emit({toast:this}),this.duration&&setTimeout(function(){t.dismiss()},this.duration)},t.prototype.render=function(){var t=this;return i("div",{class:this.wrapperClass()},i("div",{class:{"toast-container":!0}},this.message?i("div",{class:{"toast-message":!0}},this.message):null,this.showCloseButton?i("ion-button",{class:{"toast-button":!0},onclick:function(){return t.dismiss()},color:"light",clear:!0},this.closeButtonText||"Close"):null))},t.prototype.wrapperClass=function(){return(this.position?["toast-wrapper","toast-"+this.position]:["toast-wrapper","toast-bottom"]).reduce(function(t,i){return t[i]=!0,t},{})},t}(),r=function(){function t(){this.ids=0,this.toastResolves={},this.toasts=[]}return t.prototype.create=function(t){var i=this,o=document.createElement("ion-toast"),n=this.ids++;return o.id="toast-"+n,o.style.zIndex=(1e4+n).toString(),Object.assign(o,t),(document.querySelector("ion-app")||document.body).appendChild(o),new Promise(function(t){i.toastResolves[o.id]=t})},t.prototype.viewDidLoad=function(t){var i=t.detail.toast,o=this.toastResolves[i.id];o&&(o(i),delete this.toastResolves[i.id])},t.prototype.willPresent=function(t){this.toasts.push(t.detail.toast)},t.prototype.willDismiss=function(t){var i=this.toasts.indexOf(t.detail.toast);i>-1&&this.toasts.splice(i,1)},t.prototype.escapeKeyUp=function(){var t=this.toasts[this.toasts.length-1];t&&t.dismiss()},t}();t["ion-toast"]=a,t["ion-toast-controller"]=r},["ion-toast",[["animationCtrl",4,0,1,"ion-animation-controller"],["closeButtonText",1,1,1],["config",3,0,1,"config"],["cssClass",1,1,1],["dismissOnPageChange",1,1,3],["duration",1,1,4],["el",7,0,1],["enterAnimation",1,1,1],["exitAnimation",1,1,1],["id",1,1,1],["message",1,1,1],["position",1,1,1],["showCloseButton",1,1,3]],{theme:"toast"},[["ionToastDidDismiss"],["ionToastDidLoad"],["ionToastDidPresent"],["ionToastDidUnload"],["ionToastWillDismiss"],["ionToastWillPresent"]]],["ion-toast-controller",[["create",6,0,1]]]);;