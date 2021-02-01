module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./src/theme.js
const theme = {
  font: 'Helvetica,Arial,sans-serif',
  dark: '#0B1C4D',
  light: '#FFFFFF',
  primary: '#32A0FB',
  secondary: '#FFFD00',
  error: '#CB001C',
  success: '#00AA00'
};
/* harmony default export */ var src_theme = (theme);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./store/user/types.js
var types = __webpack_require__("V31j");

// CONCATENATED MODULE: ./store/user/reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  token: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  didRegisterSuccessfully: false
};

const user = (state = initialState, action) => {
  const {
    payload
  } = action;

  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      // required by next-redux-wrapper
      return _objectSpread({}, state);

    case types["d" /* USER_LOGOUT */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        initialState
      });

    case types["b" /* USER_LOGIN_STARTED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        didRegisterSuccessfully: false
      });

    case types["c" /* USER_LOGIN_SUCCEEDED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: payload.data.token,
        username: payload.data.username,
        firstName: payload.data.first_name,
        lastName: payload.data.last_name,
        email: payload.data.email,
        id: payload.data.id,
        phoneNumber: payload.data.phone,
        isLoading: false
      });

    case types["a" /* USER_LOGIN_FAILED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        error: {
          user: payload // TODO check

        }
      });

    case types["f" /* USER_REGISTER_STARTED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case types["g" /* USER_REGISTER_SUCCEEDED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        didRegisterSuccessfully: true
      });

    case types["e" /* USER_REGISTER_FAILED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        error: {
          user: payload // TODO check

        }
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (user);
// EXTERNAL MODULE: ./store/carrier/types.js
var carrier_types = __webpack_require__("mOoA");

// CONCATENATED MODULE: ./store/carrier/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initialState = {
  carrierList: []
};

const carrier = (state = reducer_initialState, action) => {
  const {
    payload
  } = action;

  switch (action.type) {
    case carrier_types["b" /* ADD_CARRIER_STARTED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: true
      });

    case carrier_types["c" /* ADD_CARRIER_SUCCEEDED */]:
      const {
        data
      } = payload;
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: false,
        carrierList: reducer_objectSpread(reducer_objectSpread({}, state.carrier.carrierList), {}, {
          data
        })
      });

    case carrier_types["a" /* ADD_CARRIER_FAILED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: false,
        error: payload // TODO

      });

    case carrier_types["h" /* UPDATE_CARRIER_STARTED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: true
      });

    case carrier_types["i" /* UPDATE_CARRIER_SUCCEEDED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: false
      });

    case carrier_types["g" /* UPDATE_CARRIER_FAILED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: false,
        error: payload
      });

    case carrier_types["e" /* GET_CARRIER_LIST_STARTED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: true
      });

    case carrier_types["f" /* GET_CARRIER_LIST_SUCCEEDED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: false,
        carrierList: payload.data,
        meta: payload.meta
      });

    case carrier_types["d" /* GET_CARRIER_LIST_FAILED */]:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: false,
        error: payload // TODO

      });

    default:
      return state;
  }
};

/* harmony default export */ var carrier_reducer = (carrier);
// CONCATENATED MODULE: ./store/reducers.js



/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  user: reducer,
  carrier: carrier_reducer
}));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__("RE4Q");
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__("lCf4");
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: ./store/user/actions.js
var actions = __webpack_require__("V4Hs");

// CONCATENATED MODULE: ./config.js
const BASE_URL = 'https://kamion-interview.herokuapp.com';
// CONCATENATED MODULE: ./store/user/saga.js








const cookies = new external_universal_cookie_default.a();

function* loginUserTask(action) {
  const {
    payload
  } = action;
  const {
    username,
    password
  } = payload;

  try {
    const response = yield Object(effects_["call"])(external_axios_default.a.post, `${BASE_URL}/api/shipper/login`, {
      username,
      password
    });
    const {
      data
    } = response;
    yield Object(effects_["put"])(Object(actions["b" /* loginSuccess */])(data));
    cookies.set('kamionTrustedCarriersApp', get_default()(data, 'data.token'), {
      path: '/'
    });
    router_default.a.push({
      pathname: '/list'
    });
  } catch (e) {
    yield Object(effects_["put"])(Object(actions["a" /* loginError */])(e));
    console.log({
      e
    });
  }
}

