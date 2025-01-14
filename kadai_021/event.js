// ボタン要素を取得する
const btn = document.getElementById('btn');

// h2要素を取得する
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  // 2秒後に処理を実行（非同期処理）
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});