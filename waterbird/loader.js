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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/loader.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/rpg/backgrounds/environment.jpg":
/*!****************************************************!*\
  !*** ./src/assets/rpg/backgrounds/environment.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e63deb6d8f02d5a47efe0d45adeffc05.jpg";

/***/ }),

/***/ "./src/loader.ts":
/*!***********************!*\
  !*** ./src/loader.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_rpg_backgrounds_environment_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/rpg/backgrounds/environment.jpg */ "./src/assets/rpg/backgrounds/environment.jpg");
/* harmony import */ var assets_rpg_backgrounds_environment_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_rpg_backgrounds_environment_jpg__WEBPACK_IMPORTED_MODULE_0__);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
let container = document.querySelector("#gameTarget");
let bgPosition = 50;
let rate = -2.5;
var lastCalledTime;
let animateBackground = true;
var bgImg = new Image();
bgImg.onload = function () {
    container.style.backgroundSize = "cover";
    container.style.backgroundImage = "url(" + assets_rpg_backgrounds_environment_jpg__WEBPACK_IMPORTED_MODULE_0___default.a + ")";
    container.style.backgroundPosition = "50% 50%";
    window.requestAnimationFrame(animCallback);
};
bgImg.src = assets_rpg_backgrounds_environment_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;
function animCallback() {
    if (!lastCalledTime) {
        lastCalledTime = Date.now();
        window.requestAnimationFrame(animCallback);
        return;
    }
    let delta = Date.now() - lastCalledTime;
    lastCalledTime = Date.now();
    container.style.backgroundPositionX = bgPosition + "%";
    bgPosition += rate * (delta / 1000);
    if (bgPosition <= 0)
        rate = -rate;
    if (bgPosition > 100)
        rate = -rate;
    if (animateBackground)
        window.requestAnimationFrame(animCallback);
}
let bar = document.querySelector("#barOuter");
let bar2 = document.querySelector("#barInner");
let barText = document.querySelector("#barText");
function loadLibs() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./libs.js");
    xmlhttp.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            bar2.style.width = percentComplete * 100 + "px";
        }
        else {
        }
    }, false);
    xmlhttp.addEventListener("load", function (event) {
        var e = event.target;
        var s = document.createElement("script");
        s.innerHTML = xmlhttp.responseText;
        document.documentElement.appendChild(s);
        loadGame();
    }, false);
    xmlhttp.send();
    barText.innerText = "Loading libraries";
}
function loadGame() {
    bar2.style.width = 0 + "px";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./game.js");
    xmlhttp.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            bar2.style.width = percentComplete * 100 + "px";
        }
        else {
        }
    }, false);
    xmlhttp.addEventListener("load", function (event) {
        var e = event.target;
        var s = document.createElement("script");
        s.innerHTML = xmlhttp.responseText;
        document.documentElement.appendChild(s);
        bar.style.visibility = "hidden";
        animateBackground = false;
    }, false);
    xmlhttp.send();
    barText.innerText = "Loading game.js";
}
loadLibs();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ycGcvYmFja2dyb3VuZHMvZW52aXJvbm1lbnQuanBnIiwid2VicGFjazovLy8uL3NyYy9sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBaUU7QUFFakUsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFO0lBQzlCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7UUFDOUIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztDQUNKO0FBRUgsSUFBSSxTQUFTLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMs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QUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO0FBQzFDLENBQUM7QUFFRCxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiJsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sb2FkZXIudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNjNkZWI2ZDhmMDJkNWE0N2VmZTBkNDVhZGVmZmMwNS5qcGdcIjsiLCJpbXBvcnQgQmFja2dyb3VuZDEgZnJvbSBcImFzc2V0cy9ycGcvYmFja2dyb3VuZHMvZW52aXJvbm1lbnQuanBnXCI7XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKTtcbiAgICB9KTtcbiAgfVxuXG5sZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVRhcmdldFwiKTtcbmxldCBiZ1Bvc2l0aW9uID0gNTA7XG5sZXQgcmF0ZSA9IC0yLjU7XG52YXIgbGFzdENhbGxlZFRpbWU7XG5sZXQgYW5pbWF0ZUJhY2tncm91bmQgPSB0cnVlO1xuXG52YXIgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcbmJnSW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAgXCJ1cmwoXCIrQmFja2dyb3VuZDErXCIpXCI7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiNTAlIDUwJVwiO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbUNhbGxiYWNrKTtcbn07XG5iZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kMTtcblxuZnVuY3Rpb24gYW5pbUNhbGxiYWNrKClcbntcbiAgICBpZighbGFzdENhbGxlZFRpbWUpIHtcbiAgICAgICAgbGFzdENhbGxlZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1DYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgfVxuICAgIGxldCBkZWx0YSA9IERhdGUubm93KCkgLSBsYXN0Q2FsbGVkVGltZTtcbiAgICBsYXN0Q2FsbGVkVGltZSA9IERhdGUubm93KCk7XG5cbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IGJnUG9zaXRpb24gKyBcIiVcIjtcbiAgICBiZ1Bvc2l0aW9uICs9IHJhdGUqKGRlbHRhLzEwMDApO1xuICAgIGlmIChiZ1Bvc2l0aW9uIDw9IDApXG4gICAgICAgIHJhdGUgPSAtcmF0ZTtcbiAgICBpZiAoYmdQb3NpdGlvbiA+IDEwMClcbiAgICAgICAgcmF0ZSA9IC1yYXRlO1xuICAgIGlmIChhbmltYXRlQmFja2dyb3VuZClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltQ2FsbGJhY2spO1xufVxuXG5cbmxldCBiYXI6IEhUTUxFbGVtZW50ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyT3V0ZXJcIik7XG5sZXQgYmFyMjogSFRNTEVsZW1lbnQgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXJJbm5lclwiKTtcbmxldCBiYXJUZXh0OiBIVE1MRWxlbWVudCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhclRleHRcIik7XG5cblxuZnVuY3Rpb24gbG9hZExpYnMoKVxue1xuICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG1saHR0cC5vcGVuKFwiR0VUXCIsIFwiLi9saWJzLmpzXCIpO1xuXG4gICAgeG1saHR0cC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbDtcbiAgICAgICAgICAgIGJhcjIuc3R5bGUud2lkdGggPSBwZXJjZW50Q29tcGxldGUqMTAwICsgXCJweFwiO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVbmFibGUgdG8gY29tcHV0ZSBwcm9ncmVzcyBpbmZvcm1hdGlvbiBzaW5jZSB0aGUgdG90YWwgc2l6ZSBpcyB1bmtub3duXG4gICAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG5cbiAgICB4bWxodHRwLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHMuaW5uZXJIVE1MID0geG1saHR0cC5yZXNwb25zZVRleHQ7XG4gICAgICAgIC8vIG9yOiBzW3MuaW5uZXJUZXh0IT11bmRlZmluZWQ/XCJpbm5lclRleHRcIjpcInRleHRDb250ZW50XCJdID0gZS5yZXNwb25zZVRleHRcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBsb2FkR2FtZSgpO1xuICAgIH0sIGZhbHNlKTtcbiAgICB4bWxodHRwLnNlbmQoKTtcbiAgICBiYXJUZXh0LmlubmVyVGV4dCA9IFwiTG9hZGluZyBsaWJyYXJpZXNcIjtcbn1cblxuXG5cbmZ1bmN0aW9uIGxvYWRHYW1lKClcbntcbiAgICBiYXIyLnN0eWxlLndpZHRoID0gMCtcInB4XCI7XG4gICAgdmFyIHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4bWxodHRwLm9wZW4oXCJHRVRcIiwgXCIuL2dhbWUuanNcIik7XG5cbiAgICB4bWxodHRwLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsO1xuICAgICAgICAgICAgYmFyMi5zdHlsZS53aWR0aCA9IHBlcmNlbnRDb21wbGV0ZSoxMDAgKyBcInB4XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVbmFibGUgdG8gY29tcHV0ZSBwcm9ncmVzcyBpbmZvcm1hdGlvbiBzaW5jZSB0aGUgdG90YWwgc2l6ZSBpcyB1bmtub3duXG4gICAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG5cbiAgICB4bWxodHRwLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHMuaW5uZXJIVE1MID0geG1saHR0cC5yZXNwb25zZVRleHQ7XG4gICAgICAgIC8vIG9yOiBzW3MuaW5uZXJUZXh0IT11bmRlZmluZWQ/XCJpbm5lclRleHRcIjpcInRleHRDb250ZW50XCJdID0gZS5yZXNwb25zZVRleHRcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBiYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGFuaW1hdGVCYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgfSwgZmFsc2UpO1xuICAgIHhtbGh0dHAuc2VuZCgpO1xuICAgIGJhclRleHQuaW5uZXJUZXh0ID0gXCJMb2FkaW5nIGdhbWUuanNcIjtcbn1cblxubG9hZExpYnMoKTsiXSwic291cmNlUm9vdCI6IiJ9