function* registerUserTask(action) {
  const {
    payload
  } = action;
  const {
    username,
    password,
    first_name,
    last_name,
    phone,
    email
  } = payload;

  try {
    const response = yield Object(effects_["call"])(external_axios_default.a.post, `${BASE_URL}/api/shipper/register`, {
      username,
      password,
      first_name,
      last_name,
      phone,
      email
    });
    const {
      data
    } = response;
    yield Object(effects_["put"])(Object(actions["f" /* registerSuccess */])(data));
  } catch (e) {
    yield Object(effects_["put"])(Object(actions["e" /* registerError */])(e));
    console.log({
      e
    });
  }
}

function* logoutUserTask() {
  yield cookies.remove('kamionTrustedCarriersApp');
}

function* watchLoginUser() {
  yield Object(effects_["takeLatest"])(types["b" /* USER_LOGIN_STARTED */], loginUserTask);
}

function* watchRegisterUser() {
  yield Object(effects_["takeLatest"])(types["f" /* USER_REGISTER_STARTED */], registerUserTask);
}

function* watchLogoutUser() {
  yield Object(effects_["takeLatest"])(types["d" /* USER_LOGOUT */], logoutUserTask);
}

function* saga() {
  yield Object(effects_["all"])([watchLoginUser(), watchRegisterUser(), watchLogoutUser()]);
}
// EXTERNAL MODULE: ./store/carrier/actions.js
var carrier_actions = __webpack_require__("HLXa");

// CONCATENATED MODULE: ./store/carrier/saga.js






function* getCarriersTask(action) {
  const {
    payload
  } = action;
  const {
    token,
    page = 1
  } = payload;

  try {
    const response = yield Object(effects_["call"])(external_axios_default.a.get, `${BASE_URL}/api/shipper/carrier?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    yield Object(effects_["put"])(Object(carrier_actions["f" /* getCarrierListSuccess */])(response.data));
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])(Object(carrier_actions["e" /* getCarrierListError */])(e));
  }
}

function* addCarrierTask(action) {
  const {
    payload
  } = action;
  const {
    token,
    formData
  } = payload;

  try {
    const response = yield Object(effects_["call"])(external_axios_default.a.post, `${BASE_URL}/api/shipper/carrier`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    const {
      data
    } = response;
    yield Object(effects_["put"])(Object(carrier_actions["c" /* addCarrierSuccess */])(data));
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])(Object(carrier_actions["b" /* addCarrierError */])(e));
  }
}

function* updateCarrierTask(action) {
  const {
    payload
  } = action;
  const {
    token,
    formData,
    carrierId
  } = payload;

  try {
    const response = yield Object(effects_["call"])(external_axios_default.a.post, `${BASE_URL}/api/shipper/update-carrier/${carrierId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    const {
      data
    } = response;
    yield Object(effects_["put"])(Object(carrier_actions["i" /* updateCarrierSuccess */])(data));
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])(Object(carrier_actions["h" /* updateCarrierError */])(e));
  }
}

function* watchGetCarriers() {
  yield Object(effects_["takeLatest"])(carrier_types["e" /* GET_CARRIER_LIST_STARTED */], getCarriersTask);
}

function* watchAddCarrier() {
  yield Object(effects_["takeLatest"])(carrier_types["b" /* ADD_CARRIER_STARTED */], addCarrierTask);
}

function* watchUpdateCarrier() {
  yield Object(effects_["takeLatest"])(carrier_types["h" /* UPDATE_CARRIER_STARTED */], updateCarrierTask);
}

function* saga_saga() {
  yield Object(effects_["all"])([watchGetCarriers(), watchAddCarrier(), watchUpdateCarrier()]);
}
// CONCATENATED MODULE: ./store/sagas.js



