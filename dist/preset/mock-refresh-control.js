var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _jsxFileName = '/Users/dave/git/native-testing-library/src/preset/mock-refresh-control.js';

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

var React = require('react');

var requireNativeComponent = jest.requireActual(
  'react-native/Libraries/ReactNative/requireNativeComponent',
);
var RCTRefreshControl = requireNativeComponent('RCTRefreshControl');

var RefreshControlMock = (function(_React$Component) {
  (0, _inherits2.default)(RefreshControlMock, _React$Component);

  var _super = _createSuper(RefreshControlMock);

  function RefreshControlMock() {
    (0, _classCallCheck2.default)(this, RefreshControlMock);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RefreshControlMock, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        RefreshControlMock.latestRef = this;
      },
    },
    {
      key: 'render',
      value: function render() {
        return React.createElement(RCTRefreshControl, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 12,
          },
        });
      },
    },
  ]);
  return RefreshControlMock;
})(React.Component);

module.exports = RefreshControlMock;
