/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.app = undefined;

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _reactHandler = __webpack_require__(4);

	var _reactHandler2 = _interopRequireDefault(_reactHandler);

	var _helmet = __webpack_require__(39);

	var _helmet2 = _interopRequireDefault(_helmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create express app...
	var app = exports.app = (0, _express2.default)();

	// middleware
	app.use((0, _compression2.default)());
	app.use((0, _helmet2.default)());
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	// handle routes via react...
	app.get('*', _reactHandler2.default);

	// handle any errors
	app.use(function (err, req, res, next) {
	    // eslint-disable-line
	    res.status(err.status || 500).send("Application Error");
	});

	var PORT = process.env.PORT || 8080;

	app.listen(PORT, function () {
	    return console.log('Running on port ' + PORT);
	}); // eslint-disable-line
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(6);

	var _reactRouter = __webpack_require__(7);

	var _reactRedux = __webpack_require__(8);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _documentBuilder = __webpack_require__(10);

	var _documentBuilder2 = _interopRequireDefault(_documentBuilder);

	var _routes = __webpack_require__(13);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(37);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (req, res) {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {

	        if (err) {
	            res.status(500).send(err.message);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            var content = (0, _server.renderToString)(_react2.default.createElement(
	                _reactRedux.Provider,
	                { store: _store2.default },
	                _react2.default.createElement(_reactRouter.RouterContext, props)
	            ));
	            res.send((0, _documentBuilder2.default)(_extends({}, _reactHelmet2.default.rewind(), { content: content })));
	        } else {
	            res.status(404).send('Not Found');
	        }
	    });
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$content = _ref.content;
	    var content = _ref$content === undefined ? "" : _ref$content;
	    var _ref$title = _ref.title;
	    var title = _ref$title === undefined ? "" : _ref$title;
	    var _ref$meta = _ref.meta;
	    var meta = _ref$meta === undefined ? "" : _ref$meta;
	    var _ref$links = _ref.links;
	    var links = _ref$links === undefined ? "" : _ref$links;

	    return (0, _htmlMinifier.minify)(template.replace('<!--STUB_TITLE-->', title).replace('<!--STUB_META-->', meta).replace('<!--STUB_LINKS-->', links).replace('<!--STUB_APP-->', content), {
	        collapseWhitespace: true,
	        removeComments: true,
	        removeAttributeQuotes: true
	    });
	};

	var _htmlMinifier = __webpack_require__(11);

	var _fs = __webpack_require__(12);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = _fs2.default.readFileSync(_path2.default.join(__dirname, '..', 'public', 'index.html')).toString();
	/* WEBPACK VAR INJECTION */}.call(exports, "server/react-handler"))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("html-minifier");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	var _App = __webpack_require__(14);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(24);

	var _Home2 = _interopRequireDefault(_Home);

	var _AutoCompletes = __webpack_require__(25);

	var _AutoCompletes2 = _interopRequireDefault(_AutoCompletes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/auto-completes', component: _AutoCompletes2.default })
	);

	exports.default = routes;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	var _reactRouter = __webpack_require__(7);

	var _SiteHeader = __webpack_require__(15);

	var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

	__webpack_require__(20);

	var _style = __webpack_require__(22);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	    var children = _ref.children;
	    return _react2.default.createElement(
	        'div',
	        { className: _style2.default.app },
	        _react2.default.createElement(_SiteHeader2.default, null),
	        _react2.default.createElement(
	            'div',
	            { className: _style2.default.wrapper },
	            _react2.default.createElement(
	                'nav',
	                { className: _style2.default.nav },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/' },
	                            'Home'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/auto-completes' },
	                            'Auto Complete Demo'
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'main',
	                { className: _style2.default.main },
	                children
	            )
	        )
	    );
	};

	exports.default = (0, _reactRedux.connect)()(App);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(16);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	    return _react2.default.createElement(
	        'header',
	        { className: _style2.default.header },
	        'Welcome to my Website'
	    );
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"header-1Ljex"};

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"app":"app-2OjP9","wrapper":"wrapper-1ejJ0","nav":"nav-1nIIK","main":"main-3Gpz3"};

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, {
	            title: 'React Starter Home',
	            meta: [{ "name": "description", "content": "A React Starter" }, { "property": "og:type", "content": "article" }]
	        }),
	        _react2.default.createElement(
	            'h1',
	            null,
	            'Welcome Home'
	        )
	    );
	};

	exports.default = (0, _reactRedux.connect)()(Home);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	var _AutoComplete = __webpack_require__(26);

	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

	var _DataList = __webpack_require__(31);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _DumbComplete = __webpack_require__(32);

	var _DumbComplete2 = _interopRequireDefault(_DumbComplete);

	var _people = __webpack_require__(35);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	    var _ref$people = _ref.people;
	    var people = _ref$people === undefined ? [] : _ref$people;
	    var _ref$filtered = _ref.filtered;
	    var filtered = _ref$filtered === undefined ? [] : _ref$filtered;
	    var _ref$q = _ref.q;
	    var q = _ref$q === undefined ? "" : _ref$q;
	    var dispatch = _ref.dispatch;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, { title: '3 different AutoCompletes' }),
	        _react2.default.createElement(_AutoComplete2.default, {
	            onSelect: console.log.bind(console) // eslint-disable-line
	            , options: people,
	            placeholder: 'choose a relative...',
	            value: 'Jared'
	        }),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(_DataList2.default, {
	            onChange: function onChange(e) {
	                return console.log(e.target.value);
	            } // eslint-disable-line
	            , options: people
	        }),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(_DumbComplete2.default, {
	            options: filtered,
	            value: q,
	            onChange: function onChange(e) {
	                return dispatch((0, _people.findPeople)(e.target.value));
	            },
	            onSelect: function onSelect(e) {
	                return dispatch((0, _people.selectPerson)(e.target.textContent));
	            }
	        })
	    );
	};

	exports.default = (0, _reactRedux.connect)(function (_ref2) {
	    var people = _ref2.people;
	    return { people: people.all, filtered: people.filtered, q: people.q };
	})(App);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _autoComplete = __webpack_require__(27);

	var _autoComplete2 = _interopRequireDefault(_autoComplete);

	var _classnames = __webpack_require__(29);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _strongify = __webpack_require__(30);

	var _strongify2 = _interopRequireDefault(_strongify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import throttle from '../../lib/throttle.js';

	var AutoComplete = function (_React$Component) {
	    _inherits(AutoComplete, _React$Component);

	    function AutoComplete(props) {
	        _classCallCheck(this, AutoComplete);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutoComplete).call(this, props));

	        _this.state = { options: [], highlight: -1, isactive: false, value: _this.props.value || '' };
	        return _this;
	    }

	    _createClass(AutoComplete, [{
	        key: 'handleValueChanges',
	        value: function handleValueChanges(event) {
	            var typedCharacters = event.target.value,
	                options = typedCharacters.length < 2 ? [] : this.props.options.filter(function (p) {
	                return ~(p.text || p).toLowerCase().indexOf(typedCharacters.toLowerCase());
	            }).slice(0, this.props.max || 1000);

	            this.setState({ options: options, highlight: -1, isactive: true, value: typedCharacters });
	            this.notify();
	        }
	    }, {
	        key: 'handleMetaKeys',
	        value: function handleMetaKeys(event) {

	            switch (event.keyCode || event.which) {
	                // down
	                case 40:
	                    this.highlight(this.state.highlight + 1);
	                    event.preventDefault();
	                    break;

	                //up
	                case 38:
	                    this.highlight(this.state.highlight - 1);
	                    event.preventDefault();
	                    break;

	                //enter
	                case 13:
	                    {
	                        var selected = this.refs['option-' + this.state.highlight];
	                        this.select(selected && (selected.dataset.value || selected.textContent) || this.refs.input.value);
	                        event.preventDefault();
	                        break;
	                    }

	                case 27:
	                    //escape
	                    this.reset();
	                    event.preventDefault();
	                    break;
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.setState({ options: [], highlight: -1 });
	        }
	    }, {
	        key: 'notify',
	        value: function notify() {
	            if (this.props.onSelect) {
	                this.props.onSelect(this.refs.input.value);
	            }
	        }
	    }, {
	        key: 'select',
	        value: function select(value) {
	            this.refs.input.value = value;
	            this.refs.input.focus();
	            this.reset();
	            this.notify();
	        }
	    }, {
	        key: 'highlight',
	        value: function highlight(n) {
	            if (n >= 0 && n < this.state.options.length) {
	                this.setState({ highlight: n });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this,
	                _classNames2;

	            var options = this.state.options.map(function (o, i) {
	                var _classNames;

	                return _react2.default.createElement(
	                    'div',
	                    {
	                        className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _autoComplete2.default['option-item'], true), _defineProperty(_classNames, _autoComplete2.default['option-item--selected'], i === _this2.state.highlight), _classNames)),
	                        'data-value': o.value || o,
	                        key: i,
	                        onClick: function onClick(e) {
	                            return _this2.select(o.value || o);
	                        },
	                        onMouseOver: function onMouseOver() {
	                            return _this2.setState({ highlight: i });
	                        },
	                        ref: 'option-' + i
	                    },
	                    (0, _strongify2.default)(o.text || o, _this2.state.value)
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { className: _autoComplete2.default['auto-complete'], onBlur: function onBlur() {
	                        return _this2.setState({ isactive: false });
	                    } },
	                _react2.default.createElement(
	                    'label',
	                    null,
	                    this.props.label
	                ),
	                _react2.default.createElement('input', {
	                    className: _autoComplete2.default.input,
	                    placeholder: this.props.placeholder,
	                    type: 'text',
	                    ref: 'input',
	                    onKeyDown: this.handleMetaKeys.bind(this)
	                    // onChange={ throttle(this.handleValueChanges.bind(this)) }
	                    , onChange: this.handleValueChanges.bind(this),
	                    defaultValue: this.props.value
	                }),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, _autoComplete2.default.options, true), _defineProperty(_classNames2, _autoComplete2.default['options--active'], this.state.isactive), _classNames2)) },
	                    options
	                )
	            );
	        }
	    }]);

	    return AutoComplete;
	}(_react2.default.Component);

	exports.default = AutoComplete;

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"auto-complete":"auto-complete-3_QtF","input":"input-ulkM5","options":"options-1V9wN","option-item":"option-item-347Q3"};

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (full, part) {
	    var pattern = new RegExp('(' + part + ')', 'ig'),
	        parts = full.split(pattern);

	    return parts.map(function (p, i) {
	        return pattern.test(p) ? _react2.default.createElement(
	            'strong',
	            { key: i },
	            part
	        ) : p;
	    });
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function uniqId() {
	    return "dl-".concat(new Date().toISOString());
	}

	exports.default = function (_ref) {
	    var _ref$options = _ref.options;
	    var options = _ref$options === undefined ? [] : _ref$options;
	    var _ref$className = _ref.className;
	    var className = _ref$className === undefined ? "" : _ref$className;
	    var _ref$label = _ref.label;
	    var label = _ref$label === undefined ? "" : _ref$label;
	    var _ref$value = _ref.value;
	    var value = _ref$value === undefined ? "" : _ref$value;
	    var _ref$placeholder = _ref.placeholder;
	    var placeholder = _ref$placeholder === undefined ? "" : _ref$placeholder;
	    var _ref$onChange = _ref.onChange;
	    var onChange = _ref$onChange === undefined ? function () {} : _ref$onChange;


	    var id = uniqId(),
	        Options = options.map(function (o, i) {
	        return _react2.default.createElement(
	            "option",
	            { key: i, value: o.value || o },
	            o.text || o
	        );
	    });

	    return _react2.default.createElement(
	        "div",
	        { className: className },
	        _react2.default.createElement(
	            "label",
	            null,
	            label
	        ),
	        _react2.default.createElement("input", {
	            defaultValue: value,
	            list: id,
	            onChange: onChange,
	            placeholder: placeholder,
	            type: "text"
	        }),
	        _react2.default.createElement(
	            "datalist",
	            { id: id },
	            Options
	        )
	    );
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(33);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {

	    var options = props.options.map(function (opt, i) {
	        return _react2.default.createElement(
	            'a',
	            {
	                key: i,
	                className: _style2.default['option-item'],
	                onClick: props.onSelect },
	            opt
	        );
	    });

	    return _react2.default.createElement(
	        'div',
	        { className: _style2.default['auto-complete'] },
	        _react2.default.createElement(
	            'label',
	            null,
	            props.label
	        ),
	        _react2.default.createElement('input', {
	            type: 'text',
	            placeholder: props.placeholder,
	            onKeyDown: props.onInput,
	            onChange: props.onChange,
	            onFocus: props.onFocus,
	            onBlur: props.onBlur,
	            value: props.value
	        }),
	        _react2.default.createElement(
	            'div',
	            null,
	            options
	        )
	    );
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"auto-complete":"auto-complete-2ao1r","input":"input-3cvaX","options":"options-3Y2CC","option-item":"option-item-_e2zC"};

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selectPerson = exports.findPeople = exports.init = undefined;

	var _people = __webpack_require__(36);

	var init = exports.init = function init(people) {
	  return { type: _people.INIT_PEOPLE, people: people };
	};

	var findPeople = exports.findPeople = function findPeople(q) {
	  return { type: _people.FIND_PEOPLE, q: q };
	};

	var selectPerson = exports.selectPerson = function selectPerson(q) {
	  return { type: _people.SELECT_PERSON, q: q };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = people;
	var INIT_PEOPLE = exports.INIT_PEOPLE = Symbol('INIT_PEOPLE');
	var FIND_PEOPLE = exports.FIND_PEOPLE = Symbol('FIND_PEOPLE');
	var SELECT_PERSON = exports.SELECT_PERSON = Symbol('SELECT_PERSON');

	function people() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? { q: '', all: [], filtered: [] } : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case INIT_PEOPLE:
	            return {
	                q: '',
	                all: action.people,
	                filtered: []
	            };

	        case FIND_PEOPLE:
	            return {
	                all: [].concat(state.all),
	                q: action.q,
	                filtered: action.q.length > 1 ? state.all.filter(function (p) {
	                    return ~p.toLowerCase().indexOf(action.q.toLowerCase());
	                }) : []
	            };

	        case SELECT_PERSON:
	            return {
	                all: [].concat(state.all),
	                q: action.q,
	                filtered: []
	            };

	        default:
	            return state;
	    }
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(38);

	var _people = __webpack_require__(36);

	var _people2 = _interopRequireDefault(_people);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _redux.combineReducers)({ people: _people2.default });

	exports.default = (0, _redux.createStore)(store);

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("helmet");

/***/ }
/******/ ]);