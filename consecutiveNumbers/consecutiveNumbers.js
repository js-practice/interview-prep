/**
 * Write a function that takes an array of integers from 1 to n with one number missing and finds the missing number
 *
 * Example:
 * var millionSortedArray = numberGen(1000000, true);  //gives you a sorted array with a random missing number
 * var millionRandomArray = numberGen(1000000, false);  //gives you a random array with a random missing number
 *
 * consectutiveNumbers(millionSortedArray);  //should return the missing number
 * consectutiveNumbers(millionRandomArray);  //should return the missing number
 *
 * Bonus:
 * use a data structure to do it (Linear time complexity)
 * use no data structures to do it (Zero space complexity)
 */

 var consecutiveNumbers = function(array){
   // TODO: implement solution
 };




 //this funciton generates the array for you, no need to modify this but feel free to look

 var numberGen = function(length, sorted){
   /**
    * @param length: integer length of the array
    * @param sorted: boolean value returns either a sorted or unsorted array
    */
    var array = [];


    var randomMissingNumber = Math.random() * length;

    for (var i = 1; i <= length; i++){
      if (i !== randomMissingNumber){
        array.push(i);
      }
    }
    if (!sorted){
      for (var i = 0; i < array.length; i++){
        var shuffleSpot = Math.floor(Math.random() * (array.length-ii)) + i;
        var temp = array[i];
        array[i] = array[shuffleSpot];
        array[shuffleSpot] = temp;
      }
    }

    return array;
 };
