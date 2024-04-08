const getTheTitles = function(item) {
    return item.reduce((acc, currentValue) => {
        acc.push(currentValue.title);
        return acc;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
