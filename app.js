//最初のページ
//”はじめる”を押下すると初期ページを非表示にして質問１を表示する
  document.getElementById('start-button').addEventListener('click', function() {
    // 質問コンテナを表示し、開始ボタンを非表示にする
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    alert('アンケートを開始します')
  });

  //質問1
  //"次へ"を押下すると質問2が表示される　以降同じ処理
  document.getElementById('next-button').addEventListener('click', function() {
    // 選択された回答を取得
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    // 選択があれば次の質問に進む処理を実行
    if (selectedAnswer) {
        document.getElementById('question-container').style.display ='none';
        document.getElementById('question-container2').style.display='block';
        window.selectedValue1 = selectedAnswer.value;
      // ここで選択された回答に基づいて次の質問を表示するロジックを実装
    } else {
      // 選択がない場合はアラートを表示
      alert('回答を選択してください。');
    }
  });
//質問2
  document.getElementById('next-button2').addEventListener('click', function() {
    let selectedAnswer = document.querySelector('input[name="answer2"]:checked');

    if (selectedAnswer) {
        document.getElementById('question-container2').style.display ='none';
        document.getElementById('question-container3').style.display='block';
        window.selectedValue2 = selectedAnswer.value;
    } else {
      alert('回答を選択してください。');
    }
  });
//質問3
document.getElementById('next-button3').addEventListener('click', function() {
  let selectedAnswer = document.querySelector('input[name="answer3"]:checked');
  if (selectedAnswer) {
      document.getElementById('question-container3').style.display ='none';
      document.getElementById('result-container').style.display='block';
      window.selectedValue3 = selectedAnswer.value;
      //リザルト画面


      // 文章を追加
      var resultDiv = document.querySelector('#result-container .result');
      resultDiv.innerHTML = `あなたは犬が${window.selectedValue1}で<br>猫が${window.selectedValue2}で<br>アザラシが${window.selectedValue3}です。`;


  } else {
    alert('回答を選択してください。');
  }
});
document.getElementById('next-button4').addEventListener('click',function(){
  location.reload()
})

