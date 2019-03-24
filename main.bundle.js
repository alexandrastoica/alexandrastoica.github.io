webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__broccoli_broccoli_component__ = __webpack_require__("./src/app/broccoli/broccoli.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__potatocon_potatocon_component__ = __webpack_require__("./src/app/potatocon/potatocon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deat_deat_component__ = __webpack_require__("./src/app/deat/deat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'broccoli', component: __WEBPACK_IMPORTED_MODULE_3__broccoli_broccoli_component__["a" /* BroccoliComponent */] },
    { path: 'deatapp', component: __WEBPACK_IMPORTED_MODULE_5__deat_deat_component__["a" /* DeatComponent */] },
    { path: 'potatocon', component: __WEBPACK_IMPORTED_MODULE_4__potatocon_potatocon_component__["a" /* PotatoconComponent */] },
    { path: '**', redirectTo: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n<router-outlet></router-outlet>\n</main>\n\n<footer>\n  Crafted with ❤️ in Angular.<br />\n  © 2019 Alexandra Stoica. All Rights Reserved.\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Home';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__broccoli_broccoli_component__ = __webpack_require__("./src/app/broccoli/broccoli.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__deat_deat_component__ = __webpack_require__("./src/app/deat/deat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__potatocon_potatocon_component__ = __webpack_require__("./src/app/potatocon/potatocon.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__broccoli_broccoli_component__["a" /* BroccoliComponent */],
                __WEBPACK_IMPORTED_MODULE_8__deat_deat_component__["a" /* DeatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__potatocon_potatocon_component__["a" /* PotatoconComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/broccoli/broccoli.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"flex\">\n  <a routerLink=\"/\" routerLinkActive=\"active\">\n    <i class=\"fas fa-long-arrow-alt-left\"></i>\n    Home\n  </a>\n</nav>\n\n<section class=\"title\">\n  <h1>Broccoli</h1>\n  <h2>An Exploratory Concept To Empower The Vegan Community In London</h2>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img src=\"./assets/img/broccoli/main_figure.png\" srcset=\"./assets/img/broccoli/main_figure.png\" alt=\"Broccoli Main Figure\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>Context</h3>\n  <p>\n    Broccoli was designed as part of the CHI Student Design Competition 2018. For this, we had to use user-centred design approaches to design new ways to support, empower and engage communities. The team and I focused on the London vegan community and adopted an iterative design approach as well as different research methods to ensure our product fits the community needs through constant user feedback.\n  </p>\n</section>\n\n\n<section class=\"single-column\">\n  <h3>My Role</h3>\n  <ul>\n      <li> Managed tasks and meetings as team leader </li>\n      <li> Requirements gathering </li>\n      <li> Created design solutions </li>\n      <li> Applied user-centred evaluation techniques on low-fidelity and high-fidelity prototypes </li>\n      <li> Conducted usability tests </li>\n      <li> Reported findings </li>\n  </ul>\n</section>\n\n<section class=\"single-column\">\n  <h3>Initial Research</h3>\n  <p>\n    The initial research consisted of secondary research and working with existing sources. We created affinity diagrams, mind maps and proto-personas.\n    Affinity diagram of secondary research done with the group with three main themes: veganism, community and engagement.\n    From all this we found that we can leverage gamification such as implementing challenges or achievements to motivate the user to stay active. Furthermore, technology such as augmented-reality (AR), customisable avatars and location-based interaction were proven to encourage users to engage.\n  </p>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img src=\"./assets/img/broccoli/affinity_diagram.jpg\" srcset=\"./assets/img/broccoli/affinity_diagram.jpg\" alt=\"Affinity Diagram\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>User Research and Findings</h3>\n  <p>\n    From surveying 70 participants during a vegan festival (VegFest) in person, we found that the London vegans are mostly new to the lifestyle and within the age range of 18-35. We also conducted contextual inquiry to gain insight about how they use technology to engage with their lifestyle and community.\n    Our research suggested that London vegans believed that ethical reasons for animal welfare was a strong reason for going vegan, followed by environmental impact and personal health reasons. Furthermore, we learned that vegans relied on technology (i.e., applications, online platforms, social media) for finding food recommendations and also learning relevant information from community members.\n    Many vegans feel primarily motivated to sustain a vegan lifestyle by seeing their impact on other living beings and also learning new ways to live ethically. Although the London vegan community used various means of technologies to engage, there was a need for a unified platform.\n  </p>\n</section>\n\n<section class=\"single-column\">\n  <h3>Initial Design</h3>\n  <p>\n    Since a majority of our participants stated that their main motivation factors are seeing their impact in some capacity and learning new ways of living ethically, initial brainstorming centred on two particular notions: (1) the need for ubiquitous technology and unified platform of getting relevant information on demand, and (2) the visualisation of one’s impact (i.e., interacting with animals) as they engage with their lifestyle.\n    Because our studies showed that the vegan community relies heavily on technology to find information, a mobile application was most suitable as smartphones are ubiquitous in our day-to-day lives and the majority of our demographic can incorporate the application into their routines.\n  </p>\n  <p>\n    We focused on three main features within our app:\n  </p>\n  <ul>\n    <li><b>Exploratory View:</b> we chose this as our centre of interaction where community-generated content will be displayed on a map based on current location or a searched area in London.</li>\n    <li><b>Augmented Reality (AR):</b> offers a real-world perception and interaction, allowing users to view a real environment with augmented objects, with research suggesting a huge potential in engaging people for concept-learning in education settings and visualising products for consumers.</li>\n    <li><b>Avatar:</b> to increase engagement and feeling of involvement, each user will have a customisable avatar representing an animal, vegetable or fruit whose mood changes depending on how much they engage with the community through the app (i.e., attending events, rating businesses).</li>\n  </ul>\n</section>\n\n<section class=\"single-column\">\n  <h3>Storyboarding</h3>\n  <p>\n    We created some sketches to help our ideation process. As there was a need of a ubiquitous, unified platform, we decided to create a mobile app. I created some storyboards to help visualise how our users would interact with our product.\n  </p>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img srcset=\"./assets/img/broccoli/storyboard.png\" src=\"./assets/img/broccoli/storyboard.png\" alt=\"Storyboarding\"/>\n  </picture>\n</section>\n\n\n<section class=\"single-column\">\n  <h3>AR Ideation</h3>\n  <p>\n    One of the challenges was to test the augmented reality (AR). Because actual implementation was not possible, initially, sketching was used to get quick feedback. Some example features are below.\n  </p>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img srcset=\"./assets/img/broccoli/ar_ideation.png\" src=\"./assets/img/broccoli/ar_ideation.png\" alt=\"AR sketches\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <p>\n    From left to right: <br />\n    <b>AR Challenge Concept</b>: a member of community can set challenges which the user can get based on location. A challenge can turn into personal goals and when achieved, a new animal will be rescued.\n    <i>*The challenges later turned into personal goals, due to community feedback.</i> <br />\n    <b>Stats view in AR</b>: because the community wanted to have more visibility to their environmental impact, we introduced statistics which are displayed at a location. The user can take a photo and share it with the community. <br />\n    <b>Share with AR</b>: the user can share the animals rescued from the AR by taking a picture. They can also add text, and location is added automatically. Once they tap share, the new post is on the exploration map.\n  </p>\n</section>\n\n\n<section class=\"single-column\">\n  <h3>Expert Evaluations</h3>\n  <p>\n    I created a few wireframes of our mobile app views from sketches to  more high-fidelity user interfaces. As a team, we conducted heuristic evaluation and cognitive walkthrough on them.\n  </p>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img srcset=\"./assets/img/broccoli/paper_wireframes.png\" src=\"./assets/img/broccoli/paper_wireframes.png\" alt=\"Paper Wireframes\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <p>\n    Following expert evaluation, I changed the tutorial on the first page to a preview of the app and added the tutorial at the end of the first login action, which the user can skip and resume from the app later. I added better spacing and grouping to the input fields for visual clarity and color and underline for links for accessibility.  Headers were also added to follow some of the iOS guidelines.\n  </p>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img srcset=\"./assets/img/broccoli/wireframes.png\" src=\"./assets/img/broccoli/wireframes.png\" alt=\"Wireframes\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>User Evaluation</h3>\n  <p>\n    Applying low-fidelity techniques for rapid prototyping, we built a paper-prototype. Six participants were recruited at a vegan market and asked to navigate the different views and add posts. We encouraged participants to think-aloud as we wanted to gain immediate thoughts and concerns of specific areas of the application. We wanted to learn the following:\n  </p>\n  <ul>\n    <li>Evaluate clarity of overall design.</li>\n    <li>Assess the ease of performing core tasks (i.e., select a point of interest from the map and interact with the functionality).</li>\n    <li>Decide on whether the usage of AR is effective in displaying the user’s visual impact.</li>\n  </ul>\n  <p>\n    Although this reinforced our main features, it helped establish what in particular is important to the users and what should be further addressed:\n  </p>\n  <p>\n    Firstly, we added more focus and priority to improving the AR functionality and generally making it more functional by adding a stats perspective where users’ surroundings are populated with facts about their environmental impact.\n  </p>\n  <p>\n    Secondly, we changed the point-based rating system from 0 to 5, because we do not want businesses or users to feel competitive in a negative way. We developed the idea of a verified icon that appears if the business/brand on the map has received more than 100 users’ feedback. This will also discourage users from abusing the rating system.\n  </p>\n  <p>\n    Finally, the main performance of the users will be based on engagement and the rewards given to self-accomplishing a set number of chosen activities to improve their community experience. The user’s lifestyle impact is shown in the evolution or state of the AR animals and their avatar. For example, the higher the user engagement with posting content and attending events in the London community, the higher the positive impact with be reflected in the AR camera view (animals and environment statistics).\n  </p>\n</section>\n\n<section class=\"single-column\">\n  <h3>High-Fidelity Prototype & User Test</h3>\n  <p>\n    To address the changes above, I created a high-fidelity prototype by programming a mobile application, using Angular, that would simulate the main features. This provided users with a more interactive experience by receiving a better look and feel of the app. I separated the main functionalities of our app in three tabs at the bottom of the screen to replicate the mobile platform specific design guidelines.\n  </p>\n</section>\n\n<section class=\"single-column center\">\n  <iframe class=\"desktop\" width=\"438\" height=\"930\" src=\"//invis.io/NVFLAP0BX8U\" frameborder=\"0\" allowfullscreen></iframe>\n  <a class=\"mobile\" href=\"http://invis.io/NVFLAP0BX8U\" target=\"_blank\" alt=\"Link to prototype\">Click to view prototype</a>\n</section>\n\n<section class=\"single-column\">\n  <p>\n    <b>Exploratory View</b>\n    The users are presented with a map containing all user content based on the location and a small preview of the user post, following our heuristic evaluation. The user can view more details about a post by tapping on the small preview card at the bottom: as mentioned above the post can be about a business (restaurant/brands), an event, a meetup, a question or an announcement.\n    <br />\n    The user can save a post by tapping the heart icon. They can filter the type of post by tapping the top right button and can add a post themselves by tapping the top left one. The camera button at the top center would open the camera for AR view.\n    <br />\n    <b>Saved View</b>\n    This view is divided into post categories. For the purpose of the demo, we divided them into tips, events and questions. Here, they can view post that they have saved for future reference and also remove them if no longer needed.\n    <br />\n    <b>Profile View</b>\n    Upon clicking the profile tab, users will be able to customise and see their own avatar as well as stats about their activity.\n  </p>\n\n  <p>\n    We recruited 6 members from the UCL Vegan Society to conduct a usability test and focus group to get feedback about our final product. Similar to our low-fidelity prototype testing, we wanted to know how the participants feel about our product and the implementation of the features. We asked participants to add a post, save a post, view a post and search on the map. We again encouraged them to think-aloud while exploring the prototype. Furthermore, we conducted a focus group to get their ideas on the AR functionality.\n    Some feedback below:\n  </p>\n\n  <p><i>\n    \"The AR function seemed quite fun and engaging, and the other functions quite easy to use.\" <br />\n    \"Pleasantly surprised! I didn’t know what to expect frankly, but I think it offers something different to the current social media apps.\" <br />\n    \"I liked the AR! And the fact that the app gives you points when you eat vegan food.\" <br />\n    \"I would love to see a beta version of the app to be able to give more detailed feedback about it.\" <br />\n    \"I like the visualisations and unlocking achievements.\"\n  </i></p>\n</section>\n"

/***/ }),

/***/ "./src/app/broccoli/broccoli.component.scss":
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: left;\n  padding-top: 30px;\n  margin: 60px 100px; }\n\np {\n  line-height: 26px;\n  margin-bottom: 24px; }\n\n.full-picture {\n  overflow: hidden;\n  position: relative;\n  width: 100vw; }\n\nimg {\n  max-width: 100%; }\n\n.center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.single-column {\n  margin: 60px 100px;\n  text-align: left; }\n\n.single-column ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 24px; }\n\n.single-column li {\n    margin: 0;\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 26px; }\n"