function* sagas() {
  yield Object(effects_["all"])([saga(), saga_saga()]);
}
// CONCATENATED MODULE: ./store/index.js







const makeStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(reducers, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(sagaMiddleware)));
  sagaMiddleware.run(sagas);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore, {
  debug: false
});
// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_styled_components_["ThemeProvider"], {
  theme: src_theme,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
});

/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HLXa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCarrierList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCarrierListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCarrierListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addCarrierSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addCarrierError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateCarrierSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateCarrierError; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mOoA");

const getCarrierList = ({
  token,
  page
}) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* GET_CARRIER_LIST_STARTED */ "e"],
  payload: {
    token,
    page
  }
});
const getCarrierListSuccess = data => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* GET_CARRIER_LIST_SUCCEEDED */ "f"],
  payload: data
});
const getCarrierListError = error => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* GET_CARRIER_LIST_FAILED */ "d"],
  payload: error
});
const addCarrier = data => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_CARRIER_STARTED */ "b"],
  payload: data
});
const addCarrierSuccess = data => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_CARRIER_SUCCEEDED */ "c"],
  payload: data
});
const addCarrierError = error => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_CARRIER_FAILED */ "a"],
  payload: error
});
const updateCarrier = token => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_CARRIER_STARTED */ "h"],
  payload: token
});
const updateCarrierSuccess = data => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_CARRIER_SUCCEEDED */ "i"],
  payload: data
});
const updateCarrierError = error => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_CARRIER_FAILED */ "g"],
  payload: error
});

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "V31j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_LOGIN_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_LOGIN_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return USER_REGISTER_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_REGISTER_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return USER_REGISTER_FAILED; });
const USER_LOGOUT = 'USER_LOGOUT';
const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED';
const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
const USER_REGISTER_STARTED = 'USER_REGISTER_STARTED';
const USER_REGISTER_SUCCEEDED = 'USER_REGISTER_SUCCEEDED';
const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';

/***/ }),

/***/ "V4Hs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return registerError; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("V31j");

const logoutUser = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGOUT */ "d"]
});
const loginUser = ({
  username,
  password
}) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGIN_STARTED */ "b"],
  payload: {
    username,
    password
  }
});
const loginSuccess = data => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGIN_SUCCEEDED */ "c"],
  payload: data
});
const loginError = error => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGIN_FAILED */ "a"],
  payload: error
});
const registerUser = ({
  username,
  password,
  first_name,
  last_name,
  phone,
  email
}) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_REGISTER_STARTED */ "f"],
  payload: {
    username,
    password,
    first_name,
    last_name,
    phone,
    email
  }
});
const registerSuccess = token => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_REGISTER_SUCCEEDED */ "g"],
  payload: token
});
const registerError = error => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_REGISTER_FAILED */ "e"],
  payload: error
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "lCf4":
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "mOoA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CARRIER_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_CARRIER_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CARRIER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPDATE_CARRIER_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATE_CARRIER_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UPDATE_CARRIER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_CARRIER_LIST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_CARRIER_LIST_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_CARRIER_LIST_FAILED; });
const ADD_CARRIER_STARTED = 'ADD_CARRIER_STARTED';
const ADD_CARRIER_SUCCEEDED = 'ADD_CARRIER_SUCCEEDED';
const ADD_CARRIER_FAILED = 'ADD_CARRIER_FAILED';
const UPDATE_CARRIER_STARTED = 'UPDATE_CARRIER_STARTED';
const UPDATE_CARRIER_SUCCEEDED = 'UPDATE_CARRIER_SUCCEEDED';
const UPDATE_CARRIER_FAILED = 'UPDATE_CARRIER_FAILED';
const GET_CARRIER_LIST_STARTED = 'GET_CARRIER_LIST_STARTED';
const GET_CARRIER_LIST_SUCCEEDED = 'GET_CARRIER_LIST_SUCCEEDED';
const GET_CARRIER_LIST_FAILED = 'GET_CARRIER_LIST_FAILED';

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });