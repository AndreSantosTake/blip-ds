System.register(["./p-1f655fc9.system.js"],(function(e){"use strict";var i,t,n,a,s;return{setters:[function(e){i=e.r;t=e.c;n=e.h;a=e.H;s=e.g}],execute:function(){var l=".input__editable{display:block}.input__editable--static{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.input__editable--static:hover .input__editable--static__typo{border:1px solid #3f7de8}.input__editable--static:hover .input__editable--static__icon{color:#3f7de8}.input__editable--static__typo{border:1px solid transparent;margin:0;padding:8px;border-radius:8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:80%}.input__editable--static__icon{margin-left:8px;color:#8ca0b3}.input__editable--active{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.input__editable--active bds-input{min-width:120px;margin-right:4px}.input__editable--active bds-input.expanded{max-width:100%}.input__editable--active bds-input.fixed{max-width:140px}.input__editable--active bds-input.short::part(input){font-size:1rem;line-height:0px}.input__editable--active bds-input.standard::part(input){font-size:1.5rem;line-height:0px}.input__editable--active bds-input.tall::part(input){font-size:2.5rem;line-height:0px}.input__editable--active bds-input::part(input-container){padding:4px 4px 5px 12px}.input__editable--active bds-input::part(input__message){min-width:180px}.input__editable--active bds-icon{cursor:pointer}.input__editable--active__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:auto 0}.input__editable--active__icon--error{color:#ff4c4c}.input__editable--active__icon--error:hover{color:#a01c2c}.input__editable--active__icon--checkball{color:#3f7de8}.input__editable--active__icon--checkball:hover{color:#125ad5}.input__editable--active__icon--checkball--error{color:#8ca0b3}.input__editable--active__icon--checkball--error:hover{color:#8ca0b3}.input__editable--hidden{display:none}";var r=e("bds_input_editable",function(){function e(e){var n=this;i(this,e);this.bdsInputEditableSave=t(this,"bdsInputEditableSave",7);this.size="standard";this.expand=false;this.isEditing=false;this.isValid=true;this.inputName="";this.value="";this.minlength=0;this.errorMessage="";this.helperMessage="";this.danger=false;this.onInputChange=function(e){if(e.detail){if(e.detail.value.length<Number(n.minlength)){n.isValid=false}else{n.isValid=true}}};this.handleEditing=function(){n.toggleEditing()};this.toggleEditing=function(){n.isEditing=!n.isEditing};this.handleSaveText=function(){var e=n.el.shadowRoot.querySelector("bds-input").value;if(e.length>0&&e.length>=n.minlength&&!n.danger){n.bdsInputEditableSave.emit({value:e,oldValue:n.value});n.value=e;n.toggleEditing()}};this.getExpand=function(){if(n.expand){return"expanded"}else{return"fixed"}}}e.prototype.getFontSizeClass=function(){if(this.size=="short"){return"fs-16"}else if(this.size=="standard"){return"fs-24"}else if(this.size=="tall"){return"fs-40"}else{return"fs-24"}};e.prototype.render=function(){var e;var i=this.getFontSizeClass();var t=this.getExpand();return n(a,null,n("div",{class:"input__editable"},n("div",{class:{"input__editable--static":true,"input__editable--hidden":this.isEditing},onClick:this.handleEditing},n("bds-typo",{tag:"span",part:"input__editable--static__typo",class:"input__editable--static__typo",variant:i},this.value),n("bds-icon",{key:"edit-icon",class:"input__editable--static__icon",name:"edit"})),n("div",{class:{"input__editable--active":true,"input__editable--hidden":!this.isEditing}},n("bds-input",{class:(e={},e[t]=true,e[this.size]=true,e),type:"text","input-name":this.inputName,value:this.value,minlength:this.minlength,minlengthErrorMessage:this.minlengthErrorMessage,maxlength:this.maxlength,required:true,"required-error-message":this.requiredErrorMessage,"error-message":this.errorMessage,onBdsChange:this.onInputChange,danger:this.danger,helperMessage:this.helperMessage}),n("div",{class:"input__editable--active__icon"},n("bds-icon",{key:"error-icon",class:"input__editable--active__icon--error",theme:"solid",name:"error",onClick:this.handleEditing}),n("bds-icon",{key:"checkball-icon",class:{"input__editable--active__icon--checkball":true,"input__editable--active__icon--checkball--error":!this.isValid},theme:"solid",name:"checkball",onClick:this.handleSaveText})))))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return e}());r.style=l}}}));