const findTheOldest = function(people) {
    let oldy = people.reduce((acc, nextItem) => {
        let accAge = acc.yearOfDeath ? acc.yearOfDeath - acc.yearOfBirth : 2024 - acc.yearOfBirth;
        let nextAge = nextItem.yearOfDeath ? nextItem.yearOfDeath - nextItem.yearOfBirth : 2024 - nextItem.yearOfBirth;
        return accAge >= nextAge ? acc : nextItem;
    }, people[0]);
    return oldy;
}

// Do not edit below this line
module.exports = findTheOldest;
