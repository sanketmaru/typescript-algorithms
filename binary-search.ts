// [1,2,3,4,5,6,7,8,9,10]
// item is 7
export function binarySearch(list, item) {
  let low = 0; // 0 5 5 6
  let high = list.length - 1; // 9 9 6 6
  let counter = 1;
  let mid: number = 0;
  while (low <= high) {
    ++counter;
    // while its not narrowed to 1 element
    mid = Math.floor((low + high) / 2); // 4 7 5 6
    console.log('mid', mid);
    let guessNo = list[mid]; // 5 8 6 7

    if (guessNo === item) {
      return mid;
    } else if (guessNo > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log('Times Ran', counter);
  return mid;
}

/**
 * Big O notation is special notation that tells you how fast an algorithm is.
 * Big O tells you the number of operations an algorithm will make.
 * 
 * O(log n), also known as log time. Example: Binary search.
   O(n), also known as linear time. Example: Simple search.
   O(n * log n). Example: A fast sorting algorithm, like quicksort (coming up in chapter 4).
   O(n2). Example: A slow sorting algorithm, like selection sort (coming up in chapter 2).
   O(n!). Example: A really slow algorithm, like the traveling salesperson (coming up next!.
 * 
 */

/**
 * Exercises
 * 
 * 1.3
    You have a name, and you want to find the person’s phone number in the phone book.


    1.4

    You have a phone number, and you want to find the person’s name in the phone book. (Hint: You’ll have to search through the whole book!)


    1.5

    You want to read the numbers of every person in the phone book.


    1.6

    You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer—you may be surprised!)
 */
