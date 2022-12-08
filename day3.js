const testRucksacks = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const test = testRucksacks.split('\n');

const sampleRucksack = 'vJrwpWtwJgWrhcsFMMfFFhFp';

const findCommonItem = (rucksack) => {
    const halfIndex = rucksack.length / 2;
    const [firstHalf, secondHalf ] = [
        rucksack.slice( 0, halfIndex ),
        rucksack.slice( halfIndex )
    ]

    const firstHalfSet = new Set(firstHalf);

    const commonItems = [...secondHalf].find((item) =>
        firstHalfSet.has(item)
    );

    return commonItems;
}

console.log(findCommonItem(sampleRucksack));