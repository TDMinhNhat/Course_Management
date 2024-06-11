/**
 * Kendo UI v2024.2.514 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.popup.js";import"./kendo.fx.js";import"./kendo.icons.js";var __meta__={id:"floatingactionbutton",name:"Floating Action Button",category:"web",description:"The Floating Action Button represents the primary action of a screen and provides the ability to display related actions.",depends:["core","icons"]};!function(t,e){var i=window.kendo,n=i.ui.Widget,o=".kendoFloatingActionButton",s=i.ui,a=i.keys,l=i.support,r=t.extend,p=i.htmlEncode,d=".",c="id",u="left",f="right",m="bottom",_="aria-disabled",g="aria-expanded",h="role",v="click",b="expand",k="collapse",x="mouseenter"+o+" mouseleave"+o,C={widget:"k-fab",text:"k-fab-text",icon:"k-fab-icon",list:"k-fab-items",listTop:"k-fab-items-top",listBottom:"k-fab-items-bottom",listTextLeft:"k-text-left",listTextRight:"k-text-right",item:"k-fab-item",itemIcon:"k-fab-item-icon",itemText:"k-fab-item-text",popup:"k-fab-popup",popupTransparent:"k-popup-transparent",disabled:"k-disabled",hover:"k-hover",focus:"k-focus"},y=({icon:t})=>i.ui.icon({icon:p(t),iconClass:"k-fab-icon"}),O=({text:t})=>`<span class="k-fab-text">${p(t)}</span>`,P=({text:t,icon:e})=>(t?`<span class="k-fab-item-text" aria-hidden="true">${p(t)}</span>`:"")+(e?i.ui.icon({icon:p(e),iconClass:"k-fab-item-icon"}):""),w=n.extend({init:function(t,e){var o=this;n.fn.init.call(o,t,e),o._wrapper(),o._content(),o._appearance(),o._renderList(),o._initPopup(),o._aria(),o._attachEvents(),i.notify(o)},options:{name:"FloatingActionButton",icon:"",text:"",items:[],themeColor:"primary",fillMode:"solid",size:"medium",rounded:"full",align:"bottom end",alignOffset:{x:16,y:16},positionMode:"fixed",visible:!0,enable:!0,enabled:!0,_classNames:[]},events:[v,b,k],_offsetMap:{start:u,end:f,top:"top",bottom:m},_reversedOffsetMap:{start:f,end:u},_getAlignment:function(){var t=this.options.align.split(" ");return{vertical:t[0],horizontal:t[1]}},_getOffset:function(){var t=this,e=t.options,i=l.isRtl(t.element),n=t._getAlignment(),o=e.alignOffset,s=i?t._reversedOffsetMap:t._offsetMap,a=i?t._offsetMap:t._reversedOffsetMap,r={};return r[t._offsetMap[n.vertical]]=o.y,r[s[n.horizontal]]=o.x,r[a[n.horizontal]]="auto",r},_wrapper:function(){var t=this;t.wrapper=t.element.addClass(C.widget),t.wrapper.css(t._getOffset())},_content:function(){var t=this,e=t.options,i=e.text,n=e.icon;t.icon(n),t.text(""!==i?i:t.element.text())},_appearance:function(){var t=this,e=t.options;t._align=e.align,t._visible=e.visible,t._enabled=e.enabled,t._updateClassNames()},_updateClassNames:function(){var e=this,i=[C.widget],n=e.options._classNames,o=e._align,s=e._visible,a=e._enabled;t(e.element[0].classList).each((function(){var t=this+"";0===t.indexOf("k-")&&-1===n.indexOf(t)&&e.element.removeClass(t)})),"string"==typeof o&&2==o.split(" ").length&&i.push("k-"+o.replace(" ","-")),!1===s&&i.push("k-hidden"),!1===a&&i.push(C.disabled),e.element.addClass(i.join(" ")),e._applyCssClasses()},_aria:function(){var t=this,e=t.element,i=t._list,n=t._enabled;e.attr(_,!n),e.attr("aria-haspopup",!!i||null),e.attr(g,!i&&null),e.attr("aria-controls",i?i.attr(c):null),i&&(i.attr(h,"menu"),i.find(d+C.item).attr(h,"menuitem").attr("tabindex",-1))},_renderList:function(){var e=this,i=e.options.items,n=document.body,o=t("<ul>").addClass(C.list);i.length&&(e._list=o.appendTo(n),i.forEach(e._renderListItem.bind(e)),o.addClass(e._getListOrientation()))},_renderListItem:function(e){var n=this,o=i.template(P),s=e.template?i.template(e.template):o,a=t("<li>").addClass(C.item);a.addClass(n._getListItemsAlignment()),a.addClass(e.cssClass),a.attr("aria-label",e.title||e.label||""),n._enableListItem(a,e.enabled),a.append(s({icon:e.icon,text:e.label})),n._list.append(a)},_enableListItem:function(t,i){t&&i!==e&&(t.toggleClass(C.disabled,!i),i?t.removeAttr(_):t.attr(_,!0))},_getListOrientation:function(){return this._getAlignment().vertical===m?C.listTop:C.listBottom},_getListItemsAlignment:function(){var t=l.isRtl(this.element),e=this._getAlignment();return"start"===e.horizontal||"center"===e.horizontal?t?C.listTextRight:C.listTextLeft:t?C.listTextLeft:C.listTextRight},_getListItemOffset:function(){var t=this,e=t.element,i=t._list.find(d+C.itemIcon),n=0;return e.length&&i.length&&!t.options.text&&(n=e.outerWidth()/2-i.first().outerWidth()/2),n},_initPopup:function(){var t,e,n=this,o=n.element,a=n.options,l=n._list;l&&(e=l.wrap("<div>").parent(),t=n._getPopupPosition(),n._popup=new s.Popup(e,r({},a.popup,{anchor:o,appendTo:e.parent(),copyAnchorStyles:!1,autosize:!1,collision:"",position:t.position,origin:t.origin,animation:{open:{effects:i.parseEffects(s.Popup.fn.options.animation.open.effects,t.flipped)}},open:n._popupOpenHandler.bind(n),close:n._popupCloseHandler.bind(n),activate:n._popupExpandHandler.bind(n),deactivate:n._popupCollapseHandler.bind(n)})),n._popup.element.addClass([C.popup,C.popupTransparent].join(" ")),n._setPopupListId())},_setPopupListId:function(){var t=this.element.attr(c);t||(t=i.guid()),this._list.attr(c,t+"-list")},_getPopupPosition:function(){var t,e,i=this.options.align,n=l.isRtl(this.element),o=n?f:u,s=n?u:f,a=!1;switch(i){case"top end":case"middle end":t="bottom "+s,e="top "+s;break;case"bottom start":case"bottom center":t="top "+o,e="bottom "+o,a=!0;break;case"bottom end":t="top "+s,e="bottom "+s,a=!0;break;default:t="bottom "+o,e="top "+o}return{origin:t,position:e,flipped:a}},_popupOpenHandler:function(){var t=this._popup,e=this._getListItemOffset();this.element.attr(g,!0),t.element.css({paddingLeft:e}),t.element.css({paddingRight:e})},_popupCloseHandler:function(){this.element.attr(g,!1)},_popupExpandHandler:function(t){this.trigger(b)&&t.preventDefault(),this._popup.element.find(d+C.item).first().trigger("focus")},_popupCollapseHandler:function(t){this.trigger(k)&&t.preventDefault()},_attachEvents:function(){var t=this,e=t._list;t.element.on(v+o,t._click.bind(t)),e&&e.on(v+o,d+C.item,t._itemClick.bind(t)).on("keydown"+o,d+C.item,t._itemKeydown.bind(t)).on(x,d+C.item,t._itemHover.bind(t))},_click:function(t){var e=this,i=e.options,n=e._popup;e.trigger(v,{event:t})?t.preventDefault():(n||i.items.length)&&(n.visible()?n.close():n.open())},_itemClick:function(e){var n,o,s,a,l=this,r=t(e.target);r&&(n=r.closest(d+C.item)).length&&(o=l.options.items[n.index()],a={sender:l,target:n,item:o},(s=o.click&&i.isFunction(o.click)?o.click:null)&&(l.element.trigger("focus"),l._popup.close(),s.call(l,a)))},_itemKeydown:function(e){var i=this,n=t(e.target),o=e.keyCode,s=i.element,l=i._popup,r=i._getAlignment().vertical===m,p=n.hasClass(C.disabled),c=i._list.children(),u=c.index(e.target);if(n.is(d+C.item)){if(e.preventDefault(),o!==a.ENTER&&o!==a.SPACEBAR||p||i._itemClick(e),!r&&o===a.DOWN||r&&o===a.UP){if(u===c.length-1)return void c.first().trigger("focus");t(c[u+1]).trigger("focus")}if(!r&&o===a.UP||r&&o===a.DOWN){if(0===u)return void c.last().trigger("focus");t(c[u-1]).trigger("focus")}o!==a.ESC&&o!==a.TAB||(l.close(),s.trigger("focus")),o===a.HOME&&c.first().trigger("focus"),o===a.END&&c.last().trigger("focus")}},_itemHover:function(e){var n=t(i.eventTarget(e)||e.target).closest(d+C.item);n.hasClass(C.item)&&(n.siblings().removeClass(C.hover),n.toggleClass(C.hover))},text:function(n){var o=this,s=o.element,a=s.find(d+C.text),l=i.template(O);return 0===arguments.length||n===e?o._text:(o.options.text=o._text=i.htmlEncode(n),s.contents().filter((function(){return 3===this.nodeType})).remove(),!1===n||null===n||""===n?(o._text="",void a.remove()):void(a.length?a.text(n):a=t(l({text:n})).appendTo(s)))},icon:function(t){var n=this,o=n.element,s=o.find(d+C.icon),a=i.template(y);return 0===arguments.length||t===e?n._icon:(n.options.icon=n._icon=i.htmlEncode(t),!1===t||null===t||""===t?(n._icon="",void s.remove()):(s.remove(),void o.prepend(a({icon:t}))))},themeColor:function(t){if(t===e)return this.options.themeColor;this.setOptions({themeColor:t})},hide:function(){var t=this;t.options.visible=t._visible=!1,t._updateClassNames()},show:function(){var t=this;t.options.visible=t._visible=!0,t._updateClassNames()},enable:function(t){var i=this;t===e&&(t=!0),i.options.enabled=i._enabled=t,i._updateClassNames(),i.element.attr(_,!t)},setOptions:function(t){var e=this;n.fn.setOptions.call(e,t),e.element.removeAttr("style"),e.element.css(e._getOffset()),e._content(),e._appearance(),(t.align||t.items)&&(e.element.off(o),e.destroyPopup(),e._renderList(),e._initPopup(),e._attachEvents()),e._aria()},destroyPopup:function(){var t=this;t._popup&&(t._list.off(o),t._list.remove(),t._list=null,t._popup.destroy(),t._popup=null)},destroy:function(){var t=this;t.destroyPopup(),t.element.off(o),n.fn.destroy.call(t)}});i.cssProperties.registerPrefix("FloatingActionButton","k-fab-"),i.cssProperties.registerValues("FloatingActionButton",[{prop:"fillMode",values:["solid"]},{prop:"themeColor",values:["primary","secondary","tertiary","info","success","warning","error","dark","light","inverse"]},{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}]),s.plugin(w)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.floatingactionbutton.js.map