function shellSort(students) {
    const n = students.length;  
    let g = Math.floor(n / 2);

    while (g > 0) {
        for (let i = g; i < n; i++) {
            let temp = students[i];
            let j = i;
            
            while (j >= g && students[j - g].averageMark > temp.averageMark) {
                students[j] = students[j - g];
                j -= g;
            }
            students[j] = temp;
        }
        g = Math.floor(gap / 2);
    }
    return students;
}