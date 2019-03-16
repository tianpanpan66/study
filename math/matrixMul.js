// 矩阵乘法

let matrixA = { 
    row: 2,
    col: 3,
    data: [1, 3, 2, 5, 4, 7] 
};
let matrixB = { 
    row: 3,
    col: 2,
    data: [1, 3, 2, 5, 4, 7] 
};
// 把一维数组根据行列转换为多维数组
function transMatrix(matrix) {
    let newArr = [];
    for(let i = 0; i < matrix.row; i++) {
        let rowArr = [];
        for(let j = 0; j < matrix.col; j++) {
            rowArr.push(matrix.data[j + i * matrix.col]);
        }
        newArr.push(rowArr);
    }
    // console.log(newArr);
    return newArr;
}

/*
 [1,3,2]      1 3
 [5,4,7]      2 5
              4 7
*/
function matrixMult(ma, mb) {
    if(ma.col !== mb.row){
        return '非法乘法';
    }
    let arr = [];
    let maD = transMatrix(ma);
    let mbD = transMatrix(mb);
    // i 行的索引
    for(let i = 0; i < ma.row; i++) {
        // j 列的索引
        for(let j = 0; j < mb.col; j++) {
            let sum = 0;
            for(let k = 0; k < ma.col; k++) {
                sum += maD[i][k] * mbD[k][j];
            }
            arr.push(sum);
        }
    }


    let mc = {row: ma.row, col: mb.col, data: arr}; 
    // TODO
    let newMc = transMatrix(mc);
    console.log(mc, newMc, '----');
    return mc; 
}

matrixMult(matrixA, matrixB);

// transMatrix(matrixB);
