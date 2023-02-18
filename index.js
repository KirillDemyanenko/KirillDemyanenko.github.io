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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../local-storage */ "./src/components/local-storage.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");








var createChoiceContainer = function (lang) {
    var main = document.querySelector('.main');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'choice-container');
    var quantityPlayersBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'choice-quantity');
    var quantutyTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('quantity-title', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-quantity']);
    var twoPlayers = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createImage)('two', '../assets/img/two.png', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-2-players']);
    var threePlayers = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createImage)('three', '../assets/img/three.png', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-3-players']);
    var fourPlayers = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createImage)('four', '../assets/img/four.png', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-4-players']);
    quantityPlayersBlock.append(twoPlayers, threePlayers, fourPlayers);
    var difficultyTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('difficulty-title', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-difficulty']);
    var difficultyBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'choice-difficulty');
    var easyDifficulty = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-easy', 'button', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-easy']);
    var hardDifficulty = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-hard', 'button', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-hard']);
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-cross', 'button', 'x');
    var btnStartGame = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-start', 'button', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['choose-start']);
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
var fillGameField = function (quantity, lang) {
    var main = document.querySelector('.main');
    document.querySelector('.opacity').classList.remove('show');
    main.innerHTML = '';
    (0,_game_field_game_field__WEBPACK_IMPORTED_MODULE_0__.createGameField)(quantity, lang);
};
var goToGameField = function (lang) {
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
    fillGameField(x, lang);
    (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.addButtonBackToMainPage)(lang);
    (0,_header_header__WEBPACK_IMPORTED_MODULE_1__.createButtonResults)(lang);
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
        goToGameField(_local_storage__WEBPACK_IMPORTED_MODULE_6__.language.chosen);
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
        'btn-flip': 'flip card',
        'btn-read': 'read more...',
        'btn-registr': 'registration',
        'btn-login': 'log in',
        'btn-sign-out': 'sign out',
        'choose-quantity': 'Choose quantity of players',
        'choose-2-players': 'two players',
        'choose-3-players': 'three players',
        'choose-4-players': 'four players',
        'choose-difficulty': 'Choose difficulty',
        'choose-easy': 'easy',
        'choose-hard': 'hard',
        'choose-start': 'start',
        'dev-kir': 'Team Lead Kirill',
        'dev-an': 'Anneli',
        'dev-al': 'Alex',
        'dev-by': 'Developed by',
        'dev-version': 'version',
        'reg-nickname': 'Edit your nickname',
        'reg-pass': 'Edit your password',
        'reg-nickname-title': '[5 - 10 letters]',
        'reg-pass-title': '[5 numbers]',
        'reg-email': 'Edit your Email',
        'reg-email-title': 'ivanovivan@mail.ru',
        'reg-btn': 'submit',
        'leave-message': 'Do you really want to leave the game? \nResults will be lost',
        'leave-yes': 'yes',
        'leave-no': 'cancel',
        'res-name': 'Nickname',
        'res-points': 'Points',
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
        'btn-flip': 'перевернуть',
        'btn-read': 'подробнее...',
        'btn-registr': 'регистрация',
        'btn-login': 'вход',
        'btn-sign-out': 'выход',
        'choose-quantity': 'Выберите количество игроков',
        'choose-2-players': 'два игрока',
        'choose-3-players': 'три игрока',
        'choose-4-players': 'четыре игрока',
        'choose-difficulty': 'Выберите сложность',
        'choose-easy': 'легко',
        'choose-hard': 'сложно',
        'choose-start': 'старт',
        'dev-kir': 'Кирилл',
        'dev-an': 'Аннели',
        'dev-al': 'Алекс',
        'dev-by': 'Разработчики',
        'dev-version': 'версия',
        'reg-nickname': 'Введите ваше имя',
        'reg-pass': 'Введите ваш пароль',
        'reg-nickname-title': '[5 - 10 букв]',
        'reg-pass-title': '[5 цифр]',
        'reg-email': 'Введите ваш адрес почты',
        'reg-email-title': 'ivanovivan@mail.ru',
        'reg-btn': 'подтвердить',
        'leave-message': 'Вы действительно хотите покинуть игру?\nДанные будут утеряны',
        'leave-yes': 'да',
        'leave-no': 'отмена',
        'res-name': 'Имя',
        'res-points': 'Баллы',
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");


var createFooterLinksContainer = function (lang) {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'links-container');
    var linkKirill = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createLink)('kirill-link', 'https://github.com/kirilldemyanenko', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['dev-kir']);
    var ghKirill = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createImage)('kirill', '../assets/img/github-logo.svg', 'kirill');
    linkKirill.append(ghKirill);
    var linkAnneli = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createLink)('kirill-link', 'https://github.com/Anneli-sf', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['dev-an']);
    var ghAnneli = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createImage)('anneli', '../assets/img/github-logo.svg', 'anneli');
    linkAnneli.append(ghAnneli);
    var linkAlex = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createLink)('kirill-link', 'https://github.com/MaestroFront', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['dev-al']);
    var ghAlex = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createImage)('alex', '../assets/img/github-logo.svg', 'alex');
    linkAlex.append(ghAlex);
    container.append(linkKirill, linkAnneli, linkAlex);
    return container;
};
var createDevelopedByContainer = function (lang) {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'developed-by');
    var hide = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'opacity');
    var title = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createParagraph)('developed-title', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['dev-by']);
    var logo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createImage)('team-logo', '../assets/img/team.png', 'team-logo');
    var version = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['dev-version']);
    version.textContent = 'ver 1.01';
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('btn-cross', 'button', 'х');
    container.append(title, logo, createFooterLinksContainer(lang), version, cross);
    hide.append(container);
    return hide;
};
document.addEventListener('click', function (e) {
    var element = e.target;
    if (element.closest('.developed-by .btn-cross'))
        (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.hideDevelopedByBlock)();
});


/***/ }),

/***/ "./src/components/error-page/error-page.ts":
/*!*************************************************!*\
  !*** ./src/components/error-page/error-page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createErrorPage": () => (/* binding */ createErrorPage)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");

var createErrorPage = function () {
    var body = document.querySelector('.body');
    var image = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('error-404', '../../assets/img/error.gif', 'error 404');
    var btnErrorContainer = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'error-btn-container');
    var button = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-main-page', 'button', 'main page');
    btnErrorContainer.append(button);
    body.innerHTML = '';
    body.append(image, btnErrorContainer);
    console.log(window.location.href);
};


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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");


var createExitWindow = function (lang) {
    var main = document.querySelector('.main');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'exit-container');
    var question = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', 'question');
    question.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['leave-message'];
    var btnContainer = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'exit-btns-container');
    var btnYes = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('btn-yes', 'button', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['leave-yes']);
    var btnNo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('btn-no', 'button', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['leave-no']);
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
// import { chooseColor } from '../animated-items/animated-items';



var createFooter = function (lang) {
    var footer = document.querySelector('.footer');
    var btnDevelopedBy = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-developed', 'button', _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['dev-by']);
    var btnShare = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-share', 'button', _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['btn-share']);
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
    if (footer)
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
/* harmony import */ var _rules_page_rules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules-page/rules-page */ "./src/components/rules-page/rules-page.ts");







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
var createGameField = function (quantity, lang) {
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
    var btnRules = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-small-rules', 'button', '?');
    btnRules.addEventListener('click', _rules_page_rules_page__WEBPACK_IMPORTED_MODULE_6__.openRulesWindow);
    main.append(container, (0,_chat_chat__WEBPACK_IMPORTED_MODULE_4__.renderChat)(), (0,_animated_items_animated_items__WEBPACK_IMPORTED_MODULE_5__.renderDiamond)(), (0,_animated_items_animated_items__WEBPACK_IMPORTED_MODULE_5__.renderReverseMessage)(), (0,_rules_page_rules_page__WEBPACK_IMPORTED_MODULE_6__.createRulesWindow)(lang), btnRules);
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router */ "./src/components/router.ts");
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
    _local_storage__WEBPACK_IMPORTED_MODULE_2__.language.chosen = btnLang.textContent;
    localStorage.setItem('language', _local_storage__WEBPACK_IMPORTED_MODULE_2__.language.chosen);
    setTimeout(function () {
        _router__WEBPACK_IMPORTED_MODULE_5__["default"].checkPage();
    }, 1000);
};
var toggleMusic = function (lang) {
    var btnMusicVolume = document.querySelector('.btn-music');
    btnMusicVolume.classList.toggle('off');
    if (btnMusicVolume.classList.contains('off')) {
        btnMusicVolume.textContent = _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-music-off'];
        btnMusicVolume.value = 'off';
        void (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.musicStop)();
    }
    else {
        btnMusicVolume.textContent = _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-music-on'];
        btnMusicVolume.value = 'on';
        void (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.musicPlay)();
    }
    localStorage.setItem('music', btnMusicVolume.value);
};
var toggleSounds = function (lang) {
    var btnSoundsVolume = document.querySelector('.btn-sounds');
    btnSoundsVolume.classList.toggle('off');
    if (btnSoundsVolume.classList.contains('off')) {
        btnSoundsVolume.textContent = _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-sound-off'];
        btnSoundsVolume.value = 'off';
        (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.offSounds)();
    }
    else {
        btnSoundsVolume.textContent = _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-sound-on'];
        btnSoundsVolume.value = 'on';
        (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.onSounds)();
    }
    localStorage.setItem('sounds', btnSoundsVolume.value);
};
var createBtnsHeaderContainer = function (lang) {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'btns-container');
    var btnLang = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-lang', 'button', 'en');
    btnLang.addEventListener('click', changeLanguage);
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setBtnText)(btnLang, 'language', 'en');
    var btnMusicVolume = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-music', 'button', '');
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setBtnText)(btnMusicVolume, 'music', _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-music-on']);
    (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.setMusic)(btnMusicVolume);
    btnMusicVolume.addEventListener('click', function () {
        toggleMusic(lang);
    });
    var btnSoundsVolume = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-sounds', 'button', '');
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setBtnText)(btnSoundsVolume, 'sounds', _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-sound-on']);
    (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.setSounds)(btnSoundsVolume);
    btnSoundsVolume.addEventListener('click', function () {
        toggleSounds(_local_storage__WEBPACK_IMPORTED_MODULE_2__.language.chosen);
    });
    container.append(btnLang, btnMusicVolume, btnSoundsVolume);
    return container;
};
var createButtonResults = function (lang) {
    var mainPageButton = document.querySelector('.btn-main-page');
    var results = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-results', 'button', _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-winners-page']);
    mainPageButton.after(results);
};
var createHeader = function (lang) {
    var header = document.querySelector('.header');
    var returnBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'return-block');
    var settings = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('settings', '../assets/img/settings.png', 'settings');
    header.append(returnBlock, createBtnsHeaderContainer(lang), settings);
    if (!location.hash.includes('rules'))
        (0,_registration_registration__WEBPACK_IMPORTED_MODULE_1__.createRegistrationContainer)(lang);
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");





var createElement = function (tagName, className) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    return element;
};
var createPage = function (lang) {
    document.body.innerHTML = '';
    var body = document.querySelector('.body');
    var header = createElement('header', 'header');
    var main = createElement('main', 'main');
    var footer = createElement('footer', 'footer');
    body.append(header, main, footer, (0,_developed_by_developed_by__WEBPACK_IMPORTED_MODULE_0__.createDevelopedByContainer)(lang));
    (0,_header_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)(lang);
    (0,_main_page_main_page__WEBPACK_IMPORTED_MODULE_2__.createMainPage)(lang);
    (0,_footer_footer__WEBPACK_IMPORTED_MODULE_3__.createFooter)(lang);
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
var addButtonBackToMainPage = function (lang) {
    var btn = createButton('btn-main-page', 'button', _data__WEBPACK_IMPORTED_MODULE_4__.langData[lang]['btn-main-page']);
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
/* harmony export */   "language": () => (/* binding */ language),
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
var language = {
    chosen: 'en',
};
window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('language')) {
        language.chosen = localStorage.getItem('language');
    }
    else
        language.chosen = 'en';
    console.log(language.chosen);
});


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
/* harmony import */ var _error_page_error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error-page/error-page */ "./src/components/error-page/error-page.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../local-storage */ "./src/components/local-storage.ts");









var createChoiceGameContainer = function (lang) {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'choice-game');
    var btnPlayWithComp = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-computer', 'button', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['btn-play-comp']);
    var btnMultiplayer = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-multiplayer', 'button', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['btn-play-online']);
    var btnRules = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-rules', 'button', _data__WEBPACK_IMPORTED_MODULE_7__.langData[lang]['btn-rules']);
    container.append(btnPlayWithComp, btnMultiplayer, btnRules);
    btnRules.addEventListener('click', function () {
        var _a;
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].setState('rules');
        _router__WEBPACK_IMPORTED_MODULE_4__["default"].checkPage();
        (_a = document.querySelector('.registration-container')) === null || _a === void 0 ? void 0 : _a.remove();
    });
    return container;
};
var createMainPage = function (lang) {
    var main = document.querySelector('.main');
    var logo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createImage)('logo', '../assets/img/logo-UNO.png', 'logo');
    if ('404' !== window.history.state) {
        main === null || main === void 0 ? void 0 : main.append(logo, createChoiceGameContainer(lang), (0,_chat_chat__WEBPACK_IMPORTED_MODULE_2__.renderChat)());
    }
    else
        (0,_error_page_error_page__WEBPACK_IMPORTED_MODULE_6__.createErrorPage)();
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
var showChoiceContainer = function (lang) {
    document.querySelector('.opacity').classList.add('show');
    (0,_choice_settings_choice__WEBPACK_IMPORTED_MODULE_1__.createChoiceContainer)(lang);
};
var goToMainPage = function (main, element, lang) {
    var resultsBtn = document.querySelector('.btn-results');
    if (resultsBtn)
        resultsBtn.remove();
    if (!window.location.href.includes('404'))
        main.innerHTML = '';
    element.remove();
    createMainPage(lang);
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
            (0,_exit_window_exit_window__WEBPACK_IMPORTED_MODULE_5__.createExitWindow)(_local_storage__WEBPACK_IMPORTED_MODULE_8__.language.chosen);
        }
        else {
            goToMainPage(main, element, _local_storage__WEBPACK_IMPORTED_MODULE_8__.language.chosen);
            if (!document.querySelector('.registration-container'))
                (0,_registration_registration__WEBPACK_IMPORTED_MODULE_3__.createRegistrationContainer)(_local_storage__WEBPACK_IMPORTED_MODULE_8__.language.chosen);
        }
    }
    if (element.closest('.btn-yes')) {
        document.querySelector('.opacity').classList.remove('show');
        goToMainPage(main, element, _local_storage__WEBPACK_IMPORTED_MODULE_8__.language.chosen);
        if (!document.querySelector('.registration-container'))
            (0,_registration_registration__WEBPACK_IMPORTED_MODULE_3__.createRegistrationContainer)(_local_storage__WEBPACK_IMPORTED_MODULE_8__.language.chosen);
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage */ "./src/components/local-storage.ts");
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





