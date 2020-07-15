var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

var _lib = require('../lib');

var _mockComponent = require('./mock-component');

var _mockScrollView = require('./mock-scroll-view');

var _mockRefreshControl = _interopRequireDefault(require('./mock-refresh-control'));

(0, _lib.getConfig)('coreComponents').forEach(function(component) {
  try {
    jest.unmock(component);
  } catch (e) {}
});
jest.unmock('react-native/Libraries/Renderer/shims/ReactNative');
(0, _lib.getConfig)('coreComponents').forEach(function(component) {
  try {
    jest.doMock(component, function() {
      return (0, _mockComponent.mockComponent)(component);
    });
  } catch (e) {}
});
jest.doMock('react-native/Libraries/Components/Picker/Picker', function() {
  var React = jest.requireActual('react');
  var Picker = (0, _mockComponent.mockComponent)('react-native/Libraries/Components/Picker/Picker');

  Picker.Item = function(_ref) {
    var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ['children']);
    return React.createElement('Picker.Item', props, children);
  };

  return Picker;
});
jest.doMock('react-native/Libraries/Components/ScrollView/ScrollView', function() {
  var baseComponent = (0, _mockComponent.mockComponent)(
    'react-native/Libraries/Components/ScrollView/ScrollView',
    {
      instanceMethods: {
        getScrollResponder: jest.fn(),
        getScrollableNode: jest.fn(),
        getInnerViewNode: jest.fn(),
        getInnerViewRef: jest.fn(),
        getNativeScrollRef: jest.fn(),
        scrollTo: jest.fn(),
        scrollToEnd: jest.fn(),
        flashScrollIndicators: jest.fn(),
        scrollResponderZoomTo: jest.fn(),
        scrollResponderScrollNativeHandleToKeyboard: jest.fn(),
      },
    },
  );
  return (0, _mockScrollView.mockScrollView)(baseComponent);
});
jest.doMock('react-native/Libraries/Components/RefreshControl/RefreshControl', function() {
  return _mockRefreshControl.default;
});
jest.doMock('react-native/Libraries/Components/TextInput/TextInput', function() {
  return (0,
  _mockComponent.mockComponent)('react-native/Libraries/Components/TextInput/TextInput', {
    instanceMethods: {
      isFocused: jest.fn(),
      clear: jest.fn(),
      getNativeRef: jest.fn(),
    },
  });
});
jest.doMock('react-native/Libraries/Components/Touchable/TouchableHighlight', function() {
  return (0,
  _mockComponent.mockComponent)('react-native/Libraries/Components/Touchable/TouchableHighlight', {
    displayName: 'TouchableHighlight',
  });
});
jest.doMock('react-native/Libraries/Components/Touchable/TouchableOpacity', function() {
  return (0,
  _mockComponent.mockComponent)('react-native/Libraries/Components/Touchable/TouchableOpacity', {
    displayName: 'TouchableOpacity',
  });
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Renderer/shims/ReactNative');
jest.mock('react-native/Libraries/LogBox/LogBox');
