
export function configure(aurelia, configCallback) {
  if (typeof configCallback === 'function') {
    configCallback();
  } else {}
}

export let config = {
  foo: { bar: 'baz' }
};