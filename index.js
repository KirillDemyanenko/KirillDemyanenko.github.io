/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/animated-items/animated-items.ts":
/*!*********************************************************!*\
  !*** ./src/components/animated-items/animated-items.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chooseColor": () => (/* binding */ chooseColor),
/* harmony export */   "chooseColorAnimation": () => (/* binding */ chooseColorAnimation),
/* harmony export */   "getColorAnimation": () => (/* binding */ getColorAnimation),
/* harmony export */   "renderDiamond": () => (/* binding */ renderDiamond),
/* harmony export */   "renderReverseMessage": () => (/* binding */ renderReverseMessage),
/* harmony export */   "showRandomColor": () => (/* binding */ showRandomColor),
/* harmony export */   "showReverseAnimation": () => (/* binding */ showReverseAnimation)
/* harmony export */ });
/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/cards */ "./src/components/cards/cards.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sounds */ "./src/components/sounds.ts");
//------------------------get random color



var renderDiamond = function () {
    var diamond = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'diamond-container');
    var diamonds = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'diamonds');
    var ids = ['red-diamond', 'yellow-diamond', 'blue-diamond', 'green-diamond'];
    for (var i = 0; i < 4; i++) {
        var coloredDiamond = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'diamond');
        var cover = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'cover');
        coloredDiamond.id = ids[i];
        coloredDiamond.append(cover);
        diamonds.append(coloredDiamond);
    }
    diamond.append(diamonds);
    return diamond;
};
var getColorAnimation = function () {
    var colors = [_cards_cards__WEBPACK_IMPORTED_MODULE_0__.blueColor, _cards_cards__WEBPACK_IMPORTED_MODULE_0__.greenColor, _cards_cards__WEBPACK_IMPORTED_MODULE_0__.yellowColor, _cards_cards__WEBPACK_IMPORTED_MODULE_0__.redColor];
    var color = colors[(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(colors.length)];
    Array.from(document.getElementsByClassName('diamond')).forEach(function (el) { return el.classList.add('shy'); });
    if (document.getElementById('red-diamond').classList.contains('shy')) {
        setTimeout(function () {
            Array.from(document.getElementsByClassName('diamond')).forEach(function (el) {
                el.style.backgroundColor = color;
                el.style.boxShadow = 'none';
            });
            Array.from(document.getElementsByClassName('diamond')).forEach(function (el) { return el.classList.remove('shy'); });
        }, 2000);
        setTimeout(function () {
            document.querySelector('.diamond-container').classList.remove('show');
        }, 2500);
        setTimeout(function () {
            document.getElementById('red-diamond').style.backgroundColor = '#eca4a4';
            document.getElementById('red-diamond').style.boxShadow = 'inset 1px 1px 22px 16px rgb(194 17 32)';
            document.getElementById('blue-diamond').style.backgroundColor = '#a4a7ec';
            document.getElementById('blue-diamond').style.boxShadow = 'inset 1px 1px 22px 16px darkblue';
            document.getElementById('yellow-diamond').style.backgroundColor = '#ecd2a4';
            document.getElementById('yellow-diamond').style.boxShadow = 'inset 1px 1px 22px 16px #FFC300';
            document.getElementById('green-diamond').style.backgroundColor = '#a4eca7';
            document.getElementById('green-diamond').style.boxShadow = 'inset 1px 1px 22px 16px #258f37';
        }, 3000);
    }
};
var showRandomColor = function () {
    document.querySelector('.diamond-container').classList.add('show');
    getColorAnimation();
    void _sounds__WEBPACK_IMPORTED_MODULE_2__.getColorSound.play();
};
//------------------------get reverse
var renderReverseMessage = function () {
    var reverse = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'reverse-container');
    var reversCW = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createImage)('reverse-right', '../../assets/img/revers-right.png', 'reverse');
    var reversCCW = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createImage)('reverse-left', '../../assets/img/revers-left.png', 'reverse');
    reverse.append(reversCW, reversCCW);
    return reverse;
};
var changeDirection = function (reverse) {
    var direction;
    var turn;
    var clockWise = document.querySelector('.reverse-right');
    var counterClockWise = document.querySelector('.reverse-left');
    if (reverse == true) {
        direction = clockWise;
        turn = 2;
        clockWise.classList.add('show');
        counterClockWise.classList.remove('show');
    }
    else {
        direction = counterClockWise;
        turn = -2;
        counterClockWise.classList.add('show');
        clockWise.classList.remove('show');
    }
    var reverseKeyframes = new KeyframeEffect(direction, [
        { transform: 'rotate(0deg)' },
        { transform: "rotate(".concat(turn, "turn)") },
        { transform: 'scale(1.2)' },
    ], { duration: 4000, fill: 'none', iterations: 1 });
    var reverseCardAnimation = new Animation(reverseKeyframes, document.timeline);
    reverseCardAnimation.play();
    void _sounds__WEBPACK_IMPORTED_MODULE_2__.getReverseSound.play();
    setTimeout(function () {
        document.querySelector('.reverse-container').classList.remove('show');
    }, 4500);
};
var showReverseAnimation = function (reverse) {
    document.querySelector('.reverse-container').classList.add('show');
    changeDirection(reverse);
};
//----------------------choose color
var chooseColorAnimation = function (e) {
    var chosenDiamond = e.target;
    var chosenColor = chosenDiamond.parentElement.id.replace('-diamond', '');
    setTimeout(function () {
        document.querySelector('.diamond-container').classList.remove('choose-color');
    }, 1000);
    return chosenColor;
};
var color = '';
var chooseColor = function () {
    var diamond = document.querySelector('.diamond-container');
    diamond.classList.add('choose-color');
    diamond.addEventListener('click', function (e) {
        color = chooseColorAnimation(e);
        console.log('color', color);
    });
};


/***/ }),

/***/ "./src/components/cards/cards-helpers.ts":
/*!***********************************************!*\
  !*** ./src/components/cards/cards-helpers.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkColorForGradient": () => (/* binding */ checkColorForGradient),
/* harmony export */   "renderCardTemplate": () => (/* binding */ renderCardTemplate),
/* harmony export */   "renderGradient": () => (/* binding */ renderGradient),
/* harmony export */   "renderRectangle": () => (/* binding */ renderRectangle),
/* harmony export */   "renderSmallSymbol": () => (/* binding */ renderSmallSymbol),
/* harmony export */   "setClassName": () => (/* binding */ setClassName)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/components/cards/cards.ts");

//--------------card template
var renderCardTemplate = function (color, currScale) {
    var svg = document.createElementNS(_cards__WEBPACK_IMPORTED_MODULE_0__.ns, 'svg');
    svg.setAttributeNS(null, 'width', "".concat(300 * currScale));
    svg.setAttributeNS(null, 'height', "".concat(520 * currScale));
    svg.setAttributeNS(null, 'fill', color);
    svg.innerHTML = "\n      <symbol class=\"cardCenter\" id=\"mySymbol\" viewBox=\"0 0 ".concat(300 * currScale, " ").concat(520 * currScale, "\" stroke=\"white\" stroke-width=\"").concat(11 * currScale, "\">\n            <rect class=\"mainCard cardCenter\" x=\"").concat(15 * currScale, "\" y=\"").concat(25 * currScale, "\" rx=\"").concat(10 * currScale, "\" ry=\"").concat(15 * currScale, "\" width=\"").concat(250 * currScale, "\" height=\"").concat(420 * currScale, "\"/>\n            <ellipse class=\"cardCenter\" cx=\"").concat(230 * currScale, "\" cy=\"").concat(160 * currScale, "\" rx=\"").concat(105 * currScale, "\" ry=\"").concat(183 * currScale, "\"\n      style=\"fill:white;stroke:white;stroke-width:").concat(3 * currScale, ";transform: rotate(25deg);\"/>\n          </symbol>  \n         \n        <use xlink:href=\"#mySymbol\" class=\"cardCenter\"></use>\n    ");
    return svg;
};
//---------------small symbols om the top and bottom
var renderSmallSymbol = function (cardSymbol, x1, y1, deg, currScale) {
    var g = document.createElementNS(_cards__WEBPACK_IMPORTED_MODULE_0__.ns, 'g');
    g.innerHTML = "\n      <text class=\"cardCenter\" x=".concat(x1 * currScale, " y=").concat(y1 * currScale, " style=\"transform: rotate(").concat(deg, "deg)\" font-family=\"Arial\" font-size=\"").concat(55 * currScale, "\" font-style=\"italic\" font-weight=\"bold\" fill=\"white\">").concat(cardSymbol, "</text>\n      ");
    return g;
};
//-----------------------------rectangle and its gradient
var renderGradient = function (recId, stopColor1, stopColor2, stopColor3) {
    var gradient = document.createElementNS(_cards__WEBPACK_IMPORTED_MODULE_0__.ns, 'linearGradient');
    gradient.id = recId;
    gradient.setAttribute('x1', '0');
    gradient.setAttribute('x2', '0');
    gradient.setAttribute('y1', '0');
    gradient.setAttribute('y2', '1');
    gradient.innerHTML = "\n      <stop offset=\"0%\" stop-color=".concat(stopColor1, "></stop>\n      <stop offset=\"55%\" stop-color=").concat(stopColor2, "></stop>\n      <stop offset=\"100%\" stop-color=").concat(stopColor3, "></stop>\n  ");
    return gradient;
};
var renderRectangle = function (recId, x, y, currScale) {
    var rect = document.createElementNS(_cards__WEBPACK_IMPORTED_MODULE_0__.ns, 'rect');
    rect.setAttribute('x', "".concat(x * currScale));
    rect.setAttribute('y', "".concat(y * currScale));
    rect.setAttribute('rx', "".concat(5 * currScale));
    rect.setAttribute('ry', "".concat(5 * currScale));
    rect.setAttribute('width', "".concat(65 * currScale));
    rect.setAttribute('height', "".concat(100 * currScale));
    rect.setAttribute('fill', "url(#".concat(recId, ")"));
    rect.setAttribute('stroke', 'white');
    rect.setAttribute('stroke-width', "".concat(4 * currScale));
    rect.classList.add('cardCenter');
    return rect;
};
//------------------helpers
var setClassName = function (color) {
    var className = '';
    switch (color) {
        case _cards__WEBPACK_IMPORTED_MODULE_0__.greenColor:
            className = 'green';
            break;
        case _cards__WEBPACK_IMPORTED_MODULE_0__.redColor:
            className = 'red';
            break;
        case _cards__WEBPACK_IMPORTED_MODULE_0__.yellowColor:
            className = 'yellow';
            break;
        case _cards__WEBPACK_IMPORTED_MODULE_0__.blueColor:
            className = 'blue';
            break;
    }
    return className;
};
var checkColorForGradient = function (color) {
    var gradientColors = {
        colorTop: '',
        colorMiddle: '',
    };
    switch (color) {
        case _cards__WEBPACK_IMPORTED_MODULE_0__.greenColor: {
            gradientColors.colorTop = 'lightgreen';
            gradientColors.colorMiddle = 'green';
            break;
        }
        case _cards__WEBPACK_IMPORTED_MODULE_0__.redColor: {
            gradientColors.colorTop = 'red';
            gradientColors.colorMiddle = 'red';
            break;
        }
        case _cards__WEBPACK_IMPORTED_MODULE_0__.yellowColor: {
            gradientColors.colorTop = 'yellow';
            gradientColors.colorMiddle = 'yellow';
            break;
        }
        case _cards__WEBPACK_IMPORTED_MODULE_0__.blueColor: {
            gradientColors.colorTop = 'lightblue';
            gradientColors.colorMiddle = 'blue';
            break;
        }
    }
    return gradientColors;
};


/***/ }),

/***/ "./src/components/cards/cards.ts":
/*!***************************************!*\
  !*** ./src/components/cards/cards.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blueColor": () => (/* binding */ blueColor),
/* harmony export */   "greenColor": () => (/* binding */ greenColor),
/* harmony export */   "ns": () => (/* binding */ ns),
/* harmony export */   "redColor": () => (/* binding */ redColor),
/* harmony export */   "renderBackSide": () => (/* binding */ renderBackSide),
/* harmony export */   "renderBlockedCard": () => (/* binding */ renderBlockedCard),
/* harmony export */   "renderCardWithNumber": () => (/* binding */ renderCardWithNumber),
/* harmony export */   "renderMultiCard": () => (/* binding */ renderMultiCard),
/* harmony export */   "renderPlusFourCard": () => (/* binding */ renderPlusFourCard),
/* harmony export */   "renderPlusTwoCard": () => (/* binding */ renderPlusTwoCard),
/* harmony export */   "renderReverseCard": () => (/* binding */ renderReverseCard),
/* harmony export */   "yellowColor": () => (/* binding */ yellowColor)
/* harmony export */ });
/* harmony import */ var _cards_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-helpers */ "./src/components/cards/cards-helpers.ts");
/* harmony import */ var _global_components_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-components/constants */ "./src/components/global-components/constants.ts");


var ns = 'http://www.w3.org/2000/svg';
var redColor = '#c01e1e';
var blueColor = 'darkblue';
var greenColor = '#258f37';
var yellowColor = '#FFC300';
//--------------------CARD with number
var renderCentralSymbolNumber = function (cardSymbol, color, currScale) {
    var g = document.createElementNS(ns, 'g');
    g.innerHTML = "\n      <text class=\"cardCenter\" x=\"".concat(80 * currScale, "\" y=\"").concat(315 * currScale, "\" font-family=\"Arial\" font-size=\"").concat(208 * currScale, "\" font-style=\"italic\" font-weight=\"bold\" fill=").concat(color, ">").concat(cardSymbol, "</text>\n      ");
    return g;
};
var renderCardWithNumber = function (cardSymbol, color, currScale) {
    if (currScale === void 0) { currScale = 1; }
    var svg = (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderCardTemplate)(color, currScale);
    svg.classList.add('numberedCard', (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.setClassName)(color));
    svg.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderSmallSymbol)(cardSymbol, 30, 84, '360', currScale));
    svg.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderSmallSymbol)(cardSymbol, -248, -386, '-180', currScale));
    svg.append(renderCentralSymbolNumber(cardSymbol, color, currScale));
    return svg;
};
//--------------------reverse card
var renderCentralSymbolReverse = function (color, currScale) {
    var g = document.createElementNS(ns, 'g');
    var pathPart1 = document.createElementNS(ns, 'path');
    var pathPart2 = document.createElementNS(ns, 'path');
    var pathPart1G = document.createElementNS(ns, 'g');
    var pathPart2G = document.createElementNS(ns, 'g');
    pathPart1G.setAttribute('transform', "scale(".concat(currScale, ")"));
    pathPart2G.setAttribute('transform', "scale(".concat(currScale, ")"));
    pathPart1.classList.add('cardCenter');
    pathPart2.classList.add('cardCenter');
    pathPart1.setAttribute('d', 'm147.28903,142.78959l13.92774,13.54236l-55.71097,54.16946c-13.92774,13.54236 -13.92774,40.62709 0,54.16946l27.85549,-27.08474l55.71097,-54.16946l13.92774,13.54236l0,-54.16946l-55.71097,0l0.00001,0.00001l0,0.00001l-0.00001,0z');
    pathPart2.setAttribute('d', 'm147.28903,319.73153l-14.07225,-13.2734l56.28903,-53.09361c14.07225,-13.2734 14.07225,-39.8202 0,-53.09361l-28.14451,26.5468l-56.28903,53.09361l-14.07225,-13.2734l0,53.09361l56.28903,0l-0.00001,0l-0.00001,0z');
    pathPart1.setAttribute('style', "fill:".concat(color));
    pathPart2.setAttribute('style', "fill:".concat(color));
    pathPart1G.append(pathPart1);
    pathPart2G.append(pathPart2);
    g.append(pathPart1G, pathPart2G);
    return g;
};
var renderReverseCard = function (color, currScale) {
    if (currScale === void 0) { currScale = 1; }
    var svg = (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderCardTemplate)(color, currScale);
    svg.classList.add('reverseCard', (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.setClassName)(color));
    var topReverseSymbol1 = document.createElementNS(ns, 'path');
    var topReverseSymbol2 = document.createElementNS(ns, 'path');
    var bottomReverseSymbol1 = document.createElementNS(ns, 'path');
    var bottomReverseSymbol2 = document.createElementNS(ns, 'path');
    var topReverseSymbolG1 = document.createElementNS(ns, 'g');
    var topReverseSymbolG2 = document.createElementNS(ns, 'g');
    var bottomReverseSymbolG1 = document.createElementNS(ns, 'g');
    var bottomReverseSymbolG2 = document.createElementNS(ns, 'g');
    topReverseSymbolG1.setAttribute('transform', "scale(".concat(currScale, ")"));
    topReverseSymbolG2.setAttribute('transform', "scale(".concat(currScale, ")"));
    bottomReverseSymbolG1.setAttribute('transform', "scale(".concat(currScale, ")"));
    bottomReverseSymbolG2.setAttribute('transform', "scale(".concat(currScale, ")"));
    topReverseSymbol1.setAttribute('d', 'm54.57997,38.12738l3.855,3.74833l-15.41999,14.99333c-3.855,3.74833 -3.855,11.24499 0,14.99333l7.71,-7.49666l15.41999,-14.99333l3.855,3.74833l0,-14.99333l-15.41999,0l0,0l0,0l-0.00001,0z');
    topReverseSymbol2.setAttribute('d', 'm54.57997,87.10236l-3.895,-3.67389l15.57999,-14.69555c3.895,-3.67389 3.895,-11.02166 0,-14.69555l-7.79,7.34777l-15.57999,14.69555l-3.895,-3.67389l0,14.69555l15.57999,0l0,0l0.00001,0.00001z');
    bottomReverseSymbol1.setAttribute('d', 'm225.28001,379.91252l3.855,3.74833l-15.42,14.99333c-3.855,3.74832 -3.855,11.24499 0,14.99332l7.71,-7.49666l15.41999,-14.99333l3.855,3.74833l0,-14.99333l-15.41999,0l0,0.00001l0,0z');
    bottomReverseSymbol2.setAttribute('d', 'm225.28001,428.8875l-3.895,-3.67389l15.57999,-14.69554c3.895,-3.67389 3.895,-11.02166 0,-14.69555l-7.78999,7.34777l-15.57999,14.69555l-3.895,-3.67389l0,14.69555l15.57999,0l0,0z');
    topReverseSymbol1.setAttribute('style', 'fill:white');
    bottomReverseSymbol1.setAttribute('style', 'fill:white');
    topReverseSymbol2.setAttribute('style', 'fill:white');
    bottomReverseSymbol2.setAttribute('style', 'fill:white');
    topReverseSymbolG1.append(topReverseSymbol1);
    topReverseSymbolG2.append(topReverseSymbol2);
    bottomReverseSymbolG1.append(bottomReverseSymbol1);
    bottomReverseSymbolG2.append(bottomReverseSymbol2);
    svg.append(topReverseSymbolG1, topReverseSymbolG2, bottomReverseSymbolG1, bottomReverseSymbolG2);
    svg.append(renderCentralSymbolReverse(color, currScale));
    return svg;
};
//--------------------blocked card
var renderCentralSymbolBlock = function (color, currScale) {
    var g = document.createElementNS(ns, 'g');
    var path = document.createElementNS(ns, 'path');
    path.setAttribute('d', 'm145.17068,151.36242c-20.98242,-0.02733 -42.04457,7.92497 -58.0745,23.91302c-32.05986,31.97634 -32.14693,83.91833 -0.17054,115.97819c31.97634,32.05986 83.91833,32.14693 115.97819,0.17054c32.05986,-31.97634 32.14693,-83.91833 0.17054,-115.97819c-15.98817,-16.02993 -36.92129,-24.05644 -57.90369,-24.08384l0,0.00028zm-0.17054,27.32918c9.56455,0.01093 19.17263,2.51478 27.67079,7.51552l-74.81362,74.81362c-12.35469,-20.97684 -9.49312,-48.45737 8.54037,-66.44406c10.68663,-10.65877 24.61419,-15.90329 38.60245,-15.88508l0.00001,0zm47.14283,26.81675c12.44008,20.99279 9.52908,48.59236 -8.54037,66.61486c-18.05202,18.00496 -45.49154,20.65146 -66.44406,8.19876l74.98443,-74.81362z');
    path.setAttribute('style', "fill:".concat(color));
    path.classList.add('cardCenter');
    g.append(path);
    g.setAttribute('transform', "scale(".concat(currScale, ")"));
    return g;
};
var renderBlockedCard = function (color, currScale) {
    if (currScale === void 0) { currScale = 1; }
    var svg = (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderCardTemplate)(color, currScale);
    svg.classList.add('blockedCard', (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.setClassName)(color));
    var topBlockSymbol = document.createElementNS(ns, 'path');
    var bottomBlockSymbol = document.createElementNS(ns, 'path');
    var topBlockSymbolG = document.createElementNS(ns, 'path');
    var bottomBlockSymbolG = document.createElementNS(ns, 'path');
    topBlockSymbol.setAttribute('d', 'm54.54684,41.36221c-5.75789,-0.0075 -11.53766,2.17473 -15.93651,6.56209c-8.79771,8.77479 -8.8216,23.02844 -0.0468,31.82615c8.77479,8.79771 23.02844,8.8216 31.82615,0.0468c8.79771,-8.77479 8.8216,-23.02844 0.0468,-31.82615c-4.38739,-4.39885 -10.13175,-6.60145 -15.88964,-6.60897l0,0.00008zm-0.0468,7.49954c2.62466,0.003 5.26126,0.69009 7.59328,2.06237l-20.52998,20.52998c-3.39031,-5.75636 -2.60505,-13.29743 2.34361,-18.23324c2.93257,-2.92493 6.7545,-4.3641 10.59309,-4.3591l0,0l0,-0.00001zm12.9367,7.35892c3.41374,5.76074 2.61492,13.33447 -2.34361,18.28011c-4.95374,4.94083 -12.48356,5.66707 -18.23324,2.24986l20.57685,-20.52998l0,0.00001z');
    bottomBlockSymbol.setAttribute('d', 'm225.04681,382.89932c-5.75789,-0.0075 -11.53766,2.17473 -15.93651,6.56209c-8.7977,8.77479 -8.8216,23.02845 -0.0468,31.82615c8.77479,8.79771 23.02845,8.8216 31.82615,0.0468c8.79771,-8.77478 8.8216,-23.02844 0.0468,-31.82615c-4.38739,-4.39885 -10.13175,-6.60144 -15.88964,-6.60896l0,0.00007zm-0.0468,7.49954c2.62466,0.003 5.26126,0.69009 7.59328,2.06237l-20.52997,20.52998c-3.39032,-5.75636 -2.60506,-13.29743 2.3436,-18.23325c2.93257,-2.92492 6.7545,-4.3641 10.59309,-4.3591l0,0zm12.9367,7.35892c3.41375,5.76073 2.61492,13.33447 -2.3436,18.28011c-4.95375,4.94083 -12.48356,5.66707 -18.23325,2.24986l20.57685,-20.52997z');
    topBlockSymbol.setAttribute('style', 'fill:white');
    bottomBlockSymbol.setAttribute('style', 'fill:white');
    topBlockSymbolG.setAttribute('transform', "scale(".concat(currScale, ")"));
    bottomBlockSymbolG.setAttribute('transform', "scale(".concat(currScale, ")"));
    topBlockSymbolG.append(topBlockSymbol);
    bottomBlockSymbolG.append(bottomBlockSymbol);
    svg.append(topBlockSymbolG, renderCentralSymbolBlock(color, currScale), bottomBlockSymbolG);
    return svg;
};
//--------------------------card Plus 2
var renderCentralSymbolPlusTwo = function (color, currScale) {
    var _a = (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.checkColorForGradient)(color), colorTop = _a.colorTop, colorMiddle = _a.colorMiddle;
    var g = document.createElementNS(ns, 'g');
    g.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderGradient)("".concat(color, "Card1"), colorTop, colorMiddle, color), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderRectangle)("".concat(color, "Card1"), 85, 230, currScale), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderGradient)("".concat(color, "Card2"), colorTop, colorMiddle, color), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderRectangle)("".concat(color, "Card2"), 130, 170, currScale));
    return g;
};
var renderPlusTwoCard = function (color, currScale) {
    if (currScale === void 0) { currScale = 1; }
    var svg = (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderCardTemplate)(color, currScale);
    svg.classList.add('plusTwoCard', (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.setClassName)(color));
    svg.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderSmallSymbol)('+2', 30, 84, '360', currScale));
    svg.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderSmallSymbol)('+2', -248, -386, '-180', currScale));
    svg.append(renderCentralSymbolPlusTwo(color, currScale));
    return svg;
};
//--------------------------card Plus 4
var renderCentralSymbolPlusFour = function (currScale) {
    var g = document.createElementNS(ns, 'g');
    g.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderGradient)('greenCard', 'lightgreen', 'green', '#176825'), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderRectangle)('greenCard', 50, 245, currScale), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderGradient)('blueCard', 'lightblue', 'blue', 'darkblue'), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderRectangle)('blueCard', 90, 170, currScale), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderGradient)('redCard', 'red', 'red', 'darkred'), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderRectangle)('redCard', 135, 210, currScale), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderGradient)('yellowCard', 'yellow', 'yellow', '#FFC300'), (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderRectangle)('yellowCard', 175, 130, currScale));
    return g;
};
var renderPlusFourCard = function (currScale) {
    if (currScale === void 0) { currScale = 1; }
    var svg = (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderCardTemplate)('black', currScale);
    svg.classList.add('plusFourCard');
    svg.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderSmallSymbol)('+4', 30, 84, '360', currScale));
    svg.append((0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderSmallSymbol)('+4', -248, -386, '-180', currScale));
    svg.append(renderCentralSymbolPlusFour(currScale));
    return svg;
};
//--------------------multi card
var renderCentralMultiSymbol = function (currScale) {
    var g = document.createElementNS(ns, 'g');
    var ellipse = document.createElementNS(ns, 'ellipse');
    var pathRed = document.createElementNS(ns, 'path');
    var gRed = document.createElementNS(ns, 'g');
    var pathGreen = document.createElementNS(ns, 'path');
    var gGreen = document.createElementNS(ns, 'g');
    var pathBlue = document.createElementNS(ns, 'path');
    var gBlue = document.createElementNS(ns, 'g');
    var pathYellow = document.createElementNS(ns, 'path');
    var gYellow = document.createElementNS(ns, 'g');
    pathRed.setAttribute('stroke', 'white');
    pathRed.setAttribute('d', 'm198.40001,84.39999c78.99999,1 -12.79366,205.81348 -65.17329,175.01284c-52.37964,-30.80064 -90.03459,-22.73311 -73.03459,-59.73311c17,-37 59.20788,-116.27973 138.20788,-115.27973z');
    pathRed.setAttribute('fill', redColor);
    pathRed.classList.add('cardCenter');
    gRed.append(pathRed);
    gRed.setAttribute('transform', "scale(".concat(currScale, ")"));
    pathGreen.setAttribute('stroke', 'white');
    pathGreen.setAttribute('d', 'm150.0519,247.7688c0,0 -147.34031,134.24862 -70.3855,148.33064c76.95481,14.08202 158.60198,-118.28898 152.03268,-129.55461c-6.56931,-11.26562 -81.64718,-18.77603 -81.64718,-18.77603z');
    pathGreen.setAttribute('fill', greenColor);
    pathGreen.setAttribute('transform', 'rotate(-2.6154720783233643 144.7422790527318,322.457824707031)');
    pathGreen.classList.add('cardCenter');
    gGreen.append(pathGreen);
    gGreen.setAttribute('transform', "scale(".concat(currScale, ")"));
    pathBlue.setAttribute('stroke', 'white');
    pathBlue.setAttribute('d', 'm219.4,92.39999l-81.4,165.16183c0,0 30.4,127.46408 88.4,14.99576c58,-112.46832 0,-180.15758 -7,-180.15758z');
    pathBlue.setAttribute('fill', blueColor);
    pathBlue.classList.add('cardCenter');
    gBlue.append(pathBlue);
    gBlue.setAttribute('transform', "scale(".concat(currScale, ")"));
    pathYellow.setAttribute('stroke', 'white');
    pathYellow.setAttribute('d', 'm37.52665,246.52526c33.88023,-120.31747 102.95841,2.12685 103.47396,14.89692c0.51555,12.77007 -61.90296,138.46164 -69.12058,135.57034c-7.2176,-2.89131 -68.23361,-30.14979 -34.35338,-150.46726z');
    pathYellow.setAttribute('fill', yellowColor);
    pathYellow.classList.add('cardCenter');
    gYellow.append(pathYellow);
    gYellow.setAttribute('transform', "scale(".concat(currScale, ")"));
    g.append(ellipse, gRed, gYellow, gGreen, gBlue);
    return g;
};
var renderMultiCard = function (currScale) {
    if (currScale === void 0) { currScale = 1; }
    var svg = (0,_cards_helpers__WEBPACK_IMPORTED_MODULE_0__.renderCardTemplate)('black', currScale);
    svg.classList.add('multidCard');
    svg.append(renderCentralMultiSymbol(currScale));
    return svg;
};
var renderBackSide = function (currScale) {
    if (currScale === void 0) { currScale = 1; }
    var svg = document.createElementNS(ns, 'svg');
    svg.classList.add('back-side');
    svg.setAttributeNS(null, 'width', "".concat(300 * currScale));
    svg.setAttributeNS(null, 'height', "".concat(520 * currScale));
    svg.setAttributeNS(null, 'fill', 'black');
    svg.innerHTML = "\n    <symbol id=\"backCard\" viewBox=\"0 0 ".concat(300 * currScale, " ").concat(520 * currScale, "\" stroke=\"white\" stroke-width=\"").concat(11 * currScale, "\">\n     <rect x=\"").concat(15 * currScale, "\" y=\"").concat(25 * currScale, "\" rx=\"").concat(10 * currScale, "\" ry=\"").concat(15 * currScale, "\" width=\"").concat(250 * currScale, "\" height=\"").concat(420 * currScale, "\" />\n      <ellipse cx=\"").concat(230 * currScale, "\" cy=\"").concat(160 * currScale, "\" rx=\"").concat(97 * currScale, "\" ry=\"").concat(172 * currScale, "\" fill=\"red\" stroke=\"red\" style=\"transform: rotate(25deg);\" />\n      <svg width=\"").concat(240 * currScale, "\" height=\"").concat(410 * currScale, "\" x=\"").concat(19 * currScale, "\" y=\"").concat(30 * currScale, "\">\n        <ellipse cx=\"").concat(-130 * currScale, "\" cy=\"").concat(230 * currScale, "\" rx=\"").concat(20 * currScale, "\" ry=\"").concat(20 * currScale, "\" fill=\"black\" stroke=\"black\" stroke-dasharray=\"").concat(6.7 * currScale, "\" d=\"M5 20 l215 0\" d=\"M5 40 l215 0\" stroke-width=\"").concat(418 * currScale, "\" opacity=\"0.15\" style=\"transform: rotate( -65deg);\" />\n      </svg>\n    </symbol>\n    <use xlink:href=\"#backCard\" class=\"back-side\"></use>\n    <linearGradient id=\"Gradient2\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"white\"/>\n      <stop offset=\"55%\" stop-color=\"gold\"/>\n      <stop offset=\"100%\" stop-color=\"#806308\"/>\n    </linearGradient>\n    <text class=\"centerText back-side\" x=\"").concat(-40 * currScale, "\" y=\"").concat(300 * currScale, "\" font-size=\"").concat(115 * currScale, "\" fill=\"url(#Gradient2)\">UNO</text> \n  ");
    return svg;
};
//-------------------------------Listeners
window.addEventListener('beforload', function () {
    _global_components_constants__WEBPACK_IMPORTED_MODULE_1__.body.append(renderCardWithNumber('2', redColor, 0.8));
    _global_components_constants__WEBPACK_IMPORTED_MODULE_1__.body.append(renderReverseCard(blueColor, 0.5));
    _global_components_constants__WEBPACK_IMPORTED_MODULE_1__.body.append(renderBlockedCard(yellowColor));
    _global_components_constants__WEBPACK_IMPORTED_MODULE_1__.body.append(renderPlusTwoCard(greenColor));
    _global_components_constants__WEBPACK_IMPORTED_MODULE_1__.body.append(renderPlusFourCard());
    _global_components_constants__WEBPACK_IMPORTED_MODULE_1__.body.append(renderMultiCard());
    _global_components_constants__WEBPACK_IMPORTED_MODULE_1__.body.append(renderBackSide(0.5));
});


/***/ }),

/***/ "./src/components/chat/chat.ts":
/*!*************************************!*\
  !*** ./src/components/chat/chat.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderChat": () => (/* binding */ renderChat),
/* harmony export */   "renderChatButton": () => (/* binding */ renderChatButton)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds */ "./src/components/sounds.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controller */ "./src/controller.ts");
// import { showReverseAnimation } from '../animated-items/animated-items';



var openChat = function () {
    document.querySelector('.chat').classList.add('open');
    void _sounds__WEBPACK_IMPORTED_MODULE_1__.chatSound.play();
};
var renderChat = function () {
    var chat = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'chat');
    var header = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'chat-header');
    var headerBtn = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-cross', 'button', 'x');
    headerBtn.classList.add('chat-close-btn');
    header.textContent = 'Chat';
    var chatWindow = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'chat-window');
    var messageList = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'message-list');
    var chatInput = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'chat-input');
    var messageInput = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'message-input');
    messageInput.type = 'text';
    var button = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('chat-send-btn', 'button', 'Send');
    button.addEventListener('click', function () {
        _controller__WEBPACK_IMPORTED_MODULE_2__["default"].webSocket.send(JSON.stringify({ action: 'CHAT_MESSAGE',
            data: document.querySelector('.message-input').value }));
        document.querySelector('.message-input').value = '';
    });
    messageInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && document.querySelector('.message-input').value.length > 0) {
            button.click();
        }
    });
    chatInput.append(messageInput, button);
    chatWindow.append(messageList);
    header.append(headerBtn);
    chat.append(header, chatWindow, chatInput);
    headerBtn.addEventListener('click', function () {
        chat.classList.remove('open');
    });
    return chat;
};
var renderChatButton = function () {
    var chatBtn = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('chat-btn', 'button', '');
    var chatLogo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('chat-logo', '../../assets/img/chat.png', 'chat-logo');
    chatBtn.append(chatLogo);
    chatBtn.addEventListener('click', openChat);
    // chatBtn.addEventListener('click', showRandomColor);
    // chatBtn.addEventListener('click', () => {
    //   showReverseAnimation(false);
    // });
    return chatBtn;
};


/***/ }),

/***/ "./src/components/choice-settings/choice.ts":
/*!**************************************************!*\
  !*** ./src/components/choice-settings/choice.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createChoiceContainer": () => (/* binding */ createChoiceContainer)
