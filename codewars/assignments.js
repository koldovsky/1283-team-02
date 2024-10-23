// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
// solution | Andrii Ferenchuk

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make negative https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// solution | Andrii Ferenchuk

function makeNegative(num) {
    return num >= 0 ? num * (-1) : num;
}

// Game Move  https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
// solution | Andrii Ferenchuk

function move(position, roll) {
    return position + roll * 2;
}

// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
// solution | Andrii Ferenchuk

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
// solution | Andrii Ferenchuk

function litres(time) {
    return Math.floor(time * (0.5));
}

// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// solution | Andrii Ferenchuk


// tasks-2
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
    return string.split(' ')
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
}
// console.log(DNAtoRNA("GCAT"));

https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
    list.sort((a, b) => a - b)
    return list[0]
}

var max = function (list) {
    list.sort((a, b) => b - a)
    return list[0];
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
    return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(sonYearsOld * 2 - dadYearsOld)
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
    const array = [];
    for (let i = 0; i < n * 2; i++) {
        array.push(i);
    }
    return array.filter((el) => el % 2 === 0)[n - 1];
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
    if (n < 0) {
        return n;
    } else if (n > 0 && n < 13) {
        return n - 1;
    } else if (n >= 13) {
        return n - 2;
    } else {
        return 0;
    }
}

console.log(getRealFloor(15));

