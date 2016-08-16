'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Config;
  function configure(aurelia, configCallback) {
    if (typeof configCallback === 'function') {
      configCallback();
    } else {}
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {
      _export('Config', Config = {
        foo: { bar: 'baz' }
      });

      _export('Config', Config);
    }
  };
});