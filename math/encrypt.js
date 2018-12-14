/*
比如说我们要加密一组三位数，那我们设定一个这样的加密规则：
    1、先对每个三位数的个、十和百位数，都加上一个较大的随机数。
    2、然后将每位上的数都除以 7，用所得的余数代替原有的个、十、百位数；
    3、最后将第一位和第三位交换。
*/
const Max = 30;
const Multiple = 7;
let exportArr = [];
// 个人理解是 这个商的数组也是相当与密钥的一部分 需要传给解密方

encrypteNum(653, Max, Multiple);
deEncrypteNum(501, Max, Multiple, [5,5,4]);
function  encrypteNum(num, max, multiple) {
    console.log('加密前数字：' + num);
    // 先 取出来 个位 食位 百位
    let onesDigit = num % 10;
    let tensDigit = parseInt(num % 100 / 10);
    let hundredsDigit = parseInt(num % 1000 / 100);
    let arr = [hundredsDigit, tensDigit, onesDigit];
    arr.forEach((item, i) => {
        // add max
        item += max;
        exportArr[i] = parseInt(item / multiple);
        //  % 7
        item = item % multiple;
        arr[i] = item;
    })
    // 3、最后将第一位和第三位交换。
    let temp = arr[0];
    arr[0] = arr[2];
    arr[2] = temp;
    let newNum = '';
    arr.forEach(item => {
        newNum += item;
    });
    console.log('加密后数字：' + Number(newNum));
}

function deEncrypteNum(num, max, multiple, deArr) {
    console.log('解密前数字：' + Number(num));
    let onesDigit = num % 10;
    let tensDigit = parseInt(num % 100 / 10);
    let hundredsDigit = parseInt(num % 1000 / 100);
    // 1、最后将第一位和第三位交换。
    let arr = []; 
    arr = [onesDigit, tensDigit, hundredsDigit];
    // 2、然后将每个数乘解密数组的中的商后 加上本身；
    let newNum = '';
    arr.forEach((item, index) => {
        item = deArr[index] * multiple + item;
        // 1 减去随机数。
        arr[index] = item - max;
        newNum += arr[index];
    });
    console.log('解密后数字：' + Number(newNum));
}
    
   



