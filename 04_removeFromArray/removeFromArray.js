const removeFromArray = function(arr, ...toRemove) {
    for (item of toRemove){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === item){
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
