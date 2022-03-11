const sumAll = function(startNum, endNum) {
    let sum = 0;
    if (typeof startNum != 'number' || typeof endNum != 'number' || 
        startNum < 0 || endNum < 0) 
        {
            return "ERROR";
        }
    
    const smallest = (startNum > endNum) ? endNum : startNum;
    const largest = (startNum > endNum) ? startNum : endNum;

    for (let i = smallest; i <= largest; i++){
        sum += i;
    }   
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
