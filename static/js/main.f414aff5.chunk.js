(this.webpackJsonpothello=this.webpackJsonpothello||[]).push([[0],{46:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);n(1);var r=n(16),c=n.n(r),a=(n(46),n(3)),o=n(0);var s=function(e){return Object(o.jsx)("div",{onClick:e.onReset,className:"reset-btn",children:"Reset"})},i=n(13),l=n(2),u=n(25),b=function(e,t,n,r){var c=e.map((function(e){return e.slice()}));g(c,{row:t,col:n,player:r}).forEach((function(e){c[e[0]][e[1]]=r})),c[t][n]=r;for(var a=0;a<8;a++)for(var o=0;o<8;o++)2===c[a][o]&&(c[a][o]=-1);return c},j=function(e,t,n){var r,c=1^t,a=Object(i.a)(n),o=w(e,c);return o.length?(a[c]=!1,o.forEach((function(t){e[t[0]][t[1]]=2}))):a[c]=!0,r=!!(a[0]&&a[1]||E(e)),[e,c,a,r]},d={row:-1,col:0},p={row:1,col:0},m={row:0,col:-1},O={row:0,col:1},h={row:-1,col:-1},f={row:1,col:-1},x={row:-1,col:1},y={row:1,col:1},v=function(e,t,n){for(var r=t.row,c=t.col,a=t.player,o=n.row,s=n.col,i=[];;){if((r+=o)>=8||r<0)return[];if((c+=s)>=8||c<0)return[];var l=e[r][c];if(l===a)return i;if(-1===l||2===l)return[];i.push([r,c])}},g=function(e,t){var n=[];return n.push.apply(n,v(e,t,d)),n.push.apply(n,v(e,t,p)),n.push.apply(n,v(e,t,m)),n.push.apply(n,v(e,t,O)),n.push.apply(n,v(e,t,h)),n.push.apply(n,v(e,t,f)),n.push.apply(n,v(e,t,x)),n.push.apply(n,v(e,t,y)),n},w=function(e,t){for(var n=[],r=0;r<8;r++)for(var c=0;c<8;c++)-1===e[r][c]&&g(e,{row:r,col:c,player:t}).length&&n.push([r,c]);return n},N=function(e){var t=[0,0,64];return e.forEach((function(e){return e.forEach((function(e){0!==e&&1!==e||(t[e]+=1)}))})),t[2]-=t[0],t[2]-=t[1],{b:t[0],w:t[1],e:t[2]}},E=function(e){var t=64,n=new Set;return e.forEach((function(e){return e.forEach((function(e){0!==e&&1!==e||(t-=1,n.add(e))}))})),!t||1===n.length},S=function(e,t){return"pass"in t?{player:e.player,action:"Pass",undo:e}:{player:e.player,action:(n=t.row,r=t.col,String.fromCharCode(65+r)+(n+1)),undo:e};var n,r},k="board/PLAY",P="board/PASS",C="board/UNDO",_="board/END",T="board/RESET",R="multi/CREATE",D="multi/JOIN",I="multi/OPPONENT",A="multi/EXIT",L="multi/OPPONENTEXIT",X=function(e,t,n){return{type:k,row:e,col:t,player:n}},B=function(e){return{type:P,player:e}},W={board:[[-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,2,-1,-1,-1],[-1,-1,-1,0,1,2,-1,-1],[-1,-1,2,1,0,-1,-1,-1],[-1,-1,-1,2,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1]],player:0,count:{b:2,w:2,e:60},canPass:[!1,!1],isEnd:!1},J={user:-1,name:"",opponent:"",room:""},U={history:[],present:W,multi:J};var M={reset:function(){return{type:T}}},F=Object(a.b)((function(e){return{}}),M)((function(e){return Object(o.jsx)(s,{onReset:function(){return e.reset()}})}));var H=function(e){return Object(o.jsx)("div",{onClick:e.onExit,className:"pass-btn",children:"Exit"})},V=n(41),G=n.n(V),Y=n(18),q="game/SELECT",z={game:-1},K=Object(Y.a)({gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{game:t.game};default:return e}},boardState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var n=b(e.present.board,t.row,t.col,t.player),r=j(n,t.player,e.present.canPass),c=Object(u.a)(r,4),a=c[0],o=c[1],s=c[2],d=c[3],p=S(e.present,{row:t.row,col:t.col}),m=N(a);return Object(l.a)(Object(l.a)({},e),{},{history:[p].concat(Object(i.a)(e.history)),present:{board:a,player:o,count:m,canPass:s,isEnd:d}});case P:console.log((1===t.player?"Black":"White")+" pass!!");var O=e.present.board.map((function(e){return e.slice()})),h=j(O,t.player,e.present.canPass),f=Object(u.a)(h,4),x=f[0],y=f[1],v=f[2],g=f[3],w=S(e.present,{pass:"pass"});return Object(l.a)(Object(l.a)({},e),{},{history:[w].concat(Object(i.a)(e.history)),present:Object(l.a)(Object(l.a)({},e.present),{},{board:x,player:y,canPass:v,isEnd:g})});case C:console.log("undo");var E=e.history.slice(),X=E.shift();return Object(l.a)(Object(l.a)({},e),{},{history:E,present:X.undo});case _:return console.log("end"),Object(l.a)(Object(l.a)({},e),{},{present:Object(l.a)(Object(l.a)({},e.present),{},{isEnd:!0})});case T:return console.log("reset"),Object(l.a)(Object(l.a)({},e),{},{history:[],present:W});case R:return Object(l.a)(Object(l.a)({},e),{},{multi:Object(l.a)(Object(l.a)({},e.multi),{},{user:t.player.player,name:t.player.name,room:t.room})});case D:return Object(l.a)(Object(l.a)({},e),{},{multi:Object(l.a)(Object(l.a)({},e.multi),{},{user:t.player.player,name:t.player.name,room:t.room,opponent:t.opponent})});case I:return Object(l.a)(Object(l.a)({},e),{},{multi:Object(l.a)(Object(l.a)({},e.multi),{},{opponent:t.opponent})});case A:return{history:[],present:W,multi:J};case L:return{history:[],present:W,multi:Object(l.a)(Object(l.a)({},e.multi),{},{user:0,opponent:""})};default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Z=Object(Y.b)(K,Q),$=G()("https://15.165.120.63:3001");$.on("create",(function(e){var t,n;console.log("create : "+e),Z.dispatch((t={player:0,name:e.name},n=e.room,{type:R,player:t,room:n}))})),$.on("join",(function(e){console.log("join : "+e),Z.dispatch(function(e,t,n){return{type:D,player:e,opponent:t,room:n}}({player:1,name:e.name},e.opponent,e.roomId))})),$.on("newPlayer",(function(e){Z.dispatch({type:I,opponent:e})})),$.on("eMsg",(function(e){console.log(e)})),$.on("play",(function(e){if("click"===e.action.type)Z.dispatch(X(e.action.row,e.action.col,e.player)),console.log("opponent play");else{if("pass"!==e.action.type)return;Z.dispatch(B(e.player)),console.log("opponent pass")}})),$.on("opponentExit",(function(){Z.dispatch({type:L})}));var ee=$;var te={exit:function(){return{type:A}}},ne=Object(a.b)((function(e){return{room:e.boardState.multi.room,user:e.boardState.multi.user}}),te)((function(e){return Object(o.jsx)(H,{onExit:function(){return e.exit(),void ee.emit("exit",{room:e.room,player:e.user})}})}));var re=function(e){return Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("div",{className:"modal-container",children:[Object(o.jsx)("div",{className:"modal-winner",children:0===e.winner?"Winner : "+e.name.b:1===e.winner?"Winner : "+e.name.w:-1===e.winner?"Draw":""}),Object(o.jsxs)("div",{className:"modal-result",children:[Object(o.jsxs)("div",{className:"modal-item",children:[Object(o.jsx)("div",{className:"user-name",children:e.name.b}),Object(o.jsx)("div",{className:"count-block",children:e.count.b})]}),Object(o.jsxs)("div",{className:"modal-item",children:[Object(o.jsx)("div",{className:"user-name",children:e.name.w}),Object(o.jsx)("div",{className:"count-block",children:e.count.w})]})]}),0===e.game?Object(o.jsx)(F,{}):1===e.game?Object(o.jsx)(ne,{}):""]})})};var ce=Object(a.b)((function(e){return{isEnd:e.boardState.present.isEnd,count:e.boardState.present.count,game:e.gameState.game,multi:e.boardState.multi}}),{})((function(e){return e.isEnd?Object(o.jsx)(re,{isEnd:e.isEnd,count:e.count,winner:e.count.b>e.count.w?0:e.count.b<e.count.w?1:-1,name:0===e.game?{b:"Black",w:"White"}:0===e.multi.user?{b:e.multi.name,w:e.multi.opponent}:{b:e.multi.opponent,w:e.multi.name},game:e.game}):""}));var ae=function(e){return Object(o.jsx)("div",{onClick:e.onPass,className:"pass-btn",children:"PASS!"})};var oe={pass:B},se=Object(a.b)((function(e){return{player:e.boardState.present.player,canPass:e.boardState.present.canPass,isEnd:e.boardState.present.isEnd}}),oe)((function(e){return!e.isEnd&&e.canPass[e.player]?Object(o.jsx)(ae,{onPass:function(){return e.pass(e.player)}}):null}));var ie=function(e){return Object(o.jsx)("div",{onClick:e.onPass,className:"pass-btn",children:"Undo"})};var le={undo:function(){return{type:C}}},ue=Object(a.b)((function(e){return{history:e.boardState.history}}),le)((function(e){return 0!==e.history.length?Object(o.jsx)(ie,{onPass:function(){return e.undo()}}):Object(o.jsx)(ie,{onPass:null})}));var be=function(e){var t,n;return 0===e.player?(t="profile profile--black profile--turn",n="profile profile--white"):1===e.player?(t="profile profile--black",n="profile profile--white profile--turn"):(t="profile profile--black",n="profile profile--white"),Object(o.jsxs)("div",{className:"user-board",children:[Object(o.jsxs)("div",{className:t,children:[Object(o.jsx)("div",{className:"user-name",children:e.name.b}),Object(o.jsx)("div",{className:"count-block",children:e.count.b})]}),Object(o.jsxs)("div",{className:"btn-container",children:[0===e.game?Object(o.jsx)(ue,{}):null,Object(o.jsx)(se,{})]}),Object(o.jsx)("div",{className:n,children:""!==e.name.w?[Object(o.jsx)("div",{className:"user-name",children:e.name.w},"user-name"),Object(o.jsx)("div",{className:"count-block",children:e.count.w},"count-block")]:"\ub300\uae30"})]})};var je={end:function(){return{type:_}}},de=Object(a.b)((function(e){return{board:e.boardState.present.board,player:e.boardState.present.player,isEnd:e.boardState.present.isEnd,count:e.boardState.present.count,game:e.gameState.game,multi:e.boardState.multi}}),je)((function(e){return Object(o.jsx)(be,{count:e.count,name:0===e.game?{b:"Black",w:"White"}:0===e.multi.user?{b:e.multi.name,w:e.multi.opponent}:{b:e.multi.opponent,w:e.multi.name},isEnd:e.isEnd,player:e.player,game:e.game})}));var pe=function(e){var t;switch(e.value){case-1:t="";break;case 0:t=Object(o.jsx)("span",{className:"dot color--black"});break;case 1:t=Object(o.jsx)("span",{className:"dot color--white"});break;case 2:t=e.turn?Object(o.jsx)("span",{className:"dot--small color--gray"}):""}return Object(o.jsx)("td",{onClick:2===e.value&&e.turn?e.OnClick:function(){},children:Object(o.jsx)("div",{className:"dot-container",children:t})})};var me={play:X},Oe=Object(a.b)((function(e){return{game:e.gameState.game,board:e.boardState.present.board,turn:e.boardState.present.player,multi:e.boardState.multi}}),me)((function(e){return Object(o.jsx)(pe,{value:e.board[e.row][e.col],OnClick:function(){e.play(e.row,e.col,e.turn),1===e.game&&ee.emit("play",{player:e.turn,room:e.multi.room,action:{type:"click",row:e.row,col:e.col}})},row:e.row,col:e.col,turn:0===e.game||1===e.game&&""!==e.multi.opponent&&e.turn===e.multi.user})}));var he=function(e){e.board,e.onPlay;for(var t=[],n=0;n<8;n++)t[n]=n;for(var r=[],c=0;c<8;c++)r[c]=c;var a=Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{}),Object(o.jsx)("td",{children:"A"}),Object(o.jsx)("td",{children:"B"}),Object(o.jsx)("td",{children:"C"}),Object(o.jsx)("td",{children:"D"}),Object(o.jsx)("td",{children:"E"}),Object(o.jsx)("td",{children:"F"}),Object(o.jsx)("td",{children:"G"}),Object(o.jsx)("td",{children:"H"})]}),s=t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e+1}),r.map((function(t){return Object(o.jsx)(Oe,{row:e,col:t},t)}))]},e)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:a}),Object(o.jsx)("tbody",{children:s})]})})};var fe=Object(a.b)((function(e){return{board:e.boardState.present.board}}),{})((function(e){return Object(o.jsx)(he,{board:e.board})}));var xe=function(e){var t=e.histories;return Object(o.jsxs)("div",{className:"history",children:[Object(o.jsx)("div",{className:"history--title",children:"History"}),Object(o.jsx)("div",{id:"abc",className:"history--container",children:t.map((function(e){return 0===e.player?Object(o.jsx)("div",{className:"history--black history--block",children:e.action}):Object(o.jsx)("div",{className:"history--white history--block",children:e.action})}))})]})};var ye=Object(a.b)((function(e){return{history:e.boardState.history}}),{})((function(e){return Object(o.jsx)(xe,{histories:e.history})}));var ve=Object(a.b)((function(e){return{player:e.boardState.present.player,multi:e.boardState.multi}}),{})((function(e){var t="",n="";return""!==e.multi.room?Object(o.jsxs)("div",{children:[Object(o.jsx)(ce,{}),Object(o.jsx)("div",{className:"game-title",children:"Othello Multi"}),Object(o.jsx)("div",{className:"room-info",children:"Room : "+e.multi.room}),Object(o.jsxs)("div",{className:"game-content",children:[Object(o.jsx)(de,{}),Object(o.jsx)(fe,{})]}),Object(o.jsx)("div",{children:Object(o.jsx)(ye,{})}),Object(o.jsx)(ne,{})]}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{children:["\uc774\ub984",Object(o.jsx)("input",{type:"text",onChange:function(e){t=e.target.value}})]}),Object(o.jsxs)("label",{children:["\ubc29 \ucf54\ub4dc",Object(o.jsx)("input",{type:"text",onChange:function(e){n=e.target.value}})]}),Object(o.jsxs)("div",{className:"btn-container",children:[Object(o.jsx)("div",{className:"room-btn",onClick:function(){""!==t?ee.emit("login",{name:t,type:"create"}):console.log("\uba48\ucdb0! \uc774\ub984\uc774 \uc5c6\ub2e4!")},children:"Create Room"}),Object(o.jsx)("div",{className:"room-btn",onClick:function(){""!==t&&""!==n?ee.emit("login",{name:t,room:n,type:"join"}):console.log("\uba48\ucdb0! \uc774\ub984\uc774\ub098 \ubc29 \ucf54\ub4dc \ube44\uc5b4\uc788\ub2e4!")},children:"Join Room"})]})]})}));var ge={select:function(e){return{type:q,game:e}}},we=Object(a.b)((function(e){return{game:e.gameState.game}}),ge)((function(e){var t;switch(e.game){case-1:t=Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{onClick:function(){return e.select(0)},children:"Local"}),Object(o.jsx)("div",{onClick:function(){return e.select(1)},children:"Multi"})]});break;case 0:t=Object(o.jsxs)("div",{children:[Object(o.jsx)(ce,{}),Object(o.jsx)("div",{className:"game-title",children:"Othello Local"}),Object(o.jsxs)("div",{className:"game-content",children:[Object(o.jsx)(de,{}),Object(o.jsx)(fe,{})]}),Object(o.jsx)("div",{children:Object(o.jsx)(ye,{})})]});break;case 1:t=Object(o.jsx)(ve,{})}return Object(o.jsx)("div",{children:t})}));var Ne=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(we,{})})};c.a.render(Object(o.jsx)(a.a,{store:Z,children:Object(o.jsx)(Ne,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.f414aff5.chunk.js.map