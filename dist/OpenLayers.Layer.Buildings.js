(function(l){function G(j){for(var m,A=[j[0],j[1]],d,f=[j[0],j[1]],k=2,q=j.length-3;k<q;k+=2){m=[j[k],j[k+1]];d=[j[k+2]||j[0],j[k+3]||j[1]];var w=A,s=w[0],x=w[1],H=d[0]-s,y=d[1]-x,B=void 0;if(H!==0||y!==0){B=((m[0]-s)*H+(m[1]-x)*y)/(H*H+y*y);if(B>1){s=d[0];x=d[1]}else if(B>0){s+=H*B;x+=y*B}}s=C(m,[s,x])*2;d=C(w,d);if(s*d>750){f.push(m[0],m[1]);A=m}}if(m[0]!==j[0]||m[1]!==j[1])f.push(j[0],j[1]);return f}function C(j,m){var A=j[0]-m[0],d=j[1]-m[1];return A*A+d*d}function na(j){for(var m=0,A=0,d=0,f=
j.length-3;d<f;d+=2){m+=j[d];A+=j[d+1]}j=(j.length-2)*2;return[m/j<<0,A/j<<0]}var Da=Da||Array,Ia=Math.exp,Ja=Math.log,Ka=Math.tan,La=Math.atan,ua=Math.min,Ma=Math.max,va=l.document,K=function(){function j(d,f,k){if(k<0)k+=1;if(k>1)k-=1;if(k<1/6)return d+(f-d)*6*k;if(k<0.5)return f;if(k<2/3)return d+(f-d)*(2/3-k)*6;return d}function m(d,f,k,q){this.r=d;this.g=f;this.b=k;this.a=arguments.length<4?1:q}var A=m.prototype;A.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join(",")+
")"};A.adjustLightness=function(d){var f=K.toHSLA(this);f.l*=d;f.l=Math.min(1,Math.max(0,f.l));var k,q;if(f.s===0)d=k=q=f.l;else{q=f.l<0.5?f.l*(1+f.s):f.l+f.s-f.l*f.s;var w=2*f.l-q;d=j(w,q,f.h+1/3);k=j(w,q,f.h);q=j(w,q,f.h-1/3)}return new K(d*255<<0,k*255<<0,q*255<<0,f.a)};A.adjustAlpha=function(d){return new K(this.r,this.g,this.b,this.a*d)};m.parse=function(d){d+="";if(~d.indexOf("#")){d=d.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);return new K(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],
16),d[4]?parseInt(d[4],16)/255:1)}if(d=d.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new K(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),d[4]?parseFloat(d[5],10):1)};m.toHSLA=function(d){var f=d.r/255,k=d.g/255,q=d.b/255,w=Math.max(f,k,q),s=Math.min(f,k,q),x,H=(w+s)/2,y;if(w===s)x=s=0;else{y=w-s;s=H>0.5?y/(2-w-s):y/(w+s);switch(w){case f:x=(k-q)/y+(k<q?6:0);break;case k:x=(q-f)/y+2;break;case q:x=(f-k)/y+4;break}x/=6}return{h:x,s:s,l:H,a:d.a}};return m}(),ba=Math.PI,Ea=ba/
2,Na=ba/4,Oa=180/ba,Pa=256,wa=14,ca=400,Fa=ca-50,da="latitude",ea="longitude",P=0,W=1,L=2,S=3,oa=4,fa=5,Q=6;l.OSMBuildings=function(j){function m(a,e){var b={};a/=ga;e/=ga;b[da]=e<=0?90:e>=1?-90:Oa*(2*La(Ia(ba*(1-2*e)))-Ea);b[ea]=(a===1?1:(a%1+1)%1)*360-180;return b}function A(a,e){return a.replace(/\{ *([\w_]+) *\}/g,function(b,c){return e[c]})}function d(a,e){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<200||b.status>299||b.responseText&&e(JSON.parse(b.responseText))};
b.open("GET",a);b.send(null);return b}function f(){if(!(!xa||J<wa)){var a=m(Z-ha,$-ya),e=m(Z+X+ha,$+R+ya);pa&&pa.abort();pa=d(A(xa,{w:a[ea],n:a[da],e:e[ea],s:e[da],z:J}),k)}}function k(a){var e,b,c,h=[],g,i=g=0;ia=wa;H(J);pa=null;if(!(!a||a.meta.z!==J)){c=a.meta;b=a.data;if(D&&v&&D.z===c.z){g=D.x-c.x;i=D.y-c.y;a=0;for(e=v.length;a<e;a++)h[a]=v[a][L][0]+g+","+(v[a][L][1]+i)}D=c;v=[];a=0;for(e=b.length;a<e;a++){c=[];g=G(b[a][L]);if(!(g.length<8)){c[L]=g;c[oa]=na(g);c[P]=ua(b[a][P],Fa);c[W]=b[a][W];
g=c[L][0]+","+c[L][1];c[fa]=!(h&&~h.indexOf(g));c[S]=[];c[Q]=[];v.push(c)}}y()}}function q(a,e){var b=[],c,h,g,i,o,n,p,t,T=za-J;c=0;for(h=a.length;c<h;c++){o=a[c];n=o[L];t=new Da(n.length);g=0;for(i=n.length-1;g<i;g+=2){p=n[g+1];var I=ua(1,Ma(0,0.5-Ja(Ka(Na+Ea*n[g]/180))/ba/2));p={x:(p/360+0.5)*ga<<0,y:I*ga<<0};t[g]=p.x;t[g+1]=p.y}t=G(t);if(!(t.length<8)){i=[];i[L]=t;i[oa]=na(t);i[P]=ua(o[P]>>T,Fa);i[W]=o[W];i[fa]=e;i[S]=o[S];i[Q]=[];for(g=0;g<3;g++)if(i[S][g])i[Q][g]=i[S][g].adjustAlpha(M)+"";b.push(i)}}return b}
function w(a,e){if(typeof a==="object")x(a,!e);else{var b=va.documentElement,c=va.createElement("script");l.jsonpCallback=function(h){delete l.jsonpCallback;b.removeChild(c);x(h,!e)};b.insertBefore(c,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function s(a,e,b){if(b===undefined)b=[];var c,h,g,i=a[0]?a:a.features,o,n,p,t,T,I=e?1:0,U=e?0:1;if(i){c=0;for(a=i.length;c<a;c++)s(i[c],e,b);return b}if(a.type==="Feature"){o=a.geometry;c=a.properties}if(o.type==="Polygon")n=[o.coordinates];
if(o.type==="MultiPolygon")n=o.coordinates;if(n){e=c.height;if(c.color||c.wallColor)t=K.parse(c.color||c.wallColor);if(c.roofColor)T=K.parse(c.roofColor);c=0;for(a=n.length;c<a;c++){i=n[c][0];p=[];h=o=0;for(g=i.length;h<g;h++){p.push(i[h][I],i[h][U]);o+=e||i[h][2]||0}if(o){h=[];g=L;var u=void 0,r=void 0,E=void 0,N=void 0,ja=0,O=void 0,Ga=void 0;O=0;for(Ga=p.length-3;O<Ga;O+=2){u=p[O];r=p[O+1];E=p[O+2];N=p[O+3];ja+=u*N-E*r}if((ja/2>0?"CW":"CCW")==="CW")p=p;else{u=[];for(r=p.length-2;r>=0;r-=2)u.push(p[r],
p[r+1]);p=u}h[g]=p;h[P]=o/i.length<<0;h[S]=[t||null,t?t.adjustLightness(0.8):null,T?T:t?t.adjustLightness(1.2):Y];b.push(h)}}}return b}function x(a,e){if(a){ka=s(a,e);ia=0;H(J);D={n:90,w:-180,s:-90,e:180,x:0,y:0,z:J};v=q(ka,true);y()}else{ka=null;B()}}function H(a){var e,b,c;J=a;ga=Pa<<J;M=1-(J-ia)*0.3/(za-ia);Aa=V.adjustAlpha(M)+"";qa=ra.adjustAlpha(M)+"";sa=Y.adjustAlpha(M)+"";if(v){a=0;for(e=v.length;a<e;a++){c=v[a];c[Q]=[];for(b=0;b<3;b++)if(c[S][b])c[Q][b]=c[S][b].adjustAlpha(M)+""}}}function y(){aa=
0;clearInterval(Ba);Ba=setInterval(function(){aa+=0.1;if(aa>1){clearInterval(Ba);aa=1;for(var a=0,e=v.length;a<e;a++)v[a][fa]=0}B()},33)}function B(){z.clearRect(0,0,X,R);if(D&&v)if(!(J<ia||Ca)){var a,e,b,c,h,g,i,o,n,p=Z-D.x,t=$-D.y,T=[la+p,ma+t],I,U,u,r,E,N;v.sort(function(ja,O){return C(O[oa],T)/O[P]-C(ja[oa],T)/ja[P]});a=0;for(e=v.length;a<e;a++){h=v[a];u=false;g=h[L];I=[];b=0;for(c=g.length-1;b<c;b+=2){I[b]=o=g[b]-p;I[b+1]=n=g[b+1]-t;u||(u=o>0&&o<X&&n>0&&n<R)}if(u){b=h[fa]?h[P]*aa:h[P];g=ca/(ca-
b);o=[];U=[];b=0;for(c=I.length-3;b<c;b+=2){n=I[b];r=I[b+1];u=I[b+2];E=I[b+3];N=ta(n,r,g);U=ta(u,E,g);if(h[W]){i=h[fa]?h[W]*aa:h[W];i=ca/(ca-i);r=ta(n,r,i);E=ta(u,E,i);n=r.x;r=r.y;u=E.x;E=E.y}if((u-n)*(N.y-r)>(N.x-n)*(E-r)){U=[u+0.5,E+0.5,n+0.5,r+0.5,N.x,N.y,U.x,U.y];z.fillStyle=n<u&&r<E||n>u&&r>E?h[Q][1]||qa:h[Q][0]||Aa;Ha(U)}o[b]=N.x;o[b+1]=N.y}z.fillStyle=h[Q][2]||sa;z.strokeStyle=h[Q][1]||qa;Ha(o,true)}}}}function Ha(a,e){if(a.length){z.beginPath();z.moveTo(a[0],a[1]);for(var b=2,c=a.length;b<
c;b+=2)z.lineTo(a[b],a[b+1]);z.closePath();e&&z.stroke();z.fill()}}function ta(a,e,b){return{x:((a-la)*b+la<<0)+0.5,y:((e-ma)*b+ma<<0)+0.5}}var X=0,R=0,ha=0,ya=0,Z=0,$=0,J,ga,pa,F,z,xa,V=new K(200,190,180),ra=V.adjustLightness(0.8),Y=V.adjustLightness(1.2),Aa=V+"",qa=ra+"",sa=Y+"",ka,D,v,aa=1,Ba,M=1,ia=wa,za=20,la,ma,Ca;this.setStyle=function(a){a=(a=a)||{};if(a.color||a.wallColor){V=K.parse(a.color||a.wallColor);Aa=V.adjustAlpha(M)+"";ra=V.adjustLightness(0.8);qa=ra.adjustAlpha(M)+"";Y=V.adjustLightness(1.2);
sa=Y.adjustAlpha(M)+""}if(a.roofColor){Y=K.parse(a.roofColor);sa=Y.adjustAlpha(M)+""}B();return this};this.geoJSON=function(a,e){w(a,e);return this};this.setCamOffset=function(a,e){la=ha+a;ma=R+e};this.setMaxZoom=function(a){za=a};this.createCanvas=function(a){F=va.createElement("canvas");F.style.webkitTransform="translate3d(0,0,0)";F.style.imageRendering="optimizeSpeed";F.style.position="absolute";F.style.pointerEvents="none";F.style.left=0;F.style.top=0;a.appendChild(F);z=F.getContext("2d");z.lineCap=
"round";z.lineJoin="round";z.lineWidth=1;try{z.mozImageSmoothingEnabled=false}catch(e){}return F};this.destroyCanvas=function(){F.parentNode.removeChild(F)};this.loadData=f;this.onMoveEnd=function(){var a=m(Z,$),e=m(Z+X,$+R);B();if(D&&(a[da]>D.n||a[ea]<D.w||e[da]<D.s||e[ea]>D.e))f()};this.onZoomEnd=function(a){Ca=false;H(a.zoom);if(ka){v=q(ka);B()}else{B();f()}};this.onZoomStart=function(){Ca=true;B()};this.render=B;this.setOrigin=function(a,e){Z=a;$=e};this.setSize=function(a,e){X=a;R=e;ha=X/2<<
0;ya=R/2<<0;la=ha;ma=R;F.width=X;F.height=R};this.setZoom=H;xa=j};l.OSMBuildings.VERSION="0.1.7a";l.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:false,alwaysInRange:true,dxSum:0,dySum:0,initialize:function(l){l=l||{};l.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize(this.name,l)},setOrigin:function(){var l=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),G=this.map.resolution,C=this.maxExtent;this.osmb.setOrigin(Math.round((l.lon-C.left)/G),Math.round((C.top-
l.lat)/G))},setMap:function(l){if(!this.map){OpenLayers.Layer.prototype.setMap(l);this.osmb=new OSMBuildings(this.options.url);this.osmb.createCanvas(this.div);this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin();this.osmb.loadData()}},removeMap:function(l){this.osmb.destroyCanvas();this.osmb=null;OpenLayers.Layer.prototype.removeMap(l)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize();this.osmb.onResize({width:this.map.size.w,height:this.map.size.h})},
moveTo:function(l,G,C){l=OpenLayers.Layer.prototype.moveTo(l,G,C);if(!C){C=parseInt(this.map.layerContainerDiv.style.left,10);var na=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-C+"px";this.div.style.top=-na+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);G?this.osmb.onZoomEnd({zoom:this.map.zoom}):this.osmb.onMoveEnd();return l},moveByPx:function(l,G){this.dxSum+=l;this.dySum+=G;var C=OpenLayers.Layer.prototype.moveByPx(l,G);this.osmb.setCamOffset(this.dxSum,
this.dySum);this.osmb.render();return C},geoJSON:function(l,G){return this.osmb.geoJSON(l,G)},setStyle:function(l){return this.osmb.setStyle(l)}});