/* harmony export */ });
/* harmony import */ var _game_field_game_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-field/game-field */ "./src/components/game-field/game-field.ts");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/controller.ts");
/* harmony import */ var _registration_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration/registration */ "./src/components/registration/registration.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router */ "./src/components/router.ts");






var createChoiceContainer = function () {
    var main = document.querySelector('.main');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'choice-container');
    var quantityPlayersBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'choice-quantity');
    var quantutyTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('quantity-title', 'Choose quantity of players');
    var twoPlayers = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createImage)('two', '../assets/img/two.png', 'two players');
    var threePlayers = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createImage)('three', '../assets/img/three.png', 'three players');
    var fourPlayers = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createImage)('four', '../assets/img/four.png', 'four players');
    quantityPlayersBlock.append(twoPlayers, threePlayers, fourPlayers);
    var difficultyTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('difficulty-title', 'Choose difficulty');
    var difficultyBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'choice-difficulty');
    var easyDifficulty = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-easy', 'button', 'easy');
    var hardDifficulty = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-hard', 'button', 'hard');
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-cross', 'button', 'x');
    var btnStartGame = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-start', 'button', 'start');
    difficultyBlock.append(easyDifficulty, hardDifficulty);
    container.append(quantutyTitle, quantityPlayersBlock, difficultyTitle, difficultyBlock, btnStartGame, cross);
    main.append(container);
};
var addMark = function (element) {
    document.querySelectorAll('.choice-quantity .img').forEach(function (item) { return item.classList.remove('mark'); });
    element.classList.toggle('mark');
};
var choiceDifficulty = function (element, opponentClassName) {
    var _a;
    element.classList.add('off');
    (_a = document.querySelector(opponentClassName)) === null || _a === void 0 ? void 0 : _a.classList.remove('off');
};
var showStartGameBtn = function () {
    var quantityPlayers = document.querySelectorAll('.choice-quantity .img');
    var difficultiesBtns = document.querySelectorAll('.choice-difficulty .button');
    var startGameBtn = document.querySelector('.btn-start');
    var x = 0;
    quantityPlayers.forEach(function (item) {
        if (item.classList.contains('mark'))
            x += 1;
    });
    difficultiesBtns.forEach(function (item) {
        if (item.classList.contains('off'))
            x += 1;
    });
    if (x === 2)
        startGameBtn === null || startGameBtn === void 0 ? void 0 : startGameBtn.classList.add('show');
};
var fillGameField = function (quantity) {
    var main = document.querySelector('.main');
    document.querySelector('.opacity').classList.remove('show');
    main.innerHTML = '';
    (0,_game_field_game_field__WEBPACK_IMPORTED_MODULE_0__.createGameField)(quantity);
};
var goToGameField = function () {
    var main = document.querySelector('.main');
    var x = 0;
    document.querySelector('.opacity').classList.remove('show');
    if (document.querySelector('.two').classList.contains('mark'))
        x += 2;
    if (document.querySelector('.three').classList.contains('mark'))
        x += 3;
    if (document.querySelector('.four').classList.contains('mark'))
        x += 4;
    main.innerHTML = '';
    fillGameField(x);
    (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.addButtonBackToMainPage)();
    (0,_header_header__WEBPACK_IMPORTED_MODULE_1__.createButtonResults)();
    _controller__WEBPACK_IMPORTED_MODULE_3__["default"].createNewGameWithComputer(x);
};
document.addEventListener('click', function (e) {
    var element = e.target;
    if (element.closest('.choice-quantity .two')) {
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].url.searchParams.set('numberOfPlayers', '2');
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].setState('single-player');
        addMark(element);
        showStartGameBtn();
        localStorage.setItem('players', '2');
    }
    if (element.closest('.choice-quantity .three')) {
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].url.searchParams.set('numberOfPlayers', '3');
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].setState('single-player');
        addMark(element);
        showStartGameBtn();
        localStorage.setItem('players', '3');
    }
    if (element.closest('.choice-quantity .four')) {
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].url.searchParams.set('numberOfPlayers', '4');
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].setState('single-player');
        addMark(element);
        showStartGameBtn();
        localStorage.setItem('players', '4');
    }
    if (element.closest('.btn-easy')) {
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].url.searchParams.set('difficult', 'easy');
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].setState('single-player');
        choiceDifficulty(element, '.btn-hard');
        showStartGameBtn();
    }
    if (element.closest('.btn-hard')) {
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].url.searchParams.set('difficult', 'hard');
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].setState('single-player');
        choiceDifficulty(element, '.btn-easy');
        showStartGameBtn();
    }
    if (element.closest('.btn-start')) {
        goToGameField();
        (0,_registration_registration__WEBPACK_IMPORTED_MODULE_4__.removeRegistrationContainer)();
        (0,_game_field_game_field__WEBPACK_IMPORTED_MODULE_0__.showDistributionCardsForPlayers)(+localStorage.getItem('players'));
        (0,_game_field_game_field__WEBPACK_IMPORTED_MODULE_0__.moveCardToPlayer)();
    }
});


/***/ }),

/***/ "./src/components/data.ts":
/*!********************************!*\
  !*** ./src/components/data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "langData": () => (/* binding */ langData)
/* harmony export */ });
var langData = {
    'en': {
        'rules-goal-title': 'The aim:',
        'rules-goal-text': 'to be the first to play all of one`s own cards.',
        'rules-play-title': 'How to play',
        'rules-play-text': 'On your turn, you should play one card matching the discard in color, number, or symbol. If you have no a matching card, draw the top card from the deck, and play it if possible. When you play your penultimate card you must call `Uno!`. If you don\'t not call `Uno` and is caught before the next player in sequence starts to take a turn, you must draw two cards as a penalty.',
        'rules-points-title': 'Scoring',
        'rules-points-text': 'The first player to get rid of their last card wins the hand and scores points for the cards held by the other players. The first player to score 250 points wins the game.',
        'numbered-card-title': 'Number card',
        'plustwo-card-title': 'Draw Two',
        'plusfour-card-title': 'Wild Draw Four',
        'reverse-card-title': 'Reverse',
        'blocked-card-title': 'Skip',
        'multi-card-title': 'Wild',
        'numbered-card-descr': 'Card is played if it`s matche the discard in color or number.',
        'plustwo-card-descr': 'Next player in sequence draws two cards and misses a turn. If Draw Two card is played, and the following player has a card with the same symbol, he can`t play that card and `stack` the penalty, which adds to the current penalty and passes it to the following player.',
        'plusfour-card-descr': 'Player declares the next color to be matched; next player in sequence draws four cards and misses a turn. May be legally played only if the player has no cards of the current color. If Wild Draw Four card is played, and the following player has a card with the same symbol, he can`t play that card and `stack` the penalty, which adds to the current penalty and passes it to the following player.  Effect as first discard: card is returned to the deck, then a new card is laid down into the discard pile.',
        'reverse-card-descr': 'Order of play switches directions.',
        'blocked-card-descr': 'Next player in sequence misses a turn.',
        'multi-card-descr': 'Player declares the next color to be matched. The next player should play one card in declared color or any Wild Card. This card may be legally played only if the player has no cards of the current color.',
        'numbered-card-points': 'Value: it counts it`s face value.',
        'action-card-points': 'Value: 20 points.',
        'black-card-points': 'Value: 50 points.',
        'btn-play-comp': 'Play against computer',
        'btn-play-online': 'Online game',
        'btn-rules': 'How to play',
        'btn-developed': 'Developed by',
        'btn-share': 'Share',
        'btn-sound-on': 'Sound on',
        'btn-sound-off': 'Sound off',
        'btn-music-on': 'Music on',
        'btn-music-off': 'Music off',
        'btn-ru': 'RU',
        'btn-eng': 'ENG',
        'btn-main-page': 'MAIN PAGE',
        'btn-rules-page': 'RULES',
        'btn-winners-page': 'RESULTS',
    },
    'ru': {
        'rules-goal-title': 'Цель игры',
        'rules-goal-text': 'избавиться от всех карт быстрее противников.',
        'rules-play-title': 'Механика игры',
        'rules-play-text': 'В свой ход положи карту в игровую колоду, при этом карта должна совпадать с верхней картой в игровой колоде по цвету или по картинке. Если у тебя нет подходящей карты, то возьми одну карту из колоды банка и, если она подходит, можешь сделать ход этой картой. Когда кладёшь в сброс свою предпоследнюю карту, нужно сказать «Уно!». Если не сказал этого и остальные игроки заметили это до начала хода следующего игрока, то берешь 2 карты из основной колоды.',
        'rules-points-title': 'Подсчет баллов',
        'rules-points-text': 'Раунд выигрывает игрок, сбросивший все карты первым. Он получает количество баллов, равное сумме стоимости карт противников. Выигрывает игру игрок, первый набравший 250 баллов.',
        'numbered-card-title': 'Карта с цифрой',
        'plustwo-card-title': 'Возьми две',
        'plusfour-card-title': 'Закажи цвет и возьми четыре',
        'reverse-card-title': 'Ход обратно',
        'blocked-card-title': 'Пропусти ход',
        'multi-card-title': 'Закажи цвет',
        'numbered-card-descr': 'Карта кладется при совпадении цвета или цифры.',
        'plustwo-card-descr': 'Cледующий игрок берёт 2 карты из колоды банка и пропускает свой ход. Эту карту следующий игрок не может класть поверх такой же или карты `Закажи цвет и возьми четыре` в целях суммирования.',
        'plusfour-card-descr': 'Закажи цвет и следующий игрок берёт 4 карты и пропускает ход. Эту карту следующий игрок не может класть поверх такой же или карты `Возьми две` в целях суммирования. Ей нельзя ходить, если есть карта, по цвету совпадающая с верхней картой в игровой колоде. Если это первая карта в игре — она возвращается в колоду и берется другая карта.',
        'reverse-card-descr': 'Направление хода меняется',
        'blocked-card-descr': 'Cледующий по направлению игры игрок пропускает ход.',
        'multi-card-descr': 'Закажи цвет и следующий игрок должен сделать ход либо картой заказанного цвета, либо карту с чёрным фоном. Этой картой нельзя ходить, если есть карта, по цвету совпадающая с верхней картой в игровой колоде.',
        'numbered-card-points': 'Стоимость: по значению на карте',
        'action-card-points': 'Стоимость: 20 баллов',
        'black-card-points': 'Стоимость: 50 баллов',
        'btn-play-comp': 'Играть против компьютера',
        'btn-play-online': 'Онлайн игра',
        'btn-rules': 'Правила игры',
        'btn-developed': 'Разработчики',
        'btn-share': 'Поделиться',
        'btn-sound-on': 'Звук вкл.',
        'btn-sound-off': 'Звук выкл.',
        'btn-music-on': 'Музыка вкл.',
        'btn-music-off': 'Музфка выкл.',
        'btn-ru': 'РУС',
        'btn-eng': 'АНГ',
        'btn-main-page': 'ГЛАВНАЯ СТРАНИЦА',
        'btn-rules-page': 'ПРАВИЛА ИГРЫ',
        'btn-winners-page': 'ТАБЛИЦА РЕЗУЛЬТАТОВ',
    },
};


/***/ }),

/***/ "./src/components/developed-by/developed-by.ts":
/*!*****************************************************!*\
  !*** ./src/components/developed-by/developed-by.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDevelopedByContainer": () => (/* binding */ createDevelopedByContainer)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");

var createFooterLinksContainer = function () {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'links-container');
    var linkKirill = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createLink)('kirill-link', 'https://github.com/kirilldemyanenko', 'Team Lead Kirill');
    var ghKirill = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('kirill', '../assets/img/github-logo.svg', 'kirill');
    linkKirill.append(ghKirill);
    var linkAnneli = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createLink)('kirill-link', 'https://github.com/Anneli-sf', 'Anneli');
    var ghAnneli = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('anneli', '../assets/img/github-logo.svg', 'anneli');
    linkAnneli.append(ghAnneli);
    var linkAlex = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createLink)('kirill-link', 'https://github.com/MaestroFront', 'Alex');
    var ghAlex = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('alex', '../assets/img/github-logo.svg', 'alex');
    linkAlex.append(ghAlex);
    container.append(linkKirill, linkAnneli, linkAlex);
    return container;
};
var createDevelopedByContainer = function () {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'developed-by');
    var hide = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'opacity');
    var title = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('developed-title', 'Developed by');
    var logo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('team-logo', '../assets/img/team.png', 'team-logo');
    var version = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'version');
    version.textContent = 'ver 1.01';
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-cross', 'button', 'х');
    container.append(title, logo, createFooterLinksContainer(), version, cross);
    hide.append(container);
    return hide;
};
document.addEventListener('click', function (e) {
    var element = e.target;
    if (element.closest('.developed-by .btn-cross'))
        (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.hideDevelopedByBlock)();
});


/***/ }),

/***/ "./src/components/exit-window/exit-window.ts":
/*!***************************************************!*\
  !*** ./src/components/exit-window/exit-window.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createExitWindow": () => (/* binding */ createExitWindow)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");

var createExitWindow = function () {
    var main = document.querySelector('.main');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'exit-container');
    var question = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'question');
    question.textContent = 'Вы хотите покинуть игру?\nДанные будут утеряны';
    var btnContainer = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'exit-btns-container');
    var btnYes = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-yes', 'button', 'yes');
    var btnNo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-no', 'button', 'no');
    btnContainer.append(btnYes, btnNo);
    container.append(question, btnContainer);
    main.append(container);
};


/***/ }),

/***/ "./src/components/footer/footer.ts":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat/chat */ "./src/components/chat/chat.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
// import { chooseColor } from '../animated-items/animated-items';


var createFooter = function () {
    var footer = document.querySelector('.footer');
    var btnDevelopedBy = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('btn-developed', 'button', 'developed by');
    var btnShare = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('btn-share', 'button', 'share');
    // const btnTest = createButton('btn-test', 'button', 'test'); //----------УДАЛИТЬ
    btnShare.onclick = function () {
        if (navigator.share) {
            navigator
                .share({
                title: 'Игра UNO',
                text: 'Тебе давно уже пора заняться чем-то по истинне крутым.',
                url: window.location.href,
            })
                .then(function () { return console.log('Удалось поделиться'); })
                .catch(function (error) { return console.log('Не удалось поделиться', error); });
        }
    };
    // btnTest.addEventListener('click', chooseColor); //----------УДАЛИТЬ
    footer.append(btnDevelopedBy, btnShare, (0,_chat_chat__WEBPACK_IMPORTED_MODULE_0__.renderChatButton)());
};


/***/ }),

/***/ "./src/components/game-field/game-animation.ts":
/*!*****************************************************!*\
  !*** ./src/components/game-field/game-animation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCardFromDeck": () => (/* binding */ getCardFromDeck),
/* harmony export */   "moveCurrCard": () => (/* binding */ moveCurrCard)
/* harmony export */ });
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sounds */ "./src/components/sounds.ts");

var moveCurrCard = function (e) {
    var el = e.target;
    var currCard = el.parentElement.parentElement;
    if (el.closest('.cardCenter')) {
        var currCardKeyframes = new KeyframeEffect(currCard, [
            { transform: 'translate(0%, 0%)' },
            { transform: 'translate(50%, -50%)' },
        ], { duration: 300, fill: 'none' });
        var moveCardAnimation = new Animation(currCardKeyframes, document.timeline);
        moveCardAnimation.play();
    }
};
var getCardFromDeck = function (e, playerNumber) {
    var card = document.querySelector('.get-card');
    var clickedCard = e.target;
    var player = {};
    switch (playerNumber) {
        case 'top':
            {
                player = { transform: 'translate(100%, -90%) rotate(180deg)' };
            }
            break;
        case 'left':
            {
                player = { transform: 'translate(-250%, 0%) rotate(90deg)' };
            }
            break;
        case 'right':
            {
                player = { transform: 'translate(300%, 0%) rotate(90deg)' };
            }
            break;
        default:
            {
                player = { transform: 'translate(100%, 160%) rotateY(-180deg)' };
            }
            break;
    }
    if (clickedCard.closest('.back-side')) {
        var currCardKeyframes = new KeyframeEffect(card, [
            { transform: 'translate(0%, 0%) rotateY(0deg) rotateX(90deg)' },
            player,
        ], { duration: 1000, fill: 'none' });
        var moveCardAnimation = new Animation(currCardKeyframes, document.timeline);
        moveCardAnimation.play();
        void (0,_sounds__WEBPACK_IMPORTED_MODULE_0__.getCardSoundPlay)();
    }
};


/***/ }),

/***/ "./src/components/game-field/game-field.ts":
/*!*************************************************!*\
  !*** ./src/components/game-field/game-field.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameField": () => (/* binding */ createGameField),
/* harmony export */   "moveCardToPlayer": () => (/* binding */ moveCardToPlayer),
/* harmony export */   "searchCompName": () => (/* binding */ searchCompName),
/* harmony export */   "showDistributionCardsForPlayers": () => (/* binding */ showDistributionCardsForPlayers)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controller */ "./src/controller.ts");
/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/cards */ "./src/components/cards/cards.ts");
/* harmony import */ var _game_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-animation */ "./src/components/game-field/game-animation.ts");
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat/chat */ "./src/components/chat/chat.ts");
/* harmony import */ var _animated_items_animated_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animated-items/animated-items */ "./src/components/animated-items/animated-items.ts");






var playerField = function (playerClassName, playerName) {
    var block = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', playerClassName);
    block.id = playerClassName;
    var cardsBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'cards');
    var title = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('player-name', playerName);
    title.id = "name-".concat(playerClassName);
    block.append(cardsBlock, title);
    return block;
};
var randomInteger = function (min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};
var searchCompName = function () {
    var index = randomInteger(0, 100);
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f08c55ce57mshc3c9f532922130dp1f003bjsne89605faeaff',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        },
    };
    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=100', options)
        .then(function (response) { return response.json(); })
        .then(function (response) { return localStorage.setItem('player', "".concat(response.data[index].first_name + ' ' + response.data[index].last_name)); })
        .catch(function (err) { return console.error(err); });
    return localStorage.getItem('player');
};
var createRhomb = function () {
    var xmlns = 'http://www.w3.org/2000/svg';
    var rhomb = document.createElementNS(xmlns, 'svg');
    rhomb.classList.add('rhomb');
    rhomb.setAttributeNS(null, 'viewBox', '0 0 512 512');
    var path = document.createElementNS(xmlns, 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M113.289264,70.6225973 L368.951995,70.6225973 C392.516145,70.6225973 411.618662,89.7251147 411.618662,113.289264 L411.618662,368.951995 C411.618662,392.516145 392.516145,411.618662 368.951995,411.618662 L113.289264,411.618662 C89.7251147,411.618662 70.6225973,392.516145 70.6225973,368.951995 L70.6225973,113.289264 C70.6225973,89.7251147 89.7251147,70.6225973 113.289264,70.6225973 Z');
    path.setAttribute('transform', 'rotate(45 230.6 266.521)');
    rhomb.append(path);
    return rhomb;
};
var renderOneCard = function (element) {
    var card = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'get-card');
    card.id = 'get-card';
    card.style.display = 'flex';
    card.style.position = 'relative';
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 1s';
    card.style.right = '-18px';
    var front = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'front');
    var back = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'back');
    back.append((0,_cards_cards__WEBPACK_IMPORTED_MODULE_2__.renderBackSide)(0.25));
    front.append(element);
    card.append(back, front);
    return card;
};
var renderDeck = function () {
    var deck = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'deck');
    var fullDeck = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'full-deck');
    for (var i = 0; i < 5;) {
        var card = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'card');
        card.append((0,_cards_cards__WEBPACK_IMPORTED_MODULE_2__.renderBackSide)(0.25));
        card.style.right = "".concat(i * 5, "px");
        fullDeck.append(card);
        i++;
    }
    var lastCard = renderOneCard((0,_cards_cards__WEBPACK_IMPORTED_MODULE_2__.renderCardWithNumber)('8', _cards_cards__WEBPACK_IMPORTED_MODULE_2__.yellowColor, 0.25));
    // lastCard.classList.add('last-card');
    fullDeck.append(lastCard);
    deck.append(fullDeck);
    return deck;
};
var createGameField = function (quantity) {
    var main = document.querySelector('.main');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'game-field');
    if (quantity === 2) {
        container.append(playerField('player-1', 'player 1'), playerField('player-2', 'player 2'));
    }
    if (quantity === 3) {
        container.append(playerField('player-1', 'player 1'), playerField('player-2', 'player 2'), playerField('player-3', 'player 3'));
    }
    if (quantity === 4) {
        container.append(playerField('player-1', 'player 1'), playerField('player-2', 'player 2'), playerField('player-3', 'player 3'), playerField('player-4', 'player 4'));
    }
    var field = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'field');
    var deck = renderDeck();
    var currentCard = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'current-card');
    var uno = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('uno', '../assets/img/logo-UNO.png', 'uno');
    field.append(deck, currentCard, createRhomb(), uno);
    container.append(field);
    main.append(container, (0,_chat_chat__WEBPACK_IMPORTED_MODULE_4__.renderChat)(), (0,_animated_items_animated_items__WEBPACK_IMPORTED_MODULE_5__.renderDiamond)(), (0,_animated_items_animated_items__WEBPACK_IMPORTED_MODULE_5__.renderReverseMessage)());
    /* мои подключени */
    deck.addEventListener('click', function (e) {
        (0,_game_animation__WEBPACK_IMPORTED_MODULE_3__.getCardFromDeck)(e, 'bottom'); //TODO..анимация карты в зависимости от позиции игрока: top, bottom, left, right
        _controller__WEBPACK_IMPORTED_MODULE_1__["default"].webSocket.send(JSON.stringify({ action: 'GET_CARD_BY_USER', data: '' }));
    });
};
var showDistributionCardsForPlayers = function (quantityOfPlayers) {
    var deck = document.querySelector('.deck');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'cards-container');
    for (var i = 0; i < quantityOfPlayers * 7; i++) {
        var card = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'card-distribution');
        card.append((0,_cards_cards__WEBPACK_IMPORTED_MODULE_2__.renderBackSide)(0.25));
        container.append(card);
    }
    deck.append(container);
};
function sliceIntoChunks(arr, chunkSize) {
    var res = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        var chunk = Array.from(arr).slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
var hideDistributionCards = function () {
    var cards = document.querySelectorAll('.card-distribution');
    cards.forEach(function (card) { return card.classList.add('hide-card'); });
    setTimeout(function () { var _a; return (_a = document.querySelector('.cards-container')) === null || _a === void 0 ? void 0 : _a.remove(); }, 3000);
};
var showCards = function () {
    var cards = document.querySelectorAll('.cards');
    cards === null || cards === void 0 ? void 0 : cards.forEach(function (card) { return card.classList.add('show'); });
};
var showPlayersNames = function () {
    var names = document.querySelectorAll('.player-name');
    names.forEach(function (name) { return name.classList.add('show'); });
};
var moveCardToPlayer = function () {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    var cards = document.querySelectorAll('.card-distribution');
    var newCards = sliceIntoChunks(cards, 7);
    newCards[0].reverse().forEach(function (card, index) {
        setTimeout(function () {
            card.style.transform = "translate(".concat(index * 70 - 90, "%, 165%) rotateZ(720deg)");
        }, index * 300);
    });
    newCards[1].reverse().forEach(function (card, index) {
        setTimeout(function () {
            card.style.transform = "translate(-345%, ".concat(index * 38 - 115, "%) rotateZ(720deg) rotate(270deg)");
        }, index * 300);
    });
    if (newCards[2]) {
        newCards[2].reverse().forEach(function (card, index) {
            setTimeout(function () {
                card.style.transform = "translate(".concat(index * 70 - 90, "%, -142%) rotateZ(720deg)");
            }, index * 300);
        });
    }
    if (newCards[3]) {
        newCards[3].reverse().forEach(function (card, index) {
            setTimeout(function () {
                card.style.transform = "translate(558%, ".concat(index * 38 - 115, "%) rotateZ(720deg) rotate(90deg)");
            }, index * 300);
        });
    }
    setTimeout(function () {
        hideDistributionCards();
        showCards();
        showPlayersNames();
    }, 5000);
};


/***/ }),

/***/ "./src/components/global-components/constants.ts":
/*!*******************************************************!*\
  !*** ./src/components/global-components/constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body)
/* harmony export */ });
var body = document.querySelector('.body');


/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButtonResults": () => (/* binding */ createButtonResults),
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _registration_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration/registration */ "./src/components/registration/registration.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local-storage */ "./src/components/local-storage.ts");
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds */ "./src/components/sounds.ts");
// import { body } from '../global-compomemts/constants';




var changeLanguage = function () {
    var btnLang = document.querySelector('.btn-lang');
    if (btnLang.classList.contains('off')) {
        btnLang.classList.remove('off');
        btnLang.textContent = 'en';
    }
    else {
        btnLang.classList.add('off');
        btnLang.textContent = 'ru';
    }
};
var toggleMusic = function () {
    var btnMusicVolume = document.querySelector('.btn-music');
    btnMusicVolume.classList.toggle('off');
    if (btnMusicVolume.classList.contains('off')) {
        btnMusicVolume.textContent = 'music OFF';
        void (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.musicStop)();
    }
    else {
        btnMusicVolume.textContent = 'music ON';
        void (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.musicPlay)();
    }
    localStorage.setItem('music', btnMusicVolume.textContent);
};
var toggleSounds = function () {
    var btnSoundsVolume = document.querySelector('.btn-sounds');
    btnSoundsVolume.classList.toggle('off');
    if (btnSoundsVolume.classList.contains('off')) {
        btnSoundsVolume.textContent = 'sound OFF';
        (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.offSounds)();
    }
    else {
        btnSoundsVolume.textContent = 'sound ON';
        (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.onSounds)();
    }
    localStorage.setItem('sounds', btnSoundsVolume.textContent);
};
var createBtnsHeaderContainer = function () {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'btns-container');
    var btnLang = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-lang', 'button', 'en');
    btnLang.addEventListener('click', changeLanguage);
    var btnMusicVolume = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-music', 'button', '');
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setBtnText)(btnMusicVolume, 'music', 'music ON');
    (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.setMusic)(btnMusicVolume);
    btnMusicVolume.addEventListener('click', function () {
        toggleMusic();
    });
    var btnSoundsVolume = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-sounds', 'button', 'sound ON');
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setBtnText)(btnSoundsVolume, 'sounds', 'sound ON');
    (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.setSounds)(btnSoundsVolume);
    btnSoundsVolume.addEventListener('click', function () {
        toggleSounds();
    });
    container.append(btnLang, btnMusicVolume, btnSoundsVolume);
    return container;
};
var createButtonResults = function () {
    var mainPageButton = document.querySelector('.btn-main-page');
    var results = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-results', 'button', 'table results');
    mainPageButton.after(results);
};
var createHeader = function () {
    var header = document.querySelector('.header');
    var returnBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'return-block');
    var settings = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('settings', '../assets/img/settings.png', 'settings');
    header.append(returnBlock, createBtnsHeaderContainer(), settings);
    if (!location.hash.includes('rules'))
        (0,_registration_registration__WEBPACK_IMPORTED_MODULE_1__.createRegistrationContainer)();
    return header;
};


/***/ }),

/***/ "./src/components/helpers/helpers.ts":
/*!*******************************************!*\
  !*** ./src/components/helpers/helpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonBackToMainPage": () => (/* binding */ addButtonBackToMainPage),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createInput": () => (/* binding */ createInput),
/* harmony export */   "createLink": () => (/* binding */ createLink),
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "createParagraph": () => (/* binding */ createParagraph),
/* harmony export */   "createSpan": () => (/* binding */ createSpan),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "hideDevelopedByBlock": () => (/* binding */ hideDevelopedByBlock)
/* harmony export */ });
/* harmony import */ var _developed_by_developed_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../developed-by/developed-by */ "./src/components/developed-by/developed-by.ts");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.ts");
/* harmony import */ var _main_page_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-page/main-page */ "./src/components/main-page/main-page.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.ts");




var createElement = function (tagName, className) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    return element;
};
var createPage = function () {
    document.body.innerHTML = '';
    var body = document.querySelector('.body');
    var header = createElement('header', 'header');
    var main = createElement('main', 'main');
    var footer = createElement('footer', 'footer');
    body.append(header, main, footer, (0,_developed_by_developed_by__WEBPACK_IMPORTED_MODULE_0__.createDevelopedByContainer)());
    (0,_header_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
    (0,_main_page_main_page__WEBPACK_IMPORTED_MODULE_2__.createMainPage)();
    (0,_footer_footer__WEBPACK_IMPORTED_MODULE_3__.createFooter)();
};
var createImage = function (className, src, alt) {
    var element = document.createElement('img');
    element.classList.add('img');
    element.classList.add(className);
    element.src = src;
    element.alt = alt;
    return element;
};
var createButton = function (className, type, buttonText) {
    var element = document.createElement('button');
    element.classList.add('button');
    element.classList.add(className);
    element.type = type;
    element.textContent = buttonText;
    return element;
};
var createLink = function (className, href, title) {
    var element = document.createElement('a');
    element.classList.add('link');
    element.classList.add(className);
    element.href = href;
    element.dataset.title = title;
    element.target = '_blank';
    return element;
};
var createParagraph = function (className, text) {
    var element = document.createElement('p');
    element.classList.add(className);
    element.textContent = text;
    return element;
};
var createSpan = function (className, text) {
    var element = document.createElement('span');
    element.classList.add(className);
    element.textContent = text;
    return element;
};
var createInput = function (className, type, placeholder) {
    var element = document.createElement('input');
    element.classList.add(className);
    element.type = type;
    element.placeholder = placeholder;
    return element;
};
var addButtonBackToMainPage = function () {
    var btn = createButton('btn-main-page', 'button', 'main page');
    var returnBlock = document.querySelector('.return-block');
    returnBlock.append(btn);
};
var hideDevelopedByBlock = function () {
    document.querySelector('.opacity').classList.remove('show');
    document.querySelector('.developed-by').classList.remove('show');
};
var getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
};


/***/ }),

/***/ "./src/components/local-storage.ts":
/*!*****************************************!*\
  !*** ./src/components/local-storage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBtnText": () => (/* binding */ setBtnText)
/* harmony export */ });
var setBtnText = function (el, name, defaultName) {
    if (localStorage.getItem(name)) {
        el.textContent = localStorage.getItem(name);
    }
    else {
        el.textContent = defaultName;
        localStorage.setItem(name, el.textContent);
    }
};


/***/ }),

/***/ "./src/components/main-page/main-page.ts":
/*!***********************************************!*\
  !*** ./src/components/main-page/main-page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainPage": () => (/* binding */ createMainPage),
/* harmony export */   "showChoiceContainer": () => (/* binding */ showChoiceContainer)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _choice_settings_choice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../choice-settings/choice */ "./src/components/choice-settings/choice.ts");
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat/chat */ "./src/components/chat/chat.ts");
/* harmony import */ var _registration_registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registration/registration */ "./src/components/registration/registration.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router */ "./src/components/router.ts");
/* harmony import */ var _exit_window_exit_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exit-window/exit-window */ "./src/components/exit-window/exit-window.ts");






var createChoiceGameContainer = function () {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'choice-game');
    var btnPlayWithComp = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-computer', 'button', 'play against computer');
    var btnMultiplayer = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-multiplayer', 'button', 'multiplayer');
    var btnRules = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-rules', 'button', 'learn, how to play');
    container.append(btnPlayWithComp, btnMultiplayer, btnRules);
    btnRules.addEventListener('click', function () {
        var _a;
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].setState('rules');
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].checkPage();
        (_a = document.querySelector('.registration-container')) === null || _a === void 0 ? void 0 : _a.remove();
    });
    return container;
};
var createMainPage = function () {
    var main = document.querySelector('.main');
    var logo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('logo', '../assets/img/logo-UNO.png', 'logo');
    if ('404' !== window.history.state) {
        main === null || main === void 0 ? void 0 : main.append(logo, createChoiceGameContainer(), (0,_chat_chat__WEBPACK_IMPORTED_MODULE_2__.renderChat)());
    }
    else {
        var div = document.createElement('div');
        div.className = 'page-404';
        div.innerText = '404';
        main === null || main === void 0 ? void 0 : main.append(logo, div);
    }
    return main;
};
var showDevelopedByBlock = function () {
    document.querySelector('.opacity').classList.add('show');
    document.querySelector('.developed-by').classList.add('show');
};
var hideSettings = function (element) {
    document.querySelector('.header .btns-container').classList.remove('show');
    element.style.transform = 'scale(1)';
};
var showSettings = function (element) {
    element.style.transform = 'scale(0)';
    document.querySelector('.header .btns-container').classList.add('show');
    setTimeout(function () { return hideSettings(element); }, 5000);
};
var removeChoiceContainer = function () {
    var choiceContainer = document.querySelector('.choice-container');
    choiceContainer === null || choiceContainer === void 0 ? void 0 : choiceContainer.remove();
    document.querySelector('.opacity').classList.remove('show');
};
var showChoiceContainer = function () {
    document.querySelector('.opacity').classList.add('show');
    (0,_choice_settings_choice__WEBPACK_IMPORTED_MODULE_1__.createChoiceContainer)();
};
var goToMainPage = function (main, element) {
    var resultsBtn = document.querySelector('.btn-results');
    if (resultsBtn)
        resultsBtn.remove();
    main.innerHTML = '';
    element.remove();
    createMainPage();
    _router__WEBPACK_IMPORTED_MODULE_4__["default"].setState('home');
    _router__WEBPACK_IMPORTED_MODULE_4__["default"].checkPage();
};
document.addEventListener('click', function (e) {
    var _a, _b;
    var main = document.querySelector('.main');
    var element = e.target;
    if (element.closest('.btn-developed'))
        showDevelopedByBlock();
    if (element.closest('.settings'))
        showSettings(element);
    if (element.closest('.btn-computer')) {
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].setState('single-player');
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].checkPage();
    }
    if (element.closest('.choice-container .btn-cross')) {
        removeChoiceContainer();
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].url.searchParams["delete"]('difficult');
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].url.searchParams["delete"]('numberOfPlayers');
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].setState('home');
    }
    if (element.closest('.btn-main-page')) {
        if (document.querySelector('.game-field')) {
            document.querySelector('.opacity').classList.add('show');
            (0,_exit_window_exit_window__WEBPACK_IMPORTED_MODULE_5__.createExitWindow)();
        }
        else {
            goToMainPage(main, element);
            if (!document.querySelector('.registration-container'))
                (0,_registration_registration__WEBPACK_IMPORTED_MODULE_3__.createRegistrationContainer)();
        }
    }
    if (element.closest('.btn-yes')) {
        document.querySelector('.opacity').classList.remove('show');
        goToMainPage(main, element);
        if (!document.querySelector('.registration-container'))
            (0,_registration_registration__WEBPACK_IMPORTED_MODULE_3__.createRegistrationContainer)();
    }
    if (element.closest('.btn-no')) {
        document.querySelector('.opacity').classList.remove('show');
        (_b = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    }
});


