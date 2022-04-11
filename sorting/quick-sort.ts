export function quicksort(array) {
  //[10, 5, 2, 3]
  if (array.length === 0) {
    return [];
  }
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    let lessArr = [];
    let greaterArr = [];
    for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] < pivot) {
        lessArr.push(array[i]);
      } else if (array[i] > pivot) {
        greaterArr.push(array[i]);
      }
    }
    console.log('lessArr', lessArr);
    console.log('greaterArr', greaterArr);
    return [quicksort(lessArr).flat(), pivot, quicksort(greaterArr).flat()];
  }
}
