const nextElementInList = <T>(list: T[], value: T): T => {
  const currentValueIdx = list.indexOf(value);
  const nextValueIdx = (currentValueIdx + 1) % list.length;
  const nextValue = list[nextValueIdx];
  return nextValue;
};
export default nextElementInList;
