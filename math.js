function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}


function generateStr(length) {
    const variable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const randomArray = Array.from(
        {length: length},
        () => variable[Math.floor(Math.random() * variable.length)]
    );

    const randomStr = randomArray.join("");
    return randomStr;
};


function randomArray(length, max, min) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * (max - min) + min);
    });
}

module.exports = {
    randomNumber:randomNumber,
    generateStr:generateStr,
    randomArray:randomArray
}