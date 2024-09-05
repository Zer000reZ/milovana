(this["webpackJsonpeos-host"]=this["webpackJsonpeos-host"]||[]).push([[6],{200:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),r=a(5),o=a(18),i=a(2),u=a(3),p=a(53),c=a(16),h=a.n(c),l=h()("eos:pcm2:Pcm2PageTracker"),d=function(){function t(e){Object(i.a)(this,t),this.host=e(p.a),this.runCounter=0,this.pageFirstRun=new Map,this.pageLastRun=new Map,this.setPages=new Map,this.mustRelations=new Map,this.mustNotRelations=new Map,this.numActionsRelations=new Map,this.numActionsFromRelations=new Map,this.repeat=new Map,this.simpleRepeatGoal=new Map,this.simpleRepeatState=new Map,this.currentPage=null,this.host.on("page",this.handlePage.bind(this))}return Object(u.a)(t,[{key:"set",value:function(t){l("set page %s",t);var e=this.setPages.get(t)||0;this.setPages.set(t,e+1)}},{key:"unset",value:function(t){l("unset page %s",t),this.setPages.delete(t)}},{key:"isSet",value:function(t){var e=this.setPages.get(t)||0,a=this.repeat.get(t);return"undefined"===typeof a&&(a=1),e>=a}},{key:"isValidTarget",value:function(t){if(this.isSet(t))return l("not a valid target, page already set. page=%s",t),!1;var e,a=Object(o.a)(this.mustRelations.get(t)||[]);try{for(a.s();!(e=a.n()).done;){var n=e.value;if(!this.isSet(n))return l("not a valid target, other page must be set. page=%s other=%s",t,n),!1}}catch(y){a.e(y)}finally{a.f()}var s,r=Object(o.a)(this.mustNotRelations.get(t)||[]);try{for(r.s();!(s=r.n()).done;){var i=s.value;if(this.isSet(i))return l("not a valid target, other page must not be set. page=%s other=%s",t,i),!1}}catch(y){r.e(y)}finally{r.f()}var u,p=Object(o.a)(this.numActionsRelations.get(t)||[]);try{for(p.s();!(u=p.n()).done;){var c=u.value;if(this.runCounter<c)return l("not a valid target, must have run number of actions. page=%s num=%s actual=%s",t,c,this.runCounter),!1}}catch(y){p.e(y)}finally{p.f()}var h,d=Object(o.a)(this.numActionsFromRelations.get(t)||[]);try{for(d.s();!(h=d.n()).done;){var f=h.value,m=f.num,g=f.since,v=this.pageFirstRun.get(g);if("undefined"===typeof v)return l("not a valid target, other page must have run number of steps before but has not run at all. page=%s other=%s num=%s",t,g,m),!1;var R=this.runCounter-v;if(R<m)return l("not a valid target, other page must have run number of steps before. page=%s other=%s num=%s actual=%s",t,g,m,R),!1}}catch(y){d.e(y)}finally{d.f()}return l("valid target. page=%s",t),!0}},{key:"handlePage",value:function(t){this.currentPage=t,this.runCounter++,this.set(t),this.pageFirstRun.has(t)||this.pageFirstRun.set(t,this.runCounter),this.pageLastRun.set(t,this.runCounter)}},{key:"addMustRelation",value:function(t,e){l("add must relation. page=%s other=%s",t,e),this.mustRelations.has(t)||this.mustRelations.set(t,new Set),this.mustRelations.get(t).add(e)}},{key:"addMustNotRelation",value:function(t,e){this.mustNotRelations.has(t)||this.mustNotRelations.set(t,new Set),this.mustNotRelations.get(t).add(e)}},{key:"addNumActionsRelation",value:function(t,e){this.numActionsRelations.has(t)||this.numActionsRelations.set(t,[]),this.numActionsRelations.get(t).push(e)}},{key:"addNumActionsFromRelation",value:function(t,e,a){this.numActionsFromRelations.has(t)||this.numActionsFromRelations.set(t,[]),this.numActionsFromRelations.get(t).push({num:a,since:e})}},{key:"setRepeat",value:function(t,e){l("repeatset page %s => %s",t,e),this.repeat.set(t,e)}},{key:"addRepeat",value:function(t,e){var a=this.repeat.get(t);"undefined"===typeof a&&(a=1),l("repeatadd page %s +%s => %s",t,e,a+=e),this.repeat.set(t,a)}},{key:"delRepeat",value:function(t,e){var a=this.repeat.get(t);"undefined"===typeof a&&(a=1),l("repeatdel page %s -%s => %s",t,e,a-=e),this.repeat.set(t,a)}},{key:"maybeRepeat",value:function(t){var e=t.count,a=t.max,n=t.target,s=this.simpleRepeatGoal.get(this.currentPage);"undefined"===typeof s&&(s="undefined"===typeof a?e:Math.floor(Math.random()*(a-e))+e,this.simpleRepeatGoal.set(this.currentPage,s));var r=this.simpleRepeatState.get(this.currentPage);return"undefined"===typeof r&&(r=0),l("repeat %s/%s",r,s),r<s?(r++,this.simpleRepeatState.set(this.currentPage,r),this.currentPage):(this.simpleRepeatGoal.delete(this.currentPage),this.simpleRepeatState.delete(this.currentPage),n)}}]),t}(),f=function(t){var e=t.deps,a=t.opts;return{run:function(){var t,n=a.self,s=a.pages,r=e(d),i=Object(o.a)(s);try{for(i.s();!(t=i.n()).done;){var u=t.value;r.addMustRelation(n,u)}}catch(p){i.e(p)}finally{i.f()}}}},m=function(t){var e=t.deps,a=t.opts;return{run:function(){var t,n=a.self,s=a.pages,r=e(d),i=Object(o.a)(s);try{for(i.s();!(t=i.n()).done;){var u=t.value;r.addMustNotRelation(n,u)}}catch(p){i.e(p)}finally{i.f()}}}},g=function(t){var e=t.deps,a=t.opts;return{run:function(){var t=a.self,n=a.count;e(d).addNumActionsRelation(t,n)}}},v=function(t){var e=t.deps,a=t.opts;return{run:function(){var t=a.self,n=a.action,s=a.count;e(d).addNumActionsFromRelation(t,n,s)}}},R=h()("eos:pcm2:command:range"),y=function(t){var e=t.deps,a=t.host,n=t.opts;return{run:function(){var t=n.from,s=n.to,r=n.prefix,o=void 0===r?"":r,i=e(d);R("finding target in range. prefix=%s from=%s to=%s",o,t,s);for(var u=[],p=Number(t);p<=Number(s);p++){var c=o+String(p);a.getPage(c)&&i.isValidTarget(c)&&u.push(c)}u.length&&a.showPage(u[Math.floor(Math.random()*u.length)])}}},b=h()("eos:pcm2:command:repeat"),N=function(t){var e=t.deps,a=t.host,n=t.opts;return{run:function(){var t=n.count,s=n.target,r=n.max,o=e(d);b("repeating page. count=%s max=%s target=%s",t,r,s),a.showPage(o.maybeRepeat({count:t,max:r,target:s}))}}},P=function(t){var e=t.deps,a=t.opts;return{run:function(){var t=a.target,n=a.count;e(d).setRepeat(t,Number(n))}}},M=function(t){var e=t.deps,a=t.opts;return{run:function(){var t=a.target,n=a.count;e(d).addRepeat(t,Number(n))}}},C=function(t){var e=t.deps,a=t.opts;return{run:function(){var t=a.target,n=a.count;e(d).delRepeat(t,Number(n))}}},w=function(t){var e=t.deps,a=t.opts;return{run:function(){var t,n=a.pages,s=e(d),r=Object(o.a)(n);try{for(r.s();!(t=r.n()).done;){var i=t.value;s.set(i)}}catch(u){r.e(u)}finally{r.f()}}}},A=function(t){var e=t.deps,a=t.opts;return{run:function(){var t,n=a.pages,s=e(d),r=Object(o.a)(n);try{for(r.s();!(t=r.n()).done;){var i=t.value;s.unset(i)}}catch(u){r.e(u)}finally{r.f()}}}},k=a(9);e.default=function(){var t=Object(r.a)(s.a.mark((function t(e){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e(d),n=function(t,e){var n=t.createObject(t.OBJECT);t.setProperty(e,"pages",n);for(var s=function(){var e=o[r];t.setProperty(n,e,t.createNativeFunction((function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return s=s.map((function(e){return t.pseudoToNative(e)})),a[e].apply(a,s)})),k.a.NONENUMERABLE_DESCRIPTOR)},r=0,o=["isSet","isValidTarget","addMustRelation","addMustNotRelation","addNumActionsRelation","addNumActionsFromRelation","setRepeat","addRepeat","delRepeat"];r<o.length;r++)s()},r={mustCommand:f,mustnotCommand:m,numactionsCommand:g,numactionsfromCommand:v,rangeCommand:y,repeatCommand:N,repeatsetCommand:P,repeataddCommand:M,repeatdelCommand:C,setCommand:w,unsetCommand:A},t.abrupt("return",{vm:n,commands:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=6.2786e99c.chunk.js.map