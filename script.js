// 1. Even and Odd Sum
function sumEvenOdd(numbers) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let num of numbers) {
      if (num % 2 === 0) {
        evenSum += num;
      } else {
        oddSum += num;
      }
    }
  
    return [evenSum, oddSum];
  }
  
  console.log(sumEvenOdd([1, 2, 3, 4, 5])); // Expected output: [6, 9]
  
  
  // 2. Temperature Converter
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  console.log(fahrenheitToCelsius(32));  // Expected output: 0
  console.log(celsiusToFahrenheit(0));   // Expected output: 32
  
  
  // 3. Reverse a String
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("JavaScript"));  // Expected output: "tpircSavaJ"
  
  
  // 4. Calculate Average and Median
  function averageAndMedian(numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num);
    const average = sum / numbers.length;
  
    numbers.sort((a, b) => a - b);
    let median;
    const mid = Math.floor(numbers.length / 2);
  
    if (numbers.length % 2 === 0) {
      median = (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
      median = numbers[mid];
    }
  
    return { average, median };
  }
  
  console.log(averageAndMedian([10, 20, 30, 40, 50]));  // Expected output: { average: 30, median: 30 }
  
  
  // 5. Count Vowels in a String
  function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels("JavaScript")); // Expected output: 3
  