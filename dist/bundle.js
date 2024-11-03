/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  let slides = document.querySelectorAll('.slide');\r\n  let currentSlide = 0;\r\n  const totalSlides = slides.length;\r\n  const nextSlideBtn = document.getElementById('nextSlide');\r\n  const prevSlideBtn = document.getElementById('prevSlide');\r\n  const dots = document.querySelectorAll('.dot');\r\n\r\n  slides[currentSlide].classList.add('active');\r\n  dots[currentSlide].classList.add('active');\r\n\r\n  function showSlide(index) {\r\n    slides[currentSlide].classList.remove('active');\r\n    dots[currentSlide].classList.remove('active');\r\n    dots[currentSlide].style.backgroundImage = 'url(\"src/logo/inactive-dot.svg\")';\r\n\r\n    currentSlide = index;\r\n\r\n    slides[currentSlide].classList.add('active');\r\n    dots[currentSlide].classList.add('active');\r\n    dots[currentSlide].style.backgroundImage = `url(\"src/logo/active-dot${currentSlide + 1}.svg\")`;\r\n  }\r\n\r\n  function nextSlide() {\r\n    let newIndex = (currentSlide + 1) % totalSlides;\r\n    showSlide(newIndex);\r\n  }\r\n\r\n  function prevSlide() {\r\n    let newIndex = (currentSlide - 1 + totalSlides) % totalSlides;\r\n    showSlide(newIndex);\r\n  }\r\n\r\n  nextSlideBtn.addEventListener('click', nextSlide);\r\n  prevSlideBtn.addEventListener('click', prevSlide);\r\n\r\n  dots.forEach((dot, index) => {\r\n    dot.addEventListener('click', () => {\r\n      showSlide(index);\r\n    });\r\n  });\r\n\r\n  setInterval(nextSlide, 5000);\r\n});\r\n\n\n//# sourceURL=webpack://my-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;