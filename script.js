// Good Luck 💪🏾
function plusHashCount(str) {
    // Initialize counters for hashes and pluses
    let hashCount = 0;
    let plusCount = 0;

    // Loop through each character in the string
    for (let char of str) {
        if (char === '#') {
            hashCount++;
        } else if (char === '+') {
            plusCount++;
        }
    }

    // Return an array with the counts
    return [hashCount, plusCount];
}

// Examples
console.log(plusHashCount("###+")); // ➞ [1, 3]
console.log(plusHashCount("##+++#")); // ➞ [3, 3]
console.log(plusHashCount("#+++#+#++#")); // ➞ [6, 4]
console.log(plusHashCount("")); // ➞ [0, 0]