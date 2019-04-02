/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/examples/classic-rpg-interface/Launcher.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Launcher.ts":
/*!*************************!*\
  !*** ./src/Launcher.ts ***!
  \*************************/
/*! exports provided: Launcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Launcher", function() { return Launcher; });
/* harmony import */ var engine_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/Game */ "./src/engine/Game.ts");
/* harmony import */ var engine_gameobject_context2d_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/context2d/Root */ "./src/engine/gameobject/context2d/Root.ts");
/* harmony import */ var engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var engine_io_IO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/io/IO */ "./src/engine/io/IO.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_io_Keyboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/io/Keyboard */ "./src/engine/io/Keyboard.ts");
/* harmony import */ var engine_io_Mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/io/Mouse */ "./src/engine/io/Mouse.ts");
/* harmony import */ var engine_io_Timing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/io/Timing */ "./src/engine/io/Timing.ts");
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_io_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/io/Loader */ "./src/engine/io/Loader.ts");











class Launcher {
    get rootGameObject() { return this._rootGameObject; }
    get canvas() { return this._canvas; }
    get container() { return this._container; }
    get canvasName() { return this._canvasName; }
    get created() { return this._created; }
    constructor(container, canvasName) {
        this._container = container;
        this._canvasName = canvasName || "gameCanvas";
    }
    create() {
        if (this._created)
            throw new Error("Cannot create Game: already created");
        this._rootGameObject = this._createRootGameObject(this._rootGameObjectType, this._container);
        this._canvas = this._rootGameObject.canvas;
        this._game = this._createGame(this.canvas, this._rootGameObject);
        this._container.appendChild(this.canvas);
        this._resizeFunction = (() => this._rootGameObject.resizeToOnUpdate(new engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_2__["default"](this._container.offsetWidth, this._container.offsetHeight))).bind(this);
        this._created = true;
    }
    start() {
        addResizeListener(this._container, this._resizeFunction);
        this._game.start();
    }
    stop() {
        this._game.stop();
        removeResizeListener(this._container, this._resizeFunction);
    }
    _createGame(canvas, rootGameObject) {
        let game = new engine_Game__WEBPACK_IMPORTED_MODULE_0__["default"](rootGameObject, this._createInterfaces(canvas), MainLoop);
        game.create();
        return game;
    }
    _createInterfaces(canvas) {
        let io = new engine_io_IO__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._addTiming(io);
        this._addLoader(io);
        return io;
    }
    _createRootGameObject(rootType, container) {
        let rootGameObject = new engine_gameobject_context2d_Root__WEBPACK_IMPORTED_MODULE_1__["default"](rootType, new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_2__["default"](container.offsetWidth, container.offsetHeight)), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_9__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_9__["FrameController"]());
        rootGameObject.createCanvas(this._canvasName);
        rootGameObject.transform.bounds.dimensions[0] = new engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_2__["default"](container.offsetWidth, container.offsetHeight);
        rootGameObject.resizeCanvas(rootGameObject.transform.getDimension(), window.devicePixelRatio);
        rootGameObject.transform.recalculate();
        return rootGameObject;
    }
    _addKeyboard(io) {
        let keyboard = new engine_io_Keyboard__WEBPACK_IMPORTED_MODULE_6__["KeyboardListener"]();
        keyboard.create();
        io.addInterface(keyboard, "keyboard");
        return io;
    }
    _addMouse(io, canvas) {
        let mouse = new engine_io_Mouse__WEBPACK_IMPORTED_MODULE_7__["MouseListener"]();
        mouse.addTo(document, canvas);
        io.addInterface(mouse, "mouse");
        return io;
    }
    _addTiming(io) {
        io.addInterface(new engine_io_Timing__WEBPACK_IMPORTED_MODULE_8__["TimingListener"](), "timing");
        return io;
    }
    _addLoader(io) {
        io.addInterface(new engine_io_Loader__WEBPACK_IMPORTED_MODULE_10__["default"](), "loader");
        return io;
    }
}


/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/10p.png":
/*!**************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/10p.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a6522e44233039fef540a0b000010ea.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/11p.png":
/*!**************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/11p.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad257d7e43ce8eb9f39e38ab95725eee.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/12p.png":
/*!**************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/12p.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b9b811634ed46c6f866f036210c173f8.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/13p.png":
/*!**************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/13p.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b376ca5219c8c181bf1ec42aa86a82ec.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/14p.png":
/*!**************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/14p.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "79f5d19fe84087be033a8f3b4d599cf6.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/1p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/1p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b65bf51aa8796d13b449d41010c42448.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/2p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/2p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f21ed09f1c78ef4744c65db5d886b85a.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/3p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/3p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "08b03c433b2c8412740544b07657fbc4.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/4p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/4p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7006b7c0e54e04295d980c4a023d4dd4.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/5p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/5p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd2c8735115c4e6077be29bd38b96b48.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/6p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/6p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f131d4e479b2c18ce748dea2a4ab29f.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/7p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/7p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "888853009d4646a9a011ea96340e5294.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/8p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/8p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "015ad6ebef242ba8e3b2197d0a6760ff.png";

/***/ }),

/***/ "./src/assets/image_1x/rpg/portrait/9p.png":
/*!*************************************************!*\
  !*** ./src/assets/image_1x/rpg/portrait/9p.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c98dbaad178a6329456504ccb630b93.png";

/***/ }),

/***/ "./src/assets/rpg/levels/large-house.json":
/*!************************************************!*\
  !*** ./src/assets/rpg/levels/large-house.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, default */
/***/ (function(module) {

module.exports = [0,0,0,0,0,0,1,0,0,1,2,4,1,0,0,0,2,4,1,1,0,0,2,4,0,0,0,0,0,0,1,0,0,1,2,4,1,1,0,0,2,4,0,0,0,0,0,0,0,0,0,1,2,4,0,0,1,0,2,4,0,1,0,0,2,4,0,0,0,0,0,0,0,0,0,1,2,4,0,1,0,0,2,4,0,0,0,0,0,0,0,1,1,1,2,4,0,0,0,0,0,0,0,0,0,1,2,4,1,0,1,0,2,4,0,1,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,2,4,1,0,0,0,2,4,0,1,1,0,2,4,0,0,0,0,0,0,0,0,0,1,2,4,1,1,0,0,2,4,0,0,0,0,0,0,0,0,1,1,2,4,0,1,1,0,2,4,0,0,0,0,0,0,1,0,1,1,2,0,0,0,1,0,2,4,0,1,1,0,2,4,1,0,0,1,3,0,1,0,0,0,3,0,1,1,0,0,3,0,1,0,0,1,3,4,1,0,1,0,3,4,1,0,0,0,3,4,1,1,0,0,3,4,0,0,0,1,3,0,0,0,0,0,3,0,0,1,0,0,3,0,0,1,0,1,3,4,1,1,0,1,3,0,0,0,1,1,3,4,0,1,1,0,3,4,0,0,1,1,3,0,0,0,1,0,3,0,0,1,5,0,3,0,0,5,1,1,3,4,0,1,0,1,3,4,1,0,0,5,3,4,1,1,0,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,3,4,1,0,0,0,3,4,0,1,1,0,3,4,0,0,1,1,3,4,0,1,1,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,1,3,4,1,1,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,4,1,0,0,0,0,4,1,0,0,0,0,4,1,5,0,0,3,4,1,5,0,5,3,4,1,0,0,5,3,4,1,1,0,0,3,4,0,0,0,1,0,4,0,0,0,0,0,4,0,0,0,0,0,4,0,1,0,0,3,4,0,1,1,1,0,4,0,0,0,1,3,4,0,1,0,0,3,4,0,0,1,1,0,4,0,0,1,0,0,4,0,0,1,0,0,4,0,0,0,0,3,4,1,0,1,0,3,4,0,0,1,0,3,4,0,1,1,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

/***/ }),

/***/ "./src/assets/rpg/levels/open-country.json":
/*!*************************************************!*\
  !*** ./src/assets/rpg/levels/open-country.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, default */
/***/ (function(module) {

module.exports = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,0,0,28,20,0,33,28,0,0,20,0,0,0,0,0,0,0,32,0,0,28,3,0,28,28,0,0,3,0,0,0,0,0,0,0,33,33,0,28,20,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,3,0,0,0,0,0,3,0,28,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,28,0,0,0,3,0,0,33,0,0,20,0,28,0,0,33,20,0,27,0,0,0,20,0,28,0,0,0,20,0,0,0,0,0,20,0,0,0,0,0,20,0,0,0,28,0,20,0,0,0,28,0,20,0,0,0,0,0,20,0,0,0,0,0,3,0,0,33,0,0,20,0,0,0,28,33,20,0,0,0,28,0,20,0,0,0,0,0,20,0,0,0,0,0,20,0,0,28,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,20,0,0,0,0,0,3,0,0,33,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,20,0,0,0,0,0,20,0,0,28,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,20,0,0,0,0,0,3,0,0,33,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,20,0,0,0,0,0,20,0,0,0,0,0,20,0,28,0,0,0,20,0,27,0,0,0,3,0,0,0,0,0,3,0,0,0,28,0,3,0,0,33,28,0,20,0,0,0,0,0,0,0,28,0,0,32,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,32,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,28,20,0,0,0,33,0,20,0,0,0,33,0,20,0,0,0,33,0,20,0,0,0,33,0,20,0,0,0,33,0,20,0,0,28,33,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,30,0,0,0,1,0,29,0,0,0,0,0,29,0,0,0,0,0,30,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,29,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

/***/ }),

/***/ "./src/assets/rpg/npcs/buer-test.png":
/*!*******************************************!*\
  !*** ./src/assets/rpg/npcs/buer-test.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac332024055102f7ea5d875065c412bc.png";

/***/ }),

/***/ "./src/assets/rpg/npcs/fancy-dress-12.png":
/*!************************************************!*\
  !*** ./src/assets/rpg/npcs/fancy-dress-12.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "441dadab6498ef2d8fa4093e2856f540.png";

/***/ }),

/***/ "./src/assets/rpg/npcs/skull-crossbones.png":
/*!**************************************************!*\
  !*** ./src/assets/rpg/npcs/skull-crossbones.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7c3d0f8d55679f27d8192f0685159fe5.png";

/***/ }),

/***/ "./src/assets/rpg/npcs/ukobach-test.png":
/*!**********************************************!*\
  !*** ./src/assets/rpg/npcs/ukobach-test.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f5a11e7c4d68d88f5958783b92ff18a.png";

/***/ }),

/***/ "./src/assets/rpg/skybox/clouds1/clouds1_down.png":
/*!********************************************************!*\
  !*** ./src/assets/rpg/skybox/clouds1/clouds1_down.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "623bace6875ddccec828ff2e6445b0d6.png";

/***/ }),

/***/ "./src/assets/rpg/skybox/clouds1/clouds1_east.png":
/*!********************************************************!*\
  !*** ./src/assets/rpg/skybox/clouds1/clouds1_east.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c9603333f1bb20e82bc682ebf93b2c3b.png";

/***/ }),

/***/ "./src/assets/rpg/skybox/clouds1/clouds1_north.png":
/*!*********************************************************!*\
  !*** ./src/assets/rpg/skybox/clouds1/clouds1_north.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e3db27219b340e074890ad40b1edf7b5.png";

/***/ }),

/***/ "./src/assets/rpg/skybox/clouds1/clouds1_south.png":
/*!*********************************************************!*\
  !*** ./src/assets/rpg/skybox/clouds1/clouds1_south.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ce4eea6288cbe1a001cdb18d98fb36e.png";

/***/ }),

/***/ "./src/assets/rpg/skybox/clouds1/clouds1_up.png":
/*!******************************************************!*\
  !*** ./src/assets/rpg/skybox/clouds1/clouds1_up.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c0ffd8b850f63fa250a8bd90672f1e76.png";

/***/ }),

/***/ "./src/assets/rpg/skybox/clouds1/clouds1_west.png":
/*!********************************************************!*\
  !*** ./src/assets/rpg/skybox/clouds1/clouds1_west.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "19a3166ce9f608e48c90c1776ab76b73.png";

/***/ }),

/***/ "./src/assets/rpg/spells/beautiful-bird.jpg":
/*!**************************************************!*\
  !*** ./src/assets/rpg/spells/beautiful-bird.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d1c0024e7e070f7156beca090fba1cc8.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/4-arch.png":
/*!********************************************!*\
  !*** ./src/assets/rpg/textures/4-arch.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "470536b00b3c1e967085f98888f78a92.png";

/***/ }),

/***/ "./src/assets/rpg/textures/Antediluvian Door-alphamap.png":
/*!****************************************************************!*\
  !*** ./src/assets/rpg/textures/Antediluvian Door-alphamap.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a21bbb1e1a195700f494fae9b2e5120.png";

/***/ }),

/***/ "./src/assets/rpg/textures/Antediluvian Door.png":
/*!*******************************************************!*\
  !*** ./src/assets/rpg/textures/Antediluvian Door.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0fbeaba70c8edf5bbd146be3de477355.png";

/***/ }),

/***/ "./src/assets/rpg/textures/Asylum Cell Orange.jpg":
/*!********************************************************!*\
  !*** ./src/assets/rpg/textures/Asylum Cell Orange.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f806ae06e8cc1aeb0fa06a8b4f78554.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Battered Red Clover.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/rpg/textures/Battered Red Clover.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "62f1bd3109277b693923c1ef2f0b7f30.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Brown Qussair Granite.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/rpg/textures/Brown Qussair Granite.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "79a66bff42b37ac4a3ac1fdb26d8562e.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Carved Sandstone.jpg":
/*!******************************************************!*\
  !*** ./src/assets/rpg/textures/Carved Sandstone.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f89cb2ae34e05bdaece6280602914d47.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Cottage 1 - Door (FL 1).jpg":
/*!*************************************************************!*\
  !*** ./src/assets/rpg/textures/Cottage 1 - Door (FL 1).jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "713d69f2fa0041ab7cbdbfc62addc690.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Cottage 1 - Door 2 (FL 1).jpg":
/*!***************************************************************!*\
  !*** ./src/assets/rpg/textures/Cottage 1 - Door 2 (FL 1).jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "24f1b75791fab8bd4606fd2d3467f793.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Cottage 1 - Wall (FL 1).jpg":
/*!*************************************************************!*\
  !*** ./src/assets/rpg/textures/Cottage 1 - Wall (FL 1).jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f161941f5c7ee456332724262f0ac588.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Cottage 1 - Wall (FL 2+).jpg":
/*!**************************************************************!*\
  !*** ./src/assets/rpg/textures/Cottage 1 - Wall (FL 2+).jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "76b32f5c8a1188f493af04bc7de79601.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Cottage 1 - Window (FL 2+).jpg":
/*!****************************************************************!*\
  !*** ./src/assets/rpg/textures/Cottage 1 - Window (FL 2+).jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1afb086031f8ef08eaa7b5c71cf34286.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Cottage 1 - Window 2 (FL 2+).jpg":
/*!******************************************************************!*\
  !*** ./src/assets/rpg/textures/Cottage 1 - Window 2 (FL 2+).jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8a83fc23c7a534cbb7fccf62b35e054c.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Council Chamber.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/rpg/textures/Council Chamber.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a12e0c4e4e8f7e720cdacb9b4e32e070.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Dark Gray Marble.jpg":
/*!******************************************************!*\
  !*** ./src/assets/rpg/textures/Dark Gray Marble.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eee894e799663072a648d522d8232b03.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Dead Caves.jpg":
/*!************************************************!*\
  !*** ./src/assets/rpg/textures/Dead Caves.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "57c266c4b294f9350853ae1a67b0a983.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Fen Stone.jpg":
/*!***********************************************!*\
  !*** ./src/assets/rpg/textures/Fen Stone.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d98469dce78bfc68f773766099bb0687.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Forest Floor.jpg":
/*!**************************************************!*\
  !*** ./src/assets/rpg/textures/Forest Floor.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5e53793d5f73e1bd32c11b8ffab2975e.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Glassy Pink Marble.jpg":
/*!********************************************************!*\
  !*** ./src/assets/rpg/textures/Glassy Pink Marble.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d24a8c1cf8ca4c6e6fb42ec5d0f1e86.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Granite Wall.jpg":
/*!**************************************************!*\
  !*** ./src/assets/rpg/textures/Granite Wall.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77fa3a90c873583bf97fd03142a4f877.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Midnight Stone.jpg":
/*!****************************************************!*\
  !*** ./src/assets/rpg/textures/Midnight Stone.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "00dd4231dbca035c699c74d0a529fe54.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Moss Cushions.jpg":
/*!***************************************************!*\
  !*** ./src/assets/rpg/textures/Moss Cushions.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ae35a5dbe2c9e49415b84cf2d074ac0.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Mossy Rock.jpg":
/*!************************************************!*\
  !*** ./src/assets/rpg/textures/Mossy Rock.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "359214cc6cf396160983f7251eecada5.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Palace Floor.jpg":
/*!**************************************************!*\
  !*** ./src/assets/rpg/textures/Palace Floor.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53d683ea078a6c9d6ec87d2e24ceaadd.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Rough Orthoclase.jpg":
/*!******************************************************!*\
  !*** ./src/assets/rpg/textures/Rough Orthoclase.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d7657ae51e0b0d39e4b6768a9d931821.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Samaris Metal.jpg":
/*!***************************************************!*\
  !*** ./src/assets/rpg/textures/Samaris Metal.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1bbed623433604571aef7e604eaae358.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Samaris.jpg":
/*!*********************************************!*\
  !*** ./src/assets/rpg/textures/Samaris.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f5d3c39b37e16e83793fb12c4925bb34.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Sandy Lichen Brick.jpg":
/*!********************************************************!*\
  !*** ./src/assets/rpg/textures/Sandy Lichen Brick.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eab8ebd8b355d14427c49cebd3ee4b15.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Segmented Stone Wall.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/rpg/textures/Segmented Stone Wall.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8c7b0da7bfee04c0bad57f791b727686.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Slime Wall.jpg":
/*!************************************************!*\
  !*** ./src/assets/rpg/textures/Slime Wall.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af58f2beaea8ca45e43afce89100c6c8.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Smashed Gray Marble.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/rpg/textures/Smashed Gray Marble.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b5a15221bfac7a151dacb7bd225974d.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Smudged Dirt.jpg":
/*!**************************************************!*\
  !*** ./src/assets/rpg/textures/Smudged Dirt.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e60fd3e2f9f4215b77eb94787f11b8fb.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Straw Roof Interior.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/rpg/textures/Straw Roof Interior.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5483c730df3d9fb5674a1c693474d610.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Straw Roof.jpg":
/*!************************************************!*\
  !*** ./src/assets/rpg/textures/Straw Roof.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa4679f6f6f847730b8a50b44a66b5ce.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Weeds and Gravel.jpg":
/*!******************************************************!*\
  !*** ./src/assets/rpg/textures/Weeds and Gravel.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "822e09cc0e54dd025833a77c4239547c.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/Weedy Lawn.jpg":
/*!************************************************!*\
  !*** ./src/assets/rpg/textures/Weedy Lawn.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85665f5fcf032ceaa756cfbea5382027.jpg";

/***/ }),

/***/ "./src/assets/rpg/textures/empty.png":
/*!*******************************************!*\
  !*** ./src/assets/rpg/textures/empty.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "034bda097802307b7ae58c275b7a8453.png";

/***/ }),

/***/ "./src/assets/rpg/textures/ground_dirt_3299_9359_Small.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/rpg/textures/ground_dirt_3299_9359_Small.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2287a2fafca83db660f327db9c7a5fb.jpg";

/***/ }),

/***/ "./src/assets/rpg/ui/air-spell-tab.png":
/*!*********************************************!*\
  !*** ./src/assets/rpg/ui/air-spell-tab.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e72ab308f9cd5cd12c53cf5ce05b8aa9.png";

/***/ }),

/***/ "./src/assets/rpg/ui/charsheet-icon.png":
/*!**********************************************!*\
  !*** ./src/assets/rpg/ui/charsheet-icon.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f2ccdc84820b1258a34bd04dd987be5.png";

/***/ }),

/***/ "./src/assets/rpg/ui/earth-spell-tab.png":
/*!***********************************************!*\
  !*** ./src/assets/rpg/ui/earth-spell-tab.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48987dea849abd6a45cda40f6e50fe20.png";

/***/ }),

/***/ "./src/assets/rpg/ui/fire-spell-tab.png":
/*!**********************************************!*\
  !*** ./src/assets/rpg/ui/fire-spell-tab.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7ba28c81d772698cda8d401d91dc354.png";

/***/ }),

/***/ "./src/assets/rpg/ui/hourglass.png":
/*!*****************************************!*\
  !*** ./src/assets/rpg/ui/hourglass.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "27968389b7cf258770705c17b20b812e.png";

/***/ }),

/***/ "./src/assets/rpg/ui/nexticon-green.png":
/*!**********************************************!*\
  !*** ./src/assets/rpg/ui/nexticon-green.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cdff23d03e4986334a7c349a82f488e9.png";

/***/ }),

/***/ "./src/assets/rpg/ui/nexticon-red.png":
/*!********************************************!*\
  !*** ./src/assets/rpg/ui/nexticon-red.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a371f9c7077060a5a428c6e5592cecb1.png";

/***/ }),

/***/ "./src/assets/rpg/ui/nexticon-yellow.png":
/*!***********************************************!*\
  !*** ./src/assets/rpg/ui/nexticon-yellow.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1fb9ee8226936506466c8fa0c758d7c4.png";

/***/ }),

/***/ "./src/assets/rpg/ui/quick-items-tab.png":
/*!***********************************************!*\
  !*** ./src/assets/rpg/ui/quick-items-tab.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c1053227e3c3c31220caaca5240a19d7.png";

/***/ }),

/***/ "./src/assets/rpg/ui/status-dead.png":
/*!*******************************************!*\
  !*** ./src/assets/rpg/ui/status-dead.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a0b165da8d4c00d15d660462d3b57eb8.png";

/***/ }),

/***/ "./src/assets/rpg/ui/status-slow.png":
/*!*******************************************!*\
  !*** ./src/assets/rpg/ui/status-slow.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2a76f3cf16e95e4e9d985242beabfafb.png";

/***/ }),

/***/ "./src/assets/rpg/ui/status-torch-light.png":
/*!**************************************************!*\
  !*** ./src/assets/rpg/ui/status-torch-light.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83b2cf802066aeb9d97e58d023172f2a.png";

/***/ }),

/***/ "./src/assets/rpg/ui/water-spell-tab.png":
/*!***********************************************!*\
  !*** ./src/assets/rpg/ui/water-spell-tab.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c5e7b2ff2d830f907c7ac718ec77bb1.png";

/***/ }),

/***/ "./src/engine/Asset.ts":
/*!*****************************!*\
  !*** ./src/engine/Asset.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Asset; });
class Asset {
    constructor(filename, asset, loaded) {
        this._filename = filename;
        this._asset = asset;
        this._loaded = loaded;
    }
    get filename() { return this._filename; }
    get asset() { return this._asset; }
    get loaded() { return this._loaded; }
    set loaded(val) { this._loaded = val; }
    set(asset) { this._asset = asset; }
}


/***/ }),

/***/ "./src/engine/Game.ts":
/*!****************************!*\
  !*** ./src/engine/Game.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/Event */ "./src/engine/util/Event.ts");

class Game {
    constructor(rootGameObject, io, mainLoop) {
        this._rootGameObject = rootGameObject;
        this._io = io;
        this._mainLoop = mainLoop;
    }
    create() {
        if (this._created)
            throw new Error("Cannot create Game: already created");
        this._io.create();
        this._rootGameObject.doCreate(this._io.interfaces);
        this._mainLoop.setBegin(this._begin.bind(this))
            .setUpdate(this._update.bind(this))
            .setDraw(this._draw.bind(this))
            .setEnd(this._end.bind(this));
        this._created = true;
    }
    start() {
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onStart);
        this._mainLoop.start();
    }
    stop() {
        this._mainLoop.stop();
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onStop);
    }
    _begin(timestamp, delta) {
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onBeginStart, timestamp, delta);
        this._rootGameObject.doBegin(this._io.interfaces);
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onBeginEnd);
    }
    _update(delta) {
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onUpdateStart, delta);
        this._rootGameObject.doUpdate(this._io.interfaces);
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onUpdateEnd);
    }
    _draw(interpolationPercentage) {
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onDrawStart);
        this._rootGameObject.doDraw(null);
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onDrawEnd);
    }
    _end(fps, panic) {
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onEndStart, fps);
        this._rootGameObject.doEnd(this._io.interfaces);
        _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this._io.onEndEnd);
    }
}


/***/ }),

/***/ "./src/engine/GameObject.ts":
/*!**********************************!*\
  !*** ./src/engine/GameObject.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transform */ "./src/engine/Transform.ts");
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/Event */ "./src/engine/util/Event.ts");



class GameObject {
    constructor(position, bounds) {
        this._children = [];
        this._assets = [];
        this._parent = null;
        this._created = false;
        this._runLoad = false;
        this._active = true;
        this._interactable = true;
        this._ranBegin = false;
        this._name = null;
        this._visible = true;
        this._opacity = 1;
        this._ignoreDrawCull = false;
        this._precreate = false;
        this._onDestroy = new _util_Event__WEBPACK_IMPORTED_MODULE_2__["default"]();
        if (position instanceof _transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"])
            this._transform = new _Transform__WEBPACK_IMPORTED_MODULE_1__["default"](position, bounds);
        else
            this._transform = position;
        if (this._transform)
            this._transform.setGameObject(this);
    }
    get parent() { return this._parent; }
    set parent(val) { this._parent = val; }
    get transform() { return this._transform; }
    get name() { return this._name; }
    set name(val) { this._name = val; }
    get loaded() {
        return (this.runLoad && this.assets.every(x => x.loaded === true));
    }
    get subtreeLoaded() {
        return (this.loaded && (this.children.every(x => x.subtreeLoaded)));
    }
    get runLoad() { return this._runLoad; }
    get created() { return this._created; }
    get assets() { return this._assets; }
    get children() { return this._children; }
    set active(val) { this._active = val; }
    get active() { return this._active; }
    set interactable(val) { this._interactable = val; }
    get interactable() {
        if (!this._interactable)
            return false;
        else if (this.parent)
            return this.parent.interactable;
        return true;
    }
    set visible(val) {
        if (this._visible !== val) {
            if (!val)
                this.requestDraw();
            this._visible = val;
            if (val)
                this.requestDraw();
        }
    }
    get visible() { return this._visible; }
    get opacity() { return this._opacity; }
    set opacity(val) { this._opacity = val; }
    get onDestroy() { return this._onDestroy; }
    get precreate() { return this._precreate; }
    set precreate(val) { this._precreate = val; }
    addChild(child) {
        child.parent = this;
        this.children.push(child);
        return child;
    }
    getAsset(filename) {
        let assetsWithFilename = this.assets.filter(x => x.filename === filename);
        if (assetsWithFilename.length > 0)
            return assetsWithFilename[0].asset;
        throw new Error("No asset found with that name on gameobject");
    }
    doLoad(interfaces) {
        if (!(this._runLoad))
            this._runLoad = this.load(interfaces);
        this.children.forEach(x => x.doLoad(interfaces));
    }
    load(interfaces) { return true; }
    addAsset(asset) {
        if (asset === null)
            return null;
        if (this.assets.filter(x => x.filename === asset.filename).length === 0)
            this.assets.push(asset);
        return asset;
    }
    interfaces(interfaces) { return interfaces; }
    doCreate(interfaces) {
        if (!this.runLoad)
            this.doLoad(interfaces);
        if (this.loaded) {
            let createdThisRun = false;
            if (!this.created) {
                createdThisRun = true;
                this.create(interfaces);
            }
            this.children.forEach(x => x.doCreate(this.interfaces(interfaces)));
            this._created = true;
            if (createdThisRun)
                this.afterCreate();
            this.requestDraw();
        }
    }
    create(interfaces) { }
    afterCreate() { }
    doBegin(interfaces) {
        if (this.active) {
            if (this.created)
                this._runBegin(interfaces);
            else {
                this.doCreate(interfaces);
                if (this.created)
                    this._runBegin(interfaces);
            }
        }
        else if (this.precreate) {
            this.doCreate(interfaces);
        }
    }
    _runBegin(interfaces) {
        this.begin(interfaces);
        this._ranBegin = true;
        this.children.forEach(x => x.doBegin(this.interfaces(interfaces)));
    }
    begin(interfaces) { }
    doUpdate(interfaces) {
        if (this.transform)
            this.transform.update();
        if (this._ranBegin) {
            for (let i = this._children.length - 1; i >= 0; i--)
                if (this._children[i])
                    this._children[i].doUpdate(this.interfaces(interfaces));
            this.update(interfaces);
        }
    }
    update(interfaces) { }
    doDraw(context2D, webGL) {
        if ((this.created) && (this.visible) && (this.transform) && (this.transform.hasPosition()) && (this.opacity > 0)) {
            let rotated = false;
            if (this.transform.rotation % 2 * Math.PI !== 0) {
                rotated = true;
                let pos = this.transform.getDrawPosition(0.5, 0.5);
                context2D.save();
                context2D.translate(pos.x, pos.y);
                context2D.rotate(this.transform.rotation);
                context2D.translate(-pos.x, -pos.y);
            }
            let startingOpacity = 0;
            if (context2D)
                startingOpacity = this._setDrawingOpacity(context2D);
            this.draw(context2D, webGL);
            this.children.forEach(x => x.doDraw(context2D, webGL));
            if (context2D)
                if (startingOpacity !== undefined)
                    context2D.globalAlpha = startingOpacity;
            if (rotated) {
                context2D.restore();
            }
        }
    }
    _setDrawingOpacity(context2D) {
        if (this.opacity !== 1) {
            let original = context2D.globalAlpha;
            context2D.globalAlpha = context2D.globalAlpha * this.opacity;
            return original;
        }
        return undefined;
    }
    draw(context2D, webGL) { }
    doEnd(interfaces) {
        if (this._ranBegin) {
            this.end(interfaces);
            this.children.forEach(x => x.doEnd(this.interfaces(interfaces)));
            this._ranBegin = false;
        }
    }
    end(interfaces) { }
    requestDraw() {
        if (this.visible)
            if (this.parent)
                if (!(this.drawCulled))
                    this.parent.requestDraw();
    }
    get drawCulled() {
        if (this.ignoreDrawCull)
            return false;
        if ((this.transform) && (this.parent) && (this.parent.created) && (this.parent.transform))
            return !(_Transform__WEBPACK_IMPORTED_MODULE_1__["default"].overlaps(this.transform, this.parent.transform));
        return false;
    }
    get ignoreDrawCull() { return this._ignoreDrawCull; }
    set ignoreDrawCull(val) { this._ignoreDrawCull = val; }
    requestRemoval() { this.parent.removeChild(this); }
    removeChild(child) {
        let index = this.children.indexOf(child);
        if (index !== -1)
            this.children.splice(index, 1);
        child.doDestroy();
    }
    doDestroy() {
        this.children.forEach(c => c.doDestroy());
        if (this.transform)
            this.transform.destroy();
        this.destroy();
        this._onDestroy.call();
    }
    destroy() { }
}


/***/ }),

/***/ "./src/engine/Transform.ts":
/*!*********************************!*\
  !*** ./src/engine/Transform.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transform; });
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _util_PolyShape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/PolyShape */ "./src/engine/util/PolyShape.ts");


class Transform {
    constructor(position, bounds) {
        this._fixed = true;
        this._rotation = 0;
        this._position = position;
        this._bounds = bounds;
        if (this.position)
            this._position.transform = this;
        if (this.bounds)
            this._bounds.transform = this;
        if ((!this.bounds) && (this.position))
            throw new Error("A game object with a non-null Position must have a non-null Bounds");
    }
    get gameObject() { return this._gameObject; }
    set gameObject(val) { this._gameObject = val; }
    get position() { return this._position; }
    get bounds() { return this._bounds; }
    get fixed() { return this._fixed; }
    set fixed(val) { this._fixed = val; }
    get positioningDirty() { return this._positioningDirty; }
    positioningIsDirty() { this._positioningDirty = true; }
    get parent() {
        if (this.gameObject)
            if (this.gameObject.parent)
                return this.gameObject.parent.transform;
        return null;
    }
    get rotation() { return this._rotation; }
    set rotation(val) { this._rotation = val; }
    getCanonicalPosition(point, y) {
        if (this.position) {
            if (!point)
                return this.position.absolutePositionTopLeft();
            else {
                let tl = this.position.absolutePositionTopLeft();
                let dim = this.bounds.dimension;
                if (point instanceof _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"])
                    return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](tl.x + dim.width * point.x, tl.y + dim.height * point.y);
                else
                    return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](tl.x + dim.width * point, tl.y + dim.height * y);
            }
        }
        return null;
    }
    getDrawPosition(point, y) {
        if (this.position) {
            if (!point)
                return this.position.drawPositionTopLeft();
            else {
                let tl = this.position.drawPositionTopLeft();
                let dim = this.bounds.dimension;
                if (point instanceof _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"])
                    return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](tl.x + dim.width * point.x, tl.y + dim.height * point.y);
                else
                    return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](tl.x + dim.width * point, tl.y + dim.height * y);
            }
        }
        return null;
    }
    getDimension() { return this.bounds.dimension; }
    setGameObject(val) { this.gameObject = val; }
    hasPosition() { return this.position !== null; }
    update() {
        if ((this.positioningDirty) || (!(this.fixed))) {
            if (this.position)
                this.position.checkForUpdatedTranslations();
            if (this.bounds)
                this.bounds.checkForUpdatedDimensions();
            this._positioningDirty = false;
        }
    }
    recalculate(excludeDrawCache) {
        if (this._position) {
            this._position.absoluteCacheDirty = true;
            if (!(excludeDrawCache))
                this._position.drawCacheDirty = true;
        }
        if (this._bounds)
            this._bounds.dirty = true;
        if (this.gameObject.children.length === 0) {
            if (!(excludeDrawCache))
                this.gameObject.requestDraw();
        }
        else
            this.gameObject.children.forEach(child => { if (child.transform)
                child.transform.recalculate(excludeDrawCache); });
    }
    static overlaps(a, b) {
        let aPos;
        let bPos;
        if (a.position)
            aPos = a.getCanonicalPosition();
        else
            aPos = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        if (b.position)
            bPos = b.getCanonicalPosition();
        else
            bPos = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        let aDim = a.getDimension();
        let bDim = b.getDimension();
        let x = false;
        let y = false;
        if ((aPos.x >= bPos.x) && (aPos.x <= bPos.x + bDim.width))
            x = true;
        if ((aPos.x <= bPos.x) && (aPos.x + aDim.width >= bPos.x))
            x = true;
        if ((aPos.y >= bPos.y) && (aPos.y <= bPos.y + bDim.height))
            y = true;
        if ((aPos.y <= bPos.y) && (aPos.y + aDim.height >= bPos.y))
            y = true;
        return x && y;
    }
    static contains(a, b) {
        let aPos = a.getCanonicalPosition();
        let bPos = b.getCanonicalPosition();
        let aDim = a.getDimension();
        let bDim = b.getDimension();
        let x = false;
        let y = false;
        if ((bPos.x >= aPos.x) && (bPos.x + bDim.width <= aPos.x + aDim.width))
            x = true;
        if ((bPos.y >= aPos.y) && (bPos.y + bDim.width <= aPos.y + aDim.height))
            y = true;
        return x && y;
    }
    containsPoint(point) {
        let offset = this.position.absolutePositionTopLeft();
        let dimension = this.bounds.dimension;
        return Transform.inDimension(point, dimension, offset);
    }
    destroy() {
        if (this.bounds)
            this.bounds.destroy();
        if (this.position)
            this.position.destroy();
    }
    static inDimension(point, dimension, offset) {
        if ((point.x >= offset.x) && (point.y >= offset.y))
            if ((point.x <= offset.x + dimension.width) && (point.y <= offset.y + dimension.height))
                return true;
        return false;
    }
    contextualisePolyshape(polyshape) {
        let pos = this.getCanonicalPosition();
        let dim = this.getDimension();
        let points = [];
        let x = true;
        polyshape.points.forEach(p => {
            points.push(new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](p.x * dim.width + pos.x, p.y * dim.height + pos.y));
        });
        let p = polyshape.clone(points);
        return p;
    }
    getCanonicalRect() {
        let pos = this.getCanonicalPosition();
        let dim = this.getDimension();
        return new _util_PolyShape__WEBPACK_IMPORTED_MODULE_1__["PolyRect"]([new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](pos.x, pos.y), new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](pos.x + dim.width, pos.y), new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](pos.x + dim.width, pos.y + dim.height), new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](pos.x, pos.y + dim.height)]);
    }
}


/***/ }),

/***/ "./src/engine/TreeUtils.ts":
/*!*********************************!*\
  !*** ./src/engine/TreeUtils.ts ***!
  \*********************************/
/*! exports provided: TreeUtils, SubtreeLoadStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeUtils", function() { return TreeUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtreeLoadStats", function() { return SubtreeLoadStats; });
class TreeUtils {
    static findChildrenOfType(parent, type, recursive) {
        recursive = recursive || false;
        let results = [];
        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i] instanceof type)
                results.push(parent.children[i]);
            if (recursive) {
                let childResult = TreeUtils.findChildrenOfType(parent.children[i], type, recursive);
                results = results.concat(childResult);
            }
        }
        return results;
    }
    static findChildrenWithName(parent, name, recursive) {
        recursive = recursive || false;
        let results = [];
        for (let i = 0; i < parent.children.length; i++) {
            if ((parent.children[i].name) && (parent.children[i].name === name))
                results.push(parent.children[i]);
            if (recursive) {
                let childResult = TreeUtils.findChildrenWithName(parent.children[i], name, recursive);
                results = results.concat(childResult);
            }
        }
        return results;
    }
    static moveChildToFirst(parent, child) {
        parent.children.splice(parent.children.indexOf(child), 1);
        parent.children.unshift(child);
    }
    static moveChildToLast(parent, child) {
        parent.children.splice(parent.children.indexOf(child), 1);
        parent.children.push(child);
    }
    static subtreeLoadStats(root) {
        let r = TreeUtils._subtreeLoadStatsInner(root);
        return new SubtreeLoadStats(r[0], r[1], r[2], r[3]);
    }
    static _subtreeLoadStatsInner(root) {
        let total = 1;
        let loaded = root.loaded ? 1 : 0;
        let assetsTotal = root.assets.length;
        let assetsLoaded = root.assets.filter(a => a.loaded).length;
        root.children.forEach(c => {
            let r = TreeUtils._subtreeLoadStatsInner(c);
            total += r[0];
            loaded += r[1];
            assetsTotal += r[2];
            assetsLoaded += r[3];
        });
        return [total, loaded, assetsTotal, assetsLoaded];
    }
}
class SubtreeLoadStats {
    constructor(total, loaded, assetsTotal, assetsLoaded) {
        this.total = total;
        this.loaded = loaded;
        this.assetsTotal = assetsTotal;
        this.assetsLoaded = assetsLoaded;
    }
    get proportion() { return this.loaded / this.total; }
    get assetsProportion() { return this.assetsLoaded / this.assetsTotal; }
}


/***/ }),

/***/ "./src/engine/gameobject/Clip.ts":
/*!***************************************!*\
  !*** ./src/engine/gameobject/Clip.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clip; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/GameObject.ts");

class Clip extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, setClip) {
        super(position, bounds);
        this._setClip = setClip;
    }
    set setClip(val) { this._setClip = val; }
    doDraw(context2D) {
        context2D.save();
        this._setClip(context2D);
        super.doDraw(context2D);
        context2D.restore();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/Component.ts":
/*!********************************************!*\
  !*** ./src/engine/gameobject/Component.ts ***!
  \********************************************/
/*! exports provided: Component, ComponentListener, ComponentController, ComponentInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentListener", function() { return ComponentListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentController", function() { return ComponentController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentInterface", function() { return ComponentInterface; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Event */ "./src/engine/util/Event.ts");


class Component extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, listener, controller) {
        super(position, bounds);
        this._listener = listener;
        this._controller = controller;
    }
    get typeName() { return "Component"; }
    afterCreate() { this.link(this.controller); }
    get listener() { return this._listener; }
    get controller() { return this._controller; }
    destroy() {
        super.destroy();
        this.unlink(this.controller);
    }
    onDestroyFromController() {
        this.requestRemoval();
    }
    link(controller) {
        controller.onDestroy.push(this.destroy.bind(this), this);
    }
    unlink(controller) {
        controller.onDestroy.unregister(this);
    }
    static newInterface() { return new ComponentInterface(new ComponentListener(), new ComponentController()); }
}
class ComponentListener {
}
class ComponentController {
    constructor() {
        this._counter = 0;
        this._onDestroy = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    get onDestroy() { return this._onDestroy; }
    next() {
        return {
            done: false,
            value: this.onDestroy
        };
    }
}
class ComponentInterface {
    constructor(listener, controller) {
        this._listener = listener;
        this._controller = controller;
    }
    get listener() { return this._listener; }
    get controller() { return this._controller; }
}


/***/ }),

/***/ "./src/engine/gameobject/Frame.ts":
/*!****************************************!*\
  !*** ./src/engine/gameobject/Frame.ts ***!
  \****************************************/
/*! exports provided: Frame, FrameListener, FrameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameListener", function() { return FrameListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameController", function() { return FrameController; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/engine/gameobject/Component.ts");
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Event */ "./src/engine/util/Event.ts");


class Frame extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(position, bounds, listener, controller) {
        super(position, bounds, listener, controller);
        this._childFrameControllers = [];
        this._isOpen = false;
        this._awaitingOpen = false;
        this.visible = false;
        this.active = false;
    }
    get awaitingOpen() { return this._awaitingOpen; }
    get isOpen() { return this._isOpen; }
    set isOpen(val) { this._isOpen = val; }
    addFrame(frame) {
        this.onAddFrame(frame);
        return frame;
    }
    onAddFrame(frame) {
        this._childFrameControllers.push(frame.controller);
    }
    switchToFrame(frameController) {
        _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(frameController.onOpen);
    }
    afterCreate() {
        super.afterCreate();
        if (this.awaitingOpen) {
            this.open();
            this._awaitingOpen = false;
        }
    }
    onOpen(...args) { }
    open(...args) {
        this.active = true;
        this.visible = true;
        if (this.created) {
            this.onOpen(...args);
            _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.listener.onOpen, ...args);
            this.isOpen = true;
        }
        else
            this._awaitingOpen = true;
    }
    ready(...args) {
        this.active = true;
        this.visible = true;
        if (this.created) {
            this.onReady(...args);
            _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.listener.onReady, ...args);
            this.isOpen = true;
        }
        else
            this._awaitingOpen = true;
    }
    onReady(...args) { }
    onClosing(...args) { this.close(); }
    onClose(...args) { }
    close(...args) {
        if ((this.isOpen) && (this.created)) {
            this.isOpen = false;
            this.onClose(...args);
            this.active = false;
            this.visible = false;
            _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.listener.onClose, ...args);
        }
    }
    link(controller) {
        super.link(controller);
        controller.onOpen.push(this.open.bind(this), this);
        controller.onReady.push(this.onReady.bind(this), this);
        controller.onClosing.push(this.onClosing.bind(this), this);
        controller.onClose.push(this.close.bind(this), this);
        controller.onAddFrame.push(this.onAddFrame.bind(this), this);
    }
    unlink(controller) {
        super.unlink(controller);
        controller.onOpen.unregister(this);
        controller.onReady.unregister(this);
        controller.onClosing.unregister(this);
        controller.onClose.unregister(this);
        controller.onAddFrame.unregister(this);
    }
    get typeName() { return "Frame"; }
    static newInterface() { return new _Component__WEBPACK_IMPORTED_MODULE_0__["ComponentInterface"](new FrameListener(), new FrameController()); }
}
class FrameListener extends _Component__WEBPACK_IMPORTED_MODULE_0__["ComponentListener"] {
    constructor() {
        super(...arguments);
        this._onOpen = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onReady = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onClosing = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onClose = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    get onOpen() { return this._onOpen; }
    get onReady() { return this._onReady; }
    get onClosing() { return this._onClosing; }
    get onClose() { return this._onClose; }
}
class FrameController extends _Component__WEBPACK_IMPORTED_MODULE_0__["ComponentController"] {
    constructor() {
        super(...arguments);
        this._onOpen = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onReady = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onClosing = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onClose = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onAddFrame = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    get onOpen() { return this._onOpen; }
    get onReady() { return this._onReady; }
    get onClosing() { return this._onClosing; }
    get onClose() { return this._onClose; }
    get onAddFrame() { return this._onAddFrame; }
}


/***/ }),

/***/ "./src/engine/gameobject/PolygonCollision.ts":
/*!***************************************************!*\
  !*** ./src/engine/gameobject/PolygonCollision.ts ***!
  \***************************************************/
/*! exports provided: Intersection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intersection", function() { return Intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolygonCollision; });
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Point */ "./src/engine/util/Point.ts");

class Intersection {
    get depth() { return this._depth; }
    get proportionOfDispacementIntersecting() { return this._proportionOfDisplacementIntersecting; }
    set depth(val) { this._depth = val; }
    set proportionOfDispacementIntersecting(val) { this._proportionOfDisplacementIntersecting = val; }
    constructor(point, edge) {
        this.point = point;
        this.edge = edge;
    }
}
class PolygonCollision {
    constructor(polygon1, polygon2) {
        this._polygon1 = polygon1;
        this._polygon2 = polygon2;
    }
    intersects() {
        return this._polygon1.intersects(this._polygon2);
    }
    getProjection() {
        let axes = new Set();
        this._polygon1.edges.forEach(e => axes.add(e.vector.rotate(Math.PI / 2).normalised));
        this._polygon2.edges.forEach(e => {
            let newAxis = e.vector.rotate(Math.PI / 2).normalised;
            let duplicate = false;
            axes.forEach(a => {
                if (!(_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(a, newAxis)))
                    duplicate = true;
            });
            if (!(duplicate))
                axes.add(newAxis);
        });
        let p1MaxDisplacementPerAxis = [];
        let p1MinDisplacementPerAxis = [];
        let p2MaxDisplacementPerAxis = [];
        let p2MinDisplacementPerAxis = [];
        axes.forEach((a, i) => {
            let p1 = this._polygon1.points.map(x => x.projectionIn(a));
            let p2 = this._polygon2.points.map(x => x.projectionIn(a));
            p1MaxDisplacementPerAxis.push(Math.max(...p1));
            p1MinDisplacementPerAxis.push(Math.min(...p1));
            p2MaxDisplacementPerAxis.push(Math.max(...p2));
            p2MinDisplacementPerAxis.push(Math.min(...p2));
            if (!((p1MaxDisplacementPerAxis[i] > p2MinDisplacementPerAxis[i]) && (p1MinDisplacementPerAxis[i] < p2MaxDisplacementPerAxis[i])))
                return null;
        });
        let axis;
        let value = undefined;
        axes.forEach((ax, i) => {
            let a = p1MaxDisplacementPerAxis[i] - p2MinDisplacementPerAxis[i];
            let b = p2MaxDisplacementPerAxis[i] - p1MinDisplacementPerAxis[i];
            if (Math.abs(a) <= Math.abs(b)) {
                if ((value === undefined) || value > Math.abs(a)) {
                    axis = _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(axes[i]);
                    value = Math.abs(a);
                }
            }
            else {
                if ((value === undefined) || value > Math.abs(b)) {
                    axis = axes[i];
                    value = Math.abs(b);
                }
            }
        });
        if (value)
            return _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(axis, value);
        return null;
    }
    getIntersection(polygon1Displacement) {
        if (polygon1Displacement.isZero)
            return null;
        let leadingPoint = this._polygon1.maximumProjectionOnVector(polygon1Displacement);
        let start = _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(leadingPoint, polygon1Displacement);
        let intersections = this._polygon2.intersectionsWithEdge(start, leadingPoint);
        let smallestDistance = undefined;
        let firstIntersection;
        intersections.forEach(i => {
            let d = _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(i.point, start).magnitude;
            if ((smallestDistance === undefined) || (d < smallestDistance)) {
                smallestDistance = d;
                firstIntersection = i;
            }
        });
        if (firstIntersection) {
            firstIntersection.depth = _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(leadingPoint, firstIntersection.point).magnitude;
            firstIntersection.proportionOfDispacementIntersecting = firstIntersection.depth / polygon1Displacement.magnitude;
            let ev = firstIntersection.edge.vector;
            firstIntersection.angle = _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].angleBetween(polygon1Displacement, ev);
            return firstIntersection;
        }
        return null;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ThreeBuffer.ts":
/*!**********************************************!*\
  !*** ./src/engine/gameobject/ThreeBuffer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThreeBuffer; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");


class ThreeBuffer extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._fieldOfView = 75;
        this._nearClip = 0.1;
        this._farClip = 1000;
        this._hasAlphaChanel = false;
        this._cameraAspectFunction = (width, height) => width / height;
    }
    get scene() { return this._scene; }
    get camera() { return this._camera; }
    get canvas() { return this._canvas; }
    get renderer() { return this._renderer; }
    get fieldOfView() { return this._fieldOfView; }
    set fieldOfView(val) {
        this._fieldOfView = val;
        this._cameraUpdateRequired = true;
    }
    get nearClip() { return this._nearClip; }
    set nearClip(val) {
        this._nearClip = val;
        this._cameraUpdateRequired = true;
    }
    get farClip() { return this._farClip; }
    set farClip(val) {
        this._farClip = val;
        this._cameraUpdateRequired = true;
    }
    get cameraAspectFunction() { return this._cameraAspectFunction; }
    set cameraAspectFunction(val) {
        this._cameraAspectFunction = val;
        this._cameraUpdateRequired = true;
    }
    create() {
        this._scene = new THREE.Scene();
        this._renderer = new THREE.WebGLRenderer({ alpha: this._hasAlphaChanel });
        this._camera = new THREE.PerspectiveCamera(this._fieldOfView, 1, this._nearClip, this._farClip);
        this._scene.add(this._camera);
        this.resizeCanvas(this.transform.bounds.dimension, window.devicePixelRatio);
        this._canvas = this._renderer.domElement;
        this.cameraUpdate();
    }
    interfaces(interfaces) {
        interfaces["threeParent"] = this.scene;
        return interfaces;
    }
    cameraUpdate() {
        this._camera.aspect = this.cameraAspectFunction(this.transform.bounds.dimension.width, this.transform.bounds.dimension.height);
        this._camera.fov = this._fieldOfView;
        this._camera.nearClip = this._nearClip;
        this._camera.farClip = this._farClip;
        this._camera.updateProjectionMatrix();
        this._cameraUpdateRequired = false;
    }
    resizeCanvas(dim, devicePixelRatio) {
        this._pixelRatio = devicePixelRatio;
        this._renderer.setSize(dim.width * this._pixelRatio, dim.height * this._pixelRatio);
        this._oldDimension = new _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"](dim.width, dim.height);
    }
    _hasResized() {
        let dim = this.transform.bounds.dimension;
        return ((this._oldDimension.width !== dim.width) ||
            (this._oldDimension.height !== dim.height));
    }
    _hasDevicePixelRatioChanged() {
        return this._pixelRatio !== window.devicePixelRatio;
    }
    begin() {
        if (this._hasResized() || this._hasDevicePixelRatioChanged()) {
            this.resizeCanvas(this.transform.bounds.dimension, window.devicePixelRatio);
            this.cameraUpdate();
            this.requestDraw();
        }
        else if (this._cameraUpdateRequired) {
            this.cameraUpdate();
            this.requestDraw();
        }
        else if (this.debugDisableCache)
            this.requestDraw();
    }
    draw(context2D) {
        if (context2D) {
            let pos = this.transform.position.drawPositionTopLeft();
            let dim = this.transform.bounds.dimension;
            if (this._drawRequested) {
                this._renderer.render(this._scene, this._camera);
                this._drawRequested = false;
            }
            context2D.drawImage(this._canvas, 0, 0, Math.round(dim.width) * this._pixelRatio, Math.round(dim.height) * this._pixelRatio, Math.round(pos.x), Math.round(pos.y), Math.round(dim.width), Math.round(dim.height));
        }
    }
    requestDraw() {
        this._drawRequested = true;
        super.requestDraw();
    }
    destroy() {
        super.destroy();
        this.scene.dispose();
        this.renderer.dispose();
    }
    disposeNode(node) {
        if (node instanceof THREE.Mesh) {
            if (node.geometry) {
                node.geometry.dispose();
            }
            if (node.material) {
                if (node.material instanceof THREE.MeshFaceMaterial) {
                    node.material.materials.forEach((mtrl, idx) => {
                        if (mtrl.map)
                            mtrl.map.dispose();
                        if (mtrl.lightMap)
                            mtrl.lightMap.dispose();
                        if (mtrl.bumpMap)
                            mtrl.bumpMap.dispose();
                        if (mtrl.normalMap)
                            mtrl.normalMap.dispose();
                        if (mtrl.specularMap)
                            mtrl.specularMap.dispose();
                        if (mtrl.envMap)
                            mtrl.envMap.dispose();
                        mtrl.dispose();
                    });
                }
                else {
                    if (node.material.map)
                        node.material.map.dispose();
                    if (node.material.lightMap)
                        node.material.lightMap.dispose();
                    if (node.material.bumpMap)
                        node.material.bumpMap.dispose();
                    if (node.material.normalMap)
                        node.material.normalMap.dispose();
                    if (node.material.specularMap)
                        node.material.specularMap.dispose();
                    if (node.material.envMap)
                        node.material.envMap.dispose();
                    node.material.dispose();
                }
            }
        }
    }
    disposeHierarchy(node, callback) {
        for (var i = node.children.length - 1; i >= 0; i--) {
            var child = node.children[i];
            this.disposeHierarchy(child, callback);
            callback(child);
        }
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ThreeMesh.ts":
/*!********************************************!*\
  !*** ./src/engine/gameobject/ThreeMesh.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThreeMesh; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/GameObject.ts");

class ThreeMesh extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get mesh() { return this._mesh; }
    set mesh(val) {
        this._newMesh = val;
        this._meshUpdated = true;
    }
    constructor(mesh, material) {
        super(null);
        if (material)
            this._mesh = new THREE.Mesh(mesh, material);
        else
            this._mesh = mesh;
    }
    create({ threeParent: threeParent }) {
        threeParent.add(this._mesh);
    }
    update({ threeParent: threeParent }) {
        if (this._meshUpdated) {
            threeParent.remove(this.mesh);
            this._mesh = this._newMesh;
            this._newMesh = null;
            threeParent.add(this._mesh);
            this._meshUpdated = false;
        }
    }
    interfaces(interfaces) {
        interfaces["threeParent"] = this.mesh;
        return interfaces;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/Timer.ts":
/*!****************************************!*\
  !*** ./src/engine/gameobject/Timer.ts ***!
  \****************************************/
/*! exports provided: Timer, TimeOutCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeOutCallback", function() { return TimeOutCallback; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/GameObject.ts");

class Timer extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(null, null);
        this._time = 0;
        this._startTime = 0;
        this._previousTime = 0;
        this._timeOutCallbacks = [];
        this._running = false;
    }
    get typeName() { return "Timer"; }
    get time() { return this._time; }
    set time(val) { this._time = val; }
    get running() { return this._running; }
    addTimeOutCallback(time, callback) {
        this._timeOutCallbacks.push(new TimeOutCallback(time, callback));
    }
    start() {
        this._running = true;
        this._startTime = Date.now();
        this._previousTime = 0;
        this.time = 0;
    }
    pause() {
        this._previousTime = this.time;
        this._running = false;
    }
    resume() {
        this._startTime = Date.now();
        this._running = true;
    }
    begin({ timing: t }) {
        if (this.running) {
            this.time = (Date.now() - this._startTime) + this._previousTime;
            this._timeOutCallbacks.forEach(x => {
                if (this.time > x.time)
                    x.callback();
            });
        }
    }
}
class TimeOutCallback {
    constructor(time, callback) {
        this.time = time;
        this.callback = callback;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/anim/Animation.ts":
/*!*************************************************!*\
  !*** ./src/engine/gameobject/anim/Animation.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animation; });
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");


class Animation extends _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(null, null);
        this._done = false;
        this._onComplete = new _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._onStep = new _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    get done() { return this._done; }
    get onComplete() { return this._onComplete; }
    set onComplete(val) { this._onComplete = val; }
    get onStep() { return this._onStep; }
    set onStep(val) { this._onStep = val; }
    update(...args) {
        if (!this.done)
            this.onStep.call();
    }
    complete() {
        this._done = true;
        this.onComplete.call();
        this.requestRemoval();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/anim/Tween.ts":
/*!*********************************************!*\
  !*** ./src/engine/gameobject/anim/Tween.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tween; });
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ "./src/engine/gameobject/anim/Animation.ts");

class Tween extends _Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(object, variableName, targetValue, time) {
        super();
        this._requestDrawOnChange = true;
        if (object) {
            this._object = object;
            this._startValue = object[variableName];
            this._variableName = variableName;
            this._targetValue = targetValue;
            this._time = time;
            this._timeRemaining = time;
        }
    }
    get object() { return this._object; }
    get variableName() { return this._variableName; }
    get startValue() { return this._startValue; }
    get targetValue() { return this._targetValue; }
    get currentValue() { return this.object[this.variableName]; }
    set currentValue(val) { this.object[this.variableName] = val; }
    get time() { return this._time; }
    get timeRemaining() { return this._timeRemaining; }
    get requestDrawOnChange() { return this._requestDrawOnChange; }
    set requestDrawOnChange(val) { this._requestDrawOnChange = val; }
    begin({ timing: t }) {
        if (!this.done) {
            if (this.requestDrawOnChange)
                this.requestDraw();
            this._timeRemaining -= t.delta;
            if (this._timeRemaining <= 0) {
                this.currentValue = this.targetValue;
                this.complete();
            }
            else {
                this.increment(t.delta);
                if (this.reachedTarget)
                    this.complete();
            }
        }
    }
}


/***/ }),

/***/ "./src/engine/gameobject/anim/ValueTween.ts":
/*!**************************************************!*\
  !*** ./src/engine/gameobject/anim/ValueTween.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValueTween; });
/* harmony import */ var _Tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tween */ "./src/engine/gameobject/anim/Tween.ts");

class ValueTween extends _Tween__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get rate() {
        if (this.timeRemaining <= 0)
            return 0;
        return ((this.targetValue - this.currentValue) / this.timeRemaining);
    }
    increment(delta) {
        let newVal = this.currentValue + (this.rate * delta);
        if (this.currentValue < this.targetValue)
            this.currentValue = Math.min(newVal, this.targetValue);
        else
            this.currentValue = Math.max(newVal, this.targetValue);
    }
    get reachedTarget() { return this.currentValue === this.targetValue; }
}


/***/ }),

/***/ "./src/engine/gameobject/anim/Wait.ts":
/*!********************************************!*\
  !*** ./src/engine/gameobject/anim/Wait.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wait; });
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ "./src/engine/gameobject/anim/Animation.ts");

class Wait extends _Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get typeName() { return "Wait"; }
    constructor(time) {
        super();
        this._time = time;
        this._timeRemaining = time;
    }
    get time() { return this._time; }
    get timeRemaining() { return this._timeRemaining; }
    update({ timing: t }) {
        super.update();
        this._timeRemaining -= t.delta;
        if (this.timeRemaining <= 0)
            this.complete();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/anim/WrappingValueTween.ts":
/*!**********************************************************!*\
  !*** ./src/engine/gameobject/anim/WrappingValueTween.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrappingValueTween; });
/* harmony import */ var _ValueTween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueTween */ "./src/engine/gameobject/anim/ValueTween.ts");

class WrappingValueTween extends _ValueTween__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(object, variableName, targetValue, time, wrapValue) {
        super(object, variableName, targetValue, time);
        this._wrapValue = wrapValue;
        let wrapping = Math.abs(this.startValue - this.targetValue) > this._wrapValue / 2;
        let upwards = this.startValue < this.targetValue;
        this._directionIsUp = ((upwards && !wrapping) || (!upwards && wrapping));
    }
    shortestDistance() {
        if (this.targetValue === this.currentValue)
            return 0;
        if (this._directionIsUp && (this.targetValue < this.currentValue))
            return this.targetValue + this._wrapValue - this.currentValue;
        if (this._directionIsUp && (this.targetValue > this.currentValue))
            return this.targetValue - this.currentValue;
        if (!this._directionIsUp && (this.targetValue < this.currentValue))
            return this.targetValue - this.currentValue;
        if (!this._directionIsUp && (this.targetValue > this.currentValue))
            return this.targetValue - (this.currentValue + this._wrapValue);
    }
    get rate() {
        if (this.timeRemaining <= 0)
            return 0;
        return (this.shortestDistance() / this.timeRemaining);
    }
    increment(delta) {
        let newVal = this.currentValue + (this.rate * delta);
        if ((this.currentValue < this.targetValue) && (this._directionIsUp))
            this.currentValue = Math.min(newVal, this.targetValue);
        else if ((this.currentValue > this.targetValue) && (this._directionIsUp)) {
            if (newVal % this._wrapValue < this.currentValue)
                this.currentValue = Math.min(newVal, this.targetValue);
            else
                this.currentValue = newVal;
        }
        else if ((this.currentValue < this.targetValue) && !(this._directionIsUp)) {
            if (newVal % this._wrapValue > this.currentValue)
                this.currentValue = Math.max(newVal, this.targetValue);
            else
                this.currentValue = newVal;
        }
        else if ((this.currentValue > this.targetValue) && !(this._directionIsUp))
            this.currentValue = Math.max(newVal, this.targetValue);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/BufferClone.ts":
/*!********************************************************!*\
  !*** ./src/engine/gameobject/context2d/BufferClone.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BufferClone; });
/* harmony import */ var _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");



class BufferClone extends _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(position, bounds, drawBuffer, clipFunction) {
        super(position, bounds);
        this._origin = new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);
        this._area = null;
        this._drawBuffer = drawBuffer;
        this._clipFunction = clipFunction;
    }
    get typeName() { return "BufferClone"; }
    get clipFunction() { return this._clipFunction; }
    set clipFunction(val) { this._clipFunction = val; }
    get origin() { return this._origin; }
    set origin(val) { this._origin = val; }
    get area() { return this._area; }
    set area(val) { this._area = val; }
    get drawBuffer() { return this._drawBuffer; }
    draw(context2D) {
        if (!this._drawBuffer)
            throw new Error("Cannot draw bufferclone because the provided DrawBuffer is null");
        let pos = this.transform.position.drawPositionTopLeft();
        let dim = this.transform.bounds.dimension;
        let dbDim = this._drawBuffer.canvasUsedDimension;
        if (this._clipFunction) {
            context2D.save();
            this._clipFunction(context2D, pos, dim);
            context2D.clip();
        }
        let sourceDim = dbDim;
        if (this.area) {
            sourceDim = this.area.asSimplePixelDimension(this.transform.bounds);
            sourceDim = new _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_0__["default"](sourceDim.width * this.drawBuffer.pixelRatio, sourceDim.height * this.drawBuffer.pixelRatio);
        }
        let orig = this.origin.absolutePositionTopLeft(this.drawBuffer.transform.bounds);
        context2D.drawImage(this._drawBuffer.canvas, orig.x * this.drawBuffer.pixelRatio, orig.y * this.drawBuffer.pixelRatio, sourceDim.width, sourceDim.height, pos.x, pos.y, dim.width, dim.height);
        if (this._clipFunction)
            context2D.restore();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Buffered.ts":
/*!*****************************************************!*\
  !*** ./src/engine/gameobject/context2d/Buffered.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buffered; });
/* harmony import */ var _DrawBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawBuffer */ "./src/engine/gameobject/context2d/DrawBuffer.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Component */ "./src/engine/gameobject/Component.ts");
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Frame */ "./src/engine/gameobject/Frame.ts");







class Buffered extends _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(type, ...constructorArgs) {
        let arg1 = constructorArgs.shift();
        if (arg1 instanceof _transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"])
            super(arg1, constructorArgs.shift());
        else if (arg1 instanceof _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"])
            super(null, arg1);
        else
            throw new Error("Cannot create a Buffered<GameObject> that lacks a bounds. DrawBuffers require a Bounds");
        this._constructorArgs = constructorArgs;
        this._type = type;
        this._buffer = new _DrawBuffer__WEBPACK_IMPORTED_MODULE_0__["default"](new _transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)));
        this._inner = new this._type(new _transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), ...this._constructorArgs);
    }
    get inner() { return this._inner; }
    get buffer() { return this._buffer; }
    create() {
        this.addChild(this._buffer);
        this._buffer.addChild(this._inner);
        if (this.inner instanceof _Component__WEBPACK_IMPORTED_MODULE_5__["Component"])
            this.inner.controller.onDestroy.push((() => { this.requestRemoval(); }).bind(this), this);
        if (this.inner instanceof _Frame__WEBPACK_IMPORTED_MODULE_6__["Frame"]) {
            this.inner.listener.onClose.push((() => { this.visible = false; this.active = false; }).bind(this), this);
            this.inner.listener.onOpen.push((() => { this.visible = true; this.active = true; }).bind(this), this);
            this.visible = this.inner.isOpen;
        }
    }
    destroy() {
        super.destroy();
        if (this.inner instanceof _Component__WEBPACK_IMPORTED_MODULE_5__["Component"])
            this.inner.controller.onDestroy.unregister(this);
        if (this.inner instanceof _Frame__WEBPACK_IMPORTED_MODULE_6__["Frame"]) {
            this.inner.listener.onClose.unregister(this);
            this.inner.listener.onOpen.unregister(this);
        }
    }
    draw() {
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Circle.ts":
/*!***************************************************!*\
  !*** ./src/engine/gameobject/context2d/Circle.ts ***!
  \***************************************************/
/*! exports provided: Circle, FillCircle, OutlineCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillCircle", function() { return FillCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineCircle", function() { return OutlineCircle; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/engine/gameobject/context2d/Shape.ts");
/* harmony import */ var _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");


class Circle extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get typeName() { return "Circle"; }
    constructor(position, bounds, strokeStyle, fillStyle, lineWidth) {
        super(position, bounds);
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.lineWidth = lineWidth;
    }
    draw(context2D) {
        let pos = this.transform.position.drawPositionTopLeft();
        let dim = this.transform.bounds.dimension;
        if (this.fillStyle)
            this.filled(context2D, pos, dim);
        if ((this.lineWidth > 0) && (this.strokeStyle))
            this.outline(context2D, pos, dim);
    }
    outline(context2D, pos, dim) {
        let radDim = new _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"](Math.max(0, dim.width - this.lineWidth), Math.max(0, dim.height - this.lineWidth));
        context2D.strokeStyle = this.strokeStyle;
        context2D.lineWidth = this.lineWidth;
        context2D.beginPath();
        context2D.arc(pos.x + dim.width / 2, pos.y + dim.height / 2, Math.min(radDim.width, radDim.height) / 2, 0, 2 * Math.PI);
        context2D.stroke();
    }
    filled(context2D, pos, dim) {
        context2D.fillStyle = this.fillStyle;
        context2D.beginPath();
        context2D.arc(pos.x + dim.width / 2, pos.y + dim.height / 2, Math.min(dim.width, dim.height) / 2, 0, 2 * Math.PI);
        context2D.fill();
    }
}
class FillCircle extends Circle {
    constructor(position, bounds, fillStyle) {
        super(position, bounds, undefined, fillStyle, 0);
    }
}
class OutlineCircle extends Circle {
    constructor(position, bounds, strokeStyle, lineWidth) {
        super(position, bounds, strokeStyle, undefined, lineWidth);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/DrawBuffer.ts":
/*!*******************************************************!*\
  !*** ./src/engine/gameobject/context2d/DrawBuffer.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawBuffer; });
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Transform */ "./src/engine/Transform.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");




class DrawBuffer extends _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(position, bounds) {
        super(new DrawTransform(position, bounds));
        this._canvas = null;
        this._context2D = null;
        this._drawRequested = false;
        this._hasAlphaChannel = true;
        this._imageData = null;
        this.debugDisableCache = false;
        this._forgetInternalsOnDraw = false;
        this._canvasDrawFixed = false;
        if (this.transform.position)
            this.transform.position.resetDrawPos = true;
    }
    get typeName() { return "DrawBuffer"; }
    get forgetInternalsOnDraw() { return this._forgetInternalsOnDraw; }
    set forgetInternalsOnDraw(val) { this._forgetInternalsOnDraw = val; }
    get canvasDrawFixed() { return this._canvasDrawFixed; }
    get canvas() { return this._canvas; }
    get context2D() { return this._context2D; }
    get canvasUsedDimension() { return new _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_3__["default"](Math.ceil(this.transform.bounds.dimension.width * this.pixelRatio), Math.ceil(this.transform.bounds.dimension.height * this.pixelRatio)); }
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(val) { this._backgroundColor = val; }
    get pixelRatio() { return this._pixelRatio; }
    get hasAlphaChannel() { return this._hasAlphaChannel; }
    set hasAlphaChannel(val) {
        if ((this._hasAlphaChannel !== val) && (this._canvas))
            this._context2D = this._canvas.getContext('2d', { alpha: val });
        this._hasAlphaChannel = val;
    }
    get drawRequested() { return this._drawRequested; }
    create() {
        this._createDrawBuffer();
    }
    _createDrawBuffer() {
        this._canvas = document.createElement('canvas');
        this._context2D = this._canvas.getContext('2d', { alpha: this.hasAlphaChannel });
        this.resizeCanvas(this.transform.bounds.dimension, window.devicePixelRatio);
        this.clear();
    }
    resizeCanvas(dim, devicePixelRatio) {
        this._pixelRatio = devicePixelRatio;
        this.canvas.width = Math.max(dim.width * this.pixelRatio, DrawBuffer.minCanvasSize);
        this.canvas.height = Math.max(dim.height * this.pixelRatio, DrawBuffer.minCanvasSize);
        this._oldDimension = new _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_2__["default"](dim.width, dim.height);
        this._context2D.setTransform(1, 0, 0, 1, 0, 0);
        this._context2D.scale(this.pixelRatio, this.pixelRatio);
    }
    clear() {
        if (this.backgroundColor) {
            this._context2D.fillStyle = this.backgroundColor;
            this._context2D.fillRect(0, 0, this._canvas.width / this.pixelRatio, this._canvas.height / this.pixelRatio);
        }
        else
            this._context2D.clearRect(0, 0, this.canvas.width / this.pixelRatio, this.canvas.height / this.pixelRatio);
    }
    doDraw(context2D) {
        if ((this.created) && (this.visible)) {
            let startingOpacity = undefined;
            if (this.opacity !== 1) {
                startingOpacity = context2D.globalAlpha;
                context2D.globalAlpha = context2D.globalAlpha * this.opacity;
            }
            if ((this._drawRequested) && (!(this._canvasDrawFixed))) {
                this._drawRequested = false;
                this.clear();
                this.children.forEach(x => x.doDraw(this._context2D));
                if (this._forgetInternalsOnDraw) {
                    this.children.forEach(c => this.removeChild(c));
                    this._canvasDrawFixed = true;
                }
            }
            if (this.transform.position)
                this.draw(context2D);
            if (startingOpacity !== undefined)
                context2D.globalAlpha = startingOpacity;
        }
    }
    _hasResized() {
        let dim = this.transform.bounds.dimension;
        return ((this._oldDimension.width !== dim.width) ||
            (this._oldDimension.height !== dim.height));
    }
    _hasDevicePixelRatioChanged() {
        return this._pixelRatio !== window.devicePixelRatio;
    }
    begin() {
        if (this._hasResized() || this._hasDevicePixelRatioChanged()) {
            this.resizeCanvas(this.transform.bounds.dimension, window.devicePixelRatio);
            this.requestDraw();
        }
        else if (this.debugDisableCache)
            this.requestDraw();
    }
    draw(context2D) {
        if (context2D) {
            this.transform.position.resetDrawPos = false;
            this.__pos = this.transform.position.drawPositionTopLeft();
            this.__dim = this.transform.bounds.dimension;
            this.transform.position.resetDrawPos = true;
            context2D.drawImage(this._canvas, 0, 0, Math.round(this.__dim.width) * this.pixelRatio, Math.round(this.__dim.height) * this.pixelRatio, Math.round(this.__pos.x), Math.round(this.__pos.y), Math.round(this.__dim.width), Math.round(this.__dim.height));
        }
    }
    requestDraw() {
        this._drawRequested = true;
        super.requestDraw();
    }
}
DrawBuffer.minCanvasSize = 256;
class DrawTransform extends _Transform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    recalculate(excludeDrawCache) {
        if (!(excludeDrawCache))
            if (!(this.bounds.hasResizedAutoUpdate())) {
                if (this.position)
                    this.position.drawCacheDirty = true;
                excludeDrawCache = true;
                super.gameObject.requestDraw();
            }
        super.recalculate(excludeDrawCache);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Rect.ts":
/*!*************************************************!*\
  !*** ./src/engine/gameobject/context2d/Rect.ts ***!
  \*************************************************/
/*! exports provided: Rect, FillRect, OutlineRect, DebugRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillRect", function() { return FillRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineRect", function() { return OutlineRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugRect", function() { return DebugRect; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/engine/gameobject/context2d/Shape.ts");
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transform/Position */ "./src/engine/transform/Position.ts");




class Rect extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get typeName() { return "Rect"; }
    constructor(position, bounds, strokeStyle, fillStyle, lineWidth) {
        super(position, bounds);
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.lineWidth = lineWidth;
    }
    draw(context2D) {
        let pos = this.transform.position.drawPositionTopLeft();
        let dim = this.transform.bounds.dimension;
        if (this.fillStyle)
            this.filled(context2D, pos, dim);
        if ((this.lineWidth > 0) && (this.strokeStyle))
            this.outline(context2D, pos, dim);
    }
    outline(context2D, pos, dim) {
        context2D.strokeStyle = this.strokeStyle;
        context2D.lineWidth = this.lineWidth;
        context2D.beginPath();
        context2D.rect(pos.x + this.lineWidth / 2, pos.y + this.lineWidth / 2, dim.width - this.lineWidth, dim.height - this.lineWidth);
        context2D.stroke();
    }
    filled(context2D, pos, dim) {
        context2D.fillStyle = this.fillStyle;
        context2D.beginPath();
        context2D.fillRect(pos.x, pos.y, dim.width, dim.height);
    }
}
class FillRect extends Rect {
    constructor(position, bounds, fillStyle) {
        super(position, bounds, undefined, fillStyle, 0);
    }
}
class OutlineRect extends Rect {
    constructor(position, bounds, strokeStyle, lineWidth) {
        super(position, bounds, strokeStyle, undefined, lineWidth);
    }
}
class DebugRect extends OutlineRect {
    constructor(colour, lineWidth) {
        super(new _transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1)), colour, lineWidth);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Root.ts":
/*!*************************************************!*\
  !*** ./src/engine/gameobject/context2d/Root.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Root; });
/* harmony import */ var _DrawBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawBuffer */ "./src/engine/gameobject/context2d/DrawBuffer.ts");
/* harmony import */ var _ui_DebugPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/DebugPane */ "./src/engine/gameobject/ui/DebugPane.ts");
/* harmony import */ var _Buffered__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buffered */ "./src/engine/gameobject/context2d/Buffered.ts");
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Frame */ "./src/engine/gameobject/Frame.ts");







class Root extends _DrawBuffer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(type, ...constructorArgs) {
        let arg1 = constructorArgs.shift();
        if (arg1 instanceof _transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"])
            super(arg1, constructorArgs.shift());
        else if (arg1 instanceof _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"])
            super(null, arg1);
        else
            throw new Error("Cannot create a Buffered<GameObject> that lacks a bounds. DrawBuffers require a Bounds");
        this._constructorArgs = constructorArgs;
        this._type = type;
        this._buffered = new _Buffered__WEBPACK_IMPORTED_MODULE_2__["default"](this._type, new _transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1)), ...this._constructorArgs);
        this._inner = this._buffered.inner;
    }
    get debugPane() { return this._debugPane; }
    set debugPane(val) { this._debugPane = val; }
    createCanvas(name) {
        this._createDrawBuffer();
        this._canvas.id = name;
    }
    resizeToOnUpdate(dimension) { this._resizeTarget = dimension; }
    resizeCanvas(dim, devicePixelRatio) {
        super.resizeCanvas(dim, devicePixelRatio);
        this.canvas.style.width = this.transform.bounds.dimension.width + 'px';
        this.canvas.style.height = this.transform.bounds.dimension.height + 'px';
    }
    create() {
        this.hasAlphaChannel = false;
        this.addChild(this._buffered);
    }
    afterCreate() {
        if (this.debugPane) {
            let debugPane = this._buffered.buffer.addChild(new _ui_DebugPane__WEBPACK_IMPORTED_MODULE_1__["default"](new _transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1))));
            debugPane.visible = false;
            debugPane.active = true;
        }
        this._buffered.buffer.backgroundColor = this.backgroundColor;
        this._buffered.buffer.hasAlphaChannel = false;
        if (this._inner instanceof _Frame__WEBPACK_IMPORTED_MODULE_6__["Frame"])
            this._inner.open();
    }
    begin() {
        if (this._resizeTarget) {
            this.transform.bounds.clearDimensions();
            this.transform.bounds.addDimension(this._resizeTarget);
            this._resizeTarget = null;
            this.transform.recalculate();
        }
        super.begin();
    }
    get typeName() { return "Root"; }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/RoundedRect.ts":
/*!********************************************************!*\
  !*** ./src/engine/gameobject/context2d/RoundedRect.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundedRect; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/engine/gameobject/context2d/Shape.ts");

class RoundedRect extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get typeName() { return "RoundedRect"; }
    constructor(position, bounds, strokeStyle, fillStyle, lineWidth, radius) {
        super(position, bounds);
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.lineWidth = lineWidth;
        this._radius = radius;
    }
    draw(context2D) {
        context2D.strokeStyle = this.strokeStyle;
        context2D.lineWidth = this.lineWidth;
        context2D.fillStyle = this.fillStyle;
        let pos = this.transform.position.drawPositionTopLeft();
        let dim = this.transform.bounds.dimension;
        let filled = (this.fillStyle !== undefined);
        let stroke = (this.strokeStyle !== undefined);
        this.roundRect(context2D, pos.x, pos.y, dim.width, dim.height, this._radius, filled, stroke);
    }
    roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == 'undefined') {
            stroke = true;
        }
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        if (typeof radius === 'number') {
            radius = { tl: radius, tr: radius, br: radius, bl: radius };
        }
        else {
            var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
            for (var side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
            }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Shape.ts":
/*!**************************************************!*\
  !*** ./src/engine/gameobject/context2d/Shape.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");

class Shape extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this._strokeStyle = undefined;
        this._fillStyle = undefined;
        this._lineWidth = undefined;
    }
    get typeName() { return "Shape"; }
    get strokeStyle() { return this._strokeStyle; }
    get fillStyle() { return this._fillStyle; }
    get lineWidth() { return this._lineWidth; }
    set strokeStyle(val) { this._strokeStyle = val; }
    set lineWidth(val) { this._lineWidth = val; }
    set fillStyle(val) { this._fillStyle = val; }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Sprite.ts":
/*!***************************************************!*\
  !*** ./src/engine/gameobject/context2d/Sprite.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");

class Sprite extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get typeName() { return "Sprite"; }
    constructor(position, bounds, ...filenames) {
        super(position, bounds);
        this._filenames = filenames;
        this._img = null;
    }
    get filenames() { return this._filenames; }
    load({ loader: l }) {
        this._loadedDPR = Math.min(Math.ceil(window.devicePixelRatio), this.filenames.length);
        this.addAsset(l.loadImage(this.filenames[this._loadedDPR - 1], (asset) => {
            asset.loaded = true;
            this.visible = false;
        }));
        return true;
    }
    create() {
        this._img = this.getAsset(this.filenames[this._loadedDPR - 1]);
    }
    draw(context2D) {
        let pos = this.transform.position.drawPositionTopLeft();
        let dim = this.transform.bounds.dimension;
        context2D.drawImage(this._img, 0, 0, this._img.naturalWidth, this._img.naturalHeight, pos.x, pos.y, dim.width, dim.height);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Triangle.ts":
/*!*****************************************************!*\
  !*** ./src/engine/gameobject/context2d/Triangle.ts ***!
  \*****************************************************/
/*! exports provided: Triangle, FillTriangle, OutlineTriangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return Triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillTriangle", function() { return FillTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineTriangle", function() { return OutlineTriangle; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/engine/gameobject/context2d/Shape.ts");
/* harmony import */ var _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");



class Triangle extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get typeName() { return "Triangle"; }
    constructor(position, bounds, strokeStyle, fillStyle, lineWidth) {
        super(position, bounds);
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.lineWidth = lineWidth;
    }
    draw(context2D) {
        let pos = this.transform.position.drawPositionTopLeft();
        let dim = this.transform.bounds.dimension;
        if (this.fillStyle)
            this.filled(context2D, pos, dim);
        if ((this.lineWidth > 0) && (this.strokeStyle))
            this.outline(context2D, pos, dim);
    }
    outline(context2D, pos, dim) {
        context2D.strokeStyle = this.strokeStyle;
        context2D.lineWidth = this.lineWidth;
        context2D.beginPath();
        let newPos = _util_Point__WEBPACK_IMPORTED_MODULE_2__["default"].add(pos, new _util_Point__WEBPACK_IMPORTED_MODULE_2__["default"](0.75 * this.lineWidth, 0.75 * this.lineWidth));
        let newDim = _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"].add(dim, new _transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"](-this.lineWidth * 1.5, -this.lineWidth * 1.5));
        this._drawPath(context2D, newPos, newDim);
        context2D.stroke();
    }
    filled(context2D, pos, dim) {
        context2D.fillStyle = this.fillStyle;
        context2D.beginPath();
        this._drawPath(context2D, pos, dim);
        context2D.fill();
    }
    _drawPath(context2D, pos, dim) {
        context2D.translate(pos.x, pos.y);
        context2D.beginPath();
        context2D.moveTo(0.5 * dim.width, 0);
        context2D.lineTo(dim.width, dim.height);
        context2D.lineTo(0, dim.height);
        context2D.closePath();
        context2D.translate(-pos.x, -pos.y);
    }
}
class FillTriangle extends Triangle {
    constructor(position, bounds, fillStyle) {
        super(position, bounds, undefined, fillStyle, 0);
    }
}
class OutlineTriangle extends Triangle {
    constructor(position, bounds, strokeStyle, lineWidth) {
        super(position, bounds, strokeStyle, undefined, lineWidth);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/Button.ts":
/*!********************************************!*\
  !*** ./src/engine/gameobject/ui/Button.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _ClickTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClickTrigger */ "./src/engine/gameobject/ui/ClickTrigger.ts");

class Button extends _ClickTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, content) {
        super(position, bounds);
        this._buttonReset = false;
        this._content = content;
    }
    get typeName() { return "Button"; }
    get content() { return this._content; }
    get hoverRect() { return this._hoverRect; }
    get pressedRect() { return this._pressedRect; }
    setHoverRect(val) {
        this._hoverRect = val;
        this._hoverRect.visible = false;
    }
    setPressedRect(val) {
        this._pressedRect = val;
        this._pressedRect.visible = false;
    }
    reset() {
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this.pressedRect)
            this.pressedRect.visible = false;
        this.requestDraw();
        this._buttonReset = true;
    }
    decreate() {
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this.pressedRect)
            this.pressedRect.visible = false;
    }
    create() {
        if (this._content)
            this.addChild(this._content);
    }
    update({ mouse: m }) {
        if ((this.interactable) && (!m.handled))
            this.checkMouseActions(m);
    }
    onMouseClick(m) {
        if (!this._buttonReset)
            super.onMouseClick(m);
        m.setHandled();
    }
    onMouseMove(m) {
        m.setHandled();
    }
    onMouseDown(m) {
        this._buttonReset = false;
        if (this.pressedRect)
            this.pressedRect.visible = true;
        if (this.hoverRect)
            this.hoverRect.visible = false;
        m.setHandled();
    }
    onMouseUp(m) {
        if (this.pressedRect)
            this.pressedRect.visible = false;
        if (this.hoverRect)
            this.hoverRect.visible = true;
        m.setHandled();
    }
    onMouseEnter(m) {
        if (this.hoverRect)
            this.hoverRect.visible = true;
        m.setHandled();
    }
    onMouseLeave(m) {
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this.pressedRect)
            this.pressedRect.visible = false;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/ClickTrigger.ts":
/*!**************************************************!*\
  !*** ./src/engine/gameobject/ui/ClickTrigger.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickTrigger; });
/* harmony import */ var _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseTrigger */ "./src/engine/gameobject/ui/MouseTrigger.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");


class ClickTrigger extends _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this.onlyIfUnhandled = false;
        this._onClick = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    get typeName() { return "ClickTrigger"; }
    get onClick() { return this._onClick; }
    onMouseClick(mouse) {
        if (!(this.onlyIfUnhandled && mouse.handled))
            engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.onClick, mouse);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/DebugPane.ts":
/*!***********************************************!*\
  !*** ./src/engine/gameobject/ui/DebugPane.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DebugPane; });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./src/engine/gameobject/ui/Text.ts");
/* harmony import */ var _KeyTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyTrigger */ "./src/engine/gameobject/ui/KeyTrigger.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");








class DebugPane extends _GameObject__WEBPACK_IMPORTED_MODULE_5__["default"] {
    get typeName() { return "DebugPane"; }
    create() {
        this.timingText = this.addChild(new _Text__WEBPACK_IMPORTED_MODULE_0__["default"](new _transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0, 1, new _util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](0, 1)), new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, -5)), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](), "FPS:", "black", 12, "serif"));
        this.beginTime = undefined;
        this.drawTime = undefined;
        this.endTime = undefined;
        this.updateTime = undefined;
        this.averageSteps = undefined;
        let kt = this.addChild(new _KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]());
        kt.getKeyEvent("Tab", _KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["KeyTriggerEvents"].onKeyPress).push(() => this.visible = !(this.visible), this);
    }
    update({ timing: t, keyboard: k }) {
        this.beginTime = this.runningAverage(this.beginTime, t.beginTime, t.fps);
        this.updateTime = this.runningAverage(this.updateTime, t.updateTime, t.fps * t.updateSteps);
        this.drawTime = this.runningAverage(this.drawTime, t.drawTime, t.fps);
        this.endTime = this.runningAverage(this.endTime, t.endTime, t.fps);
        this.loopTime = this.runningAverage(this.loopTime, t.loopTime, t.fps);
        this.averageSteps = this.runningAverage(this.averageSteps, t.updateSteps, t.fps);
        this.timingText.text = ("FPS: " + t.fps).substring(0, 7) +
            ("   Begin: " + this.beginTime).substring(0, 14) +
            ("   Draw: " + this.drawTime).substring(0, 13) +
            ("   Update: " + this.updateTime).substring(0, 15) +
            ("   (Steps: " + this.averageSteps).substring(0, 15) + ") " +
            ("   End: " + this.endTime).substring(0, 12) +
            ("   Loop: " + this.loopTime).substring(0, 13) +
            ("   (Calculated FPS: " + Math.round(1000 / this.loopTime)).substring(0, 23) + ")" +
            ("   (Rate: " + 100 / (t.slowDown + 1)).substring(0, 13) + "%)";
        if (this.interactable)
            k.keyPressesThisUpdate.forEach(key => {
                if (key === "-")
                    t.slowDown++;
                else if (key === "+")
                    t.slowDown = Math.max(0, t.slowDown - 1);
            });
    }
    runningAverage(val, newVal, length) {
        if (!val)
            return newVal;
        return (val * (length - 1) + newVal) / length;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/GestureTrigger.ts":
/*!****************************************************!*\
  !*** ./src/engine/gameobject/ui/GestureTrigger.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GestureTrigger; });
/* harmony import */ var _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseTrigger */ "./src/engine/gameobject/ui/MouseTrigger.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");



class GestureTrigger extends _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this._dragStart = new engine_util_Point__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);
        this._dragging = false;
        this._onSwipeLeft = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onSwipeRight = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onSwipeUp = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onSwipeDown = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    get typeName() { return "GestureTrigger"; }
    get onSwipeLeft() { return this._onSwipeLeft; }
    get onSwipeRight() { return this._onSwipeRight; }
    get onSwipeUp() { return this._onSwipeUp; }
    get onSwipeDown() { return this._onSwipeDown; }
    update({ mouse: m }) {
        if (this.interactable)
            this.checkMouseActions(m);
        else
            this._dragging = false;
    }
    reset() {
        this._dragging = false;
    }
    onMouseDown(mouse) {
        this._dragStart = mouse.position;
        this._dragging = true;
    }
    onMouseUp(mouse) {
        if (this._dragging) {
            this.checkGestures(this._dragStart, mouse.position);
            this._dragging = false;
        }
    }
    onMouseLeave(mouse) { this._dragging = false; }
    onMouseMove(mouse) {
        if (this._dragging)
            this.checkGestures(this._dragStart, mouse.position);
    }
    checkGestures(start, end) {
        if (start.x > end.x + 100) {
            engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.onSwipeLeft, start, end);
            this._dragging = false;
        }
        else if (start.x < end.x - 100) {
            engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.onSwipeRight, start, end);
            this._dragging = false;
        }
        if (start.y > end.y + 100) {
            engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.onSwipeUp, start, end);
            this._dragging = false;
        }
        else if (start.y < end.y - 100) {
            engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.onSwipeDown, start, end);
            this._dragging = false;
        }
    }
    decreate() {
        this._dragging = false;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/GridLayout.ts":
/*!************************************************!*\
  !*** ./src/engine/gameobject/ui/GridLayout.ts ***!
  \************************************************/
/*! exports provided: GridOrientation, default, GridBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridOrientation", function() { return GridOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBuilder", function() { return GridBuilder; });
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transform/dimension/ConditionalDimension */ "./src/engine/transform/dimension/ConditionalDimension.ts");
/* harmony import */ var _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");







var GridOrientation;
(function (GridOrientation) {
    GridOrientation[GridOrientation["Vertical"] = 0] = "Vertical";
    GridOrientation[GridOrientation["Horizontal"] = 1] = "Horizontal";
})(GridOrientation || (GridOrientation = {}));
class GridLayout extends _GameObject__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(position, bounds, cells, orientation) {
        super(position, bounds);
        this._padding = 0;
        this._relativePadding = 0;
        this._cells = cells;
        this._orientation = orientation;
        if (orientation === GridOrientation.Horizontal)
            this.cells.forEach((c, i) => {
                for (let j = 0; j < i; j++)
                    c.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](1, 0, this.cells[j].transform.bounds));
            });
        if (orientation === GridOrientation.Vertical)
            this.cells.forEach((c, i) => {
                for (let j = 0; j < i; j++)
                    c.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0, 1, this.cells[j].transform.bounds));
            });
        this.conditionalDimension = this.transform.bounds.addDimension(new _transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](this._dimensionFunction.bind(this)));
        this.cells.forEach(c => c.transform.bounds.onResize.push(this.conditionalDimension.markAsUpdated.bind(this), this));
    }
    get typeName() { return "GridLayout"; }
    get middleY() { return this.orientation === GridOrientation.Vertical ? this._padding : 0; }
    get middleX() { return this.orientation === GridOrientation.Horizontal ? this._padding : 0; }
    get cells() { return this._cells; }
    get orientation() { return this._orientation; }
    destroy() {
        this.cells.forEach(c => c.transform.bounds.onResize.unregister(this));
    }
    create() {
        this.cells.forEach(c => this.addChild(c));
    }
    addCell(newCell, index) {
        if (index === undefined)
            index = this.cells.length;
        this.addChild(newCell);
        let middleX = this.middleX;
        let middleY = this.middleY;
        if (this.orientation === GridOrientation.Vertical)
            this.cells.forEach((c, i) => {
                if (i < index)
                    newCell.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0, 1, c.transform.bounds));
                else {
                    c.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0, 1, newCell.transform.bounds));
                    c.transform.position.addTranslation(new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](middleX, middleY));
                }
            });
        if (this.orientation === GridOrientation.Horizontal)
            this.cells.forEach((c, i) => {
                if (i < index)
                    newCell.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](1, 0, c.transform.bounds));
                else {
                    c.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](1, 0, newCell.transform.bounds));
                    c.transform.position.addTranslation(new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](middleX, middleY));
                }
            });
        this.cells.splice(index, 0, newCell);
        newCell.transform.position.addTranslation(new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](middleX * index, middleY * index));
        newCell.transform.bounds.onResize.push(this.conditionalDimension.markAsUpdated.bind(this), this);
        this.transform.positioningIsDirty();
    }
    removeCell(index) {
        if ((index >= 0) && (index < this.cells.length)) {
            let middleX = this.middleX;
            let middleY = this.middleY;
            let cell = this.cells[index];
            if (this.orientation === GridOrientation.Vertical)
                this.cells.forEach((c, i) => {
                    if (i > index) {
                        c.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0, -1, cell.transform.bounds));
                        c.transform.position.addTranslation(new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](-middleX, -middleY));
                    }
                });
            if (this.orientation === GridOrientation.Horizontal)
                this.cells.forEach((c, i) => {
                    if (i > index) {
                        c.transform.position.addTranslation(new _transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](-1, 0, cell.transform.bounds));
                        c.transform.position.addTranslation(new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](-middleX, -middleY));
                    }
                });
            this.cells.splice(index, 1);
            cell.transform.bounds.onResize.unregister(this);
            cell.requestRemoval();
            this.transform.positioningIsDirty();
        }
    }
    _dimensionFunction(dim) {
        let dims = [];
        this.cells.forEach(c => {
            dims.push(c.transform.bounds.calculating ? c.transform.bounds.cachedDimension : c.transform.bounds.dimension);
        });
        let width = 0;
        let height = 0;
        let middleX = this.middleX;
        let middleY = this.middleY;
        if (this.orientation === GridOrientation.Horizontal)
            dims.forEach(c => {
                width += c.width + middleX;
                height = Math.max(height, c.height);
            });
        if (this.orientation === GridOrientation.Vertical)
            dims.forEach(c => {
                width = Math.max(width, c.width);
                height += c.height + middleY;
            });
        return new _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_6__["default"](width - middleX, height - middleY);
    }
    addPixelPadding(padding) {
        this._padding = padding;
        let middleX = this.middleX;
        let middleY = this.middleY;
        this.cells.forEach((c, i) => {
            c.transform.position.addTranslation(new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](middleX * i, middleY * i));
        });
        this.transform.positioningIsDirty();
    }
}
class GridBuilder {
    constructor() {
        this._newCells = [];
    }
    get grid() { return this._grid; }
    pushCell(newCell, index) {
        if (index === undefined)
            index = this._newCells.length;
        this._newCells.splice(index, 0, newCell);
        return newCell;
    }
    fixLayer(orientation, position, bounds) {
        this._grid = new GridLayout(position || new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), bounds || new _transform_Bounds__WEBPACK_IMPORTED_MODULE_0__["default"](), this._newCells, orientation);
        this._newCells = [this._grid];
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/KeyTrigger.ts":
/*!************************************************!*\
  !*** ./src/engine/gameobject/ui/KeyTrigger.ts ***!
  \************************************************/
/*! exports provided: KeyTriggerEvents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyTriggerEvents", function() { return KeyTriggerEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyTrigger; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Event */ "./src/engine/util/Event.ts");


var KeyTriggerEvents;
(function (KeyTriggerEvents) {
    KeyTriggerEvents[KeyTriggerEvents["onKeyPress"] = 0] = "onKeyPress";
    KeyTriggerEvents[KeyTriggerEvents["onKeyDown"] = 1] = "onKeyDown";
    KeyTriggerEvents[KeyTriggerEvents["onKeyUp"] = 2] = "onKeyUp";
})(KeyTriggerEvents || (KeyTriggerEvents = {}));
class KeyTrigger extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(null, null);
        this._keys = [];
    }
    get typeName() { return "KeyTrigger"; }
    getKeyEvent(keycode, trigger) {
        if (!trigger)
            trigger = KeyTriggerEvents.onKeyDown;
        this._keys.forEach(x => {
            if ((x.keycode === keycode) && (x.trigger === trigger))
                return x.event;
        });
        let event = new _util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._keys.push({ keycode: keycode, trigger: trigger, event: event });
        return event;
    }
    removeKeyEvent(keycode, trigger) {
        let toRemove = this._keys.filter(x => (x.keycode === keycode) && (x.trigger === trigger));
        if (toRemove.length > 0) {
            toRemove.forEach(x => this._keys.splice(this._keys.indexOf(x), 1));
            return true;
        }
        return false;
    }
    begin({ keyboard: k }) {
        if (this.interactable)
            this._keys.forEach(x => {
                if (x.trigger === KeyTriggerEvents.onKeyUp) {
                    if (k.isKeyUp(x.keycode))
                        x.event.call();
                }
                else if (x.trigger === KeyTriggerEvents.onKeyDown) {
                    if (k.isKeyDown(x.keycode))
                        x.event.call();
                    else if (k.keyPressesThisUpdate.indexOf(x.keycode) !== -1)
                        x.event.call();
                }
                else if (x.trigger === KeyTriggerEvents.onKeyPress)
                    if (k.keyPressesThisUpdate.indexOf(x.keycode) !== -1)
                        x.event.call();
            });
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/LoadingBar.ts":
/*!************************************************!*\
  !*** ./src/engine/gameobject/ui/LoadingBar.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingBar; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _context2d_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");





class LoadingBar extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, bgColour, fgColour) {
        super(position, bounds);
        this._bgColour = bgColour;
        this._fgColour = fgColour;
    }
    create() {
        this.addChild(new _context2d_Rect__WEBPACK_IMPORTED_MODULE_1__["FillRect"](new _transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), this._bgColour));
        this._proportionDimension = new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](0, 1);
        this._proportionDimension.preserve = true;
        this._innerBar = this.addChild(new _context2d_Rect__WEBPACK_IMPORTED_MODULE_1__["FillRect"](new _transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](this._proportionDimension), this._fgColour));
    }
    setProportion(proportion) {
        this._proportionDimension.width = proportion;
        this._innerBar.transform.positioningIsDirty();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/MouseDragTrigger.ts":
/*!******************************************************!*\
  !*** ./src/engine/gameobject/ui/MouseDragTrigger.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseDragTrigger; });
/* harmony import */ var _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseTrigger */ "./src/engine/gameobject/ui/MouseTrigger.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");



class MouseDragTrigger extends _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this._dragStart = new engine_util_Point__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);
        this._dragging = false;
        this._minDistancePassed = false;
        this.minDistance = 0;
        this._onDrag = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._onEndDrag = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    get typeName() { return "GestureTrigger"; }
    get onDrag() { return this._onDrag; }
    get onEndDrag() { return this._onEndDrag; }
    update({ mouse: m }) {
        if (this.interactable)
            this.checkMouseActions(m);
        else {
            this._dragging = false;
            this._minDistancePassed = false;
            this.onEndDrag.call();
        }
    }
    onMouseDown(mouse) {
        this._dragStart = mouse.position;
        this._lastPos = this._dragStart;
        this._dragging = true;
    }
    onMouseUp(mouse) {
        if (this._dragging) {
            this._dragging = false;
            this._minDistancePassed = false;
            this.onEndDrag.call();
        }
    }
    onMouseLeave(mouse) {
        this._dragging = false;
        this._minDistancePassed = false;
        this.onEndDrag.call();
    }
    onMouseMove(mouse) {
        if (this._dragging) {
            if (!this._minDistancePassed) {
                let vector = engine_util_Point__WEBPACK_IMPORTED_MODULE_2__["default"].minus(this._lastPos, this._dragStart);
                if (this.minDistance instanceof engine_util_Point__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                    if ((Math.abs(vector.x) > this.minDistance.x) || (Math.abs(vector.y) > this.minDistance.y))
                        this._minDistancePassed = true;
                }
                else if (vector.magnitude > this.minDistance)
                    this._minDistancePassed = true;
            }
            if (this._minDistancePassed)
                this.onDrag.call(engine_util_Point__WEBPACK_IMPORTED_MODULE_2__["default"].minus(this._lastPos, mouse.position), mouse);
            this._lastPos = mouse.position;
        }
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/MouseTrigger.ts":
/*!**************************************************!*\
  !*** ./src/engine/gameobject/ui/MouseTrigger.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseTrigger; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");

class MouseTrigger extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this._mouseInBounds = false;
        this._clickStarted = false;
    }
    get typeName() { return "MouseTrigger"; }
    update({ mouse: m }) {
        if (this.interactable)
            this.checkMouseActions(m);
    }
    checkMouseActions(mouse) {
        if (this.transform.containsPoint(mouse.position)) {
            if (!this._mouseInBounds)
                this.onMouseEnter(mouse);
            this._mouseInBounds = true;
            this.onMouseHover(mouse);
            if (mouse.isMouseMoveEvent) {
                this.onMouseMove(mouse);
                if (mouse.isDown)
                    this.onMouseDrag(mouse);
            }
            if (mouse.isMouseDownEvent) {
                this._clickStarted = true;
                this.onMouseDown(mouse);
            }
            if (mouse.isMouseUpEvent) {
                this.onMouseUp(mouse);
                if (this._clickStarted)
                    this.onMouseClick(mouse);
            }
        }
        else {
            if (this._mouseInBounds) {
                this.onMouseLeave(mouse);
                this._mouseInBounds = false;
            }
            if ((this._clickStarted) && (mouse.isMouseUpEvent))
                this._clickStarted = false;
        }
    }
    onMouseHover(mouse) { }
    onMouseMove(mouse) { }
    onMouseDown(mouse) { }
    onMouseUp(mouse) { }
    onMouseDrag(mouse) { }
    onMouseLeave(mouse) { }
    onMouseEnter(mouse) { }
    onMouseClick(mouse) { }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/PressHoldTrigger.ts":
/*!******************************************************!*\
  !*** ./src/engine/gameobject/ui/PressHoldTrigger.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PressHoldTrigger; });
/* harmony import */ var _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseTrigger */ "./src/engine/gameobject/ui/MouseTrigger.ts");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Timer */ "./src/engine/gameobject/Timer.ts");
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Event */ "./src/engine/util/Event.ts");



class PressHoldTrigger extends _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, holdTime) {
        super(position, bounds);
        this._holdTime = holdTime;
        this._onHold = new _util_Event__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this._onReleaseHold = new _util_Event__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    get onHold() { return this._onHold; }
    get onReleaseHold() { return this._onReleaseHold; }
    get holdTime() { return this._holdTime; }
    set holdTime(val) { this._holdTime = val; }
    create() {
        this._timer = this.addChild(new _Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"]());
    }
    update(args) {
        super.update(args);
        if ((!this._holdEventFired) && (this._timer.time >= this._holdTime)) {
            this._onHold.call(args.mouse);
            this._timer.pause();
            this._holdEventFired = true;
        }
    }
    onMouseMove(mouse) {
        if (!(mouse.handled)) {
            this._timer.pause();
        }
    }
    onMouseDown(mouse) {
        if (!(mouse.handled)) {
            this._timer.start();
            this._holdEventFired = false;
        }
    }
    onMouseUp(mouse) {
        this._timer.pause();
        if (this._holdEventFired)
            this.onReleaseHold.call(mouse);
    }
    onMouseLeave(mouse) {
        this._timer.pause();
        if (this._holdEventFired)
            this.onReleaseHold.call(mouse);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/Text.ts":
/*!******************************************!*\
  !*** ./src/engine/gameobject/ui/Text.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _TextBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBuilder */ "./src/engine/gameobject/ui/TextBuilder.ts");


class Text extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, lines, color, size, font, lineSpacing) {
        super(position, bounds);
        this._widths = [];
        this._lines = [];
        this._countLines = 0;
        this._canvasFunction = null;
        this._color = color;
        this._fontFace = font;
        this._size = size;
        if (typeof (lines) === "string")
            this._lines = [lines];
        else
            this._lines = lines;
        this._lineSpacing = lineSpacing || 1;
    }
    get typeName() { return "Text"; }
    get color() { return this._color; }
    set color(val) { this._color = val; }
    get fontFace() { return this._fontFace; }
    get size() { return this._size; }
    get lineSpacing() { return this._lineSpacing; }
    set lineSpacing(val) { this._lineSpacing = val; }
    get centered() { return this._centered; }
    set centered(val) { this._centered = val; }
    set text(val) {
        this._lines = val.split("\n");
        this.requestDraw();
        this._recalculateTextBounds = true;
    }
    get lines() { return this._lines; }
    set lines(val) {
        this._lines = val;
        this.requestDraw();
        this._recalculateTextBounds = true;
    }
    get canvasFunction() { return this._canvasFunction; }
    set canvasFunction(val) { this._canvasFunction = val; }
    measureTextForBounds(context2D) {
        this.transform.bounds.clearDimensions();
        let tb = new _TextBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this.lines, context2D, this.color, this.size, this.fontFace, this.lineSpacing);
        this.transform.bounds.addDimension(tb.textDimension());
        this._recalculateTextBounds = false;
    }
    draw(context2D) {
        if (this.canvasFunction) {
            context2D.save();
            this.canvasFunction(context2D);
        }
        context2D.fillStyle = this.color;
        context2D.font = this.size + "pt " + this.fontFace;
        if (this._recalculateTextBounds)
            this.measureTextForBounds(context2D);
        let pos = this.transform.position.drawPositionTopLeft();
        let yPos = 0;
        let offset = 0;
        for (let i = 0; i < this._lines.length; i++) {
            if (this.centered)
                offset = (this._widest - this._widths[i]) / 2;
            else
                offset = 0;
            context2D.fillText(this._lines[i], pos.x + offset, pos.y + yPos + this.size);
            yPos += this._size * this._lineSpacing;
        }
        ;
        if (this.canvasFunction)
            context2D.restore();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/TextBuilder.ts":
/*!*************************************************!*\
  !*** ./src/engine/gameobject/ui/TextBuilder.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBuilder; });
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./src/engine/gameobject/ui/Text.ts");
/* harmony import */ var _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");



class TextBuilder {
    constructor(lines, context2D, color, size, font, lineSpacing, targetWidth) {
        this._lines = [];
        this._widths = [];
        this._countLines = 0;
        if (typeof (lines) === "string")
            this._lines = [lines];
        else
            this._lines = lines;
        this._context2D = context2D;
        this._color = color;
        this._fontFace = font;
        this._size = size;
        this._lineSpacing = lineSpacing || 1;
        this._targetWidth = targetWidth || undefined;
    }
    get color() { return this._color; }
    set color(val) { this._color = val; }
    get fontFace() { return this._fontFace; }
    get size() { return this._size; }
    get lineSpacing() { return this._lineSpacing; }
    set lineSpacing(val) { this._lineSpacing = val; }
    get centered() { return this._centered; }
    set centered(val) { this._centered = val; }
    set text(val) {
        this._lines = val.split("\n");
    }
    get lines() { return this._lines; }
    set lines(val) {
        this._lines = val;
    }
    buildText(position) {
        let textDim = this.textDimension();
        return new _Text__WEBPACK_IMPORTED_MODULE_1__["default"](position, new _transform_Bounds__WEBPACK_IMPORTED_MODULE_0__["default"](textDim), this.lines, this.color, this.size, this.fontFace, this.lineSpacing);
    }
    textDimension() {
        let ls = [];
        if (this._targetWidth) {
            this._context2D.font = this.size + 'pt ' + this.fontFace;
            this.lines.forEach(l => ls = ls.concat(this._getWrappedLines(this._context2D, l, this._targetWidth)));
        }
        else
            ls = this.lines;
        this._context2D.font = this.size + "pt " + this.fontFace;
        let widest = 0;
        let height = 0;
        let widths = [];
        for (let i = 0; i < ls.length; i++) {
            widths[i] = this._context2D.measureText(ls[i]).width;
            widest = Math.max(widest, widths[i]);
            if (i === ls.length - 1)
                height += this.size;
            else
                height += this.size * this.lineSpacing;
        }
        this.lines = ls;
        return new _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__["default"](widest, height);
    }
    _getWrappedLines(context, text, maxWidth) {
        var words = text.split(' ');
        var line = '';
        let lines = [];
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n];
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                line = words[n] + ' ';
            }
            else
                line = testLine + ' ';
        }
        return lines;
    }
}


/***/ }),

/***/ "./src/engine/io/IO.ts":
/*!*****************************!*\
  !*** ./src/engine/io/IO.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IO; });
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");

class IO {
    constructor() {
        this.onStart = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onStop = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onBeginStart = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onBeginEnd = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onUpdateStart = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onUpdateEnd = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onDrawStart = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onDrawEnd = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onEndStart = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.onEndEnd = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._interfaces = {};
        this._ifs = [];
    }
    get interfaces() { return this._interfaces; }
    addInterface(inf, name) {
        this._interfaces[name] = inf;
        this._ifs.push(inf);
    }
    create() { this._ifs.forEach(x => x.setEvents(this)); }
}


/***/ }),

/***/ "./src/engine/io/Keyboard.ts":
/*!***********************************!*\
  !*** ./src/engine/io/Keyboard.ts ***!
  \***********************************/
/*! exports provided: Keyboard, KeyboardListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardListener", function() { return KeyboardListener; });
class Keyboard {
    constructor() {
        this._keysDown = [];
        this._keysUp = [];
        this._keyPressesThisUpdate = [];
    }
    get keyPressesThisUpdate() { return this._keyPressesThisUpdate; }
    get keysDown() { return this._keysDown; }
    get keysUp() { return this._keysUp; }
    isKeyUp(keyValue) { return this.keysUp.indexOf(keyValue) >= 0; }
    isKeyDown(keyValue) { return this.keysDown.indexOf(keyValue) >= 0; }
    keyPriority(keya, keyb) {
        return this.keysDown.indexOf(keya) > this.keysDown.indexOf(keyb);
    }
    get key() { return this.keysDown[this.keysDown.length - 1]; }
}
class KeyboardListener extends Keyboard {
    setEvents(io) {
        io.onBeginStart.push(this.onBeginStart.bind(this));
        io.onBeginEnd.push(this.onBeginEnd.bind(this));
    }
    create() {
        document.addEventListener("keydown", this.onKeyDown.bind(this), true);
        document.addEventListener("keyup", this.onKeyUp.bind(this), true);
        document.addEventListener("keypress", this.onKeyPress.bind(this), true);
    }
    onKeyDown(event) {
        if (event.defaultPrevented)
            return;
        if (this.keysDown.indexOf(event.key) === -1)
            this.keysDown.push(event.key);
    }
    onKeyUp(event) {
        if (event.defaultPrevented)
            return;
        if (this.keysUp.indexOf(event.key) === -1)
            this.keysUp.push(event.key);
    }
    onKeyPress(event) {
        if (event.defaultPrevented)
            return;
        if (this._switchBuffer) {
            if (!(this._buffer2.indexOf(event.key) >= 0))
                this._buffer2.push(event.key);
        }
        else if (!(this.keyPressesThisUpdate.indexOf(event.key) >= 0))
            this.keyPressesThisUpdate.push(event.key);
    }
    onBeginStart() {
        this._buffer2 = [];
        this._switchBuffer = true;
    }
    onBeginEnd() {
        if (this._buffer2.length > 0)
            console.log(this._buffer2);
        this._keyPressesThisUpdate = this._buffer2.slice();
        this._switchBuffer = false;
        this._keysDown = this.keysDown.filter(x => this.keysUp.indexOf(x) < 0);
        this._keysUp = [];
    }
}


/***/ }),

/***/ "./src/engine/io/Loader.ts":
/*!*********************************!*\
  !*** ./src/engine/io/Loader.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Asset */ "./src/engine/Asset.ts");

class Loader {
    constructor(assetsFolder) {
        this._assetsFolder = "./assets/";
        this._sharedAssets = [];
        if (assetsFolder !== undefined)
            this._assetsFolder = assetsFolder;
    }
    get assetsFolder() { return this._assetsFolder; }
    getSharedAsset(filename) {
        let existing = this._sharedAssets.filter(a => a.filename === filename);
        if (existing.length > 0)
            return existing[0];
        let a = new _Asset__WEBPACK_IMPORTED_MODULE_0__["default"](filename, null, false);
        this._sharedAssets.push(a);
        return a;
    }
    loadImage(filename, onerror) {
        let image = new Image();
        let asset = new _Asset__WEBPACK_IMPORTED_MODULE_0__["default"](filename, image, false);
        image.src = this.assetsFolder + filename;
        image.onload = function () {
            asset.loaded = true;
            image.onload = null;
            image.onerror = null;
        };
        image.onerror = () => {
            image.onload = null;
            image.onerror = null;
            onerror(asset);
        };
        return asset;
    }
    loadFont(...filenames) {
        let t = "";
        let name = undefined;
        filenames.forEach(f => {
            let filepath = f.split("/");
            let stringComponents = filepath[filepath.length - 1].split(".");
            if (stringComponents.length !== 2)
                throw new Error("Font names must be supplied in the format \"<path-to-file>/<name>.<format>\"");
            let fontName = stringComponents[0];
            if (!name)
                name = fontName;
            if (name !== fontName)
                throw new Error("All font format variants must have the same filename excluding extension");
            let format = stringComponents[1];
            t += "\n    src: url('" + this.assetsFolder + f + "') format('" + format + "');";
        });
        t = "@font-face {\n\
                font-family: " + name + ";" + t;
        t += "\n}";
        let newStyle = document.createElement('style');
        newStyle.appendChild(document.createTextNode(t));
        document.head.appendChild(newStyle);
        let namePlusExt = filenames[0].split("/").pop();
        let assetName = namePlusExt.split(".")[0];
        let font = new FontFaceObserver(name);
        let asset = new _Asset__WEBPACK_IMPORTED_MODULE_0__["default"](assetName, name, false);
        font.load().then(() => {
            asset.loaded = true;
        }).catch((err) => {
            console.log("Error loading font");
            asset.loaded = true;
        });
        return asset;
    }
    setEvents(io) { }
}


/***/ }),

/***/ "./src/engine/io/Mouse.ts":
/*!********************************!*\
  !*** ./src/engine/io/Mouse.ts ***!
  \********************************/
/*! exports provided: Mouse, MouseListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mouse", function() { return Mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseListener", function() { return MouseListener; });
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");

class Mouse {
    constructor() {
        this._isDown = false;
        this._position = new engine_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this._canvas = null;
        this._isMouseDownEvent = false;
        this._isMouseUpEvent = false;
        this._isMouseMoveEvent = false;
        this._handled = false;
    }
    get isDown() { return this._isDown; }
    get position() { return this._position; }
    get isMouseDownEvent() { return this._isMouseDownEvent; }
    get isMouseUpEvent() { return this._isMouseUpEvent; }
    get isMouseMoveEvent() { return this._isMouseMoveEvent; }
    get handled() { return this._handled; }
    setHandled() { this._handled = true; }
}
class MouseListener extends Mouse {
    get isDown() { return this._isDown; }
    set isDown(val) { this._isDown = val; }
    get isMouseDownEvent() { return this._isMouseDownEvent; }
    set isMouseDownEvent(val) { this._isMouseDownEvent = val; }
    get isMouseUpEvent() { return this._isMouseUpEvent; }
    set isMouseUpEvent(val) { this._isMouseUpEvent = val; }
    get isMouseMoveEvent() { return this._isMouseMoveEvent; }
    set isMouseMoveEvent(val) { this._isMouseMoveEvent = val; }
    setEvents(io) { io.onUpdateEnd.push(this.onUpdateEnd.bind(this), this); }
    addTo(doc, canvas) {
        this._canvas = canvas;
        canvas.addEventListener("mousedown", this.mouseDown.bind(this), false);
        canvas.addEventListener("mousemove", this.mouseXY.bind(this), false);
        canvas.addEventListener("touchstart", this.touchDown.bind(this), false);
        canvas.addEventListener("touchmove", this.touchXY.bind(this), true);
        canvas.addEventListener("touchend", this.touchUp.bind(this), false);
        doc.body.addEventListener("mouseup", this.mouseUp.bind(this), false);
        doc.body.addEventListener("touchcancel", this.touchUp.bind(this), false);
    }
    onUpdateEnd() {
        this.isMouseDownEvent = false;
        this.isMouseUpEvent = false;
        this.isMouseMoveEvent = false;
        this._handled = false;
    }
    mouseUp(e) {
        this.isDown = false;
        this.isMouseUpEvent = true;
        this.mouseXY(e);
    }
    touchUp() {
        this.isDown = false;
        this.isMouseUpEvent = true;
    }
    mouseDown(e) {
        this.isDown = true;
        this.isMouseDownEvent = true;
        this.mouseXY(e);
    }
    touchDown(e) {
        this.isDown = true;
        this.isMouseDownEvent = true;
        this.touchXY(e);
    }
    mouseXY(e) {
        this.isMouseMoveEvent = true;
        this._position = new engine_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](e.pageX - this._canvas.offsetLeft, e.pageY - this._canvas.offsetTop);
    }
    touchXY(e) {
        this.isMouseMoveEvent = true;
        e.preventDefault();
        this._position = new engine_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](e.targetTouches[0].pageX - this._canvas.offsetLeft, e.targetTouches[0].pageY - this._canvas.offsetTop);
    }
}


/***/ }),

/***/ "./src/engine/io/Timing.ts":
/*!*********************************!*\
  !*** ./src/engine/io/Timing.ts ***!
  \*********************************/
/*! exports provided: Timing, TimingListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timing", function() { return Timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingListener", function() { return TimingListener; });
class Timing {
    constructor() {
        this.loopStart = 0;
        this.loopTime = 0;
        this.beginStart = 0;
        this.beginTime = 0;
        this.updateStart = 0;
        this.updateTime = 0;
        this.drawStart = 0;
        this.drawTime = 0;
        this.endStart = 0;
        this.endTime = 0;
        this.slowDown = 0;
        this.fps = 0;
        this.updateSteps = 0;
        this.mainLoopTimestamp = 0;
        this.delta = 0;
        this.deltaS = 0;
    }
}
class TimingListener extends Timing {
    setEvents(io) {
        io.onBeginStart.push(this.onBeginStart.bind(this), this);
        io.onBeginEnd.push(this.onBeginEnd.bind(this), this);
        io.onUpdateStart.push(this.onUpdateStart.bind(this), this);
        io.onUpdateEnd.push(this.onUpdateEnd.bind(this), this);
        io.onDrawStart.push(this.onDrawStart.bind(this), this);
        io.onDrawEnd.push(this.onDrawEnd.bind(this), this);
        io.onEndStart.push(this.onEndStart.bind(this), this);
        io.onEndEnd.push(this.onEndEnd.bind(this), this);
    }
    onBeginStart(timestamp, delta) {
        this.mainLoopTimestamp = timestamp;
        this.loopStart = Date.now();
        this.beginStart = Date.now();
        this.updateSteps = MainLoop.getNumUpdateSteps();
        this.delta = delta;
        this.deltaS = delta / 1000;
    }
    onBeginEnd() {
        this.delay((Date.now() - this.beginStart) * this.slowDown);
        this.beginTime = Date.now() - this.beginStart;
    }
    onUpdateStart(delta) {
        this.updateStart = Date.now();
        this.delta = delta;
        this.deltaS = delta / 1000;
    }
    onUpdateEnd() {
        this.delay((Date.now() - this.updateStart) * this.slowDown);
        this.updateTime = Date.now() - this.updateStart;
    }
    onDrawStart() {
        this.drawStart = Date.now();
    }
    onDrawEnd() {
        this.delay((Date.now() - this.drawStart) * this.slowDown);
        this.drawTime = Date.now() - this.drawStart;
    }
    onEndStart(fps) {
        this.endStart = Date.now();
        this.fps = fps;
    }
    onEndEnd() {
        this.delay((Date.now() - this.endStart) * this.slowDown);
        this.endTime = Date.now() - this.endStart;
        this.loopTime = Date.now() - this.loopStart;
    }
    delay(time) {
        if (time <= 0)
            return;
        let start = Date.now();
        let now = start;
        while (true) {
            now = Date.now();
            if (now - start > time)
                break;
        }
    }
}


/***/ }),

/***/ "./src/engine/transform/Bounds.ts":
/*!****************************************!*\
  !*** ./src/engine/transform/Bounds.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bounds; });
/* harmony import */ var _util_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var _dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var _dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimension/ConditionalDimension */ "./src/engine/transform/dimension/ConditionalDimension.ts");



class Bounds {
    constructor(...dimensions) {
        this._dimensions = [];
        this._referenceWidth = undefined;
        this._targetAspectRatio = undefined;
        this._minDimension = undefined;
        this._maxDimension = undefined;
        this._transform = null;
        this._cachedDimension = new _dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this._onResize = new _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._dirty = true;
        this.calculating = false;
        this.calculationFailed = false;
        this._dimensions = dimensions;
    }
    ;
    get transform() { return this._transform; }
    set transform(val) { this._transform = val; }
    get dirty() { return this._dirty; }
    set dirty(val) { this._dirty = val; }
    get cachedDimension() { return this._cachedDimension; }
    set cachedDimension(val) { this._cachedDimension = val; }
    get onResize() { return this._onResize; }
    get devicePixelRatio() { return window.devicePixelRatio; }
    get parentBounds() {
        if (this.transform)
            if (this.transform.parent)
                return this.transform.parent.bounds;
        return null;
    }
    get targetAspectRatio() { return this._targetAspectRatio; }
    set targetAspectRatio(aspectRatio) { this._targetAspectRatio = aspectRatio; }
    get maxDimension() { return this._maxDimension; }
    set maxDimension(val) { this._maxDimension = val; }
    get minDimension() { return this._minDimension; }
    set minDimension(val) { this._minDimension = val; }
    addDimension(dim) {
        this._dimensions.push(dim);
        if (this.transform.gameObject.created) {
            if (this.hasResized())
                this._onChange();
        }
        return dim;
    }
    clearDimensions() {
        this._dimensions = [];
        if (this.hasResized())
            this._onChange();
    }
    get dimensions() { return this._dimensions; }
    get dimension() {
        if (!(this.dirty))
            return this._cachedDimension;
        this.calculationFailed = false;
        let tmp = this._calculateDimension();
        this.dirty = this.calculationFailed;
        if (this.calculationFailed)
            this.transform.positioningIsDirty();
        this._cachedDimension = tmp;
        return this._cachedDimension;
    }
    get referenceWidth() {
        if (this._referenceWidth !== undefined)
            return this._referenceWidth;
        if (this.parentBounds)
            return this.parentBounds.referenceWidth;
        return undefined;
    }
    set referenceWidth(referenceWidth) { this._referenceWidth = referenceWidth; }
    get referenceHeight() {
        if (this._referenceWidth !== undefined)
            return this.referenceWidth * this.dimension.aspect;
        if (this.parentBounds)
            return this.parentBounds.referenceHeight;
        return undefined;
    }
    get referenceScale() {
        if (this._referenceWidth !== undefined)
            return this.dimension.pixelWidth(this.parentBounds) / this._referenceWidth;
        if (this.parentBounds)
            return this.parentBounds.referenceScale;
        return 0;
    }
    destroy() {
        this.onResize.removeAll();
        this._dimensions.forEach(d => d.destroy());
    }
    _limitDimension(dimension) {
        let nWidth = dimension.width;
        let nHeight = dimension.height;
        if (this.minDimension) {
            if (this.minDimension.pixelWidth(this.parentBounds))
                nWidth = Math.max(nWidth, this.minDimension.pixelWidth(this.parentBounds));
            if (this.minDimension.pixelHeight(this.parentBounds))
                nHeight = Math.max(nHeight, this.minDimension.pixelHeight(this.parentBounds));
        }
        if (this.maxDimension) {
            if (this.maxDimension.pixelWidth(this.parentBounds))
                nWidth = Math.min(nWidth, this.maxDimension.pixelWidth(this.parentBounds));
            if (this.maxDimension.pixelHeight(this.parentBounds))
                nHeight = Math.min(nHeight, this.maxDimension.pixelHeight(this.parentBounds));
        }
        if (this.targetAspectRatio) {
            if (nHeight < nWidth * this.targetAspectRatio)
                nWidth = nHeight * (1 / this.targetAspectRatio);
            else
                nHeight = nWidth * this.targetAspectRatio;
        }
        return new _dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"](nWidth, nHeight);
    }
    _calculateDimension() {
        this.calculating = true;
        let width = 0;
        let height = 0;
        let dim = null;
        if (this.transform)
            this._dimensions.forEach(d => {
                dim = d.asSimplePixelDimension(this.parentBounds);
                if ((dim.width === undefined) || (dim.height === undefined))
                    this.calculationFailed = true;
                else {
                    width += dim.width;
                    height += dim.height;
                }
            });
        let result = this._limitDimension(new _dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"](width, height));
        this.calculating = false;
        return result;
    }
    hasResized() {
        if (this.dirty)
            return true;
        let dim = this._calculateDimension();
        return (!_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"].equals(dim, this._cachedDimension));
    }
    hasResizedAutoUpdate() {
        if (this.dirty)
            return true;
        let dim = this._calculateDimension();
        let r = (!_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"].equals(dim, this._cachedDimension));
        if (r)
            this._cachedDimension = dim;
        return r;
    }
    _onChange() {
        if (this.transform) {
            this.transform.recalculate();
            _util_Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this.onResize);
        }
    }
    checkForUpdatedDimensions() {
        let updated = false;
        let d;
        for (let i = 0; i < this._dimensions.length; i++) {
            d = this._dimensions[i];
            if (d.updated) {
                updated = true;
                break;
            }
            if (d instanceof _dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_2__["default"])
                if (!(d.previousDimension) || !(_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"].equals(d.dimensionDontUpdatePrevious(this.transform.bounds), d.previousDimension))) {
                    updated = true;
                    break;
                }
        }
        if (updated) {
            this._onChange();
            this.dimensions.forEach(d => d.updated = false);
        }
    }
}


/***/ }),

/***/ "./src/engine/transform/Position.ts":
/*!******************************************!*\
  !*** ./src/engine/transform/Position.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Position; });
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _translation_ConditionalTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation/ConditionalTranslation */ "./src/engine/transform/translation/ConditionalTranslation.ts");
/* harmony import */ var _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var _translation_AdjacentTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation/AdjacentTranslation */ "./src/engine/transform/translation/AdjacentTranslation.ts");




class Position {
    constructor(...Translations) {
        this._transform = null;
        this._resetDrawPos = false;
        this._cachedAbsolutePosition = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this._cachedDrawPosition = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this._drawCacheDirty = true;
        this._absoluteCacheDirty = true;
        this._translations = Translations;
    }
    get transform() { return this._transform; }
    set transform(val) { this._transform = val; }
    get resetDrawPos() { return this._resetDrawPos; }
    set resetDrawPos(val) { this._resetDrawPos = val; }
    get drawCacheDirty() { return this._drawCacheDirty; }
    set drawCacheDirty(val) { this._drawCacheDirty = val; }
    get absoluteCacheDirty() { return this._absoluteCacheDirty; }
    set absoluteCacheDirty(val) { this._absoluteCacheDirty = val; }
    get translations() { return this._translations; }
    addTranslation(...translations) {
        if (translations.length > 1)
            translations.forEach(t => this.addTranslation(t));
        else {
            let translation = translations[0];
            let found = false;
            if (translation.preserve)
                this._translations.forEach(t => {
                    if (!t.preserve)
                        if ((t.constructor === translation.constructor) && (_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(t.anchor, translation.anchor))) {
                            if (t instanceof _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                                let rb1 = t.referenceBounds;
                                let rb2 = translation.referenceBounds;
                                if (rb1 === rb2) {
                                    found = true;
                                    t.position = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](t.position.x + translation.position.x, t.position.y + translation.position.y);
                                }
                            }
                            else if ((t instanceof _translation_ConditionalTranslation__WEBPACK_IMPORTED_MODULE_1__["default"]) || (t instanceof _translation_AdjacentTranslation__WEBPACK_IMPORTED_MODULE_3__["default"])) { }
                            else {
                                found = true;
                                t.position = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](t.position.x + translation.position.x, t.position.y + translation.position.y);
                            }
                        }
                });
            if (!found)
                this._translations.push(translation);
            if (this.transform.gameObject.created)
                if (this.hasMoved())
                    this._onChange();
        }
    }
    clearTranslations() {
        this._translations = [];
        if (this.hasMoved())
            this._onChange();
    }
    absolutePositionTopLeft() {
        if (!(this.absoluteCacheDirty))
            return this._cachedAbsolutePosition;
        let tmp = this._calcuateAbsolutePosition();
        if (!_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(tmp, this._cachedAbsolutePosition)) {
            if (this.transform)
                this.transform.positioningIsDirty();
        }
        else
            this.absoluteCacheDirty = false;
        this._cachedAbsolutePosition = tmp;
        return this._cachedAbsolutePosition;
    }
    drawPositionTopLeft() {
        if (this._resetDrawPos)
            return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        if (!(this._drawCacheDirty))
            return this._cachedDrawPosition;
        let tmp = this._calculateDrawPosition();
        if (!_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(tmp, this._cachedDrawPosition)) {
            if (this.transform)
                this.transform.positioningIsDirty();
        }
        else
            this._drawCacheDirty = false;
        this._cachedDrawPosition = tmp;
        return this._cachedDrawPosition;
    }
    destroy() {
        this._translations.forEach(t => t.destroy());
    }
    checkForUpdatedTranslations() {
        let updated = false;
        let t;
        for (let i = 0; i < this._translations.length; i++) {
            t = this._translations[i];
            if (t.updated) {
                updated = true;
                break;
            }
            if (t instanceof _translation_ConditionalTranslation__WEBPACK_IMPORTED_MODULE_1__["default"])
                if ((!(t.previousAbsolutePosition)) || (!(_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(t.absolutePositionDontUpdatePrevious(this.transform.bounds), t.previousAbsolutePosition)))) {
                    updated = true;
                    break;
                }
        }
        if (updated) {
            this._onChange();
            this._translations.forEach(d => d.updated = false);
        }
    }
    get position() { return this.absolutePositionTopLeft(); }
    get drawPosition() { return this.drawPositionTopLeft(); }
    hasMoved() {
        if (this.absoluteCacheDirty)
            return true;
        return (!_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(this._calcuateAbsolutePosition(), this._cachedAbsolutePosition));
    }
    hasMovedAutoUpdate() {
        if (this.absoluteCacheDirty)
            return true;
        let oldCache = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](this._cachedAbsolutePosition.x, this._cachedAbsolutePosition.y);
        return (!_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(this.absolutePositionTopLeft(), oldCache));
    }
    hasMovedDrawAutoUpdate() {
        if (this.drawCacheDirty)
            return true;
        let oldCache = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](this._cachedDrawPosition.x, this._cachedDrawPosition.y);
        return (!_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(this.drawPositionTopLeft(), oldCache));
    }
    _onChange() {
        if (this.transform)
            this.transform.recalculate();
    }
    _calcuateAbsolutePosition() {
        let tmpPos;
        let x = 0;
        let y = 0;
        this._translations.forEach(t => {
            if (this.transform) {
                tmpPos = t.absolutePositionTopLeft(this.transform.bounds);
                x += tmpPos.x;
                y += tmpPos.y;
            }
        });
        if (this.transform)
            if (this.transform.parent)
                if (this.transform.parent.hasPosition()) {
                    tmpPos = this.transform.parent.getCanonicalPosition();
                    x += tmpPos.x;
                    y += tmpPos.y;
                }
        return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    }
    _calculateDrawPosition() {
        if (this._resetDrawPos)
            return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        let tmpPos;
        let x = 0;
        let y = 0;
        this._translations.forEach(t => {
            if (this.transform) {
                tmpPos = t.absolutePositionTopLeft(this.transform.bounds);
                x += tmpPos.x;
                y += tmpPos.y;
            }
        });
        if (this.transform)
            if (this.transform.parent)
                if (this.transform.parent.hasPosition()) {
                    tmpPos = this.transform.parent.getDrawPosition();
                    x += tmpPos.x;
                    y += tmpPos.y;
                }
        return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    }
}


/***/ }),

/***/ "./src/engine/transform/dimension/ConditionalDimension.ts":
/*!****************************************************************!*\
  !*** ./src/engine/transform/dimension/ConditionalDimension.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionalDimension; });
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dimension */ "./src/engine/transform/dimension/Dimension.ts");

class ConditionalDimension extends _Dimension__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(conditionalFunction) {
        super(0, 0);
        this._conditionalFunction = conditionalFunction;
    }
    get previousDimension() { return this._previousDimension; }
    pixelWidth(bounds) { return this._conditionalDim(bounds).width; }
    pixelHeight(bounds) { return this._conditionalDim(bounds).height; }
    _conditionalDim(bounds) {
        let dim = null;
        if (bounds)
            dim = bounds.dimension;
        this._previousDimension = this._conditionalFunction(dim);
        return this._previousDimension;
    }
    dimensionDontUpdatePrevious(bounds) {
        return this._conditionalFunction(bounds.dimension);
    }
}


/***/ }),

/***/ "./src/engine/transform/dimension/Dimension.ts":
/*!*****************************************************!*\
  !*** ./src/engine/transform/dimension/Dimension.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dimension; });
class Dimension {
    constructor(width, height) {
        this._updated = false;
        this._preserve = false;
        this._width = width;
        this._height = height;
    }
    markAsUpdated() { this.updated = true; }
    destroy() { }
    get updated() { return this._updated; }
    set updated(val) { this._updated = val; }
    get width() { return this._width; }
    set width(val) {
        if (val !== this.width)
            this.updated = true;
        this._width = val;
    }
    get height() { return this._height; }
    set height(val) {
        if (val !== this._height)
            this.updated = true;
        this._height = val;
    }
    pixelWidth(bounds) { return this.width; }
    pixelHeight(bounds) { return this.height; }
    physicalPixelWidth(bounds) { return this.pixelWidth(bounds) * bounds.devicePixelRatio; }
    physicalPixelHeight(bounds) { return this.pixelHeight(bounds) * bounds.devicePixelRatio; }
    asSimplePixelDimension(bounds) { return new Dimension(this.pixelWidth(bounds), this.pixelHeight(bounds)); }
    get aspect() { return this.height / this.width; }
    get preserve() { return this._preserve; }
    set preserve(val) { this._preserve = val; }
    static add(a, b) {
        return new Dimension(a.width + b.width, a.height + b.height);
    }
    static equals(a, b) {
        return (a.width === b.width) && (a.height === b.height);
    }
}


/***/ }),

/***/ "./src/engine/transform/dimension/PixelDimension.ts":
/*!**********************************************************!*\
  !*** ./src/engine/transform/dimension/PixelDimension.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixelDimension; });
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dimension */ "./src/engine/transform/dimension/Dimension.ts");

class PixelDimension extends _Dimension__WEBPACK_IMPORTED_MODULE_0__["default"] {
    pixelWidth(bounds) { return this.width; }
    pixelHeight(bounds) { return this.height; }
}


/***/ }),

/***/ "./src/engine/transform/dimension/ProportionalDimension.ts":
/*!*****************************************************************!*\
  !*** ./src/engine/transform/dimension/ProportionalDimension.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProportionalDimension; });
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dimension */ "./src/engine/transform/dimension/Dimension.ts");

class ProportionalDimension extends _Dimension__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, referenceBounds) {
        super(width, height);
        if (referenceBounds) {
            this._referenceBounds = referenceBounds;
            this._referenceBounds.onResize.push(this.markAsUpdated.bind(this), this);
        }
    }
    destroy() {
        if (this._referenceBounds)
            this._referenceBounds.onResize.unregister(this);
    }
    pixelWidth(bounds) {
        if (this._referenceBounds) {
            if (this._referenceBounds.calculating)
                return this.width * this._referenceBounds.cachedDimension.width;
            else
                return this.width * this._referenceBounds.dimension.width;
        }
        else if (bounds)
            return this.width * bounds.dimension.width;
        return 0;
    }
    pixelHeight(bounds) {
        if (this._referenceBounds) {
            if (this._referenceBounds.calculating)
                return this.height * this._referenceBounds.cachedDimension.height;
            else
                return this.height * this._referenceBounds.dimension.height;
        }
        else if (bounds)
            return this.height * bounds.dimension.height;
        return 0;
    }
}


/***/ }),

/***/ "./src/engine/transform/dimension/RelativeDimension.ts":
/*!*************************************************************!*\
  !*** ./src/engine/transform/dimension/RelativeDimension.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RelativeDimension; });
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dimension */ "./src/engine/transform/dimension/Dimension.ts");

class RelativeDimension extends _Dimension__WEBPACK_IMPORTED_MODULE_0__["default"] {
    pixelWidth(bounds) {
        if (bounds)
            return this.width * bounds.referenceScale;
        return undefined;
    }
    pixelHeight(bounds) {
        if (bounds)
            return this.height * bounds.referenceScale;
        return undefined;
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/AdjacentTranslation.ts":
/*!*****************************************************************!*\
  !*** ./src/engine/transform/translation/AdjacentTranslation.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdjacentTranslation; });
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation */ "./src/engine/transform/translation/Translation.ts");
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");


class AdjacentTranslation extends _Translation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(target, offset) {
        super(0, 0, new _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0));
        this.target = target;
        this.offset = offset;
    }
    absolutePosition(bounds) {
        let container = bounds.transform.parent;
        let newPos = null;
        let tlPos = _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"].minus(this.target.position.absolutePositionTopLeft(), container.position.absolutePositionTopLeft());
        if (bounds.dimension.height + this.offset < tlPos.y)
            newPos = new _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](tlPos.x, tlPos.y - this.offset - bounds.dimension.height);
        else if (bounds.dimension.width + this.offset < tlPos.x)
            newPos = new _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](tlPos.x - this.offset - bounds.dimension.width, tlPos.y);
        else if (bounds.dimension.height + this.offset + tlPos.y < container.bounds.dimension.height)
            newPos = new _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](tlPos.x, tlPos.y + this.target.bounds.dimension.height + this.offset);
        else if (bounds.dimension.width + this.offset + tlPos.x < container.bounds.dimension.width)
            newPos = new _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](tlPos.x + this.target.bounds.dimension.width + this.offset, tlPos.y);
        return newPos;
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/ConditionalTranslation.ts":
/*!********************************************************************!*\
  !*** ./src/engine/transform/translation/ConditionalTranslation.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionalTranslation; });
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation */ "./src/engine/transform/translation/Translation.ts");
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");


class ConditionalTranslation extends _Translation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(conditionalFunction, anchor) {
        if (anchor instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            super(0, 0, anchor);
        }
        else if (typeof anchor === "boolean") {
            super(0, 0);
        }
        else
            super(0, 0);
        this._conditionalFunction = conditionalFunction;
    }
    get previousAbsolutePosition() {
        return this._previousAbsolutePosition;
    }
    absolutePosition(bounds) {
        let pDim = null;
        if (bounds.parentBounds)
            pDim = bounds.parentBounds.dimension;
        this._previousAbsolutePosition = this._conditionalFunction(bounds.transform, pDim);
        return this._previousAbsolutePosition;
    }
    absolutePositionDontUpdatePrevious(bounds) {
        return this._conditionalFunction(bounds.transform, bounds.parentBounds.dimension);
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/PixelTranslation.ts":
/*!**************************************************************!*\
  !*** ./src/engine/transform/translation/PixelTranslation.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixelTranslation; });
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation */ "./src/engine/transform/translation/Translation.ts");

class PixelTranslation extends _Translation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    absolutePosition(bounds) {
        return this.position;
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/ProportionalTranslation.ts":
/*!*********************************************************************!*\
  !*** ./src/engine/transform/translation/ProportionalTranslation.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProportionalTranslation; });
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation */ "./src/engine/transform/translation/Translation.ts");
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Bounds */ "./src/engine/transform/Bounds.ts");



class ProportionalTranslation extends _Translation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, anchor, referenceBounds) {
        if (x instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (y instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                super(x, y);
                if (anchor instanceof _Bounds__WEBPACK_IMPORTED_MODULE_2__["default"])
                    this._referenceBounds = anchor;
            }
            else {
                super(x);
                if (y instanceof _Bounds__WEBPACK_IMPORTED_MODULE_2__["default"])
                    this._referenceBounds = y;
            }
        }
        else if ((typeof (x) === "number") && (typeof (y) === "number")) {
            if (anchor instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                super(x, y, anchor);
                if (referenceBounds)
                    this._referenceBounds = referenceBounds;
            }
            else {
                super(x, y);
                if (anchor instanceof _Bounds__WEBPACK_IMPORTED_MODULE_2__["default"])
                    this._referenceBounds = anchor;
            }
        }
        if (this._referenceBounds)
            this._referenceBounds.onResize.push(this.markAsUpdated.bind(this), this);
    }
    get referenceBounds() { return this._referenceBounds; }
    absolutePosition(bounds) {
        let dim = null;
        if (this._referenceBounds)
            dim = this._referenceBounds.dimension;
        else if (bounds.parentBounds)
            dim = bounds.parentBounds.dimension;
        else
            return new _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        let x = this.position.x * dim.width;
        let y = this.position.y * dim.height;
        return new _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
    }
    destroy() {
        if (this._referenceBounds)
            this._referenceBounds.onResize.unregister(this);
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/Translation.ts":
/*!*********************************************************!*\
  !*** ./src/engine/transform/translation/Translation.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Translation; });
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");

class Translation {
    constructor(x, y, anchor) {
        this._anchor = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this._position = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this._updated = false;
        this._preserve = false;
        if (x instanceof _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._position = x;
            if (y instanceof _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"])
                this.anchor = y;
        }
        else {
            if ((typeof (x) === "number") && (typeof (y) === "number"))
                this._position = new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](x || 0, y || 0);
            if (anchor)
                this.anchor = anchor;
        }
    }
    get updated() { return this._updated; }
    set updated(val) { this._updated = val; }
    markAsUpdated() { this.updated = true; }
    get position() { return this._position; }
    set position(val) {
        if (!_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(val, this.position))
            this.markAsUpdated();
        this._position = val;
    }
    get preserve() { return this._preserve; }
    set preserve(val) { this._preserve = val; }
    get anchor() { return this._anchor; }
    set anchor(val) {
        if (!_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(val, this.anchor))
            this.markAsUpdated();
        this._anchor = val;
    }
    anchorOffset(bounds) {
        let dim = bounds.dimension;
        return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](dim.width * this.anchor.x, dim.height * this.anchor.y);
    }
    absolutePositionTopLeft(bounds) { return _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(this.absolutePosition(bounds), this.anchorOffset(bounds)); }
    destroy() { }
}


/***/ }),

/***/ "./src/engine/util/Event.ts":
/*!**********************************!*\
  !*** ./src/engine/util/Event.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class DuplicateMap {
    constructor() {
        this.entries = [];
    }
    get length() { return this.entries.length; }
    push(key, value) { this.entries.push(new Pair(key, value)); }
    delete(key, value) {
        let newEntries = [];
        this.entries.forEach(x => {
            if (x.key !== key)
                newEntries.push(x);
            else if ((value) && (x.value !== value))
                newEntries.push(x);
        });
        this.entries = newEntries;
    }
    deleteValue(value) {
        let newEntries = [];
        this.entries.forEach(x => {
            if (x.value !== value)
                newEntries.push(x);
        });
        this.entries = newEntries;
    }
    clear() {
        this.entries = [];
    }
    forEach(f) {
        this.entries.forEach(f);
    }
}
class Event {
    constructor() {
        this._callbacks = new DuplicateMap();
    }
    call(...args) { this._callbacks.forEach(x => x.value(...args)); }
    push(callback, creator) {
        this._callbacks.push(creator, callback);
        return this;
    }
    unregister(creator) {
        let len = this._callbacks.length;
        this._callbacks.delete(creator);
    }
    removeAll() {
        this._callbacks.clear();
    }
    static link(source, dest, creator) {
        if (source && dest)
            source.push(dest.call.bind(dest), creator);
    }
    static call(event, ...args) {
        if (event)
            event.call.bind(event)(...args);
    }
}


/***/ }),

/***/ "./src/engine/util/ObserverVariable.ts":
/*!*********************************************!*\
  !*** ./src/engine/util/ObserverVariable.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObserverVariable; });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "./src/engine/util/Event.ts");

class ObserverVariable {
    constructor(value) {
        this._value = value;
        this._onUpdate = new _Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    get onUpdate() { return this._onUpdate; }
    get value() { return this._value; }
    set value(val) {
        let update = (val !== this._value);
        this._value = val;
        if (update)
            _Event__WEBPACK_IMPORTED_MODULE_0__["default"].call(this.onUpdate, val);
    }
    clear() {
        this._onUpdate.removeAll();
    }
}


/***/ }),

/***/ "./src/engine/util/Point.ts":
/*!**********************************!*\
  !*** ./src/engine/util/Point.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
class Point {
    constructor(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }
    get x() { return this._x; }
    get y() { return this._y; }
    get magnitude() { return Math.sqrt(this._x * this._x + this._y * this._y); }
    get isZero() { return (this.x === 0) && (this.y === 0); }
    static add(a, b) {
        let x = a.x + b.x;
        let y = a.y + b.y;
        return new Point(x, y);
    }
    static minus(a, b) {
        if (!b) {
            return this.minus(new Point(0, 0), a);
        }
        let x = a.x - b.x;
        let y = a.y - b.y;
        return new Point(x, y);
    }
    static multiply(p, s) {
        if (s instanceof Point)
            return new Point(p.x * s.x, p.y * s.y);
        else
            return new Point(p.x * s, p.y * s);
    }
    static dotProduct(p, s) {
        return (p.x * s.x + p.y * s.y);
    }
    static divide(p, s) {
        let x = p.x / s;
        let y = p.y / s;
        return new Point(x, y);
    }
    static crossProduct(p, s) {
        return p.x * s.y - p.y * s.x;
    }
    static equals(a, b) {
        return ((a.x === b.x) && (a.y === b.y));
    }
    static distance(a, b) {
        let x = a.x - b.x;
        let y = a.y - b.y;
        return Math.sqrt(x * x + y * y);
    }
    rotate(angle) {
        let x = Math.cos(angle) * this._x + -Math.sin(angle) * this._y;
        let y = Math.sin(angle) * this._x + Math.cos(angle) * this._y;
        return new Point(x, y);
    }
    closestPoint(points) {
        let smallestDistance = undefined;
        let winner;
        points.forEach(p => {
            let d = Point.minus(p, this).magnitude;
            if ((smallestDistance === undefined) || (d < smallestDistance)) {
                smallestDistance = d;
                winner = p;
            }
        });
        return winner;
    }
    get normalised() {
        let magnitude = this.magnitude;
        return new Point(this.x / magnitude, this.y / magnitude);
    }
    static angleBetween(a, b) {
        return Math.atan2(b.y, b.x) - Math.atan2(a.y, a.x);
    }
    projectionIn(vector) {
        return Point.dotProduct(this, vector.normalised);
    }
    static angleToUnitVector(angle) {
        return new Point(Math.cos(angle), Math.sin(angle));
    }
    asAngle() {
        return Math.atan2(this.x, this.y);
    }
}


/***/ }),

/***/ "./src/engine/util/Point3.ts":
/*!***********************************!*\
  !*** ./src/engine/util/Point3.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point3; });
class Point3 {
    constructor(x, y, z) {
        if (Array.isArray(x)) {
            this._x = x[0];
            this._y = x[1];
            this._z = x[2];
        }
        else if (x instanceof Point3) {
            this._x = x.x;
            this._y = x.y;
            this._z = x.z;
        }
        else {
            this._x = x || 0;
            this._y = y || 0;
            this._z = z || 0;
        }
    }
    get x() { return this._x; }
    get y() { return this._y; }
    get z() { return this._z; }
    set x(val) { this._x = val; }
    set y(val) { this._y = val; }
    set z(val) { this._z = val; }
    equals(b) {
        return ((this.x === b.x) && (this.y === b.y) && (this.z === b.z));
    }
    static minus(a, b) {
        if (!b) {
            return this.minus(new Point3(0, 0, 0), a);
        }
        let x = a.x - b.x;
        let y = a.y - b.y;
        let z = a.z - b.z;
        return new Point3(x, y, z);
    }
    magnitude() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }
}


/***/ }),

/***/ "./src/engine/util/PolyShape.ts":
/*!**************************************!*\
  !*** ./src/engine/util/PolyShape.ts ***!
  \**************************************/
/*! exports provided: PolyShape, ConvexPolygon, PolyLine, PolyEdge, PolyRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyShape", function() { return PolyShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvexPolygon", function() { return ConvexPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyLine", function() { return PolyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyEdge", function() { return PolyEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyRect", function() { return PolyRect; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _gameobject_PolygonCollision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameobject/PolygonCollision */ "./src/engine/gameobject/PolygonCollision.ts");


class PolyShape {
    get points() { return this._points; }
    get edges() {
        let e = [];
        for (let i = 0; i < this.points.length - 1; i++) {
            e.push(new PolyEdge([this.points[i], this.points[i + 1]]));
        }
        e.push(new PolyEdge([this.points[this.points.length - 1], this.points[0]]));
        return e;
    }
    constructor(points) {
        this._points = points;
    }
    centerPoint() {
        let xTotal = 0;
        let yTotal = 0;
        this.points.forEach(p => {
            xTotal += p.x;
            yTotal += p.y;
        });
        return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](xTotal / this.points.length, yTotal / this.points.length);
    }
    maximumProjectionOnVector(vector) {
        let currentMax = undefined;
        let leadingPoint = null;
        let unitVector = vector.normalised;
        this.points.forEach(p => {
            let proj = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].dotProduct(p, unitVector);
            if ((currentMax === undefined) || (proj > currentMax)) {
                leadingPoint = p;
                currentMax = proj;
            }
        });
        return leadingPoint;
    }
}
class ConvexPolygon extends PolyShape {
    constructor() {
        super(...arguments);
        this._clockwise = true;
    }
    get clockwise() { return this._clockwise; }
    set clockwise(val) { this._clockwise = val; }
    clone(newPoints) {
        let p = new ConvexPolygon(newPoints);
        p.clockwise = this.clockwise;
        return p;
    }
    intersects(other) {
        this.points.forEach(p => { if (other.containsPoint(p))
            return true; });
        other.points.forEach(p => { if (this.containsPoint(p))
            return true; });
        return false;
    }
    contains(other) {
        other.points.forEach(p => { if (!(this.containsPoint(p)))
            return false; });
        return true;
    }
    intersectionsWithEdge(start, end) {
        let intersections = [];
        this.edges.forEach(e => {
            let point = e.pointOfIntersectionWithEdge(start, end);
            if (point)
                intersections.push(new _gameobject_PolygonCollision__WEBPACK_IMPORTED_MODULE_1__["Intersection"](point, e));
        });
        return intersections;
    }
    containsPoint(point, y) {
        let x = 0;
        if (point instanceof _Point__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            y = point.y;
            x = point.x;
        }
        else
            x = point;
        this.edges.forEach(e => {
            if (!(this.rightOfEdge(x, y, e))
                || (!(this.clockwise) && !(this.leftOfEdge(x, y, e)))) {
                return false;
            }
        });
        return true;
    }
    rightOfEdge(px, py, e) {
        let grad = (e[1].y - e[0].y) / (e[1].x - e[0].x);
        if (grad === Infinity)
            return px <= e[0].x;
        if (grad === -Infinity)
            return px >= e[0].x;
        let intersection = e[0].y - (grad * e[0].x);
        let expectedY = (px * grad + intersection);
        if (e[1].x > e[0].x)
            return (py >= expectedY);
        if (e[1].x < e[0].x)
            return (py <= expectedY);
    }
    leftOfEdge(px, py, e) {
        let grad = (e[1].y - e[0].y) / (e[1].x - e[0].x);
        if (grad === Infinity) {
            if (e[0].y > e[1].y)
                return px <= e[0].x;
            if (e[0].y < e[1].y)
                return px >= e[0].x;
        }
        let intersection = e[0].y - (grad * e[0].x);
        let expectedY = (px * grad + intersection);
        if (e[1].x > e[0].x)
            return (py <= expectedY);
        if (e[1].x < e[0].x)
            return (py >= expectedY);
    }
}
class PolyLine extends PolyShape {
    clone() {
        let p = new PolyLine(this.points);
        return p;
    }
}
class PolyEdge extends PolyLine {
    constructor(points) {
        if (points.length !== 2)
            throw new Error("PolyEdge expects a points array of exactly 2");
        super(points);
    }
    get vector() { return _Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(this.points[1], this.points[0]); }
    pointOfIntersectionWithEdge(edge, end) {
        let p;
        let r;
        if (edge instanceof PolyEdge) {
            p = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](edge.points[0].x, edge.points[0].y);
            r = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](edge.points[1].x, edge.points[1].y);
        }
        else if (edge instanceof _Point__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            p = edge;
            r = end;
        }
        r = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(r, p);
        let q = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.points[0].x, this.points[0].y);
        let s = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.points[1].x, this.points[1].y), q);
        let qmp = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(q, p);
        let pmq = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].minus(p, q);
        let rxs = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].crossProduct(r, s);
        let t = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].crossProduct(qmp, s) / rxs;
        let u = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].crossProduct(pmq, r) / _Point__WEBPACK_IMPORTED_MODULE_0__["default"].crossProduct(s, r);
        let pmqxr = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].crossProduct(pmq, r);
        if ((rxs === 0) && (pmqxr === 0)) {
            let rrs = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].divide(r, _Point__WEBPACK_IMPORTED_MODULE_0__["default"].dotProduct(r, r));
            let t0 = _Point__WEBPACK_IMPORTED_MODULE_0__["default"].dotProduct(pmq, rrs);
            let t1 = t0 + _Point__WEBPACK_IMPORTED_MODULE_0__["default"].dotProduct(s, rrs);
            if (((t0 >= 0 && t0 <= 1)) || ((t1 >= 0) && (t1 <= 1)) || ((t0 <= 0) && (t1 >= 0)) || ((t0 >= 1) && (t1 <= 0))) {
                console.log("Colinear and overlapping");
                return null;
            }
            else {
                return null;
            }
        }
        else if ((rxs === 0) && (pmqxr !== 0)) {
            return null;
        }
        else if ((rxs !== 0) && (t >= 0) && (t <= 1) && (u >= 0) && (u <= 1)) {
            return _Point__WEBPACK_IMPORTED_MODULE_0__["default"].add(p, _Point__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(r, t));
        }
        else {
            return null;
        }
    }
}
class PolyRect extends ConvexPolygon {
    constructor(points) {
        if (!points)
            super([new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0), new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0), new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1), new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1)]);
        else {
            if (points.length !== 4)
                throw new Error("PolyRect expects a points array of exactly 4");
            super(points);
        }
    }
    containsPoint(x, y) {
        return ((x > this.points[0]) && (x < this.points[1].x) && (y > this.points[0].y) && (y < this.points[3].y));
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/GameOverMenu.ts":
/*!************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/GameOverMenu.ts ***!
  \************************************************************/
/*! exports provided: GameOverMenu, GameOverMenuListener, GameOverMenuController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverMenu", function() { return GameOverMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverMenuListener", function() { return GameOverMenuListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverMenuController", function() { return GameOverMenuController; });
/* harmony import */ var engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/ui/TextBuilder */ "./src/engine/gameobject/ui/TextBuilder.ts");
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_transform_dimension_RelativeDimension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/transform/dimension/RelativeDimension */ "./src/engine/transform/dimension/RelativeDimension.ts");









class GameOverMenu extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__["Frame"] {
    constructor(position, bounds, listener, controller, gameModel) {
        super(position, bounds, listener, controller);
        this.gameModel = gameModel;
    }
    create() {
        this.transform.bounds.referenceWidth = 320;
        let bg = this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_4__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1)), "black"));
        bg.opacity = 0.5;
        let tbg = this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_4__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_6__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_RelativeDimension__WEBPACK_IMPORTED_MODULE_8__["default"](100, 50)), "black"));
        tbg.opacity = 0.9;
        let canvas = document.createElement('canvas');
        let context2D = canvas.getContext("2d");
        let tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]("You have died", context2D, "white", 20, "serif");
        let text = tbg.addChild(tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_6__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 0.5)))));
    }
}
class GameOverMenuListener extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__["FrameListener"] {
}
class GameOverMenuController extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__["FrameController"] {
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/IntroFrame.ts":
/*!**********************************************************!*\
  !*** ./src/examples/classic-rpg-interface/IntroFrame.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntroFrame; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/ui/TextBuilder */ "./src/engine/gameobject/ui/TextBuilder.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _MainFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainFrame */ "./src/examples/classic-rpg-interface/MainFrame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_TreeUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/TreeUtils */ "./src/engine/TreeUtils.ts");
/* harmony import */ var engine_gameobject_ui_LoadingBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/ui/LoadingBar */ "./src/engine/gameobject/ui/LoadingBar.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var _MainMenuButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MainMenuButton */ "./src/examples/classic-rpg-interface/MainMenuButton.ts");
/* harmony import */ var engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! engine/gameobject/anim/ValueTween */ "./src/engine/gameobject/anim/ValueTween.ts");














class IntroFrame extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor() {
        super(...arguments);
        this.started = false;
    }
    create() {
        let canvas = document.createElement('canvas');
        let context2D = canvas.getContext("2d");
        let tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]("RPG Alpha", context2D, "white", 48, "serif", 1.4);
        let titleText = this.addChild(tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0.5, 0.3, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.5)))));
        titleText.canvasFunction = (ctx) => {
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 10;
        };
        tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]("Start Game", context2D, "white", 32, "serif");
        let startText = tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.5))));
        startText.canvasFunction = (ctx) => {
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 10;
        };
        this.button = this.addChild(new _MainMenuButton__WEBPACK_IMPORTED_MODULE_12__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0.5, 0.7, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_6__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_8__["default"](300, 50)), startText));
        this.loadingBar = this.addChild(new engine_gameobject_ui_LoadingBar__WEBPACK_IMPORTED_MODULE_10__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0.5, 0.8, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_6__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_8__["default"](100, 10)), "white", "grey"));
        tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]("Loading textures", context2D, "white", 8, "serif", 1.5);
        this.loadingText = this.addChild(tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_11__["default"](0, 10), new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0.5, 0.8, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0)))));
        this.mainFrame = this.addChild(new _MainFrame__WEBPACK_IMPORTED_MODULE_5__["MainFrame"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_6__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_7__["default"](1, 1)), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["FrameController"]()));
        this.mainFrame.precreate = true;
        this.button.onClick.push(() => {
            this.mainFrame.open();
            this.button.interactable = false;
            this.started = true;
        }, this);
        this.button.setInteractable(false);
    }
    update() {
        if (!(this.started)) {
            let stats = engine_TreeUtils__WEBPACK_IMPORTED_MODULE_9__["TreeUtils"].subtreeLoadStats(this.mainFrame);
            this.loadingBar.setProportion(stats.assetsProportion);
            if (this.mainFrame.subtreeLoaded) {
                this.button.setInteractable(true);
                this.loadingBar.visible = false;
                this.loadingText.visible = false;
            }
        }
    }
    onOpen() {
        this.opacity = 0.01;
        this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_13__["default"](this, "opacity", 1, 1000)).onComplete.push(this.ready.bind(this), this);
    }
    onReady() {
        this.opacity = 1;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/Launcher.ts":
/*!********************************************************!*\
  !*** ./src/examples/classic-rpg-interface/Launcher.ts ***!
  \********************************************************/
/*! exports provided: Run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Run", function() { return Run; });
/* harmony import */ var Launcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Launcher */ "./src/Launcher.ts");
/* harmony import */ var engine_io_IO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/io/IO */ "./src/engine/io/IO.ts");
/* harmony import */ var engine_io_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/io/Loader */ "./src/engine/io/Loader.ts");
/* harmony import */ var engine_io_Timing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/io/Timing */ "./src/engine/io/Timing.ts");
/* harmony import */ var _IntroFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IntroFrame */ "./src/examples/classic-rpg-interface/IntroFrame.ts");





class Run extends Launcher__WEBPACK_IMPORTED_MODULE_0__["Launcher"] {
    constructor() {
        super(...arguments);
        this._rootGameObjectType = _IntroFrame__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
    _createInterfaces(canvas) {
        let io = new engine_io_IO__WEBPACK_IMPORTED_MODULE_1__["default"]();
        io.addInterface(new engine_io_Loader__WEBPACK_IMPORTED_MODULE_2__["default"](""), "loader");
        io.addInterface(new engine_io_Timing__WEBPACK_IMPORTED_MODULE_3__["TimingListener"](), "timing");
        return this._addMouse(this._addKeyboard(io), canvas);
    }
}
let l = new Run(document.querySelector("#gameTarget"));
l.create();
l.start();


/***/ }),

/***/ "./src/examples/classic-rpg-interface/LoadingStatusFrame.ts":
/*!******************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/LoadingStatusFrame.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingStatusFrame; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");





class LoadingStatusFrame extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor(position, bounds, listener, controller, uiModel, gameModel) {
        super(position, bounds, listener, controller);
        this.uiModel = uiModel;
        this.gameModel = gameModel;
    }
    create() {
        this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_3__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), this.uiModel.backgroundColour));
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/MainFrame.ts":
/*!*********************************************************!*\
  !*** ./src/examples/classic-rpg-interface/MainFrame.ts ***!
  \*********************************************************/
/*! exports provided: randomColour, MainFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColour", function() { return randomColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFrame", function() { return MainFrame; });
/* harmony import */ var _core_ui_components_CharacterMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ui-components/CharacterMenu */ "./src/examples/classic-rpg-interface/core-ui-components/CharacterMenu.ts");
/* harmony import */ var _core_ui_components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-ui-components/Map */ "./src/examples/classic-rpg-interface/core-ui-components/Map.ts");
/* harmony import */ var _GameOverMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameOverMenu */ "./src/examples/classic-rpg-interface/GameOverMenu.ts");
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_gameobject_ui_GestureTrigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/gameobject/ui/GestureTrigger */ "./src/engine/gameobject/ui/GestureTrigger.ts");
/* harmony import */ var engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/ui/KeyTrigger */ "./src/engine/gameobject/ui/KeyTrigger.ts");
/* harmony import */ var engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! engine/gameobject/anim/ValueTween */ "./src/engine/gameobject/anim/ValueTween.ts");
/* harmony import */ var _core_ui_components_MiniMapFrame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core-ui-components/MiniMapFrame */ "./src/examples/classic-rpg-interface/core-ui-components/MiniMapFrame.ts");
/* harmony import */ var _UIModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UIModel */ "./src/examples/classic-rpg-interface/UIModel.ts");
/* harmony import */ var engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! engine/gameobject/ui/GridLayout */ "./src/engine/gameobject/ui/GridLayout.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! engine/gameobject/ui/TextBuilder */ "./src/engine/gameobject/ui/TextBuilder.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_transform_dimension_RelativeDimension__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! engine/transform/dimension/RelativeDimension */ "./src/engine/transform/dimension/RelativeDimension.ts");
/* harmony import */ var engine_transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! engine/transform/dimension/ConditionalDimension */ "./src/engine/transform/dimension/ConditionalDimension.ts");
/* harmony import */ var engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! engine/transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var _core_ui_components_TabListMenu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core-ui-components/TabListMenu */ "./src/examples/classic-rpg-interface/core-ui-components/TabListMenu.ts");
/* harmony import */ var _WorldFrame__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./WorldFrame */ "./src/examples/classic-rpg-interface/WorldFrame.ts");
/* harmony import */ var _core_ui_components_PartyStatusMenu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core-ui-components/PartyStatusMenu */ "./src/examples/classic-rpg-interface/core-ui-components/PartyStatusMenu.ts");
/* harmony import */ var engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! engine/gameobject/context2d/DrawBuffer */ "./src/engine/gameobject/context2d/DrawBuffer.ts");
/* harmony import */ var _core_ui_components_ActionBarMenu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core-ui-components/ActionBarMenu */ "./src/examples/classic-rpg-interface/core-ui-components/ActionBarMenu.ts");
/* harmony import */ var _core_ui_components_DetailMenuFrame__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core-ui-components/DetailMenuFrame */ "./src/examples/classic-rpg-interface/core-ui-components/DetailMenuFrame.ts");
/* harmony import */ var _LoadingStatusFrame__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./LoadingStatusFrame */ "./src/examples/classic-rpg-interface/LoadingStatusFrame.ts");
/* harmony import */ var _model_GameModel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./model/GameModel */ "./src/examples/classic-rpg-interface/model/GameModel.ts");
/* harmony import */ var _model_PartyModel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./model/PartyModel */ "./src/examples/classic-rpg-interface/model/PartyModel.ts");
/* harmony import */ var _model_world_WorldModel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./model/world/WorldModel */ "./src/examples/classic-rpg-interface/model/world/WorldModel.ts");
/* harmony import */ var _model_PlayerModel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./model/PlayerModel */ "./src/examples/classic-rpg-interface/model/PlayerModel.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./data */ "./src/examples/classic-rpg-interface/data.ts");
/* harmony import */ var _ToolTip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ToolTip */ "./src/examples/classic-rpg-interface/ToolTip.ts");
/* harmony import */ var engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! engine/gameobject/anim/Wait */ "./src/engine/gameobject/anim/Wait.ts");
/* harmony import */ var engine_gameobject_ui_MouseDragTrigger__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! engine/gameobject/ui/MouseDragTrigger */ "./src/engine/gameobject/ui/MouseDragTrigger.ts");





































let randomColour = function () {
    return "#" + Math.floor(Math.random() * 10) + "" +
        Math.floor(Math.random() * 10) + "" +
        Math.floor(Math.random() * 10) + "" +
        Math.floor(Math.random() * 10) + "" +
        Math.floor(Math.random() * 10) + "" +
        Math.floor(Math.random() * 10) + "";
};

class TestFrame extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["Frame"] {
    constructor(position, bounds, listener, controller, ...args) {
        super(position, bounds, listener, controller);
    }
    create() {
        let color = randomColour();
        this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_16__["DebugRect"](color, 10));
        let canvas = document.createElement('canvas');
        let context2D = canvas.getContext("2d");
        let tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_17__["default"](this.listener.constructor.name, context2D, color, 12, "sans-serif");
        this.addChild(tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](0.5, 0.5)))));
    }
}
class MainFrame extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["Frame"] {
    gameOver() {
        this.showGameOverMenu();
    }
    create() {
        this.gameModel = new _model_GameModel__WEBPACK_IMPORTED_MODULE_29__["default"](new _model_GameModel__WEBPACK_IMPORTED_MODULE_29__["GameModelListener"](), new _model_PartyModel__WEBPACK_IMPORTED_MODULE_30__["default"](), new _model_world_WorldModel__WEBPACK_IMPORTED_MODULE_31__["default"](), new _model_PlayerModel__WEBPACK_IMPORTED_MODULE_32__["default"](), _data__WEBPACK_IMPORTED_MODULE_33__["gameData"]);
        this.gameModel.create();
        this.gameModel.player.gameOver.onUpdate.push(((val) => { if (val)
            this.gameOver(); }).bind(this), this);
        let map = new _core_ui_components_Map__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameModel);
        this.addChild(map);
        this.uiModel = new _UIModel__WEBPACK_IMPORTED_MODULE_13__["default"](this.gameModel, map);
        this.transform.bounds.referenceWidth = 320;
        let actionBarHeight = 42;
        let partyStatusMenuWidth = 42;
        let charMenuMaxWidth = 500;
        let characterMenu = new _core_ui_components_CharacterMenu__WEBPACK_IMPORTED_MODULE_0__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_RelativeDimension__WEBPACK_IMPORTED_MODULE_19__["default"](320, 120)), new _core_ui_components_CharacterMenu__WEBPACK_IMPORTED_MODULE_0__["CharacterMenuListener"](), new _core_ui_components_CharacterMenu__WEBPACK_IMPORTED_MODULE_0__["CharacterMenuController"](), this.uiModel, this.gameModel);
        characterMenu.transform.bounds.maxDimension = new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](charMenuMaxWidth, 170);
        this.characterMenu = characterMenu;
        let tabListMenu = new _core_ui_components_TabListMenu__WEBPACK_IMPORTED_MODULE_22__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_RelativeDimension__WEBPACK_IMPORTED_MODULE_19__["default"](320, 0), new engine_transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_20__["default"](this._tabListHeightConditional.bind(this))), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), this.uiModel);
        this.tabMenu = tabListMenu;
        tabListMenu.transform.bounds.maxDimension = new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](charMenuMaxWidth, undefined);
        let detailMenu = new _core_ui_components_DetailMenuFrame__WEBPACK_IMPORTED_MODULE_27__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, 1, tabListMenu.transform.bounds)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_RelativeDimension__WEBPACK_IMPORTED_MODULE_19__["default"](320, 0), new engine_transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_20__["default"](this._detailMenuHeightConditional.bind(this)), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](0, 1, tabListMenu.transform.bounds)), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), this.uiModel);
        detailMenu.transform.bounds.maxDimension = new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](charMenuMaxWidth, undefined);
        let minimap = new _core_ui_components_MiniMapFrame__WEBPACK_IMPORTED_MODULE_12__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](1, 0, new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](1, 0))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_20__["default"](this._miniMapDimConditional.bind(this))), new _core_ui_components_MiniMapFrame__WEBPACK_IMPORTED_MODULE_12__["MiniMapFrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), this.uiModel, this.gameModel);
        let partyStatusMenu = new _core_ui_components_PartyStatusMenu__WEBPACK_IMPORTED_MODULE_24__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](1, 0, new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](1, 0)), new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, 1, minimap.transform.bounds)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_20__["default"](this._partyStatsWidthConditional.bind(this)), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](0, 1, this.transform.bounds), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](0, -1, characterMenu.transform.bounds), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](0, -1, tabListMenu.transform.bounds), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](0, -1, minimap.transform.bounds)), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), this.uiModel);
        let actionBarMenu = new _core_ui_components_ActionBarMenu__WEBPACK_IMPORTED_MODULE_26__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](1, 0), new engine_transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_20__["default"](this._actionBarHeightConditional.bind(this))), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), this.uiModel);
        let worldFrame = new _WorldFrame__WEBPACK_IMPORTED_MODULE_23__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, 1, actionBarMenu.transform.bounds)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](1, 1), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](0, -1, actionBarMenu.transform.bounds), new engine_transform_dimension_ConditionalDimension__WEBPACK_IMPORTED_MODULE_20__["default"](this._worldFrameConditionalHeight.bind(this))), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), this.gameModel, this.uiModel);
        let loadingStatusFrame = new _LoadingStatusFrame__WEBPACK_IMPORTED_MODULE_28__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, 1, new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](0, 1))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](1, 0), new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, 2)), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), this.uiModel, this.gameModel);
        let wbb = new engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_14__["GridBuilder"]();
        wbb.pushCell(detailMenu);
        wbb.pushCell(tabListMenu);
        wbb.pushCell(characterMenu);
        wbb.fixLayer(engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_14__["GridOrientation"].Vertical, new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 1, new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](0.5, 1)), new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_18__["default"](0, -2)));
        this.addChild(worldFrame);
        let uiBuffer = this.addChild(new engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_25__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](1, 1))));
        uiBuffer.addChild(wbb.grid);
        uiBuffer.addChild(partyStatusMenu);
        uiBuffer.addChild(actionBarMenu);
        this.addChild(minimap);
        this.addChild(loadingStatusFrame);
        loadingStatusFrame.open();
        this.createTriggers(worldFrame);
        characterMenu.open();
        tabListMenu.open();
        detailMenu.open();
        worldFrame.open();
        partyStatusMenu.open();
        minimap.open();
        actionBarMenu.open();
        this.uiModel.tooltip.onUpdate.push(this.updateTooltip.bind(this), this);
    }
    showGameOverMenu() {
        let gameOverMenu = this.addChild(new _GameOverMenu__WEBPACK_IMPORTED_MODULE_2__["GameOverMenu"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](1, 1)), new _GameOverMenu__WEBPACK_IMPORTED_MODULE_2__["GameOverMenuListener"](), new _GameOverMenu__WEBPACK_IMPORTED_MODULE_2__["GameOverMenuController"](), this.gameModel));
        gameOverMenu.open();
    }
    createTriggers(worldViewArea) {
        let worldGestures = worldViewArea.addChild(new engine_gameobject_ui_GestureTrigger__WEBPACK_IMPORTED_MODULE_9__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](1, 1))));
        worldGestures.onSwipeDown.push(this.uiModel.swipeDown.bind(this.uiModel), this);
        worldGestures.onSwipeUp.push(this.uiModel.swipeUp.bind(this.uiModel), this);
        let worldDrag = worldViewArea.addChild(new engine_gameobject_ui_MouseDragTrigger__WEBPACK_IMPORTED_MODULE_36__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_6__["default"](1, 1))));
        worldDrag.minDistance = new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](20, 1000);
        worldDrag.onDrag.push((vector, mouse) => {
            if (vector.x > 0)
                this.uiModel.dragRight(vector.x / this.transform.bounds.dimension.width);
            if (vector.x < 0)
                this.uiModel.dragLeft(-vector.x / this.transform.bounds.dimension.width);
            worldGestures.reset();
        }, this);
        worldDrag.onEndDrag.push(this.uiModel.endDrag.bind(this.uiModel), this);
        let kt = this.addChild(new engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["default"]());
        kt.getKeyEvent("w", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyDown).push(this.uiModel.keyW.bind(this.uiModel), this);
        kt.getKeyEvent("d", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyDown).push(this.uiModel.keyD.bind(this.uiModel), this);
        kt.getKeyEvent("a", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyDown).push(this.uiModel.keyA.bind(this.uiModel), this);
        kt.getKeyEvent("d", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyDUp.bind(this.uiModel), this);
        kt.getKeyEvent("a", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyAUp.bind(this.uiModel), this);
        kt.getKeyEvent("s", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyDown).push(this.uiModel.keyS.bind(this.uiModel), this);
        kt.getKeyEvent("q", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyDown).push(this.uiModel.keyQ.bind(this.uiModel), this);
        kt.getKeyEvent("e", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyE.bind(this.uiModel), this);
        kt.getKeyEvent("PageUp", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyDown).push(this.uiModel.keyPgUp.bind(this.uiModel), this);
        kt.getKeyEvent("PageDown", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyDown).push(this.uiModel.keyPgDown.bind(this.uiModel), this);
        kt.getKeyEvent("e", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyE.bind(this.uiModel), this);
        kt.getKeyEvent("t", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyT.bind(this.uiModel), this);
        kt.getKeyEvent("ArrowUp", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyUp.bind(this.uiModel), this);
        kt.getKeyEvent("ArrowRight", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyRight.bind(this.uiModel), this);
        kt.getKeyEvent("ArrowDown", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyDown.bind(this.uiModel), this);
        kt.getKeyEvent("ArrowLeft", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyLeft.bind(this.uiModel), this);
        kt.getKeyEvent("0", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.key0.bind(this.uiModel), this);
        kt.getKeyEvent("1", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.key1.bind(this.uiModel), this);
        kt.getKeyEvent("o", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyO.bind(this.uiModel), this);
        kt.getKeyEvent(".", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyRightChevron.bind(this.uiModel), this);
        kt.getKeyEvent(",", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyLeftChevron.bind(this.uiModel), this);
        kt.getKeyEvent("-", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyMinus.bind(this.uiModel), this);
        kt.getKeyEvent("_", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyUnderscore.bind(this.uiModel), this);
        kt.getKeyEvent("=", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyEquals.bind(this.uiModel), this);
        kt.getKeyEvent("+", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyPlus.bind(this.uiModel), this);
        kt.getKeyEvent("n", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_10__["KeyTriggerEvents"].onKeyUp).push(this.uiModel.keyN.bind(this.uiModel), this);
    }
    updateTooltip(text) {
        if (text) {
            if (this.tooltip)
                this.tooltip.requestRemoval();
            this.tooltip = this.addChild(new _ToolTip__WEBPACK_IMPORTED_MODULE_34__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](200, 40)), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameListener"](), new engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_3__["FrameController"](), text));
            this.tooltip.open();
        }
        else {
            if (this.tooltip) {
                let tooltip = this.tooltip;
                tooltip.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_35__["default"](600)).onComplete.push(() => tooltip.onClosing(), this);
            }
        }
    }
    onOpen() {
        this.opacity = 0.01;
        this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_11__["default"](this, "opacity", 1, 1000)).onComplete.push(this.ready.bind(this), this);
    }
    onReady() {
        this.opacity = 1;
    }
    _actionBarHeightConditional(dim) {
        if (dim.width < 500)
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, 42);
        else {
            let prop = (dim.width - 500) * 0.1;
            prop = Math.min(prop, 22);
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, 42 + prop);
        }
    }
    _partyStatsWidthConditional(dim) {
        if (dim.width < 500)
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](42, 0);
        else {
            let prop = (dim.width - 500) * 0.2;
            prop = Math.min(prop, 54);
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](42 + prop, 0);
        }
    }
    _miniMapDimConditional(dim) {
        if (dim.width < 320)
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](130, 130);
        else {
            let prop = (dim.width - 320) * 0.2;
            prop = Math.min(prop, 80);
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](120 + prop, 120 + prop);
        }
    }
    _worldFrameConditionalHeight(dim) {
        if (dim.width < 800)
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, -this.characterMenu.transform.bounds.dimension.height);
        else
            return new engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_21__["default"](0, 0);
    }
    _tabListHeightConditional(dim) {
        if (dim.width < 320)
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, 48);
        else {
            let prop = (dim.width - 320) * 0.2;
            prop = Math.min(prop, 26);
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, 48 + prop);
        }
    }
    _detailMenuHeightConditional(dim) {
        if (dim.width < 320)
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, 110);
        else {
            let prop = (dim.width - 320) * 0.2;
            prop = Math.min(prop, 160);
            return new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_15__["default"](0, 110 + prop);
        }
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/MainMenuButton.ts":
/*!**************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/MainMenuButton.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenuButton; });
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");
/* harmony import */ var engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/context2d/RoundedRect */ "./src/engine/gameobject/context2d/RoundedRect.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");





class MainMenuButton extends engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_0__["default"] {
    create() {
        this._createButtonContents();
        super.create();
    }
    setInteractable(val) {
        this.interactable = val;
        this.content.opacity = val ? 1 : 0.5;
    }
    _createButtonContents() {
        let roundedness = 2;
        this.backgroundRect = this.addChild(new engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), "grey", undefined, 2, roundedness));
        this.setHoverRect(this.addChild(new engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), "grey", "grey", 0, roundedness)));
        this.setPressedRect(this.addChild(new engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), "red", "red", 0, roundedness)));
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/ToolTip.ts":
/*!*******************************************************!*\
  !*** ./src/examples/classic-rpg-interface/ToolTip.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToolTip; });
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/gameobject/ui/TextBuilder */ "./src/engine/gameobject/ui/TextBuilder.ts");
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/gameobject/anim/ValueTween */ "./src/engine/gameobject/anim/ValueTween.ts");
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");










class ToolTip extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_7__["Frame"] {
    constructor(position, bounds, listener, controller, text) {
        super(position, bounds, listener, controller);
        this.text = text;
    }
    create() {
        this.transform.bounds.referenceWidth = 320;
        let bg = this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_0__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1)), "black"));
        bg.opacity = 0.9;
        let button = this.addChild(new engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1))));
        button.onClick.push(this.close.bind(this), this);
        let canvas = document.createElement('canvas');
        let context2D = canvas.getContext("2d");
        let tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_6__["default"](this.text, context2D, "white", 20, "serif");
        let text = bg.addChild(tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"](0.5, 0.5)))));
    }
    onOpen() {
        this.opacity = 0;
        this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_8__["default"](this, "opacity", 1, 500)).onComplete.push(this.ready.bind(this), this);
    }
    onReady() {
        this.opacity = 1;
    }
    onClosing() {
        this.opacity = 1;
        this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_8__["default"](this, "opacity", 0, 500)).onComplete.push(this.close.bind(this), this);
    }
    onClose() {
        this.opacity = 0;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/UIModel.ts":
/*!*******************************************************!*\
  !*** ./src/examples/classic-rpg-interface/UIModel.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIModel; });
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var _MainFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainFrame */ "./src/examples/classic-rpg-interface/MainFrame.ts");
/* harmony import */ var _model_CharacterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/gameobject/context2d/Sprite */ "./src/engine/gameobject/context2d/Sprite.ts");
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/action/InitiativeModel */ "./src/examples/classic-rpg-interface/model/action/InitiativeModel.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/anim/Wait */ "./src/engine/gameobject/anim/Wait.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _model_Status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/Status */ "./src/examples/classic-rpg-interface/model/Status.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");
/* harmony import */ var _core_ui_components_DetailMenuModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core-ui-components/DetailMenuModel */ "./src/examples/classic-rpg-interface/core-ui-components/DetailMenuModel.ts");
/* harmony import */ var assets_rpg_ui_nexticon_green_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/rpg/ui/nexticon-green.png */ "./src/assets/rpg/ui/nexticon-green.png");
/* harmony import */ var assets_rpg_ui_nexticon_green_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_nexticon_green_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_rpg_ui_nexticon_yellow_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/rpg/ui/nexticon-yellow.png */ "./src/assets/rpg/ui/nexticon-yellow.png");
/* harmony import */ var assets_rpg_ui_nexticon_yellow_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_nexticon_yellow_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_rpg_ui_nexticon_red_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/rpg/ui/nexticon-red.png */ "./src/assets/rpg/ui/nexticon-red.png");
/* harmony import */ var assets_rpg_ui_nexticon_red_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_nexticon_red_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_rpg_ui_status_slow_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/rpg/ui/status-slow.png */ "./src/assets/rpg/ui/status-slow.png");
/* harmony import */ var assets_rpg_ui_status_slow_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_status_slow_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var assets_rpg_ui_status_dead_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/rpg/ui/status-dead.png */ "./src/assets/rpg/ui/status-dead.png");
/* harmony import */ var assets_rpg_ui_status_dead_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_status_dead_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_rpg_ui_status_torch_light_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/rpg/ui/status-torch-light.png */ "./src/assets/rpg/ui/status-torch-light.png");
/* harmony import */ var assets_rpg_ui_status_torch_light_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_status_torch_light_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _model_action_spells_TorchLight__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./model/action/spells/TorchLight */ "./src/examples/classic-rpg-interface/model/action/spells/TorchLight.ts");
/* harmony import */ var _model_world_NPCModel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./model/world/NPCModel */ "./src/examples/classic-rpg-interface/model/world/NPCModel.ts");
/* harmony import */ var _model_world_WorldObjectModel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./model/world/WorldObjectModel */ "./src/examples/classic-rpg-interface/model/world/WorldObjectModel.ts");
/* harmony import */ var _model_world_WallModel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./model/world/WallModel */ "./src/examples/classic-rpg-interface/model/world/WallModel.ts");
/* harmony import */ var _model_world_DoorModel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./model/world/DoorModel */ "./src/examples/classic-rpg-interface/model/world/DoorModel.ts");



























class UIModel {
    constructor(gameModel, map) {
        this.onCharacterSelected = new engine_util_Event__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.currentDetailMenu = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_14__["default"](null);
        this.backgroundColour = "#f3e7d7";
        this.holdDuration = 200;
        this.zoomHoldDuration = 100;
        this.gameModel = gameModel;
        this.map = map;
        this.gameModel.initiative.waitingCharacter.onUpdate.push(() => {
            this.currentDetailMenu.value = null;
            this.onCharacterSelected.call();
        }, this);
        this.tooltip = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_14__["default"](null);
    }
    get selectedCharacter() { return this.gameModel.initiative.waitingCharacter.value; }
    get mapRotation() { return this.gameModel.player.rotation.value; }
    swipeDown() { if (!this.zoomedView)
        this.gameModel.moveForward(); }
    swipeLeft() { if (!this.zoomedView)
        this.gameModel.turnRight(); }
    swipeRight() { if (!this.zoomedView)
        this.gameModel.turnLeft(); }
    swipeUp() { if (!this.zoomedView)
        this.gameModel.moveBackward(); }
    dragLeft(distance) {
        distance = Math.min(distance, 0.1);
        if (!this.zoomedView)
            this.gameModel.rotateRight(-distance * (Math.PI / 2));
    }
    dragRight(distance) {
        distance = Math.min(distance, 0.1);
        if (!this.zoomedView)
            this.gameModel.rotateLeft(-distance * (Math.PI / 2));
    }
    endDrag() {
        if (!this.zoomedView)
            this.gameModel.resetRotation();
    }
    keyW() { if (!this.zoomedView)
        this.gameModel.moveForward(); }
    keyA(delta) { if (!this.zoomedView)
        this.gameModel.turnLeft(); }
    keyD(delta) { if (!this.zoomedView)
        this.gameModel.turnRight(); }
    keyAUp() { if (!this.zoomedView)
        this.gameModel.resetRotation(); }
    keyDUp() { if (!this.zoomedView)
        this.gameModel.resetRotation(); }
    keyS() { if (!this.zoomedView)
        this.gameModel.moveBackward(); }
    keyQ() { if (!this.zoomedView)
        this.gameModel.strafeLeft(); }
    keyE() { if (!this.zoomedView)
        this.gameModel.strafeRight(); }
    keyR() {
        let target = this.gameModel.world.currentLevel.value.npcs[0];
        let action = this.gameModel.initiative.waitingCharacter.value.availableActions(target)[0];
        this.gameModel.performAction(target, action);
    }
    keyT() {
        this.gameModel.castSpell(new _model_action_spells_TorchLight__WEBPACK_IMPORTED_MODULE_22__["default"]("Torch Light", null, this.gameModel), null);
    }
    keyUp() { if (this.gameModel.player.canLevelEdit)
        this.gameModel.toggleWallFront(); }
    keyRight() { if (this.gameModel.player.canLevelEdit)
        this.gameModel.toggleWallRight(); }
    keyDown() { if (this.gameModel.player.canLevelEdit)
        this.gameModel.toggleWallBehind(); }
    keyLeft() { if (this.gameModel.player.canLevelEdit)
        this.gameModel.toggleWallLeft(); }
    key1() { if (this.gameModel.player.canLevelEdit)
        this.gameModel.toggleWallAbove(); }
    key0() { if (this.gameModel.player.canLevelEdit)
        this.gameModel.toggleWallBelow(); }
    keyPgUp() { if (this.gameModel.player.canFly)
        if (!this.zoomedView)
            this.gameModel.hoverUp(); }
    keyPgDown() { if (this.gameModel.player.canFly)
        if (!this.zoomedView)
            this.gameModel.hoverDown(); }
    keyO() { this.gameModel.save(); }
    keyRightChevron() {
        if (this.gameModel.world.currentLevelID < this.gameModel.world.levels.length - 1)
            this.gameModel.switchLevel(this.gameModel.world.levels[this.gameModel.world.currentLevelID + 1]);
    }
    keyLeftChevron() {
        if (this.gameModel.world.currentLevelID > 0)
            this.gameModel.switchLevel(this.gameModel.world.levels[this.gameModel.world.currentLevelID - 1]);
    }
    keyMinus() {
        this.gameModel.currentPaintID--;
    }
    keyEquals() {
        this.gameModel.currentPaintID++;
    }
    keyUnderscore() {
        this.gameModel.currentPaintID -= 10;
    }
    keyPlus() {
        this.gameModel.currentPaintID += 10;
    }
    keyN() {
        console.log(this.gameModel.player.position);
    }
    worldClick(target) {
        if (this.tooltip.value !== null)
            this.tooltip.value = null;
        else if (this.currentDetailMenu.value !== null)
            this.currentDetailMenu.value = null;
        else {
            let actionResult;
            if (this.gameModel.initiative.playerCanAct) {
                if ((this.gameModel.player.canLevelEdit) && (target instanceof _model_world_WallModel__WEBPACK_IMPORTED_MODULE_25__["default"])) {
                    this.gameModel.paintWall(target);
                }
                else if (target instanceof _model_world_NPCModel__WEBPACK_IMPORTED_MODULE_23__["default"] || target instanceof _model_world_WorldObjectModel__WEBPACK_IMPORTED_MODULE_24__["default"] || target instanceof _model_world_DoorModel__WEBPACK_IMPORTED_MODULE_26__["default"]) {
                    let actions = this.gameModel.initiative.waitingCharacter.value.availableActions(target);
                    if (actions.length > 0)
                        actionResult = this.gameModel.performAction(target, actions[0]);
                }
            }
            if (actionResult)
                this.gameModel.applyActionResult(actionResult);
        }
    }
    worldHold(zoomView, mouse) {
        this.zoomedView = true;
        zoomView(mouse);
    }
    worldReleaseHold(unzoomView) {
        this.zoomedView = false;
        unzoomView();
    }
    clickCharacterPortrait(c) {
        if (this.gameModel.initiative.waitingCharacter.value !== c)
            this.gameModel.switchCharacter(c);
    }
    holdCharacterPortrait(c) {
        this.tooltip.value = c.fullName;
    }
    releaseHold() {
        this.tooltip.value = null;
    }
    clickQuickItemsTabButton() {
        if (this.currentDetailMenu.value === null)
            this.setDetailMenu();
        else if (this.currentDetailMenu.value.spellList)
            this.setDetailMenu();
        else
            this.hideDetailMenu();
    }
    holdQuickItemsTabButton() {
        this.tooltip.value = "Quick items";
    }
    clickSpellListTabButton(l) {
        if (this.currentDetailMenu.value === null)
            this.setDetailMenu(l);
        else if (this.currentDetailMenu.value.spellList !== l)
            this.setDetailMenu(l);
        else
            this.hideDetailMenu();
    }
    holdSpellListTabButton(l) {
        this.tooltip.value = l.name + " spells";
    }
    clickSpellButton(s) {
        if (s.test(this.selectedCharacter, null)) {
            if (s.requireTarget)
                this.acquireTarget(s);
            else
                this.gameModel.castSpell(s, null);
            this.currentDetailMenu.value = null;
        }
    }
    holdSpellButton(s) {
        this.tooltip.value = s.name;
    }
    holdStatusIcon(status) {
        this.tooltip.value = status.name;
    }
    holdMiniMap() {
        this.tooltip.value = "Date/Time";
    }
    holdLevelNameText() {
        this.tooltip.value = this.gameModel.world.currentLevel.value.name;
    }
    holdCharacterSheetMenuIcon() {
        this.tooltip.value = "Show character sheets";
    }
    acquireTarget(spell) {
    }
    getCharacterPortraitImage(position, bounds, characterModel) {
        return new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, this.gameModel.data.portraits[characterModel.characterData.portrait].filename);
    }
    getCharacterSelectedHighlight(position, bounds, characterModel) {
        let sh = new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["OutlineRect"](position, bounds, "yellow", 2);
        sh.visible = this.selectedCharacter === characterModel;
        this.onCharacterSelected.push((() => sh.visible = this.selectedCharacter === characterModel).bind(this), this);
        return sh;
    }
    getCharacterNextHighlight(position, bounds, characterModel) {
        let group = new engine_GameObject__WEBPACK_IMPORTED_MODULE_6__["default"](position, bounds);
        let g = new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 1)), assets_rpg_ui_nexticon_green_png__WEBPACK_IMPORTED_MODULE_16___default.a);
        let y = new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 1)), assets_rpg_ui_nexticon_yellow_png__WEBPACK_IMPORTED_MODULE_17___default.a);
        let r = new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 1)), assets_rpg_ui_nexticon_red_png__WEBPACK_IMPORTED_MODULE_18___default.a);
        group.addChild(g);
        group.addChild(y);
        group.addChild(r);
        this.gameModel.initiative.combatState.onUpdate.push((val) => {
            g.visible = false;
            y.visible = false;
            r.visible = false;
            if (val === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Green)
                g.visible = true;
            else if (val === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Yellow)
                y.visible = true;
            else if (val === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Red)
                r.visible = true;
            group.requestDraw();
        }, this);
        g.visible = false;
        y.visible = false;
        r.visible = false;
        if (this.gameModel.initiative.combatState.value === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Green)
            g.visible = true;
        else if (this.gameModel.initiative.combatState.value === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Yellow)
            y.visible = true;
        else if (this.gameModel.initiative.combatState.value === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Red)
            r.visible = true;
        this.gameModel.initiative.waitingCharacter.onUpdate.push(((val) => group.visible = val === characterModel).bind(this), this);
        group.visible = this.gameModel.initiative.waitingCharacter.value === characterModel;
        return group;
    }
    getCharacterWaitingHighlight(position, bounds, characterModel) {
        let group = new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["FillRect"](position, bounds, "green");
        this.gameModel.initiative.combatState.onUpdate.push((val) => {
            if (val === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Green)
                group.fillStyle = "green";
            else if (val === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Yellow)
                group.fillStyle = "yellow";
            else if (val === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Red)
                group.fillStyle = "red";
            group.requestDraw();
        }, this);
        if (this.gameModel.initiative.combatState.value === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Green)
            group.fillStyle = "green";
        else if (this.gameModel.initiative.combatState.value === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Yellow)
            group.fillStyle = "yellow";
        else if (this.gameModel.initiative.combatState.value === _model_action_InitiativeModel__WEBPACK_IMPORTED_MODULE_7__["CombatState"].Red)
            group.fillStyle = "red";
        this.gameModel.initiative.waitingCharacters.onUpdate.push(((val) => group.visible = val.indexOf(characterModel) !== -1).bind(this), this);
        group.visible = this.gameModel.initiative.waitingCharacters.value.indexOf(characterModel) !== -1;
        return group;
    }
    getCharacterHitFilter(position, bounds, characterModel) {
        let hitFilter = new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["FillRect"](position, bounds, "red");
        hitFilter.opacity = 0.5;
        hitFilter.visible = false;
        characterModel.onTakeDamage.push(() => {
            hitFilter.visible = true;
            hitFilter.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_10__["default"](300)).onComplete.push(() => hitFilter.visible = false, this);
        }, this);
        return hitFilter;
    }
    getCharacterHPBar(position, bounds, characterModel) {
        let parent = new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["Rect"](position, bounds, "black", "#f3e7d7", 1);
        let hpProportion = new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](0, 1);
        hpProportion.preserve = true;
        let child = new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_11__["default"](0.5, 1, new engine_util_Point__WEBPACK_IMPORTED_MODULE_12__["default"](0.5, 1))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 0), hpProportion), "green");
        child.transform.fixed = false;
        characterModel.hitpoints.onUpdate.push(this.updateHPState.bind(this, characterModel, child, hpProportion), this);
        characterModel.maxHitpoints.onUpdate.push(this.updateHPState.bind(this, characterModel, child, hpProportion), this);
        characterModel.healthState.onUpdate.push(this.updateHPState.bind(this, characterModel, child, hpProportion), this);
        parent.addChild(child);
        return parent;
    }
    getCharacterManaBar(position, bounds, characterModel) {
        let parent = new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["Rect"](position, bounds, "black", "#f3e7d7", 1);
        let manaProportion = new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](0, 1);
        manaProportion.preserve = true;
        let child = new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_11__["default"](0.5, 1, new engine_util_Point__WEBPACK_IMPORTED_MODULE_12__["default"](0.5, 1))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 0), manaProportion), "blue");
        child.transform.fixed = false;
        parent.addChild(child);
        return parent;
    }
    getStatusIcon(position, bounds, status) {
        let filename;
        if (status.statusType === _model_Status__WEBPACK_IMPORTED_MODULE_13__["StatusType"].Dead)
            filename = assets_rpg_ui_status_dead_png__WEBPACK_IMPORTED_MODULE_20___default.a;
        if (status.statusType === _model_Status__WEBPACK_IMPORTED_MODULE_13__["StatusType"].Slow)
            filename = assets_rpg_ui_status_slow_png__WEBPACK_IMPORTED_MODULE_19___default.a;
        if (status.statusType === _model_Status__WEBPACK_IMPORTED_MODULE_13__["StatusType"].TorchLight)
            filename = assets_rpg_ui_status_torch_light_png__WEBPACK_IMPORTED_MODULE_21___default.a;
        if (filename)
            return new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, filename);
        return new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_2__["OutlineRect"](position, bounds, Object(_MainFrame__WEBPACK_IMPORTED_MODULE_3__["randomColour"])(), 1);
    }
    updateHPState(characterModel, hpBar, hpProportion) {
        if (characterModel.healthState.value === _model_CharacterModel__WEBPACK_IMPORTED_MODULE_4__["HealthState"].Normal) {
            hpProportion.height = Math.max(0, characterModel.hitpoints.value / characterModel.maxHitpoints.value);
            if (hpProportion.height < 0.33)
                hpBar.fillStyle = "red";
            else if (hpProportion.height < 0.5)
                hpBar.fillStyle = "yellow";
            else
                hpBar.fillStyle = "green";
        }
        else if (characterModel.healthState.value === _model_CharacterModel__WEBPACK_IMPORTED_MODULE_4__["HealthState"].Unconsious) {
            hpProportion.height = Math.min(1, -characterModel.hitpoints.value / characterModel.maxHitpoints.value);
            hpBar.fillStyle = "grey";
        }
        else {
            hpProportion.height = 1;
            hpBar.fillStyle = undefined;
        }
        hpBar.requestDraw();
    }
    updateManaState(characterModel, manaBar, manaProportion) {
        manaProportion.height = Math.max(0, characterModel.mana / characterModel.maxMana);
        manaBar.fillStyle = "blue";
        if (characterModel.healthState.value === _model_CharacterModel__WEBPACK_IMPORTED_MODULE_4__["HealthState"].Dead) {
            manaProportion.height = 1;
            manaBar.fillStyle = "black";
        }
        manaBar.requestDraw();
    }
    getCharacterTabs(characterModel) {
        return [];
    }
    getCharacterSheetMenuIcon(position, bounds) {
        return new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, this.gameModel.data.ui.charSheetIcon);
    }
    getQuickItemTabIcon(position, bounds) {
        return new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, this.gameModel.data.ui.quickItemTabIcon);
    }
    getSpellListTabIcon(position, bounds, spellList) {
        return new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, spellList.icon);
    }
    setDetailMenu(spellList) {
        this.currentDetailMenu.value = new _core_ui_components_DetailMenuModel__WEBPACK_IMPORTED_MODULE_15__["default"](spellList);
    }
    hideDetailMenu() {
        this.currentDetailMenu.value = null;
    }
    getSpellIcon(position, bounds, spell) {
        return new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, spell.icon);
    }
    getAnimWaitHourglass(position, bounds) {
        return new engine_gameobject_context2d_Sprite__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, this.gameModel.data.ui.hourglassIcon);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/WorldFrame.ts":
/*!**********************************************************!*\
  !*** ./src/examples/classic-rpg-interface/WorldFrame.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldFrame; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_gameobject_ui_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/gameobject/ui/Text */ "./src/engine/gameobject/ui/Text.ts");
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/anim/Wait */ "./src/engine/gameobject/anim/Wait.ts");
/* harmony import */ var engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! engine/gameobject/anim/ValueTween */ "./src/engine/gameobject/anim/ValueTween.ts");
/* harmony import */ var engine_TreeUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! engine/TreeUtils */ "./src/engine/TreeUtils.ts");
/* harmony import */ var _sceneview_Scene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sceneview/Scene */ "./src/examples/classic-rpg-interface/sceneview/Scene.ts");
/* harmony import */ var engine_gameobject_ui_LoadingBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! engine/gameobject/ui/LoadingBar */ "./src/engine/gameobject/ui/LoadingBar.ts");
/* harmony import */ var engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! engine/gameobject/ui/KeyTrigger */ "./src/engine/gameobject/ui/KeyTrigger.ts");
















class WorldFrame extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor(position, bounds, listener, controller, gameModel, uiModel) {
        super(position, bounds, listener, controller);
        this.defaultFOV = 52;
        this.changingScene = true;
        this.gameModel = gameModel;
        this.uiModel = uiModel;
    }
    create() {
        this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_8__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1)), "black"));
        this._createMouseTriggers();
        this._createHUD();
        this._createThreeBuffer();
        this.gameModel.listener.onSwitchLevel.push(this._switchLevel.bind(this), this);
        this.gameModel.infoText.onUpdate.push(this._updateInfoText.bind(this), this);
        let kt = this.addChild(new engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_15__["default"]());
        kt.getKeyEvent("m", engine_gameobject_ui_KeyTrigger__WEBPACK_IMPORTED_MODULE_15__["KeyTriggerEvents"].onKeyUp).push(() => console.log(this.threeBuffer.renderer.info), this);
    }
    update() {
        if (this.changingScene) {
            let stats = engine_TreeUtils__WEBPACK_IMPORTED_MODULE_12__["TreeUtils"].subtreeLoadStats(this.threeBuffer);
            this.loadingBar.setProportion(stats.assetsProportion);
            if (this.threeBuffer.subtreeLoaded) {
                this._levelLoaded();
                this.changingScene = false;
            }
        }
    }
    _switchLevel() {
        this.changingScene = true;
        this._createThreeBuffer();
        this.threeBuffer.visible = false;
        this.loadingBar.visible = true;
    }
    _levelLoaded() {
        this.loadingBar.visible = false;
        this.threeBuffer.visible = true;
    }
    _createThreeBuffer() {
        if (this.threeBuffer)
            this.threeBuffer.requestRemoval();
        this.threeBuffer = this.addChild(new _sceneview_Scene__WEBPACK_IMPORTED_MODULE_13__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1)), this.gameModel));
        this.threeBuffer.fieldOfView = this.defaultFOV;
        this.threeBuffer.requestDraw();
        engine_TreeUtils__WEBPACK_IMPORTED_MODULE_12__["TreeUtils"].moveChildToLast(this, this.threeBuffer);
    }
    _createMouseTriggers() {
        let worldClick = this.addChild(new engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_7__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1))));
        worldClick.onClick.push(this._worldClick.bind(this), this);
    }
    _createHUD() {
        this.infoText = this.addChild(new engine_gameobject_ui_Text__WEBPACK_IMPORTED_MODULE_6__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.8, new engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](), "", "white", 12, "serif", 1.5));
        this.crosshair = this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_8__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_9__["default"](3, 3)), "white"));
        this.crosshair.visible = false;
        this.loadingBar = this.addChild(new engine_gameobject_ui_LoadingBar__WEBPACK_IMPORTED_MODULE_14__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_9__["default"](100, 10)), "white", "grey"));
    }
    _updateInfoText(val) {
        this.infoText.text = val;
        this.infoText.opacity = 1;
        this.infoText.visible = true;
        if (this.infoTextWait)
            this.infoTextWait.requestRemoval();
        this.infoTextWait = this.infoText.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_10__["default"](3000));
        this.infoTextWait.onComplete.push(() => {
            this.infoTextWait = this.infoText.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_11__["default"](this.infoText, "opacity", 0, 1000));
            this.infoTextWait.onComplete.push(() => this.infoText.visible = false, this);
        }, this);
    }
    _worldClick(mouse) {
        let offset = this._getMouseOffset(mouse);
        let raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(offset.x, offset.y), this.threeBuffer.camera);
        let intersects = raycaster.intersectObjects(this.threeBuffer.scene.children);
        if (intersects.length > 0) {
            let go = intersects[0].object.userData.gameObject;
            if (go)
                this.uiModel.worldClick(go.model);
        }
    }
    _getMouseOffset(mouse) {
        let mousePos = engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"].minus(mouse.position, this.transform.getCanonicalPosition());
        let x = (mousePos.x / this.transform.bounds.dimension.width) * 2 - 1;
        let y = -((mousePos.y / this.transform.bounds.dimension.height) * 2 - 1);
        return new engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"](x, y);
    }
    _zoomView(mouse) {
        let offset = this._getMouseOffset(mouse);
        let hFOV = 2 * Math.atan(Math.tan(this.threeBuffer.fieldOfView * Math.PI / 180 / 2) * this.threeBuffer.camera.aspect) * 180 / Math.PI;
        let degX = offset.x * (hFOV / 2);
        let radX = (degX / 180) * Math.PI;
        let degY = offset.y * (this.threeBuffer.fieldOfView / 2);
        let radY = (degY / 180) * Math.PI;
        this.threeBuffer.player.setCameraRotation(this.threeBuffer.camera.rotation.x + radY, this.threeBuffer.camera.rotation.y - radX, this.threeBuffer.camera.rotation.z, true, 200);
        let tween = this.threeBuffer.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_11__["default"](this.threeBuffer, "fieldOfView", 60, 200));
        tween.onComplete.push((() => this.crosshair.visible = true).bind(this), this);
    }
    _unzoomView() {
        this.crosshair.visible = false;
        let y = this.threeBuffer.camera.rotation.y;
        y = (Math.round((y / (Math.PI / 2))) % 4) * (Math.PI / 2);
        this.threeBuffer.player.setCameraRotation(0, y, this.threeBuffer.camera.rotation.z, true, 400);
        this.threeBuffer.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_11__["default"](this.threeBuffer, "fieldOfView", this.defaultFOV, 400));
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/ActionBarMenu.ts":
/*!********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/ActionBarMenu.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionBarMenu; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/gameobject/ui/TextBuilder */ "./src/engine/gameobject/ui/TextBuilder.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/gameobject/ui/PressHoldTrigger */ "./src/engine/gameobject/ui/PressHoldTrigger.ts");










class ActionBarMenu extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor(position, bounds, listener, controller, uiModel) {
        super(position, bounds, listener, controller);
        this.uiModel = uiModel;
    }
    create() {
        this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_3__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), "#f3e7d7"));
        let shadow = this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_3__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, 1)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 0), new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_5__["default"](0, 1)), "black"));
        shadow.opacity = 0.3;
        this.addChild(this.createCharacterSheetMenuIcon());
        this.levelNameText = this.addChild(this.createLevelNameText());
        this.uiModel.gameModel.world.currentLevel.onUpdate.push(((val) => {
            this.levelNameText.text = val.name;
        }).bind(this), this);
    }
    createCharacterSheetMenuIcon() {
        let csmi = this.uiModel.getCharacterSheetMenuIcon(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](0, 1), new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_5__["default"](64, 0)));
        let holdTrigger = new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_9__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), this.uiModel.holdDuration);
        holdTrigger.onHold.push(this.uiModel.holdCharacterSheetMenuIcon.bind(this.uiModel), this);
        holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
        csmi.addChild(holdTrigger);
        return csmi;
    }
    createLevelNameText() {
        let canvas = document.createElement('canvas');
        let context2D = canvas.getContext("2d");
        let tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_6__["default"](this.uiModel.gameModel.world.currentLevel.value.name, context2D, "black", 10, "sans-serif", 1.2);
        let levelNameText = this.addChild(tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_8__["default"](0.5, 0.5)))));
        let holdTrigger = new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_9__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), this.uiModel.holdDuration);
        holdTrigger.onHold.push(this.uiModel.holdLevelNameText.bind(this.uiModel), this);
        holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
        levelNameText.addChild(holdTrigger);
        return levelNameText;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/CharacterMenu.ts":
/*!********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/CharacterMenu.ts ***!
  \********************************************************************************/
/*! exports provided: default, CharacterMenuListener, CharacterMenuController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterMenuListener", function() { return CharacterMenuListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterMenuController", function() { return CharacterMenuController; });
/* harmony import */ var _PortraitButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortraitButton */ "./src/examples/classic-rpg-interface/core-ui-components/PortraitButton.ts");
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");







class CharacterMenu extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__["Frame"] {
    constructor(position, bounds, listener, controller, uiModel, gameModel) {
        super(position, bounds, listener, controller);
        this.uiModel = uiModel;
        this.gameModel = gameModel;
    }
    create() {
        this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_6__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1)), this.uiModel.backgroundColour));
        this.createMenu();
    }
    static recursePrint(self, padding) {
        console.log(" ".repeat(padding) + self.typeName);
        self.children.forEach(x => CharacterMenu.recursePrint(x, padding + 4));
    }
    createMenu() {
        this.portraits = this.createPortraits();
        for (let i = 0; i < this.portraits.length; i++) {
            let p = this.addChild(this.portraits[i]);
            p.transform.position.addTranslation(new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](i * 0.25, 0));
            p.transform.bounds.addDimension(new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](0.25, 1));
        }
    }
    createPortraits() {
        let portraits = [];
        this.gameModel.party.characters.forEach((c) => {
            let p = new _PortraitButton__WEBPACK_IMPORTED_MODULE_0__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](), c, this.uiModel);
            p.onClick.push(this.uiModel.clickCharacterPortrait.bind(this.uiModel, c), this);
            portraits.push(p);
        });
        return portraits;
    }
}
class CharacterMenuListener extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__["FrameListener"] {
}
class CharacterMenuController extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_1__["FrameController"] {
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/DetailMenuFrame.ts":
/*!**********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/DetailMenuFrame.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailMenuFrame; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/gameobject/ui/TextBuilder */ "./src/engine/gameobject/ui/TextBuilder.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/gameobject/ui/GridLayout */ "./src/engine/gameobject/ui/GridLayout.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");
/* harmony import */ var engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! engine/gameobject/ui/PressHoldTrigger */ "./src/engine/gameobject/ui/PressHoldTrigger.ts");












class DetailMenuFrame extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor(position, bounds, listener, controller, uiModel) {
        super(position, bounds, listener, controller);
        this.uiModel = uiModel;
    }
    create() {
        this.uiModel.currentDetailMenu.onUpdate.push(this.createDetailMenu.bind(this), this);
        this.createDetailMenu();
    }
    createDetailMenu() {
        if (this.menu)
            this.menu.requestRemoval();
        let detailMenuModel = this.uiModel.currentDetailMenu.value;
        if (detailMenuModel) {
            let container = this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_3__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), this.uiModel.backgroundColour));
            container.addChild(new engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_10__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1))));
            container.opacity = 0.8;
            let canvas = document.createElement('canvas');
            let context2D = canvas.getContext("2d");
            let tb = new engine_gameobject_ui_TextBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](detailMenuModel.title, context2D, "black", 12, "sans-serif");
            container.addChild(tb.buildText(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](10, 4, new engine_util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](0, 0)))));
            if (detailMenuModel.spellList) {
                let gb = new engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_8__["GridBuilder"]();
                detailMenuModel.spellList.spells.forEach(s => {
                    let icon = this.uiModel.getSpellIcon(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), s);
                    let b = new engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_10__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](0.2, 1, this.transform.bounds), new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_9__["default"](0, -20)), icon);
                    b.onClick.push(this.uiModel.clickSpellButton.bind(this.uiModel, s), this);
                    gb.pushCell(b);
                    let holdTrigger = this.addChild(new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_11__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), this.uiModel.holdDuration));
                    holdTrigger.onHold.push(this.uiModel.holdSpellButton.bind(this.uiModel, s), this);
                    holdTrigger.onHold.push(b.reset.bind(b), this);
                    holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
                    b.addChild(holdTrigger);
                });
                gb.fixLayer(engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_8__["GridOrientation"].Horizontal, new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, 20)));
                container.addChild(gb.grid);
            }
            this.menu = container;
        }
        this.requestDraw();
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/DetailMenuModel.ts":
/*!**********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/DetailMenuModel.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailMenuModel; });
class DetailMenuModel {
    constructor(spellList) {
        this.spellList = spellList;
        if (!spellList)
            this.title = "Quick Items";
        else {
            this.title = spellList.name;
        }
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/Map.ts":
/*!**********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/Map.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/context2d/DrawBuffer */ "./src/engine/gameobject/context2d/DrawBuffer.ts");
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_gameobject_context2d_Circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/gameobject/context2d/Circle */ "./src/engine/gameobject/context2d/Circle.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_gameobject_context2d_Triangle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/context2d/Triangle */ "./src/engine/gameobject/context2d/Triangle.ts");
/* harmony import */ var _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../model/PlayerModel */ "./src/examples/classic-rpg-interface/model/PlayerModel.ts");
/* harmony import */ var engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! engine/gameobject/anim/ValueTween */ "./src/engine/gameobject/anim/ValueTween.ts");













class Map extends engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(gameModel) {
        let w = gameModel.world.currentLevel.value.width;
        let h = gameModel.world.currentLevel.value.depth;
        super(null, new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__["default"](w * 100, h * 100)));
        this.cellSize = 100;
        this.edgeWidth = this.cellSize / 10;
        this.gameModel = gameModel;
        this.npcIcons = [];
        this.currentMapY = undefined;
    }
    create() {
        super.create();
        this.gameModel.listener.onMove.push(this.updatePlayer.bind(this), this);
        this.gameModel.listener.onTurn.push(this.updatePlayer.bind(this), this);
        this.gameModel.listener.onWorldChange.push(this.updateMapVisibility.bind(this), this);
        this.gameModel.listener.onSwitchLevel.push(this.recreateMap.bind(this), this);
        this.recreateMap();
    }
    recreateMap() {
        this.levelModel = this.gameModel.world.currentLevel.value;
        this.createMap(this.levelModel);
        this.createNPCs(this.levelModel);
        this.updatePlayer();
    }
    createNPC(npc) {
        let npcIcon = this.addChild(new engine_gameobject_context2d_Circle__WEBPACK_IMPORTED_MODULE_4__["FillCircle"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_5__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__["default"](this.cellSize / 4, this.cellSize / 4)), undefined));
        this.npcIcons.forEach(n => n.requestRemoval());
        this.npcIcons.push(npcIcon);
        npc.alive.onUpdate.push(this.updateNPC.bind(this, npc, npcIcon), this);
        npc.position.onUpdate.push(this.updateNPC.bind(this, npc, npcIcon), this);
        npc.looted.onUpdate.push(this.updateNPC.bind(this, npc, npcIcon), this);
        this.updateNPC(npc, npcIcon);
    }
    updateNPC(npc, npcIcon) {
        if (npc.looted.value)
            npcIcon.visible = false;
        else {
            npcIcon.transform.position.clearTranslations();
            npcIcon.transform.position.addTranslation(new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__["default"]((npc.position.value.x + 0.5) * this.cellSize, (npc.position.value.z + 0.5) * this.cellSize, new engine_util_Point__WEBPACK_IMPORTED_MODULE_9__["default"](0.5, 0.5)));
            let colour = npc.hostile ? "red" : "green";
            if (!(npc.alive.value))
                colour = "blue";
            npcIcon.fillStyle = colour;
            npcIcon.requestDraw();
        }
    }
    createNPCs(level) {
        level.npcs.forEach(n => this.createNPC(n));
    }
    updatePlayer() {
        this.playerIcon.transform.position.clearTranslations();
        this.playerIcon.transform.position.addTranslation(new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__["default"]((this.gameModel.player.position.x + 0.5) * this.cellSize, (this.gameModel.player.position.z + 0.5) * this.cellSize, new engine_util_Point__WEBPACK_IMPORTED_MODULE_9__["default"](0.5, 0.5)));
        if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].North)
            this.playerIcon.transform.rotation = 0;
        else if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].NorthEast)
            this.playerIcon.transform.rotation = Math.PI / 4;
        else if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].East)
            this.playerIcon.transform.rotation = Math.PI / 2;
        else if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].SouthEast)
            this.playerIcon.transform.rotation = 3 * (Math.PI / 4);
        else if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].South)
            this.playerIcon.transform.rotation = Math.PI;
        else if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].SouthWest)
            this.playerIcon.transform.rotation = -3 * (Math.PI / 4);
        else if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].West)
            this.playerIcon.transform.rotation = -Math.PI / 2;
        else if (this.gameModel.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_11__["Facing"].NorthWest)
            this.playerIcon.transform.rotation = -Math.PI / 4;
        if (this.gameModel.player.position.y !== this.currentMapY) {
            this.switchToLayer(this.gameModel.player.position.y);
        }
    }
    switchToLayer(y) {
        this.mapLayers.forEach((l, i) => {
            if (i === y) {
                if (l.opacity !== 1)
                    this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_12__["default"](l, "opacity", 1, 300));
            }
            else if ((i === y - 1) || (i === y + 1)) {
                if (l.opacity !== 0.5)
                    this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_12__["default"](l, "opacity", 0.5, 300));
            }
            else if (l.opacity !== 0)
                this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_12__["default"](l, "opacity", 0, 300));
        });
        this.currentMapY = y;
    }
    updateMapVisibility() {
        for (let y = 0; y < this.levelModel.height; y++)
            for (let x = 0; x < this.levelModel.width; x++)
                for (let z = 0; z < this.levelModel.depth; z++)
                    this.mapCells[x][y][z].visible = !(this.levelModel.cells[x][y][z].walls[4].hidden.value);
    }
    createMap(level) {
        this.mapCells = new Array(level.width);
        for (let i = 0; i < level.width; i++) {
            this.mapCells[i] = new Array(level.height);
            for (let j = 0; j < level.height; j++) {
                this.mapCells[i][j] = new Array(level.depth);
            }
        }
        let layers = [];
        for (let y = 0; y < level.height; y++) {
            let l = new engine_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_5__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_7__["default"](1, 1)));
            for (let x = 0; x < level.width; x++) {
                for (let z = 0; z < level.depth; z++) {
                    let r = l.addChild(this.createRect(x, z, level.cells[x][y][z]));
                    if (level.cells[x][y][z].walls[4].hidden.value)
                        r.visible = false;
                    this.mapCells[x][y][z] = r;
                }
            }
            l.opacity = 0;
            layers.push(this.addChild(l));
        }
        if (this.mapLayers)
            this.mapLayers.forEach(l => l.requestRemoval());
        this.mapLayers = layers;
        if (this.playerIcon)
            this.playerIcon.requestRemoval();
        this.playerIcon = this.addChild(new engine_gameobject_context2d_Triangle__WEBPACK_IMPORTED_MODULE_10__["FillTriangle"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_5__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__["default"](this.cellSize / 2, this.cellSize / 2)), "black"));
    }
    createRect(x, z, cell) {
        return new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_8__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_5__["default"](new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__["default"](x * this.cellSize + this.edgeWidth / 2, z * this.cellSize + this.edgeWidth / 2)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__["default"](this.cellSize - this.edgeWidth, this.cellSize - this.edgeWidth)), "white");
    }
    destroy() {
        super.destroy();
        this.gameModel.listener.onMove.unregister(this);
        this.gameModel.listener.onTurn.unregister(this);
        this.gameModel.listener.onWorldChange.unregister(this);
        this.gameModel.listener.onSwitchLevel.unregister(this);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/MiniMapFrame.ts":
/*!*******************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/MiniMapFrame.ts ***!
  \*******************************************************************************/
/*! exports provided: default, MiniMapFrameListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniMapFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniMapFrameListener", function() { return MiniMapFrameListener; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_gameobject_context2d_Circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/gameobject/context2d/Circle */ "./src/engine/gameobject/context2d/Circle.ts");
/* harmony import */ var engine_gameobject_context2d_BufferClone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/gameobject/context2d/BufferClone */ "./src/engine/gameobject/context2d/BufferClone.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! engine/gameobject/ui/PressHoldTrigger */ "./src/engine/gameobject/ui/PressHoldTrigger.ts");












class MiniMapFrame extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor(position, bounds, listener, controller, uiModel, gameModel) {
        super(position, bounds, listener, controller);
        this.uiModel = uiModel;
        this.gameModel = gameModel;
    }
    create() {
        let miniMap = this.addChild(this.createMiniMap());
        let holdTrigger = this.addChild(new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_11__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_7__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 1)), this.uiModel.holdDuration));
        holdTrigger.onHold.push(this.uiModel.holdMiniMap.bind(this.uiModel), this);
        holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
    }
    mapClip(ctx, pos, dim) {
        ctx.translate(pos.x + dim.width / 2, pos.y + dim.height / 2);
        ctx.rotate(this.uiModel.mapRotation.y);
        ctx.translate(-(pos.x + dim.width / 2), -(pos.y + dim.height / 2));
        ctx.arc(pos.x + dim.width / 2, pos.y + dim.height / 2, Math.min(dim.width, dim.height) / 2, 0, 2 * Math.PI);
    }
    setMapOriginAndArea(bufferClone) {
        let levelDim = new engine_transform_dimension_Dimension__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameModel.world.currentLevel.value.width, this.gameModel.world.currentLevel.value.depth);
        let cellSize = 100;
        let radius = 5;
        bufferClone.origin = new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_9__["default"]((this.gameModel.player.position.x + 0.5 - radius) * cellSize, (this.gameModel.player.position.z + 0.5 - radius) * cellSize);
        bufferClone.area = new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_4__["default"](cellSize * radius * 2, cellSize * radius * 2);
    }
    createMiniMap() {
        let mapArea = new engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_7__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 1)));
        mapArea.onClick.push(() => this.listener.onMapClick.call(), this);
        let mapBackground = mapArea.addChild(new engine_gameobject_context2d_Circle__WEBPACK_IMPORTED_MODULE_5__["FillCircle"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_7__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 1)), "grey"));
        mapBackground.opacity = 0.5;
        let mapCircle = mapArea.addChild(new engine_gameobject_context2d_BufferClone__WEBPACK_IMPORTED_MODULE_6__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_7__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_8__["default"](1, 1)), this.uiModel.map));
        this.setMapOriginAndArea(mapCircle);
        mapCircle.clipFunction = this.mapClip.bind(this);
        this.gameModel.listener.onMove.push(this.setMapOriginAndArea.bind(this, mapCircle), this);
        this.gameModel.listener.onSwitchLevel.push(this.setMapOriginAndArea.bind(this, mapCircle), this);
        return mapArea;
    }
}
class MiniMapFrameListener extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["FrameListener"] {
    constructor() {
        super(...arguments);
        this.onMapClick = new engine_util_Event__WEBPACK_IMPORTED_MODULE_10__["default"]();
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/PartyStatusMenu.ts":
/*!**********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/PartyStatusMenu.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartyStatusMenu; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var _StatusList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StatusList */ "./src/examples/classic-rpg-interface/core-ui-components/StatusList.ts");





class PartyStatusMenu extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor(position, bounds, listener, controller, uiModel) {
        super(position, bounds, listener, controller);
        this._uiModel = uiModel;
    }
    create() {
        this.list = this.addChild(this.createList());
        this._uiModel.gameModel.party.statuses.onUpdate.push(() => {
            this.list.requestRemoval();
            this.list = this.addChild(this.createList());
        }, this);
    }
    createList() {
        return new _StatusList__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1)), this._uiModel.gameModel.party.statuses.value, this._uiModel);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/PortraitButton.ts":
/*!*********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/PortraitButton.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PortraitButton; });
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var _StatusList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StatusList */ "./src/examples/classic-rpg-interface/core-ui-components/StatusList.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_gameobject_Clip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/Clip */ "./src/engine/gameobject/Clip.ts");
/* harmony import */ var engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! engine/gameobject/ui/PressHoldTrigger */ "./src/engine/gameobject/ui/PressHoldTrigger.ts");












class PortraitButton extends engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"] {
    constructor(position, bounds, characterModel, uiModel) {
        super(position, bounds);
        this._isSelected = false;
        this._isWaiting = false;
        this.characterModel = characterModel;
        this.uiModel = uiModel;
    }
    get filename() { return this.characterModel.portraitType.filename; }
    get isSelected() { return this._isSelected; }
    get isWaiting() { return this._isWaiting; }
    set isSelected(val) {
        this._isSelected = val;
        this.selectedHighlight.visible = val;
    }
    set isWaiting(val) {
        this._isWaiting = val;
        this.waitingHighlight.visible = val;
    }
    create() {
        super.create();
        this.waitingHighlight = this.addChild(this.uiModel.getCharacterWaitingHighlight(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)), this.characterModel));
        this.selectedHighlight = this.addChild(this.uiModel.getCharacterSelectedHighlight(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)), this.characterModel));
        this.portrait = this.uiModel.getCharacterPortraitImage(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)), this.characterModel);
        let clip = new engine_gameobject_Clip__WEBPACK_IMPORTED_MODULE_10__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)));
        clip.setClip = (ctx) => {
            let pos = clip.transform.getDrawPosition();
            let dim = clip.transform.getDimension();
            this._drawEllipse(ctx, pos.x - dim.width * 0.05, pos.y - dim.height * 0.05, dim.width * 1.1, dim.height * 1.1);
            ctx.clip();
        };
        this.addChild(clip);
        clip.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_9__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)), "black"));
        clip.addChild(this.portrait);
        this.portrait.opacity = 0.7;
        this.uiModel.gameModel.initiative.waitingCharacters.onUpdate.push((val) => {
            if (val.indexOf(this.characterModel) !== -1)
                this.portrait.opacity = 1;
            else
                this.portrait.opacity = 0.6;
        }, this);
        this.nextHighlight = this.addChild(this.uiModel.getCharacterNextHighlight(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0.5, 0, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0.5, 0))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](0.5, 0.15)), this.characterModel));
        this.hitFilter = this.portrait.addChild(this.uiModel.getCharacterHitFilter(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)), this.characterModel));
        this.hpBar = this.addChild(this.uiModel.getCharacterHPBar(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0.5)), new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__["default"](2, 0)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_7__["default"](8, 0), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0.75)), this.characterModel));
        this.manaBar = this.addChild(this.uiModel.getCharacterManaBar(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](1, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](1, 0.5)), new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__["default"](-2, 0)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_7__["default"](8, 0), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0.75)), this.characterModel));
        let statusList = this.addChild(new _StatusList__WEBPACK_IMPORTED_MODULE_8__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_3__["default"](1, 0, new engine_util_Point__WEBPACK_IMPORTED_MODULE_4__["default"](1, 0)), new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_6__["default"](-16, 0)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_7__["default"](32, 0), new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1)), this.characterModel.statuses, this.uiModel));
        let holdTrigger = this.addChild(new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_11__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)), this.uiModel.holdDuration));
        holdTrigger.onHold.push(this.uiModel.holdCharacterPortrait.bind(this.uiModel, this.characterModel), this);
        holdTrigger.onHold.push(this.reset.bind(this), this);
        holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
    }
    _drawEllipse(ctx, x, y, w, h) {
        var kappa = .5522848, ox = (w / 2) * kappa, oy = (h / 2) * kappa, xe = x + w, ye = y + h, xm = x + w / 2, ym = y + h / 2;
        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/StatusList.ts":
/*!*****************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/StatusList.ts ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusList; });
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/ui/GridLayout */ "./src/engine/gameobject/ui/GridLayout.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/gameobject/ui/PressHoldTrigger */ "./src/engine/gameobject/ui/PressHoldTrigger.ts");
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");









class StatusList extends engine_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, statuses, uiModel) {
        super(position, bounds);
        this.statuses = statuses;
        this.uiModel = uiModel;
    }
    create() {
        let gb = new engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_1__["GridBuilder"]();
        for (let i = this.statuses.length - 1; i >= 0; i--) {
            let icon = this.uiModel.getStatusIcon(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1, this.transform.bounds)), this.statuses[i]);
            icon.transform.bounds.targetAspectRatio = 1;
            gb.pushCell(icon);
            icon.addChild(new engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1))));
            let holdTrigger = new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_7__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1)), this.uiModel.holdDuration);
            holdTrigger.onHold.push(this.uiModel.holdStatusIcon.bind(this.uiModel, this.statuses[i]), this);
            holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
            icon.addChild(holdTrigger);
        }
        gb.fixLayer(engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_1__["GridOrientation"].Vertical, new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_6__["default"](0, 1, new engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"](0, 1))));
        this.addChild(gb.grid);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/TabButton.ts":
/*!****************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/TabButton.ts ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabButton; });
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/context2d/RoundedRect */ "./src/engine/gameobject/context2d/RoundedRect.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/gameobject/ui/Button */ "./src/engine/gameobject/ui/Button.ts");





class TabButton extends engine_gameobject_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(position, bounds, tabIcon) {
        super(position, bounds);
        this.tabIcon = tabIcon;
    }
    create() {
        let bg = this.addChild(new engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1)), undefined, "#f3e7d7", 0, 10));
        this.setHoverRect(this.addChild(new engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1)), undefined, "white", 0, 10)));
        this.setPressedRect(this.addChild(new engine_gameobject_context2d_RoundedRect__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1)), undefined, "white", 0, 10)));
        super.create();
        this.addChild(this.tabIcon);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/core-ui-components/TabListMenu.ts":
/*!******************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/core-ui-components/TabListMenu.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabListMenu; });
/* harmony import */ var engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/Frame */ "./src/engine/gameobject/Frame.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/ui/GridLayout */ "./src/engine/gameobject/ui/GridLayout.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");
/* harmony import */ var _TabButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabButton */ "./src/examples/classic-rpg-interface/core-ui-components/TabButton.ts");
/* harmony import */ var engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/gameobject/context2d/Rect */ "./src/engine/gameobject/context2d/Rect.ts");
/* harmony import */ var engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/ui/PressHoldTrigger */ "./src/engine/gameobject/ui/PressHoldTrigger.ts");











class TabListMenu extends engine_gameobject_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"] {
    constructor(position, bounds, listener, controller, uiModel) {
        super(position, bounds, listener, controller);
        this.uiModel = uiModel;
    }
    create() {
        this.addChild(new engine_gameobject_context2d_Rect__WEBPACK_IMPORTED_MODULE_9__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0, 1, new engine_util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](0, 1))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 0), new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_4__["default"](0, 10)), this.uiModel.backgroundColour));
        this.uiModel.onCharacterSelected.push(this.createMenu.bind(this), this);
        if (this.uiModel.selectedCharacter)
            this.createMenu();
    }
    createMenu() {
        if (this.grid)
            this.grid.requestRemoval();
        if (this.uiModel.selectedCharacter) {
            let gb = new engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_3__["GridBuilder"]();
            let tabs = this.createTabs();
            for (let i = 0; i < tabs.length; i++) {
                gb.pushCell(tabs[i]);
            }
            gb.fixLayer(engine_gameobject_ui_GridLayout__WEBPACK_IMPORTED_MODULE_3__["GridOrientation"].Horizontal);
            this.grid = this.addChild(gb.grid);
        }
        else {
            this.grid = this.addChild(this.uiModel.getAnimWaitHourglass(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](1, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](1, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1))));
            this.grid.transform.bounds.targetAspectRatio = 1;
        }
    }
    createTabs() {
        let tabs = [];
        let tab = this.createTabButton(this.uiModel.getQuickItemTabIcon(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](0.7, 0.7))));
        tabs.push(tab);
        tab.onClick.push(this.uiModel.clickQuickItemsTabButton.bind(this.uiModel), this);
        let holdTrigger = new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_10__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1)), this.uiModel.holdDuration);
        holdTrigger.onHold.push(this.uiModel.holdQuickItemsTabButton.bind(this.uiModel), this);
        holdTrigger.onHold.push(tab.reset.bind(tab), this);
        holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
        tab.addChild(holdTrigger);
        this.uiModel.selectedCharacter.spellLists.forEach(l => {
            let tab = this.createTabButton(this.uiModel.getSpellListTabIcon(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_7__["default"](0.5, 0.5, new engine_util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](0.5, 0.5))), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](0.7, 0.7)), l));
            tabs.push(tab);
            tab.onClick.push(this.uiModel.clickSpellListTabButton.bind(this.uiModel, l), this);
            let holdTrigger = new engine_gameobject_ui_PressHoldTrigger__WEBPACK_IMPORTED_MODULE_10__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1)), this.uiModel.holdDuration);
            holdTrigger.onHold.push(this.uiModel.holdSpellListTabButton.bind(this.uiModel, l), this);
            holdTrigger.onHold.push(tab.reset.bind(tab), this);
            holdTrigger.onReleaseHold.push(this.uiModel.releaseHold.bind(this.uiModel), this);
            tab.addChild(holdTrigger);
        });
        return tabs;
    }
    createTabButton(child) {
        let tab = new _TabButton__WEBPACK_IMPORTED_MODULE_8__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1, this.transform.bounds)), child);
        tab.transform.bounds.targetAspectRatio = 1;
        tab.addChild(child);
        return tab;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/data.ts":
/*!****************************************************!*\
  !*** ./src/examples/classic-rpg-interface/data.ts ***!
  \****************************************************/
/*! exports provided: TextureEmpty, gameData, GameData, SkyboxData, PortraitData, WallData, WallDetailsData, WorldObjectData, NPCData, ActionData, LevelData, PartyData, CharacterData, PlayerData, UIData, ItemData, WeaponItemData, SpellListData, DoorData, LevelDoorData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameData", function() { return gameData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameData", function() { return GameData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkyboxData", function() { return SkyboxData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortraitData", function() { return PortraitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallData", function() { return WallData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallDetailsData", function() { return WallDetailsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldObjectData", function() { return WorldObjectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPCData", function() { return NPCData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionData", function() { return ActionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelData", function() { return LevelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyData", function() { return PartyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterData", function() { return CharacterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerData", function() { return PlayerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIData", function() { return UIData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemData", function() { return ItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponItemData", function() { return WeaponItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellListData", function() { return SpellListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorData", function() { return DoorData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelDoorData", function() { return LevelDoorData; });
/* harmony import */ var assets_image_1x_rpg_portrait_1p_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/1p.png */ "./src/assets/image_1x/rpg/portrait/1p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_1p_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_1p_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_image_1x_rpg_portrait_2p_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/2p.png */ "./src/assets/image_1x/rpg/portrait/2p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_2p_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_2p_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_image_1x_rpg_portrait_3p_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/3p.png */ "./src/assets/image_1x/rpg/portrait/3p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_3p_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_3p_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_image_1x_rpg_portrait_4p_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/4p.png */ "./src/assets/image_1x/rpg/portrait/4p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_4p_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_4p_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_image_1x_rpg_portrait_5p_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/5p.png */ "./src/assets/image_1x/rpg/portrait/5p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_5p_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_5p_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_image_1x_rpg_portrait_6p_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/6p.png */ "./src/assets/image_1x/rpg/portrait/6p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_6p_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_6p_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_image_1x_rpg_portrait_7p_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/7p.png */ "./src/assets/image_1x/rpg/portrait/7p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_7p_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_7p_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_image_1x_rpg_portrait_8p_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/8p.png */ "./src/assets/image_1x/rpg/portrait/8p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_8p_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_8p_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_image_1x_rpg_portrait_9p_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/9p.png */ "./src/assets/image_1x/rpg/portrait/9p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_9p_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_9p_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_image_1x_rpg_portrait_10p_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/10p.png */ "./src/assets/image_1x/rpg/portrait/10p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_10p_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_10p_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_image_1x_rpg_portrait_11p_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/11p.png */ "./src/assets/image_1x/rpg/portrait/11p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_11p_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_11p_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_image_1x_rpg_portrait_12p_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/12p.png */ "./src/assets/image_1x/rpg/portrait/12p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_12p_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_12p_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_image_1x_rpg_portrait_13p_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/13p.png */ "./src/assets/image_1x/rpg/portrait/13p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_13p_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_13p_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_image_1x_rpg_portrait_14p_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/image_1x/rpg/portrait/14p.png */ "./src/assets/image_1x/rpg/portrait/14p.png");
/* harmony import */ var assets_image_1x_rpg_portrait_14p_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_image_1x_rpg_portrait_14p_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_rpg_textures_empty_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/rpg/textures/empty.png */ "./src/assets/rpg/textures/empty.png");
/* harmony import */ var assets_rpg_textures_empty_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_empty_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TextureEmpty", function() { return assets_rpg_textures_empty_png__WEBPACK_IMPORTED_MODULE_14___default.a; });
/* harmony import */ var assets_rpg_textures_4_arch_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/rpg/textures/4-arch.png */ "./src/assets/rpg/textures/4-arch.png");
/* harmony import */ var assets_rpg_textures_4_arch_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_4_arch_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_rpg_textures_ground_dirt_3299_9359_Small_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/rpg/textures/ground_dirt_3299_9359_Small.jpg */ "./src/assets/rpg/textures/ground_dirt_3299_9359_Small.jpg");
/* harmony import */ var assets_rpg_textures_ground_dirt_3299_9359_Small_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_ground_dirt_3299_9359_Small_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_rpg_textures_Battered_Red_Clover_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/rpg/textures/Battered Red Clover.jpg */ "./src/assets/rpg/textures/Battered Red Clover.jpg");
/* harmony import */ var assets_rpg_textures_Battered_Red_Clover_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Battered_Red_Clover_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_rpg_textures_Granite_Wall_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/rpg/textures/Granite Wall.jpg */ "./src/assets/rpg/textures/Granite Wall.jpg");
/* harmony import */ var assets_rpg_textures_Granite_Wall_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Granite_Wall_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_rpg_textures_Segmented_Stone_Wall_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/rpg/textures/Segmented Stone Wall.jpg */ "./src/assets/rpg/textures/Segmented Stone Wall.jpg");
/* harmony import */ var assets_rpg_textures_Segmented_Stone_Wall_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Segmented_Stone_Wall_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var assets_rpg_textures_Samaris_Metal_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/rpg/textures/Samaris Metal.jpg */ "./src/assets/rpg/textures/Samaris Metal.jpg");
/* harmony import */ var assets_rpg_textures_Samaris_Metal_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Samaris_Metal_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_rpg_textures_Palace_Floor_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/rpg/textures/Palace Floor.jpg */ "./src/assets/rpg/textures/Palace Floor.jpg");
/* harmony import */ var assets_rpg_textures_Palace_Floor_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Palace_Floor_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_rpg_textures_Smudged_Dirt_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/rpg/textures/Smudged Dirt.jpg */ "./src/assets/rpg/textures/Smudged Dirt.jpg");
/* harmony import */ var assets_rpg_textures_Smudged_Dirt_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Smudged_Dirt_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_rpg_textures_Carved_Sandstone_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/rpg/textures/Carved Sandstone.jpg */ "./src/assets/rpg/textures/Carved Sandstone.jpg");
/* harmony import */ var assets_rpg_textures_Carved_Sandstone_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Carved_Sandstone_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var assets_rpg_textures_Asylum_Cell_Orange_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/rpg/textures/Asylum Cell Orange.jpg */ "./src/assets/rpg/textures/Asylum Cell Orange.jpg");
/* harmony import */ var assets_rpg_textures_Asylum_Cell_Orange_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Asylum_Cell_Orange_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var assets_rpg_textures_Council_Chamber_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/rpg/textures/Council Chamber.jpg */ "./src/assets/rpg/textures/Council Chamber.jpg");
/* harmony import */ var assets_rpg_textures_Council_Chamber_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Council_Chamber_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var assets_rpg_textures_Samaris_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/rpg/textures/Samaris.jpg */ "./src/assets/rpg/textures/Samaris.jpg");
/* harmony import */ var assets_rpg_textures_Samaris_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Samaris_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var assets_rpg_textures_Slime_Wall_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/rpg/textures/Slime Wall.jpg */ "./src/assets/rpg/textures/Slime Wall.jpg");
/* harmony import */ var assets_rpg_textures_Slime_Wall_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Slime_Wall_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var assets_rpg_textures_Dark_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/rpg/textures/Dark Gray Marble.jpg */ "./src/assets/rpg/textures/Dark Gray Marble.jpg");
/* harmony import */ var assets_rpg_textures_Dark_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Dark_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var assets_rpg_textures_Glassy_Pink_Marble_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/rpg/textures/Glassy Pink Marble.jpg */ "./src/assets/rpg/textures/Glassy Pink Marble.jpg");
/* harmony import */ var assets_rpg_textures_Glassy_Pink_Marble_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Glassy_Pink_Marble_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var assets_rpg_textures_Smashed_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/rpg/textures/Smashed Gray Marble.jpg */ "./src/assets/rpg/textures/Smashed Gray Marble.jpg");
/* harmony import */ var assets_rpg_textures_Smashed_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Smashed_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var assets_rpg_textures_Dead_Caves_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/rpg/textures/Dead Caves.jpg */ "./src/assets/rpg/textures/Dead Caves.jpg");
/* harmony import */ var assets_rpg_textures_Dead_Caves_jpg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Dead_Caves_jpg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var assets_rpg_textures_Fen_Stone_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/rpg/textures/Fen Stone.jpg */ "./src/assets/rpg/textures/Fen Stone.jpg");
/* harmony import */ var assets_rpg_textures_Fen_Stone_jpg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Fen_Stone_jpg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var assets_rpg_textures_Brown_Qussair_Granite_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! assets/rpg/textures/Brown Qussair Granite.jpg */ "./src/assets/rpg/textures/Brown Qussair Granite.jpg");
/* harmony import */ var assets_rpg_textures_Brown_Qussair_Granite_jpg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Brown_Qussair_Granite_jpg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var assets_rpg_textures_Rough_Orthoclase_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! assets/rpg/textures/Rough Orthoclase.jpg */ "./src/assets/rpg/textures/Rough Orthoclase.jpg");
/* harmony import */ var assets_rpg_textures_Rough_Orthoclase_jpg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Rough_Orthoclase_jpg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var assets_rpg_textures_Midnight_Stone_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! assets/rpg/textures/Midnight Stone.jpg */ "./src/assets/rpg/textures/Midnight Stone.jpg");
/* harmony import */ var assets_rpg_textures_Midnight_Stone_jpg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Midnight_Stone_jpg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var assets_rpg_textures_Weedy_Lawn_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! assets/rpg/textures/Weedy Lawn.jpg */ "./src/assets/rpg/textures/Weedy Lawn.jpg");
/* harmony import */ var assets_rpg_textures_Weedy_Lawn_jpg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Weedy_Lawn_jpg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var assets_rpg_textures_Moss_Cushions_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! assets/rpg/textures/Moss Cushions.jpg */ "./src/assets/rpg/textures/Moss Cushions.jpg");
/* harmony import */ var assets_rpg_textures_Moss_Cushions_jpg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Moss_Cushions_jpg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var assets_rpg_textures_Forest_Floor_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! assets/rpg/textures/Forest Floor.jpg */ "./src/assets/rpg/textures/Forest Floor.jpg");
/* harmony import */ var assets_rpg_textures_Forest_Floor_jpg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Forest_Floor_jpg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var assets_rpg_textures_Weeds_and_Gravel_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! assets/rpg/textures/Weeds and Gravel.jpg */ "./src/assets/rpg/textures/Weeds and Gravel.jpg");
/* harmony import */ var assets_rpg_textures_Weeds_and_Gravel_jpg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Weeds_and_Gravel_jpg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var assets_rpg_textures_Mossy_Rock_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! assets/rpg/textures/Mossy Rock.jpg */ "./src/assets/rpg/textures/Mossy Rock.jpg");
/* harmony import */ var assets_rpg_textures_Mossy_Rock_jpg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Mossy_Rock_jpg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var assets_rpg_textures_Cottage_1_Door_FL_1_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! assets/rpg/textures/Cottage 1 - Door (FL 1).jpg */ "./src/assets/rpg/textures/Cottage 1 - Door (FL 1).jpg");
/* harmony import */ var assets_rpg_textures_Cottage_1_Door_FL_1_jpg__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Cottage_1_Door_FL_1_jpg__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var assets_rpg_textures_Cottage_1_Wall_FL_1_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! assets/rpg/textures/Cottage 1 - Wall (FL 1).jpg */ "./src/assets/rpg/textures/Cottage 1 - Wall (FL 1).jpg");
/* harmony import */ var assets_rpg_textures_Cottage_1_Wall_FL_1_jpg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Cottage_1_Wall_FL_1_jpg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var assets_rpg_textures_Cottage_1_Wall_FL_2_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! assets/rpg/textures/Cottage 1 - Wall (FL 2+).jpg */ "./src/assets/rpg/textures/Cottage 1 - Wall (FL 2+).jpg");
/* harmony import */ var assets_rpg_textures_Cottage_1_Wall_FL_2_jpg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Cottage_1_Wall_FL_2_jpg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var assets_rpg_textures_Cottage_1_Window_FL_2_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! assets/rpg/textures/Cottage 1 - Window (FL 2+).jpg */ "./src/assets/rpg/textures/Cottage 1 - Window (FL 2+).jpg");
/* harmony import */ var assets_rpg_textures_Cottage_1_Window_FL_2_jpg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Cottage_1_Window_FL_2_jpg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var assets_rpg_textures_Cottage_1_Window_2_FL_2_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! assets/rpg/textures/Cottage 1 - Window 2 (FL 2+).jpg */ "./src/assets/rpg/textures/Cottage 1 - Window 2 (FL 2+).jpg");
/* harmony import */ var assets_rpg_textures_Cottage_1_Window_2_FL_2_jpg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Cottage_1_Window_2_FL_2_jpg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var assets_rpg_textures_Cottage_1_Door_2_FL_1_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! assets/rpg/textures/Cottage 1 - Door 2 (FL 1).jpg */ "./src/assets/rpg/textures/Cottage 1 - Door 2 (FL 1).jpg");
/* harmony import */ var assets_rpg_textures_Cottage_1_Door_2_FL_1_jpg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Cottage_1_Door_2_FL_1_jpg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var assets_rpg_textures_Sandy_Lichen_Brick_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! assets/rpg/textures/Sandy Lichen Brick.jpg */ "./src/assets/rpg/textures/Sandy Lichen Brick.jpg");
/* harmony import */ var assets_rpg_textures_Sandy_Lichen_Brick_jpg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Sandy_Lichen_Brick_jpg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var assets_rpg_textures_Straw_Roof_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! assets/rpg/textures/Straw Roof.jpg */ "./src/assets/rpg/textures/Straw Roof.jpg");
/* harmony import */ var assets_rpg_textures_Straw_Roof_jpg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Straw_Roof_jpg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var assets_rpg_textures_Straw_Roof_Interior_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! assets/rpg/textures/Straw Roof Interior.jpg */ "./src/assets/rpg/textures/Straw Roof Interior.jpg");
/* harmony import */ var assets_rpg_textures_Straw_Roof_Interior_jpg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Straw_Roof_Interior_jpg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_east_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! assets/rpg/skybox/clouds1/clouds1_east.png */ "./src/assets/rpg/skybox/clouds1/clouds1_east.png");
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_east_png__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_skybox_clouds1_clouds1_east_png__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_west_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! assets/rpg/skybox/clouds1/clouds1_west.png */ "./src/assets/rpg/skybox/clouds1/clouds1_west.png");
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_west_png__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_skybox_clouds1_clouds1_west_png__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_up_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! assets/rpg/skybox/clouds1/clouds1_up.png */ "./src/assets/rpg/skybox/clouds1/clouds1_up.png");
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_up_png__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_skybox_clouds1_clouds1_up_png__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_down_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! assets/rpg/skybox/clouds1/clouds1_down.png */ "./src/assets/rpg/skybox/clouds1/clouds1_down.png");
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_down_png__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_skybox_clouds1_clouds1_down_png__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_north_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! assets/rpg/skybox/clouds1/clouds1_north.png */ "./src/assets/rpg/skybox/clouds1/clouds1_north.png");
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_north_png__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_skybox_clouds1_clouds1_north_png__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_south_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! assets/rpg/skybox/clouds1/clouds1_south.png */ "./src/assets/rpg/skybox/clouds1/clouds1_south.png");
/* harmony import */ var assets_rpg_skybox_clouds1_clouds1_south_png__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_skybox_clouds1_clouds1_south_png__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var assets_rpg_npcs_ukobach_test_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! assets/rpg/npcs/ukobach-test.png */ "./src/assets/rpg/npcs/ukobach-test.png");
/* harmony import */ var assets_rpg_npcs_ukobach_test_png__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_npcs_ukobach_test_png__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var assets_rpg_npcs_buer_test_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! assets/rpg/npcs/buer-test.png */ "./src/assets/rpg/npcs/buer-test.png");
/* harmony import */ var assets_rpg_npcs_buer_test_png__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_npcs_buer_test_png__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var assets_rpg_npcs_skull_crossbones_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! assets/rpg/npcs/skull-crossbones.png */ "./src/assets/rpg/npcs/skull-crossbones.png");
/* harmony import */ var assets_rpg_npcs_skull_crossbones_png__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_npcs_skull_crossbones_png__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var assets_rpg_npcs_fancy_dress_12_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! assets/rpg/npcs/fancy-dress-12.png */ "./src/assets/rpg/npcs/fancy-dress-12.png");
/* harmony import */ var assets_rpg_npcs_fancy_dress_12_png__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_npcs_fancy_dress_12_png__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var assets_rpg_textures_Antediluvian_Door_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! assets/rpg/textures/Antediluvian Door.png */ "./src/assets/rpg/textures/Antediluvian Door.png");
/* harmony import */ var assets_rpg_textures_Antediluvian_Door_png__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Antediluvian_Door_png__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var assets_rpg_textures_Antediluvian_Door_alphamap_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! assets/rpg/textures/Antediluvian Door-alphamap.png */ "./src/assets/rpg/textures/Antediluvian Door-alphamap.png");
/* harmony import */ var assets_rpg_textures_Antediluvian_Door_alphamap_png__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_textures_Antediluvian_Door_alphamap_png__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var assets_rpg_levels_large_house_json__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! assets/rpg/levels/large-house.json */ "./src/assets/rpg/levels/large-house.json");
var assets_rpg_levels_large_house_json__WEBPACK_IMPORTED_MODULE_62___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/rpg/levels/large-house.json */ "./src/assets/rpg/levels/large-house.json", 1);
/* harmony import */ var assets_rpg_levels_open_country_json__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! assets/rpg/levels/open-country.json */ "./src/assets/rpg/levels/open-country.json");
var assets_rpg_levels_open_country_json__WEBPACK_IMPORTED_MODULE_63___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/rpg/levels/open-country.json */ "./src/assets/rpg/levels/open-country.json", 1);
/* harmony import */ var assets_rpg_spells_beautiful_bird_jpg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! assets/rpg/spells/beautiful-bird.jpg */ "./src/assets/rpg/spells/beautiful-bird.jpg");
/* harmony import */ var assets_rpg_spells_beautiful_bird_jpg__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_spells_beautiful_bird_jpg__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var assets_rpg_ui_hourglass_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! assets/rpg/ui/hourglass.png */ "./src/assets/rpg/ui/hourglass.png");
/* harmony import */ var assets_rpg_ui_hourglass_png__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_hourglass_png__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var assets_rpg_ui_charsheet_icon_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! assets/rpg/ui/charsheet-icon.png */ "./src/assets/rpg/ui/charsheet-icon.png");
/* harmony import */ var assets_rpg_ui_charsheet_icon_png__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_charsheet_icon_png__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var assets_rpg_ui_earth_spell_tab_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! assets/rpg/ui/earth-spell-tab.png */ "./src/assets/rpg/ui/earth-spell-tab.png");
/* harmony import */ var assets_rpg_ui_earth_spell_tab_png__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_earth_spell_tab_png__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var assets_rpg_ui_air_spell_tab_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! assets/rpg/ui/air-spell-tab.png */ "./src/assets/rpg/ui/air-spell-tab.png");
/* harmony import */ var assets_rpg_ui_air_spell_tab_png__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_air_spell_tab_png__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var assets_rpg_ui_fire_spell_tab_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! assets/rpg/ui/fire-spell-tab.png */ "./src/assets/rpg/ui/fire-spell-tab.png");
/* harmony import */ var assets_rpg_ui_fire_spell_tab_png__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_fire_spell_tab_png__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var assets_rpg_ui_water_spell_tab_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! assets/rpg/ui/water-spell-tab.png */ "./src/assets/rpg/ui/water-spell-tab.png");
/* harmony import */ var assets_rpg_ui_water_spell_tab_png__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_water_spell_tab_png__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var assets_rpg_ui_quick_items_tab_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! assets/rpg/ui/quick-items-tab.png */ "./src/assets/rpg/ui/quick-items-tab.png");
/* harmony import */ var assets_rpg_ui_quick_items_tab_png__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_ui_quick_items_tab_png__WEBPACK_IMPORTED_MODULE_71__);









































































let gameData = {
    skyboxes: [{ xPos: assets_rpg_skybox_clouds1_clouds1_east_png__WEBPACK_IMPORTED_MODULE_50___default.a, xNeg: assets_rpg_skybox_clouds1_clouds1_west_png__WEBPACK_IMPORTED_MODULE_51___default.a, yPos: assets_rpg_skybox_clouds1_clouds1_up_png__WEBPACK_IMPORTED_MODULE_52___default.a, yNeg: assets_rpg_skybox_clouds1_clouds1_down_png__WEBPACK_IMPORTED_MODULE_53___default.a, zPos: assets_rpg_skybox_clouds1_clouds1_north_png__WEBPACK_IMPORTED_MODULE_54___default.a, zNeg: assets_rpg_skybox_clouds1_clouds1_south_png__WEBPACK_IMPORTED_MODULE_55___default.a }],
    portraits: [{ filename: assets_image_1x_rpg_portrait_1p_png__WEBPACK_IMPORTED_MODULE_0___default.a },
        { filename: assets_image_1x_rpg_portrait_2p_png__WEBPACK_IMPORTED_MODULE_1___default.a },
        { filename: assets_image_1x_rpg_portrait_3p_png__WEBPACK_IMPORTED_MODULE_2___default.a },
        { filename: assets_image_1x_rpg_portrait_4p_png__WEBPACK_IMPORTED_MODULE_3___default.a },
        { filename: assets_image_1x_rpg_portrait_5p_png__WEBPACK_IMPORTED_MODULE_4___default.a },
        { filename: assets_image_1x_rpg_portrait_6p_png__WEBPACK_IMPORTED_MODULE_5___default.a },
        { filename: assets_image_1x_rpg_portrait_7p_png__WEBPACK_IMPORTED_MODULE_6___default.a },
        { filename: assets_image_1x_rpg_portrait_8p_png__WEBPACK_IMPORTED_MODULE_7___default.a },
        { filename: assets_image_1x_rpg_portrait_9p_png__WEBPACK_IMPORTED_MODULE_8___default.a },
        { filename: assets_image_1x_rpg_portrait_10p_png__WEBPACK_IMPORTED_MODULE_9___default.a },
        { filename: assets_image_1x_rpg_portrait_11p_png__WEBPACK_IMPORTED_MODULE_10___default.a },
        { filename: assets_image_1x_rpg_portrait_12p_png__WEBPACK_IMPORTED_MODULE_11___default.a },
        { filename: assets_image_1x_rpg_portrait_13p_png__WEBPACK_IMPORTED_MODULE_12___default.a },
        { filename: assets_image_1x_rpg_portrait_14p_png__WEBPACK_IMPORTED_MODULE_13___default.a }],
    walls: [{ filename: assets_rpg_textures_empty_png__WEBPACK_IMPORTED_MODULE_14___default.a, passable: true, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Samaris_Metal_jpg__WEBPACK_IMPORTED_MODULE_20___default.a, passable: false, normalMap: "", transparent: false, repeat: [1, 1] },
        { filename: assets_rpg_textures_ground_dirt_3299_9359_Small_jpg__WEBPACK_IMPORTED_MODULE_16___default.a, passable: false, normalMap: "", transparent: false, repeat: [1, 1] },
        { filename: assets_rpg_textures_Granite_Wall_jpg__WEBPACK_IMPORTED_MODULE_18___default.a, passable: false, normalMap: "", transparent: false, repeat: [1, 1] },
        { filename: assets_rpg_textures_Battered_Red_Clover_jpg__WEBPACK_IMPORTED_MODULE_17___default.a, passable: false, normalMap: "", transparent: false, repeat: [1, 1] },
        { filename: assets_rpg_textures_4_arch_png__WEBPACK_IMPORTED_MODULE_15___default.a, passable: true, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Segmented_Stone_Wall_jpg__WEBPACK_IMPORTED_MODULE_19___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Palace_Floor_jpg__WEBPACK_IMPORTED_MODULE_21___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Smudged_Dirt_jpg__WEBPACK_IMPORTED_MODULE_22___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Carved_Sandstone_jpg__WEBPACK_IMPORTED_MODULE_23___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Asylum_Cell_Orange_jpg__WEBPACK_IMPORTED_MODULE_24___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Council_Chamber_jpg__WEBPACK_IMPORTED_MODULE_25___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Samaris_jpg__WEBPACK_IMPORTED_MODULE_26___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Slime_Wall_jpg__WEBPACK_IMPORTED_MODULE_27___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Dark_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_28___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Glassy_Pink_Marble_jpg__WEBPACK_IMPORTED_MODULE_29___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Smashed_Gray_Marble_jpg__WEBPACK_IMPORTED_MODULE_30___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Dead_Caves_jpg__WEBPACK_IMPORTED_MODULE_31___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Fen_Stone_jpg__WEBPACK_IMPORTED_MODULE_32___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Brown_Qussair_Granite_jpg__WEBPACK_IMPORTED_MODULE_33___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Rough_Orthoclase_jpg__WEBPACK_IMPORTED_MODULE_34___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Midnight_Stone_jpg__WEBPACK_IMPORTED_MODULE_35___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Weedy_Lawn_jpg__WEBPACK_IMPORTED_MODULE_36___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Moss_Cushions_jpg__WEBPACK_IMPORTED_MODULE_37___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Forest_Floor_jpg__WEBPACK_IMPORTED_MODULE_38___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Weeds_and_Gravel_jpg__WEBPACK_IMPORTED_MODULE_39___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Mossy_Rock_jpg__WEBPACK_IMPORTED_MODULE_40___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Cottage_1_Door_FL_1_jpg__WEBPACK_IMPORTED_MODULE_41___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Cottage_1_Wall_FL_1_jpg__WEBPACK_IMPORTED_MODULE_42___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Cottage_1_Wall_FL_2_jpg__WEBPACK_IMPORTED_MODULE_43___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Cottage_1_Window_FL_2_jpg__WEBPACK_IMPORTED_MODULE_44___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Cottage_1_Window_2_FL_2_jpg__WEBPACK_IMPORTED_MODULE_45___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Cottage_1_Door_2_FL_1_jpg__WEBPACK_IMPORTED_MODULE_46___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Sandy_Lichen_Brick_jpg__WEBPACK_IMPORTED_MODULE_47___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Straw_Roof_jpg__WEBPACK_IMPORTED_MODULE_48___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] },
        { filename: assets_rpg_textures_Straw_Roof_Interior_jpg__WEBPACK_IMPORTED_MODULE_49___default.a, passable: false, normalMap: "", transparent: true, repeat: [1, 1] }],
    doors: [{ filename: assets_rpg_textures_Antediluvian_Door_png__WEBPACK_IMPORTED_MODULE_60___default.a, alphaMap: assets_rpg_textures_Antediluvian_Door_alphamap_png__WEBPACK_IMPORTED_MODULE_61___default.a, normalMap: "" }],
    objects: [{ name: "Chest", filename: "assets/rpg/Basic RPG Item Free/Metal Case_01.png" },
        { name: "Lever", filename: "rpg/object/3.png" },
        { name: "Button", filename: "rpg/object/4.png" }],
    npcs: [{
            name: "Ukobach",
            filename: assets_rpg_npcs_ukobach_test_png__WEBPACK_IMPORTED_MODULE_56___default.a,
            deadTexture: assets_rpg_npcs_skull_crossbones_png__WEBPACK_IMPORTED_MODULE_58___default.a,
            scale: 0.5,
            hp: "3d8+3",
            loot: "3d4",
            hostile: true,
            actions: [{ name: "Sword", type: "attack", range: 1, damage: "2d6", toHit: "3", recovery: "2" },
                { name: "Bow", type: "attack", range: 6, damage: "1d4", toHit: "3", recovery: "10" }]
        },
        {
            name: "Buer",
            filename: assets_rpg_npcs_buer_test_png__WEBPACK_IMPORTED_MODULE_57___default.a,
            deadTexture: assets_rpg_npcs_skull_crossbones_png__WEBPACK_IMPORTED_MODULE_58___default.a,
            scale: 0.8,
            hp: "6d8+6",
            loot: "6d8",
            hostile: true,
            actions: [{ name: "Bite", type: "attack", range: 1, damage: "2d8", toHit: "4", recovery: "3" }]
        },
        {
            name: "Fancy Dress 12",
            filename: assets_rpg_npcs_fancy_dress_12_png__WEBPACK_IMPORTED_MODULE_59___default.a,
            deadTexture: assets_rpg_npcs_skull_crossbones_png__WEBPACK_IMPORTED_MODULE_58___default.a,
            scale: 0.6,
            hp: "2d6",
            loot: "3d4",
            hostile: false,
            actions: []
        }],
    equipment: [{ type: "weapon", name: "Sword", damage: "2d6", toHit: 4, range: 1 },
        { type: "weapon", name: "Bow", damage: "1d8", toHit: 4, range: 6 }],
    ui: { hourglassIcon: assets_rpg_ui_hourglass_png__WEBPACK_IMPORTED_MODULE_65___default.a, charSheetIcon: assets_rpg_ui_charsheet_icon_png__WEBPACK_IMPORTED_MODULE_66___default.a, quickItemTabIcon: assets_rpg_ui_quick_items_tab_png__WEBPACK_IMPORTED_MODULE_71___default.a },
    levels: [{
            name: "Dungeon", width: 2, height: 1, depth: 2,
            walls: [0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 1, 0],
            doors: [],
            objects: [],
            npcs: [],
            startingPosition: [0, 0, 0],
            startingFacing: 1,
            outside: false,
            skybox: 0
        },
        {
            name: "Open Country", width: 10, height: 2, depth: 8,
            walls: assets_rpg_levels_open_country_json__WEBPACK_IMPORTED_MODULE_63__,
            doors: [{ type: 0, position: [6, 0, 5, 0], target: [2, 3, 1, 4, 0], openAngle: undefined }],
            objects: [],
            npcs: [],
            startingPosition: [8, 0, 7],
            startingFacing: 0,
            outside: true,
            skybox: 0
        },
        {
            name: "House of Vahs", width: 7, depth: 5, height: 3,
            walls: assets_rpg_levels_large_house_json__WEBPACK_IMPORTED_MODULE_62__,
            doors: [{ type: 0, position: [2, 1, 3, 0], target: undefined, openAngle: Math.PI / 2 },
                { type: 0, position: [3, 1, 4, 1], target: undefined, openAngle: Math.PI / 2 },
                { type: 0, position: [3, 1, 4, 2], target: [1, 6, 0, 5, 4], openAngle: undefined },
                { type: 0, position: [4, 1, 2, 1], target: undefined, openAngle: Math.PI / 2 },
                { type: 0, position: [4, 1, 2, 3], target: undefined, openAngle: Math.PI / 2 }],
            objects: [],
            npcs: [],
            startingPosition: [3, 1, 4],
            startingFacing: 0,
            outside: false,
            skybox: undefined
        }],
    party: {
        characters: [{
                name: "Torwyn", title: "Squire", portrait: 10, equipment: [0, 1], level: 1, xp: 0, hp: 24, maxHP: 24, mana: 0, maxMana: 0,
                spellLists: []
            },
            {
                name: "Amelar", title: "Acolyte", portrait: 1, equipment: [], level: 1, xp: 0, hp: 14, maxHP: 14, mana: 8, maxMana: 8,
                spellLists: [{ list: 2, spells: [0] }]
            },
            {
                name: "Garn", title: "Pickpocket", portrait: 5, equipment: [], level: 1, xp: 0, hp: 12, maxHP: 12, mana: 0, maxMana: 0,
                spellLists: []
            },
            {
                name: "Melystra", title: "Apprentice", portrait: 3, equipment: [], level: 1, xp: 0, hp: 8, maxHP: 8, mana: 12, maxMana: 12,
                spellLists: [{ list: 0, spells: [0] },
                    { list: 1, spells: [0] },
                    { list: 2, spells: [0, 1] },
                    { list: 3, spells: [] }]
            }
        ],
        gold: 0
    },
    player: { position: undefined, facing: 0, level: 1 },
    spellLists: [{ name: "Earth", spells: [{ name: "Level Editing", icon: assets_rpg_spells_beautiful_bird_jpg__WEBPACK_IMPORTED_MODULE_64___default.a }], icon: assets_rpg_ui_earth_spell_tab_png__WEBPACK_IMPORTED_MODULE_67___default.a },
        { name: "Air", spells: [{ name: "Fly", icon: assets_rpg_spells_beautiful_bird_jpg__WEBPACK_IMPORTED_MODULE_64___default.a }], icon: assets_rpg_ui_air_spell_tab_png__WEBPACK_IMPORTED_MODULE_68___default.a },
        { name: "Fire", icon: assets_rpg_ui_fire_spell_tab_png__WEBPACK_IMPORTED_MODULE_69___default.a, spells: [{ name: "Fire Bolt", icon: assets_rpg_spells_beautiful_bird_jpg__WEBPACK_IMPORTED_MODULE_64___default.a }, { name: "Torch Light", icon: assets_rpg_spells_beautiful_bird_jpg__WEBPACK_IMPORTED_MODULE_64___default.a }] },
        { name: "Water", spells: [], icon: assets_rpg_ui_water_spell_tab_png__WEBPACK_IMPORTED_MODULE_70___default.a }]
};

class GameData {
}
class SkyboxData {
}
class PortraitData {
}
class WallData {
}
class WallDetailsData {
}
class WorldObjectData {
}
class NPCData {
}
class ActionData {
}
class LevelData {
}
class PartyData {
}
class CharacterData {
}
class PlayerData {
}
class UIData {
}
;
class ItemData {
}
class WeaponItemData extends ItemData {
}
class SpellListData {
}
class DoorData {
}
class LevelDoorData {
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/ActorModel.ts":
/*!****************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/ActorModel.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActorModel; });
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");

class ActorModel {
    constructor() {
        this.onTakeDamage = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    rollInitiative() {
        return Math.round(Math.random() * 5);
    }
    takeDamage(damage) {
        this.hitpoints.value -= damage;
        this.checkHealthState();
        this.onTakeDamage.call();
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/CharacterModel.ts":
/*!********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/CharacterModel.ts ***!
  \********************************************************************/
/*! exports provided: HealthState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthState", function() { return HealthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterModel; });
/* harmony import */ var _ActorModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActorModel */ "./src/examples/classic-rpg-interface/model/ActorModel.ts");
/* harmony import */ var _EquipmentModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EquipmentModel */ "./src/examples/classic-rpg-interface/model/EquipmentModel.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");
/* harmony import */ var _action_LootActionModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/LootActionModel */ "./src/examples/classic-rpg-interface/model/action/LootActionModel.ts");
/* harmony import */ var _action_AttackActionModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/AttackActionModel */ "./src/examples/classic-rpg-interface/model/action/AttackActionModel.ts");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Status */ "./src/examples/classic-rpg-interface/model/Status.ts");
/* harmony import */ var _SpellList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpellList */ "./src/examples/classic-rpg-interface/model/SpellList.ts");
/* harmony import */ var _action_OpenDoorActionModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action/OpenDoorActionModel */ "./src/examples/classic-rpg-interface/model/action/OpenDoorActionModel.ts");








var HealthState;
(function (HealthState) {
    HealthState[HealthState["Normal"] = 0] = "Normal";
    HealthState[HealthState["Unconsious"] = 1] = "Unconsious";
    HealthState[HealthState["Dead"] = 2] = "Dead";
})(HealthState || (HealthState = {}));
class CharacterModel extends _ActorModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(gameData, data) {
        super();
        this.unlockedActions = [];
        this.statuses = [];
        this.spellLists = [];
        this.characterData = data;
        this.portraitType = gameData.portraits[data.portrait];
    }
    get fullName() { return this.characterData.name + " the " + this.characterData.title; }
    save(gameData, characterData) {
        characterData.hp = this.hitpoints.value;
        characterData.mana = this.mana;
        characterData.maxHP = this.maxHitpoints.value;
        characterData.maxMana = this.maxMana;
        characterData.level = this.level;
        characterData.xp = this.xp;
        characterData.portrait = gameData.portraits.indexOf(this.portraitType);
    }
    get statusText() {
        if (this.healthState.value === HealthState.Normal)
            return "Good";
        if (this.healthState.value === HealthState.Unconsious)
            return "Unconsious";
        if (this.healthState.value === HealthState.Dead)
            return "Dead";
    }
    getPosition() { return this.gameModel.player.position; }
    create(gameModel) {
        this.equipmentModel = new _EquipmentModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.maxHitpoints = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__["default"](this.characterData.maxHP);
        this.hitpoints = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__["default"](this.characterData.hp);
        this.gameModel = gameModel;
        this.healthState = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__["default"](HealthState.Normal);
        this.checkHealthState(false);
        this.mana = this.characterData.mana;
        this.maxMana = this.characterData.maxMana;
        this.level = this.characterData.level;
        this.xp = this.characterData.xp;
        this.characterData.spellLists.forEach(l => {
            let spells = [];
            l.spells.forEach(s => {
                let spellData = this.gameModel.data.spellLists[l.list].spells[s];
                spells.push(_SpellList__WEBPACK_IMPORTED_MODULE_6__["default"].getSpell(spellData.name, spellData.icon, this.gameModel));
            });
            let sl = new _SpellList__WEBPACK_IMPORTED_MODULE_6__["default"](this.gameModel.data.spellLists[l.list].name, spells, this.gameModel.data.spellLists[l.list].icon);
            this.spellLists.push(sl);
        });
        this.equipmentModel.create(this.characterData.equipment, gameModel);
        if (this.equipmentModel.equipedWeapon) {
            let weapon = this.equipmentModel.equipedWeapon.itemData;
            this.unlockedActions.push(new _action_AttackActionModel__WEBPACK_IMPORTED_MODULE_4__["default"](this.gameModel, this.equipmentModel.equipedWeapon.name, weapon.damage, weapon.range));
        }
        else
            this.unlockedActions.push(new _action_AttackActionModel__WEBPACK_IMPORTED_MODULE_4__["default"](this.gameModel, "Unarmed", "1d4", 1));
        this.unlockedActions.push(new _action_LootActionModel__WEBPACK_IMPORTED_MODULE_3__["default"](this.gameModel));
        this.unlockedActions.push(new _action_OpenDoorActionModel__WEBPACK_IMPORTED_MODULE_7__["default"](this.gameModel));
        this.hitpoints.onUpdate.push(this.checkHealthState.bind(this), this);
    }
    checkHealthState(updateParty) {
        if (this.hitpoints.value <= 0)
            this.healthState.value = HealthState.Unconsious;
        if (this.hitpoints.value <= -this.maxHitpoints.value) {
            this.healthState.value = HealthState.Dead;
            this.statuses.push(new _Status__WEBPACK_IMPORTED_MODULE_5__["default"](_Status__WEBPACK_IMPORTED_MODULE_5__["StatusType"].Dead));
        }
        if (updateParty || updateParty === undefined)
            this.gameModel.party.checkHealthState();
    }
    availableActions(target) {
        return this.unlockedActions.filter(a => a.test(this, target));
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/EquipmentModel.ts":
/*!********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/EquipmentModel.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EquipmentModel; });
/* harmony import */ var _ItemModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemModel */ "./src/examples/classic-rpg-interface/model/ItemModel.ts");

class EquipmentModel {
    constructor() {
        this.equipment = [];
    }
    create(equipmentIDs, gameModel) {
        this.gameModel = gameModel;
        equipmentIDs.forEach(id => {
            this.equipment.push(new _ItemModel__WEBPACK_IMPORTED_MODULE_0__["default"](gameModel.data.equipment[id]));
        });
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/GameModel.ts":
/*!***************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/GameModel.ts ***!
  \***************************************************************/
/*! exports provided: default, GameModelListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModelListener", function() { return GameModelListener; });
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");
/* harmony import */ var _PlayerModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerModel */ "./src/examples/classic-rpg-interface/model/PlayerModel.ts");
/* harmony import */ var _action_InitiativeModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action/InitiativeModel */ "./src/examples/classic-rpg-interface/model/action/InitiativeModel.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");





class GameModel {
    constructor(listener, party, world, player, data) {
        this.spellLists = [];
        this.infoText = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__["default"]("");
        this._currentPaintID = 0;
        this.listener = listener;
        this.data = data;
        this.party = party;
        this.world = world;
        this.player = player;
        this.initiative = new _action_InitiativeModel__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    get currentPaintID() { return this._currentPaintID; }
    set currentPaintID(val) {
        this._currentPaintID = val % this.data.walls.length;
        if (this._currentPaintID < 0)
            this._currentPaintID = this.data.walls.length + this.currentPaintID;
    }
    create() {
        this.party.create(this.data, this);
        this.world.create(this);
        this.player.create(this, this.data);
        this.initiative.create(this, this.party, this.world.currentLevel.value, this.data);
    }
    save() {
        this.world.save(this.data);
        this.party.save(this.data);
        this.player.save(this.data);
        console.log(JSON.stringify(this.data.levels[this.world.currentLevelID].walls));
    }
    turnLeft() {
        if (this.initiative.playerCanTurn)
            this.player.turnLeft();
    }
    rotateLeft(angle) {
        if (this.initiative.playerCanTurn)
            this.player.rotateLeft(angle);
    }
    rotateRight(angle) {
        if (this.initiative.playerCanTurn)
            this.player.rotateRight(angle);
    }
    turnRight() {
        if (this.initiative.playerCanTurn)
            this.player.turnRight();
    }
    resetRotation() {
        this.listener.onTurn.call();
    }
    strafeLeft() {
        if (this.initiative.playerCanMove) {
            let start = this.player.position;
            this.player.strafeLeft();
            let end = this.player.position;
            if (!(start.equals(end)))
                this.initiative.moveParty(start, end);
        }
    }
    strafeRight() {
        if (this.initiative.playerCanMove) {
            let start = this.player.position;
            this.player.strafeRight();
            let end = this.player.position;
            if (!(start.equals(end)))
                this.initiative.moveParty(start, end);
        }
    }
    moveForward() {
        if (this.initiative.playerCanMove) {
            let start = this.player.position;
            this.player.moveForward();
            let end = this.player.position;
            if (!(start.equals(end)))
                this.initiative.moveParty(start, end);
        }
    }
    moveBackward() {
        if (this.initiative.playerCanMove) {
            let start = this.player.position;
            this.player.moveBackward();
            let end = this.player.position;
            if (!(start.equals(end)))
                this.initiative.moveParty(start, end);
        }
    }
    hoverUp() {
        if (this.initiative.playerCanMove) {
            let start = this.player.position;
            this.player.hoverUp();
            let end = this.player.position;
            if (!(start.equals(end)))
                this.initiative.moveParty(start, end);
        }
    }
    hoverDown() {
        if (this.initiative.playerCanMove) {
            let start = this.player.position;
            this.player.hoverDown();
            let end = this.player.position;
            if (!(start.equals(end)))
                this.initiative.moveParty(start, end);
        }
    }
    castSpell(spell, target) {
        let source = this.initiative.waitingCharacter.value;
        if (spell.test(source, target)) {
            let result = this.performAction(target, spell);
            if (result) {
                result.apply();
            }
        }
    }
    switchLevel(level, position, facing) {
        this.listener.onExitLevel.call();
        this.world.currentLevel.value = level;
        if (position)
            this.player.position = position;
        else
            this.player.position = level.startingPosition;
        if (facing)
            this.player.facing = facing;
        else
            this.player.facing = level.startingFacing;
        this.player.updateRotationToMatchFacing();
        this.listener.onSwitchLevel.call();
    }
    openDoor(door) {
        if (door.targetLevel !== undefined)
            this.switchLevel(this.world.levels[door.targetLevel], door.targetPosition, door.targetFacing);
        else
            door.changeOpenState();
    }
    toggleWallAbove() {
        this.toggleWall(5);
    }
    toggleWallBelow() {
        this.toggleWall(4);
    }
    toggleWallFront() {
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].North)
            this.toggleWall(0);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].East)
            this.toggleWall(1);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].South)
            this.toggleWall(2);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].West)
            this.toggleWall(3);
    }
    toggleWallBehind() {
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].North)
            this.toggleWall(2);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].East)
            this.toggleWall(3);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].South)
            this.toggleWall(0);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].West)
            this.toggleWall(1);
    }
    toggleWallLeft() {
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].North)
            this.toggleWall(3);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].East)
            this.toggleWall(0);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].South)
            this.toggleWall(1);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].West)
            this.toggleWall(2);
    }
    toggleWallRight() {
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].North)
            this.toggleWall(1);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].East)
            this.toggleWall(2);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].South)
            this.toggleWall(3);
        if (this.player.facing === _PlayerModel__WEBPACK_IMPORTED_MODULE_1__["Facing"].West)
            this.toggleWall(0);
    }
    toggleWall(id) {
        if (id === 0)
            this._toggleWall2(0, 2, 0, 0, -1);
        else if (id === 1)
            this._toggleWall2(1, 3, 1, 0, 0);
        else if (id === 2)
            this._toggleWall2(2, 0, 0, 0, 1);
        else if (id === 3)
            this._toggleWall2(3, 1, -1, 0, 0);
        else if (id === 4)
            this._toggleWall2(4, 5, 0, -1, 0);
        else if (id === 5)
            this._toggleWall2(5, 4, 0, 1, 0);
    }
    _toggleWall2(id, idCell2, x, y, z) {
        let currentCell = this.world.currentLevel.value.cells[this.player.position.x][this.player.position.y][this.player.position.z];
        currentCell.walls[id].hidden.value = !currentCell.walls[id].hidden.value;
        if ((this.player.position.x + x >= 0) && (this.player.position.x + x < this.world.currentLevel.value.width))
            if ((this.player.position.y + y >= 0) && (this.player.position.y + y < this.world.currentLevel.value.height))
                if ((this.player.position.z + z >= 0) && (this.player.position.z + z < this.world.currentLevel.value.depth)) {
                    let cell2 = this.world.currentLevel.value.cells[this.player.position.x + x][this.player.position.y + y][this.player.position.z + z];
                    cell2.walls[idCell2].hidden.value = currentCell.walls[id].hidden.value;
                }
        this.listener.onWorldChange.call();
    }
    paintWall(wallModel) {
        wallModel.wallData.value = this.data.walls[this.currentPaintID];
    }
    switchCharacter(character) {
        if (this.initiative.playerCanAct)
            this.initiative.switchCharacter(character);
    }
    performAction(target, action) {
        if (this.initiative.playerCanAct) {
            let source = this.initiative.waitingCharacter.value;
            let result = action.perform(source, target);
            this.initiative.performedAction(source, result);
            return result;
        }
        return null;
    }
    npcPerformAction(source, target, action) {
        if (this.initiative.npcsToAct.value.indexOf(source) !== -1) {
            let result = action.perform(source, target);
            this.initiative.performedAction(source, result);
            return result;
        }
        return null;
    }
    npcDelay(npc, time) {
        if (!npc)
            throw new Error("Cannot delay null NPC");
        this.initiative.npcDelay(npc, time);
    }
    applyActionResult(actionResult) {
        actionResult.apply();
    }
    travelTo(level) {
        this.world.switchToLevel(level);
        this.player.position = level.startingPosition;
        this.player.facing = level.startingFacing;
        this.initiative.create(this, this.party, this.world.currentLevel.value, this.data);
    }
    static rollDice(diceSpec) {
        let parts = diceSpec.split("+");
        let sum = 0;
        parts.forEach(p => {
            sum += GameModel.rollSimpleDice(p);
        });
        return sum;
    }
    static rollSimpleDice(simpleDiceSpec) {
        let parts = simpleDiceSpec.split("d");
        if (parts.length === 1)
            return parseInt(parts[0]);
        let total = 0;
        for (let i = 0; i < parseInt(parts[0]); i++)
            total += Math.round(Math.random() * (parseInt(parts[1]) - 1)) + 1;
        return total;
    }
    isWithinMelee(source, target) {
        let distance = engine_util_Point3__WEBPACK_IMPORTED_MODULE_4__["default"].minus(target, source).magnitude();
        if (distance <= 1)
            return true;
        return false;
    }
}
class GameModelListener {
    constructor() {
        this.onMove = new engine_util_Event__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.onTurn = new engine_util_Event__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.onWorldChange = new engine_util_Event__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.onExitLevel = new engine_util_Event__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.onSwitchLevel = new engine_util_Event__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/ItemModel.ts":
/*!***************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/ItemModel.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemModel; });
class ItemModel {
    get name() { return this.itemData.name; }
    get type() { return this.itemData.type; }
    constructor(itemData) {
        this.itemData = itemData;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/PartyModel.ts":
/*!****************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/PartyModel.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartyModel; });
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");


class PartyModel {
    create(data, gameModel) {
        this.gameModel = gameModel;
        this.characters = [];
        data.party.characters.forEach(c => this.characters.push(new _CharacterModel__WEBPACK_IMPORTED_MODULE_0__["default"](data, c)));
        this.characters.forEach(c => c.create(gameModel));
        this.gold = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__["default"](data.party.gold);
        this.statuses = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__["default"]([]);
    }
    save(data) {
        data.party.gold = this.gold.value;
        let characters = [];
        this.characters.forEach(c => {
            c.save(data, c.characterData);
            characters.push(c.characterData);
        });
        data.party.characters = characters;
    }
    gainGold(increment) {
        this.gold.value += increment;
        this.gameModel.infoText.value = "You gained " + increment + " gp";
    }
    checkHealthState() {
        let livingChars = this.characters.filter(c => c.healthState.value === _CharacterModel__WEBPACK_IMPORTED_MODULE_0__["HealthState"].Normal);
        if (livingChars.length === 0) {
            this.partyDead = true;
            this.gameModel.player.gameOver.value = true;
        }
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/PlayerModel.ts":
/*!*****************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/PlayerModel.ts ***!
  \*****************************************************************/
/*! exports provided: Facing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facing", function() { return Facing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerModel; });
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Status */ "./src/examples/classic-rpg-interface/model/Status.ts");



var Facing;
(function (Facing) {
    Facing[Facing["North"] = 0] = "North";
    Facing[Facing["NorthEast"] = 1] = "NorthEast";
    Facing[Facing["East"] = 2] = "East";
    Facing[Facing["SouthEast"] = 3] = "SouthEast";
    Facing[Facing["South"] = 4] = "South";
    Facing[Facing["SouthWest"] = 5] = "SouthWest";
    Facing[Facing["West"] = 6] = "West";
    Facing[Facing["NorthWest"] = 7] = "NorthWest";
})(Facing || (Facing = {}));
class PlayerModel {
    constructor() {
        this.yOffset = 0;
        this.animating = false;
        this.canMove = true;
        this.canTurn = true;
    }
    get canFly() {
        if (this.gameModel.party.statuses.value.filter(s => s.statusType === _Status__WEBPACK_IMPORTED_MODULE_2__["StatusType"].Flying).length >= 1)
            return true;
        return false;
    }
    get canLevelEdit() {
        if (this.gameModel.party.statuses.value.filter(s => s.statusType === _Status__WEBPACK_IMPORTED_MODULE_2__["StatusType"].LevelEdit).length >= 1)
            return true;
        return false;
    }
    get canAct() { return !(this.animating); }
    create(gameModel, data) {
        this.gameModel = gameModel;
        this.gameOver = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__["default"](false);
        this.facing = data.player.facing;
        this.rotation = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__["default"](new engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0));
        if (data.player.position)
            this.position = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__["default"](data.player.position[0], data.player.position[1], data.player.position[2]);
        else
            this.position = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__["default"](gameModel.world.currentLevel.value.startingPosition);
    }
    save(data) {
        data.player.position = [this.position.x, this.position.y, this.position.z];
        data.player.facing = this.facing;
        data.player.level = this.gameModel.world.levels.indexOf(this.gameModel.world.currentLevel.value);
    }
    updateRotationToMatchFacing() {
        this.rotation.value = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__["default"](0, this.facing * Math.PI / 4, 0);
    }
    turnRight() {
        if (this.facing === Facing.North)
            this.facing = Facing.NorthEast;
        else if (this.facing === Facing.NorthEast)
            this.facing = Facing.East;
        else if (this.facing === Facing.East)
            this.facing = Facing.SouthEast;
        else if (this.facing === Facing.SouthEast)
            this.facing = Facing.South;
        else if (this.facing === Facing.South)
            this.facing = Facing.SouthWest;
        else if (this.facing === Facing.SouthWest)
            this.facing = Facing.West;
        else if (this.facing === Facing.West)
            this.facing = Facing.NorthWest;
        else if (this.facing === Facing.NorthWest)
            this.facing = Facing.North;
        this.gameModel.listener.onTurn.call();
    }
    turnLeft() {
        if (this.facing === Facing.North)
            this.facing = Facing.NorthWest;
        else if (this.facing === Facing.NorthEast)
            this.facing = Facing.North;
        else if (this.facing === Facing.East)
            this.facing = Facing.NorthEast;
        else if (this.facing === Facing.SouthEast)
            this.facing = Facing.East;
        else if (this.facing === Facing.South)
            this.facing = Facing.SouthEast;
        else if (this.facing === Facing.SouthWest)
            this.facing = Facing.South;
        else if (this.facing === Facing.West)
            this.facing = Facing.SouthWest;
        else if (this.facing === Facing.NorthWest)
            this.facing = Facing.West;
        this.gameModel.listener.onTurn.call();
    }
    rotateLeft(angle) {
        this.rotation.value = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__["default"](this.rotation.value.x, (this.rotation.value.y + angle) % (Math.PI * 2), this.rotation.value.z);
        let y = Math.round(7 - (this.rotation.value.y / (Math.PI / 4)));
        this.facing = (y + 1) % 8;
    }
    rotateRight(angle) {
        this.rotation.value = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__["default"](this.rotation.value.x, (this.rotation.value.y - angle) % (Math.PI * 2), this.rotation.value.z);
        let y = Math.round(7 - (this.rotation.value.y / (Math.PI / 4)));
        this.facing = (y + 1) % 8;
    }
    moveForward() {
        if (this.facing === Facing.North)
            this.moveNorth();
        if (this.facing === Facing.NorthEast)
            this.moveNorthEast();
        if (this.facing === Facing.East)
            this.moveEast();
        if (this.facing === Facing.SouthEast)
            this.moveSouthEast();
        if (this.facing === Facing.South)
            this.moveSouth();
        if (this.facing === Facing.SouthWest)
            this.moveSouthWest();
        if (this.facing === Facing.West)
            this.moveWest();
        if (this.facing === Facing.NorthWest)
            this.moveNorthWest();
    }
    moveBackward() {
        if (this.facing === Facing.North)
            this.moveSouth();
        if (this.facing === Facing.NorthEast)
            this.moveSouthWest();
        if (this.facing === Facing.East)
            this.moveWest();
        if (this.facing === Facing.SouthEast)
            this.moveNorthWest();
        if (this.facing === Facing.South)
            this.moveNorth();
        if (this.facing === Facing.SouthWest)
            this.moveNorthEast();
        if (this.facing === Facing.West)
            this.moveEast();
        if (this.facing === Facing.NorthWest)
            this.moveSouthEast();
    }
    strafeLeft() {
        if (this.facing === Facing.North)
            this.moveWest();
        if (this.facing === Facing.NorthEast)
            this.moveNorthWest();
        if (this.facing === Facing.East)
            this.moveNorth();
        if (this.facing === Facing.SouthEast)
            this.moveNorthEast();
        if (this.facing === Facing.South)
            this.moveEast();
        if (this.facing === Facing.SouthWest)
            this.moveSouthEast();
        if (this.facing === Facing.West)
            this.moveSouth();
        if (this.facing === Facing.NorthWest)
            this.moveSouthWest();
    }
    strafeRight() {
        if (this.facing === Facing.North)
            this.moveEast();
        if (this.facing === Facing.NorthEast)
            this.moveSouthEast();
        if (this.facing === Facing.East)
            this.moveSouth();
        if (this.facing === Facing.SouthEast)
            this.moveSouthWest();
        if (this.facing === Facing.South)
            this.moveWest();
        if (this.facing === Facing.SouthWest)
            this.moveNorthWest();
        if (this.facing === Facing.West)
            this.moveNorth();
        if (this.facing === Facing.NorthWest)
            this.moveNorthEast();
    }
    hoverUp() {
        if (this.position.y < this.gameModel.world.currentLevel.value.levelType.height - 1) {
            let cell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z];
            let newcell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y + 1][this.position.z];
            if (cell.walls[5].passable)
                this.move(0, 1, 0);
        }
    }
    hoverDown() {
        if (this.position.y > 0) {
            let cell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z];
            let newcell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y - 1][this.position.z];
            if (cell.walls[4].passable)
                this.move(0, -1, 0);
        }
    }
    moveNorth() {
        if (this.position.z > 0) {
            let cell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z];
            let newcell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z - 1];
            if ((cell.walls[0].passable) || (cell.exitOffsetN !== 0))
                this.move(0, cell.exitOffsetN, -1);
        }
    }
    moveNorthEast() {
        this.moveNorth();
        this.moveEast();
    }
    moveEast() {
        if (this.position.x < this.gameModel.world.currentLevel.value.levelType.width - 1) {
            let cell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z];
            let newcell = this.gameModel.world.currentLevel.value.cells[this.position.x + 1][this.position.y][this.position.z];
            if (cell.walls[1].passable || cell.exitOffsetE !== 0)
                this.move(1, cell.exitOffsetE, 0);
        }
    }
    moveSouthEast() {
        this.moveSouth();
        this.moveEast();
    }
    moveSouth() {
        if (this.position.z < this.gameModel.world.currentLevel.value.levelType.depth - 1) {
            let cell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z];
            let newcell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z + 1];
            if (cell.walls[2].passable || cell.exitOffsetS !== 0)
                this.move(0, cell.exitOffsetS, 1);
        }
    }
    moveSouthWest() {
        this.moveSouth();
        this.moveWest();
    }
    moveWest() {
        if (this.position.x > 0) {
            let cell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z];
            let newcell = this.gameModel.world.currentLevel.value.cells[this.position.x - 1][this.position.y][this.position.z];
            if (cell.walls[3].passable || cell.exitOffsetW !== 0)
                this.move(-1, cell.exitOffsetW, 0);
        }
    }
    moveNorthWest() {
        this.moveNorth();
        this.moveWest();
    }
    move(x, y, z) {
        this.position = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_1__["default"](this.position.x + x, this.position.y + y, this.position.z + z);
        let cell = this.gameModel.world.currentLevel.value.cells[this.position.x][this.position.y][this.position.z];
        this.yOffset = cell.midHeight;
        this.gameModel.listener.onMove.call();
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/Spell.ts":
/*!***********************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/Spell.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spell; });
/* harmony import */ var _action_ActionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action/ActionModel */ "./src/examples/classic-rpg-interface/model/action/ActionModel.ts");

class Spell extends _action_ActionModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, icon, requireTarget) {
        super();
        this.name = name;
        this.requireTarget = requireTarget;
        this.icon = icon;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/SpellList.ts":
/*!***************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/SpellList.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpellList; });
/* harmony import */ var _action_spells_FireBolt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action/spells/FireBolt */ "./src/examples/classic-rpg-interface/model/action/spells/FireBolt.ts");
/* harmony import */ var _action_spells_TorchLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action/spells/TorchLight */ "./src/examples/classic-rpg-interface/model/action/spells/TorchLight.ts");
/* harmony import */ var _action_spells_LevelEditing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action/spells/LevelEditing */ "./src/examples/classic-rpg-interface/model/action/spells/LevelEditing.ts");
/* harmony import */ var _action_spells_Fly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/spells/Fly */ "./src/examples/classic-rpg-interface/model/action/spells/Fly.ts");




class SpellList {
    constructor(name, spells, icon) {
        this.spells = [];
        this.name = name;
        this.spells = spells;
        this.icon = icon;
    }
    static getSpell(name, icon, gameModel) {
        if (name === "Fire Bolt")
            return new _action_spells_FireBolt__WEBPACK_IMPORTED_MODULE_0__["default"](name, icon);
        if (name === "Torch Light")
            return new _action_spells_TorchLight__WEBPACK_IMPORTED_MODULE_1__["default"](name, icon, gameModel);
        if (name === "Level Editing")
            return new _action_spells_LevelEditing__WEBPACK_IMPORTED_MODULE_2__["default"](name, icon, gameModel);
        if (name === "Fly")
            return new _action_spells_Fly__WEBPACK_IMPORTED_MODULE_3__["default"](name, icon, gameModel);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/Status.ts":
/*!************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/Status.ts ***!
  \************************************************************/
/*! exports provided: StatusType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusType", function() { return StatusType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Status; });
var StatusType;
(function (StatusType) {
    StatusType[StatusType["Dead"] = 0] = "Dead";
    StatusType[StatusType["TorchLight"] = 1] = "TorchLight";
    StatusType[StatusType["Slow"] = 2] = "Slow";
    StatusType[StatusType["Flying"] = 3] = "Flying";
    StatusType[StatusType["LevelEdit"] = 4] = "LevelEdit";
})(StatusType || (StatusType = {}));
class Status {
    get name() {
        if (this.statusType === StatusType.Dead)
            return "Dead";
        if (this.statusType === StatusType.TorchLight)
            return "Torch Light";
        if (this.statusType === StatusType.Slow)
            return "Slow";
        if (this.statusType === StatusType.Flying)
            return "Flying";
        if (this.statusType === StatusType.LevelEdit)
            return "Level Editing";
    }
    constructor(statusType) {
        this.statusType = statusType;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/ActionModel.ts":
/*!************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/ActionModel.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionModel; });
class ActionModel {
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts":
/*!******************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionResultModel; });
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");

class ActionResultModel {
    constructor(recoveryTime) {
        this.recoveryTime = 0;
        this.onApply = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.recoveryTime = recoveryTime;
    }
    apply() {
        this.onApply.call();
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/AttackActionModel.ts":
/*!******************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/AttackActionModel.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttackActionModel; });
/* harmony import */ var _ActionResultModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionResultModel */ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts");
/* harmony import */ var _world_NPCModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world/NPCModel */ "./src/examples/classic-rpg-interface/model/world/NPCModel.ts");
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var _ActionModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionModel */ "./src/examples/classic-rpg-interface/model/action/ActionModel.ts");
/* harmony import */ var _GameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GameModel */ "./src/examples/classic-rpg-interface/model/GameModel.ts");
/* harmony import */ var _ActorModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ActorModel */ "./src/examples/classic-rpg-interface/model/ActorModel.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");







class AttackActionModel extends _ActionModel__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(gameModel, name, damageSpec, range) {
        super();
        this.gameModel = gameModel;
        this.name = name;
        this.damageSpec = damageSpec;
        this.range = range;
    }
    perform(source, target) {
        let r = new _ActionResultModel__WEBPACK_IMPORTED_MODULE_0__["default"](this.recoveryTime(source));
        if (target instanceof _ActorModel__WEBPACK_IMPORTED_MODULE_5__["default"])
            r.onApply.push(() => {
                let damage = _GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].rollDice(this.damageSpec);
                if (source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"])
                    this.gameModel.infoText.value = "You did " + damage + " damage";
                target.takeDamage(damage);
            }, this);
        return r;
    }
    test(source, target) {
        if (target instanceof _world_NPCModel__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (!(target.alive.value))
                return false;
            if (engine_util_Point3__WEBPACK_IMPORTED_MODULE_6__["default"].minus(target.getPosition(), source.getPosition()).magnitude() <= this.range)
                return true;
        }
        return false;
    }
    recoveryTime(source) {
        return Math.round(Math.random() * 10);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/InitiativeModel.ts":
/*!****************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/InitiativeModel.ts ***!
  \****************************************************************************/
/*! exports provided: CombatState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatState", function() { return CombatState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitiativeModel; });
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var _world_NPCModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world/NPCModel */ "./src/examples/classic-rpg-interface/model/world/NPCModel.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");



var CombatState;
(function (CombatState) {
    CombatState[CombatState["Green"] = 0] = "Green";
    CombatState[CombatState["Yellow"] = 1] = "Yellow";
    CombatState[CombatState["Red"] = 2] = "Red";
})(CombatState || (CombatState = {}));
class InitiativeModel {
    constructor() {
        this.initiativeOrder = [];
        this.npcsToAct = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__["default"]([]);
    }
    get playerCanAct() {
        return (!this.partyModel.partyDead && this.gameModel.player.canAct && this.npcsToAct.value.length === 0 && this.waitingCharacter.value !== null);
    }
    get playerCanMove() {
        return (!this.partyModel.partyDead && this.gameModel.player.canMove && this.npcsToAct.value.length === 0 && this.waitingCharacter.value !== null);
    }
    get playerCanTurn() {
        return (!this.partyModel.partyDead && this.gameModel.player.canTurn);
    }
    create(gameModel, partyModel, levelModel, data) {
        this.gameModel = gameModel;
        this.partyModel = partyModel;
        partyModel.characters.forEach(c => {
            this.initiativeOrder.push({ number: c.rollInitiative(), actor: c });
        });
        levelModel.npcs.forEach(n => {
            this.initiativeOrder.push({ number: n.rollInitiative(), actor: n });
        });
        this.sortInitiativeOrder();
        this.waitingCharacters = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__["default"](this.getWaitingCharacters());
        this.waitingCharacter = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__["default"](this.getWaitingCharacter());
        this.combatState = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_2__["default"](this.getCombatState());
        this.afterChangeUpdate();
    }
    switchCharacter(character) {
        let characters = [];
        let delayUntil;
        for (let i = 0; i < this.initiativeOrder.length; i++) {
            if (this.initiativeOrder[i].actor === character) {
                delayUntil = this.initiativeOrder[i].number;
                break;
            }
            else if (this.initiativeOrder[i].actor instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                characters.push(this.initiativeOrder[i].actor);
            }
        }
        characters.forEach(c => this.delayActorUntil(c, delayUntil));
        this.afterChangeUpdate();
    }
    moveParty(start, end) {
        if (this.combatState.value === CombatState.Red)
            this.delayPartyUntilLastMember(this.gameModel.party.moveRecoveryTime);
        this.afterChangeUpdate();
    }
    performedAction(actor, result) {
        this.delayActor(actor, result.recoveryTime);
        this.afterChangeUpdate();
    }
    npcDelay(npc, time) {
        this.delayActor(npc, time);
        this.afterChangeUpdate();
    }
    npcDied(npc) {
        this.initiativeOrder = this.initiativeOrder.filter(r => r.actor !== npc);
        this.afterChangeUpdate();
    }
    afterChangeUpdate() {
        if (this.partyModel.partyDead) {
            this.waitingCharacters.value = [];
            this.waitingCharacter.value = null;
        }
        else {
            this.sortInitiativeOrder();
            this.fillNPCsToActArray();
            this.combatState.value = this.getCombatState();
            this.updateWaitingCharacters();
        }
    }
    updateWaitingCharacters() {
        this.waitingCharacters.value = this.getWaitingCharacters();
        if (this.waitingCharacters.value.length > 0)
            this.waitingCharacter.value = this.waitingCharacters.value[0];
        else
            this.waitingCharacter.value = null;
    }
    getWaitingCharacters() {
        let characters = [];
        let charsToDelay = [];
        for (let i = 0; i < this.initiativeOrder.length; i++) {
            if (this.initiativeOrder[i].actor instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                if (this.initiativeOrder[i].actor.healthState.value === _CharacterModel__WEBPACK_IMPORTED_MODULE_0__["HealthState"].Normal)
                    characters.push(this.initiativeOrder[i].actor);
                else
                    charsToDelay.push(this.initiativeOrder[i].actor);
            }
            else
                break;
        }
        charsToDelay.forEach(c => this.delayActor(c, 1));
        this.sortInitiativeOrder();
        this.fillNPCsToActArray();
        return characters;
    }
    getWaitingCharacter() {
        for (let i = 0; i < this.initiativeOrder.length; i++) {
            if (this.initiativeOrder[i].actor instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_0__["default"])
                return this.initiativeOrder[i].actor;
            else
                return null;
        }
    }
    waitingActor() {
        if (this.initiativeOrder.length > 0)
            return this.initiativeOrder[0].actor;
        return null;
    }
    delayPartyUntilLastMember(additionalDelay) {
        let foundCharacters = 0;
        let delayUntil;
        for (let i = 0; i < this.initiativeOrder.length; i++) {
            let actor = this.initiativeOrder[i].actor;
            if (actor instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                foundCharacters++;
                if (foundCharacters === this.partyModel.characters.length) {
                    delayUntil = this.initiativeOrder[i].number;
                    break;
                }
            }
        }
        this.partyModel.characters.forEach(c => this.delayActorUntil(c, delayUntil + additionalDelay));
    }
    getCombatState() {
        let inMelee = false;
        let aliveNPC = false;
        this.gameModel.world.currentLevel.value.npcs.forEach(npc => {
            if ((npc.alive.value) && (npc.hostile)) {
                if (this.gameModel.isWithinMelee(npc.getPosition(), this.gameModel.player.position))
                    inMelee = true;
                aliveNPC = true;
            }
        });
        if (inMelee)
            return CombatState.Red;
        if (aliveNPC)
            return CombatState.Yellow;
        return CombatState.Green;
    }
    fillNPCsToActArray() {
        this.npcsToAct.value = [];
        for (let i = 0; i < this.initiativeOrder.length; i++)
            if (this.initiativeOrder[i].actor instanceof _world_NPCModel__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                let npc = this.initiativeOrder[i].actor;
                this.npcsToAct.value.push(npc);
            }
            else
                break;
        this.npcsToAct.onUpdate.call();
    }
    delayActorUntil(actor, time) {
        for (let i = 0; i < this.initiativeOrder.length; i++) {
            if (this.initiativeOrder[i].actor === actor) {
                this.initiativeOrder.splice(i, 1);
                break;
            }
        }
        if (!actor)
            throw new Error("Delay until actor is null");
        this.initiativeOrder.push({ number: time, actor: actor });
    }
    delayActor(actor, time) {
        let currentPosition = 0;
        for (let i = 0; i < this.initiativeOrder.length; i++) {
            if (this.initiativeOrder[i].actor === actor) {
                currentPosition = this.initiativeOrder[i].number;
                this.initiativeOrder.splice(i, 1);
                break;
            }
        }
        if (!actor)
            throw new Error("Delay  actor is null");
        this.initiativeOrder.push({ number: currentPosition + time, actor: actor });
    }
    sortInitiativeOrder() {
        this.initiativeOrder.sort((a, b) => a.number - b.number);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/LootActionModel.ts":
/*!****************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/LootActionModel.ts ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LootActionModel; });
/* harmony import */ var _ActionResultModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionResultModel */ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts");
/* harmony import */ var _world_NPCModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world/NPCModel */ "./src/examples/classic-rpg-interface/model/world/NPCModel.ts");
/* harmony import */ var _ActionModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionModel */ "./src/examples/classic-rpg-interface/model/action/ActionModel.ts");
/* harmony import */ var _GameModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GameModel */ "./src/examples/classic-rpg-interface/model/GameModel.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");





class LootActionModel extends _ActionModel__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(gameModel) {
        super();
        this.lootDistance = 3;
        this.gameModel = gameModel;
    }
    perform(source, target) {
        let r = new _ActionResultModel__WEBPACK_IMPORTED_MODULE_0__["default"](this.recoveryTime(source));
        if (target instanceof _world_NPCModel__WEBPACK_IMPORTED_MODULE_1__["default"])
            r.onApply.push(() => {
                this.gameModel.party.gainGold(_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].rollDice(target.lootSpec));
                target.looted.value = true;
            }, this);
        return r;
    }
    test(source, target) {
        if (engine_util_Point3__WEBPACK_IMPORTED_MODULE_4__["default"].minus(target.getPosition(), source.getPosition()).magnitude() <= this.lootDistance)
            if ((target instanceof _world_NPCModel__WEBPACK_IMPORTED_MODULE_1__["default"]) && (!target.alive.value))
                return true;
        return false;
    }
    recoveryTime(source) {
        return 0;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/OpenDoorActionModel.ts":
/*!********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/OpenDoorActionModel.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenDoorActionModel; });
/* harmony import */ var _ActionResultModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionResultModel */ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts");
/* harmony import */ var _ActionModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionModel */ "./src/examples/classic-rpg-interface/model/action/ActionModel.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");
/* harmony import */ var _world_DoorModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../world/DoorModel */ "./src/examples/classic-rpg-interface/model/world/DoorModel.ts");




class OpenDoorActionModel extends _ActionModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(gameModel) {
        super();
        this.reach = 1;
        this.gameModel = gameModel;
    }
    perform(source, target) {
        let r = new _ActionResultModel__WEBPACK_IMPORTED_MODULE_0__["default"](this.recoveryTime(source));
        if (target instanceof _world_DoorModel__WEBPACK_IMPORTED_MODULE_3__["default"])
            r.onApply.push(() => {
                this.gameModel.openDoor(target);
            }, this);
        return r;
    }
    test(source, target) {
        if (target instanceof _world_DoorModel__WEBPACK_IMPORTED_MODULE_3__["default"])
            if (!(target.locked))
                if (engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"].minus(target.getPosition(), source.getPosition()).magnitude() <= this.reach)
                    return true;
        return false;
    }
    recoveryTime(source) {
        return 1;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/spells/FireBolt.ts":
/*!****************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/spells/FireBolt.ts ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FireBolt; });
/* harmony import */ var _Spell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Spell */ "./src/examples/classic-rpg-interface/model/Spell.ts");
/* harmony import */ var _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionResultModel */ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts");
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");



class FireBolt extends _Spell__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, icon) {
        super(name, icon, true);
    }
    perform(source, target) {
        if (source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            source.mana--;
        }
        return new _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__["default"](this.recoveryTime(source));
    }
    test(source, target) {
        if (source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            if (source.mana >= 1) {
                if (!(target))
                    return true;
                else {
                    return true;
                }
            }
        }
        return false;
    }
    recoveryTime(source) {
        return 1;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/spells/Fly.ts":
/*!***********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/spells/Fly.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fly; });
/* harmony import */ var _Spell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Spell */ "./src/examples/classic-rpg-interface/model/Spell.ts");
/* harmony import */ var _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionResultModel */ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts");
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Status */ "./src/examples/classic-rpg-interface/model/Status.ts");




class Fly extends _Spell__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, icon, gameModel) {
        super(name, icon, false);
        this.gameModel = gameModel;
    }
    perform(source, target) {
        let result = new _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__["default"](this.recoveryTime(source));
        result.onApply.push((() => {
            if (source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"])
                source.mana -= 8;
            this.gameModel.party.statuses.value.push(new _Status__WEBPACK_IMPORTED_MODULE_3__["default"](_Status__WEBPACK_IMPORTED_MODULE_3__["StatusType"].Flying));
            this.gameModel.party.statuses.onUpdate.call(this.gameModel.party.statuses.value);
        }).bind(this), this);
        return result;
    }
    test(source, target) {
        if ((source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"]) && (source.mana >= 8))
            return true;
        return false;
    }
    recoveryTime(source) {
        return 1;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/spells/LevelEditing.ts":
/*!********************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/spells/LevelEditing.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelEditing; });
/* harmony import */ var _Spell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Spell */ "./src/examples/classic-rpg-interface/model/Spell.ts");
/* harmony import */ var _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionResultModel */ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts");
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Status */ "./src/examples/classic-rpg-interface/model/Status.ts");




class LevelEditing extends _Spell__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, icon, gameModel) {
        super(name, icon, false);
        this.gameModel = gameModel;
    }
    perform(source, target) {
        let result = new _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__["default"](this.recoveryTime(source));
        result.onApply.push((() => {
            this.gameModel.party.statuses.value.push(new _Status__WEBPACK_IMPORTED_MODULE_3__["default"](_Status__WEBPACK_IMPORTED_MODULE_3__["StatusType"].LevelEdit));
            this.gameModel.party.statuses.onUpdate.call(this.gameModel.party.statuses.value);
        }).bind(this), this);
        return result;
    }
    test(source, target) {
        if (source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"])
            return true;
        return false;
    }
    recoveryTime(source) {
        return 1;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/action/spells/TorchLight.ts":
/*!******************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/action/spells/TorchLight.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TorchLight; });
/* harmony import */ var _Spell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Spell */ "./src/examples/classic-rpg-interface/model/Spell.ts");
/* harmony import */ var _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionResultModel */ "./src/examples/classic-rpg-interface/model/action/ActionResultModel.ts");
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Status */ "./src/examples/classic-rpg-interface/model/Status.ts");




class TorchLight extends _Spell__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, icon, gameModel) {
        super(name, icon, false);
        this.gameModel = gameModel;
    }
    perform(source, target) {
        let result = new _ActionResultModel__WEBPACK_IMPORTED_MODULE_1__["default"](this.recoveryTime(source));
        result.onApply.push((() => {
            if (source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"])
                source.mana--;
            this.gameModel.party.statuses.value.push(new _Status__WEBPACK_IMPORTED_MODULE_3__["default"](_Status__WEBPACK_IMPORTED_MODULE_3__["StatusType"].TorchLight));
            this.gameModel.party.statuses.onUpdate.call(this.gameModel.party.statuses.value);
        }).bind(this), this);
        return result;
    }
    test(source, target) {
        if ((source instanceof _CharacterModel__WEBPACK_IMPORTED_MODULE_2__["default"]) && (source.mana >= 1))
            return true;
        return false;
    }
    recoveryTime(source) {
        return 1;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/world/CellModel.ts":
/*!*********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/world/CellModel.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellModel; });
/* harmony import */ var _WallModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WallModel */ "./src/examples/classic-rpg-interface/model/world/WallModel.ts");

class CellModel {
    constructor(data, wallTypes) {
        this.walls = [];
        this.midHeight = 0;
        this.exitOffsetN = 0;
        this.exitOffsetE = 0;
        this.exitOffsetS = 0;
        this.exitOffsetW = 0;
        while (wallTypes.length < 6)
            wallTypes.push(0);
        wallTypes.forEach(type => {
            if (typeof type === "number")
                this.walls.push(new _WallModel__WEBPACK_IMPORTED_MODULE_0__["default"](data.walls[type]));
            else
                this.walls.push(new _WallModel__WEBPACK_IMPORTED_MODULE_0__["default"](data.walls[type.t], type));
        });
        if (this.walls[4].details) {
            this.midHeight = this.walls[4].details.mid || 0;
            this.exitOffsetN = this.walls[4].details.n || 0;
            this.exitOffsetE = this.walls[4].details.e || 0;
            this.exitOffsetS = this.walls[4].details.s || 0;
            this.exitOffsetW = this.walls[4].details.w || 0;
        }
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/world/DoorModel.ts":
/*!*********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/world/DoorModel.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DoorModel; });
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");


class DoorModel {
    constructor(gameData, levelDoorData) {
        this.targetLevel = undefined;
        this.isOpen = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__["default"](false);
        this.doorData = gameData.doors[levelDoorData.type];
        this.position = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_0__["default"](levelDoorData.position.slice(0, 3));
        this.wall = levelDoorData.position[3];
        if (levelDoorData.target) {
            this.targetLevel = levelDoorData.target[0];
            this.targetPosition = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_0__["default"](levelDoorData.target.slice(1, 4));
            let f = levelDoorData.target[4];
            this.targetFacing = f;
        }
        else {
            this.openAngle = levelDoorData.openAngle;
        }
    }
    get filename() { return this.doorData.filename; }
    get normalMap() { return this.doorData.normalMap || null; }
    get locked() { return false; }
    get opens() { return this.targetLevel === undefined; }
    create(levelModel) {
        this.levelModel = levelModel;
        let cell = levelModel.cells[this.position.x][this.position.y][this.position.z];
        let wall = cell.walls[this.wall];
        if (this.opens)
            wall.alphaMap = this.doorData.alphaMap;
        wall.passable = this.isOpen.value;
    }
    getPosition() { return this.position; }
    changeOpenState() {
        this.isOpen.value = !this.isOpen.value;
        let cell = this.levelModel.cells[this.position.x][this.position.y][this.position.z];
        let wall = cell.walls[this.wall];
        wall.passable = this.isOpen.value;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/world/LevelModel.ts":
/*!**********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/world/LevelModel.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelModel; });
/* harmony import */ var _CellModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellModel */ "./src/examples/classic-rpg-interface/model/world/CellModel.ts");
/* harmony import */ var _WorldObjectModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldObjectModel */ "./src/examples/classic-rpg-interface/model/world/WorldObjectModel.ts");
/* harmony import */ var _NPCModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NPCModel */ "./src/examples/classic-rpg-interface/model/world/NPCModel.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");
/* harmony import */ var _DoorModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoorModel */ "./src/examples/classic-rpg-interface/model/world/DoorModel.ts");





class LevelModel {
    get name() { return this.levelType.name; }
    get width() { return this.levelType.width; }
    get height() { return this.levelType.height; }
    get depth() { return this.levelType.depth; }
    get startingPosition() { return new engine_util_Point3__WEBPACK_IMPORTED_MODULE_3__["default"](this.levelType.startingPosition[0], this.levelType.startingPosition[1], this.levelType.startingPosition[2]); }
    get startingFacing() { return this.levelType.startingFacing; }
    get outside() { return this.levelType.outside; }
    get skyboxID() { return this.levelType.skybox; }
    create(gameModel, level) {
        this.levelType = level;
        this.cells = this.createCells(gameModel.data, level);
        this.doors = this.createDoors(gameModel.data, level);
        this.objects = this.createObjects(gameModel.data, level);
        this.npcs = this.createNPCs(gameModel, level);
    }
    save(gameData, level) {
        let newWalls = [];
        for (let y = 0; y < this.height; y++)
            for (let z = 0; z < this.depth; z++)
                for (let x = 0; x < this.width; x++) {
                    this.cells[x][y][z].walls.forEach(w => {
                        if (w.details) {
                            if (w.hidden.value)
                                newWalls.push(0);
                            else {
                                w.details.t = gameData.walls.indexOf(w.wallData.value);
                                newWalls.push(w.details);
                            }
                        }
                        else {
                            if (w.hidden.value)
                                newWalls.push(0);
                            else
                                newWalls.push(gameData.walls.indexOf(w.wallData.value));
                        }
                    });
                }
        level.walls = newWalls;
        let npcs = [];
        this.npcs.forEach(n => {
            let id = gameData.npcs.indexOf(n.npcType);
            npcs.push({ type: id, position: [n.position.value.x, n.position.value.y, n.position.value.z] });
        });
        level.npcs = npcs;
        let objects = [];
        this.objects.forEach(o => {
            let id = gameData.objects.indexOf(o.objectType);
            objects.push({ type: id, position: [o.position.value.x, o.position.value.y, o.position.value.z] });
        });
        level.objects = objects;
    }
    createDoors(data, level) {
        let doors = [];
        for (let i = 0; i < level.doors.length; i++) {
            let door = new _DoorModel__WEBPACK_IMPORTED_MODULE_4__["default"](data, level.doors[i]);
            door.create(this);
            doors.push(door);
        }
        return doors;
    }
    createObjects(data, level) {
        let objects = [];
        for (let i = 0; i < level.objects.length; i++) {
            let obj = new _WorldObjectModel__WEBPACK_IMPORTED_MODULE_1__["default"](data, level.objects[i].type, level.objects[i].position);
            obj.create();
            objects.push(obj);
        }
        return objects;
    }
    createNPCs(gameModel, level) {
        let npcs = [];
        for (let i = 0; i < level.npcs.length; i++) {
            let npc = new _NPCModel__WEBPACK_IMPORTED_MODULE_2__["default"](gameModel, level.npcs[i].type, level.npcs[i].position);
            npc.create();
            npcs.push(npc);
        }
        return npcs;
    }
    createCells(data, level) {
        let rows = [];
        for (let i = 0; i < level.width; i++) {
            let layers = [];
            for (let h = 0; h < level.height; h++) {
                let col = [];
                for (let j = 0; j < level.depth; j++) {
                    let start = (h * level.width * level.depth * 6) + (j * level.width * 6) + i * 6;
                    let wallSubset = level.walls.slice(start, start + 6);
                    col.push(new _CellModel__WEBPACK_IMPORTED_MODULE_0__["default"](data, wallSubset));
                }
                layers.push(col);
            }
            rows.push(layers);
        }
        return rows;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/world/NPCModel.ts":
/*!********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/world/NPCModel.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NPCModel; });
/* harmony import */ var _ActorModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActorModel */ "./src/examples/classic-rpg-interface/model/ActorModel.ts");
/* harmony import */ var _GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameModel */ "./src/examples/classic-rpg-interface/model/GameModel.ts");
/* harmony import */ var _action_AttackActionModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/AttackActionModel */ "./src/examples/classic-rpg-interface/model/action/AttackActionModel.ts");
/* harmony import */ var _CharacterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CharacterModel */ "./src/examples/classic-rpg-interface/model/CharacterModel.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");






class NPCModel extends _ActorModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(gameModel, type, position) {
        super();
        this.alive = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__["default"](true);
        this.performingAction = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__["default"](null);
        this.delaying = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__["default"](false);
        this.looted = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__["default"](false);
        this.gameModel = gameModel;
        this.npcType = gameModel.data.npcs[type];
        this.position = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_util_Point3__WEBPACK_IMPORTED_MODULE_5__["default"](position));
    }
    get name() { return this.npcType.name; }
    get filename() { return this.npcType.filename; }
    get hpSpec() { return this.npcType.hp; }
    get lootSpec() { return this.npcType.loot; }
    get hostile() { return this.npcType.hostile; }
    get deadTexture() { return this.npcType.deadTexture; }
    getPosition() { return this.position.value; }
    create() {
        this.maxHitpoints = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__["default"](_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].rollDice(this.hpSpec));
        this.hitpoints = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_4__["default"](this.maxHitpoints.value);
        this.actions = [];
        this.npcType.actions.forEach(a => {
            if (a.type === "attack")
                this.actions.push(new _action_AttackActionModel__WEBPACK_IMPORTED_MODULE_2__["default"](this.gameModel, a.name, a.damage, a.range));
        });
    }
    checkHealthState() {
        if (this.hitpoints.value <= 0) {
            this.alive.value = false;
            this.gameModel.initiative.npcDied(this);
        }
    }
    act() {
        let found = false;
        let target;
        while (!found) {
            let r = Math.round(Math.random() * (this.gameModel.party.characters.length - 1));
            target = this.gameModel.party.characters[r];
            if (target.healthState.value !== _CharacterModel__WEBPACK_IMPORTED_MODULE_3__["HealthState"].Dead)
                found = true;
        }
        let availableActions = this.actions.filter(a => a.test(this, target));
        if (availableActions.length > 0) {
            let result = this.gameModel.npcPerformAction(this, target, availableActions[0]);
            this.performingAction.value = result;
        }
        else
            this.delaying.value = true;
    }
    applyActionResult(actionResult) {
        if (this.performingAction.value) {
            this.gameModel.applyActionResult(actionResult);
            this.performingAction.value = null;
        }
        else {
            this.delaying.value = false;
            this.gameModel.npcDelay(this, 1);
        }
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/world/WallModel.ts":
/*!*********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/world/WallModel.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WallModel; });
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");
/* harmony import */ var examples_classic_rpg_interface_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! examples/classic-rpg-interface/data */ "./src/examples/classic-rpg-interface/data.ts");


class WallModel {
    get filename() { return this.wallData.value.filename; }
    get passable() { return this._passable || this.hidden.value; }
    set passable(val) { this._passable = val; }
    get create() { return this.wallData.value.filename !== examples_classic_rpg_interface_data__WEBPACK_IMPORTED_MODULE_1__["TextureEmpty"]; }
    get normalMap() { return (this.wallData.value.normalMap || undefined); }
    getPosition() { return null; }
    constructor(wallData, details) {
        this.wallData = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__["default"](wallData);
        this.hidden = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_0__["default"](!(this.create));
        this.details = details;
        this._passable = wallData.passable;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/world/WorldModel.ts":
/*!**********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/world/WorldModel.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldModel; });
/* harmony import */ var _LevelModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LevelModel */ "./src/examples/classic-rpg-interface/model/world/LevelModel.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");


class WorldModel {
    get currentLevelID() { return this.levels.indexOf(this.currentLevel.value); }
    create(gameModel) {
        this.levels = [];
        gameModel.data.levels.forEach(l => {
            let level = new _LevelModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
            this.levels.push(level);
            level.create(gameModel, l);
        });
        this.currentLevel = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__["default"](this.levels[gameModel.data.player.level]);
    }
    save(data) {
        this.levels.forEach(l => {
            l.save(data, l.levelType);
        });
    }
    switchToLevel(level) {
        this.currentLevel.value = level;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/model/world/WorldObjectModel.ts":
/*!****************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/model/world/WorldObjectModel.ts ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldObjectModel; });
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");
/* harmony import */ var engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/ObserverVariable */ "./src/engine/util/ObserverVariable.ts");


class WorldObjectModel {
    get name() { return this.objectType.name; }
    get filename() { return this.objectType.filename; }
    constructor(data, type, position) {
        this.objectType = data.objects[type];
        this.position = new engine_util_ObserverVariable__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_util_Point3__WEBPACK_IMPORTED_MODULE_0__["default"](position));
    }
    create() {
    }
    getPosition() { return this.position.value; }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/Door.ts":
/*!**************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/Door.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Door; });
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/ThreeMesh */ "./src/engine/gameobject/ThreeMesh.ts");
/* harmony import */ var engine_gameobject_anim_WrappingValueTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/gameobject/anim/WrappingValueTween */ "./src/engine/gameobject/anim/WrappingValueTween.ts");
/* harmony import */ var _GeomLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GeomLoader */ "./src/examples/classic-rpg-interface/sceneview/GeomLoader.ts");
/* harmony import */ var _MaterialLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MaterialLoader */ "./src/examples/classic-rpg-interface/sceneview/MaterialLoader.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/gameobject/anim/Wait */ "./src/engine/gameobject/anim/Wait.ts");







class Door extends engine_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(model) {
        super(null);
        this._turnAnims = [];
        this.model = model;
    }
    load({ loader: loader }) {
        this.geom = this.addAsset(_GeomLoader__WEBPACK_IMPORTED_MODULE_3__["default"].getSharedPlaneGeom(loader));
        this.material = this.addAsset(_MaterialLoader__WEBPACK_IMPORTED_MODULE_4__["default"].getSharedMaterialAsset(loader, this.model.filename, this.model.normalMap, null, new engine_util_Point__WEBPACK_IMPORTED_MODULE_5__["default"](1, 1), true, true));
        return ((this.material !== null) && (this.geom !== null));
    }
    create() {
        let mesh = new engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__["default"](this.geom.asset, this.material.asset);
        mesh.mesh.position.x = this.model.position.x;
        mesh.mesh.position.y = this.model.position.y;
        mesh.mesh.position.z = this.model.position.z;
        if (this.model.wall === 0) {
            mesh.mesh.position.z -= 0.49;
        }
        if (this.model.wall === 1) {
            mesh.mesh.position.x += 0.49;
            mesh.mesh.rotation.y -= Math.PI / 2;
        }
        if (this.model.wall === 2) {
            mesh.mesh.position.z += 0.49;
            mesh.mesh.rotation.y += Math.PI;
        }
        if (this.model.wall === 3) {
            mesh.mesh.position.x -= 0.49;
            mesh.mesh.rotation.y += Math.PI / 2;
        }
        this.mesh = this.addChild(mesh);
        this.model.isOpen.onUpdate.push(this.changeOpenState.bind(this), this);
        this.mesh.mesh.userData = { gameObject: this };
    }
    changeOpenState(open) {
        if (this.model.wall === 0)
            this.setRotation(open ? this.model.openAngle : 0, 500);
        if (this.model.wall === 1)
            this.setRotation(open ? this.model.openAngle - Math.PI / 2 : -Math.PI / 2, 500);
        if (this.model.wall === 2)
            this.setRotation(open ? this.model.openAngle + Math.PI : Math.PI, 500);
        if (this.model.wall === 3)
            this.setRotation(open ? this.model.openAngle + Math.PI / 2 : Math.PI / 2, 500);
    }
    setRotation(y, time) {
        this._turnAnims.forEach(a => a.requestRemoval());
        this._turnAnims = [];
        let w = this.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_6__["default"](time));
        w.onStep.push(this.rotateAboutPoint.bind(this, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), (this.mesh.mesh.rotation.y - y) / time, false), this);
        this._turnAnims.push(w);
    }
    rotateAboutPoint(point, axis, theta, pointIsWorld) {
        if (pointIsWorld)
            this.mesh.mesh.parent.localToWorld(this.mesh.mesh.position);
        this.mesh.mesh.position.sub(point);
        this.mesh.mesh.position.applyAxisAngle(axis, theta);
        this.mesh.mesh.position.add(point);
        if (pointIsWorld) {
            this.mesh.mesh.parent.worldToLocal(this.mesh.mesh.position);
        }
        this.mesh.mesh.rotateOnAxis(axis, theta);
        this.requestDraw();
    }
    addTurnAnim(object, varName, target, time) {
        this._turnAnims.push(this.addChild(new engine_gameobject_anim_WrappingValueTween__WEBPACK_IMPORTED_MODULE_2__["default"](object, varName, target, time, Math.PI * 2)));
        let a = this._turnAnims[this._turnAnims.length - 1];
        a.onComplete.push((() => {
            this._turnAnims.splice(this._turnAnims.indexOf(a), 1);
        }).bind(this), this);
        return a;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/GeomLoader.ts":
/*!********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/GeomLoader.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeomLoader; });
class GeomLoader {
    static getSharedPlaneGeom(loader) {
        let geomAsset = loader.getSharedAsset("#planeGeom");
        if (!(geomAsset.loaded)) {
            geomAsset.set(new THREE.PlaneBufferGeometry(1, 1));
            geomAsset.loaded = true;
        }
        return geomAsset;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/MaterialLoader.ts":
/*!************************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/MaterialLoader.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaterialLoader; });
class MaterialLoader {
    static getSharedMaterialAsset(loader, filename, normalMap, alphaMap, repeat, transparent, twosides) {
        normalMap = normalMap || null;
        alphaMap = alphaMap || null;
        let name = filename + "#mat" + (normalMap !== null ? "#normal=" + normalMap : "") + (alphaMap !== null ? "#alpha=" + alphaMap : "");
        let materialAsset = loader.getSharedAsset(name);
        if (!(materialAsset.loaded)) {
            let material = MaterialLoader.loadMaterial(loader, filename, normalMap, alphaMap, repeat, transparent, twosides);
            if (!(material))
                return null;
            materialAsset.set(material);
            materialAsset.loaded = true;
        }
        return materialAsset;
    }
    static getTextureAsset(loader, filename, repeat) {
        let textureAsset = loader.getSharedAsset(filename);
        if (!(textureAsset.asset)) {
            let texture = new THREE.TextureLoader().load(filename, ((texture) => {
                if ((repeat.x !== 1) || (repeat.y !== 1)) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.offset.set(0, 0);
                    texture.repeat.set(repeat.x, repeat.y);
                }
                textureAsset.loaded = true;
            }).bind(this));
            textureAsset.set(texture);
        }
        return textureAsset;
    }
    static loadMaterial(loader, filename, normalMap, alphaMap, repeat, transparent, twosides) {
        let normalMapAsset;
        let alphaMapAsset;
        let mapAsset = MaterialLoader.getTextureAsset(loader, filename, repeat);
        if (normalMap !== null)
            normalMapAsset = MaterialLoader.getTextureAsset(loader, normalMap, repeat);
        if (alphaMap !== null)
            alphaMapAsset = MaterialLoader.getTextureAsset(loader, alphaMap, repeat);
        if (!(mapAsset.loaded))
            return null;
        if ((normalMap !== null) && (!normalMapAsset.loaded))
            return null;
        if ((alphaMap !== null) && (!alphaMapAsset.loaded))
            return null;
        let material;
        transparent = (alphaMap !== null) || transparent;
        if (normalMap)
            material = new THREE.MeshStandardMaterial({ map: mapAsset.asset,
                normalMap: normalMapAsset.asset,
                normalScale: new THREE.Vector2(1, 1),
                roughness: 1,
                transparent: transparent });
        else
            material = new THREE.MeshLambertMaterial({ map: mapAsset.asset, transparent: transparent });
        if (alphaMap)
            material.alphaMap = alphaMapAsset.asset;
        if (twosides)
            material.side = THREE.DoubleSide;
        return material;
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/NPC.ts":
/*!*************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/NPC.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NPC; });
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/ThreeMesh */ "./src/engine/gameobject/ThreeMesh.ts");
/* harmony import */ var engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/gameobject/anim/Wait */ "./src/engine/gameobject/anim/Wait.ts");



class NPC extends engine_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(model) {
        super(null);
        this.centered = true;
        this.offsetSet = false;
        this.model = model;
    }
    load({ loader: loader }) {
        let texture = loader.getSharedAsset(this.model.filename + "#tex");
        if (!(texture.asset))
            texture.set(new THREE.TextureLoader().load(this.model.filename, (() => { texture.loaded = true; })));
        this.addAsset(texture);
        let deadTexture = loader.getSharedAsset(this.model.deadTexture + "#tex");
        if (!(deadTexture.asset))
            deadTexture.set(new THREE.TextureLoader().load(this.model.deadTexture, (() => { deadTexture.loaded = true; })));
        this.addAsset(deadTexture);
        return true;
    }
    scaleMesh(texture, scale) {
        let width = texture.image.naturalWidth;
        let height = texture.image.naturalHeight;
        let aspect = height / width;
        let x;
        let y;
        if (width > height) {
            x = scale;
            y = x * aspect;
        }
        else {
            y = scale;
            x = y / aspect;
        }
        let geom = new THREE.PlaneBufferGeometry(x, y, 0);
        let material = new THREE.MeshLambertMaterial({ map: texture, fog: true, transparent: true, });
        let mesh = new THREE.Mesh(geom, material);
        return mesh;
    }
    create() {
        this.mesh = this.addChild(new engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__["default"](this.scaleMesh(this.getAsset(this.model.filename + "#tex"), this.model.npcType.scale)));
        this.mesh.mesh.userData = { gameObject: this };
        this.model.alive.onUpdate.push(this.updateAlive.bind(this), this);
        this.updateAlive(this.model.alive.value);
        this.model.position.onUpdate.push(this.updatePosition.bind(this), this);
        this.updatePosition(this.model.position.value);
        this.model.performingAction.onUpdate.push(this.updatePerformingAction.bind(this), this);
        this.model.delaying.onUpdate.push(this.updateDelaying.bind(this), this);
        this.model.hitpoints.onUpdate.push(this.hpChanged.bind(this), this);
        this.model.looted.onUpdate.push(this.lootedChanged.bind(this), this);
        this.oldHP = this.model.hitpoints.value;
    }
    lootedChanged(val) {
        if (val) {
            this.mesh.mesh.visible = false;
            this.requestDraw();
        }
    }
    hpChanged(val) {
        if (val < this.oldHP) {
            this.mesh.mesh.material.color.setHex(0xff6666);
            this.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_2__["default"](100)).onComplete.push(() => {
                this.mesh.mesh.material.color.setHex(0xffffff);
                this.requestDraw();
            }, this);
            this.requestDraw();
        }
        this.oldHP = val;
    }
    updatePerformingAction(val) {
        if (val) {
            this.mesh.mesh.material.color.setHex(0xffff00);
            this.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_2__["default"](300)).onComplete.push(this.model.applyActionResult.bind(this.model, val), this);
        }
        else
            this.mesh.mesh.material.color.setHex(0xffffff);
        this.requestDraw();
    }
    updateDelaying(val) {
        if (val) {
            this.mesh.mesh.material.color.setHex(0xffff00);
            this.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_2__["default"](300)).onComplete.push(this.model.applyActionResult.bind(this.model), this);
        }
        else
            this.mesh.mesh.material.color.setHex(0xffffff);
        this.requestDraw();
    }
    updateAlive(val) {
        if (!(val)) {
            this.mesh.mesh = this.scaleMesh(this.getAsset(this.model.deadTexture + "#tex"), 0.2);
            this.mesh.mesh.userData = { gameObject: this };
            this.updatePosition(this.model.position.value);
        }
        this.requestDraw();
    }
    updatePosition(val) {
        this.mesh.mesh.position.x = val.x;
        this.mesh.mesh.position.y = val.y - (1 - this.model.npcType.scale) / 2;
        this.mesh.mesh.position.z = val.z;
        this.requestDraw();
    }
    update() {
        if (this.camera) {
            this.mesh.mesh.lookAt(this.camera.position.x, this.mesh.mesh.position.y, this.camera.position.z);
            if (this.mesh.mesh.position.distanceTo(this.camera.position) < 0.5) {
                if (!(this.offsetSet) && (this.centered)) {
                    this.updatePosition(this.model.position.value);
                    let offset = 0.1;
                    let direction = this.camera.getWorldDirection();
                    this.mesh.mesh.position.add(direction.multiplyScalar(0.33));
                    this.mesh.mesh.position.add(direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2).multiplyScalar(3 * offset));
                }
                this.offsetSet = true;
            }
            else if (this.mesh.mesh.position.distanceTo(this.camera.position) >= 1) {
                if (this.offsetSet) {
                    this.updatePosition(this.model.position.value);
                    this.offsetSet = false;
                }
            }
        }
    }
    destroy() {
        super.destroy();
        this.model.alive.onUpdate.unregister(this);
        this.model.position.onUpdate.unregister(this);
        this.model.performingAction.onUpdate.unregister(this);
        this.model.delaying.onUpdate.unregister(this);
        this.model.hitpoints.onUpdate.unregister(this);
        this.model.looted.onUpdate.unregister(this);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/Player.ts":
/*!****************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/Player.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var engine_gameobject_anim_WrappingValueTween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/anim/WrappingValueTween */ "./src/engine/gameobject/anim/WrappingValueTween.ts");
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/gameobject/anim/ValueTween */ "./src/engine/gameobject/anim/ValueTween.ts");
/* harmony import */ var engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/anim/Wait */ "./src/engine/gameobject/anim/Wait.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");
/* harmony import */ var _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/PlayerModel */ "./src/examples/classic-rpg-interface/model/PlayerModel.ts");






class Player extends engine_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(threeBuffer, gameModel) {
        super(null);
        this._moveAnims = [];
        this._turnAnims = [];
        this.threeBuffer = threeBuffer;
        this.player = gameModel.player;
        this.gameModel = gameModel;
    }
    get animating() { return (this._turnAnims.length > 0) || (this._moveAnims.length > 0); }
    create() {
        this.setCameraPosition(this.player.position.x, this.player.position.y, this.player.position.z, this.player.yOffset, false);
        this.gameModel.listener.onTurn.push(this.updateRotation.bind(this), this);
        this.player.rotation.onUpdate.push(((val) => {
            this.threeBuffer.camera.rotation.x = val.x;
            this.threeBuffer.camera.rotation.y = val.y;
            this.threeBuffer.camera.rotation.z = val.z;
            this.threeBuffer.requestDraw();
        }).bind(this), this);
    }
    toggleLight(show) {
        if (show) {
            if (!this.playerLight)
                this.playerLight = new THREE.PointLight(0xffffff, 1, 5.5, 1);
            this.threeBuffer.camera.add(this.playerLight);
        }
        else {
            if (this.playerLight)
                this.threeBuffer.camera.remove(this.playerLight);
        }
    }
    updateAnimating() {
        this.player.animating = this.animating;
    }
    updateRotation(animate) {
        if (animate === undefined)
            animate = true;
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].North)
            this.setCameraRotation(0, 0, 0, animate);
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].NorthEast)
            this.setCameraRotation(0, -Math.PI / 4, 0, animate);
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].East)
            this.setCameraRotation(0, -Math.PI / 2, 0, animate);
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].SouthEast)
            this.setCameraRotation(0, -3 * (Math.PI / 4), 0, animate);
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].South)
            this.setCameraRotation(0, Math.PI, 0, animate);
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].SouthWest)
            this.setCameraRotation(0, 3 * (Math.PI / 4), 0, animate);
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].West)
            this.setCameraRotation(0, Math.PI / 2, 0, animate);
        if (this.player.facing === _model_PlayerModel__WEBPACK_IMPORTED_MODULE_5__["Facing"].NorthWest)
            this.setCameraRotation(0, Math.PI / 4, 0, animate);
    }
    setCameraPosition(x, y, z, yOffset, animate) {
        if (animate === undefined)
            animate = true;
        this._moveAnims.forEach(a => a.requestRemoval());
        this._moveAnims = [];
        if (animate) {
            this.player.canMove = false;
            this.addMoveAnim(this.threeBuffer.camera.position, "x", x, 750);
            this.addMoveAnim(this.threeBuffer.camera.position, "y", y + yOffset, 750);
            this.addMoveAnim(this.threeBuffer.camera.position, "z", z, 750);
            this.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_3__["default"](400)).onComplete.push(() => this.player.canMove = true, this);
        }
        else {
            this.threeBuffer.camera.position.x = x;
            this.threeBuffer.camera.position.y = y + yOffset;
            this.threeBuffer.camera.position.z = z;
        }
        this.updateAnimating();
    }
    addMoveAnim(object, varName, target, time) {
        this._moveAnims.push(this.addChild(new engine_gameobject_anim_ValueTween__WEBPACK_IMPORTED_MODULE_2__["default"](object, varName, target, time)));
        let a = this._moveAnims[this._moveAnims.length - 1];
        a.onComplete.push((() => {
            this._moveAnims.splice(this._moveAnims.indexOf(a), 1);
            this.updateAnimating();
        }).bind(this), this);
    }
    setCameraRotation(x, y, z, animate, time) {
        if (animate === undefined)
            animate = true;
        if (time === undefined)
            time = 300;
        this._turnAnims.forEach(a => a.requestRemoval());
        this._turnAnims = [];
        if (animate) {
            this.player.canTurn = false;
            this.addTurnAnim(this.player.rotation.value, "x", x, time);
            this.addTurnAnim(this.player.rotation.value, "y", y, time);
            this.addTurnAnim(this.player.rotation.value, "z", z, time);
            this.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_3__["default"](time / 2)).onComplete.push(() => this.player.canTurn = true, this);
        }
        else {
            this.player.rotation.value = new engine_util_Point3__WEBPACK_IMPORTED_MODULE_4__["default"](x, y, z);
        }
        this.updateAnimating();
    }
    addTurnAnim(object, varName, target, time) {
        this._turnAnims.push(this.addChild(new engine_gameobject_anim_WrappingValueTween__WEBPACK_IMPORTED_MODULE_0__["default"](object, varName, target, time, Math.PI * 2)));
        let a = this._turnAnims[this._turnAnims.length - 1];
        a.onComplete.push((() => {
            this._turnAnims.splice(this._turnAnims.indexOf(a), 1);
            this.updateAnimating();
        }).bind(this), this);
        a.onStep.push((() => this.player.rotation.onUpdate.call(this.player.rotation.value)).bind(this), this);
        return a;
    }
    destroy() {
        super.destroy();
        this._moveAnims.forEach(a => a.requestRemoval());
        this._turnAnims.forEach(a => a.requestRemoval());
        this.player.rotation.onUpdate.unregister(this);
        this.gameModel.listener.onTurn.unregister(this);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/Scene.ts":
/*!***************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/Scene.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var engine_gameobject_ThreeBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/ThreeBuffer */ "./src/engine/gameobject/ThreeBuffer.ts");
/* harmony import */ var _WorldCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldCell */ "./src/examples/classic-rpg-interface/sceneview/WorldCell.ts");
/* harmony import */ var _WorldObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldObject */ "./src/examples/classic-rpg-interface/sceneview/WorldObject.ts");
/* harmony import */ var _NPC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NPC */ "./src/examples/classic-rpg-interface/sceneview/NPC.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/examples/classic-rpg-interface/sceneview/Player.ts");
/* harmony import */ var _Skybox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Skybox */ "./src/examples/classic-rpg-interface/sceneview/Skybox.ts");
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Door */ "./src/examples/classic-rpg-interface/sceneview/Door.ts");







class Scene extends engine_gameobject_ThreeBuffer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, gameModel) {
        super(position, bounds);
        this.gameModel = gameModel;
    }
    create() {
        super.create();
        this.gameModel.listener.onMove.push(this._updatePosition.bind(this), this);
        this.gameModel.initiative.npcsToAct.onUpdate.push(this._runNPCs.bind(this), this);
        this.createLevel();
    }
    createLevel() {
        this.scene.background = new THREE.Color(0x0000ff);
        if (this.gameModel.world.currentLevel.value.outside) {
            let fogColor = new THREE.Color(0xffffff);
            let light = new THREE.AmbientLight(0xffffff, 1);
            this.scene.add(light);
        }
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.05));
        this.cells = this._getWorldCells();
        this.cells.forEach(c => this.addChild(c));
        this.doors = this._getDoors();
        this.doors.forEach(d => this.addChild(d));
        this.objects = this._getWorldObjects();
        this.objects.forEach(o => this.addChild(o));
        this.npcs = this._getNPCs();
        this.npcs.forEach(n => this.addChild(n));
        this.npcs.forEach(n => n.camera = this.camera);
        if (this.gameModel.world.currentLevel.value.skyboxID !== undefined) {
            let skyboxData = this.gameModel.data.skyboxes[this.gameModel.world.currentLevel.value.skyboxID];
            this.skybox = this.addChild(new _Skybox__WEBPACK_IMPORTED_MODULE_5__["default"](skyboxData));
        }
        this.player = this.addChild(new _Player__WEBPACK_IMPORTED_MODULE_4__["default"](this, this.gameModel));
        if (!(this.gameModel.world.currentLevel.value.outside))
            this.player.toggleLight(true);
        this._runNPCs();
        this.requestDraw();
    }
    _updatePosition(animate) {
        if (animate === undefined)
            animate = true;
        this.player.setCameraPosition(this.gameModel.player.position.x, this.gameModel.player.position.y, this.gameModel.player.position.z, this.gameModel.player.yOffset, animate);
    }
    _getWorldCells() {
        let levelModel = this.gameModel.world.currentLevel.value;
        let cells = [];
        levelModel.cells.forEach((row, x) => {
            row.forEach((layer, y) => {
                layer.forEach((col, z) => cells.push(new _WorldCell__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, z, col)));
            });
        });
        return cells;
    }
    _getWorldObjects() {
        let levelModel = this.gameModel.world.currentLevel.value;
        let objects = [];
        levelModel.objects.forEach((o, x) => {
            objects.push(new _WorldObject__WEBPACK_IMPORTED_MODULE_2__["default"](o));
        });
        return objects;
    }
    _getDoors() {
        let levelModel = this.gameModel.world.currentLevel.value;
        let doors = [];
        levelModel.doors.forEach((d, x) => {
            doors.push(new _Door__WEBPACK_IMPORTED_MODULE_6__["default"](d));
        });
        return doors;
    }
    _getNPCs() {
        let levelModel = this.gameModel.world.currentLevel.value;
        let npcs = [];
        levelModel.npcs.forEach((npc, x) => {
            npcs.push(new _NPC__WEBPACK_IMPORTED_MODULE_3__["default"](npc));
        });
        return npcs;
    }
    _runNPCs() {
        let toAct = [];
        this.gameModel.initiative.npcsToAct.value.forEach(npc => toAct.push(npc));
        toAct.forEach((npc) => npc.act());
    }
    destroy() {
        this.gameModel.listener.onMove.unregister(this);
        this.gameModel.listener.onTurn.unregister(this);
        this.gameModel.initiative.npcsToAct.onUpdate.unregister(this);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/Skybox.ts":
/*!****************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/Skybox.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skybox; });
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/ThreeMesh */ "./src/engine/gameobject/ThreeMesh.ts");
/* harmony import */ var engine_Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/Asset */ "./src/engine/Asset.ts");



class Skybox extends engine_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(skyboxData) {
        super(null);
        this._loadedTextures = 0;
        this.skyboxData = skyboxData;
    }
    load({ loader: loader }) {
        let a = new engine_Asset__WEBPACK_IMPORTED_MODULE_2__["default"]("#textureArray", null, false);
        let xPos = new THREE.TextureLoader().load(this.skyboxData.xPos, this.checkTextureLoaded.bind(this, a));
        let xNeg = new THREE.TextureLoader().load(this.skyboxData.xNeg, this.checkTextureLoaded.bind(this, a));
        let yPos = new THREE.TextureLoader().load(this.skyboxData.yPos, this.checkTextureLoaded.bind(this, a));
        let yNeg = new THREE.TextureLoader().load(this.skyboxData.yNeg, this.checkTextureLoaded.bind(this, a));
        let zPos = new THREE.TextureLoader().load(this.skyboxData.zPos, this.checkTextureLoaded.bind(this, a));
        let zNeg = new THREE.TextureLoader().load(this.skyboxData.zNeg, this.checkTextureLoaded.bind(this, a));
        a.set([xPos, xNeg, yPos, yNeg, zPos, zNeg]);
        this.addAsset(a);
        this.loader = loader;
        this.addGeomAsset(loader);
        return true;
    }
    addGeomAsset(loader) {
        let geomAsset = loader.getSharedAsset("#skyboxGeom");
        if (!(geomAsset.loaded)) {
            geomAsset.set(new THREE.CubeGeometry(1000, 1000, 1000, 1, 1, 1));
            geomAsset.loaded = true;
        }
        this.addAsset(geomAsset);
        return true;
    }
    checkTextureLoaded(a) {
        this._loadedTextures++;
        if (this._loadedTextures === 6)
            a.loaded = true;
    }
    create() {
        let textures = this.getAsset("#textureArray");
        var materialArray = [];
        materialArray.push(new THREE.MeshBasicMaterial({ map: textures[0], fog: false }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: textures[1], fog: false }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: textures[2], fog: false }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: textures[3], fog: false }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: textures[4], fog: false }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: textures[5], fog: false }));
        for (var i = 0; i < 6; i++)
            materialArray[i].side = THREE.BackSide;
        var skyboxGeom = this.loader.getSharedAsset("#skyboxGeom").asset;
        var skybox = new THREE.Mesh(skyboxGeom, materialArray);
        this.addChild(new engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__["default"](skybox));
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/Wall.ts":
/*!**************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/Wall.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wall; });
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/ThreeMesh */ "./src/engine/gameobject/ThreeMesh.ts");
/* harmony import */ var engine_Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/Asset */ "./src/engine/Asset.ts");
/* harmony import */ var engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/anim/Wait */ "./src/engine/gameobject/anim/Wait.ts");
/* harmony import */ var _GeomLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GeomLoader */ "./src/examples/classic-rpg-interface/sceneview/GeomLoader.ts");
/* harmony import */ var _MaterialLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MaterialLoader */ "./src/examples/classic-rpg-interface/sceneview/MaterialLoader.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");







class Wall extends engine_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wallType, position, rotation) {
        super(null);
        this.model = wallType;
        this._position = position;
        this._rotation = rotation;
    }
    load({ loader: loader }) {
        this.loader = loader;
        if (this.model.details)
            this.geom = this.addAsset(this.createSlopedWallGeom(this.model));
        else
            this.geom = this.addAsset(_GeomLoader__WEBPACK_IMPORTED_MODULE_4__["default"].getSharedPlaneGeom(loader));
        this.material = this.addAsset(_MaterialLoader__WEBPACK_IMPORTED_MODULE_5__["default"].getSharedMaterialAsset(loader, this.model.filename, this.model.normalMap, this.model.alphaMap, new engine_util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](this.model.wallData.value.repeat[0], this.model.wallData.value.repeat[1]), this.model.wallData.value.transparent, false));
        return ((this.material !== null) && (this.geom !== null));
    }
    create() {
        this.mesh = this.addChild(this.createMesh());
        this.mesh.mesh.userData = { gameObject: this };
        this.model.hidden.onUpdate.push(this.updateWall.bind(this), this);
        this.model.wallData.onUpdate.push(this.changeWallType.bind(this), this);
        this.updateWall();
    }
    updateWall() {
        this.mesh.mesh.visible = !this.model.hidden.value;
        this.requestDraw();
    }
    changeWallType() {
        let matAsset = this.addAsset(_MaterialLoader__WEBPACK_IMPORTED_MODULE_5__["default"].getSharedMaterialAsset(this.loader, this.model.filename, this.model.normalMap, this.model.alphaMap, new engine_util_Point__WEBPACK_IMPORTED_MODULE_6__["default"](this.model.wallData.value.repeat[0], this.model.wallData.value.repeat[1]), this.model.wallData.value.transparent, false));
        if ((matAsset) && (matAsset.loaded)) {
            this.material = matAsset;
            if (!(this.mesh))
                this.mesh = this.addChild(this.createMesh());
            else
                this.mesh.mesh.material = this.material.asset;
            this.requestDraw();
        }
        else
            this.addChild(new engine_gameobject_anim_Wait__WEBPACK_IMPORTED_MODULE_3__["default"](100)).onComplete.push((() => this.changeWallType()).bind(this), this);
    }
    createMesh() {
        let wall = new engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__["default"](this.geom.asset, this.material.asset);
        wall.mesh.position.x = this._position.x;
        wall.mesh.position.y = this._position.y;
        wall.mesh.position.z = this._position.z;
        wall.mesh.rotation.x = this._rotation.x;
        wall.mesh.rotation.y = this._rotation.y;
        wall.mesh.rotation.z = this._rotation.z;
        return wall;
    }
    createSlopedWallGeom(wallModel) {
        var geom = new THREE.Geometry();
        geom.vertices.push(new THREE.Vector3(-0.5, 0.5, wallModel.details.nw));
        geom.vertices.push(new THREE.Vector3(0.5, 0.5, wallModel.details.ne));
        geom.vertices.push(new THREE.Vector3(0.5, -0.5, wallModel.details.se));
        geom.vertices.push(new THREE.Vector3(-0.5, -0.5, wallModel.details.sw));
        geom.vertices.push(new THREE.Vector3(0, 0, wallModel.details.mid));
        geom.faces.push(new THREE.Face3(0, 4, 1));
        geom.faces.push(new THREE.Face3(2, 1, 4));
        geom.faces.push(new THREE.Face3(2, 4, 3));
        geom.faces.push(new THREE.Face3(3, 4, 0));
        let uv = geom.faceVertexUvs[0];
        uv.push([], [], [], []);
        uv[0][0] = new THREE.Vector2(0, 0);
        uv[0][1] = new THREE.Vector2(0.5, 0.5);
        uv[0][2] = new THREE.Vector2(1, 0);
        uv[1][0] = new THREE.Vector2(1, 1);
        uv[1][1] = new THREE.Vector2(1, 0);
        uv[1][2] = new THREE.Vector2(0.5, 0.5);
        uv[2][0] = new THREE.Vector2(1, 1);
        uv[2][1] = new THREE.Vector2(0.5, 0.5);
        uv[2][2] = new THREE.Vector2(0, 1);
        uv[3][0] = new THREE.Vector2(0, 1);
        uv[3][1] = new THREE.Vector2(0.5, 0.5);
        uv[3][2] = new THREE.Vector2(0, 0);
        geom.computeFaceNormals();
        return new engine_Asset__WEBPACK_IMPORTED_MODULE_2__["default"]("#slopedGeom", geom, true);
    }
    destroy() {
        this.model.hidden.onUpdate.unregister(this);
        this.model.wallData.onUpdate.unregister(this);
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/WorldCell.ts":
/*!*******************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/WorldCell.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldCell; });
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wall */ "./src/examples/classic-rpg-interface/sceneview/Wall.ts");
/* harmony import */ var engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Point3 */ "./src/engine/util/Point3.ts");



class WorldCell extends engine_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, z, model) {
        super(null);
        this.x = x;
        this.y = y;
        this.z = z;
        this.model = model;
    }
    create() {
        this.group = new THREE.Group();
        this.group.position.set(new THREE.Vector3(this.x, this.y, this.z));
        this.createWalls();
    }
    interfaces(interfaces) {
        return interfaces;
    }
    createWalls() {
        this.addChild(new _Wall__WEBPACK_IMPORTED_MODULE_1__["default"](this.model.walls[0], new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](this.x + 0, this.y + 0, this.z - 0.5), new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0)));
        this.addChild(new _Wall__WEBPACK_IMPORTED_MODULE_1__["default"](this.model.walls[1], new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](this.x + 0.5, this.y + 0, this.z + 0), new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](0, -Math.PI / 2, 0)));
        this.addChild(new _Wall__WEBPACK_IMPORTED_MODULE_1__["default"](this.model.walls[2], new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](this.x + 0, this.y + 0, this.z + 0.5), new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](0, Math.PI, 0)));
        this.addChild(new _Wall__WEBPACK_IMPORTED_MODULE_1__["default"](this.model.walls[3], new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](this.x - 0.5, this.y + 0, this.z + 0), new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](0, Math.PI / 2, 0)));
        this.addChild(new _Wall__WEBPACK_IMPORTED_MODULE_1__["default"](this.model.walls[4], new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](this.x + 0, this.y - 0.5, this.z + 0), new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](-Math.PI / 2, 0, 0)));
        this.addChild(new _Wall__WEBPACK_IMPORTED_MODULE_1__["default"](this.model.walls[5], new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](this.x + 0, this.y + 0.5, this.z + 0), new engine_util_Point3__WEBPACK_IMPORTED_MODULE_2__["default"](Math.PI / 2, 0, 0)));
    }
}


/***/ }),

/***/ "./src/examples/classic-rpg-interface/sceneview/WorldObject.ts":
/*!*********************************************************************!*\
  !*** ./src/examples/classic-rpg-interface/sceneview/WorldObject.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldObject; });
/* harmony import */ var engine_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/GameObject */ "./src/engine/GameObject.ts");
/* harmony import */ var engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/ThreeMesh */ "./src/engine/gameobject/ThreeMesh.ts");


class WorldObject extends engine_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(model) {
        super(null);
        this.model = model;
    }
    create() {
        let geom = new THREE.PlaneGeometry(1, 1, 0);
        let texture = new THREE.TextureLoader().load(this.model.filename, (() => { this.requestDraw(); }).bind(this));
        let material = new THREE.MeshBasicMaterial({ map: texture });
        let mesh = new engine_gameobject_ThreeMesh__WEBPACK_IMPORTED_MODULE_1__["default"](geom, material);
        mesh.mesh.position.x = this.model.position[0];
        mesh.mesh.position.y = this.model.position[1];
        mesh.mesh.position.z = this.model.position[2];
        this.mesh = this.addChild(mesh);
    }
}


/***/ })

/******/ });