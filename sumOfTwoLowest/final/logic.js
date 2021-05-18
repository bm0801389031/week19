//function statement named sumTwoSmallestNumbers with parameter numbers
function sumTwoSmallestNumbers(numbers) {
    //sort method called on numbers with parameters of two letters
    // used to mean compare numbers, than the statemetnt of sort a - b
    // compare numbers
        numbers.sort((a,b) => a - b);
    /// return numbers at 0 index plus numbers at 1 index, this way we add the first
    //smalles integers to geather
        return numbers[0] + numbers [1];
    }
    
    