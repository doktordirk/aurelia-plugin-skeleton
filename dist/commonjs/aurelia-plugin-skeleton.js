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

var config = exports.config = {
  foo: { bar: 'baz' }
};