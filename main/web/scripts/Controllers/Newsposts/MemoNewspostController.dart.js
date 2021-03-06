{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.builtin$cls=a.name
a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.Hx(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uK"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uK"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uK(this,a,b,true,[],d).prototype
return t}:tearOffGetter(a,b,d,e)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
t.push.apply(t,a)}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={tM:function tM(a){this.a=a},
rk:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wI:function(a,b,c,d){var t=new H.oO(a,b,c,[d])
t.eQ(a,b,c,d)
return t},
dx:function(a,b,c,d){if(!!J.av(a).$isr)return new H.fV(a,b,[c,d])
return new H.hs(a,b,[c,d])},
jl:function(){return new P.dR("No element")},
wh:function(){return new P.dR("Too few elements")},
jJ:function(a,b,c,d){if(c-b<=32)H.G2(a,b,c,d)
else H.G1(a,b,c,d)},
G2:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bc(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cw(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
G1:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.al(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.al(a3+a4,2)
p=q-t
o=q+t
n=J.bc(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cw(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cw(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cw(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cw(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cw(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cw(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cw(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.b8(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.av(c)
if(b.S(c,0))continue
if(b.a5(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.da(c)
if(b.aC(c,0)){--f
continue}else{a=f-1
if(b.a5(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.eb(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cw(a5.$2(d,j),0))for(;!0;)if(J.cw(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eb(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.n(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.n(a2,b))
n.i(a2,b,j)
H.jJ(a2,a3,g-2,a5)
H.jJ(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b8(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b8(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b8(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b8(a5.$2(d,j),0))for(;!0;)if(J.b8(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eb(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jJ(a2,g,f,a5)}else H.jJ(a2,g,f,a5)},
kR:function kR(a){this.a=a},
r:function r(){},
er:function er(){},
oO:function oO(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
es:function es(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hs:function hs(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fV:function fV(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jq:function jq(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fe:function fe(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hP:function hP(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jT:function jT(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iw:function iw(){},
pd:function pd(){},
hL:function hL(){},
kc:function(a,b){var t=a.bo(b)
if(!u.globalState.d.cy)u.globalState.f.bv()
return t},
xJ:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.av(s).$isp)throw H.l(P.dG("Arguments to main must be a List: "+H.C(s)))
u.globalState=new H.qu(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vE()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.q0(P.tS(null,H.eN),0)
r=P.D
s.z=new H.v(0,null,null,null,null,null,0,[r,H.fv])
s.ch=new H.v(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qt()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zQ,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Gm)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a4(null,null,null,r)
p=new H.fl(0,null,!1)
o=new H.fv(s,new H.v(0,null,null,null,null,null,0,[r,H.fl]),q,u.createNewIsolate(),p,new H.dH(H.rA()),new H.dH(H.rA()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
q.h(0,0)
o.d7(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fB(a,{func:1,args:[,]}))o.bo(new H.rB(t,a))
else if(H.fB(a,{func:1,args:[,,]}))o.bo(new H.rC(t,a))
else o.bo(a)
u.globalState.f.bv()},
Gm:function(a){var t=P.ho(["command","print","msg",a])
return new H.dD(!0,P.hW(null,P.D)).ay(t)},
zS:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zT()
return},
zT:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.V('Cannot extract URI from "'+t+'"'))},
zQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eL(!0,[]).aW(b.data)
s=J.bc(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eL(!0,[]).aW(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eL(!0,[]).aW(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.D
j=P.a4(null,null,null,k)
i=new H.fl(0,null,!1)
h=new H.fv(s,new H.v(0,null,null,null,null,null,0,[k,H.fl]),j,u.createNewIsolate(),i,new H.dH(H.rA()),new H.dH(H.rA()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
j.h(0,0)
h.d7(0,i)
u.globalState.f.a.aK(0,new H.eN(h,new H.mm(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bv()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fE(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bv()
break
case"close":u.globalState.ch.ak(0,$.$get$vF().n(0,a))
a.terminate()
u.globalState.f.bv()
break
case"log":H.zP(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.ho(["command","print","msg",t])
k=new H.dD(!0,P.hW(null,P.D)).ay(k)
s.toString
self.postMessage(k)}else P.fC(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
zP:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.ho(["command","log","msg",a])
r=new H.dD(!0,P.hW(null,P.D)).ay(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cv(q)
t=H.cu(q)
s=P.lp(t)
throw H.l(s)}},
zR:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wv=$.wv+("_"+s)
$.ww=$.ww+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fE(f,["spawned",new H.fw(s,r),q,t.r])
r=new H.mn(a,b,c,d,t)
if(e===!0){t.dO(q,q)
u.globalState.f.a.aK(0,new H.eN(t,r,"start isolate"))}else r.$0()},
G8:function(a,b){var t=new H.p5(!0,!1,null)
t.eR(a,b)
return t},
GF:function(a){return new H.eL(!0,[]).aW(new H.dD(!1,P.hW(null,P.D)).ay(a))},
rB:function rB(a,b){this.a=a
this.b=b},
rC:function rC(a,b){this.a=a
this.b=b},
qu:function qu(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx},
fv:function fv(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx},
qp:function qp(a,b){this.a=a
this.b=b},
q0:function q0(a,b){this.a=a
this.b=b},
q1:function q1(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
qt:function qt(){},
mm:function mm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mn:function mn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pO:function pO(){},
fw:function fw(b,a){this.b=b
this.a=a},
qw:function qw(a,b){this.a=a
this.b=b},
i_:function i_(b,c,a){this.b=b
this.c=c
this.a=a},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
p6:function p6(a,b){this.a=a
this.b=b},
p7:function p7(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
yV:function(){throw H.l(new P.V("Cannot modify unmodifiable Map"))},
Hc:function(a){return u.types[a]},
xD:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.av(a).$isaD},
C:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cK(a)
if(typeof t!=="string")throw H.l(H.bt(a))
return t},
Fz:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nW(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ev:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ua:function(a,b){if(b==null)throw H.l(new P.bD(a,null,null))
return b.$1(a)},
di:function(a,b,c){var t,s,r,q,p,o
H.xw(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ua(a,c)
if(3>=t.length)return H.u(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ua(a,c)}if(b<2||b>36)throw H.l(P.bF(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a6(q,o)|32)>r)return H.ua(a,c)}return parseInt(a,b)},
wu:function(a,b){return b.$1(a)},
wx:function(a,b){var t,s
H.xw(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wu(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.kp(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wu(a,b)}return t},
nR:function(a){var t,s,r,q,p,o,n,m
t=J.av(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.av(a).$iseH){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a6(q,0)===36)q=C.c.W(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.ru(H.kh(a),0,null),u.mangledGlobalNames)},
nQ:function(a){return"Instance of '"+H.nR(a)+"'"},
Fd:function(){if(!!self.location)return self.location.href
return},
wt:function(a){var t,s,r,q,p
t=J.cl(a)
if(typeof t!=="number")return t.er()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Fi:function(a){var t,s,r,q
t=H.a([],[P.D])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bT)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bt(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aU(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bt(q))}return H.wt(t)},
wz:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bT)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bt(q))
if(q<0)throw H.l(H.bt(q))
if(q>65535)return H.Fi(a)}return H.wt(a)},
Fj:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.er()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hD:function(a){var t
if(typeof a!=="number")return H.a8(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aU(t,10))>>>0,56320|t&1023)}}throw H.l(P.bF(a,0,1114111,null,null))},
Fk:function(a,b,c,d,e,f,g,h){var t,s
H.ea(a)
H.ea(b)
H.ea(c)
H.ea(d)
H.ea(e)
H.ea(f)
t=J.rE(b,1)
if(typeof a!=="number")return H.a8(a)
if(0<=a&&a<100){a+=400
t=J.rE(t,4800)}s=h?Date.UTC(a,t,c,d,e,f,g):new Date(a,t,c,d,e,f,g).valueOf()
if(isNaN(s)||s<-864e13||s>864e13)return
return s},
cW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
uc:function(a){return a.b?H.cW(a).getUTCFullYear()+0:H.cW(a).getFullYear()+0},
jE:function(a){return a.b?H.cW(a).getUTCMonth()+1:H.cW(a).getMonth()+1},
jD:function(a){return a.b?H.cW(a).getUTCDate()+0:H.cW(a).getDate()+0},
Fe:function(a){return a.b?H.cW(a).getUTCHours()+0:H.cW(a).getHours()+0},
Fg:function(a){return a.b?H.cW(a).getUTCMinutes()+0:H.cW(a).getMinutes()+0},
Fh:function(a){return a.b?H.cW(a).getUTCSeconds()+0:H.cW(a).getSeconds()+0},
Ff:function(a){return a.b?H.cW(a).getUTCMilliseconds()+0:H.cW(a).getMilliseconds()+0},
ub:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bt(a))
return a[b]},
wy:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bt(a))
a[b]=c},
a8:function(a){throw H.l(H.bt(a))},
u:function(a,b){if(a==null)J.cl(a)
throw H.l(H.c2(a,b))},
c2:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cZ(!0,b,"index",null)
t=J.cl(a)
if(!(b<0)){if(typeof t!=="number")return H.a8(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jG(b,"index",null)},
H3:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cZ(!0,a,"start",null)
if(a<0||a>c)return new P.ez(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cZ(!0,b,"end",null)
if(b<a||b>c)return new P.ez(a,c,!0,b,"end","Invalid value")}return new P.cZ(!0,b,"end",null)},
bt:function(a){return new P.cZ(!0,a,null,null)},
ke:function(a){if(typeof a!=="number")throw H.l(H.bt(a))
return a},
ea:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bt(a))
return a},
xw:function(a){if(typeof a!=="string")throw H.l(H.bt(a))
return a},
l:function(a){var t
if(a==null)a=new P.fi()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xL})
t.name=""}else t.toString=H.xL
return t},
xL:function(){return J.cK(this.dartException)},
ba:function(a){throw H.l(a)},
bT:function(a){throw H.l(new P.bM(a))},
dS:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pa(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wQ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tO:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mH(a,s,t?null:b.receiver)},
cv:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rD(a)
if(a==null)return
if(a instanceof H.h2)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aU(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tO(H.C(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.C(s)+" (Error "+q+")"
return t.$1(new H.jw(p,null))}}if(a instanceof TypeError){o=$.$get$wK()
n=$.$get$wL()
m=$.$get$wM()
l=$.$get$wN()
k=$.$get$wR()
j=$.$get$wS()
i=$.$get$wP()
$.$get$wO()
h=$.$get$wU()
g=$.$get$wT()
f=o.aF(s)
if(f!=null)return t.$1(H.tO(s,f))
else{f=n.aF(s)
if(f!=null){f.method="call"
return t.$1(H.tO(s,f))}else{f=m.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=k.aF(s)
if(f==null){f=j.aF(s)
if(f==null){f=i.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=h.aF(s)
if(f==null){f=g.aF(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jw(s,f==null?null:f.method))}}return t.$1(new H.pc(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jN()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cZ(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jN()
return a},
cu:function(a){var t
if(a instanceof H.h2)return a.b
if(a==null)return new H.k8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k8(a,null)},
Hm:function(a){if(a==null||typeof a!='object')return J.dF(a)
else return H.ev(a)},
xA:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Hh:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kc(b,new H.rp(a))
case 1:return H.kc(b,new H.rq(a,d))
case 2:return H.kc(b,new H.rr(a,d,e))
case 3:return H.kc(b,new H.rs(a,d,e,f))
case 4:return H.kc(b,new H.rt(a,d,e,f,g))}throw H.l(P.lp("Unsupported number of arguments for wrapped closure"))},
dm:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Hh)
a.$identity=t
return t},
yR:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.av(c).$isp){t.$reflectionInfo=c
r=H.Fz(t).r}else r=c
q=d?Object.create(new H.oo().constructor.prototype):Object.create(new H.fL(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dI
$.dI=J.dX(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vb(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Hc,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.v6:H.rK
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vb(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yO:function(a,b,c,d){var t=H.rK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vb:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yQ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yO(s,!q,t,b)
if(s===0){q=$.dI
$.dI=J.dX(q,1)
o="self"+H.C(q)
q="return function(){var "+o+" = this."
p=$.fM
if(p==null){p=H.kJ("self")
$.fM=p}return new Function(q+H.C(p)+";return "+o+"."+H.C(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dI
$.dI=J.dX(q,1)
n+=H.C(q)
q="return function("+n+"){return this."
p=$.fM
if(p==null){p=H.kJ("self")
$.fM=p}return new Function(q+H.C(p)+"."+H.C(t)+"("+n+");}")()},
yP:function(a,b,c,d){var t,s
t=H.rK
s=H.v6
switch(b?-1:a){case 0:throw H.l(new H.o1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yQ:function(a,b){var t,s,r,q,p,o,n,m
t=H.yx()
s=$.v5
if(s==null){s=H.kJ("receiver")
$.v5=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yP(q,!o,r,b)
if(q===1){s="return function(){return this."+H.C(t)+"."+H.C(r)+"(this."+H.C(s)+");"
o=$.dI
$.dI=J.dX(o,1)
return new Function(s+H.C(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.C(t)+"."+H.C(r)+"(this."+H.C(s)+", "+m+");"
o=$.dI
$.dI=J.dX(o,1)
return new Function(s+H.C(o)+"}")()},
uK:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.av(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.yR(a,b,t,!!d,e,f)},
rK:function(a){return a.a},
v6:function(a){return a.c},
yx:function(){var t=$.fM
if(t==null){t=H.kJ("self")
$.fM=t}return t},
kJ:function(a){var t,s,r,q,p
t=new H.fL("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Hp:function(a,b){var t=J.bc(b)
throw H.l(H.v8(H.nR(a),t.L(b,3,t.gm(b))))},
kj:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.av(a)[b]
else t=!0
if(t)return a
H.Hp(a,b)},
xz:function(a){var t=J.av(a)
return"$S" in t?t.$S():null},
fB:function(a,b){var t
if(a==null)return!1
t=H.xz(a)
return t==null?!1:H.uN(t,b)},
v8:function(a,b){return new H.kO("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hx:function(a){throw H.l(new P.l6(a))},
rA:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xB:function(a){return u.getIsolateTag(a)},
bX:function(a){return new H.dT(a,null)},
a:function(a,b){a.$ti=b
return a},
kh:function(a){if(a==null)return
return a.$ti},
xC:function(a,b){return H.uQ(a["$as"+H.C(b)],H.kh(a))},
aE:function(a,b,c){var t=H.xC(a,b)
return t==null?null:t[c]},
P:function(a,b){var t=H.kh(a)
return t==null?null:t[b]},
dE:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ru(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.C(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dE(t,b)
return H.GK(a,b)}return"unknown-reified-type"},
GK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dE(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dE(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dE(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Ha(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dE(l[j],b)+(" "+H.C(j))}q+="}"}return"("+q+") => "+t},
ru:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c9("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dE(o,c)}return q?"":"<"+t.C(0)+">"},
ki:function(a){var t,s
if(a instanceof H.eV){t=H.xz(a)
if(t!=null)return H.dE(t,null)}s=J.av(a).constructor.builtin$cls
if(a==null)return s
return s+H.ru(a.$ti,0,null)},
uQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dW:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kh(a)
s=J.av(a)
if(s[b]==null)return!1
return H.xu(H.uQ(s[d],t),c)},
Hw:function(a,b,c,d){if(a==null)return a
if(H.dW(a,b,c,d))return a
throw H.l(H.v8(H.nR(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.ru(c,0,null),u.mangledGlobalNames)))},
xu:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cY(a[s],b[s]))return!1
return!0},
eP:function(a,b,c){return a.apply(b,H.xC(b,c))},
H_:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ac"||b.builtin$cls==="d5"
if(b==null)return!0
t=H.kh(a)
a=J.av(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uN(r.apply(a,null),b)}return H.cY(s,b)},
cY:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d5")return!0
if('func' in b)return H.uN(a,b)
if('func' in a)return b.builtin$cls==="HD"||b.builtin$cls==="ac"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dE(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xu(H.uQ(o,t),r)},
xt:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cY(t,p)||H.cY(p,t)))return!1}return!0},
GR:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cY(p,o)||H.cY(o,p)))return!1}return!0},
uN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cY(t,s)||H.cY(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xt(r,q,!1))return!1
if(!H.xt(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}}return H.GR(a.named,b.named)},
HP:function(a){var t=$.uL
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
HO:function(a){return H.ev(a)},
HN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hi:function(a){var t,s,r,q,p,o
t=$.uL.$1(a)
s=$.rh[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ro[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xs.$2(a,t)
if(t!=null){s=$.rh[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ro[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uO(r)
$.rh[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ro[t]=r
return r}if(p==="-"){o=H.uO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xF(a,r)
if(p==="*")throw H.l(new P.eG(t))
if(u.leafTags[t]===true){o=H.uO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xF(a,r)},
xF:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rw(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uO:function(a){return J.rw(a,!1,null,!!a.$isaD)},
Hk:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rw(t,!1,null,!!t.$isaD)
else return J.rw(t,c,null,null)},
Hf:function(){if(!0===$.uM)return
$.uM=!0
H.Hg()},
Hg:function(){var t,s,r,q,p,o,n,m
$.rh=Object.create(null)
$.ro=Object.create(null)
H.He()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xG.$1(p)
if(o!=null){n=H.Hk(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
He:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.fA(C.P,H.fA(C.Q,H.fA(C.u,H.fA(C.u,H.fA(C.S,H.fA(C.R,H.fA(C.T(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uL=new H.rl(p)
$.xs=new H.rm(o)
$.xG=new H.rn(n)},
fA:function(a,b){return a(b)||b},
tJ:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bD("Illegal RegExp pattern ("+String(q)+")",a,null))},
Hu:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xK:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hk){q=b.gdv()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.ba(H.bt(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
GP:function(a){return a},
Hv:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aV(0,a),t=new H.jY(t.a,t.b,t.c,null),s=0,r="";t.I();){q=t.d
p=q.b
o=p.index
r=r+H.C(H.xj().$1(C.c.L(a,s,o)))+H.C(c.$1(q))
s=o+p[0].length}t=r+H.C(H.xj().$1(C.c.W(a,s)))
return t.charCodeAt(0)==0?t:t},
kU:function kU(){},
kV:function kV(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nW:function nW(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pa:function pa(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jw:function jw(a,b){this.a=a
this.b=b},
mH:function mH(a,b,c){this.a=a
this.b=b
this.c=c},
pc:function pc(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b},
rD:function rD(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
rp:function rp(a){this.a=a},
rq:function rq(a,b){this.a=a
this.b=b},
rr:function rr(a,b,c){this.a=a
this.b=b
this.c=c},
rs:function rs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rt:function rt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eV:function eV(){},
oT:function oT(){},
oo:function oo(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kO:function kO(a){this.a=a},
o1:function o1(a){this.a=a},
dT:function dT(a,b){this.a=a
this.b=b},
v:function v(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mG:function mG(a){this.a=a},
mF:function mF(a){this.a=a},
mR:function mR(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mS:function mS(a,$ti){this.a=a
this.$ti=$ti},
mT:function mT(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rl:function rl(a){this.a=a},
rm:function rm(a){this.a=a},
rn:function rn(a){this.a=a},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a,b){this.a=a
this.b=b},
pJ:function pJ(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
qM:function qM(a,b,c){this.a=a
this.b=b
this.c=c},
qN:function qN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dG("Invalid length "+H.C(a)))
return a},
xg:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dG("Invalid view offsetInBytes "+H.C(b)))},
xi:function(a){return a},
Fb:function(a){return new Int8Array(H.xi(a))},
cO:function(a,b,c){H.xg(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
GE:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aC()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.H3(a,b,c))
return b},
fg:function fg(){},
eu:function eu(){},
nh:function nh(){},
jt:function jt(){},
hw:function hw(){},
hy:function hy(){},
hA:function hA(){},
hx:function hx(){},
hz:function hz(){},
hB:function hB(){},
ni:function ni(){},
nj:function nj(){},
nk:function nk(){},
nl:function nl(){},
nm:function nm(){},
nn:function nn(){},
no:function no(){},
ju:function ju(){},
fh:function fh(){},
Ha:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Ho:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
av:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jo.prototype
return J.jn.prototype}if(typeof a=="string")return J.ep.prototype
if(a==null)return J.mD.prototype
if(typeof a=="boolean")return J.mC.prototype
if(a.constructor==Array)return J.eo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.ac)return a
return J.ri(a)},
rw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ri:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uM==null){H.Hf()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.eG("Return interceptor for "+H.C(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tN()]
if(p!=null)return p
p=H.Hi(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tN(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
wi:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ER:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a6(a,b)
if(s!==32&&s!==13&&!J.wi(s))break;++b}return b},
tI:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Y(a,t)
if(s!==32&&s!==13&&!J.wi(s))break}return b},
bc:function(a){if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(a.constructor==Array)return J.eo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.ac)return a
return J.ri(a)},
dn:function(a){if(a==null)return a
if(a.constructor==Array)return J.eo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.ac)return a
return J.ri(a)},
da:function(a){if(typeof a=="number")return J.fd.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eH.prototype
return a},
kg:function(a){if(typeof a=="number")return J.fd.prototype
if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eH.prototype
return a},
db:function(a){if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eH.prototype
return a},
bI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.ac)return a
return J.ri(a)},
dX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kg(a).U(a,b)},
b8:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.av(a).S(a,b)},
uR:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.da(a).at(a,b)},
cw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.da(a).aC(a,b)},
eb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.da(a).a5(a,b)},
uS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kg(a).an(a,b)},
rE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.da(a).V(a,b)},
i3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xD(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bc(a).n(a,b)},
kl:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xD(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dn(a).i(a,b,c)},
xM:function(a,b){return J.dn(a).h(a,b)},
xN:function(a,b,c,d){return J.bI(a).fM(a,b,c,d)},
xO:function(a,b){return J.db(a).aV(a,b)},
dY:function(a,b){return J.bI(a).fO(a,b)},
uT:function(a){return J.bI(a).fQ(a)},
xP:function(a,b,c){return J.da(a).ac(a,b,c)},
xQ:function(a,b){return J.kg(a).av(a,b)},
xR:function(a,b){return J.bI(a).aA(a,b)},
xS:function(a,b){return J.bc(a).aj(a,b)},
km:function(a,b,c){return J.bc(a).dS(a,b,c)},
xT:function(a,b){return J.bI(a).h_(a,b)},
uU:function(a,b){return J.dn(a).T(a,b)},
xU:function(a,b,c,d){return J.dn(a).bS(a,b,c,d)},
kn:function(a){return J.da(a).am(a)},
xV:function(a,b){return J.dn(a).aa(a,b)},
uV:function(a){return J.bI(a).gdQ(a)},
xW:function(a){return J.bI(a).gbn(a)},
fD:function(a){return J.bI(a).gas(a)},
xX:function(a){return J.bI(a).gcz(a)},
dF:function(a){return J.av(a).ga7(a)},
rF:function(a){return J.bc(a).gX(a)},
uW:function(a){return J.bI(a).gZ(a)},
dc:function(a){return J.dn(a).ga_(a)},
cl:function(a){return J.bc(a).gm(a)},
xY:function(a){return J.bI(a).ghO(a)},
xZ:function(a){return J.bI(a).ghP(a)},
uX:function(a){return J.av(a).gab(a)},
rG:function(a){return J.bI(a).gaJ(a)},
y_:function(a,b){return J.bI(a).by(a,b)},
y0:function(a,b){return J.bc(a).be(a,b)},
uY:function(a,b,c,d,e){return J.bI(a).cB(a,b,c,d,e)},
uZ:function(a,b){return J.dn(a).aw(a,b)},
y1:function(a,b,c){return J.db(a).e8(a,b,c)},
v_:function(a,b){return J.bI(a).hA(a,b)},
y2:function(a,b,c,d){return J.bI(a).hL(a,b,c,d)},
ko:function(a,b,c){return J.db(a).cP(a,b,c)},
y3:function(a,b,c){return J.db(a).hN(a,b,c)},
fE:function(a,b){return J.bI(a).b4(a,b)},
v0:function(a,b){return J.bI(a).sbn(a,b)},
y4:function(a,b){return J.dn(a).cZ(a,b)},
dZ:function(a,b){return J.db(a).eE(a,b)},
y5:function(a,b){return J.db(a).W(a,b)},
v1:function(a){return J.da(a).l(a)},
y6:function(a){return J.dn(a).ap(a)},
y7:function(a,b){return J.da(a).bf(a,b)},
cK:function(a){return J.av(a).C(a)},
y8:function(a){return J.db(a).hU(a)},
kp:function(a){return J.db(a).bg(a)},
y9:function(a){return J.db(a).ek(a)},
f:function f(){},
mC:function mC(){},
mD:function mD(){},
hl:function hl(){},
nL:function nL(){},
eH:function eH(){},
eq:function eq(){},
eo:function eo($ti){this.$ti=$ti},
tL:function tL($ti){this.$ti=$ti},
i4:function i4(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fd:function fd(){},
jo:function jo(){},
jn:function jn(){},
ep:function ep(){}},P={
Gd:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GS()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dm(new P.pL(t),1)).observe(s,{childList:true})
return new P.pK(t,s,r)}else if(self.setImmediate!=null)return P.GT()
return P.GU()},
Ge:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dm(new P.pM(a),0))},
Gf:function(a){++u.globalState.f.b
self.setImmediate(H.dm(new P.pN(a),0))},
Gg:function(a){P.uv(C.p,a)},
bm:function(a,b){P.xe(null,a)
return b.ghe()},
ck:function(a,b){P.xe(a,b)},
bl:function(a,b){J.xR(b,a)},
bk:function(a,b){b.ct(H.cv(a),H.cu(a))},
xe:function(a,b){var t,s,r,q
t=new P.r0(b)
s=new P.r1(b)
r=J.av(a)
if(!!r.$isbj)a.cn(t,s)
else if(!!r.$iscE)a.bY(t,s)
else{q=new P.bj(0,$.ao,null,[null])
q.a=4
q.c=a
q.cn(t,null)}},
bn:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ao.toString
return new P.rb(t)},
xk:function(a,b){if(H.fB(a,{func:1,args:[P.d5,P.d5]})){b.toString
return a}else{b.toString
return a}},
zx:function(a,b){var t=new P.bj(0,$.ao,null,[b])
P.wJ(C.p,new P.rd(a,t))
return t},
vC:function(a,b,c){var t
if(a==null)a=new P.fi()
t=$.ao
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.d9(a,b)
return t},
zy:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.ao,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.m0(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bT)(a),++l){q=a[l]
p=t.b
q.bY(new P.m_(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.ao,null,[null])
m.d8(C.X)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cv(j)
n=H.cu(j)
if(t.b===0||!1)return P.vC(o,n,null)
else{t.c=o
t.d=n}}return s},
bh:function(a){return new P.ka(new P.bj(0,$.ao,null,[a]),[a])},
xh:function(a,b,c){$.ao.toString
a.ao(b,c)},
Gj:function(a,b){var t=new P.bj(0,$.ao,null,[b])
t.a=4
t.c=a
return t},
x6:function(a,b){var t,s,r
b.a=1
try{a.bY(new P.qa(b),new P.qb(b))}catch(r){t=H.cv(r)
s=H.cu(r)
P.xH(new P.qc(b,t,s))}},
q9:function(a,b){var t,s,r
for(;a.gfq();)a=a.c
t=a.gce()
s=b.c
if(t){b.c=null
r=b.bI(s)
b.a=a.a
b.c=a.c
P.fu(b,r)}else{b.a=2
b.c=a
a.dB(s)}},
fu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fD(p)
n=p.gaI()
s.toString
P.kd(null,null,s,o,n)}return}for(;b.gci()!=null;b=m){m=b.a
b.a=null
P.fu(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdZ()||b.gdY()){k=b.gfK()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fD(p)
n=p.gaI()
s.toString
P.kd(null,null,s,o,n)
return}j=$.ao
if(j==null?k!=null:j!==k)$.ao=k
else j=null
if(b.gdY())new P.qh(t,r,q,b).$0()
else if(s){if(b.gdZ())new P.qg(r,b,l).$0()}else if(b.ghl())new P.qf(t,r,b).$0()
if(j!=null)$.ao=j
s=r.b
if(!!J.av(s).$iscE){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bI(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.q9(s,i)
return}}i=b.b
b=i.bH()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
GM:function(){var t,s
for(;t=$.fy,t!=null;){$.i1=null
s=t.b
$.fy=s
if(s==null)$.i0=null
t.a.$0()}},
GO:function(){$.uI=!0
try{P.GM()}finally{$.i1=null
$.uI=!1
if($.fy!=null)$.$get$uE().$1(P.xv())}},
xr:function(a){var t=new P.jZ(a,null)
if($.fy==null){$.i0=t
$.fy=t
if(!$.uI)$.$get$uE().$1(P.xv())}else{$.i0.b=t
$.i0=t}},
GN:function(a){var t,s,r
t=$.fy
if(t==null){P.xr(a)
$.i1=$.i0
return}s=new P.jZ(a,null)
r=$.i1
if(r==null){s.b=t
$.i1=s
$.fy=s}else{s.b=r.b
r.b=s
$.i1=s
if(s.b==null)$.i0=s}},
xH:function(a){var t=$.ao
if(C.e===t){P.fz(null,null,C.e,a)
return}t.toString
P.fz(null,null,t,t.cs(a,!0))},
HJ:function(a,b){return new P.qL(null,a,!1,[b])},
xo:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cv(o)
s=H.cu(o)
$.ao.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fD(r)
q=n
p=r.gaI()
c.$2(q,p)}}},
GD:function(a,b,c,d){var t=a.bP(0)
if(!!J.av(t).$iscE&&t!==$.$get$hb())t.c0(new P.r3(b,c,d))
else b.ao(c,d)},
xf:function(a,b){return new P.r2(a,b)},
uH:function(a,b,c){var t=a.bP(0)
if(!!J.av(t).$iscE&&t!==$.$get$hb())t.c0(new P.r4(b,c))
else b.aE(c)},
Gi:function(a,b,c,d,e,f,g){var t,s
t=$.ao
s=e?1:0
s=new P.hU(a,null,null,null,null,t,s,null,null,[f,g])
s.eU(b,c,d,e,g)
s.eX(a,b,c,d,e,f,g)
return s},
GC:function(a,b,c){$.ao.toString
a.bB(b,c)},
wJ:function(a,b){var t=$.ao
if(t===C.e){t.toString
return P.uv(a,b)}return P.uv(a,t.cs(b,!0))},
uv:function(a,b){var t=C.a.al(a.a,1000)
return H.G8(t<0?0:t,b)},
kd:function(a,b,c,d,e){var t={}
t.a=d
P.GN(new P.ra(t,e))},
xl:function(a,b,c,d){var t,s
s=$.ao
if(s===c)return d.$0()
$.ao=c
t=s
try{s=d.$0()
return s}finally{$.ao=t}},
xn:function(a,b,c,d,e){var t,s
s=$.ao
if(s===c)return d.$1(e)
$.ao=c
t=s
try{s=d.$1(e)
return s}finally{$.ao=t}},
xm:function(a,b,c,d,e,f){var t,s
s=$.ao
if(s===c)return d.$2(e,f)
$.ao=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ao=t}},
fz:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cs(d,!(!t||!1))
P.xr(d)},
pL:function pL(a){this.a=a},
pK:function pK(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(a){this.a=a},
pN:function pN(a){this.a=a},
r0:function r0(a){this.a=a},
r1:function r1(a){this.a=a},
rb:function rb(a){this.a=a},
cE:function cE(){},
rd:function rd(a,b){this.a=a
this.b=b},
m0:function m0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m_:function m_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eW:function eW(){},
k_:function k_(){},
dV:function dV(a,$ti){this.a=a
this.$ti=$ti},
ka:function ka(a,$ti){this.a=a
this.$ti=$ti},
k3:function k3(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bj:function bj(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q6:function q6(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function q8(a,b){this.a=a
this.b=b},
qd:function qd(a,b){this.a=a
this.b=b},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qi:function qi(a){this.a=a},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qf:function qf(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(a,b){this.a=a
this.b=b},
dk:function dk(){},
ov:function ov(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ot:function ot(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
ow:function ow(a){this.a=a},
oB:function oB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oz:function oz(a,b){this.a=a
this.b=b},
oA:function oA(){},
oC:function oC(a){this.a=a},
oF:function oF(a){this.a=a},
oG:function oG(a,b){this.a=a
this.b=b},
oD:function oD(a,b){this.a=a
this.b=b},
oE:function oE(a){this.a=a},
oH:function oH(a,b){this.a=a
this.b=b},
oI:function oI(a,b){this.a=a
this.b=b},
ox:function ox(a,b,c){this.a=a
this.b=b
this.c=c},
oy:function oy(a){this.a=a},
os:function os(){},
dl:function dl(){},
pQ:function pQ(a,b,c){this.a=a
this.b=b
this.c=c},
pP:function pP(a){this.a=a},
k1:function k1(){},
pV:function pV(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pX:function pX(b,c,a){this.b=b
this.c=c
this.a=a},
pW:function pW(){},
qx:function qx(){},
qy:function qy(a,b){this.a=a
this.b=b},
qK:function qK(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qL:function qL(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a,b){this.a=a
this.b=b},
r4:function r4(a,b){this.a=a
this.b=b},
hT:function hT(){},
hU:function hU(x,y,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qv:function qv(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eR:function eR(a,b){this.a=a
this.b=b},
r_:function r_(){},
ra:function ra(a,b){this.a=a
this.b=b},
qB:function qB(){},
qC:function qC(a,b){this.a=a
this.b=b},
qD:function qD(a,b){this.a=a
this.b=b},
qE:function qE(a,b){this.a=a
this.b=b},
Gk:function(a,b){var t=a[b]
return t===a?null:t},
uG:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uF:function(){var t=Object.create(null)
P.uG(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wj:function(a,b,c){return H.xA(a,new H.v(0,null,null,null,null,null,0,[b,c]))},
cF:function(a,b){return new H.v(0,null,null,null,null,null,0,[a,b])},
mU:function(){return new H.v(0,null,null,null,null,null,0,[null,null])},
ho:function(a){return H.xA(a,new H.v(0,null,null,null,null,null,0,[null,null]))},
hW:function(a,b){return new P.k6(0,null,null,null,null,null,0,[a,b])},
Gl:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
A:function(a,b,c,d,e){return new P.qk(0,null,null,null,null,[d,e])},
tF:function(a,b,c){var t,s
if(P.uJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i2()
s.push(a)
try{P.GL(a,t)}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=P.wH(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jk:function(a,b,c){var t,s,r
if(P.uJ(a))return b+"..."+c
t=new P.c9(b)
s=$.$get$i2()
s.push(a)
try{r=t
r.N=P.wH(r.gN(),a,", ")}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
uJ:function(a){var t,s
for(t=0;s=$.$get$i2(),t<s.length;++t)if(a===s[t])return!0
return!1},
GL:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.dc(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.I())return
q=H.C(t.gR())
b.push(q)
s+=q.length+2;++r}if(!t.I()){if(r<=5)return
if(0>=b.length)return H.u(b,-1)
p=b.pop()
if(0>=b.length)return H.u(b,-1)
o=b.pop()}else{n=t.gR();++r
if(!t.I()){if(r<=4){b.push(H.C(n))
return}p=H.C(n)
if(0>=b.length)return H.u(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gR();++r
for(;t.I();n=m,m=l){l=t.gR();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.C(n)
p=H.C(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a4:function(a,b,c,d){return new P.k5(0,null,null,null,null,null,0,[d])},
tR:function(a,b){var t,s
t=P.a4(null,null,null,b)
for(s=J.dc(a);s.I();)t.h(0,s.gR())
return t},
wo:function(a){var t,s,r
t={}
if(P.uJ(a))return"{...}"
s=new P.c9("")
try{$.$get$i2().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.aa(0,new P.n8(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$i2()
if(0>=t.length)return H.u(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
tS:function(a,b){var t=new P.mV(null,0,0,0,[b])
t.eO(a,b)
return t},
qk:function qk(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qn:function qn(a){this.a=a},
ql:function ql(a,$ti){this.a=a
this.$ti=$ti},
qm:function qm(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k6:function k6(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k5:function k5(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qo:function qo(){},
fc:function fc(){},
hj:function hj(){},
jp:function jp(){},
hC:function hC(){},
b3:function b3(){},
qS:function qS(){},
n7:function n7(){},
hM:function hM(a,$ti){this.a=a
this.$ti=$ti},
n8:function n8(a,b){this.a=a
this.b=b},
mV:function mV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qs:function qs(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
od:function od(){},
oc:function oc(){},
v4:function(a,b,c,d,e,f){if(C.d.bz(f,4)!==0)throw H.l(new P.bD("Invalid base64 padding, padded length must be multiple of four, is "+H.C(f),a,c))
if(d+e!==f)throw H.l(new P.bD("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bD("Invalid base64 padding, more than two '=' characters",a,b))},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
fQ:function fQ(){},
fR:function fR(){},
lj:function lj(){},
pl:function pl(a){this.a=a},
pm:function pm(a){this.a=a},
qU:function qU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qW:function qW(a){this.a=a},
qV:function qV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G6:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bF(b,0,J.cl(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bF(c,b,J.cl(a),null,null))
s=J.dc(a)
for(r=0;r<b;++r)if(!s.I())throw H.l(P.bF(b,0,r,null,null))
q=[]
if(t)for(;s.I();)q.push(s.gR())
else for(r=b;r<c;++r){if(!s.I())throw H.l(P.bF(c,b,r,null,null))
q.push(s.gR())}return H.wz(q)},
wH:function(a,b,c){var t=J.dc(b)
if(!t.I())return a
if(c.length===0){do a+=H.C(t.gR())
while(t.I())}else{a+=H.C(t.gR())
for(;t.I();)a=a+c+H.C(t.gR())}return a},
yU:function(a,b){return J.xQ(a,b)},
yY:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=P.dz("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:\\.(\\d{1,6}))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1).h9(a)
if(t!=null){s=new P.l9()
r=t.b
if(1>=r.length)return H.u(r,1)
q=H.di(r[1],null,null)
if(2>=r.length)return H.u(r,2)
p=H.di(r[2],null,null)
if(3>=r.length)return H.u(r,3)
o=H.di(r[3],null,null)
if(4>=r.length)return H.u(r,4)
n=s.$1(r[4])
if(5>=r.length)return H.u(r,5)
m=s.$1(r[5])
if(6>=r.length)return H.u(r,6)
l=s.$1(r[6])
if(7>=r.length)return H.u(r,7)
k=new P.la().$1(r[7])
j=J.da(k)
i=j.bh(k,1000)
h=j.hJ(k,1000)
j=r.length
if(8>=j)return H.u(r,8)
if(r[8]!=null){if(9>=j)return H.u(r,9)
j=r[9]
if(j!=null){g=J.b8(j,"-")?-1:1
if(10>=r.length)return H.u(r,10)
f=H.di(r[10],null,null)
if(11>=r.length)return H.u(r,11)
e=s.$1(r[11])
if(typeof f!=="number")return H.a8(f)
e=J.dX(e,60*f)
if(typeof e!=="number")return H.a8(e)
m=J.rE(m,g*e)}d=!0}else d=!1
c=H.Fk(q,p,o,n,m,l,i+C.f.b0(h/1000),d)
if(c==null)throw H.l(new P.bD("Time out of range",a,null))
return P.vh(c,d)}else throw H.l(new P.bD("Invalid date format",a,null))},
vh:function(a,b){var t=new P.dK(a,b)
t.d4(a,b)
return t},
yW:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.C(t)
if(t>=10)return s+"00"+H.C(t)
return s+"000"+H.C(t)},
yX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ib:function(a){if(a>=10)return""+a
return"0"+a},
yZ:function(a,b,c,d,e,f){return new P.d0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
vp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zf(a)},
zf:function(a){var t=J.av(a)
if(!!t.$iseV)return t.C(a)
return H.nQ(a)},
dG:function(a){return new P.cZ(!1,null,null,a)},
e_:function(a,b,c){return new P.cZ(!0,a,b,c)},
ya:function(a){return new P.cZ(!1,null,a,"Must not be null")},
wD:function(a){return new P.ez(null,null,!1,null,null,a)},
jG:function(a,b,c){return new P.ez(null,null,!0,a,b,"Value not in range")},
bF:function(a,b,c,d,e){return new P.ez(b,c,!0,a,d,"Invalid value")},
dj:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a8(a)
if(!(0>a)){if(typeof c!=="number")return H.a8(c)
t=a>c}else t=!0
if(t)throw H.l(P.bF(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a8(b)
if(!(a>b)){if(typeof c!=="number")return H.a8(c)
t=b>c}else t=!0
if(t)throw H.l(P.bF(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.cl(b)
return new P.mj(b,t,!0,a,c,"Index out of range")},
lp:function(a){return new P.q5(a)},
dh:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.dc(a);s.I();)t.push(s.gR())
if(b)return t
t.fixed$length=Array
return t},
ES:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
k:function(a,b){var t=P.dh(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fC:function(a){H.Ho(H.C(a))},
dz:function(a,b,c){return new H.hk(a,H.tJ(a,!1,!0,!1),null,null)},
oN:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dj(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a5()
s=c<t}else s=!0
return H.wz(s?C.b.c2(a,b,c):a)}if(!!J.av(a).$isfh)return H.Fj(a,b,P.dj(b,c,a.length,null,null,null))
return P.G6(a,b,c)},
wW:function(){var t=H.Fd()
if(t!=null)return P.wX(t,0,null)
throw H.l(new P.V("'Uri.base' is not supported"))},
wX:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a6(a,b+4)^58)*3|C.c.a6(a,b)^100|C.c.a6(a,b+1)^97|C.c.a6(a,b+2)^116|C.c.a6(a,b+3)^97)>>>0
if(s===0)return P.wV(b>0||c<c?C.c.L(a,b,c):a,5,null).gem()
else if(s===32)return P.wV(C.c.L(a,t,c),0,null).gem()}r=H.a(new Array(8),[P.D])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xp(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.at()
if(p>=b)if(P.xp(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.U()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a5()
if(typeof l!=="number")return H.a8(l)
if(k<l)l=k
if(typeof m!=="number")return m.a5()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a5()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a5()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aD(a,"..",m)))h=l>m+2&&C.c.aD(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aD(a,"file",b)){if(o<=b){if(!C.c.aD(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.L(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aB(a,m,l,"/");++l;++k;++c}else{a=C.c.L(a,b,m)+"/"+C.c.L(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aD(a,"http",b)){if(q&&n+3===m&&C.c.aD(a,"80",n+1))if(b===0&&!0){a=C.c.aB(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aD(a,"https",b)){if(q&&n+4===m&&C.c.aD(a,"443",n+1))if(b===0&&!0){a=C.c.aB(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
p-=b
o-=b
n-=b
t=4+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="https"}else i=null
j=!0}}}else i=null
if(j){if(b>0||c<a.length){a=C.c.L(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qJ(a,p,o,n,m,l,k,i,null)}return P.Go(a,b,c,p,o,n,m,l,k,i)},
wZ:function(a,b){return C.b.hb(a.split("&"),P.mU(),new P.pi(b))},
G9:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pf(a)
s=H.cz(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Y(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.di(C.c.L(a,p,q),null,null)
if(J.cw(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.u(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.di(C.c.L(a,p,c),null,null)
if(J.cw(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.u(r,o)
r[o]=m
return r},
wY:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pg(a)
s=new P.ph(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.Y(a,q)
if(m===58){if(q===b){++q
if(C.c.Y(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.b8(C.b.gb7(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.G9(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aq()
h=j[1]
if(typeof h!=="number")return H.a8(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aq()
i=j[3]
if(typeof i!=="number")return H.a8(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.av(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.u(g,f)
g[f]=0
i=f+1
if(i>=16)return H.u(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.cY()
i=C.d.aU(e,8)
if(f<0||f>=16)return H.u(g,f)
g[f]=i
i=f+1
if(i>=16)return H.u(g,i)
g[i]=e&255
f+=2}}return g},
Go:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gw(a,b,d)
else{if(d===b)P.hZ(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Gx(a,t,e-1):""
r=P.Gs(a,e,f,!1)
if(typeof f!=="number")return f.U()
q=f+1
if(typeof g!=="number")return H.a8(g)
p=q<g?P.Gu(H.di(C.c.L(a,q,g),null,new P.re(a,f)),j):null}else{s=""
r=null
p=null}o=P.Gt(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a5()
n=h<i?P.Gv(a,h+1,i,null):null
return new P.kb(j,s,r,p,o,n,i<c?P.Gr(a,i+1,c):null,null,null,null,null,null)},
x8:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hZ:function(a,b,c){throw H.l(new P.bD(c,a,b))},
Gu:function(a,b){if(a!=null&&J.b8(a,P.x8(b)))return
return a},
Gs:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.V()
t=c-1
if(C.c.Y(a,t)!==93)P.hZ(a,b,"Missing end `]` to match `[` in host")
P.wY(a,b+1,t)
return C.c.L(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a8(c)
s=b
for(;s<c;++s)if(C.c.Y(a,s)===58){P.wY(a,b,c)
return"["+a+"]"}return P.Gz(a,b,c)},
Gz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a8(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Y(a,t)
if(p===37){o=P.xd(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c9("")
m=C.c.L(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.L(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.u(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c9("")
if(s<t){r.N+=C.c.L(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.hZ(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Y(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c9("")
m=C.c.L(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.x9(p)
t+=k
s=t}}}}if(r==null)return C.c.L(a,b,c)
if(s<c){m=C.c.L(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
Gw:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xb(C.c.a6(a,b)))P.hZ(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a6(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.u(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.hZ(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.L(a,b,c)
return P.Gp(s?a.toLowerCase():a)},
Gp:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gx:function(a,b,c){var t=P.fx(a,b,c,C.Z,!1)
return t==null?C.c.L(a,b,c):t},
Gt:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fx(a,b,c,C.D,!1)
if(r==null)r=C.c.L(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ae(r,"/"))r="/"+r
return P.Gy(r,e,f)},
Gy:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ae(a,"/"))return P.GA(a,!t||c)
return P.GB(a)},
Gv:function(a,b,c,d){var t=P.fx(a,b,c,C.k,!1)
return t==null?C.c.L(a,b,c):t},
Gr:function(a,b,c){var t=P.fx(a,b,c,C.k,!1)
return t==null?C.c.L(a,b,c):t},
xd:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Y(a,b+1)
r=C.c.Y(a,t)
q=H.rk(s)
p=H.rk(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aU(o,4)
if(t>=8)return H.u(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hD(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.L(a,b,b+3).toUpperCase()
return},
x9:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a6("0123456789ABCDEF",a>>>4)
t[2]=C.c.a6("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fG(a,6*r)&63|s
if(p>=q)return H.u(t,p)
t[p]=37
n=p+1
m=C.c.a6("0123456789ABCDEF",o>>>4)
if(n>=q)return H.u(t,n)
t[n]=m
m=p+2
n=C.c.a6("0123456789ABCDEF",o&15)
if(m>=q)return H.u(t,m)
t[m]=n
p+=3}}return P.oN(t,0,null)},
fx:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.db(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a5()
if(typeof c!=="number")return H.a8(c)
if(!(r<c))break
c$0:{o=s.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.u(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xd(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.hZ(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Y(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.x9(o)}}if(p==null)p=new P.c9("")
p.N+=C.c.L(a,q,r)
p.N+=H.C(m)
if(typeof l!=="number")return H.a8(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a5()
if(q<c)p.N+=s.L(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
xc:function(a){if(C.c.ae(a,"."))return!0
return C.c.be(a,"/.")!==-1},
GB:function(a){var t,s,r,q,p,o,n
if(!P.xc(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(J.b8(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.u(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.b6(t,"/")},
GA:function(a,b){var t,s,r,q,p,o
if(!P.xc(a))return!b?P.xa(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b8(C.b.gb7(t),"..")){if(0>=t.length)return H.u(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.u(t,0)
s=J.rF(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b8(C.b.gb7(t),".."))t.push("")
if(!b){if(0>=t.length)return H.u(t,0)
s=P.xa(t[0])
if(0>=t.length)return H.u(t,0)
t[0]=s}return C.b.b6(t,"/")},
xa:function(a){var t,s,r,q
t=J.bc(a)
s=t.gm(a)
if(typeof s!=="number")return s.at()
if(s>=2&&P.xb(t.Y(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a8(s)
if(!(r<s))break
q=t.Y(a,r)
if(q===58)return C.c.L(a,0,r)+"%3A"+C.c.W(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.u(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Gq:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Y(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dG("Invalid URL encoding"))}}return t},
qT:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a8(c)
t=J.db(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Y(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.L(a,b,c)
else o=new H.kR(t.L(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Y(a,s)
if(q>127)throw H.l(P.dG("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dG("Truncated URI"))
o.push(P.Gq(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pm(!1).fX(o)},
xb:function(a){var t=a|32
return 97<=t&&t<=122},
wV:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bc(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
c$0:{p=s.Y(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bD("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bD("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
p=s.Y(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb7(t)
if(p!==44||r!==m+7||!s.aD(a,"base64",m+1))throw H.l(new P.bD("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hx(0,a,o,s.gm(a))
else{l=P.fx(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aB(a,o,s.gm(a),l)}return new P.pe(a,t,c)},
GI:function(){var t,s,r,q,p
t=P.ES(22,new P.r7(),!0,P.d8)
s=new P.r6(t)
r=new P.r8()
q=new P.r9()
p=s.$2(0,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",14)
r.$3(p,":",34)
r.$3(p,"/",3)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(14,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",15)
r.$3(p,":",34)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(15,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,"%",225)
r.$3(p,":",34)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(1,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,":",34)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(2,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
r.$3(p,"/",131)
r.$3(p,".",146)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(3,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",68)
r.$3(p,".",18)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(4,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"[",232)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(5,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(6,231)
q.$3(p,"19",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(7,231)
q.$3(p,"09",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
r.$3(s.$2(8,8),"]",5)
p=s.$2(9,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",16)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(16,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",17)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(17,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(10,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",18)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(18,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",19)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(19,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(11,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(12,236)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
r.$3(p,"?",12)
r.$3(p,"#",205)
p=s.$2(13,237)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
r.$3(p,"?",13)
q.$3(s.$2(20,245),"az",21)
p=s.$2(21,245)
q.$3(p,"az",21)
q.$3(p,"09",21)
r.$3(p,"+-.",21)
return t},
xp:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xq()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.u(t,d)
r=t[d]
q=C.c.a6(a,s)^96
p=J.i3(r,q>95?31:q)
if(typeof p!=="number")return p.aH()
d=p&31
o=C.d.aU(p,5)
if(o>=8)return H.u(e,o)
e[o]=s}return d},
d9:function d9(){},
bv:function bv(){},
dK:function dK(a,b){this.a=a
this.b=b},
l9:function l9(){},
la:function la(){},
U:function U(){},
d0:function d0(a){this.a=a},
lg:function lg(){},
lh:function lh(){},
eh:function eh(){},
fi:function fi(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mj:function mj(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eG:function eG(a){this.a=a},
dR:function dR(a){this.a=a},
bM:function bM(a){this.a=a},
nx:function nx(){},
jN:function jN(){},
l6:function l6(a){this.a=a},
q5:function q5(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(a,bE,$ti){this.a=a
this.bE=bE
this.$ti=$ti},
D:function D(){},
o:function o(){},
jm:function jm(){},
p:function p(){},
bq:function bq(){},
d5:function d5(){},
dp:function dp(){},
ac:function ac(){},
dy:function dy(){},
eA:function eA(){},
dQ:function dQ(){},
B:function B(){},
c9:function c9(N){this.N=N},
eI:function eI(){},
pi:function pi(a){this.a=a},
pf:function pf(a){this.a=a},
pg:function pg(a){this.a=a},
ph:function ph(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
re:function re(a,b){this.a=a
this.b=b},
pe:function pe(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(){},
r6:function r6(a){this.a=a},
r8:function r8(){},
r9:function r9(){},
qJ:function qJ(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pU:function pU(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
xx:function(a){var t,s,r,q,p
if(a==null)return
t=P.mU()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
H0:function(a){var t,s
t=new P.bj(0,$.ao,null,[null])
s=new P.dV(t,[null])
a.then(H.dm(new P.rf(s),1))["catch"](H.dm(new P.rg(s),1))
return t},
rR:function(){var t=$.vl
if(t==null){t=J.km(window.navigator.userAgent,"Opera",0)
$.vl=t}return t},
vo:function(){var t=$.vm
if(t==null){t=P.rR()!==!0&&J.km(window.navigator.userAgent,"WebKit",0)
$.vm=t}return t},
vn:function(){var t,s
t=$.vi
if(t!=null)return t
s=$.vj
if(s==null){s=J.km(window.navigator.userAgent,"Firefox",0)
$.vj=s}if(s)t="-moz-"
else{s=$.vk
if(s==null){s=P.rR()!==!0&&J.km(window.navigator.userAgent,"Trident/",0)
$.vk=s}if(s)t="-ms-"
else t=P.rR()===!0?"-o-":"-webkit-"}$.vi=t
return t},
qO:function qO(){},
qQ:function qQ(a,b){this.a=a
this.b=b},
pH:function pH(){},
pI:function pI(a,b){this.a=a
this.b=b},
qP:function qP(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(a){this.a=a},
rg:function rg(a){this.a=a},
kX:function kX(){},
kY:function kY(a){this.a=a},
GG:function(a){var t,s,r
t=new P.bj(0,$.ao,null,[null])
s=new P.ka(t,[null])
a.toString
r=W.S
W.eM(a,"success",new P.r5(a,s),!1,r)
W.eM(a,"error",s.gdR(),!1,r)
return t},
l8:function l8(){},
r5:function r5(a,b){this.a=a
this.b=b},
mi:function mi(){},
nu:function nu(){},
hF:function hF(){},
p8:function p8(){},
Gn:function(a){var t=new P.qz(0,0)
t.eY(a)
return t},
qq:function qq(){},
qz:function qz(a,b){this.a=a
this.b=b},
qA:function qA(){},
bS:function bS(){},
kq:function kq(){},
ec:function ec(){},
lr:function lr(){},
ls:function ls(){},
lt:function lt(){},
lu:function lu(){},
lv:function lv(){},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lE:function lE(){},
lF:function lF(){},
lG:function lG(){},
lU:function lU(){},
cp:function cp(){},
mf:function mf(){},
d4:function d4(){},
mN:function mN(){},
iK:function iK(){},
j3:function j3(){},
n9:function n9(){},
na:function na(){},
d6:function d6(){},
nr:function nr(){},
iL:function iL(){},
j4:function j4(){},
nI:function nI(){},
nN:function nN(){},
o8:function o8(){},
oM:function oM(){},
iM:function iM(){},
j5:function j5(){},
kx:function kx(a){this.a=a},
ca:function ca(){},
oP:function oP(){},
oR:function oR(){},
eF:function eF(){},
oZ:function oZ(){},
d7:function d7(){},
p9:function p9(){},
iN:function iN(){},
j6:function j6(){},
pk:function pk(){},
po:function po(){},
pp:function pp(){},
hV:function hV(){},
qF:function qF(){},
qG:function qG(){},
qH:function qH(){},
bg:function bg(){},
d8:function d8(){},
fJ:function fJ(){},
eS:function eS(){},
fK:function fK(){},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
bC:function bC(){},
e0:function e0(){},
kW:function kW(){},
ks:function ks(){},
nY:function nY(){},
qX:function qX(){},
jM:function jM(){},
iO:function iO(){},
j7:function j7(){}},W={
v2:function(a){var t=document.createElement("a")
return t},
yv:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yw:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
vd:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Gh:function(a){var t=new W.pS(a,null)
t.eV(a)
return t},
te:function(a,b,c){return W.vD(a,null,null,b,null,null,null,c).aR(new W.m9())},
vD:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e4
s=new P.bj(0,$.ao,null,[t])
r=new P.dV(s,[t])
q=new XMLHttpRequest()
C.M.hz(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.HI
W.eM(q,"load",new W.ma(r,q),!1,t)
W.eM(q,"error",r.gdR(),!1,t)
q.send()
return s},
mg:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
x7:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eM:function(a,b,c,d,e){var t=W.GQ(new W.q4(c))
t=new W.q3(0,a,b,t,!1,[e])
t.eW(a,b,c,!1,e)
return t},
GH:function(a){var t
if(!!J.av(a).$iseg)return a
t=new P.jX([],[],!1)
t.c=!0
return t.b2(a)},
GQ:function(a){var t=$.ao
if(t===C.e)return a
return t.fS(a,!0)},
al:function al(){},
eQ:function eQ(){},
kt:function kt(){},
eT:function eT(){},
cL:function cL(){},
kB:function kB(){},
fX:function fX(){},
h_:function h_(){},
kF:function kF(){},
eU:function eU(){},
kI:function kI(){},
fP:function fP(){},
ed:function ed(){},
kT:function kT(){},
i7:function i7(){},
fS:function fS(){},
kZ:function kZ(){},
l_:function l_(){},
fT:function fT(){},
fU:function fU(){},
l0:function l0(){},
bJ:function bJ(){},
ef:function ef(){},
iC:function iC(){},
pS:function pS(a,b){this.a=a
this.b=b},
jx:function jx(){},
pT:function pT(){},
i9:function i9(){},
l1:function l1(){},
l2:function l2(){},
l7:function l7(){},
eX:function eX(){},
ia:function ia(){},
eg:function eg(){},
ic:function ic(){},
id:function id(){},
lc:function lc(){},
ie:function ie(){},
ig:function ig(){},
iD:function iD(){},
iX:function iX(){},
ih:function ih(){},
ii:function ii(){},
k2:function k2(a,$ti){this.a=a
this.$ti=$ti},
ds:function ds(){},
li:function li(){},
fW:function fW(){},
lo:function lo(){},
S:function S(){},
aF:function aF(){},
lQ:function lQ(){},
cd:function cd(){},
f4:function f4(){},
iE:function iE(){},
iY:function iY(){},
lR:function lR(){},
lS:function lS(){},
lT:function lT(){},
lW:function lW(){},
lX:function lX(){},
iy:function iy(){},
co:function co(){},
m6:function m6(){},
f6:function f6(){},
iF:function iF(){},
iZ:function iZ(){},
iA:function iA(){},
e4:function e4(){},
m9:function m9(){},
ma:function ma(a,b){this.a=a
this.b=b},
hc:function hc(){},
me:function me(){},
hd:function hd(){},
f8:function f8(){},
mk:function mk(){},
mK:function mK(){},
hm:function hm(){},
hn:function hn(){},
n1:function n1(){},
n6:function n6(){},
hu:function hu(){},
jr:function jr(){},
nb:function nb(){},
nc:function nc(){},
hv:function hv(){},
cq:function cq(){},
js:function js(){},
iP:function iP(){},
j8:function j8(){},
np:function np(){},
nq:function nq(){},
ay:function ay(){},
jv:function jv(){},
iQ:function iQ(){},
j9:function j9(){},
nt:function nt(){},
ny:function ny(){},
nC:function nC(){},
nE:function nE(){},
e6:function e6(){},
nK:function nK(){},
cf:function cf(){},
jC:function jC(){},
iR:function iR(){},
ja:function ja(){},
nP:function nP(){},
jH:function jH(){},
fm:function fm(){},
jI:function jI(){},
ob:function ob(){},
oe:function oe(){},
of:function of(){},
og:function og(){},
cr:function cr(){},
jK:function jK(){},
fY:function fY(){},
h0:function h0(){},
fn:function fn(){},
cs:function cs(){},
jL:function jL(){},
iS:function iS(){},
jb:function jb(){},
fo:function fo(){},
ok:function ok(){},
ch:function ch(){},
ol:function ol(){},
om:function om(){},
or:function or(){},
ci:function ci(){},
e8:function e8(){},
oV:function oV(){},
oX:function oX(){},
cR:function cR(){},
cI:function cI(){},
p_:function p_(){},
iT:function iT(){},
jc:function jc(){},
p0:function p0(){},
fZ:function fZ(){},
h1:function h1(){},
p4:function p4(){},
ct:function ct(){},
jP:function jP(){},
iU:function iU(){},
jd:function jd(){},
fr:function fr(){},
jQ:function jQ(){},
e9:function e9(){},
pj:function pj(){},
pn:function pn(){},
fs:function fs(){},
jR:function jR(){},
ps:function ps(){},
jU:function jU(){},
pz:function pz(){},
eJ:function eJ(){},
ft:function ft(){},
pR:function pR(){},
hR:function hR(){},
iV:function iV(){},
je:function je(){},
k0:function k0(){},
iW:function iW(){},
jf:function jf(){},
pY:function pY(){},
pZ:function pZ(){},
k4:function k4(){},
iG:function iG(){},
j_:function j_(){},
qj:function qj(){},
hY:function hY(){},
iH:function iH(){},
j0:function j0(){},
qI:function qI(){},
k7:function k7(){},
iI:function iI(){},
j1:function j1(){},
k9:function k9(){},
iJ:function iJ(){},
j2:function j2(){},
qY:function qY(){},
qZ:function qZ(){},
q_:function q_(a){this.a=a},
q2:function q2(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hS:function hS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q3:function q3(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
q4:function q4(a){this.a=a},
bx:function bx(){},
lV:function lV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qR:function qR(){}},T={
tf:function(a,b,c,d){var t
H.Hw(a,"$isp",[P.D],"$asp")
t=new T.he(a,null,d,b,null)
t.eN(a,b,c,d)
return t},
ws:function(a,b){return new T.nz(0,a,new Uint8Array(H.cz(b==null?32768:b)))},
Gb:function(a){var t=new T.pD(-1,0,0,0,0,null,null,"",[])
t.eS(a)
return t},
Gc:function(a,b){var t=new T.pE(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eT(a,b)
return t},
f7:function(a){var t=new T.mb(null,0,2147483647)
t.eM(a)
return t},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy},
dd:function dd(a){this.a=a},
he:function he(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nz:function nz(a,b,c){this.a=a
this.b=b
this.c=c},
pD:function pD(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pE:function pE(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db},
pF:function pF(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy},
pC:function pC(a){this.a=a},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kH:function kH(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
kK:function kK(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
lb:function lb(){},
m4:function m4(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
Hj:function(){var t,s,r,q,p,o
A.rj()
W.te(C.c.an("../",N.nG())+"navbar.txt",null,null).aR(O.Hl())
t=new P.dK(Date.now(),!1)
s=H.jE(t)===4&&H.jD(t)===1?"_sauce.png":".png"
r=[K.ff]
q=new F.cb("images/Credits/jadedResearcher_icon"+s,A.cm(C.c.W("#3da35a",1)),"jadedResearcher",H.a([],r))
$.$get$cj().push(q)
$.yF=q
q=new F.cb("images/Credits/Smith_of_Dreams_icon"+s,A.cm(C.c.W("#9630BF",1)),"karmicRetribution",H.a([],r))
$.$get$cj().push(q)
$.yG=q
q="images/Credits/pl_icon"+s
p=C.c.W("#000066",1)
q=new F.cb(q,A.cm(p),"paradoxLands",H.a([],r))
$.$get$cj().push(q)
$.yI=q
q="images/Credits/ab_icon"+s
o=C.c.W("#ff0000",1)
q=new F.cb(q,A.cm(o),"authorBot",H.a([],r))
$.$get$cj().push(q)
$.yz=q
q=new F.cb("images/Credits/abj_icon"+s,A.cm(C.c.W("#ffa500",1)),"authorBotJunior",H.a([],r))
$.$get$cj().push(q)
$.yA=q
q=new F.cb("images/Credits/mlh_icon"+s,A.cm(C.c.W("#fcf000",1)),"forgetfulIdealist",H.a([],r))
$.$get$cj().push(q)
$.yC=q
q=new F.cb("images/Credits/hb_icon"+s,A.cm(C.c.W("#ffc000",1)),"humanBot",H.a([],r))
$.$get$cj().push(q)
$.yD=q
p=new F.cb("images/Credits/rs_icon"+s,A.cm(p),"recursiveSlacker",H.a([],r))
$.$get$cj().push(p)
$.yJ=p
p=new F.cb("images/Credits/aw_icon"+s,A.cm(C.c.W("#494132",1)),"aspiringWatcher",H.a([],r))
$.$get$cj().push(p)
$.yy=p
p=new F.cb("images/Credits/mi_icon"+s,A.cm(C.c.W("#003300",1)),"manicInsomniac",H.a([],r))
$.$get$cj().push(p)
$.yH=p
p=new F.cb("images/Credits/wm_icon"+s,A.cm(C.c.W("#3399ff",1)),"wooMod",H.a([],r))
$.$get$cj().push(p)
$.yN=p
p="images/Credits/io_icon"+s
q=C.c.W("#00ff00",1)
p=new F.cb(p,A.cm(q),"insufferableOracle",H.a([],r))
$.$get$cj().push(p)
$.yE=p
p=new F.cb("images/Credits/sb_icon"+s,A.cm(C.c.W("#fff000",1)),"someBody",H.a([],r))
$.$get$cj().push(p)
$.yL=p
q=new F.cb("images/Credits/shogun_icon"+s,A.cm(q),"shogun",H.a([],r))
$.$get$cj().push(q)
$.yK=q
q=new F.cb("images/Credits/tg_icon"+s,A.cm(C.c.W("#ff3399",1)),"tableGuardian",H.a([],r))
$.$get$cj().push(q)
$.yM=q
r=new F.cb("images/Credits/dm_icon"+s,A.cm(o),"dilletantMathematician",H.a([],r))
$.$get$cj().push(r)
$.yB=r
T.kf()
W.eM(window,"scroll",new T.rv(),!1,W.S)},
kf:function(){var t=0,s=P.bh(),r,q,p,o
var $async$kf=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:t=2
return P.ck(T.uP(),$async$kf)
case 2:r=$.$get$cj(),q=r.length,p=0
case 3:if(!(p<r.length)){t=5
break}t=6
return P.ck(r[p].bA(),$async$kf)
case 6:case 4:r.length===q||(0,H.bT)(r),++p
t=3
break
case 5:o=document.querySelector("#newspostsMain")
$.$get$xE().cN(0,o)
return P.bl(null,s)}})
return P.bm($async$kf,s)},
uP:function(){var t=0,s=P.bh(),r,q,p,o,n
var $async$uP=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:r=document
q=r.querySelector("#newspostsMain")
p=r.createElement("div")
p.classList.add("HeadshotContainer")
for(r=$.$get$cj(),o=r.length,n=0;n<r.length;r.length===o||(0,H.bT)(r),++n)r[n].cO(p)
q.appendChild(p)
return P.bl(null,s)}})
return P.bm($async$uP,s)},
rv:function rv(){},
FB:function(a,b,c,d,e){var t,s
t=[P.B]
s=H.a([],t)
t=new T.hG("Glitch",0.01,0.01,0.01,s,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.U]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.H(null,null,A.a1),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fN]),1)
t.a2(a,b,c,d,e)
return t},
hG:function hG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
c1:function c1(a,b){this.a=a
this.b=b},
z2:function(a,b,c,d){var t,s,r,q
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ai(s[q],8)
return t.b1(b)},
z1:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dY(a,b)
for(q=0;q<c;++q){p=r.a8(8)
if(q>=t)return H.u(s,q)
s[q]=p}return s},
z0:function(a,b,c,d){var t,s,r,q,p
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cO(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ai(q[p],r)
return t.b1(b)},
z_:function(a,b,c,d){var t,s,r,q,p,o
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dY(a,b)
for(o=0;o<c;++o){r=p.a8(q)
if(o>=t)return H.u(s,o)
s[o]=r}return s}},S={kr:function kr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},bG:function bG(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},i6:function i6(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m8:function m8(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mL:function mL(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},n4:function n4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},oa:function oa(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},fj:function fj(){},uw:function uw(){},ux:function ux(){},uy:function uy(){},rX:function rX(){},t_:function t_(){},rN:function rN(){},ug:function ug(){},uA:function uA(){},uB:function uB(){},kN:function kN(){},u7:function u7(){},u3:function u3(){},mQ:function mQ(){},rS:function rS(){},rI:function rI(){},l4:function l4(){},tQ:function tQ(){},l5:function l5(){},nD:function nD(){},un:function un(){},uk:function uk(){},uo:function uo(){},rH:function rH(){},m1:function m1(){},kL:function kL(){},rM:function rM(){},rL:function rL(){},u8:function u8(){},up:function up(){},u9:function u9(){},rZ:function rZ(){},rY:function rY(){},um:function um(){},ul:function ul(){},p1:function p1(){},ur:function ur(){},rP:function rP(){},rQ:function rQ(){},uz:function uz(){},ht:function ht(){},tW:function tW(){},tX:function tX(){},tY:function tY(){},tZ:function tZ(){},uh:function uh(){},ui:function ui(){},uj:function uj(){},tV:function tV(){},u0:function u0(){},u1:function u1(){},tb:function tb(){},tc:function tc(){},td:function td(){},u2:function u2(){},u_:function u_(){},rJ:function rJ(){},ut:function ut(){},uu:function uu(){},us:function us(){}},K={bU:function bU(a,b){this.a=a
this.b=b},
va:function(){var t=$.v9
if(t==null){t=new K.kP(H.a([],[K.ff]))
$.v9=t}return t},
EW:function(a,b){var t=new K.ff(b,null,null)
t.eP(a,b)
return t},
kP:function kP(a){this.a=a},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
mO:function mO(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
o5:function o5(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yb:function(a,b,c,d,e){var t,s,r
t=P.B
s=A.dJ
r=P.D
r=new L.aK(P.A(null,null,null,t,s),P.A(null,null,null,r,s),P.A(null,null,null,t,r),P.A(null,null,null,r,t))
r.j(0,$.aQ,L.e("#FF9B00"),!0)
r.j(0,$.aS,L.e("#FF9B00"),!0)
r.j(0,$.aR,L.e("#FF8700"),!0)
r.j(0,$.b0,L.e("#7F7F7F"),!0)
r.j(0,$.b_,L.e("#727272"),!0)
r.j(0,$.aU,L.e("#A3A3A3"),!0)
r.j(0,$.aV,L.e("#999999"),!0)
r.j(0,$.aT,L.e("#898989"),!0)
r.j(0,$.aZ,L.e("#EFEFEF"),!0)
r.j(0,$.aY,L.e("#DBDBDB"),!0)
r.j(0,$.aX,L.e("#C6C6C6"),!0)
r.j(0,$.aW,L.e("#ADADAD"),!0)
s=[t]
t=new L.fH(0.01,0.01,0.01,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.U]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.k(H.a(["Blank","Null","Boring","Error"],s),t),P.k(H.a(["Blank","Null","Boring","Error"],s),t),P.k(H.a(["Nothing","Errors","Glitches"],s),t),P.k(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fN]),Q.H(null,null,A.a1))
t.af(a,b,c,d,e)
return t},
e:function(a){if(C.c.ae(a,"#"))return A.cm(C.c.W(a,1))
else return A.cm(a)},
fH:function fH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o7:function o7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
oS:function oS(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},M={kw:function kw(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},fO:function fO(a,b){this.a=a
this.b=b},l3:function l3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},h3:function h3(){},bB:function bB(a,b){this.a=a
this.b=b},on:function on(a){this.a=a},pv:function pv(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},U={kA:function kA(){},n3:function n3(a){this.a=a},nw:function nw(a){this.a=a},oJ:function oJ(){},oK:function oK(a){this.a=a},oL:function oL(a){this.a=a},le:function le(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ad,dV,dW,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.ad=ad
_.dV=dV
_.dW=dW
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lH:function lH(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},n5:function n5(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},c:function c(a){this.a=a},X:function X(b,c,a){this.b=b
this.c=c
this.a=a},ag:function ag(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},p2:function p2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
Ga:function(a){if(J.db(a).ae(a," "))return C.c.W(a,1)
return a},
pw:function pw(a){this.a=a},
px:function px(a,b){this.a=a
this.b=b},
py:function py(a,b){this.a=a
this.b=b}},O={kC:function kC(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},c5:function c5(){},dq:function dq(){},kG:function kG(a){this.a=a},eE:function eE(){},ij:function ij(){},
Hn:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.nG()
a=J.y3(a,P.dz("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.ry(t))
s=document
J.uY(s.querySelector("#navbar"),"beforeend",a,C.o,null)
if(J.b8(O.Hb("seerOfVoid",null),"true"))P.zx(new O.rz(),P.d5)
r=new P.dK(Date.now(),!1)
if(H.jE(r)===4&&H.jD(r)===1)J.uV(s.querySelector("body")).h(0,"voidbody")
q=H.jE(r)
p=H.jD(r)
o=C.a.C(H.uc(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jF(null,null)
k.cX(H.di(l,null,null))
k.hw()
if($.G0||k.a.cE()>0.99)H.kj(s.querySelector("#today"),"$iseQ").href=C.c.an("../",t)+"dead_index.html?seed="+l
else H.kj(s.querySelector("#today"),"$iseQ").href=C.c.an("../",t)+"index2.html?seed="+l},
Hb:function(a,b){var t,s,r,q
t=P.wW().gcL().n(0,a)
if(t!=null)t=P.qT(t,0,J.cl(t),C.n,!1)
if(t!=null)return t
s=$.xI
if(s.length!==0){r=J.y5(window.location.href,J.y0(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wX(H.xK(s,q,"")+"?"+$.xI,0,null).gcL().n(0,a)}return},
Hy:function(){var t,s,r,q
t=document
J.uV(t.querySelector("body")).h(0,"voidbody")
s=new W.k2(t.querySelectorAll(".void"),[null])
for(t=new H.es(s,s.gm(s),0,null,[null]);t.I();){r=t.d
q=J.xW(J.rG(r))
if(q==="none"||q.length===0)O.Hs(r)
else O.Hd(r)}},
Hs:function(a){var t,s
if(a==null)return
t=J.bI(a)
s=t.gaJ(a)
J.v0(s,!!t.$isfn?"inline":"block")},
Hd:function(a){if(a==null)return
J.v0(J.rG(a),"none")},
Ht:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fC("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.dZ(s,",")
if(!J.xS(r,a))window.localStorage.setItem(t,H.C(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cv(q)
P.fC("Saving isn't possible....you don't have local storage")}},
ry:function ry(a){this.a=a},
rz:function rz(){},
rx:function rx(){},
cV:function cV(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={oY:function oY(a){this.a=a},nV:function nV(a){this.a=a},kM:function kM(a){this.a=a},m2:function m2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},m3:function m3(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},ns:function ns(b,a){this.b=b
this.a=a},dP:function dP(a,b){this.a=a
this.b=b},ae:function ae(a,b){this.a=a
this.b=b},d_:function d_(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c_:function c_(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},T:function T(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},i8:function i8(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cX:function cX(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kQ:function kQ(c,a,b){this.c=c
this.a=a
this.b=b},bw:function bw(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jz:function jz(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ix:function ix(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jB:function jB(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},o4:function o4(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},o6:function o6(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},oh:function oh(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},dO:function dO(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ng:function(){var t=0,s=P.bh(),r,q
var $async$ng=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:P.fC("loading big bads")
r=$
q=J
t=2
return P.ck(A.et("BigBadLists/bigBads.txt",!1,!1,null),$async$ng)
case 2:r.wr=q.dZ(b,"\n")
return P.bl(null,s)}})
return P.bm($async$ng,s)},
GZ:function(a){var t,s,r,q,p,o
t=J.dZ(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bT)(t),++q){p=t[q]
o=J.bc(p)
r+=" "+(J.y8(o.n(p,0))+o.W(p,1))}return r}},A={kS:function kS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
i:function(a,b,c,d,e){var t=new A.a1(c,e,null,a,!1,P.a4(null,null,null,G.a0),0,3)
t.M(a,b,c,!1,e)
return t},
a1:function a1(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mB:function mB(){},
mA:function mA(){},
fN:function fN(){},
ee:function(a,b,c,d){var t=new A.dJ(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eL(a,b,c,d)
return t},
rO:function(a,b,c,d){var t=A.ee(0,0,0,255)
t.b=C.a.ac(C.d.am(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ac(C.d.am(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ac(C.d.am(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ac(C.d.am(d*255),0,255)
return t},
yS:function(a,b){if(b){if(typeof a!=="number")return a.aH()
return A.ee((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aH()
return A.ee((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
cm:function(a){return A.yS(H.di(a,16,new A.rc()),a.length>=8)},
dJ:function dJ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
rc:function rc(){},
wn:function(){if($.wl)return
$.wl=!0
Z.zo()},
et:function(a,b,c,d){var t=0,s=P.bh(),r,q,p,o,n
var $async$et=P.bn(function(e,f){if(e===1)return P.bk(f,s)
while(true)switch(t){case 0:A.wn()
t=$.$get$cU().a0(0,a)?3:5
break
case 3:q=$.$get$cU().n(0,a)
p=J.av(q)
if(!!p.$isdO){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cp(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.C(J.uX(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.tU==null?8:9
break
case 8:t=10
return P.ck(A.n0(),$async$et)
case 10:case 9:n=$.tU.eq(a)
t=n!=null?11:12
break
case 11:t=13
return P.ck(A.mW(n),$async$et)
case 13:if(!$.$get$cU().a0(0,a))$.$get$cU().i(0,a,new Y.dO(a,null,H.a([],[[P.eW,,]]),[null]))
r=$.$get$cU().n(0,a).b
t=1
break
case 12:case 7:r=A.EU(a,!1,d)
t=1
break
case 4:case 1:return P.bl(r,s)}})
return P.bm($async$et,s)},
n0:function(){var t=0,s=P.bh(),r
var $async$n0=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.ck(A.et("manifest/manifest.txt",!1,!0,$.vz),$async$n0)
case 2:r.tU=b
return P.bl(null,s)}})
return P.bm($async$n0,s)},
ET:function(a){if(!$.$get$cU().a0(0,a))$.$get$cU().i(0,a,new Y.dO(a,null,H.a([],[[P.eW,,]]),[null]))
return $.$get$cU().n(0,a)},
EU:function(a,b,c){var t
if($.$get$cU().a0(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vy(C.b.gb7(a.split("."))).a
t=A.ET(a)
c.b_(A.wk(a,!1)).aR(new A.mZ(t))
return t.cp(0)},
mW:function(a){var t=0,s=P.bh(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mW=P.bn(function(b,a0){if(b===1)return P.bk(a0,s)
while(true)switch(t){case 0:t=3
return P.ck(A.et(a+".bundle",!1,!0,null),$async$mW)
case 3:q=a0
p=C.c.L(a,0,C.c.e5(a,$.$get$wm()))
o=P.d5
n=new P.dV(new P.bj(0,$.ao,null,[o]),[o])
m=H.a([],[P.cE])
for(o=J.xX(q),l=o.length,k=[[P.eW,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bT)(o),++i){h=o[i]
g=J.bI(h)
f=Z.vy(C.b.gb7(J.dZ(g.gK(h),"."))).a
e=p+"/"+H.C(g.gK(h))
if($.$get$cU().a0(0,e)){m.push(A.et(e,!1,!1,null))
continue}d=H.kj(g.gbd(h),"$isd8")
if(!$.$get$cU().a0(0,e))$.$get$cU().i(0,e,new Y.dO(e,null,H.a([],k),j))
c=$.$get$cU().n(0,e)
m.push(c.cp(0))
f.b5(d.buffer).aR(new A.mX(f,c))}P.zy(m,null,!1).aR(new A.mY(n))
r=n.a
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$mW,s)},
hp:function(a,b){var t=0,s=P.bh(),r,q,p,o,n
var $async$hp=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:if($.$get$tT().a0(0,a)){r=$.$get$tT().n(0,a)
t=1
break}q=W.fm
p=new P.bj(0,$.ao,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eM(n,"load",new A.n_(new P.dV(p,[q]),n),!1,W.S)
n.src=A.wk(a,!1)
r=p
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$hp,s)},
wk:function(a,b){if(C.c.ae(a,"/")){a=C.c.W(a,1)
b=!0}else b=!1
if(b)return H.C(window.location.protocol)+"//"+H.C(window.location.host)+"/"+a
return C.c.an("../",N.nG())+a},
mZ:function mZ(a){this.a=a},
mX:function mX(a,b){this.a=a
this.b=b},
mY:function mY(a){this.a=a},
n_:function n_(a,b){this.a=a
this.b=b},
nB:function nB(){},
jy:function jy(){},
jF:function jF(a,b){this.a=a
this.b=b},
rj:function(){var t=0,s=P.bh(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rj=P.bn(function(a0,a1){if(a0===1)return P.bk(a1,s)
while(true)switch(t){case 0:if($.xy){t=1
break}$.xy=!0
D.G5()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$b().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bH(n,o,0.6)
$.$get$b().h(0,o)
$.vO=o
o=H.a(["ceramic"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.bO=o
o=H.a(["bone"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,0.2)
$.$get$b().h(0,o)
$.b9=o
o=H.a(["wood"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.W=o
o=H.a(["plastic"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.az=o
o=H.a(["rubber"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.c7=o
o=H.a(["paper"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.L=o
o=H.a(["cloth","fabric"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.O=o
o=H.a(["glass"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.b6=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.bV=o
o=H.a(["flesh","meat","muscle"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.bi=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bH(n,o,3.1)
$.$get$b().h(0,o)
$.br=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.ce=o
o=H.a(["plant","leaf","vine"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.b2=o
o=H.a(["feathery"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bH(n,o,0.1)
$.$get$b().h(0,o)
$.bQ=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bH(n,o,-13)
$.$get$b().h(0,o)
$.bP=o
o=H.a(["stone","rock","concrete"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$b().h(0,o)
$.au=o
o=H.a(["legendary"],p)
n=$.mz
H.a([],p)
o=new G.bH(n,o,13)
$.$get$b().h(0,o)
$.Z=o
o=H.a(["Unbeatable"],p)
n=$.mz
H.a([],p)
o=new G.bH(n,o,40.37)
$.$get$b().h(0,o)
$.EA=o
o=$.I
H.a([],p)
o=new G.aJ(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,o)
$.at=o
o=$.tE
H.a([],p)
o=new G.aJ(o,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,o)
$.b1=o
o=$.tE
H.a([],p)
o=new G.aJ(o,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,o)
$.aj=o
o=$.I
H.a([],p)
o=new G.aJ(o,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,o)
$.bo=o
o=$.G
H.a([],p)
o=new G.aJ(o,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,o)
$.c0=o
o=$.I
H.a([],p)
o=new G.aJ(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,o)
$.b7=o
o=$.I
H.a([],p)
o=new G.aJ(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,o)
$.bW=o
o=$.I
H.a([],p)
o=new G.aJ(o,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,o)
$.aC=o
o=$.G
H.a([],p)
o=new G.aJ(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,o)
$.aM=o
o=$.q
H.a([],p)
o=new G.aJ(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,o)
$.bs=o
o=$.q
H.a([],p)
o=new G.aJ(o,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aJ(o,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,o)
$.be=o
o=$.I
H.a([],p)
o=new G.aJ(o,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,o)
$.bf=o
o=$.I
H.a([],p)
o=new G.aJ(o,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,o)
$.ap=o
o=$.I
H.a([],p)
o=new G.aJ(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,o)
$.ai=o
o=$.I
H.a([],p)
o=new G.aJ(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aJ(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aJ(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,o)
$.ar=o
o=$.I
H.a([],p)
o=new G.aJ(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,o)
$.aA=o
o=$.I
H.a([],p)
o=new G.aJ(o,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,o)
$.b5=o
o=$.I
H.a([],p)
o=new G.aJ(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,o)
$.bu=o
o=$.I
H.a([],p)
o=new G.aJ(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,o)
$.a2=o
o=$.mz
H.a([],p)
o=new G.aJ(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,o)
$.R=o
o=$.mz
H.a([],p)
o=new G.aJ(o,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,o)
$.N=o
o=$.I
H.a([],p)
o=new G.aJ(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,o)
$.aw=o
o=$.q
H.a([],p)
o=new G.aJ(o,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,o)
$.aL=o
o=$.I
H.a([],p)
o=new G.aJ(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,o)
$.aG=o
o=$.I
H.a([],p)
o=new G.aJ(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,o)
$.b4=o
o=$.I
H.a([],p)
o=new G.aJ(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,o)
$.bK=o
o=$.I
H.a([],p)
o=new G.aJ(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,o)
$.bp=o
o=$.I
H.a([],p)
o=new G.aJ(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,o)
$.c6=o
o=$.I
H.a([],p)
o=new G.aJ(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,o)
$.aq=o
o=$.I
H.a([],p)
o=new G.aJ(o,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,o)
$.ab=o
o=$.q
H.a([],p)
o=new G.aJ(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,o)
$.aN=o
o=$.I
H.a([],p)
o=new G.aJ(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,o)
$.a9=o
o=$.I
H.a([],p)
o=new G.aJ(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,o)
$.aP=o
o=$.I
H.a([],p)
o=new G.aJ(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,o)
$.aH=o
o=$.I
H.a([],p)
o=new G.aJ(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,o)
$.bb=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.af(n,o,0.1)
$.$get$b().h(0,o)
$.mr=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.fb=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tq=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tz=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tw=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vH=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tl=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.hh=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vQ=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mq=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ms=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w5=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.en=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wd=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mp=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tn=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.e5=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ts=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w9=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wb=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wf=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vK=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.fa=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w_=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.th=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w4=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.as=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.jg=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ji=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ti=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.we=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wc=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tu=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tm=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vR=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,1.3)
$.$get$b().h(0,o)
$.tv=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vL=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wa=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w7=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.dg=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.hg=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tC=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w8=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tB=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tx=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ty=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mv=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.jh=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.Ac=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vT=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vZ=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w6=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a0
l=[m]
k=H.a([$.E,$.at,$.aM],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$b().h(0,o)
$.Bw=o
o=H.a([],p)
n=$.w
k=H.a([$.ab,$.at],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.B1=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.b9,$.au],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$b().h(0,o)
$.Bx=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.b9,$.E],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$b().h(0,o)
$.vG=o
o=H.a([],p)
n=$.w
k=H.a([$.b4,$.aG],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.E9=o
o=H.a(["tatami"],p)
n=$.w
k=H.a([$.O,$.W],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$b().h(0,o)
$.Eo=o
o=H.a(["mesh","chain link"],p)
n=$.w
k=H.a([$.O,$.E],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$b().h(0,o)
$.Cw=o
o=H.a(["foil"],p)
n=$.w
k=H.a([$.L,$.E],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$b().h(0,o)
$.Bs=o
o=H.a(["beanbag"],p)
n=$.w
k=H.a([$.O,$.au],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$b().h(0,o)
$.A7=o
o=H.a(["pleather","faux fur"],p)
n=$.w
k=H.a([$.ce,$.az],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$b().h(0,o)
$.D6=o
o=H.a(["plywood"],p)
n=$.w
k=H.a([$.W,$.L],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$b().h(0,o)
$.jj=o
o=H.a(["colossus"],p)
n=$.w
k=H.a([$.E,$.bi],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$b().h(0,o)
$.vM=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bQ,$.bi],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$b().h(0,o)
$.Dw=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bQ,$.bi,$.bp],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$b().h(0,o)
$.AZ=o
o=H.a(["Ultraviolet"],p)
n=$.tD
k=H.a([$.b1,$.aj],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$b().h(0,o)
$.Cf=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.b1,$.aj,$.at],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$b().h(0,o)
$.Ez=o
o=H.a([],p)
n=$.q
k=H.a([$.aC,$.bW],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.AX=o
o=H.a(["candy"],p)
n=$.w
k=H.a([$.ap,$.b6],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$b().h(0,o)
$.tj=o
o=H.a(["cotton candy"],p)
n=$.w
k=H.a([$.ap,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$b().h(0,o)
$.AI=o
o=H.a(["gummy"],p)
n=$.w
k=H.a([$.ap,$.c7],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$b().h(0,o)
$.BJ=o
o=H.a(["marrow"],p)
n=$.w
k=H.a([$.ap,$.b9],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$b().h(0,o)
$.Cp=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.b9,$.bO],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$b().h(0,o)
$.Ew=o
o=H.a(["Frost"],p)
n=$.w
k=H.a([$.au,$.b6,$.bi],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$b().h(0,o)
$.By=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ap,$.bK],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$b().h(0,o)
$.B6=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.w
k=H.a([$.au,$.b6],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$b().h(0,o)
$.tk=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.aw,$.aA,$.b5,$.Y,$.ai,$.bW,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$b().h(0,o)
$.Cq=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.b7,$.aj,$.at,$.Z,$.aC,$.Y,$.ai,$.am],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$b().h(0,o)
$.B4=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.bQ,$.aL,$.am,$.b5],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$b().h(0,o)
$.AO=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.b7,$.am],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$b().h(0,o)
$.Ec=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.b9,$.at,$.aM],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$b().h(0,o)
$.EL=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bW,$.ce],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$b().h(0,o)
$.w3=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aM,$.W],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$b().h(0,o)
$.A0=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aM,$.aN,$.W],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$b().h(0,o)
$.tg=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.W,$.at],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$b().h(0,o)
$.C8=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aH,$.am],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$b().h(0,o)
$.tr=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.be,$.O],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$b().h(0,o)
$.CL=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aM,$.be,$.E,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$b().h(0,o)
$.A4=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aM,$.ab],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$b().h(0,o)
$.CF=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b4,$.bf],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$b().h(0,o)
$.AR=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bP,$.am],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$b().h(0,o)
$.DG=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aM,$.aN],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$b().h(0,o)
$.A6=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.w
k=H.a([$.bp,$.am,$.at],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$b().h(0,o)
$.E8=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.b1,$.aq,$.at],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$b().h(0,o)
$.Ce=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a2,$.aH],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$b().h(0,o)
$.Bd=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a2,$.bb],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$b().h(0,o)
$.Dq=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.b7,$.aC,$.b9],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$b().h(0,o)
$.E2=o
o=H.a(["green sun"],p)
n=$.tE
k=H.a([$.aq,$.c0,$.b1],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$b().h(0,o)
$.tp=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tD
k=H.a([$.aj,$.ai],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$b().h(0,o)
$.CA=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a2,$.b1],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$b().h(0,o)
$.Dn=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.at,$.aj,$.am],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$b().h(0,o)
$.B5=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c0,$.bs],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$b().h(0,o)
$.zU=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.b9,$.bi,$.ar],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$b().h(0,o)
$.Ci=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.b9,$.bi],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$b().h(0,o)
$.AN=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.be,$.aN],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$b().h(0,o)
$.En=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.aj,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$b().h(0,o)
$.CO=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aC,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$b().h(0,o)
$.AU=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ai,$.bf],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$b().h(0,o)
$.E7=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ab,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.Bn=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.at,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.DP=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ai,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$b().h(0,o)
$.DO=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Y,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$b().h(0,o)
$.A2=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a2,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$b().h(0,o)
$.CH=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Y,$.c0],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$b().h(0,o)
$.B7=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Y,$.b5],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$b().h(0,o)
$.Bh=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.az,$.be],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$b().h(0,o)
$.EP=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.E,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$b().h(0,o)
$.hi=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.c6,$.b5],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$b().h(0,o)
$.DE=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ab,$.c6],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$b().h(0,o)
$.E5=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.be,$.L],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$b().h(0,o)
$.mu=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.b5,$.aP],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$b().h(0,o)
$.AC=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.aq,$.aA],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$b().h(0,o)
$.CY=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.L,$.ap],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$b().h(0,o)
$.D1=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ab,$.c6,$.E],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$b().h(0,o)
$.A_=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.b1,$.bs],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$b().h(0,o)
$.Bm=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.aj,$.bs],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$b().h(0,o)
$.E6=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.aj,$.at],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$b().h(0,o)
$.CN=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$b().h(0,o)
$.Eq=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.au,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$b().h(0,o)
$.Ds=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.ar,$.bi,$.aN],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$b().h(0,o)
$.D2=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.b5,$.a9,$.aP,$.b7],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$b().h(0,o)
$.vY=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.am,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.DS=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ab,$.am,$.bP],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.EF=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.aq,$.ap],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$b().h(0,o)
$.Eb=o
o=H.a(["ice cream","popsicle"],p)
n=$.w
k=H.a([$.bp,$.ap],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$b().h(0,o)
$.BW=o
o=H.a(["popsickle"],p)
n=$.w
k=H.a([$.bp,$.ap,$.at],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$b().h(0,o)
$.De=o
o=H.a(["icepick"],p)
n=$.w
k=H.a([$.bp,$.aM],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$b().h(0,o)
$.BX=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.am,$.ap],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$b().h(0,o)
$.DH=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.aj,$.a9,$.am,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$b().h(0,o)
$.ED=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.W,$.ab],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$b().h(0,o)
$.Co=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.az,$.am],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$b().h(0,o)
$.Bj=o
o=H.a(["gold foil"],p)
n=$.w
k=H.a([$.E,$.L,$.bf],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$b().h(0,o)
$.BG=o
o=H.a(["caviar"],p)
n=$.w
k=H.a([$.ap,$.bf],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$b().h(0,o)
$.As=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c0,$.am],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$b().h(0,o)
$.Do=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.au,$.a9,$.aw],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$b().h(0,o)
$.BE=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.E,$.a9,$.aw],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$b().h(0,o)
$.BL=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a2,$.aw],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$b().h(0,o)
$.B9=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.E,$.aw],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$b().h(0,o)
$.DR=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bf,$.aw,$.ai],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$b().h(0,o)
$.f9=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bf,$.a9,$.ai],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$b().h(0,o)
$.CS=o
o=H.a(["ice","diamond"],p)
n=$.w
k=H.a([$.bf,$.bp],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$b().h(0,o)
$.vW=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.aq,$.bp],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$b().h(0,o)
$.BY=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.am,$.bp],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$b().h(0,o)
$.vX=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bo,$.bp],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$b().h(0,o)
$.EI=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a2,$.bp],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$b().h(0,o)
$.Ay=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a2,$.bp,$.at],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$b().h(0,o)
$.DC=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hh,$.at],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$b().h(0,o)
$.DD=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hh,$.mq],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$b().h(0,o)
$.DB=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hh,$.mq,$.au],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$b().h(0,o)
$.DA=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hh,$.aj],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$b().h(0,o)
$.DZ=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.b7,$.bV],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$b().h(0,o)
$.BM=o
o=H.a(["ghoul","mutant"],p)
n=$.w
k=H.a([$.bi,$.c0,$.bQ],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$b().h(0,o)
$.CI=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.am,$.E],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$b().h(0,o)
$.E1=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c0,$.a7,$.ap],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$b().h(0,o)
$.Cz=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c0,$.a7,$.ap,$.aN],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$b().h(0,o)
$.CT=o
o=H.a([],p)
n=$.q
k=H.a([$.ab,$.Y],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.B2=o
o=H.a(["uranium"],p)
n=$.w
k=H.a([$.c0,$.au],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$b().h(0,o)
$.EC=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.L,$.c7],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$b().h(0,o)
$.CG=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.at,$.au],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Bp=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aM,$.au],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Bq=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.az,$.aM],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$b().h(0,o)
$.D0=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.am,$.bs],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$b().h(0,o)
$.EO=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.az,$.b4],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$b().h(0,o)
$.Cc=o
o=H.a(["upholstered"],p)
n=$.w
k=H.a([$.O,$.b4],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$b().h(0,o)
$.EB=o
o=H.a(["leather"],p)
n=$.w
k=H.a([$.bi,$.b4],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$b().h(0,o)
$.w1=o
o=H.a(["shag"],p)
n=$.w
k=H.a([$.ce,$.b4],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$b().h(0,o)
$.DN=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ab,$.aA],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$b().h(0,o)
$.Cm=o
o=H.a(["porcelain"],p)
n=$.w
k=H.a([$.aw,$.bO],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$b().h(0,o)
$.mx=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.bf,$.bO],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$b().h(0,o)
$.Dg=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.am,$.at],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$b().h(0,o)
$.C6=o
o=H.a(["chocolate"],p)
n=$.w
k=H.a([$.aA,$.ap],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Ax=o
o=H.a(["wrapped chocolate"],p)
n=$.w
k=H.a([$.aA,$.ap,$.L,$.E],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Bt=o
o=H.a(["scratch-n-sniff"],p)
n=$.w
k=H.a([$.am,$.L],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$b().h(0,o)
$.DJ=o
o=H.a(["mythril","orichalcum"],p)
n=$.w
k=H.a([$.a2,$.E],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$b().h(0,o)
$.CJ=o
o=H.a(["titanium","steel"],p)
n=$.w
k=H.a([$.ab,$.E],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$b().h(0,o)
$.Ev=o
o=H.a(["lead"],p)
n=$.w
k=H.a([$.c6,$.E],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$b().h(0,o)
$.w0=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aH,$.b5],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$b().h(0,o)
$.CR=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bf,$.b5],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$b().h(0,o)
$.AE=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ai,$.b5],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$b().h(0,o)
$.B_=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b4,$.aH],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$b().h(0,o)
$.Dc=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.ai,$.bf,$.W,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$b().h(0,o)
$.Ei=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aH],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$b().h(0,o)
$.DI=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.ar],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$b().h(0,o)
$.mo=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.E,$.a7,$.ar],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$b().h(0,o)
$.tA=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.W,$.bs],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$b().h(0,o)
$.DU=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.ar,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$b().h(0,o)
$.EE=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.ar,$.a7,$.aA],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$b().h(0,o)
$.BV=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.W,$.aN],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$b().h(0,o)
$.Ag=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c6,$.aN],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.Ap=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ai,$.L],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$b().h(0,o)
$.Eg=o
o=H.a([],p)
n=$.q
k=H.a([$.as,$.L],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.CV=o
o=H.a([],p)
n=$.q
k=H.a([$.E,$.aN],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Cx=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.at,$.L],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$b().h(0,o)
$.CW=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ab,$.c7],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$b().h(0,o)
$.Ed=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aH,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$b().h(0,o)
$.C7=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aL,$.L],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$b().h(0,o)
$.A3=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aL,$.ap],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$b().h(0,o)
$.BK=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aL,$.aN],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$b().h(0,o)
$.Cv=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.am,$.bK],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$b().h(0,o)
$.DW=o
o=H.a(["gilded","gold leaf"],p)
n=$.w
k=H.a([$.E,$.W],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$b().h(0,o)
$.BD=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.az,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$b().h(0,o)
$.Aw=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.c7,$.at],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Dy=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.az,$.at],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Dz=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aP,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$b().h(0,o)
$.Et=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aP,$.a7,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$b().h(0,o)
$.DL=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.b6,$.E],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$b().h(0,o)
$.tt=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.b6,$.au,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$b().h(0,o)
$.vN=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.c7,$.aN],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$b().h(0,o)
$.AV=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.aw,$.ai],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$b().h(0,o)
$.vP=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.b5,$.am],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$b().h(0,o)
$.C1=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bP,$.b5],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$b().h(0,o)
$.mt=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aH,$.am,$.ai],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$b().h(0,o)
$.Di=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bQ,$.aP,$.b7],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$b().h(0,o)
$.CE=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aN,$.am,$.ai],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$b().h(0,o)
$.Du=o
o=H.a(["golden"],p)
n=$.w
k=H.a([$.E,$.bf],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$b().h(0,o)
$.to=o
o=H.a(["platinum"],p)
n=$.w
k=H.a([$.b1,$.E],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$b().h(0,o)
$.mw=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bW,$.E],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$b().h(0,o)
$.vV=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.ce],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$b().h(0,o)
$.Bf=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.au,$.ai],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.w2=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.au,$.c6],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.BI=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.br,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$b().h(0,o)
$.vS=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aL,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$b().h(0,o)
$.AQ=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.E,$.aP,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$b().h(0,o)
$.Cy=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.ar,$.aH],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$b().h(0,o)
$.E0=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ap,$.aH],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$b().h(0,o)
$.BZ=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aL,$.aH],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$b().h(0,o)
$.D4=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bf,$.aH],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$b().h(0,o)
$.AJ=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.am,$.aG,$.b5],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$b().h(0,o)
$.Ek=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bi],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$b().h(0,o)
$.Ad=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.aq,$.bs],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$b().h(0,o)
$.C_=o
o=H.a(["C-4"],p)
n=$.w
k=H.a([$.bs,$.az],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$b().h(0,o)
$.Ak=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.b1,$.br],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$b().h(0,o)
$.Bc=o
o=H.a(["Plutonium"],p)
n=$.w
k=H.a([$.E,$.c0],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$b().h(0,o)
$.D8=o
o=H.a(["Lithium"],p)
n=$.w
k=H.a([$.E,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$b().h(0,o)
$.Ch=o
o=H.a(["Molten"],p)
n=$.w
k=H.a([$.E,$.aq],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$b().h(0,o)
$.CD=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.w
k=H.a([$.au,$.aq],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$b().h(0,o)
$.Cn=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.E,$.bP],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$b().h(0,o)
$.Dx=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.at,$.am,$.ai],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$b().h(0,o)
$.Bu=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aA,$.b5],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$b().h(0,o)
$.Dt=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.aw,$.b1],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$b().h(0,o)
$.zX=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.aw,$.aj],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$b().h(0,o)
$.Cr=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.au,$.bi],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$b().h(0,o)
$.Eh=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$b().h(0,o)
$.Dl=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.au],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$b().h(0,o)
$.B3=o
o=H.a(["Elemental","Animated"],p)
n=$.w
k=H.a([$.a2,$.ar],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$b().h(0,o)
$.B8=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ap,$.ai],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$b().h(0,o)
$.BH=o
o=H.a(["Stained Glass"],p)
n=$.w
k=H.a([$.b6,$.aw,$.bf],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$b().h(0,o)
$.Ee=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aL,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$b().h(0,o)
$.BA=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.be,$.bu],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$b().h(0,o)
$.Cj=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.au,$.L],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$b().h(0,o)
$.Bb=o
o=H.a(["Papyrus"],p)
n=$.w
k=H.a([$.L,$.b2],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$b().h(0,o)
$.CX=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.L,$.az],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$b().h(0,o)
$.Bk=o
o=H.a(["Saucey"],p)
n=$.w
k=H.a([$.br,$.bu,$.bQ],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$b().h(0,o)
$.DF=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.L,$.bW],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$b().h(0,o)
$.Cl=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.aj,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$b().h(0,o)
$.vI=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bV,$.bi],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$b().h(0,o)
$.Dh=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bV,$.aq],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$b().h(0,o)
$.C0=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.W,$.bb,$.tx,$.ar],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$b().h(0,o)
$.BB=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bi,$.br],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$b().h(0,o)
$.zV=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aA,$.aC],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$b().h(0,o)
$.A1=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aA,$.bo],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$b().h(0,o)
$.CU=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aA,$.bu],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$b().h(0,o)
$.D3=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.am,$.aq],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$b().h(0,o)
$.Cg=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.bo],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$b().h(0,o)
$.BT=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bo,$.be],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$b().h(0,o)
$.Ey=o
o=H.a([],p)
n=$.q
k=H.a([$.bo,$.bu],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.An=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.hg,$.aq,$.bV],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$b().h(0,o)
$.BC=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.bp],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$b().h(0,o)
$.Ck=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.aN,$.ai],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$b().h(0,o)
$.B0=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aN,$.aj],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$b().h(0,o)
$.DY=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aN,$.bP],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$b().h(0,o)
$.AP=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aP,$.b7],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$b().h(0,o)
$.DK=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bQ,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$b().h(0,o)
$.Al=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bQ,$.aw],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$b().h(0,o)
$.Ej=o
o=H.a(["Masterwork"],p)
n=$.w
k=H.a([$.bb,$.bf],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$b().h(0,o)
$.Ct=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.ar,$.b7,$.br,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$b().h(0,o)
$.Af=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.br,$.aj],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$b().h(0,o)
$.Dr=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ap,$.bs],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$b().h(0,o)
$.Dd=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.aj,$.aH],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$b().h(0,o)
$.AW=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aG,$.bV],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$b().h(0,o)
$.BN=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.br,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$b().h(0,o)
$.AD=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aG,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$b().h(0,o)
$.Ef=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.b6,$.c0],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$b().h(0,o)
$.C4=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.b5,$.aG],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$b().h(0,o)
$.Eu=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.E,$.bO],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$b().h(0,o)
$.AF=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bs,$.aN],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$b().h(0,o)
$.BO=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bs,$.ab],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$b().h(0,o)
$.AG=o
o=H.a(["Down"],p)
n=$.w
k=H.a([$.b4,$.bz],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$b().h(0,o)
$.AY=o
o=H.a(["Prickly"],p)
n=$.w
k=H.a([$.aG,$.aM],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$b().h(0,o)
$.Dk=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aG,$.aj,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$b().h(0,o)
$.AS=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.w
k=H.a([$.aM,$.at],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$b().h(0,o)
$.C5=o
o=H.a(["Nanofiber"],p)
n=$.w
k=H.a([$.O,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$b().h(0,o)
$.CK=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.E,$.aP],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$b().h(0,o)
$.Az=o
o=H.a(["Silver"],p)
n=$.w
k=H.a([$.E,$.ai],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$b().h(0,o)
$.E_=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aC,$.b2],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$b().h(0,o)
$.EK=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.b6,$.bP],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$b().h(0,o)
$.DQ=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.au,$.E],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$b().h(0,o)
$.CB=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.ar],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$b().h(0,o)
$.DX=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bi,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$b().h(0,o)
$.CC=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.aj,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$b().h(0,o)
$.A9=o
o=H.a(["Asbestos"],p)
n=$.w
k=H.a([$.au,$.bK],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$b().h(0,o)
$.zW=o
o=H.a(["Mercurial"],p)
n=$.w
k=H.a([$.bK,$.E],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$b().h(0,o)
$.Cu=o
o=H.a(["Bulletproof"],p)
n=$.w
k=H.a([$.O,$.ab],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$b().h(0,o)
$.Ai=o
o=H.a(["Cotton"],p)
n=$.w
k=H.a([$.b2,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$b().h(0,o)
$.AH=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bu,$.b1],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$b().h(0,o)
$.Aa=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.b1,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$b().h(0,o)
$.Ae=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bu,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$b().h(0,o)
$.CQ=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bi,$.bf],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$b().h(0,o)
$.D9=o
o=H.a(["Tapestry"],p)
n=$.w
k=H.a([$.O,$.aw],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$b().h(0,o)
$.Em=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.O,$.aG],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$b().h(0,o)
$.C2=o
o=H.a(["Wishbone"],p)
n=$.w
k=H.a([$.bW,$.b9],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$b().h(0,o)
$.EJ=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aP,$.b9],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$b().h(0,o)
$.Dp=o
o=H.a(["Cranial"],p)
n=$.w
k=H.a([$.Y,$.b9],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$b().h(0,o)
$.AL=o
o=H.a(["Humerus"],p)
n=$.w
k=H.a([$.b5,$.b9],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$b().h(0,o)
$.BR=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aL,$.b4],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$b().h(0,o)
$.Cs=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aP,$.bu],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$b().h(0,o)
$.CZ=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aP,$.bs],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$b().h(0,o)
$.DT=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bK,$.aL],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$b().h(0,o)
$.zZ=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.w
k=H.a([$.aq,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$b().h(0,o)
$.EG=o
o=H.a(["Fiberglass"],p)
n=$.w
k=H.a([$.O,$.b6],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$b().h(0,o)
$.Bi=o
o=H.a(["Skull"],p)
n=$.w
k=H.a([$.b9,$.b7],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$b().h(0,o)
$.E3=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a2,$.bW],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$b().h(0,o)
$.Ba=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a2,$.bu],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$b().h(0,o)
$.A8=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a2,$.aL],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$b().h(0,o)
$.AA=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aL,$.aq],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$b().h(0,o)
$.Ar=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c0,$.b1],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$b().h(0,o)
$.EN=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bW],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$b().h(0,o)
$.AB=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b4,$.aq],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$b().h(0,o)
$.Bl=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aP,$.aq],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$b().h(0,o)
$.AK=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aP,$.c6],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$b().h(0,o)
$.Es=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bV,$.aP],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$b().h(0,o)
$.DV=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.b5,$.br],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$b().h(0,o)
$.El=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aL,$.b2],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$b().h(0,o)
$.zY=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aA,$.b2],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$b().h(0,o)
$.Dv=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.b5,$.ab],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$b().h(0,o)
$.Ca=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bK],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$b().h(0,o)
$.Cd=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.aw,$.aC],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$b().h(0,o)
$.Ex=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.at,$.b5],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$b().h(0,o)
$.E4=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bQ,$.b5],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$b().h(0,o)
$.vU=o
o=H.a(["Flowery"],p)
n=$.w
k=H.a([$.aw,$.b2],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$b().h(0,o)
$.Br=o
o=H.a(["Poison Ivy"],p)
n=$.w
k=H.a([$.bK,$.b2],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$b().h(0,o)
$.Db=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a2,$.bz],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$b().h(0,o)
$.EH=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.b2,$.ap,$.aC],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$b().h(0,o)
$.Bv=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.be,$.ar],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$b().h(0,o)
$.Cb=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bu,$.ar],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$b().h(0,o)
$.Av=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aC,$.bp],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$b().h(0,o)
$.BU=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aC,$.aq],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$b().h(0,o)
$.BS=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.be,$.c6],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$b().h(0,o)
$.DM=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.aA],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$b().h(0,o)
$.Da=o
o=H.a(["Holographic"],p)
n=$.w
k=H.a([$.b1,$.Y,$.b6,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$b().h(0,o)
$.BP=o
o=H.a(["Casket","Coffin"],p)
n=$.w
k=H.a([$.W,$.aC],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$b().h(0,o)
$.Aq=o
o=H.a(["Spectral"],p)
n=$.w
k=H.a([$.bV,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$b().h(0,o)
$.Ea=o
o=H.a(["Phoenix"],p)
n=$.w
k=H.a([$.aq,$.bz],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$b().h(0,o)
$.D_=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.O,$.aC],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$b().h(0,o)
$.Ep=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.W],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$b().h(0,o)
$.EM=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aG,$.b9],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$b().h(0,o)
$.Ab=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aL,$.b9],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$b().h(0,o)
$.vJ=o
o=H.a(["Calcium"],p)
n=$.w
k=H.a([$.b9,$.aL,$.ap],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$b().h(0,o)
$.Am=o
o=H.a(["Fleece"],p)
n=$.w
k=H.a([$.O,$.aq],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$b().h(0,o)
$.Bo=o
o=H.a(["Potted"],p)
n=$.w
k=H.a([$.bO,$.b2],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$b().h(0,o)
$.Dj=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.w
k=H.a([$.E,$.ap],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$b().h(0,o)
$.Ao=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aC,$.bi],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$b().h(0,o)
$.AT=o
o=H.a(["Porcupine"],p)
n=$.w
k=H.a([$.aM,$.ce],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$b().h(0,o)
$.Df=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.b9,$.aM],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$b().h(0,o)
$.Be=o
o=H.a(["Basalt"],p)
n=$.w
k=H.a([$.au,$.aj],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$b().h(0,o)
$.A5=o
o=H.a(["Obsidian"],p)
n=$.w
k=H.a([$.b6,$.aj],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$b().h(0,o)
$.CP=o
o=H.a(["Fenestrated"],p)
n=$.w
k=H.a([$.b6,$.W],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$b().h(0,o)
$.Bg=o
o=H.a(["Plexiglass"],p)
n=$.w
k=H.a([$.b6,$.az],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$b().h(0,o)
$.D7=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bO,$.L],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$b().h(0,o)
$.Au=o
o=H.a(["Fungal"],p)
n=$.w
k=H.a([$.b2,$.bQ],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$b().h(0,o)
$.Bz=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.b2,$.aM],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$b().h(0,o)
$.Er=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.b2,$.ab],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$b().h(0,o)
$.Ah=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.b6,$.aN],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.BF=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.b2,$.c7],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$b().h(0,o)
$.D5=o
o=H.a(["Cellulose"],p)
n=$.w
k=H.a([$.b2,$.az],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$b().h(0,o)
$.At=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.b7],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$b().h(0,o)
$.BQ=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.br,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$b().h(0,o)
$.CM=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.br,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$b().h(0,o)
$.AM=o
o=H.a(["Burdock"],p)
n=$.w
k=H.a([$.b2,$.ce],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$b().h(0,o)
$.Aj=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.b9,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.w
k=H.a([$.b9,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.b9,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.b9,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.w
k=H.a([$.b9,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.b9,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.W,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.w
k=H.a([$.W,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.w
k=H.a([$.W,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.W,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.w
k=H.a([$.W,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.w
k=H.a([$.W,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.W,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.w
k=H.a([$.W,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.W,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.W,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.W,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.w
k=H.a([$.W,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.w
k=H.a([$.W,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.w
k=H.a([$.W,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.W,$.au],l)
H.a([],p)
$.$get$b().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.w
k=H.a([$.az,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.L,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.w
k=H.a([$.L,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.L,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.O,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.w
k=H.a([$.au,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.au,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.w
k=H.a([$.au,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.w
k=H.a([$.au,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.w
k=H.a([$.au,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.w
k=H.a([$.au,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.w
k=H.a([$.au,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.w
k=H.a([$.au,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.au,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.b6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.O,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.O,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.O,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.O,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.O,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.O,$.c6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.O,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.O,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.w
k=H.a([$.O,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.w
k=H.a([$.O,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.O,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.w
k=H.a([$.O,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.w
k=H.a([$.O,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.w
k=H.a([$.O,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.w
k=H.a([$.O,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.O,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.w
k=H.a([$.O,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.O,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.w
k=H.a([$.O,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.w
k=H.a([$.O,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Y,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.w
k=H.a([$.a2,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.w
k=H.a([$.b2,$.aN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.w
k=H.a([$.az,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.w
k=H.a([$.N,$.R],l)
H.a([],p)
$.$get$b().h(0,new G.d("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bb,$.aH,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.w
k=H.a([$.br,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.br,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.br,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.Z,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Y,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.w
k=H.a([$.Z,$.az,$.bo,$.ab],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.Z,$.dg,$.W,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.aj,$.a2,$.bb,$.aG,$.b7],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$b().h(0,o)
$.Dm=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.b7,$.ab,$.c6,$.a2,$.bb],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$b().h(0,o)
$.C9=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aM,$.at,$.E,$.aj],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$b().h(0,o)
$.C3=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.Z,$.aH,$.W,$.N,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.Z,$.as,$.L,$.E,$.Y,$.N],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.Z,$.as,$.L,$.Y,$.N,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.Z,$.aC,$.L,$.Y,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.Z,$.b1,$.E,$.aM,$.at,$.fb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.Z,$.L,$.bu,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.Z,$.a2,$.O,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.Z,$.aG,$.b9,$.E,$.fa,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.Z,$.au,$.ai,$.jh,$.ab],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.Z,$.O,$.bf,$.aw,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.Z,$.E,$.bf,$.aw,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.Z,$.az,$.a7,$.aj,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.Z,$.O,$.Y,$.a2,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.Z,$.O,$.Y,$.aw,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.Z
j=$.L
i=$.Y
i=H.a([k,j,i,$.as,i,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.w
i=H.a([$.Z,$.aw,$.bO,$.ab,$.en,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.Z,$.as,$.L,$.bu,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a2,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.L,$.Y,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.Z,$.E,$.aj,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.Z,$.E,$.b6,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.Z,$.aH,$.W,$.am,$.bo,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.Z,$.aq,$.E,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.Z,$.a7,$.L,$.as,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.Z,$.W,$.ar,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.Z,$.bb,$.bz,$.b1,$.a9,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.w
i=H.a([$.Z,$.aL,$.b6,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.w
i=H.a([$.Z,$.b1,$.bW,$.au,$.b6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.Z,$.aG,$.au,$.ai,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.Z,$.ap,$.bu,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.Z,$.E,$.a9,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.Z,$.b6,$.c0,$.b1,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.w
i=H.a([$.E,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.E,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.w
i=H.a([$.E,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.w
i=H.a([$.E,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.E,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.E,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.w
i=H.a([$.E,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.w
i=H.a([$.bO,$.au],l)
H.a([],p)
$.$get$b().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.w
i=H.a([$.bO,$.c7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bO,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.w
i=H.a([$.bO,$.ab],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.w
i=H.a([$.bO,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.w
i=H.a([$.bO,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.w
i=H.a([$.bO,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bO,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.w
i=H.a([$.bO,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bO,$.bb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bP,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bP,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bP,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bP,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.w
i=H.a([$.bP,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bP,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bP,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.w
i=H.a([$.bP,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.w
i=H.a([$.bP,$.aH],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.w
i=H.a([$.bP,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
i=H.a([$.W,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.w
i=H.a([$.W,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.w
i=H.a([$.W,$.c7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.w
i=H.a([$.az,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.c7,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.c7,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.c7,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.L,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.L,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.w
i=H.a([$.au,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.w
i=H.a([$.au,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.au,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bV,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.w
i=H.a([$.bV,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bV,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.w
i=H.a([$.bV,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.w
i=H.a([$.bV,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.w
i=H.a([$.bV,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bV,$.bb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.w
i=H.a([$.bi,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.w
i=H.a([$.bi,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.w
i=H.a([$.bi,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bi,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.br,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.w
i=H.a([$.br,$.aH],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.br,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.br,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.ce,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.w
i=H.a([$.ce,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.ce,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.w
i=H.a([$.ce,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.w
i=H.a([$.b2,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.b2,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.w
i=H.a([$.b2,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.w
i=H.a([$.b2,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.w
i=H.a([$.b2,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.w
i=H.a([$.b2,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.w
i=H.a([$.b2,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.b2,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bz,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.w
i=H.a([$.bz,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.w
i=H.a([$.bz,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.w
i=H.a([$.bz,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.w
i=H.a([$.bz,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.w
i=H.a([$.bz,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.w
i=H.a([$.bz,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tD
i=H.a([$.bz,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bz,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bQ,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.at,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.at,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.b7,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aL,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ap,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.w
i=H.a([$.ap,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ap,$.ab],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c6,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.c6,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aN,$.aH],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aN,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.aN,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.aN,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aN,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aN,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.aN,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aN,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aN,$.c0],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aN,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aN,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.w
i=H.a([$.b1,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.w
i=H.a([$.a9,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.w
i=H.a([$.bW,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.w
i=H.a([$.bW,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bW,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.b1,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.b1,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.b1,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.b1,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.aj,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.aj,$.a2,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.aj,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.aj,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.aj,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.aj,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bo,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bo,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bo,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aL,$.c0],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bK,$.c0],l)
H.a([],p)
$.$get$b().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aC,$.c0],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aC,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aC,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aC,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aC,$.bb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bs,$.aH],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bs,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bs,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aC,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bs,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bs,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bs,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bs,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bs,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bp,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a2,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bu,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bK,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bK,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bK,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bK,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bK,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bK,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a9,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a9,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.aa
i=H.a([$.a9,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a9,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bu,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bu,$.aH],l)
H.a([],p)
$.$get$b().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.aa
i=H.a([$.Y,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.be,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.be,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.be,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.be,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.aw,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.b4,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b4,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ap,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aA,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aA,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.ar,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.ar,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.aa
i=H.a([$.aA,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aA,$.bb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aA,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aA,$.aP,$.as,$.ji],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ap,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ap,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ap,$.bb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a2,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ap,$.b5,$.a7,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.w
i=H.a([$.E,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.b9,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bP,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.W,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.az,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.c7,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.w
i=H.a([$.L,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.L,$.b6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.b6,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bi,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.aq,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.w
i=H.a([$.aA,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.b2,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aL,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bb,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bW,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.aj,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.aq,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.aq,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.aq,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aC,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bf,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bf,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bf,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aG,$.bb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aP,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aA,$.aH],l)
H.a([],p)
$.$get$b().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a2,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.N,$.R,$.bb],l)
H.a([],p)
$.$get$b().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.N,$.R,$.bb,$.aH,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.N,$.R,$.bb,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.au,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bz,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.b2,$.b7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a2,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.b7,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bO,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chipped",l,n,o,0))
if($.wE==null){o=$.mq
n=$.aM
l=$.at
k=$.b9
j=new U.ag(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a4(null,null,null,m),0,3)
j.M("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wE=j}o=$.$get$ak();(o&&C.b).sm(o,0)
o=$.$get$ak()
n=$.O
l=$.vU
k=new U.ag(n,null,null,null,"Speedo",!1,P.a4(null,null,null,m),0,3)
k.M("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$ak()
o=$.fb
n=$.at
l=$.E
j=$.aM
i=new U.ag(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a4(null,null,null,m),0,3)
i.M("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.tq
o=$.ab
j=$.E
l=new U.ag(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a4(null,null,null,m),0,3)
l.M("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$ak()
i=$.tz
k=$.aN
j=$.E
o=new U.ag(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a4(null,null,null,m),0,3)
o.M("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$ak()
l=$.tw
i=$.aN
j=$.E
k=new U.ag(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a4(null,null,null,m),0,3)
k.M("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$ak()
o=$.w7
l=$.aN
j=$.E
i=new U.ag(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a4(null,null,null,m),0,3)
i.M("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.vH
o=$.aM
j=$.at
l=$.E
n=new U.ag(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a4(null,null,null,m),0,3)
n.M("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$ak()
i=$.tl
k=$.aM
l=$.at
j=$.E
o=new U.ag(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a4(null,null,null,m),0,3)
o.M("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.hh
i=$.ab
j=$.bO
l=new U.ag(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a4(null,null,null,m),0,3)
l.M("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.wa
n=$.at
j=$.E
i=new U.ag(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a4(null,null,null,m),0,3)
i.M("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$ak()
l=$.vL
o=$.at
j=$.E
n=new U.ag(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a4(null,null,null,m),0,3)
n.M("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$ak()
i=$.vR
l=$.aM
j=$.E
o=new U.ag(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a4(null,null,null,m),0,3)
o.M("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.tv
i=$.bz
j=$.br
l=new U.ag(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a4(null,null,null,m),0,3)
l.M("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.en
n=$.c6
j=$.au
i=$.ab
k=new U.ag(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a4(null,null,null,m),0,3)
k.M("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.tm
o=$.az
i=$.bW
j=new U.ag(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a4(null,null,null,m),0,3)
j.M("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$ak()
k=$.tu
l=$.E
i=$.aM
o=new U.ag(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a4(null,null,null,m),0,3)
o.M("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$ak()
j=$.wc
k=$.W
i=$.ab
l=new U.ag(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a4(null,null,null,m),0,3)
l.M("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$ak()
o=$.we
j=$.be
i=$.O
k=new U.ag(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a4(null,null,null,m),0,3)
k.M("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.ti
o=$.aN
i=$.au
j=$.O
n=$.aM
h=new U.ag(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a4(null,null,null,m),0,3)
h.M("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$ak()
k=$.ji
l=$.W
n=$.ab
j=new U.ag(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a4(null,null,null,m),0,3)
j.M("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$ak()
h=$.jg
k=$.W
n=new U.ag(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a4(null,null,null,m),0,3)
n.M("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$ak()
j=$.as
h=$.L
k=$.ab
l=new U.ag(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a4(null,null,null,m),0,3)
l.M("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$ak()
n=$.w4
j=$.E
k=$.ab
h=new U.ag(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a4(null,null,null,m),0,3)
h.M("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$ak()
l=$.th
n=$.at
k=$.E
j=$.ab
i=new U.ag(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a4(null,null,null,m),0,3)
i.M("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.w_
l=$.W
j=$.aM
k=new U.ag(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a4(null,null,null,m),0,3)
k.M("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.fa
h=$.E
j=$.ab
l=new U.ag(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a4(null,null,null,m),0,3)
l.M("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vK
i=$.W
j=$.ab
h=new U.ag(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a4(null,null,null,m),0,3)
h.M("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.wf
k=$.az
j=$.ab
i=new U.ag(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a4(null,null,null,m),0,3)
i.M("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.wb
l=$.W
j=$.aN
k=new U.ag(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a4(null,null,null,m),0,3)
k.M("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.w9
h=$.E
j=$.at
l=new U.ag(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a4(null,null,null,m),0,3)
l.M("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.ts
i=$.E
j=$.aN
h=new U.ag(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a4(null,null,null,m),0,3)
h.M("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.ms
k=$.E
j=$.bs
i=new U.ag(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a4(null,null,null,m),0,3)
i.M("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.en
l=$.c7
j=$.ab
k=new U.ag(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a4(null,null,null,m),0,3)
k.M("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.wd
h=$.E
j=$.aM
l=new U.ag(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a4(null,null,null,m),0,3)
l.M("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.mp
i=$.L
j=$.at
h=new U.ag(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a4(null,null,null,m),0,3)
h.M("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.tn
k=$.E
j=$.ab
i=new U.ag(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a4(null,null,null,m),0,3)
i.M("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.e5
l=$.b4
j=$.O
k=new U.ag(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a4(null,null,null,m),0,3)
k.M("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.hg
h=$.E
j=$.be
l=new U.ag(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a4(null,null,null,m),0,3)
l.M("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tC
i=$.E
j=$.ab
h=new U.ag(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a4(null,null,null,m),0,3)
h.M("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.w8
k=$.E
j=$.ab
i=new U.ag(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a4(null,null,null,m),0,3)
i.M("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.tB
l=$.W
j=$.ab
k=new U.ag(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a4(null,null,null,m),0,3)
k.M("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.tx
h=$.W
j=$.aC
l=new U.ag(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a4(null,null,null,m),0,3)
l.M("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.ty
i=$.E
j=$.at
h=new U.ag(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a4(null,null,null,m),0,3)
h.M("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.mv
k=$.E
j=$.Y
i=new U.ag(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a4(null,null,null,m),0,3)
i.M("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.jh
l=$.au
j=$.c6
k=new U.ag(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a4(null,null,null,m),0,3)
k.M("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.vT
h=$.W
j=$.ab
l=new U.ag(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a4(null,null,null,m),0,3)
l.M("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vZ
i=$.E
j=$.at
h=new U.ag(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a4(null,null,null,m),0,3)
h.M("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.w6
k=$.E
j=$.at
i=new U.ag(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a4(null,null,null,m),0,3)
i.M("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.w5
l=$.E
j=$.c6
k=new U.ag(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a4(null,null,null,m),0,3)
k.M("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.dg
h=$.W
j=$.ab
m=new U.ag(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a4(null,null,null,m),0,3)
m.M("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bG("Duttle","Dut",null,null)
$.$get$bN().push(m)
$.vs=m
m=new S.bG("Salamander","GLUB",null,null)
$.$get$bN().push(m)
$.t6=m
m=new S.bG("Crocodile","NAK",null,null)
$.$get$bN().push(m)
$.e2=m
m=new S.bG("Iguana","thip",null,null)
$.$get$bN().push(m)
$.ek=m
m=new S.bG("Turtle","click",null,null)
$.$get$bN().push(m)
$.f2=m
m=new S.bG("Skeleton","rattle",null,null)
$.$get$bN().push(m)
$.dN=m
m=new S.bG("Robot","BEEP",null,null)
$.$get$bN().push(m)
$.f0=m
m=new S.bG("Chameleon","BLEP",null,null)
$.$get$bN().push(m)
$.ip=m
m=new S.bG("Axolotl","BARP",null,null)
$.$get$bN().push(m)
$.t0=m
m=new S.bG("Lizard","bleb",null,null)
$.$get$bN().push(m)
$.lJ=m
m=new S.bG("Snake","hiss",null,null)
$.$get$bN().push(m)
$.t8=m
m=new S.bG("Alligator","nak",null,null)
$.$get$bN().push(m)
$.im=m
m=new S.bG("Mole","snuff",null,null)
$.$get$bN().push(m)
$.vt=m
m=new S.bG("Bird","tweet",null,null)
$.$get$bN().push(m)
$.lI=m
m=new S.bG("Wolf","howl",null,null)
$.$get$bN().push(m)
$.lP=m
m=new S.bG("Newt","skitter",null,null)
$.$get$bN().push(m)
$.vu=m
m=new S.bG("Spider","skitter",null,null)
$.$get$bN().push(m)
$.iv=m
m=new S.bG("Cupid","flappa",null,null)
$.$get$bN().push(m)
$.iq=m
m=new S.bG("Dragon","roar",null,null)
$.$get$bN().push(m)
$.h4=m
m=new S.i6("Prospitian","murmur",null,null)
$.$get$bN().push(m)
$.zj=m
m=new S.i6("Dersite","mutter",null,null)
$.$get$bN().push(m)
$.zg=m
m=new S.m8("Horror Terror","a;lkjdf",null,null)
$.$get$bN().push(m)
$.zi=m
$.zk=H.a([$.t8,$.im,$.vu,$.t6,$.ek,$.e2,$.f2,$.ip,$.t0,$.lJ],[S.bG])
$.h9=new T.c1(0,"spices")
m=$.zm
$.eY=new T.c1(m,"fresh baked bread")
$.cy=new T.c1(m,"sweetness")
$.c4=new T.c1(m,"nature")
$.lO=new T.c1(0,"salt")
k=$.zl
$.d2=new T.c1(k,"rot")
$.zh=new T.c1(k,"feet")
$.f_=new T.c1(0,"oil")
$.t2=new T.c1(0,"chlorine")
$.h7=new T.c1(0,"nothing in particular")
$.ej=new T.c1(0,"gunpowder")
$.h6=new T.c1(0,"must")
$.cD=new T.c1(m,"zoo animals")
$.e3=new T.c1(k,"sweat")
$.iu=new T.c1(0,"ozone")
$.c3=new T.c1(0,"deceit")
$.d1=new T.c1(k,"blood")
$.f1=new T.c1(k,"smoke")
$.bY=new K.bU(k,"creepy")
$.aO=new K.bU(m,"calm")
$.cc=new K.bU(k,"frantic")
$.lL=new K.bU(0,"like nothing")
$.bZ=new K.bU(m,"energizing")
$.cC=new K.bU(0,"studious")
$.du=new K.bU(0,"dangerous")
$.dL=new K.bU(0,"glamorous")
$.h8=new K.bU(0,"romantic")
$.dt=new K.bU(m,"creative")
$.lK=new K.bU(0,"lucky")
$.dv=new K.bU(0,"happy")
$.dM=new K.bU(0,"heroic")
$.d3=new K.bU(k,"stupid")
$.lK=new K.bU(0,"lucky")
$.vr=new K.bU(0,"claustrophobic")
$.lM=new K.bU(0,"overheated")
$.e1=new K.bU(k,"confusing")
$.cn=new K.bU(0,"contemplatative")
$.cT=new M.bB(0,"clanking")
$.cx=new M.bB(0,"laughing")
$.bd=new M.bB(m,"rustling")
$.em=new M.bB(k,"screaming")
$.is=new M.bB(k,"foot steps")
$.eZ=new M.bB(k,"beeping")
$.vw=new M.bB(k,"whispering")
$.ei=new M.bB(0,"clacking")
$.cA=new M.bB(0,"applause")
$.el=new M.bB(0,"jazz")
$.t4=new M.bB(0,"disco")
$.h5=new M.bB(0,"drums")
$.ir=new M.bB(0,"echoing")
$.lN=new M.bB(k,"roaring")
$.it=new M.bB(k,"gunfire")
$.cB=new M.bB(0,"music")
$.t7=new M.bB(0,"singing")
$.t1=new M.bB(0,"chanting")
$.f3=new M.bB(0,"whistling")
$.df=new M.bB(m,"nature")
$.t3=new M.bB(0,"croaking")
$.dw=new M.bB(0,"silence")
$.t5=new M.bB(0,"pulsing")
$.vv=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.F,P.U]
n=A.a1
l=E.M
k=[l]
j=[A.fN]
m=new S.mL(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.v(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Knight",3,!0,!1,!1)
$.FI=m
m=P.k(H.a([new E.M($.c8,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oa(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.v(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Seer",6,!0,!1,!1)
$.FV=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kC("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.v(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Bard",9,!0,!1,!1)
$.FC=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m5("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.v(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Heir",8,!0,!1,!1)
$.FF=m
m=H.a([],p)
m=new U.n5(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.v(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Maid",0,!0,!1,!1)
$.FL=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nZ(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.v(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Rogue",4,!0,!1,!1)
$.FQ=m
m=H.a([],p)
m=new V.nA(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.v(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Page",1,!0,!1,!1)
$.FO=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.p2(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.v(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Thief",7,!0,!1,!1)
$.FY=m
m=P.k(H.a([new E.M($.c8,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oQ(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.v(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Sylph",5,!0,!1,!1)
$.FX=m
m=H.a([],p)
m=new N.nS("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.v(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Prince",10,!0,!1,!1)
$.FP=m
m=P.k(H.a([new E.M($.c8,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pv("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.v(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Witch",11,!0,!1,!1)
$.G_=m
m=P.k(H.a([new E.M($.c8,0.4,!1)],k),l)
i=H.a([],p)
m=new S.n4("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.v(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Mage",2,!0,!1,!1)
$.FK=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.k(H.a([new E.M($.c8,3,!1),new E.M($.op,-2,!1)],k),l)
e=H.a([],p)
m=new E.pr("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.v(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Waste",12,!1,!1,!1)
$.FZ=m
m=H.a([],p)
m=new Y.o6("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.v(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Scout",13,!1,!1,!1)
$.FT=m
m=P.k(H.a([new E.M($.c8,0.5,!1)],k),l)
i=H.a([],p)
m=new L.o7("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.v(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Scribe",15,!1,!1,!1)
$.FU=m
m=P.k(H.a([new E.M($.c8,0.5,!1)],k),l)
i=H.a([],p)
m=new E.o3(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.v(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Sage",14,!1,!1,!1)
$.FR=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m3("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.v(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Guide",16,!1,!1,!1)
$.FE=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.k(H.a([new E.M($.c8,3,!1)],k),l)
g=H.a([],p)
m=new Y.m2(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.v(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Grace",17,!1,!1,!1)
$.FD=m
m=P.k(H.a([new E.M($.c8,0.1,!1)],k),l)
i=H.a([],p)
m=new E.ne("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.v(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Muse",18,!1,!1,!1)
$.FM=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.H(null,null,n)
h=P.k(H.a([new E.M($.c8,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.n2("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.v(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Lord",19,!1,!1,!1)
$.FJ=m
m=P.k(H.a([new E.M($.c8,-0.1,!1),new E.M($.dA,1,!1)],k),l)
i=H.a([],p)
m=new Y.oh("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.v(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Smith",20,!1,!1,!1)
$.FW=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.k(H.a([new E.M($.c8,4,!1),new E.M($.op,-3,!1)],k),l)
e=H.a([],p)
m=new X.mc("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.v(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Human",21,!1,!1,!0)
$.FG=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.k(H.a([new E.M($.c8,41.3,!1),new E.M($.op,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.md(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.v(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Hussie",22,!1,!0,!0)
$.FH=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.o4(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.v(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a2("Sans",23,!1,!0,!0)
$.FS=m
$.FN=T.FB("Null",255,!1,!0,!1)
m=A.dJ
i=P.D
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#00ff00"),!0)
h.j(0,$.aS,L.e("#EFEFEF"),!0)
h.j(0,$.aR,L.e("#DEDEDE"),!0)
h.j(0,$.b0,L.e("#FF2106"),!0)
h.j(0,$.b_,L.e("#B01200"),!0)
h.j(0,$.aU,L.e("#2F2F30"),!0)
h.j(0,$.aV,L.e("#1D1D1D"),!0)
h.j(0,$.aT,L.e("#080808"),!0)
h.j(0,$.aZ,L.e("#030303"),!0)
h.j(0,$.aY,L.e("#242424"),!0)
h.j(0,$.aX,L.e("#333333"),!0)
h.j(0,$.aW,L.e("#141414"),!0)
g=P.k(H.a(["Frogs"],p),q)
f=P.k(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.k(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.k(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.k(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.k(H.a([new E.M($.dA,2,!0),new E.M($.eB,1,!0),new E.M($.eC,-2,!0)],k),l)
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aS,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF8700"),!0)
a.j(0,$.b0,L.e("#7F7F7F"),!0)
a.j(0,$.b_,L.e("#727272"),!0)
a.j(0,$.aU,L.e("#A3A3A3"),!0)
a.j(0,$.aV,L.e("#999999"),!0)
a.j(0,$.aT,L.e("#898989"),!0)
a.j(0,$.aZ,L.e("#EFEFEF"),!0)
a.j(0,$.aY,L.e("#DBDBDB"),!0)
a.j(0,$.aX,L.e("#C6C6C6"),!0)
a.j(0,$.aW,L.e("#ADADAD"),!0)
a=new N.oj(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.af(0,"Space",!0,!1,!1)
$.yr=a
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#ff0000"),!0)
a.j(0,$.aS,L.e("#FF2106"),!0)
a.j(0,$.aR,L.e("#AD1604"),!0)
a.j(0,$.b0,L.e("#030303"),!0)
a.j(0,$.b_,L.e("#242424"),!0)
a.j(0,$.aU,L.e("#510606"),!0)
a.j(0,$.aV,L.e("#3C0404"),!0)
a.j(0,$.aT,L.e("#1F0000"),!0)
a.j(0,$.aZ,L.e("#B70D0E"),!0)
a.j(0,$.aY,L.e("#970203"),!0)
a.j(0,$.aX,L.e("#8E1516"),!0)
a.j(0,$.aW,L.e("#640707"),!0)
b=P.k(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.k(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.k(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.k(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.k(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.k(H.a([new E.M($.hI,2,!0),new E.M($.eC,1,!0),new E.M($.fp,-2,!0)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new N.p3(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(1,"Time",!0,!1,!1)
$.yt=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#3399ff"),!0)
h.j(0,$.aS,L.e("#10E0FF"),!0)
h.j(0,$.aR,L.e("#00A4BB"),!0)
h.j(0,$.b0,L.e("#FEFD49"),!0)
h.j(0,$.b_,L.e("#D6D601"),!0)
h.j(0,$.aU,L.e("#0052F3"),!0)
h.j(0,$.aV,L.e("#0046D1"),!0)
h.j(0,$.aT,L.e("#003396"),!0)
h.j(0,$.aZ,L.e("#0087EB"),!0)
h.j(0,$.aY,L.e("#0070ED"),!0)
h.j(0,$.aX,L.e("#006BE1"),!0)
h.j(0,$.aW,L.e("#0054B0"),!0)
g=P.k(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.k(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.k(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.k(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.k(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.k(H.a([new E.M($.eC,2,!0),new E.M($.cP,1,!0),new E.M($.eB,-1,!0),new E.M($.eD,-1,!0),new E.M($.c8,0.05,!1)],k),l)
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aS,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF8700"),!0)
a.j(0,$.b0,L.e("#7F7F7F"),!0)
a.j(0,$.b_,L.e("#727272"),!0)
a.j(0,$.aU,L.e("#A3A3A3"),!0)
a.j(0,$.aV,L.e("#999999"),!0)
a.j(0,$.aT,L.e("#898989"),!0)
a.j(0,$.aZ,L.e("#EFEFEF"),!0)
a.j(0,$.aY,L.e("#DBDBDB"),!0)
a.j(0,$.aX,L.e("#C6C6C6"),!0)
a.j(0,$.aW,L.e("#ADADAD"),!0)
a=new T.kK(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.af(2,"Breath",!0,!1,!1)
$.yd=a
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#003300"),!0)
a.j(0,$.aS,L.e("#0F0F0F"),!0)
a.j(0,$.aR,L.e("#010101"),!0)
a.j(0,$.b0,L.e("#E8C15E"),!0)
a.j(0,$.b_,L.e("#C7A140"),!0)
a.j(0,$.aU,L.e("#1E211E"),!0)
a.j(0,$.aV,L.e("#141614"),!0)
a.j(0,$.aT,L.e("#0B0D0B"),!0)
a.j(0,$.aZ,L.e("#204020"),!0)
a.j(0,$.aY,L.e("#11200F"),!0)
a.j(0,$.aX,L.e("#192C16"),!0)
a.j(0,$.aW,L.e("#121F10"),!0)
b=P.k(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.k(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.k(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.k(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.k(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.k(H.a([new E.M($.dA,2,!0),new E.M($.fp,1,!0),new E.M($.hI,-1,!0),new E.M($.eB,-1,!0),new E.M($.c8,0.01,!1)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new U.le(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(3,"Doom",!0,!1,!1)
$.ye=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#993300"),!0)
h.j(0,$.aS,L.e("#BA1016"),!0)
h.j(0,$.aR,L.e("#820B0F"),!0)
h.j(0,$.b0,L.e("#381B76"),!0)
h.j(0,$.b_,L.e("#1E0C47"),!0)
h.j(0,$.aU,L.e("#290704"),!0)
h.j(0,$.aV,L.e("#230200"),!0)
h.j(0,$.aT,L.e("#110000"),!0)
h.j(0,$.aZ,L.e("#3D190A"),!0)
h.j(0,$.aY,L.e("#2C1207"),!0)
h.j(0,$.aX,L.e("#5C2913"),!0)
h.j(0,$.aW,L.e("#4C1F0D"),!0)
g=P.k(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.k(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.k(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.k(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.k(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.k(H.a([new E.M($.eD,2,!0),new E.M($.cP,1,!0),new E.M($.dA,-2,!0)],k),l)
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aS,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF8700"),!0)
a.j(0,$.b0,L.e("#7F7F7F"),!0)
a.j(0,$.b_,L.e("#727272"),!0)
a.j(0,$.aU,L.e("#A3A3A3"),!0)
a.j(0,$.aV,L.e("#999999"),!0)
a.j(0,$.aT,L.e("#898989"),!0)
a.j(0,$.aZ,L.e("#EFEFEF"),!0)
a.j(0,$.aY,L.e("#DBDBDB"),!0)
a.j(0,$.aX,L.e("#C6C6C6"),!0)
a.j(0,$.aW,L.e("#ADADAD"),!0)
a=new T.kH(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.af(4,"Blood",!0,!1,!1)
$.yc=a
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#ff3399"),!0)
a.j(0,$.aS,L.e("#BD1864"),!0)
a.j(0,$.aR,L.e("#780F3F"),!0)
a.j(0,$.b0,L.e("#1D572E"),!0)
a.j(0,$.b_,L.e("#11371D"),!0)
a.j(0,$.aU,L.e("#4C1026"),!0)
a.j(0,$.aV,L.e("#3C0D1F"),!0)
a.j(0,$.aT,L.e("#260914"),!0)
a.j(0,$.aZ,L.e("#6B0829"),!0)
a.j(0,$.aY,L.e("#4A0818"),!0)
a.j(0,$.aX,L.e("#55142A"),!0)
a.j(0,$.aW,L.e("#3D0E1E"),!0)
b=P.k(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.k(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.k(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.k(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.k(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.k(H.a([new E.M($.eD,1,!0),new E.kv(null,1,!0)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new T.m4(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(5,"Heart",!0,!1,!1)
$.yg=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#3da35a"),!0)
h.j(0,$.aS,L.e("#06FFC9"),!0)
h.j(0,$.aR,L.e("#04A885"),!0)
h.j(0,$.b0,L.e("#6E0E2E"),!0)
h.j(0,$.b_,L.e("#4A0818"),!0)
h.j(0,$.aU,L.e("#1D572E"),!0)
h.j(0,$.aV,L.e("#164524"),!0)
h.j(0,$.aT,L.e("#11371D"),!0)
h.j(0,$.aZ,L.e("#3DA35A"),!0)
h.j(0,$.aY,L.e("#2E7A43"),!0)
h.j(0,$.aX,L.e("#3B7E4F"),!0)
h.j(0,$.aW,L.e("#265133"),!0)
g=P.k(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.k(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.k(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.k(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.k(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.k(H.a([new E.M($.fp,2,!0),new E.M($.hI,1,!0),new E.M($.dA,-2,!0)],k),l)
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aS,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF8700"),!0)
a.j(0,$.b0,L.e("#7F7F7F"),!0)
a.j(0,$.b_,L.e("#727272"),!0)
a.j(0,$.aU,L.e("#A3A3A3"),!0)
a.j(0,$.aV,L.e("#999999"),!0)
a.j(0,$.aT,L.e("#898989"),!0)
a.j(0,$.aZ,L.e("#EFEFEF"),!0)
a.j(0,$.aY,L.e("#DBDBDB"),!0)
a.j(0,$.aX,L.e("#C6C6C6"),!0)
a.j(0,$.aW,L.e("#ADADAD"),!0)
a=new V.nd(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.af(6,"Mind",!0,!1,!1)
$.ym=a
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#ff9933"),!0)
a.j(0,$.aS,L.e("#FEFD49"),!0)
a.j(0,$.aR,L.e("#FEC910"),!0)
a.j(0,$.b0,L.e("#10E0FF"),!0)
a.j(0,$.b_,L.e("#00A4BB"),!0)
a.j(0,$.aU,L.e("#FA4900"),!0)
a.j(0,$.aV,L.e("#E94200"),!0)
a.j(0,$.aT,L.e("#C33700"),!0)
a.j(0,$.aZ,L.e("#FF8800"),!0)
a.j(0,$.aY,L.e("#D66E04"),!0)
a.j(0,$.aX,L.e("#E76700"),!0)
a.j(0,$.aW,L.e("#CA5B00"),!0)
b=P.k(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.k(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.k(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.k(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.k(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.k(H.a([new E.M($.hH,2,!0),new E.M($.fp,1,!0),new E.M($.cP,-1,!0),new E.M($.eB,-1,!0),new E.M($.c8,0.2,!1)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new G.mP(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(7,"Light",!0,!1,!1)
$.yl=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#000066"),!0)
h.j(0,$.aS,L.e("#0B1030"),!0)
h.j(0,$.aR,L.e("#04091A"),!0)
h.j(0,$.b0,L.e("#CCC4B5"),!0)
h.j(0,$.b_,L.e("#A89F8D"),!0)
h.j(0,$.aU,L.e("#00164F"),!0)
h.j(0,$.aV,L.e("#00103C"),!0)
h.j(0,$.aT,L.e("#00071A"),!0)
h.j(0,$.aZ,L.e("#033476"),!0)
h.j(0,$.aY,L.e("#02285B"),!0)
h.j(0,$.aX,L.e("#004CB2"),!0)
h.j(0,$.aW,L.e("#003E91"),!0)
g=P.k(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.k(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.k(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.k(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.k(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.k(H.a([new E.fI(D.uq(),null,3,!0),new E.fI(D.uq(),null,-1,!0),new E.M($.hI,-1,!0),new E.M($.c8,0.2,!1)],k),l)
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aS,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF8700"),!0)
a.j(0,$.b0,L.e("#7F7F7F"),!0)
a.j(0,$.b_,L.e("#727272"),!0)
a.j(0,$.aU,L.e("#A3A3A3"),!0)
a.j(0,$.aV,L.e("#999999"),!0)
a.j(0,$.aT,L.e("#898989"),!0)
a.j(0,$.aZ,L.e("#EFEFEF"),!0)
a.j(0,$.aY,L.e("#DBDBDB"),!0)
a.j(0,$.aX,L.e("#C6C6C6"),!0)
a.j(0,$.aW,L.e("#ADADAD"),!0)
a=new Q.pq(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.af(8,"Void",!0,!1,!1)
$.yu=a
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#9900cc"),!0)
a.j(0,$.aS,L.e("#974AA7"),!0)
a.j(0,$.aR,L.e("#6B347D"),!0)
a.j(0,$.b0,L.e("#3D190A"),!0)
a.j(0,$.b_,L.e("#2C1207"),!0)
a.j(0,$.aU,L.e("#7C3FBA"),!0)
a.j(0,$.aV,L.e("#6D34A6"),!0)
a.j(0,$.aT,L.e("#592D86"),!0)
a.j(0,$.aZ,L.e("#381B76"),!0)
a.j(0,$.aY,L.e("#1E0C47"),!0)
a.j(0,$.aX,L.e("#281D36"),!0)
a.j(0,$.aW,L.e("#1D1526"),!0)
b=P.k(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.k(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.k(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.k(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.k(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.k(H.a([new E.M($.hJ,2,!0),new E.M($.eC,1,!0),new E.M($.cP,-1,!0),new E.M($.eD,-1,!0),new E.M($.c8,0.01,!1)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new E.nU(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(9,"Rage",!0,!1,!1)
$.yo=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#ffcc66"),!0)
h.j(0,$.aS,L.e("#FDF9EC"),!0)
h.j(0,$.aR,L.e("#D6C794"),!0)
h.j(0,$.b0,L.e("#164524"),!0)
h.j(0,$.b_,L.e("#06280C"),!0)
h.j(0,$.aU,L.e("#FFC331"),!0)
h.j(0,$.aV,L.e("#F7BB2C"),!0)
h.j(0,$.aT,L.e("#DBA523"),!0)
h.j(0,$.aZ,L.e("#FFE094"),!0)
h.j(0,$.aY,L.e("#E8C15E"),!0)
h.j(0,$.aX,L.e("#F6C54A"),!0)
h.j(0,$.aW,L.e("#EDAF0C"),!0)
g=P.k(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.k(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.k(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.k(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.k(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.k(H.a([new E.M($.cP,2,!0),new E.M($.hH,1,!0),new E.fI(D.uq(),null,-2,!0)],k),l)
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aS,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF8700"),!0)
a.j(0,$.b0,L.e("#7F7F7F"),!0)
a.j(0,$.b_,L.e("#727272"),!0)
a.j(0,$.aU,L.e("#A3A3A3"),!0)
a.j(0,$.aV,L.e("#999999"),!0)
a.j(0,$.aT,L.e("#898989"),!0)
a.j(0,$.aZ,L.e("#EFEFEF"),!0)
a.j(0,$.aY,L.e("#DBDBDB"),!0)
a.j(0,$.aX,L.e("#C6C6C6"),!0)
a.j(0,$.aW,L.e("#ADADAD"),!0)
a=new X.m7(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.af(10,"Hope",!0,!1,!1)
$.yh=a
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#494132"),!0)
a.j(0,$.aS,L.e("#76C34E"),!0)
a.j(0,$.aR,L.e("#4F8234"),!0)
a.j(0,$.b0,L.e("#00164F"),!0)
a.j(0,$.b_,L.e("#00071A"),!0)
a.j(0,$.aU,L.e("#605542"),!0)
a.j(0,$.aV,L.e("#494132"),!0)
a.j(0,$.aT,L.e("#2D271E"),!0)
a.j(0,$.aZ,L.e("#CCC4B5"),!0)
a.j(0,$.aY,L.e("#A89F8D"),!0)
a.j(0,$.aX,L.e("#A29989"),!0)
a.j(0,$.aW,L.e("#918673"),!0)
b=P.k(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.k(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.k(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.k(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.k(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.k(H.a([new E.M($.eB,2,!0),new E.M($.hJ,1,!0),new E.M($.dA,-2,!0)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new K.mO(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(11,"Life",!0,!1,!1)
$.yk=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#9630BF"),!0)
h.j(0,$.aS,L.e("#cc87e8"),!0)
h.j(0,$.aR,L.e("#9545b7"),!0)
h.j(0,$.b0,L.e("#ae769b"),!0)
h.j(0,$.b_,L.e("#8f577c"),!0)
h.j(0,$.aU,L.e("#9630bf"),!0)
h.j(0,$.aV,L.e("#693773"),!0)
h.j(0,$.aT,L.e("#4c2154"),!0)
h.j(0,$.aZ,L.e("#fcf9bd"),!0)
h.j(0,$.aY,L.e("#e0d29e"),!0)
h.j(0,$.aX,L.e("#bdb968"),!0)
h.j(0,$.aW,L.e("#ab9b55"),!0)
g=P.k(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.k(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.k(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.k(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.k(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.k(H.a([new E.M($.dA,3,!0),new E.M($.cP,-2,!0)],k),l)
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aS,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF8700"),!0)
a.j(0,$.b0,L.e("#7F7F7F"),!0)
a.j(0,$.b_,L.e("#727272"),!0)
a.j(0,$.aU,L.e("#A3A3A3"),!0)
a.j(0,$.aV,L.e("#999999"),!0)
a.j(0,$.aT,L.e("#898989"),!0)
a.j(0,$.aZ,L.e("#EFEFEF"),!0)
a.j(0,$.aY,L.e("#DBDBDB"),!0)
a.j(0,$.aX,L.e("#C6C6C6"),!0)
a.j(0,$.aW,L.e("#ADADAD"),!0)
a=new Z.lf(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.af(12,"Dream",!1,!1,!1)
$.yf=a
a=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aQ,L.e("#9630BF"),!0)
a.j(0,$.aS,L.e("#cc87e8"),!0)
a.j(0,$.aR,L.e("#9545b7"),!0)
a.j(0,$.b0,L.e("#ae769b"),!0)
a.j(0,$.b_,L.e("#8f577c"),!0)
a.j(0,$.aU,L.e("#9630bf"),!0)
a.j(0,$.aV,L.e("#693773"),!0)
a.j(0,$.aT,L.e("#4c2154"),!0)
a.j(0,$.aZ,L.e("#fcf9bd"),!0)
a.j(0,$.aY,L.e("#e0d29e"),!0)
a.j(0,$.aX,L.e("#bdb968"),!0)
a.j(0,$.aW,L.e("#ab9b55"),!0)
b=P.k(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.k(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.k(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.k(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.k(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.k(H.a([new E.M($.dA,3,!0),new E.M($.cP,-2,!0)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new Q.mM(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(13,"Law",!1,!1,!0)
$.yj=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#ffff00"),!0)
h.j(0,$.aS,L.e("#ffff00"),!0)
h.j(0,$.aR,L.e("#ffff00"),!0)
h.j(0,$.b0,L.e("#508b2d"),!0)
h.j(0,$.b_,L.e("#316c0d"),!0)
h.j(0,$.aU,L.e("#dddd00"),!0)
h.j(0,$.aV,L.e("#afaf00"),!0)
h.j(0,$.aT,L.e("#8f8f00"),!0)
h.j(0,$.aZ,L.e("#ff0000"),!0)
h.j(0,$.aY,L.e("#a8000a"),!0)
h.j(0,$.aX,L.e("#b8151f"),!0)
h.j(0,$.aW,L.e("#8c1d1d"),!0)
g=P.k(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.k(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.k(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.k(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.k(H.a([new E.M($.c8,13,!0)],k),l)
b=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aQ,L.e("#FF9B00"),!0)
b.j(0,$.aS,L.e("#FF9B00"),!0)
b.j(0,$.aR,L.e("#FF8700"),!0)
b.j(0,$.b0,L.e("#7F7F7F"),!0)
b.j(0,$.b_,L.e("#727272"),!0)
b.j(0,$.aU,L.e("#A3A3A3"),!0)
b.j(0,$.aV,L.e("#999999"),!0)
b.j(0,$.aT,L.e("#898989"),!0)
b.j(0,$.aZ,L.e("#EFEFEF"),!0)
b.j(0,$.aY,L.e("#DBDBDB"),!0)
b.j(0,$.aX,L.e("#C6C6C6"),!0)
b.j(0,$.aW,L.e("#ADADAD"),!0)
b=new Z.mI(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
b.af(14,"Juice",!1,!1,!0)
$.yi=b
b=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aQ,L.e("#00ff00"),!0)
b.j(0,$.aS,L.e("#00ff00"),!0)
b.j(0,$.aR,L.e("#00ff00"),!0)
b.j(0,$.b0,L.e("#00ff00"),!0)
b.j(0,$.b_,L.e("#00cf00"),!0)
b.j(0,$.aU,L.e("#171717"),!0)
b.j(0,$.aV,L.e("#080808"),!0)
b.j(0,$.aT,L.e("#080808"),!0)
b.j(0,$.aZ,L.e("#616161"),!0)
b.j(0,$.aY,L.e("#3b3b3b"),!0)
b.j(0,$.aX,L.e("#4a4a4a"),!0)
b.j(0,$.aW,L.e("#292929"),!0)
c=P.k(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.k(H.a(["Shogun"],p),q)
e=P.k(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.k(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.k(H.a([new E.M($.hJ,13,!0)],k),l)
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aS,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF8700"),!0)
h.j(0,$.b0,L.e("#7F7F7F"),!0)
h.j(0,$.b_,L.e("#727272"),!0)
h.j(0,$.aU,L.e("#A3A3A3"),!0)
h.j(0,$.aV,L.e("#999999"),!0)
h.j(0,$.aT,L.e("#898989"),!0)
h.j(0,$.aZ,L.e("#EFEFEF"),!0)
h.j(0,$.aY,L.e("#DBDBDB"),!0)
h.j(0,$.aX,L.e("#C6C6C6"),!0)
h.j(0,$.aW,L.e("#ADADAD"),!0)
h=new K.o5(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.af(15,"Sauce",!1,!0,!1)
$.yq=h
h=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aQ,L.e("#933100"),!0)
h.j(0,$.aS,L.e("#933100"),!0)
h.j(0,$.aR,L.e("#682200"),!0)
h.j(0,$.b0,L.e("#4c3a27"),!0)
h.j(0,$.b_,L.e("#302418"),!0)
h.j(0,$.aU,L.e("#a0562b"),!0)
h.j(0,$.aV,L.e("#723e20"),!0)
h.j(0,$.aT,L.e("#442513"),!0)
h.j(0,$.aZ,L.e("#963c07"),!0)
h.j(0,$.aY,L.e("#682a06"),!0)
h.j(0,$.aX,L.e("#6d4d3a"),!0)
h.j(0,$.aW,L.e("#422e23"),!0)
g=P.k(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.k(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.k(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
d=P.k(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
c=P.k(H.a([new E.M($.eC,10,!0),new E.M($.cP,-2,!0)],k),l)
b=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aQ,L.e("#FF9B00"),!0)
b.j(0,$.aS,L.e("#FF9B00"),!0)
b.j(0,$.aR,L.e("#FF8700"),!0)
b.j(0,$.b0,L.e("#7F7F7F"),!0)
b.j(0,$.b_,L.e("#727272"),!0)
b.j(0,$.aU,L.e("#A3A3A3"),!0)
b.j(0,$.aV,L.e("#999999"),!0)
b.j(0,$.aT,L.e("#898989"),!0)
b.j(0,$.aZ,L.e("#EFEFEF"),!0)
b.j(0,$.aY,L.e("#DBDBDB"),!0)
b.j(0,$.aX,L.e("#C6C6C6"),!0)
b.j(0,$.aW,L.e("#ADADAD"),!0)
b=new L.oS(2,0.7,0.7,h,g,f,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",d,["Lightning","Ice","Taserface"],["Taser"],c,0.01,0.01,0.01,0.5,16,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,b,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
b.af(16,"Taze",!1,!1,!0)
$.ys=b
b=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aQ,L.e("#990000"),!0)
b.j(0,$.aS,L.e("#ff0200"),!0)
b.j(0,$.aR,L.e("#dd0000"),!0)
b.j(0,$.b0,L.e("#25334f"),!0)
b.j(0,$.b_,L.e("#07090f"),!0)
b.j(0,$.aU,L.e("#c64f4f"),!0)
b.j(0,$.aV,L.e("#a33f3f"),!0)
b.j(0,$.aT,L.e("#843333"),!0)
b.j(0,$.aZ,L.e("#b5c1d2"),!0)
b.j(0,$.aY,L.e("#939dac"),!0)
b.j(0,$.aX,L.e("#3c3e42"),!0)
b.j(0,$.aW,L.e("#202123"),!0)
c=P.k(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
d=P.k(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.k(H.a(["Empathetic","Arrowed","Emotioanal","Literal","Ravaging"],p),q)
f=P.k(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.k(H.a([new E.M($.eC,2,!0),new E.M($.cP,5,!0)],k),l)
m=new L.aK(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
m.j(0,$.aQ,L.e("#FF9B00"),!0)
m.j(0,$.aS,L.e("#FF9B00"),!0)
m.j(0,$.aR,L.e("#FF8700"),!0)
m.j(0,$.b0,L.e("#7F7F7F"),!0)
m.j(0,$.b_,L.e("#727272"),!0)
m.j(0,$.aU,L.e("#A3A3A3"),!0)
m.j(0,$.aV,L.e("#999999"),!0)
m.j(0,$.aT,L.e("#898989"),!0)
m.j(0,$.aZ,L.e("#EFEFEF"),!0)
m.j(0,$.aY,L.e("#DBDBDB"),!0)
m.j(0,$.aX,L.e("#C6C6C6"),!0)
m.j(0,$.aW,L.e("#ADADAD"),!0)
j=new V.o0(0.9,1.1,2,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,m,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
j.af(17,"Rule",!1,!1,!0)
$.yp=j
$.yn=L.yb(255,"Null",!1,!0,!1)
j=P.k(H.a([new E.M($.cP,1,!0),new E.M($.hH,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
g=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
f=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
d=P.k(H.a([],k),l)
c=H.a(["Nobody"],p)
b=H.a(["Nobody"],p)
q=new F.nf(j,q,m,g,f,!1,e,d,c,b,1,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cN(q)
$.zG=q
q=P.k(H.a([new E.M($.fp,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kr(q,m,j,i,h,!1,g,f,e,d,13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cN(q)
$.zz=q
q=P.k(H.a([new E.M($.hJ,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kw(q,m,j,i,h,!1,g,f,e,d,4,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cN(q)
$.zA=q
q=P.k(H.a([new E.M($.hI,-1,!0),new E.M($.hH,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kS(q,m,j,i,h,!1,g,f,e,d,0,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cN(q)
$.zB=q
q=P.k(H.a([new E.M($.cP,-1,!0),new E.M($.eB,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l3(q,m,j,i,h,!1,g,f,e,d,2,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cN(q)
$.zC=q
q=P.k(H.a([new E.M($.cP,1,!0),new E.M($.eD,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.ld(q,m,j,i,h,!1,g,f,e,d,8,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cN(q)
$.zD=q
q=P.k(H.a([new E.M($.hH,1,!0),new E.M($.dA,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lH(q,m,j,i,h,!1,g,f,e,d,7,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cN(q)
$.zE=q
q=P.k(H.a([new E.M($.hJ,1,!0),new E.M($.eB,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mJ(q,m,j,i,h,!1,g,f,e,d,6,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cN(q)
$.zF=q
q=P.k(H.a([new E.M($.eC,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nO(q,m,j,i,h,!1,g,f,e,d,9,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cN(q)
$.zI=q
q=P.k(H.a([new E.M($.eD,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.o_(q,m,j,i,h,!1,g,f,e,d,12,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cN(q)
$.zJ=q
q=P.k(H.a([new E.M($.cP,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oi(q,m,j,i,h,!1,g,f,e,d,11,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cN(q)
$.zK=q
q=P.k(H.a([new E.M($.eD,-1,!0),new E.M($.cP,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oW(q,m,j,i,h,!1,g,f,e,d,5,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cN(q)
$.zM=q
q=P.k(H.a([new E.M($.fp,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pB(q,m,j,i,h,!1,g,f,e,d,3,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cN(q)
$.zN=q
q=P.k(H.a([new E.M($.dA,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oU(q,m,j,i,h,!1,g,f,e,d,10,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cN(q)
$.zL=q
q=H.a(["nobody"],p)
l=P.k(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hf(!0,q,l,k,p,-13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"","","Null")
q.E()
q.F()
B.cN(q)
$.zH=q
A.wn()
t=3
return P.ck(Y.ng(),$async$rj)
case 3:case 1:return P.bl(r,s)}})
return P.bm($async$rj,s)}},V={ld:function ld(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},lY:function lY(a){this.a=a},nd:function nd(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nA:function nA(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},o0:function o0(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oW:function oW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
ze:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
s=Math.pow(256,e)
c.toString
r=H.cO(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.u(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.u(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ai(n-1,p)
t.ai(a,8)}return t.b1(b)},
zd:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dY(a,b)
for(q=e*8,p=0;p<c;){o=r.a8(q)+1
n=r.a8(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.u(s,l)
s[l]=n}p+=o}return s},
rW:function(a){return new V.ln(a)},
rV:function(a){return new V.lm(a)},
za:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cO(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.u(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.u(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ai(m-1,o)
t.ai(a,r)}return t.b1(b)},
z9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dY(a,b)
for(r=e*8,o=0;o<c;){n=p.a8(r)+1
m=p.a8(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.u(s,k)
s[k]=m}o+=n}return s},
rU:function(a){return new V.ll(a)},
rT:function(a){return new V.lk(a)},
zc:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cO(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.u(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.u(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.am(Math.log(n)/0.6931471805599453)+1
t.ai(k-1,5)
t.ai(n-1,k)
t.ai(a,r)}return t.b1(b)},
zb:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dY(a,b)
for(o=0;o<c;){n=p.a8(p.a8(5)+1)+1
m=p.a8(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
ln:function ln(a){this.a=a},
lm:function lm(a){this.a=a},
ll:function ll(a){this.a=a},
lk:function lk(a){this.a=a}},Z={lf:function lf(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
zo:function(){var t,s
if(!$.vx)$.vx=!0
else return
t=[P.B]
s=new Y.oY(H.a([],t))
$.ta=s
Z.cM(s,"txt",null)
Z.cM($.ta,"vert","x-shader/x-vertex")
Z.cM($.ta,"frag","x-shader/x-fragment")
$.zn=new Y.nV(H.a([],t))
$.vz=new Y.kM(H.a([],t))
s=new B.pG(H.a([],t))
$.vB=s
Z.cM(s,"zip",null)
Z.cM($.vB,"bundle",null)
s=new U.pw(H.a([],t))
$.zw=s
Z.cM(s,"words",null)
s=new Q.nM(H.a([],t))
$.vA=s
Z.cM(s,"png",null)
Z.cM($.vA,"jpg","image/jpeg")
$.zu=new Q.nJ(H.a([],t))
s=new M.on(H.a([],t))
$.zv=s
Z.cM(s,"psprite",null)
s=new V.lY(H.a([],t))
$.t9=s
Z.cM(s,"ttf",null)
Z.cM($.t9,"otf",null)
Z.cM($.t9,"woff",null)
s=new Y.ns(null,H.a([],t))
$.zr=s
Z.cM(s,"obj",null)
s=new U.n3(H.a([],t))
$.zp=s
Z.cM(s,"mp3",null)
$.zq=new U.oK(H.a([],t))
s=new U.nw(H.a([],t))
$.zs=s
Z.cM(s,"ogg",null)
$.zt=new U.oL(H.a([],t))},
cM:function(a,b,c){$.$get$lZ().i(0,b,new Z.ik(a,c,[null,null]))
a.a.push(b)},
vy:function(a){var t
if($.$get$lZ().a0(0,a)){t=$.$get$lZ().n(0,a)
if(t.a instanceof O.c5)return t
throw H.l("File format for extension ."+H.C(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.C(a))},
ik:function ik(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mI:function mI(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
n2:function n2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
tK:function tK(){},
tG:function tG(){},
tH:function tH(){}},X={il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i5:function i5(){},m7:function m7(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},mc:function mc(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={a6:function a6(){},mJ:function mJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},nS:function nS(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nZ:function nZ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},oi:function oi(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},oj:function oj(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},p3:function p3(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
Fc:function(a){var t,s,r,q,p,o,n,m,l
t=J.cK(a)
s=new W.k2(document.querySelectorAll("link"),[null])
for(r=new H.es(s,s.gm(s),0,null,[null]);r.I();){q=r.d
p=J.av(q)
if(!!p.$ishn&&q.rel==="stylesheet"){o=$.$get$nH()
H.C(p.gah(q))
o.toString
o=t.length
n=Math.min(o,J.cl(p.gah(q)))
for(m=0;m<n;++m){if(m>=o)return H.u(t,m)
if(t[m]!==J.i3(p.gah(q),m)){l=C.c.W(t,m)
$.$get$nH().toString
return l.split("/").length-1}continue}}}$.$get$nH().b8(C.m,"Didn't find a css link to derive relative path")
return 0},
nG:function(){var t=P.wW()
if(!$.$get$nF().a0(0,t))$.$get$nF().i(0,t,N.Fc(t))
return $.$get$nF().n(0,t)}},E={iz:function iz(){},nv:function nv(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fI:function fI(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},ne:function ne(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nU:function nU(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},o3:function o3(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},pr:function pr(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},B={m5:function m5(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
cN:function(a){var t=a.f
if($.$get$ml().a0(0,t))throw H.l("Duplicate aspect id for "+a.C(0)+": "+t+" is already registered for "+J.cK($.$get$ml().n(0,t))+".")
$.$get$ml().i(0,t,a)},
hf:function hf(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
pG:function pG(a){this.a=a},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
GJ:function(a){return a.b9(0)},
dB:function dB(a){this.a=a},
jV:function jV(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b}},Q={md:function md(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},mh:function mh(){},nM:function nM(a){this.a=a},nJ:function nJ(a){this.a=a},mM:function mM(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},o_:function o_(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},pq:function pq(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jA:function jA(){},
H:function(a,b,c){var t=new Q.dU(null,null,[c])
t.d5(a,b,c)
return t},
uC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.H(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dW(a,"$iso",[e],"$aso"))if(H.dW(a,"$iscS",[e],"$ascS"))for(s=J.dc(a.gbV()),r=0;s.I();){q=s.gR()
p=t.b
o=p.length
if(r>=o)return H.u(p,r)
p[r]=q;++r}else for(s=a.ga_(a),p=[H.P(t,0)],r=0;s.I();){n=s.gR()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.u(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.ga_(a),p=[e],o=[H.P(t,0)];s.I();){l=s.gR()
if(H.H_(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.u(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dW(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.u(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.C(J.uX(l))+" for WeightedList<"+H.C(H.bX(H.dE(e)))+">. Should be "+H.C(H.bX(H.dE(e)))+" or WeightPair<"+H.C(H.bX(H.dE(e)))+">.")}return t},
uD:function(a,b,c,d){return new Q.jS(J.uZ(a.gbV(),new Q.pu(c,d,b)),null,[c,d])},
cS:function cS(){},
dU:function dU(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hO:function hO(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eK:function eK(){},
hN:function hN(){},
pt:function pt(a,$ti){this.a=a
this.$ti=$ti},
jS:function jS(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pu:function pu(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function(){var t=0,s=P.bh(),r
var $async$o9=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:t=3
return P.ck(A.hp("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o9)
case 3:r=A.hp("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$o9,s)}},G={mP:function mP(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.O=O
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nO:function nO(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
yT:function(a){var t,s,r,q,p,o,n,m,l
t=G.a0
s=P.tR(a,t)
r=P.a4(null,null,null,t)
q=H.a([],[G.d])
for(t=G.EQ(),p=J.dc(t.a),t=new H.jT(p,t.b,[H.P(t,0)]);t.I();){o=p.gR()
if(o.ej(s))q.push(o)}C.b.d_(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bT)(q),++n){o=q[n]
if(o.ej(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bT)(p),++l)s.ak(0,p[l])}}if(s.a!==0)r.bL(0,s)
return r},
EQ:function(){var t=$.$get$b()
t.toString
return new H.hP(t,new G.my(),[H.P(t,0)])},
a0:function a0(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
my:function my(){}},F={nf:function nf(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},pA:function pA(a){this.a=a},pB:function pB(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
EV:function(a){if(a===C.h){window
return C.i.gas(C.i)}if(a===C.m){window
return C.i.ghV()}if(a===C.a_){window
return C.i.ghm()}return P.H2()},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
tP:function tP(){},
z8:function(a,b,c,d){var t,s,r,q
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bM(s[q])
return t.b1(b)},
z7:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dY(a,b)
for(q=0;q<c;++q){p=r.bW()
if(q>=t)return H.u(s,q)
s[q]=p}return s},
z6:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cO(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.u(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.u(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bM(o-1)
t.ai(a,r)}return t.b1(b)},
z5:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dY(a,b)
for(o=0;o<c;){n=p.bW()+1
m=p.a8(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
z4:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dr(new P.c9(""),0,0)
t.ai(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.u(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.u(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bM(p-1)
t.bM(a)}return t.b1(b)},
z3:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dY(a,b)
for(q=0;q<c;){p=r.bW()+1
o=r.bW()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.u(s,m)
s[m]=o}q+=p}return s}},R={
Fx:function(a){var t,s
if(a.gm(a).aC(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gi2(s).gih().e3("checking for two players, ps is "+H.C(a)+", ret is "+t)
return t},
Fl:function(a){a.gag(a).gbN()
return!1},
Fw:function(a){a.gag(a).gbN()
return!1},
Fv:function(a){a.gag(a).gbN()
return!1},
Fu:function(a){return a.gag(a).gbk().gig()},
Fs:function(a){return a.gag(a).gbk().gic()},
Fr:function(a){return a.gag(a).gbk().gib()},
Fo:function(a){return a.gag(a).gbk().gi9()},
Fq:function(a){return a.gag(a).gbk().gia()},
Ft:function(a){return a.gag(a).gbk().gie()},
Fp:function(a){var t=a.gag(a)
t.gbN()
t.gbN()
return!1},
Fm:function(a){return!0},
Fn:function(a){a.gag(a).gi6()
return!1},
nT:function nT(){},
a_:function a_(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
Q:function Q(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
a5:function a5(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
bA:function bA(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
oQ:function oQ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
ha:function ha(){},
u6:function u6(){},
u5:function u5(){}},D={oU:function oU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
G5:function(){if($.wG)return
$.wG=!0
var t=new D.cH("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=0
$.op=t
t=new D.cH("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.G4=t
t=new D.jW(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
t.Q=1
$.hJ=t
t=new D.jW(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
$.eB=t
t=new D.cH("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.G3=t
t=new D.cH("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.eC=t
t=new D.nX("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.eD=t
t=new D.cH("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.cP=t
t=new D.cH("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.fp=t
t=new D.cH("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.hH=t
t=new D.cH("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.hI=t
t=new D.cH("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.dA=t
t=new D.cH("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.c8=t},
uq:function(){var t=$.$get$cQ()
return new H.hP(t,new D.oq(),[H.P(t,0)])},
oq:function oq(){},
cH:function cH(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
jW:function jW(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
nX:function nX(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.tM.prototype={}
J.f.prototype={
S:function(a,b){return a===b},
ga7:function(a){return H.ev(a)},
C:function(a){return H.nQ(a)},
gab:function(a){return new H.dT(H.ki(a),null)},
$isha:1,
$isac:1,
$isfj:1,
$isac:1,
$ismE:1,
$isf:1,
$ismE:1,
$isf:1,
$isht:1,
$isac:1}
J.mC.prototype={
C:function(a){return String(a)},
ga7:function(a){return a?519018:218159},
gab:function(a){return C.ag},
$isd9:1}
J.mD.prototype={
S:function(a,b){return null==b},
C:function(a){return"null"},
ga7:function(a){return 0},
gab:function(a){return C.aa},
$isd5:1}
J.hl.prototype={
ga7:function(a){return 0},
gab:function(a){return C.a9},
C:function(a){return String(a)},
$ismE:1,
h:function(a,b){return a.add(b)},
ak:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbU:function(a){return a.left},
gbZ:function(a){return a.top},
gb3:function(a){return a.width},
gaY:function(a){return a.height},
hA:function(a,b){return a.parse(b)},
eB:function(a,b){return a.setLogging(b)},
eC:function(a,b){return a.setMaterials(b)}}
J.nL.prototype={}
J.eH.prototype={}
J.eq.prototype={
C:function(a){var t=a[$.$get$vf()]
return t==null?this.eH(a):J.cK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.eo.prototype={
bR:function(a,b){if(!!a.immutable$list)throw H.l(new P.V(b))},
bQ:function(a,b){if(!!a.fixed$length)throw H.l(new P.V(b))},
h:function(a,b){this.bQ(a,"add")
a.push(b)},
ak:function(a,b){var t
this.bQ(a,"remove")
for(t=0;t<a.length;++t)if(J.b8(a[t],b)){a.splice(t,1)
return!0}return!1},
aa:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.bM(a))}},
aw:function(a,b){return new H.fe(a,b,[H.P(a,0),null])},
b6:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.C(a[r])
if(r>=t)return H.u(s,r)
s[r]=q}return s.join(b)},
cZ:function(a,b){return H.wI(a,b,null,H.P(a,0))},
hb:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.bM(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
c2:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bF(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bt(c))
if(c<b||c>a.length)throw H.l(P.bF(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.P(a,0)])
return H.a(a.slice(b,c),[H.P(a,0)])},
gag:function(a){if(a.length>0)return a[0]
throw H.l(H.jl())},
gb7:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.jl())},
a9:function(a,b,c,d,e){var t,s,r
this.bR(a,"setRange")
P.dj(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.ba(P.bF(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.wh())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bS:function(a,b,c,d){var t
this.bR(a,"fill range")
P.dj(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aB:function(a,b,c,d){var t,s,r,q,p,o
this.bQ(a,"replaceRange")
P.dj(b,c,a.length,null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.V()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.az(a,b,r,d)
if(p!==0){this.a9(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a9(a,r,o,a,c)
this.az(a,b,r,d)}},
h8:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.bM(a))}return!0},
d0:function(a,b){var t
this.bR(a,"sort")
t=b==null?P.H1():b
H.jJ(a,0,a.length-1,t)},
d_:function(a){return this.d0(a,null)},
aZ:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b8(a[t],b))return t
return-1},
be:function(a,b){return this.aZ(a,b,0)},
aj:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b8(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
C:function(a){return P.jk(a,"[","]")},
a4:function(a,b){var t=H.a(a.slice(0),[H.P(a,0)])
return t},
ap:function(a){return this.a4(a,!0)},
ga_:function(a){return new J.i4(a,a.length,0,null,[H.P(a,0)])},
ga7:function(a){return H.ev(a)},
gm:function(a){return a.length},
sm:function(a,b){this.bQ(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.e_(b,"newLength",null))
if(b<0)throw H.l(P.bF(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b>=a.length||b<0)throw H.l(H.c2(a,b))
return a[b]},
i:function(a,b,c){this.bR(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b>=a.length||b<0)throw H.l(H.c2(a,b))
a[b]=c},
$isax:1,
$asax:function(){},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$iso:1,
$aso:null}
J.tL.prototype={}
J.i4.prototype={
gR:function(){return this.d},
I:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.bT(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fd.prototype={
av:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bt(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcC(b)
if(this.gcC(a)===t)return 0
if(this.gcC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcC:function(a){return a===0?1/a<0:a<0},
hJ:function(a,b){return a%b},
am:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.l(new P.V(""+a+".floor()"))},
b0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.V(""+a+".round()"))},
ac:function(a,b,c){if(C.a.av(b,c)>0)throw H.l(H.bt(b))
if(this.av(a,b)<0)return b
if(this.av(a,c)>0)return c
return a},
l:function(a){return a},
bf:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bF(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Y(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.ba(new P.V("Unexpected toString result: "+t))
r=J.bc(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.an("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga7:function(a){return a&0x1FFFFFFF},
cV:function(a){return-a},
U:function(a,b){if(typeof b!=="number")throw H.l(H.bt(b))
return a+b},
V:function(a,b){if(typeof b!=="number")throw H.l(H.bt(b))
return a-b},
an:function(a,b){if(typeof b!=="number")throw H.l(H.bt(b))
return a*b},
bz:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
bh:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dJ(a,b)},
al:function(a,b){return(a|0)===a?a/b|0:this.dJ(a,b)},
dJ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.l(new P.V("Result of truncating division is "+H.C(t)+": "+H.C(a)+" ~/ "+H.C(b)))},
aq:function(a,b){if(typeof b!=="number")throw H.l(H.bt(b))
if(b<0)throw H.l(H.bt(b))
return b>31?0:a<<b>>>0},
ar:function(a,b){return b>31?0:a<<b>>>0},
aU:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fG:function(a,b){if(b<0)throw H.l(H.bt(b))
return b>31?0:a>>>b},
dI:function(a,b){return b>31?0:a>>>b},
a5:function(a,b){if(typeof b!=="number")throw H.l(H.bt(b))
return a<b},
aC:function(a,b){if(typeof b!=="number")throw H.l(H.bt(b))
return a>b},
at:function(a,b){if(typeof b!=="number")throw H.l(H.bt(b))
return a>=b},
gab:function(a){return C.aj},
$isdp:1}
J.jo.prototype={
gab:function(a){return C.ai},
$isU:1,
$isdp:1,
$isD:1}
J.jn.prototype={
gab:function(a){return C.ah},
$isU:1,
$isdp:1}
J.ep.prototype={
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b<0)throw H.l(H.c2(a,b))
if(b>=a.length)H.ba(H.c2(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.l(H.c2(a,b))
return a.charCodeAt(b)},
cq:function(a,b,c){if(c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return new H.qM(b,a,c)},
aV:function(a,b){return this.cq(a,b,0)},
e8:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Y(b,c+s)!==this.a6(a,s))return
return new H.jO(c,b,a)},
U:function(a,b){if(typeof b!=="string")throw H.l(P.e_(b,null,null))
return a+b},
h7:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.W(a,s-t)},
cP:function(a,b,c){return H.xK(a,b,c)},
hN:function(a,b,c){return H.Hv(a,b,c,null)},
eE:function(a,b){if(b==null)H.ba(H.bt(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hk&&b.gdu().exec("").length-2===0)return a.split(b.gft())
else return this.fa(a,b)},
aB:function(a,b,c,d){var t,s
H.ea(b)
c=P.dj(b,c,a.length,null,null,null)
H.ea(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fa:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.xO(b,a),s=s.ga_(s),r=0,q=1;s.I();){p=s.gR()
o=p.gd1(p)
n=p.gdU(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.L(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.W(a,r))
return t},
aD:function(a,b,c){var t
H.ea(c)
if(typeof c!=="number")return c.a5()
if(c<0||c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.y1(b,a,c)!=null},
ae:function(a,b){return this.aD(a,b,0)},
L:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.ba(H.bt(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.ba(H.bt(c))
if(typeof b!=="number")return b.a5()
if(b<0)throw H.l(P.jG(b,null,null))
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.l(P.jG(b,null,null))
if(c>a.length)throw H.l(P.jG(c,null,null))
return a.substring(b,c)},
W:function(a,b){return this.L(a,b,null)},
hU:function(a){return a.toUpperCase()},
bg:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a6(t,0)===133){r=J.ER(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Y(t,q)===133?J.tI(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ek:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Y(t,r)===133)s=J.tI(t,r)}else{s=J.tI(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
an:function(a,b){var t,s
if(typeof b!=="number")return H.a8(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
cF:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.an(c,t)+a},
aZ:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
be:function(a,b){return this.aZ(a,b,0)},
hs:function(a,b,c){var t
if(b==null)H.ba(H.bt(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.ba(P.bF(t,0,c,null,null))
if(b.cb(a,t)!=null)return t}return-1},
e5:function(a,b){return this.hs(a,b,null)},
dS:function(a,b,c){if(c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
return H.Hu(a,b,c)},
aj:function(a,b){return this.dS(a,b,0)},
gX:function(a){return a.length===0},
av:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bt(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
C:function(a){return a},
ga7:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gab:function(a){return C.ab},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b>=a.length||b<0)throw H.l(H.c2(a,b))
return a[b]},
$isax:1,
$asax:function(){},
$isB:1}
H.kR.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Y(this.a,b)},
$ashL:function(){return[P.D]},
$asjp:function(){return[P.D]},
$ashC:function(){return[P.D]},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$aso:function(){return[P.D]}}
H.r.prototype={$asr:null}
H.er.prototype={
ga_:function(a){return new H.es(this,this.gm(this),0,null,[H.aE(this,"er",0)])},
aa:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.l(new P.bM(this))}},
gX:function(a){return this.gm(this)===0},
gag:function(a){if(this.gm(this)===0)throw H.l(H.jl())
return this.T(0,0)},
aj:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b8(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.bM(this))}return!1},
aw:function(a,b){return new H.fe(this,b,[H.aE(this,"er",0),null])},
a4:function(a,b){var t,s,r
t=H.a([],[H.aE(this,"er",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ap:function(a){return this.a4(a,!0)}}
H.oO.prototype={
gfb:function(){var t=J.cl(this.a)
return t},
gfH:function(){var t,s
t=J.cl(this.a)
s=this.b
if(J.cw(s,t))return t
return s},
gm:function(a){var t,s
t=J.cl(this.a)
s=this.b
if(J.uR(s,t))return 0
if(typeof s!=="number")return H.a8(s)
return t-s},
T:function(a,b){var t=J.dX(this.gfH(),b)
if(J.eb(b,0)||J.uR(t,this.gfb()))throw H.l(P.by(b,this,"index",null,null))
return J.uU(this.a,t)},
a4:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bc(s)
q=r.gm(s)
if(typeof t!=="number")return H.a8(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.u(n,m)
n[m]=o
if(r.gm(s)<q)throw H.l(new P.bM(this))}return n},
ap:function(a){return this.a4(a,!0)},
eQ:function(a,b,c,d){var t=this.b
if(J.eb(t,0))H.ba(P.bF(t,0,null,"start",null))}}
H.es.prototype={
gR:function(){return this.d},
I:function(){var t,s,r,q
t=this.a
s=J.bc(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.bM(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hs.prototype={
ga_:function(a){return new H.jq(null,J.dc(this.a),this.b,this.$ti)},
gm:function(a){return J.cl(this.a)},
gX:function(a){return J.rF(this.a)},
$aso:function(a,b){return[b]}}
H.fV.prototype={$isr:1,
$asr:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jq.prototype={
I:function(){var t=this.b
if(t.I()){this.a=this.c.$1(t.gR())
return!0}this.a=null
return!1},
gR:function(){return this.a},
$asjm:function(a,b){return[b]}}
H.fe.prototype={
gm:function(a){return J.cl(this.a)},
T:function(a,b){return this.b.$1(J.uU(this.a,b))},
$aser:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.hP.prototype={
ga_:function(a){return new H.jT(J.dc(this.a),this.b,this.$ti)},
aw:function(a,b){return new H.hs(this,b,[H.P(this,0),null])}}
H.jT.prototype={
I:function(){var t,s
for(t=this.a,s=this.b;t.I();)if(s.$1(t.gR())===!0)return!0
return!1},
gR:function(){return this.a.gR()}}
H.iw.prototype={
sm:function(a,b){throw H.l(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to a fixed-length list"))},
aB:function(a,b,c,d){throw H.l(new P.V("Cannot remove from a fixed-length list"))}}
H.pd.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to an unmodifiable list"))},
a9:function(a,b,c,d,e){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aB:function(a,b,c,d){throw H.l(new P.V("Cannot remove from an unmodifiable list"))},
bS:function(a,b,c,d){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$iso:1,
$aso:null}
H.hL.prototype={$asp:null,$asr:null,$aso:null,$isp:1,$isr:1,$iso:1}
H.rB.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rC.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qu.prototype={}
H.fv.prototype={
dO:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.co()},
hM:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ak(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.u(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.u(p,q)
p[q]=r
if(q===s.c)s.dm();++s.d}this.y=!1}this.co()},
fL:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.av(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.u(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hK:function(a){var t,s,r
if(this.ch==null)return
for(t=J.av(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.ba(new P.V("removeRange"))
P.dj(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eA:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hh:function(a,b,c){var t=J.av(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fE(a,c)
return}t=this.cx
if(t==null){t=P.tS(null,null)
this.cx=t}t.aK(0,new H.qp(a,c))},
hg:function(a,b){var t
if(!this.r.S(0,a))return
t=J.av(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bT()
return}t=this.cx
if(t==null){t=P.tS(null,null)
this.cx=t}t.aK(0,this.ghr())},
hi:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fC(a)
if(b!=null)P.fC(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cK(a)
s[1]=b==null?null:J.cK(b)
for(r=new P.dC(t,t.r,null,null,[null]),r.c=t.e;r.I();)J.fE(r.d,s)},
bo:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cv(o)
p=H.cu(o)
this.hi(q,p)
if(this.db===!0){this.bT()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghq()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.ed().$0()}return s},
cD:function(a){return this.b.n(0,a)},
d7:function(a,b){var t=this.b
if(t.a0(0,a))throw H.l(P.lp("Registry: ports must be registered only once."))
t.i(0,a,b)},
co:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bT()},
bT:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bc(0)
for(t=this.b,s=t.gc_(t),s=s.ga_(s);s.I();)s.gR().f3()
t.bc(0)
this.c.bc(0)
u.globalState.z.ak(0,this.a)
this.dx.bc(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.u(t,p)
J.fE(q,t[p])}this.ch=null}},
ghq:function(){return this.d},
gfW:function(){return this.e}}
H.qp.prototype={
$0:function(){J.fE(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.q0.prototype={
h1:function(){var t=this.a
if(t.b===t.c)return
return t.ed()},
eh:function(){var t,s,r
t=this.h1()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a0(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.ba(P.lp("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ho(["command","close"])
r=new H.dD(!0,new P.k6(0,null,null,null,null,null,0,[null,P.D])).ay(r)
s.toString
self.postMessage(r)}return!1}t.hG()
return!0},
dD:function(){if(self.window!=null)new H.q1(this).$0()
else for(;this.eh(););},
bv:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dD()
else try{this.dD()}catch(r){t=H.cv(r)
s=H.cu(r)
q=u.globalState.Q
p=P.ho(["command","error","msg",H.C(t)+"\n"+H.C(s)])
p=new H.dD(!0,P.hW(null,P.D)).ay(p)
q.toString
self.postMessage(p)}}}
H.q1.prototype={
$0:function(){if(!this.a.eh())return
P.wJ(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eN.prototype={
hG:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bo(this.b)}}
H.qt.prototype={}
H.mm.prototype={
$0:function(){H.zR(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mn.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fB(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fB(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.co()},
$S:function(){return{func:1,v:true}}}
H.pO.prototype={}
H.fw.prototype={
b4:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdt())return
r=H.GF(b)
if(t.gfW()===s){s=J.bc(r)
switch(s.n(r,0)){case"pause":t.dO(s.n(r,1),s.n(r,2))
break
case"resume":t.hM(s.n(r,1))
break
case"add-ondone":t.fL(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hK(s.n(r,1))
break
case"set-errors-fatal":t.eA(s.n(r,1),s.n(r,2))
break
case"ping":t.hh(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hg(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.ak(0,s)
break}return}u.globalState.f.a.aK(0,new H.eN(t,new H.qw(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fw&&J.b8(this.b,b.b)},
ga7:function(a){return this.b.gcd()}}
H.qw.prototype={
$0:function(){var t=this.a.b
if(!t.gdt())t.eZ(0,this.b)},
$S:function(){return{func:1}}}
H.i_.prototype={
b4:function(a,b){var t,s,r
t=P.ho(["command","message","port",this,"msg",b])
s=new H.dD(!0,P.hW(null,P.D)).ay(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.i_&&J.b8(this.b,b.b)&&J.b8(this.a,b.a)&&J.b8(this.c,b.c)},
ga7:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aq()
s=this.a
if(typeof s!=="number")return s.aq()
r=this.c
if(typeof r!=="number")return H.a8(r)
return(t<<16^s<<8^r)>>>0}}
H.fl.prototype={
f3:function(){this.c=!0
this.b=null},
eZ:function(a,b){if(this.c)return
this.b.$1(b)},
$isFy:1,
gcd:function(){return this.a},
gdt:function(){return this.c}}
H.p5.prototype={
eR:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aK(0,new H.eN(s,new H.p6(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dm(new H.p7(this,b),0),a)}else throw H.l(new P.V("Timer greater than 0."))}}
H.p6.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.p7.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dH.prototype={
ga7:function(a){var t=this.a
if(typeof t!=="number")return t.cY()
t=C.d.aU(t,0)^C.d.al(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dH){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcd:function(){return this.a}}
H.dD.prototype={
ay:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.av(a)
if(!!t.$isfg)return["buffer",a]
if(!!t.$iseu)return["typed",a]
if(!!t.$isax)return this.ew(a)
if(!!t.$iszO){r=this.ges()
q=t.ge4(a)
q=H.dx(q,r,H.aE(q,"o",0),null)
q=P.dh(q,!0,H.aE(q,"o",0))
t=t.gc_(a)
t=H.dx(t,r,H.aE(t,"o",0),null)
return["map",q,P.dh(t,!0,H.aE(t,"o",0))]}if(!!t.$ismE)return this.ex(a)
if(!!t.$isf)this.el(a)
if(!!t.$isFy)this.bx(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfw)return this.ey(a)
if(!!t.$isi_)return this.ez(a)
if(!!t.$iseV){p=a.$static_name
if(p==null)this.bx(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdH)return["capability",a.a]
if(!(a instanceof P.ac))this.el(a)
return["dart",u.classIdExtractor(a),this.ev(u.classFieldsExtractor(a))]},
bx:function(a,b){throw H.l(new P.V((b==null?"Can't transmit:":b)+" "+H.C(a)))},
el:function(a){return this.bx(a,null)},
ew:function(a){var t=this.eu(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bx(a,"Can't serialize indexable: ")},
eu:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.ay(a[s])
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ev:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.ay(a[t]))
return a},
ex:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bx(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.ay(a[t[r]])
if(r>=s.length)return H.u(s,r)
s[r]=q}return["js-object",t,s]},
ez:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ey:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcd()]
return["raw sendport",a]}}
H.eL.prototype={
aW:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dG("Bad serialized message: "+H.C(a)))
switch(C.b.gag(a)){case"ref":if(1>=a.length)return H.u(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.u(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bm(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bm(r),[null])
case"mutable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return this.bm(r)
case"const":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bm(r),[null])
s.fixed$length=Array
return s
case"map":return this.h5(a)
case"sendport":return this.h6(a)
case"raw sendport":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h4(a)
case"function":if(1>=a.length)return H.u(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.u(a,1)
return new H.dH(a[1])
case"dart":s=a.length
if(1>=s)return H.u(a,1)
q=a[1]
if(2>=s)return H.u(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bm(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.C(a))}},
bm:function(a){var t,s,r
t=J.bc(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
t.i(a,s,this.aW(t.n(a,s)));++s}return a},
h5:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q=P.mU()
this.b.push(q)
s=J.y6(J.uZ(s,this.gh3()))
for(t=J.bc(s),p=J.bc(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aW(p.n(r,o)))
return q},
h6:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
if(3>=t)return H.u(a,3)
q=a[3]
if(J.b8(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cD(q)
if(o==null)return
n=new H.fw(o,r)}else n=new H.i_(s,q,r)
this.b.push(n)
return n},
h4:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bc(s)
p=J.bc(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a8(n)
if(!(o<n))break
q[t.n(s,o)]=this.aW(p.n(r,o));++o}return q}}
H.kU.prototype={
gX:function(a){return this.gm(this)===0},
C:function(a){return P.wo(this)},
i:function(a,b,c){return H.yV()},
$isbq:1,
$asbq:null}
H.kV.prototype={
gm:function(a){return this.a},
a0:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.a0(0,b))return
return this.dl(b)},
dl:function(a){return this.b[a]},
aa:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dl(q))}}}
H.nW.prototype={}
H.pa.prototype={
aF:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.jw.prototype={
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.C(this.a)
return"NullError: method not found: '"+H.C(t)+"' on null"}}
H.mH.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.C(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.C(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.C(this.a)+")"}}
H.pc.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h2.prototype={
gaI:function(){return this.b}}
H.rD.prototype={
$1:function(a){if(!!J.av(a).$iseh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k8.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rp.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rq.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rr.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rs.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rt.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eV.prototype={
C:function(a){return"Closure '"+H.nR(this).trim()+"'"},
gi_:function(){return this},
$D:null}
H.oT.prototype={}
H.oo.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fL.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga7:function(a){var t,s
t=this.c
if(t==null)s=H.ev(this.a)
else s=typeof t!=="object"?J.dF(t):H.ev(t)
t=H.ev(this.b)
if(typeof s!=="number")return s.i3()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.C(this.d)+"' of "+H.nQ(t)}}
H.kO.prototype={
C:function(a){return this.a}}
H.o1.prototype={
C:function(a){return"RuntimeError: "+H.C(this.a)}}
H.dT.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga7:function(a){return J.dF(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dT&&J.b8(this.a,b.a)}}
H.v.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
ge4:function(a){return new H.mS(this,[H.P(this,0)])},
gc_:function(a){return H.dx(this.ge4(this),new H.mG(this),H.P(this,0),H.P(this,1))},
a0:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dg(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dg(s,b)}else return this.hn(b)},
hn:function(a){var t=this.d
if(t==null)return!1
return this.br(this.bD(t,this.bq(a)),a)>=0},
bL:function(a,b){b.aa(0,new H.mF(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bj(t,b)
return s==null?null:s.gaX()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bj(r,b)
return s==null?null:s.gaX()}else return this.ho(b)},
ho:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bD(t,this.bq(a))
r=this.br(s,a)
if(r<0)return
return s[r].gaX()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cf()
this.b=t}this.d6(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cf()
this.c=s}this.d6(s,b,c)}else{r=this.d
if(r==null){r=this.cf()
this.d=r}q=this.bq(b)
p=this.bD(r,q)
if(p==null)this.cm(r,q,[this.cg(b,c)])
else{o=this.br(p,b)
if(o>=0)p[o].saX(c)
else p.push(this.cg(b,c))}}},
ak:function(a,b){if(typeof b==="string")return this.dC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dC(this.c,b)
else return this.hp(b)},
hp:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bD(t,this.bq(a))
r=this.br(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dL(q)
return q.gaX()},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.l(new P.bM(this))
t=t.c}},
d6:function(a,b,c){var t=this.bj(a,b)
if(t==null)this.cm(a,b,this.cg(b,c))
else t.saX(c)},
dC:function(a,b){var t
if(a==null)return
t=this.bj(a,b)
if(t==null)return
this.dL(t)
this.dj(a,b)
return t.gaX()},
cg:function(a,b){var t,s
t=new H.mR(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dL:function(a){var t,s
t=a.gfA()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bq:function(a){return J.dF(a)&0x3ffffff},
br:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b8(a[s].ge2(),b))return s
return-1},
C:function(a){return P.wo(this)},
bj:function(a,b){return a[b]},
bD:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
dj:function(a,b){delete a[b]},
dg:function(a,b){return this.bj(a,b)!=null},
cf:function(){var t=Object.create(null)
this.cm(t,"<non-identifier-key>",t)
this.dj(t,"<non-identifier-key>")
return t},
$iszO:1,
$isbq:1,
$asbq:null}
H.mG.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mF.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eP(function(a,b){return{func:1,args:[a,b]}},this.a,"v")}}
H.mR.prototype={
ge2:function(){return this.a},
gaX:function(){return this.b},
gfA:function(){return this.d},
saX:function(a){return this.b=a}}
H.mS.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
ga_:function(a){var t,s
t=this.a
s=new H.mT(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
aj:function(a,b){return this.a.a0(0,b)},
aa:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.bM(t))
s=s.c}}}
H.mT.prototype={
gR:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rl.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rm.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.rn.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.hk.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdv:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tJ(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdu:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tJ(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
h9:function(a){var t=this.b.exec(a)
if(t==null)return
return new H.hX(this,t)},
cq:function(a,b,c){if(c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return new H.pJ(this,b,c)},
aV:function(a,b){return this.cq(a,b,0)},
fc:function(a,b){var t,s
t=this.gdv()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.hX(this,s)},
cb:function(a,b){var t,s
t=this.gdu()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.u(s,-1)
if(s.pop()!=null)return
return new H.hX(this,s)},
e8:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return this.cb(b,c)},
$isFA:1,
gft:function(){return this.b}}
H.hX.prototype={
gd1:function(a){return this.b.index},
gdU:function(a){var t=this.b
return t.index+t[0].length},
b9:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.u(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$isdy:1}
H.pJ.prototype={
ga_:function(a){return new H.jY(this.a,this.b,this.c,null)},
$ashj:function(){return[P.dy]},
$aso:function(){return[P.dy]}}
H.jY.prototype={
gR:function(){return this.d},
I:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fc(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jO.prototype={
gdU:function(a){return this.a+this.c.length},
n:function(a,b){return this.b9(b)},
b9:function(a){if(a!==0)throw H.l(P.jG(a,null,null))
return this.c},
$isdy:1,
gd1:function(a){return this.a}}
H.qM.prototype={
ga_:function(a){return new H.qN(this.a,this.b,this.c,null)},
$aso:function(){return[P.dy]}}
H.qN.prototype={
I:function(){var t,s,r,q,p,o,n
t=this.c
s=this.b
r=s.length
q=this.a
p=q.length
if(t+r>p){this.d=null
return!1}o=q.indexOf(s,t)
if(o<0){this.c=p+1
this.d=null
return!1}n=o+r
this.d=new H.jO(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gR:function(){return this.d}}
H.fg.prototype={
gab:function(a){return C.a2},
fR:function(a,b,c){return H.cO(a,b,c)},
fQ:function(a){return this.fR(a,0,null)},
fP:function(a,b,c){var t
H.xg(a,b,c)
t=new DataView(a,b)
return t},
fO:function(a,b){return this.fP(a,b,null)},
$isfg:1,
$isbg:1,
ge6:function(a){return a.byteLength}}
H.eu.prototype={
fp:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.e_(b,d,"Invalid list position"))
else throw H.l(P.bF(b,0,c,d,null))},
da:function(a,b,c,d){if(b>>>0!==b||b>c)this.fp(a,b,c,d)},
$iseu:1,
gbO:function(a){return a.buffer},
ge6:function(a){return a.byteLength}}
H.nh.prototype={
gab:function(a){return C.a3}}
H.jt.prototype={
gm:function(a){return a.length},
dH:function(a,b,c,d,e){var t,s,r
t=a.length
this.da(a,b,t,"start")
this.da(a,c,t,"end")
if(typeof b!=="number")return b.aC()
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.l(P.bF(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a5()
if(e<0)throw H.l(P.dG(e))
r=d.length
if(r-e<s)throw H.l(new P.dR("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaD:1,
$asaD:function(){},
$isax:1,
$asax:function(){}}
H.hw.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.av(d).$ishw){this.dH(a,b,c,d,e)
return}this.d3(a,b,c,d,e)},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)}}
H.hy.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.U]},
$asr:function(){return[P.U]},
$aso:function(){return[P.U]},
$isp:1,
$isr:1,
$iso:1}
H.hA.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.U]},
$asr:function(){return[P.U]},
$aso:function(){return[P.U]}}
H.hx.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.av(d).$ishx){this.dH(a,b,c,d,e)
return}this.d3(a,b,c,d,e)},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.hz.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$aso:function(){return[P.D]},
$isp:1,
$isr:1,
$iso:1}
H.hB.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$aso:function(){return[P.D]}}
H.ni.prototype={
gab:function(a){return C.a4},
$isp:1,
$asp:function(){return[P.U]},
$isr:1,
$asr:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.nj.prototype={
gab:function(a){return C.a5},
$isp:1,
$asp:function(){return[P.U]},
$isr:1,
$asr:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.nk.prototype={
gab:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nl.prototype={
gab:function(a){return C.a7},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nm.prototype={
gab:function(a){return C.a8},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nn.prototype={
gab:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.no.prototype={
gab:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.ju.prototype={
gab:function(a){return C.ae},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.fh.prototype={
gab:function(a){return C.af},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
c2:function(a,b,c){return new Uint8Array(a.subarray(b,H.GE(b,c,a.length)))},
$isfh:1,
$isd8:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
P.pL.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pK.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pM.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pN.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.r0.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r1.prototype={
$2:function(a,b){this.a.$2(1,new H.h2(a,b))},
$S:function(){return{func:1,args:[,P.dQ]}}}
P.rb.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.D,,]}}}
P.cE.prototype={}
P.rd.prototype={
$0:function(){var t,s,r
try{this.b.aE(this.a.$0())}catch(r){t=H.cv(r)
s=H.cu(r)
P.xh(this.b,t,s)}},
$S:function(){return{func:1}}}
P.m0.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ao(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.m_.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.u(r,t)
r[t]=a
if(s===0)this.d.df(r)}else if(t.b===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eW.prototype={}
P.k_.prototype={
ct:function(a,b){if(a==null)a=new P.fi()
if(this.a.a!==0)throw H.l(new P.dR("Future already completed"))
$.ao.toString
this.ao(a,b)},
bl:function(a){return this.ct(a,null)},
$iseW:1,
ghe:function(){return this.a}}
P.dV.prototype={
aA:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dR("Future already completed"))
t.d8(b)},
fU:function(a){return this.aA(a,null)},
ao:function(a,b){this.a.d9(a,b)}}
P.ka.prototype={
aA:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dR("Future already completed"))
t.aE(b)},
ao:function(a,b){this.a.ao(a,b)}}
P.k3.prototype={
gfK:function(){return this.b.b},
gdZ:function(){return(this.c&1)!==0},
ghl:function(){return(this.c&2)!==0},
gdY:function(){return this.c===8},
hj:function(a){return this.b.b.cQ(this.d,a)},
ht:function(a){if(this.c!==6)return!0
return this.b.b.cQ(this.d,J.fD(a))},
hf:function(a){var t,s,r
t=this.e
s=J.bI(a)
r=this.b.b
if(H.fB(t,{func:1,args:[,,]}))return r.hQ(t,s.gas(a),a.gaI())
else return r.cQ(t,s.gas(a))},
hk:function(){return this.b.b.ef(this.d)},
gci:function(){return this.a}}
P.bj.prototype={
gfq:function(){return this.a===2},
gce:function(){return this.a>=4},
bY:function(a,b){var t=$.ao
if(t!==C.e){t.toString
if(b!=null)b=P.xk(b,t)}return this.cn(a,b)},
aR:function(a){return this.bY(a,null)},
cn:function(a,b){var t,s
t=new P.bj(0,$.ao,null,[null])
s=b==null?1:3
this.c3(new P.k3(null,t,s,a,b,[H.P(this,0),null]))
return t},
c0:function(a){var t,s
t=$.ao
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.P(this,0)
this.c3(new P.k3(null,s,8,a,null,[t,t]))
return s},
c3:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gce()){s.c3(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fz(null,null,t,new P.q6(this,a))}},
dB:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gci()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gce()){p.dB(a)
return}this.a=p.a
this.c=p.c}t.a=this.bI(a)
s=this.b
s.toString
P.fz(null,null,s,new P.qe(t,this))}},
bH:function(){var t=this.c
this.c=null
return this.bI(t)},
bI:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gci()
t.a=s}return s},
aE:function(a){var t,s
t=this.$ti
if(H.dW(a,"$iscE",t,"$ascE"))if(H.dW(a,"$isbj",t,null))P.q9(a,this)
else P.x6(a,this)
else{s=this.bH()
this.a=4
this.c=a
P.fu(this,s)}},
df:function(a){var t=this.bH()
this.a=4
this.c=a
P.fu(this,t)},
ao:function(a,b){var t=this.bH()
this.a=8
this.c=new P.eR(a,b)
P.fu(this,t)},
f5:function(a){return this.ao(a,null)},
d8:function(a){var t
if(H.dW(a,"$iscE",this.$ti,"$ascE")){this.f2(a)
return}this.a=1
t=this.b
t.toString
P.fz(null,null,t,new P.q8(this,a))},
f2:function(a){var t
if(H.dW(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fz(null,null,t,new P.qd(this,a))}else P.q9(a,this)
return}P.x6(a,this)},
d9:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fz(null,null,t,new P.q7(this,a,b))},
$iscE:1,
gbJ:function(){return this.a},
gfD:function(){return this.c}}
P.q6.prototype={
$0:function(){P.fu(this.a,this.b)},
$S:function(){return{func:1}}}
P.qe.prototype={
$0:function(){P.fu(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qa.prototype={
$1:function(a){var t=this.a
t.a=0
t.aE(a)},
$S:function(){return{func:1,args:[,]}}}
P.qb.prototype={
$2:function(a,b){this.a.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qc.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.q8.prototype={
$0:function(){this.a.df(this.b)},
$S:function(){return{func:1}}}
P.qd.prototype={
$0:function(){P.q9(this.b,this.a)},
$S:function(){return{func:1}}}
P.q7.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qh.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hk()}catch(q){s=H.cv(q)
r=H.cu(q)
if(this.c){p=J.fD(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eR(s,r)
o.a=!0
return}if(!!J.av(t).$iscE){if(t instanceof P.bj&&t.gbJ()>=4){if(t.gbJ()===8){p=this.b
p.b=t.gfD()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.aR(new P.qi(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qi.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qg.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hj(this.c)}catch(r){t=H.cv(r)
s=H.cu(r)
q=this.a
q.b=new P.eR(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qf.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ht(t)===!0&&q.e!=null){p=this.b
p.b=q.hf(t)
p.a=!1}}catch(o){s=H.cv(o)
r=H.cu(o)
q=this.a
p=J.fD(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eR(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jZ.prototype={}
P.dk.prototype={
aw:function(a,b){return new P.qv(b,this,[H.aE(this,"dk",0),null])},
aj:function(a,b){var t,s
t={}
s=new P.bj(0,$.ao,null,[P.d9])
t.a=null
t.a=this.aN(new P.ov(t,this,b,s),!0,new P.ow(s),s.gba())
return s},
aa:function(a,b){var t,s
t={}
s=new P.bj(0,$.ao,null,[null])
t.a=null
t.a=this.aN(new P.oB(t,this,b,s),!0,new P.oC(s),s.gba())
return s},
gm:function(a){var t,s
t={}
s=new P.bj(0,$.ao,null,[P.D])
t.a=0
this.aN(new P.oF(t),!0,new P.oG(t,s),s.gba())
return s},
gX:function(a){var t,s
t={}
s=new P.bj(0,$.ao,null,[P.d9])
t.a=null
t.a=this.aN(new P.oD(t,s),!0,new P.oE(s),s.gba())
return s},
ap:function(a){var t,s,r
t=H.aE(this,"dk",0)
s=H.a([],[t])
r=new P.bj(0,$.ao,null,[[P.p,t]])
this.aN(new P.oH(this,s),!0,new P.oI(s,r),r.gba())
return r},
gag:function(a){var t,s
t={}
s=new P.bj(0,$.ao,null,[H.aE(this,"dk",0)])
t.a=null
t.a=this.aN(new P.ox(t,this,s),!0,new P.oy(s),s.gba())
return s}}
P.ov.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xo(new P.ot(this.c,a),new P.ou(t,s),P.xf(t.a,s))},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dk")}}
P.ot.prototype={
$0:function(){return J.b8(this.b,this.a)},
$S:function(){return{func:1}}}
P.ou.prototype={
$1:function(a){if(a===!0)P.uH(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d9]}}}
P.ow.prototype={
$0:function(){this.a.aE(!1)},
$S:function(){return{func:1}}}
P.oB.prototype={
$1:function(a){P.xo(new P.oz(this.c,a),new P.oA(),P.xf(this.a.a,this.d))},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dk")}}
P.oz.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oA.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oC.prototype={
$0:function(){this.a.aE(null)},
$S:function(){return{func:1}}}
P.oF.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oG.prototype={
$0:function(){this.b.aE(this.a.a)},
$S:function(){return{func:1}}}
P.oD.prototype={
$1:function(a){P.uH(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oE.prototype={
$0:function(){this.a.aE(!0)},
$S:function(){return{func:1}}}
P.oH.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.a,"dk")}}
P.oI.prototype={
$0:function(){this.b.aE(this.a)},
$S:function(){return{func:1}}}
P.ox.prototype={
$1:function(a){P.uH(this.a.a,this.c,a)},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dk")}}
P.oy.prototype={
$0:function(){var t,s,r,q
try{r=H.jl()
throw H.l(r)}catch(q){t=H.cv(q)
s=H.cu(q)
P.xh(this.a,t,s)}},
$S:function(){return{func:1}}}
P.os.prototype={}
P.dl.prototype={
cH:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dP()
if((t&4)===0&&(this.e&32)===0)this.dn(this.gdz())},
eb:function(a){return this.cH(a,null)},
ee:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.c1(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dn(this.gdA())}}}},
bP:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c5()
t=this.f
return t==null?$.$get$hb():t},
c5:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dP()
if((this.e&32)===0)this.r=null
this.f=this.dw()},
bC:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dE(b)
else this.c4(new P.pV(b,null,[H.aE(this,"dl",0)]))},
bB:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dG(a,b)
else this.c4(new P.pX(a,b,null))},
f0:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dF()
else this.c4(C.J)},
bF:function(){},
bG:function(){},
dw:function(){return},
c4:function(a){var t,s
t=this.r
if(t==null){t=new P.qK(null,null,0,[H.aE(this,"dl",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c1(this)}},
dE:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cR(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c6((t&4)!==0)},
dG:function(a,b){var t,s
t=this.e
s=new P.pQ(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c5()
t=this.f
if(!!J.av(t).$iscE&&t!==$.$get$hb())t.c0(s)
else s.$0()}else{s.$0()
this.c6((t&4)!==0)}},
dF:function(){var t,s
t=new P.pP(this)
this.c5()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.av(s).$iscE&&s!==$.$get$hb())s.c0(t)
else t.$0()},
dn:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c6((t&4)!==0)},
c6:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gX(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gX(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bF()
else this.bG()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c1(this)},
eU:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xk(b,t)
this.c=c},
gbJ:function(){return this.e}}
P.pQ.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fB(s,{func:1,args:[P.ac,P.dQ]})
q=t.d
p=this.b
o=t.b
if(r)q.hR(o,p,this.c)
else q.cR(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pP.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eg(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k1.prototype={
gbs:function(a){return this.a},
sbs:function(a,b){return this.a=b}}
P.pV.prototype={
cI:function(a){a.dE(this.b)}}
P.pX.prototype={
cI:function(a){a.dG(this.b,this.c)},
$ask1:function(){},
gas:function(a){return this.b},
gaI:function(){return this.c}}
P.pW.prototype={
cI:function(a){a.dF()},
gbs:function(a){return},
sbs:function(a,b){throw H.l(new P.dR("No events after a done."))}}
P.qx.prototype={
c1:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xH(new P.qy(this,a))
this.a=1},
dP:function(){if(this.a===1)this.a=3},
gbJ:function(){return this.a}}
P.qy.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbs(r)
t.b=q
if(q==null)t.c=null
r.cI(this.b)},
$S:function(){return{func:1}}}
P.qK.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbs(0,b)
this.c=b}}}
P.qL.prototype={}
P.r3.prototype={
$0:function(){return this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.r2.prototype={
$2:function(a,b){P.GD(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dQ]}}}
P.r4.prototype={
$0:function(){return this.a.aE(this.b)},
$S:function(){return{func:1}}}
P.hT.prototype={
aN:function(a,b,c,d){return this.f8(a,d,c,!0===b)},
e7:function(a,b,c){return this.aN(a,null,b,c)},
f8:function(a,b,c,d){return P.Gi(this,a,b,c,d,H.aE(this,"hT",0),H.aE(this,"hT",1))},
dq:function(a,b){b.bC(0,a)},
fn:function(a,b,c){c.bB(a,b)},
$asdk:function(a,b){return[b]}}
P.hU.prototype={
bC:function(a,b){if((this.e&2)!==0)return
this.eJ(0,b)},
bB:function(a,b){if((this.e&2)!==0)return
this.eK(a,b)},
bF:function(){var t=this.y
if(t==null)return
t.eb(0)},
bG:function(){var t=this.y
if(t==null)return
t.ee(0)},
dw:function(){var t=this.y
if(t!=null){this.y=null
return t.bP(0)}return},
fi:function(a){this.x.dq(a,this)},
fm:function(a,b){this.x.fn(a,b,this)},
fk:function(){this.f0()},
eX:function(a,b,c,d,e,f,g){this.y=this.x.a.e7(this.gfh(),this.gfj(),this.gfl())},
$asdl:function(a,b){return[b]}}
P.qv.prototype={
dq:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cv(q)
r=H.cu(q)
P.GC(b,s,r)
return}b.bC(0,t)}}
P.eR.prototype={
C:function(a){return H.C(this.a)},
$iseh:1,
gas:function(a){return this.a},
gaI:function(){return this.b}}
P.r_.prototype={}
P.ra.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fi()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cK(s)
throw r},
$S:function(){return{func:1}}}
P.qB.prototype={
eg:function(a){var t,s,r,q
try{if(C.e===$.ao){r=a.$0()
return r}r=P.xl(null,null,this,a)
return r}catch(q){t=H.cv(q)
s=H.cu(q)
r=P.kd(null,null,this,t,s)
return r}},
cR:function(a,b){var t,s,r,q
try{if(C.e===$.ao){r=a.$1(b)
return r}r=P.xn(null,null,this,a,b)
return r}catch(q){t=H.cv(q)
s=H.cu(q)
r=P.kd(null,null,this,t,s)
return r}},
hR:function(a,b,c){var t,s,r,q
try{if(C.e===$.ao){r=a.$2(b,c)
return r}r=P.xm(null,null,this,a,b,c)
return r}catch(q){t=H.cv(q)
s=H.cu(q)
r=P.kd(null,null,this,t,s)
return r}},
cs:function(a,b){if(b)return new P.qC(this,a)
else return new P.qD(this,a)},
fS:function(a,b){return new P.qE(this,a)},
n:function(a,b){return},
ef:function(a){if($.ao===C.e)return a.$0()
return P.xl(null,null,this,a)},
cQ:function(a,b){if($.ao===C.e)return a.$1(b)
return P.xn(null,null,this,a,b)},
hQ:function(a,b,c){if($.ao===C.e)return a.$2(b,c)
return P.xm(null,null,this,a,b,c)}}
P.qC.prototype={
$0:function(){return this.a.eg(this.b)},
$S:function(){return{func:1}}}
P.qD.prototype={
$0:function(){return this.a.ef(this.b)},
$S:function(){return{func:1}}}
P.qE.prototype={
$1:function(a){return this.a.cR(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qk.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gc_:function(a){var t=H.P(this,0)
return H.dx(new P.ql(this,[t]),new P.qn(this),t,H.P(this,1))},
a0:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f7(b)},
f7:function(a){var t=this.d
if(t==null)return!1
return this.aM(t[this.aL(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.ff(0,b)},
ff:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(b)]
r=this.aM(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uF()
this.b=t}this.dd(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uF()
this.c=s}this.dd(s,b,c)}else this.fE(b,c)},
fE:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uF()
this.d=t}s=this.aL(a)
r=t[s]
if(r==null){P.uG(t,s,[a,b]);++this.a
this.e=null}else{q=this.aM(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cl(0,b)},
cl:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(b)]
r=this.aM(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
aa:function(a,b){var t,s,r,q
t=this.c8()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.bM(this))}},
c8:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.e
if(t!=null)return t
s=new Array(this.a)
s.fixed$length=Array
r=this.b
if(r!=null){q=Object.getOwnPropertyNames(r)
p=q.length
for(o=0,n=0;n<p;++n){s[o]=q[n];++o}}else o=0
m=this.c
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(n=0;n<p;++n){s[o]=+q[n];++o}}l=this.d
if(l!=null){q=Object.getOwnPropertyNames(l)
p=q.length
for(n=0;n<p;++n){k=l[q[n]]
j=k.length
for(i=0;i<j;i+=2){s[o]=k[i];++o}}}this.e=s
return s},
dd:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uG(a,b,c)},
bi:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Gk(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aL:function(a){return J.dF(a)&0x3ffffff},
aM:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b8(a[s],b))return s
return-1},
$isbq:1,
$asbq:null}
P.qn.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ql.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
ga_:function(a){var t=this.a
return new P.qm(t,t.c8(),0,null,this.$ti)},
aj:function(a,b){return this.a.a0(0,b)},
aa:function(a,b){var t,s,r,q
t=this.a
s=t.c8()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.bM(t))}}}
P.qm.prototype={
gR:function(){return this.d},
I:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.bM(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k6.prototype={
bq:function(a){return H.Hm(a)&0x3ffffff},
br:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge2()
if(r==null?b==null:r===b)return s}return-1}}
P.k5.prototype={
ga_:function(a){var t=new P.dC(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
aj:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f6(b)},
f6:function(a){var t=this.d
if(t==null)return!1
return this.aM(t[this.aL(a)],a)>=0},
cD:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.aj(0,a)?a:null
else return this.fs(a)},
fs:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(a)]
r=this.aM(s,a)
if(r<0)return
return J.i3(s,r).gdk()},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.l(new P.bM(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dc(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dc(r,b)}else return this.aK(0,b)},
aK:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Gl()
this.d=t}s=this.aL(b)
r=t[s]
if(r==null)t[s]=[this.c7(b)]
else{if(this.aM(r,b)>=0)return!1
r.push(this.c7(b))}return!0},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cl(0,b)},
cl:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aL(b)]
r=this.aM(s,b)
if(r<0)return!1
this.de(s.splice(r,1)[0])
return!0},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dc:function(a,b){if(a[b]!=null)return!1
a[b]=this.c7(b)
return!0},
bi:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.de(t)
delete a[b]
return!0},
c7:function(a){var t,s
t=new P.qr(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
de:function(a){var t,s
t=a.gf4()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aL:function(a){return J.dF(a)&0x3ffffff},
aM:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b8(a[s].gdk(),b))return s
return-1},
$iseA:1,
$isr:1,
$asr:null,
$iso:1,
$aso:null}
P.qr.prototype={
gdk:function(){return this.a},
gf4:function(){return this.c}}
P.dC.prototype={
gR:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qo.prototype={}
P.fc.prototype={
aw:function(a,b){return H.dx(this,b,H.aE(this,"fc",0),null)},
aj:function(a,b){var t
for(t=this.ga_(this);t.I();)if(J.b8(t.gR(),b))return!0
return!1},
aa:function(a,b){var t
for(t=this.ga_(this);t.I();)b.$1(t.gR())},
a4:function(a,b){return P.dh(this,!0,H.aE(this,"fc",0))},
ap:function(a){return this.a4(a,!0)},
gm:function(a){var t,s
t=this.ga_(this)
for(s=0;t.I();)++s
return s},
gX:function(a){return!this.ga_(this).I()},
C:function(a){return P.tF(this,"(",")")},
$iso:1,
$aso:null}
P.hj.prototype={}
P.jp.prototype={}
P.hC.prototype={$asp:null,$asr:null,$aso:null,$isp:1,$isr:1,$iso:1}
P.b3.prototype={
ga_:function(a){return new H.es(a,this.gm(a),0,null,[H.aE(a,"b3",0)])},
T:function(a,b){return this.n(a,b)},
aa:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.bM(a))}},
gX:function(a){return this.gm(a)===0},
aj:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b8(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.bM(a))}return!1},
aw:function(a,b){return new H.fe(a,b,[H.aE(a,"b3",0),null])},
cZ:function(a,b){return H.wI(a,b,null,H.aE(a,"b3",0))},
a4:function(a,b){var t,s,r
t=H.a([],[H.aE(a,"b3",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ap:function(a){return this.a4(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bS:function(a,b,c,d){var t
P.dj(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a9:function(a,b,c,d,e){var t,s,r,q,p,o
P.dj(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.V()
if(typeof b!=="number")return H.a8(b)
t=c-b
if(t===0)return
if(J.eb(e,0))H.ba(P.bF(e,0,null,"skipCount",null))
if(H.dW(d,"$isp",[H.aE(a,"b3",0)],"$asp")){s=e
r=d}else{r=J.y4(d,e).a4(0,!1)
s=0}q=J.kg(s)
p=J.bc(r)
if(J.cw(q.U(s,t),p.gm(r)))throw H.l(H.wh())
if(q.a5(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.U(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.U(s,o)))},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aB:function(a,b,c,d){var t,s,r,q,p
P.dj(b,c,this.gm(a),null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.V()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.az(a,b,r,d)
if(q!==0){this.a9(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a9(a,r,p,a,c)
this.az(a,b,r,d)}},
aZ:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b8(this.n(a,t),b))return t
return-1},
be:function(a,b){return this.aZ(a,b,0)},
C:function(a){return P.jk(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$iso:1,
$aso:null}
P.qS.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify unmodifiable map"))},
$isbq:1,
$asbq:null}
P.n7.prototype={
n:function(a,b){return J.i3(this.a,b)},
i:function(a,b,c){J.kl(this.a,b,c)},
aa:function(a,b){J.xV(this.a,b)},
gX:function(a){return J.rF(this.a)},
gm:function(a){return J.cl(this.a)},
C:function(a){return J.cK(this.a)},
$isbq:1,
$asbq:null}
P.hM.prototype={$asbq:null,$isbq:1}
P.n8.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.C(a)
t.N=s+": "
t.N+=H.C(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mV.prototype={
ga_:function(a){return new P.qs(this,this.c,this.d,this.b,null,this.$ti)},
aa:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.u(r,s)
b.$1(r[s])
if(t!==this.d)H.ba(new P.bM(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a8(b)
if(0>b||b>=t)H.ba(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.u(s,q)
return s[q]},
a4:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fJ(t)
return t},
ap:function(a){return this.a4(a,!0)},
h:function(a,b){this.aK(0,b)},
bc:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.u(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jk(this,"{","}")},
ed:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.jl());++this.d
s=this.a
r=s.length
if(t>=r)return H.u(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aK:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.u(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dm();++this.d},
dm:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a9(s,0,q,t,r)
C.b.a9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fJ:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a9(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a9(a,0,p,r,t)
C.b.a9(a,p,p+this.c,this.a,0)
return this.c+p}},
eO:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$aso:null}
P.qs.prototype={
gR:function(){return this.e},
I:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.ba(new P.bM(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.u(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.od.prototype={
gX:function(a){return this.a===0},
bL:function(a,b){var t
for(t=J.dc(b);t.I();)this.h(0,t.gR())},
a4:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dC(this,this.r,null,null,[null]),s.c=this.e,r=0;s.I();r=p){q=s.d
p=r+1
if(r>=t.length)return H.u(t,r)
t[r]=q}return t},
ap:function(a){return this.a4(a,!0)},
aw:function(a,b){return new H.fV(this,b,[H.P(this,0),null])},
C:function(a){return P.jk(this,"{","}")},
aa:function(a,b){var t
for(t=new P.dC(this,this.r,null,null,[null]),t.c=this.e;t.I();)b.$1(t.d)},
b6:function(a,b){var t,s
t=new P.dC(this,this.r,null,null,[null])
t.c=this.e
if(!t.I())return""
if(b===""){s=""
do s+=H.C(t.d)
while(t.I())}else{s=H.C(t.d)
for(;t.I();)s=s+b+H.C(t.d)}return s.charCodeAt(0)==0?s:s},
$iseA:1,
$isr:1,
$asr:null,
$iso:1,
$aso:null}
P.oc.prototype={}
P.kD.prototype={
hx:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bc(b)
a1=P.dj(a0,a1,t.gm(b),null,null,null)
s=$.$get$x5()
if(typeof a1!=="number")return H.a8(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Y(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rk(C.c.a6(b,l))
h=H.rk(C.c.a6(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.u(s,g)
f=s[g]
if(f>=0){g=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.U()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c9("")
p.N+=C.c.L(b,q,r)
p.N+=H.hD(k)
q=l
continue}}throw H.l(new P.bD("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.L(b,q,a1)
e=t.length
if(o>=0)P.v4(b,n,a1,o,m,e)
else{d=C.a.bz(e-1,4)+1
if(d===1)throw H.l(new P.bD("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aB(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.v4(b,n,a1,o,m,c)
else{d=C.d.bz(c,4)
if(d===1)throw H.l(new P.bD("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aB(b,a1,a1,d===2?"==":"=")}return b},
$asfQ:function(){return[[P.p,P.D],P.B]}}
P.kE.prototype={
$asfR:function(){return[[P.p,P.D],P.B]}}
P.fQ.prototype={}
P.fR.prototype={}
P.lj.prototype={
$asfQ:function(){return[P.B,[P.p,P.D]]}}
P.pl.prototype={
gK:function(a){return"utf-8"}}
P.pm.prototype={
cu:function(a,b,c){var t,s,r,q
t=J.cl(a)
P.dj(b,c,t,null,null,null)
s=new P.c9("")
r=new P.qU(!1,s,!0,0,0,0)
r.cu(a,b,t)
r.ha(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
fX:function(a){return this.cu(a,0,null)},
$asfR:function(){return[[P.p,P.D],P.B]}}
P.qU.prototype={
ha:function(a,b,c){if(this.e>0)throw H.l(new P.bD("Unfinished UTF-8 octet sequence",b,c))},
cu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qW(c)
p=new P.qV(this,a,b,c)
$loop$0:for(o=J.bc(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aH()
if((l&192)!==128){k=new P.bD("Bad UTF-8 encoding 0x"+C.d.bf(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.u(C.w,k)
if(t<=C.w[k]){k=new P.bD("Overlong encoding of 0x"+C.a.bf(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bD("Character outside valid Unicode range: 0x"+C.a.bf(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.N+=H.hD(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cw(j,0)){this.c=!1
if(typeof j!=="number")return H.a8(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.da(l)
if(g.a5(l,0)){g=new P.bD("Negative UTF-8 code unit: -0x"+J.y7(g.cV(l),16),a,h-1)
throw H.l(g)}else{if(typeof l!=="number")return l.aH()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bD("Bad UTF-8 encoding 0x"+C.d.bf(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qW.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bc(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aH()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.D,args:[,P.D]}}}
P.qV.prototype={
$2:function(a,b){this.a.b.N+=P.oN(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.D,P.D]}}}
P.d9.prototype={}
P.bv.prototype={}
P.dK.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dK))return!1
return this.a===b.a&&this.b===b.b},
av:function(a,b){return C.a.av(this.a,b.gfI())},
ga7:function(a){var t=this.a
return(t^C.a.aU(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.yW(H.uc(this))
s=P.ib(H.jE(this))
r=P.ib(H.jD(this))
q=P.ib(H.Fe(this))
p=P.ib(H.Fg(this))
o=P.ib(H.Fh(this))
n=P.yX(H.Ff(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.vh(C.a.U(this.a,b.gi8()),this.b)},
ghu:function(){return this.a},
d4:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dG(this.ghu()))},
$isbv:1,
$asbv:function(){return[P.dK]},
gfI:function(){return this.a}}
P.l9.prototype={
$1:function(a){if(a==null)return 0
return H.di(a,null,null)},
$S:function(){return{func:1,ret:P.D,args:[P.B]}}}
P.la.prototype={
$1:function(a){var t,s,r,q
if(a==null)return 0
t=J.bc(a)
t.gm(a)
for(s=0,r=0;r<6;++r){s*=10
q=t.gm(a)
if(typeof q!=="number")return H.a8(q)
if(r<q)s+=t.Y(a,r)^48}return s},
$S:function(){return{func:1,ret:P.D,args:[P.B]}}}
P.U.prototype={$isbv:1,
$asbv:function(){return[P.dp]}}
P.d0.prototype={
U:function(a,b){return new P.d0(this.a+b.gbb())},
V:function(a,b){return new P.d0(C.a.V(this.a,b.gbb()))},
an:function(a,b){return new P.d0(C.a.b0(this.a*b))},
bh:function(a,b){return new P.d0(C.a.bh(this.a,b))},
a5:function(a,b){return C.a.a5(this.a,b.gbb())},
aC:function(a,b){return C.a.aC(this.a,b.gbb())},
at:function(a,b){return C.a.at(this.a,b.gbb())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.d0))return!1
return this.a===b.a},
ga7:function(a){return this.a&0x1FFFFFFF},
av:function(a,b){return C.a.av(this.a,b.gbb())},
C:function(a){var t,s,r,q,p
t=new P.lh()
s=this.a
if(s<0)return"-"+new P.d0(0-s).C(0)
r=t.$1(C.a.al(s,6e7)%60)
q=t.$1(C.a.al(s,1e6)%60)
p=new P.lg().$1(s%1e6)
return""+C.a.al(s,36e8)+":"+H.C(r)+":"+H.C(q)+"."+H.C(p)},
cV:function(a){return new P.d0(0-this.a)},
$isbv:1,
$asbv:function(){return[P.d0]},
gbb:function(){return this.a}}
P.lg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.D]}}}
P.lh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.D]}}}
P.eh.prototype={
gaI:function(){return H.cu(this.$thrownJsError)}}
P.fi.prototype={
C:function(a){return"Throw of null."}}
P.cZ.prototype={
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.C(t)
q=this.gca()+s+r
if(!this.a)return q
p=this.gc9()
o=P.vp(this.b)
return q+p+": "+H.C(o)},
gK:function(a){return this.c}}
P.ez.prototype={
gca:function(){return"RangeError"},
gc9:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.C(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.C(t)
else{if(typeof r!=="number")return r.aC()
if(r>t)s=": Not in range "+H.C(t)+".."+H.C(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.C(t)}}return s}}
P.mj.prototype={
gca:function(){return"RangeError"},
gc9:function(){if(J.eb(this.b,0))return": index must not be negative"
var t=this.f
if(J.b8(t,0))return": no indices are valid"
return": index should be less than "+H.C(t)},
gm:function(a){return this.f}}
P.V.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.eG.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.C(t):"UnimplementedError"}}
P.dR.prototype={
C:function(a){return"Bad state: "+this.a}}
P.bM.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.C(P.vp(t))+"."}}
P.nx.prototype={
C:function(a){return"Out of Memory"},
gaI:function(){return},
$iseh:1}
P.jN.prototype={
C:function(a){return"Stack Overflow"},
gaI:function(){return},
$iseh:1}
P.l6.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.C(t)+"' during its initialization"}}
P.q5.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.C(t)}}
P.bD.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.C(t):"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.C(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a5()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.L(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a8(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a6(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.C(r-o+1)+")\n"):s+(" (at character "+H.C(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.Y(q,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(r-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-r<75){i=k-75
j=k
g=""}else{i=r-36
j=r+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.L(q,i,j)
return s+h+f+g+"\n"+C.c.an(" ",r-i+h.length)+"^\n"}}
P.lq.prototype={
C:function(a){return"Expando:"+H.C(this.a)},
n:function(a,b){var t,s
t=this.bE
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.ba(P.e_(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ub(b,"expando$values")
return s==null?null:H.ub(s,t)},
i:function(a,b,c){var t,s
t=this.bE
if(typeof t!=="string")t.set(b,c)
else{s=H.ub(b,"expando$values")
if(s==null){s=new P.ac()
H.wy(b,"expando$values",s)}H.wy(s,t,c)}},
gK:function(a){return this.a}}
P.D.prototype={$isbv:1,
$asbv:function(){return[P.dp]}}
P.o.prototype={
aw:function(a,b){return H.dx(this,b,H.aE(this,"o",0),null)},
aj:function(a,b){var t
for(t=this.ga_(this);t.I();)if(J.b8(t.gR(),b))return!0
return!1},
aa:function(a,b){var t
for(t=this.ga_(this);t.I();)b.$1(t.gR())},
a4:function(a,b){return P.dh(this,!0,H.aE(this,"o",0))},
ap:function(a){return this.a4(a,!0)},
gm:function(a){var t,s
t=this.ga_(this)
for(s=0;t.I();)++s
return s},
gX:function(a){return!this.ga_(this).I()},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.ya("index"))
if(b<0)H.ba(P.bF(b,0,null,"index",null))
for(t=this.ga_(this),s=0;t.I();){r=t.gR()
if(b===s)return r;++s}throw H.l(P.by(b,this,"index",null,s))},
C:function(a){return P.tF(this,"(",")")},
$aso:null}
P.jm.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$iso:1,$aso:null}
P.bq.prototype={$asbq:null}
P.d5.prototype={
ga7:function(a){return P.ac.prototype.ga7.call(this,this)},
C:function(a){return"null"}}
P.dp.prototype={$isbv:1,
$asbv:function(){return[P.dp]}}
P.ac.prototype={constructor:P.ac,$isac:1,
S:function(a,b){return this===b},
ga7:function(a){return H.ev(this)},
C:function(a){return H.nQ(this)},
gab:function(a){return new H.dT(H.ki(this),null)},
toString:function(){return this.C(this)}}
P.dy.prototype={}
P.eA.prototype={}
P.dQ.prototype={}
P.B.prototype={$isbv:1,
$asbv:function(){return[P.B]}}
P.c9.prototype={
gm:function(a){return this.N.length},
gX:function(a){return this.N.length===0},
C:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eI.prototype={}
P.pi.prototype={
$2:function(a,b){var t,s,r,q
t=J.bc(b)
s=t.be(b,"=")
if(s===-1){if(!t.S(b,""))J.kl(a,P.qT(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.L(b,0,s)
q=C.c.W(b,s+1)
t=this.a
J.kl(a,P.qT(r,0,r.length,t,!0),P.qT(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pf.prototype={
$2:function(a,b){throw H.l(new P.bD("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.D]}}}
P.pg.prototype={
$2:function(a,b){throw H.l(new P.bD("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.ph.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.di(C.c.L(this.a,a,b),16,null)
s=J.da(t)
if(s.a5(t,0)||s.aC(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.D,args:[P.D,P.D]}}}
P.kb.prototype={
gen:function(){return this.b},
gcA:function(a){var t=this.c
if(t==null)return""
if(C.c.ae(t,"["))return C.c.L(t,1,t.length-1)
return t},
gcJ:function(a){var t=this.d
if(t==null)return P.x8(this.a)
return t},
gcK:function(a){var t=this.f
return t==null?"":t},
gdX:function(){var t=this.r
return t==null?"":t},
gcL:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.hM(P.wZ(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
ge_:function(){return this.c!=null},
ge1:function(){return this.f!=null},
ge0:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.ds()
this.y=t}return t},
ds:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.C(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.C(s)}else t=s
t+=H.C(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.av(b)
if(!!t.$iseI){if(this.a===b.gcW())if(this.c!=null===b.ge_()){s=this.b
r=b.gen()
if(s==null?r==null:s===r){s=this.gcA(this)
r=t.gcA(b)
if(s==null?r==null:s===r)if(J.b8(this.gcJ(this),t.gcJ(b)))if(J.b8(this.e,t.gea(b))){s=this.f
r=s==null
if(!r===b.ge1()){if(r)s=""
if(s===t.gcK(b)){t=this.r
s=t==null
if(!s===b.ge0()){if(s)t=""
t=t===b.gdX()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga7:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.ds()
this.y=t}t=C.c.ga7(t)
this.z=t}return t},
$iseI:1,
gcW:function(){return this.a},
gea:function(a){return this.e}}
P.re.prototype={
$1:function(a){throw H.l(new P.bD("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pe.prototype={
gem:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
t=t[0]+1
r=J.bc(s)
q=r.aZ(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fx(s,o,p,C.k,!1)
if(n==null)n=r.L(s,o,p)
p=q}else n=null
m=P.fx(s,t,p,C.D,!1)
t=new P.pU(this,"data",null,null,null,m==null?r.L(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
return t[0]===-1?"data:"+H.C(s):s}}
P.r7.prototype={
$1:function(a){return new Uint8Array(H.cz(96))},
$S:function(){return{func:1,args:[,]}}}
P.r6.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.u(t,a)
t=t[a]
J.xU(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d8,args:[,,]}}}
P.r8.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dn(a),r=0;r<t;++r)s.i(a,C.c.a6(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.D]}}}
P.r9.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a6(b,0),s=C.c.a6(b,1),r=J.dn(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.D]}}}
P.qJ.prototype={
ge_:function(){return this.c>0},
ge1:function(){var t=this.f
if(typeof t!=="number")return t.a5()
return t<this.r},
ge0:function(){return this.r<this.a.length},
gcW:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ae(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ae(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ae(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ae(this.a,"package")){this.x="package"
t="package"}else{t=C.c.L(this.a,0,t)
this.x=t}return t},
gen:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.L(this.a,s,t-1):""},
gcA:function(a){var t=this.c
return t>0?C.c.L(this.a,t,this.d):""},
gcJ:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.U()
s=this.e
if(typeof s!=="number")return H.a8(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.U()
return H.di(C.c.L(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ae(this.a,"http"))return 80
if(t===5&&C.c.ae(this.a,"https"))return 443
return 0},
gea:function(a){return C.c.L(this.a,this.e,this.f)},
gcK:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a5()
return t<s?C.c.L(this.a,t+1,s):""},
gdX:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.W(s,t+1):""},
gcL:function(){var t=this.f
if(typeof t!=="number")return t.a5()
if(t>=this.r)return C.a0
t=P.B
return new P.hM(P.wZ(this.gcK(this),C.n),[t,t])},
ga7:function(a){var t=this.y
if(t==null){t=C.c.ga7(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.av(b)
if(!!t.$iseI)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseI:1}
P.pU.prototype={}
W.al.prototype={}
W.eQ.prototype={
C:function(a){return String(a)},
$iseQ:1,
$isf:1,
gah:function(a){return a.href}}
W.kt.prototype={
C:function(a){return String(a)},
$isf:1,
gah:function(a){return a.href}}
W.eT.prototype={$iseT:1,$isds:1,$isay:1,$isac:1}
W.cL.prototype={$isac:1}
W.kB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cL]},
$isr:1,
$asr:function(){return[W.cL]},
$iso:1,
$aso:function(){return[W.cL]},
$isaD:1,
$asaD:function(){return[W.cL]},
$isax:1,
$asax:function(){return[W.cL]}}
W.fX.prototype={
$asp:function(){return[W.cL]},
$asr:function(){return[W.cL]},
$aso:function(){return[W.cL]},
$isp:1,
$isr:1,
$iso:1}
W.h_.prototype={
$asp:function(){return[W.cL]},
$asr:function(){return[W.cL]},
$aso:function(){return[W.cL]},
$isp:1,
$isr:1,
$iso:1}
W.kF.prototype={
gah:function(a){return a.href}}
W.eU.prototype={$iseU:1}
W.kI.prototype={$isf:1}
W.fP.prototype={$isfP:1,
gK:function(a){return a.name}}
W.ed.prototype={$isf:1,
gm:function(a){return a.length}}
W.kT.prototype={$isf:1}
W.i7.prototype={
cw:function(a,b){return typeof console!="undefined"?console.error(b):null},
b9:function(a){return typeof console!="undefined"?console.group(a):null},
e3:function(a){return typeof console!="undefined"?console.info(a):null},
hW:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fS.prototype={
gK:function(a){return a.name}}
W.kZ.prototype={
gaJ:function(a){return a.style}}
W.l_.prototype={
gah:function(a){return a.href}}
W.fT.prototype={
gaJ:function(a){return a.style}}
W.fU.prototype={
gK:function(a){return a.name}}
W.l0.prototype={
gaJ:function(a){return a.style}}
W.bJ.prototype={$isbJ:1,$isac:1}
W.ef.prototype={
by:function(a,b){var t=this.fg(a,b)
return t!=null?t:""},
fg:function(a,b){if(W.vd(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.vn()+b)},
eD:function(a,b,c,d){var t=this.f1(a,b)
a.setProperty(t,c,d)
return},
f1:function(a,b){var t,s
t=$.$get$ve()
s=t[b]
if(typeof s==="string")return s
s=W.vd(b) in a?b:P.vn()+b
t[b]=s
return s},
J:function(a,b){return a.item(b)},
gbd:function(a){return a.content},
gbn:function(a){return a.display},
sbn:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iC.prototype={}
W.pS.prototype={
by:function(a,b){var t=this.b
return J.y_(t.gag(t),b)},
fF:function(a,b){var t
for(t=this.a,t=new H.es(t,t.gm(t),0,null,[H.P(t,0)]);t.I();)t.d.style[a]=b},
sbn:function(a,b){this.fF("display",b)},
eV:function(a){var t=P.dh(this.a,!0,null)
this.b=new H.fe(t,new W.pT(),[H.P(t,0),null])}}
W.jx.prototype={}
W.pT.prototype={
$1:function(a){return J.rG(a)},
$S:function(){return{func:1,args:[,]}}}
W.i9.prototype={
gbd:function(a){return this.by(a,"content")},
gbn:function(a){return this.by(a,"display")}}
W.l1.prototype={
gaJ:function(a){return a.style}}
W.l2.prototype={
gaJ:function(a){return a.style}}
W.l7.prototype={
gcz:function(a){return a.files}}
W.eX.prototype={$iseX:1,$isac:1}
W.ia.prototype={
bK:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.eg.prototype={$iseg:1}
W.ic.prototype={$isf:1}
W.id.prototype={
gK:function(a){return a.name}}
W.lc.prototype={
gK:function(a){var t=a.name
if(P.vo()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vo()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.ie.prototype={
C:function(a){return"Rectangle ("+H.C(a.left)+", "+H.C(a.top)+") "+H.C(this.gb3(a))+" x "+H.C(this.gaY(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.av(b)
if(!t.$isbS)return!1
return a.left===t.gbU(b)&&a.top===t.gbZ(b)&&this.gb3(a)===t.gb3(b)&&this.gaY(a)===t.gaY(b)},
ga7:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb3(a)
q=this.gaY(a)
return W.x7(W.eO(W.eO(W.eO(W.eO(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaY:function(a){return a.height},
gbU:function(a){return a.left},
gbZ:function(a){return a.top},
gb3:function(a){return a.width},
$isbS:1,
$asbS:function(){}}
W.ig.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.B]},
$isr:1,
$asr:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]},
$isaD:1,
$asaD:function(){return[P.B]},
$isax:1,
$asax:function(){return[P.B]}}
W.iD.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$isr:1,
$iso:1}
W.iX.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$isr:1,
$iso:1}
W.ih.prototype={
J:function(a,b){return a.item(b)}}
W.ii.prototype={
h:function(a,b){return a.add(b)},
aj:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k2.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.V("Cannot modify list"))},
gaJ:function(a){return W.Gh(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$iso:1,
$aso:null}
W.ds.prototype={
gdQ:function(a){return new W.q_(a)},
C:function(a){return a.localName},
cB:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isds:1,
$isay:1,
$isac:1,
$isf:1,
gaJ:function(a){return a.style}}
W.li.prototype={
gK:function(a){return a.name}}
W.fW.prototype={
gK:function(a){return a.name}}
W.lo.prototype={
gas:function(a){return a.error}}
W.S.prototype={$isS:1,$isac:1}
W.aF.prototype={
fM:function(a,b,c,d){if(c!=null)this.f_(a,b,c,!1)},
hL:function(a,b,c,d){if(c!=null)this.fC(a,b,c,!1)},
f_:function(a,b,c,d){return a.addEventListener(b,H.dm(c,1),!1)},
fC:function(a,b,c,d){return a.removeEventListener(b,H.dm(c,1),!1)}}
W.lQ.prototype={
gK:function(a){return a.name}}
W.cd.prototype={$iscd:1,$isac:1,
gK:function(a){return a.name}}
W.f4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isf4:1,
$isaD:1,
$asaD:function(){return[W.cd]},
$isax:1,
$asax:function(){return[W.cd]},
$isp:1,
$asp:function(){return[W.cd]},
$isr:1,
$asr:function(){return[W.cd]},
$iso:1,
$aso:function(){return[W.cd]}}
W.iE.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$aso:function(){return[W.cd]},
$isp:1,
$isr:1,
$iso:1}
W.iY.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$aso:function(){return[W.cd]},
$isp:1,
$isr:1,
$iso:1}
W.lR.prototype={
gas:function(a){return a.error}}
W.lS.prototype={
gK:function(a){return a.name}}
W.lT.prototype={
gas:function(a){return a.error},
gm:function(a){return a.length}}
W.lW.prototype={
gaJ:function(a){return a.style},
gcS:function(a){return a.weight}}
W.lX.prototype={
h:function(a,b){return a.add(b)},
i7:function(a,b,c){return a.forEach(H.dm(b,3),c)},
aa:function(a,b){b=H.dm(b,3)
return a.forEach(b)}}
W.iy.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.co.prototype={$isco:1,$isac:1}
W.m6.prototype={
gm:function(a){return a.length}}
W.f6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ay]},
$isr:1,
$asr:function(){return[W.ay]},
$iso:1,
$aso:function(){return[W.ay]},
$isaD:1,
$asaD:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iF.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isp:1,
$isr:1,
$iso:1}
W.iZ.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isp:1,
$isr:1,
$iso:1}
W.iA.prototype={
J:function(a,b){return a.item(b)}}
W.e4.prototype={
ii:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hz:function(a,b,c,d){return a.open(b,c,d)},
ghO:function(a){return W.GH(a.response)},
b4:function(a,b){return a.send(b)},
$ise4:1,
$isac:1,
ghP:function(a){return a.responseText}}
W.m9.prototype={
$1:function(a){return J.xZ(a)},
$S:function(){return{func:1,args:[W.e4]}}}
W.ma.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.at()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aA(0,t)
else p.bl(a)},
$S:function(){return{func:1,args:[,]}}}
W.hc.prototype={}
W.me.prototype={
gK:function(a){return a.name}}
W.hd.prototype={$ishd:1}
W.f8.prototype={$isf8:1,$isds:1,$isay:1,$isac:1,
aA:function(a,b){return a.complete.$1(b)}}
W.mk.prototype={$isf:1,
gcz:function(a){return a.files},
gK:function(a){return a.name}}
W.mK.prototype={
gK:function(a){return a.name}}
W.hm.prototype={
h:function(a,b){return a.add(b)}}
W.hn.prototype={$ishn:1,
gah:function(a){return a.href}}
W.n1.prototype={
C:function(a){return String(a)},
gah:function(a){return a.href}}
W.n6.prototype={
gK:function(a){return a.name}}
W.hu.prototype={
gas:function(a){return a.error}}
W.jr.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nb.prototype={
gbd:function(a){return a.content},
gK:function(a){return a.name}}
W.nc.prototype={
i1:function(a,b,c){return a.send(b,c)},
b4:function(a,b){return a.send(b)}}
W.hv.prototype={
gK:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isac:1}
W.js.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[W.cq]},
$isax:1,
$asax:function(){return[W.cq]},
$isp:1,
$asp:function(){return[W.cq]},
$isr:1,
$asr:function(){return[W.cq]},
$iso:1,
$aso:function(){return[W.cq]}}
W.iP.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$isr:1,
$iso:1}
W.j8.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$isr:1,
$iso:1}
W.np.prototype={$isf:1}
W.nq.prototype={
gK:function(a){return a.name}}
W.ay.prototype={
C:function(a){var t=a.nodeValue
return t==null?this.eG(a):t},
aj:function(a,b){return a.contains(b)},
$isay:1,
$isac:1}
W.jv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ay]},
$isr:1,
$asr:function(){return[W.ay]},
$iso:1,
$aso:function(){return[W.ay]},
$isaD:1,
$asaD:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iQ.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isp:1,
$isr:1,
$iso:1}
W.j9.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isp:1,
$isr:1,
$iso:1}
W.nt.prototype={
gK:function(a){return a.name}}
W.ny.prototype={
gK:function(a){return a.name}}
W.nC.prototype={
gK:function(a){return a.name}}
W.nE.prototype={$isf:1}
W.e6.prototype={
gK:function(a){return a.name}}
W.nK.prototype={
gm:function(a){return a.length}}
W.cf.prototype={
J:function(a,b){return a.item(b)},
$iscf:1,
$isac:1,
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.jC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cf]},
$isr:1,
$asr:function(){return[W.cf]},
$iso:1,
$aso:function(){return[W.cf]},
$isaD:1,
$asaD:function(){return[W.cf]},
$isax:1,
$asax:function(){return[W.cf]}}
W.iR.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isp:1,
$isr:1,
$iso:1}
W.ja.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isp:1,
$isr:1,
$iso:1}
W.nP.prototype={
b4:function(a,b){return a.send(b)}}
W.jH.prototype={
b4:function(a,b){return a.send(b)}}
W.fm.prototype={$isfm:1,$isds:1,$isay:1,$isac:1}
W.jI.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.ob.prototype={
gK:function(a){return a.name}}
W.oe.prototype={$isf:1}
W.of.prototype={
gK:function(a){return a.name}}
W.og.prototype={
gK:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isac:1}
W.jK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cr]},
$isr:1,
$asr:function(){return[W.cr]},
$iso:1,
$aso:function(){return[W.cr]},
$isaD:1,
$asaD:function(){return[W.cr]},
$isax:1,
$asax:function(){return[W.cr]}}
W.fY.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$isr:1,
$iso:1}
W.h0.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$isr:1,
$iso:1}
W.fn.prototype={$isfn:1}
W.cs.prototype={$iscs:1,$isac:1,
gcS:function(a){return a.weight}}
W.jL.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cs]},
$isr:1,
$asr:function(){return[W.cs]},
$iso:1,
$aso:function(){return[W.cs]},
$isaD:1,
$asaD:function(){return[W.cs]},
$isax:1,
$asax:function(){return[W.cs]}}
W.iS.prototype={
$asp:function(){return[W.cs]},
$asr:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$isr:1,
$iso:1}
W.jb.prototype={
$asp:function(){return[W.cs]},
$asr:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$isr:1,
$iso:1}
W.fo.prototype={$isfo:1,$isac:1}
W.ok.prototype={
gas:function(a){return a.error}}
W.ch.prototype={
J:function(a,b){return a.item(b)},
$isch:1,
$isac:1,
gm:function(a){return a.length}}
W.ol.prototype={
gK:function(a){return a.name}}
W.om.prototype={
gK:function(a){return a.name}}
W.or.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
aa:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isbq:1,
$asbq:function(){return[P.B,P.B]}}
W.ci.prototype={$isci:1,$isac:1,
gah:function(a){return a.href}}
W.e8.prototype={}
W.oV.prototype={
gbd:function(a){return a.content}}
W.oX.prototype={
gK:function(a){return a.name}}
W.cR.prototype={$isac:1}
W.cI.prototype={$isac:1}
W.p_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.cI]},
$isax:1,
$asax:function(){return[W.cI]},
$isp:1,
$asp:function(){return[W.cI]},
$isr:1,
$asr:function(){return[W.cI]},
$iso:1,
$aso:function(){return[W.cI]}}
W.iT.prototype={
$asp:function(){return[W.cI]},
$asr:function(){return[W.cI]},
$aso:function(){return[W.cI]},
$isp:1,
$isr:1,
$iso:1}
W.jc.prototype={
$asp:function(){return[W.cI]},
$asr:function(){return[W.cI]},
$aso:function(){return[W.cI]},
$isp:1,
$isr:1,
$iso:1}
W.p0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.cR]},
$isax:1,
$asax:function(){return[W.cR]},
$isp:1,
$asp:function(){return[W.cR]},
$isr:1,
$asr:function(){return[W.cR]},
$iso:1,
$aso:function(){return[W.cR]}}
W.fZ.prototype={
$asp:function(){return[W.cR]},
$asr:function(){return[W.cR]},
$aso:function(){return[W.cR]},
$isp:1,
$isr:1,
$iso:1}
W.h1.prototype={
$asp:function(){return[W.cR]},
$asr:function(){return[W.cR]},
$aso:function(){return[W.cR]},
$isp:1,
$isr:1,
$iso:1}
W.p4.prototype={
gm:function(a){return a.length}}
W.ct.prototype={$isct:1,$isac:1}
W.jP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ct]},
$isr:1,
$asr:function(){return[W.ct]},
$iso:1,
$aso:function(){return[W.ct]},
$isaD:1,
$asaD:function(){return[W.ct]},
$isax:1,
$asax:function(){return[W.ct]}}
W.iU.prototype={
$asp:function(){return[W.ct]},
$asr:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$isr:1,
$iso:1}
W.jd.prototype={
$asp:function(){return[W.ct]},
$asr:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$isr:1,
$iso:1}
W.fr.prototype={$isfr:1,$isac:1}
W.jQ.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.e9.prototype={}
W.pj.prototype={
C:function(a){return String(a)},
$isf:1,
gah:function(a){return a.href}}
W.pn.prototype={
gm:function(a){return a.length}}
W.fs.prototype={$isfs:1,$isac:1}
W.jR.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ps.prototype={
b4:function(a,b){return a.send(b)}}
W.jU.prototype={$isf:1,
gK:function(a){return a.name}}
W.pz.prototype={$isf:1}
W.eJ.prototype={$isf:1}
W.ft.prototype={$isft:1,$isay:1,$isac:1,
gK:function(a){return a.name}}
W.pR.prototype={
C:function(a){return"Rectangle ("+H.C(a.left)+", "+H.C(a.top)+") "+H.C(a.width)+" x "+H.C(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.av(b)
if(!t.$isbS)return!1
s=a.left
r=t.gbU(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbZ(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaY(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga7:function(a){var t,s,r,q
t=J.dF(a.left)
s=J.dF(a.top)
r=J.dF(a.width)
q=J.dF(a.height)
return W.x7(W.eO(W.eO(W.eO(W.eO(0,t),s),r),q))},
$isbS:1,
$asbS:function(){},
gaY:function(a){return a.height},
gbU:function(a){return a.left},
gbZ:function(a){return a.top},
gb3:function(a){return a.width}}
W.hR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[P.bS]},
$isax:1,
$asax:function(){return[P.bS]},
$isp:1,
$asp:function(){return[P.bS]},
$isr:1,
$asr:function(){return[P.bS]},
$iso:1,
$aso:function(){return[P.bS]}}
W.iV.prototype={
$asp:function(){return[P.bS]},
$asr:function(){return[P.bS]},
$aso:function(){return[P.bS]},
$isp:1,
$isr:1,
$iso:1}
W.je.prototype={
$asp:function(){return[P.bS]},
$asr:function(){return[P.bS]},
$aso:function(){return[P.bS]},
$isp:1,
$isr:1,
$iso:1}
W.k0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bJ]},
$isr:1,
$asr:function(){return[W.bJ]},
$iso:1,
$aso:function(){return[W.bJ]},
$isaD:1,
$asaD:function(){return[W.bJ]},
$isax:1,
$asax:function(){return[W.bJ]}}
W.iW.prototype={
$asp:function(){return[W.bJ]},
$asr:function(){return[W.bJ]},
$aso:function(){return[W.bJ]},
$isp:1,
$isr:1,
$iso:1}
W.jf.prototype={
$asp:function(){return[W.bJ]},
$asr:function(){return[W.bJ]},
$aso:function(){return[W.bJ]},
$isp:1,
$isr:1,
$iso:1}
W.pY.prototype={$isf:1}
W.pZ.prototype={
gaY:function(a){return a.height},
gb3:function(a){return a.width}}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[W.co]},
$isax:1,
$asax:function(){return[W.co]},
$isp:1,
$asp:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$iso:1,
$aso:function(){return[W.co]}}
W.iG.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$aso:function(){return[W.co]},
$isp:1,
$isr:1,
$iso:1}
W.j_.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$aso:function(){return[W.co]},
$isp:1,
$isr:1,
$iso:1}
W.qj.prototype={$isf:1}
W.hY.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ay]},
$isr:1,
$asr:function(){return[W.ay]},
$iso:1,
$aso:function(){return[W.ay]},
$isaD:1,
$asaD:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iH.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isp:1,
$isr:1,
$iso:1}
W.j0.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isp:1,
$isr:1,
$iso:1}
W.qI.prototype={$isf:1}
W.k7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$iso:1,
$aso:function(){return[W.ch]},
$isaD:1,
$asaD:function(){return[W.ch]},
$isax:1,
$asax:function(){return[W.ch]}}
W.iI.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isp:1,
$isr:1,
$iso:1}
W.j1.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isp:1,
$isr:1,
$iso:1}
W.k9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[W.ci]},
$isax:1,
$asax:function(){return[W.ci]},
$isp:1,
$asp:function(){return[W.ci]},
$isr:1,
$asr:function(){return[W.ci]},
$iso:1,
$aso:function(){return[W.ci]}}
W.iJ.prototype={
$asp:function(){return[W.ci]},
$asr:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isp:1,
$isr:1,
$iso:1}
W.j2.prototype={
$asp:function(){return[W.ci]},
$asr:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isp:1,
$isr:1,
$iso:1}
W.qY.prototype={$isf:1}
W.qZ.prototype={$isf:1}
W.q_.prototype={
aG:function(){var t,s,r,q,p
t=P.a4(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=J.kp(s[q])
if(p.length!==0)t.h(0,p)}return t},
eo:function(a){this.a.className=a.b6(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
aj:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.q2.prototype={
aN:function(a,b,c,d){return W.eM(this.a,this.b,a,!1,H.P(this,0))},
e7:function(a,b,c){return this.aN(a,null,b,c)}}
W.hS.prototype={}
W.q3.prototype={
bP:function(a){if(this.b==null)return
this.dM()
this.b=null
this.d=null
return},
cH:function(a,b){if(this.b==null)return;++this.a
this.dM()},
eb:function(a){return this.cH(a,null)},
ee:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dK()},
dK:function(){var t=this.d
if(t!=null&&this.a<=0)J.xN(this.b,this.c,t,!1)},
dM:function(){var t=this.d
if(t!=null)J.y2(this.b,this.c,t,!1)},
eW:function(a,b,c,d,e){this.dK()}}
W.q4.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
ga_:function(a){return new W.lV(a,this.gm(a),-1,null,[H.aE(a,"bx",0)])},
h:function(a,b){throw H.l(new P.V("Cannot add to immutable List."))},
a9:function(a,b,c,d,e){throw H.l(new P.V("Cannot setRange on immutable List."))},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aB:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
bS:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$iso:1,
$aso:null}
W.lV.prototype={
I:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i3(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gR:function(){return this.d}}
W.qR.prototype={}
P.qO.prototype={
bp:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.av(a)
if(!!s.$isdK)return new Date(a.a)
if(!!s.$isFA)throw H.l(new P.eG("structured clone of RegExp"))
if(!!s.$iscd)return a
if(!!s.$iseU)return a
if(!!s.$isf4)return a
if(!!s.$ishd)return a
if(!!s.$isfg||!!s.$iseu)return a
if(!!s.$isbq){r=this.bp(a)
q=this.b
p=q.length
if(r>=p)return H.u(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.u(q,r)
q[r]=o
s.aa(a,new P.qQ(t,this))
return t.a}if(!!s.$isp){r=this.bp(a)
t=this.b
if(r>=t.length)return H.u(t,r)
o=t[r]
if(o!=null)return o
return this.fY(a,r)}throw H.l(new P.eG("structured clone of other type"))},
fY:function(a,b){var t,s,r,q,p
t=J.bc(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.u(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b2(t.n(a,p))
if(p>=r.length)return H.u(r,p)
r[p]=q}return r}}
P.qQ.prototype={
$2:function(a,b){this.a.a[a]=this.b.b2(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pH.prototype={
bp:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dK(s,!0)
r.d4(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.eG("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.H0(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bp(a)
r=this.b
o=r.length
if(p>=o)return H.u(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mU()
t.a=n
if(p>=o)return H.u(r,p)
r[p]=n
this.hc(a,new P.pI(t,this))
return t.a}if(a instanceof Array){p=this.bp(a)
r=this.b
if(p>=r.length)return H.u(r,p)
n=r[p]
if(n!=null)return n
o=J.bc(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.u(r,p)
r[p]=n
if(typeof m!=="number")return H.a8(m)
r=J.dn(n)
l=0
for(;l<m;++l)r.i(n,l,this.b2(o.n(a,l)))
return n}return a}}
P.pI.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b2(b)
J.kl(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.qP.prototype={}
P.jX.prototype={
hc:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rf.prototype={
$1:function(a){return this.a.aA(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rg.prototype={
$1:function(a){return this.a.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.kX.prototype={
dN:function(a){if($.$get$vc().b.test(a))return a
throw H.l(P.e_(a,"value","Not a valid class token"))},
C:function(a){return this.aG().b6(0," ")},
ga_:function(a){var t,s
t=this.aG()
s=new P.dC(t,t.r,null,null,[null])
s.c=t.e
return s},
aa:function(a,b){this.aG().aa(0,b)},
aw:function(a,b){var t=this.aG()
return new H.fV(t,b,[H.P(t,0),null])},
gX:function(a){return this.aG().a===0},
gm:function(a){return this.aG().a},
aj:function(a,b){if(typeof b!=="string")return!1
this.dN(b)
return this.aG().aj(0,b)},
cD:function(a){return this.aj(0,a)?a:null},
h:function(a,b){this.dN(b)
return this.hv(0,new P.kY(b))},
a4:function(a,b){return this.aG().a4(0,!0)},
ap:function(a){return this.a4(a,!0)},
hv:function(a,b){var t,s
t=this.aG()
s=b.$1(t)
this.eo(t)
return s},
$iseA:1,
$aseA:function(){return[P.B]},
$isr:1,
$asr:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.kY.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l8.prototype={
gK:function(a){return a.name}}
P.r5.prototype={
$1:function(a){this.b.aA(0,new P.jX([],[],!1).b2(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mi.prototype={
gK:function(a){return a.name}}
P.nu.prototype={
bK:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fo(a,b,c)
q=P.GG(t)
return q}catch(p){s=H.cv(p)
r=H.cu(p)
q=P.vC(s,r,null)
return q}},
h:function(a,b){return this.bK(a,b,null)},
fo:function(a,b,c){return a.add(new P.qP([],[]).b2(b))},
gK:function(a){return a.name}}
P.hF.prototype={
gas:function(a){return a.error}}
P.p8.prototype={
gas:function(a){return a.error}}
P.qq.prototype={
bt:function(a){if(a<=0||a>4294967296)throw H.l(P.wD("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cE:function(){return Math.random()}}
P.qz.prototype={
aT:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.al(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bt:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.l(P.wD("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aT()
return(this.a&t)>>>0}do{this.aT()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cE:function(){this.aT()
var t=this.a
this.aT()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eY:function(a){var t,s,r,q,p,o,n,m
t=J.eb(a,0)?-1:0
do{if(typeof a!=="number")return a.aH()
s=(a&4294967295)>>>0
a=C.d.al(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.al(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.al(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.al(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.al(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.al(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.al(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aT()
this.aT()
this.aT()
this.aT()}}
P.qA.prototype={}
P.bS.prototype={$asbS:null}
P.kq.prototype={$isf:1,
gah:function(a){return a.href}}
P.ec.prototype={$isf:1}
P.lr.prototype={$isf:1}
P.ls.prototype={$isf:1}
P.lt.prototype={$isf:1}
P.lu.prototype={$isf:1}
P.lv.prototype={$isf:1}
P.lw.prototype={$isf:1}
P.lx.prototype={$isf:1}
P.ly.prototype={$isf:1}
P.lz.prototype={$isf:1}
P.lA.prototype={$isf:1,
gah:function(a){return a.href}}
P.lB.prototype={$isf:1}
P.lC.prototype={$isf:1}
P.lD.prototype={$isf:1}
P.lE.prototype={$isf:1}
P.lF.prototype={$isf:1}
P.lG.prototype={$isf:1}
P.lU.prototype={$isf:1,
gah:function(a){return a.href}}
P.cp.prototype={$isf:1}
P.mf.prototype={$isf:1,
gah:function(a){return a.href}}
P.d4.prototype={$isac:1}
P.mN.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d4]},
$isr:1,
$asr:function(){return[P.d4]},
$iso:1,
$aso:function(){return[P.d4]}}
P.iK.prototype={
$asp:function(){return[P.d4]},
$asr:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isp:1,
$isr:1,
$iso:1}
P.j3.prototype={
$asp:function(){return[P.d4]},
$asr:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isp:1,
$isr:1,
$iso:1}
P.n9.prototype={$isf:1}
P.na.prototype={$isf:1}
P.d6.prototype={$isac:1}
P.nr.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d6]},
$isr:1,
$asr:function(){return[P.d6]},
$iso:1,
$aso:function(){return[P.d6]}}
P.iL.prototype={
$asp:function(){return[P.d6]},
$asr:function(){return[P.d6]},
$aso:function(){return[P.d6]},
$isp:1,
$isr:1,
$iso:1}
P.j4.prototype={
$asp:function(){return[P.d6]},
$asr:function(){return[P.d6]},
$aso:function(){return[P.d6]},
$isp:1,
$isr:1,
$iso:1}
P.nI.prototype={$isf:1,
gah:function(a){return a.href}}
P.nN.prototype={
gm:function(a){return a.length}}
P.o8.prototype={$isf:1,
gah:function(a){return a.href}}
P.oM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.B]},
$isr:1,
$asr:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.iM.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$isr:1,
$iso:1}
P.j5.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$isr:1,
$iso:1}
P.kx.prototype={
aG:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a4(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=J.kp(r[p])
if(o.length!==0)s.h(0,o)}return s},
eo:function(a){this.a.setAttribute("class",a.b6(0," "))}}
P.ca.prototype={
gdQ:function(a){return new P.kx(a)},
cB:function(a,b,c,d,e){throw H.l(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$isf:1}
P.oP.prototype={$isf:1}
P.oR.prototype={$isf:1}
P.eF.prototype={}
P.oZ.prototype={$isf:1,
gah:function(a){return a.href}}
P.d7.prototype={$isac:1}
P.p9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$isr:1,
$asr:function(){return[P.d7]},
$iso:1,
$aso:function(){return[P.d7]}}
P.iN.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$isr:1,
$iso:1}
P.j6.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$isr:1,
$iso:1}
P.pk.prototype={$isf:1,
gah:function(a){return a.href}}
P.po.prototype={$isf:1}
P.pp.prototype={$isf:1}
P.hV.prototype={$isf:1,
gah:function(a){return a.href}}
P.qF.prototype={$isf:1}
P.qG.prototype={$isf:1}
P.qH.prototype={$isf:1}
P.bg.prototype={}
P.d8.prototype={$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
P.fJ.prototype={$isfJ:1,$isac:1,
gm:function(a){return a.length}}
P.eS.prototype={$iseS:1,$isac:1,
gbO:function(a){return a.buffer}}
P.fK.prototype={
f9:function(a,b,c,d){return a.decodeAudioData(b,H.dm(c,1),H.dm(d,1))},
h_:function(a,b){var t,s,r
t=P.fJ
s=new P.bj(0,$.ao,null,[t])
r=new P.dV(s,[t])
this.f9(a,b,new P.ky(r),new P.kz(r))
return s}}
P.ky.prototype={
$1:function(a){this.a.aA(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kz.prototype={
$1:function(a){var t=this.a
if(a==null)t.bl("")
else t.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.e0.prototype={}
P.kW.prototype={
gbO:function(a){return a.buffer}}
P.ks.prototype={
gK:function(a){return a.name}}
P.nY.prototype={$isf:1}
P.qX.prototype={$isf:1}
P.jM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return P.xx(a.item(b))},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
J:function(a,b){return P.xx(a.item(b))},
$isp:1,
$asp:function(){return[P.bq]},
$isr:1,
$asr:function(){return[P.bq]},
$iso:1,
$aso:function(){return[P.bq]}}
P.iO.prototype={
$asp:function(){return[P.bq]},
$asr:function(){return[P.bq]},
$aso:function(){return[P.bq]},
$isp:1,
$isr:1,
$iso:1}
P.j7.prototype={
$asp:function(){return[P.bq]},
$asr:function(){return[P.bq]},
$aso:function(){return[P.bq]},
$isp:1,
$isr:1,
$iso:1}
T.fF.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
ga_:function(a){var t=this.a
return new J.i4(t,t.length,0,null,[H.P(t,0)])},
$ashj:function(){return[T.fG]},
$aso:function(){return[T.fG]},
gcz:function(a){return this.a}}
T.fG.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f7(C.x)
r=T.f7(C.y)
q=T.ws(0,this.b)
new T.iB(s,q,0,0,0,t,r).dr()
r=q.c.buffer
q=q.a
r.toString
q=H.cO(r,0,q)
this.cy=q
t=q}else{t=s.bw()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gK:function(a){return this.a}}
T.dd.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.he.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.V()
if(typeof r!=="number")return H.a8(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
if(typeof b!=="number")return H.a8(b)
s+=b
if(s<0||s>=t.length)return H.u(t,s)
return t[s]},
aS:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a8(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.V()
if(typeof s!=="number")return H.a8(s)
b=t-(a-s)}return T.tf(this.a,this.d,b,a)},
aZ:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.U()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a8(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.u(q,s)
q[s]}return-1},
be:function(a,b){return this.aZ(a,b,0)},
cM:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.V()
if(typeof s!=="number")return H.a8(s)
r=this.aS(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.V()
if(typeof p!=="number")return H.a8(p)
if(typeof s!=="number")return s.U()
this.b=s+(t-(q-p))
return r},
bX:function(a){return P.oN(this.cM(a).bw(),0,null)},
a1:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a3:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aP:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ar(p,56)|C.a.ar(o,48)|C.a.ar(n,40)|C.a.ar(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ar(i,56)|C.a.ar(j,48)|C.a.ar(k,40)|C.a.ar(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bw:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.V()
if(typeof r!=="number")return H.a8(r)
q=t-(s-r)
t=this.a
r=J.av(t)
if(!!r.$isd8){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cO(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xi(r.c2(t,s,p>o?o:p)))},
eN:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbO:function(a){return this.a},
ghy:function(a){return this.b}}
T.nz.prototype={
hX:function(a,b){var t,s,r,q
if(b==null)b=J.cl(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cc(s-q)
C.q.az(r,t,s,a)
this.a+=b},
cT:function(a){return this.hX(a,null)},
hZ:function(a){var t,s,r,q
t=J.bc(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
this.cc(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
C.q.a9(q,s,s+r,t.gbO(a),t.ghy(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.V()
if(typeof q!=="number")return H.a8(q)
this.a=t+(r-(s-q))},
aS:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cO(t,a,b-a)},
d2:function(a){return this.aS(a,null)},
cc:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.ba(P.dG("Invalid length "+H.C(s)))
r=new Uint8Array(s)
q=this.c
C.q.az(r,0,q.length,q)
this.c=r},
fd:function(){return this.cc(null)},
gm:function(a){return this.a}}
T.pD.prototype={
fB:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aS(this.a-20,20)
if(s.a3()!==117853008){a.b=t
return}s.a3()
r=s.aP()
s.a3()
a.b=r
if(a.a3()!==101075792){a.b=t
return}a.aP()
a.a1()
a.a1()
q=a.a3()
p=a.a3()
o=a.aP()
n=a.aP()
m=a.aP()
l=a.aP()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fe:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.V()
if(typeof r!=="number")return H.a8(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a3()===101010256){a.b=t
return q}}throw H.l(new T.dd("Could not find End of Central Directory Record"))},
eS:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fe(a)
this.a=t
a.b=t
a.a3()
this.b=a.a1()
this.c=a.a1()
this.d=a.a1()
this.e=a.a1()
this.f=a.a3()
this.r=a.a3()
s=a.a1()
if(s>0)this.x=a.bX(s)
this.fB(a)
r=a.aS(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.U()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.at()
if(!(p<t+o))break
if(r.a3()!==33639248)break
p=new T.pF(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a1()
p.b=r.a1()
p.c=r.a1()
p.d=r.a1()
p.e=r.a1()
p.f=r.a1()
p.r=r.a3()
p.x=r.a3()
p.y=r.a3()
n=r.a1()
m=r.a1()
l=r.a1()
p.z=r.a1()
p.Q=r.a1()
p.ch=r.a3()
o=r.a3()
p.cx=o
if(n>0)p.cy=r.bX(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.V()
j=r.aS(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.V()
if(typeof g!=="number")return H.a8(g)
if(typeof k!=="number")return k.U()
r.b=k+(i-(h-g))
p.db=j.bw()
f=j.a1()
e=j.a1()
if(f===1){if(e>=8)p.y=j.aP()
if(e>=16)p.x=j.aP()
if(e>=24){o=j.aP()
p.cx=o}if(e>=28)p.z=j.a3()}}if(l>0)p.dx=r.bX(l)
a.b=o
p.dy=T.Gc(a,p)
q.push(p)}}}
T.pE.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f7(C.x)
q=T.f7(C.y)
t=T.ws(0,t)
new T.iB(s,t,0,0,0,r,q).dr()
q=t.c.buffer
t=t.a
q.toString
t=H.cO(q,0,t)
this.cy=t
this.d=0}else{t=s.bw()
this.cy=t}}return t},
C:function(a){return this.z},
eT:function(a,b){var t,s,r,q
t=a.a3()
this.a=t
if(t!==67324752)throw H.l(new T.dd("Invalid Zip Signature"))
this.b=a.a1()
this.c=a.a1()
this.d=a.a1()
this.e=a.a1()
this.f=a.a1()
this.r=a.a3()
this.x=a.a3()
this.y=a.a3()
s=a.a1()
r=a.a1()
this.z=a.bX(s)
this.Q=a.cM(r).bw()
this.cx=a.cM(this.ch.x)
if((this.c&8)!==0){q=a.a3()
if(q===134695760)this.r=a.a3()
else this.r=q
this.x=a.a3()
this.y=a.a3()}}}
T.pF.prototype={
C:function(a){return this.cy}}
T.pC.prototype={
h0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Gb(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.D],p=0;p<t.length;t.length===r||(0,H.bT)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.cY()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fG(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dW(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tf(k,0,null,0)}else if(k instanceof T.he){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.he(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.h7(m,"/")
j.y=n.r
s.push(j)}return new T.fF(s,null)}}
T.mb.prototype={
eM:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ar(1,this.b)
r=H.cz(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.u(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.u(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iB.prototype={
dr:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.U()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.at()
if(!(r<s+q))break
if(!this.fw())break}},
fw:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.U()
if(typeof s!=="number")return s.at()
if(s>=r+q)return!1
p=this.au(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.au(16)
s=this.au(16)
if(n!==0&&n!==(s^65535)>>>0)H.ba(new T.dd("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.V()
r=q-r
if(n>s-r)H.ba(new T.dd("Input buffer is broken"))
m=t.aS(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.V()
if(typeof l!=="number")return H.a8(l)
if(typeof s!=="number")return s.U()
t.b=s+(r-(q-l))
this.b.hZ(m)
break
case 1:this.di(this.f,this.r)
break
case 2:this.fz()
break
default:throw H.l(new T.dd("unknown BTYPE: "+o))}return(p&1)===0},
au:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return r.at()
if(r>=q+p)throw H.l(new T.dd("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.u(q,r)
o=q[r]
this.c=(this.c|C.a.aq(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ar(1,a)
this.c=C.a.dI(t,a)
this.d=s-a
return(t&r-1)>>>0},
ck:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.U()
if(typeof p!=="number")return p.at()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.u(o,p)
m=o[p]
this.c=(this.c|C.a.aq(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ar(1,s)-1)>>>0
if(p>=t.length)return H.u(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dI(r,k)
this.d=q-k
return l&65535},
fz:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.au(5)+257
s=this.au(5)+1
r=this.au(4)+4
q=H.cz(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.u(C.E,o)
n=C.E[o]
m=this.au(3)
if(n>=q)return H.u(p,n)
p[n]=m}l=T.f7(p)
k=new Uint8Array(H.cz(t))
j=new Uint8Array(H.cz(s))
i=this.dh(t,l,k)
h=this.dh(s,l,j)
this.di(T.f7(i),T.f7(h))},
di:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.ck(a)
if(s>285)throw H.l(new T.dd("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fd()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.u(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.u(C.C,p)
o=C.C[p]+this.au(C.W[p])
n=this.ck(b)
if(n<=29){if(n>=30)return H.u(C.z,n)
m=C.z[n]+this.au(C.V[n])
for(r=-m;o>m;){t.cT(t.d2(r))
o-=m}if(o===m)t.cT(t.d2(r))
else t.cT(t.aS(r,o-m))}else throw H.l(new T.dd("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.V();--r
t.b=r
if(r<0)t.b=0}},
dh:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.ck(b)
switch(q){case 16:p=3+this.au(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=s}break
case 17:p=3+this.au(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
case 18:p=11+this.au(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.l(new T.dd("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kr.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Math Book",H.a([$.L,$.Y,$.as],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.L,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.E,$.Y,$.b6],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.L,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.L,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c0,$.au],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.h6,$.m)
q.i(0,$.bd,$.m)
q.i(0,$.f2,$.j)
q.i(0,$.aO,$.K)
q.i(0,$.cC,$.j)
p=$.n
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.J
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.F4
n=[U.c]
q.i(0,new R.a_("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.n
q.i(0,new R.a_("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.J+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wC(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.n
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.y
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a_("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fk(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eZ,$.K)
s.i(0,$.cC,$.m)
p=$.n
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.a_("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.J+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.n
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.a_("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.J+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ew(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.n
s.i(0,new R.a_("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fk(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.eZ,$.K)
t.i(0,$.cC,$.m)
t.i(0,$.bY,$.K)
t.i(0,$.t2,$.K)
r=$.n
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.ad
t.i(0,new R.a_("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.J+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fk(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
o=$.t
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.J
r=r+p+".  It is up to the "
q=$.n
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ad
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Fa
t.i(0,new R.a_("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.e7(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.n
t.i(0,new R.a_("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.J+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
K.bU.prototype={}
L.fH.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.j)
q.i(0,$.bd,$.K)
q.i(0,$.dN,$.j)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.y
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.Q("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.an)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.f0,$.j)
s.i(0,$.ek,$.K)
s.i(0,$.f_,$.m)
s.i(0,$.cT,$.j)
s.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.y
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
s.i(0,new R.Q("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.X(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.an)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bd,$.K)
t.i(0,$.c4,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.J
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.y
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has won! "
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.ud(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
l=$.n
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.y
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cg+". The "+l+" has won! "
t.i(0,new R.Q("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.X(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.an)},
C:function(a){return this.Q},
af:function(a,b,c,d,e){var t=this.Q
this.r=new X.il("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i5]),H.a([],[M.h3]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$ku().a0(0,t))H.ba("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cK($.$get$ku().n(0,t))+".")
$.$get$ku().i(0,t,this)},
gK:function(a){return this.Q}}
L.aK.prototype={}
M.kw.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Barbells",H.a([$.ab,$.c6,$.E],s),null,!1,"Strength Building Metal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.en,$.c7],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.ji,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.en,$.c7],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aP,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.ji,$.W,$.dg],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.E,$.bf],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vQ,$.c7],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c7,$.b4],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.e3,$.K)
q.i(0,$.bZ,$.m)
q.i(0,$.cT,$.K)
p=$.n
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.J+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.a_("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.n
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.a_("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.J+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e7(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.n
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.a_("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hE(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.e3,$.m)
t.i(0,$.f3,$.m)
t.i(0,$.bZ,$.m)
s=$.n
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.a_("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wC(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
s="A group of "+p+"s approach the "
r=$.n
s=s+r+". Apparently their sports team lost their coach to the "+$.y+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.J
t.i(0,new R.a_("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e7(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.t
p="A group of "+k+"s approach the "
r=$.n
t.i(0,new R.a_("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.y+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.ad+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,t,null),$.aB)}}
U.kA.prototype={
P:function(a,b){var t=0,s=P.bh(),r,q,p,o
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=$.$get$v3()
p=q.createBufferSource()
o=p
t=3
return P.ck(J.xT(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdq:function(){return[P.eS]},
$asc5:function(){return[P.eS,P.bg]}}
U.n3.prototype={
aO:function(a){return"audio/mpeg"}}
U.nw.prototype={
aO:function(a){return"audio/ogg"}}
U.oJ.prototype={
P:function(a,b){var t=0,s=P.bh(),r,q,p
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=W.yv(b)
p=new W.hS(q,"canplaythrough",!1,[W.S])
t=3
return P.ck(p.gag(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asij:function(){return[W.eT]},
$asc5:function(){return[W.eT,P.B]}}
U.oK.prototype={}
U.oL.prototype={}
O.kC.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Cod Piece",H.a([$.O,$.Z,$.aH,$.N,$.W],s),"God damn it, MI. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.tj,$.N,$.bK],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aC,$.W,$.bo,$.N,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.O,$.aC,$.N,$.be],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cA,$.j)
t.i(0,$.h9,$.j)
t.i(0,$.cy,$.j)
t.i(0,$.dv,$.j)
t.i(0,$.cB,$.j)
t.i(0,$.eY,$.j)
r="After all the bullshit the "+$.y+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.n
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aI+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.J
m=[U.c]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.x(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.n
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.J
t.i(0,new R.a5("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.y+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
q=$.n
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.y+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.x(),!1,!1,new Y.kQ("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.y+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.n
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.oY.prototype={
P:function(a,b){var t=0,s=P.bh(),r
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseE:function(){return[P.B]},
$asc5:function(){return[P.B,P.B]}}
Y.nV.prototype={
aO:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bh(),r
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdq:function(){return[P.bg]},
$asc5:function(){return[P.bg,P.bg]}}
T.kH.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Mystical Vial of Blood",H.a([$.b6,$.bo,$.R,$.aL],s),null,!1,"Vial of Not-ABs Oil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ap,$.bo,$.R,$.b5],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bo,$.R,$.aL,$.hg],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.E,$.be,$.R,$.aL,$.hg,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.W,$.tr,$.bo,$.aL,$.R,$.Z],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.j)
q.i(0,$.t5,$.j)
q.i(0,$.bY,$.m)
p=$.n
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ad+" and some boondollars in compensation."
n=this.x2
k=[U.c]
q.i(0,new R.a_("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e7(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.J+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.y
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.n
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cg+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.Q("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.X(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.an)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cT,$.j)
s.i(0,$.cB,$.K)
s.i(0,$.aO,$.K)
s.i(0,$.iv,$.j)
s.i(0,$.cy,$.K)
p=$.n
o="The "+p+"  and the "
m=$.ey
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.y
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.Q("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.X(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ex(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
h=$.n
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.y
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cg+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.F1
s.i(0,new R.Q("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.X(l,h,o)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.n
o="The "+p+" learns of the "
h=$.aI
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.t
o=o+l+" explains that the "
j=$.y
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.Q("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.X(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.n
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aI+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f5+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fk(),!1,!1,new Y.c_("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.n
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aI
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f5+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.ue(),!1,!1,new Y.c_("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.n
m="The "+p+"  and the "
h=$.ey
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.y
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.Q("Pale Shipping Dungeon",!1,[new U.c(m),new U.X(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.r)+".",o)],H.a([],k),R.ex(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.an)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bd,$.K)
t.i(0,$.c4,$.m)
r="In the wake of the defeat of the "+$.y+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.n
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f5+" to kick your ass, but luckily they have several."
t.i(0,new R.a5("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.e7(),!1,!1,new Y.c_("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.n
q="The "+o+" learns that two prominent "
p=$.t
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.y
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cg+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.J+"ing. "
t.i(0,new R.Q("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.X(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.an)}}
T.kK.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Pan's Pipe",H.a([$.a9,$.W,$.bo,$.R],s),null,!1,"Smonkin Weeds Pipe")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b9,$.R],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a7,$.E,$.bo,$.R],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.aq,$.E,$.aP,$.R,$.Z],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c4,$.m)
q.i(0,$.f3,$.j)
q.i(0,$.aO,$.m)
p=$.n
o="The "+p+" tries posting a letter through the "
n=$.ad
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.y
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.F5
i=[U.c]
q.i(0,new R.Q("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.X(j,p,l)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.f
m.i(0,new X.F(s,q,null),$.an)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.bd,$.j)
s.i(0,$.f3,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.bZ,$.m)
s.i(0,$.c4,$.m)
p=$.n
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ad
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.J+"ing is so joyful it's literally deafening. "
l=$.y
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.Q("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.X(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.an)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cc,$.j)
t.i(0,$.lN,$.j)
t.i(0,$.f3,$.K)
t.i(0,$.c4,$.K)
r=$.n
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.y
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ad
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aI+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.Q("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.an)}}
M.fO.prototype={
eq:function(a){var t=this.a
if(!t.a0(0,a))return
return t.n(0,a)}}
Y.kM.prototype={
P:function(a,b){var t=0,s=P.bh(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=J.dZ(b,"\n")
p=P.B
o=P.cF(p,p)
n=P.cF(p,[P.eA,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.db(k).bg(k).length===0)m=null
else if(m==null)m=C.c.bg(k)
else{j=C.c.bg(k)
i=C.c.L(m,0,C.c.e5(m,$.$get$v7())+1)+j
o.i(0,i,m)
if(!n.a0(0,m))n.i(0,m,P.a4(null,null,null,p))
J.xM(n.n(0,m),i)}}r=new M.fO(o,n)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseE:function(){return[M.fO]},
$asc5:function(){return[M.fO,P.B]}}
K.kP.prototype={
cN:function(a,b){var t,s,r
t=this.a
C.b.d_(t)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r)t[r].cN(0,b)}}
K.ff.prototype={
cN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=this.a
s=this.c
r=this.b
q=document
p=q.createElement("div")
p.classList.add("MemoNewspost")
o=q.createElement("div")
n=W.mg(null,t.a,null)
n.classList.add("MemoNewspostIcon")
m=n.style;(m&&C.L).eD(m,"float","left","")
l=q.createElement("span")
C.a1.cB(l,"beforeend",r,C.o,null)
l.classList.add("MemoNewspostText")
r=l.style
m=t.b.hS()
r.color=m
k=q.createElement("span")
s.toString
k.textContent=C.a.C(H.uc(s))+"-"+C.c.cF(C.a.C(H.jE(s)),2,"0")+"-"+C.c.cF(C.a.C(H.jD(s)),2,"0")+": "
k.classList.add("MemoDate")
j=W.v2(null)
t=t.c
j.textContent=t+" posted: "
j.href="bio.html?staff="+t
j.target="_blank"
j.classList.add("MemoNewspostName")
j.appendChild(n)
o.appendChild(k)
o.appendChild(j)
p.appendChild(o)
p.appendChild(l)
b.appendChild(p)},
av:function(a,b){var t,s
t=b.gfZ()
s=this.c
t=C.a.al(P.yZ(0,0,0,t.a-s.a,0,0).a,1e6)
if(t===0)return C.c.ae(b.a.c,"j")?-1:1
return t},
eP:function(a,b){var t=J.dZ(a,":")
if(t.length<2)return
this.c=P.yY(J.kp(t[0]))
if(0>=t.length)return H.u(t,0)
C.b.ak(t,t[0])
this.b=C.b.b6(t,":")
K.va().a.push(this)},
$isbv:1,
$asbv:function(){return[K.ff]},
gfZ:function(){return this.c}}
A.kS.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.L,$.ab,$.b5,$.c6],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.L,$.b5],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b6,$.b5],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aP,$.a7,$.b5],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ap,$.b5],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.O,$.b5],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.E,$.b5],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.cx,$.j)
q.i(0,$.bZ,$.m)
p=$.n
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.J+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.y+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.a_("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e3,$.K)
s.i(0,$.bZ,$.j)
s.i(0,$.cx,$.j)
s.i(0,$.cA,$.j)
o=$.n
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aI
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.J+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.F8
s.i(0,new R.a_("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cD,$.K)
t.i(0,$.c3,$.m)
t.i(0,$.cx,$.j)
t.i(0,$.bZ,$.m)
t.i(0,$.ip,$.m)
r=$.n
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.ad
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.J
t.i(0,new R.a_("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
S.bG.prototype={
C:function(a){return H.C(new H.dT(H.ki(this),null))+": "+this.c},
gK:function(a){return this.c}}
S.i6.prototype={}
S.m8.prototype={}
M.l3.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Can of Spray Paint",H.a([$.aw,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.L,$.ai,$.b5,$.as],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.ty,$.E,$.at],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.L,$.ai,$.as],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aw,$.am,$.L],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ai,$.L],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ai,$.az,$.am],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.aw,$.ai],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aq,$.ai,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.O,$.ai],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.L,$.ai,$.as],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dw,$.m)
q.i(0,$.cC,$.j)
q.i(0,$.aO,$.m)
p=$.n
o="The "+p+" visits a beautiful "
n=$.ad
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.y+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.J+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.a_("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e3,$.K)
s.i(0,$.bZ,$.m)
s.i(0,$.cx,$.K)
s.i(0,$.bd,$.m)
s.i(0,$.cA,$.j)
o=$.n
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aI
l=l+n+" "
k=$.ad
s.i(0,new R.a_("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.J+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.h9,$.K)
t.i(0,$.cy,$.K)
t.i(0,$.eY,$.K)
t.i(0,$.c3,$.K)
t.i(0,$.bd,$.m)
t.i(0,$.aO,$.m)
r=$.n
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.J
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.ad+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.EZ
t.i(0,new R.a_("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
T.lb.prototype={}
V.ld.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Trendy Fabric",H.a([$.aw,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.aw,$.to,$.hg],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.E,$.tu,$.aM],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jg
r=A.i("Broom",H.a([r,$.W,$.ab,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.W,$.tB,$.ab],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.O,$.b4,$.bo,$.aw,$.e5],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aw,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aG,$.c6,$.E,$.bp],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.aw,$.L],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bp],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.E,$.aq,$.ab,$.c6,$.tn],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bK],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bK],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.aw,$.bO,$.b2],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ap,$.bi,$.b9],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ap,$.bi],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aw,$.ap,$.aL],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.cB,$.m)
q.i(0,$.cy,$.K)
p=$.n
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ad
l=[U.c]
q.i(0,new R.a_("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.J+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.x(),!1,!1,new Y.i8("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.j)
s.i(0,$.bZ,$.m)
s.i(0,$.eY,$.j)
s.i(0,$.dv,$.m)
s.i(0,$.bd,$.j)
p=$.n
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ad
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.J+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.F6
s.i(0,new R.a_("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ei,$.j)
t.i(0,$.bd,$.m)
t.i(0,$.dt,$.j)
t.i(0,$.aO,$.m)
t.i(0,$.iv,$.j)
r=$.n
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ad
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.J+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a_("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aB)}}
U.le.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.as,$.a7,$.L,$.aC,$.R,$.Z],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.az,$.bo,$.R,$.aC],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.b9,$.bo,$.R,$.aC],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.b6,$.R,$.bK],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b6,$.R,$.bp,$.aC,$.be,$.bQ,$.b7],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aG,$.b7,$.aC,$.L,$.R],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.j)
q.i(0,$.d2,$.m)
q.i(0,$.f3,$.K)
q.i(0,$.bd,$.K)
q.i(0,$.bY,$.m)
p=$.n
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ad
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.y
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.Q("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.an)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.j)
s.i(0,$.d2,$.m)
s.i(0,$.em,$.ah)
s.i(0,$.ej,$.m)
s.i(0,$.t2,$.m)
s.i(0,$.d1,$.m)
s.i(0,$.d2,$.m)
s.i(0,$.bd,$.K)
s.i(0,$.bY,$.m)
s.i(0,$.du,$.m)
p=$.n
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aI
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.J+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.y
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.Q("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ew(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.n
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ad
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.y
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cg+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.Q("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.X(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.an)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bY,$.j)
t.i(0,$.vw,$.ah)
t.i(0,$.h6,$.K)
r=$.n
q="The "+r+" finds a small dungeon bearing the image of "
p=$.y
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.X(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ew(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
k=$.n
p="The "+k+" learns from one of their "
r=$.t
p=p+r+"s that there is an ancient prophecy of a "
l=$.aI
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ad
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.y
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cg+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.EY
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.X(o,k,q)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.an)}}
Z.lf.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.L,$.as,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.az,$.bo,$.ab,$.R,$.Z],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.az,$.bo,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.m)
q.i(0,$.dt,$.j)
q.i(0,$.aO,$.m)
q.i(0,$.iv,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.y
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wq
k=[U.c]
q.i(0,new R.Q("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=this.f
l.i(0,new X.F(s,q,null),$.an)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dt,$.j)
s.i(0,$.d3,$.m)
s.i(0,$.cn,$.m)
s.i(0,$.e1,$.m)
s.i(0,$.cx,$.j)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.y
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(q,s,null),$.an)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dw,$.j)
t.i(0,$.ir,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cn,$.j)
t.i(0,$.e1,$.j)
t.i(0,$.dt,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.y
t.i(0,new R.Q("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aI+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(s,t,null),$.an)}}
X.il.prototype={}
X.i5.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.h3]]}}}
M.h3.prototype={}
U.lH.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Fluthulu Poster",H.a([$.O,$.b4,$.b7,$.br],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.O,$.b4,$.b7],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aG,$.az,$.b9,$.fa,$.aH],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.az,$.vW,$.fb,$.aH],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.az,$.bQ,$.bi,$.b7],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.as,$.L,$.aA,$.b7],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.L,$.a2,$.ab],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.L,$.a2,$.ab],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.L,$.a2,$.bQ,$.b7,$.br],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aG,$.au,$.a2,$.ab,$.aH],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aG,$.tk,$.a2,$.ab,$.aH],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.h4,$.ah)
q.i(0,$.cB,$.m)
q.i(0,$.c4,$.m)
q.i(0,$.cD,$.K)
p=$.n
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.y
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ad
j=[U.c]
q.i(0,new R.a_("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.j)
s.i(0,$.d1,$.j)
s.i(0,$.is,$.m)
s.i(0,$.bY,$.j)
s.i(0,$.em,$.j)
s.i(0,$.h8,$.m)
o=$.n
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.a_("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.j)
t.i(0,$.iu,$.m)
t.i(0,$.bY,$.j)
t.i(0,$.dL,$.m)
t.i(0,$.eZ,$.m)
t.i(0,$.t5,$.m)
r=$.n
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.J
t.i(0,new R.a_("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
N.a6.prototype={
C:function(a){return H.C(new H.dT(H.ki(this),null))+": "+H.C(this.b)}}
O.c5.prototype={
b_:function(a){var t=0,s=P.bh(),r,q=this,p
var $async$b_=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.ck(q.aQ(a),$async$b_)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b_,s)}}
O.dq.prototype={
b5:function(a){var t=0,s=P.bh(),r
var $async$b5=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b5,s)},
cv:function(a){var t=0,s=P.bh(),r,q=this
var $async$cv=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yw([J.uT(a)],q.aO(0),null))
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$cv,s)},
aQ:function(a){var t=0,s=P.bh(),r,q=this,p,o
var $async$aQ=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:p=P.bg
o=new P.bj(0,$.ao,null,[p])
W.vD(a,null,q.aO(0),null,null,"arraybuffer",null,null).aR(new O.kG(new P.dV(o,[p])))
r=o
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$aQ,s)},
$asc5:function(a){return[a,P.bg]}}
O.kG.prototype={
$1:function(a){this.a.aA(0,H.kj(J.xY(a),"$isbg"))},
$S:function(){return{func:1,args:[W.e4]}}}
O.eE.prototype={
b5:function(a){var t=0,s=P.bh(),r,q,p,o,n
var $async$b5=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:a.toString
q=H.cO(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hD(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b5,s)},
aQ:function(a){var t=0,s=P.bh(),r
var $async$aQ=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=W.te(a,null,null)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$aQ,s)},
$asc5:function(a){return[a,P.B]}}
O.ij.prototype={
aQ:function(a){var t=0,s=P.bh(),r
var $async$aQ=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$aQ,s)},
b5:function(a){return H.ba("Element format doesn't read from buffers")},
$asc5:function(a){return[a,P.B]}}
V.lY.prototype={
aO:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bh(),r
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:t=3
return P.ck(A.hp("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdq:function(){return[R.ha]},
$asc5:function(){return[R.ha,P.bg]}}
Z.ik.prototype={}
E.iz.prototype={}
E.nv.prototype={}
E.M.prototype={
C:function(a){var t="["+J.cK(this.a)+" x "+H.C(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fI.prototype={
C:function(a){var t="[(Random from "+P.tF(this.d,"(",")")+") x "+H.C(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kv.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.C(this.b)+"]"}}
Y.m2.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.as,$.N,$.L,$.Z,$.hi],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.az,$.N,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.O,$.N,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.mx,$.N,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lP,$.m)
t.i(0,$.c4,$.j)
t.i(0,$.du,$.K)
t.i(0,$.df,$.j)
r=$.t
q="An excited "+r+" runs up to the "
p=$.n
q=q+p+" and starts to "
o=$.J
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aI
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ad
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.y
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.Q("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.X(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o=$.n
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.y+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.x(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.y+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.n
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.J
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aI+" Quest Online: The "+$.ad+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a5("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.n
p=p+o+" shows the "
r=$.t
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.J+"s in time to stop them.    ")],H.a([],i),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.m3.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Sherpa Parka",H.a([$.bp,$.N,$.ce],s),"Clearly the best class uses this.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.Z,$.bp,$.as,$.L,$.N,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.E,$.N,$.aP],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.E,$.N,$.a7,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lP,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.du,$.m)
t.i(0,$.df,$.j)
r="Now that the "+$.y+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.n
o=[U.c]
t.i(0,new R.a5("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.J+", but they are happy.")],H.a([],o),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.m4.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Doll",H.a([$.mx,$.aw,$.ar,$.R],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.ar,$.R,$.Z,$.b7],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.tt,$.R],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.L,$.R,$.aA],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.am,$.b6,$.R],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.ej,$.K)
q.i(0,$.el,$.j)
q.i(0,$.bZ,$.m)
p=$.n
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.y
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.Q("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.X(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=$.n
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ad
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.y
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.Q("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.X(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.ue(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.F(s,q,null),$.an)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.j)
s.i(0,$.is,$.j)
s.i(0,$.f3,$.m)
s.i(0,$.bY,$.j)
s.i(0,$.cy,$.m)
s.i(0,$.du,$.K)
p=$.n
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ad
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.y
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is victorious. "
s.i(0,new R.Q("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j="Now that the "+$.y+" has been defeated, a Copy "
p=$.n
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.J
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f5+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.e7(),!1,!1,new Y.c_("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.n
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.y
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.Q("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.X(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ew(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.F(q,s,null),$.an)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.j)
t.i(0,$.cy,$.j)
t.i(0,$.lO,$.j)
t.i(0,$.eY,$.m)
t.i(0,$.h8,$.j)
t.i(0,$.cB,$.m)
t.i(0,$.el,$.K)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.Q("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aI+" laws put in place by "+$.y+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.n
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aI
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.J
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hE(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.n
m="The "+q+"  and the "
r=$.ey
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.y
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.Q("Flushed Shipping Dungeon",!1,[new U.c(m),new U.X(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.r)+".",n)],H.a([],i),R.ex(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n=$.n
r="The "+n+"  and the "
q=$.ey
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.y
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.Q("Pitched Shipping Dungeon",!1,[new U.c(r),new U.X(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.r)+".",m)],H.a([],i),R.ex(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
h.i(0,new X.F(s,t,null),$.aB)}}
B.m5.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Family Ashes",H.a([$.aG,$.aq,$.N,$.aC,$.bV],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.Z,$.L,$.N,$.aC,$.mu],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.as,$.N,$.ai],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vM,$.N,$.mo,$.mu],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.th,$.N,$.at,$.mu],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cc,$.m)
r=$.y
q="With the death of the "+r+", it now falls to the "
p=$.n
o=[U.c]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
r="The "+$.y+" has released the frogs into the "
p=$.n
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
X.m7.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Wand",H.a([$.W,$.R,$.a2,$.bb],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bb,$.bz,$.R,$.b1,$.a9,$.Z,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bP,$.tr,$.R,$.a2,$.b5,$.bb],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bb,$.b1,$.R,$.aq],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.az,$.b1,$.R,$.bb],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.t1,$.j)
q.i(0,$.cB,$.m)
q.i(0,$.aO,$.j)
q.i(0,$.cn,$.j)
p=$.n
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.J+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.y
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ad
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.F0
i=[U.c]
q.i(0,new R.Q("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(k,p,j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.an)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.j)
s.i(0,$.ip,$.m)
s.i(0,$.d3,$.j)
p=$.n
o="The "+p+"  is approached by a Crafty "
m=$.t
o=o+m+" who offers them a magical "
l=$.ad
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.y
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.Q("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.an)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.dv,$.K)
t.i(0,$.cC,$.j)
t.i(0,$.cn,$.j)
r=$.n
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.y
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ad
t.i(0,new R.Q("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.X("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.n
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.y
t.i(0,new R.Q("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.X("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hE(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(s,t,null),$.an)}}
X.mc.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Footstick",H.a([$.dg,$.N,$.jj,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.as,$.N,$.hi,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.O,$.N,$.e5,$.mt,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tA,$.N,$.mo],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cD,$.j)
t.i(0,$.d3,$.j)
t.i(0,$.dt,$.j)
t.i(0,$.df,$.j)
t.i(0,$.ei,$.j)
t.i(0,$.e1,$.j)
t.i(0,$.h7,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.a_("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uf(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wA(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
q=$.n
t.i(0,new R.a_("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.x(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.z)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.t+" tells the "
r=$.n
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wB(),!1,!1,new Y.c_("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.y
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.an)}}
Q.md.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Yardstick",H.a([$.dg,$.N,$.jj,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURB Hacking Guide",H.a([$.as,$.N,$.hi,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Body Pillow of Hussie",H.a([$.O,$.N,$.e5,$.mt,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mh.prototype={
b_:function(a){var t=0,s=P.bh(),r,q,p
var $async$b_=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:q=W.mg(null,a,null)
p=new W.hS(q,"load",!1,[W.S])
t=3
return P.ck(p.gag(p),$async$b_)
case 3:r=q
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b_,s)},
$asdq:function(){return[W.f8]},
$asc5:function(){return[W.f8,P.bg]}}
Q.nM.prototype={
aO:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bh(),r,q=this,p,o,n
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.ck(q.cv(b),$async$P)
case 3:p=n.mg(null,d,null)
o=new W.hS(p,"load",!1,[W.S])
t=4
return P.ck(o.gag(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)}}
Q.nJ.prototype={
aO:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bh()
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.bl(null,s)}})
return P.bm($async$P,s)},
$asdq:function(){return[Q.jA]},
$asc5:function(){return[Q.jA,P.bg]}}
B.hf.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.j)
q.i(0,$.bd,$.K)
q.i(0,$.dN,$.j)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a_("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.f0,$.j)
s.i(0,$.ek,$.K)
s.i(0,$.f_,$.m)
s.i(0,$.cT,$.j)
s.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a_("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.x(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bd,$.K)
t.i(0,$.c4,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.a_("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=$.n
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.J
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ud(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
n.i(0,new X.F(s,t,null),$.aB)},
C:function(a){return this.ch},
gK:function(a){return this.ch}}
A.a1.prototype={
av:function(a,b){var t=b.gbu()-this.gbu()
if(t>0)t=1
else if(t<0)t=-1
return C.d.b0(t)},
gh2:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.jF(null,null)
s.cX(this.f.a)
if(this.r===0)return t
r=P.dh(G.yT(this.f),!0,G.a0)
C.b.d0(r,new A.mB())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=r[p]
if(!(o instanceof G.af||o.gdT().length===0))t.push(" "+Y.GZ(s.hB(o.gdT())))}return t},
gbu:function(){var t,s,r
for(t=this.f,s=new P.dC(t,t.r,null,null,[null]),s.c=t.e,r=0;s.I();)r+=s.d.gbu()
return r},
gfT:function(){var t=this.f
return new H.hP(t,new A.mA(),[H.P(t,0)])},
ghd:function(){var t,s,r,q,p
for(t=this.gh2(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.ghd()},
M:function(a,b,c,d,e){var t,s,r
t=P.tR(b,null)
this.f=t
if(t.a===0)t.h(0,$.mr)
s=P.tR(this.gfT(),null)
for(t=new P.dC(s,s.r,null,null,[null]),t.c=s.e;t.I();){r=t.d
this.f.bL(0,r.geF())
this.f.ak(0,r)}$.$get$wg().push(this)},
$isbv:1,
$asbv:function(){return[A.a1]}}
A.mB.prototype={
$2:function(a,b){return a.ge9()-C.a.b0(b.ge9())},
$S:function(){return{func:1,args:[G.a0,G.a0]}}}
A.mA.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
Z.mI.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Juice Box",H.a([$.L,$.R,$.bb,$.aH],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.e5,$.b4,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.e1,$.ah)
t.i(0,$.cB,$.m)
t.i(0,$.bZ,$.j)
t.i(0,$.aO,$.m)
t.i(0,$.cn,$.j)
r=$.n
q="The "+r+" sees a floating sentient "
p=$.ad
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.t+" notices it, and starts "+$.J+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.y
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.Q("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.n
r="The "+p+" is greeted by a young adolescent "
m=$.t
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.y
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.J
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.Q("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.X(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=$.n
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.t
m=m+q+" informs them that "
p=$.y
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.Q("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.X(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
this.f.i(0,new X.F(s,t,null),$.an)}}
N.mJ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Gavel",H.a([$.W,$.tq],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.az,$.be],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.O,$.aw],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.L,$.as],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bO,$.ap,$.bp],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.L,$.as,$.am],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aG,$.E,$.be],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.h4,$.K)
q.i(0,$.c3,$.m)
q.i(0,$.cC,$.K)
p=$.n
o="The "+p+" finds an elaborate courtroom full of "+$.J+"ing "
n=$.t
m=[U.c]
q.i(0,new R.a_("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ad+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.j)
s.i(0,$.du,$.m)
s.i(0,$.cT,$.m)
p=$.n
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.J+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ad+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.EX
s.i(0,new R.a_("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.j)
t.i(0,$.cc,$.m)
t.i(0,$.d1,$.K)
t.i(0,$.em,$.m)
t.i(0,$.ej,$.m)
t.i(0,$.f1,$.m)
t.i(0,$.it,$.m)
r=$.n
q="The "+r+" finds a crowd of "
p=$.J
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.F9
t.i(0,new R.a_("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aB)}}
S.mL.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Shining Armor",H.a([$.aG,$.mw,$.N,$.fa],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.Z,$.mw,$.N,$.aM,$.at,$.fb],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.E,$.N,$.bi,$.ar],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aG,$.fa,$.N,$.mw],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lM,$.j)
t.i(0,$.dM,$.j)
t.i(0,$.e3,$.j)
t.i(0,$.f1,$.j)
t.i(0,$.h4,$.m)
r="The "+$.y+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.n
p=[U.c]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.y
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.n
t.i(0,new R.a5("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.aI
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.y
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ad
n=n+r+" Blade. The "
m=$.n
t.i(0,new R.a5("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
r="The volcanos of the land are weirdly active after the defeat of the "+$.y+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.J+"s, but not really doing anything to evacuate or save anyone. The "
o=$.n
t.i(0,new R.a5("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.mM.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.L,$.as,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.az,$.bo,$.ab,$.R,$.Z],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.az,$.bo,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.m)
q.i(0,$.dt,$.j)
q.i(0,$.aO,$.m)
q.i(0,$.iv,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.y
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wq
k=[U.c]
q.i(0,new R.Q("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=this.f
l.i(0,new X.F(s,q,null),$.an)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dt,$.j)
s.i(0,$.d3,$.m)
s.i(0,$.cn,$.m)
s.i(0,$.e1,$.m)
s.i(0,$.cx,$.j)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.y
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(q,s,null),$.an)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dw,$.j)
t.i(0,$.ir,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cn,$.j)
t.i(0,$.e1,$.j)
t.i(0,$.dt,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.y
t.i(0,new R.Q("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aI+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(s,t,null),$.an)}}
K.mO.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Creeping Vine",H.a([$.W,$.R,$.b2,$.ar],s),null,!1,"Sentient Plant Tentacles")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.tj,$.R,$.aL],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aG,$.au,$.R,$.ar],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bV,$.R,$.aL],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b6,$.R,$.aL,$.Z,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bi,$.R,$.ar],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c4,$.j)
q.i(0,$.bd,$.j)
q.i(0,$.h5,$.K)
q.i(0,$.aO,$.m)
q.i(0,$.lP,$.m)
q.i(0,$.cD,$.K)
p=$.n
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.J+"ing in panic. Don't upset "
m=$.y
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.Q("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.X(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.an)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.cy,$.j)
s.i(0,$.cD,$.K)
s.i(0,$.aO,$.m)
o=$.n
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.t
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.y
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.Q("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.X(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.an)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.d2,$.j)
t.i(0,$.bd,$.K)
t.i(0,$.dN,$.j)
t.i(0,$.bY,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.im,$.m)
r="Drawn by wailing and "+$.J+"ing, the "
q=$.n
r=r+q+" enters a rotting "
o=$.t
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.y
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.Q("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.X(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.an)}}
G.mP.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("FAQ",H.a([$.a7,$.R,$.Y,$.bW],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.az,$.R,$.b1,$.a7,$.bW],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.R,$.b1,$.bW,$.Z,$.tk],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.vV,$.R,$.ab],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.w3,$.R],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b2,$.R,$.b1,$.bW],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.b6,$.R,$.ar],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lK,$.j)
q.i(0,$.ei,$.m)
q.i(0,$.dL,$.j)
q.i(0,$.el,$.j)
p=$.n
o="The "+p+" is searching for the lair of "
n=$.y
o=o+n+" when some local "
m=$.t
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.Q("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.X(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.n
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.J+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.y
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.Q("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.X(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.f
m.i(0,new X.F(s,q,null),$.an)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.dv,$.j)
s.i(0,$.lJ,$.j)
s.i(0,$.ek,$.j)
s.i(0,$.ip,$.j)
p=$.n
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ad
o=o+l+", but "
k=$.y
o=o+k+" has hoarded all of the planets "
j=$.aI
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.J+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.Q("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.X(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.ue(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.n
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.y
s.i(0,new R.Q("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.J+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.X("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.an)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.h6,$.m)
q.i(0,$.bd,$.m)
q.i(0,$.f2,$.j)
q.i(0,$.aO,$.m)
q.i(0,$.cC,$.j)
p="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f5+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.e7(),!1,!1,new Y.c_("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f5+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.ew(),!1,!1,new Y.c_("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.n
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.y
q.i(0,new R.Q("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,q,null),$.an)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.j)
t.i(0,$.lK,$.j)
t.i(0,$.el,$.m)
t.i(0,$.cB,$.m)
t.i(0,$.t4,$.m)
t.i(0,$.bY,$.K)
t.i(0,$.e3,$.K)
t.i(0,$.bZ,$.m)
t.i(0,$.cx,$.K)
t.i(0,$.bd,$.m)
t.i(0,$.cA,$.j)
s=$.n
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ad
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.J+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.y
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.Q("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.X(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o="After the "+$.y+", the "
s=$.n
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f5+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.e7(),!1,!1,new Y.c_("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,t,null),$.an)}}
Z.n2.prototype={
E:function(){var t,s,r,q
t=this.H
s=[G.a0]
r=A.i("Dream Bubbles Book",H.a([$.L,$.ai,$.as,$.vO],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.P(t,0)]))
t=Q.H(null,null,A.a1)
r=A.i("Uno Reverse Card",H.a([$.mp,$.jj,$.ai],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.O,$.N,$.ai],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.hi,$.N,$.ai],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.Z,$.L,$.N,$.bu,$.as],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.K)
q.i(0,$.em,$.K)
q.i(0,$.bY,$.K)
q.i(0,$.cT,$.m)
p="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.n
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.J+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o="As soon as the "+$.y+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.n
q.i(0,new R.a5("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.x
p.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.vs,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.aO,$.m)
s="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.n
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.J+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="As soon as the "+$.y+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.n
t.i(0,new R.a5("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.H,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.bL)}}
S.n4.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Alternate Costume",H.a([$.O,$.N,$.a2,$.Z,$.aj],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.O,$.N,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.W,$.N,$.ab,$.a2,$.dg],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jg,$.W,$.N,$.ar,$.a2,$.dg],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.eZ,$.j)
t.i(0,$.f1,$.m)
t.i(0,$.cc,$.j)
t.i(0,$.f_,$.m)
t.i(0,$.d2,$.K)
r="The "+$.y+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.n
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.n
t.i(0,new R.a5("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q=$.n
r="The "+q+" is feeling quite pleased with their victory over the "+$.y+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aI
t.i(0,new R.a5("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.x(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="Now that the "+$.y+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.n
q=q+r+"'s help in planning the brand new city of "
n=$.aI
t.i(0,new R.a5("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.J+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.x(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.n5.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Maiden's Breath",H.a([$.b2,$.N,$.aw],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.W,$.N,$.dg,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aw,$.aG,$.E,$.N,$.Z,$.fa,$.vG],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.L,$.N,$.a9,$.as],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.df,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.aO,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.dv,$.m)
t.i(0,$.cx,$.m)
r="The "+$.y+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.n
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.n
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a5("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.J+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.y+". ")],H.a([],n),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.rv.prototype={
$1:function(a){var t,s,r,q,p
t=window
s="scrollY" in t?C.d.b0(t.scrollY):C.d.b0(t.document.documentElement.scrollTop)
r=window.screen.height
if(typeof r!=="number")return H.a8(r)
q=1500-r
if(q>s){t=document.querySelector("body").style
p="center -"+C.a.C(s)+"px"
t.backgroundPosition=p}else{t=document.querySelector("body").style
p="center -"+C.a.C(q)+"px"
t.backgroundPosition=p}},
$S:function(){return{func:1,args:[W.S]}}}
V.nd.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Puzzle Box",H.a([$.W,$.R,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a7,$.R,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.E,$.R],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.E,$.R,$.a7,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aG,$.jh,$.au,$.ai,$.R,$.Z,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cn,$.m)
q.i(0,$.ei,$.K)
q.i(0,$.cC,$.K)
p=$.n
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.y
k=[U.c]
q.i(0,new R.Q("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fk(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.n
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.y
q.i(0,new R.Q("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.X("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.an)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.h4,$.K)
s.i(0,$.c3,$.m)
s.i(0,$.cC,$.K)
s.i(0,$.cn,$.K)
p=$.y
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.n
s.i(0,new R.Q("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.X("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.an)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.j)
t.i(0,$.bd,$.m)
t.i(0,$.f2,$.j)
t.i(0,$.aO,$.m)
t.i(0,$.cC,$.j)
r=$.n
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.y
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ad+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.Q("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.an)}}
E.ne.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Feather Pen",H.a([$.E,$.N,$.ai,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.w2,$.N,$.jh,$.ab,$.Z],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.L,$.N,$.ai,$.as],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.df,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.aO,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.dv,$.m)
t.i(0,$.cx,$.m)
r="The "+$.y+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.n
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.y+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.n
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ad
t.i(0,new R.a5("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
F.nf.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Piano",H.a([$.ab,$.W,$.a9,$.ai],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.E,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aP,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.W,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.L,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.az,$.a9,$.a7,$.aP,$.am],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.az,$.a9,$.a7,$.am],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.W,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.ah)
q.i(0,$.t4,$.j)
q.i(0,$.el,$.j)
q.i(0,$.dv,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.lI,$.m)
p=$.n
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.y+" can only be awoken by the Legendary Hero playing the "
n=$.aI
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ad
k=[U.c]
q.i(0,new R.a_("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.n
n="The "+p+" finds an empty, trashed "
l=$.aI
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ad+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.J+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.F2
q.i(0,new R.a_("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.t7,$.ah)
s.i(0,$.du,$.m)
s.i(0,$.cT,$.m)
s.i(0,$.dv,$.j)
s.i(0,$.lI,$.ah)
o=$.n
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aI
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.y
s.i(0,new R.a_("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.ad+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.h5,$.ah)
t.i(0,$.bZ,$.m)
t.i(0,$.dN,$.m)
r=$.n
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.J
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aI+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a_("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
Y.ns.prototype={
P:function(a,b){var t=0,s=P.bh(),r,q=this,p,o
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:t=3
return P.ck(A.hp("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.ck(Q.o9(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bI(p)
o.eC(p,P.wj(["",$.$get$vg()],P.B,S.ht))
o.eB(p,!1)
q.b=p}J.v_(p,b)
r=J.v_(q.b,b)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseE:function(){return[S.fj]},
$asc5:function(){return[S.fj,P.B]}}
V.nA.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Shorts",H.a([$.O,$.N,$.f9,$.Z],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.az,$.N,$.am],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ap,$.N,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lM,$.j)
t.i(0,$.cD,$.m)
t.i(0,$.h9,$.m)
t.i(0,$.lO,$.m)
t.i(0,$.df,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.ek,$.m)
t.i(0,$.t8,$.m)
t.i(0,$.im,$.m)
t.i(0,$.lJ,$.m)
r="The "+$.y+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.n
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.n
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.J
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ad
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.y
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.Q("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k,"The "+q+" whited out...",m)],H.a([],n),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m="Now that the "+$.y+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.n
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a5("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aI+" buffs. With a deafening "+$.J+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.x(),!1,!1,new Y.i8("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
G.nO.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Superhero Action Figure",H.a([$.az,$.am,$.aH],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.az,$.am],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.az,$.bV],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.az,$.b5,$.bp,$.ce],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.az,$.am],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.L,$.am],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b2,$.am,$.O,$.ar],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b2,$.aN,$.am,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aH,$.E,$.am,$.fb,$.at,$.bP],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.L,$.am],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.L,$.am],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.m)
q.i(0,$.cA,$.m)
q.i(0,$.bZ,$.j)
q.i(0,$.cD,$.ah)
q.i(0,$.d3,$.ah)
p=$.n
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aI+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.J+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.F3
l=[U.c]
q.i(0,new R.a_("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ej,$.m)
s.i(0,$.du,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.bZ,$.m)
s.i(0,$.dM,$.j)
o=$.n
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aI
s.i(0,new R.a_("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dL,$.j)
t.i(0,$.cy,$.j)
t.i(0,$.dM,$.m)
r=$.n
q="The "+r+" gets a job at the "+$.aI+" Cinema. A new movie, The Lonely "
o=$.ad
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.J+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a_("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
N.nS.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Feather'd Cap",H.a([$.O,$.N,$.f9],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.Z,$.to,$.N,$.f9],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bs,$.N],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cA,$.m)
t.i(0,$.cn,$.m)
t.i(0,$.dN,$.K)
r="With the closing of the curtain, the "+$.y+" has released the frogs, and yet they are nowhere to be found. The "
q=$.n
p=[U.c]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.y
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.n
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a5("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ad+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.c.prototype={}
U.X.prototype={}
R.nT.prototype={
C:function(a){return H.C(new H.dT(H.ki(this),null))+": "+this.c},
gK:function(a){return this.c}}
R.a_.prototype={}
R.Q.prototype={}
R.a5.prototype={}
R.bA.prototype={}
E.nU.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Curtain",H.a([$.O,$.R,$.aH],s),null,!1,"Show Ender")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.E,$.fb,$.aM,$.R,$.at,$.b7,$.aH,$.br,$.aC],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.E,$.aP,$.a7,$.R,$.aH],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aG,$.E,$.aP,$.bu,$.c7,$.R,$.aH],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ap,$.bu,$.ai,$.R,$.Z,$.aH],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.W,$.R,$.b7,$.aq,$.bs,$.aH],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.io,$.j)
q.i(0,$.d1,$.j)
q.i(0,$.du,$.j)
q.i(0,$.d2,$.m)
q.i(0,$.bY,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c3,$.K)
q.i(0,$.d3,$.m)
q.i(0,$.ej,$.j)
q.i(0,$.it,$.j)
q.i(0,$.f1,$.j)
q.i(0,$.lN,$.j)
q.i(0,$.h5,$.m)
q.i(0,$.em,$.j)
p=$.n
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.Q("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hE(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.y
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.an)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dv,$.j)
s.i(0,$.bY,$.m)
s.i(0,$.c3,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.cx,$.j)
s.i(0,$.cA,$.m)
s.i(0,$.is,$.K)
s.i(0,$.d1,$.m)
s.i(0,$.cD,$.j)
s.i(0,$.bZ,$.j)
s.i(0,$.d3,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aI
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.an)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.io,$.j)
t.i(0,$.d3,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.cD,$.m)
t.i(0,$.cx,$.j)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.an)}}
Y.dP.prototype={}
Y.ae.prototype={}
Y.d_.prototype={}
Y.c_.prototype={
gK:function(a){return this.c}}
Y.T.prototype={}
Y.i8.prototype={}
Y.bE.prototype={}
Y.cX.prototype={}
Y.kQ.prototype={}
Y.bw.prototype={}
Y.jz.prototype={}
Y.ix.prototype={}
Y.jB.prototype={}
N.nZ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Domino Mask",H.a([$.O,$.N,$.f9],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.ti,$.N,$.f9,$.tg],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.Z,$.az,$.a7,$.N,$.Y,$.aj],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.c3,$.j)
t.i(0,$.cc,$.m)
t.i(0,$.dM,$.m)
r="The "+$.y+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.n
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.y
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.o_.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Red Rose",H.a([$.aA,$.aw],s),null,!1,"Seductive Plant")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aA,$.L],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aA,$.ap],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aA,$.aq],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aA,$.bs,$.E,$.aN],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.as,$.L,$.aA],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.j)
q.i(0,$.h9,$.m)
q.i(0,$.eY,$.m)
q.i(0,$.h8,$.j)
q.i(0,$.cB,$.m)
q.i(0,$.iq,$.K)
p=$.n
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ad+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.a_("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.m)
s.i(0,$.dL,$.j)
s.i(0,$.h8,$.j)
s.i(0,$.cy,$.m)
s.i(0,$.el,$.K)
s.i(0,$.iq,$.K)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.n
s.i(0,new R.a_("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.j)
t.i(0,$.cy,$.j)
t.i(0,$.eY,$.m)
t.i(0,$.lO,$.j)
t.i(0,$.h8,$.j)
t.i(0,$.cB,$.m)
t.i(0,$.el,$.K)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.y+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.F_
t.i(0,new R.a_("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.n
r="The "+n+"  and the "
o=$.ey
t.i(0,new R.a_("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o=$.n
n="The "+o+"  and the "
r=$.ey
t.i(0,new R.a_("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r=$.n
o="The "+r+"  and the "
n=$.ey
t.i(0,new R.a_("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p.i(0,new X.F(s,t,null),$.aB)}}
V.o0.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Arrow",H.a([$.aM,$.W,$.tg],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bow",H.a([$.W,$.ab,$.mr],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yondu",H.a([$.aH,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Empathy",H.a([$.R,$.vJ,$.aH],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.aO,$.m)
t.i(0,$.dw,$.K)
t.i(0,$.bZ,$.m)
t.i(0,$.cn,$.K)
r=$.n
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.y
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.Q("Be the Yondu",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.c]),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
this.f.i(0,new X.F(s,t,null),$.an)}}
T.hG.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.j)
q.i(0,$.bd,$.K)
q.i(0,$.dN,$.j)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.x
n.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.f0,$.j)
s.i(0,$.ek,$.K)
s.i(0,$.f_,$.m)
s.i(0,$.cT,$.j)
s.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a5("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.n
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a5("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.ey+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.J+"ing in amazement. The factory is saved! ")],H.a([],m),R.ex(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bd,$.K)
t.i(0,$.c4,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.J
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ud(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.K)
l=$.n
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.bL)},
C:function(a){return this.r},
a2:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.il("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i5]),H.a([],[M.h3]))
this.E()
this.F()
t=this.Q
if($.$get$o2().a0(0,t))H.ba("Duplicate class id for "+this.C(0)+": "+t+" is already registered for "+J.cK($.$get$o2().n(0,t))+".")
$.$get$o2().i(0,t,this)},
gK:function(a){return this.r}}
E.o3.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Sage's Robe",H.a([$.O,$.N,$.b4,$.Y,$.a2,$.Z],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.L,$.N,$.as,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.O,$.N,$.e5,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.h6,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.f2,$.j)
t.i(0,$.aO,$.K)
t.i(0,$.cC,$.j)
r="The "+$.y+" has blocked access to the books for the duration. The "
q=$.n
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.y+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.n
t.i(0,new R.a5("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.J+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.o4.prototype={}
K.o5.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Uno Reverse Card",H.a([$.mp,$.R,$.aH],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.e5,$.b4,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.io,$.j)
q.i(0,$.d1,$.j)
q.i(0,$.du,$.j)
q.i(0,$.d2,$.m)
q.i(0,$.bY,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c3,$.K)
q.i(0,$.d3,$.m)
q.i(0,$.ej,$.j)
q.i(0,$.it,$.j)
q.i(0,$.f1,$.j)
q.i(0,$.lN,$.j)
q.i(0,$.h5,$.m)
q.i(0,$.em,$.j)
p=$.n
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.Q("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hE(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.y
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.an)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dv,$.j)
s.i(0,$.bY,$.m)
s.i(0,$.c3,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.cx,$.j)
s.i(0,$.cA,$.m)
s.i(0,$.is,$.K)
s.i(0,$.d1,$.m)
s.i(0,$.cD,$.j)
s.i(0,$.bZ,$.j)
s.i(0,$.d3,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aI
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.an)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.io,$.j)
t.i(0,$.d3,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.cD,$.m)
t.i(0,$.cx,$.j)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.an)}}
Y.o6.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Walking Stick",H.a([$.W,$.N,$.dg],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.O,$.N,$.vP,$.Y,$.Z],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.L,$.N,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.N,$.Y,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.df,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.bZ,$.K)
t.i(0,$.aO,$.K)
r="Now that the "+$.y+" has been defeated, the planet has really opened up. The "
q=$.n
p=[U.c]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.y+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.   ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.o7.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Scroll",H.a([$.L,$.N,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.b6,$.N,$.aj,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.L,$.N,$.as,$.Y,$.aj,$.Z],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lI,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.cC,$.j)
t.i(0,$.aO,$.m)
t.i(0,$.cn,$.m)
r="The "+$.y+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.n
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.y+" has been taken care of, the "
r=$.n
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a5("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
S.oa.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Cueball",H.a([$.en,$.mx,$.N,$.ab,$.ar,$.Z],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.en,$.vN,$.N,$.b1],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.b6,$.N,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vI,$.N,$.b4],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.vt,$.j)
t.i(0,$.ir,$.j)
t.i(0,$.vr,$.j)
t.i(0,$.cD,$.m)
r="Now that the "+$.y+" has been defeated, the land is really starting to open up. The "
q=$.n
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.a5("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.y+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.n
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a5("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
r="A group of underlings are still making trouble, even after the defeat of the "+$.y+". The "
p=$.n
r=r+p+" begins planting rumors of a huge "
q=$.ad
t.i(0,new R.a5("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.c1.prototype={}
Y.oh.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.as,$.N,$.L,$.bu,$.Z,$.aL],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b6,$.N,$.aL],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bo],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.b1,$.aw,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.bd,$.m)
t.i(0,$.df,$.j)
t.i(0,$.cD,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.c4,$.j)
r="The defeat of the "+$.y+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.n
p=[U.c]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.y+" has been taken care of, the "
r=$.n
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a5("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.oi.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Fiduspawn Plush",H.a([$.ce,$.O,$.b4],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ce,$.O,$.b4],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tm,$.az],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.ar,$.bi,$.b9,$.br,$.tv],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.O,$.b4,$.ce],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.as,$.L],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.as,$.L],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b4,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.as,$.L,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dw,$.K)
q.i(0,$.aO,$.m)
q.i(0,$.cn,$.j)
q.i(0,$.cC,$.m)
p=$.n
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.a_("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aI+" or "+$.ad+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.J+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dw,$.K)
s.i(0,$.aO,$.j)
s.i(0,$.cn,$.j)
s.i(0,$.t1,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.t7,$.j)
s.i(0,$.cC,$.m)
o=$.n
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.J
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aI
s.i(0,new R.a_("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cT,$.K)
t.i(0,$.dL,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.dM,$.j)
t.i(0,$.h4,$.j)
r=$.n
q="The "+r+" wanders into an entire crowd of "
o=$.t
t.i(0,new R.a_("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.J+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
M.bB.prototype={}
N.oj.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Frog Statue",H.a([$.aG,$.au,$.R],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.O,$.R],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c0,$.Y,$.a7,$.R],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.E,$.b6,$.Y,$.R],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.L,$.R,$.tp,$.Z],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.n
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.J+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.y+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.n
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.t+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.t+" tells the "
p=$.n
t=t+p+" that they must negotiate with "
o=$.y
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.n
p="The "+o+" meets with "
t=$.y
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cD,$.K)
t.i(0,$.t3,$.j)
s=[U.c]
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.x(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.F(o,t,null),$.G7)}}
U.ag.prototype={
gK:function(a){return this.d+"kind"},
$isbv:1,
$asbv:function(){return[A.a1]}}
K.cG.prototype={
gK:function(a){return this.a}}
M.on.prototype={
aO:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bh(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bn(function(a8,a9){if(a8===1)return P.bk(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.de(null,0)
q.a=J.dY(a7,0)
for(p=0,o="";p<6;++p)o+=H.hD(q.a8(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.a8(8)
l=9+m*6
o=8*m
k=q.a8(o)
j=q.a8(o)
i=q.a8(o)
h=q.a8(o)
g=q.a8(o)
f=q.a8(o)
o=P.D
e=P.B
d=P.cF(o,e)
c=new O.cV(k,j,null,null,null,null,null,null,d,P.cF(e,o))
c.x=new Uint8Array(H.cz(k*j))
b=q.a8(8)
for(o=[o],p=0;p<b;++p){a=q.a8(8)
a0=q.a8(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a8(8)
if(a2>=e){r=H.u(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oN(a1,0,null))}a4=q.a8(8)
a5=$.$get$wF().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.hY(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hI()
r=c
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdq:function(){return[O.cV]},
$asc5:function(){return[O.cV,P.bg]}}
R.oQ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.as,$.N,$.L,$.bu,$.Z,$.aL],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b6,$.N,$.aL],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bo],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.b1,$.aw,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cn,$.j)
t.i(0,$.aO,$.j)
t.i(0,$.df,$.m)
t.i(0,$.f2,$.m)
t.i(0,$.t0,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.im,$.m)
t.i(0,$.t6,$.m)
r=$.n
q="The "+r+" decides to take a break after defeating "+$.y+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.J+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.uf(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.n
t.i(0,new R.a5("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.y+". They are yelling and "+$.J+" at each other over the slightest of insults. The "
p=$.n
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.y+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.n
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bA("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="The defeat of the "+$.y+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.n
t.i(0,new R.a5("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aI+". Huh. Okay then.")],H.a([],o),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.oS.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Lightning",H.a([$.aP,$.bb,$.R],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice",H.a([$.bp,$.vX,$.mr],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Taserface",H.a([$.aH,$.aP],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Taser",H.a([$.aP,$.R,$.aH],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.e1,$.K)
t.i(0,$.bZ,$.j)
t.i(0,$.io,$.m)
t.i(0,$.d1,$.m)
r=$.n
q="The "+r+" is walking around on their land, when a "
p=$.t
q=q+p+" walks up to them, and tells them about "
o=$.y
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.J+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.Q("Rebel Against Your Land",!1,[new U.c(q),new U.c(p),new U.c(n),new U.X(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.c]),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
this.f.i(0,new X.F(s,t,null),$.an)}}
D.oU.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Robot",H.a([$.a7,$.E,$.ar,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a7,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a7,$.L],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a7,$.L,$.aC,$.as],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.az,$.a7,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vS,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tC,$.E,$.ab],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a7,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.iu,$.m)
q.i(0,$.eZ,$.j)
q.i(0,$.f0,$.j)
q.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aI
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.y+" destroyed it. "
o="The "+p+" searches for the "
l=$.ad
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.F7
p=[U.c]
q.i(0,new R.a_("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.x(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=$.n
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.J
q.i(0,new R.a_("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.y+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ad+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fk(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.f0,$.j)
s.i(0,$.ek,$.K)
s.i(0,$.f_,$.m)
s.i(0,$.cT,$.j)
s.i(0,$.cc,$.K)
o=$.n
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.a_("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.n
l="The "+o+" finds two groups of "
n=$.t
l=l+n+"s screaming and "
k=$.J
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ad
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a_("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.e7(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.an)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.K)
t.i(0,$.eZ,$.j)
t.i(0,$.f0,$.j)
t.i(0,$.cc,$.K)
r=$.n
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aI
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.y
t.i(0,new R.a_("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
V.oW.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Lighter",H.a([$.E,$.aq],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.L,$.bp],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.L,$.bp,$.c0],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.E,$.aC,$.c0,$.bb,$.br],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.L,$.vY],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.E,$.bf,$.bb],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.E,$.bf,$.bb],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.O,$.f9,$.bb],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bO,$.bf],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.E,$.tw,$.aN,$.bb],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.E,$.tz,$.aN,$.bb],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.E,$.ts,$.aN,$.bb],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.ms,$.at,$.E,$.bs,$.bb],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.L,$.bu,$.as],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c7,$.E,$.aP,$.bu],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.W,$.aq],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.dL,$.j)
q.i(0,$.e3,$.j)
q.i(0,$.f1,$.j)
q.i(0,$.lM,$.j)
q.i(0,$.dM,$.m)
p=$.n
o=[U.c]
q.i(0,new R.a_("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.m)
s.i(0,$.dL,$.j)
s.i(0,$.cy,$.j)
s.i(0,$.dM,$.m)
n=$.n
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.a_("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ad+" underling. Tremble at the fearsome "+$.aI+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.j)
q.i(0,$.bd,$.K)
q.i(0,$.dN,$.j)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.K)
q.i(0,$.d1,$.K)
n=$.n
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.a_("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.j)
t.i(0,$.d1,$.K)
t.i(0,$.ej,$.j)
t.i(0,$.it,$.j)
t.i(0,$.cc,$.m)
t.i(0,$.em,$.m)
s=$.n
r="The "+s+" finds a crowd of "
n=$.J
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aI+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a_("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.aB)}}
X.F.prototype={
C:function(a){return"Theme: "+H.C(this.a)}}
U.p2.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Lockpick",H.a([$.E,$.N,$.aj,$.aM,$.Z],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.O,$.N,$.aj],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.E,$.N,$.aM,$.at,$.tl],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.c3,$.j)
t.i(0,$.du,$.m)
t.i(0,$.bZ,$.m)
t.i(0,$.cT,$.m)
r="The "+$.y+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.n
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.y+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.J+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a5("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.t
p="A weeping "+r+" approaches the "
n=$.n
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.y
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aI+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.J+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a5("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.y
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.ad
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.n
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.J
l=n+l+"worth, the disaffected Heir to the "+$.aI+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.p3.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Grandfather Clock",H.a([$.W,$.ai,$.bf,$.R],s),null,!1,"Ticking Tower of Time")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.w1,$.R,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aG,$.bi,$.R,$.b9,$.b7,$.aC],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.E,$.R,$.a9,$.ai],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.E,$.R,$.a9,$.Z,$.am],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.E,$.R,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.vv,$.ah)
q.i(0,$.cc,$.m)
q.i(0,$.cT,$.m)
q.i(0,$.f_,$.j)
p=$.y
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.n
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.c]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.ew(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.n
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ad
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.y
q.i(0,new R.Q("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.X("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.an)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.h5,$.j)
s.i(0,$.e3,$.K)
s.i(0,$.cc,$.j)
p=$.n
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.y
s.i(0,new R.Q("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.X(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.an)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.aO,$.m)
t.i(0,$.cn,$.j)
t.i(0,$.df,$.j)
r=$.y
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ad
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.n
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.Q("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.X(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hE(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.y
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ad
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.n
t.i(0,new R.Q("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.X("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ew(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.y+", "
k=$.n
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aI
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ew(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.n
t.i(0,new R.Q("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.J+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.X("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.y+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.an)}}
G.a0.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gag(t)
return"NULL TRAIT"},
ge9:function(){return this.a},
gdT:function(){return this.b},
gbu:function(){return this.c}}
G.aJ.prototype={}
G.af.prototype={}
G.bH.prototype={}
G.d.prototype={
ghF:function(){return this.e.length},
gbu:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q].c
return r},
av:function(a,b){return C.a.b0(b.ghF()-this.e.length)},
ej:function(a){return C.b.h8(this.e,a.gfV(a))},
$isbv:1,
$asbv:function(){return[G.d]},
gK:function(a){return this.d},
geF:function(){return this.e}}
G.my.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
Q.pq.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Cardboard Box",H.a([$.L,$.R,$.aj],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.E,$.R,$.aj],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bs,$.R,$.aj,$.ms],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b9,$.R,$.aj,$.b7,$.bQ],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.az,$.R,$.aj,$.ai],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.R,$.Z,$.tp,$.aj,$.b6],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dw,$.j)
q.i(0,$.lL,$.j)
q.i(0,$.h7,$.j)
q.i(0,$.ir,$.j)
p=$.y
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.n
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.c]
q.i(0,new R.a5("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.n
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.y
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.Q("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.X(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i=this.f
i.i(0,new X.F(s,q,null),$.an)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dw,$.m)
s.i(0,$.lL,$.m)
s.i(0,$.h7,$.m)
s.i(0,$.c3,$.j)
p=$.n
o="Even with the victory of the "+p+" over the villainous "
n=$.y
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ad
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fk(),!1,!1,new Y.c_("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.n
s.i(0,new R.Q("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.J+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.X("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.y+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(q,s,null),$.an)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dw,$.j)
t.i(0,$.lL,$.j)
t.i(0,$.h7,$.j)
r=$.n
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.y+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.Q("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.X(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(s,t,null),$.an)}}
E.pr.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Yardstick",H.a([$.dg,$.N,$.jj,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.as,$.N,$.hi,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.O,$.N,$.e5,$.mt,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tA,$.N,$.mo],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cD,$.j)
t.i(0,$.d3,$.j)
t.i(0,$.dt,$.j)
t.i(0,$.df,$.j)
t.i(0,$.ei,$.j)
t.i(0,$.e1,$.j)
t.i(0,$.h7,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.a_("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uf(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wA(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
q=$.n
t.i(0,new R.a_("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.x(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.z)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.t+" tells the "
r=$.n
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wB(),!1,!1,new Y.c_("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.y
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.an)}}
M.pv.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Cauldron",H.a([$.w0,$.N,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jg,$.dg,$.N,$.W,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.tt,$.N,$.a2,$.aj,$.Z],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.bY,$.m)
t.i(0,$.h9,$.m)
t.i(0,$.d2,$.m)
t.i(0,$.cT,$.m)
t.i(0,$.cx,$.m)
t.i(0,$.t3,$.m)
r=$.y
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.n
n=[U.c]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o="Even with the defeat of the "+$.y+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aI
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.n
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a5("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.z)
q="A Mysterious "+$.t+" approaches the "
p=$.n
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aI
q=q+r+" was discovered amongst the "+$.y+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a5("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.t
p="A young "+r+" approaches the "
m=$.n
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aI
t.i(0,new R.a5("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ad+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.J+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.x(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.pw.prototype={
P:function(a5,a6){var t=0,s=P.bh(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bn(function(a7,a8){if(a7===1)return P.bk(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.dZ(a6,$.$get$x1())
if(0>=p.length){r=H.u(p,0)
t=1
break}if(J.y9(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.u(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.C(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.cF(o,B.jV)
q.a=null
l=P.cF(o,o)
for(k=P.U,j=B.dB,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cJ()
""+i
H.C(g)
f.toString
f=J.dZ(g,$.$get$x_())
if(0>=f.length){r=H.u(f,0)
t=1
break $async$outer}g=f[0]
f=J.bc(g)
if(f.gX(g)===!0){$.$get$cJ().toString
continue}if(f.ae(g,$.$get$x0())){$.$get$cJ().toString
continue}if(C.c.ae(g,"@")){e=C.c.W(g,1)
$.$get$cJ().toString
n.push(e)}else if(C.c.ae(g,"?")){f=C.c.W(g,1)
f=$.$get$hK().aV(0,f)
f=H.dx(f,B.kk(),H.aE(f,"o",0),null)
d=P.dh(f,!0,H.aE(f,"o",0))
if(d.length<2)$.$get$cJ().b8(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cJ()
H.C(c)
H.C(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$x2()
a=f.cb(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.u(f,1)
t=1
break $async$outer}a0=J.cl(f[1])
a1=C.c.W(g,a0)
if(a1.length===0)continue
f=J.av(a0)
if(f.S(a0,0)){a1=C.c.ek(a1)
$.$get$cJ().toString
f=P.cF(o,o)
a2=new B.jV(P.cF(o,k),f,a1,!1,null,null)
a2.d5(null,null,j)
q.a=a2
f.bL(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.x3))if(C.c.ae(a1,"?")){a1=C.c.W(a1,1)
f=$.$get$hK().aV(0,a1)
f=H.dx(f,B.kk(),H.aE(f,"o",0),null)
d=P.dh(f,!0,H.aE(f,"o",0))
f=$.$get$cJ()
f.toString
if(d.length<2)f.b8(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.ko(d[0],$.$get$fq(),"")
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}b=J.ko(d[1],$.$get$fq(),"")
f=$.$get$cJ()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.ae(a1,"@")){e=C.c.W(a1,1)
$.$get$cJ().toString
f=$.$get$hK().aV(0,a1)
f=H.dx(f,B.kk(),H.aE(f,"o",0),null)
d=P.dh(f,!0,H.aE(f,"o",0))
a4=d.length>1?H.wx(d[1],new U.px(q,d)):1
q.a.c.i(0,C.c.cP(e,$.$get$fq(),""),a4)}else{$.$get$cJ().toString
f=$.$get$hK().aV(0,g)
f=H.dx(f,B.kk(),H.aE(f,"o",0),null)
d=P.dh(f,!0,H.aE(f,"o",0))
a4=d.length>1?H.wx(d[1],new U.py(q,d)):1
if(0>=d.length){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bg(J.ko(d[0],$.$get$fq(),""))
h=new B.dB(null)
a3=P.cF(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.v1(a4)),[H.aE(f,"cS",0)]))}else if(f.S(a0,$.x3*2)){$.$get$cJ().toString
f=$.$get$hK().aV(0,g)
f=H.dx(f,B.kk(),H.aE(f,"o",0),null)
d=P.dh(f,!0,H.aE(f,"o",0))
f=d.length
if(f!==2)$.$get$cJ().b8(C.h,"Invalid variant for "+H.C(h.cU(0))+" in "+q.a.e)
else{if(0>=f){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bg(J.ko(d[0],$.$get$fq(),""))
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}a3=C.c.cP(U.Ga(d[1]),$.$get$fq(),"")
h.a.i(0,f,a3)}}}}}r=new B.hQ(n,m)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseE:function(){return[B.hQ]},
$asc5:function(){return[B.hQ,P.B]}}
U.px.prototype={
$1:function(a){var t,s,r
t=$.$get$cJ()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid include weight '"+H.C(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.b8(C.m,r+H.C(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.py.prototype={
$1:function(a){var t,s,r
t=$.$get$cJ()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid weight '"+H.C(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.b8(C.m,r+H.C(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.cb.prototype={
bA:function(){var t=0,s=P.bh(),r=this,q
var $async$bA=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:q="WranglerNewsposts/"+r.c+".txt"
t=2
return P.ck(W.te(C.c.an("../",N.nG())+q,null,null).aR(new F.pA(r)),$async$bA)
case 2:return P.bl(null,s)}})
return P.bm($async$bA,s)},
cO:function(a){var t=0,s=P.bh(),r=this,q,p,o,n
var $async$cO=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:q=document.createElement("div")
q.classList.add("Headshot")
p=W.mg(null,r.a,null)
p.classList.add("MemoNewspostIcon")
o=W.v2(null)
n=r.c
o.textContent=n
o.href="bio.html?staff="+n
o.target="_blank"
o.appendChild(p)
q.appendChild(o)
a.appendChild(q)
return P.bl(null,s)}})
return P.bm($async$cO,s)}}
F.pA.prototype={
$1:function(a){var t,s,r,q,p
t=J.dZ(a,"\n")
for(s=t.length,r=this.a,q=r.d,p=0;p<t.length;t.length===s||(0,H.bT)(t),++p)q.push(K.EW(t[p],r))},
$S:function(){return{func:1,args:[P.B]}}}
F.pB.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.a0]
r=A.i("Make a World Book",H.a([$.L,$.ai,$.as],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b4,$.O,$.mv],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.as,$.L,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.as,$.L,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.as,$.L],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.E,$.Y,$.mv,$.ai],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.as,$.L,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.as,$.L],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dw,$.j)
q.i(0,$.cC,$.j)
q.i(0,$.bd,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.h6,$.m)
p=$.n
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.a_("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.x(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.cy,$.m)
s.i(0,$.bd,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.n
s.i(0,new R.a_("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.J+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dL,$.j)
t.i(0,$.cy,$.j)
t.i(0,$.dM,$.m)
t.i(0,$.dt,$.j)
r=$.n
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.a_("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
B.pG.prototype={
aO:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bh(),r,q,p
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=$.$get$x4()
p=J.uT(b)
q.toString
r=q.h0(T.tf(p,0,null,0),!1)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdq:function(){return[T.fF]},
$asc5:function(){return[T.fF,P.bg]}}
A.fN.prototype={}
B.dr.prototype={
cr:function(a){if(a)this.b=(this.b|C.a.ar(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hD(this.b)
this.b=0}},
ai:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ar(1,t)
if(typeof a!=="number")return a.aH()
this.cr((a&s)>>>0>0)}},
fN:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aq(1,t-s)
if(typeof a!=="number")return a.aH()
this.cr((a&r)>>>0>0)}},
bM:function(a){var t,s
a=J.dX(a,1)
t=C.d.bh(Math.log(H.ke(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cr(!1)
this.fN(a,t+1)},
b1:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a8(r)
q+=r
p=r}else p=0
r=H.cz(q)
o=new Uint8Array(r)
if(t){n=H.cO(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.u(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a6(k,m)
if(s<0||s>=r)return H.u(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.u(o,t)
o[t]=s}return o.buffer}}
B.de.prototype={
cj:function(a){var t,s,r,q
t=C.f.am(a/8)
s=C.a.bz(a,8)
r=this.a.getUint8(t)
q=C.a.aq(1,s)
if(typeof r!=="number")return r.aH()
return(r&q)>>>0>0},
a8:function(a){var t,s,r
if(a>32)throw H.l(P.e_(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cj(this.b);++this.b
if(r)t=(t|C.a.ar(1,s))>>>0}return t},
hH:function(a){var t,s,r,q
if(a>32)throw H.l(P.e_(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cj(this.b);++this.b
if(q)s=(s|C.a.aq(1,t-r))>>>0}return s},
bW:function(){var t,s,r
for(t=0;!0;){s=this.cj(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hH(t+1)-1}}
A.dJ.prototype={
C:function(a){return"rgb("+H.C(this.b)+", "+H.C(this.c)+", "+H.C(this.d)+", "+H.C(this.a)+")"},
ei:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aq()
s=this.c
if(typeof s!=="number")return s.aq()
r=this.d
if(typeof r!=="number")return r.aq()
q=this.a
if(typeof q!=="number")return H.a8(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aq()
s=this.c
if(typeof s!=="number")return s.aq()
r=this.d
if(typeof r!=="number")return H.a8(r)
return(t<<16|s<<8|r)>>>0},
hT:function(a,b){var t=C.a.bf(this.ei(!1),16)
return"#"+C.c.cF(t,6,"0").toUpperCase()},
hS:function(){return this.hT(!1,!1)},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dJ){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.c
s=b.c
if(t==null?s==null:t===s){t=this.d
s=b.d
if(t==null?s==null:t===s){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t}return!1},
ga7:function(a){return this.ei(!0)},
U:function(a,b){var t,s,r,q,p,o,n,m
t=J.av(b)
if(!!t.$isdJ){t=this.b
s=b.b
if(typeof t!=="number")return t.U()
if(typeof s!=="number")return H.a8(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.U()
if(typeof q!=="number")return H.a8(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.U()
if(typeof o!=="number")return H.a8(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.U()
if(typeof m!=="number")return H.a8(m)
return A.ee(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ax()
s=this.c
if(typeof s!=="number")return s.ax()
r=this.d
if(typeof r!=="number")return r.ax()
q=this.a
if(typeof q!=="number")return q.ax()
return A.rO(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.U()
s=this.c
if(typeof s!=="number")return s.U()
r=this.d
if(typeof r!=="number")return r.U()
return A.ee(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.C(t.gab(b))+" "+H.C(b)+"] to a Colour. Only Colour, double and int are valid.")},
V:function(a,b){var t,s,r,q,p
t=J.av(b)
if(!!t.$isdJ){s=this.b
r=b.gij()
if(typeof s!=="number")return s.V()
r=C.d.V(s,r)
s=this.c
q=b.gi0()
if(typeof s!=="number")return s.V()
q=C.d.V(s,q)
s=this.d
p=b.gi5()
if(typeof s!=="number")return s.V()
p=C.d.V(s,p)
s=this.a
t=t.gi4(b)
if(typeof s!=="number")return s.V()
return A.ee(r,q,p,C.d.V(s,t))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ax()
s=this.c
if(typeof s!=="number")return s.ax()
r=this.d
if(typeof r!=="number")return r.ax()
q=this.a
if(typeof q!=="number")return q.ax()
return A.rO(t/255-b,s/255-b,r/255-b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.V()
s=this.c
if(typeof s!=="number")return s.V()
r=this.d
if(typeof r!=="number")return r.V()
return A.ee(t-b,s-b,r-b,this.a)}throw H.l("Cannot subtract ["+H.C(t.gab(b))+" "+H.C(b)+"] from a Colour. Only Colour, double and int are valid.")},
an:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.ax()
s=this.c
if(typeof s!=="number")return s.ax()
r=this.d
if(typeof r!=="number")return r.ax()
q=this.a
if(typeof q!=="number")return q.ax()
return A.rO(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.C(b))},
i:function(a,b,c){var t,s
t=J.da(b)
if(t.a5(b,0)||t.aC(b,3))throw H.l("Colour index out of range: "+H.C(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(c,0,255)
else if(t.S(b,0)){this.b=C.a.ac(J.kn(J.uS(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ac(J.kn(J.uS(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kg(c)
if(t.S(b,2)){this.d=C.a.ac(J.kn(s.an(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(J.kn(s.an(c,255)),0,255)}},
eL:function(a,b,c,d){this.b=C.d.ac(C.d.ac(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ac(C.d.ac(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ac(C.d.ac(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ac(J.xP(d,0,255),0,255)}}
A.rc.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.mZ.prototype={
$1:function(a){return this.a.ec(a)},
$S:function(){return{func:1,args:[,]}}}
A.mX.prototype={
$1:function(a){this.a.P(0,a).aR(this.b.ghE())},
$S:function(){return{func:1,args:[,]}}}
A.mY.prototype={
$1:function(a){this.a.fU(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.n_.prototype={
$1:function(a){return this.a.aA(0,this.b)},
$S:function(){return{func:1,args:[W.S]}}}
F.hq.prototype={
C:function(a){return this.b}}
F.hr.prototype={
b8:function(a,b){F.EV(a).$1("("+this.c+")["+H.C(C.b.gb7(a.b.split(".")))+"]: "+H.C(b))},
cw:function(a,b){this.b8(C.h,b)},
gK:function(a){return this.c}}
F.tP.prototype={}
O.ry.prototype={
$1:function(a){return H.C(a.b9(1))+" = "+H.C(a.b9(2))+C.c.an("../",this.a)},
$S:function(){return{func:1,args:[P.dy]}}}
O.rz.prototype={
$0:function(){var t=document
J.uY(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.o,null)
t=H.kj(t.querySelector("#voidButton"),"$isfP")
t.toString
W.eM(t,"click",new O.rx(),!1,W.HH)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.Ht("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rx.prototype={
$1:function(a){return O.Hy()},
$S:function(){return{func:1,args:[W.S]}}}
R.ha.prototype={}
R.u6.prototype={}
R.u5.prototype={}
A.nB.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a0(0,b)?t.n(0,b):$.$get$u4()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a0(0,b)?t.n(0,b):$.$get$u4()}throw H.l(P.e_(b,"'name' should be a String name or int id only",null))},
ga_:function(a){var t=this.a
t=t.gc_(t)
return new H.jq(null,J.dc(t.a),t.b,[H.P(t,0),H.P(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.a0(0,b))this.ak(0,b)
s=this.fu()
if(typeof s!=="number")return s.at()
if(s>=256)throw H.l(P.e_(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
ak:function(a,b){var t,s,r
t=this.a
if(!t.a0(0,b))return
s=this.c
r=s.n(0,b)
t.ak(0,b)
this.b.ak(0,r)
s.ak(0,b)
this.d.ak(0,r)},
fu:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a0(0,s))return s;++s}}}
A.jy.prototype={
$aso:function(){return[A.dJ]},
$iso:1}
Q.jA.prototype={}
A.jF.prototype={
bt:function(a){if(a===0)return 0
return this.fv(a)},
hw:function(){return this.bt(4294967295)},
fv:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cE()
this.b=C.d.b0(s*4294967295)
return C.d.am(s*a)}else{s=t.bt(a)
this.b=s
return s}},
cX:function(a){var t=a==null
this.a=t?C.K:P.Gn(a)
if(!t)this.b=J.dX(a,1)},
hC:function(a,b){var t=a.length
if(t===0)return
t=this.bt(t)
if(t<0||t>=a.length)return H.u(a,t)
return a[t]},
hB:function(a){return this.hC(a,!0)}}
Y.dO.prototype={
cp:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.ao,null,t)
this.c.push(new P.dV(s,t))
return s},
ec:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r)t[r].aA(0,this.b)
C.b.sm(t,0)}}
V.ln.prototype={
$4:function(a,b,c,d){return V.ze(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bg,P.bg,O.cV]}}}
V.lm.prototype={
$4:function(a,b,c,d){return V.zd(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.D,P.D,O.cV]}}}
V.ll.prototype={
$4:function(a,b,c,d){return V.za(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bg,P.bg,O.cV]}}}
V.lk.prototype={
$4:function(a,b,c,d){return V.z9(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.D,P.D,O.cV]}}}
O.cV.prototype={
hI:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.u(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
hY:function(a,b,c,d){var t,s,r,q,p
t=J.bI(d)
s=0
while(!0){r=t.ge6(d)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
q=(C.a.bh(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.u(r,q)
r[q]=p;++s}}}
D.oq.prototype={
$1:function(a){return a.ghD()},
$S:function(){return{func:1,args:[D.cH]}}}
D.cH.prototype={
C:function(a){return this.a},
gK:function(a){return this.a},
ghD:function(){return this.d}}
D.jW.prototype={}
D.nX.prototype={}
B.dB.prototype={
ep:function(a,b){if(this.a.a0(0,"MAIN"))return this.a.n(0,"MAIN")
return},
cU:function(a){return this.ep(a,null)},
C:function(a){return"[Word: "+H.C(this.cU(0))+"]"}}
B.jV.prototype={
C:function(a){return"WordList '"+this.e+"': "+this.eI(0)},
$isp:1,
$asp:function(){return[B.dB]},
$asdU:function(){return[B.dB]},
$ashO:function(){return[B.dB]},
$ascS:function(){return[B.dB]},
$aso:function(){return[B.dB]},
$asr:function(){return[B.dB]},
gK:function(a){return this.e}}
B.hQ.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"}}
S.fj.prototype={}
S.uw.prototype={}
S.ux.prototype={}
S.uy.prototype={}
S.rX.prototype={}
S.t_.prototype={}
S.rN.prototype={}
S.ug.prototype={}
S.uA.prototype={}
S.uB.prototype={}
S.kN.prototype={}
S.u7.prototype={}
S.u3.prototype={}
S.mQ.prototype={}
S.rS.prototype={}
S.rI.prototype={}
S.l4.prototype={}
S.tQ.prototype={}
S.l5.prototype={}
S.nD.prototype={}
S.un.prototype={}
S.uk.prototype={}
S.uo.prototype={}
S.rH.prototype={}
S.m1.prototype={}
S.kL.prototype={}
S.rM.prototype={}
S.rL.prototype={}
S.u8.prototype={}
S.up.prototype={}
S.u9.prototype={}
S.rZ.prototype={}
S.rY.prototype={}
S.um.prototype={}
S.ul.prototype={}
S.p1.prototype={}
S.ur.prototype={}
S.rP.prototype={}
S.rQ.prototype={}
S.uz.prototype={}
S.ht.prototype={}
S.tW.prototype={}
S.tX.prototype={}
S.tY.prototype={}
S.tZ.prototype={}
S.uh.prototype={}
S.ui.prototype={}
S.uj.prototype={}
S.tV.prototype={}
S.u0.prototype={}
S.u1.prototype={}
S.tb.prototype={}
S.tc.prototype={}
S.td.prototype={}
S.u2.prototype={}
S.u_.prototype={}
S.rJ.prototype={}
S.ut.prototype={}
S.uu.prototype={}
S.us.prototype={}
Z.tK.prototype={}
Z.tG.prototype={}
Z.tH.prototype={}
Q.cS.prototype={
k:function(a,b){return b},
C:function(a){return J.cK(this.gbV())},
aw:function(a,b){return Q.uD(this,b,H.aE(this,"cS",0),null)},
a4:function(a,b){return Q.uC(this,!1,!0,null,H.aE(this,"cS",0))},
ap:function(a){return this.a4(a,!0)},
$iso:1,
$aso:null}
Q.dU.prototype={
gbV:function(){return this.b},
bK:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.v1(c)),[H.aE(this,"cS",0)]))},
h:function(a,b){return this.bK(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return J.uW(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t[b]=new Q.h(c,s,[H.aE(this,"cS",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jk(this.b,"[","]")},
aw:function(a,b){return Q.uD(this,b,H.aE(this,"dU",0),null)},
a4:function(a,b){return Q.uC(this,!1,!0,null,H.aE(this,"dU",0))},
ap:function(a){return this.a4(a,!0)},
d5:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hO.prototype={$ascS:null,$aso:null,$asp:null,$asr:null,$isp:1,$isr:1,$iso:1}
Q.h.prototype={
C:function(a){return"("+H.C(this.a)+" @ "+H.C(this.b)+")"},
gZ:function(a){return this.a},
gcS:function(a){return this.b}}
Q.eK.prototype={
gbV:function(){return this.b},
ga_:function(a){var t=new Q.pt(null,[H.aE(this,"eK",0)])
t.a=J.dc(this.b)
return t},
gm:function(a){return J.cl(this.b)},
C:function(a){return J.cK(this.b)},
aw:function(a,b){return Q.uD(this,b,H.aE(this,"eK",0),null)},
a4:function(a,b){return Q.uC(this,!1,!0,null,H.aE(this,"eK",0))},
ap:function(a){return this.a4(a,!0)}}
Q.hN.prototype={$ascS:null,$aso:null,$iso:1}
Q.pt.prototype={
gR:function(){return J.uW(this.a.gR())},
I:function(){return this.a.I()}}
Q.jS.prototype={
$aseK:function(a,b){return[b]},
$ashN:function(a,b){return[b]},
$ascS:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pu.prototype={
$1:function(a){var t=J.bI(a)
return new Q.h(this.c.$1(t.gZ(a)),t.gcS(a),[this.b])},
$S:function(){return H.eP(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jS")}}
J.f.prototype.eG=J.f.prototype.C
J.hl.prototype.eH=J.hl.prototype.C
P.dl.prototype.eJ=P.dl.prototype.bC
P.dl.prototype.eK=P.dl.prototype.bB
P.b3.prototype.d3=P.b3.prototype.a9
Q.dU.prototype.eI=Q.dU.prototype.C;(function installTearOffs(){installTearOff(H.fv.prototype,"ghr",0,0,0,null,["$0"],["bT"],1)
installTearOff(H.dD.prototype,"ges",0,0,0,null,["$1"],["ay"],11)
installTearOff(H.eL.prototype,"gh3",0,0,0,null,["$1"],["aW"],11)
installTearOff(H,"xj",1,0,0,null,["$1"],["GP"],8)
installTearOff(P,"GS",1,0,0,null,["$1"],["Ge"],6)
installTearOff(P,"GT",1,0,0,null,["$1"],["Gf"],6)
installTearOff(P,"GU",1,0,0,null,["$1"],["Gg"],6)
installTearOff(P,"xv",1,0,0,null,["$0"],["GO"],1)
installTearOff(P.k_.prototype,"gdR",0,0,0,null,["$2","$1"],["ct","bl"],12)
installTearOff(P.bj.prototype,"gba",0,0,0,null,["$2","$1"],["ao","f5"],12)
var t
installTearOff(t=P.dl.prototype,"gdz",0,0,0,null,["$0"],["bF"],1)
installTearOff(t,"gdA",0,0,0,null,["$0"],["bG"],1)
installTearOff(t=P.hU.prototype,"gdz",0,0,0,null,["$0"],["bF"],1)
installTearOff(t,"gdA",0,0,0,null,["$0"],["bG"],1)
installTearOff(t,"gfh",0,0,0,null,["$1"],["fi"],function(){return H.eP(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hU")})
installTearOff(t,"gfl",0,0,0,null,["$2"],["fm"],14)
installTearOff(t,"gfj",0,0,0,null,["$0"],["fk"],1)
installTearOff(P.k5.prototype,"gfV",0,1,0,null,["$1"],["aj"],29)
installTearOff(P,"H1",1,0,0,null,["$2"],["yU"],30)
installTearOff(P,"H2",1,0,0,null,["$1"],["fC"],4)
installTearOff(t=W.i7.prototype,"gas",0,1,0,null,["$1"],["cw"],4)
installTearOff(t,"ghm",0,0,0,null,["$1"],["e3"],4)
installTearOff(t,"ghV",0,0,0,null,["$1"],["hW"],4)
installTearOff(W.ef.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ia.prototype,"gZ",0,1,0,null,["$1"],["J"],32)
installTearOff(W.ig.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ih.prototype,"gZ",0,1,0,null,["$1"],["J"],8)
installTearOff(W.ii.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.f4.prototype,"gZ",0,1,0,null,["$1"],["J"],13)
installTearOff(W.iy.prototype,"gZ",0,1,0,null,["$1"],["J"],9)
installTearOff(W.f6.prototype,"gZ",0,1,0,null,["$1"],["J"],7)
installTearOff(W.iA.prototype,"gZ",0,1,0,null,["$1"],["J"],7)
installTearOff(W.jr.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.js.prototype,"gZ",0,1,0,null,["$1"],["J"],10)
installTearOff(W.cf.prototype,"gZ",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jC.prototype,"gZ",0,1,0,null,["$1"],["J"],15)
installTearOff(W.jI.prototype,"gZ",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jK.prototype,"gZ",0,1,0,null,["$1"],["J"],16)
installTearOff(W.jL.prototype,"gZ",0,1,0,null,["$1"],["J"],17)
installTearOff(W.ch.prototype,"gZ",0,1,0,null,["$1"],["J"],18)
installTearOff(W.jP.prototype,"gZ",0,1,0,null,["$1"],["J"],19)
installTearOff(W.jQ.prototype,"gZ",0,1,0,null,["$1"],["J"],20)
installTearOff(W.jR.prototype,"gZ",0,1,0,null,["$1"],["J"],21)
installTearOff(W.hR.prototype,"gZ",0,1,0,null,["$1"],["J"],22)
installTearOff(W.k0.prototype,"gZ",0,1,0,null,["$1"],["J"],33)
installTearOff(W.k4.prototype,"gZ",0,1,0,null,["$1"],["J"],24)
installTearOff(W.hY.prototype,"gZ",0,1,0,null,["$1"],["J"],25)
installTearOff(W.k7.prototype,"gZ",0,1,0,null,["$1"],["J"],26)
installTearOff(W.k9.prototype,"gZ",0,1,0,null,["$1"],["J"],27)
installTearOff(P.jM.prototype,"gZ",0,1,0,null,["$1"],["J"],28)
installTearOff(T,"wp",1,0,0,null,["$0"],["Hj"],1)
installTearOff(R,"ex",1,0,0,null,["$1"],["Fx"],0)
installTearOff(R,"wA",1,0,0,null,["$1"],["Fl"],0)
installTearOff(R,"uf",1,0,0,null,["$1"],["Fw"],0)
installTearOff(R,"bR",1,0,0,null,["$1"],["Fv"],0)
installTearOff(R,"ue",1,0,0,null,["$1"],["Fu"],0)
installTearOff(R,"wC",1,0,0,null,["$1"],["Fs"],0)
installTearOff(R,"hE",1,0,0,null,["$1"],["Fr"],0)
installTearOff(R,"ew",1,0,0,null,["$1"],["Fo"],0)
installTearOff(R,"e7",1,0,0,null,["$1"],["Fq"],0)
installTearOff(R,"fk",1,0,0,null,["$1"],["Ft"],0)
installTearOff(R,"ud",1,0,0,null,["$1"],["Fp"],0)
installTearOff(R,"x",1,0,0,null,["$1"],["Fm"],0)
installTearOff(R,"wB",1,0,0,null,["$1"],["Fn"],0)
installTearOff(F.hr.prototype,"gas",0,1,0,null,["$1"],["cw"],4)
installTearOff(O,"Hl",1,0,0,null,["$1"],["Hn"],31)
installTearOff(Y.dO.prototype,"ghE",0,0,0,null,["$1"],["ec"],function(){return H.eP(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dO")})
installTearOff(V,"Hr",1,0,0,null,["$4"],["zc"],3)
installTearOff(V,"Hq",1,0,0,null,["$4"],["zb"],2)
installTearOff(B,"kk",1,0,0,null,["$1"],["GJ"],23)
installTearOff(T,"GY",1,0,0,null,["$4"],["z2"],3)
installTearOff(T,"GX",1,0,0,null,["$4"],["z1"],2)
installTearOff(T,"GW",1,0,0,null,["$4"],["z0"],3)
installTearOff(T,"GV",1,0,0,null,["$4"],["z_"],2)
installTearOff(F,"H9",1,0,0,null,["$4"],["z8"],3)
installTearOff(F,"H8",1,0,0,null,["$4"],["z7"],2)
installTearOff(F,"H7",1,0,0,null,["$4"],["z6"],3)
installTearOff(F,"H6",1,0,0,null,["$4"],["z5"],2)
installTearOff(F,"H5",1,0,0,null,["$4"],["z4"],3)
installTearOff(F,"H4",1,0,0,null,["$4"],["z3"],2)})();(function inheritance(){inherit(P.ac,null)
var t=P.ac
inherit(H.tM,t)
inherit(J.f,t)
inherit(J.i4,t)
inherit(P.hC,t)
inherit(P.o,t)
inherit(H.es,t)
inherit(P.jm,t)
inherit(H.iw,t)
inherit(H.pd,t)
inherit(H.eV,t)
inherit(H.qu,t)
inherit(H.fv,t)
inherit(H.q0,t)
inherit(H.eN,t)
inherit(H.qt,t)
inherit(H.pO,t)
inherit(H.fl,t)
inherit(H.p5,t)
inherit(H.dH,t)
inherit(H.dD,t)
inherit(H.eL,t)
inherit(H.kU,t)
inherit(H.nW,t)
inherit(H.pa,t)
inherit(P.eh,t)
inherit(H.h2,t)
inherit(H.k8,t)
inherit(H.dT,t)
inherit(H.v,t)
inherit(H.mR,t)
inherit(H.mT,t)
inherit(H.hk,t)
inherit(H.hX,t)
inherit(H.jY,t)
inherit(H.jO,t)
inherit(H.qN,t)
inherit(P.cE,t)
inherit(P.eW,t)
inherit(P.k_,t)
inherit(P.k3,t)
inherit(P.bj,t)
inherit(P.jZ,t)
inherit(P.dk,t)
inherit(P.os,t)
inherit(P.dl,t)
inherit(P.k1,t)
inherit(P.pW,t)
inherit(P.qx,t)
inherit(P.qL,t)
inherit(P.eR,t)
inherit(P.r_,t)
inherit(P.qk,t)
inherit(P.qm,t)
inherit(P.od,t)
inherit(P.qr,t)
inherit(P.dC,t)
inherit(P.fc,t)
inherit(P.b3,t)
inherit(P.qS,t)
inherit(P.n7,t)
inherit(P.qs,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.qU,t)
inherit(P.d9,t)
inherit(P.bv,t)
inherit(P.dK,t)
inherit(P.dp,t)
inherit(P.d0,t)
inherit(P.nx,t)
inherit(P.jN,t)
inherit(P.q5,t)
inherit(P.bD,t)
inherit(P.lq,t)
inherit(P.p,t)
inherit(P.bq,t)
inherit(P.d5,t)
inherit(P.dy,t)
inherit(P.dQ,t)
inherit(P.B,t)
inherit(P.c9,t)
inherit(P.eI,t)
inherit(P.kb,t)
inherit(P.pe,t)
inherit(P.qJ,t)
inherit(W.i7,t)
inherit(W.jx,t)
inherit(W.i9,t)
inherit(P.kX,t)
inherit(W.bx,t)
inherit(W.lV,t)
inherit(W.qR,t)
inherit(P.qO,t)
inherit(P.pH,t)
inherit(P.qq,t)
inherit(P.qz,t)
inherit(P.qA,t)
inherit(P.bg,t)
inherit(P.d8,t)
inherit(T.fG,t)
inherit(T.dd,t)
inherit(T.he,t)
inherit(T.nz,t)
inherit(T.pD,t)
inherit(T.pE,t)
inherit(T.pF,t)
inherit(T.pC,t)
inherit(T.mb,t)
inherit(T.iB,t)
inherit(B.hf,t)
inherit(N.a6,t)
inherit(L.fH,t)
inherit(A.jy,t)
inherit(O.c5,t)
inherit(T.hG,t)
inherit(M.fO,t)
inherit(K.kP,t)
inherit(K.ff,t)
inherit(X.il,t)
inherit(X.i5,t)
inherit(M.h3,t)
inherit(Z.ik,t)
inherit(E.nv,t)
inherit(E.M,t)
inherit(A.a1,t)
inherit(U.c,t)
inherit(Y.dP,t)
inherit(K.cG,t)
inherit(X.F,t)
inherit(G.a0,t)
inherit(F.cb,t)
inherit(A.fN,t)
inherit(B.dr,t)
inherit(B.de,t)
inherit(A.dJ,t)
inherit(F.hq,t)
inherit(F.hr,t)
inherit(Q.jA,t)
inherit(A.jF,t)
inherit(Y.dO,t)
inherit(O.cV,t)
inherit(D.cH,t)
inherit(B.dB,t)
inherit(Q.cS,t)
inherit(B.hQ,t)
inherit(Q.h,t)
t=J.f
inherit(J.mC,t)
inherit(J.mD,t)
inherit(J.hl,t)
inherit(J.eo,t)
inherit(J.fd,t)
inherit(J.ep,t)
inherit(H.fg,t)
inherit(H.eu,t)
inherit(W.aF,t)
inherit(W.cL,t)
inherit(W.eU,t)
inherit(W.fS,t)
inherit(W.bJ,t)
inherit(W.iC,t)
inherit(W.l7,t)
inherit(W.eX,t)
inherit(W.ia,t)
inherit(W.id,t)
inherit(W.lc,t)
inherit(W.ie,t)
inherit(W.iD,t)
inherit(W.ih,t)
inherit(W.ii,t)
inherit(W.fW,t)
inherit(W.S,t)
inherit(W.iE,t)
inherit(W.lS,t)
inherit(W.lW,t)
inherit(W.co,t)
inherit(W.m6,t)
inherit(W.iF,t)
inherit(W.hd,t)
inherit(W.e8,t)
inherit(W.n1,t)
inherit(W.jr,t)
inherit(W.cq,t)
inherit(W.iP,t)
inherit(W.np,t)
inherit(W.nq,t)
inherit(W.iQ,t)
inherit(W.nE,t)
inherit(W.e6,t)
inherit(W.e9,t)
inherit(W.cf,t)
inherit(W.iR,t)
inherit(W.ob,t)
inherit(W.cs,t)
inherit(W.iS,t)
inherit(W.fo,t)
inherit(W.ch,t)
inherit(W.om,t)
inherit(W.or,t)
inherit(W.ci,t)
inherit(W.iT,t)
inherit(W.p4,t)
inherit(W.ct,t)
inherit(W.iU,t)
inherit(W.fr,t)
inherit(W.jQ,t)
inherit(W.pj,t)
inherit(W.fs,t)
inherit(W.jR,t)
inherit(W.pR,t)
inherit(W.iV,t)
inherit(W.iW,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(W.qY,t)
inherit(W.qZ,t)
inherit(P.mi,t)
inherit(P.nu,t)
inherit(P.d4,t)
inherit(P.iK,t)
inherit(P.d6,t)
inherit(P.iL,t)
inherit(P.nN,t)
inherit(P.iM,t)
inherit(P.d7,t)
inherit(P.iN,t)
inherit(P.pp,t)
inherit(P.fJ,t)
inherit(P.ks,t)
inherit(P.nY,t)
inherit(P.qX,t)
inherit(P.iO,t)
t=J.hl
inherit(J.nL,t)
inherit(J.eH,t)
inherit(J.eq,t)
inherit(F.tP,t)
inherit(R.ha,t)
inherit(R.u6,t)
inherit(R.u5,t)
inherit(S.fj,t)
inherit(S.uw,t)
inherit(S.ux,t)
inherit(S.uy,t)
inherit(S.rX,t)
inherit(S.t_,t)
inherit(S.rN,t)
inherit(S.uA,t)
inherit(S.uB,t)
inherit(S.l4,t)
inherit(S.un,t)
inherit(S.uo,t)
inherit(S.rH,t)
inherit(S.m1,t)
inherit(S.kL,t)
inherit(S.rM,t)
inherit(S.rL,t)
inherit(S.rZ,t)
inherit(S.p1,t)
inherit(S.rQ,t)
inherit(S.ht,t)
inherit(S.tX,t)
inherit(S.tZ,t)
inherit(S.ui,t)
inherit(S.uj,t)
inherit(S.u0,t)
inherit(S.u1,t)
inherit(S.tc,t)
inherit(S.td,t)
inherit(S.u2,t)
inherit(S.u_,t)
inherit(S.rJ,t)
inherit(S.ut,t)
inherit(S.uu,t)
inherit(S.us,t)
inherit(Z.tK,t)
inherit(Z.tG,t)
inherit(Z.tH,t)
inherit(J.tL,J.eo)
t=J.fd
inherit(J.jo,t)
inherit(J.jn,t)
inherit(P.jp,P.hC)
t=P.jp
inherit(H.hL,t)
inherit(W.k2,t)
inherit(H.kR,H.hL)
t=P.o
inherit(H.r,t)
inherit(H.hs,t)
inherit(H.hP,t)
inherit(P.hj,t)
inherit(H.qM,t)
t=H.r
inherit(H.er,t)
inherit(H.mS,t)
inherit(P.ql,t)
inherit(P.eA,t)
t=H.er
inherit(H.oO,t)
inherit(H.fe,t)
inherit(P.mV,t)
inherit(H.fV,H.hs)
t=P.jm
inherit(H.jq,t)
inherit(H.jT,t)
inherit(Q.pt,t)
t=H.eV
inherit(H.rB,t)
inherit(H.rC,t)
inherit(H.qp,t)
inherit(H.q1,t)
inherit(H.mm,t)
inherit(H.mn,t)
inherit(H.qw,t)
inherit(H.p6,t)
inherit(H.p7,t)
inherit(H.rD,t)
inherit(H.rp,t)
inherit(H.rq,t)
inherit(H.rr,t)
inherit(H.rs,t)
inherit(H.rt,t)
inherit(H.oT,t)
inherit(H.mG,t)
inherit(H.mF,t)
inherit(H.rl,t)
inherit(H.rm,t)
inherit(H.rn,t)
inherit(P.pL,t)
inherit(P.pK,t)
inherit(P.pM,t)
inherit(P.pN,t)
inherit(P.r0,t)
inherit(P.r1,t)
inherit(P.rb,t)
inherit(P.rd,t)
inherit(P.m0,t)
inherit(P.m_,t)
inherit(P.q6,t)
inherit(P.qe,t)
inherit(P.qa,t)
inherit(P.qb,t)
inherit(P.qc,t)
inherit(P.q8,t)
inherit(P.qd,t)
inherit(P.q7,t)
inherit(P.qh,t)
inherit(P.qi,t)
inherit(P.qg,t)
inherit(P.qf,t)
inherit(P.ov,t)
inherit(P.ot,t)
inherit(P.ou,t)
inherit(P.ow,t)
inherit(P.oB,t)
inherit(P.oz,t)
inherit(P.oA,t)
inherit(P.oC,t)
inherit(P.oF,t)
inherit(P.oG,t)
inherit(P.oD,t)
inherit(P.oE,t)
inherit(P.oH,t)
inherit(P.oI,t)
inherit(P.ox,t)
inherit(P.oy,t)
inherit(P.pQ,t)
inherit(P.pP,t)
inherit(P.qy,t)
inherit(P.r3,t)
inherit(P.r2,t)
inherit(P.r4,t)
inherit(P.ra,t)
inherit(P.qC,t)
inherit(P.qD,t)
inherit(P.qE,t)
inherit(P.qn,t)
inherit(P.n8,t)
inherit(P.qW,t)
inherit(P.qV,t)
inherit(P.l9,t)
inherit(P.la,t)
inherit(P.lg,t)
inherit(P.lh,t)
inherit(P.pi,t)
inherit(P.pf,t)
inherit(P.pg,t)
inherit(P.ph,t)
inherit(P.re,t)
inherit(P.r7,t)
inherit(P.r6,t)
inherit(P.r8,t)
inherit(P.r9,t)
inherit(W.pT,t)
inherit(W.m9,t)
inherit(W.ma,t)
inherit(W.q4,t)
inherit(P.qQ,t)
inherit(P.pI,t)
inherit(P.rf,t)
inherit(P.rg,t)
inherit(P.kY,t)
inherit(P.r5,t)
inherit(P.ky,t)
inherit(P.kz,t)
inherit(O.kG,t)
inherit(A.mB,t)
inherit(A.mA,t)
inherit(T.rv,t)
inherit(G.my,t)
inherit(U.px,t)
inherit(U.py,t)
inherit(F.pA,t)
inherit(A.rc,t)
inherit(A.mZ,t)
inherit(A.mX,t)
inherit(A.mY,t)
inherit(A.n_,t)
inherit(O.ry,t)
inherit(O.rz,t)
inherit(O.rx,t)
inherit(V.ln,t)
inherit(V.lm,t)
inherit(V.ll,t)
inherit(V.lk,t)
inherit(D.oq,t)
inherit(Q.pu,t)
t=H.pO
inherit(H.fw,t)
inherit(H.i_,t)
inherit(H.kV,H.kU)
t=P.eh
inherit(H.jw,t)
inherit(H.mH,t)
inherit(H.pc,t)
inherit(H.kO,t)
inherit(H.o1,t)
inherit(P.fi,t)
inherit(P.cZ,t)
inherit(P.V,t)
inherit(P.eG,t)
inherit(P.dR,t)
inherit(P.bM,t)
inherit(P.l6,t)
t=H.oT
inherit(H.oo,t)
inherit(H.fL,t)
t=P.hj
inherit(H.pJ,t)
inherit(T.fF,t)
t=H.eu
inherit(H.nh,t)
inherit(H.jt,t)
t=H.jt
inherit(H.hy,t)
inherit(H.hz,t)
inherit(H.hA,H.hy)
inherit(H.hw,H.hA)
inherit(H.hB,H.hz)
inherit(H.hx,H.hB)
t=H.hw
inherit(H.ni,t)
inherit(H.nj,t)
t=H.hx
inherit(H.nk,t)
inherit(H.nl,t)
inherit(H.nm,t)
inherit(H.nn,t)
inherit(H.no,t)
inherit(H.ju,t)
inherit(H.fh,t)
t=P.k_
inherit(P.dV,t)
inherit(P.ka,t)
t=P.k1
inherit(P.pV,t)
inherit(P.pX,t)
inherit(P.qK,P.qx)
t=P.dk
inherit(P.hT,t)
inherit(W.q2,t)
inherit(P.hU,P.dl)
inherit(P.qv,P.hT)
inherit(P.qB,P.r_)
inherit(P.k6,H.v)
inherit(P.oc,P.od)
inherit(P.qo,P.oc)
inherit(P.k5,P.qo)
inherit(P.hM,P.n7)
t=P.fQ
inherit(P.kD,t)
inherit(P.lj,t)
t=P.fR
inherit(P.kE,t)
inherit(P.pm,t)
inherit(P.pl,P.lj)
t=P.dp
inherit(P.U,t)
inherit(P.D,t)
t=P.cZ
inherit(P.ez,t)
inherit(P.mj,t)
inherit(P.pU,P.kb)
t=W.aF
inherit(W.ay,t)
inherit(W.fX,t)
inherit(W.kT,t)
inherit(W.lR,t)
inherit(W.lT,t)
inherit(W.lX,t)
inherit(W.hc,t)
inherit(W.hv,t)
inherit(W.nP,t)
inherit(W.jH,t)
inherit(W.oe,t)
inherit(W.eJ,t)
inherit(W.cr,t)
inherit(W.fY,t)
inherit(W.cR,t)
inherit(W.cI,t)
inherit(W.fZ,t)
inherit(W.pn,t)
inherit(W.ps,t)
inherit(W.jU,t)
inherit(W.pz,t)
inherit(W.qI,t)
inherit(P.l8,t)
inherit(P.hF,t)
inherit(P.p8,t)
inherit(P.bC,t)
inherit(P.fK,t)
t=W.ay
inherit(W.ds,t)
inherit(W.ed,t)
inherit(W.eg,t)
inherit(W.ic,t)
inherit(W.ft,t)
inherit(W.pY,t)
t=W.ds
inherit(W.al,t)
inherit(P.ca,t)
t=W.al
inherit(W.eQ,t)
inherit(W.kt,t)
inherit(W.hu,t)
inherit(W.kF,t)
inherit(W.kI,t)
inherit(W.fP,t)
inherit(W.li,t)
inherit(W.lQ,t)
inherit(W.iy,t)
inherit(W.me,t)
inherit(W.f8,t)
inherit(W.mk,t)
inherit(W.mK,t)
inherit(W.hn,t)
inherit(W.n6,t)
inherit(W.nb,t)
inherit(W.nt,t)
inherit(W.ny,t)
inherit(W.nC,t)
inherit(W.fm,t)
inherit(W.jI,t)
inherit(W.og,t)
inherit(W.fn,t)
inherit(W.oV,t)
inherit(W.oX,t)
inherit(W.qj,t)
inherit(W.eT,W.hu)
inherit(W.h_,W.fX)
inherit(W.kB,W.h_)
t=W.bJ
inherit(W.kZ,t)
inherit(W.l_,t)
inherit(W.fT,t)
inherit(W.fU,t)
inherit(W.l0,t)
inherit(W.l1,t)
inherit(W.l2,t)
inherit(W.ef,W.iC)
inherit(W.pS,W.jx)
inherit(W.iX,W.iD)
inherit(W.ig,W.iX)
t=W.S
inherit(W.lo,t)
inherit(W.ok,t)
inherit(W.ol,t)
inherit(W.cd,W.eU)
inherit(W.iY,W.iE)
inherit(W.f4,W.iY)
inherit(W.iZ,W.iF)
inherit(W.f6,W.iZ)
inherit(W.iA,W.f6)
inherit(W.e4,W.hc)
inherit(W.hm,W.e8)
inherit(W.nc,W.hv)
inherit(W.j8,W.iP)
inherit(W.js,W.j8)
inherit(W.j9,W.iQ)
inherit(W.jv,W.j9)
inherit(W.nK,W.e9)
inherit(W.ja,W.iR)
inherit(W.jC,W.ja)
inherit(W.of,W.eJ)
inherit(W.h0,W.fY)
inherit(W.jK,W.h0)
inherit(W.jb,W.iS)
inherit(W.jL,W.jb)
inherit(W.jc,W.iT)
inherit(W.p_,W.jc)
inherit(W.h1,W.fZ)
inherit(W.p0,W.h1)
inherit(W.jd,W.iU)
inherit(W.jP,W.jd)
inherit(W.je,W.iV)
inherit(W.hR,W.je)
inherit(W.jf,W.iW)
inherit(W.k0,W.jf)
inherit(W.pZ,W.ie)
inherit(W.j_,W.iG)
inherit(W.k4,W.j_)
inherit(W.j0,W.iH)
inherit(W.hY,W.j0)
inherit(W.j1,W.iI)
inherit(W.k7,W.j1)
inherit(W.j2,W.iJ)
inherit(W.k9,W.j2)
t=P.kX
inherit(W.q_,t)
inherit(P.kx,t)
inherit(W.hS,W.q2)
inherit(W.q3,P.os)
inherit(P.qP,P.qO)
inherit(P.jX,P.pH)
inherit(P.bS,P.qA)
t=P.ca
inherit(P.cp,t)
inherit(P.ec,t)
inherit(P.lr,t)
inherit(P.ls,t)
inherit(P.lt,t)
inherit(P.lu,t)
inherit(P.lv,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.lF,t)
inherit(P.lG,t)
inherit(P.lU,t)
inherit(P.n9,t)
inherit(P.na,t)
inherit(P.nI,t)
inherit(P.o8,t)
inherit(P.oR,t)
inherit(P.po,t)
inherit(P.hV,t)
inherit(P.qF,t)
inherit(P.qG,t)
inherit(P.qH,t)
t=P.cp
inherit(P.kq,t)
inherit(P.mf,t)
inherit(P.oP,t)
inherit(P.eF,t)
inherit(P.pk,t)
inherit(P.j3,P.iK)
inherit(P.mN,P.j3)
inherit(P.j4,P.iL)
inherit(P.nr,P.j4)
inherit(P.j5,P.iM)
inherit(P.oM,P.j5)
inherit(P.oZ,P.eF)
inherit(P.j6,P.iN)
inherit(P.p9,P.j6)
t=P.bC
inherit(P.e0,t)
inherit(P.kW,t)
inherit(P.eS,P.e0)
inherit(P.j7,P.iO)
inherit(P.jM,P.j7)
t=B.hf
inherit(S.kr,t)
inherit(M.kw,t)
inherit(A.kS,t)
inherit(M.l3,t)
inherit(V.ld,t)
inherit(U.lH,t)
inherit(N.mJ,t)
inherit(F.nf,t)
inherit(G.nO,t)
inherit(Q.o_,t)
inherit(N.oi,t)
inherit(D.oU,t)
inherit(V.oW,t)
inherit(F.pB,t)
t=N.a6
inherit(T.lb,t)
inherit(R.nT,t)
t=T.lb
inherit(K.bU,t)
inherit(S.bG,t)
inherit(T.c1,t)
inherit(M.bB,t)
inherit(A.nB,A.jy)
inherit(L.aK,A.nB)
t=O.c5
inherit(O.dq,t)
inherit(O.ij,t)
inherit(O.eE,t)
t=O.dq
inherit(U.kA,t)
inherit(Y.nV,t)
inherit(V.lY,t)
inherit(Q.mh,t)
inherit(Q.nJ,t)
inherit(M.on,t)
inherit(B.pG,t)
t=U.kA
inherit(U.n3,t)
inherit(U.nw,t)
inherit(U.oJ,O.ij)
t=U.oJ
inherit(U.oK,t)
inherit(U.oL,t)
t=T.hG
inherit(O.kC,t)
inherit(Y.m2,t)
inherit(Y.m3,t)
inherit(B.m5,t)
inherit(X.mc,t)
inherit(Q.md,t)
inherit(S.mL,t)
inherit(Z.n2,t)
inherit(S.n4,t)
inherit(U.n5,t)
inherit(E.ne,t)
inherit(V.nA,t)
inherit(N.nS,t)
inherit(N.nZ,t)
inherit(E.o3,t)
inherit(Y.o4,t)
inherit(Y.o6,t)
inherit(L.o7,t)
inherit(S.oa,t)
inherit(Y.oh,t)
inherit(R.oQ,t)
inherit(U.p2,t)
inherit(E.pr,t)
inherit(M.pv,t)
t=O.eE
inherit(Y.oY,t)
inherit(Y.kM,t)
inherit(Y.ns,t)
inherit(U.pw,t)
t=L.fH
inherit(T.kH,t)
inherit(T.kK,t)
inherit(U.le,t)
inherit(Z.lf,t)
inherit(T.m4,t)
inherit(X.m7,t)
inherit(Z.mI,t)
inherit(Q.mM,t)
inherit(K.mO,t)
inherit(G.mP,t)
inherit(V.nd,t)
inherit(E.nU,t)
inherit(V.o0,t)
inherit(K.o5,t)
inherit(N.oj,t)
inherit(L.oS,t)
inherit(N.p3,t)
inherit(Q.pq,t)
t=S.bG
inherit(S.i6,t)
inherit(S.m8,t)
inherit(E.iz,E.nv)
t=E.M
inherit(E.fI,t)
inherit(E.kv,t)
inherit(Q.nM,Q.mh)
inherit(U.X,U.c)
t=R.nT
inherit(R.a_,t)
inherit(R.Q,t)
inherit(R.a5,t)
inherit(R.bA,R.a5)
t=Y.dP
inherit(Y.ae,t)
inherit(Y.c_,t)
inherit(Y.T,t)
inherit(Y.i8,t)
inherit(Y.bE,t)
inherit(Y.cX,t)
inherit(Y.kQ,t)
inherit(Y.jz,t)
inherit(Y.ix,t)
inherit(Y.jB,t)
t=Y.c_
inherit(Y.d_,t)
inherit(Y.bw,t)
inherit(U.ag,A.a1)
t=G.a0
inherit(G.aJ,t)
inherit(G.bH,t)
inherit(G.d,t)
inherit(G.af,G.bH)
t=D.cH
inherit(D.jW,t)
inherit(D.nX,t)
t=Q.cS
inherit(Q.hO,t)
inherit(Q.hN,t)
inherit(Q.dU,Q.hO)
inherit(B.jV,Q.dU)
t=S.fj
inherit(S.ug,t)
inherit(S.kN,t)
inherit(S.mQ,t)
inherit(S.tV,t)
inherit(S.tb,t)
t=S.kN
inherit(S.u7,t)
inherit(S.u3,t)
t=S.mQ
inherit(S.rS,t)
inherit(S.rI,t)
t=S.l4
inherit(S.tQ,t)
inherit(S.l5,t)
inherit(S.nD,S.l5)
inherit(S.uk,S.nD)
t=S.kL
inherit(S.u8,t)
inherit(S.ul,t)
t=S.m1
inherit(S.up,t)
inherit(S.u9,t)
inherit(S.rY,t)
inherit(S.um,t)
t=S.p1
inherit(S.ur,t)
inherit(S.rP,t)
inherit(S.uz,t)
t=S.ht
inherit(S.tW,t)
inherit(S.tY,t)
inherit(S.uh,t)
inherit(Q.eK,Q.hN)
inherit(Q.jS,Q.eK)
mixin(H.hL,H.pd)
mixin(H.hy,P.b3)
mixin(H.hA,H.iw)
mixin(H.hz,P.b3)
mixin(H.hB,H.iw)
mixin(P.hC,P.b3)
mixin(P.hM,P.qS)
mixin(W.fX,P.b3)
mixin(W.h_,W.bx)
mixin(W.iC,W.i9)
mixin(W.jx,W.i9)
mixin(W.iD,P.b3)
mixin(W.iX,W.bx)
mixin(W.iE,P.b3)
mixin(W.iY,W.bx)
mixin(W.iF,P.b3)
mixin(W.iZ,W.bx)
mixin(W.iP,P.b3)
mixin(W.j8,W.bx)
mixin(W.iQ,P.b3)
mixin(W.j9,W.bx)
mixin(W.iR,P.b3)
mixin(W.ja,W.bx)
mixin(W.fY,P.b3)
mixin(W.h0,W.bx)
mixin(W.iS,P.b3)
mixin(W.jb,W.bx)
mixin(W.iT,P.b3)
mixin(W.jc,W.bx)
mixin(W.fZ,P.b3)
mixin(W.h1,W.bx)
mixin(W.iU,P.b3)
mixin(W.jd,W.bx)
mixin(W.iV,P.b3)
mixin(W.je,W.bx)
mixin(W.iW,P.b3)
mixin(W.jf,W.bx)
mixin(W.iG,P.b3)
mixin(W.j_,W.bx)
mixin(W.iH,P.b3)
mixin(W.j0,W.bx)
mixin(W.iI,P.b3)
mixin(W.j1,W.bx)
mixin(W.iJ,P.b3)
mixin(W.j2,W.bx)
mixin(P.iK,P.b3)
mixin(P.j3,W.bx)
mixin(P.iL,P.b3)
mixin(P.j4,W.bx)
mixin(P.iM,P.b3)
mixin(P.j5,W.bx)
mixin(P.iN,P.b3)
mixin(P.j6,W.bx)
mixin(P.iO,P.b3)
mixin(P.j7,W.bx)
mixin(A.jy,P.fc)
mixin(Q.hO,P.b3)
mixin(Q.hN,P.fc)})();(function constants(){C.L=W.ef.prototype
C.M=W.e4.prototype
C.N=J.f.prototype
C.b=J.eo.prototype
C.f=J.jn.prototype
C.a=J.jo.prototype
C.d=J.fd.prototype
C.c=J.ep.prototype
C.U=J.eq.prototype
C.q=H.fh.prototype
C.F=J.nL.prototype
C.a1=W.fn.prototype
C.t=J.eH.prototype
C.H=new P.kE(!1)
C.G=new P.kD(C.H)
C.i=new W.i7()
C.I=new P.nx()
C.J=new P.pW()
C.K=new P.qq()
C.e=new P.qB()
C.o=new W.qR()
C.p=new P.d0(0)
C.O=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.P=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.Q=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.S=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.T=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.D])
C.x=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.V=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.y=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.W=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.X=makeConstList([])
C.Z=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.z=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.A=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.B=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.C=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.D=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.E=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.h=new F.hq(0,"LogLevel.ERROR")
C.m=new F.hq(1,"LogLevel.WARN")
C.a_=new F.hq(3,"LogLevel.VERBOSE")
C.Y=H.a(makeConstList([]),[P.B])
C.a0=new H.kV(0,{},C.Y,[P.B,P.B])
C.a2=H.bX("bg")
C.a3=H.bX("Hz")
C.r=H.bX("HA")
C.a4=H.bX("HB")
C.a5=H.bX("HC")
C.a6=H.bX("HE")
C.a7=H.bX("HF")
C.a8=H.bX("HG")
C.a9=H.bX("mE")
C.aa=H.bX("d5")
C.ab=H.bX("B")
C.ac=H.bX("HK")
C.ad=H.bX("HL")
C.ae=H.bX("HM")
C.af=H.bX("d8")
C.ag=H.bX("d9")
C.ah=H.bX("U")
C.ai=H.bX("D")
C.aj=H.bX("dp")
C.n=new P.pl(!1)})();(function staticFields(){$.wv="$cachedFunction"
$.ww="$cachedInvocation"
$.dI=0
$.fM=null
$.v5=null
$.uL=null
$.xs=null
$.xG=null
$.rh=null
$.ro=null
$.uM=null
$.fy=null
$.i0=null
$.i1=null
$.uI=!1
$.ao=C.e
$.vq=0
$.vl=null
$.vk=null
$.vj=null
$.vm=null
$.vi=null
$.yr=null
$.yt=null
$.yd=null
$.ye=null
$.yc=null
$.yg=null
$.ym=null
$.yl=null
$.yu=null
$.yo=null
$.yh=null
$.yk=null
$.yf=null
$.yj=null
$.yq=null
$.yi=null
$.ys=null
$.yp=null
$.yn=null
$.aQ="accent"
$.aS="aspect1"
$.aR="aspect2"
$.b0="shoe1"
$.b_="shoe2"
$.aU="cloak1"
$.aV="cloak2"
$.aT="cloak3"
$.aZ="shirt1"
$.aY="shirt2"
$.aX="pants1"
$.aW="pants2"
$.yF=null
$.yz=null
$.yA=null
$.yG=null
$.yJ=null
$.yN=null
$.yB=null
$.yL=null
$.yy=null
$.yI=null
$.yH=null
$.yM=null
$.yK=null
$.yE=null
$.yC=null
$.yD=null
$.v9=null
$.ah=1300
$.j=3
$.m=2
$.K=1
$.z=0.1
$.zm=1
$.zl=-1
$.t6=null
$.e2=null
$.vs=null
$.ek=null
$.f2=null
$.ip=null
$.t0=null
$.lJ=null
$.t8=null
$.iq=null
$.im=null
$.vu=null
$.iv=null
$.h4=null
$.dN=null
$.vt=null
$.lI=null
$.lP=null
$.f0=null
$.zj=null
$.zg=null
$.zi=null
$.zk=null
$.h9=null
$.eY=null
$.cy=null
$.d2=null
$.f_=null
$.lO=null
$.c4=null
$.c3=null
$.t2=null
$.h7=null
$.ej=null
$.zh=null
$.h6=null
$.cD=null
$.e3=null
$.iu=null
$.d1=null
$.f1=null
$.bY=null
$.lM=null
$.vr=null
$.aO=null
$.cC=null
$.cn=null
$.cc=null
$.lL=null
$.bZ=null
$.dv=null
$.du=null
$.dt=null
$.dL=null
$.dM=null
$.e1=null
$.d3=null
$.h8=null
$.lK=null
$.io=null
$.cT=null
$.cx=null
$.bd=null
$.eZ=null
$.el=null
$.lN=null
$.ir=null
$.h5=null
$.t4=null
$.cB=null
$.t7=null
$.t1=null
$.vw=null
$.ei=null
$.cA=null
$.dw=null
$.df=null
$.f3=null
$.t3=null
$.t5=null
$.vv=null
$.is=null
$.it=null
$.em=null
$.vx=!1
$.ta=null
$.zn=null
$.vz=null
$.vB=null
$.zw=null
$.vA=null
$.zu=null
$.zv=null
$.t9=null
$.zr=null
$.zp=null
$.zq=null
$.zs=null
$.zt=null
$.zG=null
$.zz=null
$.zA=null
$.zB=null
$.zC=null
$.zD=null
$.zE=null
$.zF=null
$.zI=null
$.zJ=null
$.zK=null
$.zL=null
$.zM=null
$.zN=null
$.zH=null
$.F1="JACK"
$.F5="PM"
$.F2="JS"
$.F0="HP"
$.Fa="YD"
$.F7="SI"
$.F8="SU"
$.F3="ME"
$.F6="RB"
$.EZ="GN"
$.wq="MP"
$.EX="AR"
$.F4="PE"
$.EY="DP"
$.F9="WV"
$.F_="HB"
$.n="PLAYER1TAG"
$.ey="PLAYER2TAG"
$.y="DENIZENTAG"
$.t="CONSORTTAG"
$.J="CONSORTSOUNDTAG"
$.aI="MCGUFFINTAG"
$.ad="TAGPHYSICALMCGUFFIN"
$.cg="TAGWEAPON"
$.FI=null
$.FV=null
$.FC=null
$.FF=null
$.FL=null
$.FQ=null
$.FO=null
$.FY=null
$.FX=null
$.FP=null
$.G_=null
$.FK=null
$.FZ=null
$.FT=null
$.FR=null
$.FU=null
$.FE=null
$.FD=null
$.FN=null
$.FM=null
$.FJ=null
$.FW=null
$.FG=null
$.FH=null
$.FS=null
$.xy=!1
$.G0=!1
$.wE=null
$.G7=13
$.an=3
$.bL=2
$.aB=1
$.mz=0
$.I=1
$.a3=3
$.G=4
$.tD=6
$.tE=7
$.aa=8
$.w=9
$.q=10
$.mr=null
$.fb=null
$.tq=null
$.tz=null
$.tw=null
$.vH=null
$.tl=null
$.tv=null
$.hh=null
$.vQ=null
$.wa=null
$.vL=null
$.vR=null
$.tm=null
$.tu=null
$.wc=null
$.we=null
$.ti=null
$.ji=null
$.jg=null
$.as=null
$.w4=null
$.th=null
$.w_=null
$.fa=null
$.vK=null
$.wf=null
$.wb=null
$.w9=null
$.ts=null
$.ms=null
$.en=null
$.wd=null
$.mp=null
$.tn=null
$.e5=null
$.w7=null
$.dg=null
$.hg=null
$.tC=null
$.w8=null
$.tB=null
$.tx=null
$.ty=null
$.mv=null
$.jh=null
$.Ac=null
$.vT=null
$.vZ=null
$.w6=null
$.w5=null
$.E=null
$.vO=null
$.mq=null
$.bO=null
$.b9=null
$.bP=null
$.W=null
$.az=null
$.c7=null
$.L=null
$.O=null
$.au=null
$.b6=null
$.bV=null
$.bi=null
$.br=null
$.ce=null
$.b2=null
$.bz=null
$.bQ=null
$.Z=null
$.EA=null
$.at=null
$.b7=null
$.aM=null
$.ab=null
$.c6=null
$.aN=null
$.aq=null
$.bW=null
$.b1=null
$.aj=null
$.bo=null
$.c0=null
$.aC=null
$.bs=null
$.bp=null
$.a7=null
$.bK=null
$.a9=null
$.bf=null
$.bu=null
$.aL=null
$.be=null
$.aw=null
$.b4=null
$.aG=null
$.Y=null
$.ar=null
$.aA=null
$.b5=null
$.ap=null
$.am=null
$.a2=null
$.R=null
$.N=null
$.ai=null
$.aH=null
$.bb=null
$.aP=null
$.Bw=null
$.Ec=null
$.EL=null
$.B1=null
$.E9=null
$.Bx=null
$.vG=null
$.Eo=null
$.Cw=null
$.Bs=null
$.A7=null
$.D6=null
$.jj=null
$.vM=null
$.Dw=null
$.AZ=null
$.Cf=null
$.AX=null
$.tj=null
$.AI=null
$.BJ=null
$.B6=null
$.Cp=null
$.Ew=null
$.By=null
$.tk=null
$.Cq=null
$.B4=null
$.AO=null
$.w3=null
$.A0=null
$.tg=null
$.C8=null
$.tr=null
$.CL=null
$.CF=null
$.A4=null
$.AR=null
$.DG=null
$.A6=null
$.E8=null
$.Ce=null
$.Bd=null
$.Dq=null
$.E2=null
$.tp=null
$.CA=null
$.Dn=null
$.B5=null
$.zU=null
$.Ez=null
$.Ci=null
$.AN=null
$.En=null
$.CO=null
$.AU=null
$.E7=null
$.Bn=null
$.DO=null
$.DP=null
$.A2=null
$.CH=null
$.B7=null
$.Bh=null
$.EP=null
$.hi=null
$.DE=null
$.E5=null
$.mu=null
$.AC=null
$.CY=null
$.D1=null
$.A_=null
$.Bm=null
$.E6=null
$.CN=null
$.Eq=null
$.Ds=null
$.D2=null
$.vY=null
$.DS=null
$.EF=null
$.Eb=null
$.BW=null
$.De=null
$.BX=null
$.DH=null
$.ED=null
$.Co=null
$.Bj=null
$.BG=null
$.As=null
$.Do=null
$.BE=null
$.BL=null
$.B9=null
$.DR=null
$.f9=null
$.CS=null
$.vW=null
$.BY=null
$.vX=null
$.EI=null
$.Ay=null
$.DC=null
$.DD=null
$.DB=null
$.DA=null
$.DZ=null
$.BM=null
$.CI=null
$.E1=null
$.Cz=null
$.CT=null
$.B2=null
$.EC=null
$.CG=null
$.Bp=null
$.Bq=null
$.D0=null
$.EO=null
$.Cc=null
$.EB=null
$.w1=null
$.DN=null
$.Cm=null
$.mx=null
$.C6=null
$.Dg=null
$.Ax=null
$.Bt=null
$.DJ=null
$.CJ=null
$.Ev=null
$.w0=null
$.CR=null
$.AE=null
$.B_=null
$.Dc=null
$.Ei=null
$.DI=null
$.mo=null
$.tA=null
$.DU=null
$.EE=null
$.BV=null
$.Ag=null
$.Ap=null
$.Eg=null
$.CV=null
$.Cx=null
$.CW=null
$.Ed=null
$.C7=null
$.A3=null
$.BK=null
$.Cv=null
$.DW=null
$.BD=null
$.Aw=null
$.Dy=null
$.Dz=null
$.Et=null
$.DL=null
$.tt=null
$.vN=null
$.AV=null
$.vP=null
$.C1=null
$.mt=null
$.Di=null
$.CE=null
$.Du=null
$.to=null
$.mw=null
$.vV=null
$.Bf=null
$.BI=null
$.w2=null
$.vS=null
$.AQ=null
$.Ek=null
$.AJ=null
$.D4=null
$.BZ=null
$.E0=null
$.Cy=null
$.Ad=null
$.C_=null
$.Bc=null
$.D8=null
$.Ch=null
$.CD=null
$.Cn=null
$.Cr=null
$.Dx=null
$.Dt=null
$.zX=null
$.Eh=null
$.Dl=null
$.B3=null
$.B8=null
$.BH=null
$.Ee=null
$.BA=null
$.Cj=null
$.Ak=null
$.Bu=null
$.Bb=null
$.CX=null
$.Bk=null
$.DF=null
$.Cl=null
$.vI=null
$.Dh=null
$.C0=null
$.BB=null
$.zV=null
$.A1=null
$.CU=null
$.D3=null
$.Cg=null
$.BT=null
$.Ey=null
$.An=null
$.BC=null
$.Ck=null
$.B0=null
$.DY=null
$.AP=null
$.DK=null
$.Al=null
$.Ej=null
$.Ct=null
$.Af=null
$.Dr=null
$.Dd=null
$.AW=null
$.BN=null
$.AD=null
$.Ef=null
$.C4=null
$.Eu=null
$.AF=null
$.BO=null
$.AG=null
$.AY=null
$.Dk=null
$.AS=null
$.C5=null
$.CK=null
$.Az=null
$.E_=null
$.EK=null
$.DQ=null
$.CB=null
$.DX=null
$.CC=null
$.A9=null
$.zW=null
$.Cu=null
$.Ai=null
$.AH=null
$.Aa=null
$.Ae=null
$.CQ=null
$.D9=null
$.Em=null
$.C2=null
$.EJ=null
$.Dp=null
$.Dm=null
$.C9=null
$.C3=null
$.AL=null
$.BR=null
$.Cs=null
$.CZ=null
$.DT=null
$.zZ=null
$.EG=null
$.Bi=null
$.E3=null
$.Ba=null
$.A8=null
$.AA=null
$.Ar=null
$.EN=null
$.AB=null
$.Bl=null
$.AK=null
$.Es=null
$.DV=null
$.El=null
$.zY=null
$.Dv=null
$.Ca=null
$.Cd=null
$.Ex=null
$.E4=null
$.vU=null
$.Br=null
$.Db=null
$.EH=null
$.Bv=null
$.Cb=null
$.Av=null
$.BU=null
$.BS=null
$.DM=null
$.Da=null
$.BP=null
$.Aq=null
$.Ea=null
$.D_=null
$.Ep=null
$.EM=null
$.Ab=null
$.vJ=null
$.Am=null
$.Bo=null
$.Dj=null
$.AT=null
$.Df=null
$.Be=null
$.A5=null
$.Ao=null
$.CP=null
$.Bg=null
$.D7=null
$.Au=null
$.Bz=null
$.Er=null
$.Ah=null
$.BF=null
$.D5=null
$.At=null
$.BQ=null
$.CM=null
$.Aj=null
$.AM=null
$.x3=4
$.f5="OWNER"
$.wl=!1
$.tU=null
$.xI=""
$.op=null
$.G4=null
$.hJ=null
$.eB=null
$.G3=null
$.eC=null
$.eD=null
$.cP=null
$.fp=null
$.hH=null
$.hI=null
$.dA=null
$.c8=null
$.wG=!1})();(function lazyInitializers(){lazy($,"vf","$get$vf",function(){return H.xB("_$dart_dartClosure")})
lazy($,"tN","$get$tN",function(){return H.xB("_$dart_js")})
lazy($,"vE","$get$vE",function(){return H.zS()})
lazy($,"vF","$get$vF",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vq
$.vq=t+1
t="expando$key$"+t}return new P.lq(null,t,[P.D])})
lazy($,"wK","$get$wK",function(){return H.dS(H.pb({
toString:function(){return"$receiver$"}}))})
lazy($,"wL","$get$wL",function(){return H.dS(H.pb({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wM","$get$wM",function(){return H.dS(H.pb(null))})
lazy($,"wN","$get$wN",function(){return H.dS(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wR","$get$wR",function(){return H.dS(H.pb(void 0))})
lazy($,"wS","$get$wS",function(){return H.dS(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wP","$get$wP",function(){return H.dS(H.wQ(null))})
lazy($,"wO","$get$wO",function(){return H.dS(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wU","$get$wU",function(){return H.dS(H.wQ(void 0))})
lazy($,"wT","$get$wT",function(){return H.dS(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uE","$get$uE",function(){return P.Gd()})
lazy($,"hb","$get$hb",function(){return P.Gj(null,P.d5)})
lazy($,"i2","$get$i2",function(){return[]})
lazy($,"x5","$get$x5",function(){return H.Fb([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xq","$get$xq",function(){return P.GI()})
lazy($,"ve","$get$ve",function(){return{}})
lazy($,"vc","$get$vc",function(){return P.dz("^\\S+$",!0,!1)})
lazy($,"ku","$get$ku",function(){return P.cF(P.D,L.fH)})
lazy($,"v7","$get$v7",function(){return P.dz("[\\/]",!0,!1)})
lazy($,"bN","$get$bN",function(){return H.a([],[S.bG])})
lazy($,"lZ","$get$lZ",function(){return P.cF(P.B,Z.ik)})
lazy($,"ml","$get$ml",function(){return P.cF(P.D,B.hf)})
lazy($,"wg","$get$wg",function(){return H.a([],[A.a1])})
lazy($,"xE","$get$xE",function(){return K.va()})
lazy($,"wr","$get$wr",function(){return H.a([],[P.B])})
lazy($,"o2","$get$o2",function(){return P.cF(P.D,T.hG)})
lazy($,"ak","$get$ak",function(){return H.a([],[U.ag])})
lazy($,"wF","$get$wF",function(){return P.wj([0,new K.cG("Pixels -> Bytes",T.GY(),T.GX()),1,new K.cG("Pixels -> Packed bits",T.GW(),T.GV()),2,new K.cG("RLE 1 byte",V.rW(1),V.rV(1)),3,new K.cG("RLE 2 bytes",V.rW(2),V.rV(2)),4,new K.cG("RLE 3 bytes",V.rW(3),V.rV(3)),5,new K.cG("RLE packed 1 byte",V.rU(1),V.rT(1)),6,new K.cG("RLE packed 2 bytes",V.rU(2),V.rT(2)),7,new K.cG("RLE packed 3 bytes",V.rU(3),V.rT(3)),8,new K.cG("RLE dynamic",V.Hr(),V.Hq()),9,new K.cG("Exponential-Golomb pixels",F.H9(),F.H8()),10,new K.cG("Exponential-Golomb run RLE",F.H7(),F.H6()),11,new K.cG("Exponential-Golomb run/data RLE",F.H5(),F.H4())],P.D,K.cG)})
lazy($,"b","$get$b",function(){return P.a4(null,null,null,G.a0)})
lazy($,"x1","$get$x1",function(){return P.dz("[\n\r]+",!0,!1)})
lazy($,"x2","$get$x2",function(){return P.dz("( *)(.*)",!0,!1)})
lazy($,"x0","$get$x0",function(){return P.dz("^s*//",!0,!1)})
lazy($,"x_","$get$x_",function(){return P.dz("//",!0,!1)})
lazy($,"cJ","$get$cJ",function(){return new F.hr(!1,!1,"WordListFileFormat")})
lazy($,"cj","$get$cj",function(){return H.a([],[F.cb])})
lazy($,"x4","$get$x4",function(){return new T.pC(null)})
lazy($,"v3","$get$v3",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cU","$get$cU",function(){return P.cF(P.B,Y.dO)})
lazy($,"wm","$get$wm",function(){return P.dz("[\\/]",!0,!1)})
lazy($,"tT","$get$tT",function(){return P.cF(P.B,W.fm)})
lazy($,"u4","$get$u4",function(){return A.ee(255,0,255,255)})
lazy($,"nH","$get$nH",function(){return new F.hr(!1,!1,"Path Utils")})
lazy($,"nF","$get$nF",function(){return P.cF(P.eI,P.D)})
lazy($,"cQ","$get$cQ",function(){return H.a([],[D.cH])})
lazy($,"hK","$get$hK",function(){return P.dz("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fq","$get$fq",function(){return P.dz("\\\\(?!\\\\)",!0,!1)})
lazy($,"vg","$get$vg",function(){var t={color:16711935}
return new THREE.MeshBasicMaterial(t)})})()
var u={
createNewIsolate:function(){return $},
staticFunctionNameToClosure:function(a){var t=getGlobalFromName(a)
var s=t.$tearOff
return s()},
classIdExtractor:function(a){return a.constructor.name},
classFieldsExtractor:function(a){var t=a.constructor
var s=t.$cachedFieldNames
if(!s){var r=new t()
s=t.$cachedFieldNames=Object.keys(r)}var q=new Array(s.length)
for(var p=0;p<s.length;p++)q[p]=a[s[p]]
return q},
instanceFromClassId:function(a){var t=getGlobalFromName(a)
return new t()},
initializeEmptyInstance:function(a,b,c){var t=b.constructor
var s=Object.keys(b)
if(s.length!=c.length)throw new Error("Mismatch during deserialization.")
for(var r=0;r<c.length;r++)b[s[r]]=c[r]
return b},
mangledGlobalNames:{D:"int",U:"double",dp:"num",B:"String",d9:"bool",d5:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d9,args:[[P.p,E.iz]]},{func:1,v:true},{func:1,ret:P.d8,args:[P.bg,P.D,P.D,O.cV]},{func:1,ret:P.bg,args:[P.D,P.bg,P.bg,O.cV]},{func:1,v:true,args:[P.ac]},{func:1,ret:P.B,args:[P.D]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.ay,args:[P.D]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.ds,args:[P.D]},{func:1,ret:W.cq,args:[P.D]},{func:1,args:[,]},{func:1,v:true,args:[P.ac],opt:[P.dQ]},{func:1,ret:W.cd,args:[P.D]},{func:1,v:true,args:[,P.dQ]},{func:1,ret:W.cf,args:[P.D]},{func:1,ret:W.cr,args:[P.D]},{func:1,ret:W.cs,args:[P.D]},{func:1,ret:W.fo,args:[P.D]},{func:1,ret:W.ct,args:[P.D]},{func:1,ret:W.fr,args:[P.D]},{func:1,ret:W.fs,args:[P.D]},{func:1,ret:P.bS,args:[P.D]},{func:1,ret:P.B,args:[P.dy]},{func:1,ret:W.co,args:[P.D]},{func:1,ret:W.ft,args:[P.D]},{func:1,ret:W.ch,args:[P.D]},{func:1,ret:W.ci,args:[P.D]},{func:1,ret:P.bq,args:[P.D]},{func:1,ret:P.d9,args:[P.ac]},{func:1,ret:P.D,args:[P.bv,P.bv]},{func:1,v:true,args:[P.B]},{func:1,ret:W.eX,args:[P.D]},{func:1,ret:W.bJ,args:[P.D]}],
interceptorsByTag:null,
leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NodeIterator:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,TreeWalker:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fg,ArrayBufferView:H.eu,DataView:H.nh,Float32Array:H.ni,Float64Array:H.nj,Int16Array:H.nk,Int32Array:H.nl,Int8Array:H.nm,Uint16Array:H.nn,Uint32Array:H.no,Uint8ClampedArray:H.ju,CanvasPixelArray:H.ju,Uint8Array:H.fh,HTMLBRElement:W.al,HTMLCanvasElement:W.al,HTMLContentElement:W.al,HTMLDListElement:W.al,HTMLDataListElement:W.al,HTMLDetailsElement:W.al,HTMLDialogElement:W.al,HTMLDivElement:W.al,HTMLHRElement:W.al,HTMLHeadElement:W.al,HTMLHeadingElement:W.al,HTMLHtmlElement:W.al,HTMLLIElement:W.al,HTMLLabelElement:W.al,HTMLLegendElement:W.al,HTMLMenuElement:W.al,HTMLMenuItemElement:W.al,HTMLMeterElement:W.al,HTMLModElement:W.al,HTMLOListElement:W.al,HTMLOptGroupElement:W.al,HTMLOptionElement:W.al,HTMLParagraphElement:W.al,HTMLPictureElement:W.al,HTMLPreElement:W.al,HTMLProgressElement:W.al,HTMLQuoteElement:W.al,HTMLShadowElement:W.al,HTMLSourceElement:W.al,HTMLStyleElement:W.al,HTMLTableCaptionElement:W.al,HTMLTableCellElement:W.al,HTMLTableDataCellElement:W.al,HTMLTableHeaderCellElement:W.al,HTMLTableColElement:W.al,HTMLTableElement:W.al,HTMLTableRowElement:W.al,HTMLTableSectionElement:W.al,HTMLTitleElement:W.al,HTMLTrackElement:W.al,HTMLUListElement:W.al,HTMLUnknownElement:W.al,HTMLDirectoryElement:W.al,HTMLFontElement:W.al,HTMLFrameElement:W.al,HTMLMarqueeElement:W.al,HTMLElement:W.al,HTMLAnchorElement:W.eQ,HTMLAreaElement:W.kt,HTMLAudioElement:W.eT,AudioTrack:W.cL,AudioTrackList:W.kB,HTMLBaseElement:W.kF,Blob:W.eU,HTMLBodyElement:W.kI,HTMLButtonElement:W.fP,CDATASection:W.ed,CharacterData:W.ed,Comment:W.ed,ProcessingInstruction:W.ed,Text:W.ed,CompositorWorker:W.kT,Credential:W.fS,FederatedCredential:W.fS,PasswordCredential:W.fS,CSSFontFaceRule:W.kZ,CSSImportRule:W.l_,CSSKeyframeRule:W.fT,MozCSSKeyframeRule:W.fT,WebKitCSSKeyframeRule:W.fT,CSSKeyframesRule:W.fU,MozCSSKeyframesRule:W.fU,WebKitCSSKeyframesRule:W.fU,CSSPageRule:W.l0,CSSCharsetRule:W.bJ,CSSGroupingRule:W.bJ,CSSMediaRule:W.bJ,CSSNamespaceRule:W.bJ,CSSSupportsRule:W.bJ,CSSRule:W.bJ,CSSStyleDeclaration:W.ef,MSStyleCSSProperties:W.ef,CSS2Properties:W.ef,CSSStyleRule:W.l1,CSSViewportRule:W.l2,DataTransfer:W.l7,DataTransferItem:W.eX,DataTransferItemList:W.ia,Document:W.eg,HTMLDocument:W.eg,XMLDocument:W.eg,DocumentFragment:W.ic,ShadowRoot:W.ic,DOMError:W.id,FileError:W.id,DOMException:W.lc,DOMRectReadOnly:W.ie,DOMStringList:W.ig,DOMStringMap:W.ih,DOMTokenList:W.ii,Element:W.ds,HTMLEmbedElement:W.li,DirectoryEntry:W.fW,Entry:W.fW,FileEntry:W.fW,ErrorEvent:W.lo,AnimationEvent:W.S,AnimationPlayerEvent:W.S,ApplicationCacheErrorEvent:W.S,AutocompleteErrorEvent:W.S,BeforeInstallPromptEvent:W.S,BeforeUnloadEvent:W.S,BlobEvent:W.S,ClipboardEvent:W.S,CloseEvent:W.S,CompositionEvent:W.S,CustomEvent:W.S,DeviceLightEvent:W.S,DeviceMotionEvent:W.S,DeviceOrientationEvent:W.S,ExtendableEvent:W.S,ExtendableMessageEvent:W.S,FetchEvent:W.S,FocusEvent:W.S,FontFaceSetLoadEvent:W.S,GamepadEvent:W.S,GeofencingEvent:W.S,HashChangeEvent:W.S,InstallEvent:W.S,KeyboardEvent:W.S,MediaEncryptedEvent:W.S,MediaKeyMessageEvent:W.S,MediaQueryListEvent:W.S,MediaStreamEvent:W.S,MediaStreamTrackEvent:W.S,MessageEvent:W.S,MIDIConnectionEvent:W.S,MIDIMessageEvent:W.S,MouseEvent:W.S,DragEvent:W.S,NotificationEvent:W.S,PageTransitionEvent:W.S,PointerEvent:W.S,PopStateEvent:W.S,PresentationConnectionAvailableEvent:W.S,PresentationConnectionCloseEvent:W.S,ProgressEvent:W.S,PromiseRejectionEvent:W.S,PushEvent:W.S,RelatedEvent:W.S,RTCDataChannelEvent:W.S,RTCDTMFToneChangeEvent:W.S,RTCIceCandidateEvent:W.S,RTCPeerConnectionIceEvent:W.S,SecurityPolicyViolationEvent:W.S,ServicePortConnectEvent:W.S,ServiceWorkerMessageEvent:W.S,SpeechRecognitionEvent:W.S,StorageEvent:W.S,SyncEvent:W.S,TextEvent:W.S,TouchEvent:W.S,TrackEvent:W.S,TransitionEvent:W.S,WebKitTransitionEvent:W.S,UIEvent:W.S,WheelEvent:W.S,ResourceProgressEvent:W.S,USBConnectionEvent:W.S,IDBVersionChangeEvent:W.S,SVGZoomEvent:W.S,AudioProcessingEvent:W.S,OfflineAudioCompletionEvent:W.S,WebGLContextEvent:W.S,Event:W.S,InputEvent:W.S,Animation:W.aF,ApplicationCache:W.aF,DOMApplicationCache:W.aF,OfflineResourceList:W.aF,BatteryManager:W.aF,CanvasCaptureMediaStreamTrack:W.aF,CrossOriginServiceWorkerClient:W.aF,EventSource:W.aF,MediaKeySession:W.aF,MediaQueryList:W.aF,MediaRecorder:W.aF,MediaSource:W.aF,MediaStream:W.aF,MediaStreamTrack:W.aF,MessagePort:W.aF,MIDIAccess:W.aF,NetworkInformation:W.aF,Notification:W.aF,Performance:W.aF,PermissionStatus:W.aF,PresentationAvailability:W.aF,PresentationReceiver:W.aF,PresentationRequest:W.aF,RTCDTMFSender:W.aF,RTCPeerConnection:W.aF,webkitRTCPeerConnection:W.aF,mozRTCPeerConnection:W.aF,ScreenOrientation:W.aF,ServicePortCollection:W.aF,ServiceWorkerContainer:W.aF,ServiceWorkerRegistration:W.aF,SpeechRecognition:W.aF,SpeechSynthesis:W.aF,SpeechSynthesisUtterance:W.aF,WorkerPerformance:W.aF,BluetoothDevice:W.aF,BluetoothRemoteGATTCharacteristic:W.aF,USB:W.aF,EventTarget:W.aF,HTMLFieldSetElement:W.lQ,File:W.cd,FileList:W.f4,FileReader:W.lR,DOMFileSystem:W.lS,FileWriter:W.lT,FontFace:W.lW,FontFaceSet:W.lX,HTMLFormElement:W.iy,Gamepad:W.co,History:W.m6,HTMLOptionsCollection:W.f6,HTMLCollection:W.f6,HTMLFormControlsCollection:W.iA,XMLHttpRequest:W.e4,XMLHttpRequestUpload:W.hc,XMLHttpRequestEventTarget:W.hc,HTMLIFrameElement:W.me,ImageData:W.hd,HTMLImageElement:W.f8,HTMLInputElement:W.mk,HTMLKeygenElement:W.mK,CalcLength:W.hm,LengthValue:W.hm,SimpleLength:W.hm,HTMLLinkElement:W.hn,Location:W.n1,HTMLMapElement:W.n6,HTMLVideoElement:W.hu,HTMLMediaElement:W.hu,MediaList:W.jr,HTMLMetaElement:W.nb,MIDIOutput:W.nc,MIDIInput:W.hv,MIDIPort:W.hv,MimeType:W.cq,MimeTypeArray:W.js,Navigator:W.np,NavigatorUserMediaError:W.nq,Node:W.ay,NodeList:W.jv,RadioNodeList:W.jv,HTMLObjectElement:W.nt,HTMLOutputElement:W.ny,HTMLParamElement:W.nC,Path2D:W.nE,PerformanceCompositeTiming:W.e6,PerformanceEntry:W.e6,PerformanceMark:W.e6,PerformanceMeasure:W.e6,PerformanceRenderTiming:W.e6,PerformanceResourceTiming:W.e6,Perspective:W.nK,Plugin:W.cf,PluginArray:W.jC,PresentationConnection:W.nP,RTCDataChannel:W.jH,DataChannel:W.jH,HTMLScriptElement:W.fm,HTMLSelectElement:W.jI,ServicePort:W.ob,SharedWorker:W.oe,SharedWorkerGlobalScope:W.of,HTMLSlotElement:W.og,SourceBuffer:W.cr,SourceBufferList:W.jK,HTMLSpanElement:W.fn,SpeechGrammar:W.cs,SpeechGrammarList:W.jL,SpeechRecognitionAlternative:W.fo,SpeechRecognitionError:W.ok,SpeechRecognitionResult:W.ch,SpeechSynthesisEvent:W.ol,SpeechSynthesisVoice:W.om,Storage:W.or,CSSStyleSheet:W.ci,StyleSheet:W.ci,KeywordValue:W.e8,NumberValue:W.e8,PositionValue:W.e8,TransformValue:W.e8,StyleValue:W.e8,HTMLTemplateElement:W.oV,HTMLTextAreaElement:W.oX,TextTrack:W.cR,TextTrackCue:W.cI,VTTCue:W.cI,TextTrackCueList:W.p_,TextTrackList:W.p0,TimeRanges:W.p4,Touch:W.ct,TouchList:W.jP,TrackDefault:W.fr,TrackDefaultList:W.jQ,Matrix:W.e9,Rotation:W.e9,Skew:W.e9,Translation:W.e9,TransformComponent:W.e9,URL:W.pj,VideoTrackList:W.pn,VTTRegion:W.fs,VTTRegionList:W.jR,WebSocket:W.ps,Window:W.jU,DOMWindow:W.jU,Worker:W.pz,CompositorWorkerGlobalScope:W.eJ,DedicatedWorkerGlobalScope:W.eJ,ServiceWorkerGlobalScope:W.eJ,WorkerGlobalScope:W.eJ,Attr:W.ft,ClientRect:W.pR,ClientRectList:W.hR,DOMRectList:W.hR,CSSRuleList:W.k0,DocumentType:W.pY,DOMRect:W.pZ,GamepadList:W.k4,HTMLFrameSetElement:W.qj,NamedNodeMap:W.hY,MozNamedAttrMap:W.hY,ServiceWorker:W.qI,SpeechRecognitionResultList:W.k7,StyleSheetList:W.k9,WorkerLocation:W.qY,WorkerNavigator:W.qZ,IDBDatabase:P.l8,IDBIndex:P.mi,IDBObjectStore:P.nu,IDBOpenDBRequest:P.hF,IDBVersionChangeRequest:P.hF,IDBRequest:P.hF,IDBTransaction:P.p8,SVGAElement:P.kq,SVGAnimateElement:P.ec,SVGAnimateMotionElement:P.ec,SVGAnimateTransformElement:P.ec,SVGAnimationElement:P.ec,SVGSetElement:P.ec,SVGFEBlendElement:P.lr,SVGFEColorMatrixElement:P.ls,SVGFEComponentTransferElement:P.lt,SVGFECompositeElement:P.lu,SVGFEConvolveMatrixElement:P.lv,SVGFEDiffuseLightingElement:P.lw,SVGFEDisplacementMapElement:P.lx,SVGFEFloodElement:P.ly,SVGFEGaussianBlurElement:P.lz,SVGFEImageElement:P.lA,SVGFEMergeElement:P.lB,SVGFEMorphologyElement:P.lC,SVGFEOffsetElement:P.lD,SVGFESpecularLightingElement:P.lE,SVGFETileElement:P.lF,SVGFETurbulenceElement:P.lG,SVGFilterElement:P.lU,SVGCircleElement:P.cp,SVGClipPathElement:P.cp,SVGDefsElement:P.cp,SVGEllipseElement:P.cp,SVGForeignObjectElement:P.cp,SVGGElement:P.cp,SVGGeometryElement:P.cp,SVGLineElement:P.cp,SVGPathElement:P.cp,SVGPolygonElement:P.cp,SVGPolylineElement:P.cp,SVGRectElement:P.cp,SVGSwitchElement:P.cp,SVGGraphicsElement:P.cp,SVGImageElement:P.mf,SVGLength:P.d4,SVGLengthList:P.mN,SVGMarkerElement:P.n9,SVGMaskElement:P.na,SVGNumber:P.d6,SVGNumberList:P.nr,SVGPatternElement:P.nI,SVGPointList:P.nN,SVGScriptElement:P.o8,SVGStringList:P.oM,SVGDescElement:P.ca,SVGDiscardElement:P.ca,SVGFEDistantLightElement:P.ca,SVGFEFuncAElement:P.ca,SVGFEFuncBElement:P.ca,SVGFEFuncGElement:P.ca,SVGFEFuncRElement:P.ca,SVGFEMergeNodeElement:P.ca,SVGFEPointLightElement:P.ca,SVGFESpotLightElement:P.ca,SVGMetadataElement:P.ca,SVGStopElement:P.ca,SVGStyleElement:P.ca,SVGTitleElement:P.ca,SVGComponentTransferFunctionElement:P.ca,SVGElement:P.ca,SVGSVGElement:P.oP,SVGSymbolElement:P.oR,SVGTSpanElement:P.eF,SVGTextElement:P.eF,SVGTextPositioningElement:P.eF,SVGTextContentElement:P.eF,SVGTextPathElement:P.oZ,SVGTransform:P.d7,SVGTransformList:P.p9,SVGUseElement:P.pk,SVGViewElement:P.po,SVGViewSpec:P.pp,SVGLinearGradientElement:P.hV,SVGRadialGradientElement:P.hV,SVGGradientElement:P.hV,SVGCursorElement:P.qF,SVGFEDropShadowElement:P.qG,SVGMPathElement:P.qH,AudioBuffer:P.fJ,AudioBufferSourceNode:P.eS,AudioContext:P.fK,webkitAudioContext:P.fK,OfflineAudioContext:P.fK,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.e0,MediaStreamAudioSourceNode:P.e0,OscillatorNode:P.e0,Oscillator:P.e0,AudioSourceNode:P.e0,ConvolverNode:P.kW,WebGLActiveInfo:P.ks,WebGL2RenderingContext:P.nY,WebGL2RenderingContextBase:P.qX,SQLResultSetRowList:P.jM})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jt.$nativeSuperclassTag="ArrayBufferView"
H.hy.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
H.hw.$nativeSuperclassTag="ArrayBufferView"
H.hz.$nativeSuperclassTag="ArrayBufferView"
H.hB.$nativeSuperclassTag="ArrayBufferView"
H.hx.$nativeSuperclassTag="ArrayBufferView"
W.fX.$nativeSuperclassTag="EventTarget"
W.h_.$nativeSuperclassTag="EventTarget"
W.fY.$nativeSuperclassTag="EventTarget"
W.h0.$nativeSuperclassTag="EventTarget"
W.fZ.$nativeSuperclassTag="EventTarget"
W.h1.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xJ(T.wp(),b)},[])
else (function(b){H.xJ(T.wp(),b)})([])})})()
//# sourceMappingURL=MemoNewspostController.dart.js.map
