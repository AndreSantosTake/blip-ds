var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{l(n.next(t))}catch(e){o(e)}}function s(t){try{l(n["throw"](t))}catch(e){o(e)}}function l(t){t.done?i(t.value):r(t.value).then(a,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(a[0]===6&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}if(o[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(s){a=[6,s];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-1f655fc9.system.js","./p-5e5d57d0.system.js"],(function(t){"use strict";var e,i,n,r,o,a;return{setters:[function(t){e=t.r;i=t.h;n=t.c;r=t.H},function(t){o=t.e;a=t.n}],execute:function(){var s;(function(t){t["Default"]="default";t["Warning"]="warning";t["Delete"]="delete"})(s||(s={}));var l=".counter-text{background:#f8fbfb;color:#8ca0b3;-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:#3f7de8;color:#f3f6fa}.counter-text--warning{background:#f6a721;color:#f3f6fa}.counter-text--delete{background:#ff4c4c;color:#f3f6fa}";var u=t("bds_counter_text",function(){function t(t){e(this,t);this.active=false;this.warning={max:20,min:2};this.delete={max:1,min:0}}t.prototype.getState=function(){var t=this.getActualLength();if(t>=this.warning.min&&t<=this.warning.max){return s.Warning}if(t<=this.delete.max){return s.Delete}return s.Default};t.prototype.getActualLength=function(){return this.max-this.length};t.prototype.render=function(){var t;var e=this.getState();var n=this.getActualLength();return i("div",{class:(t={"counter-text":true,"counter-text--active":this.active},t["counter-text--"+e]=true,t)},i("bds-typo",{variant:"fs-10"},n))};return t}());u.style=l;var p=':host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}:host input{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder{color:#b9cbd3;opacity:1}:host input::-moz-placeholder{color:#b9cbd3;opacity:1}:host input:-ms-input-placeholder{color:#b9cbd3;opacity:1}:host input::-ms-input-placeholder{color:#b9cbd3;opacity:1}:host input::placeholder{color:#b9cbd3;opacity:1}:host input::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:#ffffff}.input--state-primary{border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary:hover{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4);box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4)}.input--state-primary .input__icon{color:#3f7de8;background-color:#e8f2ff}.input--state-primary .input__container__label{color:#8ca0b3}.input--state-primary .input__container__label--pressed{color:#3f7de8}.input--state-primary .input__container__text{caret-color:#3f7de8;color:#202c44}.input--state-danger{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger:hover{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ffa5a5;box-shadow:0 0 0 2px #ffa5a5}.input--state-danger .input__icon{color:#ff4c4c;background-color:#ffa5a5}.input--state-danger .input__container__label{color:#8ca0b3}.input--state-danger .input__container__label--pressed{color:#ff4c4c}.input--state-danger .input__container__text{caret-color:#ff4c4c;color:#202c44}.input--state-disabled{cursor:not-allowed;border:1px solid #e7edf4;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:#f3f6fa}.input--state-disabled:hover{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid #e7edf4;box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #e7edf4;box-shadow:0 0 0 2px #e7edf4}.input--state-disabled .input__icon{color:#b9cbd3;background-color:#f8fbfb}.input--state-disabled .input__container__label{color:#b9cbd3}.input--state-disabled .input__container__label--pressed{color:#b9cbd3}.input--state-disabled .input__container__text{caret-color:#b9cbd3;color:#b9cbd3}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:#8ca0b3;word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger{color:#ff4c4c}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}';var c=t("bds_input",function(){function t(t){var i=this;e(this,t);this.bdsChange=n(this,"bdsChange",7);this.bdsInput=n(this,"bdsInput",7);this.bdsOnBlur=n(this,"bdsOnBlur",7);this.bdsFocus=n(this,"bdsFocus",7);this.bdsSubmit=n(this,"bdsSubmit",7);this.bdsKeyDownBackspace=n(this,"bdsKeyDownBackspace",7);this.isPressed=false;this.isPassword=false;this.validationMesage="";this.validationDanger=false;this.inputName="";this.type="text";this.label="";this.placeholder="";this.autoCapitalize="off";this.autoComplete="off";this.readonly=false;this.helperMessage="";this.errorMessage="";this.icon="";this.disabled=false;this.danger=false;this.value="";this.counterLength=false;this.counterLengthRule={};this.isSubmit=false;this.isTextarea=false;this.rows=1;this.cols=0;this.keyPressWrapper=function(t){switch(t.key){case"Enter":i.bdsSubmit.emit({event:t,value:i.value});if(i.isSubmit){i.clearTextInput()}break;case"Backspace":i.bdsKeyDownBackspace.emit({event:t,value:i.value});break}};this.onInput=function(t){i.onBdsInputValidations();var e=t.target;if(e){i.value=e.value||""}i.bdsInput.emit(t)};this.onBlur=function(){i.onBlurValidations();i.isPressed=false;i.bdsOnBlur.emit()};this.onFocus=function(){i.isPressed=true;i.bdsFocus.emit()};this.onClickWrapper=function(){i.onFocus();if(i.nativeInput){i.nativeInput.focus()}};this.clearTextInput=function(t){if(!i.readonly&&!i.disabled&&t){t.preventDefault();t.stopPropagation()}i.value="";if(i.nativeInput){i.nativeInput.value=""}}}t.prototype.valueChanged=function(){this.bdsChange.emit({value:this.value==null?this.value:this.value.toString()})};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.onClickWrapper();return[2]}))}))};t.prototype.removeFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.onBlur();return[2]}))}))};t.prototype.getInputElement=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.nativeInput]}))}))};t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.nativeInput.validity.valid]}))}))};t.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.value="";return[2]}))}))};t.prototype.renderIcon=function(){return this.icon&&i("div",{class:{input__icon:true,"input__icon--large":!!this.label}},i("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))};t.prototype.renderLabel=function(){return this.label&&i("label",{class:{input__container__label:true,"input__container__label--pressed":this.isPressed&&!this.disabled}},i("bds-typo",{variant:"fs-12",bold:"bold"},this.label))};t.prototype.renderMessage=function(){var t=this.danger?"error":"info";var e=this.danger?this.errorMessage:this.helperMessage;if(!e&&this.validationDanger)e=this.validationMesage;var n=this.danger||this.validationDanger?"input__message input__message--danger":"input__message";if(e){return i("div",{class:n,part:"input__message"},i("div",{class:"input__message__icon"},i("bds-icon",{size:"x-small",name:t,theme:"solid",color:"inherit"})),i("bds-typo",{variant:"fs-12"},e))}return undefined};t.prototype.onBlurValidations=function(){this.required&&this.requiredValidation();(this.minlength||this.maxlength)&&this.lengthValidation();(this.min||this.max)&&this.minMaxValidation();this.checkValidity()};t.prototype.onBdsInputValidations=function(){this.type==="email"&&this.emailValidation();this.type==="phonenumber"&&this.numberValidation();this.checkValidity()};t.prototype.requiredValidation=function(){if(this.nativeInput.validity.valueMissing){this.validationMesage=this.requiredErrorMessage;this.validationDanger=true}};t.prototype.lengthValidation=function(){if(this.nativeInput.validity.tooShort){this.validationMesage=this.minlengthErrorMessage;this.validationDanger=true;return}if(this.nativeInput.validity.tooLong){this.validationDanger=true;return}};t.prototype.minMaxValidation=function(){if(this.nativeInput.validity.rangeUnderflow){this.validationMesage=this.minErrorMessage;this.validationDanger=true;return}if(this.nativeInput.validity.rangeOverflow){this.validationMesage=this.maxErrorMessage;this.validationDanger=true;return}};t.prototype.emailValidation=function(){if(o(this.nativeInput.value)){this.validationMesage=this.emailErrorMessage;this.validationDanger=true}};t.prototype.numberValidation=function(){if(a(this.nativeInput.value)){this.validationMesage=this.numberErrorMessage;this.validationDanger=true}};t.prototype.checkValidity=function(){if(this.nativeInput.validity.valid){this.validationDanger=false}};t.prototype.componentDidUpdate=function(){if(this.nativeInput&&this.value!=this.nativeInput.value){this.nativeInput.value=this.value}};t.prototype.render=function(){var t=this;var e=this.isPressed&&!this.disabled;var n=this.isTextarea?"textarea":"input";return i(r,{"aria-disabled":this.disabled?"true":null},i("div",{class:{input:true,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":e},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper,part:"input-container"},this.renderIcon(),i("slot",{name:"input-left"}),i("div",{class:"input__container"},this.renderLabel(),i("div",{class:{input__container__wrapper:!this.chips,input__container__wrapper__chips:this.chips}},i("slot",{name:"inside-input-left"}),i(n,{class:{input__container__text:true,input__container__text__chips:this.chips},ref:function(e){return t.nativeInput=e},rows:this.rows,cols:this.cols,autocapitalize:this.autoCapitalize,autocomplete:this.autoComplete,disabled:this.disabled,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,name:this.inputName,onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.onInput,placeholder:this.placeholder,readOnly:this.readonly,type:this.type,value:this.value,pattern:this.pattern,required:this.required,part:"input"}))),this.counterLength&&i("bds-counter-text",Object.assign({length:this.value.length,max:this.maxlength,active:e},this.counterLengthRule)),i("slot",{name:"input-right"})),this.renderMessage())};Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return t}());c.style=p}}}));