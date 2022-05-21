/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/links */ \"./src/modules/links.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/message */ \"./src/modules/message.js\");\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nav */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://figma/./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\r\n\r\n    const form = document.querySelector('.form'),\r\n        formCircles = form.querySelectorAll('.form-circle'),\r\n        formTexts = form.querySelectorAll('.form-text'),\r\n        selects = form.querySelectorAll('.form-input'),\r\n        formImage = form.querySelector('.form-image'),\r\n        formText = form.querySelector('.circles-text'),\r\n        bigCircles = form.querySelectorAll('.big-circle'),\r\n        formButton = form.querySelector('.button-form'),\r\n        message = document.querySelector('.message')\r\n\r\n    const fileImage = document.createElement('img');\r\n    const fileText = document.createElement('a');\r\n    const inputForm = document.createElement('input');\r\n    const backButton = document.createElement('button');\r\n    const forwardButton = document.createElement('button');\r\n    const nameInput = document.createElement('input');\r\n    const phoneInput = document.createElement('input');\r\n    const emailInput = document.createElement('input');\r\n\r\n    bigCircles.forEach(item => {\r\n        if (item.firstElementChild.classList.contains('active') === false) {\r\n            item.classList.remove('big-circle')\r\n        }\r\n    })\r\n\r\n    fileImage.src = 'img/file-image.png';\r\n    fileImage.classList.add('file-image');\r\n\r\n    fileText.textContent = 'Загрузите файл';\r\n    fileText.classList.add('file-text');\r\n\r\n    inputForm.placeholder = 'Введите задание в текстовое поле';\r\n    inputForm.classList.add('input-in-form');\r\n\r\n    backButton.textContent = 'Назад'\r\n    backButton.type = 'button'\r\n    backButton.classList.add('buttons', 'back-button');\r\n\r\n    forwardButton.textContent = 'Далее'\r\n    forwardButton.type = 'button'\r\n    forwardButton.classList.add('buttons', 'forward-button');\r\n\r\n    nameInput.placeholder = 'ФИО';\r\n    phoneInput.placeholder = 'Телефон';\r\n    emailInput.placeholder = 'E-mail';\r\n\r\n    nameInput.classList.add('name-input');\r\n    phoneInput.classList.add('phone-input');\r\n    emailInput.classList.add('email-input');\r\n\r\n    formText.after(fileImage);\r\n    fileImage.after(fileText);\r\n    fileText.after(inputForm);\r\n    inputForm.after(forwardButton);\r\n    inputForm.after(backButton);\r\n\r\n    formText.after(nameInput);\r\n    formText.after(phoneInput);\r\n    formText.after(emailInput);\r\n\r\n    fileImage.classList.add('hide');\r\n    fileText.classList.add('hide');\r\n    inputForm.classList.add('hide');\r\n    forwardButton.classList.add('hide');\r\n    backButton.classList.add('hide');\r\n    nameInput.classList.add('hide');\r\n    phoneInput.classList.add('hide');\r\n    emailInput.classList.add('hide');\r\n\r\n    formButton.addEventListener('click', () => {\r\n        formCircles[0].textContent = '✔';\r\n        formCircles[0].classList.add('marked');\r\n        formCircles[0].classList.remove('circle-active');\r\n        formCircles[1].classList.add('circle-active');\r\n\r\n        formTexts[0].classList.remove('text-active');\r\n        formTexts[1].classList.add('text-active');\r\n\r\n\r\n        selects.forEach(item => {\r\n            item.classList.add('hide');\r\n        })\r\n        formImage.classList.add('hide');\r\n        formButton.classList.add('hide');\r\n\r\n        fileImage.classList.remove('hide');\r\n        fileText.classList.remove('hide');\r\n        inputForm.classList.remove('hide');\r\n        forwardButton.classList.remove('hide');\r\n        backButton.classList.remove('hide');\r\n\r\n    })\r\n\r\n    fileImage.addEventListener('mouseover', () => {\r\n        fileImage.style.cursor = 'pointer';\r\n    })\r\n\r\n    backButton.addEventListener('click', () => {\r\n\r\n        if (formCircles[1].classList.contains('circle-active')) {\r\n\r\n            formCircles[0].textContent = '1';\r\n            formCircles[0].classList.remove('marked');\r\n            formCircles[0].classList.add('circle-active');\r\n            formCircles[1].classList.remove('circle-active');\r\n\r\n            formTexts[0].classList.add('text-active');\r\n            formTexts[1].classList.remove('text-active');\r\n\r\n            fileImage.classList.add('hide');\r\n            fileText.classList.add('hide');\r\n            inputForm.classList.add('hide');\r\n            forwardButton.classList.add('hide');\r\n            backButton.classList.add('hide');\r\n\r\n            selects.forEach(item => {\r\n                item.classList.remove('hide');\r\n            })\r\n            formImage.classList.remove('hide');\r\n            formButton.classList.remove('hide');\r\n        } else {\r\n\r\n            form.style.height = '390px';\r\n\r\n            if (inputForm.classList.contains('empty-value')) {\r\n                inputForm.classList.remove('empty-value');\r\n            }\r\n\r\n            formCircles[1].textContent = '2';\r\n            formCircles[1].classList.remove('marked');\r\n            formCircles[1].classList.add('circle-active');\r\n            formCircles[2].classList.remove('circle-active');\r\n\r\n            formTexts[1].classList.add('text-active');\r\n            formTexts[2].classList.remove('text-active');\r\n\r\n            forwardButton.textContent = 'Далее';\r\n            fileImage.classList.remove('hide');\r\n            fileText.classList.remove('hide');\r\n            inputForm.classList.remove('hide');\r\n\r\n            nameInput.classList.add('hide');\r\n            phoneInput.classList.add('hide');\r\n            emailInput.classList.add('hide');\r\n        }\r\n\r\n\r\n    })\r\n\r\n    nameInput.onchange = () => {\r\n        nameInput.classList.remove('empty-value');\r\n    }\r\n\r\n    phoneInput.onchange = () => {\r\n        phoneInput.classList.remove('empty-value');\r\n    }\r\n\r\n    emailInput.onchange = () => {\r\n        emailInput.classList.remove('empty-value');\r\n    }\r\n\r\n    forwardButton.addEventListener('click', (e) => {\r\n\r\n        if (inputForm.value === \"\") {\r\n\r\n            inputForm.classList.add('empty-value');\r\n\r\n        } else {\r\n\r\n            if (formCircles[1].classList.contains('circle-active')) {\r\n\r\n                form.style.height = '450px';\r\n\r\n                formCircles[1].textContent = '✔';\r\n                formCircles[1].classList.add('marked');\r\n                formCircles[1].classList.remove('circle-active');\r\n                formCircles[2].classList.add('circle-active');\r\n\r\n                formTexts[1].classList.remove('text-active');\r\n                formTexts[2].classList.add('text-active');\r\n\r\n                forwardButton.textContent = 'Готово';\r\n                fileImage.classList.add('hide');\r\n                fileText.classList.add('hide');\r\n                inputForm.classList.add('hide');\r\n\r\n                nameInput.classList.remove('hide');\r\n                phoneInput.classList.remove('hide');\r\n                emailInput.classList.remove('hide');\r\n\r\n            } else {\r\n\r\n                if (nameInput.value === '') {\r\n\r\n                    nameInput.classList.add('empty-value');\r\n\r\n                } else if (phoneInput.value === '') {\r\n\r\n                    phoneInput.classList.add('empty-value');\r\n\r\n                } else if (emailInput.value === '') {\r\n\r\n                    emailInput.classList.add('empty-value');\r\n\r\n                } else {\r\n\r\n\r\n\r\n                    message.classList.remove('hide');\r\n\r\n                    form.style.height = '390px';\r\n\r\n                    formCircles[1].textContent = '2';\r\n                    formCircles[1].classList.remove('marked');\r\n                    formTexts[1].classList.remove('text-active');\r\n                    formCircles[1].classList.remove('circle-active');\r\n                    formCircles[2].classList.remove('circle-active');\r\n                    formTexts[2].classList.remove('text-active');\r\n\r\n                    formCircles[0].textContent = '1';\r\n                    formCircles[0].classList.remove('marked');\r\n                    formCircles[0].classList.add('circle-active');\r\n                    formTexts[0].classList.add('text-active');\r\n\r\n                    nameInput.classList.add('hide');\r\n                    phoneInput.classList.add('hide');\r\n                    emailInput.classList.add('hide');\r\n\r\n                    selects.forEach(item => {\r\n                        item.classList.remove('hide');\r\n                    })\r\n                    formImage.classList.remove('hide');\r\n                    formButton.classList.remove('hide');\r\n\r\n                    forwardButton.classList.add('hide');\r\n                    backButton.classList.add('hide');\r\n\r\n                    inputForm.value = '';\r\n                    nameInput.value = '';\r\n                    phoneInput.value = '';\r\n                    emailInput.value = '';\r\n                }\r\n\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://figma/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/links.js":
/*!******************************!*\
  !*** ./src/modules/links.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardLink = () => {\r\n    const links = document.querySelectorAll('.card-links'),\r\n        lastmodal = document.querySelector('.last-modal'),\r\n        email = document.querySelector('e-mail')\r\n\r\n    lastmodal.classList.add('hide');\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('mouseover', () => {\r\n            link.lastChild.style = 'margin-left: 10px';\r\n            link.lastChild.style.transition = '0.4s';\r\n        })\r\n    })\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('mouseleave', () => {\r\n            link.lastChild.style = 'margin-right: 10px';\r\n            link.lastChild.style.transition = '0.4s';\r\n        })\r\n    })\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            lastmodal.classList.remove('hide')\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardLink);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://figma/./src/modules/links.js?");

/***/ }),