var createRegistrationContainer = function (lang) {
    var header = document.querySelector('.header');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'registration-container');
    if (document.cookie.includes('user=')) {
        var div = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'user-logged');
        var p = document.createElement('p');
        p.innerText = "LOGIN AS ".concat(document.cookie.split(';').filter(function (value) { return value.includes('user='); })[0].replace('user=', ''));
        var button = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'button', _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['btn-sign-out']);
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
        var registrationBtn = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-reg', 'button', _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['btn-registr']);
        var loginBtn = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-log', 'button', _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['btn-login']);
        container.append(registrationBtn, loginBtn);
    }
    header.prepend(container);
};
var createRegOrLogWindow = function (method, lang) {
    var main = document.querySelector('.main');
    var form = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', "".concat(method, "-window"));
    var nameBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', "".concat(method, "-name-block"));
    var passwordBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', "".concat(method, "-password-block"));
    var nameTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)("".concat(method, "-name-title"), _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['reg-nickname']);
    var inputName = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)("input-".concat(method, "-name"), 'text', _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['reg-nickname-title']);
    inputName.pattern = '[A-Za-z]{5,10}';
    inputName.maxLength = 10;
    inputName.oninput = function () { return inputName.value = inputName.value.replace(/[^а-яa-zА-ЯA-Z]/g, ''); };
    var passwordTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)("".concat(method, "-password-title"), _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['reg-pass']);
    var inputPassword = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)("input-".concat(method, "-password"), 'password', _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['reg-pass-title']);
    inputPassword.pattern = '[0-9]{5}';
    inputPassword.maxLength = 5;
    inputPassword.oninput = function () { return inputPassword.value = inputPassword.value.replace(/[^0-9]/g, ''); };
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('btn-cross', 'button', 'x');
    var submit = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)("btn-submit-".concat(method), 'submit', "".concat(method));
    submit.textContent = _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['reg-btn'];
    /* server run on deploy */
    if (!_controller__WEBPACK_IMPORTED_MODULE_2__["default"].webSocket.url.includes('localhost')) {
        if (method === 'reg') {
            submit.addEventListener('click', function (ev) {
                ev.preventDefault();
                var name = document.querySelector('.input-reg-name').value;
                var pass = document.querySelector('.input-reg-password').value;
                var mail = document.querySelector('.input-mail').value;
                var data = { userName: name, password: pass, email: mail };
                _controller__WEBPACK_IMPORTED_MODULE_2__["default"].webSocket.send(JSON.stringify({ action: 'REGISTRATION', data: JSON.stringify(data) }));
            });
        }
        else {
            submit.addEventListener('click', function (ev) { return __awaiter(void 0, void 0, void 0, function () {
                var name, pass, data;
                return __generator(this, function (_a) {
                    ev.preventDefault();
                    name = document.querySelector('.input-log-name').value;
                    pass = document.querySelector('.input-log-password').value;
                    data = { userName: name, password: pass };
                    _controller__WEBPACK_IMPORTED_MODULE_2__["default"].webSocket.send(JSON.stringify({ action: 'LOGIN', data: JSON.stringify(data) }));
                    return [2 /*return*/];
                });
            }); });
        }
        /* server run local */
    }
    else {
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
                            return [4 /*yield*/, fetch('http://localhost:9002/registration', fetchOptions)
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
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            };
                            return [4 /*yield*/, fetch('http://localhost:9002/login', fetchOptions)
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
    }
    nameBlock.append(nameTitle, inputName);
    passwordBlock.append(passwordTitle, inputPassword);
    form.append(nameBlock, passwordBlock, cross, submit);
    var mailBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'mail-block');
    if (method === 'reg') {
        var mailTitle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('mail-title', _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['reg-email']);
        var mail = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('input-mail', 'mail', _data__WEBPACK_IMPORTED_MODULE_3__.langData[lang]['reg-email-title']);
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
        createRegOrLogWindow('reg', _local_storage__WEBPACK_IMPORTED_MODULE_4__.language.chosen);
    }
    if (element.closest('.reg-window .btn-cross')) {
        document.querySelector('.opacity').classList.remove('show');
        (_a = document.querySelector('.reg-window')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    if (element.closest('.btn-log')) {
        document.querySelector('.opacity').classList.add('show');
        createRegOrLogWindow('log', _local_storage__WEBPACK_IMPORTED_MODULE_4__.language.chosen);
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ "./src/components/local-storage.ts");




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
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
                break;
            }
            case 'rules': {
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
                (0,_rules_page_rules_page__WEBPACK_IMPORTED_MODULE_1__.openRulesPage)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
                break;
            }
            case 'single-player': {
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
                (0,_main_page_main_page__WEBPACK_IMPORTED_MODULE_2__.showChoiceContainer)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
                break;
            }
            case 'multiplayer': {
                break;
            }
            case '404': {
                (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.createPage)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
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
/* harmony export */   "createRulesWindow": () => (/* binding */ createRulesWindow),
/* harmony export */   "openRulesPage": () => (/* binding */ openRulesPage),
/* harmony export */   "openRulesWindow": () => (/* binding */ openRulesWindow)
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
var createCardFront = function (currCard, lang) {
    var cardFront = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-block-front');
    var cardImgWrapper = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-img-wrapper');
    cardImgWrapper.append(currCard);
    var btnReadMore = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-read', 'button', _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['btn-read']);
    cardFront.append(cardImgWrapper, btnReadMore);
    btnReadMore.addEventListener('click', function (e) {
        flipCard(e);
    });
    return cardFront;
};
var createCardBack = function (cardTitle, cardValue, cardText, lang) {
    var cardBack = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-block-back');
    var btnFlip = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-flip', 'button', _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['btn-flip']);
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
var createCardBlock = function (currCard, cardTitle, cardValue, cardText, lang) {
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'card-container');
    container.append(createCardFront(currCard, lang), createCardBack(cardTitle, cardValue, cardText, lang));
    return container;
};
var createCardsDescription = function (lang) {
    var cardsDescription = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'cards-description');
    console.log('lang', lang);
    var numberedCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderCardWithNumber)('8', _cards_cards__WEBPACK_IMPORTED_MODULE_0__.greenColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['numbered-card-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['numbered-card-points'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['numbered-card-descr'], lang);
    var plusTwoCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderPlusTwoCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_0__.blueColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['plustwo-card-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['action-card-points'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['plustwo-card-descr'], lang);
    var reverseCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderReverseCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_0__.redColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['reverse-card-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['action-card-points'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['reverse-card-descr'], lang);
    var blockedCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderBlockedCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_0__.yellowColor, 0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['blocked-card-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['action-card-points'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['blocked-card-descr'], lang);
    var plusFourCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderPlusFourCard)(0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['plusfour-card-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['black-card-points'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['plusfour-card-descr'], lang);
    var multiCard = createCardBlock((0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.renderMultiCard)(0.5), _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['multi-card-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['black-card-points'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['multi-card-descr'], lang);
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
var createRulesDescription = function (lang) {
    var rulesDescription = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'rules-description');
    rulesDescription.append(createRulesParagraph(_data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['rules-goal-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['rules-goal-text']));
    rulesDescription.append(createRulesParagraph(_data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['rules-play-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['rules-play-text']));
    rulesDescription.append(createRulesParagraph(_data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['rules-points-title'], _data__WEBPACK_IMPORTED_MODULE_1__.langData[lang]['rules-points-text']));
    return rulesDescription;
};
var createRulesBlock = function (lang) {
    var rulesBlock = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'rules-wrapper');
    rulesBlock.append(createRulesDescription(lang), createCardsDescription(lang));
    return rulesBlock;
};
var createRulesPage = function (lang) {
    var main = document.querySelector('.main');
    main.append(createRulesBlock(lang));
};
var openRulesPage = function (lang) {
    var main = document.querySelector('.main');
    main.innerHTML = '';
    (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.addButtonBackToMainPage)(lang);
    createRulesPage(lang);
};
//----------------------------RULES WINDOW
var createRulesWindow = function (lang) {
    var rulesWindow = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'rules-window');
    var button = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-cross', 'button', 'x');
    rulesWindow.append(createCardsDescription(lang), button);
    rulesWindow.style.display = 'none';
    button.addEventListener('click', function () {
        rulesWindow.style.display = 'none';
        rulesWindow.classList.remove('open');
    });
    return rulesWindow;
};
var openRulesWindow = function () {
    var rulesWindow = document.querySelector('.rules-window');
    rulesWindow.style.display = 'flex';
    rulesWindow.classList.add('open');
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
    if (el.value === 'on') {
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
    if (el.value === 'on') {
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/components/data.ts");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers */ "./src/components/helpers/helpers.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-storage */ "./src/components/local-storage.ts");




var createResultsListTitle = function (lang) {
    var item = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('li', 'results-item');
    item.classList.add('results-title');
    var name = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createSpan)('result-player-name', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['res-name']);
    var points = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createSpan)('player-points', _data__WEBPACK_IMPORTED_MODULE_0__.langData[lang]['res-points']);
    item.append(name, points);
    return item;
};
var createPlayerResult = function (nickname, points) {
    var player = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('li', 'results-item');
    var name = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createSpan)('result-player-name', nickname);
    var pointsQuantity = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createSpan)('player-points', "".concat(points));
    player.append(name, pointsQuantity);
    return player;
};
var createResultsTable = function (lang) {
    var main = document.querySelector('.main');
    var container = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'results-container');
    var list = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createElement)('ul', 'results-list');
    list.append(createResultsListTitle(lang));
    list.append(createPlayerResult('Boris', 10), createPlayerResult('Evgeny', 20), createPlayerResult('Jora', 23), createPlayerResult('Alex', 10000), createPlayerResult('Vitya', 2));
    var cross = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('btn-cross', 'burron', 'x');
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
            (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.addButtonBackToMainPage)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
        createResultsTable(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
    }
    if (element.closest('.results-container .btn-cross')) {
        document.querySelector('.opacity').classList.remove('show');
        (_a = document.querySelector('.results-container')) === null || _a === void 0 ? void 0 : _a.remove();
        (0,_header_header__WEBPACK_IMPORTED_MODULE_1__.createButtonResults)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.language.chosen);
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
/* harmony import */ var _components_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/router */ "./src/components/router.ts");
/* Accepts input and converts it to commands for the model or view. */

// import CardDeck, { cardDeck } from '../../server/src/game/сard_deck';





var Controller = /** @class */ (function () {
    function Controller() {
    }
    /* Controller launch */
    Controller.start = function (port) {
        var _this = this;
        var url = '194.158.205.78'; // 'localhost'
        this.webSocket = new WebSocket("ws://".concat(url, ":").concat(port));
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
                case 'LOGIN': {
                    var messageLogin = JSON.parse(msg.data);
                    document.cookie = messageLogin.data;
                    if (messageLogin.status) {
                        var cookie = document.cookie.split(';').filter(function (value) { return value.includes('user='); });
                        Controller.webSocket.send(JSON.stringify({ action: 'UPDATE_NAME', data: cookie[0].replace('user=', '') }));
                        _components_router__WEBPACK_IMPORTED_MODULE_5__["default"].setState('home');
                        _components_router__WEBPACK_IMPORTED_MODULE_5__["default"].checkPage();
                        // eslint-disable-next-line no-alert
                        alert("You signed in as ".concat(cookie[0].replace('user=', '')));
                    }
                    else {
                        // eslint-disable-next-line no-alert
                        alert('Wrong name or password');
                    }
                    break;
                }
                case 'REGISTRATION': {
                    var messageRegistration = JSON.parse(msg.data);
                    if (messageRegistration.status) {
                        // eslint-disable-next-line no-alert
                        alert('registered!');
                        _components_router__WEBPACK_IMPORTED_MODULE_5__["default"].setState('home');
                        _components_router__WEBPACK_IMPORTED_MODULE_5__["default"].checkPage();
                    }
                    else {
                        // eslint-disable-next-line no-alert
                        alert('user with this nickname already exist!');
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEksVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUMxUTFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ2dCO0FBQ0o7QUFDVTtBQUNSO0FBQ2M7QUFDTDtBQUNUO0FBQ0o7QUFDb0I7QUFDWDtBQUV6QyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2Qsc0VBQWlCLEVBQUUsQ0FBQztJQUNwQix5REFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbmltYXRlZC1pdGVtcy9hbmltYXRlZC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9jYXJkcy1oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2NhcmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXQvY2hhdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9pY2Utc2V0dGluZ3MvY2hvaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV2ZWxvcGVkLWJ5L2RldmVsb3BlZC1ieS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci1wYWdlL2Vycm9yLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXhpdC13aW5kb3cvZXhpdC13aW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lLWZpZWxkL2dhbWUtYW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUtZmllbGQvZ2FtZS1maWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nbG9iYWwtY29tcG9uZW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3J1bGVzLXBhZ2UvcnVsZXMtcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUtcmVzdWx0cy90YWJsZS1yZXN1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1nZXQgcmFuZG9tIGNvbG9yXHJcblxyXG5pbXBvcnQgeyBibHVlQ29sb3IsIGdyZWVuQ29sb3IsIHJlZENvbG9yLCB5ZWxsb3dDb2xvciB9IGZyb20gJy4uL2NhcmRzL2NhcmRzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW1hZ2UsIGdldFJhbmRvbUludCB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCB7IGdldENvbG9yU291bmQsIGdldFJldmVyc2VTb3VuZCB9IGZyb20gJy4uL3NvdW5kcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRGlhbW9uZCA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGlhbW9uZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdkaWFtb25kLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGRpYW1vbmRzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2RpYW1vbmRzJyk7XHJcbiAgY29uc3QgaWRzID0gWydyZWQtZGlhbW9uZCcsICd5ZWxsb3ctZGlhbW9uZCcsICdibHVlLWRpYW1vbmQnLCAnZ3JlZW4tZGlhbW9uZCddO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgY29sb3JlZERpYW1vbmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGlhbW9uZCcpO1xyXG4gICAgY29uc3QgY292ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY292ZXInKTtcclxuICAgIGNvbG9yZWREaWFtb25kLmlkID0gaWRzW2ldO1xyXG4gICAgY29sb3JlZERpYW1vbmQuYXBwZW5kKGNvdmVyKTtcclxuICAgIGRpYW1vbmRzLmFwcGVuZChjb2xvcmVkRGlhbW9uZCk7XHJcbiAgfVxyXG4gIGRpYW1vbmQuYXBwZW5kKGRpYW1vbmRzKTtcclxuICByZXR1cm4gZGlhbW9uZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb2xvckFuaW1hdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjb2xvcnMgPSBbYmx1ZUNvbG9yLCBncmVlbkNvbG9yLCB5ZWxsb3dDb2xvciwgcmVkQ29sb3JdO1xyXG4gIGNvbnN0IGNvbG9yID0gY29sb3JzW2dldFJhbmRvbUludChjb2xvcnMubGVuZ3RoKV07XHJcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFtb25kJykpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnc2h5JykpO1xyXG4gIFxyXG4gIGlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZC1kaWFtb25kJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnc2h5JykpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RpYW1vbmQnKSkuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAoZWwgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIChlbCBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xyXG4gICAgICB9KTtcclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFtb25kJykpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2h5JykpO1xyXG4gICAgfSwgMjAwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbW9uZC1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfSwgMjUwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVkLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2E0YTQnO1xyXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZC1kaWFtb25kJykgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAxcHggMXB4IDIycHggMTZweCByZ2IoMTk0IDE3IDMyKSc7XHJcbiAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS1kaWFtb25kJykgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTRhN2VjJztcclxuICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDFweCAxcHggMjJweCAxNnB4IGRhcmtibHVlJztcclxuICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWxsb3ctZGlhbW9uZCcpIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VjZDJhNCc7XHJcbiAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVsbG93LWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDFweCAxcHggMjJweCAxNnB4ICNGRkMzMDAnO1xyXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWVuLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhNGVjYTcnO1xyXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWVuLWRpYW1vbmQnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDFweCAxcHggMjJweCAxNnB4ICMyNThmMzcnO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dSYW5kb21Db2xvciA9ICgpID0+IHtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYW1vbmQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICBnZXRDb2xvckFuaW1hdGlvbigpO1xyXG4gIHZvaWQgZ2V0Q29sb3JTb3VuZC5wbGF5KCk7XHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWdldCByZXZlcnNlXHJcbmV4cG9ydCBjb25zdCByZW5kZXJSZXZlcnNlTWVzc2FnZSA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgcmV2ZXJzZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdyZXZlcnNlLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IHJldmVyc0NXID0gY3JlYXRlSW1hZ2UoJ3JldmVyc2UtcmlnaHQnLCAnLi4vLi4vYXNzZXRzL2ltZy9yZXZlcnMtcmlnaHQucG5nJywgJ3JldmVyc2UnKTtcclxuICBjb25zdCByZXZlcnNDQ1cgPSBjcmVhdGVJbWFnZSgncmV2ZXJzZS1sZWZ0JywgJy4uLy4uL2Fzc2V0cy9pbWcvcmV2ZXJzLWxlZnQucG5nJywgJ3JldmVyc2UnKTtcclxuXHJcbiAgcmV2ZXJzZS5hcHBlbmQocmV2ZXJzQ1csIHJldmVyc0NDVyk7XHJcbiAgcmV0dXJuIHJldmVyc2U7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VEaXJlY3Rpb24gPSAocmV2ZXJzZTogYm9vbGVhbikgPT4ge1xyXG4gIGxldCBkaXJlY3Rpb247XHJcbiAgbGV0IHR1cm47XHJcbiAgY29uc3QgY2xvY2tXaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmVyc2UtcmlnaHQnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIGNvbnN0IGNvdW50ZXJDbG9ja1dpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2ZXJzZS1sZWZ0JykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIFxyXG4gIGlmIChyZXZlcnNlID09IHRydWUpIHtcclxuICAgIGRpcmVjdGlvbiA9IGNsb2NrV2lzZTsgdHVybiA9IDI7IFxyXG4gICAgY2xvY2tXaXNlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIGNvdW50ZXJDbG9ja1dpc2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXJlY3Rpb24gPSBjb3VudGVyQ2xvY2tXaXNlOyB0dXJuID0gLTI7IFxyXG4gICAgY291bnRlckNsb2NrV2lzZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICBjbG9ja1dpc2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH1cclxuICAgICAgXHJcbiAgY29uc3QgcmV2ZXJzZUtleWZyYW1lcyA9IG5ldyBLZXlmcmFtZUVmZmVjdChcclxuICAgIGRpcmVjdGlvbiwgXHJcbiAgICBbXHJcbiAgICAgIHsgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9LFxyXG4gICAgICB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3R1cm59dHVybilgIH0sXHJcbiAgICAgIHsgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScgfSxcclxuICAgIF0sIFxyXG4gICAgeyBkdXJhdGlvbjogNDAwMCwgZmlsbDogJ25vbmUnLCBpdGVyYXRpb25zOiAxIH0sXHJcbiAgKTtcclxuICBjb25zdCByZXZlcnNlQ2FyZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24ocmV2ZXJzZUtleWZyYW1lcywgZG9jdW1lbnQudGltZWxpbmUpO1xyXG4gIHJldmVyc2VDYXJkQW5pbWF0aW9uLnBsYXkoKTtcclxuICB2b2lkIGdldFJldmVyc2VTb3VuZC5wbGF5KCk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmVyc2UtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICB9LCA0NTAwKTtcclxufTtcclxuICBcclxuZXhwb3J0IGNvbnN0IHNob3dSZXZlcnNlQW5pbWF0aW9uID0gKHJldmVyc2U6IGJvb2xlYW4pID0+IHtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmVyc2UtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICBjaGFuZ2VEaXJlY3Rpb24ocmV2ZXJzZSk7XHJcbn07XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hvb3NlIGNvbG9yXHJcblxyXG5leHBvcnQgY29uc3QgY2hvb3NlQ29sb3JBbmltYXRpb24gPSAoZTogRXZlbnQpID0+IHtcclxuICBjb25zdCBjaG9zZW5EaWFtb25kID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY2hvc2VuQ29sb3IgPSAoY2hvc2VuRGlhbW9uZC5wYXJlbnRFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5pZC5yZXBsYWNlKCctZGlhbW9uZCcsICcnKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYW1vbmQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ2Nob29zZS1jb2xvcicpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxuICByZXR1cm4gY2hvc2VuQ29sb3I7XHJcbn07XHJcblxyXG5sZXQgY29sb3IgPSAnJztcclxuZXhwb3J0IGNvbnN0IGNob29zZUNvbG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpYW1vbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbW9uZC1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBkaWFtb25kLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1jb2xvcicpO1xyXG4gIGRpYW1vbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHtcclxuICAgIGNvbG9yID0gY2hvb3NlQ29sb3JBbmltYXRpb24oZSk7XHJcbiAgICBjb25zb2xlLmxvZygnY29sb3InLCBjb2xvcik7XHJcbiAgfSk7XHJcbn07IiwiaW1wb3J0IHsgbnMsIHJlZENvbG9yLCBncmVlbkNvbG9yLCB5ZWxsb3dDb2xvciwgYmx1ZUNvbG9yIH0gZnJvbSAnLi9jYXJkcyc7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tY2FyZCB0ZW1wbGF0ZVxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ2FyZFRlbXBsYXRlID0gKFxyXG4gIGNvbG9yOiBzdHJpbmcsXHJcbiAgY3VyclNjYWxlOiBudW1iZXIsXHJcbik6IEhUTUxFbGVtZW50ID0+IHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdzdmcnKSBhcyBIVE1MRWxlbWVudDtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgYCR7MzAwICogY3VyclNjYWxlfWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgYCR7NTIwICogY3VyclNjYWxlfWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsbCcsIGNvbG9yKTtcclxuICBzdmcuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3ltYm9sIGNsYXNzPVwiY2FyZENlbnRlclwiIGlkPVwibXlTeW1ib2xcIiB2aWV3Qm94PVwiMCAwICR7MzAwICogY3VyclNjYWxlfSAkezUyMCAqIGN1cnJTY2FsZX1cIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIiR7MTEgKiBjdXJyU2NhbGV9XCI+XHJcbiAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwibWFpbkNhcmQgY2FyZENlbnRlclwiIHg9XCIkezE1ICogY3VyclNjYWxlfVwiIHk9XCIkezI1ICogY3VyclNjYWxlfVwiIHJ4PVwiJHsxMCAqIGN1cnJTY2FsZX1cIiByeT1cIiR7MTUgKiBjdXJyU2NhbGV9XCIgd2lkdGg9XCIkezI1MCAqIGN1cnJTY2FsZX1cIiBoZWlnaHQ9XCIkezQyMCAqIGN1cnJTY2FsZX1cIi8+XHJcbiAgICAgICAgICAgIDxlbGxpcHNlIGNsYXNzPVwiY2FyZENlbnRlclwiIGN4PVwiJHsyMzAgKiBjdXJyU2NhbGV9XCIgY3k9XCIkezE2MCAqIGN1cnJTY2FsZX1cIiByeD1cIiR7MTA1ICogY3VyclNjYWxlfVwiIHJ5PVwiJHsxODMgKiBjdXJyU2NhbGV9XCJcclxuICAgICAgc3R5bGU9XCJmaWxsOndoaXRlO3N0cm9rZTp3aGl0ZTtzdHJva2Utd2lkdGg6JHszICogY3VyclNjYWxlfTt0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XCIvPlxyXG4gICAgICAgICAgPC9zeW1ib2w+ICBcclxuICAgICAgICAgXHJcbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI215U3ltYm9sXCIgY2xhc3M9XCJjYXJkQ2VudGVyXCI+PC91c2U+XHJcbiAgICBgO1xyXG4gIHJldHVybiBzdmc7XHJcbn07XHJcbiAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tc21hbGwgc3ltYm9scyBvbSB0aGUgdG9wIGFuZCBib3R0b21cclxuZXhwb3J0IGNvbnN0IHJlbmRlclNtYWxsU3ltYm9sID0gKGNhcmRTeW1ib2w6IHN0cmluZywgeDE6IG51bWJlciwgeTE6IG51bWJlciwgZGVnOiBzdHJpbmcsIGN1cnJTY2FsZTogbnVtYmVyKTogRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBnLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkQ2VudGVyXCIgeD0ke3gxICogY3VyclNjYWxlfSB5PSR7eTEgKiBjdXJyU2NhbGV9IHN0eWxlPVwidHJhbnNmb3JtOiByb3RhdGUoJHtkZWd9ZGVnKVwiIGZvbnQtZmFtaWx5PVwiQXJpYWxcIiBmb250LXNpemU9XCIkezU1ICogY3VyclNjYWxlfVwiIGZvbnQtc3R5bGU9XCJpdGFsaWNcIiBmb250LXdlaWdodD1cImJvbGRcIiBmaWxsPVwid2hpdGVcIj4ke2NhcmRTeW1ib2x9PC90ZXh0PlxyXG4gICAgICBgO1xyXG4gIHJldHVybiBnO1xyXG59O1xyXG4gIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcmVjdGFuZ2xlIGFuZCBpdHMgZ3JhZGllbnRcclxuZXhwb3J0IGNvbnN0IHJlbmRlckdyYWRpZW50ID0gKFxyXG4gIHJlY0lkOiBzdHJpbmcsXHJcbiAgc3RvcENvbG9yMTogc3RyaW5nLFxyXG4gIHN0b3BDb2xvcjI6IHN0cmluZyxcclxuICBzdG9wQ29sb3IzOiBzdHJpbmcsXHJcbik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGdyYWRpZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnbGluZWFyR3JhZGllbnQnKTtcclxuICBncmFkaWVudC5pZCA9IHJlY0lkO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneDEnLCAnMCcpO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneDInLCAnMCcpO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneTEnLCAnMCcpO1xyXG4gIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgneTInLCAnMScpO1xyXG4gIGdyYWRpZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPSR7c3RvcENvbG9yMX0+PC9zdG9wPlxyXG4gICAgICA8c3RvcCBvZmZzZXQ9XCI1NSVcIiBzdG9wLWNvbG9yPSR7c3RvcENvbG9yMn0+PC9zdG9wPlxyXG4gICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcC1jb2xvcj0ke3N0b3BDb2xvcjN9Pjwvc3RvcD5cclxuICBgO1xyXG4gIHJldHVybiBncmFkaWVudDtcclxufTtcclxuICAgIFxyXG5leHBvcnQgY29uc3QgcmVuZGVyUmVjdGFuZ2xlID0gKHJlY0lkOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdyZWN0Jyk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoJ3gnLCBgJHt4ICogY3VyclNjYWxlfWApO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKCd5JywgYCR7eSAqIGN1cnJTY2FsZX1gKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZSgncngnLCBgJHs1ICogY3VyclNjYWxlfWApO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKCdyeScsIGAkezUgKiBjdXJyU2NhbGV9YCk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7NjUgKiBjdXJyU2NhbGV9YCk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAkezEwMCAqIGN1cnJTY2FsZX1gKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZSgnZmlsbCcsIGB1cmwoIyR7cmVjSWR9KWApO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnd2hpdGUnKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7NCAqIGN1cnJTY2FsZX1gKTtcclxuICByZWN0LmNsYXNzTGlzdC5hZGQoJ2NhcmRDZW50ZXInKTtcclxuICAgIFxyXG4gIHJldHVybiByZWN0O1xyXG59OyAgXHJcbiAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0taGVscGVyc1xyXG5leHBvcnQgY29uc3Qgc2V0Q2xhc3NOYW1lID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICBsZXQgY2xhc3NOYW1lID0gJyc7XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBncmVlbkNvbG9yOiBjbGFzc05hbWUgPSAnZ3JlZW4nOyBicmVhaztcclxuICAgIGNhc2UgcmVkQ29sb3I6IGNsYXNzTmFtZSA9ICdyZWQnOyBicmVhaztcclxuICAgIGNhc2UgeWVsbG93Q29sb3I6IGNsYXNzTmFtZSA9ICd5ZWxsb3cnOyBicmVhaztcclxuICAgIGNhc2UgYmx1ZUNvbG9yOiBjbGFzc05hbWUgPSAnYmx1ZSc7IGJyZWFrO1xyXG4gIH0gIFxyXG4gIHJldHVybiBjbGFzc05hbWU7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbG9yRm9yR3JhZGllbnQgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGdyYWRpZW50Q29sb3JzID0geyAvL9C+0L/QuNGB0LDRgtGMINC40L3RgtC10YDRhNC10LnRgVxyXG4gICAgY29sb3JUb3A6ICcnLFxyXG4gICAgY29sb3JNaWRkbGU6ICcnLFxyXG4gIH07XHJcbiAgICAgIFxyXG4gIHN3aXRjaCAoY29sb3IpIHtcclxuICAgIGNhc2UgZ3JlZW5Db2xvcjogeyBncmFkaWVudENvbG9ycy5jb2xvclRvcCA9ICdsaWdodGdyZWVuJzsgZ3JhZGllbnRDb2xvcnMuY29sb3JNaWRkbGUgPSAnZ3JlZW4nOyBicmVhazt9XHJcbiAgICBjYXNlIHJlZENvbG9yOiB7Z3JhZGllbnRDb2xvcnMuY29sb3JUb3AgPSAncmVkJzsgZ3JhZGllbnRDb2xvcnMuY29sb3JNaWRkbGUgPSAncmVkJzsgYnJlYWs7fVxyXG4gICAgY2FzZSB5ZWxsb3dDb2xvcjoge2dyYWRpZW50Q29sb3JzLmNvbG9yVG9wID0gJ3llbGxvdyc7IGdyYWRpZW50Q29sb3JzLmNvbG9yTWlkZGxlID0gJ3llbGxvdyc7IGJyZWFrO31cclxuICAgIGNhc2UgYmx1ZUNvbG9yOiB7Z3JhZGllbnRDb2xvcnMuY29sb3JUb3AgPSAnbGlnaHRibHVlJzsgZ3JhZGllbnRDb2xvcnMuY29sb3JNaWRkbGUgPSAnYmx1ZSc7IGJyZWFrO31cclxuICB9XHJcbiAgcmV0dXJuIGdyYWRpZW50Q29sb3JzO1xyXG59OyIsIlxyXG5pbXBvcnQgeyByZW5kZXJDYXJkVGVtcGxhdGUsIHJlbmRlclNtYWxsU3ltYm9sLCBcclxuICByZW5kZXJHcmFkaWVudCwgcmVuZGVyUmVjdGFuZ2xlLCBzZXRDbGFzc05hbWUsIGNoZWNrQ29sb3JGb3JHcmFkaWVudCB9IGZyb20gJy4vY2FyZHMtaGVscGVycyc7XHJcbmltcG9ydCB7IGJvZHkgfSBmcm9tICcuLi9nbG9iYWwtY29tcG9uZW50cy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBhcyBzdHJpbmc7XHJcbmV4cG9ydCBjb25zdCByZWRDb2xvciA9ICcjYzAxZTFlJyBhcyBzdHJpbmc7XHJcbmV4cG9ydCBjb25zdCBibHVlQ29sb3IgPSAnZGFya2JsdWUnIGFzIHN0cmluZztcclxuZXhwb3J0IGNvbnN0IGdyZWVuQ29sb3IgPSAnIzI1OGYzNycgYXMgc3RyaW5nO1xyXG5leHBvcnQgY29uc3QgeWVsbG93Q29sb3IgPSAnI0ZGQzMwMCcgYXMgc3RyaW5nO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUNBUkQgd2l0aCBudW1iZXJcclxuY29uc3QgcmVuZGVyQ2VudHJhbFN5bWJvbE51bWJlciA9IChjYXJkU3ltYm9sOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGN1cnJTY2FsZTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBnLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkQ2VudGVyXCIgeD1cIiR7ODAgKiBjdXJyU2NhbGV9XCIgeT1cIiR7MzE1ICogY3VyclNjYWxlfVwiIGZvbnQtZmFtaWx5PVwiQXJpYWxcIiBmb250LXNpemU9XCIkezIwOCAqIGN1cnJTY2FsZX1cIiBmb250LXN0eWxlPVwiaXRhbGljXCIgZm9udC13ZWlnaHQ9XCJib2xkXCIgZmlsbD0ke2NvbG9yfT4ke2NhcmRTeW1ib2x9PC90ZXh0PlxyXG4gICAgICBgO1xyXG4gIHJldHVybiBnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckNhcmRXaXRoTnVtYmVyID0gKFxyXG4gIGNhcmRTeW1ib2w6IHN0cmluZyxcclxuICBjb2xvcjogc3RyaW5nLFxyXG4gIGN1cnJTY2FsZSA9IDEsXHJcbik6IEhUTUxFbGVtZW50ID0+IHtcclxuICBjb25zdCBzdmcgPSByZW5kZXJDYXJkVGVtcGxhdGUoY29sb3IsIGN1cnJTY2FsZSk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ251bWJlcmVkQ2FyZCcsIHNldENsYXNzTmFtZShjb2xvcikpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyU21hbGxTeW1ib2woY2FyZFN5bWJvbCwgMzAsIDg0LCAnMzYwJywgY3VyclNjYWxlKSk7XHJcbiAgc3ZnLmFwcGVuZChyZW5kZXJTbWFsbFN5bWJvbChjYXJkU3ltYm9sLCAtMjQ4LCAtMzg2LCAnLTE4MCcsIGN1cnJTY2FsZSkpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbFN5bWJvbE51bWJlcihjYXJkU3ltYm9sLCBjb2xvciwgY3VyclNjYWxlKSk7XHJcbiAgcmV0dXJuIHN2ZztcclxufTtcclxuICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLXJldmVyc2UgY2FyZFxyXG5jb25zdCByZW5kZXJDZW50cmFsU3ltYm9sUmV2ZXJzZSA9IChjb2xvcjogc3RyaW5nLCBjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgcGF0aFBhcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IHBhdGhQYXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBwYXRoUGFydDFHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGNvbnN0IHBhdGhQYXJ0MkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcblxyXG4gIHBhdGhQYXJ0MUcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIHBhdGhQYXJ0Mkcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIHBhdGhQYXJ0MS5jbGFzc0xpc3QuYWRkKCdjYXJkQ2VudGVyJyk7XHJcbiAgcGF0aFBhcnQyLmNsYXNzTGlzdC5hZGQoJ2NhcmRDZW50ZXInKTtcclxuXHJcbiAgcGF0aFBhcnQxLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdtMTQ3LjI4OTAzLDE0Mi43ODk1OWwxMy45Mjc3NCwxMy41NDIzNmwtNTUuNzEwOTcsNTQuMTY5NDZjLTEzLjkyNzc0LDEzLjU0MjM2IC0xMy45Mjc3NCw0MC42MjcwOSAwLDU0LjE2OTQ2bDI3Ljg1NTQ5LC0yNy4wODQ3NGw1NS43MTA5NywtNTQuMTY5NDZsMTMuOTI3NzQsMTMuNTQyMzZsMCwtNTQuMTY5NDZsLTU1LjcxMDk3LDBsMC4wMDAwMSwwLjAwMDAxbDAsMC4wMDAwMWwtMC4wMDAwMSwweicpO1xyXG4gIHBhdGhQYXJ0Mi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTE0Ny4yODkwMywzMTkuNzMxNTNsLTE0LjA3MjI1LC0xMy4yNzM0bDU2LjI4OTAzLC01My4wOTM2MWMxNC4wNzIyNSwtMTMuMjczNCAxNC4wNzIyNSwtMzkuODIwMiAwLC01My4wOTM2MWwtMjguMTQ0NTEsMjYuNTQ2OGwtNTYuMjg5MDMsNTMuMDkzNjFsLTE0LjA3MjI1LC0xMy4yNzM0bDAsNTMuMDkzNjFsNTYuMjg5MDMsMGwtMC4wMDAwMSwwbC0wLjAwMDAxLDB6Jyk7XHJcbiAgcGF0aFBhcnQxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZmlsbDoke2NvbG9yfWApO1xyXG4gIHBhdGhQYXJ0Mi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGZpbGw6JHtjb2xvcn1gKTtcclxuXHJcbiAgcGF0aFBhcnQxRy5hcHBlbmQocGF0aFBhcnQxKTtcclxuICBwYXRoUGFydDJHLmFwcGVuZChwYXRoUGFydDIpO1xyXG5cclxuICBnLmFwcGVuZChwYXRoUGFydDFHLCBwYXRoUGFydDJHKTtcclxuICByZXR1cm4gZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJSZXZlcnNlQ2FyZCA9IChjb2xvcjogc3RyaW5nLCBjdXJyU2NhbGUgPSAxKSA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gcmVuZGVyQ2FyZFRlbXBsYXRlKGNvbG9yLCBjdXJyU2NhbGUpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKCdyZXZlcnNlQ2FyZCcsIHNldENsYXNzTmFtZShjb2xvcikpO1xyXG4gIGNvbnN0IHRvcFJldmVyc2VTeW1ib2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IHRvcFJldmVyc2VTeW1ib2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IGJvdHRvbVJldmVyc2VTeW1ib2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IGJvdHRvbVJldmVyc2VTeW1ib2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG5cclxuICBjb25zdCB0b3BSZXZlcnNlU3ltYm9sRzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgdG9wUmV2ZXJzZVN5bWJvbEcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGNvbnN0IGJvdHRvbVJldmVyc2VTeW1ib2xHMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBjb25zdCBib3R0b21SZXZlcnNlU3ltYm9sRzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcblxyXG4gIHRvcFJldmVyc2VTeW1ib2xHMS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7IFxyXG4gIHRvcFJldmVyc2VTeW1ib2xHMi5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7IFxyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2xHMS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgYm90dG9tUmV2ZXJzZVN5bWJvbEcyLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHNjYWxlKCR7Y3VyclNjYWxlfSlgKTtcclxuXHJcbiAgdG9wUmV2ZXJzZVN5bWJvbDEuc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ201NC41Nzk5NywzOC4xMjczOGwzLjg1NSwzLjc0ODMzbC0xNS40MTk5OSwxNC45OTMzM2MtMy44NTUsMy43NDgzMyAtMy44NTUsMTEuMjQ0OTkgMCwxNC45OTMzM2w3LjcxLC03LjQ5NjY2bDE1LjQxOTk5LC0xNC45OTMzM2wzLjg1NSwzLjc0ODMzbDAsLTE0Ljk5MzMzbC0xNS40MTk5OSwwbDAsMGwwLDBsLTAuMDAwMDEsMHonKTtcclxuICB0b3BSZXZlcnNlU3ltYm9sMi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTU0LjU3OTk3LDg3LjEwMjM2bC0zLjg5NSwtMy42NzM4OWwxNS41Nzk5OSwtMTQuNjk1NTVjMy44OTUsLTMuNjczODkgMy44OTUsLTExLjAyMTY2IDAsLTE0LjY5NTU1bC03Ljc5LDcuMzQ3NzdsLTE1LjU3OTk5LDE0LjY5NTU1bC0zLjg5NSwtMy42NzM4OWwwLDE0LjY5NTU1bDE1LjU3OTk5LDBsMCwwbDAuMDAwMDEsMC4wMDAwMXonKTtcclxuICBib3R0b21SZXZlcnNlU3ltYm9sMS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTIyNS4yODAwMSwzNzkuOTEyNTJsMy44NTUsMy43NDgzM2wtMTUuNDIsMTQuOTkzMzNjLTMuODU1LDMuNzQ4MzIgLTMuODU1LDExLjI0NDk5IDAsMTQuOTkzMzJsNy43MSwtNy40OTY2NmwxNS40MTk5OSwtMTQuOTkzMzNsMy44NTUsMy43NDgzM2wwLC0xNC45OTMzM2wtMTUuNDE5OTksMGwwLDAuMDAwMDFsMCwweicpO1xyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2wyLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdtMjI1LjI4MDAxLDQyOC44ODc1bC0zLjg5NSwtMy42NzM4OWwxNS41Nzk5OSwtMTQuNjk1NTRjMy44OTUsLTMuNjczODkgMy44OTUsLTExLjAyMTY2IDAsLTE0LjY5NTU1bC03Ljc4OTk5LDcuMzQ3NzdsLTE1LjU3OTk5LDE0LjY5NTU1bC0zLjg5NSwtMy42NzM4OWwwLDE0LjY5NTU1bDE1LjU3OTk5LDBsMCwweicpO1xyXG4gIHRvcFJldmVyc2VTeW1ib2wxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2wxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG4gIHRvcFJldmVyc2VTeW1ib2wyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG4gIGJvdHRvbVJldmVyc2VTeW1ib2wyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpO1xyXG5cclxuICB0b3BSZXZlcnNlU3ltYm9sRzEuYXBwZW5kKHRvcFJldmVyc2VTeW1ib2wxKTtcclxuICB0b3BSZXZlcnNlU3ltYm9sRzIuYXBwZW5kKHRvcFJldmVyc2VTeW1ib2wyKTtcclxuICBib3R0b21SZXZlcnNlU3ltYm9sRzEuYXBwZW5kKGJvdHRvbVJldmVyc2VTeW1ib2wxKTtcclxuICBib3R0b21SZXZlcnNlU3ltYm9sRzIuYXBwZW5kKGJvdHRvbVJldmVyc2VTeW1ib2wyKTtcclxuXHJcbiAgc3ZnLmFwcGVuZCh0b3BSZXZlcnNlU3ltYm9sRzEsIHRvcFJldmVyc2VTeW1ib2xHMiwgYm90dG9tUmV2ZXJzZVN5bWJvbEcxLCBib3R0b21SZXZlcnNlU3ltYm9sRzIpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbFN5bWJvbFJldmVyc2UoY29sb3IsIGN1cnJTY2FsZSkpO1xyXG4gIFxyXG4gIHJldHVybiBzdmc7XHJcbn07XHJcbiAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1ibG9ja2VkIGNhcmRcclxuY29uc3QgcmVuZGVyQ2VudHJhbFN5bWJvbEJsb2NrID0gKGNvbG9yOiBzdHJpbmcsIGN1cnJTY2FsZTogbnVtYmVyKTogRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2cnKTtcclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ20xNDUuMTcwNjgsMTUxLjM2MjQyYy0yMC45ODI0MiwtMC4wMjczMyAtNDIuMDQ0NTcsNy45MjQ5NyAtNTguMDc0NSwyMy45MTMwMmMtMzIuMDU5ODYsMzEuOTc2MzQgLTMyLjE0NjkzLDgzLjkxODMzIC0wLjE3MDU0LDExNS45NzgxOWMzMS45NzYzNCwzMi4wNTk4NiA4My45MTgzMywzMi4xNDY5MyAxMTUuOTc4MTksMC4xNzA1NGMzMi4wNTk4NiwtMzEuOTc2MzQgMzIuMTQ2OTMsLTgzLjkxODMzIDAuMTcwNTQsLTExNS45NzgxOWMtMTUuOTg4MTcsLTE2LjAyOTkzIC0zNi45MjEyOSwtMjQuMDU2NDQgLTU3LjkwMzY5LC0yNC4wODM4NGwwLDAuMDAwMjh6bS0wLjE3MDU0LDI3LjMyOTE4YzkuNTY0NTUsMC4wMTA5MyAxOS4xNzI2MywyLjUxNDc4IDI3LjY3MDc5LDcuNTE1NTJsLTc0LjgxMzYyLDc0LjgxMzYyYy0xMi4zNTQ2OSwtMjAuOTc2ODQgLTkuNDkzMTIsLTQ4LjQ1NzM3IDguNTQwMzcsLTY2LjQ0NDA2YzEwLjY4NjYzLC0xMC42NTg3NyAyNC42MTQxOSwtMTUuOTAzMjkgMzguNjAyNDUsLTE1Ljg4NTA4bDAuMDAwMDEsMHptNDcuMTQyODMsMjYuODE2NzVjMTIuNDQwMDgsMjAuOTkyNzkgOS41MjkwOCw0OC41OTIzNiAtOC41NDAzNyw2Ni42MTQ4NmMtMTguMDUyMDIsMTguMDA0OTYgLTQ1LjQ5MTU0LDIwLjY1MTQ2IC02Ni40NDQwNiw4LjE5ODc2bDc0Ljk4NDQzLC03NC44MTM2MnonKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZmlsbDoke2NvbG9yfWApO1xyXG4gIHBhdGguY2xhc3NMaXN0LmFkZCgnY2FyZENlbnRlcicpO1xyXG4gIGcuYXBwZW5kKHBhdGgpO1xyXG4gIGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIHJldHVybiBnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckJsb2NrZWRDYXJkID0gKGNvbG9yOiBzdHJpbmcsIGN1cnJTY2FsZSA9IDEpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gcmVuZGVyQ2FyZFRlbXBsYXRlKGNvbG9yLCBjdXJyU2NhbGUpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKCdibG9ja2VkQ2FyZCcsIHNldENsYXNzTmFtZShjb2xvcikpO1xyXG4gIGNvbnN0IHRvcEJsb2NrU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IGJvdHRvbUJsb2NrU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xyXG4gIGNvbnN0IHRvcEJsb2NrU3ltYm9sRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBib3R0b21CbG9ja1N5bWJvbEcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdwYXRoJyk7XHJcblxyXG4gIHRvcEJsb2NrU3ltYm9sLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdtNTQuNTQ2ODQsNDEuMzYyMjFjLTUuNzU3ODksLTAuMDA3NSAtMTEuNTM3NjYsMi4xNzQ3MyAtMTUuOTM2NTEsNi41NjIwOWMtOC43OTc3MSw4Ljc3NDc5IC04LjgyMTYsMjMuMDI4NDQgLTAuMDQ2OCwzMS44MjYxNWM4Ljc3NDc5LDguNzk3NzEgMjMuMDI4NDQsOC44MjE2IDMxLjgyNjE1LDAuMDQ2OGM4Ljc5NzcxLC04Ljc3NDc5IDguODIxNiwtMjMuMDI4NDQgMC4wNDY4LC0zMS44MjYxNWMtNC4zODczOSwtNC4zOTg4NSAtMTAuMTMxNzUsLTYuNjAxNDUgLTE1Ljg4OTY0LC02LjYwODk3bDAsMC4wMDAwOHptLTAuMDQ2OCw3LjQ5OTU0YzIuNjI0NjYsMC4wMDMgNS4yNjEyNiwwLjY5MDA5IDcuNTkzMjgsMi4wNjIzN2wtMjAuNTI5OTgsMjAuNTI5OThjLTMuMzkwMzEsLTUuNzU2MzYgLTIuNjA1MDUsLTEzLjI5NzQzIDIuMzQzNjEsLTE4LjIzMzI0YzIuOTMyNTcsLTIuOTI0OTMgNi43NTQ1LC00LjM2NDEgMTAuNTkzMDksLTQuMzU5MWwwLDBsMCwtMC4wMDAwMXptMTIuOTM2Nyw3LjM1ODkyYzMuNDEzNzQsNS43NjA3NCAyLjYxNDkyLDEzLjMzNDQ3IC0yLjM0MzYxLDE4LjI4MDExYy00Ljk1Mzc0LDQuOTQwODMgLTEyLjQ4MzU2LDUuNjY3MDcgLTE4LjIzMzI0LDIuMjQ5ODZsMjAuNTc2ODUsLTIwLjUyOTk4bDAsMC4wMDAwMXonKTtcclxuICBib3R0b21CbG9ja1N5bWJvbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnbTIyNS4wNDY4MSwzODIuODk5MzJjLTUuNzU3ODksLTAuMDA3NSAtMTEuNTM3NjYsMi4xNzQ3MyAtMTUuOTM2NTEsNi41NjIwOWMtOC43OTc3LDguNzc0NzkgLTguODIxNiwyMy4wMjg0NSAtMC4wNDY4LDMxLjgyNjE1YzguNzc0NzksOC43OTc3MSAyMy4wMjg0NSw4LjgyMTYgMzEuODI2MTUsMC4wNDY4YzguNzk3NzEsLTguNzc0NzggOC44MjE2LC0yMy4wMjg0NCAwLjA0NjgsLTMxLjgyNjE1Yy00LjM4NzM5LC00LjM5ODg1IC0xMC4xMzE3NSwtNi42MDE0NCAtMTUuODg5NjQsLTYuNjA4OTZsMCwwLjAwMDA3em0tMC4wNDY4LDcuNDk5NTRjMi42MjQ2NiwwLjAwMyA1LjI2MTI2LDAuNjkwMDkgNy41OTMyOCwyLjA2MjM3bC0yMC41Mjk5NywyMC41Mjk5OGMtMy4zOTAzMiwtNS43NTYzNiAtMi42MDUwNiwtMTMuMjk3NDMgMi4zNDM2LC0xOC4yMzMyNWMyLjkzMjU3LC0yLjkyNDkyIDYuNzU0NSwtNC4zNjQxIDEwLjU5MzA5LC00LjM1OTFsMCwwem0xMi45MzY3LDcuMzU4OTJjMy40MTM3NSw1Ljc2MDczIDIuNjE0OTIsMTMuMzM0NDcgLTIuMzQzNiwxOC4yODAxMWMtNC45NTM3NSw0Ljk0MDgzIC0xMi40ODM1Niw1LjY2NzA3IC0xOC4yMzMyNSwyLjI0OTg2bDIwLjU3Njg1LC0yMC41Mjk5N3onKTtcclxuICB0b3BCbG9ja1N5bWJvbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6d2hpdGUnKTtcclxuICBib3R0b21CbG9ja1N5bWJvbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6d2hpdGUnKTtcclxuICB0b3BCbG9ja1N5bWJvbEcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIGJvdHRvbUJsb2NrU3ltYm9sRy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgdG9wQmxvY2tTeW1ib2xHLmFwcGVuZCh0b3BCbG9ja1N5bWJvbCk7XHJcbiAgYm90dG9tQmxvY2tTeW1ib2xHLmFwcGVuZChib3R0b21CbG9ja1N5bWJvbCk7XHJcbiAgc3ZnLmFwcGVuZCh0b3BCbG9ja1N5bWJvbEcsIHJlbmRlckNlbnRyYWxTeW1ib2xCbG9jayhjb2xvciwgY3VyclNjYWxlKSwgYm90dG9tQmxvY2tTeW1ib2xHKTtcclxuICBcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG4gIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2FyZCBQbHVzIDJcclxuY29uc3QgcmVuZGVyQ2VudHJhbFN5bWJvbFBsdXNUd28gPSAoY29sb3I6IHN0cmluZywgY3VyclNjYWxlOiBudW1iZXIpOiBFbGVtZW50ID0+IHtcclxuICBjb25zdCB7IGNvbG9yVG9wLCBjb2xvck1pZGRsZSB9ID0gY2hlY2tDb2xvckZvckdyYWRpZW50KGNvbG9yKTtcclxuICBjb25zdCBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGcuYXBwZW5kKFxyXG4gICAgcmVuZGVyR3JhZGllbnQoYCR7Y29sb3J9Q2FyZDFgLCBjb2xvclRvcCwgY29sb3JNaWRkbGUsIGNvbG9yKSxcclxuICAgIHJlbmRlclJlY3RhbmdsZShgJHtjb2xvcn1DYXJkMWAsIDg1LCAyMzAsIGN1cnJTY2FsZSksXHJcbiAgICByZW5kZXJHcmFkaWVudChgJHtjb2xvcn1DYXJkMmAsIGNvbG9yVG9wLCBjb2xvck1pZGRsZSwgY29sb3IpLFxyXG4gICAgcmVuZGVyUmVjdGFuZ2xlKGAke2NvbG9yfUNhcmQyYCwgMTMwLCAxNzAsIGN1cnJTY2FsZSksXHJcbiAgKTtcclxuICByZXR1cm4gZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJQbHVzVHdvQ2FyZCA9IChjb2xvcjogc3RyaW5nLCBjdXJyU2NhbGUgPSAxKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHN2ZyA9IHJlbmRlckNhcmRUZW1wbGF0ZShjb2xvciwgY3VyclNjYWxlKTtcclxuICBzdmcuY2xhc3NMaXN0LmFkZCgncGx1c1R3b0NhcmQnLCBzZXRDbGFzc05hbWUoY29sb3IpKTtcclxuICBzdmcuYXBwZW5kKHJlbmRlclNtYWxsU3ltYm9sKCcrMicsIDMwLCA4NCwgJzM2MCcsIGN1cnJTY2FsZSkpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyU21hbGxTeW1ib2woJysyJywgLTI0OCwgLTM4NiwgJy0xODAnLCBjdXJyU2NhbGUpKTtcclxuICBzdmcuYXBwZW5kKHJlbmRlckNlbnRyYWxTeW1ib2xQbHVzVHdvKGNvbG9yLCBjdXJyU2NhbGUpKTtcclxuICBcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNhcmQgUGx1cyA0XHJcbmNvbnN0IHJlbmRlckNlbnRyYWxTeW1ib2xQbHVzRm91ciA9IChjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgZy5hcHBlbmQoXHJcbiAgICByZW5kZXJHcmFkaWVudCgnZ3JlZW5DYXJkJywgJ2xpZ2h0Z3JlZW4nLCAnZ3JlZW4nLCAnIzE3NjgyNScpLFxyXG4gICAgcmVuZGVyUmVjdGFuZ2xlKCdncmVlbkNhcmQnLCA1MCwgMjQ1LCBjdXJyU2NhbGUpLFxyXG4gICAgcmVuZGVyR3JhZGllbnQoJ2JsdWVDYXJkJywgJ2xpZ2h0Ymx1ZScsICdibHVlJywgJ2RhcmtibHVlJyksXHJcbiAgICByZW5kZXJSZWN0YW5nbGUoJ2JsdWVDYXJkJywgOTAsIDE3MCwgY3VyclNjYWxlKSxcclxuICAgIHJlbmRlckdyYWRpZW50KCdyZWRDYXJkJywgJ3JlZCcsICdyZWQnLCAnZGFya3JlZCcpLFxyXG4gICAgcmVuZGVyUmVjdGFuZ2xlKCdyZWRDYXJkJywgMTM1LCAyMTAsIGN1cnJTY2FsZSksXHJcbiAgICByZW5kZXJHcmFkaWVudCgneWVsbG93Q2FyZCcsICd5ZWxsb3cnLCAneWVsbG93JywgJyNGRkMzMDAnKSxcclxuICAgIHJlbmRlclJlY3RhbmdsZSgneWVsbG93Q2FyZCcsIDE3NSwgMTMwLCBjdXJyU2NhbGUpLFxyXG4gICk7XHJcbiAgcmV0dXJuIGc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUGx1c0ZvdXJDYXJkID0gKGN1cnJTY2FsZSA9IDEpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gcmVuZGVyQ2FyZFRlbXBsYXRlKCdibGFjaycsIGN1cnJTY2FsZSk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ3BsdXNGb3VyQ2FyZCcpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyU21hbGxTeW1ib2woJys0JywgMzAsIDg0LCAnMzYwJywgY3VyclNjYWxlKSk7XHJcbiAgc3ZnLmFwcGVuZChyZW5kZXJTbWFsbFN5bWJvbCgnKzQnLCAtMjQ4LCAtMzg2LCAnLTE4MCcsIGN1cnJTY2FsZSkpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbFN5bWJvbFBsdXNGb3VyKGN1cnJTY2FsZSkpO1xyXG4gICBcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG4gXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1tdWx0aSBjYXJkXHJcbmNvbnN0IHJlbmRlckNlbnRyYWxNdWx0aVN5bWJvbCA9IChjdXJyU2NhbGU6IG51bWJlcik6IEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgZWxsaXBzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggbnMsICdlbGxpcHNlJyk7XHJcbiAgY29uc3QgcGF0aFJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBnUmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIGNvbnN0IHBhdGhHcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBnR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgcGF0aEJsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdwYXRoJyk7XHJcbiAgY29uc3QgZ0JsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdnJyk7XHJcbiAgY29uc3QgcGF0aFllbGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcclxuICBjb25zdCBnWWVsbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZycpO1xyXG4gIFxyXG4gIHBhdGhSZWQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnd2hpdGUnKTtcclxuICBwYXRoUmVkLnNldEF0dHJpYnV0ZSgnZCcsICdtMTk4LjQwMDAxLDg0LjM5OTk5Yzc4Ljk5OTk5LDEgLTEyLjc5MzY2LDIwNS44MTM0OCAtNjUuMTczMjksMTc1LjAxMjg0Yy01Mi4zNzk2NCwtMzAuODAwNjQgLTkwLjAzNDU5LC0yMi43MzMxMSAtNzMuMDM0NTksLTU5LjczMzExYzE3LC0zNyA1OS4yMDc4OCwtMTE2LjI3OTczIDEzOC4yMDc4OCwtMTE1LjI3OTczeicpO1xyXG4gIHBhdGhSZWQuc2V0QXR0cmlidXRlKCdmaWxsJywgcmVkQ29sb3IpO1xyXG4gIHBhdGhSZWQuY2xhc3NMaXN0LmFkZCgnY2FyZENlbnRlcicpO1xyXG4gIGdSZWQuYXBwZW5kKHBhdGhSZWQpO1xyXG4gIGdSZWQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtjdXJyU2NhbGV9KWApO1xyXG4gIFxyXG4gIHBhdGhHcmVlbi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd3aGl0ZScpO1xyXG4gIHBhdGhHcmVlbi5zZXRBdHRyaWJ1dGUoJ2QnLCAnbTE1MC4wNTE5LDI0Ny43Njg4YzAsMCAtMTQ3LjM0MDMxLDEzNC4yNDg2MiAtNzAuMzg1NSwxNDguMzMwNjRjNzYuOTU0ODEsMTQuMDgyMDIgMTU4LjYwMTk4LC0xMTguMjg4OTggMTUyLjAzMjY4LC0xMjkuNTU0NjFjLTYuNTY5MzEsLTExLjI2NTYyIC04MS42NDcxOCwtMTguNzc2MDMgLTgxLjY0NzE4LC0xOC43NzYwM3onKTtcclxuICBwYXRoR3JlZW4uc2V0QXR0cmlidXRlKCdmaWxsJywgZ3JlZW5Db2xvcik7XHJcbiAgcGF0aEdyZWVuLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3JvdGF0ZSgtMi42MTU0NzIwNzgzMjMzNjQzIDE0NC43NDIyNzkwNTI3MzE4LDMyMi40NTc4MjQ3MDcwMzEpJyk7XHJcbiAgcGF0aEdyZWVuLmNsYXNzTGlzdC5hZGQoJ2NhcmRDZW50ZXInKTtcclxuICBnR3JlZW4uYXBwZW5kKHBhdGhHcmVlbik7XHJcbiAgZ0dyZWVuLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHNjYWxlKCR7Y3VyclNjYWxlfSlgKTtcclxuICBcclxuICBwYXRoQmx1ZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd3aGl0ZScpO1xyXG4gIHBhdGhCbHVlLnNldEF0dHJpYnV0ZSgnZCcsICdtMjE5LjQsOTIuMzk5OTlsLTgxLjQsMTY1LjE2MTgzYzAsMCAzMC40LDEyNy40NjQwOCA4OC40LDE0Ljk5NTc2YzU4LC0xMTIuNDY4MzIgMCwtMTgwLjE1NzU4IC03LC0xODAuMTU3NTh6Jyk7XHJcbiAgcGF0aEJsdWUuc2V0QXR0cmlidXRlKCdmaWxsJywgYmx1ZUNvbG9yKTtcclxuICBwYXRoQmx1ZS5jbGFzc0xpc3QuYWRkKCdjYXJkQ2VudGVyJyk7XHJcbiAgZ0JsdWUuYXBwZW5kKHBhdGhCbHVlKTtcclxuICBnQmx1ZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgICBcclxuICBwYXRoWWVsbG93LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3doaXRlJyk7XHJcbiAgcGF0aFllbGxvdy5zZXRBdHRyaWJ1dGUoJ2QnLCAnbTM3LjUyNjY1LDI0Ni41MjUyNmMzMy44ODAyMywtMTIwLjMxNzQ3IDEwMi45NTg0MSwyLjEyNjg1IDEwMy40NzM5NiwxNC44OTY5MmMwLjUxNTU1LDEyLjc3MDA3IC02MS45MDI5NiwxMzguNDYxNjQgLTY5LjEyMDU4LDEzNS41NzAzNGMtNy4yMTc2LC0yLjg5MTMxIC02OC4yMzM2MSwtMzAuMTQ5NzkgLTM0LjM1MzM4LC0xNTAuNDY3MjZ6Jyk7XHJcbiAgcGF0aFllbGxvdy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB5ZWxsb3dDb2xvcik7XHJcbiAgcGF0aFllbGxvdy5jbGFzc0xpc3QuYWRkKCdjYXJkQ2VudGVyJyk7XHJcbiAgZ1llbGxvdy5hcHBlbmQocGF0aFllbGxvdyk7XHJcbiAgZ1llbGxvdy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBzY2FsZSgke2N1cnJTY2FsZX0pYCk7XHJcbiAgICBcclxuICBnLmFwcGVuZChlbGxpcHNlLCBnUmVkLCBnWWVsbG93LCBnR3JlZW4sIGdCbHVlKTtcclxuICAgICBcclxuICByZXR1cm4gZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJNdWx0aUNhcmQgPSAoY3VyclNjYWxlID0gMSk6IEhUTUxFbGVtZW50ID0+IHtcclxuICBjb25zdCBzdmcgPSByZW5kZXJDYXJkVGVtcGxhdGUoJ2JsYWNrJywgY3VyclNjYWxlKTtcclxuICBzdmcuY2xhc3NMaXN0LmFkZCgnbXVsdGlkQ2FyZCcpO1xyXG4gIHN2Zy5hcHBlbmQocmVuZGVyQ2VudHJhbE11bHRpU3ltYm9sKGN1cnJTY2FsZSkpO1xyXG4gIHJldHVybiBzdmc7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBjb25zdCByZW5kZXJCYWNrU2lkZSA9IChjdXJyU2NhbGUgPSAxKTogRWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnc3ZnJyk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2JhY2stc2lkZScpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBgJHszMDAgKiBjdXJyU2NhbGV9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBgJHs1MjAgKiBjdXJyU2NhbGV9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgJ2JsYWNrJyk7XHJcbiAgc3ZnLmlubmVySFRNTCA9IGBcclxuICAgIDxzeW1ib2wgaWQ9XCJiYWNrQ2FyZFwiIHZpZXdCb3g9XCIwIDAgJHszMDAgKiBjdXJyU2NhbGV9ICR7NTIwICogY3VyclNjYWxlfVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiJHsxMSAqIGN1cnJTY2FsZX1cIj5cclxuICAgICA8cmVjdCB4PVwiJHsxNSAqIGN1cnJTY2FsZX1cIiB5PVwiJHsyNSAqIGN1cnJTY2FsZX1cIiByeD1cIiR7MTAgKiBjdXJyU2NhbGV9XCIgcnk9XCIkezE1ICogY3VyclNjYWxlfVwiIHdpZHRoPVwiJHsyNTAgKiBjdXJyU2NhbGV9XCIgaGVpZ2h0PVwiJHs0MjAgKiBjdXJyU2NhbGV9XCIgLz5cclxuICAgICAgPGVsbGlwc2UgY3g9XCIkezIzMCAqIGN1cnJTY2FsZX1cIiBjeT1cIiR7MTYwICogY3VyclNjYWxlfVwiIHJ4PVwiJHs5NyAqIGN1cnJTY2FsZX1cIiByeT1cIiR7MTcyICogY3VyclNjYWxlfVwiIGZpbGw9XCJyZWRcIiBzdHJva2U9XCJyZWRcIiBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcIiAvPlxyXG4gICAgICA8c3ZnIHdpZHRoPVwiJHsyNDAgKiBjdXJyU2NhbGV9XCIgaGVpZ2h0PVwiJHs0MTAgKiBjdXJyU2NhbGV9XCIgeD1cIiR7MTkgKiBjdXJyU2NhbGV9XCIgeT1cIiR7MzAgKiBjdXJyU2NhbGV9XCI+XHJcbiAgICAgICAgPGVsbGlwc2UgY3g9XCIkey0xMzAgKiBjdXJyU2NhbGV9XCIgY3k9XCIkezIzMCAqIGN1cnJTY2FsZX1cIiByeD1cIiR7MjAgKiBjdXJyU2NhbGV9XCIgcnk9XCIkezIwICogY3VyclNjYWxlfVwiIGZpbGw9XCJibGFja1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLWRhc2hhcnJheT1cIiR7Ni43ICogY3VyclNjYWxlfVwiIGQ9XCJNNSAyMCBsMjE1IDBcIiBkPVwiTTUgNDAgbDIxNSAwXCIgc3Ryb2tlLXdpZHRoPVwiJHs0MTggKiBjdXJyU2NhbGV9XCIgb3BhY2l0eT1cIjAuMTVcIiBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKCAtNjVkZWcpO1wiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9zeW1ib2w+XHJcbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjYmFja0NhcmRcIiBjbGFzcz1cImJhY2stc2lkZVwiPjwvdXNlPlxyXG4gICAgPGxpbmVhckdyYWRpZW50IGlkPVwiR3JhZGllbnQyXCIgeDE9XCIwXCIgeDI9XCIwXCIgeTE9XCIwXCIgeTI9XCIxXCI+XHJcbiAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcC1jb2xvcj1cIndoaXRlXCIvPlxyXG4gICAgICA8c3RvcCBvZmZzZXQ9XCI1NSVcIiBzdG9wLWNvbG9yPVwiZ29sZFwiLz5cclxuICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3AtY29sb3I9XCIjODA2MzA4XCIvPlxyXG4gICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyVGV4dCBiYWNrLXNpZGVcIiB4PVwiJHstNDAgKiBjdXJyU2NhbGV9XCIgeT1cIiR7MzAwICogY3VyclNjYWxlfVwiIGZvbnQtc2l6ZT1cIiR7MTE1ICogY3VyclNjYWxlfVwiIGZpbGw9XCJ1cmwoI0dyYWRpZW50MilcIj5VTk88L3RleHQ+IFxyXG4gIGA7XHJcbiAgcmV0dXJuIHN2ZztcclxufTsgIFxyXG4gIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MaXN0ZW5lcnNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9ybG9hZCcsICgpID0+IHtcclxuICBib2R5LmFwcGVuZChyZW5kZXJDYXJkV2l0aE51bWJlcignMicsIHJlZENvbG9yLCAwLjgpKTtcclxuICBib2R5LmFwcGVuZChyZW5kZXJSZXZlcnNlQ2FyZChibHVlQ29sb3IsIDAuNSkpO1xyXG4gIGJvZHkuYXBwZW5kKHJlbmRlckJsb2NrZWRDYXJkKHllbGxvd0NvbG9yKSk7XHJcbiAgYm9keS5hcHBlbmQocmVuZGVyUGx1c1R3b0NhcmQoZ3JlZW5Db2xvcikpO1xyXG4gIGJvZHkuYXBwZW5kKHJlbmRlclBsdXNGb3VyQ2FyZCgpKTtcclxuICBib2R5LmFwcGVuZChyZW5kZXJNdWx0aUNhcmQoKSk7XHJcbiAgYm9keS5hcHBlbmQocmVuZGVyQmFja1NpZGUoMC41KSk7XHJcbn0pOyIsIi8vIGltcG9ydCB7IHNob3dSZXZlcnNlQW5pbWF0aW9uIH0gZnJvbSAnLi4vYW5pbWF0ZWQtaXRlbXMvYW5pbWF0ZWQtaXRlbXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24sIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUltYWdlIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgY2hhdFNvdW5kIH0gZnJvbSAnLi4vc291bmRzJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBvcGVuQ2hhdCA9ICgpID0+IHtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXQnKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gIHZvaWQgY2hhdFNvdW5kLnBsYXkoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNoYXQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2hhdCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaGF0LWhlYWRlcicpO1xyXG4gIGNvbnN0IGhlYWRlckJ0biA9IGNyZWF0ZUJ1dHRvbignYnRuLWNyb3NzJywgJ2J1dHRvbicsICd4Jyk7XHJcbiAgaGVhZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYXQtY2xvc2UtYnRuJyk7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0NoYXQnO1xyXG4gIGNvbnN0IGNoYXRXaW5kb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2hhdC13aW5kb3cnKTtcclxuICBjb25zdCBtZXNzYWdlTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJ21lc3NhZ2UtbGlzdCcpO1xyXG4gIGNvbnN0IGNoYXRJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaGF0LWlucHV0Jyk7XHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnbWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWVzc2FnZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdjaGF0LXNlbmQtYnRuJywgJ2J1dHRvbicsICdTZW5kJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgQ29udHJvbGxlci53ZWJTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShcclxuICAgICAgeyBhY3Rpb246ICdDSEFUX01FU1NBR0UnLFxyXG4gICAgICAgIGRhdGE6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIH0pKTtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbiAgbWVzc2FnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgYnV0dG9uLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY2hhdElucHV0LmFwcGVuZChtZXNzYWdlSW5wdXQsIGJ1dHRvbik7XHJcbiAgY2hhdFdpbmRvdy5hcHBlbmQobWVzc2FnZUxpc3QpO1xyXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyQnRuKTtcclxuICBjaGF0LmFwcGVuZChoZWFkZXIsIGNoYXRXaW5kb3csIGNoYXRJbnB1dCApO1xyXG5cclxuICBoZWFkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjaGF0LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICB9KTtcclxuICByZXR1cm4gY2hhdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDaGF0QnV0dG9uID0gKCk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcclxuICBjb25zdCBjaGF0QnRuID0gY3JlYXRlQnV0dG9uKCdjaGF0LWJ0bicsICdidXR0b24nLCAnJyk7XHJcbiAgY29uc3QgY2hhdExvZ28gPSBjcmVhdGVJbWFnZSgnY2hhdC1sb2dvJywgJy4uLy4uL2Fzc2V0cy9pbWcvY2hhdC5wbmcnLCAnY2hhdC1sb2dvJyk7XHJcbiAgY2hhdEJ0bi5hcHBlbmQoY2hhdExvZ28pO1xyXG5cclxuICBjaGF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNoYXQpO1xyXG4gIC8vIGNoYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UmFuZG9tQ29sb3IpO1xyXG4gIC8vIGNoYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgLy8gICBzaG93UmV2ZXJzZUFuaW1hdGlvbihmYWxzZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIHJldHVybiBjaGF0QnRuO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHYW1lRmllbGQsIG1vdmVDYXJkVG9QbGF5ZXIsIHNob3dEaXN0cmlidXRpb25DYXJkc0ZvclBsYXllcnMgfSBmcm9tICcuLi9nYW1lLWZpZWxkL2dhbWUtZmllbGQnO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b25SZXN1bHRzIH0gZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCB7IGFkZEJ1dHRvbkJhY2tUb01haW5QYWdlLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUltYWdlLCBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcmVtb3ZlUmVnaXN0cmF0aW9uQ29udGFpbmVyIH0gZnJvbSAnLi4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgbGFuZ3VhZ2UgfSBmcm9tICcuLi9sb2NhbC1zdG9yYWdlJztcclxuaW1wb3J0IHsgbGFuZ0RhdGEgfSBmcm9tICcuLi9kYXRhJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDaG9pY2VDb250YWluZXIgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Nob2ljZS1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBxdWFudGl0eVBsYXllcnNCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaG9pY2UtcXVhbnRpdHknKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBxdWFudHV0eVRpdGxlID0gY3JlYXRlUGFyYWdyYXBoKCdxdWFudGl0eS10aXRsZScsIGxhbmdEYXRhW2xhbmddWydjaG9vc2UtcXVhbnRpdHknXSk7XHJcbiAgY29uc3QgdHdvUGxheWVycyA9IGNyZWF0ZUltYWdlKCd0d28nLCAnLi4vYXNzZXRzL2ltZy90d28ucG5nJywgbGFuZ0RhdGFbbGFuZ11bJ2Nob29zZS0yLXBsYXllcnMnXSk7XHJcbiAgY29uc3QgdGhyZWVQbGF5ZXJzID0gY3JlYXRlSW1hZ2UoJ3RocmVlJywgJy4uL2Fzc2V0cy9pbWcvdGhyZWUucG5nJywgbGFuZ0RhdGFbbGFuZ11bJ2Nob29zZS0zLXBsYXllcnMnXSk7XHJcbiAgY29uc3QgZm91clBsYXllcnMgPSBjcmVhdGVJbWFnZSgnZm91cicsICcuLi9hc3NldHMvaW1nL2ZvdXIucG5nJywgbGFuZ0RhdGFbbGFuZ11bJ2Nob29zZS00LXBsYXllcnMnXSk7XHJcblxyXG4gIHF1YW50aXR5UGxheWVyc0Jsb2NrLmFwcGVuZCh0d29QbGF5ZXJzLCB0aHJlZVBsYXllcnMsIGZvdXJQbGF5ZXJzKTtcclxuXHJcbiAgY29uc3QgZGlmZmljdWx0eVRpdGxlID0gY3JlYXRlUGFyYWdyYXBoKCdkaWZmaWN1bHR5LXRpdGxlJywgbGFuZ0RhdGFbbGFuZ11bJ2Nob29zZS1kaWZmaWN1bHR5J10pO1xyXG4gIGNvbnN0IGRpZmZpY3VsdHlCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaG9pY2UtZGlmZmljdWx0eScpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGVhc3lEaWZmaWN1bHR5ID0gY3JlYXRlQnV0dG9uKCdidG4tZWFzeScsICdidXR0b24nLCBsYW5nRGF0YVtsYW5nXVsnY2hvb3NlLWVhc3knXSk7XHJcbiAgY29uc3QgaGFyZERpZmZpY3VsdHkgPSBjcmVhdGVCdXR0b24oJ2J0bi1oYXJkJywgJ2J1dHRvbicsIGxhbmdEYXRhW2xhbmddWydjaG9vc2UtaGFyZCddKTtcclxuXHJcbiAgY29uc3QgY3Jvc3MgPSBjcmVhdGVCdXR0b24oJ2J0bi1jcm9zcycsICdidXR0b24nLCAneCcpO1xyXG4gIGNvbnN0IGJ0blN0YXJ0R2FtZSA9IGNyZWF0ZUJ1dHRvbignYnRuLXN0YXJ0JywgJ2J1dHRvbicsIGxhbmdEYXRhW2xhbmddWydjaG9vc2Utc3RhcnQnXSk7XHJcblxyXG4gIGRpZmZpY3VsdHlCbG9jay5hcHBlbmQoZWFzeURpZmZpY3VsdHksIGhhcmREaWZmaWN1bHR5KTtcclxuICBjb250YWluZXIuYXBwZW5kKHF1YW50dXR5VGl0bGUsIHF1YW50aXR5UGxheWVyc0Jsb2NrLCBkaWZmaWN1bHR5VGl0bGUsIGRpZmZpY3VsdHlCbG9jaywgYnRuU3RhcnRHYW1lLCBjcm9zcyk7XHJcbiAgbWFpbi5hcHBlbmQoY29udGFpbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZE1hcmsgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlLXF1YW50aXR5IC5pbWcnKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmsnKSk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdtYXJrJyk7XHJcbn07XHJcblxyXG5jb25zdCBjaG9pY2VEaWZmaWN1bHR5ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHBvbmVudENsYXNzTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvZmYnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wcG9uZW50Q2xhc3NOYW1lKT8uY2xhc3NMaXN0LnJlbW92ZSgnb2ZmJyk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93U3RhcnRHYW1lQnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHF1YW50aXR5UGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2UtcXVhbnRpdHkgLmltZycpO1xyXG4gIGNvbnN0IGRpZmZpY3VsdGllc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlLWRpZmZpY3VsdHkgLmJ1dHRvbicpO1xyXG4gIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc3RhcnQnKTtcclxuICBsZXQgeCA9IDA7XHJcbiAgcXVhbnRpdHlQbGF5ZXJzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21hcmsnKSkgeCArPSAxO1xyXG4gIH0pO1xyXG4gIGRpZmZpY3VsdGllc0J0bnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHggKz0gMTtcclxuICB9KTtcclxuICBpZiAoeCA9PT0gMikgc3RhcnRHYW1lQnRuPy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbn07XHJcblxyXG5jb25zdCBmaWxsR2FtZUZpZWxkID0gKHF1YW50aXR5OiBudW1iZXIsIGxhbmc6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgJ3Nob3cnLFxyXG4gICk7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBjcmVhdGVHYW1lRmllbGQocXVhbnRpdHksIGxhbmcpO1xyXG59O1xyXG5cclxuY29uc3QgZ29Ub0dhbWVGaWVsZCA9IChsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBsZXQgeCA9IDA7XHJcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAnc2hvdycsXHJcbiAgKTtcclxuICBpZiAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50d28nKSBhcyBIVE1MSW1hZ2VFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ21hcmsnKSkgeCArPSAyO1xyXG4gIGlmICgoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRocmVlJykgYXMgSFRNTEltYWdlRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXJrJykpIHggKz0gMztcclxuICBpZiAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3VyJykgYXMgSFRNTEltYWdlRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXJrJykpIHggKz0gNDtcclxuXHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBmaWxsR2FtZUZpZWxkKHgsIGxhbmcpO1xyXG4gIGFkZEJ1dHRvbkJhY2tUb01haW5QYWdlKGxhbmcpO1xyXG4gIGNyZWF0ZUJ1dHRvblJlc3VsdHMobGFuZyk7XHJcbiAgQ29udHJvbGxlci5jcmVhdGVOZXdHYW1lV2l0aENvbXB1dGVyKHgpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuY2hvaWNlLXF1YW50aXR5IC50d28nKSkge1xyXG4gICAgUm91dGVyLnVybC5zZWFyY2hQYXJhbXMuc2V0KCdudW1iZXJPZlBsYXllcnMnLCAnMicpO1xyXG4gICAgUm91dGVyLnNldFN0YXRlKCdzaW5nbGUtcGxheWVyJyk7XHJcbiAgICBhZGRNYXJrKGVsZW1lbnQpO1xyXG4gICAgc2hvd1N0YXJ0R2FtZUJ0bigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcnMnLCAnMicpO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuY2hvaWNlLXF1YW50aXR5IC50aHJlZScpKSB7XHJcbiAgICBSb3V0ZXIudXJsLnNlYXJjaFBhcmFtcy5zZXQoJ251bWJlck9mUGxheWVycycsICczJyk7XHJcbiAgICBSb3V0ZXIuc2V0U3RhdGUoJ3NpbmdsZS1wbGF5ZXInKTtcclxuICAgIGFkZE1hcmsoZWxlbWVudCk7XHJcbiAgICBzaG93U3RhcnRHYW1lQnRuKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVycycsICczJyk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5jaG9pY2UtcXVhbnRpdHkgLmZvdXInKSkge1xyXG4gICAgUm91dGVyLnVybC5zZWFyY2hQYXJhbXMuc2V0KCdudW1iZXJPZlBsYXllcnMnLCAnNCcpO1xyXG4gICAgUm91dGVyLnNldFN0YXRlKCdzaW5nbGUtcGxheWVyJyk7XHJcbiAgICBhZGRNYXJrKGVsZW1lbnQpO1xyXG4gICAgc2hvd1N0YXJ0R2FtZUJ0bigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcnMnLCAnNCcpO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLWVhc3knKSkge1xyXG4gICAgUm91dGVyLnVybC5zZWFyY2hQYXJhbXMuc2V0KCdkaWZmaWN1bHQnLCAnZWFzeScpO1xyXG4gICAgUm91dGVyLnNldFN0YXRlKCdzaW5nbGUtcGxheWVyJyk7XHJcbiAgICBjaG9pY2VEaWZmaWN1bHR5KGVsZW1lbnQsICcuYnRuLWhhcmQnKTtcclxuICAgIHNob3dTdGFydEdhbWVCdG4oKTtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmJ0bi1oYXJkJykpIHtcclxuICAgIFJvdXRlci51cmwuc2VhcmNoUGFyYW1zLnNldCgnZGlmZmljdWx0JywgJ2hhcmQnKTtcclxuICAgIFJvdXRlci5zZXRTdGF0ZSgnc2luZ2xlLXBsYXllcicpO1xyXG4gICAgY2hvaWNlRGlmZmljdWx0eShlbGVtZW50LCAnLmJ0bi1lYXN5Jyk7XHJcbiAgICBzaG93U3RhcnRHYW1lQnRuKCk7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tc3RhcnQnKSkge1xyXG4gICAgZ29Ub0dhbWVGaWVsZChsYW5ndWFnZS5jaG9zZW4pO1xyXG4gICAgcmVtb3ZlUmVnaXN0cmF0aW9uQ29udGFpbmVyKCk7XHJcbiAgICBzaG93RGlzdHJpYnV0aW9uQ2FyZHNGb3JQbGF5ZXJzKCsobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcnMnKSBhcyBzdHJpbmcpKTtcclxuICAgIG1vdmVDYXJkVG9QbGF5ZXIoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBJTGFuZ0RhdGEgfSBmcm9tICcuL2dsb2JhbC1jb21wb25lbnRzL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmdEYXRhOiBJTGFuZ0RhdGEgPSB7XHJcbiAgJ2VuJzoge1xyXG4gICAgJ3J1bGVzLWdvYWwtdGl0bGUnOiAnVGhlIGFpbTonLFxyXG4gICAgJ3J1bGVzLWdvYWwtdGV4dCc6ICd0byBiZSB0aGUgZmlyc3QgdG8gcGxheSBhbGwgb2Ygb25lYHMgb3duIGNhcmRzLicsXHJcbiAgICAncnVsZXMtcGxheS10aXRsZSc6ICdIb3cgdG8gcGxheScsXHJcbiAgICAncnVsZXMtcGxheS10ZXh0JzpcclxuICAgICAgJ09uIHlvdXIgdHVybiwgeW91IHNob3VsZCBwbGF5IG9uZSBjYXJkIG1hdGNoaW5nIHRoZSBkaXNjYXJkIGluIGNvbG9yLCBudW1iZXIsIG9yIHN5bWJvbC4gSWYgeW91IGhhdmUgbm8gYSBtYXRjaGluZyBjYXJkLCBkcmF3IHRoZSB0b3AgY2FyZCBmcm9tIHRoZSBkZWNrLCBhbmQgcGxheSBpdCBpZiBwb3NzaWJsZS4gV2hlbiB5b3UgcGxheSB5b3VyIHBlbnVsdGltYXRlIGNhcmQgeW91IG11c3QgY2FsbCBgVW5vIWAuIElmIHlvdSBkb25cXCd0IG5vdCBjYWxsIGBVbm9gIGFuZCBpcyBjYXVnaHQgYmVmb3JlIHRoZSBuZXh0IHBsYXllciBpbiBzZXF1ZW5jZSBzdGFydHMgdG8gdGFrZSBhIHR1cm4sIHlvdSBtdXN0IGRyYXcgdHdvIGNhcmRzIGFzIGEgcGVuYWx0eS4nLFxyXG4gICAgJ3J1bGVzLXBvaW50cy10aXRsZSc6ICdTY29yaW5nJyxcclxuICAgICdydWxlcy1wb2ludHMtdGV4dCc6XHJcbiAgICAgICdUaGUgZmlyc3QgcGxheWVyIHRvIGdldCByaWQgb2YgdGhlaXIgbGFzdCBjYXJkIHdpbnMgdGhlIGhhbmQgYW5kIHNjb3JlcyBwb2ludHMgZm9yIHRoZSBjYXJkcyBoZWxkIGJ5IHRoZSBvdGhlciBwbGF5ZXJzLiBUaGUgZmlyc3QgcGxheWVyIHRvIHNjb3JlIDI1MCBwb2ludHMgd2lucyB0aGUgZ2FtZS4nLFxyXG4gICAgJ251bWJlcmVkLWNhcmQtdGl0bGUnOiAnTnVtYmVyIGNhcmQnLFxyXG4gICAgJ3BsdXN0d28tY2FyZC10aXRsZSc6ICdEcmF3IFR3bycsXHJcbiAgICAncGx1c2ZvdXItY2FyZC10aXRsZSc6ICdXaWxkIERyYXcgRm91cicsXHJcbiAgICAncmV2ZXJzZS1jYXJkLXRpdGxlJzogJ1JldmVyc2UnLFxyXG4gICAgJ2Jsb2NrZWQtY2FyZC10aXRsZSc6ICdTa2lwJyxcclxuICAgICdtdWx0aS1jYXJkLXRpdGxlJzogJ1dpbGQnLFxyXG4gICAgJ251bWJlcmVkLWNhcmQtZGVzY3InOlxyXG4gICAgICAnQ2FyZCBpcyBwbGF5ZWQgaWYgaXRgcyBtYXRjaGUgdGhlIGRpc2NhcmQgaW4gY29sb3Igb3IgbnVtYmVyLicsXHJcbiAgICAncGx1c3R3by1jYXJkLWRlc2NyJzpcclxuICAgICAgJ05leHQgcGxheWVyIGluIHNlcXVlbmNlIGRyYXdzIHR3byBjYXJkcyBhbmQgbWlzc2VzIGEgdHVybi4gSWYgRHJhdyBUd28gY2FyZCBpcyBwbGF5ZWQsIGFuZCB0aGUgZm9sbG93aW5nIHBsYXllciBoYXMgYSBjYXJkIHdpdGggdGhlIHNhbWUgc3ltYm9sLCBoZSBjYW5gdCBwbGF5IHRoYXQgY2FyZCBhbmQgYHN0YWNrYCB0aGUgcGVuYWx0eSwgd2hpY2ggYWRkcyB0byB0aGUgY3VycmVudCBwZW5hbHR5IGFuZCBwYXNzZXMgaXQgdG8gdGhlIGZvbGxvd2luZyBwbGF5ZXIuJyxcclxuICAgICdwbHVzZm91ci1jYXJkLWRlc2NyJzpcclxuICAgICAgJ1BsYXllciBkZWNsYXJlcyB0aGUgbmV4dCBjb2xvciB0byBiZSBtYXRjaGVkOyBuZXh0IHBsYXllciBpbiBzZXF1ZW5jZSBkcmF3cyBmb3VyIGNhcmRzIGFuZCBtaXNzZXMgYSB0dXJuLiBNYXkgYmUgbGVnYWxseSBwbGF5ZWQgb25seSBpZiB0aGUgcGxheWVyIGhhcyBubyBjYXJkcyBvZiB0aGUgY3VycmVudCBjb2xvci4gSWYgV2lsZCBEcmF3IEZvdXIgY2FyZCBpcyBwbGF5ZWQsIGFuZCB0aGUgZm9sbG93aW5nIHBsYXllciBoYXMgYSBjYXJkIHdpdGggdGhlIHNhbWUgc3ltYm9sLCBoZSBjYW5gdCBwbGF5IHRoYXQgY2FyZCBhbmQgYHN0YWNrYCB0aGUgcGVuYWx0eSwgd2hpY2ggYWRkcyB0byB0aGUgY3VycmVudCBwZW5hbHR5IGFuZCBwYXNzZXMgaXQgdG8gdGhlIGZvbGxvd2luZyBwbGF5ZXIuICBFZmZlY3QgYXMgZmlyc3QgZGlzY2FyZDogY2FyZCBpcyByZXR1cm5lZCB0byB0aGUgZGVjaywgdGhlbiBhIG5ldyBjYXJkIGlzIGxhaWQgZG93biBpbnRvIHRoZSBkaXNjYXJkIHBpbGUuJyxcclxuICAgICdyZXZlcnNlLWNhcmQtZGVzY3InOiAnT3JkZXIgb2YgcGxheSBzd2l0Y2hlcyBkaXJlY3Rpb25zLicsXHJcbiAgICAnYmxvY2tlZC1jYXJkLWRlc2NyJzogJ05leHQgcGxheWVyIGluIHNlcXVlbmNlIG1pc3NlcyBhIHR1cm4uJyxcclxuICAgICdtdWx0aS1jYXJkLWRlc2NyJzpcclxuICAgICAgJ1BsYXllciBkZWNsYXJlcyB0aGUgbmV4dCBjb2xvciB0byBiZSBtYXRjaGVkLiBUaGUgbmV4dCBwbGF5ZXIgc2hvdWxkIHBsYXkgb25lIGNhcmQgaW4gZGVjbGFyZWQgY29sb3Igb3IgYW55IFdpbGQgQ2FyZC4gVGhpcyBjYXJkIG1heSBiZSBsZWdhbGx5IHBsYXllZCBvbmx5IGlmIHRoZSBwbGF5ZXIgaGFzIG5vIGNhcmRzIG9mIHRoZSBjdXJyZW50IGNvbG9yLicsXHJcbiAgICAnbnVtYmVyZWQtY2FyZC1wb2ludHMnOiAnVmFsdWU6IGl0IGNvdW50cyBpdGBzIGZhY2UgdmFsdWUuJyxcclxuICAgICdhY3Rpb24tY2FyZC1wb2ludHMnOiAnVmFsdWU6IDIwIHBvaW50cy4nLFxyXG4gICAgXHJcbiAgICAnYmxhY2stY2FyZC1wb2ludHMnOiAnVmFsdWU6IDUwIHBvaW50cy4nLFxyXG4gICAgJ2J0bi1wbGF5LWNvbXAnOiAnUGxheSBhZ2FpbnN0IGNvbXB1dGVyJyxcclxuICAgICdidG4tcGxheS1vbmxpbmUnOiAnT25saW5lIGdhbWUnLFxyXG4gICAgJ2J0bi1ydWxlcyc6ICdIb3cgdG8gcGxheScsXHJcbiAgICAnYnRuLWRldmVsb3BlZCc6ICdEZXZlbG9wZWQgYnknLFxyXG4gICAgJ2J0bi1zaGFyZSc6ICdTaGFyZScsXHJcbiAgICAnYnRuLXNvdW5kLW9uJzogJ1NvdW5kIG9uJyxcclxuICAgICdidG4tc291bmQtb2ZmJzogJ1NvdW5kIG9mZicsXHJcbiAgICAnYnRuLW11c2ljLW9uJzogJ011c2ljIG9uJyxcclxuICAgICdidG4tbXVzaWMtb2ZmJzogJ011c2ljIG9mZicsXHJcbiAgICAnYnRuLXJ1JzogJ1JVJyxcclxuICAgICdidG4tZW5nJzogJ0VORycsXHJcbiAgICAnYnRuLW1haW4tcGFnZSc6ICdNQUlOIFBBR0UnLFxyXG4gICAgJ2J0bi1ydWxlcy1wYWdlJzogJ1JVTEVTJyxcclxuICAgICdidG4td2lubmVycy1wYWdlJzogJ1JFU1VMVFMnLFxyXG4gICAgJ2J0bi1mbGlwJzogJ2ZsaXAgY2FyZCcsXHJcbiAgICAnYnRuLXJlYWQnOiAncmVhZCBtb3JlLi4uJyxcclxuICAgICdidG4tcmVnaXN0cic6ICdyZWdpc3RyYXRpb24nLFxyXG4gICAgJ2J0bi1sb2dpbic6ICdsb2cgaW4nLFxyXG4gICAgJ2J0bi1zaWduLW91dCc6ICdzaWduIG91dCcsXHJcblxyXG4gICAgJ2Nob29zZS1xdWFudGl0eSc6ICdDaG9vc2UgcXVhbnRpdHkgb2YgcGxheWVycycsXHJcbiAgICAnY2hvb3NlLTItcGxheWVycyc6ICd0d28gcGxheWVycycsXHJcbiAgICAnY2hvb3NlLTMtcGxheWVycyc6ICd0aHJlZSBwbGF5ZXJzJyxcclxuICAgICdjaG9vc2UtNC1wbGF5ZXJzJzogJ2ZvdXIgcGxheWVycycsXHJcbiAgICAnY2hvb3NlLWRpZmZpY3VsdHknOiAnQ2hvb3NlIGRpZmZpY3VsdHknLFxyXG4gICAgJ2Nob29zZS1lYXN5JzogJ2Vhc3knLFxyXG4gICAgJ2Nob29zZS1oYXJkJzogJ2hhcmQnLFxyXG4gICAgJ2Nob29zZS1zdGFydCc6ICdzdGFydCcsXHJcblxyXG4gICAgJ2Rldi1raXInOiAnVGVhbSBMZWFkIEtpcmlsbCcsXHJcbiAgICAnZGV2LWFuJzogJ0FubmVsaScsXHJcbiAgICAnZGV2LWFsJzogJ0FsZXgnLFxyXG4gICAgJ2Rldi1ieSc6ICdEZXZlbG9wZWQgYnknLFxyXG4gICAgJ2Rldi12ZXJzaW9uJzogJ3ZlcnNpb24nLFxyXG5cclxuICAgICdyZWctbmlja25hbWUnOiAnRWRpdCB5b3VyIG5pY2tuYW1lJyxcclxuICAgICdyZWctcGFzcyc6ICdFZGl0IHlvdXIgcGFzc3dvcmQnLFxyXG4gICAgJ3JlZy1uaWNrbmFtZS10aXRsZSc6ICdbNSAtIDEwIGxldHRlcnNdJyxcclxuICAgICdyZWctcGFzcy10aXRsZSc6ICdbNSBudW1iZXJzXScsXHJcbiAgICAncmVnLWVtYWlsJzogJ0VkaXQgeW91ciBFbWFpbCcsXHJcbiAgICAncmVnLWVtYWlsLXRpdGxlJzogJ2l2YW5vdml2YW5AbWFpbC5ydScsXHJcbiAgICAncmVnLWJ0bic6ICdzdWJtaXQnLFxyXG5cclxuICAgICdsZWF2ZS1tZXNzYWdlJzogJ0RvIHlvdSByZWFsbHkgd2FudCB0byBsZWF2ZSB0aGUgZ2FtZT8gXFxuUmVzdWx0cyB3aWxsIGJlIGxvc3QnLFxyXG4gICAgJ2xlYXZlLXllcyc6ICd5ZXMnLFxyXG4gICAgJ2xlYXZlLW5vJzogJ2NhbmNlbCcsXHJcblxyXG4gICAgJ3Jlcy1uYW1lJzogJ05pY2tuYW1lJyxcclxuICAgICdyZXMtcG9pbnRzJzogJ1BvaW50cycsXHJcbiAgfSxcclxuICAncnUnOiB7XHJcbiAgICAncnVsZXMtZ29hbC10aXRsZSc6ICfQptC10LvRjCDQuNCz0YDRiycsXHJcbiAgICAncnVsZXMtZ29hbC10ZXh0JzogJ9C40LfQsdCw0LLQuNGC0YzRgdGPINC+0YIg0LLRgdC10YUg0LrQsNGA0YIg0LHRi9GB0YLRgNC10LUg0L/RgNC+0YLQuNCy0L3QuNC60L7Qsi4nLFxyXG4gICAgJ3J1bGVzLXBsYXktdGl0bGUnOiAn0JzQtdGF0LDQvdC40LrQsCDQuNCz0YDRiycsXHJcbiAgICAncnVsZXMtcGxheS10ZXh0JzpcclxuICAgICAgJ9CSINGB0LLQvtC5INGF0L7QtCDQv9C+0LvQvtC20Lgg0LrQsNGA0YLRgyDQsiDQuNCz0YDQvtCy0YPRjiDQutC+0LvQvtC00YMsINC/0YDQuCDRjdGC0L7QvCDQutCw0YDRgtCwINC00L7Qu9C20L3QsCDRgdC+0LLQv9Cw0LTQsNGC0Ywg0YEg0LLQtdGA0YXQvdC10Lkg0LrQsNGA0YLQvtC5INCyINC40LPRgNC+0LLQvtC5INC60L7Qu9C+0LTQtSDQv9C+INGG0LLQtdGC0YMg0LjQu9C4INC/0L4g0LrQsNGA0YLQuNC90LrQtS4g0JXRgdC70Lgg0YMg0YLQtdCx0Y8g0L3QtdGCINC/0L7QtNGF0L7QtNGP0YnQtdC5INC60LDRgNGC0YssINGC0L4g0LLQvtC30YzQvNC4INC+0LTQvdGDINC60LDRgNGC0YMg0LjQtyDQutC+0LvQvtC00Ysg0LHQsNC90LrQsCDQuCwg0LXRgdC70Lgg0L7QvdCwINC/0L7QtNGF0L7QtNC40YIsINC80L7QttC10YjRjCDRgdC00LXQu9Cw0YLRjCDRhdC+0LQg0Y3RgtC+0Lkg0LrQsNGA0YLQvtC5LiDQmtC+0LPQtNCwINC60LvQsNC00ZHRiNGMINCyINGB0LHRgNC+0YEg0YHQstC+0Y4g0L/RgNC10LTQv9C+0YHQu9C10LTQvdGO0Y4g0LrQsNGA0YLRgywg0L3Rg9C20L3QviDRgdC60LDQt9Cw0YLRjCDCq9Cj0L3QviHCuy4g0JXRgdC70Lgg0L3QtSDRgdC60LDQt9Cw0Lsg0Y3RgtC+0LPQviDQuCDQvtGB0YLQsNC70YzQvdGL0LUg0LjQs9GA0L7QutC4INC30LDQvNC10YLQuNC70Lgg0Y3RgtC+INC00L4g0L3QsNGH0LDQu9CwINGF0L7QtNCwINGB0LvQtdC00YPRjtGJ0LXQs9C+INC40LPRgNC+0LrQsCwg0YLQviDQsdC10YDQtdGI0YwgMiDQutCw0YDRgtGLINC40Lcg0L7RgdC90L7QstC90L7QuSDQutC+0LvQvtC00YsuJyxcclxuICAgICdydWxlcy1wb2ludHMtdGl0bGUnOiAn0J/QvtC00YHRh9C10YIg0LHQsNC70LvQvtCyJyxcclxuICAgICdydWxlcy1wb2ludHMtdGV4dCc6XHJcbiAgICAgICfQoNCw0YPQvdC0INCy0YvQuNCz0YDRi9Cy0LDQtdGCINC40LPRgNC+0LosINGB0LHRgNC+0YHQuNCy0YjQuNC5INCy0YHQtSDQutCw0YDRgtGLINC/0LXRgNCy0YvQvC4g0J7QvSDQv9C+0LvRg9GH0LDQtdGCINC60L7Qu9C40YfQtdGB0YLQstC+INCx0LDQu9C70L7Qsiwg0YDQsNCy0L3QvtC1INGB0YPQvNC80LUg0YHRgtC+0LjQvNC+0YHRgtC4INC60LDRgNGCINC/0YDQvtGC0LjQstC90LjQutC+0LIuINCS0YvQuNCz0YDRi9Cy0LDQtdGCINC40LPRgNGDINC40LPRgNC+0LosINC/0LXRgNCy0YvQuSDQvdCw0LHRgNCw0LLRiNC40LkgMjUwINCx0LDQu9C70L7Qsi4nLFxyXG4gICAgJ251bWJlcmVkLWNhcmQtdGl0bGUnOiAn0JrQsNGA0YLQsCDRgSDRhtC40YTRgNC+0LknLFxyXG4gICAgJ3BsdXN0d28tY2FyZC10aXRsZSc6ICfQktC+0LfRjNC80Lgg0LTQstC1JyxcclxuICAgICdwbHVzZm91ci1jYXJkLXRpdGxlJzogJ9CX0LDQutCw0LbQuCDRhtCy0LXRgiDQuCDQstC+0LfRjNC80Lgg0YfQtdGC0YvRgNC1JyxcclxuICAgICdyZXZlcnNlLWNhcmQtdGl0bGUnOiAn0KXQvtC0INC+0LHRgNCw0YLQvdC+JyxcclxuICAgICdibG9ja2VkLWNhcmQtdGl0bGUnOiAn0J/RgNC+0L/Rg9GB0YLQuCDRhdC+0LQnLFxyXG4gICAgJ211bHRpLWNhcmQtdGl0bGUnOiAn0JfQsNC60LDQttC4INGG0LLQtdGCJyxcclxuICAgICdudW1iZXJlZC1jYXJkLWRlc2NyJzogJ9Ca0LDRgNGC0LAg0LrQu9Cw0LTQtdGC0YHRjyDQv9GA0Lgg0YHQvtCy0L/QsNC00LXQvdC40Lgg0YbQstC10YLQsCDQuNC70Lgg0YbQuNGE0YDRiy4nLFxyXG4gICAgJ3BsdXN0d28tY2FyZC1kZXNjcic6XHJcbiAgICAgICdD0LvQtdC00YPRjtGJ0LjQuSDQuNCz0YDQvtC6INCx0LXRgNGR0YIgMiDQutCw0YDRgtGLINC40Lcg0LrQvtC70L7QtNGLINCx0LDQvdC60LAg0Lgg0L/RgNC+0L/Rg9GB0LrQsNC10YIg0YHQstC+0Lkg0YXQvtC0LiDQrdGC0YMg0LrQsNGA0YLRgyDRgdC70LXQtNGD0Y7RidC40Lkg0LjQs9GA0L7QuiDQvdC1INC80L7QttC10YIg0LrQu9Cw0YHRgtGMINC/0L7QstC10YDRhSDRgtCw0LrQvtC5INC20LUg0LjQu9C4INC60LDRgNGC0YsgYNCX0LDQutCw0LbQuCDRhtCy0LXRgiDQuCDQstC+0LfRjNC80Lgg0YfQtdGC0YvRgNC1YCDQsiDRhtC10LvRj9GFINGB0YPQvNC80LjRgNC+0LLQsNC90LjRjy4nLFxyXG4gICAgJ3BsdXNmb3VyLWNhcmQtZGVzY3InOlxyXG4gICAgICAn0JfQsNC60LDQttC4INGG0LLQtdGCINC4INGB0LvQtdC00YPRjtGJ0LjQuSDQuNCz0YDQvtC6INCx0LXRgNGR0YIgNCDQutCw0YDRgtGLINC4INC/0YDQvtC/0YPRgdC60LDQtdGCINGF0L7QtC4g0K3RgtGDINC60LDRgNGC0YMg0YHQu9C10LTRg9GO0YnQuNC5INC40LPRgNC+0Log0L3QtSDQvNC+0LbQtdGCINC60LvQsNGB0YLRjCDQv9C+0LLQtdGA0YUg0YLQsNC60L7QuSDQttC1INC40LvQuCDQutCw0YDRgtGLIGDQktC+0LfRjNC80Lgg0LTQstC1YCDQsiDRhtC10LvRj9GFINGB0YPQvNC80LjRgNC+0LLQsNC90LjRjy4g0JXQuSDQvdC10LvRjNC30Y8g0YXQvtC00LjRgtGMLCDQtdGB0LvQuCDQtdGB0YLRjCDQutCw0YDRgtCwLCDQv9C+INGG0LLQtdGC0YMg0YHQvtCy0L/QsNC00LDRjtGJ0LDRjyDRgSDQstC10YDRhdC90LXQuSDQutCw0YDRgtC+0Lkg0LIg0LjQs9GA0L7QstC+0Lkg0LrQvtC70L7QtNC1LiDQldGB0LvQuCDRjdGC0L4g0L/QtdGA0LLQsNGPINC60LDRgNGC0LAg0LIg0LjQs9GA0LUg4oCUINC+0L3QsCDQstC+0LfQstGA0LDRidCw0LXRgtGB0Y8g0LIg0LrQvtC70L7QtNGDINC4INCx0LXRgNC10YLRgdGPINC00YDRg9Cz0LDRjyDQutCw0YDRgtCwLicsXHJcbiAgICAncmV2ZXJzZS1jYXJkLWRlc2NyJzogJ9Cd0LDQv9GA0LDQstC70LXQvdC40LUg0YXQvtC00LAg0LzQtdC90Y/QtdGC0YHRjycsXHJcbiAgICAnYmxvY2tlZC1jYXJkLWRlc2NyJzogJ0PQu9C10LTRg9GO0YnQuNC5INC/0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRjiDQuNCz0YDRiyDQuNCz0YDQvtC6INC/0YDQvtC/0YPRgdC60LDQtdGCINGF0L7QtC4nLFxyXG4gICAgJ211bHRpLWNhcmQtZGVzY3InOlxyXG4gICAgICAn0JfQsNC60LDQttC4INGG0LLQtdGCINC4INGB0LvQtdC00YPRjtGJ0LjQuSDQuNCz0YDQvtC6INC00L7Qu9C20LXQvSDRgdC00LXQu9Cw0YLRjCDRhdC+0LQg0LvQuNCx0L4g0LrQsNGA0YLQvtC5INC30LDQutCw0LfQsNC90L3QvtCz0L4g0YbQstC10YLQsCwg0LvQuNCx0L4g0LrQsNGA0YLRgyDRgSDRh9GR0YDQvdGL0Lwg0YTQvtC90L7QvC4g0K3RgtC+0Lkg0LrQsNGA0YLQvtC5INC90LXQu9GM0LfRjyDRhdC+0LTQuNGC0YwsINC10YHQu9C4INC10YHRgtGMINC60LDRgNGC0LAsINC/0L4g0YbQstC10YLRgyDRgdC+0LLQv9Cw0LTQsNGO0YnQsNGPINGBINCy0LXRgNGF0L3QtdC5INC60LDRgNGC0L7QuSDQsiDQuNCz0YDQvtCy0L7QuSDQutC+0LvQvtC00LUuJyxcclxuICAgICdudW1iZXJlZC1jYXJkLXBvaW50cyc6ICfQodGC0L7QuNC80L7RgdGC0Yw6INC/0L4g0LfQvdCw0YfQtdC90LjRjiDQvdCwINC60LDRgNGC0LUnLFxyXG4gICAgJ2FjdGlvbi1jYXJkLXBvaW50cyc6ICfQodGC0L7QuNC80L7RgdGC0Yw6IDIwINCx0LDQu9C70L7QsicsXHJcbiAgICAnYmxhY2stY2FyZC1wb2ludHMnOiAn0KHRgtC+0LjQvNC+0YHRgtGMOiA1MCDQsdCw0LvQu9C+0LInLFxyXG4gICAgJ2J0bi1wbGF5LWNvbXAnOiAn0JjQs9GA0LDRgtGMINC/0YDQvtGC0LjQsiDQutC+0LzQv9GM0Y7RgtC10YDQsCcsXHJcbiAgICAnYnRuLXBsYXktb25saW5lJzogJ9Ce0L3Qu9Cw0LnQvSDQuNCz0YDQsCcsXHJcbiAgICAnYnRuLXJ1bGVzJzogJ9Cf0YDQsNCy0LjQu9CwINC40LPRgNGLJyxcclxuICAgICdidG4tZGV2ZWxvcGVkJzogJ9Cg0LDQt9GA0LDQsdC+0YLRh9C40LrQuCcsXHJcbiAgICAnYnRuLXNoYXJlJzogJ9Cf0L7QtNC10LvQuNGC0YzRgdGPJyxcclxuICAgICdidG4tc291bmQtb24nOiAn0JfQstGD0Log0LLQutC7LicsXHJcbiAgICAnYnRuLXNvdW5kLW9mZic6ICfQl9Cy0YPQuiDQstGL0LrQuy4nLFxyXG4gICAgJ2J0bi1tdXNpYy1vbic6ICfQnNGD0LfRi9C60LAg0LLQutC7LicsXHJcbiAgICAnYnRuLW11c2ljLW9mZic6ICfQnNGD0LfRhNC60LAg0LLRi9C60LsuJyxcclxuICAgICdidG4tcnUnOiAn0KDQo9ChJyxcclxuICAgICdidG4tZW5nJzogJ9CQ0J3QkycsXHJcbiAgICAnYnRuLW1haW4tcGFnZSc6ICfQk9Cb0JDQktCd0JDQryDQodCi0KDQkNCd0JjQptCQJyxcclxuICAgICdidG4tcnVsZXMtcGFnZSc6ICfQn9Cg0JDQktCY0JvQkCDQmNCT0KDQqycsXHJcbiAgICAnYnRuLXdpbm5lcnMtcGFnZSc6ICfQotCQ0JHQm9CY0KbQkCDQoNCV0JfQo9Cb0KzQotCQ0KLQntCSJyxcclxuICAgICdidG4tZmxpcCc6ICfQv9C10YDQtdCy0LXRgNC90YPRgtGMJyxcclxuICAgICdidG4tcmVhZCc6ICfQv9C+0LTRgNC+0LHQvdC10LUuLi4nLFxyXG4gICAgJ2J0bi1yZWdpc3RyJzogJ9GA0LXQs9C40YHRgtGA0LDRhtC40Y8nLFxyXG4gICAgJ2J0bi1sb2dpbic6ICfQstGF0L7QtCcsXHJcbiAgICAnYnRuLXNpZ24tb3V0JzogJ9Cy0YvRhdC+0LQnLFxyXG5cclxuICAgICdjaG9vc2UtcXVhbnRpdHknOiAn0JLRi9Cx0LXRgNC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQuNCz0YDQvtC60L7QsicsXHJcbiAgICAnY2hvb3NlLTItcGxheWVycyc6ICfQtNCy0LAg0LjQs9GA0L7QutCwJyxcclxuICAgICdjaG9vc2UtMy1wbGF5ZXJzJzogJ9GC0YDQuCDQuNCz0YDQvtC60LAnLFxyXG4gICAgJ2Nob29zZS00LXBsYXllcnMnOiAn0YfQtdGC0YvRgNC1INC40LPRgNC+0LrQsCcsXHJcbiAgICAnY2hvb3NlLWRpZmZpY3VsdHknOiAn0JLRi9Cx0LXRgNC40YLQtSDRgdC70L7QttC90L7RgdGC0YwnLFxyXG4gICAgJ2Nob29zZS1lYXN5JzogJ9C70LXQs9C60L4nLFxyXG4gICAgJ2Nob29zZS1oYXJkJzogJ9GB0LvQvtC20L3QvicsXHJcbiAgICAnY2hvb3NlLXN0YXJ0JzogJ9GB0YLQsNGA0YInLFxyXG5cclxuICAgICdkZXYta2lyJzogJ9Ca0LjRgNC40LvQuycsXHJcbiAgICAnZGV2LWFuJzogJ9CQ0L3QvdC10LvQuCcsXHJcbiAgICAnZGV2LWFsJzogJ9CQ0LvQtdC60YEnLFxyXG4gICAgJ2Rldi1ieSc6ICfQoNCw0LfRgNCw0LHQvtGC0YfQuNC60LgnLFxyXG4gICAgJ2Rldi12ZXJzaW9uJzogJ9Cy0LXRgNGB0LjRjycsXHJcblxyXG4gICAgJ3JlZy1uaWNrbmFtZSc6ICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y8nLFxyXG4gICAgJ3JlZy1wYXNzJzogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCDQv9Cw0YDQvtC70YwnLFxyXG4gICAgJ3JlZy1uaWNrbmFtZS10aXRsZSc6ICdbNSAtIDEwINCx0YPQutCyXScsXHJcbiAgICAncmVnLXBhc3MtdGl0bGUnOiAnWzUg0YbQuNGE0YBdJyxcclxuICAgICdyZWctZW1haWwnOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINCw0LTRgNC10YEg0L/QvtGH0YLRiycsXHJcbiAgICAncmVnLWVtYWlsLXRpdGxlJzogJ2l2YW5vdml2YW5AbWFpbC5ydScsXHJcbiAgICAncmVnLWJ0bic6ICfQv9C+0LTRgtCy0LXRgNC00LjRgtGMJyxcclxuXHJcbiAgICAnbGVhdmUtbWVzc2FnZSc6ICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LrQuNC90YPRgtGMINC40LPRgNGDP1xcbtCU0LDQvdC90YvQtSDQsdGD0LTRg9GCINGD0YLQtdGA0Y/QvdGLJyxcclxuICAgICdsZWF2ZS15ZXMnOiAn0LTQsCcsXHJcbiAgICAnbGVhdmUtbm8nOiAn0L7RgtC80LXQvdCwJyxcclxuXHJcbiAgICAncmVzLW5hbWUnOiAn0JjQvNGPJyxcclxuICAgICdyZXMtcG9pbnRzJzogJ9CR0LDQu9C70YsnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGxhbmdEYXRhIH0gZnJvbSAnLi4vZGF0YSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVBhcmFncmFwaCwgY3JlYXRlSW1hZ2UsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlTGluaywgaGlkZURldmVsb3BlZEJ5QmxvY2sgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgY3JlYXRlRm9vdGVyTGlua3NDb250YWluZXIgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2xpbmtzLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGxpbmtLaXJpbGwgPSBjcmVhdGVMaW5rKCdraXJpbGwtbGluaycsICdodHRwczovL2dpdGh1Yi5jb20va2lyaWxsZGVteWFuZW5rbycsIGxhbmdEYXRhW2xhbmddWydkZXYta2lyJ10pO1xyXG4gIGNvbnN0IGdoS2lyaWxsID0gY3JlYXRlSW1hZ2UoJ2tpcmlsbCcsICcuLi9hc3NldHMvaW1nL2dpdGh1Yi1sb2dvLnN2ZycsICdraXJpbGwnKTtcclxuICBsaW5rS2lyaWxsLmFwcGVuZChnaEtpcmlsbCk7XHJcbiAgY29uc3QgbGlua0FubmVsaSA9IGNyZWF0ZUxpbmsoJ2tpcmlsbC1saW5rJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9Bbm5lbGktc2YnLCBsYW5nRGF0YVtsYW5nXVsnZGV2LWFuJ10pO1xyXG4gIGNvbnN0IGdoQW5uZWxpID0gY3JlYXRlSW1hZ2UoJ2FubmVsaScsICcuLi9hc3NldHMvaW1nL2dpdGh1Yi1sb2dvLnN2ZycsICdhbm5lbGknKTtcclxuICBsaW5rQW5uZWxpLmFwcGVuZChnaEFubmVsaSk7XHJcbiAgY29uc3QgbGlua0FsZXggPSBjcmVhdGVMaW5rKCdraXJpbGwtbGluaycsICdodHRwczovL2dpdGh1Yi5jb20vTWFlc3Ryb0Zyb250JywgbGFuZ0RhdGFbbGFuZ11bJ2Rldi1hbCddKTtcclxuICBjb25zdCBnaEFsZXggPSBjcmVhdGVJbWFnZSgnYWxleCcsICcuLi9hc3NldHMvaW1nL2dpdGh1Yi1sb2dvLnN2ZycsICdhbGV4Jyk7XHJcbiAgbGlua0FsZXguYXBwZW5kKGdoQWxleCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChsaW5rS2lyaWxsLCBsaW5rQW5uZWxpLCBsaW5rQWxleCk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEZXZlbG9wZWRCeUNvbnRhaW5lciA9IChsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGV2ZWxvcGVkLWJ5Jyk7XHJcbiAgY29uc3QgaGlkZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdvcGFjaXR5Jyk7XHJcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVQYXJhZ3JhcGgoJ2RldmVsb3BlZC10aXRsZScsIGxhbmdEYXRhW2xhbmddWydkZXYtYnknXSk7XHJcbiAgY29uc3QgbG9nbyA9IGNyZWF0ZUltYWdlKCd0ZWFtLWxvZ28nLCAnLi4vYXNzZXRzL2ltZy90ZWFtLnBuZycsICd0ZWFtLWxvZ28nKTtcclxuICBjb25zdCB2ZXJzaW9uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIGxhbmdEYXRhW2xhbmddWydkZXYtdmVyc2lvbiddKTtcclxuICB2ZXJzaW9uLnRleHRDb250ZW50ID0gJ3ZlciAxLjAxJztcclxuICBjb25zdCBjcm9zcyA9IGNyZWF0ZUJ1dHRvbignYnRuLWNyb3NzJywgJ2J1dHRvbicsICfRhScpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBsb2dvLCBjcmVhdGVGb290ZXJMaW5rc0NvbnRhaW5lcihsYW5nKSwgdmVyc2lvbiwgY3Jvc3MpO1xyXG4gIGhpZGUuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgcmV0dXJuIGhpZGU7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5kZXZlbG9wZWQtYnkgLmJ0bi1jcm9zcycpKSBoaWRlRGV2ZWxvcGVkQnlCbG9jaygpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVJbWFnZSB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRXJyb3JQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpIGFzIEhUTUxCb2R5RWxlbWVudDtcclxuICBjb25zdCBpbWFnZSA9IGNyZWF0ZUltYWdlKCdlcnJvci00MDQnLCAnLi4vLi4vYXNzZXRzL2ltZy9lcnJvci5naWYnLCAnZXJyb3IgNDA0Jyk7XHJcbiAgY29uc3QgYnRuRXJyb3JDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZXJyb3ItYnRuLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnRuLW1haW4tcGFnZScsICdidXR0b24nLCAnbWFpbiBwYWdlJyk7XHJcbiAgYnRuRXJyb3JDb250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcclxuICBib2R5LmFwcGVuZChpbWFnZSwgYnRuRXJyb3JDb250YWluZXIpO1xyXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxufTsiLCJpbXBvcnQgeyBsYW5nRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4aXRXaW5kb3cgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2V4aXQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgcXVlc3Rpb24gPSBjcmVhdGVFbGVtZW50KCdoMicsICdxdWVzdGlvbicpIGFzIEhUTUxIZWFkRWxlbWVudDtcclxuICBxdWVzdGlvbi50ZXh0Q29udGVudCA9IGxhbmdEYXRhW2xhbmddWydsZWF2ZS1tZXNzYWdlJ107XHJcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2V4aXQtYnRucy1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBidG5ZZXMgPSBjcmVhdGVCdXR0b24oJ2J0bi15ZXMnLCAnYnV0dG9uJywgbGFuZ0RhdGFbbGFuZ11bJ2xlYXZlLXllcyddKTtcclxuICBjb25zdCBidG5ObyA9IGNyZWF0ZUJ1dHRvbignYnRuLW5vJywgJ2J1dHRvbicsIGxhbmdEYXRhW2xhbmddWydsZWF2ZS1ubyddKTtcclxuXHJcbiAgYnRuQ29udGFpbmVyLmFwcGVuZChidG5ZZXMsIGJ0bk5vKTtcclxuICBjb250YWluZXIuYXBwZW5kKHF1ZXN0aW9uLCBidG5Db250YWluZXIpO1xyXG5cclxuICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG59O1xyXG4iLCIvLyBpbXBvcnQgeyBjaG9vc2VDb2xvciB9IGZyb20gJy4uL2FuaW1hdGVkLWl0ZW1zL2FuaW1hdGVkLWl0ZW1zJztcclxuaW1wb3J0IHsgcmVuZGVyQ2hhdEJ1dHRvbiB9IGZyb20gJy4uL2NoYXQvY2hhdCc7XHJcbmltcG9ydCB7IGxhbmdEYXRhIH0gZnJvbSAnLi4vZGF0YSc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvb3RlciA9IChsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgYnRuRGV2ZWxvcGVkQnkgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAnYnRuLWRldmVsb3BlZCcsXHJcbiAgICAnYnV0dG9uJyxcclxuICAgIGxhbmdEYXRhW2xhbmddWydkZXYtYnknXSxcclxuICApO1xyXG4gIGNvbnN0IGJ0blNoYXJlID0gY3JlYXRlQnV0dG9uKCdidG4tc2hhcmUnLCAnYnV0dG9uJywgbGFuZ0RhdGFbbGFuZ11bJ2J0bi1zaGFyZSddKTtcclxuICAvLyBjb25zdCBidG5UZXN0ID0gY3JlYXRlQnV0dG9uKCdidG4tdGVzdCcsICdidXR0b24nLCAndGVzdCcpOyAvLy0tLS0tLS0tLS3Qo9CU0JDQm9CY0KLQrFxyXG4gIGJ0blNoYXJlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XHJcbiAgICAgIG5hdmlnYXRvclxyXG4gICAgICAgIC5zaGFyZSh7XHJcbiAgICAgICAgICB0aXRsZTogJ9CY0LPRgNCwIFVOTycsXHJcbiAgICAgICAgICB0ZXh0OiAn0KLQtdCx0LUg0LTQsNCy0L3QviDRg9C20LUg0L/QvtGA0LAg0LfQsNC90Y/RgtGM0YHRjyDRh9C10Lwt0YLQviDQv9C+INC40YHRgtC40L3QvdC1INC60YDRg9GC0YvQvC4nLFxyXG4gICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCfQo9C00LDQu9C+0YHRjCDQv9C+0LTQtdC70LjRgtGM0YHRjycpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7QtNC10LvQuNGC0YzRgdGPJywgZXJyb3IpKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGJ0blRlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VDb2xvcik7IC8vLS0tLS0tLS0tLdCj0JTQkNCb0JjQotCsXHJcbiAgaWYgKGZvb3RlcikgZm9vdGVyLmFwcGVuZChidG5EZXZlbG9wZWRCeSwgYnRuU2hhcmUsIHJlbmRlckNoYXRCdXR0b24oKSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldENhcmRTb3VuZFBsYXkgfSBmcm9tICcuLi9zb3VuZHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVDdXJyQ2FyZCA9IChlOiBFdmVudCkgPT4ge1xyXG4gIGNvbnN0IGVsID0gZS50YXJnZXQgYXMgRWxlbWVudDtcclxuICBjb25zdCBjdXJyQ2FyZCA9IChlbC5wYXJlbnRFbGVtZW50IGFzIEVsZW1lbnQpLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgaWYgKGVsLmNsb3Nlc3QoJy5jYXJkQ2VudGVyJykpIHtcclxuICAgIGNvbnN0IGN1cnJDYXJkS2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lRWZmZWN0KFxyXG4gICAgICBjdXJyQ2FyZCwgXHJcbiAgICAgIFtcclxuICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwJSwgMCUpJyB9LCBcclxuICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg1MCUsIC01MCUpJyB9LFxyXG4gICAgICBdLCBcclxuICAgICAgeyBkdXJhdGlvbjogMzAwLCBmaWxsOiAnbm9uZScgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBtb3ZlQ2FyZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oY3VyckNhcmRLZXlmcmFtZXMsIGRvY3VtZW50LnRpbWVsaW5lKTtcclxuICAgIG1vdmVDYXJkQW5pbWF0aW9uLnBsYXkoKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJkRnJvbURlY2sgPSAoZTogRXZlbnQsIHBsYXllck51bWJlcjogc3RyaW5nICkgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWNhcmQnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjbGlja2VkQ2FyZCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgbGV0IHBsYXllciA9IHt9O1xyXG4gIHN3aXRjaCAocGxheWVyTnVtYmVyKSB7XHJcbiAgICBjYXNlICd0b3AnOiB7XHJcbiAgICAgIHBsYXllciA9IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEwMCUsIC05MCUpIHJvdGF0ZSgxODBkZWcpJyB9O1xyXG4gICAgfSBicmVhaztcclxuICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgIHBsYXllciA9IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0yNTAlLCAwJSkgcm90YXRlKDkwZGVnKScgfTtcclxuICAgIH0gYnJlYWs7XHJcbiAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgcGxheWVyID0geyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMzAwJSwgMCUpIHJvdGF0ZSg5MGRlZyknIH07XHJcbiAgICB9IGJyZWFrO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBwbGF5ZXIgPSB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMDAlLCAxNjAlKSByb3RhdGVZKC0xODBkZWcpJyB9O1xyXG4gICAgfSBicmVhaztcclxuXHJcbiAgfVxyXG4gIGlmIChjbGlja2VkQ2FyZC5jbG9zZXN0KCcuYmFjay1zaWRlJykpIHtcclxuICAgIGNvbnN0IGN1cnJDYXJkS2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lRWZmZWN0KFxyXG4gICAgICBjYXJkLCBcclxuICAgICAgW1xyXG4gICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAlLCAwJSkgcm90YXRlWSgwZGVnKSByb3RhdGVYKDkwZGVnKScgfSxcclxuICAgICAgICBwbGF5ZXIsXHJcbiAgICAgIF0sIFxyXG4gICAgICB7IGR1cmF0aW9uOiAxMDAwLCBmaWxsOiAnbm9uZScgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBtb3ZlQ2FyZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oY3VyckNhcmRLZXlmcmFtZXMsIGRvY3VtZW50LnRpbWVsaW5lKTtcclxuICAgIG1vdmVDYXJkQW5pbWF0aW9uLnBsYXkoKTtcclxuICAgIHZvaWQgZ2V0Q2FyZFNvdW5kUGxheSgpO1xyXG4gIH1cclxufTtcclxuXHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlQnV0dG9uLFxyXG4gIGNyZWF0ZUVsZW1lbnQsXHJcbiAgY3JlYXRlSW1hZ2UsXHJcbiAgY3JlYXRlUGFyYWdyYXBoLFxyXG59IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyByZW5kZXJCYWNrU2lkZSwgcmVuZGVyQ2FyZFdpdGhOdW1iZXIsIHllbGxvd0NvbG9yIH0gZnJvbSAnLi4vY2FyZHMvY2FyZHMnO1xyXG5pbXBvcnQgeyBnZXRDYXJkRnJvbURlY2sgfSBmcm9tICcuL2dhbWUtYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgcmVuZGVyQ2hhdCB9IGZyb20gJy4uL2NoYXQvY2hhdCc7XHJcbmltcG9ydCB7IHJlbmRlckRpYW1vbmQsIHJlbmRlclJldmVyc2VNZXNzYWdlIH0gZnJvbSAnLi4vYW5pbWF0ZWQtaXRlbXMvYW5pbWF0ZWQtaXRlbXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVSdWxlc1dpbmRvdywgb3BlblJ1bGVzV2luZG93IH0gZnJvbSAnLi4vcnVsZXMtcGFnZS9ydWxlcy1wYWdlJztcclxuXHJcbmNvbnN0IHBsYXllckZpZWxkID0gKHBsYXllckNsYXNzTmFtZTogc3RyaW5nLCBwbGF5ZXJOYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBibG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHBsYXllckNsYXNzTmFtZSkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgYmxvY2suaWQgPSBwbGF5ZXJDbGFzc05hbWU7XHJcbiAgY29uc3QgY2FyZHNCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkcycpO1xyXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlUGFyYWdyYXBoKCdwbGF5ZXItbmFtZScsIHBsYXllck5hbWUpO1xyXG4gIHRpdGxlLmlkID0gYG5hbWUtJHtwbGF5ZXJDbGFzc05hbWV9YDtcclxuICBibG9jay5hcHBlbmQoY2FyZHNCbG9jaywgdGl0bGUpO1xyXG5cclxuICByZXR1cm4gYmxvY2s7XHJcbn07XHJcblxyXG5jb25zdCByYW5kb21JbnRlZ2VyID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG4gIC8vINC/0L7Qu9GD0YfQuNGC0Ywg0YHQu9GD0YfQsNC50L3QvtC1INGH0LjRgdC70L4g0L7RgiAobWluLTAuNSkg0LTQviAobWF4KzAuNSlcclxuICBjb25zdCByYW5kID0gbWluIC0gMC41ICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcclxuICByZXR1cm4gTWF0aC5yb3VuZChyYW5kKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBJUGxheWVyIHtcclxuICBmaXJzdF9uYW1lOiBzdHJpbmcsXHJcbiAgaGVpZ2h0X2ZlZXQ6IG51bGwsXHJcbiAgaGVpZ2h0X2luY2hlczogbnVsbCxcclxuICBpZDogbnVtYmVyLFxyXG4gIGxhc3RfbmFtZTogc3RyaW5nLFxyXG4gIHBvc2l0aW9uOiBzdHJpbmcsXHJcbiAgdGVhbToge1xyXG4gICAgYWJicmV2aWF0aW9uOiBzdHJpbmcsXHJcbiAgICBjaXR5OiBzdHJpbmcsXHJcbiAgICBjb25mZXJlbmNlOiBzdHJpbmcsXHJcbiAgICBkaXZpc2lvbjogc3RyaW5nLFxyXG4gICAgZnVsbF9uYW1lOiBzdHJpbmcsXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gIH0sXHJcbiAgd2VpZ2h0X3BvdW5kczogbnVsbCxcclxufVxyXG5cclxuaW50ZXJmYWNlIElNZXRhIHtcclxuICBjdXJyZW50X3BhZ2U6IG51bWJlcixcclxuICBuZXh0X3BhZ2U6IG51bWJlcixcclxuICBwZXJfcGFnZTogbnVtYmVyLFxyXG4gIHRvdGFsX2NvdW50OiBudW1iZXIsXHJcbiAgdG90YWxfcGFnZXM6IG51bWJlcixcclxufVxyXG5cclxuaW50ZXJmYWNlIElOQkFQbGF5ZXJzIHtcclxuICBkYXRhOiBJUGxheWVyW10sXHJcbiAgbWV0OiBJTWV0YSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaENvbXBOYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gcmFuZG9tSW50ZWdlcigwLCAxMDApO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnWC1SYXBpZEFQSS1LZXknOiAnZjA4YzU1Y2U1N21zaGMzYzlmNTMyOTIyMTMwZHAxZjAwM2Jqc25lODk2MDVmYWVhZmYnLFxyXG4gICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ2ZyZWUtbmJhLnAucmFwaWRhcGkuY29tJyxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZmV0Y2goJ2h0dHBzOi8vZnJlZS1uYmEucC5yYXBpZGFwaS5jb20vcGxheWVycz9wYWdlPTAmcGVyX3BhZ2U9MTAwJywgb3B0aW9ucylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBJTkJBUGxheWVycykgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcicsIGAke3Jlc3BvbnNlLmRhdGFbaW5kZXhdLmZpcnN0X25hbWUgKyAnICcgKyByZXNwb25zZS5kYXRhW2luZGV4XS5sYXN0X25hbWV9YCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXInKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVJob21iID0gKCkgPT4ge1xyXG4gIGNvbnN0IHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcclxuICBjb25zdCByaG9tYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xyXG4gIHJob21iLmNsYXNzTGlzdC5hZGQoJ3Job21iJyk7XHJcbiAgcmhvbWIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDUxMiA1MTInKTtcclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKCdmaWxsLXJ1bGUnLCAnZXZlbm9kZCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMTMuMjg5MjY0LDcwLjYyMjU5NzMgTDM2OC45NTE5OTUsNzAuNjIyNTk3MyBDMzkyLjUxNjE0NSw3MC42MjI1OTczIDQxMS42MTg2NjIsODkuNzI1MTE0NyA0MTEuNjE4NjYyLDExMy4yODkyNjQgTDQxMS42MTg2NjIsMzY4Ljk1MTk5NSBDNDExLjYxODY2MiwzOTIuNTE2MTQ1IDM5Mi41MTYxNDUsNDExLjYxODY2MiAzNjguOTUxOTk1LDQxMS42MTg2NjIgTDExMy4yODkyNjQsNDExLjYxODY2MiBDODkuNzI1MTE0Nyw0MTEuNjE4NjYyIDcwLjYyMjU5NzMsMzkyLjUxNjE0NSA3MC42MjI1OTczLDM2OC45NTE5OTUgTDcwLjYyMjU5NzMsMTEzLjI4OTI2NCBDNzAuNjIyNTk3Myw4OS43MjUxMTQ3IDg5LjcyNTExNDcsNzAuNjIyNTk3MyAxMTMuMjg5MjY0LDcwLjYyMjU5NzMgWicsXHJcbiAgKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3JvdGF0ZSg0NSAyMzAuNiAyNjYuNTIxKScpO1xyXG4gIHJob21iLmFwcGVuZChwYXRoKTtcclxuXHJcbiAgcmV0dXJuIHJob21iO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyT25lQ2FyZCA9IChlbGVtZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdnZXQtY2FyZCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNhcmQuaWQgPSAnZ2V0LWNhcmQnO1xyXG5cclxuICBjYXJkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgY2FyZC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgY2FyZC5zdHlsZS50cmFuc2Zvcm1TdHlsZSA9ICdwcmVzZXJ2ZS0zZCc7XHJcbiAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyc7XHJcbiAgY2FyZC5zdHlsZS5yaWdodCA9ICctMThweCc7XHJcblxyXG5cclxuICBjb25zdCBmcm9udCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmcm9udCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGJhY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnYmFjaycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGJhY2suYXBwZW5kKHJlbmRlckJhY2tTaWRlKDAuMjUpKTtcclxuICBmcm9udC5hcHBlbmQoZWxlbWVudCk7XHJcbiAgY2FyZC5hcHBlbmQoYmFjaywgZnJvbnQpO1xyXG4gIHJldHVybiBjYXJkO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyRGVjayA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGVjayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdkZWNrJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgZnVsbERlY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZnVsbC1kZWNrJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1Oykge1xyXG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjYXJkLmFwcGVuZChyZW5kZXJCYWNrU2lkZSgwLjI1KSk7XHJcbiAgICBjYXJkLnN0eWxlLnJpZ2h0ID0gYCR7aSAqIDV9cHhgO1xyXG4gICAgZnVsbERlY2suYXBwZW5kKGNhcmQpO1xyXG4gICAgaSsrO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGFzdENhcmQgPSByZW5kZXJPbmVDYXJkKHJlbmRlckNhcmRXaXRoTnVtYmVyKCc4JywgeWVsbG93Q29sb3IsIDAuMjUpKTtcclxuICAvLyBsYXN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdsYXN0LWNhcmQnKTtcclxuICBcclxuICBmdWxsRGVjay5hcHBlbmQobGFzdENhcmQpO1xyXG4gIGRlY2suYXBwZW5kKGZ1bGxEZWNrKTtcclxuICByZXR1cm4gZGVjaztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHYW1lRmllbGQgPSAocXVhbnRpdHk6IG51bWJlciwgbGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dhbWUtZmllbGQnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBpZiAocXVhbnRpdHkgPT09IDIpIHtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIHBsYXllckZpZWxkKCdwbGF5ZXItMScsICdwbGF5ZXIgMScpLFxyXG4gICAgICBwbGF5ZXJGaWVsZCgncGxheWVyLTInLCAncGxheWVyIDInKSxcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChxdWFudGl0eSA9PT0gMykge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgcGxheWVyRmllbGQoJ3BsYXllci0xJywgJ3BsYXllciAxJyksXHJcbiAgICAgIHBsYXllckZpZWxkKCdwbGF5ZXItMicsICdwbGF5ZXIgMicpLFxyXG4gICAgICBwbGF5ZXJGaWVsZCgncGxheWVyLTMnLCAncGxheWVyIDMnKSxcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChxdWFudGl0eSA9PT0gNCkge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgcGxheWVyRmllbGQoJ3BsYXllci0xJywgJ3BsYXllciAxJyksXHJcbiAgICAgIHBsYXllckZpZWxkKCdwbGF5ZXItMicsICdwbGF5ZXIgMicpLFxyXG4gICAgICBwbGF5ZXJGaWVsZCgncGxheWVyLTMnLCAncGxheWVyIDMnKSxcclxuICAgICAgcGxheWVyRmllbGQoJ3BsYXllci00JywgJ3BsYXllciA0JyksXHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCBmaWVsZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmaWVsZCcpO1xyXG4gIGNvbnN0IGRlY2sgPSByZW5kZXJEZWNrKCk7XHJcbiAgY29uc3QgY3VycmVudENhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY3VycmVudC1jYXJkJyk7XHJcbiAgY29uc3QgdW5vID0gY3JlYXRlSW1hZ2UoJ3VubycsICcuLi9hc3NldHMvaW1nL2xvZ28tVU5PLnBuZycsICd1bm8nKTtcclxuXHJcbiAgZmllbGQuYXBwZW5kKGRlY2ssIGN1cnJlbnRDYXJkLCBjcmVhdGVSaG9tYigpLCB1bm8pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoZmllbGQpO1xyXG5cclxuICBjb25zdCBidG5SdWxlcyA9IGNyZWF0ZUJ1dHRvbignYnRuLXNtYWxsLXJ1bGVzJywgJ2J1dHRvbicsICc/Jyk7XHJcbiAgYnRuUnVsZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUnVsZXNXaW5kb3cpO1xyXG5cclxuICBtYWluLmFwcGVuZChjb250YWluZXIsIHJlbmRlckNoYXQoKSwgcmVuZGVyRGlhbW9uZCgpLCByZW5kZXJSZXZlcnNlTWVzc2FnZSgpLCBjcmVhdGVSdWxlc1dpbmRvdyhsYW5nKSwgYnRuUnVsZXMpO1xyXG4gIC8qINC80L7QuCDQv9C+0LTQutC70Y7Rh9C10L3QuCAqL1xyXG4gIGRlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZ2V0Q2FyZEZyb21EZWNrKGUsICdib3R0b20nKTsvL1RPRE8uLtCw0L3QuNC80LDRhtC40Y8g0LrQsNGA0YLRiyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0L/QvtC30LjRhtC40Lgg0LjQs9GA0L7QutCwOiB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcclxuICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdHRVRfQ0FSRF9CWV9VU0VSJywgZGF0YTogJycgfSkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dEaXN0cmlidXRpb25DYXJkc0ZvclBsYXllcnMgPSAocXVhbnRpdHlPZlBsYXllcnM6IG51bWJlcik6IHZvaWQgPT4ge1xyXG5cclxuICBjb25zdCBkZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlY2snKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZHMtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHlPZlBsYXllcnMgKiA3OyBpKyspIHtcclxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1kaXN0cmlidXRpb24nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNhcmQuYXBwZW5kKHJlbmRlckJhY2tTaWRlKDAuMjUpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY2FyZCk7XHJcbiAgfVxyXG5cclxuICBkZWNrLmFwcGVuZChjb250YWluZXIpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNsaWNlSW50b0NodW5rcyhhcnI6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+LCBjaHVua1NpemU6IG51bWJlcikge1xyXG4gIGNvbnN0IHJlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSBjaHVua1NpemUpIHtcclxuICAgIGNvbnN0IGNodW5rID0gQXJyYXkuZnJvbShhcnIpLnNsaWNlKGksIGkgKyBjaHVua1NpemUpO1xyXG4gICAgcmVzLnB1c2goY2h1bmspO1xyXG4gIH1cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5jb25zdCBoaWRlRGlzdHJpYnV0aW9uQ2FyZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1kaXN0cmlidXRpb24nKTtcclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUtY2FyZCcpKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKT8ucmVtb3ZlKCksIDMwMDApO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0NhcmRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzJyk7XHJcbiAgY2FyZHM/LmZvckVhY2goKGNhcmQpID0+IGNhcmQuY2xhc3NMaXN0LmFkZCgnc2hvdycpKTtcclxufTtcclxuXHJcbmNvbnN0IHNob3dQbGF5ZXJzTmFtZXMgPSAoKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgbmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW5hbWUnKTtcclxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW92ZUNhcmRUb1BsYXllciA9ICgpOiB2b2lkID0+IHtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZGlzdHJpYnV0aW9uJykgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgY29uc3QgbmV3Q2FyZHMgPSBzbGljZUludG9DaHVua3MoY2FyZHMsIDcpO1xyXG5cclxuICBuZXdDYXJkc1swXS5yZXZlcnNlKCkuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtpbmRleCAqIDcwIC0gOTB9JSwgMTY1JSkgcm90YXRlWig3MjBkZWcpYDtcclxuICAgIH0sIGluZGV4ICogMzAwKTtcclxuICB9KTtcclxuXHJcbiAgbmV3Q2FyZHNbMV0ucmV2ZXJzZSgpLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC0zNDUlLCAke2luZGV4ICogMzggLSAxMTV9JSkgcm90YXRlWig3MjBkZWcpIHJvdGF0ZSgyNzBkZWcpYDtcclxuICAgIH0sIGluZGV4ICogMzAwKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5ld0NhcmRzWzJdKSB7XHJcbiAgICBuZXdDYXJkc1syXS5yZXZlcnNlKCkuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7aW5kZXggKiA3MCAtIDkwfSUsIC0xNDIlKSByb3RhdGVaKDcyMGRlZylgO1xyXG4gICAgICB9LCBpbmRleCAqIDMwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChuZXdDYXJkc1szXSkge1xyXG4gICAgbmV3Q2FyZHNbM10ucmV2ZXJzZSgpLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSg1NTglLCAke2luZGV4ICogMzggLSAxMTV9JSkgcm90YXRlWig3MjBkZWcpIHJvdGF0ZSg5MGRlZylgO1xyXG4gICAgICB9LCBpbmRleCAqIDMwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaGlkZURpc3RyaWJ1dGlvbkNhcmRzKCk7XHJcbiAgICBzaG93Q2FyZHMoKTtcclxuICAgIHNob3dQbGF5ZXJzTmFtZXMoKTtcclxuICB9LCA1MDAwKTtcclxuXHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKSBhcyBIVE1MRGl2RWxlbWVudDsiLCIvLyBpbXBvcnQgeyBib2R5IH0gZnJvbSAnLi4vZ2xvYmFsLWNvbXBvbWVtdHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW1hZ2UsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZ2lzdHJhdGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24nO1xyXG5pbXBvcnQgeyBzZXRCdG5UZXh0IH0gZnJvbSAnLi4vbG9jYWwtc3RvcmFnZSc7XHJcbmltcG9ydCB7IG11c2ljUGxheSwgbXVzaWNTdG9wLCBvZmZTb3VuZHMsIG9uU291bmRzLCBzZXRNdXNpYywgc2V0U291bmRzIH0gZnJvbSAnLi4vc291bmRzJztcclxuaW1wb3J0IHsgbGFuZ3VhZ2UgfSBmcm9tICcuLi9sb2NhbC1zdG9yYWdlJztcclxuaW1wb3J0IHsgbGFuZ0RhdGEgfSBmcm9tICcuLi9kYXRhJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAoKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgYnRuTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbGFuZycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGlmIChidG5MYW5nLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHtcclxuICAgIGJ0bkxhbmcuY2xhc3NMaXN0LnJlbW92ZSgnb2ZmJyk7IGJ0bkxhbmcudGV4dENvbnRlbnQgPSAnZW4nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidG5MYW5nLmNsYXNzTGlzdC5hZGQoJ29mZicpOyBidG5MYW5nLnRleHRDb250ZW50ID0gJ3J1JztcclxuICB9XHJcbiAgbGFuZ3VhZ2UuY2hvc2VuID0gYnRuTGFuZy50ZXh0Q29udGVudDtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBsYW5ndWFnZS5jaG9zZW4pO1xyXG4gXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBSb3V0ZXIuY2hlY2tQYWdlKCk7XHJcbiAgfSwgMTAwMCk7XHJcbiAgXHJcbn07XHJcblxyXG5jb25zdCB0b2dnbGVNdXNpYyA9IChsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBidG5NdXNpY1ZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbXVzaWMnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBidG5NdXNpY1ZvbHVtZS5jbGFzc0xpc3QudG9nZ2xlKCdvZmYnKTtcclxuXHJcbiAgaWYgKGJ0bk11c2ljVm9sdW1lLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHtcclxuICAgIGJ0bk11c2ljVm9sdW1lLnRleHRDb250ZW50ID0gbGFuZ0RhdGFbbGFuZ11bJ2J0bi1tdXNpYy1vZmYnXTtcclxuICAgIGJ0bk11c2ljVm9sdW1lLnZhbHVlID0gJ29mZic7XHJcbiAgICB2b2lkIG11c2ljU3RvcCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidG5NdXNpY1ZvbHVtZS50ZXh0Q29udGVudCA9IGxhbmdEYXRhW2xhbmddWydidG4tbXVzaWMtb24nXTtcclxuICAgIGJ0bk11c2ljVm9sdW1lLnZhbHVlID0gJ29uJztcclxuICAgIHZvaWQgbXVzaWNQbGF5KCk7XHJcbiAgfVxyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWMnLCBidG5NdXNpY1ZvbHVtZS52YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCB0b2dnbGVTb3VuZHMgPSAobGFuZzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgYnRuU291bmRzVm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zb3VuZHMnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBidG5Tb3VuZHNWb2x1bWUuY2xhc3NMaXN0LnRvZ2dsZSgnb2ZmJyk7XHJcbiAgaWYgKGJ0blNvdW5kc1ZvbHVtZS5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKSB7XHJcbiAgICBidG5Tb3VuZHNWb2x1bWUudGV4dENvbnRlbnQgPSBsYW5nRGF0YVtsYW5nXVsnYnRuLXNvdW5kLW9mZiddO1xyXG4gICAgYnRuU291bmRzVm9sdW1lLnZhbHVlID0gJ29mZic7XHJcbiAgICBvZmZTb3VuZHMoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYnRuU291bmRzVm9sdW1lLnRleHRDb250ZW50ID0gbGFuZ0RhdGFbbGFuZ11bJ2J0bi1zb3VuZC1vbiddO1xyXG4gICAgYnRuU291bmRzVm9sdW1lLnZhbHVlID0gJ29uJztcclxuICAgIG9uU291bmRzKCk7XHJcbiAgfVxyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc291bmRzJywgYnRuU291bmRzVm9sdW1lLnZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJ0bnNIZWFkZXJDb250YWluZXIgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2J0bnMtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgYnRuTGFuZyA9IGNyZWF0ZUJ1dHRvbignYnRuLWxhbmcnLCAnYnV0dG9uJywgJ2VuJyk7XHJcbiAgYnRuTGFuZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUxhbmd1YWdlKTtcclxuICBzZXRCdG5UZXh0KGJ0bkxhbmcsICdsYW5ndWFnZScsICdlbicpO1xyXG5cclxuICBjb25zdCBidG5NdXNpY1ZvbHVtZSA9IGNyZWF0ZUJ1dHRvbignYnRuLW11c2ljJywgJ2J1dHRvbicsICcnKTtcclxuICBzZXRCdG5UZXh0KGJ0bk11c2ljVm9sdW1lLCAnbXVzaWMnLCBsYW5nRGF0YVtsYW5nXVsnYnRuLW11c2ljLW9uJ10pO1xyXG4gIHNldE11c2ljKGJ0bk11c2ljVm9sdW1lKTtcclxuXHJcbiAgYnRuTXVzaWNWb2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVNdXNpYyhsYW5nKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnRuU291bmRzVm9sdW1lID0gY3JlYXRlQnV0dG9uKCdidG4tc291bmRzJywgJ2J1dHRvbicsICcnKTtcclxuICBzZXRCdG5UZXh0KGJ0blNvdW5kc1ZvbHVtZSwgJ3NvdW5kcycsIGxhbmdEYXRhW2xhbmddWydidG4tc291bmQtb24nXSk7XHJcbiAgc2V0U291bmRzKGJ0blNvdW5kc1ZvbHVtZSk7XHJcblxyXG4gIGJ0blNvdW5kc1ZvbHVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZVNvdW5kcyhsYW5ndWFnZS5jaG9zZW4pO1xyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGJ0bkxhbmcsIGJ0bk11c2ljVm9sdW1lLCBidG5Tb3VuZHNWb2x1bWUpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uUmVzdWx0cyA9IChsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBtYWluUGFnZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbWFpbi1wYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgY29uc3QgcmVzdWx0cyA9IGNyZWF0ZUJ1dHRvbignYnRuLXJlc3VsdHMnLCAnYnV0dG9uJywgbGFuZ0RhdGFbbGFuZ11bJ2J0bi13aW5uZXJzLXBhZ2UnXSk7XHJcbiAgbWFpblBhZ2VCdXR0b24uYWZ0ZXIocmVzdWx0cyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlSGVhZGVyID0gKGxhbmc6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgcmV0dXJuQmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncmV0dXJuLWJsb2NrJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSBjcmVhdGVJbWFnZShcclxuICAgICdzZXR0aW5ncycsXHJcbiAgICAnLi4vYXNzZXRzL2ltZy9zZXR0aW5ncy5wbmcnLFxyXG4gICAgJ3NldHRpbmdzJyxcclxuICApO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kKHJldHVybkJsb2NrLCBjcmVhdGVCdG5zSGVhZGVyQ29udGFpbmVyKGxhbmcpLCBzZXR0aW5ncyk7XHJcbiAgaWYgKCFsb2NhdGlvbi5oYXNoLmluY2x1ZGVzKCdydWxlcycpKSBjcmVhdGVSZWdpc3RyYXRpb25Db250YWluZXIobGFuZyk7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRGV2ZWxvcGVkQnlDb250YWluZXIgfSBmcm9tICcuLi9kZXZlbG9wZWQtYnkvZGV2ZWxvcGVkLWJ5JztcclxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1haW5QYWdlIH0gZnJvbSAnLi4vbWFpbi1wYWdlL21haW4tcGFnZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyBsYW5nRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhZ2UgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInLCAnaGVhZGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nLCAnbWFpbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsICdmb290ZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBib2R5LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3RlciwgY3JlYXRlRGV2ZWxvcGVkQnlDb250YWluZXIobGFuZykpO1xyXG4gIGNyZWF0ZUhlYWRlcihsYW5nKTtcclxuICBjcmVhdGVNYWluUGFnZShsYW5nKTtcclxuICBjcmVhdGVGb290ZXIobGFuZyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlSW1hZ2UgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCBhbHQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ltZycpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIGVsZW1lbnQuc3JjID0gc3JjO1xyXG4gIGVsZW1lbnQuYWx0ID0gYWx0O1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChcclxuICBjbGFzc05hbWU6IHN0cmluZyxcclxuICB0eXBlOiBzdHJpbmcsXHJcbiAgYnV0dG9uVGV4dDogc3RyaW5nLFxyXG4pID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbGVtZW50LnR5cGUgPSB0eXBlO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxpbmsgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGhyZWY6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgZWxlbWVudC5ocmVmID0gaHJlZjtcclxuICBlbGVtZW50LmRhdGFzZXQudGl0bGUgPSB0aXRsZTtcclxuICBlbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhcmFncmFwaCA9IChjbGFzc05hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTcGFuID0gKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0ID0gKGNsYXNzTmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIHBsYWNlaG9sZGVyOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbGVtZW50LnR5cGUgPSB0eXBlO1xyXG4gIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRCdXR0b25CYWNrVG9NYWluUGFnZSA9IChsYW5nOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICBjb25zdCBidG4gPSBjcmVhdGVCdXR0b24oJ2J0bi1tYWluLXBhZ2UnLCAnYnV0dG9uJywgbGFuZ0RhdGFbbGFuZ11bJ2J0bi1tYWluLXBhZ2UnXSk7XHJcbiAgY29uc3QgcmV0dXJuQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV0dXJuLWJsb2NrJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgcmV0dXJuQmxvY2suYXBwZW5kKGJ0bik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGlkZURldmVsb3BlZEJ5QmxvY2sgPSAoKSA9PiB7XHJcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAnc2hvdycsXHJcbiAgKTtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldmVsb3BlZC1ieScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgJ3Nob3cnLFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heDogbnVtYmVyKSA9PiB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XHJcbn07IiwiXHJcbmV4cG9ydCBjb25zdCBzZXRCdG5UZXh0ID0gKGVsOiBIVE1MQnV0dG9uRWxlbWVudCwgbmFtZTogc3RyaW5nLCBkZWZhdWx0TmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpKSB7XHJcbiAgICBlbC50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC50ZXh0Q29udGVudCA9IGRlZmF1bHROYW1lO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgZWwudGV4dENvbnRlbnQpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlID0ge1xyXG4gIGNob3NlbjogJ2VuJyxcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSkge1xyXG4gICAgbGFuZ3VhZ2UuY2hvc2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJykgYXMgc3RyaW5nO1xyXG4gIH0gZWxzZSBsYW5ndWFnZS5jaG9zZW4gPSAnZW4nO1xyXG4gIGNvbnNvbGUubG9nKGxhbmd1YWdlLmNob3Nlbik7XHJcbn0pOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlSW1hZ2UgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVDaG9pY2VDb250YWluZXIgfSBmcm9tICcuLi9jaG9pY2Utc2V0dGluZ3MvY2hvaWNlJztcclxuaW1wb3J0IHsgcmVuZGVyQ2hhdCB9IGZyb20gJy4uL2NoYXQvY2hhdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZ2lzdHJhdGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUV4aXRXaW5kb3cgfSBmcm9tICcuLi9leGl0LXdpbmRvdy9leGl0LXdpbmRvdyc7XHJcbmltcG9ydCB7IGNyZWF0ZUVycm9yUGFnZSB9IGZyb20gJy4uL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZSc7XHJcbmltcG9ydCB7IGxhbmdEYXRhIH0gZnJvbSAnLi4vZGF0YSc7XHJcbmltcG9ydCB7IGxhbmd1YWdlIH0gZnJvbSAnLi4vbG9jYWwtc3RvcmFnZSc7XHJcblxyXG5jb25zdCBjcmVhdGVDaG9pY2VHYW1lQ29udGFpbmVyID0gKGxhbmc6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaG9pY2UtZ2FtZScpO1xyXG4gIGNvbnN0IGJ0blBsYXlXaXRoQ29tcCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICdidG4tY29tcHV0ZXInLFxyXG4gICAgJ2J1dHRvbicsXHJcbiAgICBsYW5nRGF0YVtsYW5nXVsnYnRuLXBsYXktY29tcCddLFxyXG4gICk7XHJcbiAgY29uc3QgYnRuTXVsdGlwbGF5ZXIgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAnYnRuLW11bHRpcGxheWVyJyxcclxuICAgICdidXR0b24nLFxyXG4gICAgbGFuZ0RhdGFbbGFuZ11bJ2J0bi1wbGF5LW9ubGluZSddLFxyXG4gICk7XHJcbiAgY29uc3QgYnRuUnVsZXMgPSBjcmVhdGVCdXR0b24oJ2J0bi1ydWxlcycsICdidXR0b24nLCBsYW5nRGF0YVtsYW5nXVsnYnRuLXJ1bGVzJ10pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoYnRuUGxheVdpdGhDb21wLCBidG5NdWx0aXBsYXllciwgYnRuUnVsZXMpO1xyXG5cclxuICBidG5SdWxlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFJvdXRlci5zZXRTdGF0ZSgncnVsZXMnKTtcclxuICAgIFJvdXRlci5jaGVja1BhZ2UoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3RyYXRpb24tY29udGFpbmVyJyk/LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1haW5QYWdlID0gKGxhbmc6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVJbWFnZSgnbG9nbycsICcuLi9hc3NldHMvaW1nL2xvZ28tVU5PLnBuZycsICdsb2dvJyk7XHJcbiAgaWYgKCc0MDQnICE9PSB3aW5kb3cuaGlzdG9yeS5zdGF0ZSkge1xyXG4gICAgbWFpbj8uYXBwZW5kKGxvZ28sIGNyZWF0ZUNob2ljZUdhbWVDb250YWluZXIobGFuZyksIHJlbmRlckNoYXQoKSk7XHJcbiAgfSBlbHNlIGNyZWF0ZUVycm9yUGFnZSgpO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufTtcclxuXHJcbmNvbnN0IHNob3dEZXZlbG9wZWRCeUJsb2NrID0gKCkgPT4ge1xyXG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ3Nob3cnLFxyXG4gICk7XHJcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXZlbG9wZWQtYnknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZChcclxuICAgICdzaG93JyxcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgaGlkZVNldHRpbmdzID0gKGVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XHJcbiAgKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlciAuYnRucy1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudFxyXG4gICkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcclxufTtcclxuXHJcbmNvbnN0IHNob3dTZXR0aW5ncyA9IChlbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcclxuICAoXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC5idG5zLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50XHJcbiAgKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiBoaWRlU2V0dGluZ3MoZWxlbWVudCksIDUwMDApO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ2hvaWNlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNob2ljZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9pY2UtY29udGFpbmVyJyk7XHJcbiAgY2hvaWNlQ29udGFpbmVyPy5yZW1vdmUoKTtcclxuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wYWNpdHknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICdzaG93JyxcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dDaG9pY2VDb250YWluZXIgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnc2hvdycsXHJcbiAgKTtcclxuICBjcmVhdGVDaG9pY2VDb250YWluZXIobGFuZyk7XHJcbn07XHJcblxyXG5jb25zdCBnb1RvTWFpblBhZ2UgPSAobWFpbjogSFRNTERpdkVsZW1lbnQsIGVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50LCBsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCByZXN1bHRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1yZXN1bHRzJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgaWYgKHJlc3VsdHNCdG4pIHJlc3VsdHNCdG4ucmVtb3ZlKCk7XHJcbiAgaWYgKCF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnNDA0JykpIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgZWxlbWVudC5yZW1vdmUoKTtcclxuICBjcmVhdGVNYWluUGFnZShsYW5nKTtcclxuICBSb3V0ZXIuc2V0U3RhdGUoJ2hvbWUnKTtcclxuICBSb3V0ZXIuY2hlY2tQYWdlKCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tZGV2ZWxvcGVkJykpIHNob3dEZXZlbG9wZWRCeUJsb2NrKCk7XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLnNldHRpbmdzJykpIHNob3dTZXR0aW5ncyhlbGVtZW50KTtcclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLWNvbXB1dGVyJykpIHtcclxuICAgIFJvdXRlci5zZXRTdGF0ZSgnc2luZ2xlLXBsYXllcicpO1xyXG4gICAgUm91dGVyLmNoZWNrUGFnZSgpO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuY2hvaWNlLWNvbnRhaW5lciAuYnRuLWNyb3NzJykpIHtcclxuICAgIHJlbW92ZUNob2ljZUNvbnRhaW5lcigpO1xyXG4gICAgUm91dGVyLnVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdkaWZmaWN1bHQnKTtcclxuICAgIFJvdXRlci51cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbnVtYmVyT2ZQbGF5ZXJzJyk7XHJcbiAgICBSb3V0ZXIuc2V0U3RhdGUoJ2hvbWUnKTtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmJ0bi1tYWluLXBhZ2UnKSkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWZpZWxkJykpIHtcclxuICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgJ3Nob3cnLFxyXG4gICAgICApO1xyXG4gICAgICBjcmVhdGVFeGl0V2luZG93KGxhbmd1YWdlLmNob3Nlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnb1RvTWFpblBhZ2UobWFpbiwgZWxlbWVudCwgbGFuZ3VhZ2UuY2hvc2VuKTtcclxuICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpKSBjcmVhdGVSZWdpc3RyYXRpb25Db250YWluZXIobGFuZ3VhZ2UuY2hvc2VuKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmJ0bi15ZXMnKSkge1xyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICdzaG93JyxcclxuICAgICk7XHJcbiAgICBnb1RvTWFpblBhZ2UobWFpbiwgZWxlbWVudCwgbGFuZ3VhZ2UuY2hvc2VuKTtcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdHJhdGlvbi1jb250YWluZXInKSkgY3JlYXRlUmVnaXN0cmF0aW9uQ29udGFpbmVyKGxhbmd1YWdlLmNob3Nlbik7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5idG4tbm8nKSkge1xyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICdzaG93JyxcclxuICAgICk7XHJcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZSgpO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVCdXR0b24sIGNyZWF0ZUlucHV0LCBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBsYW5nRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xyXG5pbXBvcnQgeyBsYW5ndWFnZSB9IGZyb20gJy4uL2xvY2FsLXN0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZ2lzdHJhdGlvbkNvbnRhaW5lciA9IChsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBpZiAoZG9jdW1lbnQuY29va2llLmluY2x1ZGVzKCd1c2VyPScpKSB7XHJcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndXNlci1sb2dnZWQnKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmlubmVyVGV4dCA9IGBMT0dJTiBBUyAke2RvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLmZpbHRlcih2YWx1ZSA9PiB7cmV0dXJuIHZhbHVlLmluY2x1ZGVzKCd1c2VyPScpO30pWzBdLnJlcGxhY2UoJ3VzZXI9JywgJycpfWA7XHJcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdidXR0b24nLCBsYW5nRGF0YVtsYW5nXVsnYnRuLXNpZ24tb3V0J10pO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5pbmNsdWRlcygndXNlcj0nKVxyXG4gICAgICAgICAgPyB2YWx1ZS5jb25jYXQoJzttYXgtYWdlPS0xOycpXHJcbiAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgICB9KS5qb2luKCcnKTtcclxuICAgICAgUm91dGVyLnNldFN0YXRlKCdob21lJyk7XHJcbiAgICAgIFJvdXRlci5jaGVja1BhZ2UoKTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFwcGVuZChwLCBidXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQnRuID0gY3JlYXRlQnV0dG9uKCdidG4tcmVnJywgJ2J1dHRvbicsIGxhbmdEYXRhW2xhbmddWydidG4tcmVnaXN0ciddKTtcclxuICAgIGNvbnN0IGxvZ2luQnRuID0gY3JlYXRlQnV0dG9uKCdidG4tbG9nJywgJ2J1dHRvbicsIGxhbmdEYXRhW2xhbmddWydidG4tbG9naW4nXSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHJlZ2lzdHJhdGlvbkJ0biwgbG9naW5CdG4pO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyLnByZXBlbmQoY29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWdPckxvZ1dpbmRvdyA9IChtZXRob2Q6IHN0cmluZywgbGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCBgJHttZXRob2R9LXdpbmRvd2ApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IG5hbWVCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGAke21ldGhvZH0tbmFtZS1ibG9ja2ApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IHBhc3N3b3JkQmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBgJHttZXRob2R9LXBhc3N3b3JkLWJsb2NrYCkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0IG5hbWVUaXRsZSA9IGNyZWF0ZVBhcmFncmFwaChgJHttZXRob2R9LW5hbWUtdGl0bGVgLCBsYW5nRGF0YVtsYW5nXVsncmVnLW5pY2tuYW1lJ10pO1xyXG4gIGNvbnN0IGlucHV0TmFtZSA9IGNyZWF0ZUlucHV0KGBpbnB1dC0ke21ldGhvZH0tbmFtZWAsICd0ZXh0JywgbGFuZ0RhdGFbbGFuZ11bJ3JlZy1uaWNrbmFtZS10aXRsZSddKTtcclxuICBpbnB1dE5hbWUucGF0dGVybiA9ICdbQS1aYS16XXs1LDEwfSc7XHJcbiAgaW5wdXROYW1lLm1heExlbmd0aCA9IDEwO1xyXG4gIGlucHV0TmFtZS5vbmlucHV0ID0gKCkgPT4gaW5wdXROYW1lLnZhbHVlID0gaW5wdXROYW1lLnZhbHVlLnJlcGxhY2UoL1te0LAt0Y9hLXrQkC3Qr0EtWl0vZywgJycpO1xyXG5cclxuICBjb25zdCBwYXNzd29yZFRpdGxlID0gY3JlYXRlUGFyYWdyYXBoKGAke21ldGhvZH0tcGFzc3dvcmQtdGl0bGVgLCBsYW5nRGF0YVtsYW5nXVsncmVnLXBhc3MnXSk7XHJcbiAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGNyZWF0ZUlucHV0KGBpbnB1dC0ke21ldGhvZH0tcGFzc3dvcmRgLCAncGFzc3dvcmQnLCBsYW5nRGF0YVtsYW5nXVsncmVnLXBhc3MtdGl0bGUnXSk7XHJcbiAgaW5wdXRQYXNzd29yZC5wYXR0ZXJuID0gJ1swLTldezV9JztcclxuICBpbnB1dFBhc3N3b3JkLm1heExlbmd0aCA9IDU7XHJcbiAgaW5wdXRQYXNzd29yZC5vbmlucHV0ID0gKCkgPT4gaW5wdXRQYXNzd29yZC52YWx1ZSA9IGlucHV0UGFzc3dvcmQudmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuXHJcbiAgY29uc3QgY3Jvc3MgPSBjcmVhdGVCdXR0b24oJ2J0bi1jcm9zcycsICdidXR0b24nLCAneCcpO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IGNyZWF0ZUJ1dHRvbihgYnRuLXN1Ym1pdC0ke21ldGhvZH1gLCAnc3VibWl0JywgYCR7bWV0aG9kfWApO1xyXG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IGxhbmdEYXRhW2xhbmddWydyZWctYnRuJ107XHJcbiAgLyogc2VydmVyIHJ1biBvbiBkZXBsb3kgKi9cclxuICBpZiAoIUNvbnRyb2xsZXIud2ViU29ja2V0LnVybC5pbmNsdWRlcygnbG9jYWxob3N0JykpIHtcclxuICAgIGlmIChtZXRob2QgPT09ICdyZWcnKSB7XHJcbiAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcmVnLW5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwYXNzID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1yZWctcGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBjb25zdCBtYWlsID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1tYWlsJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlck5hbWU6IG5hbWUsIHBhc3N3b3JkOiBwYXNzLCBlbWFpbDogbWFpbCB9IGFzIHsgdXNlck5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZW1haWw6IHN0cmluZyB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdSRUdJU1RSQVRJT04nLCBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSB9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2KSA9PiB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1sb2ctbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBhc3MgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWxvZy1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJOYW1lOiBuYW1lLCBwYXNzd29yZDogcGFzcyB9IGFzIHsgdXNlck5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdMT0dJTicsIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpIH0pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgLyogc2VydmVyIHJ1biBsb2NhbCAqL1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAobWV0aG9kID09PSAncmVnJykge1xyXG4gICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXYpID0+IHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXJlZy1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcGFzcyA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcmVnLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbWFpbCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJOYW1lOiBuYW1lLCBwYXNzd29yZDogcGFzcywgZW1haWw6IG1haWwgfSBhcyB7IHVzZXJOYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkwMDIvcmVnaXN0cmF0aW9uJywgZmV0Y2hPcHRpb25zKVxyXG4gICAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpIGFzIFByb21pc2U8eyBzdGF0dXM6IGJvb2xlYW4gfT4pXHJcbiAgICAgICAgICAudGhlbihvYmogPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxyXG4gICAgICAgICAgICAgIGFsZXJ0KCdyZWdpc3RlcmVkIScpO1xyXG4gICAgICAgICAgICAgIFJvdXRlci5zZXRTdGF0ZSgnaG9tZScpO1xyXG4gICAgICAgICAgICAgIFJvdXRlci5jaGVja1BhZ2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgICAgICAgICAgICBhbGVydCgndXNlciB3aXRoIHRoaXMgbmlja25hbWUgYWxyZWFkeSBleGlzdCEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkuY2F0Y2goKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXYpID0+IHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWxvZy1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcGFzcyA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtbG9nLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlck5hbWU6IG5hbWUsIHBhc3N3b3JkOiBwYXNzIH0gYXMgeyB1c2VyTmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nIH07XHJcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAyL2xvZ2luJywgZmV0Y2hPcHRpb25zKVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkgYXMgUHJvbWlzZTx7IHN0YXR1czogYm9vbGVhbiwgZGF0YTogc3RyaW5nIH0+KVxyXG4gICAgICAgICAgLnRoZW4ob2JqID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaj8uc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gb2JqLmRhdGE7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykuZmlsdGVyKHZhbHVlID0+IHtyZXR1cm4gdmFsdWUuaW5jbHVkZXMoJ3VzZXI9Jyk7fSk7XHJcbiAgICAgICAgICAgICAgQ29udHJvbGxlci53ZWJTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ1VQREFURV9OQU1FJywgZGF0YTogY29va2llWzBdLnJlcGxhY2UoJ3VzZXI9JywgJycpIH0pKTtcclxuICAgICAgICAgICAgICBSb3V0ZXIuc2V0U3RhdGUoJ2hvbWUnKTtcclxuICAgICAgICAgICAgICBSb3V0ZXIuY2hlY2tQYWdlKCk7XHJcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgICAgYWxlcnQoYFlvdSBzaWduZWQgaW4gYXMgJHtjb29raWVbMF0ucmVwbGFjZSgndXNlcj0nLCAnJyl9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1dyb25nIG5hbWUgb3IgcGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkuY2F0Y2goKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmFtZUJsb2NrLmFwcGVuZChuYW1lVGl0bGUsIGlucHV0TmFtZSk7XHJcbiAgcGFzc3dvcmRCbG9jay5hcHBlbmQocGFzc3dvcmRUaXRsZSwgaW5wdXRQYXNzd29yZCk7XHJcbiAgZm9ybS5hcHBlbmQobmFtZUJsb2NrLCBwYXNzd29yZEJsb2NrLCBjcm9zcywgc3VibWl0KTtcclxuICBjb25zdCBtYWlsQmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWFpbC1ibG9jaycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGlmIChtZXRob2QgPT09ICdyZWcnKSB7XHJcbiAgICBjb25zdCBtYWlsVGl0bGUgPSBjcmVhdGVQYXJhZ3JhcGgoJ21haWwtdGl0bGUnLCBsYW5nRGF0YVtsYW5nXVsncmVnLWVtYWlsJ10pO1xyXG4gICAgY29uc3QgbWFpbCA9IGNyZWF0ZUlucHV0KCdpbnB1dC1tYWlsJywgJ21haWwnLCBsYW5nRGF0YVtsYW5nXVsncmVnLWVtYWlsLXRpdGxlJ10pIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbWFpbEJsb2NrLmFwcGVuZChtYWlsVGl0bGUsIG1haWwpO1xyXG4gICAgZm9ybS5hcHBlbmQobWFpbEJsb2NrKTtcclxuICB9XHJcblxyXG4gIG1haW4uYXBwZW5kKGZvcm0pO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLmJ0bi1yZWcnKSkge1xyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGFjaXR5JykgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICdzaG93JyxcclxuICAgICk7XHJcbiAgICBjcmVhdGVSZWdPckxvZ1dpbmRvdygncmVnJywgbGFuZ3VhZ2UuY2hvc2VuKTtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLnJlZy13aW5kb3cgLmJ0bi1jcm9zcycpKSB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wYWNpdHknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgJ3Nob3cnLFxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWctd2luZG93Jyk/LnJlbW92ZSgpO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLWxvZycpKSB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wYWNpdHknKSBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZChcclxuICAgICAgJ3Nob3cnLFxyXG4gICAgKTtcclxuICAgIGNyZWF0ZVJlZ09yTG9nV2luZG93KCdsb2cnLCBsYW5ndWFnZS5jaG9zZW4pO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcubG9nLXdpbmRvdyAuYnRuLWNyb3NzJykpIHtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy13aW5kb3cnKT8ucmVtb3ZlKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVSZWdpc3RyYXRpb25Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3RyYXRpb24tY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVQYWdlIH0gZnJvbSAnLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBvcGVuUnVsZXNQYWdlIH0gZnJvbSAnLi9ydWxlcy1wYWdlL3J1bGVzLXBhZ2UnO1xyXG5pbXBvcnQgeyBzaG93Q2hvaWNlQ29udGFpbmVyIH0gZnJvbSAnLi9tYWluLXBhZ2UvbWFpbi1wYWdlJztcclxuaW1wb3J0IHsgbGFuZ3VhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xyXG5jbGFzcyBSb3V0ZXIge1xyXG4gIHN0YXRpYyB1cmw6IFVSTDtcclxuXHJcbiAgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBSb3V0ZXIudXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBzd2l0Y2ggKFJvdXRlci51cmwuaGFzaCkge1xyXG4gICAgICBjYXNlICcnOiB7XHJcbiAgICAgICAgUm91dGVyLnNldFN0YXRlKCdob21lJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnI2hvbWUnOiB7XHJcbiAgICAgICAgUm91dGVyLnNldFN0YXRlKCdob21lJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnI3J1bGVzJzoge1xyXG4gICAgICAgIFJvdXRlci5zZXRTdGF0ZSgncnVsZXMnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICcjc2luZ2xlLXBsYXllcic6IHtcclxuICAgICAgICBSb3V0ZXIuc2V0U3RhdGUoJ3NpbmdsZS1wbGF5ZXInKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgUm91dGVyLnNldFN0YXRlKCc0MDQnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgUm91dGVyLmNoZWNrUGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldFN0YXRlKHN0YXRlOiBzdHJpbmcpIHtcclxuICAgIFJvdXRlci51cmwuaGFzaCA9IHN0YXRlO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCAnJywgUm91dGVyLnVybC5oYXNoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaGVja1BhZ2UoKSB7XHJcbiAgICBzd2l0Y2ggKHdpbmRvdy5oaXN0b3J5LnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgJ2hvbWUnOiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjcmVhdGVQYWdlKGxhbmd1YWdlLmNob3Nlbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAncnVsZXMnOiB7XHJcbiAgICAgICAgY3JlYXRlUGFnZShsYW5ndWFnZS5jaG9zZW4pO1xyXG4gICAgICAgIG9wZW5SdWxlc1BhZ2UobGFuZ3VhZ2UuY2hvc2VuKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdzaW5nbGUtcGxheWVyJzoge1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UobGFuZ3VhZ2UuY2hvc2VuKTtcclxuICAgICAgICBzaG93Q2hvaWNlQ29udGFpbmVyKGxhbmd1YWdlLmNob3Nlbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbXVsdGlwbGF5ZXInOiB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnNDA0Jzoge1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UobGFuZ3VhZ2UuY2hvc2VuKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgUm91dGVyLnNldFN0YXRlKCc0MDQnKTtcclxuICAgICAgICBSb3V0ZXIuY2hlY2tQYWdlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcclxuIiwiaW1wb3J0IHsgYmx1ZUNvbG9yLCBncmVlbkNvbG9yLCByZWRDb2xvciwgeWVsbG93Q29sb3IsIHJlbmRlckNhcmRXaXRoTnVtYmVyLCByZW5kZXJNdWx0aUNhcmQsIHJlbmRlckJsb2NrZWRDYXJkLCByZW5kZXJQbHVzRm91ckNhcmQsIHJlbmRlclBsdXNUd29DYXJkLCByZW5kZXJSZXZlcnNlQ2FyZCB9IGZyb20gJy4uL2NhcmRzL2NhcmRzJztcclxuaW1wb3J0IHsgbGFuZ0RhdGEgfSBmcm9tICcuLi9kYXRhJztcclxuaW1wb3J0IHsgYWRkQnV0dG9uQmFja1RvTWFpblBhZ2UsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlRWxlbWVudCwgY3JlYXRlUGFyYWdyYXBoIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuXHJcbmNvbnN0IGZsaXBDYXJkID0gKGU6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZT8ucGFyZW50Tm9kZSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyZEZyb250ID0gKGN1cnJDYXJkOiBFbGVtZW50LCBsYW5nOiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgY2FyZEZyb250ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtYmxvY2stZnJvbnQnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjYXJkSW1nV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkLWltZy13cmFwcGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY2FyZEltZ1dyYXBwZXIuYXBwZW5kKGN1cnJDYXJkKTtcclxuXHJcbiAgY29uc3QgYnRuUmVhZE1vcmUgPSBjcmVhdGVCdXR0b24oJ2J0bi1yZWFkJywgJ2J1dHRvbicsIGxhbmdEYXRhW2xhbmddWydidG4tcmVhZCddKTtcclxuICBjYXJkRnJvbnQuYXBwZW5kKGNhcmRJbWdXcmFwcGVyLCBidG5SZWFkTW9yZSk7IFxyXG5cclxuICBidG5SZWFkTW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBmbGlwQ2FyZChlKTtcclxuICB9ICk7XHJcblxyXG4gIHJldHVybiBjYXJkRnJvbnQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDYXJkQmFjayA9IChjYXJkVGl0bGU6IHN0cmluZywgY2FyZFZhbHVlOiBzdHJpbmcsIGNhcmRUZXh0OiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkLWJsb2NrLWJhY2snKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBcclxuICBjb25zdCBidG5GbGlwID0gY3JlYXRlQnV0dG9uKCdidG4tZmxpcCcsICdidXR0b24nLCBsYW5nRGF0YVtsYW5nXVsnYnRuLWZsaXAnXSk7XHJcbiAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtZGVzY3JpcHRpb24nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZVBhcmFncmFwaCgnY2FyZC10aXRsZScsIGNhcmRUaXRsZSk7XHJcbiAgY29uc3QgdmFsdWUgPSBjcmVhdGVQYXJhZ3JhcGgoJ2NhcmQtdmFsdWUnLCBjYXJkVmFsdWUpO1xyXG4gIGNvbnN0IHRleHQgPSBjcmVhdGVQYXJhZ3JhcGgoJ2NhcmQtdGV4dCcsIGNhcmRUZXh0KTtcclxuXHJcbiAgY2FyZERlc2NyaXB0aW9uLmFwcGVuZCh0aXRsZSwgdmFsdWUsIHRleHQpO1xyXG5cclxuICBidG5GbGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGZsaXBDYXJkKGUpO1xyXG4gIH0gKTtcclxuXHJcbiAgY2FyZEJhY2suYXBwZW5kKGNhcmREZXNjcmlwdGlvbiwgYnRuRmxpcCk7XHJcbiAgcmV0dXJuIGNhcmRCYWNrO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhcmRCbG9jayAgPSAoY3VyckNhcmQ6IEVsZW1lbnQsIGNhcmRUaXRsZTogc3RyaW5nLCBjYXJkVmFsdWU6IHN0cmluZywgY2FyZFRleHQ6IHN0cmluZywgbGFuZzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZEZyb250KGN1cnJDYXJkLCBsYW5nKSwgY3JlYXRlQ2FyZEJhY2soY2FyZFRpdGxlLCBjYXJkVmFsdWUsIGNhcmRUZXh0LCBsYW5nKSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDYXJkc0Rlc2NyaXB0aW9uID0gKGxhbmc6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjYXJkc0Rlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmRzLWRlc2NyaXB0aW9uJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc29sZS5sb2coJ2xhbmcnLCBsYW5nKTtcclxuICBjb25zdCBudW1iZXJlZENhcmQgPSBjcmVhdGVDYXJkQmxvY2socmVuZGVyQ2FyZFdpdGhOdW1iZXIoJzgnLCBncmVlbkNvbG9yLCAwLjUpLCBsYW5nRGF0YVtsYW5nXVsnbnVtYmVyZWQtY2FyZC10aXRsZSddLCBsYW5nRGF0YVtsYW5nXVsnbnVtYmVyZWQtY2FyZC1wb2ludHMnXSwgbGFuZ0RhdGFbbGFuZ11bJ251bWJlcmVkLWNhcmQtZGVzY3InXSwgbGFuZyk7XHJcbiAgY29uc3QgcGx1c1R3b0NhcmQgPSBjcmVhdGVDYXJkQmxvY2socmVuZGVyUGx1c1R3b0NhcmQoYmx1ZUNvbG9yLCAwLjUpLCBsYW5nRGF0YVtsYW5nXVsncGx1c3R3by1jYXJkLXRpdGxlJ10sIGxhbmdEYXRhW2xhbmddWydhY3Rpb24tY2FyZC1wb2ludHMnXSwgbGFuZ0RhdGFbbGFuZ11bJ3BsdXN0d28tY2FyZC1kZXNjciddLCBsYW5nKTtcclxuICBjb25zdCByZXZlcnNlQ2FyZCA9IGNyZWF0ZUNhcmRCbG9jayhyZW5kZXJSZXZlcnNlQ2FyZChyZWRDb2xvciwgMC41KSwgbGFuZ0RhdGFbbGFuZ11bJ3JldmVyc2UtY2FyZC10aXRsZSddLCBsYW5nRGF0YVtsYW5nXVsnYWN0aW9uLWNhcmQtcG9pbnRzJ10sIGxhbmdEYXRhW2xhbmddWydyZXZlcnNlLWNhcmQtZGVzY3InXSwgbGFuZyk7XHJcbiAgY29uc3QgYmxvY2tlZENhcmQgPSBjcmVhdGVDYXJkQmxvY2socmVuZGVyQmxvY2tlZENhcmQoeWVsbG93Q29sb3IsIDAuNSksIGxhbmdEYXRhW2xhbmddWydibG9ja2VkLWNhcmQtdGl0bGUnXSwgbGFuZ0RhdGFbbGFuZ11bJ2FjdGlvbi1jYXJkLXBvaW50cyddLCBsYW5nRGF0YVtsYW5nXVsnYmxvY2tlZC1jYXJkLWRlc2NyJ10sIGxhbmcpO1xyXG4gIGNvbnN0IHBsdXNGb3VyQ2FyZCA9IGNyZWF0ZUNhcmRCbG9jayhyZW5kZXJQbHVzRm91ckNhcmQoMC41KSwgbGFuZ0RhdGFbbGFuZ11bJ3BsdXNmb3VyLWNhcmQtdGl0bGUnXSwgbGFuZ0RhdGFbbGFuZ11bJ2JsYWNrLWNhcmQtcG9pbnRzJ10sIGxhbmdEYXRhW2xhbmddWydwbHVzZm91ci1jYXJkLWRlc2NyJ10sIGxhbmcpO1xyXG4gIGNvbnN0IG11bHRpQ2FyZCA9IGNyZWF0ZUNhcmRCbG9jayhyZW5kZXJNdWx0aUNhcmQoMC41KSwgbGFuZ0RhdGFbbGFuZ11bJ211bHRpLWNhcmQtdGl0bGUnXSwgbGFuZ0RhdGFbbGFuZ11bJ2JsYWNrLWNhcmQtcG9pbnRzJ10sIGxhbmdEYXRhW2xhbmddWydtdWx0aS1jYXJkLWRlc2NyJ10sIGxhbmcpO1xyXG4gIGNhcmRzRGVzY3JpcHRpb24uYXBwZW5kKG51bWJlcmVkQ2FyZCwgYmxvY2tlZENhcmQsIHJldmVyc2VDYXJkLCBwbHVzVHdvQ2FyZCwgbXVsdGlDYXJkLCBwbHVzRm91ckNhcmQpO1xyXG5cclxuICByZXR1cm4gY2FyZHNEZXNjcmlwdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVJ1bGVzUGFyYWdyYXBoID0gKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBydWxlc0Jsb2NrID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3J1bGVzLWRlc2NyaXB0aW9uLWJsb2NrJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgcnVsZXNUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3J1bGVzLWRlc2NyaXB0aW9uLXRpdGxlJyk7XHJcbiAgcnVsZXNUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGNvbnN0IHJ1bGVzVGV4dCA9IGNyZWF0ZVBhcmFncmFwaCgncnVsZXMtZGVzY3JpcHRpb24tdGV4dCcsIHRleHQpO1xyXG4gIHJ1bGVzQmxvY2suYXBwZW5kKHJ1bGVzVGl0bGUsIHJ1bGVzVGV4dCk7XHJcbiAgcmV0dXJuIHJ1bGVzQmxvY2s7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVSdWxlc0Rlc2NyaXB0aW9uID0gKGxhbmc6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBydWxlc0Rlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3J1bGVzLWRlc2NyaXB0aW9uJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgcnVsZXNEZXNjcmlwdGlvbi5hcHBlbmQoY3JlYXRlUnVsZXNQYXJhZ3JhcGgobGFuZ0RhdGFbbGFuZ11bJ3J1bGVzLWdvYWwtdGl0bGUnXSwgbGFuZ0RhdGFbbGFuZ11bJ3J1bGVzLWdvYWwtdGV4dCddKSk7XHJcbiAgcnVsZXNEZXNjcmlwdGlvbi5hcHBlbmQoY3JlYXRlUnVsZXNQYXJhZ3JhcGgobGFuZ0RhdGFbbGFuZ11bJ3J1bGVzLXBsYXktdGl0bGUnXSwgbGFuZ0RhdGFbbGFuZ11bJ3J1bGVzLXBsYXktdGV4dCddKSk7XHJcbiAgcnVsZXNEZXNjcmlwdGlvbi5hcHBlbmQoY3JlYXRlUnVsZXNQYXJhZ3JhcGgobGFuZ0RhdGFbbGFuZ11bJ3J1bGVzLXBvaW50cy10aXRsZSddLCBsYW5nRGF0YVtsYW5nXVsncnVsZXMtcG9pbnRzLXRleHQnXSkpO1xyXG4gIHJldHVybiBydWxlc0Rlc2NyaXB0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUnVsZXNCbG9jayA9IChsYW5nOiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgcnVsZXNCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdydWxlcy13cmFwcGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgcnVsZXNCbG9jay5hcHBlbmQoY3JlYXRlUnVsZXNEZXNjcmlwdGlvbihsYW5nKSwgY3JlYXRlQ2FyZHNEZXNjcmlwdGlvbihsYW5nKSk7XHJcbiAgcmV0dXJuIHJ1bGVzQmxvY2s7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUnVsZXNQYWdlID0gKGxhbmc6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIG1haW4uYXBwZW5kKGNyZWF0ZVJ1bGVzQmxvY2sobGFuZykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5SdWxlc1BhZ2UgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBhZGRCdXR0b25CYWNrVG9NYWluUGFnZShsYW5nKTtcclxuICBjcmVhdGVSdWxlc1BhZ2UobGFuZyk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVJVTEVTIFdJTkRPV1xyXG5leHBvcnQgY29uc3QgY3JlYXRlUnVsZXNXaW5kb3cgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgcnVsZXNXaW5kb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncnVsZXMtd2luZG93JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidG4tY3Jvc3MnLCAnYnV0dG9uJywgJ3gnKTsgXHJcbiAgcnVsZXNXaW5kb3cuYXBwZW5kKGNyZWF0ZUNhcmRzRGVzY3JpcHRpb24obGFuZyksIGJ1dHRvbik7XHJcbiAgcnVsZXNXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcnVsZXNXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJ1bGVzV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICB9ICk7XHJcbiAgcmV0dXJuIHJ1bGVzV2luZG93O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5SdWxlc1dpbmRvdyA9ICgpID0+IHtcclxuICBjb25zdCBydWxlc1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ydWxlcy13aW5kb3cnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBydWxlc1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIHJ1bGVzV2luZG93LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxufTtcclxuXHJcbiIsIlxyXG5jb25zdCBtdXNpYyA9IG5ldyBBdWRpbygnLi4vLi4vYXNzZXRzL211c2ljL21lbG9keS5tcDMnKTtcclxuY29uc3QgY2xpY2sgPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9tdXNpYy9jbGljay5tcDMnKTtcclxuY29uc3QgZ2V0Q2FyZCA9IG5ldyBBdWRpbygnLi4vLi4vYXNzZXRzL211c2ljL29uZV9jYXJkLm1wMycpO1xyXG5leHBvcnQgY29uc3QgY2hhdFNvdW5kID0gbmV3IEF1ZGlvKCcuLi8uLi9hc3NldHMvbXVzaWMvY2hhdC5tcDMnKTtcclxuZXhwb3J0IGNvbnN0IGdldENvbG9yU291bmQgPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9tdXNpYy9jb2xvci5tcDMnKTtcclxuZXhwb3J0IGNvbnN0IGdldFJldmVyc2VTb3VuZCA9IG5ldyBBdWRpbygnLi4vLi4vYXNzZXRzL211c2ljL3JldmVycy5tcDMnKTtcclxuZXhwb3J0IGNvbnN0IGdldENob29zZVNvdW5kID0gbmV3IEF1ZGlvKCcuLi8uLi9hc3NldHMvbXVzaWMvY2hvb3NlLm1wMycpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtdXNpY1BsYXkgPSAoKSA9PiB7XHJcbiAgLy8gbXVzaWMuYXV0b3BsYXkgPSB0cnVlO1xyXG4gIGlmIChtdXNpYy5yZWFkeVN0YXRlKSB7XHJcbiAgICB2b2lkIG11c2ljLnBsYXkoKTtcclxuICB9XHJcbiAgbXVzaWMubG9vcCA9IHRydWU7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBtdXNpY1N0b3AgPSAoKSA9PiB7XHJcbiAgdm9pZCBtdXNpYy5wYXVzZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE11c2ljID0gKGVsOkhUTUxCdXR0b25FbGVtZW50ICkgPT4ge1xyXG4gIGlmIChlbC52YWx1ZSA9PT0gJ29uJykge1xyXG4gICAgbXVzaWNQbGF5KCk7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvZmYnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbXVzaWNTdG9wKCk7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdvZmYnKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWNrU291bmRQbGF5ID0gKCkgPT4ge1xyXG4gIGlmIChjbGljay5yZWFkeVN0YXRlKSB2b2lkIGNsaWNrLnBsYXkoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJkU291bmRQbGF5ID0gKCkgPT4ge1xyXG4gIGlmIChnZXRDYXJkLnJlYWR5U3RhdGUpIHZvaWQgZ2V0Q2FyZC5wbGF5KCk7XHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLXNvdW5kcyBvbi9vZmZcclxuZXhwb3J0IGNvbnN0IG9uU291bmRzID0gKCkgPT4ge1xyXG4gIGNsaWNrLnZvbHVtZSA9IDE7XHJcbiAgZ2V0Q2FyZC52b2x1bWUgPSAxO1xyXG4gIGNoYXRTb3VuZC52b2x1bWUgPSAxO1xyXG4gIGdldENvbG9yU291bmQudm9sdW1lID0gMTtcclxuICBnZXRSZXZlcnNlU291bmQudm9sdW1lID0gMTtcclxuICBnZXRDaG9vc2VTb3VuZC52b2x1bWUgPSAxO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgb2ZmU291bmRzID0gKCkgPT4ge1xyXG4gIGNsaWNrLnZvbHVtZSA9IDA7XHJcbiAgZ2V0Q2FyZC52b2x1bWUgPSAwO1xyXG4gIGNoYXRTb3VuZC52b2x1bWUgPSAwO1xyXG4gIGdldENvbG9yU291bmQudm9sdW1lID0gMDtcclxuICBnZXRSZXZlcnNlU291bmQudm9sdW1lID0gMDtcclxuICBnZXRDaG9vc2VTb3VuZC52b2x1bWUgPSAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFNvdW5kcyA9IChlbDpIVE1MQnV0dG9uRWxlbWVudCApID0+IHtcclxuICBpZiAoZWwudmFsdWUgPT09ICdvbicpIHtcclxuICAgIG9uU291bmRzKCk7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvZmYnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgb2ZmU291bmRzKCk7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdvZmYnKTtcclxuICB9XHJcbn07IiwiaW1wb3J0IHsgbGFuZ0RhdGEgfSBmcm9tICcuLi9kYXRhJztcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9uUmVzdWx0cyB9IGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVTcGFuLCBhZGRCdXR0b25CYWNrVG9NYWluUGFnZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgbGFuZ3VhZ2UgfSBmcm9tICcuLi9sb2NhbC1zdG9yYWdlJztcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3VsdHNMaXN0VGl0bGUgPSAobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ3Jlc3VsdHMtaXRlbScpIGFzIEhUTUxMSUVsZW1lbnQ7XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN1bHRzLXRpdGxlJyk7XHJcbiAgY29uc3QgbmFtZSA9IGNyZWF0ZVNwYW4oJ3Jlc3VsdC1wbGF5ZXItbmFtZScsIGxhbmdEYXRhW2xhbmddWydyZXMtbmFtZSddKTtcclxuICBjb25zdCBwb2ludHMgPSBjcmVhdGVTcGFuKCdwbGF5ZXItcG9pbnRzJywgbGFuZ0RhdGFbbGFuZ11bJ3Jlcy1wb2ludHMnXSk7XHJcbiAgaXRlbS5hcHBlbmQobmFtZSwgcG9pbnRzKTtcclxuICBcclxuICByZXR1cm4gaXRlbTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVBsYXllclJlc3VsdCA9IChuaWNrbmFtZTogc3RyaW5nLCBwb2ludHM6IG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IHBsYXllciA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ3Jlc3VsdHMtaXRlbScpIGFzIEhUTUxMSUVsZW1lbnQ7XHJcbiAgY29uc3QgbmFtZSA9IGNyZWF0ZVNwYW4oJ3Jlc3VsdC1wbGF5ZXItbmFtZScsIG5pY2tuYW1lKTtcclxuICBjb25zdCBwb2ludHNRdWFudGl0eSA9IGNyZWF0ZVNwYW4oJ3BsYXllci1wb2ludHMnLCBgJHtwb2ludHN9YCk7XHJcbiAgcGxheWVyLmFwcGVuZChuYW1lLCBwb2ludHNRdWFudGl0eSk7XHJcbiAgcmV0dXJuIHBsYXllcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3VsdHNUYWJsZSA9IChsYW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncmVzdWx0cy1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBsaXN0ID0gY3JlYXRlRWxlbWVudCgndWwnLCAncmVzdWx0cy1saXN0JykgYXMgSFRNTFVMaXN0RWxlbWVudDtcclxuICBsaXN0LmFwcGVuZChjcmVhdGVSZXN1bHRzTGlzdFRpdGxlKGxhbmcpKTtcclxuICBsaXN0LmFwcGVuZChjcmVhdGVQbGF5ZXJSZXN1bHQoJ0JvcmlzJywgMTApLCBjcmVhdGVQbGF5ZXJSZXN1bHQoJ0V2Z2VueScsIDIwKSwgY3JlYXRlUGxheWVyUmVzdWx0KCdKb3JhJywgMjMpLCBjcmVhdGVQbGF5ZXJSZXN1bHQoJ0FsZXgnLCAxMDAwMCksIGNyZWF0ZVBsYXllclJlc3VsdCgnVml0eWEnLCAyKSk7XHJcbiAgY29uc3QgY3Jvc3MgPSBjcmVhdGVCdXR0b24oJ2J0bi1jcm9zcycsICdidXJyb24nLCAneCcpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGxpc3QsIGNyb3NzKTtcclxuICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYnRuLXJlc3VsdHMnKSkge1xyXG4gICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1haW4tcGFnZScpKSBhZGRCdXR0b25CYWNrVG9NYWluUGFnZShsYW5ndWFnZS5jaG9zZW4pO1xyXG4gICAgY3JlYXRlUmVzdWx0c1RhYmxlKGxhbmd1YWdlLmNob3Nlbik7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50LmNsb3Nlc3QoJy5yZXN1bHRzLWNvbnRhaW5lciAuYnRuLWNyb3NzJykpIHtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BhY2l0eScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAnc2hvdycsXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtY29udGFpbmVyJyk/LnJlbW92ZSgpO1xyXG4gICAgY3JlYXRlQnV0dG9uUmVzdWx0cyhsYW5ndWFnZS5jaG9zZW4pO1xyXG4gIH1cclxufSk7XHJcbiIsIi8qIEFjY2VwdHMgaW5wdXQgYW5kIGNvbnZlcnRzIGl0IHRvIGNvbW1hbmRzIGZvciB0aGUgbW9kZWwgb3Igdmlldy4gKi9cclxuXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgQ2FyZEluZm8sIFdlYlNvY2tldE1lc3NhZ2UgfSBmcm9tICcuL3R5cGVzJztcclxuLy8gaW1wb3J0IENhcmREZWNrLCB7IGNhcmREZWNrIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NyYy9nYW1lL9GBYXJkX2RlY2snO1xyXG5pbXBvcnQgeyBibHVlQ29sb3IsIGdyZWVuQ29sb3IsIHJlZENvbG9yLCByZW5kZXJCbG9ja2VkQ2FyZCwgcmVuZGVyQ2FyZFdpdGhOdW1iZXIsIHJlbmRlck11bHRpQ2FyZCwgcmVuZGVyUGx1c0ZvdXJDYXJkLCByZW5kZXJQbHVzVHdvQ2FyZCwgcmVuZGVyUmV2ZXJzZUNhcmQsIHllbGxvd0NvbG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmRzL2NhcmRzJztcclxuaW1wb3J0IHsgY2xpY2tTb3VuZFBsYXksIGdldENhcmRTb3VuZFBsYXksIGdldENob29zZVNvdW5kIH0gZnJvbSAnLi9jb21wb25lbnRzL3NvdW5kcyc7XHJcbmltcG9ydCB7IG1vdmVDdXJyQ2FyZCB9IGZyb20gJy4vY29tcG9uZW50cy9nYW1lLWZpZWxkL2dhbWUtYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgY2hvb3NlQ29sb3JBbmltYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvYW5pbWF0ZWQtaXRlbXMvYW5pbWF0ZWQtaXRlbXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIHdlYlNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBteU5hbWU6IHN0cmluZztcclxuXHJcbiAgLyogQ29udHJvbGxlciBsYXVuY2ggKi9cclxuICBzdGF0aWMgc3RhcnQocG9ydDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCB1cmwgPSAnMTk0LjE1OC4yMDUuNzgnOyAvLyAnbG9jYWxob3N0J1xyXG4gICAgdGhpcy53ZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7dXJsfToke3BvcnR9YCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmNsdWRlcygndXNlcj0nKSkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLmZpbHRlcih2YWx1ZSA9PiB7cmV0dXJuIHZhbHVlLmluY2x1ZGVzKCd1c2VyPScpO30pO1xyXG4gICAgICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdVUERBVEVfTkFNRScsIGRhdGE6IGNvb2tpZVswXS5yZXBsYWNlKCd1c2VyPScsICcnKSB9KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQ29udHJvbGxlci53ZWJTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ1dIQVRTX01ZX05BTUUnLCBkYXRhOiAnJyB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gICAgLy9UT0RPOiBSZW1vdmUgdGhpcyBmZWF0dXJlIGFmdGVyIHN3aXRjaGluZyB0byBub3JtYWwgbWFwc1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2ltcGxlQ2FyZChpZDogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzaW1wbGUtY2FyZCcpO1xyXG5cclxuICAgICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgJ2JsdWUnOiB7Y29sb3IgPSBibHVlQ29sb3I7fSBicmVhaztcclxuICAgICAgICBjYXNlICdyZWQnOiB7Y29sb3IgPSByZWRDb2xvcjt9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2dyZWVuJzoge2NvbG9yID0gZ3JlZW5Db2xvcjt9IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IHtjb2xvciA9IHllbGxvd0NvbG9yO30gYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpZCA8IDEwMCkge1xyXG4gICAgICAgIGNvbnN0IGlkTnVtICA9IGlkICUgMjU7XHJcbiAgICAgICAgaWYgKGlkTnVtIDwgMTkpIHtcclxuICAgICAgICAgIGRpdi5hcHBlbmQocmVuZGVyQ2FyZFdpdGhOdW1iZXIodmFsdWUudG9TdHJpbmcoKSwgY29sb3IsIDAuMjUpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlkTnVtIDwgMjEpIHtcclxuICAgICAgICAgIGRpdi5hcHBlbmQocmVuZGVyUGx1c1R3b0NhcmQoY29sb3IsIDAuMjUpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlkTnVtIDwgMjMpIHtcclxuICAgICAgICAgIGRpdi5hcHBlbmQocmVuZGVyUmV2ZXJzZUNhcmQoY29sb3IsIDAuMjUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGl2LmFwcGVuZChyZW5kZXJCbG9ja2VkQ2FyZChjb2xvciwgMC4yNSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChpZCA+IDEwNCkge1xyXG4gICAgICAgIGRpdi5hcHBlbmQocmVuZGVyUGx1c0ZvdXJDYXJkKDAuMjUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXYuYXBwZW5kKHJlbmRlck11bHRpQ2FyZCgwLjI1KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdi5pZCA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcbiAgICAgICAgY2xpY2tTb3VuZFBsYXkoKTtcclxuICAgICAgICBjb25zdCBjbGlja2VkRWwgPSAoZXZ0LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkuY2xvc2VzdCgnLmNhcmRDZW50ZXInKSBhcyBFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZEVsKSB7XHJcbiAgICAgICAgICBjbGlja2VkRWwuaWQgPSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjbGlja2VkRWwuaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlcjogc3RyaW5nID0gKChldnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KS5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWU7XHJcbiAgICAgICAgY29uc3QgZGF0YUZvclNlbnQgPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJOYW1lOiB1c2VyLCBjYXJkSWQ6IChldnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KS5pZCB9KTtcclxuICAgICAgICBDb250cm9sbGVyLndlYlNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uOiAnTU9WRV9CWV9VU0VSJywgZGF0YTogZGF0YUZvclNlbnQgfSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9UT0RPOiBSZW1vdmUgdGhpcyBmZWF0dXJlIGFmdGVyIHN3aXRjaGluZyB0byBhIHByZXR0eSB3aW5kb3cgd2l0aCBwb3B1cCBtZXNzYWdlc1xyXG4gICAgZnVuY3Rpb24gc2hvd0NvbG9yU2VsZWN0V2luZG93KCk6dm9pZCB7XHJcbiAgICAgIGZ1bmN0aW9uIHNlbnRDaG9zZW5Db2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgQ29udHJvbGxlci53ZWJTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ1VTRVJTX1NFTEVDVEVEX0NPTE9SJywgZGF0YTogY29sb3IgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY2hvc2VuQ29sb3IgPSAnJztcclxuICAgICAgY29uc3QgZGlhbW9uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFtb25kLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICBkaWFtb25kLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1jb2xvcicpO1xyXG4gICAgICBkaWFtb25kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgY2hvc2VuQ29sb3IgPSBjaG9vc2VDb2xvckFuaW1hdGlvbihlKTtcclxuICAgICAgICB2b2lkIGdldENob29zZVNvdW5kLnBsYXkoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhbm4gLSBjaG9zZW4gY29sb3InLCBjaG9zZW5Db2xvcik7IC8vLS0tLS0tLS0tLS0tLS0t0J/Qo9Ch0KLQnj8/P1xyXG4gICAgICBzZW50Q2hvc2VuQ29sb3IoY2hvc2VuQ29sb3IpO1xyXG5cclxuXHJcbiAgICAgIC8vIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAvLyBkaXYuaWQgPSAncG9wdXBfY2hvb3NlX2NvbG9yJztcclxuICAgICAgLy8gZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIC8vIGRpdi5zdHlsZS5tYXJnaW4gPSAnMCBhdXRvJztcclxuICAgICAgLy8gZGl2LnN0eWxlLndpZHRoID0gJzQwMHB4JztcclxuICAgICAgLy8gZGl2LnN0eWxlLnRvcCA9ICcyNSUnO1xyXG4gICAgICAvLyBkaXYuc3R5bGUubGVmdCA9ICcyNSUnO1xyXG4gICAgICAvLyBkaXYuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcclxuICAgICAgLy8gZGl2LnN0eWxlLnpJbmRleCA9ICc5OTknO1xyXG4gICAgICAvLyBkaXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAvLyBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIC8vIGJ1dHRvbi5pbm5lclRleHQgPSAnZ3JlZW4nO1xyXG4gICAgICAvLyBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcclxuICAgICAgLy8gYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIC8vICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cF9jaG9vc2VfY29sb3InKSBhcyBIVE1MRGl2RWxlbWVudCkucmVtb3ZlKCk7XHJcbiAgICAgIC8vICAgc2VudENob3NlbkNvbG9yKCdncmVlbicpO1xyXG4gICAgICAvLyB9O1xyXG4gICAgICAvLyBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgIC8vIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAvLyBidXR0b24uaW5uZXJUZXh0ID0gJ2JsdWUnO1xyXG4gICAgICAvLyBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAvLyBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgLy8gICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwX2Nob29zZV9jb2xvcicpIGFzIEhUTUxEaXZFbGVtZW50KS5yZW1vdmUoKTtcclxuICAgICAgLy8gICBzZW50Q2hvc2VuQ29sb3IoJ2JsdWUnKTtcclxuICAgICAgLy8gfTtcclxuICAgICAgLy8gZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAvLyBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgLy8gYnV0dG9uLmlubmVyVGV4dCA9ICdyZWQnO1xyXG4gICAgICAvLyBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgIC8vIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAvLyAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXBfY2hvb3NlX2NvbG9yJykgYXMgSFRNTERpdkVsZW1lbnQpLnJlbW92ZSgpO1xyXG4gICAgICAvLyAgIHNlbnRDaG9zZW5Db2xvcigncmVkJyk7XHJcbiAgICAgIC8vIH07XHJcbiAgICAgIC8vIGRpdi5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgLy8gYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIC8vIGJ1dHRvbi5pbm5lclRleHQgPSAneWVsbG93JztcclxuICAgICAgLy8gYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xyXG4gICAgICAvLyBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgLy8gICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwX2Nob29zZV9jb2xvcicpIGFzIEhUTUxEaXZFbGVtZW50KS5yZW1vdmUoKTtcclxuICAgICAgLy8gICBzZW50Q2hvc2VuQ29sb3IoJ3llbGxvdycpO1xyXG4gICAgICAvLyB9O1xyXG4gICAgICAvLyBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kKGRpdik7XHJcbiAgICB9XHJcbiAgICBDb250cm9sbGVyLndlYlNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2U6IE1lc3NhZ2VFdmVudDxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1zZzogV2ViU29ja2V0TWVzc2FnZSA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKSBhcyBXZWJTb2NrZXRNZXNzYWdlO1xyXG4gICAgICBzd2l0Y2ggKG1zZy5hY3Rpb24pIHtcclxuICAgICAgICAvKiBHZXR0aW5nIHRoZSB1c2VybmFtZSBhc3NpZ25lZCBvbiB0aGUgc2VydmVyICovXHJcbiAgICAgICAgY2FzZSAnWU9VUl9OQU1FJzoge1xyXG4gICAgICAgICAgdGhpcy5teU5hbWUgPSBtc2cuZGF0YTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiDQn9C+0LvRg9GH0LXQvdC40LUg0LrQsNGA0YLRiyDRgSDRgdC10YDQstC10YDQsCAqL1xyXG4gICAgICAgIGNhc2UgJ0dFVF9DQVJEJzoge1xyXG4gICAgICAgICAgdm9pZCBnZXRDYXJkU291bmRQbGF5KCk7XHJcbiAgICAgICAgICBjb25zdCBkYXRhOiB7IHBsYXllcjogc3RyaW5nLCBjYXJkOiBDYXJkSW5mbyB9ID0gSlNPTi5wYXJzZShtc2cuZGF0YSkgYXMgeyBwbGF5ZXI6IHN0cmluZywgY2FyZDogQ2FyZEluZm8gfTtcclxuICAgICAgICAgIGNvbnN0IGNhcmRzT25IYW5kID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2RhdGEucGxheWVyfWApIGFzIEhUTUxFbGVtZW50KS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgY2FyZHNPbkhhbmQuYXBwZW5kKGNyZWF0ZVNpbXBsZUNhcmQoZGF0YS5jYXJkLmlkLCBkYXRhLmNhcmQuY29sb3IsIGRhdGEuY2FyZC52YWx1ZSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlY2VpdmluZyBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyICovXHJcbiAgICAgICAgY2FzZSAnTUVTU0FHRSc6IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG1zZy5kYXRhKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBQcm9jZXNzaW5nIGEgbW92ZSAqL1xyXG4gICAgICAgIGNhc2UgJ01PVkUnOiB7XHJcbiAgICAgICAgICBjbGlja1NvdW5kUGxheSgpO1xyXG4gICAgICAgICAgY29uc3QgY2FyZHNPbkhhbmQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci0xJykgYXMgSFRNTERpdkVsZW1lbnQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpbXBsZS1jYXJkJyk7XHJcbiAgICAgICAgICBBcnJheS5mcm9tKGNhcmRzT25IYW5kKS5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICBtb3ZlQ3VyckNhcmQoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBkYXRhTW92ZTogeyB0b3BDYXJkOiBDYXJkSW5mbywgY3VycmVudENvbG9yOiBzdHJpbmcgfSA9IEpTT04ucGFyc2UobXNnLmRhdGEpIGFzIHsgdG9wQ2FyZDogQ2FyZEluZm8sIGN1cnJlbnRDb2xvcjogc3RyaW5nIH07XHJcbiAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2FyZCcpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhTW92ZS50b3BDYXJkLmlkfWApIGFzIEhUTUxFbGVtZW50KS5yZW1vdmUoKTtcclxuICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jYXJkJykgYXMgSFRNTEVsZW1lbnQpLmFwcGVuZChjcmVhdGVTaW1wbGVDYXJkKGRhdGFNb3ZlLnRvcENhcmQuaWQsIGRhdGFNb3ZlLnRvcENhcmQuY29sb3IsIGRhdGFNb3ZlLnRvcENhcmQudmFsdWUpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmhvbWInKSBhcyBTVkdFbGVtZW50KS5zdHlsZS5maWxsID0gZGF0YU1vdmUuY3VycmVudENvbG9yO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIENsZWFycyB0aGUgdXNlciBmaWVsZCB3aXRoIGNhcmRzICovXHJcbiAgICAgICAgY2FzZSAnVVBEQVRFX0NBUkQnOiB7XHJcbiAgICAgICAgICAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21zZy5kYXRhfWApIGFzIEhUTUxFbGVtZW50KS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBTZXQgdGhlIG5hbWVzIG9mIHBsYXllcnMgYW5kIGNvbXB1dGVycyBvbiB0aGUgcGxheWluZyBmaWVsZCAqL1xyXG4gICAgICAgIGNhc2UgJ1NFVF9VU0VSU19MSVNUJzoge1xyXG4gICAgICAgICAgY29uc3QgdXNlcnNOYW1lOiBzdHJpbmdbXSA9IEpTT04ucGFyc2UobXNnLmRhdGEpIGFzIHN0cmluZ1tdO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vyc05hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuYW1lLXBsYXllci0ke2kgKyAxfWApIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50KS5pbm5lclRleHQgPSB1c2Vyc05hbWVbaV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogVXNlciBjaG9pY2Ugb2YgY29sb3IgKi9cclxuICAgICAgICBjYXNlICdVU0VSX01VU1RfQ0hPT1NFX0NPTE9SJzoge1xyXG4gICAgICAgICAgc2hvd0NvbG9yU2VsZWN0V2luZG93KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogUHJlc3NpbmcgdGhlIFVOTyBidXR0b24gKi9cclxuICAgICAgICBjYXNlICdQVVNIX1VOT19CVVRUT04nOiB7XHJcbiAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVubycpIGFzIEhUTUxJbWFnZUVsZW1lbnQpLmNsaWNrKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogR2V0IHJvdW5kIHJlc3VsdHMgKi9cclxuICAgICAgICBjYXNlICdSRVNVTFRTX09GX1JPVU5EJzoge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0czogeyBwbGF5ZXJzOiBzdHJpbmcsIHBvaW50czogbnVtYmVyIH1bXSA9IEpTT04ucGFyc2UobXNnLmRhdGEpIGFzIHsgcGxheWVyczogc3RyaW5nLCBwb2ludHM6IG51bWJlciB9W107XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdDTEVBUl9GSUVMRCc6IHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkcycpLmZvckVhY2godmFsdWUgPT4gdmFsdWUuaW5uZXJIVE1MID0gJycpIDtcclxuICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jYXJkJykgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWNrJykgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0lOQ09NRV9DSEFUX01FU1NBR0UnOiB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShtc2cuZGF0YSkgYXMgeyB1c2VyOiBzdHJpbmcsIHVzZXJNZXNzYWdlOiBzdHJpbmcsIHRpbWU6IHN0cmluZyB9O1xyXG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2NoYXQtbWVzc2FnZSc7XHJcbiAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgIHAuaW5uZXJUZXh0ID0gZGF0YS51c2VyTWVzc2FnZTtcclxuICAgICAgICAgIHAuY2xhc3NOYW1lID0gJ2NoYXQtbWVzc2FnZS1tZXNzYWdlJztcclxuICAgICAgICAgIGRpdi5hcHBlbmQocCk7XHJcbiAgICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgcC5pbm5lclRleHQgPSBgJHtkYXRhLnRpbWV9YDtcclxuICAgICAgICAgIHAuY2xhc3NOYW1lID0gJ2NoYXQtbWVzc2FnZS10aW1lJztcclxuICAgICAgICAgIGRpdi5hcHBlbmQocCk7XHJcbiAgICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgcC5pbm5lclRleHQgPSBgJHtkYXRhLnVzZXJ9YDtcclxuICAgICAgICAgIHAuY2xhc3NOYW1lID0gJ2NoYXQtbWVzc2FnZS1uaWNrbmFtZSc7XHJcbiAgICAgICAgICBkaXYuYXBwZW5kKHApO1xyXG4gICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGF0LXdpbmRvdycpIGFzIEhUTUxFbGVtZW50KS5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdMT0dJTic6IHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VMb2dpbiA9IEpTT04ucGFyc2UobXNnLmRhdGEpIGFzIHsgc3RhdHVzOiBib29sZWFuLCBkYXRhOiBzdHJpbmcgfTtcclxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG1lc3NhZ2VMb2dpbi5kYXRhO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2VMb2dpbi5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykuZmlsdGVyKHZhbHVlID0+IHtyZXR1cm4gdmFsdWUuaW5jbHVkZXMoJ3VzZXI9Jyk7fSk7XHJcbiAgICAgICAgICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdVUERBVEVfTkFNRScsIGRhdGE6IGNvb2tpZVswXS5yZXBsYWNlKCd1c2VyPScsICcnKSB9KSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5zZXRTdGF0ZSgnaG9tZScpO1xyXG4gICAgICAgICAgICBSb3V0ZXIuY2hlY2tQYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxyXG4gICAgICAgICAgICBhbGVydChgWW91IHNpZ25lZCBpbiBhcyAke2Nvb2tpZVswXS5yZXBsYWNlKCd1c2VyPScsICcnKX1gKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgICAgICAgICAgYWxlcnQoJ1dyb25nIG5hbWUgb3IgcGFzc3dvcmQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdSRUdJU1RSQVRJT04nOiB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlUmVnaXN0cmF0aW9uID0gSlNPTi5wYXJzZShtc2cuZGF0YSkgYXMgeyBzdGF0dXM6IGJvb2xlYW4gfTtcclxuICAgICAgICAgIGlmIChtZXNzYWdlUmVnaXN0cmF0aW9uLnN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgICAgICAgICAgYWxlcnQoJ3JlZ2lzdGVyZWQhJyk7XHJcbiAgICAgICAgICAgIFJvdXRlci5zZXRTdGF0ZSgnaG9tZScpO1xyXG4gICAgICAgICAgICBSb3V0ZXIuY2hlY2tQYWdlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgICAgICAgICAgYWxlcnQoJ3VzZXIgd2l0aCB0aGlzIG5pY2tuYW1lIGFscmVhZHkgZXhpc3QhJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogU2VuZGluZyBjb21tYW5kcyB0byB0aGUgc2VydmVyIHRvIGNyZWF0ZSBhIG5ldyBnYW1lICovXHJcbiAgc3RhdGljIGNyZWF0ZU5ld0dhbWVXaXRoQ29tcHV0ZXIobnVtYmVyT2ZQbGF5ZXJzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdDUkVBVEVfR0FNRScsIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgcGxheWVyczogbnVtYmVyT2ZQbGF5ZXJzLCBvbmxpbmU6IGZhbHNlIH0pIH0pKTtcclxuICAgIENvbnRyb2xsZXIud2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdHRVRfVVNFUlNfTElTVCcsIGRhdGE6ICcnIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYXJkcy9jYXJkcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3J1bGVzLXBhZ2UvcnVsZXMtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy90YWJsZS1yZXN1bHRzL3RhYmxlLXJlc3VsdHMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jaG9pY2Utc2V0dGluZ3MvY2hvaWNlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NoYXQvY2hhdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FuaW1hdGVkLWl0ZW1zL2FuaW1hdGVkLWl0ZW1zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgUm91dGVyLmluaXRpYWxpemUoKTtcclxuICBDb250cm9sbGVyLnN0YXJ0KDkwMDEpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=