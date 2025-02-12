function processArray (arr) {
    let k = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            k++;
        }
    }

    return k;
}

function sumNegativeElements(matrix) { 
    const nRows = matrix.length;
    const nCols = matrix[0].length;

    const sum = Array(nCols).fill(0);

    for (let row = 0; row < nRows; row++) {
        for (let col = 0; col < nCols; col++) {
            if (matrix[row][col] < 0) {
                sum[col] += matrix[row][col];
            }
        }
    }
    return sum;
}