/***/ "./src/modules/message.js":
/*!********************************!*\
  !*** ./src/modules/message.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst messageOut = () => {\r\n    const message = document.querySelector('.message'),\r\n        messageButton = document.querySelector('.message-button')\r\n\r\n    message.classList.add('hide');\r\n\r\n    messageButton.addEventListener('click', () => {\r\n        message.classList.add('hide');\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messageOut);\r\n\r\n\n\n//# sourceURL=webpack://figma/./src/modules/message.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalOut = () => {\r\n\r\n    const callMenu = document.querySelector('.call-item'),\r\n        modal = document.querySelector('.modal'),\r\n        modalClose = modal.querySelector('.modal-close'),\r\n        modalButton = modal.querySelector('.modal-button'),\r\n        modalInput = modal.querySelectorAll('.modal-input'),\r\n        modalHead = modal.querySelector('.modal-head'),\r\n        modalText = modal.querySelector('.modal-text')\r\n\r\n    const modalCircle = document.createElement('div');\r\n    const modalMark = document.createElement('div');\r\n    const modalNewHead = document.createElement('div');\r\n    const modalNewText = document.createElement('div');\r\n\r\n    modal.classList.add('hide');\r\n    modalCircle.classList.add('modal-circle');\r\n    modalMark.classList.add('modal-mark');\r\n    modalMark.textContent = '✔';\r\n    modalMark.classList.add('hide')\r\n    modalNewHead.textContent = \"Заявка успешно отправлена\";\r\n    modalNewHead.classList.add('hide');\r\n    modalNewHead.classList.add('modal-new-head');\r\n    modalNewText.textContent = \"В ближайшее время с вами  свяжутся наши менеджеры\";\r\n    modalNewText.classList.add('hide');\r\n    modalNewText.classList.add('modal-new-text');\r\n    modalCircle.classList.add('hide')\r\n\r\n\r\n    modalClose.after(modalCircle);\r\n    modalCircle.append(modalMark);\r\n    modalCircle.after(modalNewHead);\r\n    modalNewHead.after(modalNewText);\r\n\r\n    callMenu.addEventListener('click', () => {\r\n        modal.classList.remove('hide');\r\n    })\r\n\r\n    modalClose.addEventListener('click', () => {\r\n        modal.classList.add('hide');\r\n    })\r\n\r\n    modalButton.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (modalButton.textContent != \"На главную\") {\r\n\r\n            modalHead.classList.add('hide');\r\n            modalText.classList.add('hide');\r\n            modalInput.forEach(input => {\r\n                input.classList.add('hide');\r\n            })\r\n            modalCircle.classList.remove('hide');\r\n            modalMark.classList.remove('hide');\r\n            modalNewHead.classList.remove('hide');\r\n            modalNewText.classList.remove('hide');\r\n\r\n\r\n            modalButton.textContent = \"На главную\";\r\n            modalInput.forEach(input => {\r\n                input.value = '';\r\n            })\r\n        } else {\r\n\r\n            modalHead.classList.remove('hide');\r\n            modalText.classList.remove('hide');\r\n            modalInput.forEach(input => {\r\n                input.classList.remove('hide');\r\n            })\r\n\r\n            modalCircle.classList.add('hide');\r\n            modalMark.classList.add('hide');\r\n            modalNewHead.classList.add('hide');\r\n            modalNewText.classList.add('hide');\r\n\r\n            modalButton.textContent = \"Отправить заявку\";\r\n            modal.classList.add('hide');\r\n        }\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalOut);\r\n\n\n//# sourceURL=webpack://figma/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nav = () => {\r\n\r\n    const offerMenu = document.querySelector('.offer-item'),\r\n        priceMenu = document.querySelector('.price-item'),\r\n        companyMenu = document.querySelector('.company-item'),\r\n        applicationMenu = document.querySelector('.application-item'),\r\n        stageMenu = document.querySelector('.stage-item'),\r\n        advantageMenu = document.querySelector('.advantage-item'),\r\n        feedbackMenu = document.querySelector('.feedback-item'),\r\n        questionMenu = document.querySelector('.q-a-item'),\r\n        contactMenu = document.querySelector('.contact-item')\r\n\r\n    offerMenu.addEventListener('click', () => {\r\n        document.querySelector('.second-title').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    priceMenu.addEventListener('click', () => {\r\n        document.querySelector('.price').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    companyMenu.addEventListener('click', () => {\r\n        document.querySelector('.company-header').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    applicationMenu.addEventListener('click', () => {\r\n        document.querySelector('.last-form').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    stageMenu.addEventListener('click', () => {\r\n        document.querySelector('.offer-form').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    advantageMenu.addEventListener('click', () => {\r\n        document.querySelector('.fourth-slide').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    feedbackMenu.addEventListener('click', () => {\r\n        document.querySelector('.recomendation-head').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    questionMenu.addEventListener('click', () => {\r\n        document.querySelector('.questions-and-answers').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n\r\n    contactMenu.addEventListener('click', () => {\r\n        document.querySelector('.footer').scrollIntoView({ behavior: \"smooth\" });\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n//# sourceURL=webpack://figma/./src/modules/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;