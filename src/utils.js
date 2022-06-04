export const isRectangularArrayOfColors = (arr) => {
  if (!(Array.isArray(arr) && arr.length)) return false; // is an array
  let rowLen = arr[0].length;
  for (let arrRow of arr) {
    if (
      !(
        Array.isArray(arrRow) &&
        arrRow.length === rowLen &&
        arrRow.every(
          (rgbColor) =>
            Array.isArray(rgbColor) &&
            rgbColor.length === 3 &&
            rgbColor.every((c) => c >= 0 && c <= 255)
        )
      )
    )
      return false; // each subarray is an array is an array
  }
  return true;
};

export const defaultPicture = (n = 30) => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let newArr = [];
    for (let j = 0; j < n; j++)
      newArr.push(new Array(3).fill(((i + j) % 2) * 255));
    arr.push(newArr);
  }
  console.log(arr);
  return arr;
};
