webpackJsonp([20],{318:function(n,t,e){"use strict";function u(n){return n&&n.__esModule?n:{default:n}}function o(){if(-1!==navigator.userAgent.indexOf("Chrome")){new r.default({router:_,store:v.default}).$mount("#app")}}var c=e(11),r=u(c),i=e(56),a=(u(i),e(111)),h=u(a),l=e(71),f=u(l),p=e(110),d=u(p),m=e(112),s=u(m),b=e(407),g=u(b),y=e(408),v=u(y),M=e(392).socket;window.socket=io.connect("http://"+M.socketIp+":"+M.socketPort),r.default.use(h.default),r.default.use(d.default),r.default.use(s.default,{name:"timeago",locale:"zh-CN",locales:{"zh-CN":e(113)}});var _=new h.default({history:!0,hashbang:!0,saveScrollPosition:!1,routes:g.default});try{_.addRoutes(e(397).default)}catch(n){}try{_.addRoutes(e(398).default)}catch(n){}try{_.addRoutes(e(399).default)}catch(n){}try{_.addRoutes(e(393).default)}catch(n){}try{_.addRoutes(e(401).default)}catch(n){}try{_.addRoutes(e(400).default)}catch(n){}try{_.addRoutes(e(405).default)}catch(n){}try{_.addRoutes(e(404).default)}catch(n){}try{_.addRoutes(e(396).default)}catch(n){}try{_.addRoutes(e(395).default)}catch(n){}try{_.addRoutes(e(402).default)}catch(n){}try{_.addRoutes(e(406).default)}catch(n){}try{_.addRoutes(e(403).default)}catch(n){}try{_.addRoutes(e(394).default)}catch(n){}_.addRoutes([{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"*",component:function(n){return e.e(1).then(function(){return n(e(578))}.bind(null,e)).catch(e.oe)}}]}]),f.default.interceptors.request.use(function(n){return n},function(n){return Promise.reject(n)}),f.default.interceptors.response.use(function(n){return"Unauthenticated"==n.data.code?_.replace("/login"):n.status,n},function(n){}),_.beforeEach(function(n,t,e){if("/"===n.path||"/login"===n.path)return void f.default.get("/api/member/login/ping").then(function(n){"OK"===n.data.code?e("/main/homepage"):e()});e()});var I=localStorage.getItem("userTheme");switch(I=I||"theme1"){case"theme1":e.e(15).then(function(n){e(575),e(574),e(697),o()}.bind(null,e)).catch(e.oe);break;case"theme2":e.e(17).then(function(n){e(576),e(698),o()}.bind(null,e)).catch(e.oe);break;case"theme3":e.e(16).then(function(n){e(577),e(699),o()}.bind(null,e)).catch(e.oe)}},392:function(n,t,e){"use strict";t.socket={socketIp:"121.196.217.220",socketPort:"3000"}},393:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"broker/account/page",component:function(n){return e.e(13).then(function(){return n(e(582))}.bind(null,e)).catch(e.oe)}},{path:"broker/prod/page",component:function(n){return e.e(13).then(function(){return n(e(583))}.bind(null,e)).catch(e.oe)}},{path:"broker/access/:tab",component:function(n){return e.e(13).then(function(){return n(e(581))}.bind(null,e)).catch(e.oe)}}]}]},394:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"cms/pc",component:function(n){return e.e(2).then(function(){return n(e(589))}.bind(null,e)).catch(e.oe)},children:[{path:"site/multipage",component:function(n){return e.e(2).then(function(){return n(e(586))}.bind(null,e)).catch(e.oe)}},{path:"site/singlepage",component:function(n){return e.e(2).then(function(){return n(e(587))}.bind(null,e)).catch(e.oe)}},{path:"site/question",component:function(n){return e.e(2).then(function(){return n(e(349))}.bind(null,e)).catch(e.oe)}},{path:"site/record",component:function(n){return e.e(2).then(function(){return n(e(350))}.bind(null,e)).catch(e.oe)}},{path:"site/navigate",component:function(n){return e.e(2).then(function(){return n(e(348))}.bind(null,e)).catch(e.oe)}},{path:"site/view",component:function(n){return e.e(2).then(function(){return n(e(351))}.bind(null,e)).catch(e.oe)}},{path:"contentDeploy/:tab",component:function(n){return e.e(2).then(function(){return n(e(347))}.bind(null,e)).catch(e.oe)}}]},{path:"cms/mob",component:function(n){return e.e(2).then(function(){return n(e(588))}.bind(null,e)).catch(e.oe)},children:[{path:"site/multipage",component:function(n){return e.e(2).then(function(){return n(e(584))}.bind(null,e)).catch(e.oe)}},{path:"site/singlepage",component:function(n){return e.e(2).then(function(){return n(e(585))}.bind(null,e)).catch(e.oe)}},{path:"site/question",component:function(n){return e.e(2).then(function(){return n(e(349))}.bind(null,e)).catch(e.oe)}},{path:"site/record",component:function(n){return e.e(2).then(function(){return n(e(350))}.bind(null,e)).catch(e.oe)}},{path:"site/navigate",component:function(n){return e.e(2).then(function(){return n(e(348))}.bind(null,e)).catch(e.oe)}},{path:"site/view",component:function(n){return e.e(2).then(function(){return n(e(351))}.bind(null,e)).catch(e.oe)}},{path:"contentDeploy/:tab",component:function(n){return e.e(2).then(function(){return n(e(347))}.bind(null,e)).catch(e.oe)}}]}]}]},395:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"comp",component:function(n){return e.e(5).then(function(){return n(e(590))}.bind(null,e)).catch(e.oe)},children:[{path:"law/:tab",component:function(n){return e.e(5).then(function(){return n(e(592))}.bind(null,e)).catch(e.oe)}},{path:"temp/risq/:tab",component:function(n){return e.e(5).then(function(){return n(e(595))}.bind(null,e)).catch(e.oe)}},{path:"temp/prof/:tab",component:function(n){return e.e(5).then(function(){return n(e(594))}.bind(null,e)).catch(e.oe)}},{path:"temp/major/:tab",component:function(n){return e.e(5).then(function(){return n(e(593))}.bind(null,e)).catch(e.oe)}},{path:"temp/vist/:tab",component:function(n){return e.e(5).then(function(){return n(e(596))}.bind(null,e)).catch(e.oe)}},{path:"temp/pisq",component:function(n){return e.e(5).then(function(){return n(e(598))}.bind(null,e)).catch(e.oe)}},{path:"define/:tab",component:function(n){return e.e(5).then(function(){return n(e(591))}.bind(null,e)).catch(e.oe)}}]},{path:"comp/pisq/prod",component:function(n){return e.e(5).then(function(){return n(e(597))}.bind(null,e)).catch(e.oe)}}]}]},396:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"customer/wechat/page",component:function(n){return e.e(11).then(function(){return n(e(604))}.bind(null,e)).catch(e.oe)}},{path:"customer/user/page",component:function(n){return e.e(11).then(function(){return n(e(603))}.bind(null,e)).catch(e.oe)}},{path:"customer/user/detail/:tab/:id",component:function(n){return e.e(11).then(function(){return n(e(602))}.bind(null,e)).catch(e.oe)}},{path:"customer/name/page",component:function(n){return e.e(11).then(function(){return n(e(600))}.bind(null,e)).catch(e.oe)}},{path:"customer/bank/page",component:function(n){return e.e(11).then(function(){return n(e(599))}.bind(null,e)).catch(e.oe)}},{path:"fundpub/temp/:tab",component:function(n){return e.e(9).then(function(){return n(e(601))}.bind(null,e)).catch(e.oe)}}]}]},397:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"ffund/arch/prod/page",component:function(n){return e.e(7).then(function(){return n(e(607))}.bind(null,e)).catch(e.oe)}},{path:"ffund/arch/inad/page",component:function(n){return e.e(7).then(function(){return n(e(605))}.bind(null,e)).catch(e.oe)}},{path:"ffund/arch/invm/page",component:function(n){return e.e(7).then(function(){return n(e(609))}.bind(null,e)).catch(e.oe)}},{path:"ffund/arch/orga/page",component:function(n){return e.e(7).then(function(){return n(e(611))}.bind(null,e)).catch(e.oe)}},{path:"ffund/arch/inad/:tab/:orid",component:function(n){return e.e(7).then(function(){return n(e(606))}.bind(null,e)).catch(e.oe)}},{path:"ffund/arch/prod/:tab/:orid",component:function(n){return e.e(7).then(function(){return n(e(608))}.bind(null,e)).catch(e.oe)}},{path:"ffund/arch/invm/:orid",component:function(n){return e.e(7).then(function(){return n(e(610))}.bind(null,e)).catch(e.oe)}},{path:"ffund/arch/orga/:tab/:orid",component:function(n){return e.e(7).then(function(){return n(e(612))}.bind(null,e)).catch(e.oe)}}]}]},398:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"ffund/dudi",component:function(n){return e.e(6).then(function(){return n(e(621))}.bind(null,e)).catch(e.oe)},children:[{path:"inad/page",component:function(n){return e.e(6).then(function(){return n(e(613))}.bind(null,e)).catch(e.oe)}},{path:"inad/detail/:tab/:id",component:function(n){return e.e(6).then(function(){return n(e(614))}.bind(null,e)).catch(e.oe)}},{path:"invm/page",component:function(n){return e.e(6).then(function(){return n(e(616))}.bind(null,e)).catch(e.oe)}},{path:"invm/detail/:tab/:id",component:function(n){return e.e(6).then(function(){return n(e(617))}.bind(null,e)).catch(e.oe)}},{path:"prod/page",component:function(n){return e.e(6).then(function(){return n(e(618))}.bind(null,e)).catch(e.oe)}},{path:"prod/detail/:tab/:id",component:function(n){return e.e(6).then(function(){return n(e(619))}.bind(null,e)).catch(e.oe)}},{path:"white/:tab",component:function(n){return e.e(6).then(function(){return n(e(620))}.bind(null,e)).catch(e.oe)}},{path:"prod/contrast/:id",component:function(n){return e.e(8).then(function(){return n(e(615))}.bind(null,e)).catch(e.oe)}}]}]}]},399:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"ffund/onrun",component:function(n){return e.e(8).then(function(){return n(e(627))}.bind(null,e)).catch(e.oe)},children:[{path:"inad/page",component:function(n){return e.e(8).then(function(){return n(e(622))}.bind(null,e)).catch(e.oe)}},{path:"inad/detail/:tab/:id",component:function(n){return e.e(8).then(function(){return n(e(623))}.bind(null,e)).catch(e.oe)}},{path:"fof/page",component:function(n){return e.e(8).then(function(){return n(e(625))}.bind(null,e)).catch(e.oe)}},{path:"fund/page",component:function(n){return e.e(8).then(function(){return n(e(626))}.bind(null,e)).catch(e.oe)}},{path:"prod/detail/:tab/:id",component:function(n){return e.e(8).then(function(){return n(e(624))}.bind(null,e)).catch(e.oe)}}]}]}]},400:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"fundpublish/company/page",component:function(n){return e.e(3).then(function(){return n(e(628))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/company/detail/:tab/:id",component:function(n){return e.e(3).then(function(){return n(e(629))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/manager/page",component:function(n){return e.e(3).then(function(){return n(e(632))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/manager/detail/:id",component:function(n){return e.e(3).then(function(){return n(e(633))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/product/tab/:tab",component:function(n){return e.e(3).then(function(){return n(e(638))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/product/detail/:tab/:id",component:function(n){return e.e(3).then(function(){return n(e(637))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/pisq/:tab",component:function(n){return e.e(3).then(function(){return n(e(634))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/investList/tab/:tab",component:function(n){return e.e(3).then(function(){return n(e(631))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/investList/detail/:tab/:id",component:function(n){return e.e(3).then(function(){return n(e(630))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/prodInvestor/page",component:function(n){return e.e(3).then(function(){return n(e(635))}.bind(null,e)).catch(e.oe)}},{path:"fundpublish/prodInvestor/detail/:tab/:id",component:function(n){return e.e(3).then(function(){return n(e(636))}.bind(null,e)).catch(e.oe)}}]}]},401:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"fundpub/prod/:tab",component:function(n){return e.e(9).then(function(){return n(e(642))}.bind(null,e)).catch(e.oe)}},{path:"fundpub/prod/:ftype/:tab/:inew/:id",component:function(n){return e.e(9).then(function(){return n(e(643))}.bind(null,e)).catch(e.oe)}},{path:"ifund/appoint/page",component:function(n){return e.e(9).then(function(){return n(e(639))}.bind(null,e)).catch(e.oe)}},{path:"ifund/entrust/page",component:function(n){return e.e(9).then(function(){return n(e(640))}.bind(null,e)).catch(e.oe)}},{path:"ifund/position/page",component:function(n){return e.e(9).then(function(){return n(e(641))}.bind(null,e)).catch(e.oe)}}]}]},402:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"member/user/manage/:tab",component:function(n){return e.e(0).then(function(){return n(e(669))}.bind(null,e)).catch(e.oe)}},{path:"member/user/detail/:tab/:id",component:function(n){return e.e(0).then(function(){return n(e(668))}.bind(null,e)).catch(e.oe)}},{path:"member/manage/detail/:tab/:id",component:function(n){return e.e(0).then(function(){return n(e(646))}.bind(null,e)).catch(e.oe)}},{path:"member/user/staff/detail/:id",component:function(n){return e.e(0).then(function(){return n(e(670))}.bind(null,e)).catch(e.oe)}},{path:"member/audit",component:function(n){return e.e(0).then(function(){return n(e(647))}.bind(null,e)).catch(e.oe)},children:[{path:"prof",component:function(n){return e.e(0).then(function(){return n(e(652))}.bind(null,e)).catch(e.oe)}},{path:"person/:tab",component:function(n){return e.e(0).then(function(){return n(e(651))}.bind(null,e)).catch(e.oe)}},{path:"orga/:tab",component:function(n){return e.e(0).then(function(){return n(e(650))}.bind(null,e)).catch(e.oe)}},{path:"invest",component:function(n){return e.e(0).then(function(){return n(e(649))}.bind(null,e)).catch(e.oe)}},{path:"ask/:tab",component:function(n){return e.e(0).then(function(){return n(e(648))}.bind(null,e)).catch(e.oe)}}]},{path:"member",component:function(n){return e.e(0).then(function(){return n(e(644))}.bind(null,e)).catch(e.oe)},children:[{path:"adviser/colloca/:tab",component:function(n){return e.e(0).then(function(){return n(e(645))}.bind(null,e)).catch(e.oe)}}]},{path:"member/comp",component:function(n){return e.e(0).then(function(){return n(e(656))}.bind(null,e)).catch(e.oe)},children:[{path:"law/:tab",component:function(n){return e.e(0).then(function(){return n(e(658))}.bind(null,e)).catch(e.oe)}},{path:"temp/risq/:tab",component:function(n){return e.e(0).then(function(){return n(e(661))}.bind(null,e)).catch(e.oe)}},{path:"temp/prof/:tab",component:function(n){return e.e(0).then(function(){return n(e(660))}.bind(null,e)).catch(e.oe)}},{path:"temp/major/:tab",component:function(n){return e.e(0).then(function(){return n(e(659))}.bind(null,e)).catch(e.oe)}},{path:"temp/vist/:tab",component:function(n){return e.e(0).then(function(){return n(e(662))}.bind(null,e)).catch(e.oe)}},{path:"define/:tab",component:function(n){return e.e(0).then(function(){return n(e(657))}.bind(null,e)).catch(e.oe)}}]},{path:"member/contact",component:function(n){return e.e(0).then(function(){return n(e(663))}.bind(null,e)).catch(e.oe)},children:[{path:"consult",component:function(n){return e.e(0).then(function(){return n(e(664))}.bind(null,e)).catch(e.oe)}},{path:"msg",component:function(n){return e.e(0).then(function(){return n(e(665))}.bind(null,e)).catch(e.oe)}},{path:"sms",component:function(n){return e.e(0).then(function(){return n(e(666))}.bind(null,e)).catch(e.oe)}}]},{path:"member/userSession/:tab",component:function(n){return e.e(0).then(function(){return n(e(667))}.bind(null,e)).catch(e.oe)}},{path:"member/commu",component:function(n){return e.e(0).then(function(){return n(e(653))}.bind(null,e)).catch(e.oe)},children:[{path:"message/:tab",component:function(n){return e.e(0).then(function(){return n(e(655))}.bind(null,e)).catch(e.oe)}},{path:"consult/:tab",component:function(n){return e.e(0).then(function(){return n(e(654))}.bind(null,e)).catch(e.oe)}}]}]}]},403:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"user/detail/:tab",component:function(n){return e.e(12).then(function(){return n(e(672))}.bind(null,e)).catch(e.oe)}},{path:"user/team/page",component:function(n){return e.e(12).then(function(){return n(e(673))}.bind(null,e)).catch(e.oe)}},{path:"user/log/:tab",component:function(n){return e.e(12).then(function(){return n(e(671))}.bind(null,e)).catch(e.oe)}}]}]},404:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"myclients/mjcc/page/:tab",component:function(n){return e.e(14).then(function(){return n(e(674))}.bind(null,e)).catch(e.oe)}}]}]},405:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"raise/calendar",component:function(n){return e.e(4).then(function(){return n(e(675))}.bind(null,e)).catch(e.oe)}},{path:"raise/plan/page/:tab",component:function(n){return e.e(4).then(function(){return n(e(684))}.bind(null,e)).catch(e.oe)}},{path:"raise/point/page/:tab",component:function(n){return e.e(4).then(function(){return n(e(685))}.bind(null,e)).catch(e.oe)}},{path:"raise/indent/page/:tab",component:function(n){return e.e(4).then(function(){return n(e(682))}.bind(null,e)).catch(e.oe)}},{path:"raise/position",component:function(n){return e.e(4).then(function(){return n(e(689))}.bind(null,e)).catch(e.oe)},children:[{path:"security/:tab",component:function(n){return e.e(0).then(function(){return n(e(687))}.bind(null,e)).catch(e.oe)}},{path:"stock/:tab",component:function(n){return e.e(0).then(function(){return n(e(688))}.bind(null,e)).catch(e.oe)}},{path:"cred/:tab",component:function(n){return e.e(0).then(function(){return n(e(686))}.bind(null,e)).catch(e.oe)}}]},{path:"raise/nav/page",component:function(n){return e.e(4).then(function(){return n(e(683))}.bind(null,e)).catch(e.oe)}},{path:"raise/vist/returnVist/:tab",component:function(n){return e.e(4).then(function(){return n(e(691))}.bind(null,e)).catch(e.oe)}},{path:"raise/dividend",component:function(n){return e.e(0).then(function(){return n(e(677))}.bind(null,e)).catch(e.oe)},children:[{path:"security/:tab",component:function(n){return e.e(0).then(function(){return n(e(679))}.bind(null,e)).catch(e.oe)}},{path:"stock/:tab",component:function(n){return e.e(0).then(function(){return n(e(680))}.bind(null,e)).catch(e.oe)}},{path:"creditor/:tab",component:function(n){return e.e(0).then(function(){return n(e(678))}.bind(null,e)).catch(e.oe)}}]},{path:"raise/fee/page",component:function(n){return e.e(4).then(function(){return n(e(681))}.bind(null,e)).catch(e.oe)}},{path:"raise/debt/page/:tab",component:function(n){return e.e(14).then(function(){return n(e(676))}.bind(null,e)).catch(e.oe)}},{path:"raise/report/page",component:function(n){return e.e(4).then(function(){return n(e(690))}.bind(null,e)).catch(e.oe)}}]}]},406:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"team/account/page",component:function(n){return e.e(10).then(function(){return n(e(695))}.bind(null,e)).catch(e.oe)}},{path:"team/detail/:tab",component:function(n){return e.e(10).then(function(){return n(e(696))}.bind(null,e)).catch(e.oe)}},{path:"team/log/:tab",component:function(n){return e.e(10).then(function(){return n(e(694))}.bind(null,e)).catch(e.oe)}},{path:"team/doc/page",component:function(n){return e.e(10).then(function(){return n(e(693))}.bind(null,e)).catch(e.oe)}},{path:"team/dict/page",component:function(n){return e.e(10).then(function(){return n(e(692))}.bind(null,e)).catch(e.oe)}}]}]},407:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/",redirect:"/login"},{path:"/login",component:function(n){return e.e(19).then(function(){return n(e(580))}.bind(null,e)).catch(e.oe)}},{path:"/main",component:function(n){return e.e(1).then(function(){return n(e(10))}.bind(null,e)).catch(e.oe)},children:[{path:"homepage",component:function(n){return e.e(1).then(function(){return n(e(579))}.bind(null,e)).catch(e.oe)}}]}]},408:function(n,t,e){"use strict";function u(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(11),c=u(o),r=e(56),i=u(r);c.default.use(i.default);var a=new i.default.Store({state:{oCurrUser:{userInfo:{},userName:"",userId:"",wsCode:0,teamId:"",teamCode:"",rank:"",defaultTeamId:"",adId:""},aDepartmentList:[],aMemberList:[],collapseMainMenu:!1,userRight:{"/ffund/arch":!1,"/ffund/onrun":!1,"/ffund/dudi":!1,"/ffund/broker":!1,"/ffund/ifund":!1},applyBin:{}},mutations:{setUserInfo:function(n,t){t.userInfo&&(n.oCurrUser.userInfo=t.userInfo),t.userName&&(n.oCurrUser.userName=t.userName),t.userId&&(n.oCurrUser.userId=t.userId),t.wsCode&&(n.oCurrUser.wsCode=t.wsCode),t.teamId&&(n.oCurrUser.teamId=t.teamId),t.teamCode&&(n.oCurrUser.teamCode=t.teamCode),t.rank&&(n.oCurrUser.rank=t.rank),t.defaultTeamId&&(n.oCurrUser.defaultTeamId=t.defaultTeamId),t.adId&&(n.oCurrUser.adId=t.adId)},setDepartmentList:function(n,t){n.aDepartmentList=t.aDepartmentList},setMemberList:function(n,t){n.aMemberList=t.aMemberList},setCollapseMainMenu:function(n,t){n.collapseMainMenu=t.collapseMainMenu},setUserRight:function(n,t){n.userRight=t.userRight},setApplyBin:function(n,t){n.applyBin=t.applyBin}},actions:{setUserInfo:function(n,t){n.commit("setUserInfo",t)},setDepartmentList:function(n,t){n.commit("setDepartmentList",t)},setMemberList:function(n,t){n.commit("setMemberList",t)},setCollapseMainMenu:function(n,t){n.commit("setCollapseMainMenu",t)},setUserRight:function(n,t){n.commit("setUserRight",t)},setApplyBin:function(n,t){n.commit("setApplyBin",t)}},strict:!0});t.default=a},573:function(n,t,e){n.exports=e(318)}},[573]);