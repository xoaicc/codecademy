const data = {
    timeInDay: ["morning", "afternoon", "evening", "night"],
    proverbsNum: [0, 1, 3],
    engProverbs: ["Many hands make light work",
    "Strike while the iron is hot",
    "Honesty is the best policy",
    "The grass is always greener on the other side of the fence",
    "Don\'t judge a book by its cover", 
    "An apple a day keeps the doctor away",
    "Better late than never",
    "Don\'t bite the hand that feeds you",
    "Rome wasn\'t built in a day",
    "Actions speak louder than words"]
};

const getRandNum = (max) => Math.floor(Math.random() * max);

const engProverbGenerator = object => {
    const repeatTimes = object.proverbsNum[getRandNum(object.proverbsNum.length)];

    const proverbsArray = [];
    for (let i = 0; i < repeatTimes; i++) {
        proverbsArray.push(object.engProverbs[getRandNum(object.engProverbs.length)]);
    }

    return `Good ${object.timeInDay[getRandNum(object.timeInDay.length)]},
    Today, we have ${repeatTimes} english proverbs for you: \"${repeatTimes === 0 ? "=))" : proverbsArray.join(", ")}\".
    Goodluck!`;
}

console.log(engProverbGenerator(data));