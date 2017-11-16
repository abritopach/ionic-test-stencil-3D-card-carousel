/*! Built with http://stenciljs.com */

App.loadStyles("ion-popover_ios","ion-popover{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1000;display:flex;align-items:center;justify-content:center}.popover-wrapper{z-index:10;opacity:0}.popover-content{position:absolute;z-index:10;display:flex;overflow:auto;flex-direction:column}.popover-content ion-content,.popover-content ion-scroll{contain:none}.popover-content ion-scroll{position:relative}ion-popover-controller{display:none}.popover-backdrop{position:absolute;top:0;left:0;z-index:2;display:block;width:100%;height:100%;background-color:#000;opacity:.01;transform:translateZ(0)}.popover-backdrop.backdrop-no-tappable{cursor:auto}.popover-ios .popover-content{border-radius:10px;width:200px;min-width:0;min-height:0;max-height:90%;color:#000;background:#fff}.popover-ios .popover-arrow{position:absolute;display:block;overflow:hidden;width:20px;height:10px}.popover-ios .popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;z-index:10;width:14px;height:14px;background-color:#fff;content:\"\";transform:rotate(45deg)}.popover-ios.popover-bottom .popover-arrow{top:auto;bottom:-10px}.popover-ios.popover-bottom .popover-arrow::after{top:-6px}\nion-popover.hydrated{visibility:inherit}","ion-popover-controller_ios","\nion-popover-controller.hydrated{visibility:inherit}");
App.loadComponents("rlx6xljt",function(t,o,e,i){"use strict";function n(t,o,e){return e.split(" ").reduce(function(e,i){return e[i]=!0,t&&(e[i+"-"+t]=!0,o&&(e[i+"-"+o]=!0,e[i+"-"+t+"-"+o]=!0)),e},{})}var r=function(t,o){var e=new t,i=new t;return i.addElement(o.querySelector(".popover-backdrop")),i.fromTo("opacity",.01,.08),e.addElement(o).easing("ease").duration(100).add(i)},p=function(t,o){var e=new t,i=new t;i.addElement(o.querySelector(".popover-backdrop"));var n=new t;return n.addElement(o.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),i.fromTo("opacity",.08,0),e.addElement(o).easing("ease").duration(500).add(i).add(n)},s=function(){function t(){this.positioned=!1,this.componentProps={},this.enableBackdropDismiss=!0,this.showBackdrop=!0}return t.prototype.present=function(){var t=this;return new Promise(function(o){t._present(o)})},t.prototype.positionPopover=function(){var t=h[this.mode];console.debug("Position popover",this.el,this.ev,t);var o=this.el.querySelector(".popover-content"),e=this.el.querySelector(".popover-arrow");this.ev||(e.style.display="none");var i={y:"top",x:"left"},n={width:o.getBoundingClientRect().width,height:o.getBoundingClientRect().height},r={width:window.screen.width,height:window.screen.height},p=this.ev&&this.ev.target&&this.ev.target.getBoundingClientRect(),s={top:p&&"top"in p?p.top:r.height/2-n.height/2,left:p&&"left"in p?p.left:r.width/2-n.width/2,width:p&&p.width||0,height:p&&p.height||0};t.centerTarget&&(s.left=p&&"left"in p?p.left:r.width/2);var d=e.getBoundingClientRect(),a={width:d.width,height:d.height},l={top:s.top+s.height,left:s.left+s.width/2-a.width/2},c={top:s.top+s.height+(a.height-1),left:s.left};t.centerTarget&&(c.left=s.left+s.width/2-n.width/2),c.left<t.padding?c.left=t.padding:n.width+t.padding+c.left>r.width&&(c.left=r.width-n.width-t.padding,i.x="right"),this.showFromBottom(s,n,r)?(this.el.className=this.el.className+" popover-bottom",i.y="bottom",c.top=s.top-n.height,t.showArrow&&(l.top=s.top-(a.height+1),c.top=s.top-n.height-(a.height-1))):this.exceedsViewport(s,n,r)&&(o.style.bottom=t.padding+t.unit),e.style.top=l.top+"px",e.style.left=l.left+"px",o.style.top=c.top+"px",o.style.left=c.left+"px",o.style.transformOrigin=i.y+" "+i.x,this.positioned=!0},t.prototype.showFromBottom=function(t,o,e){return t.top+t.height+o.height>e.height&&t.top-o.height>0},t.prototype.exceedsViewport=function(t,o,e){return t.top+t.height+o.height>e.height},t.prototype._present=function(t){var o=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionPopoverWillPresent.emit({popover:this});var e=this.enterAnimation;e||(e=r),this.animationCtrl.create(e,this.el).then(function(e){o.animation=e,e.onFinish(function(e){e.destroy(),o.ionViewDidEnter(),o.positionPopover(),t()}).play()})},t.prototype.dismiss=function(){var t=this;return this.animation&&(this.animation.destroy(),this.animation=null),new Promise(function(o){t.ionPopoverWillDismiss.emit({popover:t});var i=t.exitAnimation;i||(i=p),t.animationCtrl.create(i,t.el).then(function(i){t.animation=i,i.onFinish(function(i){i.destroy(),t.ionPopoverDidDismiss.emit({popover:t}),e.dom.write(function(){t.el.parentNode.removeChild(t.el)}),o()}).play()})})},t.prototype.componentDidunload=function(){this.ionPopoverDidUnload.emit({popover:this})},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit({popover:this})},t.prototype.ionViewDidEnter=function(){this.ionPopoverDidPresent.emit({popover:this})},t.prototype.backdropClick=function(){this.enableBackdropDismiss&&this.dismiss()},t.prototype.render=function(){var t=this.component,e=n(this.mode,this.color,"popover-wrapper"),i=this.positioned?{opacity:"1"}:{};return[o("ion-backdrop",{class:{"popover-backdrop":!0},onclick:this.backdropClick.bind(this)}),o("div",{class:e,style:i},o("div",{class:{"popover-arrow":!0}}),o("div",{class:{"popover-content":!0}},o("div",{class:{"popover-viewport":!0}},o(t,Object.assign({},{class:this.cssClass},this.componentProps)))))]},t}(),h={ios:{padding:2,unit:"%",showArrow:!0,centerTarget:!0},md:{padding:12,unit:"px",showArrow:!1,centerTarget:!1},wp:{padding:12,unit:"px",showArrow:!1,centerTarget:!1}},d=function(){function t(){this.ids=0,this.popoverResolves={},this.popovers=[]}return t.prototype.create=function(t){var o=this,e=document.createElement("ion-popover"),i=this.ids++;return e.id="popover-"+i,e.style.zIndex=(1e4+i).toString(),Object.assign(e,t),(document.querySelector("ion-app")||document.body).appendChild(e),new Promise(function(t){o.popoverResolves[e.id]=t})},t.prototype.viewDidLoad=function(t){var o=t.detail.popover,e=this.popoverResolves[o.id];e&&(e(o),delete this.popoverResolves[o.id])},t.prototype.willPresent=function(t){this.popovers.push(t.detail.popover)},t.prototype.willDismiss=function(t){var o=this.popovers.indexOf(t.detail.popover);o>-1&&this.popovers.splice(o,1)},t.prototype.escapeKeyUp=function(){var t=this.popovers[this.popovers.length-1];t&&t.dismiss()},t}();t["ion-popover"]=s,t["ion-popover-controller"]=d},["ion-popover",[["animationCtrl",4,0,1,"ion-animation-controller"],["component",1,1,1],["componentProps",1,1,1],["config",3,0,1,"config"],["cssClass",1,1,1],["el",7,0,1],["enableBackdropDismiss",1,1,3],["enterAnimation",1,1,1],["ev",1,1,1],["exitAnimation",1,1,1],["id",1,1,1],["positioned",5,0,1],["showBackdrop",1,1,3]],{theme:"popover"},[["ionPopoverDidDismiss"],["ionPopoverDidLoad"],["ionPopoverDidPresent"],["ionPopoverDidUnload"],["ionPopoverWillDismiss"],["ionPopoverWillPresent"]]],["ion-popover-controller",[["create",6,0,1]]]);;