var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.mockComponent = mockComponent;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _react = _interopRequireDefault(require('react'));

var _mockNativeMethods = require('./mock-native-methods');

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

function mockComponent(path) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    instanceMethods = _ref.instanceMethods,
    customDisplayName = _ref.displayName;

  var RealComponent = jest.requireActual(path);
  var displayName =
    customDisplayName ||
    RealComponent.displayName ||
    RealComponent.name ||
    (RealComponent.render
      ? RealComponent.render.displayName || RealComponent.render.name
      : 'Unknown');
  var SuperClass = typeof RealComponent === 'function' ? RealComponent : _react.default.Component;

  var Component = (function(_SuperClass) {
    (0, _inherits2.default)(Component, _SuperClass);

    var _super = _createSuper(Component);

    function Component() {
      (0, _classCallCheck2.default)(this, Component);
      return _super.apply(this, arguments);
    }

    (0, _createClass2.default)(Component, [
      {
        key: 'render',
        value: function render() {
          var _this = this;

          var props = (0, _extends2.default)({}, RealComponent.defaultProps);

          if (this.props) {
            Object.keys(this.props).forEach(function(prop) {
              if (_this.props[prop] !== undefined) {
                props[prop] = _this.props[prop];
              }
            });
          }

          return _react.default.createElement(displayName, props, this.props.children);
        },
      },
    ]);
    return Component;
  })(SuperClass);

  Component.displayName = displayName;
  Object.keys(RealComponent).forEach(function(classStatic) {
    Component[classStatic] = RealComponent[classStatic];
  });
  (0, _extends2.default)(Component.prototype, _mockNativeMethods.mockNativeMethods);

  if (instanceMethods != null) {
    (0, _extends2.default)(Component.prototype, instanceMethods);
  }

  return Component;
}
