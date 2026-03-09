System.register("chunks:///_virtual/main",["./SwipeController.ts","./VideoOynatici.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SwipeController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,r,a,s,l,u,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,s=e.input,l=e.Input,u=e.isValid,c=e.Vec3,p=e.Component}],execute:function(){var h,f,y,d,v;r._RF.push({},"1fb6dohhxNOWoj2vOuQSIhB","SwipeController",void 0);var m=a.ccclass,b=a.property;e("SwipeController",m("SwipeController")((y=t((f=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"speed",y,o(t)),n(t,"maxY",d,o(t)),n(t,"minY",v,o(t)),t}i(t,e);var r=t.prototype;return r.onLoad=function(){s.on(l.EventType.TOUCH_MOVE,this.onTouchMove,this)},r.onTouchMove=function(e){if(u(this.node)){var t=e.getDelta(),i=this.node.position,n=i.y+t.y*this.speed;n>this.maxY&&(n=this.maxY),n<this.minY&&(n=this.minY),this.node.setPosition(new c(i.x,n,i.z))}},r.onDestroy=function(){s.off(l.EventType.TOUCH_MOVE,this.onTouchMove,this)},t}(p)).prototype,"speed",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),d=t(f.prototype,"maxY",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),v=t(f.prototype,"minY",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1e3}}),h=f))||h);r._RF.pop()}}}));

System.register("chunks:///_virtual/VideoOynatici.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,o,a,n,r,s,c,l,y;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,r=e._decorator,s=e.VideoPlayer,c=e.Node,l=e.sys,y=e.Component}],execute:function(){var d,u,h,p,v,P,f;n._RF.push({},"265b5Wv+EdNMqZ8nUx4kj3h","VideoOynatici",void 0);var V=r.ccclass,k=r.property;e("VideoOynatici",(d=V("VideoOynatici"),u=k({type:s}),h=k({type:c}),d((P=i((v=function(e){function i(){for(var i,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return i=e.call.apply(e,[this].concat(n))||this,o(i,"VideoPlayer",P,a(i)),o(i,"PackshotCanvas",f,a(i)),i}t(i,e);var n=i.prototype;return n.start=function(){this.VideoPlayer&&(this.VideoPlayer.node.on("completed",this.videoBitti,this),this.VideoPlayer.node.active=!1),this.PackshotCanvas&&(this.PackshotCanvas.active=!1)},n.videoyuBaslat=function(){this.VideoPlayer&&(this.VideoPlayer.node.active=!0,this.VideoPlayer.play())},n.videoBitti=function(){this.VideoPlayer&&(this.VideoPlayer.node.active=!1),this.PackshotCanvas&&(this.PackshotCanvas.active=!0)},n.marketeGit=function(){console.log("Market açılıyor..."),l.openURL("https://www.google.com")},i}(y)).prototype,"VideoPlayer",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=i(v.prototype,"PackshotCanvas",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=v))||p));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});