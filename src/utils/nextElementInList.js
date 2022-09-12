const nextElementInList = (list, value) => {
  const currentActionIdx = list.indexOf(value);
  const nextValueIdx = (currentActionIdx + 1) % list.length;
  const nextValue = list[nextValueIdx];
  return nextValue;
};
export default nextElementInList;