/***/ }),

/***/ "./src/components/registration/registration.ts":
/*!*****************************************************!*\
  !*** ./src/components/registration/registration.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRegOrLogWindow": () => (/* binding */ createRegOrLogWindow),
/* harmony export */   "createRegistrationContainer": () => (/* binding */ createRegistrationContainer),
/* harmony export */   "removeRegistrationContainer": () => (/* binding */ removeRegistrationContainer)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./src/components/router.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controller */ "./src/controller.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var createRegistrationContainer = function () {
    var header = document.querySelector('.header');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'registration-container');
    if (document.cookie.includes('user=')) {
        var div = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'user-logged');
        var p = document.createElement('p');
        p.innerText = "LOGIN AS ".concat(document.cookie.split(';').filter(function (value) { return value.includes('user='); })[0].replace('user=', ''));
        var button = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'button', 'sign out');
        button.addEventListener('click', function () {
            document.cookie = document.cookie.split(';').map(function (value) {
                return value.includes('user=')
                    ? value.concat(';max-age=-1;')
                    : value;
            }).join('');
            _router__WEBPACK_IMPORTED_MODULE_1__["default"].setState('home');
            _router__WEBPACK_IMPORTED_MODULE_1__["default"].checkPage();
        });
        div.append(p, button);
        container.append(div);
    }
    else {
        var registrationBtn = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-reg', 'button', 'registration');
        var loginBtn = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-log', 'button', 'login');
        container.append(registrationBtn, loginBtn);
    }
    header.prepend(container);
};
var createRegOrLogWindow = function (method) {
    var main = document.querySelector('.main');
    var form = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', "".concat(method, "-window"));
    var nameBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', "".concat(method, "-name-block"));
    var passwordBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', "".concat(method, "-password-block"));
    var nameTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)("".concat(method, "-name-title"), 'Edit your nickname');
    var inputName = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)("input-".concat(method, "-name"), 'text', '[5 - 10 letters]');
    inputName.pattern = '[A-Za-z]{5,10}';
    inputName.maxLength = 10;
    inputName.oninput = function () { return inputName.value = inputName.value.replace(/[^а-яa-zА-ЯA-Z]/g, ''); };
    var passwordTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)("".concat(method, "-password-title"), 'Edit your password');
    var inputPassword = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)("input-".concat(method, "-password"), 'password', '[5 numbers]');
    inputPassword.pattern = '[0-9]{5}';
    inputPassword.maxLength = 5;
    inputPassword.oninput = function () { return inputPassword.value = inputPassword.value.replace(/[^0-9]/g, ''); };
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-cross', 'button', 'x');
    var submit = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)("btn-submit-".concat(method), 'submit', "".concat(method));
    if (method === 'reg') {
        submit.addEventListener('click', function (ev) { return __awaiter(void 0, void 0, void 0, function () {
            var name, pass, mail, data, fetchOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.preventDefault();
                        name = document.querySelector('.input-reg-name').value;
                        pass = document.querySelector('.input-reg-password').value;
                        mail = document.querySelector('.input-mail').value;
                        data = { userName: name, password: pass, email: mail };
                        fetchOptions = {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        };
                        return [4 /*yield*/, fetch('http://194.158.205.78:9002/registration', fetchOptions)
                                .then(function (res) { return res.json(); })
                                .then(function (obj) {
                                if (obj.status) {
                                    // eslint-disable-next-line no-alert
                                    alert('registered!');
                                    _router__WEBPACK_IMPORTED_MODULE_1__["default"].setState('home');
                                    _router__WEBPACK_IMPORTED_MODULE_1__["default"].checkPage();
                                }
                                else {
                                    // eslint-disable-next-line no-alert
                                    alert('user with this nickname already exist!');
                                }
                            }).catch()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    else {
        submit.addEventListener('click', function (ev) { return __awaiter(void 0, void 0, void 0, function () {
            var name, pass, data, fetchOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.preventDefault();
                        name = document.querySelector('.input-log-name').value;
                        pass = document.querySelector('.input-log-password').value;
                        data = { userName: name, password: pass };
                        fetchOptions = {
                            method: 'post',
                            //mode: 'no-cors' as RequestMode,
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        };
                        return [4 /*yield*/, fetch('http://194.158.205.78:9002/login', fetchOptions)
                                .then(function (res) { return res.json(); })
                                .then(function (obj) {
                                if (obj === null || obj === void 0 ? void 0 : obj.status) {
                                    document.cookie = obj.data;
                                    var cookie = document.cookie.split(';').filter(function (value) { return value.includes('user='); });
                                    _controller__WEBPACK_IMPORTED_MODULE_2__["default"].webSocket.send(JSON.stringify({ action: 'UPDATE_NAME', data: cookie[0].replace('user=', '') }));
                                    _router__WEBPACK_IMPORTED_MODULE_1__["default"].setState('home');
                                    _router__WEBPACK_IMPORTED_MODULE_1__["default"].checkPage();
                                    // eslint-disable-next-line no-alert
                                    alert("You signed in as ".concat(cookie[0].replace('user=', '')));
                                }
                                else {
                                    // eslint-disable-next-line no-alert
                                    alert('Wrong name or password');
                                }
                            }).catch()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    nameBlock.append(nameTitle, inputName);
    passwordBlock.append(passwordTitle, inputPassword);
    form.append(nameBlock, passwordBlock, cross, submit);
    var mailBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'mail-block');
    if (method === 'reg') {
        var mailTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('mail-title', 'Edit your Email');
        var mail = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('input-mail', 'mail', 'ivanovivan@mail.ru');
        mailBlock.append(mailTitle, mail);
        form.append(mailBlock);
    }
    main.append(form);
};
document.addEventListener('click', function (e) {
    var _a, _b;
    var element = e.target;
    if (element.closest('.btn-reg')) {
        document.querySelector('.opacity').classList.add('show');
        createRegOrLogWindow('reg');
    }
    if (element.closest('.reg-window .btn-cross')) {
        document.querySelector('.opacity').classList.remove('show');
        (_a = document.querySelector('.reg-window')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    if (element.closest('.btn-log')) {
        document.querySelector('.opacity').classList.add('show');
        createRegOrLogWindow('log');
    }
    if (element.closest('.log-window .btn-cross')) {
        document.querySelector('.opacity').classList.remove('show');
        (_b = document.querySelector('.log-window')) === null || _b === void 0 ? void 0 : _b.remove();
    }
});
var removeRegistrationContainer = function () {
    var container = document.querySelector('.registration-container');
    container.remove();
};


/***/ }),

/***/ "./src/components/router.ts":
/*!**********************************!*\
  !*** ./src/components/router.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _rules_page_rules_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules-page/rules-page */ "./src/components/rules-page/rules-page.ts");
/* harmony import */ var _main_page_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page */ "./src/components/main-page/main-page.ts");



var Router = /** @class */ (function () {
    function Router() {
    }
    Router.initialize = function () {
        Router.url = new URL(window.location.href);
        switch (Router.url.hash) {
            case '': {
                Router.setState('home');
                break;
            }
            case '#home': {
                Router.setState('home');
                break;
            }
            case '#rules': {
                Router.setState('rules');
                break;
            }
            case '#single-player': {
                Router.setState('single-player');
                break;
            }
            default: {
                Router.setState('404');
                break;
            }
        }
        Router.checkPage();
    };
    Router.setState = function (state) {
        Router.url.hash = state;
        window.history.pushState(state, '', Router.url.hash);
    };
    Router.checkPage = function () {
        switch (window.history.state) {
            case 'home': {
                document.body.innerHTML = '';
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)();
                break;
            }
            case 'rules': {
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)();
                (0,_rules_page_rules_page__WEBPACK_IMPORTED_MODULE_1__.openRulesPage)();
                break;
            }
            case 'single-player': {
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)();
                (0,_main_page_main_page__WEBPACK_IMPORTED_MODULE_2__.showChoiceContainer)();
                break;
            }
            case 'multiplayer': {
                break;
            }
            case '404': {
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)();
                break;
            }
            default: {
                Router.setState('404');
                Router.checkPage();
                break;
            }
        }
    };
    return Router;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);


/***/ }),

/***/ "./src/components/rules-page/rules-page.ts":
/*!*************************************************!*\
  !*** ./src/components/rules-page/rules-page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCardBlock": () => (/* binding */ createCardBlock),
/* harmony export */   "createRulesPage": () => (/* binding */ createRulesPage),
/* harmony export */   "openRulesPage": () => (/* binding */ openRulesPage)
/* harmony export */ });
/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/cards */ "./src/components/cards/cards.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");



var flipCard = function (e) {
    var _a;
    var element = e.target;
    var parent = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
    parent.classList.toggle('open');
};
var createCardFront = function (currCard) {
    var cardFront = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-block-front');
    var cardImgWrapper = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-img-wrapper');
    cardImgWrapper.append(currCard);
    var btnReadMore = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-read', 'button', 'read more...');
    cardFront.append(cardImgWrapper, btnReadMore);
    btnReadMore.addEventListener('click', function (e) {
        flipCard(e);
    });
    return cardFront;
};
var createCardBack = function (cardTitle, cardValue, cardText) {
    var cardBack = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-block-back');
    var btnFlip = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-flip', 'button', 'flip card');
    var cardDescription = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-description');
    var title = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('card-title', cardTitle);
    var value = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('card-value', cardValue);
    var text = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('card-text', cardText);
    cardDescription.append(title, value, text);
    btnFlip.addEventListener('click', function (e) {
        flipCard(e);
    });
    cardBack.append(cardDescription, btnFlip);
    return cardBack;
};
var createCardBlock = function (currCard, cardTitle, cardValue, cardText) {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-container');
    container.append(createCardFront(currCard), createCardBack(cardTitle, cardValue, cardText));
    return container;
};
var createCardsDescription = function () {
    var cardsDescription = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'cards-description');
    var numberedCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderCardWithNumber)('8', _cards_cards__WEBPACK_IMPORTED_MODULE_0__.greenColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["numbered-card-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["numbered-card-points"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["numbered-card-descr"]);
    var plusTwoCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderPlusTwoCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_0__.blueColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["plustwo-card-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["action-card-points"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["plustwo-card-descr"]);
    var reverseCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderReverseCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_0__.redColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["reverse-card-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["action-card-points"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["reverse-card-descr"]);
    var blockedCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderBlockedCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_0__.yellowColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["blocked-card-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["action-card-points"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["blocked-card-descr"]);
    var plusFourCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderPlusFourCard)(0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["plusfour-card-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["black-card-points"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["plusfour-card-descr"]);
    var multiCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderMultiCard)(0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["multi-card-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["black-card-points"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["multi-card-descr"]);
    cardsDescription.append(numberedCard, blockedCard, reverseCard, plusTwoCard, multiCard, plusFourCard);
    return cardsDescription;
};
var createRulesParagraph = function (title, text) {
    var rulesBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'rules-description-block');
    var rulesTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('h3', 'rules-description-title');
    rulesTitle.textContent = title;
    var rulesText = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('rules-description-text', text);
    rulesBlock.append(rulesTitle, rulesText);
    return rulesBlock;
};
var createRulesDescription = function () {
    var rulesDescription = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'rules-description');
    rulesDescription.append(createRulesParagraph(_data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["rules-goal-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["rules-goal-text"]));
    rulesDescription.append(createRulesParagraph(_data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["rules-play-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["rules-play-text"]));
    rulesDescription.append(createRulesParagraph(_data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["rules-points-title"], _data__WEBPACK_IMPORTED_MODULE_1__.langData.ru["rules-points-text"]));
    return rulesDescription;
};
var createRulesBlock = function () {
    var rulesBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'rules-wrapper');
    rulesBlock.append(createRulesDescription(), createCardsDescription());
    return rulesBlock;
};
var createRulesPage = function () {
    var main = document.querySelector('.main');
    main.append(createRulesBlock());
};
var openRulesPage = function () {
    var main = document.querySelector('.main');
    main.innerHTML = '';
    (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.addButtonBackToMainPage)();
    createRulesPage();
};


/***/ }),

/***/ "./src/components/sounds.ts":
/*!**********************************!*\
  !*** ./src/components/sounds.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatSound": () => (/* binding */ chatSound),
/* harmony export */   "clickSoundPlay": () => (/* binding */ clickSoundPlay),
/* harmony export */   "getCardSoundPlay": () => (/* binding */ getCardSoundPlay),
/* harmony export */   "getChooseSound": () => (/* binding */ getChooseSound),
/* harmony export */   "getColorSound": () => (/* binding */ getColorSound),
/* harmony export */   "getReverseSound": () => (/* binding */ getReverseSound),
/* harmony export */   "musicPlay": () => (/* binding */ musicPlay),
/* harmony export */   "musicStop": () => (/* binding */ musicStop),
/* harmony export */   "offSounds": () => (/* binding */ offSounds),
/* harmony export */   "onSounds": () => (/* binding */ onSounds),
/* harmony export */   "setMusic": () => (/* binding */ setMusic),
/* harmony export */   "setSounds": () => (/* binding */ setSounds)
/* harmony export */ });
var music = new Audio('../../assets/music/melody.mp3');
var click = new Audio('../../assets/music/click.mp3');
var getCard = new Audio('../../assets/music/one_card.mp3');
var chatSound = new Audio('../../assets/music/chat.mp3');
var getColorSound = new Audio('../../assets/music/color.mp3');
var getReverseSound = new Audio('../../assets/music/revers.mp3');
var getChooseSound = new Audio('../../assets/music/choose.mp3');
var musicPlay = function () {
    // music.autoplay = true;
    if (music.readyState) {
        void music.play();
    }
    music.loop = true;
};
var musicStop = function () {
    void music.pause();
};
var setMusic = function (el) {
    if (el.textContent === 'music ON') {
        musicPlay();
        el.classList.remove('off');
    }
    else {
        musicStop();
        el.classList.add('off');
    }
};
var clickSoundPlay = function () {
    if (click.readyState)
        void click.play();
};
var getCardSoundPlay = function () {
    if (getCard.readyState)
        void getCard.play();
};
//------------sounds on/off
var onSounds = function () {
    click.volume = 1;
    getCard.volume = 1;
    chatSound.volume = 1;
    getColorSound.volume = 1;
    getReverseSound.volume = 1;
    getChooseSound.volume = 1;
};
var offSounds = function () {
    click.volume = 0;
    getCard.volume = 0;
    chatSound.volume = 0;
    getColorSound.volume = 0;
    getReverseSound.volume = 0;
    getChooseSound.volume = 0;
};
var setSounds = function (el) {
    if (el.textContent === 'sound ON') {
        onSounds();
        el.classList.remove('off');
    }
    else {
        offSounds();
        el.classList.add('off');
    }
};


/***/ }),

/***/ "./src/components/table-results/table-results.ts":
/*!*******************************************************!*\
  !*** ./src/components/table-results/table-results.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");


var createResultsListTitle = function () {
    var item = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', 'results-item');
    item.classList.add('results-title');
    var name = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createSpan)('result-player-name', 'nickname');
    var points = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createSpan)('player-points', 'points');
    item.append(name, points);
    return item;
};
var createPlayerResult = function (nickname, points) {
    var player = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', 'results-item');
    var name = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createSpan)('result-player-name', nickname);
    var pointsQuantity = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createSpan)('player-points', "".concat(points));
    player.append(name, pointsQuantity);
    return player;
};
var createResultsTable = function () {
    var main = document.querySelector('.main');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'results-container');
    var list = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', 'results-list');
    list.append(createResultsListTitle());
    list.append(createPlayerResult('Boris', 10), createPlayerResult('Evgeny', 20), createPlayerResult('Jora', 23), createPlayerResult('Alex', 10000), createPlayerResult('Vitya', 2));
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('btn-cross', 'burron', 'x');
    container.append(list, cross);
    main.append(container);
};
document.addEventListener('click', function (e) {
    var _a;
    var element = e.target;
    if (element.closest('.btn-results')) {
        element.remove();
        document.querySelector('.opacity').classList.add('show');
        if (!document.querySelector('.btn-main-page'))
            (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.addButtonBackToMainPage)();
        createResultsTable();
    }
    if (element.closest('.results-container .btn-cross')) {
        document.querySelector('.opacity').classList.remove('show');
        (_a = document.querySelector('.results-container')) === null || _a === void 0 ? void 0 : _a.remove();
        (0,_header_header__WEBPACK_IMPORTED_MODULE_0__.createButtonResults)();
    }
});


/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards/cards */ "./src/components/cards/cards.ts");
/* harmony import */ var _components_sounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sounds */ "./src/components/sounds.ts");
/* harmony import */ var _components_game_field_game_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-field/game-animation */ "./src/components/game-field/game-animation.ts");
/* harmony import */ var _components_animated_items_animated_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/animated-items/animated-items */ "./src/components/animated-items/animated-items.ts");
/* Accepts input and converts it to commands for the model or view. */

// import CardDeck, { cardDeck } from '../../server/src/game/сard_deck';




var Controller = /** @class */ (function () {
    function Controller() {
    }
    /* Controller launch */
    Controller.start = function (port) {
        var _this = this;
        this.webSocket = new WebSocket("ws://194.158.205.78:".concat(port));
        setTimeout(function () {
            if (document.cookie.includes('user=')) {
                var cookie = document.cookie.split(';').filter(function (value) { return value.includes('user='); });
                Controller.webSocket.send(JSON.stringify({ action: 'UPDATE_NAME', data: cookie[0].replace('user=', '') }));
            }
            else {
                Controller.webSocket.send(JSON.stringify({ action: 'WHATS_MY_NAME', data: '' }));
            }
        }, 1000);
        //TODO: Remove this feature after switching to normal maps
        function createSimpleCard(id, color, value) {
            var div = (0,_components_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'simple-card');
            switch (color) {
                case 'blue':
                    {
                        color = _components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.blueColor;
                    }
                    break;
                case 'red':
                    {
                        color = _components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.redColor;
                    }
                    break;
                case 'green':
                    {
                        color = _components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.greenColor;
                    }
                    break;
                default:
                    {
                        color = _components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.yellowColor;
                    }
                    break;
            }
            if (id < 100) {
                var idNum = id % 25;
                if (idNum < 19) {
                    div.append((0,_components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.renderCardWithNumber)(value.toString(), color, 0.25));
                }
                else if (idNum < 21) {
                    div.append((0,_components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.renderPlusTwoCard)(color, 0.25));
                }
                else if (idNum < 23) {
                    div.append((0,_components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.renderReverseCard)(color, 0.25));
                }
                else {
                    div.append((0,_components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.renderBlockedCard)(color, 0.25));
                }
            }
            else if (id > 104) {
                div.append((0,_components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.renderPlusFourCard)(0.25));
            }
            else {
                div.append((0,_components_cards_cards__WEBPACK_IMPORTED_MODULE_1__.renderMultiCard)(0.25));
            }
            div.id = id.toString();
            div.addEventListener('click', function (evt) {
                (0,_components_sounds__WEBPACK_IMPORTED_MODULE_2__.clickSoundPlay)();
                var clickedEl = evt.target.closest('.cardCenter');
                if (clickedEl) {
                    clickedEl.id = id.toString();
                    //console.log(clickedEl.id);
                }
                var user = evt.target.parentElement.className;
                var dataForSent = JSON.stringify({ userName: user, cardId: evt.target.id });
                Controller.webSocket.send(JSON.stringify({ action: 'MOVE_BY_USER', data: dataForSent }));
            });
            return div;
        }
        //TODO: Remove this feature after switching to a pretty window with popup messages
        function showColorSelectWindow() {
            function sentChosenColor(color) {
                Controller.webSocket.send(JSON.stringify({ action: 'USERS_SELECTED_COLOR', data: color }));
            }
            var chosenColor = '';
            var diamond = document.querySelector('.diamond-container');
            diamond.classList.add('choose-color');
            diamond.addEventListener('click', function (e) {
                chosenColor = (0,_components_animated_items_animated_items__WEBPACK_IMPORTED_MODULE_4__.chooseColorAnimation)(e);
                void _components_sounds__WEBPACK_IMPORTED_MODULE_2__.getChooseSound.play();
            });
            console.log('ann - chosen color', chosenColor); //---------------ПУСТО???
            sentChosenColor(chosenColor);
            // const div = document.createElement('div');
            // div.id = 'popup_choose_color';
            // div.style.display = 'flex';
            // div.style.margin = '0 auto';
            // div.style.width = '400px';
            // div.style.top = '25%';
            // div.style.left = '25%';
            // div.style.height = '300px';
            // div.style.zIndex = '999';
            // div.style.position = 'fixed';
            // let button = document.createElement('button');
            // button.innerText = 'green';
            // button.style.backgroundColor = 'green';
            // button.onclick = () => {
            //   (document.querySelector('#popup_choose_color') as HTMLDivElement).remove();
            //   sentChosenColor('green');
            // };
            // div.append(button);
            // button = document.createElement('button');
            // button.innerText = 'blue';
            // button.style.backgroundColor = 'blue';
            // button.onclick = () => {
            //   (document.querySelector('#popup_choose_color') as HTMLDivElement).remove();
            //   sentChosenColor('blue');
            // };
            // div.append(button);
            // button = document.createElement('button');
            // button.innerText = 'red';
            // button.style.backgroundColor = 'red';
            // button.onclick = () => {
            //   (document.querySelector('#popup_choose_color') as HTMLDivElement).remove();
            //   sentChosenColor('red');
            // };
            // div.append(button);
            // button = document.createElement('button');
            // button.innerText = 'yellow';
            // button.style.backgroundColor = 'yellow';
            // button.onclick = () => {
            //   (document.querySelector('#popup_choose_color') as HTMLDivElement).remove();
            //   sentChosenColor('yellow');
            // };
            // div.append(button);
            // document.body.append(div);
        }
        Controller.webSocket.addEventListener('message', function (message) {
            var msg = JSON.parse(message.data);
            switch (msg.action) {
                /* Getting the username assigned on the server */
                case 'YOUR_NAME': {
                    _this.myName = msg.data;
                    break;
                }
                /* Получение карты с сервера */
                case 'GET_CARD': {
                    void (0,_components_sounds__WEBPACK_IMPORTED_MODULE_2__.getCardSoundPlay)();
                    var data = JSON.parse(msg.data);
                    var cardsOnHand = document.querySelector(".".concat(data.player)).firstChild;
                    cardsOnHand.append(createSimpleCard(data.card.id, data.card.color, data.card.value));
                    break;
                }
                /* Receiving a message from the server */
                case 'MESSAGE': {
                    console.log(msg.data);
                    break;
                }
                /* Processing a move */
                case 'MOVE': {
                    (0,_components_sounds__WEBPACK_IMPORTED_MODULE_2__.clickSoundPlay)();
                    var cardsOnHand = document.getElementById('player-1').getElementsByClassName('simple-card');
                    Array.from(cardsOnHand).forEach(function (card) {
                        card.addEventListener('click', function (e) {
                            (0,_components_game_field_game_animation__WEBPACK_IMPORTED_MODULE_3__.moveCurrCard)(e);
                        });
                    });
                    document.querySelector('#last-card').classList.remove('move');
                    var dataMove = JSON.parse(msg.data);
                    document.querySelector('.current-card').innerHTML = '';
                    document.getElementById("".concat(dataMove.topCard.id)).remove();
                    document.querySelector('.current-card').append(createSimpleCard(dataMove.topCard.id, dataMove.topCard.color, dataMove.topCard.value));
                    document.querySelector('.rhomb').style.fill = dataMove.currentColor;
                    break;
                }
                /* Clears the user field with cards */
                case 'UPDATE_CARD': {
                    document.querySelector(".".concat(msg.data)).firstChild.innerHTML = '';
                    break;
                }
                /* Set the names of players and computers on the playing field */
                case 'SET_USERS_LIST': {
                    var usersName = JSON.parse(msg.data);
                    for (var i = 0; i < usersName.length; i++) {
                        document.querySelector("#name-player-".concat(i + 1)).innerText = usersName[i];
                    }
                    break;
                }
                /* User choice of color */
                case 'USER_MUST_CHOOSE_COLOR': {
                    showColorSelectWindow();
                    break;
                }
                /* Pressing the UNO button */
                case 'PUSH_UNO_BUTTON': {
                    document.querySelector('.uno').click();
                    break;
                }
                /* Get round results */
                case 'RESULTS_OF_ROUND': {
                    var results = JSON.parse(msg.data);
                    console.log(results);
                    break;
                }
                case 'CLEAR_FIELD': {
                    document.querySelectorAll('.cards').forEach(function (value) { return value.innerHTML = ''; });
                    document.querySelector('.current-card').innerHTML = '';
                    document.querySelector('.deck').innerHTML = '';
                    break;
                }
                case 'INCOME_CHAT_MESSAGE': {
                    var data = JSON.parse(msg.data);
                    var div = document.createElement('div');
                    div.className = 'chat-message';
                    var p = document.createElement('p');
                    p.innerText = data.userMessage;
                    p.className = 'chat-message-message';
                    div.append(p);
                    p = document.createElement('p');
                    p.innerText = "".concat(data.time);
                    p.className = 'chat-message-time';
                    div.append(p);
                    p = document.createElement('p');
                    p.innerText = "".concat(data.user);
                    p.className = 'chat-message-nickname';
                    div.append(p);
                    document.querySelector('.chat-window').append(div);
                    break;
                }
            }
        });
    };
    /* Sending commands to the server to create a new game */
    Controller.createNewGameWithComputer = function (numberOfPlayers) {
        Controller.webSocket.send(JSON.stringify({ action: 'CREATE_GAME', data: JSON.stringify({ players: numberOfPlayers, online: false }) }));
        Controller.webSocket.send(JSON.stringify({ action: 'GET_USERS_LIST', data: '' }));
    };
    return Controller;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards/cards */ "./src/components/cards/cards.ts");
/* harmony import */ var _components_rules_page_rules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rules-page/rules-page */ "./src/components/rules-page/rules-page.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.ts");
/* harmony import */ var _components_table_results_table_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/table-results/table-results */ "./src/components/table-results/table-results.ts");
/* harmony import */ var _components_choice_settings_choice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/choice-settings/choice */ "./src/components/choice-settings/choice.ts");
/* harmony import */ var _components_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/local-storage */ "./src/components/local-storage.ts");
/* harmony import */ var _components_chat_chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat/chat */ "./src/components/chat/chat.ts");
/* harmony import */ var _components_animated_items_animated_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/animated-items/animated-items */ "./src/components/animated-items/animated-items.ts");
/* harmony import */ var _components_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/router */ "./src/components/router.ts");











