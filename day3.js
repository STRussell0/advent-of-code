const testRucksacks = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const test = testRucksacks.split('\n');

const sampleRucksack = 'vJrwpWtwJgWrhcsFMMfFFhFp';

const findCommonItem = (rucksack) => {
    //Split the rucksack into two equal sized pieces
    const halfIndex = rucksack.length / 2;
    const [firstHalf, secondHalf ] = [
        rucksack.slice( 0, halfIndex ),
        rucksack.slice( halfIndex )
    ]
    //Converts firsthalf string into an object that only lists a value once
    const firstHalfSet = new Set(firstHalf);
    /*Find which characters of the second half are in the first half
    [...] will convert the variable into an array so that we can use array methods
    */
    const commonItems = [...secondHalf].find((item) =>
        firstHalfSet.has(item)
    );
    //Return the character
    return commonItems;
};
//Convert letters into priority numbers
const getPriority = (letter) => letter.charCodeAt() - 96;

console.log(getPriority('b'));