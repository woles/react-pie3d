(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-pie3d"] = factory(require("react"));
	else
		root["react-pie3d"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _middleAngle = __webpack_require__(2);

var _middleAngle2 = _interopRequireDefault(_middleAngle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (d, rx, ry) {
  var middle = (0, _middleAngle2.default)(d.startAngle, d.endAngle);
  return [0.2 * rx * Math.cos(middle > Math.PI ? middle : -middle), 0.2 * ry * Math.sin(middle)];
};

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;

exports.default = function (startAngle, endAngle) {
  return startAngle + (endAngle - startAngle) / 2;
};

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (data) {
  var sum = 0;
  var lastAngle = 0;
  var index = 0;
  var colors = ['limegreen', 'mediumvioletred', 'mediumpurple', 'orange', 'firebrick', 'chartreuse', 'dodgerblue', 'tomato'];
  var array = data.map(function (d) {
    if (typeof d === 'number') {
      sum += d;
      index += 1;
      return {
        value: d,
        color: colors[index % colors.length]
      };
    } else if ((typeof d === 'undefined' ? 'undefined' : _typeof(d)) === 'object' && typeof d.value === 'number') {
      index += 1;
      sum += d.value;
      d.color = d.color ? d.color : colors[index % colors.length];
      return d;
    }
  });

  index = 0;

  array = array.map(function (d) {
    d.index = index;
    index += 1;
    d.startAngle = lastAngle;
    d.endAngle = lastAngle + d.value / sum * 2 * Math.PI;
    lastAngle = d.endAngle;
    return d;
  });

  return array;
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pieEndWall = __webpack_require__(13);

var _pieEndWall2 = _interopRequireDefault(_pieEndWall);

var _move = __webpack_require__(1);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EndWall = function (_React$Component) {
  _inherits(EndWall, _React$Component);

  function EndWall() {
    var _temp, _this, _ret;

    _classCallCheck(this, EndWall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.move = function () {
      return _this.props.move(_this.props.d);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  EndWall.prototype.render = function render() {
    return _react2.default.createElement('path', { style: { fill: this.props.d.color, cursor: 'pointer' },
      d: (0, _pieEndWall2.default)(this.props.d, this.props.rx, this.props.ry, this.props.h, this.props.ir),
      onClick: this.move,
      stroke: 'white',
      transform: this.props.moved ? 'translate(' + (0, _move2.default)(this.props.d, this.props.rx, this.props.ry) + ')' : 'translate(0,0)'
    });
  };

  return EndWall;
}(_react2.default.Component);

EndWall.propTypes = {
  d: _react2.default.PropTypes.shape({
    color: _react2.default.PropTypes.string
  }).isRequired,
  rx: _react2.default.PropTypes.number.isRequired,
  ry: _react2.default.PropTypes.number.isRequired,
  h: _react2.default.PropTypes.number.isRequired,
  ir: _react2.default.PropTypes.number.isRequired,
  move: _react2.default.PropTypes.func
};
exports.default = EndWall;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pieInner = __webpack_require__(14);

var _pieInner2 = _interopRequireDefault(_pieInner);

var _move = __webpack_require__(1);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inner = function (_React$Component) {
  _inherits(Inner, _React$Component);

  function Inner() {
    var _temp, _this, _ret;

    _classCallCheck(this, Inner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.move = function () {
      return _this.props.move(_this.props.d);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Inner.prototype.render = function render() {
    return _react2.default.createElement('path', { style: { fill: this.props.d.color, cursor: 'pointer' },
      d: (0, _pieInner2.default)(this.props.d, this.props.rx, this.props.ry, this.props.h, this.props.ir),
      onClick: this.move,
      stroke: 'white',
      transform: this.props.moved ? 'translate(' + (0, _move2.default)(this.props.d, this.props.rx, this.props.ry) + ')' : 'translate(0,0)'
    });
  };

  return Inner;
}(_react2.default.Component);

Inner.propTypes = {
  d: _react2.default.PropTypes.shape({
    color: _react2.default.PropTypes.string
  }).isRequired,
  rx: _react2.default.PropTypes.number.isRequired,
  ry: _react2.default.PropTypes.number.isRequired,
  ir: _react2.default.PropTypes.number.isRequired,
  h: _react2.default.PropTypes.number.isRequired,
  move: _react2.default.PropTypes.func
};
exports.default = Inner;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _move = __webpack_require__(1);

var _move2 = _interopRequireDefault(_move);

var _middleAngle = __webpack_require__(2);

var _middleAngle2 = _interopRequireDefault(_middleAngle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = function (_React$Component) {
  _inherits(Label, _React$Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Label.prototype.render = function render() {
    var middle = (0, _middleAngle2.default)(this.props.d.startAngle, this.props.d.endAngle);
    var translate = (0, _move2.default)(this.props.d, this.props.rx, this.props.ry);
    var labelPathLength = 1 + this.props.h / this.props.rx / 2;
    var position = [(this.props.rx + 16) * (middle > 3 / 2 * Math.PI || middle < Math.PI / 2 ? 1 : -1), this.props.ry * Math.sin(middle) * labelPathLength + 3];
    return _react2.default.createElement(
      'text',
      { fontSize: 10,
        transform: this.props.moved ? 'translate(' + [position[0] + translate[0], position[1] + translate[1]] + ')' : 'translate(' + position + ')',
        textAnchor: middle > 3 / 2 * Math.PI || middle < Math.PI / 2 ? 'start' : 'end'
      },
      this.props.d.label ? this.props.d.label + '(' + ((this.props.d.endAngle - this.props.d.startAngle) / (2 * Math.PI) * 100).toFixed(0) + '%)' : ((this.props.d.endAngle - this.props.d.startAngle) / (2 * Math.PI) * 100).toFixed(0) + '%'
    );
  };

  return Label;
}(_react2.default.Component);

Label.propTypes = {
  d: _react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string,
    endAngle: _react2.default.PropTypes.number,
    startAngle: _react2.default.PropTypes.number
  }).isRequired,
  rx: _react2.default.PropTypes.number.isRequired,
  ry: _react2.default.PropTypes.number.isRequired,
  h: _react2.default.PropTypes.number.isRequired
};
exports.default = Label;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pieLabelPath = __webpack_require__(15);

var _pieLabelPath2 = _interopRequireDefault(_pieLabelPath);

var _move = __webpack_require__(1);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelPath = function (_React$Component) {
  _inherits(LabelPath, _React$Component);

  function LabelPath() {
    _classCallCheck(this, LabelPath);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  LabelPath.prototype.render = function render() {
    return _react2.default.createElement('path', { d: (0, _pieLabelPath2.default)(this.props.d, this.props.rx, this.props.ry, this.props.h),
      stroke: 'black',
      transform: this.props.moved ? 'translate(' + (0, _move2.default)(this.props.d, this.props.rx, this.props.ry) + ')' : 'translate(0,0)'
    });
  };

  return LabelPath;
}(_react2.default.Component);

LabelPath.propTypes = {
  d: _react2.default.PropTypes.shape({}).isRequired,
  rx: _react2.default.PropTypes.number.isRequired,
  ry: _react2.default.PropTypes.number.isRequired,
  h: _react2.default.PropTypes.number.isRequired
};
exports.default = LabelPath;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pieOuter = __webpack_require__(16);

var _pieOuter2 = _interopRequireDefault(_pieOuter);

var _move = __webpack_require__(1);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Outer = function (_React$Component) {
  _inherits(Outer, _React$Component);

  function Outer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Outer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.move = function () {
      return _this.props.move(_this.props.d);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Outer.prototype.render = function render() {
    return _react2.default.createElement('path', { style: { fill: this.props.d.color, cursor: 'pointer' },
      d: (0, _pieOuter2.default)(this.props.d, this.props.rx, this.props.ry, this.props.h),
      onClick: this.move,
      stroke: 'white',
      transform: this.props.moved ? 'translate(' + (0, _move2.default)(this.props.d, this.props.rx, this.props.ry) + ')' : 'translate(0,0)'
    });
  };

  return Outer;
}(_react2.default.Component);

Outer.propTypes = {
  d: _react2.default.PropTypes.shape({
    color: _react2.default.PropTypes.string
  }).isRequired,
  rx: _react2.default.PropTypes.number.isRequired,
  ry: _react2.default.PropTypes.number.isRequired,
  h: _react2.default.PropTypes.number.isRequired,
  move: _react2.default.PropTypes.func
};
exports.default = Outer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pieStartWall = __webpack_require__(17);

var _pieStartWall2 = _interopRequireDefault(_pieStartWall);

var _move = __webpack_require__(1);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartWall = function (_React$Component) {
  _inherits(StartWall, _React$Component);

  function StartWall() {
    var _temp, _this, _ret;

    _classCallCheck(this, StartWall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.move = function () {
      return _this.props.move(_this.props.d);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StartWall.prototype.render = function render() {
    return _react2.default.createElement('path', { style: { fill: this.props.d.color, cursor: 'pointer' },
      d: (0, _pieStartWall2.default)(this.props.d, this.props.rx, this.props.ry, this.props.h, this.props.ir),
      onClick: this.move,
      stroke: 'white',
      transform: this.props.moved ? 'translate(' + (0, _move2.default)(this.props.d, this.props.rx, this.props.ry) + ')' : 'translate(0,0)'
    });
  };

  return StartWall;
}(_react2.default.Component);

StartWall.propTypes = {
  d: _react2.default.PropTypes.shape({
    color: _react2.default.PropTypes.string
  }).isRequired,
  rx: _react2.default.PropTypes.number.isRequired,
  ry: _react2.default.PropTypes.number.isRequired,
  h: _react2.default.PropTypes.number.isRequired,
  ir: _react2.default.PropTypes.number.isRequired,
  move: _react2.default.PropTypes.func
};
exports.default = StartWall;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pieTop = __webpack_require__(18);

var _pieTop2 = _interopRequireDefault(_pieTop);

var _move = __webpack_require__(1);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top = function (_React$Component) {
  _inherits(Top, _React$Component);

  function Top() {
    var _temp, _this, _ret;

    _classCallCheck(this, Top);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.move = function () {
      return _this.props.move(_this.props.d);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Top.prototype.render = function render() {
    return _react2.default.createElement('path', { style: { fill: this.props.d.color, cursor: 'pointer' },
      d: (0, _pieTop2.default)(this.props.d, this.props.rx, this.props.ry, this.props.ir),
      onClick: this.move,
      stroke: 'white',
      transform: this.props.moved ? 'translate(' + (0, _move2.default)(this.props.d, this.props.rx, this.props.ry) + ')' : 'translate(0,0)'
    });
  };

  return Top;
}(_react2.default.Component);

Top.propTypes = {
  d: _react2.default.PropTypes.shape({
    color: _react2.default.PropTypes.string
  }).isRequired,
  rx: _react2.default.PropTypes.number.isRequired,
  ry: _react2.default.PropTypes.number.isRequired,
  ir: _react2.default.PropTypes.number.isRequired,
  move: _react2.default.PropTypes.func
};
exports.default = Top;

/***/ },
/* 11 */
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;

exports.default = function (length) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var id = '';
  for (var i = length; i >= 0; i -= 1) {
    id += alphabet[(Math.random() * alphabet.length).toFixed(0)];
  }
  return id;
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pieData = __webpack_require__(3);

var _pieData2 = _interopRequireDefault(_pieData);

var _randomId = __webpack_require__(11);

var _randomId2 = _interopRequireDefault(_randomId);

var _top = __webpack_require__(10);

var _top2 = _interopRequireDefault(_top);

var _inner = __webpack_require__(5);

var _inner2 = _interopRequireDefault(_inner);

var _outer = __webpack_require__(8);

var _outer2 = _interopRequireDefault(_outer);

var _endWall = __webpack_require__(4);

var _endWall2 = _interopRequireDefault(_endWall);

var _startWall = __webpack_require__(9);

var _startWall2 = _interopRequireDefault(_startWall);

var _labelPath = __webpack_require__(7);

var _labelPath2 = _interopRequireDefault(_labelPath);

var _label = __webpack_require__(6);

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie3D = function (_React$Component) {
  _inherits(Pie3D, _React$Component);

  function Pie3D(props) {
    _classCallCheck(this, Pie3D);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.updateConfig = function () {
      var height = document.getElementById(_this.state.chartId).clientHeight;
      _this.setState({ height: height });
      var width = document.getElementById(_this.state.chartId).clientWidth;
      _this.setState({ width: width });
      _this.rx = height / 2;
      _this.ir = 0.6;
      _this.h = 40;
      _this.angle = 40;
    };

    _this.moved = [];

    _this.move = function (d) {
      _this.moved.indexOf(d.index) > -1 ? delete _this.moved[_this.moved.indexOf(d.index)] : _this.moved.push(d.index);
      if (_this.props.config) {
        _this.props.config.onSliceClick ? _this.props.config.onSliceClick(d) : null;
      }
      _this.forceUpdate();
    };

    _this.checkMoved = function (index) {
      return _this.moved.indexOf(index) >= 0;
    };

    _this.state = {
      width: 0,
      height: 0,
      chartId: (0, _randomId2.default)(10)
    };
    return _this;
  }

  Pie3D.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.updateConfig();
    window.addEventListener('resize', function () {
      return _this2.updateConfig();
    });
  };

  Pie3D.prototype.render = function render() {
    var _this3 = this;

    var data = (0, _pieData2.default)(this.props.data);
    var ir = this.ir;
    var rx = this.rx;
    var angle = this.angle;
    var h = 0;
    var config = this.props.config;
    if (config) {
      h = config.h >= 0 ? config.h : this.h;
      ir = config.ir >= 0 && config.ir <= 100 ? config.ir / 100 : this.ir;
      angle = config.angle <= 90 && config.angle > 0 ? config.angle : this.angle;
      rx = config.size > 0 ? rx * config.size / 100 : rx;
    }
    var ry = rx * angle / 90;
    h = (90 - angle) / 90 * h;
    return _react2.default.createElement(
      'svg',
      { style: { width: '100%', height: '100%' }, id: this.state.chartId },
      _react2.default.createElement(
        'g',
        { transform: 'translate(' + this.state.width / 2 + ', ' + this.state.height / 2 + ')' },
        data.map(function (d) {
          if (rx && d.endAngle > 3 * Math.PI / 2 && d.startAngle <= Math.PI / 2) {
            return _react2.default.createElement(
              'g',
              { key: d.index },
              _react2.default.createElement(_endWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              })
            );
          }
        }),
        data.map(function (d) {
          if (rx && d.endAngle > 3 * Math.PI / 2 && d.startAngle > Math.PI / 2) {
            return _react2.default.createElement(
              'g',
              { key: d.index },
              _react2.default.createElement(_startWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              _react2.default.createElement(_endWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              _react2.default.createElement(_inner2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              d.startAngle < Math.PI ? _react2.default.createElement(_outer2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }) : null
            );
          }
        }),
        data.map(function (d) {
          if (rx && d.endAngle < Math.PI / 2) {
            return _react2.default.createElement(
              'g',
              { key: d.index },
              _react2.default.createElement(_startWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              _react2.default.createElement(_endWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              _react2.default.createElement(_outer2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              })
            );
          }
        }),
        data.sort(function (a, b) {
          return b.index - a.index;
        }).map(function (d) {
          if (rx && d.endAngle > Math.PI && d.endAngle <= 3 * Math.PI / 2) {
            return _react2.default.createElement(
              'g',
              { key: d.index },
              _react2.default.createElement(_endWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              d.startAngle > Math.PI ? _react2.default.createElement(_startWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }) : null,
              _react2.default.createElement(_inner2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              d.startAngle <= Math.PI ? _react2.default.createElement(_startWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }) : null,
              d.startAngle < Math.PI ? _react2.default.createElement(_outer2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }) : null
            );
          }
        }),
        data.sort(function (a, b) {
          return b.index - a.index;
        }).map(function (d) {
          if (rx && d.endAngle >= Math.PI / 2 && d.endAngle <= Math.PI) {
            return _react2.default.createElement(
              'g',
              { key: d.index },
              _react2.default.createElement(_endWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              _react2.default.createElement(_startWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              _react2.default.createElement(_outer2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              })
            );
          }
        }),
        data.map(function (d) {
          if (rx && d.endAngle > 3 * Math.PI / 2 && d.startAngle <= Math.PI / 2) {
            return _react2.default.createElement(
              'g',
              { key: d.index },
              _react2.default.createElement(_startWall2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              _react2.default.createElement(_inner2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                ir: ir,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }),
              d.startAngle < Math.PI ? _react2.default.createElement(_outer2.default, { d: d,
                rx: rx,
                ry: ry,
                h: h,
                move: _this3.move,
                moved: _this3.checkMoved(d.index)
              }) : null
            );
          }
        }),
        data.map(function (d) {
          return rx ? _react2.default.createElement(_top2.default, { key: d.index,
            d: d,
            rx: rx,
            ry: ry,
            ir: ir,
            move: _this3.move,
            moved: _this3.checkMoved(d.index)
          }) : null;
        }),
        data.map(function (d) {
          return rx ? _react2.default.createElement(_labelPath2.default, { key: d.index,
            d: d, rx: rx,
            ry: ry, h: h,
            moved: _this3.checkMoved(d.index)
          }) : null;
        }),
        data.map(function (d) {
          return rx ? _react2.default.createElement(_label2.default, { key: d.index,
            d: d,
            rx: rx,
            ry: ry,
            h: h,
            moved: _this3.checkMoved(d.index)
          }) : null;
        })
      )
    );
  };

  return Pie3D;
}(_react2.default.Component);

Pie3D.propTypes = {
  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.shape({})])).isRequired,
  config: _react2.default.PropTypes.shape({
    onSliceClick: _react2.default.PropTypes.function
  })
};
exports.default = Pie3D;

/***/ },
/* 13 */
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;

exports.default = function (d, rx, ry, h, ir) {
  var ex = rx * Math.cos(d.endAngle);
  var ey = ry * Math.sin(d.endAngle);
  var ret = [];

  ret.push('M', ir * ex, ir * ey, 'L', ir * ex, ir * ey + h, 'L', ex, ey + h, 'L', ex, ey, 'z');
  return ret.join(' ');
};

/***/ },
/* 14 */
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;

exports.default = function (d, rx, ry, h, ir) {
  var startAngle = d.startAngle < Math.PI ? Math.PI : d.startAngle;
  var endAngle = d.endAngle < Math.PI ? Math.PI : d.endAngle;
  var sx = ir * rx * Math.cos(startAngle);
  var sy = ir * ry * Math.sin(startAngle);
  var ex = ir * rx * Math.cos(endAngle);
  var ey = ir * ry * Math.sin(endAngle);
  var ret = [];

  ret.push('M', sx, sy, 'A', ir * rx, ir * ry, '0 0 1', ex, ey);
  ret.push('L', ex, h + ey, 'A', ir * rx, ir * ry, '0 0 0', sx, h + sy, 'z');
  return ret.join(' ');
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _middleAngle = __webpack_require__(2);

var _middleAngle2 = _interopRequireDefault(_middleAngle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (d, rx, ry, h) {
  var middle = (0, _middleAngle2.default)(d.startAngle, d.endAngle);
  var x1 = rx * Math.cos(middle);
  var y1 = ry * Math.sin(middle);
  var labelPathLength = 1 + h / rx / 2;
  var path = [];

  path.push('M', x1, y1, 'L', x1 * labelPathLength, y1 * labelPathLength);
  path.push('L', (rx + 14) * (middle > 3 / 2 * Math.PI || middle < Math.PI / 2 ? 1 : -1), y1 * labelPathLength);
  path.push('L', x1 * labelPathLength, y1 * labelPathLength, 'z');

  return path.join(' ');
};

/***/ },
/* 16 */
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;

exports.default = function (d, rx, ry, h) {
  var startAngle = d.startAngle > Math.PI ? Math.PI : d.startAngle;
  var endAngle = d.endAngle > Math.PI ? Math.PI : d.endAngle;
  var sx = rx * Math.cos(startAngle);
  var sy = ry * Math.sin(startAngle);
  var ex = rx * Math.cos(endAngle);
  var ey = ry * Math.sin(endAngle);
  var ret = [];

  ret.push('M', sx, h + sy, 'A', rx, ry, '0 0 1', ex, h + ey, 'L', ex, ey);
  ret.push('A', rx, ry, '0 0 0', sx, sy, 'z');
  return ret.join(' ');
};

/***/ },
/* 17 */
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;

exports.default = function (d, rx, ry, h, ir) {
  var sx = rx * Math.cos(d.startAngle);
  var sy = ry * Math.sin(d.startAngle);
  var ret = [];
  ret.push('M', ir * sx, ir * sy, 'L', ir * sx, ir * sy + h, 'L', sx, sy + h, 'L', sx, sy, 'z');
  return ret.join(' ');
};

/***/ },
/* 18 */
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;

exports.default = function (d, rx, ry, ir) {
  if (d.endAngle - d.startAngle === 0) {
    return 'M 0 0';
  }

  var sx = rx * Math.cos(d.startAngle);
  var sy = ry * Math.sin(d.startAngle);
  var ex = rx * Math.cos(d.endAngle);
  var ey = ry * Math.sin(d.endAngle);
  var ret = [];

  ret.push('M', sx, sy, 'A', rx, ry, '0', d.endAngle - d.startAngle > Math.PI ? 1 : 0);
  ret.push('1', ex, ey, 'L', ir * ex, ir * ey);
  ret.push('A', ir * rx, ir * ry, '0', d.endAngle - d.startAngle > Math.PI ? 1 : 0, '0', ir * sx, ir * sy, 'z');
  return ret.join(' ');
};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-pie3d.js.map