
export function configure(aurelia, configCallback) {
  if (typeof configCallback === 'function') {
    configCallback();
  } else {}
}

export var config = {
  foo: { bar: 'baz' }
};