/***/ }),

/***/ "./src/app/broccoli/broccoli.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroccoliComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BroccoliComponent = /** @class */ (function () {
    function BroccoliComponent() {
    }
    BroccoliComponent.prototype.ngOnInit = function () {
    };
    BroccoliComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-broccoli',
            template: __webpack_require__("./src/app/broccoli/broccoli.component.html"),
            styles: [__webpack_require__("./src/app/broccoli/broccoli.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BroccoliComponent);
    return BroccoliComponent;
}());



/***/ }),

/***/ "./src/app/deat/deat.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"flex\">\n  <a routerLink=\"/\" routerLinkActive=\"active\">\n    <i class=\"fas fa-long-arrow-alt-left\"></i>\n    Home\n  </a>\n</nav>\n\n<section class=\"title\">\n  <h1>DEAT</h1>\n  <h2>Dementia Environmental Assessment Tool</h2>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img src=\"./assets/img/ehe.png\" srcset=\"./assets/img/deat/ehe.png\" alt=\"First page of Dementia Assessment Tool\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>Context</h3>\n  <p>\n    By joining University of Worcester's Media Lab, I got the chance to work with Association of Dementia Studies, based on campus. The problem they were facing was increasing amounts of data with no way to easily examine it. They were seeking for a better, efficient way of gathering this data to identify and create evidence-based ways of working with people living with dementia whilst protecting their privacy. This problem represented significant obstacles, and needed a solution to synthesise big amounts of data. By working together with the clients to familiarise myself with the context of this problem, I took advantage of the ubiquitous technology and responded to this challenge by building a cross-platform mobile application which would enable accessibility, and multiple uses at once.\n  </p>\n</section>\n\n\n<section class=\"single-column\">\n  <h3>My Role</h3>\n  <ul>\n    <li> Finding a solution to efficiently and securely gather data for research to make evidence-based way to work with people with dementia </li>\n    <li> Developing a cross-platform mobile app (iOS and Android) using Ionic 2 and CouchDB with offline data synchronisation </li>\n    <li> Collaborating with the client in order to set the requirements for an app that uses the Dementia Environment Assessment Tool </li>\n    <li> Designing a user experience that addresses constraints in mobile app development, and the user-group specific needs, whilst ensuring W3C accessibility compliance </li>\n  </ul>\n</section>\n\n<section class=\"single-column\">\n  <h3>Considerations</h3>\n  <p>\n     Working with sensitive data required careful attention in regard to laws such as Data Protection Act and Computer Misuse Act: allowing people to see only the data they needed as well as ensuring that only data that was relevant to the researchers was stored. Offline capabilities were crucial as the research covered specific environments which would constraint internet availability: the solution was to enable storage on device and real-time database synchronisation. Targeted to a very specific demographic with very specific needs, this application imposed complex questions about usability, accessibility and user experience.\n  </p>\n</section>\n\n<section class=\"single-column\">\n  <h3>Publication</h3>\n  <p>\n     The app was published on the Google Play Store. Find it <a href=\"https://play.google.com/store/apps/details?id=com.ionicframework.deatapp&hl=en\" alt=\"Link to app in Google Play Store\" target=\"_blank\">here</a>. <i>The app was not published by me.</i>\n  </p>\n</section>\n"

