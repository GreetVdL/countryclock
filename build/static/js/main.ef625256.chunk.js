(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),u=(n(13),n(2)),o=n(3),s=n(6),l=n(5),h=n(4),p=(n.p,n(14),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleChange=function(e){t.props.updateStateCountry(e.target.value)},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("select",{className:"country",onChange:this.handleChange,children:["country",Object(p.jsx)("option",{value:"belgium",children:"BELGIUM"}),Object(p.jsx)("option",{value:"iceland",children:"ICELAND"}),Object(p.jsx)("option",{value:"portugal",children:"PORTUGAL"})]})}}]),n}(c.a.Component),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("h1",{children:"The time in\xa0"}),Object(p.jsx)(j,{updateStateCountry:this.props.updateStateCountry}),Object(p.jsx)("h1",{children:"\xa0is"})]})}}]),n}(c.a.Component),b=n(18),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).tick=function(t){a.props.updateStateTime()},a.countryIds={belgium:"Europe/Brussels",iceland:"Europe/Reykjavik",portugal:"Europe/Lisbon"},a}return Object(o.a)(n,[{key:"getLocalTime",value:function(){return Object(b.a)(this.props.state.time,this.countryIds[this.props.state.country]).toLocaleTimeString()}},{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return Object(p.jsx)("p",{className:"clock",children:this.getLocalTime()})}}]),n}(c.a.Component),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={time:new Date,country:"belgium"},a.updateStateTime=a.updateStateTime.bind(Object(s.a)(a)),a.updateStateCountry=a.updateStateCountry.bind(Object(s.a)(a)),a}return Object(o.a)(n,[{key:"updateStateTime",value:function(){this.setState((function(t){return{time:new Date}}))}},{key:"updateStateCountry",value:function(t){this.setState((function(e){return{country:t}}))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d,{state:this.state,updateStateCountry:this.updateStateCountry}),Object(p.jsx)(O,{state:this.state,updateStateTime:this.updateStateTime})]})}}]),n}(c.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.ef625256.chunk.js.map