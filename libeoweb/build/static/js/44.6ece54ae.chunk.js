(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1300:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n(14),r=n(9),c=n(7),o=n(10),l=n(36),s=n(52),d=n(0),p=n(1268),m=n(473),u=n(772),b=(n(958),n(108)),f=n(269),y=n(29),v=n(88),h=n(21),k=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.kyc,n=t.bottomBar,a=t.btnLoading,i=t.btnLaterLoading,r=t.btnLater,c=t.btnDisabled,o=t.btn,l=e.validateStep,s=e.validateLater;return n?d.createElement(b.d,{visible:!0},d.createElement("div",{style:{display:"flex",flex:1,justifyContent:"flex-end"}},r&&d.createElement(v.c,{loading:i,onClick:s,style:{marginRight:50},type:v.b.Default},d.createElement(h.b,{id:r})),o&&d.createElement(v.c,{disabled:c||!1,loading:a,onClick:l,style:{marginRight:50},type:v.b.Primary},d.createElement(h.b,{id:o})))):null}}]),t}(d.PureComponent),O=Object(y.compose)(u.b())(k),E=(n(97),n(50)),L=(n(131),n(43)),j=n(30),S=n(28),V=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return d.createElement(E.a,{className:"kyc-sidebar-item".concat(this.props.className?" ".concat(this.props.className):"").concat(this.props.done?" done":"").concat(this.props.active?" active":" disabled")},d.createElement(L.a,{className:"kyc-sidebar-item-index"},"".concat(this.props.index)),d.createElement(L.a,{style:{flex:1}},d.createElement("div",{className:"kyc-sidebar-item-title"},d.createElement(h.b,{id:this.props.title}),!this.props.done&&!this.props.active&&d.createElement(j.a,{value:S.a.Lock,color:"white"}),this.props.done&&"\u2705"),d.createElement("div",{className:"kyc-sidebar-item-description"},this.props.description&&d.createElement(h.b,{id:this.props.description}))))}}]),t}(d.PureComponent);V.defaultProps={description:"",title:""};var N=V,g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={steps:[{description:void 0,name:"intro",title:void 0,visible:!1},{description:"kyc.sidebar.company_description",name:"company",title:"kyc.sidebar.company_title",visible:!0},{description:"kyc.sidebar.personal_information_description",name:"personal-information",title:"kyc.sidebar.personal_information_title",visible:!0},{description:"kyc.sidebar.beneficiary_description",name:"beneficiary",title:"kyc.sidebar.beneficiary_title",visible:!0},{description:"kyc.sidebar.sign_description",name:"sign",title:"kyc.sidebar.sign_title",visible:!0},{description:void 0,name:"iban",title:void 0,visible:!1}]},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.steps,t=this.props.current,n=e[0];e.map(function(e){e.name===t&&(n=e)});var a=!0;return d.createElement("div",{className:"kyc-sidebar-outer kyc-sidebar-outer-".concat(n.name&&n.visible?"visible":"hidden")},d.createElement("div",{className:"kyc-sidebar kyc-sidebar-".concat(n.name," kyc-sidebar-").concat(n.name&&n.visible?"visible":"hidden")},e.map(function(e,t){var i=e.visible&&d.createElement(N,Object.assign({},e,{active:a,done:a&&n.name!==e.name,key:"".concat(t),index:t}));return n.name===e.name&&(a=!1),i})))}}]),t}(d.PureComponent);g.defaultProps={current:"intro"};var _=Object(y.compose)(u.b())(g),x=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.user,a=(n&&n.data&&n.data.currentCompany,this.props.match),i=a.params&&a.params.step?a.params.step:"intro";return d.createElement(b.b,{style:{padding:0},reverse:"intro"===i||"iban"===i},d.createElement("div",{className:"kyc-outter"},d.createElement("div",{className:"kyc-wrapper kyc-".concat(i)},d.createElement(f.b,null,t)),d.createElement(_,{current:i})),d.createElement(O,null))}}]),t}(d.PureComponent),P=Object(y.compose)(s.b(),m.a)(x),w=d.lazy(function(){return n.e(110).then(n.bind(null,1306))}),A=d.lazy(function(){return n.e(111).then(n.bind(null,1307))}),C=d.lazy(function(){return n.e(112).then(n.bind(null,1308))}),R=d.lazy(function(){return n.e(113).then(n.bind(null,1309))}),I=d.lazy(function(){return n.e(114).then(n.bind(null,1310))}),T=d.lazy(function(){return n.e(115).then(n.bind(null,1311))}),z=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.user,a=n&&n.data&&n.data.me;if(!a)return d.createElement(d.Fragment,null);var i=a.currentCompany,r=t.pathname,c=["/kyc","/kyc/company","/kyc/company/address","/kyc/personal-information","/kyc/personal-information/part-1","/kyc/personal-information/part-2","/kyc/personal-information/part-3","/kyc/personal-information/part-4","/kyc/beneficiary","/kyc/beneficiary/part-1","/kyc/beneficiary/part-2","/kyc/beneficiary/part-3","/kyc/beneficiary/part-4","/kyc/sign","/kyc/iban"].indexOf(r),o=i&&i.kycStep;if(-1===c)return d.createElement(p.a,{to:{pathname:"/kyc"}});if(i){if(o){if(o.indexOf("PERSONNAL_INFORMATION_PART_4")>-1&&7!==c)return d.createElement(p.a,{to:{pathname:"/kyc/personal-information/part-4"}});if(o.indexOf("PERSONNAL_INFORMATION_PART_3")>-1&&6!==c)return d.createElement(p.a,{to:{pathname:"/kyc/personal-information/part-3"}});if(o.indexOf("PERSONNAL_INFORMATION_PART_2")>-1&&5!==c)return d.createElement(p.a,{to:{pathname:"/kyc/personal-information/part-2"}});if(o.indexOf("PERSONNAL_INFORMATION")>-1&&(c>7||c<3))return d.createElement(p.a,{to:{pathname:"/kyc/personal-information"}});if(o.indexOf("BENEFICIARIES")>-1&&(c>12||c<8))return d.createElement(p.a,{to:{pathname:"/kyc/beneficiary"}});if(o.indexOf("SIGN")>-1&&(c>13||c<13))return d.createElement(p.a,{to:{pathname:"/kyc/sign"}});if(o.indexOf("IBAN")>-1&&c<14)return d.createElement(p.a,{to:{pathname:"/kyc/iban"}})}}else if(c>2)return d.createElement(p.a,{to:{pathname:"/kyc"}});return d.createElement(u.a,null,d.createElement(P,null,d.createElement(l.b,{exact:!0,path:"/kyc",component:w}),d.createElement(l.b,{path:"/kyc/company/:view?",component:A}),d.createElement(l.b,{path:"/kyc/personal-information/:view?",component:C}),d.createElement(l.b,{path:"/kyc/beneficiary/:view?",component:R}),d.createElement(l.b,{path:"/kyc/sign",component:I}),d.createElement(l.b,{path:"/kyc/iban",component:T})))}}]),t}(d.PureComponent);t.default=s.b()(Object(m.a)(z))},772:function(e,t,n){"use strict";var a=n(24),i=n(8),r=n(14),c=n(9),o=n(7),l=n(10),s=n(210),d=n.n(s),p=n(0),m=p.createContext({kyc:{bottomBar:void 0,btn:void 0,btnLater:void 0,btnLaterLink:void 0,btnLaterLoading:void 0,btnLink:void 0,btnLoading:void 0,nextStep:void 0,sidebar:void 0,step:void 0},kycSetState:function(){},offValidateLater:function(){},offValidateStep:function(){},onValidateLater:function(){},onValidateStep:function(){},validateLater:function(){},validateStep:function(){}}),u=m.Consumer,b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={kyc:{bottomBar:void 0,btn:void 0,btnLater:void 0,btnLaterLoading:void 0,btnLink:void 0,btnLinkLater:void 0,btnLoading:void 0,nextStep:void 0,sidebar:void 0,step:void 0},kycSetState:function(e){n.setState(Object(a.a)({},n.state,{kyc:Object(a.a)({},n.state.kyc,e)}))},offValidateLater:function(e){n.onValidateLater&&n.onValidateLater.removeListener&&n.onValidateLater.removeListener("onValidateLater",e)},offValidateStep:function(e){n.onValidateStep&&n.onValidateStep.removeListener&&n.onValidateStep.removeListener("onValidateStep",e)},onValidateLater:function(e){n.onValidateLater&&n.onValidateLater.addListener&&n.onValidateLater.addListener("onValidateLater",e)},onValidateStep:function(e){n.onValidateStep&&n.onValidateStep.addListener&&n.onValidateStep.addListener("onValidateStep",e)},validateLater:function(){n.onValidateLater&&n.onValidateLater.emit("onValidateLater")},validateStep:function(){n.onValidateStep&&n.onValidateStep.emit("onValidateStep")}},n.onValidateStep=new d.a.EventEmitter,n.onValidateLater=new d.a.EventEmitter,n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return p.createElement(m.Provider,{value:this.state},this.props.children)}}]),t}(p.PureComponent),f=(n(106),function(){return function(e){return function(t){function n(){return Object(i.a)(this,n),Object(c.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){var t=this;return p.createElement(u,null,function(n){return p.createElement(e,Object.assign({},t.props,n))})}}]),n}(p.Component)}});n.d(t,"a",function(){return b}),n.d(t,"b",function(){return f})},958:function(e,t,n){}}]);
//# sourceMappingURL=44.6ece54ae.chunk.js.map