define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    if (typeof configCallback === 'function') {
      configCallback();
    } else {}
  }

  var Config = exports.Config = {
    foo: { bar: 'baz' }
  };
});