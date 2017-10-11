/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var numOfGuesses = 1;
    
    while(min <= max){
      
		guess = Math.floor((min + max) / 2);
		//guess = Math.floor(guess); 

		console.log("Guess:" + guess);
		if (array[guess] === targetValue){
		    console.log("Total number of Guesses:" + numOfGuesses);
			console.log("Target Value:" +targetValue);
			return guess;
		}else if(array[guess] < targetValue){
			min = guess + 1;
		}else{
			max = guess - 1;
		}
		numOfGuesses++;
		count++;

	}
    


	return -1;
};
var count = 0;
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 1);

console.log("Found prime at index " + result);
console.log(count);
// Program.assertEqual(doSearch(primes, 73), 20);
// Program.assertEqual(doSearch(primes, 2), 0);
// Program.assertEqual(doSearch(primes, 97), 24);

