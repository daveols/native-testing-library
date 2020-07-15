var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.mockScrollView = mockScrollView;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _react = _interopRequireDefault(require('react'));

var _jsxFileName = '/Users/dave/git/native-testing-library/src/preset/mock-scroll-view.js';

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

var View = require('react-native/Libraries/Components/View/View');

var requireNativeComponent = jest.requireActual(
  'react-native/Libraries/ReactNative/requireNativeComponent',
);
var RCTScrollView = requireNativeComponent('RCTScrollView');

function mockScrollView(BaseComponent) {
  var ScrollViewMock = (function(_BaseComponent) {
    (0, _inherits2.default)(ScrollViewMock, _BaseComponent);

    var _super = _createSuper(ScrollViewMock);

    function ScrollViewMock() {
      (0, _classCallCheck2.default)(this, ScrollViewMock);
      return _super.apply(this, arguments);
    }

    (0, _createClass2.default)(ScrollViewMock, [
      {
        key: 'render',
        value: function render() {
          return _react.default.createElement(
            RCTScrollView,
            (0, _extends2.default)({}, this.props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 9,
              },
            }),
            this.props.refreshControl,
            _react.default.createElement(
              View,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 11,
                },
              },
              this.props.children,
            ),
          );
        },
      },
    ]);
    return ScrollViewMock;
  })(BaseComponent);

  return ScrollViewMock;
}
