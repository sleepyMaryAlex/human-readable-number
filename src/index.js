module.exports = function toReadable(number) {
    let arrNum = number.toString().split("");
    let arrWords = [];

    for (i = 0; i < arrNum.length; i++) {
        switch (arrNum[i]) {
            case "0":
                arrWords.push("zero");
                break;
            case "1":
                arrWords.push("one");
                break;
            case "2":
                arrWords.push("two");
                break;
            case "3":
                arrWords.push("three");
                break;
            case "4":
                arrWords.push("four");
                break;
            case "5":
                arrWords.push("five");
                break;
            case "6":
                arrWords.push("six");
                break;
            case "7":
                arrWords.push("seven");
                break;
            case "8":
                arrWords.push("eight");
                break;
            case "9":
                arrWords.push("nine");
                break;
        }
    }

    if (number.toString().length === 1) {
        return arrWords.join(" ");
    }

    function calc() {
        arrWords.splice(1, 0, "hundred");
        if (arrWords[2] === "one" && arrWords[3] === "zero") {
            arrWords.pop();
            arrWords[2] = "ten";
        }
        if (arrWords[2] === "one" && arrWords[3] === "one") {
            arrWords.pop();
            arrWords[2] = "eleven";
        }
        if (arrWords[2] === "one" && arrWords[3] === "two") {
            arrWords.pop();
            arrWords[2] = "twelve";
        }
        if (arrWords[2] === "one" && arrWords[3] === "three") {
            arrWords.pop();
            arrWords[2] = "thirteen";
        }
        if (arrWords[2] === "one" && arrWords[3] === "four") {
            arrWords.pop();
            arrWords[2] = "fourteen";
        }
        if (arrWords[2] === "one" && arrWords[3] === "five") {
            arrWords.pop();
            arrWords[2] = "fifteen";
        }
        if (arrWords[2] === "one" && arrWords[3] === "six") {
            arrWords.pop();
            arrWords[2] = "sixteen";
        }
        if (arrWords[2] === "one" && arrWords[3] === "seven") {
            arrWords.pop();
            arrWords[2] = "seventeen";
        }
        if (arrWords[2] === "one" && arrWords[3] === "eight") {
            arrWords.pop();
            arrWords[2] = "eighteen";
        }
        if (arrWords[2] === "one" && arrWords[3] === "nine") {
            arrWords.pop();
            arrWords[2] = "nineteen";
        }
        if (arrWords[2] === "two") {
            arrWords[2] = "twenty";
        }
        if (arrWords[2] === "three") {
            arrWords[2] = "thirty";
        }
        if (arrWords[2] === "four") {
            arrWords[2] = "forty";
        }
        if (arrWords[2] === "five") {
            arrWords[2] = "fifty";
        }
        if (arrWords[2] === "six") {
            arrWords[2] = "sixty";
        }
        if (arrWords[2] === "seven") {
            arrWords[2] = "seventy";
        }
        if (arrWords[2] === "eight") {
            arrWords[2] = "eighty";
        }
        if (arrWords[2] === "nine") {
            arrWords[2] = "ninety";
        }
        if (arrWords[2] === "zero") {
            arrWords.splice(2, 1);
        }
        if (arrWords[arrWords.length - 1] === "zero") {
            arrWords.pop();
        }
        return arrWords;
    }

    if (number.toString().length === 2) {
        arrWords.unshift("one");
        let result = calc(arrWords);
        result.shift();
        result.shift();
        return result.join(" ");
    }

    if (number.toString().length === 3) {
        let result = calc(arrWords);
        return result.join(" ");
    }
};
