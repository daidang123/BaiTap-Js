
// <!-- Bai tap js--> Xóa các phần tử trùng lặp 


const array = [1, 2, 3, 4, 5, 6, 2, 3];
const counts = {};

// Đếm số lần xuất hiện của từng phần tử trong mảng
for (const element of array) {
  if (counts[element]) {
    counts[element]++;
  } else {
    counts[element] = 1;
  }
}

// Xóa các phần tử xuất hiện nhiều hơn một lần trong mảng
const result = array.filter(element => counts[element] === 1);

console.log(result);  //Output: [1, 4, 5, 6]









// <!-- Bai tap js--> Viết một hàm nhận vào một mảng các số nguyên và thực hiện các yêu cầu sau:

// Tìm số lớn thứ hai trong mảng.
// Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần.
// Tính tổng của các số chẵn trong mảng.


const myArray = [1, 2, 3, 4, 5, 6, 2, 3];

// Tìm số lớn thứ hai trong mảng
const uniqueArray = [...new Set(myArray)];
const sortedArray = uniqueArray.sort((a, b) => b - a);
const secondLargest = sortedArray[1];
console.log(secondLargest);

// Sắp xếp mảng theo thứ tự tăng dần
const ascendingArray = [...myArray].sort((a, b) => a - b);
console.log(ascendingArray);

// Sắp xếp mảng theo thứ tự giảm dần
const descendingArray = [...myArray].sort((a, b) => b - a);
console.log(descendingArray);

// Tính tổng các số chẵn trong mảng
const evenSum = myArray.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
console.log(evenSum);


  