/***/ }),

/***/ "./src/app/deat/deat.component.scss":
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: left;\n  padding-top: 30px;\n  margin: 60px 100px; }\n\np {\n  line-height: 26px;\n  margin-bottom: 24px; }\n\n.full-picture {\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n\nimg {\n  max-width: 100%; }\n\n.single-column {\n  margin: 60px 100px;\n  text-align: left; }\n\n.single-column ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 24px; }\n\n.single-column li {\n    margin: 0;\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 26px; }\n"

/***/ }),

/***/ "./src/app/deat/deat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeatComponent = /** @class */ (function () {
    function DeatComponent() {
    }
    DeatComponent.prototype.ngOnInit = function () {
    };
    DeatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-deat',
            template: __webpack_require__("./src/app/deat/deat.component.html"),
            styles: [__webpack_require__("./src/app/deat/deat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeatComponent);
    return DeatComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex about\">\n  <div class=\"about--picture desktop\">\n    <img src=\"./assets/img/avatar.jpg\" alt=\"picture of Alexandra\" />\n  </div>\n\n  <div class=\"about--info\">\n    <h1 class=\"desktop about--title\">Alexandra Stoica</h1>\n\n    <div class=\"mobile\">\n      <div class=\"about--picture\">\n        <img src=\"./assets/img/avatar.jpg\" alt=\"picture of Alexandra\" />\n      </div>\n      <h1 class=\"about--title\">Alexandra Stoica</h1>\n    </div>\n\n    <div class=\"about--description\">\n      <p>\n      Currently Frontend Enginner @<a href=\"https://p.ota.to\" target=\"_blank\" rel=\"noreferrer\">Potato London</a>. MSc Human-Computer Interaction at UCL (Distinction), London, UK. BSc Web Development (1:1 hons) at WorcUni, UK. Interested in all things frontend and human-centred design.\n      </p>\n    </div>\n\n    <div class=\"flex about--social\">\n      <a class=\"icon\" href=\"https://uk.linkedin.com/in/alexandrastoica\" alt=\"Linkedin\" target=\"blank\"><i class=\"fab fa-linkedin\"></i></a>\n      <a class=\"icon\" href=\"https://github.com/alexandrastoica\" alt=\"Github\" target=\"blank\"><i class=\"fab fa-github\"></i></a>\n      <a class=\"icon\" href=\"http://codepen.io/alexandrastoica/\" alt=\"Codepen\" target=\"blank\"><i class=\"fab fa-codepen\"></i></a>\n      <a class=\"icon\" href=\"http://twitter.com/alexandra_s95\" alt=\"Twitter\" target=\"blank\"><i class=\"fab fa-twitter\"></i></a>\n    </div>\n\n  </div>\n</div>\n\n<section class=\"projects\">\n  <div class=\"flex grid\">\n    <div class=\"flex row\">\n      <div class=\"card\" routerLink=\"/broccoli\" routerLinkActive=\"active\">\n        <div class=\"card--title\">Broccoli: An Exploratory Concept To Empower The Vegan Community In London</div>\n        <div class=\"card-description\">As veganism in London expands, the need for a supportive network for vegan Londoners becomes crucial. This was a team project for the Interaction Design (IxD) module, UCL.</div>\n        <img class=\"card--image\" src=\"./assets/img/broccoli/main_figure.png\" alt=\"Broccoli Main Figure\" />\n        <div class=\"card--tags\">UX; Interaction Design; Community; Team</div>\n      </div>\n\n      <div class=\"card\" routerLink=\"/potatocon\" routerLinkActive=\"active\">\n        <div class=\"card--title\">PotatoCon</div>\n        <div class=\"card-description\">A cross-platform mobile app to manage events, organise attendees and sending hints. Designed and developed by me during my summer internship at Potato.</div>\n        <img class=\"card--image\" src=\"./assets/img/potatocon/potatocon-logo.jpg\" alt=\"PotatoCon Logo\" />\n        <div class=\"card--tags\">Mobile development; product design</div>\n      </div>\n\n      <div class=\"card\" routerLink=\"/deatapp\" routerLinkActive=\"active\">\n        <div class=\"card--title\">Dementia Environmental Assessment Tool</div>\n        <div class=\"card-description\">Working towards a solution to efficiently and securely gather data for research to make evidence-based way to work with people with dementia for Association of Dementia Studies (ADS), University of Worcester.</div>\n        <img class=\"card--image\" src=\"./assets/img/deat/ehe.png\" alt=\"DEAT\" />\n        <div class=\"card--tags\">Mobile development; user-centred design</div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".about {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  padding: 50px 20px 0 20px;\n  text-align: left; }\n  .about p, .about a {\n    font-size: 16px; }\n  .about .icon {\n    font-size: 20px; }\n  @media screen and (max-width: 480px) {\n    .about {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 50px 30px 0 30px; } }\n  .about--picture {\n  padding-right: 20px; }\n  .about--picture img {\n    width: 100px;\n    height: 100px;\n    border-radius: 100px; }\n  @media screen and (max-width: 480px) and (orientation: portrait) {\n    .about--picture {\n      padding-right: 10px; }\n      .about--picture img {\n        width: 60px;\n        height: 60px;\n        border-radius: 100px; } }\n  .about--title {\n  font-size: 20px !important; }\n  .about--description {\n  padding-bottom: 10px; }\n  @media screen and (max-width: 480px) {\n    .about--description {\n      padding-bottom: 30px; } }\n  .about--social {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .about--info {\n  width: 400px; }\n  .projects {\n  width: 100%;\n  margin: 0 auto;\n  padding: 40px 0; }\n  .card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: left;\n  cursor: pointer;\n  background-color: #fff;\n  width: 355px;\n  height: 480px;\n  margin: 20px;\n  padding: 20px 20px 0 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .card:hover {\n    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n  @media screen and (max-width: 480px) {\n    .card {\n      width: 100%;\n      -webkit-box-shadow: 0;\n              box-shadow: 0; } }\n  .card .card--title {\n    font-size: 24px;\n    line-height: 1.2;\n    font-weight: 500; }\n  .card .card--description {\n    font-size: 14px; }\n  .card .card--image {\n    width: 100%;\n    height: auto; }\n  .card .card--tags {\n    border-top: 1px solid #E9EBEE;\n    line-height: 46px;\n    height: 46px;\n    text-transform: uppercase;\n    font-size: 10px;\n    font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/potatocon/potatocon.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"flex\">\n  <a routerLink=\"/\" routerLinkActive=\"active\">\n    <i class=\"fas fa-long-arrow-alt-left\"></i>\n    Home\n  </a>\n</nav>\n\n<section class=\"title\">\n  <h1>PotatoCon</h1>\n  <h2>Mobile app for scheduling events and sending hints</h2>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img src=\"./assets/img/potatocon/potatocon-logo.jpg\" srcset=\"./assets/img/potatocon/potatocon-logo.jpg\" alt=\"PotatoCon Logo\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>Context</h3>\n  <p>\n    During my internship at Potato, with feedback from admins about previous experiences, I designed and developed an app to manage events, attendees, and send hints (as location is kept secret and revealed on the day of depart) for the company's annual conference. Users can also confirm their attendance to an event and see who else is attending.\n    <i><b>(The logo is not my design).</b></i>\n  </p>\n</section>\n\n<section class=\"single-column\">\n  <h3>My Role</h3>\n  <ul>\n    <li> Designing a mobile solution based on requirements </li>\n    <li> Developing a cross-platform mobile app using Ionic 2, Firebase and GoogleAuth, powered by Google Cloud Platform </li>\n    <li> Manage notifications using FCM (Firebase Cloud Messaging) </li>\n  </ul>\n</section>\n\n<section class=\"single-column\">\n  <h3>Preliminary Design and Requirements</h3>\n  <p>I created some wireframes using Sketch and came up with the following requirements:</p>\n  <ul>\n    <li>Login with google (company) account</li>\n    <li>Timeline of key events (lists hints before the trip)</li>\n    <li>Update timeline to “today” — will be able to scroll to see other days</li>\n    <li>Admins can add/send hints </li>\n    <li>Admins can create/edit events </li>\n    <li>Can have a maximum number of people that can attend (managed through the app)</li>\n    <li>Any event added appears on timeline, as well as on the events list</li>\n    <li>Users can confirm, see who’s attending, see who’s invited to the event through google calendar</li>\n    <li>Integration of “who” (internal app of employees details)</li>\n    <li>Users can search for someone, view profiles</li>\n    <li>Push notifications for hints, new events, event updates</li>\n  </ul>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img src=\"./assets/img/potatocon/potatocon-designs.png\" srcset=\"./assets/img/potatocon/potatocon-designs.png\" alt=\"First wireframes\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>First Iteration</h3>\n  <p>\n    Using an iterative design approach to gain constant feedback, I created the app using Ionic and implemented the UI. After careful consideration, feedback and some usability test, important changes occured, some of them were:\n  </p>\n  <ul>\n    <li>Increased font size and contrast for better readability</li>\n    <li>Added more colour in the design - the header changed to pink instead of white</li>\n    <li>The statuses (i.e. \"You need to confirm\") were assigned different colours to be easier to spot the different types of events</li>\n  </ul>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img src=\"./assets/img/potatocon/potatocon-iteration1.png\" srcset=\"./assets/img/potatocon/potatocon-iteration1.png\" alt=\"First Design Iteration\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>Design Rationale</h3>\n  <p>\n    To be able to access the app, users have to login with their company account. Once logged in, they can see a timeline with hints, and events which scrolls to the closest event to date as it goes on. Using the tab menu they can access the events view with lists of upcoming, future and past events which tells them if they need to confirm their attendance, if they have confirmed, if it is fully booked, passed, etc. The admins can add, edit, delete events and send hits (as push notifications). The event view shows a map that opens Google Maps when tapping the blue button, as well as more info about the event. Last but not least, Who, the third tab view, displays a list of people that are attending PotatoCon, and allows you to see their picture, email, slack, or call them.\n  </p>\n</section>\n\n<section class=\"full-picture\">\n  <picture>\n    <img src=\"./assets/img/potatocon/potatocon-app.png\" srcset=\"./assets/img/potatocon/potatocon-app.png\" alt=\"PotatoCon App Overview\"/>\n  </picture>\n</section>\n\n<section class=\"single-column\">\n  <h3>Final Product</h3>\n  <p>\n    The app was designed, developed, tested, and distributed in one month, for both iOS and Android platforms. The Android app design followed the Android UI (Material Design) guidelines. Although I worked on this project mostly individually, I constantly collaborated with developers, designers and admins for feedback and improvement. The app was a success, performed well and improved both the admins and attendees experience.\n  </p>\n</section>\n\n<section class=\"single-column\">\n  <h3>PS</h3>\n  <p>\n    Many thanks to <a href=\"http://p.ota.to\" target=\"_blank\" alt=\"Potato Website\">Potato</a> for an amazing summer internship!\n  </p>\n</section>\n"

/***/ }),

/***/ "./src/app/potatocon/potatocon.component.scss":
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: left;\n  padding-top: 30px;\n  margin: 60px 100px; }\n\np {\n  line-height: 26px;\n  margin-bottom: 24px; }\n\n.full-picture {\n  overflow: hidden;\n  position: relative;\n  width: 100vw; }\n\nimg {\n  max-width: 100%; }\n\n.center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.single-column {\n  margin: 60px 100px;\n  text-align: left; }\n\n.single-column ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 24px; }\n\n.single-column li {\n    margin: 0;\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 26px; }\n"

/***/ }),

/***/ "./src/app/potatocon/potatocon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PotatoconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PotatoconComponent = /** @class */ (function () {
    function PotatoconComponent() {
    }
    PotatoconComponent.prototype.ngOnInit = function () {
    };
    PotatoconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-potatocon',
            template: __webpack_require__("./src/app/potatocon/potatocon.component.html"),
            styles: [__webpack_require__("./src/app/potatocon/potatocon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PotatoconComponent);
    return PotatoconComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map