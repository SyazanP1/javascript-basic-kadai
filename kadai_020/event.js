// ボタン要素を取得する
const btnClick = document.getElementById('btn');

// h2要素を取得する
const textMessage = document.getElementById('text');

// ボタンがクリックされたとき、h2の内容を書き換える
btnClick.addEventListener('click', () => {
  textMessage.textContent = 'ボタンをクリックしました';
});