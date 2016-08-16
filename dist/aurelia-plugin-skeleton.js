
export function configure(aurelia, configCallback) {
  if (typeof configCallback === 'function') {
    configCallback();
  } else {
	// config(configCallback);
  }
}

export let config = {
  foo: {bar: 'baz'}
}
