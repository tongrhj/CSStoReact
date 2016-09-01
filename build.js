System.register("npm:systemjs-plugin-babel@0.0.13/babel-helpers/extends.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a})}}}),System.register("npm:systemjs-plugin-babel@0.0.13/babel-helpers/possibleConstructorReturn.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b})}}}),System.register("npm:systemjs-plugin-babel@0.0.13/babel-helpers/inherits.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)})}}}),System.register("app/neatjson.js",[],function(a,b){"use strict";function c(a,b){function c(){var a=new Map;return function(b,c){var e=a.get(b);return e||a.set(b,e={}),e[c]||(e[c]=d(b,c)),e[c]}}function d(a,c){if(null===a||void 0===a)return c+"null";if("number"==typeof a){var d=a===+a&&a!==(0|a);return c+(d&&"decimals"in b?a.toFixed(b.decimals):a+"")}if(a instanceof Array){if(!a.length)return c+"[]";var m=a.map(function(a){return l(a,"")}),n=c+"["+g+m.join(i)+g+"]";if(b.wrap===!1||n.length<=b.wrap)return n;if(b.short){var o=c+" "+g;return m=a.map(function(a){return l(a,o)}),m[0]=m[0].replace(o,c+"["+g),m[m.length-1]=m[m.length-1]+g+"]",m.join(",\n")}var o=c+b.indent;return c+"[\n"+a.map(function(a){return l(a,o)}).join(",\n")+"\n"+(b.indentLast?o:c)+"]"}if(a instanceof Object){var p=[],q=0,r=b.sort||b.sorted;for(var s in a){var t=p[q++]=[s,a[s]];r===!0?t[2]=s:"function"==typeof r&&(t[2]=r(s,a[s],a))}if(!p.length)return c+"{}";r&&(p=p.sort(function(a,b){return a=a[2],b=b[2],a<b?-1:a>b?1:0}));var u=p.map(function(a){return[JSON.stringify(a[0]),l(a[1],"")]});b.sorted&&(u=u.sort(function(a,b){return a=a[0],b=b[0],a<b?-1:a>b?1:0})),u=u.map(function(a){return a.join(j)}).join(i);var n=c+"{"+h+u+h+"}";if(b.wrap===!1||n.length<b.wrap)return n;if(b.short){if(u=p.map(function(a){return[c+" "+h+JSON.stringify(a[0]),a[1]]}),u[0][0]=u[0][0].replace(c+" ",c+"{"),b.aligned){for(var v=0,q=u.length;q--;)u[q][0].length>v&&(v=u[q][0].length);for(var w=e(" ",v),q=u.length;q--;)u[q][0]=f(w,u[q][0])}for(var q=u.length;q--;){var s=u[q][0],x=u[q][1],o=e(" ",(s+k).length),n=s+k+l(x,"");u[q]=b.wrap===!1||n.length<=b.wrap||!x||"object"!=typeof x?n:s+k+l(x,o).replace(/^\s+/,"")}return u.join(",\n")+h+"}"}var u=[],q=0;for(var s in a)u[q++]=[c+b.indent+JSON.stringify(s),a[s]];if(b.sorted&&(u=u.sort(function(a,b){return a=a[0],b=b[0],a<b?-1:a>b?1:0})),b.aligned){for(var v=0,q=u.length;q--;)u[q][0].length>v&&(v=u[q][0].length);for(var w=e(" ",v),q=u.length;q--;)u[q][0]=f(w,u[q][0])}for(var o=c+b.indent,q=u.length;q--;){var s=u[q][0],x=u[q][1],n=s+k+l(x,"");u[q]=b.wrap===!1||n.length<=b.wrap||!x||"object"!=typeof x?n:s+k+l(x,o).replace(/^\s+/,"")}return c+"{\n"+u.join(",\n")+"\n"+(b.indentLast?o:c)+"}"}return c+JSON.stringify(a)}function e(a,b){for(var c="";;){if(1&b&&(c+=a),b>>=1,!b)break;a+=a}return c}function f(a,b){return(b+a).substring(0,a.length)}b=b||{},"wrap"in b||(b.wrap=80),1==b.wrap&&(b.wrap=-1),"indent"in b||(b.indent="  "),"arrayPadding"in b||(b.arrayPadding="padding"in b?b.padding:0),"objectPadding"in b||(b.objectPadding="padding"in b?b.padding:0),"beforeComma"in b||(b.beforeComma="aroundComma"in b?b.aroundComma:0),"afterComma"in b||(b.afterComma="aroundComma"in b?b.aroundComma:0),"beforeColon"in b||(b.beforeColon="aroundColon"in b?b.aroundColon:0),"afterColon"in b||(b.afterColon="aroundColon"in b?b.aroundColon:0),"beforeColon1"in b||(b.beforeColon1="aroundColon1"in b?b.aroundColon1:"beforeColon"in b?b.beforeColon:0),"afterColon1"in b||(b.afterColon1="aroundColon1"in b?b.aroundColon1:"afterColon"in b?b.afterColon:0),"beforeColonN"in b||(b.beforeColonN="aroundColonN"in b?b.aroundColonN:"beforeColon"in b?b.beforeColon:0),"afterColonN"in b||(b.afterColonN="aroundColonN"in b?b.aroundColonN:"afterColon"in b?b.afterColon:0);var g=e(" ",b.arrayPadding),h=e(" ",b.objectPadding),i=e(" ",b.beforeComma)+","+e(" ",b.afterComma),j=e(" ",b.beforeColon1)+":"+e(" ",b.afterColon1),k=e(" ",b.beforeColonN)+":"+e(" ",b.afterColonN),l=c();return l(a,"")}return a("neatJSON",c),{setters:[],execute:function(){}}}),System.register("npm:systemjs-plugin-babel@0.0.13/babel-helpers/classCallCheck.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")})}}}),System.registerDynamic("npm:systemjs-plugin-babel@0.0.13.json",[],!1,function(){return{main:"plugin-babel.js",map:{"systemjs-babel-build":{browser:"./systemjs-babel-browser.js",default:"./systemjs-babel-browser.js"}},meta:{"./plugin-babel.js":{format:"cjs"}}}}),System.register("npm:systemjs-plugin-babel@0.0.13/babel-helpers/createClass.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}())}}}),System.register("app/transback.js",["npm:systemjs-plugin-babel@0.0.13/babel-helpers/classCallCheck.js","npm:systemjs-plugin-babel@0.0.13/babel-helpers/createClass.js"],function(a,b){"use strict";function c(a){return a=a.replace(/([A-Z])/g,"-$1").toLowerCase()}var d,e,f,g;return{setters:[function(a){d=a.default},function(a){e=a.default}],execute:function(){f={noWarnings:!1},g=function(){function a(b){d(this,a),this.setOptions(b),this.init()}return e(a,[{key:"setOptions",value:function(a){a=a||{},this.options=a}},{key:"init",value:function(){this.unApliedStyles={},this.appliedStyles={},this.initStyleTag()}},{key:"destroy",value:function(){this.styleTag.parentNode&&this.styleTag.parentNode.removeChild(this.styleTag),this.init()}},{key:"initStyleTag",value:function(){this.styleTag=document.createElement("style"),this.styleTag.id="react-in-style",document.getElementsByTagName("head")[0].appendChild(this.styleTag)}},{key:"add",value:function(a,b){var c=arguments.length<=2||void 0===arguments[2]?f:arguments[2],d=a.prototype&&a.prototype.style?a.prototype.style:a;this.unApliedStyles[b]=d,this.renderStyles(c)}},{key:"applyMediaQuery",value:function(a,b){return a&&a.length?"@media ("+a.join(") and (")+") {"+b+"}":b}},{key:"renderStyles",value:function(a){var b=this;Object.keys(this.unApliedStyles).forEach(function(c){var d=b.unApliedStyles[c];delete b.unApliedStyles[c],b.appliedStyles[c]=d;var e=b.objToCss(d,c);e=b.applyMediaQuery(a.queries,e),b.styleTag.innerHTML+=e.trim()+"\n"})}},{key:"objToCss",value:function(a){var b=this,d=arguments.length<=1||void 0===arguments[1]?"":arguments[1],e=arguments.length<=2||void 0===arguments[2]?[]:arguments[2],f="";return Object.keys(a).forEach(function(g){var h=" ",i=g[0],j=g;if("&"===i&&(h="",j=g.substring(1)),j=j.replace(/&/g,d),"object"!=typeof a[g])f+=c(g)+":"+a[g]+"; ";else{":"===i&&(h="");var k=d+h+j;b.objToCss(a[g],k,e)}}),e.unshift(d.trim()+"{"+f.trim()+"}"),e.join("\n")}}]),a}(),a("default",new g)}}}),System.register("app/app.jsx",["npm:systemjs-plugin-babel@0.0.13/babel-helpers/extends.js","npm:systemjs-plugin-babel@0.0.13/babel-helpers/classCallCheck.js","npm:systemjs-plugin-babel@0.0.13/babel-helpers/createClass.js","npm:systemjs-plugin-babel@0.0.13/babel-helpers/possibleConstructorReturn.js","npm:systemjs-plugin-babel@0.0.13/babel-helpers/inherits.js","react","react-dom","./neatjson.js","./transback.js"],function(_export,_context){"use strict";var _extends,_classCallCheck,_createClass,_possibleConstructorReturn,_inherits,React,ReactDOM,neatJSON,ReactInStyle,Input,sampleCSS,initialStarterText,App;return{setters:[function(a){_extends=a.default},function(a){_classCallCheck=a.default},function(a){_createClass=a.default},function(a){_possibleConstructorReturn=a.default},function(a){_inherits=a.default},function(a){React=a.default},function(a){ReactDOM=a.default},function(a){neatJSON=a.neatJSON},function(a){ReactInStyle=a.default}],execute:function(){Input=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,Object.getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"componentDidUpdate",value:function(a){var b=ReactDOM.findDOMNode(this),c=b.value.length,d=b.selectionStart;b.value=this.props.value;var e=Math.max(0,b.value.length-c+d);b.selectionStart=b.selectionEnd=e}},{key:"render",value:function(){return React.createElement("textarea",_extends({cols:"40",rows:"20"},this.props,{value:void 0}))}}]),b}(React.Component),sampleCSS="\n      width: 5vh;\n      height: 5vh;\n      border-radius: 50%;\n      background: #dfdfc2;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      -webkit-animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n              animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n",initialStarterText="",App=function(_React$Component2){function App(a){_classCallCheck(this,App);var b=_possibleConstructorReturn(this,Object.getPrototypeOf(App).call(this,a));return b.update=b.update.bind(b),b.inputTextUpdate=b.inputTextUpdate.bind(b),b.state={inputText:initialStarterText},b}return _inherits(App,_React$Component2),_createClass(App,[{key:"componentDidMount",value:function(){this.update()}},{key:"inputTextUpdate",value:function(a){var b=this;this.setState({inputText:a.target.value},function(){b.update()})}},{key:"update",value:function update(){if(console.log("update",arguments),this.state.inputText===initialStarterText)return void this.setState({inputText:initialStarterText,error:null});try{var resultobj=this.state.inputText;console.log(this.state.inputText);var result,error;try{var obj=JSON.parse(resultobj)}catch(e1){if(error=e1,console.log(error),e1 instanceof SyntaxError)try{eval("var obj = "+resultobj),console.log("HERE",obj)}catch(a){obj=void 0,console.log("WHY?!")}}if(void 0===obj)console.log(error);else{var start=new Date;result=neatJSON(obj,{wrap:40,short:!0,aligned:!0,padding:1,afterComma:1,aroundColonN:1}).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}console.log(result),result=ReactInStyle.objToCss(result),this.setState({outputText:result,error:null})}catch(a){this.setState({error:a})}}},{key:"render",value:function(){var a=this.state.error?{backgroundColor:"lightcoral"}:null;console.log("state",this.state);var b=this.state.inputText,c=this.state.error||this.state.outputText;return React.createElement("div",{style:{textAlign:"center"}},React.createElement(Input,{ref:"inputCss",placeholder:"Type or paste JSON here...",onChange:this.inputTextUpdate,value:b}),React.createElement("textarea",{ref:"outputCss",cols:"40",rows:"20",style:a,value:c}),React.createElement("br",null),React.createElement("input",{style:{marginLeft:"266px"},ref:"useNewline",type:"checkbox",onChange:this.update})," Format")}}]),App}(React.Component),_export("default",App),ReactDOM.render(React.createElement(App,null),document.getElementById("main"),function(){var a=document.getElementById("loader");a&&(a.style.display="none")})}}});
//# sourceMappingURL=build.js.map