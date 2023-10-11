// 1768. Merge Strings Alternately
function mergeAlternately(word1, word2) {
    let result = "";
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    return result;
}

mergeAlternately("sakib", "hasan");

// 1071. Greatest Common Divisor of Strings
function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    const str1Length = str1.length;
    const str2Length = str2.length;
    function calculate(a, b) {
        if (!b) return a;
        return calculate(b, a % b);
    }
    let result = calculate(str1Length, str2Length);
    return str1.slice(0, result);
}
gcdOfStrings("ABCABC", "ABC");

//1431. Kids With the Greatest Number of Candies
function kidsWithCandies(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map((candy) => candy + extraCandies >= max);
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

//605. Can Place Flowers
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            flowerbed[i - 1] !== 1 &&
            flowerbed[i + 1] !== 1
        ) {
            count++;
            flowerbed[i] = 1;
        }
    }
    return count >= n;
}

// 345. Reverse Vowels of a String
function reverseVowels(s) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const letters = s.split("");
    let leftPointer = 0;
    let rightPointer = letters.length - 1;
    for (let i = 0; i < letters.length; i++) {
        if (leftPointer >= rightPointer) {
            break;
        }
        if (!vowels.has(letters[leftPointer])) {
            leftPointer++;
            continue;
        }
        if (!vowels.has(letters[rightPointer])) {
            rightPointer--;
            continue;
        }
        let temp = letters[leftPointer];
        letters[leftPointer] = letters[rightPointer];
        letters[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
    return letters.join("");
}

console.log(reverseVowels("leetcode")); // leotcede
