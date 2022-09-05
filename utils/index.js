export const pushUniqueValues = (array, value) => {
  array.push(value);
  return [...new Set(array)];
};
