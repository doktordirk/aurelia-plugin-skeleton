'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var config;
  function configure(aurelia, configCallback) {
    if (typeof configCallback === 'function') {
      configCallback();
    } else {}
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {
      _export('config', config = {
        foo: { bar: 'baz' }
      });

      _export('config', config);
    }
  };
});