window.onload = function () {
    _components_router__WEBPACK_IMPORTED_MODULE_10__["default"].initialize();
    _controller__WEBPACK_IMPORTED_MODULE_1__["default"].start(9001);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VDNU8xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNnQjtBQUNKO0FBQ1U7QUFDUjtBQUNjO0FBQ0w7QUFDVDtBQUNKO0FBQ29CO0FBQ1g7QUFFekMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLHNFQUFpQixFQUFFLENBQUM7SUFDcEIseURBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYW5pbWF0ZWQtaXRlbXMvYW5pbWF0ZWQtaXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMtaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9jYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGF0L2NoYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hvaWNlLXNldHRpbmdzL2Nob2ljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmVsb3BlZC1ieS9kZXZlbG9wZWQtYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXhpdC13aW5kb3cvZXhpdC13aW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lLWZpZWxkL2dhbWUtYW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUtZmllbGQvZ2FtZS1maWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nbG9iYWwtY29tcG9uZW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3J1bGVzLXBhZ2UvcnVsZXMtcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUtcmVzdWx0cy90YWJsZS1yZXN1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1nZXQgcmFuZG9tIGNvbG9yXHJcblxyXG5pbXBvcnQgeyBibHVlQ29sb3IsIGdyZWVuQ29sb3IsIHJlZENvbG9yLCB5ZWxsb3dDb2xvciB9IGZyb20gJy4uL2NhcmRzL2NhcmRzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW1hZ2UsIGdldFJhbmRvbUludCB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCB7IGdldENvbG9yU291bmQsIGdldFJldmVyc2VTb3VuZCB9IGZyb20gJy4uL3NvdW5kcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRGlhbW9uZCA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGlhbW9uZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdkaWFtb25kLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGRpYW1vbmRzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2RpYW1vbmRzJyk7XHJcbiAgY29uc3QgaWRzID0gWydyZWQtZGlhbW9uZCcsICd5ZWxsb3ctZGlhbW9uZCcsICdibHVlLWRpYW1vbmQnLCAnZ3JlZW4tZGlhbW9uZCddO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgY29sb3JlZERpYW1vbmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGlhbW9uZCcpO1xyXG4gICAgY29uc3QgY292ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY292ZXInKTtcclxuICAgIGNvbG9yZWREaWFtb25kLmlkID0gaWRzW2ldO1xyXG4gICAgY29sb3JlZERpYW1vbmQuYXBwZW5kKGNvdmVyKTtcclxuICAgIGRpYW1vbmRzLmFwcGVuZChjb2xvcmVkRGlhbW9uZCk7XHJcbiAgfVxyXG4gIGRpYW1vbmQuYXBwZW5kKGRpYW1vbmRzKTtcclxuICByZXR1cm4gZGlhbW9uZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb2xvckFuaW1hdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjb2xvcnMgPSBbYmx1ZUNvbG9yLCBncmVlbkNvbG9yLCB5ZWxsb3dDb2xvciwgcmVkQ29sb3JdO1xyXG4gIGNvbnN0IGNvbG9yID0gY29sb3JzW2dldFJhbmRvbUludChjb2xvcnMubGVuZ3RoKV07XHJcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFtb25kJykpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnc2h5JykpO1xyXG4gIFxyXG4gIGlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZC1kaWFtb25kJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnc2h5JykpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RpYW1vbmQnKSkuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAoZWwgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIChlbCBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xyXG4gICAgICB9KTtcclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFtb25kJykpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2h5JykpO1xyXG4gICAgfSwgMjAwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbW9uZC1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfSwgMjUwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVkLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2E0YTQnO1xyXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZC1kaWFtb25kJykgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAxcHggMXB4IDIycHggMTZweCByZ2IoMTk0IDE3IDMyKSc7XHJcbiAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS1kaWFtb25kJykgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTRhN2VjJztcclxuICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDFweCAxcHggMjJweCAxNnB4IGRhcmtibHVlJztcclxuICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWxsb3ctZGlhbW9uZCcpIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VjZDJhNCc7XHJcbiAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVsbG93LWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDFweCAxcHggMjJweCAxNnB4ICNGRkMzMDAnO1xyXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWVuLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhNGVjYTcnO1xyXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWVuLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDFweCAxcHggMjJweCAxNnB4ICMyNThmMzcnO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dSYW5kb21Db2xvciA9ICgpID0+IHtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYW1vbmQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICBnZXRDb2xvckFuaW1hdGlvbigpO1xyXG4gIHZvaWQgZ2V0Q29sb3JTb3VuZC5wbGF5KCk7XHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWdldCByZXZlcnNlXHJcbmV4cG9ydCBjb25zdCByZW5kZXJSZXZlcnNlTWVzc2FnZSA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgcmV2ZXJzZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdyZXZlcnNlLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IHJldmVyc0NXID0gY3JlYXRlSW1hZ2UoJ3JldmVyc2UtcmlnaHQnLCAnLi4vLi4vYXNzZXRzL2ltZy9yZXZlcnMtcmlnaHQucG5nJywgJ3JldmVyc2UnKTtcclxuICBjb25zdCByZXZlcnNDQ1cgPSBjcmVhdGVJbWFnZSgncmV2ZXJzZS1sZWZ0JywgJy4uLy4uL2Fzc2V0cy9pbWcvcmV2ZXJzLWxlZnQucG5nJywgJ3JldmVyc2UnKTtcclxuXHJcbiAgcmV2ZXJzZS5hcHBlbmQocmV2ZXJzQ1csIHJldmVyc0NDVyk7XHJcbiAgcmV0dXJuIHJldmVyc2U7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VEaXJlY3Rpb24gPSAocmV2ZXJzZTogYm9vbGVhbikgPT4ge1xyXG4gIGxldCBkaXJlY3Rpb247XHJcbiAgbGV0IHR1cm47XHJcbiAgY29uc3QgY2xvY2tXaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmVyc2UtcmlnaHQnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIGNvbnN0IGNvdW50ZXJDbG9ja1dpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2ZXJzZS1sZWZ0JykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIFxyXG4gIGlmIChyZXZlcnNlID09IHRydWUpIHtcclxuICAgIGRpcmVjdGlvbiA9IGNsb2NrV2lzZTsgdHVybiA9IDI7IFxyXG4gICAgY2xvY2tXaXNlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIGNvdW50ZXJDbG9ja1dpc2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXJlY3Rpb24gPSBjb3VudGVyQ2xvY2tXaXNlOyB0dXJuID0gLTI7IFxyXG4gICAgY291bnRlckNsb2NrV2lzZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICBjbG9ja1dpc2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH1cclxuICAgICAgXHJcbiAgY29uc3QgcmV2ZXJzZUtleWZyYW1lcyA9IG5ldyBLZXlmcmFtZUVmZmVjdChcclxuICAgIGRpcmVjdGlvbiwgXHJcbiAgICBbXHJcbiAgICAgIHsgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9LFxyXG4gICAgICB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3R1cm59dHVybilgIH0sXHJcbiAgICAgIHsgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScgfSxcclxuICAgIF0sIFxyXG4gICAgeyBkdXJhdGlvbjogNDAwMCwgZmlsbDogJ25vbmUnLCBpdGVyYXRpb25zOiAxIH0sXHJcbiAgKTtcclxuICBjb25zdCByZXZlcnNlQ2FyZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24ocmV2ZXJzZUtleWZyYW1lcywgZG9jdW1lbnQudGltZWxpbmUpO1xyXG4gIHJldmVyc2VDYXJkQW5pbWF0aW9uLnBsYXkoKTtcclxuICB2b2lkIGdldFJldmVyc2VTb3VuZC5wbGF5KCk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmVyc2UtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICB9LCA0NTAwKTtcclxufTtcclxuICBcclxuZXhwb3J0IGNvbnN0IHNob3dSZXZlcnNlQW5pbWF0aW9uID0gKHJldmVyc2U6IGJvb2xlYW4pID0+IHtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmVyc2UtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICBjaGFuZ2VEaXJlY3Rpb24ocmV2ZXJzZSk7XHJcbn07XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hvb3NlIGNvbG9yXHJcblxyXG5leHBvcnQgY29uc3QgY2hvb3NlQ29sb3JBbmltYXRpb24gPSAoZTogRXZlbnQpID0+IHtcclxuICBjb25zdCBjaG9zZW5EaWFtb25kID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY2hvc2VuQ29sb3IgPSAoY2hvc2VuRGlhbW9uZC5wYXJlbnRFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5pZC5yZXBsYWNlKCctZGlhbW9uZCcsICcnKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYW1vbmQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ2Nob29zZS1jb2xvcicpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxuICByZXR1cm4gY2hvc2VuQ29sb3I7XHJcbn07XHJcblxyXG5sZXQgY29sb3IgPSAnJztcclxuZXhwb3J0IGNvbnN0IGNob29zZUNvbG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpYW1vbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbW9uZC1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBkaWFtb25kLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1jb2xvcicpO1xyXG4gIGRpYW1vbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHtcclxuICAgIGNvbG9yID0gY2hvb3NlQ29sb3JBbmltYXRpb24oZSk7XHJcbiAgICBjb25zb2xlLmxvZygnY29sb3InLCBjb2xvcik7XHJcbiAgfSk7XHJcbn07IiwiaW1wb3J0IHsgbnMsIHJlZENvbG9yLCBncmVlbkNvbG9yLCB5ZWxsb3dDb2xvciwgYmx1ZUNvbG9yIH0gZnJvbSAnLi9jYXJkcyc7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tY2FyZCB0ZW1wbGF0ZVxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ2FyZFRlbXBsYXRlID0gKFxyXG4gIGNvbG9yOiBzdHJpbmcsXHJcbiAgY3VyclNjYWxlOiBudW1iZXIsXHJcbik6IEhUTUxFbGVtZW50ID0+IHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdzdmcnKSBhcyBIVE1MRWxlbWVudDtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgYCR7MzAwICogY3VyclNjYWxlfWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgYCR7NTIwICogY3VyclNjYWxlfWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsbCcsIGNvbG9yKTtcclxuICBzdmcuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3ltYm9sIGNsYXNzPVwiY2FyZENlbnRlclwiIGlkPVwibXlTeW1ib2xcIiB2aWV3Qm94PVwiMCAwICR7MzAwICogY3VyclNjYWxlfSAkezUyMCAqIGN1cnJTY2FsZX1cIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIiR7MTEgKiBjdXJyU2NhbGV9XCI+XHJcbiAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwibWFpbkNhcmQgY2FyZENlbnRlclwiIHg9XCIkezE1ICogY3VyclNjYWxlfVwiIHk9XCIkezI1ICogY3VyclNjYWxlfVwiIHJ4PVwiJHsxMCAqIGN1cnJTY2FsZX1cIiByeT1cIiR7MTUgKiBjdXJyU2NhbGV9XCIgd2lkdGg9XCIkezI1MCAqIGN1cnJTY2FsZX1cIiBoZWlnaHQ9XCIkezQyMCAqIGN1cnJTY2FsZX1cIi8+XHJcbiAgICAgICAgICAgIDxlbGxpcHNlIGNsYXNzPVwiY2FyZENlbnRlclwiIGN4PVwiJHsyMzAgKiBjdXJyU2NhbGV9XCIgY3k9XCIkezE2MCAqIGN1cnJTY2FsZX1cIiByeD1cIiR7MTA1ICogY3VyclNjYWxlfVwiIHJ5PVwiJHsxODMgKiBjdXJyU2NhbGV9XCJcclxuICAgICAgc3R5bGU9XCJmaWxsOndoaXRlO3N0cm9rZTp3aGl0ZTtzdHJva2Utd2lkdGg6JHszICogY3VyclNjYWxlfTt0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XCIvPlxyXG4gICAgICAgICAgPC9zeW1ib2w+ICBcclxuICAgICAgICAgXHJcbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI215U3ltYm9sXCIgY2xhc3M9XCJjYXJkQ2VudGVyXCI+PC91c2U+XHJcbiAgICBgO1xyXG4gIHJldHVybiBzdmc7XHJcbn07XHJcbiAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tc21hbGwgc3ltYm9scyBvbSB0aGUgdG9wIGFuZCBib3R0b21cclxuZXhwb3J0IGNvbnN0IHJlbmRlclNtYWxsU3ltYm9sID0gKGNhcmRTeW1ib2w6IHN0cmluZywgeDE6IG51bWJlciwgeTE6IG51bWJlciwgZGVnOiBzdHJpbmcsIGN1cnJTY2FsZTogbnVtYmVyKTogRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBnLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkQ2VudGVyXCIgeD0ke3gxICogY3VyclNjYWxlfSB5PSR7eTEgKiBjdXJyU2NhbGV9IHN0eWxlPVwidHJhbnNmb3JtOiByb3RhdGUoJHtkZWd9ZGVnKVwiIGZvbnQtZmFtaWx5PVwiQXJpYWxcIiBmb250LXNpemU9XCIkezU1ICogY3VyclNjYWxlfVwiIGZvbnQtc3R5bGU9XCJpdGFsaWNcIiBmb250LXdlaWdodD1cImJvbGRcIiBmaWxsPVwid2hpdGVcIj4ke2NhcmRTeW1ib2x9PC90ZXh0PlxyXG4gICAgICBgO1xyXG4gIHJldHVybiBnO1xyXG59O1xyXG4gIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcmVjdGFuZ2xlIGFuZCBpdHMgZ3JhZGllbnRcclxuZXhwb3J0IGNvbnN0IHJlbmRlckdyYWRpZW50ID0gKFxyXG4gIHJlY0lkOiBzdHJpbmcsXHJcbiAgc3RvcENvbG9yMTogc3RyaW5nLFxyXG4gIHN0b3BDb2xvcjI6IHN0cmluZyxcclxuICBzdG9wQ29sb3IzOiBzdHJpbmcsXHJcbik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGdyYWRpZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnbGluZWFyR3JhZGllbnQnKTtcclxuICBncmFkaWVudC5pZCA9IHJlY0lkO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneDEnLCAnMCcpO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneDInLCAnMCcpO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneTEnLCAnMCcpO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneTInLCAnMScpO1xyXG4gIGdyYWRpZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPSR7c3RvcENvbG9yMX0+PC9zdG9wPlxyXG4gICAgICA8c3RvcCBvZmZzZXQ9XCI1NSVcIiBzdG9wLWNvbG9yPSR7c3RvcENvbG9yMn0+PC9zdG9wPlxyXG4gICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcC1jb2xvcj0ke3N0b3BDb2xvcjN9Pjwvc3RvcD5cclxuICBgO1xyXG4gIHJldHVybiBncmFkaWVudDtcclxufTtcclxuICAgIFxyXG5leHBvcnQgY29uc3QgcmVuZGVyUmVjdGFuZ2xlID0gKHJlY0lkOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdyZWN0Jyk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoJ3gnLCBgJHt4ICogY3VyclNjYWxlfWApO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKCd5JywgYCR7eSAqIGN1cnJTY2FsZX1gKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZSgncngnLCBgJHs1ICogY3VyclNjYWxlfWApO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKCdyeScsIGAkezUgKiBjdXJyU2NhbGV9YCk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7NjUgKiBjdXJyU2NhbGV9YCk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAkezEwMCAqIGN1cnJTY2FsZX1gKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZSgnZmlsbCcsIGB1cmwoIyR7cmVjSWR9KWApO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnd2hpdGUnKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7NCAqIGN1cnJTY2FsZX1gKTtcclxuICByZWN0LmNsYXNzTGlzdC5hZGQoJ2NhcmRDZW50ZXInKTtcclxuICAgIFxyXG4gIHJldHVybiByZWN0O1xyXG59OyAgXHJcbiAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0taGVscGVyc1xyXG5leHBvcnQgY29uc3Qgc2V0Q2xhc3NOYW1lID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICBsZXQgY2xhc3NOYW1lID0gJyc7XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBncmVlbkNvbG9yOiBjbGFzc05hbWUgPSAnZ3JlZW4nOyBicmVhaztcclxuICAgIGNhc2UgcmVkQ29sb3I6IGNsYXNzTmFtZSA9ICdyZWQnOyBicmVhaztcclxuICAgIGNhc2UgeWVsbG93Q29sb3I6IGNsYXNzTmFtZSA9ICd5ZWxsb3cnOyBicmVhaztcclxuICAgIGNhc2UgYmx1ZUNvbG9yOiBjbGFzc05hbWUgPSAnYmx1ZSc7IGJyZWFrO1xyXG4gIH0gIFxyXG4gIHJldHVybiBjbGFzc05hbWU7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbG9yRm9yR3JhZGllbnQgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGdyYWRpZW50Q29sb3JzID0geyAvL9C+0L/QuNGB0LDRgtGMINC40L3RgtC10YDRhNC10LnRgVxyXG4gICAgY29sb3JUb3A6ICcnLFxyXG4gICAgY29sb3JNaWRkbGU6ICcnLFxyXG4gIH07XHJcbiAgICAgIFxyXG4gIHN3aXRjaCAoY29sb3IpIHtcclxuICAgIGNhc2UgZ3JlZW5Db2xvcjogeyBncmFkaWVudENvbG9ycy5jb2xvclRvcCA9ICdsaWdodGdyZWVuJzsgZ3JhZGllbnRDb2xvcnMuY29sb3JNaWRkbGUgPSAnZ3JlZW4nOyBicmVhazt9XHJcbiAgICBjYXNlIHJlZENvbG9yOiB7Z3JhZGllbnRDb2xvcnMuY29sb3JUb3AgPSAncmVkJzsgZ3JhZGllbnRDb2xvcnMuY29sb3JNaWRkbGUgPSAncmVkJzsgYnJlYWs7fVxyXG4gICAgY2FzZSB5ZWxsb3dDb2xvcjoge2dyYWRpZW50Q29sb3JzLmNvbG9yVG9wID0gJ3llbGxvdyc7IGdyYWRpZW50Q29sb3JzLmNvbG9yTWlkZGxlID0gJ3llbGxvdyc7IGJyZWFrO31cclxuICAgIGNhc2UgYmx1ZUNvbG9yOiB7Z3JhZGllbnRDb2xvcnMuY29sb3JUb3AgPSAnbGlnaHRibHVlJzsgZ3JhZGllbnRDb2xvcnMuY29sb3JNaWRkbGUgPSAnYmx1ZSc7IGJyZWFrO31cclxuICB9XHJcbiAgcmV0dXJuIGdyYWRpZW50Q29sb3JzO1xyXG59OyIsIlxyXG5pbXBvcnQgeyByZW5kZXJDYXJkVGVtcGxhdGUsIHJlbmRlclNtYWxsU3ltYm9sLCBcclxuICByZW5kZXJHcmFkaWVudCwgcmVuZGVyUmVjdGFuZ2xlLCBzZXRDbGFzc05hbWUsIGNoZWNrQ29sb3JGb3JHcmFkaWVudCB9IGZyb20gJy4vY2FyZHMtaGVscGVycyc7XHJcbmltcG9ydCB7IGJvZHkgfSBmcm9tICcuLi9nbG9iYWwtY29tcG9uZW50cy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBhcyBzdHJpbmc7XHJcbmV4cG9ydCBjb25zdCByZWRDb2xvciA9ICcjYzAxZTFlJyBhcyBzdHJpbmc7XHJcbmV4cG9ydCBjb25zdCBibHVlQ29sb3IgPSAnZGFya2JsdWUnIGFzIHN0cmluZztcclxuZXhwb3J0IGNvbnN0IGdyZWVuQ29sb3IgPSAnIzI1OGYzNycgYXMgc3RyaW5nO1xyXG5leHBvcnQgY29uc3QgeWVsbG93Q29sb3IgPSAnI0ZGQzMwMCcgYXMgc3RyaW5nO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUNBUkQgd2l0aCBudW1iZXJcclxuY29uc3QgcmVuZGVyQ2VudHJhbFN5bWJvbE51bWJlciA9IChjYXJkU3ltYm9sOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGN1cnJTY2FsZTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBnLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkQ2VudGVyXCIgeD1cIiR7ODAgKiBjdXJyU2NhbGV9XCIgeT1cIiR7MzE1ICogY3VyclNjYWxlfVwiIGZvbnQtZmFtaWx5PVwiQXJpYWxcIiBmb250LXNpemU9XCIkezIwOCAqIGN1cnJTY2FsZX1cIiBmb250LXN0eWxlPVwiaXRhbGljXCIgZm9udC13ZWlnaHQ9XCJib2xkXCIgZmlsbD0ke2NvbG9yfT4ke2NhcmRTeW1ib2x9PC90ZXh0PlxyXG4gICAgICBgO1xyXG4gIHJldHVybiBnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckNhcmRXaXRoTnVtYmVyID0gKFxyXG4gIGNhcmRTeW1ib2w6IHN0cmluZyxcclxuICBjb2xvcjogc3RyaW5nLFxyXG4gIGN1cnJTY2FsZSA9IDEsXHJcbik6IEhUTUxFbGVtZW50ID0+IHtcclxuICBjb25zdCBzdmcgPSByZW5kZXJDYXJkVGVtcGxhdGUoY29sb3IsIGN1cnJTY2FsZSk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ251bWJlcmVkQ2FyZCcsIHNldENsYXNzTmFtZShjb2xvcikpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyU21hbGxTeW1ib2woY2FyZFN5bWJvbCwgMzAsIDg0LCAnMzYwJywgY3VyclNjYWxlKSk7XHJcbiAgc3ZnLmFwcGVuZChyZW5kZXJTbWFsbFN5bWJvbChjYXJkU3ltYm9sLCAtMjQ4LCAtMzg2LCAnLTE4MCcsIGN1cnJTY2FsZSkpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbFN5bWJvbE51bWJlcihjYXJkU3ltYm9sLCBjb2xvciwgY3VyclNjYWxlKSk7XHJcbiAgcmV0dXJuIHN2ZztcclxufTtcclxuICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLXJldmVyc2UgY2FyZFxyXG5jb25zdCByZW5kZXJDZW50cmFsU3ltYm9sUmV2ZXJzZSA9IChjb2xvcjogc3RyaW5nLCBjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgcGF0aFBhcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IHBhdGhQYXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBwYXRoUGFydDFHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGNvbnN0IHBhdGhQYXJ0MkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcblxyXG4gIHBhdGhQYXJ0MUcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIHBhdGhQYXJ0Mkcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIHBhdGhQYXJ0MS5jbGFzc0xpc3QuYWRkKCdjYXJkQ2VudGVyJyk7XHJcbiAgcGF0aFBhcnQyLmNsYXNzTGlzdC5hZGQoJ2NhcmRDZW50ZXInKTtcclxuXHJcbiAgcGF0aFBhcnQxLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdtMTQ3LjI4OTAzLDE0Mi43ODk1OWwxMy45Mjc3NCwxMy41NDIzNmwtNTUuNzEwOTcsNTQuMTY5NDZjLTEzLjkyNzc0LDEzLjU0MjM2IC0xMy45Mjc3NCw0MC42MjcwOSAwLDU0LjE2OTQ2bDI3Ljg1NTQ5LC0yNy4wODQ3NGw1NS43MTA5NywtNTQuMTY5NDZsMTMuOTI3NzQsMTMuNTQyMzZsMCwtNTQuMTY5NDZsLTU1LjcxMDk3LDBsMC4wMDAwMSwwLjAwMDAxbDAsMC4wMDAwMWwtMC4wMDAwMSwweicpO1xyXG4gIHBhdGhQYXJ0Mi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTE0Ny4yODkwMywzMTkuNzMxNTNsLTE0LjA3MjI1LC0xMy4yNzM0bDU2LjI4OTAzLC01My4wOTM2MWMxNC4wNzIyNSwtMTMuMjczNCAxNC4wNzIyNSwtMzkuODIwMiAwLC01My4wOTM2MWwtMjguMTQ0NTEsMjYuNTQ2OGwtNTYuMjg5MDMsNTMuMDkzNjFsLTE0LjA3MjI1LC0xMy4yNzM0bDAsNTMuMDkzNjFsNTYuMjg5MDMsMGwtMC4wMDAwMSwwbC0wLjAwMDAxLDB6Jyk7XHJcbiAgcGF0aFBhcnQxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZmlsbDoke2NvbG9yfWApO1xyXG4gIHBhdGhQYXJ0Mi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGZpbGw6JHtjb2xvcn1gKTtcclxuXHJcbiAgcGF0aFBhcnQxRy5hcHBlbmQocGF0aFBhcnQxKTtcclxuICBwYXRoUGFydDJHLmFwcGVuZChwYXRoUGFydDIpO1xyXG5cclxuICBnLmFwcGVuZChwYXRoUGFydDFHLCBwYXRoUGFydDJHKTtcclxuICByZXR1cm4gZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJSZXZlcnNlQ2FyZCA9IChjb2xvcjogc3RyaW5nLCBjdXJyU2NhbGUgPSAxKSA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gcmVuZGVyQ2FyZFRlbXBsYXRlKGNvbG9yLCBjdXJyU2NhbGUpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKCdyZXZlcnNlQ2FyZCcsIHNldENsYXNzTmFtZShjb2xvcikpO1xyXG4gIGNvbnN0IHRvcFJldmVyc2VTeW1ib2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IHRvcFJldmVyc2VTeW1ib2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IGJvdHRvbVJldmVyc2VTeW1ib2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IGJvdHRvbVJldmVyc2VTeW1ib2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG5cclxuICBjb25zdCB0b3BSZXZlcnNlU3ltYm9sRzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgdG9wUmV2ZXJzZVN5bWJvbEcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGNvbnN0IGJvdHRvbVJldmVyc2VTeW1ib2xHMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBjb25zdCBib3R0b21SZXZlcnNlU3ltYm9sRzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcblxyXG4gIHRvcFJldmVyc2VTeW1ib2xHMS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7IFxyXG4gIHRvcFJldmVyc2VTeW1ib2xHMi5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7IFxyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2xHMS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgYm90dG9tUmV2ZXJzZVN5bWJvbEcyLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHNjYWxlKCR7Y3VyclNjYWxlfSlgKTtcclxuXHJcbiAgdG9wUmV2ZXJzZVN5bWJvbDEuc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ201NC41Nzk5NywzOC4xMjczOGwzLjg1NSwzLjc0ODMzbC0xNS40MTk5OSwxNC45OTMzM2MtMy44NTUsMy43NDgzMyAtMy44NTUsMTEuMjQ0OTkgMCwxNC45OTMzM2w3LjcxLC03LjQ5NjY2bDE1LjQxOTk5LC0xNC45OTMzM2wzLjg1NSwzLjc0ODMzbDAsLTE0Ljk5MzMzbC0xNS40MTk5OSwwbDAsMGwwLDBsLTAuMDAwMDEsMHonKTtcclxuICB0b3BSZXZlcnNlU3ltYm9sMi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTU0LjU3OTk3LDg3LjEwMjM2bC0zLjg5NSwtMy42NzM4OWwxNS41Nzk5OSwtMTQuNjk1NTVjMy44OTUsLTMuNjczODkgMy44OTUsLTExLjAyMTY2IDAsLTE0LjY5NTU1bC03Ljc5LDcuMzQ3NzdsLTE1LjU3OTk5LDE0LjY5NTU1bC0zLjg5NSwtMy42NzM4OWwwLDE0LjY5NTU1bDE1LjU3OTk5LDBsMCwwbDAuMDAwMDEsMC4wMDAwMXonKTtcclxuICBib3R0b21SZXZlcnNlU3ltYm9sMS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTIyNS4yODAwMSwzNzkuOTEyNTJsMy44NTUsMy43NDgzM2wtMTUuNDIsMTQuOTkzMzNjLTMuODU1LDMuNzQ4MzIgLTMuODU1LDExLjI0NDk5IDAsMTQuOTkzMzJsNy43MSwtNy40OTY2NmwxNS40MTk5OSwtMTQuOTkzMzNsMy44NTUsMy43NDgzM2wwLC0xNC45OTMzM2wtMTUuNDE5OTksMGwwLDAuMDAwMDFsMCwweicpO1xyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2wyLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdtMjI1LjI4MDAxLDQyOC44ODc1bC0zLjg5NSwtMy42NzM4OWwxNS41Nzk5OSwtMTQuNjk1NTRjMy44OTUsLTMuNjczODkgMy44OTUsLTExLjAyMTY2IDAsLTE0LjY5NTU1bC03Ljc4OTk5LDcuMzQ3NzdsLTE1LjU3OTk5LDE0LjY5NTU1bC0zLjg5NSwtMy42NzM4OWwwLDE0LjY5NTU1bDE1LjU3OTk5LDBsMCwweicpO1xyXG4gIHRvcFJldmVyc2VTeW1ib2wxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2wxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG4gIHRvcFJldmVyc2VTeW1ib2wyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2wyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG5cclxuICB0b3BSZXZlcnNlU3ltYm9sRzEuYXBwZW5kKHRvcFJldmVyc2VTeW1ib2wxKTtcclxuICB0b3BSZXZlcnNlU3ltYm9sRzIuYXBwZW5kKHRvcFJldmVyc2VTeW1ib2wyKTtcclxuICBib3R0b21SZXZlcnNlU3ltYm9sRzEuYXBwZW5kKGJvdHRvbVJldmVyc2VTeW1ib2wxKTtcclxuICBib3R0b21SZXZlcnNlU3ltYm9sRzIuYXBwZW5kKGJvdHRvbVJldmVyc2VTeW1ib2wyKTtcclxuXHJcbiAgc3ZnLmFwcGVuZCh0b3BSZXZlcnNlU3ltYm9sRzEsIHRvcFJldmVyc2VTeW1ib2xHMiwgYm90dG9tUmV2ZXJzZVN5bWJvbEcxLCBib3R0b21SZXZlcnNlU3ltYm9sRzIpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbFN5bWJvbFJldmVyc2UoY29sb3IsIGN1cnJTY2FsZSkpO1xyXG4gIFxyXG4gIHJldHVybiBzdmc7XHJcbn07XHJcbiAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1ibG9ja2VkIGNhcmRcclxuY29uc3QgcmVuZGVyQ2VudHJhbFN5bWJvbEJsb2NrID0gKGNvbG9yOiBzdHJpbmcsIGN1cnJTY2FsZTogbnVtYmVyKTogRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ20xNDUuMTcwNjgsMTUxLjM2MjQyYy0yMC45ODI0MiwtMC4wMjczMyAtNDIuMDQ0NTcsNy45MjQ5NyAtNTguMDc0NSwyMy45MTMwMmMtMzIuMDU5ODYsMzEuOTc2MzQgLTMyLjE0NjkzLDgzLjkxODMzIC0wLjE3MDU0LDExNS45NzgxOWMzMS45NzYzNCwzMi4wNTk4NiA4My45MTgzMywzMi4xNDY5MyAxMTUuOTc4MTksMC4xNzA1NGMzMi4wNTk4NiwtMzEuOTc2MzQgMzIuMTQ2OTMsLTgzLjkxODMzIDAuMTcwNTQsLTExNS45NzgxOWMtMTUuOTg4MTcsLTE2LjAyOTkzIC0zNi45MjEyOSwtMjQuMDU2NDQgLTU3LjkwMzY5LC0yNC4wODM4NGwwLDAuMDAwMjh6bS0wLjE3MDU0LDI3LjMyOTE4YzkuNTY0NTUsMC4wMTA5MyAxOS4xNzI2MywyLjUxNDc4IDI3LjY3MDc5LDcuNTE1NTJsLTc0LjgxMzYyLDc0LjgxMzYyYy0xMi4zNTQ2OSwtMjAuOTc2ODQgLTkuNDkzMTIsLTQ4LjQ1NzM3IDguNTQwMzcsLTY2LjQ0NDA2YzEwLjY4NjYzLC0xMC42NTg3NyAyNC42MTQxOSwtMTUuOTAzMjkgMzguNjAyNDUsLTE1Ljg4NTA4bDAuMDAwMDEsMHptNDcuMTQyODMsMjYuODE2NzVjMTIuNDQwMDgsMjAuOTkyNzkgOS41MjkwOCw0OC41OTIzNiAtOC41NDAzNyw2Ni42MTQ4NmMtMTguMDUyMDIsMTguMDA0OTYgLTQ1LjQ5MTU0LDIwLjY1MTQ2IC02Ni40NDQwNiw4LjE5ODc2bDc0Ljk4NDQzLC03NC44MTM2MnonKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZmlsbDoke2NvbG9yfWApO1xyXG4gIHBhdGguY2xhc3NMaXN0LmFkZCgnY2FyZENlbnRlcicpO1xyXG4gIGcuYXBwZW5kKHBhdGgpO1xyXG4gIGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIHJldHVybiBnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckJsb2NrZWRDYXJkID0gKGNvbG9yOiBzdHJpbmcsIGN1cnJTY2FsZSA9IDEpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gcmVuZGVyQ2FyZFRlbXBsYXRlKGNvbG9yLCBjdXJyU2NhbGUpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKCdibG9ja2VkQ2FyZCcsIHNldENsYXNzTmFtZShjb2xvcikpO1xyXG4gIGNvbnN0IHRvcEJsb2NrU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IGJvdHRvbUJsb2NrU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IHRvcEJsb2NrU3ltYm9sRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBib3R0b21CbG9ja1N5bWJvbEcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdwYXRoJyk7XHJcblxyXG4gIHRvcEJsb2NrU3ltYm9sLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdtNTQuNTQ2ODQsNDEuMzYyMjFjLTUuNzU3ODksLTAuMDA3NSAtMTEuNTM3NjYsMi4xNzQ3MyAtMTUuOTM2NTEsNi41NjIwOWMtOC43OTc3MSw4Ljc3NDc5IC04LjgyMTYsMjMuMDI4NDQgLTAuMDQ2OCwzMS44MjYxNWM4Ljc3NDc5LDguNzk3NzEgMjMuMDI4NDQsOC44MjE2IDMxLjgyNjE1LDAuMDQ2OGM4Ljc5NzcxLC04Ljc3NDc5IDguODIxNiwtMjMuMDI4NDQgMC4wNDY4LC0zMS44MjYxNWMtNC4zODczOSwtNC4zOTg4NSAtMTAuMTMxNzUsLTYuNjAxNDUgLTE1Ljg4OTY0LC02LjYwODk3bDAsMC4wMDAwOHptLTAuMDQ2OCw3LjQ5OTU0YzIuNjI0NjYsMC4wMDMgNS4yNjEyNiwwLjY5MDA5IDcuNTkzMjgsMi4wNjIzN2wtMjAuNTI5OTgsMjAuNTI5OThjLTMuMzkwMzEsLTUuNzU2MzYgLTIuNjA1MDUsLTEzLjI5NzQzIDIuMzQzNjEsLTE4LjIzMzI0YzIuOTMyNTcsLTIuOTI0OTMgNi43NTQ1LC00LjM2NDEgMTAuNTkzMDksLTQuMzU5MWwwLDBsMCwtMC4wMDAwMXptMTIuOTM2Nyw3LjM1ODkyYzMuNDEzNzQsNS43NjA3NCAyLjYxNDkyLDEzLjMzNDQ3IC0yLjM0MzYxLDE4LjI4MDExYy00Ljk1Mzc0LDQuOTQwODMgLTEyLjQ4MzU2LDUuNjY3MDcgLTE4LjIzMzI0LDIuMjQ5ODZsMjAuNTc2ODUsLTIwLjUyOTk4bDAsMC4wMDAwMXonKTtcclxuICBib3R0b21CbG9ja1N5bWJvbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTIyNS4wNDY4MSwzODIuODk5MzJjLTUuNzU3ODksLTAuMDA3NSAtMTEuNTM3NjYsMi4xNzQ3MyAtMTUuOTM2NTEsNi41NjIwOWMtOC43OTc3LDguNzc0NzkgLTguODIxNiwyMy4wMjg0NSAtMC4wNDY4LDMxLjgyNjE1YzguNzc0NzksOC43OTc3MSAyMy4wMjg0NSw4LjgyMTYgMzEuODI2MTUsMC4wNDY4YzguNzk3NzEsLTguNzc0NzggOC44MjE2LC0yMy4wMjg0NCAwLjA0NjgsLTMxLjgyNjE1Yy00LjM4NzM5LC00LjM5ODg1IC0xMC4xMzE3NSwtNi42MDE0NCAtMTUuODg5NjQsLTYuNjA4OTZsMCwwLjAwMDA3em0tMC4wNDY4LDcuNDk5NTRjMi42MjQ2NiwwLjAwMyA1LjI2MTI2LDAuNjkwMDkgNy41OTMyOCwyLjA2MjM3bC0yMC41Mjk5NywyMC41Mjk5OGMtMy4zOTAzMiwtNS43NTYzNiAtMi42MDUwNiwtMTMuMjk3NDMgMi4zNDM2LC0xOC4yMzMyNWMyLjkzMjU3LC0yLjkyNDkyIDYuNzU0NSwtNC4zNjQxIDEwLjU5MzA5LC00LjM1OTFsMCwwem0xMi45MzY3LDcuMzU4OTJjMy40MTM3NSw1Ljc2MDczIDIuNjE0OTIsMTMuMzM0NDcgLTIuMzQzNiwxOC4yODAxMWMtNC45NTM3NSw0Ljk0MDgzIC0xMi40ODM1Niw1LjY2NzA3IC0xOC4yMzMyNSwyLjI0OTg2bDIwLjU3Njg1LC0yMC41Mjk5N3onKTtcclxuICB0b3BCbG9ja1N5bWJvbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6d2hpdGUnKTtcclxuICBib3R0b21CbG9ja1N5bWJvbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6d2hpdGUnKTtcclxuICB0b3BCbG9ja1N5bWJvbEcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIGJvdHRvbUJsb2NrU3ltYm9sRy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgdG9wQmxvY2tTeW1ib2xHLmFwcGVuZCh0b3BCbG9ja1N5bWJvbCk7XHJcbiAgYm90dG9tQmxvY2tTeW1ib2xHLmFwcGVuZChib3R0b21CbG9ja1N5bWJvbCk7XHJcbiAgc3ZnLmFwcGVuZCh0b3BCbG9ja1N5bWJvbEcsIHJlbmRlckNlbnRyYWxTeW1ib2xCbG9jayhjb2xvciwgY3VyclNjYWxlKSwgYm90dG9tQmxvY2tTeW1ib2xHKTtcclxuICBcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG4gIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2FyZCBQbHVzIDJcclxuY29uc3QgcmVuZGVyQ2VudHJhbFN5bWJvbFBsdXNUd28gPSAoY29sb3I6IHN0cmluZywgY3VyclNjYWxlOiBudW1iZXIpOiBFbGVtZW50ID0+IHtcclxuICBjb25zdCB7IGNvbG9yVG9wLCBjb2xvck1pZGRsZSB9ID0gY2hlY2tDb2xvckZvckdyYWRpZW50KGNvbG9yKTtcclxuICBjb25zdCBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGcuYXBwZW5kKFxyXG4gICAgcmVuZGVyR3JhZGllbnQoYCR7Y29sb3J9Q2FyZDFgLCBjb2xvclRvcCwgY29sb3JNaWRkbGUsIGNvbG9yKSxcclxuICAgIHJlbmRlclJlY3RhbmdsZShgJHtjb2xvcn1DYXJkMWAsIDg1LCAyMzAsIGN1cnJTY2FsZSksXHJcbiAgICByZW5kZXJHcmFkaWVudChgJHtjb2xvcn1DYXJkMmAsIGNvbG9yVG9wLCBjb2xvck1pZGRsZSwgY29sb3IpLFxyXG4gICAgcmVuZGVyUmVjdGFuZ2xlKGAke2NvbG9yfUNhcmQyYCwgMTMwLCAxNzAsIGN1cnJTY2FsZSksXHJcbiAgKTtcclxuICByZXR1cm4gZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJQbHVzVHdvQ2FyZCA9IChjb2xvcjogc3RyaW5nLCBjdXJyU2NhbGUgPSAxKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHN2ZyA9IHJlbmRlckNhcmRUZW1wbGF0ZShjb2xvciwgY3VyclNjYWxlKTtcclxuICBzdmcuY2xhc3NMaXN0LmFkZCgncGx1c1R3b0NhcmQnLCBzZXRDbGFzc05hbWUoY29sb3IpKTtcclxuICBzdmcuYXBwZW5kKHJlbmRlclNtYWxsU3ltYm9sKCcrMicsIDMwLCA4NCwgJzM2MCcsIGN1cnJTY2FsZSkpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyU21hbGxTeW1ib2woJysyJywgLTI0OCwgLTM4NiwgJy0xODAnLCBjdXJyU2NhbGUpKTtcclxuICBzdmcuYXBwZW5kKHJlbmRlckNlbnRyYWxTeW1ib2xQbHVzVHdvKGNvbG9yLCBjdXJyU2NhbGUpKTtcclxuICBcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNhcmQgUGx1cyA0XHJcbmNvbnN0IHJlbmRlckNlbnRyYWxTeW1ib2xQbHVzRm91ciA9IChjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgZy5hcHBlbmQoXHJcbiAgICByZW5kZXJHcmFkaWVudCgnZ3JlZW5DYXJkJywgJ2xpZ2h0Z3JlZW4nLCAnZ3JlZW4nLCAnIzE3NjgyNScpLFxyXG4gICAgcmVuZGVyUmVjdGFuZ2xlKCdncmVlbkNhcmQnLCA1MCwgMjQ1LCBjdXJyU2NhbGUpLFxyXG4gICAgcmVuZGVyR3JhZGllbnQoJ2JsdWVDYXJkJywgJ2xpZ2h0Ymx1ZScsICdibHVlJywgJ2RhcmtibHVlJyksXHJcbiAgICByZW5kZXJSZWN0YW5nbGUoJ2JsdWVDYXJkJywgOTAsIDE3MCwgY3VyclNjYWxlKSxcclxuICAgIHJlbmRlckdyYWRpZW50KCdyZWRDYXJkJywgJ3JlZCcsICdyZWQnLCAnZGFya3JlZCcpLFxyXG4gICAgcmVuZGVyUmVjdGFuZ2xlKCdyZWRDYXJkJywgMTM1LCAyMTAsIGN1cnJTY2FsZSksXHJcbiAgICByZW5kZXJHcmFkaWVudCgneWVsbG93Q2FyZCcsICd5ZWxsb3cnLCAneWVsbG93JywgJyNGRkMzMDAnKSxcclxuICAgIHJlbmRlclJlY3RhbmdsZSgneWVsbG93Q2FyZCcsIDE3NSwgMTMwLCBjdXJyU2NhbGUpLFxyXG4gICk7XHJcbiAgcmV0dXJuIGc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUGx1c0ZvdXJDYXJkID0gKGN1cnJTY2FsZSA9IDEpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gcmVuZGVyQ2FyZFRlbXBsYXRlKCdibGFjaycsIGN1cnJTY2FsZSk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ3BsdXNGb3VyQ2FyZCcpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyU21hbGxTeW1ib2woJys0JywgMzAsIDg0LCAnMzYwJywgY3VyclNjYWxlKSk7XHJcbiAgc3ZnLmFwcGVuZChyZW5kZXJTbWFsbFN5bWJvbCgnKzQnLCAtMjQ4LCAtMzg2LCAnLTE4MCcsIGN1cnJTY2FsZSkpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbFN5bWJvbFBsdXNGb3VyKGN1cnJTY2FsZSkpO1xyXG4gICBcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG4gXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1tdWx0aSBjYXJkXHJcbmNvbnN0IHJlbmRlckNlbnRyYWxNdWx0aVN5bWJvbCA9IChjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgZWxsaXBzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggbnMsICdlbGxpcHNlJyk7XHJcbiAgY29uc3QgcGF0aFJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBnUmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGNvbnN0IHBhdGhHcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBnR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgcGF0aEJsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdwYXRoJyk7XHJcbiAgY29uc3QgZ0JsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgcGF0aFllbGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBnWWVsbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIFxyXG4gIHBhdGhSZWQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnd2hpdGUnKTtcclxuICBwYXRoUmVkLnNldEF0dHJpYnV0ZSgnZCcsICdtMTk4LjQwMDAxLDg0LjM5OTk5Yzc4Ljk5OTk5LDEgLTEyLjc5MzY2LDIwNS44MTM0OCAtNjUuMTczMjksMTc1LjAxMjg0Yy01Mi4zNzk2NCwtMzAuODAwNjQgLTkwLjAzNDU5LC0yMi43MzMxMSAtNzMuMDM0NTksLTU5LjczMzExYzE3LC0zNyA1OS4yMDc4OCwtMTE2LjI3OTczIDEzOC4yMDc4OCwtMTE1LjI3OTczeicpO1xyXG4gIHBhdGhSZWQuc2V0QXR0cmlidXRlKCdmaWxsJywgcmVkQ29sb3IpO1xyXG4gIHBhdGhSZWQuY2xhc3NMaXN0LmFkZCgnY2FyZENlbnRlcicpO1xyXG4gIGdSZWQuYXBwZW5kKHBhdGhSZWQpO1xyXG4gIGdSZWQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIFxyXG4gIHBhdGhHcmVlbi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd3aGl0ZScpO1xyXG4gIHBhdGhHcmVlbi5zZXRBdHRyaWJ1dGUoJ2QnLCAnbTE1MC4wNTE5LDI0Ny43Njg4YzAsMCAtMTQ3LjM0MDMxLDEzNC4yNDg2MiAtNzAuMzg1NSwxNDguMzMwNjRjNzYuOTU0ODEsMTQuMDgyMDIgMTU4LjYwMTk4LC0xMTguMjg4OTggMTUyLjAzMjY4LC0xMjkuNTU0NjFjLTYuNTY5MzEsLTExLjI2NTYyIC04MS42NDcxOCwtMTguNzc2MDMgLTgxLjY0NzE4LC0xOC43NzYwM3onKTtcclxuICBwYXRoR3JlZW4uc2V0QXR0cmlidXRlKCdmaWxsJywgZ3JlZW5Db2xvcik7XHJcbiAgcGF0aEdyZWVuLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3JvdGF0ZSgtMi42MTU0NzIwNzgzMjMzNjQzIDE0NC43NDIyNzkwNTI3MzE4LDMyMi40NTc4MjQ3MDcwMzEpJyk7XHJcbiAgcGF0aEdyZWVuLmNsYXNzTGlzdC5hZGQoJ2NhcmRDZW50ZXInKTtcclxuICBnR3JlZW4uYXBwZW5kKHBhdGhHcmVlbik7XHJcbiAgZ0dyZWVuLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHNjYWxlKCR7Y3VyclNjYWxlfSlgKTtcclxuICBcclxuICBwYXRoQmx1ZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd3aGl0ZScpO1xyXG4gIHBhdGhCbHVlLnNldEF0dHJpYnV0ZSgnZCcsICdtMjE5LjQsOTIuMzk5OTlsLTgxLjQsMTY1LjE2MTgzYzAsMCAzMC40LDEyNy40NjQwOCA4OC40LDE0Ljk5NTc2YzU4LC0xMTIuNDY4MzIgMCwtMTgwLjE1NzU4IC03LC0xODAuMTU3NTh6Jyk7XHJcbiAgcGF0aEJsdWUuc2V0QXR0cmlidXRlKCdmaWxsJywgYmx1ZUNvbG9yKTtcclxuICBwYXRoQmx1ZS5jbGFzc0xpc3QuYWRkKCdjYXJkQ2VudGVyJyk7XHJcbiAgZ0JsdWUuYXBwZW5kKHBhdGhCbHVlKTtcclxuICBnQmx1ZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgICBcclxuICBwYXRoWWVsbG93LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3doaXRlJyk7XHJcbiAgcGF0aFllbGxvdy5zZXRBdHRyaWJ1dGUoJ2QnLCAnbTM3LjUyNjY1LDI0Ni41MjUyNmMzMy44ODAyMywtMTIwLjMxNzQ3IDEwMi45NTg0MSwyLjEyNjg1IDEwMy40NzM5NiwxNC44OTY5MmMwLjUxNTU1LDEyLjc3MDA3IC02MS45MDI5NiwxMzguNDYxNjQgLTY5LjEyMDU4LDEzNS41NzAzNGMtNy4yMTc2LC0yLjg5MTMxIC02OC4yMzM2MSwtMzAuMTQ5NzkgLTM0LjM1MzM4LC0xNTAuNDY3MjZ6Jyk7XHJcbiAgcGF0aFllbGxvdy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB5ZWxsb3dDb2xvcik7XHJcbiAgcGF0aFllbGxvdy5jbGFzc0xpc3QuYWRkKCdjYXJkQ2VudGVyJyk7XHJcbiAgZ1llbGxvdy5hcHBlbmQocGF0aFllbGxvdyk7XHJcbiAgZ1llbGxvdy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgICBcclxuICBnLmFwcGVuZChlbGxpcHNlLCBnUmVkLCBnWWVsbG93LCBnR3JlZW4sIGdCbHVlKTtcclxuICAgICBcclxuICByZXR1cm4gZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJNdWx0aUNhcmQgPSAoY3VyclNjYWxlID0gMSk6IEhUTUxFbGVtZW50ID0+IHtcclxuICBjb25zdCBzdmcgPSByZW5kZXJDYXJkVGVtcGxhdGUoJ2JsYWNrJywgY3VyclNjYWxlKTtcclxuICBzdmcuY2xhc3NMaXN0LmFkZCgnbXVsdGlkQ2FyZCcpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbE11bHRpU3ltYm9sKGN1cnJTY2FsZSkpO1xyXG4gIHJldHVybiBzdmc7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBjb25zdCByZW5kZXJCYWNrU2lkZSA9IChjdXJyU2NhbGUgPSAxKTogRWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnc3ZnJyk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2JhY2stc2lkZScpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBgJHszMDAgKiBjdXJyU2NhbGV9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBgJHs1MjAgKiBjdXJyU2NhbGV9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgJ2JsYWNrJyk7XHJcbiAgc3ZnLmlubmVySFRNTCA9IGBcclxuICAgIDxzeW1ib2wgaWQ9XCJiYWNrQ2FyZFwiIHZpZXdCb3g9XCIwIDAgJHszMDAgKiBjdXJyU2NhbGV9ICR7NTIwICogY3VyclNjYWxlfVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiJHsxMSAqIGN1cnJTY2FsZX1cIj5cclxuICAgICA8cmVjdCB4PVwiJHsxNSAqIGN1cnJTY2FsZX1cIiB5PVwiJHsyNSAqIGN1cnJTY2FsZX1cIiByeD1cIiR7MTAgKiBjdXJyU2NhbGV9XCIgcnk9XCIkezE1ICogY3VyclNjYWxlfVwiIHdpZHRoPVwiJHsyNTAgKiBjdXJyU2NhbGV9XCIgaGVpZ2h0PVwiJHs0MjAgKiBjdXJyU2NhbGV9XCIgLz5cclxuICAgICAgPGVsbGlwc2UgY3g9XCIkezIzMCAqIGN1cnJTY2FsZX1cIiBjeT1cIiR7MTYwICogY3VyclNjYWxlfVwiIHJ4PVwiJHs5NyAqIGN1cnJTY2FsZX1cIiByeT1cIiR7MTcyICogY3VyclNjYWxlfVwiIGZpbGw9XCJyZWRcIiBzdHJva2U9XCJyZWRcIiBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcIiAvPlxyXG4gICAgICA8c3ZnIHdpZHRoPVwiJHsyNDAgKiBjdXJyU2NhbGV9XCIgaGVpZ2h0PVwiJHs0MTAgKiBjdXJyU2NhbGV9XCIgeD1cIiR7MTkgKiBjdXJyU2NhbGV9XCIgeT1cIiR7MzAgKiBjdXJyU2NhbGV9XCI+XHJcbiAgICAgICAgPGVsbGlwc2UgY3g9XCIkey0xMzAgKiBjdXJyU2NhbGV9XCIgY3k9XCIkezIzMCAqIGN1cnJTY2FsZX1cIiByeD1cIiR7MjAgKiBjdXJyU2NhbGV9XCIgcnk9XCIkezIwICogY3VyclNjYWxlfVwiIGZpbGw9XCJibGFja1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLWRhc2hhcnJheT1cIiR7Ni43ICogY3VyclNjYWxlfVwiIGQ9XCJNNSAyMCBsMjE1IDBcIiBkPVwiTTUgNDAgbDIxNSAwXCIgc3Ryb2tlLXdpZHRoPVwiJHs0MTggKiBjdXJyU2NhbGV9XCIgb3BhY2l0eT1cIjAuMTVcIiBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKCAtNjVkZWcpO1wiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9zeW1ib2w+XHJcbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjYmFja0NhcmRcIiBjbGFzcz1cImJhY2stc2lkZVwiPjwvdXNlPlxyXG4gICAgPGxpbmVhckdyYWRpZW50IGlkPVwiR3JhZGllbnQyXCIgeDE9XCIwXCIgeDI9XCIwXCIgeTE9XCIwXCIgeTI9XCIxXCI+XHJcbiAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcC1jb2xvcj1cIndoaXRlXCIvPlxyXG4gICAgICA8c3RvcCBvZmZzZXQ9XCI1NSVcIiBzdG9wLWNvbG9yPVwiZ29sZFwiLz5cclxuICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3AtY29sb3I9XCIjODA2MzA4XCIvPlxyXG4gICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyVGV4dCBiYWNrLXNpZGVcIiB4PVwiJHstNDAgKiBjdXJyU2NhbGV9XCIgeT1cIiR7MzAwICogY3VyclNjYWxlfVwiIGZvbnQtc2l6ZT1cIiR7MTE1ICogY3VyclNjYWxlfVwiIGZpbGw9XCJ1cmwoI0dyYWRpZW50MilcIj5VTk88L3RleHQ+IFxyXG4gIGA7XHJcbiAgcmV0dXJuIHN2ZztcclxufTsgIFxyXG4gIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MaXN0ZW5lcnNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9ybG9hZCcsICgpID0+IHtcclxuICBib2R5LmFwcGVuZChyZW5kZXJDYXJkV2l0aE51bWJlcignMicsIHJlZENvbG9yLCAwLjgpKTtcclxuICBib2R5LmFwcGVuZChyZW5kZXJSZXZlcnNlQ2FyZChibHVlQ29sb3IsIDAuNSkpO1xyXG4gIGJvZHkuYXBwZW5kKHJlbmRlckJsb2NrZWRDYXJkKHllbGxvd0NvbG9yKSk7XHJcbiAgYm9keS5hcHBlbmQocmVuZGVyUGx1c1R3b0NhcmQoZ3JlZW5Db2xvcikpO1xyXG4gIGJvZHkuYXBwZW5kKHJlbmRlclBsdXNGb3VyQ2FyZCgpKTtcclxuICBib2R5LmFwcGVuZChyZW5kZXJNdWx0aUNhcmQoKSk7XHJcbiAgYm9keS5hcHBlbmQocmVuZGVyQmFja1NpZGUoMC41KSk7XHJcbn0pOyIsIi8vIGltcG9ydCB7IHNob3dSZXZlcnNlQW5pbWF0aW9uIH0gZnJvbSAnLi4vYW5pbWF0ZWQtaXRlbXMvYW5pbWF0ZWQtaXRlbXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24sIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUltYWdlIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgY2hhdFNvdW5kIH0gZnJvbSAnLi4vc291bmRzJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBvcGVuQ2hhdCA9ICgpID0+IHtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXQnKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gIHZvaWQgY2hhdFNvdW5kLnBsYXkoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNoYXQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2hhdCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaGF0LWhlYWRlcicpO1xyXG4gIGNvbnN0IGhlYWRlckJ0biA9IGNyZWF0ZUJ1dHRvbignYnRuLWNyb3NzJywgJ2J1dHRvbicsICd4Jyk7XHJcbiAgaGVhZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYXQtY2xvc2UtYnRuJyk7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0NoYXQnO1xyXG4gIGNvbnN0IGNoYXRXaW5kb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2hhdC13aW5kb3cnKTtcclxuICBjb25zdCBtZXNzYWdlTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJ21lc3NhZ2UtbGlzdCcpO1xyXG4gIGNvbnN0IGNoYXRJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaGF0LWlucHV0Jyk7XHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnbWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWVzc2FnZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdjaGF0LXNlbmQtYnRuJywgJ2J1dHRvbicsICdTZW5kJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgQ29udHJvbGxlci53ZWJTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShcclxuICAgICAgeyBhY3Rpb246ICdDSEFUX01FU1NBR0UnLFxyXG4gICAgICAgIGRhdGE6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIH0pKTtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbiAgbWVzc2FnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgYnV0dG9uLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY2hhdElucHV0LmFwcGVuZChtZXNzYWdlSW5wdXQsIGJ1dHRvbik7XHJcbiAgY2hhdFdpbmRvdy5hcHBlbmQobWVzc2FnZUxpc3QpO1xyXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyQnRuKTtcclxuICBjaGF0LmFwcGVuZChoZWFkZXIsIGNoYXRXaW5kb3csIGNoYXRJbnB1dCApO1xyXG5cclxuICBoZWFkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjaGF0LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICB9KTtcclxuICByZXR1cm4gY2hhdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDaGF0QnV0dG9uID0gKCk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcclxuICBjb25zdCBjaGF0QnRuID0gY3JlYXRlQnV0dG9uKCdjaGF0LWJ0bicsICdidXR0b24nLCAnJyk7XHJcbiAgY29uc3QgY2hhdExvZ28gPSBjcmVhdGVJbWFnZSgnY2hhdC1sb2dvJywgJy4uLy4uL2Fzc2V0cy9pbWcvY2hhdC5wbmcnLCAnY2hhdC1sb2dvJyk7XHJcbiAgY2hhdEJ0bi5hcHBlbmQoY2hhdExvZ28pO1xyXG5cclxuICBjaGF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNoYXQpO1xyXG4gIC8vIGNoYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UmFuZG9tQ29sb3IpO1xyXG4gIC8vIGNoYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgLy8gICBzaG93UmV2ZXJzZUFuaW1hdGlvbihmYWxzZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIHJldHVybiBjaGF0QnRuO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHYW1lRmllbGQsIG1vdmVDYXJkVG9QbGF5ZXIsIHNob3dEaXN0cmlidXRpb25DYXJkc0ZvclBsYXllcnMgfSBmcm9tICcuLi9nYW1lLWZpZWxkL2dhbWUtZmllbGQnO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b25SZXN1bHRzIH0gZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCB7IGFkZEJ1dHRvbkJhY2tUb01haW5QYWdlLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUltYWdlLCBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcmVtb3ZlUmVnaXN0cmF0aW9uQ29udGFpbmVyIH0gZnJvbSAnLi4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDaG9pY2VDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Nob2ljZS1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBxdWFudGl0eVBsYXllcnNCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaG9pY2UtcXVhbnRpdHknKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBxdWFudHV0eVRpdGxlID0gY3JlYXRlUGFyYWdyYXBoKCdxdWFudGl0eS10aXRsZScsICdDaG9vc2UgcXVhbnRpdHkgb2YgcGxheWVycycpO1xyXG4gIGNvbnN0IHR3b1BsYXllcnMgPSBjcmVhdGVJbWFnZSgndHdvJywgJy4uL2Fzc2V0cy9pbWcvdHdvLnBuZycsICd0d28gcGxheWVycycpO1xyXG4gIGNvbnN0IHRocmVlUGxheWVycyA9IGNyZWF0ZUltYWdlKCd0aHJlZScsICcuLi9hc3NldHMvaW1nL3RocmVlLnBuZycsICd0aHJlZSBwbGF5ZXJzJyk7XHJcbiAgY29uc3QgZm91clBsYXllcnMgPSBjcmVhdGVJbWFnZSgnZm91cicsICcuLi9hc3NldHMvaW1nL2ZvdXIucG5nJywgJ2ZvdXIgcGxheWVycycpO1xyXG5cclxuICBxdWFudGl0eVBsYXllcnNCbG9jay5hcHBlbmQodHdvUGxheWVycywgdGhyZWVQbGF5ZXJzLCBmb3VyUGxheWVycyk7XHJcblxyXG4gIGNvbnN0IGRpZmZpY3VsdHlUaXRsZSA9IGNyZWF0ZVBhcmFncmFwaCgnZGlmZmljdWx0eS10aXRsZScsICdDaG9vc2UgZGlmZmljdWx0eScpO1xyXG4gIGNvbnN0IGRpZmZpY3VsdHlCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaG9pY2UtZGlmZmljdWx0eScpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGVhc3lEaWZmaWN1bHR5ID0gY3JlYXRlQnV0dG9uKCdidG4tZWFzeScsICdidXR0b24nLCAnZWFzeScpO1xyXG4gIGNvbnN0IGhhcmREaWZmaWN1bHR5ID0gY3JlYXRlQnV0dG9uKCdidG4taGFyZCcsICdidXR0b24nLCAnaGFyZCcpO1xyXG5cclxuICBjb25zdCBjcm9zcyA9IGNyZWF0ZUJ1dHRvbignYnRuLWNyb3NzJywgJ2J1dHRvbicsICd4Jyk7XHJcbiAgY29uc3QgYnRuU3RhcnRHYW1lID0gY3JlYXRlQnV0dG9uKCdidG4tc3RhcnQnLCAnYnV0dG9uJywgJ3N0YXJ0Jyk7XHJcblxyXG4gIGRpZmZpY3VsdHlCbG9jay5hcHBlbmQoZWFzeURpZmZpY3VsdHksIGhhcmREaWZmaWN1bHR5KTtcclxuICBjb250YWluZXIuYXBwZW5kKHF1YW50dXR5VGl0bGUsIHF1YW50aXR5UGxheWVyc0Jsb2NrLCBkaWZmaWN1bHR5VGl0bGUsIGRpZmZpY3VsdHlCbG9jaywgYnRuU3RhcnRHYW1lLCBjcm9zcyk7XHJcbiAgbWFpbi5hcHBlbmQoY29udGFpbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZE1hcmsgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlLXF1YW50aXR5IC5pbWcnKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmsnKSk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdtYXJrJyk7XHJcbn07XHJcblxyXG5jb25zdCBjaG9pY2VEaWZmaWN1bHR5ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHBvbmVudENsYXNzTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvZmYnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wcG9uZW50Q2xhc3NOYW1lKT8uY2xhc3NMaXN0LnJlbW92ZSgnb2ZmJyk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93U3RhcnRHYW1lQnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHF1YW50aXR5UGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2UtcXVhbnRpdHkgLmltZycpO1xyXG4gIGNvbnN0IGRpZmZpY3VsdGllc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlLWRpZmZpY3VsdHkgLmJ1dHRvbicpO1xyXG4gIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc3RhcnQnKTtcclxuICBsZXQgeCA9IDA7XHJcbiAgcXVhbnRpdHlQbGF5ZXJzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21hcmsnKSkgeCArPSAxO1xyXG4gIH0pO1xyXG4gIGRpZmZpY3VsdGllc0J0bnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHggKz0gMTtcclxuICB9KTtcclxuICBpZiAoeCA9PT0gMikgc3RhcnRHYW1lQnRuPy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbn07XHJcblxyXG5jb25zdCBmaWxsR2FtZUZpZWxkID0gKHF1YW50aXR5OiBudW1iZXIpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wYWNpdHknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICdzaG93JyxcclxuICApO1xyXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgY3JlYXRlR2FtZUZpZWxkKHF1YW50aXR5KTtcclxufTtcclxuXHJcbmNvbnN0IGdvVG9HYW1lRmllbGQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgbGV0IHggPSAwO1xyXG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgJ3Nob3cnLFxyXG4gICk7XHJcbiAgaWYgKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHdvJykgYXMgSFRNTEltYWdlRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXJrJykpIHggKz0gMjtcclxuICBpZiAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aHJlZScpIGFzIEhUTUxJbWFnZUVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnbWFyaycpKSB4ICs9IDM7XHJcbiAgaWYgKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm91cicpIGFzIEhUTUxJbWFnZUVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnbWFyaycpKSB4ICs9IDQ7XHJcblxyXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgZmlsbEdhbWVGaWVsZCh4KTtcclxuICBhZGRCdXR0b25CYWNrVG9NYWluUGFnZSgpO1xyXG4gIGNyZWF0ZUJ1dHRvblJlc3VsdHMoKTtcclxuICBDb250cm9sbGVyLmNyZWF0ZU5ld0dhbWVXaXRoQ29tcHV0ZXIoeCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5jaG9pY2UtcXVhbnRpdHkgLnR3bycpKSB7XHJcbiAgICBSb3V0ZXIudXJsLnNlYXJjaFBhcmFtcy5zZXQoJ251bWJlck9mUGxheWVycycsICcyJyk7XHJcbiAgICBSb3V0ZXIuc2V0U3RhdGUoJ3NpbmdsZS1wbGF5ZXInKTtcclxuICAgIGFkZE1hcmsoZWxlbWVudCk7XHJcbiAgICBzaG93U3RhcnRHYW1lQnRuKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVycycsICcyJyk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5jaG9pY2UtcXVhbnRpdHkgLnRocmVlJykpIHtcclxuICAgIFJvdXRlci51cmwuc2VhcmNoUGFyYW1zLnNldCgnbnVtYmVyT2ZQbGF5ZXJzJywgJzMnKTtcclxuICAgIFJvdXRlci5zZXRTdGF0ZSgnc2luZ2xlLXBsYXllcicpO1xyXG4gICAgYWRkTWFyayhlbGVtZW50KTtcclxuICAgIHNob3dTdGFydEdhbWVCdG4oKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJzJywgJzMnKTtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmNob2ljZS1xdWFudGl0eSAuZm91cicpKSB7XHJcbiAgICBSb3V0ZXIudXJsLnNlYXJjaFBhcmFtcy5zZXQoJ251bWJlck9mUGxheWVycycsICc0Jyk7XHJcbiAgICBSb3V0ZXIuc2V0U3RhdGUoJ3NpbmdsZS1wbGF5ZXInKTtcclxuICAgIGFkZE1hcmsoZWxlbWVudCk7XHJcbiAgICBzaG93U3RhcnRHYW1lQnRuKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVycycsICc0Jyk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tZWFzeScpKSB7XHJcbiAgICBSb3V0ZXIudXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2RpZmZpY3VsdCcsICdlYXN5Jyk7XHJcbiAgICBSb3V0ZXIuc2V0U3RhdGUoJ3NpbmdsZS1wbGF5ZXInKTtcclxuICAgIGNob2ljZURpZmZpY3VsdHkoZWxlbWVudCwgJy5idG4taGFyZCcpO1xyXG4gICAgc2hvd1N0YXJ0R2FtZUJ0bigpO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLWhhcmQnKSkge1xyXG4gICAgUm91dGVyLnVybC5zZWFyY2hQYXJhbXMuc2V0KCdkaWZmaWN1bHQnLCAnaGFyZCcpO1xyXG4gICAgUm91dGVyLnNldFN0YXRlKCdzaW5nbGUtcGxheWVyJyk7XHJcbiAgICBjaG9pY2VEaWZmaWN1bHR5KGVsZW1lbnQsICcuYnRuLWVhc3knKTtcclxuICAgIHNob3dTdGFydEdhbWVCdG4oKTtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmJ0bi1zdGFydCcpKSB7XHJcbiAgICBnb1RvR2FtZUZpZWxkKCk7XHJcbiAgICByZW1vdmVSZWdpc3RyYXRpb25Db250YWluZXIoKTtcclxuICAgIHNob3dEaXN0cmlidXRpb25DYXJkc0ZvclBsYXllcnMoKyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVycycpIGFzIHN0cmluZykpO1xyXG4gICAgbW92ZUNhcmRUb1BsYXllcigpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IElMYW5nRGF0YSB9IGZyb20gJy4vZ2xvYmFsLWNvbXBvbmVudHMvaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbGFuZ0RhdGE6IElMYW5nRGF0YSA9IHtcclxuICAnZW4nOiB7XHJcbiAgICAncnVsZXMtZ29hbC10aXRsZSc6ICdUaGUgYWltOicsXHJcbiAgICAncnVsZXMtZ29hbC10ZXh0JzogJ3RvIGJlIHRoZSBmaXJzdCB0byBwbGF5IGFsbCBvZiBvbmVgcyBvd24gY2FyZHMuJyxcclxuICAgICdydWxlcy1wbGF5LXRpdGxlJzogJ0hvdyB0byBwbGF5JyxcclxuICAgICdydWxlcy1wbGF5LXRleHQnOlxyXG4gICAgICAnT24geW91ciB0dXJuLCB5b3Ugc2hvdWxkIHBsYXkgb25lIGNhcmQgbWF0Y2hpbmcgdGhlIGRpc2NhcmQgaW4gY29sb3IsIG51bWJlciwgb3Igc3ltYm9sLiBJZiB5b3UgaGF2ZSBubyBhIG1hdGNoaW5nIGNhcmQsIGRyYXcgdGhlIHRvcCBjYXJkIGZyb20gdGhlIGRlY2ssIGFuZCBwbGF5IGl0IGlmIHBvc3NpYmxlLiBXaGVuIHlvdSBwbGF5IHlvdXIgcGVudWx0aW1hdGUgY2FyZCB5b3UgbXVzdCBjYWxsIGBVbm8hYC4gSWYgeW91IGRvblxcJ3Qgbm90IGNhbGwgYFVub2AgYW5kIGlzIGNhdWdodCBiZWZvcmUgdGhlIG5leHQgcGxheWVyIGluIHNlcXVlbmNlIHN0YXJ0cyB0byB0YWtlIGEgdHVybiwgeW91IG11c3QgZHJhdyB0d28gY2FyZHMgYXMgYSBwZW5hbHR5LicsXHJcbiAgICAncnVsZXMtcG9pbnRzLXRpdGxlJzogJ1Njb3JpbmcnLFxyXG4gICAgJ3J1bGVzLXBvaW50cy10ZXh0JzpcclxuICAgICAgJ1RoZSBmaXJzdCBwbGF5ZXIgdG8gZ2V0IHJpZCBvZiB0aGVpciBsYXN0IGNhcmQgd2lucyB0aGUgaGFuZCBhbmQgc2NvcmVzIHBvaW50cyBmb3IgdGhlIGNhcmRzIGhlbGQgYnkgdGhlIG90aGVyIHBsYXllcnMuIFRoZSBmaXJzdCBwbGF5ZXIgdG8gc2NvcmUgMjUwIHBvaW50cyB3aW5zIHRoZSBnYW1lLicsXHJcbiAgICAnbnVtYmVyZWQtY2FyZC10aXRsZSc6ICdOdW1iZXIgY2FyZCcsXHJcbiAgICAncGx1c3R3by1jYXJkLXRpdGxlJzogJ0RyYXcgVHdvJyxcclxuICAgICdwbHVzZm91ci1jYXJkLXRpdGxlJzogJ1dpbGQgRHJhdyBGb3VyJyxcclxuICAgICdyZXZlcnNlLWNhcmQtdGl0bGUnOiAnUmV2ZXJzZScsXHJcbiAgICAnYmxvY2tlZC1jYXJkLXRpdGxlJzogJ1NraXAnLFxyXG4gICAgJ211bHRpLWNhcmQtdGl0bGUnOiAnV2lsZCcsXHJcbiAgICAnbnVtYmVyZWQtY2FyZC1kZXNjcic6XHJcbiAgICAgICdDYXJkIGlzIHBsYXllZCBpZiBpdGBzIG1hdGNoZSB0aGUgZGlzY2FyZCBpbiBjb2xvciBvciBudW1iZXIuJyxcclxuICAgICdwbHVzdHdvLWNhcmQtZGVzY3InOlxyXG4gICAgICAnTmV4dCBwbGF5ZXIgaW4gc2VxdWVuY2UgZHJhd3MgdHdvIGNhcmRzIGFuZCBtaXNzZXMgYSB0dXJuLiBJZiBEcmF3IFR3byBjYXJkIGlzIHBsYXllZCwgYW5kIHRoZSBmb2xsb3dpbmcgcGxheWVyIGhhcyBhIGNhcmQgd2l0aCB0aGUgc2FtZSBzeW1ib2wsIGhlIGNhbmB0IHBsYXkgdGhhdCBjYXJkIGFuZCBgc3RhY2tgIHRoZSBwZW5hbHR5LCB3aGljaCBhZGRzIHRvIHRoZSBjdXJyZW50IHBlbmFsdHkgYW5kIHBhc3NlcyBpdCB0byB0aGUgZm9sbG93aW5nIHBsYXllci4nLFxyXG4gICAgJ3BsdXNmb3VyLWNhcmQtZGVzY3InOlxyXG4gICAgICAnUGxheWVyIGRlY2xhcmVzIHRoZSBuZXh0IGNvbG9yIHRvIGJlIG1hdGNoZWQ7IG5leHQgcGxheWVyIGluIHNlcXVlbmNlIGRyYXdzIGZvdXIgY2FyZHMgYW5kIG1pc3NlcyBhIHR1cm4uIE1heSBiZSBsZWdhbGx5IHBsYXllZCBvbmx5IGlmIHRoZSBwbGF5ZXIgaGFzIG5vIGNhcmRzIG9mIHRoZSBjdXJyZW50IGNvbG9yLiBJZiBXaWxkIERyYXcgRm91ciBjYXJkIGlzIHBsYXllZCwgYW5kIHRoZSBmb2xsb3dpbmcgcGxheWVyIGhhcyBhIGNhcmQgd2l0aCB0aGUgc2FtZSBzeW1ib2wsIGhlIGNhbmB0IHBsYXkgdGhhdCBjYXJkIGFuZCBgc3RhY2tgIHRoZSBwZW5hbHR5LCB3aGljaCBhZGRzIHRvIHRoZSBjdXJyZW50IHBlbmFsdHkgYW5kIHBhc3NlcyBpdCB0byB0aGUgZm9sbG93aW5nIHBsYXllci4gIEVmZmVjdCBhcyBmaXJzdCBkaXNjYXJkOiBjYXJkIGlzIHJldHVybmVkIHRvIHRoZSBkZWNrLCB0aGVuIGEgbmV3IGNhcmQgaXMgbGFpZCBkb3duIGludG8gdGhlIGRpc2NhcmQgcGlsZS4nLFxyXG4gICAgJ3JldmVyc2UtY2FyZC1kZXNjcic6ICdPcmRlciBvZiBwbGF5IHN3aXRjaGVzIGRpcmVjdGlvbnMuJyxcclxuICAgICdibG9ja2VkLWNhcmQtZGVzY3InOiAnTmV4dCBwbGF5ZXIgaW4gc2VxdWVuY2UgbWlzc2VzIGEgdHVybi4nLFxyXG4gICAgJ211bHRpLWNhcmQtZGVzY3InOlxyXG4gICAgICAnUGxheWVyIGRlY2xhcmVzIHRoZSBuZXh0IGNvbG9yIHRvIGJlIG1hdGNoZWQuIFRoZSBuZXh0IHBsYXllciBzaG91bGQgcGxheSBvbmUgY2FyZCBpbiBkZWNsYXJlZCBjb2xvciBvciBhbnkgV2lsZCBDYXJkLiBUaGlzIGNhcmQgbWF5IGJlIGxlZ2FsbHkgcGxheWVkIG9ubHkgaWYgdGhlIHBsYXllciBoYXMgbm8gY2FyZHMgb2YgdGhlIGN1cnJlbnQgY29sb3IuJyxcclxuICAgICdudW1iZXJlZC1jYXJkLXBvaW50cyc6ICdWYWx1ZTogaXQgY291bnRzIGl0YHMgZmFjZSB2YWx1ZS4nLFxyXG4gICAgJ2FjdGlvbi1jYXJkLXBvaW50cyc6ICdWYWx1ZTogMjAgcG9pbnRzLicsXHJcbiAgICAnYmxhY2stY2FyZC1wb2ludHMnOiAnVmFsdWU6IDUwIHBvaW50cy4nLFxyXG4gICAgJ2J0bi1wbGF5LWNvbXAnOiAnUGxheSBhZ2FpbnN0IGNvbXB1dGVyJyxcclxuICAgICdidG4tcGxheS1vbmxpbmUnOiAnT25saW5lIGdhbWUnLFxyXG4gICAgJ2J0bi1ydWxlcyc6ICdIb3cgdG8gcGxheScsXHJcbiAgICAnYnRuLWRldmVsb3BlZCc6ICdEZXZlbG9wZWQgYnknLFxyXG4gICAgJ2J0bi1zaGFyZSc6ICdTaGFyZScsXHJcbiAgICAnYnRuLXNvdW5kLW9uJzogJ1NvdW5kIG9uJyxcclxuICAgICdidG4tc291bmQtb2ZmJzogJ1NvdW5kIG9mZicsXHJcbiAgICAnYnRuLW11c2ljLW9uJzogJ011c2ljIG9uJyxcclxuICAgICdidG4tbXVzaWMtb2ZmJzogJ011c2ljIG9mZicsXHJcbiAgICAnYnRuLXJ1JzogJ1JVJyxcclxuICAgICdidG4tZW5nJzogJ0VORycsXHJcbiAgICAnYnRuLW1haW4tcGFnZSc6ICdNQUlOIFBBR0UnLFxyXG4gICAgJ2J0bi1ydWxlcy1wYWdlJzogJ1JVTEVTJyxcclxuICAgICdidG4td2lubmVycy1wYWdlJzogJ1JFU1VMVFMnLFxyXG4gIH0sXHJcbiAgJ3J1Jzoge1xyXG4gICAgJ3J1bGVzLWdvYWwtdGl0bGUnOiAn0KbQtdC70Ywg0LjQs9GA0YsnLFxyXG4gICAgJ3J1bGVzLWdvYWwtdGV4dCc6ICfQuNC30LHQsNCy0LjRgtGM0YHRjyDQvtGCINCy0YHQtdGFINC60LDRgNGCINCx0YvRgdGC0YDQtdC1INC/0YDQvtGC0LjQstC90LjQutC+0LIuJyxcclxuICAgICdydWxlcy1wbGF5LXRpdGxlJzogJ9Cc0LXRhdCw0L3QuNC60LAg0LjQs9GA0YsnLFxyXG4gICAgJ3J1bGVzLXBsYXktdGV4dCc6XHJcbiAgICAgICfQkiDRgdCy0L7QuSDRhdC+0LQg0L/QvtC70L7QttC4INC60LDRgNGC0YMg0LIg0LjQs9GA0L7QstGD0Y4g0LrQvtC70L7QtNGDLCDQv9GA0Lgg0Y3RgtC+0Lwg0LrQsNGA0YLQsCDQtNC+0LvQttC90LAg0YHQvtCy0L/QsNC00LDRgtGMINGBINCy0LXRgNGF0L3QtdC5INC60LDRgNGC0L7QuSDQsiDQuNCz0YDQvtCy0L7QuSDQutC+0LvQvtC00LUg0L/QviDRhtCy0LXRgtGDINC40LvQuCDQv9C+INC60LDRgNGC0LjQvdC60LUuINCV0YHQu9C4INGDINGC0LXQsdGPINC90LXRgiDQv9C+0LTRhdC+0LTRj9GJ0LXQuSDQutCw0YDRgtGLLCDRgtC+INCy0L7Qt9GM0LzQuCDQvtC00L3RgyDQutCw0YDRgtGDINC40Lcg0LrQvtC70L7QtNGLINCx0LDQvdC60LAg0LgsINC10YHQu9C4INC+0L3QsCDQv9C+0LTRhdC+0LTQuNGCLCDQvNC+0LbQtdGI0Ywg0YHQtNC10LvQsNGC0Ywg0YXQvtC0INGN0YLQvtC5INC60LDRgNGC0L7QuS4g0JrQvtCz0LTQsCDQutC70LDQtNGR0YjRjCDQsiDRgdCx0YDQvtGBINGB0LLQvtGOINC/0YDQtdC00L/QvtGB0LvQtdC00L3RjtGOINC60LDRgNGC0YMsINC90YPQttC90L4g0YHQutCw0LfQsNGC0YwgwqvQo9C90L4hwrsuINCV0YHQu9C4INC90LUg0YHQutCw0LfQsNC7INGN0YLQvtCz0L4g0Lgg0L7RgdGC0LDQu9GM0L3Ri9C1INC40LPRgNC+0LrQuCDQt9Cw0LzQtdGC0LjQu9C4INGN0YLQviDQtNC+INC90LDRh9Cw0LvQsCDRhdC+0LTQsCDRgdC70LXQtNGD0Y7RidC10LPQviDQuNCz0YDQvtC60LAsINGC0L4g0LHQtdGA0LXRiNGMIDIg0LrQsNGA0YLRiyDQuNC3INC+0YHQvdC+0LLQvdC+0Lkg0LrQvtC70L7QtNGLLicsXHJcbiAgICAncnVsZXMtcG9pbnRzLXRpdGxlJzogJ9Cf0L7QtNGB0YfQtdGCINCx0LDQu9C70L7QsicsXHJcbiAgICAncnVsZXMtcG9pbnRzLXRleHQnOlxyXG4gICAgICAn0KDQsNGD0L3QtCDQstGL0LjQs9GA0YvQstCw0LXRgiDQuNCz0YDQvtC6LCDRgdCx0YDQvtGB0LjQstGI0LjQuSDQstGB0LUg0LrQsNGA0YLRiyDQv9C10YDQstGL0LwuINCe0L0g0L/QvtC70YPRh9Cw0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLQviDQsdCw0LvQu9C+0LIsINGA0LDQstC90L7QtSDRgdGD0LzQvNC1INGB0YLQvtC40LzQvtGB0YLQuCDQutCw0YDRgiDQv9GA0L7RgtC40LLQvdC40LrQvtCyLiDQktGL0LjQs9GA0YvQstCw0LXRgiDQuNCz0YDRgyDQuNCz0YDQvtC6LCDQv9C10YDQstGL0Lkg0L3QsNCx0YDQsNCy0YjQuNC5IDI1MCDQsdCw0LvQu9C+0LIuJyxcclxuICAgICdudW1iZXJlZC1jYXJkLXRpdGxlJzogJ9Ca0LDRgNGC0LAg0YEg0YbQuNGE0YDQvtC5JyxcclxuICAgICdwbHVzdHdvLWNhcmQtdGl0bGUnOiAn0JLQvtC30YzQvNC4INC00LLQtScsXHJcbiAgICAncGx1c2ZvdXItY2FyZC10aXRsZSc6ICfQl9Cw0LrQsNC20Lgg0YbQstC10YIg0Lgg0LLQvtC30YzQvNC4INGH0LXRgtGL0YDQtScsXHJcbiAgICAncmV2ZXJzZS1jYXJkLXRpdGxlJzogJ9Cl0L7QtCDQvtCx0YDQsNGC0L3QvicsXHJcbiAgICAnYmxvY2tlZC1jYXJkLXRpdGxlJzogJ9Cf0YDQvtC/0YPRgdGC0Lgg0YXQvtC0JyxcclxuICAgICdtdWx0aS1jYXJkLXRpdGxlJzogJ9CX0LDQutCw0LbQuCDRhtCy0LXRgicsXHJcbiAgICAnbnVtYmVyZWQtY2FyZC1kZXNjcic6ICfQmtCw0YDRgtCwINC60LvQsNC00LXRgtGB0Y8g0L/RgNC4INGB0L7QstC/0LDQtNC10L3QuNC4INGG0LLQtdGC0LAg0LjQu9C4INGG0LjRhNGA0YsuJyxcclxuICAgICdwbHVzdHdvLWNhcmQtZGVzY3InOlxyXG4gICAgICAnQ9C70LXQtNGD0Y7RidC40Lkg0LjQs9GA0L7QuiDQsdC10YDRkdGCIDIg0LrQsNGA0YLRiyDQuNC3INC60L7Qu9C+0LTRiyDQsdCw0L3QutCwINC4INC/0YDQvtC/0YPRgdC60LDQtdGCINGB0LLQvtC5INGF0L7QtC4g0K3RgtGDINC60LDRgNGC0YMg0YHQu9C10LTRg9GO0YnQuNC5INC40LPRgNC+0Log0L3QtSDQvNC+0LbQtdGCINC60LvQsNGB0YLRjCDQv9C+0LLQtdGA0YUg0YLQsNC60L7QuSDQttC1INC40LvQuCDQutCw0YDRgtGLIGDQl9Cw0LrQsNC20Lgg0YbQstC10YIg0Lgg0LLQvtC30YzQvNC4INGH0LXRgtGL0YDQtWAg0LIg0YbQtdC70Y/RhSDRgdGD0LzQvNC40YDQvtCy0LDQvdC40Y8uJyxcclxuICAgICdwbHVzZm91ci1jYXJkLWRlc2NyJzpcclxuICAgICAgJ9CX0LDQutCw0LbQuCDRhtCy0LXRgiDQuCDRgdC70LXQtNGD0Y7RidC40Lkg0LjQs9GA0L7QuiDQsdC10YDRkdGCIDQg0LrQsNGA0YLRiyDQuCDQv9GA0L7Qv9GD0YHQutCw0LXRgiDRhdC+0LQuINCt0YLRgyDQutCw0YDRgtGDINGB0LvQtdC00YPRjtGJ0LjQuSDQuNCz0YDQvtC6INC90LUg0LzQvtC20LXRgiDQutC70LDRgdGC0Ywg0L/QvtCy0LXRgNGFINGC0LDQutC+0Lkg0LbQtSDQuNC70Lgg0LrQsNGA0YLRiyBg0JLQvtC30YzQvNC4INC00LLQtWAg0LIg0YbQtdC70Y/RhSDRgdGD0LzQvNC40YDQvtCy0LDQvdC40Y8uINCV0Lkg0L3QtdC70YzQt9GPINGF0L7QtNC40YLRjCwg0LXRgdC70Lgg0LXRgdGC0Ywg0LrQsNGA0YLQsCwg0L/QviDRhtCy0LXRgtGDINGB0L7QstC/0LDQtNCw0Y7RidCw0Y8g0YEg0LLQtdGA0YXQvdC10Lkg0LrQsNGA0YLQvtC5INCyINC40LPRgNC+0LLQvtC5INC60L7Qu9C+0LTQtS4g0JXRgdC70Lgg0Y3RgtC+INC/0LXRgNCy0LDRjyDQutCw0YDRgtCwINCyINC40LPRgNC1IOKAlCDQvtC90LAg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINCyINC60L7Qu9C+0LTRgyDQuCDQsdC10YDQtdGC0YHRjyDQtNGA0YPQs9Cw0Y8g0LrQsNGA0YLQsC4nLFxyXG4gICAgJ3JldmVyc2UtY2FyZC1kZXNjcic6ICfQndCw0L/RgNCw0LLQu9C10L3QuNC1INGF0L7QtNCwINC80LXQvdGP0LXRgtGB0Y8nLFxyXG4gICAgJ2Jsb2NrZWQtY2FyZC1kZXNjcic6ICdD0LvQtdC00YPRjtGJ0LjQuSDQv9C+INC90LDQv9GA0LDQstC70LXQvdC40Y4g0LjQs9GA0Ysg0LjQs9GA0L7QuiDQv9GA0L7Qv9GD0YHQutCw0LXRgiDRhdC+0LQuJyxcclxuICAgICdtdWx0aS1jYXJkLWRlc2NyJzpcclxuICAgICAgJ9CX0LDQutCw0LbQuCDRhtCy0LXRgiDQuCDRgdC70LXQtNGD0Y7RidC40Lkg0LjQs9GA0L7QuiDQtNC+0LvQttC10L0g0YHQtNC10LvQsNGC0Ywg0YXQvtC0INC70LjQsdC+INC60LDRgNGC0L7QuSDQt9Cw0LrQsNC30LDQvdC90L7Qs9C+INGG0LLQtdGC0LAsINC70LjQsdC+INC60LDRgNGC0YMg0YEg0YfRkdGA0L3Ri9C8INGE0L7QvdC+0LwuINCt0YLQvtC5INC60LDRgNGC0L7QuSDQvdC10LvRjNC30Y8g0YXQvtC00LjRgtGMLCDQtdGB0LvQuCDQtdGB0YLRjCDQutCw0YDRgtCwLCDQv9C+INGG0LLQtdGC0YMg0YHQvtCy0L/QsNC00LDRjtGJ0LDRjyDRgSDQstC10YDRhdC90LXQuSDQutCw0YDRgtC+0Lkg0LIg0LjQs9GA0L7QstC+0Lkg0LrQvtC70L7QtNC1LicsXHJcbiAgICAnbnVtYmVyZWQtY2FyZC1wb2ludHMnOiAn0KHRgtC+0LjQvNC+0YHRgtGMOiDQv9C+INC30L3QsNGH0LXQvdC40Y4g0L3QsCDQutCw0YDRgtC1JyxcclxuICAgICdhY3Rpb24tY2FyZC1wb2ludHMnOiAn0KHRgtC+0LjQvNC+0YHRgtGMOiAyMCDQsdCw0LvQu9C+0LInLFxyXG4gICAgJ2JsYWNrLWNhcmQtcG9pbnRzJzogJ9Ch0YLQvtC40LzQvtGB0YLRjDogNTAg0LHQsNC70LvQvtCyJyxcclxuICAgICdidG4tcGxheS1jb21wJzogJ9CY0LPRgNCw0YLRjCDQv9GA0L7RgtC40LIg0LrQvtC80L/RjNGO0YLQtdGA0LAnLFxyXG4gICAgJ2J0bi1wbGF5LW9ubGluZSc6ICfQntC90LvQsNC50L0g0LjQs9GA0LAnLFxyXG4gICAgJ2J0bi1ydWxlcyc6ICfQn9GA0LDQstC40LvQsCDQuNCz0YDRiycsXHJcbiAgICAnYnRuLWRldmVsb3BlZCc6ICfQoNCw0LfRgNCw0LHQvtGC0YfQuNC60LgnLFxyXG4gICAgJ2J0bi1zaGFyZSc6ICfQn9C+0LTQtdC70LjRgtGM0YHRjycsXHJcbiAgICAnYnRuLXNvdW5kLW9uJzogJ9CX0LLRg9C6INCy0LrQuy4nLFxyXG4gICAgJ2J0bi1zb3VuZC1vZmYnOiAn0JfQstGD0Log0LLRi9C60LsuJyxcclxuICAgICdidG4tbXVzaWMtb24nOiAn0JzRg9C30YvQutCwINCy0LrQuy4nLFxyXG4gICAgJ2J0bi1tdXNpYy1vZmYnOiAn0JzRg9C30YTQutCwINCy0YvQutC7LicsXHJcbiAgICAnYnRuLXJ1JzogJ9Cg0KPQoScsXHJcbiAgICAnYnRuLWVuZyc6ICfQkNCd0JMnLFxyXG4gICAgJ2J0bi1tYWluLXBhZ2UnOiAn0JPQm9CQ0JLQndCQ0K8g0KHQotCg0JDQndCY0KbQkCcsXHJcbiAgICAnYnRuLXJ1bGVzLXBhZ2UnOiAn0J/QoNCQ0JLQmNCb0JAg0JjQk9Cg0KsnLFxyXG4gICAgJ2J0bi13aW5uZXJzLXBhZ2UnOiAn0KLQkNCR0JvQmNCm0JAg0KDQldCX0KPQm9Cs0KLQkNCi0J7QkicsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlUGFyYWdyYXBoLCBjcmVhdGVJbWFnZSwgY3JlYXRlQnV0dG9uLCBjcmVhdGVMaW5rLCBoaWRlRGV2ZWxvcGVkQnlCbG9jayB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5jb25zdCBjcmVhdGVGb290ZXJMaW5rc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbGlua3MtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgbGlua0tpcmlsbCA9IGNyZWF0ZUxpbmsoJ2tpcmlsbC1saW5rJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9raXJpbGxkZW15YW5lbmtvJywgJ1RlYW0gTGVhZCBLaXJpbGwnKTtcclxuICBjb25zdCBnaEtpcmlsbCA9IGNyZWF0ZUltYWdlKCdraXJpbGwnLCAnLi4vYXNzZXRzL2ltZy9naXRodWItbG9nby5zdmcnLCAna2lyaWxsJyk7XHJcbiAgbGlua0tpcmlsbC5hcHBlbmQoZ2hLaXJpbGwpO1xyXG4gIGNvbnN0IGxpbmtBbm5lbGkgPSBjcmVhdGVMaW5rKCdraXJpbGwtbGluaycsICdodHRwczovL2dpdGh1Yi5jb20vQW5uZWxpLXNmJywgJ0FubmVsaScpO1xyXG4gIGNvbnN0IGdoQW5uZWxpID0gY3JlYXRlSW1hZ2UoJ2FubmVsaScsICcuLi9hc3NldHMvaW1nL2dpdGh1Yi1sb2dvLnN2ZycsICdhbm5lbGknKTtcclxuICBsaW5rQW5uZWxpLmFwcGVuZChnaEFubmVsaSk7XHJcbiAgY29uc3QgbGlua0FsZXggPSBjcmVhdGVMaW5rKCdraXJpbGwtbGluaycsICdodHRwczovL2dpdGh1Yi5jb20vTWFlc3Ryb0Zyb250JywgJ0FsZXgnKTtcclxuICBjb25zdCBnaEFsZXggPSBjcmVhdGVJbWFnZSgnYWxleCcsICcuLi9hc3NldHMvaW1nL2dpdGh1Yi1sb2dvLnN2ZycsICdhbGV4Jyk7XHJcbiAgbGlua0FsZXguYXBwZW5kKGdoQWxleCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChsaW5rS2lyaWxsLCBsaW5rQW5uZWxpLCBsaW5rQWxleCk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEZXZlbG9wZWRCeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGV2ZWxvcGVkLWJ5Jyk7XHJcbiAgY29uc3QgaGlkZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdvcGFjaXR5Jyk7XHJcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVQYXJhZ3JhcGgoJ2RldmVsb3BlZC10aXRsZScsICdEZXZlbG9wZWQgYnknKTtcclxuICBjb25zdCBsb2dvID0gY3JlYXRlSW1hZ2UoJ3RlYW0tbG9nbycsICcuLi9hc3NldHMvaW1nL3RlYW0ucG5nJywgJ3RlYW0tbG9nbycpO1xyXG4gIGNvbnN0IHZlcnNpb24gPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ3ZlcnNpb24nKTtcclxuICB2ZXJzaW9uLnRleHRDb250ZW50ID0gJ3ZlciAxLjAxJztcclxuICBjb25zdCBjcm9zcyA9IGNyZWF0ZUJ1dHRvbignYnRuLWNyb3NzJywgJ2J1dHRvbicsICfRhScpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBsb2dvLCBjcmVhdGVGb290ZXJMaW5rc0NvbnRhaW5lcigpLCB2ZXJzaW9uLCBjcm9zcyk7XHJcbiAgaGlkZS5hcHBlbmQoY29udGFpbmVyKTtcclxuICByZXR1cm4gaGlkZTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmRldmVsb3BlZC1ieSAuYnRuLWNyb3NzJykpIGhpZGVEZXZlbG9wZWRCeUJsb2NrKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4aXRXaW5kb3cgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2V4aXQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgcXVlc3Rpb24gPSBjcmVhdGVFbGVtZW50KCdoMicsICdxdWVzdGlvbicpIGFzIEhUTUxIZWFkRWxlbWVudDtcclxuICBxdWVzdGlvbi50ZXh0Q29udGVudCA9ICfQktGLINGF0L7RgtC40YLQtSDQv9C+0LrQuNC90YPRgtGMINC40LPRgNGDP1xcbtCU0LDQvdC90YvQtSDQsdGD0LTRg9GCINGD0YLQtdGA0Y/QvdGLJztcclxuICBjb25zdCBidG5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZXhpdC1idG5zLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGJ0blllcyA9IGNyZWF0ZUJ1dHRvbignYnRuLXllcycsICdidXR0b24nLCAneWVzJyk7XHJcbiAgY29uc3QgYnRuTm8gPSBjcmVhdGVCdXR0b24oJ2J0bi1ubycsICdidXR0b24nLCAnbm8nKTtcclxuXHJcbiAgYnRuQ29udGFpbmVyLmFwcGVuZChidG5ZZXMsIGJ0bk5vKTtcclxuICBjb250YWluZXIuYXBwZW5kKHF1ZXN0aW9uLCBidG5Db250YWluZXIpO1xyXG5cclxuICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG59O1xyXG4iLCIvLyBpbXBvcnQgeyBjaG9vc2VDb2xvciB9IGZyb20gJy4uL2FuaW1hdGVkLWl0ZW1zL2FuaW1hdGVkLWl0ZW1zJztcclxuaW1wb3J0IHsgcmVuZGVyQ2hhdEJ1dHRvbiB9IGZyb20gJy4uL2NoYXQvY2hhdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgYnRuRGV2ZWxvcGVkQnkgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAnYnRuLWRldmVsb3BlZCcsXHJcbiAgICAnYnV0dG9uJyxcclxuICAgICdkZXZlbG9wZWQgYnknLFxyXG4gICk7XHJcbiAgY29uc3QgYnRuU2hhcmUgPSBjcmVhdGVCdXR0b24oJ2J0bi1zaGFyZScsICdidXR0b24nLCAnc2hhcmUnKTtcclxuICAvLyBjb25zdCBidG5UZXN0ID0gY3JlYXRlQnV0dG9uKCdidG4tdGVzdCcsICdidXR0b24nLCAndGVzdCcpOyAvLy0tLS0tLS0tLS3Qo9CU0JDQm9CY0KLQrFxyXG4gIGJ0blNoYXJlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XHJcbiAgICAgIG5hdmlnYXRvclxyXG4gICAgICAgIC5zaGFyZSh7XHJcbiAgICAgICAgICB0aXRsZTogJ9CY0LPRgNCwIFVOTycsXHJcbiAgICAgICAgICB0ZXh0OiAn0KLQtdCx0LUg0LTQsNCy0L3QviDRg9C20LUg0L/QvtGA0LAg0LfQsNC90Y/RgtGM0YHRjyDRh9C10Lwt0YLQviDQv9C+INC40YHRgtC40L3QvdC1INC60YDRg9GC0YvQvC4nLFxyXG4gICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCfQo9C00LDQu9C+0YHRjCDQv9C+0LTQtdC70LjRgtGM0YHRjycpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7QtNC10LvQuNGC0YzRgdGPJywgZXJyb3IpKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGJ0blRlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VDb2xvcik7IC8vLS0tLS0tLS0tLdCj0JTQkNCb0JjQotCsXHJcbiAgZm9vdGVyLmFwcGVuZChidG5EZXZlbG9wZWRCeSwgYnRuU2hhcmUsIHJlbmRlckNoYXRCdXR0b24oKSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldENhcmRTb3VuZFBsYXkgfSBmcm9tICcuLi9zb3VuZHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVDdXJyQ2FyZCA9IChlOiBFdmVudCkgPT4ge1xyXG4gIGNvbnN0IGVsID0gZS50YXJnZXQgYXMgRWxlbWVudDtcclxuICBjb25zdCBjdXJyQ2FyZCA9IChlbC5wYXJlbnRFbGVtZW50IGFzIEVsZW1lbnQpLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgaWYgKGVsLmNsb3Nlc3QoJy5jYXJkQ2VudGVyJykpIHtcclxuICAgIGNvbnN0IGN1cnJDYXJkS2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lRWZmZWN0KFxyXG4gICAgICBjdXJyQ2FyZCwgXHJcbiAgICAgIFtcclxuICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwJSwgMCUpJyB9LCBcclxuICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg1MCUsIC01MCUpJyB9LFxyXG4gICAgICBdLCBcclxuICAgICAgeyBkdXJhdGlvbjogMzAwLCBmaWxsOiAnbm9uZScgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBtb3ZlQ2FyZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oY3VyckNhcmRLZXlmcmFtZXMsIGRvY3VtZW50LnRpbWVsaW5lKTtcclxuICAgIG1vdmVDYXJkQW5pbWF0aW9uLnBsYXkoKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJkRnJvbURlY2sgPSAoZTogRXZlbnQsIHBsYXllck51bWJlcjogc3RyaW5nICkgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWNhcmQnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjbGlja2VkQ2FyZCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgbGV0IHBsYXllciA9IHt9O1xyXG4gIHN3aXRjaCAocGxheWVyTnVtYmVyKSB7XHJcbiAgICBjYXNlICd0b3AnOiB7XHJcbiAgICAgIHBsYXllciA9IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEwMCUsIC05MCUpIHJvdGF0ZSgxODBkZWcpJyB9O1xyXG4gICAgfSBicmVhaztcclxuICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgIHBsYXllciA9IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0yNTAlLCAwJSkgcm90YXRlKDkwZGVnKScgfTtcclxuICAgIH0gYnJlYWs7XHJcbiAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgcGxheWVyID0geyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMzAwJSwgMCUpIHJvdGF0ZSg5MGRlZyknIH07XHJcbiAgICB9IGJyZWFrO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBwbGF5ZXIgPSB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMDAlLCAxNjAlKSByb3RhdGVZKC0xODBkZWcpJyB9O1xyXG4gICAgfSBicmVhaztcclxuXHJcbiAgfVxyXG4gIGlmIChjbGlja2VkQ2FyZC5jbG9zZXN0KCcuYmFjay1zaWRlJykpIHtcclxuICAgIGNvbnN0IGN1cnJDYXJkS2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lRWZmZWN0KFxyXG4gICAgICBjYXJkLCBcclxuICAgICAgW1xyXG4gICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAlLCAwJSkgcm90YXRlWSgwZGVnKSByb3RhdGVYKDkwZGVnKScgfSxcclxuICAgICAgICBwbGF5ZXIsXHJcbiAgICAgIF0sIFxyXG4gICAgICB7IGR1cmF0aW9uOiAxMDAwLCBmaWxsOiAnbm9uZScgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBtb3ZlQ2FyZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oY3VyckNhcmRLZXlmcmFtZXMsIGRvY3VtZW50LnRpbWVsaW5lKTtcclxuICAgIG1vdmVDYXJkQW5pbWF0aW9uLnBsYXkoKTtcclxuICAgIHZvaWQgZ2V0Q2FyZFNvdW5kUGxheSgpO1xyXG4gIH1cclxufTtcclxuXHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRWxlbWVudCxcclxuICBjcmVhdGVJbWFnZSxcclxuICBjcmVhdGVQYXJhZ3JhcGgsXHJcbn0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHJlbmRlckJhY2tTaWRlLCByZW5kZXJDYXJkV2l0aE51bWJlciwgeWVsbG93Q29sb3IgfSBmcm9tICcuLi9jYXJkcy9jYXJkcyc7XHJcbmltcG9ydCB7IGdldENhcmRGcm9tRGVjayB9IGZyb20gJy4vZ2FtZS1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyByZW5kZXJDaGF0IH0gZnJvbSAnLi4vY2hhdC9jaGF0JztcclxuaW1wb3J0IHsgcmVuZGVyRGlhbW9uZCwgcmVuZGVyUmV2ZXJzZU1lc3NhZ2UgfSBmcm9tICcuLi9hbmltYXRlZC1pdGVtcy9hbmltYXRlZC1pdGVtcyc7XHJcblxyXG5jb25zdCBwbGF5ZXJGaWVsZCA9IChwbGF5ZXJDbGFzc05hbWU6IHN0cmluZywgcGxheWVyTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgYmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwbGF5ZXJDbGFzc05hbWUpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGJsb2NrLmlkID0gcGxheWVyQ2xhc3NOYW1lO1xyXG4gIGNvbnN0IGNhcmRzQmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZHMnKTtcclxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZVBhcmFncmFwaCgncGxheWVyLW5hbWUnLCBwbGF5ZXJOYW1lKTtcclxuICB0aXRsZS5pZCA9IGBuYW1lLSR7cGxheWVyQ2xhc3NOYW1lfWA7XHJcbiAgYmxvY2suYXBwZW5kKGNhcmRzQmxvY2ssIHRpdGxlKTtcclxuXHJcbiAgcmV0dXJuIGJsb2NrO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tSW50ZWdlciA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcclxuICAvLyDQv9C+0LvRg9GH0LjRgtGMINGB0LvRg9GH0LDQudC90L7QtSDRh9C40YHQu9C+INC+0YIgKG1pbi0wLjUpINC00L4gKG1heCswLjUpXHJcbiAgY29uc3QgcmFuZCA9IG1pbiAtIDAuNSArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSk7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQocmFuZCk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSVBsYXllciB7XHJcbiAgZmlyc3RfbmFtZTogc3RyaW5nLFxyXG4gIGhlaWdodF9mZWV0OiBudWxsLFxyXG4gIGhlaWdodF9pbmNoZXM6IG51bGwsXHJcbiAgaWQ6IG51bWJlcixcclxuICBsYXN0X25hbWU6IHN0cmluZyxcclxuICBwb3NpdGlvbjogc3RyaW5nLFxyXG4gIHRlYW06IHtcclxuICAgIGFiYnJldmlhdGlvbjogc3RyaW5nLFxyXG4gICAgY2l0eTogc3RyaW5nLFxyXG4gICAgY29uZmVyZW5jZTogc3RyaW5nLFxyXG4gICAgZGl2aXNpb246IHN0cmluZyxcclxuICAgIGZ1bGxfbmFtZTogc3RyaW5nLFxyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICB9LFxyXG4gIHdlaWdodF9wb3VuZHM6IG51bGwsXHJcbn1cclxuXHJcbmludGVyZmFjZSBJTWV0YSB7XHJcbiAgY3VycmVudF9wYWdlOiBudW1iZXIsXHJcbiAgbmV4dF9wYWdlOiBudW1iZXIsXHJcbiAgcGVyX3BhZ2U6IG51bWJlcixcclxuICB0b3RhbF9jb3VudDogbnVtYmVyLFxyXG4gIHRvdGFsX3BhZ2VzOiBudW1iZXIsXHJcbn1cclxuXHJcbmludGVyZmFjZSBJTkJBUGxheWVycyB7XHJcbiAgZGF0YTogSVBsYXllcltdLFxyXG4gIG1ldDogSU1ldGEsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBpbmRleCA9IHJhbmRvbUludGVnZXIoMCwgMTAwKTtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJ2YwOGM1NWNlNTdtc2hjM2M5ZjUzMjkyMjEzMGRwMWYwMDNianNuZTg5NjA1ZmFlYWZmJyxcclxuICAgICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdmcmVlLW5iYS5wLnJhcGlkYXBpLmNvbScsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZldGNoKCdodHRwczovL2ZyZWUtbmJhLnAucmFwaWRhcGkuY29tL3BsYXllcnM/cGFnZT0wJnBlcl9wYWdlPTEwMCcsIG9wdGlvbnMpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZTogSU5CQVBsYXllcnMpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXInLCBgJHtyZXNwb25zZS5kYXRhW2luZGV4XS5maXJzdF9uYW1lICsgJyAnICsgcmVzcG9uc2UuZGF0YVtpbmRleF0ubGFzdF9uYW1lfWApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyJyk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVSaG9tYiA9ICgpID0+IHtcclxuICBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XHJcbiAgY29uc3QgcmhvbWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcclxuICByaG9tYi5jbGFzc0xpc3QuYWRkKCdyaG9tYicpO1xyXG4gIHJob21iLnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aWV3Qm94JywgJzAgMCA1MTIgNTEyJyk7XHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3BhdGgnKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbC1ydWxlJywgJ2V2ZW5vZGQnKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTEzLjI4OTI2NCw3MC42MjI1OTczIEwzNjguOTUxOTk1LDcwLjYyMjU5NzMgQzM5Mi41MTYxNDUsNzAuNjIyNTk3MyA0MTEuNjE4NjYyLDg5LjcyNTExNDcgNDExLjYxODY2MiwxMTMuMjg5MjY0IEw0MTEuNjE4NjYyLDM2OC45NTE5OTUgQzQxMS42MTg2NjIsMzkyLjUxNjE0NSAzOTIuNTE2MTQ1LDQxMS42MTg2NjIgMzY4Ljk1MTk5NSw0MTEuNjE4NjYyIEwxMTMuMjg5MjY0LDQxMS42MTg2NjIgQzg5LjcyNTExNDcsNDExLjYxODY2MiA3MC42MjI1OTczLDM5Mi41MTYxNDUgNzAuNjIyNTk3MywzNjguOTUxOTk1IEw3MC42MjI1OTczLDExMy4yODkyNjQgQzcwLjYyMjU5NzMsODkuNzI1MTE0NyA4OS43MjUxMTQ3LDcwLjYyMjU5NzMgMTEzLjI4OTI2NCw3MC42MjI1OTczIFonLFxyXG4gICk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICdyb3RhdGUoNDUgMjMwLjYgMjY2LjUyMSknKTtcclxuICByaG9tYi5hcHBlbmQocGF0aCk7XHJcblxyXG4gIHJldHVybiByaG9tYjtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlck9uZUNhcmQgPSAoZWxlbWVudDogRWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2V0LWNhcmQnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjYXJkLmlkID0gJ2dldC1jYXJkJztcclxuXHJcbiAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGNhcmQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gIGNhcmQuc3R5bGUudHJhbnNmb3JtU3R5bGUgPSAncHJlc2VydmUtM2QnO1xyXG4gIGNhcmQuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMXMnO1xyXG4gIGNhcmQuc3R5bGUucmlnaHQgPSAnLTE4cHgnO1xyXG5cclxuXHJcbiAgY29uc3QgZnJvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZnJvbnQnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBiYWNrID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2JhY2snKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBiYWNrLmFwcGVuZChyZW5kZXJCYWNrU2lkZSgwLjI1KSk7XHJcbiAgZnJvbnQuYXBwZW5kKGVsZW1lbnQpO1xyXG4gIGNhcmQuYXBwZW5kKGJhY2ssIGZyb250KTtcclxuICByZXR1cm4gY2FyZDtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckRlY2sgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGRlY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGVjaycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGZ1bGxEZWNrID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Z1bGwtZGVjaycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTspIHtcclxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY2FyZC5hcHBlbmQocmVuZGVyQmFja1NpZGUoMC4yNSkpO1xyXG4gICAgY2FyZC5zdHlsZS5yaWdodCA9IGAke2kgKiA1fXB4YDtcclxuICAgIGZ1bGxEZWNrLmFwcGVuZChjYXJkKTtcclxuICAgIGkrKztcclxuICB9XHJcblxyXG4gIGNvbnN0IGxhc3RDYXJkID0gcmVuZGVyT25lQ2FyZChyZW5kZXJDYXJkV2l0aE51bWJlcignOCcsIHllbGxvd0NvbG9yLCAwLjI1KSk7XHJcbiAgLy8gbGFzdENhcmQuY2xhc3NMaXN0LmFkZCgnbGFzdC1jYXJkJyk7XHJcbiAgXHJcbiAgZnVsbERlY2suYXBwZW5kKGxhc3RDYXJkKTtcclxuICBkZWNrLmFwcGVuZChmdWxsRGVjayk7XHJcbiAgcmV0dXJuIGRlY2s7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlR2FtZUZpZWxkID0gKHF1YW50aXR5OiBudW1iZXIpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZS1maWVsZCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGlmIChxdWFudGl0eSA9PT0gMikge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgcGxheWVyRmllbGQoJ3BsYXllci0xJywgJ3BsYXllciAxJyksXHJcbiAgICAgIHBsYXllckZpZWxkKCdwbGF5ZXItMicsICdwbGF5ZXIgMicpLFxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKHF1YW50aXR5ID09PSAzKSB7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgICBwbGF5ZXJGaWVsZCgncGxheWVyLTEnLCAncGxheWVyIDEnKSxcclxuICAgICAgcGxheWVyRmllbGQoJ3BsYXllci0yJywgJ3BsYXllciAyJyksXHJcbiAgICAgIHBsYXllckZpZWxkKCdwbGF5ZXItMycsICdwbGF5ZXIgMycpLFxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKHF1YW50aXR5ID09PSA0KSB7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgICBwbGF5ZXJGaWVsZCgncGxheWVyLTEnLCAncGxheWVyIDEnKSxcclxuICAgICAgcGxheWVyRmllbGQoJ3BsYXllci0yJywgJ3BsYXllciAyJyksXHJcbiAgICAgIHBsYXllckZpZWxkKCdwbGF5ZXItMycsICdwbGF5ZXIgMycpLFxyXG4gICAgICBwbGF5ZXJGaWVsZCgncGxheWVyLTQnLCAncGxheWVyIDQnKSxcclxuICAgICk7XHJcbiAgfVxyXG4gIGNvbnN0IGZpZWxkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZpZWxkJyk7XHJcbiAgY29uc3QgZGVjayA9IHJlbmRlckRlY2soKTtcclxuICBjb25zdCBjdXJyZW50Q2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjdXJyZW50LWNhcmQnKTtcclxuICBjb25zdCB1bm8gPSBjcmVhdGVJbWFnZSgndW5vJywgJy4uL2Fzc2V0cy9pbWcvbG9nby1VTk8ucG5nJywgJ3VubycpO1xyXG5cclxuICBmaWVsZC5hcHBlbmQoZGVjaywgY3VycmVudENhcmQsIGNyZWF0ZVJob21iKCksIHVubyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChmaWVsZCk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGNvbnRhaW5lciwgcmVuZGVyQ2hhdCgpLCByZW5kZXJEaWFtb25kKCksIHJlbmRlclJldmVyc2VNZXNzYWdlKCkpO1xyXG4gIC8qINC80L7QuCDQv9C+0LTQutC70Y7Rh9C10L3QuCAqL1xyXG4gIGRlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZ2V0Q2FyZEZyb21EZWNrKGUsICdib3R0b20nKTsvL1RPRE8uLtCw0L3QuNC80LDRhtC40Y8g0LrQsNGA0YLRiyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0L/QvtC30LjRhtC40Lgg0LjQs9GA0L7QutCwOiB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcclxuICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdHRVRfQ0FSRF9CWV9VU0VSJywgZGF0YTogJycgfSkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dEaXN0cmlidXRpb25DYXJkc0ZvclBsYXllcnMgPSAocXVhbnRpdHlPZlBsYXllcnM6IG51bWJlcik6IHZvaWQgPT4ge1xyXG5cclxuICBjb25zdCBkZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlY2snKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZHMtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHlPZlBsYXllcnMgKiA3OyBpKyspIHtcclxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1kaXN0cmlidXRpb24nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNhcmQuYXBwZW5kKHJlbmRlckJhY2tTaWRlKDAuMjUpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY2FyZCk7XHJcbiAgfVxyXG5cclxuICBkZWNrLmFwcGVuZChjb250YWluZXIpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNsaWNlSW50b0NodW5rcyhhcnI6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+LCBjaHVua1NpemU6IG51bWJlcikge1xyXG4gIGNvbnN0IHJlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSBjaHVua1NpemUpIHtcclxuICAgIGNvbnN0IGNodW5rID0gQXJyYXkuZnJvbShhcnIpLnNsaWNlKGksIGkgKyBjaHVua1NpemUpO1xyXG4gICAgcmVzLnB1c2goY2h1bmspO1xyXG4gIH1cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5jb25zdCBoaWRlRGlzdHJpYnV0aW9uQ2FyZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1kaXN0cmlidXRpb24nKTtcclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUtY2FyZCcpKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKT8ucmVtb3ZlKCksIDMwMDApO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0NhcmRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzJyk7XHJcbiAgY2FyZHM/LmZvckVhY2goKGNhcmQpID0+IGNhcmQuY2xhc3NMaXN0LmFkZCgnc2hvdycpKTtcclxufTtcclxuXHJcbmNvbnN0IHNob3dQbGF5ZXJzTmFtZXMgPSAoKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgbmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW5hbWUnKTtcclxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW92ZUNhcmRUb1BsYXllciA9ICgpOiB2b2lkID0+IHtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZGlzdHJpYnV0aW9uJykgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgY29uc3QgbmV3Q2FyZHMgPSBzbGljZUludG9DaHVua3MoY2FyZHMsIDcpO1xyXG5cclxuICBuZXdDYXJkc1swXS5yZXZlcnNlKCkuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtpbmRleCAqIDcwIC0gOTB9JSwgMTY1JSkgcm90YXRlWig3MjBkZWcpYDtcclxuICAgIH0sIGluZGV4ICogMzAwKTtcclxuICB9KTtcclxuXHJcbiAgbmV3Q2FyZHNbMV0ucmV2ZXJzZSgpLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC0zNDUlLCAke2luZGV4ICogMzggLSAxMTV9JSkgcm90YXRlWig3MjBkZWcpIHJvdGF0ZSgyNzBkZWcpYDtcclxuICAgIH0sIGluZGV4ICogMzAwKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5ld0NhcmRzWzJdKSB7XHJcbiAgICBuZXdDYXJkc1syXS5yZXZlcnNlKCkuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7aW5kZXggKiA3MCAtIDkwfSUsIC0xNDIlKSByb3RhdGVaKDcyMGRlZylgO1xyXG4gICAgICB9LCBpbmRleCAqIDMwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChuZXdDYXJkc1szXSkge1xyXG4gICAgbmV3Q2FyZHNbM10ucmV2ZXJzZSgpLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSg1NTglLCAke2luZGV4ICogMzggLSAxMTV9JSkgcm90YXRlWig3MjBkZWcpIHJvdGF0ZSg5MGRlZylgO1xyXG4gICAgICB9LCBpbmRleCAqIDMwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaGlkZURpc3RyaWJ1dGlvbkNhcmRzKCk7XHJcbiAgICBzaG93Q2FyZHMoKTtcclxuICAgIHNob3dQbGF5ZXJzTmFtZXMoKTtcclxuICB9LCA1MDAwKTtcclxuXHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKSBhcyBIVE1MRGl2RWxlbWVudDsiLCIvLyBpbXBvcnQgeyBib2R5IH0gZnJvbSAnLi4vZ2xvYmFsLWNvbXBvbWVtdHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW1hZ2UsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZ2lzdHJhdGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24nO1xyXG5pbXBvcnQgeyBzZXRCdG5UZXh0IH0gZnJvbSAnLi4vbG9jYWwtc3RvcmFnZSc7XHJcbmltcG9ydCB7IG11c2ljUGxheSwgbXVzaWNTdG9wLCBvZmZTb3VuZHMsIG9uU291bmRzLCBzZXRNdXNpYywgc2V0U291bmRzIH0gZnJvbSAnLi4vc291bmRzJztcclxuXHJcbmNvbnN0IGNoYW5nZUxhbmd1YWdlID0gKCk6IHZvaWQgPT4ge1xyXG4gIGNvbnN0IGJ0bkxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWxhbmcnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBpZiAoYnRuTGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKSB7XHJcbiAgICBidG5MYW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29mZicpOyBidG5MYW5nLnRleHRDb250ZW50ID0gJ2VuJztcclxuICB9IGVsc2Uge1xyXG4gICAgYnRuTGFuZy5jbGFzc0xpc3QuYWRkKCdvZmYnKTsgYnRuTGFuZy50ZXh0Q29udGVudCA9ICdydSc7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdG9nZ2xlTXVzaWMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnRuTXVzaWNWb2x1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW11c2ljJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgYnRuTXVzaWNWb2x1bWUuY2xhc3NMaXN0LnRvZ2dsZSgnb2ZmJyk7XHJcblxyXG4gIGlmIChidG5NdXNpY1ZvbHVtZS5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKSB7XHJcbiAgICBidG5NdXNpY1ZvbHVtZS50ZXh0Q29udGVudCA9ICdtdXNpYyBPRkYnO1xyXG4gICAgdm9pZCBtdXNpY1N0b3AoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYnRuTXVzaWNWb2x1bWUudGV4dENvbnRlbnQgPSAnbXVzaWMgT04nO1xyXG4gICAgdm9pZCBtdXNpY1BsYXkoKTtcclxuICB9XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXNpYycsIGJ0bk11c2ljVm9sdW1lLnRleHRDb250ZW50KTtcclxufTtcclxuXHJcbmNvbnN0IHRvZ2dsZVNvdW5kcyA9ICgpOiB2b2lkID0+IHtcclxuICBjb25zdCBidG5Tb3VuZHNWb2x1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNvdW5kcycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGJ0blNvdW5kc1ZvbHVtZS5jbGFzc0xpc3QudG9nZ2xlKCdvZmYnKTtcclxuICBpZiAoYnRuU291bmRzVm9sdW1lLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHtcclxuICAgIGJ0blNvdW5kc1ZvbHVtZS50ZXh0Q29udGVudCA9ICdzb3VuZCBPRkYnO1xyXG4gICAgb2ZmU291bmRzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJ0blNvdW5kc1ZvbHVtZS50ZXh0Q29udGVudCA9ICdzb3VuZCBPTic7XHJcbiAgICBvblNvdW5kcygpO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvdW5kcycsIGJ0blNvdW5kc1ZvbHVtZS50ZXh0Q29udGVudCk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVCdG5zSGVhZGVyQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdidG5zLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGJ0bkxhbmcgPSBjcmVhdGVCdXR0b24oJ2J0bi1sYW5nJywgJ2J1dHRvbicsICdlbicpO1xyXG4gIGJ0bkxhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VMYW5ndWFnZSk7XHJcblxyXG4gIGNvbnN0IGJ0bk11c2ljVm9sdW1lID0gY3JlYXRlQnV0dG9uKCdidG4tbXVzaWMnLCAnYnV0dG9uJywgJycpO1xyXG4gIHNldEJ0blRleHQoYnRuTXVzaWNWb2x1bWUsICdtdXNpYycsICdtdXNpYyBPTicpO1xyXG4gIHNldE11c2ljKGJ0bk11c2ljVm9sdW1lKTtcclxuXHJcbiAgYnRuTXVzaWNWb2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVNdXNpYygpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBidG5Tb3VuZHNWb2x1bWUgPSBjcmVhdGVCdXR0b24oJ2J0bi1zb3VuZHMnLCAnYnV0dG9uJywgJ3NvdW5kIE9OJyk7XHJcbiAgc2V0QnRuVGV4dChidG5Tb3VuZHNWb2x1bWUsICdzb3VuZHMnLCAnc291bmQgT04nKTtcclxuICBzZXRTb3VuZHMoYnRuU291bmRzVm9sdW1lKTtcclxuXHJcbiAgYnRuU291bmRzVm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9nZ2xlU291bmRzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoYnRuTGFuZywgYnRuTXVzaWNWb2x1bWUsIGJ0blNvdW5kc1ZvbHVtZSk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25SZXN1bHRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW5QYWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1tYWluLXBhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBjb25zdCByZXN1bHRzID0gY3JlYXRlQnV0dG9uKCdidG4tcmVzdWx0cycsICdidXR0b24nLCAndGFibGUgcmVzdWx0cycpO1xyXG4gIG1haW5QYWdlQnV0dG9uLmFmdGVyKHJlc3VsdHMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IHJldHVybkJsb2NrID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3JldHVybi1ibG9jaycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IHNldHRpbmdzID0gY3JlYXRlSW1hZ2UoXHJcbiAgICAnc2V0dGluZ3MnLFxyXG4gICAgJy4uL2Fzc2V0cy9pbWcvc2V0dGluZ3MucG5nJyxcclxuICAgICdzZXR0aW5ncycsXHJcbiAgKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChyZXR1cm5CbG9jaywgY3JlYXRlQnRuc0hlYWRlckNvbnRhaW5lcigpLCBzZXR0aW5ncyk7XHJcbiAgaWYgKCFsb2NhdGlvbi5oYXNoLmluY2x1ZGVzKCdydWxlcycpKSBjcmVhdGVSZWdpc3RyYXRpb25Db250YWluZXIoKTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEZXZlbG9wZWRCeUNvbnRhaW5lciB9IGZyb20gJy4uL2RldmVsb3BlZC1ieS9kZXZlbG9wZWQtYnknO1xyXG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IHsgY3JlYXRlTWFpblBhZ2UgfSBmcm9tICcuLi9tYWluLXBhZ2UvbWFpbi1wYWdlJztcclxuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsICdoZWFkZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnbWFpbicsICdtYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgJ2Zvb3RlcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGJvZHkuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyLCBjcmVhdGVEZXZlbG9wZWRCeUNvbnRhaW5lcigpKTtcclxuICBjcmVhdGVIZWFkZXIoKTtcclxuICBjcmVhdGVNYWluUGFnZSgpO1xyXG4gIGNyZWF0ZUZvb3RlcigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUltYWdlID0gKGNsYXNzTmFtZTogc3RyaW5nLCBzcmM6IHN0cmluZywgYWx0OiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbGVtZW50LnNyYyA9IHNyYztcclxuICBlbGVtZW50LmFsdCA9IGFsdDtcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b24gPSAoXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgdHlwZTogc3RyaW5nLFxyXG4gIGJ1dHRvblRleHQ6IHN0cmluZyxcclxuKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgZWxlbWVudC50eXBlID0gdHlwZTtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVMaW5rID0gKGNsYXNzTmFtZTogc3RyaW5nLCBocmVmOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIGVsZW1lbnQuaHJlZiA9IGhyZWY7XHJcbiAgZWxlbWVudC5kYXRhc2V0LnRpdGxlID0gdGl0bGU7XHJcbiAgZWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJztcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQYXJhZ3JhcGggPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlU3BhbiA9IChjbGFzc05hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVJbnB1dCA9IChjbGFzc05hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBwbGFjZWhvbGRlcjogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgZWxlbWVudC50eXBlID0gdHlwZTtcclxuICBlbGVtZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQnV0dG9uQmFja1RvTWFpblBhZ2UgPSAoKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgYnRuID0gY3JlYXRlQnV0dG9uKCdidG4tbWFpbi1wYWdlJywgJ2J1dHRvbicsICdtYWluIHBhZ2UnKTtcclxuICBjb25zdCByZXR1cm5CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXR1cm4tYmxvY2snKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICByZXR1cm5CbG9jay5hcHBlbmQoYnRuKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlRGV2ZWxvcGVkQnlCbG9jayA9ICgpID0+IHtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wYWNpdHknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICdzaG93JyxcclxuICApO1xyXG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV2ZWxvcGVkLWJ5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAnc2hvdycsXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21JbnQgPSAobWF4OiBudW1iZXIpID0+IHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcclxufTsiLCJcclxuZXhwb3J0IGNvbnN0IHNldEJ0blRleHQgPSAoZWw6IEhUTUxCdXR0b25FbGVtZW50LCBuYW1lOiBzdHJpbmcsIGRlZmF1bHROYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpIHtcclxuICAgIGVsLnRleHRDb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLnRleHRDb250ZW50ID0gZGVmYXVsdE5hbWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBlbC50ZXh0Q29udGVudCk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVCdXR0b24sIGNyZWF0ZUltYWdlIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgY3JlYXRlQ2hvaWNlQ29udGFpbmVyIH0gZnJvbSAnLi4vY2hvaWNlLXNldHRpbmdzL2Nob2ljZSc7XHJcbmltcG9ydCB7IHJlbmRlckNoYXQgfSBmcm9tICcuLi9jaGF0L2NoYXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWdpc3RyYXRpb25Db250YWluZXIgfSBmcm9tICcuLi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVFeGl0V2luZG93IH0gZnJvbSAnLi4vZXhpdC13aW5kb3cvZXhpdC13aW5kb3cnO1xyXG5cclxuY29uc3QgY3JlYXRlQ2hvaWNlR2FtZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2hvaWNlLWdhbWUnKTtcclxuICBjb25zdCBidG5QbGF5V2l0aENvbXAgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAnYnRuLWNvbXB1dGVyJyxcclxuICAgICdidXR0b24nLFxyXG4gICAgJ3BsYXkgYWdhaW5zdCBjb21wdXRlcicsXHJcbiAgKTtcclxuICBjb25zdCBidG5NdWx0aXBsYXllciA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICdidG4tbXVsdGlwbGF5ZXInLFxyXG4gICAgJ2J1dHRvbicsXHJcbiAgICAnbXVsdGlwbGF5ZXInLFxyXG4gICk7XHJcbiAgY29uc3QgYnRuUnVsZXMgPSBjcmVhdGVCdXR0b24oJ2J0bi1ydWxlcycsICdidXR0b24nLCAnbGVhcm4sIGhvdyB0byBwbGF5Jyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChidG5QbGF5V2l0aENvbXAsIGJ0bk11bHRpcGxheWVyLCBidG5SdWxlcyk7XHJcblxyXG4gIGJ0blJ1bGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgUm91dGVyLnNldFN0YXRlKCdydWxlcycpO1xyXG4gICAgUm91dGVyLmNoZWNrUGFnZSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdHJhdGlvbi1jb250YWluZXInKT8ucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTWFpblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgbG9nbyA9IGNyZWF0ZUltYWdlKCdsb2dvJywgJy4uL2Fzc2V0cy9pbWcvbG9nby1VTk8ucG5nJywgJ2xvZ28nKTtcclxuICBpZiAoJzQwNCcgIT09IHdpbmRvdy5oaXN0b3J5LnN0YXRlKSB7XHJcbiAgICBtYWluPy5hcHBlbmQobG9nbywgY3JlYXRlQ2hvaWNlR2FtZUNvbnRhaW5lcigpLCByZW5kZXJDaGF0KCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSAncGFnZS00MDQnO1xyXG4gICAgZGl2LmlubmVyVGV4dCA9ICc0MDQnO1xyXG4gICAgbWFpbj8uYXBwZW5kKGxvZ28sIGRpdik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWFpbjtcclxufTtcclxuXHJcbmNvbnN0IHNob3dEZXZlbG9wZWRCeUJsb2NrID0gKCkgPT4ge1xyXG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ3Nob3cnLFxyXG4gICk7XHJcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXZlbG9wZWQtYnknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZChcclxuICAgICdzaG93JyxcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgaGlkZVNldHRpbmdzID0gKGVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XHJcbiAgKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlciAuYnRucy1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudFxyXG4gICkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcclxufTtcclxuXHJcbmNvbnN0IHNob3dTZXR0aW5ncyA9IChlbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcclxuICAoXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC5idG5zLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50XHJcbiAgKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiBoaWRlU2V0dGluZ3MoZWxlbWVudCksIDUwMDApO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ2hvaWNlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNob2ljZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9pY2UtY29udGFpbmVyJyk7XHJcbiAgY2hvaWNlQ29udGFpbmVyPy5yZW1vdmUoKTtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wYWNpdHknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICdzaG93JyxcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dDaG9pY2VDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnc2hvdycsXHJcbiAgKTtcclxuICBjcmVhdGVDaG9pY2VDb250YWluZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IGdvVG9NYWluUGFnZSA9IChtYWluOiBIVE1MRGl2RWxlbWVudCwgZWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQpID0+IHtcclxuICBjb25zdCByZXN1bHRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1yZXN1bHRzJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgaWYgKHJlc3VsdHNCdG4pIHJlc3VsdHNCdG4ucmVtb3ZlKCk7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gIGNyZWF0ZU1haW5QYWdlKCk7XHJcbiAgUm91dGVyLnNldFN0YXRlKCdob21lJyk7XHJcbiAgUm91dGVyLmNoZWNrUGFnZSgpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLWRldmVsb3BlZCcpKSBzaG93RGV2ZWxvcGVkQnlCbG9jaygpO1xyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5zZXR0aW5ncycpKSBzaG93U2V0dGluZ3MoZWxlbWVudCk7XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmJ0bi1jb21wdXRlcicpKSB7XHJcbiAgICBSb3V0ZXIuc2V0U3RhdGUoJ3NpbmdsZS1wbGF5ZXInKTtcclxuICAgIFJvdXRlci5jaGVja1BhZ2UoKTtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmNob2ljZS1jb250YWluZXIgLmJ0bi1jcm9zcycpKSB7XHJcbiAgICByZW1vdmVDaG9pY2VDb250YWluZXIoKTtcclxuICAgIFJvdXRlci51cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnZGlmZmljdWx0Jyk7XHJcbiAgICBSb3V0ZXIudXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ251bWJlck9mUGxheWVycycpO1xyXG4gICAgUm91dGVyLnNldFN0YXRlKCdob21lJyk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tbWFpbi1wYWdlJykpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1maWVsZCcpKSB7XHJcbiAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICdzaG93JyxcclxuICAgICAgKTtcclxuICAgICAgY3JlYXRlRXhpdFdpbmRvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ29Ub01haW5QYWdlKG1haW4sIGVsZW1lbnQpO1xyXG4gICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3RyYXRpb24tY29udGFpbmVyJykpIGNyZWF0ZVJlZ2lzdHJhdGlvbkNvbnRhaW5lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLXllcycpKSB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wYWNpdHknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgJ3Nob3cnLFxyXG4gICAgKTtcclxuICAgIGdvVG9NYWluUGFnZShtYWluLCBlbGVtZW50KTtcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdHJhdGlvbi1jb250YWluZXInKSkgY3JlYXRlUmVnaXN0cmF0aW9uQ29udGFpbmVyKCk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tbm8nKSkge1xyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICdzaG93JyxcclxuICAgICk7XHJcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZSgpO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVCdXR0b24sIGNyZWF0ZUlucHV0LCBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZ2lzdHJhdGlvbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBpZiAoZG9jdW1lbnQuY29va2llLmluY2x1ZGVzKCd1c2VyPScpKSB7XHJcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndXNlci1sb2dnZWQnKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmlubmVyVGV4dCA9IGBMT0dJTiBBUyAke2RvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLmZpbHRlcih2YWx1ZSA9PiB7cmV0dXJuIHZhbHVlLmluY2x1ZGVzKCd1c2VyPScpO30pWzBdLnJlcGxhY2UoJ3VzZXI9JywgJycpfWA7XHJcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdidXR0b24nLCAnc2lnbiBvdXQnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykubWFwKHZhbHVlID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsdWUuaW5jbHVkZXMoJ3VzZXI9JylcclxuICAgICAgICAgID8gdmFsdWUuY29uY2F0KCc7bWF4LWFnZT0tMTsnKVxyXG4gICAgICAgICAgOiB2YWx1ZTtcclxuICAgICAgfSkuam9pbignJyk7XHJcbiAgICAgIFJvdXRlci5zZXRTdGF0ZSgnaG9tZScpO1xyXG4gICAgICBSb3V0ZXIuY2hlY2tQYWdlKCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQocCwgYnV0dG9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkJ0biA9IGNyZWF0ZUJ1dHRvbignYnRuLXJlZycsICdidXR0b24nLCAncmVnaXN0cmF0aW9uJyk7XHJcbiAgICBjb25zdCBsb2dpbkJ0biA9IGNyZWF0ZUJ1dHRvbignYnRuLWxvZycsICdidXR0b24nLCAnbG9naW4nKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQocmVnaXN0cmF0aW9uQnRuLCBsb2dpbkJ0bik7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIucHJlcGVuZChjb250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZ09yTG9nV2luZG93ID0gKG1ldGhvZDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCBgJHttZXRob2R9LXdpbmRvd2ApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IG5hbWVCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGAke21ldGhvZH0tbmFtZS1ibG9ja2ApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IHBhc3N3b3JkQmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBgJHttZXRob2R9LXBhc3N3b3JkLWJsb2NrYCkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0IG5hbWVUaXRsZSA9IGNyZWF0ZVBhcmFncmFwaChgJHttZXRob2R9LW5hbWUtdGl0bGVgLCAnRWRpdCB5b3VyIG5pY2tuYW1lJyk7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gY3JlYXRlSW5wdXQoYGlucHV0LSR7bWV0aG9kfS1uYW1lYCwgJ3RleHQnLCAnWzUgLSAxMCBsZXR0ZXJzXScpO1xyXG4gIGlucHV0TmFtZS5wYXR0ZXJuID0gJ1tBLVphLXpdezUsMTB9JztcclxuICBpbnB1dE5hbWUubWF4TGVuZ3RoID0gMTA7XHJcbiAgaW5wdXROYW1lLm9uaW5wdXQgPSAoKSA9PiBpbnB1dE5hbWUudmFsdWUgPSBpbnB1dE5hbWUudmFsdWUucmVwbGFjZSgvW17QsC3Rj2EtetCQLdCvQS1aXS9nLCAnJyk7XHJcblxyXG4gIGNvbnN0IHBhc3N3b3JkVGl0bGUgPSBjcmVhdGVQYXJhZ3JhcGgoYCR7bWV0aG9kfS1wYXNzd29yZC10aXRsZWAsICdFZGl0IHlvdXIgcGFzc3dvcmQnKTtcclxuICBjb25zdCBpbnB1dFBhc3N3b3JkID0gY3JlYXRlSW5wdXQoYGlucHV0LSR7bWV0aG9kfS1wYXNzd29yZGAsICdwYXNzd29yZCcsICdbNSBudW1iZXJzXScpO1xyXG4gIGlucHV0UGFzc3dvcmQucGF0dGVybiA9ICdbMC05XXs1fSc7XHJcbiAgaW5wdXRQYXNzd29yZC5tYXhMZW5ndGggPSA1O1xyXG4gIGlucHV0UGFzc3dvcmQub25pbnB1dCA9ICgpID0+IGlucHV0UGFzc3dvcmQudmFsdWUgPSBpbnB1dFBhc3N3b3JkLnZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcblxyXG4gIGNvbnN0IGNyb3NzID0gY3JlYXRlQnV0dG9uKCdidG4tY3Jvc3MnLCAnYnV0dG9uJywgJ3gnKTtcclxuICBjb25zdCBzdWJtaXQgPSBjcmVhdGVCdXR0b24oYGJ0bi1zdWJtaXQtJHttZXRob2R9YCwgJ3N1Ym1pdCcsIGAke21ldGhvZH1gKTtcclxuICBpZiAobWV0aG9kID09PSAncmVnJykge1xyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2KSA9PiB7XHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXJlZy1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBhc3MgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXJlZy1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICBjb25zdCBtYWlsID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1tYWlsJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJOYW1lOiBuYW1lLCBwYXNzd29yZDogcGFzcywgZW1haWw6IG1haWwgfSBhcyB7IHVzZXJOYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcgfTtcclxuICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfTtcclxuICAgICAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTQuMTU4LjIwNS43ODo5MDAyL3JlZ2lzdHJhdGlvbicsIGZldGNoT3B0aW9ucylcclxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkgYXMgUHJvbWlzZTx7IHN0YXR1czogYm9vbGVhbiB9PilcclxuICAgICAgICAudGhlbihvYmogPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5zdGF0dXMpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgIGFsZXJ0KCdyZWdpc3RlcmVkIScpO1xyXG4gICAgICAgICAgICBSb3V0ZXIuc2V0U3RhdGUoJ2hvbWUnKTtcclxuICAgICAgICAgICAgUm91dGVyLmNoZWNrUGFnZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgIGFsZXJ0KCd1c2VyIHdpdGggdGhpcyBuaWNrbmFtZSBhbHJlYWR5IGV4aXN0IScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2KSA9PiB7XHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWxvZy1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBhc3MgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWxvZy1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICBjb25zdCBkYXRhID0geyB1c2VyTmFtZTogbmFtZSwgcGFzc3dvcmQ6IHBhc3MgfSBhcyB7IHVzZXJOYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgfTtcclxuICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIC8vbW9kZTogJ25vLWNvcnMnIGFzIFJlcXVlc3RNb2RlLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfTtcclxuICAgICAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTQuMTU4LjIwNS43ODo5MDAyL2xvZ2luJywgZmV0Y2hPcHRpb25zKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpIGFzIFByb21pc2U8eyBzdGF0dXM6IGJvb2xlYW4sIGRhdGE6IHN0cmluZyB9PilcclxuICAgICAgICAudGhlbihvYmogPT4ge1xyXG4gICAgICAgICAgaWYgKG9iaj8uc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG9iai5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBjb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKS5maWx0ZXIodmFsdWUgPT4ge3JldHVybiB2YWx1ZS5pbmNsdWRlcygndXNlcj0nKTt9KTtcclxuICAgICAgICAgICAgQ29udHJvbGxlci53ZWJTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ1VQREFURV9OQU1FJywgZGF0YTogY29va2llWzBdLnJlcGxhY2UoJ3VzZXI9JywgJycpIH0pKTtcclxuICAgICAgICAgICAgUm91dGVyLnNldFN0YXRlKCdob21lJyk7XHJcbiAgICAgICAgICAgIFJvdXRlci5jaGVja1BhZ2UoKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgIGFsZXJ0KGBZb3Ugc2lnbmVkIGluIGFzICR7Y29va2llWzBdLnJlcGxhY2UoJ3VzZXI9JywgJycpfWApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgIGFsZXJ0KCdXcm9uZyBuYW1lIG9yIHBhc3N3b3JkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmFtZUJsb2NrLmFwcGVuZChuYW1lVGl0bGUsIGlucHV0TmFtZSk7XHJcbiAgcGFzc3dvcmRCbG9jay5hcHBlbmQocGFzc3dvcmRUaXRsZSwgaW5wdXRQYXNzd29yZCk7XHJcbiAgZm9ybS5hcHBlbmQobmFtZUJsb2NrLCBwYXNzd29yZEJsb2NrLCBjcm9zcywgc3VibWl0KTtcclxuICBjb25zdCBtYWlsQmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWFpbC1ibG9jaycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGlmIChtZXRob2QgPT09ICdyZWcnKSB7XHJcbiAgICBjb25zdCBtYWlsVGl0bGUgPSBjcmVhdGVQYXJhZ3JhcGgoJ21haWwtdGl0bGUnLCAnRWRpdCB5b3VyIEVtYWlsJyk7XHJcbiAgICBjb25zdCBtYWlsID0gY3JlYXRlSW5wdXQoJ2lucHV0LW1haWwnLCAnbWFpbCcsICdpdmFub3ZpdmFuQG1haWwucnUnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1haWxCbG9jay5hcHBlbmQobWFpbFRpdGxlLCBtYWlsKTtcclxuICAgIGZvcm0uYXBwZW5kKG1haWxCbG9jayk7XHJcbiAgfVxyXG5cclxuICBtYWluLmFwcGVuZChmb3JtKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tcmVnJykpIHtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgY3JlYXRlUmVnT3JMb2dXaW5kb3coJ3JlZycpO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcucmVnLXdpbmRvdyAuYnRuLWNyb3NzJykpIHtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZy13aW5kb3cnKT8ucmVtb3ZlKCk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tbG9nJykpIHtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgY3JlYXRlUmVnT3JMb2dXaW5kb3coJ2xvZycpO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcubG9nLXdpbmRvdyAuYnRuLWNyb3NzJykpIHtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy13aW5kb3cnKT8ucmVtb3ZlKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVSZWdpc3RyYXRpb25Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3RyYXRpb24tY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVQYWdlIH0gZnJvbSAnLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBvcGVuUnVsZXNQYWdlIH0gZnJvbSAnLi9ydWxlcy1wYWdlL3J1bGVzLXBhZ2UnO1xyXG5pbXBvcnQgeyBzaG93Q2hvaWNlQ29udGFpbmVyIH0gZnJvbSAnLi9tYWluLXBhZ2UvbWFpbi1wYWdlJztcclxuY2xhc3MgUm91dGVyIHtcclxuICBzdGF0aWMgdXJsOiBVUkw7XHJcblxyXG4gIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgUm91dGVyLnVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgc3dpdGNoIChSb3V0ZXIudXJsLmhhc2gpIHtcclxuICAgICAgY2FzZSAnJzoge1xyXG4gICAgICAgIFJvdXRlci5zZXRTdGF0ZSgnaG9tZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJyNob21lJzoge1xyXG4gICAgICAgIFJvdXRlci5zZXRTdGF0ZSgnaG9tZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJyNydWxlcyc6IHtcclxuICAgICAgICBSb3V0ZXIuc2V0U3RhdGUoJ3J1bGVzJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnI3NpbmdsZS1wbGF5ZXInOiB7XHJcbiAgICAgICAgUm91dGVyLnNldFN0YXRlKCdzaW5nbGUtcGxheWVyJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIFJvdXRlci5zZXRTdGF0ZSgnNDA0Jyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFJvdXRlci5jaGVja1BhZ2UoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXRTdGF0ZShzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICBSb3V0ZXIudXJsLmhhc2ggPSBzdGF0ZTtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgJycsIFJvdXRlci51cmwuaGFzaCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hlY2tQYWdlKCkge1xyXG4gICAgc3dpdGNoICh3aW5kb3cuaGlzdG9yeS5zdGF0ZSkge1xyXG4gICAgICBjYXNlICdob21lJzoge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3J1bGVzJzoge1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgICAgICBvcGVuUnVsZXNQYWdlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnc2luZ2xlLXBsYXllcic6IHtcclxuICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICAgICAgc2hvd0Nob2ljZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ211bHRpcGxheWVyJzoge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJzQwNCc6IHtcclxuICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIFJvdXRlci5zZXRTdGF0ZSgnNDA0Jyk7XHJcbiAgICAgICAgUm91dGVyLmNoZWNrUGFnZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcbiIsImltcG9ydCB7IGJsdWVDb2xvciwgZ3JlZW5Db2xvciwgcmVkQ29sb3IsIHllbGxvd0NvbG9yLCByZW5kZXJDYXJkV2l0aE51bWJlciwgcmVuZGVyTXVsdGlDYXJkLCByZW5kZXJCbG9ja2VkQ2FyZCwgcmVuZGVyUGx1c0ZvdXJDYXJkLCByZW5kZXJQbHVzVHdvQ2FyZCwgcmVuZGVyUmV2ZXJzZUNhcmQgfSBmcm9tICcuLi9jYXJkcy9jYXJkcyc7XHJcbmltcG9ydCB7IGxhbmdEYXRhIH0gZnJvbSAnLi4vZGF0YSc7XHJcbmltcG9ydCB7IGFkZEJ1dHRvbkJhY2tUb01haW5QYWdlLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVBhcmFncmFwaCB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5jb25zdCBmbGlwQ2FyZCA9IChlOiBFdmVudCk6IHZvaWQgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU/LnBhcmVudE5vZGUgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmRGcm9udCA9IChjdXJyQ2FyZDogRWxlbWVudCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjYXJkRnJvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1ibG9jay1mcm9udCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGNhcmRJbWdXcmFwcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtaW1nLXdyYXBwZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjYXJkSW1nV3JhcHBlci5hcHBlbmQoY3VyckNhcmQpO1xyXG5cclxuICBjb25zdCBidG5SZWFkTW9yZSA9IGNyZWF0ZUJ1dHRvbignYnRuLXJlYWQnLCAnYnV0dG9uJywgJ3JlYWQgbW9yZS4uLicpO1xyXG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEltZ1dyYXBwZXIsIGJ0blJlYWRNb3JlKTsgXHJcblxyXG4gIGJ0blJlYWRNb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGZsaXBDYXJkKGUpO1xyXG4gIH0gKTtcclxuXHJcbiAgcmV0dXJuIGNhcmRGcm9udDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmRCYWNrID0gKGNhcmRUaXRsZTogc3RyaW5nLCBjYXJkVmFsdWU6IHN0cmluZywgY2FyZFRleHQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkLWJsb2NrLWJhY2snKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBcclxuICBjb25zdCBidG5GbGlwID0gY3JlYXRlQnV0dG9uKCdidG4tZmxpcCcsICdidXR0b24nLCAnZmxpcCBjYXJkJyk7XHJcbiAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtZGVzY3JpcHRpb24nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZVBhcmFncmFwaCgnY2FyZC10aXRsZScsIGNhcmRUaXRsZSk7XHJcbiAgY29uc3QgdmFsdWUgPSBjcmVhdGVQYXJhZ3JhcGgoJ2NhcmQtdmFsdWUnLCBjYXJkVmFsdWUpO1xyXG4gIGNvbnN0IHRleHQgPSBjcmVhdGVQYXJhZ3JhcGgoJ2NhcmQtdGV4dCcsIGNhcmRUZXh0KTtcclxuXHJcbiAgY2FyZERlc2NyaXB0aW9uLmFwcGVuZCh0aXRsZSwgdmFsdWUsIHRleHQpO1xyXG5cclxuICBidG5GbGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGZsaXBDYXJkKGUpO1xyXG4gIH0gKTtcclxuXHJcbiAgY2FyZEJhY2suYXBwZW5kKGNhcmREZXNjcmlwdGlvbiwgYnRuRmxpcCk7XHJcbiAgcmV0dXJuIGNhcmRCYWNrO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhcmRCbG9jayAgPSAoY3VyckNhcmQ6IEVsZW1lbnQsIGNhcmRUaXRsZTogc3RyaW5nLCBjYXJkVmFsdWU6IHN0cmluZywgY2FyZFRleHQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmRGcm9udChjdXJyQ2FyZCksIGNyZWF0ZUNhcmRCYWNrKGNhcmRUaXRsZSwgY2FyZFZhbHVlLCBjYXJkVGV4dCkpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyZHNEZXNjcmlwdGlvbiA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgY2FyZHNEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkcy1kZXNjcmlwdGlvbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIFxyXG4gIGNvbnN0IG51bWJlcmVkQ2FyZCA9IGNyZWF0ZUNhcmRCbG9jayhyZW5kZXJDYXJkV2l0aE51bWJlcignOCcsIGdyZWVuQ29sb3IsIDAuNSksIGxhbmdEYXRhLnJ1WydudW1iZXJlZC1jYXJkLXRpdGxlJ10sIGxhbmdEYXRhLnJ1WydudW1iZXJlZC1jYXJkLXBvaW50cyddLCBsYW5nRGF0YS5ydVsnbnVtYmVyZWQtY2FyZC1kZXNjciddKTtcclxuICBjb25zdCBwbHVzVHdvQ2FyZCA9IGNyZWF0ZUNhcmRCbG9jayhyZW5kZXJQbHVzVHdvQ2FyZChibHVlQ29sb3IsIDAuNSksIGxhbmdEYXRhLnJ1WydwbHVzdHdvLWNhcmQtdGl0bGUnXSwgbGFuZ0RhdGEucnVbJ2FjdGlvbi1jYXJkLXBvaW50cyddLCBsYW5nRGF0YS5ydVsncGx1c3R3by1jYXJkLWRlc2NyJ10pO1xyXG4gIGNvbnN0IHJldmVyc2VDYXJkID0gY3JlYXRlQ2FyZEJsb2NrKHJlbmRlclJldmVyc2VDYXJkKHJlZENvbG9yLCAwLjUpLCBsYW5nRGF0YS5ydVsncmV2ZXJzZS1jYXJkLXRpdGxlJ10sIGxhbmdEYXRhLnJ1WydhY3Rpb24tY2FyZC1wb2ludHMnXSwgbGFuZ0RhdGEucnVbJ3JldmVyc2UtY2FyZC1kZXNjciddKTtcclxuICBjb25zdCBibG9ja2VkQ2FyZCA9IGNyZWF0ZUNhcmRCbG9jayhyZW5kZXJCbG9ja2VkQ2FyZCh5ZWxsb3dDb2xvciwgMC41KSwgbGFuZ0RhdGEucnVbJ2Jsb2NrZWQtY2FyZC10aXRsZSddLCBsYW5nRGF0YS5ydVsnYWN0aW9uLWNhcmQtcG9pbnRzJ10sIGxhbmdEYXRhLnJ1WydibG9ja2VkLWNhcmQtZGVzY3InXSk7XHJcbiAgY29uc3QgcGx1c0ZvdXJDYXJkID0gY3JlYXRlQ2FyZEJsb2NrKHJlbmRlclBsdXNGb3VyQ2FyZCgwLjUpLCBsYW5nRGF0YS5ydVsncGx1c2ZvdXItY2FyZC10aXRsZSddLCBsYW5nRGF0YS5ydVsnYmxhY2stY2FyZC1wb2ludHMnXSwgbGFuZ0RhdGEucnVbJ3BsdXNmb3VyLWNhcmQtZGVzY3InXSk7XHJcbiAgY29uc3QgbXVsdGlDYXJkID0gY3JlYXRlQ2FyZEJsb2NrKHJlbmRlck11bHRpQ2FyZCgwLjUpLCBsYW5nRGF0YS5ydVsnbXVsdGktY2FyZC10aXRsZSddLCBsYW5nRGF0YS5ydVsnYmxhY2stY2FyZC1wb2ludHMnXSwgbGFuZ0RhdGEucnVbJ211bHRpLWNhcmQtZGVzY3InXSk7XHJcbiAgY2FyZHNEZXNjcmlwdGlvbi5hcHBlbmQobnVtYmVyZWRDYXJkLCBibG9ja2VkQ2FyZCwgcmV2ZXJzZUNhcmQsIHBsdXNUd29DYXJkLCBtdWx0aUNhcmQsIHBsdXNGb3VyQ2FyZCk7XHJcblxyXG4gIHJldHVybiBjYXJkc0Rlc2NyaXB0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUnVsZXNQYXJhZ3JhcGggPSAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHJ1bGVzQmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncnVsZXMtZGVzY3JpcHRpb24tYmxvY2snKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBydWxlc1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnLCAncnVsZXMtZGVzY3JpcHRpb24tdGl0bGUnKTtcclxuICBydWxlc1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgY29uc3QgcnVsZXNUZXh0ID0gY3JlYXRlUGFyYWdyYXBoKCdydWxlcy1kZXNjcmlwdGlvbi10ZXh0JywgdGV4dCk7XHJcbiAgcnVsZXNCbG9jay5hcHBlbmQocnVsZXNUaXRsZSwgcnVsZXNUZXh0KTtcclxuICByZXR1cm4gcnVsZXNCbG9jaztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVJ1bGVzRGVzY3JpcHRpb24gPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHJ1bGVzRGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncnVsZXMtZGVzY3JpcHRpb24nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBydWxlc0Rlc2NyaXB0aW9uLmFwcGVuZChjcmVhdGVSdWxlc1BhcmFncmFwaChsYW5nRGF0YS5ydVsncnVsZXMtZ29hbC10aXRsZSddLCBsYW5nRGF0YS5ydVsncnVsZXMtZ29hbC10ZXh0J10pKTtcclxuICBydWxlc0Rlc2NyaXB0aW9uLmFwcGVuZChjcmVhdGVSdWxlc1BhcmFncmFwaChsYW5nRGF0YS5ydVsncnVsZXMtcGxheS10aXRsZSddLCBsYW5nRGF0YS5ydVsncnVsZXMtcGxheS10ZXh0J10pKTtcclxuICBydWxlc0Rlc2NyaXB0aW9uLmFwcGVuZChjcmVhdGVSdWxlc1BhcmFncmFwaChsYW5nRGF0YS5ydVsncnVsZXMtcG9pbnRzLXRpdGxlJ10sIGxhbmdEYXRhLnJ1WydydWxlcy1wb2ludHMtdGV4dCddKSk7XHJcbiAgcmV0dXJuIHJ1bGVzRGVzY3JpcHRpb247XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVSdWxlc0Jsb2NrID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBydWxlc0Jsb2NrID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3J1bGVzLXdyYXBwZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBydWxlc0Jsb2NrLmFwcGVuZChjcmVhdGVSdWxlc0Rlc2NyaXB0aW9uKCksIGNyZWF0ZUNhcmRzRGVzY3JpcHRpb24oKSk7XHJcbiAgcmV0dXJuIHJ1bGVzQmxvY2s7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUnVsZXNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIG1haW4uYXBwZW5kKGNyZWF0ZVJ1bGVzQmxvY2soKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlblJ1bGVzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gIGFkZEJ1dHRvbkJhY2tUb01haW5QYWdlKCk7XHJcbiAgY3JlYXRlUnVsZXNQYWdlKCk7XHJcbn07XHJcblxyXG4iLCJcclxuY29uc3QgbXVzaWMgPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9tdXNpYy9tZWxvZHkubXAzJyk7XHJcbmNvbnN0IGNsaWNrID0gbmV3IEF1ZGlvKCcuLi8uLi9hc3NldHMvbXVzaWMvY2xpY2subXAzJyk7XHJcbmNvbnN0IGdldENhcmQgPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9tdXNpYy9vbmVfY2FyZC5tcDMnKTtcclxuZXhwb3J0IGNvbnN0IGNoYXRTb3VuZCA9IG5ldyBBdWRpbygnLi4vLi4vYXNzZXRzL211c2ljL2NoYXQubXAzJyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb2xvclNvdW5kID0gbmV3IEF1ZGlvKCcuLi8uLi9hc3NldHMvbXVzaWMvY29sb3IubXAzJyk7XHJcbmV4cG9ydCBjb25zdCBnZXRSZXZlcnNlU291bmQgPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9tdXNpYy9yZXZlcnMubXAzJyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDaG9vc2VTb3VuZCA9IG5ldyBBdWRpbygnLi4vLi4vYXNzZXRzL211c2ljL2Nob29zZS5tcDMnKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbXVzaWNQbGF5ID0gKCkgPT4ge1xyXG4gIC8vIG11c2ljLmF1dG9wbGF5ID0gdHJ1ZTtcclxuICBpZiAobXVzaWMucmVhZHlTdGF0ZSkge1xyXG4gICAgdm9pZCBtdXNpYy5wbGF5KCk7XHJcbiAgfVxyXG4gIG11c2ljLmxvb3AgPSB0cnVlO1xyXG59O1xyXG5leHBvcnQgY29uc3QgbXVzaWNTdG9wID0gKCkgPT4ge1xyXG4gIHZvaWQgbXVzaWMucGF1c2UoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRNdXNpYyA9IChlbDpIVE1MQnV0dG9uRWxlbWVudCApID0+IHtcclxuICBpZiAoZWwudGV4dENvbnRlbnQgPT09ICdtdXNpYyBPTicpIHtcclxuICAgIG11c2ljUGxheSgpO1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnb2ZmJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG11c2ljU3RvcCgpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnb2ZmJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjbGlja1NvdW5kUGxheSA9ICgpID0+IHtcclxuICBpZiAoY2xpY2sucmVhZHlTdGF0ZSkgdm9pZCBjbGljay5wbGF5KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFNvdW5kUGxheSA9ICgpID0+IHtcclxuICBpZiAoZ2V0Q2FyZC5yZWFkeVN0YXRlKSB2b2lkIGdldENhcmQucGxheSgpO1xyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS1zb3VuZHMgb24vb2ZmXHJcbmV4cG9ydCBjb25zdCBvblNvdW5kcyA9ICgpID0+IHtcclxuICBjbGljay52b2x1bWUgPSAxO1xyXG4gIGdldENhcmQudm9sdW1lID0gMTtcclxuICBjaGF0U291bmQudm9sdW1lID0gMTtcclxuICBnZXRDb2xvclNvdW5kLnZvbHVtZSA9IDE7XHJcbiAgZ2V0UmV2ZXJzZVNvdW5kLnZvbHVtZSA9IDE7XHJcbiAgZ2V0Q2hvb3NlU291bmQudm9sdW1lID0gMTtcclxufTtcclxuZXhwb3J0IGNvbnN0IG9mZlNvdW5kcyA9ICgpID0+IHtcclxuICBjbGljay52b2x1bWUgPSAwO1xyXG4gIGdldENhcmQudm9sdW1lID0gMDtcclxuICBjaGF0U291bmQudm9sdW1lID0gMDtcclxuICBnZXRDb2xvclNvdW5kLnZvbHVtZSA9IDA7XHJcbiAgZ2V0UmV2ZXJzZVNvdW5kLnZvbHVtZSA9IDA7XHJcbiAgZ2V0Q2hvb3NlU291bmQudm9sdW1lID0gMDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTb3VuZHMgPSAoZWw6SFRNTEJ1dHRvbkVsZW1lbnQgKSA9PiB7XHJcbiAgaWYgKGVsLnRleHRDb250ZW50ID09PSAnc291bmQgT04nKSB7XHJcbiAgICBvblNvdW5kcygpO1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnb2ZmJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9mZlNvdW5kcygpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnb2ZmJyk7XHJcbiAgfVxyXG59OyIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvblJlc3VsdHMgfSBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3BhbiwgYWRkQnV0dG9uQmFja1RvTWFpblBhZ2UsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN1bHRzTGlzdFRpdGxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW0gPSBjcmVhdGVFbGVtZW50KCdsaScsICdyZXN1bHRzLWl0ZW0nKSBhcyBIVE1MTElFbGVtZW50O1xyXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdWx0cy10aXRsZScpO1xyXG4gIGNvbnN0IG5hbWUgPSBjcmVhdGVTcGFuKCdyZXN1bHQtcGxheWVyLW5hbWUnLCAnbmlja25hbWUnKTtcclxuICBjb25zdCBwb2ludHMgPSBjcmVhdGVTcGFuKCdwbGF5ZXItcG9pbnRzJywgJ3BvaW50cycpO1xyXG4gIGl0ZW0uYXBwZW5kKG5hbWUsIHBvaW50cyk7XHJcbiAgXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQbGF5ZXJSZXN1bHQgPSAobmlja25hbWU6IHN0cmluZywgcG9pbnRzOiBudW1iZXIpID0+IHtcclxuICBjb25zdCBwbGF5ZXIgPSBjcmVhdGVFbGVtZW50KCdsaScsICdyZXN1bHRzLWl0ZW0nKSBhcyBIVE1MTElFbGVtZW50O1xyXG4gIGNvbnN0IG5hbWUgPSBjcmVhdGVTcGFuKCdyZXN1bHQtcGxheWVyLW5hbWUnLCBuaWNrbmFtZSk7XHJcbiAgY29uc3QgcG9pbnRzUXVhbnRpdHkgPSBjcmVhdGVTcGFuKCdwbGF5ZXItcG9pbnRzJywgYCR7cG9pbnRzfWApO1xyXG4gIHBsYXllci5hcHBlbmQobmFtZSwgcG9pbnRzUXVhbnRpdHkpO1xyXG4gIHJldHVybiBwbGF5ZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVSZXN1bHRzVGFibGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Jlc3VsdHMtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJ3Jlc3VsdHMtbGlzdCcpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgbGlzdC5hcHBlbmQoY3JlYXRlUmVzdWx0c0xpc3RUaXRsZSgpKTtcclxuICBsaXN0LmFwcGVuZChjcmVhdGVQbGF5ZXJSZXN1bHQoJ0JvcmlzJywgMTApLCBjcmVhdGVQbGF5ZXJSZXN1bHQoJ0V2Z2VueScsIDIwKSwgY3JlYXRlUGxheWVyUmVzdWx0KCdKb3JhJywgMjMpLCBjcmVhdGVQbGF5ZXJSZXN1bHQoJ0FsZXgnLCAxMDAwMCksIGNyZWF0ZVBsYXllclJlc3VsdCgnVml0eWEnLCAyKSk7XHJcbiAgY29uc3QgY3Jvc3MgPSBjcmVhdGVCdXR0b24oJ2J0bi1jcm9zcycsICdidXJyb24nLCAneCcpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGxpc3QsIGNyb3NzKTtcclxuICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLXJlc3VsdHMnKSkge1xyXG4gICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1haW4tcGFnZScpKSBhZGRCdXR0b25CYWNrVG9NYWluUGFnZSgpO1xyXG4gICAgY3JlYXRlUmVzdWx0c1RhYmxlKCk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5yZXN1bHRzLWNvbnRhaW5lciAuYnRuLWNyb3NzJykpIHtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtY29udGFpbmVyJyk/LnJlbW92ZSgpO1xyXG4gICAgY3JlYXRlQnV0dG9uUmVzdWx0cygpO1xyXG4gIH1cclxufSk7XHJcbiIsIi8qIEFjY2VwdHMgaW5wdXQgYW5kIGNvbnZlcnRzIGl0IHRvIGNvbW1hbmRzIGZvciB0aGUgbW9kZWwgb3Igdmlldy4gKi9cclxuXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgQ2FyZEluZm8sIFdlYlNvY2tldE1lc3NhZ2UgfSBmcm9tICcuL3R5cGVzJztcclxuLy8gaW1wb3J0IENhcmREZWNrLCB7IGNhcmREZWNrIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NyYy9nYW1lL9GBYXJkX2RlY2snO1xyXG5pbXBvcnQgeyBibHVlQ29sb3IsIGdyZWVuQ29sb3IsIHJlZENvbG9yLCByZW5kZXJCbG9ja2VkQ2FyZCwgcmVuZGVyQ2FyZFdpdGhOdW1iZXIsIHJlbmRlck11bHRpQ2FyZCwgcmVuZGVyUGx1c0ZvdXJDYXJkLCByZW5kZXJQbHVzVHdvQ2FyZCwgcmVuZGVyUmV2ZXJzZUNhcmQsIHllbGxvd0NvbG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmRzL2NhcmRzJztcclxuaW1wb3J0IHsgY2xpY2tTb3VuZFBsYXksIGdldENhcmRTb3VuZFBsYXksIGdldENob29zZVNvdW5kIH0gZnJvbSAnLi9jb21wb25lbnRzL3NvdW5kcyc7XHJcbmltcG9ydCB7IG1vdmVDdXJyQ2FyZCB9IGZyb20gJy4vY29tcG9uZW50cy9nYW1lLWZpZWxkL2dhbWUtYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgY2hvb3NlQ29sb3JBbmltYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvYW5pbWF0ZWQtaXRlbXMvYW5pbWF0ZWQtaXRlbXMnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIHdlYlNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBteU5hbWU6IHN0cmluZztcclxuXHJcbiAgLyogQ29udHJvbGxlciBsYXVuY2ggKi9cclxuICBzdGF0aWMgc3RhcnQocG9ydDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLndlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzczovLzE5NC4xNTguMjA1Ljc4OiR7cG9ydH1gKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuY29va2llLmluY2x1ZGVzKCd1c2VyPScpKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykuZmlsdGVyKHZhbHVlID0+IHtyZXR1cm4gdmFsdWUuaW5jbHVkZXMoJ3VzZXI9Jyk7fSk7XHJcbiAgICAgICAgQ29udHJvbGxlci53ZWJTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ1VQREFURV9OQU1FJywgZGF0YTogY29va2llWzBdLnJlcGxhY2UoJ3VzZXI9JywgJycpIH0pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBDb250cm9sbGVyLndlYlNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uOiAnV0hBVFNfTVlfTkFNRScsIGRhdGE6ICcnIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICAvL1RPRE86IFJlbW92ZSB0aGlzIGZlYXR1cmUgYWZ0ZXIgc3dpdGNoaW5nIHRvIG5vcm1hbCBtYXBzXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTaW1wbGVDYXJkKGlkOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3NpbXBsZS1jYXJkJyk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgY2FzZSAnYmx1ZSc6IHtjb2xvciA9IGJsdWVDb2xvcjt9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlZCc6IHtjb2xvciA9IHJlZENvbG9yO30gYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ3JlZW4nOiB7Y29sb3IgPSBncmVlbkNvbG9yO30gYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDoge2NvbG9yID0geWVsbG93Q29sb3I7fSBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlkIDwgMTAwKSB7XHJcbiAgICAgICAgY29uc3QgaWROdW0gID0gaWQgJSAyNTtcclxuICAgICAgICBpZiAoaWROdW0gPCAxOSkge1xyXG4gICAgICAgICAgZGl2LmFwcGVuZChyZW5kZXJDYXJkV2l0aE51bWJlcih2YWx1ZS50b1N0cmluZygpLCBjb2xvciwgMC4yNSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaWROdW0gPCAyMSkge1xyXG4gICAgICAgICAgZGl2LmFwcGVuZChyZW5kZXJQbHVzVHdvQ2FyZChjb2xvciwgMC4yNSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaWROdW0gPCAyMykge1xyXG4gICAgICAgICAgZGl2LmFwcGVuZChyZW5kZXJSZXZlcnNlQ2FyZChjb2xvciwgMC4yNSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXYuYXBwZW5kKHJlbmRlckJsb2NrZWRDYXJkKGNvbG9yLCAwLjI1KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGlkID4gMTA0KSB7XHJcbiAgICAgICAgZGl2LmFwcGVuZChyZW5kZXJQbHVzRm91ckNhcmQoMC4yNSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpdi5hcHBlbmQocmVuZGVyTXVsdGlDYXJkKDAuMjUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LmlkID0gaWQudG9TdHJpbmcoKTtcclxuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcclxuICAgICAgICBjbGlja1NvdW5kUGxheSgpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRFbCA9IChldnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KS5jbG9zZXN0KCcuY2FyZENlbnRlcicpIGFzIEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkRWwpIHtcclxuICAgICAgICAgIGNsaWNrZWRFbC5pZCA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNsaWNrZWRFbC5pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyOiBzdHJpbmcgPSAoKGV2dC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZTtcclxuICAgICAgICBjb25zdCBkYXRhRm9yU2VudCA9IEpTT04uc3RyaW5naWZ5KHsgdXNlck5hbWU6IHVzZXIsIGNhcmRJZDogKGV2dC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLmlkIH0pO1xyXG4gICAgICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdNT1ZFX0JZX1VTRVInLCBkYXRhOiBkYXRhRm9yU2VudCB9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1RPRE86IFJlbW92ZSB0aGlzIGZlYXR1cmUgYWZ0ZXIgc3dpdGNoaW5nIHRvIGEgcHJldHR5IHdpbmRvdyB3aXRoIHBvcHVwIG1lc3NhZ2VzXHJcbiAgICBmdW5jdGlvbiBzaG93Q29sb3JTZWxlY3RXaW5kb3coKTp2b2lkIHtcclxuICAgICAgZnVuY3Rpb24gc2VudENob3NlbkNvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBDb250cm9sbGVyLndlYlNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uOiAnVVNFUlNfU0VMRUNURURfQ09MT1InLCBkYXRhOiBjb2xvciB9KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBjaG9zZW5Db2xvciA9ICcnO1xyXG4gICAgICBjb25zdCBkaWFtb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYW1vbmQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIGRpYW1vbmQuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLWNvbG9yJyk7XHJcbiAgICAgIGRpYW1vbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBjaG9zZW5Db2xvciA9IGNob29zZUNvbG9yQW5pbWF0aW9uKGUpO1xyXG4gICAgICAgIHZvaWQgZ2V0Q2hvb3NlU291bmQucGxheSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2FubiAtIGNob3NlbiBjb2xvcicsIGNob3NlbkNvbG9yKTsgLy8tLS0tLS0tLS0tLS0tLS3Qn9Cj0KHQotCePz8/XHJcbiAgICAgIHNlbnRDaG9zZW5Db2xvcihjaG9zZW5Db2xvcik7XHJcblxyXG5cclxuICAgICAgLy8gY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIC8vIGRpdi5pZCA9ICdwb3B1cF9jaG9vc2VfY29sb3InO1xyXG4gICAgICAvLyBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgLy8gZGl2LnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nO1xyXG4gICAgICAvLyBkaXYuc3R5bGUud2lkdGggPSAnNDAwcHgnO1xyXG4gICAgICAvLyBkaXYuc3R5bGUudG9wID0gJzI1JSc7XHJcbiAgICAgIC8vIGRpdi5zdHlsZS5sZWZ0ID0gJzI1JSc7XHJcbiAgICAgIC8vIGRpdi5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnO1xyXG4gICAgICAvLyBkaXYuc3R5bGUuekluZGV4ID0gJzk5OSc7XHJcbiAgICAgIC8vIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgIC8vIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgLy8gYnV0dG9uLmlubmVyVGV4dCA9ICdncmVlbic7XHJcbiAgICAgIC8vIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAvLyBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgLy8gICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwX2Nob29zZV9jb2xvcicpIGFzIEhUTUxEaXZFbGVtZW50KS5yZW1vdmUoKTtcclxuICAgICAgLy8gICBzZW50Q2hvc2VuQ29sb3IoJ2dyZWVuJyk7XHJcbiAgICAgIC8vIH07XHJcbiAgICAgIC8vIGRpdi5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgLy8gYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIC8vIGJ1dHRvbi5pbm5lclRleHQgPSAnYmx1ZSc7XHJcbiAgICAgIC8vIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XHJcbiAgICAgIC8vIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAvLyAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXBfY2hvb3NlX2NvbG9yJykgYXMgSFRNTERpdkVsZW1lbnQpLnJlbW92ZSgpO1xyXG4gICAgICAvLyAgIHNlbnRDaG9zZW5Db2xvcignYmx1ZScpO1xyXG4gICAgICAvLyB9O1xyXG4gICAgICAvLyBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgIC8vIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAvLyBidXR0b24uaW5uZXJUZXh0ID0gJ3JlZCc7XHJcbiAgICAgIC8vIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgICAgLy8gYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIC8vICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cF9jaG9vc2VfY29sb3InKSBhcyBIVE1MRGl2RWxlbWVudCkucmVtb3ZlKCk7XHJcbiAgICAgIC8vICAgc2VudENob3NlbkNvbG9yKCdyZWQnKTtcclxuICAgICAgLy8gfTtcclxuICAgICAgLy8gZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAvLyBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgLy8gYnV0dG9uLmlubmVyVGV4dCA9ICd5ZWxsb3cnO1xyXG4gICAgICAvLyBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XHJcbiAgICAgIC8vIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAvLyAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXBfY2hvb3NlX2NvbG9yJykgYXMgSFRNTERpdkVsZW1lbnQpLnJlbW92ZSgpO1xyXG4gICAgICAvLyAgIHNlbnRDaG9zZW5Db2xvcigneWVsbG93Jyk7XHJcbiAgICAgIC8vIH07XHJcbiAgICAgIC8vIGRpdi5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmQoZGl2KTtcclxuICAgIH1cclxuICAgIENvbnRyb2xsZXIud2ViU29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAobWVzc2FnZTogTWVzc2FnZUV2ZW50PHN0cmluZz4pID0+IHtcclxuICAgICAgY29uc3QgbXNnOiBXZWJTb2NrZXRNZXNzYWdlID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpIGFzIFdlYlNvY2tldE1lc3NhZ2U7XHJcbiAgICAgIHN3aXRjaCAobXNnLmFjdGlvbikge1xyXG4gICAgICAgIC8qIEdldHRpbmcgdGhlIHVzZXJuYW1lIGFzc2lnbmVkIG9uIHRoZSBzZXJ2ZXIgKi9cclxuICAgICAgICBjYXNlICdZT1VSX05BTUUnOiB7XHJcbiAgICAgICAgICB0aGlzLm15TmFtZSA9IG1zZy5kYXRhO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qINCf0L7Qu9GD0YfQtdC90LjQtSDQutCw0YDRgtGLINGBINGB0LXRgNCy0LXRgNCwICovXHJcbiAgICAgICAgY2FzZSAnR0VUX0NBUkQnOiB7XHJcbiAgICAgICAgICB2b2lkIGdldENhcmRTb3VuZFBsYXkoKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGE6IHsgcGxheWVyOiBzdHJpbmcsIGNhcmQ6IENhcmRJbmZvIH0gPSBKU09OLnBhcnNlKG1zZy5kYXRhKSBhcyB7IHBsYXllcjogc3RyaW5nLCBjYXJkOiBDYXJkSW5mbyB9O1xyXG4gICAgICAgICAgY29uc3QgY2FyZHNPbkhhbmQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGF0YS5wbGF5ZXJ9YCkgYXMgSFRNTEVsZW1lbnQpLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBjYXJkc09uSGFuZC5hcHBlbmQoY3JlYXRlU2ltcGxlQ2FyZChkYXRhLmNhcmQuaWQsIGRhdGEuY2FyZC5jb2xvciwgZGF0YS5jYXJkLnZhbHVlKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogUmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIgKi9cclxuICAgICAgICBjYXNlICdNRVNTQUdFJzoge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cobXNnLmRhdGEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFByb2Nlc3NpbmcgYSBtb3ZlICovXHJcbiAgICAgICAgY2FzZSAnTU9WRSc6IHtcclxuICAgICAgICAgIGNsaWNrU291bmRQbGF5KCk7XHJcbiAgICAgICAgICBjb25zdCBjYXJkc09uSGFuZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLTEnKSBhcyBIVE1MRGl2RWxlbWVudCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2ltcGxlLWNhcmQnKTtcclxuICAgICAgICAgIEFycmF5LmZyb20oY2FyZHNPbkhhbmQpLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIG1vdmVDdXJyQ2FyZChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdC1jYXJkJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUnKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGFNb3ZlOiB7IHRvcENhcmQ6IENhcmRJbmZvLCBjdXJyZW50Q29sb3I6IHN0cmluZyB9ID0gSlNPTi5wYXJzZShtc2cuZGF0YSkgYXMgeyB0b3BDYXJkOiBDYXJkSW5mbywgY3VycmVudENvbG9yOiBzdHJpbmcgfTtcclxuICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jYXJkJykgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFNb3ZlLnRvcENhcmQuaWR9YCkgYXMgSFRNTEVsZW1lbnQpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNhcmQnKSBhcyBIVE1MRWxlbWVudCkuYXBwZW5kKGNyZWF0ZVNpbXBsZUNhcmQoZGF0YU1vdmUudG9wQ2FyZC5pZCwgZGF0YU1vdmUudG9wQ2FyZC5jb2xvciwgZGF0YU1vdmUudG9wQ2FyZC52YWx1ZSkpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaG9tYicpIGFzIFNWR0VsZW1lbnQpLnN0eWxlLmZpbGwgPSBkYXRhTW92ZS5jdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogQ2xlYXJzIHRoZSB1c2VyIGZpZWxkIHdpdGggY2FyZHMgKi9cclxuICAgICAgICBjYXNlICdVUERBVEVfQ0FSRCc6IHtcclxuICAgICAgICAgICgoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bXNnLmRhdGF9YCkgYXMgSFRNTEVsZW1lbnQpLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFNldCB0aGUgbmFtZXMgb2YgcGxheWVycyBhbmQgY29tcHV0ZXJzIG9uIHRoZSBwbGF5aW5nIGZpZWxkICovXHJcbiAgICAgICAgY2FzZSAnU0VUX1VTRVJTX0xJU1QnOiB7XHJcbiAgICAgICAgICBjb25zdCB1c2Vyc05hbWU6IHN0cmluZ1tdID0gSlNPTi5wYXJzZShtc2cuZGF0YSkgYXMgc3RyaW5nW107XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzTmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hbWUtcGxheWVyLSR7aSArIDF9YCkgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQpLmlubmVyVGV4dCA9IHVzZXJzTmFtZVtpXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBVc2VyIGNob2ljZSBvZiBjb2xvciAqL1xyXG4gICAgICAgIGNhc2UgJ1VTRVJfTVVTVF9DSE9PU0VfQ09MT1InOiB7XHJcbiAgICAgICAgICBzaG93Q29sb3JTZWxlY3RXaW5kb3coKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBQcmVzc2luZyB0aGUgVU5PIGJ1dHRvbiAqL1xyXG4gICAgICAgIGNhc2UgJ1BVU0hfVU5PX0JVVFRPTic6IHtcclxuICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5vJykgYXMgSFRNTEltYWdlRWxlbWVudCkuY2xpY2soKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBHZXQgcm91bmQgcmVzdWx0cyAqL1xyXG4gICAgICAgIGNhc2UgJ1JFU1VMVFNfT0ZfUk9VTkQnOiB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRzOiB7IHBsYXllcnM6IHN0cmluZywgcG9pbnRzOiBudW1iZXIgfVtdID0gSlNPTi5wYXJzZShtc2cuZGF0YSkgYXMgeyBwbGF5ZXJzOiBzdHJpbmcsIHBvaW50czogbnVtYmVyIH1bXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0NMRUFSX0ZJRUxEJzoge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzJykuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5pbm5lckhUTUwgPSAnJykgO1xyXG4gICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNhcmQnKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlY2snKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnSU5DT01FX0NIQVRfTUVTU0FHRSc6IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKG1zZy5kYXRhKSBhcyB7IHVzZXI6IHN0cmluZywgdXNlck1lc3NhZ2U6IHN0cmluZywgdGltZTogc3RyaW5nIH07XHJcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSAnY2hhdC1tZXNzYWdlJztcclxuICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgcC5pbm5lclRleHQgPSBkYXRhLnVzZXJNZXNzYWdlO1xyXG4gICAgICAgICAgcC5jbGFzc05hbWUgPSAnY2hhdC1tZXNzYWdlLW1lc3NhZ2UnO1xyXG4gICAgICAgICAgZGl2LmFwcGVuZChwKTtcclxuICAgICAgICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICBwLmlubmVyVGV4dCA9IGAke2RhdGEudGltZX1gO1xyXG4gICAgICAgICAgcC5jbGFzc05hbWUgPSAnY2hhdC1tZXNzYWdlLXRpbWUnO1xyXG4gICAgICAgICAgZGl2LmFwcGVuZChwKTtcclxuICAgICAgICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICBwLmlubmVyVGV4dCA9IGAke2RhdGEudXNlcn1gO1xyXG4gICAgICAgICAgcC5jbGFzc05hbWUgPSAnY2hhdC1tZXNzYWdlLW5pY2tuYW1lJztcclxuICAgICAgICAgIGRpdi5hcHBlbmQocCk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXQtd2luZG93JykgYXMgSFRNTEVsZW1lbnQpLmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qIFNlbmRpbmcgY29tbWFuZHMgdG8gdGhlIHNlcnZlciB0byBjcmVhdGUgYSBuZXcgZ2FtZSAqL1xyXG4gIHN0YXRpYyBjcmVhdGVOZXdHYW1lV2l0aENvbXB1dGVyKG51bWJlck9mUGxheWVyczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb250cm9sbGVyLndlYlNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uOiAnQ1JFQVRFX0dBTUUnLCBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHBsYXllcnM6IG51bWJlck9mUGxheWVycywgb25saW5lOiBmYWxzZSB9KSB9KSk7XHJcbiAgICBDb250cm9sbGVyLndlYlNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uOiAnR0VUX1VTRVJTX0xJU1QnLCBkYXRhOiAnJyB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9ydWxlcy1wYWdlL3J1bGVzLXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGFibGUtcmVzdWx0cy90YWJsZS1yZXN1bHRzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2hvaWNlLXNldHRpbmdzL2Nob2ljZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2xvY2FsLXN0b3JhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jaGF0L2NoYXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hbmltYXRlZC1pdGVtcy9hbmltYXRlZC1pdGVtcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIFJvdXRlci5pbml0aWFsaXplKCk7XHJcbiAgQ29udHJvbGxlci5zdGFydCg5MDAxKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
