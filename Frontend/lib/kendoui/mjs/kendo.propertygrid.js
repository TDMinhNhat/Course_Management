/**
 * Kendo UI v2024.2.514 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.menu.js";import"./kendo.excel.js";import"./kendo.progressbar.js";import"./kendo.treelist.js";import"./kendo.dialog.js";!function(e,t){const o=window.kendo,i=o.ui.treelist.ContextMenu,n=e.extend;let r=i.extend({init:function(e,t){i.fn.init.call(this,e,t)},defaultItems:{separator:{name:"separator",separator:!0},copy:{name:"copy",text:"Copy",icon:"copy",command:"CopyCommand",softRules:"windowHasSelection",options:"copy:selection"},copyName:{name:"copyName",text:"Copy Name",icon:"file-txt",command:"CopyCommand",options:"copy:name"},copyDeclaration:{name:"copyDeclatarion",text:"Copy Declaration",icon:"file-data",command:"CopyCommand",options:"copy:declaration"},resize:{name:"resize",text:"Resize Column",icon:"arrows-left-right",rules:"isResizable",command:"ResizeColumnCommand",softRules:"isNotGroupColumn"},reset:{name:"reset",text:"Reset",icon:"arrow-rotate-ccw",command:"ResetCommand",rules:"isEditable",softRules:"isDirty;isNotInEditMode"},expandItem:{name:"expandItem",text:"Expand Item",icon:"folder-open",softRules:"isExpandable",command:"ToggleItemCommand",options:"expand:true"},collapseItem:{name:"collapseItem",text:"Collapse Item",icon:"folder",softRules:"isCollapsible",command:"ToggleItemCommand",options:"expand:false"}}});o.ui.propertygrid=o.ui.propertygrid||{},n(o.ui.propertygrid,{ContextMenu:r})}(window.kendo.jQuery),function(e,t){let o=window.kendo,i=e.extend,n=o.Class,r=o.keys,a=n.extend({init:function(e){this.options=e,this.propertyGrid=e.propertyGrid}}),l=a.extend({exec:function(){const e=this,t=e.options,o=e.propertyGrid,i=e.options.target.closest("tr"),n=o.dataItem(i);if("selection"==t.copy){let e=window.getSelection().getRangeAt(0).toString();navigator.clipboard.writeText(e)}else if("name"==t.copy)navigator.clipboard.writeText(n.field);else if("declaration"==t.copy){let t=e.propertyGrid._objectFromNodes(n),o=[n.field,JSON.stringify(t[n.field]),n.description].filter((e=>undefined!==e)).join("\t");navigator.clipboard.writeText(o)}}}),s=a.extend({exec:function(){let e=this,t=e.propertyGrid,o=e.options.target.closest("tr"),i=t.dataItem(o);t.dataSource.cancelChanges(i),t.trigger("cancel",{type:"cancel",model:i,container:e.options.target}),t._render()}}),d=a.extend({_actionButtonsTemplate:function({apply:e,cancel:t,insertButtonIcon:i,cancelButtonIcon:n}){return'<div class="k-actions k-actions-start k-actions-horizontal k-window-buttons">'+o.html.renderButton(`<button class="k-dialog-apply">${e}</button>`,{themeColor:"primary",icon:i})+o.html.renderButton(`<button class="k-dialog-close">${t}</button>`,{icon:n})+"</div>"},exec:function(){let t,o,i=this,n=i.propertyGrid,a=i.options.target.index(),l=n.grouped?a-1:a,s=`tr:not(.k-table-group-row):first > td:nth-child(${a+1})`,d=n.table.find(s).outerWidth(),c={title:"Resize Column",visible:!1,resizable:!0,minWidth:350},p=n.table.width();function u(e){let o,i=t.wrapper.find(".k-form").data("kendoForm").options.formData.columnsize,r=t.wrapper.find("#columnsize").data("kendoNumericTextBox").value();i!=r?(i>r?(o=i-r,n.table.width(p-o)):(o=r-i,n.table.width(p+o)),n.columns[l].width=r,n.table.children("colgroup").find("col").eq(a).width(r),n.trigger("columnResize",{column:n.columns[l],oldWidth:i,newWidth:r}),m(e)):m(e)}function m(e){e.preventDefault(),o.destroy(),t.destroy()}!function(t){const o=e=>`tr:not(.k-table-group-row):first > td:nth-child(${e+1})`,i=t.table.children("colgroup").find("col").length;let n=[];for(let e=0;e<i;e++)n.push(t.table.find(o(e)).outerWidth());t.table.children("colgroup").find("col").each(((t,o)=>{e(o).width(n[t])}))}(i.propertyGrid),n.table.width(p),c.close=m,t=e("<div/>").appendTo(document.body).kendoWindow(c).data("kendoWindow"),o=i._createForm(t,d),t.element.after(e(i._actionButtonsTemplate({apply:"Apply",cancel:"Cancel",insertButtonIcon:"check",cancelButtonIcon:"cancel-outline"}))),t.wrapper.find(".k-dialog-apply").on("click",u).end().find(".k-dialog-close").on("click",m).end().find(".k-form-field input").on("keydown",(function(e){e.keyCode==r.ENTER?u(e):e.keyCode==r.ESC&&m(e)})).end(),t.center().open()},_createForm:function(t,o){return e("<div/>").appendTo(t.element).kendoForm({formData:{columnsize:o},validation:{validateOnBlur:!1,validaitonSummary:!1},renderButtons:!1,items:[{field:"columnsize",label:"Set column Size",editor:"NumericTextBox",editorOptions:{min:0}}]}).data("kendoForm")}}),c=a.extend({exec:function(){let e=this,t=e.propertyGrid,o=e.options.target;"true"===e.options.expand?t.expand(o):t.collapse(o)}}),p=a.extend({exec:function(){let e=this.propertyGrid,t=e.grouped;e.grouped=!t,e.grouped||e.wrapper.find("tr:not(.k-details-box)").removeClass("k-hidden"),e._refreshLayout(),e._updateDetails()}}),u=a.extend({exec:function(){let e=this.propertyGrid,t=e.visibleDetails;e.visibleDetails=!t,e.visible||e.table.find("tr.k-details-box").toggleClass("k-hidden")}}),m=a.extend({exec:function(){this.propertyGrid.saveAsExcel()}}),h=a.extend({exec:function(){this.propertyGrid.saveAsPDF()}});o.ui.propertygrid=o.ui.propertygrid||{},i(o.ui.propertygrid,{PropertyGridCommand:a,commands:{ResetCommand:s,CopyCommand:l,ResizeColumnCommand:d,ToggleItemCommand:c,ToggleGroupLayout:p,ToggleDetails:u,ExcelExport:m,PDFExport:h}})}(window.kendo.jQuery);let __meta__={id:"propertygrid",name:"PropertyGrid",category:"web",description:"The PropertyGrid widget displays objects as hierarchical structure and provides means to edit the properties and attributes of objects.",depends:["excel","menu","treelist"]};!function(e,t){const o=window.kendo,i=o.ui,n=".kendoPropertyGrid",r=e.extend,a=o.dom,l=a.element,s=a.html,d=a.text,c=e.extend({F10:121},o.keys),p=i.Editable,u=i.TreeList,m=Array.isArray,h=e.isPlainObject,f="change",g="expand",b="collapse",y="groupExpand",x="groupCollapse",_="a[class*='-i-caret-alt-down']",w="k-grouping-row",v="tr",C="td",k=["copy","copyName","copyDeclaration","separator","reset","separator","resize","separator","expandItem","collapseItem","separator"],T={group:{name:"group",type:"button",text:"Group Items",togglable:!0,showText:"overflow",icon:"categorize",commandName:"ToggleGroupLayout",attributes:{title:"Group Items"},overflow:"never"},details:{name:"details",type:"button",text:"Toggle Info box",togglable:!0,icon:"info-circle",commandName:"ToggleDetails",showText:"overflow",attributes:{title:"Toggle Info box"},overflow:"never"},sort:{name:"sort",component:"DropDownList",componentOptions:{commandOn:f,dataTextField:"text",dataValueField:"value",dataSource:[{text:"Default Sort",value:"none"},{text:"Sort A-Z",value:"asc"},{text:"Sort Z-A",value:"desc"}]},attributes:{class:"k-property-grid-sort",title:"Sort"},overflow:"never"},search:{name:"search",component:"TextBox",componentOptions:{prefixOptions:{icon:"search"},placeholder:"Search..."},attributes:{class:"k-grid-search"},overflow:"never"},separator:{name:"separator",type:"separator"},spacer:{name:"spacer",type:"spacer"},excel:{name:"excel",type:"button",text:"Export to Excel",showText:!1,icon:"file-excel",commandName:"ExcelExport",overflow:"auto"},pdf:{name:"excel",type:"button",text:"Export to PDF",showText:!1,icon:"file-pdf",commandName:"PDFExport",overflow:"auto"}};function I(e){return null==e}function D(e){return"object"!=o.type(e)&&"function"!=o.type(e)}let E=o.data.TreeListDataSource.extend({groupedItemsTree:function(e){let t=this._childrenMap(this.view())[this._defaultParentId()]||[];return new o.data.Query(t).group({field:e}).toArray()},filterGroupedItemsTree:function(e,t){let i=this,n=this.sort()||{},r=e||{filters:[],logic:"or"},a=this._childrenMap(this.data())[this._defaultParentId()]||[],l=new o.data.Query(a).sort(n).group({field:t}).toArray(),s=function(e,t){let r=[];for(let o=0;o<t.length;o++)t[o].hasChildren&&s(e,i.childNodes(t[o])).length>0&&r.push(t[o]);return 0!=r.length?r:new o.data.Query(t).sort(n).filter(e).toArray()},d=[];return l.forEach((function(e){e.items&&(e.items=s(r,e.items)),d.push(e)})),d}});const S=o.ui.treelist.editor.extend({createEditable:function(){let e=this.options;this.fields[0].editor=e.model.editor,this.fields[0].editorOptions={...e.model.editorOptions},this.editable=new p(this.wrapper,{fields:this.fields,target:e.target,clearContainer:e.clearContainer,model:this.model,change:e.change})},destroy:function(){let e=this;e.editable.destroy(),e.editable.element.off().empty().removeAttr(o.attr("role")),e.model=e.wrapper=e.element=e.columns=e.editable=null}}),R=u.extend({init:function(e,t){const i=this;i._processOptions(t),i.options=r(!0,{},i.options,t),i._processedModel=i._processModel(),i._createDataSource(),u.fn.init.call(i,e,i.options),i._wrapper(),i._detailsBox(),i._groupable(),o.notify(i)},options:{name:"PropertyGrid",model:{},items:[],columns:[{field:"field"},{field:"value",editable:function(e){return D(e.value)}}],hasHeader:!1,groupable:!0,resizable:!0,contextMenu:!1,sortable:!0,selectable:!0,scrollable:!0,showDetails:!0,editable:"incell",size:"medium",defaultTools:[T.search,T.sort,T.group,T.details],messages:{defaultGroupName:"Other"}},events:["beforeEdit","edit",f,g,b,"columnResize",y,x,"cellClose","save","cancel","pdfExport"],defaultEditors:{string:"TextBox",date:"DatePicker",number:"NumericTextBox",boolean:"CheckBox"},_groupContentTemplate:({groupName:t,action:i,icon:n})=>`<p class="k-reset">${o.ui.icon(e('<a href="#" tabindex="-1" aria-label='+i+"></a>"),n)}${t}</p>`,_detailsTemplate:({description:e})=>`<span>${e||"&nbsp;"}</span>`,_setEditable:function(e){this.options.editable=e},_processOptions:function(e){const t=this;"boolean"!==o.type(e.editMode)||e.editMode?t._setEditable("incell"):t._setEditable(!1),I(e.toolbar)&&(e.toolbar=t.options.defaultTools),t._extendColumnOptions(e)},_extendColumnOptions:function(e){const t=this;e.columns&&(t.options.columns[0]=r(!0,e.columns.fieldColumn,t.options.columns[0]),t.options.columns[1]=r(!0,e.columns.valueColumn,t.options.columns[1]),delete e.columns)},_processSettings:function(e,t){const o=this;t.forEach((t=>{e[t.field]&&(r(e[t.field],t),e[t.field].items&&o._processSettings(e[t.field].value,e[t.field].items))}))},_processModel:function(){const e=this,t=e.options.model,o=e.options;let i=e._flatten(t);return e._setDefaults(i),e._processSettings(i,o.items),n=i,Object.entries(n).map((e=>e[1]));var n},_createDataSource:function(){const e=new E({data:this._processedModel,serverGrouping:!1,schema:{model:{id:"id",parentId:"parentId",expanded:!0,fields:{field:{editable:!1},value:{editable:!0}}}}});this.options.dataSource=e},_flatten:function(e){let t=1;function i(e,t,o,i,n){I(n)?o.forEach((o=>{e[`${t}.${o}`]=i[o]})):o.forEach((o=>{e[`${t}.${n}.${o}`]=i[o],e[`${t}.${n}.${o}`].parentId=e[`${t}.${n}`].id}))}function n(e,r){const a={};return Object.keys(e||{}).forEach((l=>{if(I(e[l]))a[l]={id:t++,parentId:r,propType:typeof e[l],field:l,value:e[l]};else if("object"==typeof(s=e[l])&&m(s))!function(e,o,r,a){const l=o[r];e[r]={id:t++,parentId:a,propType:"Array",field:r,value:l};for(let a=0;a<l.length;a++){const s="object"==typeof l[a]?n(l[a],e[r].id):l[a];e[`${r}.${a}`]={id:t++,parentId:e[r].id,propType:typeof o[r],field:`${r}[${a}]`,value:s},"object"==typeof l[a]&&i(e,r,Object.keys(s),s,a)}}(a,e,l,r);else if(function(e){return"object"==typeof e&&!o.isDate(e)}(e[l])){let o=t++;const s=n(e[l],o),d=Object.keys(s);a[l]={id:o,parentId:r,propType:typeof e[l],field:l,value:s},i(a,l,d,s)}else{let i=o.parseDate(e[l].toString());a[l]={id:t++,parentId:r,propType:null!=i?typeof i:typeof e[l],field:l,value:null!=i?i:e[l]}}var s})),a}return n(e,null)},_setDefaults:function(e){const t=this;Object.keys(e).forEach((o=>{t.options.groupable&&!e[o].group&&(e[o].group=t.options.messages.defaultGroupName),t._setDefaultEditor(e[o])}))},_setDefaultEditor:function(e){const t=this;switch(o.type(e.value)){case"date":e.editor=t.defaultEditors.date;break;case"boolean":e.editor=t.defaultEditors.boolean;break;case"number":e.editor=t.defaultEditors.number;break;default:e.editor=t.defaultEditors.string}},_createIncellEditor:function(e,t){const o=this;let i=r({},t.columns[0]);return t.model.fields.value.validation=t.model.validation?t.model.validation.toJSON():{},delete i.parentColumn,new S(e,r({},{fieldRenderer:o._cellContent.bind(o),appendTo:o.wrapper,clearContainer:!1,target:o,columns:[i],model:t.model,change:t.change}))},_createDirtyTemplate:function(e){let t=this._customTemplateSettings();return o.template((function(t){return'<span class="k-dirty"></span>'+o.template(e.template)(e)}),t).bind({columnTemplate:e.template})},_cellContent:function(e,t){const i=this,n=i._isIncellEditable(),r="value"==e.field;let a,l,c;return r&&t.template?(c=t.dirty?i._createDirtyTemplate(t):o.template(t.template),a=c(t)):e.field?(a=t.get(e.field),l=n?e.dirtyIndicatorTemplate(t):"",I(a)?a=l:(t.format&&(a=o.format(t.format,a)),a=l+a)):I(a)&&(a=""),t.template?s(a):n?D(t.value)&&r?i._editableCellContent(a):s(a):d(a)},_editableCellContent:function(e){let t=l("b"),o=s(e);return t.children.push(o),t},_generateGroupRow:function(e){let t=o.template(this._groupContentTemplate)({groupName:e.value,action:e.visible?b:g,icon:e.visible?"caret-alt-down":"caret-alt-right"}),i=l(C,{className:"k-table-td",class:"k-table-td",colSpan:"3",role:"gridcell","aria-expanded":e.visible,visible:!0},[o.dom.html(t)]);return l(v,{className:"k-table-group-row k-grouping-row k-table-row",role:"row","data-uid":e.uid},[i])},_generateDetailsBox:function(){let e=l(C,{className:"k-table-td",class:"k-table-td",colSpan:this.grouped?3:2,role:"gridcell",visible:!0},[o.dom.html("<span>&nbsp;</span>")]);return l(v,{className:"k-details-box k-bottom k-sticky k-footer-template k-table-row "+(this.visibleDetails?"":"k-hidden"),role:"row"},[e])},_renderRows:function(e,t,o,i,n,r,a){const l=this;let s=i.length?i:l._selectedRowUid,d=[];l.grouped?(0===l.table.find(">colgroup>col.k-group-col").length&&l.table.find(">colgroup").prepend('<col class="k-group-col">'),l._groupedData.forEach((t=>{let i=l._generateGroupRow(t);d.push(i),d=d.concat(l._trs({columns:o,editedColumn:e.editedColumn,editedColumnIndex:e.editedColumnIndex,aggregates:e.aggregates,selected:s,data:t.items,childrenMap:n,viewChildrenMap:r,hasFooterTemplate:a,visible:t.visible,level:0}))}))):(l.table.find(">colgroup>col.k-group-col").remove(),d=d.concat(this._trs({columns:o,editedColumn:e.editedColumn,editedColumnIndex:e.editedColumnIndex,aggregates:e.aggregates,selected:s,data:t,childrenMap:n,viewChildrenMap:r,hasFooterTemplate:a,visible:!0,level:0}))),l.options.showDetails&&d.push(l._generateDetailsBox()),l._contentTree.render(d)},_generateRowOptions:function(e,t,o,i,n,r){const a=this;return{model:e,attr:t,level:o?a._renderedModelLevel(e,i):n,editedColumn:i.editedColumn,editedColumnIndex:i.editedColumnIndex,hasChildren:r,visible:i.visible,isAlt:this._absoluteIndex%2==0,grouped:a.options.groupable&&a.grouped}},_renderRow:function(e,t,o){let i=this._tds(e,t,o);if(e.grouped){let e=l(C,{class:"k-table-td k-group-cell",className:"k-table-td k-group-cell"});i.children.splice(0,0,e)}return i},editCell:function(t){const o=this;let i;t=e(t),i=o.grouped?o.cellIndex(t)-1:o.cellIndex(t);let n=o.columns[i],r=o.dataItem(t);o._isIncellEditable()&&r&&function(e,t){return!(!(e&&t&&e.field)||e.selectable||e.command||e.draggable||e.editable&&!e.editable(t))&&e.field&&t.editable&&t.editable(e.field)}(n,r)&&o._editCell(t,n,r,i)},_wrapper:function(){this.element.css("width",this.options.width),this.wrapper.addClass("k-property-grid")},_toolbar:function(){const e=this,t=e.options;let i=t.toolbar,n=this.toolbar;if(i)if(Array.isArray(i)){let o=e._processToolbarItems(i);o=e._verifyItems(o),n.kendoToolBar({size:"medium",resizable:!0,navigateOnTab:!t.navigatable,items:o}),n.find(".k-grid-search .k-input-inner").attr({placeholder:t.messages.commands.search,title:t.messages.commands.search}),e._attachToolbarHandlers()}else n.append(o.template(i)({}))},_attachToolbarHandlers:function(){const e=this;let t=e.toolbar.getKendoToolBar(),o=t.element.find('[data-command="sort"] input');t.bind("toggle",e._toolbarClick.bind(e)),t.bind("click",e._toolbarClick.bind(e)),o.length>0&&o.getKendoDropDownList().bind("change",e._sortItems.bind(e))},_verifyItems:function(e){const t=this;return t.options.groupable&&t.options.items.some((e=>e.hasOwnProperty("group")))||(e=e.filter((e=>"group"!=e.name))),t.options.showDetails&&t.options.selectable||!(e.findIndex((e=>"details"==e.name))>0)||(e=e.filter((e=>"details"!=e.name))),e},_getCommandType:function(e){return e.type?e.type:e.template?null:"button"},_processToolbarItems:function(e){const t=this,o=t.options.messages.commands;let i=[];return e.map((e=>{let n=(h(e)?e.name||"":e).toLowerCase(),a=o[n];if(!(n||h(e)&&e.template))throw new Error("Commands should have name specified");(e=r({},T[n],{name:n,text:a||(T[n]||{}).text,type:t._getCommandType(T[n]||{})},e)).imageClass&&(e.spriteCssClass=e.imageClass,e.iconClass=e.imageClass),e.attributes||(e.attributes={}),e.attributes["data-command"]=e.commandName||n,(e.menuButtons||e.buttons)&&delete e.name,e.click=e=>{let o=e.event||e.originalEvent;o&&(o.preventDefault(),o.stopPropagation()),t._commandClick({currentTarget:e.target})},e.className&&(e.attributes||(e.attributes={}),e.attributes.class=e.className),e.attributes.title=a||e.attributes.title,i.push(e)})),i},_toolbarClick:function(t){let o=e(t.target).data("command"),n=e(t.target).data("options");e(t.target).val()&&(n=r({},n,{value:e(t.target).val()})),o&&i.propertygrid.commands[o]&&this._action({command:o,options:n})},_sortItems:function(e){const t=this,o=t.dataSource,i=e.sender.value();let n="none"===i?{}:{field:"field",dir:i};o.sort(n),t._groupedData=o.filterGroupedItemsTree(o.filter(),"group").map((e=>({...e,visible:t._groupedData.filter((t=>t.value==e.value))[0].visible,uid:t._groupedData.filter((t=>t.value==e.value))[0].uid}))),t.grouped&&t.refresh()},_initContextMenu:function(){const e=this,t=e.options;if(!t.contextMenu)return;let o=h(t.contextMenu)&&m(t.contextMenu.body)?{items:t.contextMenu.body}:{items:k},n=h(t.contextMenu)?t.contextMenu:{};o=r({},{messages:t.messages,target:e.tbody,filter:".k-table-row:not(.k-grouping-row,.k-details-box) > .k-table-td",action:e._action.bind(e),states:e._buildStates()},n,o),e.tbodyContextMenu=new i.propertygrid.ContextMenu("<ul></ul>",o)},_buildStates:function(){return{isResizable:this.options.resizable,isEditable:this.options.editable,windowHasSelection:()=>void 0!==window.getSelection&&0!=window.getSelection().rangeCount&&""!=window.getSelection().getRangeAt(0).toString(),isDirty:e=>this.dataItem(e).dirty,isNotInEditMode:e=>!e.closest("td").hasClass("k-edit-cell"),isNotGroupColumn:e=>!e.closest("td").hasClass("k-group-cell"),isExpandable:e=>{let t=this.dataItem(e);return t&&t.hasChildren&&!t.expanded},isCollapsible:e=>{let t=this.dataItem(e);return t&&t.hasChildren&&t.expanded}}},_action:function(e){let t=e.command,o=r({propertyGrid:this},e.options);return new i.propertygrid.commands[t](o).exec()},_objectFromNodes:function(e){const t=this,o=Object.create(null),i=t.dataSource;return(e=m(e)?e:[e]).forEach((e=>{"Array"==e.propType?(o[e.field]=[],i.childNodes(e).forEach((n=>{o[e.field].push(n.hasChildren?t._objectFromNodes(i.childNodes(n)):n.value)}))):o[e.field]=e.hasChildren?t._objectFromNodes(i.childNodes(e)):e.value})),o},_groupable:function(){const t=this;t._groupedData=t.dataSource.groupedItemsTree("group").map((e=>({...e,visible:!0,uid:o.guid()}))),t._groupableClickHandler=function(o){let i=e(this),n=i.closest(v),r=t._groupedData.filter((e=>e.value===n.text()))[0];r.visible=!r.visible,i.is(_)?t.trigger(x,{group:r.items,element:n})||t.refresh():t.trigger(y,{group:r.items,element:n})||t.refresh(),o.preventDefault(),o.stopPropagation()},t.table.on("click"+n,".k-grouping-row a[class*='-i-caret-alt-right'], .k-grouping-row "+_,t._groupableClickHandler).on("keydown"+n,t._groupRowKeyDown.bind(t))},_groupRowKeyDown:function(e){const t=this,i=t.current();let n=!1;t.options.navigatable&&(e.keyCode==c.ENTER&&(o.focusElement(t.table),t._setCurrent(t._findCurrentCell()),n=!0),e.keyCode!=c.LEFT&&e.keyCode!=c.RIGHT||!e.altKey||(n=this._handleGroupRowExpandCollapse(i,e.keyCode)),n&&(e.preventDefault(),e.stopPropagation()))},_handleGroupRowExpandCollapse:function(e,t){const o=this,i=e.parent();if(i.is("."+w)){let e=o._groupedData.filter((e=>e.value===i.text()))[0].visible;if(e&&t==c.LEFT||!e&&t==c.RIGHT)return o._toggleGroup(i),!0}},_toggleGroup:function(e){let t=this._groupedData.filter((t=>t.value===e.text()))[0];t.visible=!t.visible,this.refresh()},_search:function(e){let t=this,o=e.currentTarget;clearTimeout(t._searchTimeOut),t._searchTimeOut=setTimeout((function(){t._searchTimeOut=null;let e=t.options,i=e.search?e.search.fields:["field","value"],n={filters:[],logic:"or"},r=o.value;if(r)for(let e=0;e<i.length;e++)n.filters.push({field:i[e],operator:"contains",value:r});t._groupedData=t.dataSource.filterGroupedItemsTree(n,"group").map((e=>({...e,visible:!0,uid:t._groupedData.filter((t=>t.value==e.value))[0].uid}))),t.dataSource.filter(n),t._refreshLayout(),t._updateDetails()}),300)},_refreshLayout:function(){const t=this;t._selectedRowUid=t.select().removeClass("k-selected").map((function(t,o){return e(o).attr("data-uid")})),t._contentTree.render([]),t._render()},_detailsBox:function(){const e=this,t=e.options;e._detailsTemplate=t.detailsTemplate?t.detailsTemplate:e._detailsTemplate,t.showDetails&&(e.detailsContainer=e.wrapper.find("table > tr.k-details-box > td"),e.bind(f,e._updateDetails))},_updateDetails:function(){const e=this;if(!e.options.selectable)return;let t=e.dataItem(e.select());t?e.table.find("tr.k-details-box > td").html(o.template(e._detailsTemplate)(t)):e._clearDetails()},_clearDetails:function(){this.table.find("tr.k-details-box > td").html("<span>&nbsp;</span>")},model:function(e,t){const o=this;if(!e)return o._objectFromNodes(o.dataSource.rootNodes());o.options.model=e,t&&(o.options.items=t),o._processedModel=o._processModel(),o.setDataSource(new E({data:o._processedModel,serverGrouping:!1,schema:{model:{id:"id",parentId:"parentId",expanded:!0,fields:{field:{editable:!1},value:{editable:!0}}}}}))},selectItem:function(e){return this.select(e)},toggleItem:function(e){const t=this;t.dataItem(e).expanded?t.collapse(e):t.expand(e)},toggleGroup:function(t){e(t).is("."+w)&&this._toggleGroup(t)},toggleDetails:function(){this.options.showDetails&&this._action({command:"ToggleDetails"})},edit:function(e){this.editCell(e)},saveState:function(){this.saveChanges()},resetState:function(){this.cancelChanges()},setOptions:function(e){const t=this;let i=t.getOptions(),n=t.wrapper,r=t._events,a=t.element;delete i.model,o.deepExtend(i,e),t.model=t.options.model=e.model||{},t.destroy(),n[0]!==a[0]&&(n.before(a),n.remove()),a.empty(),t.init(a,i,r),t._setEvents(i)},destroy:function(){this.tbodyContextMenu&&(this.tbodyContextMenu.destroy(),this.tbodyContextMenu=null),u.fn.destroy.call(this)}});let G=o.excel.ExcelExporter.extend({init:function(t){t.columns=this._trimColumns(t.columns||[]),this.allColumns=e.map(this._leafColumns(t.columns||[]),this._prepareColumn),this.columns=this._visibleColumns(this.allColumns),this.widget=t.widget,this.options=t,this.data=t.data||[],this.aggregates=t.aggregates||{},this.groups=[].concat(t.groups||[]),this.hasGroups=this.groups.length>0,this.hierarchy=t.hierarchy,this.hasGroupHeaderColumn=this.columns.some((function(e){return e.groupHeaderColumnTemplate})),this.collapsible=this.options.collapsible},_recursiveRows:function(e,t){let o=this,i=o.widget.dataSource.level(t);if(e.push(...o._dataRow(t,i+1,this._depth())),t.hasChildren){let i=o.widget.dataSource.childNodes(t);for(let t=0;t<i.length;t++){let o=i[t];this._recursiveRows(e,o)}}},_buildGroupedDataRows:function(e,t,o){for(let i=0;i<e.length;i++){let n=e[i];t.push({type:"group-header",cells:[{value:n.value,colSpan:o,background:"#dfdfdf",color:"#333"}],level:null});for(let e=0;e<n.items.length;e++){let o=n.items[e];this._recursiveRows(t,o)}}},_buildDataRows:function(e,t,o){let i,n=this,r=this._depth(),a=this.hierarchy.itemLevel,l=this.hierarchy.itemId,s=this._hasFooterTemplate(),d=0;for(let c=0;c<e.length;c++){let p=e[c],u=a(p,c);s&&(u>d?o.push({id:i,level:d}):u<d&&t.push(...n._hierarchyFooterRows(o,u,r)),d=u,i=l(p,c)),t.push(...n._dataRow(p,u+1,r))}if(s){t.push(...this._hierarchyFooterRows(o,0,r));let i=e.length?this.aggregates[e[0].parentId]:{};t.push(this._hierarchyFooter(i,0,r))}},_hierarchyRows:function(){let e=this,t=this._depth(),o=this.data,i=[],n=[];if(this._hasFooterTemplate()||(this.collapsible=!1),e.widget.grouped){o=e.widget.dataSource.groupedItemsTree("group");let n=t+e.widget.columns.length;e._buildGroupedDataRows(o,i,n)}else e._buildDataRows(o,i,n);return this._prependHeaderRows(i),i}});o.PropertyGridExcelExporter=o.ExcelExporter.extend({workbook:function(){return e.Deferred(function(e){this.dataSource.fetch().then(function(){let t=new G(r({},this.options,this._hierarchy(),{data:this.dataSource.view(),groups:this.dataSource.group(),aggregates:this.dataSource.aggregates()})).workbook();e.resolve(t,this.dataSource.view())}.bind(this))}.bind(this)).promise()}});let N={extend:function(t){t.events.push("excelExport"),t.options.excel=e.extend(t.options.excel,this.options),t.saveAsExcel=this.saveAsExcel},options:{proxyURL:"",filterable:!1,fileName:"Export.xlsx"},saveAsExcel:function(){let e=this.options.excel||{},t=new o.PropertyGridExcelExporter({widget:this,columns:this.columns,dataSource:this.dataSource,data:this.dataSource.data(),allPages:e.allPages,filterable:e.filterable,hierarchy:e.hierarchy,collapsible:e.collapsible});t.workbook().then(function(i,n){if(!this.trigger("excelExport",{workbook:i,data:n})){let n=new o.ooxml.Workbook(i);n.options||(n.options={}),n.options.skipCustomHeight=!0,n.toDataURLAsync().then((function(n){o.saveAs({dataURI:n,fileName:i.fileName||e.fileName,proxyURL:e.proxyURL,forceProxy:e.forceProxy}),t._restoreExpandedState()}))}}.bind(this))}};o.PropertyGridExcelMixin=N,o.ooxml&&o.ooxml.Workbook&&N.extend(R.prototype),o.ui.propertygrid=o.ui.propertygrid||{},r(o.ui.propertygrid,{defaultBodyContextMenu:k}),o.cssProperties.propertyDictionary.PropertyGrid=o.cssProperties.propertyDictionary.TreeList,o.cssProperties.registerPrefix("PropertyGrid","k-property-grid-"),o.ui.plugin(R)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.propertygrid.js.map