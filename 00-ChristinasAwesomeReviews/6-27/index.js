const matrix = new Array(9).fill(new Array(9).fill(0));

matrix[2][3] = "cat";

//console.log(matrix);

const matrix2 = [];

for (let i = 0; i < 9; i++) {
    matrix2[i] = [0,0,0,0,0,0,0,0,0]
}
matrix2[2][3] = "cat";

console.log(matrix2);

const matrix3 = new Array(9);
for (let i = 0; i < 9; i++) {
    matrix3[i] = [0,0,0,0,0,0,0,0,0]
}
matrix3[2][3] = "cat";
console.log(matrix3);