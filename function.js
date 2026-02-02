function analyzeNumbers(start, end) {
    let evenCount = 0;
    let oddCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = start; i <= end; i++) {

        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }


        if (i > 0) {
            positiveCount++;
        } else if (i < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    console.log("Total Even Numbers:", evenCount);
    console.log("Total Odd Numbers:", oddCount);
    console.log("Total Positive Numbers:", positiveCount);
    console.log("Total Negative Numbers:", negativeCount);
    console.log("Total Zeros:", zeroCount);
}

analyzeNumbers(1, 5);