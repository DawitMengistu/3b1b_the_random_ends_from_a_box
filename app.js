const length = 50;

let string = [
    Array.from({ length }, (_, i) => i + 1),
    Array.from({ length }, (_, i) => i + 51)
];
let copyString = [
    Array.from({ length }, (_, i) => i + 1),
    Array.from({ length }, (_, i) => i + 51)
];


const oneHundredResults = [];
for (let i = 0; i < 10000; i++) {
    string = [
        Array.from({ length }, (_, i) => i + 1),
        Array.from({ length }, (_, i) => i + 51)
    ];

    copyString = [
        Array.from({ length }, (_, i) => i + 1),
        Array.from({ length }, (_, i) => i + 51)
    ];

    while (string[0].length > 0 && string[1].length > 0) {
        tieString(string);
        if (string[0].length === 0 && string[1].length === 0) {
            // console.log("Done");
            // console.log("Final string: " + JSON.stringify(string));
            // console.log("Final copy: " + JSON.stringify(copyString), copyString[0].length);

            oneHundredResults.push(copyString[0].length);
        }
    }
}
console.log("Length", oneHundredResults.length);
console.log("smallest: " + Math.min(...oneHundredResults));
console.log("Biggest: " + Math.max(...oneHundredResults));
console.log("Average: " + oneHundredResults.reduce((a, b) => a + b, 0) / oneHundredResults.length);
function tieString(string) {
    const randomElementOne = selectRandomElement(string[0]);
    const randomElementTwo = selectRandomElement(string[1]);

    if (randomElementOne[1] === randomElementTwo[1]) {
        //    this means they're loop
        copyString[0][copyString[0].indexOf(randomElementOne[0])] = 0;
        copyString[1][copyString[1].indexOf(randomElementTwo[0])] = 0;

        // console.log();
        // console.log([copyString[0].indexOf(randomElementOne[0])], [copyString[1].indexOf(randomElementTwo[0])]);
        // console.log(randomElementOne, randomElementTwo);
        // console.log("------------");

        string[0].splice(randomElementOne[1], 1);
        string[1].splice(randomElementTwo[1], 1);



        // console.log("Looped elements: " + randomElementOne[0] + " and " + randomElementTwo[0]);
        // console.log("Updated string STRING: " + JSON.stringify(string));
        // console.log("Updated string COPY: " + JSON.stringify(copyString));



    } else {
        //   this means they're not loop so remove the element from the array

        copyString[0].splice(copyString[0].indexOf(randomElementOne[0]), 1);
        copyString[1].splice(copyString[1].indexOf(randomElementTwo[0]), 1);


        // console.log();
        // console.log([copyString[0].indexOf(randomElementOne[0])], [copyString[1].indexOf(randomElementTwo[0])]);
        // console.log(randomElementOne, randomElementTwo);
        // console.log("------------");


        string[0].splice(randomElementOne[1], 1);
        string[1].splice(randomElementTwo[1], 1);




        // console.log("Removed elements: " + randomElementOne[0] + " and " + randomElementTwo[0]);
        // console.log("Updated string STRING: " + JSON.stringify(string));
        // console.log("Updated string COPY: " + JSON.stringify(copyString));




    }
}


function selectRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);

    return [array[randomIndex], randomIndex];
}

