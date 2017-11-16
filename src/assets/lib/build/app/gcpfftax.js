/*! Built with http://stenciljs.com */

App.loadStyles("ion-modal_md","ion-modal{left:0;top:0;position:absolute;display:block;width:100%;height:100%;contain:strict}ion-modal-controller{display:none}.modal-backdrop{position:absolute;top:0;left:0;z-index:2;display:block;width:100%;height:100%;background-color:#000;opacity:.01;transform:translateZ(0)}.modal-backdrop.backdrop-no-tappable{cursor:auto}\@media not all and (min-width:768px) and (min-height:600px){.modal-backdrop{visibility:hidden}}.modal-backdrop.hide-backdrop{visibility:hidden}.modal-wrapper{z-index:10;height:100%;contain:strict}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (500px/2));position:absolute;width:600px;height:500px}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (600px/2));position:absolute;width:600px;height:600px}}.modal-content{position:absolute;top:0;left:0;display:block;width:100%;height:100%;opacity:0;contain:strict}.show-modal .modal-content{opacity:1}.modal-wrapper-md{transform:translate3d(0,40px,0);opacity:.01}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper-md{border-radius:2px;overflow:hidden;box-shadow:0 28px 48px rgba(0,0,0,.4)}}\nion-modal.hydrated{visibility:inherit}","ion-modal-controller_md","\nion-modal-controller.hydrated{visibility:inherit}");
App.loadComponents("gcpfftax",function(o,i,t,n){"use strict";function e(o,i,t){return t.split(" ").reduce(function(t,n){return t[n]=!0,o&&(t[n+"-"+o]=!0,i&&(t[n+"-"+i]=!0,t[n+"-"+o+"-"+i]=!0)),t},{})}var a=function(o,i){var t=new o,n=new o;n.addElement(i.querySelector(".modal-backdrop"));var e=new o;return e.addElement(i.querySelector(".modal-wrapper")),e.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),n.fromTo("opacity",.01,.4),t.addElement(i).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(n).add(e)},s=function(o,i){var t=new o,n=new o;n.addElement(i.querySelector(".modal-backdrop"));var e=new o,a=i.querySelector(".modal-wrapper");e.addElement(a);var s=a.getBoundingClientRect();return e.beforeStyles({opacity:1}).fromTo("translateY","0%",window.innerHeight-s.top+"px"),n.fromTo("opacity",.4,0),t.addElement(i).easing("ease-out").duration(250).add(n).add(e)},d=function(){function o(){this.componentProps={},this.enableBackdropDismiss=!0,this.showBackdrop=!0}return o.prototype.present=function(){var o=this;return new Promise(function(i){o._present(i)})},o.prototype._present=function(o){var i=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionModalWillPresent.emit({modal:this});var t=this.enterAnimation;t||(t=a),this.animationCtrl.create(t,this.el).then(function(t){i.animation=t,t.onFinish(function(t){t.destroy(),i.ionModalDidPresent.emit({modal:i}),o()}).play()})},o.prototype.dismiss=function(){var o=this;return this.animation&&(this.animation.destroy(),this.animation=null),new Promise(function(i){o.ionModalWillDismiss.emit({modal:o});var n=o.exitAnimation;n||(n=s),o.animationCtrl.create(n,o.el).then(function(n){o.animation=n,n.onFinish(function(n){n.destroy(),o.ionModalDidDismiss.emit({modal:o}),t.dom.write(function(){o.el.parentNode.removeChild(o.el)}),i()}).play()})})},o.prototype.onDismiss=function(o){o.stopPropagation(),o.preventDefault(),this.dismiss()},o.prototype.componentDidLoad=function(){this.ionModalDidLoad.emit({modal:this})},o.prototype.componentDidunload=function(){this.ionModalDidUnload.emit({modal:this})},o.prototype.backdropClick=function(){this.enableBackdropDismiss&&this.dismiss()},o.prototype.render=function(){var o=this.component,t="modal-content";this.cssClass&&(t+=" "+this.cssClass);var n=e(this.mode,this.color,"modal-wrapper"),a=e(this.mode,this.color,t);return[i("div",{class:{"modal-backdrop":!0,"hide-backdrop":!this.showBackdrop},onclick:this.backdropClick.bind(this)}),i("div",{class:n,role:"dialog"},i(o,Object.assign({},{class:a},this.componentProps)))]},o}(),r=function(){function o(){this.ids=0,this.modalResolves={},this.modals=[]}return o.prototype.create=function(o){var i=this,t=document.createElement("ion-modal"),n=this.ids++;return t.id="modal-"+n,t.style.zIndex=(1e4+n).toString(),Object.assign(t,o),(document.querySelector("ion-app")||document.body).appendChild(t),new Promise(function(o){i.modalResolves[t.id]=o})},o.prototype.modalDidLoad=function(o){var i=o.detail.modal,t=this.modalResolves[i.id];t&&(t(i),delete this.modalResolves[i.id])},o.prototype.modalWillPresent=function(o){this.modals.push(o.detail.modal)},o.prototype.modalWillDismiss=function(o){var i=this.modals.indexOf(o.detail.modal);i>-1&&this.modals.splice(i,1)},o.prototype.escapeKeyUp=function(){var o=this.modals[this.modals.length-1];o&&o.dismiss()},o}();o["ion-modal"]=d,o["ion-modal-controller"]=r},["ion-modal",[["animationCtrl",4,0,1,"ion-animation-controller"],["component",1,1,1],["componentProps",1,1,1],["cssClass",1,1,1],["el",7,0,1],["enableBackdropDismiss",1,1,3],["enterAnimation",1,1,1],["exitAnimation",1,1,1],["id",1,1,1],["showBackdrop",1,1,3]],{theme:"modal"},[["ionModalDidDismiss"],["ionModalDidLoad"],["ionModalDidPresent"],["ionModalDidUnload"],["ionModalWillDismiss"],["ionModalWillPresent"]]],["ion-modal-controller",[["create",6,0,1]]]);;