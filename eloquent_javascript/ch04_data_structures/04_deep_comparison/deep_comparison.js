const deepEqual = (a, b) => {
  // both params have same type
  if (a === b) {
    return true;
  }

  // For deepEqual to proceed, params must be object and not null
  if (a === null || typeof a !== 'object' ||
    b === null || typeof b !== 'object') {
    return false;
  }

  // Count properties
  let propA = 0;
  let propB = 0;

  for (const property in a) {
    if (Object.prototype.hasOwnProperty.call(a, property)) {
      propA++;
    }
  }

  for (const property in b) {
    if (Object.prototype.hasOwnProperty.call(b, property)) {
      propB++;

      // Look up property in a, compare both values of property recursively
      if (!(property in a) || !(deepEqual(a[property], b[property]))) {
        return false;
      }
    }
  }

  // Do both objects have the same count of properties?
  return propA === propB;
};

deepEqual(2, 2); // true
deepEqual('4', 4); // false

deepEqual('Hello world!', 'Hello world!'); // true
deepEqual('Hello world!', 'hello world!'); // false

deepEqual({
  vegetables: true,
  measurements: {
    ounces: 12,
  },
}, {
  vegetables: true,
  measurements: {
    ounces: 12,
  },
}); // true

deepEqual({
  vegetables: true,
  measurements: {
    ounces: 9,
  },
}, {
  vegetables: true,
  measurements: {
    ounces: 12,
  },
}); // false
