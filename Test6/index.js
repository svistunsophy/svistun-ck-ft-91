class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);

    const commonEl = arr2.filter(element => set1.has(element));
    return commonEl;
}

function countOccurrences(arr) {
    const fMap = new Map();

    for (const el of arr) {
        if (fMap.has(element)) {
            fMap.set(element, fMap.get(element) + 1);
        } 
        else {
            fMap.set(element, 1);
        }
    }
    return fMap;
}

function findBiggestGroup(students) {
    const groupCounts = new Map();

    students.forEach(student => {
        const cCount = groupCounts.get(student.group) || 0;
        groupCounts.set(student.group, cCount + 1);
    });let biggestGroupSize = 0;
    let biggestGroup = null;

    groupCounts.forEach((count, group) => {
        if (count > biggestGroupSize) {
            biggestGroupSize = count;
            biggestGroup = group;
        }
    });

    return {biggestGroup, biggestGroupSize};
}