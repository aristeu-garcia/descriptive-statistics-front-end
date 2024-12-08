// const VALUES = [160, 168, 174, 169, 180];
const VALUES = [
  160, 168, 174, 169, 180, 165, 173, 174, 170, 168, 172, 164, 164, 170, 167,
  178, 175, 165, 176, 165, 161, 170, 172, 179, 160, 177, 174, 167, 162, 171,
  177, 167, 163, 177, 165, 178, 170, 170, 174, 165, 166, 170, 170, 168, 178,
  166, 175, 176, 168, 167,
];
// let VALUES = [
//   14, 15, 15, 16, 14, 13, 16, 17, 14, 16, 14, 14, 13, 15, 16, 14, 15, 14, 16,
//   14, 15, 17, 16, 15, 16, 14, 15, 17, 15, 14, 15, 17, 17, 14, 15, 16, 14, 16,
//   13, 15,
// ];
// let VALUES = [
//   73.1, 78.3, 41.1, 0.7, 4.1, 72.9, 59.6, 81.9, 43.6, 47.3, 60.2, 25.9, 58.3,
//   37.3, 65.0, 17.7, 57.9, 52.9, 35.1, 23.7, 77.9, 90.1, 25.7, 60.0, 56.7, 43.6,
//   37.1, 96.2, 96.5, 91.5, 64.1, 5.3, 49.8, 46.0, 2.1, 58.6, 37.2, 76.9, 61.4,
//   38.3, 32.0, 52.0, 13.0, 81.6, 88.0, 51.7, 68.9, 93.5, 39.8, 13.3, 61.8, 55.6,
//   4.2, 26.5, 49.5, 42.7, 58.1, 53.4, 42.5, 8.0, 67.9, 95.0, 61.9, 94.6, 96.8,
//   47.9, 69.5, 45.8, 33.7, 94.6, 48.5, 9.3, 57.8, 38.4, 47.9, 63.1, 25.8, 69.4,
//   58.9, 39.5, 89.5, 26.1, 22.2, 8.6, 51.4, 60.9, 29.3, 44.1, 22.2, 68.0, 64.8,
//   48.7, 57.9, 58.9, 50.1, 21.5, 48.1, 71.6, 43.4, 73.1, 21.6, 27.1, 79.1, 74.3,
//   16.2, 52.2, 78.4, 41.9, 49.2, 36.7, 48.9, 31.1, 20.3, 74.1, 98.9, 84.8, 55.7,
//   95.2, 44.9, 43.8, 72.7, 19.5, 81.4, 42.6, 89.3, 34.2, 79.8, 37.8, 92.4, 20.6,
//   73.4, 71.0, 46.4, 43.7, 30.3, 28.9, 49.4, 72.5, 50.4, 89.0, 53.7, 60.5, 25.7,
//   99.0, 67.8, 0.9, 28.0, 93.6, 10.6, 29.1,
// ];

const calculateNumberClass = (values) => {
  const k = Math.ceil(Math.log2(values.length) + 1);
  return Math.abs(k);
};
const nextMultipleOfClass = (number, classNumber) => {
  return Math.ceil(number / classNumber) * classNumber;
};
const calculateSimpleFrequency = (values) => {
  const total = values.length;
  const valuesByQuantity = new Map();
  values.forEach((value) => {
    if (valuesByQuantity.has(value)) {
      return valuesByQuantity.set(value, valuesByQuantity.get(value) + 1);
    }
    return valuesByQuantity.set(value, 1);
  });

  return {
    frequency: Array.from(valuesByQuantity, ([value, frequency]) => ({
      value,
      frequency,
    })),
    total,
  };
};

const sortValues = (values) => {
  const sortedValues = [...values].sort((a, b) => a - b);
  console.log(
    "> Sorted values (rol):",
    sortedValues,
    "length: ",
    sortedValues.length
  );
  return sortedValues;
};

const caculateRange = (values, numberClass) => {
  console.log("------ Calculating range ------");
  const lastPostion = values.length - 1;
  console.log("> Max value: ", values[lastPostion], "Min value: ", values[0]);
  const range = values[lastPostion] - values[0];
  console.log("> Range: ", range);
  const rangeByClass = nextMultipleOfClass(range, numberClass);
  console.log("> Range by class (nextMultipleOfClass): ", rangeByClass);
  return rangeByClass;
};

const calculateAbsoluteFrequency = (listIntervals, values) => {
  listIntervals.forEach((interval, index) => {
    const { min, max } = interval.values;

    const valuesByRange = values.filter((value) =>
      index === listIntervals.length - 1
        ? value >= min && value <= max
        : value >= min && value < max
    );
    interval.absoluteFrequency = valuesByRange.length;
  });

  return listIntervals;
};

const calculateRelativeFrequency = (listIntervals, values) => {
  listIntervals.forEach((interval) => {
    interval.relativeFrequency = interval.absoluteFrequency / values.length;
  });

  return listIntervals;
};
const calculateInterval = (values, range, classNumber) => {
  const listIntervals = [];
  let lastValue = values[0];
  console.log(values);
  for (let index = 1; index <= classNumber; index++) {
    const intervalMin = parseInt(lastValue);
    const intervalMax = parseInt(lastValue + range / classNumber);
    lastValue = intervalMax;
    listIntervals.push({
      index,
      values: {
        min: intervalMin,
        max: intervalMax,
      },
    });
  }
  return listIntervals;
};

const calculateCumulativeFrequency = (listIntervals) => {
  let cumulativeFrequency = 0;
  listIntervals.forEach((interval) => {
    cumulativeFrequency += interval.absoluteFrequency;
    interval.cumulativeFrequency = cumulativeFrequency;
  });
  return listIntervals;
};

const calculateClassMiddlePoint = (listIntervals) => {
  listIntervals.forEach((interval) => {
    interval.classMiddlePoint = (interval.values.max + interval.values.min) / 2;
  });
  return listIntervals;
};

const init = () => {
  console.log("> Input values:", VALUES);
  const sortedValues = sortValues(VALUES);

  const numberClass = calculateNumberClass(sortedValues);

  const range = caculateRange(sortedValues, numberClass);

  let listIntervals = calculateInterval(sortedValues, range, numberClass);

  listIntervals = calculateAbsoluteFrequency(listIntervals, sortedValues);

  listIntervals = calculateRelativeFrequency(listIntervals, sortedValues);

  listIntervals = calculateCumulativeFrequency(listIntervals);

  listIntervals = calculateClassMiddlePoint(listIntervals);

  const table = listIntervals.map((interval) => {
    return {
      class: interval.index,
      values: `${interval.values.min} ⊢ ${interval.values.max}`,
      absoluteFrequency: interval.absoluteFrequency,
      relativeFrequency: interval.relativeFrequency,
      relativeFrequencyPercentage: interval.relativeFrequency * 100,
      cumulativeFrequency: interval.cumulativeFrequency,
      classMiddlePoint: interval.classMiddlePoint,
    };
  });
  table.absoluteFrequencyTotal = table.reduce(
    (total, item) => total + item.absoluteFrequency,
    0
  );
  table.relativeFrequencyTotal = table.reduce(
    (total, item) => total + item.relativeFrequencyPercentage,
    0
  );
  return {
    allDataTable: { table, values: VALUES, sortedList: sortedValues },
    simpleFrequency: calculateSimpleFrequency(sortedValues),
    table,
  };
};

export { init };
