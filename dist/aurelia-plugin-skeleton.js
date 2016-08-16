
export function configure(aurelia, configCallback) {
  if (typeof configCallback === 'function') {
    configCallback();
  } else {
	// config(configCallback);
  }
}

export let Config = {
  foo: {bar: 'baz'}
}
