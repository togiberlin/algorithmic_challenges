const arrayAdditionI = (arr) => {
  const max = Math.max(...arr);
  const input = arr.sort((a, b) => {
    return a - b;
  }).slice(0, arr.length - 1);

  let result = false;

  const calculateResult = (sets) => {
    const sums = sets.map((set) => {
      return set.reduce((a, b) => {
        return a + b;
      }, 0);
    });

    return result = sums.includes(max);
  };

  const generatePowerSets = (superset) => {
    try {
      const generatedPowerSets = superset.reduce((subsets, value) => {
        return subsets.concat(subsets.map((set) => {
          return [value, ...set];
        }));
      }, [[]]);

      return calculateResult(generatedPowerSets);
    } catch (err) {
      return err;
    }
  };

  generatePowerSets(input);

  return result;
};

module.exports = arrayAdditionI;
