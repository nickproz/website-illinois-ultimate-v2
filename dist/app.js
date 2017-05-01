webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(5);
	var core_1 = __webpack_require__(7);
	var app_module_1 = __webpack_require__(27);
	/*
	 Our application code
	*/
	// Turns off assertions and other checks within the framework if we are in production
	if (process.env.ENV === 'prod') {
	    core_1.enableProdMode();
	}
	// Bootstrap
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(26);
	var platform_browser_1 = __webpack_require__(25);
	var http_1 = __webpack_require__(28);
	var home_component_1 = __webpack_require__(29);
	var about_component_1 = __webpack_require__(35);
	var prospective_players_component_1 = __webpack_require__(39);
	var contact_component_1 = __webpack_require__(43);
	var app_component_1 = __webpack_require__(47);
	var team_module_1 = __webpack_require__(55);
	var history_module_1 = __webpack_require__(147);
	var page_frame_module_1 = __webpack_require__(148);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            // FormsModule,
	            // AgmCoreModule.forRoot({
	            //     apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
	            // }),
	            page_frame_module_1.PageFrameModule,
	            team_module_1.TeamModule,
	            history_module_1.HistoryModule
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	            home_component_1.HomeComponent,
	            about_component_1.AboutComponent,
	            prospective_players_component_1.ProspectivePlayersComponent,
	            contact_component_1.ContactComponent
	        ],
	        // Use hash strategy so page refreshes on Github pages route correctly
	        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
	        bootstrap: [app_component_1.AppComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        console.log('Home Component!');
	    };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(30),
	        styles: [__webpack_require__(32)],
	        encapsulation: core_1.ViewEncapsulation.None,
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<img class=\"home-image\" src=\"" + __webpack_require__(31) + "\"/>";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/home.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(33);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".home-image {\n  width: 100%;\n  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);\n  border: 1px solid #00004D;\n}\n", ""]);
	
	// exports


/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var AboutComponent = (function () {
	    function AboutComponent() {
	    }
	    AboutComponent.prototype.ngOnInit = function () {
	        console.log('About Component!');
	    };
	    return AboutComponent;
	}());
	AboutComponent = __decorate([
	    core_1.Component({
	        selector: 'about',
	        template: __webpack_require__(36),
	        styles: [__webpack_require__(37)]
	    }),
	    __metadata("design:paramtypes", [])
	], AboutComponent);
	exports.AboutComponent = AboutComponent;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">About Us</h1>\n<p>Illinois Ultimate is one of the premier ultimate programs in the Midwest and frequently ranks in the National top 25. We strive to contend with the best programs in the country and have qualified to compete at Nationals 7 of the last 10 years. We are a program that prides itself on developing players who come to Illinois with no experience playing competitive ultimate. We teach all levels of ultimate, from the basics of throwing a forehand all the way to throwing bombs in the worst of weather.</p>\n<h2 class=\"ui header\">Mission Statement</h2>\n<p>We want to compete at the highest level possible in college ultimate while remaining respectful to our opponents.  We want to develop all our of players to become the best they can be at ultimate, as well as players who exemplify the true meaning of sportsmanship, which is pivotal to the progress of ultimate frisbee in its current state.</p>\n<h2 class=\"ui header\">Team Structure/Affiliation with University</h2>\n<p>Our team is a Registered Student Organization (RSO) at the University of Illinois and we are classified as a club sport. We receive some funding from the University that helps pay for our travel costs and hotels while we are at tournaments.</p>\n<p>We are a member of the USAU  College Series and compete in a series of tournaments that  culminate in the College Championships held every year during Memorial Day weekend. Most, if not all, state schools have established ultimate teams and many smaller schools have teams as well.  We compete in the Illinois conference which is as you can guess, the schools in the state of Illinois. The next largest division is the Great Lakes Region, which includes the states of Illinois, Indiana, Michigan, and Kentucky. The final step is the aforementioned National Championships.</p>\n<p>Our program is split up into two teams, A and B. Our A team is a group of individuals who are very dedicated to the team and who put in a large amount of time for practices as well as training outside of practices. Our B team is more oriented towards the development of younger or inexperienced players. B team provides a much more relaxed atmosphere but still remains competitive with all other B teams in the region, and even beats some smaller schools' A teams.</p>\n<p>A team has tryouts each year. This year's tryouts will consist of four fall tournaments. There will be a round of cuts made after the second tournament. The tryout roster will then be narrowed down to one team before the final tournament of the fall, via cuts on a rolling basis. Players may be moved between the A and B team rosters as necessary.</p>";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(38);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "p {\n  text-align: left;\n}\n", ""]);
	
	// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var ProspectivePlayersComponent = (function () {
	    function ProspectivePlayersComponent() {
	    }
	    ProspectivePlayersComponent.prototype.ngOnInit = function () {
	        console.log('Prospective Players Component!');
	    };
	    return ProspectivePlayersComponent;
	}());
	ProspectivePlayersComponent = __decorate([
	    core_1.Component({
	        selector: 'prospective-players',
	        template: __webpack_require__(40),
	        styles: [__webpack_require__(41)]
	    }),
	    __metadata("design:paramtypes", [])
	], ProspectivePlayersComponent);
	exports.ProspectivePlayersComponent = ProspectivePlayersComponent;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Prospective Players</h1>\n<p>Illinois Ultimate has had a long history since its inception in the early 1990s and now consistently competes with best competition around the country. Illinois has qualified for national championships 6 out of the last 9 years behind our dedication, determination, and distinguished character on and off the field. Illinois alumni have gone on to play for nationals caliber club teams such as Chicago Machine, Minneapolis Drag 'n Thrust, Cincinnati Steamboat, Atlanta Chain Lightning, and San Francisco Blackbird. Alumni have played on professional AUDL teams such as the Chicago Wildfire, Minnesota Windchill, Cincinnati Revolution, and the San Jose Spiders. They have also created and captained club teams including Chicago Machine, Black Market Ultimate, and Beachfront Ultimate, and have gone on to coach college ultimate at the University of Illinois, the University of Chicago, Northwestern University, and the University of Kentucky. It's safe to say that once you play ultimate at Illinois you are opened up to a world of opportunity through our alumni network, who are more than willing to assist you on your journey though ultimate during and beyond your college years.</p>\n<p>While you are at Illinois you will enjoy a number of experiences. This ranges from team socials to study groups and from practices in Irwin Fieldhouse to playing games on the shores of San Diego. Your teammates won't only be your best friends, they will be family. You will learn the various ways ultimate is played, how to expand your throwing arsenal, how to improve your athleticism, and how to take your game to the next level. A majority of our team didn't play organized ultimate before coming to college, and are now some of the best players in the Great Lakes region (see our All-Regions honors page).</p>\n<p>We encourage prospective players to fill out our interest form and to reach out to the captains especially if you will be on campus. We are more than happy to meet up and discuss what Illinois can do for you, and to see what you can do to be ready for Illinois once you get on campus. Our contact information is below. Thank you for taking the time to visit our website, and we hope to hear from you soon.</p>\n\n<form class=\"ui form\">\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>First Name <span class=\"required\">*</span></label>\n                <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n            </div>\n            <div class=\"field\">\n                <label>Last Name <span class=\"required\">*</span></label>\n                <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n            </div>\n        </div>\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>Email Address <span class=\"required\">*</span></label>\n                <input type=\"text\" name=\"last-name\" placeholder=\"Email Address\">\n            </div>\n            <div class=\"field\">\n                <label>What is your Hometown? <span class=\"required\">*</span></label>\n                <input type=\"text\" name=\"home-town\" placeholder=\"Hometown\">\n            </div>\n        </div>\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>What high school did you attend? <span class=\"required\">*</span></label>\n                <input type=\"text\" name=\"highschool\" placeholder=\"Highschool\">\n            </div>\n            <div class=\"field\">\n                <label>What major are you planning on going into? <span class=\"required\">*</span></label>\n                <input type=\"text\" name=\"major\" placeholder=\"Major\">\n            </div>\n        </div>\n        <div class=\"field\">\n            <label>How long have you played ultimate/what kind of experience do you have? <span class=\"required\">*</span></label>\n            <input type=\"text\" name=\"experience\" placeholder=\"Experience\">\n        </div>\n        <div class=\"field\">\n            <label>What other clubs/organizations are you planning on joining when you arrive on campus? <span class=\"required\">*</span></label>\n            <input type=\"text\" name=\"other-clubs\" placeholder=\"Other Clubs\">\n        </div>\n    <button class=\"ui button\" type=\"submit\">Submit</button>\n</form>";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(42);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "p,\nlabel {\n  text-align: left;\n}\n.ui.form {\n  margin: 20px auto;\n}\n", ""]);
	
	// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var ContactComponent = (function () {
	    function ContactComponent() {
	    }
	    ContactComponent.prototype.ngOnInit = function () {
	        console.log('Contact Component!');
	    };
	    return ContactComponent;
	}());
	ContactComponent = __decorate([
	    core_1.Component({
	        selector: 'contact',
	        template: __webpack_require__(44),
	        styles: [__webpack_require__(45)]
	    }),
	    __metadata("design:paramtypes", [])
	], ContactComponent);
	exports.ContactComponent = ContactComponent;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Contact Us</h1>\n<p>For any questions regarding practice or club details, feel free to contact any of the current captains:</p>\n\n<p class=\"captain\">Chris Buchta -- cbuchta2@gmail.com</p>\n<p class=\"captain\">Ben Foster -- ben.foster234@gmail.com</p>\n<p class=\"captain\">Jacob Komenda -- jacob.komenda@gmail.com</p>";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(46);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".captain {\n  margin-bottom: 0;\n}\n", ""]);
	
	// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	__webpack_require__(48);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent.prototype.ngOnInit = function () { };
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(52),
	        styles: [__webpack_require__(53)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(51)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    background-image: url(" + __webpack_require__(50) + ");\n    font-family: 'Quattrocento', serif;\n    text-align: center;\n    overflow-y: scroll;\n}\np {\n    text-indent: 25px;\n    padding: 10px;\n}\na {\n    color: #00004D;\n}\na:hover {\n    color: #ff6226;\n}\n\ninput {\n    font-family: 'Quattrocento', serif !important;\n}\n\ninput:focus {\n     border-color: #ff6226 !important;\n}\n.button {\n    background-color: #ff6226 !important;\n    color: white !important;\n}\n.required {\n    color: #ff6226;\n}\n\n.ui.header {\n    font-family: 'Oswald', sans-serif;\n    color: #00004D;\n    letter-spacing: 1px;\n}\n.ui.table tr, .ui.table td {\n    text-align: center;\n    border-top: 0;\n}\n.ui.secondary.pointing.menu {\n    justify-content: center;\n}\n.ui.secondary.pointing.menu .item.active {\n    border-color: #00004D;\n}", ""]);
	
	// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/background.jpg";

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

	module.exports = "<main class=\"main-container\">\n    <page-frame></page-frame>\n</main>\n";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(54);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".main-container {\n  height: 100%;\n}\n", ""]);
	
	// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var core_2 = __webpack_require__(56);
	var platform_browser_1 = __webpack_require__(25);
	var practice_component_1 = __webpack_require__(79);
	var tournaments_component_1 = __webpack_require__(84);
	var roster_component_1 = __webpack_require__(121);
	var absent_component_1 = __webpack_require__(126);
	var router_1 = __webpack_require__(85);
	var app_routes_1 = __webpack_require__(131);
	var TeamModule = (function () {
	    function TeamModule() {
	    }
	    return TeamModule;
	}());
	TeamModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            core_2.AgmCoreModule.forRoot({
	                apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
	            }),
	            router_1.RouterModule.forRoot(app_routes_1.ROUTES)
	        ],
	        declarations: [
	            practice_component_1.PracticeComponent,
	            tournaments_component_1.TournamentsComponent,
	            roster_component_1.RosterComponent,
	            absent_component_1.AbsentComponent
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], TeamModule);
	exports.TeamModule = TeamModule;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// main modules
	__export(__webpack_require__(57));
	__export(__webpack_require__(74));
	// Google Maps types
	// core module
	// we explicitly export the module here to prevent this Ionic 2 bug:
	// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
	var core_module_1 = __webpack_require__(78);
	exports.AgmCoreModule = core_module_1.AgmCoreModule;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var google_map_1 = __webpack_require__(58);
	exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
	var google_map_circle_1 = __webpack_require__(67);
	exports.SebmGoogleMapCircle = google_map_circle_1.SebmGoogleMapCircle;
	var google_map_info_window_1 = __webpack_require__(68);
	exports.SebmGoogleMapInfoWindow = google_map_info_window_1.SebmGoogleMapInfoWindow;
	var google_map_kml_layer_1 = __webpack_require__(69);
	exports.SebmGoogleMapKmlLayer = google_map_kml_layer_1.SebmGoogleMapKmlLayer;
	var google_map_marker_1 = __webpack_require__(70);
	exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
	var google_map_polygon_1 = __webpack_require__(71);
	exports.SebmGoogleMapPolygon = google_map_polygon_1.SebmGoogleMapPolygon;
	var google_map_polyline_1 = __webpack_require__(72);
	exports.SebmGoogleMapPolyline = google_map_polyline_1.SebmGoogleMapPolyline;
	var google_map_polyline_point_1 = __webpack_require__(73);
	exports.SebmGoogleMapPolylinePoint = google_map_polyline_point_1.SebmGoogleMapPolylinePoint;
	//# sourceMappingURL=directives.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	var circle_manager_1 = __webpack_require__(61);
	var info_window_manager_1 = __webpack_require__(62);
	var marker_manager_1 = __webpack_require__(63);
	var polygon_manager_1 = __webpack_require__(64);
	var polyline_manager_1 = __webpack_require__(65);
	var kml_layer_manager_1 = __webpack_require__(66);
	/**
	 * SebMGoogleMap renders a Google Map.
	 * **Important note**: To be able see a map in the browser, you have to define a height for the CSS
	 * class `sebm-google-map-container`.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from '@angular/core';
	 * import { SebmGoogleMap } from 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMap = (function () {
	    function SebmGoogleMap(_elem, _mapsWrapper) {
	        this._elem = _elem;
	        this._mapsWrapper = _mapsWrapper;
	        /**
	         * The longitude that defines the center of the map.
	         */
	        this.longitude = 0;
	        /**
	         * The latitude that defines the center of the map.
	         */
	        this.latitude = 0;
	        /**
	         * The zoom level of the map. The default zoom level is 8.
	         */
	        this.zoom = 8;
	        /**
	         * Enables/disables if map is draggable.
	         */
	        this.draggable = true;
	        /**
	         * Enables/disables zoom and center on double click. Enabled by default.
	         */
	        this.disableDoubleClickZoom = false;
	        /**
	         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
	         * value cannot get updated.
	         */
	        this.disableDefaultUI = false;
	        /**
	         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
	         */
	        this.scrollwheel = true;
	        /**
	         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
	         * enabled by default.
	         */
	        this.keyboardShortcuts = true;
	        /**
	         * The enabled/disabled state of the Zoom control.
	         */
	        this.zoomControl = true;
	        /**
	         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
	         * modes, these styles will only apply to labels and geometry.
	         */
	        this.styles = [];
	        /**
	         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
	         * used to
	         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
	         */
	        this.usePanning = false;
	        /**
	         * The initial enabled/disabled state of the Street View Pegman control.
	         * This control is part of the default UI, and should be set to false when displaying a map type
	         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
	         */
	        this.streetViewControl = true;
	        /**
	         * Sets the viewport to contain the given bounds.
	         */
	        this.fitBounds = null;
	        /**
	         * The initial enabled/disabled state of the Scale control. This is disabled by default.
	         */
	        this.scaleControl = false;
	        /**
	         * The initial enabled/disabled state of the Map type control.
	         */
	        this.mapTypeControl = false;
	        this._observableSubscriptions = [];
	        /**
	         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
	         * marker or infoWindow).
	         */
	        this.mapClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
	         * on a marker or infoWindow).
	         */
	        this.mapRightClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
	         * on a marker or infoWindow).
	         */
	        this.mapDblClick = new core_1.EventEmitter();
	        /**
	         * This event emitter is fired when the map center changes.
	         */
	        this.centerChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the viewport bounds have changed.
	         */
	        this.boundsChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the map becomes idle after panning or zooming.
	         */
	        this.idle = new core_1.EventEmitter();
	        /**
	         * This event is fired when the zoom level has changed.
	         */
	        this.zoomChange = new core_1.EventEmitter();
	    }
	    /** @internal */
	    SebmGoogleMap.prototype.ngOnInit = function () {
	        // todo: this should be solved with a new component and a viewChild decorator
	        var container = this._elem.nativeElement.querySelector('.sebm-google-map-container-inner');
	        this._initMapInstance(container);
	    };
	    SebmGoogleMap.prototype._initMapInstance = function (el) {
	        this._mapsWrapper.createMap(el, {
	            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
	            zoom: this.zoom,
	            minZoom: this.minZoom,
	            maxZoom: this.maxZoom,
	            disableDefaultUI: this.disableDefaultUI,
	            backgroundColor: this.backgroundColor,
	            draggable: this.draggable,
	            draggableCursor: this.draggableCursor,
	            draggingCursor: this.draggingCursor,
	            keyboardShortcuts: this.keyboardShortcuts,
	            zoomControl: this.zoomControl,
	            styles: this.styles,
	            streetViewControl: this.streetViewControl,
	            scaleControl: this.scaleControl,
	            mapTypeControl: this.mapTypeControl
	        });
	        // register event listeners
	        this._handleMapCenterChange();
	        this._handleMapZoomChange();
	        this._handleMapMouseEvents();
	        this._handleBoundsChange();
	        this._handleIdleEvent();
	    };
	    /** @internal */
	    SebmGoogleMap.prototype.ngOnDestroy = function () {
	        // unsubscribe all registered observable subscriptions
	        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    /* @internal */
	    SebmGoogleMap.prototype.ngOnChanges = function (changes) {
	        this._updateMapOptionsChanges(changes);
	        this._updatePosition(changes);
	    };
	    SebmGoogleMap.prototype._updateMapOptionsChanges = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMap._mapOptionsAttributes.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        this._mapsWrapper.setMapOptions(options);
	    };
	    /**
	     * Triggers a resize event on the google map instance.
	     * Returns a promise that gets resolved after the event was triggered.
	     */
	    SebmGoogleMap.prototype.triggerResize = function () {
	        var _this = this;
	        // Note: When we would trigger the resize event and show the map in the same turn (which is a
	        // common case for triggering a resize event), then the resize event would not
	        // work (to show the map), so we trigger the event in a timeout.
	        return new Promise(function (resolve) {
	            setTimeout(function () { return _this._mapsWrapper.triggerMapEvent('resize').then(function () { return resolve(); }); });
	        });
	    };
	    SebmGoogleMap.prototype._updatePosition = function (changes) {
	        if (changes['latitude'] == null && changes['longitude'] == null &&
	            changes['fitBounds'] == null) {
	            // no position update needed
	            return;
	        }
	        // we prefer fitBounds in changes
	        if (changes['fitBounds'] && this.fitBounds != null) {
	            this._fitBounds();
	            return;
	        }
	        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
	            return;
	        }
	        var newCenter = {
	            lat: this.latitude,
	            lng: this.longitude,
	        };
	        if (this.usePanning) {
	            this._mapsWrapper.panTo(newCenter);
	        }
	        else {
	            this._mapsWrapper.setCenter(newCenter);
	        }
	    };
	    SebmGoogleMap.prototype._fitBounds = function () {
	        if (this.usePanning) {
	            this._mapsWrapper.panToBounds(this.fitBounds);
	            return;
	        }
	        this._mapsWrapper.fitBounds(this.fitBounds);
	    };
	    SebmGoogleMap.prototype._handleMapCenterChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
	            _this._mapsWrapper.getCenter().then(function (center) {
	                _this.latitude = center.lat();
	                _this.longitude = center.lng();
	                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
	            });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleBoundsChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
	            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleMapZoomChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
	            _this._mapsWrapper.getZoom().then(function (z) {
	                _this.zoom = z;
	                _this.zoomChange.emit(z);
	            });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleIdleEvent = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleMapMouseEvents = function () {
	        var _this = this;
	        var events = [
	            { name: 'click', emitter: this.mapClick },
	            { name: 'rightclick', emitter: this.mapRightClick },
	        ];
	        events.forEach(function (e) {
	            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
	                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
	                e.emitter.emit(value);
	            });
	            _this._observableSubscriptions.push(s);
	        });
	    };
	    /**
	     * Map option attributes that can change over time
	     */
	    SebmGoogleMap._mapOptionsAttributes = [
	        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
	        'keyboardShortcuts', 'zoomControl', 'styles', 'streetViewControl', 'zoom', 'mapTypeControl',
	        'minZoom', 'maxZoom'
	    ];
	    SebmGoogleMap.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'sebm-google-map',
	                    providers: [
	                        google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager, info_window_manager_1.InfoWindowManager, circle_manager_1.CircleManager, polyline_manager_1.PolylineManager,
	                        polygon_manager_1.PolygonManager, kml_layer_manager_1.KmlLayerManager
	                    ],
	                    inputs: [
	                        'longitude', 'latitude', 'zoom', 'minZoom', 'maxZoom', 'draggable: mapDraggable',
	                        'disableDoubleClickZoom', 'disableDefaultUI', 'scrollwheel', 'backgroundColor', 'draggableCursor',
	                        'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'styles', 'usePanning', 'streetViewControl',
	                        'fitBounds', 'scaleControl', 'mapTypeControl'
	                    ],
	                    outputs: [
	                        'mapClick', 'mapRightClick', 'mapDblClick', 'centerChange', 'idle', 'boundsChange', 'zoomChange'
	                    ],
	                    host: { '[class.sebm-google-map-container]': 'true' },
	                    styles: ["\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .sebm-google-map-content {\n      display:none;\n    }\n  "],
	                    template: "\n    <div class='sebm-google-map-container-inner'></div>\n    <div class='sebm-google-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMap.ctorParameters = function () { return [
	        { type: core_1.ElementRef, },
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	    ]; };
	    return SebmGoogleMap;
	}());
	exports.SebmGoogleMap = SebmGoogleMap;
	//# sourceMappingURL=google-map.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var maps_api_loader_1 = __webpack_require__(60);
	/**
	 * Wrapper class that handles the communication with the Google Maps Javascript
	 * API v3
	 */
	var GoogleMapsAPIWrapper = (function () {
	    function GoogleMapsAPIWrapper(_loader, _zone) {
	        var _this = this;
	        this._loader = _loader;
	        this._zone = _zone;
	        this._map =
	            new Promise(function (resolve) { _this._mapResolver = resolve; });
	    }
	    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
	        var _this = this;
	        return this._loader.load().then(function () {
	            var map = new google.maps.Map(el, mapOptions);
	            _this._mapResolver(map);
	            return;
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
	        this._map.then(function (m) { m.setOptions(options); });
	    };
	    /**
	     * Creates a google map marker with the map context
	     */
	    GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
	        if (options === void 0) { options = {}; }
	        return this._map.then(function (map) {
	            options.map = map;
	            return new google.maps.Marker(options);
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
	        return this._map.then(function () { return new google.maps.InfoWindow(options); });
	    };
	    /**
	     * Creates a google.map.Circle for the current map.
	     */
	    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
	        return this._map.then(function (map) {
	            options.map = map;
	            return new google.maps.Circle(options);
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
	        return this.getNativeMap().then(function (map) {
	            var line = new google.maps.Polyline(options);
	            line.setMap(map);
	            return line;
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
	        return this.getNativeMap().then(function (map) {
	            var polygon = new google.maps.Polygon(options);
	            polygon.setMap(map);
	            return polygon;
	        });
	    };
	    /**
	     * Determines if given coordinates are insite a Polygon path.
	     */
	    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
	        return google.maps.geometry.poly.containsLocation(latLng, polygon);
	    };
	    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._map.then(function (m) {
	                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
	            });
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
	        return this._map.then(function (map) { return map.setCenter(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
	    GoogleMapsAPIWrapper.prototype.getBounds = function () {
	        return this._map.then(function (map) { return map.getBounds(); });
	    };
	    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
	        return this._map.then(function (map) { return map.setZoom(zoom); });
	    };
	    GoogleMapsAPIWrapper.prototype.getCenter = function () {
	        return this._map.then(function (map) { return map.getCenter(); });
	    };
	    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
	        return this._map.then(function (map) { return map.panTo(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
	        return this._map.then(function (map) { return map.fitBounds(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
	        return this._map.then(function (map) { return map.panToBounds(latLng); });
	    };
	    /**
	     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
	     */
	    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
	    /**
	     * Triggers the given event name on the map instance.
	     */
	    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
	        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
	    };
	    GoogleMapsAPIWrapper.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    GoogleMapsAPIWrapper.ctorParameters = function () { return [
	        { type: maps_api_loader_1.MapsAPILoader, },
	        { type: core_1.NgZone, },
	    ]; };
	    return GoogleMapsAPIWrapper;
	}());
	exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;
	//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var MapsAPILoader = (function () {
	    function MapsAPILoader() {
	    }
	    MapsAPILoader.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    MapsAPILoader.ctorParameters = function () { return []; };
	    return MapsAPILoader;
	}());
	exports.MapsAPILoader = MapsAPILoader;
	//# sourceMappingURL=maps-api-loader.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	var CircleManager = (function () {
	    function CircleManager(_apiWrapper, _zone) {
	        this._apiWrapper = _apiWrapper;
	        this._zone = _zone;
	        this._circles = new Map();
	    }
	    CircleManager.prototype.addCircle = function (circle) {
	        this._circles.set(circle, this._apiWrapper.createCircle({
	            center: { lat: circle.latitude, lng: circle.longitude },
	            clickable: circle.clickable,
	            draggable: circle.draggable,
	            editable: circle.editable,
	            fillColor: circle.fillColor,
	            fillOpacity: circle.fillOpacity,
	            radius: circle.radius,
	            strokeColor: circle.strokeColor,
	            strokeOpacity: circle.strokeOpacity,
	            strokePosition: circle.strokePosition,
	            strokeWeight: circle.strokeWeight,
	            visible: circle.visible,
	            zIndex: circle.zIndex
	        }));
	    };
	    ;
	    /**
	     * Removes the given circle from the map.
	     */
	    CircleManager.prototype.removeCircle = function (circle) {
	        var _this = this;
	        return this._circles.get(circle).then(function (c) {
	            c.setMap(null);
	            _this._circles.delete(circle);
	        });
	    };
	    CircleManager.prototype.setOptions = function (circle, options) {
	        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
	    };
	    ;
	    CircleManager.prototype.getBounds = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
	    };
	    ;
	    CircleManager.prototype.getCenter = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
	    };
	    ;
	    CircleManager.prototype.getRadius = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
	    };
	    CircleManager.prototype.setCenter = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
	    };
	    ;
	    CircleManager.prototype.setEditable = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
	    };
	    ;
	    CircleManager.prototype.setDraggable = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
	    };
	    ;
	    CircleManager.prototype.setVisible = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
	    };
	    ;
	    CircleManager.prototype.setRadius = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
	    };
	    ;
	    CircleManager.prototype.createEventObservable = function (eventName, circle) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            var listener = null;
	            _this._circles.get(circle).then(function (c) {
	                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	            return function () {
	                if (listener !== null) {
	                    listener.remove();
	                }
	            };
	        });
	    };
	    CircleManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    CircleManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return CircleManager;
	}());
	exports.CircleManager = CircleManager;
	//# sourceMappingURL=circle-manager.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var core_1 = __webpack_require__(7);
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	var marker_manager_1 = __webpack_require__(63);
	var InfoWindowManager = (function () {
	    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._markerManager = _markerManager;
	        this._infoWindows = new Map();
	    }
	    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
	        var _this = this;
	        var iWindow = this._infoWindows.get(infoWindow);
	        if (iWindow == null) {
	            // info window already deleted
	            return Promise.resolve();
	        }
	        return iWindow.then(function (i) {
	            return _this._zone.run(function () {
	                i.close();
	                _this._infoWindows.delete(infoWindow);
	            });
	        });
	    };
	    InfoWindowManager.prototype.setPosition = function (infoWindow) {
	        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
	            lat: infoWindow.latitude,
	            lng: infoWindow.longitude
	        }); });
	    };
	    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
	        return this._infoWindows.get(infoWindow)
	            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
	    };
	    InfoWindowManager.prototype.open = function (infoWindow) {
	        var _this = this;
	        return this._infoWindows.get(infoWindow).then(function (w) {
	            if (infoWindow.hostMarker != null) {
	                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
	                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
	                });
	            }
	            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
	        });
	    };
	    InfoWindowManager.prototype.close = function (infoWindow) {
	        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
	    };
	    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
	        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
	    };
	    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
	        var options = {
	            content: infoWindow.content,
	            maxWidth: infoWindow.maxWidth,
	            zIndex: infoWindow.zIndex,
	        };
	        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
	            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
	        }
	        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
	        this._infoWindows.set(infoWindow, infoWindowPromise);
	    };
	    /**
	     * Creates a Google Maps event listener for the given InfoWindow as an Observable
	     */
	    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._infoWindows.get(infoWindow).then(function (i) {
	                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    InfoWindowManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    InfoWindowManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	        { type: marker_manager_1.MarkerManager, },
	    ]; };
	    return InfoWindowManager;
	}());
	exports.InfoWindowManager = InfoWindowManager;
	//# sourceMappingURL=info-window-manager.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	var MarkerManager = (function () {
	    function MarkerManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._markers = new Map();
	    }
	    MarkerManager.prototype.deleteMarker = function (marker) {
	        var _this = this;
	        var m = this._markers.get(marker);
	        if (m == null) {
	            // marker already deleted
	            return Promise.resolve();
	        }
	        return m.then(function (m) {
	            return _this._zone.run(function () {
	                m.setMap(null);
	                _this._markers.delete(marker);
	            });
	        });
	    };
	    MarkerManager.prototype.updateMarkerPosition = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
	    };
	    MarkerManager.prototype.updateTitle = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
	    };
	    MarkerManager.prototype.updateLabel = function (marker) {
	        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
	    };
	    MarkerManager.prototype.updateDraggable = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
	    };
	    MarkerManager.prototype.updateIcon = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
	    };
	    MarkerManager.prototype.updateOpacity = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
	    };
	    MarkerManager.prototype.updateVisible = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
	    };
	    MarkerManager.prototype.updateZIndex = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
	    };
	    MarkerManager.prototype.addMarker = function (marker) {
	        var markerPromise = this._mapsWrapper.createMarker({
	            position: { lat: marker.latitude, lng: marker.longitude },
	            label: marker.label,
	            draggable: marker.draggable,
	            icon: marker.iconUrl,
	            opacity: marker.opacity,
	            visible: marker.visible,
	            zIndex: marker.zIndex,
	            title: marker.title
	        });
	        this._markers.set(marker, markerPromise);
	    };
	    MarkerManager.prototype.getNativeMarker = function (marker) {
	        return this._markers.get(marker);
	    };
	    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._markers.get(marker).then(function (m) {
	                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    MarkerManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    MarkerManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return MarkerManager;
	}());
	exports.MarkerManager = MarkerManager;
	//# sourceMappingURL=marker-manager.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	var PolygonManager = (function () {
	    function PolygonManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._polygons = new Map();
	    }
	    PolygonManager.prototype.addPolygon = function (path) {
	        var polygonPromise = this._mapsWrapper.createPolygon({
	            clickable: path.clickable,
	            draggable: path.draggable,
	            editable: path.editable,
	            fillColor: path.fillColor,
	            fillOpacity: path.fillOpacity,
	            geodesic: path.geodesic,
	            paths: path.paths,
	            strokeColor: path.strokeColor,
	            strokeOpacity: path.strokeOpacity,
	            strokeWeight: path.strokeWeight,
	            visible: path.visible,
	            zIndex: path.zIndex,
	        });
	        this._polygons.set(path, polygonPromise);
	    };
	    PolygonManager.prototype.updatePolygon = function (polygon) {
	        var _this = this;
	        var m = this._polygons.get(polygon);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
	    };
	    PolygonManager.prototype.setPolygonOptions = function (path, options) {
	        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
	    };
	    PolygonManager.prototype.deletePolygon = function (paths) {
	        var _this = this;
	        var m = this._polygons.get(paths);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) {
	            return _this._zone.run(function () {
	                l.setMap(null);
	                _this._polygons.delete(paths);
	            });
	        });
	    };
	    PolygonManager.prototype.createEventObservable = function (eventName, path) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._polygons.get(path).then(function (l) {
	                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    PolygonManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    PolygonManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return PolygonManager;
	}());
	exports.PolygonManager = PolygonManager;
	//# sourceMappingURL=polygon-manager.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	var PolylineManager = (function () {
	    function PolylineManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._polylines = new Map();
	    }
	    PolylineManager._convertPoints = function (line) {
	        var path = line._getPoints().map(function (point) {
	            return { lat: point.latitude, lng: point.longitude };
	        });
	        return path;
	    };
	    PolylineManager.prototype.addPolyline = function (line) {
	        var path = PolylineManager._convertPoints(line);
	        var polylinePromise = this._mapsWrapper.createPolyline({
	            clickable: line.clickable,
	            draggable: line.draggable,
	            editable: line.editable,
	            geodesic: line.geodesic,
	            strokeColor: line.strokeColor,
	            strokeOpacity: line.strokeOpacity,
	            strokeWeight: line.strokeWeight,
	            visible: line.visible,
	            zIndex: line.zIndex,
	            path: path
	        });
	        this._polylines.set(line, polylinePromise);
	    };
	    PolylineManager.prototype.updatePolylinePoints = function (line) {
	        var _this = this;
	        var path = PolylineManager._convertPoints(line);
	        var m = this._polylines.get(line);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
	    };
	    PolylineManager.prototype.setPolylineOptions = function (line, options) {
	        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
	    };
	    PolylineManager.prototype.deletePolyline = function (line) {
	        var _this = this;
	        var m = this._polylines.get(line);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) {
	            return _this._zone.run(function () {
	                l.setMap(null);
	                _this._polylines.delete(line);
	            });
	        });
	    };
	    PolylineManager.prototype.createEventObservable = function (eventName, line) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._polylines.get(line).then(function (l) {
	                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    PolylineManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    PolylineManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return PolylineManager;
	}());
	exports.PolylineManager = PolylineManager;
	//# sourceMappingURL=polyline-manager.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	/**
	 * Manages all KML Layers for a Google Map instance.
	 */
	var KmlLayerManager = (function () {
	    function KmlLayerManager(_wrapper, _zone) {
	        this._wrapper = _wrapper;
	        this._zone = _zone;
	        this._layers = new Map();
	    }
	    /**
	     * Adds a new KML Layer to the map.
	     */
	    KmlLayerManager.prototype.addKmlLayer = function (layer) {
	        var newLayer = this._wrapper.getNativeMap().then(function (m) {
	            return new google.maps.KmlLayer({
	                clickable: layer.clickable,
	                map: m,
	                preserveViewport: layer.preserveViewport,
	                screenOverlays: layer.screenOverlays,
	                suppressInfoWindows: layer.suppressInfoWindows,
	                url: layer.url,
	                zIndex: layer.zIndex
	            });
	        });
	        this._layers.set(layer, newLayer);
	    };
	    KmlLayerManager.prototype.setOptions = function (layer, options) {
	        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
	    };
	    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
	        var _this = this;
	        this._layers.get(layer).then(function (l) {
	            l.setMap(null);
	            _this._layers.delete(layer);
	        });
	    };
	    /**
	     * Creates a Google Maps event listener for the given KmlLayer as an Observable
	     */
	    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._layers.get(layer).then(function (m) {
	                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    KmlLayerManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    KmlLayerManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return KmlLayerManager;
	}());
	exports.KmlLayerManager = KmlLayerManager;
	//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var circle_manager_1 = __webpack_require__(61);
	var SebmGoogleMapCircle = (function () {
	    function SebmGoogleMapCircle(_manager) {
	        this._manager = _manager;
	        /**
	         * Indicates whether this Circle handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this circle over the map. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this circle by dragging the control points shown at
	         * the center and around the circumference of the circle. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * The radius in meters on the Earth's surface.
	         */
	        this.radius = 0;
	        /**
	         * The stroke position. Defaults to CENTER.
	         * This property is not supported on Internet Explorer 8 and earlier.
	         */
	        this.strokePosition = 'CENTER';
	        /**
	         * The stroke width in pixels.
	         */
	        this.strokeWeight = 0;
	        /**
	         * Whether this circle is visible on the map. Defaults to true.
	         */
	        this.visible = true;
	        /**
	         * This event is fired when the circle's center is changed.
	         */
	        this.centerChange = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user clicks on the circle.
	         */
	        this.circleClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user clicks on the circle.
	         */
	        this.circleDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the circle.
	         */
	        this.drag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the circle.
	         */
	        this.dragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the circle.
	         */
	        this.dragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the circle.
	         */
	        this.mouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the circle.
	         */
	        this.mouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on circle mouseout.
	         */
	        this.mouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on circle mouseover.
	         */
	        this.mouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mouseup event is fired on the circle.
	         */
	        this.mouseUp = new core_1.EventEmitter();
	        /**
	         * This event is fired when the circle's radius is changed.
	         */
	        this.radiusChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the circle is right-clicked on.
	         */
	        this.rightClick = new core_1.EventEmitter();
	        this._circleAddedToManager = false;
	        this._eventSubscriptions = [];
	    }
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnInit = function () {
	        this._manager.addCircle(this);
	        this._circleAddedToManager = true;
	        this._registerEventListeners();
	    };
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnChanges = function (changes) {
	        if (!this._circleAddedToManager) {
	            return;
	        }
	        if (changes['latitude'] || changes['longitude']) {
	            this._manager.setCenter(this);
	        }
	        if (changes['editable']) {
	            this._manager.setEditable(this);
	        }
	        if (changes['draggable']) {
	            this._manager.setDraggable(this);
	        }
	        if (changes['visible']) {
	            this._manager.setVisible(this);
	        }
	        if (changes['radius']) {
	            this._manager.setRadius(this);
	        }
	        this._updateCircleOptionsChanges(changes);
	    };
	    SebmGoogleMapCircle.prototype._updateCircleOptionsChanges = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapCircle._mapOptions.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        if (optionKeys.length > 0) {
	            this._manager.setOptions(this, options);
	        }
	    };
	    SebmGoogleMapCircle.prototype._registerEventListeners = function () {
	        var _this = this;
	        var events = new Map();
	        events.set('center_changed', this.centerChange);
	        events.set('click', this.circleClick);
	        events.set('dblclick', this.circleDblClick);
	        events.set('drag', this.drag);
	        events.set('dragend', this.dragEnd);
	        events.set('dragStart', this.dragStart);
	        events.set('mousedown', this.mouseDown);
	        events.set('mousemove', this.mouseMove);
	        events.set('mouseout', this.mouseOut);
	        events.set('mouseover', this.mouseOver);
	        events.set('mouseup', this.mouseUp);
	        events.set('radius_changed', this.radiusChange);
	        events.set('rightclick', this.rightClick);
	        events.forEach(function (eventEmitter, eventName) {
	            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
	                switch (eventName) {
	                    case 'radius_changed':
	                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
	                        break;
	                    case 'center_changed':
	                        _this._manager.getCenter(_this).then(function (center) {
	                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
	                        });
	                        break;
	                    default:
	                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
	                }
	            }));
	        });
	    };
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnDestroy = function () {
	        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
	        this._eventSubscriptions = null;
	        this._manager.removeCircle(this);
	    };
	    /**
	     * Gets the LatLngBounds of this Circle.
	     */
	    SebmGoogleMapCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
	    SebmGoogleMapCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
	    SebmGoogleMapCircle._mapOptions = [
	        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
	        'visible', 'zIndex'
	    ];
	    SebmGoogleMapCircle.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-circle',
	                    inputs: [
	                        'latitude', 'longitude', 'clickable', 'draggable: circleDraggable', 'editable', 'fillColor',
	                        'fillOpacity', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
	                        'visible', 'zIndex'
	                    ],
	                    outputs: [
	                        'centerChange', 'circleClick', 'circleDblClick', 'drag', 'dragEnd', 'dragStart', 'mouseDown',
	                        'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'radiusChange', 'rightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapCircle.ctorParameters = function () { return [
	        { type: circle_manager_1.CircleManager, },
	    ]; };
	    return SebmGoogleMapCircle;
	}());
	exports.SebmGoogleMapCircle = SebmGoogleMapCircle;
	//# sourceMappingURL=google-map-circle.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var info_window_manager_1 = __webpack_require__(62);
	var infoWindowId = 0;
	/**
	 * SebmGoogleMapInfoWindow renders a info window inside a {@link SebmGoogleMapMarker} or standalone.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
	 * 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
	 *        <sebm-google-map-info-window [disableAutoPan]="true">
	 *          Hi, this is the content of the <strong>info window</strong>
	 *        </sebm-google-map-info-window>
	 *      </sebm-google-map-marker>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapInfoWindow = (function () {
	    function SebmGoogleMapInfoWindow(_infoWindowManager, _el) {
	        this._infoWindowManager = _infoWindowManager;
	        this._el = _el;
	        /**
	         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
	         */
	        this.isOpen = false;
	        /**
	         * Emits an event when the info window is closed.
	         */
	        this.infoWindowClose = new core_1.EventEmitter();
	        this._infoWindowAddedToManager = false;
	        this._id = (infoWindowId++).toString();
	    }
	    SebmGoogleMapInfoWindow.prototype.ngOnInit = function () {
	        this.content = this._el.nativeElement.querySelector('.sebm-google-map-info-window-content');
	        this._infoWindowManager.addInfoWindow(this);
	        this._infoWindowAddedToManager = true;
	        this._updateOpenState();
	        this._registerEventListeners();
	    };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.ngOnChanges = function (changes) {
	        if (!this._infoWindowAddedToManager) {
	            return;
	        }
	        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
	            typeof this.longitude === 'number') {
	            this._infoWindowManager.setPosition(this);
	        }
	        if (changes['zIndex']) {
	            this._infoWindowManager.setZIndex(this);
	        }
	        if (changes['isOpen']) {
	            this._updateOpenState();
	        }
	        this._setInfoWindowOptions(changes);
	    };
	    SebmGoogleMapInfoWindow.prototype._registerEventListeners = function () {
	        var _this = this;
	        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
	            _this.isOpen = false;
	            _this.infoWindowClose.emit();
	        });
	    };
	    SebmGoogleMapInfoWindow.prototype._updateOpenState = function () {
	        this.isOpen ? this.open() : this.close();
	    };
	    SebmGoogleMapInfoWindow.prototype._setInfoWindowOptions = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        this._infoWindowManager.setOptions(this, options);
	    };
	    /**
	     * Opens the info window.
	     */
	    SebmGoogleMapInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
	    /**
	     * Closes the info window.
	     */
	    SebmGoogleMapInfoWindow.prototype.close = function () {
	        var _this = this;
	        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
	    };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.toString = function () { return 'SebmGoogleMapInfoWindow-' + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
	    SebmGoogleMapInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
	    SebmGoogleMapInfoWindow.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'sebm-google-map-info-window',
	                    inputs: ['latitude', 'longitude', 'disableAutoPan', 'isOpen', 'zIndex', 'maxWidth'],
	                    outputs: ['infoWindowClose'],
	                    template: "<div class='sebm-google-map-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapInfoWindow.ctorParameters = function () { return [
	        { type: info_window_manager_1.InfoWindowManager, },
	        { type: core_1.ElementRef, },
	    ]; };
	    return SebmGoogleMapInfoWindow;
	}());
	exports.SebmGoogleMapInfoWindow = SebmGoogleMapInfoWindow;
	//# sourceMappingURL=google-map-info-window.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var kml_layer_manager_1 = __webpack_require__(66);
	var layerId = 0;
	var SebmGoogleMapKmlLayer = (function () {
	    function SebmGoogleMapKmlLayer(_manager) {
	        this._manager = _manager;
	        this._addedToManager = false;
	        this._id = (layerId++).toString();
	        this._subscriptions = [];
	        /**
	         * If true, the layer receives mouse events. Default value is true.
	         */
	        this.clickable = true;
	        /**
	         * By default, the input map is centered and zoomed to the bounding box of the contents of the
	         * layer.
	         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
	         * were never set.
	         */
	        this.preserveViewport = false;
	        /**
	         * Whether to render the screen overlays. Default true.
	         */
	        this.screenOverlays = true;
	        /**
	         * Suppress the rendering of info windows when layer features are clicked.
	         */
	        this.suppressInfoWindows = false;
	        /**
	         * The URL of the KML document to display.
	         */
	        this.url = null;
	        /**
	         * The z-index of the layer.
	         */
	        this.zIndex = null;
	        /**
	         * This event is fired when a feature in the layer is clicked.
	         */
	        this.layerClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the KML layers default viewport has changed.
	         */
	        this.defaultViewportChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the KML layer has finished loading.
	         * At this point it is safe to read the status property to determine if the layer loaded
	         * successfully.
	         */
	        this.statusChange = new core_1.EventEmitter();
	    }
	    SebmGoogleMapKmlLayer.prototype.ngOnInit = function () {
	        if (this._addedToManager) {
	            return;
	        }
	        this._manager.addKmlLayer(this);
	        this._addedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapKmlLayer.prototype.ngOnChanges = function (changes) {
	        if (!this._addedToManager) {
	            return;
	        }
	        this._updatePolygonOptions(changes);
	    };
	    SebmGoogleMapKmlLayer.prototype._updatePolygonOptions = function (changes) {
	        var options = Object.keys(changes)
	            .filter(function (k) { return SebmGoogleMapKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
	            .reduce(function (obj, k) {
	            obj[k] = changes[k].currentValue;
	            return obj;
	        }, {});
	        if (Object.keys(options).length > 0) {
	            this._manager.setOptions(this, options);
	        }
	    };
	    SebmGoogleMapKmlLayer.prototype._addEventListeners = function () {
	        var _this = this;
	        var listeners = [
	            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
	            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
	            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
	        ];
	        listeners.forEach(function (obj) {
	            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    /** @internal */
	    SebmGoogleMapKmlLayer.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapKmlLayer.prototype.toString = function () { return "SebmGoogleMapKmlLayer-" + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapKmlLayer.prototype.ngOnDestroy = function () {
	        this._manager.deleteKmlLayer(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
	    SebmGoogleMapKmlLayer.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-kml-layer',
	                    inputs: ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'],
	                    outputs: ['layerClick', 'defaultViewportChange', 'statusChange']
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapKmlLayer.ctorParameters = function () { return [
	        { type: kml_layer_manager_1.KmlLayerManager, },
	    ]; };
	    return SebmGoogleMapKmlLayer;
	}());
	exports.SebmGoogleMapKmlLayer = SebmGoogleMapKmlLayer;
	//# sourceMappingURL=google-map-kml-layer.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var marker_manager_1 = __webpack_require__(63);
	var google_map_info_window_1 = __webpack_require__(68);
	var markerId = 0;
	/**
	 * SebmGoogleMapMarker renders a map marker inside a {@link SebmGoogleMap}.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGoogleMapMarker],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
	 *      </sebm-google-map-marker>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapMarker = (function () {
	    function SebmGoogleMapMarker(_markerManager) {
	        this._markerManager = _markerManager;
	        /**
	         * If true, the marker can be dragged. Default value is false.
	         */
	        this.draggable = false;
	        /**
	         * If true, the marker is visible
	         */
	        this.visible = true;
	        /**
	         * Whether to automatically open the child info window when the marker is clicked.
	         */
	        this.openInfoWindow = true;
	        /**
	         * The marker's opacity between 0.0 and 1.0.
	         */
	        this.opacity = 1;
	        /**
	         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
	         * front of markers with lower values. By default, markers are displayed according to their
	         * vertical position on screen, with lower markers appearing in front of markers further up the
	         * screen.
	         */
	        this.zIndex = 1;
	        /**
	         * This event emitter gets emitted when the user clicks on the marker.
	         */
	        this.markerClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the marker.
	         */
	        this.dragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user mouses over the marker.
	         */
	        this.mouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user mouses outside the marker.
	         */
	        this.mouseOut = new core_1.EventEmitter();
	        this._markerAddedToManger = false;
	        this._observableSubscriptions = [];
	        this._id = (markerId++).toString();
	    }
	    /* @internal */
	    SebmGoogleMapMarker.prototype.ngAfterContentInit = function () {
	        if (this.infoWindow != null) {
	            this.infoWindow.hostMarker = this;
	        }
	    };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.ngOnChanges = function (changes) {
	        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
	            return;
	        }
	        if (!this._markerAddedToManger) {
	            this._markerManager.addMarker(this);
	            this._markerAddedToManger = true;
	            this._addEventListeners();
	            return;
	        }
	        if (changes['latitude'] || changes['longitude']) {
	            this._markerManager.updateMarkerPosition(this);
	        }
	        if (changes['title']) {
	            this._markerManager.updateTitle(this);
	        }
	        if (changes['label']) {
	            this._markerManager.updateLabel(this);
	        }
	        if (changes['draggable']) {
	            this._markerManager.updateDraggable(this);
	        }
	        if (changes['iconUrl']) {
	            this._markerManager.updateIcon(this);
	        }
	        if (changes['opacity']) {
	            this._markerManager.updateOpacity(this);
	        }
	        if (changes['visible']) {
	            this._markerManager.updateVisible(this);
	        }
	        if (changes['zIndex']) {
	            this._markerManager.updateZIndex(this);
	        }
	    };
	    SebmGoogleMapMarker.prototype._addEventListeners = function () {
	        var _this = this;
	        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
	            if (_this.openInfoWindow && _this.infoWindow != null) {
	                _this.infoWindow.open();
	            }
	            _this.markerClick.emit(null);
	        });
	        this._observableSubscriptions.push(cs);
	        var ds = this._markerManager.createEventObservable('dragend', this)
	            .subscribe(function (e) {
	            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(ds);
	        var mover = this._markerManager.createEventObservable('mouseover', this)
	            .subscribe(function (e) {
	            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(mover);
	        var mout = this._markerManager.createEventObservable('mouseout', this)
	            .subscribe(function (e) {
	            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(mout);
	    };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.toString = function () { return 'SebmGoogleMapMarker-' + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.ngOnDestroy = function () {
	        this._markerManager.deleteMarker(this);
	        // unsubscribe all registered observable subscriptions
	        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapMarker.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-marker',
	                    inputs: [
	                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
	                        'openInfoWindow', 'opacity', 'visible', 'zIndex'
	                    ],
	                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapMarker.ctorParameters = function () { return [
	        { type: marker_manager_1.MarkerManager, },
	    ]; };
	    SebmGoogleMapMarker.propDecorators = {
	        'infoWindow': [{ type: core_1.ContentChild, args: [google_map_info_window_1.SebmGoogleMapInfoWindow,] },],
	    };
	    return SebmGoogleMapMarker;
	}());
	exports.SebmGoogleMapMarker = SebmGoogleMapMarker;
	//# sourceMappingURL=google-map-marker.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var polygon_manager_1 = __webpack_require__(64);
	/**
	 * SebmGoogleMapPolygon renders a polygon on a {@link SebmGoogleMap}
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from '@angular/core';
	 * import { SebmGoogleMap, SebmGooglePolygon, LatLngLiteral } from 'angular2-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  styles: [`
	 *    .semb-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <semb-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <semb-map-polygon [paths]="paths">
	 *      </semb-map-polygon>
	 *    </semb-map>
	 *  `
	 * })
	 * export class MyMapCmp {
	 *   lat: number = 0;
	 *   lng: number = 0;
	 *   zoom: number = 10;
	 *   paths: Array<LatLngLiteral> = [
	 *     { lat: 0,  lng: 10 },
	 *     { lat: 0,  lng: 20 },
	 *     { lat: 10, lng: 20 },
	 *     { lat: 10, lng: 10 },
	 *     { lat: 0,  lng: 10 }
	 *   ]
	 *   // Nesting paths will create a hole where they overlap;
	 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
	 *     { lat: 0,  lng: 10 },
	 *     { lat: 0,  lng: 20 },
	 *     { lat: 10, lng: 20 },
	 *     { lat: 10, lng: 10 },
	 *     { lat: 0,  lng: 10 }
	 *   ], [
	 *     { lat: 0, lng: 15 },
	 *     { lat: 0, lng: 20 },
	 *     { lat: 5, lng: 20 },
	 *     { lat: 5, lng: 15 },
	 *     { lat: 0, lng: 15 }
	 *   ]]
	 * }
	 * ```
	 */
	var SebmGoogleMapPolygon = (function () {
	    function SebmGoogleMapPolygon(_polygonManager) {
	        this._polygonManager = _polygonManager;
	        /**
	         * Indicates whether this Polygon handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this shape over the map. The geodesic
	         * property defines the mode of dragging. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this shape by dragging the control
	         * points shown at the vertices and on each segment. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * When true, edges of the polygon are interpreted as geodesic and will
	         * follow the curvature of the Earth. When false, edges of the polygon are
	         * rendered as straight lines in screen space. Note that the shape of a
	         * geodesic polygon may appear to change when dragged, as the dimensions
	         * are maintained relative to the surface of the earth. Defaults to false.
	         */
	        this.geodesic = false;
	        /**
	         * The ordered sequence of coordinates that designates a closed loop.
	         * Unlike polylines, a polygon may consist of one or more paths.
	         *  As a result, the paths property may specify one or more arrays of
	         * LatLng coordinates. Paths are closed automatically; do not repeat the
	         * first vertex of the path as the last vertex. Simple polygons may be
	         * defined using a single array of LatLngs. More complex polygons may
	         * specify an array of arrays. Any simple arrays are converted into Arrays.
	         * Inserting or removing LatLngs from the Array will automatically update
	         * the polygon on the map.
	         */
	        this.paths = [];
	        /**
	         * This event is fired when the DOM click event is fired on the Polygon.
	         */
	        this.polyClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM dblclick event is fired on the Polygon.
	         */
	        this.polyDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the polygon.
	         */
	        this.polyDrag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the polygon.
	         */
	        this.polyDragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the polygon.
	         */
	        this.polyDragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the Polygon.
	         */
	        this.polyMouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the Polygon.
	         */
	        this.polyMouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polygon mouseout.
	         */
	        this.polyMouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polygon mouseover.
	         */
	        this.polyMouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired whe the DOM mouseup event is fired on the Polygon
	         */
	        this.polyMouseUp = new core_1.EventEmitter();
	        /**
	         * This even is fired when the Polygon is right-clicked on.
	         */
	        this.polyRightClick = new core_1.EventEmitter();
	        this._polygonAddedToManager = false;
	        this._subscriptions = [];
	    }
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.ngAfterContentInit = function () {
	        if (!this._polygonAddedToManager) {
	            this._init();
	        }
	    };
	    SebmGoogleMapPolygon.prototype.ngOnChanges = function (changes) {
	        if (!this._polygonAddedToManager) {
	            this._init();
	            return;
	        }
	        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
	    };
	    SebmGoogleMapPolygon.prototype._init = function () {
	        this._polygonManager.addPolygon(this);
	        this._polygonAddedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapPolygon.prototype._addEventListeners = function () {
	        var _this = this;
	        var handlers = [
	            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
	            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
	            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
	            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
	            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
	            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
	            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
	            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
	            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
	            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
	            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
	        ];
	        handlers.forEach(function (obj) {
	            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    SebmGoogleMapPolygon.prototype._updatePolygonOptions = function (changes) {
	        return Object.keys(changes)
	            .filter(function (k) { return SebmGoogleMapPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
	            .reduce(function (obj, k) {
	            obj[k] = changes[k].currentValue;
	            return obj;
	        }, {});
	    };
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.ngOnDestroy = function () {
	        this._polygonManager.deletePolygon(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapPolygon._polygonOptionsAttributes = [
	        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
	        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
	        'editable', 'visible'
	    ];
	    SebmGoogleMapPolygon.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-map-polygon',
	                    inputs: [
	                        'clickable',
	                        'draggable: polyDraggable',
	                        'editable',
	                        'fillColor',
	                        'fillOpacity',
	                        'geodesic',
	                        'paths',
	                        'strokeColor',
	                        'strokeOpacity',
	                        'strokeWeight',
	                        'visible',
	                        'zIndex',
	                    ],
	                    outputs: [
	                        'polyClick', 'polyDblClick', 'polyDrag', 'polyDragEnd', 'polyMouseDown', 'polyMouseMove',
	                        'polyMouseOut', 'polyMouseOver', 'polyMouseUp', 'polyRightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolygon.ctorParameters = function () { return [
	        { type: polygon_manager_1.PolygonManager, },
	    ]; };
	    return SebmGoogleMapPolygon;
	}());
	exports.SebmGoogleMapPolygon = SebmGoogleMapPolygon;
	//# sourceMappingURL=google-map-polygon.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var polyline_manager_1 = __webpack_require__(65);
	var google_map_polyline_point_1 = __webpack_require__(73);
	var polylineId = 0;
	/**
	 * SebmGoogleMapPolyline renders a polyline on a {@link SebmGoogleMap}
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint } from
	 * 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-polyline>
	 *          <sebm-google-map-polyline-point [latitude]="latA" [longitude]="lngA">
	 *          </sebm-google-map-polyline-point>
	 *          <sebm-google-map-polyline-point [latitude]="latB" [longitude]="lngB">
	 *          </sebm-google-map-polyline-point>
	 *      </sebm-google-map-polyline>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapPolyline = (function () {
	    function SebmGoogleMapPolyline(_polylineManager) {
	        this._polylineManager = _polylineManager;
	        /**
	         * Indicates whether this Polyline handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this shape over the map. The geodesic property defines the
	         * mode of dragging. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this shape by dragging the control points shown at the
	         * vertices and on each segment. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
	         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
	         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
	         * are maintained relative to the surface of the earth. Defaults to false.
	         */
	        this.geodesic = false;
	        /**
	         * Whether this polyline is visible on the map. Defaults to true.
	         */
	        this.visible = true;
	        /**
	         * This event is fired when the DOM click event is fired on the Polyline.
	         */
	        this.lineClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM dblclick event is fired on the Polyline.
	         */
	        this.lineDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the polyline.
	         */
	        this.lineDrag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the polyline.
	         */
	        this.lineDragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the polyline.
	         */
	        this.lineDragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the Polyline.
	         */
	        this.lineMouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the Polyline.
	         */
	        this.lineMouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polyline mouseout.
	         */
	        this.lineMouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polyline mouseover.
	         */
	        this.lineMouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired whe the DOM mouseup event is fired on the Polyline
	         */
	        this.lineMouseUp = new core_1.EventEmitter();
	        /**
	         * This even is fired when the Polyline is right-clicked on.
	         */
	        this.lineRightClick = new core_1.EventEmitter();
	        this._polylineAddedToManager = false;
	        this._subscriptions = [];
	        this._id = (polylineId++).toString();
	    }
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        if (this.points.length) {
	            this.points.forEach(function (point) {
	                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
	                _this._subscriptions.push(s);
	            });
	        }
	        if (!this._polylineAddedToManager) {
	            this._init();
	        }
	        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
	        this._subscriptions.push(s);
	        this._polylineManager.updatePolylinePoints(this);
	    };
	    SebmGoogleMapPolyline.prototype.ngOnChanges = function (changes) {
	        if (!this._polylineAddedToManager) {
	            this._init();
	            return;
	        }
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
	        this._polylineManager.setPolylineOptions(this, options);
	    };
	    SebmGoogleMapPolyline.prototype._init = function () {
	        this._polylineManager.addPolyline(this);
	        this._polylineAddedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapPolyline.prototype._addEventListeners = function () {
	        var _this = this;
	        var handlers = [
	            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
	            { name: 'dbclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
	            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
	            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
	            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
	            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
	            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
	            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
	            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
	            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
	            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
	        ];
	        handlers.forEach(function (obj) {
	            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype._getPoints = function () {
	        if (this.points) {
	            return this.points.toArray();
	        }
	        return [];
	    };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.ngOnDestroy = function () {
	        this._polylineManager.deletePolyline(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapPolyline._polylineOptionsAttributes = [
	        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
	        'zIndex'
	    ];
	    SebmGoogleMapPolyline.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-polyline',
	                    inputs: [
	                        'clickable', 'draggable: polylineDraggable', 'editable', 'geodesic', 'strokeColor',
	                        'strokeWeight', 'strokeOpacity', 'visible', 'zIndex'
	                    ],
	                    outputs: [
	                        'lineClick', 'lineDblClick', 'lineDrag', 'lineDragEnd', 'lineMouseDown', 'lineMouseMove',
	                        'lineMouseOut', 'lineMouseOver', 'lineMouseUp', 'lineRightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolyline.ctorParameters = function () { return [
	        { type: polyline_manager_1.PolylineManager, },
	    ]; };
	    SebmGoogleMapPolyline.propDecorators = {
	        'points': [{ type: core_1.ContentChildren, args: [google_map_polyline_point_1.SebmGoogleMapPolylinePoint,] },],
	    };
	    return SebmGoogleMapPolyline;
	}());
	exports.SebmGoogleMapPolyline = SebmGoogleMapPolyline;
	//# sourceMappingURL=google-map-polyline.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	/**
	 * SebmGoogleMapPolylinePoint represents one element of a polyline within a  {@link
	 * SembGoogleMapPolyline}
	 */
	var SebmGoogleMapPolylinePoint = (function () {
	    function SebmGoogleMapPolylinePoint() {
	        /**
	         * This event emitter gets emitted when the position of the point changed.
	         */
	        this.positionChanged = new core_1.EventEmitter();
	    }
	    SebmGoogleMapPolylinePoint.prototype.ngOnChanges = function (changes) {
	        if (changes['latitude'] || changes['longitude']) {
	            var position = {
	                lat: changes['latitude'].currentValue,
	                lng: changes['longitude'].currentValue
	            };
	            this.positionChanged.emit(position);
	        }
	    };
	    SebmGoogleMapPolylinePoint.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'sebm-google-map-polyline-point' },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolylinePoint.ctorParameters = function () { return []; };
	    SebmGoogleMapPolylinePoint.propDecorators = {
	        'latitude': [{ type: core_1.Input },],
	        'longitude': [{ type: core_1.Input },],
	        'positionChanged': [{ type: core_1.Output },],
	    };
	    return SebmGoogleMapPolylinePoint;
	}());
	exports.SebmGoogleMapPolylinePoint = SebmGoogleMapPolylinePoint;
	//# sourceMappingURL=google-map-polyline-point.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var google_maps_api_wrapper_1 = __webpack_require__(59);
	exports.GoogleMapsAPIWrapper = google_maps_api_wrapper_1.GoogleMapsAPIWrapper;
	var circle_manager_1 = __webpack_require__(61);
	exports.CircleManager = circle_manager_1.CircleManager;
	var info_window_manager_1 = __webpack_require__(62);
	exports.InfoWindowManager = info_window_manager_1.InfoWindowManager;
	var marker_manager_1 = __webpack_require__(63);
	exports.MarkerManager = marker_manager_1.MarkerManager;
	var polygon_manager_1 = __webpack_require__(64);
	exports.PolygonManager = polygon_manager_1.PolygonManager;
	var polyline_manager_1 = __webpack_require__(65);
	exports.PolylineManager = polyline_manager_1.PolylineManager;
	var kml_layer_manager_1 = __webpack_require__(66);
	exports.KmlLayerManager = kml_layer_manager_1.KmlLayerManager;
	var lazy_maps_api_loader_1 = __webpack_require__(75);
	exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
	exports.LAZY_MAPS_API_CONFIG = lazy_maps_api_loader_1.LAZY_MAPS_API_CONFIG;
	exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
	var maps_api_loader_1 = __webpack_require__(60);
	exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
	var noop_maps_api_loader_1 = __webpack_require__(77);
	exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;
	//# sourceMappingURL=services.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(7);
	var browser_globals_1 = __webpack_require__(76);
	var maps_api_loader_1 = __webpack_require__(60);
	(function (GoogleMapsScriptProtocol) {
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
	})(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
	var GoogleMapsScriptProtocol = exports.GoogleMapsScriptProtocol;
	/**
	 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
	 * LazyMapsAPILoaderConfig}.
	 */
	exports.LAZY_MAPS_API_CONFIG = new core_1.OpaqueToken('angular2-google-maps LAZY_MAPS_API_CONFIG');
	var LazyMapsAPILoader = (function (_super) {
	    __extends(LazyMapsAPILoader, _super);
	    function LazyMapsAPILoader(config, w, d) {
	        _super.call(this);
	        this._config = config || {};
	        this._windowRef = w;
	        this._documentRef = d;
	    }
	    LazyMapsAPILoader.prototype.load = function () {
	        var _this = this;
	        if (this._scriptLoadingPromise) {
	            return this._scriptLoadingPromise;
	        }
	        var script = this._documentRef.getNativeDocument().createElement('script');
	        script.type = 'text/javascript';
	        script.async = true;
	        script.defer = true;
	        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
	        script.src = this._getScriptSrc(callbackName);
	        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
	            _this._windowRef.getNativeWindow()[callbackName] = function () { resolve(); };
	            script.onerror = function (error) { reject(error); };
	        });
	        this._documentRef.getNativeDocument().body.appendChild(script);
	        return this._scriptLoadingPromise;
	    };
	    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
	        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
	        var protocol;
	        switch (protocolType) {
	            case GoogleMapsScriptProtocol.AUTO:
	                protocol = '';
	                break;
	            case GoogleMapsScriptProtocol.HTTP:
	                protocol = 'http:';
	                break;
	            case GoogleMapsScriptProtocol.HTTPS:
	                protocol = 'https:';
	                break;
	        }
	        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
	        var queryParams = {
	            v: this._config.apiVersion || '3',
	            callback: callbackName,
	            key: this._config.apiKey,
	            client: this._config.clientId,
	            channel: this._config.channel,
	            libraries: this._config.libraries,
	            region: this._config.region,
	            language: this._config.language
	        };
	        var params = Object.keys(queryParams)
	            .filter(function (k) { return queryParams[k] != null; })
	            .filter(function (k) {
	            // remove empty arrays
	            return !Array.isArray(queryParams[k]) ||
	                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
	        })
	            .map(function (k) {
	            // join arrays as comma seperated strings
	            var i = queryParams[k];
	            if (Array.isArray(i)) {
	                return { key: k, value: i.join(',') };
	            }
	            return { key: k, value: queryParams[k] };
	        })
	            .map(function (entry) { return entry.key + "=" + entry.value; })
	            .join('&');
	        return protocol + "//" + hostAndPath + "?" + params;
	    };
	    LazyMapsAPILoader.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    LazyMapsAPILoader.ctorParameters = function () { return [
	        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.LAZY_MAPS_API_CONFIG,] },] },
	        { type: browser_globals_1.WindowRef, },
	        { type: browser_globals_1.DocumentRef, },
	    ]; };
	    return LazyMapsAPILoader;
	}(maps_api_loader_1.MapsAPILoader));
	exports.LazyMapsAPILoader = LazyMapsAPILoader;
	//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";
	var WindowRef = (function () {
	    function WindowRef() {
	    }
	    WindowRef.prototype.getNativeWindow = function () { return window; };
	    return WindowRef;
	}());
	exports.WindowRef = WindowRef;
	var DocumentRef = (function () {
	    function DocumentRef() {
	    }
	    DocumentRef.prototype.getNativeDocument = function () { return document; };
	    return DocumentRef;
	}());
	exports.DocumentRef = DocumentRef;
	exports.BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
	//# sourceMappingURL=browser-globals.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";
	/**
	 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
	 * Tag.
	 * It's important that the Google Maps API script gets loaded first on the page.
	 */
	var NoOpMapsAPILoader = (function () {
	    function NoOpMapsAPILoader() {
	    }
	    NoOpMapsAPILoader.prototype.load = function () {
	        if (!window.google || !window.google.maps) {
	            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
	        }
	        return Promise.resolve();
	    };
	    ;
	    return NoOpMapsAPILoader;
	}());
	exports.NoOpMapsAPILoader = NoOpMapsAPILoader;
	//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var google_map_kml_layer_1 = __webpack_require__(69);
	var google_map_1 = __webpack_require__(58);
	var google_map_circle_1 = __webpack_require__(67);
	var google_map_info_window_1 = __webpack_require__(68);
	var google_map_marker_1 = __webpack_require__(70);
	var google_map_polygon_1 = __webpack_require__(71);
	var google_map_polyline_1 = __webpack_require__(72);
	var google_map_polyline_point_1 = __webpack_require__(73);
	var lazy_maps_api_loader_1 = __webpack_require__(75);
	var lazy_maps_api_loader_2 = __webpack_require__(75);
	var maps_api_loader_1 = __webpack_require__(60);
	var browser_globals_1 = __webpack_require__(76);
	/**
	 * @internal
	 */
	function coreDirectives() {
	    return [
	        google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker, google_map_info_window_1.SebmGoogleMapInfoWindow, google_map_circle_1.SebmGoogleMapCircle,
	        google_map_polygon_1.SebmGoogleMapPolygon, google_map_polyline_1.SebmGoogleMapPolyline, google_map_polyline_point_1.SebmGoogleMapPolylinePoint, google_map_kml_layer_1.SebmGoogleMapKmlLayer
	    ];
	}
	exports.coreDirectives = coreDirectives;
	;
	/**
	 * The angular2-google-maps core module. Contains all Directives/Services/Pipes
	 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
	 */
	var AgmCoreModule = (function () {
	    function AgmCoreModule() {
	    }
	    /**
	     * Please use this method when you register the module at the root level.
	     */
	    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
	        return {
	            ngModule: AgmCoreModule,
	            providers: browser_globals_1.BROWSER_GLOBALS_PROVIDERS.concat([
	                { provide: maps_api_loader_1.MapsAPILoader, useClass: lazy_maps_api_loader_1.LazyMapsAPILoader },
	                { provide: lazy_maps_api_loader_2.LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig }
	            ]),
	        };
	    };
	    AgmCoreModule.decorators = [
	        { type: core_1.NgModule, args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
	    ];
	    /** @nocollapse */
	    AgmCoreModule.ctorParameters = function () { return []; };
	    return AgmCoreModule;
	}());
	exports.AgmCoreModule = AgmCoreModule;
	//# sourceMappingURL=core-module.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var practice_data_1 = __webpack_require__(80);
	var PracticeComponent = (function () {
	    function PracticeComponent() {
	        // Practice data to inject into our template
	        this.practiceData = practice_data_1.PRACTICE_DATA;
	    }
	    PracticeComponent.prototype.ngOnInit = function () { };
	    return PracticeComponent;
	}());
	PracticeComponent = __decorate([
	    core_1.Component({
	        selector: 'practice',
	        template: __webpack_require__(81),
	        styles: [__webpack_require__(82)]
	    }),
	    __metadata("design:paramtypes", [])
	], PracticeComponent);
	exports.PracticeComponent = PracticeComponent;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	"use strict";
	exports.PRACTICE_DATA = [
	    {
	        season: 'Fall',
	        what: 'Normal Practice',
	        time: '4:30PM-7PM',
	        when: 'Mondays & Wednesdays',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    },
	    {
	        season: 'Fall',
	        what: 'Weekend Invite Practice',
	        time: 'TBD',
	        when: 'Weekends',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    },
	    {
	        season: 'Winter',
	        what: 'Normal Practice',
	        time: '9:30PM-12AM',
	        when: 'Mondays & Wednesdays',
	        locationLabel: 'Armory',
	        locationLink: 'https://www.google.com/maps/place/Armory/@40.105402,-88.235534,17z/data=!3m1!5s0x880cd73b8c4fbb7d:0xa84890110afd0990!4m7!1m4!3m3!1s0x880cd73a16c1d78f:0xe1bb009225fc1225!2sE+Armory+Ave,+Champaign,+IL+61820!3b1!3m1!1s0x0000000000000000:0x0b21d56f2b951978'
	    },
	    {
	        season: 'Winter',
	        what: 'Indoor Field Practice',
	        time: '11PM-12AM',
	        when: 'Thursdays',
	        locationLabel: 'Irwin Facility',
	        locationLink: 'https://www.google.com/maps/place/Irwin+Indoor+Football+Facility,+University+of+Illinois+at+Urbana-Champaign,+Champaign,+IL+61820/@40.1006475,-88.2342204,17z/data=!3m1!4b1!4m6!1m3!3m2!1s0x880cd724a92655e9:0xa53c0525046826fa!2sUniversity+of+Illinois+at+Urbana-Champaign!3m1!1s0x880cd725292c02bd:0x18f5a03daad8677a'
	    },
	    {
	        season: 'Spring',
	        what: 'Normal Practice',
	        time: '9:30PM-12AM',
	        when: 'Mondays & Wednesdays',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    },
	    {
	        season: 'Spring',
	        what: 'A-Team Practice',
	        time: 'TBD',
	        when: 'Weekends',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    }
	];


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Practice</h1>\n<table class=\"ui celled table\">\n    <thead>\n        <tr>\n            <th>Season</th>\n            <th>What</th>\n            <th>Time</th>\n            <th>When</th>\n            <th>Location</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let practiceRow of practiceData\">\n            <td>{{practiceRow.season}}</td>\n            <td>{{practiceRow.what}}</td>\n            <td>{{practiceRow.time}}</td>\n            <td>{{practiceRow.when}}</td>\n            <td><a href=\"{{practiceRow.locationLink}}\" target=\"_blank\">{{practiceRow.locationLabel}}</a></td>\n        </tr>\n    </tbody>\n</table>";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(83);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "tr {\n  text-align: center;\n}\n", ""]);
	
	// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(85);
	var tournaments_data_1 = __webpack_require__(117);
	var TournamentsComponent = (function () {
	    // Inject the ActivatedRoute into our component
	    function TournamentsComponent(route) {
	        this.route = route;
	        // Tournament data to inject into our template
	        this.tournamentData = tournaments_data_1.TOURNAMENTS_DATA;
	    }
	    /**
	     * Subscribe to our route parameters (tournament year).
	     */
	    TournamentsComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
	            // (+) converts string 'year' to a number
	            _this.year = +params['year'];
	        });
	    };
	    /**
	     * Unsubscribe to our route parameters (tournament year).
	     */
	    TournamentsComponent.prototype.ngOnDestroy = function () {
	        this.routeParamsSubscription.unsubscribe();
	    };
	    return TournamentsComponent;
	}());
	TournamentsComponent = __decorate([
	    core_1.Component({
	        selector: 'tournaments',
	        template: __webpack_require__(118),
	        styles: [__webpack_require__(119)]
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
	], TournamentsComponent);
	exports.TournamentsComponent = TournamentsComponent;
	var _a;


/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports) {

	"use strict";
	exports.TOURNAMENTS_DATA = [
	    {
	        year: 2017,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Boiler Breakaway',
	                nameLink: '',
	                when: 'Sept. 17th-18th',
	                location: 'West Lafayette, IN',
	                result: '-'
	            }
	        ]
	    },
	    {
	        year: 2016,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Boiler Breakaway',
	                nameLink: '',
	                when: 'Sept. 19th-20th',
	                location: 'West Lafayette, IN',
	                result: '-'
	            }
	        ]
	    },
	    {
	        year: 2015,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Huck of the Irish',
	                nameLink: '',
	                when: 'Sept. 27th-28th',
	                location: 'South Bend, IN',
	                result: '-'
	            }
	        ]
	    }
	];


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Tournaments</h1>\n<ng-container *ngFor=\"let tournamentYear of tournamentData\">\n    <ng-container *ngIf=\"tournamentYear.year === year\">\n        <div class=\"ui secondary pointing menu\">\n            <a class=\"item\" routerLink=\"/tournaments/2015\" [ngClass]=\"{'active': year === 2015}\">2015</a>\n            <a class=\"item\" routerLink=\"/tournaments/2016\" [ngClass]=\"{'active': year === 2016}\">2016</a>\n            <a class=\"item\" routerLink=\"/tournaments/2017\" [ngClass]=\"{'active': year === 2017}\">2017</a>\n        </div>\n        <table class=\"ui celled table\" *ngIf=\"tournamentData\">\n            <thead>\n                <tr>\n                    <th>Season</th>\n                    <th>Name</th>\n                    <th>When</th>\n                    <th>Location</th>\n                    <th>Result</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let tournament of tournamentYear.tournaments\">\n                    <td>{{tournament.season}}</td>\n                    <td><a href=\"{{tournament.nameLink}}\" target=\"_blank\">{{tournament.nameLabel}}</a></td>\n                    <td>{{tournament.when}}</td>\n                    <td>{{tournament.location}}</td>\n                    <td>{{tournament.result}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </ng-container>\n</ng-container>";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(120);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(85);
	var rosters_data_1 = __webpack_require__(122);
	var RosterComponent = (function () {
	    // Inject the ActivatedRoute into our component
	    function RosterComponent(route) {
	        this.route = route;
	        // Roster data to inject into our template
	        this.rosterData = rosters_data_1.ROSTER_DATA;
	    }
	    /**
	     * Subscribe to our route parameters (roster year).
	     */
	    RosterComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
	            // (+) converts string 'year' to a number
	            _this.year = +params['year'];
	        });
	    };
	    /**
	     * Unsubscribe to our route parameters (roster year).
	     */
	    RosterComponent.prototype.ngOnDestroy = function () {
	        this.routeParamsSubscription.unsubscribe();
	    };
	    return RosterComponent;
	}());
	RosterComponent = __decorate([
	    core_1.Component({
	        selector: 'roster',
	        template: __webpack_require__(123),
	        styles: [__webpack_require__(124)]
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
	], RosterComponent);
	exports.RosterComponent = RosterComponent;
	var _a;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	"use strict";
	exports.ROSTER_DATA = [
	    {
	        year: 2017,
	        imagePath: './assets/team-photo-2017.jpg',
	        players: [
	            {
	                number: 2,
	                name: "Ben 'Beef' Sabourin",
	                year: 'Sophomore'
	            }
	        ]
	    },
	    {
	        year: 2016,
	        imagePath: './assets/team-photo-2016.jpg',
	        players: [
	            {
	                number: 1,
	                name: 'Nick Prozorovsky*',
	                year: 'Senior'
	            }
	        ]
	    },
	    {
	        year: 2015,
	        imagePath: './assets/team-photo-2015.jpg',
	        players: [
	            {
	                number: 1,
	                name: 'Nick Prozorovsky*',
	                year: 'Junior'
	            }
	        ]
	    }
	];


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Roster</h1>\n<ng-container *ngFor=\"let rosterYear of rosterData\">\n    <ng-container *ngIf=\"rosterYear.year === year\">\n        <div class=\"ui secondary pointing menu\">\n            <a class=\"item\" routerLink=\"/roster/2015\" [ngClass]=\"{'active': year === 2015}\">2015</a>\n            <a class=\"item\" routerLink=\"/roster/2016\" [ngClass]=\"{'active': year === 2016}\">2016</a>\n            <a class=\"item\" routerLink=\"/roster/2017\" [ngClass]=\"{'active': year === 2017}\">2017</a>\n        </div>\n        <img src=\"{{rosterYear.imagePath}}\"/>\n        <table class=\"ui celled table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Year</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let player of rosterYear.players\">\n                    <td>{{player.number}}</td>\n                    <td>{{player.name}}</td>\n                    <td>{{player.year}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <p>(*) indicates captain for that year</p>\n    </ng-container>\n</ng-container>";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(125);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "img {\n  width: 75%;\n  border: 1px solid #00004D;\n}\n", ""]);
	
	// exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var AbsentComponent = (function () {
	    function AbsentComponent() {
	    }
	    AbsentComponent.prototype.ngAfterViewInit = function () {
	        console.log('Absent Component!');
	        $(this.monthDropdown.nativeElement).dropdown();
	    };
	    return AbsentComponent;
	}());
	__decorate([
	    core_1.ViewChild('monthDropdown'),
	    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
	], AbsentComponent.prototype, "monthDropdown", void 0);
	AbsentComponent = __decorate([
	    core_1.Component({
	        selector: 'absent',
	        template: __webpack_require__(128),
	        styles: [__webpack_require__(129)]
	    }),
	    __metadata("design:paramtypes", [])
	], AbsentComponent);
	exports.AbsentComponent = AbsentComponent;
	var _a;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127)))

/***/ }),
/* 127 */,
/* 128 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Practice Absence Form</h1>\n\n<form class=\"ui form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>First Name <span class=\"required\">*</span></label>\n            <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n        </div>\n        <div class=\"field\">\n            <label>Last Name <span class=\"required\">*</span></label>\n            <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n        </div>\n    </div>\n    <div class=\"field\">\n        <label>Reason for missing or being late to practice <span class=\"required\">*</span></label>\n        <input type=\"text\" name=\"last-name\" placeholder=\"Better be good...\">\n    </div>\n    <div class=\"field\">\n        <label>From what time to what time is your conflict? <span class=\"required\">*</span></label>\n        <input type=\"text\" name=\"last-name\" placeholder=\"Time\">\n    </div>\n    <div class=\"field\">\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>What is the date that you will be missing? <span class=\"required\">*</span></label>\n                <input maxlength=\"2\" type=\"text\" name=\"day\" placeholder=\"Day\">\n            </div>\n            <div class=\"field\">\n                <label>&nbsp;</label>\n                <div #monthDropdown class=\"ui search selection dropdown\">\n                    <input type=\"hidden\" name=\"month\">\n                    <i class=\"dropdown icon\"></i>\n                    <div class=\"default text\">Month</div>\n                    <div class=\"menu\">\n                        <div class=\"item\" data-value=\"01\">January</div>\n                        <div class=\"item\" data-value=\"02\">February</div>\n                        <div class=\"item\" data-value=\"03\">March</div>\n                        <div class=\"item\" data-value=\"04\">April</div>\n                        <div class=\"item\" data-value=\"05\">May</div>\n                        <div class=\"item\" data-value=\"06\">June</div>\n                        <div class=\"item\" data-value=\"07\">July</div>\n                        <div class=\"item\" data-value=\"08\">August</div>\n                        <div class=\"item\" data-value=\"09\">September</div>\n                        <div class=\"item\" data-value=\"10\">October</div>\n                        <div class=\"item\" data-value=\"11\">November</div>\n                        <div class=\"item\" data-value=\"12\">December</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button class=\"ui button\" type=\"submit\">Submit</button>\n</form>";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(130);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "label {\n  text-align: left;\n}\n.ui.form {\n  width: 80%;\n  margin: 0 auto;\n}\n", ""]);
	
	// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var home_component_1 = __webpack_require__(29);
	var about_component_1 = __webpack_require__(35);
	var prospective_players_component_1 = __webpack_require__(39);
	var contact_component_1 = __webpack_require__(43);
	var practice_component_1 = __webpack_require__(79);
	var tournaments_component_1 = __webpack_require__(84);
	var roster_component_1 = __webpack_require__(121);
	var absent_component_1 = __webpack_require__(126);
	var team_history_component_1 = __webpack_require__(132);
	var awards_component_1 = __webpack_require__(137);
	var results_component_1 = __webpack_require__(142);
	exports.ROUTES = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'practice', component: practice_component_1.PracticeComponent },
	    { path: 'absent', component: absent_component_1.AbsentComponent },
	    { path: 'contact', component: contact_component_1.ContactComponent },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'about', component: about_component_1.AboutComponent },
	    { path: 'prospects', component: prospective_players_component_1.ProspectivePlayersComponent },
	    { path: 'tournaments/:year', component: tournaments_component_1.TournamentsComponent },
	    { path: 'roster/:year', component: roster_component_1.RosterComponent },
	    { path: 'history/:year', component: team_history_component_1.TeamHistoryComponent },
	    { path: 'awards', component: awards_component_1.AwardsComponent },
	    { path: 'results', component: results_component_1.ResultsComponent },
	    { path: '**', component: home_component_1.HomeComponent },
	];


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var history_year_data_1 = __webpack_require__(133);
	var router_1 = __webpack_require__(85);
	var TeamHistoryComponent = (function () {
	    // Inject the ActivatedRoute into our component
	    function TeamHistoryComponent(route) {
	        this.route = route;
	        // Results data to inject into our template
	        this.historyData = history_year_data_1.HISTORY_DATA;
	    }
	    /**
	     * Subscribe to our route parameters (tournament year).
	     */
	    TeamHistoryComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
	            // (+) converts string 'year' to a number
	            _this.year = +params['year'];
	        });
	    };
	    /**
	     * Unsubscribe to our route parameters (tournament year).
	     */
	    TeamHistoryComponent.prototype.ngOnDestroy = function () {
	        this.routeParamsSubscription.unsubscribe();
	    };
	    return TeamHistoryComponent;
	}());
	TeamHistoryComponent = __decorate([
	    core_1.Component({
	        selector: 'team-history',
	        template: __webpack_require__(134),
	        styles: [__webpack_require__(135)]
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
	], TeamHistoryComponent);
	exports.TeamHistoryComponent = TeamHistoryComponent;
	var _a;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	"use strict";
	exports.HISTORY_DATA = [
	    {
	        year: 2016,
	        imagePath: './assets/team-photo-2016.jpg',
	        summaryMarkup: "\n            <p>Illinois Ultimate came into the 2016 season with a taste of success and big shoes to fill. Returning captain Nick Prozorovsky and new captains Prayag Patel and Chris Buchta were tasked with the difficult prospect of replacing the 12 graduating players as well as coach Matt Stupca. Boomland coach Erik Huemiller and recent alum Matt West were able to fill the leadership void as the team looked to reload for another run at Nationals.</p>\n            <p>The tryouts for the team were very competitive, with the biggest incoming class in recent memory. The final roster included 7 rookies, 1 grad student, 5 former Boomland players, and 12 returners. The newest iteration of Illinois Ultimate tested themselves at Missouri Loves Company, but returned with shoulder injuries to seniors Nick Prozorovsky and Alex Guy that would hamper them for the rest of the season.</p>\n            <p>This spring season had the team heading to Florida, South Carolina, and Missouri in search of elite competition.</p>\n            <p>Mid February had the team flying south to compete at Warm Up. Unfortunately, the week prior had grad student Cody Gray breaking his hand in Irwin and senior Wilson Wang pulling his hamstring in the Armory, both big handler losses. On Saturday, the team started with 10-13 and 11-13 losses to Texas and Florida State. The third game of the day was against perennial powerhouse Pittsburgh. Illinois came out sloppy and was pressured into making many errors, resulting in a 1-7 score at half and an embarrassing 2-12 loss, finishing 0-4 on the day after another loss to BYU. Saturday started off better with a 13-5 win over host South Florida, but was followed by big losses to Virginia Tech and Auburn. Illinois finished the tournament 2-7, with a universe loss to in region rival Northwestern and only wins coming against South Florida.</p>\n            <p>With most of the team finally healthy, the team made the trip to Easterns for the second tournament of the season. The first game of the tournament was a rematch against Pittsburgh. This time, Illinois was prepared for the intensity and was able to make it a closer game, but still lost 12-15. Another rematch against Virginia Tech ended similarly, losing 11-14, and the team ended Saturday 0-4, with a 10-15 loss to UNC Darkside and an 11-13 loss to regional rival Michigan. On a wet, cold, and windy Sunday, Illinois was not able to come out with any fire and lost badly to James Madison and Connecticut, going 0-6 on the weekend.</p>\n            <p>The final regular season tournament of the year was Huck Finn and the boys from Illinois looked to bounce back from a so far unsuccessful regular season. With a mindset of improving for the series the Illini came out with a 7-0 lead at half on Indiana and closed it out with an 11-4 win. Dayton was the next game, which was a 13-4 win for the Illini which meant that they would play Maryland for the pool. Ankle injuries to Prayag Patel and Ben Foster meant that the O line was playing without two key contributors, but the team was able to tough out a 14-11 win, setting up a crossover game against Illinois State. In a very windy game, Illinois triumphed over their in state competitors in a 10-6 victory, securing a quarterfinals berth. The team closed out the tournament with losses to Arkansas and Purdue, and prepared themselves for Conferences.</p>\n            <p>Once again, Rantoul was host to Conferences, but this time there could be no complaints about the weather. Illinois started out strong with comfortable wins over the rest of the pool, including an 11-4 victory over UChicago. Winning the pool lined up a semifinal game against Illinois State, which was won handily 13-7 and set up a classic Illinois - Northwestern rematch. Unfortunately, the team struggled to find the endzone and for the second year in a row, lost to Northwestern at Conferences. In the 2nd place match against UChicago, Illinois was unable to find a groove and lost 9-11. With Regionals in two weeks and only one bid for the region, Illinois had a lot of work to do.</p>\n            <p>In a change of pace, Regionals was not hosted in Rockford, but in Fair Oaks, Indiana. The conditions were terrible, low temperatures coupled with heavy wind and rain meant that it would be difficult getting a good grip. In the first game against Kentucky, both O and D line were able to perform well, giving up no breaks and handing out a few of their own and finishing with a score of 12-6. The trend continued against Indiana, with Illinois winning 13-6. Next up was Notre Dame, a rematch of last year\u2019s finals, winner takes the pool and quarterfinals berth. A completely upwind/downwind game found the d line with opportunities to break, but never able to finish the job. With neither team being broken, Notre Dame won the flip and the game, 9-10. Illinois finished up the day with a 13-5 win over Michigan State to set up a quarterfinals matchup against Northwestern.</p>\n            <p>Conditions on Sunday were better and with a little support from Walden Nelson, the team was ready to avenge their recent losses. Illinois started on D and Northwestern came out with an break early in the game, but the team fought back and breaks were traded to have it be on serve at half. The second half commenced with more of a cleaner game, with both teams trading offensive holds. A chance at a break due to a Nick Pro sky was called back on a controversial observer ruling and the game reached softcap with the score 10-11. Chris Buchta tied up the score with a huck from Kevin Lin and the d line went out to try and break with the season on the line. After a turn from Northwestern, Illinois worked the disc down the field and rookie Jacob Cuthbert took a timeout outside of the endzone. One endzone set later, Prayag found Cuthbert for the win, sending Illinois to the semifinals.</p>\n            <p>Due to the loss in pool play, Illinois\u2019s matchup in the semifinals was Michigan. Despite the tough game before, Illinois had to come out hot if they wanted to win the game. Michigan came out of the gate fast, scoring on a huck. Illinois followed suit, and the two teams traded offensive holds until Michigan broke for 3-5. As the game went on, the defensive pressure from Michigan intensified and Illinois\u2019 o line was not able to match the goals that Michigan\u2019s o line was putting out. Coming out of half at 5-8, Illinois turned and was broken again. A late injury to Prayag pushed the hope of a comeback a little further out of reach and a senior d line was unable to keep Michigan from seizing the victory 10-15. Michigan went on to defeat Notre Dame 15-9 to take the bid to Nationals. Illinois finished the season with a 11-10 victory over Purdue for 3rd in the region.</p>\n            <p>Captain Nick Prozorovsky and John Saniat received 1st team All-Region honors and Captain Prayag Patel received 2nd team All-Region. Ben Sabourin and Jacob Cuthbert were voted All-Freshmen for the region, with Ben winning Freshman of the Year.</p>\n        "
	    },
	    {
	        year: 2015,
	        imagePath: './assets/team-photo-2015.jpg',
	        summaryMarkup: "\n            Hello\n        "
	    },
	];


/***/ }),
/* 134 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Team History</h1>\n<div class=\"ui secondary pointing menu\">\n    <a class=\"item\" routerLink=\"/history/2015\" [ngClass]=\"{'active': year === 2015}\">2015</a>\n    <a class=\"item\" routerLink=\"/history/2016\" [ngClass]=\"{'active': year === 2016}\">2016</a>\n    <a class=\"item\" routerLink=\"/history/2017\" [ngClass]=\"{'active': year === 2017}\">2017</a>\n</div>\n<h2 class=\"ui header\">{{year}}</h2>\n<ng-container *ngFor=\"let historyYear of historyData\">\n    <ng-container *ngIf=\"historyYear.year === year\">\n        <img src=\"{{historyYear.imagePath}}\"/>\n        <div class=\"summary\" [innerHTML]=\"historyYear.summaryMarkup\"></div>\n    </ng-container>\n</ng-container>\n<a *ngIf=\"year > 1994\" routerLink=\"/history/{{year - 1}}\"><i class=\"angle double left icon\"></i></a>\n<a *ngIf=\"year < 2016\" routerLink=\"/history/{{year + 1}}\"><i class=\"angle double right icon\"></i></a>";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(136);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "img {\n  width: 75%;\n  border: 1px solid #00004D;\n  margin-bottom: 15px;\n}\ni {\n  font-size: 2em;\n}\ni.right {\n  float: right;\n}\ni.left {\n  float: left;\n}\n.summary {\n  text-align: left;\n  margin-bottom: 20px;\n}\n", ""]);
	
	// exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var awards_data_1 = __webpack_require__(138);
	var AwardsComponent = (function () {
	    function AwardsComponent() {
	        // Awards data to inject into our template
	        this.awardData = awards_data_1.AWARDS_DATA;
	    }
	    AwardsComponent.prototype.ngOnInit = function () { };
	    return AwardsComponent;
	}());
	AwardsComponent = __decorate([
	    core_1.Component({
	        selector: 'awards',
	        template: __webpack_require__(139),
	        styles: [__webpack_require__(140)]
	    }),
	    __metadata("design:paramtypes", [])
	], AwardsComponent);
	exports.AwardsComponent = AwardsComponent;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

	"use strict";
	exports.AWARDS_DATA = [
	    {
	        year: 2016,
	        name: 'Nick Prozorovsky',
	        award: '1st Team'
	    },
	    {
	        year: 2016,
	        name: 'Johnny Saniat',
	        award: '1st Team'
	    }
	];


/***/ }),
/* 139 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Awards</h1>\n<table class=\"ui celled table\">\n    <thead>\n        <tr>\n            <th>Year</th>\n            <th>Name</th>\n            <th>Award</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let award of awardData\">\n            <td>{{award.year}}</td>\n            <td>{{award.name}}</td>\n            <td>{{award.award}}</td>\n        </tr>\n    </tbody>\n</table>\n<p>*All-Freshman team added in 2013, FOTY given to the All-Freshman member with the most 1st place votes</p>\n<p>*Player of the year award added in 2013, POTY given to the All-Region member with the most 1st place votes</p>\n<p>*Coach of the Year added in 2009</p>\n<p>*2nd-Team All Region added in 2009</p>\n<p>*Awards first given out in 2002</p>";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(141);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var results_data_1 = __webpack_require__(143);
	var ResultsComponent = (function () {
	    function ResultsComponent() {
	        // Results data to inject into our template
	        this.resultData = results_data_1.RESULTS_DATA;
	    }
	    ResultsComponent.prototype.ngOnInit = function () { };
	    return ResultsComponent;
	}());
	ResultsComponent = __decorate([
	    core_1.Component({
	        selector: 'results',
	        template: __webpack_require__(144),
	        styles: [__webpack_require__(145)]
	    }),
	    __metadata("design:paramtypes", [])
	], ResultsComponent);
	exports.ResultsComponent = ResultsComponent;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	"use strict";
	exports.RESULTS_DATA = [
	    {
	        year: 2016,
	        sectionals: '3rd',
	        regionals: '3rd',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://play.usaultimate.org/teams/events/Eventteam/?TeamId=nQzsCO0fKbUUEFZfKJ%2fOUotd%2f1PM6wo35HPaXJEMUC8%3d'
	    },
	    {
	        year: 2015,
	        sectionals: '2nd',
	        regionals: '1st',
	        nationals: '13th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://play.usaultimate.org/teams/events/Eventteam/?TeamId=T%2bV6D2XyLTlkLA%2fX2WpaiPGnYy6S3Dn%2fmcblfo08DNo%3d'
	    }
	];


/***/ }),
/* 144 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Results</h1>\n<table class=\"ui celled table\">\n    <thead>\n    <tr>\n        <th>Year</th>\n        <th>Sectionals</th>\n        <th>Regionals</th>\n        <th>Nationals</th>\n        <th>Team Page</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let result of resultData\">\n        <td>{{result.year}}</td>\n        <td>{{result.sectionals}}</td>\n        <td>{{result.regionals}}</td>\n        <td>{{result.nationals}}</td>\n        <td><a target=\"_blank\" href=\"{{result.teamPageLink}}\">{{result.teamPageLabel}}</a></td>\n    </tr>\n    </tbody>\n</table>";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(146);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var platform_browser_1 = __webpack_require__(25);
	var router_1 = __webpack_require__(85);
	var team_history_component_1 = __webpack_require__(132);
	var awards_component_1 = __webpack_require__(137);
	var results_component_1 = __webpack_require__(142);
	var app_routes_1 = __webpack_require__(131);
	var HistoryModule = (function () {
	    function HistoryModule() {
	    }
	    return HistoryModule;
	}());
	HistoryModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            router_1.RouterModule.forRoot(app_routes_1.ROUTES)
	        ],
	        declarations: [
	            team_history_component_1.TeamHistoryComponent,
	            awards_component_1.AwardsComponent,
	            results_component_1.ResultsComponent
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], HistoryModule);
	exports.HistoryModule = HistoryModule;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(85);
	var menu_desktop_component_1 = __webpack_require__(149);
	var menu_mobile_component_1 = __webpack_require__(155);
	var left_sidebar_component_1 = __webpack_require__(159);
	var right_sidebar_component_1 = __webpack_require__(163);
	var page_frame_component_1 = __webpack_require__(170);
	var app_routes_1 = __webpack_require__(131);
	var footer_component_1 = __webpack_require__(174);
	var PageFrameModule = (function () {
	    function PageFrameModule() {
	    }
	    return PageFrameModule;
	}());
	PageFrameModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            router_1.RouterModule.forRoot(app_routes_1.ROUTES)
	        ],
	        declarations: [
	            page_frame_component_1.PageFrameComponent,
	            menu_desktop_component_1.MenuDesktopComponent,
	            menu_mobile_component_1.MenuMobileComponent,
	            left_sidebar_component_1.LeftSidebarComponent,
	            right_sidebar_component_1.RightSidebarComponent,
	            footer_component_1.FooterComponent
	        ],
	        exports: [
	            page_frame_component_1.PageFrameComponent
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], PageFrameModule);
	exports.PageFrameModule = PageFrameModule;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var MenuDesktopComponent = (function () {
	    function MenuDesktopComponent() {
	    }
	    /**
	     * Initialize our mobile menu dropdown.
	     */
	    MenuDesktopComponent.prototype.ngAfterViewInit = function () {
	        $(this.teamDropdown.nativeElement).dropdown({});
	        $(this.historyDropdown.nativeElement).dropdown({});
	    };
	    return MenuDesktopComponent;
	}());
	__decorate([
	    core_1.ViewChild('teamDropdown'),
	    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
	], MenuDesktopComponent.prototype, "teamDropdown", void 0);
	__decorate([
	    core_1.ViewChild('historyDropdown'),
	    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
	], MenuDesktopComponent.prototype, "historyDropdown", void 0);
	MenuDesktopComponent = __decorate([
	    core_1.Component({
	        selector: 'menu-desktop',
	        template: __webpack_require__(150),
	        styles: [__webpack_require__(152)]
	    }),
	    __metadata("design:paramtypes", [])
	], MenuDesktopComponent);
	exports.MenuDesktopComponent = MenuDesktopComponent;
	var _a, _b;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127)))

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"header\">\n    <a routerLink=\"/home\"><img class=\"crest\" src=\"" + __webpack_require__(151) + "\"/></a>\n    <a routerLink=\"/home\"><h1 class=\"header-text\">Illinois Ultimate</h1></a>\n</div>\n\n<div class=\"ui pointing stackable menu\">\n    <a routerLink=\"/home\"       [routerLinkActive]=\"['active']\" class=\"item active\"><i class=\"home icon\"></i>Home</a>\n    <a routerLink=\"/about\"      [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"info icon\"></i>About Us</a>\n    <a routerLink=\"/prospects\"  [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"child icon\"></i>Prospective Players</a>\n    <div #teamDropdown class=\"ui dropdown item\">\n        <i class=\"user icon\"></i>Team<i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <div routerLink=\"/practice\"          [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"soccer icon\"></i>Practice</div>\n            <div routerLink=\"/tournaments/2017\"  [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"calendar icon\"></i>Tournaments</div>\n            <div routerLink=\"/roster/2017\"       [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"ordered list icon\"></i>Roster</div>\n            <div routerLink=\"/absent\"            [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"remove icon\"></i>Absent Form</div>\n        </div>\n    </div>\n    <div #historyDropdown class=\"ui dropdown item\">\n        <i class=\"fast backward icon\"></i>History<i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <div routerLink=\"/history/2016\" [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"undo icon\"></i>Team History</div>\n            <div routerLink=\"/awards\"       [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"trophy icon\"></i>Awards</div>\n            <div routerLink=\"/results\"      [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"archive icon\"></i>Past Results</div>\n        </div>\n    </div>\n    <a href=\"http://www.illiniulti.blogspot.com/\" target=\"_blank\" class=\"item\"><i class=\"comment icon\"></i>Blog</a>\n    <a routerLink=\"/contact\" [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"mail icon\"></i>Contact Us</a>\n</div>";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crest.png";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(153);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n  width: 100%;\n  background-image: url(" + __webpack_require__(154) + ");\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header .header-text {\n  font-size: 72px;\n  font-family: 'Oswald', sans-serif;\n  color: #ff6226;\n  text-transform: uppercase;\n  padding: 25px;\n  margin: 0;\n  letter-spacing: 2px;\n  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;\n}\n.header .crest {\n  max-height: 80px;\n  max-width: 50px;\n}\n.ui.menu {\n  margin-top: 0;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n", ""]);
	
	// exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/header-background.jpg";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var MenuMobileComponent = (function () {
	    function MenuMobileComponent() {
	    }
	    /**
	     * Initialize our mobile menu dropdown.
	     */
	    MenuMobileComponent.prototype.ngAfterViewInit = function () {
	        // $(this.teamDropdown.nativeElement).dropdown({});
	        // $(this.historyDropdown.nativeElement).dropdown({});
	        $(this.mobileDropdown.nativeElement).dropdown({});
	    };
	    return MenuMobileComponent;
	}());
	__decorate([
	    core_1.ViewChild('teamDropdown'),
	    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
	], MenuMobileComponent.prototype, "teamDropdown", void 0);
	__decorate([
	    core_1.ViewChild('historyDropdown'),
	    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
	], MenuMobileComponent.prototype, "historyDropdown", void 0);
	__decorate([
	    core_1.ViewChild('mobileDropdown'),
	    __metadata("design:type", typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object)
	], MenuMobileComponent.prototype, "mobileDropdown", void 0);
	MenuMobileComponent = __decorate([
	    core_1.Component({
	        selector: 'menu-mobile',
	        template: __webpack_require__(156),
	        styles: [__webpack_require__(157)]
	    }),
	    __metadata("design:paramtypes", [])
	], MenuMobileComponent);
	exports.MenuMobileComponent = MenuMobileComponent;
	var _a, _b, _c;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127)))

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header\">\n    <div #mobileDropdown class=\"ui inline dropdown\">\n        <h1 class=\"header-text\">Illinois Ultimate</h1>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <a routerLink=\"/home\"               [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"home icon\"></i>Home</a>\n            <a routerLink=\"/about\"              [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"info icon\"></i>About Us</a>\n            <a routerLink=\"/prospects\"          [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"child icon\"></i>Prospective Players</a>\n            <a routerLink=\"/practice\"           [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"soccer icon\"></i>Practice</a>\n            <a routerLink=\"/tournaments/2017\"   [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"calendar icon\"></i>Tournaments</a>\n            <a routerLink=\"/roster/2017\"        [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"ordered list icon\"></i>Roster</a>\n            <a routerLink=\"/absent\"             [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"remove icon\"></i>Absent Form</a>\n            <a routerLink=\"/history/2016\"       [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"undo icon\"></i>Team History</a>\n            <a routerLink=\"/awards\"             [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"trophy icon\"></i>Awards</a>\n            <a routerLink=\"/results\"            [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"archive icon\"></i>Past Results</a>\n            <a routerLink=\"/blog\"               [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"comment icon\"></i>Blog</a>\n            <a routerLink=\"/contact\"            [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"mail icon\"></i>Contact Us</a>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(158);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n  width: 100%;\n  background-image: url(" + __webpack_require__(154) + ");\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.header .ui.dropdown {\n  text-align: center;\n}\n.header .header-text {\n  font-size: 72px;\n  font-family: 'Oswald', sans-serif;\n  color: #ff6226;\n  text-transform: uppercase;\n  padding: 10px;\n  margin: 0;\n  letter-spacing: 2px;\n  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;\n}\n.header .dropdown.icon {\n  font-size: 20px;\n  color: white;\n}\n.header .menu {\n  width: 100%;\n}\n", ""]);
	
	// exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var LeftSidebarComponent = (function () {
	    function LeftSidebarComponent() {
	    }
	    LeftSidebarComponent.prototype.ngAfterViewInit = function () {
	        this.initializeTwitterWidget();
	    };
	    /**
	     * Twitter script for initializing our Twitter Timeline widget
	     */
	    LeftSidebarComponent.prototype.initializeTwitterWidget = function () {
	        !function (d, s, id) {
	            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
	            if (!d.getElementById(id)) {
	                js = d.createElement(s);
	                js.id = id;
	                js.src = p + "://platform.twitter.com/widgets.js";
	                fjs.parentNode.insertBefore(js, fjs);
	            }
	        }(document, "script", "twitter-wjs");
	    };
	    return LeftSidebarComponent;
	}());
	LeftSidebarComponent = __decorate([
	    core_1.Component({
	        selector: 'left-sidebar',
	        template: __webpack_require__(160),
	        styles: [__webpack_require__(161)]
	    }),
	    __metadata("design:paramtypes", [])
	], LeftSidebarComponent);
	exports.LeftSidebarComponent = LeftSidebarComponent;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"ui segment twitter-sidebar\">\n    <a class=\"twitter-timeline\" height=\"500px\" href=\"https://twitter.com/IlliniUlti\" data-widget-id=\"605414836369883136\">Tweets by @IlliniUlti</a>\n</div>";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(162);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".twitter-sidebar {\n  padding: 0;\n  max-width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);
	
	// exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var RightSidebarComponent = (function () {
	    function RightSidebarComponent() {
	    }
	    RightSidebarComponent.prototype.ngOnInit = function () { };
	    return RightSidebarComponent;
	}());
	RightSidebarComponent = __decorate([
	    core_1.Component({
	        selector: 'right-sidebar',
	        template: __webpack_require__(164),
	        styles: [__webpack_require__(168)]
	    }),
	    __metadata("design:paramtypes", [])
	], RightSidebarComponent);
	exports.RightSidebarComponent = RightSidebarComponent;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"ui segment paypal-sidebar\">\n    <h2 class=\"ui header\">Help Out Illinois Ultimate!</h2>\n\n    <p>Illinois Ultimate is mostly student-funded, help us out by donating!</p>\n    <a href=\"https://www.paypal.me/illinoisUltimate\" target=\"_blank\">\n        <img class=\"paypal-donate\" src=\"" + __webpack_require__(165) + "\"/>\n    </a>\n</div>\n<a href=\"https://www.facebook.com/IllinoisUltimate\" target=\"_blank\">\n    <img class=\"social-media-button hvr-sink\" src=\"" + __webpack_require__(166) + "\"/>\n</a>\n<a href=\"https://twitter.com/illiniulti\" target=\"_blank\">\n    <img class=\"social-media-button hvr-sink\" src=\"" + __webpack_require__(167) + "\"/>\n</a>";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/paypal-donate.png";

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/facebook-button.png";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/twitter-button.png";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(169);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".paypal-sidebar {\n  max-width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.paypal-sidebar p {\n  text-indent: 0;\n  margin-bottom: 0;\n}\n.paypal-donate {\n  width: 100px;\n}\n.ui.header {\n  margin-bottom: 0;\n}\n.social-media-button {\n  width: 40%;\n  max-width: 70px;\n  display: inline-block;\n  margin: 3px;\n  border: 1px solid #00004D;\n  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);\n}\n", ""]);
	
	// exports


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var PageFrameComponent = (function () {
	    function PageFrameComponent() {
	    }
	    PageFrameComponent.prototype.ngOnInit = function () { };
	    return PageFrameComponent;
	}());
	PageFrameComponent = __decorate([
	    core_1.Component({
	        selector: 'page-frame',
	        template: __webpack_require__(171),
	        styles: [__webpack_require__(172)]
	    }),
	    __metadata("design:paramtypes", [])
	], PageFrameComponent);
	exports.PageFrameComponent = PageFrameComponent;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

	module.exports = "<!--Header-->\n<menu-desktop class=\"menu-desktop\"></menu-desktop>\n<menu-mobile class=\"menu-mobile\"></menu-mobile>\n\n<!--Content-->\n<div class=\"main-container\">\n    <div class=\"left-sidebar\">\n        <left-sidebar></left-sidebar>\n    </div>\n    <div class=\"main-content\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"right-sidebar\">\n        <right-sidebar></right-sidebar>\n    </div>\n    <footer></footer>\n</div>";

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(173);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".menu-desktop,\n.left-sidebar,\n.right-sidebar {\n  display: none;\n}\n.main-container {\n  margin-bottom: 40px;\n}\n@media screen and (min-width: 768px) {\n  .main-container {\n    display: flex;\n  }\n  .menu-mobile {\n    display: none;\n  }\n  .menu-desktop,\n  .left-sidebar,\n  .right-sidebar {\n    display: block;\n  }\n  .main-content {\n    padding: 0 10px;\n    width: 100%;\n  }\n  .left-sidebar {\n    margin-left: 10px;\n    flex: 0 0 200px;\n  }\n  .right-sidebar {\n    margin-right: 10px;\n    margin-left: auto;\n    flex: 0 0 150px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .main-content {\n    padding: 0 30px;\n  }\n  .left-sidebar {\n    margin-left: 50px;\n  }\n  .right-sidebar {\n    margin-right: 50px;\n    flex: 0 0 200px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .main-content {\n    padding: 0 50px;\n  }\n  .left-sidebar {\n    margin-left: 80px;\n  }\n  .right-sidebar {\n    margin-right: 80px;\n  }\n}\n", ""]);
	
	// exports


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent.prototype.ngAfterViewInit = function () { };
	    return FooterComponent;
	}());
	FooterComponent = __decorate([
	    core_1.Component({
	        selector: 'footer',
	        template: __webpack_require__(175),
	        styles: [__webpack_require__(176)]
	    }),
	    __metadata("design:paramtypes", [])
	], FooterComponent);
	exports.FooterComponent = FooterComponent;


/***/ }),
/* 175 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"ui menu\">\n    <p>For support or to report website issues, email the admin at wcjphoenix@gmail.com or the creator at nick.prozorovsky@gmail.com</p>\n</div>";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(177);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui.menu {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\np {\n  margin: 0 auto;\n  font-size: 10px;\n}\n@media screen and (min-width: 768px) {\n  p {\n    font-size: 12px;\n  }\n}\n", ""]);
	
	// exports


/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUuanBnIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzPzcyMzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5sZXNzP2FhZTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb3NwZWN0aXZlLXBsYXllcnMvcHJvc3BlY3RpdmUtcGxheWVycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9zcGVjdGl2ZS1wbGF5ZXJzL3Byb3NwZWN0aXZlLXBsYXllcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9zcGVjdGl2ZS1wbGF5ZXJzL3Byb3NwZWN0aXZlLXBsYXllcnMuY29tcG9uZW50Lmxlc3M/MmI1MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb3NwZWN0aXZlLXBsYXllcnMvcHJvc3BlY3RpdmUtcGxheWVycy5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmxlc3M/MTc2YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQtc3R5bGUvc3R5bGVzLmNzcz9jOTY1Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkLXN0eWxlL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2dsb2JhbC9iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcz9jNjA3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS90ZWFtLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2RpcmVjdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvc2VydmljZXMvZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9tYXBzLWFwaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL3NlcnZpY2VzL21hbmFnZXJzL2NpcmNsZS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9tYXJrZXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy9nb29nbGUtbWFwLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy9nb29nbGUtbWFwLWluZm8td2luZG93LmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9kaXJlY3RpdmVzL2dvb2dsZS1tYXAta21sLWxheWVyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtbWFya2VyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtcG9seWdvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy9nb29nbGUtbWFwLXBvbHlsaW5lLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtcG9seWxpbmUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL3V0aWxzL2Jyb3dzZXItZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL25vb3AtbWFwcy1hcGktbG9hZGVyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9jb3JlLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RlYW0vcHJhY3RpY2UvcHJhY3RpY2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS9wcmFjdGljZS9kYXRhL3ByYWN0aWNlLmRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZWFtL3ByYWN0aWNlL3ByYWN0aWNlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS9wcmFjdGljZS9wcmFjdGljZS5jb21wb25lbnQubGVzcz84NzlhIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS9wcmFjdGljZS9wcmFjdGljZS5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RlYW0vdG91cm5hbWVudHMvdG91cm5hbWVudHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS90b3VybmFtZW50cy9kYXRhL3RvdXJuYW1lbnRzLmRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZWFtL3RvdXJuYW1lbnRzL3RvdXJuYW1lbnRzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS90b3VybmFtZW50cy90b3VybmFtZW50cy5jb21wb25lbnQubGVzcz85MmI0Iiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS90b3VybmFtZW50cy90b3VybmFtZW50cy5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RlYW0vcm9zdGVyL3Jvc3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZWFtL3Jvc3Rlci9kYXRhL3Jvc3RlcnMuZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RlYW0vcm9zdGVyL3Jvc3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RlYW0vcm9zdGVyL3Jvc3Rlci5jb21wb25lbnQubGVzcz8zYmIwIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS9yb3N0ZXIvcm9zdGVyLmNvbXBvbmVudC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS9hYnNlbnQvYWJzZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RlYW0vYWJzZW50L2Fic2VudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RlYW0vYWJzZW50L2Fic2VudC5jb21wb25lbnQubGVzcz83ZjlhIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVhbS9hYnNlbnQvYWJzZW50LmNvbXBvbmVudC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hpc3RvcnkvdGVhbS1oaXN0b3J5L3RlYW0taGlzdG9yeS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oaXN0b3J5L3RlYW0taGlzdG9yeS9kYXRhL2hpc3RvcnkteWVhci5kYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS90ZWFtLWhpc3RvcnkvdGVhbS1oaXN0b3J5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS90ZWFtLWhpc3RvcnkvdGVhbS1oaXN0b3J5LmNvbXBvbmVudC5sZXNzPzZjODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oaXN0b3J5L3RlYW0taGlzdG9yeS90ZWFtLWhpc3RvcnkuY29tcG9uZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oaXN0b3J5L2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS9hd2FyZHMvZGF0YS9hd2FyZHMuZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hpc3RvcnkvYXdhcmRzL2F3YXJkcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hpc3RvcnkvYXdhcmRzL2F3YXJkcy5jb21wb25lbnQubGVzcz9hMTIwIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS9yZXN1bHRzL2RhdGEvcmVzdWx0cy5kYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oaXN0b3J5L3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQubGVzcz85MjhjIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGlzdG9yeS9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1mcmFtZS9wYWdlLWZyYW1lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1kZXNrdG9wL21lbnUtZGVza3RvcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL21lbnUtZGVza3RvcC9tZW51LWRlc2t0b3AuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbWVudS9jcmVzdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL21lbnUtZGVza3RvcC9tZW51LWRlc2t0b3AuY29tcG9uZW50Lmxlc3M/ODhkOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1kZXNrdG9wL21lbnUtZGVza3RvcC5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFnZS1mcmFtZS9tZW51L2hlYWRlci1iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1tb2JpbGUvbWVudS1tb2JpbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1mcmFtZS9tZW51LW1vYmlsZS9tZW51LW1vYmlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1tb2JpbGUvbWVudS1tb2JpbGUuY29tcG9uZW50Lmxlc3M/ODczNSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1tb2JpbGUvbWVudS1tb2JpbGUuY29tcG9uZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1mcmFtZS9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1mcmFtZS9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5sZXNzP2QzMTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL3JpZ2h0LXNpZGViYXIvcmlnaHQtc2lkZWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL3JpZ2h0LXNpZGViYXIvcmlnaHQtc2lkZWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFnZS1mcmFtZS9sZWZ0LXNpZGViYXIvcGF5cGFsLWRvbmF0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbGVmdC1zaWRlYmFyL2ZhY2Vib29rLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbGVmdC1zaWRlYmFyL3R3aXR0ZXItYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvcmlnaHQtc2lkZWJhci9yaWdodC1zaWRlYmFyLmNvbXBvbmVudC5sZXNzP2UxNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL3JpZ2h0LXNpZGViYXIvcmlnaHQtc2lkZWJhci5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvcGFnZS1mcmFtZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL3BhZ2UtZnJhbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL3BhZ2UtZnJhbWUuY29tcG9uZW50Lmxlc3M/M2FkMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvcGFnZS1mcmFtZS5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLWZyYW1lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3M/Y2I2MCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtZnJhbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlEQUEyRTtBQUMzRSxxQ0FBK0M7QUFFL0MsNENBQTZDO0FBQzdDOztHQUVFO0FBRUYsc0ZBQXFGO0FBQ3JGLEdBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDN0IscUJBQWMsRUFBRSxDQUFDO0FBQ3JCLEVBQUM7QUFDRCxhQUFZO0FBQ1osa0RBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JwRCxxQ0FBeUM7QUFDekMsd0NBQXlFO0FBQ3pFLGtEQUEyRDtBQUMzRCxzQ0FBMkM7QUFJM0MsZ0RBQXNEO0FBQ3RELGlEQUF5RDtBQUN6RCwrREFBa0c7QUFDbEcsbURBQStEO0FBQy9ELCtDQUErQztBQUUvQyw2Q0FBZ0Q7QUFDaEQsaURBQXlEO0FBQ3pELG9EQUFpRTtBQXlCakU7S0FBQTtLQUF3QixDQUFDO0tBQUQsZ0JBQUM7QUFBRCxFQUFDO0FBQXpCO0tBdkJDLGVBQVEsQ0FBQztTQUNOLE9BQU8sRUFBRTthQUNM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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixZQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsb0RBQW9EO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbi8qXG4gT3VyIGFwcGxpY2F0aW9uIGNvZGVcbiovXG5cbi8vIFR1cm5zIG9mZiBhc3NlcnRpb25zIGFuZCBvdGhlciBjaGVja3Mgd2l0aGluIHRoZSBmcmFtZXdvcmsgaWYgd2UgYXJlIGluIHByb2R1Y3Rpb25cbmlmIChwcm9jZXNzLmVudi5FTlYgPT09ICdwcm9kJykge1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG59XG4vLyBCb290c3RyYXBcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL21haW4udHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9zcGVjdGl2ZVBsYXllcnNDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9zcGVjdGl2ZS1wbGF5ZXJzL3Byb3NwZWN0aXZlLXBsYXllcnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVGVhbU1vZHVsZSB9IGZyb20gXCIuL3RlYW0vdGVhbS5tb2R1bGVcIjtcbmltcG9ydCB7IEhpc3RvcnlNb2R1bGUgfSBmcm9tIFwiLi9oaXN0b3J5L2hpc3RvcnkubW9kdWxlXCI7XG5pbXBvcnQgeyBQYWdlRnJhbWVNb2R1bGUgfSBmcm9tIFwiLi9wYWdlLWZyYW1lL3BhZ2UtZnJhbWUubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICAvLyBGb3Jtc01vZHVsZSxcbiAgICAgICAgLy8gQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgLy8gICAgIGFwaUtleTogJ0FJemFTeUJSSVhBazV4ZHZuM2V6eXBzU2U1NWY4ZFpoY0hoZUFaOCdcbiAgICAgICAgLy8gfSksXG4gICAgICAgIFBhZ2VGcmFtZU1vZHVsZSxcbiAgICAgICAgVGVhbU1vZHVsZSxcbiAgICAgICAgSGlzdG9yeU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQWJvdXRDb21wb25lbnQsXG4gICAgICAgIFByb3NwZWN0aXZlUGxheWVyc0NvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdENvbXBvbmVudFxuICAgIF0sXG4gICAgLy8gVXNlIGhhc2ggc3RyYXRlZ3kgc28gcGFnZSByZWZyZXNoZXMgb24gR2l0aHViIHBhZ2VzIHJvdXRlIGNvcnJlY3RseVxuICAgIHByb3ZpZGVyczogWyB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBdLFxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQubGVzcycpXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIb21lIENvbXBvbmVudCEnKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGltZyBjbGFzcz1cXFwiaG9tZS1pbWFnZVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUuanBnXCIpICsgXCJcXFwiLz5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaG9tZS5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUuanBnXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWUuY29tcG9uZW50Lmxlc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWUtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwIHJnYmEoMzQsIDM2LCAzOCwgMC4xNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDREO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhYm91dCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Fib3V0LmNvbXBvbmVudC5sZXNzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBYm91dCBDb21wb25lbnQhJyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDEgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+QWJvdXQgVXM8L2gxPlxcbjxwPklsbGlub2lzIFVsdGltYXRlIGlzIG9uZSBvZiB0aGUgcHJlbWllciB1bHRpbWF0ZSBwcm9ncmFtcyBpbiB0aGUgTWlkd2VzdCBhbmQgZnJlcXVlbnRseSByYW5rcyBpbiB0aGUgTmF0aW9uYWwgdG9wIDI1LiBXZSBzdHJpdmUgdG8gY29udGVuZCB3aXRoIHRoZSBiZXN0IHByb2dyYW1zIGluIHRoZSBjb3VudHJ5IGFuZCBoYXZlIHF1YWxpZmllZCB0byBjb21wZXRlIGF0IE5hdGlvbmFscyA3IG9mIHRoZSBsYXN0IDEwIHllYXJzLiBXZSBhcmUgYSBwcm9ncmFtIHRoYXQgcHJpZGVzIGl0c2VsZiBvbiBkZXZlbG9waW5nIHBsYXllcnMgd2hvIGNvbWUgdG8gSWxsaW5vaXMgd2l0aCBubyBleHBlcmllbmNlIHBsYXlpbmcgY29tcGV0aXRpdmUgdWx0aW1hdGUuIFdlIHRlYWNoIGFsbCBsZXZlbHMgb2YgdWx0aW1hdGUsIGZyb20gdGhlIGJhc2ljcyBvZiB0aHJvd2luZyBhIGZvcmVoYW5kIGFsbCB0aGUgd2F5IHRvIHRocm93aW5nIGJvbWJzIGluIHRoZSB3b3JzdCBvZiB3ZWF0aGVyLjwvcD5cXG48aDIgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+TWlzc2lvbiBTdGF0ZW1lbnQ8L2gyPlxcbjxwPldlIHdhbnQgdG8gY29tcGV0ZSBhdCB0aGUgaGlnaGVzdCBsZXZlbCBwb3NzaWJsZSBpbiBjb2xsZWdlIHVsdGltYXRlIHdoaWxlIHJlbWFpbmluZyByZXNwZWN0ZnVsIHRvIG91ciBvcHBvbmVudHMuICBXZSB3YW50IHRvIGRldmVsb3AgYWxsIG91ciBvZiBwbGF5ZXJzIHRvIGJlY29tZSB0aGUgYmVzdCB0aGV5IGNhbiBiZSBhdCB1bHRpbWF0ZSwgYXMgd2VsbCBhcyBwbGF5ZXJzIHdobyBleGVtcGxpZnkgdGhlIHRydWUgbWVhbmluZyBvZiBzcG9ydHNtYW5zaGlwLCB3aGljaCBpcyBwaXZvdGFsIHRvIHRoZSBwcm9ncmVzcyBvZiB1bHRpbWF0ZSBmcmlzYmVlIGluIGl0cyBjdXJyZW50IHN0YXRlLjwvcD5cXG48aDIgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+VGVhbSBTdHJ1Y3R1cmUvQWZmaWxpYXRpb24gd2l0aCBVbml2ZXJzaXR5PC9oMj5cXG48cD5PdXIgdGVhbSBpcyBhIFJlZ2lzdGVyZWQgU3R1ZGVudCBPcmdhbml6YXRpb24gKFJTTykgYXQgdGhlIFVuaXZlcnNpdHkgb2YgSWxsaW5vaXMgYW5kIHdlIGFyZSBjbGFzc2lmaWVkIGFzIGEgY2x1YiBzcG9ydC4gV2UgcmVjZWl2ZSBzb21lIGZ1bmRpbmcgZnJvbSB0aGUgVW5pdmVyc2l0eSB0aGF0IGhlbHBzIHBheSBmb3Igb3VyIHRyYXZlbCBjb3N0cyBhbmQgaG90ZWxzIHdoaWxlIHdlIGFyZSBhdCB0b3VybmFtZW50cy48L3A+XFxuPHA+V2UgYXJlIGEgbWVtYmVyIG9mIHRoZSBVU0FVICBDb2xsZWdlIFNlcmllcyBhbmQgY29tcGV0ZSBpbiBhIHNlcmllcyBvZiB0b3VybmFtZW50cyB0aGF0ICBjdWxtaW5hdGUgaW4gdGhlIENvbGxlZ2UgQ2hhbXBpb25zaGlwcyBoZWxkIGV2ZXJ5IHllYXIgZHVyaW5nIE1lbW9yaWFsIERheSB3ZWVrZW5kLiBNb3N0LCBpZiBub3QgYWxsLCBzdGF0ZSBzY2hvb2xzIGhhdmUgZXN0YWJsaXNoZWQgdWx0aW1hdGUgdGVhbXMgYW5kIG1hbnkgc21hbGxlciBzY2hvb2xzIGhhdmUgdGVhbXMgYXMgd2VsbC4gIFdlIGNvbXBldGUgaW4gdGhlIElsbGlub2lzIGNvbmZlcmVuY2Ugd2hpY2ggaXMgYXMgeW91IGNhbiBndWVzcywgdGhlIHNjaG9vbHMgaW4gdGhlIHN0YXRlIG9mIElsbGlub2lzLiBUaGUgbmV4dCBsYXJnZXN0IGRpdmlzaW9uIGlzIHRoZSBHcmVhdCBMYWtlcyBSZWdpb24sIHdoaWNoIGluY2x1ZGVzIHRoZSBzdGF0ZXMgb2YgSWxsaW5vaXMsIEluZGlhbmEsIE1pY2hpZ2FuLCBhbmQgS2VudHVja3kuIFRoZSBmaW5hbCBzdGVwIGlzIHRoZSBhZm9yZW1lbnRpb25lZCBOYXRpb25hbCBDaGFtcGlvbnNoaXBzLjwvcD5cXG48cD5PdXIgcHJvZ3JhbSBpcyBzcGxpdCB1cCBpbnRvIHR3byB0ZWFtcywgQSBhbmQgQi4gT3VyIEEgdGVhbSBpcyBhIGdyb3VwIG9mIGluZGl2aWR1YWxzIHdobyBhcmUgdmVyeSBkZWRpY2F0ZWQgdG8gdGhlIHRlYW0gYW5kIHdobyBwdXQgaW4gYSBsYXJnZSBhbW91bnQgb2YgdGltZSBmb3IgcHJhY3RpY2VzIGFzIHdlbGwgYXMgdHJhaW5pbmcgb3V0c2lkZSBvZiBwcmFjdGljZXMuIE91ciBCIHRlYW0gaXMgbW9yZSBvcmllbnRlZCB0b3dhcmRzIHRoZSBkZXZlbG9wbWVudCBvZiB5b3VuZ2VyIG9yIGluZXhwZXJpZW5jZWQgcGxheWVycy4gQiB0ZWFtIHByb3ZpZGVzIGEgbXVjaCBtb3JlIHJlbGF4ZWQgYXRtb3NwaGVyZSBidXQgc3RpbGwgcmVtYWlucyBjb21wZXRpdGl2ZSB3aXRoIGFsbCBvdGhlciBCIHRlYW1zIGluIHRoZSByZWdpb24sIGFuZCBldmVuIGJlYXRzIHNvbWUgc21hbGxlciBzY2hvb2xzJyBBIHRlYW1zLjwvcD5cXG48cD5BIHRlYW0gaGFzIHRyeW91dHMgZWFjaCB5ZWFyLiBUaGlzIHllYXIncyB0cnlvdXRzIHdpbGwgY29uc2lzdCBvZiBmb3VyIGZhbGwgdG91cm5hbWVudHMuIFRoZXJlIHdpbGwgYmUgYSByb3VuZCBvZiBjdXRzIG1hZGUgYWZ0ZXIgdGhlIHNlY29uZCB0b3VybmFtZW50LiBUaGUgdHJ5b3V0IHJvc3RlciB3aWxsIHRoZW4gYmUgbmFycm93ZWQgZG93biB0byBvbmUgdGVhbSBiZWZvcmUgdGhlIGZpbmFsIHRvdXJuYW1lbnQgb2YgdGhlIGZhbGwsIHZpYSBjdXRzIG9uIGEgcm9sbGluZyBiYXNpcy4gUGxheWVycyBtYXkgYmUgbW92ZWQgYmV0d2VlbiB0aGUgQSBhbmQgQiB0ZWFtIHJvc3RlcnMgYXMgbmVjZXNzYXJ5LjwvcD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vYWJvdXQuY29tcG9uZW50Lmxlc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJwIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvc3BlY3RpdmUtcGxheWVycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcHJvc3BlY3RpdmUtcGxheWVycy5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcHJvc3BlY3RpdmUtcGxheWVycy5jb21wb25lbnQubGVzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb3NwZWN0aXZlUGxheWVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb3NwZWN0aXZlIFBsYXllcnMgQ29tcG9uZW50IScpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9wcm9zcGVjdGl2ZS1wbGF5ZXJzL3Byb3NwZWN0aXZlLXBsYXllcnMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMSBjbGFzcz1cXFwidWkgaGVhZGVyXFxcIj5Qcm9zcGVjdGl2ZSBQbGF5ZXJzPC9oMT5cXG48cD5JbGxpbm9pcyBVbHRpbWF0ZSBoYXMgaGFkIGEgbG9uZyBoaXN0b3J5IHNpbmNlIGl0cyBpbmNlcHRpb24gaW4gdGhlIGVhcmx5IDE5OTBzIGFuZCBub3cgY29uc2lzdGVudGx5IGNvbXBldGVzIHdpdGggYmVzdCBjb21wZXRpdGlvbiBhcm91bmQgdGhlIGNvdW50cnkuIElsbGlub2lzIGhhcyBxdWFsaWZpZWQgZm9yIG5hdGlvbmFsIGNoYW1waW9uc2hpcHMgNiBvdXQgb2YgdGhlIGxhc3QgOSB5ZWFycyBiZWhpbmQgb3VyIGRlZGljYXRpb24sIGRldGVybWluYXRpb24sIGFuZCBkaXN0aW5ndWlzaGVkIGNoYXJhY3RlciBvbiBhbmQgb2ZmIHRoZSBmaWVsZC4gSWxsaW5vaXMgYWx1bW5pIGhhdmUgZ29uZSBvbiB0byBwbGF5IGZvciBuYXRpb25hbHMgY2FsaWJlciBjbHViIHRlYW1zIHN1Y2ggYXMgQ2hpY2FnbyBNYWNoaW5lLCBNaW5uZWFwb2xpcyBEcmFnICduIFRocnVzdCwgQ2luY2lubmF0aSBTdGVhbWJvYXQsIEF0bGFudGEgQ2hhaW4gTGlnaHRuaW5nLCBhbmQgU2FuIEZyYW5jaXNjbyBCbGFja2JpcmQuIEFsdW1uaSBoYXZlIHBsYXllZCBvbiBwcm9mZXNzaW9uYWwgQVVETCB0ZWFtcyBzdWNoIGFzIHRoZSBDaGljYWdvIFdpbGRmaXJlLCBNaW5uZXNvdGEgV2luZGNoaWxsLCBDaW5jaW5uYXRpIFJldm9sdXRpb24sIGFuZCB0aGUgU2FuIEpvc2UgU3BpZGVycy4gVGhleSBoYXZlIGFsc28gY3JlYXRlZCBhbmQgY2FwdGFpbmVkIGNsdWIgdGVhbXMgaW5jbHVkaW5nIENoaWNhZ28gTWFjaGluZSwgQmxhY2sgTWFya2V0IFVsdGltYXRlLCBhbmQgQmVhY2hmcm9udCBVbHRpbWF0ZSwgYW5kIGhhdmUgZ29uZSBvbiB0byBjb2FjaCBjb2xsZWdlIHVsdGltYXRlIGF0IHRoZSBVbml2ZXJzaXR5IG9mIElsbGlub2lzLCB0aGUgVW5pdmVyc2l0eSBvZiBDaGljYWdvLCBOb3J0aHdlc3Rlcm4gVW5pdmVyc2l0eSwgYW5kIHRoZSBVbml2ZXJzaXR5IG9mIEtlbnR1Y2t5LiBJdCdzIHNhZmUgdG8gc2F5IHRoYXQgb25jZSB5b3UgcGxheSB1bHRpbWF0ZSBhdCBJbGxpbm9pcyB5b3UgYXJlIG9wZW5lZCB1cCB0byBhIHdvcmxkIG9mIG9wcG9ydHVuaXR5IHRocm91Z2ggb3VyIGFsdW1uaSBuZXR3b3JrLCB3aG8gYXJlIG1vcmUgdGhhbiB3aWxsaW5nIHRvIGFzc2lzdCB5b3Ugb24geW91ciBqb3VybmV5IHRob3VnaCB1bHRpbWF0ZSBkdXJpbmcgYW5kIGJleW9uZCB5b3VyIGNvbGxlZ2UgeWVhcnMuPC9wPlxcbjxwPldoaWxlIHlvdSBhcmUgYXQgSWxsaW5vaXMgeW91IHdpbGwgZW5qb3kgYSBudW1iZXIgb2YgZXhwZXJpZW5jZXMuIFRoaXMgcmFuZ2VzIGZyb20gdGVhbSBzb2NpYWxzIHRvIHN0dWR5IGdyb3VwcyBhbmQgZnJvbSBwcmFjdGljZXMgaW4gSXJ3aW4gRmllbGRob3VzZSB0byBwbGF5aW5nIGdhbWVzIG9uIHRoZSBzaG9yZXMgb2YgU2FuIERpZWdvLiBZb3VyIHRlYW1tYXRlcyB3b24ndCBvbmx5IGJlIHlvdXIgYmVzdCBmcmllbmRzLCB0aGV5IHdpbGwgYmUgZmFtaWx5LiBZb3Ugd2lsbCBsZWFybiB0aGUgdmFyaW91cyB3YXlzIHVsdGltYXRlIGlzIHBsYXllZCwgaG93IHRvIGV4cGFuZCB5b3VyIHRocm93aW5nIGFyc2VuYWwsIGhvdyB0byBpbXByb3ZlIHlvdXIgYXRobGV0aWNpc20sIGFuZCBob3cgdG8gdGFrZSB5b3VyIGdhbWUgdG8gdGhlIG5leHQgbGV2ZWwuIEEgbWFqb3JpdHkgb2Ygb3VyIHRlYW0gZGlkbid0IHBsYXkgb3JnYW5pemVkIHVsdGltYXRlIGJlZm9yZSBjb21pbmcgdG8gY29sbGVnZSwgYW5kIGFyZSBub3cgc29tZSBvZiB0aGUgYmVzdCBwbGF5ZXJzIGluIHRoZSBHcmVhdCBMYWtlcyByZWdpb24gKHNlZSBvdXIgQWxsLVJlZ2lvbnMgaG9ub3JzIHBhZ2UpLjwvcD5cXG48cD5XZSBlbmNvdXJhZ2UgcHJvc3BlY3RpdmUgcGxheWVycyB0byBmaWxsIG91dCBvdXIgaW50ZXJlc3QgZm9ybSBhbmQgdG8gcmVhY2ggb3V0IHRvIHRoZSBjYXB0YWlucyBlc3BlY2lhbGx5IGlmIHlvdSB3aWxsIGJlIG9uIGNhbXB1cy4gV2UgYXJlIG1vcmUgdGhhbiBoYXBweSB0byBtZWV0IHVwIGFuZCBkaXNjdXNzIHdoYXQgSWxsaW5vaXMgY2FuIGRvIGZvciB5b3UsIGFuZCB0byBzZWUgd2hhdCB5b3UgY2FuIGRvIHRvIGJlIHJlYWR5IGZvciBJbGxpbm9pcyBvbmNlIHlvdSBnZXQgb24gY2FtcHVzLiBPdXIgY29udGFjdCBpbmZvcm1hdGlvbiBpcyBiZWxvdy4gVGhhbmsgeW91IGZvciB0YWtpbmcgdGhlIHRpbWUgdG8gdmlzaXQgb3VyIHdlYnNpdGUsIGFuZCB3ZSBob3BlIHRvIGhlYXIgZnJvbSB5b3Ugc29vbi48L3A+XFxuXFxuPGZvcm0gY2xhc3M9XFxcInVpIGZvcm1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdvIGZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZSA8c3BhbiBjbGFzcz1cXFwicmVxdWlyZWRcXFwiPio8L3NwYW4+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IE5hbWUgPHNwYW4gY2xhc3M9XFxcInJlcXVpcmVkXFxcIj4qPC9zcGFuPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJsYXN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXN0IE5hbWVcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0d28gZmllbGRzXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzIDxzcGFuIGNsYXNzPVxcXCJyZXF1aXJlZFxcXCI+Kjwvc3Bhbj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWwgQWRkcmVzc1xcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+V2hhdCBpcyB5b3VyIEhvbWV0b3duPyA8c3BhbiBjbGFzcz1cXFwicmVxdWlyZWRcXFwiPio8L3NwYW4+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImhvbWUtdG93blxcXCIgcGxhY2Vob2xkZXI9XFxcIkhvbWV0b3duXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdvIGZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+V2hhdCBoaWdoIHNjaG9vbCBkaWQgeW91IGF0dGVuZD8gPHNwYW4gY2xhc3M9XFxcInJlcXVpcmVkXFxcIj4qPC9zcGFuPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJoaWdoc2Nob29sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSGlnaHNjaG9vbFxcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+V2hhdCBtYWpvciBhcmUgeW91IHBsYW5uaW5nIG9uIGdvaW5nIGludG8/IDxzcGFuIGNsYXNzPVxcXCJyZXF1aXJlZFxcXCI+Kjwvc3Bhbj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibWFqb3JcXFwiIHBsYWNlaG9sZGVyPVxcXCJNYWpvclxcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWw+SG93IGxvbmcgaGF2ZSB5b3UgcGxheWVkIHVsdGltYXRlL3doYXQga2luZCBvZiBleHBlcmllbmNlIGRvIHlvdSBoYXZlPyA8c3BhbiBjbGFzcz1cXFwicmVxdWlyZWRcXFwiPio8L3NwYW4+PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZXhwZXJpZW5jZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkV4cGVyaWVuY2VcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsPldoYXQgb3RoZXIgY2x1YnMvb3JnYW5pemF0aW9ucyBhcmUgeW91IHBsYW5uaW5nIG9uIGpvaW5pbmcgd2hlbiB5b3UgYXJyaXZlIG9uIGNhbXB1cz8gPHNwYW4gY2xhc3M9XFxcInJlcXVpcmVkXFxcIj4qPC9zcGFuPjwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm90aGVyLWNsdWJzXFxcIiBwbGFjZWhvbGRlcj1cXFwiT3RoZXIgQ2x1YnNcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcInVpIGJ1dHRvblxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Byb3NwZWN0aXZlLXBsYXllcnMvcHJvc3BlY3RpdmUtcGxheWVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9wcm9zcGVjdGl2ZS1wbGF5ZXJzLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcm9zcGVjdGl2ZS1wbGF5ZXJzL3Byb3NwZWN0aXZlLXBsYXllcnMuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInAsXFxubGFiZWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLnVpLmZvcm0ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvcHJvc3BlY3RpdmUtcGxheWVycy9wcm9zcGVjdGl2ZS1wbGF5ZXJzLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2NvbnRhY3QuY29tcG9uZW50Lmxlc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29udGFjdCBDb21wb25lbnQhJyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxIGNsYXNzPVxcXCJ1aSBoZWFkZXJcXFwiPkNvbnRhY3QgVXM8L2gxPlxcbjxwPkZvciBhbnkgcXVlc3Rpb25zIHJlZ2FyZGluZyBwcmFjdGljZSBvciBjbHViIGRldGFpbHMsIGZlZWwgZnJlZSB0byBjb250YWN0IGFueSBvZiB0aGUgY3VycmVudCBjYXB0YWluczo8L3A+XFxuXFxuPHAgY2xhc3M9XFxcImNhcHRhaW5cXFwiPkNocmlzIEJ1Y2h0YSAtLSBjYnVjaHRhMkBnbWFpbC5jb208L3A+XFxuPHAgY2xhc3M9XFxcImNhcHRhaW5cXFwiPkJlbiBGb3N0ZXIgLS0gYmVuLmZvc3RlcjIzNEBnbWFpbC5jb208L3A+XFxuPHAgY2xhc3M9XFxcImNhcHRhaW5cXFwiPkphY29iIEtvbWVuZGEgLS0gamFjb2Iua29tZW5kYUBnbWFpbC5jb208L3A+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9jb250YWN0LmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXB0YWluIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgJy4vc2hhcmVkLXN0eWxlL3N0eWxlcy5jc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmxlc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2hhcmVkLXN0eWxlL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZ2xvYmFsL2JhY2tncm91bmQuanBnXCIpICsgXCIpO1xcbiAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50bycsIHNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxucCB7XFxuICAgIHRleHQtaW5kZW50OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5hIHtcXG4gICAgY29sb3I6ICMwMDAwNEQ7XFxufVxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmNjIyNjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50bycsIHNlcmlmICFpbXBvcnRhbnQ7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgIGJvcmRlci1jb2xvcjogI2ZmNjIyNiAhaW1wb3J0YW50O1xcbn1cXG4uYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjIyNiAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuLnJlcXVpcmVkIHtcXG4gICAgY29sb3I6ICNmZjYyMjY7XFxufVxcblxcbi51aS5oZWFkZXIge1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMDAwMDREO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4udWkudGFibGUgdHIsIC51aS50YWJsZSB0ZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMDtcXG59XFxuLnVpLnNlY29uZGFyeS5wb2ludGluZy5tZW51IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSAuaXRlbS5hY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwNEQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQtc3R5bGUvc3R5bGVzLmNzc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2JhY2tncm91bmQuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcHVibGljL2Fzc2V0cy9pbWFnZXMvZ2xvYmFsL2JhY2tncm91bmQuanBnXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1haW4gY2xhc3M9XFxcIm1haW4tY29udGFpbmVyXFxcIj5cXG4gICAgPHBhZ2UtZnJhbWU+PC9wYWdlLWZyYW1lPlxcbjwvbWFpbj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQubGVzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBQcmFjdGljZUNvbXBvbmVudCB9IGZyb20gXCIuL3ByYWN0aWNlL3ByYWN0aWNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG91cm5hbWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi90b3VybmFtZW50cy90b3VybmFtZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3Jvc3Rlci9yb3N0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBYnNlbnRDb21wb25lbnQgfSBmcm9tIFwiLi9hYnNlbnQvYWJzZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uL2FwcC5yb3V0ZXNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBhcGlLZXk6ICdBSXphU3lCUklYQWs1eGR2bjNlenlwc1NlNTVmOGRaaGNIaGVBWjgnXG4gICAgICAgIH0pLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChST1VURVMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUHJhY3RpY2VDb21wb25lbnQsXG4gICAgICAgIFRvdXJuYW1lbnRzQ29tcG9uZW50LFxuICAgICAgICBSb3N0ZXJDb21wb25lbnQsXG4gICAgICAgIEFic2VudENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGVhbU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3RlYW0vdGVhbS5tb2R1bGUudHMiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG4vLyBtYWluIG1vZHVsZXNcbl9fZXhwb3J0KHJlcXVpcmUoJy4vZGlyZWN0aXZlcycpKTtcbl9fZXhwb3J0KHJlcXVpcmUoJy4vc2VydmljZXMnKSk7XG4vLyBHb29nbGUgTWFwcyB0eXBlc1xuLy8gY29yZSBtb2R1bGVcbi8vIHdlIGV4cGxpY2l0bHkgZXhwb3J0IHRoZSBtb2R1bGUgaGVyZSB0byBwcmV2ZW50IHRoaXMgSW9uaWMgMiBidWc6XG4vLyBodHRwOi8vc3RldmVtaWNoZWxvdHRpLmNvbS9pbnRlZ3JhdGUtYW5ndWxhci0yLWdvb2dsZS1tYXBzLWludG8taW9uaWMtMi9cbnZhciBjb3JlX21vZHVsZV8xID0gcmVxdWlyZSgnLi9jb3JlLW1vZHVsZScpO1xuZXhwb3J0cy5BZ21Db3JlTW9kdWxlID0gY29yZV9tb2R1bGVfMS5BZ21Db3JlTW9kdWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGdvb2dsZV9tYXBfMSA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9nb29nbGUtbWFwJyk7XG5leHBvcnRzLlNlYm1Hb29nbGVNYXAgPSBnb29nbGVfbWFwXzEuU2VibUdvb2dsZU1hcDtcbnZhciBnb29nbGVfbWFwX2NpcmNsZV8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtY2lyY2xlJyk7XG5leHBvcnRzLlNlYm1Hb29nbGVNYXBDaXJjbGUgPSBnb29nbGVfbWFwX2NpcmNsZV8xLlNlYm1Hb29nbGVNYXBDaXJjbGU7XG52YXIgZ29vZ2xlX21hcF9pbmZvX3dpbmRvd18xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtaW5mby13aW5kb3cnKTtcbmV4cG9ydHMuU2VibUdvb2dsZU1hcEluZm9XaW5kb3cgPSBnb29nbGVfbWFwX2luZm9fd2luZG93XzEuU2VibUdvb2dsZU1hcEluZm9XaW5kb3c7XG52YXIgZ29vZ2xlX21hcF9rbWxfbGF5ZXJfMSA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9nb29nbGUtbWFwLWttbC1sYXllcicpO1xuZXhwb3J0cy5TZWJtR29vZ2xlTWFwS21sTGF5ZXIgPSBnb29nbGVfbWFwX2ttbF9sYXllcl8xLlNlYm1Hb29nbGVNYXBLbWxMYXllcjtcbnZhciBnb29nbGVfbWFwX21hcmtlcl8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtbWFya2VyJyk7XG5leHBvcnRzLlNlYm1Hb29nbGVNYXBNYXJrZXIgPSBnb29nbGVfbWFwX21hcmtlcl8xLlNlYm1Hb29nbGVNYXBNYXJrZXI7XG52YXIgZ29vZ2xlX21hcF9wb2x5Z29uXzEgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC1wb2x5Z29uJyk7XG5leHBvcnRzLlNlYm1Hb29nbGVNYXBQb2x5Z29uID0gZ29vZ2xlX21hcF9wb2x5Z29uXzEuU2VibUdvb2dsZU1hcFBvbHlnb247XG52YXIgZ29vZ2xlX21hcF9wb2x5bGluZV8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtcG9seWxpbmUnKTtcbmV4cG9ydHMuU2VibUdvb2dsZU1hcFBvbHlsaW5lID0gZ29vZ2xlX21hcF9wb2x5bGluZV8xLlNlYm1Hb29nbGVNYXBQb2x5bGluZTtcbnZhciBnb29nbGVfbWFwX3BvbHlsaW5lX3BvaW50XzEgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC1wb2x5bGluZS1wb2ludCcpO1xuZXhwb3J0cy5TZWJtR29vZ2xlTWFwUG9seWxpbmVQb2ludCA9IGdvb2dsZV9tYXBfcG9seWxpbmVfcG9pbnRfMS5TZWJtR29vZ2xlTWFwUG9seWxpbmVQb2ludDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZXMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGdvb2dsZV9tYXBzX2FwaV93cmFwcGVyXzEgPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcicpO1xudmFyIGNpcmNsZV9tYW5hZ2VyXzEgPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9jaXJjbGUtbWFuYWdlcicpO1xudmFyIGluZm9fd2luZG93X21hbmFnZXJfMSA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL21hbmFnZXJzL2luZm8td2luZG93LW1hbmFnZXInKTtcbnZhciBtYXJrZXJfbWFuYWdlcl8xID0gcmVxdWlyZSgnLi4vc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXInKTtcbnZhciBwb2x5Z29uX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlnb24tbWFuYWdlcicpO1xudmFyIHBvbHlsaW5lX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlsaW5lLW1hbmFnZXInKTtcbnZhciBrbWxfbGF5ZXJfbWFuYWdlcl8xID0gcmVxdWlyZSgnLi8uLi9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlcicpO1xuLyoqXG4gKiBTZWJNR29vZ2xlTWFwIHJlbmRlcnMgYSBHb29nbGUgTWFwLlxuICogKipJbXBvcnRhbnQgbm90ZSoqOiBUbyBiZSBhYmxlIHNlZSBhIG1hcCBpbiB0aGUgYnJvd3NlciwgeW91IGhhdmUgdG8gZGVmaW5lIGEgaGVpZ2h0IGZvciB0aGUgQ1NTXG4gKiBjbGFzcyBgc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcmAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICogaW1wb3J0IHsgU2VibUdvb2dsZU1hcCB9IGZyb20gJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgZGlyZWN0aXZlczogW1NlYm1Hb29nbGVNYXBdLFxuICogIHN0eWxlczogW2BcbiAqICAgIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8c2VibS1nb29nbGUtbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgIDwvc2VibS1nb29nbGUtbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xudmFyIFNlYm1Hb29nbGVNYXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYm1Hb29nbGVNYXAoX2VsZW0sIF9tYXBzV3JhcHBlcikge1xuICAgICAgICB0aGlzLl9lbGVtID0gX2VsZW07XG4gICAgICAgIHRoaXMuX21hcHNXcmFwcGVyID0gX21hcHNXcmFwcGVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxvbmdpdHVkZSB0aGF0IGRlZmluZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxhdGl0dWRlIHRoYXQgZGVmaW5lcyB0aGUgY2VudGVyIG9mIHRoZSBtYXAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxhdGl0dWRlID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAuIFRoZSBkZWZhdWx0IHpvb20gbGV2ZWwgaXMgOC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuem9vbSA9IDg7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGlmIG1hcCBpcyBkcmFnZ2FibGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIHpvb20gYW5kIGNlbnRlciBvbiBkb3VibGUgY2xpY2suIEVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBhbGwgZGVmYXVsdCBVSSBvZiB0aGUgR29vZ2xlIG1hcC4gUGxlYXNlIG5vdGU6IFdoZW4gdGhlIG1hcCBpcyBjcmVhdGVkLCB0aGlzXG4gICAgICAgICAqIHZhbHVlIGNhbm5vdCBnZXQgdXBkYXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZURlZmF1bHRVSSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZmFsc2UsIGRpc2FibGVzIHNjcm9sbHdoZWVsIHpvb21pbmcgb24gdGhlIG1hcC4gVGhlIHNjcm9sbHdoZWVsIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsd2hlZWwgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZmFsc2UsIHByZXZlbnRzIHRoZSBtYXAgZnJvbSBiZWluZyBjb250cm9sbGVkIGJ5IHRoZSBrZXlib2FyZC4gS2V5Ym9hcmQgc2hvcnRjdXRzIGFyZVxuICAgICAgICAgKiBlbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkU2hvcnRjdXRzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBab29tIGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnpvb21Db250cm9sID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0eWxlcyB0byBhcHBseSB0byBlYWNoIG9mIHRoZSBkZWZhdWx0IG1hcCB0eXBlcy4gTm90ZSB0aGF0IGZvciBTYXRlbGxpdGUvSHlicmlkIGFuZCBUZXJyYWluXG4gICAgICAgICAqIG1vZGVzLCB0aGVzZSBzdHlsZXMgd2lsbCBvbmx5IGFwcGx5IHRvIGxhYmVscyBhbmQgZ2VvbWV0cnkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0eWxlcyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlIGFuZCB0aGUgbGF0aXR1ZGUgYW5kL29yIGxvbmdpdHVkZSB2YWx1ZXMgY2hhbmdlcywgdGhlIEdvb2dsZSBNYXBzIHBhblRvIG1ldGhvZCBpc1xuICAgICAgICAgKiB1c2VkIHRvXG4gICAgICAgICAqIGNlbnRlciB0aGUgbWFwLiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXNlUGFubmluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgU3RyZWV0IFZpZXcgUGVnbWFuIGNvbnRyb2wuXG4gICAgICAgICAqIFRoaXMgY29udHJvbCBpcyBwYXJ0IG9mIHRoZSBkZWZhdWx0IFVJLCBhbmQgc2hvdWxkIGJlIHNldCB0byBmYWxzZSB3aGVuIGRpc3BsYXlpbmcgYSBtYXAgdHlwZVxuICAgICAgICAgKiBvbiB3aGljaCB0aGUgU3RyZWV0IFZpZXcgcm9hZCBvdmVybGF5IHNob3VsZCBub3QgYXBwZWFyIChlLmcuIGEgbm9uLUVhcnRoIG1hcCB0eXBlKS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RyZWV0Vmlld0NvbnRyb2wgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgdmlld3BvcnQgdG8gY29udGFpbiB0aGUgZ2l2ZW4gYm91bmRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maXRCb3VuZHMgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgU2NhbGUgY29udHJvbC4gVGhpcyBpcyBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2FsZUNvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIE1hcCB0eXBlIGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hcFR5cGVDb250cm9sID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrIG9uIGFcbiAgICAgICAgICogbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXBDbGljayA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgcmlnaHQtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAgICAgICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXBSaWdodENsaWNrID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAgICAgICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXBEYmxDbGljayA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGNlbnRlciBjaGFuZ2VzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jZW50ZXJDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB2aWV3cG9ydCBib3VuZHMgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ib3VuZHNDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgYmVjb21lcyBpZGxlIGFmdGVyIHBhbm5pbmcgb3Igem9vbWluZy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWRsZSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHpvb20gbGV2ZWwgaGFzIGNoYW5nZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnpvb21DaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgU2VibUdvb2dsZU1hcC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgc2hvdWxkIGJlIHNvbHZlZCB3aXRoIGEgbmV3IGNvbXBvbmVudCBhbmQgYSB2aWV3Q2hpbGQgZGVjb3JhdG9yXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXItaW5uZXInKTtcbiAgICAgICAgdGhpcy5faW5pdE1hcEluc3RhbmNlKGNvbnRhaW5lcik7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwLnByb3RvdHlwZS5faW5pdE1hcEluc3RhbmNlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZU1hcChlbCwge1xuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogdGhpcy5sYXRpdHVkZSB8fCAwLCBsbmc6IHRoaXMubG9uZ2l0dWRlIHx8IDAgfSxcbiAgICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRoaXMuZGlzYWJsZURlZmF1bHRVSSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlQ3Vyc29yOiB0aGlzLmRyYWdnYWJsZUN1cnNvcixcbiAgICAgICAgICAgIGRyYWdnaW5nQ3Vyc29yOiB0aGlzLmRyYWdnaW5nQ3Vyc29yLFxuICAgICAgICAgICAga2V5Ym9hcmRTaG9ydGN1dHM6IHRoaXMua2V5Ym9hcmRTaG9ydGN1dHMsXG4gICAgICAgICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgICAgICAgIHN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogdGhpcy5zdHJlZXRWaWV3Q29udHJvbCxcbiAgICAgICAgICAgIHNjYWxlQ29udHJvbDogdGhpcy5zY2FsZUNvbnRyb2wsXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogdGhpcy5tYXBUeXBlQ29udHJvbFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHRoaXMuX2hhbmRsZU1hcENlbnRlckNoYW5nZSgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVNYXBab29tQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1hcE1vdXNlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUJvdW5kc0NoYW5nZSgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJZGxlRXZlbnQoKTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgfTtcbiAgICAvKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1hcE9wdGlvbnNDaGFuZ2VzKGNoYW5nZXMpO1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbihjaGFuZ2VzKTtcbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXAucHJvdG90eXBlLl91cGRhdGVNYXBPcHRpb25zQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG4gICAgICAgIHZhciBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBTZWJtR29vZ2xlTWFwLl9tYXBPcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMTsgfSk7XG4gICAgICAgIG9wdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7IH0pO1xuICAgICAgICB0aGlzLl9tYXBzV3JhcHBlci5zZXRNYXBPcHRpb25zKG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSByZXNpemUgZXZlbnQgb24gdGhlIGdvb2dsZSBtYXAgaW5zdGFuY2UuXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCBnZXRzIHJlc29sdmVkIGFmdGVyIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkLlxuICAgICAqL1xuICAgIFNlYm1Hb29nbGVNYXAucHJvdG90eXBlLnRyaWdnZXJSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIE5vdGU6IFdoZW4gd2Ugd291bGQgdHJpZ2dlciB0aGUgcmVzaXplIGV2ZW50IGFuZCBzaG93IHRoZSBtYXAgaW4gdGhlIHNhbWUgdHVybiAod2hpY2ggaXMgYVxuICAgICAgICAvLyBjb21tb24gY2FzZSBmb3IgdHJpZ2dlcmluZyBhIHJlc2l6ZSBldmVudCksIHRoZW4gdGhlIHJlc2l6ZSBldmVudCB3b3VsZCBub3RcbiAgICAgICAgLy8gd29yayAodG8gc2hvdyB0aGUgbWFwKSwgc28gd2UgdHJpZ2dlciB0aGUgZXZlbnQgaW4gYSB0aW1lb3V0LlxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX21hcHNXcmFwcGVyLnRyaWdnZXJNYXBFdmVudCgncmVzaXplJykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKCk7IH0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwLnByb3RvdHlwZS5fdXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSA9PSBudWxsICYmIGNoYW5nZXNbJ2xvbmdpdHVkZSddID09IG51bGwgJiZcbiAgICAgICAgICAgIGNoYW5nZXNbJ2ZpdEJvdW5kcyddID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIHBvc2l0aW9uIHVwZGF0ZSBuZWVkZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBwcmVmZXIgZml0Qm91bmRzIGluIGNoYW5nZXNcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ZpdEJvdW5kcyddICYmIHRoaXMuZml0Qm91bmRzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpdEJvdW5kcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMubG9uZ2l0dWRlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdDZW50ZXIgPSB7XG4gICAgICAgICAgICBsYXQ6IHRoaXMubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IHRoaXMubG9uZ2l0dWRlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy51c2VQYW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXBzV3JhcHBlci5wYW5UbyhuZXdDZW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuc2V0Q2VudGVyKG5ld0NlbnRlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXAucHJvdG90eXBlLl9maXRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZVBhbm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnBhblRvQm91bmRzKHRoaXMuZml0Qm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXBzV3JhcHBlci5maXRCb3VuZHModGhpcy5maXRCb3VuZHMpO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcC5wcm90b3R5cGUuX2hhbmRsZU1hcENlbnRlckNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50KCdjZW50ZXJfY2hhbmdlZCcpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Q2VudGVyKCkudGhlbihmdW5jdGlvbiAoY2VudGVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubGF0aXR1ZGUgPSBjZW50ZXIubGF0KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMubG9uZ2l0dWRlID0gY2VudGVyLmxuZygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNlbnRlckNoYW5nZS5lbWl0KHsgbGF0OiBfdGhpcy5sYXRpdHVkZSwgbG5nOiBfdGhpcy5sb25naXR1ZGUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwLnByb3RvdHlwZS5faGFuZGxlQm91bmRzQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQoJ2JvdW5kc19jaGFuZ2VkJykuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9tYXBzV3JhcHBlci5nZXRCb3VuZHMoKS50aGVuKGZ1bmN0aW9uIChib3VuZHMpIHsgX3RoaXMuYm91bmRzQ2hhbmdlLmVtaXQoYm91bmRzKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcC5wcm90b3R5cGUuX2hhbmRsZU1hcFpvb21DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnem9vbV9jaGFuZ2VkJykuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9tYXBzV3JhcHBlci5nZXRab29tKCkudGhlbihmdW5jdGlvbiAoeikge1xuICAgICAgICAgICAgICAgIF90aGlzLnpvb20gPSB6O1xuICAgICAgICAgICAgICAgIF90aGlzLnpvb21DaGFuZ2UuZW1pdCh6KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXAucHJvdG90eXBlLl9oYW5kbGVJZGxlRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnaWRsZScpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IF90aGlzLmlkbGUuZW1pdCh2b2lkIDApOyB9KTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXAucHJvdG90eXBlLl9oYW5kbGVNYXBNb3VzZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV2ZW50cyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ2NsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBDbGljayB9LFxuICAgICAgICAgICAgeyBuYW1lOiAncmlnaHRjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwUmlnaHRDbGljayB9LFxuICAgICAgICBdO1xuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHMgPSBfdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudChlLm5hbWUpLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB7IGNvb3JkczogeyBsYXQ6IGV2ZW50LmxhdExuZy5sYXQoKSwgbG5nOiBldmVudC5sYXRMbmcubG5nKCkgfSB9O1xuICAgICAgICAgICAgICAgIGUuZW1pdHRlci5lbWl0KHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFwIG9wdGlvbiBhdHRyaWJ1dGVzIHRoYXQgY2FuIGNoYW5nZSBvdmVyIHRpbWVcbiAgICAgKi9cbiAgICBTZWJtR29vZ2xlTWFwLl9tYXBPcHRpb25zQXR0cmlidXRlcyA9IFtcbiAgICAgICAgJ2Rpc2FibGVEb3VibGVDbGlja1pvb20nLCAnc2Nyb2xsd2hlZWwnLCAnZHJhZ2dhYmxlJywgJ2RyYWdnYWJsZUN1cnNvcicsICdkcmFnZ2luZ0N1cnNvcicsXG4gICAgICAgICdrZXlib2FyZFNob3J0Y3V0cycsICd6b29tQ29udHJvbCcsICdzdHlsZXMnLCAnc3RyZWV0Vmlld0NvbnRyb2wnLCAnem9vbScsICdtYXBUeXBlQ29udHJvbCcsXG4gICAgICAgICdtaW5ab29tJywgJ21heFpvb20nXG4gICAgXTtcbiAgICBTZWJtR29vZ2xlTWFwLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkNvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWJtLWdvb2dsZS1tYXAnLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZV9tYXBzX2FwaV93cmFwcGVyXzEuR29vZ2xlTWFwc0FQSVdyYXBwZXIsIG1hcmtlcl9tYW5hZ2VyXzEuTWFya2VyTWFuYWdlciwgaW5mb193aW5kb3dfbWFuYWdlcl8xLkluZm9XaW5kb3dNYW5hZ2VyLCBjaXJjbGVfbWFuYWdlcl8xLkNpcmNsZU1hbmFnZXIsIHBvbHlsaW5lX21hbmFnZXJfMS5Qb2x5bGluZU1hbmFnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uX21hbmFnZXJfMS5Qb2x5Z29uTWFuYWdlciwga21sX2xheWVyX21hbmFnZXJfMS5LbWxMYXllck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnbG9uZ2l0dWRlJywgJ2xhdGl0dWRlJywgJ3pvb20nLCAnbWluWm9vbScsICdtYXhab29tJywgJ2RyYWdnYWJsZTogbWFwRHJhZ2dhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXNhYmxlRG91YmxlQ2xpY2tab29tJywgJ2Rpc2FibGVEZWZhdWx0VUknLCAnc2Nyb2xsd2hlZWwnLCAnYmFja2dyb3VuZENvbG9yJywgJ2RyYWdnYWJsZUN1cnNvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZHJhZ2dpbmdDdXJzb3InLCAna2V5Ym9hcmRTaG9ydGN1dHMnLCAnem9vbUNvbnRyb2wnLCAnc3R5bGVzJywgJ3VzZVBhbm5pbmcnLCAnc3RyZWV0Vmlld0NvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpdEJvdW5kcycsICdzY2FsZUNvbnRyb2wnLCAnbWFwVHlwZUNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXBDbGljaycsICdtYXBSaWdodENsaWNrJywgJ21hcERibENsaWNrJywgJ2NlbnRlckNoYW5nZScsICdpZGxlJywgJ2JvdW5kc0NoYW5nZScsICd6b29tQ2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbY2xhc3Muc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcl0nOiAndHJ1ZScgfSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBbXCJcXG4gICAgLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXItaW5uZXIge1xcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgfVxcbiAgICAuc2VibS1nb29nbGUtbWFwLWNvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcbiAgXCJdLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGRpdiBjbGFzcz0nc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lci1pbm5lcic+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9J3NlYm0tZ29vZ2xlLW1hcC1jb250ZW50Jz5cXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuICAgIDwvZGl2PlxcbiAgXCJcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIFNlYm1Hb29nbGVNYXAuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIHsgdHlwZTogZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMS5Hb29nbGVNYXBzQVBJV3JhcHBlciwgfSxcbiAgICBdOyB9O1xuICAgIHJldHVybiBTZWJtR29vZ2xlTWFwO1xufSgpKTtcbmV4cG9ydHMuU2VibUdvb2dsZU1hcCA9IFNlYm1Hb29nbGVNYXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nb29nbGUtbWFwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJ3J4anMvT2JzZXJ2YWJsZScpO1xudmFyIG1hcHNfYXBpX2xvYWRlcl8xID0gcmVxdWlyZSgnLi9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyJyk7XG4vKipcbiAqIFdyYXBwZXIgY2xhc3MgdGhhdCBoYW5kbGVzIHRoZSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIEdvb2dsZSBNYXBzIEphdmFzY3JpcHRcbiAqIEFQSSB2M1xuICovXG52YXIgR29vZ2xlTWFwc0FQSVdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdvb2dsZU1hcHNBUElXcmFwcGVyKF9sb2FkZXIsIF96b25lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2xvYWRlciA9IF9sb2FkZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fbWFwID1cbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IF90aGlzLl9tYXBSZXNvbHZlciA9IHJlc29sdmU7IH0pO1xuICAgIH1cbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuY3JlYXRlTWFwID0gZnVuY3Rpb24gKGVsLCBtYXBPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWwsIG1hcE9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMuX21hcFJlc29sdmVyKG1hcCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLnNldE1hcE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobSkgeyBtLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdvb2dsZSBtYXAgbWFya2VyIHdpdGggdGhlIG1hcCBjb250ZXh0XG4gICAgICovXG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmNyZWF0ZU1hcmtlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1hcCA9IG1hcDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5jcmVhdGVJbmZvV2luZG93ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KG9wdGlvbnMpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnb29nbGUubWFwLkNpcmNsZSBmb3IgdGhlIGN1cnJlbnQgbWFwLlxuICAgICAqL1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5jcmVhdGVDaXJjbGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICAgICAgb3B0aW9ucy5tYXAgPSBtYXA7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuY3JlYXRlUG9seWxpbmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVNYXAoKS50aGVuKGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGluZS5zZXRNYXAobWFwKTtcbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5jcmVhdGVQb2x5Z29uID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlTWFwKCkudGhlbihmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICB2YXIgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5Qb2x5Z29uKG9wdGlvbnMpO1xuICAgICAgICAgICAgcG9seWdvbi5zZXRNYXAobWFwKTtcbiAgICAgICAgICAgIHJldHVybiBwb2x5Z29uO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgZ2l2ZW4gY29vcmRpbmF0ZXMgYXJlIGluc2l0ZSBhIFBvbHlnb24gcGF0aC5cbiAgICAgKi9cbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuY29udGFpbnNMb2NhdGlvbiA9IGZ1bmN0aW9uIChsYXRMbmcsIHBvbHlnb24pIHtcbiAgICAgICAgcmV0dXJuIGdvb2dsZS5tYXBzLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsYXRMbmcsIHBvbHlnb24pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLnN1YnNjcmliZVRvTWFwRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICBtLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGFyZykgeyBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2ZXIubmV4dChhcmcpOyB9KTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuc2V0Q2VudGVyID0gZnVuY3Rpb24gKGxhdExuZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gbWFwLnNldENlbnRlcihsYXRMbmcpOyB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5nZXRab29tID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gbWFwLmdldFpvb20oKTsgfSk7IH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuIG1hcC5nZXRCb3VuZHMoKTsgfSk7XG4gICAgfTtcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuc2V0Wm9vbSA9IGZ1bmN0aW9uICh6b29tKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobWFwKSB7IHJldHVybiBtYXAuc2V0Wm9vbSh6b29tKTsgfSk7XG4gICAgfTtcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gbWFwLmdldENlbnRlcigpOyB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5wYW5UbyA9IGZ1bmN0aW9uIChsYXRMbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuIG1hcC5wYW5UbyhsYXRMbmcpOyB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5maXRCb3VuZHMgPSBmdW5jdGlvbiAobGF0TG5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobWFwKSB7IHJldHVybiBtYXAuZml0Qm91bmRzKGxhdExuZyk7IH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLnBhblRvQm91bmRzID0gZnVuY3Rpb24gKGxhdExuZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gbWFwLnBhblRvQm91bmRzKGxhdExuZyk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlIEdvb2dsZSBNYXBzIE1hcCBpbnN0YW5jZS4gQmUgY2FyZWZ1bCB3aGVuIHVzaW5nIHRoaXMgaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAgICovXG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmdldE5hdGl2ZU1hcCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcDsgfTtcbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgZ2l2ZW4gZXZlbnQgbmFtZSBvbiB0aGUgbWFwIGluc3RhbmNlLlxuICAgICAqL1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS50cmlnZ2VyTWFwRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobSkgeyByZXR1cm4gZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtLCBldmVudE5hbWUpOyB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IG1hcHNfYXBpX2xvYWRlcl8xLk1hcHNBUElMb2FkZXIsIH0sXG4gICAgICAgIHsgdHlwZTogY29yZV8xLk5nWm9uZSwgfSxcbiAgICBdOyB9O1xuICAgIHJldHVybiBHb29nbGVNYXBzQVBJV3JhcHBlcjtcbn0oKSk7XG5leHBvcnRzLkdvb2dsZU1hcHNBUElXcmFwcGVyID0gR29vZ2xlTWFwc0FQSVdyYXBwZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nb29nbGUtbWFwcy1hcGktd3JhcHBlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIE1hcHNBUElMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcHNBUElMb2FkZXIoKSB7XG4gICAgfVxuICAgIE1hcHNBUElMb2FkZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgTWFwc0FQSUxvYWRlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBNYXBzQVBJTG9hZGVyO1xufSgpKTtcbmV4cG9ydHMuTWFwc0FQSUxvYWRlciA9IE1hcHNBUElMb2FkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXBzLWFwaS1sb2FkZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJ3J4anMvT2JzZXJ2YWJsZScpO1xudmFyIGdvb2dsZV9tYXBzX2FwaV93cmFwcGVyXzEgPSByZXF1aXJlKCcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcicpO1xudmFyIENpcmNsZU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENpcmNsZU1hbmFnZXIoX2FwaVdyYXBwZXIsIF96b25lKSB7XG4gICAgICAgIHRoaXMuX2FwaVdyYXBwZXIgPSBfYXBpV3JhcHBlcjtcbiAgICAgICAgdGhpcy5fem9uZSA9IF96b25lO1xuICAgICAgICB0aGlzLl9jaXJjbGVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5hZGRDaXJjbGUgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XG4gICAgICAgIHRoaXMuX2NpcmNsZXMuc2V0KGNpcmNsZSwgdGhpcy5fYXBpV3JhcHBlci5jcmVhdGVDaXJjbGUoe1xuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogY2lyY2xlLmxhdGl0dWRlLCBsbmc6IGNpcmNsZS5sb25naXR1ZGUgfSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogY2lyY2xlLmNsaWNrYWJsZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogY2lyY2xlLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGVkaXRhYmxlOiBjaXJjbGUuZWRpdGFibGUsXG4gICAgICAgICAgICBmaWxsQ29sb3I6IGNpcmNsZS5maWxsQ29sb3IsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogY2lyY2xlLmZpbGxPcGFjaXR5LFxuICAgICAgICAgICAgcmFkaXVzOiBjaXJjbGUucmFkaXVzLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IGNpcmNsZS5zdHJva2VDb2xvcixcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IGNpcmNsZS5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgICAgc3Ryb2tlUG9zaXRpb246IGNpcmNsZS5zdHJva2VQb3NpdGlvbixcbiAgICAgICAgICAgIHN0cm9rZVdlaWdodDogY2lyY2xlLnN0cm9rZVdlaWdodCxcbiAgICAgICAgICAgIHZpc2libGU6IGNpcmNsZS52aXNpYmxlLFxuICAgICAgICAgICAgekluZGV4OiBjaXJjbGUuekluZGV4XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjaXJjbGUgZnJvbSB0aGUgbWFwLlxuICAgICAqL1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUNpcmNsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgYy5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICBfdGhpcy5fY2lyY2xlcy5kZWxldGUoY2lyY2xlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKGNpcmNsZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgO1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5nZXRCb3VuZHMoKTsgfSk7XG4gICAgfTtcbiAgICA7XG4gICAgQ2lyY2xlTWFuYWdlci5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKGNpcmNsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmdldENlbnRlcigpOyB9KTtcbiAgICB9O1xuICAgIDtcbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5nZXRSYWRpdXMgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuZ2V0UmFkaXVzKCk7IH0pO1xuICAgIH07XG4gICAgQ2lyY2xlTWFuYWdlci5wcm90b3R5cGUuc2V0Q2VudGVyID0gZnVuY3Rpb24gKGNpcmNsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnNldENlbnRlcih7IGxhdDogY2lyY2xlLmxhdGl0dWRlLCBsbmc6IGNpcmNsZS5sb25naXR1ZGUgfSk7IH0pO1xuICAgIH07XG4gICAgO1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLnNldEVkaXRhYmxlID0gZnVuY3Rpb24gKGNpcmNsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnNldEVkaXRhYmxlKGNpcmNsZS5lZGl0YWJsZSk7IH0pO1xuICAgIH07XG4gICAgO1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLnNldERyYWdnYWJsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5zZXREcmFnZ2FibGUoY2lyY2xlLmRyYWdnYWJsZSk7IH0pO1xuICAgIH07XG4gICAgO1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLnNldFZpc2libGUgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuc2V0VmlzaWJsZShjaXJjbGUudmlzaWJsZSk7IH0pO1xuICAgIH07XG4gICAgO1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLnNldFJhZGl1cyA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5zZXRSYWRpdXMoY2lyY2xlLnJhZGl1cyk7IH0pO1xuICAgIH07XG4gICAgO1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNpcmNsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGMuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmVyLm5leHQoZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDaXJjbGVNYW5hZ2VyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIENpcmNsZU1hbmFnZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMS5Hb29nbGVNYXBzQVBJV3JhcHBlciwgfSxcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuTmdab25lLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIENpcmNsZU1hbmFnZXI7XG59KCkpO1xuZXhwb3J0cy5DaXJjbGVNYW5hZ2VyID0gQ2lyY2xlTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS1tYW5hZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL3NlcnZpY2VzL21hbmFnZXJzL2NpcmNsZS1tYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMSA9IHJlcXVpcmUoJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJyk7XG52YXIgbWFya2VyX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4vbWFya2VyLW1hbmFnZXInKTtcbnZhciBJbmZvV2luZG93TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5mb1dpbmRvd01hbmFnZXIoX21hcHNXcmFwcGVyLCBfem9uZSwgX21hcmtlck1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIgPSBfbWFwc1dyYXBwZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlciA9IF9tYXJrZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93cyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgSW5mb1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmRlbGV0ZUluZm9XaW5kb3cgPSBmdW5jdGlvbiAoaW5mb1dpbmRvdykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaVdpbmRvdyA9IHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KTtcbiAgICAgICAgaWYgKGlXaW5kb3cgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gaW5mbyB3aW5kb3cgYWxyZWFkeSBkZWxldGVkXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlXaW5kb3cudGhlbihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9pbmZvV2luZG93cy5kZWxldGUoaW5mb1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJbmZvV2luZG93TWFuYWdlci5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoaW5mb1dpbmRvdykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd3MuZ2V0KGluZm9XaW5kb3cpLnRoZW4oZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuc2V0UG9zaXRpb24oe1xuICAgICAgICAgICAgbGF0OiBpbmZvV2luZG93LmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBpbmZvV2luZG93LmxvbmdpdHVkZVxuICAgICAgICB9KTsgfSk7XG4gICAgfTtcbiAgICBJbmZvV2luZG93TWFuYWdlci5wcm90b3R5cGUuc2V0WkluZGV4ID0gZnVuY3Rpb24gKGluZm9XaW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuc2V0WkluZGV4KGluZm9XaW5kb3cuekluZGV4KTsgfSk7XG4gICAgfTtcbiAgICBJbmZvV2luZG93TWFuYWdlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChpbmZvV2luZG93KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbihmdW5jdGlvbiAodykge1xuICAgICAgICAgICAgaWYgKGluZm9XaW5kb3cuaG9zdE1hcmtlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9tYXJrZXJNYW5hZ2VyLmdldE5hdGl2ZU1hcmtlcihpbmZvV2luZG93Lmhvc3RNYXJrZXIpLnRoZW4oZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX21hcHNXcmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gdy5vcGVuKG1hcCwgbWFya2VyKTsgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX21hcHNXcmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gdy5vcGVuKG1hcCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEluZm9XaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChpbmZvV2luZG93KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbihmdW5jdGlvbiAodykgeyByZXR1cm4gdy5jbG9zZSgpOyB9KTtcbiAgICB9O1xuICAgIEluZm9XaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKGluZm9XaW5kb3csIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KS50aGVuKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgSW5mb1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmFkZEluZm9XaW5kb3cgPSBmdW5jdGlvbiAoaW5mb1dpbmRvdykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGluZm9XaW5kb3cuY29udGVudCxcbiAgICAgICAgICAgIG1heFdpZHRoOiBpbmZvV2luZG93Lm1heFdpZHRoLFxuICAgICAgICAgICAgekluZGV4OiBpbmZvV2luZG93LnpJbmRleCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmZvV2luZG93LmxhdGl0dWRlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgaW5mb1dpbmRvdy5sb25naXR1ZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBvc2l0aW9uID0geyBsYXQ6IGluZm9XaW5kb3cubGF0aXR1ZGUsIGxuZzogaW5mb1dpbmRvdy5sb25naXR1ZGUgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5mb1dpbmRvd1Byb21pc2UgPSB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVJbmZvV2luZG93KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93cy5zZXQoaW5mb1dpbmRvdywgaW5mb1dpbmRvd1Byb21pc2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEdvb2dsZSBNYXBzIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gSW5mb1dpbmRvdyBhcyBhbiBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgSW5mb1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGluZm9XaW5kb3cpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGkuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmVyLm5leHQoZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEluZm9XaW5kb3dNYW5hZ2VyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEluZm9XaW5kb3dNYW5hZ2VyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IGdvb2dsZV9tYXBzX2FwaV93cmFwcGVyXzEuR29vZ2xlTWFwc0FQSVdyYXBwZXIsIH0sXG4gICAgICAgIHsgdHlwZTogY29yZV8xLk5nWm9uZSwgfSxcbiAgICAgICAgeyB0eXBlOiBtYXJrZXJfbWFuYWdlcl8xLk1hcmtlck1hbmFnZXIsIH0sXG4gICAgXTsgfTtcbiAgICByZXR1cm4gSW5mb1dpbmRvd01hbmFnZXI7XG59KCkpO1xuZXhwb3J0cy5JbmZvV2luZG93TWFuYWdlciA9IEluZm9XaW5kb3dNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5mby13aW5kb3ctbWFuYWdlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgncnhqcy9PYnNlcnZhYmxlJyk7XG52YXIgZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMSA9IHJlcXVpcmUoJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInKTtcbnZhciBNYXJrZXJNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXJrZXJNYW5hZ2VyKF9tYXBzV3JhcHBlciwgX3pvbmUpIHtcbiAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIgPSBfbWFwc1dyYXBwZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fbWFya2VycyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgTWFya2VyTWFuYWdlci5wcm90b3R5cGUuZGVsZXRlTWFya2VyID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbSA9IHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gICAgICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG1hcmtlciBhbHJlYWR5IGRlbGV0ZWRcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS50aGVuKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbWFya2Vycy5kZWxldGUobWFya2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZU1hcmtlclBvc2l0aW9uID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnNldFBvc2l0aW9uKHsgbGF0OiBtYXJrZXIubGF0aXR1ZGUsIGxuZzogbWFya2VyLmxvbmdpdHVkZSB9KTsgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVUaXRsZSA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbihmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zZXRUaXRsZShtYXJrZXIudGl0bGUpOyB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUxhYmVsID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7IG0uc2V0TGFiZWwobWFya2VyLmxhYmVsKTsgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVEcmFnZ2FibGUgPSBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uc2V0RHJhZ2dhYmxlKG1hcmtlci5kcmFnZ2FibGUpOyB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUljb24gPSBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uc2V0SWNvbihtYXJrZXIuaWNvblVybCk7IH0pO1xuICAgIH07XG4gICAgTWFya2VyTWFuYWdlci5wcm90b3R5cGUudXBkYXRlT3BhY2l0eSA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbihmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zZXRPcGFjaXR5KG1hcmtlci5vcGFjaXR5KTsgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVWaXNpYmxlID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnNldFZpc2libGUobWFya2VyLnZpc2libGUpOyB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVpJbmRleCA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbihmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zZXRaSW5kZXgobWFya2VyLnpJbmRleCk7IH0pO1xuICAgIH07XG4gICAgTWFya2VyTWFuYWdlci5wcm90b3R5cGUuYWRkTWFya2VyID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICB2YXIgbWFya2VyUHJvbWlzZSA9IHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZU1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IG1hcmtlci5sYXRpdHVkZSwgbG5nOiBtYXJrZXIubG9uZ2l0dWRlIH0sXG4gICAgICAgICAgICBsYWJlbDogbWFya2VyLmxhYmVsLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBtYXJrZXIuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgaWNvbjogbWFya2VyLmljb25VcmwsXG4gICAgICAgICAgICBvcGFjaXR5OiBtYXJrZXIub3BhY2l0eSxcbiAgICAgICAgICAgIHZpc2libGU6IG1hcmtlci52aXNpYmxlLFxuICAgICAgICAgICAgekluZGV4OiBtYXJrZXIuekluZGV4LFxuICAgICAgICAgICAgdGl0bGU6IG1hcmtlci50aXRsZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbWFya2Vycy5zZXQobWFya2VyLCBtYXJrZXJQcm9taXNlKTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLmdldE5hdGl2ZU1hcmtlciA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBtYXJrZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICBtLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlci5uZXh0KGUpOyB9KTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIE1hcmtlck1hbmFnZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMS5Hb29nbGVNYXBzQVBJV3JhcHBlciwgfSxcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuTmdab25lLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIE1hcmtlck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0cy5NYXJrZXJNYW5hZ2VyID0gTWFya2VyTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcmtlci1tYW5hZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgncnhqcy9PYnNlcnZhYmxlJyk7XG52YXIgZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMSA9IHJlcXVpcmUoJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJyk7XG52YXIgUG9seWdvbk1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvbHlnb25NYW5hZ2VyKF9tYXBzV3JhcHBlciwgX3pvbmUpIHtcbiAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIgPSBfbWFwc1dyYXBwZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fcG9seWdvbnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIFBvbHlnb25NYW5hZ2VyLnByb3RvdHlwZS5hZGRQb2x5Z29uID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgdmFyIHBvbHlnb25Qcm9taXNlID0gdGhpcy5fbWFwc1dyYXBwZXIuY3JlYXRlUG9seWdvbih7XG4gICAgICAgICAgICBjbGlja2FibGU6IHBhdGguY2xpY2thYmxlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBwYXRoLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGVkaXRhYmxlOiBwYXRoLmVkaXRhYmxlLFxuICAgICAgICAgICAgZmlsbENvbG9yOiBwYXRoLmZpbGxDb2xvcixcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiBwYXRoLmZpbGxPcGFjaXR5LFxuICAgICAgICAgICAgZ2VvZGVzaWM6IHBhdGguZ2VvZGVzaWMsXG4gICAgICAgICAgICBwYXRoczogcGF0aC5wYXRocyxcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBwYXRoLnN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogcGF0aC5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiBwYXRoLnN0cm9rZVdlaWdodCxcbiAgICAgICAgICAgIHZpc2libGU6IHBhdGgudmlzaWJsZSxcbiAgICAgICAgICAgIHpJbmRleDogcGF0aC56SW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9wb2x5Z29ucy5zZXQocGF0aCwgcG9seWdvblByb21pc2UpO1xuICAgIH07XG4gICAgUG9seWdvbk1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVBvbHlnb24gPSBmdW5jdGlvbiAocG9seWdvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbSA9IHRoaXMuX3BvbHlnb25zLmdldChwb2x5Z29uKTtcbiAgICAgICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtLnRoZW4oZnVuY3Rpb24gKGwpIHsgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7IGwuc2V0UGF0aHMocG9seWdvbi5wYXRocyk7IH0pOyB9KTtcbiAgICB9O1xuICAgIFBvbHlnb25NYW5hZ2VyLnByb3RvdHlwZS5zZXRQb2x5Z29uT3B0aW9ucyA9IGZ1bmN0aW9uIChwYXRoLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb2x5Z29ucy5nZXQocGF0aCkudGhlbihmdW5jdGlvbiAobCkgeyBsLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgUG9seWdvbk1hbmFnZXIucHJvdG90eXBlLmRlbGV0ZVBvbHlnb24gPSBmdW5jdGlvbiAocGF0aHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG0gPSB0aGlzLl9wb2x5Z29ucy5nZXQocGF0aHMpO1xuICAgICAgICBpZiAobSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0udGhlbihmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbC5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3BvbHlnb25zLmRlbGV0ZShwYXRocyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQb2x5Z29uTWFuYWdlci5wcm90b3R5cGUuY3JlYXRlRXZlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgcGF0aCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgX3RoaXMuX3BvbHlnb25zLmdldChwYXRoKS50aGVuKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgbC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2ZXIubmV4dChlKTsgfSk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9seWdvbk1hbmFnZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgUG9seWdvbk1hbmFnZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMS5Hb29nbGVNYXBzQVBJV3JhcHBlciwgfSxcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuTmdab25lLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIFBvbHlnb25NYW5hZ2VyO1xufSgpKTtcbmV4cG9ydHMuUG9seWdvbk1hbmFnZXIgPSBQb2x5Z29uTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbHlnb24tbWFuYWdlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5Z29uLW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKTtcbnZhciBnb29nbGVfbWFwc19hcGlfd3JhcHBlcl8xID0gcmVxdWlyZSgnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInKTtcbnZhciBQb2x5bGluZU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvbHlsaW5lTWFuYWdlcihfbWFwc1dyYXBwZXIsIF96b25lKSB7XG4gICAgICAgIHRoaXMuX21hcHNXcmFwcGVyID0gX21hcHNXcmFwcGVyO1xuICAgICAgICB0aGlzLl96b25lID0gX3pvbmU7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgUG9seWxpbmVNYW5hZ2VyLl9jb252ZXJ0UG9pbnRzID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIHBhdGggPSBsaW5lLl9nZXRQb2ludHMoKS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICByZXR1cm4geyBsYXQ6IHBvaW50LmxhdGl0dWRlLCBsbmc6IHBvaW50LmxvbmdpdHVkZSB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbiAgICBQb2x5bGluZU1hbmFnZXIucHJvdG90eXBlLmFkZFBvbHlsaW5lID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIHBhdGggPSBQb2x5bGluZU1hbmFnZXIuX2NvbnZlcnRQb2ludHMobGluZSk7XG4gICAgICAgIHZhciBwb2x5bGluZVByb21pc2UgPSB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVQb2x5bGluZSh7XG4gICAgICAgICAgICBjbGlja2FibGU6IGxpbmUuY2xpY2thYmxlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBsaW5lLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGVkaXRhYmxlOiBsaW5lLmVkaXRhYmxlLFxuICAgICAgICAgICAgZ2VvZGVzaWM6IGxpbmUuZ2VvZGVzaWMsXG4gICAgICAgICAgICBzdHJva2VDb2xvcjogbGluZS5zdHJva2VDb2xvcixcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IGxpbmUuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICAgIHN0cm9rZVdlaWdodDogbGluZS5zdHJva2VXZWlnaHQsXG4gICAgICAgICAgICB2aXNpYmxlOiBsaW5lLnZpc2libGUsXG4gICAgICAgICAgICB6SW5kZXg6IGxpbmUuekluZGV4LFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcG9seWxpbmVzLnNldChsaW5lLCBwb2x5bGluZVByb21pc2UpO1xuICAgIH07XG4gICAgUG9seWxpbmVNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVQb2x5bGluZVBvaW50cyA9IGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXRoID0gUG9seWxpbmVNYW5hZ2VyLl9jb252ZXJ0UG9pbnRzKGxpbmUpO1xuICAgICAgICB2YXIgbSA9IHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSk7XG4gICAgICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS50aGVuKGZ1bmN0aW9uIChsKSB7IHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkgeyBsLnNldFBhdGgocGF0aCk7IH0pOyB9KTtcbiAgICB9O1xuICAgIFBvbHlsaW5lTWFuYWdlci5wcm90b3R5cGUuc2V0UG9seWxpbmVPcHRpb25zID0gZnVuY3Rpb24gKGxpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSkudGhlbihmdW5jdGlvbiAobCkgeyBsLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgUG9seWxpbmVNYW5hZ2VyLnByb3RvdHlwZS5kZWxldGVQb2x5bGluZSA9IGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtID0gdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKTtcbiAgICAgICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtLnRoZW4oZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGwuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9wb2x5bGluZXMuZGVsZXRlKGxpbmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9seWxpbmVNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsaW5lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKS50aGVuKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgbC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2ZXIubmV4dChlKTsgfSk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9seWxpbmVNYW5hZ2VyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIFBvbHlsaW5lTWFuYWdlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBnb29nbGVfbWFwc19hcGlfd3JhcHBlcl8xLkdvb2dsZU1hcHNBUElXcmFwcGVyLCB9LFxuICAgICAgICB7IHR5cGU6IGNvcmVfMS5OZ1pvbmUsIH0sXG4gICAgXTsgfTtcbiAgICByZXR1cm4gUG9seWxpbmVNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydHMuUG9seWxpbmVNYW5hZ2VyID0gUG9seWxpbmVNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seWxpbmUtbWFuYWdlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgncnhqcy9PYnNlcnZhYmxlJyk7XG52YXIgZ29vZ2xlX21hcHNfYXBpX3dyYXBwZXJfMSA9IHJlcXVpcmUoJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInKTtcbi8qKlxuICogTWFuYWdlcyBhbGwgS01MIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG52YXIgS21sTGF5ZXJNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLbWxMYXllck1hbmFnZXIoX3dyYXBwZXIsIF96b25lKSB7XG4gICAgICAgIHRoaXMuX3dyYXBwZXIgPSBfd3JhcHBlcjtcbiAgICAgICAgdGhpcy5fem9uZSA9IF96b25lO1xuICAgICAgICB0aGlzLl9sYXllcnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBuZXcgS01MIExheWVyIHRvIHRoZSBtYXAuXG4gICAgICovXG4gICAgS21sTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS5hZGRLbWxMYXllciA9IGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICB2YXIgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuS21sTGF5ZXIoe1xuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogbGF5ZXIuY2xpY2thYmxlLFxuICAgICAgICAgICAgICAgIG1hcDogbSxcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZVZpZXdwb3J0OiBsYXllci5wcmVzZXJ2ZVZpZXdwb3J0LFxuICAgICAgICAgICAgICAgIHNjcmVlbk92ZXJsYXlzOiBsYXllci5zY3JlZW5PdmVybGF5cyxcbiAgICAgICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBsYXllci5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICAgICAgICAgIHVybDogbGF5ZXIudXJsLFxuICAgICAgICAgICAgICAgIHpJbmRleDogbGF5ZXIuekluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2xheWVycy5zZXQobGF5ZXIsIG5ld0xheWVyKTtcbiAgICB9O1xuICAgIEttbExheWVyTWFuYWdlci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChsYXllciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgS21sTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS5kZWxldGVLbWxMYXllciA9IGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIF90aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBLbWxMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgS21sTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsYXllcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgX3RoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICBtLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlci5uZXh0KGUpOyB9KTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLbWxMYXllck1hbmFnZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgS21sTGF5ZXJNYW5hZ2VyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IGdvb2dsZV9tYXBzX2FwaV93cmFwcGVyXzEuR29vZ2xlTWFwc0FQSVdyYXBwZXIsIH0sXG4gICAgICAgIHsgdHlwZTogY29yZV8xLk5nWm9uZSwgfSxcbiAgICBdOyB9O1xuICAgIHJldHVybiBLbWxMYXllck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0cy5LbWxMYXllck1hbmFnZXIgPSBLbWxMYXllck1hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rbWwtbGF5ZXItbWFuYWdlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNpcmNsZV9tYW5hZ2VyXzEgPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9jaXJjbGUtbWFuYWdlcicpO1xudmFyIFNlYm1Hb29nbGVNYXBDaXJjbGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYm1Hb29nbGVNYXBDaXJjbGUoX21hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fbWFuYWdlciA9IF9tYW5hZ2VyO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBDaXJjbGUgaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBjaXJjbGUgb3ZlciB0aGUgbWFwLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBjaXJjbGUgYnkgZHJhZ2dpbmcgdGhlIGNvbnRyb2wgcG9pbnRzIHNob3duIGF0XG4gICAgICAgICAqIHRoZSBjZW50ZXIgYW5kIGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSBvZiB0aGUgY2lyY2xlLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYWRpdXMgaW4gbWV0ZXJzIG9uIHRoZSBFYXJ0aCdzIHN1cmZhY2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3Ryb2tlIHBvc2l0aW9uLiBEZWZhdWx0cyB0byBDRU5URVIuXG4gICAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCBvbiBJbnRlcm5ldCBFeHBsb3JlciA4IGFuZCBlYXJsaWVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdHJva2VQb3NpdGlvbiA9ICdDRU5URVInO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0cm9rZVdlaWdodCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRoaXMgY2lyY2xlIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSdzIGNlbnRlciBpcyBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jZW50ZXJDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaXJjbGVDbGljayA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBjaXJjbGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNpcmNsZURibENsaWNrID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgY2lyY2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmFnID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgY2lyY2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmFnRW5kID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIGNpcmNsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlZG93biBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vtb3ZlIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBjaXJjbGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlTW92ZSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIGNpcmNsZSBtb3VzZW91dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VPdXQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBjaXJjbGUgbW91c2VvdmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VzZU92ZXIgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VzZVVwID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlJ3MgcmFkaXVzIGlzIGNoYW5nZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJhZGl1c0NoYW5nZSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSBpcyByaWdodC1jbGlja2VkIG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yaWdodENsaWNrID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fY2lyY2xlQWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zID0gW107XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwQ2lyY2xlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbWFuYWdlci5hZGRDaXJjbGUodGhpcyk7XG4gICAgICAgIHRoaXMuX2NpcmNsZUFkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBDaXJjbGUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jaXJjbGVBZGRlZFRvTWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydsYXRpdHVkZSddIHx8IGNoYW5nZXNbJ2xvbmdpdHVkZSddKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLnNldENlbnRlcih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snZWRpdGFibGUnXSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5zZXRFZGl0YWJsZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snZHJhZ2dhYmxlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZXIuc2V0RHJhZ2dhYmxlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZXIuc2V0VmlzaWJsZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1sncmFkaXVzJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZXIuc2V0UmFkaXVzKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNpcmNsZU9wdGlvbnNDaGFuZ2VzKGNoYW5nZXMpO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcENpcmNsZS5wcm90b3R5cGUuX3VwZGF0ZUNpcmNsZU9wdGlvbnNDaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgdmFyIG9wdGlvbktleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIFNlYm1Hb29nbGVNYXBDaXJjbGUuX21hcE9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTE7IH0pO1xuICAgICAgICBvcHRpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcbiAgICAgICAgaWYgKG9wdGlvbktleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwQ2lyY2xlLnByb3RvdHlwZS5fcmVnaXN0ZXJFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV2ZW50cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZXZlbnRzLnNldCgnY2VudGVyX2NoYW5nZWQnLCB0aGlzLmNlbnRlckNoYW5nZSk7XG4gICAgICAgIGV2ZW50cy5zZXQoJ2NsaWNrJywgdGhpcy5jaXJjbGVDbGljayk7XG4gICAgICAgIGV2ZW50cy5zZXQoJ2RibGNsaWNrJywgdGhpcy5jaXJjbGVEYmxDbGljayk7XG4gICAgICAgIGV2ZW50cy5zZXQoJ2RyYWcnLCB0aGlzLmRyYWcpO1xuICAgICAgICBldmVudHMuc2V0KCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kKTtcbiAgICAgICAgZXZlbnRzLnNldCgnZHJhZ1N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpO1xuICAgICAgICBldmVudHMuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bik7XG4gICAgICAgIGV2ZW50cy5zZXQoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKTtcbiAgICAgICAgZXZlbnRzLnNldCgnbW91c2VvdXQnLCB0aGlzLm1vdXNlT3V0KTtcbiAgICAgICAgZXZlbnRzLnNldCgnbW91c2VvdmVyJywgdGhpcy5tb3VzZU92ZXIpO1xuICAgICAgICBldmVudHMuc2V0KCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwKTtcbiAgICAgICAgZXZlbnRzLnNldCgncmFkaXVzX2NoYW5nZWQnLCB0aGlzLnJhZGl1c0NoYW5nZSk7XG4gICAgICAgIGV2ZW50cy5zZXQoJ3JpZ2h0Y2xpY2snLCB0aGlzLnJpZ2h0Q2xpY2spO1xuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRFbWl0dGVyLCBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIF90aGlzLl9ldmVudFN1YnNjcmlwdGlvbnMucHVzaChfdGhpcy5fbWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoZXZlbnROYW1lLCBfdGhpcykuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGl1c19jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tYW5hZ2VyLmdldFJhZGl1cyhfdGhpcykudGhlbihmdW5jdGlvbiAocmFkaXVzKSB7IHJldHVybiBldmVudEVtaXR0ZXIuZW1pdChyYWRpdXMpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjZW50ZXJfY2hhbmdlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbWFuYWdlci5nZXRDZW50ZXIoX3RoaXMpLnRoZW4oZnVuY3Rpb24gKGNlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudEVtaXR0ZXIuZW1pdCh7IGxhdDogY2VudGVyLmxhdCgpLCBsbmc6IGNlbnRlci5sbmcoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCh7IGNvb3JkczogeyBsYXQ6IHZhbHVlLmxhdExuZy5sYXQoKSwgbG5nOiB2YWx1ZS5sYXRMbmcubG5nKCkgfSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBDaXJjbGUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocykgeyBzLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLl9tYW5hZ2VyLnJlbW92ZUNpcmNsZSh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIExhdExuZ0JvdW5kcyBvZiB0aGlzIENpcmNsZS5cbiAgICAgKi9cbiAgICBTZWJtR29vZ2xlTWFwQ2lyY2xlLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYW5hZ2VyLmdldEJvdW5kcyh0aGlzKTsgfTtcbiAgICBTZWJtR29vZ2xlTWFwQ2lyY2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYW5hZ2VyLmdldENlbnRlcih0aGlzKTsgfTtcbiAgICBTZWJtR29vZ2xlTWFwQ2lyY2xlLl9tYXBPcHRpb25zID0gW1xuICAgICAgICAnZmlsbENvbG9yJywgJ2ZpbGxPcGFjaXR5JywgJ3N0cm9rZUNvbG9yJywgJ3N0cm9rZU9wYWNpdHknLCAnc3Ryb2tlUG9zaXRpb24nLCAnc3Ryb2tlV2VpZ2h0JyxcbiAgICAgICAgJ3Zpc2libGUnLCAnekluZGV4J1xuICAgIF07XG4gICAgU2VibUdvb2dsZU1hcENpcmNsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IGNvcmVfMS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VibS1nb29nbGUtbWFwLWNpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhdGl0dWRlJywgJ2xvbmdpdHVkZScsICdjbGlja2FibGUnLCAnZHJhZ2dhYmxlOiBjaXJjbGVEcmFnZ2FibGUnLCAnZWRpdGFibGUnLCAnZmlsbENvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaWxsT3BhY2l0eScsICdyYWRpdXMnLCAnc3Ryb2tlQ29sb3InLCAnc3Ryb2tlT3BhY2l0eScsICdzdHJva2VQb3NpdGlvbicsICdzdHJva2VXZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Zpc2libGUnLCAnekluZGV4J1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2VudGVyQ2hhbmdlJywgJ2NpcmNsZUNsaWNrJywgJ2NpcmNsZURibENsaWNrJywgJ2RyYWcnLCAnZHJhZ0VuZCcsICdkcmFnU3RhcnQnLCAnbW91c2VEb3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtb3VzZU1vdmUnLCAnbW91c2VPdXQnLCAnbW91c2VPdmVyJywgJ21vdXNlVXAnLCAncmFkaXVzQ2hhbmdlJywgJ3JpZ2h0Q2xpY2snXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIFNlYm1Hb29nbGVNYXBDaXJjbGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogY2lyY2xlX21hbmFnZXJfMS5DaXJjbGVNYW5hZ2VyLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIFNlYm1Hb29nbGVNYXBDaXJjbGU7XG59KCkpO1xuZXhwb3J0cy5TZWJtR29vZ2xlTWFwQ2lyY2xlID0gU2VibUdvb2dsZU1hcENpcmNsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdvb2dsZS1tYXAtY2lyY2xlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC1jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBpbmZvX3dpbmRvd19tYW5hZ2VyXzEgPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyJyk7XG52YXIgaW5mb1dpbmRvd0lkID0gMDtcbi8qKlxuICogU2VibUdvb2dsZU1hcEluZm9XaW5kb3cgcmVuZGVycyBhIGluZm8gd2luZG93IGluc2lkZSBhIHtAbGluayBTZWJtR29vZ2xlTWFwTWFya2VyfSBvciBzdGFuZGFsb25lLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7IFNlYm1Hb29nbGVNYXAsIFNlYm1Hb29nbGVNYXBNYXJrZXIsIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93IH0gZnJvbVxuICogJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgZGlyZWN0aXZlczogW1NlYm1Hb29nbGVNYXAsIFNlYm1Hb29nbGVNYXBNYXJrZXIsIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93XSxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPHNlYm0tZ29vZ2xlLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxzZWJtLWdvb2dsZS1tYXAtbWFya2VyIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFtsYWJlbF09XCInTSdcIj5cbiAqICAgICAgICA8c2VibS1nb29nbGUtbWFwLWluZm8td2luZG93IFtkaXNhYmxlQXV0b1Bhbl09XCJ0cnVlXCI+XG4gKiAgICAgICAgICBIaSwgdGhpcyBpcyB0aGUgY29udGVudCBvZiB0aGUgPHN0cm9uZz5pbmZvIHdpbmRvdzwvc3Ryb25nPlxuICogICAgICAgIDwvc2VibS1nb29nbGUtbWFwLWluZm8td2luZG93PlxuICogICAgICA8L3NlYm0tZ29vZ2xlLW1hcC1tYXJrZXI+XG4gKiAgICA8L3NlYm0tZ29vZ2xlLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbnZhciBTZWJtR29vZ2xlTWFwSW5mb1dpbmRvdyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VibUdvb2dsZU1hcEluZm9XaW5kb3coX2luZm9XaW5kb3dNYW5hZ2VyLCBfZWwpIHtcbiAgICAgICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIgPSBfaW5mb1dpbmRvd01hbmFnZXI7XG4gICAgICAgIHRoaXMuX2VsID0gX2VsO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgb3BlbiBzdGF0ZSBmb3IgdGhlIEluZm9XaW5kb3cuIFlvdSBjYW4gYWxzbyBjYWxsIHRoZSBvcGVuKCkgYW5kIGNsb3NlKCkgbWV0aG9kcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBpbmZvIHdpbmRvdyBpcyBjbG9zZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluZm9XaW5kb3dDbG9zZSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pZCA9IChpbmZvV2luZG93SWQrKykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgU2VibUdvb2dsZU1hcEluZm9XaW5kb3cucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWJtLWdvb2dsZS1tYXAtaW5mby13aW5kb3ctY29udGVudCcpO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5hZGRJbmZvV2luZG93KHRoaXMpO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93QWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl91cGRhdGVPcGVuU3RhdGUoKTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5mb1dpbmRvd0FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChjaGFuZ2VzWydsYXRpdHVkZSddIHx8IGNoYW5nZXNbJ2xvbmdpdHVkZSddKSAmJiB0eXBlb2YgdGhpcy5sYXRpdHVkZSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLmxvbmdpdHVkZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLnNldFBvc2l0aW9uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWyd6SW5kZXgnXSkge1xuICAgICAgICAgICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuc2V0WkluZGV4KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydpc09wZW4nXSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlT3BlblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0SW5mb1dpbmRvd09wdGlvbnMoY2hhbmdlcyk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwSW5mb1dpbmRvdy5wcm90b3R5cGUuX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnY2xvc2VjbGljaycsIHRoaXMpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmluZm9XaW5kb3dDbG9zZS5lbWl0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcEluZm9XaW5kb3cucHJvdG90eXBlLl91cGRhdGVPcGVuU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5vcGVuKCkgOiB0aGlzLmNsb3NlKCk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwSW5mb1dpbmRvdy5wcm90b3R5cGUuX3NldEluZm9XaW5kb3dPcHRpb25zID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgdmFyIG9wdGlvbktleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93Ll9pbmZvV2luZG93T3B0aW9uc0lucHV0cy5pbmRleE9mKGspICE9PSAtMTsgfSk7XG4gICAgICAgIG9wdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7IH0pO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGluZm8gd2luZG93LlxuICAgICAqL1xuICAgIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5faW5mb1dpbmRvd01hbmFnZXIub3Blbih0aGlzKTsgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGluZm8gd2luZG93LlxuICAgICAqL1xuICAgIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmNsb3NlKHRoaXMpLnRoZW4oZnVuY3Rpb24gKCkgeyBfdGhpcy5pbmZvV2luZG93Q2xvc2UuZW1pdCgpOyB9KTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwSW5mb1dpbmRvdy5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9pZDsgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgU2VibUdvb2dsZU1hcEluZm9XaW5kb3cucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ1NlYm1Hb29nbGVNYXBJbmZvV2luZG93LScgKyB0aGlzLl9pZC50b1N0cmluZygpOyB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwSW5mb1dpbmRvdy5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmRlbGV0ZUluZm9XaW5kb3codGhpcyk7IH07XG4gICAgU2VibUdvb2dsZU1hcEluZm9XaW5kb3cuX2luZm9XaW5kb3dPcHRpb25zSW5wdXRzID0gWydkaXNhYmxlQXV0b1BhbicsICdtYXhXaWR0aCddO1xuICAgIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93LmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkNvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWJtLWdvb2dsZS1tYXAtaW5mby13aW5kb3cnLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IFsnbGF0aXR1ZGUnLCAnbG9uZ2l0dWRlJywgJ2Rpc2FibGVBdXRvUGFuJywgJ2lzT3BlbicsICd6SW5kZXgnLCAnbWF4V2lkdGgnXSxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0czogWydpbmZvV2luZG93Q2xvc2UnXSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz0nc2VibS1nb29nbGUtbWFwLWluZm8td2luZG93LWNvbnRlbnQnPlxcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG4gICAgPC9kaXY+XFxuICBcIlxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgU2VibUdvb2dsZU1hcEluZm9XaW5kb3cuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogaW5mb193aW5kb3dfbWFuYWdlcl8xLkluZm9XaW5kb3dNYW5hZ2VyLCB9LFxuICAgICAgICB7IHR5cGU6IGNvcmVfMS5FbGVtZW50UmVmLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIFNlYm1Hb29nbGVNYXBJbmZvV2luZG93O1xufSgpKTtcbmV4cG9ydHMuU2VibUdvb2dsZU1hcEluZm9XaW5kb3cgPSBTZWJtR29vZ2xlTWFwSW5mb1dpbmRvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdvb2dsZS1tYXAtaW5mby13aW5kb3cuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy9nb29nbGUtbWFwLWluZm8td2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIga21sX2xheWVyX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4vLi4vc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXInKTtcbnZhciBsYXllcklkID0gMDtcbnZhciBTZWJtR29vZ2xlTWFwS21sTGF5ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYm1Hb29nbGVNYXBLbWxMYXllcihfbWFuYWdlcikge1xuICAgICAgICB0aGlzLl9tYW5hZ2VyID0gX21hbmFnZXI7XG4gICAgICAgIHRoaXMuX2FkZGVkVG9NYW5hZ2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lkID0gKGxheWVySWQrKykudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdHJ1ZSwgdGhlIGxheWVyIHJlY2VpdmVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQnkgZGVmYXVsdCwgdGhlIGlucHV0IG1hcCBpcyBjZW50ZXJlZCBhbmQgem9vbWVkIHRvIHRoZSBib3VuZGluZyBib3ggb2YgdGhlIGNvbnRlbnRzIG9mIHRoZVxuICAgICAgICAgKiBsYXllci5cbiAgICAgICAgICogSWYgdGhpcyBvcHRpb24gaXMgc2V0IHRvIHRydWUsIHRoZSB2aWV3cG9ydCBpcyBsZWZ0IHVuY2hhbmdlZCwgdW5sZXNzIHRoZSBtYXAncyBjZW50ZXIgYW5kIHpvb21cbiAgICAgICAgICogd2VyZSBuZXZlciBzZXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByZXNlcnZlVmlld3BvcnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBzY3JlZW4gb3ZlcmxheXMuIERlZmF1bHQgdHJ1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NyZWVuT3ZlcmxheXMgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3VwcHJlc3MgdGhlIHJlbmRlcmluZyBvZiBpbmZvIHdpbmRvd3Mgd2hlbiBsYXllciBmZWF0dXJlcyBhcmUgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3VwcHJlc3NJbmZvV2luZG93cyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFVSTCBvZiB0aGUgS01MIGRvY3VtZW50IHRvIGRpc3BsYXkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVybCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgei1pbmRleCBvZiB0aGUgbGF5ZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnpJbmRleCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gYSBmZWF0dXJlIGluIHRoZSBsYXllciBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXllckNsaWNrID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgS01MIGxheWVycyBkZWZhdWx0IHZpZXdwb3J0IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld3BvcnRDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBLTUwgbGF5ZXIgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqIEF0IHRoaXMgcG9pbnQgaXQgaXMgc2FmZSB0byByZWFkIHRoZSBzdGF0dXMgcHJvcGVydHkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBsYXllciBsb2FkZWRcbiAgICAgICAgICogc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBTZWJtR29vZ2xlTWFwS21sTGF5ZXIucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYWRkZWRUb01hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYW5hZ2VyLmFkZEttbExheWVyKHRoaXMpO1xuICAgICAgICB0aGlzLl9hZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwS21sTGF5ZXIucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hZGRlZFRvTWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvbHlnb25PcHRpb25zKGNoYW5nZXMpO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcEttbExheWVyLnByb3RvdHlwZS5fdXBkYXRlUG9seWdvbk9wdGlvbnMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBTZWJtR29vZ2xlTWFwS21sTGF5ZXIuX2ttbExheWVyT3B0aW9ucy5pbmRleE9mKGspICE9PSAtMTsgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaykge1xuICAgICAgICAgICAgb2JqW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXBLbWxMYXllci5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnY2xpY2snLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxheWVyQ2xpY2suZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RlZmF1bHR2aWV3cG9ydF9jaGFuZ2VkJywgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVmYXVsdFZpZXdwb3J0Q2hhbmdlLmVtaXQoKTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnc3RhdHVzX2NoYW5nZWQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdGF0dXNDaGFuZ2UuZW1pdCgpOyB9IH0sXG4gICAgICAgIF07XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBvcyA9IF90aGlzLl9tYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZShvYmoubmFtZSwgX3RoaXMpLnN1YnNjcmliZShvYmouaGFuZGxlcik7XG4gICAgICAgICAgICBfdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgU2VibUdvb2dsZU1hcEttbExheWVyLnByb3RvdHlwZS5pZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2lkOyB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwS21sTGF5ZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJTZWJtR29vZ2xlTWFwS21sTGF5ZXItXCIgKyB0aGlzLl9pZC50b1N0cmluZygpOyB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwS21sTGF5ZXIucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9tYW5hZ2VyLmRlbGV0ZUttbExheWVyKHRoaXMpO1xuICAgICAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcEttbExheWVyLl9rbWxMYXllck9wdGlvbnMgPSBbJ2NsaWNrYWJsZScsICdwcmVzZXJ2ZVZpZXdwb3J0JywgJ3NjcmVlbk92ZXJsYXlzJywgJ3N1cHByZXNzSW5mb1dpbmRvd3MnLCAndXJsJywgJ3pJbmRleCddO1xuICAgIFNlYm1Hb29nbGVNYXBLbWxMYXllci5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IGNvcmVfMS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VibS1nb29nbGUtbWFwLWttbC1sYXllcicsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0czogWydjbGlja2FibGUnLCAncHJlc2VydmVWaWV3cG9ydCcsICdzY3JlZW5PdmVybGF5cycsICdzdXBwcmVzc0luZm9XaW5kb3dzJywgJ3VybCcsICd6SW5kZXgnXSxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0czogWydsYXllckNsaWNrJywgJ2RlZmF1bHRWaWV3cG9ydENoYW5nZScsICdzdGF0dXNDaGFuZ2UnXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgU2VibUdvb2dsZU1hcEttbExheWVyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IGttbF9sYXllcl9tYW5hZ2VyXzEuS21sTGF5ZXJNYW5hZ2VyLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIFNlYm1Hb29nbGVNYXBLbWxMYXllcjtcbn0oKSk7XG5leHBvcnRzLlNlYm1Hb29nbGVNYXBLbWxMYXllciA9IFNlYm1Hb29nbGVNYXBLbWxMYXllcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdvb2dsZS1tYXAta21sLWxheWVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC1rbWwtbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBtYXJrZXJfbWFuYWdlcl8xID0gcmVxdWlyZSgnLi4vc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXInKTtcbnZhciBnb29nbGVfbWFwX2luZm9fd2luZG93XzEgPSByZXF1aXJlKCcuL2dvb2dsZS1tYXAtaW5mby13aW5kb3cnKTtcbnZhciBtYXJrZXJJZCA9IDA7XG4vKipcbiAqIFNlYm1Hb29nbGVNYXBNYXJrZXIgcmVuZGVycyBhIG1hcCBtYXJrZXIgaW5zaWRlIGEge0BsaW5rIFNlYm1Hb29nbGVNYXB9LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7IFNlYm1Hb29nbGVNYXAsIFNlYm1Hb29nbGVNYXBNYXJrZXIgfSBmcm9tICdhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIGRpcmVjdGl2ZXM6IFtTZWJtR29vZ2xlTWFwLCBTZWJtR29vZ2xlTWFwTWFya2VyXSxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPHNlYm0tZ29vZ2xlLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxzZWJtLWdvb2dsZS1tYXAtbWFya2VyIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFtsYWJlbF09XCInTSdcIj5cbiAqICAgICAgPC9zZWJtLWdvb2dsZS1tYXAtbWFya2VyPlxuICogICAgPC9zZWJtLWdvb2dsZS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG52YXIgU2VibUdvb2dsZU1hcE1hcmtlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VibUdvb2dsZU1hcE1hcmtlcihfbWFya2VyTWFuYWdlcikge1xuICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyID0gX21hcmtlck1hbmFnZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0cnVlLCB0aGUgbWFya2VyIGNhbiBiZSBkcmFnZ2VkLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRydWUsIHRoZSBtYXJrZXIgaXMgdmlzaWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBvcGVuIHRoZSBjaGlsZCBpbmZvIHdpbmRvdyB3aGVuIHRoZSBtYXJrZXIgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub3BlbkluZm9XaW5kb3cgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1hcmtlcidzIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFya2VycyBhcmUgZGlzcGxheWVkIG9uIHRoZSBtYXAgaW4gb3JkZXIgb2YgdGhlaXIgekluZGV4LCB3aXRoIGhpZ2hlciB2YWx1ZXMgZGlzcGxheWluZyBpblxuICAgICAgICAgKiBmcm9udCBvZiBtYXJrZXJzIHdpdGggbG93ZXIgdmFsdWVzLiBCeSBkZWZhdWx0LCBtYXJrZXJzIGFyZSBkaXNwbGF5ZWQgYWNjb3JkaW5nIHRvIHRoZWlyXG4gICAgICAgICAqIHZlcnRpY2FsIHBvc2l0aW9uIG9uIHNjcmVlbiwgd2l0aCBsb3dlciBtYXJrZXJzIGFwcGVhcmluZyBpbiBmcm9udCBvZiBtYXJrZXJzIGZ1cnRoZXIgdXAgdGhlXG4gICAgICAgICAqIHNjcmVlbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuekluZGV4ID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIG1hcmtlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWFya2VyQ2xpY2sgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBtYXJrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIG1vdXNlcyBvdmVyIHRoZSBtYXJrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlT3ZlciA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgbW91c2VzIG91dHNpZGUgdGhlIG1hcmtlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VPdXQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9tYXJrZXJBZGRlZFRvTWFuZ2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuX2lkID0gKG1hcmtlcklkKyspLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIC8qIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBNYXJrZXIucHJvdG90eXBlLm5nQWZ0ZXJDb250ZW50SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5mb1dpbmRvdyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluZm9XaW5kb3cuaG9zdE1hcmtlciA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwTWFya2VyLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMubG9uZ2l0dWRlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fbWFya2VyQWRkZWRUb01hbmdlcikge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci5hZGRNYXJrZXIodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJBZGRlZFRvTWFuZ2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlTWFya2VyUG9zaXRpb24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ3RpdGxlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlVGl0bGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2xhYmVsJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlTGFiZWwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2RyYWdnYWJsZSddKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZURyYWdnYWJsZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snaWNvblVybCddKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZUljb24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ29wYWNpdHknXSkge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVPcGFjaXR5KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlVmlzaWJsZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snekluZGV4J10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlWkluZGV4KHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwTWFya2VyLnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjcyA9IHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKCdjbGljaycsIHRoaXMpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3BlbkluZm9XaW5kb3cgJiYgX3RoaXMuaW5mb1dpbmRvdyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5mb1dpbmRvdy5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5tYXJrZXJDbGljay5lbWl0KG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChjcyk7XG4gICAgICAgIHZhciBkcyA9IHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKCdkcmFnZW5kJywgdGhpcylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmRyYWdFbmQuZW1pdCh7IGNvb3JkczogeyBsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKGRzKTtcbiAgICAgICAgdmFyIG1vdmVyID0gdGhpcy5fbWFya2VyTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoJ21vdXNlb3ZlcicsIHRoaXMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5tb3VzZU92ZXIuZW1pdCh7IGNvb3JkczogeyBsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG1vdmVyKTtcbiAgICAgICAgdmFyIG1vdXQgPSB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnbW91c2VvdXQnLCB0aGlzKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMubW91c2VPdXQuZW1pdCh7IGNvb3JkczogeyBsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG1vdXQpO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBNYXJrZXIucHJvdG90eXBlLmlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5faWQ7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBNYXJrZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ1NlYm1Hb29nbGVNYXBNYXJrZXItJyArIHRoaXMuX2lkLnRvU3RyaW5nKCk7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBNYXJrZXIucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLmRlbGV0ZU1hcmtlcih0aGlzKTtcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwTWFya2VyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWJtLWdvb2dsZS1tYXAtbWFya2VyJyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGF0aXR1ZGUnLCAnbG9uZ2l0dWRlJywgJ3RpdGxlJywgJ2xhYmVsJywgJ2RyYWdnYWJsZTogbWFya2VyRHJhZ2dhYmxlJywgJ2ljb25VcmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29wZW5JbmZvV2luZG93JywgJ29wYWNpdHknLCAndmlzaWJsZScsICd6SW5kZXgnXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IFsnbWFya2VyQ2xpY2snLCAnZHJhZ0VuZCcsICdtb3VzZU92ZXInLCAnbW91c2VPdXQnXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgU2VibUdvb2dsZU1hcE1hcmtlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBtYXJrZXJfbWFuYWdlcl8xLk1hcmtlck1hbmFnZXIsIH0sXG4gICAgXTsgfTtcbiAgICBTZWJtR29vZ2xlTWFwTWFya2VyLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAnaW5mb1dpbmRvdyc6IFt7IHR5cGU6IGNvcmVfMS5Db250ZW50Q2hpbGQsIGFyZ3M6IFtnb29nbGVfbWFwX2luZm9fd2luZG93XzEuU2VibUdvb2dsZU1hcEluZm9XaW5kb3csXSB9LF0sXG4gICAgfTtcbiAgICByZXR1cm4gU2VibUdvb2dsZU1hcE1hcmtlcjtcbn0oKSk7XG5leHBvcnRzLlNlYm1Hb29nbGVNYXBNYXJrZXIgPSBTZWJtR29vZ2xlTWFwTWFya2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z29vZ2xlLW1hcC1tYXJrZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy9nb29nbGUtbWFwLW1hcmtlci5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIHBvbHlnb25fbWFuYWdlcl8xID0gcmVxdWlyZSgnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJyk7XG4vKipcbiAqIFNlYm1Hb29nbGVNYXBQb2x5Z29uIHJlbmRlcnMgYSBwb2x5Z29uIG9uIGEge0BsaW5rIFNlYm1Hb29nbGVNYXB9XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICogaW1wb3J0IHsgU2VibUdvb2dsZU1hcCwgU2VibUdvb2dsZVBvbHlnb24sIExhdExuZ0xpdGVyYWwgfSBmcm9tICdhbmd1bGFyMi1tYXBzL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgLnNlbWItbWFwLWNvbnRhaW5lciB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPHNlbWItbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPHNlbWItbWFwLXBvbHlnb24gW3BhdGhzXT1cInBhdGhzXCI+XG4gKiAgICAgIDwvc2VtYi1tYXAtcG9seWdvbj5cbiAqICAgIDwvc2VtYi1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeU1hcENtcCB7XG4gKiAgIGxhdDogbnVtYmVyID0gMDtcbiAqICAgbG5nOiBudW1iZXIgPSAwO1xuICogICB6b29tOiBudW1iZXIgPSAxMDtcbiAqICAgcGF0aHM6IEFycmF5PExhdExuZ0xpdGVyYWw+ID0gW1xuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9XG4gKiAgIF1cbiAqICAgLy8gTmVzdGluZyBwYXRocyB3aWxsIGNyZWF0ZSBhIGhvbGUgd2hlcmUgdGhleSBvdmVybGFwO1xuICogICBuZXN0ZWRQYXRoczogQXJyYXk8QXJyYXk8TGF0TG5nTGl0ZXJhbD4+ID0gW1tcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfVxuICogICBdLCBbXG4gKiAgICAgeyBsYXQ6IDAsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiA1LCBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDUsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAxNSB9XG4gKiAgIF1dXG4gKiB9XG4gKiBgYGBcbiAqL1xudmFyIFNlYm1Hb29nbGVNYXBQb2x5Z29uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWJtR29vZ2xlTWFwUG9seWdvbihfcG9seWdvbk1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fcG9seWdvbk1hbmFnZXIgPSBfcG9seWdvbk1hbmFnZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIFBvbHlnb24gaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBzaGFwZSBvdmVyIHRoZSBtYXAuIFRoZSBnZW9kZXNpY1xuICAgICAgICAgKiBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBtb2RlIG9mIGRyYWdnaW5nLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBzaGFwZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbFxuICAgICAgICAgKiBwb2ludHMgc2hvd24gYXQgdGhlIHZlcnRpY2VzIGFuZCBvbiBlYWNoIHNlZ21lbnQuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGxcbiAgICAgICAgICogZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLiBXaGVuIGZhbHNlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmVcbiAgICAgICAgICogcmVuZGVyZWQgYXMgc3RyYWlnaHQgbGluZXMgaW4gc2NyZWVuIHNwYWNlLiBOb3RlIHRoYXQgdGhlIHNoYXBlIG9mIGFcbiAgICAgICAgICogZ2VvZGVzaWMgcG9seWdvbiBtYXkgYXBwZWFyIHRvIGNoYW5nZSB3aGVuIGRyYWdnZWQsIGFzIHRoZSBkaW1lbnNpb25zXG4gICAgICAgICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdlb2Rlc2ljID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3JkZXJlZCBzZXF1ZW5jZSBvZiBjb29yZGluYXRlcyB0aGF0IGRlc2lnbmF0ZXMgYSBjbG9zZWQgbG9vcC5cbiAgICAgICAgICogVW5saWtlIHBvbHlsaW5lcywgYSBwb2x5Z29uIG1heSBjb25zaXN0IG9mIG9uZSBvciBtb3JlIHBhdGhzLlxuICAgICAgICAgKiAgQXMgYSByZXN1bHQsIHRoZSBwYXRocyBwcm9wZXJ0eSBtYXkgc3BlY2lmeSBvbmUgb3IgbW9yZSBhcnJheXMgb2ZcbiAgICAgICAgICogTGF0TG5nIGNvb3JkaW5hdGVzLiBQYXRocyBhcmUgY2xvc2VkIGF1dG9tYXRpY2FsbHk7IGRvIG5vdCByZXBlYXQgdGhlXG4gICAgICAgICAqIGZpcnN0IHZlcnRleCBvZiB0aGUgcGF0aCBhcyB0aGUgbGFzdCB2ZXJ0ZXguIFNpbXBsZSBwb2x5Z29ucyBtYXkgYmVcbiAgICAgICAgICogZGVmaW5lZCB1c2luZyBhIHNpbmdsZSBhcnJheSBvZiBMYXRMbmdzLiBNb3JlIGNvbXBsZXggcG9seWdvbnMgbWF5XG4gICAgICAgICAqIHNwZWNpZnkgYW4gYXJyYXkgb2YgYXJyYXlzLiBBbnkgc2ltcGxlIGFycmF5cyBhcmUgY29udmVydGVkIGludG8gQXJyYXlzLlxuICAgICAgICAgKiBJbnNlcnRpbmcgb3IgcmVtb3ZpbmcgTGF0TG5ncyBmcm9tIHRoZSBBcnJheSB3aWxsIGF1dG9tYXRpY2FsbHkgdXBkYXRlXG4gICAgICAgICAqIHRoZSBwb2x5Z29uIG9uIHRoZSBtYXAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seUNsaWNrID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIGRibGNsaWNrIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2x5RGJsQ2xpY2sgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBwb2x5Z29uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2x5RHJhZyA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIHBvbHlnb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvbHlEcmFnRW5kID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIHBvbHlnb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvbHlEcmFnU3RhcnQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2x5TW91c2VEb3duID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seU1vdXNlTW92ZSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlnb24gbW91c2VvdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvbHlNb3VzZU91dCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlnb24gbW91c2VvdmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2x5TW91c2VPdmVyID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2x5TW91c2VVcCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW4gaXMgZmlyZWQgd2hlbiB0aGUgUG9seWdvbiBpcyByaWdodC1jbGlja2VkIG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2x5UmlnaHRDbGljayA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX3BvbHlnb25BZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW107XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwUG9seWdvbi5wcm90b3R5cGUubmdBZnRlckNvbnRlbnRJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BvbHlnb25BZGRlZFRvTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwUG9seWdvbi5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoIXRoaXMuX3BvbHlnb25BZGRlZFRvTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BvbHlnb25NYW5hZ2VyLnNldFBvbHlnb25PcHRpb25zKHRoaXMsIHRoaXMuX3VwZGF0ZVBvbHlnb25PcHRpb25zKGNoYW5nZXMpKTtcbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5Z29uLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fcG9seWdvbk1hbmFnZXIuYWRkUG9seWdvbih0aGlzKTtcbiAgICAgICAgdGhpcy5fcG9seWdvbkFkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5Z29uLnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ2NsaWNrJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5wb2x5Q2xpY2suZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RiY2xpY2snLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlEYmxDbGljay5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZHJhZycsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMucG9seURyYWcuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RyYWdlbmQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlEcmFnRW5kLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdkcmFnc3RhcnQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlEcmFnU3RhcnQuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNlZG93bicsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMucG9seU1vdXNlRG93bi5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnbW91c2Vtb3ZlJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5wb2x5TW91c2VNb3ZlLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdtb3VzZW91dCcsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMucG9seU1vdXNlT3V0LmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdtb3VzZW92ZXInLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlNb3VzZU92ZXIuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNldXAnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlNb3VzZVVwLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdyaWdodGNsaWNrJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5wb2x5UmlnaHRDbGljay5lbWl0KGV2KTsgfSB9LFxuICAgICAgICBdO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBvcyA9IF90aGlzLl9wb2x5Z29uTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUob2JqLm5hbWUsIF90aGlzKS5zdWJzY3JpYmUob2JqLmhhbmRsZXIpO1xuICAgICAgICAgICAgX3RoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChvcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcFBvbHlnb24ucHJvdG90eXBlLl91cGRhdGVQb2x5Z29uT3B0aW9ucyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjaGFuZ2VzKVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gU2VibUdvb2dsZU1hcFBvbHlnb24uX3BvbHlnb25PcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMTsgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaykge1xuICAgICAgICAgICAgb2JqW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgU2VibUdvb2dsZU1hcFBvbHlnb24ucHJvdG90eXBlLmlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5faWQ7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5Z29uLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fcG9seWdvbk1hbmFnZXIuZGVsZXRlUG9seWdvbih0aGlzKTtcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9KTtcbiAgICB9O1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5Z29uLl9wb2x5Z29uT3B0aW9uc0F0dHJpYnV0ZXMgPSBbXG4gICAgICAgICdjbGlja2FibGUnLCAnZHJhZ2dhYmxlJywgJ2VkaXRhYmxlJywgJ2ZpbGxDb2xvcicsICdmaWxsT3BhY2l0eScsICdnZW9kZXNpYycsICdpY29uJywgJ21hcCcsXG4gICAgICAgICdwYXRocycsICdzdHJva2VDb2xvcicsICdzdHJva2VPcGFjaXR5JywgJ3N0cm9rZVdlaWdodCcsICd2aXNpYmxlJywgJ3pJbmRleCcsICdkcmFnZ2FibGUnLFxuICAgICAgICAnZWRpdGFibGUnLCAndmlzaWJsZSdcbiAgICBdO1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5Z29uLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWJtLW1hcC1wb2x5Z29uJyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2thYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkcmFnZ2FibGU6IHBvbHlEcmFnZ2FibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VkaXRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaWxsQ29sb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpbGxPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdnZW9kZXNpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2VPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2VXZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3pJbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5Q2xpY2snLCAncG9seURibENsaWNrJywgJ3BvbHlEcmFnJywgJ3BvbHlEcmFnRW5kJywgJ3BvbHlNb3VzZURvd24nLCAncG9seU1vdXNlTW92ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9seU1vdXNlT3V0JywgJ3BvbHlNb3VzZU92ZXInLCAncG9seU1vdXNlVXAnLCAncG9seVJpZ2h0Q2xpY2snXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5Z29uLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IHBvbHlnb25fbWFuYWdlcl8xLlBvbHlnb25NYW5hZ2VyLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIFNlYm1Hb29nbGVNYXBQb2x5Z29uO1xufSgpKTtcbmV4cG9ydHMuU2VibUdvb2dsZU1hcFBvbHlnb24gPSBTZWJtR29vZ2xlTWFwUG9seWdvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdvb2dsZS1tYXAtcG9seWdvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtcG9seWdvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIHBvbHlsaW5lX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlsaW5lLW1hbmFnZXInKTtcbnZhciBnb29nbGVfbWFwX3BvbHlsaW5lX3BvaW50XzEgPSByZXF1aXJlKCcuL2dvb2dsZS1tYXAtcG9seWxpbmUtcG9pbnQnKTtcbnZhciBwb2x5bGluZUlkID0gMDtcbi8qKlxuICogU2VibUdvb2dsZU1hcFBvbHlsaW5lIHJlbmRlcnMgYSBwb2x5bGluZSBvbiBhIHtAbGluayBTZWJtR29vZ2xlTWFwfVxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7IFNlYm1Hb29nbGVNYXAsIFNlYm1Hb29nbGVQb2x5bGluZSwgU2VibUdvb2dsZVBvbHlsaW5lUG9pbnQgfSBmcm9tXG4gKiAnYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBkaXJlY3RpdmVzOiBbU2VibUdvb2dsZU1hcCwgU2VibUdvb2dsZVBvbHlsaW5lLCBTZWJtR29vZ2xlUG9seWxpbmVQb2ludF0sXG4gKiAgc3R5bGVzOiBbYFxuICogICAgLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxzZWJtLWdvb2dsZS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8c2VibS1nb29nbGUtbWFwLXBvbHlsaW5lPlxuICogICAgICAgICAgPHNlYm0tZ29vZ2xlLW1hcC1wb2x5bGluZS1wb2ludCBbbGF0aXR1ZGVdPVwibGF0QVwiIFtsb25naXR1ZGVdPVwibG5nQVwiPlxuICogICAgICAgICAgPC9zZWJtLWdvb2dsZS1tYXAtcG9seWxpbmUtcG9pbnQ+XG4gKiAgICAgICAgICA8c2VibS1nb29nbGUtbWFwLXBvbHlsaW5lLXBvaW50IFtsYXRpdHVkZV09XCJsYXRCXCIgW2xvbmdpdHVkZV09XCJsbmdCXCI+XG4gKiAgICAgICAgICA8L3NlYm0tZ29vZ2xlLW1hcC1wb2x5bGluZS1wb2ludD5cbiAqICAgICAgPC9zZWJtLWdvb2dsZS1tYXAtcG9seWxpbmU+XG4gKiAgICA8L3NlYm0tZ29vZ2xlLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbnZhciBTZWJtR29vZ2xlTWFwUG9seWxpbmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYm1Hb29nbGVNYXBQb2x5bGluZShfcG9seWxpbmVNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlciA9IF9wb2x5bGluZU1hbmFnZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIFBvbHlsaW5lIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgc2hhcGUgb3ZlciB0aGUgbWFwLiBUaGUgZ2VvZGVzaWMgcHJvcGVydHkgZGVmaW5lcyB0aGVcbiAgICAgICAgICogbW9kZSBvZiBkcmFnZ2luZy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBlZGl0IHRoaXMgc2hhcGUgYnkgZHJhZ2dpbmcgdGhlIGNvbnRyb2wgcG9pbnRzIHNob3duIGF0IHRoZVxuICAgICAgICAgKiB2ZXJ0aWNlcyBhbmQgb24gZWFjaCBzZWdtZW50LiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdHJ1ZSwgZWRnZXMgb2YgdGhlIHBvbHlnb24gYXJlIGludGVycHJldGVkIGFzIGdlb2Rlc2ljIGFuZCB3aWxsIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mXG4gICAgICAgICAqIHRoZSBFYXJ0aC4gV2hlbiBmYWxzZSwgZWRnZXMgb2YgdGhlIHBvbHlnb24gYXJlIHJlbmRlcmVkIGFzIHN0cmFpZ2h0IGxpbmVzIGluIHNjcmVlbiBzcGFjZS5cbiAgICAgICAgICogTm90ZSB0aGF0IHRoZSBzaGFwZSBvZiBhIGdlb2Rlc2ljIHBvbHlnb24gbWF5IGFwcGVhciB0byBjaGFuZ2Ugd2hlbiBkcmFnZ2VkLCBhcyB0aGUgZGltZW5zaW9uc1xuICAgICAgICAgKiBhcmUgbWFpbnRhaW5lZCByZWxhdGl2ZSB0byB0aGUgc3VyZmFjZSBvZiB0aGUgZWFydGguIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nZW9kZXNpYyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0aGlzIHBvbHlsaW5lIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxpbmVDbGljayA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxpbmVEYmxDbGljayA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIHBvbHlsaW5lLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lRHJhZyA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIHBvbHlsaW5lLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lRHJhZ0VuZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBwb2x5bGluZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGluZURyYWdTdGFydCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lTW91c2VEb3duID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxpbmVNb3VzZU1vdmUgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5bGluZSBtb3VzZW91dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGluZU1vdXNlT3V0ID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWxpbmUgbW91c2VvdmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lTW91c2VPdmVyID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGluZU1vdXNlVXAgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVuIGlzIGZpcmVkIHdoZW4gdGhlIFBvbHlsaW5lIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxpbmVSaWdodENsaWNrID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fcG9seWxpbmVBZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuX2lkID0gKHBvbHlsaW5lSWQrKykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5bGluZS5wcm90b3R5cGUubmdBZnRlckNvbnRlbnRJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgICAgIHZhciBzID0gcG9pbnQucG9zaXRpb25DaGFuZ2VkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IF90aGlzLl9wb2x5bGluZU1hbmFnZXIudXBkYXRlUG9seWxpbmVQb2ludHMoX3RoaXMpOyB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHMgPSB0aGlzLnBvaW50cy5jaGFuZ2VzLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnVwZGF0ZVBvbHlsaW5lUG9pbnRzKF90aGlzKTsgfSk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICAgICAgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnVwZGF0ZVBvbHlsaW5lUG9pbnRzKHRoaXMpO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcFBvbHlsaW5lLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICghdGhpcy5fcG9seWxpbmVBZGRlZFRvTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG4gICAgICAgIHZhciBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBTZWJtR29vZ2xlTWFwUG9seWxpbmUuX3BvbHlsaW5lT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTE7IH0pO1xuICAgICAgICBvcHRpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHsgcmV0dXJuIG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTsgfSk7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlci5zZXRQb2x5bGluZU9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuYWRkUG9seWxpbmUodGhpcyk7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lQWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcFBvbHlsaW5lLnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ2NsaWNrJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5saW5lQ2xpY2suZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RiY2xpY2snLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxpbmVEYmxDbGljay5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZHJhZycsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZURyYWcuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RyYWdlbmQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxpbmVEcmFnRW5kLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdkcmFnc3RhcnQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxpbmVEcmFnU3RhcnQuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNlZG93bicsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZU1vdXNlRG93bi5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnbW91c2Vtb3ZlJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5saW5lTW91c2VNb3ZlLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdtb3VzZW91dCcsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZU1vdXNlT3V0LmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdtb3VzZW92ZXInLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxpbmVNb3VzZU92ZXIuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNldXAnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxpbmVNb3VzZVVwLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdyaWdodGNsaWNrJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5saW5lUmlnaHRDbGljay5lbWl0KGV2KTsgfSB9LFxuICAgICAgICBdO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBvcyA9IF90aGlzLl9wb2x5bGluZU1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKG9iai5uYW1lLCBfdGhpcykuc3Vic2NyaWJlKG9iai5oYW5kbGVyKTtcbiAgICAgICAgICAgIF90aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gob3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmUucHJvdG90eXBlLl9nZXRQb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50cykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLnRvQXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgU2VibUdvb2dsZU1hcFBvbHlsaW5lLnByb3RvdHlwZS5pZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2lkOyB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuZGVsZXRlUG9seWxpbmUodGhpcyk7XG4gICAgICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgfTtcbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmUuX3BvbHlsaW5lT3B0aW9uc0F0dHJpYnV0ZXMgPSBbXG4gICAgICAgICdkcmFnZ2FibGUnLCAnZWRpdGFibGUnLCAndmlzaWJsZScsICdnZW9kZXNpYycsICdzdHJva2VDb2xvcicsICdzdHJva2VPcGFjaXR5JywgJ3N0cm9rZVdlaWdodCcsXG4gICAgICAgICd6SW5kZXgnXG4gICAgXTtcbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlYm0tZ29vZ2xlLW1hcC1wb2x5bGluZScsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrYWJsZScsICdkcmFnZ2FibGU6IHBvbHlsaW5lRHJhZ2dhYmxlJywgJ2VkaXRhYmxlJywgJ2dlb2Rlc2ljJywgJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2VXZWlnaHQnLCAnc3Ryb2tlT3BhY2l0eScsICd2aXNpYmxlJywgJ3pJbmRleCdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmVDbGljaycsICdsaW5lRGJsQ2xpY2snLCAnbGluZURyYWcnLCAnbGluZURyYWdFbmQnLCAnbGluZU1vdXNlRG93bicsICdsaW5lTW91c2VNb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaW5lTW91c2VPdXQnLCAnbGluZU1vdXNlT3ZlcicsICdsaW5lTW91c2VVcCcsICdsaW5lUmlnaHRDbGljaydcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgU2VibUdvb2dsZU1hcFBvbHlsaW5lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IHBvbHlsaW5lX21hbmFnZXJfMS5Qb2x5bGluZU1hbmFnZXIsIH0sXG4gICAgXTsgfTtcbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICdwb2ludHMnOiBbeyB0eXBlOiBjb3JlXzEuQ29udGVudENoaWxkcmVuLCBhcmdzOiBbZ29vZ2xlX21hcF9wb2x5bGluZV9wb2ludF8xLlNlYm1Hb29nbGVNYXBQb2x5bGluZVBvaW50LF0gfSxdLFxuICAgIH07XG4gICAgcmV0dXJuIFNlYm1Hb29nbGVNYXBQb2x5bGluZTtcbn0oKSk7XG5leHBvcnRzLlNlYm1Hb29nbGVNYXBQb2x5bGluZSA9IFNlYm1Hb29nbGVNYXBQb2x5bGluZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdvb2dsZS1tYXAtcG9seWxpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy9nb29nbGUtbWFwLXBvbHlsaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG4vKipcbiAqIFNlYm1Hb29nbGVNYXBQb2x5bGluZVBvaW50IHJlcHJlc2VudHMgb25lIGVsZW1lbnQgb2YgYSBwb2x5bGluZSB3aXRoaW4gYSAge0BsaW5rXG4gKiBTZW1iR29vZ2xlTWFwUG9seWxpbmV9XG4gKi9cbnZhciBTZWJtR29vZ2xlTWFwUG9seWxpbmVQb2ludCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VibUdvb2dsZU1hcFBvbHlsaW5lUG9pbnQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHBvc2l0aW9uIG9mIHRoZSBwb2ludCBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb3NpdGlvbkNoYW5nZWQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmVQb2ludC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIGxhdDogY2hhbmdlc1snbGF0aXR1ZGUnXS5jdXJyZW50VmFsdWUsXG4gICAgICAgICAgICAgICAgbG5nOiBjaGFuZ2VzWydsb25naXR1ZGUnXS5jdXJyZW50VmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlZC5lbWl0KHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VibUdvb2dsZU1hcFBvbHlsaW5lUG9pbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ3NlYm0tZ29vZ2xlLW1hcC1wb2x5bGluZS1wb2ludCcgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBTZWJtR29vZ2xlTWFwUG9seWxpbmVQb2ludC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIFNlYm1Hb29nbGVNYXBQb2x5bGluZVBvaW50LnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAnbGF0aXR1ZGUnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnbG9uZ2l0dWRlJzogW3sgdHlwZTogY29yZV8xLklucHV0IH0sXSxcbiAgICAgICAgJ3Bvc2l0aW9uQ2hhbmdlZCc6IFt7IHR5cGU6IGNvcmVfMS5PdXRwdXQgfSxdLFxuICAgIH07XG4gICAgcmV0dXJuIFNlYm1Hb29nbGVNYXBQb2x5bGluZVBvaW50O1xufSgpKTtcbmV4cG9ydHMuU2VibUdvb2dsZU1hcFBvbHlsaW5lUG9pbnQgPSBTZWJtR29vZ2xlTWFwUG9seWxpbmVQb2ludDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdvb2dsZS1tYXAtcG9seWxpbmUtcG9pbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvZGlyZWN0aXZlcy9nb29nbGUtbWFwLXBvbHlsaW5lLXBvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBnb29nbGVfbWFwc19hcGlfd3JhcHBlcl8xID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcicpO1xuZXhwb3J0cy5Hb29nbGVNYXBzQVBJV3JhcHBlciA9IGdvb2dsZV9tYXBzX2FwaV93cmFwcGVyXzEuR29vZ2xlTWFwc0FQSVdyYXBwZXI7XG52YXIgY2lyY2xlX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInKTtcbmV4cG9ydHMuQ2lyY2xlTWFuYWdlciA9IGNpcmNsZV9tYW5hZ2VyXzEuQ2lyY2xlTWFuYWdlcjtcbnZhciBpbmZvX3dpbmRvd19tYW5hZ2VyXzEgPSByZXF1aXJlKCcuL3NlcnZpY2VzL21hbmFnZXJzL2luZm8td2luZG93LW1hbmFnZXInKTtcbmV4cG9ydHMuSW5mb1dpbmRvd01hbmFnZXIgPSBpbmZvX3dpbmRvd19tYW5hZ2VyXzEuSW5mb1dpbmRvd01hbmFnZXI7XG52YXIgbWFya2VyX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4vc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXInKTtcbmV4cG9ydHMuTWFya2VyTWFuYWdlciA9IG1hcmtlcl9tYW5hZ2VyXzEuTWFya2VyTWFuYWdlcjtcbnZhciBwb2x5Z29uX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJyk7XG5leHBvcnRzLlBvbHlnb25NYW5hZ2VyID0gcG9seWdvbl9tYW5hZ2VyXzEuUG9seWdvbk1hbmFnZXI7XG52YXIgcG9seWxpbmVfbWFuYWdlcl8xID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyJyk7XG5leHBvcnRzLlBvbHlsaW5lTWFuYWdlciA9IHBvbHlsaW5lX21hbmFnZXJfMS5Qb2x5bGluZU1hbmFnZXI7XG52YXIga21sX2xheWVyX21hbmFnZXJfMSA9IHJlcXVpcmUoJy4vc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXInKTtcbmV4cG9ydHMuS21sTGF5ZXJNYW5hZ2VyID0ga21sX2xheWVyX21hbmFnZXJfMS5LbWxMYXllck1hbmFnZXI7XG52YXIgbGF6eV9tYXBzX2FwaV9sb2FkZXJfMSA9IHJlcXVpcmUoJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL2xhenktbWFwcy1hcGktbG9hZGVyJyk7XG5leHBvcnRzLkdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbCA9IGxhenlfbWFwc19hcGlfbG9hZGVyXzEuR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sO1xuZXhwb3J0cy5MQVpZX01BUFNfQVBJX0NPTkZJRyA9IGxhenlfbWFwc19hcGlfbG9hZGVyXzEuTEFaWV9NQVBTX0FQSV9DT05GSUc7XG5leHBvcnRzLkxhenlNYXBzQVBJTG9hZGVyID0gbGF6eV9tYXBzX2FwaV9sb2FkZXJfMS5MYXp5TWFwc0FQSUxvYWRlcjtcbnZhciBtYXBzX2FwaV9sb2FkZXJfMSA9IHJlcXVpcmUoJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcicpO1xuZXhwb3J0cy5NYXBzQVBJTG9hZGVyID0gbWFwc19hcGlfbG9hZGVyXzEuTWFwc0FQSUxvYWRlcjtcbnZhciBub29wX21hcHNfYXBpX2xvYWRlcl8xID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbm9vcC1tYXBzLWFwaS1sb2FkZXInKTtcbmV4cG9ydHMuTm9PcE1hcHNBUElMb2FkZXIgPSBub29wX21hcHNfYXBpX2xvYWRlcl8xLk5vT3BNYXBzQVBJTG9hZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VydmljZXMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvc2VydmljZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGJyb3dzZXJfZ2xvYmFsc18xID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYnJvd3Nlci1nbG9iYWxzJyk7XG52YXIgbWFwc19hcGlfbG9hZGVyXzEgPSByZXF1aXJlKCcuL21hcHMtYXBpLWxvYWRlcicpO1xuKGZ1bmN0aW9uIChHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2wpIHtcbiAgICBHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2xbR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sW1wiSFRUUFwiXSA9IDFdID0gXCJIVFRQXCI7XG4gICAgR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sW0dvb2dsZU1hcHNTY3JpcHRQcm90b2NvbFtcIkhUVFBTXCJdID0gMl0gPSBcIkhUVFBTXCI7XG4gICAgR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sW0dvb2dsZU1hcHNTY3JpcHRQcm90b2NvbFtcIkFVVE9cIl0gPSAzXSA9IFwiQVVUT1wiO1xufSkoZXhwb3J0cy5Hb29nbGVNYXBzU2NyaXB0UHJvdG9jb2wgfHwgKGV4cG9ydHMuR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sID0ge30pKTtcbnZhciBHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2wgPSBleHBvcnRzLkdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbDtcbi8qKlxuICogVG9rZW4gZm9yIHRoZSBjb25maWcgb2YgdGhlIExhenlNYXBzQVBJTG9hZGVyLiBQbGVhc2UgcHJvdmlkZSBhbiBvYmplY3Qgb2YgdHlwZSB7QGxpbmtcbiAqIExhenlNYXBzQVBJTG9hZGVyQ29uZmlnfS5cbiAqL1xuZXhwb3J0cy5MQVpZX01BUFNfQVBJX0NPTkZJRyA9IG5ldyBjb3JlXzEuT3BhcXVlVG9rZW4oJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzIExBWllfTUFQU19BUElfQ09ORklHJyk7XG52YXIgTGF6eU1hcHNBUElMb2FkZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYXp5TWFwc0FQSUxvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYXp5TWFwc0FQSUxvYWRlcihjb25maWcsIHcsIGQpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5fd2luZG93UmVmID0gdztcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRSZWYgPSBkO1xuICAgIH1cbiAgICBMYXp5TWFwc0FQSUxvYWRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX3NjcmlwdExvYWRpbmdQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NyaXB0TG9hZGluZ1Byb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjcmlwdCA9IHRoaXMuX2RvY3VtZW50UmVmLmdldE5hdGl2ZURvY3VtZW50KCkuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICAgIHZhciBjYWxsYmFja05hbWUgPSBcImFuZ3VsYXIyR29vZ2xlTWFwc0xhenlNYXBzQVBJTG9hZGVyXCI7XG4gICAgICAgIHNjcmlwdC5zcmMgPSB0aGlzLl9nZXRTY3JpcHRTcmMoY2FsbGJhY2tOYW1lKTtcbiAgICAgICAgdGhpcy5fc2NyaXB0TG9hZGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5fd2luZG93UmVmLmdldE5hdGl2ZVdpbmRvdygpW2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7IHJlamVjdChlcnJvcik7IH07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kb2N1bWVudFJlZi5nZXROYXRpdmVEb2N1bWVudCgpLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmlwdExvYWRpbmdQcm9taXNlO1xuICAgIH07XG4gICAgTGF6eU1hcHNBUElMb2FkZXIucHJvdG90eXBlLl9nZXRTY3JpcHRTcmMgPSBmdW5jdGlvbiAoY2FsbGJhY2tOYW1lKSB7XG4gICAgICAgIHZhciBwcm90b2NvbFR5cGUgPSAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5wcm90b2NvbCkgfHwgR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sLkhUVFBTO1xuICAgICAgICB2YXIgcHJvdG9jb2w7XG4gICAgICAgIHN3aXRjaCAocHJvdG9jb2xUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbC5BVVRPOlxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbC5IVFRQOlxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gJ2h0dHA6JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sLkhUVFBTOlxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gJ2h0dHBzOic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvc3RBbmRQYXRoID0gdGhpcy5fY29uZmlnLmhvc3RBbmRQYXRoIHx8ICdtYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzJztcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zID0ge1xuICAgICAgICAgICAgdjogdGhpcy5fY29uZmlnLmFwaVZlcnNpb24gfHwgJzMnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrTmFtZSxcbiAgICAgICAgICAgIGtleTogdGhpcy5fY29uZmlnLmFwaUtleSxcbiAgICAgICAgICAgIGNsaWVudDogdGhpcy5fY29uZmlnLmNsaWVudElkLFxuICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5fY29uZmlnLmNoYW5uZWwsXG4gICAgICAgICAgICBsaWJyYXJpZXM6IHRoaXMuX2NvbmZpZy5saWJyYXJpZXMsXG4gICAgICAgICAgICByZWdpb246IHRoaXMuX2NvbmZpZy5yZWdpb24sXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5fY29uZmlnLmxhbmd1YWdlXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcylcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIHF1ZXJ5UGFyYW1zW2tdICE9IG51bGw7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgZW1wdHkgYXJyYXlzXG4gICAgICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkocXVlcnlQYXJhbXNba10pIHx8XG4gICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkocXVlcnlQYXJhbXNba10pICYmIHF1ZXJ5UGFyYW1zW2tdLmxlbmd0aCA+IDApO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgLy8gam9pbiBhcnJheXMgYXMgY29tbWEgc2VwZXJhdGVkIHN0cmluZ3NcbiAgICAgICAgICAgIHZhciBpID0gcXVlcnlQYXJhbXNba107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGtleTogaywgdmFsdWU6IGkuam9pbignLCcpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGssIHZhbHVlOiBxdWVyeVBhcmFtc1trXSB9O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5LmtleSArIFwiPVwiICsgZW50cnkudmFsdWU7IH0pXG4gICAgICAgICAgICAuam9pbignJicpO1xuICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0QW5kUGF0aCArIFwiP1wiICsgcGFyYW1zO1xuICAgIH07XG4gICAgTGF6eU1hcHNBUElMb2FkZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgTGF6eU1hcHNBUElMb2FkZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBjb3JlXzEuSW5qZWN0LCBhcmdzOiBbZXhwb3J0cy5MQVpZX01BUFNfQVBJX0NPTkZJRyxdIH0sXSB9LFxuICAgICAgICB7IHR5cGU6IGJyb3dzZXJfZ2xvYmFsc18xLldpbmRvd1JlZiwgfSxcbiAgICAgICAgeyB0eXBlOiBicm93c2VyX2dsb2JhbHNfMS5Eb2N1bWVudFJlZiwgfSxcbiAgICBdOyB9O1xuICAgIHJldHVybiBMYXp5TWFwc0FQSUxvYWRlcjtcbn0obWFwc19hcGlfbG9hZGVyXzEuTWFwc0FQSUxvYWRlcikpO1xuZXhwb3J0cy5MYXp5TWFwc0FQSUxvYWRlciA9IExhenlNYXBzQVBJTG9hZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGF6eS1tYXBzLWFwaS1sb2FkZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL2xhenktbWFwcy1hcGktbG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBXaW5kb3dSZWYgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpbmRvd1JlZigpIHtcbiAgICB9XG4gICAgV2luZG93UmVmLnByb3RvdHlwZS5nZXROYXRpdmVXaW5kb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3c7IH07XG4gICAgcmV0dXJuIFdpbmRvd1JlZjtcbn0oKSk7XG5leHBvcnRzLldpbmRvd1JlZiA9IFdpbmRvd1JlZjtcbnZhciBEb2N1bWVudFJlZiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRSZWYoKSB7XG4gICAgfVxuICAgIERvY3VtZW50UmVmLnByb3RvdHlwZS5nZXROYXRpdmVEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50OyB9O1xuICAgIHJldHVybiBEb2N1bWVudFJlZjtcbn0oKSk7XG5leHBvcnRzLkRvY3VtZW50UmVmID0gRG9jdW1lbnRSZWY7XG5leHBvcnRzLkJST1dTRVJfR0xPQkFMU19QUk9WSURFUlMgPSBbV2luZG93UmVmLCBEb2N1bWVudFJlZl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLWdsb2JhbHMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvdXRpbHMvYnJvd3Nlci1nbG9iYWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogV2hlbiB1c2luZyB0aGUgTm9PcE1hcHNBUElMb2FkZXIsIHRoZSBHb29nbGUgTWFwcyBBUEkgbXVzdCBiZSBhZGRlZCB0byB0aGUgcGFnZSB2aWEgYSBgPHNjcmlwdD5gXG4gKiBUYWcuXG4gKiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBHb29nbGUgTWFwcyBBUEkgc2NyaXB0IGdldHMgbG9hZGVkIGZpcnN0IG9uIHRoZSBwYWdlLlxuICovXG52YXIgTm9PcE1hcHNBUElMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vT3BNYXBzQVBJTG9hZGVyKCkge1xuICAgIH1cbiAgICBOb09wTWFwc0FQSUxvYWRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ29vZ2xlIHx8ICF3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlIE1hcHMgQVBJIG5vdCBsb2FkZWQgb24gcGFnZS4gTWFrZSBzdXJlIHdpbmRvdy5nb29nbGUubWFwcyBpcyBhdmFpbGFibGUhJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgO1xuICAgIHJldHVybiBOb09wTWFwc0FQSUxvYWRlcjtcbn0oKSk7XG5leHBvcnRzLk5vT3BNYXBzQVBJTG9hZGVyID0gTm9PcE1hcHNBUElMb2FkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub29wLW1hcHMtYXBpLWxvYWRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbm9vcC1tYXBzLWFwaS1sb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBnb29nbGVfbWFwX2ttbF9sYXllcl8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAta21sLWxheWVyJyk7XG52YXIgZ29vZ2xlX21hcF8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAnKTtcbnZhciBnb29nbGVfbWFwX2NpcmNsZV8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtY2lyY2xlJyk7XG52YXIgZ29vZ2xlX21hcF9pbmZvX3dpbmRvd18xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtaW5mby13aW5kb3cnKTtcbnZhciBnb29nbGVfbWFwX21hcmtlcl8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtbWFya2VyJyk7XG52YXIgZ29vZ2xlX21hcF9wb2x5Z29uXzEgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC1wb2x5Z29uJyk7XG52YXIgZ29vZ2xlX21hcF9wb2x5bGluZV8xID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2dvb2dsZS1tYXAtcG9seWxpbmUnKTtcbnZhciBnb29nbGVfbWFwX3BvbHlsaW5lX3BvaW50XzEgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZ29vZ2xlLW1hcC1wb2x5bGluZS1wb2ludCcpO1xudmFyIGxhenlfbWFwc19hcGlfbG9hZGVyXzEgPSByZXF1aXJlKCcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9sYXp5LW1hcHMtYXBpLWxvYWRlcicpO1xudmFyIGxhenlfbWFwc19hcGlfbG9hZGVyXzIgPSByZXF1aXJlKCcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9sYXp5LW1hcHMtYXBpLWxvYWRlcicpO1xudmFyIG1hcHNfYXBpX2xvYWRlcl8xID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyJyk7XG52YXIgYnJvd3Nlcl9nbG9iYWxzXzEgPSByZXF1aXJlKCcuL3V0aWxzL2Jyb3dzZXItZ2xvYmFscycpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gY29yZURpcmVjdGl2ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgZ29vZ2xlX21hcF8xLlNlYm1Hb29nbGVNYXAsIGdvb2dsZV9tYXBfbWFya2VyXzEuU2VibUdvb2dsZU1hcE1hcmtlciwgZ29vZ2xlX21hcF9pbmZvX3dpbmRvd18xLlNlYm1Hb29nbGVNYXBJbmZvV2luZG93LCBnb29nbGVfbWFwX2NpcmNsZV8xLlNlYm1Hb29nbGVNYXBDaXJjbGUsXG4gICAgICAgIGdvb2dsZV9tYXBfcG9seWdvbl8xLlNlYm1Hb29nbGVNYXBQb2x5Z29uLCBnb29nbGVfbWFwX3BvbHlsaW5lXzEuU2VibUdvb2dsZU1hcFBvbHlsaW5lLCBnb29nbGVfbWFwX3BvbHlsaW5lX3BvaW50XzEuU2VibUdvb2dsZU1hcFBvbHlsaW5lUG9pbnQsIGdvb2dsZV9tYXBfa21sX2xheWVyXzEuU2VibUdvb2dsZU1hcEttbExheWVyXG4gICAgXTtcbn1cbmV4cG9ydHMuY29yZURpcmVjdGl2ZXMgPSBjb3JlRGlyZWN0aXZlcztcbjtcbi8qKlxuICogVGhlIGFuZ3VsYXIyLWdvb2dsZS1tYXBzIGNvcmUgbW9kdWxlLiBDb250YWlucyBhbGwgRGlyZWN0aXZlcy9TZXJ2aWNlcy9QaXBlc1xuICogb2YgdGhlIGNvcmUgbW9kdWxlLiBQbGVhc2UgdXNlIGBBZ21Db3JlTW9kdWxlLmZvclJvb3QoKWAgaW4geW91ciBhcHAgbW9kdWxlLlxuICovXG52YXIgQWdtQ29yZU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWdtQ29yZU1vZHVsZSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGxlYXNlIHVzZSB0aGlzIG1ldGhvZCB3aGVuIHlvdSByZWdpc3RlciB0aGUgbW9kdWxlIGF0IHRoZSByb290IGxldmVsLlxuICAgICAqL1xuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCA9IGZ1bmN0aW9uIChsYXp5TWFwc0FQSUxvYWRlckNvbmZpZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEFnbUNvcmVNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IGJyb3dzZXJfZ2xvYmFsc18xLkJST1dTRVJfR0xPQkFMU19QUk9WSURFUlMuY29uY2F0KFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IG1hcHNfYXBpX2xvYWRlcl8xLk1hcHNBUElMb2FkZXIsIHVzZUNsYXNzOiBsYXp5X21hcHNfYXBpX2xvYWRlcl8xLkxhenlNYXBzQVBJTG9hZGVyIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBsYXp5X21hcHNfYXBpX2xvYWRlcl8yLkxBWllfTUFQU19BUElfQ09ORklHLCB1c2VWYWx1ZTogbGF6eU1hcHNBUElMb2FkZXJDb25maWcgfVxuICAgICAgICAgICAgXSksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBZ21Db3JlTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLk5nTW9kdWxlLCBhcmdzOiBbeyBkZWNsYXJhdGlvbnM6IGNvcmVEaXJlY3RpdmVzKCksIGV4cG9ydHM6IGNvcmVEaXJlY3RpdmVzKCkgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBBZ21Db3JlTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEFnbUNvcmVNb2R1bGU7XG59KCkpO1xuZXhwb3J0cy5BZ21Db3JlTW9kdWxlID0gQWdtQ29yZU1vZHVsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUtbW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2NvcmUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJBQ1RJQ0VfREFUQSB9IGZyb20gXCIuL2RhdGEvcHJhY3RpY2UuZGF0YVwiO1xuaW1wb3J0IHsgUHJhY3RpY2UgfSBmcm9tIFwiLi9tb2RlbC9wcmFjdGljZS5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ByYWN0aWNlJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9wcmFjdGljZS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcHJhY3RpY2UuY29tcG9uZW50Lmxlc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcmFjdGljZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBQcmFjdGljZSBkYXRhIHRvIGluamVjdCBpbnRvIG91ciB0ZW1wbGF0ZVxuICAgIHByaXZhdGUgcHJhY3RpY2VEYXRhOiBQcmFjdGljZVtdID0gUFJBQ1RJQ0VfREFUQTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC90ZWFtL3ByYWN0aWNlL3ByYWN0aWNlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFByYWN0aWNlIH0gZnJvbSBcIi4uL21vZGVsL3ByYWN0aWNlLm1vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCBQUkFDVElDRV9EQVRBOiBQcmFjdGljZVtdID0gW1xuICAgIHtcbiAgICAgICAgc2Vhc29uOiAnRmFsbCcsXG4gICAgICAgIHdoYXQ6ICdOb3JtYWwgUHJhY3RpY2UnLFxuICAgICAgICB0aW1lOiAnNDozMFBNLTdQTScsXG4gICAgICAgIHdoZW46ICdNb25kYXlzICYgV2VkbmVzZGF5cycsXG4gICAgICAgIGxvY2F0aW9uTGFiZWw6ICdDb21wbGV4IEZpZWxkcycsXG4gICAgICAgIGxvY2F0aW9uTGluazogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9GbG9yaWRhK2FuZCtMaW5jb2xuK1BsYXlpbmcrRmllbGQvQDQwLjA5NjY5NjQsLTg4LjIyNDI4MDYsMTZ6L2RhdGE9ITRtNSExbTIhMm0xITFzY29tcGxleCtmaWVsZHMhM20xITFzMHgwMDAwMDAwMDAwMDAwMDAwOjB4MTM2MzM4NDA4OTZlMjViZidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2Vhc29uOiAnRmFsbCcsXG4gICAgICAgIHdoYXQ6ICdXZWVrZW5kIEludml0ZSBQcmFjdGljZScsXG4gICAgICAgIHRpbWU6ICdUQkQnLFxuICAgICAgICB3aGVuOiAnV2Vla2VuZHMnLFxuICAgICAgICBsb2NhdGlvbkxhYmVsOiAnQ29tcGxleCBGaWVsZHMnLFxuICAgICAgICBsb2NhdGlvbkxpbms6ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvRmxvcmlkYSthbmQrTGluY29sbitQbGF5aW5nK0ZpZWxkL0A0MC4wOTY2OTY0LC04OC4yMjQyODA2LDE2ei9kYXRhPSE0bTUhMW0yITJtMSExc2NvbXBsZXgrZmllbGRzITNtMSExczB4MDAwMDAwMDAwMDAwMDAwMDoweDEzNjMzODQwODk2ZTI1YmYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlYXNvbjogJ1dpbnRlcicsXG4gICAgICAgIHdoYXQ6ICdOb3JtYWwgUHJhY3RpY2UnLFxuICAgICAgICB0aW1lOiAnOTozMFBNLTEyQU0nLFxuICAgICAgICB3aGVuOiAnTW9uZGF5cyAmIFdlZG5lc2RheXMnLFxuICAgICAgICBsb2NhdGlvbkxhYmVsOiAnQXJtb3J5JyxcbiAgICAgICAgbG9jYXRpb25MaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL0FybW9yeS9ANDAuMTA1NDAyLC04OC4yMzU1MzQsMTd6L2RhdGE9ITNtMSE1czB4ODgwY2Q3M2I4YzRmYmI3ZDoweGE4NDg5MDExMGFmZDA5OTAhNG03ITFtNCEzbTMhMXMweDg4MGNkNzNhMTZjMWQ3OGY6MHhlMWJiMDA5MjI1ZmMxMjI1ITJzRStBcm1vcnkrQXZlLCtDaGFtcGFpZ24sK0lMKzYxODIwITNiMSEzbTEhMXMweDAwMDAwMDAwMDAwMDAwMDA6MHgwYjIxZDU2ZjJiOTUxOTc4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBzZWFzb246ICdXaW50ZXInLFxuICAgICAgICB3aGF0OiAnSW5kb29yIEZpZWxkIFByYWN0aWNlJyxcbiAgICAgICAgdGltZTogJzExUE0tMTJBTScsXG4gICAgICAgIHdoZW46ICdUaHVyc2RheXMnLFxuICAgICAgICBsb2NhdGlvbkxhYmVsOiAnSXJ3aW4gRmFjaWxpdHknLFxuICAgICAgICBsb2NhdGlvbkxpbms6ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvSXJ3aW4rSW5kb29yK0Zvb3RiYWxsK0ZhY2lsaXR5LCtVbml2ZXJzaXR5K29mK0lsbGlub2lzK2F0K1VyYmFuYS1DaGFtcGFpZ24sK0NoYW1wYWlnbiwrSUwrNjE4MjAvQDQwLjEwMDY0NzUsLTg4LjIzNDIyMDQsMTd6L2RhdGE9ITNtMSE0YjEhNG02ITFtMyEzbTIhMXMweDg4MGNkNzI0YTkyNjU1ZTk6MHhhNTNjMDUyNTA0NjgyNmZhITJzVW5pdmVyc2l0eStvZitJbGxpbm9pcythdCtVcmJhbmEtQ2hhbXBhaWduITNtMSExczB4ODgwY2Q3MjUyOTJjMDJiZDoweDE4ZjVhMDNkYWFkODY3N2EnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlYXNvbjogJ1NwcmluZycsXG4gICAgICAgIHdoYXQ6ICdOb3JtYWwgUHJhY3RpY2UnLFxuICAgICAgICB0aW1lOiAnOTozMFBNLTEyQU0nLFxuICAgICAgICB3aGVuOiAnTW9uZGF5cyAmIFdlZG5lc2RheXMnLFxuICAgICAgICBsb2NhdGlvbkxhYmVsOiAnQ29tcGxleCBGaWVsZHMnLFxuICAgICAgICBsb2NhdGlvbkxpbms6ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvRmxvcmlkYSthbmQrTGluY29sbitQbGF5aW5nK0ZpZWxkL0A0MC4wOTY2OTY0LC04OC4yMjQyODA2LDE2ei9kYXRhPSE0bTUhMW0yITJtMSExc2NvbXBsZXgrZmllbGRzITNtMSExczB4MDAwMDAwMDAwMDAwMDAwMDoweDEzNjMzODQwODk2ZTI1YmYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlYXNvbjogJ1NwcmluZycsXG4gICAgICAgIHdoYXQ6ICdBLVRlYW0gUHJhY3RpY2UnLFxuICAgICAgICB0aW1lOiAnVEJEJyxcbiAgICAgICAgd2hlbjogJ1dlZWtlbmRzJyxcbiAgICAgICAgbG9jYXRpb25MYWJlbDogJ0NvbXBsZXggRmllbGRzJyxcbiAgICAgICAgbG9jYXRpb25MaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL0Zsb3JpZGErYW5kK0xpbmNvbG4rUGxheWluZytGaWVsZC9ANDAuMDk2Njk2NCwtODguMjI0MjgwNiwxNnovZGF0YT0hNG01ITFtMiEybTEhMXNjb21wbGV4K2ZpZWxkcyEzbTEhMXMweDAwMDAwMDAwMDAwMDAwMDA6MHgxMzYzMzg0MDg5NmUyNWJmJ1xuICAgIH1cbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3RlYW0vcHJhY3RpY2UvZGF0YS9wcmFjdGljZS5kYXRhLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMSBjbGFzcz1cXFwidWkgaGVhZGVyXFxcIj5QcmFjdGljZTwvaDE+XFxuPHRhYmxlIGNsYXNzPVxcXCJ1aSBjZWxsZWQgdGFibGVcXFwiPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoPlNlYXNvbjwvdGg+XFxuICAgICAgICAgICAgPHRoPldoYXQ8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UaW1lPC90aD5cXG4gICAgICAgICAgICA8dGg+V2hlbjwvdGg+XFxuICAgICAgICAgICAgPHRoPkxvY2F0aW9uPC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBwcmFjdGljZVJvdyBvZiBwcmFjdGljZURhdGFcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57e3ByYWN0aWNlUm93LnNlYXNvbn19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3twcmFjdGljZVJvdy53aGF0fX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57e3ByYWN0aWNlUm93LnRpbWV9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7cHJhY3RpY2VSb3cud2hlbn19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+PGEgaHJlZj1cXFwie3twcmFjdGljZVJvdy5sb2NhdGlvbkxpbmt9fVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7cHJhY3RpY2VSb3cubG9jYXRpb25MYWJlbH19PC9hPjwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3Rib2R5PlxcbjwvdGFibGU+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RlYW0vcHJhY3RpY2UvcHJhY3RpY2UuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vcHJhY3RpY2UuY29tcG9uZW50Lmxlc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RlYW0vcHJhY3RpY2UvcHJhY3RpY2UuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInRyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L2xlc3MtbG9hZGVyIS4vc3JjL2FwcC90ZWFtL3ByYWN0aWNlL3ByYWN0aWNlLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUT1VSTkFNRU5UU19EQVRBIH0gZnJvbSBcIi4vZGF0YS90b3VybmFtZW50cy5kYXRhXCI7XG5pbXBvcnQgeyBUb3VybmFtZW50WWVhciB9IGZyb20gXCIuL21vZGVsL3RvdXJuYW1lbnQteWVhci5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RvdXJuYW1lbnRzJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90b3VybmFtZW50cy5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdG91cm5hbWVudHMuY29tcG9uZW50Lmxlc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUb3VybmFtZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBUb3VybmFtZW50IGRhdGEgdG8gaW5qZWN0IGludG8gb3VyIHRlbXBsYXRlXG4gICAgcHJpdmF0ZSB0b3VybmFtZW50RGF0YTogVG91cm5hbWVudFllYXJbXSA9IFRPVVJOQU1FTlRTX0RBVEE7XG4gICAgLy8gU3Vic2NyaXB0aW9uIHRvIG91ciByb3V0ZSBwYXJhbWV0ZXJzICh0b3VybmFtZW50IHllYXIpXG4gICAgcHJpdmF0ZSByb3V0ZVBhcmFtc1N1YnNjcmlwdGlvbjogYW55O1xuICAgIC8vIEN1cnJlbnQgdG91cm5hbWVudCB5ZWFyXG4gICAgcHJpdmF0ZSB5ZWFyOiBudW1iZXI7XG5cbiAgICAvLyBJbmplY3QgdGhlIEFjdGl2YXRlZFJvdXRlIGludG8gb3VyIGNvbXBvbmVudFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIG91ciByb3V0ZSBwYXJhbWV0ZXJzICh0b3VybmFtZW50IHllYXIpLlxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlUGFyYW1zU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAvLyAoKykgY29udmVydHMgc3RyaW5nICd5ZWFyJyB0byBhIG51bWJlclxuICAgICAgICAgICAgdGhpcy55ZWFyID0gK3BhcmFtc1sneWVhciddO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSB0byBvdXIgcm91dGUgcGFyYW1ldGVycyAodG91cm5hbWVudCB5ZWFyKS5cbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVBhcmFtc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC90ZWFtL3RvdXJuYW1lbnRzL3RvdXJuYW1lbnRzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFRvdXJuYW1lbnRZZWFyIH0gZnJvbSBcIi4uL21vZGVsL3RvdXJuYW1lbnQteWVhci5tb2RlbFwiO1xuXG5leHBvcnQgY29uc3QgVE9VUk5BTUVOVFNfREFUQTogVG91cm5hbWVudFllYXJbXSA9IFtcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTcsXG4gICAgICAgIHRvdXJuYW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2Vhc29uOiAnRmFsbCcsXG4gICAgICAgICAgICAgICAgbmFtZUxhYmVsOiAnQm9pbGVyIEJyZWFrYXdheScsXG4gICAgICAgICAgICAgICAgbmFtZUxpbms6ICcnLFxuICAgICAgICAgICAgICAgIHdoZW46ICdTZXB0LiAxN3RoLTE4dGgnLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnV2VzdCBMYWZheWV0dGUsIElOJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICctJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTYsXG4gICAgICAgIHRvdXJuYW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2Vhc29uOiAnRmFsbCcsXG4gICAgICAgICAgICAgICAgbmFtZUxhYmVsOiAnQm9pbGVyIEJyZWFrYXdheScsXG4gICAgICAgICAgICAgICAgbmFtZUxpbms6ICcnLFxuICAgICAgICAgICAgICAgIHdoZW46ICdTZXB0LiAxOXRoLTIwdGgnLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnV2VzdCBMYWZheWV0dGUsIElOJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICctJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTUsXG4gICAgICAgIHRvdXJuYW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2Vhc29uOiAnRmFsbCcsXG4gICAgICAgICAgICAgICAgbmFtZUxhYmVsOiAnSHVjayBvZiB0aGUgSXJpc2gnLFxuICAgICAgICAgICAgICAgIG5hbWVMaW5rOiAnJyxcbiAgICAgICAgICAgICAgICB3aGVuOiAnU2VwdC4gMjd0aC0yOHRoJyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ1NvdXRoIEJlbmQsIElOJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICctJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvdGVhbS90b3VybmFtZW50cy9kYXRhL3RvdXJuYW1lbnRzLmRhdGEudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxIGNsYXNzPVxcXCJ1aSBoZWFkZXJcXFwiPlRvdXJuYW1lbnRzPC9oMT5cXG48bmctY29udGFpbmVyICpuZ0Zvcj1cXFwibGV0IHRvdXJuYW1lbnRZZWFyIG9mIHRvdXJuYW1lbnREYXRhXFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cXFwidG91cm5hbWVudFllYXIueWVhciA9PT0geWVhclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBzZWNvbmRhcnkgcG9pbnRpbmcgbWVudVxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIHJvdXRlckxpbms9XFxcIi90b3VybmFtZW50cy8yMDE1XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogeWVhciA9PT0gMjAxNX1cXFwiPjIwMTU8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIHJvdXRlckxpbms9XFxcIi90b3VybmFtZW50cy8yMDE2XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogeWVhciA9PT0gMjAxNn1cXFwiPjIwMTY8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIHJvdXRlckxpbms9XFxcIi90b3VybmFtZW50cy8yMDE3XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogeWVhciA9PT0gMjAxN31cXFwiPjIwMTc8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidWkgY2VsbGVkIHRhYmxlXFxcIiAqbmdJZj1cXFwidG91cm5hbWVudERhdGFcXFwiPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlNlYXNvbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+V2hlbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+TG9jYXRpb248L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlc3VsdDwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB0b3VybmFtZW50IG9mIHRvdXJuYW1lbnRZZWFyLnRvdXJuYW1lbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3RvdXJuYW1lbnQuc2Vhc29ufX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XFxcInt7dG91cm5hbWVudC5uYW1lTGlua319XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+e3t0b3VybmFtZW50Lm5hbWVMYWJlbH19PC9hPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t0b3VybmFtZW50LndoZW59fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t0b3VybmFtZW50LmxvY2F0aW9ufX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dG91cm5hbWVudC5yZXN1bHR9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbjwvbmctY29udGFpbmVyPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90ZWFtL3RvdXJuYW1lbnRzL3RvdXJuYW1lbnRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi90b3VybmFtZW50cy5jb21wb25lbnQubGVzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdGVhbS90b3VybmFtZW50cy90b3VybmFtZW50cy5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvdGVhbS90b3VybmFtZW50cy90b3VybmFtZW50cy5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUm9zdGVyWWVhciB9IGZyb20gXCIuL21vZGVsL3Jvc3Rlci15ZWFyLm1vZGVsXCI7XG5pbXBvcnQgeyBST1NURVJfREFUQSB9IGZyb20gXCIuL2RhdGEvcm9zdGVycy5kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm9zdGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yb3N0ZXIuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3Jvc3Rlci5jb21wb25lbnQubGVzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIFJvc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBSb3N0ZXIgZGF0YSB0byBpbmplY3QgaW50byBvdXIgdGVtcGxhdGVcbiAgICBwcml2YXRlIHJvc3RlckRhdGE6IFJvc3RlclllYXJbXSA9IFJPU1RFUl9EQVRBO1xuICAgIC8vIFN1YnNjcmlwdGlvbiB0byBvdXIgcm91dGUgcGFyYW1ldGVycyAocm9zdGVyIHllYXIpXG4gICAgcHJpdmF0ZSByb3V0ZVBhcmFtc1N1YnNjcmlwdGlvbjogYW55O1xuICAgIC8vIEN1cnJlbnQgcm9zdGVyIHllYXJcbiAgICBwcml2YXRlIHllYXI6IG51bWJlcjtcblxuICAgIC8vIEluamVjdCB0aGUgQWN0aXZhdGVkUm91dGUgaW50byBvdXIgY29tcG9uZW50XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gb3VyIHJvdXRlIHBhcmFtZXRlcnMgKHJvc3RlciB5ZWFyKS5cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVBhcmFtc1N1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAneWVhcicgdG8gYSBudW1iZXJcbiAgICAgICAgICAgIHRoaXMueWVhciA9ICtwYXJhbXNbJ3llYXInXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgdG8gb3VyIHJvdXRlIHBhcmFtZXRlcnMgKHJvc3RlciB5ZWFyKS5cbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVBhcmFtc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC90ZWFtL3Jvc3Rlci9yb3N0ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm9zdGVyWWVhciB9IGZyb20gXCIuLi9tb2RlbC9yb3N0ZXIteWVhci5tb2RlbFwiO1xuXG5leHBvcnQgY29uc3QgUk9TVEVSX0RBVEE6IFJvc3RlclllYXJbXSA9IFtcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTcsXG4gICAgICAgIGltYWdlUGF0aDogJy4vYXNzZXRzL3RlYW0tcGhvdG8tMjAxNy5qcGcnLFxuICAgICAgICBwbGF5ZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbnVtYmVyOiAyLFxuICAgICAgICAgICAgICAgIG5hbWU6IGBCZW4gJ0JlZWYnIFNhYm91cmluYCxcbiAgICAgICAgICAgICAgICB5ZWFyOiAnU29waG9tb3JlJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTYsXG4gICAgICAgIGltYWdlUGF0aDogJy4vYXNzZXRzL3RlYW0tcGhvdG8tMjAxNi5qcGcnLFxuICAgICAgICBwbGF5ZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdOaWNrIFByb3pvcm92c2t5KicsXG4gICAgICAgICAgICAgICAgeWVhcjogJ1NlbmlvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB5ZWFyOiAyMDE1LFxuICAgICAgICBpbWFnZVBhdGg6ICcuL2Fzc2V0cy90ZWFtLXBob3RvLTIwMTUuanBnJyxcbiAgICAgICAgcGxheWVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG51bWJlcjogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmljayBQcm96b3JvdnNreSonLFxuICAgICAgICAgICAgICAgIHllYXI6ICdKdW5pb3InXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC90ZWFtL3Jvc3Rlci9kYXRhL3Jvc3RlcnMuZGF0YS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDEgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+Um9zdGVyPC9oMT5cXG48bmctY29udGFpbmVyICpuZ0Zvcj1cXFwibGV0IHJvc3RlclllYXIgb2Ygcm9zdGVyRGF0YVxcXCI+XFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XFxcInJvc3RlclllYXIueWVhciA9PT0geWVhclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBzZWNvbmRhcnkgcG9pbnRpbmcgbWVudVxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIHJvdXRlckxpbms9XFxcIi9yb3N0ZXIvMjAxNVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHllYXIgPT09IDIwMTV9XFxcIj4yMDE1PC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCIvcm9zdGVyLzIwMTZcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiB5ZWFyID09PSAyMDE2fVxcXCI+MjAxNjwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgcm91dGVyTGluaz1cXFwiL3Jvc3Rlci8yMDE3XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogeWVhciA9PT0gMjAxN31cXFwiPjIwMTc8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCJ7e3Jvc3RlclllYXIuaW1hZ2VQYXRofX1cXFwiLz5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidWkgY2VsbGVkIHRhYmxlXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD5ZZWFyPC90aD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHBsYXllciBvZiByb3N0ZXJZZWFyLnBsYXllcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7cGxheWVyLm51bWJlcn19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3BsYXllci5uYW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7cGxheWVyLnllYXJ9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgICAgICA8cD4oKikgaW5kaWNhdGVzIGNhcHRhaW4gZm9yIHRoYXQgeWVhcjwvcD5cXG4gICAgPC9uZy1jb250YWluZXI+XFxuPC9uZy1jb250YWluZXI+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RlYW0vcm9zdGVyL3Jvc3Rlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vcm9zdGVyLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90ZWFtL3Jvc3Rlci9yb3N0ZXIuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJpbWcge1xcbiAgd2lkdGg6IDc1JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwNEQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvdGVhbS9yb3N0ZXIvcm9zdGVyLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Fic2VudCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWJzZW50LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hYnNlbnQuY29tcG9uZW50Lmxlc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBYnNlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIC8vIE1lbnUgZHJvcGRvd25zXG4gICAgQFZpZXdDaGlsZCgnbW9udGhEcm9wZG93bicpXG4gICAgcHJpdmF0ZSBtb250aERyb3Bkb3duOiBFbGVtZW50UmVmO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnQWJzZW50IENvbXBvbmVudCEnKTtcbiAgICAgICAgJCh0aGlzLm1vbnRoRHJvcGRvd24ubmF0aXZlRWxlbWVudCkuZHJvcGRvd24oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvdGVhbS9hYnNlbnQvYWJzZW50LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDEgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+UHJhY3RpY2UgQWJzZW5jZSBGb3JtPC9oMT5cXG5cXG48Zm9ybSBjbGFzcz1cXFwidWkgZm9ybVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInR3byBmaWVsZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBOYW1lIDxzcGFuIGNsYXNzPVxcXCJyZXF1aXJlZFxcXCI+Kjwvc3Bhbj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJmaXJzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiRmlyc3QgTmFtZVxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lIDxzcGFuIGNsYXNzPVxcXCJyZXF1aXJlZFxcXCI+Kjwvc3Bhbj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJsYXN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXN0IE5hbWVcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICA8bGFiZWw+UmVhc29uIGZvciBtaXNzaW5nIG9yIGJlaW5nIGxhdGUgdG8gcHJhY3RpY2UgPHNwYW4gY2xhc3M9XFxcInJlcXVpcmVkXFxcIj4qPC9zcGFuPjwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0dGVyIGJlIGdvb2QuLi5cXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgPGxhYmVsPkZyb20gd2hhdCB0aW1lIHRvIHdoYXQgdGltZSBpcyB5b3VyIGNvbmZsaWN0PyA8c3BhbiBjbGFzcz1cXFwicmVxdWlyZWRcXFwiPio8L3NwYW4+PC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJsYXN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJUaW1lXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInR3byBmaWVsZHNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPldoYXQgaXMgdGhlIGRhdGUgdGhhdCB5b3Ugd2lsbCBiZSBtaXNzaW5nPyA8c3BhbiBjbGFzcz1cXFwicmVxdWlyZWRcXFwiPio8L3NwYW4+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGlucHV0IG1heGxlbmd0aD1cXFwiMlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF5XFxcIiBwbGFjZWhvbGRlcj1cXFwiRGF5XFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8ZGl2ICNtb250aERyb3Bkb3duIGNsYXNzPVxcXCJ1aSBzZWFyY2ggc2VsZWN0aW9uIGRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcIm1vbnRoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJkcm9wZG93biBpY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZWZhdWx0IHRleHRcXFwiPk1vbnRoPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXZhbHVlPVxcXCIwMVxcXCI+SmFudWFyeTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjAyXFxcIj5GZWJydWFyeTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjAzXFxcIj5NYXJjaDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjA0XFxcIj5BcHJpbDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjA1XFxcIj5NYXk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXZhbHVlPVxcXCIwNlxcXCI+SnVuZTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjA3XFxcIj5KdWx5PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS12YWx1ZT1cXFwiMDhcXFwiPkF1Z3VzdDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjA5XFxcIj5TZXB0ZW1iZXI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXZhbHVlPVxcXCIxMFxcXCI+T2N0b2JlcjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjExXFxcIj5Ob3ZlbWJlcjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdmFsdWU9XFxcIjEyXFxcIj5EZWNlbWJlcjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJ1aSBidXR0b25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+U3VibWl0PC9idXR0b24+XFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90ZWFtL2Fic2VudC9hYnNlbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL2Fic2VudC5jb21wb25lbnQubGVzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdGVhbS9hYnNlbnQvYWJzZW50LmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGFiZWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLnVpLmZvcm0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL3RlYW0vYWJzZW50L2Fic2VudC5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFJvdXRlIENvbmZpZ3VyYXRpb25cbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvc3BlY3RpdmVQbGF5ZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvc3BlY3RpdmUtcGxheWVycy9wcm9zcGVjdGl2ZS1wbGF5ZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByYWN0aWNlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVhbS9wcmFjdGljZS9wcmFjdGljZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvdXJuYW1lbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVhbS90b3VybmFtZW50cy90b3VybmFtZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3RlYW0vcm9zdGVyL3Jvc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFic2VudENvbXBvbmVudCB9IGZyb20gXCIuL3RlYW0vYWJzZW50L2Fic2VudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRlYW1IaXN0b3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vaGlzdG9yeS90ZWFtLWhpc3RvcnkvdGVhbS1oaXN0b3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXdhcmRzQ29tcG9uZW50IH0gZnJvbSBcIi4vaGlzdG9yeS9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0c0NvbXBvbmVudCB9IGZyb20gXCIuL2hpc3RvcnkvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3QgUk9VVEVTOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6ICcnLCAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICdwcmFjdGljZScsICAgICAgICAgIGNvbXBvbmVudDogUHJhY3RpY2VDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnYWJzZW50JywgICAgICAgICAgICBjb21wb25lbnQ6IEFic2VudENvbXBvbmVudH0sXG4gICAge3BhdGg6ICdjb250YWN0JywgICAgICAgICAgIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudH0sXG4gICAge3BhdGg6ICdob21lJywgICAgICAgICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICdhYm91dCcsICAgICAgICAgICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnR9LFxuICAgIHtwYXRoOiAncHJvc3BlY3RzJywgICAgICAgICBjb21wb25lbnQ6IFByb3NwZWN0aXZlUGxheWVyc0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICd0b3VybmFtZW50cy86eWVhcicsIGNvbXBvbmVudDogVG91cm5hbWVudHNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAncm9zdGVyLzp5ZWFyJywgICAgICBjb21wb25lbnQ6IFJvc3RlckNvbXBvbmVudH0sXG4gICAge3BhdGg6ICdoaXN0b3J5Lzp5ZWFyJywgICAgIGNvbXBvbmVudDogVGVhbUhpc3RvcnlDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnYXdhcmRzJywgICAgICAgICAgICBjb21wb25lbnQ6IEF3YXJkc0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICdyZXN1bHRzJywgICAgICAgICAgIGNvbXBvbmVudDogUmVzdWx0c0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICcqKicsICAgICAgICAgICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hcHAucm91dGVzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGlzdG9yeVllYXIgfSBmcm9tIFwiLi9tb2RlbC9oaXN0b3J5LXllYXIubW9kZWxcIjtcbmltcG9ydCB7IEhJU1RPUllfREFUQSB9IGZyb20gXCIuL2RhdGEvaGlzdG9yeS15ZWFyLmRhdGFcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RlYW0taGlzdG9yeScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVhbS1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90ZWFtLWhpc3RvcnkuY29tcG9uZW50Lmxlc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUZWFtSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBSZXN1bHRzIGRhdGEgdG8gaW5qZWN0IGludG8gb3VyIHRlbXBsYXRlXG4gICAgcHJpdmF0ZSBoaXN0b3J5RGF0YTogSGlzdG9yeVllYXJbXSA9IEhJU1RPUllfREFUQTtcbiAgICAvLyBTdWJzY3JpcHRpb24gdG8gb3VyIHJvdXRlIHBhcmFtZXRlcnMgKHRvdXJuYW1lbnQgeWVhcilcbiAgICBwcml2YXRlIHJvdXRlUGFyYW1zU3Vic2NyaXB0aW9uOiBhbnk7XG4gICAgLy8gQ3VycmVudCB0b3VybmFtZW50IHllYXJcbiAgICBwcml2YXRlIHllYXI6IG51bWJlcjtcblxuICAgIC8vIEluamVjdCB0aGUgQWN0aXZhdGVkUm91dGUgaW50byBvdXIgY29tcG9uZW50XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gb3VyIHJvdXRlIHBhcmFtZXRlcnMgKHRvdXJuYW1lbnQgeWVhcikuXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGVQYXJhbXNTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ3llYXInIHRvIGEgbnVtYmVyXG4gICAgICAgICAgICB0aGlzLnllYXIgPSArcGFyYW1zWyd5ZWFyJ107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIHRvIG91ciByb3V0ZSBwYXJhbWV0ZXJzICh0b3VybmFtZW50IHllYXIpLlxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlUGFyYW1zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2hpc3RvcnkvdGVhbS1oaXN0b3J5L3RlYW0taGlzdG9yeS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBIaXN0b3J5WWVhciB9IGZyb20gXCIuLi9tb2RlbC9oaXN0b3J5LXllYXIubW9kZWxcIjtcblxuZXhwb3J0IGNvbnN0IEhJU1RPUllfREFUQTogSGlzdG9yeVllYXJbXSA9IFtcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTYsXG4gICAgICAgIGltYWdlUGF0aDogJy4vYXNzZXRzL3RlYW0tcGhvdG8tMjAxNi5qcGcnLFxuICAgICAgICBzdW1tYXJ5TWFya3VwOiBgXG4gICAgICAgICAgICA8cD5JbGxpbm9pcyBVbHRpbWF0ZSBjYW1lIGludG8gdGhlIDIwMTYgc2Vhc29uIHdpdGggYSB0YXN0ZSBvZiBzdWNjZXNzIGFuZCBiaWcgc2hvZXMgdG8gZmlsbC4gUmV0dXJuaW5nIGNhcHRhaW4gTmljayBQcm96b3JvdnNreSBhbmQgbmV3IGNhcHRhaW5zIFByYXlhZyBQYXRlbCBhbmQgQ2hyaXMgQnVjaHRhIHdlcmUgdGFza2VkIHdpdGggdGhlIGRpZmZpY3VsdCBwcm9zcGVjdCBvZiByZXBsYWNpbmcgdGhlIDEyIGdyYWR1YXRpbmcgcGxheWVycyBhcyB3ZWxsIGFzIGNvYWNoIE1hdHQgU3R1cGNhLiBCb29tbGFuZCBjb2FjaCBFcmlrIEh1ZW1pbGxlciBhbmQgcmVjZW50IGFsdW0gTWF0dCBXZXN0IHdlcmUgYWJsZSB0byBmaWxsIHRoZSBsZWFkZXJzaGlwIHZvaWQgYXMgdGhlIHRlYW0gbG9va2VkIHRvIHJlbG9hZCBmb3IgYW5vdGhlciBydW4gYXQgTmF0aW9uYWxzLjwvcD5cbiAgICAgICAgICAgIDxwPlRoZSB0cnlvdXRzIGZvciB0aGUgdGVhbSB3ZXJlIHZlcnkgY29tcGV0aXRpdmUsIHdpdGggdGhlIGJpZ2dlc3QgaW5jb21pbmcgY2xhc3MgaW4gcmVjZW50IG1lbW9yeS4gVGhlIGZpbmFsIHJvc3RlciBpbmNsdWRlZCA3IHJvb2tpZXMsIDEgZ3JhZCBzdHVkZW50LCA1IGZvcm1lciBCb29tbGFuZCBwbGF5ZXJzLCBhbmQgMTIgcmV0dXJuZXJzLiBUaGUgbmV3ZXN0IGl0ZXJhdGlvbiBvZiBJbGxpbm9pcyBVbHRpbWF0ZSB0ZXN0ZWQgdGhlbXNlbHZlcyBhdCBNaXNzb3VyaSBMb3ZlcyBDb21wYW55LCBidXQgcmV0dXJuZWQgd2l0aCBzaG91bGRlciBpbmp1cmllcyB0byBzZW5pb3JzIE5pY2sgUHJvem9yb3Zza3kgYW5kIEFsZXggR3V5IHRoYXQgd291bGQgaGFtcGVyIHRoZW0gZm9yIHRoZSByZXN0IG9mIHRoZSBzZWFzb24uPC9wPlxuICAgICAgICAgICAgPHA+VGhpcyBzcHJpbmcgc2Vhc29uIGhhZCB0aGUgdGVhbSBoZWFkaW5nIHRvIEZsb3JpZGEsIFNvdXRoIENhcm9saW5hLCBhbmQgTWlzc291cmkgaW4gc2VhcmNoIG9mIGVsaXRlIGNvbXBldGl0aW9uLjwvcD5cbiAgICAgICAgICAgIDxwPk1pZCBGZWJydWFyeSBoYWQgdGhlIHRlYW0gZmx5aW5nIHNvdXRoIHRvIGNvbXBldGUgYXQgV2FybSBVcC4gVW5mb3J0dW5hdGVseSwgdGhlIHdlZWsgcHJpb3IgaGFkIGdyYWQgc3R1ZGVudCBDb2R5IEdyYXkgYnJlYWtpbmcgaGlzIGhhbmQgaW4gSXJ3aW4gYW5kIHNlbmlvciBXaWxzb24gV2FuZyBwdWxsaW5nIGhpcyBoYW1zdHJpbmcgaW4gdGhlIEFybW9yeSwgYm90aCBiaWcgaGFuZGxlciBsb3NzZXMuIE9uIFNhdHVyZGF5LCB0aGUgdGVhbSBzdGFydGVkIHdpdGggMTAtMTMgYW5kIDExLTEzIGxvc3NlcyB0byBUZXhhcyBhbmQgRmxvcmlkYSBTdGF0ZS4gVGhlIHRoaXJkIGdhbWUgb2YgdGhlIGRheSB3YXMgYWdhaW5zdCBwZXJlbm5pYWwgcG93ZXJob3VzZSBQaXR0c2J1cmdoLiBJbGxpbm9pcyBjYW1lIG91dCBzbG9wcHkgYW5kIHdhcyBwcmVzc3VyZWQgaW50byBtYWtpbmcgbWFueSBlcnJvcnMsIHJlc3VsdGluZyBpbiBhIDEtNyBzY29yZSBhdCBoYWxmIGFuZCBhbiBlbWJhcnJhc3NpbmcgMi0xMiBsb3NzLCBmaW5pc2hpbmcgMC00IG9uIHRoZSBkYXkgYWZ0ZXIgYW5vdGhlciBsb3NzIHRvIEJZVS4gU2F0dXJkYXkgc3RhcnRlZCBvZmYgYmV0dGVyIHdpdGggYSAxMy01IHdpbiBvdmVyIGhvc3QgU291dGggRmxvcmlkYSwgYnV0IHdhcyBmb2xsb3dlZCBieSBiaWcgbG9zc2VzIHRvIFZpcmdpbmlhIFRlY2ggYW5kIEF1YnVybi4gSWxsaW5vaXMgZmluaXNoZWQgdGhlIHRvdXJuYW1lbnQgMi03LCB3aXRoIGEgdW5pdmVyc2UgbG9zcyB0byBpbiByZWdpb24gcml2YWwgTm9ydGh3ZXN0ZXJuIGFuZCBvbmx5IHdpbnMgY29taW5nIGFnYWluc3QgU291dGggRmxvcmlkYS48L3A+XG4gICAgICAgICAgICA8cD5XaXRoIG1vc3Qgb2YgdGhlIHRlYW0gZmluYWxseSBoZWFsdGh5LCB0aGUgdGVhbSBtYWRlIHRoZSB0cmlwIHRvIEVhc3Rlcm5zIGZvciB0aGUgc2Vjb25kIHRvdXJuYW1lbnQgb2YgdGhlIHNlYXNvbi4gVGhlIGZpcnN0IGdhbWUgb2YgdGhlIHRvdXJuYW1lbnQgd2FzIGEgcmVtYXRjaCBhZ2FpbnN0IFBpdHRzYnVyZ2guIFRoaXMgdGltZSwgSWxsaW5vaXMgd2FzIHByZXBhcmVkIGZvciB0aGUgaW50ZW5zaXR5IGFuZCB3YXMgYWJsZSB0byBtYWtlIGl0IGEgY2xvc2VyIGdhbWUsIGJ1dCBzdGlsbCBsb3N0IDEyLTE1LiBBbm90aGVyIHJlbWF0Y2ggYWdhaW5zdCBWaXJnaW5pYSBUZWNoIGVuZGVkIHNpbWlsYXJseSwgbG9zaW5nIDExLTE0LCBhbmQgdGhlIHRlYW0gZW5kZWQgU2F0dXJkYXkgMC00LCB3aXRoIGEgMTAtMTUgbG9zcyB0byBVTkMgRGFya3NpZGUgYW5kIGFuIDExLTEzIGxvc3MgdG8gcmVnaW9uYWwgcml2YWwgTWljaGlnYW4uIE9uIGEgd2V0LCBjb2xkLCBhbmQgd2luZHkgU3VuZGF5LCBJbGxpbm9pcyB3YXMgbm90IGFibGUgdG8gY29tZSBvdXQgd2l0aCBhbnkgZmlyZSBhbmQgbG9zdCBiYWRseSB0byBKYW1lcyBNYWRpc29uIGFuZCBDb25uZWN0aWN1dCwgZ29pbmcgMC02IG9uIHRoZSB3ZWVrZW5kLjwvcD5cbiAgICAgICAgICAgIDxwPlRoZSBmaW5hbCByZWd1bGFyIHNlYXNvbiB0b3VybmFtZW50IG9mIHRoZSB5ZWFyIHdhcyBIdWNrIEZpbm4gYW5kIHRoZSBib3lzIGZyb20gSWxsaW5vaXMgbG9va2VkIHRvIGJvdW5jZSBiYWNrIGZyb20gYSBzbyBmYXIgdW5zdWNjZXNzZnVsIHJlZ3VsYXIgc2Vhc29uLiBXaXRoIGEgbWluZHNldCBvZiBpbXByb3ZpbmcgZm9yIHRoZSBzZXJpZXMgdGhlIElsbGluaSBjYW1lIG91dCB3aXRoIGEgNy0wIGxlYWQgYXQgaGFsZiBvbiBJbmRpYW5hIGFuZCBjbG9zZWQgaXQgb3V0IHdpdGggYW4gMTEtNCB3aW4uIERheXRvbiB3YXMgdGhlIG5leHQgZ2FtZSwgd2hpY2ggd2FzIGEgMTMtNCB3aW4gZm9yIHRoZSBJbGxpbmkgd2hpY2ggbWVhbnQgdGhhdCB0aGV5IHdvdWxkIHBsYXkgTWFyeWxhbmQgZm9yIHRoZSBwb29sLiBBbmtsZSBpbmp1cmllcyB0byBQcmF5YWcgUGF0ZWwgYW5kIEJlbiBGb3N0ZXIgbWVhbnQgdGhhdCB0aGUgTyBsaW5lIHdhcyBwbGF5aW5nIHdpdGhvdXQgdHdvIGtleSBjb250cmlidXRvcnMsIGJ1dCB0aGUgdGVhbSB3YXMgYWJsZSB0byB0b3VnaCBvdXQgYSAxNC0xMSB3aW4sIHNldHRpbmcgdXAgYSBjcm9zc292ZXIgZ2FtZSBhZ2FpbnN0IElsbGlub2lzIFN0YXRlLiBJbiBhIHZlcnkgd2luZHkgZ2FtZSwgSWxsaW5vaXMgdHJpdW1waGVkIG92ZXIgdGhlaXIgaW4gc3RhdGUgY29tcGV0aXRvcnMgaW4gYSAxMC02IHZpY3RvcnksIHNlY3VyaW5nIGEgcXVhcnRlcmZpbmFscyBiZXJ0aC4gVGhlIHRlYW0gY2xvc2VkIG91dCB0aGUgdG91cm5hbWVudCB3aXRoIGxvc3NlcyB0byBBcmthbnNhcyBhbmQgUHVyZHVlLCBhbmQgcHJlcGFyZWQgdGhlbXNlbHZlcyBmb3IgQ29uZmVyZW5jZXMuPC9wPlxuICAgICAgICAgICAgPHA+T25jZSBhZ2FpbiwgUmFudG91bCB3YXMgaG9zdCB0byBDb25mZXJlbmNlcywgYnV0IHRoaXMgdGltZSB0aGVyZSBjb3VsZCBiZSBubyBjb21wbGFpbnRzIGFib3V0IHRoZSB3ZWF0aGVyLiBJbGxpbm9pcyBzdGFydGVkIG91dCBzdHJvbmcgd2l0aCBjb21mb3J0YWJsZSB3aW5zIG92ZXIgdGhlIHJlc3Qgb2YgdGhlIHBvb2wsIGluY2x1ZGluZyBhbiAxMS00IHZpY3Rvcnkgb3ZlciBVQ2hpY2Fnby4gV2lubmluZyB0aGUgcG9vbCBsaW5lZCB1cCBhIHNlbWlmaW5hbCBnYW1lIGFnYWluc3QgSWxsaW5vaXMgU3RhdGUsIHdoaWNoIHdhcyB3b24gaGFuZGlseSAxMy03IGFuZCBzZXQgdXAgYSBjbGFzc2ljIElsbGlub2lzIC0gTm9ydGh3ZXN0ZXJuIHJlbWF0Y2guIFVuZm9ydHVuYXRlbHksIHRoZSB0ZWFtIHN0cnVnZ2xlZCB0byBmaW5kIHRoZSBlbmR6b25lIGFuZCBmb3IgdGhlIHNlY29uZCB5ZWFyIGluIGEgcm93LCBsb3N0IHRvIE5vcnRod2VzdGVybiBhdCBDb25mZXJlbmNlcy4gSW4gdGhlIDJuZCBwbGFjZSBtYXRjaCBhZ2FpbnN0IFVDaGljYWdvLCBJbGxpbm9pcyB3YXMgdW5hYmxlIHRvIGZpbmQgYSBncm9vdmUgYW5kIGxvc3QgOS0xMS4gV2l0aCBSZWdpb25hbHMgaW4gdHdvIHdlZWtzIGFuZCBvbmx5IG9uZSBiaWQgZm9yIHRoZSByZWdpb24sIElsbGlub2lzIGhhZCBhIGxvdCBvZiB3b3JrIHRvIGRvLjwvcD5cbiAgICAgICAgICAgIDxwPkluIGEgY2hhbmdlIG9mIHBhY2UsIFJlZ2lvbmFscyB3YXMgbm90IGhvc3RlZCBpbiBSb2NrZm9yZCwgYnV0IGluIEZhaXIgT2FrcywgSW5kaWFuYS4gVGhlIGNvbmRpdGlvbnMgd2VyZSB0ZXJyaWJsZSwgbG93IHRlbXBlcmF0dXJlcyBjb3VwbGVkIHdpdGggaGVhdnkgd2luZCBhbmQgcmFpbiBtZWFudCB0aGF0IGl0IHdvdWxkIGJlIGRpZmZpY3VsdCBnZXR0aW5nIGEgZ29vZCBncmlwLiBJbiB0aGUgZmlyc3QgZ2FtZSBhZ2FpbnN0IEtlbnR1Y2t5LCBib3RoIE8gYW5kIEQgbGluZSB3ZXJlIGFibGUgdG8gcGVyZm9ybSB3ZWxsLCBnaXZpbmcgdXAgbm8gYnJlYWtzIGFuZCBoYW5kaW5nIG91dCBhIGZldyBvZiB0aGVpciBvd24gYW5kIGZpbmlzaGluZyB3aXRoIGEgc2NvcmUgb2YgMTItNi4gVGhlIHRyZW5kIGNvbnRpbnVlZCBhZ2FpbnN0IEluZGlhbmEsIHdpdGggSWxsaW5vaXMgd2lubmluZyAxMy02LiBOZXh0IHVwIHdhcyBOb3RyZSBEYW1lLCBhIHJlbWF0Y2ggb2YgbGFzdCB5ZWFy4oCZcyBmaW5hbHMsIHdpbm5lciB0YWtlcyB0aGUgcG9vbCBhbmQgcXVhcnRlcmZpbmFscyBiZXJ0aC4gQSBjb21wbGV0ZWx5IHVwd2luZC9kb3dud2luZCBnYW1lIGZvdW5kIHRoZSBkIGxpbmUgd2l0aCBvcHBvcnR1bml0aWVzIHRvIGJyZWFrLCBidXQgbmV2ZXIgYWJsZSB0byBmaW5pc2ggdGhlIGpvYi4gV2l0aCBuZWl0aGVyIHRlYW0gYmVpbmcgYnJva2VuLCBOb3RyZSBEYW1lIHdvbiB0aGUgZmxpcCBhbmQgdGhlIGdhbWUsIDktMTAuIElsbGlub2lzIGZpbmlzaGVkIHVwIHRoZSBkYXkgd2l0aCBhIDEzLTUgd2luIG92ZXIgTWljaGlnYW4gU3RhdGUgdG8gc2V0IHVwIGEgcXVhcnRlcmZpbmFscyBtYXRjaHVwIGFnYWluc3QgTm9ydGh3ZXN0ZXJuLjwvcD5cbiAgICAgICAgICAgIDxwPkNvbmRpdGlvbnMgb24gU3VuZGF5IHdlcmUgYmV0dGVyIGFuZCB3aXRoIGEgbGl0dGxlIHN1cHBvcnQgZnJvbSBXYWxkZW4gTmVsc29uLCB0aGUgdGVhbSB3YXMgcmVhZHkgdG8gYXZlbmdlIHRoZWlyIHJlY2VudCBsb3NzZXMuIElsbGlub2lzIHN0YXJ0ZWQgb24gRCBhbmQgTm9ydGh3ZXN0ZXJuIGNhbWUgb3V0IHdpdGggYW4gYnJlYWsgZWFybHkgaW4gdGhlIGdhbWUsIGJ1dCB0aGUgdGVhbSBmb3VnaHQgYmFjayBhbmQgYnJlYWtzIHdlcmUgdHJhZGVkIHRvIGhhdmUgaXQgYmUgb24gc2VydmUgYXQgaGFsZi4gVGhlIHNlY29uZCBoYWxmIGNvbW1lbmNlZCB3aXRoIG1vcmUgb2YgYSBjbGVhbmVyIGdhbWUsIHdpdGggYm90aCB0ZWFtcyB0cmFkaW5nIG9mZmVuc2l2ZSBob2xkcy4gQSBjaGFuY2UgYXQgYSBicmVhayBkdWUgdG8gYSBOaWNrIFBybyBza3kgd2FzIGNhbGxlZCBiYWNrIG9uIGEgY29udHJvdmVyc2lhbCBvYnNlcnZlciBydWxpbmcgYW5kIHRoZSBnYW1lIHJlYWNoZWQgc29mdGNhcCB3aXRoIHRoZSBzY29yZSAxMC0xMS4gQ2hyaXMgQnVjaHRhIHRpZWQgdXAgdGhlIHNjb3JlIHdpdGggYSBodWNrIGZyb20gS2V2aW4gTGluIGFuZCB0aGUgZCBsaW5lIHdlbnQgb3V0IHRvIHRyeSBhbmQgYnJlYWsgd2l0aCB0aGUgc2Vhc29uIG9uIHRoZSBsaW5lLiBBZnRlciBhIHR1cm4gZnJvbSBOb3J0aHdlc3Rlcm4sIElsbGlub2lzIHdvcmtlZCB0aGUgZGlzYyBkb3duIHRoZSBmaWVsZCBhbmQgcm9va2llIEphY29iIEN1dGhiZXJ0IHRvb2sgYSB0aW1lb3V0IG91dHNpZGUgb2YgdGhlIGVuZHpvbmUuIE9uZSBlbmR6b25lIHNldCBsYXRlciwgUHJheWFnIGZvdW5kIEN1dGhiZXJ0IGZvciB0aGUgd2luLCBzZW5kaW5nIElsbGlub2lzIHRvIHRoZSBzZW1pZmluYWxzLjwvcD5cbiAgICAgICAgICAgIDxwPkR1ZSB0byB0aGUgbG9zcyBpbiBwb29sIHBsYXksIElsbGlub2lz4oCZcyBtYXRjaHVwIGluIHRoZSBzZW1pZmluYWxzIHdhcyBNaWNoaWdhbi4gRGVzcGl0ZSB0aGUgdG91Z2ggZ2FtZSBiZWZvcmUsIElsbGlub2lzIGhhZCB0byBjb21lIG91dCBob3QgaWYgdGhleSB3YW50ZWQgdG8gd2luIHRoZSBnYW1lLiBNaWNoaWdhbiBjYW1lIG91dCBvZiB0aGUgZ2F0ZSBmYXN0LCBzY29yaW5nIG9uIGEgaHVjay4gSWxsaW5vaXMgZm9sbG93ZWQgc3VpdCwgYW5kIHRoZSB0d28gdGVhbXMgdHJhZGVkIG9mZmVuc2l2ZSBob2xkcyB1bnRpbCBNaWNoaWdhbiBicm9rZSBmb3IgMy01LiBBcyB0aGUgZ2FtZSB3ZW50IG9uLCB0aGUgZGVmZW5zaXZlIHByZXNzdXJlIGZyb20gTWljaGlnYW4gaW50ZW5zaWZpZWQgYW5kIElsbGlub2lz4oCZIG8gbGluZSB3YXMgbm90IGFibGUgdG8gbWF0Y2ggdGhlIGdvYWxzIHRoYXQgTWljaGlnYW7igJlzIG8gbGluZSB3YXMgcHV0dGluZyBvdXQuIENvbWluZyBvdXQgb2YgaGFsZiBhdCA1LTgsIElsbGlub2lzIHR1cm5lZCBhbmQgd2FzIGJyb2tlbiBhZ2Fpbi4gQSBsYXRlIGluanVyeSB0byBQcmF5YWcgcHVzaGVkIHRoZSBob3BlIG9mIGEgY29tZWJhY2sgYSBsaXR0bGUgZnVydGhlciBvdXQgb2YgcmVhY2ggYW5kIGEgc2VuaW9yIGQgbGluZSB3YXMgdW5hYmxlIHRvIGtlZXAgTWljaGlnYW4gZnJvbSBzZWl6aW5nIHRoZSB2aWN0b3J5IDEwLTE1LiBNaWNoaWdhbiB3ZW50IG9uIHRvIGRlZmVhdCBOb3RyZSBEYW1lIDE1LTkgdG8gdGFrZSB0aGUgYmlkIHRvIE5hdGlvbmFscy4gSWxsaW5vaXMgZmluaXNoZWQgdGhlIHNlYXNvbiB3aXRoIGEgMTEtMTAgdmljdG9yeSBvdmVyIFB1cmR1ZSBmb3IgM3JkIGluIHRoZSByZWdpb24uPC9wPlxuICAgICAgICAgICAgPHA+Q2FwdGFpbiBOaWNrIFByb3pvcm92c2t5IGFuZCBKb2huIFNhbmlhdCByZWNlaXZlZCAxc3QgdGVhbSBBbGwtUmVnaW9uIGhvbm9ycyBhbmQgQ2FwdGFpbiBQcmF5YWcgUGF0ZWwgcmVjZWl2ZWQgMm5kIHRlYW0gQWxsLVJlZ2lvbi4gQmVuIFNhYm91cmluIGFuZCBKYWNvYiBDdXRoYmVydCB3ZXJlIHZvdGVkIEFsbC1GcmVzaG1lbiBmb3IgdGhlIHJlZ2lvbiwgd2l0aCBCZW4gd2lubmluZyBGcmVzaG1hbiBvZiB0aGUgWWVhci48L3A+XG4gICAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeWVhcjogMjAxNSxcbiAgICAgICAgaW1hZ2VQYXRoOiAnLi9hc3NldHMvdGVhbS1waG90by0yMDE1LmpwZycsXG4gICAgICAgIHN1bW1hcnlNYXJrdXA6IGBcbiAgICAgICAgICAgIEhlbGxvXG4gICAgICAgIGBcbiAgICB9LFxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvaGlzdG9yeS90ZWFtLWhpc3RvcnkvZGF0YS9oaXN0b3J5LXllYXIuZGF0YS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDEgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+VGVhbSBIaXN0b3J5PC9oMT5cXG48ZGl2IGNsYXNzPVxcXCJ1aSBzZWNvbmRhcnkgcG9pbnRpbmcgbWVudVxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCIvaGlzdG9yeS8yMDE1XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogeWVhciA9PT0gMjAxNX1cXFwiPjIwMTU8L2E+XFxuICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCIvaGlzdG9yeS8yMDE2XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogeWVhciA9PT0gMjAxNn1cXFwiPjIwMTY8L2E+XFxuICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCIvaGlzdG9yeS8yMDE3XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogeWVhciA9PT0gMjAxN31cXFwiPjIwMTc8L2E+XFxuPC9kaXY+XFxuPGgyIGNsYXNzPVxcXCJ1aSBoZWFkZXJcXFwiPnt7eWVhcn19PC9oMj5cXG48bmctY29udGFpbmVyICpuZ0Zvcj1cXFwibGV0IGhpc3RvcnlZZWFyIG9mIGhpc3RvcnlEYXRhXFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cXFwiaGlzdG9yeVllYXIueWVhciA9PT0geWVhclxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwie3toaXN0b3J5WWVhci5pbWFnZVBhdGh9fVxcXCIvPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VtbWFyeVxcXCIgW2lubmVySFRNTF09XFxcImhpc3RvcnlZZWFyLnN1bW1hcnlNYXJrdXBcXFwiPjwvZGl2PlxcbiAgICA8L25nLWNvbnRhaW5lcj5cXG48L25nLWNvbnRhaW5lcj5cXG48YSAqbmdJZj1cXFwieWVhciA+IDE5OTRcXFwiIHJvdXRlckxpbms9XFxcIi9oaXN0b3J5L3t7eWVhciAtIDF9fVxcXCI+PGkgY2xhc3M9XFxcImFuZ2xlIGRvdWJsZSBsZWZ0IGljb25cXFwiPjwvaT48L2E+XFxuPGEgKm5nSWY9XFxcInllYXIgPCAyMDE2XFxcIiByb3V0ZXJMaW5rPVxcXCIvaGlzdG9yeS97e3llYXIgKyAxfX1cXFwiPjxpIGNsYXNzPVxcXCJhbmdsZSBkb3VibGUgcmlnaHQgaWNvblxcXCI+PC9pPjwvYT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaGlzdG9yeS90ZWFtLWhpc3RvcnkvdGVhbS1oaXN0b3J5LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi90ZWFtLWhpc3RvcnkuY29tcG9uZW50Lmxlc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hpc3RvcnkvdGVhbS1oaXN0b3J5L3RlYW0taGlzdG9yeS5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImltZyB7XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDA0RDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbmkge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbmkucmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5pLmxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5zdW1tYXJ5IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL2hpc3RvcnkvdGVhbS1oaXN0b3J5L3RlYW0taGlzdG9yeS5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBV0FSRFNfREFUQSB9IGZyb20gXCIuL2RhdGEvYXdhcmRzLmRhdGFcIjtcbmltcG9ydCB7IEF3YXJkIH0gZnJvbSBcIi4vbW9kZWwvYXdhcmQubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhd2FyZHMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2F3YXJkcy5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXdhcmRzLmNvbXBvbmVudC5sZXNzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgQXdhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIC8vIEF3YXJkcyBkYXRhIHRvIGluamVjdCBpbnRvIG91ciB0ZW1wbGF0ZVxuICAgIHByaXZhdGUgYXdhcmREYXRhOiBBd2FyZFtdID0gQVdBUkRTX0RBVEE7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvaGlzdG9yeS9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEF3YXJkIH0gZnJvbSBcIi4uL21vZGVsL2F3YXJkLm1vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCBBV0FSRFNfREFUQTogQXdhcmQgW10gPSBbXG4gICAge1xuICAgICAgICB5ZWFyOiAyMDE2LFxuICAgICAgICBuYW1lOiAnTmljayBQcm96b3JvdnNreScsXG4gICAgICAgIGF3YXJkOiAnMXN0IFRlYW0nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTYsXG4gICAgICAgIG5hbWU6ICdKb2hubnkgU2FuaWF0JyxcbiAgICAgICAgYXdhcmQ6ICcxc3QgVGVhbSdcbiAgICB9XG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9oaXN0b3J5L2F3YXJkcy9kYXRhL2F3YXJkcy5kYXRhLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMSBjbGFzcz1cXFwidWkgaGVhZGVyXFxcIj5Bd2FyZHM8L2gxPlxcbjx0YWJsZSBjbGFzcz1cXFwidWkgY2VsbGVkIHRhYmxlXFxcIj5cXG4gICAgPHRoZWFkPlxcbiAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD5ZZWFyPC90aD5cXG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxuICAgICAgICAgICAgPHRoPkF3YXJkPC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBhd2FyZCBvZiBhd2FyZERhdGFcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57e2F3YXJkLnllYXJ9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7YXdhcmQubmFtZX19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3thd2FyZC5hd2FyZH19PC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuPC90YWJsZT5cXG48cD4qQWxsLUZyZXNobWFuIHRlYW0gYWRkZWQgaW4gMjAxMywgRk9UWSBnaXZlbiB0byB0aGUgQWxsLUZyZXNobWFuIG1lbWJlciB3aXRoIHRoZSBtb3N0IDFzdCBwbGFjZSB2b3RlczwvcD5cXG48cD4qUGxheWVyIG9mIHRoZSB5ZWFyIGF3YXJkIGFkZGVkIGluIDIwMTMsIFBPVFkgZ2l2ZW4gdG8gdGhlIEFsbC1SZWdpb24gbWVtYmVyIHdpdGggdGhlIG1vc3QgMXN0IHBsYWNlIHZvdGVzPC9wPlxcbjxwPipDb2FjaCBvZiB0aGUgWWVhciBhZGRlZCBpbiAyMDA5PC9wPlxcbjxwPioybmQtVGVhbSBBbGwgUmVnaW9uIGFkZGVkIGluIDIwMDk8L3A+XFxuPHA+KkF3YXJkcyBmaXJzdCBnaXZlbiBvdXQgaW4gMjAwMjwvcD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaGlzdG9yeS9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9hd2FyZHMuY29tcG9uZW50Lmxlc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hpc3RvcnkvYXdhcmRzL2F3YXJkcy5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvaGlzdG9yeS9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFU1VMVFNfREFUQSB9IGZyb20gXCIuL2RhdGEvcmVzdWx0cy5kYXRhXCI7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tIFwiLi9tb2RlbC9yZXN1bHQubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyZXN1bHRzJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yZXN1bHRzLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yZXN1bHRzLmNvbXBvbmVudC5sZXNzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBSZXN1bHRzIGRhdGEgdG8gaW5qZWN0IGludG8gb3VyIHRlbXBsYXRlXG4gICAgcHJpdmF0ZSByZXN1bHREYXRhOiBSZXN1bHRbXSA9IFJFU1VMVFNfREFUQTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9oaXN0b3J5L3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSZXN1bHQgfSBmcm9tIFwiLi4vbW9kZWwvcmVzdWx0Lm1vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCBSRVNVTFRTX0RBVEE6IFJlc3VsdFtdID0gW1xuICAgIHtcbiAgICAgICAgeWVhcjogMjAxNixcbiAgICAgICAgc2VjdGlvbmFsczogJzNyZCcsXG4gICAgICAgIHJlZ2lvbmFsczogJzNyZCcsXG4gICAgICAgIG5hdGlvbmFsczogJy0nLFxuICAgICAgICB0ZWFtUGFnZUxhYmVsOiAnVVNBVScsXG4gICAgICAgIHRlYW1QYWdlTGluazogJ2h0dHA6Ly9wbGF5LnVzYXVsdGltYXRlLm9yZy90ZWFtcy9ldmVudHMvRXZlbnR0ZWFtLz9UZWFtSWQ9blF6c0NPMGZLYlVVRUZaZktKJTJmT1VvdGQlMmYxUE02d28zNUhQYVhKRU1VQzglM2QnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHllYXI6IDIwMTUsXG4gICAgICAgIHNlY3Rpb25hbHM6ICcybmQnLFxuICAgICAgICByZWdpb25hbHM6ICcxc3QnLFxuICAgICAgICBuYXRpb25hbHM6ICcxM3RoJyxcbiAgICAgICAgdGVhbVBhZ2VMYWJlbDogJ1VTQVUnLFxuICAgICAgICB0ZWFtUGFnZUxpbms6ICdodHRwOi8vcGxheS51c2F1bHRpbWF0ZS5vcmcvdGVhbXMvZXZlbnRzL0V2ZW50dGVhbS8/VGVhbUlkPVQlMmJWNkQyWHlMVGxrTEElMmZYMldwYWlQR25ZeTZTM0RuJTJmbWNibGZvMDhETm8lM2QnXG4gICAgfVxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvaGlzdG9yeS9yZXN1bHRzL2RhdGEvcmVzdWx0cy5kYXRhLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMSBjbGFzcz1cXFwidWkgaGVhZGVyXFxcIj5SZXN1bHRzPC9oMT5cXG48dGFibGUgY2xhc3M9XFxcInVpIGNlbGxlZCB0YWJsZVxcXCI+XFxuICAgIDx0aGVhZD5cXG4gICAgPHRyPlxcbiAgICAgICAgPHRoPlllYXI8L3RoPlxcbiAgICAgICAgPHRoPlNlY3Rpb25hbHM8L3RoPlxcbiAgICAgICAgPHRoPlJlZ2lvbmFsczwvdGg+XFxuICAgICAgICA8dGg+TmF0aW9uYWxzPC90aD5cXG4gICAgICAgIDx0aD5UZWFtIFBhZ2U8L3RoPlxcbiAgICA8L3RyPlxcbiAgICA8L3RoZWFkPlxcbiAgICA8dGJvZHk+XFxuICAgIDx0ciAqbmdGb3I9XFxcImxldCByZXN1bHQgb2YgcmVzdWx0RGF0YVxcXCI+XFxuICAgICAgICA8dGQ+e3tyZXN1bHQueWVhcn19PC90ZD5cXG4gICAgICAgIDx0ZD57e3Jlc3VsdC5zZWN0aW9uYWxzfX08L3RkPlxcbiAgICAgICAgPHRkPnt7cmVzdWx0LnJlZ2lvbmFsc319PC90ZD5cXG4gICAgICAgIDx0ZD57e3Jlc3VsdC5uYXRpb25hbHN9fTwvdGQ+XFxuICAgICAgICA8dGQ+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcInt7cmVzdWx0LnRlYW1QYWdlTGlua319XFxcIj57e3Jlc3VsdC50ZWFtUGFnZUxhYmVsfX08L2E+PC90ZD5cXG4gICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG48L3RhYmxlPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9oaXN0b3J5L3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vcmVzdWx0cy5jb21wb25lbnQubGVzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaGlzdG9yeS9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL2hpc3RvcnkvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZWFtSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gXCIuL3RlYW0taGlzdG9yeS90ZWFtLWhpc3RvcnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBd2FyZHNDb21wb25lbnQgfSBmcm9tIFwiLi9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0c0NvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi9hcHAucm91dGVzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChST1VURVMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGVhbUhpc3RvcnlDb21wb25lbnQsXG4gICAgICAgIEF3YXJkc0NvbXBvbmVudCxcbiAgICAgICAgUmVzdWx0c0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSGlzdG9yeU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBNZW51RGVza3RvcENvbXBvbmVudCB9IGZyb20gXCIuL21lbnUtZGVza3RvcC9tZW51LWRlc2t0b3AuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZW51TW9iaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVudS1tb2JpbGUvbWVudS1tb2JpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMZWZ0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gXCIuL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSaWdodFNpZGViYXJDb21wb25lbnQgfSBmcm9tIFwiLi9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYWdlRnJhbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlLWZyYW1lLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFJPVVRFUylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQYWdlRnJhbWVDb21wb25lbnQsXG4gICAgICAgIE1lbnVEZXNrdG9wQ29tcG9uZW50LFxuICAgICAgICBNZW51TW9iaWxlQ29tcG9uZW50LFxuICAgICAgICBMZWZ0U2lkZWJhckNvbXBvbmVudCxcbiAgICAgICAgUmlnaHRTaWRlYmFyQ29tcG9uZW50LFxuICAgICAgICBGb290ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUGFnZUZyYW1lQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlRnJhbWVNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9wYWdlLWZyYW1lL3BhZ2UtZnJhbWUubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZW51LWRlc2t0b3AnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21lbnUtZGVza3RvcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbWVudS1kZXNrdG9wLmNvbXBvbmVudC5sZXNzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudURlc2t0b3BDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIC8vIE1lbnUgZHJvcGRvd25zXG4gICAgQFZpZXdDaGlsZCgndGVhbURyb3Bkb3duJylcbiAgICBwcml2YXRlIHRlYW1Ecm9wZG93bjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdoaXN0b3J5RHJvcGRvd24nKVxuICAgIHByaXZhdGUgaGlzdG9yeURyb3Bkb3duOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBvdXIgbW9iaWxlIG1lbnUgZHJvcGRvd24uXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICAkKHRoaXMudGVhbURyb3Bkb3duLm5hdGl2ZUVsZW1lbnQpLmRyb3Bkb3duKHt9KTtcbiAgICAgICAgJCh0aGlzLmhpc3RvcnlEcm9wZG93bi5uYXRpdmVFbGVtZW50KS5kcm9wZG93bih7fSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1kZXNrdG9wL21lbnUtZGVza3RvcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgPGEgcm91dGVyTGluaz1cXFwiL2hvbWVcXFwiPjxpbWcgY2xhc3M9XFxcImNyZXN0XFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbWVudS9jcmVzdC5wbmdcIikgKyBcIlxcXCIvPjwvYT5cXG4gICAgPGEgcm91dGVyTGluaz1cXFwiL2hvbWVcXFwiPjxoMSBjbGFzcz1cXFwiaGVhZGVyLXRleHRcXFwiPklsbGlub2lzIFVsdGltYXRlPC9oMT48L2E+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwidWkgcG9pbnRpbmcgc3RhY2thYmxlIG1lbnVcXFwiPlxcbiAgICA8YSByb3V0ZXJMaW5rPVxcXCIvaG9tZVxcXCIgICAgICAgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2FjdGl2ZSddXFxcIiBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiPjxpIGNsYXNzPVxcXCJob21lIGljb25cXFwiPjwvaT5Ib21lPC9hPlxcbiAgICA8YSByb3V0ZXJMaW5rPVxcXCIvYWJvdXRcXFwiICAgICAgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2FjdGl2ZSddXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImluZm8gaWNvblxcXCI+PC9pPkFib3V0IFVzPC9hPlxcbiAgICA8YSByb3V0ZXJMaW5rPVxcXCIvcHJvc3BlY3RzXFxcIiAgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2FjdGl2ZSddXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImNoaWxkIGljb25cXFwiPjwvaT5Qcm9zcGVjdGl2ZSBQbGF5ZXJzPC9hPlxcbiAgICA8ZGl2ICN0ZWFtRHJvcGRvd24gY2xhc3M9XFxcInVpIGRyb3Bkb3duIGl0ZW1cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcInVzZXIgaWNvblxcXCI+PC9pPlRlYW08aSBjbGFzcz1cXFwiZHJvcGRvd24gaWNvblxcXCI+PC9pPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgICAgICAgICAgPGRpdiByb3V0ZXJMaW5rPVxcXCIvcHJhY3RpY2VcXFwiICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJzb2NjZXIgaWNvblxcXCI+PC9pPlByYWN0aWNlPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiByb3V0ZXJMaW5rPVxcXCIvdG91cm5hbWVudHMvMjAxN1xcXCIgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJjYWxlbmRhciBpY29uXFxcIj48L2k+VG91cm5hbWVudHM8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IHJvdXRlckxpbms9XFxcIi9yb3N0ZXIvMjAxN1xcXCIgICAgICAgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2FjdGl2ZSddXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcIm9yZGVyZWQgbGlzdCBpY29uXFxcIj48L2k+Um9zdGVyPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiByb3V0ZXJMaW5rPVxcXCIvYWJzZW50XFxcIiAgICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJyZW1vdmUgaWNvblxcXCI+PC9pPkFic2VudCBGb3JtPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgI2hpc3RvcnlEcm9wZG93biBjbGFzcz1cXFwidWkgZHJvcGRvd24gaXRlbVxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmFzdCBiYWNrd2FyZCBpY29uXFxcIj48L2k+SGlzdG9yeTxpIGNsYXNzPVxcXCJkcm9wZG93biBpY29uXFxcIj48L2k+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZW51XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IHJvdXRlckxpbms9XFxcIi9oaXN0b3J5LzIwMTZcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJ1bmRvIGljb25cXFwiPjwvaT5UZWFtIEhpc3Rvcnk8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IHJvdXRlckxpbms9XFxcIi9hd2FyZHNcXFwiICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJ0cm9waHkgaWNvblxcXCI+PC9pPkF3YXJkczwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgcm91dGVyTGluaz1cXFwiL3Jlc3VsdHNcXFwiICAgICAgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2FjdGl2ZSddXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImFyY2hpdmUgaWNvblxcXCI+PC9pPlBhc3QgUmVzdWx0czwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YSBocmVmPVxcXCJodHRwOi8vd3d3LmlsbGluaXVsdGkuYmxvZ3Nwb3QuY29tL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJpdGVtXFxcIj48aSBjbGFzcz1cXFwiY29tbWVudCBpY29uXFxcIj48L2k+QmxvZzwvYT5cXG4gICAgPGEgcm91dGVyTGluaz1cXFwiL2NvbnRhY3RcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJtYWlsIGljb25cXFwiPjwvaT5Db250YWN0IFVzPC9hPlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLWZyYW1lL21lbnUtZGVza3RvcC9tZW51LWRlc2t0b3AuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY3Jlc3QucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFnZS1mcmFtZS9tZW51L2NyZXN0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vbWVudS1kZXNrdG9wLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLWZyYW1lL21lbnUtZGVza3RvcC9tZW51LWRlc2t0b3AuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbWVudS9oZWFkZXItYmFja2dyb3VuZC5qcGdcIikgKyBcIik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5oZWFkZXItdGV4dCB7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2ZmNjIyNjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCB3aGl0ZSwgMXB4IC0xcHggMCB3aGl0ZSwgLTFweCAxcHggMCB3aGl0ZSwgMXB4IDFweCAwIHdoaXRlO1xcbn1cXG4uaGVhZGVyIC5jcmVzdCB7XFxuICBtYXgtaGVpZ2h0OiA4MHB4O1xcbiAgbWF4LXdpZHRoOiA1MHB4O1xcbn1cXG4udWkubWVudSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1kZXNrdG9wL21lbnUtZGVza3RvcC5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9oZWFkZXItYmFja2dyb3VuZC5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wYWdlLWZyYW1lL21lbnUvaGVhZGVyLWJhY2tncm91bmQuanBnXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZW51LW1vYmlsZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbWVudS1tb2JpbGUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL21lbnUtbW9iaWxlLmNvbXBvbmVudC5sZXNzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudU1vYmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgLy8gTWVudSBkcm9wZG93bnNcbiAgICBAVmlld0NoaWxkKCd0ZWFtRHJvcGRvd24nKVxuICAgIHByaXZhdGUgdGVhbURyb3Bkb3duOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2hpc3RvcnlEcm9wZG93bicpXG4gICAgcHJpdmF0ZSBoaXN0b3J5RHJvcGRvd246IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnbW9iaWxlRHJvcGRvd24nKVxuICAgIHByaXZhdGUgbW9iaWxlRHJvcGRvd246IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIG91ciBtb2JpbGUgbWVudSBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIC8vICQodGhpcy50ZWFtRHJvcGRvd24ubmF0aXZlRWxlbWVudCkuZHJvcGRvd24oe30pO1xuICAgICAgICAvLyAkKHRoaXMuaGlzdG9yeURyb3Bkb3duLm5hdGl2ZUVsZW1lbnQpLmRyb3Bkb3duKHt9KTtcbiAgICAgICAgJCh0aGlzLm1vYmlsZURyb3Bkb3duLm5hdGl2ZUVsZW1lbnQpLmRyb3Bkb3duKHt9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvcGFnZS1mcmFtZS9tZW51LW1vYmlsZS9tZW51LW1vYmlsZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgPGRpdiAjbW9iaWxlRHJvcGRvd24gY2xhc3M9XFxcInVpIGlubGluZSBkcm9wZG93blxcXCI+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcImhlYWRlci10ZXh0XFxcIj5JbGxpbm9pcyBVbHRpbWF0ZTwvaDE+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZHJvcGRvd24gaWNvblxcXCI+PC9pPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiL2hvbWVcXFwiICAgICAgICAgICAgICAgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2FjdGl2ZSddXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImhvbWUgaWNvblxcXCI+PC9pPkhvbWU8L2E+XFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiL2Fib3V0XFxcIiAgICAgICAgICAgICAgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2FjdGl2ZSddXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImluZm8gaWNvblxcXCI+PC9pPkFib3V0IFVzPC9hPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi9wcm9zcGVjdHNcXFwiICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJjaGlsZCBpY29uXFxcIj48L2k+UHJvc3BlY3RpdmUgUGxheWVyczwvYT5cXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvcHJhY3RpY2VcXFwiICAgICAgICAgICBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnYWN0aXZlJ11cXFwiIGNsYXNzPVxcXCJpdGVtXFxcIj48aSBjbGFzcz1cXFwic29jY2VyIGljb25cXFwiPjwvaT5QcmFjdGljZTwvYT5cXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvdG91cm5hbWVudHMvMjAxN1xcXCIgICBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnYWN0aXZlJ11cXFwiIGNsYXNzPVxcXCJpdGVtXFxcIj48aSBjbGFzcz1cXFwiY2FsZW5kYXIgaWNvblxcXCI+PC9pPlRvdXJuYW1lbnRzPC9hPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi9yb3N0ZXIvMjAxN1xcXCIgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJvcmRlcmVkIGxpc3QgaWNvblxcXCI+PC9pPlJvc3RlcjwvYT5cXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvYWJzZW50XFxcIiAgICAgICAgICAgICBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnYWN0aXZlJ11cXFwiIGNsYXNzPVxcXCJpdGVtXFxcIj48aSBjbGFzcz1cXFwicmVtb3ZlIGljb25cXFwiPjwvaT5BYnNlbnQgRm9ybTwvYT5cXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvaGlzdG9yeS8yMDE2XFxcIiAgICAgICBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnYWN0aXZlJ11cXFwiIGNsYXNzPVxcXCJpdGVtXFxcIj48aSBjbGFzcz1cXFwidW5kbyBpY29uXFxcIj48L2k+VGVhbSBIaXN0b3J5PC9hPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi9hd2FyZHNcXFwiICAgICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJ0cm9waHkgaWNvblxcXCI+PC9pPkF3YXJkczwvYT5cXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvcmVzdWx0c1xcXCIgICAgICAgICAgICBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnYWN0aXZlJ11cXFwiIGNsYXNzPVxcXCJpdGVtXFxcIj48aSBjbGFzcz1cXFwiYXJjaGl2ZSBpY29uXFxcIj48L2k+UGFzdCBSZXN1bHRzPC9hPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi9ibG9nXFxcIiAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJjb21tZW50IGljb25cXFwiPjwvaT5CbG9nPC9hPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi9jb250YWN0XFxcIiAgICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydhY3RpdmUnXVxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPjxpIGNsYXNzPVxcXCJtYWlsIGljb25cXFwiPjwvaT5Db250YWN0IFVzPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLWZyYW1lL21lbnUtbW9iaWxlL21lbnUtbW9iaWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9tZW51LW1vYmlsZS5jb21wb25lbnQubGVzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZS1mcmFtZS9tZW51LW1vYmlsZS9tZW51LW1vYmlsZS5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFnZS1mcmFtZS9tZW51L2hlYWRlci1iYWNrZ3JvdW5kLmpwZ1wiKSArIFwiKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uaGVhZGVyIC51aS5kcm9wZG93biB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmhlYWRlci10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZmY2MjI2O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIHdoaXRlLCAxcHggLTFweCAwIHdoaXRlLCAtMXB4IDFweCAwIHdoaXRlLCAxcHggMXB4IDAgd2hpdGU7XFxufVxcbi5oZWFkZXIgLmRyb3Bkb3duLmljb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyIC5tZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbWVudS1tb2JpbGUvbWVudS1tb2JpbGUuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsZWZ0LXNpZGViYXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xlZnQtc2lkZWJhci5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5sZXNzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTGVmdFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVHdpdHRlcldpZGdldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFR3aXR0ZXIgc2NyaXB0IGZvciBpbml0aWFsaXppbmcgb3VyIFR3aXR0ZXIgVGltZWxpbmUgd2lkZ2V0XG4gICAgICovXG4gICAgaW5pdGlhbGl6ZVR3aXR0ZXJXaWRnZXQoKTogdm9pZCB7XG4gICAgICAgICFmdW5jdGlvbihkLHMsaWQpe1xuICAgICAgICAgICAgbGV0IGpzOiBhbnksXG4gICAgICAgICAgICAgICAgZmpzPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG4gICAgICAgICAgICAgICAgcD0naHR0cHMnO1xuICAgICAgICAgICAgaWYoIWQuZ2V0RWxlbWVudEJ5SWQoaWQpKXtcbiAgICAgICAgICAgICAgICBqcz1kLmNyZWF0ZUVsZW1lbnQocyk7XG4gICAgICAgICAgICAgICAganMuaWQ9aWQ7XG4gICAgICAgICAgICAgICAganMuc3JjPXArXCI6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCI7XG4gICAgICAgICAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLGZqcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0oZG9jdW1lbnQsXCJzY3JpcHRcIixcInR3aXR0ZXItd2pzXCIpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9wYWdlLWZyYW1lL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpIHNlZ21lbnQgdHdpdHRlci1zaWRlYmFyXFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcInR3aXR0ZXItdGltZWxpbmVcXFwiIGhlaWdodD1cXFwiNTAwcHhcXFwiIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vSWxsaW5pVWx0aVxcXCIgZGF0YS13aWRnZXQtaWQ9XFxcIjYwNTQxNDgzNjM2OTg4MzEzNlxcXCI+VHdlZXRzIGJ5IEBJbGxpbmlVbHRpPC9hPlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLWZyYW1lL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL2xlZnQtc2lkZWJhci5jb21wb25lbnQubGVzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZS1mcmFtZS9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnR3aXR0ZXItc2lkZWJhciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL3BhZ2UtZnJhbWUvbGVmdC1zaWRlYmFyL2xlZnQtc2lkZWJhci5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmlnaHQtc2lkZWJhcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmlnaHQtc2lkZWJhci5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcmlnaHQtc2lkZWJhci5jb21wb25lbnQubGVzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIFJpZ2h0U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvcGFnZS1mcmFtZS9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpIHNlZ21lbnQgcGF5cGFsLXNpZGViYXJcXFwiPlxcbiAgICA8aDIgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+SGVscCBPdXQgSWxsaW5vaXMgVWx0aW1hdGUhPC9oMj5cXG5cXG4gICAgPHA+SWxsaW5vaXMgVWx0aW1hdGUgaXMgbW9zdGx5IHN0dWRlbnQtZnVuZGVkLCBoZWxwIHVzIG91dCBieSBkb25hdGluZyE8L3A+XFxuICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LnBheXBhbC5tZS9pbGxpbm9pc1VsdGltYXRlXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwYXlwYWwtZG9uYXRlXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbGVmdC1zaWRlYmFyL3BheXBhbC1kb25hdGUucG5nXCIpICsgXCJcXFwiLz5cXG4gICAgPC9hPlxcbjwvZGl2PlxcbjxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9JbGxpbm9pc1VsdGltYXRlXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcInNvY2lhbC1tZWRpYS1idXR0b24gaHZyLXNpbmtcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFnZS1mcmFtZS9sZWZ0LXNpZGViYXIvZmFjZWJvb2stYnV0dG9uLnBuZ1wiKSArIFwiXFxcIi8+XFxuPC9hPlxcbjxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vaWxsaW5pdWx0aVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJzb2NpYWwtbWVkaWEtYnV0dG9uIGh2ci1zaW5rXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbGVmdC1zaWRlYmFyL3R3aXR0ZXItYnV0dG9uLnBuZ1wiKSArIFwiXFxcIi8+XFxuPC9hPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLWZyYW1lL3JpZ2h0LXNpZGViYXIvcmlnaHQtc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9wYXlwYWwtZG9uYXRlLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbGVmdC1zaWRlYmFyL3BheXBhbC1kb25hdGUucG5nXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ZhY2Vib29rLWJ1dHRvbi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wYWdlLWZyYW1lL2xlZnQtc2lkZWJhci9mYWNlYm9vay1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3R3aXR0ZXItYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhZ2UtZnJhbWUvbGVmdC1zaWRlYmFyL3R3aXR0ZXItYnV0dG9uLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vcmlnaHQtc2lkZWJhci5jb21wb25lbnQubGVzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZS1mcmFtZS9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGF5cGFsLXNpZGViYXIge1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ucGF5cGFsLXNpZGViYXIgcCB7XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wYXlwYWwtZG9uYXRlIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnVpLmhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc29jaWFsLW1lZGlhLWJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWF4LXdpZHRoOiA3MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDREO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMCByZ2JhKDM0LCAzNiwgMzgsIDAuMTUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvYXBwL3BhZ2UtZnJhbWUvcmlnaHQtc2lkZWJhci9yaWdodC1zaWRlYmFyLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYWdlLWZyYW1lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9wYWdlLWZyYW1lLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9wYWdlLWZyYW1lLmNvbXBvbmVudC5sZXNzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZUZyYW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9wYWdlLWZyYW1lL3BhZ2UtZnJhbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS1IZWFkZXItLT5cXG48bWVudS1kZXNrdG9wIGNsYXNzPVxcXCJtZW51LWRlc2t0b3BcXFwiPjwvbWVudS1kZXNrdG9wPlxcbjxtZW51LW1vYmlsZSBjbGFzcz1cXFwibWVudS1tb2JpbGVcXFwiPjwvbWVudS1tb2JpbGU+XFxuXFxuPCEtLUNvbnRlbnQtLT5cXG48ZGl2IGNsYXNzPVxcXCJtYWluLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtc2lkZWJhclxcXCI+XFxuICAgICAgICA8bGVmdC1zaWRlYmFyPjwvbGVmdC1zaWRlYmFyPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWFpbi1jb250ZW50XFxcIj5cXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0LXNpZGViYXJcXFwiPlxcbiAgICAgICAgPHJpZ2h0LXNpZGViYXI+PC9yaWdodC1zaWRlYmFyPlxcbiAgICA8L2Rpdj5cXG4gICAgPGZvb3Rlcj48L2Zvb3Rlcj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZS1mcmFtZS9wYWdlLWZyYW1lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9wYWdlLWZyYW1lLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLWZyYW1lL3BhZ2UtZnJhbWUuY29tcG9uZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWVudS1kZXNrdG9wLFxcbi5sZWZ0LXNpZGViYXIsXFxuLnJpZ2h0LXNpZGViYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1haW4tY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLm1lbnUtbW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tZW51LWRlc2t0b3AsXFxuICAubGVmdC1zaWRlYmFyLFxcbiAgLnJpZ2h0LXNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmxlZnQtc2lkZWJhciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmbGV4OiAwIDAgMjAwcHg7XFxuICB9XFxuICAucmlnaHQtc2lkZWJhciB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZsZXg6IDAgMCAxNTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcbiAgfVxcbiAgLmxlZnQtc2lkZWJhciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgfVxcbiAgLnJpZ2h0LXNpZGViYXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIGZsZXg6IDAgMCAyMDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcbiAgfVxcbiAgLmxlZnQtc2lkZWJhciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbiAgfVxcbiAgLnJpZ2h0LXNpZGViYXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvcGFnZS1mcmFtZS9wYWdlLWZyYW1lLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Zvb3Rlci5jb21wb25lbnQubGVzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9wYWdlLWZyYW1lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpIG1lbnVcXFwiPlxcbiAgICA8cD5Gb3Igc3VwcG9ydCBvciB0byByZXBvcnQgd2Vic2l0ZSBpc3N1ZXMsIGVtYWlsIHRoZSBhZG1pbiBhdCB3Y2pwaG9lbml4QGdtYWlsLmNvbSBvciB0aGUgY3JlYXRvciBhdCBuaWNrLnByb3pvcm92c2t5QGdtYWlsLmNvbTwvcD5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZS1mcmFtZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9mb290ZXIuY29tcG9uZW50Lmxlc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtZnJhbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51aS5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxucCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NyYy9hcHAvcGFnZS1mcmFtZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==