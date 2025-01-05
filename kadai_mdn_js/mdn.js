// const date = Date().getDate;
const now = new Date();

// 現在の年
const year = now.getFullYear();

// 現在の月
const month = 1 + now.getMonth();

// 現在の日
const day = now.getDate();

console.log(year + '年' + month + '月' + day + '日');