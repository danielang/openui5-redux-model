sap.ui.require.preload({
	"redux/library.js": "sap.ui.define([\"jquery.sap.global\"],function(){\"use strict\";sap.ui.getCore().initLibrary({name:\"redux\",version:\"0.1.0\",dependencies:[\"sap.ui.core\"]})});",
	"redux/ReduxListBinding.js": "sap.ui.define([\"sap/ui/model/ClientListBinding\",\"sap/ui/model/ChangeReason\",\"jquery.sap.global\"],function(t,e,i){\"use strict\";var s=t.extend(\"redux.ReduxListBinding\");return s.prototype.getContexts=function(t,e){return this.iLastStartIndex=t,this.iLastLength=e,t||(t=0),e||(e=Math.min(this.iLength,this.oModel.iSizeLimit)),this._getContexts(t,e)},s.prototype.getCurrentContexts=function(){return this.getContexts(this.iLastStartIndex,this.iLastLength)},s.prototype.update=function(){var t=this.oModel._getObject(this.sPath,this.oContext);if(t){if(!i.isArray(t))throw new Error(\"A list binding must be represented by an array.\");this.oList=t.slice(0),this.updateIndices(),this.applyFilter(),this.applySort(),this.iLength=this._getLength()}else this.oList=[],this.aIndices=[],this.iLength=0},s.prototype.checkUpdate=function(t){if(!this.bSuspended||this.bIgnoreSuspend||t){var s=this.oModel._getObject(this.sPath,this.oContext);i.sap.equal(this.oList,s)&&!t||(this.update(),this._fireChange({reason:e.Change}))}},s});",
	"redux/ReduxModel.js": "sap.ui.define([\"sap/ui/model/ClientModel\",\"sap/ui/model/BindingMode\",\"sap/ui/model/Context\",\"./ReduxPropertyBinding\",\"./ReduxListBinding\"],function(t,e,o,r,n){\"use strict\";var i=t.extend(\"redux.ReduxModel\",{constructor:function(o,r){if(t.call(this),!o)throw new Error(\"Please pass a redux store instance to the redux model.\");var n=this;this.oStore=o,this.oSelectors=r||{},this.sDefaultBindingMode=e.OneWay,this.mSupportedBindingModes={OneWay:!0,TwoWay:!1,OneTime:!1},o.subscribe(function(){n.checkUpdate()})}});return i.prototype.bindProperty=function(t,e,o){return new r(this,t,e,o)},i.prototype.bindList=function(t,e,o,r,i){return new n(this,t,e,o,r,i)},i.prototype.setProperty=function(){throw new Error(\"Do not use setProperty on the redux model. Use actions to update the state\")},i.prototype.getProperty=function(t,e){return this._getObject(t,e)},i.prototype.getStore=function(){return this.oStore},i.prototype._getObject=function(t,e){var r=null;if(e instanceof o?r=this._getObject(e.getPath()):e&&(r=e),!t)return r;var n=this.oStore.getState(),i=0,s=t.split(\"/\");for(s[0]||(\"selector\"===s[1]?(r=this.oSelectors[s[2]](this.oStore.getState(),e),i=3):(r=n[s[1]],i=2));r&&s[i];){var u=r[s[i]];r=\"function\"==typeof u?u(this.oStore.getState(),e):u,i+=1}return r},i});",
	"redux/ReduxPropertyBinding.js": "sap.ui.define([\"sap/ui/model/ClientPropertyBinding\",\"sap/ui/model/ChangeReason\",\"jquery.sap.global\"],function(e,t,n){\"use strict\";var o=e.extend(\"redux.ReduxPropertyBinding\");return o.prototype.checkUpdate=function(e){if(!this.bSuspended||e){var o=this._getValue();n.sap.equal(o,this.oValue)&&!e||(this.oValue=o,this._fireChange({reason:t.Change}))}},o.prototype.setValue=function(){throw new Error(\"Do not use setValue on a ReduxBinding. Use actions to update the state\")},o.prototype.setExternalValue=function(){throw new Error(\"Do not use setExternalValue on a ReduxBinding. Use actions to update the state\")},o});"
}, "redux/library-preload");