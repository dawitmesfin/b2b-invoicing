(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1290:function(e,t,a){"use strict";a.r(t);a(166);var r=a(107),n=(a(97),a(50)),c=(a(131),a(43)),o=a(24),i=a(11),s=a.n(i),l=a(22),u=a(8),p=a(14),m=a(9),d=a(7),f=a(773),b=a(10),h=a(16),y=a(30),v=a(28),k=a(266),g=a(829),O=a(269),j=a(815),E=a(0),S=a(29),w=a(21),x=a(473),_=a(196),F=a(828),L=a(772),A=a(770),C=a(906),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={btnDisabled:!0,btnLoading:!1,companySelectedFromAutocomplete:!1,legalForms:{}},a.handleSelect=a.select.bind(Object(h.a)(Object(h.a)(a))),a.handleSearch=a.search.bind(Object(h.a)(Object(h.a)(a))),a.handleAddNew=a.addNew.bind(Object(h.a)(Object(h.a)(a))),a.handleScrollEnd=a.scrollEnd.bind(Object(h.a)(Object(h.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(f.a)(Object(d.a)(t.prototype),"componentDidMount",this).call(this),e.next=3,F.a.all();case 3:a=e.sent,this.setState({legalForms:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(l.a)(s.a.mark(function e(){var a=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.form.validateFields(function(){var e=Object(l.a)(s.a.mark(function e(r,n){var c,i,l,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return a.setState({btnLoading:!0}),c=a.props,i=c.updateTempCompany,l=c.tempCompany,u=Object(o.a)({},l,{brandName:n.brandName,capital:parseFloat(n.capital),incorporationAt:n.incorporationAt,legalForm:n.legalForm,name:n.name,siren:n.siret.slice(0,9),siret:n.siret}),e.next=6,i(u);case 6:return e.abrupt("return",Object(f.a)(Object(d.a)(t.prototype),"save",a).call(a));case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()),e.abrupt("return",!1);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"scrollEnd",value:function(e){e&&e()}},{key:"select",value:function(){var e=Object(l.a)(s.a.mark(function e(t){var a,r,n,c,i,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,r=a.updateTempCompany,n=a.siren,c=a.form,i=t,c.resetFields(),!(t&&t.siren&&n&&n.complementaryInfos)){e.next=8;break}return e.next=6,n.complementaryInfos(t.siren);case 6:(l=e.sent)&&(delete l.__typename,i=Object(o.a)({},i,l));case 8:r(i),this.setState({btnDisabled:!1,companySelectedFromAutocomplete:!0});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"addNew",value:function(){var e=this.props,t=e.updateTempCompany;e.form.resetFields(),t({}),this.setState({btnDisabled:!1,companySelectedFromAutocomplete:!1})}},{key:"search",value:function(){var e=this.props,t=e.updateTempCompany;e.tempCompany,e.siren;t(void 0),this.setState({btnDisabled:!0,companySelectedFromAutocomplete:!1})}},{key:"render",value:function(){var e,a=this.props,r=a.intl,o=a.form,i=a.tempCompany,s=this.state,l=(s.companySelectedFromAutocomplete,s.legalForms);if("undefined"!==typeof i){var u=i;e=E.createElement(E.Fragment,null,E.createElement(n.a,{gutter:28},E.createElement(c.a,{xs:24,lg:12},E.createElement(k.o,{defaultValue:u&&u.name||u.brandName,id:"name",label:E.createElement(w.b,{id:"kyc.company.form_name"}),rules:[{message:r.formatMessage({id:"kyc.company.form_name_error"}),required:!0}],form:o}))),E.createElement(n.a,{gutter:28},E.createElement(c.a,{xs:12,lg:6},E.createElement(k.k,{defaultValue:u&&u.legalForm?u.legalForm:null,showSearch:!0,id:"legalForm",label:E.createElement(w.b,{id:"kyc.company.form_legalForm"}),rules:[{message:r.formatMessage({id:"kyc.company.form_legalForm_error"}),required:!0}],form:o,options:Object.keys(l).map(function(e,t){return E.createElement(k.m,{key:e,value:e},l[e])})})),E.createElement(c.a,{xs:12,lg:6},E.createElement(k.o,{defaultValue:u&&u.siret,id:"siret",label:E.createElement(w.b,{id:"kyc.company.form_siret"}),rules:[{message:r.formatMessage({id:"kyc.company.form_siret_error"}),required:!0}],form:o}))),E.createElement(n.a,{gutter:28},E.createElement(c.a,{xs:12,lg:6},E.createElement(k.o,{defaultValue:u&&u.capital,id:"capital",label:E.createElement(w.b,{id:"kyc.company.form_capital"}),rules:[{message:r.formatMessage({id:"kyc.company.form_capital_error"}),required:!0}],form:o})),E.createElement(c.a,{xs:12,lg:6},E.createElement(k.d,{defaultValue:u.incorporationAt?Object(_.d)(u.incorporationAt):null,id:"incorporationAt",label:E.createElement(w.b,{id:"kyc.company.form_incorporationAt"}),rules:[{message:r.formatMessage({id:"kyc.company.form_incorporationAt_error"}),required:!0}],form:o}))))}return Object(f.a)(Object(d.a)(t.prototype),"_render",this).call(this,E.createElement(E.Fragment,null,E.createElement(n.a,{gutter:28},E.createElement(c.a,{xs:24,lg:12},E.createElement(g.c,{onValueChange:this.handleSearch,footer:E.createElement("div",null,E.createElement("div",{className:"footer-hint"},E.createElement(w.b,{id:"kyc.company.search_footer_hint"})),E.createElement("div",{onClick:this.handleAddNew,className:"footer-cta"},E.createElement(y.a,{value:v.a.ArrowReturn}),E.createElement(w.b,{id:"kyc.company.search_footer_cta"}))),placeholder:"kyc.company.search_placeholder",type:"companies",inline:!0,onSelect:this.handleSelect}))),e))}}]),t}(A.a);N.defaultProps={kycProps:{bottomBar:!0,step:"COMPANY",btn:"kyc.bottom.confirm",btnLink:"/kyc/company/address",btnLater:"kyc.bottom.later",btnLaterLink:"/",headingDescription:"kyc.company.description",headingTitle:"kyc.company.title"}},t.default=Object(S.compose)(r.a.create({}),L.b(),O.c(),j.c(),x.a,C.b(),w.e)(N)},770:function(e,t,a){"use strict";var r=a(11),n=a.n(r),c=a(22),o=a(8),i=a(14),s=a(9),l=a(7),u=a(10),p=a(16),m=a(56),d=a(0),f=a(62),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={},a.handleLater=a.later.bind(Object(p.a)(Object(p.a)(a))),a.handleSave=a.save.bind(Object(p.a)(Object(p.a)(a))),a.handleError=a.onError.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"load",value:function(){this.props.kycSetState&&this.props.kycSetState({btnLoading:!0})}},{key:"later",value:function(){var e=Object(c.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.props.kyc.btnLaterLink)&&f.a.push(t),e.abrupt("return",!0);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onError",value:function(){var e=Object(c.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.kycSetState&&this.props.kycSetState({btnLaterLoading:!1,btnLoading:!1});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(c.a)(n.a.mark(function e(){var t,a,r,c,o,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.company,r=t.kycSetState,c=t.kyc,o=c.nextStep,i=c.btnLink,r({btnLoading:!0}),!o||!a){e.next=5;break}return e.next=5,a.step(o);case 5:return r({btnLoading:!1}),i&&f.a.push(i),e.abrupt("return",!0);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.offValidateStep,a=e.offValidateLater;t&&t(this.handleSave),a&&a(this.handleLater)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.onValidateStep,a=e.onValidateLater;t&&t(this.handleSave),a&&a(this.handleLater),this.props.kycSetState&&this.props.kycSetState(this.props.kycProps)}},{key:"_render",value:function(e){var t=this.props,a=t.kycProps,r=t.user,n=r&&r.data&&r.data.me,c=n&&n.currentCompany&&(n.currentCompany.name||n.currentCompany.brandName),o=a&&a.headingTitle,i=a&&a.headingDescription;return d.createElement("div",{className:"kyc-children"},o&&d.createElement("div",null,d.createElement(m.f,{titleVariables:{company:c},title:o,description:i})),e)}}]),t}(d.PureComponent);b.defaultProps={},t.a=b},773:function(e,t,a){"use strict";var r=a(7);function n(e,t,a){return(n="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(n){var c=Object.getOwnPropertyDescriptor(n,t);return c.get?c.get.call(a):c.value}})(e,t,a||e)}a.d(t,"a",function(){return n})},828:function(e,t,a){"use strict";var r,n=a(11),c=a.n(n),o=a(22),i=function(){var e=Object(o.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return e.next=3,fetch("/legal-form.json");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent;case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();t.a={all:i}}}]);
//# sourceMappingURL=116.bbd02979.chunk.js.map